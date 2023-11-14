# myapp/models.py
from django.db import models

# PetSearch/models.py

class Pagina(models.Model):
    nombre = models.CharField(max_length=255)
    contenido = models.TextField()

    def __str__(self):
        return self.nombre

