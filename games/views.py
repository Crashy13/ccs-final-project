from rest_framework import generics
from .models import Game
from .serializers import GameSerializer
from .permissions import IsAuthOrReadOnly



class GameListAPIView(generics.ListCreateAPIView):
    serializer_class = GameSerializer
    permission_class = (IsAuthOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        user = self.request.user
        is_owned = self.request.query_params.get('is_owned')
        play_status = self.request.query_params.get('play_status')
        queryset = Game.objects.filter(owner=user).filter(is_owned=True).order_by('name')

        # try:
        #     # import pdb; pdb.set_trace()
        #     is_owned = bool(self.kwargs['is_owned'])
        #     return Game.objects.filter(is_owned=is_owned)
        # except:
        #     return queryset

        if play_status is not None and play_status == "UNSTARTED":
            return Game.objects.filter(play_status="UNSTARTED").filter(owner=user).filter(is_owned=True).order_by('name')
        elif play_status is not None and play_status == "PLAYING":
            return Game.objects.filter(play_status="PLAYING").filter(owner=user).filter(is_owned=True).order_by('name')
        elif play_status is not None and play_status == "COMPLETED":
            return Game.objects.filter(play_status="COMPLETED").filter(owner=user).filter(is_owned=True).order_by('name')
        # return queryset

        if is_owned is not None and is_owned == 'true':
            return Game.objects.filter(is_owned=True).filter(owner=user).order_by('-play_status')
        elif is_owned is not None and is_owned == 'false':
            return Game.objects.filter(is_owned=False).filter(owner=user).order_by('name')
        # return queryset




class GameDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = GameSerializer
    permission_class = (IsAuthOrReadOnly,)


    def get_queryset(self):
        queryset = Game.objects.all()
        user = self.request.user
        is_owned = self.request.query_params.get('is_owned')

        if is_owned is not None and is_owned == 'true':
            return Game.objects.filter(is_owned=True).filter(owner=user)
        elif is_owned is not None and is_owned == 'false':
            return Game.objects.filter(is_owned=False).filter(owner=user)

        return queryset

# class GameReviewListAPIView(generics.RetrieveAPIView):
#     serializer_class = ReviewSerializer
#
