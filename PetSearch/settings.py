"""
Django settings for PetSearch project.

Generated by 'django-admin startproject' using Django 4.2.7.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""
import os

from pathlib import Path


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR = os.path.join(BASE_DIR, 'static')

TEMPLATE_DIR = os.path.join(BASE_DIR, "PetSearch/Templates")
print(TEMPLATE_DIR)

ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'avif', "jfif", "webp", "svg"]
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-3s=e)p*@!v%#3d&6rpjh=5=xxxzu6)a*&7w(hr=iq$=jgim@&e'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ["*"]
CSRF_TRUSTED_ORIGINS = ["http://127.0.0.1:8000", "https://zonapets.vercel.app/"]

CORS_ALLOW_ALL_ORIGINS = True


CORS_ALLOW_CREDENTIALS = True



# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'PetSearch',
    "corsheaders",
    'user_api.apps.UserApiConfig',
    'rest_framework',
    'rest_framework.authtoken',
]

X_FRAME_OPTIONS = 'DENY'



GOOGLE_SHEETS_CREDS = {
    'path': 'path/to/credentials.json',
    'scope': ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
}


MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CSRF_COOKIE_SECURE = True
CSRF_COOKIE_SAMESITE = 'Lax' 

ROOT_URLCONF = 'PetSearch.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATE_DIR],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    }
]

WSGI_APPLICATION = 'PetSearch.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'zonapets_posgres_db',
#         'USER': 'zonapets_posgres_db_user',
#         'PASSWORD': 'bYLyD3KPFM1wBmSmKdTRiQo1MYpiYCDq',
#         'HOST': 'dpg-cmgp3een7f5s73f1kqg0-a.oregon-postgres.render.com',  # O la dirección del servidor donde está alojada tu base de datos
#         'PORT': '5432',       # El puerto predeterminado para PostgreSQL
#     }
# }


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'zonapetsbackup',
        'USER': 'devcristian',
        'PASSWORD': '0qRY0fO8Dld0ulU3yUQPYqWNDOrARu2d',
        'HOST': 'dpg-cmps9ola73kc73bf1ef0-a.oregon-postgres.render.com',  
        'PORT': '5432',      
    }
}


# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'postgres',
#         'USER': 'postgres.julwhkcaxymmgizmaiic',
#         'PASSWORD': 'RfO0itPqNLXWhQFN',
#         'HOST': 'aws-0-us-west-1.pooler.supabase.com',  # O la dirección del servidor donde está alojada tu base de datos
#         'PORT': '6543',       # El puerto predeterminado para PostgreSQL
#     }
# }
# postgres://devcristian:0qRY0fO8Dld0ulU3yUQPYqWNDOrARu2d@dpg-cmps9ola73kc73bf1ef0-a.oregon-postgres.render.com/zonapetsbackup
# postgres://zonapets_posgres_db_user:bYLyD3KPFM1wBmSmKdTRiQo1MYpiYCDq@dpg-cmgp3een7f5s73f1kqg0-a.oregon-postgres.render.com/zonapets_posgres_db
# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_USER_MODEL = "user_api.AppUser"

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
    ),
}


# postgres://zonapets_posgres_db_user:bYLyD3KPFM1wBmSmKdTRiQo1MYpiYCDq@dpg-cmgp3een7f5s73f1kqg0-a.oregon-postgres.render.com/zonapets_posgres_db
# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [STATIC_DIR]

STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles_build", 'static')



# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
