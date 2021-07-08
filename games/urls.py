from django.urls import path, include
from .views import GameListAPIView

app_name = 'games'

urlpatterns = [
    path('', GameListAPIView.as_view()),
]
