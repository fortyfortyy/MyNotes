import asyncio

from rest_framework import generics, permissions
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

from django.utils.http import urlsafe_base64_decode

from api.utils import send_reset_password_email
from users.models import ProfileUser
from users.utils import account_token
from users.serializers import MyTokenObtainPairSerializer, ForgottenPasswordSerializer, \
    ChangePasswordSerializer, RegisterSerializer


class RegisterUserView(generics.CreateAPIView):
    """
    Create new user account
    """
    model = ProfileUser
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RegisterSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    """
    Checks if the given credentials (login and password) are valid, then set the new token session and log in
    """
    serializer_class = MyTokenObtainPairSerializer


class ForgottenPasswordView(generics.CreateAPIView):
    """
    Search user by given email, then send reset link
    """
    serializer_class = ForgottenPasswordSerializer
    model = ProfileUser

    async def post(self, request, *args, **kwargs):
        serialized_form = self.get_serializer(data=request.data)
        if serialized_form.is_valid():
            email = serialized_form.validated_data['email']
            try:
                profile = self.model.objects.get(email=email)
            except self.model.DoesNotExist:
                profile = None

            if profile:
                send_email = asyncio.create_task(send_reset_password_email(profile))
                await send_email

        headers = self.get_success_headers(serialized_form.data)
        return Response(serialized_form.data, status=status.HTTP_200_OK, headers=headers)


class ChangePasswordView(generics.UpdateAPIView):
    """
    Checks if token and uidb64 is valid for a specific user, then set the new passwd
    """
    queryset = ProfileUser
    token_generator = account_token
    serializer_class = ChangePasswordSerializer

    def get_user(self, uidb64=None, queryset=None):
        try:
            # urlsafe_base64_decode() decodes to bytestring
            uid = urlsafe_base64_decode(uidb64).decode()
            user = queryset.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, queryset.DoesNotExist):
            user = None
        return user

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        user = self.get_user(self.kwargs['uidb64'], queryset)
        if user is not None:
            token = self.kwargs['token']
            if self.token_generator.check_token(user=user, token=token):
                return user

            user = None
        return user

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        if user is None:
            return Response({"User": "Invalid token or uidb"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user.set_password(serializer.data.get('password1'))
            user.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
