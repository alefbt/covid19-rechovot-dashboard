(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"546f":function(t,a,e){"use strict";var n=e("ed30"),s=e.n(n);s.a},"713b":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"hHh lpR fFf"}},[e("div",{staticClass:"z-top text-white",staticStyle:{position:"absolute",top:"0",righth:"0"}},[t._v('\n  בס"ד\n  ')]),e("q-header",{attrs:{elevated:""}},[e("q-toolbar",[e("q-space"),e("q-toolbar-title",[t._v("\n          מערכת "),e("strong",[t._v("עדכונים")])]),e("div",[t._v("\n          PREPROD\n        ")])],1)],1),e("q-drawer",{staticClass:"cursor-pointer",attrs:{"content-style":"overflow: hidden;",side:"left",bordered:""},on:{click:t.getNewsItem},model:{value:t.leftDrawer,callback:function(a){t.leftDrawer=a},expression:"leftDrawer"}},t._l(t.items,(function(a){return e("q-card",{key:a.key,staticClass:"info-card",staticStyle:{margin:"1em","background-color":"#f0f0f0"}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v(t._s(a.title))]),e("div",{domProps:{innerHTML:t._s(a.text)}})]),e("q-card-actions",[e("q-item-label",{attrs:{caption:""}},[e("q-icon",{attrs:{icon:"event"}}),t._v(" "+t._s(a.updatedAt)+'\n\n          עודכן ע"י:\n          '),e("strong",[t._v(t._s(a.updatedBy))])],1)],1)],1)})),1),e("q-page-container",[e("router-view")],1),e("q-footer",{staticClass:"bg-grey-3 text-black",attrs:{elevated:""}},[e("q-toolbar",[e("div",[t._v('\n         מוקד משרד הבריאות בטלפון 5400* | כללית 2700* | מכבי 3555* | מאוחדת 3833* | לאומית 507* | מד"א 101\n      ')]),e("q-space"),e("small",[t._v("\n        כל הזכויות שמורות \n\n        ל"),e("a",{attrs:{href:"https://www.alefbt.com/"}},[t._v("אלףבט")]),t._v("\n        ו- "),e("a",{attrs:{href:"https://www.alefbt.com/"}},[t._v("קורוטקין")])])],1)],1)],1)},s=[],i=e("1732"),o=e("11ec"),l={name:"MainLayout",mounted:function(){var t=this;this.getFullData(),setInterval((function(a){t.getNewsItem()}),5e3)},methods:{getFullData:function(){var t=this,a=this;this.$axios.get("/statics/data-flash.json").then((function(e){a.fulldata=e.data.data,t.getNewsItem()})).catch((function(t){console.log("getFullData",t)}))},getNewsItem:function(){(this.fulldataPointer<0||this.fulldataPointer>=this.fulldata.length)&&(this.fulldataPointer=0);var t=Object(o["a"])(!1,{key:Object(i["a"])()},this.fulldata[this.fulldataPointer]);this.items.splice(0,0,t),this.fulldataPointer++,this.items.length>20&&this.items.pop()}},data:function(){return{fulldata:[],fulldataPointer:0,leftDrawer:!0,items:[],show:!0}}},r=l,c=(e("546f"),e("2877")),d=e("eebe"),f=e.n(d),u=e("4d5a"),h=e("e359"),v=e("65c6"),w=e("2c91"),p=e("6ac5"),b=e("9404"),m=e("f09f"),g=e("a370"),_=e("4b7e"),q=e("0170"),Q=e("0016"),y=e("09e3"),P=e("7ff0"),k=Object(c["a"])(r,n,s,!1,null,null,null);a["default"]=k.exports;f()(k,"components",{QLayout:u["a"],QHeader:h["a"],QToolbar:v["a"],QSpace:w["a"],QToolbarTitle:p["a"],QDrawer:b["a"],QCard:m["a"],QCardSection:g["a"],QCardActions:_["a"],QItemLabel:q["a"],QIcon:Q["a"],QPageContainer:y["a"],QFooter:P["a"]})},ed30:function(t,a,e){}}]);