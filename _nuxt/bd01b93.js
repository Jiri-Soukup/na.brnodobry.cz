(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{277:function(e,t,n){(function(t){var r=n(278),c={space:t.env.CTF_SPACE_ID,accessToken:t.env.CTF_CDA_ACCESS_TOKEN};e.exports={createClient:function(){return r.createClient(c)}}}).call(this,n(132))},307:function(e,t){},335:function(e,t,n){"use strict";n.r(t);var r=n(9),c=(n(58),n(276)),l=n.n(c),o=n(277),d=Object(o.createClient)(),f={components:{RichTextRenderer:l.a},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.env,t.next=3,d.getEntries({content_type:"event"});case 3:return n=t.sent,t.abrupt("return",{events:n.items});case 5:case"end":return t.stop()}}),t)})))()}},v=f,x=n(56),component=Object(x.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"max-w-xl mx-auto"},[n("h1",{staticClass:"text-3xl text-center p-3 bg-blue-600 text-white"},[e._v("NA Brno dobrý 2022")]),e._v(" "),n("h3",{staticClass:"text-xl text-gray-500"},[e._v("Events:")]),e._v(" "),n("ul",{staticClass:"divide-indigo-400"},e._l(e.events,(function(t){return n("li",[e._v("\n      "+e._s(t.fields.title)+"\n      "),t.fields.description?n("RichTextRenderer",{attrs:{document:t.fields.description}}):e._e(),e._v(" "),t.fields.thumbnail?n("img",{staticClass:"max-w-md mx-auto",attrs:{src:t.fields.thumbnail.fields.file.url,alt:t.fields.title}}):e._e()],1)})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);