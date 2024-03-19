# views.py (backend/app_plataforma/views.py)
from django.shortcuts import render
from django.http import JsonResponse
from .models import Project
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login, logout

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

