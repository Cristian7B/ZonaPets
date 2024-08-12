from django.urls import path
from .views import *

urlpatterns = [
    path("ubicaciones/", UbicacionList.as_view(), name='ubicacion-list')
]