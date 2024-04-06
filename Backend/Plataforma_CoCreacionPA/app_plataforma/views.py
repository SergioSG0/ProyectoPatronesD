# views.py (backend/app_plataforma/views.py)
from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Project
from .models import UserProfile
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import datetime

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

def index(request):
    return render(request, 'index.html')  # Renderiza una plantilla llamada 'index.html'
    
class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return Response({'detail': 'Logged in successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
            
class LogoutView(APIView):
    def get(self, request):
        logout(request)
        return Response({'detail': 'Logged out successfully'}, status=status.HTTP_200_OK)

class RegistrationView(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        photo = request.FILES.get('photo')  # Obtener el archivo de la foto del formulario

        if not username or not email or not password:
            return Response({'error': 'Username, email, and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username is already taken.'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, email=email, password=password)

        # Crear el perfil de usuario con la foto
        user_profile = UserProfile.objects.create(user=user, photo=photo)

        return Response({'detail': 'User registered successfully'}, status=status.HTTP_201_CREATED)
      
#def create_project(request):
    # Vista para crear un nuevo proyecto

#def edit_project(request, project_id):
    # Vista para editar un proyecto existente

#def search_projects(request):
    # Vista para buscar proyectos

def obtener_proyectos(request):
    proyectos = Project.objects.all()
    data = {'proyectos': list(proyectos.values())}
    return JsonResponse(data)

