# from rest_framework import serializers
# from django.contrib.auth.models import User

# class UserSerializer(serializers.ModelSerializer):
#     class Meta(object):
#         model = User
#         fields = ["username", "password", "email"]


from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = '__all__'
	def create(self, clean_data):
		user_obj = UserModel.objects.create_user(email=clean_data['email'], password=clean_data['password'])
		user_obj.username = clean_data['username']
		user_obj.save()
		return user_obj

class UserLoginSerializer(serializers.Serializer):
	email = serializers.EmailField()
	password = serializers.CharField()
	##
	def check_user(self, clean_data):
		user = authenticate(username=clean_data['email'], password=clean_data['password'])
		if not user:
			raise ValidationError('user not found')
		return user

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = ("nombre",'email', 'username', "telefono", "ciudad")

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['email', 'username', 'nombre', 'ciudad', 'telefono']