from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    is_owner = serializers.SerializerMethodField('get_owner_status')

    def get_owner_status(self, obj):
        return obj.author == self.context['request'].user

    class Meta:
        model = Review
        fields = '__all__'
