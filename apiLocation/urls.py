from django.urls import path
from .views import *

urlpatterns = [
    path("ubicaciones/", RegistroFinalListView.as_view(), name='ubicacion-list')
]