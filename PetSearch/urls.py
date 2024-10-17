from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from PetSearch.views import *
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('back/procesar/', procesar_formulario, name="procesar_formulario"),
    path('back/procesar/empresa', procesar_formulario_empresa, name="procesar_formulario_empresa"),
    path('api/', include('user_api.urls')),
    path('apilocation/', include('apiLocation.urls')),
    re_path(r'^(?!static/|api/|apilocation/|back/).*$', TemplateView.as_view(template_name='index.html')),
] 


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)