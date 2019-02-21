"""YearActive URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin

from django.conf.urls import include, url
from django.views.static import serve
from active.views import *
from active.lantern_view import *
from active.urls import api
from .settings import MEDIA_ROOT
from django.views.generic import TemplateView

urlpatterns = [
    url('admin/', admin.site.urls),
    url('index/', index),
    # url(r'^$', TemplateView.as_view(template_name="index.html")),
    url(r'^api/', include(api.urls)),
    url(r'^$', gw_index),
    url(r'GetHeadInfo/$', GetHeadInfo),
    url(r'GetBodyInfo/$', GetBodyInfo),
    url(r'GetLegInfo/$', GetLegInfo),
    url(r'GetVisceraInfo/$', GetVisceraInfo),
    url(r'addWorkInfo/$', AddWorkInfo),
    url(r'giveZan/$', giveZan),
    url(r'checkout/$', checkout),
    url(r'upload/$', uploadImg),
    url(r'share/$', share),
    url(r'shareInfo/$', shareInfo),
    url(r'uploadImage/$', uploadImage),
    url(r'getWechatInfo/$', getWechatInfo),
    url(r'lantern/active/', lantern),
    url(r'lantern/begin/', lantern_index),
    url(r'lantern/first/', lantern_first),
    url(r'lantern/answer/', lantern_answer),
    url(r'lantern/result/', lantern_result),
    url(r'result', result),
    url(r'search_pig/', search),
    url(r'save_info/', save_info),
    url('flavor/forword', flavor_index),
    url('flavor/detail/', flavor_detail),
    url('flavor/result/', flavor_result),
    url('replay/', replay),
    url(r'^media/(?P<path>.*)/$', serve, {'document_root': MEDIA_ROOT}),
    url(r'^(?P<path>.*)$', serve, {'document_root': os.path.dirname(os.path.dirname(os.path.abspath(__file__)))})
]
