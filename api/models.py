import uuid
import datetime

from django.db import models
from django.utils.translation import gettext_lazy as _


from users.models import ProfileUser


class Note(models.Model):
    owner = models.ForeignKey(ProfileUser, on_delete=models.CASCADE)
    body = models.CharField(_('Note'), max_length=6000)
    updated = models.DateField(_('Date'), default=datetime.date.today)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    class Meta:
        ordering = ('-updated',)

    def __str__(self):
        return self.body
