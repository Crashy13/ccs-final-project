from rest_framework import generics
from .models import Wishlist
from .serializers import WishlistSerializer
from .permissions import IsAuthOrReadOnly



class WishlistListAPIView(generics.ListCreateAPIView):
    queryset = Wishlist.objects.all()
    serializer_class = WishlistSerializer


class WishlistDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wishlist.objects.all()
    serializer_class = WishlistSerializer
    
