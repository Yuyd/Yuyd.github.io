(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{335:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return d}));n(34),n(75),n(184);var s=/#.*$/,i=/\.(md|html)$/,o=/\/$/,r=/^(https?:|mailto:|tel:)/;function a(t){return r.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function u(t){if(a(t))return t;var e=t.match(s),n=e?e[0]:"",r=function(t){return decodeURI(t).replace(s,"").replace(i,"")}(t);return o.test(r)?t:r+".html"+n}function d(t,e,n){if(!t)return n;for(var s,i=e;(i=i.$parent)&&!s;)s=i.$refs[t];return s&&s.$el&&(s=s.$el),s||n}},337:function(t,e,n){},338:function(t,e,n){},339:function(t,e,n){},340:function(t,e,n){},350:function(t,e,n){"use strict";n(337)},351:function(t,e,n){"use strict";n(338)},352:function(t,e,n){"use strict";n(339)},355:function(t,e,n){"use strict";n(340)},385:function(t,e,n){"use strict";n.r(e);n(183),n(349);var s,i=n(335),o={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()},methods:{stickHandle:function(){var t=this;if(this.stick){var e=Object(i.b)(this.stick,this);e&&(this._stickerScroll=function(){var n=t.$el.getBoundingClientRect(),s=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-s-n.height<e.offsetHeight,t.stickBottom=e.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},r=(n(350),n(9));function a(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var c={components:{Sticker:Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null).exports},data:function(){return{activeIndex:0}},computed:{visible:function(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex:function(){var t=(this.$refs.chairTocItem||[])[this.activeIndex];if(t){var e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),s=e.top-n.top;s<20?this.$el.scrollTop=this.$el.scrollTop+s-20:s+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))}},$route:function(){}},mounted:function(){var t=this,e=function(){t.$emit("visible-change",t.visible)};e(),this.$watch("visible",e),setTimeout((function(){return t.triggerEvt()}),1e3),this._onScroll=function(){return t.onScroll()},this._onHashChange=function(){var e=decodeURIComponent(location.hash.substring(1)),n=(t.$page.headers||[]).findIndex((function(t){return t.slug===e}));n>=0&&(t.activeIndex=n);var s=e&&document.getElementById(e);s&&window.scrollTo(0,a(s)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll:function(){var t=this;void 0===s&&(s=a(this.$el));for(var e=document.body.scrollTop+document.documentElement.scrollTop,n=this.$page.headers||[],i=0,o=function(e){t.activeIndex=e};i<n.length;i++){if(!(a(document.getElementById(n[i].slug))-50<e)){i||o(i);break}o(i)}},triggerEvt:function(){this._onScroll(),this._onHashChange()}}},l=(n(351),Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(e,s){return n("div",{key:s,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+e.level,{active:t.activeIndex===s}]},[n("a",{attrs:{href:"#"+e.slug,title:e.title}},[t._v(t._s(e.title))])])})),0):t._e()}),[],!1,null,null,null).exports),u=(n(53),n(101)),d=n.n(u),h={name:"PostTag",props:{tag:{type:String,required:!0}}},m=(n(352),{name:"PostMeta",components:{PostTag:Object(r.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("router-link",{attrs:{to:"/tag/"+this.tag}},[this._v(" "+this._s(this.tag)+" ")])}),[],!1,null,"43160e8a",null).exports},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate:function(){return d()(this.date).format(this.$themeConfig.dateFormat||"ddd, MMM DD YYYY")},resolvedTags:function(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}}),f=Object(r.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-meta"},[t.author?n("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?n("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()]):t._e(),t._v(" "),t.date?n("div",{staticClass:"post-meta-date"},[n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n"+t._s(t.resolvedDate)+"\n")])]):t._e(),t._v(" "),t.tags?n("div",{staticClass:"card-subheading post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return n("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null).exports,v=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$themeConfig.authors?n("div",t._l(t.$themeConfig.authors,(function(e){return n("span",{key:e.name},[n("div",{staticClass:"d-flex align-items-center"},[n("a",{staticClass:"profile-avatar"},[e.name===t.$frontmatter.author?n("img",{staticClass:"avatar-image",attrs:{src:t.$withBase(e.avatar),alt:e.name}}):t._e()]),t._v(" "),e.name===t.$frontmatter.author?n("div",[n("span",[t._v(t._s(e.name))]),t._v("  \n      ")]):t._e()])])})),0):t._e()}),[],!1,null,null,null).exports,p=n(353),g=n.n(p),_=(n(354),{components:{Toc:l,PostMeta:f,Avatar:v},mounted:function(){this.$nextTick((function(){var t=document.getElementById("vuepress-theme-blog__post-layout");new g.a(t,{})}))}}),$=(n(355),Object(r.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[n("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-8"},[n("header",[n("span",{staticClass:"text-muted"},[n("PostMeta",{attrs:{date:t.$frontmatter.date}})],1),t._v(" "),n("h1",{staticClass:"article-head mt-3",attrs:{itemprop:"name headline"}},[t._v("\n  "+t._s(t.$frontmatter.title)+"\n  ")]),t._v(" "),n("p",{staticClass:"lead"},[t._v(t._s(t.$frontmatter.description))]),t._v(" "),n("Avatar")],1)])]),t._v(" "),n("div",{staticClass:"row justify-content-center text-center mt-4 mb-40"},[n("div",{staticClass:"col-md-9"},[n("img",{staticClass:"featuredimg",attrs:{src:t.$frontmatter.featuredimg}})])]),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-8"},[n("Content",{attrs:{itemprop:"articleBody"}}),t._v(" "),n("div",{staticStyle:{color:"red"}},[n("Content",{attrs:{"slot-key":"code"}})],1),t._v(" "),n("PostMeta",{attrs:{tags:t.$frontmatter.tags}})],1)])]),t._v(" "),n("Toc")],1)}),[],!1,null,"2285683e",null));e.default=$.exports}}]);