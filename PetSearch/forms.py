from django import forms
from .models import registroform
from .models import registroformularioempresarial

class Formularioregistroform(forms.ModelForm):
    telefono_usuario = forms.IntegerField(
        required=False,
        widget=forms.NumberInput(attrs={'placeholder': 'Campo no obligatorio'})
    )

    nombre_compañia = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'ZonaPets'})
    )

    class Meta:
        model = registroform
        labels = {
            "latitud" : "",
            "longitud" : "",
        }
        fields = ['nombre_compañia', 'telefono_usuario','latitud', 'longitud', 'tipo_de_negocio']
        widgets = {
            'telefono_usuario': forms.TextInput(attrs={'type': 'number'}),
        }


class Formularioregistroformempresarial(forms.ModelForm):
    
    telefono_usuario = forms.IntegerField(
        widget=forms.NumberInput(attrs={'placeholder': '326 989 7895'})
    )
    
    nombre_compañia = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'ZonaPets'})
    )

    correo_electronico = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'zonapets@email.com'})
    )

    nombre_de_quien_registra = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Pablo'})
    )
    class Meta:
        labels = {
            "latitud" : "",
            "longitud" : "",
        }
        model = registroformularioempresarial
        fields = "__all__"
