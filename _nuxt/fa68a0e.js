(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{450:function(e,t,r){var content=r(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(65).default)("47ef557a",content,!0,{sourceMap:!1})},454:function(e,t,r){e.exports=r.p+"img/question-mark.de99217.svg"},455:function(e,t,r){"use strict";r(450)},456:function(e,t,r){var n=r(64)((function(i){return i[1]}));n.push([e.i,".nuxt-link-active[data-v-7deaca84]{--tw-text-opacity:1;color:rgb(249 0 147 / var(--tw-text-opacity))}nav .nuxt-link-active[data-v-7deaca84]::after{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(249 0 147 / var(--tw-bg-opacity))}",""]),n.locals={},e.exports=n},460:function(e,t,r){"use strict";r.r(t);r(40),r(28),r(36),r(11),r(57),r(39),r(58);var n=r(4),o=r(17),c=(r(19),r(23),r(66),r(48),r(59),r(161)),l=r.n(c),d=r(163),f=r.n(d),y=r(75);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w=function(e,t,r,n){return e.data&&e.data.target&&e.data.target.fields&&e.data.target.fields.file?r("img",{attrs:{src:e.data.target.fields.file.url,width:e.data.target.fields.file.details.image.width,height:e.data.target.fields.file.details.image.height,class:""}}):""},x={name:"Questions",components:{RichTextRenderer:l.a},props:{category:String,question:String},computed:v(v({},Object(y.b)("questions",["currentQuestions"])),Object(y.c)("questions",["categoriesSlugs","categories"])),created:function(){this.nodeRenderers={"embedded-asset-block":w}},methods:{slug:function(e){return f()(e)}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.category){t.next=3;break}return t.abrupt("return",e.$router.replace({name:"faq-category",params:{category:"general"}}));case 3:if(e.categoriesSlugs.includes(r)){t.next=5;break}throw Error({statusCode:404,message:"Unknown FAQ category."});case 5:case"end":return t.stop()}}),t)})))()}},h=(r(455),r(12)),component=Object(h.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("nav",[n("ul",{staticClass:"\n      font-medium text-gray-800 dark:text-gray-100 text-lg\n      flex flex-wrap flex-row justify-around md:justify-center items-center\n    "},e._l(e.categories,(function(g){return n("li",{staticClass:"\n          inline-block w-1/2 md:w-auto text-center group\n        "},[n("nuxt-link",{staticClass:"\n            inline-block p-1 md:p-4 hover:text-primary dark:hover:text-secondary\n\n            relative\n            after:absolute\n            after:bottom-0 after:w-full after:h-1 after:bg-primary\n            after:left-0 after:right-0\n            group-last:after:rounded-r-full group-first:after:rounded-l-full\n         ",attrs:{to:{name:"faq-category",params:{category:g.slug}}}},[e._v(e._s(g.title)+"\n        ")])],1)})),0)]),e._v(" "),n("div",{staticClass:"max-w-2xl mx-auto py-4 md:py-8"},e._l(e.currentQuestions,(function(q){return n("div",{staticClass:"group"},[n("nuxt-link",{staticClass:"\n          text-lg p-4 block\n          flex flex-row items-center justify-between\n\n          group-odd:bg-gray-100 group-odd:hover:bg-gray-200 group-hover:bg-gray-100\n          dark:group-odd:bg-gray-800 dark:group-hover:bg-gray-800 dark:group-odd:hover:bg-gray-700\n        ",class:{"text-primary dark:text-secondary":e.question===q.sys.id},attrs:{to:{name:e.question===q.sys.id?"faq-category":"faq-category-question",params:{category:e.slug(q.fields.category),question:q.sys.id}},href:"#"}},[n("div",{staticClass:"w-5/6 text-sm sm:text-base"},[q.fields.question?n("RichTextRenderer",{attrs:{document:q.fields.question}}):e._e()],1),e._v(" "),n("img",{staticClass:"h-6 w-6 black-to-primary dark:black-to-white",class:{"dark:black-to-secondary black-to-secondary":e.question===q.sys.id},attrs:{alt:"Question","aria-hidden":"true",src:r(454)}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.question===q.sys.id,expression:"question === q.sys.id"}],staticClass:"p-4 bg-gray-50 dark:bg-gray-800 prose dark:prose-invert mx-auto prose-img:my-2"},[q.fields.answer?n("RichTextRenderer",{attrs:{document:q.fields.answer,"node-renderers":e.nodeRenderers}}):e._e()],1)],1)})),0)])}),[],!1,null,"7deaca84",null);t.default=component.exports;installComponents(component,{Nav:r(162).default})}}]);