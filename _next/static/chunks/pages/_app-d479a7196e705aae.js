(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6729:function(e){"use strict";var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function i(e,t,r,i,a){if("function"!=typeof r)throw TypeError("The listener must be a function");var u=new o(r,i||e,a),l=n?n+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],u]:e._events[l].push(u):(e._events[l]=u,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function u(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1)),u.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},u.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=Array(i);o<i;o++)a[o]=r[o].fn;return a},u.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},u.prototype.emit=function(e,t,r,o,i,a){var u=n?n+e:e;if(!this._events[u])return!1;var l,c,s=this._events[u],f=arguments.length;if(s.fn){switch(s.once&&this.removeListener(e,s.fn,void 0,!0),f){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,t),!0;case 3:return s.fn.call(s.context,t,r),!0;case 4:return s.fn.call(s.context,t,r,o),!0;case 5:return s.fn.call(s.context,t,r,o,i),!0;case 6:return s.fn.call(s.context,t,r,o,i,a),!0}for(c=1,l=Array(f-1);c<f;c++)l[c-1]=arguments[c];s.fn.apply(s.context,l)}else{var p,h=s.length;for(c=0;c<h;c++)switch(s[c].once&&this.removeListener(e,s[c].fn,void 0,!0),f){case 1:s[c].fn.call(s[c].context);break;case 2:s[c].fn.call(s[c].context,t);break;case 3:s[c].fn.call(s[c].context,t,r);break;case 4:s[c].fn.call(s[c].context,t,r,o);break;default:if(!l)for(p=1,l=Array(f-1);p<f;p++)l[p-1]=arguments[p];s[c].fn.apply(s[c].context,l)}}return!0},u.prototype.on=function(e,t,n){return i(this,e,t,n,!1)},u.prototype.once=function(e,t,n){return i(this,e,t,n,!0)},u.prototype.removeListener=function(e,t,r,o){var i=n?n+e:e;if(!this._events[i])return this;if(!t)return a(this,i),this;var u=this._events[i];if(u.fn)u.fn!==t||o&&!u.once||r&&u.context!==r||a(this,i);else{for(var l=0,c=[],s=u.length;l<s;l++)(u[l].fn!==t||o&&!u[l].once||r&&u[l].context!==r)&&c.push(u[l]);c.length?this._events[i]=1===c.length?c[0]:c:a(this,i)}return this},u.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,e.exports=u},2734:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}l((r=r.apply(e,t||[])).next())})},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let i=o(n(3931));function a(e,t="maxAge"){let n,o,a;let u=()=>r(this,void 0,void 0,function*(){if(void 0!==n)return;let u=u=>r(this,void 0,void 0,function*(){a=i.default();let r=u[1][t]-Date.now();if(r<=0){e.delete(u[0]),a.resolve();return}return n=u[0],"function"==typeof(o=setTimeout(()=>{e.delete(u[0]),a&&a.resolve()},r)).unref&&o.unref(),a.promise});try{for(let t of e)yield u(t)}catch(e){}n=void 0}),l=()=>{n=void 0,void 0!==o&&(clearTimeout(o),o=void 0),void 0!==a&&(a.reject(void 0),a=void 0)},c=e.set.bind(e);return e.set=(t,r)=>{e.has(t)&&e.delete(t);let o=c(t,r);return n&&n===t&&l(),u(),o},u(),e}t.default=a,e.exports=a,e.exports.default=a},3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2089)}])},4662:function(e,t,n){"use strict";let r;n.d(t,{hi:function(){return z},v:function(){return v},iF:function(){return m},yN:function(){return S},Wx:function(){return O},SH:function(){return C},WL:function(){return g},Vi:function(){return k},GH:function(){return Q},gr:function(){return H},bW:function(){return b},ho:function(){return U},IT:function(){return D},JN:function(){return h},r8:function(){return d},eF:function(){return A},sk:function(){return R},kG:function(){return T},X5:function(){return x},g0:function(){return P},tg:function(){return $},wW:function(){return N},NN:function(){return E},km:function(){return y},ZB:function(){return _},mo:function(){return I}});var o=n(6861),i={rootNotionPageId:"toulouse-dataviz.notion.site/95d49263abd74048bbb1461957b136ed?v=82f7765d47444562b74dcecfd0a3e8ae&pvs=4",rootNotionSpaceId:null,name:"Guidelines PF de Toulouse DataViz",domain:"notion2site.vercel.app",author:"TDV",copyright:"Toulouse DataViz (A. Roan et V. Vivanloc) \xe0 partir de transitivebullsh.it",description:"Guidelines Pierre Fabre de Toulouse DataViz",twitter:"Tls_dataviz",github:"ToulouseDataViz",linkedin:null,discord:"https://discord.gg/RbTR4jKRp9",youtube:"channel/UCo64gnxLZs1xIN-Y0Bv_Hpg/featured",meetup:"https://www.meetup.com/fr-FR/Meetup-Visualisation-des-donnees-Toulouse/",mail:"mailto://contact@toulouse-dataviz.fr",defaultPageIcon:null,defaultPageCover:null,defaultPageCoverPosition:.5,isPreviewImageSupportEnabled:!1,isRedisEnabled:!1,pageUrlOverrides:null,navigationStyle:"default"},a=n(3454);if(!i)throw Error("Config error: invalid site.config.ts");try{a.env.NEXT_PUBLIC_SITE_CONFIG&&(r=JSON.parse(a.env.NEXT_PUBLIC_SITE_CONFIG))}catch(e){throw console.error('Invalid config "NEXT_PUBLIC_SITE_CONFIG" failed to parse'),e}let u={...i,...r};function l(e,t){let n=u[e];if(void 0!==n)return n;if(void 0!==t)return t;throw Error('Config error: missing required site config value "'.concat(e,'"'))}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.env,r=n[e];if(void 0!==r)return r;if(void 0!==t)return t;throw Error('Config error: missing required env variable "'.concat(e,'"'))}var s=n(3454);let f=(0,o.q5)(l("rootNotionPageId"),{uuid:!1});if(!f)throw Error('Config error invalid "rootNotionPageId"');(0,o.q5)(l("rootNotionSpaceId",null),{uuid:!0});let p=B(l("pageUrlOverrides",{})||{},{label:"pageUrlOverrides"});B(l("pageUrlAdditions",{})||{},{label:"pageUrlAdditions"});let h=Object.keys(p).reduce((e,t)=>{let n=p[t];return{...e,[n]:t}},{}),d=!1;l("name");let v=l("author"),m=l("copyright"),w=l("domain"),g=l("description","Notion Blog");l("language","en");let y=l("twitter",null),b=l("github",null),_=l("youtube",null),T=l("linkedin",null),k=l("discord",null),P=l("meetup",null),x=l("mail",null),E=l("newsletter",null),I=l("zhihu",null),C=l("defaultPageIcon",null),S=l("defaultPageCover",null),O=l("defaultPageCoverPosition",.5);l("isPreviewImageSupportEnabled",!1);let D=l("includeNotionIdInUrls",!!d),N=l("navigationStyle","default"),$=l("navigationLinks",null),A=l("isSearchEnabled",!0);l("isRedisEnabled",!1)||c("REDIS_ENABLED",null);let j=c("REDIS_HOST",null),L=c("REDIS_PASSWORD",null),W=c("REDIS_USER","default");c("REDIS_URL","redis://".concat(W,":").concat(L,"@").concat(j)),c("REDIS_NAMESPACE","preview-images");let R=!1,M=c("PORT","3000"),U=d?"http://localhost:".concat(M):"https://".concat(w);d||s.env.VERCEL_URL;let F="/api",z={searchNotion:"".concat(F,"/search-notion"),getNotionPageInfo:"".concat(F,"/notion-page-info"),getSocialImage:"".concat(F,"/social-image")},H=d?null:s.env.NEXT_PUBLIC_FATHOM_ID,Q=H?{excludedDomains:["localhost","localhost:3000"]}:void 0;function B(e,t){let{label:n}=t;return Object.keys(e).reduce((t,r)=>{let i=e[r],a=(0,o.q5)(i,{uuid:!1});if(!a)throw Error("Invalid ".concat(n,' page id "').concat(i,'"'));if(!r)throw Error("Missing ".concat(n,' value for page "').concat(i,'"'));if(!r.startsWith("/"))throw Error("Invalid ".concat(n,' value for page "').concat(i,'": value "').concat(r,'" should be a relative URI that starts with "/"'));let u=r.slice(1);return{...t,[u]:a}},{})}},2089:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),o=n(7294),i=n(1163),a=function(e){window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.push(e)},u=function(){window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.forEach(function(e){switch(e.type){case"trackPageview":s(e.opts);return;case"trackGoal":f(e.code,e.cents);return;case"enableTrackingForMe":h();return;case"blockTrackingForMe":p();return;case"setSite":d(e.id);return}}),window.__fathomClientQueue=[]},l=function(e){var t=/(https?)(?=:|\/|$)/;e.forEach(function(e){null!==t.exec(e)&&console.warn("The include domain ".concat(e," might fail to work as intended as it begins with a transfer protocol (http://, https://). Consider removing the protocol portion of the string."))})},c=function(e,t){var n=document.createElement("script"),r=document.getElementsByTagName("script")[0]||document.querySelector("body");n.id="fathom-script",n.async=!0,n.setAttribute("data-site",e),n.src=t&&t.url?t.url:"https://cdn.usefathom.com/script.js",t&&(void 0!==t.auto&&n.setAttribute("data-auto","".concat(t.auto)),void 0!==t.honorDNT&&n.setAttribute("data-honor-dnt","".concat(t.honorDNT)),void 0!==t.canonical&&n.setAttribute("data-canonical","".concat(t.canonical)),t.includedDomains&&(l(t.includedDomains),n.setAttribute("data-included-domains",t.includedDomains.join(","))),t.excludedDomains&&(l(t.excludedDomains),n.setAttribute("data-excluded-domains",t.excludedDomains.join(","))),t.spa&&n.setAttribute("data-spa",t.spa)),n.onload=u,r.parentNode.insertBefore(n,r)},s=function(e){window.fathom?e?window.fathom.trackPageview(e):window.fathom.trackPageview():a({type:"trackPageview",opts:e})},f=function(e,t){window.fathom?window.fathom.trackGoal(e,t):a({type:"trackGoal",code:e,cents:t})},p=function(){window.fathom?window.fathom.blockTrackingForMe():a({type:"blockTrackingForMe"})},h=function(){window.fathom?window.fathom.enableTrackingForMe():a({type:"enableTrackingForMe"})},d=function(e){window.fathom?window.fathom.setSite(e):a({type:"setSite",id:e})};n(8594),n(4795),n(4298),n(5488),n(8872),n(4254);var v=n(4662);function m(e){let{Component:t,pageProps:n}=e,a=(0,i.useRouter)();return o.useEffect(()=>{function e(){v.gr&&s()}return v.gr&&c(v.gr,v.GH),a.events.on("routeChangeComplete",e),()=>{a.events.off("routeChangeComplete",e)}},[a.events]),(0,r.jsx)(t,{...n})}v.sk||console.log("\n\n████████╗██████╗  █████╗ ███╗   ██╗███████╗██╗████████╗██╗██╗   ██╗███████╗    ██████╗ ███████╗\n╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██║╚══██╔══╝██║██║   ██║██╔════╝    ██╔══██╗██╔════╝\n   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██║   ██║   ██║██║   ██║█████╗      ██████╔╝███████╗\n   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║   ██║   ██║╚██╗ ██╔╝██╔══╝      ██╔══██╗╚════██║\n   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║   ██║   ██║ ╚████╔╝ ███████╗    ██████╔╝███████║\n   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝   ╚═╝   ╚═╝  ╚═══╝  ╚══════╝    ╚═════╝ ╚══════╝\n                                                                                               \n   This site is built using Notion, Next.js, and https://github.com/NotionX/react-notion-x.\n")},8594:function(){},4795:function(){},4298:function(){},5488:function(){},8872:function(){},4254:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l=[],c=!1,s=-1;function f(){c&&r&&(c=!1,r.length?l=r.concat(l):s=-1,l.length&&p())}function p(){if(!c){var e=u(f);c=!0;for(var t=l.length;t;){for(r=l,l=[];++s<t;)r&&r[s].run();s=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||c||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},1163:function(e,t,n){e.exports=n(6885)},3931:function(e){"use strict";e.exports=()=>{let e={};return e.promise=new Promise((t,n)=>{e.resolve=t,e.reject=n}),e}},6261:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let r=(e,t,n,r)=>{if("length"===n||"prototype"===n||"arguments"===n||"caller"===n)return;let i=Object.getOwnPropertyDescriptor(e,n),a=Object.getOwnPropertyDescriptor(t,n);(o(i,a)||!r)&&Object.defineProperty(e,n,a)},o=function(e,t){return void 0===e||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},i=(e,t)=>{let n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},a=(e,t)=>`/* Wrapped ${e}*/
${t}`,u=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),l=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),c=(e,t,n)=>{let r=""===n?"":`with ${n.trim()}() `,o=a.bind(null,r,t.toString());Object.defineProperty(o,"name",l),Object.defineProperty(e,"toString",{...u,value:o})};function s(e,t,{ignoreNonConfigurable:n=!1}={}){let{name:o}=e;for(let o of Reflect.ownKeys(t))r(e,t,o,n);return i(e,t),c(e,t,o),e}},6861:function(e,t,n){"use strict";n.d(t,{p6:function(){return Z},c8:function(){return Y},c5:function(){return $},Ck:function(){return j},cj:function(){return R},Ho:function(){return A},Sp:function(){return V},Co:function(){return W},Kl:function(){return q},rp:function(){return L},Ru:function(){return U},FB:function(){return N},D5:function(){return X},q5:function(){return Q},Gw:function(){return B}}),n(6729),new WeakMap;var r,o,i,a,u,l,c,s,f,p,h,d,v,m,w,g,y,b,_,T,k,P,x=function(e,t,n,r,o){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n},E=function(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};new class extends Error{constructor(e){super(e),this.name="TimeoutError"}},o=new WeakMap,i=new WeakMap,a=new WeakMap,u=new WeakMap,l=new WeakMap,c=new WeakMap,s=new WeakMap,f=new WeakMap,p=new WeakMap,new WeakMap,h=new WeakMap,d=new WeakMap,v=new WeakMap,new WeakMap,r=new WeakSet,m=function(){return E(this,i,"f")||E(this,a,"f")<E(this,u,"f")},w=function(){return E(this,h,"f")<E(this,d,"f")},g=function(){this.emit("empty"),0===E(this,h,"f")&&this.emit("idle")},y=function(){E(this,r,"m",k).call(this),E(this,r,"m",T).call(this),x(this,f,void 0,"f")},b=function(){let e=Date.now();if(void 0===E(this,s,"f")){let t=E(this,c,"f")-e;if(!(t<0))return void 0===E(this,f,"f")&&x(this,f,setTimeout(()=>{E(this,r,"m",y).call(this)},t),"f"),!0;x(this,a,E(this,o,"f")?E(this,h,"f"):0,"f")}return!1},_=function(){if(0===E(this,p,"f").size)return E(this,s,"f")&&clearInterval(E(this,s,"f")),x(this,s,void 0,"f"),E(this,r,"m",g).call(this),!1;if(!E(this,v,"f")){let e=!E(this,r,"a",b);if(E(this,r,"a",m)&&E(this,r,"a",w)){let t=E(this,p,"f").dequeue();return!!t&&(this.emit("active"),t(),e&&E(this,r,"m",T).call(this),!0)}}return!1},T=function(){E(this,i,"f")||void 0!==E(this,s,"f")||(x(this,s,setInterval(()=>{E(this,r,"m",k).call(this)},E(this,l,"f")),"f"),x(this,c,Date.now()+E(this,l,"f"),"f"))},k=function(){0===E(this,a,"f")&&0===E(this,h,"f")&&E(this,s,"f")&&(clearInterval(E(this,s,"f")),x(this,s,void 0,"f")),x(this,a,E(this,o,"f")?E(this,h,"f"):0,"f"),E(this,r,"m",P).call(this)},P=function(){for(;E(this,r,"m",_).call(this););};var I=n(6261),C=n(2734);let S=new WeakMap,O=(e,t)=>t.some(t=>t instanceof RegExp?t.test(e):t===e),D=(e,{stripHash:t})=>{let n=/^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(e);if(!n)throw Error(`Invalid URL: ${e}`);let{type:r,data:o,hash:i}=n.groups,a=r.split(";");i=t?"":i;let u=!1;"base64"===a[a.length-1]&&(a.pop(),u=!0);let l=(a.shift()||"").toLowerCase(),c=a.map(e=>{let[t,n=""]=e.split("=").map(e=>e.trim());return"charset"===t&&"us-ascii"===(n=n.toLowerCase())?"":`${t}${n?`=${n}`:""}`}).filter(Boolean),s=[...c];return u&&s.push("base64"),(s.length>0||l&&"text/plain"!==l)&&s.unshift(l),`data:${s.join(";")},${u?o.trim():o}${i?`#${i}`:""}`};Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var N=e=>{var t;return e?Array.isArray(e)?null!=(t=null==e?void 0:e.reduce((e,t)=>e+("⁍"!==t[0]&&"‣"!==t[0]?t[0]:""),""))?t:"":e:""};function $(e,t){var n,r,o,i,a,u,l;let c=e.collection_id||(null==(r=null==(n=e.format)?void 0:n.collection_pointer)?void 0:r.id);if(c)return c;let s=null==(o=null==e?void 0:e.view_ids)?void 0:o[0];if(s){let e=null==(a=null==(i=t.collection_view)?void 0:i[s])?void 0:a.value;if(e)return null==(l=null==(u=e.format)?void 0:u.collection_pointer)?void 0:l.id}return null}function A(e,t){var n,r;if(null!=(n=e.properties)&&n.title)return N(e.properties.title);if("collection_view_page"===e.type||"collection_view"===e.type){let n=$(e,t);if(n){let e=null==(r=t.collection[n])?void 0:r.value;if(e)return N(e.name)}}return""}function j(e,t){var n,r,o;if(null!=(n=e.format)&&n.page_icon)return null==(r=e.format)?void 0:r.page_icon;if("collection_view_page"===e.type||"collection_view"===e.type){let n=$(e,t);if(n){let e=null==(o=t.collection[n])?void 0:o.value;if(e)return e.icon}}return null}function L(e,t,n){var r;try{if(!t.properties||!Object.keys(n.collection))return null;let o=null==(r=n.collection[t.parent_id])?void 0:r.value;if(o){let n=e.toLowerCase(),r=Object.keys(o.schema).find(e=>{var t,r;return(null==(r=null==(t=o.schema[e])?void 0:t.name)?void 0:r.toLowerCase())===n});if(!r)return null;let{type:i}=o.schema[r],a=N(t.properties[r]);switch(i){case"created_time":return t.created_time;case"multi_select":return a.split(",");case"date":{let e=t.properties[r][0][1][0][1];if("datetime"==e.type)return new Date(`${e.start_date} ${e.start_time}`).getTime();if("date"==e.type)return new Date(e.start_date).getTime();if("datetimerange"==e.type){let{start_date:t,start_time:n,end_date:r,end_time:o}=e,i=new Date(`${t} ${n}`).getTime(),a=new Date(`${r} ${o}`).getTime();return[i,a]}{let t=new Date(e.start_date).getTime(),n=new Date(e.end_date).getTime();return[t,n]}}case"checkbox":return"Yes"==a;case"last_edited_time":return t.last_edited_time;default:return a}}}catch(e){}return null}var W=e=>{if(e&&Array.isArray(e)){if("d"===e[0])return e[1];for(let t of e){let e=W(t);if(e)return e}}return null},R=(e,t,{inclusive:n=!1}={})=>{var r,o;let i=e;for(;null!=i;){if(n&&(null==i?void 0:i.type)==="page")return i;let e=i.parent_id,a=i.parent_table;if(!e)break;if("collection"===a)i=null==(r=t.collection[e])?void 0:r.value;else if((null==(i=null==(o=t.block[e])?void 0:o.value)?void 0:i.type)==="page")return i}return null},M={header:0,sub_header:1,sub_sub_header:2},U=(e,t)=>{var n;let r=(null!=(n=e.content)?n:[]).map(e=>{var n,r;let o=null==(n=t.block[e])?void 0:n.value;if(o){let{type:t}=o;if("header"===t||"sub_header"===t||"sub_sub_header"===t)return{id:e,type:t,text:N(null==(r=o.properties)?void 0:r.title),indentLevel:M[t]}}return null}).filter(Boolean),o=[{actual:-1,effective:-1}];for(let e of r){let{indentLevel:t}=e;for(;;){let{actual:n,effective:r}=o[o.length-1];if(t>n)e.indentLevel=r+1,o.push({actual:t,effective:e.indentLevel});else if(t===n){e.indentLevel=r;break}else o.pop()}}return r},F=(e="")=>`${e.substr(0,8)}-${e.substr(8,4)}-${e.substr(12,4)}-${e.substr(16,4)}-${e.substr(20)}`,z=/\b([a-f0-9]{32})\b/,H=/\b([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})\b/,Q=(e="",{uuid:t=!0}={})=>{if(!e)return null;let n=(e=e.split("?")[0]).match(z);if(n)return t?F(n[1]):n[1];let r=e.match(H);return r?t?r[1]:r[1].replace(/-/g,""):null},B=e=>e.replace(/-/g,""),G=e=>(e||"").replace(/ /g,"-").replace(/[^a-zA-Z0-9-\u4e00-\u9fa5]/g,"").replace(/--/g,"-").replace(/-$/,"").replace(/^-/,"").trim().toLowerCase(),V=(e,t,{uuid:n=!0}={})=>{var r;if(!e||!t)return null;let o=B(e),i=null==(r=t.block[e])?void 0:r.value;if(i){let e=L("slug",i,t)||L("Slug",i,t)||G(A(i,t));if(e)return n?`${e}-${o}`:e}return o},q=(e,t)=>{var n;let r=e.block,o=[],i=t;for(;;){let a=null==(n=r[i])?void 0:n.value;if(!a)break;let u=A(a,e),l=j(a,e);if(!(u||l))break;o.push({block:a,active:i===t,pageId:i,title:u,icon:l});let c=R(a,e),s=null==c?void 0:c.id;if(!s)break;i=s}return o.reverse(),o},X=function(e,{cacheKey:t,cache:n=new Map,maxAge:r}={}){"number"==typeof r&&C(n);let o=function(...o){let i=t?t(o):o[0],a=n.get(i);if(a)return a.data;let u=e.apply(this,o);return n.set(i,{data:u,maxAge:r?Date.now()+r:Number.POSITIVE_INFINITY}),u};return(0,I.Z)(o,e,{ignoreNonConfigurable:!0}),S.set(o,n),o}(e=>{if(!e)return"";try{if(e.startsWith("https://www.notion.so/image/")){let t=new URL(e),n=decodeURIComponent(t.pathname.substr(7)),r=X(n);t.pathname=`/image/${encodeURIComponent(r)}`,e=t.toString()}return function(e,t){if(t={defaultProtocol:"http:",normalizeProtocol:!0,forceHttp:!1,forceHttps:!1,stripAuthentication:!0,stripHash:!1,stripTextFragment:!0,stripWWW:!0,removeQueryParameters:[/^utm_\w+/i],removeTrailingSlash:!0,removeSingleSlash:!0,removeDirectoryIndex:!1,removeExplicitPort:!1,sortQueryParameters:!0,...t},e=e.trim(),/^data:/i.test(e))return D(e,t);if(/^view-source:/i.test(e))throw Error("`view-source:` is not supported as it is a non-standard protocol");let n=e.startsWith("//"),r=!n&&/^\.*\//.test(e);r||(e=e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//,t.defaultProtocol));let o=new URL(e);if(t.forceHttp&&t.forceHttps)throw Error("The `forceHttp` and `forceHttps` options cannot be used together");if(t.forceHttp&&"https:"===o.protocol&&(o.protocol="http:"),t.forceHttps&&"http:"===o.protocol&&(o.protocol="https:"),t.stripAuthentication&&(o.username="",o.password=""),t.stripHash?o.hash="":t.stripTextFragment&&(o.hash=o.hash.replace(/#?:~:text.*?$/i,"")),o.pathname){let e=/\b[a-z][a-z\d+\-.]{1,50}:\/\//g,t=0,n="";for(;;){let r=e.exec(o.pathname);if(!r)break;let i=r[0],a=r.index,u=o.pathname.slice(t,a);n+=u.replace(/\/{2,}/g,"/")+i,t=a+i.length}let r=o.pathname.slice(t,o.pathname.length);n+=r.replace(/\/{2,}/g,"/"),o.pathname=n}if(o.pathname)try{o.pathname=decodeURI(o.pathname)}catch{}if(!0===t.removeDirectoryIndex&&(t.removeDirectoryIndex=[/^index\.[a-z]+$/]),Array.isArray(t.removeDirectoryIndex)&&t.removeDirectoryIndex.length>0){let e=o.pathname.split("/"),n=e[e.length-1];O(n,t.removeDirectoryIndex)&&(e=e.slice(0,-1),o.pathname=e.slice(1).join("/")+"/")}if(o.hostname&&(o.hostname=o.hostname.replace(/\.$/,""),t.stripWWW&&/^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(o.hostname)&&(o.hostname=o.hostname.replace(/^www\./,""))),Array.isArray(t.removeQueryParameters))for(let e of[...o.searchParams.keys()])O(e,t.removeQueryParameters)&&o.searchParams.delete(e);if(Array.isArray(t.keepQueryParameters)||!0!==t.removeQueryParameters||(o.search=""),Array.isArray(t.keepQueryParameters)&&t.keepQueryParameters.length>0)for(let e of[...o.searchParams.keys()])O(e,t.keepQueryParameters)||o.searchParams.delete(e);if(t.sortQueryParameters){o.searchParams.sort();try{o.search=decodeURIComponent(o.search)}catch{}}t.removeTrailingSlash&&(o.pathname=o.pathname.replace(/\/$/,"")),t.removeExplicitPort&&o.port&&(o.port="");let i=e;return e=o.toString(),t.removeSingleSlash||"/"!==o.pathname||i.endsWith("/")||""!==o.hash||(e=e.replace(/\/$/,"")),(t.removeTrailingSlash||"/"===o.pathname)&&""===o.hash&&t.removeSingleSlash&&(e=e.replace(/\/$/,"")),n&&!t.normalizeProtocol&&(e=e.replace(/^http:\/\//,"//")),t.stripProtocol&&(e=e.replace(/^(?:https?:)?\/\//,"")),e}(e,{stripProtocol:!0,stripWWW:!0,stripHash:!0,stripTextFragment:!0,removeQueryParameters:!0})}catch(e){return""}}),Z=(e,{month:t="short"}={})=>{let n=new Date(e);return`${n.toLocaleString("en-US",{month:t})} ${n.getUTCDate()}, ${n.getUTCFullYear()}`},Y=e=>Z(`${e.start_time||""} ${e.start_date} ${e.time_zone||""}`)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);