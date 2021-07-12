from django.urls import path, include
from .views import GameListAPIView, GameDetailAPIView

app_name = 'games'

urlpatterns = [

    path('<int:pk>/', GameDetailAPIView.as_view()),
    # path('<int:is_owned>/', GameListAPIView.as_view()),
    path('', GameListAPIView.as_view()),
]
