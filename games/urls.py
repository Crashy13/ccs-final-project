from django.urls import path, include
from .views import GameListAPIView, GameDetailAPIView, WishlistAPIView

app_name = 'games'

urlpatterns = [
    path('<int:pk>', GameDetailAPIView.as_view()),
    path('wishlist/', WishlistAPIView.as_view()),
    path('', GameListAPIView.as_view()),
]
