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
from django.template import loader
def inicio(request):
    pagina = Pagina.objects.first()
    template = loader.get_template("ZonaPets/index.html")
    documento = template.render({'pagina': pagina})
    return HttpResponse(documento)

def registrar(request):    
    return render(request, 'ZonaPets/registrar.html')

def acercade(request):
    return render(request, "ZonaPets/acercade.html")

def contacto(request):
    return render(request, "ZonaPets/contacto.html")

def preguntasfrecuentes(request):
    return render(request, "ZonaPets/preguntas-frecuentes.html")

def equipo(request):
    return render(request, "ZonaPets/equipo.html")

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


from django.db import connections

def mapa_petfriendly(request):
    with connections['default'].cursor() as cursor:
        # Ejecuta una consulta SQL directamente en la tabla 'registrofinal'
        cursor.execute("SELECT * FROM registrofinal")
        # Recupera los resultados de la consulta
        rows = cursor.fetchall()

    # Procesa los resultados según sea necesario y pásalos al template
    ubicaciones = [{'nombre_compañia': row[1], 'telefono_usuario': row[5], 'latitud': row[2], 'longitud': row[3]} for row in rows]

    return render(request, "ZonaPets/mapa_petfriendly.html", {"ubicaciones": ubicaciones})


from django.views.decorators.csrf import csrf_protect
from .models import registroform
class Formularioviewregistroform(HttpRequest):

    def index(request):
        empresa = Formularioregistroform()
        return render(request, "ZonaPets/formindex.html", { "form":empresa})
    @csrf_protect
    def procesar_formulario(request):
        empresa = Formularioregistroform(request.POST)
        if empresa.is_valid():
            empresa.save()
            empresa = Formularioregistroform()

        return render(request, "ZonaPets/formindex.html", { "form":empresa, "mensaje":"¡La empresa ha sido registrada!"})
    
    def mostrar_mapa(request):
        ubicaciones = registroform.objects.all()
        return render(request, "ZonaPets/mapa.html", {"ubicaciones": ubicaciones})

class Formularioviewregistroformempresarial(HttpRequest):

    def index(request):
        empresa = Formularioregistroformempresarial()
        return render(request, "ZonaPets/formempresarialindex.html", { "form":empresa})
    
    def procesar_formulario(request):
        empresa = Formularioregistroformempresarial(request.POST)
        if empresa.is_valid():
            empresa.save()
            empresa = Formularioregistroformempresarial()

        return render(request, "ZonaPets/formempresarialindex.html", { "form":empresa, "mensaje":"¡Tu empresa ha sido registrada!"})



