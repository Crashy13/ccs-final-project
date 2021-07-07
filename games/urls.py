from django.urls import path, include
from django.views.generic import RedirectView
from rest_framework import routers
from .views import GameViewSet

games_api_router = routers.SimpleRouter()
games_api_router.register('', GameViewSet)

urlpatterns = [
    path('', RedirectView.as_view(url='/games/api/')),
    path('games/api/', include(games_api_router.urls)),
]
