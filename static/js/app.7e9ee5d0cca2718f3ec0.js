webpackJsonp([1],{"+skl":function(t,s){},"1TtU":function(t,s){},"8agu":function(t,s){},"9+9y":function(t,s){},"9Ch8":function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("7+uW"),e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},e,!1,function(t){i("s347")},null,null).exports,l=i("/ocq"),o=i("mtWM"),c=i.n(o),r={name:"index",data:function(){return{imgUrl:this.COMMON.imgUrl,HeadImg:"zt2.png",BodyImg:"zs1.png",LegImg:"ztui1.png",VisceraImg:"znz1.png",label:1,headList:[],mouthList:[],earList:[],brainList:[],fiveList:[],tenderList:[],porkList:[],boneList:[],tailList:[],trotterList:[],elbowList:[],hockList:[],liverList:[],heartList:[],stomachList:[],kidneyList:[],intestinesList:[]}},created:function(){var t=window.location.href.split("?")[1].split("#")[0].split("openid=");alert(t),localStorage.setItem("openid",t)},mounted:function(){this.getHeadInfo()},methods:{getHeadInfo:function(){var t=this;c.a.get(this.COMMON.httpUrl2+"GetHeadInfo/").then(function(s){console.log(s.data),"success"==s.data.msg?(t.headList=s.data.pig_head_meat,t.mouthList=s.data.pig_mouth,t.earList=s.data.pig_ear,t.brainList=s.data.pig_brain):console.log("错误信息")})},changeLabel:function(t){var s=this;1==t?(this.getHeadInfo(),this.HeadImg="zt2.png",this.BodyImg="zs1.png",this.LegImg="ztui1.png",this.VisceraImg="znz1.png",this.label=t):2==t?(this.HeadImg="zt1.png",this.BodyImg="zs2.png",this.LegImg="ztui1.png",this.VisceraImg="znz1.png",this.label=t,c.a.get(this.COMMON.httpUrl2+"GetBodyInfo/",{params:{type:t}}).then(function(t){"success"==t.data.msg?(s.fiveList=t.data.pig_five,s.tenderList=t.data.tenderloin,s.porkList=t.data.pork_chop,s.boneList=t.data.pig_bone,s.tailList=t.data.pig_tail):console.log("错误信息")})):3==t?(this.HeadImg="zt1.png",this.BodyImg="zs1.png",this.LegImg="ztui2.png",this.VisceraImg="znz1.png",this.label=t,c.a.get(this.COMMON.httpUrl2+"GetLegInfo/",{params:{type:t}}).then(function(t){"success"==t.data.msg?(s.trotterList=t.data.pig_trotter,s.elbowList=t.data.elbow,s.hockList=t.data.hock):console.log("错误信息")})):4==t&&(this.HeadImg="zt1.png",this.BodyImg="zs1.png",this.LegImg="ztui1.png",this.VisceraImg="znz2.png",this.label=t,c.a.get(this.COMMON.httpUrl2+"GetVisceraInfo/",{params:{type:t}}).then(function(t){"success"==t.data.msg?(s.liverList=t.data.pork_liver,s.heartList=t.data.pig_heart,s.stomachList=t.data.pork_stomach,s.kidneyList=t.data.kidney,s.intestinesList=t.data.pig_intestines):console.log("错误信息")}))},goMore:function(){console.log(this.label),this.$router.push({path:"/more",query:{label:this.label}})},ToDetail:function(t){this.$router.push({path:"/detail",query:{id:t}})},TakePart:function(){this.$router.push({path:"/take"})}}},g={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"hello"},[i("div",{staticClass:"bg-img"},[i("div",{staticClass:"label-item"},[i("img",{staticClass:"label-img",attrs:{id:"head",src:t.imgUrl+t.HeadImg,alt:""},on:{click:function(s){t.changeLabel(1)}}}),t._v(" "),i("img",{staticClass:"label-img",attrs:{id:"body",src:t.imgUrl+t.BodyImg,alt:""},on:{click:function(s){t.changeLabel(2)}}}),t._v(" "),i("img",{staticClass:"label-img",staticStyle:{"margin-top":"20px"},attrs:{id:"leg",src:t.imgUrl+t.LegImg,alt:""},on:{click:function(s){t.changeLabel(3)}}}),t._v(" "),i("div",{attrs:{id:"haslet"}},[i("img",{staticClass:"label-img",staticStyle:{"margin-top":"20px"},attrs:{src:t.imgUrl+t.VisceraImg,alt:""},on:{click:function(s){t.changeLabel(4)}}}),t._v(" "),i("p",[t._v("活动时间: 2018.12.20-2019.1.10")])])])]),t._v(" "),i("div",{staticClass:"content",style:[{height:1==t.label?"614px":2==t.label||4==t.label?"738px":3==t.label?"484px":""}]},[1==t.label?i("div",{staticClass:"content-item"},[i("div",{staticClass:"row"},[0==t.headList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.headList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4",on:{click:function(i){t.ToDetail(s.pk)}}},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])}),t._v(" "),i("div",{staticClass:"left-label"})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.mouthList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.mouthList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4",on:{click:function(i){t.ToDetail(s.pk)}}},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])}),t._v(" "),i("div",{staticClass:"left-label2"})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.earList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.earList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4",on:{click:function(i){t.ToDetail(s.pk)}}},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])}),t._v(" "),i("div",{staticClass:"left-label3"})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.brainList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.brainList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4"},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])}),t._v(" "),i("div",{staticClass:"left-label4"})],2)]):2==t.label?i("div",{staticClass:"content-item body"},[i("div",[i("div",{staticClass:"row"},[0==t.fiveList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.fiveList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4",on:{click:function(i){t.ToDetail(s.pk)}}},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.tenderList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.tenderList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4",on:{click:function(i){t.ToDetail(s.pk)}}},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.porkList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.porkList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4",on:{click:function(i){t.ToDetail(s.pk)}}},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.boneList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.boneList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4",on:{click:function(i){t.ToDetail(s.pk)}}},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.tailList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.tailList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4",on:{click:function(i){t.ToDetail(s.pk)}}},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2)]),t._v(" "),i("div",{staticClass:"no-begin",staticStyle:{display:"none"}},[t._v("\n                活动暂未开始，尽情期待！\n            ")]),t._v(" "),i("div",{staticClass:"left-label-body"}),t._v(" "),i("div",{staticClass:"left-label2-body"}),t._v(" "),i("div",{staticClass:"left-label3-body"}),t._v(" "),i("div",{staticClass:"left-label4-body"}),t._v(" "),i("div",{staticClass:"left-label5-body"})]):3==t.label?i("div",{staticClass:"content-item let"},[i("div",{staticStyle:{display:"none"}},[i("div",{staticClass:"row"},[0==t.trotterList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.trotterList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4"},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.elbowList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.elbowList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4"},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.hockList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.hockList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4"},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2)]),t._v(" "),i("div",{staticClass:"left-label-let"}),t._v(" "),i("div",{staticClass:"left-label2-let"}),t._v(" "),i("div",{staticClass:"left-label3-let"}),t._v(" "),i("div",{staticClass:"no-begin  two-data"},[t._v("\n                活动暂未开始，尽情期待！\n            ")])]):i("div",{staticClass:"content-item haslet"},[i("div",{staticStyle:{display:"none"}},[i("div",{staticClass:"row"},[0==t.liverList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.liverList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4"},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.heartList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.heartList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4"},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.stomachList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.stomachList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4"},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.kidneyList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.kidneyList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4"},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2),t._v(" "),i("div",{staticClass:"row m-row"},[0==t.intestinesList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品")]):t._l(t.intestinesList,function(s,a){return i("div",{staticClass:"col-xs-6 col-sm-4"},[i("img",{class:[0==a?"result-img":1==a?"second":"three"],attrs:{src:s.fields.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("span",[t._v(t._s(s.fields.point_num))]),t._v(" "),i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/zan.png",alt:""}})]),t._v(" "),i("img",{staticClass:"first",attrs:{src:t.imgUrl+(a+1)+".png",alt:""}})])})],2)]),t._v(" "),i("div",{staticClass:"no-begin"},[t._v("\n                活动暂未开始，尽情期待！\n            ")]),t._v(" "),i("div",{staticClass:"left-label-haslet"}),t._v(" "),i("div",{staticClass:"left-label2-haslet"}),t._v(" "),i("div",{staticClass:"left-label3-haslet"}),t._v(" "),i("div",{staticClass:"left-label4-haslet"}),t._v(" "),i("div",{staticClass:"left-label5-haslet"})]),t._v(" "),i("div",{staticClass:"more",on:{click:t.goMore}})]),t._v(" "),i("div",{staticClass:"bg3"}),t._v(" "),i("div",{staticClass:"footer",on:{click:t.TakePart}},[i("img",{staticClass:"footer-img",attrs:{src:"http://app-image-test.cunyougo.com/active/canjia.png",alt:""}})])])},staticRenderFns:[]};var m=i("VU/8")(r,g,!1,function(t){i("QpAi")},"data-v-7215294a",null).exports,p={model:{prop:"pageNo",event:"jumpPage"},props:{pageSize:{type:Number,default:1},pageNo:{type:Number,default:1}},data:function(){return{jumpPage:""}},computed:{prevDisable:function(){return!(this.pageNo>1)},nextDisable:function(){return!(this.pageNo<this.pageSize&&this.pageSize>1)}},methods:{jumpPrev:function(){1!=this.pageNo&&(this.$emit("jumpPage",this.pageNo-1),this.$emit("on-jump",this.pageNo-1))},jumpNext:function(){this.pageNo!=this.pageSize&&(this.$emit("jumpPage",this.pageNo+1),this.$emit("on-jump",this.pageNo+1))},jump:function(t){t>this.pageSize&&(t=this.pageSize),this.jumpPage="",this.$emit("jumpPage",t),this.$emit("on-jump",t)}}},d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"pager",staticClass:"pager-wrapper"},[i("div",{staticClass:"pager-box"},[i("a",{staticClass:"pager-prev",class:{"pager-disabled":t.prevDisable},attrs:{href:"javascript:;"},on:{click:function(s){t.jumpPrev()}}},[t._v("上一页")]),t._v(" "),t._l(t.pageSize,function(s){return[s==t.pageNo?i("span",{staticClass:"pager-curr"},[i("em",{staticClass:"pager-em"}),i("em",[t._v(t._s(s))])]):t.pageNo<2&&s<3?i("a",{attrs:{href:"javascript:1;"},on:{click:function(i){t.jump(s)}}},[t._v("\n                "+t._s(s)+"\n            ")]):t.pageSize<6||1==s||s==t.pageSize||t.pageNo-1<=s&&s<=t.pageNo+1?i("a",{attrs:{href:"javascript:2;"},on:{click:function(i){t.jump(s)}}},[t._v("\n                "+t._s(s)+"\n            ")]):[t.pageNo<5&&6==s?i("span",{staticClass:"pager-spr"},[t._v("…")]):t._e(),t._v(" "),t.pageNo>4&&s==t.pageNo-3?i("span",{staticClass:"pager-spr"},[t._v("…")]):t._e(),t._v(" "),t.pageNo>4&&s==t.pageNo+3?i("span",{staticClass:"pager-spr"},[t._v("…")]):t._e()]]}),t._v(" "),i("a",{staticClass:"pager-next",class:{"pager-disabled":t.nextDisable},attrs:{href:"javascript:;"},on:{click:function(s){t.jumpNext()}}},[t._v("下一页")])],2)])},staticRenderFns:[]};var v={components:{pager:i("VU/8")(p,d,!1,function(t){i("9+9y")},"data-v-1b523a34",null).exports},name:"more",data:function(){return{pageSize:0,pageNo:1,page:1,label:"",first_label:10,imgUrl:this.COMMON.imgUrl,titleImg1:"http://app-image-test.cunyougo.com/active/zt-title.png",titleImg2:"http://app-image-test.cunyougo.com/active/zs-title.png",titleImg3:"http://app-image-test.cunyougo.com/active/ztui-title.png",titleImg4:"http://app-image-test.cunyougo.com/active/znz-title.png",ztrImg:"ztr8.png",zzImg:"zzui7.png",zedImg:"zed7.png",znImg:"zn7.png",zwhImg:"zwh8.png",zljImg:"zlj7.png",zpImg:"zp7.png",zgImg:"zg7.png",zybImg:"zyb7.png",zzhImg:"zzhua8.png",zoImg:"zz7.png",tpImg:"tp7.png",zganImg:"zg8.png",zxImg:"zx7.png",zdImg:"zd7.png",zyImg:"zy7.png",zchangImg:"zc7.png",ztList:[]}},mounted:function(){this.label=this.$router.currentRoute.query.label,1==this.label?this.first_label=1:2==this.label?this.first_label=5:3==this.label?this.first_label=10:4==this.label&&(this.first_label=13),this.moreWorkInfo()},methods:{changeLabel:function(t){1==t?(this.ztrImg="ztr8.png",this.zzImg="zzui7.png",this.zedImg="zed7.png",this.znImg="zn7.png",this.first_label=t,this.moreWorkInfo()):2==t?(this.ztrImg="ztr7.png",this.zzImg="zzui8.png",this.zedImg="zed7.png",this.znImg="zn7.png",this.first_label=t,this.moreWorkInfo()):3==t?(this.ztrImg="ztr7.png",this.zzImg="zzui7.png",this.zedImg="zed8.png",this.znImg="zn7.png",this.first_label=t,this.moreWorkInfo()):4==t?(this.ztrImg="ztr7.png",this.zzImg="zzui7.png",this.zedImg="zed7.png",this.znImg="zn8.png",this.first_label=t,this.moreWorkInfo()):5==t?(this.zwhImg="zwh8.png",this.zljImg="zlj7.png",this.zpImg="zp7.png",this.zgImg="zg7.png",this.zybImg="zyb7.png",this.first_label=t,this.moreWorkInfo()):6==t?(this.zwhImg="zwh7.png",this.zljImg="zlj8.png",this.zpImg="zp7.png",this.zgImg="zg7.png",this.zybImg="zyb7.png",this.first_label=t,this.moreWorkInfo()):7==t?(this.zwhImg="zwh7.png",this.zljImg="zlj7.png",this.zpImg="zp8.png",this.zgImg="zg7.png",this.zybImg="zyb7.png",this.first_label=t,this.moreWorkInfo()):8==t?(this.zwhImg="zwh7.png",this.zljImg="zlj7.png",this.zpImg="zp7.png",this.zgImg="zg8.png",this.zybImg="zyb7.png",this.first_label=t,this.moreWorkInfo()):9==t?(this.zwhImg="zwh7.png",this.zljImg="zlj7.png",this.zpImg="zp7.png",this.zgImg="zg7.png",this.zybImg="zyb8.png",this.first_label=t,this.moreWorkInfo()):10==t?(this.zzhImg="zzhua8.png",this.zoImg="zz7.png",this.tpImg="tp7.png",this.first_label=t,this.moreWorkInfo()):11==t?(this.zzhImg="zzhua7.png",this.zoImg="zz8.png",this.tpImg="tp7.png",this.first_label=t,this.moreWorkInfo()):12==t?(this.zzhImg="zzhua7.png",this.zoImg="zz7.png",this.tpImg="tp8.png",this.first_label=t,this.moreWorkInfo()):13==t?(this.zganImg="zg8.png",this.zxImg="zx7.png",this.zdImg="zd7.png",this.zyImg="zy7.png",this.zchangImg="zc7.png",this.first_label=t,this.moreWorkInfo()):14==t?(this.zganImg="zg7.png",this.zxImg="zx8.png",this.zdImg="zd7.png",this.zyImg="zy7.png",this.zchangImg="zc7.png",this.first_label=t,this.moreWorkInfo()):15==t?(this.zganImg="zg7.png",this.zxImg="zx7.png",this.zdImg="zd8.png",this.zyImg="zy7.png",this.zchangImg="zc7.png",this.first_label=t,this.moreWorkInfo()):16==t?(this.zganImg="zg7.png",this.zxImg="zx7.png",this.zdImg="zd7.png",this.zyImg="zy8.png",this.zchangImg="zc7.png",this.first_label=t,this.moreWorkInfo()):17==t&&(this.zganImg="zg7.png",this.zxImg="zx7.png",this.zdImg="zd7.png",this.zyImg="zy7.png",this.zchangImg="zc8.png",this.first_label=t,this.moreWorkInfo())},moreWorkInfo:function(){var t=this;c.a.get(this.COMMON.httpUrl+"MoreWorkInfo/",{params:{type:this.label,small_type:this.first_label,page:this.page}}).then(function(s){var i=s.data;console.log(i),s.data?(t.pageSize=Math.ceil(i.count/6),t.ztList=i.results):console.log("错误信息")})},TakePart:function(){this.$router.push({path:"/take"})},jump:function(t){console.log("跳转",t),this.page=t,this.moreWorkInfo()},ToDetail:function(t){this.$router.push({path:"/detail",query:{id:t}})}}},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"more"},[i("div",{staticClass:"bg-img"},[i("div",{staticClass:"title"},[i("img",{attrs:{src:1==t.label?t.titleImg1:2==t.label?t.titleImg2:3==t.label?t.titleImg3:t.titleImg4,alt:""}})]),t._v(" "),1==t.label?i("div",{staticClass:"label-item"},[i("img",{staticClass:"label-img",attrs:{src:t.imgUrl+t.ztrImg},on:{click:function(s){t.changeLabel(1)}}}),t._v(" "),i("img",{staticClass:"label-img",attrs:{src:t.imgUrl+t.zzImg},on:{click:function(s){t.changeLabel(2)}}}),t._v(" "),i("img",{staticClass:"label-img",staticStyle:{"margin-top":"20px"},attrs:{src:t.imgUrl+t.zedImg},on:{click:function(s){t.changeLabel(3)}}}),t._v(" "),i("img",{staticClass:"label-img",staticStyle:{"margin-top":"20px"},attrs:{src:t.imgUrl+t.znImg,alt:""},on:{click:function(s){t.changeLabel(4)}}})]):2==t.label?i("div",{staticClass:"label-item"},[i("img",{staticClass:"label-img",attrs:{src:t.imgUrl+t.zwhImg,alt:""},on:{click:function(s){t.changeLabel(5)}}}),t._v(" "),i("img",{staticClass:"label-img",attrs:{src:t.imgUrl+t.zljImg,alt:""},on:{click:function(s){t.changeLabel(6)}}}),t._v(" "),i("img",{staticClass:"label-img",staticStyle:{"margin-top":"20px"},attrs:{src:t.imgUrl+t.zpImg,alt:""},on:{click:function(s){t.changeLabel(7)}}}),t._v(" "),i("img",{staticClass:"label-img",staticStyle:{"margin-top":"20px"},attrs:{src:t.imgUrl+t.zgImg,alt:""},on:{click:function(s){t.changeLabel(8)}}}),t._v(" "),i("img",{staticClass:"label-img",staticStyle:{"margin-top":"20px"},attrs:{src:t.imgUrl+t.zybImg,alt:""},on:{click:function(s){t.changeLabel(9)}}})]):3==t.label?i("div",{staticClass:"label-item"},[i("img",{staticClass:"label-img",attrs:{src:t.imgUrl+t.zzhImg,alt:""},on:{click:function(s){t.changeLabel(10)}}}),t._v(" "),i("img",{staticClass:"label-img",attrs:{src:t.imgUrl+t.zoImg,alt:""},on:{click:function(s){t.changeLabel(11)}}}),t._v(" "),i("img",{staticClass:"label-img",staticStyle:{"margin-top":"20px"},attrs:{src:t.imgUrl+t.tpImg,alt:""},on:{click:function(s){t.changeLabel(12)}}})]):4==t.label?i("div",{staticClass:"label-item"},[i("img",{staticClass:"label-img",attrs:{src:t.imgUrl+t.zganImg,alt:""},on:{click:function(s){t.changeLabel(13)}}}),t._v(" "),i("img",{staticClass:"label-img",attrs:{src:t.imgUrl+t.zxImg,alt:""},on:{click:function(s){t.changeLabel(14)}}}),t._v(" "),i("img",{staticClass:"label-img",staticStyle:{"margin-top":"20px"},attrs:{src:t.imgUrl+t.zdImg,alt:""},on:{click:function(s){t.changeLabel(15)}}}),t._v(" "),i("img",{staticClass:"label-img",staticStyle:{"margin-top":"20px"},attrs:{src:t.imgUrl+t.zyImg,alt:""},on:{click:function(s){t.changeLabel(16)}}}),t._v(" "),i("img",{staticClass:"label-img",staticStyle:{"margin-top":"20px"},attrs:{src:t.imgUrl+t.zchangImg,alt:""},on:{click:function(s){t.changeLabel(17)}}})]):t._e(),t._v(" "),i("p",[t._v("活动时间:2018.11.20-2019.12.02")]),t._v(" "),i("div",{staticClass:"content-item"},[0==t.ztList.length?i("div",{staticClass:"no-data"},[t._v("暂无作品！")]):t._l(t.ztList,function(s,a){return i("div",{class:[0==a?"item-info first":1==a?"item-info second":2==a?"item-info three":"item-info"],on:{click:function(i){t.ToDetail(s.pk)}}},[i("img",{staticClass:"info",attrs:{src:s.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"b-info"},[i("div",[i("div",{staticClass:"zan-num"},[i("span",[t._v(t._s(s.point_num))]),t._v(" "),i("img",a<3?{attrs:{src:t.imgUrl+"zan"+(a+2)+".png",alt:""}}:{attrs:{src:t.imgUrl+"zan5.png",alt:""}})]),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(s.user.name))])]),t._v(" "),i("img",{staticClass:"avater",attrs:{src:s.user.avater,alt:""}})]),t._v(" "),a<3?i("img",{class:[0==a?"first-img":1==a?"second-img":2==a?"three-img":""],attrs:{src:t.imgUrl+(a+1)+"."+(a+1)+".png",alt:""}}):t._e()])})],2),t._v(" "),i("pager",{attrs:{pageSize:t.pageSize},on:{"on-jump":t.jump},model:{value:t.pageNo,callback:function(s){t.pageNo=s},expression:"pageNo"}})],1),t._v(" "),i("div",{staticClass:"footer",on:{click:t.TakePart}},[i("img",{staticClass:"footer-img",attrs:{src:"http://app-image-test.cunyougo.com/active/canjia.png",alt:""}})])])},staticRenderFns:[]};var h=i("VU/8")(v,u,!1,function(t){i("9Ch8")},"data-v-45c2e2be",null).exports,_=i("mvHQ"),f=i.n(_),z=i("fxnj"),I=i.n(z),b=I.a,C={name:"take",data:function(){return{select1:"",select2:"",smallList:[],label_type:1,imgUrl:"http://app-image-test.cunyougo.com/active/small_dianji.png",formItem:{name:"1",des:"1",need_food:"1",author_name:"1",author_phone:"18819414573"},localId:"",serverId:"",downLoadId:"",time:0,timer:"",isStart:!1}},watch:{select1:function(t){console.log(this.select1),1==t?this.smallList=[{id:1,name:"猪头肉"},{id:2,name:"猪嘴"},{id:3,name:"猪耳朵"},{id:4,name:"猪脑"}]:2==t?this.smallList=[{id:5,name:"猪五花"},{id:6,name:"猪里脊"},{id:7,name:"猪排"},{id:8,name:"猪骨"},{id:9,name:"猪尾巴"}]:3==t?this.smallList=[{id:10,name:"猪爪"},{id:11,name:"肘子"},{id:12,name:"蹄膀"}]:4==t&&(this.smallList=[{id:13,name:"猪肝"},{id:14,name:"猪心"},{id:15,name:"猪肚"},{id:16,name:"猪腰"},{id:17,name:"猪肠"}])}},created:function(){var t=window.location.href.split("#")[0];c.a.get(this.COMMON.httpUrl2+"getWechatInfo/",{params:{url:t}}).then(function(t){b.config({debug:!1,appId:t.data.appid,timestamp:t.data.stamp,nonceStr:t.data.noncestr,signature:t.data.signa,jsApiList:["startRecord","stopRecord","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice"]}),b.ready(function(){console.log("jsapi配置成功")}),b.error(function(t){alert(t)})})},mounted:function(){console.log(window.location.href)},methods:{handleSubmit:function(t){var s=this;console.log(t),console.log(this.select1),console.log(this.select2);""==t.name||""==t.des||""==t.need_food||""==t.auther_name||""==t.auther_phone?this.$Message.error("提交失败，数据不完整！"):""==this.select1||""==this.select2?this.$Message.error("提交失败，请选择参赛类别！"):/^(((13[0-9]{1})|(14[5,6,9]{1})|(15[0-9]{1})|(16[6|7]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[8|9]{1}))+\d{8})$/.test(t.author_phone)?(t.type=parseInt(this.select1),t.small_type=this.select2,t.author_img=this.imgUrl,t.food_img=this.imgUrl,t.openid=1,2==this.label_type&&(t.audio=this.downLoadId),console.log(t),c.a.get("http://127.0.0.1:8000/checkout/",{params:{type:parseInt(this.select1),small_type:this.select2,openid:1}}).then(function(i){console.log(i),"ok"==i.data.result?c.a.post("http://127.0.0.1:8000/addWorkInfo/",f()(t)).then(function(t){console.log(t.data),"ok"==t.data.result&&s.$router.push({path:"/"})}):s.$Message.error("你已发布过此类型的菜！请更换类型！")})):this.$Message.error("手机号格式错误，请重新输入！")},choseLabel:function(t){this.label_type=t},handleSuccess:function(t){this.imgUrl=t.imgUrl},startRecord:function(t){var s=this;s.time=0,b.startRecord({success:function(){s.$Message.info("开始录音！"),s.timer=setInterval(function(){s.time++},1e3),s.isStart=!0,s.vicoeEnd()}})},stopRecord:function(){var t=this;b.stopRecord({success:function(s){clearInterval(t.timer),t.localId=s.localId,t.$Message.success("语音录制成功！"),t.isStart=!1,t.uploadWeixin()},fail:function(t){console.log(t)}})},vicoeEnd:function(){b.onVoiceRecordEnd({complete:function(t){this.$Message.info("语言最长只能60秒哦"),this.localId=t.localId,clearInterval(this.timer)}})},uploadWeixin:function(){var t=this;b.uploadVoice({localId:this.localId,isShowProgressTips:1,success:function(s){t.serverId=s.serverId,t.downVoice()}})},downVoice:function(){var t=this;b.downloadVoice({serverId:t.serverId,isShowProgressTips:1,success:function(s){t.downLoadId=s.localId}})},deletes:function(){this.isStart?this.$Message.error("正在录音中，不能删除！"):(this.localId="",this.serverId="",this.downLoadId="",this.time=0)}}},y={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"take"},[i("Form",{attrs:{model:t.formItem}},[i("div",{staticClass:"bg-img"},[i("div",{staticClass:"title"},[i("img",{attrs:{src:"http://app-image-test.cunyougo.com/active/fabu.png",alt:""}})]),t._v(" "),i("div",{staticClass:"name"},[i("span",[t._v("菜名")]),t._v(" "),i("span",[t._v("|")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.formItem.name,expression:"formItem.name"}],attrs:{type:"text",maxlength:"10"},domProps:{value:t.formItem.name},on:{input:function(s){s.target.composing||t.$set(t.formItem,"name",s.target.value)}}})]),t._v(" "),i("div",{class:[2==t.label_type?"des height":"des"]},[i("div",{staticClass:"des-title"},[t._v("作品介绍")]),t._v(" "),i("ul",[i("li",{on:{click:function(s){t.choseLabel(2)}}},[i("div",{class:[2==t.label_type?"radio active":"radio"]}),t._v(" "),i("label",[t._v("语音介绍")])]),t._v(" "),2==t.label_type?i("div",{staticStyle:{display:"flex","align-items":"center"}},[t.isStart?i("li",{staticClass:"get-radio",on:{click:t.stopRecord}},[t._v("结束录音")]):i("li",{staticClass:"get-radio",on:{click:t.startRecord}},[t._v("开始录音")]),t._v(" "),i("li",{staticClass:"radio-info"},[t._v(t._s(t.time)+" s")]),t._v(" "),i("p",{staticClass:"delete",on:{click:t.deletes}},[t._v("删除")])]):t._e(),t._v(" "),i("li",{on:{click:function(s){t.choseLabel(1)}}},[i("div",{class:[1==t.label_type?"radio active":"radio"]}),t._v(" "),i("label",[t._v("文字介绍")])])])]),t._v(" "),1==t.label_type?i("div",{staticClass:"textarea"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formItem.des,expression:"formItem.des"}],attrs:{name:"",id:"texta",maxlength:"150"},domProps:{value:t.formItem.des},on:{input:function(s){s.target.composing||t.$set(t.formItem,"des",s.target.value)}}}),t._v(" "),i("span",[t._v("(0/150)")])]):t._e(),t._v(" "),i("div",{staticClass:"need-food"},[i("div",{staticClass:"need-title"},[i("span",[t._v("所需食材")]),t._v(" "),i("span",[t._v("|")])]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formItem.need_food,expression:"formItem.need_food"}],staticStyle:{resize:"none","margin-left":"8px",background:"rgba(0, 0, 0, 0)"},attrs:{name:"",id:"textas",rows:"2.5",maxlength:"150"},domProps:{value:t.formItem.need_food},on:{input:function(s){s.target.composing||t.$set(t.formItem,"need_food",s.target.value)}}})]),t._v(" "),i("div",{staticClass:"type"},[i("div",{staticClass:"type-title"},[t._v("参赛类别")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.select1,expression:"select1"}],staticClass:"select",on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.select1=s.target.multiple?i:i[0]}}},[i("option",{attrs:{disabled:"",value:""}},[t._v("请选择")]),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("猪头")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("猪身")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("猪腿")]),t._v(" "),i("option",{attrs:{value:"4"}},[t._v("猪内脏")])]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.select2,expression:"select2"}],staticClass:"select",on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.select2=s.target.multiple?i:i[0]}}},[i("option",{attrs:{disabled:"",value:""}},[t._v("请选择")]),t._v(" "),t._l(t.smallList,function(s){return i("option",{domProps:{value:s.id}},[t._v(t._s(s.name))])})],2)]),t._v(" "),i("div",{staticClass:"image"},[i("div",{staticClass:"image-title"},[t._v("菜品照片")]),t._v(" "),i("div",{staticClass:"upload-img"})]),t._v(" "),i("div",{staticClass:"author-name"},[i("span",[t._v("作者昵称")]),t._v(" "),i("span",[t._v("|")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.formItem.author_name,expression:"formItem.author_name"}],attrs:{type:"text",maxlength:"10"},domProps:{value:t.formItem.author_name},on:{input:function(s){s.target.composing||t.$set(t.formItem,"author_name",s.target.value)}}})]),t._v(" "),i("div",{staticClass:"author-name"},[i("span",[t._v("联系方式")]),t._v(" "),i("span",[t._v("|")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.formItem.author_phone,expression:"formItem.author_phone"}],attrs:{type:"text",maxlength:"11"},domProps:{value:t.formItem.author_phone},on:{input:function(s){s.target.composing||t.$set(t.formItem,"author_phone",s.target.value)}}})]),t._v(" "),i("div",{staticClass:"author"},[i("div",{staticClass:"image-title"},[t._v("作者头像")]),t._v(" "),i("Upload",{ref:"upload",attrs:{"on-success":t.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,name:"img",action:"http://127.0.0.1:8000/upload/"}},[i("div",{staticClass:"author-img",style:{backgroundImage:"url("+t.imgUrl+")"}})])],1)]),t._v(" "),i("div",{staticClass:"footer",on:{click:function(s){t.handleSubmit(t.formItem)}}},[i("img",{staticClass:"footer-img",attrs:{src:"http://app-image-test.cunyougo.com/active/tijiao.png",alt:""}})])])],1)},staticRenderFns:[]};var k=i("VU/8")(C,y,!1,function(t){i("1TtU"),i("yxMW")},"data-v-234883e3",null).exports,L=I.a,w={name:"detail",data:function(){return{workObj:{},show:!1,imgUrl:"http://app-image-test.cunyougo.com/active/button3.gif",isGives:!1,isPlay:!1}},created:function(){var t=window.location.href.split("#")[0];alert(localStorage.getItem("openid")),alert(t),c.a.get(this.COMMON.httpUrl2+"getWechatInfo/",{params:{url:t}}).then(function(t){L.config({debug:!1,appId:t.data.appid,timestamp:t.data.stamp,nonceStr:t.data.noncestr,signature:t.data.signa,jsApiList:["playVoice","pauseVoice","stopVoice"]}),L.ready(function(){console.log("jsapi配置成功")}),L.error(function(t){alert("jsapi配置错误",t.errMsg)})})},mounted:function(){var t=this.$router.currentRoute.query.id;this.getWorkDetail(t)},methods:{getWorkDetail:function(t){var s=this;c.a.get(this.COMMON.httpUrl+"MoreWorkInfo/",{params:{id:t}}).then(function(t){console.log(t.data),t.data?s.workObj=t.data.results[0]:console.log("错误信息")})},shield:function(){var t=this,s={openid:localStorage.getItem("openid"),work:this.workObj.id};this.isGive(),this.isGives?this.$Message.error("您已赞过该菜品，明天再来哟！"):c.a.post(this.COMMON.httpUrl2+"giveZan/",f()(s)).then(function(s){console.log(s.data),"ok"==s.data.result&&(t.show=!0,t.imgUrl="http://app-image-test.cunyougo.com/active/button1.png",t.workObj.point_num+=1)})},isGive:function(){var t=this;c.a.get(this.COMMON.httpUrl2+"giveZan/",{params:{openid:1,work:this.workObj.id}}).then(function(s){console.log(s.data.result),s.data.result,t.isGives=!0})},cancel_shield:function(){this.show=!1}},audioPlay:function(){this.isPlay=!0,L.playVoice({localId:this.workObj.audio})},stopPlay:function(){this.isPlay=!1,L.pauseVoice({localId:this.workObj.audio})}},x={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"detail"},[i("div",{staticClass:"bg-img"},[i("div",{staticClass:"title"},[i("span",[t._v(t._s(t.workObj.name))])]),t._v(" "),i("div",{staticClass:"product-detail"},[i("img",{attrs:{src:t.workObj.food_img,alt:""}}),t._v(" "),i("div",{staticClass:"author-info"},[i("div",{staticClass:"avater-info"},[i("img",{staticClass:"avater-img",attrs:{src:t.workObj.user.avater,alt:""}}),t._v(" "),i("p",{staticClass:"avater-name"},[t._v(t._s(t.workObj.user.name))])]),t._v(" "),i("div",{staticClass:"avater-info"},[i("p",{staticClass:"zan-num"},[t._v(t._s(t.workObj.point_num))]),t._v(" "),i("img",{attrs:{id:"zan",src:"http://app-image-test.cunyougo.com/active/zan-9.png",alt:""}})])])]),t._v(" "),""!=t.workObj.introduce?i("div",{staticClass:"work-introduce"},[i("div",[t._v("作品介绍")]),t._v(" "),i("div",[t._v("\n                "+t._s(t.workObj.introduce)+"\n            ")])]):t._e(),t._v(" "),""!=t.workObj.audio?i("div",{staticClass:"type"},[i("div",{staticClass:"type-title"},[t._v("语音介绍")]),t._v(" "),t.isPlay?i("img",{staticClass:"play",attrs:{src:"http://app-image-test.cunyougo.com/active/stop.png",alt:""},on:{click:t.stopPlay}}):i("img",{staticClass:"play",attrs:{src:"http://app-image-test.cunyougo.com/active/play.png",alt:""},on:{click:t.audioPlay}})]):t._e(),t._v(" "),i("div",{staticClass:"need-food"},[i("div",[t._v("所需食材")]),t._v(" "),i("div",[t._v("\n                "+t._s(t.workObj.food)+"\n            ")])]),t._v(" "),i("div",{staticClass:"dianzan",style:{backgroundImage:"url("+t.imgUrl+")"},attrs:{id:"button"},on:{click:function(s){t.shield()}}}),t._v(" "),t.show?i("div",{attrs:{id:"test"}}):t._e(),t._v(" "),t.show?i("div",{attrs:{id:"log_window"}},[i("div",{attrs:{id:"icon"},on:{click:function(s){t.cancel_shield()}}})]):t._e()])])},staticRenderFns:[]};var U=i("VU/8")(w,x,!1,function(t){i("8agu")},"data-v-29bd3fdd",null).exports;a.default.use(l.a);var j=new l.a({routes:[{path:"/",name:"Index",component:m},{path:"/more",component:h},{path:"/take",component:k},{path:"/detail",component:U}]}),N=(i("qb6w"),i("Bb4J"),{httpUrl:"http://hz.cunyougo.com/api/",imgUrl:"http://app-image-test.cunyougo.com/active/",httpUrl2:"http://hz.cunyougo.com/"}),M={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var S=i("VU/8")(N,M,!1,function(t){i("twuQ")},"data-v-4df44f34",null).exports,O=i("BTaQ"),$=i.n(O);i("+skl");a.default.prototype.COMMON=S,a.default.config.productionTip=!1,a.default.use($.a),new a.default({el:"#app",router:j,components:{App:n},template:"<App/>"})},QpAi:function(t,s){},qb6w:function(t,s){},s347:function(t,s){},twuQ:function(t,s){},yxMW:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.7e9ee5d0cca2718f3ec0.js.map