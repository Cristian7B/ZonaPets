from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from PetSearch.views import *
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('user_api.urls')),
    path("contacto/", contacto),
    path("landingemp/", landingemp),
    path("acercade/", acercade),
    path("", zonapets),
    path("terminos-y-condiciones/", terminosycondiciones),
    path("iniciarsesion/", iniciar_sesion),
    path("notifications/", notifications),
    path("informacion/", informacion),
    path("micuenta/", micuenta),
    path("afiliate/", afiliate),
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