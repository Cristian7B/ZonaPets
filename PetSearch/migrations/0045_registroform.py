# Generated by Django 5.0 on 2023-12-05 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PetSearch', '0044_auto_20231124_1916'),
    ]

    operations = [
        migrations.CreateModel(
            name='registroform',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_compañia', models.CharField(max_length=75)),
                ('nombre_usuario', models.CharField(max_length=100)),
                ('telefono_usuario', models.IntegerField()),
                ('direccion', models.CharField(max_length=150)),
            ],
        ),
    ]
