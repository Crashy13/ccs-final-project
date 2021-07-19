from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    is_owner = serializers.SerializerMethodField('get_owner_status')


    def get_owner_status(self, obj):
        return obj.author == self.context['request'].user



    class Meta:
        model = Review
        fields = ['id', 'game', 'title', 'author', 'rating', 'body', 'created_at', 'is_owner']

        def validate_rating(self, value):
            if value < 1 or value > 5:
                raise searializers.ValidationError('Rating has to be between 1 and 5')
            return value
