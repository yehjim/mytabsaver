(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0c88":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"eventpage"},[i("Header"),i("div",{staticClass:"Carousel",style:{backgroundImage:"url("+t.eventinfo[1]+")"}}),i("div",{staticClass:"actinfo"},[i("div",{staticClass:"actinfo-name"},[i("h4",[t._v(t._s(t.eventinfo[0]))])])]),i("div",{staticClass:"flexwrap"},[i("div",{staticClass:"content-info"},[i("div",{staticClass:"loc"},[i("div",{staticClass:"loc-icon"},[i("i",{staticClass:"ri-map-pin-line",style:{color:t.hostinfo[7]}})]),i("span",{staticClass:"loc-content"},[t._v(t._s(t.eventinfo[4]))])]),i("div",{staticClass:"loc"},[i("div",{staticClass:"loc-icon"},[i("i",{staticClass:"ri-time-line",style:{color:t.hostinfo[7]}})]),i("span",{staticClass:"loc-content"},[t._v(t._s(t.eventinfo[2])+" "+t._s(t.eventinfo[3]))])]),i("div",{staticClass:"loc"},[i("div",{staticClass:"loc-icon"},[i("i",{staticClass:"ri-group-2-line",style:{color:t.hostinfo[7]}})]),i("span",{staticClass:"loc-content"},[t._v("剩餘人數："+t._s(t.eventinfo[7])+"人")])])]),i("div",{staticClass:"mobile olderangel",style:{borderColor:t.maincolor}},[i("div",{staticClass:"olderangel-title",style:{color:t.maincolor}},[i("i",{staticClass:"ri-double-quotes-r"}),t._v("銀髮大使介紹 "),i("i",{staticClass:"ri-double-quotes-r"})]),t._m(0),i("div",{staticClass:"olderangel-skill"},[i("div",{staticClass:"title"},[i("div",{style:{backgroundColor:t.hostinfo[7]}}),i("span",[t._v("興趣與技能")])]),i("div",{staticClass:"content"},[t._v("國劇、舞蹈、表演")])]),i("div",{staticClass:"olderangel-intro"},[i("div",{staticClass:"title"},[i("div",{style:{backgroundColor:t.hostinfo[7]}}),i("span",[t._v("簡介")])]),i("div",{staticClass:"content"},[t._v("曾在台灣國劇團擔任表演者，退休後也有繼續進修，喜愛交朋友並傳授自已的經驗給更多人認識表演、國劇！")])])]),i("div",{staticClass:"btnwrap"},[i("span",{staticClass:"fee"},[t._v("費用:"+t._s(t.eventinfo[13])+"/人")]),0==t.eventinfo[7]?i("fillbtn",{attrs:{btnname:"已額滿",width:"204",height:"45"},on:{clickhandler:t.tosignuppage}}):i("fillbtn",{attrs:{btnname:"立即報名",width:"204",height:"45"},on:{clickhandler:t.alertmaxnumber}})],1)]),i("div",{staticClass:"olderangelwrap"},[i("div",{staticClass:"desktop olderangel",style:{borderColor:t.maincolor}},[i("div",{staticClass:"olderangel-title",style:{color:t.maincolor}},[i("i",{staticClass:"ri-double-quotes-r"}),t._v("銀髮大使介紹 "),i("i",{staticClass:"ri-double-quotes-r"})]),t._m(1),i("div",{staticClass:"olderangel-skill"},[i("div",{staticClass:"title"},[i("div",{style:{backgroundColor:t.hostinfo[7]}}),i("span",[t._v("興趣與技能")])]),i("div",{staticClass:"content"},[t._v("國劇、舞蹈、表演")])]),i("div",{staticClass:"olderangel-intro"},[i("div",{staticClass:"title"},[i("div",{style:{backgroundColor:t.hostinfo[7]}}),i("span",[t._v("簡介")])]),i("div",{staticClass:"content"},[t._v("曾在台灣國劇團擔任表演者，退休後也有繼續進修，喜愛交朋友並傳授自已的經驗給更多人認識表演、國劇！")])])])]),i("div",{staticClass:"describecontent"},[i("div",{staticClass:"title"},[i("div",{style:{backgroundColor:t.hostinfo[7]}}),t._v("活動介紹 ")]),i("div",{staticClass:"content",domProps:{innerHTML:t._s(t.eventinfo[11])}})]),i("div",{staticClass:"mobilesubmitbtn",style:{color:t.maincolor}},[i("span",[t._v(t._s(t.eventinfo[13])+" / 人")]),i("div",{staticClass:"submitbtn",on:{click:t.tosignuppage}},[t._v("立即報名")])]),i("Sidemenu",{directives:[{name:"show",rawName:"v-show",value:t.showsidemenu,expression:"showsidemenu"}]}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingcircle,expression:"loadingcircle"}],staticClass:"loadingmask"},[i("div",{staticClass:"loader"})])],1)},o=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"olderangel-name"},[i("span",[t._v("黃義勛")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"olderangel-name"},[i("span",[t._v("黃義勛")])])}],a=(i("ac1f"),i("1276"),i("bc3a")),n=i.n(a),l=i("20ee"),c=i("0418"),r=i("ede1"),d={data:function(){return{eventinfo:[],loadingcircle:!0}},created:function(){var t=this;if(n()({method:"get",url:"https://script.google.com/macros/s/AKfycbzW4IbkVHdr_DCY3U65uBx4zV9cCmSBeU-FT1QsK_UbloDhniYPT-TGXQi5tky9M5UR/exec",params:{mode:"query",id:this.$route.params.id}}).then((function(s){t.eventinfo=s.data[0],t.loadingcircle=!1,t.eventinfo[2]=t.convertdate(t.eventinfo[2]),t.$store.commit("sethostid",t.eventinfo[17]),console.log(s.data)})),window.sessionStorage.getItem("hostinfo")){var s=window.sessionStorage.getItem("hostinfo");this.$store.commit("sethostinfo",JSON.parse(s))}},mounted:function(){this.$store.dispatch("gethostinfo"),window.sessionStorage.setItem("hostinfo",JSON.stringify(this.hostinfo))},components:{Header:c["a"],fillbtn:l["a"],Sidemenu:r["a"]},computed:{showsidemenu:function(){return this.$store.state.showsidemenu},hostinfo:function(){return this.$store.state.hostinfo[0]},maincolor:function(){return this.$store.state.maincolor}},methods:{tosignuppage:function(){this.$router.push({name:"Signup",params:{id:this.$route.params.id}})},alertmaxnumber:function(){alert("已額滿")},convertdate:function(t){var s=t,i=s.split("-"),e=(i[0]+"/"+i[1]+"/"+i[2]).substring(0,10);return e}}},v=d,u=(i("8442"),i("2877")),f=Object(u["a"])(v,e,o,!1,null,"22088ddb",null);s["default"]=f.exports},"77d7":function(t,s,i){},8442:function(t,s,i){"use strict";i("77d7")}}]);
//# sourceMappingURL=about.7defc91c.js.map