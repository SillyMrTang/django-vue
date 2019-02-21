<template>
    <div class="hello">
        <div class="bg-img">
            <div class="label-item">
                <img class="label-img" id="head" :src="imgUrl + HeadImg" alt=""
                     @click="changeLabel(1)">
                <img class="label-img" id="body" :src="imgUrl + BodyImg" alt=""
                     @click="changeLabel(2)">
                <img class="label-img" id="leg" :src="imgUrl + LegImg"
                     style="margin-top: 20px;" alt="" @click="changeLabel(3)">
                <div id="haslet">
                    <img class="label-img" :src="imgUrl + VisceraImg"
                         style="margin-top: 20px;" alt="" @click="changeLabel(4)">
                    <p>活动时间: 2018.12.27-2019.1.13</p>
                </div>
            </div>

        </div>

        <div class="content" :style="[{height:label==1 ? '614px' : label==2?'352px':label==3?'484px':label==4?'738px':''}]">
            <div class="content-item" v-if="label == 1">
                <div class="row">
                    <div class="no-data" v-if="headList.length == 0">暂无作品</div>
                    <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in headList" @click="ToDetail(item.pk)">
                        <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                             alt="">
                        <div class="item-info">
                            <span>{{item.fields.point_num}}</span>
                            <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                        </div>
                        <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                    </div>
                    <div class="left-label"></div>
                </div>
                <div class="row m-row">
                    <div class="no-data" v-if="mouthList.length == 0">暂无作品</div>
                    <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in mouthList" @click="ToDetail(item.pk)">
                        <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                             alt="">
                        <div class="item-info">
                            <span>{{item.fields.point_num}}</span>
                            <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                        </div>
                        <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                    </div>
                    <div class="left-label2"></div>
                </div>
                <div class="row m-row">
                    <div class="no-data" v-if="earList.length == 0">暂无作品</div>
                    <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in earList" @click="ToDetail(item.pk)">
                        <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                             alt="">
                        <div class="item-info">
                            <span>{{item.fields.point_num}}</span>
                            <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                        </div>
                        <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                    </div>
                    <div class="left-label3"></div>
                </div>
                <div class="row m-row">
                    <div class="no-data" v-if="brainList.length == 0">暂无作品</div>
                    <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in brainList" @click="ToDetail(item.pk)">
                        <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                             alt="">
                        <div class="item-info">
                            <span>{{item.fields.point_num}}</span>
                            <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                        </div>
                        <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                    </div>
                    <div class="left-label4"></div>
                </div>
            </div>
            <div class="content-item body" v-else-if="label == 2">
                <div>
                    <div class="row">
                        <div class="no-data" v-if="fiveList.length == 0">暂无作品</div>
                        <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in fiveList"
                             @click="ToDetail(item.pk)">
                            <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                                 alt="">
                            <div class="item-info">
                                <span>{{item.fields.point_num}}</span>
                                <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                            </div>
                            <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                        </div>
                    </div>
                    <div class="row m-row">
                        <div class="no-data" v-if="tenderList.length == 0">暂无作品</div>
                        <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in tenderList"
                             @click="ToDetail(item.pk)">
                            <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                                 alt="">
                            <div class="item-info">
                                <span>{{item.fields.point_num}}</span>
                                <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                            </div>
                            <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                        </div>
                    </div>
                    <!--<div class="row m-row">-->
                        <!--<div class="no-data" v-if="porkList.length == 0">暂无作品</div>-->
                        <!--<div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in porkList"-->
                             <!--@click="ToDetail(item.pk)">-->
                            <!--<img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"-->
                                 <!--alt="">-->
                            <!--<div class="item-info">-->
                                <!--<span>{{item.fields.point_num}}</span>-->
                                <!--<img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">-->
                            <!--</div>-->
                            <!--<img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">-->
                        <!--</div>-->

                    <!--</div>-->
                    <!--<div class="row m-row">-->
                        <!--<div class="no-data" v-if="boneList.length == 0">暂无作品</div>-->
                        <!--<div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in boneList"-->
                             <!--@click="ToDetail(item.pk)">-->
                            <!--<img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"-->
                                 <!--alt="">-->
                            <!--<div class="item-info">-->
                                <!--<span>{{item.fields.point_num}}</span>-->
                                <!--<img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">-->
                            <!--</div>-->
                            <!--<img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">-->
                        <!--</div>-->

                    <!--</div>-->
                    <!--<div class="row m-row">-->
                        <!--<div class="no-data" v-if="tailList.length == 0">暂无作品</div>-->
                        <!--<div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in tailList"-->
                             <!--@click="ToDetail(item.pk)">-->
                            <!--<img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"-->
                                 <!--alt="">-->
                            <!--<div class="item-info">-->
                                <!--<span>{{item.fields.point_num}}</span>-->
                                <!--<img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">-->
                            <!--</div>-->
                            <!--<img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">-->
                        <!--</div>-->

                    <!--</div>-->
                </div>

                <div class="left-label-body"></div>
                <div class="left-label2-body"></div>
                <!--<div class="left-label3-body"></div>-->
                <!--<div class="left-label4-body"></div>-->
                <!--<div class="left-label5-body"></div>-->
            </div>
            <div class="content-item let" v-else-if="label == 3">
                <div>
                    <div class="row">
                        <div class="no-data" v-if="trotterList.length == 0">暂无作品</div>
                        <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in trotterList"
                             @click="ToDetail(item.pk)">
                            <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                                 alt="">
                            <div class="item-info">
                                <span>{{item.fields.point_num}}</span>
                                <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                            </div>
                            <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                        </div>

                    </div>
                    <div class="row m-row">
                        <div class="no-data" v-if="elbowList.length == 0">暂无作品</div>
                        <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in elbowList"
                             @click="ToDetail(item.pk)">
                            <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                                 alt="">
                            <div class="item-info">
                                <span>{{item.fields.point_num}}</span>
                                <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                            </div>
                            <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                        </div>

                    </div>
                    <div class="row m-row">
                        <div class="no-data" v-if="hockList.length == 0">暂无作品</div>
                        <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in hockList"
                             @click="ToDetail(item.pk)">
                            <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                                 alt="">
                            <div class="item-info">
                                <span>{{item.fields.point_num}}</span>
                                <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                            </div>
                            <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                        </div>

                    </div>
                </div>
                <div class="left-label-let"></div>
                <div class="left-label2-let"></div>
                <div class="left-label3-let"></div>
            </div>
            <div class="content-item haslet" v-else>
                <div>
                    <div class="row">
                        <div class="no-data" v-if="liverList.length == 0">暂无作品</div>
                        <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in liverList"
                             @click="ToDetail(item.pk)">
                            <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                                 alt="">
                            <div class="item-info">
                                <span>{{item.fields.point_num}}</span>
                                <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                            </div>
                            <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                        </div>
                    </div>
                    <div class="row m-row">
                        <div class="no-data" v-if="heartList.length == 0">暂无作品</div>
                        <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in heartList"
                             @click="ToDetail(item.pk)">
                            <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                                 alt="">
                            <div class="item-info">
                                <span>{{item.fields.point_num}}</span>
                                <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                            </div>
                            <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                        </div>
                    </div>
                    <div class="row m-row">
                        <div class="no-data" v-if="stomachList.length == 0">暂无作品</div>
                        <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in stomachList"
                             @click="ToDetail(item.pk)">
                            <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                                 alt="">
                            <div class="item-info">
                                <span>{{item.fields.point_num}}</span>
                                <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                            </div>
                            <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                        </div>
                    </div>
                    <div class="row m-row">
                        <div class="no-data" v-if="kidneyList.length == 0">暂无作品</div>
                        <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in kidneyList"
                             @click="ToDetail(item.pk)">
                            <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                                 alt="">
                            <div class="item-info">
                                <span>{{item.fields.point_num}}</span>
                                <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                            </div>
                            <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                        </div>
                    </div>
                    <div class="row m-row">
                        <div class="no-data" v-if="intestinesList.length == 0">暂无作品</div>
                        <div class="col-xs-6 col-sm-4" v-else v-for="(item,index) in intestinesList"
                             @click="ToDetail(item.pk)">
                            <img :class="[index==0?'result-img':index==1?'second':'three']" :src="item.fields.food_img"
                                 alt="">
                            <div class="item-info">
                                <span>{{item.fields.point_num}}</span>
                                <img src="http://app-image-test.cunyougo.com/active/zan.png" alt="">
                            </div>
                            <img class="first" :src="imgUrl + (index + 1) + '.png'" alt="">
                        </div>
                    </div>
                </div>

                <div class="left-label-haslet"></div>
                <div class="left-label2-haslet"></div>
                <div class="left-label3-haslet"></div>
                <div class="left-label4-haslet"></div>
                <div class="left-label5-haslet"></div>
            </div>
            <div class="more" @click="goMore"></div>
            <!--<div class="rule-title"></div>-->
            <!--<div class="left-img"></div>-->
            <!--<div class="rule-info"></div>-->
        </div>
        <div class="bg3">

        </div>
        <div class="footer" @click="TakePart">
            <img src="http://app-image-test.cunyougo.com/active/canjia.png" class="footer-img" alt="">
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import wx from 'weixin-js-sdk'

    const _this = wx

    export default {
        name: 'index',
        data() {
            return {
                imgUrl: this.COMMON.imgUrl,
                HeadImg: "zt2.png",
                BodyImg: "zs1.png",
                LegImg: "ztui1.png",
                VisceraImg: "znz1.png",
                label: 1,
                headList: [],
                mouthList: [],
                earList: [],
                brainList: [],
                fiveList: [],
                tenderList: [],
                porkList: [],
                boneList: [],
                tailList: [],
                trotterList: [],
                elbowList: [],
                hockList: [],
                liverList: [],
                heartList: [],
                stomachList: [],
                kidneyList: [],
                intestinesList: [],
            }
        },
        created() {

            var openid = window.location.href.split("#")[0].split("openid=")[1];
            var isOpenid = localStorage.getItem('openid');
            if (isOpenid) {
                localStorage.setItem('openid', isOpenid);
            } else {
                localStorage.setItem('openid', openid);
            }
            axios.get(this.COMMON.httpUrl2 + 'getWechatInfo/', {params: {url: window.location.href.split("#")[0]}}).then((res) => {

                _this.config({
                    debug: false,
                    appId: res.data.appid,
                    timestamp: res.data.stamp,
                    nonceStr: res.data.noncestr,
                    signature: res.data.signa,
                    jsApiList: ['playVoice', 'pauseVoice', 'stopVoice', 'updateAppMessageShareData', 'onMenuShareAppMessage', 'updateTimelineShareData']
                });
                _this.ready(() => {

                    _this.updateAppMessageShareData({
                        title: '年味大赛，快来给我助力！', // 分享标题
                        desc: '给好友助力，享顶级福利！', // 分享描述
                        link: "http://hz.cunyougo.com/share?id=" + "index", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: 'http://app-image-test.cunyougo.com/active/logos.png', // 分享图标
                        success: function () {

                        }
                    })
                    _this.updateTimelineShareData({
                        title: '年味大赛，快来给我助力！', // 分享标题
                        desc: '给好友助力，享顶级福利！', // 分享描述
                        link: "http://hz.cunyougo.com/share?id=" + "index", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: 'http://app-image-test.cunyougo.com/active/logos.png', // 分享图标
                        success: function () {

                        }
                    })
                });
                _this.error((res) => {
                    alert("jsapi配置错误", res.errMsg);
                })
            })
        },
        mounted: function () {

            this.getHeadInfo()
        },
        methods: {
            getHeadInfo() {
                axios.get(this.COMMON.httpUrl2 + 'GetHeadInfo/')
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.msg == "success") {
                            this.headList = res.data.pig_head_meat;
                            this.mouthList = res.data.pig_mouth;
                            this.earList = res.data.pig_ear;
                            this.brainList = res.data.pig_brain;
                        } else {
                            console.log("错误信息");
                        }
                    })
            },
            changeLabel(val) {
                if (val == 1) {
                    this.getHeadInfo();
                    this.HeadImg = "zt2.png",
                        this.BodyImg = "zs1.png",
                        this.LegImg = "ztui1.png",
                        this.VisceraImg = "znz1.png",
                        this.label = val
                }
                else if (val == 2) {

                    this.HeadImg = "zt1.png",
                        this.BodyImg = "zs2.png",
                        this.LegImg = "ztui1.png",
                        this.VisceraImg = "znz1.png",
                        this.label = val;
                    axios.get(this.COMMON.httpUrl2 + 'GetBodyInfo/', {  //params参数必写 , 如果没有参数传{}也可以
                        params: {
                            type: val
                        }
                    }).then((res) => {
                        if (res.data.msg == "success") {
                            this.fiveList = res.data.pig_five;
                            this.tenderList = res.data.tenderloin;
                            this.porkList = res.data.pork_chop;
                            this.boneList = res.data.pig_bone;
                            this.tailList = res.data.pig_tail;
                        } else {
                            console.log("错误信息");
                        }
                    })

                }
                else if (val == 3) {
                    this.HeadImg = "zt1.png",
                        this.BodyImg = "zs1.png",
                        this.LegImg = "ztui2.png",
                        this.VisceraImg = "znz1.png",
                        this.label = val;
                    axios.get(this.COMMON.httpUrl2 + 'GetLegInfo/', {  //params参数必写 , 如果没有参数传{}也可以
                        params: {
                            type: val
                        }
                    }).then((res) => {
                        if (res.data.msg == "success") {
                            this.trotterList = res.data.pig_trotter;
                            this.elbowList = res.data.elbow;
                            this.hockList = res.data.hock;
                        } else {
                            console.log("错误信息");
                        }
                    })
                }
                else if (val == 4) {
                    this.HeadImg = "zt1.png",
                        this.BodyImg = "zs1.png",
                        this.LegImg = "ztui1.png",
                        this.VisceraImg = "znz2.png",
                        this.label = val;
                    axios.get(this.COMMON.httpUrl2 + 'GetVisceraInfo/', {  //params参数必写 , 如果没有参数传{}也可以
                        params: {
                            type: val
                        }
                    }).then((res) => {
                        if (res.data.msg == "success") {
                            this.liverList = res.data.pork_liver;
                            this.heartList = res.data.pig_heart;
                            this.stomachList = res.data.pork_stomach;
                            this.kidneyList = res.data.kidney;
                            this.intestinesList = res.data.pig_intestines;
                        } else {
                            console.log("错误信息");
                        }
                    })
                }
            },
            goMore() {
                console.log(this.label);
                this.$router.push({path: '/more', query: {label: this.label}})
            },
            ToDetail(id) {
                this.$router.push({path: '/detail', query: {id: id,}})
            },
            TakePart() {
                var end = new Date("2019-1-14 17:00");
                var endTime = end.getTime();
                var now = new Date(this.getNowDate());
                var nowTime = now.getTime();
                if (endTime - nowTime == 0) {
                    console.log("活动结束");
                } else {
                    this.$router.push({path: '/take'})
                }

            },
            getNowDate() {
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                if (month < 10) {
                    month = "0" + month;
                }
                if (day < 10) {
                    day = "0" + day;
                }
                return year + "-" + month + "-" + day + " " + hours + ":" + minutes;
            },
            share() {

            },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    html {
        margin: 0 auto;
        height: 100%;
        background-color: #EEEEEE;
    }

    /*去广告*/
    body > iframe {
        display: none;
    }

    body {
        background: #f4f4f4;
        font-family: "微软雅黑", serif;
        overflow-y: scroll;
        overflow-x: hidden;
        min-height: 100%;
        box-sizing: border-box;
        position: relative;
    }

    body > header, body > footer {
        width: 6.4rem;
        left: auto;
        right: auto;
        overflow: hidden
    }

    div {
        margin: 0;
        border: 0;
        padding: 0;
    }

    .footer-img {
        width: 100%;
        height: 100%;
    }

    .label-img {
        width: 158px;
        height: 67px;

    }

    .label-item {

    }

    #head {
        position: absolute;
        left: 15px;
        top: 227px;
    }

    #body {
        position: absolute;
        left: 115px;
        top: 298px;
    }

    #leg {
        position: absolute;
        left: 5px;
        top: 364px;
    }

    #haslet {
        position: absolute;
        left: 90px;
        top: 436px;
    }

    p {
        color: rgba(255, 207, 132, 1);
        font-size: 16px;
        margin-top: 20px;
        font-weight: 400;

    }

    .content {
        width: 100%;
        height: 614px;
        background: url("http://app-image-test.cunyougo.com/active/120.png") no-repeat center;
        background-size: 100% 100%;
        margin: 0 auto;
        position: relative;

    }

    .content-item {
        width: 300px;
        height: 550px;
        background: rgba(0, 0, 0, 0.2);
        margin-left: 60px;
        border: 5px solid hsla(0, 0%, 100%, .1);
        margin-bottom: 18px;
    }

    .body {
        height: 274px;
    }

    .let {
        height: 406px;
    }

    .haslet {
        height: 668px;
    }

    .row {
        margin-top: 20px;
    }

    .m-row {
        margin-top: 8px;
    }

    .col-xs-6 {
        width: 82px;
        margin-left: 5px;
    }

    .col-xs-6:first-child {
        margin-left: 20px;
    }

    .left-label {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zhulian.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 20px;
    }

    .bg3 {
        width: 100%;
        height: 711px;
        background: url("http://app-image-test.cunyougo.com/active/bg_05.png") no-repeat center;
        background-size: 100% 100%;
    }

    .left-label-body {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zhupi.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 20px;
    }

    .left-label-let {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zzhua.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 20px;
    }

    .no-data {
        height: 124px;
        margin: auto;
        line-height: 100px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 207, 132, 1);
    }

    .left-label-haslet {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zg.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 20px;
    }

    .left-label2 {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zhushetou.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 151px;
    }

    .left-label2-body {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zyb.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 151px;
    }

    .left-label2-let {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zz.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 151px;
    }

    .left-label2-haslet {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zx.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 151px;
    }

    .left-label3 {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zed.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 282px;
    }

    .left-label3-body {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zp.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 282px;
    }

    .left-label3-let {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/tp.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 282px;
    }

    .left-label3-haslet {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zd.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 282px;
    }

    .left-label4 {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zn.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 413px;
    }

    .left-label4-body {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zgu.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 413px;
    }

    .left-label4-haslet {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zy.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 413px;
    }

    .left-label5-body {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zyb.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 545px;
    }

    .left-label5-haslet {
        width: 40px;
        height: 100px;
        background: url("http://app-image-test.cunyougo.com/active/zc.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 25px;
        top: 545px;
    }

    .item-info {
        width: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .item-info img {
        width: 12.5px;
        height: 12px;
    }

    span {
        color: #E9AD4E;
        font-size: 14px;

    }

    .result-img {
        width: 82px;
        height: 82px;
        border-radius: 2.5px;
        border: 3px solid rgba(255, 228, 75, 1);

    }

    .first {
        width: 37px;
        height: 31.5px;
        margin-top: -228px;
        margin-left: -74px;

    }

    .second {
        width: 82px;
        height: 82px;
        border-radius: 2.5px;
        border: 3px solid #97A1BB;
    }

    .three {
        width: 82px;
        height: 82px;
        border-radius: 2.5px;
        border: 3px solid #DB7C4D;
    }

    .more {
        width: 184px;
        height: 33.5px;
        background: url("http://app-image-test.cunyougo.com/active/more.png") no-repeat center;
        background-size: cover;
        margin: auto;
    }

    .rule-title {
        width: 182.5px;
        height: 45px;
        background: url("http://app-image-test.cunyougo.com/active/huodongguize.png") no-repeat center;
        background-size: cover;
        margin: auto;
        margin-top: 25px;

    }

    .rule-info {
        width: 325px;
        height: 190px;
        background: url("http://app-image-test.cunyougo.com/active/more.png") no-repeat center;
        background-size: 100% 100%;

    }

    .left-img {
        width: 93.5px;
        height: 138px;
        background: url("http://app-image-test.cunyougo.com/active/zhu2.png") no-repeat center;
        background-size: cover;
        margin-top: -80px;
    }

    .bg-img {
        width: 100%;
        height: 603px;
        background: url("http://app-image-test.cunyougo.com/active/bg_01.png") no-repeat center;
        background-size: 100% 100%;
    }

    .no-begin {
        font-size: 16px;
        font-weight: 400;
        color: rgba(253, 194, 101, 1);
        text-align: center;
        line-height: 668px;
    }

    .two-data {
        line-height: 406px;
    }

    .footer {
        position: fixed;
        left: 0;
        bottom: -4px;
    }
</style>
