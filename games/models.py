from django.db import models
from django.conf import settings
from accounts.models import User

class Game(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    # user_uploaded_image ImageField
    # api_image_url URLField


    def __str__(self):
        return self.name
