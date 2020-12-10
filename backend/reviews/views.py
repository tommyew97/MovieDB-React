from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, viewsets, filters
from reviews.models import Review
from reviews.serializer import ReviewSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['movie_id', 'user_id']
    ordering_fields = ['id', 'score']  # Ordering by id should be equivalent to ordering by time added
    ordering = ['id']
