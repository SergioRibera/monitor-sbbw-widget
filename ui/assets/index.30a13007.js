(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function p(o,t,e,s){var i,n=arguments.length,r=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,s);else for(var h=o.length-1;h>=0;h--)(i=o[h])&&(r=(n<3?i(r):n>3?i(t,e,r):i(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const Q=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$t=Symbol();class xt{constructor(t,e){if(e!==$t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return Q&&this.t===void 0&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const ot=new Map,kt=o=>{let t=ot.get(o);return t===void 0&&ot.set(o,t=new xt(o,$t)),t},Rt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r instanceof xt)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return kt(e)},nt=Q?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(s=>kt(typeof s=="string"?s:s+""))(e)})(o):o;var rt,j,W,lt;const X={toAttribute(o,t){switch(t){case Boolean:o=o?"":null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Et=(o,t)=>t!==o&&(t==t||o==o),V={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Et};class E extends HTMLElement{constructor(){super(),this.\u03A0i=new Map,this.\u03A0o=void 0,this.\u03A0l=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.\u03A0h=null,this.u()}static addInitializer(t){var e;(e=this.v)!==null&&e!==void 0||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this.\u03A0p(s,e);i!==void 0&&(this.\u03A0m.set(i,s),t.push(i))}),t}static createProperty(t,e=V){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||V}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.\u03A0m=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(nt(i))}else t!==void 0&&e.push(nt(t));return e}static \u03A0p(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this.\u03A0g=new Promise(e=>this.enableUpdating=e),this.L=new Map,this.\u03A0_(),this.requestUpdate(),(t=this.constructor.v)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this.\u03A0U)!==null&&e!==void 0?e:this.\u03A0U=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this.\u03A0U)===null||e===void 0||e.splice(this.\u03A0U.indexOf(t)>>>0,1)}\u03A0_(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.\u03A0i.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{Q?s.adoptedStyleSheets=i.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):i.forEach(n=>{const r=document.createElement("style");r.textContent=n.cssText,s.appendChild(r)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this.\u03A0U)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)}),this.\u03A0l&&(this.\u03A0l(),this.\u03A0o=this.\u03A0l=void 0)}enableUpdating(t){}disconnectedCallback(){var t;(t=this.\u03A0U)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)}),this.\u03A0o=new Promise(e=>this.\u03A0l=e)}attributeChangedCallback(t,e,s){this.K(t,s)}\u03A0j(t,e,s=V){var i,n;const r=this.constructor.\u03A0p(t,s);if(r!==void 0&&s.reflect===!0){const h=((n=(i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&n!==void 0?n:X.toAttribute)(e,s.type);this.\u03A0h=t,h==null?this.removeAttribute(r):this.setAttribute(r,h),this.\u03A0h=null}}K(t,e){var s,i,n;const r=this.constructor,h=r.\u03A0m.get(t);if(h!==void 0&&this.\u03A0h!==h){const l=r.getPropertyOptions(h),a=l.converter,f=(n=(i=(s=a)===null||s===void 0?void 0:s.fromAttribute)!==null&&i!==void 0?i:typeof a=="function"?a:null)!==null&&n!==void 0?n:X.fromAttribute;this.\u03A0h=h,this[h]=f(e,l.type),this.\u03A0h=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||Et)(this[t],e)?(this.L.has(t)||this.L.set(t,e),s.reflect===!0&&this.\u03A0h!==t&&(this.\u03A0k===void 0&&(this.\u03A0k=new Map),this.\u03A0k.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this.\u03A0g=this.\u03A0q())}async \u03A0q(){this.isUpdatePending=!0;try{for(await this.\u03A0g;this.\u03A0o;)await this.\u03A0o}catch(e){Promise.reject(e)}const t=this.performUpdate();return t!=null&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.\u03A0i&&(this.\u03A0i.forEach((i,n)=>this[n]=i),this.\u03A0i=void 0);let e=!1;const s=this.L;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this.\u03A0U)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this.\u03A0$()}catch(i){throw e=!1,this.\u03A0$(),i}e&&this.E(s)}willUpdate(t){}E(t){var e;(e=this.\u03A0U)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}\u03A0$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.\u03A0g}shouldUpdate(t){return!0}update(t){this.\u03A0k!==void 0&&(this.\u03A0k.forEach((e,s)=>this.\u03A0j(s,this[s],e)),this.\u03A0k=void 0),this.\u03A0$()}updated(t){}firstUpdated(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at,Z,F,ht;E.finalized=!0,E.elementProperties=new Map,E.elementStyles=[],E.shadowRootOptions={mode:"open"},(j=(rt=globalThis).reactiveElementPlatformSupport)===null||j===void 0||j.call(rt,{ReactiveElement:E}),((W=(lt=globalThis).reactiveElementVersions)!==null&&W!==void 0?W:lt.reactiveElementVersions=[]).push("1.0.0-rc.2");const B=globalThis.trustedTypes,dt=B?B.createPolicy("lit-html",{createHTML:o=>o}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,Lt="?"+S,Nt=`<${Lt}>`,C=document,O=(o="")=>C.createComment(o),z=o=>o===null||typeof o!="object"&&typeof o!="function",ct=Array.isArray,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,pt=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,gt=/'/g,vt=/"/g,mt=/^(?:script|style|textarea)$/i,Ct=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),Ot=Ct(1),I=Ct(2),M=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),yt=new WeakMap,L=C.createTreeWalker(C,129,null,!1);class T{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const h=t.length-1,l=this.parts,[a,f]=((u,m)=>{const b=u.length-1,A=[];let w,tt=m===2?"<svg>":"",d=R;for(let H=0;H<b;H++){const k=u[H];let st,y,$=-1,D=0;for(;D<k.length&&(d.lastIndex=D,y=d.exec(k),y!==null);)D=d.lastIndex,d===R?y[1]==="!--"?d=ut:y[1]!==void 0?d=pt:y[2]!==void 0?(mt.test(y[2])&&(w=RegExp("</"+y[2],"g")),d=x):y[3]!==void 0&&(d=x):d===x?y[0]===">"?(d=w!=null?w:R,$=-1):y[1]===void 0?$=-2:($=d.lastIndex-y[2].length,st=y[1],d=y[3]===void 0?x:y[3]==='"'?vt:gt):d===vt||d===gt?d=x:d===ut||d===pt?d=R:(d=x,w=void 0);const it=d===x&&u[H+1].startsWith("/>")?" ":"";tt+=d===R?k+Nt:$>=0?(A.push(st),k.slice(0,$)+"$lit$"+k.slice($)+S+it):k+S+($===-2?(A.push(void 0),H):it)}const et=tt+(u[b]||"<?>")+(m===2?"</svg>":"");return[dt!==void 0?dt.createHTML(et):et,A]})(t,e);if(this.el=T.createElement(a,s),L.currentNode=this.el.content,e===2){const u=this.el.content,m=u.firstChild;m.remove(),u.append(...m.childNodes)}for(;(i=L.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const m of i.getAttributeNames())if(m.endsWith("$lit$")||m.startsWith(S)){const b=f[r++];if(u.push(m),b!==void 0){const A=i.getAttribute(b.toLowerCase()+"$lit$").split(S),w=/([.?@])?(.*)/.exec(b);l.push({type:1,index:n,name:w[2],strings:A,ctor:w[1]==="."?Ut:w[1]==="?"?It:w[1]==="@"?Bt:q})}else l.push({type:6,index:n})}for(const m of u)i.removeAttribute(m)}if(mt.test(i.tagName)){const u=i.textContent.split(S),m=u.length-1;if(m>0){i.textContent=B?B.emptyScript:"";for(let b=0;b<m;b++)i.append(u[b],O()),L.nextNode(),l.push({type:2,index:++n});i.append(u[m],O())}}}else if(i.nodeType===8)if(i.data===Lt)l.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(S,u+1))!==-1;)l.push({type:7,index:n}),u+=S.length-1}n++}}static createElement(t,e){const s=C.createElement("template");return s.innerHTML=t,s}}function P(o,t,e=o,s){var i,n,r,h;if(t===M)return t;let l=s!==void 0?(i=e.\u03A3i)===null||i===void 0?void 0:i[s]:e.\u03A3o;const a=z(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l.O)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(o),l.T(o,e,s)),s!==void 0?((r=(h=e).\u03A3i)!==null&&r!==void 0?r:h.\u03A3i=[])[s]=l:e.\u03A3o=l),l!==void 0&&(t=P(o,l.S(o,t.values),l,s)),t}class Tt{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:s},parts:i}=this.D,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:C).importNode(s,!0);L.currentNode=n;let r=L.nextNode(),h=0,l=0,a=i[0];for(;a!==void 0;){if(h===a.index){let f;a.type===2?f=new U(r,r.nextSibling,this,t):a.type===1?f=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(f=new zt(r,this,t)),this.l.push(f),a=i[++l]}h!==(a==null?void 0:a.index)&&(r=L.nextNode(),h++)}return n}v(t){let e=0;for(const s of this.l)s!==void 0&&(s.strings!==void 0?(s.I(t,s,e),e+=s.strings.length-2):s.I(t[e])),e++}}class U{constructor(t,e,s,i){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=s,this.options=i}setConnected(t){var e;(e=this.P)===null||e===void 0||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=P(this,t,e),z(t)?t===v||t==null||t===""?(this.H!==v&&this.R(),this.H=v):t!==this.H&&t!==M&&this.m(t):t._$litType$!==void 0?this._(t):t.nodeType!==void 0?this.$(t):(s=>{var i;return ct(s)||typeof((i=s)===null||i===void 0?void 0:i[Symbol.iterator])=="function"})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;e!==null&&e.nodeType===3&&(this.B===null?e.nextSibling===null:e===this.B.previousSibling)?e.data=t:this.$(C.createTextNode(t)),this.H=t}_(t){var e;const{values:s,_$litType$:i}=t,n=typeof i=="number"?this.C(t):(i.el===void 0&&(i.el=T.createElement(i.h,this.options)),i);if(((e=this.H)===null||e===void 0?void 0:e.D)===n)this.H.v(s);else{const r=new Tt(n,this),h=r.u(this.options);r.v(s),this.$(h),this.H=r}}C(t){let e=yt.get(t.strings);return e===void 0&&yt.set(t.strings,e=new T(t)),e}g(t){ct(this.H)||(this.H=[],this.R());const e=this.H;let s,i=0;for(const n of t)i===e.length?e.push(s=new U(this.k(O()),this.k(O()),this,this.options)):s=e[i],s.I(n),i++;i<e.length&&(this.R(s&&s.B.nextSibling,i),e.length=i)}R(t=this.A.nextSibling,e){var s;for((s=this.P)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class q{constructor(t,e,s,i,n){this.type=1,this.H=v,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this.H=Array(s.length-1).fill(v),this.strings=s):this.H=v}get tagName(){return this.element.tagName}I(t,e=this,s,i){const n=this.strings;let r=!1;if(n===void 0)t=P(this,t,e,0),r=!z(t)||t!==this.H&&t!==M,r&&(this.H=t);else{const h=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++)a=P(this,h[s+l],e,l),a===M&&(a=this.H[l]),r||(r=!z(a)||a!==this.H[l]),a===v?t=v:t!==v&&(t+=(a!=null?a:"")+n[l+1]),this.H[l]=a}r&&!i&&this.W(t)}W(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ut extends q{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===v?void 0:t}}class It extends q{constructor(){super(...arguments),this.type=4}W(t){t&&t!==v?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Bt extends q{constructor(){super(...arguments),this.type=5}I(t,e=this){var s;if((t=(s=P(this,t,e,0))!==null&&s!==void 0?s:v)===M)return;const i=this.H,n=t===v&&i!==v||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==v&&(i===v||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,s;typeof this.H=="function"?this.H.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this.H.handleEvent(t)}}class zt{constructor(t,e,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=s}I(t){P(this,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K,ft,Y,bt,J,wt;(Z=(at=globalThis).litHtmlPlatformSupport)===null||Z===void 0||Z.call(at,T,U),((F=(ht=globalThis).litHtmlVersions)!==null&&F!==void 0?F:ht.litHtmlVersions=[]).push("2.0.0-rc.3"),((K=(wt=globalThis).litElementVersions)!==null&&K!==void 0?K:wt.litElementVersions=[]).push("3.0.0-rc.2");class N extends E{constructor(){super(...arguments),this.renderOptions={host:this},this.\u03A6t=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();super.update(t),this.\u03A6t=((s,i,n)=>{var r,h;const l=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:i;let a=l._$litPart$;if(a===void 0){const f=(h=n==null?void 0:n.renderBefore)!==null&&h!==void 0?h:null;l._$litPart$=a=new U(i.insertBefore(O(),f),f,void 0,n)}return a.I(s),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.\u03A6t)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.\u03A6t)===null||t===void 0||t.setConnected(!1)}render(){return M}}N.finalized=!0,N._$litElement$=!0,(Y=(ft=globalThis).litElementHydrateSupport)===null||Y===void 0||Y.call(ft,{LitElement:N}),(J=(bt=globalThis).litElementPlatformSupport)===null||J===void 0||J.call(bt,{LitElement:N});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function g(o){return(t,e)=>e!==void 0?((s,i,n)=>{i.constructor.createProperty(n,s)})(o,t,e):qt(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}class c extends N{constructor(){super(),this.min=0,this.max=100,this.step=1,this.startAngle=135,this.arcLength=270,this.handleSize=6,this.handleZoom=1.5,this.readonly=!1,this.disabled=!1,this.dragging=!1,this.rtl=!1,this._scale=1,this.dragEnd=this.dragEnd.bind(this),this.drag=this.drag.bind(this),this._keyStep=this._keyStep.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("mouseup",this.dragEnd),document.addEventListener("touchend",this.dragEnd,{passive:!1}),document.addEventListener("mousemove",this.drag),document.addEventListener("touchmove",this.drag,{passive:!1}),document.addEventListener("keydown",this._keyStep)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mouseup",this.dragEnd),document.removeEventListener("touchend",this.dragEnd),document.removeEventListener("mousemove",this.drag),document.removeEventListener("touchmove",this.drag),document.removeEventListener("keydown",this._keyStep)}get _start(){return this.startAngle*Math.PI/180}get _len(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}get _end(){return this._start+this._len}get _showHandle(){return!this.readonly&&(this.value!=null||this.high!=null&&this.low!=null)}_angleInside(t){let e=(this.startAngle+this.arcLength/2-t+180+360)%360-180;return e<this.arcLength/2&&e>-this.arcLength/2}_angle2xy(t){return this.rtl?{x:-Math.cos(t),y:Math.sin(t)}:{x:Math.cos(t),y:Math.sin(t)}}_xy2angle(t,e){return this.rtl&&(t=-t),(Math.atan2(e,t)-this._start+2*Math.PI)%(2*Math.PI)}_value2angle(t){const e=((t=Math.min(this.max,Math.max(this.min,t)))-this.min)/(this.max-this.min);return this._start+e*this._len}_angle2value(t){return Math.round((t/this._len*(this.max-this.min)+this.min)/this.step)*this.step}get _boundaries(){const t=this._angle2xy(this._start),e=this._angle2xy(this._end);let s=1;this._angleInside(270)||(s=Math.max(-t.y,-e.y));let i=1;this._angleInside(90)||(i=Math.max(t.y,e.y));let n=1;this._angleInside(180)||(n=Math.max(-t.x,-e.x));let r=1;return this._angleInside(0)||(r=Math.max(t.x,e.x)),{up:s,down:i,left:n,right:r,height:s+i,width:n+r}}_mouse2value(t){const e=t.type.startsWith("touch")?t.touches[0].clientX:t.clientX,s=t.type.startsWith("touch")?t.touches[0].clientY:t.clientY,i=this.shadowRoot.querySelector("svg").getBoundingClientRect(),n=this._boundaries,r=e-(i.left+n.left*i.width/n.width),h=s-(i.top+n.up*i.height/n.height),l=this._xy2angle(r,h);return this._angle2value(l)}dragStart(t){if(!this._showHandle||this.disabled)return;let e=t.target,s;if(this._rotation&&this._rotation.type!=="focus")return;if(e.classList.contains("shadowpath"))if(t.type==="touchstart"&&(s=window.setTimeout(()=>{this._rotation&&(this._rotation.cooldown=void 0)},200)),this.low==null)e=this.shadowRoot.querySelector("#value");else{const r=this._mouse2value(t);e=Math.abs(r-this.low)<Math.abs(r-this.high)?this.shadowRoot.querySelector("#low"):this.shadowRoot.querySelector("#high")}if(e.classList.contains("overflow")&&(e=e.nextElementSibling),!e.classList.contains("handle"))return;e.setAttribute("stroke-width",String(2*this.handleSize*this.handleZoom*this._scale));const i=e.id==="high"?this.low:this.min,n=e.id==="low"?this.high:this.max;this._rotation={handle:e,min:i,max:n,start:this[e.id],type:t.type,cooldown:s},this.dragging=!0}_cleanupRotation(){const t=this._rotation.handle;t.setAttribute("stroke-width",String(2*this.handleSize*this._scale)),this._rotation=void 0,this.dragging=!1,t.blur()}dragEnd(t){if(!this._showHandle||this.disabled||!this._rotation)return;const e=this._rotation.handle;this._cleanupRotation();let s=new CustomEvent("value-changed",{detail:{[e.id]:this[e.id]},bubbles:!0,composed:!0});this.dispatchEvent(s),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}drag(t){if(!this._showHandle||this.disabled||!this._rotation)return;if(this._rotation.cooldown)return window.clearTimeout(this._rotation.cooldown),void this._cleanupRotation();if(this._rotation.type==="focus")return;t.preventDefault();const e=this._mouse2value(t);this._dragpos(e)}_dragpos(t){if(t<this._rotation.min||t>this._rotation.max)return;const e=this._rotation.handle;this[e.id]=t;let s=new CustomEvent("value-changing",{detail:{[e.id]:t},bubbles:!0,composed:!0});this.dispatchEvent(s)}_keyStep(t){if(!this._showHandle||this.disabled||!this._rotation)return;const e=this._rotation.handle;t.key!=="ArrowLeft"&&t.key!=="ArrowDown"||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]+this.step):this._dragpos(this[e.id]-this.step)),t.key!=="ArrowRight"&&t.key!=="ArrowUp"||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]-this.step):this._dragpos(this[e.id]+this.step)),t.key==="Home"&&(t.preventDefault(),this._dragpos(this.min)),t.key==="End"&&(t.preventDefault(),this._dragpos(this.max))}updated(t){if(this.shadowRoot.querySelector(".slider")){const e=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(e&&e.strokeWidth){const s=parseFloat(e.strokeWidth);if(s>this.handleSize*this.handleZoom){const i=this._boundaries,n=`
          ${s/2*Math.abs(i.up)}px
          ${s/2*Math.abs(i.right)}px
          ${s/2*Math.abs(i.down)}px
          ${s/2*Math.abs(i.left)}px`;this.shadowRoot.querySelector("svg").style.margin=n}}}if(this.shadowRoot.querySelector("svg")&&this.shadowRoot.querySelector("svg").style.vectorEffect===void 0){t.has("_scale")&&this._scale!=1&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach(i=>{if(i.getAttribute("stroke-width"))return;const n=parseFloat(getComputedStyle(i).getPropertyValue("stroke-width"));i.style.strokeWidth=n*this._scale+"px"});const e=this.shadowRoot.querySelector("svg").getBoundingClientRect(),s=Math.max(e.width,e.height);this._scale=2/s}}_renderArc(t,e){const s=e-t,i=this._angle2xy(t),n=this._angle2xy(e+.001);return`
      M ${i.x} ${i.y}
      A 1 1,
        0,
        ${s>Math.PI?"1":"0"} ${this.rtl?"0":"1"},
        ${n.x} ${n.y}
    `}_renderHandle(t){const e=this._value2angle(this[t]),s=this._angle2xy(e),i={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[t]||"";return I`
      <g class="${t} handle">
        <path
          id=${t}
          class="overflow"
          d="
          M ${s.x} ${s.y}
          L ${s.x+.001} ${s.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-width="${4*this.handleSize*this._scale}"
          />
        <path
          id=${t}
          class="handle"
          d="
          M ${s.x} ${s.y}
          L ${s.x+.001} ${s.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke-width="${2*this.handleSize*this._scale}"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          role="slider"
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this[t]}
          aria-disabled=${this.disabled}
          aria-label=${i||""}
          />
        </g>
      `}render(){const t=this._boundaries;return Ot`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-t.left} ${-t.up} ${t.width} ${t.height}"
        style="margin: ${this.handleSize*this.handleZoom}px;"
        ?disabled=${this.disabled}
        focusable="false"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
          />
          <path
            class="bar"
            vector-effect="non-scaling-stroke"
            d=${this._renderArc(this._value2angle(this.low!=null?this.low:this.min),this._value2angle(this.high!=null?this.high:this.value))}
          />
          <path
            class="shadowpath"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
            stroke="rgba(0,0,0,0)"
            stroke-width="${3*this.handleSize*this._scale}"
            stroke-linecap="butt"
          />
        </g>

        <g class="handles">
          ${this._showHandle?this.low!=null?this._reverseOrder?I`${this._renderHandle("high")} ${this._renderHandle("low")}`:I`${this._renderHandle("low")} ${this._renderHandle("high")}`:I`${this._renderHandle("value")}`:""}
        </g>
      </svg>
    `}static get styles(){return Rt`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
        display: block;
      }
      path {
        transition: stroke 1s ease-out, stroke-width 200ms ease-out;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      svg[disabled] .bar {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      g.handles {
        stroke: var(
          --round-slider-handle-color,
          var(--round-slider-bar-color, deepskyblue)
        );
        stroke-linecap: round;
        cursor: var(--round-slider-handle-cursor, pointer);
      }
      g.low.handle {
        stroke: var(--round-slider-low-handle-color);
      }
      g.high.handle {
        stroke: var(--round-slider-high-handle-color);
      }
      svg[disabled] g.handles {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      .handle:focus {
        outline: unset;
      }
    `}}p([g({type:Number})],c.prototype,"value",void 0),p([g({type:Number})],c.prototype,"high",void 0),p([g({type:Number})],c.prototype,"low",void 0),p([g({type:Number})],c.prototype,"min",void 0),p([g({type:Number})],c.prototype,"max",void 0),p([g({type:Number})],c.prototype,"step",void 0),p([g({type:Number})],c.prototype,"startAngle",void 0),p([g({type:Number})],c.prototype,"arcLength",void 0),p([g({type:Number})],c.prototype,"handleSize",void 0),p([g({type:Number})],c.prototype,"handleZoom",void 0),p([g({type:Boolean})],c.prototype,"readonly",void 0),p([g({type:Boolean})],c.prototype,"disabled",void 0),p([g({type:Boolean,reflect:!0})],c.prototype,"dragging",void 0),p([g({type:Boolean})],c.prototype,"rtl",void 0),p([g()],c.prototype,"valueLabel",void 0),p([g()],c.prototype,"lowLabel",void 0),p([g()],c.prototype,"highLabel",void 0),p([function(o){return g({...o,state:!0,attribute:!1})}()],c.prototype,"_scale",void 0),customElements.define("round-slider",c);var _=function(o,t){return window.rpc.call(o,t)};Object.freeze({__proto__:null,invoke:_});var Mt=function(){return _("sys.disks",null)},Dt=function(){return _("sys.net",null)},jt=function(){return _("sys.info",null)},Pt=function(){return _("sys.memory",null)},At=function(){return _("sys.cpu",null)};Object.freeze({__proto__:null,getAllDisks:Mt,getAllNetworks:Dt,getSysInfo:jt,getMemory:Pt,getCpu:At});var Ht=function(){return _("widget.info",null)},Wt=function(o){return _("widget.move",o)},Vt=function(o){return _("widget.resize",o)};Object.freeze({__proto__:null,getWidgetInfo:Ht,movePositionWidget:Wt,resizeWidget:Vt});const G=document.getElementById("theme-toggle"),Zt=document.getElementById("cpu-slider"),Ft=document.getElementById("cpu-percentage"),_t=document.getElementById("memory-slider"),Kt=document.getElementById("memory-percentage"),Yt=document.getElementById("disks"),St=o=>{const t=["bytes","Kb","Mb","Gb","Tb","PB","EB","ZB","YB"];let e=0,s=parseInt(o,10)||0;for(;s>=1024&&++e;)s=s/1024;return s.toFixed(s<10&&e>0?1:0)+" "+t[e]},Jt=o=>{let t=o.mount_point||o.name,e=St(o.total_space-o.free_space),s=St(o.total_space),i=(o.total_space-o.free_space)*100/o.total_space;console.log(`disk ${t} percentage`,i);let n=`linear-gradient(to right, #3264fe ${i}%, #d5d5d5 ${i}%)`,r=`<tr>
                        <td><span>${t}</span></td>
                        <td><input class="range-slider_range" style="background: ${n}" disabled type="range" value="${e}" min="0" max="${s}" /></td>
                        <!--<td>${e} / ${s}</td>-->
                    </tr>`;Yt.innerHTML+=r},Xt=()=>{const o=()=>{let e=localStorage.getItem("theme");document.body.classList.add(e||"light")};Ht().then(e=>{let s=e.widget_args.split(";")[0].split("=");s.length==2?document.body.classList.add(s[1]||"light"):o()}).catch(e=>o());const t=()=>{At().then(Qt),Pt().then(te)};Mt().then(ee),setInterval(t,5e3)},Gt=()=>{document.body.classList.contains("light")?(document.body.classList.remove("light"),document.body.classList.add("night"),G.value="Light",localStorage.setItem("theme","night")):(document.body.classList.remove("night"),document.body.classList.add("light"),G.value="Night",localStorage.setItem("theme","light"))},Qt=o=>{let t=o.reduce((s,i)=>s+i.cpu_usage,0),e=Math.floor(t/o.length);Ft.innerText=`${e} %`,Zt.value=e},te=o=>{let t=o.used,e=o.total,s=Math.floor(t*100/e);Kt.innerText=`${s} %`,_t.value=t,_t.max=e},ee=o=>{[...new Map(o.reverse().map(e=>[e.name,e])).values()].reverse().forEach(Jt)};G.onclick=Gt;window.onload=Xt;
