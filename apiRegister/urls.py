from django.urls import path
from .views import ProcesarFormularioView, ProcesarFormularioEmpresaView

urlpatterns = [
    path('procesar/', ProcesarFormularioView.as_view(), name='procesar_formulario'),
    path('procesar/empresa/', ProcesarFormularioEmpresaView.as_view(), name='procesar_formulario_empresa'),
]
