from django import forms
from .models import registroform
from .models import registroformularioempresarial

class Formularioregistroform(forms.ModelForm):
    telefono_usuario = forms.IntegerField(
        required=False,
        widget=forms.NumberInput(attrs={'placeholder': 'Campo no obligatorio'})
    )
    class Meta:
        model = registroform
        fields = ['nombre_compañia', 'telefono_usuario','latitud', 'longitud', 'tipo_de_negocio']
        widgets = {
            'telefono_usuario': forms.TextInput(attrs={'type': 'number'}),
        }


class Formularioregistroformempresarial(forms.ModelForm):
    class Meta:
        model = registroformularioempresarial
        fields = "__all__"
