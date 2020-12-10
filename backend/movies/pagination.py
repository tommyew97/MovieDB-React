from rest_framework.pagination import PageNumberPagination


class MoviePaginator(PageNumberPagination):
    page_size = 12

