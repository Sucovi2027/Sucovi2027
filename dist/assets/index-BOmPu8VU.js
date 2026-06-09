(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var ma={};/**
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
 */const bl=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},Wd=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const r=n[e++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[e++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[e++],a=n[e++],l=n[e++],d=((r&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(d>>10)),t[i++]=String.fromCharCode(56320+(d&1023))}else{const s=n[e++],a=n[e++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return t.join("")},wl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],a=r+1<n.length,l=a?n[r+1]:0,d=r+2<n.length,u=d?n[r+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let b=(l&15)<<2|u>>6,T=u&63;d||(T=64,a||(b=64)),i.push(e[p],e[m],e[b],e[T])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(bl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Wd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=e[n.charAt(r++)],l=r<n.length?e[n.charAt(r)]:0;++r;const u=r<n.length?e[n.charAt(r)]:64;++r;const m=r<n.length?e[n.charAt(r)]:64;if(++r,s==null||l==null||u==null||m==null)throw new Gd;const b=s<<2|l>>4;if(i.push(b),u!==64){const T=l<<4&240|u>>2;if(i.push(T),m!==64){const D=u<<6&192|m;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kd=function(n){const t=bl(n);return wl.encodeByteArray(t,!0)},Ni=function(n){return Kd(n).replace(/\./g,"")},Xd=function(n){try{return wl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Jd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zd=()=>Jd().__FIREBASE_DEFAULTS__,Yd=()=>{if(typeof process>"u"||typeof ma>"u")return;const n=ma.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Xd(n[1]);return t&&JSON.parse(t)},Ao=()=>{try{return Zd()||Yd()||tu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},eu=n=>{var t,e;return(e=(t=Ao())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},nu=n=>{const t=eu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Al=()=>{var n;return(n=Ao())===null||n===void 0?void 0:n.config};/**
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
 */class iu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function ru(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ni(JSON.stringify(e)),Ni(JSON.stringify(a)),""].join(".")}/**
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
 */function ou(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function su(){var n;const t=(n=Ao())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function au(){return!su()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lu(){try{return typeof indexedDB=="object"}catch{return!1}}function cu(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const du="FirebaseError";class on extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=du,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_l.prototype.create)}}class _l{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],a=s?uu(s,i):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new on(r,l,i)}}function uu(n,t){return n.replace(hu,(e,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const hu=/\{\$([^}]+)}/g;function Kr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const r of e){if(!i.includes(r))return!1;const s=n[r],a=t[r];if(ga(s)&&ga(a)){if(!Kr(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!e.includes(r))return!1;return!0}function ga(n){return n!==null&&typeof n=="object"}/**
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
 */function Mt(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ce="[DEFAULT]";/**
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
 */class pu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new iu;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(mu(t))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=Ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ce){return this.instances.has(t)}getOptions(t=Ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&a.resolve(r)}return r}onInit(t,e){var i;const r=this.normalizeInstanceIdentifier(e),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&t(a,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const r of i)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:fu(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ce){return this.component?this.component.multipleInstances?t:Ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fu(n){return n===Ce?void 0:n}function mu(n){return n.instantiationMode==="EAGER"}/**
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
 */class gu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new pu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const yu={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},vu=K.INFO,bu={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},wu=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),r=bu[t];if(r)console[r](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class El{constructor(t){this.name=t,this._logLevel=vu,this._logHandler=wu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?yu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Au=(n,t)=>t.some(e=>n instanceof e);let ya,va;function _u(){return ya||(ya=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Eu(){return va||(va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,Xr=new WeakMap,xl=new WeakMap,Mr=new WeakMap,_o=new WeakMap;function Iu(n){const t=new Promise((e,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(ue(n.result)),r()},a=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Il.set(e,n)}).catch(()=>{}),_o.set(t,n),t}function xu(n){if(Xr.has(n))return;const t=new Promise((e,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),r()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Xr.set(n,t)}let Jr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Xr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||xl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ue(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Tu(n){Jr=n(Jr)}function Ru(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Or(this),t,...e);return xl.set(i,t.sort?t.sort():[t]),ue(i)}:Eu().includes(n)?function(...t){return n.apply(Or(this),t),ue(Il.get(this))}:function(...t){return ue(n.apply(Or(this),t))}}function Cu(n){return typeof n=="function"?Ru(n):(n instanceof IDBTransaction&&xu(n),Au(n,_u())?new Proxy(n,Jr):n)}function ue(n){if(n instanceof IDBRequest)return Iu(n);if(Mr.has(n))return Mr.get(n);const t=Cu(n);return t!==n&&(Mr.set(n,t),_o.set(t,n)),t}const Or=n=>_o.get(n);function Su(n,t,{blocked:e,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(n,t),l=ue(a);return i&&a.addEventListener("upgradeneeded",d=>{i(ue(a.result),d.oldVersion,d.newVersion,ue(a.transaction),d)}),e&&a.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),l.then(d=>{s&&d.addEventListener("close",()=>s()),r&&d.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Pu=["get","getKey","getAll","getAllKeys","count"],Vu=["put","add","delete","clear"],zr=new Map;function ba(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(zr.get(t))return zr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,r=Vu.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Pu.includes(e)))return;const s=async function(a,...l){const d=this.transaction(a,r?"readwrite":"readonly");let u=d.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[e](...l),r&&d.done]))[0]};return zr.set(t,s),s}Tu(n=>({...n,get:(t,e,i)=>ba(t,e)||n.get(t,e,i),has:(t,e)=>!!ba(t,e)||n.has(t,e)}));/**
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
 */class ku{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Du(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Du(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zr="@firebase/app",wa="0.10.13";/**
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
 */const ee=new El("@firebase/app"),Bu="@firebase/app-compat",Nu="@firebase/analytics-compat",Lu="@firebase/analytics",Fu="@firebase/app-check-compat",Mu="@firebase/app-check",Ou="@firebase/auth",zu="@firebase/auth-compat",ju="@firebase/database",qu="@firebase/data-connect",Hu="@firebase/database-compat",Uu="@firebase/functions",$u="@firebase/functions-compat",Qu="@firebase/installations",Wu="@firebase/installations-compat",Gu="@firebase/messaging",Ku="@firebase/messaging-compat",Xu="@firebase/performance",Ju="@firebase/performance-compat",Zu="@firebase/remote-config",Yu="@firebase/remote-config-compat",th="@firebase/storage",eh="@firebase/storage-compat",nh="@firebase/firestore",ih="@firebase/vertexai-preview",rh="@firebase/firestore-compat",oh="firebase",sh="10.14.1";/**
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
 */const Yr="[DEFAULT]",ah={[Zr]:"fire-core",[Bu]:"fire-core-compat",[Lu]:"fire-analytics",[Nu]:"fire-analytics-compat",[Mu]:"fire-app-check",[Fu]:"fire-app-check-compat",[Ou]:"fire-auth",[zu]:"fire-auth-compat",[ju]:"fire-rtdb",[qu]:"fire-data-connect",[Hu]:"fire-rtdb-compat",[Uu]:"fire-fn",[$u]:"fire-fn-compat",[Qu]:"fire-iid",[Wu]:"fire-iid-compat",[Gu]:"fire-fcm",[Ku]:"fire-fcm-compat",[Xu]:"fire-perf",[Ju]:"fire-perf-compat",[Zu]:"fire-rc",[Yu]:"fire-rc-compat",[th]:"fire-gcs",[eh]:"fire-gcs-compat",[nh]:"fire-fst",[rh]:"fire-fst-compat",[ih]:"fire-vertex","fire-js":"fire-js",[oh]:"fire-js-all"};/**
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
 */const Li=new Map,lh=new Map,to=new Map;function Aa(n,t){try{n.container.addComponent(t)}catch(e){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fi(n){const t=n.name;if(to.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;to.set(t,n);for(const e of Li.values())Aa(e,n);for(const e of lh.values())Aa(e,n);return!0}function ch(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const dh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},he=new _l("app","Firebase",dh);/**
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
 */class uh{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}/**
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
 */const hh=sh;function Tl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Yr,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw he.create("bad-app-name",{appName:String(r)});if(e||(e=Al()),!e)throw he.create("no-options");const s=Li.get(r);if(s){if(Kr(e,s.options)&&Kr(i,s.config))return s;throw he.create("duplicate-app",{appName:r})}const a=new gu(r);for(const d of to.values())a.addComponent(d);const l=new uh(e,i,a);return Li.set(r,l),l}function ph(n=Yr){const t=Li.get(n);if(!t&&n===Yr&&Al())return Tl();if(!t)throw he.create("no-app",{appName:n});return t}function Ke(n,t,e){var i;let r=(i=ah[n])!==null&&i!==void 0?i:n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${r}" with version "${t}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(l.join(" "));return}Fi(new Mn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const fh="firebase-heartbeat-database",mh=1,On="firebase-heartbeat-store";let jr=null;function Rl(){return jr||(jr=Su(fh,mh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(On)}catch(e){console.warn(e)}}}}).catch(n=>{throw he.create("idb-open",{originalErrorMessage:n.message})})),jr}async function gh(n){try{const e=(await Rl()).transaction(On),i=await e.objectStore(On).get(Cl(n));return await e.done,i}catch(t){if(t instanceof on)ee.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(e.message)}}}async function _a(n,t){try{const i=(await Rl()).transaction(On,"readwrite");await i.objectStore(On).put(t,Cl(n)),await i.done}catch(e){if(e instanceof on)ee.warn(e.message);else{const i=he.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ee.warn(i.message)}}}function Cl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yh=1024,vh=30*24*60*60*1e3;class bh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ah(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ea();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=vh}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ee.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ea(),{heartbeatsToSend:i,unsentEntries:r}=wh(this._heartbeatsCache.heartbeats),s=Ni(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ee.warn(e),""}}}function Ea(){return new Date().toISOString().substring(0,10)}function wh(n,t=yh){const e=[];let i=n.slice();for(const r of n){const s=e.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),Ia(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),Ia(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Ah{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lu()?cu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await gh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return _a(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return _a(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ia(n){return Ni(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function _h(n){Fi(new Mn("platform-logger",t=>new ku(t),"PRIVATE")),Fi(new Mn("heartbeat",t=>new bh(t),"PRIVATE")),Ke(Zr,wa,n),Ke(Zr,wa,"esm2017"),Ke("fire-js","")}_h("");var Eh="firebase",Ih="10.14.1";/**
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
 */Ke(Eh,Ih,"app");var xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ve,Sl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,f){function w(){}w.prototype=f.prototype,v.D=f.prototype,v.prototype=new w,v.prototype.constructor=v,v.C=function(y,A,_){for(var E=Array(arguments.length-2),$=2;$<arguments.length;$++)E[$-2]=arguments[$];return f.prototype[A].apply(y,E)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(v,f,w){w||(w=0);var y=Array(16);if(typeof f=="string")for(var A=0;16>A;++A)y[A]=f.charCodeAt(w++)|f.charCodeAt(w++)<<8|f.charCodeAt(w++)<<16|f.charCodeAt(w++)<<24;else for(A=0;16>A;++A)y[A]=f[w++]|f[w++]<<8|f[w++]<<16|f[w++]<<24;f=v.g[0],w=v.g[1],A=v.g[2];var _=v.g[3],E=f+(_^w&(A^_))+y[0]+3614090360&4294967295;f=w+(E<<7&4294967295|E>>>25),E=_+(A^f&(w^A))+y[1]+3905402710&4294967295,_=f+(E<<12&4294967295|E>>>20),E=A+(w^_&(f^w))+y[2]+606105819&4294967295,A=_+(E<<17&4294967295|E>>>15),E=w+(f^A&(_^f))+y[3]+3250441966&4294967295,w=A+(E<<22&4294967295|E>>>10),E=f+(_^w&(A^_))+y[4]+4118548399&4294967295,f=w+(E<<7&4294967295|E>>>25),E=_+(A^f&(w^A))+y[5]+1200080426&4294967295,_=f+(E<<12&4294967295|E>>>20),E=A+(w^_&(f^w))+y[6]+2821735955&4294967295,A=_+(E<<17&4294967295|E>>>15),E=w+(f^A&(_^f))+y[7]+4249261313&4294967295,w=A+(E<<22&4294967295|E>>>10),E=f+(_^w&(A^_))+y[8]+1770035416&4294967295,f=w+(E<<7&4294967295|E>>>25),E=_+(A^f&(w^A))+y[9]+2336552879&4294967295,_=f+(E<<12&4294967295|E>>>20),E=A+(w^_&(f^w))+y[10]+4294925233&4294967295,A=_+(E<<17&4294967295|E>>>15),E=w+(f^A&(_^f))+y[11]+2304563134&4294967295,w=A+(E<<22&4294967295|E>>>10),E=f+(_^w&(A^_))+y[12]+1804603682&4294967295,f=w+(E<<7&4294967295|E>>>25),E=_+(A^f&(w^A))+y[13]+4254626195&4294967295,_=f+(E<<12&4294967295|E>>>20),E=A+(w^_&(f^w))+y[14]+2792965006&4294967295,A=_+(E<<17&4294967295|E>>>15),E=w+(f^A&(_^f))+y[15]+1236535329&4294967295,w=A+(E<<22&4294967295|E>>>10),E=f+(A^_&(w^A))+y[1]+4129170786&4294967295,f=w+(E<<5&4294967295|E>>>27),E=_+(w^A&(f^w))+y[6]+3225465664&4294967295,_=f+(E<<9&4294967295|E>>>23),E=A+(f^w&(_^f))+y[11]+643717713&4294967295,A=_+(E<<14&4294967295|E>>>18),E=w+(_^f&(A^_))+y[0]+3921069994&4294967295,w=A+(E<<20&4294967295|E>>>12),E=f+(A^_&(w^A))+y[5]+3593408605&4294967295,f=w+(E<<5&4294967295|E>>>27),E=_+(w^A&(f^w))+y[10]+38016083&4294967295,_=f+(E<<9&4294967295|E>>>23),E=A+(f^w&(_^f))+y[15]+3634488961&4294967295,A=_+(E<<14&4294967295|E>>>18),E=w+(_^f&(A^_))+y[4]+3889429448&4294967295,w=A+(E<<20&4294967295|E>>>12),E=f+(A^_&(w^A))+y[9]+568446438&4294967295,f=w+(E<<5&4294967295|E>>>27),E=_+(w^A&(f^w))+y[14]+3275163606&4294967295,_=f+(E<<9&4294967295|E>>>23),E=A+(f^w&(_^f))+y[3]+4107603335&4294967295,A=_+(E<<14&4294967295|E>>>18),E=w+(_^f&(A^_))+y[8]+1163531501&4294967295,w=A+(E<<20&4294967295|E>>>12),E=f+(A^_&(w^A))+y[13]+2850285829&4294967295,f=w+(E<<5&4294967295|E>>>27),E=_+(w^A&(f^w))+y[2]+4243563512&4294967295,_=f+(E<<9&4294967295|E>>>23),E=A+(f^w&(_^f))+y[7]+1735328473&4294967295,A=_+(E<<14&4294967295|E>>>18),E=w+(_^f&(A^_))+y[12]+2368359562&4294967295,w=A+(E<<20&4294967295|E>>>12),E=f+(w^A^_)+y[5]+4294588738&4294967295,f=w+(E<<4&4294967295|E>>>28),E=_+(f^w^A)+y[8]+2272392833&4294967295,_=f+(E<<11&4294967295|E>>>21),E=A+(_^f^w)+y[11]+1839030562&4294967295,A=_+(E<<16&4294967295|E>>>16),E=w+(A^_^f)+y[14]+4259657740&4294967295,w=A+(E<<23&4294967295|E>>>9),E=f+(w^A^_)+y[1]+2763975236&4294967295,f=w+(E<<4&4294967295|E>>>28),E=_+(f^w^A)+y[4]+1272893353&4294967295,_=f+(E<<11&4294967295|E>>>21),E=A+(_^f^w)+y[7]+4139469664&4294967295,A=_+(E<<16&4294967295|E>>>16),E=w+(A^_^f)+y[10]+3200236656&4294967295,w=A+(E<<23&4294967295|E>>>9),E=f+(w^A^_)+y[13]+681279174&4294967295,f=w+(E<<4&4294967295|E>>>28),E=_+(f^w^A)+y[0]+3936430074&4294967295,_=f+(E<<11&4294967295|E>>>21),E=A+(_^f^w)+y[3]+3572445317&4294967295,A=_+(E<<16&4294967295|E>>>16),E=w+(A^_^f)+y[6]+76029189&4294967295,w=A+(E<<23&4294967295|E>>>9),E=f+(w^A^_)+y[9]+3654602809&4294967295,f=w+(E<<4&4294967295|E>>>28),E=_+(f^w^A)+y[12]+3873151461&4294967295,_=f+(E<<11&4294967295|E>>>21),E=A+(_^f^w)+y[15]+530742520&4294967295,A=_+(E<<16&4294967295|E>>>16),E=w+(A^_^f)+y[2]+3299628645&4294967295,w=A+(E<<23&4294967295|E>>>9),E=f+(A^(w|~_))+y[0]+4096336452&4294967295,f=w+(E<<6&4294967295|E>>>26),E=_+(w^(f|~A))+y[7]+1126891415&4294967295,_=f+(E<<10&4294967295|E>>>22),E=A+(f^(_|~w))+y[14]+2878612391&4294967295,A=_+(E<<15&4294967295|E>>>17),E=w+(_^(A|~f))+y[5]+4237533241&4294967295,w=A+(E<<21&4294967295|E>>>11),E=f+(A^(w|~_))+y[12]+1700485571&4294967295,f=w+(E<<6&4294967295|E>>>26),E=_+(w^(f|~A))+y[3]+2399980690&4294967295,_=f+(E<<10&4294967295|E>>>22),E=A+(f^(_|~w))+y[10]+4293915773&4294967295,A=_+(E<<15&4294967295|E>>>17),E=w+(_^(A|~f))+y[1]+2240044497&4294967295,w=A+(E<<21&4294967295|E>>>11),E=f+(A^(w|~_))+y[8]+1873313359&4294967295,f=w+(E<<6&4294967295|E>>>26),E=_+(w^(f|~A))+y[15]+4264355552&4294967295,_=f+(E<<10&4294967295|E>>>22),E=A+(f^(_|~w))+y[6]+2734768916&4294967295,A=_+(E<<15&4294967295|E>>>17),E=w+(_^(A|~f))+y[13]+1309151649&4294967295,w=A+(E<<21&4294967295|E>>>11),E=f+(A^(w|~_))+y[4]+4149444226&4294967295,f=w+(E<<6&4294967295|E>>>26),E=_+(w^(f|~A))+y[11]+3174756917&4294967295,_=f+(E<<10&4294967295|E>>>22),E=A+(f^(_|~w))+y[2]+718787259&4294967295,A=_+(E<<15&4294967295|E>>>17),E=w+(_^(A|~f))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+f&4294967295,v.g[1]=v.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+_&4294967295}i.prototype.u=function(v,f){f===void 0&&(f=v.length);for(var w=f-this.blockSize,y=this.B,A=this.h,_=0;_<f;){if(A==0)for(;_<=w;)r(this,v,_),_+=this.blockSize;if(typeof v=="string"){for(;_<f;)if(y[A++]=v.charCodeAt(_++),A==this.blockSize){r(this,y),A=0;break}}else for(;_<f;)if(y[A++]=v[_++],A==this.blockSize){r(this,y),A=0;break}}this.h=A,this.o+=f},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var f=1;f<v.length-8;++f)v[f]=0;var w=8*this.o;for(f=v.length-8;f<v.length;++f)v[f]=w&255,w/=256;for(this.u(v),v=Array(16),f=w=0;4>f;++f)for(var y=0;32>y;y+=8)v[w++]=this.g[f]>>>y&255;return v};function s(v,f){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=f(v)}function a(v,f){this.h=f;for(var w=[],y=!0,A=v.length-1;0<=A;A--){var _=v[A]|0;y&&_==f||(w[A]=_,y=!1)}this.g=w}var l={};function d(v){return-128<=v&&128>v?s(v,function(f){return new a([f|0],0>f?-1:0)}):new a([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return x(u(-v));for(var f=[],w=1,y=0;v>=w;y++)f[y]=v/w|0,w*=4294967296;return new a(f,0)}function p(v,f){if(v.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(v.charAt(0)=="-")return x(p(v.substring(1),f));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(f,8)),y=m,A=0;A<v.length;A+=8){var _=Math.min(8,v.length-A),E=parseInt(v.substring(A,A+_),f);8>_?(_=u(Math.pow(f,_)),y=y.j(_).add(u(E))):(y=y.j(w),y=y.add(u(E)))}return y}var m=d(0),b=d(1),T=d(16777216);n=a.prototype,n.m=function(){if(S(this))return-x(this).m();for(var v=0,f=1,w=0;w<this.g.length;w++){var y=this.i(w);v+=(0<=y?y:4294967296+y)*f,f*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(S(this))return"-"+x(this).toString(v);for(var f=u(Math.pow(v,6)),w=this,y="";;){var A=L(w,f).g;w=V(w,A.j(f));var _=((0<w.g.length?w.g[0]:w.h)>>>0).toString(v);if(w=A,D(w))return _+y;for(;6>_.length;)_="0"+_;y=_+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var f=0;f<v.g.length;f++)if(v.g[f]!=0)return!1;return!0}function S(v){return v.h==-1}n.l=function(v){return v=V(this,v),S(v)?-1:D(v)?0:1};function x(v){for(var f=v.g.length,w=[],y=0;y<f;y++)w[y]=~v.g[y];return new a(w,~v.h).add(b)}n.abs=function(){return S(this)?x(this):this},n.add=function(v){for(var f=Math.max(this.g.length,v.g.length),w=[],y=0,A=0;A<=f;A++){var _=y+(this.i(A)&65535)+(v.i(A)&65535),E=(_>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);y=E>>>16,_&=65535,E&=65535,w[A]=E<<16|_}return new a(w,w[w.length-1]&-2147483648?-1:0)};function V(v,f){return v.add(x(f))}n.j=function(v){if(D(this)||D(v))return m;if(S(this))return S(v)?x(this).j(x(v)):x(x(this).j(v));if(S(v))return x(this.j(x(v)));if(0>this.l(T)&&0>v.l(T))return u(this.m()*v.m());for(var f=this.g.length+v.g.length,w=[],y=0;y<2*f;y++)w[y]=0;for(y=0;y<this.g.length;y++)for(var A=0;A<v.g.length;A++){var _=this.i(y)>>>16,E=this.i(y)&65535,$=v.i(A)>>>16,Vt=v.i(A)&65535;w[2*y+2*A]+=E*Vt,P(w,2*y+2*A),w[2*y+2*A+1]+=_*Vt,P(w,2*y+2*A+1),w[2*y+2*A+1]+=E*$,P(w,2*y+2*A+1),w[2*y+2*A+2]+=_*$,P(w,2*y+2*A+2)}for(y=0;y<f;y++)w[y]=w[2*y+1]<<16|w[2*y];for(y=f;y<2*f;y++)w[y]=0;return new a(w,0)};function P(v,f){for(;(v[f]&65535)!=v[f];)v[f+1]+=v[f]>>>16,v[f]&=65535,f++}function N(v,f){this.g=v,this.h=f}function L(v,f){if(D(f))throw Error("division by zero");if(D(v))return new N(m,m);if(S(v))return f=L(x(v),f),new N(x(f.g),x(f.h));if(S(f))return f=L(v,x(f)),new N(x(f.g),f.h);if(30<v.g.length){if(S(v)||S(f))throw Error("slowDivide_ only works with positive integers.");for(var w=b,y=f;0>=y.l(v);)w=R(w),y=R(y);var A=I(w,1),_=I(y,1);for(y=I(y,2),w=I(w,2);!D(y);){var E=_.add(y);0>=E.l(v)&&(A=A.add(w),_=E),y=I(y,1),w=I(w,1)}return f=V(v,A.j(f)),new N(A,f)}for(A=m;0<=v.l(f);){for(w=Math.max(1,Math.floor(v.m()/f.m())),y=Math.ceil(Math.log(w)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),_=u(w),E=_.j(f);S(E)||0<E.l(v);)w-=y,_=u(w),E=_.j(f);D(_)&&(_=b),A=A.add(_),v=V(v,E)}return new N(A,v)}n.A=function(v){return L(this,v).h},n.and=function(v){for(var f=Math.max(this.g.length,v.g.length),w=[],y=0;y<f;y++)w[y]=this.i(y)&v.i(y);return new a(w,this.h&v.h)},n.or=function(v){for(var f=Math.max(this.g.length,v.g.length),w=[],y=0;y<f;y++)w[y]=this.i(y)|v.i(y);return new a(w,this.h|v.h)},n.xor=function(v){for(var f=Math.max(this.g.length,v.g.length),w=[],y=0;y<f;y++)w[y]=this.i(y)^v.i(y);return new a(w,this.h^v.h)};function R(v){for(var f=v.g.length+1,w=[],y=0;y<f;y++)w[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(w,v.h)}function I(v,f){var w=f>>5;f%=32;for(var y=v.g.length-w,A=[],_=0;_<y;_++)A[_]=0<f?v.i(_+w)>>>f|v.i(_+w+1)<<32-f:v.i(_+w);return new a(A,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Sl=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=p,Ve=a}).apply(typeof xa<"u"?xa:typeof self<"u"?self:typeof window<"u"?window:{});var Ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pl,Pn,Vl,Si,eo,kl,Dl,Bl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ii=="object"&&Ii];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=e(this);function r(o,c){if(c)t:{var h=i;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in h))break t;h=h[C]}o=o[o.length-1],g=h[o],c=c(g),c!=g&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,g=!1,C={next:function(){if(!g&&h<o.length){var k=h++;return{value:c(k,o[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}r("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function d(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function u(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function m(o,c,h){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(c,C)}}return function(){return o.apply(c,arguments)}}function b(o,c,h){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,b.apply(null,arguments)}function T(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function D(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(g,C,k){for(var M=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)M[Y-2]=arguments[Y];return c.prototype[C].apply(g,M)}}function S(o){const c=o.length;if(0<c){const h=Array(c);for(let g=0;g<c;g++)h[g]=o[g];return h}return[]}function x(o,c){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(d(g)){const C=o.length||0,k=g.length||0;o.length=C+k;for(let M=0;M<k;M++)o[C+M]=g[M]}else o.push(g)}}class V{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function P(o){return/^[\s\xa0]*$/.test(o)}function N(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var R=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function I(o,c,h){for(const g in o)c.call(h,o[g],g,o)}function v(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function f(o){const c={};for(const h in o)c[h]=o[h];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(o,c){let h,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(h in g)o[h]=g[h];for(let k=0;k<w.length;k++)h=w[k],Object.prototype.hasOwnProperty.call(g,h)&&(o[h]=g[h])}}function A(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function _(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Xt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class ${constructor(){this.h=this.g=null}add(c,h){const g=Vt.get();g.set(c,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Vt=new V(()=>new we,o=>o.reset());class we{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let kt,Pt=!1,Xt=new $,fn=()=>{const o=l.Promise.resolve(void 0);kt=()=>{o.then(re)}};var re=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(h){_(h)}var c=Vt;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Pt=!1};function Dt(){this.s=this.s,this.C=this.C}Dt.prototype.s=!1,Dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var ai=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Ae(o,c){if(st.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(R){t:{try{L(c.nodeName);var C=!0;break t}catch{}C=!1}C||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:gr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ae.aa.h.call(this)}}D(Ae,st);var gr={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Jt="closure_listenable_"+(1e6*Math.random()|0),mn=0;function Bt(o,c,h,g,C){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!g,this.ha=C,this.key=++mn,this.da=this.fa=!1}function bt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function $t(o){this.src=o,this.g={},this.h=0}$t.prototype.add=function(o,c,h,g,C){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var M=Ee(o,c,g,C);return-1<M?(c=o[M],h||(c.fa=!1)):(c=new Bt(c,this.src,k,!!g,C),c.fa=h,o.push(c)),c};function _e(o,c){var h=c.type;if(h in o.g){var g=o.g[h],C=Array.prototype.indexOf.call(g,c,void 0),k;(k=0<=C)&&Array.prototype.splice.call(g,C,1),k&&(bt(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ee(o,c,h,g){for(var C=0;C<o.length;++C){var k=o[C];if(!k.da&&k.listener==c&&k.capture==!!h&&k.ha==g)return C}return-1}var yr="closure_lm_"+(1e6*Math.random()|0),vr={};function gs(o,c,h,g,C){if(Array.isArray(c)){for(var k=0;k<c.length;k++)gs(o,c[k],h,g,C);return null}return h=bs(h),o&&o[Jt]?o.K(c,h,u(g)?!!g.capture:!1,C):vd(o,c,h,!1,g,C)}function vd(o,c,h,g,C,k){if(!c)throw Error("Invalid event type");var M=u(C)?!!C.capture:!!C,Y=wr(o);if(Y||(o[yr]=Y=new $t(o)),h=Y.add(c,h,g,M,k),h.proxy)return h;if(g=bd(),h.proxy=g,g.src=o,g.listener=h,o.addEventListener)ai||(C=M),C===void 0&&(C=!1),o.addEventListener(c.toString(),g,C);else if(o.attachEvent)o.attachEvent(vs(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function bd(){function o(h){return c.call(o.src,o.listener,h)}const c=wd;return o}function ys(o,c,h,g,C){if(Array.isArray(c))for(var k=0;k<c.length;k++)ys(o,c[k],h,g,C);else g=u(g)?!!g.capture:!!g,h=bs(h),o&&o[Jt]?(o=o.i,c=String(c).toString(),c in o.g&&(k=o.g[c],h=Ee(k,h,g,C),-1<h&&(bt(k[h]),Array.prototype.splice.call(k,h,1),k.length==0&&(delete o.g[c],o.h--)))):o&&(o=wr(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ee(c,h,g,C)),(h=-1<o?c[o]:null)&&br(h))}function br(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Jt])_e(c.i,o);else{var h=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(h,g,o.capture):c.detachEvent?c.detachEvent(vs(h),g):c.addListener&&c.removeListener&&c.removeListener(g),(h=wr(c))?(_e(h,o),h.h==0&&(h.src=null,c[yr]=null)):bt(o)}}}function vs(o){return o in vr?vr[o]:vr[o]="on"+o}function wd(o,c){if(o.da)o=!0;else{c=new Ae(c,this);var h=o.listener,g=o.ha||o.src;o.fa&&br(o),o=h.call(g,c)}return o}function wr(o){return o=o[yr],o instanceof $t?o:null}var Ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function bs(o){return typeof o=="function"?o:(o[Ar]||(o[Ar]=function(c){return o.handleEvent(c)}),o[Ar])}function wt(){Dt.call(this),this.i=new $t(this),this.M=this,this.F=null}D(wt,Dt),wt.prototype[Jt]=!0,wt.prototype.removeEventListener=function(o,c,h,g){ys(this,o,c,h,g)};function Rt(o,c){var h,g=o.F;if(g)for(h=[];g;g=g.F)h.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new st(c,o);else if(c instanceof st)c.target=c.target||o;else{var C=c;c=new st(g,o),y(c,C)}if(C=!0,h)for(var k=h.length-1;0<=k;k--){var M=c.g=h[k];C=li(M,g,!0,c)&&C}if(M=c.g=o,C=li(M,g,!0,c)&&C,C=li(M,g,!1,c)&&C,h)for(k=0;k<h.length;k++)M=c.g=h[k],C=li(M,g,!1,c)&&C}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],g=0;g<h.length;g++)bt(h[g]);delete o.g[c],o.h--}}this.F=null},wt.prototype.K=function(o,c,h,g){return this.i.add(String(o),c,!1,h,g)},wt.prototype.L=function(o,c,h,g){return this.i.add(String(o),c,!0,h,g)};function li(o,c,h,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,k=0;k<c.length;++k){var M=c[k];if(M&&!M.da&&M.capture==h){var Y=M.listener,pt=M.ha||M.src;M.fa&&_e(o.i,M),C=Y.call(pt,g)!==!1&&C}}return C&&!g.defaultPrevented}function ws(o,c,h){if(typeof o=="function")h&&(o=b(o,h));else if(o&&typeof o.handleEvent=="function")o=b(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function As(o){o.g=ws(()=>{o.g=null,o.i&&(o.i=!1,As(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Ad extends Dt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:As(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(o){Dt.call(this),this.h=o,this.g={}}D(gn,Dt);var _s=[];function Es(o){I(o.g,function(c,h){this.g.hasOwnProperty(h)&&br(c)},o),o.g={}}gn.prototype.N=function(){gn.aa.N.call(this),Es(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _r=l.JSON.stringify,_d=l.JSON.parse,Ed=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Er(){}Er.prototype.h=null;function Is(o){return o.h||(o.h=o.i())}function xs(){}var yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ir(){st.call(this,"d")}D(Ir,st);function xr(){st.call(this,"c")}D(xr,st);var Ie={},Ts=null;function ci(){return Ts=Ts||new wt}Ie.La="serverreachability";function Rs(o){st.call(this,Ie.La,o)}D(Rs,st);function vn(o){const c=ci();Rt(c,new Rs(c))}Ie.STAT_EVENT="statevent";function Cs(o,c){st.call(this,Ie.STAT_EVENT,o),this.stat=c}D(Cs,st);function Ct(o){const c=ci();Rt(c,new Cs(c,o))}Ie.Ma="timingevent";function Ss(o,c){st.call(this,Ie.Ma,o),this.size=c}D(Ss,st);function bn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function Id(o,c,h,g,C,k){o.info(function(){if(o.g)if(k)for(var M="",Y=k.split("&"),pt=0;pt<Y.length;pt++){var J=Y[pt].split("=");if(1<J.length){var At=J[0];J=J[1];var _t=At.split("_");M=2<=_t.length&&_t[1]=="type"?M+(At+"="+J+"&"):M+(At+"=redacted&")}}else M=null;else M=k;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+c+`
`+h+`
`+M})}function xd(o,c,h,g,C,k,M){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+c+`
`+h+`
`+k+" "+M})}function ze(o,c,h,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Rd(o,h)+(g?" "+g:"")})}function Td(o,c){o.info(function(){return"TIMEOUT: "+c})}wn.prototype.info=function(){};function Rd(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var g=h[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var k=C[0];if(k!="noop"&&k!="stop"&&k!="close")for(var M=1;M<C.length;M++)C[M]=""}}}}return _r(h)}catch{return c}}var di={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ps={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tr;function ui(){}D(ui,Er),ui.prototype.g=function(){return new XMLHttpRequest},ui.prototype.i=function(){return{}},Tr=new ui;function oe(o,c,h,g){this.j=o,this.i=c,this.l=h,this.R=g||1,this.U=new gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vs}function Vs(){this.i=null,this.g="",this.h=!1}var ks={},Rr={};function Cr(o,c,h){o.L=1,o.v=mi(Zt(c)),o.m=h,o.P=!0,Ds(o,null)}function Ds(o,c){o.F=Date.now(),hi(o),o.A=Zt(o.v);var h=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Ws(h.i,"t",g),o.C=0,h=o.j.J,o.h=new Vs,o.g=ua(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Ad(b(o.Y,o,o.g),o.O)),c=o.U,h=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(_s[0]=C.toString()),C=_s);for(var k=0;k<C.length;k++){var M=gs(h,C[k],g||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=o.H?f(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),vn(),Id(o.i,o.u,o.A,o.l,o.R,o.m)}oe.prototype.ca=function(o){o=o.target;const c=this.M;c&&Yt(o)==3?c.j():this.Y(o)},oe.prototype.Y=function(o){try{if(o==this.g)t:{const _t=Yt(this.g);var c=this.g.Ba();const He=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||ta(this.g)))){this.J||_t!=4||c==7||(c==8||0>=He?vn(3):vn(2)),Sr(this);var h=this.g.Z();this.X=h;e:if(Bs(this)){var g=ta(this.g);o="";var C=g.length,k=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xe(this),An(this);var M="";break e}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,o+=this.h.i.decode(g[c],{stream:!(k&&c==C-1)});g.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,xd(this.i,this.u,this.A,this.l,this.R,_t,h),this.o){if(this.T&&!this.K){e:{if(this.g){var Y,pt=this.g;if((Y=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Y)){var J=Y;break e}}J=null}if(h=J)ze(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pr(this,h);else{this.o=!1,this.s=3,Ct(12),xe(this),An(this);break t}}if(this.P){h=!0;let jt;for(;!this.J&&this.C<M.length;)if(jt=Cd(this,M),jt==Rr){_t==4&&(this.s=4,Ct(14),h=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==ks){this.s=4,Ct(15),ze(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else ze(this.i,this.l,jt,null),Pr(this,jt);if(Bs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||M.length!=0||this.h.h||(this.s=1,Ct(16),h=!1),this.o=this.o&&h,!h)ze(this.i,this.l,M,"[Invalid Chunked Response]"),xe(this),An(this);else if(0<M.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Lr(At),At.M=!0,Ct(11))}}else ze(this.i,this.l,M,null),Pr(this,M);_t==4&&xe(this),this.o&&!this.J&&(_t==4?aa(this.j,this):(this.o=!1,hi(this)))}else $d(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),xe(this),An(this)}}}catch{}finally{}};function Bs(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Cd(o,c){var h=o.C,g=c.indexOf(`
`,h);return g==-1?Rr:(h=Number(c.substring(h,g)),isNaN(h)?ks:(g+=1,g+h>c.length?Rr:(c=c.slice(g,g+h),o.C=g+h,c)))}oe.prototype.cancel=function(){this.J=!0,xe(this)};function hi(o){o.S=Date.now()+o.I,Ns(o,o.I)}function Ns(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=bn(b(o.ba,o),c)}function Sr(o){o.B&&(l.clearTimeout(o.B),o.B=null)}oe.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Td(this.i,this.A),this.L!=2&&(vn(),Ct(17)),xe(this),this.s=2,An(this)):Ns(this,this.S-o)};function An(o){o.j.G==0||o.J||aa(o.j,o)}function xe(o){Sr(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Es(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Pr(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Vr(h.h,o))){if(!o.K&&Vr(h.h,o)&&h.G==3){try{var g=h.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ai(h),bi(h);else break t;Nr(h),Ct(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=bn(b(h.Za,h),6e3));if(1>=Ms(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Re(h,11)}else if((o.K||h.g==o)&&Ai(h),!P(c))for(C=h.Da.g.parse(c),c=0;c<C.length;c++){let J=C[c];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];const At=J[3];At!=null&&(h.la=At,h.j.info("VER="+h.la));const _t=J[4];_t!=null&&(h.Aa=_t,h.j.info("SVER="+h.Aa));const He=J[5];He!=null&&typeof He=="number"&&0<He&&(g=1.5*He,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const jt=o.g;if(jt){const Ei=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ei){var k=g.h;k.g||Ei.indexOf("spdy")==-1&&Ei.indexOf("quic")==-1&&Ei.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(kr(k,k.h),k.h=null))}if(g.D){const Fr=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fr&&(g.ya=Fr,et(g.I,g.D,Fr))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var M=o;if(g.qa=da(g,g.J?g.ia:null,g.W),M.K){Os(g.h,M);var Y=M,pt=g.L;pt&&(Y.I=pt),Y.B&&(Sr(Y),hi(Y)),g.g=M}else oa(g);0<h.i.length&&wi(h)}else J[0]!="stop"&&J[0]!="close"||Re(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Re(h,7):Br(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}vn(4)}catch{}}var Sd=class{constructor(o,c){this.g=o,this.map=c}};function Ls(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fs(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ms(o){return o.h?1:o.g?o.g.size:0}function Vr(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function kr(o,c){o.g?o.g.add(c):o.h=c}function Os(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Ls.prototype.cancel=function(){if(this.i=zs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function zs(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return S(o.i)}function Pd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var c=[],h=o.length,g=0;g<h;g++)c.push(o[g]);return c}c=[],h=0;for(g in o)c[h++]=o[g];return c}function Vd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const g in o)c[h++]=g;return c}}}function js(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Vd(o),g=Pd(o),C=g.length,k=0;k<C;k++)c.call(void 0,g[k],h&&h[k],o)}var qs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kd(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var g=o[h].indexOf("="),C=null;if(0<=g){var k=o[h].substring(0,g);C=o[h].substring(g+1)}else k=o[h];c(k,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Te(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Te){this.h=o.h,pi(this,o.j),this.o=o.o,this.g=o.g,fi(this,o.s),this.l=o.l;var c=o.i,h=new In;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Hs(this,h),this.m=o.m}else o&&(c=String(o).match(qs))?(this.h=!1,pi(this,c[1]||"",!0),this.o=_n(c[2]||""),this.g=_n(c[3]||"",!0),fi(this,c[4]),this.l=_n(c[5]||"",!0),Hs(this,c[6]||"",!0),this.m=_n(c[7]||"")):(this.h=!1,this.i=new In(null,this.h))}Te.prototype.toString=function(){var o=[],c=this.j;c&&o.push(En(c,Us,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(En(c,Us,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(En(h,h.charAt(0)=="/"?Nd:Bd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",En(h,Fd)),o.join("")};function Zt(o){return new Te(o)}function pi(o,c,h){o.j=h?_n(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function fi(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Hs(o,c,h){c instanceof In?(o.i=c,Md(o.i,o.h)):(h||(c=En(c,Ld)),o.i=new In(c,o.h))}function et(o,c,h){o.i.set(c,h)}function mi(o){return et(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function _n(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function En(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Dd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Dd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Us=/[#\/\?@]/g,Bd=/[#\?:]/g,Nd=/[#\?]/g,Ld=/[#\?@]/g,Fd=/#/g;function In(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function se(o){o.g||(o.g=new Map,o.h=0,o.i&&kd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=In.prototype,n.add=function(o,c){se(this),this.i=null,o=je(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function $s(o,c){se(o),c=je(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Qs(o,c){return se(o),c=je(o,c),o.g.has(c)}n.forEach=function(o,c){se(this),this.g.forEach(function(h,g){h.forEach(function(C){o.call(c,C,g,this)},this)},this)},n.na=function(){se(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let g=0;g<c.length;g++){const C=o[g];for(let k=0;k<C.length;k++)h.push(c[g])}return h},n.V=function(o){se(this);let c=[];if(typeof o=="string")Qs(this,o)&&(c=c.concat(this.g.get(je(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return se(this),this.i=null,o=je(this,o),Qs(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Ws(o,c,h){$s(o,c),0<h.length&&(o.i=null,o.g.set(je(o,c),S(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var g=c[h];const k=encodeURIComponent(String(g)),M=this.V(g);for(g=0;g<M.length;g++){var C=k;M[g]!==""&&(C+="="+encodeURIComponent(String(M[g]))),o.push(C)}}return this.i=o.join("&")};function je(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Md(o,c){c&&!o.j&&(se(o),o.i=null,o.g.forEach(function(h,g){var C=g.toLowerCase();g!=C&&($s(this,g),Ws(this,C,h))},o)),o.j=c}function Od(o,c){const h=new wn;if(l.Image){const g=new Image;g.onload=T(ae,h,"TestLoadImage: loaded",!0,c,g),g.onerror=T(ae,h,"TestLoadImage: error",!1,c,g),g.onabort=T(ae,h,"TestLoadImage: abort",!1,c,g),g.ontimeout=T(ae,h,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function zd(o,c){const h=new wn,g=new AbortController,C=setTimeout(()=>{g.abort(),ae(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(k=>{clearTimeout(C),k.ok?ae(h,"TestPingServer: ok",!0,c):ae(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),ae(h,"TestPingServer: error",!1,c)})}function ae(o,c,h,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(h)}catch{}}function jd(){this.g=new Ed}function qd(o,c,h){const g=h||"";try{js(o,function(C,k){let M=C;u(C)&&(M=_r(C)),c.push(g+k+"="+encodeURIComponent(M))})}catch(C){throw c.push(g+"type="+encodeURIComponent("_badmap")),C}}function gi(o){this.l=o.Ub||null,this.j=o.eb||!1}D(gi,Er),gi.prototype.g=function(){return new yi(this.l,this.j)},gi.prototype.i=function(o){return function(){return o}}({});function yi(o,c){wt.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(yi,wt),n=yi.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Tn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gs(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gs(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?xn(this):Tn(this),this.readyState==3&&Gs(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,xn(this))},n.Qa=function(o){this.g&&(this.response=o,xn(this))},n.ga=function(){this.g&&xn(this)};function xn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Tn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Tn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ks(o){let c="";return I(o,function(h,g){c+=g,c+=":",c+=h,c+=`\r
`}),c}function Dr(o,c,h){t:{for(g in h){var g=!1;break t}g=!0}g||(h=Ks(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):et(o,c,h))}function rt(o){wt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(rt,wt);var Hd=/^https?$/i,Ud=["POST","PUT"];n=rt.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tr.g(),this.v=this.o?Is(this.o):Is(Tr),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(k){Xs(this,k);return}if(o=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)h.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())h.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ud,c,void 0))||g||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,M]of h)this.g.setRequestHeader(k,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ys(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){Xs(this,k)}};function Xs(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Js(o),vi(o)}function Js(o){o.A||(o.A=!0,Rt(o,"complete"),Rt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Rt(this,"complete"),Rt(this,"abort"),vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vi(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zs(this):this.bb())},n.bb=function(){Zs(this)};function Zs(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Yt(o)!=4||o.Z()!=2)){if(o.u&&Yt(o)==4)ws(o.Ea,0,o);else if(Rt(o,"readystatechange"),Yt(o)==4){o.h=!1;try{const M=o.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var g;if(g=M===0){var C=String(o.D).match(qs)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!Hd.test(C?C.toLowerCase():"")}h=g}if(h)Rt(o,"complete"),Rt(o,"success");else{o.m=6;try{var k=2<Yt(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",Js(o)}}finally{vi(o)}}}}function vi(o,c){if(o.g){Ys(o);const h=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Rt(o,"ready");try{h.onreadystatechange=g}catch{}}}function Ys(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Yt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),_d(c)}};function ta(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $d(o){const c={};o=(o.g&&2<=Yt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(P(o[g]))continue;var h=A(o[g]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=c[C]||[];c[C]=k,k.push(h)}v(c,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function ea(o){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rn("baseRetryDelayMs",5e3,o),this.cb=Rn("retryDelaySeedMs",1e4,o),this.Wa=Rn("forwardChannelMaxRetries",2,o),this.wa=Rn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ls(o&&o.concurrentRequestLimit),this.Da=new jd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ea.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,g){Ct(0),this.W=o,this.H=c||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=da(this,null,this.W),wi(this)};function Br(o){if(na(o),o.G==3){var c=o.U++,h=Zt(o.I);if(et(h,"SID",o.K),et(h,"RID",c),et(h,"TYPE","terminate"),Cn(o,h),c=new oe(o,o.j,c),c.L=2,c.v=mi(Zt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=ua(c.j,null),c.g.ea(c.v)),c.F=Date.now(),hi(c)}ca(o)}function bi(o){o.g&&(Lr(o),o.g.cancel(),o.g=null)}function na(o){bi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ai(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function wi(o){if(!Fs(o.h)&&!o.s){o.s=!0;var c=o.Ga;kt||fn(),Pt||(kt(),Pt=!0),Xt.add(c,o),o.B=0}}function Qd(o,c){return Ms(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=bn(b(o.Ga,o,c),la(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new oe(this,this.j,o);let k=this.o;if(this.S&&(k?(k=f(k),y(k,this.S)):k=this.S),this.m!==null||this.O||(C.H=k,k=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=ra(this,C,c),h=Zt(this.I),et(h,"RID",o),et(h,"CVER",22),this.D&&et(h,"X-HTTP-Session-Id",this.D),Cn(this,h),k&&(this.O?c="headers="+encodeURIComponent(String(Ks(k)))+"&"+c:this.m&&Dr(h,this.m,k)),kr(this.h,C),this.Ua&&et(h,"TYPE","init"),this.P?(et(h,"$req",c),et(h,"SID","null"),C.T=!0,Cr(C,h,null)):Cr(C,h,c),this.G=2}}else this.G==3&&(o?ia(this,o):this.i.length==0||Fs(this.h)||ia(this))};function ia(o,c){var h;c?h=c.l:h=o.U++;const g=Zt(o.I);et(g,"SID",o.K),et(g,"RID",h),et(g,"AID",o.T),Cn(o,g),o.m&&o.o&&Dr(g,o.m,o.o),h=new oe(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=ra(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),kr(o.h,h),Cr(h,g,c)}function Cn(o,c){o.H&&I(o.H,function(h,g){et(c,g,h)}),o.l&&js({},function(h,g){et(c,g,h)})}function ra(o,c,h){h=Math.min(o.i.length,h);var g=o.l?b(o.l.Na,o.l,o):null;t:{var C=o.i;let k=-1;for(;;){const M=["count="+h];k==-1?0<h?(k=C[0].g,M.push("ofs="+k)):k=0:M.push("ofs="+k);let Y=!0;for(let pt=0;pt<h;pt++){let J=C[pt].g;const At=C[pt].map;if(J-=k,0>J)k=Math.max(0,C[pt].g-100),Y=!1;else try{qd(At,M,"req"+J+"_")}catch{g&&g(At)}}if(Y){g=M.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,g}function oa(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;kt||fn(),Pt||(kt(),Pt=!0),Xt.add(c,o),o.v=0}}function Nr(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=bn(b(o.Fa,o),la(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,sa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=bn(b(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),bi(this),sa(this))};function Lr(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function sa(o){o.g=new oe(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Zt(o.qa);et(c,"RID","rpc"),et(c,"SID",o.K),et(c,"AID",o.T),et(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&et(c,"TO",o.ja),et(c,"TYPE","xmlhttp"),Cn(o,c),o.m&&o.o&&Dr(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=mi(Zt(c)),h.m=null,h.P=!0,Ds(h,o)}n.Za=function(){this.C!=null&&(this.C=null,bi(this),Nr(this),Ct(19))};function Ai(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function aa(o,c){var h=null;if(o.g==c){Ai(o),Lr(o),o.g=null;var g=2}else if(Vr(o.h,c))h=c.D,Os(o.h,c),g=1;else return;if(o.G!=0){if(c.o)if(g==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var C=o.B;g=ci(),Rt(g,new Ss(g,h)),wi(o)}else oa(o);else if(C=c.s,C==3||C==0&&0<c.X||!(g==1&&Qd(o,c)||g==2&&Nr(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),C){case 1:Re(o,5);break;case 4:Re(o,10);break;case 3:Re(o,6);break;default:Re(o,2)}}}function la(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Re(o,c){if(o.j.info("Error code "+c),c==2){var h=b(o.fb,o),g=o.Xa;const C=!g;g=new Te(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||pi(g,"https"),mi(g),C?Od(g.toString(),h):zd(g.toString(),h)}else Ct(2);o.G=0,o.l&&o.l.sa(c),ca(o),na(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function ca(o){if(o.G=0,o.ka=[],o.l){const c=zs(o.h);(c.length!=0||o.i.length!=0)&&(x(o.ka,c),x(o.ka,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.ra()}}function da(o,c,h){var g=h instanceof Te?Zt(h):new Te(h);if(g.g!="")c&&(g.g=c+"."+g.g),fi(g,g.s);else{var C=l.location;g=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var k=new Te(null);g&&pi(k,g),c&&(k.g=c),C&&fi(k,C),h&&(k.l=h),g=k}return h=o.D,c=o.ya,h&&c&&et(g,h,c),et(g,"VER",o.la),Cn(o,g),g}function ua(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new rt(new gi({eb:h})):new rt(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ha(){}n=ha.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _i(){}_i.prototype.g=function(o,c){return new Nt(o,c)};function Nt(o,c){wt.call(this),this.g=new ea(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!P(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!P(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new qe(this)}D(Nt,wt),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Br(this.g)},Nt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=_r(o),o=h);c.i.push(new Sd(c.Ya++,o)),c.G==3&&wi(c)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Br(this.g),delete this.g,Nt.aa.N.call(this)};function pa(o){Ir.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}D(pa,Ir);function fa(){xr.call(this),this.status=1}D(fa,xr);function qe(o){this.g=o}D(qe,ha),qe.prototype.ua=function(){Rt(this.g,"a")},qe.prototype.ta=function(o){Rt(this.g,new pa(o))},qe.prototype.sa=function(o){Rt(this.g,new fa)},qe.prototype.ra=function(){Rt(this.g,"b")},_i.prototype.createWebChannel=_i.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Bl=function(){return new _i},Dl=function(){return ci()},kl=Ie,eo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},di.NO_ERROR=0,di.TIMEOUT=8,di.HTTP_ERROR=6,Si=di,Ps.COMPLETE="complete",Vl=Ps,xs.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",wt.prototype.listen=wt.prototype.K,Pn=xs,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,Pl=rt}).apply(typeof Ii<"u"?Ii:typeof self<"u"?self:typeof window<"u"?window:{});const Ta="@firebase/firestore";/**
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
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let sn="10.14.0";/**
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
 */const ke=new El("@firebase/firestore");function Sn(){return ke.logLevel}function z(n,...t){if(ke.logLevel<=K.DEBUG){const e=t.map(Eo);ke.debug(`Firestore (${sn}): ${n}`,...e)}}function ne(n,...t){if(ke.logLevel<=K.ERROR){const e=t.map(Eo);ke.error(`Firestore (${sn}): ${n}`,...e)}}function Je(n,...t){if(ke.logLevel<=K.WARN){const e=t.map(Eo);ke.warn(`Firestore (${sn}): ${n}`,...e)}}function Eo(n){if(typeof n=="string")return n;try{/**
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
 */function q(n="Unexpected state"){const t=`FIRESTORE (${sn}) INTERNAL ASSERTION FAILED: `+n;throw ne(t),new Error(t)}function X(n,t){n||q()}function U(n,t){return n}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends on{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Nl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class Th{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Rh{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0);let i=this.i;const r=d=>this.i!==i?(i=this.i,e(d)):Promise.resolve();let s=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qt,t.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const d=s;t.enqueueRetryable(async()=>{await d.promise,await r(this.currentUser)})},l=d=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(X(typeof i.accessToken=="string"),new Nl(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new It(t)}}class Ch{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Sh{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Ch(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ph{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){X(this.o===void 0);const i=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new Ph(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class Ll{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=kh(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<e&&(i+=t.charAt(r[s]%t.length))}return i}}function Z(n,t){return n<t?-1:n>t?1:0}function Ze(n,t,e){return n.length===t.length&&n.every((i,r)=>e(i,t[r]))}/**
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
 */class dt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new dt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new dt(0,0))}static max(){return new H(new dt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zn{constructor(t,e,i){e===void 0?e=0:e>t.length&&q(),i===void 0?i=t.length-e:i>t.length-e&&q(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return zn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof zn?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let r=0;r<i;r++){const s=t.get(r),a=e.get(r);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tt extends zn{construct(t,e,i){return new tt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new O(B.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(r=>r.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const Dh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends zn{construct(t,e,i){return new mt(t,e,i)}static isValidIdentifier(t){return Dh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(t){const e=[];let i="",r=0;const s=()=>{if(i.length===0)throw new O(B.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let a=!1;for(;r<t.length;){const l=t[r];if(l==="\\"){if(r+1===t.length)throw new O(B.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=d,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(i+=l,r++):(s(),r++)}if(s(),a)throw new O(B.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mt(e)}static emptyPath(){return new mt([])}}/**
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
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(tt.fromString(t))}static fromName(t){return new j(tt.fromString(t).popFirst(5))}static empty(){return new j(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new tt(t.slice()))}}function Bh(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=H.fromTimestamp(i===1e9?new dt(e+1,0):new dt(e,i));return new fe(r,j.empty(),t)}function Nh(n){return new fe(n.readTime,n.key,-1)}class fe{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new fe(H.min(),j.empty(),-1)}static max(){return new fe(H.max(),j.empty(),-1)}}function Lh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:Z(n.largestBatchId,t.largestBatchId))}/**
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
 */const Fh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Xn(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==Fh)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new F((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(i,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof F?e:F.resolve(e)}catch(e){return F.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):F.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):F.reject(e)}static resolve(t){return new F((e,i)=>{e(t)})}static reject(t){return new F((e,i)=>{i(t)})}static waitFor(t){return new F((e,i)=>{let r=0,s=0,a=!1;t.forEach(l=>{++r,l.next(()=>{++s,a&&s===r&&e()},d=>i(d))}),a=!0,s===r&&e()})}static or(t){let e=F.resolve(!1);for(const i of t)e=e.next(r=>r?F.resolve(r):i());return e}static forEach(t,e){const i=[];return t.forEach((r,s)=>{i.push(e.call(this,r,s))}),this.waitFor(i)}static mapArray(t,e){return new F((i,r)=>{const s=t.length,a=new Array(s);let l=0;for(let d=0;d<s;d++){const u=d;e(t[u]).next(p=>{a[u]=p,++l,l===s&&i(a)},p=>r(p))}})}static doWhile(t,e){return new F((i,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):i()};s()})}}function Oh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Io{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Io.oe=-1;function Zn(n){return n==null}function Mi(n){return n===0&&1/n==-1/0}function zh(n){return typeof n=="number"&&Number.isInteger(n)&&!Mi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ra(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Fe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Fl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class nt{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return e+i.left.size;r<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xi(this.root,t,this.comparator,!1)}getReverseIterator(){return new xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xi(this.root,t,this.comparator,!0)}}class xi{constructor(t,e,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,i,r,s){this.key=t,this.value=e,this.color=i??ft.RED,this.left=r??ft.EMPTY,this.right=s??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,r,s){return new ft(t??this.key,e??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,i),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return ft.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const t=this.left.check();if(t!==this.right.check())throw q();return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,i,r,s){return this}insert(t,e,i){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ca(this.data.getIterator())}getIteratorFrom(t){return new Ca(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof gt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new gt(this.comparator);return e.data=t,e}}class Ca{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(t){this.fields=t,t.sort(mt.comparator)}static empty(){return new Lt([])}unionWith(t){let e=new gt(mt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Lt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ze(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class Ml extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ml("Invalid base64 string: "+s):s}}(t);return new vt(e)}static fromUint8Array(t){const e=function(r){let s="";for(let a=0;a<r.length;++a)s+=String.fromCharCode(r[a]);return s}(t);return new vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const jh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function me(n){if(X(!!n),typeof n=="string"){let t=0;const e=jh.exec(n);if(X(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function De(n){return typeof n=="string"?vt.fromBase64String(n):vt.fromUint8Array(n)}/**
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
 */function xo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function To(n){const t=n.mapValue.fields.__previous_value__;return xo(t)?To(t):t}function jn(n){const t=me(n.mapValue.fields.__local_write_time__.timestampValue);return new dt(t.seconds,t.nanos)}/**
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
 */class qh{constructor(t,e,i,r,s,a,l,d,u){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=u}}class qn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ti={mapValue:{}};function Be(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xo(n)?4:Uh(n)?9007199254740991:Hh(n)?10:11:q()}function Gt(n,t){if(n===t)return!0;const e=Be(n);if(e!==Be(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return jn(n).isEqual(jn(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const a=me(r.timestampValue),l=me(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,s){return De(r.bytesValue).isEqual(De(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,s){return ot(r.geoPointValue.latitude)===ot(s.geoPointValue.latitude)&&ot(r.geoPointValue.longitude)===ot(s.geoPointValue.longitude)}(n,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ot(r.integerValue)===ot(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const a=ot(r.doubleValue),l=ot(s.doubleValue);return a===l?Mi(a)===Mi(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Ze(n.arrayValue.values||[],t.arrayValue.values||[],Gt);case 10:case 11:return function(r,s){const a=r.mapValue.fields||{},l=s.mapValue.fields||{};if(Ra(a)!==Ra(l))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(l[d]===void 0||!Gt(a[d],l[d])))return!1;return!0}(n,t);default:return q()}}function Hn(n,t){return(n.values||[]).find(e=>Gt(e,t))!==void 0}function Ye(n,t){if(n===t)return 0;const e=Be(n),i=Be(t);if(e!==i)return Z(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=ot(s.integerValue||s.doubleValue),d=ot(a.integerValue||a.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(n,t);case 3:return Sa(n.timestampValue,t.timestampValue);case 4:return Sa(jn(n),jn(t));case 5:return Z(n.stringValue,t.stringValue);case 6:return function(s,a){const l=De(s),d=De(a);return l.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),d=a.split("/");for(let u=0;u<l.length&&u<d.length;u++){const p=Z(l[u],d[u]);if(p!==0)return p}return Z(l.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=Z(ot(s.latitude),ot(a.latitude));return l!==0?l:Z(ot(s.longitude),ot(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Pa(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,d,u,p;const m=s.fields||{},b=a.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,D=(d=b.value)===null||d===void 0?void 0:d.arrayValue,S=Z(((u=T==null?void 0:T.values)===null||u===void 0?void 0:u.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return S!==0?S:Pa(T,D)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===Ti.mapValue&&a===Ti.mapValue)return 0;if(s===Ti.mapValue)return 1;if(a===Ti.mapValue)return-1;const l=s.fields||{},d=Object.keys(l),u=a.fields||{},p=Object.keys(u);d.sort(),p.sort();for(let m=0;m<d.length&&m<p.length;++m){const b=Z(d[m],p[m]);if(b!==0)return b;const T=Ye(l[d[m]],u[p[m]]);if(T!==0)return T}return Z(d.length,p.length)}(n.mapValue,t.mapValue);default:throw q()}}function Sa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Z(n,t);const e=me(n),i=me(t),r=Z(e.seconds,i.seconds);return r!==0?r:Z(e.nanos,i.nanos)}function Pa(n,t){const e=n.values||[],i=t.values||[];for(let r=0;r<e.length&&r<i.length;++r){const s=Ye(e[r],i[r]);if(s)return s}return Z(e.length,i.length)}function tn(n){return no(n)}function no(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=me(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return De(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",r=!0;for(const s of e.values||[])r?r=!1:i+=",",i+=no(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const a of i)s?s=!1:r+=",",r+=`${a}:${no(e.fields[a])}`;return r+"}"}(n.mapValue):q()}function Va(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function io(n){return!!n&&"integerValue"in n}function Ro(n){return!!n&&"arrayValue"in n}function ka(n){return!!n&&"nullValue"in n}function Da(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pi(n){return!!n&&"mapValue"in n}function Hh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Dn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Fe(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Dn(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Dn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Uh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class St{constructor(t){this.value=t}static empty(){return new St({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Pi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Dn(e)}setAll(t){let e=mt.emptyPath(),i={},r=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,i,r),i={},r=[],e=l.popLast()}a?i[l.lastSegment()]=Dn(a):r.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,i,r)}delete(t){const e=this.field(t.popLast());Pi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=e.mapValue.fields[t.get(i)];Pi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,i){Fe(e,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new St(Dn(this.value))}}function Ol(n){const t=[];return Fe(n.fields,(e,i)=>{const r=new mt([e]);if(Pi(i)){const s=Ol(i.mapValue).fields;if(s.length===0)t.push(r);else for(const a of s)t.push(r.child(a))}else t.push(r)}),new Lt(t)}/**
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
 */class ht{constructor(t,e,i,r,s,a,l){this.key=t,this.documentType=e,this.version=i,this.readTime=r,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ht(t,0,H.min(),H.min(),H.min(),St.empty(),0)}static newFoundDocument(t,e,i,r){return new ht(t,1,e,H.min(),i,r,0)}static newNoDocument(t,e){return new ht(t,2,e,H.min(),H.min(),St.empty(),0)}static newUnknownDocument(t,e){return new ht(t,3,e,H.min(),H.min(),St.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oi{constructor(t,e){this.position=t,this.inclusive=e}}function Ba(n,t,e){let i=0;for(let r=0;r<n.position.length;r++){const s=t[r],a=n.position[r];if(s.field.isKeyField()?i=j.comparator(j.fromName(a.referenceValue),e.key):i=Ye(a,e.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Na(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Gt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Un{constructor(t,e="asc"){this.field=t,this.dir=e}}function $h(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class zl{}class lt extends zl{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Wh(t,e,i):e==="array-contains"?new Xh(t,i):e==="in"?new Jh(t,i):e==="not-in"?new Zh(t,i):e==="array-contains-any"?new Yh(t,i):new lt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Gh(t,i):new Kh(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ye(e,this.value)):e!==null&&Be(this.value)===Be(e)&&this.matchesComparison(Ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends zl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new qt(t,e)}matches(t){return jl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function jl(n){return n.op==="and"}function ql(n){return Qh(n)&&jl(n)}function Qh(n){for(const t of n.filters)if(t instanceof qt)return!1;return!0}function ro(n){if(n instanceof lt)return n.field.canonicalString()+n.op.toString()+tn(n.value);if(ql(n))return n.filters.map(t=>ro(t)).join(",");{const t=n.filters.map(e=>ro(e)).join(",");return`${n.op}(${t})`}}function Hl(n,t){return n instanceof lt?function(i,r){return r instanceof lt&&i.op===r.op&&i.field.isEqual(r.field)&&Gt(i.value,r.value)}(n,t):n instanceof qt?function(i,r){return r instanceof qt&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,a,l)=>s&&Hl(a,r.filters[l]),!0):!1}(n,t):void q()}function Ul(n){return n instanceof lt?function(e){return`${e.field.canonicalString()} ${e.op} ${tn(e.value)}`}(n):n instanceof qt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ul).join(" ,")+"}"}(n):"Filter"}class Wh extends lt{constructor(t,e,i){super(t,e,i),this.key=j.fromName(i.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class Gh extends lt{constructor(t,e){super(t,"in",e),this.keys=$l("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Kh extends lt{constructor(t,e){super(t,"not-in",e),this.keys=$l("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function $l(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>j.fromName(i.referenceValue))}class Xh extends lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ro(e)&&Hn(e.arrayValue,this.value)}}class Jh extends lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Hn(this.value.arrayValue,e)}}class Zh extends lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Hn(this.value.arrayValue,e)}}class Yh extends lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ro(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Hn(this.value.arrayValue,i))}}/**
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
 */class tp{constructor(t,e=null,i=[],r=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function La(n,t=null,e=[],i=[],r=null,s=null,a=null){return new tp(n,t,e,i,r,s,a)}function Co(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>ro(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Zn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>tn(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>tn(i)).join(",")),t.ue=e}return t.ue}function So(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!$h(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Hl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Na(n.startAt,t.startAt)&&Na(n.endAt,t.endAt)}function oo(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class an{constructor(t,e=null,i=[],r=[],s=null,a="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ep(n,t,e,i,r,s,a,l){return new an(n,t,e,i,r,s,a,l)}function Xi(n){return new an(n)}function Fa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ql(n){return n.collectionGroup!==null}function Bn(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new gt(mt.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Un(s,i))}),e.has(mt.keyField().canonicalString())||t.ce.push(new Un(mt.keyField(),i))}return t.ce}function Wt(n){const t=U(n);return t.le||(t.le=np(t,Bn(n))),t.le}function np(n,t){if(n.limitType==="F")return La(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Un(r.field,s)});const e=n.endAt?new Oi(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Oi(n.startAt.position,n.startAt.inclusive):null;return La(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function so(n,t){const e=n.filters.concat([t]);return new an(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ao(n,t,e){return new an(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ji(n,t){return So(Wt(n),Wt(t))&&n.limitType===t.limitType}function Wl(n){return`${Co(Wt(n))}|lt:${n.limitType}`}function $e(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(r=>Ul(r)).join(", ")}]`),Zn(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(r=>tn(r)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(r=>tn(r)).join(",")),`Target(${i})`}(Wt(n))}; limitType=${n.limitType})`}function Zi(n,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):j.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,t)&&function(i,r){for(const s of Bn(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(n,t)&&function(i,r){return!(i.startAt&&!function(a,l,d){const u=Ba(a,l,d);return a.inclusive?u<=0:u<0}(i.startAt,Bn(i),r)||i.endAt&&!function(a,l,d){const u=Ba(a,l,d);return a.inclusive?u>=0:u>0}(i.endAt,Bn(i),r))}(n,t)}function ip(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Gl(n){return(t,e)=>{let i=!1;for(const r of Bn(n)){const s=rp(r,t,e);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function rp(n,t,e){const i=n.field.isKeyField()?j.comparator(t.key,e.key):function(s,a,l){const d=a.data.field(s),u=l.data.field(s);return d!==null&&u!==null?Ye(d,u):q()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return q()}}/**
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
 */class ln{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[e]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Fe(this.inner,(e,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return Fl(this.inner)}size(){return this.innerSize}}/**
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
 */const op=new nt(j.comparator);function ie(){return op}const Kl=new nt(j.comparator);function Vn(...n){let t=Kl;for(const e of n)t=t.insert(e.key,e);return t}function Xl(n){let t=Kl;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Se(){return Nn()}function Jl(){return Nn()}function Nn(){return new ln(n=>n.toString(),(n,t)=>n.isEqual(t))}const sp=new nt(j.comparator),ap=new gt(j.comparator);function W(...n){let t=ap;for(const e of n)t=t.add(e);return t}const lp=new gt(Z);function cp(){return lp}/**
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
 */function Po(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mi(t)?"-0":t}}function Zl(n){return{integerValue:""+n}}function dp(n,t){return zh(t)?Zl(t):Po(n,t)}/**
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
 */class Yi{constructor(){this._=void 0}}function up(n,t,e){return n instanceof $n?function(r,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&xo(s)&&(s=To(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof Qn?tc(n,t):n instanceof Wn?ec(n,t):function(r,s){const a=Yl(r,s),l=Ma(a)+Ma(r.Pe);return io(a)&&io(r.Pe)?Zl(l):Po(r.serializer,l)}(n,t)}function hp(n,t,e){return n instanceof Qn?tc(n,t):n instanceof Wn?ec(n,t):e}function Yl(n,t){return n instanceof zi?function(i){return io(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class $n extends Yi{}class Qn extends Yi{constructor(t){super(),this.elements=t}}function tc(n,t){const e=nc(t);for(const i of n.elements)e.some(r=>Gt(r,i))||e.push(i);return{arrayValue:{values:e}}}class Wn extends Yi{constructor(t){super(),this.elements=t}}function ec(n,t){let e=nc(t);for(const i of n.elements)e=e.filter(r=>!Gt(r,i));return{arrayValue:{values:e}}}class zi extends Yi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ma(n){return ot(n.integerValue||n.doubleValue)}function nc(n){return Ro(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class pp{constructor(t,e){this.field=t,this.transform=e}}function fp(n,t){return n.field.isEqual(t.field)&&function(i,r){return i instanceof Qn&&r instanceof Qn||i instanceof Wn&&r instanceof Wn?Ze(i.elements,r.elements,Gt):i instanceof zi&&r instanceof zi?Gt(i.Pe,r.Pe):i instanceof $n&&r instanceof $n}(n.transform,t.transform)}class mp{constructor(t,e){this.version=t,this.transformResults=e}}class ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ct}static exists(t){return new ct(void 0,t)}static updateTime(t){return new ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Vi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class tr{}function ic(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ti(n.key,ct.none()):new Yn(n.key,n.data,ct.none());{const e=n.data,i=St.empty();let r=new gt(mt.comparator);for(let s of t.fields)if(!r.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?i.delete(s):i.set(s,a),r=r.add(s)}return new ye(n.key,i,new Lt(r.toArray()),ct.none())}}function gp(n,t,e){n instanceof Yn?function(r,s,a){const l=r.value.clone(),d=za(r.fieldTransforms,s,a.transformResults);l.setAll(d),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof ye?function(r,s,a){if(!Vi(r.precondition,s))return void s.convertToUnknownDocument(a.version);const l=za(r.fieldTransforms,s,a.transformResults),d=s.data;d.setAll(rc(r)),d.setAll(l),s.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,t,e):function(r,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Ln(n,t,e,i){return n instanceof Yn?function(s,a,l,d){if(!Vi(s.precondition,a))return l;const u=s.value.clone(),p=ja(s.fieldTransforms,d,a);return u.setAll(p),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(n,t,e,i):n instanceof ye?function(s,a,l,d){if(!Vi(s.precondition,a))return l;const u=ja(s.fieldTransforms,d,a),p=a.data;return p.setAll(rc(s)),p.setAll(u),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,t,e,i):function(s,a,l){return Vi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function yp(n,t){let e=null;for(const i of n.fieldTransforms){const r=t.data.field(i.field),s=Yl(i.transform,r||null);s!=null&&(e===null&&(e=St.empty()),e.set(i.field,s))}return e||null}function Oa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Ze(i,r,(s,a)=>fp(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Yn extends tr{constructor(t,e,i,r=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ye extends tr{constructor(t,e,i,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function za(n,t,e){const i=new Map;X(n.length===e.length);for(let r=0;r<e.length;r++){const s=n[r],a=s.transform,l=t.data.field(s.field);i.set(s.field,hp(a,l,e[r]))}return i}function ja(n,t,e){const i=new Map;for(const r of n){const s=r.transform,a=e.data.field(r.field);i.set(r.field,up(s,a,t))}return i}class ti extends tr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oc extends tr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vp{constructor(t,e,i,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&gp(s,t,i[r])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Ln(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Ln(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Jl();return this.mutations.forEach(r=>{const s=t.get(r.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(r.key)?null:l;const d=ic(a,l);d!==null&&i.set(r.key,d),a.isValidDocument()||a.convertToNoDocument(H.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),W())}isEqual(t){return this.batchId===t.batchId&&Ze(this.mutations,t.mutations,(e,i)=>Oa(e,i))&&Ze(this.baseMutations,t.baseMutations,(e,i)=>Oa(e,i))}}class Vo{constructor(t,e,i,r){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=r}static from(t,e,i){X(t.mutations.length===i.length);let r=function(){return sp}();const s=t.mutations;for(let a=0;a<s.length;a++)r=r.insert(s[a].key,i[a].version);return new Vo(t,e,i,r)}}/**
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
 */class bp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class wp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var at,G;function sc(n){switch(n){default:return q();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function ac(n){if(n===void 0)return ne("GRPC error has no .code"),B.UNKNOWN;switch(n){case at.OK:return B.OK;case at.CANCELLED:return B.CANCELLED;case at.UNKNOWN:return B.UNKNOWN;case at.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case at.INTERNAL:return B.INTERNAL;case at.UNAVAILABLE:return B.UNAVAILABLE;case at.UNAUTHENTICATED:return B.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case at.NOT_FOUND:return B.NOT_FOUND;case at.ALREADY_EXISTS:return B.ALREADY_EXISTS;case at.PERMISSION_DENIED:return B.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case at.ABORTED:return B.ABORTED;case at.OUT_OF_RANGE:return B.OUT_OF_RANGE;case at.UNIMPLEMENTED:return B.UNIMPLEMENTED;case at.DATA_LOSS:return B.DATA_LOSS;default:return q()}}(G=at||(at={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ap(){return new TextEncoder}/**
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
 */const _p=new Ve([4294967295,4294967295],0);function qa(n){const t=Ap().encode(n),e=new Sl;return e.update(t),new Uint8Array(e.digest())}function Ha(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ve([e,i],0),new Ve([r,s],0)]}class ko{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new kn(`Invalid padding: ${e}`);if(i<0)throw new kn(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new kn(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new kn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ve.fromNumber(this.Ie)}Ee(t,e,i){let r=t.add(e.multiply(Ve.fromNumber(i)));return r.compare(_p)===1&&(r=new Ve([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=qa(t),[i,r]=Ha(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);if(!this.de(a))return!1}return!0}static create(t,e,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new ko(s,r,e);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=qa(t),[i,r]=Ha(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class er{constructor(t,e,i,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const r=new Map;return r.set(t,ei.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new er(H.min(),r,new nt(Z),ie(),W())}}class ei{constructor(t,e,i,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new ei(i,e,W(),W(),W())}}/**
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
 */class ki{constructor(t,e,i,r){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=r}}class lc{constructor(t,e){this.targetId=t,this.me=e}}class cc{constructor(t,e,i=vt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=r}}class Ua{constructor(){this.fe=0,this.ge=Qa(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=W(),e=W(),i=W();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:i=i.add(r);break;default:q()}}),new ei(this.pe,this.ye,t,e,i)}Ce(){this.we=!1,this.ge=Qa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ep{constructor(t){this.Le=t,this.Be=new Map,this.ke=ie(),this.qe=$a(),this.Qe=new nt(Z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:q()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,i=t.me.count,r=this.Je(e);if(r){const s=r.target;if(oo(s))if(i===0){const a=new j(s.path);this.Ue(e,a,ht.newNoDocument(a,H.min()))}else X(i===1);else{const a=this.Ye(e);if(a!==i){const l=this.Ze(t),d=l?this.Xe(l,t,a):1;if(d!==0){this.je(e);const u=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,u)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=e;let a,l;try{a=De(i).toUint8Array()}catch(d){if(d instanceof Ml)return Je("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new ko(a,r,s)}catch(d){return Je(d instanceof kn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Ie===0?null:l}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let r=0;return i.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&oo(l.target)){const d=new j(l.target.path);this.ke.get(d)!==null||this.it(a,d)||this.Ue(a,d,ht.newNoDocument(d,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let i=W();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(d=>{const u=this.Je(d);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const r=new er(t,e,this.Qe,this.ke,i);return this.ke=ie(),this.qe=$a(),this.Qe=new nt(Z),r}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ua,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new gt(Z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||z("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ua),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function $a(){return new nt(j.comparator)}function Qa(){return new nt(j.comparator)}const Ip={asc:"ASCENDING",desc:"DESCENDING"},xp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tp={and:"AND",or:"OR"};class Rp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function lo(n,t){return n.useProto3Json||Zn(t)?t:{value:t}}function ji(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Cp(n,t){return ji(n,t.toTimestamp())}function Ft(n){return X(!!n),H.fromTimestamp(function(e){const i=me(e);return new dt(i.seconds,i.nanos)}(n))}function Do(n,t){return co(n,t).canonicalString()}function co(n,t){const e=function(r){return new tt(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function uc(n){const t=tt.fromString(n);return X(yc(t)),t}function qi(n,t){return Do(n.databaseId,t.path)}function Fn(n,t){const e=uc(t);if(e.get(1)!==n.databaseId.projectId)throw new O(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(pc(e))}function hc(n,t){return Do(n.databaseId,t)}function Sp(n){const t=uc(n);return t.length===4?tt.emptyPath():pc(t)}function uo(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pc(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Wa(n,t,e){return{name:qi(n,t),fields:e.value.mapValue.fields}}function Pp(n,t){return"found"in t?function(i,r){X(!!r.found),r.found.name,r.found.updateTime;const s=Fn(i,r.found.name),a=Ft(r.found.updateTime),l=r.found.createTime?Ft(r.found.createTime):H.min(),d=new St({mapValue:{fields:r.found.fields}});return ht.newFoundDocument(s,a,l,d)}(n,t):"missing"in t?function(i,r){X(!!r.missing),X(!!r.readTime);const s=Fn(i,r.missing),a=Ft(r.readTime);return ht.newNoDocument(s,a)}(n,t):q()}function Vp(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,p){return u.useProto3Json?(X(p===void 0||typeof p=="string"),vt.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array),vt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(u){const p=u.code===void 0?B.UNKNOWN:ac(u.code);return new O(p,u.message||"")}(a);e=new cc(i,r,s,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Fn(n,i.document.name),s=Ft(i.document.updateTime),a=i.document.createTime?Ft(i.document.createTime):H.min(),l=new St({mapValue:{fields:i.document.fields}}),d=ht.newFoundDocument(r,s,a,l),u=i.targetIds||[],p=i.removedTargetIds||[];e=new ki(u,p,d.key,d)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Fn(n,i.document),s=i.readTime?Ft(i.readTime):H.min(),a=ht.newNoDocument(r,s),l=i.removedTargetIds||[];e=new ki([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Fn(n,i.document),s=i.removedTargetIds||[];e=new ki([],s,r,null)}else{if(!("filter"in t))return q();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,a=new wp(r,s),l=i.targetId;e=new lc(l,a)}}return e}function fc(n,t){let e;if(t instanceof Yn)e={update:Wa(n,t.key,t.value)};else if(t instanceof ti)e={delete:qi(n,t.key)};else if(t instanceof ye)e={update:Wa(n,t.key,t.data),updateMask:zp(t.fieldMask)};else{if(!(t instanceof oc))return q();e={verify:qi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const l=a.transform;if(l instanceof $n)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof zi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw q()}(0,i))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Cp(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(n,t.precondition)),e}function kp(n,t){return n&&n.length>0?(X(t!==void 0),n.map(e=>function(r,s){let a=r.updateTime?Ft(r.updateTime):Ft(s);return a.isEqual(H.min())&&(a=Ft(s)),new mp(a,r.transformResults||[])}(e,t))):[]}function Dp(n,t){return{documents:[hc(n,t.path)]}}function Bp(n,t){const e={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=hc(n,r);const s=function(u){if(u.length!==0)return gc(qt.create(u,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(u){if(u.length!==0)return u.map(p=>function(b){return{field:Qe(b.field),direction:Fp(b.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=lo(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:e,parent:r}}function Np(n){let t=Sp(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let r=null;if(i>0){X(i===1);const p=e.from[0];p.allDescendants?r=p.collectionId:t=t.child(p.collectionId)}let s=[];e.where&&(s=function(m){const b=mc(m);return b instanceof qt&&ql(b)?b.getFilters():[b]}(e.where));let a=[];e.orderBy&&(a=function(m){return m.map(b=>function(D){return new Un(We(D.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(b))}(e.orderBy));let l=null;e.limit&&(l=function(m){let b;return b=typeof m=="object"?m.value:m,Zn(b)?null:b}(e.limit));let d=null;e.startAt&&(d=function(m){const b=!!m.before,T=m.values||[];return new Oi(T,b)}(e.startAt));let u=null;return e.endAt&&(u=function(m){const b=!m.before,T=m.values||[];return new Oi(T,b)}(e.endAt)),ep(t,r,a,s,l,"F",d,u)}function Lp(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function mc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=We(e.unaryFilter.field);return lt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=We(e.unaryFilter.field);return lt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=We(e.unaryFilter.field);return lt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=We(e.unaryFilter.field);return lt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(e){return lt.create(We(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return qt.create(e.compositeFilter.filters.map(i=>mc(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(n):q()}function Fp(n){return Ip[n]}function Mp(n){return xp[n]}function Op(n){return Tp[n]}function Qe(n){return{fieldPath:n.canonicalString()}}function We(n){return mt.fromServerFormat(n.fieldPath)}function gc(n){return n instanceof lt?function(e){if(e.op==="=="){if(Da(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NAN"}};if(ka(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Da(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NOT_NAN"}};if(ka(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qe(e.field),op:Mp(e.op),value:e.value}}}(n):n instanceof qt?function(e){const i=e.getFilters().map(r=>gc(r));return i.length===1?i[0]:{compositeFilter:{op:Op(e.op),filters:i}}}(n):q()}function zp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function yc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class de{constructor(t,e,i,r,s=H.min(),a=H.min(),l=vt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new de(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class jp{constructor(t){this.ct=t}}function qp(n){const t=Np({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ao(t,t.limit,"L"):t}/**
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
 */class Hp{constructor(){this.un=new Up}addToCollectionParentIndex(t,e){return this.un.add(e),F.resolve()}getCollectionParents(t,e){return F.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return F.resolve()}deleteFieldIndex(t,e){return F.resolve()}deleteAllFieldIndexes(t){return F.resolve()}createTargetIndexes(t,e){return F.resolve()}getDocumentsMatchingTarget(t,e){return F.resolve(null)}getIndexType(t,e){return F.resolve(0)}getFieldIndexes(t,e){return F.resolve([])}getNextCollectionGroupToUpdate(t){return F.resolve(null)}getMinOffset(t,e){return F.resolve(fe.min())}getMinOffsetFromCollectionGroup(t,e){return F.resolve(fe.min())}updateCollectionGroup(t,e,i){return F.resolve()}updateIndexEntries(t,e){return F.resolve()}}class Up{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e]||new gt(tt.comparator),s=!r.has(i);return this.index[e]=r.add(i),s}has(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e];return r&&r.has(i)}getEntries(t){return(this.index[t]||new gt(tt.comparator)).toArray()}}/**
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
 */class en{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new en(0)}static kn(){return new en(-1)}}/**
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
 */class $p{constructor(){this.changes=new ln(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ht.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?F.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Qp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Wp{constructor(t,e,i,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(i!==null&&Ln(i.mutation,r,Lt.empty(),dt.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,W()).next(()=>i))}getLocalViewOfDocuments(t,e,i=W()){const r=Se();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,i).next(s=>{let a=Vn();return s.forEach((l,d)=>{a=a.insert(l,d.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const i=Se();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,W()))}populateOverlays(t,e,i){const r=[];return i.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,i,r){let s=ie();const a=Nn(),l=function(){return Nn()}();return e.forEach((d,u)=>{const p=i.get(u.key);r.has(u.key)&&(p===void 0||p.mutation instanceof ye)?s=s.insert(u.key,u):p!==void 0?(a.set(u.key,p.mutation.getFieldMask()),Ln(p.mutation,u,p.mutation.getFieldMask(),dt.now())):a.set(u.key,Lt.empty())}),this.recalculateAndSaveOverlays(t,s).next(d=>(d.forEach((u,p)=>a.set(u,p)),e.forEach((u,p)=>{var m;return l.set(u,new Qp(p,(m=a.get(u))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(t,e){const i=Nn();let r=new nt((a,l)=>a-l),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(d=>{const u=e.get(d);if(u===null)return;let p=i.get(d)||Lt.empty();p=l.applyToLocalView(u,p),i.set(d,p);const m=(r.get(l.batchId)||W()).add(d);r=r.insert(l.batchId,m)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),u=d.key,p=d.value,m=Jl();p.forEach(b=>{if(!s.has(b)){const T=ic(e.get(b),i.get(b));T!==null&&m.set(b,T),s=s.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(t,u,m))}return F.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,r){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ql(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,r):this.getDocumentsMatchingCollectionQuery(t,e,i,r)}getNextDocuments(t,e,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,r).next(s=>{const a=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,r-s.size):F.resolve(Se());let l=-1,d=s;return a.next(u=>F.forEach(u,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?F.resolve():this.remoteDocumentCache.getEntry(t,p).next(b=>{d=d.insert(p,b)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,d,u,W())).next(p=>({batchId:l,changes:Xl(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(i=>{let r=Vn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,i,r){const s=e.collectionGroup;let a=Vn();return this.indexManager.getCollectionParents(t,s).next(l=>F.forEach(l,d=>{const u=function(m,b){return new an(b,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(e,d.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,i,r).next(p=>{p.forEach((m,b)=>{a=a.insert(m,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,s,r))).next(a=>{s.forEach((d,u)=>{const p=u.getKey();a.get(p)===null&&(a=a.insert(p,ht.newInvalidDocument(p)))});let l=Vn();return a.forEach((d,u)=>{const p=s.get(d);p!==void 0&&Ln(p.mutation,u,Lt.empty(),dt.now()),Zi(e,u)&&(l=l.insert(d,u))}),l})}}/**
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
 */class Gp{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return F.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Ft(r.createTime)}}(e)),F.resolve()}getNamedQuery(t,e){return F.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:qp(r.bundledQuery),readTime:Ft(r.readTime)}}(e)),F.resolve()}}/**
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
 */class Kp{constructor(){this.overlays=new nt(j.comparator),this.Ir=new Map}getOverlay(t,e){return F.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Se();return F.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((r,s)=>{this.ht(t,e,s)}),F.resolve()}removeOverlaysForBatchId(t,e,i){const r=this.Ir.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),F.resolve()}getOverlaysForCollection(t,e,i){const r=Se(),s=e.length+1,a=new j(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const d=l.getNext().value,u=d.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&d.largestBatchId>i&&r.set(d.getKey(),d)}return F.resolve(r)}getOverlaysForCollectionGroup(t,e,i,r){let s=new nt((u,p)=>u-p);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>i){let p=s.get(u.largestBatchId);p===null&&(p=Se(),s=s.insert(u.largestBatchId,p)),p.set(u.getKey(),u)}}const l=Se(),d=s.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((u,p)=>l.set(u,p)),!(l.size()>=r)););return F.resolve(l)}ht(t,e,i){const r=this.overlays.get(i.key);if(r!==null){const a=this.Ir.get(r.largestBatchId).delete(i.key);this.Ir.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new bp(e,i));let s=this.Ir.get(e);s===void 0&&(s=W(),this.Ir.set(e,s)),this.Ir.set(e,s.add(i.key))}}/**
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
 */class Xp{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(t){return F.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,F.resolve()}}/**
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
 */class Bo{constructor(){this.Tr=new gt(ut.Er),this.dr=new gt(ut.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new ut(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new ut(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new j(new tt([])),i=new ut(e,t),r=new ut(e,t+1),s=[];return this.dr.forEachInRange([i,r],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new j(new tt([])),i=new ut(e,t),r=new ut(e,t+1);let s=W();return this.dr.forEachInRange([i,r],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new ut(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class ut{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return j.comparator(t.key,e.key)||Z(t.wr,e.wr)}static Ar(t,e){return Z(t.wr,e.wr)||j.comparator(t.key,e.key)}}/**
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
 */class Jp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new gt(ut.Er)}checkEmpty(t){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vp(s,e,i,r);this.mutationQueue.push(a);for(const l of r)this.br=this.br.add(new ut(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(t,e){return F.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,r=this.vr(i),s=r<0?0:r;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new ut(e,0),r=new ut(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,r],a=>{const l=this.Dr(a.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new gt(Z);return e.forEach(r=>{const s=new ut(r,0),a=new ut(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{i=i.add(l.wr)})}),F.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,r=i.length+1;let s=i;j.isDocumentKey(s)||(s=s.child(""));const a=new ut(new j(s),0);let l=new gt(Z);return this.br.forEachWhile(d=>{const u=d.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(l=l.add(d.wr)),!0)},a),F.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(i=>{const r=this.Dr(i);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){X(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return F.forEach(e.mutations,r=>{const s=new ut(r.key,e.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new ut(e,0),r=this.br.firstAfterOrEqual(i);return F.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,F.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Zp{constructor(t){this.Mr=t,this.docs=function(){return new nt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,r=this.docs.get(i),s=r?r.size:0,a=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return F.resolve(i?i.document.mutableCopy():ht.newInvalidDocument(e))}getEntries(t,e){let i=ie();return e.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():ht.newInvalidDocument(r))}),F.resolve(i)}getDocumentsMatchingQuery(t,e,i,r){let s=ie();const a=e.path,l=new j(a.child("")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:u,value:{document:p}}=d.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||Lh(Nh(p),i)<=0||(r.has(p.key)||Zi(e,p))&&(s=s.insert(p.key,p.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(t,e,i,r){q()}Or(t,e){return F.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Yp(this)}getSize(t){return F.resolve(this.size)}}class Yp extends $p{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(i)}),F.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class tf{constructor(t){this.persistence=t,this.Nr=new ln(e=>Co(e),So),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Bo,this.targetCount=0,this.kr=en.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,r)=>e(r)),F.resolve()}getLastRemoteSnapshotVersion(t){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return F.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),F.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new en(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,F.resolve()}updateTargetData(t,e){return this.Kn(e),F.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,F.resolve()}removeTargets(t,e,i){let r=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&i.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),r++)}),F.waitFor(s).next(()=>r)}getTargetCount(t){return F.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return F.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),F.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(a=>{s.push(r.markPotentiallyOrphaned(t,a))}),F.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),F.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return F.resolve(i)}containsKey(t,e){return F.resolve(this.Br.containsKey(e))}}/**
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
 */class ef{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Io(0),this.Kr=!1,this.Kr=!0,this.$r=new Xp,this.referenceDelegate=t(this),this.Ur=new tf(this),this.indexManager=new Hp,this.remoteDocumentCache=function(r){return new Zp(r)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new jp(e),this.Gr=new Gp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Kp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new Jp(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){z("MemoryPersistence","Starting transaction:",t);const r=new nf(this.Qr.next());return this.referenceDelegate.zr(),i(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(t,e){return F.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class nf extends Mh{constructor(t){super(),this.currentSequenceNumber=t}}class No{constructor(t){this.persistence=t,this.Jr=new Bo,this.Yr=null}static Zr(t){return new No(t)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),F.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),F.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),F.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,i=>{const r=j.fromPath(i);return this.ei(t,r).next(s=>{s||e.removeEntry(r,H.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return F.or([()=>F.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Lo{constructor(t,e,i,r){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=r}static Wi(t,e){let i=W(),r=W();for(const s of e.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Lo(t,e.fromCache,i,r)}}/**
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
 */class rf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class of{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return au()?8:Oh(ou())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,r){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,r,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new rf;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,i,r){return i.documentReadCount<this.ji?(Sn()<=K.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",$e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Sn()<=K.DEBUG&&z("QueryEngine","Query:",$e(e),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Hi*r?(Sn()<=K.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",$e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Wt(e))):F.resolve())}Yi(t,e){if(Fa(e))return F.resolve(null);let i=Wt(e);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=ao(e,null,"F"),i=Wt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=W(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(d=>{const u=this.ts(e,l);return this.ns(e,u,a,d.readTime)?this.Yi(t,ao(e,null,"F")):this.rs(t,u,e,d)}))})))}Zi(t,e,i,r){return Fa(e)||r.isEqual(H.min())?F.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const a=this.ts(e,s);return this.ns(e,a,i,r)?F.resolve(null):(Sn()<=K.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),$e(e)),this.rs(t,a,e,Bh(r,-1)).next(l=>l))})}ts(t,e){let i=new gt(Gl(t));return e.forEach((r,s)=>{Zi(t,s)&&(i=i.add(s))}),i}ns(t,e,i,r){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,e,i){return Sn()<=K.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",$e(e)),this.Ji.getDocumentsMatchingQuery(t,e,fe.min(),i)}rs(t,e,i,r){return this.Ji.getDocumentsMatchingQuery(t,i,r).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class sf{constructor(t,e,i,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new nt(Z),this._s=new ln(s=>Co(s),So),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Wp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function af(n,t,e,i){return new sf(n,t,e,i)}async function vc(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let r;return e.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],l=[];let d=W();for(const u of r){a.push(u.batchId);for(const p of u.mutations)d=d.add(p.key)}for(const u of s){l.push(u.batchId);for(const p of u.mutations)d=d.add(p.key)}return e.localDocuments.getDocuments(i,d).next(u=>({hs:u,removedBatchIds:a,addedBatchIds:l}))})})}function lf(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,d,u,p){const m=u.batch,b=m.keys();let T=F.resolve();return b.forEach(D=>{T=T.next(()=>p.getEntry(d,D)).next(S=>{const x=u.docVersions.get(D);X(x!==null),S.version.compareTo(x)<0&&(m.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),p.addEntry(S)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(d,m))}(e,i,t,s).next(()=>s.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let d=W();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(d=d.add(l.batch.mutations[u].key));return d}(t))).next(()=>e.localDocuments.getDocuments(i,r))})}function bc(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function cf(n,t){const e=U(n),i=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const l=[];t.targetChanges.forEach((p,m)=>{const b=r.get(m);if(!b)return;l.push(e.Ur.removeMatchingKeys(s,p.removedDocuments,m).next(()=>e.Ur.addMatchingKeys(s,p.addedDocuments,m)));let T=b.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(m)!==null?T=T.withResumeToken(vt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):p.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(p.resumeToken,i)),r=r.insert(m,T),function(S,x,V){return S.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(b,T,p)&&l.push(e.Ur.updateTargetData(s,T))});let d=ie(),u=W();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(df(s,a,t.documentUpdates).next(p=>{d=p.Ps,u=p.Is})),!i.isEqual(H.min())){const p=e.Ur.getLastRemoteSnapshotVersion(s).next(m=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));l.push(p)}return F.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,d,u)).next(()=>d)}).then(s=>(e.os=r,s))}function df(n,t,e){let i=W(),r=W();return e.forEach(s=>i=i.add(s)),t.getEntries(n,i).next(s=>{let a=ie();return e.forEach((l,d)=>{const u=s.get(l);d.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),d.isNoDocument()&&d.version.isEqual(H.min())?(t.removeEntry(l,d.readTime),a=a.insert(l,d)):!u.isValidDocument()||d.version.compareTo(u.version)>0||d.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(d),a=a.insert(l,d)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",d.version)}),{Ps:a,Is:r}})}function uf(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function hf(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return e.Ur.getTargetData(i,t).next(s=>s?(r=s,F.resolve(r)):e.Ur.allocateTargetId(i).next(a=>(r=new de(t,a,"TargetPurposeListen",i.currentSequenceNumber),e.Ur.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=e.os.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(i.targetId,i),e._s.set(t,i.targetId)),i})}async function ho(n,t,e){const i=U(n),r=i.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Jn(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(r.target)}function Ga(n,t,e){const i=U(n);let r=H.min(),s=W();return i.persistence.runTransaction("Execute query","readwrite",a=>function(d,u,p){const m=U(d),b=m._s.get(p);return b!==void 0?F.resolve(m.os.get(b)):m.Ur.getTargetData(u,p)}(i,a,Wt(t)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,l.targetId).next(d=>{s=d})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,e?r:H.min(),e?s:W())).next(l=>(pf(i,ip(t),l),{documents:l,Ts:s})))}function pf(n,t,e){let i=n.us.get(t)||H.min();e.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.us.set(t,i)}class Ka{constructor(){this.activeTargetIds=cp()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ff{constructor(){this.so=new Ka,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ka,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class mf{_o(t){}shutdown(){}}/**
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
 */class Xa{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ri=null;function qr(){return Ri===null?Ri=function(){return 268435456+Math.round(2147483648*Math.random())}():Ri++,"0x"+Ri.toString(16)}/**
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
 */const gf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yf{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const Et="WebChannelConnection";class vf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(e,i,r,s,a){const l=qr(),d=this.xo(e,i.toUriEncodedString());z("RestConnection",`Sending RPC '${e}' ${l}:`,d,r);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,a),this.No(e,d,u,r).then(p=>(z("RestConnection",`Received RPC '${e}' ${l}: `,p),p),p=>{throw Je("RestConnection",`RPC '${e}' ${l} failed with error: `,p,"url: ",d,"request:",r),p})}Lo(e,i,r,s,a,l){return this.Mo(e,i,r,s,a)}Oo(e,i,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>e[a]=s),r&&r.headers.forEach((s,a)=>e[a]=s)}xo(e,i){const r=gf[e];return`${this.Do}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,r){const s=qr();return new Promise((a,l)=>{const d=new Pl;d.setWithCredentials(!0),d.listenOnce(Vl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Si.NO_ERROR:const p=d.getResponseJson();z(Et,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(p)),a(p);break;case Si.TIMEOUT:z(Et,`RPC '${t}' ${s} timed out`),l(new O(B.DEADLINE_EXCEEDED,"Request time out"));break;case Si.HTTP_ERROR:const m=d.getStatus();if(z(Et,`RPC '${t}' ${s} failed with status:`,m,"response text:",d.getResponseText()),m>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const T=b==null?void 0:b.error;if(T&&T.status&&T.message){const D=function(x){const V=x.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(V)>=0?V:B.UNKNOWN}(T.status);l(new O(D,T.message))}else l(new O(B.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new O(B.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{z(Et,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);z(Et,`RPC '${t}' ${s} sending request:`,r),d.send(e,"POST",u,i,15)})}Bo(t,e,i){const r=qr(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Bl(),l=Dl(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(d.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Oo(d.initMessageHeaders,e,i),d.encodeInitMessageHeaders=!0;const p=s.join("");z(Et,`Creating RPC '${t}' stream ${r}: ${p}`,d);const m=a.createWebChannel(p,d);let b=!1,T=!1;const D=new yf({Io:x=>{T?z(Et,`Not sending because RPC '${t}' stream ${r} is closed:`,x):(b||(z(Et,`Opening RPC '${t}' stream ${r} transport.`),m.open(),b=!0),z(Et,`RPC '${t}' stream ${r} sending:`,x),m.send(x))},To:()=>m.close()}),S=(x,V,P)=>{x.listen(V,N=>{try{P(N)}catch(L){setTimeout(()=>{throw L},0)}})};return S(m,Pn.EventType.OPEN,()=>{T||(z(Et,`RPC '${t}' stream ${r} transport opened.`),D.yo())}),S(m,Pn.EventType.CLOSE,()=>{T||(T=!0,z(Et,`RPC '${t}' stream ${r} transport closed`),D.So())}),S(m,Pn.EventType.ERROR,x=>{T||(T=!0,Je(Et,`RPC '${t}' stream ${r} transport errored:`,x),D.So(new O(B.UNAVAILABLE,"The operation could not be completed")))}),S(m,Pn.EventType.MESSAGE,x=>{var V;if(!T){const P=x.data[0];X(!!P);const N=P,L=N.error||((V=N[0])===null||V===void 0?void 0:V.error);if(L){z(Et,`RPC '${t}' stream ${r} received error:`,L);const R=L.status;let I=function(w){const y=at[w];if(y!==void 0)return ac(y)}(R),v=L.message;I===void 0&&(I=B.INTERNAL,v="Unknown error status: "+R+" with message "+L.message),T=!0,D.So(new O(I,v)),m.close()}else z(Et,`RPC '${t}' stream ${r} received:`,P),D.bo(P)}}),S(l,kl.STAT_EVENT,x=>{x.stat===eo.PROXY?z(Et,`RPC '${t}' stream ${r} detected buffering proxy`):x.stat===eo.NOPROXY&&z(Et,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function Hr(){return typeof document<"u"?document:null}/**
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
 */function nr(n){return new Rp(n,!0)}/**
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
 */class Fo{constructor(t,e,i=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-i);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class wc{constructor(t,e,i,r,s,a,l,d){this.ui=t,this.Ho=i,this.Jo=r,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Fo(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===B.RESOURCE_EXHAUSTED?(ne(e.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Yo===e&&this.P_(i,r)},i=>{t(()=>{const r=new O(B.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(r)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{i(()=>this.I_(r))}),this.stream.onMessage(r=>{i(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bf extends wc{constructor(t,e,i,r,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,r,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Vp(this.serializer,t),i=function(s){if(!("targetChange"in s))return H.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Ft(a.readTime):H.min()}(t);return this.listener.d_(e,i)}A_(t){const e={};e.database=uo(this.serializer),e.addTarget=function(s,a){let l;const d=a.target;if(l=oo(d)?{documents:Dp(s,d)}:{query:Bp(s,d)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=dc(s,a.resumeToken);const u=lo(s,a.expectedCount);u!==null&&(l.expectedCount=u)}else if(a.snapshotVersion.compareTo(H.min())>0){l.readTime=ji(s,a.snapshotVersion.toTimestamp());const u=lo(s,a.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,t);const i=Lp(this.serializer,t);i&&(e.labels=i),this.a_(e)}R_(t){const e={};e.database=uo(this.serializer),e.removeTarget=t,this.a_(e)}}class wf extends wc{constructor(t,e,i,r,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,r,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return X(!!t.streamToken),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=kp(t.writeResults,t.commitTime),i=Ft(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=uo(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>fc(this.serializer,i))};this.a_(e)}}/**
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
 */class Af extends class{}{constructor(t,e,i,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new O(B.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,co(e,i),r,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(B.UNKNOWN,s.toString())})}Lo(t,e,i,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,co(e,i),r,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(B.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class _f{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ne(e),this.D_=!1):z("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Ef{constructor(t,e,i,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{i.enqueueAndForget(async()=>{Me(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(d){const u=U(d);u.L_.add(4),await ni(u),u.q_.set("Unknown"),u.L_.delete(4),await ir(u)}(this))})}),this.q_=new _f(i,r)}}async function ir(n){if(Me(n))for(const t of n.B_)await t(!0)}async function ni(n){for(const t of n.B_)await t(!1)}function Ac(n,t){const e=U(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),jo(e)?zo(e):cn(e).r_()&&Oo(e,t))}function Mo(n,t){const e=U(n),i=cn(e);e.N_.delete(t),i.r_()&&_c(e,t),e.N_.size===0&&(i.r_()?i.o_():Me(e)&&e.q_.set("Unknown"))}function Oo(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}cn(n).A_(t)}function _c(n,t){n.Q_.xe(t),cn(n).R_(t)}function zo(n){n.Q_=new Ep({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),cn(n).start(),n.q_.v_()}function jo(n){return Me(n)&&!cn(n).n_()&&n.N_.size>0}function Me(n){return U(n).L_.size===0}function Ec(n){n.Q_=void 0}async function If(n){n.q_.set("Online")}async function xf(n){n.N_.forEach((t,e)=>{Oo(n,t)})}async function Tf(n,t){Ec(n),jo(n)?(n.q_.M_(t),zo(n)):n.q_.set("Unknown")}async function Rf(n,t,e){if(n.q_.set("Online"),t instanceof cc&&t.state===2&&t.cause)try{await async function(r,s){const a=s.cause;for(const l of s.targetIds)r.N_.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.N_.delete(l),r.Q_.removeTarget(l))}(n,t)}catch(i){z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Hi(n,i)}else if(t instanceof ki?n.Q_.Ke(t):t instanceof lc?n.Q_.He(t):n.Q_.We(t),!e.isEqual(H.min()))try{const i=await bc(n.localStore);e.compareTo(i)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((d,u)=>{if(d.resumeToken.approximateByteSize()>0){const p=s.N_.get(u);p&&s.N_.set(u,p.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,u)=>{const p=s.N_.get(d);if(!p)return;s.N_.set(d,p.withResumeToken(vt.EMPTY_BYTE_STRING,p.snapshotVersion)),_c(s,d);const m=new de(p.target,d,u,p.sequenceNumber);Oo(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(i){z("RemoteStore","Failed to raise snapshot:",i),await Hi(n,i)}}async function Hi(n,t,e){if(!Jn(t))throw t;n.L_.add(1),await ni(n),n.q_.set("Offline"),e||(e=()=>bc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await ir(n)})}function Ic(n,t){return t().catch(e=>Hi(n,e,t))}async function rr(n){const t=U(n),e=ge(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Cf(t);)try{const r=await uf(t.localStore,i);if(r===null){t.O_.length===0&&e.o_();break}i=r.batchId,Sf(t,r)}catch(r){await Hi(t,r)}xc(t)&&Tc(t)}function Cf(n){return Me(n)&&n.O_.length<10}function Sf(n,t){n.O_.push(t);const e=ge(n);e.r_()&&e.V_&&e.m_(t.mutations)}function xc(n){return Me(n)&&!ge(n).n_()&&n.O_.length>0}function Tc(n){ge(n).start()}async function Pf(n){ge(n).p_()}async function Vf(n){const t=ge(n);for(const e of n.O_)t.m_(e.mutations)}async function kf(n,t,e){const i=n.O_.shift(),r=Vo.from(i,t,e);await Ic(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await rr(n)}async function Df(n,t){t&&ge(n).V_&&await async function(i,r){if(function(a){return sc(a)&&a!==B.ABORTED}(r.code)){const s=i.O_.shift();ge(i).s_(),await Ic(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await rr(i)}}(n,t),xc(n)&&Tc(n)}async function Ja(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const i=Me(e);e.L_.add(3),await ni(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await ir(e)}async function Bf(n,t){const e=U(n);t?(e.L_.delete(2),await ir(e)):t||(e.L_.add(2),await ni(e),e.q_.set("Unknown"))}function cn(n){return n.K_||(n.K_=function(e,i,r){const s=U(e);return s.w_(),new bf(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:If.bind(null,n),Ro:xf.bind(null,n),mo:Tf.bind(null,n),d_:Rf.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),jo(n)?zo(n):n.q_.set("Unknown")):(await n.K_.stop(),Ec(n))})),n.K_}function ge(n){return n.U_||(n.U_=function(e,i,r){const s=U(e);return s.w_(),new wf(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Pf.bind(null,n),mo:Df.bind(null,n),f_:Vf.bind(null,n),g_:kf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await rr(n)):(await n.U_.stop(),n.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class qo{constructor(t,e,i,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,r,s){const a=Date.now()+i,l=new qo(t,e,a,r,s);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(B.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ho(n,t){if(ne("AsyncQueue",`${t}: ${n}`),Jn(n))return new O(B.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Xe{constructor(t){this.comparator=t?(e,i)=>t(e,i)||j.comparator(e.key,i.key):(e,i)=>j.comparator(e.key,i.key),this.keyedMap=Vn(),this.sortedSet=new nt(this.comparator)}static emptySet(t){return new Xe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Xe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new Xe;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
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
 */class Za{constructor(){this.W_=new nt(j.comparator)}track(t){const e=t.doc.key,i=this.W_.get(e);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(e,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(e):t.type===1&&i.type===2?this.W_=this.W_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):q():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,i)=>{t.push(i)}),t}}class nn{constructor(t,e,i,r,s,a,l,d,u){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=u}static fromInitialDocuments(t,e,i,r,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new nn(t,e,Xe.emptySet(e),a,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ji(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==i[r].type||!e[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class Nf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Lf{constructor(){this.queries=Ya(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const r=U(e),s=r.queries;r.queries=Ya(),s.forEach((a,l)=>{for(const d of l.j_)d.onError(i)})})(this,new O(B.ABORTED,"Firestore shutting down"))}}function Ya(){return new ln(n=>Wl(n),Ji)}async function Uo(n,t){const e=U(n);let i=3;const r=t.query;let s=e.queries.get(r);s?!s.H_()&&t.J_()&&(i=2):(s=new Nf,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await e.onListen(r,!0);break;case 1:s.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(a){const l=Ho(a,`Initialization of query '${$e(t.query)}' failed`);return void t.onError(l)}e.queries.set(r,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Qo(e)}async function $o(n,t){const e=U(n),i=t.query;let r=3;const s=e.queries.get(i);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?r=t.J_()?0:1:!s.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function Ff(n,t){const e=U(n);let i=!1;for(const r of t){const s=r.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(r)&&(i=!0);a.z_=r}}i&&Qo(e)}function Mf(n,t,e){const i=U(n),r=i.queries.get(t);if(r)for(const s of r.j_)s.onError(e);i.queries.delete(t)}function Qo(n){n.Y_.forEach(t=>{t.next()})}var po,tl;(tl=po||(po={})).ea="default",tl.Cache="cache";class Wo{constructor(t,e,i){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new nn(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const i=e!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=nn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==po.Cache}}/**
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
 */class Rc{constructor(t){this.key=t}}class Cc{constructor(t){this.key=t}}class Of{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=Gl(t),this.Ra=new Xe(this.Aa)}get Va(){return this.Ta}ma(t,e){const i=e?e.fa:new Za,r=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=r,l=!1;const d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((p,m)=>{const b=r.get(p),T=Zi(this.query,m)?m:null,D=!!b&&this.mutatedKeys.has(b.key),S=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let x=!1;b&&T?b.data.isEqual(T.data)?D!==S&&(i.track({type:3,doc:T}),x=!0):this.ga(b,T)||(i.track({type:2,doc:T}),x=!0,(d&&this.Aa(T,d)>0||u&&this.Aa(T,u)<0)&&(l=!0)):!b&&T?(i.track({type:0,doc:T}),x=!0):b&&!T&&(i.track({type:1,doc:b}),x=!0,(d||u)&&(l=!0)),x&&(T?(a=a.add(T),s=S?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),i.track({type:1,doc:p})}return{Ra:a,fa:i,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,m)=>function(T,D){const S=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return S(T)-S(D)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(i),r=r!=null&&r;const l=e&&!r?this.ya():[],d=this.da.size===0&&this.current&&!r?1:0,u=d!==this.Ea;return this.Ea=d,a.length!==0||u?{snapshot:new nn(this.query,t.Ra,s,a,t.mutatedKeys,d===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Za,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=W(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const e=[];return t.forEach(i=>{this.da.has(i)||e.push(new Cc(i))}),this.da.forEach(i=>{t.has(i)||e.push(new Rc(i))}),e}ba(t){this.Ta=t.Ts,this.da=W();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return nn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zf{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class jf{constructor(t){this.key=t,this.va=!1}}class qf{constructor(t,e,i,r,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ln(l=>Wl(l),Ji),this.Ma=new Map,this.xa=new Set,this.Oa=new nt(j.comparator),this.Na=new Map,this.La=new Bo,this.Ba={},this.ka=new Map,this.qa=en.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Hf(n,t,e=!0){const i=Bc(n);let r;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await Sc(i,t,e,!0),r}async function Uf(n,t){const e=Bc(n);await Sc(e,t,!0,!1)}async function Sc(n,t,e,i){const r=await hf(n.localStore,Wt(t)),s=r.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return i&&(l=await $f(n,t,s,a==="current",r.resumeToken)),n.isPrimaryClient&&e&&Ac(n.remoteStore,r),l}async function $f(n,t,e,i,r){n.Ka=(m,b,T)=>async function(S,x,V,P){let N=x.view.ma(V);N.ns&&(N=await Ga(S.localStore,x.query,!1).then(({documents:v})=>x.view.ma(v,N)));const L=P&&P.targetChanges.get(x.targetId),R=P&&P.targetMismatches.get(x.targetId)!=null,I=x.view.applyChanges(N,S.isPrimaryClient,L,R);return nl(S,x.targetId,I.wa),I.snapshot}(n,m,b,T);const s=await Ga(n.localStore,t,!0),a=new Of(t,s.Ts),l=a.ma(s.documents),d=ei.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",r),u=a.applyChanges(l,n.isPrimaryClient,d);nl(n,e,u.wa);const p=new zf(t,e,a);return n.Fa.set(t,p),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),u.snapshot}async function Qf(n,t,e){const i=U(n),r=i.Fa.get(t),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter(a=>!Ji(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await ho(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),e&&Mo(i.remoteStore,r.targetId),fo(i,r.targetId)}).catch(Xn)):(fo(i,r.targetId),await ho(i.localStore,r.targetId,!0))}async function Wf(n,t){const e=U(n),i=e.Fa.get(t),r=e.Ma.get(i.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Mo(e.remoteStore,i.targetId))}async function Gf(n,t,e){const i=em(n);try{const r=await function(a,l){const d=U(a),u=dt.now(),p=l.reduce((T,D)=>T.add(D.key),W());let m,b;return d.persistence.runTransaction("Locally write mutations","readwrite",T=>{let D=ie(),S=W();return d.cs.getEntries(T,p).next(x=>{D=x,D.forEach((V,P)=>{P.isValidDocument()||(S=S.add(V))})}).next(()=>d.localDocuments.getOverlayedDocuments(T,D)).next(x=>{m=x;const V=[];for(const P of l){const N=yp(P,m.get(P.key).overlayedDocument);N!=null&&V.push(new ye(P.key,N,Ol(N.value.mapValue),ct.exists(!0)))}return d.mutationQueue.addMutationBatch(T,u,V,l)}).next(x=>{b=x;const V=x.applyToLocalDocumentSet(m,S);return d.documentOverlayCache.saveOverlays(T,x.batchId,V)})}).then(()=>({batchId:b.batchId,changes:Xl(m)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(a,l,d){let u=a.Ba[a.currentUser.toKey()];u||(u=new nt(Z)),u=u.insert(l,d),a.Ba[a.currentUser.toKey()]=u}(i,r.batchId,e),await ii(i,r.changes),await rr(i.remoteStore)}catch(r){const s=Ho(r,"Failed to persist write");e.reject(s)}}async function Pc(n,t){const e=U(n);try{const i=await cf(e.localStore,t);t.targetChanges.forEach((r,s)=>{const a=e.Na.get(s);a&&(X(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.va=!0:r.modifiedDocuments.size>0?X(a.va):r.removedDocuments.size>0&&(X(a.va),a.va=!1))}),await ii(e,i,t)}catch(i){await Xn(i)}}function el(n,t,e){const i=U(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const r=[];i.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&r.push(l.snapshot)}),function(a,l){const d=U(a);d.onlineState=l;let u=!1;d.queries.forEach((p,m)=>{for(const b of m.j_)b.Z_(l)&&(u=!0)}),u&&Qo(d)}(i.eventManager,t),r.length&&i.Ca.d_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Kf(n,t,e){const i=U(n);i.sharedClientState.updateQueryState(t,"rejected",e);const r=i.Na.get(t),s=r&&r.key;if(s){let a=new nt(j.comparator);a=a.insert(s,ht.newNoDocument(s,H.min()));const l=W().add(s),d=new er(H.min(),new Map,new nt(Z),a,l);await Pc(i,d),i.Oa=i.Oa.remove(s),i.Na.delete(t),Go(i)}else await ho(i.localStore,t,!1).then(()=>fo(i,t,e)).catch(Xn)}async function Xf(n,t){const e=U(n),i=t.batch.batchId;try{const r=await lf(e.localStore,t);kc(e,i,null),Vc(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await ii(e,r)}catch(r){await Xn(r)}}async function Jf(n,t,e){const i=U(n);try{const r=await function(a,l){const d=U(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let p;return d.mutationQueue.lookupMutationBatch(u,l).next(m=>(X(m!==null),p=m.keys(),d.mutationQueue.removeMutationBatch(u,m))).next(()=>d.mutationQueue.performConsistencyCheck(u)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(u,p,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,p)).next(()=>d.localDocuments.getDocuments(u,p))})}(i.localStore,t);kc(i,t,e),Vc(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await ii(i,r)}catch(r){await Xn(r)}}function Vc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function kc(n,t,e){const i=U(n);let r=i.Ba[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),i.Ba[i.currentUser.toKey()]=r}}function fo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Ma.get(t))n.Fa.delete(i),e&&n.Ca.$a(i,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(i=>{n.La.containsKey(i)||Dc(n,i)})}function Dc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Mo(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Go(n))}function nl(n,t,e){for(const i of e)i instanceof Rc?(n.La.addReference(i.key,t),Zf(n,i)):i instanceof Cc?(z("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,t),n.La.containsKey(i.key)||Dc(n,i.key)):q()}function Zf(n,t){const e=t.key,i=e.path.canonicalString();n.Oa.get(e)||n.xa.has(i)||(z("SyncEngine","New document in limbo: "+e),n.xa.add(i),Go(n))}function Go(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new j(tt.fromString(t)),i=n.qa.next();n.Na.set(i,new jf(e)),n.Oa=n.Oa.insert(e,i),Ac(n.remoteStore,new de(Wt(Xi(e.path)),i,"TargetPurposeLimboResolution",Io.oe))}}async function ii(n,t,e){const i=U(n),r=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((l,d)=>{a.push(i.Ka(d,t,e).then(u=>{var p;if((u||e)&&i.isPrimaryClient){const m=u?!u.fromCache:(p=e==null?void 0:e.targetChanges.get(d.targetId))===null||p===void 0?void 0:p.current;i.sharedClientState.updateQueryState(d.targetId,m?"current":"not-current")}if(u){r.push(u);const m=Lo.Wi(d.targetId,u);s.push(m)}}))}),await Promise.all(a),i.Ca.d_(r),await async function(d,u){const p=U(d);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(u,b=>F.forEach(b.$i,T=>p.persistence.referenceDelegate.addReference(m,b.targetId,T)).next(()=>F.forEach(b.Ui,T=>p.persistence.referenceDelegate.removeReference(m,b.targetId,T)))))}catch(m){if(!Jn(m))throw m;z("LocalStore","Failed to update sequence numbers: "+m)}for(const m of u){const b=m.targetId;if(!m.fromCache){const T=p.os.get(b),D=T.snapshotVersion,S=T.withLastLimboFreeSnapshotVersion(D);p.os=p.os.insert(b,S)}}}(i.localStore,s))}async function Yf(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){z("SyncEngine","User change. New user:",t.toKey());const i=await vc(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(d=>{d.reject(new O(B.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await ii(e,i.hs)}}function tm(n,t){const e=U(n),i=e.Na.get(t);if(i&&i.va)return W().add(i.key);{let r=W();const s=e.Ma.get(t);if(!s)return r;for(const a of s){const l=e.Fa.get(a);r=r.unionWith(l.view.Va)}return r}}function Bc(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Pc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Kf.bind(null,t),t.Ca.d_=Ff.bind(null,t.eventManager),t.Ca.$a=Mf.bind(null,t.eventManager),t}function em(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Jf.bind(null,t),t}class Ui{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=nr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return af(this.persistence,new of,t.initialUser,this.serializer)}Ga(t){return new ef(No.Zr,this.serializer)}Wa(t){return new ff}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ui.provider={build:()=>new Ui};class mo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>el(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yf.bind(null,this.syncEngine),await Bf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Lf}()}createDatastore(t){const e=nr(t.databaseInfo.databaseId),i=function(s){return new vf(s)}(t.databaseInfo);return function(s,a,l,d){return new Af(s,a,l,d)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,r,s,a,l){return new Ef(i,r,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>el(this.syncEngine,e,0),function(){return Xa.D()?new Xa:new mf}())}createSyncEngine(t,e){return function(r,s,a,l,d,u,p){const m=new qf(r,s,a,l,d,u);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=U(r);z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ni(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}mo.provider={build:()=>new mo};/**
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
 */class Ko{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):ne("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class nm{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new O(B.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(r,s){const a=U(r),l={documents:s.map(m=>qi(a.serializer,m))},d=await a.Lo("BatchGetDocuments",a.serializer.databaseId,tt.emptyPath(),l,s.length),u=new Map;d.forEach(m=>{const b=Pp(a.serializer,m);u.set(b.key.toString(),b)});const p=[];return s.forEach(m=>{const b=u.get(m.toString());X(!!b),p.push(b)}),p}(this.datastore,t);return e.forEach(i=>this.recordVersion(i)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(t.toString())}delete(t){this.write(new ti(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,i)=>{const r=j.fromPath(i);this.mutations.push(new oc(r,this.precondition(r)))}),await async function(i,r){const s=U(i),a={writes:r.map(l=>fc(s.serializer,l))};await s.Mo("Commit",s.serializer.databaseId,tt.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw q();e=H.min()}const i=this.readVersions.get(t.key.toString());if(i){if(!e.isEqual(i))throw new O(B.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(H.min())?ct.exists(!1):ct.updateTime(e):ct.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(H.min()))throw new O(B.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ct.updateTime(e)}return ct.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class im{constructor(t,e,i,r,s){this.asyncQueue=t,this.datastore=e,this.options=i,this.updateFunction=r,this.deferred=s,this._u=i.maxAttempts,this.t_=new Fo(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new nm(this.datastore),e=this.cu(t);e&&e.then(i=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.lu(r)}))}).catch(i=>{this.lu(i)})})}cu(t){try{const e=this.updateFunction(t);return!Zn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!sc(e)}return!1}}/**
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
 */class rm{constructor(t,e,i,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=r,this.user=It.UNAUTHENTICATED,this.clientId=Ll.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async a=>{z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ho(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Ur(n,t){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await vc(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function il(n,t){n.asyncQueue.verifyOperationInProgress();const e=await om(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Ja(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Ja(t.remoteStore,r)),n._onlineComponents=t}async function om(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ur(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Je("Error using user provided cache. Falling back to memory cache: "+e),await Ur(n,new Ui)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Ur(n,new Ui);return n._offlineComponents}async function Xo(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await il(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await il(n,new mo))),n._onlineComponents}function sm(n){return Xo(n).then(t=>t.syncEngine)}function am(n){return Xo(n).then(t=>t.datastore)}async function $i(n){const t=await Xo(n),e=t.eventManager;return e.onListen=Hf.bind(null,t.syncEngine),e.onUnlisten=Qf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Uf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Wf.bind(null,t.syncEngine),e}function lm(n,t,e={}){const i=new Qt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,d,u){const p=new Ko({next:b=>{p.Za(),a.enqueueAndForget(()=>$o(s,m));const T=b.docs.has(l);!T&&b.fromCache?u.reject(new O(B.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&b.fromCache&&d&&d.source==="server"?u.reject(new O(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(b)},error:b=>u.reject(b)}),m=new Wo(Xi(l.path),p,{includeMetadataChanges:!0,_a:!0});return Uo(s,m)}(await $i(n),n.asyncQueue,t,e,i)),i.promise}function cm(n,t,e={}){const i=new Qt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,d,u){const p=new Ko({next:b=>{p.Za(),a.enqueueAndForget(()=>$o(s,m)),b.fromCache&&d.source==="server"?u.reject(new O(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(b)},error:b=>u.reject(b)}),m=new Wo(l,p,{includeMetadataChanges:!0,_a:!0});return Uo(s,m)}(await $i(n),n.asyncQueue,t,e,i)),i.promise}/**
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
 */function Nc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const rl=new Map;/**
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
 */function Lc(n,t,e){if(!e)throw new O(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function dm(n,t,e,i){if(t===!0&&i===!0)throw new O(B.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ol(n){if(!j.isDocumentKey(n))throw new O(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sl(n){if(j.isDocumentKey(n))throw new O(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function or(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q()}function xt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=or(n);throw new O(B.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class al{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new O(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}dm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nc((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class sr{constructor(t,e,i,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new al({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new al(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new xh;switch(i.type){case"firstParty":return new Sh(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new O(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=rl.get(e);i&&(z("ComponentProvider","Removing Datastore"),rl.delete(e),i.terminate())}(this),Promise.resolve()}}function um(n,t,e,i={}){var r;const s=(n=xt(n,sr))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Je("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let l,d;if(typeof i.mockUserToken=="string")l=i.mockUserToken,d=It.MOCK_USER;else{l=ru(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new O(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new It(u)}n._authCredentials=new Th(new Nl(l,d))}}/**
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
 */class ve{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ve(this.firestore,t,this._query)}}class yt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}}class pe extends ve{constructor(t,e,i){super(t,e,Xi(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new j(t))}withConverter(t){return new pe(this.firestore,t,this._path)}}function Tt(n,t,...e){if(n=Mt(n),Lc("collection","path",t),n instanceof sr){const i=tt.fromString(t,...e);return sl(i),new pe(n,null,i)}{if(!(n instanceof yt||n instanceof pe))throw new O(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(tt.fromString(t,...e));return sl(i),new pe(n.firestore,null,i)}}function it(n,t,...e){if(n=Mt(n),arguments.length===1&&(t=Ll.newId()),Lc("doc","path",t),n instanceof sr){const i=tt.fromString(t,...e);return ol(i),new yt(n,null,new j(i))}{if(!(n instanceof yt||n instanceof pe))throw new O(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(tt.fromString(t,...e));return ol(i),new yt(n.firestore,n instanceof pe?n.converter:null,new j(i))}}/**
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
 */class ll{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Fo(this,"async_queue_retry"),this.Vu=()=>{const i=Hr();i&&z("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=Hr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Hr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Qt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Jn(t))throw t;z("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const r=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw ne("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=qo.createAndSchedule(this,t,e,i,s=>this.yu(s));return this.Tu.push(r),r}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function cl(n){return function(e,i){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Ht extends sr{constructor(t,e,i,r){super(t,e,i,r),this.type="firestore",this._queue=new ll,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ll(t),this._firestoreClient=void 0,await t}}}function hm(n,t){const e=typeof n=="object"?n:ph(),i=typeof n=="string"?n:"(default)",r=ch(e,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=nu("firestore");s&&um(r,...s)}return r}function dn(n){if(n._terminated)throw new O(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||pm(n),n._firestoreClient}function pm(n){var t,e,i;const r=n._freezeSettings(),s=function(l,d,u,p){return new qh(l,d,u,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Nc(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new rm(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class Ne{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ne(vt.fromBase64String(t))}catch(e){throw new O(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ne(vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class un{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ar{constructor(t){this._methodName=t}}/**
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
 */class Jo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}}/**
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
 */class Zo{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
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
 */const fm=/^__.*__$/;class mm{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ye(t,this.data,this.fieldMask,e,this.fieldTransforms):new Yn(t,this.data,e,this.fieldTransforms)}}class Fc{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new ye(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Mc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Yo{constructor(t,e,i,r,s,a){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Yo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:i,xu:!1});return r.Ou(t),r}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:i,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Qi(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Mc(this.Cu)&&fm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class gm{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||nr(t)}Qu(t,e,i,r=!1){return new Yo({Cu:t,methodName:e,qu:i,path:mt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hn(n){const t=n._freezeSettings(),e=nr(n._databaseId);return new gm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function lr(n,t,e,i,r,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,r);is("Data must be an object, but it was:",a,i);const l=Oc(i,a);let d,u;if(s.merge)d=new Lt(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const b=go(t,m,e);if(!a.contains(b))throw new O(B.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);jc(p,b)||p.push(b)}d=new Lt(p),u=a.fieldTransforms.filter(m=>d.covers(m.field))}else d=null,u=a.fieldTransforms;return new mm(new St(l),d,u)}class cr extends ar{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof cr}}class ts extends ar{_toFieldTransform(t){return new pp(t.path,new $n)}isEqual(t){return t instanceof ts}}function es(n,t,e,i){const r=n.Qu(1,t,e);is("Data must be an object, but it was:",r,i);const s=[],a=St.empty();Fe(i,(d,u)=>{const p=rs(t,d,e);u=Mt(u);const m=r.Nu(p);if(u instanceof cr)s.push(p);else{const b=ri(u,m);b!=null&&(s.push(p),a.set(p,b))}});const l=new Lt(s);return new Fc(a,l,r.fieldTransforms)}function ns(n,t,e,i,r,s){const a=n.Qu(1,t,e),l=[go(t,i,e)],d=[r];if(s.length%2!=0)throw new O(B.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<s.length;b+=2)l.push(go(t,s[b])),d.push(s[b+1]);const u=[],p=St.empty();for(let b=l.length-1;b>=0;--b)if(!jc(u,l[b])){const T=l[b];let D=d[b];D=Mt(D);const S=a.Nu(T);if(D instanceof cr)u.push(T);else{const x=ri(D,S);x!=null&&(u.push(T),p.set(T,x))}}const m=new Lt(u);return new Fc(p,m,a.fieldTransforms)}function ym(n,t,e,i=!1){return ri(e,n.Qu(i?4:3,t))}function ri(n,t){if(zc(n=Mt(n)))return is("Unsupported field value:",t,n),Oc(n,t);if(n instanceof ar)return function(i,r){if(!Mc(r.Cu))throw r.Bu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,r){const s=[];let a=0;for(const l of i){let d=ri(l,r.Lu(a));d==null&&(d={nullValue:"NULL_VALUE"}),s.push(d),a++}return{arrayValue:{values:s}}}(n,t)}return function(i,r){if((i=Mt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return dp(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=dt.fromDate(i);return{timestampValue:ji(r.serializer,s)}}if(i instanceof dt){const s=new dt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ji(r.serializer,s)}}if(i instanceof Jo)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ne)return{bytesValue:dc(r.serializer,i._byteString)};if(i instanceof yt){const s=r.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw r.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Do(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof Zo)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Bu("VectorValues must only contain numeric values.");return Po(l.serializer,d)})}}}}}}(i,r);throw r.Bu(`Unsupported field value: ${or(i)}`)}(n,t)}function Oc(n,t){const e={};return Fl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fe(n,(i,r)=>{const s=ri(r,t.Mu(i));s!=null&&(e[i]=s)}),{mapValue:{fields:e}}}function zc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof Jo||n instanceof Ne||n instanceof yt||n instanceof ar||n instanceof Zo)}function is(n,t,e){if(!zc(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const i=or(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function go(n,t,e){if((t=Mt(t))instanceof un)return t._internalPath;if(typeof t=="string")return rs(n,t);throw Qi("Field path arguments must be of type string or ",n,!1,void 0,e)}const vm=new RegExp("[~\\*/\\[\\]]");function rs(n,t,e){if(t.search(vm)>=0)throw Qi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new un(...t.split("."))._internalPath}catch{throw Qi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Qi(n,t,e,i,r){const s=i&&!i.isEmpty(),a=r!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(s||a)&&(d+=" (found",s&&(d+=` in field ${i}`),a&&(d+=` in document ${r}`),d+=")"),new O(B.INVALID_ARGUMENT,l+n+d)}function jc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Wi{constructor(t,e,i,r,s){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(os("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class bm extends Wi{data(){return super.data()}}function os(n,t){return typeof t=="string"?rs(n,t):t instanceof un?t._internalPath:t._delegate._internalPath}/**
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
 */function qc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ss{}class Hc extends ss{}function dr(n,t,...e){let i=[];t instanceof ss&&i.push(t),i=i.concat(e),function(s){const a=s.filter(d=>d instanceof ls).length,l=s.filter(d=>d instanceof as).length;if(a>1||a>0&&l>0)throw new O(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)n=r._apply(n);return n}class as extends Hc{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new as(t,e,i)}_apply(t){const e=this._parse(t);return Uc(t._query,e),new ve(t.firestore,t.converter,so(t._query,e))}_parse(t){const e=hn(t.firestore);return function(s,a,l,d,u,p,m){let b;if(u.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){ul(m,p);const T=[];for(const D of m)T.push(dl(d,s,D));b={arrayValue:{values:T}}}else b=dl(d,s,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||ul(m,p),b=ym(l,a,m,p==="in"||p==="not-in");return lt.create(u,p,b)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ls extends ss{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ls(t,e)}_parse(t){const e=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return e.length===1?e[0]:qt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,s){let a=r;const l=s.getFlattenedFilters();for(const d of l)Uc(a,d),a=so(a,d)}(t._query,e),new ve(t.firestore,t.converter,so(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cs extends Hc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new cs(t,e)}_apply(t){const e=function(r,s,a){if(r.startAt!==null)throw new O(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new O(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Un(s,a)}(t._query,this._field,this._direction);return new ve(t.firestore,t.converter,function(r,s){const a=r.explicitOrderBy.concat([s]);return new an(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function ur(n,t="asc"){const e=t,i=os("orderBy",n);return cs._create(i,e)}function dl(n,t,e){if(typeof(e=Mt(e))=="string"){if(e==="")throw new O(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ql(t)&&e.indexOf("/")!==-1)throw new O(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(tt.fromString(e));if(!j.isDocumentKey(i))throw new O(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Va(n,new j(i))}if(e instanceof yt)return Va(n,e._key);throw new O(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${or(e)}.`)}function ul(n,t){if(!Array.isArray(n)||n.length===0)throw new O(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Uc(n,t){const e=function(r,s){for(const a of r)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new O(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class $c{convertValue(t,e="none"){switch(Be(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(De(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return Fe(t,(r,s)=>{i[r]=this.convertValue(s,e)}),i}convertVectorValue(t){var e,i,r;const s=(r=(i=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(a=>ot(a.doubleValue));return new Zo(s)}convertGeoPoint(t){return new Jo(ot(t.latitude),ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=To(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(jn(t));default:return null}}convertTimestamp(t){const e=me(t);return new dt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=tt.fromString(t);X(yc(i));const r=new qn(i.get(1),i.get(3)),s=new j(i.popFirst(5));return r.isEqual(e)||ne(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function hr(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class wm extends $c{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ne(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}/**
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
 */class Ge{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ds extends Wi{constructor(t,e,i,r,s,a){super(t,e,i,r,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Di(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(os("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class Di extends ds{data(t={}){return super.data(t)}}class Qc{constructor(t,e,i,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ge(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new Di(this._firestore,this._userDataWriter,i.key,i,new Ge(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const d=new Di(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ge(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const d=new Di(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ge(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,p=-1;return l.type!==0&&(u=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Am(l.type),doc:d,oldIndex:u,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Am(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function be(n){n=xt(n,yt);const t=xt(n.firestore,Ht);return lm(dn(t),n._key).then(e=>Kc(t,n,e))}class pr extends $c{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ne(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function pn(n){n=xt(n,ve);const t=xt(n.firestore,Ht),e=dn(t),i=new pr(t);return qc(n._query),cm(e,n._query).then(r=>new Qc(t,i,n,r))}function Le(n,t,e){n=xt(n,yt);const i=xt(n.firestore,Ht),r=hr(n.converter,t,e);return oi(i,[lr(hn(i),"setDoc",n._key,r,n.converter!==null,e).toMutation(n._key,ct.none())])}function Ut(n,t,e,...i){n=xt(n,yt);const r=xt(n.firestore,Ht),s=hn(r);let a;return a=typeof(t=Mt(t))=="string"||t instanceof un?ns(s,"updateDoc",n._key,t,e,i):es(s,"updateDoc",n._key,t),oi(r,[a.toMutation(n._key,ct.exists(!0))])}function Wc(n){return oi(xt(n.firestore,Ht),[new ti(n._key,ct.none())])}function Gc(n,t){const e=xt(n.firestore,Ht),i=it(n),r=hr(n.converter,t);return oi(e,[lr(hn(n.firestore),"addDoc",i._key,r,n.converter!==null,{}).toMutation(i._key,ct.exists(!1))]).then(()=>i)}function Oe(n,...t){var e,i,r;n=Mt(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||cl(t[a])||(s=t[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(cl(t[a])){const m=t[a];t[a]=(e=m.next)===null||e===void 0?void 0:e.bind(m),t[a+1]=(i=m.error)===null||i===void 0?void 0:i.bind(m),t[a+2]=(r=m.complete)===null||r===void 0?void 0:r.bind(m)}let d,u,p;if(n instanceof yt)u=xt(n.firestore,Ht),p=Xi(n._key.path),d={next:m=>{t[a]&&t[a](Kc(u,n,m))},error:t[a+1],complete:t[a+2]};else{const m=xt(n,ve);u=xt(m.firestore,Ht),p=m._query;const b=new pr(u);d={next:T=>{t[a]&&t[a](new Qc(u,b,m,T))},error:t[a+1],complete:t[a+2]},qc(n._query)}return function(b,T,D,S){const x=new Ko(S),V=new Wo(T,x,D);return b.asyncQueue.enqueueAndForget(async()=>Uo(await $i(b),V)),()=>{x.Za(),b.asyncQueue.enqueueAndForget(async()=>$o(await $i(b),V))}}(dn(u),p,l,d)}function oi(n,t){return function(i,r){const s=new Qt;return i.asyncQueue.enqueueAndForget(async()=>Gf(await sm(i),r,s)),s.promise}(dn(n),t)}function Kc(n,t,e){const i=e.docs.get(t._key),r=new pr(n);return new ds(n,r,t._key,i,new Ge(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const _m={maxAttempts:5};/**
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
 */class Em{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=hn(t)}set(t,e,i){this._verifyNotCommitted();const r=ce(t,this._firestore),s=hr(r.converter,e,i),a=lr(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(a.toMutation(r._key,ct.none())),this}update(t,e,i,...r){this._verifyNotCommitted();const s=ce(t,this._firestore);let a;return a=typeof(e=Mt(e))=="string"||e instanceof un?ns(this._dataReader,"WriteBatch.update",s._key,e,i,r):es(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,ct.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ce(t,this._firestore);return this._mutations=this._mutations.concat(new ti(e._key,ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ce(n,t){if((n=Mt(n)).firestore!==t)throw new O(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class Im extends class{constructor(e,i){this._firestore=e,this._transaction=i,this._dataReader=hn(e)}get(e){const i=ce(e,this._firestore),r=new wm(this._firestore);return this._transaction.lookup([i._key]).then(s=>{if(!s||s.length!==1)return q();const a=s[0];if(a.isFoundDocument())return new Wi(this._firestore,r,a.key,a,i.converter);if(a.isNoDocument())return new Wi(this._firestore,r,i._key,null,i.converter);throw q()})}set(e,i,r){const s=ce(e,this._firestore),a=hr(s.converter,i,r),l=lr(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,r);return this._transaction.set(s._key,l),this}update(e,i,r,...s){const a=ce(e,this._firestore);let l;return l=typeof(i=Mt(i))=="string"||i instanceof un?ns(this._dataReader,"Transaction.update",a._key,i,r,s):es(this._dataReader,"Transaction.update",a._key,i),this._transaction.update(a._key,l),this}delete(e){const i=ce(e,this._firestore);return this._transaction.delete(i._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ce(t,this._firestore),i=new pr(this._firestore);return super.get(t).then(r=>new ds(this._firestore,i,e._key,r._document,new Ge(!1,!1),e.converter))}}function xm(n,t,e){n=xt(n,Ht);const i=Object.assign(Object.assign({},_m),e);return function(s){if(s.maxAttempts<1)throw new O(B.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(s,a,l){const d=new Qt;return s.asyncQueue.enqueueAndForget(async()=>{const u=await am(s);new im(s.asyncQueue,u,l,a,d).au()}),d.promise}(dn(n),r=>t(new Im(n,r)),i)}function Xc(){return new ts("serverTimestamp")}/**
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
 */function us(n){return dn(n=xt(n,Ht)),new Em(n,t=>oi(n,t))}(function(t,e=!0){(function(r){sn=r})(hh),Fi(new Mn("firestore",(i,{instanceIdentifier:r,options:s})=>{const a=i.getProvider("app").getImmediate(),l=new Ht(new Rh(i.getProvider("auth-internal")),new Vh(i.getProvider("app-check-internal")),function(u,p){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new O(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qn(u.options.projectId,p)}(a,r),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ke(Ta,"4.7.3",t),Ke(Ta,"4.7.3","esm2017")})();const Tm={apiKey:"AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",authDomain:"feria-vinos-sucovi-2027.firebaseapp.com",databaseURL:"https://feria-vinos-sucovi-2027-default-rtdb.firebaseio.com",projectId:"feria-vinos-sucovi-2027",storageBucket:"feria-vinos-sucovi-2027.firebasestorage.app",messagingSenderId:"1686119758",appId:"1:1686119758:web:2c3c6d96e36f1276052a1f",measurementId:"G-VRMTQ3SS7E"},Rm=Tl(Tm),Q=hm(Rm),Ot=[{id:0,key:"368813",nombre:"Sucovi",region:"Pruebas / Bebidas",pass:"stand00"},{id:1,key:"d48429",nombre:"Alta Vista",region:"Mendoza",pass:"stand01"},{id:2,key:"ba356c",nombre:"Andillian",region:"Mendoza",pass:"stand02"},{id:3,key:"451e62",nombre:"Ante Nada",region:"Mendoza",pass:"stand03"},{id:4,key:"835c2d",nombre:"Bodega Benegas",region:"Mendoza",pass:"stand04"},{id:5,key:"e45a28",nombre:"Bianchi",region:"San Rafael",pass:"stand05"},{id:6,key:"12ac1c",nombre:"Catena Zapata",region:"Luján de Cuyo",pass:"stand06"},{id:7,key:"18abc3",nombre:"Bodegas Bórbore",region:"Mendoza (1936)",pass:"stand07"},{id:8,key:"452b71",nombre:"Fábula Wines",region:"Mendoza",pass:"stand08"},{id:9,key:"0c55a5",nombre:"Finca Iral",region:"Mendoza",pass:"stand09"},{id:10,key:"5cb108",nombre:"Giménez Riili",region:"Mendoza",pass:"stand10"},{id:11,key:"27f372",nombre:"Jorge Rubio",region:"Mendoza",pass:"stand11"},{id:12,key:"a9d27f",nombre:"La Coste de los Andes",region:"Mendoza",pass:"stand12"},{id:13,key:"b5be6e",nombre:"Las Perdices",region:"Mendoza",pass:"stand13"},{id:14,key:"7da93b",nombre:"Lorenzo de Agrelo",region:"Mendoza",pass:"stand14"},{id:15,key:"f52ab4",nombre:"Pannunzio Wines",region:"Mendoza",pass:"stand15"},{id:16,key:"a32dd6",nombre:"Bodega Patritti",region:"Mendoza",pass:"stand16"},{id:17,key:"175358",nombre:"Rosell Boher",region:"Mendoza",pass:"stand17"},{id:18,key:"4a2b00",nombre:"Valle de la Puerta",region:"La Rioja",pass:"stand18"}];async function yo(n){return await Gc(Tt(Q,"invitados"),{...n,creadoEn:Xc()})}async function Pe(n,t){await Ut(it(Q,"invitados",n),t)}function fr(n){return Oe(dr(Tt(Q,"invitados"),ur("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}async function Gn(n){const e=(await pn(Tt(Q,"invitados"))).docs.find(i=>i.data().token===n);return e?{fireId:e.id,...e.data()}:null}async function Cm(n){const e=(await pn(Tt(Q,"invitados"))).docs.find(i=>i.data().codigo===n);return e?{fireId:e.id,...e.data()}:null}async function Jc(n,t,e,i,r){const s=it(Q,"carritos",n,"items",String(t)),a=await be(s);if(a.exists()){const l=a.data(),d=l.items||[],u=d.findIndex(p=>p.key===i.key);u>=0?d[u]=i:d.push(i),await Le(s,{standId:t,standNombre:e,items:d,retiro:r||l.retiro||"stand"})}else await Le(s,{standId:t,standNombre:e,items:[i],retiro:r||"stand"})}async function hs(n,t,e){await Ut(it(Q,"carritos",n,"items",String(t)),{retiro:e})}async function Gi(n,t,e){const i=it(Q,"carritos",n,"items",String(t)),r=await be(i);if(!r.exists())return;const s=(r.data().items||[]).filter(a=>a.key!==e);s.length?await Ut(i,{items:s}):await Wc(i)}async function vo(n){return(await pn(Tt(Q,"carritos",n,"items"))).docs.map(e=>({standId:e.id,...e.data()}))}function ps(n,t){return Oe(Tt(Q,"carritos",n,"items"),e=>t(e.docs.map(i=>({standDocId:i.id,...i.data()}))))}async function bo(n){const t=await pn(Tt(Q,"carritos",n,"items")),e=us(Q);t.docs.forEach(i=>e.delete(i.ref)),await e.commit()}async function Zc(n,t){const e=it(Q,"config","contadores"),i=await be(e);let r=(i.exists()&&i.data().voucher||0)+1;const s=us(Q),a=[];return t.forEach((l,d)=>{const u=it(Tt(Q,"pedidos"));a.push(u),s.set(u,{invFireId:n.fireId,invNombre:n.nombre+" "+n.apellido,invCodigo:n.codigo,standId:l.standId,standNombre:l.standNombre,items:l.items||[],total:(l.items||[]).reduce((p,m)=>p+(m.sub||0),0),retiro:l.retiro||"stand",estado:"pagado",voucherNum:r+d,creadoEn:Xc()})}),s.set(e,{voucher:r+t.length-1},{merge:!0}),await s.commit(),a.map(l=>l.id)}function mr(n){return Oe(dr(Tt(Q,"pedidos"),ur("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}function Yc(n,t){return Oe(dr(Tt(Q,"pedidos"),ur("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>Number(i.standId)===Number(n))))}function td(n,t){return Oe(dr(Tt(Q,"pedidos"),ur("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>i.invFireId===n)))}async function Sm(n,t=""){const e=it(Q,"pedidos",n);await Ut(e,{estado:"cancelado",canceladoAt:new Date().toISOString(),canceladoMotivo:t||"Cancelado desde caja"})}async function ed(n){const t=it(Q,"pedidos",n);await Ut(t,{estado:"reembolsado",reembolsadoAt:new Date().toISOString()})}async function nd(n){const t=it(Q,"pedidos",n);await Ut(t,{estado:"listo",listoAt:new Date().toISOString()})}async function id(n){const t=it(Q,"pedidos",n);await Ut(t,{estado:"retirado",retiradoAt:new Date().toISOString()})}async function rd(n){const t=it(Q,"pedidos",n);await Ut(t,{estado:"entregado",entregadoAt:new Date().toISOString()})}async function wo(n){await Ut(it(Q,"pedidos",n),{estado:"entregado"})}async function Pm(n,t){const e={pendiente:"pagado",pagado:"listo",listo:"entregado"};e[t]&&await Ut(it(Q,"pedidos",n),{estado:e[t]})}function si(n,t){return Oe(Tt(Q,"bodegas",String(n),"vinos"),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()}))))}async function od(n,t){return(await Gc(Tt(Q,"bodegas",String(n),"vinos"),t)).id}async function sd(n,t,e){await Ut(it(Q,"bodegas",String(n),"vinos",t),e)}async function ad(n,t){await Wc(it(Q,"bodegas",String(n),"vinos",t))}async function ld(){const n=["invitados","pedidos"];for(const t of n){const e=await pn(Tt(Q,t)),i=us(Q);e.docs.forEach(r=>i.delete(r.ref)),await i.commit()}}async function Ki(n,t,e,i){const r=it(Q,"stock",n+"_"+t),s=await be(r),a=s.exists()?s.data():{},l=i&&i!==t?i:a.vinoNombre&&a.vinoNombre!==t?a.vinoNombre:i||t;await Le(r,{standId:Number(n),vinoId:t,vinoNombre:l,total:(a.total||0)+e,degustacion:a.degustacion||0,reservado:a.reservado||0,pagado:a.pagado||0,entregado:a.entregado||0},{merge:!0})}async function cd(n,t,e){const i=it(Q,"stock",n+"_"+t),r=await be(i),s=r.exists()?r.data():{};await Le(i,{degustacion:(s.degustacion||0)+e},{merge:!0})}async function dd(n,t,e){const i=it(Q,"stock",String(n)+"_"+t);try{return await xm(Q,async s=>{const a=await s.get(i);if(!a.exists())return!0;const l=a.data(),d=(l.total||0)-(l.degustacion||0)-(l.reservado||0)-(l.pagado||0)-(l.entregado||0);return e>d?!1:(s.update(i,{reservado:(l.reservado||0)+e}),!0)})}catch(r){return console.error("intentarReservarStock:",r),!0}}async function ud(n,t,e){const i=it(Q,"stock",String(n)+"_"+t),r=await be(i);if(!r.exists())return;const s=r.data();await Le(i,{reservado:Math.max(0,(s.reservado||0)-e)},{merge:!0})}async function hd(n,t,e){const i=it(Q,"stock",String(n)+"_"+t),r=await be(i);if(!r.exists())return;const s=r.data();await Le(i,{reservado:Math.max(0,(s.reservado||0)-e),pagado:(s.pagado||0)+e},{merge:!0})}function fs(n){return Oe(Tt(Q,"stock"),t=>n(t.docs.map(e=>({id:e.id,...e.data()}))))}async function Vm(n,t){const e=it(Q,"stock",String(n)+"_"+t),i=await be(e);return i.exists()?i.data():null}async function pd(n){const t=[];if(!n||!n.length)return t;for(const e of n)try{(await pn(Tt(Q,"carritos",e,"items"))).docs.forEach(r=>{const s=r.data(),a=s.standId!==void 0?Number(s.standId):null;a!==null&&(s.items||[]).forEach(l=>{t.push({invFireId:e,standId:a,vinoId:l.vinoId||"",vinoNombre:l.vinoNombre||"",qty:l.qty||1})})})}catch{}return t}async function km(n,t,e){const i=it(Q,"stock",n+"_"+t);await Le(i,{disponible:Math.max(0,e)},{merge:!0})}const Kn=Object.freeze(Object.defineProperty({__proto__:null,BODEGAS:Ot,actualizarInvitado:Pe,actualizarRetiroStand:hs,actualizarStock:Ki,actualizarVino:sd,agregarAlCarrito:Jc,avanzarEstado:Pm,buscarInvitadoPorCodigo:Cm,buscarInvitadoPorToken:Gn,cancelarPedido:Sm,cobrarStock:hd,crearInvitado:yo,crearPedidosDesdeCarrito:Zc,eliminarItemCarrito:Gi,eliminarVino:ad,entregarDomicilio:rd,escucharCarrito:ps,escucharInvitados:fr,escucharPedidos:mr,escucharPedidosPorInvitado:td,escucharPedidosPorStand:Yc,escucharStock:fs,escucharVinos:si,getStockDoc:Vm,guardarDisponibleStock:km,guardarVino:od,intentarReservarStock:dd,leerCarrito:vo,leerTodosLosCarritos:pd,liberarReservaStock:ud,limpiarDatosPrueba:ld,marcarEntregado:wo,marcarListoLogistica:nd,reembolsarPedido:ed,registrarDegustacion:cd,retirarDeStand:id,vaciarCarrito:bo},Symbol.toStringTag,{value:"Module"})),Dm="modulepreload",Bm=function(n){return"/"+n},hl={},rn=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(e.map(d=>{if(d=Bm(d),d in hl)return;hl[d]=!0;const u=d.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":Dm,u||(m.as="script"),m.crossOrigin="",m.href=d,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((b,T)=>{m.addEventListener("load",b),m.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},ms="data:image/png;base64,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";function zt({title:n,sub:t="",backHref:e="",backLabel:i="← Panel",backStyle:r="",actions:s=[]}={}){return`
    <div class="hdr">
      <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
        <img src="${ms}" alt="Sucovi 2027"
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
        ${s.join("")}
        ${e?`<a href="${e}" class="btn-back btn" style="font-size:11px;padding:5px 8px;white-space:nowrap;${r}">${i}</a>`:""}
      </div>
    </div>
    <div class="gold"></div>`}function Bi(n){return`
    <div style="background:linear-gradient(160deg,#1A3A5C 0%,#2C5F8A 60%,#3A7D44 100%);
                color:#fff;padding:20px 16px 16px;text-align:center">
      <img src="${ms}" alt="Sucovi 2027"
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
    <div class="gold"></div>`}function Kt(){if(document.getElementById("sucovi-styles"))return;const n=document.createElement("style");n.id="sucovi-styles",n.textContent=`
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
  `,document.head.appendChild(n)}async function Nm(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function pl(n,t,e){await Nm();const i=document.getElementById(n);if(i)try{const r=qrcode(0,"M");r.addData(String(t)),r.make();const s=r.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let u=0;u<s;u++)r.isDark(d,u)&&l.fillRect(u*a,d*a,a,a)}catch(r){console.error("QR error:",r)}}const Ci=n=>Number(n).toLocaleString("es-AR"),fl=()=>Math.random().toString(36).slice(2,10).toUpperCase(),ml=n=>"INV-"+String(n).padStart(4,"0");function gl(n){return{pendiente:'<span class="badge b-pend">Pendiente</span>',pagado:'<span class="badge b-pago">Bono pagado</span>',ingresado:'<span class="badge b-ingr">Ingresó</span>',invalidado:'<span class="badge b-inv">Invalidado</span>'}[n]||""}const Lm={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},Fm={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"};function fd(n){const t=sessionStorage.getItem("admin-pin"),e=localStorage.getItem("sucovi-admin-pin")||"2027";if(t!==e){n.innerHTML='<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#F0F4F8"><div style="background:#fff;border-radius:12px;padding:32px;text-align:center;max-width:320px;width:100%;box-shadow:0 4px 20px rgba(0,0,0,.1)"><div style="font-size:40px;margin-bottom:12px">🔒</div><h2 style="font-size:18px;font-weight:600;color:#1A3A5C;margin-bottom:4px">Panel Admin</h2><p style="font-size:13px;color:#888;margin-bottom:20px">SUCOVI 2027</p><input id="pin-input" type="password" maxlength="4" placeholder="PIN de 4 digitos" style="width:100%;text-align:center;font-size:24px;letter-spacing:.3em;padding:12px;border:2px solid #D6E4F0;border-radius:8px;margin-bottom:12px" onkeydown="if(event.keyCode===13) window._checkPin()"><button class="btn btn-v" style="width:100%;padding:12px;font-size:14px" onclick="window._checkPin()">Ingresar</button><div id="pin-err" style="margin-top:8px;font-size:12px;color:#C0392B"></div></div></div>',window._checkPin=()=>{const R=document.getElementById("pin-input").value,I=localStorage.getItem("sucovi-admin-pin")||"2027";R===I?(sessionStorage.setItem("admin-pin",R),fd(n)):(document.getElementById("pin-err").textContent="PIN incorrecto",document.getElementById("pin-input").value="")},setTimeout(()=>{var R;return(R=document.getElementById("pin-input"))==null?void 0:R.focus()},100);return}Kt();let i=[],r=[],s=[],a=[],l="inv",d=null;fs(R=>{a=R,l==="stock"&&V().catch(()=>{})}),n.innerHTML=zt({title:"Sucovi 2027",sub:"20 jun 2026 · 19:30 hs · Roma 656, Olivos"})+`
    <div style="display:flex;gap:5px;padding:8px 12px;background:#1A3A5C;flex-wrap:wrap">
      <a href="/puerta"    class="btn btn-a" style="font-size:11px;padding:5px 9px;text-decoration:none">🚪 Puerta</a>
      <a href="/caja"      class="btn btn-b" style="font-size:11px;padding:5px 9px;text-decoration:none">💰 Caja</a>
      
      <a href="/registro"  class="btn" style="font-size:11px;padding:5px 9px;text-decoration:none;background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)">📝 Registro</a>
    </div>
    <div class="nav">
      <button class="on" onclick="window._aTab('res',this)">📊 Resumen</button>
      <button onclick="window._aTab('inv',this)">👥 Invitados</button>
      <button onclick="window._aTab('reg',this)">➕ Registrar</button>
      <button onclick="window._aTab('ped',this)">🛒 Pedidos</button>
      <button onclick="window._aTab('stands',this)">🍷 Stands / QR</button>
      <button onclick="window._aTab('excel',this)">📊 Importar</button>
      <button onclick="window._aTab('stock',this)">📦 Stock</button>
      <button onclick="window._aTab('config',this)">⚙️ Config</button>
    </div>
    <div id="tab-content" class="wrap"></div>

    <!-- Modal WA -->

    <div id="modal-edit" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(0,0,0,.45);z-index:200;align-items:center;justify-content:center;padding:16px">
      <div class="card" style="width:100%;max-width:420px;max-height:90vh;overflow-y:auto">
        <h3 style="font-size:14px;font-weight:500;color:#1A3A5C;margin-bottom:14px">Editar invitado</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
          <div><label style="font-size:11px;color:#666">Nombre</label><input id="edit-nom" style="margin-top:3px"></div>
          <div><label style="font-size:11px;color:#666">Apellido</label><input id="edit-ape" style="margin-top:3px"></div>
        </div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">WhatsApp</label><input id="edit-tel" style="margin-top:3px"></div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Email</label><input id="edit-email" style="margin-top:3px"></div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Familia SUCOVI</label><input id="edit-familia" style="margin-top:3px"></div>
        <div style="margin-bottom:12px"><label style="font-size:11px;color:#666">Comentarios</label><input id="edit-comentarios" style="margin-top:3px"></div>
        <div style="margin-bottom:14px"><label style="font-size:11px;color:#666">Estado</label>
          <select id="edit-estado" style="margin-top:3px">
            <option value="pendiente">Pendiente de pago</option>
            <option value="pagado">Bono pagado</option>
            <option value="ingresado">Ingresó al evento</option>
          </select>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-v" style="flex:1;padding:9px" onclick="window._guardarEdit()">Guardar</button>
          <button class="btn" style="flex:1;padding:9px" onclick="window._cerrarEdit()">Cancelar</button>
        </div>
        <div id="edit-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
      </div>
    </div>
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
          <button class="btn btn-v" style="flex:1;font-size:12px" onclick="window._envWA()">📱 WhatsApp</button>
          <button class="btn btn-a" id="mw-btn-p" style="flex:1;font-size:12px" onclick="window._pagarM()"></button>
        </div>
        <button class="btn" style="width:100%;margin-top:6px;font-size:12px" onclick="window._cModal()">Cerrar</button>
      </div>
    </div>`,fr(R=>{i=R,l==="inv"&&u(),l==="res"&&S()}),mr(R=>{r=R,s=R,l==="ped"&&T(),l==="res"&&S(),l==="cancelados"&&x()}),window._aTab=(R,I)=>{var f;l=R,document.querySelectorAll(".nav button").forEach(w=>w.classList.remove("on")),I.classList.add("on");const v={inv:u,reg:p,excel:m,ped:T,stands:D,res:S,config:P,stock:V};(f=v[R])==null||f.call(v)};function u(){const R=document.getElementById("tab-content");document.getElementById("buscar-inv")||(R.innerHTML=`
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
        <div class="card" id="lista-inv"></div>`),window._fInv=()=>{var y,A;const I=(((y=document.getElementById("buscar-inv"))==null?void 0:y.value)||"").toLowerCase(),v=((A=document.getElementById("fil-est"))==null?void 0:A.value)||"",f=i.filter(_=>(_.nombre+" "+_.apellido+" "+(_.codigo||"")+" "+(_.familia||"")).toLowerCase().includes(I)&&(!v||_.estado===v)),w=document.getElementById("lista-inv");if(w){if(!f.length){w.innerHTML='<div class="empty">Sin resultados</div>';return}w.innerHTML=f.map(_=>{var E,$;return`
        <div class="row" style="${_.estado==="invalidado"?"opacity:.5":""}">
          <div class="avatar">${((E=_.nombre)==null?void 0:E[0])||"?"}${(($=_.apellido)==null?void 0:$[0])||""}</div>
          <div style="flex:1;min-width:80px">
            <div style="font-size:13px;font-weight:500">${_.nombre} ${_.apellido}</div>
            <div style="font-size:11px;color:#888">${_.tel}${_.familia?" · "+_.familia:""}</div>
          </div>
          <div style="font-size:11px;color:#aaa">${_.codigo||""}</div>
          ${gl(_.estado)}
          <div style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">
            <button class="btn" style="padding:4px 8px;font-size:11px" onclick="window._abrirWA('${_.fireId}')">📱 WA</button>
            <button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._descargarQR('${_.fireId}')">📥 QR</button>
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInv('${_.fireId}')">✏️</button>
            ${_.estado!=="invalidado"?`<button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D" onclick="window._invalidar('${_.fireId}','${_.nombre} ${_.apellido}')">✕ Invalidar</button>`:`<button class="btn" style="padding:4px 8px;font-size:11px;color:#3B6D11;border-color:#3B6D11" onclick="window._reactivar('${_.fireId}')">↩ Reactivar</button>`}
          </div>
        </div>`}).join("")}},window._fInv()}window._invalidar=async(R,I)=>{confirm(`¿Invalidar a ${I}?`)&&await Pe(R,{estado:"invalidado"})},window._reactivar=async R=>await Pe(R,{estado:"pendiente"});function p(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}window._registrar=async()=>{const R=document.getElementById("rn").value.trim(),I=document.getElementById("ra").value.trim(),v=document.getElementById("rt").value.trim(),f=document.querySelector('input[name="rp"]:checked').value,w=document.getElementById("reg-msg");if(!R||!I||!v){w.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}w.innerHTML='<span style="color:#888">Guardando...</span>';try{const y=ml(i.length+1),A=fl(),_=await yo({nombre:R,apellido:I,tel:v,...document.getElementById("re").value.trim()&&{email:document.getElementById("re").value.trim()},...document.getElementById("rf").value.trim()&&{familia:document.getElementById("rf").value.trim()},...document.getElementById("rc").value.trim()&&{comentarios:document.getElementById("rc").value.trim()},estado:f,codigo:y,token:A});w.innerHTML=`<span style="color:#3B6D11">✓ ${R} ${I} (${y})</span>`,["rn","ra","rt","re","rf","rc"].forEach(E=>{const $=document.getElementById(E);$&&($.value="")}),f==="pagado"&&setTimeout(()=>window._abrirWA(_.id),600)}catch(y){w.innerHTML=`<span style="color:#A32D2D">Error: ${y.message}</span>`}};function m(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}let b=[];window._procesarExcel=async R=>{const I=R.files[0];if(!I)return;const v=document.getElementById("excel-preview");v.innerHTML='<p style="font-size:12px;color:#888">Procesando...</p>';try{const f=await rn(()=>import("https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs"),[]),w=await I.arrayBuffer(),y=f.read(w),A=y.Sheets[y.SheetNames[0]],_=f.utils.sheet_to_json(A,{header:1}),E=typeof _[0][0]=="string"&&_[0][0].toLowerCase().includes("nombre")?1:0;b=_.slice(E).filter($=>$[0]&&$[1]&&$[2]).map($=>({nombre:String($[0]||"").trim(),apellido:String($[1]||"").trim(),tel:String($[2]||"").trim(),...$[3]?{email:String($[3]).trim()}:{},...$[4]?{familia:String($[4]).trim()}:{},...$[5]?{comentarios:String($[5]).trim()}:{},estado:String($[6]||"").toUpperCase()==="SI"?"pagado":"pendiente"})),v.innerHTML=`
        <p style="font-size:12px;color:#3B6D11;margin-bottom:8px">
          ✓ ${b.length} invitados detectados
        </p>
        <div style="max-height:200px;overflow-y:auto;border:.5px solid #e0d5c8;border-radius:8px">
          ${b.slice(0,5).map($=>`
            <div style="padding:6px 10px;border-bottom:.5px solid #f0ebe4;font-size:12px">
              ${$.nombre} ${$.apellido} · ${$.tel} · <span class="badge ${$.estado==="pagado"?"b-pago":"b-pend"}">${$.estado==="pagado"?"Pagado":"Pendiente"}</span>
            </div>`).join("")}
          ${b.length>5?`<div style="padding:6px 10px;font-size:11px;color:#aaa">...y ${b.length-5} más</div>`:""}
        </div>`,document.getElementById("btn-importar").style.display="block"}catch(f){v.innerHTML=`<p style="color:#A32D2D;font-size:12px">Error al leer el archivo: ${f.message}</p>`}},window._importarExcel=async()=>{if(!b.length)return;const R=document.getElementById("btn-importar"),I=document.getElementById("excel-msg");R.disabled=!0,R.textContent="Importando...",I.innerHTML='<span style="color:#888">Procesando...</span>';let v=0,f=0;const w=i.length;for(let y=0;y<b.length;y++)try{const A=b[y];await yo({...A,codigo:ml(w+y+1),token:fl()}),v++}catch{f++}I.innerHTML=`<span style="color:#3B6D11">✓ ${v} invitados importados${f?` (${f} errores)`:""}</span>`,R.style.display="none",b=[]};function T(){const R=document.getElementById("tab-content");if(!r.length){R.innerHTML='<div class="empty">Sin pedidos aún 🍷</div>';return}R.innerHTML=r.map(I=>{var v;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">#${(v=I.fireId)==null?void 0:v.slice(-4).toUpperCase()}</span>
        <div style="flex:1;min-width:90px">
          <div style="font-size:12px;font-weight:500">${I.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${I.standNombre}${I.retiro==="envio"?' · <span style="color:#5A1E99">Envío</span>':""}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:100px">${(I.items||[]).map(f=>f.desc).join(" · ")}</span>
        <span style="font-size:14px;font-weight:500">$${Ci(I.total||0)}</span>
        <span class="badge ${Fm[I.estado]}">${Lm[I.estado]}</span>
      </div>`}).join("")}function D(){const R=window.location.origin;document.getElementById("tab-content").innerHTML=`
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>QR de pedidos:</strong> se imprime en el stand — los clientes lo escanean con su QR de acceso.<br>
        <strong>Panel stand:</strong> para el personal de la bodega (ver pedidos + marcar entregas).<br>
        <strong>Carga vinos:</strong> para que cada bodega cargue su carta directamente.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${Ot.map(I=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${I.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${I.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${I.region}</div>
            <canvas id="qr-s${I.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="font-size:10px;color:#aaa;margin-bottom:8px;word-break:break-all">${R}/stand/${I.id}</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${R}/stand/${I.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <div style="display:flex;gap:4px">
                <a href="${R}/panel/${I.id}?key=${I.key}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none;flex:1;justify-content:center">Panel</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#185FA5;border-color:#185FA5"
                  onclick="navigator.clipboard?.writeText('${R}/panel/${I.id}?key=${I.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="display:flex;gap:4px">
                <a href="${R}/bodega/${I.id}/vinos?key=${I.key}" target="_blank" class="btn" style="font-size:11px;padding:5px;text-decoration:none;color:#3A7D44;border-color:#3A7D44;flex:1;justify-content:center">Vinos</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#3A7D44;border-color:#3A7D44"
                  onclick="navigator.clipboard?.writeText('${R}/bodega/${I.id}/vinos?key=${I.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="font-size:10px;color:#aaa;margin-top:2px">Pass: <strong>${I.pass}</strong></div>
            </div>
          </div>`).join("")}
      </div>`,Ot.forEach(I=>setTimeout(()=>pl("qr-s"+I.id,`${R}/stand/${I.id}`,110),50))}function S(){const R=i.filter(A=>A.estado==="pagado").length,I=i.filter(A=>A.estado==="ingresado").length,v=(R+I)*35e3,f=r.reduce((A,_)=>A+(_.total||0),0),w={};r.forEach(A=>{w[A.standId]||(w[A.standId]={n:A.standNombre,t:0,c:0}),w[A.standId].t+=A.total||0,w[A.standId].c++});const y=Object.values(w).sort((A,_)=>_.t-A.t);document.getElementById("tab-content").innerHTML=`
      <div class="stats">
        ${[[i.filter(A=>A.estado!=="invalidado").length,"Invitados"],[R+I,"Con bono"],["$"+Ci(v),"Bonos"],[r.length,"Pedidos"],["$"+Ci(f),"Ventas"],[r.filter(A=>A.retiro==="envio").length,"Envíos"]].map(([A,_])=>`<div class="stat"><div class="v" style="font-size:${String(A).length>7?"13px":"20px"}">${A}</div><div class="l">${_}</div></div>`).join("")}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Ventas por bodega</p>
        ${y.length?y.map(A=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span style="font-weight:500">${A.n}</span><span style="color:#888">${A.c} ped.</span><span style="font-weight:500">$${Ci(A.t)}</span>
          </div>`).join(""):'<div class="empty">Sin ventas aún</div>'}
      </div>`}function x(){const R=document.getElementById("tab-body"),I=s.filter(v=>v.estado==="cancelado");if(!I.length){R.innerHTML='<div class="empty" style="padding:40px">Sin pedidos cancelados 👍</div>';return}R.innerHTML=`
      <div style="background:#FEE2E2;border:1px solid #FCA5A5;border-radius:8px;
        padding:10px 14px;margin-bottom:14px;font-size:12px;color:#991B1B">
        ⚠️ Estos pedidos fueron cancelados después de cobrar. Los QR asociados ya no son válidos
        pero pueden haber sido impresos o enviados por WhatsApp.
      </div>
      ${I.map(v=>{const f=v.canceladoAt?new Date(v.canceladoAt).toLocaleString("es-AR"):"Sin fecha";return`
        <div class="card" style="margin-bottom:8px;border-left:4px solid #C0392B;opacity:.9">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
            <div>
              <div style="font-size:14px;font-weight:500;color:#1A3A5C">${v.invNombre||"Invitado"}</div>
              <div style="font-size:11px;color:#888">${v.invCodigo||""} · ${v.standNombre}</div>
            </div>
            <span class="badge" style="background:#C0392B;color:#fff">❌ Cancelado</span>
          </div>
          <div style="font-size:12px;color:#666;margin-bottom:4px">
            ${(v.items||[]).map(w=>w.desc).join(" · ")}
          </div>
          <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:500">
            <span style="color:#888">Cancelado: ${f}</span>
            <span style="color:#C0392B">$${Number(v.total||0).toLocaleString("es-AR")}</span>
          </div>
          ${v.canceladoMotivo?`<div style="font-size:11px;color:#aaa;margin-top:3px">${v.canceladoMotivo}</div>`:""}
        </div>`}).join("")}
      <div style="font-size:12px;color:#888;text-align:right;margin-top:8px">
        Total cancelado: <strong style="color:#C0392B">
          $${I.reduce((v,f)=>v+(f.total||0),0).toLocaleString("es-AR")}
        </strong>
      </div>`}async function V(){const R=document.getElementById("tab-content");R.innerHTML='<div class="empty">Cargando stock...</div>';let I=[];try{const f=i.map(w=>w.fireId);I=await pd(f),console.log("CARRITOS:",I.length)}catch(f){console.log("ERROR carritos:",f)}const v={};if(r.forEach(f=>{(f.items||[]).forEach(w=>{const y=f.standId+"_"+(w.vinoId||w.vinoNombre||"");v[y]||(v[y]={reservado:0,pagado:0,entregado:0});const A=w.qty||1;f.estado==="pagado"||f.estado==="listo"?v[y].pagado+=A:f.estado==="entregado"?v[y].entregado+=A:f.estado!=="cancelado"&&f.estado!=="reembolsado"&&(v[y].reservado+=A)})}),!a.length){R.innerHTML='<div class="empty" style="padding:40px">Sin stock cargado todavía.<br><br>Cargá el stock desde la pantalla de vinos de cada bodega.</div>';return}R.innerHTML=`
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead>
            <tr style="background:#1A3A5C;color:#fff">
              <th style="padding:8px;text-align:left">Stand / Vino</th>
              <th style="padding:8px;text-align:center">Stock</th>
              <th style="padding:8px;text-align:center">Degustad.</th>
              <th style="padding:8px;text-align:center">Reservado</th>
              <th style="padding:8px;text-align:center">Pagado</th>
              <th style="padding:8px;text-align:center">Entregado</th>
              <th style="padding:8px;text-align:center;background:#3A7D44">Disponible</th>
              <th style="padding:8px;text-align:center">Acciones</th>
            </tr>
          </thead>
          <tbody>
${a.map((f,w)=>{const y=v[f.standId+"_"+f.vinoId]||{reservado:0,pagado:0,entregado:0},A=Ot.find(Vt=>Number(Vt.id)===Number(f.standId)),_=(f.total||0)-(f.degustacion||0)-y.reservado-y.pagado-y.entregado,E=_<=0?"#C0392B":_<=3?"#D97706":"#3A7D44";return'<tr style="background:'+(w%2===0?"#fff":"#F8FAFC")+';border-bottom:.5px solid #E8EFF5"><td style="padding:8px"><div style="font-weight:500;color:#1A3A5C">'+(f.vinoNombre||f.vinoId)+'</div><div style="font-size:11px;color:#888">Stand #'+f.standId+" · "+((A==null?void 0:A.nombre)||"")+'</div></td><td style="padding:8px;text-align:center;font-weight:500">'+(f.total||0)+'</td><td style="padding:8px;text-align:center;color:#D97706">'+(f.degustacion||0)+'</td><td style="padding:8px;text-align:center">'+y.reservado+'</td><td style="padding:8px;text-align:center">'+y.pagado+'</td><td style="padding:8px;text-align:center">'+y.entregado+'</td><td style="padding:8px;text-align:center;font-weight:600;color:'+E+'">'+Math.max(0,_)+'</td><td style="padding:8px;text-align:center"><button class="btn" style="font-size:10px;padding:3px 6px;margin-bottom:3px;display:block;width:100%" data-sid="'+f.standId+'" data-vid="'+f.vinoId+'" data-nom="'+encodeURIComponent(f.vinoNombre||f.vinoId)+'" onclick="window._agregarStock(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">+ Stock</button><button class="btn" style="font-size:10px;padding:3px 6px;color:#D97706;border-color:#D97706;display:block;width:100%" data-sid="'+f.standId+'" data-vid="'+f.vinoId+'" data-nom="'+encodeURIComponent(f.vinoNombre||f.vinoId)+'" onclick="window._agregarDegustation(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">Degust.</button></td></tr>'}).join("")}
          </tbody>
        </table>
      </div>`}window._agregarStock=async(R,I,v)=>{const f=parseInt(prompt("Agregar stock para "+v+`
¿Cuántas botellas agregar?`));!f||f<=0||(await Ki(R,I,f),V())},window._agregarDegustation=async(R,I,v)=>{const f=parseInt(prompt("Registrar degustación para "+v+`
¿Cuántas botellas se abrieron?`));!f||f<=0||(await cd(R,I,f),V())};function P(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">🔗 Links útiles</p>
        ${[["Registro público (para compartir con invitados)","/registro"],["Panel de caja","/caja"],["Control de puerta","/puerta"],["Logística / envíos","/logistica"]].map(([R,I])=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span>${R}</span>
            <a href="${I}" target="_blank" class="btn" style="padding:3px 8px;font-size:11px;color:#6B1C1C;border-color:#6B1C1C">Abrir</a>
          </div>`).join("")}
      </div>
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">🔐 PIN de acceso al admin</p>
        <p style="font-size:12px;color:#666;margin-bottom:10px">PIN actual: 4 digitos numericos. Por defecto: 2027</p>
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="nuevo-pin" type="password" maxlength="4" placeholder="Nuevo PIN"
            style="flex:1;text-align:center;font-size:18px;letter-spacing:.2em">
          <button class="btn btn-v" style="padding:8px 14px" onclick="window._cambiarPin()">Guardar</button>
        </div>
        <div id="pin-msg" style="font-size:12px;text-align:center"></div>
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
      </div>`}window._cambiarPin=()=>{const R=document.getElementById("nuevo-pin").value.trim(),I=document.getElementById("pin-msg");if(!/^\d{4}$/.test(R)){I.innerHTML='<span style="color:#C0392B">El PIN debe tener exactamente 4 digitos</span>';return}localStorage.setItem("sucovi-admin-pin",R),sessionStorage.setItem("admin-pin",R),I.innerHTML='<span style="color:#3B6D11">PIN actualizado correctamente</span>',document.getElementById("nuevo-pin").value=""},window._limpiar=async()=>{if(!confirm(`⚠️ ¿Seguro? Esto borra TODOS los invitados y pedidos.
Esta acción no se puede deshacer.`)||!confirm("Segunda confirmación: ¿borrar todos los datos de prueba?"))return;const R=document.getElementById("limpiar-msg");R.innerHTML='<span style="color:#888">Borrando...</span>';try{await ld(),R.innerHTML='<span style="color:#3B6D11">✓ Datos borrados correctamente</span>'}catch(I){R.innerHTML=`<span style="color:#A32D2D">Error: ${I.message}</span>`}},window._abrirWA=R=>{const I=i.find(_=>_.fireId===R);if(!I)return;d=R,document.getElementById("mw-tit").textContent=I.nombre+" "+I.apellido,document.getElementById("mw-cod").textContent=I.codigo||"",document.getElementById("mw-bdg").innerHTML=gl(I.estado);const v=window.location.origin,f=`${v}/acceso?inv=${I.token}`;document.getElementById("mw-link").textContent=f;const w=I.estado==="ingresado"?`Hola ${I.nombre}! 🍷

Ya estás dentro de SUCOVI 2027 — ¡disfrutá la noche!

Si necesitás tu QR para los stands:
👉 ${f}

_Personal e intransferible._`:I.estado==="pagado"?`Hola ${I.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${f}

_Personal e intransferible. Un solo uso en la entrada._`:`Hola ${I.nombre}! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`;document.getElementById("mw-msg").textContent=w;const y=document.getElementById("mw-btn-p"),A=document.getElementById("mw-badge-estado");I.estado==="pendiente"?(y.textContent="✓ Marcar como pagado",y.disabled=!1,y.style.display="block",y.style.background="#D97706",y.style.borderColor="#D97706",A&&(A.textContent="⏳ Pendiente",A.style.background="#FEF3C7",A.style.color="#92400E")):I.estado==="ingresado"?(y.style.display="none",A&&(A.textContent="✅ Ingresó al evento",A.style.background="#D1FAE5",A.style.color="#065F46")):(y.style.display="none",A&&(A.textContent="✅ Bono confirmado",A.style.background="#D1FAE5",A.style.color="#065F46")),pl("mw-canvas",I.codigo||I.fireId,80),document.getElementById("modal-wa").style.display="flex"},window._descargarQR=async R=>{const I=i.find(Bt=>Bt.fireId===R);if(!I)return;window.qrcode||await new Promise((Bt,bt)=>{const $t=document.createElement("script");$t.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",$t.onload=Bt,$t.onerror=bt,document.head.appendChild($t)});const f=window.location.origin+"/acceso?inv="+I.token,w=document.createElement("canvas"),y=600,A=800;w.width=y,w.height=A;const _=w.getContext("2d"),E=_.createLinearGradient(0,0,0,A);E.addColorStop(0,"#1A3A5C"),E.addColorStop(.55,"#2C5F8A"),E.addColorStop(1,"#3A7D44"),_.fillStyle=E,_.fillRect(0,0,y,A),_.fillStyle="#C9A96E",_.fillRect(0,A-4,y,4),_.fillStyle="rgba(255,255,255,0.7)",_.font="500 18px system-ui, -apple-system, sans-serif",_.textAlign="center",_.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",y/2,54),_.fillStyle="#ffffff",_.font="500 38px system-ui, -apple-system, sans-serif",_.fillText(I.nombre+" "+I.apellido,y/2,110),_.fillStyle="rgba(255,255,255,0.75)",_.font="400 22px system-ui, -apple-system, sans-serif",_.fillText(I.codigo,y/2,146),_.fillStyle="#3A7D44";const $=200,Vt=34,we=y/2-$/2,kt=164;N(_,we,kt,$,Vt,17),_.fill(),_.fillStyle="#ffffff",_.font="500 15px system-ui, -apple-system, sans-serif",_.fillText("✅ Bono confirmado",y/2,kt+23);const Pt=320,Xt=340,fn=y/2-Pt/2,re=220;_.fillStyle="#ffffff",N(_,fn,re,Pt,Xt,16),_.fill();const Dt=qrcode(0,"M");Dt.addData(f),Dt.make();const st=Dt.getModuleCount(),ai=240,Ae=fn+(Pt-ai)/2,gr=re+24,Jt=ai/st;_.fillStyle="#000000";for(let Bt=0;Bt<st;Bt++)for(let bt=0;bt<st;bt++)Dt.isDark(Bt,bt)&&_.fillRect(Ae+bt*Jt,gr+Bt*Jt,Jt,Jt);_.fillStyle="#1A3A5C",_.font="500 26px system-ui, -apple-system, sans-serif",_.fillText(I.codigo,y/2,re+Xt-44),_.fillStyle="#888",_.font="400 14px system-ui, -apple-system, sans-serif",_.fillText("Mostrá este QR en la entrada",y/2,re+Xt-20),_.fillStyle="rgba(255,255,255,0.85)",_.font="400 18px system-ui, -apple-system, sans-serif",_.fillText("Sáb 20 jun 2026  ·  19:30 hs",y/2,re+Xt+50),_.fillText("Roma 656, Olivos",y/2,re+Xt+80),_.fillStyle="rgba(255,255,255,0.5)",_.font="400 13px system-ui, -apple-system, sans-serif",_.fillText("Personal e intransferible · Un solo uso en la entrada",y/2,A-24),await new Promise(Bt=>{const bt=new Image;bt.onload=()=>{const _e=y-70-20,Ee=A-70-20;_.save(),_.beginPath(),_.arc(_e+70/2,Ee+70/2,70/2+3,0,Math.PI*2),_.fillStyle="rgba(255,255,255,0.25)",_.fill(),_.beginPath(),_.arc(_e+70/2,Ee+70/2,70/2,0,Math.PI*2),_.clip(),_.drawImage(bt,_e,Ee,70,70),_.restore(),Bt()},bt.onerror=Bt,bt.src=ms});const mn=document.createElement("a");mn.download="QR-"+I.codigo+".png",mn.href=w.toDataURL("image/png"),mn.click()};function N(R,I,v,f,w,y){R.beginPath(),R.moveTo(I+y,v),R.lineTo(I+f-y,v),R.quadraticCurveTo(I+f,v,I+f,v+y),R.lineTo(I+f,v+w-y),R.quadraticCurveTo(I+f,v+w,I+f-y,v+w),R.lineTo(I+y,v+w),R.quadraticCurveTo(I,v+w,I,v+w-y),R.lineTo(I,v+y),R.quadraticCurveTo(I,v,I+y,v),R.closePath()}let L=null;window._editarInv=R=>{const I=i.find(v=>v.fireId===R);I&&(L=R,document.getElementById("edit-nom").value=I.nombre||"",document.getElementById("edit-ape").value=I.apellido||"",document.getElementById("edit-tel").value=I.tel||"",document.getElementById("edit-email").value=I.email||"",document.getElementById("edit-familia").value=I.familia||"",document.getElementById("edit-comentarios").value=I.comentarios||"",document.getElementById("edit-estado").value=I.estado||"pendiente",document.getElementById("edit-msg").innerHTML="",document.getElementById("modal-edit").style.display="flex")},window._guardarEdit=async()=>{const R=document.getElementById("edit-msg"),I=document.getElementById("edit-nom").value.trim(),v=document.getElementById("edit-ape").value.trim(),f=document.getElementById("edit-tel").value.trim();if(!I||!v||!f){R.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}R.innerHTML='<span style="color:#888">Guardando...</span>';const w={nombre:I,apellido:v,tel:f,estado:document.getElementById("edit-estado").value,...document.getElementById("edit-email").value.trim()&&{email:document.getElementById("edit-email").value.trim()},...document.getElementById("edit-familia").value.trim()&&{familia:document.getElementById("edit-familia").value.trim()},...document.getElementById("edit-comentarios").value.trim()&&{comentarios:document.getElementById("edit-comentarios").value.trim()}};try{await Pe(L,w),R.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEdit(),1200)}catch(y){R.innerHTML=`<span style="color:#C0392B">Error: ${y.message}</span>`}},window._cerrarEdit=()=>{document.getElementById("modal-edit").style.display="none",L=null},window._pagarM=async()=>{const R=i.find(A=>A.fireId===d);if(!R||R.estado!=="pendiente")return;const I=document.getElementById("mw-btn-p");I&&(I.disabled=!0,I.textContent="✓ Pagado",I.style.background="#3A7D44",I.style.borderColor="#3A7D44");const v=document.getElementById("mw-badge-estado");v&&(v.textContent="✅ Bono pagado",v.style.background="#D1FAE5",v.style.color="#065F46");const f=`${window.location.origin}/acceso?inv=${R.token}`,w=`Hola ${R.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${f}

_Personal e intransferible. Un solo uso en la entrada._`,y=document.getElementById("mw-msg");y&&(y.textContent=w),await Pe(R.fireId,{estado:"pagado"})},window._envWA=()=>{const R=document.getElementById("mw-msg").textContent,I=i.find(f=>f.fireId===d),v=((I==null?void 0:I.tel)||"").replace(/\D/g,"");v?window.open("https://wa.me/"+v+"?text="+encodeURIComponent(R),"_blank"):alert("Sin teléfono cargado")},window._copWA=()=>{var v;(v=navigator.clipboard)==null||v.writeText(document.getElementById("mw-msg").textContent).catch(()=>{});const R=document.querySelector("#modal-wa .btn-g"),I=R.innerHTML;R.innerHTML="✓ ¡Copiado!",setTimeout(()=>R.innerHTML=I,2e3)},window._cModal=()=>{document.getElementById("modal-wa").style.display="none",d=null},u()}const le=n=>Number(n).toLocaleString("es-AR");async function Mm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Om(n){Kt();let t=[],e=[],i="cobrar",r=null,s=[],a=null,l=!1;n.innerHTML=zt({title:"💰 Caja central",sub:"Sucovi 2027 · Roma 656, Olivos",backHref:"/admin"})+`
    <div class="nav">
      <button class="on" onclick="window._cajaVista('cobrar',this)">💳 Cobrar</button>
      <button onclick="window._cajaVista('pedidos',this)">📋 Pedidos</button>

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
    </div>`,fr(S=>{t=S,i==="cobrar"&&!r&&p()}),mr(S=>{e=S,i!=="cobrar"&&d()}),window._cajaVista=(S,x)=>{i=S,r=null,document.querySelectorAll(".nav button").forEach(V=>V.classList.remove("on")),x.classList.add("on"),d()};function d(){i==="cobrar"&&m(),i==="pedidos"&&D()}let u={};async function p(){const S=t.filter(V=>V.estado==="ingresado"),x=await Promise.all(S.map(async V=>{try{const N=(await vo(V.fireId)).filter(I=>{var v;return(v=I.items)==null?void 0:v.length});if(!N.length)return null;const L=N.reduce((I,v)=>I+(v.items||[]).reduce((f,w)=>f+(w.sub||0),0),0),R=N.reduce((I,v)=>I+(v.items||[]).length,0);return{fireId:V.fireId,total:L,cant:R,stands:N.length}}catch{return null}}));u={},x.filter(Boolean).forEach(V=>{u[V.fireId]=V}),b()}function m(){const S=document.getElementById("caja-content");if(r){T();return}S.innerHTML=`
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <input id="buscar-caja" placeholder="Buscar por nombre o código..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda">
        <p style="font-size:12px;color:#888;margin-bottom:8px">Cargando carritos activos...</p>
      </div>`,t.length&&p()}function b(){var P;const S=document.getElementById("resultados-busqueda");if(!S)return;const x=(((P=document.getElementById("buscar-caja"))==null?void 0:P.value)||"").toLowerCase().trim();let V=t.filter(N=>N.estado!=="invalidado");if(x?V=V.filter(N=>(N.codigo||"").toLowerCase().includes(x)||(N.nombre+" "+N.apellido).toLowerCase().includes(x)):V=V.filter(N=>u[N.fireId]),!V.length){S.innerHTML=x?'<div class="empty">Sin resultados</div>':'<div class="empty" style="padding:24px">Sin carritos activos — nadie ha agregado vinos todavía 🍷</div>';return}S.innerHTML=(x?"":`<p style="font-size:11px;color:#888;margin-bottom:8px;font-weight:500">CARRITOS ACTIVOS (${V.length})</p>`)+V.map(N=>{const L=u[N.fireId];return`
        <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
          align-items:center;gap:10px" onclick="window._seleccionarInv('${N.fireId}')">
          <div class="avatar">${N.nombre[0]}${N.apellido[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${N.nombre} ${N.apellido}</div>
            <div style="font-size:12px;color:#888">${N.codigo} · ${N.tel}</div>
            ${L?`<div style="font-size:12px;color:#3A7D44;font-weight:500;margin-top:2px">
              🍷 ${L.cant} ítem${L.cant>1?"s":""} · $${Number(L.total).toLocaleString("es-AR")}
              <span style="color:#888;font-weight:400"> · ${L.stands} stand${L.stands>1?"s":""}</span>
            </div>`:'<div style="font-size:11px;color:#aaa;margin-top:2px">Carrito vacío</div>'}
          </div>
          <span class="badge ${N.estado==="pagado"||N.estado==="ingresado"?"b-pago":"b-pend"}">
            ${N.estado==="pagado"||N.estado==="ingresado"?"Bono pagado":"Pendiente"}
          </span>
          <span style="color:#1A3A5C;font-size:18px">›</span>
        </div>`}).join("")}window._buscarInv=(S=!1)=>{var P;const x=(((P=document.getElementById("buscar-caja"))==null?void 0:P.value)||"").toLowerCase().trim();if(!x){b();return}const V=t.filter(N=>N.estado!=="invalidado"&&((N.codigo||"").toLowerCase().includes(x)||(N.nombre+" "+N.apellido).toLowerCase().includes(x)));if(S&&V.length===1){window._seleccionarInv(V[0].fireId);return}b()},window._seleccionarInv=async S=>{r=t.find(x=>x.fireId===S),r&&(s=await vo(S),T())};async function T(){const S=document.getElementById("caja-content");if(!S)return;const x=r,V=s.filter(L=>{var R;return(R=L.items)==null?void 0:R.length}),P=V.reduce((L,R)=>L+(R.items||[]).reduce((I,v)=>I+(v.sub||0),0),0),N=e.filter(L=>L.invFireId===x.fireId);S.innerHTML=`
      <button class="btn" onclick="window._volverCobrar()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Buscar otro</button>
      <div class="card" style="margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div class="avatar" style="width:44px;height:44px;font-size:15px">
            ${x.nombre[0]}${x.apellido[0]}
          </div>
          <div>
            <div style="font-size:16px;font-weight:500">${x.nombre} ${x.apellido}</div>
            <div style="font-size:12px;color:#888">${x.codigo}${x.tel?" · "+x.tel:""}</div>
          </div>
        </div>
        ${N.length?`<div style="background:#D1FAE5;border-radius:6px;padding:6px 10px;
          font-size:12px;color:#065F46">
          ✅ Ya tiene ${N.length} pedido${N.length>1?"s":""} pagado${N.length>1?"s":""} esta noche
        </div>`:""}
      </div>

      ${V.length?`
        ${V.map(L=>`
          <div class="card" style="margin-bottom:10px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">
              🍷 ${L.standNombre} · Stand #${L.standId}
              ${L.retiro==="envio"?'<span class="badge b-envi" style="margin-left:6px">🚚 Envío</span>':""}
            </div>
            ${(L.items||[]).map(R=>`
              <div style="display:flex;justify-content:space-between;font-size:13px;
                color:#555;padding:4px 0;border-bottom:.5px solid #f5f0eb">
                <span>${R.desc}</span><strong>$${le(R.sub)}</strong>
              </div>`).join("")}
            <div style="display:flex;justify-content:space-between;font-size:13px;
              font-weight:500;margin-top:8px;padding-top:6px;border-top:.5px solid #D6E4F0">
              <span>Subtotal</span>
              <span>$${le((L.items||[]).reduce((R,I)=>R+(I.sub||0),0))}</span>
            </div>
          </div>`).join("")}
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL</span><span style="color:#1A3A5C">$${le(P)}</span>
          </div>
          <p style="font-size:12px;color:#888;margin-top:4px">
            ${V.length} stand${V.length>1?"s":""}
          </p>
        </div>
        <div id="cobro-msg" style="font-size:12px;text-align:center;margin-bottom:8px"></div>
        <button class="btn btn-g" style="width:100%;padding:14px;font-size:16px;margin-bottom:8px"
          onclick="window._cobrar()">
          ✓ Cobrar $${le(P)} y generar vouchers
        </button>
        <div id="voucher-actions" style="display:none;margin-top:10px;display:flex;gap:8px;flex-direction:column">
          <button class="btn btn-b" style="width:100%;padding:10px;font-size:14px"
            onclick="window._imprimirVouchers()">
            🖨️ Imprimir vouchers
          </button>
          <button class="btn btn-g" style="width:100%;padding:10px;font-size:14px"
            onclick="window._enviarVouchersWA()">
            📱 Enviar por WhatsApp
          </button>
          <button class="btn" style="width:100%;padding:10px;font-size:14px;background:#6B21A8;color:#fff;border-color:#6B21A8"
            onclick="window._descargarVoucherPDF()">
            ⬇️ Descargar PDF
          </button>
          <button class="btn" style="width:100%;padding:10px;font-size:13px;color:#C0392B;border-color:#C0392B"
            onclick="window._cancelarCarrito()">
            ❌ Cancelar y vaciar carrito
          </button>
        </div>`:`
        <div class="card" style="text-align:center;padding:24px">
          <p style="font-size:15px;color:#aaa">El carrito está vacío</p>
          <p style="font-size:13px;color:#aaa;margin-top:6px">
            ${x.nombre} todavía no agregó vinos desde los stands.
          </p>
        </div>`}
    `}window._imprimirVouchers=()=>{const{inv:S,items:x}=window._lastCobrado||{};if(!S||!x)return;const V=N=>Number(N).toLocaleString("es-AR"),P=window.open("","_blank");P.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <title>Vouchers - ${S.nombre} ${S.apellido}</title>
      <script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"><\/script>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: system-ui, sans-serif; padding: 16px; }
        .voucher { border: 2px solid #1A3A5C; border-radius: 10px; padding: 16px;
          margin-bottom: 16px; page-break-inside: avoid; }

        .header { display: flex; justify-content: space-between; margin-bottom: 10px;
          border-bottom: 1px solid #D6E4F0; padding-bottom: 8px; }
        .evento { font-size: 10px; color: #888; letter-spacing: .08em; }
        .stand { font-size: 22px; font-weight: 600; color: #1A3A5C; }
        .inv { font-size: 16px; color: #444; }
        .item { display: flex; justify-content: space-between; font-size: 15px;
          padding: 4px 0; border-bottom: .5px solid #eee; }
        .total { display: flex; justify-content: space-between; font-size: 20px;
          font-weight: 600; margin-top: 8px; color: #1A3A5C; }
        .badge { background: #3A7D44; color: #fff; padding: 3px 12px;
          border-radius: 20px; font-size: 11px; display: inline-block; margin-bottom:6px; }
        .qr-box { display:flex;flex-direction:column;align-items:center;margin-top:14px;padding-top:12px;border-top:1px solid #D6E4F0; }
        .qr-hint { font-size:12px;color:#888;text-align:center;margin-top:6px }
        @media print { body { padding: 0; } }
      </style>
    </head><body>
    ${window._lastPedidosIds?window._lastPedidosIds.map((N,L)=>{const R=x[L];return R?`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO${window._lastPedidosIds&&x[L]?" · VOC-"+String((window._lastVoucherNums||[])[L]||0).padStart(3,"0"):""}</div>
              <div class="stand">${R.standNombre}</div>
              <div class="inv">${S.nombre} ${S.apellido} · ${S.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
              <div style="font-size:10px;color:#888;margin-top:4px">Stand #${R.standId}</div>
            </div>
          </div>
          ${(R.items||[]).map(I=>`
            <div class="item"><span>${I.desc}</span><strong>$${V(I.sub)}</strong></div>
          `).join("")}
          <div class="total">
            <span>Total</span>
            <span>$${V((R.items||[]).reduce((I,v)=>I+(v.sub||0),0))}</span>
          </div>
        </div>
        <div class="qr-box">
          <canvas id="qr-${L}"></canvas>
          <div class="qr-hint">Escaneá en el stand</div>
        </div>
      </div>`:""}).join(""):x.map(N=>`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO${window._lastPedidosIds&&x[idx]?" · VOC-"+String((window._lastVoucherNums||[])[idx]||0).padStart(3,"0"):""}</div>
              <div class="stand">${N.standNombre}</div>
              <div class="inv">${S.nombre} ${S.apellido} · ${S.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(N.items||[]).map(L=>`
            <div class="item"><span>${L.desc}</span><strong>$${V(L.sub)}</strong></div>
          `).join("")}
          <div class="total"><span>Total</span><span>$${V((N.items||[]).reduce((L,R)=>L+(R.sub||0),0))}</span></div>
        </div>
      </div>`).join("")}
    <script>
      if (typeof qrcode !== 'undefined' && window.opener && window.opener._lastPedidosIds) {
        window.opener._lastPedidosIds.forEach((id, idx) => {
          const c = document.getElementById('qr-' + idx)
          if (!c) return
          const qr = qrcode(0, 'M')
          qr.addData(id)
          qr.make()
          const mod = qr.getModuleCount(), sz = 200, cs = sz/mod
          c.width = sz; c.height = sz
          const ctx = c.getContext('2d')
          ctx.fillStyle = '#fff'; ctx.fillRect(0,0,sz,sz)
          ctx.fillStyle = '#000'
          for(let r=0;r<mod;r++) for(let col=0;col<mod;col++)
            if(qr.isDark(r,col)) ctx.fillRect(col*cs,r*cs,cs,cs)
        })
      }
      setTimeout(() => { window.print(); }, 800)
    <\/script>
    </body></html>`),P.document.close()},window._enviarVouchersWA=()=>{var v;const{inv:S,items:x}=window._lastCobrado||{};if(!S||!x)return;const V=f=>Number(f).toLocaleString("es-AR"),P=x.map(f=>{const w=(f.items||[]).reduce((A,_)=>A+(_.sub||0),0),y=(f.items||[]).map(A=>`  • ${A.desc}: $${V(A.sub)}`).join(`
`);return`🍷 *${f.standNombre}* (Stand #${f.standId})
${y}
  Total: $${V(w)}`}).join(`

`),N=x.reduce((f,w)=>f+(w.items||[]).reduce((y,A)=>y+(A.sub||0),0),0),L=`Hola ${S.nombre}! 🍷

Aquí están tus vouchers de SUCOVI 2027:

${P}

💰 *Total pagado: $${V(N)}*

Presentá cada voucher en el stand correspondiente para retirar tus vinos. 

_Sáb 20 jun 2026 · Roma 656, Olivos_`,I="https://wa.me/54"+((v=S.tel)==null?void 0:v.replace(/\D/g,""))+"?text="+encodeURIComponent(L);window.open(I,"_blank")},window._cancelarCarrito=async()=>{confirm("¿Cancelar y vaciar el carrito de "+r.nombre+"?")&&(await bo(r.fireId),r=null,s=[],m())},window._volverCobrar=()=>{r=null,s=[],m()},window._cobrar=async()=>{const S=r,x=s.filter(N=>{var L;return(L=N.items)==null?void 0:L.length});if(!x.length)return;const V=document.querySelector("#caja-content .btn-g");V&&(V.disabled=!0,V.textContent="Procesando...");const P=document.getElementById("cobro-msg");try{await Zc(S,x);for(const R of x)for(const I of R.items||[])I.vinoId&&await hd(R.standId,I.vinoId,I.qty||1).catch(()=>{});await bo(S.fireId),P.innerHTML=`<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${x.length} voucher${x.length>1?"s":""} generado${x.length>1?"s":""}.
      </span>`,V&&(V.style.display="none");const N=document.getElementById("voucher-actions");N&&(N.style.display="flex"),window._lastCobrado={inv:S,items:x};const{escucharPedidosPorInvitado:L}=await rn(async()=>{const{escucharPedidosPorInvitado:R}=await Promise.resolve().then(()=>Kn);return{escucharPedidosPorInvitado:R}},void 0);L(S.fireId,R=>{const I=R.filter(v=>x.some(f=>f.standId===v.standId));window._lastPedidosIds=I.map(v=>v.fireId),window._lastVoucherNums=I.map(v=>v.voucherNum||0),console.log("voucherNums:",window._lastVoucherNums)})}catch(N){P.innerHTML=`<span style="color:#C0392B">Error: ${N.message}</span>`,V&&(V.disabled=!1,V.textContent="Reintentar")}};function D(){const S=document.getElementById("caja-content"),x=e.filter(N=>N.retiro!=="envio"),V={pagado:"b-pago",listo:"b-list",entregado:"b-entr"};if(!x.length){S.innerHTML='<div class="empty">Sin pedidos aún</div>';return}const P={};x.forEach(N=>{P[N.invFireId]||(P[N.invFireId]={nombre:N.invNombre,codigo:N.invCodigo||"",peds:[]}),P[N.invFireId].peds.push(N)}),S.innerHTML=Object.entries(P).map(([N,L])=>{var I;const R=L.peds.reduce((v,f)=>v+(f.total||0),0);return`
      <div class="card" style="margin-bottom:10px;cursor:pointer" onclick="window._verDetallePedido('${N}')">
        <div style="display:flex;align-items:center;gap:8px">
          <div class="avatar" style="width:36px;height:36px;font-size:12px;flex-shrink:0">
            ${(L.nombre||"??")[0]}${((I=(L.nombre||"??").split(" ")[1])==null?void 0:I[0])||""}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${L.nombre||""}</div>
            <div style="font-size:11px;color:#888">${L.peds.length} stand${L.peds.length>1?"s":""} · ${L.peds.map(v=>'<span class="badge '+V[v.estado]+'" style="font-size:10px">'+v.standNombre+"</span>").join(" ")}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:15px;font-weight:500">$${le(R)}</div>
            <div style="font-size:11px;color:#5BA4CF">Ver detalle ›</div>
          </div>
        </div>
      </div>`}).join("")}window._verDetallePedido=S=>{var f,w;const x=document.getElementById("caja-content"),V=e.filter(y=>y.invFireId===S),P=t.find(y=>y.fireId===S)||{nombre:((f=V[0])==null?void 0:f.invNombre)||"",apellido:"",codigo:((w=V[0])==null?void 0:w.invCodigo)||"",tel:""},N=V.filter(y=>y.estado!=="reembolsado"&&y.estado!=="cancelado").map(y=>({standId:y.standId,standNombre:y.standNombre,retiro:y.retiro,items:y.items||[],fireId:y.fireId})),L=V.filter(y=>y.estado!=="reembolsado"&&y.estado!=="cancelado").reduce((y,A)=>y+(A.total||0),0);window._lastCobrado={inv:P,items:N},window._lastPedidosIds=V.filter(y=>y.estado==="pagado").map(y=>y.fireId);const R={pagado:"#5BA4CF",entregado:"#3A7D44",reembolsado:"#C0392B",cancelado:"#C0392B",listo:"#D97706"},I={pagado:"b-pago",listo:"b-list",entregado:"b-entr",reembolsado:"b-canc",cancelado:"b-canc"},v={pagado:"💳 Pagado",listo:"✅ Listo",entregado:"📦 Entregado",reembolsado:"↩️ Reembolsado",cancelado:"❌ Cancelado"};x.innerHTML=`
      <button class="btn" onclick="window._cajaVista('pedidos', document.querySelector('.nav button:nth-child(2)'))"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>
      <div class="card" style="margin-bottom:12px">
        <div style="font-size:16px;font-weight:500">${P.nombre} ${P.apellido}</div>
        <div style="font-size:12px;color:#888">${P.codigo}${P.tel?" · "+P.tel:""}</div>
      </div>
      ${V.map(y=>`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${R[y.estado]||"#5BA4CF"};
          ${y.estado==="reembolsado"||y.estado==="cancelado"?"opacity:.7":""}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C">🍷 ${y.standNombre}</div>
            <span class="badge ${I[y.estado]||"b-pago"}">${v[y.estado]||y.estado}</span>
          </div>
          ${(y.items||[]).map(A=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555;
              ${y.estado==="reembolsado"||y.estado==="cancelado"?"text-decoration:line-through":""}">
              <span>${A.desc}</span><strong>$${le(A.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Subtotal</span>
            <span ${y.estado==="reembolsado"||y.estado==="cancelado"?'style="text-decoration:line-through;color:#C0392B"':""}>
              $${le(y.total||0)}
            </span>
          </div>
          ${y.estado==="pagado"?`
            <button class="btn" style="margin-top:10px;width:100%;padding:7px;font-size:12px;
              color:#C0392B;border-color:#C0392B"
              onclick="window._reembolsarUnPedido('${y.fireId}','${S}')">
              ↩️ Reembolsar este stand
            </button>`:""}
          ${y.estado==="reembolsado"?`
            <div style="font-size:11px;color:#C0392B;margin-top:6px">
              Reembolsado el ${y.reembolsadoAt?new Date(y.reembolsadoAt).toLocaleString("es-AR"):""}
            </div>`:""}
        </div>`).join("")}
      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>TOTAL COBRADO</span><span style="color:#1A3A5C">$${le(L)}</span>
        </div>
        <div style="font-size:11px;color:#888;margin-top:4px">Sin incluir reembolsos</div>
      </div>
      <div style="display:flex;gap:8px;flex-direction:column">
        <button class="btn btn-b" style="width:100%;padding:10px;font-size:14px"
          onclick="window._imprimirVouchers()">🖨️ Imprimir vouchers</button>
        <button class="btn btn-g" style="width:100%;padding:10px;font-size:14px"
          onclick="window._enviarVouchersWA()">📱 Enviar por WhatsApp</button>
        <button class="btn" style="width:100%;padding:10px;font-size:14px;background:#6B21A8;color:#fff;border-color:#6B21A8"
          onclick="window._descargarVoucherPDF()">⬇️ Descargar PDF</button>
      </div>`},window._reembolsarUnPedido=async(S,x)=>{confirm("¿Reembolsar este pedido? El stand no podrá marcarlo como entregado.")&&(await ed(S),window._verDetallePedido(x))},window._descargarVoucherPDF=async()=>{const{inv:S,items:x}=window._lastCobrado||{};if(!S||!x)return;window.jspdf||await new Promise((I,v)=>{const f=document.createElement("script");f.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",f.onload=I,f.onerror=v,document.head.appendChild(f)}),window.qrcode||await new Promise((I,v)=>{const f=document.createElement("script");f.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",f.onload=I,f.onerror=v,document.head.appendChild(f)});const{jsPDF:V}=window.jspdf,P=new V({unit:"mm",format:"a4"}),N=window._lastPedidosIds||[];let L=15;const R=(I,v,f)=>{P.setDrawColor(26,58,92),P.setLineWidth(.4),P.roundedRect(10,f,190,80,3,3,"S"),P.setFillColor(26,58,92),P.roundedRect(10,f,190,18,3,3,"F"),P.setFillColor(26,58,92),P.rect(10,f+12,190,6,"F"),P.setFillColor(201,169,110),P.rect(10,f+18,190,1.5,"F"),P.setTextColor(255,255,255),P.setFontSize(11),P.setFont("helvetica","bold"),P.text("SUCOVI 2027 · VOUCHER DE RETIRO",15,f+10),P.setFontSize(8),P.setFont("helvetica","normal"),P.text("Stand #"+I.standId,185,f+10,{align:"right"}),P.setTextColor(26,58,92),P.setFontSize(13),P.setFont("helvetica","bold"),P.text("🍷 "+I.standNombre,15,f+28),P.setFontSize(10),P.setFont("helvetica","normal"),P.setTextColor(80,80,80),P.text((S.nombre||"")+" "+(S.apellido||"")+" · "+(S.codigo||""),15,f+36);let y=f+44;if((I.items||[]).forEach(A=>{P.setFontSize(10),P.setTextColor(60,60,60),P.text(A.desc,15,y),P.setFont("helvetica","bold"),P.text("$"+Number(A.sub).toLocaleString("es-AR"),195,y,{align:"right"}),P.setFont("helvetica","normal"),y+=7}),P.setDrawColor(200,200,200),P.setLineWidth(.3),P.line(15,y,195,y),y+=5,P.setFontSize(12),P.setFont("helvetica","bold"),P.setTextColor(26,58,92),P.text("Total",15,y),P.text("$"+Number((I.items||[]).reduce((A,_)=>A+(_.sub||0),0)).toLocaleString("es-AR"),195,y,{align:"right"}),P.setFillColor(58,125,68),P.roundedRect(130,f+26,30,8,2,2,"F"),P.setTextColor(255,255,255),P.setFontSize(7),P.setFont("helvetica","bold"),P.text("✅ PAGADO",145,f+31.5,{align:"center"}),v&&window.qrcode)try{const A=window.qrcode(0,"M");A.addData(v),A.make();const _=A.getModuleCount(),E=28,$=E/_,Vt=168,we=f+26;P.setFillColor(255,255,255),P.rect(Vt-1,we-1,E+2,E+2,"F"),P.setFillColor(0,0,0);for(let kt=0;kt<_;kt++)for(let Pt=0;Pt<_;Pt++)A.isDark(kt,Pt)&&P.rect(Vt+Pt*$,we+kt*$,$,$,"F");P.setFontSize(6),P.setTextColor(120,120,120),P.text("Escaneá en el stand",Vt+E/2,we+E+4,{align:"center"})}catch{}return f+80+8};x.forEach((I,v)=>{v>0&&L>130&&(P.addPage(),L=15),L=R(I,N[v],L)}),P.save("Voucher_"+(S.nombre||"").replace(/ /g,"_")+"_SUCOVI2027.pdf")},window._abrirScanner=async()=>{document.getElementById("scan-overlay").style.display="flex";const S=document.getElementById("scan-status");S&&(S.textContent="Cargando escáner...");try{await Mm(),a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const x=document.getElementById("scan-video");x.srcObject=a,l=!0,S&&(S.textContent="Buscando QR...");const V=document.createElement("canvas"),P=V.getContext("2d",{willReadFrequently:!0}),N=()=>{if(l){if(x.readyState===x.HAVE_ENOUGH_DATA&&x.videoWidth>0){V.width=x.videoWidth,V.height=x.videoHeight,P.drawImage(x,0,0);const L=P.getImageData(0,0,V.width,V.height),R=window.jsQR(L.data,L.width,L.height,{inversionAttempts:"dontInvert"});if(R&&R.data){const I=R.data;window._cerrarScanner();const v=I.match(/INV-\d+/),f=I.match(/inv=([A-Z0-9]+)/i);if(v){const w=document.getElementById("buscar-caja");w&&(w.value=v[0],window._buscarInv(!0))}else f&&rn(async()=>{const{buscarInvitadoPorToken:w}=await Promise.resolve().then(()=>Kn);return{buscarInvitadoPorToken:w}},void 0).then(({buscarInvitadoPorToken:w})=>w(f[1]).then(y=>{y&&window._seleccionarInv(y.fireId)}));return}}l&&requestAnimationFrame(N)}};x.addEventListener("loadeddata",()=>requestAnimationFrame(N))}catch{S&&(S.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}},window._cerrarScanner=()=>{l=!1,a&&(a.getTracks().forEach(x=>x.stop()),a=null);const S=document.getElementById("scan-overlay");S&&(S.style.display="none")},m()}const $r=n=>Number(n).toLocaleString("es-AR");function zm(n,t,e){if(Kt(),!e||e.estado==="invalidado"){n.innerHTML=zt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
      <div style="max-width:400px;margin:40px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <h2 style="font-size:18px;font-weight:500;color:#6B1C1C;margin-bottom:8px">
          Acceso requerido
        </h2>
        <p style="font-size:14px;color:#666;line-height:1.6;margin-bottom:20px">
          Escaneá el QR personal del invitado o ingresá su código manualmente.
        </p>

        <!-- Ingreso manual -->
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="inv-cod-manual" placeholder="INV-0001.Apellido"
            style="flex:1;font-size:15px;text-transform:uppercase;letter-spacing:.05em;text-align:center"
            onkeydown="if(event.key==='Enter') window._buscarInvStand()">
          <button class="btn btn-v" onclick="window._buscarInvStand()" style="white-space:nowrap">
            Ir →
          </button>
        </div>
        <button class="btn btn-b" onclick="window._abrirScannerStand()"
          style="width:100%;padding:10px;font-size:13px;margin-bottom:12px">
          📷 Escanear QR del invitado
        </button>
        <div id="inv-cod-err" style="font-size:12px;color:#C0392B;margin-bottom:12px"></div>

        <!-- Scanner overlay -->
        <div id="scan-overlay-stand" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
          background:rgba(26,58,92,.92);z-index:300;flex-direction:column;
          align-items:center;justify-content:center;gap:16px">
          <p style="color:#fff;font-size:14px;font-weight:500">Apuntá al QR del invitado</p>
          <video id="scan-video-stand" autoplay playsinline muted
            style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
          <p id="scan-status-stand" style="color:#C9A96E;font-size:13px">Iniciando...</p>
          <button onclick="window._cerrarScannerStand()"
            style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);
              border-radius:8px;padding:8px 20px;cursor:pointer;font-size:13px">
            Cancelar
          </button>
        </div>

        <p style="font-size:12px;color:#aaa;margin-top:8px">
          Consultas: José Pannunzio +54 9 11 5400-1313
        </p>
      </div>`,window._buscarInvStand=async()=>{var D;const u=(((D=document.getElementById("inv-cod-manual"))==null?void 0:D.value)||"").trim(),p=document.getElementById("inv-cod-err");if(!u)return;const m=u.split(".");if(m.length!==2){p.textContent="Formato: INV-0001.Apellido";return}const b=m[0].toUpperCase().trim(),T=m[1].toLowerCase().trim();p.textContent="Buscando...";try{const{buscarInvitadoPorCodigo:S}=await rn(async()=>{const{buscarInvitadoPorCodigo:V}=await Promise.resolve().then(()=>Kn);return{buscarInvitadoPorCodigo:V}},void 0),x=await S(b);if(!x){p.textContent="Código no encontrado";return}if(x.estado==="invalidado"){p.textContent="Invitado invalidado";return}if(!x.apellido.toLowerCase().startsWith(T)){p.textContent="Código o apellido incorrecto";return}window.location.href="/stand/"+t.id+"?inv="+x.token}catch(S){p.textContent="Error: "+S.message}};return}if(e.estado==="pendiente"){n.innerHTML=zt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">
          Bono pendiente de pago
        </h2>
        <p style="font-size:14px;color:#666;">
          Hola ${e.nombre}, tu bono ($35.000) todavía no fue confirmado.<br>
          Pasá por la entrada para abonar.
        </p>
      </div>`;return}let i=[],r="stand";const s=`/carrito?inv=${e.token}`;n.innerHTML=zt({title:"🍷 "+t.nombre,sub:t.region+" · Stand #"+t.id,actions:[`<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
        <div style="font-size:11px;background:rgba(255,255,255,.18);padding:3px 8px;border-radius:6px;color:#fff">✓ ${e.nombre}</div>
        <a href="${s}" style="font-size:10px;color:rgba(255,255,255,.75)">Ver carrito →</a>
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
            <a href="${s}" style="color:#6B1C1C;text-decoration:underline">
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
      onclick="window.location.href='${s}'">
      🛒 <span id="cart-fab-txt">Ver carrito</span>
    </button>`;let a={};fs(u=>{console.log("STOCK DOCS:",u.length,"bodega:",t.id),a={},u.filter(p=>Number(p.standId)===Number(t.id)).forEach(p=>{a[p.vinoId]=(p.total||0)-(p.degustacion||0)-(p.reservado||0)-(p.pagado||0)-(p.entregado||0)})}),si(t.id,u=>{i=u,d()});const l={};ps(e.fireId,u=>{var S,x;const p=u.find(V=>Number(V.standId)===t.id);p&&p.items&&p.items.forEach(V=>{if(V.key&&l[V.key]===void 0){l[V.key]=V.qty||0;const[P,N]=V.key.split("_").map(Number),L=document.getElementById("qv"+P+"_"+N);L&&(L.textContent=l[V.key])}});const m=u.reduce((V,P)=>V+(P.items||[]).reduce((N,L)=>N+(L.sub||0),0),0),b=u.reduce((V,P)=>V+(P.items||[]).length,0),T=document.getElementById("cart-fab"),D=document.getElementById("cart-fab-txt");T&&b>0?(T.style.display="flex",D.textContent=`Ver carrito · $${$r(m)}`):T&&(T.style.display="none"),p&&((S=p.items)!=null&&S.length)?(r=p.retiro||"stand",(x=document.getElementById("rb-stand"))==null||x.classList.toggle("sel",r==="stand"),document.getElementById("retiro-box").style.display="block",document.getElementById("stand-resumen").style.display="block",document.getElementById("stand-resumen-lines").innerHTML=p.items.map(V=>`
          <div style="display:flex;justify-content:space-between;font-size:12px;
            color:#555;margin-bottom:4px">
            <span>${V.desc}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-weight:500">$${$r(V.sub)}</span>
              <button onclick="window._quitarItem('${V.key}')"
                style="border:none;background:none;color:#A32D2D;cursor:pointer;
                font-size:13px;padding:0 2px">✕</button>
            </div>
          </div>`).join("")):(document.getElementById("stand-resumen").style.display="none",p===null&&(document.getElementById("retiro-box").style.display="none"))});function d(){const u=document.getElementById("menu-lista");if(u){if(!i.length){u.innerHTML='<div class="empty">La carta estará disponible pronto.</div>';return}u.innerHTML=i.map((p,m)=>`
      <div class="vino-card">
        <div style="font-size:17px;font-weight:600;color:#1A3A5C">${p.nombre}</div>
        <div style="font-size:11px;color:#888;margin-top:2px">
          <span style="font-size:14px;color:#555">${p.varietal||""}${p.cosecha?" · "+p.cosecha:""}</span>
        </div>
        ${p.descripcion?`<div style="font-size:13px;color:#666;margin-top:3px">${p.descripcion}</div>`:""}
        ${(p.unidades||[]).map((b,T)=>`
          <div class="qty-row">
            <span class="qty-label">
              ${b.u} — <span style="color:#6B1C1C;font-weight:600">$${$r(b.p)}</span>
            </span>
            <button class="qty-btn" onclick="window._agregar(${m},${T},-1)">−</button>
            <span id="qv${m}_${T}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" onclick="window._agregar(${m},${T},1)">+</button>
          </div>`).join("")}
      </div>`).join("")}}window._agregar=async(u,p,m)=>{const b=i[u];if(!b)return;const T=(b.unidades||[])[p];if(!T)return;const D=`${u}_${p}`;if(m>0){const x=b.fireId||b.id;if(!await dd(t.id,x,m)){const P=document.getElementById("add-msg");P.textContent="Sin stock disponible",P.style.cssText="font-size:16px;color:#C0392B;text-align:center;padding:8px",setTimeout(()=>{P.textContent="",P.style.cssText=""},2500);return}}l[D]=Math.max(0,(l[D]||0)+m);const S=document.getElementById(`qv${u}_${p}`);if(S&&(S.textContent=l[D]),m<0&&await ud(t.id,b.fireId||b.id,1).catch(()=>{}),l[D]===0)await Gi(e.fireId,t.id,D);else{const x={key:D,desc:`${b.nombre} — ${T.u} ×${l[D]}`,sub:T.p*l[D],vinoNombre:b.nombre,vinoId:b.fireId||b.id||b.nombre,unidad:T.u,precio:T.p,qty:l[D]},V=document.getElementById("add-msg");V.textContent="⏳ Guardando...",V.style.cssText="font-size:18px;color:#5BA4CF;text-align:center;padding:8px",await Jc(e.fireId,t.id,t.nombre,x,r);const P=b.fireId||b.id;a[P]!==void 0&&(a[P]=Math.max(0,a[P]-m)),document.getElementById("retiro-box").style.display="block",V.textContent="✓ Agregado al carrito",V.style.cssText="font-size:18px;color:#3B6D11;text-align:center;padding:8px",setTimeout(()=>{V.textContent="",V.style.cssText=""},2500)}},window._sRet=async u=>{r=u,document.getElementById("rb-stand").classList.toggle("sel",u==="stand"),await hs(e.fireId,t.id,u)},window._quitarItem=async u=>{await Gi(e.fireId,t.id,u);const[p,m]=u.split("_").map(Number);l[u]=0;const b=document.getElementById(`qv${p}_${m}`);b&&(b.textContent=0)}}window._abrirScannerStand=async()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="flex");const t=document.getElementById("scan-status-stand");try{window.jsQR||await new Promise((u,p)=>{const m=document.createElement("script");m.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",m.onload=u,m.onerror=p,document.head.appendChild(m)});const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),i=document.getElementById("scan-video-stand");i.srcObject=e,t&&(t.textContent="Buscando QR...");const r=document.createElement("canvas"),s=r.getContext("2d",{willReadFrequently:!0});let a=!0;const l=()=>{a=!1,e.getTracks().forEach(u=>u.stop())},d=()=>{if(a){if(i.readyState===i.HAVE_ENOUGH_DATA&&i.videoWidth>0){r.width=i.videoWidth,r.height=i.videoHeight,s.drawImage(i,0,0);const u=s.getImageData(0,0,r.width,r.height),p=window.jsQR(u.data,u.width,u.height,{inversionAttempts:"dontInvert"});if(p&&p.data){l(),window._cerrarScannerStand();const b=p.data.match(/inv=([A-Z0-9]+)/i),T=window.location.pathname.split("/")[2];b&&T&&(window.location.href="/stand/"+T+"?inv="+b[1]);return}}a&&requestAnimationFrame(d)}};i.addEventListener("loadeddata",()=>requestAnimationFrame(d))}catch{t&&(t.textContent="No se pudo acceder a la camara.")}};window._cerrarScannerStand=()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="none");const t=document.getElementById("scan-video-stand");t&&t.srcObject&&(t.srcObject.getTracks().forEach(e=>e.stop()),t.srcObject=null)};const te=n=>Number(n).toLocaleString("es-AR");async function jm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Qr(n,t,e){const i=document.getElementById(e);i&&(i.textContent="Iniciando cámara..."),await jm();const r=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),s=document.getElementById(n);if(!s)return r.getTracks().forEach(m=>m.stop()),null;s.srcObject=r;let a=!0;const l=document.createElement("canvas"),d=l.getContext("2d",{willReadFrequently:!0}),u=()=>{a=!1,r.getTracks().forEach(m=>m.stop())},p=()=>{if(a){if(s.readyState===s.HAVE_ENOUGH_DATA&&s.videoWidth>0){l.width=s.videoWidth,l.height=s.videoHeight,d.drawImage(s,0,0);const m=d.getImageData(0,0,l.width,l.height),b=window.jsQR(m.data,m.width,m.height,{inversionAttempts:"dontInvert"});if(b&&b.data){u(),t(b.data);return}}a&&requestAnimationFrame(p)}};return i&&(i.textContent="Buscando QR..."),s.addEventListener("loadeddata",()=>requestAnimationFrame(p)),u}function qm(n,t){if(Kt(),!document.getElementById("sp-css")){const p=document.createElement("style");p.id="sp-css",p.textContent=`
      .tab-btn { border:none;border-radius:0;border-bottom:2px solid transparent;
        color:#888;padding:8px 14px;margin-bottom:-2px;background:none;
        font-size:12px;cursor:pointer;font-weight:400 }
      .tab-btn.active { border-bottom-color:#5BA4CF;color:#5BA4CF;font-weight:600 }
      .b-canc { background:#FEE2E2;color:#C0392B;border:1px solid #FCA5A5 }
      .sf-btn { font-size:11px }
      .sf-btn.active { background:#EAF3DE;color:#3B6D11;border-color:#3B6D11 }
    `,document.head.appendChild(p)}let e=[],i="pendientes",r=null,s=null;if(!document.getElementById("stand-header-style")){const p=document.createElement("style");p.id="stand-header-style",p.textContent=".hdr { background: linear-gradient(135deg, #2D6A4F, #3A7D44) !important; } .gold { background: linear-gradient(90deg, #C9A96E, #A8865A, #C9A96E) !important; }",document.head.appendChild(p)}n.innerHTML=zt({title:`🍷 ${t.nombre}`,sub:`Stand #${t.id} · Sucovi 2027`,actions:[`<button class="btn" onclick="sessionStorage.removeItem('stand-auth-${t.id}');location.reload()"
        style="font-size:11px;padding:5px 9px">Salir</button>`]})+`
    <!-- Tabs -->
    <div style="display:flex;border-bottom:2px solid #E8EFF5;overflow-x:auto;background:#fff">
      <button class="tab-btn active" id="tab-pedidos" onclick="window._setTab('pedidos')">📋 Pedidos</button>
      <button class="tab-btn" id="tab-carta" onclick="window._setTab('carta')">🍷 Mi carta</button>
      <button class="tab-btn" id="tab-resumen" onclick="window._setTab('resumen')">📊 Resumen</button>
    </div>

    <!-- Tab Pedidos -->
    <div id="tab-content-pedidos" class="wrap">
      <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;align-items:center">
        <button class="btn sf-btn active" id="sf-listos" onclick="window._setSF('pendientes',this)">🟢 Listos</button>
        <button class="btn sf-btn" id="sf-entr" onclick="window._setSF('entregados',this)">✅ Entregados</button>
        <button class="btn sf-btn" id="sf-all" onclick="window._setSF('todos',this)">📋 Todos</button>

        <div style="margin-left:auto;display:flex;gap:6px">
          <button class="btn btn-b" style="padding:10px 16px;font-size:13px;font-weight:500;margin-left:auto" onclick="window._abrirScannerVoucher()">📷 Escanear voucher</button>
        </div>
      </div>
      <div id="sp-pedidos"></div>
    </div>

    <!-- Tab Carta -->
    <div id="tab-content-carta" class="wrap" style="display:none">
      <div id="sp-carta"><div class="empty">Cargando carta...</div></div>
    </div>

    <!-- Tab Resumen -->
    <div id="tab-content-resumen" class="wrap" style="display:none">
      <div id="sp-resumen"></div>
    </div>

    <!-- Scanner Invitado -->
    <div id="scan-overlay-inv" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Escaneá el QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video-inv" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-inv" style="color:#C9A96E;font-size:13px">Iniciando...</p>
      <button class="btn" style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)"
        onclick="window._cerrarScannerInv()">Cancelar</button>
    </div>

    <!-- Scanner Voucher -->
    <div id="scan-overlay-voucher" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Escaneá el voucher del cliente</p>
      <div class="scan-frame">
        <video id="scan-video-voucher" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-voucher" style="color:#C9A96E;font-size:13px">Iniciando...</p>
      <button class="btn" style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)"
        onclick="window._cerrarScannerVoucher()">Cancelar</button>
    </div>

    <!-- Modal voucher -->
    <div id="voucher-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(0,0,0,.5);z-index:200;align-items:center;justify-content:center;padding:16px">
      <div class="card" style="width:100%;max-width:380px">
        <div id="voucher-modal-content"></div>
      </div>
    </div>`,window._setTab=p=>{["pedidos","carta","resumen"].forEach(m=>{var T;(T=document.getElementById("tab-"+m))==null||T.classList.toggle("active",m===p);const b=document.getElementById("tab-content-"+m);b&&(b.style.display=m===p?"block":"none")}),p==="carta"&&l(),p==="resumen"&&d()},window._setSF=(p,m)=>{i=p,["sf-listos","sf-entr","sf-all","sf-log"].forEach(b=>{var T;(T=document.getElementById(b))==null||T.classList.remove("active")}),m.classList.add("active"),a()},Yc(t.id,p=>{e=p,a()});function a(){const p=document.getElementById("sp-pedidos");if(!p)return;let m=e;if(i==="pendientes"?m=e.filter(b=>(b.estado==="pagado"||b.estado==="listo")&&b.retiro!=="envio"):i==="entregados"?m=e.filter(b=>b.estado==="entregado"&&b.retiro!=="envio"):m=e.filter(b=>b.retiro!=="envio"),!m.length){const b={pendientes:"Sin pedidos listos 🎉",entregados:"Sin entregas todavía",todos:"Sin pedidos"};p.innerHTML=`<div class="empty">${b[i]||"Sin pedidos"}</div>`;return}p.innerHTML=m.map(b=>{const T=b.estado==="entregado";return`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${T?"#3A7D44":"#5BA4CF"}">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">
            <div>
              <div style="font-size:15px;font-weight:500;color:#1A3A5C">${b.invNombre||"Invitado"}</div>
              ${b.voucherNum?'<div style="font-size:10px;color:#5BA4CF;font-weight:500">VOC-'+String(b.voucherNum).padStart(3,"0")+"</div>":""}
              <div style="font-size:11px;color:#888">${b.invCodigo||""}</div>
            </div>
            <span class="badge ${T?"b-entr":"b-pago"}">${T?"✅ Entregado":"💳 Pagado"}</span>
          </div>
          ${(b.items||[]).map(D=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555">
              <span>${D.desc}</span><strong>$${te(D.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Total</span><span>$${te(b.total||0)}</span>
          </div>
          ${T?"":`
            <button class="btn btn-g" style="width:100%;margin-top:10px;padding:9px"
              onclick="window._scanearEsteRemito('${b.fireId}')">
              📷 Este remito
            </button>`}
        </div>`}).join("")}window._entregarPedido=async p=>{await wo(p)},window._scanearEsteRemito=async p=>{document.getElementById("scan-overlay-voucher").style.display="flex";const m=document.getElementById("scan-status-voucher");m&&(m.textContent="Escaneá el QR de este remito...");try{s=await Qr("scan-video-voucher",b=>{window._cerrarScannerVoucher(),b.includes(p)?wo(p):m&&(m.textContent="QR no corresponde a este remito")},"scan-status-voucher")}catch{m&&(m.textContent="No se pudo acceder a la cámara.")}},window._listoParaLogistica=async p=>{await nd(p)};function l(){const p=document.getElementById("sp-carta");p&&(p.innerHTML='<div class="empty">Cargando...</div>',si(t.id,m=>{if(!m.length){p.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}p.innerHTML=m.map(b=>`
        <div class="card" style="margin-bottom:10px">
          <div style="font-size:17px;font-weight:600;color:#1A3A5C">${b.nombre}</div>
          <div style="font-size:14px;color:#666;margin-top:2px">
            ${b.varietal||""}${b.cosecha?" · "+b.cosecha:""}
          </div>
          ${b.descripcion?`<div style="font-size:13px;color:#888;margin-top:3px">${b.descripcion}</div>`:""}
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
            ${(b.unidades||[]).map(T=>`
              <span style="background:#EBF4FA;color:#1A3A5C;padding:4px 12px;
                border-radius:20px;font-size:13px;font-weight:500">
                ${T.u}: $${te(T.p)}
              </span>`).join("")}
          </div>
        </div>`).join("")}))}function d(){const p=document.getElementById("sp-resumen");if(!p)return;const m=e.filter(L=>L.estado!=="reembolsado"&&L.estado!=="cancelado"),b=m.filter(L=>L.estado==="entregado"&&L.retiro!=="envio"),T=m.filter(L=>(L.estado==="pagado"||L.estado==="listo")&&L.retiro!=="envio"),D=m.filter(L=>L.retiro==="envio"),S=b.reduce((L,R)=>L+(R.total||0),0),x=T.reduce((L,R)=>L+(R.total||0),0),V=m.reduce((L,R)=>L+(R.total||0),0),P={};b.forEach(L=>(L.items||[]).forEach(R=>{const I=R.vinoNombre+" — "+R.unidad;P[I]||(P[I]={cant:0,total:0}),P[I].cant+=R.qty||1,P[I].total+=R.sub||0}));const N=Object.entries(P).sort((L,R)=>R[1].total-L[1].total);p.innerHTML=`
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
        <div class="stat"><div class="v" style="color:#3A7D44">$${te(S)}</div><div class="l">Entregado</div></div>
        <div class="stat"><div class="v" style="color:#D97706">$${te(x)}</div><div class="l">Por entregar</div></div>
        <div class="stat"><div class="v">$${te(V)}</div><div class="l">Total vendido</div></div>
        ${D.length?`<div class="stat" style="grid-column:1/-1"><div class="v" style="color:#5BA4CF;font-size:14px">${D.length} pedido${D.length>1?"s":""} de envío a domicilio</div><div class="l">Manejados por logística</div></div>`:""}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Detalle por vino (entregados)</p>
        ${N.length?N.map(([L,R])=>`
          <div style="display:flex;justify-content:space-between;padding:6px 0;
            border-bottom:.5px solid #E8EFF5;font-size:12px">
            <span style="flex:1">${L}</span>
            <span style="color:#888;margin:0 8px">${R.cant} u.</span>
            <span style="font-weight:500">$${te(R.total)}</span>
          </div>`).join(""):'<div style="color:#aaa;font-size:12px;padding:8px 0">Sin entregas todavía</div>'}
      </div>`}window._abrirScannerInv=async()=>{document.getElementById("scan-overlay-inv").style.display="flex";try{r=await Qr("scan-video-inv",p=>{window._cerrarScannerInv();const m=p.match(/inv=([A-Z0-9]+)/i);m?window.location.href="/stand/"+t.id+"?inv="+m[1]:document.getElementById("scan-status-inv").textContent="QR no reconocido — usá el QR personal del invitado"},"scan-status-inv")}catch{document.getElementById("scan-status-inv").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerInv=()=>{r&&(r(),r=null),document.getElementById("scan-overlay-inv").style.display="none"},window._abrirScannerVoucher=async()=>{document.getElementById("scan-overlay-voucher").style.display="flex";try{s=await Qr("scan-video-voucher",p=>{window._cerrarScannerVoucher();const m=e.find(b=>p.includes(b.fireId));m?u(m):document.getElementById("scan-status-voucher").textContent="Voucher no reconocido"},"scan-status-voucher")}catch{document.getElementById("scan-status-voucher").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerVoucher=()=>{s&&(s(),s=null),document.getElementById("scan-overlay-voucher").style.display="none"};function u(p){const m=p.estado==="entregado";document.getElementById("voucher-modal-content").innerHTML=`
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:36px">${m?"✅":"⏳"}</div>
        <h3 style="font-size:16px;font-weight:500;color:${m?"#3B6D11":"#854F0B"};margin-top:6px">
          ${m?"PAGADO — Entregar":"PENDIENTE — No entregar"}
        </h3>
      </div>
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${p.invNombre||""}</div>
      <div style="font-size:12px;color:#888;margin-bottom:10px">${p.invCodigo||""}</div>
      ${(p.items||[]).map(b=>`
        <div style="display:flex;justify-content:space-between;font-size:13px;
          padding:5px 0;border-bottom:.5px solid #E8EFF5">
          <span>${b.desc}</span><strong>$${te(b.sub)}</strong>
        </div>`).join("")}
      <div style="display:flex;justify-content:space-between;font-size:15px;
        font-weight:500;margin-top:10px;margin-bottom:14px">
        <span>Total</span><span>$${te(p.total||0)}</span>
      </div>
      ${m?"":`
        <button class="btn btn-g" style="width:100%;padding:11px;font-size:14px"
          onclick="window._entregarPedido('${p.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>`}
      <button class="btn" style="width:100%;margin-top:8px"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`,document.getElementById("voucher-modal").style.display="flex"}}const Hm=n=>Number(n).toLocaleString("es-AR");function md(n,t){if(Kt(),!sessionStorage.getItem("bodega-auth-"+t.id)){n.innerHTML=`
      ${zt({title:"🍷 "+t.nombre,sub:"Carga de carta de vinos"})}
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
      </div>`,window._loginBodega=()=>{document.getElementById("bp").value.trim()===t.pass?(sessionStorage.setItem("bodega-auth-"+t.id,"1"),md(n,t)):document.getElementById("bp-err").textContent="Contraseña incorrecta"};return}let i=[],r=null;n.innerHTML=`
    ${zt({title:"🍷 "+t.nombre,sub:"Carga de carta · Stand #"+t.id,actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('bodega-auth-${t.id}');location.reload()">Salir</button>`]})}
    <div style="max-width:600px;margin:0 auto;padding:14px">
      <div class="card" style="margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:12px"
          id="form-titulo">Agregar vino</p>
        ${[["vn","Nombre del vino *","text","Ej: Gran Malbec 2022"],["vv","Varietal / Blend","text","Ej: Malbec"],["vc","Cosecha","number","2022"],["vd","Descripción corta","text","Tinto con notas de..."],["vb","Precio botella ($)","number",""],["v6","Precio caja x6 ($)","number",""],["v12","Precio caja x12 ($)","number",""],["vs","Stock inicial (botellas) — opcional","number",""]].map(([l,d,u,p])=>`
          <div style="margin-bottom:8px">
            <label style="font-size:11px;color:#666">${d}</label>
            <input id="${l}" type="${u}" placeholder="${p}" style="margin-top:3px">
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
    </div>`,si(t.id,l=>{i=l;const d=document.getElementById("vl");if(d){if(!i.length){d.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}d.innerHTML=i.map(u=>`
      <div style="padding:10px 0;border-bottom:.5px solid #e0d5c8">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="flex:1">
            <div style="font-size:14px;font-weight:500">${u.nombre}</div>
            <div style="font-size:11px;color:#888;margin-top:2px">
              ${u.varietal||""}${u.cosecha?" · "+u.cosecha:""}
            </div>
            ${u.descripcion?`<div style="font-size:12px;color:#666;margin-top:2px">${u.descripcion}</div>`:""}
            <div style="margin-top:4px;display:flex;gap:8px;flex-wrap:wrap">
              ${(u.unidades||[]).map(p=>`<span style="font-size:12px;background:#f5f0eb;padding:2px 8px;
                  border-radius:6px;color:#6B1C1C">
                  ${p.u}: $${Hm(p.p)}
                </span>`).join("")}
            </div>
          </div>
          <div style="display:flex;gap:5px;margin-left:8px">
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5"
              onclick="window._editarV('${u.fireId}')">✏ Editar</button>
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D"
              onclick="window._eliminarV('${u.fireId}')">✕</button>
          </div>
        </div>
      </div>`).join("")}});const s=["vn","vv","vc","vd","vb","v6","v12"],a=()=>{s.forEach(l=>{const d=document.getElementById(l);d&&(d.value="")})};window._guardarV=async()=>{var S;const l=document.getElementById("vn").value.trim(),d=document.getElementById("vm");if(!l){d.innerHTML='<span style="color:#A32D2D">El nombre es requerido.</span>';return}const u=parseFloat(document.getElementById("vb").value),p=parseFloat(document.getElementById("v6").value),m=parseFloat(document.getElementById("v12").value),b=[];if(u&&b.push({u:"Botella",p:u}),p&&b.push({u:"Caja x6",p}),m&&b.push({u:"Caja x12",p:m}),!b.length){d.innerHTML='<span style="color:#A32D2D">Ingresá al menos un precio.</span>';return}const T=parseInt((S=document.getElementById("vs"))==null?void 0:S.value)||0,D={nombre:l,varietal:document.getElementById("vv").value.trim(),cosecha:document.getElementById("vc").value.trim(),descripcion:document.getElementById("vd").value.trim(),unidades:b};d.innerHTML='<span style="color:#888">Guardando...</span>';try{if(r){if(await sd(t.id,r,D),T>0){const x=await rn(()=>Promise.resolve().then(()=>Kn),void 0).then(N=>N.getStockDoc(t.id,r)),V=x?x.total:0,P=T-V;P!==0&&await Ki(t.id,r,P,D.nombre)}r=null}else{const x=await od(t.id,D);T>0&&x&&await Ki(t.id,x,T,D.nombre)}a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none",d.innerHTML='<span style="color:#3B6D11">✓ Guardado correctamente</span>',setTimeout(()=>{const x=document.getElementById("vm");x&&(x.innerHTML="")},3e3)}catch(x){d.innerHTML=`<span style="color:#A32D2D">Error: ${x.message}</span>`}},window._editarV=async l=>{const d=i.find(b=>b.fireId===l);if(!d)return;try{const{getStockDoc:b}=await rn(async()=>{const{getStockDoc:S}=await Promise.resolve().then(()=>Kn);return{getStockDoc:S}},void 0),T=await b(t.id,l),D=document.getElementById("vs");D&&T&&(D.value=T.total||"")}catch{}r=l,document.getElementById("form-titulo").textContent=`Editando: ${d.nombre}`,document.getElementById("vn").value=d.nombre||"",document.getElementById("vv").value=d.varietal||"",document.getElementById("vc").value=d.cosecha||"",document.getElementById("vd").value=d.descripcion||"";const u=(d.unidades||[]).find(b=>b.u==="Botella"),p=(d.unidades||[]).find(b=>b.u==="Caja x6"),m=(d.unidades||[]).find(b=>b.u==="Caja x12");document.getElementById("vb").value=(u==null?void 0:u.p)||"",document.getElementById("v6").value=(p==null?void 0:p.p)||"",document.getElementById("v12").value=(m==null?void 0:m.p)||"",document.getElementById("btn-cancelar-edit").style.display="block",window.scrollTo({top:0,behavior:"smooth"})},window._cancelarEdit=()=>{r=null,a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none"},window._eliminarV=async l=>{const d=i.find(u=>u.fireId===l);confirm(`¿Eliminar "${d==null?void 0:d.nombre}"?`)&&await ad(t.id,l)}}async function Um(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function $m(n){Kt();let t=[],e=[],i=null,r=null,s=!1;n.innerHTML=zt({title:"🚪 Control de puerta",sub:"Solo ingresa quien tiene bono pagado",backHref:"/admin"})+`
    <div class="wrap">
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <input id="scan-cod" placeholder="INV-0001"
          style="flex:1;font-size:15px;text-transform:uppercase;letter-spacing:.05em"
          onkeydown="if(event.key==='Enter') window._vPuerta()">
        <button class="btn btn-v" onclick="window._vPuerta()">✓ Validar</button>
        <button class="btn btn-b" onclick="window._abrirScannerPuerta()" style="padding:8px 12px">📷</button>
      </div>

      <div id="scan-res"></div>

      <div id="historial-puerta" style="margin-top:20px"></div>
    </div>

    <!-- Modal de confirmación -->
    <div id="modal-confirm" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(0,0,0,.5);z-index:200;align-items:center;justify-content:center;padding:16px">
      <div class="card" style="width:100%;max-width:380px;text-align:center">
        <div id="mc-avatar" class="avatar" style="width:60px;height:60px;font-size:20px;margin:0 auto 12px"></div>
        <div id="mc-nombre" style="font-size:20px;font-weight:500;color:#1A3A5C;margin-bottom:4px"></div>
        <div id="mc-codigo" style="font-size:13px;color:#888;margin-bottom:8px"></div>
        <div id="mc-estado" style="margin-bottom:16px"></div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-g" style="flex:1;padding:12px;font-size:14px"
            onclick="window._confirmarIngreso()">✅ Confirmar ingreso</button>
          <button class="btn" style="flex:1;padding:12px;font-size:14px"
            onclick="document.getElementById('modal-confirm').style.display='none'">❌ Cancelar</button>
        </div>
      </div>
    </div>

    <!-- Scanner overlay -->
    <div id="scan-overlay-puerta" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Apuntá al QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video-puerta" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-puerta" style="color:#C9A96E;font-size:13px">Iniciando cámara...</p>
      <button class="btn"
        style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)"
        onclick="window._cerrarScannerPuerta()">Cancelar</button>
    </div>`,fr(l=>{t=l,a()}),window._vPuerta=async()=>{var m;const l=document.getElementById("scan-cod").value.trim().toUpperCase(),d=document.getElementById("scan-res");if(!l)return;const u=t.find(b=>b.codigo===l);if(!u){d.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">❌ Código no encontrado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:4px">${l} no existe en el sistema.</p>
      </div>`;return}if(u.estado==="ingresado"){d.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">⛔ QR ya utilizado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:6px">
          <strong>${u.nombre} ${u.apellido}</strong> ya ingresó al evento.<br>
          Este QR no puede usarse nuevamente.
        </p>
      </div>`;return}if(u.estado==="pendiente"){d.innerHTML=`<div class="result-warn">
        <p style="font-size:16px;font-weight:500;color:#854F0B">⏳ Pago pendiente</p>
        <p style="font-size:12px;color:#633806;margin-top:4px">
          <strong>${u.nombre} ${u.apellido}</strong> no abonó el bono ($35.000).
        </p>
        <button class="btn btn-a" style="margin-top:10px;width:100%;font-size:12px"
          onclick="window._cobrarPuerta('${u.fireId}','${u.codigo}')">
          💰 Cobrar $35.000 y habilitar ingreso
        </button>
      </div>`;return}i=u;const p=u.nombre[0]+(((m=u.apellido)==null?void 0:m[0])||"");document.getElementById("mc-avatar").textContent=p,document.getElementById("mc-nombre").textContent=u.nombre+" "+u.apellido,document.getElementById("mc-codigo").textContent=l+(u.familia?" · Familia "+u.familia:""),document.getElementById("mc-estado").innerHTML='<span class="badge b-pago">✅ Bono confirmado</span>',document.getElementById("modal-confirm").style.display="flex"},window._confirmarIngreso=async()=>{if(!i)return;document.getElementById("modal-confirm").style.display="none";const l=i;i=null,await Pe(l.fireId,{estado:"ingresado"});const d=new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});e.unshift({nombre:l.nombre+" "+l.apellido,codigo:l.codigo,hora:d}),document.getElementById("scan-res").innerHTML=`<div class="result-ok">
      <p style="font-size:20px;font-weight:500;color:#1A3A5C">✅ ¡Bienvenido/a!</p>
      <p style="font-size:16px;margin-top:6px">${l.nombre} ${l.apellido}</p>
      <p style="font-size:13px;color:#3B6D11;margin-top:4px">${l.codigo} · ${d}</p>
    </div>`,document.getElementById("scan-cod").value="",a()},window._cobrarPuerta=async(l,d)=>{await Pe(l,{estado:"pagado"}),document.getElementById("scan-cod").value=d,window._vPuerta()};function a(){const l=document.getElementById("historial-puerta");if(!l)return;const d=t.filter(u=>u.estado==="ingresado");if(!d.length&&!e.length){l.innerHTML='<p style="font-size:12px;color:#aaa;text-align:center">ÚLTIMOS INGRESOS — Sin ingresos todavía</p>';return}l.innerHTML=`
      <p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">
        INGRESOS AL EVENTO (${d.length})
      </p>
      ${d.slice(0,50).map(u=>{var p;return`
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;
          border-bottom:.5px solid #E8EFF5">
          <div class="avatar" style="width:32px;height:32px;font-size:11px;flex-shrink:0">
            ${u.nombre[0]}${((p=u.apellido)==null?void 0:p[0])||""}
          </div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:500">${u.nombre} ${u.apellido}</div>
            <div style="font-size:11px;color:#888">${u.codigo}</div>
          </div>
          <span style="font-size:11px;color:#3A7D44;font-weight:500">✅ Ingresó</span>
        </div>`}).join("")}
    `}window._abrirScannerPuerta=async()=>{const l=document.getElementById("scan-overlay-puerta");l.style.display="flex";const d=document.getElementById("scan-status-puerta");try{await Um(),r=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const u=document.getElementById("scan-video-puerta");u.srcObject=r,s=!0,d&&(d.textContent="Buscando QR...");const p=document.createElement("canvas"),m=p.getContext("2d",{willReadFrequently:!0}),b=()=>{if(s){if(u.readyState===u.HAVE_ENOUGH_DATA&&u.videoWidth>0){p.width=u.videoWidth,p.height=u.videoHeight,m.drawImage(u,0,0);const T=m.getImageData(0,0,p.width,p.height),D=window.jsQR(T.data,T.width,T.height,{inversionAttempts:"dontInvert"});if(D&&D.data){const S=D.data;window._cerrarScannerPuerta();const x=S.match(/INV-\d+/),V=S.match(/inv=([A-Z0-9]+)/i);x?(document.getElementById("scan-cod").value=x[0],window._vPuerta()):V&&Gn(V[1]).then(P=>{P?(document.getElementById("scan-cod").value=P.codigo,window._vPuerta()):d&&(d.textContent="Invitado no encontrado")});return}}s&&requestAnimationFrame(b)}};u.addEventListener("loadeddata",()=>requestAnimationFrame(b))}catch{d&&(d.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerPuerta=()=>{s=!1,r&&(r.getTracks().forEach(d=>d.stop()),r=null);const l=document.getElementById("scan-overlay-puerta");l&&(l.style.display="none")}}const Wr=n=>Number(n).toLocaleString("es-AR");function Qm(n){Kt();let t=[],e=null;n.innerHTML=zt({title:"🚚 Logística — Envíos",sub:"Pedidos para enviar a domicilio",backHref:"/admin"})+'<div class="wrap" id="log-body"></div>',mr(r=>{t=r,e||i()});function i(){const r=document.getElementById("log-body");if(!r)return;e=null;const s=t.filter(m=>m.retiro==="envio");if(!s.length){r.innerHTML='<div class="empty">🚚<br><br>Sin pedidos de envío</div>';return}const a=s.filter(m=>m.estado==="pagado"||m.estado==="listo"),l=s.filter(m=>m.estado==="retirado"),d=s.filter(m=>m.estado==="entregado"),u=s.filter(m=>m.estado==="reembolsado"||m.estado==="cancelado"),p=(m,b,T)=>{var D;return`
      <div class="card" style="margin-bottom:10px;border-left:4px solid ${b};cursor:pointer"
        onclick="window._verDetalleLog('${m.fireId}')">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
          <div>
            <div style="font-size:14px;font-weight:500;color:#1A3A5C">${m.invNombre||""}</div>
            <div style="font-size:11px;color:#888">${m.standNombre} · #${(D=m.fireId)==null?void 0:D.slice(-4).toUpperCase()}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:14px;font-weight:500">$${Wr(m.total||0)}</div>
            <div style="font-size:10px;color:#888">Ver detalle ›</div>
          </div>
        </div>
        ${m.envio?`<div style="font-size:12px;color:#5A1E99;background:#EDE6FB;
          border-radius:6px;padding:6px 8px">
          📍 ${m.envio.calle||""} ${m.envio.numero||""}, ${m.envio.localidad||m.envio.dir||""}, ${m.envio.provincia||""}
        </div>`:""}
      </div>`};r.innerHTML="",a.length&&(r.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:8px;letter-spacing:.05em">
        POR RETIRAR DEL STAND (${a.length})</p>`,r.innerHTML+=a.map(m=>p(m,"#D97706")).join("")),l.length&&(r.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#5BA4CF;margin:14px 0 8px;letter-spacing:.05em">
        RETIRADOS — EN CAMINO (${l.length})</p>`,r.innerHTML+=l.map(m=>p(m,"#5BA4CF")).join("")),d.length&&(r.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#3A7D44;margin:14px 0 8px;letter-spacing:.05em">
        ENTREGADOS (${d.length})</p>`,r.innerHTML+=d.map(m=>p(m,"#3A7D44")).join("")),u.length&&(r.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#C0392B;margin:14px 0 8px;letter-spacing:.05em">
        REEMBOLSADOS (${u.length})</p>`,r.innerHTML+=u.map(m=>p(m,"#C0392B")).join(""))}window._verDetalleLog=r=>{e=r;const s=t.find(p=>p.fireId===r);if(!s)return;const a=document.getElementById("log-body");if(!a)return;const l=s.envio||{},d={pagado:{label:"💳 Pagado — Pendiente de retiro",color:"#D97706",badge:"b-pend"},listo:{label:"✅ Listo para retirar",color:"#D97706",badge:"b-list"},retirado:{label:"📦 Retirado del stand",color:"#5BA4CF",badge:"b-pago"},entregado:{label:"🏠 Entregado a domicilio",color:"#3A7D44",badge:"b-entr"},reembolsado:{label:"↩️ Reembolsado",color:"#C0392B",badge:"b-canc"},cancelado:{label:"❌ Cancelado",color:"#C0392B",badge:"b-canc"}},u=d[s.estado]||d.pagado;a.innerHTML=`
      <button class="btn" onclick="window._volverLog()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>

      <div class="card" style="margin-bottom:12px;border-left:4px solid ${u.color}">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px">
          <div>
            <div style="font-size:16px;font-weight:500;color:#1A3A5C">${s.invNombre||""}</div>
            <div style="font-size:12px;color:#888">${s.invCodigo||""} · Stand: ${s.standNombre}</div>
          </div>
          <span class="badge ${u.badge}" style="font-size:11px">${u.label}</span>
        </div>

        ${(s.items||[]).map(p=>`
          <div style="display:flex;justify-content:space-between;font-size:13px;
            padding:5px 0;border-bottom:.5px solid #E8EFF5;color:#555">
            <span>${p.desc}</span><strong>$${Wr(p.sub)}</strong>
          </div>`).join("")}

        <div style="display:flex;justify-content:space-between;font-size:15px;
          font-weight:500;margin-top:10px;color:#1A3A5C">
          <span>Total</span><span>$${Wr(s.total||0)}</span>
        </div>
      </div>

      <!-- Datos de envío -->
      <div class="card" style="margin-bottom:12px;background:#F5F0FB;border:1px solid #D4BEFC">
        <p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">🚚 Datos de envío</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:13px">
          <div><span style="color:#888;font-size:11px">Destinatario</span><br><strong>${l.nombre||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Teléfono</span><br><strong>${l.tel||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Calle y número</span><br><strong>${l.calle||""} ${l.numero||""}</strong></div>
          <div><span style="color:#888;font-size:11px">Piso / Dpto</span><br><strong>${l.piso||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Localidad</span><br><strong>${l.localidad||l.dir||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Provincia</span><br><strong>${l.provincia||"—"}</strong></div>
        </div>
      </div>

      <!-- Botones de acción según estado -->
      ${s.estado==="pagado"||s.estado==="listo"?`
        <button class="btn btn-b" style="width:100%;padding:12px;font-size:14px;margin-bottom:8px"
          onclick="window._retirarStand('${s.fireId}')">
          📦 Confirmar retiro del stand
        </button>`:""}
      ${s.estado==="retirado"?`
        <button class="btn btn-g" style="width:100%;padding:12px;font-size:14px;margin-bottom:8px"
          onclick="window._entregarDom('${s.fireId}')">
          🏠 Confirmar entrega a domicilio
        </button>`:""}
      <button class="btn" style="width:100%;padding:10px;font-size:13px"
        onclick="window._volverLog()">Volver a la lista</button>`},window._retirarStand=async r=>{await id(r),window._verDetalleLog(r)},window._entregarDom=async r=>{await rd(r),window._verDetalleLog(r)},window._volverLog=()=>{e=null,i()}}async function gd(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Wm(n,t,e){await gd();const i=document.getElementById(n);if(i)try{const r=window.qrcode(0,"M");r.addData(String(t)),r.make();const s=r.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let u=0;u<s;u++)r.isDark(d,u)&&l.fillRect(u*a,d*a,a,a)}catch(r){console.error("QR error:",r)}}async function Gm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Km(n,t){Kt(),n.innerHTML=Bi(null)+`<div style="text-align:center;padding:40px 16px">
    <div style="font-size:13px;color:#aaa">Cargando...</div></div>`;const e=await Gn(t);if(!e){yl(n,"Token inválido","El link no es válido o expiró.");return}if(e.estado==="invalidado"){yl(n,"Acceso invalidado","Este bono fue invalidado. Consultá con la organización.");return}if(e.estado==="pendiente"){n.innerHTML=Bi(e)+`
      <div style="max-width:400px;margin:40px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">Pago pendiente</h2>
        <p style="font-size:14px;color:#666;line-height:1.6">
          Tu bono aún no fue confirmado. Una vez que abones los $35.000 recibirás tu QR de acceso.
        </p>
        <p style="font-size:12px;color:#aaa;margin-top:16px">Consultas: José Pannunzio +54 9 11 5400-1313</p>
      </div>`;return}let i=[],r=null,s=!1;const a=Ot.map(d=>`
    <a href="/stand/${d.id}?inv=${t}"
      style="display:flex;align-items:center;gap:8px;background:#fff;
        border:0.5px solid #D6E4F0;border-radius:8px;padding:8px 10px;
        text-decoration:none;color:inherit">
      <div style="width:28px;height:28px;border-radius:50%;background:#EBF4FA;
        color:#1A3A5C;font-size:11px;font-weight:500;display:flex;
        align-items:center;justify-content:center;flex-shrink:0">${d.id}</div>
      <div style="min-width:0;flex:1">
        <div style="font-size:12px;font-weight:500;color:#1A3A5C;
          white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${d.nombre}</div>
        <div style="font-size:10px;color:#888">${d.region||""}</div>
      </div>
      <span style="color:#5BA4CF;font-size:14px">›</span>
    </a>`).join("");n.innerHTML=Bi(e)+`
    <div style="max-width:480px;margin:0 auto;padding:16px">
      <!-- QR principal -->
      <div style="background:#F0F4F8;border-radius:12px;padding:16px;margin-bottom:12px;text-align:center">
        <div style="font-size:10px;color:#aaa;letter-spacing:.08em;margin-bottom:6px">SUCOVI 2027 · FERIA DE VINOS</div>
        <div style="font-size:18px;font-weight:500;color:#1A3A5C;margin-bottom:4px">${e.nombre} ${e.apellido}</div>
        <span class="badge ${e.estado==="ingresado"?"b-ingr":"b-pago"}" style="display:inline-block;margin-bottom:12px">
          ${e.estado==="ingresado"?"✅ Ingresó al evento":"✅ Bono confirmado"}
        </span>
        <canvas id="qr-acc" style="display:block;margin:0 auto 8px;border-radius:8px"></canvas>
        <div style="font-size:18px;font-weight:500;color:#1A3A5C;letter-spacing:.12em">${e.codigo}</div>
        <div style="font-size:11px;color:#aaa;margin-top:3px">
          ${e.estado==="ingresado"?"Ya ingresaste — ¡Disfrutá!":"Mostrá este código en la entrada"}
        </div>
      </div>

      <!-- Botones de acción -->
      <a href="/carrito?inv=${t}"
        style="display:flex;align-items:center;justify-content:center;gap:8px;
          background:#1A3A5C;color:#fff;border-radius:8px;
          padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-bottom:8px">
        🛒 Ver mi carrito de compras
      </a>

      <button id="btn-mis-pedidos" onclick="window._togglePedidos()"
        style="width:100%;display:none;align-items:center;justify-content:center;gap:8px;
          background:#3A7D44;color:#fff;border:none;border-radius:8px;
          padding:12px;font-size:14px;font-weight:500;cursor:pointer;margin-bottom:8px">
        📋 Mis pedidos
      </button>

      <div id="mis-pedidos-sec" style="display:none;margin-bottom:14px"></div>

      <button onclick="window._abrirScannerAcceso()"
        style="width:100%;display:flex;align-items:center;justify-content:center;gap:8px;
          background:#5BA4CF;color:#fff;border:none;border-radius:8px;
          padding:10px;font-size:13px;font-weight:500;cursor:pointer;margin-bottom:8px">
        📷 Escanear QR de un stand
      </button>

      <button onclick="window._abrirRecomendador()"
        style="width:100%;display:flex;align-items:center;justify-content:center;gap:8px;
          background:linear-gradient(135deg,#6B21A8,#9333EA);color:#fff;border:none;
          border-radius:8px;padding:10px;font-size:13px;font-weight:500;
          cursor:pointer;margin-bottom:14px">
        ✨ ¿Qué vino te recomiendo?
      </button>

      <!-- Lista de stands -->
      <p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">IR A UN STAND</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:14px">
        ${a}
      </div>

      <p style="font-size:11px;color:#aaa;text-align:center">Sáb 20 jun 2026 · 19:30 hs · Roma 656, Olivos</p>
    </div>

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
    </div>

    <!-- Modal recomendador IA -->
    <div id="modal-ia" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(0,0,0,.6);z-index:300;align-items:center;justify-content:center;padding:16px">
      <div class="card" style="width:100%;max-width:420px;max-height:85vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <div style="font-size:15px;font-weight:500;color:#6B21A8">✨ Recomendador de vinos</div>
          <button onclick="document.getElementById('modal-ia').style.display='none'"
            style="background:none;border:none;font-size:18px;cursor:pointer;color:#888">✕</button>
        </div>
        <p style="font-size:13px;color:#666;margin-bottom:12px">
          Contame qué tipos de vino te gustan y te recomiendo qué bodegas visitar esta noche.
        </p>
        <textarea id="ia-input" rows="3"
          placeholder="Ej: Me gustan los tintos con cuerpo, poco tanino. También me interesan los espumantes..."
          style="width:100%;border:1px solid #D6E4F0;border-radius:8px;padding:10px;
            font-size:13px;font-family:inherit;resize:none;margin-bottom:10px"></textarea>
        <button onclick="window._pedirRecomendacion()"
          style="width:100%;background:linear-gradient(135deg,#6B21A8,#9333EA);color:#fff;
            border:none;border-radius:8px;padding:11px;font-size:14px;font-weight:500;
            cursor:pointer;margin-bottom:12px">
          🍷 Recomendar
        </button>
        <div id="ia-respuesta" style="display:none;font-size:13px;color:#333;line-height:1.6;
          background:#F5F0FB;border-radius:8px;padding:12px"></div>
      </div>
    </div>`,setTimeout(()=>Wm("qr-acc",e.codigo,160),50),td(e.fireId,d=>{i=d;const u=document.getElementById("btn-mis-pedidos");u&&(u.style.display=d.length?"flex":"none",d.length&&(u.textContent="📋 Mis pedidos ("+d.length+")"));const p=document.getElementById("mis-pedidos-sec");p&&p.style.display!=="none"&&l()}),window._togglePedidos=()=>{const d=document.getElementById("mis-pedidos-sec");d&&(d.style.display=d.style.display==="none"?"block":"none",d.style.display==="block"&&l())};async function l(){const d=document.getElementById("mis-pedidos-sec");if(!d||d.style.display==="none")return;if(!i.length){d.innerHTML='<div class="empty">Sin pedidos pagados todavía</div>';return}await gd();const u=p=>Number(p).toLocaleString("es-AR");d.innerHTML=i.map(p=>{const m=p.retiro==="envio",b=p.estado==="entregado",T=p.estado==="reembolsado"||p.estado==="cancelado",D=b?"#f5f5f5":T?"#FEE2E2":m?"#EBF4FA":"#EAF3DE",S=b?"#ddd":T?"#FCA5A5":m?"#5BA4CF":"#3B6D11",x=b?"✅ Entregado":T?"↩️ Reembolsado":m?"🚚 Envío a domicilio":"🟢 Listo para retirar",V=(p.items||[]).map(N=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid rgba(0,0,0,.08);color:#555"><span>'+N.desc+"</span><strong>$"+u(N.sub)+"</strong></div>").join(""),P="vq-"+p.fireId;return'<div style="background:'+D+";border:.5px solid "+S+';border-radius:10px;padding:14px;margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:14px;font-weight:500;color:#1A3A5C">'+p.standNombre+'</div><div style="font-size:11px;color:#888">Stand #'+p.standId+(p.voucherNum?" · VOC-"+String(p.voucherNum).padStart(3,"0"):"")+'</div></div><span style="font-size:11px;font-weight:500">'+x+"</span></div>"+V+'<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$'+u(p.total||0)+"</span></div>"+(!b&&!T&&!m?'<div style="margin-top:12px;text-align:center"><canvas id="'+P+'" style="border-radius:8px;display:block;margin:0 auto"></canvas><div style="font-size:11px;color:#888;margin-top:4px">Mostrá este QR en el stand para retirar</div></div>':"")+(m&&!b&&!T?'<div style="font-size:12px;color:#185FA5;margin-top:8px;text-align:center">Tu pedido será enviado a domicilio. Logística te lo hará llegar.</div>':"")+"</div>"}).join(""),i.forEach(p=>{if(p.retiro==="envio"||p.estado==="entregado"||p.estado==="reembolsado"||p.estado==="cancelado")return;const m=document.getElementById("vq-"+p.fireId);if(!(!m||!window.qrcode))try{const b=window.qrcode(0,"M");b.addData(p.fireId),b.make();const T=b.getModuleCount(),D=220,S=D/T;m.width=D,m.height=D;const x=m.getContext("2d");x.fillStyle="#fff",x.fillRect(0,0,D,D),x.fillStyle="#000";for(let V=0;V<T;V++)for(let P=0;P<T;P++)b.isDark(V,P)&&x.fillRect(P*S,V*S,S,S)}catch{}})}window._abrirScannerAcceso=async()=>{const d=document.getElementById("scan-overlay-acc");d&&(d.style.display="flex");const u=document.getElementById("scan-status-acc");try{await Gm(),r=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const p=document.getElementById("scan-video-acc");p.srcObject=r,s=!0,u&&(u.textContent="Buscando QR del stand...");const m=document.createElement("canvas"),b=m.getContext("2d",{willReadFrequently:!0}),T=()=>{if(s){if(p.readyState===p.HAVE_ENOUGH_DATA&&p.videoWidth>0){m.width=p.videoWidth,m.height=p.videoHeight,b.drawImage(p,0,0);const D=b.getImageData(0,0,m.width,m.height),S=window.jsQR(D.data,D.width,D.height,{inversionAttempts:"dontInvert"});if(S&&S.data){const x=S.data;window._cerrarScannerAcceso();const V=x.match(/\/stand\/(\d+)/);V&&(window.location.href="/stand/"+V[1]+"?inv="+t);return}}s&&requestAnimationFrame(T)}};p.addEventListener("loadeddata",()=>requestAnimationFrame(T))}catch{u&&(u.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerAcceso=()=>{s=!1,r&&(r.getTracks().forEach(u=>u.stop()),r=null);const d=document.getElementById("scan-overlay-acc");d&&(d.style.display="none")},window._abrirRecomendador=()=>{document.getElementById("modal-ia").style.display="flex",document.getElementById("ia-respuesta").style.display="none",document.getElementById("ia-input").value=""},window._pedirRecomendacion=async()=>{var D,S;const d=document.getElementById("ia-input").value.trim();if(!d)return;const u=document.getElementById("ia-respuesta");u.style.display="block",u.innerHTML='<span style="color:#9333EA">✨ Pensando en los mejores vinos para vos...</span>';let p=[],m=0;await new Promise(x=>{Ot.forEach(V=>{si(V.id,P=>{P.forEach(N=>p.push({stand:V.id,bodega:V.nombre,region:V.region||"",vino:N.nombre,varietal:N.varietal||"",descripcion:N.descripcion||"",precios:(N.unidades||[]).map(L=>L.u+": $"+Number(L.p).toLocaleString("es-AR")).join(", ")})),m++,m===Ot.length&&x()})})});const b=p.length>0?p.map(x=>"Stand #"+x.stand+" - "+x.bodega+" ("+x.region+"): "+x.vino+(x.varietal?" - "+x.varietal:"")+(x.descripcion?" - "+x.descripcion:"")+" | "+x.precios).join(`
`):"No hay vinos cargados aún.",T=`Sos un sommelier experto en vinos argentinos en la Feria de Vinos SUCOVI 2027 en Olivos.
El invitado se llama `+e.nombre+`.
Esta es la carta completa de vinos disponibles esta noche:

`+b+`

El invitado dice: "`+d+`"

Recomendá de 2 a 4 vinos específicos de la carta. Para cada uno mencioná el Stand #, la bodega, el vino y por qué lo recomendás. Sé breve, cálido y entusiasta. Respondé en español rioplatense.`;try{const P=((S=(D=(await(await fetch("/api/recommend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"user",content:T}]})})).json()).content)==null?void 0:D[0])==null?void 0:S.text)||"No pude generar una recomendación.";u.innerHTML=P.replace(/\n/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}catch{u.innerHTML="Error al conectar con el recomendador. Intentá de nuevo."}}}function yl(n,t,e){n.innerHTML=Bi(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
      <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${t}</h2>
      <p style="font-size:14px;color:#666">${e}</p>
      <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>
    </div>`}async function Xm(n,t,e){window.qrcode||await new Promise((d,u)=>{const p=document.createElement("script");p.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",p.onload=d,p.onerror=u,document.head.appendChild(p)});const i=document.getElementById(n);if(!i)return;const r=window.qrcode(0,"M");r.addData(t),r.make();const s=r.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let u=0;u<s;u++)r.isDark(d,u)&&l.fillRect(u*a,d*a,a,a)}window._imprimirQRStand=async(n,t,e,i)=>{window.qrcode||await new Promise((b,T)=>{const D=document.createElement("script");D.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",D.onload=b,D.onerror=T,document.head.appendChild(D)});const r=window.qrcode(0,"M");r.addData(i),r.make();const s=r.getModuleCount(),a=400,l=a/s,d=document.createElement("canvas");d.width=a,d.height=a;const u=d.getContext("2d");u.fillStyle="#fff",u.fillRect(0,0,a,a),u.fillStyle="#000";for(let b=0;b<s;b++)for(let T=0;T<s;T++)r.isDark(b,T)&&u.fillRect(T*l,b*l,l,l);const p=d.toDataURL("image/png"),m=window.open("","_blank");m.document.write(`<!DOCTYPE html><html><head>
    <meta charset="utf-8">
    <title>QR Stand #${n} - ${t}</title>
    <style>
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family: system-ui, sans-serif; display:flex; align-items:center;
        justify-content:center; min-height:100vh; background:#fff; }
      .card { border: 3px solid #1A3A5C; border-radius: 16px; padding: 32px;
        text-align: center; max-width: 480px; width: 100%; }
      .evento { font-size: 12px; color: #888; letter-spacing: .1em; margin-bottom: 16px; }
      .stand-num { font-size: 16px; color: #5BA4CF; font-weight: 500; margin-bottom: 4px; }
      .stand-nombre { font-size: 32px; font-weight: 700; color: #1A3A5C; margin-bottom: 4px; }
      .stand-region { font-size: 14px; color: #888; margin-bottom: 24px; }
      .qr-img { width: 320px; height: 320px; margin: 0 auto 20px; display: block; }
      .instruccion { font-size: 14px; color: #444; line-height: 1.5; }
      @media print { body { min-height: auto; } }
    </style>
  </head><body>
    <div class="card">
      <div class="evento">SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN</div>
      <div class="stand-num">Stand #${n}</div>
      <div class="stand-nombre">${t}</div>
      <div class="stand-region">${e}</div>
      <img src="${p}" class="qr-img" alt="QR Stand">
      <div class="instruccion">
        Escaneá este código con tu celular<br>para ver la carta y hacer tu pedido
      </div>
    </div>
    <script>setTimeout(() => { window.print() }, 500)<\/script>
  </body></html>`),m.document.close()};function vl(n){Kt();const t=window.location.origin;n.innerHTML=zt({title:"🍷 SUCOVI 2027",sub:"Panel de organización — Stands"})+`
    <div class="wrap">
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>Vista cliente:</strong> para cargar pedidos de invitados.<br>
        <strong>Panel:</strong> para ver pedidos y marcar entregas con QR.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${Ot.map(e=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${e.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${e.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${e.region}</div>
            <canvas id="org-qr-${e.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${t}/stand/${e.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <a href="${t}/panel/${e.id}?key=${e.key}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none">Panel stand</a>
              <button class="btn" style="font-size:11px;padding:5px;color:#6B1C1C;border-color:#6B1C1C;width:100%"
                onclick="window._imprimirQRStand(${e.id},'${e.nombre}','${e.region}','${t}/stand/${e.id}')">
                🖨️ Imprimir QR
              </button>
            </div>
          </div>`).join("")}
      </div>
    </div>`,Ot.forEach(e=>setTimeout(()=>Xm("org-qr-"+e.id,t+"/stand/"+e.id,110),50))}const Gr=n=>Number(n).toLocaleString("es-AR");function Jm(n,t){if(Kt(),!t||t.estado==="invalidado"){n.innerHTML=`
      <div class="hdr"><div><h1>🛒 Carrito</h1></div></div>
      <div class="gold"></div>
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <p style="font-size:14px;color:#666">Necesitás tu QR de acreditación para ver el carrito.</p>
      </div>`;return}let e=[];n.innerHTML=`
    ${zt({title:"🛒 Mi carrito",sub:t.nombre+" "+t.apellido+" · "+t.codigo,backHref:"/acceso?inv="+t.token,backLabel:"← Mi QR",backStyle:"background:#A32D2D;color:#fff;border-color:#A32D2D"})}
    <div style="max-width:480px;margin:0 auto;padding:14px" id="carrito-body">
      <div class="empty">Cargando carrito...</div>
    </div>`,ps(t.fireId,r=>{e=r,i()});function i(){const r=document.getElementById("carrito-body");if(!r)return;if(!e.length||!e.some(a=>{var l;return(l=a.items)==null?void 0:l.length})){r.innerHTML=`
        <div class="empty" style="padding:48px 20px">
          <div style="font-size:48px;margin-bottom:12px">🛒</div>
          <p style="font-size:15px;font-weight:500;margin-bottom:8px">Tu carrito está vacío</p>
          <p style="font-size:13px;color:#aaa">
            Escaneá el QR de cualquier stand para agregar vinos.
          </p>
        </div>`;return}const s=e.reduce((a,l)=>a+(l.items||[]).reduce((d,u)=>d+(u.sub||0),0),0);r.innerHTML=`
      <div style="background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;
        padding:9px 12px;font-size:12px;color:#6B4000;margin-bottom:14px">
        Revisá tu pedido antes de ir a caja. Podés quitar ítems si es necesario.
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
                <span style="font-size:13px;font-weight:500">$${Gr(l.sub)}</span>
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

            </div>
          </div>

          <div style="display:flex;justify-content:space-between;font-size:13px;
            font-weight:500;margin-top:6px;padding-top:6px;border-top:.5px solid #e0d5c8">
            <span>Subtotal ${a.standNombre}</span>
            <span>$${Gr((a.items||[]).reduce((l,d)=>l+(d.sub||0),0))}</span>
          </div>
        </div>`).join("")}

      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>Total</span>
          <span style="color:#6B1C1C">$${Gr(s)}</span>
        </div>
        <p style="font-size:12px;color:#888;margin-top:6px">
          Llevá este carrito a caja para pagar. El cajero escanea tu código y ve todo.
        </p>
      </div>

      <div style="background:#E6F1FB;border:.5px solid #185FA5;border-radius:8px;
        padding:10px 14px;font-size:12px;color:#185FA5;margin-bottom:14px;text-align:center">
        📍 Tu código de caja: <strong style="font-size:16px;letter-spacing:.1em">${t.codigo}</strong>
      </div>

      <div id="carrito-msg" style="font-size:12px;text-align:center;min-height:16px;margin-bottom:8px"></div>`}window._quitarCarrito=async(r,s)=>{const a=e.find(l=>l.standDocId===r);a&&await Gi(t.fireId,Number(a.standId),s)},window._cambiarRetiro=async(r,s,a)=>{await hs(t.fireId,Number(s),a)}}async function yd(){const t=window.location.pathname.replace("/Sucovi2027","")||"/",e=new URLSearchParams(window.location.search),i=document.getElementById("app"),r=t.match(/^\/stand\/(\d+)$/);if(r){const l=parseInt(r[1]),d=Ot.find(m=>m.id===l);if(!d){i.innerHTML=Ue("Stand no encontrado");return}const u=e.get("inv"),p=u?await Gn(u):null;return zm(i,d,p)}const s=t.match(/^\/panel\/(\d+)$/);if(s){const l=Ot.find(u=>u.id===parseInt(s[1]));if(!l){i.innerHTML=Ue("Panel no encontrado");return}const d=e.get("key");if(d&&d!==l.key){i.innerHTML=Ue("Acceso no autorizado");return}if(!d){i.innerHTML=Ue("Link inválido — usá el link completo que te enviaron");return}return qm(i,l)}const a=t.match(/^\/bodega\/(\d+)\/vinos$/);if(a){const l=Ot.find(u=>u.id===parseInt(a[1]));if(!l){i.innerHTML=Ue("Bodega no encontrada");return}const d=e.get("key");if(d&&d!==l.key){i.innerHTML=Ue("Acceso no autorizado");return}return md(i,l)}if(t==="/carrito"){const l=e.get("inv"),d=l?await Gn(l):null;return Jm(i,d)}if(t==="/acceso")return Km(i,e.get("inv"));if(t==="/org"){vl(i);return}if(t==="/registro"){vl(i);return}return t==="/caja"?Om(i):t==="/puerta"?$m(i):t==="/logistica"?Qm(i):fd(i)}function Ue(n){return`<div style="padding:60px;text-align:center;color:#aaa;font-size:14px">${n}</div>`}yd();window.addEventListener("popstate",yd);(function(){var n=window.location.search.match(/[?&]p=([^&]+)/);if(n){var t="/Sucovi2027",e=decodeURIComponent(n[1].replace(/~and~/g,"&"));window.history.replaceState(null,null,t+"/"+e)}})();
