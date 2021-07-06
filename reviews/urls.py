from django.urls import path
from .views import ReviewListAPIView, ReviewDetailAPIView

app_name = 'reviews'

urlpatterns = [
    path('<int:pk>', ReviewDetailAPIView.as_view(), name='review_detail'),
    path('', ReviewListAPIView.as_view(), name='review_list'),
]
