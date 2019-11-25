(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12fb":function(e,t,n){"use strict";var r=n("cfe0"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ocrjs"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("h1",{staticClass:"h2 text-center"},[e._v("\n          "+e._s(e.heading)+"\n        ")]),n("List",{attrs:{items:e.scans}})],1),n("Modal",{on:{save:e.onSave}},[e.add?n("PictureHandler"):n("ScanView",{attrs:{content:e.getItem}})],1),n("a",{staticClass:"float",attrs:{id:"item-add",href:"#",title:"Add scanned text"},on:{click:e.openModal}},[n("v-icon",{staticClass:"my-float",attrs:{icon:"plus"}})],1)],1)])])},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("b-row",{staticClass:"text-center"},[n("b-col",[n("b-alert",{attrs:{variant:"warning",dismissible:""},model:{value:e.showDismissibleAlert,callback:function(t){e.showDismissibleAlert=t},expression:"showDismissibleAlert"}},[e._v("\n        First choose an image and then select the area which will be scanned!\n      ")])],1),n("div",{staticClass:"w-100"}),e.imageSrc?e._e():n("b-col",[n("v-icon",{staticStyle:{"font-size":"56px"},attrs:{icon:"image"}}),n("br"),e._v("\n      No image here"),n("br"),n("b-button",{staticClass:"upload-wrapper",attrs:{id:"upld-wrpr",size:"md",variant:"outline-dark"},on:{click:e.uploadImage}},[n("v-icon",{attrs:{icon:"image"}}),e._v("\n        Upload\n      ")],1),n("input",{ref:"input",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.setImage}})],1),e.imageSrc?n("div",{attrs:{id:"preview-overlay"}},[n("b-img",{attrs:{src:e.croppedImage,fluid:""}})],1):e._e(),e.imageSrc?n("section",{staticClass:"cropper-area"},[n("VueCropper",{ref:"cropper",attrs:{src:e.imageSrc,alt:"Source Image",ready:e.cropImage,cropend:e.cropImage}})],1):e._e(),e.imageSrc?n("b-progress",{staticClass:"rounded-0",attrs:{max:100}},[n("b-progress-bar",{attrs:{value:e.progress,label:e.progress.toFixed(0)+"%",max:100,"show-progress":""}})],1):e._e(),100===e.progress?n("div",{staticClass:"col-lg-12"},[n("h3",{staticClass:"text-center"},[e._v("\n        Output goes here:\n      ")]),n("div",e._l(e.doc,(function(t){return n("p",{domProps:{innerHTML:e._s(t)}})})),0)]):e._e()],1)],1)},i=[],c=(n("96cf"),n("3b8d")),l=n("c9bf"),d=n("95c3"),u=n.n(d),p=(n("6107"),{name:"PictureHandler",components:{VueCropper:u.a},data:function(){return{text:"",doc:[],cropperReady:!1,progress:0,imageSrc:null,croppedImage:null,showDismissibleAlert:!1}},computed:{getCroppedImage:function(){return this.croppedImage}},mounted:function(){var e=this;this.$root.$on("scanCrop",(function(){e.scanCroppedImage()})),this.$root.$on("saveRequest",(function(){e.$root.$emit("saveResponse",{croppedImage:e.croppedImage,reference:e.imageSrc,scannedText:e.doc[e.doc.length-1]})}))},methods:{cropImage:function(){this.$refs.cropper&&(this.croppedImage=this.$refs.cropper.getCroppedCanvas().toDataURL())},uploadImage:function(e){e.preventDefault(),this.$refs.input.click()},appendText:function(){this.doc.push(this.text)},cropperIsReady:function(){this.cropperReady=!0,this.cropImage()},scanCroppedImage:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$refs.cropper){e.next=17;break}return t=Object(l["createWorker"])({logger:function(e){e.jobId&&(a.progress=0==e.progress?0:100*e.progress)}}),e.next=4,t.load();case 4:return e.next=6,t.loadLanguage("deu");case 6:return e.next=8,t.initialize("deu");case 8:return e.next=10,t.recognize(this.croppedImage);case 10:return n=e.sent,r=n.data.text,this.doc.push(r),e.next=15,t.terminate();case 15:e.next=18;break;case 17:this.showDismissibleAlert=!0;case 18:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setImage:function(e){var t=this,n=e.target.files[0];if(-1!==n.type.indexOf("image/"))if("function"===typeof FileReader){var r=new FileReader;r.onload=function(e){t.imageSrc=e.target.result},r.readAsDataURL(n)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")}}}),f=p,m=(n("d79e"),n("2877")),v=Object(m["a"])(f,s,i,!1,null,"72030017",null),g=v.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{id:"modal",title:"Add your Image here",size:"xl",scrollable:""},on:{cancel:e.scanCroppedArea,ok:e.saveItem},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var r=t.cancel,a=t.ok;return[n("b-button",{attrs:{id:"scan-area",size:"md",variant:"outline-dark"},on:{click:r}},[n("v-icon",{attrs:{icon:"crop-alt"}}),e._v("\n      Scan\n    ")],1),n("b-button",{attrs:{id:"save-item",size:"md",variant:"outline-dark"},on:{click:a}},[n("v-icon",{attrs:{icon:"save"}}),e._v("\n      Save/Exit\n    ")],1)]}}])},[e._t("default")],2)},b=[],x={name:"Modal",props:{save:{type:Function,default:function(){return 42}}},data:function(){return{infoMessage:"Crop your image in this window",getRecord:this.save}},mounted:function(){var e=this;this.$root.$on("saveResponse",(function(t){e.$emit("save",t)}))},methods:{saveItem:function(e){e.preventDefault(),this.$root.$emit("saveRequest")},scanCroppedArea:function(e){e.preventDefault(),this.$root.$emit("scanCrop")}}},_=x,y=Object(m["a"])(_,h,b,!1,null,"4b7aca42",null),w=y.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{attrs:{id:"preview-overlay"}},[n("b-img",{attrs:{src:e.croppedImage,fluid:""}})],1),n("div",{staticClass:"content"},[n("b-img",{attrs:{src:e.reference,"fluid-grow":""}}),n("div",[e._m(0),n("p",[e._v(e._s(e.scannedText))])])],1)])])},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",[n("u",[e._v("Scanned Text:")])])}],$={name:"ScanView",props:{content:{type:Function,default:function(){return"SchuHschuH"}}},data:function(){return{reference:this.content().reference,croppedImage:this.content().croppedImage,scannedText:this.content().scannedText}}},S=$,O=(n("84b3"),Object(m["a"])(S,C,I,!1,null,"097c3d4d",null)),j=O.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"List"},[e.scanData.length>0?n("div",[n("b-table",{attrs:{striped:"",hover:"",fields:e.fields,items:e.scanData},on:{"row-clicked":e.openEditModal},scopedSlots:e._u([{key:"cell(id)",fn:function(t){return[e._v("\n        "+e._s(t.index+1)+"\n      ")]}},{key:"cell(reference)",fn:function(e){return[n("b-img",{attrs:{src:e.item.reference,alt:"Reference Image",fluid:""}})]}},{key:"cell(croppedImage)",fn:function(e){return[n("img",{attrs:{src:e.item.croppedImage,alt:"Cropped Image"}})]}},{key:"cell(scannedText)",fn:function(t){return[n("p",{domProps:{textContent:e._s(t.item.scannedText)}})]}}],null,!1,1148545201)})],1):n("div",[n("v-icon",{staticClass:"my-float",attrs:{icon:"image"}}),e._v("\n    Empty list...\n  ")],1)])},M=[],R={name:"List",props:{items:{type:Array,default:function(){return[]}}},data:function(){return{fields:["id","reference","croppedImage","scannedText"],scanData:this.items}},methods:{openEditModal:function(e,t){this.$root.$emit("openEditModal",e,t)}}},A=R,P=(n("8c86"),Object(m["a"])(A,k,M,!1,null,"bd9c0a46",null)),D=P.exports,T={name:"OCRjs",components:{PictureHandler:g,Modal:w,ScanView:j,List:D},data:function(){return{heading:"OCRjs",modalObj:null,add:!1,tour:!0,scans:[]}},mounted:function(){var e=this;this.$root.$on("openEditModal",(function(t,n){e.add=!1,e.modalObj=t,e.$bvModal.show("modal")})),this.$root.$on("openAddModal",(function(t,n){e.add=!0,e.$bvModal.show("modal")}))},methods:{openModal:function(e,t){this.$root.$emit("openAddModal",e,t)},getItem:function(){return this.modalObj},onSave:function(e){this.scans.push(e)}}},E=T,L=(n("12fb"),Object(m["a"])(E,a,o,!1,null,null,null)),z=L.exports,F=(n("f9e3"),n("2dd8"),n("5f5b")),H=n("ecee"),V=n("c074"),U=n("ad3d");H["c"].add(V["a"],V["b"],V["c"],V["e"],V["d"]),r["default"].use(F["a"]),r["default"].component("v-icon",U["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(z)}}).$mount("#ocrjs")},"60bd":function(e,t,n){},"84b3":function(e,t,n){"use strict";var r=n("c50f"),a=n.n(r);a.a},"8c86":function(e,t,n){"use strict";var r=n("60bd"),a=n.n(r);a.a},c50f:function(e,t,n){},cfe0:function(e,t,n){},d79e:function(e,t,n){"use strict";var r=n("f01a"),a=n.n(r);a.a},f01a:function(e,t,n){}});
//# sourceMappingURL=app-legacy.74cf23eb.js.map