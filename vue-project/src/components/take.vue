<template>
    <div class="take">
        <Form :model="formItem">
            <div class="bg-img">
                <div class="title">
                    <img src="http://app-image-test.cunyougo.com/active/fabu.png" alt="">
                </div>

                <div class="name">
                    <span>菜名</span>
                    <span>|</span>
                    <input type="text" maxlength="10" v-model="formItem.name">
                </div>
                <div :class="[label_type==2?'des height':'des']">
                    <div class="des-title">作品介绍</div>
                    <ul>
                        <!--<li @click="choseLabel(2)">-->
                        <!--<div :class="[label_type==2?'radio active':'radio']"></div>-->
                        <!--<label>语音介绍</label>-->
                        <!--</li>-->
                        <!--<div v-if="label_type==2" style="display: flex;align-items: center;">-->

                        <!--<li @click="stopRecord" class="get-radio" v-if="isStart">结束录音</li>-->
                        <!--<li @click="startRecord" class="get-radio" v-else>开始录音</li>-->
                        <!--<li  class="radio-info">{{time}} s</li>-->
                        <!--<p class="delete" @click="deletes">删除</p>-->
                        <!--</div>-->
                        <li @click="choseLabel(1)">
                            <div :class="[label_type==1?'radio active':'radio']"></div>
                            <label>文字介绍</label>
                        </li>
                    </ul>
                </div>
                <div class="textarea" v-if="label_type==1">
                    <textarea name="" id="texta" maxlength="150" v-model="formItem.des"></textarea>
                    <span>({{formItem.des.length}}/150)</span>
                </div>
                <div class="need-food">
                    <div class="need-title">
                        <span>所需食材</span>
                        <span>|</span>
                    </div>
                    <textarea name="" id="textas" style="resize:none;margin-left: 8px;background: rgba(0, 0, 0, 0);"
                              rows="2.5"
                              maxlength="150" v-model="formItem.need_food"></textarea>
                </div>
                <div class="type">
                    <div class="type-title">参赛类别</div>
                    <select class="select" v-model="select1">
                        <option disabled value="">请选择</option>
                        <option value="1">猪头</option>
                        <option value="2">猪身</option>
                        <option value="3">猪腿</option>
                        <option value="4">猪内脏</option>
                    </select>
                    <select class="select" v-model="select2">
                        <option disabled value="">请选择</option>
                        <option :value="item.id" v-for="item in smallList">{{item.name}}</option>
                    </select>
                </div>
                <div class="image">
                    <div class="image-title">菜品照片</div>
                    <!--<Upload-->
                            <!--ref="upload"-->
                            <!--:on-success="workSuccess"-->
                            <!--:format="['jpg','jpeg','png']"-->
                            <!--:max-size="2048"-->
                            <!--name="img"-->
                            <!--action="http://hz.cunyougo.com/upload/"-->
                    <!--&gt;-->
                        <!--<div class="upload-img" :style="{backgroundImage: 'url(' + workImgUrl + ')'}"></div>-->

                    <!--</Upload>-->
                    <div @click="uploadWorkImg" class="upload-img" :style="{backgroundImage: 'url(' + workImgUrl + ')'}"></div>
                </div>
                <div class="author-name">
                    <span>作者昵称</span>
                    <span>|</span>
                    <input type="text" maxlength="10" v-model="formItem.author_name">
                </div>
                <div class="author-name">
                    <span>联系方式</span>
                    <span>|</span>
                    <input type="text" maxlength="11" v-model="formItem.author_phone">
                </div>
                <div class="author">
                    <div class="image-title">作者头像</div>
                    <!--<Upload-->
                    <!--ref="upload"-->
                    <!--:on-success="handleSuccess"-->
                    <!--:format="['jpg','jpeg','png']"-->
                    <!--:max-size="2048"-->
                    <!--name="img"-->
                    <!--action="http://hz.cunyougo.com/upload/"-->
                    <!--&gt;-->
                    <!--<div class="author-img" :style="{backgroundImage: 'url(' + imgUrl + ')'}"></div>-->

                    <!--</Upload>-->
                    <div @click="uploadImg" class="author-img" :style="{backgroundImage: 'url(' + imgUrl + ')'}"></div>
                </div>

            </div>
            <div class="footer" @click="handleSubmit(formItem)">
                <img src="http://app-image-test.cunyougo.com/active/tijiao.png" class="footer-img" alt="">
            </div>
        </Form>
    </div>

</template>
<!--<link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">-->
<script>
    import axios from 'axios'
    import wx from 'weixin-js-sdk'

    const _this = wx
    export default {
        name: "take",
        data() {
            return {
                select1: "",
                select2: "",
                smallList: [],
                label_type: 1,
                imgUrl: "http://app-image-test.cunyougo.com/active/small_dianji.png",
                workImgUrl: "http://app-image-test.cunyougo.com/active/big_dianji.png",
                formItem: {
                    name: "",
                    des: "",
                    need_food: "",
                    author_name: "",
                    author_phone: "",

                },
                localId: '',
                serverId: '',
                downLoadId: '',
                time: 0,
                timer: "",
                isStart: false,
                imgId: false,
                audioUlr: "",
                openid: ""
            }
        },
        watch: {
            select1(val) {
                console.log(this.select1);
                if (val == 1) {
                    this.smallList = [
                        {id: 1, name: '猪脸'},
                        {id: 2, name: '猪舌头'},
                        {id: 3, name: '猪耳朵'},
                        {id: 4, name: '猪脑'},
                    ]
                } else if (val == 2) {
                    this.smallList = [
                        {id: 5, name: '猪皮'},
                        {id: 9, name: '猪尾巴'},
                    ]
                } else if (val == 3) {
                    this.smallList = [
                        {id: 10, name: '猪爪'},
                        {id: 11, name: '肘子'},
                        {id: 12, name: '蹄膀'},

                    ]
                }
                else if (val == 4) {
                    this.smallList = [
                        {id: 13, name: '猪肝'},
                        {id: 14, name: '猪心'},
                        {id: 15, name: '猪肚'},
                        {id: 16, name: '猪腰'},
                        {id: 17, name: '猪肠'},
                    ]
                }
            }
        },
        created() {

            var apiUrl = window.location.href.split("#")[0];

            if (window.location.href.split("#")[0].split("openid=")[1]) {
                this.openid = window.location.href.split("#")[0].split("openid=")[1]

            } else {
                this.openid = localStorage.getItem('openid')
            }
            axios.get(this.COMMON.httpUrl2 + 'getWechatInfo/', {params: {url: apiUrl}}).then((res) => {

                _this.config({
                    debug: false,
                    appId: res.data.appid,
                    timestamp: res.data.stamp,
                    nonceStr: res.data.noncestr,
                    signature: res.data.signa,
                    jsApiList: ['startRecord', 'stopRecord', 'chooseImage', 'uploadImage', 'stopVoice', 'uploadVoice', 'downloadVoice', 'downloadImage', 'getLocalImgData']
                });
                _this.ready(() => {
                    console.log("jsapi配置成功");
                });
                _this.error((res) => {
                    alert(res);
                })
            })
        },
        mounted() {


        },
        methods: {
            handleSubmit(val) {
                var filter = /^(((13[0-9]{1})|(14[5,6,9]{1})|(15[0-9]{1})|(16[6|7]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[8|9]{1}))+\d{8})$/;

                if (val.name == "" || val.need_food == "" || val.auther_name == "" || val.auther_phone == "" || val.des == "") {
                    this.$Message.error('提交失败，数据不完整！');
                }
                else if (this.select1 == "" || this.select2 == "") {
                    this.$Message.error('提交失败，请选择参赛类别！');
                } else if (!(filter.test(val.author_phone))) {
                    this.$Message.error('手机号格式错误，请重新输入！');
                }
                else if (this.imgUrl.indexOf("media") == -1) {
                    this.$Message.error('请上传个人照片！');
                }
                else if (this.workImgUrl.indexOf("media") == -1) {
                    this.$Message.error('请上传本人与菜的合照！');
                } else if (this.label_type == 1 && val.des == "") {
                    this.$Message.error('提交失败，数据不完整！');
                }
                else {
                    // if (this.label_type == 2) {
                    //     val["audio"] = this.audioUlr
                    // }else{
                    //     val["audio"] = ""
                    // }
                    val['type'] = parseInt(this.select1);
                    val['small_type'] = this.select2;
                    val['author_img'] = this.imgUrl;
                    val['food_img'] = this.workImgUrl;
                    val['openid'] = this.openid;
                    axios.get(this.COMMON.httpUrl2 + 'checkout/', {
                        params: {
                            type: parseInt(this.select1),
                            small_type: this.select2,
                            openid: this.openid
                        }
                    }).then((res) => {
                        console.log(res);
                        if (res.data.result == 'ok') {
                            axios.post(this.COMMON.httpUrl2 + 'addWorkInfo/', JSON.stringify(val),)
                                .then((res) => {
                                    if (res.data.result == 'ok') {
                                        this.$router.push({path: '/detail', query: {id: res.data.id, 'form': "add"}})
                                    } else {
                                        this.$Message.error('授权登录失败，无法发布作品！');
                                    }
                                })
                        } else if (res.data.result == "error") {
                            this.$Message.error('你已发布过此类型的菜！请更换类型！');
                        } else {
                            this.$Message.error('授权登录失败，无法发布作品！请关注村游去公众号进行发布!');
                        }
                    }).catch((res) => {
                        alert(res)
                    });

                }

            },
            choseLabel(val) {
                this.label_type = val
            },
            handleSuccess(res) {

                this.imgUrl = res.imgUrl
            },
            workSuccess(res) {
                this.workImgUrl = res.imgUrl
            },
            startRecord(e) {
                let that = this;
                that.time = 0;
                _this.startRecord({
                    success: function () {
                        that.$Message.info("开始录音！");
                        that.timer = setInterval(() => {
                            that.time++
                        }, 1000);
                        that.isStart = true;
                        that.vicoeEnd()
                    }
                })

            },
            stopRecord() {
                let that = this
                _this.stopRecord({
                    success: function (res) {

                        clearInterval(that.timer)
                        that.localId = res.localId;
                        that.$Message.success('语音录制成功！');
                        that.isStart = false;
                        that.uploadWeixin()
                        // this.endTime = new Date().getTime()
                        // alert(this.endTime)
                        // var t = this.endTime - this.startTime
                        // alert(t)
                        // this.time = parseInt((t % (1000 * 60)) / 1000)
                    },
                    fail: function (error) {
                        // alert('死啦停不了')
                        console.log(error)
                    }
                })
            },
            vicoeEnd() {
                _this.onVoiceRecordEnd({
                    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
                    complete: function (res) {
                        this.$Message.info('语言最长只能60秒哦');
                        this.localId = res.localId;
                        clearInterval(this.timer)
                    }
                })

            },
            uploadWeixin() {
                let that = this
                _this.uploadVoice({
                    localId: this.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                    isShowProgressTips: 1, // 默认为1，显示进度提示
                    success: function (res) {
                        // 返回音频的服务器端ID
                        that.serverId = res.serverId;
                        that.downVoice(res.serverId)
                    }
                });
            },
            uploadImg() {
                let that = this;
                _this.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['compressed',], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                        _this.uploadImage({
                            localId: res.localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
                            isShowProgressTips: 1, // 默认为1，显示进度提示
                            success: function (res) {
                                var serverId = res.serverId; // 返回图片的服务器端ID
                                axios.get("http://hz.cunyougo.com/uploadImage/", {params: {media_id: serverId}})
                                    .then((res => {

                                        that.imgUrl = that.COMMON.httpUrl2 + "media/img/" + res.data.imgUrl

                                    })).catch((res)=>{
                                        alert("上传失败")

                                })
                            },fail(res){
                                alert("失败")
                                alert(res.errMsg)
                            }
                        });
                    }
                });
            },
            uploadWorkImg() {
                let that = this;
                _this.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['compressed',], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                        _this.uploadImage({
                            localId: res.localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
                            isShowProgressTips: 1, // 默认为1，显示进度提示
                            success: function (res) {
                                var serverId = res.serverId; // 返回图片的服务器端ID
                                axios.get("http://hz.cunyougo.com/uploadImage/", {params: {media_id: serverId}})
                                    .then((res => {

                                        that.workImgUrl = that.COMMON.httpUrl2 + "media/img/" + res.data.imgUrl

                                    })).catch((res)=>{
                                        alert("上传失败")

                                })
                            },fail(res){
                                alert("失败")
                                alert(res.errMsg)
                            }
                        });
                    }
                });
            },
            // downImg() {
            //     let that = this
            //     _this.uploadImage({
            //         localId: that.imgId, // 需要上传的图片的本地ID，由chooseImage接口获得
            //         isShowProgressTips: 1, // 默认为1，显示进度提示
            //         success: function (res) {
            //             alert(res.serverId)
            //             var serverId = res.serverId; // 返回图片的服务器端ID
            //             that.downImage(serverId)
            //         }
            //     });
            // },
            // downImage(serverId) {
            //     let that = this;
            //     axios.get(this.COMMON.httpUrl2 + "uploadImage/", {params: {media_id: serverId}})
            //         .then((res => {
            //             this.imgUlr = this.COMMON.httpUrl2 + "media/img/" + res.data.img
            //         }))
            // },
            downVoice(serverId) {
                let that = this;
                axios.get(this.COMMON.httpUrl2 + "uploadAudio/", {params: {media_id: serverId}})
                    .then((res => {
                        this.audioUlr = this.COMMON.httpUrl2 + "media/audio/" + res.data.audio
                    }))
            },
            deletes() {
                if (this.isStart) {
                    this.$Message.error('正在录音中，不能删除！');
                } else {
                    this.localId = '';
                    this.serverId = '';
                    this.downLoadId = '';
                    this.time = 0
                }
            }
        }
    }
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
    }

    .bg-img {
        width: 100%;
        height: 1009px;
        background: url("http://app-image-test.cunyougo.com/active/bg-7.png") no-repeat center center;
        background-size: 100% 100%;

    }

    .title {
        text-align: center;

    }

    .get-radio {
        height: 25px;
        background-size: 100% 100%;
        margin: 10px 0 15px 20px;
        background: linear-gradient(0deg, rgba(208, 208, 208, 1) 0%, rgba(241, 241, 241, 1) 100%);
        background-size: 100% 100%;
        margin: 10px 0 15px 20px;
        padding: 12px;
        color: #666;
        border-radius: 3px;
    }

    .delete {
        font-size: 14px;
        font-weight: 400;
        text-decoration: underline;
        color: rgba(255, 223, 173, 1);
        margin-left: 10px;
        margin-bottom: 8px;

    }

    .radio-info {
        width: 47px;
        height: 25px;
        background: linear-gradient(0deg, rgba(208, 208, 208, 1) 0%, rgba(241, 241, 241, 1) 100%);
        border-radius: 2px;
        margin-left: 10px;
        margin-bottom: 10px;
        padding-top: 4px;
        color: #666;
    }

    .title img {
        width: 212.5px;
        height: 45px;
        margin-top: 72.5px;
    }

    select {
        -webkit-appearance: none; /*兼容苹果手机*/
    }

    .name {
        width: 275px;
        height: 34px;
        background: rgba(0, 0, 0, 0.2);
        margin: auto;
        line-height: 32px;
        margin-top: 32px;

    }

    .height {
        height: 150px !important;
    }

    .name span {
        font-size: 18px;
        font-weight: 400;
        color: rgba(253, 194, 101, 1);
    }

    .name span:first-child {
        margin-left: -20px;
        padding-right: 15px;
    }

    .author-name {
        width: 275px;
        height: 34px;
        background: rgba(0, 0, 0, 0.2);
        margin: auto;
        line-height: 32px;
        margin-top: 15px;

    }

    .author-name span {
        font-size: 18px;
        font-weight: 400;
        color: rgba(253, 194, 101, 1);
    }

    .author-name span:first-child {
        margin-left: 20px;
        padding-right: 15px;
    }

    .des {
        width: 275px;
        height: 98px;
        background: rgba(0, 0, 0, 0.2);
        margin: auto;
        margin-top: 15px;
        padding-top: 8px;
        padding-bottom: 10px;
    }

    .des-title {
        font-size: 19px;
        font-weight: 400;
        color: rgba(253, 194, 101, 1);
        text-align: -webkit-auto;
        margin-left: 19px;
    }

    .radio {
        width: 11px;
        height: 11px;
        background: url("http://app-image-test.cunyougo.com/active/weixuanzhong.png") no-repeat center center;
        background-size: 100% 100%;
    }

    .active {
        width: 11px;
        height: 11px;
        background: url("http://app-image-test.cunyougo.com/active/xuanzhong.png") no-repeat center center;
        background-size: 100% 100%;
    }

    .textarea {
        width: 275px;
        height: 137px;
        background: rgba(0, 0, 0, 0.2);
        margin: auto;
        margin-top: 5px;

    }

    .textarea span {
        font-size: 12px;
        font-weight: 400;
        color: rgba(253, 194, 101, 1);
        float: right;
        margin-right: 4px;
    }

    #texta {
        width: 245px;
        height: 98px;
        font-size: 15px;
        font-weight: 400;
        color: rgba(255, 223, 173, 1);
        margin: 11px 11px 0px 19px;
        background: rgba(0, 0, 0, 0);
    }

    #textas {

        font-size: 15px;
        font-weight: 400;
        color: rgba(255, 223, 173, 1);

    }

    .need-food {
        width: 275px;
        height: 65px;
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        margin: auto;
        margin-top: 15px;
    }

    .need-title {
        font-size: 19px;
        font-weight: 400;
        color: rgba(253, 194, 101, 1);
        margin-left: 14px;
    }

    .type {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .type-title {
        width: 110px;
        height: 34px;
        background: rgba(0, 0, 0, 0.2);
        line-height: 34px;
        text-align: center;
        font-size: 19px;
        font-weight: 400;
        color: rgba(253, 194, 101, 1);
        margin-left: 12px;

    }

    .select {
        width: 80px;
        height: 34px;
        margin-left: 10px;
        background-color: rgba(0, 0, 0, 0.2);;
        font-weight: 400;
        color: rgba(255, 223, 173, 1);
        font-size: 15px;
        padding-left: 10px;
    }

    .upload-img {
        width: 155px;
        height: 155px;
        background: url("http://app-image-test.cunyougo.com/active/big_dianji.png") no-repeat center;
        background-size: 100% 100%;

    }

    .author-img {
        width: 80px;
        height: 80px;
        background: url("http://app-image-test.cunyougo.com/active/small.png") no-repeat center;
        background-size: 100% 100%;
    }

    .image {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;

    }

    .author {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-right: 75px;

    }

    .image-title {
        width: 110px;
        height: 34px;
        background: rgba(0, 0, 0, 0.2);
        line-height: 34px;
        text-align: center;
        font-size: 19px;
        font-weight: 400;
        color: rgba(253, 194, 101, 1);
        margin-right: 10px;

    }

    .footer {
        position: fixed;
        left: 0;
        bottom: -6px;
    }

    .footer-img {
        width: 100%;
        height: 100%;
    }

    li:first-child {
        display: flex;
        align-items: center;
        margin-left: 19px;
        margin-top: 5px;
    }

    li:last-child {
        display: flex;
        align-items: center;
        margin-left: 19px;
        margin-top: 0px;
    }

    label {
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 223, 173, 1);
        margin-left: 5px;
        margin-bottom: 0;
    }

    input {
        border: none;
        font-size: 16px;
        width: 143px;
        margin-left: 10px;
        color: rgba(255, 223, 173, 1);
        background: rgba(0, 0, 0, 0);
    }

    input, textarea, select, a:focus {
        outline: none;
        border: none;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }


</style>
<style>
    .ivu-upload-list {
        display: none !important;
    }
</style>
