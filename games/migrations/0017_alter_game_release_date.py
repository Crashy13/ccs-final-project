# Generated by Django 3.2.5 on 2021-07-26 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0016_auto_20210726_1914'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='release_date',
            field=models.DateField(null=True),
        ),
    ]
