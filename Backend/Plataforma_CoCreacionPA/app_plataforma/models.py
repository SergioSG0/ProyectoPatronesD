# models.py (backend/app_plataforma/models.py)

from django.contrib.auth.models import User
from django.contrib.auth.models import User as BaseUser
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, default=1)  # Asignar el usuario con ID 1 como valor predeterminado
    collaborators = models.ManyToManyField(User, related_name='collaborations')

class UserProfile(models.Model):
    user = models.OneToOneField(BaseUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    photo = models.ImageField(upload_to='profile_photos', blank=True, null=True)  # Hacer la foto opcional
