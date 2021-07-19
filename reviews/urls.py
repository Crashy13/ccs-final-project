from django.urls import path
from .views import ReviewListAPIView, ReviewDetailAPIView, GameReviewListAPIView

app_name = 'reviews'

urlpatterns = [
    path('games/', GameReviewListAPIView.as_view(), name='game_reviews_detail'),
    path('<int:pk>', ReviewDetailAPIView.as_view(), name='review_detail'),
    path('', ReviewListAPIView.as_view(), name='review_list'),
]
