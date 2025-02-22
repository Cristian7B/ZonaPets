from rest_framework import serializers
from PetSearch.models import RegistroForm, RegistroFormEmpresarial

class RegistroFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroForm
        fields = ['nombre_compania', 'telefono_usuario', 'tipo_de_negocio', 'latitud', 'longitud', 'fecha']
        read_only_fields = ['fecha']  

class RegistroFormularioEmpresarialSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroFormEmpresarial
        fields = [
            'nombre_de_quien_registra', 'telefono_usuario', 
            'correo_electronico', 'tipo_de_negocio', 
            'nombre_compania', 'latitud', 'longitud', 'fecha'
        ]
        read_only_fields = ['fecha']
