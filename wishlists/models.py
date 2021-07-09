from django.db import models
from django.conf import settings

class Wishlist(models.Model):
    pass

    def __str__(self):
        return self.name
