(function(e){function t(t){for(var n,o,s=t[0],i=t[1],u=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"3ec5":function(e,t,r){"use strict";var n=r("c48a"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n,a,c,o,s,i=r("2b0e"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"vue-app"}},[r("TestPictureInput")],1)},l=[],p=r("d225"),d=r("308d"),f=r("6bb5"),b=r("4e2b"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("h1",{staticClass:"h2 text-center"},[e._v(e._s(e.heading))]),r("picture-input",{attrs:{width:"200",height:"200",accept:"image/jpeg,image/png","button-class":"btn btn-success"},on:{change:e.draggedImaged}}),r("b-progress",{staticClass:"rounded-0",attrs:{max:100}},[r("b-progress-bar",{attrs:{value:e.progress,label:e.progress.toFixed(0)+"%",max:100,"show-progress":""}})],1)],1),100===e.progress?r("div",{staticClass:"col-lg-12"},[r("h3",{staticClass:"text-center"},[e._v("Output goes here:")]),r("div",[r("h4",[e._v("Left and Right (or Start and End)")]),r("b-card",{staticClass:"mb-3",attrs:{"img-src":e.image,"img-alt":"Card image","img-left":""}},[r("b-card-text",{domProps:{innerHTML:e._s(e.text)}})],1)],1)]):e._e()])])},h=[],v=(r("a481"),r("96cf"),r("3b8d")),O=r("b0b4"),j=r("013f"),m=r("bd86"),x=r("c9bf"),y=r("e597"),w=r("60a3"),_=(n=Object(w["a"])({components:{PictureInput:y["a"]}}),n((c=function(e){function t(){var e,r;Object(p["a"])(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return r=Object(d["a"])(this,(e=Object(f["a"])(t)).call.apply(e,[this].concat(a))),Object(m["a"])(Object(j["a"])(r),"heading","OCRjs"),Object(m["a"])(Object(j["a"])(r),"text",""),Object(m["a"])(Object(j["a"])(r),"progress",0),Object(m["a"])(Object(j["a"])(r),"image",null),r}return Object(b["a"])(t,e),Object(O["a"])(t,[{key:"draggedImaged",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=19;break}return console.log("Picture loaded..."),r=Object(x["createWorker"])({logger:function(e){e.jobId&&(c.progress=0==e.progress?0:100*e.progress),console.log(e)}}),e.next=5,r.load();case 5:return e.next=7,r.loadLanguage("deu");case 7:return e.next=9,r.initialize("deu");case 9:return e.next=11,r.recognize(t);case 11:return n=e.sent,a=n.data.text,this.text=a.replace(/\n/g,"<br />"),e.next=16,r.terminate();case 16:this.image=t,e.next=20;break;case 19:console.log("FileReader API not supported: use <form>, Luke!");case 20:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),t}(w["b"]),a=c))||a),P=_,C=(r("3ec5"),r("2877")),k=Object(C["a"])(P,g,h,!1,null,"9c8b04d4",null),I=k.exports,S=(o=Object(w["a"])({components:{TestPictureInput:I}}),o(s=function(e){function t(){return Object(p["a"])(this,t),Object(d["a"])(this,Object(f["a"])(t).apply(this,arguments))}return Object(b["a"])(t,e),t}(w["b"]))||s),T=S,M=(r("034f"),Object(C["a"])(T,u,l,!1,null,null,null)),R=M.exports,L=(r("f9e3"),r("2dd8"),r("5f5b"));i["default"].use(L["a"]),i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(R)}}).$mount("#vue-app")},"64a9":function(e,t,r){},c48a:function(e,t,r){}});
//# sourceMappingURL=app.f404a6ec.js.map