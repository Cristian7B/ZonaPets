import requests
import json
import urllib.parse

from django.conf import settings
from django.http import HttpResponse
from django.http import HttpRequest
from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from .forms import Formularioregistroform     
from .forms import Formularioregistroformempresarial                                                                  
from .models import registrofinal2
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def signup(request):
    return Response({})

@api_view(['POST'])
def login(request):
    return Response({})

@api_view(['GET'])
def test_token(request):
    return Response({})


def newDesing(request):
    return render(request, "ZonaPets/newdesing.html")

def acercade(request):
    return render(request, "ZonaPets/Secondary/acercade.html")

def contacto(request):
    return render(request, "ZonaPets/Principal/contacto.html")

def iniciar_sesion(request):
    return render(request, "ZonaPets/Account/iniciar-sesion.html")

def preguntasfrecuentes(request):
    return render(request, "ZonaPets/Secondary/preguntas-frecuentes.html")

objetoPreguntas = {
    "mapa": [
        {
            "titulo": "¿Qué es un sitio pet-friendly?",
            "respuesta": "Un sitio pet-friendly es un lugar que permite la entrada y permanencia de mascotas, proporcionando un ambiente seguro y cómodo para ellas y sus dueños.",
        },
        {
            "titulo": "¿Cómo encuentro sitios pet-friendly en mi área?",
            "respuesta": "Puedes utilizar nuestra plataforma para buscar sitios pet-friendly cercanos. Simplemente ingresa tu ubicación y te mostraremos una lista de lugares que aceptan mascotas, como restaurantes, hoteles, parques, y más.",
        },
        {
            "titulo": "¿Qué tipo de lugares puedo encontrar en su plataforma?",
            "respuesta": "En nuestra plataforma, puedes encontrar una variedad de lugares pet-friendly, incluyendo restaurantes, cafeterías, hoteles, parques, tiendas y más.",
        },
        {
            "titulo": "¿Cómo puedo estar seguro de que un lugar es realmente pet-friendly?",
            "respuesta": "Todos los lugares listados en nuestra plataforma han sido verificados por nuestro equipo. Además, contamos con reseñas y comentarios de otros usuarios que pueden ayudarte a tomar una decisión informada.",
        },
        {
            "titulo": "¿Qué debo hacer si un lugar listado no es realmente pet-friendly?",
            "respuesta": "Si encuentras un lugar que no cumple con los estándares pet-friendly, te pedimos que nos lo informes a través de nuestra sección de contacto. Investigaremos el caso y tomaremos las medidas necesarias para mantener la calidad de nuestra plataforma.",
        },
    ],

    "registro": [
        {
            "titulo": "¿Puedo dejar una reseña sobre un lugar pet-friendly que visité?",
            "respuesta": "Sí, puedes dejar reseñas y calificaciones sobre los lugares que visitas. Esto ayudará a otros usuarios a conocer mejor el lugar y a decidir si es adecuado para ellos y sus mascotas.",
        },
        {
            "titulo": "¿Es necesario registrarse para usar la plataforma?",
            "respuesta": "No es necesario registrarse para buscar y consultar lugares pet-friendly. Sin embargo, para dejar reseñas y calificaciones, es necesario crear una cuenta.",            
        },
        {
            "titulo": "¿Cómo puedo registrar mi negocio como pet-friendly en su plataforma?",
            "respuesta": "Si tienes un negocio pet-friendly y deseas aparecer en nuestra plataforma, puedes registrarlo a través de nuestro formulario de inscripción para negocios. Nuestro equipo revisará tu solicitud y, una vez aprobada, tu negocio aparecerá en nuestra lista de lugares recomendados.",
        },
        {
            "titulo": "¿Cómo puedo editar mi perfil en la plataforma?",
            "respuesta": "Para editar tu perfil, inicia sesión en la plataforma y dirígete a la sección de 'Mi Cuenta'. Desde allí, podrás actualizar tu información personal, cambiar tu contraseña y ajustar tus preferencias.",
        },
    ],

    "privacidad": [
        {
            "titulo": "¿La plataforma tiene algún costo?",
            "respuesta": "El uso de nuestra plataforma es gratuito tanto para usuarios como para negocios. Nuestro objetivo es facilitar el acceso a lugares pet-friendly sin costo alguno.",
        },
        {
            "titulo": "¿Cómo se protegen mis datos personales en la plataforma?",
            "respuesta": "La plataforma utiliza medidas de seguridad avanzadas para proteger tus datos personales, incluyendo cifrado de datos y firewalls. Además, cumplimos con las regulaciones de protección de datos para asegurar que tu información esté segura.",
        },
        {
            "titulo": "¿Puedo eliminar mi cuenta y mis datos personales de la plataforma?",
            "respuesta": "Sí, puedes eliminar tu cuenta y tus datos personales en cualquier momento. Para hacerlo, ve a la sección de 'Mi Cuenta' y selecciona la opción 'Eliminar cuenta'. Si necesitas ayuda, puedes contactar a nuestro soporte.",
        },
    ],
    
    "premium": [
        {
            "titulo": "¿Cómo puedo contactar al soporte si tengo algún problema o duda?",
            "respuesta": "Puedes contactarnos a través de nuestra sección de contacto en la plataforma, enviándonos un correo electrónico a [tu email de contacto], o llamando a nuestro número de atención al cliente [tu número de teléfono].",
        },
        {
            "titulo": "¿Ofrecen algún servicio adicional para usuarios premium?",
            "respuesta": "Sí, los usuarios premium tienen acceso a características adicionales como reseñas destacadas, soporte prioritario y descuentos exclusivos en negocios pet-friendly registrados en nuestra plataforma.",
        },
    ]
}

def respuestapregunta(request, categoria, pregunta):
    pregunta_decoded = urllib.parse.unquote(pregunta)

    preguntas_categoria = objetoPreguntas.get(categoria, None)
    pregunta_respuesta = next((p for p in preguntas_categoria if p['titulo'] == pregunta_decoded), None)

    return render(request, 'ZonaPets/Secondary/respuestafaq.html', {'pregunta_respuesta': pregunta_respuesta})

def zonapets(request):
    return render(request, "ZonaPets/Info-Pages/zonapetsl.html")

def micuenta(request):
    return render(request, "ZonaPets/Account/micuenta.html")

def terminosycondiciones(request):
    return render(request, "ZonaPets/Secondary/tyc.html")

def informacion(request):
    return render(request, "ZonaPets/Account/informacion-personal.html")

def afiliate(request):
    return render(request, "ZonaPets/Secondary/afiliate.html")

def indicatorBar(request):
    return render(request, "ZonaPets/Test/indicatorBar.html")

def notifications(request):
    return render(request, "ZonaPets/Secondary/notifications.html")

def landingemp(request):
    return render(request, "ZonaPets/Info-Pages/landingemp.html")

def mapa_petfriendly(request):
    ubicaciones = registrofinal2.objects.all()
    ubicaciones_dict = [{'nombre_compañia': ubicacion.nombre_compañia, 
                         'latitud': ubicacion.latitud, 
                         'longitud': ubicacion.longitud,
                         'tipo_de_negocio': ubicacion.tipo_de_negocio,
                         'telefono_usuario': ubicacion.telefono_usuario} 
                         for ubicacion in ubicaciones]

    info = {
        "ubicaciones": ubicaciones_dict,
        "firebase_config": settings.FIREBASE_CONFIG
    }

    return render(request, "ZonaPets/Principal/barmapa.html", info)


class Formularioviewregistroform(HttpRequest):

    def index(request):
        empresa = Formularioregistroform()
        return render(request, "ZonaPets/Principal/barregistrar.html", { "form":empresa})
    @csrf_protect
    def procesar_formulario(request):
        empresa = Formularioregistroform(request.POST)
        if empresa.is_valid():
            empresa.save()
            empresa = Formularioregistroform()

        return render(request, "ZonaPets/Principal/barregistrar.html", { "form":empresa, "mensaje":"¡La empresa ha sido registrada!"})

class Formularioviewregistroformempresarial(HttpRequest):

    def index(request):
        empresa = Formularioregistroformempresarial()
        return render(request, "ZonaPets/Principal/barregistrarempresarial.html", { "form":empresa})
    
    def procesar_formulario(request):
        empresa = Formularioregistroformempresarial(request.POST)
        if empresa.is_valid():
            empresa.save()
            empresa = Formularioregistroformempresarial()

        return render(request, "ZonaPets/Principal/barregistrarempresarial.html", { "form":empresa, "mensaje":"¡La empresa ha sido registrada!"})



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


