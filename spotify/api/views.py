from serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User

class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    paginate_by = 100