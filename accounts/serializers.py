from django.contrib.auth import get_user_model
from rest_framework import serializers
from reviews.models import Review
from .models import Profile

User = get_user_model()


class ReviewSerializer(serializers.ModelSerializer):
    is_owner = serializers.SerializerMethodField('get_owner_status')


    def get_owner_status(self, obj):
        return obj.author == self.context['request'].user

    class Meta:
        model = Review
        fields = ['id', 'game', 'title', 'author', 'rating', 'body', 'created_at', 'is_owner']

# class ReviewListingField(serializers.RelatedField):
#     def to_representation(self, value):
#         title = (value.title)


class FriendSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'


class FollowerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ('friends',)


class ProfileSerializer(serializers.ModelSerializer):
    friends = FriendSerializer(many=True, read_only=True)
    reviews = ReviewSerializer(many=True, read_only=True)


    class Meta:
        model = Profile
        fields = ['id', 'user', 'avatar', 'display_name', 'friends', 'reviews']

    # def update(self, instance, validated_data):
    #     import pdb; pdb.set_trace()
    #     user = validated_data.get('user')

        # user.profile.friends targets the many to many relationship we're trying to add to
