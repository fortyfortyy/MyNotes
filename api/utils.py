from django.utils.http import urlsafe_base64_encode
from django.core.mail import EmailMessage
from django.utils.encoding import force_bytes
from django.template.loader import render_to_string
from django.contrib.sites.models import Site

from mynotes import settings
from users.utils import account_token

async def send_reset_password_email(profile):
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
    await mail.send()
