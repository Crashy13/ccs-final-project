from django.urls import path, include
from .views import GameListAPIView, GameDetailAPIView, FriendGameListAPIView

app_name = 'games'

urlpatterns = [

    path('<int:pk>/', GameDetailAPIView.as_view()),
    path('owners/', FriendGameListAPIView.as_view(), name='friend_game_list_detail'),
    # path('<int:is_owned>/', GameListAPIView.as_view()),
    path('', GameListAPIView.as_view()),
]
