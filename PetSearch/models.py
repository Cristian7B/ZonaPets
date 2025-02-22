from django.db import models
from django.utils.timezone import now

class RegistroForm(models.Model):
    nombre_compania = models.CharField(max_length=255, default="Nombre de la compañía")
    telefono_usuario = models.CharField(max_length=20, blank=True, null=True)
    latitud = models.CharField(max_length=50)
    longitud = models.CharField(max_length=50)
    tipo_de_negocio = models.CharField(max_length=255, blank=True, null=True)
    fecha = models.DateTimeField(default=now)

    def __str__(self):
        return self.nombre_compania

class RegistroFormEmpresarial(models.Model):
    nombre_de_quien_registra = models.CharField(max_length=255, blank=True, null=True)
    telefono_usuario = models.CharField(max_length=20, blank=True, null=True)
    correo_electronico = models.EmailField(max_length=255, blank=True, null=True)
    nombre_compania = models.CharField(max_length=255, default="Nombre de la compañía")
    latitud = models.CharField(max_length=50)
    longitud = models.CharField(max_length=50)
    tipo_de_negocio = models.CharField(max_length=255, blank=True, null=True)
    fecha = models.DateTimeField(default=now)

    def __str__(self):
        return self.nombre_compania


class RegistroFinal(models.Model):
    registro_form = models.ForeignKey(RegistroForm, on_delete=models.CASCADE, blank=True, null=True)
    registro_form_empresarial = models.ForeignKey(RegistroFormEmpresarial, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.nombre_compania
