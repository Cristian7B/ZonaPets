from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from PetSearch.views import *
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    # re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
    path('api/', include('user_api.urls')),
    path('apilocation/', include('apiLocation.urls')),
    path('back/procesar/', procesar_formulario, name="procesar_formulario"),
    path('back/procesar/empresa', procesar_formulario_empresa, name="procesar_formulario_empresa"),
    path("contacto/", contacto),
    path("landingemp/", landingemp),
    path("new/", newDesing),
    path("logintest/", loginTest),
    path("infotest/", informacionTest),
    path("acercade/", acercade),
    path("", zonapets),
    path("terminos-y-condiciones/", terminosycondiciones),
    path("iniciarsesion/", iniciar_sesion),
    path("notifications/", notifications),
    path("informacion/", informacion),
    path("micuenta/", micuenta),
    path("afiliate/", afiliate),
    path("indicatorbar/", indicatorBar),
    path("preguntas-frecuentes/", preguntasfrecuentes),
    path('preguntas-frecuentes/<str:categoria>/<str:pregunta>/', respuestapregunta, name='pregunta_detalle'),
    path("mapa/", mapa_petfriendly),
    path("registrar/", Formularioviewregistroform.index, name = "registrarFormulario"),
    path("guardarform/", Formularioviewregistroform.procesar_formulario, name = "guardarform"),
    path("registrarempresa/", Formularioviewregistroformempresarial.index, name = "registrarFormularioEmpresa"),
    path("guardarformempresarial/", Formularioviewregistroformempresarial.procesar_formulario, name = "guardarformEmpresa"),
] 


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)