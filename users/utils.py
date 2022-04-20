from six import text_type
import threading

#  imports needed for email
from django.core.mail import EmailMessage
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib.sites.models import Site

#generate token
from django.contrib.auth.tokens import PasswordResetTokenGenerator
# ---
from templated_email import get_templated_mail

from mynotes import settings


class EmailThread(threading.Thread):
    def __init__(self, email_message):
        self.email_message = email_message
        threading.Thread.__init__(self)

    def run (self):
        self.email_message.send()


def send_html_mail(templated_email_to_send):
    EmailThread(templated_email_to_send).start()


class TokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (
                text_type(user.pk) + text_type(timestamp) +
                text_type(user.is_active)
        )


account_token = TokenGenerator()


def send_reset_password_email(profile):
    current_domain = Site.objects.get_current().domain
    email_template = get_templated_mail(
        template_name='password-reset_email.html',
        from_email=settings.EMAIL_HOST_USER,
        to=[profile.email],
        context={
            'profile': profile,
            'domain': current_domain,
            'uid': urlsafe_base64_encode(force_bytes(profile.id)),
            'token': account_token.make_token(profile),
        },
        template_prefix="emails/",
        template_suffix="html",
    )
    send_html_mail(email_template)

