# coding=utf-8
from YearActive.settings import appID, appsecret
import requests


def new_access_token():
    url = 'https://api.weixin.qq.com/cgi-bin/token'
    params = {
        'grant_type': 'client_credential',
        'appid': appID,
        'secret': appsecret
    }
    response = requests.get(url, params=params)
    print(response.content.decode())
    accesstoken = response.json().get('access_token')

    return accesstoken


def new_jsapi_ticket():
    url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket'
    access_token = new_access_token()
    print(access_token)
    parmertes = {
        'access_token': access_token,
        'type': 'jsapi'
    }
    response = requests.get(url, params=parmertes)
    ticket = response.json().get('ticket')
    return ticket
