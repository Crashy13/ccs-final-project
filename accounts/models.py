from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    friends = models.ManyToManyField("User", blank=True)

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    avatar = models.ImageField(upload_to='profiles/')
    display_name = models.CharField(max_length=50)

    def __str__(self):
        return self.display_name
