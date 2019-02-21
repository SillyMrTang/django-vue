# coding=utf-8
import uuid

import hashlib
from datetime import datetime
import xml.etree.ElementTree as ET
import time


def get_nonce_str():
    # 生成随机字符串，有效字符a-zA-Z0-9
    return "".join(str(uuid.uuid4()).split("-"))


def get_timeStamp():
    # 获得时间戳
    return int(time.time())


def reply(msg, ok=True):
    code = "SUCCESS" if ok else "FAIL"
    return trans_dict_to_xml(dict(return_code=code, return_msg=msg))


def trans_dict_to_xml(params):
    # 将dict转化为xml
    params_list = []
    for k in sorted(params.keys()):
        v = params.get(k)
        if k == 'detail' and not v.startswith('<![CDATA['):
            v = '<![CDATA[{}]]>'.format(v)

        params_list.append('<{key}>{value}</{key}>'.format(key=k, value=v))
    return '<xml>{}</xml>'.format(''.join(params_list))


def xmlToArray(xml):
    # 将xml转化为dict
    array_data = {}
    root = ET.fromstring(xml)
    for key in root:
        value = key.text
        array_data[key.tag] = value
    return array_data
