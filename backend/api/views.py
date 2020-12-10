from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def film(request):
    films=["The Good, the bad, and the ugly", "The Godfather", "Twelve Angry Men"]
    return Response(status=status.HTTP_200_OK, data={'films': films})
