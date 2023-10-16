"use strict";(self["webpackChunkGC_App2"]=self["webpackChunkGC_App2"]||[]).push([[885],{3658:(e,t,n)=>{var r=n(9781),o=n(3157),l=TypeError,i=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(o(e)&&!i(e,"length").writable)throw l("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7207:e=>{var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3157:(e,t,n)=>{var r=n(4326);e.exports=Array.isArray||function(e){return"Array"===r(e)}},7658:(e,t,n)=>{var r=n(2109),o=n(7908),l=n(6244),i=n(3658),a=n(7207),u=n(7293),s=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=s||!c();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=o(this),n=l(t),r=arguments.length;a(n+r);for(var u=0;u<r;u++)t[n]=arguments[u],n++;return i(t,n),n}})},1090:(e,t,n)=>{n.d(t,{$_:()=>r,d8:()=>o,ej:()=>l});n(4916);const r="http://ec2-18-144-101-122.us-west-1.compute.amazonaws.com";function o(e,t){document.cookie=e+"="+(t||"")+"; path=/"}function l(e){const t="; "+document.cookie,n=t.split("; "+e+"=");if(2===n.length){const e=n.pop();if(e)return e.split(";").shift()||null}return null}},3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},1885:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});n(7658),n(3948);var r=n(6252),o=n(2262),l=n(3577),i=n(8171),a=n(1090);const u=e=>((0,r.dD)("data-v-f51c877e"),e=e(),(0,r.Cn)(),e),s=u((()=>(0,r._)("strong",{style:{"font-size":"30px","line-height":"26px"}},"Announcements",-1))),c={id:"cards"},d=["src"],w={id:"learnButton"},f={data(){return{windowWidth:window.innerWidth,windowHeight:window.innerWidth/1.77777}},mounted(){window.addEventListener("resize",this.handleResize)},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerWidth/1.77777}}},h=Object.assign(f,{__name:"AnnouncementsPage",setup(e){const t=(0,o.qj)([]);let n=0;const u=async()=>{const e=a.$_+"/announcements?max=10&offset="+n;console.log(e);try{const t=(await(await fetch(e,{method:"GET"})).json()).data;return t}catch(t){console.log(t)}return[]},f=e=>{n+=10,u().then((n=>{0!=n.length&&(console.log(n),n.forEach((e=>{t.push(e)})),setTimeout((()=>e.target.complete()),500))}))};u().then((e=>{t.splice(0,t.length,...e)}));const h=e=>{const t=1e3*e,n=new Date(t),r=String(n.getMonth()+1).padStart(2,"0"),o=String(n.getDate()).padStart(2,"0"),l=n.getFullYear();return`${r}/${o}/${l}`};return(e,n)=>((0,r.wg)(),(0,r.j4)((0,o.SU)(i._i),null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(i.Gu),{translucent:!0},{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(i.sr),null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(i.Sm),{slot:"start"},{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(i.fG),{color:"primary"})])),_:1}),(0,r.Wm)((0,o.SU)(i.wd),null,{default:(0,r.w5)((()=>[(0,r.Uk)("Announcements")])),_:1})])),_:1})])),_:1}),(0,r.Wm)((0,o.SU)(i.W2),{fullscreen:!0},{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(i.Gu),{collapse:"condense"},{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(i.sr),null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(i.wd),{size:"large"},{default:(0,r.w5)((()=>[(0,r.Uk)("Announcements")])),_:1})])),_:1})])),_:1}),(0,r.Wm)((0,o.SU)(i.PM),null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(i.FN),null,{default:(0,r.w5)((()=>[s])),_:1})])),_:1}),(0,r._)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t,((e,t)=>((0,r.wg)(),(0,r.j4)((0,o.SU)(i.PM),{key:t},{default:(0,r.w5)((()=>[(0,r._)("img",{style:{height:"200px"},alt:"announcement image",src:e.imglink},null,8,d),(0,r.Wm)((0,o.SU)(i.Zi),null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(i.Dq),null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.title),1)])),_:2},1024),(0,r.Wm)((0,o.SU)(i.tO),null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(h(e.timestamp)),1)])),_:2},1024)])),_:2},1024),(0,r.Wm)((0,o.SU)(i.FN),null,{default:(0,r.w5)((()=>[(0,r._)("p",null,(0,l.zw)(e.descr),1)])),_:2},1024),(0,r._)("div",w,[(0,r.Wm)((0,o.SU)(i.YG),{id:"learn",href:"/article?index="+t},{default:(0,r.w5)((()=>[(0,r.Uk)("Learn More")])),_:2},1032,["href"])])])),_:2},1024)))),128)),(0,r.Wm)((0,o.SU)(i.ju),{onIonInfinite:f},{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(i.MB))])),_:1})])])),_:1})])),_:1}))}});var m=n(3744);const p=(0,m.Z)(h,[["__scopeId","data-v-f51c877e"]]),g=p}}]);
//# sourceMappingURL=885.1620b03f.js.map