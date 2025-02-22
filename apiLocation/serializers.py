from rest_framework import serializers
from PetSearch.models import RegistroFinal, RegistroForm, RegistroFormEmpresarial

class RegistroFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroForm
        fields = '__all__'

class RegistroFormEmpresarialSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroFormEmpresarial
        fields = '__all__'

class RegistroFinalSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroFinal
        fields = []  

    def to_representation(self, instance):
        if instance.registro_form:
            return RegistroFormSerializer(instance.registro_form).data
        elif instance.registro_form_empresarial:
            return RegistroFormEmpresarialSerializer(instance.registro_form_empresarial).data
        return {}
