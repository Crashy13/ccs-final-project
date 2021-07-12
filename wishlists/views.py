from rest_framework import generics
from .models import Wishlist
from .serializers import WishlistSerializer
from .permissions import IsAuthOrReadOnly



class WishlistListAPIView(generics.ListCreateAPIView):
    serializer_class = WishlistSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return Wishlist.objects.filter(owner=user, is_owned=False)


class WishlistDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = WishlistSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return Wishlist.objects.filter(owner=user)
