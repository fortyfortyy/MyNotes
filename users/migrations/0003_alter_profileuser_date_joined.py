# Generated by Django 4.0.1 on 2022-01-20 20:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_profileuser_is_staff'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileuser',
            name='date_joined',
            field=models.DateField(default=datetime.date.today, verbose_name='Date Joined'),
        ),
    ]
