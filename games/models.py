from django.db import models
from django.conf import settings

class Game(models.Model):
    name = models.CharField(max_length=255)
    screenshot = models.ImageField(upload_to='games/')
    description = models.TextField()
