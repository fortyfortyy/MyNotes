import uuid
import datetime

from django.utils.translation import gettext_lazy as _
from django.db import models


class Note(models.Model):
    body = models.CharField(_('Note'), max_length=500)
    updated = models.DateField(_('Date'), default=datetime.date.today)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    class Meta:
        ordering = ('-updated',)

    def __str__(self):
        return self.body
