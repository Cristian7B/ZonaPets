from rest_framework import serializers
from PetSearch.models import registroform, registroformularioempresarial

class RegistroFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = registroform
        fields = ['nombre_compañia', 'telefono_usuario', 'tipo_de_negocio', 'latitud', 'longitud']

class RegistroFormularioEmpresarialSerializer(serializers.ModelSerializer):
    class Meta:
        model = registroformularioempresarial
        fields = [
            'nombre_de_quien_registra', 'telefono_usuario', 
            'correo_electronico', 'tipo_de_negocio', 
            'nombre_compañia', 'latitud', 'longitud'
        ]
