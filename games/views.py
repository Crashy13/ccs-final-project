from rest_framework import generics
from .models import Game
from .serializers import GameSerializer



class GameListAPIView(generics.ListCreateAPIView):
    serializer_class = GameSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        user = self.request.user
        is_owned = self.request.query_params.get('is_owned')

        # try:
        #     import pdb; pdb.set_trace()
        #     is_owned = bool(self.kwargs['is_owned'])
        #     return Game.objects.filter(is_owned=is_owned)
        # except:
        #     return queryset

        if is_owned is not None and is_owned == 'true':
            return Game.objects.filter(is_owned=True).filter(owner=user)
        elif is_owned is not None and is_owned == 'false':
            return Game.objects.filter(is_owned=False).filter(owner=user)

        return queryset



class GameDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = GameSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return Game.objects.filter(owner=user)
