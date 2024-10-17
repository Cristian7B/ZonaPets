from django.shortcuts import render
from rest_framework import generics
from PetSearch.models import registrofinal2
from .serializers import UbicacionSerializer

class UbicacionList(generics.ListAPIView):
    queryset = registrofinal2.objects.all()
    serializer_class = UbicacionSerializer
