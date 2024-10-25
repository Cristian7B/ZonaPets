# Generated by Django 5.0.1 on 2024-01-26 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pagina',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('contenido', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='registrofinal2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_compañia', models.CharField(max_length=150)),
                ('latitud', models.CharField(max_length=150)),
                ('longitud', models.CharField(max_length=150)),
                ('correo_electronico', models.CharField(max_length=150, null=True)),
                ('telefono_usuario', models.CharField(blank=True, max_length=12, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='registroform',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_compañia', models.CharField(max_length=75)),
                ('telefono_usuario', models.CharField(blank=True, max_length=12, null=True)),
                ('latitud', models.CharField(max_length=100)),
                ('longitud', models.CharField(max_length=75)),
            ],
        ),
        migrations.CreateModel(
            name='registroformularioempresarial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_de_quien_registra', models.CharField(blank=True, max_length=100, null=True)),
                ('telefono_usuario', models.CharField(blank=True, max_length=12, null=True)),
                ('correo_electronico', models.CharField(max_length=100)),
                ('nombre_compañia', models.CharField(max_length=75)),
                ('latitud', models.CharField(max_length=100)),
                ('longitud', models.CharField(max_length=100)),
            ],
        ),
    ]
