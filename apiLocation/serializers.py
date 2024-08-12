from rest_framework import serializers
from PetSearch.models import registrofinal2

class UbicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = registrofinal2
        fields = '__all__'