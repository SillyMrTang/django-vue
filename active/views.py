from django.shortcuts import render, redirect, reverse
from django.http import HttpResponseRedirect
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic.base import View
from django.views.decorators.http import require_http_methods
from django.core import serializers
from .models import UserInfo, WorkInfo, IMG, PraiseRecord, JobList
from rest_framework import viewsets, filters
from .serializer import WorkInfoSerializer
from .filter import WorkInfoFilter
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from .get_access_token import new_jsapi_ticket, new_access_token
from YearActive.settings import appID
from ffmpy import FFmpeg
from .pay import *
from hashlib import sha1
from django.db.models import Q
import requests
import json
import time

FAPPID = "wxe63b30257b43fd76"
FSECRET = "70e6f003b1b8d29fa502b993c499162e"


# Create your views here.


def index(request):
    code = request.GET.get("code")
    unionid = request.session.get("unionid")
    if code:
        user = UserInfo.objects.filter(openid=unionid)
        print(user)
        if user:
            return HttpResponseRedirect("/?openid={}".format(unionid))
        else:
            response = requests.get(
                "https://api.weixin.qq.com/sns/oauth2/access_token?appid={}&secret={}&code={}&grant_type=authorization_code".format(
                    FAPPID, FSECRET, code)
            )
            js_res = json.loads(response.content.decode())
            openid = js_res["openid"]
            access_token = js_res["access_token"]
            res = requests.get(
                "https://api.weixin.qq.com/sns/userinfo?access_token={}&openid={}&lang=zh_CN".format(access_token,
                                                                                                     openid))
            user = json.loads(res.content.decode())
            unionid = user["unionid"]
            request.session["unionid"] = unionid
            user = UserInfo()
            user.openid = unionid
            user.save()
            return HttpResponseRedirect("/?openid={}".format(unionid))
    else:
        return HttpResponse("请在微信浏览器中打开")


class GoodsSetPagination(PageNumberPagination):
    page_size = 6
    page_size_query_param = 'page_size'
    page_query_param = 'page'
    max_page_size = 100


@require_http_methods(["GET"])
def GetHeadInfo(request):
    response = {}
    try:
        pig_head_meat = WorkInfo.objects.filter(small_type=1).order_by('-point_num')[:3]
        pig_mouth = WorkInfo.objects.filter(small_type=2).order_by('-point_num')[:3]
        pig_ear = WorkInfo.objects.filter(small_type=3).order_by('-point_num')[:3]
        pig_brain = WorkInfo.objects.filter(small_type=4).order_by('-point_num')[:3]
        response['pig_head_meat'] = json.loads(serializers.serialize("json", pig_head_meat))
        response['pig_mouth'] = json.loads(serializers.serialize("json", pig_mouth))
        response['pig_ear'] = json.loads(serializers.serialize("json", pig_ear))
        response['pig_brain'] = json.loads(serializers.serialize("json", pig_brain))
        response['msg'] = 'success'
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)


@require_http_methods(["GET"])
def GetBodyInfo(request):
    response = {}
    t = request.GET.get("type")
    print(t)
    try:
        pig_five = WorkInfo.objects.filter(Q(type=t), Q(small_type=5)).order_by("-point_num")[:3]
        tenderloin = WorkInfo.objects.filter(Q(type=t), Q(small_type=6)).order_by('-point_num')[:3]
        pork_chop = WorkInfo.objects.filter(Q(type=t), Q(small_type=7)).order_by('-point_num')[:3]
        pig_bone = WorkInfo.objects.filter(Q(type=t), Q(small_type=8)).order_by('-point_num')[:3]
        pig_tail = WorkInfo.objects.filter(Q(type=t), Q(small_type=9)).order_by('-point_num')[:3]
        response['pig_five'] = json.loads(serializers.serialize("json", pig_five))
        response['tenderloin'] = json.loads(serializers.serialize("json", tenderloin))
        response['pork_chop'] = json.loads(serializers.serialize("json", pork_chop))
        response['pig_bone'] = json.loads(serializers.serialize("json", pig_bone))
        response['pig_tail'] = json.loads(serializers.serialize("json", pig_tail))
        response['msg'] = 'success'
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)


@require_http_methods(["GET"])
def GetLegInfo(request):
    response = {}
    t = request.GET.get("type")
    print(t)
    try:
        pig_trotter = WorkInfo.objects.filter(Q(type=t), Q(small_type=10)).order_by("-point_num")[:3]
        elbow = WorkInfo.objects.filter(Q(type=t), Q(small_type=11)).order_by('-point_num')[:3]
        hock = WorkInfo.objects.filter(Q(type=t), Q(small_type=12)).order_by('-point_num')[:3]
        response['pig_trotter'] = json.loads(serializers.serialize("json", pig_trotter))
        response['elbow'] = json.loads(serializers.serialize("json", elbow))
        response['hock'] = json.loads(serializers.serialize("json", hock))
        response['msg'] = 'success'
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)


@require_http_methods(["GET"])
def GetVisceraInfo(request):
    response = {}
    t = request.GET.get("type")
    print(t)
    try:
        pork_liver = WorkInfo.objects.filter(Q(type=t), Q(small_type=13)).order_by("-point_num")[:3]
        pig_heart = WorkInfo.objects.filter(Q(type=t), Q(small_type=14)).order_by('-point_num')[:3]
        pork_stomach = WorkInfo.objects.filter(Q(type=t), Q(small_type=15)).order_by('-point_num')[:3]
        kidney = WorkInfo.objects.filter(Q(type=t), Q(small_type=16)).order_by('-point_num')[:3]
        pig_intestines = WorkInfo.objects.filter(Q(type=t), Q(small_type=17)).order_by('-point_num')[:3]
        response['pork_liver'] = json.loads(serializers.serialize("json", pork_liver))
        response['pig_heart'] = json.loads(serializers.serialize("json", pig_heart))
        response['pork_stomach'] = json.loads(serializers.serialize("json", pork_stomach))
        response['kidney'] = json.loads(serializers.serialize("json", kidney))
        response['pig_intestines'] = json.loads(serializers.serialize("json", pig_intestines))
        response['msg'] = 'success'
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)


class MoreWorkInfoViewSet(viewsets.ModelViewSet):
    queryset = WorkInfo.objects.all().order_by("-point_num")
    pagination_class = GoodsSetPagination
    serializer_class = WorkInfoSerializer
    filter_class = WorkInfoFilter
    filter_backends = (DjangoFilterBackend,)


def AddWorkInfo(request):
    if request.method == 'POST':
        data = json.loads(list(request.POST)[0])
        openid = data['openid']
        print(openid)
        user = UserInfo.objects.filter(openid=openid)
        if user:
            user[0].name = data['author_name']
            user[0].phone = data['author_phone']
            user[0].avater = data['author_img']
            user[0].save()
            work = WorkInfo()
            work.name = data["name"]
            work.food = data["need_food"]
            work.food_img = data["food_img"]
            work.type_id = data["type"]
            work.small_type_id = data["small_type"]
            work.user = user[0]
            work.introduce = data["des"]
            work.save()
            work_id = work.id
            return JsonResponse({"result": "ok", "id": work_id})
        else:
            return JsonResponse({"result": "error"})


def uploadImg(request):
    if request.method == 'POST':
        new_img = IMG(
            img=request.FILES.get('img'),
            name=request.FILES.get('img').name
        )
        new_img.save()
        name = request.FILES.get('img').name
        imgUrl = 'http://hz.cunyougo.com/media/img/' + name
        return JsonResponse({"imgUrl": imgUrl})


def checkout(request):
    types = request.GET.get("type")
    small_type = request.GET.get('small_type')
    openid = request.GET.get('openid')

    users = UserInfo.objects.filter(openid=openid)
    if users:
        user = users[0]
        workon = WorkInfo.objects.filter(Q(type=types), Q(small_type=small_type), Q(user=user))
        if workon:
            return JsonResponse({"result": "error"})
        else:
            return JsonResponse({"result": "ok"})
    else:
        return JsonResponse({"result": "openid-error"})


def giveZan(request):
    if request.method == "GET":
        openid = request.GET.get("openid")
        print("点赞检测", openid)
        work = request.GET.get("work")
        user = UserInfo.objects.filter(openid=openid)
        if user:
            data = time.strftime('%Y-%m-%d', time.localtime(time.time()))
            record = PraiseRecord.objects.filter(Q(user=user[0]), Q(work=work), Q(create_time=data))
            if record:
                return JsonResponse({"result": "error"})
            else:
                return JsonResponse({"result": "ok"})
        else:
            return JsonResponse({"result": "ok"})

    if request.method == "POST":

        data = json.loads(list(request.POST)[0])
        openid = data["openid"]
        print("点赞存储数据", openid)
        work = data["work"]
        works = WorkInfo.objects.filter(id=work)[0]
        works.point_num += 1
        works.save()
        record = PraiseRecord()
        users = UserInfo.objects.filter(openid=openid)
        if users:
            record.user = users[0]
            record.work_id = work
            record.save()
            return JsonResponse({"result": "ok"})
        else:
            return JsonResponse({"result": "error"})


def getWechatInfo(request):
    url = request.GET.get("url")
    ticket = new_jsapi_ticket()
    noncestr = get_nonce_str()
    timestamp = get_timeStamp()
    url = url
    str1 = 'jsapi_ticket={}&noncestr={}&timestamp={}&url={}'.format(ticket, noncestr, timestamp, url)
    s = sha1()
    print(str1)
    s.update(str1.encode())
    sign = s.hexdigest()
    print(sign)
    return JsonResponse({"signa": sign, "noncestr": noncestr, "stamp": timestamp, "appid": appID})


def share(request):
    id = request.GET.get("id")
    print(id)
    url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe63b30257b43fd76&redirect_uri=http%3a%2f%2fhz.cunyougo.com%2fshareInfo%3fid%3d" + id + "&response_type=code&scope=snsapi_userinfo&state=STATE1#wechat_redirect"
    return HttpResponseRedirect(url)


def shareInfo(request):
    code = request.GET.get("code")
    id = request.GET.get("id")
    unionid = request.session.get("unionid")
    print(unionid)
    if code:
        user = UserInfo.objects.filter(openid=unionid)
        print(user)
        if user:
            if id == "index":
                print("从主页分享过来的")
                return HttpResponseRedirect("/?openid={}".format(unionid))
            else:
                return HttpResponseRedirect("http://hz.cunyougo.com/#/detail?id={}&openid={}".format(id, unionid))
        else:
            response = requests.get(
                "https://api.weixin.qq.com/sns/oauth2/access_token?appid={}&secret={}&code={}&grant_type=authorization_code".format(
                    FAPPID, FSECRET, code)
            )
            js_res = json.loads(response.content.decode())
            openid = js_res["openid"]
            access_token = js_res["access_token"]
            res = requests.get(
                "https://api.weixin.qq.com/sns/userinfo?access_token={}&openid={}&lang=zh_CN".format(access_token,
                                                                                                     openid))
            userInfo = json.loads(res.content.decode())
            unionid = userInfo["unionid"]
            request.session["unionid"] = unionid
            users = UserInfo.objects.filter(openid=unionid)
            if users:
                print("用户存在")
                if id == "index":
                    print("从主页分享过来的")
                    return HttpResponseRedirect("/?openid={}".format(unionid))
                else:
                    return HttpResponseRedirect("http://hz.cunyougo.com/#/detail?id={}&openid={}".format(id, unionid))
            else:
                print("用户不存在")
                user2 = UserInfo()
                user2.openid = unionid
                user2.save()
                if id == "index":
                    print("从主页分享过来的")
                    return HttpResponseRedirect("/?openid={}".format(unionid))
                else:
                    return HttpResponseRedirect("http://hz.cunyougo.com/#/detail?id={}&openid={}".format(id, unionid))


def uploadImage(request):
    print("jinru ")
    media_id = request.GET.get("media_id")
    access_token = new_access_token()
    print("图片id", media_id)
    print(access_token)
    response = requests.get(
        "http://file.api.weixin.qq.com/cgi-bin/media/get?access_token={}&media_id={}".format(access_token, media_id))
    with open("/home/YearActive/media/img/{}.jpg".format(media_id), 'wb') as f:
        f.write(response.content)
    imgUrl = "{}.jpg".format(media_id)
    print(imgUrl)
    return JsonResponse({"imgUrl": imgUrl})


from io import BytesIO


def transformat_voice(amr_voice_b):
    from_fn = 'from.amr'
    to_fn = 'target.mp3'
    mp3_file = BytesIO()
    with open(from_fn, 'wb') as f_from:
        f_from.write(amr_voice_b)
    ff = ffmpy.FFmpeg(inputs={from_fn: None}, outputs={to_fn: None})
    ff.run()
    with open(to_fn, 'rb') as f_to:
        f_to.seek(0)
        mp3_file.write(f_to.read())
    os.remove(from_fn)
    os.remove(to_fn)
    mp3_file.seek(0)
    return mp3_file


from qiniu import Auth, put_file, etag
import qiniu.config
import os
from wechatpy.utils import check_signature
from wechatpy import parse_message, create_reply, WeChatClient

def flavor_index(request):
    return render(request, 'index.html')


def flavor_detail(request):
    return render(request, 'detail.html')


def flavor_result(request):
    return render(request, 'result.html')

def gw_index(request):
    return render(request, 'gw_index.html')


def replay(request):
    if request.method == 'GET':
        sign = request.GET.get("signature")
        echost = request.GET.get("echostr")
        timestamp = request.GET.get("timestamp")
        nonce = request.GET.get("nonce")
        token = "putuo"
        check_signature(token, sign, timestamp, nonce)
        response = HttpResponse(echost, content_type="text/plain")
        return response
    elif request.method == "POST":
        msg = parse_message(request.body)
        token = getToken()
        openid = str(msg.source)
        print(openid)
        if msg.type == 'text':
            print(msg.type)
            params = {
                "access_token":token,
                "touser":openid,
                "msgtype":"text",
                "content":"nihao"
            }
            response = requests.post("https://api.weixin.qq.com/cgi-bin/message/custom/send",params)
            print(response.content.decode())



def getToken():
    response = requests.get("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxf2095d4e996cc9f8&secret=3f9a6ab6f3dcab6bdf0e33df74d73829")
    return json.loads(response.content.decode()).get("access_token")


def search(request):
    return render(request, 'search.html')


def save_info(request):
    data = dict(request.POST)
    name = data.get("name")[0]
    iphone = data.get("iphone")[0]
    job = data.get("job")[0]
    jobs = JobList()
    jobs.name = name
    jobs.iphone = iphone
    jobs.job = job
    jobs.save()
    return JsonResponse({"res": "ok"})
