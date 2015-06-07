from django.conf.urls import include, url
from . import views
from api import urls as api_urls

urlpatterns = [
    url(r'^logout/', views.logout, name='logout' ),
    url(r'^api/', include(api_urls)),
]