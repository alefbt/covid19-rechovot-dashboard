(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"1d9a":function(e,i,t){},4109:function(e,i,t){},"44a5":function(e,i,t){"use strict";var s=t("1d9a"),a=t.n(s);a.a},"6dec":function(e,i,t){"use strict";var s=t("4109"),a=t.n(s);a.a},"8b24":function(e,i,t){"use strict";t.r(i);var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("q-page",{staticClass:"column justify-start"},[t("LayoutBuilder",{attrs:{data:e.currentData}})],1)},a=[],u=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"absolute fit row"},[t("div",{staticClass:"col"},["LayoutCols"==e.data.type?t("LayoutCols",{attrs:{layoutItem:e.dataItem}}):e._e()],1)])},n=[],l=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"absolute fit row q-pa-md"},e._l(e.columnItems,(function(i,s){return t("div",{key:s,staticClass:"col layout-col"},["text"==i.type?t("TextDisplay",{attrs:{data:i}}):e._e(),"images"==i.type?t("ImageDisplay",{attrs:{data:i}}):e._e()],1)})),0)},r=[],o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"fit row q-pa-md"},[t("div",{staticClass:"col"},[t("q-carousel",{attrs:{animated:"",infinite:"",autoplay:"","transition-prev":"slide-right","transition-next":"slide-left",height:"100%",draggable:"false"},model:{value:e.slide,callback:function(i){e.slide=i},expression:"slide"}},e._l(e.images,(function(e,i){return t("q-carousel-slide",{key:i,attrs:{name:i,"img-src":e.src}})})),1)],1)])},c=[],m={name:"ImageDisplay",props:{data:{type:Object,required:!0}},data:function(){return{slide:0,images:this.data.images}},components:{}},d=m,p=(t("a7f8"),t("2877")),b=t("eebe"),v=t.n(b),g=t("880c"),f=t("62cd"),h=Object(p["a"])(d,o,c,!1,null,null,null),q=h.exports;v()(h,"components",{QCarousel:g["a"],QCarouselSlide:f["a"]});var y=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"fit row q-pa-md"},[t("div",{staticClass:"td-full col",domProps:{innerHTML:e._s(e.text)}})])},D=[],P={name:"TextDisplay",props:{data:{type:Object,required:!0}},data:function(){return{text:this.data.text}},components:{}},I=P,C=(t("ca05"),Object(p["a"])(I,y,D,!1,null,null,null)),x=C.exports,M={name:"LayoutCols",props:{layoutItem:{type:Object,required:!0}},computed:{columnItems:function(){return this.layoutItem.items}},components:{ImageDisplay:q,TextDisplay:x}},j=M,N=(t("44a5"),Object(p["a"])(j,l,r,!1,null,null,null)),_=N.exports,w={name:"LayoutBuilder",components:{LayoutCols:_},props:{data:{type:Object,required:!0}},computed:{dataItem:function(){return this.data}}},L=w,A=Object(p["a"])(L,u,n,!1,null,null,null),S=A.exports,O={name:"PageIndex",components:{LayoutBuilder:S},mounted:function(){this.startSlider()},data:function(){return{slideItem:0,slides:[{type:"LayoutCols",timeout:5e3,items:[{type:"images",images:[{src:"/statics/moh-graphics/general-isolation-he.jpg"},{src:"/statics/moh-graphics/corona-signs.png"}]},{type:"text",text:'<div class="row"> <div class="col" ><h1>ssssss</h1>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales nulla ac orci sollicitudin, at dapibus libero porttitor. Proin eleifend mattis dolor gravida molestie. Vestibulum quis nibh sed eros imperdiet porta eu sed velit. Duis finibus tincidunt lectus nec pretium. Quisque at cursus magna, ut bibendum ante. Phasellus cursus tincidunt sagittis. Nam at posuere erat. Pellentesque non sapien et nisl interdum congue. Praesent id porttitor lacus. Donec et cursus odio, et ornare lorem. Integer fringilla, quam consectetur laoreet fringilla, lorem nisi faucibus odio, et vulputate ipsum tortor sit amet orci. Nam congue varius ligula in placerat. Nam dui felis, porttitor quis blandit non, fringilla mattis sem. Duis ut elit semper, imperdiet purus nec, cursus turpis. Donec sit amet erat id diam ultricies varius.  Nulla convallis, mi quis vulputate sodales, eros est pulvinar massa, eget consequat sapien erat vitae nulla. Aliquam pretium quam lorem, at commodo erat bibendum nec. Curabitur laoreet nibh eu massa dapibus tristique. Duis congue dui mauris, in egestas enim mattis convallis. Praesent ornare augue ut tellus lacinia, nec iaculis lectus faucibus. Donec ut sem sit amet lectus dapibus hendrerit vitae ullamcorper massa. Morbi sed lobortis mi, ac luctus eros. Proin mattis justo id tempor placerat. Morbi tempor blandit libero feugiat facilisis. Nam hendrerit tincidunt odio, a eleifend erat tristique id. Vivamus vel diam faucibus, tincidunt libero ut, euismod ipsum. Curabitur placerat tincidunt massa, sed vestibulum sapien semper non. Pellentesque auctor urna ut orci luctus, sed ullamcorper eros ullamcorper. Suspendisse quis magna non sapien tristique sagittis nec condimentum mauris. Phasellus gravida eleifend blandit. Maecenas aliquam pretium lorem id mollis.  In molestie velit in volutpat bibendum. Aenean vitae nulla mollis nunc tempus interdum. Fusce quis lectus tincidunt eros rutrum pretium in vel metus. Morbi eleifend malesuada gravida. Duis quis fringilla ligula. Donec sodales sagittis massa, quis faucibus augue malesuada et. Ut eu lobortis mauris. Curabitur pharetra nisi eu eros tincidunt, in porttitor purus pretium. Maecenas congue nec orci vel consequat. Vivamus nec ipsum id urna rhoncus euismod. Nam eget varius dui. Etiam a nibh quis nulla commodo lacinia. Mauris vitae odio vulputate, imperdiet sem at, ultrices sem. Proin et neque tellus. Maecenas turpis velit, sollicitudin ac luctus vitae, finibus ac nisi.  Donec nec ligula nibh. Donec pretium elementum tempor. Aenean blandit, dui sit amet accumsan bibendum, risus eros tempor enim, quis dignissim arcu sapien a justo. Vestibulum rhoncus pharetra purus, ut lobortis massa scelerisque vel. Nunc accumsan rhoncus leo et dictum. Pellentesque semper placerat nibh, sed tristique orci luctus ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sagittis nisi vitae tellus faucibus ornare. Morbi vulputate gravida nulla, a convallis nulla. Praesent condimentum eros eu erat placerat, tristique ornare arcu porttitor. Aliquam consectetur ultricies nisi, vel commodo diam pretium vulputate. Duis a ligula interdum, pharetra sem ut, ullamcorper orci.  In hac habitasse platea dictumst. Proin ornare vel massa quis semper. Sed dictum elit vel velit imperdiet accumsan. Phasellus metus nisl, bibendum non elit eget, luctus suscipit felis. Duis ultricies dictum mi pulvinar feugiat. Mauris volutpat a tellus quis dapibus. Donec dignissim mauris justo, vitae congue nulla vehicula sit amet. Nullam magna lectus, sagittis sed risus at, gravida dignissim mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam ullamcorper facilisis nisl. Ut imperdiet enim eget mattis ultrices. In a enim accumsan, ullamcorper augue at, egestas velit. Nam ornare lobortis sollicitudin. </div></div>'}]},{type:"LayoutCols",timeout:5e3,items:[{type:"images",images:[{src:"/statics/moh-graphics/general-isolation-he.jpg"},{src:"/statics/moh-graphics/corona-signs.png"}]}]},{type:"LayoutCols",timeout:5e3,items:[{type:"text",text:'<div class="row"> <div class="col" ><h1>ssssss</h1>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales nulla ac orci sollicitudin, at dapibus libero porttitor. Proin eleifend mattis dolor gravida molestie. Vestibulum quis nibh sed eros imperdiet porta eu sed velit. Duis finibus tincidunt lectus nec pretium. Quisque at cursus magna, ut bibendum ante. Phasellus cursus tincidunt sagittis. Nam at posuere erat. Pellentesque non sapien et nisl interdum congue. Praesent id porttitor lacus. Donec et cursus odio, et ornare lorem. Integer fringilla, quam consectetur laoreet fringilla, lorem nisi faucibus odio, et vulputate ipsum tortor sit amet orci. Nam congue varius ligula in placerat. Nam dui felis, porttitor quis blandit non, fringilla mattis sem. Duis ut elit semper, imperdiet purus nec, cursus turpis. Donec sit amet erat id diam ultricies varius.  Nulla convallis, mi quis vulputate sodales, eros est pulvinar massa, eget consequat sapien erat vitae nulla. Aliquam pretium quam lorem, at commodo erat bibendum nec. Curabitur laoreet nibh eu massa dapibus tristique. Duis congue dui mauris, in egestas enim mattis convallis. Praesent ornare augue ut tellus lacinia, nec iaculis lectus faucibus. Donec ut sem sit amet lectus dapibus hendrerit vitae ullamcorper massa. Morbi sed lobortis mi, ac luctus eros. Proin mattis justo id tempor placerat. Morbi tempor blandit libero feugiat facilisis. Nam hendrerit tincidunt odio, a eleifend erat tristique id. Vivamus vel diam faucibus, tincidunt libero ut, euismod ipsum. Curabitur placerat tincidunt massa, sed vestibulum sapien semper non. Pellentesque auctor urna ut orci luctus, sed ullamcorper eros ullamcorper. Suspendisse quis magna non sapien tristique sagittis nec condimentum mauris. Phasellus gravida eleifend blandit. Maecenas aliquam pretium lorem id mollis.  In molestie velit in volutpat bibendum. Aenean vitae nulla mollis nunc tempus interdum. Fusce quis lectus tincidunt eros rutrum pretium in vel metus. Morbi eleifend malesuada gravida. Duis quis fringilla ligula. Donec sodales sagittis massa, quis faucibus augue malesuada et. Ut eu lobortis mauris. Curabitur pharetra nisi eu eros tincidunt, in porttitor purus pretium. Maecenas congue nec orci vel consequat. Vivamus nec ipsum id urna rhoncus euismod. Nam eget varius dui. Etiam a nibh quis nulla commodo lacinia. Mauris vitae odio vulputate, imperdiet sem at, ultrices sem. Proin et neque tellus. Maecenas turpis velit, sollicitudin ac luctus vitae, finibus ac nisi.  Donec nec ligula nibh. Donec pretium elementum tempor. Aenean blandit, dui sit amet accumsan bibendum, risus eros tempor enim, quis dignissim arcu sapien a justo. Vestibulum rhoncus pharetra purus, ut lobortis massa scelerisque vel. Nunc accumsan rhoncus leo et dictum. Pellentesque semper placerat nibh, sed tristique orci luctus ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sagittis nisi vitae tellus faucibus ornare. Morbi vulputate gravida nulla, a convallis nulla. Praesent condimentum eros eu erat placerat, tristique ornare arcu porttitor. Aliquam consectetur ultricies nisi, vel commodo diam pretium vulputate. Duis a ligula interdum, pharetra sem ut, ullamcorper orci.  In hac habitasse platea dictumst. Proin ornare vel massa quis semper. Sed dictum elit vel velit imperdiet accumsan. Phasellus metus nisl, bibendum non elit eget, luctus suscipit felis. Duis ultricies dictum mi pulvinar feugiat. Mauris volutpat a tellus quis dapibus. Donec dignissim mauris justo, vitae congue nulla vehicula sit amet. Nullam magna lectus, sagittis sed risus at, gravida dignissim mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam ullamcorper facilisis nisl. Ut imperdiet enim eget mattis ultrices. In a enim accumsan, ullamcorper augue at, egestas velit. Nam ornare lobortis sollicitudin. </div></div>'}]}]}},computed:{currentData:function(){return this.slides[this.slideItem]}},methods:{nextSlide:function(){var e=this;this.slideItem<0||this.slideItem>=this.slides.length-1?this.slideItem=0:this.slideItem++;var i=this.slides[this.slideItem]&&this.slides[this.slideItem].timeout&&this.slides[this.slideItem].timeout>3e3?this.slides[this.slideItem].timeout:3e3;setTimeout((function(){e.nextSlide()}),i)},startSlider:function(){var e=this,i=this.slides[0].timeout&&this.slides[0].timeout>3e3?this.slides[0].timeout:3e3;setTimeout((function(){e.nextSlide()}),i)},myTweak:function(e){return{minHeight:e?"calc(100vh - ".concat(e,"px)"):"100vh"}}}},V=O,E=(t("6dec"),t("9989")),T=Object(p["a"])(V,s,a,!1,null,null,null);i["default"]=T.exports;v()(T,"components",{QPage:E["a"]})},a7f8:function(e,i,t){"use strict";var s=t("abcb"),a=t.n(s);a.a},abcb:function(e,i,t){},ca05:function(e,i,t){"use strict";var s=t("f534"),a=t.n(s);a.a},f534:function(e,i,t){}}]);