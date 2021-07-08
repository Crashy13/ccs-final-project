from rest_framework import generics
from .models import Review
from .serializers import ReviewSerializer
from .permissions import IsAuthOrReadOnly

class ReviewListAPIView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return Review.objects.filter(author=user)

class ReviewDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_class = (IsAuthOrReadOnly,)
