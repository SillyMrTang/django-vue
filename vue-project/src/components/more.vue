<template>
    <div class="more">
        <div class="bg-img">
            <div class="title">
                <img :src="label == 1? titleImg1 :label == 2?titleImg2:label == 3?titleImg3:titleImg4" alt="">
            </div>
            <div class="label-item" v-if="label == 1">
                <img class="label-img" :src="imgUrl + ztrImg" @click="changeLabel(1)">
                <img class="label-img" :src="imgUrl + zzImg" @click="changeLabel(2)">
                <img class="label-img" :src="imgUrl + zedImg" style="margin-top: 20px;" @click="changeLabel(3)">
                <img class="label-img" :src="imgUrl + znImg" style="margin-top: 20px;" alt="" @click="changeLabel(4)">
            </div>
            <div class="label-item" v-else-if="label == 2">
                <img class="label-img" :src="imgUrl + zwhImg" alt="" @click="changeLabel(5)">
                <img class="label-img" :src="imgUrl + zybImg" alt="" @click="changeLabel(9)">
            </div>
            <div class="label-item" v-else-if="label == 3">
                <img class="label-img" :src="imgUrl + zzhImg" alt="" @click="changeLabel(10)">
                <img class="label-img" :src="imgUrl + zoImg" alt="" @click="changeLabel(11)">
                <img class="label-img" :src="imgUrl + tpImg" style="margin-top: 20px" alt="" @click="changeLabel(12)">
            </div>
            <div class="label-item" v-else-if="label == 4">
                <img class="label-img" :src="imgUrl + zganImg" alt="" @click="changeLabel(13)">
                <img class="label-img" :src="imgUrl + zxImg" alt="" @click="changeLabel(14)">
                <img class="label-img" :src="imgUrl + zdImg" style="margin-top: 20px" alt="" @click="changeLabel(15)">
                <img class="label-img" :src="imgUrl + zyImg" style="margin-top: 20px;" alt="" @click="changeLabel(16)">
                <img class="label-img" :src="imgUrl + zchangImg" style="margin-top: 20px;" alt=""
                     @click="changeLabel(17)">
            </div>
            <!--<p>活动时间:2018.11.20-2019.12.02</p>-->
            <div class="content-item">
                <div class="no-data" v-if="ztList.length == 0">暂无作品！</div>
                <div :class="[index==0?'item-info first':index==1?'item-info second':index==2?'item-info three':'item-info']"
                     v-for="(item,index) in ztList" v-else @click="ToDetail(item.id)">
                    <img class="info" :src="item.food_img" alt="">
                    <div class="b-info">
                        <div>
                            <div class="zan-num">
                                <span>{{item.point_num}}</span>
                                <img :src="imgUrl + 'zan' + (index+2) + '.png'" alt="" v-if="index<3">
                                <img :src="imgUrl + 'zan5.png'" alt="" v-else>
                            </div>
                            <div class="name">{{item.user.name}}</div>
                        </div>
                        <img class="avater" :src="item.user.avater" alt="">
                    </div>
                    <img v-if="index<3" :class="[index==0?'first-img':index==1?'second-img':index==2?'three-img':'']"
                         :src="imgUrl + (index+1) + '.' + (index+1) + '.png'" alt="">
                </div>
            </div>
            <!--<img src="http://app-image-test.cunyougo.com/active/zhu0.png" class="pig" alt="">-->
            <pager :pageSize="pageSize" v-model="pageNo" @on-jump="jump"></pager>
        </div>


        <div class="footer" @click="TakePart">
            <img src="http://app-image-test.cunyougo.com/active/canjia.png" class="footer-img" alt="">
        </div>
    </div>
</template>

<script>
    import pager from './pager'
    import axios from 'axios'
    import wx from 'weixin-js-sdk'
    const _this = wx;
    export default {
        components: {pager},
        name: "more",
        data() {
            return {
                pageSize: 0,
                pageNo: 1,
                page: 1,
                label: '',
                first_label: 10,
                imgUrl: this.COMMON.imgUrl,
                titleImg1: "http://app-image-test.cunyougo.com/active/zt-title.png",
                titleImg2: "http://app-image-test.cunyougo.com/active/zs-title.png",
                titleImg3: "http://app-image-test.cunyougo.com/active/ztui-title.png",
                titleImg4: "http://app-image-test.cunyougo.com/active/znz-title.png",
                ztrImg: "zhulian8.png",
                zzImg: "zhushetou7.png",
                zedImg: "zed7.png",
                znImg: "zn7.png",
                zwhImg: "zhupi8.png",
                zybImg: "zyb7.png",
                zzhImg: "zzhua8.png",
                zoImg: "zz7.png",
                tpImg: "tp7.png",
                zganImg: "zg8.png",
                zxImg: "zx7.png",
                zdImg: "zd7.png",
                zyImg: "zy7.png",
                zchangImg: "zc7.png",
                ztList: []
            }
        },
        mounted: function () {
            this.label = this.$router.currentRoute.query.label;
            if (this.label == 1) {
                this.first_label = 1
            } else if (this.label == 2) {
                this.first_label = 5
            }
            else if (this.label == 3) {
                this.first_label = 10
            } else if (this.label == 4) {
                this.first_label = 13
            }
            this.moreWorkInfo()
        },
        created() {
            var apiUrl = window.location.href.split("#")[0];
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
                        link: "http://hz.cunyougo.com/share?id=" + "index", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: 'http://app-image-test.cunyougo.com/active/logos.png', // 分享图标
                        success: function () {

                        }
                    });
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
        methods: {
            changeLabel(val) {
                if (val == 1) {
                    this.ztrImg = "zhulian8.png";
                    this.zzImg = "zhushetou7.png";
                    this.zedImg = "zed7.png";
                    this.znImg = "zn7.png";
                    this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 2) {
                    this.ztrImg = "zhulian7.png";
                    this.zzImg = "zhushetou8.png";
                    this.zedImg = "zed7.png";
                    this.znImg = "zn7.png";
                    this.first_label = val;
                    this.moreWorkInfo()
                } else if (val == 3) {
                    this.ztrImg = "zhulian7.png";
                    this.zzImg = "zhushetou7.png";
                    this.zedImg = "zed8.png";
                    this.znImg = "zn7.png";
                    this.first_label = val;
                    this.moreWorkInfo()
                } else if (val == 4) {
                    this.ztrImg = "zhulian7.png";
                    this.zzImg = "zhushetou7.png";
                    this.zedImg = "zed7.png";
                    this.znImg = "zn8.png";
                    this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 5) {
                    this.zwhImg = "zhupi8.png";
                    this.zybImg = "zyb7.png";
                    this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 6) {
                    this.zwhImg = "zhupi7.png";
                    this.zybImg = "zyb8.png";
                    this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 7) {
                    this.zwhImg = "zwh7.png";
                    this.zljImg = "zlj7.png";
                    this.zpImg = "zp8.png";
                    this.zgImg = "zgu7.png";
                    this.zybImg = "zyb7.png";
                    this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 8) {
                    this.zwhImg = "zwh7.png";
                    this.zljImg = "zlj7.png";
                    this.zpImg = "zp7.png";
                    this.zgImg = "zgu8.png";
                    this.zybImg = "zyb7.png";
                    this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 9) {
                    this.zwhImg = "zhupi7.png";
                    this.zybImg = "zyb8.png";
                    this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 10) {
                    this.zzhImg = "zzhua8.png",
                        this.zoImg = "zz7.png",
                        this.tpImg = "tp7.png",
                        this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 11) {
                    this.zzhImg = "zzhua7.png",
                        this.zoImg = "zz8.png",
                        this.tpImg = "tp7.png",
                        this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 12) {
                    this.zzhImg = "zzhua7.png",
                        this.zoImg = "zz7.png",
                        this.tpImg = "tp8.png",
                        this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 13) {
                    this.zganImg = "zg8.png",
                        this.zxImg = "zx7.png",
                        this.zdImg = "zd7.png",
                        this.zyImg = "zy7.png",
                        this.zchangImg = "zc7.png",
                        this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 14) {
                    this.zganImg = "zg7.png",
                        this.zxImg = "zx8.png",
                        this.zdImg = "zd7.png",
                        this.zyImg = "zy7.png",
                        this.zchangImg = "zc7.png",
                        this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 15) {
                    this.zganImg = "zg7.png",
                        this.zxImg = "zx7.png",
                        this.zdImg = "zd8.png",
                        this.zyImg = "zy7.png",
                        this.zchangImg = "zc7.png",
                        this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 16) {
                    this.zganImg = "zg7.png",
                        this.zxImg = "zx7.png",
                        this.zdImg = "zd7.png",
                        this.zyImg = "zy8.png",
                        this.zchangImg = "zc7.png",
                        this.first_label = val;
                    this.moreWorkInfo()
                }
                else if (val == 17) {
                    this.zganImg = "zg7.png",
                        this.zxImg = "zx7.png",
                        this.zdImg = "zd7.png",
                        this.zyImg = "zy7.png",
                        this.zchangImg = "zc8.png",
                        this.first_label = val;
                    this.moreWorkInfo()
                }
            },
            moreWorkInfo() {
                axios.get(this.COMMON.httpUrl + 'MoreWorkInfo/', {  //params参数必写 , 如果没有参数传{}也可以
                    params: {
                        type: this.label,
                        small_type: this.first_label,
                        page: this.page
                    }
                })
                    .then((res) => {
                        var result = res.data;
                        console.log(result);
                        if (res.data) {
                            this.pageSize = Math.ceil(result.count / 6);
                            this.ztList = result.results
                        } else {
                            console.log("错误信息");
                        }
                    })
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
            jump(val) {
                console.log("跳转", val);
                this.page = val;
                this.moreWorkInfo()
            },
            ToDetail(id) {
                this.$router.push({path: '/detail', query: {id: id}})
            },
            getNowDate() {
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hours = date.getHours();
                var minutes = date.getMinutes()
                if (month < 10) {
                    month = "0" + month;
                }
                if (day < 10) {
                    day = "0" + day;
                }
                return year + "-" + month + "-" + day + " " + hours + ":" + minutes;
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
        height: 100%;
        background: url("http://app-image-test.cunyougo.com/active/bg-2.png") no-repeat center;
        background-size: 100% 100%;
    }

    .title {
        text-align: center;

    }

    .title img {
        width: 212.5px;
        height: 45px;
        margin-top: 72.5px;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 207, 132, 1);
    }

    .label-img {
        width: 137px;
        height: 33.5px;
        margin-left: 15px;
    }

    .label-item {
        margin-top: 30px;
        display: inline-block;
        text-align: center;
        margin-bottom: 18px;
    }

    .time {
        color: rgba(255, 207, 132, 1);
        font-size: 16px;
        margin-top: 20px;
        font-weight: 400;

    }

    .content {

    }

    .content-item {
        width: 350px;
        height: 648px;
        background: rgba(0, 0, 0, 0.13);
        margin: auto;
        position: relative;
        top: 20px

    }

    .no-data {
        line-height: 648px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 207, 132, 1);
    }

    .item-info {
        width: 142.5px;
        height: 193px;
        background: rgba(170, 9, 11, 1);
        border-radius: 2.5px;
        padding: 5px;
        margin-top: 15px;
        margin-left: 22px;
        float: left;
        color: rgba(229, 179, 99, 1);
    }

    .info {
        width: 133px;
        height: 141px;
        border-radius: 2.5px;
    }

    .zan-num {
        display: flex;
        align-items: center;
    }

    .zan-num span {
        font-size: 15px;

    }

    .zan-num img {
        width: 14.5px;
        height: 14px;
        margin-left: 5px;
    }

    .avater {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .name {
        font-size: 14px;
    }

    .b-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .first-img {
        width: 55px;
        height: 47px;
        position: absolute;
        top: -10px;
        left: 1px;
    }

    .first {
        background: rgba(255, 228, 75, 1);
        color: rgba(108, 92, 3, 1);
    }

    .first span {
        color: rgba(108, 92, 3, 1);
    }

    .second {
        background: rgba(151, 161, 187, 1);
        color: rgba(82, 92, 119, 1);
    }

    .second-img {
        width: 55px;
        height: 47px;
        position: relative;
        top: -214px;
        left: -64px;
    }

    .second span {
        color: rgba(82, 92, 119, 1);
    }

    .three {
        background: rgba(219, 124, 77, 1);
        color: rgba(151, 55, 7, 1);
    }

    .three span {
        color: rgba(151, 55, 7, 1);
    }

    .three-img {
        width: 55px;
        height: 47px;
        position: relative;
        top: -213px;
        left: -66px;
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

    .pig {
        width: 78px;
        height: 128px;
        float: right;
        margin-top: -70px;

    }

</style>
