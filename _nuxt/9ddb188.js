(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{455:function(t,e,n){t.exports=n.p+"img/woman-icon.7cf1f02.png"},456:function(t,e,n){"use strict";n.r(e);var r={name:"ContentfulImage",props:["asset","default"],computed:{url:function(){return this.asset?"".concat(this.asset.fields.file.url,"?fm=jpg&fl=progressive&f=faces&fit=thumb&w=180&h=180"):this.default||""}}},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.url,width:"180",height:"180"}})}),[],!1,null,"2c9282c6",null);e.default=component.exports},470:function(t,e,n){t.exports=n.p+"img/esn-bu-logo-black.067ebba.svg"},488:function(t,e,n){"use strict";n.r(e);var r=n(4),l=(n(18),n(66)),c={name:"ContactPage",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.env,n=Object(l.createClient)(),e.next=4,n.getEntries({content_type:"teamMember","fields.isImportant":!0,order:"fields.order"});case 4:return r=e.sent,e.abrupt("return",{members:r.items});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Contact"}}},o=n(12),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"space-y-4 lg:space-y-8"},[r("h1",{staticClass:"\n    text-4xl text-center font-bold text-primary dark:text-white\n    pt-4\n  "},[t._v("\n    Important Contacts\n  ")]),t._v(" "),r("ul",{staticClass:"flex flex-row flex-wrap justify-center"},t._l(t.members,(function(head){return r("li",{staticClass:"\n          py-4 px-4 sm:px-8 flex flex-col items-center justify-between\n          font-bold w-1/2 md:w-1/4\n    "},[r("ContentfulImage",{staticClass:"\n          w-full rounded-full\n          transition-transform duration-300 ease-in-out hover:scale-110\n        ",attrs:{asset:head.fields.photo,default:n(455)}}),t._v(" "),r("h2",{staticClass:"sm:text-lg text-primary dark:text-white text-center my-1"},[t._v(t._s(head.fields.name))]),t._v(" "),r("h3",{staticClass:"text-xs text-gray-600 dark:text-gray-400 text-center"},[t._v(t._s(head.fields.position))]),t._v(" "),head.fields.isImportant?r("a",{staticClass:"\n            text-gray-600 hover:text-gray-800 dark:text-gray-400 text-center\n            flex flex-row gap-x-1.5 items-center group pt-1\n          ",attrs:{href:"tel:"+head.fields.phone}},[r("svg",{staticClass:"w-4 h-4 bg-primary text-white p-[0.15rem] rounded-full group-hover:bg-secondary",attrs:{viewBox:"0 0 53.942 53.942","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M53.364 40.908c-2.008-3.796-8.981-7.912-9.288-8.092-.896-.51-1.831-.78-2.706-.78-1.301 0-2.366.596-3.011 1.68-1.02 1.22-2.285 2.646-2.592 2.867-2.376 1.612-4.236 1.429-6.294-.629L17.987 24.467c-2.045-2.045-2.233-3.928-.632-6.291.224-.309 1.65-1.575 2.87-2.596.778-.463 1.312-1.151 1.546-1.995.311-1.123.082-2.444-.652-3.731-.173-.296-4.291-7.27-8.085-9.277a4.947 4.947 0 0 0-2.306-.573 4.908 4.908 0 0 0-3.49 1.445L4.7 3.986C.686 7.999-.767 12.548.379 17.506c.956 4.132 3.742 8.529 8.282 13.068l14.705 14.705c5.746 5.746 11.224 8.66 16.282 8.66h.001c3.72 0 7.188-1.581 10.305-4.698l2.537-2.537a4.908 4.908 0 0 0 .873-5.796z",fill:"currentColor"}})]),t._v("\n        "+t._s(head.fields.phone)+"\n      ")]):t._e()],1)})),0),t._v(" "),r("a",{staticClass:"text-3xl py-4 font-bold text-primary dark:text-white flex justify-center hover:underline",attrs:{href:"mailto:oc_na@esncz.org"}},[t._v("\n    oc_na@esncz.org\n  ")]),t._v(" "),r("div",{staticClass:"border-secondary border-b-4 my-4"}),t._v(" "),r("img",{staticClass:"w-4/5 sm:w-1/3 mx-auto dark:black-to-white",attrs:{alt:"ESN Brno United",height:"80",loading:"lazy",src:n(470),width:"144"}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"\n    flex flex-col sm:flex-row max-w-2xl mx-auto justify-between\n    text-xl\n  "},[n("li",{staticClass:"flex flex-col items-center gap-y-1"},[t._v("\n      🟥\n      "),n("strong",[t._v("ESN VUT Brno")]),t._v(" "),n("a",{staticClass:"hover:underline",attrs:{href:"https://esnvutbrno.cz"}},[t._v("esnvutbrno.cz")])]),t._v(" "),n("li",{staticClass:"flex flex-col items-center gap-y-1"},[t._v("\n      🟦\n      "),n("strong",[t._v("ESN MUNI Brno")]),t._v(" "),n("a",{staticClass:"hover:underline",attrs:{href:"https://esn.muni.cz/"}},[t._v("esn.muni.cz")])]),t._v(" "),n("li",{staticClass:"flex flex-col items-center gap-y-1"},[t._v("\n      🟩\n      "),n("strong",[t._v("ESN MENDELU Brno")]),t._v(" "),n("a",{staticClass:"hover:underline",attrs:{href:"http://esnmendelu.cz/"}},[t._v("esnmendelu.cz")])])])}],!1,null,"645131c0",null);e.default=component.exports;installComponents(component,{ContentfulImage:n(456).default})}}]);