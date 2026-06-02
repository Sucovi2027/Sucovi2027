(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();var Zo={};/**
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
 */const nl=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},Pu=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const r=n[e++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[e++];t[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[e++],a=n[e++],l=n[e++],u=((r&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{const o=n[e++],a=n[e++];t[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return t.join("")},il={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const o=n[r],a=r+1<n.length,l=a?n[r+1]:0,u=r+2<n.length,h=u?n[r+2]:0,p=o>>2,g=(o&3)<<4|l>>4;let _=(l&15)<<2|h>>6,C=h&63;u||(C=64,a||(_=64)),i.push(e[p],e[g],e[_],e[C])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(nl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Pu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const o=e[n.charAt(r++)],l=r<n.length?e[n.charAt(r)]:0;++r;const h=r<n.length?e[n.charAt(r)]:64;++r;const g=r<n.length?e[n.charAt(r)]:64;if(++r,o==null||l==null||h==null||g==null)throw new Su;const _=o<<2|l>>4;if(i.push(_),h!==64){const C=l<<4&240|h>>2;if(i.push(C),g!==64){const N=h<<6&192|g;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Su extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vu=function(n){const t=nl(n);return il.encodeByteArray(t,!0)},Ei=function(n){return Vu(n).replace(/\./g,"")},Du=function(n){try{return il.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Nu=()=>ku().__FIREBASE_DEFAULTS__,Bu=()=>{if(typeof process>"u"||typeof Zo>"u")return;const n=Zo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Lu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Du(n[1]);return t&&JSON.parse(t)},rs=()=>{try{return Nu()||Bu()||Lu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mu=n=>{var t,e;return(e=(t=rs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ou=n=>{const t=Mu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},rl=()=>{var n;return(n=rs())===null||n===void 0?void 0:n.config};/**
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
 */class Fu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function ju(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ei(JSON.stringify(e)),Ei(JSON.stringify(a)),""].join(".")}/**
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
 */function zu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qu(){var n;const t=(n=rs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hu(){return!qu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uu(){try{return typeof indexedDB=="object"}catch{return!1}}function Wu(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var o;t(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Qu="FirebaseError";class We extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Qu,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sl.prototype.create)}}class sl{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},r=`${this.service}/${t}`,o=this.errors[t],a=o?$u(o,i):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new We(r,l,i)}}function $u(n,t){return n.replace(Gu,(e,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const Gu=/\{\$([^}]+)}/g;function Nr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const r of e){if(!i.includes(r))return!1;const o=n[r],a=t[r];if(Yo(o)&&Yo(a)){if(!Nr(o,a))return!1}else if(o!==a)return!1}for(const r of i)if(!e.includes(r))return!1;return!0}function Yo(n){return n!==null&&typeof n=="object"}/**
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
 */function Nt(n){return n&&n._delegate?n._delegate:n}class In{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Ku{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Fu;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ju(t))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(t=me){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=me){return this.instances.has(t)}getOptions(t=me){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);i===l&&a.resolve(r)}return r}onInit(t,e){var i;const r=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&t(a,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const r of i)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Xu(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=me){return this.component?this.component.multipleInstances?t:me:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xu(n){return n===me?void 0:n}function Ju(n){return n.instantiationMode==="EAGER"}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Yu={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},td=$.INFO,ed={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},nd=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),r=ed[t];if(r)console[r](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ol{constructor(t){this.name=t,this._logLevel=td,this._logHandler=nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const id=(n,t)=>t.some(e=>n instanceof e);let ta,ea;function rd(){return ta||(ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sd(){return ea||(ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const al=new WeakMap,Br=new WeakMap,ll=new WeakMap,br=new WeakMap,ss=new WeakMap;function od(n){const t=new Promise((e,i)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ie(n.result)),r()},a=()=>{i(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&al.set(e,n)}).catch(()=>{}),ss.set(t,n),t}function ad(n){if(Br.has(n))return;const t=new Promise((e,i)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),r()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Br.set(n,t)}let Lr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Br.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ll.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ie(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ld(n){Lr=n(Lr)}function cd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Ir(this),t,...e);return ll.set(i,t.sort?t.sort():[t]),ie(i)}:sd().includes(n)?function(...t){return n.apply(Ir(this),t),ie(al.get(this))}:function(...t){return ie(n.apply(Ir(this),t))}}function ud(n){return typeof n=="function"?cd(n):(n instanceof IDBTransaction&&ad(n),id(n,rd())?new Proxy(n,Lr):n)}function ie(n){if(n instanceof IDBRequest)return od(n);if(br.has(n))return br.get(n);const t=ud(n);return t!==n&&(br.set(n,t),ss.set(t,n)),t}const Ir=n=>ss.get(n);function dd(n,t,{blocked:e,upgrade:i,blocking:r,terminated:o}={}){const a=indexedDB.open(n,t),l=ie(a);return i&&a.addEventListener("upgradeneeded",u=>{i(ie(a.result),u.oldVersion,u.newVersion,ie(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),r&&u.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const hd=["get","getKey","getAll","getAllKeys","count"],pd=["put","add","delete","clear"],wr=new Map;function na(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(wr.get(t))return wr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,r=pd.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(r||hd.includes(e)))return;const o=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[e](...l),r&&u.done]))[0]};return wr.set(t,o),o}ld(n=>({...n,get:(t,e,i)=>na(t,e)||n.get(t,e,i),has:(t,e)=>!!na(t,e)||n.has(t,e)}));/**
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
 */class fd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(md(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function md(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Mr="@firebase/app",ia="0.10.13";/**
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
 */const Gt=new ol("@firebase/app"),gd="@firebase/app-compat",yd="@firebase/analytics-compat",vd="@firebase/analytics",Ad="@firebase/app-check-compat",_d="@firebase/app-check",Ed="@firebase/auth",bd="@firebase/auth-compat",Id="@firebase/database",wd="@firebase/data-connect",xd="@firebase/database-compat",Td="@firebase/functions",Rd="@firebase/functions-compat",Cd="@firebase/installations",Pd="@firebase/installations-compat",Sd="@firebase/messaging",Vd="@firebase/messaging-compat",Dd="@firebase/performance",kd="@firebase/performance-compat",Nd="@firebase/remote-config",Bd="@firebase/remote-config-compat",Ld="@firebase/storage",Md="@firebase/storage-compat",Od="@firebase/firestore",Fd="@firebase/vertexai-preview",jd="@firebase/firestore-compat",zd="firebase",qd="10.14.1";/**
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
 */const Or="[DEFAULT]",Hd={[Mr]:"fire-core",[gd]:"fire-core-compat",[vd]:"fire-analytics",[yd]:"fire-analytics-compat",[_d]:"fire-app-check",[Ad]:"fire-app-check-compat",[Ed]:"fire-auth",[bd]:"fire-auth-compat",[Id]:"fire-rtdb",[wd]:"fire-data-connect",[xd]:"fire-rtdb-compat",[Td]:"fire-fn",[Rd]:"fire-fn-compat",[Cd]:"fire-iid",[Pd]:"fire-iid-compat",[Sd]:"fire-fcm",[Vd]:"fire-fcm-compat",[Dd]:"fire-perf",[kd]:"fire-perf-compat",[Nd]:"fire-rc",[Bd]:"fire-rc-compat",[Ld]:"fire-gcs",[Md]:"fire-gcs-compat",[Od]:"fire-fst",[jd]:"fire-fst-compat",[Fd]:"fire-vertex","fire-js":"fire-js",[zd]:"fire-js-all"};/**
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
 */const bi=new Map,Ud=new Map,Fr=new Map;function ra(n,t){try{n.container.addComponent(t)}catch(e){Gt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ii(n){const t=n.name;if(Fr.has(t))return Gt.debug(`There were multiple attempts to register component ${t}.`),!1;Fr.set(t,n);for(const e of bi.values())ra(e,n);for(const e of Ud.values())ra(e,n);return!0}function Wd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Qd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},re=new sl("app","Firebase",Qd);/**
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
 */class $d{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw re.create("app-deleted",{appName:this._name})}}/**
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
 */const Gd=qd;function cl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Or,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw re.create("bad-app-name",{appName:String(r)});if(e||(e=rl()),!e)throw re.create("no-options");const o=bi.get(r);if(o){if(Nr(e,o.options)&&Nr(i,o.config))return o;throw re.create("duplicate-app",{appName:r})}const a=new Zu(r);for(const u of Fr.values())a.addComponent(u);const l=new $d(e,i,a);return bi.set(r,l),l}function Kd(n=Or){const t=bi.get(n);if(!t&&n===Or&&rl())return cl();if(!t)throw re.create("no-app",{appName:n});return t}function Le(n,t,e){var i;let r=(i=Hd[n])!==null&&i!==void 0?i:n;e&&(r+=`-${e}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${r}" with version "${t}":`];o&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gt.warn(l.join(" "));return}Ii(new In(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Xd="firebase-heartbeat-database",Jd=1,wn="firebase-heartbeat-store";let xr=null;function ul(){return xr||(xr=dd(Xd,Jd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(wn)}catch(e){console.warn(e)}}}}).catch(n=>{throw re.create("idb-open",{originalErrorMessage:n.message})})),xr}async function Zd(n){try{const e=(await ul()).transaction(wn),i=await e.objectStore(wn).get(dl(n));return await e.done,i}catch(t){if(t instanceof We)Gt.warn(t.message);else{const e=re.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gt.warn(e.message)}}}async function sa(n,t){try{const i=(await ul()).transaction(wn,"readwrite");await i.objectStore(wn).put(t,dl(n)),await i.done}catch(e){if(e instanceof We)Gt.warn(e.message);else{const i=re.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(i.message)}}}function dl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yd=1024,th=30*24*60*60*1e3;class eh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ih(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=oa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=th}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Gt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oa(),{heartbeatsToSend:i,unsentEntries:r}=nh(this._heartbeatsCache.heartbeats),o=Ei(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Gt.warn(e),""}}}function oa(){return new Date().toISOString().substring(0,10)}function nh(n,t=Yd){const e=[];let i=n.slice();for(const r of n){const o=e.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),aa(e)>t){o.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),aa(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class ih{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uu()?Wu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Zd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return sa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return sa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function aa(n){return Ei(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function rh(n){Ii(new In("platform-logger",t=>new fd(t),"PRIVATE")),Ii(new In("heartbeat",t=>new eh(t),"PRIVATE")),Le(Mr,ia,n),Le(Mr,ia,"esm2017"),Le("fire-js","")}rh("");var sh="firebase",oh="10.14.1";/**
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
 */Le(sh,oh,"app");var la=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ve,hl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function A(){}A.prototype=m.prototype,E.D=m.prototype,E.prototype=new A,E.prototype.constructor=E,E.C=function(b,I,x){for(var v=Array(arguments.length-2),St=2;St<arguments.length;St++)v[St-2]=arguments[St];return m.prototype[I].apply(b,v)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,m,A){A||(A=0);var b=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)b[I]=m.charCodeAt(A++)|m.charCodeAt(A++)<<8|m.charCodeAt(A++)<<16|m.charCodeAt(A++)<<24;else for(I=0;16>I;++I)b[I]=m[A++]|m[A++]<<8|m[A++]<<16|m[A++]<<24;m=E.g[0],A=E.g[1],I=E.g[2];var x=E.g[3],v=m+(x^A&(I^x))+b[0]+3614090360&4294967295;m=A+(v<<7&4294967295|v>>>25),v=x+(I^m&(A^I))+b[1]+3905402710&4294967295,x=m+(v<<12&4294967295|v>>>20),v=I+(A^x&(m^A))+b[2]+606105819&4294967295,I=x+(v<<17&4294967295|v>>>15),v=A+(m^I&(x^m))+b[3]+3250441966&4294967295,A=I+(v<<22&4294967295|v>>>10),v=m+(x^A&(I^x))+b[4]+4118548399&4294967295,m=A+(v<<7&4294967295|v>>>25),v=x+(I^m&(A^I))+b[5]+1200080426&4294967295,x=m+(v<<12&4294967295|v>>>20),v=I+(A^x&(m^A))+b[6]+2821735955&4294967295,I=x+(v<<17&4294967295|v>>>15),v=A+(m^I&(x^m))+b[7]+4249261313&4294967295,A=I+(v<<22&4294967295|v>>>10),v=m+(x^A&(I^x))+b[8]+1770035416&4294967295,m=A+(v<<7&4294967295|v>>>25),v=x+(I^m&(A^I))+b[9]+2336552879&4294967295,x=m+(v<<12&4294967295|v>>>20),v=I+(A^x&(m^A))+b[10]+4294925233&4294967295,I=x+(v<<17&4294967295|v>>>15),v=A+(m^I&(x^m))+b[11]+2304563134&4294967295,A=I+(v<<22&4294967295|v>>>10),v=m+(x^A&(I^x))+b[12]+1804603682&4294967295,m=A+(v<<7&4294967295|v>>>25),v=x+(I^m&(A^I))+b[13]+4254626195&4294967295,x=m+(v<<12&4294967295|v>>>20),v=I+(A^x&(m^A))+b[14]+2792965006&4294967295,I=x+(v<<17&4294967295|v>>>15),v=A+(m^I&(x^m))+b[15]+1236535329&4294967295,A=I+(v<<22&4294967295|v>>>10),v=m+(I^x&(A^I))+b[1]+4129170786&4294967295,m=A+(v<<5&4294967295|v>>>27),v=x+(A^I&(m^A))+b[6]+3225465664&4294967295,x=m+(v<<9&4294967295|v>>>23),v=I+(m^A&(x^m))+b[11]+643717713&4294967295,I=x+(v<<14&4294967295|v>>>18),v=A+(x^m&(I^x))+b[0]+3921069994&4294967295,A=I+(v<<20&4294967295|v>>>12),v=m+(I^x&(A^I))+b[5]+3593408605&4294967295,m=A+(v<<5&4294967295|v>>>27),v=x+(A^I&(m^A))+b[10]+38016083&4294967295,x=m+(v<<9&4294967295|v>>>23),v=I+(m^A&(x^m))+b[15]+3634488961&4294967295,I=x+(v<<14&4294967295|v>>>18),v=A+(x^m&(I^x))+b[4]+3889429448&4294967295,A=I+(v<<20&4294967295|v>>>12),v=m+(I^x&(A^I))+b[9]+568446438&4294967295,m=A+(v<<5&4294967295|v>>>27),v=x+(A^I&(m^A))+b[14]+3275163606&4294967295,x=m+(v<<9&4294967295|v>>>23),v=I+(m^A&(x^m))+b[3]+4107603335&4294967295,I=x+(v<<14&4294967295|v>>>18),v=A+(x^m&(I^x))+b[8]+1163531501&4294967295,A=I+(v<<20&4294967295|v>>>12),v=m+(I^x&(A^I))+b[13]+2850285829&4294967295,m=A+(v<<5&4294967295|v>>>27),v=x+(A^I&(m^A))+b[2]+4243563512&4294967295,x=m+(v<<9&4294967295|v>>>23),v=I+(m^A&(x^m))+b[7]+1735328473&4294967295,I=x+(v<<14&4294967295|v>>>18),v=A+(x^m&(I^x))+b[12]+2368359562&4294967295,A=I+(v<<20&4294967295|v>>>12),v=m+(A^I^x)+b[5]+4294588738&4294967295,m=A+(v<<4&4294967295|v>>>28),v=x+(m^A^I)+b[8]+2272392833&4294967295,x=m+(v<<11&4294967295|v>>>21),v=I+(x^m^A)+b[11]+1839030562&4294967295,I=x+(v<<16&4294967295|v>>>16),v=A+(I^x^m)+b[14]+4259657740&4294967295,A=I+(v<<23&4294967295|v>>>9),v=m+(A^I^x)+b[1]+2763975236&4294967295,m=A+(v<<4&4294967295|v>>>28),v=x+(m^A^I)+b[4]+1272893353&4294967295,x=m+(v<<11&4294967295|v>>>21),v=I+(x^m^A)+b[7]+4139469664&4294967295,I=x+(v<<16&4294967295|v>>>16),v=A+(I^x^m)+b[10]+3200236656&4294967295,A=I+(v<<23&4294967295|v>>>9),v=m+(A^I^x)+b[13]+681279174&4294967295,m=A+(v<<4&4294967295|v>>>28),v=x+(m^A^I)+b[0]+3936430074&4294967295,x=m+(v<<11&4294967295|v>>>21),v=I+(x^m^A)+b[3]+3572445317&4294967295,I=x+(v<<16&4294967295|v>>>16),v=A+(I^x^m)+b[6]+76029189&4294967295,A=I+(v<<23&4294967295|v>>>9),v=m+(A^I^x)+b[9]+3654602809&4294967295,m=A+(v<<4&4294967295|v>>>28),v=x+(m^A^I)+b[12]+3873151461&4294967295,x=m+(v<<11&4294967295|v>>>21),v=I+(x^m^A)+b[15]+530742520&4294967295,I=x+(v<<16&4294967295|v>>>16),v=A+(I^x^m)+b[2]+3299628645&4294967295,A=I+(v<<23&4294967295|v>>>9),v=m+(I^(A|~x))+b[0]+4096336452&4294967295,m=A+(v<<6&4294967295|v>>>26),v=x+(A^(m|~I))+b[7]+1126891415&4294967295,x=m+(v<<10&4294967295|v>>>22),v=I+(m^(x|~A))+b[14]+2878612391&4294967295,I=x+(v<<15&4294967295|v>>>17),v=A+(x^(I|~m))+b[5]+4237533241&4294967295,A=I+(v<<21&4294967295|v>>>11),v=m+(I^(A|~x))+b[12]+1700485571&4294967295,m=A+(v<<6&4294967295|v>>>26),v=x+(A^(m|~I))+b[3]+2399980690&4294967295,x=m+(v<<10&4294967295|v>>>22),v=I+(m^(x|~A))+b[10]+4293915773&4294967295,I=x+(v<<15&4294967295|v>>>17),v=A+(x^(I|~m))+b[1]+2240044497&4294967295,A=I+(v<<21&4294967295|v>>>11),v=m+(I^(A|~x))+b[8]+1873313359&4294967295,m=A+(v<<6&4294967295|v>>>26),v=x+(A^(m|~I))+b[15]+4264355552&4294967295,x=m+(v<<10&4294967295|v>>>22),v=I+(m^(x|~A))+b[6]+2734768916&4294967295,I=x+(v<<15&4294967295|v>>>17),v=A+(x^(I|~m))+b[13]+1309151649&4294967295,A=I+(v<<21&4294967295|v>>>11),v=m+(I^(A|~x))+b[4]+4149444226&4294967295,m=A+(v<<6&4294967295|v>>>26),v=x+(A^(m|~I))+b[11]+3174756917&4294967295,x=m+(v<<10&4294967295|v>>>22),v=I+(m^(x|~A))+b[2]+718787259&4294967295,I=x+(v<<15&4294967295|v>>>17),v=A+(x^(I|~m))+b[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+x&4294967295}i.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var A=m-this.blockSize,b=this.B,I=this.h,x=0;x<m;){if(I==0)for(;x<=A;)r(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<m;)if(b[I++]=E.charCodeAt(x++),I==this.blockSize){r(this,b),I=0;break}}else for(;x<m;)if(b[I++]=E[x++],I==this.blockSize){r(this,b),I=0;break}}this.h=I,this.o+=m},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var A=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=A&255,A/=256;for(this.u(E),E=Array(16),m=A=0;4>m;++m)for(var b=0;32>b;b+=8)E[A++]=this.g[m]>>>b&255;return E};function o(E,m){var A=l;return Object.prototype.hasOwnProperty.call(A,E)?A[E]:A[E]=m(E)}function a(E,m){this.h=m;for(var A=[],b=!0,I=E.length-1;0<=I;I--){var x=E[I]|0;b&&x==m||(A[I]=x,b=!1)}this.g=A}var l={};function u(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return y(h(-E));for(var m=[],A=1,b=0;E>=A;b++)m[b]=E/A|0,A*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return y(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=h(Math.pow(m,8)),b=g,I=0;I<E.length;I+=8){var x=Math.min(8,E.length-I),v=parseInt(E.substring(I,I+x),m);8>x?(x=h(Math.pow(m,x)),b=b.j(x).add(h(v))):(b=b.j(A),b=b.add(h(v)))}return b}var g=u(0),_=u(1),C=u(16777216);n=a.prototype,n.m=function(){if(T(this))return-y(this).m();for(var E=0,m=1,A=0;A<this.g.length;A++){var b=this.i(A);E+=(0<=b?b:4294967296+b)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(T(this))return"-"+y(this).toString(E);for(var m=h(Math.pow(E,6)),A=this,b="";;){var I=S(A,m).g;A=R(A,I.j(m));var x=((0<A.g.length?A.g[0]:A.h)>>>0).toString(E);if(A=I,N(A))return x+b;for(;6>x.length;)x="0"+x;b=x+b}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function T(E){return E.h==-1}n.l=function(E){return E=R(this,E),T(E)?-1:N(E)?0:1};function y(E){for(var m=E.g.length,A=[],b=0;b<m;b++)A[b]=~E.g[b];return new a(A,~E.h).add(_)}n.abs=function(){return T(this)?y(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),A=[],b=0,I=0;I<=m;I++){var x=b+(this.i(I)&65535)+(E.i(I)&65535),v=(x>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);b=v>>>16,x&=65535,v&=65535,A[I]=v<<16|x}return new a(A,A[A.length-1]&-2147483648?-1:0)};function R(E,m){return E.add(y(m))}n.j=function(E){if(N(this)||N(E))return g;if(T(this))return T(E)?y(this).j(y(E)):y(y(this).j(E));if(T(E))return y(this.j(y(E)));if(0>this.l(C)&&0>E.l(C))return h(this.m()*E.m());for(var m=this.g.length+E.g.length,A=[],b=0;b<2*m;b++)A[b]=0;for(b=0;b<this.g.length;b++)for(var I=0;I<E.g.length;I++){var x=this.i(b)>>>16,v=this.i(b)&65535,St=E.i(I)>>>16,Vt=E.i(I)&65535;A[2*b+2*I]+=v*Vt,V(A,2*b+2*I),A[2*b+2*I+1]+=x*Vt,V(A,2*b+2*I+1),A[2*b+2*I+1]+=v*St,V(A,2*b+2*I+1),A[2*b+2*I+2]+=x*St,V(A,2*b+2*I+2)}for(b=0;b<m;b++)A[b]=A[2*b+1]<<16|A[2*b];for(b=m;b<2*m;b++)A[b]=0;return new a(A,0)};function V(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function L(E,m){this.g=E,this.h=m}function S(E,m){if(N(m))throw Error("division by zero");if(N(E))return new L(g,g);if(T(E))return m=S(y(E),m),new L(y(m.g),y(m.h));if(T(m))return m=S(E,y(m)),new L(y(m.g),m.h);if(30<E.g.length){if(T(E)||T(m))throw Error("slowDivide_ only works with positive integers.");for(var A=_,b=m;0>=b.l(E);)A=M(A),b=M(b);var I=D(A,1),x=D(b,1);for(b=D(b,2),A=D(A,2);!N(b);){var v=x.add(b);0>=v.l(E)&&(I=I.add(A),x=v),b=D(b,1),A=D(A,1)}return m=R(E,I.j(m)),new L(I,m)}for(I=g;0<=E.l(m);){for(A=Math.max(1,Math.floor(E.m()/m.m())),b=Math.ceil(Math.log(A)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),x=h(A),v=x.j(m);T(v)||0<v.l(E);)A-=b,x=h(A),v=x.j(m);N(x)&&(x=_),I=I.add(x),E=R(E,v)}return new L(I,E)}n.A=function(E){return S(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),A=[],b=0;b<m;b++)A[b]=this.i(b)&E.i(b);return new a(A,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),A=[],b=0;b<m;b++)A[b]=this.i(b)|E.i(b);return new a(A,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),A=[],b=0;b<m;b++)A[b]=this.i(b)^E.i(b);return new a(A,this.h^E.h)};function M(E){for(var m=E.g.length+1,A=[],b=0;b<m;b++)A[b]=E.i(b)<<1|E.i(b-1)>>>31;return new a(A,E.h)}function D(E,m){var A=m>>5;m%=32;for(var b=E.g.length-A,I=[],x=0;x<b;x++)I[x]=0<m?E.i(x+A)>>>m|E.i(x+A+1)<<32-m:E.i(x+A);return new a(I,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,hl=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,ve=a}).apply(typeof la<"u"?la:typeof self<"u"?self:typeof window<"u"?window:{});var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pl,mn,fl,gi,jr,ml,gl,yl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,d){return s==Array.prototype||s==Object.prototype||(s[c]=d.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof di=="object"&&di];for(var c=0;c<s.length;++c){var d=s[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=e(this);function r(s,c){if(c)t:{var d=i;s=s.split(".");for(var f=0;f<s.length-1;f++){var w=s[f];if(!(w in d))break t;d=d[w]}s=s[s.length-1],f=d[s],c=c(f),c!=f&&c!=null&&t(d,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var d=0,f=!1,w={next:function(){if(!f&&d<s.length){var P=d++;return{value:c(P,s[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}r("Array.prototype.values",function(s){return s||function(){return o(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function h(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,d){return s.call.apply(s.bind,arguments)}function g(s,c,d){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),s.apply(c,w)}}return function(){return s.apply(c,arguments)}}function _(s,c,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,_.apply(null,arguments)}function C(s,c){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function N(s,c){function d(){}d.prototype=c.prototype,s.aa=c.prototype,s.prototype=new d,s.prototype.constructor=s,s.Qb=function(f,w,P){for(var O=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)O[Z-2]=arguments[Z];return c.prototype[w].apply(f,O)}}function T(s){const c=s.length;if(0<c){const d=Array(c);for(let f=0;f<c;f++)d[f]=s[f];return d}return[]}function y(s,c){for(let d=1;d<arguments.length;d++){const f=arguments[d];if(u(f)){const w=s.length||0,P=f.length||0;s.length=w+P;for(let O=0;O<P;O++)s[w+O]=f[O]}else s.push(f)}}class R{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(s){return/^[\s\xa0]*$/.test(s)}function L(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function S(s){return S[" "](s),s}S[" "]=function(){};var M=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function D(s,c,d){for(const f in s)c.call(d,s[f],f,s)}function E(s,c){for(const d in s)c.call(void 0,s[d],d,s)}function m(s){const c={};for(const d in s)c[d]=s[d];return c}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(s,c){let d,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(d in f)s[d]=f[d];for(let P=0;P<A.length;P++)d=A[P],Object.prototype.hasOwnProperty.call(f,d)&&(s[d]=f[d])}}function I(s){var c=1;s=s.split(":");const d=[];for(;0<c&&s.length;)d.push(s.shift()),c--;return s.length&&d.push(s.join(":")),d}function x(s){l.setTimeout(()=>{throw s},0)}function v(){var s=Ze;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class St{constructor(){this.h=this.g=null}add(c,d){const f=Vt.get();f.set(c,d),this.h?this.h.next=f:this.g=f,this.h=f}}var Vt=new R(()=>new xe,s=>s.reset());class xe{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ut,Jt=!1,Ze=new St,Qn=()=>{const s=l.Promise.resolve(void 0);Ut=()=>{s.then(Te)}};var Te=()=>{for(var s;s=v();){try{s.h.call(s.g)}catch(d){x(d)}var c=Vt;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Jt=!1};function Dt(){this.s=this.s,this.C=this.C}Dt.prototype.s=!1,Dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var Rt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return s}();function Bt(s,c){if(J.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var d=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(M){t:{try{S(c.nodeName);var w=!0;break t}catch{}w=!1}w||(c=null)}}else d=="mouseover"?c=s.fromElement:d=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Ye[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Bt.aa.h.call(this)}}N(Bt,J);var Ye={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),Zc=0;function Yc(s,c,d,f,w){this.listener=s,this.proxy=null,this.src=c,this.type=d,this.capture=!!f,this.ha=w,this.key=++Zc,this.da=this.fa=!1}function $n(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Gn(s){this.src=s,this.g={},this.h=0}Gn.prototype.add=function(s,c,d,f,w){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var O=tr(s,c,f,w);return-1<O?(c=s[O],d||(c.fa=!1)):(c=new Yc(c,this.src,P,!!f,w),c.fa=d,s.push(c)),c};function Yi(s,c){var d=c.type;if(d in s.g){var f=s.g[d],w=Array.prototype.indexOf.call(f,c,void 0),P;(P=0<=w)&&Array.prototype.splice.call(f,w,1),P&&($n(c),s.g[d].length==0&&(delete s.g[d],s.h--))}}function tr(s,c,d,f){for(var w=0;w<s.length;++w){var P=s[w];if(!P.da&&P.listener==c&&P.capture==!!d&&P.ha==f)return w}return-1}var er="closure_lm_"+(1e6*Math.random()|0),nr={};function Zs(s,c,d,f,w){if(Array.isArray(c)){for(var P=0;P<c.length;P++)Zs(s,c[P],d,f,w);return null}return d=eo(d),s&&s[Zt]?s.K(c,d,h(f)?!!f.capture:!1,w):tu(s,c,d,!1,f,w)}function tu(s,c,d,f,w,P){if(!c)throw Error("Invalid event type");var O=h(w)?!!w.capture:!!w,Z=rr(s);if(Z||(s[er]=Z=new Gn(s)),d=Z.add(c,d,f,O,P),d.proxy)return d;if(f=eu(),d.proxy=f,f.src=s,f.listener=d,s.addEventListener)Rt||(w=O),w===void 0&&(w=!1),s.addEventListener(c.toString(),f,w);else if(s.attachEvent)s.attachEvent(to(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function eu(){function s(d){return c.call(s.src,s.listener,d)}const c=nu;return s}function Ys(s,c,d,f,w){if(Array.isArray(c))for(var P=0;P<c.length;P++)Ys(s,c[P],d,f,w);else f=h(f)?!!f.capture:!!f,d=eo(d),s&&s[Zt]?(s=s.i,c=String(c).toString(),c in s.g&&(P=s.g[c],d=tr(P,d,f,w),-1<d&&($n(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete s.g[c],s.h--)))):s&&(s=rr(s))&&(c=s.g[c.toString()],s=-1,c&&(s=tr(c,d,f,w)),(d=-1<s?c[s]:null)&&ir(d))}function ir(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Zt])Yi(c.i,s);else{var d=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(d,f,s.capture):c.detachEvent?c.detachEvent(to(d),f):c.addListener&&c.removeListener&&c.removeListener(f),(d=rr(c))?(Yi(d,s),d.h==0&&(d.src=null,c[er]=null)):$n(s)}}}function to(s){return s in nr?nr[s]:nr[s]="on"+s}function nu(s,c){if(s.da)s=!0;else{c=new Bt(c,this);var d=s.listener,f=s.ha||s.src;s.fa&&ir(s),s=d.call(f,c)}return s}function rr(s){return s=s[er],s instanceof Gn?s:null}var sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function eo(s){return typeof s=="function"?s:(s[sr]||(s[sr]=function(c){return s.handleEvent(c)}),s[sr])}function ft(){Dt.call(this),this.i=new Gn(this),this.M=this,this.F=null}N(ft,Dt),ft.prototype[Zt]=!0,ft.prototype.removeEventListener=function(s,c,d,f){Ys(this,s,c,d,f)};function Et(s,c){var d,f=s.F;if(f)for(d=[];f;f=f.F)d.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new J(c,s);else if(c instanceof J)c.target=c.target||s;else{var w=c;c=new J(f,s),b(c,w)}if(w=!0,d)for(var P=d.length-1;0<=P;P--){var O=c.g=d[P];w=Kn(O,f,!0,c)&&w}if(O=c.g=s,w=Kn(O,f,!0,c)&&w,w=Kn(O,f,!1,c)&&w,d)for(P=0;P<d.length;P++)O=c.g=d[P],w=Kn(O,f,!1,c)&&w}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var d=s.g[c],f=0;f<d.length;f++)$n(d[f]);delete s.g[c],s.h--}}this.F=null},ft.prototype.K=function(s,c,d,f){return this.i.add(String(s),c,!1,d,f)},ft.prototype.L=function(s,c,d,f){return this.i.add(String(s),c,!0,d,f)};function Kn(s,c,d,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,P=0;P<c.length;++P){var O=c[P];if(O&&!O.da&&O.capture==d){var Z=O.listener,ct=O.ha||O.src;O.fa&&Yi(s.i,O),w=Z.call(ct,f)!==!1&&w}}return w&&!f.defaultPrevented}function no(s,c,d){if(typeof s=="function")d&&(s=_(s,d));else if(s&&typeof s.handleEvent=="function")s=_(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function io(s){s.g=no(()=>{s.g=null,s.i&&(s.i=!1,io(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class iu extends Dt{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:io(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tn(s){Dt.call(this),this.h=s,this.g={}}N(tn,Dt);var ro=[];function so(s){D(s.g,function(c,d){this.g.hasOwnProperty(d)&&ir(c)},s),s.g={}}tn.prototype.N=function(){tn.aa.N.call(this),so(this)},tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var or=l.JSON.stringify,ru=l.JSON.parse,su=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function ar(){}ar.prototype.h=null;function oo(s){return s.h||(s.h=s.i())}function ao(){}var en={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lr(){J.call(this,"d")}N(lr,J);function cr(){J.call(this,"c")}N(cr,J);var de={},lo=null;function Xn(){return lo=lo||new ft}de.La="serverreachability";function co(s){J.call(this,de.La,s)}N(co,J);function nn(s){const c=Xn();Et(c,new co(c))}de.STAT_EVENT="statevent";function uo(s,c){J.call(this,de.STAT_EVENT,s),this.stat=c}N(uo,J);function bt(s){const c=Xn();Et(c,new uo(c,s))}de.Ma="timingevent";function ho(s,c){J.call(this,de.Ma,s),this.size=c}N(ho,J);function rn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function sn(){this.g=!0}sn.prototype.xa=function(){this.g=!1};function ou(s,c,d,f,w,P){s.info(function(){if(s.g)if(P)for(var O="",Z=P.split("&"),ct=0;ct<Z.length;ct++){var G=Z[ct].split("=");if(1<G.length){var mt=G[0];G=G[1];var gt=mt.split("_");O=2<=gt.length&&gt[1]=="type"?O+(mt+"="+G+"&"):O+(mt+"=redacted&")}}else O=null;else O=P;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+d+`
`+O})}function au(s,c,d,f,w,P,O){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+d+`
`+P+" "+O})}function Re(s,c,d,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+cu(s,d)+(f?" "+f:"")})}function lu(s,c){s.info(function(){return"TIMEOUT: "+c})}sn.prototype.info=function(){};function cu(s,c){if(!s.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(s=0;s<d.length;s++)if(Array.isArray(d[s])){var f=d[s];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var P=w[0];if(P!="noop"&&P!="stop"&&P!="close")for(var O=1;O<w.length;O++)w[O]=""}}}}return or(d)}catch{return c}}var Jn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},po={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ur;function Zn(){}N(Zn,ar),Zn.prototype.g=function(){return new XMLHttpRequest},Zn.prototype.i=function(){return{}},ur=new Zn;function Yt(s,c,d,f){this.j=s,this.i=c,this.l=d,this.R=f||1,this.U=new tn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fo}function fo(){this.i=null,this.g="",this.h=!1}var mo={},dr={};function hr(s,c,d){s.L=1,s.v=ni(Wt(c)),s.m=d,s.P=!0,go(s,null)}function go(s,c){s.F=Date.now(),Yn(s),s.A=Wt(s.v);var d=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),So(d.i,"t",f),s.C=0,d=s.j.J,s.h=new fo,s.g=Go(s.j,d?c:null,!s.m),0<s.O&&(s.M=new iu(_(s.Y,s,s.g),s.O)),c=s.U,d=s.g,f=s.ca;var w="readystatechange";Array.isArray(w)||(w&&(ro[0]=w.toString()),w=ro);for(var P=0;P<w.length;P++){var O=Zs(d,w[P],f||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),nn(),ou(s.i,s.u,s.A,s.l,s.R,s.m)}Yt.prototype.ca=function(s){s=s.target;const c=this.M;c&&Qt(s)==3?c.j():this.Y(s)},Yt.prototype.Y=function(s){try{if(s==this.g)t:{const gt=Qt(this.g);var c=this.g.Ba();const Se=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Mo(this.g)))){this.J||gt!=4||c==7||(c==8||0>=Se?nn(3):nn(2)),pr(this);var d=this.g.Z();this.X=d;e:if(yo(this)){var f=Mo(this.g);s="";var w=f.length,P=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){he(this),on(this);var O="";break e}this.h.i=new l.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(P&&c==w-1)});f.length=0,this.h.g+=s,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,au(this.i,this.u,this.A,this.l,this.R,gt,d),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,ct=this.g;if((Z=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Z)){var G=Z;break e}}G=null}if(d=G)Re(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fr(this,d);else{this.o=!1,this.s=3,bt(12),he(this),on(this);break t}}if(this.P){d=!0;let Lt;for(;!this.J&&this.C<O.length;)if(Lt=uu(this,O),Lt==dr){gt==4&&(this.s=4,bt(14),d=!1),Re(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==mo){this.s=4,bt(15),Re(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else Re(this.i,this.l,Lt,null),fr(this,Lt);if(yo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||O.length!=0||this.h.h||(this.s=1,bt(16),d=!1),this.o=this.o&&d,!d)Re(this.i,this.l,O,"[Invalid Chunked Response]"),he(this),on(this);else if(0<O.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),_r(mt),mt.M=!0,bt(11))}}else Re(this.i,this.l,O,null),fr(this,O);gt==4&&he(this),this.o&&!this.J&&(gt==4?Uo(this.j,this):(this.o=!1,Yn(this)))}else Ru(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),he(this),on(this)}}}catch{}finally{}};function yo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function uu(s,c){var d=s.C,f=c.indexOf(`
`,d);return f==-1?dr:(d=Number(c.substring(d,f)),isNaN(d)?mo:(f+=1,f+d>c.length?dr:(c=c.slice(f,f+d),s.C=f+d,c)))}Yt.prototype.cancel=function(){this.J=!0,he(this)};function Yn(s){s.S=Date.now()+s.I,vo(s,s.I)}function vo(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=rn(_(s.ba,s),c)}function pr(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Yt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(lu(this.i,this.A),this.L!=2&&(nn(),bt(17)),he(this),this.s=2,on(this)):vo(this,this.S-s)};function on(s){s.j.G==0||s.J||Uo(s.j,s)}function he(s){pr(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,so(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function fr(s,c){try{var d=s.j;if(d.G!=0&&(d.g==s||mr(d.h,s))){if(!s.K&&mr(d.h,s)&&d.G==3){try{var f=d.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<s.F)li(d),oi(d);else break t;Ar(d),bt(18)}}else d.za=w[1],0<d.za-d.T&&37500>w[2]&&d.F&&d.v==0&&!d.C&&(d.C=rn(_(d.Za,d),6e3));if(1>=Eo(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else fe(d,11)}else if((s.K||d.g==s)&&li(d),!V(c))for(w=d.Da.g.parse(c),c=0;c<w.length;c++){let G=w[c];if(d.T=G[0],G=G[1],d.G==2)if(G[0]=="c"){d.K=G[1],d.ia=G[2];const mt=G[3];mt!=null&&(d.la=mt,d.j.info("VER="+d.la));const gt=G[4];gt!=null&&(d.Aa=gt,d.j.info("SVER="+d.Aa));const Se=G[5];Se!=null&&typeof Se=="number"&&0<Se&&(f=1.5*Se,d.L=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const Lt=s.g;if(Lt){const ui=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ui){var P=f.h;P.g||ui.indexOf("spdy")==-1&&ui.indexOf("quic")==-1&&ui.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(gr(P,P.h),P.h=null))}if(f.D){const Er=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Er&&(f.ya=Er,Y(f.I,f.D,Er))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-s.F,d.j.info("Handshake RTT: "+d.R+"ms")),f=d;var O=s;if(f.qa=$o(f,f.J?f.ia:null,f.W),O.K){bo(f.h,O);var Z=O,ct=f.L;ct&&(Z.I=ct),Z.B&&(pr(Z),Yn(Z)),f.g=O}else qo(f);0<d.i.length&&ai(d)}else G[0]!="stop"&&G[0]!="close"||fe(d,7);else d.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?fe(d,7):vr(d):G[0]!="noop"&&d.l&&d.l.ta(G),d.v=0)}}nn(4)}catch{}}var du=class{constructor(s,c){this.g=s,this.map=c}};function Ao(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _o(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Eo(s){return s.h?1:s.g?s.g.size:0}function mr(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function gr(s,c){s.g?s.g.add(c):s.h=c}function bo(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Ao.prototype.cancel=function(){if(this.i=Io(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Io(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const d of s.g.values())c=c.concat(d.D);return c}return T(s.i)}function hu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(u(s)){for(var c=[],d=s.length,f=0;f<d;f++)c.push(s[f]);return c}c=[],d=0;for(f in s)c[d++]=s[f];return c}function pu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(u(s)||typeof s=="string"){var c=[];s=s.length;for(var d=0;d<s;d++)c.push(d);return c}c=[],d=0;for(const f in s)c[d++]=f;return c}}}function wo(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(u(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var d=pu(s),f=hu(s),w=f.length,P=0;P<w;P++)c.call(void 0,f[P],d&&d[P],s)}var xo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fu(s,c){if(s){s=s.split("&");for(var d=0;d<s.length;d++){var f=s[d].indexOf("="),w=null;if(0<=f){var P=s[d].substring(0,f);w=s[d].substring(f+1)}else P=s[d];c(P,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function pe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof pe){this.h=s.h,ti(this,s.j),this.o=s.o,this.g=s.g,ei(this,s.s),this.l=s.l;var c=s.i,d=new cn;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),To(this,d),this.m=s.m}else s&&(c=String(s).match(xo))?(this.h=!1,ti(this,c[1]||"",!0),this.o=an(c[2]||""),this.g=an(c[3]||"",!0),ei(this,c[4]),this.l=an(c[5]||"",!0),To(this,c[6]||"",!0),this.m=an(c[7]||"")):(this.h=!1,this.i=new cn(null,this.h))}pe.prototype.toString=function(){var s=[],c=this.j;c&&s.push(ln(c,Ro,!0),":");var d=this.g;return(d||c=="file")&&(s.push("//"),(c=this.o)&&s.push(ln(c,Ro,!0),"@"),s.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&s.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&s.push("/"),s.push(ln(d,d.charAt(0)=="/"?yu:gu,!0))),(d=this.i.toString())&&s.push("?",d),(d=this.m)&&s.push("#",ln(d,Au)),s.join("")};function Wt(s){return new pe(s)}function ti(s,c,d){s.j=d?an(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function ei(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function To(s,c,d){c instanceof cn?(s.i=c,_u(s.i,s.h)):(d||(c=ln(c,vu)),s.i=new cn(c,s.h))}function Y(s,c,d){s.i.set(c,d)}function ni(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function an(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function ln(s,c,d){return typeof s=="string"?(s=encodeURI(s).replace(c,mu),d&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function mu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ro=/[#\/\?@]/g,gu=/[#\?:]/g,yu=/[#\?]/g,vu=/[#\?@]/g,Au=/#/g;function cn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function te(s){s.g||(s.g=new Map,s.h=0,s.i&&fu(s.i,function(c,d){s.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=cn.prototype,n.add=function(s,c){te(this),this.i=null,s=Ce(this,s);var d=this.g.get(s);return d||this.g.set(s,d=[]),d.push(c),this.h+=1,this};function Co(s,c){te(s),c=Ce(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Po(s,c){return te(s),c=Ce(s,c),s.g.has(c)}n.forEach=function(s,c){te(this),this.g.forEach(function(d,f){d.forEach(function(w){s.call(c,w,f,this)},this)},this)},n.na=function(){te(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let f=0;f<c.length;f++){const w=s[f];for(let P=0;P<w.length;P++)d.push(c[f])}return d},n.V=function(s){te(this);let c=[];if(typeof s=="string")Po(this,s)&&(c=c.concat(this.g.get(Ce(this,s))));else{s=Array.from(this.g.values());for(let d=0;d<s.length;d++)c=c.concat(s[d])}return c},n.set=function(s,c){return te(this),this.i=null,s=Ce(this,s),Po(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function So(s,c,d){Co(s,c),0<d.length&&(s.i=null,s.g.set(Ce(s,c),T(d)),s.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var f=c[d];const P=encodeURIComponent(String(f)),O=this.V(f);for(f=0;f<O.length;f++){var w=P;O[f]!==""&&(w+="="+encodeURIComponent(String(O[f]))),s.push(w)}}return this.i=s.join("&")};function Ce(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function _u(s,c){c&&!s.j&&(te(s),s.i=null,s.g.forEach(function(d,f){var w=f.toLowerCase();f!=w&&(Co(this,f),So(this,w,d))},s)),s.j=c}function Eu(s,c){const d=new sn;if(l.Image){const f=new Image;f.onload=C(ee,d,"TestLoadImage: loaded",!0,c,f),f.onerror=C(ee,d,"TestLoadImage: error",!1,c,f),f.onabort=C(ee,d,"TestLoadImage: abort",!1,c,f),f.ontimeout=C(ee,d,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function bu(s,c){const d=new sn,f=new AbortController,w=setTimeout(()=>{f.abort(),ee(d,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(P=>{clearTimeout(w),P.ok?ee(d,"TestPingServer: ok",!0,c):ee(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),ee(d,"TestPingServer: error",!1,c)})}function ee(s,c,d,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(d)}catch{}}function Iu(){this.g=new su}function wu(s,c,d){const f=d||"";try{wo(s,function(w,P){let O=w;h(w)&&(O=or(w)),c.push(f+P+"="+encodeURIComponent(O))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function ii(s){this.l=s.Ub||null,this.j=s.eb||!1}N(ii,ar),ii.prototype.g=function(){return new ri(this.l,this.j)},ii.prototype.i=function(s){return function(){return s}}({});function ri(s,c){ft.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(ri,ft),n=ri.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,dn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?un(this):dn(this),this.readyState==3&&Vo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,un(this))},n.Qa=function(s){this.g&&(this.response=s,un(this))},n.ga=function(){this.g&&un(this)};function un(s){s.readyState=4,s.l=null,s.j=null,s.v=null,dn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,s.push(d[0]+": "+d[1]),d=c.next();return s.join(`\r
`)};function dn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Do(s){let c="";return D(s,function(d,f){c+=f,c+=":",c+=d,c+=`\r
`}),c}function yr(s,c,d){t:{for(f in d){var f=!1;break t}f=!0}f||(d=Do(d),typeof s=="string"?d!=null&&encodeURIComponent(String(d)):Y(s,c,d))}function it(s){ft.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(it,ft);var xu=/^https?$/i,Tu=["POST","PUT"];n=it.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ur.g(),this.v=this.o?oo(this.o):oo(ur),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(P){ko(this,P);return}if(s=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)d.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())d.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),w=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Tu,c,void 0))||f||w||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,O]of d)this.g.setRequestHeader(P,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lo(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){ko(this,P)}};function ko(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,No(s),si(s)}function No(s){s.A||(s.A=!0,Et(s,"complete"),Et(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Et(this,"complete"),Et(this,"abort"),si(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),si(this,!0)),it.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Bo(this):this.bb())},n.bb=function(){Bo(this)};function Bo(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Qt(s)!=4||s.Z()!=2)){if(s.u&&Qt(s)==4)no(s.Ea,0,s);else if(Et(s,"readystatechange"),Qt(s)==4){s.h=!1;try{const O=s.Z();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var d;if(!(d=c)){var f;if(f=O===0){var w=String(s.D).match(xo)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),f=!xu.test(w?w.toLowerCase():"")}d=f}if(d)Et(s,"complete"),Et(s,"success");else{s.m=6;try{var P=2<Qt(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",No(s)}}finally{si(s)}}}}function si(s,c){if(s.g){Lo(s);const d=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Et(s,"ready");try{d.onreadystatechange=f}catch{}}}function Lo(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Qt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),ru(c)}};function Mo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ru(s){const c={};s=(s.g&&2<=Qt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(V(s[f]))continue;var d=I(s[f]);const w=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=c[w]||[];c[w]=P,P.push(d)}E(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hn(s,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[s]||c}function Oo(s){this.Aa=0,this.i=[],this.j=new sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hn("baseRetryDelayMs",5e3,s),this.cb=hn("retryDelaySeedMs",1e4,s),this.Wa=hn("forwardChannelMaxRetries",2,s),this.wa=hn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ao(s&&s.concurrentRequestLimit),this.Da=new Iu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Oo.prototype,n.la=8,n.G=1,n.connect=function(s,c,d,f){bt(0),this.W=s,this.H=c||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.I=$o(this,null,this.W),ai(this)};function vr(s){if(Fo(s),s.G==3){var c=s.U++,d=Wt(s.I);if(Y(d,"SID",s.K),Y(d,"RID",c),Y(d,"TYPE","terminate"),pn(s,d),c=new Yt(s,s.j,c),c.L=2,c.v=ni(Wt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Go(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Yn(c)}Qo(s)}function oi(s){s.g&&(_r(s),s.g.cancel(),s.g=null)}function Fo(s){oi(s),s.u&&(l.clearTimeout(s.u),s.u=null),li(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function ai(s){if(!_o(s.h)&&!s.s){s.s=!0;var c=s.Ga;Ut||Qn(),Jt||(Ut(),Jt=!0),Ze.add(c,s),s.B=0}}function Cu(s,c){return Eo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=rn(_(s.Ga,s,c),Wo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const w=new Yt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=m(P),b(P,this.S)):P=this.S),this.m!==null||this.O||(w.H=P,P=null),this.P)t:{for(var c=0,d=0;d<this.i.length;d++){e:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=d;break t}if(c===4096||d===this.i.length-1){c=d+1;break t}}c=1e3}else c=1e3;c=zo(this,w,c),d=Wt(this.I),Y(d,"RID",s),Y(d,"CVER",22),this.D&&Y(d,"X-HTTP-Session-Id",this.D),pn(this,d),P&&(this.O?c="headers="+encodeURIComponent(String(Do(P)))+"&"+c:this.m&&yr(d,this.m,P)),gr(this.h,w),this.Ua&&Y(d,"TYPE","init"),this.P?(Y(d,"$req",c),Y(d,"SID","null"),w.T=!0,hr(w,d,null)):hr(w,d,c),this.G=2}}else this.G==3&&(s?jo(this,s):this.i.length==0||_o(this.h)||jo(this))};function jo(s,c){var d;c?d=c.l:d=s.U++;const f=Wt(s.I);Y(f,"SID",s.K),Y(f,"RID",d),Y(f,"AID",s.T),pn(s,f),s.m&&s.o&&yr(f,s.m,s.o),d=new Yt(s,s.j,d,s.B+1),s.m===null&&(d.H=s.o),c&&(s.i=c.D.concat(s.i)),c=zo(s,d,1e3),d.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),gr(s.h,d),hr(d,f,c)}function pn(s,c){s.H&&D(s.H,function(d,f){Y(c,f,d)}),s.l&&wo({},function(d,f){Y(c,f,d)})}function zo(s,c,d){d=Math.min(s.i.length,d);var f=s.l?_(s.l.Na,s.l,s):null;t:{var w=s.i;let P=-1;for(;;){const O=["count="+d];P==-1?0<d?(P=w[0].g,O.push("ofs="+P)):P=0:O.push("ofs="+P);let Z=!0;for(let ct=0;ct<d;ct++){let G=w[ct].g;const mt=w[ct].map;if(G-=P,0>G)P=Math.max(0,w[ct].g-100),Z=!1;else try{wu(mt,O,"req"+G+"_")}catch{f&&f(mt)}}if(Z){f=O.join("&");break t}}}return s=s.i.splice(0,d),c.D=s,f}function qo(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Ut||Qn(),Jt||(Ut(),Jt=!0),Ze.add(c,s),s.v=0}}function Ar(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=rn(_(s.Fa,s),Wo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ho(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=rn(_(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),oi(this),Ho(this))};function _r(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Ho(s){s.g=new Yt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Wt(s.qa);Y(c,"RID","rpc"),Y(c,"SID",s.K),Y(c,"AID",s.T),Y(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(c,"TO",s.ja),Y(c,"TYPE","xmlhttp"),pn(s,c),s.m&&s.o&&yr(c,s.m,s.o),s.L&&(s.g.I=s.L);var d=s.g;s=s.ia,d.L=1,d.v=ni(Wt(c)),d.m=null,d.P=!0,go(d,s)}n.Za=function(){this.C!=null&&(this.C=null,oi(this),Ar(this),bt(19))};function li(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Uo(s,c){var d=null;if(s.g==c){li(s),_r(s),s.g=null;var f=2}else if(mr(s.h,c))d=c.D,bo(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var w=s.B;f=Xn(),Et(f,new ho(f,d)),ai(s)}else qo(s);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&Cu(s,c)||f==2&&Ar(s)))switch(d&&0<d.length&&(c=s.h,c.i=c.i.concat(d)),w){case 1:fe(s,5);break;case 4:fe(s,10);break;case 3:fe(s,6);break;default:fe(s,2)}}}function Wo(s,c){let d=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(d*=2),d*c}function fe(s,c){if(s.j.info("Error code "+c),c==2){var d=_(s.fb,s),f=s.Xa;const w=!f;f=new pe(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ti(f,"https"),ni(f),w?Eu(f.toString(),d):bu(f.toString(),d)}else bt(2);s.G=0,s.l&&s.l.sa(c),Qo(s),Fo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Qo(s){if(s.G=0,s.ka=[],s.l){const c=Io(s.h);(c.length!=0||s.i.length!=0)&&(y(s.ka,c),y(s.ka,s.i),s.h.i.length=0,T(s.i),s.i.length=0),s.l.ra()}}function $o(s,c,d){var f=d instanceof pe?Wt(d):new pe(d);if(f.g!="")c&&(f.g=c+"."+f.g),ei(f,f.s);else{var w=l.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var P=new pe(null);f&&ti(P,f),c&&(P.g=c),w&&ei(P,w),d&&(P.l=d),f=P}return d=s.D,c=s.ya,d&&c&&Y(f,d,c),Y(f,"VER",s.la),pn(s,f),f}function Go(s,c,d){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new it(new ii({eb:d})):new it(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ko(){}n=Ko.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ci(){}ci.prototype.g=function(s,c){return new Ct(s,c)};function Ct(s,c){ft.call(this),this.g=new Oo(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!V(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!V(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Pe(this)}N(Ct,ft),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){vr(this.g)},Ct.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var d={};d.__data__=s,s=d}else this.u&&(d={},d.__data__=or(s),s=d);c.i.push(new du(c.Ya++,s)),c.G==3&&ai(c)},Ct.prototype.N=function(){this.g.l=null,delete this.j,vr(this.g),delete this.g,Ct.aa.N.call(this)};function Xo(s){lr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const d in c){s=d;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}N(Xo,lr);function Jo(){cr.call(this),this.status=1}N(Jo,cr);function Pe(s){this.g=s}N(Pe,Ko),Pe.prototype.ua=function(){Et(this.g,"a")},Pe.prototype.ta=function(s){Et(this.g,new Xo(s))},Pe.prototype.sa=function(s){Et(this.g,new Jo)},Pe.prototype.ra=function(){Et(this.g,"b")},ci.prototype.createWebChannel=ci.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,yl=function(){return new ci},gl=function(){return Xn()},ml=de,jr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jn.NO_ERROR=0,Jn.TIMEOUT=8,Jn.HTTP_ERROR=6,gi=Jn,po.COMPLETE="complete",fl=po,ao.EventType=en,en.OPEN="a",en.CLOSE="b",en.ERROR="c",en.MESSAGE="d",ft.prototype.listen=ft.prototype.K,mn=ao,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,pl=it}).apply(typeof di<"u"?di:typeof self<"u"?self:typeof window<"u"?window:{});const ca="@firebase/firestore";/**
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
 */let Qe="10.14.0";/**
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
 */const _e=new ol("@firebase/firestore");function fn(){return _e.logLevel}function j(n,...t){if(_e.logLevel<=$.DEBUG){const e=t.map(os);_e.debug(`Firestore (${Qe}): ${n}`,...e)}}function Kt(n,...t){if(_e.logLevel<=$.ERROR){const e=t.map(os);_e.error(`Firestore (${Qe}): ${n}`,...e)}}function Oe(n,...t){if(_e.logLevel<=$.WARN){const e=t.map(os);_e.warn(`Firestore (${Qe}): ${n}`,...e)}}function os(n){if(typeof n=="string")return n;try{/**
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
 */function q(n="Unexpected state"){const t=`FIRESTORE (${Qe}) INTERNAL ASSERTION FAILED: `+n;throw Kt(t),new Error(t)}function X(n,t){n||q()}function U(n,t){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends We{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $t{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class vl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ah{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(vt.UNAUTHENTICATED))}shutdown(){}}class lh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ch{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0);let i=this.i;const r=u=>this.i!==i?(i=this.i,e(u)):Promise.resolve();let o=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new $t,t.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},l=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new $t)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(X(typeof i.accessToken=="string"),new vl(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new vt(t)}}class uh{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dh{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new uh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ph{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){X(this.o===void 0);const i=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const r=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?r(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new hh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class Al{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=fh(40);for(let o=0;o<r.length;++o)i.length<20&&r[o]<e&&(i+=t.charAt(r[o]%t.length))}return i}}function K(n,t){return n<t?-1:n>t?1:0}function Fe(n,t,e){return n.length===t.length&&n.every((i,r)=>e(i,t[r]))}/**
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
 */class at{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return at.fromMillis(Date.now())}static fromDate(t){return at.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new at(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new at(0,0))}static max(){return new H(new at(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xn{constructor(t,e,i){e===void 0?e=0:e>t.length&&q(),i===void 0?i=t.length-e:i>t.length-e&&q(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return xn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof xn?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let r=0;r<i;r++){const o=t.get(r),a=e.get(r);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tt extends xn{construct(t,e,i){return new tt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new F(k.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(r=>r.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const mh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends xn{construct(t,e,i){return new dt(t,e,i)}static isValidIdentifier(t){return mh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(t){const e=[];let i="",r=0;const o=()=>{if(i.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let a=!1;for(;r<t.length;){const l=t[r];if(l==="\\"){if(r+1===t.length)throw new F(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(i+=l,r++):(o(),r++)}if(o(),a)throw new F(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
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
 */class z{constructor(t){this.path=t}static fromPath(t){return new z(tt.fromString(t))}static fromName(t){return new z(tt.fromString(t).popFirst(5))}static empty(){return new z(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new z(new tt(t.slice()))}}function gh(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=H.fromTimestamp(i===1e9?new at(e+1,0):new at(e,i));return new oe(r,z.empty(),t)}function yh(n){return new oe(n.readTime,n.key,-1)}class oe{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new oe(H.min(),z.empty(),-1)}static max(){return new oe(H.max(),z.empty(),-1)}}function vh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=z.comparator(n.documentKey,t.documentKey),e!==0?e:K(n.largestBatchId,t.largestBatchId))}/**
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
 */async function kn(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==Ah)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new B((i,r)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,r)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof B?e:B.resolve(e)}catch(e){return B.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):B.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):B.reject(e)}static resolve(t){return new B((e,i)=>{e(t)})}static reject(t){return new B((e,i)=>{i(t)})}static waitFor(t){return new B((e,i)=>{let r=0,o=0,a=!1;t.forEach(l=>{++r,l.next(()=>{++o,a&&o===r&&e()},u=>i(u))}),a=!0,o===r&&e()})}static or(t){let e=B.resolve(!1);for(const i of t)e=e.next(r=>r?B.resolve(r):i());return e}static forEach(t,e){const i=[];return t.forEach((r,o)=>{i.push(e.call(this,r,o))}),this.waitFor(i)}static mapArray(t,e){return new B((i,r)=>{const o=t.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const h=u;e(t[h]).next(p=>{a[h]=p,++l,l===o&&i(a)},p=>r(p))}})}static doWhile(t,e){return new B((i,r)=>{const o=()=>{t()===!0?e().next(()=>{o()},r):i()};o()})}}function Eh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Nn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class as{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}as.oe=-1;function Bi(n){return n==null}function wi(n){return n===0&&1/n==-1/0}function bh(n){return typeof n=="number"&&Number.isInteger(n)&&!wi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ua(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ie(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function _l(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class nt{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return e+i.left.size;r<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new hi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new hi(this.root,t,this.comparator,!1)}getReverseIterator(){return new hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new hi(this.root,t,this.comparator,!0)}}class hi{constructor(t,e,i,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&r&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,i,r,o){this.key=t,this.value=e,this.color=i??ut.RED,this.left=r??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,r,o){return new ut(t??this.key,e??this.value,i??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let r=this;const o=i(t,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(t,e,i),null):o===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return ut.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const t=this.left.check();if(t!==this.right.check())throw q();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,i,r,o){return this}insert(t,e,i){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new da(this.data.getIterator())}getIteratorFrom(t){return new da(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,o=i.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class da{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new ht(dt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fe(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class El extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new El("Invalid base64 string: "+o):o}}(t);return new pt(e)}static fromUint8Array(t){const e=function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o}(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Ih=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(n){if(X(!!n),typeof n=="string"){let t=0;const e=Ih.exec(n);if(X(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ee(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
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
 */function ls(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function cs(n){const t=n.mapValue.fields.__previous_value__;return ls(t)?cs(t):t}function Tn(n){const t=ae(n.mapValue.fields.__local_write_time__.timestampValue);return new at(t.seconds,t.nanos)}/**
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
 */class wh{constructor(t,e,i,r,o,a,l,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Rn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Rn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const pi={mapValue:{}};function be(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ls(n)?4:Th(n)?9007199254740991:xh(n)?10:11:q()}function jt(n,t){if(n===t)return!0;const e=be(n);if(e!==be(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Tn(n).isEqual(Tn(t));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=ae(r.timestampValue),l=ae(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,o){return Ee(r.bytesValue).isEqual(Ee(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,o){return rt(r.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(r.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return rt(r.integerValue)===rt(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=rt(r.doubleValue),l=rt(o.doubleValue);return a===l?wi(a)===wi(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Fe(n.arrayValue.values||[],t.arrayValue.values||[],jt);case 10:case 11:return function(r,o){const a=r.mapValue.fields||{},l=o.mapValue.fields||{};if(ua(a)!==ua(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!jt(a[u],l[u])))return!1;return!0}(n,t);default:return q()}}function Cn(n,t){return(n.values||[]).find(e=>jt(e,t))!==void 0}function je(n,t){if(n===t)return 0;const e=be(n),i=be(t);if(e!==i)return K(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=rt(o.integerValue||o.doubleValue),u=rt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return ha(n.timestampValue,t.timestampValue);case 4:return ha(Tn(n),Tn(t));case 5:return K(n.stringValue,t.stringValue);case 6:return function(o,a){const l=Ee(o),u=Ee(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=K(l[h],u[h]);if(p!==0)return p}return K(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=K(rt(o.latitude),rt(a.latitude));return l!==0?l:K(rt(o.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return pa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,u,h,p;const g=o.fields||{},_=a.fields||{},C=(l=g.value)===null||l===void 0?void 0:l.arrayValue,N=(u=_.value)===null||u===void 0?void 0:u.arrayValue,T=K(((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0,((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0);return T!==0?T:pa(C,N)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===pi.mapValue&&a===pi.mapValue)return 0;if(o===pi.mapValue)return 1;if(a===pi.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),h=a.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const _=K(u[g],p[g]);if(_!==0)return _;const C=je(l[u[g]],h[p[g]]);if(C!==0)return C}return K(u.length,p.length)}(n.mapValue,t.mapValue);default:throw q()}}function ha(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return K(n,t);const e=ae(n),i=ae(t),r=K(e.seconds,i.seconds);return r!==0?r:K(e.nanos,i.nanos)}function pa(n,t){const e=n.values||[],i=t.values||[];for(let r=0;r<e.length&&r<i.length;++r){const o=je(e[r],i[r]);if(o)return o}return K(e.length,i.length)}function ze(n){return zr(n)}function zr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ae(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ee(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return z.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",r=!0;for(const o of e.values||[])r?r=!1:i+=",",i+=zr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${zr(e.fields[a])}`;return r+"}"}(n.mapValue):q()}function fa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function qr(n){return!!n&&"integerValue"in n}function us(n){return!!n&&"arrayValue"in n}function ma(n){return!!n&&"nullValue"in n}function ga(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yi(n){return!!n&&"mapValue"in n}function xh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function An(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ie(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=An(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=An(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Th(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class xt{constructor(t){this.value=t}static empty(){return new xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!yi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=An(e)}setAll(t){let e=dt.emptyPath(),i={},r=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,i,r),i={},r=[],e=l.popLast()}a?i[l.lastSegment()]=An(a):r.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,r)}delete(t){const e=this.field(t.popLast());yi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=e.mapValue.fields[t.get(i)];yi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,i){Ie(e,(r,o)=>t[r]=o);for(const r of i)delete t[r]}clone(){return new xt(An(this.value))}}function bl(n){const t=[];return Ie(n.fields,(e,i)=>{const r=new dt([e]);if(yi(i)){const o=bl(i.mapValue).fields;if(o.length===0)t.push(r);else for(const a of o)t.push(r.child(a))}else t.push(r)}),new Pt(t)}/**
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
 */class At{constructor(t,e,i,r,o,a,l){this.key=t,this.documentType=e,this.version=i,this.readTime=r,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new At(t,0,H.min(),H.min(),H.min(),xt.empty(),0)}static newFoundDocument(t,e,i,r){return new At(t,1,e,H.min(),i,r,0)}static newNoDocument(t,e){return new At(t,2,e,H.min(),H.min(),xt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,H.min(),H.min(),xt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xi{constructor(t,e){this.position=t,this.inclusive=e}}function ya(n,t,e){let i=0;for(let r=0;r<n.position.length;r++){const o=t[r],a=n.position[r];if(o.field.isKeyField()?i=z.comparator(z.fromName(a.referenceValue),e.key):i=je(a,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function va(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!jt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Pn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Rh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Il{}class ot extends Il{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Ph(t,e,i):e==="array-contains"?new Dh(t,i):e==="in"?new kh(t,i):e==="not-in"?new Nh(t,i):e==="array-contains-any"?new Bh(t,i):new ot(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Sh(t,i):new Vh(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(je(e,this.value)):e!==null&&be(this.value)===be(e)&&this.matchesComparison(je(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Il{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Mt(t,e)}matches(t){return wl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wl(n){return n.op==="and"}function xl(n){return Ch(n)&&wl(n)}function Ch(n){for(const t of n.filters)if(t instanceof Mt)return!1;return!0}function Hr(n){if(n instanceof ot)return n.field.canonicalString()+n.op.toString()+ze(n.value);if(xl(n))return n.filters.map(t=>Hr(t)).join(",");{const t=n.filters.map(e=>Hr(e)).join(",");return`${n.op}(${t})`}}function Tl(n,t){return n instanceof ot?function(i,r){return r instanceof ot&&i.op===r.op&&i.field.isEqual(r.field)&&jt(i.value,r.value)}(n,t):n instanceof Mt?function(i,r){return r instanceof Mt&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((o,a,l)=>o&&Tl(a,r.filters[l]),!0):!1}(n,t):void q()}function Rl(n){return n instanceof ot?function(e){return`${e.field.canonicalString()} ${e.op} ${ze(e.value)}`}(n):n instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(Rl).join(" ,")+"}"}(n):"Filter"}class Ph extends ot{constructor(t,e,i){super(t,e,i),this.key=z.fromName(i.referenceValue)}matches(t){const e=z.comparator(t.key,this.key);return this.matchesComparison(e)}}class Sh extends ot{constructor(t,e){super(t,"in",e),this.keys=Cl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vh extends ot{constructor(t,e){super(t,"not-in",e),this.keys=Cl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Cl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>z.fromName(i.referenceValue))}class Dh extends ot{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return us(e)&&Cn(e.arrayValue,this.value)}}class kh extends ot{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Cn(this.value.arrayValue,e)}}class Nh extends ot{constructor(t,e){super(t,"not-in",e)}matches(t){if(Cn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Cn(this.value.arrayValue,e)}}class Bh extends ot{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!us(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Cn(this.value.arrayValue,i))}}/**
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
 */class Lh{constructor(t,e=null,i=[],r=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=r,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function Aa(n,t=null,e=[],i=[],r=null,o=null,a=null){return new Lh(n,t,e,i,r,o,a)}function ds(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Hr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),Bi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ze(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ze(i)).join(",")),t.ue=e}return t.ue}function hs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Rh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Tl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!va(n.startAt,t.startAt)&&va(n.endAt,t.endAt)}function Ur(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class $e{constructor(t,e=null,i=[],r=[],o=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=r,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Mh(n,t,e,i,r,o,a,l){return new $e(n,t,e,i,r,o,a,l)}function Li(n){return new $e(n)}function _a(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pl(n){return n.collectionGroup!==null}function _n(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ht(dt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Pn(o,i))}),e.has(dt.keyField().canonicalString())||t.ce.push(new Pn(dt.keyField(),i))}return t.ce}function Ot(n){const t=U(n);return t.le||(t.le=Oh(t,_n(n))),t.le}function Oh(n,t){if(n.limitType==="F")return Aa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(r=>{const o=r.dir==="desc"?"asc":"desc";return new Pn(r.field,o)});const e=n.endAt?new xi(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new xi(n.startAt.position,n.startAt.inclusive):null;return Aa(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Wr(n,t){const e=n.filters.concat([t]);return new $e(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Qr(n,t,e){return new $e(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Mi(n,t){return hs(Ot(n),Ot(t))&&n.limitType===t.limitType}function Sl(n){return`${ds(Ot(n))}|lt:${n.limitType}`}function ke(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(r=>Rl(r)).join(", ")}]`),Bi(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(r=>ze(r)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(r=>ze(r)).join(",")),`Target(${i})`}(Ot(n))}; limitType=${n.limitType})`}function Oi(n,t){return t.isFoundDocument()&&function(i,r){const o=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):z.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,r){for(const o of _n(i))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,r){for(const o of i.filters)if(!o.matches(r))return!1;return!0}(n,t)&&function(i,r){return!(i.startAt&&!function(a,l,u){const h=ya(a,l,u);return a.inclusive?h<=0:h<0}(i.startAt,_n(i),r)||i.endAt&&!function(a,l,u){const h=ya(a,l,u);return a.inclusive?h>=0:h>0}(i.endAt,_n(i),r))}(n,t)}function Fh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vl(n){return(t,e)=>{let i=!1;for(const r of _n(n)){const o=jh(r,t,e);if(o!==0)return o;i=i||r.field.isKeyField()}return 0}}function jh(n,t,e){const i=n.field.isKeyField()?z.comparator(t.key,e.key):function(o,a,l){const u=a.data.field(o),h=l.data.field(o);return u!==null&&h!==null?je(u,h):q()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return q()}}/**
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
 */class Ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[r,o]of i)if(this.equalsFn(r,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],t))return void(r[o]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[e]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ie(this.inner,(e,i)=>{for(const[r,o]of i)t(r,o)})}isEmpty(){return _l(this.inner)}size(){return this.innerSize}}/**
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
 */const zh=new nt(z.comparator);function Xt(){return zh}const Dl=new nt(z.comparator);function gn(...n){let t=Dl;for(const e of n)t=t.insert(e.key,e);return t}function kl(n){let t=Dl;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function ge(){return En()}function Nl(){return En()}function En(){return new Ge(n=>n.toString(),(n,t)=>n.isEqual(t))}const qh=new nt(z.comparator),Hh=new ht(z.comparator);function W(...n){let t=Hh;for(const e of n)t=t.add(e);return t}const Uh=new ht(K);function Wh(){return Uh}/**
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
 */function ps(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wi(t)?"-0":t}}function Bl(n){return{integerValue:""+n}}function Qh(n,t){return bh(t)?Bl(t):ps(n,t)}/**
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
 */class Fi{constructor(){this._=void 0}}function $h(n,t,e){return n instanceof Sn?function(r,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&ls(o)&&(o=cs(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Vn?Ml(n,t):n instanceof Dn?Ol(n,t):function(r,o){const a=Ll(r,o),l=Ea(a)+Ea(r.Pe);return qr(a)&&qr(r.Pe)?Bl(l):ps(r.serializer,l)}(n,t)}function Gh(n,t,e){return n instanceof Vn?Ml(n,t):n instanceof Dn?Ol(n,t):e}function Ll(n,t){return n instanceof Ti?function(i){return qr(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class Sn extends Fi{}class Vn extends Fi{constructor(t){super(),this.elements=t}}function Ml(n,t){const e=Fl(t);for(const i of n.elements)e.some(r=>jt(r,i))||e.push(i);return{arrayValue:{values:e}}}class Dn extends Fi{constructor(t){super(),this.elements=t}}function Ol(n,t){let e=Fl(t);for(const i of n.elements)e=e.filter(r=>!jt(r,i));return{arrayValue:{values:e}}}class Ti extends Fi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ea(n){return rt(n.integerValue||n.doubleValue)}function Fl(n){return us(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Kh{constructor(t,e){this.field=t,this.transform=e}}function Xh(n,t){return n.field.isEqual(t.field)&&function(i,r){return i instanceof Vn&&r instanceof Vn||i instanceof Dn&&r instanceof Dn?Fe(i.elements,r.elements,jt):i instanceof Ti&&r instanceof Ti?jt(i.Pe,r.Pe):i instanceof Sn&&r instanceof Sn}(n.transform,t.transform)}class Jh{constructor(t,e){this.version=t,this.transformResults=e}}class It{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new It}static exists(t){return new It(void 0,t)}static updateTime(t){return new It(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ji{}function jl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new zi(n.key,It.none()):new Bn(n.key,n.data,It.none());{const e=n.data,i=xt.empty();let r=new ht(dt.comparator);for(let o of t.fields)if(!r.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?i.delete(o):i.set(o,a),r=r.add(o)}return new ce(n.key,i,new Pt(r.toArray()),It.none())}}function Zh(n,t,e){n instanceof Bn?function(r,o,a){const l=r.value.clone(),u=Ia(r.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof ce?function(r,o,a){if(!vi(r.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ia(r.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(zl(r)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function bn(n,t,e,i){return n instanceof Bn?function(o,a,l,u){if(!vi(o.precondition,a))return l;const h=o.value.clone(),p=wa(o.fieldTransforms,u,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,i):n instanceof ce?function(o,a,l,u){if(!vi(o.precondition,a))return l;const h=wa(o.fieldTransforms,u,a),p=a.data;return p.setAll(zl(o)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(g=>g.field))}(n,t,e,i):function(o,a,l){return vi(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Yh(n,t){let e=null;for(const i of n.fieldTransforms){const r=t.data.field(i.field),o=Ll(i.transform,r||null);o!=null&&(e===null&&(e=xt.empty()),e.set(i.field,o))}return e||null}function ba(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Fe(i,r,(o,a)=>Xh(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Bn extends ji{constructor(t,e,i,r=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ce extends ji{constructor(t,e,i,r,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function zl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Ia(n,t,e){const i=new Map;X(n.length===e.length);for(let r=0;r<e.length;r++){const o=n[r],a=o.transform,l=t.data.field(o.field);i.set(o.field,Gh(a,l,e[r]))}return i}function wa(n,t,e){const i=new Map;for(const r of n){const o=r.transform,a=e.data.field(r.field);i.set(r.field,$h(o,a,t))}return i}class zi extends ji{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tp extends ji{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ep{constructor(t,e,i,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(t.key)&&Zh(o,t,i[r])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=bn(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=bn(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Nl();return this.mutations.forEach(r=>{const o=t.get(r.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(r.key)?null:l;const u=jl(a,l);u!==null&&i.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),W())}isEqual(t){return this.batchId===t.batchId&&Fe(this.mutations,t.mutations,(e,i)=>ba(e,i))&&Fe(this.baseMutations,t.baseMutations,(e,i)=>ba(e,i))}}class fs{constructor(t,e,i,r){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=r}static from(t,e,i){X(t.mutations.length===i.length);let r=function(){return qh}();const o=t.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,i[a].version);return new fs(t,e,i,r)}}/**
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
 */class ip{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var st,Q;function rp(n){switch(n){default:return q();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function ql(n){if(n===void 0)return Kt("GRPC error has no .code"),k.UNKNOWN;switch(n){case st.OK:return k.OK;case st.CANCELLED:return k.CANCELLED;case st.UNKNOWN:return k.UNKNOWN;case st.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case st.INTERNAL:return k.INTERNAL;case st.UNAVAILABLE:return k.UNAVAILABLE;case st.UNAUTHENTICATED:return k.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case st.NOT_FOUND:return k.NOT_FOUND;case st.ALREADY_EXISTS:return k.ALREADY_EXISTS;case st.PERMISSION_DENIED:return k.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case st.ABORTED:return k.ABORTED;case st.OUT_OF_RANGE:return k.OUT_OF_RANGE;case st.UNIMPLEMENTED:return k.UNIMPLEMENTED;case st.DATA_LOSS:return k.DATA_LOSS;default:return q()}}(Q=st||(st={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const op=new ve([4294967295,4294967295],0);function xa(n){const t=sp().encode(n),e=new hl;return e.update(t),new Uint8Array(e.digest())}function Ta(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ve([e,i],0),new ve([r,o],0)]}class ms{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new yn(`Invalid padding: ${e}`);if(i<0)throw new yn(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new yn(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new yn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ve.fromNumber(this.Ie)}Ee(t,e,i){let r=t.add(e.multiply(ve.fromNumber(i)));return r.compare(op)===1&&(r=new ve([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=xa(t),[i,r]=Ta(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(i,r,o);if(!this.de(a))return!1}return!0}static create(t,e,i){const r=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ms(o,r,e);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=xa(t),[i,r]=Ta(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(i,r,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class yn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qi{constructor(t,e,i,r,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const r=new Map;return r.set(t,Ln.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new qi(H.min(),r,new nt(K),Xt(),W())}}class Ln{constructor(t,e,i,r,o){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new Ln(i,e,W(),W(),W())}}/**
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
 */class Ai{constructor(t,e,i,r){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=r}}class Hl{constructor(t,e){this.targetId=t,this.me=e}}class Ul{constructor(t,e,i=pt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=r}}class Ra{constructor(){this.fe=0,this.ge=Pa(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=W(),e=W(),i=W();return this.ge.forEach((r,o)=>{switch(o){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:i=i.add(r);break;default:q()}}),new Ln(this.pe,this.ye,t,e,i)}Ce(){this.we=!1,this.ge=Pa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ap{constructor(t){this.Le=t,this.Be=new Map,this.ke=Xt(),this.qe=Ca(),this.Qe=new nt(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:q()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,i=t.me.count,r=this.Je(e);if(r){const o=r.target;if(Ur(o))if(i===0){const a=new z(o.path);this.Ue(e,a,At.newNoDocument(a,H.min()))}else X(i===1);else{const a=this.Ye(e);if(a!==i){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:o=0}=e;let a,l;try{a=Ee(i).toUint8Array()}catch(u){if(u instanceof El)return Oe("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ms(a,r,o)}catch(u){return Oe(u instanceof yn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let r=0;return i.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&Ur(l.target)){const u=new z(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,At.newNoDocument(u,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let i=W();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const r=new qi(t,e,this.Qe,this.ke,i);return this.ke=Xt(),this.qe=Ca(),this.Qe=new nt(K),r}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ra,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||j("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ra),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ca(){return new nt(z.comparator)}function Pa(){return new nt(z.comparator)}const lp={asc:"ASCENDING",desc:"DESCENDING"},cp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},up={and:"AND",or:"OR"};class dp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function $r(n,t){return n.useProto3Json||Bi(t)?t:{value:t}}function Ri(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function hp(n,t){return Ri(n,t.toTimestamp())}function Ft(n){return X(!!n),H.fromTimestamp(function(e){const i=ae(e);return new at(i.seconds,i.nanos)}(n))}function gs(n,t){return Gr(n,t).canonicalString()}function Gr(n,t){const e=function(r){return new tt(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ql(n){const t=tt.fromString(n);return X(Jl(t)),t}function Kr(n,t){return gs(n.databaseId,t.path)}function Tr(n,t){const e=Ql(t);if(e.get(1)!==n.databaseId.projectId)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new z(Gl(e))}function $l(n,t){return gs(n.databaseId,t)}function pp(n){const t=Ql(n);return t.length===4?tt.emptyPath():Gl(t)}function Xr(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Gl(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Sa(n,t,e){return{name:Kr(n,t),fields:e.value.mapValue.fields}}function fp(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],o=function(h,p){return h.useProto3Json?(X(p===void 0||typeof p=="string"),pt.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array),pt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const p=h.code===void 0?k.UNKNOWN:ql(h.code);return new F(p,h.message||"")}(a);e=new Ul(i,r,o,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Tr(n,i.document.name),o=Ft(i.document.updateTime),a=i.document.createTime?Ft(i.document.createTime):H.min(),l=new xt({mapValue:{fields:i.document.fields}}),u=At.newFoundDocument(r,o,a,l),h=i.targetIds||[],p=i.removedTargetIds||[];e=new Ai(h,p,u.key,u)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Tr(n,i.document),o=i.readTime?Ft(i.readTime):H.min(),a=At.newNoDocument(r,o),l=i.removedTargetIds||[];e=new Ai([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Tr(n,i.document),o=i.removedTargetIds||[];e=new Ai([],o,r,null)}else{if(!("filter"in t))return q();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:o}=i,a=new ip(r,o),l=i.targetId;e=new Hl(l,a)}}return e}function mp(n,t){let e;if(t instanceof Bn)e={update:Sa(n,t.key,t.value)};else if(t instanceof zi)e={delete:Kr(n,t.key)};else if(t instanceof ce)e={update:Sa(n,t.key,t.data),updateMask:wp(t.fieldMask)};else{if(!(t instanceof tp))return q();e={verify:Kr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,a){const l=a.transform;if(l instanceof Sn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Dn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ti)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw q()}(0,i))),t.precondition.isNone||(e.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:hp(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:q()}(n,t.precondition)),e}function gp(n,t){return n&&n.length>0?(X(t!==void 0),n.map(e=>function(r,o){let a=r.updateTime?Ft(r.updateTime):Ft(o);return a.isEqual(H.min())&&(a=Ft(o)),new Jh(a,r.transformResults||[])}(e,t))):[]}function yp(n,t){return{documents:[$l(n,t.path)]}}function vp(n,t){const e={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=$l(n,r);const o=function(h){if(h.length!==0)return Xl(Mt.create(h,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(h){if(h.length!==0)return h.map(p=>function(_){return{field:Ne(_.field),direction:Ep(_.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=$r(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:r}}function Ap(n){let t=pp(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let r=null;if(i>0){X(i===1);const p=e.from[0];p.allDescendants?r=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(g){const _=Kl(g);return _ instanceof Mt&&xl(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(_=>function(N){return new Pn(Be(N.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(_))}(e.orderBy));let l=null;e.limit&&(l=function(g){let _;return _=typeof g=="object"?g.value:g,Bi(_)?null:_}(e.limit));let u=null;e.startAt&&(u=function(g){const _=!!g.before,C=g.values||[];return new xi(C,_)}(e.startAt));let h=null;return e.endAt&&(h=function(g){const _=!g.before,C=g.values||[];return new xi(C,_)}(e.endAt)),Mh(t,r,a,o,l,"F",u,h)}function _p(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Kl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=Be(e.unaryFilter.field);return ot.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Be(e.unaryFilter.field);return ot.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Be(e.unaryFilter.field);return ot.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Be(e.unaryFilter.field);return ot.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(e){return ot.create(Be(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(i=>Kl(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(n):q()}function Ep(n){return lp[n]}function bp(n){return cp[n]}function Ip(n){return up[n]}function Ne(n){return{fieldPath:n.canonicalString()}}function Be(n){return dt.fromServerFormat(n.fieldPath)}function Xl(n){return n instanceof ot?function(e){if(e.op==="=="){if(ga(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NAN"}};if(ma(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ga(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NOT_NAN"}};if(ma(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ne(e.field),op:bp(e.op),value:e.value}}}(n):n instanceof Mt?function(e){const i=e.getFilters().map(r=>Xl(r));return i.length===1?i[0]:{compositeFilter:{op:Ip(e.op),filters:i}}}(n):q()}function wp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Jl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ne{constructor(t,e,i,r,o=H.min(),a=H.min(),l=pt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new ne(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ne(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class xp{constructor(t){this.ct=t}}function Tp(n){const t=Ap({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qr(t,t.limit,"L"):t}/**
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
 */class Rp{constructor(){this.un=new Cp}addToCollectionParentIndex(t,e){return this.un.add(e),B.resolve()}getCollectionParents(t,e){return B.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return B.resolve()}deleteFieldIndex(t,e){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,e){return B.resolve()}getDocumentsMatchingTarget(t,e){return B.resolve(null)}getIndexType(t,e){return B.resolve(0)}getFieldIndexes(t,e){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,e){return B.resolve(oe.min())}getMinOffsetFromCollectionGroup(t,e){return B.resolve(oe.min())}updateCollectionGroup(t,e,i){return B.resolve()}updateIndexEntries(t,e){return B.resolve()}}class Cp{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e]||new ht(tt.comparator),o=!r.has(i);return this.index[e]=r.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e];return r&&r.has(i)}getEntries(t){return(this.index[t]||new ht(tt.comparator)).toArray()}}/**
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
 */class qe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new qe(0)}static kn(){return new qe(-1)}}/**
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
 */class Pp{constructor(){this.changes=new Ge(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?B.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Vp{constructor(t,e,i,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(i!==null&&bn(i.mutation,r,Pt.empty(),at.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,W()).next(()=>i))}getLocalViewOfDocuments(t,e,i=W()){const r=ge();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,i).next(o=>{let a=gn();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const i=ge();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,W()))}populateOverlays(t,e,i){const r=[];return i.forEach(o=>{e.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(t,r).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,i,r){let o=Xt();const a=En(),l=function(){return En()}();return e.forEach((u,h)=>{const p=i.get(h.key);r.has(h.key)&&(p===void 0||p.mutation instanceof ce)?o=o.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),bn(p.mutation,h,p.mutation.getFieldMask(),at.now())):a.set(h.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,o).next(u=>(u.forEach((h,p)=>a.set(h,p)),e.forEach((h,p)=>{var g;return l.set(h,new Sp(p,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,e){const i=En();let r=new nt((a,l)=>a-l),o=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let p=i.get(u)||Pt.empty();p=l.applyToLocalView(h,p),i.set(u,p);const g=(r.get(l.batchId)||W()).add(u);r=r.insert(l.batchId,g)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,g=Nl();p.forEach(_=>{if(!o.has(_)){const C=jl(e.get(_),i.get(_));C!==null&&g.set(_,C),o=o.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,g))}return B.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,r){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Pl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,r):this.getDocumentsMatchingCollectionQuery(t,e,i,r)}getNextDocuments(t,e,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,r).next(o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,r-o.size):B.resolve(ge());let l=-1,u=o;return a.next(h=>B.forEach(h,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),o.get(p)?B.resolve():this.remoteDocumentCache.getEntry(t,p).next(_=>{u=u.insert(p,_)}))).next(()=>this.populateOverlays(t,h,o)).next(()=>this.computeViews(t,u,h,W())).next(p=>({batchId:l,changes:kl(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new z(e)).next(i=>{let r=gn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,i,r){const o=e.collectionGroup;let a=gn();return this.indexManager.getCollectionParents(t,o).next(l=>B.forEach(l,u=>{const h=function(g,_){return new $e(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,u.child(o));return this.getDocumentsMatchingCollectionQuery(t,h,i,r).next(p=>{p.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,i,r){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,r))).next(a=>{o.forEach((u,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,At.newInvalidDocument(p)))});let l=gn();return a.forEach((u,h)=>{const p=o.get(u);p!==void 0&&bn(p.mutation,h,Pt.empty(),at.now()),Oi(e,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class Dp{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return B.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Ft(r.createTime)}}(e)),B.resolve()}getNamedQuery(t,e){return B.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:Tp(r.bundledQuery),readTime:Ft(r.readTime)}}(e)),B.resolve()}}/**
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
 */class kp{constructor(){this.overlays=new nt(z.comparator),this.Ir=new Map}getOverlay(t,e){return B.resolve(this.overlays.get(e))}getOverlays(t,e){const i=ge();return B.forEach(e,r=>this.getOverlay(t,r).next(o=>{o!==null&&i.set(r,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((r,o)=>{this.ht(t,e,o)}),B.resolve()}removeOverlaysForBatchId(t,e,i){const r=this.Ir.get(i);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(i)),B.resolve()}getOverlaysForCollection(t,e,i){const r=ge(),o=e.length+1,a=new z(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===o&&u.largestBatchId>i&&r.set(u.getKey(),u)}return B.resolve(r)}getOverlaysForCollectionGroup(t,e,i,r){let o=new nt((h,p)=>h-p);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>i){let p=o.get(h.largestBatchId);p===null&&(p=ge(),o=o.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=ge(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=r)););return B.resolve(l)}ht(t,e,i){const r=this.overlays.get(i.key);if(r!==null){const a=this.Ir.get(r.largestBatchId).delete(i.key);this.Ir.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new np(e,i));let o=this.Ir.get(e);o===void 0&&(o=W(),this.Ir.set(e,o)),this.Ir.set(e,o.add(i.key))}}/**
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
 */class Np{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,B.resolve()}}/**
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
 */class ys{constructor(){this.Tr=new ht(lt.Er),this.dr=new ht(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new lt(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new lt(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new z(new tt([])),i=new lt(e,t),r=new lt(e,t+1),o=[];return this.dr.forEachInRange([i,r],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new z(new tt([])),i=new lt(e,t),r=new lt(e,t+1);let o=W();return this.dr.forEachInRange([i,r],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new lt(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class lt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return z.comparator(t.key,e.key)||K(t.wr,e.wr)}static Ar(t,e){return K(t.wr,e.wr)||z.comparator(t.key,e.key)}}/**
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
 */class Bp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ht(lt.Er)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,r){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ep(o,e,i,r);this.mutationQueue.push(a);for(const l of r)this.br=this.br.add(new lt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return B.resolve(a)}lookupMutationBatch(t,e){return B.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,r=this.vr(i),o=r<0?0:r;return B.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new lt(e,0),r=new lt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([i,r],a=>{const l=this.Dr(a.wr);o.push(l)}),B.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new ht(K);return e.forEach(r=>{const o=new lt(r,0),a=new lt(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{i=i.add(l.wr)})}),B.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,r=i.length+1;let o=i;z.isDocumentKey(o)||(o=o.child(""));const a=new lt(new z(o),0);let l=new ht(K);return this.br.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===r&&(l=l.add(u.wr)),!0)},a),B.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(i=>{const r=this.Dr(i);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){X(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return B.forEach(e.mutations,r=>{const o=new lt(r.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new lt(e,0),r=this.br.firstAfterOrEqual(i);return B.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Lp{constructor(t){this.Mr=t,this.docs=function(){return new nt(z.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,r=this.docs.get(i),o=r?r.size:0,a=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return B.resolve(i?i.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let i=Xt();return e.forEach(r=>{const o=this.docs.get(r);i=i.insert(r,o?o.document.mutableCopy():At.newInvalidDocument(r))}),B.resolve(i)}getDocumentsMatchingQuery(t,e,i,r){let o=Xt();const a=e.path,l=new z(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||vh(yh(p),i)<=0||(r.has(p.key)||Oi(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return B.resolve(o)}getAllFromCollectionGroup(t,e,i,r){q()}Or(t,e){return B.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Mp(this)}getSize(t){return B.resolve(this.size)}}class Mp extends Pp{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(i)}),B.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Op{constructor(t){this.persistence=t,this.Nr=new Ge(e=>ds(e),hs),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ys,this.targetCount=0,this.kr=qe.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,r)=>e(r)),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),B.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new qe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,B.resolve()}updateTargetData(t,e){return this.Kn(e),B.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,e,i){let r=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&i.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),r++)}),B.waitFor(o).next(()=>r)}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return B.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),B.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const r=this.persistence.referenceDelegate,o=[];return r&&e.forEach(a=>{o.push(r.markPotentiallyOrphaned(t,a))}),B.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),B.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return B.resolve(i)}containsKey(t,e){return B.resolve(this.Br.containsKey(e))}}/**
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
 */class Fp{constructor(t,e){this.qr={},this.overlays={},this.Qr=new as(0),this.Kr=!1,this.Kr=!0,this.$r=new Np,this.referenceDelegate=t(this),this.Ur=new Op(this),this.indexManager=new Rp,this.remoteDocumentCache=function(r){return new Lp(r)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new xp(e),this.Gr=new Dp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new kp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new Bp(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){j("MemoryPersistence","Starting transaction:",t);const r=new jp(this.Qr.next());return this.referenceDelegate.zr(),i(r).next(o=>this.referenceDelegate.jr(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Hr(t,e){return B.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class jp extends _h{constructor(t){super(),this.currentSequenceNumber=t}}class vs{constructor(t){this.persistence=t,this.Jr=new ys,this.Yr=null}static Zr(t){return new vs(t)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),B.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),B.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),B.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(o=>this.Xr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,i=>{const r=z.fromPath(i);return this.ei(t,r).next(o=>{o||e.removeEntry(r,H.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return B.or([()=>B.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class As{constructor(t,e,i,r){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=r}static Wi(t,e){let i=W(),r=W();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new As(t,e.fromCache,i,r)}}/**
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
 */class qp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Hu()?8:Eh(zu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,r){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,r,i).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new zp;return this.Xi(t,e,a).next(l=>{if(o.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>o.result)}es(t,e,i,r){return i.documentReadCount<this.ji?(fn()<=$.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(fn()<=$.DEBUG&&j("QueryEngine","Query:",ke(e),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Hi*r?(fn()<=$.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ot(e))):B.resolve())}Yi(t,e){if(_a(e))return B.resolve(null);let i=Ot(e);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Qr(e,null,"F"),i=Ot(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const a=W(...o);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(u=>{const h=this.ts(e,l);return this.ns(e,h,a,u.readTime)?this.Yi(t,Qr(e,null,"F")):this.rs(t,h,e,u)}))})))}Zi(t,e,i,r){return _a(e)||r.isEqual(H.min())?B.resolve(null):this.Ji.getDocuments(t,i).next(o=>{const a=this.ts(e,o);return this.ns(e,a,i,r)?B.resolve(null):(fn()<=$.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ke(e)),this.rs(t,a,e,gh(r,-1)).next(l=>l))})}ts(t,e){let i=new ht(Vl(t));return e.forEach((r,o)=>{Oi(t,o)&&(i=i.add(o))}),i}ns(t,e,i,r){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Xi(t,e,i){return fn()<=$.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",ke(e)),this.Ji.getDocumentsMatchingQuery(t,e,oe.min(),i)}rs(t,e,i,r){return this.Ji.getDocumentsMatchingQuery(t,i,r).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Hp{constructor(t,e,i,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new nt(K),this._s=new Ge(o=>ds(o),hs),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Up(n,t,e,i){return new Hp(n,t,e,i)}async function Zl(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let r;return e.mutationQueue.getAllMutationBatches(i).next(o=>(r=o,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const a=[],l=[];let u=W();for(const h of r){a.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of o){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return e.localDocuments.getDocuments(i,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function Wp(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const g=h.batch,_=g.keys();let C=B.resolve();return _.forEach(N=>{C=C.next(()=>p.getEntry(u,N)).next(T=>{const y=h.docVersions.get(N);X(y!==null),T.version.compareTo(y)<0&&(g.applyToRemoteDocument(T,h),T.isValidDocument()&&(T.setReadTime(h.commitVersion),p.addEntry(T)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=W();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>e.localDocuments.getDocuments(i,r))})}function Yl(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Qp(n,t){const e=U(n),i=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const l=[];t.targetChanges.forEach((p,g)=>{const _=r.get(g);if(!_)return;l.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,g).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,g)));let C=_.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(g)!==null?C=C.withResumeToken(pt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,i)),r=r.insert(g,C),function(T,y,R){return T.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(_,C,p)&&l.push(e.Ur.updateTargetData(o,C))});let u=Xt(),h=W();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push($p(o,a,t.documentUpdates).next(p=>{u=p.Ps,h=p.Is})),!i.isEqual(H.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(g=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,i));l.push(p)}return B.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,u,h)).next(()=>u)}).then(o=>(e.os=r,o))}function $p(n,t,e){let i=W(),r=W();return e.forEach(o=>i=i.add(o)),t.getEntries(n,i).next(o=>{let a=Xt();return e.forEach((l,u)=>{const h=o.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(H.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):j("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:r}})}function Gp(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function Kp(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return e.Ur.getTargetData(i,t).next(o=>o?(r=o,B.resolve(r)):e.Ur.allocateTargetId(i).next(a=>(r=new ne(t,a,"TargetPurposeListen",i.currentSequenceNumber),e.Ur.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=e.os.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(i.targetId,i),e._s.set(t,i.targetId)),i})}async function Jr(n,t,e){const i=U(n),r=i.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",o,a=>i.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Nn(a))throw a;j("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(r.target)}function Va(n,t,e){const i=U(n);let r=H.min(),o=W();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,p){const g=U(u),_=g._s.get(p);return _!==void 0?B.resolve(g.os.get(_)):g.Ur.getTargetData(h,p)}(i,a,Ot(t)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,e?r:H.min(),e?o:W())).next(l=>(Xp(i,Fh(t),l),{documents:l,Ts:o})))}function Xp(n,t,e){let i=n.us.get(t)||H.min();e.forEach((r,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),n.us.set(t,i)}class Da{constructor(){this.activeTargetIds=Wh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jp{constructor(){this.so=new Da,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Da,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ka{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fi=null;function Rr(){return fi===null?fi=function(){return 268435456+Math.round(2147483648*Math.random())}():fi++,"0x"+fi.toString(16)}/**
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
 */const yt="WebChannelConnection";class ef extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${r}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${o}`}get Fo(){return!1}Mo(e,i,r,o,a){const l=Rr(),u=this.xo(e,i.toUriEncodedString());j("RestConnection",`Sending RPC '${e}' ${l}:`,u,r);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,o,a),this.No(e,u,h,r).then(p=>(j("RestConnection",`Received RPC '${e}' ${l}: `,p),p),p=>{throw Oe("RestConnection",`RPC '${e}' ${l} failed with error: `,p,"url: ",u,"request:",r),p})}Lo(e,i,r,o,a,l){return this.Mo(e,i,r,o,a)}Oo(e,i,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,a)=>e[a]=o),r&&r.headers.forEach((o,a)=>e[a]=o)}xo(e,i){const r=Yp[e];return`${this.Do}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,r){const o=Rr();return new Promise((a,l)=>{const u=new pl;u.setWithCredentials(!0),u.listenOnce(fl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case gi.NO_ERROR:const p=u.getResponseJson();j(yt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case gi.TIMEOUT:j(yt,`RPC '${t}' ${o} timed out`),l(new F(k.DEADLINE_EXCEEDED,"Request time out"));break;case gi.HTTP_ERROR:const g=u.getStatus();if(j(yt,`RPC '${t}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_==null?void 0:_.error;if(C&&C.status&&C.message){const N=function(y){const R=y.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(R)>=0?R:k.UNKNOWN}(C.status);l(new F(N,C.message))}else l(new F(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new F(k.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{j(yt,`RPC '${t}' ${o} completed.`)}});const h=JSON.stringify(r);j(yt,`RPC '${t}' ${o} sending request:`,r),u.send(e,"POST",h,i,15)})}Bo(t,e,i){const r=Rr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=yl(),l=gl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,i),u.encodeInitMessageHeaders=!0;const p=o.join("");j(yt,`Creating RPC '${t}' stream ${r}: ${p}`,u);const g=a.createWebChannel(p,u);let _=!1,C=!1;const N=new tf({Io:y=>{C?j(yt,`Not sending because RPC '${t}' stream ${r} is closed:`,y):(_||(j(yt,`Opening RPC '${t}' stream ${r} transport.`),g.open(),_=!0),j(yt,`RPC '${t}' stream ${r} sending:`,y),g.send(y))},To:()=>g.close()}),T=(y,R,V)=>{y.listen(R,L=>{try{V(L)}catch(S){setTimeout(()=>{throw S},0)}})};return T(g,mn.EventType.OPEN,()=>{C||(j(yt,`RPC '${t}' stream ${r} transport opened.`),N.yo())}),T(g,mn.EventType.CLOSE,()=>{C||(C=!0,j(yt,`RPC '${t}' stream ${r} transport closed`),N.So())}),T(g,mn.EventType.ERROR,y=>{C||(C=!0,Oe(yt,`RPC '${t}' stream ${r} transport errored:`,y),N.So(new F(k.UNAVAILABLE,"The operation could not be completed")))}),T(g,mn.EventType.MESSAGE,y=>{var R;if(!C){const V=y.data[0];X(!!V);const L=V,S=L.error||((R=L[0])===null||R===void 0?void 0:R.error);if(S){j(yt,`RPC '${t}' stream ${r} received error:`,S);const M=S.status;let D=function(A){const b=st[A];if(b!==void 0)return ql(b)}(M),E=S.message;D===void 0&&(D=k.INTERNAL,E="Unknown error status: "+M+" with message "+S.message),C=!0,N.So(new F(D,E)),g.close()}else j(yt,`RPC '${t}' stream ${r} received:`,V),N.bo(V)}}),T(l,ml.STAT_EVENT,y=>{y.stat===jr.PROXY?j(yt,`RPC '${t}' stream ${r} detected buffering proxy`):y.stat===jr.NOPROXY&&j(yt,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Cr(){return typeof document<"u"?document:null}/**
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
 */function Hi(n){return new dp(n,!0)}/**
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
 */class tc{constructor(t,e,i=1e3,r=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=r,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-i);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ec{constructor(t,e,i,r,o,a,l,u){this.ui=t,this.Ho=i,this.Jo=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new tc(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===k.RESOURCE_EXHAUSTED?(Kt(e.toString()),Kt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Yo===e&&this.P_(i,r)},i=>{t(()=>{const r=new F(k.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(r)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{i(()=>this.I_(r))}),this.stream.onMessage(r=>{i(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return j("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nf extends ec{constructor(t,e,i,r,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,r,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=fp(this.serializer,t),i=function(o){if(!("targetChange"in o))return H.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Ft(a.readTime):H.min()}(t);return this.listener.d_(e,i)}A_(t){const e={};e.database=Xr(this.serializer),e.addTarget=function(o,a){let l;const u=a.target;if(l=Ur(u)?{documents:yp(o,u)}:{query:vp(o,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Wl(o,a.resumeToken);const h=$r(o,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(H.min())>0){l.readTime=Ri(o,a.snapshotVersion.toTimestamp());const h=$r(o,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const i=_p(this.serializer,t);i&&(e.labels=i),this.a_(e)}R_(t){const e={};e.database=Xr(this.serializer),e.removeTarget=t,this.a_(e)}}class rf extends ec{constructor(t,e,i,r,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,r,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return X(!!t.streamToken),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=gp(t.writeResults,t.commitTime),i=Ft(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=Xr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>mp(this.serializer,i))};this.a_(e)}}/**
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
 */class sf extends class{}{constructor(t,e,i,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Gr(e,i),r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(k.UNKNOWN,o.toString())})}Lo(t,e,i,r,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,Gr(e,i),r,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(k.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class of{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Kt(e),this.D_=!1):j("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class af{constructor(t,e,i,r,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{i.enqueueAndForget(async()=>{we(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=U(u);h.L_.add(4),await Mn(h),h.q_.set("Unknown"),h.L_.delete(4),await Ui(h)}(this))})}),this.q_=new of(i,r)}}async function Ui(n){if(we(n))for(const t of n.B_)await t(!0)}async function Mn(n){for(const t of n.B_)await t(!1)}function nc(n,t){const e=U(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Is(e)?bs(e):Ke(e).r_()&&Es(e,t))}function _s(n,t){const e=U(n),i=Ke(e);e.N_.delete(t),i.r_()&&ic(e,t),e.N_.size===0&&(i.r_()?i.o_():we(e)&&e.q_.set("Unknown"))}function Es(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ke(n).A_(t)}function ic(n,t){n.Q_.xe(t),Ke(n).R_(t)}function bs(n){n.Q_=new ap({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ke(n).start(),n.q_.v_()}function Is(n){return we(n)&&!Ke(n).n_()&&n.N_.size>0}function we(n){return U(n).L_.size===0}function rc(n){n.Q_=void 0}async function lf(n){n.q_.set("Online")}async function cf(n){n.N_.forEach((t,e)=>{Es(n,t)})}async function uf(n,t){rc(n),Is(n)?(n.q_.M_(t),bs(n)):n.q_.set("Unknown")}async function df(n,t,e){if(n.q_.set("Online"),t instanceof Ul&&t.state===2&&t.cause)try{await async function(r,o){const a=o.cause;for(const l of o.targetIds)r.N_.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.N_.delete(l),r.Q_.removeTarget(l))}(n,t)}catch(i){j("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Ci(n,i)}else if(t instanceof Ai?n.Q_.Ke(t):t instanceof Hl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(H.min()))try{const i=await Yl(n.localStore);e.compareTo(i)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=o.N_.get(h);p&&o.N_.set(h,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const p=o.N_.get(u);if(!p)return;o.N_.set(u,p.withResumeToken(pt.EMPTY_BYTE_STRING,p.snapshotVersion)),ic(o,u);const g=new ne(p.target,u,h,p.sequenceNumber);Es(o,g)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(i){j("RemoteStore","Failed to raise snapshot:",i),await Ci(n,i)}}async function Ci(n,t,e){if(!Nn(t))throw t;n.L_.add(1),await Mn(n),n.q_.set("Offline"),e||(e=()=>Yl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Ui(n)})}function sc(n,t){return t().catch(e=>Ci(n,e,t))}async function Wi(n){const t=U(n),e=le(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;hf(t);)try{const r=await Gp(t.localStore,i);if(r===null){t.O_.length===0&&e.o_();break}i=r.batchId,pf(t,r)}catch(r){await Ci(t,r)}oc(t)&&ac(t)}function hf(n){return we(n)&&n.O_.length<10}function pf(n,t){n.O_.push(t);const e=le(n);e.r_()&&e.V_&&e.m_(t.mutations)}function oc(n){return we(n)&&!le(n).n_()&&n.O_.length>0}function ac(n){le(n).start()}async function ff(n){le(n).p_()}async function mf(n){const t=le(n);for(const e of n.O_)t.m_(e.mutations)}async function gf(n,t,e){const i=n.O_.shift(),r=fs.from(i,t,e);await sc(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Wi(n)}async function yf(n,t){t&&le(n).V_&&await async function(i,r){if(function(a){return rp(a)&&a!==k.ABORTED}(r.code)){const o=i.O_.shift();le(i).s_(),await sc(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,r)),await Wi(i)}}(n,t),oc(n)&&ac(n)}async function Na(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const i=we(e);e.L_.add(3),await Mn(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Ui(e)}async function vf(n,t){const e=U(n);t?(e.L_.delete(2),await Ui(e)):t||(e.L_.add(2),await Mn(e),e.q_.set("Unknown"))}function Ke(n){return n.K_||(n.K_=function(e,i,r){const o=U(e);return o.w_(),new nf(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Eo:lf.bind(null,n),Ro:cf.bind(null,n),mo:uf.bind(null,n),d_:df.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Is(n)?bs(n):n.q_.set("Unknown")):(await n.K_.stop(),rc(n))})),n.K_}function le(n){return n.U_||(n.U_=function(e,i,r){const o=U(e);return o.w_(),new rf(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ff.bind(null,n),mo:yf.bind(null,n),f_:mf.bind(null,n),g_:gf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Wi(n)):(await n.U_.stop(),n.O_.length>0&&(j("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class ws{constructor(t,e,i,r,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,r,o){const a=Date.now()+i,l=new ws(t,e,a,r,o);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xs(n,t){if(Kt("AsyncQueue",`${t}: ${n}`),Nn(n))return new F(k.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Me{constructor(t){this.comparator=t?(e,i)=>t(e,i)||z.comparator(e.key,i.key):(e,i)=>z.comparator(e.key,i.key),this.keyedMap=gn(),this.sortedSet=new nt(this.comparator)}static emptySet(t){return new Me(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Me)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,o=i.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new Me;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
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
 */class Ba{constructor(){this.W_=new nt(z.comparator)}track(t){const e=t.doc.key,i=this.W_.get(e);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(e,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(e):t.type===1&&i.type===2?this.W_=this.W_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):q():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,i)=>{t.push(i)}),t}}class He{constructor(t,e,i,r,o,a,l,u,h){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,i,r,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new He(t,e,Me.emptySet(e),a,i,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Mi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==i[r].type||!e[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class Af{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class _f{constructor(){this.queries=La(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const r=U(e),o=r.queries;r.queries=La(),o.forEach((a,l)=>{for(const u of l.j_)u.onError(i)})})(this,new F(k.ABORTED,"Firestore shutting down"))}}function La(){return new Ge(n=>Sl(n),Mi)}async function Ts(n,t){const e=U(n);let i=3;const r=t.query;let o=e.queries.get(r);o?!o.H_()&&t.J_()&&(i=2):(o=new Af,i=t.J_()?0:1);try{switch(i){case 0:o.z_=await e.onListen(r,!0);break;case 1:o.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(a){const l=xs(a,`Initialization of query '${ke(t.query)}' failed`);return void t.onError(l)}e.queries.set(r,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Cs(e)}async function Rs(n,t){const e=U(n),i=t.query;let r=3;const o=e.queries.get(i);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?r=t.J_()?0:1:!o.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function Ef(n,t){const e=U(n);let i=!1;for(const r of t){const o=r.query,a=e.queries.get(o);if(a){for(const l of a.j_)l.X_(r)&&(i=!0);a.z_=r}}i&&Cs(e)}function bf(n,t,e){const i=U(n),r=i.queries.get(t);if(r)for(const o of r.j_)o.onError(e);i.queries.delete(t)}function Cs(n){n.Y_.forEach(t=>{t.next()})}var Zr,Ma;(Ma=Zr||(Zr={})).ea="default",Ma.Cache="cache";class Ps{constructor(t,e,i){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new He(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const i=e!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=He.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Zr.Cache}}/**
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
 */class lc{constructor(t){this.key=t}}class cc{constructor(t){this.key=t}}class If{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=Vl(t),this.Ra=new Me(this.Aa)}get Va(){return this.Ta}ma(t,e){const i=e?e.fa:new Ba,r=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((p,g)=>{const _=r.get(p),C=Oi(this.query,g)?g:null,N=!!_&&this.mutatedKeys.has(_.key),T=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let y=!1;_&&C?_.data.isEqual(C.data)?N!==T&&(i.track({type:3,doc:C}),y=!0):this.ga(_,C)||(i.track({type:2,doc:C}),y=!0,(u&&this.Aa(C,u)>0||h&&this.Aa(C,h)<0)&&(l=!0)):!_&&C?(i.track({type:0,doc:C}),y=!0):_&&!C&&(i.track({type:1,doc:_}),y=!0,(u||h)&&(l=!0)),y&&(C?(a=a.add(C),o=T?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),i.track({type:1,doc:p})}return{Ra:a,fa:i,ns:l,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,r){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,g)=>function(C,N){const T=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return T(C)-T(N)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(i),r=r!=null&&r;const l=e&&!r?this.ya():[],u=this.da.size===0&&this.current&&!r?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new He(this.query,t.Ra,o,a,t.mutatedKeys,u===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ba,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=W(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const e=[];return t.forEach(i=>{this.da.has(i)||e.push(new cc(i))}),this.da.forEach(i=>{t.has(i)||e.push(new lc(i))}),e}ba(t){this.Ta=t.Ts,this.da=W();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return He.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wf{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class xf{constructor(t){this.key=t,this.va=!1}}class Tf{constructor(t,e,i,r,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ge(l=>Sl(l),Mi),this.Ma=new Map,this.xa=new Set,this.Oa=new nt(z.comparator),this.Na=new Map,this.La=new ys,this.Ba={},this.ka=new Map,this.qa=qe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Rf(n,t,e=!0){const i=mc(n);let r;const o=i.Fa.get(t);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.Da()):r=await uc(i,t,e,!0),r}async function Cf(n,t){const e=mc(n);await uc(e,t,!0,!1)}async function uc(n,t,e,i){const r=await Kp(n.localStore,Ot(t)),o=r.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return i&&(l=await Pf(n,t,o,a==="current",r.resumeToken)),n.isPrimaryClient&&e&&nc(n.remoteStore,r),l}async function Pf(n,t,e,i,r){n.Ka=(g,_,C)=>async function(T,y,R,V){let L=y.view.ma(R);L.ns&&(L=await Va(T.localStore,y.query,!1).then(({documents:E})=>y.view.ma(E,L)));const S=V&&V.targetChanges.get(y.targetId),M=V&&V.targetMismatches.get(y.targetId)!=null,D=y.view.applyChanges(L,T.isPrimaryClient,S,M);return Fa(T,y.targetId,D.wa),D.snapshot}(n,g,_,C);const o=await Va(n.localStore,t,!0),a=new If(t,o.Ts),l=a.ma(o.documents),u=Ln.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",r),h=a.applyChanges(l,n.isPrimaryClient,u);Fa(n,e,h.wa);const p=new wf(t,e,a);return n.Fa.set(t,p),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),h.snapshot}async function Sf(n,t,e){const i=U(n),r=i.Fa.get(t),o=i.Ma.get(r.targetId);if(o.length>1)return i.Ma.set(r.targetId,o.filter(a=>!Mi(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Jr(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),e&&_s(i.remoteStore,r.targetId),Yr(i,r.targetId)}).catch(kn)):(Yr(i,r.targetId),await Jr(i.localStore,r.targetId,!0))}async function Vf(n,t){const e=U(n),i=e.Fa.get(t),r=e.Ma.get(i.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),_s(e.remoteStore,i.targetId))}async function Df(n,t,e){const i=Ff(n);try{const r=await function(a,l){const u=U(a),h=at.now(),p=l.reduce((C,N)=>C.add(N.key),W());let g,_;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=Xt(),T=W();return u.cs.getEntries(C,p).next(y=>{N=y,N.forEach((R,V)=>{V.isValidDocument()||(T=T.add(R))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,N)).next(y=>{g=y;const R=[];for(const V of l){const L=Yh(V,g.get(V.key).overlayedDocument);L!=null&&R.push(new ce(V.key,L,bl(L.value.mapValue),It.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,R,l)}).next(y=>{_=y;const R=y.applyToLocalDocumentSet(g,T);return u.documentOverlayCache.saveOverlays(C,y.batchId,R)})}).then(()=>({batchId:_.batchId,changes:kl(g)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new nt(K)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(i,r.batchId,e),await On(i,r.changes),await Wi(i.remoteStore)}catch(r){const o=xs(r,"Failed to persist write");e.reject(o)}}async function dc(n,t){const e=U(n);try{const i=await Qp(e.localStore,t);t.targetChanges.forEach((r,o)=>{const a=e.Na.get(o);a&&(X(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.va=!0:r.modifiedDocuments.size>0?X(a.va):r.removedDocuments.size>0&&(X(a.va),a.va=!1))}),await On(e,i,t)}catch(i){await kn(i)}}function Oa(n,t,e){const i=U(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const r=[];i.Fa.forEach((o,a)=>{const l=a.view.Z_(t);l.snapshot&&r.push(l.snapshot)}),function(a,l){const u=U(a);u.onlineState=l;let h=!1;u.queries.forEach((p,g)=>{for(const _ of g.j_)_.Z_(l)&&(h=!0)}),h&&Cs(u)}(i.eventManager,t),r.length&&i.Ca.d_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function kf(n,t,e){const i=U(n);i.sharedClientState.updateQueryState(t,"rejected",e);const r=i.Na.get(t),o=r&&r.key;if(o){let a=new nt(z.comparator);a=a.insert(o,At.newNoDocument(o,H.min()));const l=W().add(o),u=new qi(H.min(),new Map,new nt(K),a,l);await dc(i,u),i.Oa=i.Oa.remove(o),i.Na.delete(t),Ss(i)}else await Jr(i.localStore,t,!1).then(()=>Yr(i,t,e)).catch(kn)}async function Nf(n,t){const e=U(n),i=t.batch.batchId;try{const r=await Wp(e.localStore,t);pc(e,i,null),hc(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await On(e,r)}catch(r){await kn(r)}}async function Bf(n,t,e){const i=U(n);try{const r=await function(a,l){const u=U(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(X(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(i.localStore,t);pc(i,t,e),hc(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await On(i,r)}catch(r){await kn(r)}}function hc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function pc(n,t,e){const i=U(n);let r=i.Ba[i.currentUser.toKey()];if(r){const o=r.get(t);o&&(e?o.reject(e):o.resolve(),r=r.remove(t)),i.Ba[i.currentUser.toKey()]=r}}function Yr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Ma.get(t))n.Fa.delete(i),e&&n.Ca.$a(i,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(i=>{n.La.containsKey(i)||fc(n,i)})}function fc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(_s(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Ss(n))}function Fa(n,t,e){for(const i of e)i instanceof lc?(n.La.addReference(i.key,t),Lf(n,i)):i instanceof cc?(j("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,t),n.La.containsKey(i.key)||fc(n,i.key)):q()}function Lf(n,t){const e=t.key,i=e.path.canonicalString();n.Oa.get(e)||n.xa.has(i)||(j("SyncEngine","New document in limbo: "+e),n.xa.add(i),Ss(n))}function Ss(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new z(tt.fromString(t)),i=n.qa.next();n.Na.set(i,new xf(e)),n.Oa=n.Oa.insert(e,i),nc(n.remoteStore,new ne(Ot(Li(e.path)),i,"TargetPurposeLimboResolution",as.oe))}}async function On(n,t,e){const i=U(n),r=[],o=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((l,u)=>{a.push(i.Ka(u,t,e).then(h=>{var p;if((h||e)&&i.isPrimaryClient){const g=h?!h.fromCache:(p=e==null?void 0:e.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;i.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){r.push(h);const g=As.Wi(u.targetId,h);o.push(g)}}))}),await Promise.all(a),i.Ca.d_(r),await async function(u,h){const p=U(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>B.forEach(h,_=>B.forEach(_.$i,C=>p.persistence.referenceDelegate.addReference(g,_.targetId,C)).next(()=>B.forEach(_.Ui,C=>p.persistence.referenceDelegate.removeReference(g,_.targetId,C)))))}catch(g){if(!Nn(g))throw g;j("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const C=p.os.get(_),N=C.snapshotVersion,T=C.withLastLimboFreeSnapshotVersion(N);p.os=p.os.insert(_,T)}}}(i.localStore,o))}async function Mf(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){j("SyncEngine","User change. New user:",t.toKey());const i=await Zl(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(l=>{l.forEach(u=>{u.reject(new F(k.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await On(e,i.hs)}}function Of(n,t){const e=U(n),i=e.Na.get(t);if(i&&i.va)return W().add(i.key);{let r=W();const o=e.Ma.get(t);if(!o)return r;for(const a of o){const l=e.Fa.get(a);r=r.unionWith(l.view.Va)}return r}}function mc(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=dc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Of.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kf.bind(null,t),t.Ca.d_=Ef.bind(null,t.eventManager),t.Ca.$a=bf.bind(null,t.eventManager),t}function Ff(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Nf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bf.bind(null,t),t}class Pi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Hi(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Up(this.persistence,new qp,t.initialUser,this.serializer)}Ga(t){return new Fp(vs.Zr,this.serializer)}Wa(t){return new Jp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pi.provider={build:()=>new Pi};class ts{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Oa(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mf.bind(null,this.syncEngine),await vf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _f}()}createDatastore(t){const e=Hi(t.databaseInfo.databaseId),i=function(o){return new ef(o)}(t.databaseInfo);return function(o,a,l,u){return new sf(o,a,l,u)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,r,o,a,l){return new af(i,r,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Oa(this.syncEngine,e,0),function(){return ka.D()?new ka:new Zp}())}createSyncEngine(t,e){return function(r,o,a,l,u,h,p){const g=new Tf(r,o,a,l,u,h);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const o=U(r);j("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Mn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ts.provider={build:()=>new ts};/**
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
 */class Vs{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Kt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class jf{constructor(t,e,i,r,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=r,this.user=vt.UNAUTHENTICATED,this.clientId=Al.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async a=>{j("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(j("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=xs(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Pr(n,t){n.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await Zl(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ja(n,t){n.asyncQueue.verifyOperationInProgress();const e=await zf(n);j("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Na(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Na(t.remoteStore,r)),n._onlineComponents=t}async function zf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===k.FAILED_PRECONDITION||r.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Oe("Error using user provided cache. Falling back to memory cache: "+e),await Pr(n,new Pi)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Pr(n,new Pi);return n._offlineComponents}async function gc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await ja(n,n._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await ja(n,new ts))),n._onlineComponents}function qf(n){return gc(n).then(t=>t.syncEngine)}async function Si(n){const t=await gc(n),e=t.eventManager;return e.onListen=Rf.bind(null,t.syncEngine),e.onUnlisten=Sf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Cf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vf.bind(null,t.syncEngine),e}function Hf(n,t,e={}){const i=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,h){const p=new Vs({next:_=>{p.Za(),a.enqueueAndForget(()=>Rs(o,g));const C=_.docs.has(l);!C&&_.fromCache?h.reject(new F(k.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&_.fromCache&&u&&u.source==="server"?h.reject(new F(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Ps(Li(l.path),p,{includeMetadataChanges:!0,_a:!0});return Ts(o,g)}(await Si(n),n.asyncQueue,t,e,i)),i.promise}function Uf(n,t,e={}){const i=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,h){const p=new Vs({next:_=>{p.Za(),a.enqueueAndForget(()=>Rs(o,g)),_.fromCache&&u.source==="server"?h.reject(new F(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Ps(l,p,{includeMetadataChanges:!0,_a:!0});return Ts(o,g)}(await Si(n),n.asyncQueue,t,e,i)),i.promise}/**
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
 */function yc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const za=new Map;/**
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
 */function vc(n,t,e){if(!e)throw new F(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Wf(n,t,e,i){if(t===!0&&i===!0)throw new F(k.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function qa(n){if(!z.isDocumentKey(n))throw new F(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ha(n){if(z.isDocumentKey(n))throw new F(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q()}function wt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new F(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Qi(n);throw new F(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Ua{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new F(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Wf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yc((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class $i{constructor(t,e,i,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ua({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new F(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ua(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ah;switch(i.type){case"firstParty":return new dh(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new F(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=za.get(e);i&&(j("ComponentProvider","Removing Datastore"),za.delete(e),i.terminate())}(this),Promise.resolve()}}function Qf(n,t,e,i={}){var r;const o=(n=wt(n,$i))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Oe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),i.mockUserToken){let l,u;if(typeof i.mockUserToken=="string")l=i.mockUserToken,u=vt.MOCK_USER;else{l=ju(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new F(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new vt(h)}n._authCredentials=new lh(new vl(l,u))}}/**
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
 */class ue{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ue(this.firestore,t,this._query)}}class _t{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new se(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}}class se extends ue{constructor(t,e,i){super(t,e,Li(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new z(t))}withConverter(t){return new se(this.firestore,t,this._path)}}function Tt(n,t,...e){if(n=Nt(n),vc("collection","path",t),n instanceof $i){const i=tt.fromString(t,...e);return Ha(i),new se(n,null,i)}{if(!(n instanceof _t||n instanceof se))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(tt.fromString(t,...e));return Ha(i),new se(n.firestore,null,i)}}function qt(n,t,...e){if(n=Nt(n),arguments.length===1&&(t=Al.newId()),vc("doc","path",t),n instanceof $i){const i=tt.fromString(t,...e);return qa(i),new _t(n,null,new z(i))}{if(!(n instanceof _t||n instanceof se))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(tt.fromString(t,...e));return qa(i),new _t(n.firestore,n instanceof se?n.converter:null,new z(i))}}/**
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
 */class Wa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new tc(this,"async_queue_retry"),this.Vu=()=>{const i=Cr();i&&j("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=Cr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Cr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new $t;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Nn(t))throw t;j("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const r=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw Kt("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=ws.createAndSchedule(this,t,e,i,o=>this.yu(o));return this.Tu.push(r),r}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Qa(n){return function(e,i){if(typeof e!="object"||e===null)return!1;const r=e;for(const o of i)if(o in r&&typeof r[o]=="function")return!0;return!1}(n,["next","error","complete"])}class zt extends $i{constructor(t,e,i,r){super(t,e,i,r),this.type="firestore",this._queue=new Wa,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Wa(t),this._firestoreClient=void 0,await t}}}function $f(n,t){const e=typeof n=="object"?n:Kd(),i=typeof n=="string"?n:"(default)",r=Wd(e,"firestore").getImmediate({identifier:i});if(!r._initialized){const o=Ou("firestore");o&&Qf(r,...o)}return r}function Fn(n){if(n._terminated)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gf(n),n._firestoreClient}function Gf(n){var t,e,i;const r=n._freezeSettings(),o=function(l,u,h,p){return new wh(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,yc(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new jf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ue(pt.fromBase64String(t))}catch(e){throw new F(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ue(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class jn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new F(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Gi{constructor(t){this._methodName=t}}/**
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
 */class Ds{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
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
 */class ks{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,r){if(i.length!==r.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==r[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Kf=/^__.*__$/;class Xf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new Bn(t,this.data,e,this.fieldTransforms)}}class Ac{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new ce(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function _c(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Ns{constructor(t,e,i,r,o,a){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=r,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Ns(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:i,xu:!1});return r.Ou(t),r}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:i,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Vi(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(_c(this.Cu)&&Kf.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Jf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Hi(t)}Qu(t,e,i,r=!1){return new Ns({Cu:t,methodName:e,qu:i,path:dt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zn(n){const t=n._freezeSettings(),e=Hi(n._databaseId);return new Jf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Bs(n,t,e,i,r,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,r);Ms("Data must be an object, but it was:",a,i);const l=Ic(i,a);let u,h;if(o.merge)u=new Pt(a.fieldMask),h=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const g of o.mergeFields){const _=es(t,g,e);if(!a.contains(_))throw new F(k.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);xc(p,_)||p.push(_)}u=new Pt(p),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new Xf(new xt(l),u,h)}class Ki extends Gi{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ki}}class Ls extends Gi{_toFieldTransform(t){return new Kh(t.path,new Sn)}isEqual(t){return t instanceof Ls}}function Ec(n,t,e,i){const r=n.Qu(1,t,e);Ms("Data must be an object, but it was:",r,i);const o=[],a=xt.empty();Ie(i,(u,h)=>{const p=Os(t,u,e);h=Nt(h);const g=r.Nu(p);if(h instanceof Ki)o.push(p);else{const _=qn(h,g);_!=null&&(o.push(p),a.set(p,_))}});const l=new Pt(o);return new Ac(a,l,r.fieldTransforms)}function bc(n,t,e,i,r,o){const a=n.Qu(1,t,e),l=[es(t,i,e)],u=[r];if(o.length%2!=0)throw new F(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<o.length;_+=2)l.push(es(t,o[_])),u.push(o[_+1]);const h=[],p=xt.empty();for(let _=l.length-1;_>=0;--_)if(!xc(h,l[_])){const C=l[_];let N=u[_];N=Nt(N);const T=a.Nu(C);if(N instanceof Ki)h.push(C);else{const y=qn(N,T);y!=null&&(h.push(C),p.set(C,y))}}const g=new Pt(h);return new Ac(p,g,a.fieldTransforms)}function Zf(n,t,e,i=!1){return qn(e,n.Qu(i?4:3,t))}function qn(n,t){if(wc(n=Nt(n)))return Ms("Unsupported field value:",t,n),Ic(n,t);if(n instanceof Gi)return function(i,r){if(!_c(r.Cu))throw r.Bu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,r){const o=[];let a=0;for(const l of i){let u=qn(l,r.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,t)}return function(i,r){if((i=Nt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Qh(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=at.fromDate(i);return{timestampValue:Ri(r.serializer,o)}}if(i instanceof at){const o=new at(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ri(r.serializer,o)}}if(i instanceof Ds)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ue)return{bytesValue:Wl(r.serializer,i._byteString)};if(i instanceof _t){const o=r.databaseId,a=i.firestore._databaseId;if(!a.isEqual(o))throw r.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:gs(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof ks)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ps(l.serializer,u)})}}}}}}(i,r);throw r.Bu(`Unsupported field value: ${Qi(i)}`)}(n,t)}function Ic(n,t){const e={};return _l(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ie(n,(i,r)=>{const o=qn(r,t.Mu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function wc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof at||n instanceof Ds||n instanceof Ue||n instanceof _t||n instanceof Gi||n instanceof ks)}function Ms(n,t,e){if(!wc(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const i=Qi(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function es(n,t,e){if((t=Nt(t))instanceof jn)return t._internalPath;if(typeof t=="string")return Os(n,t);throw Vi("Field path arguments must be of type string or ",n,!1,void 0,e)}const Yf=new RegExp("[~\\*/\\[\\]]");function Os(n,t,e){if(t.search(Yf)>=0)throw Vi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new jn(...t.split("."))._internalPath}catch{throw Vi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Vi(n,t,e,i,r){const o=i&&!i.isEmpty(),a=r!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${i}`),a&&(u+=` in document ${r}`),u+=")"),new F(k.INVALID_ARGUMENT,l+n+u)}function xc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Tc{constructor(t,e,i,r,o){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new tm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Fs("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class tm extends Tc{data(){return super.data()}}function Fs(n,t){return typeof t=="string"?Os(n,t):t instanceof jn?t._internalPath:t._delegate._internalPath}/**
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
 */function Rc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class js{}class Cc extends js{}function Xi(n,t,...e){let i=[];t instanceof js&&i.push(t),i=i.concat(e),function(o){const a=o.filter(u=>u instanceof qs).length,l=o.filter(u=>u instanceof zs).length;if(a>1||a>0&&l>0)throw new F(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)n=r._apply(n);return n}class zs extends Cc{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new zs(t,e,i)}_apply(t){const e=this._parse(t);return Pc(t._query,e),new ue(t.firestore,t.converter,Wr(t._query,e))}_parse(t){const e=zn(t.firestore);return function(o,a,l,u,h,p,g){let _;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new F(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Ga(g,p);const C=[];for(const N of g)C.push($a(u,o,N));_={arrayValue:{values:C}}}else _=$a(u,o,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Ga(g,p),_=Zf(l,a,g,p==="in"||p==="not-in");return ot.create(h,p,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class qs extends js{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qs(t,e)}_parse(t){const e=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return e.length===1?e[0]:Mt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,o){let a=r;const l=o.getFlattenedFilters();for(const u of l)Pc(a,u),a=Wr(a,u)}(t._query,e),new ue(t.firestore,t.converter,Wr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hs extends Cc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Hs(t,e)}_apply(t){const e=function(r,o,a){if(r.startAt!==null)throw new F(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new F(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pn(o,a)}(t._query,this._field,this._direction);return new ue(t.firestore,t.converter,function(r,o){const a=r.explicitOrderBy.concat([o]);return new $e(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function Ji(n,t="asc"){const e=t,i=Fs("orderBy",n);return Hs._create(i,e)}function $a(n,t,e){if(typeof(e=Nt(e))=="string"){if(e==="")throw new F(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pl(t)&&e.indexOf("/")!==-1)throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(tt.fromString(e));if(!z.isDocumentKey(i))throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return fa(n,new z(i))}if(e instanceof _t)return fa(n,e._key);throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qi(e)}.`)}function Ga(n,t){if(!Array.isArray(n)||n.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Pc(n,t){const e=function(r,o){for(const a of r)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class em{convertValue(t,e="none"){switch(be(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return Ie(t,(r,o)=>{i[r]=this.convertValue(o,e)}),i}convertVectorValue(t){var e,i,r;const o=(r=(i=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(a=>rt(a.doubleValue));return new ks(o)}convertGeoPoint(t){return new Ds(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=cs(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Tn(t));default:return null}}convertTimestamp(t){const e=ae(t);return new at(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=tt.fromString(t);X(Jl(i));const r=new Rn(i.get(1),i.get(3)),o=new z(i.popFirst(5));return r.isEqual(e)||Kt(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Us(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}/**
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
 */class vn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Sc extends Tc{constructor(t,e,i,r,o,a){super(t,e,i,r,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new _i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(Fs("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class _i extends Sc{data(t={}){return super.data(t)}}class Vc{constructor(t,e,i,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new vn(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new _i(this._firestore,this._userDataWriter,i.key,i,new vn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const u=new _i(r._firestore,r._userDataWriter,l.doc.key,l.doc,new vn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new _i(r._firestore,r._userDataWriter,l.doc.key,l.doc,new vn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,p=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:nm(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function Dc(n){n=wt(n,_t);const t=wt(n.firestore,zt);return Hf(Fn(t),n._key).then(e=>Bc(t,n,e))}class Ws extends em{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _t(this.firestore,null,e)}}function Hn(n){n=wt(n,ue);const t=wt(n.firestore,zt),e=Fn(t),i=new Ws(t);return Rc(n._query),Uf(e,n._query).then(r=>new Vc(t,i,n,r))}function Ka(n,t,e){n=wt(n,_t);const i=wt(n.firestore,zt),r=Us(n.converter,t,e);return Un(i,[Bs(zn(i),"setDoc",n._key,r,n.converter!==null,e).toMutation(n._key,It.none())])}function Xe(n,t,e,...i){n=wt(n,_t);const r=wt(n.firestore,zt),o=zn(r);let a;return a=typeof(t=Nt(t))=="string"||t instanceof jn?bc(o,"updateDoc",n._key,t,e,i):Ec(o,"updateDoc",n._key,t),Un(r,[a.toMutation(n._key,It.exists(!0))])}function kc(n){return Un(wt(n.firestore,zt),[new zi(n._key,It.none())])}function Nc(n,t){const e=wt(n.firestore,zt),i=qt(n),r=Us(n.converter,t);return Un(e,[Bs(zn(n.firestore),"addDoc",i._key,r,n.converter!==null,{}).toMutation(i._key,It.exists(!1))]).then(()=>i)}function Je(n,...t){var e,i,r;n=Nt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Qa(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Qa(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(i=g.error)===null||i===void 0?void 0:i.bind(g),t[a+2]=(r=g.complete)===null||r===void 0?void 0:r.bind(g)}let u,h,p;if(n instanceof _t)h=wt(n.firestore,zt),p=Li(n._key.path),u={next:g=>{t[a]&&t[a](Bc(h,n,g))},error:t[a+1],complete:t[a+2]};else{const g=wt(n,ue);h=wt(g.firestore,zt),p=g._query;const _=new Ws(h);u={next:C=>{t[a]&&t[a](new Vc(h,_,g,C))},error:t[a+1],complete:t[a+2]},Rc(n._query)}return function(_,C,N,T){const y=new Vs(T),R=new Ps(C,y,N);return _.asyncQueue.enqueueAndForget(async()=>Ts(await Si(_),R)),()=>{y.Za(),_.asyncQueue.enqueueAndForget(async()=>Rs(await Si(_),R))}}(Fn(h),p,l,u)}function Un(n,t){return function(i,r){const o=new $t;return i.asyncQueue.enqueueAndForget(async()=>Df(await qf(i),r,o)),o.promise}(Fn(n),t)}function Bc(n,t,e){const i=e.docs.get(t._key),r=new Ws(n);return new Sc(n,r,t._key,i,new vn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class im{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=zn(t)}set(t,e,i){this._verifyNotCommitted();const r=Sr(t,this._firestore),o=Us(r.converter,e,i),a=Bs(this._dataReader,"WriteBatch.set",r._key,o,r.converter!==null,i);return this._mutations.push(a.toMutation(r._key,It.none())),this}update(t,e,i,...r){this._verifyNotCommitted();const o=Sr(t,this._firestore);let a;return a=typeof(e=Nt(e))=="string"||e instanceof jn?bc(this._dataReader,"WriteBatch.update",o._key,e,i,r):Ec(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,It.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Sr(t,this._firestore);return this._mutations=this._mutations.concat(new zi(e._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Sr(n,t){if((n=Nt(n)).firestore!==t)throw new F(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Lc(){return new Ls("serverTimestamp")}/**
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
 */function Qs(n){return Fn(n=wt(n,zt)),new im(n,t=>Un(n,t))}(function(t,e=!0){(function(r){Qe=r})(Gd),Ii(new In("firestore",(i,{instanceIdentifier:r,options:o})=>{const a=i.getProvider("app").getImmediate(),l=new zt(new ch(i.getProvider("auth-internal")),new ph(i.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(h.options.projectId,p)}(a,r),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Le(ca,"4.7.3",t),Le(ca,"4.7.3","esm2017")})();const rm={apiKey:"AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",authDomain:"feria-vinos-sucovi-2027.firebaseapp.com",databaseURL:"https://feria-vinos-sucovi-2027-default-rtdb.firebaseio.com",projectId:"feria-vinos-sucovi-2027",storageBucket:"feria-vinos-sucovi-2027.firebasestorage.app",messagingSenderId:"1686119758",appId:"1:1686119758:web:2c3c6d96e36f1276052a1f",measurementId:"G-VRMTQ3SS7E"},sm=cl(rm),et=$f(sm),Ae=[{id:0,key:"368813",nombre:"Sucovi",region:"Pruebas / Bebidas",pass:"stand00"},{id:1,key:"d48429",nombre:"Alta Vista",region:"Mendoza",pass:"stand01"},{id:2,key:"ba356c",nombre:"Andillian",region:"Mendoza",pass:"stand02"},{id:3,key:"451e62",nombre:"Ante Nada",region:"Mendoza",pass:"stand03"},{id:4,key:"835c2d",nombre:"Bodega Benegas",region:"Mendoza",pass:"stand04"},{id:5,key:"e45a28",nombre:"Bianchi",region:"San Rafael",pass:"stand05"},{id:6,key:"12ac1c",nombre:"Catena Zapata",region:"Luján de Cuyo",pass:"stand06"},{id:7,key:"18abc3",nombre:"Bodegas Bórbore",region:"Mendoza (1936)",pass:"stand07"},{id:8,key:"452b71",nombre:"Fábula Wines",region:"Mendoza",pass:"stand08"},{id:9,key:"0c55a5",nombre:"Finca Iral",region:"Mendoza",pass:"stand09"},{id:10,key:"5cb108",nombre:"Giménez Riili",region:"Mendoza",pass:"stand10"},{id:11,key:"27f372",nombre:"Jorge Rubio",region:"Mendoza",pass:"stand11"},{id:12,key:"a9d27f",nombre:"La Coste de los Andes",region:"Mendoza",pass:"stand12"},{id:13,key:"b5be6e",nombre:"Las Perdices",region:"Mendoza",pass:"stand13"},{id:14,key:"7da93b",nombre:"Lorenzo de Agrelo",region:"Mendoza",pass:"stand14"},{id:15,key:"f52ab4",nombre:"Pannunzio Wines",region:"Mendoza",pass:"stand15"},{id:16,key:"a32dd6",nombre:"Bodega Patritti",region:"Mendoza",pass:"stand16"},{id:17,key:"175358",nombre:"Rosell Boher",region:"Mendoza",pass:"stand17"},{id:18,key:"4a2b00",nombre:"Valle de la Puerta",region:"La Rioja",pass:"stand18"}];async function Di(n){return await Nc(Tt(et,"invitados"),{...n,creadoEn:Lc()})}async function ye(n,t){await Xe(qt(et,"invitados",n),t)}function Wn(n){return Je(Xi(Tt(et,"invitados"),Ji("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}async function ki(n){const e=(await Hn(Tt(et,"invitados"))).docs.find(i=>i.data().token===n);return e?{fireId:e.id,...e.data()}:null}async function om(n){const e=(await Hn(Tt(et,"invitados"))).docs.find(i=>i.data().codigo===n);return e?{fireId:e.id,...e.data()}:null}async function Mc(n,t,e,i,r){const o=qt(et,"carritos",n,"items",String(t)),a=await Dc(o);if(a.exists()){const l=a.data(),u=l.items||[],h=u.findIndex(p=>p.key===i.key);h>=0?u[h]=i:u.push(i),await Ka(o,{standId:t,standNombre:e,items:u,retiro:r||l.retiro||"stand"})}else await Ka(o,{standId:t,standNombre:e,items:[i],retiro:r||"stand"})}async function $s(n,t,e){await Xe(qt(et,"carritos",n,"items",String(t)),{retiro:e})}async function Ni(n,t,e){const i=qt(et,"carritos",n,"items",String(t)),r=await Dc(i);if(!r.exists())return;const o=(r.data().items||[]).filter(a=>a.key!==e);o.length?await Xe(i,{items:o}):await kc(i)}async function ns(n){return(await Hn(Tt(et,"carritos",n,"items"))).docs.map(e=>({standId:e.id,...e.data()}))}function Gs(n,t){return Je(Tt(et,"carritos",n,"items"),e=>t(e.docs.map(i=>({standDocId:i.id,...i.data()}))))}async function Oc(n){const t=await Hn(Tt(et,"carritos",n,"items")),e=Qs(et);t.docs.forEach(i=>e.delete(i.ref)),await e.commit()}async function Fc(n,t){const e=Qs(et),i=[];return t.forEach(r=>{const o=qt(Tt(et,"pedidos"));i.push(o),e.set(o,{invFireId:n.fireId,invNombre:n.nombre+" "+n.apellido,invCodigo:n.codigo,standId:r.standId,standNombre:r.standNombre,items:r.items||[],total:(r.items||[]).reduce((a,l)=>a+(l.sub||0),0),retiro:r.retiro||"stand",estado:"pagado",creadoEn:Lc()})}),await e.commit(),i.map(r=>r.id)}function Zi(n){return Je(Xi(Tt(et,"pedidos"),Ji("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}function jc(n,t){return Je(Xi(Tt(et,"pedidos"),Ji("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>Number(i.standId)===Number(n))))}function zc(n,t){return Je(Xi(Tt(et,"pedidos"),Ji("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>i.invFireId===n)))}async function qc(n){await Xe(qt(et,"pedidos",n),{estado:"entregado"})}async function Hc(n,t){const e={pendiente:"pagado",pagado:"listo",listo:"entregado"};e[t]&&await Xe(qt(et,"pedidos",n),{estado:e[t]})}function Ks(n,t){return Je(Tt(et,"bodegas",String(n),"vinos"),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()}))))}async function Uc(n,t){return await Nc(Tt(et,"bodegas",String(n),"vinos"),t)}async function Wc(n,t,e){await Xe(qt(et,"bodegas",String(n),"vinos",t),e)}async function Qc(n,t){await kc(qt(et,"bodegas",String(n),"vinos",t))}async function $c(){const n=["invitados","pedidos"];for(const t of n){const e=await Hn(Tt(et,t)),i=Qs(et);e.docs.forEach(r=>i.delete(r.ref)),await i.commit()}}const Gc=Object.freeze(Object.defineProperty({__proto__:null,BODEGAS:Ae,actualizarInvitado:ye,actualizarRetiroStand:$s,actualizarVino:Wc,agregarAlCarrito:Mc,avanzarEstado:Hc,buscarInvitadoPorCodigo:om,buscarInvitadoPorToken:ki,crearInvitado:Di,crearPedidosDesdeCarrito:Fc,eliminarItemCarrito:Ni,eliminarVino:Qc,escucharCarrito:Gs,escucharInvitados:Wn,escucharPedidos:Zi,escucharPedidosPorInvitado:zc,escucharPedidosPorStand:jc,escucharVinos:Ks,guardarVino:Uc,leerCarrito:ns,limpiarDatosPrueba:$c,marcarEntregado:qc,vaciarCarrito:Oc},Symbol.toStringTag,{value:"Module"})),am="modulepreload",lm=function(n){return"/"+n},Xa={},Xs=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(e.map(u=>{if(u=lm(u),u in Xa)return;Xa[u]=!0;const h=u.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":am,h||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),h)return new Promise((_,C)=>{g.addEventListener("load",_),g.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},Js="data:image/png;base64,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";function kt({title:n,sub:t="",backHref:e="",backLabel:i="← Panel",actions:r=[]}={}){return`
    <div class="hdr">
      <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
        <img src="${Js}" alt="Sucovi 2027"
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
        ${r.join("")}
        ${e?`<a href="${e}" class="btn-back btn" style="font-size:11px;padding:5px 8px;white-space:nowrap">${i}</a>`:""}
      </div>
    </div>
    <div class="gold"></div>`}function is(n){return`
    <div style="background:linear-gradient(160deg,#1A3A5C 0%,#2C5F8A 60%,#3A7D44 100%);
                color:#fff;padding:20px 16px 16px;text-align:center">
      <img src="${Js}" alt="Sucovi 2027"
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
    <div class="gold"></div>`}function Ht(){if(document.getElementById("sucovi-styles"))return;const n=document.createElement("style");n.id="sucovi-styles",n.textContent=`
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
  `,document.head.appendChild(n)}async function cm(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Ja(n,t,e){await cm();const i=document.getElementById(n);if(i)try{const r=qrcode(0,"M");r.addData(String(t)),r.make();const o=r.getModuleCount(),a=e/o;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let u=0;u<o;u++)for(let h=0;h<o;h++)r.isDark(u,h)&&l.fillRect(h*a,u*a,a,a)}catch(r){console.error("QR error:",r)}}const mi=n=>Number(n).toLocaleString("es-AR"),Za=()=>Math.random().toString(36).slice(2,10).toUpperCase(),Ya=n=>"INV-"+String(n).padStart(4,"0");function tl(n){return{pendiente:'<span class="badge b-pend">Pendiente</span>',pagado:'<span class="badge b-pago">Bono pagado</span>',ingresado:'<span class="badge b-ingr">Ingresó</span>',invalidado:'<span class="badge b-inv">Invalidado</span>'}[n]||""}const um={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},dm={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"};function hm(n){Ht();let t=[],e=[],i="inv",r=null;n.innerHTML=kt({title:"Sucovi 2027",sub:"20 jun 2026 · 19:30 hs · Roma 656, Olivos"})+`
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
    </div>`,Wn(T=>{t=T,i==="inv"&&o(),i==="res"&&g()}),Zi(T=>{e=T,i==="ped"&&h(),i==="res"&&g()}),window._aTab=(T,y)=>{var V;i=T,document.querySelectorAll(".nav button").forEach(L=>L.classList.remove("on")),y.classList.add("on");const R={inv:o,reg:a,excel:l,ped:h,stands:p,res:g,config:_};(V=R[T])==null||V.call(R)};function o(){const T=document.getElementById("tab-content");document.getElementById("buscar-inv")||(T.innerHTML=`
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
        <div class="card" id="lista-inv"></div>`),window._fInv=()=>{var S,M;const y=(((S=document.getElementById("buscar-inv"))==null?void 0:S.value)||"").toLowerCase(),R=((M=document.getElementById("fil-est"))==null?void 0:M.value)||"",V=t.filter(D=>(D.nombre+" "+D.apellido+" "+(D.codigo||"")+" "+(D.familia||"")).toLowerCase().includes(y)&&(!R||D.estado===R)),L=document.getElementById("lista-inv");if(L){if(!V.length){L.innerHTML='<div class="empty">Sin resultados</div>';return}L.innerHTML=V.map(D=>{var E,m;return`
        <div class="row" style="${D.estado==="invalidado"?"opacity:.5":""}">
          <div class="avatar">${((E=D.nombre)==null?void 0:E[0])||"?"}${((m=D.apellido)==null?void 0:m[0])||""}</div>
          <div style="flex:1;min-width:80px">
            <div style="font-size:13px;font-weight:500">${D.nombre} ${D.apellido}</div>
            <div style="font-size:11px;color:#888">${D.tel}${D.familia?" · "+D.familia:""}</div>
          </div>
          <div style="font-size:11px;color:#aaa">${D.codigo||""}</div>
          ${tl(D.estado)}
          <div style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">
            <button class="btn" style="padding:4px 8px;font-size:11px" onclick="window._abrirWA('${D.fireId}')">📱 WA</button>
            <button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._descargarQR('${D.fireId}')">📥 QR</button>
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInv('${D.fireId}')">✏️</button>
            ${D.estado!=="invalidado"?`<button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D" onclick="window._invalidar('${D.fireId}','${D.nombre} ${D.apellido}')">✕ Invalidar</button>`:`<button class="btn" style="padding:4px 8px;font-size:11px;color:#3B6D11;border-color:#3B6D11" onclick="window._reactivar('${D.fireId}')">↩ Reactivar</button>`}
          </div>
        </div>`}).join("")}},window._fInv()}window._invalidar=async(T,y)=>{confirm(`¿Invalidar a ${y}?`)&&await ye(T,{estado:"invalidado"})},window._reactivar=async T=>await ye(T,{estado:"pendiente"});function a(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}window._registrar=async()=>{const T=document.getElementById("rn").value.trim(),y=document.getElementById("ra").value.trim(),R=document.getElementById("rt").value.trim(),V=document.querySelector('input[name="rp"]:checked').value,L=document.getElementById("reg-msg");if(!T||!y||!R){L.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}L.innerHTML='<span style="color:#888">Guardando...</span>';try{const S=Ya(t.length+1),M=Za(),D=await Di({nombre:T,apellido:y,tel:R,...document.getElementById("re").value.trim()&&{email:document.getElementById("re").value.trim()},...document.getElementById("rf").value.trim()&&{familia:document.getElementById("rf").value.trim()},...document.getElementById("rc").value.trim()&&{comentarios:document.getElementById("rc").value.trim()},estado:V,codigo:S,token:M});L.innerHTML=`<span style="color:#3B6D11">✓ ${T} ${y} (${S})</span>`,["rn","ra","rt","re","rf","rc"].forEach(E=>{const m=document.getElementById(E);m&&(m.value="")}),V==="pagado"&&setTimeout(()=>window._abrirWA(D.id),600)}catch(S){L.innerHTML=`<span style="color:#A32D2D">Error: ${S.message}</span>`}};function l(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}let u=[];window._procesarExcel=async T=>{const y=T.files[0];if(!y)return;const R=document.getElementById("excel-preview");R.innerHTML='<p style="font-size:12px;color:#888">Procesando...</p>';try{const V=await Xs(()=>import("https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs"),[]),L=await y.arrayBuffer(),S=V.read(L),M=S.Sheets[S.SheetNames[0]],D=V.utils.sheet_to_json(M,{header:1}),E=typeof D[0][0]=="string"&&D[0][0].toLowerCase().includes("nombre")?1:0;u=D.slice(E).filter(m=>m[0]&&m[1]&&m[2]).map(m=>({nombre:String(m[0]||"").trim(),apellido:String(m[1]||"").trim(),tel:String(m[2]||"").trim(),...m[3]?{email:String(m[3]).trim()}:{},...m[4]?{familia:String(m[4]).trim()}:{},...m[5]?{comentarios:String(m[5]).trim()}:{},estado:String(m[6]||"").toUpperCase()==="SI"?"pagado":"pendiente"})),R.innerHTML=`
        <p style="font-size:12px;color:#3B6D11;margin-bottom:8px">
          ✓ ${u.length} invitados detectados
        </p>
        <div style="max-height:200px;overflow-y:auto;border:.5px solid #e0d5c8;border-radius:8px">
          ${u.slice(0,5).map(m=>`
            <div style="padding:6px 10px;border-bottom:.5px solid #f0ebe4;font-size:12px">
              ${m.nombre} ${m.apellido} · ${m.tel} · <span class="badge ${m.estado==="pagado"?"b-pago":"b-pend"}">${m.estado==="pagado"?"Pagado":"Pendiente"}</span>
            </div>`).join("")}
          ${u.length>5?`<div style="padding:6px 10px;font-size:11px;color:#aaa">...y ${u.length-5} más</div>`:""}
        </div>`,document.getElementById("btn-importar").style.display="block"}catch(V){R.innerHTML=`<p style="color:#A32D2D;font-size:12px">Error al leer el archivo: ${V.message}</p>`}},window._importarExcel=async()=>{if(!u.length)return;const T=document.getElementById("btn-importar"),y=document.getElementById("excel-msg");T.disabled=!0,T.textContent="Importando...",y.innerHTML='<span style="color:#888">Procesando...</span>';let R=0,V=0;const L=t.length;for(let S=0;S<u.length;S++)try{const M=u[S];await Di({...M,codigo:Ya(L+S+1),token:Za()}),R++}catch{V++}y.innerHTML=`<span style="color:#3B6D11">✓ ${R} invitados importados${V?` (${V} errores)`:""}</span>`,T.style.display="none",u=[]};function h(){const T=document.getElementById("tab-content");if(!e.length){T.innerHTML='<div class="empty">Sin pedidos aún 🍷</div>';return}T.innerHTML=e.map(y=>{var R;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">#${(R=y.fireId)==null?void 0:R.slice(-4).toUpperCase()}</span>
        <div style="flex:1;min-width:90px">
          <div style="font-size:12px;font-weight:500">${y.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${y.standNombre}${y.retiro==="envio"?' · <span style="color:#5A1E99">Envío</span>':""}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:100px">${(y.items||[]).map(V=>V.desc).join(" · ")}</span>
        <span style="font-size:14px;font-weight:500">$${mi(y.total||0)}</span>
        <span class="badge ${dm[y.estado]}">${um[y.estado]}</span>
      </div>`}).join("")}function p(){const T=window.location.origin;document.getElementById("tab-content").innerHTML=`
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>QR de pedidos:</strong> se imprime en el stand — los clientes lo escanean con su QR de acceso.<br>
        <strong>Panel stand:</strong> para el personal de la bodega (ver pedidos + marcar entregas).<br>
        <strong>Carga vinos:</strong> para que cada bodega cargue su carta directamente.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${Ae.map(y=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${y.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${y.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${y.region}</div>
            <canvas id="qr-s${y.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="font-size:10px;color:#aaa;margin-bottom:8px;word-break:break-all">${T}/stand/${y.id}</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${T}/stand/${y.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <div style="display:flex;gap:4px">
                <a href="${T}/panel/${y.id}?key=${y.key}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none;flex:1;justify-content:center">Panel</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#185FA5;border-color:#185FA5"
                  onclick="navigator.clipboard?.writeText('${T}/panel/${y.id}?key=${y.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="display:flex;gap:4px">
                <a href="${T}/bodega/${y.id}/vinos?key=${y.key}" target="_blank" class="btn" style="font-size:11px;padding:5px;text-decoration:none;color:#3A7D44;border-color:#3A7D44;flex:1;justify-content:center">Vinos</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#3A7D44;border-color:#3A7D44"
                  onclick="navigator.clipboard?.writeText('${T}/bodega/${y.id}/vinos?key=${y.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="font-size:10px;color:#aaa;margin-top:2px">Pass: <strong>${y.pass}</strong></div>
            </div>
          </div>`).join("")}
      </div>`,Ae.forEach(y=>setTimeout(()=>Ja("qr-s"+y.id,`${T}/stand/${y.id}`,110),50))}function g(){const T=t.filter(M=>M.estado==="pagado").length,y=t.filter(M=>M.estado==="ingresado").length,R=(T+y)*35e3,V=e.reduce((M,D)=>M+(D.total||0),0),L={};e.forEach(M=>{L[M.standId]||(L[M.standId]={n:M.standNombre,t:0,c:0}),L[M.standId].t+=M.total||0,L[M.standId].c++});const S=Object.values(L).sort((M,D)=>D.t-M.t);document.getElementById("tab-content").innerHTML=`
      <div class="stats">
        ${[[t.filter(M=>M.estado!=="invalidado").length,"Invitados"],[T+y,"Con bono"],["$"+mi(R),"Bonos"],[e.length,"Pedidos"],["$"+mi(V),"Ventas"],[e.filter(M=>M.retiro==="envio").length,"Envíos"]].map(([M,D])=>`<div class="stat"><div class="v" style="font-size:${String(M).length>7?"13px":"20px"}">${M}</div><div class="l">${D}</div></div>`).join("")}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Ventas por bodega</p>
        ${S.length?S.map(M=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span style="font-weight:500">${M.n}</span><span style="color:#888">${M.c} ped.</span><span style="font-weight:500">$${mi(M.t)}</span>
          </div>`).join(""):'<div class="empty">Sin ventas aún</div>'}
      </div>`}function _(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">🔗 Links útiles</p>
        ${[["Registro público (para compartir con invitados)","/registro"],["Panel de caja","/caja"],["Control de puerta","/puerta"],["Logística / envíos","/logistica"]].map(([T,y])=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span>${T}</span>
            <a href="${y}" target="_blank" class="btn" style="padding:3px 8px;font-size:11px;color:#6B1C1C;border-color:#6B1C1C">Abrir</a>
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
Esta acción no se puede deshacer.`)||!confirm("Segunda confirmación: ¿borrar todos los datos de prueba?"))return;const T=document.getElementById("limpiar-msg");T.innerHTML='<span style="color:#888">Borrando...</span>';try{await $c(),T.innerHTML='<span style="color:#3B6D11">✓ Datos borrados correctamente</span>'}catch(y){T.innerHTML=`<span style="color:#A32D2D">Error: ${y.message}</span>`}},window._abrirWA=T=>{const y=t.find(M=>M.fireId===T);if(!y)return;r=T,document.getElementById("mw-tit").textContent=y.nombre+" "+y.apellido,document.getElementById("mw-cod").textContent=y.codigo||"",document.getElementById("mw-bdg").innerHTML=tl(y.estado);const R=window.location.origin,V=`${R}/acceso?inv=${y.token}`;document.getElementById("mw-link").textContent=V;const L=y.estado==="pagado"?`Hola ${y.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${V}

_Personal e intransferible. Un solo uso en la entrada._`:`Hola ${y.nombre}! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`;document.getElementById("mw-msg").textContent=L;const S=document.getElementById("mw-btn-p");y.estado==="pendiente"?(S.textContent="✓ Marcar como pagado",S.disabled=!1,S.style.display="block"):S.style.display="none",Ja("mw-canvas",y.codigo||y.fireId,80),document.getElementById("modal-wa").style.display="flex"},window._descargarQR=async T=>{const y=t.find(J=>J.fireId===T);if(!y)return;window.qrcode||await new Promise((J,Rt)=>{const Bt=document.createElement("script");Bt.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",Bt.onload=J,Bt.onerror=Rt,document.head.appendChild(Bt)});const V=window.location.origin+"/acceso?inv="+y.token,L=document.createElement("canvas"),S=600,M=800;L.width=S,L.height=M;const D=L.getContext("2d"),E=D.createLinearGradient(0,0,0,M);E.addColorStop(0,"#1A3A5C"),E.addColorStop(.55,"#2C5F8A"),E.addColorStop(1,"#3A7D44"),D.fillStyle=E,D.fillRect(0,0,S,M),D.fillStyle="#C9A96E",D.fillRect(0,M-4,S,4),D.fillStyle="rgba(255,255,255,0.7)",D.font="500 18px system-ui, -apple-system, sans-serif",D.textAlign="center",D.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",S/2,54),D.fillStyle="#ffffff",D.font="500 38px system-ui, -apple-system, sans-serif",D.fillText(y.nombre+" "+y.apellido,S/2,110),D.fillStyle="rgba(255,255,255,0.75)",D.font="400 22px system-ui, -apple-system, sans-serif",D.fillText(y.codigo,S/2,146),D.fillStyle="#3A7D44";const m=200,A=34,b=S/2-m/2,I=164;C(D,b,I,m,A,17),D.fill(),D.fillStyle="#ffffff",D.font="500 15px system-ui, -apple-system, sans-serif",D.fillText("✅ Bono confirmado",S/2,I+23);const x=320,v=340,St=S/2-x/2,Vt=220;D.fillStyle="#ffffff",C(D,St,Vt,x,v,16),D.fill();const xe=qrcode(0,"M");xe.addData(V),xe.make();const Ut=xe.getModuleCount(),Jt=240,Ze=St+(x-Jt)/2,Qn=Vt+24,Te=Jt/Ut;D.fillStyle="#000000";for(let J=0;J<Ut;J++)for(let Rt=0;Rt<Ut;Rt++)xe.isDark(J,Rt)&&D.fillRect(Ze+Rt*Te,Qn+J*Te,Te,Te);D.fillStyle="#1A3A5C",D.font="500 26px system-ui, -apple-system, sans-serif",D.fillText(y.codigo,S/2,Vt+v-44),D.fillStyle="#888",D.font="400 14px system-ui, -apple-system, sans-serif",D.fillText("Mostrá este QR en la entrada",S/2,Vt+v-20),D.fillStyle="rgba(255,255,255,0.85)",D.font="400 18px system-ui, -apple-system, sans-serif",D.fillText("Sáb 20 jun 2026  ·  19:30 hs",S/2,Vt+v+50),D.fillText("Roma 656, Olivos",S/2,Vt+v+80),D.fillStyle="rgba(255,255,255,0.5)",D.font="400 13px system-ui, -apple-system, sans-serif",D.fillText("Personal e intransferible · Un solo uso en la entrada",S/2,M-24),await new Promise(J=>{const Rt=new Image;Rt.onload=()=>{const Ye=S-70-20,Zt=M-70-20;D.save(),D.beginPath(),D.arc(Ye+70/2,Zt+70/2,70/2+3,0,Math.PI*2),D.fillStyle="rgba(255,255,255,0.25)",D.fill(),D.beginPath(),D.arc(Ye+70/2,Zt+70/2,70/2,0,Math.PI*2),D.clip(),D.drawImage(Rt,Ye,Zt,70,70),D.restore(),J()},Rt.onerror=J,Rt.src=Js});const Dt=document.createElement("a");Dt.download="QR-"+y.codigo+".png",Dt.href=L.toDataURL("image/png"),Dt.click()};function C(T,y,R,V,L,S){T.beginPath(),T.moveTo(y+S,R),T.lineTo(y+V-S,R),T.quadraticCurveTo(y+V,R,y+V,R+S),T.lineTo(y+V,R+L-S),T.quadraticCurveTo(y+V,R+L,y+V-S,R+L),T.lineTo(y+S,R+L),T.quadraticCurveTo(y,R+L,y,R+L-S),T.lineTo(y,R+S),T.quadraticCurveTo(y,R,y+S,R),T.closePath()}let N=null;window._editarInv=T=>{const y=t.find(R=>R.fireId===T);y&&(N=T,document.getElementById("edit-nom").value=y.nombre||"",document.getElementById("edit-ape").value=y.apellido||"",document.getElementById("edit-tel").value=y.tel||"",document.getElementById("edit-email").value=y.email||"",document.getElementById("edit-familia").value=y.familia||"",document.getElementById("edit-comentarios").value=y.comentarios||"",document.getElementById("edit-estado").value=y.estado||"pendiente",document.getElementById("edit-msg").innerHTML="",document.getElementById("modal-edit").style.display="flex")},window._guardarEdit=async()=>{const T=document.getElementById("edit-msg"),y=document.getElementById("edit-nom").value.trim(),R=document.getElementById("edit-ape").value.trim(),V=document.getElementById("edit-tel").value.trim();if(!y||!R||!V){T.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}T.innerHTML='<span style="color:#888">Guardando...</span>';const L={nombre:y,apellido:R,tel:V,estado:document.getElementById("edit-estado").value,...document.getElementById("edit-email").value.trim()&&{email:document.getElementById("edit-email").value.trim()},...document.getElementById("edit-familia").value.trim()&&{familia:document.getElementById("edit-familia").value.trim()},...document.getElementById("edit-comentarios").value.trim()&&{comentarios:document.getElementById("edit-comentarios").value.trim()}};try{await ye(N,L),T.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEdit(),1200)}catch(S){T.innerHTML=`<span style="color:#C0392B">Error: ${S.message}</span>`}},window._cerrarEdit=()=>{document.getElementById("modal-edit").style.display="none",N=null},window._pagarM=async()=>{const T=t.find(y=>y.fireId===r);!T||T.estado!=="pendiente"||await ye(T.fireId,{estado:"pagado"})},window._copWA=()=>{var R;(R=navigator.clipboard)==null||R.writeText(document.getElementById("mw-msg").textContent).catch(()=>{});const T=document.querySelector("#modal-wa .btn-g"),y=T.innerHTML;T.innerHTML="✓ ¡Copiado!",setTimeout(()=>T.innerHTML=y,2e3)},window._cModal=()=>{document.getElementById("modal-wa").style.display="none",r=null},o()}const Ve=n=>Number(n).toLocaleString("es-AR");async function pm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function fm(n){Ht();let t=[],e=[],i="cobrar",r=null,o=[],a=null,l=!1;n.innerHTML=kt({title:"💰 Caja central",sub:"Sucovi 2027 · Roma 656, Olivos",backHref:"/admin"})+`
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
    </div>`,Wn(y=>{t=y}),Zi(y=>{e=y,i!=="cobrar"&&u()}),window._cajaVista=(y,R)=>{i=y,r=null,document.querySelectorAll(".nav button").forEach(V=>V.classList.remove("on")),R.classList.add("on"),u()};function u(){i==="cobrar"&&g(),i==="pedidos"&&N(),i==="logistica"&&T()}let h={};async function p(){const y=t.filter(V=>V.estado!=="invalidado"),R=await Promise.all(y.map(async V=>{try{const S=(await ns(V.fireId)).filter(E=>{var m;return(m=E.items)==null?void 0:m.length});if(!S.length)return null;const M=S.reduce((E,m)=>E+(m.items||[]).reduce((A,b)=>A+(b.sub||0),0),0),D=S.reduce((E,m)=>E+(m.items||[]).length,0);return{fireId:V.fireId,total:M,cant:D,stands:S.length}}catch{return null}}));h={},R.filter(Boolean).forEach(V=>{h[V.fireId]=V}),_()}function g(){const y=document.getElementById("caja-content");if(r){C();return}y.innerHTML=`
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <input id="buscar-caja" placeholder="Buscar por nombre o código..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda">
        <p style="font-size:12px;color:#888;margin-bottom:8px">Cargando carritos activos...</p>
      </div>`,p()}function _(){var L;const y=document.getElementById("resultados-busqueda");if(!y)return;const R=(((L=document.getElementById("buscar-caja"))==null?void 0:L.value)||"").toLowerCase().trim();let V=t.filter(S=>S.estado!=="invalidado");if(R?V=V.filter(S=>(S.codigo||"").toLowerCase().includes(R)||(S.nombre+" "+S.apellido).toLowerCase().includes(R)):V=V.filter(S=>h[S.fireId]),!V.length){y.innerHTML=R?'<div class="empty">Sin resultados</div>':'<div class="empty" style="padding:24px">Sin carritos activos — nadie ha agregado vinos todavía 🍷</div>';return}y.innerHTML=(R?"":`<p style="font-size:11px;color:#888;margin-bottom:8px;font-weight:500">CARRITOS ACTIVOS (${V.length})</p>`)+V.map(S=>{const M=h[S.fireId];return`
        <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
          align-items:center;gap:10px" onclick="window._seleccionarInv('${S.fireId}')">
          <div class="avatar">${S.nombre[0]}${S.apellido[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${S.nombre} ${S.apellido}</div>
            <div style="font-size:12px;color:#888">${S.codigo} · ${S.tel}</div>
            ${M?`<div style="font-size:12px;color:#3A7D44;font-weight:500;margin-top:2px">
              🍷 ${M.cant} ítem${M.cant>1?"s":""} · $${Number(M.total).toLocaleString("es-AR")}
              <span style="color:#888;font-weight:400"> · ${M.stands} stand${M.stands>1?"s":""}</span>
            </div>`:'<div style="font-size:11px;color:#aaa;margin-top:2px">Carrito vacío</div>'}
          </div>
          <span class="badge ${S.estado==="pagado"||S.estado==="ingresado"?"b-pago":"b-pend"}">
            ${S.estado==="pagado"||S.estado==="ingresado"?"Bono pagado":"Pendiente"}
          </span>
          <span style="color:#1A3A5C;font-size:18px">›</span>
        </div>`}).join("")}window._buscarInv=(y=!1)=>{var L;const R=(((L=document.getElementById("buscar-caja"))==null?void 0:L.value)||"").toLowerCase().trim();if(!R){_();return}const V=t.filter(S=>S.estado!=="invalidado"&&((S.codigo||"").toLowerCase().includes(R)||(S.nombre+" "+S.apellido).toLowerCase().includes(R)));if(y&&V.length===1){window._seleccionarInv(V[0].fireId);return}_()},window._seleccionarInv=async y=>{r=t.find(R=>R.fireId===y),r&&(o=await ns(y),C())};async function C(){const y=document.getElementById("caja-content");if(!y)return;const R=r,V=o.filter(M=>{var D;return(D=M.items)==null?void 0:D.length}),L=V.reduce((M,D)=>M+(D.items||[]).reduce((E,m)=>E+(m.sub||0),0),0),S=e.filter(M=>M.invFireId===R.fireId);y.innerHTML=`
      <button class="btn" onclick="window._volverCobrar()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Buscar otro</button>
      <div class="card" style="margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div class="avatar" style="width:44px;height:44px;font-size:15px">
            ${R.nombre[0]}${R.apellido[0]}
          </div>
          <div>
            <div style="font-size:16px;font-weight:500">${R.nombre} ${R.apellido}</div>
            <div style="font-size:12px;color:#888">${R.codigo}${R.tel?" · "+R.tel:""}</div>
          </div>
        </div>
        ${S.length?`<div style="background:#D1FAE5;border-radius:6px;padding:6px 10px;
          font-size:12px;color:#065F46">
          ✅ Ya tiene ${S.length} pedido${S.length>1?"s":""} pagado${S.length>1?"s":""} esta noche
        </div>`:""}
      </div>

      ${V.length?`
        ${V.map(M=>`
          <div class="card" style="margin-bottom:10px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">
              🍷 ${M.standNombre} · Stand #${M.standId}
              ${M.retiro==="envio"?'<span class="badge b-envi" style="margin-left:6px">🚚 Envío</span>':""}
            </div>
            ${(M.items||[]).map(D=>`
              <div style="display:flex;justify-content:space-between;font-size:13px;
                color:#555;padding:4px 0;border-bottom:.5px solid #f5f0eb">
                <span>${D.desc}</span><strong>$${Ve(D.sub)}</strong>
              </div>`).join("")}
            <div style="display:flex;justify-content:space-between;font-size:13px;
              font-weight:500;margin-top:8px;padding-top:6px;border-top:.5px solid #D6E4F0">
              <span>Subtotal</span>
              <span>$${Ve((M.items||[]).reduce((D,E)=>D+(E.sub||0),0))}</span>
            </div>
          </div>`).join("")}
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL</span><span style="color:#1A3A5C">$${Ve(L)}</span>
          </div>
          <p style="font-size:12px;color:#888;margin-top:4px">
            ${V.length} stand${V.length>1?"s":""}
          </p>
        </div>
        <div id="cobro-msg" style="font-size:12px;text-align:center;margin-bottom:8px"></div>
        <button class="btn btn-g" style="width:100%;padding:14px;font-size:16px"
          onclick="window._cobrar()">
          ✓ Cobrar $${Ve(L)} y generar vouchers
        </button>`:`
        <div class="card" style="text-align:center;padding:24px">
          <p style="font-size:15px;color:#aaa">El carrito está vacío</p>
          <p style="font-size:13px;color:#aaa;margin-top:6px">
            ${R.nombre} todavía no agregó vinos desde los stands.
          </p>
        </div>`}
    `}window._volverCobrar=()=>{r=null,o=[],g()},window._cobrar=async()=>{const y=r,R=o.filter(S=>{var M;return(M=S.items)==null?void 0:M.length});if(!R.length)return;const V=document.querySelector("#caja-content .btn-g");V&&(V.disabled=!0,V.textContent="Procesando...");const L=document.getElementById("cobro-msg");try{await Fc(y,R),await Oc(y.fireId),L.innerHTML=`<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${R.length} voucher${R.length>1?"s":""} generado${R.length>1?"s":""}.
      </span>`,V&&(V.style.display="none")}catch(S){L.innerHTML=`<span style="color:#C0392B">Error: ${S.message}</span>`,V&&(V.disabled=!1,V.textContent="Reintentar")}};function N(){const y=document.getElementById("caja-content"),R=e.filter(S=>S.retiro!=="envio"),V={pagado:"Pagado",listo:"Listo",entregado:"Entregado"},L={pagado:"b-pago",listo:"b-list",entregado:"b-entr"};if(!R.length){y.innerHTML='<div class="empty">Sin pedidos aún</div>';return}y.innerHTML=R.map(S=>{var M;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#1A3A5C;min-width:52px">
          #${(M=S.fireId)==null?void 0:M.slice(-4).toUpperCase()}
        </span>
        <div style="flex:1;min-width:80px">
          <div style="font-size:12px;font-weight:500">${S.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${S.standNombre}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:80px">
          ${(S.items||[]).map(D=>D.desc).join(" · ")}
        </span>
        <span style="font-size:14px;font-weight:500">$${Ve(S.total||0)}</span>
        <span class="badge ${L[S.estado]||"b-pago"}">${V[S.estado]||S.estado}</span>
      </div>`}).join("")}function T(){const y=document.getElementById("caja-content"),R=e.filter(V=>V.retiro==="envio");if(!R.length){y.innerHTML='<div class="empty">Sin envíos</div>';return}y.innerHTML=R.map(V=>{var L;return`
      <div class="card" style="margin-bottom:10px;border-left:3px solid #7C3AED">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:15px;font-weight:500;color:#1A3A5C">
            #${(L=V.fireId)==null?void 0:L.slice(-4).toUpperCase()}
          </span>
          <span class="badge b-envi">🚚 Envío</span>
        </div>
        <div style="font-size:13px;font-weight:500;margin-bottom:4px">${V.invNombre||""}</div>
        <div style="font-size:12px;color:#666;margin-bottom:6px">
          ${V.standNombre} · ${(V.items||[]).map(S=>S.desc).join(" · ")}
        </div>
        <div style="font-size:15px;font-weight:500">$${Ve(V.total||0)}</div>
      </div>`}).join("")}window._abrirScanner=async()=>{document.getElementById("scan-overlay").style.display="flex";const y=document.getElementById("scan-status");y&&(y.textContent="Cargando escáner...");try{await pm(),a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const R=document.getElementById("scan-video");R.srcObject=a,l=!0,y&&(y.textContent="Buscando QR...");const V=document.createElement("canvas"),L=V.getContext("2d",{willReadFrequently:!0}),S=()=>{if(l){if(R.readyState===R.HAVE_ENOUGH_DATA&&R.videoWidth>0){V.width=R.videoWidth,V.height=R.videoHeight,L.drawImage(R,0,0);const M=L.getImageData(0,0,V.width,V.height),D=window.jsQR(M.data,M.width,M.height,{inversionAttempts:"dontInvert"});if(D&&D.data){const E=D.data;window._cerrarScanner();const m=E.match(/INV-\d+/),A=E.match(/inv=([A-Z0-9]+)/i);if(m){const b=document.getElementById("buscar-caja");b&&(b.value=m[0],window._buscarInv(!0))}else A&&Xs(async()=>{const{buscarInvitadoPorToken:b}=await Promise.resolve().then(()=>Gc);return{buscarInvitadoPorToken:b}},void 0).then(({buscarInvitadoPorToken:b})=>b(A[1]).then(I=>{I&&window._seleccionarInv(I.fireId)}));return}}l&&requestAnimationFrame(S)}};R.addEventListener("loadeddata",()=>requestAnimationFrame(S))}catch{y&&(y.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}},window._cerrarScanner=()=>{l=!1,a&&(a.getTracks().forEach(R=>R.stop()),a=null);const y=document.getElementById("scan-overlay");y&&(y.style.display="none")},g()}const Vr=n=>Number(n).toLocaleString("es-AR");function mm(n,t,e){if(Ht(),!e||e.estado==="invalidado"){n.innerHTML=kt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
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
      </div>`;return}if(e.estado==="pendiente"){n.innerHTML=kt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">
          Bono pendiente de pago
        </h2>
        <p style="font-size:14px;color:#666;">
          Hola ${e.nombre}, tu bono ($35.000) todavía no fue confirmado.<br>
          Pasá por la entrada para abonar.
        </p>
      </div>`;return}let i=[],r="stand";const o=`/acceso?inv=${e.token}`;n.innerHTML=kt({title:"🍷 "+t.nombre,sub:t.region+" · Stand #"+t.id,actions:[`<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
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
    </button>`,Ks(t.id,u=>{i=u,a()}),Gs(e.fireId,u=>{var N,T,y;const h=u.find(R=>Number(R.standId)===t.id),p=u.reduce((R,V)=>R+(V.items||[]).reduce((L,S)=>L+(S.sub||0),0),0),g=u.reduce((R,V)=>R+(V.items||[]).length,0),_=document.getElementById("cart-fab"),C=document.getElementById("cart-fab-txt");_&&g>0?(_.style.display="flex",C.textContent=`Ver carrito · $${Vr(p)}`):_&&(_.style.display="none"),h&&((N=h.items)!=null&&N.length)?(r=h.retiro||"stand",(T=document.getElementById("rb-stand"))==null||T.classList.toggle("sel",r==="stand"),(y=document.getElementById("rb-envio"))==null||y.classList.toggle("sel",r==="envio"),document.getElementById("retiro-box").style.display="block",document.getElementById("stand-resumen").style.display="block",document.getElementById("stand-resumen-lines").innerHTML=h.items.map(R=>`
          <div style="display:flex;justify-content:space-between;font-size:12px;
            color:#555;margin-bottom:4px">
            <span>${R.desc}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-weight:500">$${Vr(R.sub)}</span>
              <button onclick="window._quitarItem('${R.key}')"
                style="border:none;background:none;color:#A32D2D;cursor:pointer;
                font-size:13px;padding:0 2px">✕</button>
            </div>
          </div>`).join("")):(document.getElementById("stand-resumen").style.display="none",h===null&&(document.getElementById("retiro-box").style.display="none"))});function a(){const u=document.getElementById("menu-lista");if(u){if(!i.length){u.innerHTML='<div class="empty">La carta estará disponible pronto.</div>';return}u.innerHTML=i.map((h,p)=>`
      <div class="vino-card">
        <div style="font-size:14px;font-weight:500">${h.nombre}</div>
        <div style="font-size:11px;color:#888;margin-top:2px">
          ${h.varietal||""}${h.cosecha?" · "+h.cosecha:""}
        </div>
        ${h.descripcion?`<div style="font-size:12px;color:#666;margin-top:3px">${h.descripcion}</div>`:""}
        ${(h.unidades||[]).map((g,_)=>`
          <div class="qty-row">
            <span class="qty-label">
              ${g.u} — <span style="color:#6B1C1C;font-weight:600">$${Vr(g.p)}</span>
            </span>
            <button class="qty-btn" onclick="window._agregar(${p},${_},-1)">−</button>
            <span id="qv${p}_${_}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" onclick="window._agregar(${p},${_},1)">+</button>
          </div>`).join("")}
      </div>`).join("")}}const l={};window._agregar=async(u,h,p)=>{const g=i[u];if(!g)return;const _=(g.unidades||[])[h];if(!_)return;const C=`${u}_${h}`;l[C]=Math.max(0,(l[C]||0)+p);const N=document.getElementById(`qv${u}_${h}`);if(N&&(N.textContent=l[C]),l[C]===0)await Ni(e.fireId,t.id,C);else{const T={key:C,desc:`${g.nombre} — ${_.u} ×${l[C]}`,sub:_.p*l[C],vinoNombre:g.nombre,unidad:_.u,precio:_.p,qty:l[C]};await Mc(e.fireId,t.id,t.nombre,T,r),document.getElementById("retiro-box").style.display="block";const y=document.getElementById("add-msg");y.textContent=`✓ ${g.nombre} (${_.u}) agregado al carrito`,setTimeout(()=>{y.textContent=""},2e3)}},window._sRet=async u=>{r=u,document.getElementById("rb-stand").classList.toggle("sel",u==="stand"),document.getElementById("rb-envio").classList.toggle("sel",u==="envio"),document.getElementById("envio-form").style.display=u==="envio"?"block":"none",await $s(e.fireId,t.id,u)},window._quitarItem=async u=>{await Ni(e.fireId,t.id,u);const[h,p]=u.split("_").map(Number);l[u]=0;const g=document.getElementById(`qv${h}_${p}`);g&&(g.textContent=0)}}window._scannerStop=null;async function gm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}window._initScanner=async function(n,t,e){const i=e?document.getElementById(e):null;i&&(i.textContent="Iniciando cámara...");try{await gm();const r=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),o=document.getElementById(n);if(!o){r.getTracks().forEach(p=>p.stop());return}o.srcObject=r;const a=document.createElement("canvas"),l=a.getContext("2d",{willReadFrequently:!0});let u=!0;window._scannerStop=()=>{u=!1,r.getTracks().forEach(p=>p.stop()),window._scannerStop=null},i&&(i.textContent="Buscando QR...");const h=()=>{var p;if(u){if(o.readyState===o.HAVE_ENOUGH_DATA&&o.videoWidth>0){a.width=o.videoWidth,a.height=o.videoHeight,l.drawImage(o,0,0);const g=l.getImageData(0,0,a.width,a.height),_=window.jsQR(g.data,g.width,g.height,{inversionAttempts:"dontInvert"});if(_&&_.data){(p=window._scannerStop)==null||p.call(window),t(_.data);return}}requestAnimationFrame(h)}};o.addEventListener("loadeddata",()=>requestAnimationFrame(h))}catch{i&&(i.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}};const Dr=n=>Number(n).toLocaleString("es-AR");function Kc(n,t){if(Ht(),!sessionStorage.getItem("stand-auth-"+t.id)){n.innerHTML=`
      ${kt({title:"🍷 "+t.nombre,sub:"Panel del stand · Solo personal autorizado"})}
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
      </div>`,window._loginStand=()=>{document.getElementById("sp").value.trim()===t.pass?(sessionStorage.setItem("stand-auth-"+t.id,"1"),Kc(n,t)):document.getElementById("sp-err").textContent="Contraseña incorrecta"};return}let i=[];n.innerHTML=kt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Pedidos para entregar",actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('stand-auth-${t.id}');location.reload()">Salir</button>`]})+`
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
    </div>`;let r="pendientes";window._setSF=(a,l)=>{r=a,["sf-pend","sf-all"].forEach(u=>{const h=document.getElementById(u);h.style.background="#fff",h.style.color="#333",h.style.borderColor="#ccc"}),a==="pendientes"?(l.style.background="#EAF3DE",l.style.color="#3B6D11",l.style.borderColor="#3B6D11"):(l.style.background="#6B1C1C",l.style.color="#fff",l.style.borderColor="#6B1C1C"),o()},jc(t.id,a=>{i=a,o()});function o(){const a=document.getElementById("sp-pedidos");if(!a)return;let l=r==="pendientes"?i.filter(p=>p.estado==="pagado"):i;if(!l.length){a.innerHTML=`<div class="empty">${r==="pendientes"?"Sin pedidos listos para retirar 🎉":"Sin pedidos"}</div>`;return}const u={pagado:"Listo para retirar",entregado:"Entregado"},h={pagado:"b-pago",entregado:"b-entr"};a.innerHTML=l.map(p=>{var g;return`
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
          ${(p.items||[]).map(_=>`${_.desc} — <strong>$${Dr(_.sub)}</strong>`).join("<br>")}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;
          border-top:.5px solid #e0d5c8;padding-top:8px">
          <span style="font-size:16px;font-weight:500">$${Dr(p.total||0)}</span>
          ${p.estado==="pagado"?`<button class="btn btn-g" onclick="window._entregarPedido('${p.fireId}')">
                ✓ Marcar entregado
               </button>`:'<span style="font-size:12px;color:#aaa">✓ Entregado</span>'}
        </div>
      </div>`}).join("")}window._entregarPedido=async a=>{await qc(a)},window._abrirScannerStand=async()=>{document.getElementById("scan-overlay-stand").style.display="flex",await window._initScanner("scan-video-stand",h=>{window._cerrarScannerStand();const p=i.find(g=>h.includes(g.fireId));p&&a(p)},"scan-status-stand");function a(h){const p=h.estado==="pagado",g=document.getElementById("voucher-modal");document.getElementById("voucher-modal-content").innerHTML=`
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
      <div style="font-size:16px;font-weight:500;margin-bottom:12px">$${Dr(h.total||0)}</div>
      ${p?`
        <button class="btn btn-g" style="width:100%;padding:10px;margin-bottom:8px"
          onclick="window._entregarPedido('${h.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>`:""}
      <button class="btn" style="width:100%"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`,g.style.display="flex"}let l=null,u=!1;window._abrirScannerInvitado=async()=>{document.getElementById("scan-overlay-inv").style.display="flex";const h=document.getElementById("scan-status-inv");try{window.jsQR||await new Promise((N,T)=>{const y=document.createElement("script");y.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",y.onload=N,y.onerror=T,document.head.appendChild(y)}),l=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const p=document.getElementById("scan-video-inv");p.srcObject=l,u=!0,h&&(h.textContent="Buscando QR del invitado...");const g=document.createElement("canvas"),_=g.getContext("2d",{willReadFrequently:!0}),C=()=>{if(u){if(p.readyState===p.HAVE_ENOUGH_DATA&&p.videoWidth>0){g.width=p.videoWidth,g.height=p.videoHeight,_.drawImage(p,0,0);const N=_.getImageData(0,0,g.width,g.height),T=window.jsQR(N.data,N.width,N.height,{inversionAttempts:"dontInvert"});if(T&&T.data){const y=T.data;window._cerrarScannerInvitado();const R=y.match(/inv=([A-Z0-9]+)/i),V=y.match(/INV-\d+/);R?window.location.href="/stand/${bodega.id}?inv="+R[1]:V&&h&&(h.textContent="Usá el link del invitado, no el código.");return}}u&&requestAnimationFrame(C)}};p.addEventListener("loadeddata",()=>requestAnimationFrame(C))}catch{h&&(h.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerInvitado=()=>{u=!1,l&&(l.getTracks().forEach(h=>h.stop()),l=null),document.getElementById("scan-overlay-inv").style.display="none"},window._cerrarScannerStand=()=>{var h;(h=window._scannerStop)==null||h.call(window),document.getElementById("scan-overlay-stand").style.display="none"}}}const ym=n=>Number(n).toLocaleString("es-AR");function Xc(n,t){if(Ht(),!sessionStorage.getItem("bodega-auth-"+t.id)){n.innerHTML=`
      ${kt({title:"🍷 "+t.nombre,sub:"Carga de carta de vinos"})}
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
      </div>`,window._loginBodega=()=>{document.getElementById("bp").value.trim()===t.pass?(sessionStorage.setItem("bodega-auth-"+t.id,"1"),Xc(n,t)):document.getElementById("bp-err").textContent="Contraseña incorrecta"};return}let i=[],r=null;n.innerHTML=`
    ${kt({title:"🍷 "+t.nombre,sub:"Carga de carta · Stand #"+t.id,actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('bodega-auth-${t.id}');location.reload()">Salir</button>`]})}
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
    </div>`,Ks(t.id,l=>{i=l;const u=document.getElementById("vl");if(u){if(!i.length){u.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}u.innerHTML=i.map(h=>`
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
      </div>`).join("")}});const o=["vn","vv","vc","vd","vb","v6","v12"],a=()=>{o.forEach(l=>{const u=document.getElementById(l);u&&(u.value="")})};window._guardarV=async()=>{const l=document.getElementById("vn").value.trim(),u=document.getElementById("vm");if(!l){u.innerHTML='<span style="color:#A32D2D">El nombre es requerido.</span>';return}const h=parseFloat(document.getElementById("vb").value),p=parseFloat(document.getElementById("v6").value),g=parseFloat(document.getElementById("v12").value),_=[];if(h&&_.push({u:"Botella",p:h}),p&&_.push({u:"Caja x6",p}),g&&_.push({u:"Caja x12",p:g}),!_.length){u.innerHTML='<span style="color:#A32D2D">Ingresá al menos un precio.</span>';return}const C={nombre:l,varietal:document.getElementById("vv").value.trim(),cosecha:document.getElementById("vc").value.trim(),descripcion:document.getElementById("vd").value.trim(),unidades:_};u.innerHTML='<span style="color:#888">Guardando...</span>';try{r?(await Wc(t.id,r,C),r=null):await Uc(t.id,C),a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none",u.innerHTML='<span style="color:#3B6D11">✓ Guardado correctamente</span>',setTimeout(()=>{const N=document.getElementById("vm");N&&(N.innerHTML="")},3e3)}catch(N){u.innerHTML=`<span style="color:#A32D2D">Error: ${N.message}</span>`}},window._editarV=l=>{const u=i.find(_=>_.fireId===l);if(!u)return;r=l,document.getElementById("form-titulo").textContent=`Editando: ${u.nombre}`,document.getElementById("vn").value=u.nombre||"",document.getElementById("vv").value=u.varietal||"",document.getElementById("vc").value=u.cosecha||"",document.getElementById("vd").value=u.descripcion||"";const h=(u.unidades||[]).find(_=>_.u==="Botella"),p=(u.unidades||[]).find(_=>_.u==="Caja x6"),g=(u.unidades||[]).find(_=>_.u==="Caja x12");document.getElementById("vb").value=(h==null?void 0:h.p)||"",document.getElementById("v6").value=(p==null?void 0:p.p)||"",document.getElementById("v12").value=(g==null?void 0:g.p)||"",document.getElementById("btn-cancelar-edit").style.display="block",window.scrollTo({top:0,behavior:"smooth"})},window._cancelarEdit=()=>{r=null,a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none"},window._eliminarV=async l=>{const u=i.find(h=>h.fireId===l);confirm(`¿Eliminar "${u==null?void 0:u.nombre}"?`)&&await Qc(t.id,l)}}window._scannerStop=null;async function vm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}window._initScanner=async function(n,t,e){const i=e?document.getElementById(e):null;i&&(i.textContent="Iniciando cámara...");try{await vm();const r=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),o=document.getElementById(n);if(!o){r.getTracks().forEach(p=>p.stop());return}o.srcObject=r;const a=document.createElement("canvas"),l=a.getContext("2d",{willReadFrequently:!0});let u=!0;window._scannerStop=()=>{u=!1,r.getTracks().forEach(p=>p.stop()),window._scannerStop=null},i&&(i.textContent="Buscando QR...");const h=()=>{var p;if(u){if(o.readyState===o.HAVE_ENOUGH_DATA&&o.videoWidth>0){a.width=o.videoWidth,a.height=o.videoHeight,l.drawImage(o,0,0);const g=l.getImageData(0,0,a.width,a.height),_=window.jsQR(g.data,g.width,g.height,{inversionAttempts:"dontInvert"});if(_&&_.data){(p=window._scannerStop)==null||p.call(window),t(_.data);return}}requestAnimationFrame(h)}};o.addEventListener("loadeddata",()=>requestAnimationFrame(h))}catch{i&&(i.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}};function Am(n){Ht();let t=[],e=[];n.innerHTML=`
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
    </div>`,Wn(r=>{t=r}),window._vPuerta=async()=>{const r=document.getElementById("scan-cod").value.trim().toUpperCase(),o=document.getElementById("scan-res");if(!r)return;const a=t.find(u=>u.codigo===r);if(!a){o.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">❌ Código no encontrado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:4px">${r} no existe en el sistema.</p>
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
      </div>`;return}await ye(a.fireId,{estado:"ingresado"});const l=new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});e.unshift({nombre:a.nombre+" "+a.apellido,codigo:r,hora:l}),o.innerHTML=`<div class="result-ok">
      <p style="font-size:28px">✅</p>
      <p style="font-size:18px;font-weight:500;color:#3B6D11;margin-top:6px">¡Bienvenido/a!</p>
      <p style="font-size:15px;color:#27500A;margin-top:2px">${a.nombre} ${a.apellido}</p>
      <p style="font-size:11px;color:#3B6D11;margin-top:6px;opacity:.8">
        QR marcado — no puede reutilizarse
      </p>
    </div>`,document.getElementById("scan-cod").value="",i()},window._cobrarPuerta=async(r,o)=>{await ye(r,{estado:"pagado"}),document.getElementById("scan-cod").value=o,window._vPuerta()};function i(){const r=document.getElementById("scan-ult");if(r){if(!e.length){r.innerHTML='<p style="font-size:12px;color:#aaa">Sin ingresos aún</p>';return}r.innerHTML=e.slice(0,6).map(o=>`<div style="display:flex;justify-content:space-between;padding:5px 0;
        border-bottom:.5px solid #e0d5c8;font-size:12px">
        <span>✓ ${o.nombre}</span>
        <span style="color:#aaa">${o.codigo} · ${o.hora}</span>
      </div>`).join("")}}window._abrirScannerPuerta=async()=>{document.getElementById("scan-overlay-puerta").style.display="flex";let r=!0;try{await window._initScanner("scan-video-puerta",async o=>{r=!1,window._cerrarScannerPuerta();const a=o.match(/INV-\d+/),l=o.match(/inv=([A-Z0-9]+)/i);if(a)document.getElementById("scan-cod").value=a[0],window._vPuerta();else if(l){const u=await buscarInvitadoPorToken(l[1]);u&&(document.getElementById("scan-cod").value=u.codigo,window._vPuerta())}},"scan-status-puerta")}catch{document.getElementById("scan-status-puerta").textContent="No se pudo acceder a la camara."}},window._cerrarScannerPuerta=()=>{window._scannerStop&&window._scannerStop(),document.getElementById("scan-overlay-puerta").style.display="none"}}const _m=n=>Number(n).toLocaleString("es-AR"),Em={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},bm={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"},Im={pendiente:"Cobrar ✓",pagado:"Listo ✓",listo:"Entregar ✓"},wm={pendiente:"btn-g",pagado:"btn-b",listo:"btn-v"},xm={pendiente:"pagado",pagado:"listo",listo:"entregado"};function Tm(n){Ht();let t=[];n.innerHTML=`
    ${kt({title:"🚚 Logística — Envíos",sub:"Pedidos para enviar a domicilio",backHref:"/admin"})}
    <div class="wrap" id="log-lista"></div>`,Zi(i=>{t=i,e()}),window._avzLog=async(i,r)=>{await Hc(i,r)};function e(){const i=document.getElementById("log-lista");if(!i)return;const r=t.filter(l=>l.retiro==="envio");if(!r.length){i.innerHTML='<div class="empty">🚚<br><br>Sin pedidos de envío</div>';return}const o=r.filter(l=>l.estado!=="entregado"),a=r.filter(l=>l.estado==="entregado");i.innerHTML=(o.length?`<p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">Pendientes (${o.length})</p>`:"")+o.map(l=>{var u;return`
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
        </div>`}).join("")}}async function Rm(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Cm(n,t,e){await Rm();const i=document.getElementById(n);if(i)try{const r=qrcode(0,"M");r.addData(String(t)),r.make();const o=r.getModuleCount(),a=e/o;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let u=0;u<o;u++)for(let h=0;h<o;h++)r.isDark(u,h)&&l.fillRect(h*a,u*a,a,a)}catch(r){console.error("QR error:",r)}}const Pm=n=>Number(n).toLocaleString("es-AR");async function Sm(n,t){if(Ht(),n.innerHTML=is(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <p style="color:#aaa;font-size:14px">Cargando...</p>
    </div>`,!t){el(n,"Link inválido","Este link no contiene información de acreditación.");return}const e=await ki(t);if(!e){el(n,"No encontrado","Este link no corresponde a ningún invitado registrado.");return}n.innerHTML=is(e)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center" id="acc-body"></div>`;const i=document.getElementById("acc-body");if(e.estado==="invalidado"){i.innerHTML=`<div style="font-size:40px;margin-bottom:12px">🚫</div>
      <h2 style="font-size:18px;color:#A32D2D">Registro invalidado</h2>
      <p style="font-size:13px;color:#666;margin-top:8px">Contactá al organizador.</p>`;return}if(e.estado==="pendiente"){i.innerHTML=`<div style="font-size:10px;color:#aaa;letter-spacing:.08em;margin-bottom:6px">SUCOVI 2027</div>
      <h2 style="font-size:20px;font-weight:500;margin-bottom:6px">${e.nombre} ${e.apellido}</h2>
      <span class="badge b-pend" style="display:inline-block;margin-bottom:16px">Pago pendiente</span>
      <div style="background:#FAEEDA;border:.5px solid #C9A96E;border-radius:12px;padding:20px;margin-bottom:14px">
        <p style="font-size:28px;margin-bottom:8px">⏳</p>
        <p style="font-size:14px;font-weight:500;color:#854F0B">Bono pendiente ($35.000)</p>
        <p style="font-size:13px;color:#633806;margin-top:6px">Podés abonar en la puerta el día del evento.</p>
      </div>
      <p style="font-size:12px;color:#888">Sáb 20 jun 2026 · 19:30 hs · Roma 656, Olivos</p>
      <p style="font-size:12px;color:#aaa;margin-top:8px">José Pannunzio +54 9 11 5400-1313</p>`;return}const r=Ae.map(l=>`
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
    </a>`).join("");i.innerHTML=`
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
      ${r}
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
    </div>`,setTimeout(()=>Cm("qr-acc",e.codigo,160),50);let o=null,a=!1;window._abrirScannerAcceso=async()=>{const l=document.getElementById("scan-overlay-acc");l&&(l.style.display="flex");const u=document.getElementById("scan-status-acc");try{typeof loadJsQR=="function"?await loadJsQR():await new Promise((C,N)=>{if(window.jsQR){C();return}const T=document.createElement("script");T.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",T.onload=C,T.onerror=N,document.head.appendChild(T)}),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const h=document.getElementById("scan-video-acc");h.srcObject=o,a=!0,u&&(u.textContent="Buscando QR del stand...");const p=document.createElement("canvas"),g=p.getContext("2d",{willReadFrequently:!0}),_=()=>{if(a){if(h.readyState===h.HAVE_ENOUGH_DATA&&h.videoWidth>0){p.width=h.videoWidth,p.height=h.videoHeight,g.drawImage(h,0,0);const C=g.getImageData(0,0,p.width,p.height),N=window.jsQR(C.data,C.width,C.height,{inversionAttempts:"dontInvert"});if(N&&N.data){const T=N.data;window._cerrarScannerAcceso();const y=T.match(/\/stand\/(\d+)/);y&&(window.location.href="/stand/"+y[1]+"?inv="+t);return}}a&&requestAnimationFrame(_)}};h.addEventListener("loadeddata",()=>requestAnimationFrame(_))}catch{u&&(u.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerAcceso=()=>{a=!1,o&&(o.getTracks().forEach(u=>u.stop()),o=null);const l=document.getElementById("scan-overlay-acc");l&&(l.style.display="none")},zc(e.fireId,l=>{const u=document.getElementById("vouchers-acc");if(u){if(!l.length){u.innerHTML="";return}u.innerHTML=`
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
          </div>`}).join("")}`}})}function el(n,t,e){n.innerHTML=is(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
    <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${t}</h2>
    <p style="font-size:14px;color:#666">${e}</p>
    <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>`}const Vm=()=>Math.random().toString(36).slice(2,10).toUpperCase();function Dm(n){Ht();let t=0;const e=Wn(i=>{t=i.length,e()});n.innerHTML=`
    ${kt({title:"🍷 Sucovi 2027",sub:"Registro de invitados · Roma 656, Olivos · 20 jun 2026"})}
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
    </div>`,window._autoRegistrar=async()=>{const i=document.getElementById("rn").value.trim(),r=document.getElementById("ra").value.trim(),o=document.getElementById("rt").value.trim(),a=document.getElementById("re").value.trim(),l=document.getElementById("rf").value.trim(),u=document.getElementById("rc").value.trim(),h=document.getElementById("reg-msg");if(!i||!r||!o){h.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}h.innerHTML='<span style="color:#888">Registrando...</span>';try{const p=await Xs(()=>Promise.resolve().then(()=>Gc),void 0).then(_=>_.escucharInvitados),g="INV-"+String(t+1).padStart(4,"0");await Di({nombre:i,apellido:r,tel:o,...a&&{email:a},...l&&{familia:l},...u&&{comentarios:u},estado:"pendiente",codigo:g,token:Vm()}),document.getElementById("reg-form").innerHTML=`
        <div style="text-align:center;padding:20px 0">
          <div style="font-size:48px;margin-bottom:12px">✅</div>
          <h2 style="font-size:18px;font-weight:500;color:#3B6D11;margin-bottom:8px">
            ¡Registro exitoso!
          </h2>
          <p style="font-size:14px;color:#555;line-height:1.6">
            Hola <strong>${i}</strong>, quedaste registrado/a.<br>
            El organizador confirmará tu pago y te enviará el QR de acceso por WhatsApp.
          </p>
          <div style="margin-top:16px;background:#f5f0eb;border-radius:8px;
            padding:12px;font-size:13px;color:#666">
            📅 Sáb 20 jun 2026 · 19:30 hs<br>
            📍 Roma 656, Olivos
          </div>
        </div>`}catch(p){h.innerHTML=`<span style="color:#A32D2D">Error: ${p.message}</span>`}}}const kr=n=>Number(n).toLocaleString("es-AR");function km(n,t){if(Ht(),!t||t.estado==="invalidado"){n.innerHTML=`
      <div class="hdr"><div><h1>🛒 Carrito</h1></div></div>
      <div class="gold"></div>
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <p style="font-size:14px;color:#666">Necesitás tu QR de acreditación para ver el carrito.</p>
      </div>`;return}let e=[];n.innerHTML=`
    ${kt({title:"🛒 Mi carrito",sub:t.nombre+" "+t.apellido+" · "+t.codigo,backHref:"/acceso?inv="+t.token,backLabel:"← Mi QR"})}
    <div style="max-width:480px;margin:0 auto;padding:14px" id="carrito-body">
      <div class="empty">Cargando carrito...</div>
    </div>`,Gs(t.fireId,r=>{e=r,i()});function i(){const r=document.getElementById("carrito-body");if(!r)return;if(!e.length||!e.some(a=>{var l;return(l=a.items)==null?void 0:l.length})){r.innerHTML=`
        <div class="empty" style="padding:48px 20px">
          <div style="font-size:48px;margin-bottom:12px">🛒</div>
          <p style="font-size:15px;font-weight:500;margin-bottom:8px">Tu carrito está vacío</p>
          <p style="font-size:13px;color:#aaa">
            Escaneá el QR de cualquier stand para agregar vinos.
          </p>
        </div>`;return}const o=e.reduce((a,l)=>a+(l.items||[]).reduce((u,h)=>u+(h.sub||0),0),0);r.innerHTML=`
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
                <span style="font-size:13px;font-weight:500">$${kr(l.sub)}</span>
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
            <span>$${kr((a.items||[]).reduce((l,u)=>l+(u.sub||0),0))}</span>
          </div>
        </div>`).join("")}

      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>Total</span>
          <span style="color:#6B1C1C">$${kr(o)}</span>
        </div>
        <p style="font-size:12px;color:#888;margin-top:6px">
          Llevá este carrito a caja para pagar. El cajero escanea tu código y ve todo.
        </p>
      </div>

      <div style="background:#E6F1FB;border:.5px solid #185FA5;border-radius:8px;
        padding:10px 14px;font-size:12px;color:#185FA5;margin-bottom:14px;text-align:center">
        📍 Tu código de caja: <strong style="font-size:16px;letter-spacing:.1em">${t.codigo}</strong>
      </div>

      <div id="carrito-msg" style="font-size:12px;text-align:center;min-height:16px;margin-bottom:8px"></div>`}window._quitarCarrito=async(r,o)=>{const a=e.find(l=>l.standDocId===r);a&&await Ni(t.fireId,Number(a.standId),o)},window._cambiarRetiro=async(r,o,a)=>{await $s(t.fireId,Number(o),a)}}async function Jc(){const t=window.location.pathname.replace("/Sucovi2027","")||"/",e=new URLSearchParams(window.location.search),i=document.getElementById("app"),r=t.match(/^\/stand\/(\d+)$/);if(r){const l=parseInt(r[1]),u=Ae.find(g=>g.id===l);if(!u){i.innerHTML=De("Stand no encontrado");return}const h=e.get("inv"),p=h?await ki(h):null;return mm(i,u,p)}const o=t.match(/^\/panel\/(\d+)$/);if(o){const l=Ae.find(h=>h.id===parseInt(o[1]));if(!l){i.innerHTML=De("Panel no encontrado");return}const u=e.get("key");if(u&&u!==l.key){i.innerHTML=De("Acceso no autorizado");return}if(!u){i.innerHTML=De("Link inválido — usá el link completo que te enviaron");return}return Kc(i,l)}const a=t.match(/^\/bodega\/(\d+)\/vinos$/);if(a){const l=Ae.find(h=>h.id===parseInt(a[1]));if(!l){i.innerHTML=De("Bodega no encontrada");return}const u=e.get("key");if(u&&u!==l.key){i.innerHTML=De("Acceso no autorizado");return}return Xc(i,l)}if(t==="/carrito"){const l=e.get("inv"),u=l?await ki(l):null;return km(i,u)}return t==="/acceso"?Sm(i,e.get("inv")):t==="/registro"?Dm(i):t==="/caja"?fm(i):t==="/puerta"?Am(i):t==="/logistica"?Tm(i):hm(i)}function De(n){return`<div style="padding:60px;text-align:center;color:#aaa;font-size:14px">${n}</div>`}Jc();window.addEventListener("popstate",Jc);(function(){var n=window.location.search.match(/[?&]p=([^&]+)/);if(n){var t="/Sucovi2027",e=decodeURIComponent(n[1].replace(/~and~/g,"&"));window.history.replaceState(null,null,t+"/"+e)}})();
