from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Game
from .serializers import GameSerializer



class GameViewSet(ReadOnlyModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
