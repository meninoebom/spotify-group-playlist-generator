from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^access_token/', views.access_token),
]