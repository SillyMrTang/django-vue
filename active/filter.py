import django_filters
from .models import *


class WorkInfoFilter(django_filters.rest_framework.FilterSet):
    class Meta:
        model = WorkInfo
        fields = ['id','name', 'introduce', 'point_num', 'type', 'small_type']
