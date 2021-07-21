from rest_framework import generics
from .models import Review
from .serializers import ReviewSerializer
from .permissions import IsAuthOrReadOnly

class ReviewListAPIView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    permission_class = (IsAuthOrReadOnly,)

    def perform_create(self, serializer):
        # import pdb; pdb.set_trace()
        serializer.save(author=self.request.user)

    def get_queryset(self):
        author = self.request.username
        return Review.objects.filter(author=author)

class ReviewDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_class = (IsAuthOrReadOnly,)

class GameReviewListAPIView(generics.ListAPIView):
    serializer_class = ReviewSerializer
    permission_class = (IsAuthOrReadOnly,)

    def get_queryset(self):
        # import pdb; pdb.set_trace()
        game = self.request.query_params.get('game')
        return Review.objects.filter(game__name=game)
