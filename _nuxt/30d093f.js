(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{345:function(e,n,t){"use strict";t.r(n);var o=t(27);function map(e,n,t,o,r){var input,l,c;return c=r,(input=(e-n)*(r-o)/(t-n)+o)<(l=o)?l:input>c?c:input}var r={name:"IndexPage",data:function(){return{headerHeight:0}},mixins:[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"scrollPosition";return{data:function(){return Object(o.a)({},e,[0,0])},created:function(){var n=this;this.$isServer||(this._scrollListener=function(){n[e]=[Math.round(window.pageXOffset),Math.round(window.pageYOffset)]},this._scrollListener(),window.addEventListener("scroll",this._scrollListener))},beforeDestroy:function(){window.removeEventListener("scroll",this._scrollListener)}}}("scrollPosition")],methods:{mapNumber:function(e,n,t,o,r){return map(e,n,t,o,r)}},computed:{collapseRatio:function(){return map(this.scrollPosition[1]/this.headerHeight,0,.8,0,1)}},mounted:function(){}},l=r,c=t(16),component=Object(c.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",e._l(new Array(5),(function(i){return t("article",{staticClass:"text-lg text-justify"},[e._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam\n    molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.\n\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam\n    molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.\n\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore minus soluta. Dolore explicabo illo magnam\n    molestiae, obcaecati qui? Assumenda commodi laudantium modi numquam quas repudiandae sint. Magni provident, quae.\n  ")])})),0)}),[],!1,null,null,null);n.default=component.exports}}]);