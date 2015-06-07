from django.contrib.auth.models import User
from django.http import HttpResponse
import requests

def access_token(request):
    current_user = request.user
    user_id =current_user.id
    # user_id = request.user.pk
    user = User.objects.get(pk=user_id)
    social = user.social_auth.get(provider='spotify')
    token = social.extra_data['access_token']

    headers = {'Authorization': 'Bearer '+token}

    stuff = requests.get('https://api.spotify.com/v1/me', headers = headers)

    return HttpResponse(stuff)

# from serializers import UserSerializer
# from rest_framework import generics
# from django.contrib.auth.models import User
#
# import json

# from django.conf import settings
# from django.http import HttpResponse, HttpResponseBadRequest
# from django.shortcuts import redirect
# from django.contrib.auth.decorators import login_required
# from django.contrib.auth import logout as auth_logout, login

# from social.backends.oauth import BaseOAuth1, BaseOAuth2
# from social.backends.google import GooglePlusAuth
# from social.backends.utils import load_backends
# from social.apps.django_app.utils import psa

# from example.app.decorators import render_to
# from django.shortcuts import render

#
# @psa('social:complete')
# def ajax_auth(request, backend):
#     if isinstance(request.backend, BaseOAuth1):
#         token = {
#             'oauth_token': request.REQUEST.get('access_token'),
#             'oauth_token_secret': request.REQUEST.get('access_token_secret'),
#         }
#     elif isinstance(request.backend, BaseOAuth2):
#         token = request.REQUEST.get('access_token')
#     else:
#         raise HttpResponseBadRequest('Wrong backend type')
#     user = request.backend.do_auth(token, ajax=True)
#     login(request, user)
#     data = {'id': user.id, 'username': user.username}
#     return HttpResponse(json.dumps(data), mimetype='application/json')
