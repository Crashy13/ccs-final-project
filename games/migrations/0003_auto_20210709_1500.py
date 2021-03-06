# Generated by Django 3.2.5 on 2021-07-09 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0002_auto_20210708_2059'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='game',
            name='description',
        ),
        migrations.AddField(
            model_name='game',
            name='background_image',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='game',
            name='platforms',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='game',
            name='released',
            field=models.DateField(blank=True, null=True),
        ),
    ]
