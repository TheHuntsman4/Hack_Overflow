from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.getData),
    path('register/',views.addItem),
    path('login/',views.login),
    path('user/',views.user),
    path('getbuisness/',views.getbuis),
    path('postbuisness/',views.postbuis),
]