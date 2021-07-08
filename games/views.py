from rest_framework import generics
from .models import Game
from .serializers import GameSerializer



class GameListAPIView(generics.ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
