<template>
    <div class="detail">
        <div :class="[workObj.introduce?'bg-img':workObj.audio?'small-bg-img':'']">
            <div class="title">
                <span>{{workObj.name}}</span>
            </div>
            <div class="product-detail">
                <img :src="workObj.food_img" alt="">
                <div class="author-info">
                    <div class="avater-info">
                        <img class="avater-img" :src="workObj.user.avater" alt="">
                        <p class="avater-name">{{workObj.user.name}}</p>
                    </div>
                    <div class="avater-info">
                        <p class="zan-num">{{workObj.point_num}}</p>
                        <img id="zan" src="http://app-image-test.cunyougo.com/active/zan-9.png" alt="">
                    </div>
                </div>
            </div>
            <div class="work-introduce" v-if="workObj.introduce">
                <div>作品介绍</div>
                <textarea name="" id="test-des" readonly>{{workObj.introduce}}</textarea>
            </div>
            <!--<div class="type" v-if="workObj.audio">-->
            <!--<div class="type-title">语音介绍</div>-->
            <!--&lt;!&ndash;<img @click="stopPlay" src="http://app-image-test.cunyougo.com/active/stop.png"&ndash;&gt;-->
            <!--&lt;!&ndash;class="play" alt="" v-if="isPlay">&ndash;&gt;-->
            <!--<audio id="audio" :src="workObj.audio" controls loop autoplay></audio>-->
            <!--<img src="http://app-image-test.cunyougo.com/active/play.png"-->
            <!--class="play" alt="">-->
            <!--</div>-->
            <div class="need-food">
                <div>所需食材</div>
                <textarea name="" id="test-need" readonly>{{workObj.food}}</textarea>
            </div>
            <div class="bottom-img"></div>
            <!--<div class="left-img"></div>-->
            <div class="dianzan" id="button" @click="shield()"
                 :style="{backgroundImage: 'url(' + imgUrl + ')'}"></div>
            <div id="test" v-if="show"></div>
            <div id="log_window" v-if="show">
                <div id="icon" @click="cancel_shield()"></div>
            </div>
            <div id="shareInfo" v-if="shareShow"></div>
            <div id="shareInfoImg" v-if="shareShow">
                <div id="icon-2" @click="cancel_shield()"></div>
            </div>
            <div class="returnIndex" @click="back" v-if="shareButton"></div>
            <div class="footer" v-if="showButton" @click="share">
                <img src="http://app-image-test.cunyougo.com/active/share.png" class="footer-img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import wx from 'weixin-js-sdk'

    const _this = wx
    export default {
        name: "detail",
        data() {
            return {
                workObj: {},
                show: false,
                imgUrl: "http://app-image-test.cunyougo.com/active/button3.gif",
                isPlay: false,
                showButton: false,
                shareButton: false,
                shareShow: false,
                openid: ""
            }
        },
        created() {
            var apiUrl = window.location.href.split("#")[0];
            if (window.location.href.indexOf("&") != -1) {
                this.shareButton = true
            }else{
                this.showButton = true
            }
            var openid = localStorage.getItem('openid');

            if (openid) {
                this.openid = openid
            } else {
               
                if (window.location.href.indexOf("&") == -1) {
                    this.openid = apiUrl.split("openid=")[1];
                    
                    localStorage.setItem('openid', this.openid);

                } else {
                    this.openid = window.location.href.split("openid=")[1];
                    localStorage.setItem('openid', this.openid);
                }

            }
            axios.get(this.COMMON.httpUrl2 + 'getWechatInfo/', {params: {url: apiUrl}}).then((res) => {

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
                        link: "http://hz.cunyougo.com/share?id=" + this.workObj.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: 'http://app-image-test.cunyougo.com/active/logos.png', // 分享图标
                        success: function () {

                        }
                    });
                    _this.updateTimelineShareData({
                        title: '年味大赛，快来给我助力！', // 分享标题
                        desc: '给好友助力，享顶级福利！', // 分享描述
                        link: "http://hz.cunyougo.com/share?id=" + this.workObj.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
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
        mounted() {
            var id = this.$router.currentRoute.query.id;
            var comeForm = this.$router.currentRoute.query.form;
            if (comeForm) {
                if (comeForm == "add") {
                    this.showButton = true
                }
            }
            this.getWorkDetail(id)
        },
        methods: {
            getWorkDetail(id) {
                axios.get(this.COMMON.httpUrl + 'MoreWorkInfo/', {params: {id: id}})
                    .then((res) => {
                        console.log(res.data);
                        if (res.data) {
                            this.workObj = res.data.results[0]
                        } else {
                            console.log("错误信息");
                        }
                    })
            },
            shield() {

                    axios.get(this.COMMON.httpUrl2 + "giveZan/", {
                        params: {
                            openid: this.openid.indexOf("&") != -1?this.openid.split("&")[0]:this.openid,
                            work: this.workObj.id
                        }
                    }).then((res) => {
                        console.log(res.data.result);
                        if (res.data.result == "ok") {
                            var val = {
                                openid: this.openid.indexOf("&") != -1?this.openid.split("&")[0]:this.openid,
                                work: this.workObj.id
                            };
                            axios.post(this.COMMON.httpUrl2 + 'giveZan/', JSON.stringify(val),)
                                .then((res) => {
                                    console.log(res.data);
                                    if (res.data.result == 'ok') {
                                        this.show = true;
                                        this.imgUrl = "http://app-image-test.cunyougo.com/active/button1.png";
                                        this.workObj.point_num += 1
                                    }
                                    else {
                                        alert(this.workObj.point_num)
                                        this.$Message.error("授权登录失败，无法给好友点赞！")
                                    }
                                })

                        } else {
                            this.$Message.error("您已赞过该菜品，明天再来哟！")

                        }
                    })

              
            },
            isGive() {

            },
            cancel_shield() {
                this.show = false;
                this.shareShow = false
            },
            audioPlay() {
                this.isPlay = true;
                _this.playVoice({
                    localId: this.workObj.audio // 需要播放的音频的本地ID，由stopRecord接口获得
                });
            },
            stopPlay() {
                this.isPlay = false;
                _this.pauseVoice({
                    localId: this.workObj.audio // 需要暂停的音频的本地ID，由stopRecord接口获得
                });
            },
            share() {
                this.shareShow = true;
                _this.updateAppMessageShareData({
                    title: '年味大赛，快来给我助力！', // 分享标题
                    desc: '给好友助力，享顶级福利！', // 分享描述
                    link: "http://hz.cunyougo.com/share?id=" + this.workObj.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'http://app-image-test.cunyougo.com/active/logos.png', // 分享图标
                    success: function () {

                    }
                })
                _this.updateTimelineShareData({
                    title: '年味大赛，快来给我助力！', // 分享标题
                    desc: '给好友助力，享顶级福利！', // 分享描述
                    link: "http://hz.cunyougo.com/share?id=" + this.workObj.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'http://app-image-test.cunyougo.com/active/logos.png', // 分享图标
                    success: function () {

                    }
                })
            },
            back() {
                this.$router.push({path: '/'})
            }

        }
    }
</script>


<style scoped>
    body {
        margin: 0;
    }

    .bg-img {
        width: 100%;
        height: 878px;
        background: url("http://app-image-test.cunyougo.com/active/bg-5.png") no-repeat center;
        background-size: 100% 100%;
    }

    .small-bg-img {
        width: 100%;
        height: 812px;
        background: url("http://app-image-test.cunyougo.com/active/bg001.png") no-repeat center;
        background-size: 100% 100%;
    }

    .bottom-img {
        width: 100%;
        height: 195px;
        background: url("http://app-image-test.cunyougo.com/active/ccc.png") no-repeat center;
        background-size: 100% 100%;
    }

    .title {
        font-size: 22px;
        font-weight: 400;
        color: rgba(15, 76, 86, 1);
        text-align: center;
        position: relative;
        top: 84px;
        left: 0;
    }

    .returnIndex {
        width: 100%;
        height: 50px;
        background: url("http://app-image-test.cunyougo.com/active/more-pack.png") no-repeat center;
        background-size: 100% 100%;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    #test-des {
        font-size: 15px;
        font-weight: 400;
        color: rgb(255, 223, 173);
        margin: 0px 11px 19px 18px;
        width: 244px;
        height: 100px;
        background-color: rgb(0, 0, 0, 0);
        border: none;
    }

    #test-need {
        font-size: 15px;
        font-weight: 400;
        color: #ffdfad;
        width: 244px;
        background-color: rgb(0, 0, 0, 0);
        border: none;
        height: 48px;
        margin-left: 18px;
    }

    .type {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .type-title {
        width: 110px;
        height: 36px;
        background: rgba(0, 0, 0, 0.2);
        line-height: 36px;
        text-align: center;
        font-size: 19px;
        font-weight: 400;
        color: rgba(253, 194, 101, 1);
        margin-left: -110px;

    }

    .play {
        width: 36px;
        height: 36px;
        margin-left: 20px
    }

    .product-detail {
        width: 275px;
        height: 320px;
        margin: auto;
        margin-top: 121px;

    }

    .topLitte {
        top: 675px;
    }

    .footer {
        position: fixed;
        left: 0;
        bottom: -4px;
    }

    .footer-img {
        width: 100%;
        height: 100%;
    }

    .product-detail img {
        width: 275px;
        height: 275px;
    }

    .author-info {

        height: 46px;
        background: rgba(255, 228, 152, 1);

        display: flex;
        justify-content: space-between;
        padding: 0 10px;

    }

    .author-info .avater-img {
        width: 25px;
        height: 25px;
        border-radius: 50%;

    }

    .avater-info {
        display: flex;
        flex-direction: row;
        align-items: center
    }

    .avater-name {
        font-size: 16px;
        font-weight: 400;
        color: rgba(119, 120, 43, 1);
        margin-left: 6px
    }

    .zan-num {
        font-size: 15px;
        font-weight: 400;
        color: rgba(119, 120, 43, 1);
        margin-right: 5px
    }

    #zan {
        width: 15px;
        height: 14px;
    }

    .work-introduce {
        width: 275px;
        height: 158px;
        background: rgba(0, 0, 0, 0.2);
        margin: auto;
        margin-top: 15px;
        text-align: -webkit-auto;

    }

    .work-introduce div:first-child {
        font-size: 19px;
        font-weight: 400;
        color: rgba(253, 194, 101, 1);
        margin: 0px 0px 9px 18px;
        padding-top: 8px;

    }

    .work-introduce div:last-child {
        font-size: 15px;
        font-weight: 400;
        color: rgba(255, 223, 173, 1);
        margin: 0px 11px 19px 18px;
    }

    .need-food {
        width: 275px;
        height: 102px;
        background: rgba(0, 0, 0, 0.2);
        margin: auto;
        margin-top: 15px;
        text-align: -webkit-auto;

    }

    .need-food div:first-child {
        font-size: 19px;
        font-weight: 400;
        color: rgba(253, 194, 101, 1);
        margin: 0px 0px 9px 18px;
        padding-top: 8px;
    }

    .need-food div:last-child {
        font-size: 15px;
        font-weight: 400;
        color: rgba(255, 223, 173, 1);
        margin: 0px 11px 19px 18px;
    }

    .left-img {
        width: 80px;
        height: 106px;
        background: url("http://app-image-test.cunyougo.com/active/zhu8.png") no-repeat center;
        background-size: 100% 100%;
    }

    .dianzan {
        width: 150px;
        height: 90px;
        background: url("http://app-image-test.cunyougo.com/active/button3.gif") no-repeat center;
        background-size: 100% 100%;
        position: absolute;
        left: 30%;
        top: 800px;

    }

    .small-dianzan {
        top: 750px;
    }

    .clicked {
        width: 150px;
        height: 90px;
        background: url("http://app-image-test.cunyougo.com/active/button1.png") no-repeat center;
        background-size: 100% 100%;
        position: absolute;
        left: 30%;
        top: 775px;

    }

    #test {
        width: 100%;
        height: 1000px;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        opacity: 0.8;
        /*兼容IE8及以下版本浏览器*/
        filter: alpha(opacity=30);
    }

    #shareInfo {
        width: 100%;
        height: 1000px;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        opacity: 0.8;
        /*兼容IE8及以下版本浏览器*/
        filter: alpha(opacity=30);
    }

    #log_window {
        background: url("http://app-image-test.cunyougo.com/active/mutong2.png") no-repeat center center;
        width: 391px;
        height: 342px;
        background-size: 100% 100%;
        position: fixed;
        z-index: 3;
        top: 30px;
        bottom: 0px;
        left: 15px;
        right: 0;
    }

    #shareInfoImg {
        background: url("http://app-image-test.cunyougo.com/active/neirong.png") no-repeat center center;
        width: 321px;
        height: 394px;
        background-size: 100% 100%;
        position: fixed;
        z-index: 3;
        top: 30px;
        bottom: 0px;
        left: 40px;
        right: 0;
    }

    #icon {
        background: url("http://app-image-test.cunyougo.com/active/close2.png") no-repeat center center;
        position: fixed;
        z-index: 3;
        top: 375px;
        bottom: 0px;
        left: 0px;
        right: 0;
    }

    #icon-2 {
        background: url("http://app-image-test.cunyougo.com/active/close2.png") no-repeat center center;
        position: fixed;
        z-index: 3;
        top: 450px;
        bottom: 0px;
        left: 0px;
        right: 0;
    }


</style>
