from serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User

import json

# from django.conf import settings
from django.http import HttpResponse, HttpResponseBadRequest
# from django.shortcuts import redirect
# from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout as auth_logout, login

from social.backends.oauth import BaseOAuth1, BaseOAuth2
# from social.backends.google import GooglePlusAuth
# from social.backends.utils import load_backends
from social.apps.django_app.utils import psa

# from example.app.decorators import render_to
# from django.shortcuts import render

from social.apps.django_app.default.models import UserSocialAuth


def access_token(request):
    user_id = request.user.pk
    u = UserSocialAuth.objects.get(pk=7)
    extra = u.extra_data
    token = extra.access_token
    return HttpResponse('ouyv')


@psa('social:complete')
def ajax_auth(request, backend):
    if isinstance(request.backend, BaseOAuth1):
        token = {
            'oauth_token': request.REQUEST.get('access_token'),
            'oauth_token_secret': request.REQUEST.get('access_token_secret'),
        }
    elif isinstance(request.backend, BaseOAuth2):
        token = request.REQUEST.get('access_token')
    else:
        raise HttpResponseBadRequest('Wrong backend type')
    user = request.backend.do_auth(token, ajax=True)
    login(request, user)
    data = {'id': user.id, 'username': user.username}
    return HttpResponse(json.dumps(data), mimetype='application/json')
