(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"546f":function(t,e,a){"use strict";var n=a("ed30"),s=a.n(n);s.a},"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh lpR fFf"}},[a("div",{staticClass:"z-top text-white",staticStyle:{position:"absolute",top:"0",righth:"0"}},[t._v('\n  בס"ד\n  ')]),a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-space"),a("q-toolbar-title",[t._v("\n          מערכת "),a("strong",[t._v("עדכונים")])]),a("div",[t._v("\n          test\n        ")])],1)],1),a("q-drawer",{attrs:{"content-style":"overflow: hidden;",side:"left",bordered:""},model:{value:t.leftDrawer,callback:function(e){t.leftDrawer=e},expression:"leftDrawer"}},[a("transition-group",{attrs:{appear:"","enter-active-class":"animated slideInTop","leave-active-class":"animated fadeOut"}},t._l(t.items,(function(e){return a("q-card",{key:e.key,staticClass:"info-card"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Our Changing Planet")]),a("div",{staticClass:"text-subtitle2"})]),a("q-card-section",[a("p",[t._v("\n          ur\n        ")])]),a("q-card-actions",[a("q-item-label",{attrs:{caption:""}},[a("q-icon",{attrs:{icon:"event"}}),t._v(' 5:30PM\n\n          עודכן ע"י:\n          '),a("strong",[t._v("John Doe")])],1)],1)],1)})),1)],1),a("q-page-container",[a("router-view")],1),a("q-footer",{staticClass:"bg-grey-3 text-black",attrs:{elevated:""}},[a("q-toolbar",[a("div",[t._v("\n        כל הזכויות שמורות \n\n        ל"),a("a",{attrs:{href:"https://www.alefbt.com/"}},[t._v("אלףבט וקורוטקין")])])])],1)],1)},s=[],i={name:"MainLayout",mounted:function(){var t=this;setInterval((function(e){t.getNewsItem()}),3e3)},methods:{getNewsItem:function(){this.items.splice(0,0,{key:"idx-"+this.items.length}),this.items.length>30&&this.items.pop()}},data:function(){return{leftDrawer:!0,items:[],show:!0}}},r=i,o=(a("546f"),a("2877")),c=a("eebe"),l=a.n(c),d=a("4d5a"),u=a("e359"),f=a("65c6"),v=a("2c91"),p=a("6ac5"),h=a("9404"),w=a("f09f"),b=a("a370"),m=a("4b7e"),q=a("0170"),g=a("0016"),Q=a("09e3"),_=a("7ff0"),C=Object(o["a"])(r,n,s,!1,null,null,null);e["default"]=C.exports;l()(C,"components",{QLayout:d["a"],QHeader:u["a"],QToolbar:f["a"],QSpace:v["a"],QToolbarTitle:p["a"],QDrawer:h["a"],QCard:w["a"],QCardSection:b["a"],QCardActions:m["a"],QItemLabel:q["a"],QIcon:g["a"],QPageContainer:Q["a"],QFooter:_["a"]})},ed30:function(t,e,a){}}]);