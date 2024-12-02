from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegistroFormSerializer, RegistroFormularioEmpresarialSerializer

class ProcesarFormularioView(APIView):
    def post(self, request):
        serializer = RegistroFormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensaje": "¡La empresa ha sido registrada!"}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class ProcesarFormularioEmpresaView(APIView):
    def post(self, request):
        serializer = RegistroFormularioEmpresarialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensaje": "¡La empresa ha sido registrada!"}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
