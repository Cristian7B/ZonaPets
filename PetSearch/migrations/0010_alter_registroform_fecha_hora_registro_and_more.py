# Generated by Django 5.0 on 2024-04-23 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PetSearch', '0009_alter_registroform_fecha_hora_registro'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registroform',
            name='fecha_hora_registro',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='registroformularioempresarial',
            name='fecha_hora_registro',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
