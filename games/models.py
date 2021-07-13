from django.db import models
from django.conf import settings

class Game(models.Model):

    COMPLETED = 'COMPLETED'
    PLAYING = 'PLAYING'
    UNSTARTED = 'UNSTARTED'

    STATUS_CHOICES = [
        (COMPLETED, 'Completed'),
        (PLAYING, 'Playing'),
        (UNSTARTED, 'Unstarted')
    ]

    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=255, null=True, blank=True, unique=True)
    background_image = models.URLField(null=True, blank=True)
    is_owned = models.BooleanField(default=False, null=True, blank=True)
    play_status = models.CharField(max_length=15, choices=STATUS_CHOICES, default=UNSTARTED, null=True, blank=True)
    date_added = models.DateField(auto_now_add=True, null=True)

    # user_uploaded_image ImageField
    # api_image_url URLField


    def __str__(self):
        return self.name
