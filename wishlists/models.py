from django.db import models
from django.conf import settings

class Wishlist(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name
