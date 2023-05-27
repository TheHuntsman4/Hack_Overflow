from django.db import models
from django.contrib.auth.models import AbstractUser

class Item(models.Model):
    name = models.CharField(max_length=200)
    created = models.DateField(auto_now_add=True)

class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    fullname = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    college= models.CharField(max_length=255)
    course = models.CharField(max_length=255)
    yearofgrad = models.CharField(max_length=255)
    domain = models.CharField(max_length=255)
    description = models.CharField(max_length=10000)
    pfp = models.TextField()
    username = None
    REQUIRED_FIELDS = ['fullname','email','password']

class Business(models.Model):
    buisid = models.IntegerField(primary_key=True)
    pfp = models.TextField()
    name = models.CharField(max_length=255)
    motto = models.CharField(max_length=255)
    domain = models.CharField(max_length=255)
    headquarters = models.CharField(max_length=500)
    websitelink = models.CharField(max_length=10000)
    about = models.CharField(max_length=500)
    industry = models.CharField(max_length=500)
    companysize = models.IntegerField(null=True)
    specialities = models.CharField(max_length=1000)
    projects = models.JSONField()