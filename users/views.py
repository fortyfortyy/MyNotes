from rest_framework import generics, permissions
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework_simplejwt.views import TokenViewBase, TokenRefreshView
from rest_framework_simplejwt.exceptions import AuthenticationFailed, InvalidToken, TokenError

from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import smart_str

# from api.mixins import NotAllowedGetMethodMixin
from users.utils import send_reset_password_email
from users.utils import account_token
from users.models import ProfileUser
from users.serializers import CustomTokenObtainPairSerializer, ForgottenPasswordSerializer, \
    ChangePasswordSerializer, RegisterSerializer, InActiveUser


class RegisterUserView(generics.CreateAPIView):
    """
    Create new user account
    """
    model = ProfileUser
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RegisterSerializer


class ActivateAccountView(APIView):
    """
    Checks whether the link is valid for the given user.
    Then activate account.
    """
    model = ProfileUser
    renderer_classes = [JSONRenderer]

    def get(self, request, *args, **kwargs):
        try:
            uid = smart_str(urlsafe_base64_decode(kwargs['uidb64']))
            profile = self.model.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, KeyError, self.model.DoesNotExist):
            profile = None

        if profile is not None and account_token.check_token(profile, kwargs['token']):
            profile.is_active = True

            # Create temporary attribute to send welcome message
            # When it's done, delete that attribute
            try:
                profile._sendwelcomemessage = True
                profile.save()
            finally:
                del profile._sendwelcomemessage

            return Response({'account': 'Account has been activated!'}, status=status.HTTP_200_OK, content_type='application/javascript')

        content = {'account': 'Your link is invalid or your account is already activated'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST, content_type='application/javascript')


class CustomTokenObtainPairView(TokenViewBase):
    """
    Takes a set of user credentials and returns an access and refresh JSON web
    token pair to prove the authentication of those credentials.

    Returns HTTP 406 when user is inactive and HTTP 401 when login credentials are invalid.
    """
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except AuthenticationFailed:
            raise InActiveUser()
        except TokenError:
            raise InvalidToken()

        return Response(serializer.validated_data, status=status.HTTP_200_OK)


class CustomTokenRefreshView(TokenRefreshView):
    """
    Refresh given old token with the new one
    method get() is not allowed by mixin
    """
    pass

class ForgottenPasswordView(generics.CreateAPIView):
    """
    Search user by given email, then send reset link
    """
    serializer_class = ForgottenPasswordSerializer
    model = ProfileUser

    def post(self, request, *args, **kwargs):
        serialized_form = self.get_serializer(data=request.data)
        if serialized_form.is_valid():
            email = serialized_form.validated_data['email']
            try:
                profile = self.model.objects.get(email=email)
            except self.model.DoesNotExist:
                profile = None

            if profile:
                send_reset_password_email(profile)

        headers = self.get_success_headers(serialized_form.data)
        return Response(serialized_form.data, status=status.HTTP_200_OK, headers=headers, content_type='application/javascript')


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
            return Response({"User": "Invalid token or uidb"}, status=status.HTTP_400_BAD_REQUEST, content_type='application/javascript')

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user.set_password(serializer.data.get('password1'))
            user.save()
            return Response(serializer.data, status=status.HTTP_200_OK, content_type='application/javascript')

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST, content_type='application/javascript')
