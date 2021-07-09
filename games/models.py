from django.db import models
from django.conf import settings

class Game(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    background_image = models.URLField()
    is_owned = BooleanField(default=True)

    # user_uploaded_image ImageField
    # api_image_url URLField


    def __str__(self):
        return self.name
