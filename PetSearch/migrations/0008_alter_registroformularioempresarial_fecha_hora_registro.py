# Generated by Django 5.0 on 2024-04-22 23:06

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PetSearch', '0007_registroform_fecha_hora_registro_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registroformularioempresarial',
            name='fecha_hora_registro',
            field=models.DateTimeField(default=django.utils.timezone.now, null=True),
        ),
    ]
