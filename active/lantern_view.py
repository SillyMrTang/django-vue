from django.shortcuts import render, redirect, reverse
from django.http import HttpResponseRedirect
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic.base import View
from django.core import serializers
from .get_access_token import new_jsapi_ticket, new_access_token
from YearActive.settings import appID
from .models import UserInfoTwo, Question
from hashlib import sha1
from django.db.models import Q
import requests
import json
import time
import random

FAPPID = "wxe63b30257b43fd76"
FSECRET = "70e6f003b1b8d29fa502b993c499162e"


# Create your views here.


def lantern(request):
    return render(request, 'forward.html')


def lantern_index(request):
    code = request.GET.get("code")
    response = requests.get(
        "https://api.weixin.qq.com/sns/oauth2/access_token?appid={}&secret={}&code={}&grant_type=authorization_code".format(
            FAPPID, FSECRET, code)
    )
    js_res = json.loads(response.content.decode())
    print(js_res)
    if "errmsg" in js_res.keys():
        return JsonResponse({"code": 400})
    else:
        openid = request.session.get("openid")
        if openid:
            user = UserInfoTwo.objects.filter(openid=openid)
            status = user[0].status
            error = user[0].error
            return JsonResponse({"code": 200, "openid": openid, "status": status, "error": error})
        else:
            openid = js_res["openid"]
            request.session["openid"] = openid
            user = UserInfoTwo()
            user.openid = openid
            user.save()
            return JsonResponse({"code": 200, "openid": openid, "status": 0})


def lantern_first(request):
    return render(request, 'go.html')


def lantern_answer(request):
    question = Question.objects.order_by('?')[:1]
    print(question[0].title)
    return render(request, 'answer.html', {"question": question[0]})


def lantern_result(request):
    answer = request.GET.get("answer")
    id = request.GET.get("id")
    openid = request.GET.get("openid")
    que = Question.objects.filter(id=id)
    user = UserInfoTwo.objects.filter(openid=openid)[0]

    if que[0].answer == answer:
        user.status = 1
        user.error = 0
        user.save()
        return JsonResponse({"error": 0})
    else:
        user.error = 1
        user.save()
        return JsonResponse({"error": 1})


def result(request):
    return render(request, "result_two.html")
