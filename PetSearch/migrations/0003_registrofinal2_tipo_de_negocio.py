# Generated by Django 5.0 on 2024-04-08 23:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PetSearch', '0002_registroformularioempresarial_tipo_de_negocio'),
    ]

    operations = [
        migrations.AddField(
            model_name='registrofinal2',
            name='tipo_de_negocio',
            field=models.CharField(blank=True, max_length=75, null=True),
        ),
    ]
