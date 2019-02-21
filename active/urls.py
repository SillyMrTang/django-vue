from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import MoreWorkInfoViewSet


api = DefaultRouter()
api.register(r'MoreWorkInfo', MoreWorkInfoViewSet, base_name='MoreWorkInfo')

