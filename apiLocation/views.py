from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from PetSearch.models import RegistroFinal
from .serializers import RegistroFinalSerializer

class RegistroFinalListView(APIView):
    def get(self, request):
        registros = RegistroFinal.objects.select_related('registro_form', 'registro_form_empresarial').all()
        serializer = RegistroFinalSerializer(registros, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
