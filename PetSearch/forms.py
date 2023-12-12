from django import forms
from .models import registroform

class Formularioregistroform(forms.ModelForm):
    class Meta:
        model = registroform
        fields = "__all__"
