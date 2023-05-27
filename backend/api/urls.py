from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('getusers/', views.getData),
    path('register/', views.addItem),
    path('login/', views.login),
    path('user/', views.user),
    path('getbuisness/', views.getbuis),
    path('postbuisness/', views.postbuis),
    path('updatebuisness/', views.updatebuis),
    path('communitydetails/', views.community_data),  # requires community id (UID) in body
    path('listchannels/', views.list_channels),  # requires community id (UID) in body
    path('userlist/', views.user_list),  # requires community id (UID) in body
    path('querycommunities/', views.query_communities),  # requires search query (QUERY) in body

    # required fields:['UID'],['USER_ID'],['DESCRIPTION'],['CATEGORIES']
    path('createcommunity/', views.create_community),
    # required fields:['UID'],['USER_ID'],['OPTION'], optional: ['ARG']
    path('editcommunity/', views.edit_community),
    path('listmessages/', views.list_messages),

]
