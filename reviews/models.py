from django.conf import settings;
from django.db import models;
from django.core.validators import MaxValueValidator, MinValueValidator;
from games.models import Game;


class Review(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='game', null=True)
    title = models.CharField(max_length=255)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name='author')
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)], blank=True, null=True)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.title
