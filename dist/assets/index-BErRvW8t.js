(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var Jo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Pu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,p=o>>2,g=(o&3)<<4|l>>4;let _=(l&15)<<2|h>>6,x=h&63;u||(x=64,a||(_=64)),r.push(e[p],e[g],e[_],e[x])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(el(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Pu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const h=i<n.length?e[n.charAt(i)]:64;++i;const g=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||h==null||g==null)throw new Su;const _=o<<2|l>>4;if(r.push(_),h!==64){const x=l<<4&240|h>>2;if(r.push(x),g!==64){const E=h<<6&192|g;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Su extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vu=function(n){const t=el(n);return nl.encodeByteArray(t,!0)},_r=function(n){return Vu(n).replace(/\./g,"")},Du=function(n){try{return nl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=()=>ku().__FIREBASE_DEFAULTS__,Lu=()=>{if(typeof process>"u"||typeof Jo>"u")return;const n=Jo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Du(n[1]);return t&&JSON.parse(t)},rs=()=>{try{return Nu()||Lu()||Bu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mu=n=>{var t,e;return(e=(t=rs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ou=n=>{const t=Mu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},rl=()=>{var n;return(n=rs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[_r(JSON.stringify(e)),_r(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qu(){var n;const t=(n=rs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hu(){return!qu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uu(){try{return typeof indexedDB=="object"}catch{return!1}}function Wu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="FirebaseError";class qe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Qu,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,il.prototype.create)}}class il{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?$u(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new qe(i,l,r)}}function $u(n,t){return n.replace(Gu,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Gu=/\{\$([^}]+)}/g;function Ni(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(Zo(o)&&Zo(a)){if(!Ni(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Zo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n){return n&&n._delegate?n._delegate:n}class bn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Fu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ju(t))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=me){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=me){return this.instances.has(t)}getOptions(t=me){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=me){return this.component?this.component.multipleInstances?t:me:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xu(n){return n===me?void 0:n}function Ju(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ku(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Yu={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},td=Q.INFO,ed={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},nd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=ed[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sl{constructor(t){this.name=t,this._logLevel=td,this._logHandler=nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const rd=(n,t)=>t.some(e=>n instanceof e);let Yo,ta;function id(){return Yo||(Yo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sd(){return ta||(ta=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ol=new WeakMap,Li=new WeakMap,al=new WeakMap,Ei=new WeakMap,is=new WeakMap;function od(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(te(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ol.set(e,n)}).catch(()=>{}),is.set(t,n),t}function ad(n){if(Li.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Li.set(n,t)}let Bi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Li.get(n);if(t==="objectStoreNames")return n.objectStoreNames||al.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return te(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ld(n){Bi=n(Bi)}function cd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(bi(this),t,...e);return al.set(r,t.sort?t.sort():[t]),te(r)}:sd().includes(n)?function(...t){return n.apply(bi(this),t),te(ol.get(this))}:function(...t){return te(n.apply(bi(this),t))}}function ud(n){return typeof n=="function"?cd(n):(n instanceof IDBTransaction&&ad(n),rd(n,id())?new Proxy(n,Bi):n)}function te(n){if(n instanceof IDBRequest)return od(n);if(Ei.has(n))return Ei.get(n);const t=ud(n);return t!==n&&(Ei.set(n,t),is.set(t,n)),t}const bi=n=>is.get(n);function dd(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=te(a);return r&&a.addEventListener("upgradeneeded",u=>{r(te(a.result),u.oldVersion,u.newVersion,te(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const hd=["get","getKey","getAll","getAllKeys","count"],pd=["put","add","delete","clear"],Ii=new Map;function ea(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ii.get(t))return Ii.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=pd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hd.includes(e)))return;const o=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[e](...l),i&&u.done]))[0]};return Ii.set(t,o),o}ld(n=>({...n,get:(t,e,r)=>ea(t,e)||n.get(t,e,r),has:(t,e)=>!!ea(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(md(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function md(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Mi="@firebase/app",na="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new sl("@firebase/app"),gd="@firebase/app-compat",yd="@firebase/analytics-compat",vd="@firebase/analytics",Ad="@firebase/app-check-compat",_d="@firebase/app-check",Ed="@firebase/auth",bd="@firebase/auth-compat",Id="@firebase/database",wd="@firebase/data-connect",xd="@firebase/database-compat",Td="@firebase/functions",Rd="@firebase/functions-compat",Cd="@firebase/installations",Pd="@firebase/installations-compat",Sd="@firebase/messaging",Vd="@firebase/messaging-compat",Dd="@firebase/performance",kd="@firebase/performance-compat",Nd="@firebase/remote-config",Ld="@firebase/remote-config-compat",Bd="@firebase/storage",Md="@firebase/storage-compat",Od="@firebase/firestore",Fd="@firebase/vertexai-preview",jd="@firebase/firestore-compat",zd="firebase",qd="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="[DEFAULT]",Hd={[Mi]:"fire-core",[gd]:"fire-core-compat",[vd]:"fire-analytics",[yd]:"fire-analytics-compat",[_d]:"fire-app-check",[Ad]:"fire-app-check-compat",[Ed]:"fire-auth",[bd]:"fire-auth-compat",[Id]:"fire-rtdb",[wd]:"fire-data-connect",[xd]:"fire-rtdb-compat",[Td]:"fire-fn",[Rd]:"fire-fn-compat",[Cd]:"fire-iid",[Pd]:"fire-iid-compat",[Sd]:"fire-fcm",[Vd]:"fire-fcm-compat",[Dd]:"fire-perf",[kd]:"fire-perf-compat",[Nd]:"fire-rc",[Ld]:"fire-rc-compat",[Bd]:"fire-gcs",[Md]:"fire-gcs-compat",[Od]:"fire-fst",[jd]:"fire-fst-compat",[Fd]:"fire-vertex","fire-js":"fire-js",[zd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map,Ud=new Map,Fi=new Map;function ra(n,t){try{n.container.addComponent(t)}catch(e){Qt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function br(n){const t=n.name;if(Fi.has(t))return Qt.debug(`There were multiple attempts to register component ${t}.`),!1;Fi.set(t,n);for(const e of Er.values())ra(e,n);for(const e of Ud.values())ra(e,n);return!0}function Wd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ee=new il("app","Firebase",Qd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ee.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=qd;function ll(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Oi,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw ee.create("bad-app-name",{appName:String(i)});if(e||(e=rl()),!e)throw ee.create("no-options");const o=Er.get(i);if(o){if(Ni(e,o.options)&&Ni(r,o.config))return o;throw ee.create("duplicate-app",{appName:i})}const a=new Zu(i);for(const u of Fi.values())a.addComponent(u);const l=new $d(e,r,a);return Er.set(i,l),l}function Kd(n=Oi){const t=Er.get(n);if(!t&&n===Oi&&rl())return ll();if(!t)throw ee.create("no-app",{appName:n});return t}function De(n,t,e){var r;let i=(r=Hd[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qt.warn(l.join(" "));return}br(new bn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="firebase-heartbeat-database",Jd=1,In="firebase-heartbeat-store";let wi=null;function cl(){return wi||(wi=dd(Xd,Jd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(In)}catch(e){console.warn(e)}}}}).catch(n=>{throw ee.create("idb-open",{originalErrorMessage:n.message})})),wi}async function Zd(n){try{const e=(await cl()).transaction(In),r=await e.objectStore(In).get(ul(n));return await e.done,r}catch(t){if(t instanceof qe)Qt.warn(t.message);else{const e=ee.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(e.message)}}}async function ia(n,t){try{const r=(await cl()).transaction(In,"readwrite");await r.objectStore(In).put(t,ul(n)),await r.done}catch(e){if(e instanceof qe)Qt.warn(e.message);else{const r=ee.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(r.message)}}}function ul(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=1024,th=30*24*60*60*1e3;class eh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new rh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=sa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=th}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Qt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sa(),{heartbeatsToSend:r,unsentEntries:i}=nh(this._heartbeatsCache.heartbeats),o=_r(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Qt.warn(e),""}}}function sa(){return new Date().toISOString().substring(0,10)}function nh(n,t=Yd){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),oa(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),oa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class rh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uu()?Wu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Zd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ia(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ia(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function oa(n){return _r(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(n){br(new bn("platform-logger",t=>new fd(t),"PRIVATE")),br(new bn("heartbeat",t=>new eh(t),"PRIVATE")),De(Mi,na,n),De(Mi,na,"esm2017"),De("fire-js","")}ih("");var sh="firebase",oh="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De(sh,oh,"app");var aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ye,dl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(A,m){function v(){}v.prototype=m.prototype,A.D=m.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(I,w,R){for(var y=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)y[mt-2]=arguments[mt];return m.prototype[w].apply(I,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,m,v){v||(v=0);var I=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)I[w]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(w=0;16>w;++w)I[w]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=A.g[0],v=A.g[1],w=A.g[2];var R=A.g[3],y=m+(R^v&(w^R))+I[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=R+(w^m&(v^w))+I[1]+3905402710&4294967295,R=m+(y<<12&4294967295|y>>>20),y=w+(v^R&(m^v))+I[2]+606105819&4294967295,w=R+(y<<17&4294967295|y>>>15),y=v+(m^w&(R^m))+I[3]+3250441966&4294967295,v=w+(y<<22&4294967295|y>>>10),y=m+(R^v&(w^R))+I[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(w^m&(v^w))+I[5]+1200080426&4294967295,R=m+(y<<12&4294967295|y>>>20),y=w+(v^R&(m^v))+I[6]+2821735955&4294967295,w=R+(y<<17&4294967295|y>>>15),y=v+(m^w&(R^m))+I[7]+4249261313&4294967295,v=w+(y<<22&4294967295|y>>>10),y=m+(R^v&(w^R))+I[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(w^m&(v^w))+I[9]+2336552879&4294967295,R=m+(y<<12&4294967295|y>>>20),y=w+(v^R&(m^v))+I[10]+4294925233&4294967295,w=R+(y<<17&4294967295|y>>>15),y=v+(m^w&(R^m))+I[11]+2304563134&4294967295,v=w+(y<<22&4294967295|y>>>10),y=m+(R^v&(w^R))+I[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(w^m&(v^w))+I[13]+4254626195&4294967295,R=m+(y<<12&4294967295|y>>>20),y=w+(v^R&(m^v))+I[14]+2792965006&4294967295,w=R+(y<<17&4294967295|y>>>15),y=v+(m^w&(R^m))+I[15]+1236535329&4294967295,v=w+(y<<22&4294967295|y>>>10),y=m+(w^R&(v^w))+I[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^w&(m^v))+I[6]+3225465664&4294967295,R=m+(y<<9&4294967295|y>>>23),y=w+(m^v&(R^m))+I[11]+643717713&4294967295,w=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(w^R))+I[0]+3921069994&4294967295,v=w+(y<<20&4294967295|y>>>12),y=m+(w^R&(v^w))+I[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^w&(m^v))+I[10]+38016083&4294967295,R=m+(y<<9&4294967295|y>>>23),y=w+(m^v&(R^m))+I[15]+3634488961&4294967295,w=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(w^R))+I[4]+3889429448&4294967295,v=w+(y<<20&4294967295|y>>>12),y=m+(w^R&(v^w))+I[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^w&(m^v))+I[14]+3275163606&4294967295,R=m+(y<<9&4294967295|y>>>23),y=w+(m^v&(R^m))+I[3]+4107603335&4294967295,w=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(w^R))+I[8]+1163531501&4294967295,v=w+(y<<20&4294967295|y>>>12),y=m+(w^R&(v^w))+I[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^w&(m^v))+I[2]+4243563512&4294967295,R=m+(y<<9&4294967295|y>>>23),y=w+(m^v&(R^m))+I[7]+1735328473&4294967295,w=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(w^R))+I[12]+2368359562&4294967295,v=w+(y<<20&4294967295|y>>>12),y=m+(v^w^R)+I[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^w)+I[8]+2272392833&4294967295,R=m+(y<<11&4294967295|y>>>21),y=w+(R^m^v)+I[11]+1839030562&4294967295,w=R+(y<<16&4294967295|y>>>16),y=v+(w^R^m)+I[14]+4259657740&4294967295,v=w+(y<<23&4294967295|y>>>9),y=m+(v^w^R)+I[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^w)+I[4]+1272893353&4294967295,R=m+(y<<11&4294967295|y>>>21),y=w+(R^m^v)+I[7]+4139469664&4294967295,w=R+(y<<16&4294967295|y>>>16),y=v+(w^R^m)+I[10]+3200236656&4294967295,v=w+(y<<23&4294967295|y>>>9),y=m+(v^w^R)+I[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^w)+I[0]+3936430074&4294967295,R=m+(y<<11&4294967295|y>>>21),y=w+(R^m^v)+I[3]+3572445317&4294967295,w=R+(y<<16&4294967295|y>>>16),y=v+(w^R^m)+I[6]+76029189&4294967295,v=w+(y<<23&4294967295|y>>>9),y=m+(v^w^R)+I[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^w)+I[12]+3873151461&4294967295,R=m+(y<<11&4294967295|y>>>21),y=w+(R^m^v)+I[15]+530742520&4294967295,w=R+(y<<16&4294967295|y>>>16),y=v+(w^R^m)+I[2]+3299628645&4294967295,v=w+(y<<23&4294967295|y>>>9),y=m+(w^(v|~R))+I[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~w))+I[7]+1126891415&4294967295,R=m+(y<<10&4294967295|y>>>22),y=w+(m^(R|~v))+I[14]+2878612391&4294967295,w=R+(y<<15&4294967295|y>>>17),y=v+(R^(w|~m))+I[5]+4237533241&4294967295,v=w+(y<<21&4294967295|y>>>11),y=m+(w^(v|~R))+I[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~w))+I[3]+2399980690&4294967295,R=m+(y<<10&4294967295|y>>>22),y=w+(m^(R|~v))+I[10]+4293915773&4294967295,w=R+(y<<15&4294967295|y>>>17),y=v+(R^(w|~m))+I[1]+2240044497&4294967295,v=w+(y<<21&4294967295|y>>>11),y=m+(w^(v|~R))+I[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~w))+I[15]+4264355552&4294967295,R=m+(y<<10&4294967295|y>>>22),y=w+(m^(R|~v))+I[6]+2734768916&4294967295,w=R+(y<<15&4294967295|y>>>17),y=v+(R^(w|~m))+I[13]+1309151649&4294967295,v=w+(y<<21&4294967295|y>>>11),y=m+(w^(v|~R))+I[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~w))+I[11]+3174756917&4294967295,R=m+(y<<10&4294967295|y>>>22),y=w+(m^(R|~v))+I[2]+718787259&4294967295,w=R+(y<<15&4294967295|y>>>17),y=v+(R^(w|~m))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+m&4294967295,A.g[1]=A.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,A.g[2]=A.g[2]+w&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,m){m===void 0&&(m=A.length);for(var v=m-this.blockSize,I=this.B,w=this.h,R=0;R<m;){if(w==0)for(;R<=v;)i(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<m;)if(I[w++]=A.charCodeAt(R++),w==this.blockSize){i(this,I),w=0;break}}else for(;R<m;)if(I[w++]=A[R++],w==this.blockSize){i(this,I),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var m=1;m<A.length-8;++m)A[m]=0;var v=8*this.o;for(m=A.length-8;m<A.length;++m)A[m]=v&255,v/=256;for(this.u(A),A=Array(16),m=v=0;4>m;++m)for(var I=0;32>I;I+=8)A[v++]=this.g[m]>>>I&255;return A};function o(A,m){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=m(A)}function a(A,m){this.h=m;for(var v=[],I=!0,w=A.length-1;0<=w;w--){var R=A[w]|0;I&&R==m||(v[w]=R,I=!1)}this.g=v}var l={};function u(A){return-128<=A&&128>A?o(A,function(m){return new a([m|0],0>m?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return g;if(0>A)return C(h(-A));for(var m=[],v=1,I=0;A>=v;I++)m[I]=A/v|0,v*=4294967296;return new a(m,0)}function p(A,m){if(A.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(A.charAt(0)=="-")return C(p(A.substring(1),m));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),I=g,w=0;w<A.length;w+=8){var R=Math.min(8,A.length-w),y=parseInt(A.substring(w,w+R),m);8>R?(R=h(Math.pow(m,R)),I=I.j(R).add(h(y))):(I=I.j(v),I=I.add(h(y)))}return I}var g=u(0),_=u(1),x=u(16777216);n=a.prototype,n.m=function(){if(b(this))return-C(this).m();for(var A=0,m=1,v=0;v<this.g.length;v++){var I=this.i(v);A+=(0<=I?I:4294967296+I)*m,m*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(b(this))return"-"+C(this).toString(A);for(var m=h(Math.pow(A,6)),v=this,I="";;){var w=M(v,m).g;v=D(v,w.j(m));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=w,E(v))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(var m=0;m<A.g.length;m++)if(A.g[m]!=0)return!1;return!0}function b(A){return A.h==-1}n.l=function(A){return A=D(this,A),b(A)?-1:E(A)?0:1};function C(A){for(var m=A.g.length,v=[],I=0;I<m;I++)v[I]=~A.g[I];return new a(v,~A.h).add(_)}n.abs=function(){return b(this)?C(this):this},n.add=function(A){for(var m=Math.max(this.g.length,A.g.length),v=[],I=0,w=0;w<=m;w++){var R=I+(this.i(w)&65535)+(A.i(w)&65535),y=(R>>>16)+(this.i(w)>>>16)+(A.i(w)>>>16);I=y>>>16,R&=65535,y&=65535,v[w]=y<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function D(A,m){return A.add(C(m))}n.j=function(A){if(E(this)||E(A))return g;if(b(this))return b(A)?C(this).j(C(A)):C(C(this).j(A));if(b(A))return C(this.j(C(A)));if(0>this.l(x)&&0>A.l(x))return h(this.m()*A.m());for(var m=this.g.length+A.g.length,v=[],I=0;I<2*m;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var w=0;w<A.g.length;w++){var R=this.i(I)>>>16,y=this.i(I)&65535,mt=A.i(w)>>>16,Lt=A.i(w)&65535;v[2*I+2*w]+=y*Lt,V(v,2*I+2*w),v[2*I+2*w+1]+=R*Lt,V(v,2*I+2*w+1),v[2*I+2*w+1]+=y*mt,V(v,2*I+2*w+1),v[2*I+2*w+2]+=R*mt,V(v,2*I+2*w+2)}for(I=0;I<m;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=m;I<2*m;I++)v[I]=0;return new a(v,0)};function V(A,m){for(;(A[m]&65535)!=A[m];)A[m+1]+=A[m]>>>16,A[m]&=65535,m++}function L(A,m){this.g=A,this.h=m}function M(A,m){if(E(m))throw Error("division by zero");if(E(A))return new L(g,g);if(b(A))return m=M(C(A),m),new L(C(m.g),C(m.h));if(b(m))return m=M(A,C(m)),new L(C(m.g),m.h);if(30<A.g.length){if(b(A)||b(m))throw Error("slowDivide_ only works with positive integers.");for(var v=_,I=m;0>=I.l(A);)v=k(v),I=k(I);var w=$(v,1),R=$(I,1);for(I=$(I,2),v=$(v,2);!E(I);){var y=R.add(I);0>=y.l(A)&&(w=w.add(v),R=y),I=$(I,1),v=$(v,1)}return m=D(A,w.j(m)),new L(w,m)}for(w=g;0<=A.l(m);){for(v=Math.max(1,Math.floor(A.m()/m.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=h(v),y=R.j(m);b(y)||0<y.l(A);)v-=I,R=h(v),y=R.j(m);E(R)&&(R=_),w=w.add(R),A=D(A,y)}return new L(w,A)}n.A=function(A){return M(this,A).h},n.and=function(A){for(var m=Math.max(this.g.length,A.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)&A.i(I);return new a(v,this.h&A.h)},n.or=function(A){for(var m=Math.max(this.g.length,A.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)|A.i(I);return new a(v,this.h|A.h)},n.xor=function(A){for(var m=Math.max(this.g.length,A.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)^A.i(I);return new a(v,this.h^A.h)};function k(A){for(var m=A.g.length+1,v=[],I=0;I<m;I++)v[I]=A.i(I)<<1|A.i(I-1)>>>31;return new a(v,A.h)}function $(A,m){var v=m>>5;m%=32;for(var I=A.g.length-v,w=[],R=0;R<I;R++)w[R]=0<m?A.i(R+v)>>>m|A.i(R+v+1)<<32-m:A.i(R+v);return new a(w,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,ye=a}).apply(typeof aa<"u"?aa:typeof self<"u"?self:typeof window<"u"?window:{});var ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hl,fn,pl,mr,ji,fl,ml,gl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,d){return s==Array.prototype||s==Object.prototype||(s[c]=d.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ur=="object"&&ur];for(var c=0;c<s.length;++c){var d=s[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var d=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var T=s[f];if(!(T in d))break t;d=d[T]}s=s[s.length-1],f=d[s],c=c(f),c!=f&&c!=null&&t(d,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var d=0,f=!1,T={next:function(){if(!f&&d<s.length){var P=d++;return{value:c(P,s[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function h(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,d){return s.call.apply(s.bind,arguments)}function g(s,c,d){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),s.apply(c,T)}}return function(){return s.apply(c,arguments)}}function _(s,c,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,_.apply(null,arguments)}function x(s,c){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function E(s,c){function d(){}d.prototype=c.prototype,s.aa=c.prototype,s.prototype=new d,s.prototype.constructor=s,s.Qb=function(f,T,P){for(var B=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)B[Z-2]=arguments[Z];return c.prototype[T].apply(f,B)}}function b(s){const c=s.length;if(0<c){const d=Array(c);for(let f=0;f<c;f++)d[f]=s[f];return d}return[]}function C(s,c){for(let d=1;d<arguments.length;d++){const f=arguments[d];if(u(f)){const T=s.length||0,P=f.length||0;s.length=T+P;for(let B=0;B<P;B++)s[T+B]=f[B]}else s.push(f)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(s){return/^[\s\xa0]*$/.test(s)}function L(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function M(s){return M[" "](s),s}M[" "]=function(){};var k=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function $(s,c,d){for(const f in s)c.call(d,s[f],f,s)}function A(s,c){for(const d in s)c.call(void 0,s[d],d,s)}function m(s){const c={};for(const d in s)c[d]=s[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(s,c){let d,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(d in f)s[d]=f[d];for(let P=0;P<v.length;P++)d=v[P],Object.prototype.hasOwnProperty.call(f,d)&&(s[d]=f[d])}}function w(s){var c=1;s=s.split(":");const d=[];for(;0<c&&s.length;)d.push(s.shift()),c--;return s.length&&d.push(s.join(":")),d}function R(s){l.setTimeout(()=>{throw s},0)}function y(){var s=Xe;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class mt{constructor(){this.h=this.g=null}add(c,d){const f=Lt.get();f.set(c,d),this.h?this.h.next=f:this.g=f,this.h=f}}var Lt=new D(()=>new Ke,s=>s.reset());class Ke{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,le=!1,Xe=new mt,ce=()=>{const s=l.Promise.resolve(void 0);Kt=()=>{s.then(Je)}};var Je=()=>{for(var s;s=y();){try{s.h.call(s.g)}catch(d){R(d)}var c=Lt;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}le=!1};function st(){this.s=this.s,this.C=this.C}st.prototype.s=!1,st.prototype.ma=function(){this.s||(this.s=!0,this.N())},st.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var ue=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return s}();function qt(s,c){if(J.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var d=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(k){t:{try{M(c.nodeName);var T=!0;break t}catch{}T=!1}T||(c=null)}}else d=="mouseover"?c=s.fromElement:d=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Ze[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&qt.aa.h.call(this)}}E(qt,J);var Ze={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Wn="closure_listenable_"+(1e6*Math.random()|0),Zc=0;function Yc(s,c,d,f,T){this.listener=s,this.proxy=null,this.src=c,this.type=d,this.capture=!!f,this.ha=T,this.key=++Zc,this.da=this.fa=!1}function Qn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function $n(s){this.src=s,this.g={},this.h=0}$n.prototype.add=function(s,c,d,f,T){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var B=Yr(s,c,f,T);return-1<B?(c=s[B],d||(c.fa=!1)):(c=new Yc(c,this.src,P,!!f,T),c.fa=d,s.push(c)),c};function Zr(s,c){var d=c.type;if(d in s.g){var f=s.g[d],T=Array.prototype.indexOf.call(f,c,void 0),P;(P=0<=T)&&Array.prototype.splice.call(f,T,1),P&&(Qn(c),s.g[d].length==0&&(delete s.g[d],s.h--))}}function Yr(s,c,d,f){for(var T=0;T<s.length;++T){var P=s[T];if(!P.da&&P.listener==c&&P.capture==!!d&&P.ha==f)return T}return-1}var ti="closure_lm_"+(1e6*Math.random()|0),ei={};function Js(s,c,d,f,T){if(Array.isArray(c)){for(var P=0;P<c.length;P++)Js(s,c[P],d,f,T);return null}return d=to(d),s&&s[Wn]?s.K(c,d,h(f)?!!f.capture:!1,T):tu(s,c,d,!1,f,T)}function tu(s,c,d,f,T,P){if(!c)throw Error("Invalid event type");var B=h(T)?!!T.capture:!!T,Z=ri(s);if(Z||(s[ti]=Z=new $n(s)),d=Z.add(c,d,f,B,P),d.proxy)return d;if(f=eu(),d.proxy=f,f.src=s,f.listener=d,s.addEventListener)ue||(T=B),T===void 0&&(T=!1),s.addEventListener(c.toString(),f,T);else if(s.attachEvent)s.attachEvent(Ys(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function eu(){function s(d){return c.call(s.src,s.listener,d)}const c=nu;return s}function Zs(s,c,d,f,T){if(Array.isArray(c))for(var P=0;P<c.length;P++)Zs(s,c[P],d,f,T);else f=h(f)?!!f.capture:!!f,d=to(d),s&&s[Wn]?(s=s.i,c=String(c).toString(),c in s.g&&(P=s.g[c],d=Yr(P,d,f,T),-1<d&&(Qn(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete s.g[c],s.h--)))):s&&(s=ri(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Yr(c,d,f,T)),(d=-1<s?c[s]:null)&&ni(d))}function ni(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Wn])Zr(c.i,s);else{var d=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(d,f,s.capture):c.detachEvent?c.detachEvent(Ys(d),f):c.addListener&&c.removeListener&&c.removeListener(f),(d=ri(c))?(Zr(d,s),d.h==0&&(d.src=null,c[ti]=null)):Qn(s)}}}function Ys(s){return s in ei?ei[s]:ei[s]="on"+s}function nu(s,c){if(s.da)s=!0;else{c=new qt(c,this);var d=s.listener,f=s.ha||s.src;s.fa&&ni(s),s=d.call(f,c)}return s}function ri(s){return s=s[ti],s instanceof $n?s:null}var ii="__closure_events_fn_"+(1e9*Math.random()>>>0);function to(s){return typeof s=="function"?s:(s[ii]||(s[ii]=function(c){return s.handleEvent(c)}),s[ii])}function gt(){st.call(this),this.i=new $n(this),this.M=this,this.F=null}E(gt,st),gt.prototype[Wn]=!0,gt.prototype.removeEventListener=function(s,c,d,f){Zs(this,s,c,d,f)};function It(s,c){var d,f=s.F;if(f)for(d=[];f;f=f.F)d.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new J(c,s);else if(c instanceof J)c.target=c.target||s;else{var T=c;c=new J(f,s),I(c,T)}if(T=!0,d)for(var P=d.length-1;0<=P;P--){var B=c.g=d[P];T=Gn(B,f,!0,c)&&T}if(B=c.g=s,T=Gn(B,f,!0,c)&&T,T=Gn(B,f,!1,c)&&T,d)for(P=0;P<d.length;P++)B=c.g=d[P],T=Gn(B,f,!1,c)&&T}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var d=s.g[c],f=0;f<d.length;f++)Qn(d[f]);delete s.g[c],s.h--}}this.F=null},gt.prototype.K=function(s,c,d,f){return this.i.add(String(s),c,!1,d,f)},gt.prototype.L=function(s,c,d,f){return this.i.add(String(s),c,!0,d,f)};function Gn(s,c,d,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var T=!0,P=0;P<c.length;++P){var B=c[P];if(B&&!B.da&&B.capture==d){var Z=B.listener,ut=B.ha||B.src;B.fa&&Zr(s.i,B),T=Z.call(ut,f)!==!1&&T}}return T&&!f.defaultPrevented}function eo(s,c,d){if(typeof s=="function")d&&(s=_(s,d));else if(s&&typeof s.handleEvent=="function")s=_(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function no(s){s.g=eo(()=>{s.g=null,s.i&&(s.i=!1,no(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class ru extends st{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:no(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(s){st.call(this),this.h=s,this.g={}}E(Ye,st);var ro=[];function io(s){$(s.g,function(c,d){this.g.hasOwnProperty(d)&&ni(c)},s),s.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),io(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var si=l.JSON.stringify,iu=l.JSON.parse,su=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function oi(){}oi.prototype.h=null;function so(s){return s.h||(s.h=s.i())}function oo(){}var tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ai(){J.call(this,"d")}E(ai,J);function li(){J.call(this,"c")}E(li,J);var de={},ao=null;function Kn(){return ao=ao||new gt}de.La="serverreachability";function lo(s){J.call(this,de.La,s)}E(lo,J);function en(s){const c=Kn();It(c,new lo(c))}de.STAT_EVENT="statevent";function co(s,c){J.call(this,de.STAT_EVENT,s),this.stat=c}E(co,J);function wt(s){const c=Kn();It(c,new co(c,s))}de.Ma="timingevent";function uo(s,c){J.call(this,de.Ma,s),this.size=c}E(uo,J);function nn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function rn(){this.g=!0}rn.prototype.xa=function(){this.g=!1};function ou(s,c,d,f,T,P){s.info(function(){if(s.g)if(P)for(var B="",Z=P.split("&"),ut=0;ut<Z.length;ut++){var G=Z[ut].split("=");if(1<G.length){var yt=G[0];G=G[1];var vt=yt.split("_");B=2<=vt.length&&vt[1]=="type"?B+(yt+"="+G+"&"):B+(yt+"=redacted&")}}else B=null;else B=P;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+c+`
`+d+`
`+B})}function au(s,c,d,f,T,P,B){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+c+`
`+d+`
`+P+" "+B})}function we(s,c,d,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+cu(s,d)+(f?" "+f:"")})}function lu(s,c){s.info(function(){return"TIMEOUT: "+c})}rn.prototype.info=function(){};function cu(s,c){if(!s.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(s=0;s<d.length;s++)if(Array.isArray(d[s])){var f=d[s];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var P=T[0];if(P!="noop"&&P!="stop"&&P!="close")for(var B=1;B<T.length;B++)T[B]=""}}}}return si(d)}catch{return c}}var Xn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ho={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ci;function Jn(){}E(Jn,oi),Jn.prototype.g=function(){return new XMLHttpRequest},Jn.prototype.i=function(){return{}},ci=new Jn;function Xt(s,c,d,f){this.j=s,this.i=c,this.l=d,this.R=f||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new po}function po(){this.i=null,this.g="",this.h=!1}var fo={},ui={};function di(s,c,d){s.L=1,s.v=er(Ht(c)),s.m=d,s.P=!0,mo(s,null)}function mo(s,c){s.F=Date.now(),Zn(s),s.A=Ht(s.v);var d=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Po(d.i,"t",f),s.C=0,d=s.j.J,s.h=new po,s.g=$o(s.j,d?c:null,!s.m),0<s.O&&(s.M=new ru(_(s.Y,s,s.g),s.O)),c=s.U,d=s.g,f=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(ro[0]=T.toString()),T=ro);for(var P=0;P<T.length;P++){var B=Js(d,T[P],f||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),en(),ou(s.i,s.u,s.A,s.l,s.R,s.m)}Xt.prototype.ca=function(s){s=s.target;const c=this.M;c&&Ut(s)==3?c.j():this.Y(s)},Xt.prototype.Y=function(s){try{if(s==this.g)t:{const vt=Ut(this.g);var c=this.g.Ba();const Re=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Bo(this.g)))){this.J||vt!=4||c==7||(c==8||0>=Re?en(3):en(2)),hi(this);var d=this.g.Z();this.X=d;e:if(go(this)){var f=Bo(this.g);s="";var T=f.length,P=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){he(this),sn(this);var B="";break e}this.h.i=new l.TextDecoder}for(c=0;c<T;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(P&&c==T-1)});f.length=0,this.h.g+=s,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,au(this.i,this.u,this.A,this.l,this.R,vt,d),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,ut=this.g;if((Z=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Z)){var G=Z;break e}}G=null}if(d=G)we(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pi(this,d);else{this.o=!1,this.s=3,wt(12),he(this),sn(this);break t}}if(this.P){d=!0;let kt;for(;!this.J&&this.C<B.length;)if(kt=uu(this,B),kt==ui){vt==4&&(this.s=4,wt(14),d=!1),we(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==fo){this.s=4,wt(15),we(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else we(this.i,this.l,kt,null),pi(this,kt);if(go(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||B.length!=0||this.h.h||(this.s=1,wt(16),d=!1),this.o=this.o&&d,!d)we(this.i,this.l,B,"[Invalid Chunked Response]"),he(this),sn(this);else if(0<B.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ai(yt),yt.M=!0,wt(11))}}else we(this.i,this.l,B,null),pi(this,B);vt==4&&he(this),this.o&&!this.J&&(vt==4?Ho(this.j,this):(this.o=!1,Zn(this)))}else Ru(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),he(this),sn(this)}}}catch{}finally{}};function go(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function uu(s,c){var d=s.C,f=c.indexOf(`
`,d);return f==-1?ui:(d=Number(c.substring(d,f)),isNaN(d)?fo:(f+=1,f+d>c.length?ui:(c=c.slice(f,f+d),s.C=f+d,c)))}Xt.prototype.cancel=function(){this.J=!0,he(this)};function Zn(s){s.S=Date.now()+s.I,yo(s,s.I)}function yo(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=nn(_(s.ba,s),c)}function hi(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Xt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(lu(this.i,this.A),this.L!=2&&(en(),wt(17)),he(this),this.s=2,sn(this)):yo(this,this.S-s)};function sn(s){s.j.G==0||s.J||Ho(s.j,s)}function he(s){hi(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,io(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function pi(s,c){try{var d=s.j;if(d.G!=0&&(d.g==s||fi(d.h,s))){if(!s.K&&fi(d.h,s)&&d.G==3){try{var f=d.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<s.F)ar(d),sr(d);else break t;vi(d),wt(18)}}else d.za=T[1],0<d.za-d.T&&37500>T[2]&&d.F&&d.v==0&&!d.C&&(d.C=nn(_(d.Za,d),6e3));if(1>=_o(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else fe(d,11)}else if((s.K||d.g==s)&&ar(d),!V(c))for(T=d.Da.g.parse(c),c=0;c<T.length;c++){let G=T[c];if(d.T=G[0],G=G[1],d.G==2)if(G[0]=="c"){d.K=G[1],d.ia=G[2];const yt=G[3];yt!=null&&(d.la=yt,d.j.info("VER="+d.la));const vt=G[4];vt!=null&&(d.Aa=vt,d.j.info("SVER="+d.Aa));const Re=G[5];Re!=null&&typeof Re=="number"&&0<Re&&(f=1.5*Re,d.L=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const kt=s.g;if(kt){const cr=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cr){var P=f.h;P.g||cr.indexOf("spdy")==-1&&cr.indexOf("quic")==-1&&cr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(mi(P,P.h),P.h=null))}if(f.D){const _i=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;_i&&(f.ya=_i,Y(f.I,f.D,_i))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-s.F,d.j.info("Handshake RTT: "+d.R+"ms")),f=d;var B=s;if(f.qa=Qo(f,f.J?f.ia:null,f.W),B.K){Eo(f.h,B);var Z=B,ut=f.L;ut&&(Z.I=ut),Z.B&&(hi(Z),Zn(Z)),f.g=B}else zo(f);0<d.i.length&&or(d)}else G[0]!="stop"&&G[0]!="close"||fe(d,7);else d.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?fe(d,7):yi(d):G[0]!="noop"&&d.l&&d.l.ta(G),d.v=0)}}en(4)}catch{}}var du=class{constructor(s,c){this.g=s,this.map=c}};function vo(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ao(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function _o(s){return s.h?1:s.g?s.g.size:0}function fi(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function mi(s,c){s.g?s.g.add(c):s.h=c}function Eo(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}vo.prototype.cancel=function(){if(this.i=bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function bo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const d of s.g.values())c=c.concat(d.D);return c}return b(s.i)}function hu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(u(s)){for(var c=[],d=s.length,f=0;f<d;f++)c.push(s[f]);return c}c=[],d=0;for(f in s)c[d++]=s[f];return c}function pu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(u(s)||typeof s=="string"){var c=[];s=s.length;for(var d=0;d<s;d++)c.push(d);return c}c=[],d=0;for(const f in s)c[d++]=f;return c}}}function Io(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(u(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var d=pu(s),f=hu(s),T=f.length,P=0;P<T;P++)c.call(void 0,f[P],d&&d[P],s)}var wo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fu(s,c){if(s){s=s.split("&");for(var d=0;d<s.length;d++){var f=s[d].indexOf("="),T=null;if(0<=f){var P=s[d].substring(0,f);T=s[d].substring(f+1)}else P=s[d];c(P,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function pe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof pe){this.h=s.h,Yn(this,s.j),this.o=s.o,this.g=s.g,tr(this,s.s),this.l=s.l;var c=s.i,d=new ln;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),xo(this,d),this.m=s.m}else s&&(c=String(s).match(wo))?(this.h=!1,Yn(this,c[1]||"",!0),this.o=on(c[2]||""),this.g=on(c[3]||"",!0),tr(this,c[4]),this.l=on(c[5]||"",!0),xo(this,c[6]||"",!0),this.m=on(c[7]||"")):(this.h=!1,this.i=new ln(null,this.h))}pe.prototype.toString=function(){var s=[],c=this.j;c&&s.push(an(c,To,!0),":");var d=this.g;return(d||c=="file")&&(s.push("//"),(c=this.o)&&s.push(an(c,To,!0),"@"),s.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&s.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&s.push("/"),s.push(an(d,d.charAt(0)=="/"?yu:gu,!0))),(d=this.i.toString())&&s.push("?",d),(d=this.m)&&s.push("#",an(d,Au)),s.join("")};function Ht(s){return new pe(s)}function Yn(s,c,d){s.j=d?on(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function tr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function xo(s,c,d){c instanceof ln?(s.i=c,_u(s.i,s.h)):(d||(c=an(c,vu)),s.i=new ln(c,s.h))}function Y(s,c,d){s.i.set(c,d)}function er(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function on(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function an(s,c,d){return typeof s=="string"?(s=encodeURI(s).replace(c,mu),d&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function mu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var To=/[#\/\?@]/g,gu=/[#\?:]/g,yu=/[#\?]/g,vu=/[#\?@]/g,Au=/#/g;function ln(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Jt(s){s.g||(s.g=new Map,s.h=0,s.i&&fu(s.i,function(c,d){s.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=ln.prototype,n.add=function(s,c){Jt(this),this.i=null,s=xe(this,s);var d=this.g.get(s);return d||this.g.set(s,d=[]),d.push(c),this.h+=1,this};function Ro(s,c){Jt(s),c=xe(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Co(s,c){return Jt(s),c=xe(s,c),s.g.has(c)}n.forEach=function(s,c){Jt(this),this.g.forEach(function(d,f){d.forEach(function(T){s.call(c,T,f,this)},this)},this)},n.na=function(){Jt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let f=0;f<c.length;f++){const T=s[f];for(let P=0;P<T.length;P++)d.push(c[f])}return d},n.V=function(s){Jt(this);let c=[];if(typeof s=="string")Co(this,s)&&(c=c.concat(this.g.get(xe(this,s))));else{s=Array.from(this.g.values());for(let d=0;d<s.length;d++)c=c.concat(s[d])}return c},n.set=function(s,c){return Jt(this),this.i=null,s=xe(this,s),Co(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Po(s,c,d){Ro(s,c),0<d.length&&(s.i=null,s.g.set(xe(s,c),b(d)),s.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var f=c[d];const P=encodeURIComponent(String(f)),B=this.V(f);for(f=0;f<B.length;f++){var T=P;B[f]!==""&&(T+="="+encodeURIComponent(String(B[f]))),s.push(T)}}return this.i=s.join("&")};function xe(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function _u(s,c){c&&!s.j&&(Jt(s),s.i=null,s.g.forEach(function(d,f){var T=f.toLowerCase();f!=T&&(Ro(this,f),Po(this,T,d))},s)),s.j=c}function Eu(s,c){const d=new rn;if(l.Image){const f=new Image;f.onload=x(Zt,d,"TestLoadImage: loaded",!0,c,f),f.onerror=x(Zt,d,"TestLoadImage: error",!1,c,f),f.onabort=x(Zt,d,"TestLoadImage: abort",!1,c,f),f.ontimeout=x(Zt,d,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function bu(s,c){const d=new rn,f=new AbortController,T=setTimeout(()=>{f.abort(),Zt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(P=>{clearTimeout(T),P.ok?Zt(d,"TestPingServer: ok",!0,c):Zt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),Zt(d,"TestPingServer: error",!1,c)})}function Zt(s,c,d,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(d)}catch{}}function Iu(){this.g=new su}function wu(s,c,d){const f=d||"";try{Io(s,function(T,P){let B=T;h(T)&&(B=si(T)),c.push(f+P+"="+encodeURIComponent(B))})}catch(T){throw c.push(f+"type="+encodeURIComponent("_badmap")),T}}function nr(s){this.l=s.Ub||null,this.j=s.eb||!1}E(nr,oi),nr.prototype.g=function(){return new rr(this.l,this.j)},nr.prototype.i=function(s){return function(){return s}}({});function rr(s,c){gt.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(rr,gt),n=rr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,un(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;So(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function So(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?cn(this):un(this),this.readyState==3&&So(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,cn(this))},n.Qa=function(s){this.g&&(this.response=s,cn(this))},n.ga=function(){this.g&&cn(this)};function cn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,un(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,s.push(d[0]+": "+d[1]),d=c.next();return s.join(`\r
`)};function un(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Vo(s){let c="";return $(s,function(d,f){c+=f,c+=":",c+=d,c+=`\r
`}),c}function gi(s,c,d){t:{for(f in d){var f=!1;break t}f=!0}f||(d=Vo(d),typeof s=="string"?d!=null&&encodeURIComponent(String(d)):Y(s,c,d))}function rt(s){gt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(rt,gt);var xu=/^https?$/i,Tu=["POST","PUT"];n=rt.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ci.g(),this.v=this.o?so(this.o):so(ci),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(P){Do(this,P);return}if(s=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)d.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())d.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),T=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Tu,c,void 0))||f||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,B]of d)this.g.setRequestHeader(P,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lo(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){Do(this,P)}};function Do(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,ko(s),ir(s)}function ko(s){s.A||(s.A=!0,It(s,"complete"),It(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,It(this,"complete"),It(this,"abort"),ir(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ir(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?No(this):this.bb())},n.bb=function(){No(this)};function No(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ut(s)!=4||s.Z()!=2)){if(s.u&&Ut(s)==4)eo(s.Ea,0,s);else if(It(s,"readystatechange"),Ut(s)==4){s.h=!1;try{const B=s.Z();t:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var d;if(!(d=c)){var f;if(f=B===0){var T=String(s.D).match(wo)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),f=!xu.test(T?T.toLowerCase():"")}d=f}if(d)It(s,"complete"),It(s,"success");else{s.m=6;try{var P=2<Ut(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",ko(s)}}finally{ir(s)}}}}function ir(s,c){if(s.g){Lo(s);const d=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||It(s,"ready");try{d.onreadystatechange=f}catch{}}}function Lo(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ut(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),iu(c)}};function Bo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ru(s){const c={};s=(s.g&&2<=Ut(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(V(s[f]))continue;var d=w(s[f]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=c[T]||[];c[T]=P,P.push(d)}A(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function dn(s,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[s]||c}function Mo(s){this.Aa=0,this.i=[],this.j=new rn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=dn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=dn("baseRetryDelayMs",5e3,s),this.cb=dn("retryDelaySeedMs",1e4,s),this.Wa=dn("forwardChannelMaxRetries",2,s),this.wa=dn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new vo(s&&s.concurrentRequestLimit),this.Da=new Iu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Mo.prototype,n.la=8,n.G=1,n.connect=function(s,c,d,f){wt(0),this.W=s,this.H=c||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.I=Qo(this,null,this.W),or(this)};function yi(s){if(Oo(s),s.G==3){var c=s.U++,d=Ht(s.I);if(Y(d,"SID",s.K),Y(d,"RID",c),Y(d,"TYPE","terminate"),hn(s,d),c=new Xt(s,s.j,c),c.L=2,c.v=er(Ht(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=$o(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Zn(c)}Wo(s)}function sr(s){s.g&&(Ai(s),s.g.cancel(),s.g=null)}function Oo(s){sr(s),s.u&&(l.clearTimeout(s.u),s.u=null),ar(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function or(s){if(!Ao(s.h)&&!s.s){s.s=!0;var c=s.Ga;Kt||ce(),le||(Kt(),le=!0),Xe.add(c,s),s.B=0}}function Cu(s,c){return _o(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=nn(_(s.Ga,s,c),Uo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Xt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=m(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(T.H=P,P=null),this.P)t:{for(var c=0,d=0;d<this.i.length;d++){e:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=d;break t}if(c===4096||d===this.i.length-1){c=d+1;break t}}c=1e3}else c=1e3;c=jo(this,T,c),d=Ht(this.I),Y(d,"RID",s),Y(d,"CVER",22),this.D&&Y(d,"X-HTTP-Session-Id",this.D),hn(this,d),P&&(this.O?c="headers="+encodeURIComponent(String(Vo(P)))+"&"+c:this.m&&gi(d,this.m,P)),mi(this.h,T),this.Ua&&Y(d,"TYPE","init"),this.P?(Y(d,"$req",c),Y(d,"SID","null"),T.T=!0,di(T,d,null)):di(T,d,c),this.G=2}}else this.G==3&&(s?Fo(this,s):this.i.length==0||Ao(this.h)||Fo(this))};function Fo(s,c){var d;c?d=c.l:d=s.U++;const f=Ht(s.I);Y(f,"SID",s.K),Y(f,"RID",d),Y(f,"AID",s.T),hn(s,f),s.m&&s.o&&gi(f,s.m,s.o),d=new Xt(s,s.j,d,s.B+1),s.m===null&&(d.H=s.o),c&&(s.i=c.D.concat(s.i)),c=jo(s,d,1e3),d.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),mi(s.h,d),di(d,f,c)}function hn(s,c){s.H&&$(s.H,function(d,f){Y(c,f,d)}),s.l&&Io({},function(d,f){Y(c,f,d)})}function jo(s,c,d){d=Math.min(s.i.length,d);var f=s.l?_(s.l.Na,s.l,s):null;t:{var T=s.i;let P=-1;for(;;){const B=["count="+d];P==-1?0<d?(P=T[0].g,B.push("ofs="+P)):P=0:B.push("ofs="+P);let Z=!0;for(let ut=0;ut<d;ut++){let G=T[ut].g;const yt=T[ut].map;if(G-=P,0>G)P=Math.max(0,T[ut].g-100),Z=!1;else try{wu(yt,B,"req"+G+"_")}catch{f&&f(yt)}}if(Z){f=B.join("&");break t}}}return s=s.i.splice(0,d),c.D=s,f}function zo(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Kt||ce(),le||(Kt(),le=!0),Xe.add(c,s),s.v=0}}function vi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=nn(_(s.Fa,s),Uo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,qo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=nn(_(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),sr(this),qo(this))};function Ai(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function qo(s){s.g=new Xt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Ht(s.qa);Y(c,"RID","rpc"),Y(c,"SID",s.K),Y(c,"AID",s.T),Y(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(c,"TO",s.ja),Y(c,"TYPE","xmlhttp"),hn(s,c),s.m&&s.o&&gi(c,s.m,s.o),s.L&&(s.g.I=s.L);var d=s.g;s=s.ia,d.L=1,d.v=er(Ht(c)),d.m=null,d.P=!0,mo(d,s)}n.Za=function(){this.C!=null&&(this.C=null,sr(this),vi(this),wt(19))};function ar(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Ho(s,c){var d=null;if(s.g==c){ar(s),Ai(s),s.g=null;var f=2}else if(fi(s.h,c))d=c.D,Eo(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var T=s.B;f=Kn(),It(f,new uo(f,d)),or(s)}else zo(s);else if(T=c.s,T==3||T==0&&0<c.X||!(f==1&&Cu(s,c)||f==2&&vi(s)))switch(d&&0<d.length&&(c=s.h,c.i=c.i.concat(d)),T){case 1:fe(s,5);break;case 4:fe(s,10);break;case 3:fe(s,6);break;default:fe(s,2)}}}function Uo(s,c){let d=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(d*=2),d*c}function fe(s,c){if(s.j.info("Error code "+c),c==2){var d=_(s.fb,s),f=s.Xa;const T=!f;f=new pe(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Yn(f,"https"),er(f),T?Eu(f.toString(),d):bu(f.toString(),d)}else wt(2);s.G=0,s.l&&s.l.sa(c),Wo(s),Oo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Wo(s){if(s.G=0,s.ka=[],s.l){const c=bo(s.h);(c.length!=0||s.i.length!=0)&&(C(s.ka,c),C(s.ka,s.i),s.h.i.length=0,b(s.i),s.i.length=0),s.l.ra()}}function Qo(s,c,d){var f=d instanceof pe?Ht(d):new pe(d);if(f.g!="")c&&(f.g=c+"."+f.g),tr(f,f.s);else{var T=l.location;f=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;var P=new pe(null);f&&Yn(P,f),c&&(P.g=c),T&&tr(P,T),d&&(P.l=d),f=P}return d=s.D,c=s.ya,d&&c&&Y(f,d,c),Y(f,"VER",s.la),hn(s,f),f}function $o(s,c,d){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new rt(new nr({eb:d})):new rt(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Go(){}n=Go.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function lr(){}lr.prototype.g=function(s,c){return new Pt(s,c)};function Pt(s,c){gt.call(this),this.g=new Mo(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!V(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!V(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Te(this)}E(Pt,gt),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){yi(this.g)},Pt.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var d={};d.__data__=s,s=d}else this.u&&(d={},d.__data__=si(s),s=d);c.i.push(new du(c.Ya++,s)),c.G==3&&or(c)},Pt.prototype.N=function(){this.g.l=null,delete this.j,yi(this.g),delete this.g,Pt.aa.N.call(this)};function Ko(s){ai.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const d in c){s=d;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}E(Ko,ai);function Xo(){li.call(this),this.status=1}E(Xo,li);function Te(s){this.g=s}E(Te,Go),Te.prototype.ua=function(){It(this.g,"a")},Te.prototype.ta=function(s){It(this.g,new Ko(s))},Te.prototype.sa=function(s){It(this.g,new Xo)},Te.prototype.ra=function(){It(this.g,"b")},lr.prototype.createWebChannel=lr.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,gl=function(){return new lr},ml=function(){return Kn()},fl=de,ji={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xn.NO_ERROR=0,Xn.TIMEOUT=8,Xn.HTTP_ERROR=6,mr=Xn,ho.COMPLETE="complete",pl=ho,oo.EventType=tn,tn.OPEN="a",tn.CLOSE="b",tn.ERROR="c",tn.MESSAGE="d",gt.prototype.listen=gt.prototype.K,fn=oo,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,hl=rt}).apply(typeof ur<"u"?ur:typeof self<"u"?self:typeof window<"u"?window:{});const la="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=new sl("@firebase/firestore");function pn(){return Ae.logLevel}function F(n,...t){if(Ae.logLevel<=Q.DEBUG){const e=t.map(ss);Ae.debug(`Firestore (${He}): ${n}`,...e)}}function $t(n,...t){if(Ae.logLevel<=Q.ERROR){const e=t.map(ss);Ae.error(`Firestore (${He}): ${n}`,...e)}}function Le(n,...t){if(Ae.logLevel<=Q.WARN){const e=t.map(ss);Ae.warn(`Firestore (${He}): ${n}`,...e)}}function ss(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n="Unexpected state"){const t=`FIRESTORE (${He}) INTERNAL ASSERTION FAILED: `+n;throw $t(t),new Error(t)}function X(n,t){n||z()}function H(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends qe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ah{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class lh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ch{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new yl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new _t(t)}}class uh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new uh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ph{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){X(this.o===void 0);const r=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new hh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=fh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function K(n,t){return n<t?-1:n>t?1:0}function Be(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return lt.fromMillis(Date.now())}static fromDate(t){return lt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new lt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new lt(0,0))}static max(){return new q(new lt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,e,r){e===void 0?e=0:e>t.length&&z(),r===void 0?r=t.length-e:r>t.length-e&&z(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return wn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof wn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tt extends wn{construct(t,e,r){return new tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const mh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends wn{construct(t,e,r){return new ht(t,e,r)}static isValidIdentifier(t){return mh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(tt.fromString(t))}static fromName(t){return new j(tt.fromString(t).popFirst(5))}static empty(){return new j(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new tt(t.slice()))}}function gh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new lt(e+1,0):new lt(e,r));return new re(i,j.empty(),t)}function yh(n){return new re(n.readTime,n.key,-1)}class re{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new re(q.min(),j.empty(),-1)}static max(){return new re(q.max(),j.empty(),-1)}}function vh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:K(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _h{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Ah)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new N((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof N?e:N.resolve(e)}catch(e){return N.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):N.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):N.reject(e)}static resolve(t){return new N((e,r)=>{e(t)})}static reject(t){return new N((e,r)=>{r(t)})}static waitFor(t){return new N((e,r)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},u=>r(u))}),a=!0,o===i&&e()})}static or(t){let e=N.resolve(!1);for(const r of t)e=e.next(i=>i?N.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new N((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const h=u;e(t[h]).next(p=>{a[h]=p,++l,l===o&&r(a)},p=>i(p))}})}static doWhile(t,e){return new N((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Eh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function kn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}os.oe=-1;function Nr(n){return n==null}function Ir(n){return n===0&&1/n==-1/0}function bh(n){return typeof n=="number"&&Number.isInteger(n)&&!Ir(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function be(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Al(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){this.comparator=t,this.root=e||dt.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new dr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new dr(this.root,t,this.comparator,!1)}getReverseIterator(){return new dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new dr(this.root,t,this.comparator,!0)}}class dr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class dt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??dt.RED,this.left=i??dt.EMPTY,this.right=o??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new dt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const t=this.left.check();if(t!==this.right.check())throw z();return t+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,r,i,o){return this}insert(t,e,r){return new dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ua(this.data.getIterator())}getIteratorFrom(t){return new ua(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class ua{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new St([])}unionWith(t){let e=new pt(ht.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Be(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new _l("Invalid base64 string: "+o):o}}(t);return new ft(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Ih=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(n){if(X(!!n),typeof n=="string"){let t=0;const e=Ih.exec(n);if(X(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _e(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ls(n){const t=n.mapValue.fields.__previous_value__;return as(t)?ls(t):t}function xn(n){const t=ie(n.mapValue.fields.__local_write_time__.timestampValue);return new lt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e,r,i,o,a,l,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Tn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Tn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Tn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={mapValue:{}};function Ee(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?as(n)?4:Th(n)?9007199254740991:xh(n)?10:11:z()}function Ot(n,t){if(n===t)return!0;const e=Ee(n);if(e!==Ee(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return xn(n).isEqual(xn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ie(i.timestampValue),l=ie(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return _e(i.bytesValue).isEqual(_e(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return it(i.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return it(i.integerValue)===it(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=it(i.doubleValue),l=it(o.doubleValue);return a===l?Ir(a)===Ir(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Be(n.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(ca(a)!==ca(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ot(a[u],l[u])))return!1;return!0}(n,t);default:return z()}}function Rn(n,t){return(n.values||[]).find(e=>Ot(e,t))!==void 0}function Me(n,t){if(n===t)return 0;const e=Ee(n),r=Ee(t);if(e!==r)return K(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=it(o.integerValue||o.doubleValue),u=it(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return da(n.timestampValue,t.timestampValue);case 4:return da(xn(n),xn(t));case 5:return K(n.stringValue,t.stringValue);case 6:return function(o,a){const l=_e(o),u=_e(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=K(l[h],u[h]);if(p!==0)return p}return K(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=K(it(o.latitude),it(a.latitude));return l!==0?l:K(it(o.longitude),it(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ha(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,u,h,p;const g=o.fields||{},_=a.fields||{},x=(l=g.value)===null||l===void 0?void 0:l.arrayValue,E=(u=_.value)===null||u===void 0?void 0:u.arrayValue,b=K(((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0,((p=E==null?void 0:E.values)===null||p===void 0?void 0:p.length)||0);return b!==0?b:ha(x,E)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===hr.mapValue&&a===hr.mapValue)return 0;if(o===hr.mapValue)return 1;if(a===hr.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),h=a.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const _=K(u[g],p[g]);if(_!==0)return _;const x=Me(l[u[g]],h[p[g]]);if(x!==0)return x}return K(u.length,p.length)}(n.mapValue,t.mapValue);default:throw z()}}function da(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return K(n,t);const e=ie(n),r=ie(t),i=K(e.seconds,r.seconds);return i!==0?i:K(e.nanos,r.nanos)}function ha(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Me(e[i],r[i]);if(o)return o}return K(e.length,r.length)}function Oe(n){return zi(n)}function zi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ie(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return _e(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=zi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${zi(e.fields[a])}`;return i+"}"}(n.mapValue):z()}function pa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function qi(n){return!!n&&"integerValue"in n}function cs(n){return!!n&&"arrayValue"in n}function fa(n){return!!n&&"nullValue"in n}function ma(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gr(n){return!!n&&"mapValue"in n}function xh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function vn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return be(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=vn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=vn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Th(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!gr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=vn(e)}setAll(t){let e=ht.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=vn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());gr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];gr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){be(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Rt(vn(this.value))}}function El(n){const t=[];return be(n.fields,(e,r)=>{const i=new ht([e]);if(gr(r)){const o=El(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new St(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Et(t,0,q.min(),q.min(),q.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,i){return new Et(t,1,e,q.min(),r,i,0)}static newNoDocument(t,e){return new Et(t,2,e,q.min(),q.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,q.min(),q.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e){this.position=t,this.inclusive=e}}function ga(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),e.key):r=Me(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ya(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ot(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Rh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{}class at extends bl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ph(t,e,r):e==="array-contains"?new Dh(t,r):e==="in"?new kh(t,r):e==="not-in"?new Nh(t,r):e==="array-contains-any"?new Lh(t,r):new at(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Sh(t,r):new Vh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Me(e,this.value)):e!==null&&Ee(this.value)===Ee(e)&&this.matchesComparison(Me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends bl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Nt(t,e)}matches(t){return Il(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Il(n){return n.op==="and"}function wl(n){return Ch(n)&&Il(n)}function Ch(n){for(const t of n.filters)if(t instanceof Nt)return!1;return!0}function Hi(n){if(n instanceof at)return n.field.canonicalString()+n.op.toString()+Oe(n.value);if(wl(n))return n.filters.map(t=>Hi(t)).join(",");{const t=n.filters.map(e=>Hi(e)).join(",");return`${n.op}(${t})`}}function xl(n,t){return n instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.field.isEqual(i.field)&&Ot(r.value,i.value)}(n,t):n instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&xl(a,i.filters[l]),!0):!1}(n,t):void z()}function Tl(n){return n instanceof at?function(e){return`${e.field.canonicalString()} ${e.op} ${Oe(e.value)}`}(n):n instanceof Nt?function(e){return e.op.toString()+" {"+e.getFilters().map(Tl).join(" ,")+"}"}(n):"Filter"}class Ph extends at{constructor(t,e,r){super(t,e,r),this.key=j.fromName(r.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class Sh extends at{constructor(t,e){super(t,"in",e),this.keys=Rl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vh extends at{constructor(t,e){super(t,"not-in",e),this.keys=Rl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Rl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>j.fromName(r.referenceValue))}class Dh extends at{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return cs(e)&&Rn(e.arrayValue,this.value)}}class kh extends at{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Rn(this.value.arrayValue,e)}}class Nh extends at{constructor(t,e){super(t,"not-in",e)}matches(t){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Rn(this.value.arrayValue,e)}}class Lh extends at{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!cs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Rn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function va(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Bh(n,t,e,r,i,o,a)}function us(n){const t=H(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Hi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Nr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Oe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Oe(r)).join(",")),t.ue=e}return t.ue}function ds(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Rh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!xl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ya(n.startAt,t.startAt)&&ya(n.endAt,t.endAt)}function Ui(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Mh(n,t,e,r,i,o,a,l){return new Ue(n,t,e,r,i,o,a,l)}function Lr(n){return new Ue(n)}function Aa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Cl(n){return n.collectionGroup!==null}function An(n){const t=H(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new pt(ht.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Cn(o,r))}),e.has(ht.keyField().canonicalString())||t.ce.push(new Cn(ht.keyField(),r))}return t.ce}function Bt(n){const t=H(n);return t.le||(t.le=Oh(t,An(n))),t.le}function Oh(n,t){if(n.limitType==="F")return va(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Cn(i.field,o)});const e=n.endAt?new wr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new wr(n.startAt.position,n.startAt.inclusive):null;return va(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Wi(n,t){const e=n.filters.concat([t]);return new Ue(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Qi(n,t,e){return new Ue(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Br(n,t){return ds(Bt(n),Bt(t))&&n.limitType===t.limitType}function Pl(n){return`${us(Bt(n))}|lt:${n.limitType}`}function Pe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Tl(i)).join(", ")}]`),Nr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Oe(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Oe(i)).join(",")),`Target(${r})`}(Bt(n))}; limitType=${n.limitType})`}function Mr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):j.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of An(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=ga(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,An(r),i)||r.endAt&&!function(a,l,u){const h=ga(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,An(r),i))}(n,t)}function Fh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Sl(n){return(t,e)=>{let r=!1;for(const i of An(n)){const o=jh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function jh(n,t,e){const r=n.field.isKeyField()?j.comparator(t.key,e.key):function(o,a,l){const u=a.data.field(o),h=l.data.field(o);return u!==null&&h!==null?Me(u,h):z()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){be(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Al(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new nt(j.comparator);function Gt(){return zh}const Vl=new nt(j.comparator);function mn(...n){let t=Vl;for(const e of n)t=t.insert(e.key,e);return t}function Dl(n){let t=Vl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ge(){return _n()}function kl(){return _n()}function _n(){return new We(n=>n.toString(),(n,t)=>n.isEqual(t))}const qh=new nt(j.comparator),Hh=new pt(j.comparator);function U(...n){let t=Hh;for(const e of n)t=t.add(e);return t}const Uh=new pt(K);function Wh(){return Uh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ir(t)?"-0":t}}function Nl(n){return{integerValue:""+n}}function Qh(n,t){return bh(t)?Nl(t):hs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this._=void 0}}function $h(n,t,e){return n instanceof Pn?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&as(o)&&(o=ls(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Sn?Bl(n,t):n instanceof Vn?Ml(n,t):function(i,o){const a=Ll(i,o),l=_a(a)+_a(i.Pe);return qi(a)&&qi(i.Pe)?Nl(l):hs(i.serializer,l)}(n,t)}function Gh(n,t,e){return n instanceof Sn?Bl(n,t):n instanceof Vn?Ml(n,t):e}function Ll(n,t){return n instanceof xr?function(r){return qi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Pn extends Or{}class Sn extends Or{constructor(t){super(),this.elements=t}}function Bl(n,t){const e=Ol(t);for(const r of n.elements)e.some(i=>Ot(i,r))||e.push(r);return{arrayValue:{values:e}}}class Vn extends Or{constructor(t){super(),this.elements=t}}function Ml(n,t){let e=Ol(t);for(const r of n.elements)e=e.filter(i=>!Ot(i,r));return{arrayValue:{values:e}}}class xr extends Or{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function _a(n){return it(n.integerValue||n.doubleValue)}function Ol(n){return cs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e){this.field=t,this.transform=e}}function Xh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Sn&&i instanceof Sn||r instanceof Vn&&i instanceof Vn?Be(r.elements,i.elements,Ot):r instanceof xr&&i instanceof xr?Ot(r.Pe,i.Pe):r instanceof Pn&&i instanceof Pn}(n.transform,t.transform)}class Jh{constructor(t,e){this.version=t,this.transformResults=e}}class xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xt}static exists(t){return new xt(void 0,t)}static updateTime(t){return new xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Fr{}function Fl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new jr(n.key,xt.none()):new Nn(n.key,n.data,xt.none());{const e=n.data,r=Rt.empty();let i=new pt(ht.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new oe(n.key,r,new St(i.toArray()),xt.none())}}function Zh(n,t,e){n instanceof Nn?function(i,o,a){const l=i.value.clone(),u=ba(i.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof oe?function(i,o,a){if(!yr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=ba(i.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(jl(i)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function En(n,t,e,r){return n instanceof Nn?function(o,a,l,u){if(!yr(o.precondition,a))return l;const h=o.value.clone(),p=Ia(o.fieldTransforms,u,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof oe?function(o,a,l,u){if(!yr(o.precondition,a))return l;const h=Ia(o.fieldTransforms,u,a),p=a.data;return p.setAll(jl(o)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(g=>g.field))}(n,t,e,r):function(o,a,l){return yr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Yh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Ll(r.transform,i||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(r.field,o))}return e||null}function Ea(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Be(r,i,(o,a)=>Xh(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Nn extends Fr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oe extends Fr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function jl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ba(n,t,e){const r=new Map;X(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,Gh(a,l,e[i]))}return r}function Ia(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,$h(o,a,t))}return r}class jr extends Fr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tp extends Fr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Zh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=En(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=En(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=kl();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const u=Fl(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&Be(this.mutations,t.mutations,(e,r)=>Ea(e,r))&&Be(this.baseMutations,t.baseMutations,(e,r)=>Ea(e,r))}}class ps{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){X(t.mutations.length===r.length);let i=function(){return qh}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new ps(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,W;function ip(n){switch(n){default:return z();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function zl(n){if(n===void 0)return $t("GRPC error has no .code"),S.UNKNOWN;switch(n){case ot.OK:return S.OK;case ot.CANCELLED:return S.CANCELLED;case ot.UNKNOWN:return S.UNKNOWN;case ot.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ot.INTERNAL:return S.INTERNAL;case ot.UNAVAILABLE:return S.UNAVAILABLE;case ot.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ot.NOT_FOUND:return S.NOT_FOUND;case ot.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ot.ABORTED:return S.ABORTED;case ot.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ot.DATA_LOSS:return S.DATA_LOSS;default:return z()}}(W=ot||(ot={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=new ye([4294967295,4294967295],0);function wa(n){const t=sp().encode(n),e=new dl;return e.update(t),new Uint8Array(e.digest())}function xa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ye([e,r],0),new ye([i,o],0)]}class fs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new gn(`Invalid padding: ${e}`);if(r<0)throw new gn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new gn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new gn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ye.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(ye.fromNumber(r)));return i.compare(op)===1&&(i=new ye([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=wa(t),[r,i]=xa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new fs(o,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=wa(t),[r,i]=xa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class gn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Ln.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new zr(q.min(),i,new nt(K),Gt(),U())}}class Ln{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Ln(r,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class ql{constructor(t,e){this.targetId=t,this.me=e}}class Hl{constructor(t,e,r=ft.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Ta{constructor(){this.fe=0,this.ge=Ca(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),r=U();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:z()}}),new Ln(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Ca()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ap{constructor(t){this.Le=t,this.Be=new Map,this.ke=Gt(),this.qe=Ra(),this.Qe=new nt(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:z()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Ui(o))if(r===0){const a=new j(o.path);this.Ue(e,a,Et.newNoDocument(a,q.min()))}else X(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=_e(r).toUint8Array()}catch(u){if(u instanceof _l)return Le("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new fs(a,i,o)}catch(u){return Le(u instanceof gn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&Ui(l.target)){const u=new j(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Et.newNoDocument(u,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=U();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new zr(t,e,this.Qe,this.ke,r);return this.ke=Gt(),this.qe=Ra(),this.Qe=new nt(K),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ta,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new pt(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||F("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ta),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ra(){return new nt(j.comparator)}function Ca(){return new nt(j.comparator)}const lp={asc:"ASCENDING",desc:"DESCENDING"},cp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},up={and:"AND",or:"OR"};class dp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function $i(n,t){return n.useProto3Json||Nr(t)?t:{value:t}}function Tr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ul(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function hp(n,t){return Tr(n,t.toTimestamp())}function Mt(n){return X(!!n),q.fromTimestamp(function(e){const r=ie(e);return new lt(r.seconds,r.nanos)}(n))}function ms(n,t){return Gi(n,t).canonicalString()}function Gi(n,t){const e=function(i){return new tt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Wl(n){const t=tt.fromString(n);return X(Xl(t)),t}function Ki(n,t){return ms(n.databaseId,t.path)}function xi(n,t){const e=Wl(t);if(e.get(1)!==n.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j($l(e))}function Ql(n,t){return ms(n.databaseId,t)}function pp(n){const t=Wl(n);return t.length===4?tt.emptyPath():$l(t)}function Xi(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $l(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Pa(n,t,e){return{name:Ki(n,t),fields:e.value.mapValue.fields}}function fp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(h,p){return h.useProto3Json?(X(p===void 0||typeof p=="string"),ft.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ft.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const p=h.code===void 0?S.UNKNOWN:zl(h.code);return new O(p,h.message||"")}(a);e=new Hl(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=xi(n,r.document.name),o=Mt(r.document.updateTime),a=r.document.createTime?Mt(r.document.createTime):q.min(),l=new Rt({mapValue:{fields:r.document.fields}}),u=Et.newFoundDocument(i,o,a,l),h=r.targetIds||[],p=r.removedTargetIds||[];e=new vr(h,p,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=xi(n,r.document),o=r.readTime?Mt(r.readTime):q.min(),a=Et.newNoDocument(i,o),l=r.removedTargetIds||[];e=new vr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=xi(n,r.document),o=r.removedTargetIds||[];e=new vr([],o,i,null)}else{if(!("filter"in t))return z();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new rp(i,o),l=r.targetId;e=new ql(l,a)}}return e}function mp(n,t){let e;if(t instanceof Nn)e={update:Pa(n,t.key,t.value)};else if(t instanceof jr)e={delete:Ki(n,t.key)};else if(t instanceof oe)e={update:Pa(n,t.key,t.data),updateMask:wp(t.fieldMask)};else{if(!(t instanceof tp))return z();e={verify:Ki(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof Pn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Sn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Vn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw z()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:hp(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:z()}(n,t.precondition)),e}function gp(n,t){return n&&n.length>0?(X(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?Mt(i.updateTime):Mt(o);return a.isEqual(q.min())&&(a=Mt(o)),new Jh(a,i.transformResults||[])}(e,t))):[]}function yp(n,t){return{documents:[Ql(n,t.path)]}}function vp(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ql(n,i);const o=function(h){if(h.length!==0)return Kl(Nt.create(h,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(h){if(h.length!==0)return h.map(p=>function(_){return{field:Se(_.field),direction:Ep(_.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=$i(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:i}}function Ap(n){let t=pp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){X(r===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(g){const _=Gl(g);return _ instanceof Nt&&wl(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(_=>function(E){return new Cn(Ve(E.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(_))}(e.orderBy));let l=null;e.limit&&(l=function(g){let _;return _=typeof g=="object"?g.value:g,Nr(_)?null:_}(e.limit));let u=null;e.startAt&&(u=function(g){const _=!!g.before,x=g.values||[];return new wr(x,_)}(e.startAt));let h=null;return e.endAt&&(h=function(g){const _=!g.before,x=g.values||[];return new wr(x,_)}(e.endAt)),Mh(t,i,a,o,l,"F",u,h)}function _p(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Gl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ve(e.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ve(e.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ve(e.unaryFilter.field);return at.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ve(e.unaryFilter.field);return at.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(e){return at.create(Ve(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Nt.create(e.compositeFilter.filters.map(r=>Gl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(n):z()}function Ep(n){return lp[n]}function bp(n){return cp[n]}function Ip(n){return up[n]}function Se(n){return{fieldPath:n.canonicalString()}}function Ve(n){return ht.fromServerFormat(n.fieldPath)}function Kl(n){return n instanceof at?function(e){if(e.op==="=="){if(ma(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NAN"}};if(fa(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ma(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NAN"}};if(fa(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Se(e.field),op:bp(e.op),value:e.value}}}(n):n instanceof Nt?function(e){const r=e.getFilters().map(i=>Kl(i));return r.length===1?r[0]:{compositeFilter:{op:Ip(e.op),filters:r}}}(n):z()}function wp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Xl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,e,r,i,o=q.min(),a=q.min(),l=ft.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new Yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(t){this.ct=t}}function Tp(n){const t=Ap({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.un=new Cp}addToCollectionParentIndex(t,e){return this.un.add(e),N.resolve()}getCollectionParents(t,e){return N.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return N.resolve()}deleteFieldIndex(t,e){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,e){return N.resolve()}getDocumentsMatchingTarget(t,e){return N.resolve(null)}getIndexType(t,e){return N.resolve(0)}getFieldIndexes(t,e){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,e){return N.resolve(re.min())}getMinOffsetFromCollectionGroup(t,e){return N.resolve(re.min())}updateCollectionGroup(t,e,r){return N.resolve()}updateIndexEntries(t,e){return N.resolve()}}class Cp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new pt(tt.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new pt(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Fe(0)}static kn(){return new Fe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.changes=new We(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?N.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&En(r.mutation,i,St.empty(),lt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const i=ge();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=mn();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ge();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let o=Gt();const a=_n(),l=function(){return _n()}();return e.forEach((u,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof oe)?o=o.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),En(p.mutation,h,p.mutation.getFieldMask(),lt.now())):a.set(h.key,St.empty())}),this.recalculateAndSaveOverlays(t,o).next(u=>(u.forEach((h,p)=>a.set(h,p)),e.forEach((h,p)=>{var g;return l.set(h,new Sp(p,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,e){const r=_n();let i=new nt((a,l)=>a-l),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let p=r.get(u)||St.empty();p=l.applyToLocalView(h,p),r.set(u,p);const g=(i.get(l.batchId)||U()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,g=kl();p.forEach(_=>{if(!o.has(_)){const x=Fl(e.get(_),r.get(_));x!==null&&g.set(_,x),o=o.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,g))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Cl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):N.resolve(ge());let l=-1,u=o;return a.next(h=>N.forEach(h,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),o.get(p)?N.resolve():this.remoteDocumentCache.getEntry(t,p).next(_=>{u=u.insert(p,_)}))).next(()=>this.populateOverlays(t,h,o)).next(()=>this.computeViews(t,u,h,U())).next(p=>({batchId:l,changes:Dl(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(r=>{let i=mn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=mn();return this.indexManager.getCollectionParents(t,o).next(l=>N.forEach(l,u=>{const h=function(g,_){return new Ue(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,u.child(o));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next(p=>{p.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((u,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,Et.newInvalidDocument(p)))});let l=mn();return a.forEach((u,h)=>{const p=o.get(u);p!==void 0&&En(p.mutation,h,St.empty(),lt.now()),Mr(e,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return N.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Mt(i.createTime)}}(e)),N.resolve()}getNamedQuery(t,e){return N.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Tp(i.bundledQuery),readTime:Mt(i.readTime)}}(e)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.overlays=new nt(j.comparator),this.Ir=new Map}getOverlay(t,e){return N.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ge();return N.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),N.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(t,e,r){const i=ge(),o=e.length+1,a=new j(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new nt((h,p)=>h-p);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let p=o.get(h.largestBatchId);p===null&&(p=ge(),o=o.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=ge(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return N.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new np(e,r));let o=this.Ir.get(e);o===void 0&&(o=U(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return N.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.Tr=new pt(ct.Er),this.dr=new pt(ct.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new ct(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new ct(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new j(new tt([])),r=new ct(e,t),i=new ct(e,t+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new j(new tt([])),r=new ct(e,t),i=new ct(e,t+1);let o=U();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ct(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ct{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return j.comparator(t.key,e.key)||K(t.wr,e.wr)}static Ar(t,e){return K(t.wr,e.wr)||j.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new pt(ct.Er)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ep(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new ct(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(t,e){return N.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),o=i<0?0:i;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ct(e,0),i=new ct(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);o.push(l)}),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new pt(K);return e.forEach(i=>{const o=new ct(i,0),a=new ct(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;j.isDocumentKey(o)||(o=o.child(""));const a=new ct(new j(o),0);let l=new pt(K);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),N.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){X(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(e.mutations,i=>{const o=new ct(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new ct(e,0),i=this.br.firstAfterOrEqual(r);return N.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(t){this.Mr=t,this.docs=function(){return new nt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return N.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let r=Gt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Gt();const a=e.path,l=new j(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||vh(yh(p),r)<=0||(i.has(p.key)||Mr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(t,e,r,i){z()}Or(t,e){return N.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Mp(this)}getSize(t){return N.resolve(this.size)}}class Mp extends Pp{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),N.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(t){this.persistence=t,this.Nr=new We(e=>us(e),ds),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new gs,this.targetCount=0,this.kr=Fe.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),N.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Fe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,N.resolve()}updateTargetData(t,e){return this.Kn(e),N.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),N.waitFor(o).next(()=>i)}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return N.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),N.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),N.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),N.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return N.resolve(r)}containsKey(t,e){return N.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,e){this.qr={},this.overlays={},this.Qr=new os(0),this.Kr=!1,this.Kr=!0,this.$r=new Np,this.referenceDelegate=t(this),this.Ur=new Op(this),this.indexManager=new Rp,this.remoteDocumentCache=function(i){return new Bp(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new xp(e),this.Gr=new Dp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new kp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Lp(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){F("MemoryPersistence","Starting transaction:",t);const i=new jp(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class jp extends _h{constructor(t){super(),this.currentSequenceNumber=t}}class ys{constructor(t){this.persistence=t,this.Jr=new gs,this.Yr=null}static Zr(t){return new ys(t)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),N.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),N.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const i=j.fromPath(r);return this.ei(t,i).next(o=>{o||e.removeEntry(i,q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return N.or([()=>N.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new vs(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Hu()?8:Eh(zu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new zp;return this.Xi(t,e,a).next(l=>{if(o.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>o.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(pn()<=Q.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(pn()<=Q.DEBUG&&F("QueryEngine","Query:",Pe(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(pn()<=Q.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bt(e))):N.resolve())}Yi(t,e){if(Aa(e))return N.resolve(null);let r=Bt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Qi(e,null,"F"),r=Bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=U(...o);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.ts(e,l);return this.ns(e,h,a,u.readTime)?this.Yi(t,Qi(e,null,"F")):this.rs(t,h,e,u)}))})))}Zi(t,e,r,i){return Aa(e)||i.isEqual(q.min())?N.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,i)?N.resolve(null):(pn()<=Q.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pe(e)),this.rs(t,a,e,gh(i,-1)).next(l=>l))})}ts(t,e){let r=new pt(Sl(t));return e.forEach((i,o)=>{Mr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,r){return pn()<=Q.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Pe(e)),this.Ji.getDocumentsMatchingQuery(t,e,re.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new nt(K),this._s=new We(o=>us(o),ds),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Up(n,t,e,r){return new Hp(n,t,e,r)}async function Jl(n,t){const e=H(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let u=U();for(const h of i){a.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of o){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return e.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Wp(n,t){const e=H(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const g=h.batch,_=g.keys();let x=N.resolve();return _.forEach(E=>{x=x.next(()=>p.getEntry(u,E)).next(b=>{const C=h.docVersions.get(E);X(C!==null),b.version.compareTo(C)<0&&(g.applyToRemoteDocument(b,h),b.isValidDocument()&&(b.setReadTime(h.commitVersion),p.addEntry(b)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=U();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Zl(n){const t=H(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Qp(n,t){const e=H(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const l=[];t.targetChanges.forEach((p,g)=>{const _=i.get(g);if(!_)return;l.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,g).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,g)));let x=_.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(g)!==null?x=x.withResumeToken(ft.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):p.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(p.resumeToken,r)),i=i.insert(g,x),function(b,C,D){return b.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(_,x,p)&&l.push(e.Ur.updateTargetData(o,x))});let u=Gt(),h=U();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push($p(o,a,t.documentUpdates).next(p=>{u=p.Ps,h=p.Is})),!r.isEqual(q.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(g=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return N.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,u,h)).next(()=>u)}).then(o=>(e.os=i,o))}function $p(n,t,e){let r=U(),i=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Gt();return e.forEach((l,u)=>{const h=o.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(q.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):F("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function Gp(n,t){const e=H(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Kp(n,t){const e=H(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(o=>o?(i=o,N.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new Yt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Ji(n,t,e){const r=H(n),i=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!kn(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Sa(n,t,e){const r=H(n);let i=q.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,p){const g=H(u),_=g._s.get(p);return _!==void 0?N.resolve(g.os.get(_)):g.Ur.getTargetData(h,p)}(r,a,Bt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:q.min(),e?o:U())).next(l=>(Xp(r,Fh(t),l),{documents:l,Ts:o})))}function Xp(n,t,e){let r=n.us.get(t)||q.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Va{constructor(){this.activeTargetIds=Wh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jp{constructor(){this.so=new Va,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Va,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr=null;function Ti(){return pr===null?pr=function(){return 268435456+Math.round(2147483648*Math.random())}():pr++,"0x"+pr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection";class ef extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,r,i,o,a){const l=Ti(),u=this.xo(e,r.toUriEncodedString());F("RestConnection",`Sending RPC '${e}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,o,a),this.No(e,u,h,i).then(p=>(F("RestConnection",`Received RPC '${e}' ${l}: `,p),p),p=>{throw Le("RestConnection",`RPC '${e}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(e,r,i,o,a,l){return this.Mo(e,r,i,o,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+He}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const i=Yp[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const o=Ti();return new Promise((a,l)=>{const u=new hl;u.setWithCredentials(!0),u.listenOnce(pl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case mr.NO_ERROR:const p=u.getResponseJson();F(At,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case mr.TIMEOUT:F(At,`RPC '${t}' ${o} timed out`),l(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case mr.HTTP_ERROR:const g=u.getStatus();if(F(At,`RPC '${t}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const x=_==null?void 0:_.error;if(x&&x.status&&x.message){const E=function(C){const D=C.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(D)>=0?D:S.UNKNOWN}(x.status);l(new O(E,x.message))}else l(new O(S.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new O(S.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{F(At,`RPC '${t}' ${o} completed.`)}});const h=JSON.stringify(i);F(At,`RPC '${t}' ${o} sending request:`,i),u.send(e,"POST",h,r,15)})}Bo(t,e,r){const i=Ti(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=gl(),l=ml(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const p=o.join("");F(At,`Creating RPC '${t}' stream ${i}: ${p}`,u);const g=a.createWebChannel(p,u);let _=!1,x=!1;const E=new tf({Io:C=>{x?F(At,`Not sending because RPC '${t}' stream ${i} is closed:`,C):(_||(F(At,`Opening RPC '${t}' stream ${i} transport.`),g.open(),_=!0),F(At,`RPC '${t}' stream ${i} sending:`,C),g.send(C))},To:()=>g.close()}),b=(C,D,V)=>{C.listen(D,L=>{try{V(L)}catch(M){setTimeout(()=>{throw M},0)}})};return b(g,fn.EventType.OPEN,()=>{x||(F(At,`RPC '${t}' stream ${i} transport opened.`),E.yo())}),b(g,fn.EventType.CLOSE,()=>{x||(x=!0,F(At,`RPC '${t}' stream ${i} transport closed`),E.So())}),b(g,fn.EventType.ERROR,C=>{x||(x=!0,Le(At,`RPC '${t}' stream ${i} transport errored:`,C),E.So(new O(S.UNAVAILABLE,"The operation could not be completed")))}),b(g,fn.EventType.MESSAGE,C=>{var D;if(!x){const V=C.data[0];X(!!V);const L=V,M=L.error||((D=L[0])===null||D===void 0?void 0:D.error);if(M){F(At,`RPC '${t}' stream ${i} received error:`,M);const k=M.status;let $=function(v){const I=ot[v];if(I!==void 0)return zl(I)}(k),A=M.message;$===void 0&&($=S.INTERNAL,A="Unknown error status: "+k+" with message "+M.message),x=!0,E.So(new O($,A)),g.close()}else F(At,`RPC '${t}' stream ${i} received:`,V),E.bo(V)}}),b(l,fl.STAT_EVENT,C=>{C.stat===ji.PROXY?F(At,`RPC '${t}' stream ${i} detected buffering proxy`):C.stat===ji.NOPROXY&&F(At,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function Ri(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n){return new dp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e,r,i,o,a,l,u){this.ui=t,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Yl(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?($t(e.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nf extends tc{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=fp(this.serializer,t),r=function(o){if(!("targetChange"in o))return q.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Mt(a.readTime):q.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Xi(this.serializer),e.addTarget=function(o,a){let l;const u=a.target;if(l=Ui(u)?{documents:yp(o,u)}:{query:vp(o,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ul(o,a.resumeToken);const h=$i(o,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(q.min())>0){l.readTime=Tr(o,a.snapshotVersion.toTimestamp());const h=$i(o,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=_p(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Xi(this.serializer),e.removeTarget=t,this.a_(e)}}class rf extends tc{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return X(!!t.streamToken),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=gp(t.writeResults,t.commitTime),r=Mt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Xi(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>mp(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Gi(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(S.UNKNOWN,o.toString())})}Lo(t,e,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,Gi(e,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class of{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($t(e),this.D_=!1):F("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ie(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=H(u);h.L_.add(4),await Bn(h),h.q_.set("Unknown"),h.L_.delete(4),await Hr(h)}(this))})}),this.q_=new of(r,i)}}async function Hr(n){if(Ie(n))for(const t of n.B_)await t(!0)}async function Bn(n){for(const t of n.B_)await t(!1)}function ec(n,t){const e=H(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),bs(e)?Es(e):Qe(e).r_()&&_s(e,t))}function As(n,t){const e=H(n),r=Qe(e);e.N_.delete(t),r.r_()&&nc(e,t),e.N_.size===0&&(r.r_()?r.o_():Ie(e)&&e.q_.set("Unknown"))}function _s(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Qe(n).A_(t)}function nc(n,t){n.Q_.xe(t),Qe(n).R_(t)}function Es(n){n.Q_=new ap({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Qe(n).start(),n.q_.v_()}function bs(n){return Ie(n)&&!Qe(n).n_()&&n.N_.size>0}function Ie(n){return H(n).L_.size===0}function rc(n){n.Q_=void 0}async function lf(n){n.q_.set("Online")}async function cf(n){n.N_.forEach((t,e)=>{_s(n,t)})}async function uf(n,t){rc(n),bs(n)?(n.q_.M_(t),Es(n)):n.q_.set("Unknown")}async function df(n,t,e){if(n.q_.set("Online"),t instanceof Hl&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,t)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Rr(n,r)}else if(t instanceof vr?n.Q_.Ke(t):t instanceof ql?n.Q_.He(t):n.Q_.We(t),!e.isEqual(q.min()))try{const r=await Zl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=o.N_.get(h);p&&o.N_.set(h,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const p=o.N_.get(u);if(!p)return;o.N_.set(u,p.withResumeToken(ft.EMPTY_BYTE_STRING,p.snapshotVersion)),nc(o,u);const g=new Yt(p.target,u,h,p.sequenceNumber);_s(o,g)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Rr(n,r)}}async function Rr(n,t,e){if(!kn(t))throw t;n.L_.add(1),await Bn(n),n.q_.set("Offline"),e||(e=()=>Zl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Hr(n)})}function ic(n,t){return t().catch(e=>Rr(n,e,t))}async function Ur(n){const t=H(n),e=se(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;hf(t);)try{const i=await Gp(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,pf(t,i)}catch(i){await Rr(t,i)}sc(t)&&oc(t)}function hf(n){return Ie(n)&&n.O_.length<10}function pf(n,t){n.O_.push(t);const e=se(n);e.r_()&&e.V_&&e.m_(t.mutations)}function sc(n){return Ie(n)&&!se(n).n_()&&n.O_.length>0}function oc(n){se(n).start()}async function ff(n){se(n).p_()}async function mf(n){const t=se(n);for(const e of n.O_)t.m_(e.mutations)}async function gf(n,t,e){const r=n.O_.shift(),i=ps.from(r,t,e);await ic(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ur(n)}async function yf(n,t){t&&se(n).V_&&await async function(r,i){if(function(a){return ip(a)&&a!==S.ABORTED}(i.code)){const o=r.O_.shift();se(r).s_(),await ic(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ur(r)}}(n,t),sc(n)&&oc(n)}async function ka(n,t){const e=H(n);e.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Ie(e);e.L_.add(3),await Bn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Hr(e)}async function vf(n,t){const e=H(n);t?(e.L_.delete(2),await Hr(e)):t||(e.L_.add(2),await Bn(e),e.q_.set("Unknown"))}function Qe(n){return n.K_||(n.K_=function(e,r,i){const o=H(e);return o.w_(),new nf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:lf.bind(null,n),Ro:cf.bind(null,n),mo:uf.bind(null,n),d_:df.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),bs(n)?Es(n):n.q_.set("Unknown")):(await n.K_.stop(),rc(n))})),n.K_}function se(n){return n.U_||(n.U_=function(e,r,i){const o=H(e);return o.w_(),new rf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ff.bind(null,n),mo:yf.bind(null,n),f_:mf.bind(null,n),g_:gf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Ur(n)):(await n.U_.stop(),n.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new Is(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ws(n,t){if($t("AsyncQueue",`${t}: ${n}`),kn(n))return new O(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.comparator=t?(e,r)=>t(e,r)||j.comparator(e.key,r.key):(e,r)=>j.comparator(e.key,r.key),this.keyedMap=mn(),this.sortedSet=new nt(this.comparator)}static emptySet(t){return new ke(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ke)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ke;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.W_=new nt(j.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):z():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class je{constructor(t,e,r,i,o,a,l,u,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new je(t,e,ke.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Br(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class _f{constructor(){this.queries=La(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=H(e),o=i.queries;i.queries=La(),o.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function La(){return new We(n=>Pl(n),Br)}async function xs(n,t){const e=H(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(r=2):(o=new Af,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=ws(a,`Initialization of query '${Pe(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Rs(e)}async function Ts(n,t){const e=H(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Ef(n,t){const e=H(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Rs(e)}function bf(n,t,e){const r=H(n),i=r.queries.get(t);if(i)for(const o of i.j_)o.onError(e);r.queries.delete(t)}function Rs(n){n.Y_.forEach(t=>{t.next()})}var Zi,Ba;(Ba=Zi||(Zi={})).ea="default",Ba.Cache="cache";class Cs{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new je(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=je.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Zi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.key=t}}class lc{constructor(t){this.key=t}}class If{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=Sl(t),this.Ra=new ke(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Na,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,g)=>{const _=i.get(p),x=Mr(this.query,g)?g:null,E=!!_&&this.mutatedKeys.has(_.key),b=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let C=!1;_&&x?_.data.isEqual(x.data)?E!==b&&(r.track({type:3,doc:x}),C=!0):this.ga(_,x)||(r.track({type:2,doc:x}),C=!0,(u&&this.Aa(x,u)>0||h&&this.Aa(x,h)<0)&&(l=!0)):!_&&x?(r.track({type:0,doc:x}),C=!0):_&&!x&&(r.track({type:1,doc:_}),C=!0,(u||h)&&(l=!0)),C&&(x?(a=a.add(x),o=b?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:l,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,g)=>function(x,E){const b=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return b(x)-b(E)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=e&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new je(this.query,t.Ra,o,a,t.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Na,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=U(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new lc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new ac(r))}),e}ba(t){this.Ta=t.Ts,this.da=U();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return je.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class xf{constructor(t){this.key=t,this.va=!1}}class Tf{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new We(l=>Pl(l),Br),this.Ma=new Map,this.xa=new Set,this.Oa=new nt(j.comparator),this.Na=new Map,this.La=new gs,this.Ba={},this.ka=new Map,this.qa=Fe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Rf(n,t,e=!0){const r=fc(n);let i;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await cc(r,t,e,!0),i}async function Cf(n,t){const e=fc(n);await cc(e,t,!0,!1)}async function cc(n,t,e,r){const i=await Kp(n.localStore,Bt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Pf(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&ec(n.remoteStore,i),l}async function Pf(n,t,e,r,i){n.Ka=(g,_,x)=>async function(b,C,D,V){let L=C.view.ma(D);L.ns&&(L=await Sa(b.localStore,C.query,!1).then(({documents:A})=>C.view.ma(A,L)));const M=V&&V.targetChanges.get(C.targetId),k=V&&V.targetMismatches.get(C.targetId)!=null,$=C.view.applyChanges(L,b.isPrimaryClient,M,k);return Oa(b,C.targetId,$.wa),$.snapshot}(n,g,_,x);const o=await Sa(n.localStore,t,!0),a=new If(t,o.Ts),l=a.ma(o.documents),u=Ln.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);Oa(n,e,h.wa);const p=new wf(t,e,a);return n.Fa.set(t,p),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),h.snapshot}async function Sf(n,t,e){const r=H(n),i=r.Fa.get(t),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!Br(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ji(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&As(r.remoteStore,i.targetId),Yi(r,i.targetId)}).catch(Dn)):(Yi(r,i.targetId),await Ji(r.localStore,i.targetId,!0))}async function Vf(n,t){const e=H(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),As(e.remoteStore,r.targetId))}async function Df(n,t,e){const r=Ff(n);try{const i=await function(a,l){const u=H(a),h=lt.now(),p=l.reduce((x,E)=>x.add(E.key),U());let g,_;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let E=Gt(),b=U();return u.cs.getEntries(x,p).next(C=>{E=C,E.forEach((D,V)=>{V.isValidDocument()||(b=b.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,E)).next(C=>{g=C;const D=[];for(const V of l){const L=Yh(V,g.get(V.key).overlayedDocument);L!=null&&D.push(new oe(V.key,L,El(L.value.mapValue),xt.exists(!0)))}return u.mutationQueue.addMutationBatch(x,h,D,l)}).next(C=>{_=C;const D=C.applyToLocalDocumentSet(g,b);return u.documentOverlayCache.saveOverlays(x,C.batchId,D)})}).then(()=>({batchId:_.batchId,changes:Dl(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new nt(K)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,e),await Mn(r,i.changes),await Ur(r.remoteStore)}catch(i){const o=ws(i,"Failed to persist write");e.reject(o)}}async function uc(n,t){const e=H(n);try{const r=await Qp(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?X(a.va):i.removedDocuments.size>0&&(X(a.va),a.va=!1))}),await Mn(e,r,t)}catch(r){await Dn(r)}}function Ma(n,t,e){const r=H(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=H(a);u.onlineState=l;let h=!1;u.queries.forEach((p,g)=>{for(const _ of g.j_)_.Z_(l)&&(h=!0)}),h&&Rs(u)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kf(n,t,e){const r=H(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),o=i&&i.key;if(o){let a=new nt(j.comparator);a=a.insert(o,Et.newNoDocument(o,q.min()));const l=U().add(o),u=new zr(q.min(),new Map,new nt(K),a,l);await uc(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(t),Ps(r)}else await Ji(r.localStore,t,!1).then(()=>Yi(r,t,e)).catch(Dn)}async function Nf(n,t){const e=H(n),r=t.batch.batchId;try{const i=await Wp(e.localStore,t);hc(e,r,null),dc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Mn(e,i)}catch(i){await Dn(i)}}async function Lf(n,t,e){const r=H(n);try{const i=await function(a,l){const u=H(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(X(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,t);hc(r,t,e),dc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Mn(r,i)}catch(i){await Dn(i)}}function dc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function hc(n,t,e){const r=H(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Yi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||pc(n,r)})}function pc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(As(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Ps(n))}function Oa(n,t,e){for(const r of e)r instanceof ac?(n.La.addReference(r.key,t),Bf(n,r)):r instanceof lc?(F("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||pc(n,r.key)):z()}function Bf(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(F("SyncEngine","New document in limbo: "+e),n.xa.add(r),Ps(n))}function Ps(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new j(tt.fromString(t)),r=n.qa.next();n.Na.set(r,new xf(e)),n.Oa=n.Oa.insert(e,r),ec(n.remoteStore,new Yt(Bt(Lr(e.path)),r,"TargetPurposeLimboResolution",os.oe))}}async function Mn(n,t,e){const r=H(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,t,e).then(h=>{var p;if((h||e)&&r.isPrimaryClient){const g=h?!h.fromCache:(p=e==null?void 0:e.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=vs.Wi(u.targetId,h);o.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const p=H(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>N.forEach(h,_=>N.forEach(_.$i,x=>p.persistence.referenceDelegate.addReference(g,_.targetId,x)).next(()=>N.forEach(_.Ui,x=>p.persistence.referenceDelegate.removeReference(g,_.targetId,x)))))}catch(g){if(!kn(g))throw g;F("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const x=p.os.get(_),E=x.snapshotVersion,b=x.withLastLimboFreeSnapshotVersion(E);p.os=p.os.insert(_,b)}}}(r.localStore,o))}async function Mf(n,t){const e=H(n);if(!e.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const r=await Jl(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(l=>{l.forEach(u=>{u.reject(new O(S.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Mn(e,r.hs)}}function Of(n,t){const e=H(n),r=e.Na.get(t);if(r&&r.va)return U().add(r.key);{let i=U();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const l=e.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function fc(n){const t=H(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=uc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Of.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kf.bind(null,t),t.Ca.d_=Ef.bind(null,t.eventManager),t.Ca.$a=bf.bind(null,t.eventManager),t}function Ff(n){const t=H(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Nf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Lf.bind(null,t),t}class Cr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=qr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Up(this.persistence,new qp,t.initialUser,this.serializer)}Ga(t){return new Fp(ys.Zr,this.serializer)}Wa(t){return new Jp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cr.provider={build:()=>new Cr};class ts{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ma(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mf.bind(null,this.syncEngine),await vf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _f}()}createDatastore(t){const e=qr(t.databaseInfo.databaseId),r=function(o){return new ef(o)}(t.databaseInfo);return function(o,a,l,u){return new sf(o,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,l){return new af(r,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Ma(this.syncEngine,e,0),function(){return Da.D()?new Da:new Zp}())}createSyncEngine(t,e){return function(i,o,a,l,u,h,p){const g=new Tf(i,o,a,l,u,h);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=H(i);F("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Bn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ts.provider={build:()=>new ts};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):$t("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=vl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ws(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ci(n,t){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Jl(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Fa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await zf(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ka(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ka(t.remoteStore,i)),n._onlineComponents=t}async function zf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ci(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Le("Error using user provided cache. Falling back to memory cache: "+e),await Ci(n,new Cr)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Ci(n,new Cr);return n._offlineComponents}async function mc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Fa(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Fa(n,new ts))),n._onlineComponents}function qf(n){return mc(n).then(t=>t.syncEngine)}async function Pr(n){const t=await mc(n),e=t.eventManager;return e.onListen=Rf.bind(null,t.syncEngine),e.onUnlisten=Sf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Cf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vf.bind(null,t.syncEngine),e}function Hf(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,h){const p=new Ss({next:_=>{p.Za(),a.enqueueAndForget(()=>Ts(o,g));const x=_.docs.has(l);!x&&_.fromCache?h.reject(new O(S.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&_.fromCache&&u&&u.source==="server"?h.reject(new O(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Cs(Lr(l.path),p,{includeMetadataChanges:!0,_a:!0});return xs(o,g)}(await Pr(n),n.asyncQueue,t,e,r)),r.promise}function Uf(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,h){const p=new Ss({next:_=>{p.Za(),a.enqueueAndForget(()=>Ts(o,g)),_.fromCache&&u.source==="server"?h.reject(new O(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Cs(l,p,{includeMetadataChanges:!0,_a:!0});return xs(o,g)}(await Pr(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n,t,e){if(!e)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Wf(n,t,e,r){if(t===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function za(n){if(!j.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qa(n){if(j.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":z()}function Tt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Wr(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Wf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ha({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ha(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ah;switch(r.type){case"firstParty":return new dh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ja.get(e);r&&(F("ComponentProvider","Removing Datastore"),ja.delete(e),r.terminate())}(this),Promise.resolve()}}function Qf(n,t,e,r={}){var i;const o=(n=Tt(n,Qr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=_t.MOCK_USER;else{l=ju(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new _t(h)}n._authCredentials=new lh(new yl(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ae(this.firestore,t,this._query)}}class bt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class ne extends ae{constructor(t,e,r){super(t,e,Lr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new j(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function Ct(n,t,...e){if(n=Dt(n),yc("collection","path",t),n instanceof Qr){const r=tt.fromString(t,...e);return qa(r),new ne(n,null,r)}{if(!(n instanceof bt||n instanceof ne))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return qa(r),new ne(n.firestore,null,r)}}function jt(n,t,...e){if(n=Dt(n),arguments.length===1&&(t=vl.newId()),yc("doc","path",t),n instanceof Qr){const r=tt.fromString(t,...e);return za(r),new bt(n,null,new j(r))}{if(!(n instanceof bt||n instanceof ne))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return za(r),new bt(n.firestore,n instanceof ne?n.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Yl(this,"async_queue_retry"),this.Vu=()=>{const r=Ri();r&&F("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Ri();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ri();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Wt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!kn(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw $t("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Is.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Wa(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Ft extends Qr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Ua,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ua(t),this._firestoreClient=void 0,await t}}}function $f(n,t){const e=typeof n=="object"?n:Kd(),r=typeof n=="string"?n:"(default)",i=Wd(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Ou("firestore");o&&Qf(i,...o)}return i}function On(n){if(n._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gf(n),n._firestoreClient}function Gf(n){var t,e,r;const i=n._freezeSettings(),o=function(l,u,h,p){return new wh(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,gc(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new jf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ze(ft.fromBase64String(t))}catch(e){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ze(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=/^__.*__$/;class Xf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new oe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Nn(t,this.data,e,this.fieldTransforms)}}class vc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new oe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ac(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class ks{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ks(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Sr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Ac(this.Cu)&&Kf.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Jf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||qr(t)}Qu(t,e,r,i=!1){return new ks({Cu:t,methodName:e,qu:r,path:ht.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jn(n){const t=n._freezeSettings(),e=qr(n._databaseId);return new Jf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ns(n,t,e,r,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,i);Bs("Data must be an object, but it was:",a,r);const l=bc(r,a);let u,h;if(o.merge)u=new St(a.fieldMask),h=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const g of o.mergeFields){const _=es(t,g,e);if(!a.contains(_))throw new O(S.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);wc(p,_)||p.push(_)}u=new St(p),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new Xf(new Rt(l),u,h)}class Gr extends $r{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Gr}}class Ls extends $r{_toFieldTransform(t){return new Kh(t.path,new Pn)}isEqual(t){return t instanceof Ls}}function _c(n,t,e,r){const i=n.Qu(1,t,e);Bs("Data must be an object, but it was:",i,r);const o=[],a=Rt.empty();be(r,(u,h)=>{const p=Ms(t,u,e);h=Dt(h);const g=i.Nu(p);if(h instanceof Gr)o.push(p);else{const _=zn(h,g);_!=null&&(o.push(p),a.set(p,_))}});const l=new St(o);return new vc(a,l,i.fieldTransforms)}function Ec(n,t,e,r,i,o){const a=n.Qu(1,t,e),l=[es(t,r,e)],u=[i];if(o.length%2!=0)throw new O(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<o.length;_+=2)l.push(es(t,o[_])),u.push(o[_+1]);const h=[],p=Rt.empty();for(let _=l.length-1;_>=0;--_)if(!wc(h,l[_])){const x=l[_];let E=u[_];E=Dt(E);const b=a.Nu(x);if(E instanceof Gr)h.push(x);else{const C=zn(E,b);C!=null&&(h.push(x),p.set(x,C))}}const g=new St(h);return new vc(p,g,a.fieldTransforms)}function Zf(n,t,e,r=!1){return zn(e,n.Qu(r?4:3,t))}function zn(n,t){if(Ic(n=Dt(n)))return Bs("Unsupported field value:",t,n),bc(n,t);if(n instanceof $r)return function(r,i){if(!Ac(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let u=zn(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=lt.fromDate(r);return{timestampValue:Tr(i.serializer,o)}}if(r instanceof lt){const o=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tr(i.serializer,o)}}if(r instanceof Vs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ze)return{bytesValue:Ul(i.serializer,r._byteString)};if(r instanceof bt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ms(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ds)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return hs(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Wr(r)}`)}(n,t)}function bc(n,t){const e={};return Al(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):be(n,(r,i)=>{const o=zn(i,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Ic(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof lt||n instanceof Vs||n instanceof ze||n instanceof bt||n instanceof $r||n instanceof Ds)}function Bs(n,t,e){if(!Ic(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Wr(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function es(n,t,e){if((t=Dt(t))instanceof Fn)return t._internalPath;if(typeof t=="string")return Ms(n,t);throw Sr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Yf=new RegExp("[~\\*/\\[\\]]");function Ms(n,t,e){if(t.search(Yf)>=0)throw Sr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Fn(...t.split("."))._internalPath}catch{throw Sr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Sr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new O(S.INVALID_ARGUMENT,l+n+u)}function wc(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new tm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Os("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class tm extends xc{data(){return super.data()}}function Os(n,t){return typeof t=="string"?Ms(n,t):t instanceof Fn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fs{}class Rc extends Fs{}function Kr(n,t,...e){let r=[];t instanceof Fs&&r.push(t),r=r.concat(e),function(o){const a=o.filter(u=>u instanceof zs).length,l=o.filter(u=>u instanceof js).length;if(a>1||a>0&&l>0)throw new O(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class js extends Rc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new js(t,e,r)}_apply(t){const e=this._parse(t);return Cc(t._query,e),new ae(t.firestore,t.converter,Wi(t._query,e))}_parse(t){const e=jn(t.firestore);return function(o,a,l,u,h,p,g){let _;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){$a(g,p);const x=[];for(const E of g)x.push(Qa(u,o,E));_={arrayValue:{values:x}}}else _=Qa(u,o,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||$a(g,p),_=Zf(l,a,g,p==="in"||p==="not-in");return at.create(h,p,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class zs extends Fs{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new zs(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Nt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const l=o.getFlattenedFilters();for(const u of l)Cc(a,u),a=Wi(a,u)}(t._query,e),new ae(t.firestore,t.converter,Wi(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qs extends Rc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new qs(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new O(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cn(o,a)}(t._query,this._field,this._direction);return new ae(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Ue(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function Xr(n,t="asc"){const e=t,r=Os("orderBy",n);return qs._create(r,e)}function Qa(n,t,e){if(typeof(e=Dt(e))=="string"){if(e==="")throw new O(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cl(t)&&e.indexOf("/")!==-1)throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(tt.fromString(e));if(!j.isDocumentKey(r))throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pa(n,new j(r))}if(e instanceof bt)return pa(n,e._key);throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wr(e)}.`)}function $a(n,t){if(!Array.isArray(n)||n.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Cc(n,t){const e=function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class em{convertValue(t,e="none"){switch(Ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw z()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return be(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>it(a.doubleValue));return new Ds(o)}convertGeoPoint(t){return new Vs(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ls(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(xn(t));default:return null}}convertTimestamp(t){const e=ie(t);return new lt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=tt.fromString(t);X(Xl(r));const i=new Tn(r.get(1),r.get(3)),o=new j(r.popFirst(5));return i.isEqual(e)||$t(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Pc extends xc{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Os("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Ar extends Pc{data(t={}){return super.data(t)}}class Sc{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new yn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ar(this._firestore,this._userDataWriter,r.key,r,new yn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Ar(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new Ar(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:nm(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){n=Tt(n,bt);const t=Tt(n.firestore,Ft);return Hf(On(t),n._key).then(e=>Nc(t,n,e))}class Us extends em{constructor(t){super(),this.firestore=t}convertBytes(t){return new ze(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bt(this.firestore,null,e)}}function qn(n){n=Tt(n,ae);const t=Tt(n.firestore,Ft),e=On(t),r=new Us(t);return Tc(n._query),Uf(e,n._query).then(i=>new Sc(t,r,n,i))}function Ga(n,t,e){n=Tt(n,bt);const r=Tt(n.firestore,Ft),i=Hs(n.converter,t,e);return Hn(r,[Ns(jn(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,xt.none())])}function $e(n,t,e,...r){n=Tt(n,bt);const i=Tt(n.firestore,Ft),o=jn(i);let a;return a=typeof(t=Dt(t))=="string"||t instanceof Fn?Ec(o,"updateDoc",n._key,t,e,r):_c(o,"updateDoc",n._key,t),Hn(i,[a.toMutation(n._key,xt.exists(!0))])}function Dc(n){return Hn(Tt(n.firestore,Ft),[new jr(n._key,xt.none())])}function kc(n,t){const e=Tt(n.firestore,Ft),r=jt(n),i=Hs(n.converter,t);return Hn(e,[Ns(jn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then(()=>r)}function Ge(n,...t){var e,r,i;n=Dt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Wa(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Wa(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),t[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,h,p;if(n instanceof bt)h=Tt(n.firestore,Ft),p=Lr(n._key.path),u={next:g=>{t[a]&&t[a](Nc(h,n,g))},error:t[a+1],complete:t[a+2]};else{const g=Tt(n,ae);h=Tt(g.firestore,Ft),p=g._query;const _=new Us(h);u={next:x=>{t[a]&&t[a](new Sc(h,_,g,x))},error:t[a+1],complete:t[a+2]},Tc(n._query)}return function(_,x,E,b){const C=new Ss(b),D=new Cs(x,C,E);return _.asyncQueue.enqueueAndForget(async()=>xs(await Pr(_),D)),()=>{C.Za(),_.asyncQueue.enqueueAndForget(async()=>Ts(await Pr(_),D))}}(On(h),p,l,u)}function Hn(n,t){return function(r,i){const o=new Wt;return r.asyncQueue.enqueueAndForget(async()=>Df(await qf(r),i,o)),o.promise}(On(n),t)}function Nc(n,t,e){const r=e.docs.get(t._key),i=new Us(n);return new Pc(n,i,t._key,r,new yn(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=jn(t)}set(t,e,r){this._verifyNotCommitted();const i=Pi(t,this._firestore),o=Hs(i.converter,e,r),a=Ns(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,xt.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const o=Pi(t,this._firestore);let a;return a=typeof(e=Dt(e))=="string"||e instanceof Fn?Ec(this._dataReader,"WriteBatch.update",o._key,e,r,i):_c(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,xt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Pi(t,this._firestore);return this._mutations=this._mutations.concat(new jr(e._key,xt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Pi(n,t){if((n=Dt(n)).firestore!==t)throw new O(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Lc(){return new Ls("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n){return On(n=Tt(n,Ft)),new rm(n,t=>Hn(n,t))}(function(t,e=!0){(function(i){He=i})(Gd),br(new bn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Ft(new ch(r.getProvider("auth-internal")),new ph(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tn(h.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),De(la,"4.7.3",t),De(la,"4.7.3","esm2017")})();const im={apiKey:"AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",authDomain:"feria-vinos-sucovi-2027.firebaseapp.com",databaseURL:"https://feria-vinos-sucovi-2027-default-rtdb.firebaseio.com",projectId:"feria-vinos-sucovi-2027",storageBucket:"feria-vinos-sucovi-2027.firebasestorage.app",messagingSenderId:"1686119758",appId:"1:1686119758:web:2c3c6d96e36f1276052a1f",measurementId:"G-VRMTQ3SS7E"},sm=ll(im),et=$f(sm),ve=[{id:0,nombre:"Sucovi",region:"Pruebas / Bebidas",pass:"stand00"},{id:1,nombre:"Alta Vista",region:"Mendoza",pass:"stand01"},{id:2,nombre:"Andillian",region:"Mendoza",pass:"stand02"},{id:3,nombre:"Ante Nada",region:"Mendoza",pass:"stand03"},{id:4,nombre:"Bodega Benegas",region:"Mendoza",pass:"stand04"},{id:5,nombre:"Bianchi",region:"San Rafael",pass:"stand05"},{id:6,nombre:"Catena Zapata",region:"Luján de Cuyo",pass:"stand06"},{id:7,nombre:"Bodegas Bórbore",region:"Mendoza (1936)",pass:"stand07"},{id:8,nombre:"Fábula Wines",region:"Mendoza",pass:"stand08"},{id:9,nombre:"Finca Iral",region:"Mendoza",pass:"stand09"},{id:10,nombre:"Giménez Riili",region:"Mendoza",pass:"stand10"},{id:11,nombre:"Jorge Rubio",region:"Mendoza",pass:"stand11"},{id:12,nombre:"La Coste de los Andes",region:"Mendoza",pass:"stand12"},{id:13,nombre:"Las Perdices",region:"Mendoza",pass:"stand13"},{id:14,nombre:"Lorenzo de Agrelo",region:"Mendoza",pass:"stand14"},{id:15,nombre:"Pannunzio Wines",region:"Mendoza",pass:"stand15"},{id:16,nombre:"Bodega Patritti",region:"Mendoza",pass:"stand16"},{id:17,nombre:"Rosell Boher",region:"Mendoza",pass:"stand17"},{id:18,nombre:"Valle de la Puerta",region:"La Rioja",pass:"stand18"}];async function Vr(n){return await kc(Ct(et,"invitados"),{...n,creadoEn:Lc()})}async function Ne(n,t){await $e(jt(et,"invitados",n),t)}function Un(n){return Ge(Kr(Ct(et,"invitados"),Xr("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}async function Dr(n){const e=(await qn(Ct(et,"invitados"))).docs.find(r=>r.data().token===n);return e?{fireId:e.id,...e.data()}:null}async function om(n){const e=(await qn(Ct(et,"invitados"))).docs.find(r=>r.data().codigo===n);return e?{fireId:e.id,...e.data()}:null}async function Bc(n,t,e,r,i){const o=jt(et,"carritos",n,"items",String(t)),a=await Vc(o);if(a.exists()){const l=a.data(),u=l.items||[],h=u.findIndex(p=>p.key===r.key);h>=0?u[h]=r:u.push(r),await Ga(o,{standId:t,standNombre:e,items:u,retiro:i||l.retiro||"stand"})}else await Ga(o,{standId:t,standNombre:e,items:[r],retiro:i||"stand"})}async function Qs(n,t,e){await $e(jt(et,"carritos",n,"items",String(t)),{retiro:e})}async function kr(n,t,e){const r=jt(et,"carritos",n,"items",String(t)),i=await Vc(r);if(!i.exists())return;const o=(i.data().items||[]).filter(a=>a.key!==e);o.length?await $e(r,{items:o}):await Dc(r)}async function Mc(n){return(await qn(Ct(et,"carritos",n,"items"))).docs.map(e=>({standId:e.id,...e.data()}))}function $s(n,t){return Ge(Ct(et,"carritos",n,"items"),e=>t(e.docs.map(r=>({standDocId:r.id,...r.data()}))))}async function Oc(n){const t=await qn(Ct(et,"carritos",n,"items")),e=Ws(et);t.docs.forEach(r=>e.delete(r.ref)),await e.commit()}async function Fc(n,t){const e=Ws(et),r=[];return t.forEach(i=>{const o=jt(Ct(et,"pedidos"));r.push(o),e.set(o,{invFireId:n.fireId,invNombre:n.nombre+" "+n.apellido,invCodigo:n.codigo,standId:i.standId,standNombre:i.standNombre,items:i.items||[],total:(i.items||[]).reduce((a,l)=>a+(l.sub||0),0),retiro:i.retiro||"stand",estado:"pagado",creadoEn:Lc()})}),await e.commit(),r.map(i=>i.id)}function Jr(n){return Ge(Kr(Ct(et,"pedidos"),Xr("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}function jc(n,t){return Ge(Kr(Ct(et,"pedidos"),Xr("creadoEn","desc")),e=>t(e.docs.map(r=>({fireId:r.id,...r.data()})).filter(r=>Number(r.standId)===Number(n))))}function zc(n,t){return Ge(Kr(Ct(et,"pedidos"),Xr("creadoEn","desc")),e=>t(e.docs.map(r=>({fireId:r.id,...r.data()})).filter(r=>r.invFireId===n)))}async function qc(n){await $e(jt(et,"pedidos",n),{estado:"entregado"})}async function Hc(n,t){const e={pendiente:"pagado",pagado:"listo",listo:"entregado"};e[t]&&await $e(jt(et,"pedidos",n),{estado:e[t]})}function Gs(n,t){return Ge(Ct(et,"bodegas",String(n),"vinos"),e=>t(e.docs.map(r=>({fireId:r.id,...r.data()}))))}async function Uc(n,t){return await kc(Ct(et,"bodegas",String(n),"vinos"),t)}async function Wc(n,t,e){await $e(jt(et,"bodegas",String(n),"vinos",t),e)}async function Qc(n,t){await Dc(jt(et,"bodegas",String(n),"vinos",t))}async function $c(){const n=["invitados","pedidos"];for(const t of n){const e=await qn(Ct(et,t)),r=Ws(et);e.docs.forEach(i=>r.delete(i.ref)),await r.commit()}}const Gc=Object.freeze(Object.defineProperty({__proto__:null,BODEGAS:ve,actualizarInvitado:Ne,actualizarRetiroStand:Qs,actualizarVino:Wc,agregarAlCarrito:Bc,avanzarEstado:Hc,buscarInvitadoPorCodigo:om,buscarInvitadoPorToken:Dr,crearInvitado:Vr,crearPedidosDesdeCarrito:Fc,eliminarItemCarrito:kr,eliminarVino:Qc,escucharCarrito:$s,escucharInvitados:Un,escucharPedidos:Jr,escucharPedidosPorInvitado:zc,escucharPedidosPorStand:jc,escucharVinos:Gs,guardarVino:Uc,leerCarrito:Mc,limpiarDatosPrueba:$c,marcarEntregado:qc,vaciarCarrito:Oc},Symbol.toStringTag,{value:"Module"})),am="modulepreload",lm=function(n){return"/"+n},Ka={},Ks=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(u=>{if(u=lm(u),u in Ka)return;Ka[u]=!0;const h=u.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":am,h||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),h)return new Promise((_,x)=>{g.addEventListener("load",_),g.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},Xs="data:image/png;base64,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";function Vt({title:n,sub:t="",backHref:e="",backLabel:r="← Panel",actions:i=[]}={}){return`
    <div class="hdr">
      <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
        <img src="${Xs}" alt="Sucovi 2027"
          style="width:34px;height:34px;border-radius:50%;
                 background:#fff;padding:2px;flex-shrink:0;
                 box-shadow:0 2px 6px rgba(0,0,0,.2)">
        <div style="min-width:0;overflow:hidden">
          <h1 style="font-size:13px;font-weight:700;line-height:1.2;
                     white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
            ${n}
          </h1>
          ${t?`<div class="sub" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:10px">${t}</div>`:""}
        </div>
      </div>
      <div style="display:flex;gap:4px;flex-shrink:0;flex-wrap:nowrap;align-items:center">
        ${i.join("")}
        ${e?`<a href="${e}" class="btn-back btn" style="font-size:11px;padding:5px 8px;white-space:nowrap">${r}</a>`:""}
      </div>
    </div>
    <div class="gold"></div>`}function ns(n){return`
    <div style="background:linear-gradient(160deg,#1A3A5C 0%,#2C5F8A 60%,#3A7D44 100%);
                color:#fff;padding:20px 16px 16px;text-align:center">
      <img src="${Xs}" alt="Sucovi 2027"
        style="width:72px;height:72px;border-radius:50%;background:#fff;
               padding:3px;box-shadow:0 4px 16px rgba(0,0,0,.25);
               margin-bottom:10px;display:block;margin-left:auto;margin-right:auto">
      <div style="font-size:11px;letter-spacing:.12em;opacity:.75;margin-bottom:4px">
        SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN
      </div>
      ${n?`
        <div style="font-size:20px;font-weight:700;margin-bottom:3px">
          ${n.nombre} ${n.apellido}
        </div>
        <div style="font-size:12px;opacity:.75">${n.codigo||""}</div>
      `:`
        <div style="font-size:18px;font-weight:700">Feria de Vinos 2027</div>
        <div style="font-size:12px;opacity:.75">20 jun 2026 · Roma 656, Olivos · 19:30 hs</div>
      `}
    </div>
    <div class="gold"></div>`}function zt(){if(document.getElementById("sucovi-styles"))return;const n=document.createElement("style");n.id="sucovi-styles",n.textContent=`
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #F0F4F8; color: #1A3A5C; min-height: 100vh;
    }

    /* ── HEADER ── */
    .hdr {
      background: linear-gradient(135deg, #1A3A5C 0%, #2C5F8A 100%);
      color: #fff; padding: 11px 16px;
      display: flex; align-items: center; justify-content: space-between; gap: 8px;
    }
    .hdr h1 { font-size: 15px; font-weight: 600; line-height: 1.2; }
    .hdr .sub { font-size: 11px; opacity: .7; margin-top: 1px; }

    /* Gold accent bar (como el aro del logo) */
    .gold {
      height: 3px;
      background: linear-gradient(90deg, #1A3A5C, #5BA4CF, #3A7D44, #C9A96E, #3A7D44, #5BA4CF, #1A3A5C);
    }

    /* ── NAV ── */
    .nav {
      display: flex; background: #fff;
      border-bottom: 2px solid #E8EFF5;
      overflow-x: auto;
    }
    .nav button {
      padding: 9px 13px; border: none; background: none; cursor: pointer;
      font-size: 12px; color: #5B7A9A; border-bottom: 2px solid transparent;
      white-space: nowrap; font-weight: 500; transition: all .15s;
      margin-bottom: -2px;
    }
    .nav button:hover { color: #1A3A5C; background: #F0F4F8; }
    .nav button.on {
      color: #5BA4CF; border-bottom-color: #5BA4CF; font-weight: 600;
      background: #fff;
    }

    /* ── CARDS & LAYOUT ── */
    .wrap { padding: 14px; max-width: 860px; margin: 0 auto; }
    .card {
      background: #fff;
      border: 1px solid #D6E4F0;
      border-radius: 12px;
      padding: 13px 15px;
      box-shadow: 0 1px 4px rgba(26,58,92,.06);
    }
    .empty { text-align: center; padding: 36px; color: #8AABCC; font-size: 13px; }

    /* ── BADGES ── */
    .badge {
      display: inline-block; padding: 2px 8px;
      border-radius: 6px; font-size: 11px; font-weight: 600;
    }
    .b-pend { background: #FEF3C7; color: #92400E; }        /* pendiente pago */
    .b-pago { background: #D1FAE5; color: #065F46; }        /* pagado / bono ok */
    .b-list { background: #DBEAFE; color: #1E40AF; }        /* listo para retirar */
    .b-entr { background: #E5E7EB; color: #4B5563; }        /* entregado */
    .b-ingr { background: #DBEAFE; color: #1E40AF; }        /* ingresó */
    .b-envi { background: #EDE9FE; color: #5B21B6; }        /* envío */
    .b-inv  { background: #FEE2E2; color: #991B1B; }        /* invalidado */

    /* ── INPUTS ── */
    input, select, textarea {
      background: #fff; color: #1A3A5C;
      border: 1.5px solid #B8D0E8;
      border-radius: 8px; padding: 8px 11px;
      font-size: 14px; width: 100%;
      transition: border-color .15s;
    }
    input:focus, select:focus, textarea:focus {
      outline: none; border-color: #5BA4CF;
      box-shadow: 0 0 0 3px rgba(91,164,207,.15);
    }
    input::placeholder { color: #8AABCC; }

    /* ── BUTTONS ── */
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 5px;
      padding: 7px 14px; border-radius: 8px; border: 1.5px solid #B8D0E8;
      background: #fff; color: #1A3A5C; cursor: pointer;
      font-size: 12px; font-weight: 600; text-decoration: none;
      white-space: nowrap; transition: all .15s;
    }
    .btn:hover { background: #E8F1F8; border-color: #5BA4CF; }
    .btn:disabled { opacity: .4; cursor: not-allowed; }

    /* Back button en header */
    .hdr .btn-back {
      background: rgba(255,255,255,.15); color: #fff;
      border-color: rgba(255,255,255,.4); font-size: 12px; padding: 5px 11px;
    }
    .hdr .btn-back:hover { background: rgba(255,255,255,.28); border-color: rgba(255,255,255,.7); }

    /* Variantes de color */
    .btn-v  { background: #5BA4CF; color: #fff !important; border-color: #5BA4CF; }
    .btn-v:hover  { background: #4190BB; border-color: #4190BB; }

    .btn-dark { background: #1A3A5C; color: #fff !important; border-color: #1A3A5C; }
    .btn-dark:hover { background: #122840; border-color: #122840; }

    .btn-g  { background: #3A7D44; color: #fff !important; border-color: #3A7D44; }
    .btn-g:hover  { background: #2D6235; border-color: #2D6235; }

    .btn-a  { background: #D97706; color: #fff !important; border-color: #D97706; }
    .btn-a:hover  { background: #B45309; border-color: #B45309; }

    .btn-b  { background: #2563EB; color: #fff !important; border-color: #2563EB; }
    .btn-b:hover  { background: #1D4ED8; border-color: #1D4ED8; }

    .btn-p  { background: #7C3AED; color: #fff !important; border-color: #7C3AED; }
    .btn-p:hover  { background: #6D28D9; border-color: #6D28D9; }

    .btn-red { background: #C0392B; color: #fff !important; border-color: #C0392B; }
    .btn-red:hover { background: #A93226; border-color: #A93226; }

    /* ── SEPARADOR ── */
    .sep { height: 1px; background: #D6E4F0; margin: 10px 0; }

    /* ── ROWS ── */
    .row {
      display: flex; align-items: center; gap: 8px;
      padding: 9px 0; border-bottom: 1px solid #E8EFF5; flex-wrap: wrap;
    }
    .row:last-child { border-bottom: none; }
    .avatar {
      width: 36px; height: 36px; border-radius: 50%;
      background: linear-gradient(135deg, #5BA4CF, #1A3A5C);
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 700; color: #fff; flex-shrink: 0;
    }

    /* ── STATS ── */
    .stats {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 8px; margin-bottom: 14px;
    }
    .stat {
      background: linear-gradient(135deg, #fff, #F0F4F8);
      border: 1px solid #D6E4F0;
      border-radius: 10px; padding: 12px; text-align: center;
      box-shadow: 0 1px 3px rgba(26,58,92,.06);
    }
    .stat .v { font-size: 20px; font-weight: 700; color: #1A3A5C; }
    .stat .l { font-size: 11px; color: #5B7A9A; margin-top: 3px; font-weight: 500; }

    /* ── RESULTADOS ── */
    .result-ok {
      background: #D1FAE5; border: 1.5px solid #3A7D44;
      border-radius: 12px; padding: 16px; text-align: center;
    }
    .result-err {
      background: #FEE2E2; border: 1.5px solid #C0392B;
      border-radius: 12px; padding: 16px; text-align: center;
    }
    .result-warn {
      background: #FEF3C7; border: 1.5px solid #D97706;
      border-radius: 12px; padding: 16px; text-align: center;
    }

    /* ── STAND MENU ── */
    .vino-card {
      background: #fff; border: 1px solid #D6E4F0;
      border-radius: 12px; padding: 13px 14px; margin-bottom: 10px;
      box-shadow: 0 1px 3px rgba(26,58,92,.05);
    }
    .qty-row { display: flex; align-items: center; gap: 6px; margin-top: 8px; }
    .qty-label { font-size: 12px; color: #5B7A9A; flex: 1; }
    .qty-btn {
      width: 28px; height: 28px; border-radius: 50%;
      border: 1.5px solid #B8D0E8; background: #F0F4F8;
      cursor: pointer; font-size: 16px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: #1A3A5C; font-weight: 600; transition: all .15s;
    }
    .qty-btn:hover { border-color: #5BA4CF; background: #DBEAFE; color: #1E40AF; }

    /* ── RETIRO ── */
    .retiro-opt { display: flex; gap: 8px; margin-bottom: 12px; }
    .retiro-btn {
      flex: 1; padding: 10px 6px; border: 1.5px solid #B8D0E8;
      border-radius: 10px; background: #fff; cursor: pointer;
      font-size: 12px; text-align: center; color: #5B7A9A;
      transition: all .15s; line-height: 1.5; font-weight: 500;
    }
    .retiro-btn:hover { border-color: #5BA4CF; background: #F0F7FC; }
    .retiro-btn.sel {
      border-color: #1A3A5C; background: #EBF4FA;
      color: #1A3A5C; font-weight: 700;
    }

    /* ── CARRITO FAB ── */
    .cart-fab {
      position: fixed; bottom: 20px; right: 20px; z-index: 50;
      background: linear-gradient(135deg, #1A3A5C, #2C5F8A);
      color: #fff; border: none; border-radius: 50px;
      padding: 12px 20px; font-size: 14px; font-weight: 600; cursor: pointer;
      box-shadow: 0 4px 16px rgba(26,58,92,.35);
      display: flex; align-items: center; gap: 8px;
      transition: transform .15s, box-shadow .15s;
    }
    .cart-fab:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(26,58,92,.45); }

    /* ── QR SCANNER ── */
    .scan-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(26,58,92,.92); z-index: 300;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 16px;
    }
    .scan-overlay video {
      width: 280px; height: 280px; object-fit: cover; border-radius: 12px;
    }
    .scan-frame { position: relative; }
    .scan-corner {
      position: absolute; width: 28px; height: 28px;
      border-color: #5BA4CF; border-style: solid;
    }
    .scan-corner.tl { top:-3px; left:-3px; border-width:4px 0 0 4px; border-radius:4px 0 0 0; }
    .scan-corner.tr { top:-3px; right:-3px; border-width:4px 4px 0 0; border-radius:0 4px 0 0; }
    .scan-corner.bl { bottom:-3px; left:-3px; border-width:0 0 4px 4px; border-radius:0 0 0 4px; }
    .scan-corner.br { bottom:-3px; right:-3px; border-width:0 4px 4px 0; border-radius:0 0 4px 0; }

    /* ── INFO BOX ── */
    .info-box {
      background: #EBF4FA; border: 1px solid #B8D0E8;
      border-radius: 8px; padding: 9px 12px;
      font-size: 12px; color: #1A3A5C; line-height: 1.6;
    }
    .warn-box {
      background: #FEF3C7; border: 1px solid #D97706;
      border-radius: 8px; padding: 9px 12px;
      font-size: 12px; color: #92400E; line-height: 1.6;
    }
    .success-box {
      background: #D1FAE5; border: 1px solid #3A7D44;
      border-radius: 8px; padding: 9px 12px;
      font-size: 12px; color: #065F46; line-height: 1.6;
    }
    .danger-box {
      background: #FEE2E2; border: 1.5px solid #C0392B;
      border-radius: 8px; padding: 9px 12px;
      font-size: 12px; color: #7F1D1D; line-height: 1.6;
    }

    /* ── MOBILE ── */
    @media (max-width: 480px) {
      .hdr h1 { font-size: 13px; }
      .wrap { padding: 10px; }
      .stats { grid-template-columns: repeat(3, 1fr); }
    }
  `,document.head.appendChild(n)}async function cm(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Xa(n,t,e){await cm();const r=document.getElementById(n);if(r)try{const i=qrcode(0,"M");i.addData(String(t)),i.make();const o=i.getModuleCount(),a=e/o;r.width=e,r.height=e;const l=r.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let u=0;u<o;u++)for(let h=0;h<o;h++)i.isDark(u,h)&&l.fillRect(h*a,u*a,a,a)}catch(i){console.error("QR error:",i)}}const fr=n=>Number(n).toLocaleString("es-AR"),Ja=()=>Math.random().toString(36).slice(2,10).toUpperCase(),Za=n=>"INV-"+String(n).padStart(4,"0");function Ya(n){return{pendiente:'<span class="badge b-pend">Pendiente</span>',pagado:'<span class="badge b-pago">Bono pagado</span>',ingresado:'<span class="badge b-ingr">Ingresó</span>',invalidado:'<span class="badge b-inv">Invalidado</span>'}[n]||""}const um={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},dm={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"};function hm(n){zt();let t=[],e=[],r="inv",i=null;n.innerHTML=Vt({title:"Sucovi 2027",sub:"20 jun 2026 · 19:30 hs · Roma 656, Olivos"})+`
    <div style="display:flex;gap:5px;padding:8px 12px;background:#1A3A5C;flex-wrap:wrap">
      <a href="/puerta"    class="btn btn-a" style="font-size:11px;padding:5px 9px;text-decoration:none">🚪 Puerta</a>
      <a href="/caja"      class="btn btn-b" style="font-size:11px;padding:5px 9px;text-decoration:none">💰 Caja</a>
      <a href="/logistica" class="btn btn-p" style="font-size:11px;padding:5px 9px;text-decoration:none">🚚 Logística</a>
      <a href="/registro"  class="btn" style="font-size:11px;padding:5px 9px;text-decoration:none;background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)">📝 Registro</a>
    </div>
    <div class="nav">
      <button class="on" onclick="window._aTab('inv',this)">👥 Invitados</button>
      <button onclick="window._aTab('reg',this)">➕ Registrar</button>
      <button onclick="window._aTab('excel',this)">📊 Importar Excel</button>
      <button onclick="window._aTab('ped',this)">🛒 Pedidos</button>
      <button onclick="window._aTab('stands',this)">🍷 Stands / QR</button>
      <button onclick="window._aTab('res',this)">📊 Resumen</button>
      <button onclick="window._aTab('config',this)">⚙️ Config</button>
    </div>
    <div id="tab-content" class="wrap"></div>

    <!-- Modal WA -->
    <div id="modal-wa" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(0,0,0,.45);z-index:200;align-items:center;justify-content:center;padding:16px">
      <div class="card" style="width:100%;max-width:380px;max-height:90vh;overflow-y:auto">
        <h3 id="mw-tit" style="font-size:14px;font-weight:500;color:#6B1C1C;margin-bottom:12px"></h3>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <canvas id="mw-canvas" width="80" height="80" style="border-radius:6px;flex-shrink:0"></canvas>
          <div style="min-width:0">
            <p id="mw-cod" style="font-size:15px;font-weight:500;color:#6B1C1C;letter-spacing:.08em"></p>
            <p id="mw-bdg" style="margin-top:3px"></p>
            <p id="mw-link" style="font-size:10px;color:#aaa;margin-top:3px;word-break:break-all"></p>
          </div>
        </div>
        <div class="sep"></div>
        <p style="font-size:11px;color:#666;margin-bottom:5px;font-weight:500">MENSAJE WHATSAPP</p>
        <div id="mw-msg" style="background:#f5f0eb;border-radius:8px;padding:9px 11px;
          font-size:12px;color:#555;line-height:1.6;white-space:pre-wrap;
          max-height:160px;overflow-y:auto"></div>
        <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">
          <button class="btn btn-g" style="flex:1;font-size:12px" onclick="window._copWA()">📋 Copiar</button>
          <button class="btn btn-a" id="mw-btn-p" style="flex:1;font-size:12px" onclick="window._pagarM()"></button>
        </div>
        <button class="btn" style="width:100%;margin-top:6px;font-size:12px" onclick="window._cModal()">Cerrar</button>
      </div>
    </div>`,Un(E=>{t=E,r==="inv"&&o(),r==="res"&&g()}),Jr(E=>{e=E,r==="ped"&&h(),r==="res"&&g()}),window._aTab=(E,b)=>{var D;r=E,document.querySelectorAll(".nav button").forEach(V=>V.classList.remove("on")),b.classList.add("on");const C={inv:o,reg:a,excel:l,ped:h,stands:p,res:g,config:_};(D=C[E])==null||D.call(C)};function o(){const E=document.getElementById("tab-content");document.getElementById("buscar-inv")||(E.innerHTML=`
        <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
          <input id="buscar-inv" placeholder="Buscar nombre, código o familia..." style="flex:1;min-width:140px" oninput="window._fInv()">
          <select id="fil-est" onchange="window._fInv()" style="width:auto;min-width:120px">
            <option value="">Todos</option>
            <option value="pendiente">Pendiente</option>
            <option value="pagado">Pagado</option>
            <option value="ingresado">Ingresó</option>
            <option value="invalidado">Invalidados</option>
          </select>
        </div>
        <div class="card" id="lista-inv"></div>`),window._fInv=()=>{var L,M;const b=(((L=document.getElementById("buscar-inv"))==null?void 0:L.value)||"").toLowerCase(),C=((M=document.getElementById("fil-est"))==null?void 0:M.value)||"",D=t.filter(k=>(k.nombre+" "+k.apellido+" "+(k.codigo||"")+" "+(k.familia||"")).toLowerCase().includes(b)&&(!C||k.estado===C)),V=document.getElementById("lista-inv");if(V){if(!D.length){V.innerHTML='<div class="empty">Sin resultados</div>';return}V.innerHTML=D.map(k=>{var $,A;return`
        <div class="row" style="${k.estado==="invalidado"?"opacity:.5":""}">
          <div class="avatar">${(($=k.nombre)==null?void 0:$[0])||"?"}${((A=k.apellido)==null?void 0:A[0])||""}</div>
          <div style="flex:1;min-width:80px">
            <div style="font-size:13px;font-weight:500">${k.nombre} ${k.apellido}</div>
            <div style="font-size:11px;color:#888">${k.tel}${k.familia?" · "+k.familia:""}</div>
          </div>
          <div style="font-size:11px;color:#aaa">${k.codigo||""}</div>
          ${Ya(k.estado)}
          <div style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">
            <button class="btn" style="padding:4px 8px;font-size:11px" onclick="window._abrirWA('${k.fireId}')">📱 WA</button>
            <button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._descargarQR('${k.fireId}')">📥 QR</button>
            ${k.estado!=="invalidado"?`<button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D" onclick="window._invalidar('${k.fireId}','${k.nombre} ${k.apellido}')">✕ Invalidar</button>`:`<button class="btn" style="padding:4px 8px;font-size:11px;color:#3B6D11;border-color:#3B6D11" onclick="window._reactivar('${k.fireId}')">↩ Reactivar</button>`}
          </div>
        </div>`}).join("")}},window._fInv()}window._invalidar=async(E,b)=>{confirm(`¿Invalidar a ${b}?`)&&await Ne(E,{estado:"invalidado"})},window._reactivar=async E=>await Ne(E,{estado:"pendiente"});function a(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:14px">Registrar invitado</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
          <div><label style="font-size:11px;color:#666">Nombre *</label><input id="rn" placeholder="Juan" style="margin-top:3px"></div>
          <div><label style="font-size:11px;color:#666">Apellido *</label><input id="ra" placeholder="Pérez" style="margin-top:3px"></div>
        </div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">WhatsApp *</label><input id="rt" placeholder="+54 9 11 XXXX-XXXX" style="margin-top:3px"></div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Email (opcional)</label><input id="re" type="email" placeholder="juan@gmail.com" style="margin-top:3px"></div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Familia SUCOVI (opcional)</label><input id="rf" placeholder="Ej: Familia García" style="margin-top:3px"></div>
        <div style="margin-bottom:14px"><label style="font-size:11px;color:#666">Comentarios (opcional)</label><input id="rc" placeholder="Alergias, necesidades..." style="margin-top:3px"></div>
        <div style="margin-bottom:14px">
          <label style="font-size:11px;color:#666">Pago</label>
          <div style="display:flex;gap:16px;margin-top:6px">
            <label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer"><input type="radio" name="rp" value="pendiente" checked style="width:auto"> Paga en puerta</label>
            <label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer"><input type="radio" name="rp" value="pagado" style="width:auto"> Ya pagó</label>
          </div>
        </div>
        <button class="btn btn-v" style="width:100%;padding:10px" onclick="window._registrar()">Registrar y generar QR</button>
        <div id="reg-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
      </div>`}window._registrar=async()=>{const E=document.getElementById("rn").value.trim(),b=document.getElementById("ra").value.trim(),C=document.getElementById("rt").value.trim(),D=document.querySelector('input[name="rp"]:checked').value,V=document.getElementById("reg-msg");if(!E||!b||!C){V.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}V.innerHTML='<span style="color:#888">Guardando...</span>';try{const L=Za(t.length+1),M=Ja(),k=await Vr({nombre:E,apellido:b,tel:C,email:document.getElementById("re").value.trim()||void 0,familia:document.getElementById("rf").value.trim()||void 0,comentarios:document.getElementById("rc").value.trim()||void 0,estado:D,codigo:L,token:M});V.innerHTML=`<span style="color:#3B6D11">✓ ${E} ${b} (${L})</span>`,["rn","ra","rt","re","rf","rc"].forEach($=>{const A=document.getElementById($);A&&(A.value="")}),D==="pagado"&&setTimeout(()=>window._abrirWA(k.id),600)}catch(L){V.innerHTML=`<span style="color:#A32D2D">Error: ${L.message}</span>`}};function l(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:540px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Importar invitados desde Excel</p>
        <div style="background:#f5f0eb;border-radius:8px;padding:10px 12px;font-size:12px;color:#666;margin-bottom:14px;line-height:1.6">
          El archivo Excel debe tener estas columnas en orden:<br>
          <strong>A: Nombre</strong> · <strong>B: Apellido</strong> · <strong>C: WhatsApp</strong> · 
          D: Email · E: Familia SUCOVI · F: Comentarios · G: Pagado (SI/NO)<br>
          La primera fila puede ser encabezado (se detecta automáticamente).
        </div>
        <input type="file" id="excel-file" accept=".xlsx,.xls,.csv"
          style="margin-bottom:12px" onchange="window._procesarExcel(this)">
        <div id="excel-preview" style="margin-bottom:10px"></div>
        <button class="btn btn-v" id="btn-importar" style="width:100%;padding:9px;display:none"
          onclick="window._importarExcel()">
          Importar invitados
        </button>
        <div id="excel-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
      </div>`}let u=[];window._procesarExcel=async E=>{const b=E.files[0];if(!b)return;const C=document.getElementById("excel-preview");C.innerHTML='<p style="font-size:12px;color:#888">Procesando...</p>';try{const D=await Ks(()=>import("https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs"),[]),V=await b.arrayBuffer(),L=D.read(V),M=L.Sheets[L.SheetNames[0]],k=D.utils.sheet_to_json(M,{header:1}),$=typeof k[0][0]=="string"&&k[0][0].toLowerCase().includes("nombre")?1:0;u=k.slice($).filter(A=>A[0]&&A[1]&&A[2]).map(A=>({nombre:String(A[0]||"").trim(),apellido:String(A[1]||"").trim(),tel:String(A[2]||"").trim(),email:A[3]?String(A[3]).trim():void 0,familia:A[4]?String(A[4]).trim():void 0,comentarios:A[5]?String(A[5]).trim():void 0,estado:String(A[6]||"").toUpperCase()==="SI"?"pagado":"pendiente"})),C.innerHTML=`
        <p style="font-size:12px;color:#3B6D11;margin-bottom:8px">
          ✓ ${u.length} invitados detectados
        </p>
        <div style="max-height:200px;overflow-y:auto;border:.5px solid #e0d5c8;border-radius:8px">
          ${u.slice(0,5).map(A=>`
            <div style="padding:6px 10px;border-bottom:.5px solid #f0ebe4;font-size:12px">
              ${A.nombre} ${A.apellido} · ${A.tel} · <span class="badge ${A.estado==="pagado"?"b-pago":"b-pend"}">${A.estado==="pagado"?"Pagado":"Pendiente"}</span>
            </div>`).join("")}
          ${u.length>5?`<div style="padding:6px 10px;font-size:11px;color:#aaa">...y ${u.length-5} más</div>`:""}
        </div>`,document.getElementById("btn-importar").style.display="block"}catch(D){C.innerHTML=`<p style="color:#A32D2D;font-size:12px">Error al leer el archivo: ${D.message}</p>`}},window._importarExcel=async()=>{if(!u.length)return;const E=document.getElementById("btn-importar"),b=document.getElementById("excel-msg");E.disabled=!0,E.textContent="Importando...",b.innerHTML='<span style="color:#888">Procesando...</span>';let C=0,D=0;const V=t.length;for(let L=0;L<u.length;L++)try{const M=u[L];await Vr({...M,codigo:Za(V+L+1),token:Ja()}),C++}catch{D++}b.innerHTML=`<span style="color:#3B6D11">✓ ${C} invitados importados${D?` (${D} errores)`:""}</span>`,E.style.display="none",u=[]};function h(){const E=document.getElementById("tab-content");if(!e.length){E.innerHTML='<div class="empty">Sin pedidos aún 🍷</div>';return}E.innerHTML=e.map(b=>{var C;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">#${(C=b.fireId)==null?void 0:C.slice(-4).toUpperCase()}</span>
        <div style="flex:1;min-width:90px">
          <div style="font-size:12px;font-weight:500">${b.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${b.standNombre}${b.retiro==="envio"?' · <span style="color:#5A1E99">Envío</span>':""}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:100px">${(b.items||[]).map(D=>D.desc).join(" · ")}</span>
        <span style="font-size:14px;font-weight:500">$${fr(b.total||0)}</span>
        <span class="badge ${dm[b.estado]}">${um[b.estado]}</span>
      </div>`}).join("")}function p(){const E=window.location.origin;document.getElementById("tab-content").innerHTML=`
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>QR de pedidos:</strong> se imprime en el stand — los clientes lo escanean con su QR de acceso.<br>
        <strong>Panel stand:</strong> para el personal de la bodega (ver pedidos + marcar entregas).<br>
        <strong>Carga vinos:</strong> para que cada bodega cargue su carta directamente.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${ve.map(b=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${b.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${b.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${b.region}</div>
            <canvas id="qr-s${b.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="font-size:10px;color:#aaa;margin-bottom:8px;word-break:break-all">${E}/stand/${b.id}</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${E}/stand/${b.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <a href="${E}/panel/${b.id}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none">Panel stand</a>
              <a href="${E}/bodega/${b.id}/vinos" target="_blank" class="btn" style="font-size:11px;padding:5px;text-decoration:none;color:#3B6D11;border-color:#3B6D11">Cargar vinos</a>
              <div style="font-size:10px;color:#aaa">Pass: <strong>${b.pass}</strong></div>
            </div>
          </div>`).join("")}
      </div>`,ve.forEach(b=>setTimeout(()=>Xa("qr-s"+b.id,`${E}/stand/${b.id}`,110),50))}function g(){const E=t.filter(M=>M.estado==="pagado").length,b=t.filter(M=>M.estado==="ingresado").length,C=(E+b)*35e3,D=e.reduce((M,k)=>M+(k.total||0),0),V={};e.forEach(M=>{V[M.standId]||(V[M.standId]={n:M.standNombre,t:0,c:0}),V[M.standId].t+=M.total||0,V[M.standId].c++});const L=Object.values(V).sort((M,k)=>k.t-M.t);document.getElementById("tab-content").innerHTML=`
      <div class="stats">
        ${[[t.filter(M=>M.estado!=="invalidado").length,"Invitados"],[E+b,"Con bono"],["$"+fr(C),"Bonos"],[e.length,"Pedidos"],["$"+fr(D),"Ventas"],[e.filter(M=>M.retiro==="envio").length,"Envíos"]].map(([M,k])=>`<div class="stat"><div class="v" style="font-size:${String(M).length>7?"13px":"20px"}">${M}</div><div class="l">${k}</div></div>`).join("")}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Ventas por bodega</p>
        ${L.length?L.map(M=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span style="font-weight:500">${M.n}</span><span style="color:#888">${M.c} ped.</span><span style="font-weight:500">$${fr(M.t)}</span>
          </div>`).join(""):'<div class="empty">Sin ventas aún</div>'}
      </div>`}function _(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">🔗 Links útiles</p>
        ${[["Registro público (para compartir con invitados)","/registro"],["Panel de caja","/caja"],["Control de puerta","/puerta"],["Logística / envíos","/logistica"]].map(([E,b])=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span>${E}</span>
            <a href="${b}" target="_blank" class="btn" style="padding:3px 8px;font-size:11px;color:#6B1C1C;border-color:#6B1C1C">Abrir</a>
          </div>`).join("")}
      </div>
      <div class="card" style="max-width:480px;border:1.5px solid #A32D2D">
        <p style="font-size:13px;font-weight:500;color:#A32D2D;margin-bottom:8px">⚠️ Zona peligrosa</p>
        <p style="font-size:12px;color:#666;margin-bottom:12px;line-height:1.6">
          Borra <strong>todos los invitados y pedidos</strong> de la base de datos.<br>
          Los vinos de las bodegas NO se borran.<br>
          Usar solo antes del evento real para limpiar datos de prueba.
        </p>
        <button class="btn btn-red" style="width:100%;padding:10px" onclick="window._limpiar()">
          🗑 Limpiar todos los datos de prueba
        </button>
        <div id="limpiar-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
      </div>`}window._limpiar=async()=>{if(!confirm(`⚠️ ¿Seguro? Esto borra TODOS los invitados y pedidos.
Esta acción no se puede deshacer.`)||!confirm("Segunda confirmación: ¿borrar todos los datos de prueba?"))return;const E=document.getElementById("limpiar-msg");E.innerHTML='<span style="color:#888">Borrando...</span>';try{await $c(),E.innerHTML='<span style="color:#3B6D11">✓ Datos borrados correctamente</span>'}catch(b){E.innerHTML=`<span style="color:#A32D2D">Error: ${b.message}</span>`}},window._abrirWA=E=>{const b=t.find(M=>M.fireId===E);if(!b)return;i=E,document.getElementById("mw-tit").textContent=b.nombre+" "+b.apellido,document.getElementById("mw-cod").textContent=b.codigo||"",document.getElementById("mw-bdg").innerHTML=Ya(b.estado);const C=window.location.origin,D=`${C}/acceso?inv=${b.token}`;document.getElementById("mw-link").textContent=D;const V=b.estado==="pagado"?`Hola ${b.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${D}

_Personal e intransferible. Un solo uso en la entrada._`:`Hola ${b.nombre}! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`;document.getElementById("mw-msg").textContent=V;const L=document.getElementById("mw-btn-p");b.estado==="pendiente"?(L.textContent="✓ Marcar como pagado",L.disabled=!1,L.style.display="block"):L.style.display="none",Xa("mw-canvas",b.codigo||b.fireId,80),document.getElementById("modal-wa").style.display="flex"},window._descargarQR=async E=>{const b=t.find(st=>st.fireId===E);if(!b)return;window.qrcode||await new Promise((st,J)=>{const ue=document.createElement("script");ue.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",ue.onload=st,ue.onerror=J,document.head.appendChild(ue)});const D=window.location.origin+"/acceso?inv="+b.token,V=document.createElement("canvas"),L=600,M=800;V.width=L,V.height=M;const k=V.getContext("2d"),$=k.createLinearGradient(0,0,0,M);$.addColorStop(0,"#1A3A5C"),$.addColorStop(.55,"#2C5F8A"),$.addColorStop(1,"#3A7D44"),k.fillStyle=$,k.fillRect(0,0,L,M),k.fillStyle="#C9A96E",k.fillRect(0,M-4,L,4),k.fillStyle="rgba(255,255,255,0.7)",k.font="500 18px system-ui, -apple-system, sans-serif",k.textAlign="center",k.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",L/2,54),k.fillStyle="#ffffff",k.font="500 38px system-ui, -apple-system, sans-serif",k.fillText(b.nombre+" "+b.apellido,L/2,110),k.fillStyle="rgba(255,255,255,0.75)",k.font="400 22px system-ui, -apple-system, sans-serif",k.fillText(b.codigo,L/2,146),k.fillStyle="#3A7D44";const A=200,m=34,v=L/2-A/2,I=164;x(k,v,I,A,m,17),k.fill(),k.fillStyle="#ffffff",k.font="500 15px system-ui, -apple-system, sans-serif",k.fillText("✅ Bono confirmado",L/2,I+23);const w=320,R=340,y=L/2-w/2,mt=220;k.fillStyle="#ffffff",x(k,y,mt,w,R,16),k.fill();const Lt=qrcode(0,"M");Lt.addData(D),Lt.make();const Ke=Lt.getModuleCount(),Kt=240,le=y+(w-Kt)/2,Xe=mt+24,ce=Kt/Ke;k.fillStyle="#000000";for(let st=0;st<Ke;st++)for(let J=0;J<Ke;J++)Lt.isDark(st,J)&&k.fillRect(le+J*ce,Xe+st*ce,ce,ce);k.fillStyle="#1A3A5C",k.font="500 26px system-ui, -apple-system, sans-serif",k.fillText(b.codigo,L/2,mt+R-44),k.fillStyle="#888",k.font="400 14px system-ui, -apple-system, sans-serif",k.fillText("Mostrá este QR en la entrada",L/2,mt+R-20),k.fillStyle="rgba(255,255,255,0.85)",k.font="400 18px system-ui, -apple-system, sans-serif",k.fillText("Sáb 20 jun 2026  ·  19:30 hs",L/2,mt+R+50),k.fillText("Roma 656, Olivos",L/2,mt+R+80),k.fillStyle="rgba(255,255,255,0.5)",k.font="400 13px system-ui, -apple-system, sans-serif",k.fillText("Personal e intransferible · Un solo uso en la entrada",L/2,M-24),await new Promise(st=>{const J=new Image;J.onload=()=>{const qt=L-70-20,Ze=M-70-20;k.save(),k.beginPath(),k.arc(qt+70/2,Ze+70/2,70/2+3,0,Math.PI*2),k.fillStyle="rgba(255,255,255,0.25)",k.fill(),k.beginPath(),k.arc(qt+70/2,Ze+70/2,70/2,0,Math.PI*2),k.clip(),k.drawImage(J,qt,Ze,70,70),k.restore(),st()},J.onerror=st,J.src=Xs});const Je=document.createElement("a");Je.download="QR-"+b.codigo+".png",Je.href=V.toDataURL("image/png"),Je.click()};function x(E,b,C,D,V,L){E.beginPath(),E.moveTo(b+L,C),E.lineTo(b+D-L,C),E.quadraticCurveTo(b+D,C,b+D,C+L),E.lineTo(b+D,C+V-L),E.quadraticCurveTo(b+D,C+V,b+D-L,C+V),E.lineTo(b+L,C+V),E.quadraticCurveTo(b,C+V,b,C+V-L),E.lineTo(b,C+L),E.quadraticCurveTo(b,C,b+L,C),E.closePath()}window._pagarM=async()=>{const E=t.find(b=>b.fireId===i);!E||E.estado!=="pendiente"||await Ne(E.fireId,{estado:"pagado"})},window._copWA=()=>{var C;(C=navigator.clipboard)==null||C.writeText(document.getElementById("mw-msg").textContent).catch(()=>{});const E=document.querySelector("#modal-wa .btn-g"),b=E.innerHTML;E.innerHTML="✓ ¡Copiado!",setTimeout(()=>E.innerHTML=b,2e3)},window._cModal=()=>{document.getElementById("modal-wa").style.display="none",i=null},o()}const Ce=n=>Number(n).toLocaleString("es-AR");async function pm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function fm(n){zt();let t=[],e=[],r="cobrar",i=null,o=[],a=null,l=!1;n.innerHTML=Vt({title:"💰 Caja central",sub:"Sucovi 2027 · Roma 656, Olivos",backHref:"/admin"})+`
    <div class="nav">
      <button class="on" onclick="window._cajaVista('cobrar',this)">💳 Cobrar</button>
      <button onclick="window._cajaVista('pedidos',this)">📋 Pedidos</button>
      <button onclick="window._cajaVista('logistica',this)">🚚 Envíos</button>
    </div>
    <div id="caja-content" class="wrap"></div>

    <div id="scan-overlay" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Apuntá al QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status" style="color:#C9A96E;font-size:13px">Cargando escáner...</p>
      <button class="btn" onclick="window._cerrarScanner()"
        style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)">
        Cancelar
      </button>
    </div>`,Un(x=>{t=x}),Jr(x=>{e=x,r!=="cobrar"&&u()}),window._cajaVista=(x,E)=>{r=x,i=null,document.querySelectorAll(".nav button").forEach(b=>b.classList.remove("on")),E.classList.add("on"),u()};function u(){r==="cobrar"&&h(),r==="pedidos"&&g(),r==="logistica"&&_()}function h(){const x=document.getElementById("caja-content");if(i){p();return}x.innerHTML=`
      <p style="font-size:13px;color:#666;margin-bottom:12px">
        Buscá al invitado por código o escaneá su QR personal
      </p>
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <input id="buscar-caja" placeholder="Código INV-0001 o nombre..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda"></div>`}window._buscarInv=(x=!1)=>{var D;const E=(((D=document.getElementById("buscar-caja"))==null?void 0:D.value)||"").toLowerCase().trim();if(!E){document.getElementById("resultados-busqueda").innerHTML="";return}const b=t.filter(V=>V.estado!=="invalidado"&&((V.codigo||"").toLowerCase().includes(E)||(V.nombre+" "+V.apellido).toLowerCase().includes(E)));if(x&&b.length===1){window._seleccionarInv(b[0].fireId);return}const C=document.getElementById("resultados-busqueda");if(C){if(!b.length){C.innerHTML='<div class="empty">Sin resultados</div>';return}C.innerHTML=b.map(V=>`
      <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
        align-items:center;gap:10px" onclick="window._seleccionarInv('${V.fireId}')">
        <div class="avatar">${V.nombre[0]}${V.apellido[0]}</div>
        <div style="flex:1">
          <div style="font-size:14px;font-weight:500">${V.nombre} ${V.apellido}</div>
          <div style="font-size:12px;color:#888">${V.codigo} · ${V.tel}</div>
        </div>
        <span class="badge ${V.estado==="pagado"||V.estado==="ingresado"?"b-pago":"b-pend"}">
          ${V.estado==="pagado"||V.estado==="ingresado"?"Bono pagado":"Pendiente"}
        </span>
        <span style="color:#1A3A5C;font-size:18px">›</span>
      </div>`).join("")}},window._seleccionarInv=async x=>{i=t.find(E=>E.fireId===x),i&&(o=await Mc(x),p())};async function p(){const x=document.getElementById("caja-content");if(!x)return;const E=i,b=o.filter(V=>{var L;return(L=V.items)==null?void 0:L.length}),C=b.reduce((V,L)=>V+(L.items||[]).reduce((M,k)=>M+(k.sub||0),0),0),D=e.filter(V=>V.invFireId===E.fireId);x.innerHTML=`
      <button class="btn" onclick="window._volverCobrar()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Buscar otro</button>
      <div class="card" style="margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div class="avatar" style="width:44px;height:44px;font-size:15px">
            ${E.nombre[0]}${E.apellido[0]}
          </div>
          <div>
            <div style="font-size:16px;font-weight:500">${E.nombre} ${E.apellido}</div>
            <div style="font-size:12px;color:#888">${E.codigo}${E.tel?" · "+E.tel:""}</div>
          </div>
        </div>
        ${D.length?`<div style="background:#D1FAE5;border-radius:6px;padding:6px 10px;
          font-size:12px;color:#065F46">
          ✅ Ya tiene ${D.length} pedido${D.length>1?"s":""} pagado${D.length>1?"s":""} esta noche
        </div>`:""}
      </div>

      ${b.length?`
        ${b.map(V=>`
          <div class="card" style="margin-bottom:10px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">
              🍷 ${V.standNombre} · Stand #${V.standId}
              ${V.retiro==="envio"?'<span class="badge b-envi" style="margin-left:6px">🚚 Envío</span>':""}
            </div>
            ${(V.items||[]).map(L=>`
              <div style="display:flex;justify-content:space-between;font-size:13px;
                color:#555;padding:4px 0;border-bottom:.5px solid #f5f0eb">
                <span>${L.desc}</span><strong>$${Ce(L.sub)}</strong>
              </div>`).join("")}
            <div style="display:flex;justify-content:space-between;font-size:13px;
              font-weight:500;margin-top:8px;padding-top:6px;border-top:.5px solid #D6E4F0">
              <span>Subtotal</span>
              <span>$${Ce((V.items||[]).reduce((L,M)=>L+(M.sub||0),0))}</span>
            </div>
          </div>`).join("")}
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL</span><span style="color:#1A3A5C">$${Ce(C)}</span>
          </div>
          <p style="font-size:12px;color:#888;margin-top:4px">
            ${b.length} stand${b.length>1?"s":""}
          </p>
        </div>
        <div id="cobro-msg" style="font-size:12px;text-align:center;margin-bottom:8px"></div>
        <button class="btn btn-g" style="width:100%;padding:14px;font-size:16px"
          onclick="window._cobrar()">
          ✓ Cobrar $${Ce(C)} y generar vouchers
        </button>`:`
        <div class="card" style="text-align:center;padding:24px">
          <p style="font-size:15px;color:#aaa">El carrito está vacío</p>
          <p style="font-size:13px;color:#aaa;margin-top:6px">
            ${E.nombre} todavía no agregó vinos desde los stands.
          </p>
        </div>`}
    `}window._volverCobrar=()=>{i=null,o=[],h()},window._cobrar=async()=>{const x=i,E=o.filter(D=>{var V;return(V=D.items)==null?void 0:V.length});if(!E.length)return;const b=document.querySelector("#caja-content .btn-g");b&&(b.disabled=!0,b.textContent="Procesando...");const C=document.getElementById("cobro-msg");try{await Fc(x,E),await Oc(x.fireId),C.innerHTML=`<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${E.length} voucher${E.length>1?"s":""} generado${E.length>1?"s":""}.
      </span>`,b&&(b.style.display="none")}catch(D){C.innerHTML=`<span style="color:#C0392B">Error: ${D.message}</span>`,b&&(b.disabled=!1,b.textContent="Reintentar")}};function g(){const x=document.getElementById("caja-content"),E=e.filter(D=>D.retiro!=="envio"),b={pagado:"Pagado",listo:"Listo",entregado:"Entregado"},C={pagado:"b-pago",listo:"b-list",entregado:"b-entr"};if(!E.length){x.innerHTML='<div class="empty">Sin pedidos aún</div>';return}x.innerHTML=E.map(D=>{var V;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#1A3A5C;min-width:52px">
          #${(V=D.fireId)==null?void 0:V.slice(-4).toUpperCase()}
        </span>
        <div style="flex:1;min-width:80px">
          <div style="font-size:12px;font-weight:500">${D.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${D.standNombre}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:80px">
          ${(D.items||[]).map(L=>L.desc).join(" · ")}
        </span>
        <span style="font-size:14px;font-weight:500">$${Ce(D.total||0)}</span>
        <span class="badge ${C[D.estado]||"b-pago"}">${b[D.estado]||D.estado}</span>
      </div>`}).join("")}function _(){const x=document.getElementById("caja-content"),E=e.filter(b=>b.retiro==="envio");if(!E.length){x.innerHTML='<div class="empty">Sin envíos</div>';return}x.innerHTML=E.map(b=>{var C;return`
      <div class="card" style="margin-bottom:10px;border-left:3px solid #7C3AED">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:15px;font-weight:500;color:#1A3A5C">
            #${(C=b.fireId)==null?void 0:C.slice(-4).toUpperCase()}
          </span>
          <span class="badge b-envi">🚚 Envío</span>
        </div>
        <div style="font-size:13px;font-weight:500;margin-bottom:4px">${b.invNombre||""}</div>
        <div style="font-size:12px;color:#666;margin-bottom:6px">
          ${b.standNombre} · ${(b.items||[]).map(D=>D.desc).join(" · ")}
        </div>
        <div style="font-size:15px;font-weight:500">$${Ce(b.total||0)}</div>
      </div>`}).join("")}window._abrirScanner=async()=>{document.getElementById("scan-overlay").style.display="flex";const x=document.getElementById("scan-status");x&&(x.textContent="Cargando escáner...");try{await pm(),a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const E=document.getElementById("scan-video");E.srcObject=a,l=!0,x&&(x.textContent="Buscando QR...");const b=document.createElement("canvas"),C=b.getContext("2d",{willReadFrequently:!0}),D=()=>{if(l){if(E.readyState===E.HAVE_ENOUGH_DATA&&E.videoWidth>0){b.width=E.videoWidth,b.height=E.videoHeight,C.drawImage(E,0,0);const V=C.getImageData(0,0,b.width,b.height),L=window.jsQR(V.data,V.width,V.height,{inversionAttempts:"dontInvert"});if(L&&L.data){const M=L.data;window._cerrarScanner();const k=M.match(/INV-\d+/),$=M.match(/inv=([A-Z0-9]+)/i);if(k){const A=document.getElementById("buscar-caja");A&&(A.value=k[0],window._buscarInv(!0))}else $&&Ks(async()=>{const{buscarInvitadoPorToken:A}=await Promise.resolve().then(()=>Gc);return{buscarInvitadoPorToken:A}},void 0).then(({buscarInvitadoPorToken:A})=>A($[1]).then(m=>{m&&window._seleccionarInv(m.fireId)}));return}}l&&requestAnimationFrame(D)}};E.addEventListener("loadeddata",()=>requestAnimationFrame(D))}catch{x&&(x.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}},window._cerrarScanner=()=>{l=!1,a&&(a.getTracks().forEach(E=>E.stop()),a=null);const x=document.getElementById("scan-overlay");x&&(x.style.display="none")},h()}const Si=n=>Number(n).toLocaleString("es-AR");function mm(n,t,e){if(zt(),!e||e.estado==="invalidado"){n.innerHTML=Vt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <h2 style="font-size:18px;font-weight:500;color:#6B1C1C;margin-bottom:8px">
          Acceso requerido
        </h2>
        <p style="font-size:14px;color:#666;line-height:1.6">
          Para hacer pedidos necesitás escanear tu QR personal de acreditación primero.<br><br>
          Si ya tenés tu QR, escanealo nuevamente.
        </p>
        <p style="font-size:12px;color:#aaa;margin-top:16px">
          Consultas: José Pannunzio +54 9 11 5400-1313
        </p>
      </div>`;return}if(e.estado==="pendiente"){n.innerHTML=Vt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">
          Bono pendiente de pago
        </h2>
        <p style="font-size:14px;color:#666;">
          Hola ${e.nombre}, tu bono ($35.000) todavía no fue confirmado.<br>
          Pasá por la entrada para abonar.
        </p>
      </div>`;return}let r=[],i="stand";const o=`/acceso?inv=${e.token}`;n.innerHTML=Vt({title:"🍷 "+t.nombre,sub:t.region+" · Stand #"+t.id,actions:[`<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
        <div style="font-size:11px;background:rgba(255,255,255,.18);padding:3px 8px;border-radius:6px;color:#fff">✓ ${e.nombre}</div>
        <a href="${o}" style="font-size:10px;color:rgba(255,255,255,.75)">Ver carrito →</a>
      </div>`]})+`

    <div style="max-width:440px;margin:0 auto;padding:14px">
      <div style="background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;
        padding:9px 12px;font-size:12px;color:#6B4000;margin-bottom:14px">
        🎟 Degustaciones incluidas en tu bono.<br>
        Elegí botellas o cajas para llevar — se acumulan en tu carrito y pagás todo junto en caja.
      </div>

      <div id="menu-lista"><div class="empty">Cargando carta...</div></div>

      <!-- Opción de retiro para este stand -->
      <div id="retiro-box" style="display:none;margin-top:14px">
        <p style="font-size:12px;font-weight:500;color:#555;margin-bottom:6px">
          ¿Cómo retirás de <strong>${t.nombre}</strong>?
        </p>
        <div class="retiro-opt">
          <div class="retiro-btn sel" id="rb-stand" onclick="window._sRet('stand')">
            🍷<br><span style="font-size:11px">Retiro en stand</span>
          </div>
          <div class="retiro-btn" id="rb-envio" onclick="window._sRet('envio')">
            🚚<br><span style="font-size:11px">Envío a domicilio</span>
          </div>
        </div>
        <div id="envio-form" style="display:none;margin-bottom:12px">
          <div class="card">
            <p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">
              🚚 Datos de envío para ${t.nombre}
            </p>
            <div style="display:flex;flex-direction:column;gap:6px">
              <input id="env-nom" placeholder="Nombre completo">
              <input id="env-tel" placeholder="Teléfono de contacto">
              <input id="env-dir" placeholder="Dirección completa">
            </div>
          </div>
        </div>
      </div>

      <!-- Resumen de lo que tiene de este stand -->
      <div id="stand-resumen" style="display:none;margin-top:10px">
        <div class="card" style="background:#f8f8f8">
          <p style="font-size:11px;font-weight:500;color:#6B1C1C;margin-bottom:6px">
            En tu carrito de ${t.nombre}:
          </p>
          <div id="stand-resumen-lines"></div>
          <div style="font-size:12px;color:#aaa;margin-top:8px;text-align:center">
            <a href="${o}" style="color:#6B1C1C;text-decoration:underline">
              Ver carrito completo →
            </a>
          </div>
        </div>
      </div>

      <div id="add-msg" style="text-align:center;font-size:12px;color:#3B6D11;
        margin-top:8px;min-height:20px"></div>
    </div>

    <!-- FAB carrito -->
    <button class="cart-fab" id="cart-fab" style="display:none"
      onclick="window.location.href='${o}'">
      🛒 <span id="cart-fab-txt">Ver carrito</span>
    </button>`,Gs(t.id,u=>{r=u,a()}),$s(e.fireId,u=>{var E,b,C;const h=u.find(D=>Number(D.standId)===t.id),p=u.reduce((D,V)=>D+(V.items||[]).reduce((L,M)=>L+(M.sub||0),0),0),g=u.reduce((D,V)=>D+(V.items||[]).length,0),_=document.getElementById("cart-fab"),x=document.getElementById("cart-fab-txt");_&&g>0?(_.style.display="flex",x.textContent=`Ver carrito · $${Si(p)}`):_&&(_.style.display="none"),h&&((E=h.items)!=null&&E.length)?(i=h.retiro||"stand",(b=document.getElementById("rb-stand"))==null||b.classList.toggle("sel",i==="stand"),(C=document.getElementById("rb-envio"))==null||C.classList.toggle("sel",i==="envio"),document.getElementById("retiro-box").style.display="block",document.getElementById("stand-resumen").style.display="block",document.getElementById("stand-resumen-lines").innerHTML=h.items.map(D=>`
          <div style="display:flex;justify-content:space-between;font-size:12px;
            color:#555;margin-bottom:4px">
            <span>${D.desc}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-weight:500">$${Si(D.sub)}</span>
              <button onclick="window._quitarItem('${D.key}')"
                style="border:none;background:none;color:#A32D2D;cursor:pointer;
                font-size:13px;padding:0 2px">✕</button>
            </div>
          </div>`).join("")):(document.getElementById("stand-resumen").style.display="none",h===null&&(document.getElementById("retiro-box").style.display="none"))});function a(){const u=document.getElementById("menu-lista");if(u){if(!r.length){u.innerHTML='<div class="empty">La carta estará disponible pronto.</div>';return}u.innerHTML=r.map((h,p)=>`
      <div class="vino-card">
        <div style="font-size:14px;font-weight:500">${h.nombre}</div>
        <div style="font-size:11px;color:#888;margin-top:2px">
          ${h.varietal||""}${h.cosecha?" · "+h.cosecha:""}
        </div>
        ${h.descripcion?`<div style="font-size:12px;color:#666;margin-top:3px">${h.descripcion}</div>`:""}
        ${(h.unidades||[]).map((g,_)=>`
          <div class="qty-row">
            <span class="qty-label">
              ${g.u} — <span style="color:#6B1C1C;font-weight:600">$${Si(g.p)}</span>
            </span>
            <button class="qty-btn" onclick="window._agregar(${p},${_},-1)">−</button>
            <span id="qv${p}_${_}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" onclick="window._agregar(${p},${_},1)">+</button>
          </div>`).join("")}
      </div>`).join("")}}const l={};window._agregar=async(u,h,p)=>{const g=r[u];if(!g)return;const _=(g.unidades||[])[h];if(!_)return;const x=`${u}_${h}`;l[x]=Math.max(0,(l[x]||0)+p);const E=document.getElementById(`qv${u}_${h}`);if(E&&(E.textContent=l[x]),l[x]===0)await kr(e.fireId,t.id,x);else{const b={key:x,desc:`${g.nombre} — ${_.u} ×${l[x]}`,sub:_.p*l[x],vinoNombre:g.nombre,unidad:_.u,precio:_.p,qty:l[x]};await Bc(e.fireId,t.id,t.nombre,b,i),document.getElementById("retiro-box").style.display="block";const C=document.getElementById("add-msg");C.textContent=`✓ ${g.nombre} (${_.u}) agregado al carrito`,setTimeout(()=>{C.textContent=""},2e3)}},window._sRet=async u=>{i=u,document.getElementById("rb-stand").classList.toggle("sel",u==="stand"),document.getElementById("rb-envio").classList.toggle("sel",u==="envio"),document.getElementById("envio-form").style.display=u==="envio"?"block":"none",await Qs(e.fireId,t.id,u)},window._quitarItem=async u=>{await kr(e.fireId,t.id,u);const[h,p]=u.split("_").map(Number);l[u]=0;const g=document.getElementById(`qv${h}_${p}`);g&&(g.textContent=0)}}window._scannerStop=null;async function gm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}window._initScanner=async function(n,t,e){const r=e?document.getElementById(e):null;r&&(r.textContent="Iniciando cámara...");try{await gm();const i=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),o=document.getElementById(n);if(!o){i.getTracks().forEach(p=>p.stop());return}o.srcObject=i;const a=document.createElement("canvas"),l=a.getContext("2d",{willReadFrequently:!0});let u=!0;window._scannerStop=()=>{u=!1,i.getTracks().forEach(p=>p.stop()),window._scannerStop=null},r&&(r.textContent="Buscando QR...");const h=()=>{var p;if(u){if(o.readyState===o.HAVE_ENOUGH_DATA&&o.videoWidth>0){a.width=o.videoWidth,a.height=o.videoHeight,l.drawImage(o,0,0);const g=l.getImageData(0,0,a.width,a.height),_=window.jsQR(g.data,g.width,g.height,{inversionAttempts:"dontInvert"});if(_&&_.data){(p=window._scannerStop)==null||p.call(window),t(_.data);return}}requestAnimationFrame(h)}};o.addEventListener("loadeddata",()=>requestAnimationFrame(h))}catch{r&&(r.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}};const Vi=n=>Number(n).toLocaleString("es-AR");function Kc(n,t){if(zt(),!sessionStorage.getItem("stand-auth-"+t.id)){n.innerHTML=`
      ${Vt({title:"🍷 "+t.nombre,sub:"Panel del stand · Solo personal autorizado"})}
      <div style="max-width:320px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:40px;margin-bottom:12px">🔐</div>
        <p style="font-size:14px;color:#666;margin-bottom:16px">
          Ingresá la contraseña del stand para ver los pedidos
        </p>
        <input id="sp" type="password" placeholder="Contraseña del stand"
          style="text-align:center;font-size:16px;margin-bottom:10px"
          onkeydown="if(event.key==='Enter') window._loginStand()">
        <button class="btn btn-v" style="width:100%;padding:10px"
          onclick="window._loginStand()">Ingresar</button>
        <div id="sp-err" style="margin-top:8px;font-size:12px;color:#A32D2D"></div>
      </div>`,window._loginStand=()=>{document.getElementById("sp").value.trim()===t.pass?(sessionStorage.setItem("stand-auth-"+t.id,"1"),Kc(n,t)):document.getElementById("sp-err").textContent="Contraseña incorrecta"};return}let r=[];n.innerHTML=Vt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Pedidos para entregar",actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('stand-auth-${t.id}');location.reload()">Salir</button>`]})+`
    <div class="wrap">
      <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;align-items:center">
        <button id="sf-pend" class="btn"
          onclick="window._setSF('pendientes',this)"
          style="font-size:11px;background:#EAF3DE;color:#3B6D11;border-color:#3B6D11">
          🟢 Listos para retirar
        </button>
        <button id="sf-all" class="btn" onclick="window._setSF('todos',this)" style="font-size:11px">
          📋 Todos
        </button>
        <button class="btn btn-b" onclick="window._abrirScannerStand()" style="font-size:11px;margin-left:auto">
          📷 Escanear voucher
        </button>
      </div>
      <div id="sp-pedidos"></div>
    </div>

    <!-- Scanner QR invitado -->
    <div id="scan-overlay-inv" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Escaneá el QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video-inv" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-inv" style="color:#C9A96E;font-size:13px">Buscando QR...</p>
      <button class="btn"
        style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)"
        onclick="window._cerrarScannerInvitado()">Cancelar</button>
    </div>

    <div id="scan-overlay-stand" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Escaneá el voucher del cliente</p>
      <div class="scan-frame">
        <video id="scan-video-stand" autoplay playsinline></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-stand" style="color:#C9A96E;font-size:13px">Buscando voucher...</p>
      <div id="scan-result-stand" style="background:rgba(255,255,255,.1);border-radius:8px;
        padding:12px;margin:0 16px;text-align:center;min-height:40px"></div>
      <button class="btn"
        style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)"
        onclick="window._cerrarScannerStand()">Cerrar</button>
    </div>
    <div id="voucher-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(0,0,0,.5);z-index:200;align-items:center;justify-content:center;padding:16px">
      <div class="card" style="width:100%;max-width:360px" id="voucher-modal-content"></div>
    </div>`;let i="pendientes";window._setSF=(a,l)=>{i=a,["sf-pend","sf-all"].forEach(u=>{const h=document.getElementById(u);h.style.background="#fff",h.style.color="#333",h.style.borderColor="#ccc"}),a==="pendientes"?(l.style.background="#EAF3DE",l.style.color="#3B6D11",l.style.borderColor="#3B6D11"):(l.style.background="#6B1C1C",l.style.color="#fff",l.style.borderColor="#6B1C1C"),o()},jc(t.id,a=>{r=a,o()});function o(){const a=document.getElementById("sp-pedidos");if(!a)return;let l=i==="pendientes"?r.filter(p=>p.estado==="pagado"):r;if(!l.length){a.innerHTML=`<div class="empty">${i==="pendientes"?"Sin pedidos listos para retirar 🎉":"Sin pedidos"}</div>`;return}const u={pagado:"Listo para retirar",entregado:"Entregado"},h={pagado:"b-pago",entregado:"b-entr"};a.innerHTML=l.map(p=>{var g;return`
      <div class="card" style="margin-bottom:10px;border-left:3px solid ${p.estado==="entregado"?"#aaa":"#3B6D11"}">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <div>
            <span style="font-size:18px;font-weight:500;color:#6B1C1C">
              #${(g=p.fireId)==null?void 0:g.slice(-4).toUpperCase()}
            </span>
            <span style="font-size:13px;font-weight:500;margin-left:8px">${p.invNombre||""}</span>
          </div>
          <span class="badge ${h[p.estado]||"b-pago"}">${u[p.estado]||p.estado}</span>
        </div>
        <div style="font-size:12px;color:#555;margin-bottom:8px;line-height:1.7">
          ${(p.items||[]).map(_=>`${_.desc} — <strong>$${Vi(_.sub)}</strong>`).join("<br>")}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;
          border-top:.5px solid #e0d5c8;padding-top:8px">
          <span style="font-size:16px;font-weight:500">$${Vi(p.total||0)}</span>
          ${p.estado==="pagado"?`<button class="btn btn-g" onclick="window._entregarPedido('${p.fireId}')">
                ✓ Marcar entregado
               </button>`:'<span style="font-size:12px;color:#aaa">✓ Entregado</span>'}
        </div>
      </div>`}).join("")}window._entregarPedido=async a=>{await qc(a)},window._abrirScannerStand=async()=>{document.getElementById("scan-overlay-stand").style.display="flex",await window._initScanner("scan-video-stand",h=>{window._cerrarScannerStand();const p=r.find(g=>h.includes(g.fireId));p&&a(p)},"scan-status-stand");function a(h){const p=h.estado==="pagado",g=document.getElementById("voucher-modal");document.getElementById("voucher-modal-content").innerHTML=`
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:32px">${p?"✅":"⏳"}</div>
        <h3 style="font-size:16px;font-weight:500;color:${p?"#3B6D11":"#854F0B"};margin-top:6px">
          ${p?"PAGADO — Entregar":"PENDIENTE — No entregar"}
        </h3>
      </div>
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${h.invNombre||""}</div>
      <div style="font-size:13px;color:#666;margin-bottom:10px">
        ${(h.items||[]).map(_=>_.desc).join("<br>")}
      </div>
      <div style="font-size:16px;font-weight:500;margin-bottom:12px">$${Vi(h.total||0)}</div>
      ${p?`
        <button class="btn btn-g" style="width:100%;padding:10px;margin-bottom:8px"
          onclick="window._entregarPedido('${h.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>`:""}
      <button class="btn" style="width:100%"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`,g.style.display="flex"}let l=null,u=!1;window._abrirScannerInvitado=async()=>{document.getElementById("scan-overlay-inv").style.display="flex";const h=document.getElementById("scan-status-inv");try{window.jsQR||await new Promise((E,b)=>{const C=document.createElement("script");C.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",C.onload=E,C.onerror=b,document.head.appendChild(C)}),l=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const p=document.getElementById("scan-video-inv");p.srcObject=l,u=!0,h&&(h.textContent="Buscando QR del invitado...");const g=document.createElement("canvas"),_=g.getContext("2d",{willReadFrequently:!0}),x=()=>{if(u){if(p.readyState===p.HAVE_ENOUGH_DATA&&p.videoWidth>0){g.width=p.videoWidth,g.height=p.videoHeight,_.drawImage(p,0,0);const E=_.getImageData(0,0,g.width,g.height),b=window.jsQR(E.data,E.width,E.height,{inversionAttempts:"dontInvert"});if(b&&b.data){const C=b.data;window._cerrarScannerInvitado();const D=C.match(/inv=([A-Z0-9]+)/i),V=C.match(/INV-\d+/);D?window.location.href="/stand/${bodega.id}?inv="+D[1]:V&&h&&(h.textContent="Usá el link del invitado, no el código.");return}}u&&requestAnimationFrame(x)}};p.addEventListener("loadeddata",()=>requestAnimationFrame(x))}catch{h&&(h.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerInvitado=()=>{u=!1,l&&(l.getTracks().forEach(h=>h.stop()),l=null),document.getElementById("scan-overlay-inv").style.display="none"},window._cerrarScannerStand=()=>{var h;(h=window._scannerStop)==null||h.call(window),document.getElementById("scan-overlay-stand").style.display="none"}}}const ym=n=>Number(n).toLocaleString("es-AR");function Xc(n,t){if(zt(),!sessionStorage.getItem("bodega-auth-"+t.id)){n.innerHTML=`
      ${Vt({title:"🍷 "+t.nombre,sub:"Carga de carta de vinos"})}
      <div style="max-width:320px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:40px;margin-bottom:12px">🔐</div>
        <p style="font-size:14px;color:#666;margin-bottom:16px">
          Ingresá la contraseña del stand para cargar los vinos
        </p>
        <input id="bp" type="password" placeholder="Contraseña"
          style="text-align:center;font-size:16px;margin-bottom:10px"
          onkeydown="if(event.key==='Enter') window._loginBodega()">
        <button class="btn btn-v" style="width:100%;padding:10px"
          onclick="window._loginBodega()">Ingresar</button>
        <div id="bp-err" style="margin-top:8px;font-size:12px;color:#A32D2D"></div>
      </div>`,window._loginBodega=()=>{document.getElementById("bp").value.trim()===t.pass?(sessionStorage.setItem("bodega-auth-"+t.id,"1"),Xc(n,t)):document.getElementById("bp-err").textContent="Contraseña incorrecta"};return}let r=[],i=null;n.innerHTML=`
    ${Vt({title:"🍷 "+t.nombre,sub:"Carga de carta · Stand #"+t.id,actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('bodega-auth-${t.id}');location.reload()">Salir</button>`]})}
    <div style="max-width:600px;margin:0 auto;padding:14px">
      <div class="card" style="margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:12px"
          id="form-titulo">Agregar vino</p>
        ${[["vn","Nombre del vino *","text","Ej: Gran Malbec 2022"],["vv","Varietal / Blend","text","Ej: Malbec"],["vc","Cosecha","number","2022"],["vd","Descripción corta","text","Tinto con notas de..."],["vb","Precio botella ($)","number",""],["v6","Precio caja x6 ($)","number",""],["v12","Precio caja x12 ($)","number",""]].map(([l,u,h,p])=>`
          <div style="margin-bottom:8px">
            <label style="font-size:11px;color:#666">${u}</label>
            <input id="${l}" type="${h}" placeholder="${p}" style="margin-top:3px">
          </div>`).join("")}
        <div style="display:flex;gap:8px;margin-top:4px">
          <button class="btn btn-v" style="flex:1;padding:9px" onclick="window._guardarV()">
            Guardar
          </button>
          <button class="btn" id="btn-cancelar-edit" style="display:none"
            onclick="window._cancelarEdit()">Cancelar</button>
        </div>
        <div id="vm" style="margin-top:8px;font-size:12px;text-align:center"></div>
      </div>

      <div class="card">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:10px">
          Vinos cargados
        </p>
        <div id="vl"><div class="empty">Sin vinos aún</div></div>
      </div>
    </div>`,Gs(t.id,l=>{r=l;const u=document.getElementById("vl");if(u){if(!r.length){u.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}u.innerHTML=r.map(h=>`
      <div style="padding:10px 0;border-bottom:.5px solid #e0d5c8">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="flex:1">
            <div style="font-size:14px;font-weight:500">${h.nombre}</div>
            <div style="font-size:11px;color:#888;margin-top:2px">
              ${h.varietal||""}${h.cosecha?" · "+h.cosecha:""}
            </div>
            ${h.descripcion?`<div style="font-size:12px;color:#666;margin-top:2px">${h.descripcion}</div>`:""}
            <div style="margin-top:4px;display:flex;gap:8px;flex-wrap:wrap">
              ${(h.unidades||[]).map(p=>`<span style="font-size:12px;background:#f5f0eb;padding:2px 8px;
                  border-radius:6px;color:#6B1C1C">
                  ${p.u}: $${ym(p.p)}
                </span>`).join("")}
            </div>
          </div>
          <div style="display:flex;gap:5px;margin-left:8px">
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5"
              onclick="window._editarV('${h.fireId}')">✏ Editar</button>
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D"
              onclick="window._eliminarV('${h.fireId}')">✕</button>
          </div>
        </div>
      </div>`).join("")}});const o=["vn","vv","vc","vd","vb","v6","v12"],a=()=>{o.forEach(l=>{const u=document.getElementById(l);u&&(u.value="")})};window._guardarV=async()=>{const l=document.getElementById("vn").value.trim(),u=document.getElementById("vm");if(!l){u.innerHTML='<span style="color:#A32D2D">El nombre es requerido.</span>';return}const h=parseFloat(document.getElementById("vb").value),p=parseFloat(document.getElementById("v6").value),g=parseFloat(document.getElementById("v12").value),_=[];if(h&&_.push({u:"Botella",p:h}),p&&_.push({u:"Caja x6",p}),g&&_.push({u:"Caja x12",p:g}),!_.length){u.innerHTML='<span style="color:#A32D2D">Ingresá al menos un precio.</span>';return}const x={nombre:l,varietal:document.getElementById("vv").value.trim(),cosecha:document.getElementById("vc").value.trim(),descripcion:document.getElementById("vd").value.trim(),unidades:_};u.innerHTML='<span style="color:#888">Guardando...</span>';try{i?(await Wc(t.id,i,x),i=null):await Uc(t.id,x),a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none",u.innerHTML='<span style="color:#3B6D11">✓ Guardado correctamente</span>',setTimeout(()=>{const E=document.getElementById("vm");E&&(E.innerHTML="")},3e3)}catch(E){u.innerHTML=`<span style="color:#A32D2D">Error: ${E.message}</span>`}},window._editarV=l=>{const u=r.find(_=>_.fireId===l);if(!u)return;i=l,document.getElementById("form-titulo").textContent=`Editando: ${u.nombre}`,document.getElementById("vn").value=u.nombre||"",document.getElementById("vv").value=u.varietal||"",document.getElementById("vc").value=u.cosecha||"",document.getElementById("vd").value=u.descripcion||"";const h=(u.unidades||[]).find(_=>_.u==="Botella"),p=(u.unidades||[]).find(_=>_.u==="Caja x6"),g=(u.unidades||[]).find(_=>_.u==="Caja x12");document.getElementById("vb").value=(h==null?void 0:h.p)||"",document.getElementById("v6").value=(p==null?void 0:p.p)||"",document.getElementById("v12").value=(g==null?void 0:g.p)||"",document.getElementById("btn-cancelar-edit").style.display="block",window.scrollTo({top:0,behavior:"smooth"})},window._cancelarEdit=()=>{i=null,a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none"},window._eliminarV=async l=>{const u=r.find(h=>h.fireId===l);confirm(`¿Eliminar "${u==null?void 0:u.nombre}"?`)&&await Qc(t.id,l)}}window._scannerStop=null;async function vm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}window._initScanner=async function(n,t,e){const r=e?document.getElementById(e):null;r&&(r.textContent="Iniciando cámara...");try{await vm();const i=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),o=document.getElementById(n);if(!o){i.getTracks().forEach(p=>p.stop());return}o.srcObject=i;const a=document.createElement("canvas"),l=a.getContext("2d",{willReadFrequently:!0});let u=!0;window._scannerStop=()=>{u=!1,i.getTracks().forEach(p=>p.stop()),window._scannerStop=null},r&&(r.textContent="Buscando QR...");const h=()=>{var p;if(u){if(o.readyState===o.HAVE_ENOUGH_DATA&&o.videoWidth>0){a.width=o.videoWidth,a.height=o.videoHeight,l.drawImage(o,0,0);const g=l.getImageData(0,0,a.width,a.height),_=window.jsQR(g.data,g.width,g.height,{inversionAttempts:"dontInvert"});if(_&&_.data){(p=window._scannerStop)==null||p.call(window),t(_.data);return}}requestAnimationFrame(h)}};o.addEventListener("loadeddata",()=>requestAnimationFrame(h))}catch{r&&(r.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}};function Am(n){zt();let t=[],e=[];n.innerHTML=`
    <div class="hdr">
      <div><h1>🚪 Control de puerta</h1><div class="sub">Solo ingresa quien tiene bono pagado</div></div>
      <a href="/admin" class="btn" style="font-size:11px;padding:5px 9px;color:#fff;border-color:rgba(255,255,255,.3);text-decoration:none;background:rgba(255,255,255,.15)">← Panel</a>
    </div>
    <div class="gold"></div>
    <div style="max-width:400px;margin:0 auto;padding:16px">
      <p style="font-size:12px;color:#888;margin-bottom:10px;text-align:center">
        Ingresá el código del invitado para validar el ingreso
      </p>
      <div style="display:flex;gap:8px;margin-bottom:4px">
        <input id="scan-cod" placeholder="INV-0001" style="flex:1;font-size:15px;text-transform:uppercase"
          onkeydown="if(event.key==='Enter') window._vPuerta()">
        <button class="btn btn-v" onclick="window._vPuerta()">✓ Validar</button>
        <button class="btn btn-b" onclick="window._abrirScannerPuerta()" title="Escanear QR">📷</button>
      </div>
      
    <div id="scan-overlay-puerta" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Apunta al QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video-puerta" autoplay playsinline muted style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-puerta" style="color:#C9A96E;font-size:13px">Iniciando camara...</p>
      <button class="btn" style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)" onclick="window._cerrarScannerPuerta()">Cancelar</button>
    </div>
    <div id="scan-res"></div>
      <div class="sep"></div>
      <p style="font-size:11px;color:#888;font-weight:500;margin-bottom:6px">ÚLTIMOS INGRESOS</p>
      <div id="scan-ult"></div>
    </div>`,Un(i=>{t=i}),window._vPuerta=async()=>{const i=document.getElementById("scan-cod").value.trim().toUpperCase(),o=document.getElementById("scan-res");if(!i)return;const a=t.find(u=>u.codigo===i);if(!a){o.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">❌ Código no encontrado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:4px">${i} no existe en el sistema.</p>
      </div>`;return}if(a.estado==="ingresado"){o.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">⛔ QR ya utilizado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:6px">
          <strong>${a.nombre} ${a.apellido}</strong> ya ingresó al evento.<br>
          Este QR no puede usarse nuevamente. No permitir el ingreso.
        </p>
      </div>`;return}if(a.estado==="pendiente"){o.innerHTML=`<div class="result-warn">
        <p style="font-size:16px;font-weight:500;color:#854F0B">⏳ Pago pendiente</p>
        <p style="font-size:12px;color:#633806;margin-top:4px">
          <strong>${a.nombre} ${a.apellido}</strong> no abonó el bono ($35.000).
        </p>
        <button class="btn btn-a" style="margin-top:10px;width:100%;font-size:12px"
          onclick="window._cobrarPuerta('${a.fireId}','${a.codigo}')">
          💰 Cobrar $35.000 y habilitar ingreso
        </button>
      </div>`;return}await Ne(a.fireId,{estado:"ingresado"});const l=new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});e.unshift({nombre:a.nombre+" "+a.apellido,codigo:i,hora:l}),o.innerHTML=`<div class="result-ok">
      <p style="font-size:28px">✅</p>
      <p style="font-size:18px;font-weight:500;color:#3B6D11;margin-top:6px">¡Bienvenido/a!</p>
      <p style="font-size:15px;color:#27500A;margin-top:2px">${a.nombre} ${a.apellido}</p>
      <p style="font-size:11px;color:#3B6D11;margin-top:6px;opacity:.8">
        QR marcado — no puede reutilizarse
      </p>
    </div>`,document.getElementById("scan-cod").value="",r()},window._cobrarPuerta=async(i,o)=>{await Ne(i,{estado:"pagado"}),document.getElementById("scan-cod").value=o,window._vPuerta()};function r(){const i=document.getElementById("scan-ult");if(i){if(!e.length){i.innerHTML='<p style="font-size:12px;color:#aaa">Sin ingresos aún</p>';return}i.innerHTML=e.slice(0,6).map(o=>`<div style="display:flex;justify-content:space-between;padding:5px 0;
        border-bottom:.5px solid #e0d5c8;font-size:12px">
        <span>✓ ${o.nombre}</span>
        <span style="color:#aaa">${o.codigo} · ${o.hora}</span>
      </div>`).join("")}}window._abrirScannerPuerta=async()=>{document.getElementById("scan-overlay-puerta").style.display="flex";let i=!0;try{await window._initScanner("scan-video-puerta",async o=>{i=!1,window._cerrarScannerPuerta();const a=o.match(/INV-\d+/),l=o.match(/inv=([A-Z0-9]+)/i);if(a)document.getElementById("scan-cod").value=a[0],window._vPuerta();else if(l){const u=await buscarInvitadoPorToken(l[1]);u&&(document.getElementById("scan-cod").value=u.codigo,window._vPuerta())}},"scan-status-puerta")}catch{document.getElementById("scan-status-puerta").textContent="No se pudo acceder a la camara."}},window._cerrarScannerPuerta=()=>{window._scannerStop&&window._scannerStop(),document.getElementById("scan-overlay-puerta").style.display="none"}}const _m=n=>Number(n).toLocaleString("es-AR"),Em={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},bm={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"},Im={pendiente:"Cobrar ✓",pagado:"Listo ✓",listo:"Entregar ✓"},wm={pendiente:"btn-g",pagado:"btn-b",listo:"btn-v"},xm={pendiente:"pagado",pagado:"listo",listo:"entregado"};function Tm(n){zt();let t=[];n.innerHTML=`
    ${Vt({title:"🚚 Logística — Envíos",sub:"Pedidos para enviar a domicilio",backHref:"/admin"})}
    <div class="wrap" id="log-lista"></div>`,Jr(r=>{t=r,e()}),window._avzLog=async(r,i)=>{await Hc(r,i)};function e(){const r=document.getElementById("log-lista");if(!r)return;const i=t.filter(l=>l.retiro==="envio");if(!i.length){r.innerHTML='<div class="empty">🚚<br><br>Sin pedidos de envío</div>';return}const o=i.filter(l=>l.estado!=="entregado"),a=i.filter(l=>l.estado==="entregado");r.innerHTML=(o.length?`<p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">Pendientes (${o.length})</p>`:"")+o.map(l=>{var u;return`
        <div class="card" style="margin-bottom:10px;border-left:3px solid #5A1E99">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span style="font-size:15px;font-weight:500;color:#6B1C1C">#${(u=l.fireId)==null?void 0:u.slice(-4).toUpperCase()}</span>
            <span class="badge ${bm[l.estado]}">${Em[l.estado]}</span>
          </div>
          <div style="font-size:13px;font-weight:500;margin-bottom:4px">${l.invNombre||""}</div>
          <div style="font-size:12px;color:#666;margin-bottom:6px">
            ${l.standNombre} · ${(l.items||[]).map(h=>h.desc).join(" · ")}
          </div>
          ${l.envio?`
            <div style="background:#EDE6FB;border-radius:8px;padding:8px 10px;font-size:12px;color:#5A1E99;margin-bottom:8px">
              <strong>${l.envio.nombre}</strong><br>${l.envio.dir}<br>${l.envio.tel}
            </div>`:""}
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:15px;font-weight:500">$${_m(l.total||0)}</span>
            ${xm[l.estado]?`<button class="btn ${wm[l.estado]}" style="font-size:12px"
                  onclick="window._avzLog('${l.fireId}','${l.estado}')">${Im[l.estado]}</button>`:""}
          </div>
        </div>`}).join("")+(a.length?`<div class="sep"></div><p style="font-size:12px;color:#aaa;margin:8px 0">Completados (${a.length})</p>`:"")+a.map(l=>{var u;return`
        <div style="display:flex;justify-content:space-between;padding:6px 0;
          border-bottom:.5px solid #e0d5c8;font-size:12px">
          <span>#${(u=l.fireId)==null?void 0:u.slice(-4).toUpperCase()} — ${l.invNombre}</span>
          <span class="badge b-entr">Entregado</span>
        </div>`}).join("")}}async function Rm(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Cm(n,t,e){await Rm();const r=document.getElementById(n);if(r)try{const i=qrcode(0,"M");i.addData(String(t)),i.make();const o=i.getModuleCount(),a=e/o;r.width=e,r.height=e;const l=r.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let u=0;u<o;u++)for(let h=0;h<o;h++)i.isDark(u,h)&&l.fillRect(h*a,u*a,a,a)}catch(i){console.error("QR error:",i)}}const Pm=n=>Number(n).toLocaleString("es-AR");async function Sm(n,t){if(zt(),n.innerHTML=ns(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <p style="color:#aaa;font-size:14px">Cargando...</p>
    </div>`,!t){tl(n,"Link inválido","Este link no contiene información de acreditación.");return}const e=await Dr(t);if(!e){tl(n,"No encontrado","Este link no corresponde a ningún invitado registrado.");return}n.innerHTML=ns(e)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center" id="acc-body"></div>`;const r=document.getElementById("acc-body");if(e.estado==="invalidado"){r.innerHTML=`<div style="font-size:40px;margin-bottom:12px">🚫</div>
      <h2 style="font-size:18px;color:#A32D2D">Registro invalidado</h2>
      <p style="font-size:13px;color:#666;margin-top:8px">Contactá al organizador.</p>`;return}if(e.estado==="pendiente"){r.innerHTML=`<div style="font-size:10px;color:#aaa;letter-spacing:.08em;margin-bottom:6px">SUCOVI 2027</div>
      <h2 style="font-size:20px;font-weight:500;margin-bottom:6px">${e.nombre} ${e.apellido}</h2>
      <span class="badge b-pend" style="display:inline-block;margin-bottom:16px">Pago pendiente</span>
      <div style="background:#FAEEDA;border:.5px solid #C9A96E;border-radius:12px;padding:20px;margin-bottom:14px">
        <p style="font-size:28px;margin-bottom:8px">⏳</p>
        <p style="font-size:14px;font-weight:500;color:#854F0B">Bono pendiente ($35.000)</p>
        <p style="font-size:13px;color:#633806;margin-top:6px">Podés abonar en la puerta el día del evento.</p>
      </div>
      <p style="font-size:12px;color:#888">Sáb 20 jun 2026 · 19:30 hs · Roma 656, Olivos</p>
      <p style="font-size:12px;color:#aaa;margin-top:8px">José Pannunzio +54 9 11 5400-1313</p>`;return}const i=ve.map(l=>`
    <a href="/stand/${l.id}?inv=${t}"
      style="display:flex;align-items:center;gap:8px;background:#fff;
        border:0.5px solid #D6E4F0;border-radius:8px;padding:8px 10px;
        text-decoration:none;color:inherit">
      <div style="width:28px;height:28px;border-radius:50%;background:#EBF4FA;
        color:#1A3A5C;font-size:11px;font-weight:500;display:flex;
        align-items:center;justify-content:center;flex-shrink:0">${l.id}</div>
      <div style="min-width:0;flex:1">
        <div style="font-size:12px;font-weight:500;color:#1A3A5C;
          white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${l.nombre}</div>
        <div style="font-size:10px;color:#888">${l.region}</div>
      </div>
      <span style="color:#5BA4CF;font-size:14px">›</span>
    </a>`).join("");r.innerHTML=`
    <div style="font-size:10px;color:#aaa;letter-spacing:.08em;margin-bottom:6px">SUCOVI 2027 · FERIA DE VINOS</div>
    <h2 style="font-size:20px;font-weight:500;margin-bottom:4px">${e.nombre} ${e.apellido}</h2>
    <span class="badge ${e.estado==="ingresado"?"b-ingr":"b-pago"}" style="display:inline-block;margin-bottom:16px">
      ${e.estado==="ingresado"?"✅ Ingresó al evento":"✅ Bono confirmado"}
    </span>

    <!-- QR de ingreso -->
    <div style="background:#F0F4F8;border-radius:12px;padding:16px;margin-bottom:12px;text-align:center">
      <canvas id="qr-acc" width="160" height="160"
        style="display:block;margin:0 auto 8px;border-radius:8px"></canvas>
      <p style="font-size:18px;font-weight:500;color:#1A3A5C;letter-spacing:.12em">${e.codigo}</p>
      <p style="font-size:11px;color:#aaa;margin-top:3px">
        ${e.estado==="ingresado"?"Ya ingresaste — ¡Disfrutá!":"Mostrá este código en la entrada"}
      </p>
    </div>

    <!-- Botones de acción -->
    <a href="/carrito?inv=${t}"
      style="display:flex;align-items:center;justify-content:center;gap:8px;
        background:#1A3A5C;color:#fff;border-radius:8px;
        padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-bottom:8px">
      🛒 Ver mi carrito de compras
    </a>

    <button onclick="window._abrirScannerAcceso()"
      style="width:100%;display:flex;align-items:center;justify-content:center;gap:8px;
        background:#5BA4CF;color:#fff;border:none;border-radius:8px;
        padding:10px;font-size:13px;font-weight:500;cursor:pointer;margin-bottom:14px">
      📷 Escanear QR de un stand
    </button>

    <!-- Lista de stands -->
    <p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">
      IR A UN STAND
    </p>
    <div id="stands-lista" style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:14px">
      ${i}
    </div>

    <!-- Vouchers -->
    <div id="vouchers-acc"></div>

    <p style="font-size:11px;color:#aaa;margin-top:12px;text-align:center">
      Sáb 20 jun 2026 · 19:30 hs · Roma 656, Olivos
    </p>

    <!-- Scanner overlay -->
    <div id="scan-overlay-acc" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(26,58,92,.92);z-index:300;
      flex-direction:column;align-items:center;justify-content:center;gap:16px">
      <p style="color:#fff;font-size:14px;font-weight:500">Apuntá al QR del stand</p>
      <div style="position:relative">
        <video id="scan-video-acc" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
      </div>
      <p id="scan-status-acc" style="color:#C9A96E;font-size:13px">Cargando escáner...</p>
      <button onclick="window._cerrarScannerAcceso()"
        style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);
          border-radius:8px;padding:8px 20px;cursor:pointer;font-size:13px">
        Cancelar
      </button>
    </div>`,setTimeout(()=>Cm("qr-acc",e.codigo,160),50);let o=null,a=!1;window._abrirScannerAcceso=async()=>{const l=document.getElementById("scan-overlay-acc");l&&(l.style.display="flex");const u=document.getElementById("scan-status-acc");try{typeof loadJsQR=="function"?await loadJsQR():await new Promise((x,E)=>{if(window.jsQR){x();return}const b=document.createElement("script");b.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",b.onload=x,b.onerror=E,document.head.appendChild(b)}),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const h=document.getElementById("scan-video-acc");h.srcObject=o,a=!0,u&&(u.textContent="Buscando QR del stand...");const p=document.createElement("canvas"),g=p.getContext("2d",{willReadFrequently:!0}),_=()=>{if(a){if(h.readyState===h.HAVE_ENOUGH_DATA&&h.videoWidth>0){p.width=h.videoWidth,p.height=h.videoHeight,g.drawImage(h,0,0);const x=g.getImageData(0,0,p.width,p.height),E=window.jsQR(x.data,x.width,x.height,{inversionAttempts:"dontInvert"});if(E&&E.data){const b=E.data;window._cerrarScannerAcceso();const C=b.match(/\/stand\/(\d+)/);C&&(window.location.href="/stand/"+C[1]+"?inv="+t);return}}a&&requestAnimationFrame(_)}};h.addEventListener("loadeddata",()=>requestAnimationFrame(_))}catch{u&&(u.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerAcceso=()=>{a=!1,o&&(o.getTracks().forEach(u=>u.stop()),o=null);const l=document.getElementById("scan-overlay-acc");l&&(l.style.display="none")},zc(e.fireId,l=>{const u=document.getElementById("vouchers-acc");if(u){if(!l.length){u.innerHTML="";return}u.innerHTML=`
      <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px;text-align:left">
        Mis vouchers de retiro
      </p>
      ${l.map(h=>{const p={pagado:"Listo para retirar",entregado:"Entregado"},g=h.estado==="pagado";return`
          <div style="background:${g?"#EAF3DE":"#f5f5f5"};border:.5px solid ${g?"#3B6D11":"#ddd"};
            border-radius:10px;padding:12px 14px;margin-bottom:8px;text-align:left">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px">
              <span style="font-size:13px;font-weight:500;color:#6B1C1C">${h.standNombre}</span>
              <span class="badge ${g?"b-pago":"b-entr"}">${p[h.estado]||h.estado}</span>
            </div>
            <div style="font-size:12px;color:#555;margin-bottom:6px">
              ${(h.items||[]).map(_=>_.desc).join("<br>")}
            </div>
            <div style="font-size:14px;font-weight:500">$${Pm(h.total||0)}</div>
            ${g?`<p style="font-size:11px;color:#3B6D11;margin-top:6px">
              Mostrá este voucher en el stand para retirar tus vinos.
            </p>`:""}
          </div>`}).join("")}`}})}function tl(n,t,e){n.innerHTML=ns(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
    <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${t}</h2>
    <p style="font-size:14px;color:#666">${e}</p>
    <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>`}const Vm=()=>Math.random().toString(36).slice(2,10).toUpperCase();function Dm(n){zt();let t=0;const e=Un(r=>{t=r.length,e()});n.innerHTML=`
    ${Vt({title:"🍷 Sucovi 2027",sub:"Registro de invitados · Roma 656, Olivos · 20 jun 2026"})}
    <div style="max-width:480px;margin:0 auto;padding:20px 16px">
      <div style="background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;
        padding:12px 14px;font-size:13px;color:#6B4000;margin-bottom:20px">
        Completá tus datos para registrarte. Una vez confirmado el pago del bono ($35.000),
        recibirás tu QR de acceso por WhatsApp.
      </div>
      <div class="card" id="reg-form">
        <p style="font-size:14px;font-weight:500;color:#6B1C1C;margin-bottom:14px">Mis datos</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
          <div>
            <label style="font-size:11px;color:#666">Nombre *</label>
            <input id="rn" placeholder="Juan" style="margin-top:3px">
          </div>
          <div>
            <label style="font-size:11px;color:#666">Apellido *</label>
            <input id="ra" placeholder="Pérez" style="margin-top:3px">
          </div>
        </div>
        <div style="margin-bottom:10px">
          <label style="font-size:11px;color:#666">WhatsApp *</label>
          <input id="rt" placeholder="+54 9 11 XXXX-XXXX" style="margin-top:3px">
        </div>
        <div style="margin-bottom:10px">
          <label style="font-size:11px;color:#666">Email (opcional)</label>
          <input id="re" type="email" placeholder="juan@gmail.com" style="margin-top:3px">
        </div>
        <div style="margin-bottom:14px">
          <label style="font-size:11px;color:#666">Familia SUCOVI (opcional)</label>
          <input id="rf" placeholder="¿A través de qué familia recibiste la invitación?" style="margin-top:3px">
        </div>
        <div style="margin-bottom:14px">
          <label style="font-size:11px;color:#666">Comentarios (opcional)</label>
          <input id="rc" placeholder="Alergias, necesidades especiales..." style="margin-top:3px">
        </div>
        <button class="btn btn-v" style="width:100%;padding:11px;font-size:15px"
          onclick="window._autoRegistrar()">
          Registrarme
        </button>
        <div id="reg-msg" style="margin-top:10px;font-size:13px;text-align:center"></div>
      </div>
      <p style="font-size:11px;color:#aaa;text-align:center;margin-top:16px">
        Consultas: José Pannunzio · +54 9 11 5400-1313
      </p>
    </div>`,window._autoRegistrar=async()=>{const r=document.getElementById("rn").value.trim(),i=document.getElementById("ra").value.trim(),o=document.getElementById("rt").value.trim(),a=document.getElementById("re").value.trim(),l=document.getElementById("rf").value.trim(),u=document.getElementById("rc").value.trim(),h=document.getElementById("reg-msg");if(!r||!i||!o){h.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}h.innerHTML='<span style="color:#888">Registrando...</span>';try{const p=await Ks(()=>Promise.resolve().then(()=>Gc),void 0).then(_=>_.escucharInvitados),g="INV-"+String(t+1).padStart(4,"0");await Vr({nombre:r,apellido:i,tel:o,...a&&{email:a},...l&&{familia:l},...u&&{comentarios:u},estado:"pendiente",codigo:g,token:Vm()}),document.getElementById("reg-form").innerHTML=`
        <div style="text-align:center;padding:20px 0">
          <div style="font-size:48px;margin-bottom:12px">✅</div>
          <h2 style="font-size:18px;font-weight:500;color:#3B6D11;margin-bottom:8px">
            ¡Registro exitoso!
          </h2>
          <p style="font-size:14px;color:#555;line-height:1.6">
            Hola <strong>${r}</strong>, quedaste registrado/a.<br>
            El organizador confirmará tu pago y te enviará el QR de acceso por WhatsApp.
          </p>
          <div style="margin-top:16px;background:#f5f0eb;border-radius:8px;
            padding:12px;font-size:13px;color:#666">
            📅 Sáb 20 jun 2026 · 19:30 hs<br>
            📍 Roma 656, Olivos
          </div>
        </div>`}catch(p){h.innerHTML=`<span style="color:#A32D2D">Error: ${p.message}</span>`}}}const Di=n=>Number(n).toLocaleString("es-AR");function km(n,t){if(zt(),!t||t.estado==="invalidado"){n.innerHTML=`
      <div class="hdr"><div><h1>🛒 Carrito</h1></div></div>
      <div class="gold"></div>
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <p style="font-size:14px;color:#666">Necesitás tu QR de acreditación para ver el carrito.</p>
      </div>`;return}let e=[];n.innerHTML=`
    ${Vt({title:"🛒 Mi carrito",sub:t.nombre+" "+t.apellido+" · "+t.codigo,backHref:"/acceso?inv="+t.token,backLabel:"← Mi QR"})}
    <div style="max-width:480px;margin:0 auto;padding:14px" id="carrito-body">
      <div class="empty">Cargando carrito...</div>
    </div>`,$s(t.fireId,i=>{e=i,r()});function r(){const i=document.getElementById("carrito-body");if(!i)return;if(!e.length||!e.some(a=>{var l;return(l=a.items)==null?void 0:l.length})){i.innerHTML=`
        <div class="empty" style="padding:48px 20px">
          <div style="font-size:48px;margin-bottom:12px">🛒</div>
          <p style="font-size:15px;font-weight:500;margin-bottom:8px">Tu carrito está vacío</p>
          <p style="font-size:13px;color:#aaa">
            Escaneá el QR de cualquier stand para agregar vinos.
          </p>
        </div>`;return}const o=e.reduce((a,l)=>a+(l.items||[]).reduce((u,h)=>u+(h.sub||0),0),0);i.innerHTML=`
      <div style="background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;
        padding:9px 12px;font-size:12px;color:#6B4000;margin-bottom:14px">
        Revisá tu pedido antes de ir a caja. Podés quitar ítems o cambiar la opción de retiro.
      </div>

      ${e.filter(a=>{var l;return(l=a.items)==null?void 0:l.length}).map(a=>`
        <div class="card" style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <div style="font-size:14px;font-weight:500;color:#6B1C1C">
              🍷 ${a.standNombre}
            </div>
            <span style="font-size:11px;color:#aaa">Stand #${a.standId}</span>
          </div>

          ${a.items.map(l=>`
            <div style="display:flex;justify-content:space-between;align-items:center;
              padding:6px 0;border-bottom:.5px solid #f0ebe4">
              <span style="font-size:13px;color:#333">${l.desc}</span>
              <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
                <span style="font-size:13px;font-weight:500">$${Di(l.sub)}</span>
                <button onclick="window._quitarCarrito('${a.standDocId}','${l.key}')"
                  style="border:none;background:none;color:#A32D2D;cursor:pointer;
                  font-size:14px;padding:0 4px;font-weight:500">✕</button>
              </div>
            </div>`).join("")}

          <div style="margin-top:10px">
            <p style="font-size:11px;color:#666;font-weight:500;margin-bottom:6px">
              Retiro de ${a.standNombre}:
            </p>
            <div class="retiro-opt">
              <div class="retiro-btn ${a.retiro!=="envio"?"sel":""}"
                id="rb-${a.standDocId}-stand"
                onclick="window._cambiarRetiro('${a.standDocId}',${a.standId},'stand')">
                🍷<br><span style="font-size:11px">Retiro en stand</span>
              </div>
              <div class="retiro-btn ${a.retiro==="envio"?"sel":""}"
                id="rb-${a.standDocId}-envio"
                onclick="window._cambiarRetiro('${a.standDocId}',${a.standId},'envio')">
                🚚<br><span style="font-size:11px">Envío a domicilio</span>
              </div>
            </div>
          </div>

          <div style="display:flex;justify-content:space-between;font-size:13px;
            font-weight:500;margin-top:6px;padding-top:6px;border-top:.5px solid #e0d5c8">
            <span>Subtotal ${a.standNombre}</span>
            <span>$${Di((a.items||[]).reduce((l,u)=>l+(u.sub||0),0))}</span>
          </div>
        </div>`).join("")}

      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>Total</span>
          <span style="color:#6B1C1C">$${Di(o)}</span>
        </div>
        <p style="font-size:12px;color:#888;margin-top:6px">
          Llevá este carrito a caja para pagar. El cajero escanea tu código y ve todo.
        </p>
      </div>

      <div style="background:#E6F1FB;border:.5px solid #185FA5;border-radius:8px;
        padding:10px 14px;font-size:12px;color:#185FA5;margin-bottom:14px;text-align:center">
        📍 Tu código de caja: <strong style="font-size:16px;letter-spacing:.1em">${t.codigo}</strong>
      </div>

      <div id="carrito-msg" style="font-size:12px;text-align:center;min-height:16px;margin-bottom:8px"></div>`}window._quitarCarrito=async(i,o)=>{const a=e.find(l=>l.standDocId===i);a&&await kr(t.fireId,Number(a.standId),o)},window._cambiarRetiro=async(i,o,a)=>{await Qs(t.fireId,Number(o),a)}}async function Jc(){const t=window.location.pathname.replace("/Sucovi2027","")||"/",e=new URLSearchParams(window.location.search),r=document.getElementById("app"),i=t.match(/^\/stand\/(\d+)$/);if(i){const l=parseInt(i[1]),u=ve.find(g=>g.id===l);if(!u){r.innerHTML=ki("Stand no encontrado");return}const h=e.get("inv"),p=h?await Dr(h):null;return mm(r,u,p)}const o=t.match(/^\/panel\/(\d+)$/);if(o){const l=ve.find(u=>u.id===parseInt(o[1]));if(!l){r.innerHTML=ki("Panel no encontrado");return}return Kc(r,l)}const a=t.match(/^\/bodega\/(\d+)\/vinos$/);if(a){const l=ve.find(u=>u.id===parseInt(a[1]));if(!l){r.innerHTML=ki("Bodega no encontrada");return}return Xc(r,l)}if(t==="/carrito"){const l=e.get("inv"),u=l?await Dr(l):null;return km(r,u)}return t==="/acceso"?Sm(r,e.get("inv")):t==="/registro"?Dm(r):t==="/caja"?fm(r):t==="/puerta"?Am(r):t==="/logistica"?Tm(r):hm(r)}function ki(n){return`<div style="padding:60px;text-align:center;color:#aaa;font-size:14px">${n}</div>`}Jc();window.addEventListener("popstate",Jc);(function(){var n=window.location.search.match(/[?&]p=([^&]+)/);if(n){var t="/Sucovi2027",e=decodeURIComponent(n[1].replace(/~and~/g,"&"));window.history.replaceState(null,null,t+"/"+e)}})();
