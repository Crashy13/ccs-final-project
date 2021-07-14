from django.urls import include, path
from . import views

urlpatterns = [
    path('profiles/user/', views.ProfileDetailAPIView.as_view()),
    path('profiles/<int:pk>/add_follower/', views.ProfileAddFollowerAPIView.as_view()),
    path('profiles/', views.ProfileListAPIView.as_view()),
]
