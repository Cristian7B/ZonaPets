# Generated by Django 5.0 on 2025-02-16 20:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PetSearch', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registrofinal',
            name='registro_form',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='PetSearch.registroform'),
        ),
        migrations.AlterField(
            model_name='registrofinal',
            name='registro_form_empresarial',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='PetSearch.registroformempresarial'),
        ),
    ]
