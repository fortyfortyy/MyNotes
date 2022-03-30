from django.conf import settings
from django.contrib.sites.models import Site
from django.core.mail import EmailMessage
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status

from api.serializers import NoteSerializer, MyTokenObtainPairSerializer, ForgottenPasswordSerializer, \
    ChangePasswordSerializer
from api.models import Note
from users.models import ProfileUser
from users.utils import account_token


class MyTokenObtainPairView(TokenObtainPairView):
    """
    Checks if the given credentials (login and password) are valid, then set the new token session and return
    """
    serializer_class = MyTokenObtainPairSerializer


class NotesListView(generics.ListAPIView):
    """
    Return all user's notes
    """
    permission_classes = [IsAuthenticated]
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self):
        user = self.request.user.pk
        return Note.objects.filter(owner=user)


class NoteCreateView(generics.CreateAPIView):
    """
    Create a user's note
    """
    permission_classes = [IsAuthenticated]
    serializer_class = NoteSerializer

    def perform_create(self, serializer):
        user = self.request.user.pk
        profile = ProfileUser.objects.get(pk=user)
        serializer.save(owner=profile)


class NoteListView(generics.RetrieveUpdateDestroyAPIView):
    """
    Return a user's note
    """
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'
    lookup_url_kwarg = 'note_uuid'
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self):
        user = self.request.user.pk
        return Note.objects.filter(owner=user)


class ForgottenPasswordView(generics.CreateAPIView):
    """
    Search user by given email, then send reset link to that email
    """
    serializer_class = ForgottenPasswordSerializer
    model = ProfileUser

    def post(self, request, *args, **kwargs):
        serialized_form = self.get_serializer(data=request.data)
        if serialized_form.is_valid():
            email = serialized_form.validated_data['email']
            try:
                profile = ProfileUser.objects.get(email=email)
            except ProfileUser.DoesNotExist:
                print("Email doesn't exist")
            finally:
                if profile:
                    current_domain = Site.objects.get_current().domain
                    subject = 'Reset your account at MyNotes'
                    message = render_to_string('users/password_reset_email.html', {
                        'profile': profile,
                        'domain': current_domain,
                        'uid': urlsafe_base64_encode(force_bytes(profile.id)),
                        'token': account_token.make_token(profile),
                    })

                    mail = EmailMessage(
                        subject,
                        message,
                        settings.EMAIL_HOST_USER,
                        [profile.email],
                    )
                    mail.send()

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
