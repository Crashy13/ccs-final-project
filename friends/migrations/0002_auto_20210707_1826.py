# Generated by Django 3.2.5 on 2021-07-07 18:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('friends', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Friend_Request',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('from_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='from_user', to=settings.AUTH_USER_MODEL)),
                ('to_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='to_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='friendrequest',
            name='receiver',
        ),
        migrations.RemoveField(
            model_name='friendrequest',
            name='sender',
        ),
        migrations.DeleteModel(
            name='FriendList',
        ),
        migrations.DeleteModel(
            name='FriendRequest',
        ),
    ]