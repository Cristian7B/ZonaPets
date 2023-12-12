# myapp/models.py
from django.db import models

# PetSearch/models.py

class Pagina(models.Model):
    nombre = models.CharField(max_length=255)
    contenido = models.TextField()

class registroform(models.Model):
    nombre_compañia = models.CharField(max_length=75)
    nombre_usuario = models.CharField(max_length=100)
    telefono_usuario = models.IntegerField()
    direccion = models.CharField(max_length=150)
