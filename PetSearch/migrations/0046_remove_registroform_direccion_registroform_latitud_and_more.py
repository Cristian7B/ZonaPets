# Generated by Django 5.0 on 2023-12-12 21:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PetSearch', '0045_registroform'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registroform',
            name='direccion',
        ),
        migrations.AddField(
            model_name='registroform',
            name='latitud',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='registroform',
            name='longitud',
            field=models.IntegerField(default=0),
        ),
    ]
