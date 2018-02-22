from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse, HttpResponseRedirect, Http404, HttpResponseForbidden

class IndexView(TemplateView):
    template_name = "application.html"

class User():
    queryset = User.objects.all()
    serializer_class = UserSerializer
