# myapp/models.py
from django.db import models

class Pagina(models.Model):
    nombre = models.CharField(max_length=100)
