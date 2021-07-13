# Generated by Django 3.2.5 on 2021-07-12 20:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0009_delete_wishlist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='play_status',
            field=models.CharField(blank=True, choices=[('COMPLETED', 'Completed'), ('PLAYING', 'Playing'), ('NOT STARTED', 'Not started')], default='NOT STARTED', max_length=15, null=True),
        ),
    ]
