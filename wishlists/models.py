from django.db import models
from django.conf import settings

class Wishlist(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    background_image = models.URLField(null=True, blank=True)
    is_owned = models.BooleanField(default=False, null=True, blank=True)


    def __str__(self):
        return self.name
