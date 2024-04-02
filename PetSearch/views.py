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

import requests
import json



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



def acercade(request):
    return render(request, "ZonaPets/acercade.html")

def contacto(request):
    return render(request, "ZonaPets/contacto.html")

def iniciar_sesion(request):
    return render(request, "ZonaPets/iniciar-sesion.html")

def preguntasfrecuentes(request):
    return render(request, "ZonaPets/preguntas-frecuentes.html")

def equipo(request):
    return render(request, "ZonaPets/equipo.html")

def zonapets(request):
    return render(request, "ZonaPets/zonapetsl.html")

def prueba(request):
    return render(request, "ZonaPets/pruebaicon.html")

def micuenta(request):
    return render(request, "ZonaPets/micuenta.html")

def terminosycondiciones(request):
    return render(request, "ZonaPets/tyc.html")

def informacion(request):
    return render(request, "ZonaPets/informacion-personal.html")

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

def notifications(request):
    return render(request, "ZonaPets/notifications.html")

def splashscreen(request):
    return render(request, "ZonaPets/splashscreen.html")

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



def send_notification(registration_ids , message_title , message_desc):
    fcm_api = "AAAAvL6cQ2Y:APA91bH-shnwBLyAlmFpa_cdkH8py4SuSUcAmIqF9t1Idrx2Yo87hHSZYabB7t2yNsqUS5MA_bwb9AQgoQQlYxuB79GsQEH7BW96xF4xfJxf-43vTxfx2iixlfSy6fLkCioxjA7O43LVo"
    url = "https://fcm.googleapis.com/fcm/send"
    
    headers = {
        "Content-Type":"application/json",
        "Authorization": 'key=' + fcm_api
    }

    payload = {
        "registration_ids" :registration_ids,
        "priority" : "high",
        "notification" : {
            "body" : message_desc,
            "title" : message_title,
            "image" : "https://zonapets.vercel.app/static/imagenes/waulandia-park.webp",
            "icon": "https://zonapets.vercel.app/static/imagenes/iconfav.png",
            
        }
    }

    result = requests.post(url,  data=json.dumps(payload), headers=headers )
    print(result.json)


def send(request):
    registration  = ["dGkXUAMEcqVBTCRpUsXcYb:APA91bGdpiiZZ9frp2NTiplfn8w9XiDQUQzGbTy7-d4TIp8kQY57TN8PpqJfIvYDdp79lAdjk5CCryCmteZfggN2OUx8RfwT_TSrgjMzX35XZ9USTqnrcQ4bBNgEWtV1f4W8de_oGg5O"]
    send_notification(registration , 'ZonaPets' , '¡Nuevos sitios cerca de tu zona, lleva a tu peludito!')
    return HttpResponse("sent")



def showFirebaseJS(request):
    data='importScripts("https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js");' \
         'importScripts("https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js"); ' \
         'var firebaseConfig = {' \
         '        apiKey: "AIzaSyA-FVbokQCOEdOPnu2ppecKcvFQD5Oj9uQ",' \
         '        authDomain: "zonapets-407921.firebaseapp.com",' \
         '        projectId: "zonapets-407921",' \
         '        storageBucket: "zonapets-407921.appspot.com",' \
         '        messagingSenderId: "810651763558",' \
         '        appId: "1:810651763558:web:914cca9d4c78b9833dfea7",' \
         '        measurementId: "G-5WPJXXGLH1"' \
         ' };' \
         'firebase.initializeApp(firebaseConfig);' \
         'const messaging=firebase.messaging();' \
         'messaging.setBackgroundMessageHandler(function (payload) {' \
         '    console.log(payload);' \
         '    const notification=JSON.parse(payload);' \
         '    const notificationOption={' \
         '        body:notification.body,' \
         '        icon:notification.icon' \
         '    };' \
         '    return self.registration.showNotification(payload.notification.title,notificationOption);' \
         '});'

    return HttpResponse(data, content_type="text/javascript")

