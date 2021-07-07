from django.conf import settings
from django.db import models


class Review(models.Model):
    game = models.CharField(max_length=255, null=True)
    title = models.CharField(max_length=255)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    rating = models.PositiveIntegerField(blank=True, null=True)
    body = models.TextField()

    def __str__(self):
        return self.title
