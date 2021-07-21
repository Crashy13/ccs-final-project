from django.urls import include, path;
from . import views

urlpatterns = [
    path('profiles/user/', views.ProfileDetailAPIView.as_view()),
    path('profiles/user/<int:pk>/', views.ReviewDetailAPIView.as_view(), name='review_detail'),
    path('profiles/user/reviews/', views.ReviewListAPIView.as_view(), name='review_list'),
    path('profiles/add_follower/', views.ProfileAddFollowerAPIView.as_view()),
    path('profiles/', views.ProfileListAPIView.as_view()),
]
