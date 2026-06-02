(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var Qo={};/**
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
 */const Xa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Pu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ja={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=o>>2,g=(o&3)<<4|l>>4;let _=(l&15)<<2|h>>6,y=h&63;u||(y=64,a||(_=64)),r.push(e[f],e[g],e[_],e[y])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Xa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Pu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const h=i<n.length?e[n.charAt(i)]:64;++i;const g=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||h==null||g==null)throw new Su;const _=o<<2|l>>4;if(r.push(_),h!==64){const y=l<<4&240|h>>2;if(r.push(y),g!==64){const E=h<<6&192|g;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Su extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vu=function(n){const t=Xa(n);return Ja.encodeByteArray(t,!0)},fr=function(n){return Vu(n).replace(/\./g,"")},Du=function(n){try{return Ja.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Nu=()=>ku().__FIREBASE_DEFAULTS__,Lu=()=>{if(typeof process>"u"||typeof Qo>"u")return;const n=Qo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Du(n[1]);return t&&JSON.parse(t)},Zi=()=>{try{return Nu()||Lu()||Bu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mu=n=>{var t,e;return(e=(t=Zi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ou=n=>{const t=Mu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Za=()=>{var n;return(n=Zi())===null||n===void 0?void 0:n.config};/**
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
 */function ju(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fr(JSON.stringify(e)),fr(JSON.stringify(a)),""].join(".")}/**
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
 */function zu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qu(){var n;const t=(n=Zi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hu(){return!qu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uu(){try{return typeof indexedDB=="object"}catch{return!1}}function Wu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Qu="FirebaseError";class Be extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Qu,Object.setPrototypeOf(this,Be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?$u(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Be(i,l,r)}}function $u(n,t){return n.replace(Gu,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Gu=/\{\$([^}]+)}/g;function Pi(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if($o(o)&&$o(a)){if(!Pi(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function $o(n){return n!==null&&typeof n=="object"}/**
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
 */function St(n){return n&&n._delegate?n._delegate:n}class gn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ce="[DEFAULT]";/**
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
 */class Ku{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Fu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ju(t))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ce){return this.instances.has(t)}getOptions(t=ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ce){return this.component?this.component.multipleInstances?t:ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xu(n){return n===ce?void 0:n}function Ju(n){return n.instantiationMode==="EAGER"}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Yu={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},td=Q.INFO,ed={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},nd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=ed[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class tl{constructor(t){this.name=t,this._logLevel=td,this._logHandler=nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const rd=(n,t)=>t.some(e=>n instanceof e);let Go,Ko;function id(){return Go||(Go=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sd(){return Ko||(Ko=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const el=new WeakMap,Si=new WeakMap,nl=new WeakMap,gi=new WeakMap,Yi=new WeakMap;function od(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Jt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&el.set(e,n)}).catch(()=>{}),Yi.set(t,n),t}function ad(n){if(Si.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Si.set(n,t)}let Vi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Si.get(n);if(t==="objectStoreNames")return n.objectStoreNames||nl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ld(n){Vi=n(Vi)}function cd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(yi(this),t,...e);return nl.set(r,t.sort?t.sort():[t]),Jt(r)}:sd().includes(n)?function(...t){return n.apply(yi(this),t),Jt(el.get(this))}:function(...t){return Jt(n.apply(yi(this),t))}}function ud(n){return typeof n=="function"?cd(n):(n instanceof IDBTransaction&&ad(n),rd(n,id())?new Proxy(n,Vi):n)}function Jt(n){if(n instanceof IDBRequest)return od(n);if(gi.has(n))return gi.get(n);const t=ud(n);return t!==n&&(gi.set(n,t),Yi.set(t,n)),t}const yi=n=>Yi.get(n);function dd(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=Jt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Jt(a.result),u.oldVersion,u.newVersion,Jt(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const hd=["get","getKey","getAll","getAllKeys","count"],pd=["put","add","delete","clear"],vi=new Map;function Xo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(vi.get(t))return vi.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=pd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hd.includes(e)))return;const o=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[e](...l),i&&u.done]))[0]};return vi.set(t,o),o}ld(n=>({...n,get:(t,e,r)=>Xo(t,e)||n.get(t,e,r),has:(t,e)=>!!Xo(t,e)||n.has(t,e)}));/**
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
 */class fd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(md(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function md(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Di="@firebase/app",Jo="0.10.13";/**
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
 */const Ht=new tl("@firebase/app"),gd="@firebase/app-compat",yd="@firebase/analytics-compat",vd="@firebase/analytics",Ad="@firebase/app-check-compat",_d="@firebase/app-check",Ed="@firebase/auth",Id="@firebase/auth-compat",bd="@firebase/database",wd="@firebase/data-connect",xd="@firebase/database-compat",Td="@firebase/functions",Rd="@firebase/functions-compat",Cd="@firebase/installations",Pd="@firebase/installations-compat",Sd="@firebase/messaging",Vd="@firebase/messaging-compat",Dd="@firebase/performance",kd="@firebase/performance-compat",Nd="@firebase/remote-config",Ld="@firebase/remote-config-compat",Bd="@firebase/storage",Md="@firebase/storage-compat",Od="@firebase/firestore",Fd="@firebase/vertexai-preview",jd="@firebase/firestore-compat",zd="firebase",qd="10.14.1";/**
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
 */const ki="[DEFAULT]",Hd={[Di]:"fire-core",[gd]:"fire-core-compat",[vd]:"fire-analytics",[yd]:"fire-analytics-compat",[_d]:"fire-app-check",[Ad]:"fire-app-check-compat",[Ed]:"fire-auth",[Id]:"fire-auth-compat",[bd]:"fire-rtdb",[wd]:"fire-data-connect",[xd]:"fire-rtdb-compat",[Td]:"fire-fn",[Rd]:"fire-fn-compat",[Cd]:"fire-iid",[Pd]:"fire-iid-compat",[Sd]:"fire-fcm",[Vd]:"fire-fcm-compat",[Dd]:"fire-perf",[kd]:"fire-perf-compat",[Nd]:"fire-rc",[Ld]:"fire-rc-compat",[Bd]:"fire-gcs",[Md]:"fire-gcs-compat",[Od]:"fire-fst",[jd]:"fire-fst-compat",[Fd]:"fire-vertex","fire-js":"fire-js",[zd]:"fire-js-all"};/**
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
 */const mr=new Map,Ud=new Map,Ni=new Map;function Zo(n,t){try{n.container.addComponent(t)}catch(e){Ht.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function gr(n){const t=n.name;if(Ni.has(t))return Ht.debug(`There were multiple attempts to register component ${t}.`),!1;Ni.set(t,n);for(const e of mr.values())Zo(e,n);for(const e of Ud.values())Zo(e,n);return!0}function Wd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Qd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new Ya("app","Firebase",Qd);/**
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
 */class $d{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const Gd=qd;function rl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ki,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(e||(e=Za()),!e)throw Zt.create("no-options");const o=mr.get(i);if(o){if(Pi(e,o.options)&&Pi(r,o.config))return o;throw Zt.create("duplicate-app",{appName:i})}const a=new Zu(i);for(const u of Ni.values())a.addComponent(u);const l=new $d(e,r,a);return mr.set(i,l),l}function Kd(n=ki){const t=mr.get(n);if(!t&&n===ki&&Za())return rl();if(!t)throw Zt.create("no-app",{appName:n});return t}function Te(n,t,e){var r;let i=(r=Hd[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ht.warn(l.join(" "));return}gr(new gn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Xd="firebase-heartbeat-database",Jd=1,yn="firebase-heartbeat-store";let Ai=null;function il(){return Ai||(Ai=dd(Xd,Jd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(yn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),Ai}async function Zd(n){try{const e=(await il()).transaction(yn),r=await e.objectStore(yn).get(sl(n));return await e.done,r}catch(t){if(t instanceof Be)Ht.warn(t.message);else{const e=Zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ht.warn(e.message)}}}async function Yo(n,t){try{const r=(await il()).transaction(yn,"readwrite");await r.objectStore(yn).put(t,sl(n)),await r.done}catch(e){if(e instanceof Be)Ht.warn(e.message);else{const r=Zt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(r.message)}}}function sl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yd=1024,th=30*24*60*60*1e3;class eh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new rh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ta();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=th}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ht.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ta(),{heartbeatsToSend:r,unsentEntries:i}=nh(this._heartbeatsCache.heartbeats),o=fr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ht.warn(e),""}}}function ta(){return new Date().toISOString().substring(0,10)}function nh(n,t=Yd){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),ea(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ea(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class rh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uu()?Wu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Zd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ea(n){return fr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ih(n){gr(new gn("platform-logger",t=>new fd(t),"PRIVATE")),gr(new gn("heartbeat",t=>new eh(t),"PRIVATE")),Te(Di,Jo,n),Te(Di,Jo,"esm2017"),Te("fire-js","")}ih("");var sh="firebase",oh="10.14.1";/**
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
 */Te(sh,oh,"app");var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var de,ol;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(b,m){function A(){}A.prototype=m.prototype,b.D=m.prototype,b.prototype=new A,b.prototype.constructor=b,b.C=function(I,w,T){for(var v=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)v[Ft-2]=arguments[Ft];return m.prototype[w].apply(I,v)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,m,A){A||(A=0);var I=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)I[w]=m.charCodeAt(A++)|m.charCodeAt(A++)<<8|m.charCodeAt(A++)<<16|m.charCodeAt(A++)<<24;else for(w=0;16>w;++w)I[w]=m[A++]|m[A++]<<8|m[A++]<<16|m[A++]<<24;m=b.g[0],A=b.g[1],w=b.g[2];var T=b.g[3],v=m+(T^A&(w^T))+I[0]+3614090360&4294967295;m=A+(v<<7&4294967295|v>>>25),v=T+(w^m&(A^w))+I[1]+3905402710&4294967295,T=m+(v<<12&4294967295|v>>>20),v=w+(A^T&(m^A))+I[2]+606105819&4294967295,w=T+(v<<17&4294967295|v>>>15),v=A+(m^w&(T^m))+I[3]+3250441966&4294967295,A=w+(v<<22&4294967295|v>>>10),v=m+(T^A&(w^T))+I[4]+4118548399&4294967295,m=A+(v<<7&4294967295|v>>>25),v=T+(w^m&(A^w))+I[5]+1200080426&4294967295,T=m+(v<<12&4294967295|v>>>20),v=w+(A^T&(m^A))+I[6]+2821735955&4294967295,w=T+(v<<17&4294967295|v>>>15),v=A+(m^w&(T^m))+I[7]+4249261313&4294967295,A=w+(v<<22&4294967295|v>>>10),v=m+(T^A&(w^T))+I[8]+1770035416&4294967295,m=A+(v<<7&4294967295|v>>>25),v=T+(w^m&(A^w))+I[9]+2336552879&4294967295,T=m+(v<<12&4294967295|v>>>20),v=w+(A^T&(m^A))+I[10]+4294925233&4294967295,w=T+(v<<17&4294967295|v>>>15),v=A+(m^w&(T^m))+I[11]+2304563134&4294967295,A=w+(v<<22&4294967295|v>>>10),v=m+(T^A&(w^T))+I[12]+1804603682&4294967295,m=A+(v<<7&4294967295|v>>>25),v=T+(w^m&(A^w))+I[13]+4254626195&4294967295,T=m+(v<<12&4294967295|v>>>20),v=w+(A^T&(m^A))+I[14]+2792965006&4294967295,w=T+(v<<17&4294967295|v>>>15),v=A+(m^w&(T^m))+I[15]+1236535329&4294967295,A=w+(v<<22&4294967295|v>>>10),v=m+(w^T&(A^w))+I[1]+4129170786&4294967295,m=A+(v<<5&4294967295|v>>>27),v=T+(A^w&(m^A))+I[6]+3225465664&4294967295,T=m+(v<<9&4294967295|v>>>23),v=w+(m^A&(T^m))+I[11]+643717713&4294967295,w=T+(v<<14&4294967295|v>>>18),v=A+(T^m&(w^T))+I[0]+3921069994&4294967295,A=w+(v<<20&4294967295|v>>>12),v=m+(w^T&(A^w))+I[5]+3593408605&4294967295,m=A+(v<<5&4294967295|v>>>27),v=T+(A^w&(m^A))+I[10]+38016083&4294967295,T=m+(v<<9&4294967295|v>>>23),v=w+(m^A&(T^m))+I[15]+3634488961&4294967295,w=T+(v<<14&4294967295|v>>>18),v=A+(T^m&(w^T))+I[4]+3889429448&4294967295,A=w+(v<<20&4294967295|v>>>12),v=m+(w^T&(A^w))+I[9]+568446438&4294967295,m=A+(v<<5&4294967295|v>>>27),v=T+(A^w&(m^A))+I[14]+3275163606&4294967295,T=m+(v<<9&4294967295|v>>>23),v=w+(m^A&(T^m))+I[3]+4107603335&4294967295,w=T+(v<<14&4294967295|v>>>18),v=A+(T^m&(w^T))+I[8]+1163531501&4294967295,A=w+(v<<20&4294967295|v>>>12),v=m+(w^T&(A^w))+I[13]+2850285829&4294967295,m=A+(v<<5&4294967295|v>>>27),v=T+(A^w&(m^A))+I[2]+4243563512&4294967295,T=m+(v<<9&4294967295|v>>>23),v=w+(m^A&(T^m))+I[7]+1735328473&4294967295,w=T+(v<<14&4294967295|v>>>18),v=A+(T^m&(w^T))+I[12]+2368359562&4294967295,A=w+(v<<20&4294967295|v>>>12),v=m+(A^w^T)+I[5]+4294588738&4294967295,m=A+(v<<4&4294967295|v>>>28),v=T+(m^A^w)+I[8]+2272392833&4294967295,T=m+(v<<11&4294967295|v>>>21),v=w+(T^m^A)+I[11]+1839030562&4294967295,w=T+(v<<16&4294967295|v>>>16),v=A+(w^T^m)+I[14]+4259657740&4294967295,A=w+(v<<23&4294967295|v>>>9),v=m+(A^w^T)+I[1]+2763975236&4294967295,m=A+(v<<4&4294967295|v>>>28),v=T+(m^A^w)+I[4]+1272893353&4294967295,T=m+(v<<11&4294967295|v>>>21),v=w+(T^m^A)+I[7]+4139469664&4294967295,w=T+(v<<16&4294967295|v>>>16),v=A+(w^T^m)+I[10]+3200236656&4294967295,A=w+(v<<23&4294967295|v>>>9),v=m+(A^w^T)+I[13]+681279174&4294967295,m=A+(v<<4&4294967295|v>>>28),v=T+(m^A^w)+I[0]+3936430074&4294967295,T=m+(v<<11&4294967295|v>>>21),v=w+(T^m^A)+I[3]+3572445317&4294967295,w=T+(v<<16&4294967295|v>>>16),v=A+(w^T^m)+I[6]+76029189&4294967295,A=w+(v<<23&4294967295|v>>>9),v=m+(A^w^T)+I[9]+3654602809&4294967295,m=A+(v<<4&4294967295|v>>>28),v=T+(m^A^w)+I[12]+3873151461&4294967295,T=m+(v<<11&4294967295|v>>>21),v=w+(T^m^A)+I[15]+530742520&4294967295,w=T+(v<<16&4294967295|v>>>16),v=A+(w^T^m)+I[2]+3299628645&4294967295,A=w+(v<<23&4294967295|v>>>9),v=m+(w^(A|~T))+I[0]+4096336452&4294967295,m=A+(v<<6&4294967295|v>>>26),v=T+(A^(m|~w))+I[7]+1126891415&4294967295,T=m+(v<<10&4294967295|v>>>22),v=w+(m^(T|~A))+I[14]+2878612391&4294967295,w=T+(v<<15&4294967295|v>>>17),v=A+(T^(w|~m))+I[5]+4237533241&4294967295,A=w+(v<<21&4294967295|v>>>11),v=m+(w^(A|~T))+I[12]+1700485571&4294967295,m=A+(v<<6&4294967295|v>>>26),v=T+(A^(m|~w))+I[3]+2399980690&4294967295,T=m+(v<<10&4294967295|v>>>22),v=w+(m^(T|~A))+I[10]+4293915773&4294967295,w=T+(v<<15&4294967295|v>>>17),v=A+(T^(w|~m))+I[1]+2240044497&4294967295,A=w+(v<<21&4294967295|v>>>11),v=m+(w^(A|~T))+I[8]+1873313359&4294967295,m=A+(v<<6&4294967295|v>>>26),v=T+(A^(m|~w))+I[15]+4264355552&4294967295,T=m+(v<<10&4294967295|v>>>22),v=w+(m^(T|~A))+I[6]+2734768916&4294967295,w=T+(v<<15&4294967295|v>>>17),v=A+(T^(w|~m))+I[13]+1309151649&4294967295,A=w+(v<<21&4294967295|v>>>11),v=m+(w^(A|~T))+I[4]+4149444226&4294967295,m=A+(v<<6&4294967295|v>>>26),v=T+(A^(m|~w))+I[11]+3174756917&4294967295,T=m+(v<<10&4294967295|v>>>22),v=w+(m^(T|~A))+I[2]+718787259&4294967295,w=T+(v<<15&4294967295|v>>>17),v=A+(T^(w|~m))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+m&4294967295,b.g[1]=b.g[1]+(w+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.u=function(b,m){m===void 0&&(m=b.length);for(var A=m-this.blockSize,I=this.B,w=this.h,T=0;T<m;){if(w==0)for(;T<=A;)i(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<m;)if(I[w++]=b.charCodeAt(T++),w==this.blockSize){i(this,I),w=0;break}}else for(;T<m;)if(I[w++]=b[T++],w==this.blockSize){i(this,I),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var m=1;m<b.length-8;++m)b[m]=0;var A=8*this.o;for(m=b.length-8;m<b.length;++m)b[m]=A&255,A/=256;for(this.u(b),b=Array(16),m=A=0;4>m;++m)for(var I=0;32>I;I+=8)b[A++]=this.g[m]>>>I&255;return b};function o(b,m){var A=l;return Object.prototype.hasOwnProperty.call(A,b)?A[b]:A[b]=m(b)}function a(b,m){this.h=m;for(var A=[],I=!0,w=b.length-1;0<=w;w--){var T=b[w]|0;I&&T==m||(A[w]=T,I=!1)}this.g=A}var l={};function u(b){return-128<=b&&128>b?o(b,function(m){return new a([m|0],0>m?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return g;if(0>b)return P(h(-b));for(var m=[],A=1,I=0;b>=A;I++)m[I]=b/A|0,A*=4294967296;return new a(m,0)}function f(b,m){if(b.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(b.charAt(0)=="-")return P(f(b.substring(1),m));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=h(Math.pow(m,8)),I=g,w=0;w<b.length;w+=8){var T=Math.min(8,b.length-w),v=parseInt(b.substring(w,w+T),m);8>T?(T=h(Math.pow(m,T)),I=I.j(T).add(h(v))):(I=I.j(A),I=I.add(h(v)))}return I}var g=u(0),_=u(1),y=u(16777216);n=a.prototype,n.m=function(){if(C(this))return-P(this).m();for(var b=0,m=1,A=0;A<this.g.length;A++){var I=this.i(A);b+=(0<=I?I:4294967296+I)*m,m*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(E(this))return"0";if(C(this))return"-"+P(this).toString(b);for(var m=h(Math.pow(b,6)),A=this,I="";;){var w=M(A,m).g;A=k(A,w.j(m));var T=((0<A.g.length?A.g[0]:A.h)>>>0).toString(b);if(A=w,E(A))return T+I;for(;6>T.length;)T="0"+T;I=T+I}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function E(b){if(b.h!=0)return!1;for(var m=0;m<b.g.length;m++)if(b.g[m]!=0)return!1;return!0}function C(b){return b.h==-1}n.l=function(b){return b=k(this,b),C(b)?-1:E(b)?0:1};function P(b){for(var m=b.g.length,A=[],I=0;I<m;I++)A[I]=~b.g[I];return new a(A,~b.h).add(_)}n.abs=function(){return C(this)?P(this):this},n.add=function(b){for(var m=Math.max(this.g.length,b.g.length),A=[],I=0,w=0;w<=m;w++){var T=I+(this.i(w)&65535)+(b.i(w)&65535),v=(T>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);I=v>>>16,T&=65535,v&=65535,A[w]=v<<16|T}return new a(A,A[A.length-1]&-2147483648?-1:0)};function k(b,m){return b.add(P(m))}n.j=function(b){if(E(this)||E(b))return g;if(C(this))return C(b)?P(this).j(P(b)):P(P(this).j(b));if(C(b))return P(this.j(P(b)));if(0>this.l(y)&&0>b.l(y))return h(this.m()*b.m());for(var m=this.g.length+b.g.length,A=[],I=0;I<2*m;I++)A[I]=0;for(I=0;I<this.g.length;I++)for(var w=0;w<b.g.length;w++){var T=this.i(I)>>>16,v=this.i(I)&65535,Ft=b.i(w)>>>16,He=b.i(w)&65535;A[2*I+2*w]+=v*He,D(A,2*I+2*w),A[2*I+2*w+1]+=T*He,D(A,2*I+2*w+1),A[2*I+2*w+1]+=v*Ft,D(A,2*I+2*w+1),A[2*I+2*w+2]+=T*Ft,D(A,2*I+2*w+2)}for(I=0;I<m;I++)A[I]=A[2*I+1]<<16|A[2*I];for(I=m;I<2*m;I++)A[I]=0;return new a(A,0)};function D(b,m){for(;(b[m]&65535)!=b[m];)b[m+1]+=b[m]>>>16,b[m]&=65535,m++}function N(b,m){this.g=b,this.h=m}function M(b,m){if(E(m))throw Error("division by zero");if(E(b))return new N(g,g);if(C(b))return m=M(P(b),m),new N(P(m.g),P(m.h));if(C(m))return m=M(b,P(m)),new N(P(m.g),m.h);if(30<b.g.length){if(C(b)||C(m))throw Error("slowDivide_ only works with positive integers.");for(var A=_,I=m;0>=I.l(b);)A=nt(A),I=nt(I);var w=j(A,1),T=j(I,1);for(I=j(I,2),A=j(A,2);!E(I);){var v=T.add(I);0>=v.l(b)&&(w=w.add(A),T=v),I=j(I,1),A=j(A,1)}return m=k(b,w.j(m)),new N(w,m)}for(w=g;0<=b.l(m);){for(A=Math.max(1,Math.floor(b.m()/m.m())),I=Math.ceil(Math.log(A)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),T=h(A),v=T.j(m);C(v)||0<v.l(b);)A-=I,T=h(A),v=T.j(m);E(T)&&(T=_),w=w.add(T),b=k(b,v)}return new N(w,b)}n.A=function(b){return M(this,b).h},n.and=function(b){for(var m=Math.max(this.g.length,b.g.length),A=[],I=0;I<m;I++)A[I]=this.i(I)&b.i(I);return new a(A,this.h&b.h)},n.or=function(b){for(var m=Math.max(this.g.length,b.g.length),A=[],I=0;I<m;I++)A[I]=this.i(I)|b.i(I);return new a(A,this.h|b.h)},n.xor=function(b){for(var m=Math.max(this.g.length,b.g.length),A=[],I=0;I<m;I++)A[I]=this.i(I)^b.i(I);return new a(A,this.h^b.h)};function nt(b){for(var m=b.g.length+1,A=[],I=0;I<m;I++)A[I]=b.i(I)<<1|b.i(I-1)>>>31;return new a(A,b.h)}function j(b,m){var A=m>>5;m%=32;for(var I=b.g.length-A,w=[],T=0;T<I;T++)w[T]=0<m?b.i(T+A)>>>m|b.i(T+A+1)<<32-m:b.i(T+A);return new a(w,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ol=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,de=a}).apply(typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{});var ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var al,ln,ll,cr,Li,cl,ul,dl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,d){return s==Array.prototype||s==Object.prototype||(s[c]=d.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ir=="object"&&ir];for(var c=0;c<s.length;++c){var d=s[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var d=r;s=s.split(".");for(var p=0;p<s.length-1;p++){var x=s[p];if(!(x in d))break t;d=d[x]}s=s[s.length-1],p=d[s],c=c(p),c!=p&&c!=null&&t(d,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var d=0,p=!1,x={next:function(){if(!p&&d<s.length){var R=d++;return{value:c(R,s[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function h(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function f(s,c,d){return s.call.apply(s.bind,arguments)}function g(s,c,d){if(!s)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,p),s.apply(c,x)}}return function(){return s.apply(c,arguments)}}function _(s,c,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function y(s,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),s.apply(this,p)}}function E(s,c){function d(){}d.prototype=c.prototype,s.aa=c.prototype,s.prototype=new d,s.prototype.constructor=s,s.Qb=function(p,x,R){for(var L=Array(arguments.length-2),X=2;X<arguments.length;X++)L[X-2]=arguments[X];return c.prototype[x].apply(p,L)}}function C(s){const c=s.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=s[p];return d}return[]}function P(s,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const x=s.length||0,R=p.length||0;s.length=x+R;for(let L=0;L<R;L++)s[x+L]=p[L]}else s.push(p)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(s){return/^[\s\xa0]*$/.test(s)}function N(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function M(s){return M[" "](s),s}M[" "]=function(){};var nt=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function j(s,c,d){for(const p in s)c.call(d,s[p],p,s)}function b(s,c){for(const d in s)c.call(void 0,s[d],d,s)}function m(s){const c={};for(const d in s)c[d]=s[d];return c}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(s,c){let d,p;for(let x=1;x<arguments.length;x++){p=arguments[x];for(d in p)s[d]=p[d];for(let R=0;R<A.length;R++)d=A[R],Object.prototype.hasOwnProperty.call(p,d)&&(s[d]=p[d])}}function w(s){var c=1;s=s.split(":");const d=[];for(;0<c&&s.length;)d.push(s.shift()),c--;return s.length&&d.push(s.join(":")),d}function T(s){l.setTimeout(()=>{throw s},0)}function v(){var s=Qr;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Ft{constructor(){this.h=this.g=null}add(c,d){const p=He.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var He=new k(()=>new Gc,s=>s.reset());class Gc{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,We=!1,Qr=new Ft,Ws=()=>{const s=l.Promise.resolve(void 0);Ue=()=>{s.then(Kc)}};var Kc=()=>{for(var s;s=v();){try{s.h.call(s.g)}catch(d){T(d)}var c=He;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}We=!1};function Qt(){this.s=this.s,this.C=this.C}Qt.prototype.s=!1,Qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pt(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var Xc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return s}();function Qe(s,c){if(pt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var d=this.type=s.type,p=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(nt){t:{try{M(c.nodeName);var x=!0;break t}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=s.fromElement:d=="mouseout"&&(c=s.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Jc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Qe.aa.h.call(this)}}E(Qe,pt);var Jc={2:"touch",3:"pen",4:"mouse"};Qe.prototype.h=function(){Qe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Fn="closure_listenable_"+(1e6*Math.random()|0),Zc=0;function Yc(s,c,d,p,x){this.listener=s,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=x,this.key=++Zc,this.da=this.fa=!1}function jn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function zn(s){this.src=s,this.g={},this.h=0}zn.prototype.add=function(s,c,d,p,x){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var L=Gr(s,c,p,x);return-1<L?(c=s[L],d||(c.fa=!1)):(c=new Yc(c,this.src,R,!!p,x),c.fa=d,s.push(c)),c};function $r(s,c){var d=c.type;if(d in s.g){var p=s.g[d],x=Array.prototype.indexOf.call(p,c,void 0),R;(R=0<=x)&&Array.prototype.splice.call(p,x,1),R&&(jn(c),s.g[d].length==0&&(delete s.g[d],s.h--))}}function Gr(s,c,d,p){for(var x=0;x<s.length;++x){var R=s[x];if(!R.da&&R.listener==c&&R.capture==!!d&&R.ha==p)return x}return-1}var Kr="closure_lm_"+(1e6*Math.random()|0),Xr={};function Qs(s,c,d,p,x){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Qs(s,c[R],d,p,x);return null}return d=Ks(d),s&&s[Fn]?s.K(c,d,h(p)?!!p.capture:!1,x):tu(s,c,d,!1,p,x)}function tu(s,c,d,p,x,R){if(!c)throw Error("Invalid event type");var L=h(x)?!!x.capture:!!x,X=Zr(s);if(X||(s[Kr]=X=new zn(s)),d=X.add(c,d,p,L,R),d.proxy)return d;if(p=eu(),d.proxy=p,p.src=s,p.listener=d,s.addEventListener)Xc||(x=L),x===void 0&&(x=!1),s.addEventListener(c.toString(),p,x);else if(s.attachEvent)s.attachEvent(Gs(c.toString()),p);else if(s.addListener&&s.removeListener)s.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function eu(){function s(d){return c.call(s.src,s.listener,d)}const c=nu;return s}function $s(s,c,d,p,x){if(Array.isArray(c))for(var R=0;R<c.length;R++)$s(s,c[R],d,p,x);else p=h(p)?!!p.capture:!!p,d=Ks(d),s&&s[Fn]?(s=s.i,c=String(c).toString(),c in s.g&&(R=s.g[c],d=Gr(R,d,p,x),-1<d&&(jn(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete s.g[c],s.h--)))):s&&(s=Zr(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Gr(c,d,p,x)),(d=-1<s?c[s]:null)&&Jr(d))}function Jr(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Fn])$r(c.i,s);else{var d=s.type,p=s.proxy;c.removeEventListener?c.removeEventListener(d,p,s.capture):c.detachEvent?c.detachEvent(Gs(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Zr(c))?($r(d,s),d.h==0&&(d.src=null,c[Kr]=null)):jn(s)}}}function Gs(s){return s in Xr?Xr[s]:Xr[s]="on"+s}function nu(s,c){if(s.da)s=!0;else{c=new Qe(c,this);var d=s.listener,p=s.ha||s.src;s.fa&&Jr(s),s=d.call(p,c)}return s}function Zr(s){return s=s[Kr],s instanceof zn?s:null}var Yr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ks(s){return typeof s=="function"?s:(s[Yr]||(s[Yr]=function(c){return s.handleEvent(c)}),s[Yr])}function ft(){Qt.call(this),this.i=new zn(this),this.M=this,this.F=null}E(ft,Qt),ft.prototype[Fn]=!0,ft.prototype.removeEventListener=function(s,c,d,p){$s(this,s,c,d,p)};function Et(s,c){var d,p=s.F;if(p)for(d=[];p;p=p.F)d.push(p);if(s=s.M,p=c.type||c,typeof c=="string")c=new pt(c,s);else if(c instanceof pt)c.target=c.target||s;else{var x=c;c=new pt(p,s),I(c,x)}if(x=!0,d)for(var R=d.length-1;0<=R;R--){var L=c.g=d[R];x=qn(L,p,!0,c)&&x}if(L=c.g=s,x=qn(L,p,!0,c)&&x,x=qn(L,p,!1,c)&&x,d)for(R=0;R<d.length;R++)L=c.g=d[R],x=qn(L,p,!1,c)&&x}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var d=s.g[c],p=0;p<d.length;p++)jn(d[p]);delete s.g[c],s.h--}}this.F=null},ft.prototype.K=function(s,c,d,p){return this.i.add(String(s),c,!1,d,p)},ft.prototype.L=function(s,c,d,p){return this.i.add(String(s),c,!0,d,p)};function qn(s,c,d,p){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,R=0;R<c.length;++R){var L=c[R];if(L&&!L.da&&L.capture==d){var X=L.listener,lt=L.ha||L.src;L.fa&&$r(s.i,L),x=X.call(lt,p)!==!1&&x}}return x&&!p.defaultPrevented}function Xs(s,c,d){if(typeof s=="function")d&&(s=_(s,d));else if(s&&typeof s.handleEvent=="function")s=_(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function Js(s){s.g=Xs(()=>{s.g=null,s.i&&(s.i=!1,Js(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class ru extends Qt{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Js(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(s){Qt.call(this),this.h=s,this.g={}}E($e,Qt);var Zs=[];function Ys(s){j(s.g,function(c,d){this.g.hasOwnProperty(d)&&Jr(c)},s),s.g={}}$e.prototype.N=function(){$e.aa.N.call(this),Ys(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=l.JSON.stringify,iu=l.JSON.parse,su=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function ei(){}ei.prototype.h=null;function to(s){return s.h||(s.h=s.i())}function eo(){}var Ge={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ni(){pt.call(this,"d")}E(ni,pt);function ri(){pt.call(this,"c")}E(ri,pt);var se={},no=null;function Hn(){return no=no||new ft}se.La="serverreachability";function ro(s){pt.call(this,se.La,s)}E(ro,pt);function Ke(s){const c=Hn();Et(c,new ro(c))}se.STAT_EVENT="statevent";function io(s,c){pt.call(this,se.STAT_EVENT,s),this.stat=c}E(io,pt);function It(s){const c=Hn();Et(c,new io(c,s))}se.Ma="timingevent";function so(s,c){pt.call(this,se.Ma,s),this.size=c}E(so,pt);function Xe(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function Je(){this.g=!0}Je.prototype.xa=function(){this.g=!1};function ou(s,c,d,p,x,R){s.info(function(){if(s.g)if(R)for(var L="",X=R.split("&"),lt=0;lt<X.length;lt++){var $=X[lt].split("=");if(1<$.length){var mt=$[0];$=$[1];var gt=mt.split("_");L=2<=gt.length&&gt[1]=="type"?L+(mt+"="+$+"&"):L+(mt+"=redacted&")}}else L=null;else L=R;return"XMLHTTP REQ ("+p+") [attempt "+x+"]: "+c+`
`+d+`
`+L})}function au(s,c,d,p,x,R,L){s.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+x+"]: "+c+`
`+d+`
`+R+" "+L})}function ve(s,c,d,p){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+cu(s,d)+(p?" "+p:"")})}function lu(s,c){s.info(function(){return"TIMEOUT: "+c})}Je.prototype.info=function(){};function cu(s,c){if(!s.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(s=0;s<d.length;s++)if(Array.isArray(d[s])){var p=d[s];if(!(2>p.length)){var x=p[1];if(Array.isArray(x)&&!(1>x.length)){var R=x[0];if(R!="noop"&&R!="stop"&&R!="close")for(var L=1;L<x.length;L++)x[L]=""}}}}return ti(d)}catch{return c}}var Un={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ii;function Wn(){}E(Wn,ei),Wn.prototype.g=function(){return new XMLHttpRequest},Wn.prototype.i=function(){return{}},ii=new Wn;function $t(s,c,d,p){this.j=s,this.i=c,this.l=d,this.R=p||1,this.U=new $e(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ao}function ao(){this.i=null,this.g="",this.h=!1}var lo={},si={};function oi(s,c,d){s.L=1,s.v=Kn(jt(c)),s.m=d,s.P=!0,co(s,null)}function co(s,c){s.F=Date.now(),Qn(s),s.A=jt(s.v);var d=s.A,p=s.R;Array.isArray(p)||(p=[String(p)]),wo(d.i,"t",p),s.C=0,d=s.j.J,s.h=new ao,s.g=qo(s.j,d?c:null,!s.m),0<s.O&&(s.M=new ru(_(s.Y,s,s.g),s.O)),c=s.U,d=s.g,p=s.ca;var x="readystatechange";Array.isArray(x)||(x&&(Zs[0]=x.toString()),x=Zs);for(var R=0;R<x.length;R++){var L=Qs(d,x[R],p||c.handleEvent,!1,c.h||c);if(!L)break;c.g[L.key]=L}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),Ke(),ou(s.i,s.u,s.A,s.l,s.R,s.m)}$t.prototype.ca=function(s){s=s.target;const c=this.M;c&&zt(s)==3?c.j():this.Y(s)},$t.prototype.Y=function(s){try{if(s==this.g)t:{const gt=zt(this.g);var c=this.g.Ba();const Ee=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Vo(this.g)))){this.J||gt!=4||c==7||(c==8||0>=Ee?Ke(3):Ke(2)),ai(this);var d=this.g.Z();this.X=d;e:if(uo(this)){var p=Vo(this.g);s="";var x=p.length,R=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oe(this),Ze(this);var L="";break e}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,s+=this.h.i.decode(p[c],{stream:!(R&&c==x-1)});p.length=0,this.h.g+=s,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=d==200,au(this.i,this.u,this.A,this.l,this.R,gt,d),this.o){if(this.T&&!this.K){e:{if(this.g){var X,lt=this.g;if((X=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(X)){var $=X;break e}}$=null}if(d=$)ve(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,li(this,d);else{this.o=!1,this.s=3,It(12),oe(this),Ze(this);break t}}if(this.P){d=!0;let Vt;for(;!this.J&&this.C<L.length;)if(Vt=uu(this,L),Vt==si){gt==4&&(this.s=4,It(14),d=!1),ve(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==lo){this.s=4,It(15),ve(this.i,this.l,L,"[Invalid Chunk]"),d=!1;break}else ve(this.i,this.l,Vt,null),li(this,Vt);if(uo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||L.length!=0||this.h.h||(this.s=1,It(16),d=!1),this.o=this.o&&d,!d)ve(this.i,this.l,L,"[Invalid Chunked Response]"),oe(this),Ze(this);else if(0<L.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),fi(mt),mt.M=!0,It(11))}}else ve(this.i,this.l,L,null),li(this,L);gt==4&&oe(this),this.o&&!this.J&&(gt==4?Oo(this.j,this):(this.o=!1,Qn(this)))}else Ru(this.g),d==400&&0<L.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),oe(this),Ze(this)}}}catch{}finally{}};function uo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function uu(s,c){var d=s.C,p=c.indexOf(`
`,d);return p==-1?si:(d=Number(c.substring(d,p)),isNaN(d)?lo:(p+=1,p+d>c.length?si:(c=c.slice(p,p+d),s.C=p+d,c)))}$t.prototype.cancel=function(){this.J=!0,oe(this)};function Qn(s){s.S=Date.now()+s.I,ho(s,s.I)}function ho(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Xe(_(s.ba,s),c)}function ai(s){s.B&&(l.clearTimeout(s.B),s.B=null)}$t.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(lu(this.i,this.A),this.L!=2&&(Ke(),It(17)),oe(this),this.s=2,Ze(this)):ho(this,this.S-s)};function Ze(s){s.j.G==0||s.J||Oo(s.j,s)}function oe(s){ai(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Ys(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function li(s,c){try{var d=s.j;if(d.G!=0&&(d.g==s||ci(d.h,s))){if(!s.K&&ci(d.h,s)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var x=p;if(x[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<s.F)er(d),Yn(d);else break t;pi(d),It(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=Xe(_(d.Za,d),6e3));if(1>=mo(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else le(d,11)}else if((s.K||d.g==s)&&er(d),!D(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let $=x[c];if(d.T=$[0],$=$[1],d.G==2)if($[0]=="c"){d.K=$[1],d.ia=$[2];const mt=$[3];mt!=null&&(d.la=mt,d.j.info("VER="+d.la));const gt=$[4];gt!=null&&(d.Aa=gt,d.j.info("SVER="+d.Aa));const Ee=$[5];Ee!=null&&typeof Ee=="number"&&0<Ee&&(p=1.5*Ee,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Vt=s.g;if(Vt){const rr=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rr){var R=p.h;R.g||rr.indexOf("spdy")==-1&&rr.indexOf("quic")==-1&&rr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ui(R,R.h),R.h=null))}if(p.D){const mi=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;mi&&(p.ya=mi,J(p.I,p.D,mi))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-s.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var L=s;if(p.qa=zo(p,p.J?p.ia:null,p.W),L.K){go(p.h,L);var X=L,lt=p.L;lt&&(X.I=lt),X.B&&(ai(X),Qn(X)),p.g=L}else Bo(p);0<d.i.length&&tr(d)}else $[0]!="stop"&&$[0]!="close"||le(d,7);else d.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?le(d,7):hi(d):$[0]!="noop"&&d.l&&d.l.ta($),d.v=0)}}Ke(4)}catch{}}var du=class{constructor(s,c){this.g=s,this.map=c}};function po(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function mo(s){return s.h?1:s.g?s.g.size:0}function ci(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function ui(s,c){s.g?s.g.add(c):s.h=c}function go(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}po.prototype.cancel=function(){if(this.i=yo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function yo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const d of s.g.values())c=c.concat(d.D);return c}return C(s.i)}function hu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(u(s)){for(var c=[],d=s.length,p=0;p<d;p++)c.push(s[p]);return c}c=[],d=0;for(p in s)c[d++]=s[p];return c}function pu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(u(s)||typeof s=="string"){var c=[];s=s.length;for(var d=0;d<s;d++)c.push(d);return c}c=[],d=0;for(const p in s)c[d++]=p;return c}}}function vo(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(u(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var d=pu(s),p=hu(s),x=p.length,R=0;R<x;R++)c.call(void 0,p[R],d&&d[R],s)}var Ao=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fu(s,c){if(s){s=s.split("&");for(var d=0;d<s.length;d++){var p=s[d].indexOf("="),x=null;if(0<=p){var R=s[d].substring(0,p);x=s[d].substring(p+1)}else R=s[d];c(R,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function ae(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ae){this.h=s.h,$n(this,s.j),this.o=s.o,this.g=s.g,Gn(this,s.s),this.l=s.l;var c=s.i,d=new en;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),_o(this,d),this.m=s.m}else s&&(c=String(s).match(Ao))?(this.h=!1,$n(this,c[1]||"",!0),this.o=Ye(c[2]||""),this.g=Ye(c[3]||"",!0),Gn(this,c[4]),this.l=Ye(c[5]||"",!0),_o(this,c[6]||"",!0),this.m=Ye(c[7]||"")):(this.h=!1,this.i=new en(null,this.h))}ae.prototype.toString=function(){var s=[],c=this.j;c&&s.push(tn(c,Eo,!0),":");var d=this.g;return(d||c=="file")&&(s.push("//"),(c=this.o)&&s.push(tn(c,Eo,!0),"@"),s.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&s.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&s.push("/"),s.push(tn(d,d.charAt(0)=="/"?yu:gu,!0))),(d=this.i.toString())&&s.push("?",d),(d=this.m)&&s.push("#",tn(d,Au)),s.join("")};function jt(s){return new ae(s)}function $n(s,c,d){s.j=d?Ye(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Gn(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function _o(s,c,d){c instanceof en?(s.i=c,_u(s.i,s.h)):(d||(c=tn(c,vu)),s.i=new en(c,s.h))}function J(s,c,d){s.i.set(c,d)}function Kn(s){return J(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ye(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function tn(s,c,d){return typeof s=="string"?(s=encodeURI(s).replace(c,mu),d&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function mu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Eo=/[#\/\?@]/g,gu=/[#\?:]/g,yu=/[#\?]/g,vu=/[#\?@]/g,Au=/#/g;function en(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Gt(s){s.g||(s.g=new Map,s.h=0,s.i&&fu(s.i,function(c,d){s.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=en.prototype,n.add=function(s,c){Gt(this),this.i=null,s=Ae(this,s);var d=this.g.get(s);return d||this.g.set(s,d=[]),d.push(c),this.h+=1,this};function Io(s,c){Gt(s),c=Ae(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function bo(s,c){return Gt(s),c=Ae(s,c),s.g.has(c)}n.forEach=function(s,c){Gt(this),this.g.forEach(function(d,p){d.forEach(function(x){s.call(c,x,p,this)},this)},this)},n.na=function(){Gt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const x=s[p];for(let R=0;R<x.length;R++)d.push(c[p])}return d},n.V=function(s){Gt(this);let c=[];if(typeof s=="string")bo(this,s)&&(c=c.concat(this.g.get(Ae(this,s))));else{s=Array.from(this.g.values());for(let d=0;d<s.length;d++)c=c.concat(s[d])}return c},n.set=function(s,c){return Gt(this),this.i=null,s=Ae(this,s),bo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function wo(s,c,d){Io(s,c),0<d.length&&(s.i=null,s.g.set(Ae(s,c),C(d)),s.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const R=encodeURIComponent(String(p)),L=this.V(p);for(p=0;p<L.length;p++){var x=R;L[p]!==""&&(x+="="+encodeURIComponent(String(L[p]))),s.push(x)}}return this.i=s.join("&")};function Ae(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function _u(s,c){c&&!s.j&&(Gt(s),s.i=null,s.g.forEach(function(d,p){var x=p.toLowerCase();p!=x&&(Io(this,p),wo(this,x,d))},s)),s.j=c}function Eu(s,c){const d=new Je;if(l.Image){const p=new Image;p.onload=y(Kt,d,"TestLoadImage: loaded",!0,c,p),p.onerror=y(Kt,d,"TestLoadImage: error",!1,c,p),p.onabort=y(Kt,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=y(Kt,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=s}else c(!1)}function Iu(s,c){const d=new Je,p=new AbortController,x=setTimeout(()=>{p.abort(),Kt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:p.signal}).then(R=>{clearTimeout(x),R.ok?Kt(d,"TestPingServer: ok",!0,c):Kt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Kt(d,"TestPingServer: error",!1,c)})}function Kt(s,c,d,p,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),p(d)}catch{}}function bu(){this.g=new su}function wu(s,c,d){const p=d||"";try{vo(s,function(x,R){let L=x;h(x)&&(L=ti(x)),c.push(p+R+"="+encodeURIComponent(L))})}catch(x){throw c.push(p+"type="+encodeURIComponent("_badmap")),x}}function Xn(s){this.l=s.Ub||null,this.j=s.eb||!1}E(Xn,ei),Xn.prototype.g=function(){return new Jn(this.l,this.j)},Xn.prototype.i=function(s){return function(){return s}}({});function Jn(s,c){ft.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Jn,ft),n=Jn.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,rn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function xo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?nn(this):rn(this),this.readyState==3&&xo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,nn(this))},n.Qa=function(s){this.g&&(this.response=s,nn(this))},n.ga=function(){this.g&&nn(this)};function nn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,rn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,s.push(d[0]+": "+d[1]),d=c.next();return s.join(`\r
`)};function rn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function To(s){let c="";return j(s,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function di(s,c,d){t:{for(p in d){var p=!1;break t}p=!0}p||(d=To(d),typeof s=="string"?d!=null&&encodeURIComponent(String(d)):J(s,c,d))}function et(s){ft.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(et,ft);var xu=/^https?$/i,Tu=["POST","PUT"];n=et.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ii.g(),this.v=this.o?to(this.o):to(ii),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(R){Ro(this,R);return}if(s=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var x in p)d.set(x,p[x]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),x=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Tu,c,void 0))||p||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,L]of d)this.g.setRequestHeader(R,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{So(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Ro(this,R)}};function Ro(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Co(s),Zn(s)}function Co(s){s.A||(s.A=!0,Et(s,"complete"),Et(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Et(this,"complete"),Et(this,"abort"),Zn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zn(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Po(this):this.bb())},n.bb=function(){Po(this)};function Po(s){if(s.h&&typeof a<"u"&&(!s.v[1]||zt(s)!=4||s.Z()!=2)){if(s.u&&zt(s)==4)Xs(s.Ea,0,s);else if(Et(s,"readystatechange"),zt(s)==4){s.h=!1;try{const L=s.Z();t:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var d;if(!(d=c)){var p;if(p=L===0){var x=String(s.D).match(Ao)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),p=!xu.test(x?x.toLowerCase():"")}d=p}if(d)Et(s,"complete"),Et(s,"success");else{s.m=6;try{var R=2<zt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Co(s)}}finally{Zn(s)}}}}function Zn(s,c){if(s.g){So(s);const d=s.g,p=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Et(s,"ready");try{d.onreadystatechange=p}catch{}}}function So(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function zt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),iu(c)}};function Vo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ru(s){const c={};s=(s.g&&2<=zt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<s.length;p++){if(D(s[p]))continue;var d=w(s[p]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=c[x]||[];c[x]=R,R.push(d)}b(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sn(s,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[s]||c}function Do(s){this.Aa=0,this.i=[],this.j=new Je,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sn("baseRetryDelayMs",5e3,s),this.cb=sn("retryDelaySeedMs",1e4,s),this.Wa=sn("forwardChannelMaxRetries",2,s),this.wa=sn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new po(s&&s.concurrentRequestLimit),this.Da=new bu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Do.prototype,n.la=8,n.G=1,n.connect=function(s,c,d,p){It(0),this.W=s,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=zo(this,null,this.W),tr(this)};function hi(s){if(ko(s),s.G==3){var c=s.U++,d=jt(s.I);if(J(d,"SID",s.K),J(d,"RID",c),J(d,"TYPE","terminate"),on(s,d),c=new $t(s,s.j,c),c.L=2,c.v=Kn(jt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=qo(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Qn(c)}jo(s)}function Yn(s){s.g&&(fi(s),s.g.cancel(),s.g=null)}function ko(s){Yn(s),s.u&&(l.clearTimeout(s.u),s.u=null),er(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function tr(s){if(!fo(s.h)&&!s.s){s.s=!0;var c=s.Ga;Ue||Ws(),We||(Ue(),We=!0),Qr.add(c,s),s.B=0}}function Cu(s,c){return mo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Xe(_(s.Ga,s,c),Fo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const x=new $t(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),I(R,this.S)):R=this.S),this.m!==null||this.O||(x.H=R,R=null),this.P)t:{for(var c=0,d=0;d<this.i.length;d++){e:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break t}if(c===4096||d===this.i.length-1){c=d+1;break t}}c=1e3}else c=1e3;c=Lo(this,x,c),d=jt(this.I),J(d,"RID",s),J(d,"CVER",22),this.D&&J(d,"X-HTTP-Session-Id",this.D),on(this,d),R&&(this.O?c="headers="+encodeURIComponent(String(To(R)))+"&"+c:this.m&&di(d,this.m,R)),ui(this.h,x),this.Ua&&J(d,"TYPE","init"),this.P?(J(d,"$req",c),J(d,"SID","null"),x.T=!0,oi(x,d,null)):oi(x,d,c),this.G=2}}else this.G==3&&(s?No(this,s):this.i.length==0||fo(this.h)||No(this))};function No(s,c){var d;c?d=c.l:d=s.U++;const p=jt(s.I);J(p,"SID",s.K),J(p,"RID",d),J(p,"AID",s.T),on(s,p),s.m&&s.o&&di(p,s.m,s.o),d=new $t(s,s.j,d,s.B+1),s.m===null&&(d.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Lo(s,d,1e3),d.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),ui(s.h,d),oi(d,p,c)}function on(s,c){s.H&&j(s.H,function(d,p){J(c,p,d)}),s.l&&vo({},function(d,p){J(c,p,d)})}function Lo(s,c,d){d=Math.min(s.i.length,d);var p=s.l?_(s.l.Na,s.l,s):null;t:{var x=s.i;let R=-1;for(;;){const L=["count="+d];R==-1?0<d?(R=x[0].g,L.push("ofs="+R)):R=0:L.push("ofs="+R);let X=!0;for(let lt=0;lt<d;lt++){let $=x[lt].g;const mt=x[lt].map;if($-=R,0>$)R=Math.max(0,x[lt].g-100),X=!1;else try{wu(mt,L,"req"+$+"_")}catch{p&&p(mt)}}if(X){p=L.join("&");break t}}}return s=s.i.splice(0,d),c.D=s,p}function Bo(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Ue||Ws(),We||(Ue(),We=!0),Qr.add(c,s),s.v=0}}function pi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Xe(_(s.Fa,s),Fo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Mo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Xe(_(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Yn(this),Mo(this))};function fi(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Mo(s){s.g=new $t(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=jt(s.qa);J(c,"RID","rpc"),J(c,"SID",s.K),J(c,"AID",s.T),J(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&J(c,"TO",s.ja),J(c,"TYPE","xmlhttp"),on(s,c),s.m&&s.o&&di(c,s.m,s.o),s.L&&(s.g.I=s.L);var d=s.g;s=s.ia,d.L=1,d.v=Kn(jt(c)),d.m=null,d.P=!0,co(d,s)}n.Za=function(){this.C!=null&&(this.C=null,Yn(this),pi(this),It(19))};function er(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Oo(s,c){var d=null;if(s.g==c){er(s),fi(s),s.g=null;var p=2}else if(ci(s.h,c))d=c.D,go(s.h,c),p=1;else return;if(s.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=s.B;p=Hn(),Et(p,new so(p,d)),tr(s)}else Bo(s);else if(x=c.s,x==3||x==0&&0<c.X||!(p==1&&Cu(s,c)||p==2&&pi(s)))switch(d&&0<d.length&&(c=s.h,c.i=c.i.concat(d)),x){case 1:le(s,5);break;case 4:le(s,10);break;case 3:le(s,6);break;default:le(s,2)}}}function Fo(s,c){let d=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(d*=2),d*c}function le(s,c){if(s.j.info("Error code "+c),c==2){var d=_(s.fb,s),p=s.Xa;const x=!p;p=new ae(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||$n(p,"https"),Kn(p),x?Eu(p.toString(),d):Iu(p.toString(),d)}else It(2);s.G=0,s.l&&s.l.sa(c),jo(s),ko(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function jo(s){if(s.G=0,s.ka=[],s.l){const c=yo(s.h);(c.length!=0||s.i.length!=0)&&(P(s.ka,c),P(s.ka,s.i),s.h.i.length=0,C(s.i),s.i.length=0),s.l.ra()}}function zo(s,c,d){var p=d instanceof ae?jt(d):new ae(d);if(p.g!="")c&&(p.g=c+"."+p.g),Gn(p,p.s);else{var x=l.location;p=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var R=new ae(null);p&&$n(R,p),c&&(R.g=c),x&&Gn(R,x),d&&(R.l=d),p=R}return d=s.D,c=s.ya,d&&c&&J(p,d,c),J(p,"VER",s.la),on(s,p),p}function qo(s,c,d){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new et(new Xn({eb:d})):new et(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ho(){}n=Ho.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function nr(){}nr.prototype.g=function(s,c){return new Rt(s,c)};function Rt(s,c){ft.call(this),this.g=new Do(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!D(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!D(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new _e(this)}E(Rt,ft),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){hi(this.g)},Rt.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var d={};d.__data__=s,s=d}else this.u&&(d={},d.__data__=ti(s),s=d);c.i.push(new du(c.Ya++,s)),c.G==3&&tr(c)},Rt.prototype.N=function(){this.g.l=null,delete this.j,hi(this.g),delete this.g,Rt.aa.N.call(this)};function Uo(s){ni.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const d in c){s=d;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}E(Uo,ni);function Wo(){ri.call(this),this.status=1}E(Wo,ri);function _e(s){this.g=s}E(_e,Ho),_e.prototype.ua=function(){Et(this.g,"a")},_e.prototype.ta=function(s){Et(this.g,new Uo(s))},_e.prototype.sa=function(s){Et(this.g,new Wo)},_e.prototype.ra=function(){Et(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,dl=function(){return new nr},ul=function(){return Hn()},cl=se,Li={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Un.NO_ERROR=0,Un.TIMEOUT=8,Un.HTTP_ERROR=6,cr=Un,oo.COMPLETE="complete",ll=oo,eo.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",ft.prototype.listen=ft.prototype.K,ln=eo,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,al=et}).apply(typeof ir<"u"?ir:typeof self<"u"?self:typeof window<"u"?window:{});const ra="@firebase/firestore";/**
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
 */class vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let Me="10.14.0";/**
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
 */const pe=new tl("@firebase/firestore");function an(){return pe.logLevel}function O(n,...t){if(pe.logLevel<=Q.DEBUG){const e=t.map(ts);pe.debug(`Firestore (${Me}): ${n}`,...e)}}function Ut(n,...t){if(pe.logLevel<=Q.ERROR){const e=t.map(ts);pe.error(`Firestore (${Me}): ${n}`,...e)}}function Pe(n,...t){if(pe.logLevel<=Q.WARN){const e=t.map(ts);pe.warn(`Firestore (${Me}): ${n}`,...e)}}function ts(n){if(typeof n=="string")return n;try{/**
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
 */function z(n="Unexpected state"){const t=`FIRESTORE (${Me}) INTERNAL ASSERTION FAILED: `+n;throw Ut(t),new Error(t)}function K(n,t){n||z()}function H(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Be{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class hl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ah{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(vt.UNAUTHENTICATED))}shutdown(){}}class lh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ch{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let o=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new qt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new qt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new hl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string"),new vt(t)}}class uh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new uh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ph{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){K(this.o===void 0);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string"),this.R=e.token,new hh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class pl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=fh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function G(n,t){return n<t?-1:n>t?1:0}function Se(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new B(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new B(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new B(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new B(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ot(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new ot(0,0))}static max(){return new q(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vn{constructor(t,e,r){e===void 0?e=0:e>t.length&&z(),r===void 0?r=t.length-e:r>t.length-e&&z(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return vn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Z extends vn{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new B(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Z(e)}static emptyPath(){return new Z([])}}const mh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends vn{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return mh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new B(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new B(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new B(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
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
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(Z.fromString(t))}static fromName(t){return new F(Z.fromString(t).popFirst(5))}static empty(){return new F(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new Z(t.slice()))}}function gh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new te(i,F.empty(),t)}function yh(n){return new te(n.readTime,n.key,-1)}class te{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new te(q.min(),F.empty(),-1)}static max(){return new te(q.max(),F.empty(),-1)}}function vh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:G(n.largestBatchId,t.largestBatchId))}/**
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
 */async function Tn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Ah)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},u=>r(u))}),a=!0,o===i&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(i=>i?V.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new V((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const h=u;e(t[h]).next(f=>{a[h]=f,++l,l===o&&r(a)},f=>i(f))}})}static doWhile(t,e){return new V((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Eh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Rn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class es{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}es.oe=-1;function Cr(n){return n==null}function yr(n){return n===0&&1/n==-1/0}function Ih(n){return typeof n=="number"&&Number.isInteger(n)&&!yr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ia(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ge(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function fl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class tt{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sr(this.root,t,this.comparator,!1)}getReverseIterator(){return new sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sr(this.root,t,this.comparator,!0)}}class sr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ct(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const t=this.left.check();if(t!==this.right.check())throw z();return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new sa(this.data.getIterator())}getIteratorFrom(t){return new sa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class sa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new dt(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Se(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class ml extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ml("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const bh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(K(!!n),typeof n=="string"){let t=0;const e=bh.exec(n);if(K(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fe(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
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
 */function ns(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function rs(n){const t=n.mapValue.fields.__previous_value__;return ns(t)?rs(t):t}function An(n){const t=ee(n.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
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
 */class wh{constructor(t,e,r,i,o,a,l,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class _n{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new _n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof _n&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const or={mapValue:{}};function me(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ns(n)?4:Th(n)?9007199254740991:xh(n)?10:11:z()}function Lt(n,t){if(n===t)return!0;const e=me(n);if(e!==me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return An(n).isEqual(An(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ee(i.timestampValue),l=ee(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return fe(i.bytesValue).isEqual(fe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return rt(i.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(i.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return rt(i.integerValue)===rt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=rt(i.doubleValue),l=rt(o.doubleValue);return a===l?yr(a)===yr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Se(n.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(ia(a)!==ia(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Lt(a[u],l[u])))return!1;return!0}(n,t);default:return z()}}function En(n,t){return(n.values||[]).find(e=>Lt(e,t))!==void 0}function Ve(n,t){if(n===t)return 0;const e=me(n),r=me(t);if(e!==r)return G(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=rt(o.integerValue||o.doubleValue),u=rt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return oa(n.timestampValue,t.timestampValue);case 4:return oa(An(n),An(t));case 5:return G(n.stringValue,t.stringValue);case 6:return function(o,a){const l=fe(o),u=fe(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=G(l[h],u[h]);if(f!==0)return f}return G(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=G(rt(o.latitude),rt(a.latitude));return l!==0?l:G(rt(o.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return aa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,u,h,f;const g=o.fields||{},_=a.fields||{},y=(l=g.value)===null||l===void 0?void 0:l.arrayValue,E=(u=_.value)===null||u===void 0?void 0:u.arrayValue,C=G(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((f=E==null?void 0:E.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:aa(y,E)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===or.mapValue&&a===or.mapValue)return 0;if(o===or.mapValue)return 1;if(a===or.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const _=G(u[g],f[g]);if(_!==0)return _;const y=Ve(l[u[g]],h[f[g]]);if(y!==0)return y}return G(u.length,f.length)}(n.mapValue,t.mapValue);default:throw z()}}function oa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return G(n,t);const e=ee(n),r=ee(t),i=G(e.seconds,r.seconds);return i!==0?i:G(e.nanos,r.nanos)}function aa(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ve(e[i],r[i]);if(o)return o}return G(e.length,r.length)}function De(n){return Bi(n)}function Bi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ee(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return fe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Bi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Bi(e.fields[a])}`;return i+"}"}(n.mapValue):z()}function la(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Mi(n){return!!n&&"integerValue"in n}function is(n){return!!n&&"arrayValue"in n}function ca(n){return!!n&&"nullValue"in n}function ua(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ur(n){return!!n&&"mapValue"in n}function xh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ge(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=hn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Th(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class xt{constructor(t){this.value=t}static empty(){return new xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ur(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=ut.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=hn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());ur(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ur(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){ge(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new xt(hn(this.value))}}function gl(n){const t=[];return ge(n.fields,(e,r)=>{const i=new ut([e]);if(ur(r)){const o=gl(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Ct(t)}/**
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
 */class At{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new At(t,0,q.min(),q.min(),q.min(),xt.empty(),0)}static newFoundDocument(t,e,r,i){return new At(t,1,e,q.min(),r,i,0)}static newNoDocument(t,e){return new At(t,2,e,q.min(),q.min(),xt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,q.min(),q.min(),xt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vr{constructor(t,e){this.position=t,this.inclusive=e}}function da(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=Ve(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ha(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Lt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class In{constructor(t,e="asc"){this.field=t,this.dir=e}}function Rh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class yl{}class st extends yl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ph(t,e,r):e==="array-contains"?new Dh(t,r):e==="in"?new kh(t,r):e==="not-in"?new Nh(t,r):e==="array-contains-any"?new Lh(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Sh(t,r):new Vh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ve(e,this.value)):e!==null&&me(this.value)===me(e)&&this.matchesComparison(Ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends yl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Dt(t,e)}matches(t){return vl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vl(n){return n.op==="and"}function Al(n){return Ch(n)&&vl(n)}function Ch(n){for(const t of n.filters)if(t instanceof Dt)return!1;return!0}function Oi(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+De(n.value);if(Al(n))return n.filters.map(t=>Oi(t)).join(",");{const t=n.filters.map(e=>Oi(e)).join(",");return`${n.op}(${t})`}}function _l(n,t){return n instanceof st?function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Lt(r.value,i.value)}(n,t):n instanceof Dt?function(r,i){return i instanceof Dt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&_l(a,i.filters[l]),!0):!1}(n,t):void z()}function El(n){return n instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${De(e.value)}`}(n):n instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(El).join(" ,")+"}"}(n):"Filter"}class Ph extends st{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Sh extends st{constructor(t,e){super(t,"in",e),this.keys=Il("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vh extends st{constructor(t,e){super(t,"not-in",e),this.keys=Il("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Il(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>F.fromName(r.referenceValue))}class Dh extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return is(e)&&En(e.arrayValue,this.value)}}class kh extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&En(this.value.arrayValue,e)}}class Nh extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(En(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!En(this.value.arrayValue,e)}}class Lh extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!is(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>En(this.value.arrayValue,r))}}/**
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
 */class Bh{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function pa(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Bh(n,t,e,r,i,o,a)}function ss(n){const t=H(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Oi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Cr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>De(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>De(r)).join(",")),t.ue=e}return t.ue}function os(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Rh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!_l(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ha(n.startAt,t.startAt)&&ha(n.endAt,t.endAt)}function Fi(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Oe{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Mh(n,t,e,r,i,o,a,l){return new Oe(n,t,e,r,i,o,a,l)}function Pr(n){return new Oe(n)}function fa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bl(n){return n.collectionGroup!==null}function pn(n){const t=H(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new dt(ut.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new In(o,r))}),e.has(ut.keyField().canonicalString())||t.ce.push(new In(ut.keyField(),r))}return t.ce}function kt(n){const t=H(n);return t.le||(t.le=Oh(t,pn(n))),t.le}function Oh(n,t){if(n.limitType==="F")return pa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new In(i.field,o)});const e=n.endAt?new vr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new vr(n.startAt.position,n.startAt.inclusive):null;return pa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ji(n,t){const e=n.filters.concat([t]);return new Oe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function zi(n,t,e){return new Oe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Sr(n,t){return os(kt(n),kt(t))&&n.limitType===t.limitType}function wl(n){return`${ss(kt(n))}|lt:${n.limitType}`}function be(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>El(i)).join(", ")}]`),Cr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>De(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>De(i)).join(",")),`Target(${r})`}(kt(n))}; limitType=${n.limitType})`}function Vr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of pn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=da(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,pn(r),i)||r.endAt&&!function(a,l,u){const h=da(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,pn(r),i))}(n,t)}function Fh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xl(n){return(t,e)=>{let r=!1;for(const i of pn(n)){const o=jh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function jh(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):function(o,a,l){const u=a.data.field(o),h=l.data.field(o);return u!==null&&h!==null?Ve(u,h):z()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class Fe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ge(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return fl(this.inner)}size(){return this.innerSize}}/**
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
 */const zh=new tt(F.comparator);function Wt(){return zh}const Tl=new tt(F.comparator);function cn(...n){let t=Tl;for(const e of n)t=t.insert(e.key,e);return t}function Rl(n){let t=Tl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ue(){return fn()}function Cl(){return fn()}function fn(){return new Fe(n=>n.toString(),(n,t)=>n.isEqual(t))}const qh=new tt(F.comparator),Hh=new dt(F.comparator);function U(...n){let t=Hh;for(const e of n)t=t.add(e);return t}const Uh=new dt(G);function Wh(){return Uh}/**
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
 */function as(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yr(t)?"-0":t}}function Pl(n){return{integerValue:""+n}}function Qh(n,t){return Ih(t)?Pl(t):as(n,t)}/**
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
 */class Dr{constructor(){this._=void 0}}function $h(n,t,e){return n instanceof bn?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ns(o)&&(o=rs(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof wn?Vl(n,t):n instanceof xn?Dl(n,t):function(i,o){const a=Sl(i,o),l=ma(a)+ma(i.Pe);return Mi(a)&&Mi(i.Pe)?Pl(l):as(i.serializer,l)}(n,t)}function Gh(n,t,e){return n instanceof wn?Vl(n,t):n instanceof xn?Dl(n,t):e}function Sl(n,t){return n instanceof Ar?function(r){return Mi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class bn extends Dr{}class wn extends Dr{constructor(t){super(),this.elements=t}}function Vl(n,t){const e=kl(t);for(const r of n.elements)e.some(i=>Lt(i,r))||e.push(r);return{arrayValue:{values:e}}}class xn extends Dr{constructor(t){super(),this.elements=t}}function Dl(n,t){let e=kl(t);for(const r of n.elements)e=e.filter(i=>!Lt(i,r));return{arrayValue:{values:e}}}class Ar extends Dr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ma(n){return rt(n.integerValue||n.doubleValue)}function kl(n){return is(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Kh{constructor(t,e){this.field=t,this.transform=e}}function Xh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof wn&&i instanceof wn||r instanceof xn&&i instanceof xn?Se(r.elements,i.elements,Lt):r instanceof Ar&&i instanceof Ar?Lt(r.Pe,i.Pe):r instanceof bn&&i instanceof bn}(n.transform,t.transform)}class Jh{constructor(t,e){this.version=t,this.transformResults=e}}class bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bt}static exists(t){return new bt(void 0,t)}static updateTime(t){return new bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function dr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class kr{}function Nl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Nr(n.key,bt.none()):new Cn(n.key,n.data,bt.none());{const e=n.data,r=xt.empty();let i=new dt(ut.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new re(n.key,r,new Ct(i.toArray()),bt.none())}}function Zh(n,t,e){n instanceof Cn?function(i,o,a){const l=i.value.clone(),u=ya(i.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof re?function(i,o,a){if(!dr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=ya(i.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(Ll(i)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function mn(n,t,e,r){return n instanceof Cn?function(o,a,l,u){if(!dr(o.precondition,a))return l;const h=o.value.clone(),f=va(o.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof re?function(o,a,l,u){if(!dr(o.precondition,a))return l;const h=va(o.fieldTransforms,u,a),f=a.data;return f.setAll(Ll(o)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(g=>g.field))}(n,t,e,r):function(o,a,l){return dr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Yh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Sl(r.transform,i||null);o!=null&&(e===null&&(e=xt.empty()),e.set(r.field,o))}return e||null}function ga(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Se(r,i,(o,a)=>Xh(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Cn extends kr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class re extends kr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ll(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ya(n,t,e){const r=new Map;K(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,Gh(a,l,e[i]))}return r}function va(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,$h(o,a,t))}return r}class Nr extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tp extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ep{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Zh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Cl();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const u=Nl(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&Se(this.mutations,t.mutations,(e,r)=>ga(e,r))&&Se(this.baseMutations,t.baseMutations,(e,r)=>ga(e,r))}}class ls{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){K(t.mutations.length===r.length);let i=function(){return qh}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new ls(t,e,r,i)}}/**
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
 */var it,W;function ip(n){switch(n){default:return z();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Bl(n){if(n===void 0)return Ut("GRPC error has no .code"),S.UNKNOWN;switch(n){case it.OK:return S.OK;case it.CANCELLED:return S.CANCELLED;case it.UNKNOWN:return S.UNKNOWN;case it.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case it.INTERNAL:return S.INTERNAL;case it.UNAVAILABLE:return S.UNAVAILABLE;case it.UNAUTHENTICATED:return S.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case it.NOT_FOUND:return S.NOT_FOUND;case it.ALREADY_EXISTS:return S.ALREADY_EXISTS;case it.PERMISSION_DENIED:return S.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case it.ABORTED:return S.ABORTED;case it.OUT_OF_RANGE:return S.OUT_OF_RANGE;case it.UNIMPLEMENTED:return S.UNIMPLEMENTED;case it.DATA_LOSS:return S.DATA_LOSS;default:return z()}}(W=it||(it={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const op=new de([4294967295,4294967295],0);function Aa(n){const t=sp().encode(n),e=new ol;return e.update(t),new Uint8Array(e.digest())}function _a(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new de([e,r],0),new de([i,o],0)]}class cs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new un(`Invalid padding: ${e}`);if(r<0)throw new un(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new un(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new un(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=de.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(de.fromNumber(r)));return i.compare(op)===1&&(i=new de([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Aa(t),[r,i]=_a(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new cs(o,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Aa(t),[r,i]=_a(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Lr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Pn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Lr(q.min(),i,new tt(G),Wt(),U())}}class Pn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Pn(r,e,U(),U(),U())}}/**
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
 */class hr{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Ml{constructor(t,e){this.targetId=t,this.me=e}}class Ol{constructor(t,e,r=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Ea{constructor(){this.fe=0,this.ge=ba(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),r=U();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:z()}}),new Pn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=ba()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,K(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ap{constructor(t){this.Le=t,this.Be=new Map,this.ke=Wt(),this.qe=Ia(),this.Qe=new tt(G)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:z()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Fi(o))if(r===0){const a=new F(o.path);this.Ue(e,a,At.newNoDocument(a,q.min()))}else K(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=fe(r).toUint8Array()}catch(u){if(u instanceof ml)return Pe("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new cs(a,i,o)}catch(u){return Pe(u instanceof un?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&Fi(l.target)){const u=new F(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,At.newNoDocument(u,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=U();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Lr(t,e,this.Qe,this.ke,r);return this.ke=Wt(),this.qe=Ia(),this.Qe=new tt(G),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ea,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new dt(G),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||O("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ea),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ia(){return new tt(F.comparator)}function ba(){return new tt(F.comparator)}const lp={asc:"ASCENDING",desc:"DESCENDING"},cp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},up={and:"AND",or:"OR"};class dp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function qi(n,t){return n.useProto3Json||Cr(t)?t:{value:t}}function _r(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function hp(n,t){return _r(n,t.toTimestamp())}function Nt(n){return K(!!n),q.fromTimestamp(function(e){const r=ee(e);return new ot(r.seconds,r.nanos)}(n))}function us(n,t){return Hi(n,t).canonicalString()}function Hi(n,t){const e=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function jl(n){const t=Z.fromString(n);return K(Wl(t)),t}function Ui(n,t){return us(n.databaseId,t.path)}function _i(n,t){const e=jl(t);if(e.get(1)!==n.databaseId.projectId)throw new B(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new B(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(ql(e))}function zl(n,t){return us(n.databaseId,t)}function pp(n){const t=jl(n);return t.length===4?Z.emptyPath():ql(t)}function Wi(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ql(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wa(n,t,e){return{name:Ui(n,t),fields:e.value.mapValue.fields}}function fp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(h,f){return h.useProto3Json?(K(f===void 0||typeof f=="string"),ht.fromBase64String(f||"")):(K(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ht.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const f=h.code===void 0?S.UNKNOWN:Bl(h.code);return new B(f,h.message||"")}(a);e=new Ol(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=_i(n,r.document.name),o=Nt(r.document.updateTime),a=r.document.createTime?Nt(r.document.createTime):q.min(),l=new xt({mapValue:{fields:r.document.fields}}),u=At.newFoundDocument(i,o,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];e=new hr(h,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=_i(n,r.document),o=r.readTime?Nt(r.readTime):q.min(),a=At.newNoDocument(i,o),l=r.removedTargetIds||[];e=new hr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=_i(n,r.document),o=r.removedTargetIds||[];e=new hr([],o,i,null)}else{if(!("filter"in t))return z();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new rp(i,o),l=r.targetId;e=new Ml(l,a)}}return e}function mp(n,t){let e;if(t instanceof Cn)e={update:wa(n,t.key,t.value)};else if(t instanceof Nr)e={delete:Ui(n,t.key)};else if(t instanceof re)e={update:wa(n,t.key,t.data),updateMask:wp(t.fieldMask)};else{if(!(t instanceof tp))return z();e={verify:Ui(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof bn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof wn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ar)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw z()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:hp(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:z()}(n,t.precondition)),e}function gp(n,t){return n&&n.length>0?(K(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?Nt(i.updateTime):Nt(o);return a.isEqual(q.min())&&(a=Nt(o)),new Jh(a,i.transformResults||[])}(e,t))):[]}function yp(n,t){return{documents:[zl(n,t.path)]}}function vp(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=zl(n,i);const o=function(h){if(h.length!==0)return Ul(Dt.create(h,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:we(_.field),direction:Ep(_.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=qi(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:i}}function Ap(n){let t=pp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){K(r===1);const f=e.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let o=[];e.where&&(o=function(g){const _=Hl(g);return _ instanceof Dt&&Al(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(_=>function(E){return new In(xe(E.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(_))}(e.orderBy));let l=null;e.limit&&(l=function(g){let _;return _=typeof g=="object"?g.value:g,Cr(_)?null:_}(e.limit));let u=null;e.startAt&&(u=function(g){const _=!!g.before,y=g.values||[];return new vr(y,_)}(e.startAt));let h=null;return e.endAt&&(h=function(g){const _=!g.before,y=g.values||[];return new vr(y,_)}(e.endAt)),Mh(t,i,a,o,l,"F",u,h)}function _p(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Hl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=xe(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xe(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=xe(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xe(e.unaryFilter.field);return st.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(e){return st.create(xe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(r=>Hl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(n):z()}function Ep(n){return lp[n]}function Ip(n){return cp[n]}function bp(n){return up[n]}function we(n){return{fieldPath:n.canonicalString()}}function xe(n){return ut.fromServerFormat(n.fieldPath)}function Ul(n){return n instanceof st?function(e){if(e.op==="=="){if(ua(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NAN"}};if(ca(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ua(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NAN"}};if(ca(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:we(e.field),op:Ip(e.op),value:e.value}}}(n):n instanceof Dt?function(e){const r=e.getFilters().map(i=>Ul(i));return r.length===1?r[0]:{compositeFilter:{op:bp(e.op),filters:r}}}(n):z()}function wp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Wl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Xt{constructor(t,e,r,i,o=q.min(),a=q.min(),l=ht.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new Xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class xp{constructor(t){this.ct=t}}function Tp(n){const t=Ap({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zi(t,t.limit,"L"):t}/**
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
 */class Rp{constructor(){this.un=new Cp}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(te.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(te.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class Cp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new dt(Z.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new dt(Z.comparator)).toArray()}}/**
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
 */class ke{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ke(0)}static kn(){return new ke(-1)}}/**
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
 */class Pp{constructor(){this.changes=new Fe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Vp{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&mn(r.mutation,i,Ct.empty(),ot.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const i=ue();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=cn();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ue();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let o=Wt();const a=fn(),l=function(){return fn()}();return e.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof re)?o=o.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),mn(f.mutation,h,f.mutation.getFieldMask(),ot.now())):a.set(h.key,Ct.empty())}),this.recalculateAndSaveOverlays(t,o).next(u=>(u.forEach((h,f)=>a.set(h,f)),e.forEach((h,f)=>{var g;return l.set(h,new Sp(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,e){const r=fn();let i=new tt((a,l)=>a-l),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let f=r.get(u)||Ct.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||U()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=Cl();f.forEach(_=>{if(!o.has(_)){const y=Nl(e.get(_),r.get(_));y!==null&&g.set(_,y),o=o.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):V.resolve(ue());let l=-1,u=o;return a.next(h=>V.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),o.get(f)?V.resolve():this.remoteDocumentCache.getEntry(t,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(t,h,o)).next(()=>this.computeViews(t,u,h,U())).next(f=>({batchId:l,changes:Rl(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(r=>{let i=cn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=cn();return this.indexManager.getCollectionParents(t,o).next(l=>V.forEach(l,u=>{const h=function(g,_){return new Oe(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,u.child(o));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,At.newInvalidDocument(f)))});let l=cn();return a.forEach((u,h)=>{const f=o.get(u);f!==void 0&&mn(f.mutation,h,Ct.empty(),ot.now()),Vr(e,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class Dp{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Nt(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Tp(i.bundledQuery),readTime:Nt(i.readTime)}}(e)),V.resolve()}}/**
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
 */class kp{constructor(){this.overlays=new tt(F.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ue();return V.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const i=ue(),o=e.length+1,a=new F(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new tt((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let f=o.get(h.largestBatchId);f===null&&(f=ue(),o=o.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ue(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return V.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new np(e,r));let o=this.Ir.get(e);o===void 0&&(o=U(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class Np{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class ds{constructor(){this.Tr=new dt(at.Er),this.dr=new dt(at.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new at(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new F(new Z([])),r=new at(e,t),i=new at(e,t+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new F(new Z([])),r=new at(e,t),i=new at(e,t+1);let o=U();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return F.comparator(t.key,e.key)||G(t.wr,e.wr)}static Ar(t,e){return G(t.wr,e.wr)||F.comparator(t.key,e.key)}}/**
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
 */class Lp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new dt(at.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ep(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new at(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);o.push(l)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new dt(G);return e.forEach(i=>{const o=new at(i,0),a=new at(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const a=new at(new F(o),0);let l=new dt(G);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),V.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){K(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(e.mutations,i=>{const o=new at(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new at(e,0),i=this.br.firstAfterOrEqual(r);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Bp{constructor(t){this.Mr=t,this.docs=function(){return new tt(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Wt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():At.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Wt();const a=e.path,l=new F(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||vh(yh(f),r)<=0||(i.has(f.key)||Vr(e,f))&&(o=o.insert(f.key,f.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,r,i){z()}Or(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Mp(this)}getSize(t){return V.resolve(this.size)}}class Mp extends Pp{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Op{constructor(t){this.persistence=t,this.Nr=new Fe(e=>ss(e),os),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ds,this.targetCount=0,this.kr=ke.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ke(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),V.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
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
 */class Fp{constructor(t,e){this.qr={},this.overlays={},this.Qr=new es(0),this.Kr=!1,this.Kr=!0,this.$r=new Np,this.referenceDelegate=t(this),this.Ur=new Op(this),this.indexManager=new Rp,this.remoteDocumentCache=function(i){return new Bp(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new xp(e),this.Gr=new Dp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new kp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Lp(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){O("MemoryPersistence","Starting transaction:",t);const i=new jp(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class jp extends _h{constructor(t){super(),this.currentSequenceNumber=t}}class hs{constructor(t){this.persistence=t,this.Jr=new ds,this.Yr=null}static Zr(t){return new hs(t)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=F.fromPath(r);return this.ei(t,i).next(o=>{o||e.removeEntry(i,q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class ps{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ps(t,e.fromCache,r,i)}}/**
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
 */class qp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Hu()?8:Eh(zu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new zp;return this.Xi(t,e,a).next(l=>{if(o.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>o.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(an()<=Q.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",be(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(an()<=Q.DEBUG&&O("QueryEngine","Query:",be(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(an()<=Q.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",be(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kt(e))):V.resolve())}Yi(t,e){if(fa(e))return V.resolve(null);let r=kt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=zi(e,null,"F"),r=kt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=U(...o);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.ts(e,l);return this.ns(e,h,a,u.readTime)?this.Yi(t,zi(e,null,"F")):this.rs(t,h,e,u)}))})))}Zi(t,e,r,i){return fa(e)||i.isEqual(q.min())?V.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,i)?V.resolve(null):(an()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),be(e)),this.rs(t,a,e,gh(i,-1)).next(l=>l))})}ts(t,e){let r=new dt(xl(t));return e.forEach((i,o)=>{Vr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,r){return an()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",be(e)),this.Ji.getDocumentsMatchingQuery(t,e,te.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Hp{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new tt(G),this._s=new Fe(o=>ss(o),os),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Up(n,t,e,r){return new Hp(n,t,e,r)}async function Ql(n,t){const e=H(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let u=U();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of o){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Wp(n,t){const e=H(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,_=g.keys();let y=V.resolve();return _.forEach(E=>{y=y.next(()=>f.getEntry(u,E)).next(C=>{const P=h.docVersions.get(E);K(P!==null),C.version.compareTo(P)<0&&(g.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),f.addEntry(C)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=U();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function $l(n){const t=H(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Qp(n,t){const e=H(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const l=[];t.targetChanges.forEach((f,g)=>{const _=i.get(g);if(!_)return;l.push(e.Ur.removeMatchingKeys(o,f.removedDocuments,g).next(()=>e.Ur.addMatchingKeys(o,f.addedDocuments,g)));let y=_.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(g)!==null?y=y.withResumeToken(ht.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),i=i.insert(g,y),function(C,P,k){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(_,y,f)&&l.push(e.Ur.updateTargetData(o,y))});let u=Wt(),h=U();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,f))}),l.push($p(o,a,t.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(q.min())){const f=e.Ur.getLastRemoteSnapshotVersion(o).next(g=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,u,h)).next(()=>u)}).then(o=>(e.os=i,o))}function $p(n,t,e){let r=U(),i=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Wt();return e.forEach((l,u)=>{const h=o.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(q.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):O("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function Gp(n,t){const e=H(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Kp(n,t){const e=H(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(o=>o?(i=o,V.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new Xt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Qi(n,t,e){const r=H(n),i=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Rn(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function xa(n,t,e){const r=H(n);let i=q.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const g=H(u),_=g._s.get(f);return _!==void 0?V.resolve(g.os.get(_)):g.Ur.getTargetData(h,f)}(r,a,kt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:q.min(),e?o:U())).next(l=>(Xp(r,Fh(t),l),{documents:l,Ts:o})))}function Xp(n,t,e){let r=n.us.get(t)||q.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Ta{constructor(){this.activeTargetIds=Wh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jp{constructor(){this.so=new Ta,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ta,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ra{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ar=null;function Ei(){return ar===null?ar=function(){return 268435456+Math.round(2147483648*Math.random())}():ar++,"0x"+ar.toString(16)}/**
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
 */const yt="WebChannelConnection";class ef extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,r,i,o,a){const l=Ei(),u=this.xo(e,r.toUriEncodedString());O("RestConnection",`Sending RPC '${e}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,o,a),this.No(e,u,h,i).then(f=>(O("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw Pe("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(e,r,i,o,a,l){return this.Mo(e,r,i,o,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Me}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const i=Yp[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const o=Ei();return new Promise((a,l)=>{const u=new al;u.setWithCredentials(!0),u.listenOnce(ll.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case cr.NO_ERROR:const f=u.getResponseJson();O(yt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(f)),a(f);break;case cr.TIMEOUT:O(yt,`RPC '${t}' ${o} timed out`),l(new B(S.DEADLINE_EXCEEDED,"Request time out"));break;case cr.HTTP_ERROR:const g=u.getStatus();if(O(yt,`RPC '${t}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const y=_==null?void 0:_.error;if(y&&y.status&&y.message){const E=function(P){const k=P.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(k)>=0?k:S.UNKNOWN}(y.status);l(new B(E,y.message))}else l(new B(S.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(S.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{O(yt,`RPC '${t}' ${o} completed.`)}});const h=JSON.stringify(i);O(yt,`RPC '${t}' ${o} sending request:`,i),u.send(e,"POST",h,r,15)})}Bo(t,e,r){const i=Ei(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=dl(),l=ul(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=o.join("");O(yt,`Creating RPC '${t}' stream ${i}: ${f}`,u);const g=a.createWebChannel(f,u);let _=!1,y=!1;const E=new tf({Io:P=>{y?O(yt,`Not sending because RPC '${t}' stream ${i} is closed:`,P):(_||(O(yt,`Opening RPC '${t}' stream ${i} transport.`),g.open(),_=!0),O(yt,`RPC '${t}' stream ${i} sending:`,P),g.send(P))},To:()=>g.close()}),C=(P,k,D)=>{P.listen(k,N=>{try{D(N)}catch(M){setTimeout(()=>{throw M},0)}})};return C(g,ln.EventType.OPEN,()=>{y||(O(yt,`RPC '${t}' stream ${i} transport opened.`),E.yo())}),C(g,ln.EventType.CLOSE,()=>{y||(y=!0,O(yt,`RPC '${t}' stream ${i} transport closed`),E.So())}),C(g,ln.EventType.ERROR,P=>{y||(y=!0,Pe(yt,`RPC '${t}' stream ${i} transport errored:`,P),E.So(new B(S.UNAVAILABLE,"The operation could not be completed")))}),C(g,ln.EventType.MESSAGE,P=>{var k;if(!y){const D=P.data[0];K(!!D);const N=D,M=N.error||((k=N[0])===null||k===void 0?void 0:k.error);if(M){O(yt,`RPC '${t}' stream ${i} received error:`,M);const nt=M.status;let j=function(A){const I=it[A];if(I!==void 0)return Bl(I)}(nt),b=M.message;j===void 0&&(j=S.INTERNAL,b="Unknown error status: "+nt+" with message "+M.message),y=!0,E.So(new B(j,b)),g.close()}else O(yt,`RPC '${t}' stream ${i} received:`,D),E.bo(D)}}),C(l,cl.STAT_EVENT,P=>{P.stat===Li.PROXY?O(yt,`RPC '${t}' stream ${i} detected buffering proxy`):P.stat===Li.NOPROXY&&O(yt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function Ii(){return typeof document<"u"?document:null}/**
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
 */function Br(n){return new dp(n,!0)}/**
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
 */class Gl{constructor(t,e,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Kl{constructor(t,e,r,i,o,a,l,u){this.ui=t,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Gl(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Ut(e.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new B(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return O("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nf extends Kl{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=fp(this.serializer,t),r=function(o){if(!("targetChange"in o))return q.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Nt(a.readTime):q.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Wi(this.serializer),e.addTarget=function(o,a){let l;const u=a.target;if(l=Fi(u)?{documents:yp(o,u)}:{query:vp(o,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Fl(o,a.resumeToken);const h=qi(o,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(q.min())>0){l.readTime=_r(o,a.snapshotVersion.toTimestamp());const h=qi(o,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=_p(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Wi(this.serializer),e.removeTarget=t,this.a_(e)}}class rf extends Kl{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return K(!!t.streamToken),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){K(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=gp(t.writeResults,t.commitTime),r=Nt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Wi(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>mp(this.serializer,r))};this.a_(e)}}/**
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
 */class sf extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Hi(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(S.UNKNOWN,o.toString())})}Lo(t,e,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,Hi(e,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class of{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ut(e),this.D_=!1):O("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class af{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{ye(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=H(u);h.L_.add(4),await Sn(h),h.q_.set("Unknown"),h.L_.delete(4),await Mr(h)}(this))})}),this.q_=new of(r,i)}}async function Mr(n){if(ye(n))for(const t of n.B_)await t(!0)}async function Sn(n){for(const t of n.B_)await t(!1)}function Xl(n,t){const e=H(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ys(e)?gs(e):je(e).r_()&&ms(e,t))}function fs(n,t){const e=H(n),r=je(e);e.N_.delete(t),r.r_()&&Jl(e,t),e.N_.size===0&&(r.r_()?r.o_():ye(e)&&e.q_.set("Unknown"))}function ms(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}je(n).A_(t)}function Jl(n,t){n.Q_.xe(t),je(n).R_(t)}function gs(n){n.Q_=new ap({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),je(n).start(),n.q_.v_()}function ys(n){return ye(n)&&!je(n).n_()&&n.N_.size>0}function ye(n){return H(n).L_.size===0}function Zl(n){n.Q_=void 0}async function lf(n){n.q_.set("Online")}async function cf(n){n.N_.forEach((t,e)=>{ms(n,t)})}async function uf(n,t){Zl(n),ys(n)?(n.q_.M_(t),gs(n)):n.q_.set("Unknown")}async function df(n,t,e){if(n.q_.set("Online"),t instanceof Ol&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,t)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Er(n,r)}else if(t instanceof hr?n.Q_.Ke(t):t instanceof Ml?n.Q_.He(t):n.Q_.We(t),!e.isEqual(q.min()))try{const r=await $l(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=o.N_.get(h);f&&o.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=o.N_.get(u);if(!f)return;o.N_.set(u,f.withResumeToken(ht.EMPTY_BYTE_STRING,f.snapshotVersion)),Jl(o,u);const g=new Xt(f.target,u,h,f.sequenceNumber);ms(o,g)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Er(n,r)}}async function Er(n,t,e){if(!Rn(t))throw t;n.L_.add(1),await Sn(n),n.q_.set("Offline"),e||(e=()=>$l(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Mr(n)})}function Yl(n,t){return t().catch(e=>Er(n,e,t))}async function Or(n){const t=H(n),e=ne(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;hf(t);)try{const i=await Gp(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,pf(t,i)}catch(i){await Er(t,i)}tc(t)&&ec(t)}function hf(n){return ye(n)&&n.O_.length<10}function pf(n,t){n.O_.push(t);const e=ne(n);e.r_()&&e.V_&&e.m_(t.mutations)}function tc(n){return ye(n)&&!ne(n).n_()&&n.O_.length>0}function ec(n){ne(n).start()}async function ff(n){ne(n).p_()}async function mf(n){const t=ne(n);for(const e of n.O_)t.m_(e.mutations)}async function gf(n,t,e){const r=n.O_.shift(),i=ls.from(r,t,e);await Yl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Or(n)}async function yf(n,t){t&&ne(n).V_&&await async function(r,i){if(function(a){return ip(a)&&a!==S.ABORTED}(i.code)){const o=r.O_.shift();ne(r).s_(),await Yl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Or(r)}}(n,t),tc(n)&&ec(n)}async function Ca(n,t){const e=H(n);e.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=ye(e);e.L_.add(3),await Sn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Mr(e)}async function vf(n,t){const e=H(n);t?(e.L_.delete(2),await Mr(e)):t||(e.L_.add(2),await Sn(e),e.q_.set("Unknown"))}function je(n){return n.K_||(n.K_=function(e,r,i){const o=H(e);return o.w_(),new nf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:lf.bind(null,n),Ro:cf.bind(null,n),mo:uf.bind(null,n),d_:df.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),ys(n)?gs(n):n.q_.set("Unknown")):(await n.K_.stop(),Zl(n))})),n.K_}function ne(n){return n.U_||(n.U_=function(e,r,i){const o=H(e);return o.w_(),new rf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ff.bind(null,n),mo:yf.bind(null,n),f_:mf.bind(null,n),g_:gf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Or(n)):(await n.U_.stop(),n.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class vs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new vs(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function As(n,t){if(Ut("AsyncQueue",`${t}: ${n}`),Rn(n))return new B(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Re{constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=cn(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new Re(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Re;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Pa{constructor(){this.W_=new tt(F.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):z():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ne{constructor(t,e,r,i,o,a,l,u,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Ne(t,e,Re.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Sr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Af{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class _f{constructor(){this.queries=Sa(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=H(e),o=i.queries;i.queries=Sa(),o.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new B(S.ABORTED,"Firestore shutting down"))}}function Sa(){return new Fe(n=>wl(n),Sr)}async function _s(n,t){const e=H(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(r=2):(o=new Af,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=As(a,`Initialization of query '${be(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Is(e)}async function Es(n,t){const e=H(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Ef(n,t){const e=H(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Is(e)}function If(n,t,e){const r=H(n),i=r.queries.get(t);if(i)for(const o of i.j_)o.onError(e);r.queries.delete(t)}function Is(n){n.Y_.forEach(t=>{t.next()})}var $i,Va;(Va=$i||($i={})).ea="default",Va.Cache="cache";class bs{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ne(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ne.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==$i.Cache}}/**
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
 */class nc{constructor(t){this.key=t}}class rc{constructor(t){this.key=t}}class bf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=xl(t),this.Ra=new Re(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Pa,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,g)=>{const _=i.get(f),y=Vr(this.query,g)?g:null,E=!!_&&this.mutatedKeys.has(_.key),C=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;_&&y?_.data.isEqual(y.data)?E!==C&&(r.track({type:3,doc:y}),P=!0):this.ga(_,y)||(r.track({type:2,doc:y}),P=!0,(u&&this.Aa(y,u)>0||h&&this.Aa(y,h)<0)&&(l=!0)):!_&&y?(r.track({type:0,doc:y}),P=!0):_&&!y&&(r.track({type:1,doc:_}),P=!0,(u||h)&&(l=!0)),P&&(y?(a=a.add(y),o=C?o.add(f):o.delete(f)):(a=a.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((f,g)=>function(y,E){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return C(y)-C(E)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=e&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new Ne(this.query,t.Ra,o,a,t.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pa,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=U(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new rc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new nc(r))}),e}ba(t){this.Ta=t.Ts,this.da=U();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ne.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class xf{constructor(t){this.key=t,this.va=!1}}class Tf{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Fe(l=>wl(l),Sr),this.Ma=new Map,this.xa=new Set,this.Oa=new tt(F.comparator),this.Na=new Map,this.La=new ds,this.Ba={},this.ka=new Map,this.qa=ke.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Rf(n,t,e=!0){const r=cc(n);let i;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await ic(r,t,e,!0),i}async function Cf(n,t){const e=cc(n);await ic(e,t,!0,!1)}async function ic(n,t,e,r){const i=await Kp(n.localStore,kt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Pf(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Xl(n.remoteStore,i),l}async function Pf(n,t,e,r,i){n.Ka=(g,_,y)=>async function(C,P,k,D){let N=P.view.ma(k);N.ns&&(N=await xa(C.localStore,P.query,!1).then(({documents:b})=>P.view.ma(b,N)));const M=D&&D.targetChanges.get(P.targetId),nt=D&&D.targetMismatches.get(P.targetId)!=null,j=P.view.applyChanges(N,C.isPrimaryClient,M,nt);return ka(C,P.targetId,j.wa),j.snapshot}(n,g,_,y);const o=await xa(n.localStore,t,!0),a=new bf(t,o.Ts),l=a.ma(o.documents),u=Pn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);ka(n,e,h.wa);const f=new wf(t,e,a);return n.Fa.set(t,f),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),h.snapshot}async function Sf(n,t,e){const r=H(n),i=r.Fa.get(t),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!Sr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&fs(r.remoteStore,i.targetId),Gi(r,i.targetId)}).catch(Tn)):(Gi(r,i.targetId),await Qi(r.localStore,i.targetId,!0))}async function Vf(n,t){const e=H(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),fs(e.remoteStore,r.targetId))}async function Df(n,t,e){const r=Ff(n);try{const i=await function(a,l){const u=H(a),h=ot.now(),f=l.reduce((y,E)=>y.add(E.key),U());let g,_;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let E=Wt(),C=U();return u.cs.getEntries(y,f).next(P=>{E=P,E.forEach((k,D)=>{D.isValidDocument()||(C=C.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,E)).next(P=>{g=P;const k=[];for(const D of l){const N=Yh(D,g.get(D.key).overlayedDocument);N!=null&&k.push(new re(D.key,N,gl(N.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(y,h,k,l)}).next(P=>{_=P;const k=P.applyToLocalDocumentSet(g,C);return u.documentOverlayCache.saveOverlays(y,P.batchId,k)})}).then(()=>({batchId:_.batchId,changes:Rl(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new tt(G)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,e),await Vn(r,i.changes),await Or(r.remoteStore)}catch(i){const o=As(i,"Failed to persist write");e.reject(o)}}async function sc(n,t){const e=H(n);try{const r=await Qp(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?K(a.va):i.removedDocuments.size>0&&(K(a.va),a.va=!1))}),await Vn(e,r,t)}catch(r){await Tn(r)}}function Da(n,t,e){const r=H(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=H(a);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const _ of g.j_)_.Z_(l)&&(h=!0)}),h&&Is(u)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kf(n,t,e){const r=H(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),o=i&&i.key;if(o){let a=new tt(F.comparator);a=a.insert(o,At.newNoDocument(o,q.min()));const l=U().add(o),u=new Lr(q.min(),new Map,new tt(G),a,l);await sc(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(t),ws(r)}else await Qi(r.localStore,t,!1).then(()=>Gi(r,t,e)).catch(Tn)}async function Nf(n,t){const e=H(n),r=t.batch.batchId;try{const i=await Wp(e.localStore,t);ac(e,r,null),oc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Vn(e,i)}catch(i){await Tn(i)}}async function Lf(n,t,e){const r=H(n);try{const i=await function(a,l){const u=H(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(K(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,t);ac(r,t,e),oc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Vn(r,i)}catch(i){await Tn(i)}}function oc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function ac(n,t,e){const r=H(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Gi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||lc(n,r)})}function lc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(fs(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),ws(n))}function ka(n,t,e){for(const r of e)r instanceof nc?(n.La.addReference(r.key,t),Bf(n,r)):r instanceof rc?(O("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||lc(n,r.key)):z()}function Bf(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(O("SyncEngine","New document in limbo: "+e),n.xa.add(r),ws(n))}function ws(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new F(Z.fromString(t)),r=n.qa.next();n.Na.set(r,new xf(e)),n.Oa=n.Oa.insert(e,r),Xl(n.remoteStore,new Xt(kt(Pr(e.path)),r,"TargetPurposeLimboResolution",es.oe))}}async function Vn(n,t,e){const r=H(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,t,e).then(h=>{var f;if((h||e)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=ps.Wi(u.targetId,h);o.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=H(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(h,_=>V.forEach(_.$i,y=>f.persistence.referenceDelegate.addReference(g,_.targetId,y)).next(()=>V.forEach(_.Ui,y=>f.persistence.referenceDelegate.removeReference(g,_.targetId,y)))))}catch(g){if(!Rn(g))throw g;O("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const y=f.os.get(_),E=y.snapshotVersion,C=y.withLastLimboFreeSnapshotVersion(E);f.os=f.os.insert(_,C)}}}(r.localStore,o))}async function Mf(n,t){const e=H(n);if(!e.currentUser.isEqual(t)){O("SyncEngine","User change. New user:",t.toKey());const r=await Ql(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(l=>{l.forEach(u=>{u.reject(new B(S.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Vn(e,r.hs)}}function Of(n,t){const e=H(n),r=e.Na.get(t);if(r&&r.va)return U().add(r.key);{let i=U();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const l=e.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function cc(n){const t=H(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=sc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Of.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kf.bind(null,t),t.Ca.d_=Ef.bind(null,t.eventManager),t.Ca.$a=If.bind(null,t.eventManager),t}function Ff(n){const t=H(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Nf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Lf.bind(null,t),t}class Ir{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Br(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Up(this.persistence,new qp,t.initialUser,this.serializer)}Ga(t){return new Fp(hs.Zr,this.serializer)}Wa(t){return new Jp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ir.provider={build:()=>new Ir};class Ki{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Da(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mf.bind(null,this.syncEngine),await vf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _f}()}createDatastore(t){const e=Br(t.databaseInfo.databaseId),r=function(o){return new ef(o)}(t.databaseInfo);return function(o,a,l,u){return new sf(o,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,l){return new af(r,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Da(this.syncEngine,e,0),function(){return Ra.D()?new Ra:new Zp}())}createSyncEngine(t,e){return function(i,o,a,l,u,h,f){const g=new Tf(i,o,a,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=H(i);O("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Sn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ki.provider={build:()=>new Ki};/**
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
 */class xs{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Ut("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class jf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=pl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{O("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=As(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function bi(n,t){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ql(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Na(n,t){n.asyncQueue.verifyOperationInProgress();const e=await zf(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ca(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ca(t.remoteStore,i)),n._onlineComponents=t}async function zf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await bi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Pe("Error using user provided cache. Falling back to memory cache: "+e),await bi(n,new Ir)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await bi(n,new Ir);return n._offlineComponents}async function uc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Na(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Na(n,new Ki))),n._onlineComponents}function qf(n){return uc(n).then(t=>t.syncEngine)}async function br(n){const t=await uc(n),e=t.eventManager;return e.onListen=Rf.bind(null,t.syncEngine),e.onUnlisten=Sf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Cf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vf.bind(null,t.syncEngine),e}function Hf(n,t,e={}){const r=new qt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,h){const f=new xs({next:_=>{f.Za(),a.enqueueAndForget(()=>Es(o,g));const y=_.docs.has(l);!y&&_.fromCache?h.reject(new B(S.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&_.fromCache&&u&&u.source==="server"?h.reject(new B(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new bs(Pr(l.path),f,{includeMetadataChanges:!0,_a:!0});return _s(o,g)}(await br(n),n.asyncQueue,t,e,r)),r.promise}function Uf(n,t,e={}){const r=new qt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,h){const f=new xs({next:_=>{f.Za(),a.enqueueAndForget(()=>Es(o,g)),_.fromCache&&u.source==="server"?h.reject(new B(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new bs(l,f,{includeMetadataChanges:!0,_a:!0});return _s(o,g)}(await br(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function dc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const La=new Map;/**
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
 */function hc(n,t,e){if(!e)throw new B(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Wf(n,t,e,r){if(t===!0&&r===!0)throw new B(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ba(n){if(!F.isDocumentKey(n))throw new B(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ma(n){if(F.isDocumentKey(n))throw new B(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":z()}function wt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new B(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Fr(n);throw new B(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Oa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new B(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new B(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Wf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new B(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new B(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new B(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class jr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new B(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ah;switch(r.type){case"firstParty":return new dh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=La.get(e);r&&(O("ComponentProvider","Removing Datastore"),La.delete(e),r.terminate())}(this),Promise.resolve()}}function Qf(n,t,e,r={}){var i;const o=(n=wt(n,jr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Pe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=vt.MOCK_USER;else{l=ju(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new B(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new vt(h)}n._authCredentials=new lh(new hl(l,u))}}/**
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
 */class ie{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ie(this.firestore,t,this._query)}}class _t{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}}class Yt extends ie{constructor(t,e,r){super(t,e,Pr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new F(t))}withConverter(t){return new Yt(this.firestore,t,this._path)}}function Tt(n,t,...e){if(n=St(n),hc("collection","path",t),n instanceof jr){const r=Z.fromString(t,...e);return Ma(r),new Yt(n,null,r)}{if(!(n instanceof _t||n instanceof Yt))throw new B(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Ma(r),new Yt(n.firestore,null,r)}}function Mt(n,t,...e){if(n=St(n),arguments.length===1&&(t=pl.newId()),hc("doc","path",t),n instanceof jr){const r=Z.fromString(t,...e);return Ba(r),new _t(n,null,new F(r))}{if(!(n instanceof _t||n instanceof Yt))throw new B(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Ba(r),new _t(n.firestore,n instanceof Yt?n.converter:null,new F(r))}}/**
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
 */class Fa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Gl(this,"async_queue_retry"),this.Vu=()=>{const r=Ii();r&&O("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Ii();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ii();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new qt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Rn(t))throw t;O("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Ut("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=vs.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function ja(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Bt extends jr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Fa,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Fa(t),this._firestoreClient=void 0,await t}}}function $f(n,t){const e=typeof n=="object"?n:Kd(),r=typeof n=="string"?n:"(default)",i=Wd(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Ou("firestore");o&&Qf(i,...o)}return i}function Dn(n){if(n._terminated)throw new B(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gf(n),n._firestoreClient}function Gf(n){var t,e,r;const i=n._freezeSettings(),o=function(l,u,h,f){return new wh(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,dc(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new jf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Le{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Le(ht.fromBase64String(t))}catch(e){throw new B(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Le(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class kn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new B(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class zr{constructor(t){this._methodName=t}}/**
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
 */class Ts{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new B(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new B(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}/**
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
 */class Rs{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Kf=/^__.*__$/;class Xf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new re(t,this.data,this.fieldMask,e,this.fieldTransforms):new Cn(t,this.data,e,this.fieldTransforms)}}class pc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new re(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function fc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Cs{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Cs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return wr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(fc(this.Cu)&&Kf.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Jf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Br(t)}Qu(t,e,r,i=!1){return new Cs({Cu:t,methodName:e,qu:r,path:ut.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nn(n){const t=n._freezeSettings(),e=Br(n._databaseId);return new Jf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ps(n,t,e,r,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,i);Vs("Data must be an object, but it was:",a,r);const l=yc(r,a);let u,h;if(o.merge)u=new Ct(a.fieldMask),h=a.fieldTransforms;else if(o.mergeFields){const f=[];for(const g of o.mergeFields){const _=Xi(t,g,e);if(!a.contains(_))throw new B(S.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Ac(f,_)||f.push(_)}u=new Ct(f),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new Xf(new xt(l),u,h)}class qr extends zr{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof qr}}class Ss extends zr{_toFieldTransform(t){return new Kh(t.path,new bn)}isEqual(t){return t instanceof Ss}}function mc(n,t,e,r){const i=n.Qu(1,t,e);Vs("Data must be an object, but it was:",i,r);const o=[],a=xt.empty();ge(r,(u,h)=>{const f=Ds(t,u,e);h=St(h);const g=i.Nu(f);if(h instanceof qr)o.push(f);else{const _=Ln(h,g);_!=null&&(o.push(f),a.set(f,_))}});const l=new Ct(o);return new pc(a,l,i.fieldTransforms)}function gc(n,t,e,r,i,o){const a=n.Qu(1,t,e),l=[Xi(t,r,e)],u=[i];if(o.length%2!=0)throw new B(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<o.length;_+=2)l.push(Xi(t,o[_])),u.push(o[_+1]);const h=[],f=xt.empty();for(let _=l.length-1;_>=0;--_)if(!Ac(h,l[_])){const y=l[_];let E=u[_];E=St(E);const C=a.Nu(y);if(E instanceof qr)h.push(y);else{const P=Ln(E,C);P!=null&&(h.push(y),f.set(y,P))}}const g=new Ct(h);return new pc(f,g,a.fieldTransforms)}function Zf(n,t,e,r=!1){return Ln(e,n.Qu(r?4:3,t))}function Ln(n,t){if(vc(n=St(n)))return Vs("Unsupported field value:",t,n),yc(n,t);if(n instanceof zr)return function(r,i){if(!fc(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let u=Ln(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=St(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:_r(i.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_r(i.serializer,o)}}if(r instanceof Ts)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Le)return{bytesValue:Fl(i.serializer,r._byteString)};if(r instanceof _t){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:us(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Rs)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return as(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Fr(r)}`)}(n,t)}function yc(n,t){const e={};return fl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ge(n,(r,i)=>{const o=Ln(i,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function vc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof Ts||n instanceof Le||n instanceof _t||n instanceof zr||n instanceof Rs)}function Vs(n,t,e){if(!vc(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Fr(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Xi(n,t,e){if((t=St(t))instanceof kn)return t._internalPath;if(typeof t=="string")return Ds(n,t);throw wr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Yf=new RegExp("[~\\*/\\[\\]]");function Ds(n,t,e){if(t.search(Yf)>=0)throw wr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new kn(...t.split("."))._internalPath}catch{throw wr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function wr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new B(S.INVALID_ARGUMENT,l+n+u)}function Ac(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class _c{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new tm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ks("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class tm extends _c{data(){return super.data()}}function ks(n,t){return typeof t=="string"?Ds(n,t):t instanceof kn?t._internalPath:t._delegate._internalPath}/**
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
 */function Ec(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ns{}class Ic extends Ns{}function Hr(n,t,...e){let r=[];t instanceof Ns&&r.push(t),r=r.concat(e),function(o){const a=o.filter(u=>u instanceof Bs).length,l=o.filter(u=>u instanceof Ls).length;if(a>1||a>0&&l>0)throw new B(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ls extends Ic{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Ls(t,e,r)}_apply(t){const e=this._parse(t);return bc(t._query,e),new ie(t.firestore,t.converter,ji(t._query,e))}_parse(t){const e=Nn(t.firestore);return function(o,a,l,u,h,f,g){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){qa(g,f);const y=[];for(const E of g)y.push(za(u,o,E));_={arrayValue:{values:y}}}else _=za(u,o,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||qa(g,f),_=Zf(l,a,g,f==="in"||f==="not-in");return st.create(h,f,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Bs extends Ns{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Bs(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Dt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const l=o.getFlattenedFilters();for(const u of l)bc(a,u),a=ji(a,u)}(t._query,e),new ie(t.firestore,t.converter,ji(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ms extends Ic{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ms(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new B(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new In(o,a)}(t._query,this._field,this._direction);return new ie(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Oe(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function Ur(n,t="asc"){const e=t,r=ks("orderBy",n);return Ms._create(r,e)}function za(n,t,e){if(typeof(e=St(e))=="string"){if(e==="")throw new B(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bl(t)&&e.indexOf("/")!==-1)throw new B(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Z.fromString(e));if(!F.isDocumentKey(r))throw new B(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return la(n,new F(r))}if(e instanceof _t)return la(n,e._key);throw new B(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fr(e)}.`)}function qa(n,t){if(!Array.isArray(n)||n.length===0)throw new B(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function bc(n,t){const e=function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new B(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new B(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class em{convertValue(t,e="none"){switch(me(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw z()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ge(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>rt(a.doubleValue));return new Rs(o)}convertGeoPoint(t){return new Ts(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=rs(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(An(t));default:return null}}convertTimestamp(t){const e=ee(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);K(Wl(r));const i=new _n(r.get(1),r.get(3)),o=new F(r.popFirst(5));return i.isEqual(e)||Ut(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Os(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
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
 */class dn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class wc extends _c{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new pr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ks("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class pr extends wc{data(t={}){return super.data(t)}}class xc{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new dn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new pr(this._firestore,this._userDataWriter,r.key,r,new dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new B(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new pr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new dn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new pr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new dn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:nm(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
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
 */function Tc(n){n=wt(n,_t);const t=wt(n.firestore,Bt);return Hf(Dn(t),n._key).then(e=>Pc(t,n,e))}class Fs extends em{constructor(t){super(),this.firestore=t}convertBytes(t){return new Le(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _t(this.firestore,null,e)}}function Bn(n){n=wt(n,ie);const t=wt(n.firestore,Bt),e=Dn(t),r=new Fs(t);return Ec(n._query),Uf(e,n._query).then(i=>new xc(t,r,n,i))}function Ha(n,t,e){n=wt(n,_t);const r=wt(n.firestore,Bt),i=Os(n.converter,t,e);return Mn(r,[Ps(Nn(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,bt.none())])}function ze(n,t,e,...r){n=wt(n,_t);const i=wt(n.firestore,Bt),o=Nn(i);let a;return a=typeof(t=St(t))=="string"||t instanceof kn?gc(o,"updateDoc",n._key,t,e,r):mc(o,"updateDoc",n._key,t),Mn(i,[a.toMutation(n._key,bt.exists(!0))])}function Rc(n){return Mn(wt(n.firestore,Bt),[new Nr(n._key,bt.none())])}function Cc(n,t){const e=wt(n.firestore,Bt),r=Mt(n),i=Os(n.converter,t);return Mn(e,[Ps(Nn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function qe(n,...t){var e,r,i;n=St(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||ja(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(ja(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),t[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,h,f;if(n instanceof _t)h=wt(n.firestore,Bt),f=Pr(n._key.path),u={next:g=>{t[a]&&t[a](Pc(h,n,g))},error:t[a+1],complete:t[a+2]};else{const g=wt(n,ie);h=wt(g.firestore,Bt),f=g._query;const _=new Fs(h);u={next:y=>{t[a]&&t[a](new xc(h,_,g,y))},error:t[a+1],complete:t[a+2]},Ec(n._query)}return function(_,y,E,C){const P=new xs(C),k=new bs(y,P,E);return _.asyncQueue.enqueueAndForget(async()=>_s(await br(_),k)),()=>{P.Za(),_.asyncQueue.enqueueAndForget(async()=>Es(await br(_),k))}}(Dn(h),f,l,u)}function Mn(n,t){return function(r,i){const o=new qt;return r.asyncQueue.enqueueAndForget(async()=>Df(await qf(r),i,o)),o.promise}(Dn(n),t)}function Pc(n,t,e){const r=e.docs.get(t._key),i=new Fs(n);return new wc(n,i,t._key,r,new dn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class rm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Nn(t)}set(t,e,r){this._verifyNotCommitted();const i=wi(t,this._firestore),o=Os(i.converter,e,r),a=Ps(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,bt.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const o=wi(t,this._firestore);let a;return a=typeof(e=St(e))=="string"||e instanceof kn?gc(this._dataReader,"WriteBatch.update",o._key,e,r,i):mc(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,bt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=wi(t,this._firestore);return this._mutations=this._mutations.concat(new Nr(e._key,bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function wi(n,t){if((n=St(n)).firestore!==t)throw new B(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Sc(){return new Ss("serverTimestamp")}/**
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
 */function js(n){return Dn(n=wt(n,Bt)),new rm(n,t=>Mn(n,t))}(function(t,e=!0){(function(i){Me=i})(Gd),gr(new gn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Bt(new ch(r.getProvider("auth-internal")),new ph(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _n(h.options.projectId,f)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Te(ra,"4.7.3",t),Te(ra,"4.7.3","esm2017")})();const im={apiKey:"AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",authDomain:"feria-vinos-sucovi-2027.firebaseapp.com",databaseURL:"https://feria-vinos-sucovi-2027-default-rtdb.firebaseio.com",projectId:"feria-vinos-sucovi-2027",storageBucket:"feria-vinos-sucovi-2027.firebasestorage.app",messagingSenderId:"1686119758",appId:"1:1686119758:web:2c3c6d96e36f1276052a1f",measurementId:"G-VRMTQ3SS7E"},sm=rl(im),Y=$f(sm),he=[{id:0,nombre:"Sucovi",region:"Pruebas / Bebidas",pass:"stand00"},{id:1,nombre:"Alta Vista",region:"Mendoza",pass:"stand01"},{id:2,nombre:"Andillian",region:"Mendoza",pass:"stand02"},{id:3,nombre:"Ante Nada",region:"Mendoza",pass:"stand03"},{id:4,nombre:"Bodega Benegas",region:"Mendoza",pass:"stand04"},{id:5,nombre:"Bianchi",region:"San Rafael",pass:"stand05"},{id:6,nombre:"Catena Zapata",region:"Luján de Cuyo",pass:"stand06"},{id:7,nombre:"Bodegas Bórbore",region:"Mendoza (1936)",pass:"stand07"},{id:8,nombre:"Fábula Wines",region:"Mendoza",pass:"stand08"},{id:9,nombre:"Finca Iral",region:"Mendoza",pass:"stand09"},{id:10,nombre:"Giménez Riili",region:"Mendoza",pass:"stand10"},{id:11,nombre:"Jorge Rubio",region:"Mendoza",pass:"stand11"},{id:12,nombre:"La Coste de los Andes",region:"Mendoza",pass:"stand12"},{id:13,nombre:"Las Perdices",region:"Mendoza",pass:"stand13"},{id:14,nombre:"Lorenzo de Agrelo",region:"Mendoza",pass:"stand14"},{id:15,nombre:"Pannunzio Wines",region:"Mendoza",pass:"stand15"},{id:16,nombre:"Bodega Patritti",region:"Mendoza",pass:"stand16"},{id:17,nombre:"Rosell Boher",region:"Mendoza",pass:"stand17"},{id:18,nombre:"Valle de la Puerta",region:"La Rioja",pass:"stand18"}];async function xr(n){return await Cc(Tt(Y,"invitados"),{...n,creadoEn:Sc()})}async function Ce(n,t){await ze(Mt(Y,"invitados",n),t)}function On(n){return qe(Hr(Tt(Y,"invitados"),Ur("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}async function Tr(n){const e=(await Bn(Tt(Y,"invitados"))).docs.find(r=>r.data().token===n);return e?{fireId:e.id,...e.data()}:null}async function om(n){const e=(await Bn(Tt(Y,"invitados"))).docs.find(r=>r.data().codigo===n);return e?{fireId:e.id,...e.data()}:null}async function Vc(n,t,e,r,i){const o=Mt(Y,"carritos",n,"items",String(t)),a=await Tc(o);if(a.exists()){const l=a.data(),u=l.items||[],h=u.findIndex(f=>f.key===r.key);h>=0?u[h]=r:u.push(r),await Ha(o,{standId:t,standNombre:e,items:u,retiro:i||l.retiro||"stand"})}else await Ha(o,{standId:t,standNombre:e,items:[r],retiro:i||"stand"})}async function zs(n,t,e){await ze(Mt(Y,"carritos",n,"items",String(t)),{retiro:e})}async function Rr(n,t,e){const r=Mt(Y,"carritos",n,"items",String(t)),i=await Tc(r);if(!i.exists())return;const o=(i.data().items||[]).filter(a=>a.key!==e);o.length?await ze(r,{items:o}):await Rc(r)}async function Dc(n){return(await Bn(Tt(Y,"carritos",n,"items"))).docs.map(e=>({standId:e.id,...e.data()}))}function qs(n,t){return qe(Tt(Y,"carritos",n,"items"),e=>t(e.docs.map(r=>({standDocId:r.id,...r.data()}))))}async function kc(n){const t=await Bn(Tt(Y,"carritos",n,"items")),e=js(Y);t.docs.forEach(r=>e.delete(r.ref)),await e.commit()}async function Nc(n,t){const e=js(Y),r=[];return t.forEach(i=>{const o=Mt(Tt(Y,"pedidos"));r.push(o),e.set(o,{invFireId:n.fireId,invNombre:n.nombre+" "+n.apellido,invCodigo:n.codigo,standId:i.standId,standNombre:i.standNombre,items:i.items||[],total:(i.items||[]).reduce((a,l)=>a+(l.sub||0),0),retiro:i.retiro||"stand",estado:"pagado",creadoEn:Sc()})}),await e.commit(),r.map(i=>i.id)}function Wr(n){return qe(Hr(Tt(Y,"pedidos"),Ur("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}function Lc(n,t){return qe(Hr(Tt(Y,"pedidos"),Ur("creadoEn","desc")),e=>t(e.docs.map(r=>({fireId:r.id,...r.data()})).filter(r=>Number(r.standId)===Number(n))))}function Bc(n,t){return qe(Hr(Tt(Y,"pedidos"),Ur("creadoEn","desc")),e=>t(e.docs.map(r=>({fireId:r.id,...r.data()})).filter(r=>r.invFireId===n)))}async function Mc(n){await ze(Mt(Y,"pedidos",n),{estado:"entregado"})}async function Oc(n,t){const e={pendiente:"pagado",pagado:"listo",listo:"entregado"};e[t]&&await ze(Mt(Y,"pedidos",n),{estado:e[t]})}function Hs(n,t){return qe(Tt(Y,"bodegas",String(n),"vinos"),e=>t(e.docs.map(r=>({fireId:r.id,...r.data()}))))}async function Fc(n,t){return await Cc(Tt(Y,"bodegas",String(n),"vinos"),t)}async function jc(n,t,e){await ze(Mt(Y,"bodegas",String(n),"vinos",t),e)}async function zc(n,t){await Rc(Mt(Y,"bodegas",String(n),"vinos",t))}async function qc(){const n=["invitados","pedidos"];for(const t of n){const e=await Bn(Tt(Y,t)),r=js(Y);e.docs.forEach(i=>r.delete(i.ref)),await r.commit()}}const Hc=Object.freeze(Object.defineProperty({__proto__:null,BODEGAS:he,actualizarInvitado:Ce,actualizarRetiroStand:zs,actualizarVino:jc,agregarAlCarrito:Vc,avanzarEstado:Oc,buscarInvitadoPorCodigo:om,buscarInvitadoPorToken:Tr,crearInvitado:xr,crearPedidosDesdeCarrito:Nc,eliminarItemCarrito:Rr,eliminarVino:zc,escucharCarrito:qs,escucharInvitados:On,escucharPedidos:Wr,escucharPedidosPorInvitado:Bc,escucharPedidosPorStand:Lc,escucharVinos:Hs,guardarVino:Fc,leerCarrito:Dc,limpiarDatosPrueba:qc,marcarEntregado:Mc,vaciarCarrito:kc},Symbol.toStringTag,{value:"Module"})),am="modulepreload",lm=function(n){return"/"+n},Ua={},Us=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(u=>{if(u=lm(u),u in Ua)return;Ua[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":am,h||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),h)return new Promise((_,y)=>{g.addEventListener("load",_),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},Uc="data:image/png;base64,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";function Pt({title:n,sub:t="",backHref:e="",backLabel:r="← Panel",actions:i=[]}={}){return`
    <div class="hdr">
      <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
        <img src="${Uc}" alt="Sucovi 2027"
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
    <div class="gold"></div>`}function Ji(n){return`
    <div style="background:linear-gradient(160deg,#1A3A5C 0%,#2C5F8A 60%,#3A7D44 100%);
                color:#fff;padding:20px 16px 16px;text-align:center">
      <img src="${Uc}" alt="Sucovi 2027"
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
    <div class="gold"></div>`}function Ot(){if(document.getElementById("sucovi-styles"))return;const n=document.createElement("style");n.id="sucovi-styles",n.textContent=`
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
  `,document.head.appendChild(n)}async function cm(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Wa(n,t,e){await cm();const r=document.getElementById(n);if(r)try{const i=qrcode(0,"M");i.addData(String(t)),i.make();const o=i.getModuleCount(),a=e/o;r.width=e,r.height=e;const l=r.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let u=0;u<o;u++)for(let h=0;h<o;h++)i.isDark(u,h)&&l.fillRect(h*a,u*a,a,a)}catch(i){console.error("QR error:",i)}}const lr=n=>Number(n).toLocaleString("es-AR"),Qa=()=>Math.random().toString(36).slice(2,10).toUpperCase(),$a=n=>"INV-"+String(n).padStart(4,"0");function Ga(n){return{pendiente:'<span class="badge b-pend">Pendiente</span>',pagado:'<span class="badge b-pago">Bono pagado</span>',ingresado:'<span class="badge b-ingr">Ingresó</span>',invalidado:'<span class="badge b-inv">Invalidado</span>'}[n]||""}const um={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},dm={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"};function hm(n){Ot();let t=[],e=[],r="inv",i=null;n.innerHTML=Pt({title:"Sucovi 2027",sub:"20 jun 2026 · 19:30 hs · Roma 656, Olivos"})+`
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
    </div>`,On(y=>{t=y,r==="inv"&&o(),r==="res"&&g()}),Wr(y=>{e=y,r==="ped"&&h(),r==="res"&&g()}),window._aTab=(y,E)=>{var P;r=y,document.querySelectorAll(".nav button").forEach(k=>k.classList.remove("on")),E.classList.add("on");const C={inv:o,reg:a,excel:l,ped:h,stands:f,res:g,config:_};(P=C[y])==null||P.call(C)};function o(){const y=document.getElementById("tab-content");document.getElementById("buscar-inv")||(y.innerHTML=`
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
        <div class="card" id="lista-inv"></div>`),window._fInv=()=>{var D,N;const E=(((D=document.getElementById("buscar-inv"))==null?void 0:D.value)||"").toLowerCase(),C=((N=document.getElementById("fil-est"))==null?void 0:N.value)||"",P=t.filter(M=>(M.nombre+" "+M.apellido+" "+(M.codigo||"")+" "+(M.familia||"")).toLowerCase().includes(E)&&(!C||M.estado===C)),k=document.getElementById("lista-inv");if(k){if(!P.length){k.innerHTML='<div class="empty">Sin resultados</div>';return}k.innerHTML=P.map(M=>{var nt,j;return`
        <div class="row" style="${M.estado==="invalidado"?"opacity:.5":""}">
          <div class="avatar">${((nt=M.nombre)==null?void 0:nt[0])||"?"}${((j=M.apellido)==null?void 0:j[0])||""}</div>
          <div style="flex:1;min-width:80px">
            <div style="font-size:13px;font-weight:500">${M.nombre} ${M.apellido}</div>
            <div style="font-size:11px;color:#888">${M.tel}${M.familia?" · "+M.familia:""}</div>
          </div>
          <div style="font-size:11px;color:#aaa">${M.codigo||""}</div>
          ${Ga(M.estado)}
          <div style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">
            <button class="btn" style="padding:4px 8px;font-size:11px" onclick="window._abrirWA('${M.fireId}')">📱 WA</button>
            ${M.estado!=="invalidado"?`<button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D" onclick="window._invalidar('${M.fireId}','${M.nombre} ${M.apellido}')">✕ Invalidar</button>`:`<button class="btn" style="padding:4px 8px;font-size:11px;color:#3B6D11;border-color:#3B6D11" onclick="window._reactivar('${M.fireId}')">↩ Reactivar</button>`}
          </div>
        </div>`}).join("")}},window._fInv()}window._invalidar=async(y,E)=>{confirm(`¿Invalidar a ${E}?`)&&await Ce(y,{estado:"invalidado"})},window._reactivar=async y=>await Ce(y,{estado:"pendiente"});function a(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}window._registrar=async()=>{const y=document.getElementById("rn").value.trim(),E=document.getElementById("ra").value.trim(),C=document.getElementById("rt").value.trim(),P=document.querySelector('input[name="rp"]:checked').value,k=document.getElementById("reg-msg");if(!y||!E||!C){k.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}k.innerHTML='<span style="color:#888">Guardando...</span>';try{const D=$a(t.length+1),N=Qa(),M=await xr({nombre:y,apellido:E,tel:C,email:document.getElementById("re").value.trim()||void 0,familia:document.getElementById("rf").value.trim()||void 0,comentarios:document.getElementById("rc").value.trim()||void 0,estado:P,codigo:D,token:N});k.innerHTML=`<span style="color:#3B6D11">✓ ${y} ${E} (${D})</span>`,["rn","ra","rt","re","rf","rc"].forEach(nt=>{const j=document.getElementById(nt);j&&(j.value="")}),P==="pagado"&&setTimeout(()=>window._abrirWA(M.id),600)}catch(D){k.innerHTML=`<span style="color:#A32D2D">Error: ${D.message}</span>`}};function l(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}let u=[];window._procesarExcel=async y=>{const E=y.files[0];if(!E)return;const C=document.getElementById("excel-preview");C.innerHTML='<p style="font-size:12px;color:#888">Procesando...</p>';try{const P=await Us(()=>import("https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs"),[]),k=await E.arrayBuffer(),D=P.read(k),N=D.Sheets[D.SheetNames[0]],M=P.utils.sheet_to_json(N,{header:1}),nt=typeof M[0][0]=="string"&&M[0][0].toLowerCase().includes("nombre")?1:0;u=M.slice(nt).filter(j=>j[0]&&j[1]&&j[2]).map(j=>({nombre:String(j[0]||"").trim(),apellido:String(j[1]||"").trim(),tel:String(j[2]||"").trim(),email:j[3]?String(j[3]).trim():void 0,familia:j[4]?String(j[4]).trim():void 0,comentarios:j[5]?String(j[5]).trim():void 0,estado:String(j[6]||"").toUpperCase()==="SI"?"pagado":"pendiente"})),C.innerHTML=`
        <p style="font-size:12px;color:#3B6D11;margin-bottom:8px">
          ✓ ${u.length} invitados detectados
        </p>
        <div style="max-height:200px;overflow-y:auto;border:.5px solid #e0d5c8;border-radius:8px">
          ${u.slice(0,5).map(j=>`
            <div style="padding:6px 10px;border-bottom:.5px solid #f0ebe4;font-size:12px">
              ${j.nombre} ${j.apellido} · ${j.tel} · <span class="badge ${j.estado==="pagado"?"b-pago":"b-pend"}">${j.estado==="pagado"?"Pagado":"Pendiente"}</span>
            </div>`).join("")}
          ${u.length>5?`<div style="padding:6px 10px;font-size:11px;color:#aaa">...y ${u.length-5} más</div>`:""}
        </div>`,document.getElementById("btn-importar").style.display="block"}catch(P){C.innerHTML=`<p style="color:#A32D2D;font-size:12px">Error al leer el archivo: ${P.message}</p>`}},window._importarExcel=async()=>{if(!u.length)return;const y=document.getElementById("btn-importar"),E=document.getElementById("excel-msg");y.disabled=!0,y.textContent="Importando...",E.innerHTML='<span style="color:#888">Procesando...</span>';let C=0,P=0;const k=t.length;for(let D=0;D<u.length;D++)try{const N=u[D];await xr({...N,codigo:$a(k+D+1),token:Qa()}),C++}catch{P++}E.innerHTML=`<span style="color:#3B6D11">✓ ${C} invitados importados${P?` (${P} errores)`:""}</span>`,y.style.display="none",u=[]};function h(){const y=document.getElementById("tab-content");if(!e.length){y.innerHTML='<div class="empty">Sin pedidos aún 🍷</div>';return}y.innerHTML=e.map(E=>{var C;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">#${(C=E.fireId)==null?void 0:C.slice(-4).toUpperCase()}</span>
        <div style="flex:1;min-width:90px">
          <div style="font-size:12px;font-weight:500">${E.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${E.standNombre}${E.retiro==="envio"?' · <span style="color:#5A1E99">Envío</span>':""}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:100px">${(E.items||[]).map(P=>P.desc).join(" · ")}</span>
        <span style="font-size:14px;font-weight:500">$${lr(E.total||0)}</span>
        <span class="badge ${dm[E.estado]}">${um[E.estado]}</span>
      </div>`}).join("")}function f(){const y=window.location.origin;document.getElementById("tab-content").innerHTML=`
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>QR de pedidos:</strong> se imprime en el stand — los clientes lo escanean con su QR de acceso.<br>
        <strong>Panel stand:</strong> para el personal de la bodega (ver pedidos + marcar entregas).<br>
        <strong>Carga vinos:</strong> para que cada bodega cargue su carta directamente.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${he.map(E=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${E.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${E.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${E.region}</div>
            <canvas id="qr-s${E.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="font-size:10px;color:#aaa;margin-bottom:8px;word-break:break-all">${y}/stand/${E.id}</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${y}/stand/${E.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <a href="${y}/panel/${E.id}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none">Panel stand</a>
              <a href="${y}/bodega/${E.id}/vinos" target="_blank" class="btn" style="font-size:11px;padding:5px;text-decoration:none;color:#3B6D11;border-color:#3B6D11">Cargar vinos</a>
              <div style="font-size:10px;color:#aaa">Pass: <strong>${E.pass}</strong></div>
            </div>
          </div>`).join("")}
      </div>`,he.forEach(E=>setTimeout(()=>Wa("qr-s"+E.id,`${y}/stand/${E.id}`,110),50))}function g(){const y=t.filter(N=>N.estado==="pagado").length,E=t.filter(N=>N.estado==="ingresado").length,C=(y+E)*35e3,P=e.reduce((N,M)=>N+(M.total||0),0),k={};e.forEach(N=>{k[N.standId]||(k[N.standId]={n:N.standNombre,t:0,c:0}),k[N.standId].t+=N.total||0,k[N.standId].c++});const D=Object.values(k).sort((N,M)=>M.t-N.t);document.getElementById("tab-content").innerHTML=`
      <div class="stats">
        ${[[t.filter(N=>N.estado!=="invalidado").length,"Invitados"],[y+E,"Con bono"],["$"+lr(C),"Bonos"],[e.length,"Pedidos"],["$"+lr(P),"Ventas"],[e.filter(N=>N.retiro==="envio").length,"Envíos"]].map(([N,M])=>`<div class="stat"><div class="v" style="font-size:${String(N).length>7?"13px":"20px"}">${N}</div><div class="l">${M}</div></div>`).join("")}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Ventas por bodega</p>
        ${D.length?D.map(N=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span style="font-weight:500">${N.n}</span><span style="color:#888">${N.c} ped.</span><span style="font-weight:500">$${lr(N.t)}</span>
          </div>`).join(""):'<div class="empty">Sin ventas aún</div>'}
      </div>`}function _(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">🔗 Links útiles</p>
        ${[["Registro público (para compartir con invitados)","/registro"],["Panel de caja","/caja"],["Control de puerta","/puerta"],["Logística / envíos","/logistica"]].map(([y,E])=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span>${y}</span>
            <a href="${E}" target="_blank" class="btn" style="padding:3px 8px;font-size:11px;color:#6B1C1C;border-color:#6B1C1C">Abrir</a>
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
Esta acción no se puede deshacer.`)||!confirm("Segunda confirmación: ¿borrar todos los datos de prueba?"))return;const y=document.getElementById("limpiar-msg");y.innerHTML='<span style="color:#888">Borrando...</span>';try{await qc(),y.innerHTML='<span style="color:#3B6D11">✓ Datos borrados correctamente</span>'}catch(E){y.innerHTML=`<span style="color:#A32D2D">Error: ${E.message}</span>`}},window._abrirWA=y=>{const E=t.find(N=>N.fireId===y);if(!E)return;i=y,document.getElementById("mw-tit").textContent=E.nombre+" "+E.apellido,document.getElementById("mw-cod").textContent=E.codigo||"",document.getElementById("mw-bdg").innerHTML=Ga(E.estado);const C=window.location.origin,P=`${C}/acceso?inv=${E.token}`;document.getElementById("mw-link").textContent=P;const k=E.estado==="pagado"?`Hola ${E.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${P}

_Personal e intransferible. Un solo uso en la entrada._`:`Hola ${E.nombre}! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`;document.getElementById("mw-msg").textContent=k;const D=document.getElementById("mw-btn-p");E.estado==="pendiente"?(D.textContent="✓ Marcar como pagado",D.disabled=!1,D.style.display="block"):D.style.display="none",Wa("mw-canvas",E.codigo||E.fireId,80),document.getElementById("modal-wa").style.display="flex"},window._pagarM=async()=>{const y=t.find(E=>E.fireId===i);!y||y.estado!=="pendiente"||await Ce(y.fireId,{estado:"pagado"})},window._copWA=()=>{var C;(C=navigator.clipboard)==null||C.writeText(document.getElementById("mw-msg").textContent).catch(()=>{});const y=document.querySelector("#modal-wa .btn-g"),E=y.innerHTML;y.innerHTML="✓ ¡Copiado!",setTimeout(()=>y.innerHTML=E,2e3)},window._cModal=()=>{document.getElementById("modal-wa").style.display="none",i=null},o()}const Ie=n=>Number(n).toLocaleString("es-AR");async function pm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function fm(n){Ot();let t=[],e=[],r="cobrar",i=null,o=[],a=null,l=!1;n.innerHTML=Pt({title:"💰 Caja central",sub:"Sucovi 2027 · Roma 656, Olivos",backHref:"/admin"})+`
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
    </div>`,On(y=>{t=y}),Wr(y=>{e=y,r!=="cobrar"&&u()}),window._cajaVista=(y,E)=>{r=y,i=null,document.querySelectorAll(".nav button").forEach(C=>C.classList.remove("on")),E.classList.add("on"),u()};function u(){r==="cobrar"&&h(),r==="pedidos"&&g(),r==="logistica"&&_()}function h(){const y=document.getElementById("caja-content");if(i){f();return}y.innerHTML=`
      <p style="font-size:13px;color:#666;margin-bottom:12px">
        Buscá al invitado por código o escaneá su QR personal
      </p>
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <input id="buscar-caja" placeholder="Código INV-0001 o nombre..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda"></div>`}window._buscarInv=(y=!1)=>{var k;const E=(((k=document.getElementById("buscar-caja"))==null?void 0:k.value)||"").toLowerCase().trim();if(!E){document.getElementById("resultados-busqueda").innerHTML="";return}const C=t.filter(D=>D.estado!=="invalidado"&&((D.codigo||"").toLowerCase().includes(E)||(D.nombre+" "+D.apellido).toLowerCase().includes(E)));if(y&&C.length===1){window._seleccionarInv(C[0].fireId);return}const P=document.getElementById("resultados-busqueda");if(P){if(!C.length){P.innerHTML='<div class="empty">Sin resultados</div>';return}P.innerHTML=C.map(D=>`
      <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
        align-items:center;gap:10px" onclick="window._seleccionarInv('${D.fireId}')">
        <div class="avatar">${D.nombre[0]}${D.apellido[0]}</div>
        <div style="flex:1">
          <div style="font-size:14px;font-weight:500">${D.nombre} ${D.apellido}</div>
          <div style="font-size:12px;color:#888">${D.codigo} · ${D.tel}</div>
        </div>
        <span class="badge ${D.estado==="pagado"||D.estado==="ingresado"?"b-pago":"b-pend"}">
          ${D.estado==="pagado"||D.estado==="ingresado"?"Bono pagado":"Pendiente"}
        </span>
        <span style="color:#1A3A5C;font-size:18px">›</span>
      </div>`).join("")}},window._seleccionarInv=async y=>{i=t.find(E=>E.fireId===y),i&&(o=await Dc(y),f())};async function f(){const y=document.getElementById("caja-content");if(!y)return;const E=i,C=o.filter(D=>{var N;return(N=D.items)==null?void 0:N.length}),P=C.reduce((D,N)=>D+(N.items||[]).reduce((M,nt)=>M+(nt.sub||0),0),0),k=e.filter(D=>D.invFireId===E.fireId);y.innerHTML=`
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
        ${k.length?`<div style="background:#D1FAE5;border-radius:6px;padding:6px 10px;
          font-size:12px;color:#065F46">
          ✅ Ya tiene ${k.length} pedido${k.length>1?"s":""} pagado${k.length>1?"s":""} esta noche
        </div>`:""}
      </div>

      ${C.length?`
        ${C.map(D=>`
          <div class="card" style="margin-bottom:10px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">
              🍷 ${D.standNombre} · Stand #${D.standId}
              ${D.retiro==="envio"?'<span class="badge b-envi" style="margin-left:6px">🚚 Envío</span>':""}
            </div>
            ${(D.items||[]).map(N=>`
              <div style="display:flex;justify-content:space-between;font-size:13px;
                color:#555;padding:4px 0;border-bottom:.5px solid #f5f0eb">
                <span>${N.desc}</span><strong>$${Ie(N.sub)}</strong>
              </div>`).join("")}
            <div style="display:flex;justify-content:space-between;font-size:13px;
              font-weight:500;margin-top:8px;padding-top:6px;border-top:.5px solid #D6E4F0">
              <span>Subtotal</span>
              <span>$${Ie((D.items||[]).reduce((N,M)=>N+(M.sub||0),0))}</span>
            </div>
          </div>`).join("")}
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL</span><span style="color:#1A3A5C">$${Ie(P)}</span>
          </div>
          <p style="font-size:12px;color:#888;margin-top:4px">
            ${C.length} stand${C.length>1?"s":""}
          </p>
        </div>
        <div id="cobro-msg" style="font-size:12px;text-align:center;margin-bottom:8px"></div>
        <button class="btn btn-g" style="width:100%;padding:14px;font-size:16px"
          onclick="window._cobrar()">
          ✓ Cobrar $${Ie(P)} y generar vouchers
        </button>`:`
        <div class="card" style="text-align:center;padding:24px">
          <p style="font-size:15px;color:#aaa">El carrito está vacío</p>
          <p style="font-size:13px;color:#aaa;margin-top:6px">
            ${E.nombre} todavía no agregó vinos desde los stands.
          </p>
        </div>`}
    `}window._volverCobrar=()=>{i=null,o=[],h()},window._cobrar=async()=>{const y=i,E=o.filter(k=>{var D;return(D=k.items)==null?void 0:D.length});if(!E.length)return;const C=document.querySelector("#caja-content .btn-g");C&&(C.disabled=!0,C.textContent="Procesando...");const P=document.getElementById("cobro-msg");try{await Nc(y,E),await kc(y.fireId),P.innerHTML=`<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${E.length} voucher${E.length>1?"s":""} generado${E.length>1?"s":""}.
      </span>`,C&&(C.style.display="none")}catch(k){P.innerHTML=`<span style="color:#C0392B">Error: ${k.message}</span>`,C&&(C.disabled=!1,C.textContent="Reintentar")}};function g(){const y=document.getElementById("caja-content"),E=e.filter(k=>k.retiro!=="envio"),C={pagado:"Pagado",listo:"Listo",entregado:"Entregado"},P={pagado:"b-pago",listo:"b-list",entregado:"b-entr"};if(!E.length){y.innerHTML='<div class="empty">Sin pedidos aún</div>';return}y.innerHTML=E.map(k=>{var D;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#1A3A5C;min-width:52px">
          #${(D=k.fireId)==null?void 0:D.slice(-4).toUpperCase()}
        </span>
        <div style="flex:1;min-width:80px">
          <div style="font-size:12px;font-weight:500">${k.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${k.standNombre}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:80px">
          ${(k.items||[]).map(N=>N.desc).join(" · ")}
        </span>
        <span style="font-size:14px;font-weight:500">$${Ie(k.total||0)}</span>
        <span class="badge ${P[k.estado]||"b-pago"}">${C[k.estado]||k.estado}</span>
      </div>`}).join("")}function _(){const y=document.getElementById("caja-content"),E=e.filter(C=>C.retiro==="envio");if(!E.length){y.innerHTML='<div class="empty">Sin envíos</div>';return}y.innerHTML=E.map(C=>{var P;return`
      <div class="card" style="margin-bottom:10px;border-left:3px solid #7C3AED">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:15px;font-weight:500;color:#1A3A5C">
            #${(P=C.fireId)==null?void 0:P.slice(-4).toUpperCase()}
          </span>
          <span class="badge b-envi">🚚 Envío</span>
        </div>
        <div style="font-size:13px;font-weight:500;margin-bottom:4px">${C.invNombre||""}</div>
        <div style="font-size:12px;color:#666;margin-bottom:6px">
          ${C.standNombre} · ${(C.items||[]).map(k=>k.desc).join(" · ")}
        </div>
        <div style="font-size:15px;font-weight:500">$${Ie(C.total||0)}</div>
      </div>`}).join("")}window._abrirScanner=async()=>{document.getElementById("scan-overlay").style.display="flex";const y=document.getElementById("scan-status");y&&(y.textContent="Cargando escáner...");try{await pm(),a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const E=document.getElementById("scan-video");E.srcObject=a,l=!0,y&&(y.textContent="Buscando QR...");const C=document.createElement("canvas"),P=C.getContext("2d",{willReadFrequently:!0}),k=()=>{if(l){if(E.readyState===E.HAVE_ENOUGH_DATA&&E.videoWidth>0){C.width=E.videoWidth,C.height=E.videoHeight,P.drawImage(E,0,0);const D=P.getImageData(0,0,C.width,C.height),N=window.jsQR(D.data,D.width,D.height,{inversionAttempts:"dontInvert"});if(N&&N.data){const M=N.data;window._cerrarScanner();const nt=M.match(/INV-\d+/),j=M.match(/inv=([A-Z0-9]+)/i);if(nt){const b=document.getElementById("buscar-caja");b&&(b.value=nt[0],window._buscarInv(!0))}else j&&Us(async()=>{const{buscarInvitadoPorToken:b}=await Promise.resolve().then(()=>Hc);return{buscarInvitadoPorToken:b}},void 0).then(({buscarInvitadoPorToken:b})=>b(j[1]).then(m=>{m&&window._seleccionarInv(m.fireId)}));return}}l&&requestAnimationFrame(k)}};E.addEventListener("loadeddata",()=>requestAnimationFrame(k))}catch{y&&(y.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}},window._cerrarScanner=()=>{l=!1,a&&(a.getTracks().forEach(E=>E.stop()),a=null);const y=document.getElementById("scan-overlay");y&&(y.style.display="none")},h()}const xi=n=>Number(n).toLocaleString("es-AR");function mm(n,t,e){if(Ot(),!e||e.estado==="invalidado"){n.innerHTML=Pt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
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
      </div>`;return}if(e.estado==="pendiente"){n.innerHTML=Pt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">
          Bono pendiente de pago
        </h2>
        <p style="font-size:14px;color:#666;">
          Hola ${e.nombre}, tu bono ($35.000) todavía no fue confirmado.<br>
          Pasá por la entrada para abonar.
        </p>
      </div>`;return}let r=[],i="stand";const o=`/acceso?inv=${e.token}`;n.innerHTML=Pt({title:"🍷 "+t.nombre,sub:t.region+" · Stand #"+t.id,actions:[`<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
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
    </button>`,Hs(t.id,u=>{r=u,a()}),qs(e.fireId,u=>{var E,C,P;const h=u.find(k=>Number(k.standId)===t.id),f=u.reduce((k,D)=>k+(D.items||[]).reduce((N,M)=>N+(M.sub||0),0),0),g=u.reduce((k,D)=>k+(D.items||[]).length,0),_=document.getElementById("cart-fab"),y=document.getElementById("cart-fab-txt");_&&g>0?(_.style.display="flex",y.textContent=`Ver carrito · $${xi(f)}`):_&&(_.style.display="none"),h&&((E=h.items)!=null&&E.length)?(i=h.retiro||"stand",(C=document.getElementById("rb-stand"))==null||C.classList.toggle("sel",i==="stand"),(P=document.getElementById("rb-envio"))==null||P.classList.toggle("sel",i==="envio"),document.getElementById("retiro-box").style.display="block",document.getElementById("stand-resumen").style.display="block",document.getElementById("stand-resumen-lines").innerHTML=h.items.map(k=>`
          <div style="display:flex;justify-content:space-between;font-size:12px;
            color:#555;margin-bottom:4px">
            <span>${k.desc}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-weight:500">$${xi(k.sub)}</span>
              <button onclick="window._quitarItem('${k.key}')"
                style="border:none;background:none;color:#A32D2D;cursor:pointer;
                font-size:13px;padding:0 2px">✕</button>
            </div>
          </div>`).join("")):(document.getElementById("stand-resumen").style.display="none",h===null&&(document.getElementById("retiro-box").style.display="none"))});function a(){const u=document.getElementById("menu-lista");if(u){if(!r.length){u.innerHTML='<div class="empty">La carta estará disponible pronto.</div>';return}u.innerHTML=r.map((h,f)=>`
      <div class="vino-card">
        <div style="font-size:14px;font-weight:500">${h.nombre}</div>
        <div style="font-size:11px;color:#888;margin-top:2px">
          ${h.varietal||""}${h.cosecha?" · "+h.cosecha:""}
        </div>
        ${h.descripcion?`<div style="font-size:12px;color:#666;margin-top:3px">${h.descripcion}</div>`:""}
        ${(h.unidades||[]).map((g,_)=>`
          <div class="qty-row">
            <span class="qty-label">
              ${g.u} — <span style="color:#6B1C1C;font-weight:600">$${xi(g.p)}</span>
            </span>
            <button class="qty-btn" onclick="window._agregar(${f},${_},-1)">−</button>
            <span id="qv${f}_${_}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" onclick="window._agregar(${f},${_},1)">+</button>
          </div>`).join("")}
      </div>`).join("")}}const l={};window._agregar=async(u,h,f)=>{const g=r[u];if(!g)return;const _=(g.unidades||[])[h];if(!_)return;const y=`${u}_${h}`;l[y]=Math.max(0,(l[y]||0)+f);const E=document.getElementById(`qv${u}_${h}`);if(E&&(E.textContent=l[y]),l[y]===0)await Rr(e.fireId,t.id,y);else{const C={key:y,desc:`${g.nombre} — ${_.u} ×${l[y]}`,sub:_.p*l[y],vinoNombre:g.nombre,unidad:_.u,precio:_.p,qty:l[y]};await Vc(e.fireId,t.id,t.nombre,C,i),document.getElementById("retiro-box").style.display="block";const P=document.getElementById("add-msg");P.textContent=`✓ ${g.nombre} (${_.u}) agregado al carrito`,setTimeout(()=>{P.textContent=""},2e3)}},window._sRet=async u=>{i=u,document.getElementById("rb-stand").classList.toggle("sel",u==="stand"),document.getElementById("rb-envio").classList.toggle("sel",u==="envio"),document.getElementById("envio-form").style.display=u==="envio"?"block":"none",await zs(e.fireId,t.id,u)},window._quitarItem=async u=>{await Rr(e.fireId,t.id,u);const[h,f]=u.split("_").map(Number);l[u]=0;const g=document.getElementById(`qv${h}_${f}`);g&&(g.textContent=0)}}window._scannerStop=null;async function gm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}window._initScanner=async function(n,t,e){const r=e?document.getElementById(e):null;r&&(r.textContent="Iniciando cámara...");try{await gm();const i=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),o=document.getElementById(n);if(!o){i.getTracks().forEach(f=>f.stop());return}o.srcObject=i;const a=document.createElement("canvas"),l=a.getContext("2d",{willReadFrequently:!0});let u=!0;window._scannerStop=()=>{u=!1,i.getTracks().forEach(f=>f.stop()),window._scannerStop=null},r&&(r.textContent="Buscando QR...");const h=()=>{var f;if(u){if(o.readyState===o.HAVE_ENOUGH_DATA&&o.videoWidth>0){a.width=o.videoWidth,a.height=o.videoHeight,l.drawImage(o,0,0);const g=l.getImageData(0,0,a.width,a.height),_=window.jsQR(g.data,g.width,g.height,{inversionAttempts:"dontInvert"});if(_&&_.data){(f=window._scannerStop)==null||f.call(window),t(_.data);return}}requestAnimationFrame(h)}};o.addEventListener("loadeddata",()=>requestAnimationFrame(h))}catch{r&&(r.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}};const Ti=n=>Number(n).toLocaleString("es-AR");function Wc(n,t){if(Ot(),!sessionStorage.getItem("stand-auth-"+t.id)){n.innerHTML=`
      ${Pt({title:"🍷 "+t.nombre,sub:"Panel del stand · Solo personal autorizado"})}
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
      </div>`,window._loginStand=()=>{document.getElementById("sp").value.trim()===t.pass?(sessionStorage.setItem("stand-auth-"+t.id,"1"),Wc(n,t)):document.getElementById("sp-err").textContent="Contraseña incorrecta"};return}let r=[];n.innerHTML=Pt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Pedidos para entregar",actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('stand-auth-${t.id}');location.reload()">Salir</button>`]})+`
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
    </div>`;let i="pendientes";window._setSF=(a,l)=>{i=a,["sf-pend","sf-all"].forEach(u=>{const h=document.getElementById(u);h.style.background="#fff",h.style.color="#333",h.style.borderColor="#ccc"}),a==="pendientes"?(l.style.background="#EAF3DE",l.style.color="#3B6D11",l.style.borderColor="#3B6D11"):(l.style.background="#6B1C1C",l.style.color="#fff",l.style.borderColor="#6B1C1C"),o()},Lc(t.id,a=>{r=a,o()});function o(){const a=document.getElementById("sp-pedidos");if(!a)return;let l=i==="pendientes"?r.filter(f=>f.estado==="pagado"):r;if(!l.length){a.innerHTML=`<div class="empty">${i==="pendientes"?"Sin pedidos listos para retirar 🎉":"Sin pedidos"}</div>`;return}const u={pagado:"Listo para retirar",entregado:"Entregado"},h={pagado:"b-pago",entregado:"b-entr"};a.innerHTML=l.map(f=>{var g;return`
      <div class="card" style="margin-bottom:10px;border-left:3px solid ${f.estado==="entregado"?"#aaa":"#3B6D11"}">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <div>
            <span style="font-size:18px;font-weight:500;color:#6B1C1C">
              #${(g=f.fireId)==null?void 0:g.slice(-4).toUpperCase()}
            </span>
            <span style="font-size:13px;font-weight:500;margin-left:8px">${f.invNombre||""}</span>
          </div>
          <span class="badge ${h[f.estado]||"b-pago"}">${u[f.estado]||f.estado}</span>
        </div>
        <div style="font-size:12px;color:#555;margin-bottom:8px;line-height:1.7">
          ${(f.items||[]).map(_=>`${_.desc} — <strong>$${Ti(_.sub)}</strong>`).join("<br>")}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;
          border-top:.5px solid #e0d5c8;padding-top:8px">
          <span style="font-size:16px;font-weight:500">$${Ti(f.total||0)}</span>
          ${f.estado==="pagado"?`<button class="btn btn-g" onclick="window._entregarPedido('${f.fireId}')">
                ✓ Marcar entregado
               </button>`:'<span style="font-size:12px;color:#aaa">✓ Entregado</span>'}
        </div>
      </div>`}).join("")}window._entregarPedido=async a=>{await Mc(a)},window._abrirScannerStand=async()=>{document.getElementById("scan-overlay-stand").style.display="flex",await window._initScanner("scan-video-stand",l=>{window._cerrarScannerStand();const u=r.find(h=>l.includes(h.fireId));u&&a(u)},"scan-status-stand");function a(l){const u=l.estado==="pagado",h=document.getElementById("voucher-modal");document.getElementById("voucher-modal-content").innerHTML=`
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:32px">${u?"✅":"⏳"}</div>
        <h3 style="font-size:16px;font-weight:500;color:${u?"#3B6D11":"#854F0B"};margin-top:6px">
          ${u?"PAGADO — Entregar":"PENDIENTE — No entregar"}
        </h3>
      </div>
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${l.invNombre||""}</div>
      <div style="font-size:13px;color:#666;margin-bottom:10px">
        ${(l.items||[]).map(f=>f.desc).join("<br>")}
      </div>
      <div style="font-size:16px;font-weight:500;margin-bottom:12px">$${Ti(l.total||0)}</div>
      ${u?`
        <button class="btn btn-g" style="width:100%;padding:10px;margin-bottom:8px"
          onclick="window._entregarPedido('${l.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>`:""}
      <button class="btn" style="width:100%"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`,h.style.display="flex"}window._cerrarScannerStand=()=>{var l;(l=window._scannerStop)==null||l.call(window),document.getElementById("scan-overlay-stand").style.display="none"}}}const ym=n=>Number(n).toLocaleString("es-AR");function Qc(n,t){if(Ot(),!sessionStorage.getItem("bodega-auth-"+t.id)){n.innerHTML=`
      ${Pt({title:"🍷 "+t.nombre,sub:"Carga de carta de vinos"})}
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
      </div>`,window._loginBodega=()=>{document.getElementById("bp").value.trim()===t.pass?(sessionStorage.setItem("bodega-auth-"+t.id,"1"),Qc(n,t)):document.getElementById("bp-err").textContent="Contraseña incorrecta"};return}let r=[],i=null;n.innerHTML=`
    ${Pt({title:"🍷 "+t.nombre,sub:"Carga de carta · Stand #"+t.id,actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('bodega-auth-${t.id}');location.reload()">Salir</button>`]})}
    <div style="max-width:600px;margin:0 auto;padding:14px">
      <div class="card" style="margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:12px"
          id="form-titulo">Agregar vino</p>
        ${[["vn","Nombre del vino *","text","Ej: Gran Malbec 2022"],["vv","Varietal / Blend","text","Ej: Malbec"],["vc","Cosecha","number","2022"],["vd","Descripción corta","text","Tinto con notas de..."],["vb","Precio botella ($)","number",""],["v6","Precio caja x6 ($)","number",""],["v12","Precio caja x12 ($)","number",""]].map(([l,u,h,f])=>`
          <div style="margin-bottom:8px">
            <label style="font-size:11px;color:#666">${u}</label>
            <input id="${l}" type="${h}" placeholder="${f}" style="margin-top:3px">
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
    </div>`,Hs(t.id,l=>{r=l;const u=document.getElementById("vl");if(u){if(!r.length){u.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}u.innerHTML=r.map(h=>`
      <div style="padding:10px 0;border-bottom:.5px solid #e0d5c8">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="flex:1">
            <div style="font-size:14px;font-weight:500">${h.nombre}</div>
            <div style="font-size:11px;color:#888;margin-top:2px">
              ${h.varietal||""}${h.cosecha?" · "+h.cosecha:""}
            </div>
            ${h.descripcion?`<div style="font-size:12px;color:#666;margin-top:2px">${h.descripcion}</div>`:""}
            <div style="margin-top:4px;display:flex;gap:8px;flex-wrap:wrap">
              ${(h.unidades||[]).map(f=>`<span style="font-size:12px;background:#f5f0eb;padding:2px 8px;
                  border-radius:6px;color:#6B1C1C">
                  ${f.u}: $${ym(f.p)}
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
      </div>`).join("")}});const o=["vn","vv","vc","vd","vb","v6","v12"],a=()=>{o.forEach(l=>{const u=document.getElementById(l);u&&(u.value="")})};window._guardarV=async()=>{const l=document.getElementById("vn").value.trim(),u=document.getElementById("vm");if(!l){u.innerHTML='<span style="color:#A32D2D">El nombre es requerido.</span>';return}const h=parseFloat(document.getElementById("vb").value),f=parseFloat(document.getElementById("v6").value),g=parseFloat(document.getElementById("v12").value),_=[];if(h&&_.push({u:"Botella",p:h}),f&&_.push({u:"Caja x6",p:f}),g&&_.push({u:"Caja x12",p:g}),!_.length){u.innerHTML='<span style="color:#A32D2D">Ingresá al menos un precio.</span>';return}const y={nombre:l,varietal:document.getElementById("vv").value.trim(),cosecha:document.getElementById("vc").value.trim(),descripcion:document.getElementById("vd").value.trim(),unidades:_};u.innerHTML='<span style="color:#888">Guardando...</span>';try{i?(await jc(t.id,i,y),i=null):await Fc(t.id,y),a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none",u.innerHTML='<span style="color:#3B6D11">✓ Guardado correctamente</span>',setTimeout(()=>{const E=document.getElementById("vm");E&&(E.innerHTML="")},3e3)}catch(E){u.innerHTML=`<span style="color:#A32D2D">Error: ${E.message}</span>`}},window._editarV=l=>{const u=r.find(_=>_.fireId===l);if(!u)return;i=l,document.getElementById("form-titulo").textContent=`Editando: ${u.nombre}`,document.getElementById("vn").value=u.nombre||"",document.getElementById("vv").value=u.varietal||"",document.getElementById("vc").value=u.cosecha||"",document.getElementById("vd").value=u.descripcion||"";const h=(u.unidades||[]).find(_=>_.u==="Botella"),f=(u.unidades||[]).find(_=>_.u==="Caja x6"),g=(u.unidades||[]).find(_=>_.u==="Caja x12");document.getElementById("vb").value=(h==null?void 0:h.p)||"",document.getElementById("v6").value=(f==null?void 0:f.p)||"",document.getElementById("v12").value=(g==null?void 0:g.p)||"",document.getElementById("btn-cancelar-edit").style.display="block",window.scrollTo({top:0,behavior:"smooth"})},window._cancelarEdit=()=>{i=null,a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none"},window._eliminarV=async l=>{const u=r.find(h=>h.fireId===l);confirm(`¿Eliminar "${u==null?void 0:u.nombre}"?`)&&await zc(t.id,l)}}window._scannerStop=null;async function vm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}window._initScanner=async function(n,t,e){const r=e?document.getElementById(e):null;r&&(r.textContent="Iniciando cámara...");try{await vm();const i=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),o=document.getElementById(n);if(!o){i.getTracks().forEach(f=>f.stop());return}o.srcObject=i;const a=document.createElement("canvas"),l=a.getContext("2d",{willReadFrequently:!0});let u=!0;window._scannerStop=()=>{u=!1,i.getTracks().forEach(f=>f.stop()),window._scannerStop=null},r&&(r.textContent="Buscando QR...");const h=()=>{var f;if(u){if(o.readyState===o.HAVE_ENOUGH_DATA&&o.videoWidth>0){a.width=o.videoWidth,a.height=o.videoHeight,l.drawImage(o,0,0);const g=l.getImageData(0,0,a.width,a.height),_=window.jsQR(g.data,g.width,g.height,{inversionAttempts:"dontInvert"});if(_&&_.data){(f=window._scannerStop)==null||f.call(window),t(_.data);return}}requestAnimationFrame(h)}};o.addEventListener("loadeddata",()=>requestAnimationFrame(h))}catch{r&&(r.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}};function Am(n){Ot();let t=[],e=[];n.innerHTML=`
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
    </div>`,On(i=>{t=i}),window._vPuerta=async()=>{const i=document.getElementById("scan-cod").value.trim().toUpperCase(),o=document.getElementById("scan-res");if(!i)return;const a=t.find(u=>u.codigo===i);if(!a){o.innerHTML=`<div class="result-err">
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
      </div>`;return}await Ce(a.fireId,{estado:"ingresado"});const l=new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});e.unshift({nombre:a.nombre+" "+a.apellido,codigo:i,hora:l}),o.innerHTML=`<div class="result-ok">
      <p style="font-size:28px">✅</p>
      <p style="font-size:18px;font-weight:500;color:#3B6D11;margin-top:6px">¡Bienvenido/a!</p>
      <p style="font-size:15px;color:#27500A;margin-top:2px">${a.nombre} ${a.apellido}</p>
      <p style="font-size:11px;color:#3B6D11;margin-top:6px;opacity:.8">
        QR marcado — no puede reutilizarse
      </p>
    </div>`,document.getElementById("scan-cod").value="",r()},window._cobrarPuerta=async(i,o)=>{await Ce(i,{estado:"pagado"}),document.getElementById("scan-cod").value=o,window._vPuerta()};function r(){const i=document.getElementById("scan-ult");if(i){if(!e.length){i.innerHTML='<p style="font-size:12px;color:#aaa">Sin ingresos aún</p>';return}i.innerHTML=e.slice(0,6).map(o=>`<div style="display:flex;justify-content:space-between;padding:5px 0;
        border-bottom:.5px solid #e0d5c8;font-size:12px">
        <span>✓ ${o.nombre}</span>
        <span style="color:#aaa">${o.codigo} · ${o.hora}</span>
      </div>`).join("")}}window._abrirScannerPuerta=async()=>{document.getElementById("scan-overlay-puerta").style.display="flex";let i=!0;try{await window._initScanner("scan-video-puerta",async o=>{i=!1,window._cerrarScannerPuerta();const a=o.match(/INV-\d+/),l=o.match(/inv=([A-Z0-9]+)/i);if(a)document.getElementById("scan-cod").value=a[0],window._vPuerta();else if(l){const u=await buscarInvitadoPorToken(l[1]);u&&(document.getElementById("scan-cod").value=u.codigo,window._vPuerta())}},"scan-status-puerta")}catch{document.getElementById("scan-status-puerta").textContent="No se pudo acceder a la camara."}},window._cerrarScannerPuerta=()=>{window._scannerStop&&window._scannerStop(),document.getElementById("scan-overlay-puerta").style.display="none"}}const _m=n=>Number(n).toLocaleString("es-AR"),Em={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},Im={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"},bm={pendiente:"Cobrar ✓",pagado:"Listo ✓",listo:"Entregar ✓"},wm={pendiente:"btn-g",pagado:"btn-b",listo:"btn-v"},xm={pendiente:"pagado",pagado:"listo",listo:"entregado"};function Tm(n){Ot();let t=[];n.innerHTML=`
    ${Pt({title:"🚚 Logística — Envíos",sub:"Pedidos para enviar a domicilio",backHref:"/admin"})}
    <div class="wrap" id="log-lista"></div>`,Wr(r=>{t=r,e()}),window._avzLog=async(r,i)=>{await Oc(r,i)};function e(){const r=document.getElementById("log-lista");if(!r)return;const i=t.filter(l=>l.retiro==="envio");if(!i.length){r.innerHTML='<div class="empty">🚚<br><br>Sin pedidos de envío</div>';return}const o=i.filter(l=>l.estado!=="entregado"),a=i.filter(l=>l.estado==="entregado");r.innerHTML=(o.length?`<p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">Pendientes (${o.length})</p>`:"")+o.map(l=>{var u;return`
        <div class="card" style="margin-bottom:10px;border-left:3px solid #5A1E99">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span style="font-size:15px;font-weight:500;color:#6B1C1C">#${(u=l.fireId)==null?void 0:u.slice(-4).toUpperCase()}</span>
            <span class="badge ${Im[l.estado]}">${Em[l.estado]}</span>
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
                  onclick="window._avzLog('${l.fireId}','${l.estado}')">${bm[l.estado]}</button>`:""}
          </div>
        </div>`}).join("")+(a.length?`<div class="sep"></div><p style="font-size:12px;color:#aaa;margin:8px 0">Completados (${a.length})</p>`:"")+a.map(l=>{var u;return`
        <div style="display:flex;justify-content:space-between;padding:6px 0;
          border-bottom:.5px solid #e0d5c8;font-size:12px">
          <span>#${(u=l.fireId)==null?void 0:u.slice(-4).toUpperCase()} — ${l.invNombre}</span>
          <span class="badge b-entr">Entregado</span>
        </div>`}).join("")}}async function Rm(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Cm(n,t,e){await Rm();const r=document.getElementById(n);if(r)try{const i=qrcode(0,"M");i.addData(String(t)),i.make();const o=i.getModuleCount(),a=e/o;r.width=e,r.height=e;const l=r.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let u=0;u<o;u++)for(let h=0;h<o;h++)i.isDark(u,h)&&l.fillRect(h*a,u*a,a,a)}catch(i){console.error("QR error:",i)}}const Pm=n=>Number(n).toLocaleString("es-AR");async function Sm(n,t){if(Ot(),n.innerHTML=Ji(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <p style="color:#aaa;font-size:14px">Cargando...</p>
    </div>`,!t){Ka(n,"Link inválido","Este link no contiene información de acreditación.");return}const e=await Tr(t);if(!e){Ka(n,"No encontrado","Este link no corresponde a ningún invitado registrado.");return}n.innerHTML=Ji(e)+`
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
      <p style="font-size:12px;color:#aaa;margin-top:8px">José Pannunzio +54 9 11 5400-1313</p>`;return}const i=he.map(l=>`
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
    </div>`,setTimeout(()=>Cm("qr-acc",e.codigo,160),50);let o=null,a=!1;window._abrirScannerAcceso=async()=>{const l=document.getElementById("scan-overlay-acc");l&&(l.style.display="flex");const u=document.getElementById("scan-status-acc");try{typeof loadJsQR=="function"?await loadJsQR():await new Promise((y,E)=>{if(window.jsQR){y();return}const C=document.createElement("script");C.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",C.onload=y,C.onerror=E,document.head.appendChild(C)}),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const h=document.getElementById("scan-video-acc");h.srcObject=o,a=!0,u&&(u.textContent="Buscando QR del stand...");const f=document.createElement("canvas"),g=f.getContext("2d",{willReadFrequently:!0}),_=()=>{if(a){if(h.readyState===h.HAVE_ENOUGH_DATA&&h.videoWidth>0){f.width=h.videoWidth,f.height=h.videoHeight,g.drawImage(h,0,0);const y=g.getImageData(0,0,f.width,f.height),E=window.jsQR(y.data,y.width,y.height,{inversionAttempts:"dontInvert"});if(E&&E.data){const C=E.data;window._cerrarScannerAcceso();const P=C.match(/\/stand\/(\d+)/);P&&(window.location.href="/stand/"+P[1]+"?inv=${token}");return}}a&&requestAnimationFrame(_)}};h.addEventListener("loadeddata",()=>requestAnimationFrame(_))}catch{u&&(u.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerAcceso=()=>{a=!1,o&&(o.getTracks().forEach(u=>u.stop()),o=null);const l=document.getElementById("scan-overlay-acc");l&&(l.style.display="none")},Bc(e.fireId,l=>{const u=document.getElementById("vouchers-acc");if(u){if(!l.length){u.innerHTML="";return}u.innerHTML=`
      <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px;text-align:left">
        Mis vouchers de retiro
      </p>
      ${l.map(h=>{const f={pagado:"Listo para retirar",entregado:"Entregado"},g=h.estado==="pagado";return`
          <div style="background:${g?"#EAF3DE":"#f5f5f5"};border:.5px solid ${g?"#3B6D11":"#ddd"};
            border-radius:10px;padding:12px 14px;margin-bottom:8px;text-align:left">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px">
              <span style="font-size:13px;font-weight:500;color:#6B1C1C">${h.standNombre}</span>
              <span class="badge ${g?"b-pago":"b-entr"}">${f[h.estado]||h.estado}</span>
            </div>
            <div style="font-size:12px;color:#555;margin-bottom:6px">
              ${(h.items||[]).map(_=>_.desc).join("<br>")}
            </div>
            <div style="font-size:14px;font-weight:500">$${Pm(h.total||0)}</div>
            ${g?`<p style="font-size:11px;color:#3B6D11;margin-top:6px">
              Mostrá este voucher en el stand para retirar tus vinos.
            </p>`:""}
          </div>`}).join("")}`}})}function Ka(n,t,e){n.innerHTML=Ji(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
    <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${t}</h2>
    <p style="font-size:14px;color:#666">${e}</p>
    <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>`}const Vm=()=>Math.random().toString(36).slice(2,10).toUpperCase();function Dm(n){Ot();let t=0;const e=On(r=>{t=r.length,e()});n.innerHTML=`
    ${Pt({title:"🍷 Sucovi 2027",sub:"Registro de invitados · Roma 656, Olivos · 20 jun 2026"})}
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
    </div>`,window._autoRegistrar=async()=>{const r=document.getElementById("rn").value.trim(),i=document.getElementById("ra").value.trim(),o=document.getElementById("rt").value.trim(),a=document.getElementById("re").value.trim(),l=document.getElementById("rf").value.trim(),u=document.getElementById("rc").value.trim(),h=document.getElementById("reg-msg");if(!r||!i||!o){h.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}h.innerHTML='<span style="color:#888">Registrando...</span>';try{const f=await Us(()=>Promise.resolve().then(()=>Hc),void 0).then(_=>_.escucharInvitados),g="INV-"+String(t+1).padStart(4,"0");await xr({nombre:r,apellido:i,tel:o,...a&&{email:a},...l&&{familia:l},...u&&{comentarios:u},estado:"pendiente",codigo:g,token:Vm()}),document.getElementById("reg-form").innerHTML=`
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
        </div>`}catch(f){h.innerHTML=`<span style="color:#A32D2D">Error: ${f.message}</span>`}}}const Ri=n=>Number(n).toLocaleString("es-AR");function km(n,t){if(Ot(),!t||t.estado==="invalidado"){n.innerHTML=`
      <div class="hdr"><div><h1>🛒 Carrito</h1></div></div>
      <div class="gold"></div>
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <p style="font-size:14px;color:#666">Necesitás tu QR de acreditación para ver el carrito.</p>
      </div>`;return}let e=[];n.innerHTML=`
    ${Pt({title:"🛒 Mi carrito",sub:t.nombre+" "+t.apellido+" · "+t.codigo,backHref:"/acceso?inv="+t.token,backLabel:"← Mi QR"})}
    <div style="max-width:480px;margin:0 auto;padding:14px" id="carrito-body">
      <div class="empty">Cargando carrito...</div>
    </div>`,qs(t.fireId,i=>{e=i,r()});function r(){const i=document.getElementById("carrito-body");if(!i)return;if(!e.length||!e.some(a=>{var l;return(l=a.items)==null?void 0:l.length})){i.innerHTML=`
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
                <span style="font-size:13px;font-weight:500">$${Ri(l.sub)}</span>
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
            <span>$${Ri((a.items||[]).reduce((l,u)=>l+(u.sub||0),0))}</span>
          </div>
        </div>`).join("")}

      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>Total</span>
          <span style="color:#6B1C1C">$${Ri(o)}</span>
        </div>
        <p style="font-size:12px;color:#888;margin-top:6px">
          Llevá este carrito a caja para pagar. El cajero escanea tu código y ve todo.
        </p>
      </div>

      <div style="background:#E6F1FB;border:.5px solid #185FA5;border-radius:8px;
        padding:10px 14px;font-size:12px;color:#185FA5;margin-bottom:14px;text-align:center">
        📍 Tu código de caja: <strong style="font-size:16px;letter-spacing:.1em">${t.codigo}</strong>
      </div>

      <div id="carrito-msg" style="font-size:12px;text-align:center;min-height:16px;margin-bottom:8px"></div>`}window._quitarCarrito=async(i,o)=>{const a=e.find(l=>l.standDocId===i);a&&await Rr(t.fireId,Number(a.standId),o)},window._cambiarRetiro=async(i,o,a)=>{await zs(t.fireId,Number(o),a)}}async function $c(){const t=window.location.pathname.replace("/Sucovi2027","")||"/",e=new URLSearchParams(window.location.search),r=document.getElementById("app"),i=t.match(/^\/stand\/(\d+)$/);if(i){const l=parseInt(i[1]),u=he.find(g=>g.id===l);if(!u){r.innerHTML=Ci("Stand no encontrado");return}const h=e.get("inv"),f=h?await Tr(h):null;return mm(r,u,f)}const o=t.match(/^\/panel\/(\d+)$/);if(o){const l=he.find(u=>u.id===parseInt(o[1]));if(!l){r.innerHTML=Ci("Panel no encontrado");return}return Wc(r,l)}const a=t.match(/^\/bodega\/(\d+)\/vinos$/);if(a){const l=he.find(u=>u.id===parseInt(a[1]));if(!l){r.innerHTML=Ci("Bodega no encontrada");return}return Qc(r,l)}if(t==="/carrito"){const l=e.get("inv"),u=l?await Tr(l):null;return km(r,u)}return t==="/acceso"?Sm(r,e.get("inv")):t==="/registro"?Dm(r):t==="/caja"?fm(r):t==="/puerta"?Am(r):t==="/logistica"?Tm(r):hm(r)}function Ci(n){return`<div style="padding:60px;text-align:center;color:#aaa;font-size:14px">${n}</div>`}$c();window.addEventListener("popstate",$c);(function(){var n=window.location.search.match(/[?&]p=([^&]+)/);if(n){var t="/Sucovi2027",e=decodeURIComponent(n[1].replace(/~and~/g,"&"));window.history.replaceState(null,null,t+"/"+e)}})();
