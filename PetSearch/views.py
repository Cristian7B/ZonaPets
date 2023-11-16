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

nueva_pagina = Pagina(nombre="PetSearch")
nueva_pagina.save()