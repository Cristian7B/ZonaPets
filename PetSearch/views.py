from django.http import HttpResponse
from django.http import HttpRequest
from django.http import JsonResponse
from .forms import Formularioregistroform     
from .forms import Formularioregistroformempresarial                                                                  

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
    
    return render(request, 'index.html', {'pagina': pagina})

def registrar(request):    
    return render(request, 'registrar.html')

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

    
def formulario(request):
    return render(request, "formulario.html")

def mapa_petfriendly(request):
    ubicaciones = registroform.objects.all()
    return render(request, "mapa_petfriendly.html", {"ubicaciones": ubicaciones})


from .models import registroform
class Formularioviewregistroform(HttpRequest):

    def index(request):
        empresa = Formularioregistroform()
        return render(request, "formindex.html", { "form":empresa})

    def procesar_formulario(request):
        empresa = Formularioregistroform(request.POST)
        if empresa.is_valid():
            empresa.save()
            empresa = Formularioregistroform()

        return render(request, "formindex.html", { "form":empresa, "mensaje":"¡La empresa ha sido registrada!"})
    
    def mostrar_mapa(request):
        ubicaciones = registroform.objects.all()
        return render(request, "mapa.html", {"ubicaciones": ubicaciones})

class Formularioviewregistroformempresarial(HttpRequest):

    def index(request):
        empresa = Formularioregistroformempresarial()
        return render(request, "formempresarialindex.html", { "form":empresa})
    
    def procesar_formulario(request):
        empresa = Formularioregistroformempresarial(request.POST)
        if empresa.is_valid():
            empresa.save()
            empresa = Formularioregistroformempresarial()

        return render(request, "formempresarialindex.html", { "form":empresa, "mensaje":"¡Tu empresa ha sido registrada!"})

# views.py

