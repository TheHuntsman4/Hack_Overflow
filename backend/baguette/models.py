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
    pfp = models.CharField(max_length=10000)
    REQUIRED_FIELDS = ['fullname','email','password']