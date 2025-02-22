import csv
from django.core.management.base import BaseCommand
from PetSearch.models import RegistroForm, RegistroFormEmpresarial, RegistroFinal
import codecs
class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        archivo_csv = r"C:\PetSearch\PetSearch\management\commands\Merged Database.csv"  
        
        with codecs.open(archivo_csv, "r", encoding="utf-8-sig") as file: 
            reader = csv.DictReader(file, delimiter=";")



            for row in reader:
                print(row)
                nombre_compania = row["nombre_compania"]
                registro_form_id = row.get("registro_form_id", None)
                registro_form_empresarial_id = row.get("registro_form_empresarial_id", None)

                registro_form = None
                registro_form_empresarial = None

                if registro_form_id:
                    registro_form = RegistroForm.objects.filter(id=registro_form_id).first()

                if registro_form_empresarial_id:
                    registro_form_empresarial = RegistroFormEmpresarial.objects.filter(id=registro_form_empresarial_id).first()

                if registro_form or registro_form_empresarial:
                    RegistroFinal.objects.create(
                        registro_form=registro_form,
                        registro_form_empresarial=registro_form_empresarial
                    )
                    self.stdout.write(self.style.SUCCESS(f"✔️ Registrado: {nombre_compania}"))
                else:
                    self.stdout.write(self.style.WARNING(f"⚠️ No se pudo registrar: {nombre_compania}"))

        self.stdout.write(self.style.SUCCESS("✅ Importación finalizada"))
