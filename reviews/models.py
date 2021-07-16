from django.conf import settings
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Review(models.Model):
    game = models.CharField(max_length=255, null=True)
    title = models.CharField(max_length=255)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)], blank=True, null=True)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.title
