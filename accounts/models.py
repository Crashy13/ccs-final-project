from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import path

class User(AbstractUser):
    pass

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    avatar = models.ImageField(upload_to='profiles/', blank=True)
    display_name = models.CharField(max_length=50, unique=True)
    friends = models.ManyToManyField("self", blank=True)

    def __str__(self):
        return self.display_name
