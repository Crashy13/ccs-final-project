from django.urls import path
from .views import WishlistListAPIView, WishlistDetailAPIView

app_name = 'wishlist'

urlpatterns = [
    path('<int:pk>', WishlistDetailAPIView.as_view(), name='wishlist_detail'),
    path('', WishlistListAPIView.as_view(), name='wishlist_list'),
]
