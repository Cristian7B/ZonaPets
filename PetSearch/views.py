import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from .models import registroform, registroformularioempresarial

@csrf_exempt
def procesar_formulario(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            nombre_compañia = data.get("nombre_compañia")
            telefono_usuario = data.get("telefono_usuario", "")
            tipo_de_negocio = data.get("tipo_de_negocio")
            latitud = data.get("latitud")
            longitud = data.get("longitud")

            if not nombre_compañia or not latitud or not longitud or not tipo_de_negocio:
                return JsonResponse({"error": "Faltan campos obligatorios"}, status=400)

            registro = registroform(
                nombre_compañia=nombre_compañia,
                telefono_usuario=telefono_usuario,
                tipo_de_negocio=tipo_de_negocio,
                latitud=latitud,
                longitud=longitud
            )

            registro.save()

            return JsonResponse({"mensaje": "¡La empresa ha sido registrada!"}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({"error": "JSON inválido"}, status=400)

    return JsonResponse({"error": "Método no permitido"}, status=405)

@csrf_exempt
def procesar_formulario_empresa(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            nombre_de_quien_registra = data.get("nombre_de_quien_registra")
            telefono_usuario = data.get("telefono_usuario", "")
            correo_electronico = data.get("correo_electronico")
            tipo_de_negocio = data.get("tipo_de_negocio")
            nombre_compañia = data.get("nombre_compañia")
            latitud = data.get("latitud")
            longitud = data.get("longitud")

            if not nombre_compañia or not latitud or not longitud or not tipo_de_negocio:
                return JsonResponse({"error": "Faltan campos obligatorios"}, status=400)

            registro = registroformularioempresarial(
                nombre_de_quien_registra=nombre_de_quien_registra,
                telefono_usuario=telefono_usuario,
                correo_electronico=correo_electronico,
                tipo_de_negocio=tipo_de_negocio,
                nombre_compañia=nombre_compañia,
                latitud=latitud,
                longitud=longitud
            )
            
            registro.save()

            return JsonResponse({"mensaje": "¡La empresa ha sido registrada!"}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({"error": "JSON inválido"}, status=400)

    return JsonResponse({"error": "Método no permitido"}, status=405)
