from six import text_type
import threading

#  imports needed for email
from django.core.mail import EmailMessage
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib.sites.models import Site
# ---
import time
#generate token
from django.contrib.auth.tokens import PasswordResetTokenGenerator
# ---

from mynotes import settings


class EmailThread(threading.Thread):
    def __init__(self, subject, html_content, recipient_list):
        self.subject = subject
        self.recipient_list = recipient_list
        self.html_content = html_content
        threading.Thread.__init__(self)

    def run (self):
        msg = EmailMessage(self.subject, self.html_content, settings.EMAIL_HOST_USER, self.recipient_list)
        msg.content_subtype = "html"
        msg.send()


def send_html_mail(subject, html_content, recipient_list):
    EmailThread(subject, html_content, recipient_list).start()


class TokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (
                text_type(user.pk) + text_type(timestamp) +
                text_type(user.is_active)
        )


account_token = TokenGenerator()


def send_reset_password_email(profile):
    current_domain = Site.objects.get_current().domain
    subject = 'Reset your password at MyNotes'
    message = render_to_string('users/password_reset_email.html', {
        'profile': profile,
        'domain': current_domain,
        'uid': urlsafe_base64_encode(force_bytes(profile.id)),
        'token': account_token.make_token(profile),
    })

    send_html_mail(subject, message, [profile.email])
