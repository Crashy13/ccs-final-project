from django.db import models
from django.conf import settings
from accounts.models import User

class Friend_Request(models.Model):
    from_user = models.ForeignKey(User, related_name='from_user', on_delete=models.CASCADE)
    to_user = models.ForeignKey(User, related_name='to_user', on_delete=models.CASCADE)

    # def send_friend_request(request, userID):
    #     from_user = request.user
    #     to_user = User.objects.get(id=userID)
    #     friend_request, created = Friend_Request.objects.get_or_create(from_user=from_user, to_user=to_user)
    #     if created:
    #         return HTTPResponse('friend request sent')
    #     else:
    #         return HTTPResponse('friend request was already sent')
