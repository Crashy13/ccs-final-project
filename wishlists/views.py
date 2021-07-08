from rest_framework import generics
from .models import Wishlist
from .serializers import WishlistSerializer



class WishlistListAPIView(generics.ListCreateAPIView):
    queryset = Wishlist.objects.all()
    serializer_class = WishlistSerializer
