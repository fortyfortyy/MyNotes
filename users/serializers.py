from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

from django.core import exceptions
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _

from api.models import ProfileUser


class RegisterSerializer(serializers.ModelSerializer):
    """
    Serializer for creating user account
    """
    password = serializers.CharField(write_only=True, max_length=128)
    password2 = serializers.CharField(write_only=True, max_length=128)

    def validate(self, data):
        """
        Check if the given passwords are the same
        """
        if data['password'] != data['password2']:
            raise serializers.ValidationError({'password2': _("The passwords fields didn't match.")})
        elif len(data['password']) > 128 or len(data['password2']) > 128:
            raise serializers.ValidationError("passwords are too long")

        del data['password2']
        return data

    def create(self, validated_data):
        user = ProfileUser.objects.create_user(email=validated_data['email'],
                                               first_name=validated_data['first_name'],
                                               password=validated_data['password'])
        return user


    class Meta:
        model = ProfileUser
        fields = ('email', 'password', 'first_name', 'password2')


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
    """
    Serializer for sending reset password link to given email.
    """
    email = serializers.EmailField(max_length=255, write_only=True, required=True)

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
    """
    Serializer for password change endpoint.
    """
    model = ProfileUser
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
