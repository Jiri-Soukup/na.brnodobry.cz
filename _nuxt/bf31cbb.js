(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{360:function(e,t,r){e.exports=r.p+"img/place.caa78d7.svg"},389:function(e,t,r){"use strict";r.r(t);var n=r(8),o=(r(38),r(30),r(84),r(69),r(112),r(362)),l=r.n(o),c=r(147),d=r(359),f=d.DateTime,m=d.Duration;d.Settings.defaultLocale="en-US",f.defaultZone="en-US";var h={name:"EventDetailPage",components:{RichTextRenderer:l.a},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,d,h,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,n=Object(c.createClient)(),t.next=4,n.getEntry(r.id);case 4:return o=t.sent,l=f.fromISO(o.fields.when),d=l.startOf("day").toFormat("ccc"),h=l.toFormat("t").replace(":00",""),v=o.fields.length?l.plus(m.fromObject({minutes:o.fields.length})).toFormat("t").replace(":00",""):"",t.abrupt("return",{event:o,dayName:d,fromTime:h,toTime:v});case 10:case"end":return t.stop()}}),t)})))()},data:function(){return{nodeRenderers:{"embedded-asset-block":function(e,t,r,n){return"".concat(e," ").concat(t)},hyperlink:function(e,t,r,n){return e.data.uri.startsWith("https://www.youtube.com/embed/")?r("iframe",{key:t,attrs:{frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",src:e.data.uri,class:"aspect-video w-full"}}):r("a",{key:t,attrs:{href:e.data.uri}},n(e.content,t,r,n))}}}},head:function(){return{title:this.event.fields.title}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push({name:"schedule"})}}},v=r(12),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"bg-primary text-white uppercase\n    p-2 my-2 text-center rounded block w-full font-bold",on:{click:e.goBack}},[e._v("\n    < back to schedule\n  ")]),e._v(" "),n("h1",{staticClass:"py-4 mb-4 border-b-4 border-secondary text-primary dark:text-white\n      font-bold flex flex-row justify-between items-center"},[n("span",{staticClass:"text-4xl"},[e._v(e._s(e.event.fields.title))]),e._v(" "),n("span",{staticClass:"text-3xl"},[e._v("\n      "+e._s(e.dayName)+", "+e._s(e.fromTime)+" "),e.toTime?[e._v("– "+e._s(e.toTime))]:e._e()],2)]),e._v(" "),n("div",{staticClass:"flex flex-row justify-between gap-x-4"},[n("div",{staticClass:"w-2/3 prose prose-p:text-justify dark:prose-invert"},[e.event.fields.description?n("RichTextRenderer",{attrs:{document:e.event.fields.description,nodeRenderers:e.nodeRenderers}}):e._e()],1),e._v(" "),n("div",{staticClass:"w-1/3"},[e.event.fields.photo?n("img",{attrs:{src:e.event.fields.photo.fields.file.url,width:e.event.fields.photo.fields.file.details.image.width,height:e.event.fields.photo.fields.file.details.image.height,alt:""}}):e._e(),e._v(" "),e.event.fields.place&&e.event.fields.place.fields.title?n("div",{staticClass:"my-4 gap-2 flex flex-row items-center justify-center"},[n("img",{staticClass:"h-8 w-8 dark:black-to-white",attrs:{src:r(360),alt:""}}),e._v(" "),n("span",{staticClass:"text-lg font-bold"},[e._v("\n          "+e._s(e.event.fields.place.fields.title)+"\n        ")])]):e._e()])])])}),[],!1,null,"7bda59bf",null);t.default=component.exports}}]);