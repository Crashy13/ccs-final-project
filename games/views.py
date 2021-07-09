from rest_framework import generics
from .models import Game
from .serializers import GameSerializer



class GameListAPIView(generics.ListCreateAPIView):
    serializer_class = GameSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return Game.objects.filter(owner=user)
