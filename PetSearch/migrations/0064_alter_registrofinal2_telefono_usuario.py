# Generated by Django 5.0.1 on 2024-01-19 22:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PetSearch', '0063_alter_registroform_telefono_usuario_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registrofinal2',
            name='telefono_usuario',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
    ]
