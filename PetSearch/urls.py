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
from PetSearch.views import helloworld, helloworldRed, inicio, ver_mapa, registrar, contacto, Formularioviewregistroform, acercade, preguntasfrecuentes, equipo, terminosycondiciones, asesores, convenios, pagos, nuestrosservicios, afiliate, formulario
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path("helloworld/", helloworld),
    path("hellow/", helloworldRed),
    path("inicio-zonapets/", inicio),
    path("vermapa/", ver_mapa),
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
    path("registroform/", Formularioviewregistroform.index, name = "registrarFormulario"),
    path("guardarform/", Formularioviewregistroform.procesar_formulario, name = "guardarEmpresa")
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)