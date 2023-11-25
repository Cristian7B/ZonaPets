from django.http import HttpResponse

#1ra Vista
def helloworld(request):
    return HttpResponse("hello_world")

def helloworldRed(request):
    return HttpResponse("<p style=""color: red;"">hola mundo</p>")

# myapp/views.py
from django.shortcuts import render
from .models import Pagina

def inicio(request):
    pagina = Pagina.objects.first()

    #Render Template
    
    return render(request, 'pagina_principal.html', {'pagina': pagina})

def ver_mapa(request):    
    return render(request, 'ver_mapa.html')

def registrar(request):    
    return render(request, 'register.html')

def acercade(request):
    return render(request, "acercade.html")

def contacto(request):
    return render(request, "contacto.html")

def preguntasfrecuentes(request):
    return render(request, "preguntas-frecuentes.html")

def equipo(request):
    return render(request, "equipo.html")

def terminosycondiciones(request):
    return render(request, "terminos.html")

def asesores(request):
    return render(request, "asesores.html")

def convenios(request):
    return render(request, "convenios.html")

def pagos(request):
    return render(request, "pagos.html")

def nuestrosservicios(request):
    return render(request, "nuestros-servicios.html")

def afiliate(request):
    return render(request, "afiliate.html")




nueva_pagina = Pagina(nombre="PetSearch")
nueva_pagina.save()