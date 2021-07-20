from rest_framework import generics;
from reviews.models import Review;
from .models import Profile;
from .serializers import ProfileSerializer, ReviewSerializer;
from django.shortcuts import render, get_object_or_404;
from .permissions import IsAuthOrReadOnly;


class ProfileListAPIView(generics.ListCreateAPIView):
    serializer_class = ProfileSerializer
    permission_class = (IsAuthOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        queryset = Profile.objects.all()
        display_name = self.request.query_params.get('display_name')
        if display_name is not None:
            queryset = queryset.filter(display_name=display_name)
        return queryset


class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer
    permission_class = (IsAuthOrReadOnly,)

    def get_object(self):
        return get_object_or_404(Profile, user=self.request.user)

    def perform_update(self, serializer):
        # import pdb; pdb.set_trace()
        serializer.save(user=self.request.user)

class ReviewListAPIView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    permission_class = (IsAuthOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return Review.objects.filter(author=user)

class ReviewDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_class = (IsAuthOrReadOnly,)


class ProfileAddFollowerAPIView(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer



    def perform_update(self, serializer):
        import pdb; pdb.set_trace()
        # once you have the profile
        # add the self.request.user to the profile.friends relationship
        serializer.save()
