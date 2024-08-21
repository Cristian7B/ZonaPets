from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView
urlpatterns = [
	path('register/', views.UserRegister.as_view(), name='register'),
	path('login/', views.UserLogin.as_view(), name='login'),
	path('logout/', views.UserLogout.as_view(), name='logout'),
	path('user/', views.UserView.as_view(), name='user'),
    path("get_user_info/", views.get_user_info, name="get_user_info"),
	path("update_user_info/", views.update_user_info, name="update_user_info"),
	path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
