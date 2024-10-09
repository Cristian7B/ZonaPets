from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from PetSearch.views import *
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^(?!static/|api/|apilocation/).*$', TemplateView.as_view(template_name='index.html')),
    path('api/', include('user_api.urls')),
    path('apilocation/', include('apiLocation.urls')),
] 


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)