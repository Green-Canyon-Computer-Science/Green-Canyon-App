"use strict";(self["webpackChunkGC_App2"]=self["webpackChunkGC_App2"]||[]).push([[583],{7824:(l,e,t)=>{t.r(e),t.d(e,{default:()=>p});t(4916),t(5306),t(3948);var o=t(6252),n=t(2262),u=t(3577),a=(t(9808),t(7403));const i={key:0},d=["for"],s={key:1},r={__name:"PollPage",setup(l){const e=(0,n.qj)({}),t=(0,n.qj)({}),r=(0,n.qj)([]),c=async()=>{const l=await(await fetch("http://localhost:3000/polls",{method:"GET"})).json();return console.log(l),l},p=function(l){if(""==l)return{};const e={};for(let t=0;t<l.length;++t){const o=l[t].split("=",2);1==o.length?e[o[0]]="":e[o[0]]=decodeURIComponent(o[1].replace(/\+/g," "))}return e}(window.location.search.substr(1).split("&")),w=p["index"];return c().then((l=>{r.splice(0,r.length,...l),e.title=r[w].title,t.polldata=JSON.parse(r[w].polldata).poll,console.log(e)})),(l,r)=>{const c=(0,o.up)("ion-card-title"),p=(0,o.up)("ion-card-header"),w=(0,o.up)("ion-checkbox"),f=(0,o.up)("ion-radio"),m=(0,o.up)("ion-label"),_=(0,o.up)("ion-item"),W=(0,o.up)("ion-radio-group"),g=(0,o.up)("ion-card-content"),k=(0,o.up)("ion-card"),h=(0,o.up)("ion-button");return(0,o.wg)(),(0,o.j4)((0,n.SU)(a._i),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(a.Gu),{translucent:!0},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(a.sr),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(a.Sm),{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(a.fG),{color:"primary"})])),_:1}),(0,o.Wm)((0,n.SU)(a.wd),null,{default:(0,o.w5)((()=>[(0,o.Uk)("Polls")])),_:1})])),_:1})])),_:1}),(0,o.Wm)((0,n.SU)(a.W2),{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(a.Gu),{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(a.sr),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(a.wd),{size:"large"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.polldata,(l=>((0,o.wg)(),(0,o.iD)("div",{key:l},[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(l.title),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>["checkbox"==l.type?((0,o.wg)(),(0,o.iD)("div",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.choices,(l=>((0,o.wg)(),(0,o.iD)("div",{key:l},[(0,o.Wm)(w,{id:l},null,8,["id"]),(0,o._)("label",{for:l,style:{position:"relative",bottom:"2px"}},(0,u.zw)("  "+l),9,d)])))),128))])):(0,o.kq)("",!0),"radio"==l.type?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(W,{value:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.choices,(l=>((0,o.wg)(),(0,o.iD)("div",{key:l},[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{slot:"end",value:l},null,8,["value"]),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(l),1)])),_:2},1024)])),_:2},1024)])))),128))])),_:2},1024)])):(0,o.kq)("",!0)])),_:2},1024)])),_:2},1024)])))),128)),(0,o.Wm)(h,{style:{position:"relative",left:"50%",transform:"translate(-50%)"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Submit Poll")])),_:1})])),_:1})])),_:1})}}},c=r,p=c}}]);
//# sourceMappingURL=583-legacy.f209399c.js.map