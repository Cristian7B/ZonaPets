# Generated by Django 5.0 on 2024-02-12 21:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='ciudad',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='appuser',
            name='telefono',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
