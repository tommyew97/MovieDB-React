from django.db import models
from pygments.lexers import get_all_lexers

from users.models import User

LEXERS = [item for item in get_all_lexers() if item[1]]


class Movie(models.Model):
    title = models.CharField(max_length=100, default="Unknown")
    genre = models.CharField(max_length=100)
    year = models.IntegerField(default=2019)
    length = models.IntegerField(default=90)  # Integer in minutes
    description = models.TextField()
    image = models.CharField(max_length=200, default=".")

    class Meta:
        ordering = ['year']

