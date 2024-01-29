from django.http import HttpResponse
from django.http import HttpRequest
from django.http import JsonResponse
from .forms import Formularioregistroform     
from .forms import Formularioregistroformempresarial                                                                  
from django.shortcuts import render, redirect
from .models import Pagina
from django.template import loader
from django.views.decorators.csrf import csrf_protect
from .models import registroform
from django.db import connections
from .models import registrofinal2
from rest_framework import status

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from .serializers import UserSerializer


@api_view(['POST'])
def signup(request):
    return Response({})

@api_view(['POST'])
def login(request):
    return Response({})

@api_view(['GET'])
def test_token(request):
    return Response({})


# @api_view(['POST'])
# def signup(request):
#     serializer = UserSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         user = User.objects.get(username=request.data['username'])
#         user.set_password(request.data['password'])
#         user.save()
#         token = Token.objects.create(user=user)
#         return Response({'token': token.key, 'user': serializer.data})
#     return Response(serializer.errors, status=status.HTTP_200_OK)

# @api_view(['POST'])
# def login(request):
#     user = get_object_or_404(User, username=request.data['username'])
#     if not user.check_password(request.data['password']):
#         return Response("missing user", status=status.HTTP_404_NOT_FOUND)
#     token, created = Token.objects.get_or_create(user=user)
#     serializer = UserSerializer(user)
#     return Response({'token': token.key, 'user': serializer.data})

# @api_view(['GET'])
# @authentication_classes([SessionAuthentication, TokenAuthentication])
# @permission_classes([IsAuthenticated])
# def test_token(request):
#     return Response("passed!")



def inicio(request):
    pagina = Pagina.objects.first()
    template = loader.get_template("ZonaPets/index.html")
    documento = template.render({'pagina': pagina})
    return HttpResponse(documento)

def acercade(request):
    return render(request, "ZonaPets/acercade.html")

def contacto(request):
    return render(request, "ZonaPets/contacto.html")

def preguntasfrecuentes(request):
    return render(request, "ZonaPets/preguntas-frecuentes.html")

def equipo(request):
    return render(request, "ZonaPets/equipo.html")

def prueba(request):
    return render(request, "ZonaPets/pruebaicon.html")

def micuenta(request):
    return render(request, "ZonaPets/micuenta.html")

def terminosycondiciones(request):
    return render(request, "ZonaPets/terminos.html")

def asesores(request):
    return render(request, "ZonaPets/asesores.html")

def convenios(request):
    return render(request, "ZonaPets/convenios.html")

def pagos(request):
    return render(request, "ZonaPets/pagos.html")

def nuestrosservicios(request):
    return render(request, "ZonaPets/nuestros-servicios.html")

def afiliate(request):
    return render(request, "ZonaPets/afiliate.html")

def formulario(request):
    return render(request, "ZonaPets/formulario.html")

def vista_bar(request):
    return render(request, "ZonaPets/barsiteapp.html")

def vista_barregistrar(request):
    return render(request, "ZonaPets/barregistrar.html")

def mapa_petfriendly(request):
    # Obtén todos los registros de la base de datos usando el modelo
    ubicaciones = registrofinal2.objects.all()

    # Procesa los resultados según sea necesario y pásalos al template
    ubicaciones_dict = [{'nombre_compañia': ubicacion.nombre_compañia, 'telefono_usuario': ubicacion.telefono_usuario, 'latitud': ubicacion.latitud, 'longitud': ubicacion.longitud} for ubicacion in ubicaciones]

    return render(request, "ZonaPets/barmapa.html", {"ubicaciones": ubicaciones_dict})

class Formularioviewregistroform(HttpRequest):

    def index(request):
        empresa = Formularioregistroform()
        return render(request, "ZonaPets/barregistrar.html", { "form":empresa})
    @csrf_protect
    def procesar_formulario(request):
        empresa = Formularioregistroform(request.POST)
        if empresa.is_valid():
            empresa.save()
            empresa = Formularioregistroform()

        return render(request, "ZonaPets/barregistrar.html", { "form":empresa, "mensaje":"¡La empresa ha sido registrada!"})
    
    def mostrar_mapa(request):
        ubicaciones = registroform.objects.all()
        return render(request, "ZonaPets/mapa.html", {"ubicaciones": ubicaciones})

class Formularioviewregistroformempresarial(HttpRequest):

    def index(request):
        empresa = Formularioregistroformempresarial()
        return render(request, "ZonaPets/barregistrarempresarial.html", { "form":empresa})
    
    def procesar_formulario(request):
        empresa = Formularioregistroformempresarial(request.POST)
        if empresa.is_valid():
            empresa.save()
            empresa = Formularioregistroformempresarial()

        return render(request, "ZonaPets/barregistrarempresarial.html", { "form":empresa, "mensaje":"¡La empresa ha sido registrada!"})



