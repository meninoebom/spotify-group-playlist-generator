from django.conf.urls import include, url
from api.views import UserListView
from . import views

urlpatterns = [
    url(r'^logout/', views.logout, name='logout' ),
]