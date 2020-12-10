from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters
from movies.pagination import MoviePaginator
from .models import Movie
from .serializer import MovieSerializer


# Create your views here.

class MovieViewSet(viewsets.ModelViewSet):
    pagination_class = MoviePaginator
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filterset_fields = {
        'id': ['exact'],
        'length': ['exact', 'gte', 'lte'],
        'genre': ['regex', 'exact'],
        'year': ['exact', 'gte', 'lte']
    }  # What fields can be directly filtered
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]  # Types of filtering
    search_fields = ['title']  # What fields can be searched
    ordering_fields = ['title', 'length', 'year']  # What fields can be ordered.
    ordering = ['id']  # Standard ordering
