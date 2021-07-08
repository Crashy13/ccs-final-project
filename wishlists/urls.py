from django.urls import path
from .views import WishlistListAPIView

app_name = 'wishlist'

urlpatterns = [
    path('', WishlistListAPIView.as_view(), name='wishlist_list'),
]
