from django.db import models

# Create your models here.
from movies.models import Movie
from users.models import User


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    description = models.TextField()
    score = models.IntegerField()
