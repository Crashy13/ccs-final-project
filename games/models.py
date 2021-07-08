from django.db import models
from django.conf import settings

class Game(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    # user_uploaded_image ImageField
    # api_image_url URLField


    def __str__(self):
        return self.name
