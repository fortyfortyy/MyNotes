from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.sites.models import Site

#  imports needed for email
from django.core.mail import EmailMessage
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.template.loader import render_to_string

from users.models import ProfileUser
from users.utils import account_token

from mynotes import settings


@receiver(post_save, sender=ProfileUser)
def send_activate_link_account(sender, instance, created, **kwargs):
    """
    Send activation account link (that can be used once) to the given user's email.
    """
    profile = instance
    if not profile.is_active and created:
        current_domain = Site.objects.get_current().domain
        subject = 'Confirm your account...'
        message = render_to_string('emails/activate_account_email.html', {
            'profile': profile,
            'domain': current_domain,
            'uid': urlsafe_base64_encode(force_bytes(profile.pk)),
            'token': account_token.make_token(profile),
        })

        mail = EmailMessage(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            [profile.email],
        )
        mail.send()


@receiver(post_save, sender=ProfileUser)
def send_welcome_user_mail(sender, instance, created, **kwargs):
    """
    Send welcome message to the given user's email
    """
    profile = instance
    if profile.is_active and hasattr(profile, '_sendwelcomemessage'):

        subject = 'Welcome to MyNotes!'
        message = render_to_string('emails/welcome_email.html', {
            'profile': profile,
        })

        mail = EmailMessage(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            [profile.email],
        )
        mail.send()