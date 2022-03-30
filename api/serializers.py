from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from django.core import exceptions
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _

from api.models import Note, ProfileUser


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('body', 'updated', 'id')

    # def to_representation(self, obj):
    #     return {
    #         "body": obj.body,
    #         "updated": obj.updated,
    #         "id": obj.id,
    #     }

    def validate_body(self, value):
        if len(value) > 6000:
            raise serializers.ValidationError('This field can only contain max 6000 characters.')


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    Update the access token with the user's first_name value
    """
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.first_name
        # ...

        return token


class ForgottenPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255, write_only=True, required=True)
    """
    Serializer for sending reset password link to given email.
    """
    def validate_email(self, value):
        errors = dict()
        try:
            validate_email(value)
        except exceptions.ValidationError as e:
            errors['email'] = list(e.message)

        if errors:
            raise serializers.ValidationError(errors)

        return value


class ChangePasswordSerializer(serializers.Serializer):
    model = ProfileUser
    """
    Serializer for password change endpoint.
    """

    password1 = serializers.CharField(max_length=128, required=True)
    password2 = serializers.CharField(max_length=128, required=True)

    def validate(self, data):
        """
        Check if the given passwords are the same
        """
        if data['password1'] != data['password2']:
            raise serializers.ValidationError({'password2': _("The passwords fields didn't match.")})
        elif len(data['password1']) > 128 or len(data['password2']) > 128:
            raise serializers.ValidationError("passwords are too long")
        return data
