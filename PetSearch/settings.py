import os
import environ
from pathlib import Path

env = environ.Env()

BASE_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR = os.path.join(BASE_DIR, 'static')
TEMPLATE_DIR = os.path.join(BASE_DIR, "PetSearch/Templates")

ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'avif', "jfif", "webp", "svg"]

environ.Env.read_env(os.path.join(BASE_DIR, '.env'))
SECRET_KEY = env('SECRET_KEY')
DEBUG = True
ALLOWED_HOSTS = ["127.0.0.1"]


CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_ALL_ORIGINS = True

CORS_ALLOW_HEADERS = [
    'content-type',
    'authorization',
]

CORS_ALLOW_METHODS = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS',
]

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:5173", 
]



INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'PetSearch',
    'apiLocation',
    "corsheaders",
    'user_api.apps.UserApiConfig',
    'rest_framework',
    'rest_framework.authtoken',
    'rest_framework_simplejwt',
]
from rest_framework_simplejwt.settings import api_settings

api_settings.USER_ID_FIELD = 'user_id'

from datetime import timedelta

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': "30d", 
    'REFRESH_TOKEN_LIFETIME': timedelta(days=45),  
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
}

X_FRAME_OPTIONS = 'DENY'

GOOGLE_SHEETS_CREDS = {
    'path': env('GOOGLE_SHEETS_CREDS_PATH'),
    'scope': env.list('GOOGLE_SHEETS_SCOPE')
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

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env('DB_NAME'),
        'USER': env('DB_USER'),
        'PASSWORD': env('DB_PASSWORD'),
        'HOST': env('DB_HOST'),
        'PORT': env('DB_PORT'),
    }
}

FIREBASE_CONFIG = {
    'apiKey': env('FIREBASE_API_KEY'),
    'authDomain': env('FIREBASE_AUTH_DOMAIN'),
    'projectId': env('FIREBASE_PROJECT_ID'),
    'storageBucket': env('FIREBASE_STORAGE_BUCKET'),
    'messagingSenderId': env('FIREBASE_MESSAGING_SENDER_ID'),
    'appId': env('FIREBASE_APP_ID'),
    'measurementId': env('FIREBASE_MEASUREMENT_ID'),
    'vapidKey': env('FIREBASE_VAPID_KEY'),
}

AUTH_USER_MODEL = "user_api.AppUser"

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
    ),
}


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

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

STATIC_URL = '/static/'
STATICFILES_DIRS = [STATIC_DIR]
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles_build", "static")

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
