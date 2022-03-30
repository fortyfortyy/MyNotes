import uuid
import datetime

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core.validators import validate_email
from django.db import models
from django.utils.translation import gettext_lazy as _


class MyAccountManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of username.
    """
    def create_user(self, email, first_name, password=None):
        """
        Create and save a User with the given email, first name, last name and password.
        """
        if not email:
            raise ValueError("User must have an email address.")
        if not first_name:
            raise ValueError("User must have a first name.")

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
        )
        user.is_admin = False
        user.is_superuser = False
        user.is_staff = False
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, password):
        if password is None:
            raise TypeError('Superuser must have a password.')
        user = self.create_user(
            email=self.normalize_email(email),
            first_name=first_name,
            password=password,
        )
        user.is_admin = True
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class ProfileUser(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(_('First Name'), max_length=150)
    email = models.EmailField(
        _('Email'),
        max_length=255,
        unique=True,
        validators=[validate_email],
    )
    is_active = models.BooleanField(
        _('Active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )
    is_staff = models.BooleanField(
        _('staff status'),
        default=False,
        help_text=_('Designates whether the user can log into this admin site.'),
    )

    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    date_joined = models.DateField(_('Date Joined'), default=datetime.date.today)

    objects = MyAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name']

    def __str__(self):
        return self.first_name

    def clean(self):
        super().clean()
        self.email = self.__class__.objects.normalize_email(self.email)
