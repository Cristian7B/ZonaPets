"""
URL configuration for PetSearch project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from PetSearch.views import helloworld, helloworldRed, inicio, vista_barregistrar ,mapa_petfriendly, vista_bar, registrar, contacto, Formularioviewregistroform, Formularioviewregistroformempresarial, acercade, preguntasfrecuentes, equipo, terminosycondiciones, asesores, convenios, pagos, nuestrosservicios, afiliate, formulario
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path("helloworld/", helloworld),
    path("hellow/", helloworldRed),
    path("inicio-zonapets/", inicio),
    path("registrar/", registrar),
    path("contacto/", contacto),
    path("acercade/", acercade),
    path("terminos-y-condiciones/", terminosycondiciones),
    path("equipo/", equipo),
    path("asesores/", asesores),
    path("convenios/", convenios),
    path("pagos/", pagos),
    path("nuestros-servicios/", nuestrosservicios),
    path("afiliate/", afiliate),
    path("preguntas-frecuentes/", preguntasfrecuentes),
    path("formulario/", formulario),
    path("vermapa/", mapa_petfriendly),
    path("vistabar/", vista_bar),
    path("vistabarregistrar/", vista_barregistrar),
    path("registroform/", Formularioviewregistroform.index, name = "registrarFormulario"),
    path("guardarform/", Formularioviewregistroform.procesar_formulario, name = "guardarform"),
    path("registroformempresarial/", Formularioviewregistroformempresarial.index, name = "registrarFormularioEmpresa"),
    path("guardarformempresarial/", Formularioviewregistroformempresarial.procesar_formulario, name = "guardarformEmpresa"),
    path("mapamarkers/", Formularioviewregistroform.mostrar_mapa, name=("mostrar_mapa"))
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)