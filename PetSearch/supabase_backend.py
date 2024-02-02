from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User
from PetSearch.configuracion_supabase import supabase

class SupabaseBackend(BaseBackend):
    def authenticate(self, request, email=None, password=None):
        user_data = supabase.auth.sign_in_with_password(email=email, password=password)

        if user_data.error is None:
            user, created = User.objects.get_or_create(username=email, email=email)
            return user
        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
