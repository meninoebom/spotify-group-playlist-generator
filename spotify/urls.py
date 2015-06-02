from django.conf.urls import include, url
from api.views import UserListView

urlpatterns = [
    url(r'^users/', UserListView.as_view(), name='users_list' )
]