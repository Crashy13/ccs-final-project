from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import path

class User(AbstractUser):
    pass

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    avatar = models.ImageField(upload_to='profiles/')
    display_name = models.CharField(max_length=50, unique=True)
    friends = models.ManyToManyField("self")

    def __str__(self):
        return self.display_name

class FriendRequest(models.Model):
    from_user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='from_user')
    to_user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='to_user')
