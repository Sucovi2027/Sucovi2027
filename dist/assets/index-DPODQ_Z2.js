(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var Ys={};/**
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
 */const il=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},Pu=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const r=n[e++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[e++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[e++],a=n[e++],c=n[e++],u=((r&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],a=n[e++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return t.join("")},rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],a=r+1<n.length,c=a?n[r+1]:0,u=r+2<n.length,h=u?n[r+2]:0,f=s>>2,g=(s&3)<<4|c>>4;let y=(c&15)<<2|h>>6,C=h&63;u||(C=64,a||(y=64)),i.push(e[f],e[g],e[y],e[C])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(il(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Pu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=e[n.charAt(r++)],c=r<n.length?e[n.charAt(r)]:0;++r;const h=r<n.length?e[n.charAt(r)]:64;++r;const g=r<n.length?e[n.charAt(r)]:64;if(++r,s==null||c==null||h==null||g==null)throw new Su;const y=s<<2|c>>4;if(i.push(y),h!==64){const C=c<<4&240|h>>2;if(i.push(C),g!==64){const N=h<<6&192|g;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Su extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vu=function(n){const t=il(n);return rl.encodeByteArray(t,!0)},Ei=function(n){return Vu(n).replace(/\./g,"")},Du=function(n){try{return rl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Nu=()=>ku().__FIREBASE_DEFAULTS__,Bu=()=>{if(typeof process>"u"||typeof Ys>"u")return;const n=Ys.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Lu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Du(n[1]);return t&&JSON.parse(t)},so=()=>{try{return Nu()||Bu()||Lu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mu=n=>{var t,e;return(e=(t=so())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ou=n=>{const t=Mu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},ol=()=>{var n;return(n=so())===null||n===void 0?void 0:n.config};/**
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
 */function zu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ei(JSON.stringify(e)),Ei(JSON.stringify(a)),""].join(".")}/**
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
 */function ju(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qu(){var n;const t=(n=so())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hu(){return!qu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uu(){try{return typeof indexedDB=="object"}catch{return!1}}function Wu(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const Qu="FirebaseError";class We extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Qu,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sl.prototype.create)}}class sl{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],a=s?$u(s,i):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new We(r,c,i)}}function $u(n,t){return n.replace(Gu,(e,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const Gu=/\{\$([^}]+)}/g;function Lr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const r of e){if(!i.includes(r))return!1;const s=n[r],a=t[r];if(ta(s)&&ta(a)){if(!Lr(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!e.includes(r))return!1;return!0}function ta(n){return n!==null&&typeof n=="object"}/**
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
 */class Ku{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Fu;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ju(t))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=me){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=me){return this.instances.has(t)}getOptions(t=me){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);i===c&&a.resolve(r)}return r}onInit(t,e){var i;const r=this.normalizeInstanceIdentifier(e),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&t(a,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const r of i)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Xu(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=me){return this.component?this.component.multipleInstances?t:me:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xu(n){return n===me?void 0:n}function Ju(n){return n.instantiationMode==="EAGER"}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Yu={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},td=$.INFO,ed={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},nd=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),r=ed[t];if(r)console[r](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class al{constructor(t){this.name=t,this._logLevel=td,this._logHandler=nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const id=(n,t)=>t.some(e=>n instanceof e);let ea,na;function rd(){return ea||(ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function od(){return na||(na=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ll=new WeakMap,Mr=new WeakMap,cl=new WeakMap,wr=new WeakMap,ao=new WeakMap;function sd(n){const t=new Promise((e,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(ie(n.result)),r()},a=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ll.set(e,n)}).catch(()=>{}),ao.set(t,n),t}function ad(n){if(Mr.has(n))return;const t=new Promise((e,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),r()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Mr.set(n,t)}let Or={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Mr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||cl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ie(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ld(n){Or=n(Or)}function cd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(xr(this),t,...e);return cl.set(i,t.sort?t.sort():[t]),ie(i)}:od().includes(n)?function(...t){return n.apply(xr(this),t),ie(ll.get(this))}:function(...t){return ie(n.apply(xr(this),t))}}function ud(n){return typeof n=="function"?cd(n):(n instanceof IDBTransaction&&ad(n),id(n,rd())?new Proxy(n,Or):n)}function ie(n){if(n instanceof IDBRequest)return sd(n);if(wr.has(n))return wr.get(n);const t=ud(n);return t!==n&&(wr.set(n,t),ao.set(t,n)),t}const xr=n=>ao.get(n);function dd(n,t,{blocked:e,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(n,t),c=ie(a);return i&&a.addEventListener("upgradeneeded",u=>{i(ie(a.result),u.oldVersion,u.newVersion,ie(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),r&&u.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const hd=["get","getKey","getAll","getAllKeys","count"],pd=["put","add","delete","clear"],Tr=new Map;function ia(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Tr.get(t))return Tr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,r=pd.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(r||hd.includes(e)))return;const s=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(c.shift())),(await Promise.all([h[e](...c),r&&u.done]))[0]};return Tr.set(t,s),s}ld(n=>({...n,get:(t,e,i)=>ia(t,e)||n.get(t,e,i),has:(t,e)=>!!ia(t,e)||n.has(t,e)}));/**
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
 */class fd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(md(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function md(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fr="@firebase/app",ra="0.10.13";/**
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
 */const Gt=new al("@firebase/app"),gd="@firebase/app-compat",yd="@firebase/analytics-compat",vd="@firebase/analytics",Ad="@firebase/app-check-compat",_d="@firebase/app-check",bd="@firebase/auth",Ed="@firebase/auth-compat",Id="@firebase/database",wd="@firebase/data-connect",xd="@firebase/database-compat",Td="@firebase/functions",Rd="@firebase/functions-compat",Cd="@firebase/installations",Pd="@firebase/installations-compat",Sd="@firebase/messaging",Vd="@firebase/messaging-compat",Dd="@firebase/performance",kd="@firebase/performance-compat",Nd="@firebase/remote-config",Bd="@firebase/remote-config-compat",Ld="@firebase/storage",Md="@firebase/storage-compat",Od="@firebase/firestore",Fd="@firebase/vertexai-preview",zd="@firebase/firestore-compat",jd="firebase",qd="10.14.1";/**
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
 */const zr="[DEFAULT]",Hd={[Fr]:"fire-core",[gd]:"fire-core-compat",[vd]:"fire-analytics",[yd]:"fire-analytics-compat",[_d]:"fire-app-check",[Ad]:"fire-app-check-compat",[bd]:"fire-auth",[Ed]:"fire-auth-compat",[Id]:"fire-rtdb",[wd]:"fire-data-connect",[xd]:"fire-rtdb-compat",[Td]:"fire-fn",[Rd]:"fire-fn-compat",[Cd]:"fire-iid",[Pd]:"fire-iid-compat",[Sd]:"fire-fcm",[Vd]:"fire-fcm-compat",[Dd]:"fire-perf",[kd]:"fire-perf-compat",[Nd]:"fire-rc",[Bd]:"fire-rc-compat",[Ld]:"fire-gcs",[Md]:"fire-gcs-compat",[Od]:"fire-fst",[zd]:"fire-fst-compat",[Fd]:"fire-vertex","fire-js":"fire-js",[jd]:"fire-js-all"};/**
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
 */const Ii=new Map,Ud=new Map,jr=new Map;function oa(n,t){try{n.container.addComponent(t)}catch(e){Gt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function wi(n){const t=n.name;if(jr.has(t))return Gt.debug(`There were multiple attempts to register component ${t}.`),!1;jr.set(t,n);for(const e of Ii.values())oa(e,n);for(const e of Ud.values())oa(e,n);return!0}function Wd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Gd=qd;function ul(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:zr,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw re.create("bad-app-name",{appName:String(r)});if(e||(e=ol()),!e)throw re.create("no-options");const s=Ii.get(r);if(s){if(Lr(e,s.options)&&Lr(i,s.config))return s;throw re.create("duplicate-app",{appName:r})}const a=new Zu(r);for(const u of jr.values())a.addComponent(u);const c=new $d(e,i,a);return Ii.set(r,c),c}function Kd(n=zr){const t=Ii.get(n);if(!t&&n===zr&&ol())return ul();if(!t)throw re.create("no-app",{appName:n});return t}function Le(n,t,e){var i;let r=(i=Hd[n])!==null&&i!==void 0?i:n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const c=[`Unable to register library "${r}" with version "${t}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gt.warn(c.join(" "));return}wi(new In(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Xd="firebase-heartbeat-database",Jd=1,wn="firebase-heartbeat-store";let Rr=null;function dl(){return Rr||(Rr=dd(Xd,Jd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(wn)}catch(e){console.warn(e)}}}}).catch(n=>{throw re.create("idb-open",{originalErrorMessage:n.message})})),Rr}async function Zd(n){try{const e=(await dl()).transaction(wn),i=await e.objectStore(wn).get(hl(n));return await e.done,i}catch(t){if(t instanceof We)Gt.warn(t.message);else{const e=re.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gt.warn(e.message)}}}async function sa(n,t){try{const i=(await dl()).transaction(wn,"readwrite");await i.objectStore(wn).put(t,hl(n)),await i.done}catch(e){if(e instanceof We)Gt.warn(e.message);else{const i=re.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(i.message)}}}function hl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yd=1024,th=30*24*60*60*1e3;class eh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ih(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=aa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=th}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Gt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=aa(),{heartbeatsToSend:i,unsentEntries:r}=nh(this._heartbeatsCache.heartbeats),s=Ei(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Gt.warn(e),""}}}function aa(){return new Date().toISOString().substring(0,10)}function nh(n,t=Yd){const e=[];let i=n.slice();for(const r of n){const s=e.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),la(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),la(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class ih{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uu()?Wu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Zd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return sa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return sa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function la(n){return Ei(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function rh(n){wi(new In("platform-logger",t=>new fd(t),"PRIVATE")),wi(new In("heartbeat",t=>new eh(t),"PRIVATE")),Le(Fr,ra,n),Le(Fr,ra,"esm2017"),Le("fire-js","")}rh("");var oh="firebase",sh="10.14.1";/**
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
 */Le(oh,sh,"app");var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ve,pl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(b,m){function _(){}_.prototype=m.prototype,b.D=m.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(E,I,T){for(var A=Array(arguments.length-2),St=2;St<arguments.length;St++)A[St-2]=arguments[St];return m.prototype[I].apply(E,A)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,m,_){_||(_=0);var E=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)E[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)E[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=b.g[0],_=b.g[1],I=b.g[2];var T=b.g[3],A=m+(T^_&(I^T))+E[0]+3614090360&4294967295;m=_+(A<<7&4294967295|A>>>25),A=T+(I^m&(_^I))+E[1]+3905402710&4294967295,T=m+(A<<12&4294967295|A>>>20),A=I+(_^T&(m^_))+E[2]+606105819&4294967295,I=T+(A<<17&4294967295|A>>>15),A=_+(m^I&(T^m))+E[3]+3250441966&4294967295,_=I+(A<<22&4294967295|A>>>10),A=m+(T^_&(I^T))+E[4]+4118548399&4294967295,m=_+(A<<7&4294967295|A>>>25),A=T+(I^m&(_^I))+E[5]+1200080426&4294967295,T=m+(A<<12&4294967295|A>>>20),A=I+(_^T&(m^_))+E[6]+2821735955&4294967295,I=T+(A<<17&4294967295|A>>>15),A=_+(m^I&(T^m))+E[7]+4249261313&4294967295,_=I+(A<<22&4294967295|A>>>10),A=m+(T^_&(I^T))+E[8]+1770035416&4294967295,m=_+(A<<7&4294967295|A>>>25),A=T+(I^m&(_^I))+E[9]+2336552879&4294967295,T=m+(A<<12&4294967295|A>>>20),A=I+(_^T&(m^_))+E[10]+4294925233&4294967295,I=T+(A<<17&4294967295|A>>>15),A=_+(m^I&(T^m))+E[11]+2304563134&4294967295,_=I+(A<<22&4294967295|A>>>10),A=m+(T^_&(I^T))+E[12]+1804603682&4294967295,m=_+(A<<7&4294967295|A>>>25),A=T+(I^m&(_^I))+E[13]+4254626195&4294967295,T=m+(A<<12&4294967295|A>>>20),A=I+(_^T&(m^_))+E[14]+2792965006&4294967295,I=T+(A<<17&4294967295|A>>>15),A=_+(m^I&(T^m))+E[15]+1236535329&4294967295,_=I+(A<<22&4294967295|A>>>10),A=m+(I^T&(_^I))+E[1]+4129170786&4294967295,m=_+(A<<5&4294967295|A>>>27),A=T+(_^I&(m^_))+E[6]+3225465664&4294967295,T=m+(A<<9&4294967295|A>>>23),A=I+(m^_&(T^m))+E[11]+643717713&4294967295,I=T+(A<<14&4294967295|A>>>18),A=_+(T^m&(I^T))+E[0]+3921069994&4294967295,_=I+(A<<20&4294967295|A>>>12),A=m+(I^T&(_^I))+E[5]+3593408605&4294967295,m=_+(A<<5&4294967295|A>>>27),A=T+(_^I&(m^_))+E[10]+38016083&4294967295,T=m+(A<<9&4294967295|A>>>23),A=I+(m^_&(T^m))+E[15]+3634488961&4294967295,I=T+(A<<14&4294967295|A>>>18),A=_+(T^m&(I^T))+E[4]+3889429448&4294967295,_=I+(A<<20&4294967295|A>>>12),A=m+(I^T&(_^I))+E[9]+568446438&4294967295,m=_+(A<<5&4294967295|A>>>27),A=T+(_^I&(m^_))+E[14]+3275163606&4294967295,T=m+(A<<9&4294967295|A>>>23),A=I+(m^_&(T^m))+E[3]+4107603335&4294967295,I=T+(A<<14&4294967295|A>>>18),A=_+(T^m&(I^T))+E[8]+1163531501&4294967295,_=I+(A<<20&4294967295|A>>>12),A=m+(I^T&(_^I))+E[13]+2850285829&4294967295,m=_+(A<<5&4294967295|A>>>27),A=T+(_^I&(m^_))+E[2]+4243563512&4294967295,T=m+(A<<9&4294967295|A>>>23),A=I+(m^_&(T^m))+E[7]+1735328473&4294967295,I=T+(A<<14&4294967295|A>>>18),A=_+(T^m&(I^T))+E[12]+2368359562&4294967295,_=I+(A<<20&4294967295|A>>>12),A=m+(_^I^T)+E[5]+4294588738&4294967295,m=_+(A<<4&4294967295|A>>>28),A=T+(m^_^I)+E[8]+2272392833&4294967295,T=m+(A<<11&4294967295|A>>>21),A=I+(T^m^_)+E[11]+1839030562&4294967295,I=T+(A<<16&4294967295|A>>>16),A=_+(I^T^m)+E[14]+4259657740&4294967295,_=I+(A<<23&4294967295|A>>>9),A=m+(_^I^T)+E[1]+2763975236&4294967295,m=_+(A<<4&4294967295|A>>>28),A=T+(m^_^I)+E[4]+1272893353&4294967295,T=m+(A<<11&4294967295|A>>>21),A=I+(T^m^_)+E[7]+4139469664&4294967295,I=T+(A<<16&4294967295|A>>>16),A=_+(I^T^m)+E[10]+3200236656&4294967295,_=I+(A<<23&4294967295|A>>>9),A=m+(_^I^T)+E[13]+681279174&4294967295,m=_+(A<<4&4294967295|A>>>28),A=T+(m^_^I)+E[0]+3936430074&4294967295,T=m+(A<<11&4294967295|A>>>21),A=I+(T^m^_)+E[3]+3572445317&4294967295,I=T+(A<<16&4294967295|A>>>16),A=_+(I^T^m)+E[6]+76029189&4294967295,_=I+(A<<23&4294967295|A>>>9),A=m+(_^I^T)+E[9]+3654602809&4294967295,m=_+(A<<4&4294967295|A>>>28),A=T+(m^_^I)+E[12]+3873151461&4294967295,T=m+(A<<11&4294967295|A>>>21),A=I+(T^m^_)+E[15]+530742520&4294967295,I=T+(A<<16&4294967295|A>>>16),A=_+(I^T^m)+E[2]+3299628645&4294967295,_=I+(A<<23&4294967295|A>>>9),A=m+(I^(_|~T))+E[0]+4096336452&4294967295,m=_+(A<<6&4294967295|A>>>26),A=T+(_^(m|~I))+E[7]+1126891415&4294967295,T=m+(A<<10&4294967295|A>>>22),A=I+(m^(T|~_))+E[14]+2878612391&4294967295,I=T+(A<<15&4294967295|A>>>17),A=_+(T^(I|~m))+E[5]+4237533241&4294967295,_=I+(A<<21&4294967295|A>>>11),A=m+(I^(_|~T))+E[12]+1700485571&4294967295,m=_+(A<<6&4294967295|A>>>26),A=T+(_^(m|~I))+E[3]+2399980690&4294967295,T=m+(A<<10&4294967295|A>>>22),A=I+(m^(T|~_))+E[10]+4293915773&4294967295,I=T+(A<<15&4294967295|A>>>17),A=_+(T^(I|~m))+E[1]+2240044497&4294967295,_=I+(A<<21&4294967295|A>>>11),A=m+(I^(_|~T))+E[8]+1873313359&4294967295,m=_+(A<<6&4294967295|A>>>26),A=T+(_^(m|~I))+E[15]+4264355552&4294967295,T=m+(A<<10&4294967295|A>>>22),A=I+(m^(T|~_))+E[6]+2734768916&4294967295,I=T+(A<<15&4294967295|A>>>17),A=_+(T^(I|~m))+E[13]+1309151649&4294967295,_=I+(A<<21&4294967295|A>>>11),A=m+(I^(_|~T))+E[4]+4149444226&4294967295,m=_+(A<<6&4294967295|A>>>26),A=T+(_^(m|~I))+E[11]+3174756917&4294967295,T=m+(A<<10&4294967295|A>>>22),A=I+(m^(T|~_))+E[2]+718787259&4294967295,I=T+(A<<15&4294967295|A>>>17),A=_+(T^(I|~m))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+m&4294967295,b.g[1]=b.g[1]+(I+(A<<21&4294967295|A>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+T&4294967295}i.prototype.u=function(b,m){m===void 0&&(m=b.length);for(var _=m-this.blockSize,E=this.B,I=this.h,T=0;T<m;){if(I==0)for(;T<=_;)r(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<m;)if(E[I++]=b.charCodeAt(T++),I==this.blockSize){r(this,E),I=0;break}}else for(;T<m;)if(E[I++]=b[T++],I==this.blockSize){r(this,E),I=0;break}}this.h=I,this.o+=m},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var m=1;m<b.length-8;++m)b[m]=0;var _=8*this.o;for(m=b.length-8;m<b.length;++m)b[m]=_&255,_/=256;for(this.u(b),b=Array(16),m=_=0;4>m;++m)for(var E=0;32>E;E+=8)b[_++]=this.g[m]>>>E&255;return b};function s(b,m){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=m(b)}function a(b,m){this.h=m;for(var _=[],E=!0,I=b.length-1;0<=I;I--){var T=b[I]|0;E&&T==m||(_[I]=T,E=!1)}this.g=_}var c={};function u(b){return-128<=b&&128>b?s(b,function(m){return new a([m|0],0>m?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return g;if(0>b)return v(h(-b));for(var m=[],_=1,E=0;b>=_;E++)m[E]=b/_|0,_*=4294967296;return new a(m,0)}function f(b,m){if(b.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(b.charAt(0)=="-")return v(f(b.substring(1),m));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),E=g,I=0;I<b.length;I+=8){var T=Math.min(8,b.length-I),A=parseInt(b.substring(I,I+T),m);8>T?(T=h(Math.pow(m,T)),E=E.j(T).add(h(A))):(E=E.j(_),E=E.add(h(A)))}return E}var g=u(0),y=u(1),C=u(16777216);n=a.prototype,n.m=function(){if(R(this))return-v(this).m();for(var b=0,m=1,_=0;_<this.g.length;_++){var E=this.i(_);b+=(0<=E?E:4294967296+E)*m,m*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(R(this))return"-"+v(this).toString(b);for(var m=h(Math.pow(b,6)),_=this,E="";;){var I=V(_,m).g;_=x(_,I.j(m));var T=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=I,N(_))return T+E;for(;6>T.length;)T="0"+T;E=T+E}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(var m=0;m<b.g.length;m++)if(b.g[m]!=0)return!1;return!0}function R(b){return b.h==-1}n.l=function(b){return b=x(this,b),R(b)?-1:N(b)?0:1};function v(b){for(var m=b.g.length,_=[],E=0;E<m;E++)_[E]=~b.g[E];return new a(_,~b.h).add(y)}n.abs=function(){return R(this)?v(this):this},n.add=function(b){for(var m=Math.max(this.g.length,b.g.length),_=[],E=0,I=0;I<=m;I++){var T=E+(this.i(I)&65535)+(b.i(I)&65535),A=(T>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);E=A>>>16,T&=65535,A&=65535,_[I]=A<<16|T}return new a(_,_[_.length-1]&-2147483648?-1:0)};function x(b,m){return b.add(v(m))}n.j=function(b){if(N(this)||N(b))return g;if(R(this))return R(b)?v(this).j(v(b)):v(v(this).j(b));if(R(b))return v(this.j(v(b)));if(0>this.l(C)&&0>b.l(C))return h(this.m()*b.m());for(var m=this.g.length+b.g.length,_=[],E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<b.g.length;I++){var T=this.i(E)>>>16,A=this.i(E)&65535,St=b.i(I)>>>16,Vt=b.i(I)&65535;_[2*E+2*I]+=A*Vt,P(_,2*E+2*I),_[2*E+2*I+1]+=T*Vt,P(_,2*E+2*I+1),_[2*E+2*I+1]+=A*St,P(_,2*E+2*I+1),_[2*E+2*I+2]+=T*St,P(_,2*E+2*I+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function P(b,m){for(;(b[m]&65535)!=b[m];)b[m+1]+=b[m]>>>16,b[m]&=65535,m++}function L(b,m){this.g=b,this.h=m}function V(b,m){if(N(m))throw Error("division by zero");if(N(b))return new L(g,g);if(R(b))return m=V(v(b),m),new L(v(m.g),v(m.h));if(R(m))return m=V(b,v(m)),new L(v(m.g),m.h);if(30<b.g.length){if(R(b)||R(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,E=m;0>=E.l(b);)_=M(_),E=M(E);var I=D(_,1),T=D(E,1);for(E=D(E,2),_=D(_,2);!N(E);){var A=T.add(E);0>=A.l(b)&&(I=I.add(_),T=A),E=D(E,1),_=D(_,1)}return m=x(b,I.j(m)),new L(I,m)}for(I=g;0<=b.l(m);){for(_=Math.max(1,Math.floor(b.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),T=h(_),A=T.j(m);R(A)||0<A.l(b);)_-=E,T=h(_),A=T.j(m);N(T)&&(T=y),I=I.add(T),b=x(b,A)}return new L(I,b)}n.A=function(b){return V(this,b).h},n.and=function(b){for(var m=Math.max(this.g.length,b.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)&b.i(E);return new a(_,this.h&b.h)},n.or=function(b){for(var m=Math.max(this.g.length,b.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)|b.i(E);return new a(_,this.h|b.h)},n.xor=function(b){for(var m=Math.max(this.g.length,b.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)^b.i(E);return new a(_,this.h^b.h)};function M(b){for(var m=b.g.length+1,_=[],E=0;E<m;E++)_[E]=b.i(E)<<1|b.i(E-1)>>>31;return new a(_,b.h)}function D(b,m){var _=m>>5;m%=32;for(var E=b.g.length-_,I=[],T=0;T<E;T++)I[T]=0<m?b.i(T+_)>>>m|b.i(T+_+1)<<32-m:b.i(T+_);return new a(I,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,pl=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,ve=a}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});var hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fl,mn,ml,yi,qr,gl,yl,vl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof hi=="object"&&hi];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=e(this);function r(o,l){if(l)t:{var d=i;o=o.split(".");for(var p=0;p<o.length-1;p++){var w=o[p];if(!(w in d))break t;d=d[w]}o=o[o.length-1],p=d[o],l=l(p),l!=p&&l!=null&&t(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,p=!1,w={next:function(){if(!p&&d<o.length){var S=d++;return{value:l(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}r("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function g(o,l,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,p),o.apply(l,w)}}return function(){return o.apply(l,arguments)}}function y(o,l,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function C(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function N(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,w,S){for(var O=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)O[Z-2]=arguments[Z];return l.prototype[w].apply(p,O)}}function R(o){const l=o.length;if(0<l){const d=Array(l);for(let p=0;p<l;p++)d[p]=o[p];return d}return[]}function v(o,l){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const w=o.length||0,S=p.length||0;o.length=w+S;for(let O=0;O<S;O++)o[w+O]=p[O]}else o.push(p)}}class x{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function P(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function V(o){return V[" "](o),o}V[" "]=function(){};var M=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function D(o,l,d){for(const p in o)l.call(d,o[p],p,o)}function b(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function m(o){const l={};for(const d in o)l[d]=o[d];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let d,p;for(let w=1;w<arguments.length;w++){p=arguments[w];for(d in p)o[d]=p[d];for(let S=0;S<_.length;S++)d=_[S],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function T(o){c.setTimeout(()=>{throw o},0)}function A(){var o=Ze;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class St{constructor(){this.h=this.g=null}add(l,d){const p=Vt.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Vt=new x(()=>new xe,o=>o.reset());class xe{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ut,Jt=!1,Ze=new St,$n=()=>{const o=c.Promise.resolve(void 0);Ut=()=>{o.then(Te)}};var Te=()=>{for(var o;o=A();){try{o.h.call(o.g)}catch(d){T(d)}var l=Vt;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Jt=!1};function Dt(){this.s=this.s,this.C=this.C}Dt.prototype.s=!1,Dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var Rt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function Bt(o,l){if(J.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(M){t:{try{V(l.nodeName);var w=!0;break t}catch{}w=!1}w||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ye[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Bt.aa.h.call(this)}}N(Bt,J);var Ye={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),Zc=0;function Yc(o,l,d,p,w){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=w,this.key=++Zc,this.da=this.fa=!1}function Gn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Kn(o){this.src=o,this.g={},this.h=0}Kn.prototype.add=function(o,l,d,p,w){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var O=nr(o,l,p,w);return-1<O?(l=o[O],d||(l.fa=!1)):(l=new Yc(l,this.src,S,!!p,w),l.fa=d,o.push(l)),l};function er(o,l){var d=l.type;if(d in o.g){var p=o.g[d],w=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=w)&&Array.prototype.splice.call(p,w,1),S&&(Gn(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function nr(o,l,d,p){for(var w=0;w<o.length;++w){var S=o[w];if(!S.da&&S.listener==l&&S.capture==!!d&&S.ha==p)return w}return-1}var ir="closure_lm_"+(1e6*Math.random()|0),rr={};function ts(o,l,d,p,w){if(Array.isArray(l)){for(var S=0;S<l.length;S++)ts(o,l[S],d,p,w);return null}return d=is(d),o&&o[Zt]?o.K(l,d,h(p)?!!p.capture:!1,w):tu(o,l,d,!1,p,w)}function tu(o,l,d,p,w,S){if(!l)throw Error("Invalid event type");var O=h(w)?!!w.capture:!!w,Z=sr(o);if(Z||(o[ir]=Z=new Kn(o)),d=Z.add(l,d,p,O,S),d.proxy)return d;if(p=eu(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Rt||(w=O),w===void 0&&(w=!1),o.addEventListener(l.toString(),p,w);else if(o.attachEvent)o.attachEvent(ns(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function eu(){function o(d){return l.call(o.src,o.listener,d)}const l=nu;return o}function es(o,l,d,p,w){if(Array.isArray(l))for(var S=0;S<l.length;S++)es(o,l[S],d,p,w);else p=h(p)?!!p.capture:!!p,d=is(d),o&&o[Zt]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],d=nr(S,d,p,w),-1<d&&(Gn(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=sr(o))&&(l=o.g[l.toString()],o=-1,l&&(o=nr(l,d,p,w)),(d=-1<o?l[o]:null)&&or(d))}function or(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Zt])er(l.i,o);else{var d=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(d,p,o.capture):l.detachEvent?l.detachEvent(ns(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=sr(l))?(er(d,o),d.h==0&&(d.src=null,l[ir]=null)):Gn(o)}}}function ns(o){return o in rr?rr[o]:rr[o]="on"+o}function nu(o,l){if(o.da)o=!0;else{l=new Bt(l,this);var d=o.listener,p=o.ha||o.src;o.fa&&or(o),o=d.call(p,l)}return o}function sr(o){return o=o[ir],o instanceof Kn?o:null}var ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function is(o){return typeof o=="function"?o:(o[ar]||(o[ar]=function(l){return o.handleEvent(l)}),o[ar])}function ft(){Dt.call(this),this.i=new Kn(this),this.M=this,this.F=null}N(ft,Dt),ft.prototype[Zt]=!0,ft.prototype.removeEventListener=function(o,l,d,p){es(this,o,l,d,p)};function bt(o,l){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new J(l,o);else if(l instanceof J)l.target=l.target||o;else{var w=l;l=new J(p,o),E(l,w)}if(w=!0,d)for(var S=d.length-1;0<=S;S--){var O=l.g=d[S];w=Xn(O,p,!0,l)&&w}if(O=l.g=o,w=Xn(O,p,!0,l)&&w,w=Xn(O,p,!1,l)&&w,d)for(S=0;S<d.length;S++)O=l.g=d[S],w=Xn(O,p,!1,l)&&w}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],p=0;p<d.length;p++)Gn(d[p]);delete o.g[l],o.h--}}this.F=null},ft.prototype.K=function(o,l,d,p){return this.i.add(String(o),l,!1,d,p)},ft.prototype.L=function(o,l,d,p){return this.i.add(String(o),l,!0,d,p)};function Xn(o,l,d,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,S=0;S<l.length;++S){var O=l[S];if(O&&!O.da&&O.capture==d){var Z=O.listener,ct=O.ha||O.src;O.fa&&er(o.i,O),w=Z.call(ct,p)!==!1&&w}}return w&&!p.defaultPrevented}function rs(o,l,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function os(o){o.g=rs(()=>{o.g=null,o.i&&(o.i=!1,os(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class iu extends Dt{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:os(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tn(o){Dt.call(this),this.h=o,this.g={}}N(tn,Dt);var ss=[];function as(o){D(o.g,function(l,d){this.g.hasOwnProperty(d)&&or(l)},o),o.g={}}tn.prototype.N=function(){tn.aa.N.call(this),as(this)},tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lr=c.JSON.stringify,ru=c.JSON.parse,ou=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function cr(){}cr.prototype.h=null;function ls(o){return o.h||(o.h=o.i())}function cs(){}var en={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ur(){J.call(this,"d")}N(ur,J);function dr(){J.call(this,"c")}N(dr,J);var de={},us=null;function Jn(){return us=us||new ft}de.La="serverreachability";function ds(o){J.call(this,de.La,o)}N(ds,J);function nn(o){const l=Jn();bt(l,new ds(l))}de.STAT_EVENT="statevent";function hs(o,l){J.call(this,de.STAT_EVENT,o),this.stat=l}N(hs,J);function Et(o){const l=Jn();bt(l,new hs(l,o))}de.Ma="timingevent";function ps(o,l){J.call(this,de.Ma,o),this.size=l}N(ps,J);function rn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function on(){this.g=!0}on.prototype.xa=function(){this.g=!1};function su(o,l,d,p,w,S){o.info(function(){if(o.g)if(S)for(var O="",Z=S.split("&"),ct=0;ct<Z.length;ct++){var G=Z[ct].split("=");if(1<G.length){var mt=G[0];G=G[1];var gt=mt.split("_");O=2<=gt.length&&gt[1]=="type"?O+(mt+"="+G+"&"):O+(mt+"=redacted&")}}else O=null;else O=S;return"XMLHTTP REQ ("+p+") [attempt "+w+"]: "+l+`
`+d+`
`+O})}function au(o,l,d,p,w,S,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+w+"]: "+l+`
`+d+`
`+S+" "+O})}function Re(o,l,d,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+cu(o,d)+(p?" "+p:"")})}function lu(o,l){o.info(function(){return"TIMEOUT: "+l})}on.prototype.info=function(){};function cu(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var w=p[1];if(Array.isArray(w)&&!(1>w.length)){var S=w[0];if(S!="noop"&&S!="stop"&&S!="close")for(var O=1;O<w.length;O++)w[O]=""}}}}return lr(d)}catch{return l}}var Zn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hr;function Yn(){}N(Yn,cr),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},hr=new Yn;function Yt(o,l,d,p){this.j=o,this.i=l,this.l=d,this.R=p||1,this.U=new tn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ms}function ms(){this.i=null,this.g="",this.h=!1}var gs={},pr={};function fr(o,l,d){o.L=1,o.v=ii(Wt(l)),o.m=d,o.P=!0,ys(o,null)}function ys(o,l){o.F=Date.now(),ti(o),o.A=Wt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Vs(d.i,"t",p),o.C=0,d=o.j.J,o.h=new ms,o.g=Ks(o.j,d?l:null,!o.m),0<o.O&&(o.M=new iu(y(o.Y,o,o.g),o.O)),l=o.U,d=o.g,p=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(ss[0]=w.toString()),w=ss);for(var S=0;S<w.length;S++){var O=ts(d,w[S],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),nn(),su(o.i,o.u,o.A,o.l,o.R,o.m)}Yt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Qt(o)==3?l.j():this.Y(o)},Yt.prototype.Y=function(o){try{if(o==this.g)t:{const gt=Qt(this.g);var l=this.g.Ba();const Se=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Os(this.g)))){this.J||gt!=4||l==7||(l==8||0>=Se?nn(3):nn(2)),mr(this);var d=this.g.Z();this.X=d;e:if(vs(this)){var p=Os(this.g);o="";var w=p.length,S=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){he(this),sn(this);var O="";break e}this.h.i=new c.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(S&&l==w-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,au(this.i,this.u,this.A,this.l,this.R,gt,d),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,ct=this.g;if((Z=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Z)){var G=Z;break e}}G=null}if(d=G)Re(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gr(this,d);else{this.o=!1,this.s=3,Et(12),he(this),sn(this);break t}}if(this.P){d=!0;let Lt;for(;!this.J&&this.C<O.length;)if(Lt=uu(this,O),Lt==pr){gt==4&&(this.s=4,Et(14),d=!1),Re(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==gs){this.s=4,Et(15),Re(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else Re(this.i,this.l,Lt,null),gr(this,Lt);if(vs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||O.length!=0||this.h.h||(this.s=1,Et(16),d=!1),this.o=this.o&&d,!d)Re(this.i,this.l,O,"[Invalid Chunked Response]"),he(this),sn(this);else if(0<O.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Er(mt),mt.M=!0,Et(11))}}else Re(this.i,this.l,O,null),gr(this,O);gt==4&&he(this),this.o&&!this.J&&(gt==4?Ws(this.j,this):(this.o=!1,ti(this)))}else Ru(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),he(this),sn(this)}}}catch{}finally{}};function vs(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function uu(o,l){var d=o.C,p=l.indexOf(`
`,d);return p==-1?pr:(d=Number(l.substring(d,p)),isNaN(d)?gs:(p+=1,p+d>l.length?pr:(l=l.slice(p,p+d),o.C=p+d,l)))}Yt.prototype.cancel=function(){this.J=!0,he(this)};function ti(o){o.S=Date.now()+o.I,As(o,o.I)}function As(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=rn(y(o.ba,o),l)}function mr(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Yt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(lu(this.i,this.A),this.L!=2&&(nn(),Et(17)),he(this),this.s=2,sn(this)):As(this,this.S-o)};function sn(o){o.j.G==0||o.J||Ws(o.j,o)}function he(o){mr(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,as(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function gr(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||yr(d.h,o))){if(!o.K&&yr(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var w=p;if(w[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ci(d),ai(d);else break t;br(d),Et(18)}}else d.za=w[1],0<d.za-d.T&&37500>w[2]&&d.F&&d.v==0&&!d.C&&(d.C=rn(y(d.Za,d),6e3));if(1>=Es(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else fe(d,11)}else if((o.K||d.g==o)&&ci(d),!P(l))for(w=d.Da.g.parse(l),l=0;l<w.length;l++){let G=w[l];if(d.T=G[0],G=G[1],d.G==2)if(G[0]=="c"){d.K=G[1],d.ia=G[2];const mt=G[3];mt!=null&&(d.la=mt,d.j.info("VER="+d.la));const gt=G[4];gt!=null&&(d.Aa=gt,d.j.info("SVER="+d.Aa));const Se=G[5];Se!=null&&typeof Se=="number"&&0<Se&&(p=1.5*Se,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Lt=o.g;if(Lt){const di=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(di){var S=p.h;S.g||di.indexOf("spdy")==-1&&di.indexOf("quic")==-1&&di.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(vr(S,S.h),S.h=null))}if(p.D){const Ir=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ir&&(p.ya=Ir,Y(p.I,p.D,Ir))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=Gs(p,p.J?p.ia:null,p.W),O.K){Is(p.h,O);var Z=O,ct=p.L;ct&&(Z.I=ct),Z.B&&(mr(Z),ti(Z)),p.g=O}else Hs(p);0<d.i.length&&li(d)}else G[0]!="stop"&&G[0]!="close"||fe(d,7);else d.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?fe(d,7):_r(d):G[0]!="noop"&&d.l&&d.l.ta(G),d.v=0)}}nn(4)}catch{}}var du=class{constructor(o,l){this.g=o,this.map=l}};function _s(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bs(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Es(o){return o.h?1:o.g?o.g.size:0}function yr(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function vr(o,l){o.g?o.g.add(l):o.h=l}function Is(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}_s.prototype.cancel=function(){if(this.i=ws(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ws(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return R(o.i)}function hu(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,p=0;p<d;p++)l.push(o[p]);return l}l=[],d=0;for(p in o)l[d++]=o[p];return l}function pu(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const p in o)l[d++]=p;return l}}}function xs(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=pu(o),p=hu(o),w=p.length,S=0;S<w;S++)l.call(void 0,p[S],d&&d[S],o)}var Ts=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fu(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),w=null;if(0<=p){var S=o[d].substring(0,p);w=o[d].substring(p+1)}else S=o[d];l(S,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function pe(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof pe){this.h=o.h,ei(this,o.j),this.o=o.o,this.g=o.g,ni(this,o.s),this.l=o.l;var l=o.i,d=new cn;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Rs(this,d),this.m=o.m}else o&&(l=String(o).match(Ts))?(this.h=!1,ei(this,l[1]||"",!0),this.o=an(l[2]||""),this.g=an(l[3]||"",!0),ni(this,l[4]),this.l=an(l[5]||"",!0),Rs(this,l[6]||"",!0),this.m=an(l[7]||"")):(this.h=!1,this.i=new cn(null,this.h))}pe.prototype.toString=function(){var o=[],l=this.j;l&&o.push(ln(l,Cs,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(ln(l,Cs,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ln(d,d.charAt(0)=="/"?yu:gu,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ln(d,Au)),o.join("")};function Wt(o){return new pe(o)}function ei(o,l,d){o.j=d?an(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ni(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Rs(o,l,d){l instanceof cn?(o.i=l,_u(o.i,o.h)):(d||(l=ln(l,vu)),o.i=new cn(l,o.h))}function Y(o,l,d){o.i.set(l,d)}function ii(o){return Y(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function an(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ln(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,mu),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function mu(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Cs=/[#\/\?@]/g,gu=/[#\?:]/g,yu=/[#\?]/g,vu=/[#\?@]/g,Au=/#/g;function cn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function te(o){o.g||(o.g=new Map,o.h=0,o.i&&fu(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=cn.prototype,n.add=function(o,l){te(this),this.i=null,o=Ce(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Ps(o,l){te(o),l=Ce(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Ss(o,l){return te(o),l=Ce(o,l),o.g.has(l)}n.forEach=function(o,l){te(this),this.g.forEach(function(d,p){d.forEach(function(w){o.call(l,w,p,this)},this)},this)},n.na=function(){te(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){const w=o[p];for(let S=0;S<w.length;S++)d.push(l[p])}return d},n.V=function(o){te(this);let l=[];if(typeof o=="string")Ss(this,o)&&(l=l.concat(this.g.get(Ce(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return te(this),this.i=null,o=Ce(this,o),Ss(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Vs(o,l,d){Ps(o,l),0<d.length&&(o.i=null,o.g.set(Ce(o,l),R(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];const S=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var w=S;O[p]!==""&&(w+="="+encodeURIComponent(String(O[p]))),o.push(w)}}return this.i=o.join("&")};function Ce(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function _u(o,l){l&&!o.j&&(te(o),o.i=null,o.g.forEach(function(d,p){var w=p.toLowerCase();p!=w&&(Ps(this,p),Vs(this,w,d))},o)),o.j=l}function bu(o,l){const d=new on;if(c.Image){const p=new Image;p.onload=C(ee,d,"TestLoadImage: loaded",!0,l,p),p.onerror=C(ee,d,"TestLoadImage: error",!1,l,p),p.onabort=C(ee,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=C(ee,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Eu(o,l){const d=new on,p=new AbortController,w=setTimeout(()=>{p.abort(),ee(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(w),S.ok?ee(d,"TestPingServer: ok",!0,l):ee(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),ee(d,"TestPingServer: error",!1,l)})}function ee(o,l,d,p,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),p(d)}catch{}}function Iu(){this.g=new ou}function wu(o,l,d){const p=d||"";try{xs(o,function(w,S){let O=w;h(w)&&(O=lr(w)),l.push(p+S+"="+encodeURIComponent(O))})}catch(w){throw l.push(p+"type="+encodeURIComponent("_badmap")),w}}function ri(o){this.l=o.Ub||null,this.j=o.eb||!1}N(ri,cr),ri.prototype.g=function(){return new oi(this.l,this.j)},ri.prototype.i=function(o){return function(){return o}}({});function oi(o,l){ft.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(oi,ft),n=oi.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,dn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ds(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ds(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?un(this):dn(this),this.readyState==3&&Ds(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,un(this))},n.Qa=function(o){this.g&&(this.response=o,un(this))},n.ga=function(){this.g&&un(this)};function un(o){o.readyState=4,o.l=null,o.j=null,o.v=null,dn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function dn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ks(o){let l="";return D(o,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function Ar(o,l,d){t:{for(p in d){var p=!1;break t}p=!0}p||(d=ks(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Y(o,l,d))}function it(o){ft.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(it,ft);var xu=/^https?$/i,Tu=["POST","PUT"];n=it.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hr.g(),this.v=this.o?ls(this.o):ls(hr),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){Ns(this,S);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var w in p)d.set(w,p[w]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),w=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Tu,l,void 0))||p||w||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of d)this.g.setRequestHeader(S,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ms(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Ns(this,S)}};function Ns(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Bs(o),si(o)}function Bs(o){o.A||(o.A=!0,bt(o,"complete"),bt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,bt(this,"complete"),bt(this,"abort"),si(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),si(this,!0)),it.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ls(this):this.bb())},n.bb=function(){Ls(this)};function Ls(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Qt(o)!=4||o.Z()!=2)){if(o.u&&Qt(o)==4)rs(o.Ea,0,o);else if(bt(o,"readystatechange"),Qt(o)==4){o.h=!1;try{const O=o.Z();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var d;if(!(d=l)){var p;if(p=O===0){var w=String(o.D).match(Ts)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),p=!xu.test(w?w.toLowerCase():"")}d=p}if(d)bt(o,"complete"),bt(o,"success");else{o.m=6;try{var S=2<Qt(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Bs(o)}}finally{si(o)}}}}function si(o,l){if(o.g){Ms(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||bt(o,"ready");try{d.onreadystatechange=p}catch{}}}function Ms(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Qt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),ru(l)}};function Os(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ru(o){const l={};o=(o.g&&2<=Qt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(P(o[p]))continue;var d=I(o[p]);const w=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=l[w]||[];l[w]=S,S.push(d)}b(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hn(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Fs(o){this.Aa=0,this.i=[],this.j=new on,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hn("baseRetryDelayMs",5e3,o),this.cb=hn("retryDelaySeedMs",1e4,o),this.Wa=hn("forwardChannelMaxRetries",2,o),this.wa=hn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new _s(o&&o.concurrentRequestLimit),this.Da=new Iu,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fs.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,p){Et(0),this.W=o,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Gs(this,null,this.W),li(this)};function _r(o){if(zs(o),o.G==3){var l=o.U++,d=Wt(o.I);if(Y(d,"SID",o.K),Y(d,"RID",l),Y(d,"TYPE","terminate"),pn(o,d),l=new Yt(o,o.j,l),l.L=2,l.v=ii(Wt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Ks(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ti(l)}$s(o)}function ai(o){o.g&&(Er(o),o.g.cancel(),o.g=null)}function zs(o){ai(o),o.u&&(c.clearTimeout(o.u),o.u=null),ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function li(o){if(!bs(o.h)&&!o.s){o.s=!0;var l=o.Ga;Ut||$n(),Jt||(Ut(),Jt=!0),Ze.add(l,o),o.B=0}}function Cu(o,l){return Es(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=rn(y(o.Ga,o,l),Qs(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new Yt(this,this.j,o);let S=this.o;if(this.S&&(S?(S=m(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(w.H=S,S=null),this.P)t:{for(var l=0,d=0;d<this.i.length;d++){e:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break t}if(l===4096||d===this.i.length-1){l=d+1;break t}}l=1e3}else l=1e3;l=qs(this,w,l),d=Wt(this.I),Y(d,"RID",o),Y(d,"CVER",22),this.D&&Y(d,"X-HTTP-Session-Id",this.D),pn(this,d),S&&(this.O?l="headers="+encodeURIComponent(String(ks(S)))+"&"+l:this.m&&Ar(d,this.m,S)),vr(this.h,w),this.Ua&&Y(d,"TYPE","init"),this.P?(Y(d,"$req",l),Y(d,"SID","null"),w.T=!0,fr(w,d,null)):fr(w,d,l),this.G=2}}else this.G==3&&(o?js(this,o):this.i.length==0||bs(this.h)||js(this))};function js(o,l){var d;l?d=l.l:d=o.U++;const p=Wt(o.I);Y(p,"SID",o.K),Y(p,"RID",d),Y(p,"AID",o.T),pn(o,p),o.m&&o.o&&Ar(p,o.m,o.o),d=new Yt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=qs(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),vr(o.h,d),fr(d,p,l)}function pn(o,l){o.H&&D(o.H,function(d,p){Y(l,p,d)}),o.l&&xs({},function(d,p){Y(l,p,d)})}function qs(o,l,d){d=Math.min(o.i.length,d);var p=o.l?y(o.l.Na,o.l,o):null;t:{var w=o.i;let S=-1;for(;;){const O=["count="+d];S==-1?0<d?(S=w[0].g,O.push("ofs="+S)):S=0:O.push("ofs="+S);let Z=!0;for(let ct=0;ct<d;ct++){let G=w[ct].g;const mt=w[ct].map;if(G-=S,0>G)S=Math.max(0,w[ct].g-100),Z=!1;else try{wu(mt,O,"req"+G+"_")}catch{p&&p(mt)}}if(Z){p=O.join("&");break t}}}return o=o.i.splice(0,d),l.D=o,p}function Hs(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Ut||$n(),Jt||(Ut(),Jt=!0),Ze.add(l,o),o.v=0}}function br(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=rn(y(o.Fa,o),Qs(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Us(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=rn(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),ai(this),Us(this))};function Er(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Us(o){o.g=new Yt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Wt(o.qa);Y(l,"RID","rpc"),Y(l,"SID",o.K),Y(l,"AID",o.T),Y(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&Y(l,"TO",o.ja),Y(l,"TYPE","xmlhttp"),pn(o,l),o.m&&o.o&&Ar(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ii(Wt(l)),d.m=null,d.P=!0,ys(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ai(this),br(this),Et(19))};function ci(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Ws(o,l){var d=null;if(o.g==l){ci(o),Er(o),o.g=null;var p=2}else if(yr(o.h,l))d=l.D,Is(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var w=o.B;p=Jn(),bt(p,new ps(p,d)),li(o)}else Hs(o);else if(w=l.s,w==3||w==0&&0<l.X||!(p==1&&Cu(o,l)||p==2&&br(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),w){case 1:fe(o,5);break;case 4:fe(o,10);break;case 3:fe(o,6);break;default:fe(o,2)}}}function Qs(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function fe(o,l){if(o.j.info("Error code "+l),l==2){var d=y(o.fb,o),p=o.Xa;const w=!p;p=new pe(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ei(p,"https"),ii(p),w?bu(p.toString(),d):Eu(p.toString(),d)}else Et(2);o.G=0,o.l&&o.l.sa(l),$s(o),zs(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function $s(o){if(o.G=0,o.ka=[],o.l){const l=ws(o.h);(l.length!=0||o.i.length!=0)&&(v(o.ka,l),v(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function Gs(o,l,d){var p=d instanceof pe?Wt(d):new pe(d);if(p.g!="")l&&(p.g=l+"."+p.g),ni(p,p.s);else{var w=c.location;p=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var S=new pe(null);p&&ei(S,p),l&&(S.g=l),w&&ni(S,w),d&&(S.l=d),p=S}return d=o.D,l=o.ya,d&&l&&Y(p,d,l),Y(p,"VER",o.la),pn(o,p),p}function Ks(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new it(new ri({eb:d})):new it(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xs(){}n=Xs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ui(){}ui.prototype.g=function(o,l){return new Ct(o,l)};function Ct(o,l){ft.call(this),this.g=new Fs(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!P(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!P(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Pe(this)}N(Ct,ft),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){_r(this.g)},Ct.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=lr(o),o=d);l.i.push(new du(l.Ya++,o)),l.G==3&&li(l)},Ct.prototype.N=function(){this.g.l=null,delete this.j,_r(this.g),delete this.g,Ct.aa.N.call(this)};function Js(o){ur.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const d in l){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}N(Js,ur);function Zs(){dr.call(this),this.status=1}N(Zs,dr);function Pe(o){this.g=o}N(Pe,Xs),Pe.prototype.ua=function(){bt(this.g,"a")},Pe.prototype.ta=function(o){bt(this.g,new Js(o))},Pe.prototype.sa=function(o){bt(this.g,new Zs)},Pe.prototype.ra=function(){bt(this.g,"b")},ui.prototype.createWebChannel=ui.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,vl=function(){return new ui},yl=function(){return Jn()},gl=de,qr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zn.NO_ERROR=0,Zn.TIMEOUT=8,Zn.HTTP_ERROR=6,yi=Zn,fs.COMPLETE="complete",ml=fs,cs.EventType=en,en.OPEN="a",en.CLOSE="b",en.ERROR="c",en.MESSAGE="d",ft.prototype.listen=ft.prototype.K,mn=cs,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,fl=it}).apply(typeof hi<"u"?hi:typeof self<"u"?self:typeof window<"u"?window:{});const ua="@firebase/firestore";/**
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
 */const _e=new al("@firebase/firestore");function fn(){return _e.logLevel}function z(n,...t){if(_e.logLevel<=$.DEBUG){const e=t.map(lo);_e.debug(`Firestore (${Qe}): ${n}`,...e)}}function Kt(n,...t){if(_e.logLevel<=$.ERROR){const e=t.map(lo);_e.error(`Firestore (${Qe}): ${n}`,...e)}}function Oe(n,...t){if(_e.logLevel<=$.WARN){const e=t.map(lo);_e.warn(`Firestore (${Qe}): ${n}`,...e)}}function lo(n){if(typeof n=="string")return n;try{/**
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
 */class Al{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ah{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(vt.UNAUTHENTICATED))}shutdown(){}}class lh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ch{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0);let i=this.i;const r=u=>this.i!==i?(i=this.i,e(u)):Promise.resolve();let s=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $t,t.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},c=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $t)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(X(typeof i.accessToken=="string"),new Al(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new vt(t)}}class uh{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dh{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new uh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ph{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){X(this.o===void 0);const i=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new hh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class _l{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=fh(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<e&&(i+=t.charAt(r[s]%t.length))}return i}}function K(n,t){return n<t?-1:n>t?1:0}function Fe(n,t,e){return n.length===t.length&&n.every((i,r)=>e(i,t[r]))}/**
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
 */class xn{constructor(t,e,i){e===void 0?e=0:e>t.length&&q(),i===void 0?i=t.length-e:i>t.length-e&&q(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return xn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof xn?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let r=0;r<i;r++){const s=t.get(r),a=e.get(r);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tt extends xn{construct(t,e,i){return new tt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new F(k.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(r=>r.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const mh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends xn{construct(t,e,i){return new dt(t,e,i)}static isValidIdentifier(t){return mh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(t){const e=[];let i="",r=0;const s=()=>{if(i.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let a=!1;for(;r<t.length;){const c=t[r];if(c==="\\"){if(r+1===t.length)throw new F(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=u,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(i+=c,r++):(s(),r++)}if(s(),a)throw new F(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
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
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(tt.fromString(t))}static fromName(t){return new j(tt.fromString(t).popFirst(5))}static empty(){return new j(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new tt(t.slice()))}}function gh(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=H.fromTimestamp(i===1e9?new at(e+1,0):new at(e,i));return new se(r,j.empty(),t)}function yh(n){return new se(n.readTime,n.key,-1)}class se{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new se(H.min(),j.empty(),-1)}static max(){return new se(H.max(),j.empty(),-1)}}function vh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:K(n.largestBatchId,t.largestBatchId))}/**
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
 */async function Nn(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==Ah)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new B((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(i,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof B?e:B.resolve(e)}catch(e){return B.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):B.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):B.reject(e)}static resolve(t){return new B((e,i)=>{e(t)})}static reject(t){return new B((e,i)=>{i(t)})}static waitFor(t){return new B((e,i)=>{let r=0,s=0,a=!1;t.forEach(c=>{++r,c.next(()=>{++s,a&&s===r&&e()},u=>i(u))}),a=!0,s===r&&e()})}static or(t){let e=B.resolve(!1);for(const i of t)e=e.next(r=>r?B.resolve(r):i());return e}static forEach(t,e){const i=[];return t.forEach((r,s)=>{i.push(e.call(this,r,s))}),this.waitFor(i)}static mapArray(t,e){return new B((i,r)=>{const s=t.length,a=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;e(t[h]).next(f=>{a[h]=f,++c,c===s&&i(a)},f=>r(f))}})}static doWhile(t,e){return new B((i,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):i()};s()})}}function bh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Bn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class co{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}co.oe=-1;function Mi(n){return n==null}function xi(n){return n===0&&1/n==-1/0}function Eh(n){return typeof n=="number"&&Number.isInteger(n)&&!xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function da(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ie(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function bl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class nt{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return e+i.left.size;r<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pi(this.root,t,this.comparator,!1)}getReverseIterator(){return new pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pi(this.root,t,this.comparator,!0)}}class pi{constructor(t,e,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,i,r,s){this.key=t,this.value=e,this.color=i??ut.RED,this.left=r??ut.EMPTY,this.right=s??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,r,s){return new ut(t??this.key,e??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,i),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return ut.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const t=this.left.check();if(t!==this.right.check())throw q();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,i,r,s){return this}insert(t,e,i){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ha(this.data.getIterator())}getIteratorFrom(t){return new ha(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class ha{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new El("Invalid base64 string: "+s):s}}(t);return new pt(e)}static fromUint8Array(t){const e=function(r){let s="";for(let a=0;a<r.length;++a)s+=String.fromCharCode(r[a]);return s}(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Ih=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(n){if(X(!!n),typeof n=="string"){let t=0;const e=Ih.exec(n);if(X(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function be(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
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
 */function uo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ho(n){const t=n.mapValue.fields.__previous_value__;return uo(t)?ho(t):t}function Tn(n){const t=ae(n.mapValue.fields.__local_write_time__.timestampValue);return new at(t.seconds,t.nanos)}/**
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
 */class wh{constructor(t,e,i,r,s,a,c,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class Rn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Rn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const fi={mapValue:{}};function Ee(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uo(n)?4:Th(n)?9007199254740991:xh(n)?10:11:q()}function zt(n,t){if(n===t)return!0;const e=Ee(n);if(e!==Ee(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Tn(n).isEqual(Tn(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const a=ae(r.timestampValue),c=ae(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,s){return be(r.bytesValue).isEqual(be(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,s){return rt(r.geoPointValue.latitude)===rt(s.geoPointValue.latitude)&&rt(r.geoPointValue.longitude)===rt(s.geoPointValue.longitude)}(n,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return rt(r.integerValue)===rt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const a=rt(r.doubleValue),c=rt(s.doubleValue);return a===c?xi(a)===xi(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Fe(n.arrayValue.values||[],t.arrayValue.values||[],zt);case 10:case 11:return function(r,s){const a=r.mapValue.fields||{},c=s.mapValue.fields||{};if(da(a)!==da(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!zt(a[u],c[u])))return!1;return!0}(n,t);default:return q()}}function Cn(n,t){return(n.values||[]).find(e=>zt(e,t))!==void 0}function ze(n,t){if(n===t)return 0;const e=Ee(n),i=Ee(t);if(e!==i)return K(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,t.booleanValue);case 2:return function(s,a){const c=rt(s.integerValue||s.doubleValue),u=rt(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,t);case 3:return pa(n.timestampValue,t.timestampValue);case 4:return pa(Tn(n),Tn(t));case 5:return K(n.stringValue,t.stringValue);case 6:return function(s,a){const c=be(s),u=be(a);return c.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const c=s.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=K(c[h],u[h]);if(f!==0)return f}return K(c.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const c=K(rt(s.latitude),rt(a.latitude));return c!==0?c:K(rt(s.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return fa(n.arrayValue,t.arrayValue);case 10:return function(s,a){var c,u,h,f;const g=s.fields||{},y=a.fields||{},C=(c=g.value)===null||c===void 0?void 0:c.arrayValue,N=(u=y.value)===null||u===void 0?void 0:u.arrayValue,R=K(((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:fa(C,N)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===fi.mapValue&&a===fi.mapValue)return 0;if(s===fi.mapValue)return 1;if(a===fi.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=K(u[g],f[g]);if(y!==0)return y;const C=ze(c[u[g]],h[f[g]]);if(C!==0)return C}return K(u.length,f.length)}(n.mapValue,t.mapValue);default:throw q()}}function pa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return K(n,t);const e=ae(n),i=ae(t),r=K(e.seconds,i.seconds);return r!==0?r:K(e.nanos,i.nanos)}function fa(n,t){const e=n.values||[],i=t.values||[];for(let r=0;r<e.length&&r<i.length;++r){const s=ze(e[r],i[r]);if(s)return s}return K(e.length,i.length)}function je(n){return Hr(n)}function Hr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ae(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return be(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",r=!0;for(const s of e.values||[])r?r=!1:i+=",",i+=Hr(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const a of i)s?s=!1:r+=",",r+=`${a}:${Hr(e.fields[a])}`;return r+"}"}(n.mapValue):q()}function ma(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ur(n){return!!n&&"integerValue"in n}function po(n){return!!n&&"arrayValue"in n}function ga(n){return!!n&&"nullValue"in n}function ya(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vi(n){return!!n&&"mapValue"in n}function xh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function An(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ie(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=An(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=An(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Th(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class xt{constructor(t){this.value=t}static empty(){return new xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!vi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=An(e)}setAll(t){let e=dt.emptyPath(),i={},r=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const u=this.getFieldsMap(e);this.applyChanges(u,i,r),i={},r=[],e=c.popLast()}a?i[c.lastSegment()]=An(a):r.push(c.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,i,r)}delete(t){const e=this.field(t.popLast());vi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return zt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=e.mapValue.fields[t.get(i)];vi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,i){Ie(e,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new xt(An(this.value))}}function Il(n){const t=[];return Ie(n.fields,(e,i)=>{const r=new dt([e]);if(vi(i)){const s=Il(i.mapValue).fields;if(s.length===0)t.push(r);else for(const a of s)t.push(r.child(a))}else t.push(r)}),new Pt(t)}/**
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
 */class At{constructor(t,e,i,r,s,a,c){this.key=t,this.documentType=e,this.version=i,this.readTime=r,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(t){return new At(t,0,H.min(),H.min(),H.min(),xt.empty(),0)}static newFoundDocument(t,e,i,r){return new At(t,1,e,H.min(),i,r,0)}static newNoDocument(t,e){return new At(t,2,e,H.min(),H.min(),xt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,H.min(),H.min(),xt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ti{constructor(t,e){this.position=t,this.inclusive=e}}function va(n,t,e){let i=0;for(let r=0;r<n.position.length;r++){const s=t[r],a=n.position[r];if(s.field.isKeyField()?i=j.comparator(j.fromName(a.referenceValue),e.key):i=ze(a,e.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Aa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!zt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class wl{}class st extends wl{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Ph(t,e,i):e==="array-contains"?new Dh(t,i):e==="in"?new kh(t,i):e==="not-in"?new Nh(t,i):e==="array-contains-any"?new Bh(t,i):new st(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Sh(t,i):new Vh(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ze(e,this.value)):e!==null&&Ee(this.value)===Ee(e)&&this.matchesComparison(ze(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends wl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Mt(t,e)}matches(t){return xl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function xl(n){return n.op==="and"}function Tl(n){return Ch(n)&&xl(n)}function Ch(n){for(const t of n.filters)if(t instanceof Mt)return!1;return!0}function Wr(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+je(n.value);if(Tl(n))return n.filters.map(t=>Wr(t)).join(",");{const t=n.filters.map(e=>Wr(e)).join(",");return`${n.op}(${t})`}}function Rl(n,t){return n instanceof st?function(i,r){return r instanceof st&&i.op===r.op&&i.field.isEqual(r.field)&&zt(i.value,r.value)}(n,t):n instanceof Mt?function(i,r){return r instanceof Mt&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,a,c)=>s&&Rl(a,r.filters[c]),!0):!1}(n,t):void q()}function Cl(n){return n instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${je(e.value)}`}(n):n instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(Cl).join(" ,")+"}"}(n):"Filter"}class Ph extends st{constructor(t,e,i){super(t,e,i),this.key=j.fromName(i.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class Sh extends st{constructor(t,e){super(t,"in",e),this.keys=Pl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vh extends st{constructor(t,e){super(t,"not-in",e),this.keys=Pl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Pl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>j.fromName(i.referenceValue))}class Dh extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return po(e)&&Cn(e.arrayValue,this.value)}}class kh extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Cn(this.value.arrayValue,e)}}class Nh extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(Cn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Cn(this.value.arrayValue,e)}}class Bh extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!po(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Cn(this.value.arrayValue,i))}}/**
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
 */class Lh{constructor(t,e=null,i=[],r=[],s=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function _a(n,t=null,e=[],i=[],r=null,s=null,a=null){return new Lh(n,t,e,i,r,s,a)}function fo(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Wr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Mi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>je(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>je(i)).join(",")),t.ue=e}return t.ue}function mo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Rh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Rl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Aa(n.startAt,t.startAt)&&Aa(n.endAt,t.endAt)}function Qr(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class $e{constructor(t,e=null,i=[],r=[],s=null,a="F",c=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Mh(n,t,e,i,r,s,a,c){return new $e(n,t,e,i,r,s,a,c)}function Oi(n){return new $e(n)}function ba(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sl(n){return n.collectionGroup!==null}function _n(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ht(dt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Pn(s,i))}),e.has(dt.keyField().canonicalString())||t.ce.push(new Pn(dt.keyField(),i))}return t.ce}function Ot(n){const t=U(n);return t.le||(t.le=Oh(t,_n(n))),t.le}function Oh(n,t){if(n.limitType==="F")return _a(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Pn(r.field,s)});const e=n.endAt?new Ti(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ti(n.startAt.position,n.startAt.inclusive):null;return _a(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function $r(n,t){const e=n.filters.concat([t]);return new $e(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Gr(n,t,e){return new $e(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Fi(n,t){return mo(Ot(n),Ot(t))&&n.limitType===t.limitType}function Vl(n){return`${fo(Ot(n))}|lt:${n.limitType}`}function ke(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(r=>Cl(r)).join(", ")}]`),Mi(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(r=>je(r)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(r=>je(r)).join(",")),`Target(${i})`}(Ot(n))}; limitType=${n.limitType})`}function zi(n,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):j.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,t)&&function(i,r){for(const s of _n(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(n,t)&&function(i,r){return!(i.startAt&&!function(a,c,u){const h=va(a,c,u);return a.inclusive?h<=0:h<0}(i.startAt,_n(i),r)||i.endAt&&!function(a,c,u){const h=va(a,c,u);return a.inclusive?h>=0:h>0}(i.endAt,_n(i),r))}(n,t)}function Fh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dl(n){return(t,e)=>{let i=!1;for(const r of _n(n)){const s=zh(r,t,e);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function zh(n,t,e){const i=n.field.isKeyField()?j.comparator(t.key,e.key):function(s,a,c){const u=a.data.field(s),h=c.data.field(s);return u!==null&&h!==null?ze(u,h):q()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return q()}}/**
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
 */class Ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[e]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ie(this.inner,(e,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return bl(this.inner)}size(){return this.innerSize}}/**
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
 */const jh=new nt(j.comparator);function Xt(){return jh}const kl=new nt(j.comparator);function gn(...n){let t=kl;for(const e of n)t=t.insert(e.key,e);return t}function Nl(n){let t=kl;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function ge(){return bn()}function Bl(){return bn()}function bn(){return new Ge(n=>n.toString(),(n,t)=>n.isEqual(t))}const qh=new nt(j.comparator),Hh=new ht(j.comparator);function W(...n){let t=Hh;for(const e of n)t=t.add(e);return t}const Uh=new ht(K);function Wh(){return Uh}/**
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
 */function go(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xi(t)?"-0":t}}function Ll(n){return{integerValue:""+n}}function Qh(n,t){return Eh(t)?Ll(t):go(n,t)}/**
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
 */class ji{constructor(){this._=void 0}}function $h(n,t,e){return n instanceof Sn?function(r,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&uo(s)&&(s=ho(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof Vn?Ol(n,t):n instanceof Dn?Fl(n,t):function(r,s){const a=Ml(r,s),c=Ea(a)+Ea(r.Pe);return Ur(a)&&Ur(r.Pe)?Ll(c):go(r.serializer,c)}(n,t)}function Gh(n,t,e){return n instanceof Vn?Ol(n,t):n instanceof Dn?Fl(n,t):e}function Ml(n,t){return n instanceof Ri?function(i){return Ur(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class Sn extends ji{}class Vn extends ji{constructor(t){super(),this.elements=t}}function Ol(n,t){const e=zl(t);for(const i of n.elements)e.some(r=>zt(r,i))||e.push(i);return{arrayValue:{values:e}}}class Dn extends ji{constructor(t){super(),this.elements=t}}function Fl(n,t){let e=zl(t);for(const i of n.elements)e=e.filter(r=>!zt(r,i));return{arrayValue:{values:e}}}class Ri extends ji{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ea(n){return rt(n.integerValue||n.doubleValue)}function zl(n){return po(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Kh{constructor(t,e){this.field=t,this.transform=e}}function Xh(n,t){return n.field.isEqual(t.field)&&function(i,r){return i instanceof Vn&&r instanceof Vn||i instanceof Dn&&r instanceof Dn?Fe(i.elements,r.elements,zt):i instanceof Ri&&r instanceof Ri?zt(i.Pe,r.Pe):i instanceof Sn&&r instanceof Sn}(n.transform,t.transform)}class Jh{constructor(t,e){this.version=t,this.transformResults=e}}class It{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new It}static exists(t){return new It(void 0,t)}static updateTime(t){return new It(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ai(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class qi{}function jl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Hi(n.key,It.none()):new Ln(n.key,n.data,It.none());{const e=n.data,i=xt.empty();let r=new ht(dt.comparator);for(let s of t.fields)if(!r.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?i.delete(s):i.set(s,a),r=r.add(s)}return new ce(n.key,i,new Pt(r.toArray()),It.none())}}function Zh(n,t,e){n instanceof Ln?function(r,s,a){const c=r.value.clone(),u=wa(r.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ce?function(r,s,a){if(!Ai(r.precondition,s))return void s.convertToUnknownDocument(a.version);const c=wa(r.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(ql(r)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(r,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function En(n,t,e,i){return n instanceof Ln?function(s,a,c,u){if(!Ai(s.precondition,a))return c;const h=s.value.clone(),f=xa(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,i):n instanceof ce?function(s,a,c,u){if(!Ai(s.precondition,a))return c;const h=xa(s.fieldTransforms,u,a),f=a.data;return f.setAll(ql(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,t,e,i):function(s,a,c){return Ai(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Yh(n,t){let e=null;for(const i of n.fieldTransforms){const r=t.data.field(i.field),s=Ml(i.transform,r||null);s!=null&&(e===null&&(e=xt.empty()),e.set(i.field,s))}return e||null}function Ia(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Fe(i,r,(s,a)=>Xh(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ln extends qi{constructor(t,e,i,r=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ce extends qi{constructor(t,e,i,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ql(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function wa(n,t,e){const i=new Map;X(n.length===e.length);for(let r=0;r<e.length;r++){const s=n[r],a=s.transform,c=t.data.field(s.field);i.set(s.field,Gh(a,c,e[r]))}return i}function xa(n,t,e){const i=new Map;for(const r of n){const s=r.transform,a=e.data.field(r.field);i.set(r.field,$h(s,a,t))}return i}class Hi extends qi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tp extends qi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ep{constructor(t,e,i,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&Zh(s,t,i[r])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=En(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=En(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Bl();return this.mutations.forEach(r=>{const s=t.get(r.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=e.has(r.key)?null:c;const u=jl(a,c);u!==null&&i.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),W())}isEqual(t){return this.batchId===t.batchId&&Fe(this.mutations,t.mutations,(e,i)=>Ia(e,i))&&Fe(this.baseMutations,t.baseMutations,(e,i)=>Ia(e,i))}}class yo{constructor(t,e,i,r){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=r}static from(t,e,i){X(t.mutations.length===i.length);let r=function(){return qh}();const s=t.mutations;for(let a=0;a<s.length;a++)r=r.insert(s[a].key,i[a].version);return new yo(t,e,i,r)}}/**
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
 */var ot,Q;function rp(n){switch(n){default:return q();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Hl(n){if(n===void 0)return Kt("GRPC error has no .code"),k.UNKNOWN;switch(n){case ot.OK:return k.OK;case ot.CANCELLED:return k.CANCELLED;case ot.UNKNOWN:return k.UNKNOWN;case ot.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ot.INTERNAL:return k.INTERNAL;case ot.UNAVAILABLE:return k.UNAVAILABLE;case ot.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ot.NOT_FOUND:return k.NOT_FOUND;case ot.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ot.ABORTED:return k.ABORTED;case ot.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ot.DATA_LOSS:return k.DATA_LOSS;default:return q()}}(Q=ot||(ot={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function op(){return new TextEncoder}/**
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
 */const sp=new ve([4294967295,4294967295],0);function Ta(n){const t=op().encode(n),e=new pl;return e.update(t),new Uint8Array(e.digest())}function Ra(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ve([e,i],0),new ve([r,s],0)]}class vo{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new yn(`Invalid padding: ${e}`);if(i<0)throw new yn(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new yn(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new yn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ve.fromNumber(this.Ie)}Ee(t,e,i){let r=t.add(e.multiply(ve.fromNumber(i)));return r.compare(sp)===1&&(r=new ve([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ta(t),[i,r]=Ra(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);if(!this.de(a))return!1}return!0}static create(t,e,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new vo(s,r,e);return i.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=Ta(t),[i,r]=Ra(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class yn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ui{constructor(t,e,i,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const r=new Map;return r.set(t,Mn.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new Ui(H.min(),r,new nt(K),Xt(),W())}}class Mn{constructor(t,e,i,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new Mn(i,e,W(),W(),W())}}/**
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
 */class _i{constructor(t,e,i,r){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=r}}class Ul{constructor(t,e){this.targetId=t,this.me=e}}class Wl{constructor(t,e,i=pt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=r}}class Ca{constructor(){this.fe=0,this.ge=Sa(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=W(),e=W(),i=W();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:i=i.add(r);break;default:q()}}),new Mn(this.pe,this.ye,t,e,i)}Ce(){this.we=!1,this.ge=Sa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ap{constructor(t){this.Le=t,this.Be=new Map,this.ke=Xt(),this.qe=Pa(),this.Qe=new nt(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:q()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,i=t.me.count,r=this.Je(e);if(r){const s=r.target;if(Qr(s))if(i===0){const a=new j(s.path);this.Ue(e,a,At.newNoDocument(a,H.min()))}else X(i===1);else{const a=this.Ye(e);if(a!==i){const c=this.Ze(t),u=c?this.Xe(c,t,a):1;if(u!==0){this.je(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=e;let a,c;try{a=be(i).toUint8Array()}catch(u){if(u instanceof El)return Oe("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new vo(a,r,s)}catch(u){return Oe(u instanceof yn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let r=0;return i.forEach(s=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,s,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const c=this.Je(a);if(c){if(s.current&&Qr(c.target)){const u=new j(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,At.newNoDocument(u,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let i=W();this.qe.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const r=new Ui(t,e,this.Qe,this.ke,i);return this.ke=Xt(),this.qe=Pa(),this.Qe=new nt(K),r}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ca,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||z("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ca),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Pa(){return new nt(j.comparator)}function Sa(){return new nt(j.comparator)}const lp={asc:"ASCENDING",desc:"DESCENDING"},cp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},up={and:"AND",or:"OR"};class dp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Kr(n,t){return n.useProto3Json||Mi(t)?t:{value:t}}function Ci(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ql(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function hp(n,t){return Ci(n,t.toTimestamp())}function Ft(n){return X(!!n),H.fromTimestamp(function(e){const i=ae(e);return new at(i.seconds,i.nanos)}(n))}function Ao(n,t){return Xr(n,t).canonicalString()}function Xr(n,t){const e=function(r){return new tt(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function $l(n){const t=tt.fromString(n);return X(Zl(t)),t}function Jr(n,t){return Ao(n.databaseId,t.path)}function Cr(n,t){const e=$l(t);if(e.get(1)!==n.databaseId.projectId)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(Kl(e))}function Gl(n,t){return Ao(n.databaseId,t)}function pp(n){const t=$l(n);return t.length===4?tt.emptyPath():Kl(t)}function Zr(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Kl(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Va(n,t,e){return{name:Jr(n,t),fields:e.value.mapValue.fields}}function fp(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(X(f===void 0||typeof f=="string"),pt.fromBase64String(f||"")):(X(f===void 0||f instanceof Buffer||f instanceof Uint8Array),pt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(h){const f=h.code===void 0?k.UNKNOWN:Hl(h.code);return new F(f,h.message||"")}(a);e=new Wl(i,r,s,c||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Cr(n,i.document.name),s=Ft(i.document.updateTime),a=i.document.createTime?Ft(i.document.createTime):H.min(),c=new xt({mapValue:{fields:i.document.fields}}),u=At.newFoundDocument(r,s,a,c),h=i.targetIds||[],f=i.removedTargetIds||[];e=new _i(h,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Cr(n,i.document),s=i.readTime?Ft(i.readTime):H.min(),a=At.newNoDocument(r,s),c=i.removedTargetIds||[];e=new _i([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Cr(n,i.document),s=i.removedTargetIds||[];e=new _i([],s,r,null)}else{if(!("filter"in t))return q();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,a=new ip(r,s),c=i.targetId;e=new Ul(c,a)}}return e}function mp(n,t){let e;if(t instanceof Ln)e={update:Va(n,t.key,t.value)};else if(t instanceof Hi)e={delete:Jr(n,t.key)};else if(t instanceof ce)e={update:Va(n,t.key,t.data),updateMask:wp(t.fieldMask)};else{if(!(t instanceof tp))return q();e={verify:Jr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const c=a.transform;if(c instanceof Sn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Vn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Dn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ri)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw q()}(0,i))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:hp(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(n,t.precondition)),e}function gp(n,t){return n&&n.length>0?(X(t!==void 0),n.map(e=>function(r,s){let a=r.updateTime?Ft(r.updateTime):Ft(s);return a.isEqual(H.min())&&(a=Ft(s)),new Jh(a,r.transformResults||[])}(e,t))):[]}function yp(n,t){return{documents:[Gl(n,t.path)]}}function vp(n,t){const e={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=Gl(n,r);const s=function(h){if(h.length!==0)return Jl(Mt.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Ne(y.field),direction:bp(y.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Kr(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:r}}function Ap(n){let t=pp(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let r=null;if(i>0){X(i===1);const f=e.from[0];f.allDescendants?r=f.collectionId:t=t.child(f.collectionId)}let s=[];e.where&&(s=function(g){const y=Xl(g);return y instanceof Mt&&Tl(y)?y.getFilters():[y]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(y=>function(N){return new Pn(Be(N.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(y))}(e.orderBy));let c=null;e.limit&&(c=function(g){let y;return y=typeof g=="object"?g.value:g,Mi(y)?null:y}(e.limit));let u=null;e.startAt&&(u=function(g){const y=!!g.before,C=g.values||[];return new Ti(C,y)}(e.startAt));let h=null;return e.endAt&&(h=function(g){const y=!g.before,C=g.values||[];return new Ti(C,y)}(e.endAt)),Mh(t,r,a,s,c,"F",u,h)}function _p(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Xl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=Be(e.unaryFilter.field);return st.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Be(e.unaryFilter.field);return st.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Be(e.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Be(e.unaryFilter.field);return st.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(e){return st.create(Be(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(i=>Xl(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(n):q()}function bp(n){return lp[n]}function Ep(n){return cp[n]}function Ip(n){return up[n]}function Ne(n){return{fieldPath:n.canonicalString()}}function Be(n){return dt.fromServerFormat(n.fieldPath)}function Jl(n){return n instanceof st?function(e){if(e.op==="=="){if(ya(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NAN"}};if(ga(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ya(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NOT_NAN"}};if(ga(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ne(e.field),op:Ep(e.op),value:e.value}}}(n):n instanceof Mt?function(e){const i=e.getFilters().map(r=>Jl(r));return i.length===1?i[0]:{compositeFilter:{op:Ip(e.op),filters:i}}}(n):q()}function wp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ne{constructor(t,e,i,r,s=H.min(),a=H.min(),c=pt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(t){return new ne(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ne(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class xp{constructor(t){this.ct=t}}function Tp(n){const t=Ap({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gr(t,t.limit,"L"):t}/**
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
 */class Rp{constructor(){this.un=new Cp}addToCollectionParentIndex(t,e){return this.un.add(e),B.resolve()}getCollectionParents(t,e){return B.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return B.resolve()}deleteFieldIndex(t,e){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,e){return B.resolve()}getDocumentsMatchingTarget(t,e){return B.resolve(null)}getIndexType(t,e){return B.resolve(0)}getFieldIndexes(t,e){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,e){return B.resolve(se.min())}getMinOffsetFromCollectionGroup(t,e){return B.resolve(se.min())}updateCollectionGroup(t,e,i){return B.resolve()}updateIndexEntries(t,e){return B.resolve()}}class Cp{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e]||new ht(tt.comparator),s=!r.has(i);return this.index[e]=r.add(i),s}has(t){const e=t.lastSegment(),i=t.popLast(),r=this.index[e];return r&&r.has(i)}getEntries(t){return(this.index[t]||new ht(tt.comparator)).toArray()}}/**
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
 */class Vp{constructor(t,e,i,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(i!==null&&En(i.mutation,r,Pt.empty(),at.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,W()).next(()=>i))}getLocalViewOfDocuments(t,e,i=W()){const r=ge();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,i).next(s=>{let a=gn();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const i=ge();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,W()))}populateOverlays(t,e,i){const r=[];return i.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,i,r){let s=Xt();const a=bn(),c=function(){return bn()}();return e.forEach((u,h)=>{const f=i.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof ce)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),En(f.mutation,h,f.mutation.getFieldMask(),at.now())):a.set(h.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),e.forEach((h,f)=>{var g;return c.set(h,new Sp(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(t,e){const i=bn();let r=new nt((a,c)=>a-c),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let f=i.get(u)||Pt.empty();f=c.applyToLocalView(h,f),i.set(u,f);const g=(r.get(c.batchId)||W()).add(u);r=r.insert(c.batchId,g)})}).next(()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,g=Bl();f.forEach(y=>{if(!s.has(y)){const C=jl(e.get(y),i.get(y));C!==null&&g.set(y,C),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,g))}return B.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,r){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Sl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,r):this.getDocumentsMatchingCollectionQuery(t,e,i,r)}getNextDocuments(t,e,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,r).next(s=>{const a=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,r-s.size):B.resolve(ge());let c=-1,u=s;return a.next(h=>B.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(f)?B.resolve():this.remoteDocumentCache.getEntry(t,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,u,h,W())).next(f=>({batchId:c,changes:Nl(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(i=>{let r=gn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,i,r){const s=e.collectionGroup;let a=gn();return this.indexManager.getCollectionParents(t,s).next(c=>B.forEach(c,u=>{const h=function(g,y){return new $e(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,i,r).next(f=>{f.forEach((g,y)=>{a=a.insert(g,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,s,r))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,At.newInvalidDocument(f)))});let c=gn();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&En(f.mutation,h,Pt.empty(),at.now()),zi(e,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class kp{constructor(){this.overlays=new nt(j.comparator),this.Ir=new Map}getOverlay(t,e){return B.resolve(this.overlays.get(e))}getOverlays(t,e){const i=ge();return B.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((r,s)=>{this.ht(t,e,s)}),B.resolve()}removeOverlaysForBatchId(t,e,i){const r=this.Ir.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),B.resolve()}getOverlaysForCollection(t,e,i){const r=ge(),s=e.length+1,a=new j(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>i&&r.set(u.getKey(),u)}return B.resolve(r)}getOverlaysForCollectionGroup(t,e,i,r){let s=new nt((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>i){let f=s.get(h.largestBatchId);f===null&&(f=ge(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=ge(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=r)););return B.resolve(c)}ht(t,e,i){const r=this.overlays.get(i.key);if(r!==null){const a=this.Ir.get(r.largestBatchId).delete(i.key);this.Ir.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new np(e,i));let s=this.Ir.get(e);s===void 0&&(s=W(),this.Ir.set(e,s)),this.Ir.set(e,s.add(i.key))}}/**
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
 */class _o{constructor(){this.Tr=new ht(lt.Er),this.dr=new ht(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new lt(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new lt(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new j(new tt([])),i=new lt(e,t),r=new lt(e,t+1),s=[];return this.dr.forEachInRange([i,r],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new j(new tt([])),i=new lt(e,t),r=new lt(e,t+1);let s=W();return this.dr.forEachInRange([i,r],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new lt(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class lt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return j.comparator(t.key,e.key)||K(t.wr,e.wr)}static Ar(t,e){return K(t.wr,e.wr)||j.comparator(t.key,e.key)}}/**
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
 */class Bp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ht(lt.Er)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ep(s,e,i,r);this.mutationQueue.push(a);for(const c of r)this.br=this.br.add(new lt(c.key,s)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return B.resolve(a)}lookupMutationBatch(t,e){return B.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,r=this.vr(i),s=r<0?0:r;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new lt(e,0),r=new lt(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,r],a=>{const c=this.Dr(a.wr);s.push(c)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new ht(K);return e.forEach(r=>{const s=new lt(r,0),a=new lt(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],c=>{i=i.add(c.wr)})}),B.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,r=i.length+1;let s=i;j.isDocumentKey(s)||(s=s.child(""));const a=new lt(new j(s),0);let c=new ht(K);return this.br.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===r&&(c=c.add(u.wr)),!0)},a),B.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(i=>{const r=this.Dr(i);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){X(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return B.forEach(e.mutations,r=>{const s=new lt(r.key,e.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new lt(e,0),r=this.br.firstAfterOrEqual(i);return B.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Lp{constructor(t){this.Mr=t,this.docs=function(){return new nt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,r=this.docs.get(i),s=r?r.size:0,a=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return B.resolve(i?i.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let i=Xt();return e.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():At.newInvalidDocument(r))}),B.resolve(i)}getDocumentsMatchingQuery(t,e,i,r){let s=Xt();const a=e.path,c=new j(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||vh(yh(f),i)<=0||(r.has(f.key)||zi(e,f))&&(s=s.insert(f.key,f.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(t,e,i,r){q()}Or(t,e){return B.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Mp(this)}getSize(t){return B.resolve(this.size)}}class Mp extends Pp{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(i)}),B.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Op{constructor(t){this.persistence=t,this.Nr=new Ge(e=>fo(e),mo),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new _o,this.targetCount=0,this.kr=qe.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,r)=>e(r)),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),B.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new qe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,B.resolve()}updateTargetData(t,e){return this.Kn(e),B.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,e,i){let r=0;const s=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,c.targetId)),r++)}),B.waitFor(s).next(()=>r)}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return B.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),B.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(a=>{s.push(r.markPotentiallyOrphaned(t,a))}),B.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),B.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return B.resolve(i)}containsKey(t,e){return B.resolve(this.Br.containsKey(e))}}/**
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
 */class Fp{constructor(t,e){this.qr={},this.overlays={},this.Qr=new co(0),this.Kr=!1,this.Kr=!0,this.$r=new Np,this.referenceDelegate=t(this),this.Ur=new Op(this),this.indexManager=new Rp,this.remoteDocumentCache=function(r){return new Lp(r)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new xp(e),this.Gr=new Dp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new kp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new Bp(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){z("MemoryPersistence","Starting transaction:",t);const r=new zp(this.Qr.next());return this.referenceDelegate.zr(),i(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(t,e){return B.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class zp extends _h{constructor(t){super(),this.currentSequenceNumber=t}}class bo{constructor(t){this.persistence=t,this.Jr=new _o,this.Yr=null}static Zr(t){return new bo(t)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),B.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),B.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),B.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,i=>{const r=j.fromPath(i);return this.ei(t,r).next(s=>{s||e.removeEntry(r,H.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return B.or([()=>B.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Eo{constructor(t,e,i,r){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=r}static Wi(t,e){let i=W(),r=W();for(const s of e.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Eo(t,e.fromCache,i,r)}}/**
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
 */class jp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class qp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Hu()?8:bh(ju())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,r){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,r,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new jp;return this.Xi(t,e,a).next(c=>{if(s.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>s.result)}es(t,e,i,r){return i.documentReadCount<this.ji?(fn()<=$.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(fn()<=$.DEBUG&&z("QueryEngine","Query:",ke(e),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Hi*r?(fn()<=$.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ot(e))):B.resolve())}Yi(t,e){if(ba(e))return B.resolve(null);let i=Ot(e);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Gr(e,null,"F"),i=Ot(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=W(...s);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,i).next(u=>{const h=this.ts(e,c);return this.ns(e,h,a,u.readTime)?this.Yi(t,Gr(e,null,"F")):this.rs(t,h,e,u)}))})))}Zi(t,e,i,r){return ba(e)||r.isEqual(H.min())?B.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const a=this.ts(e,s);return this.ns(e,a,i,r)?B.resolve(null):(fn()<=$.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ke(e)),this.rs(t,a,e,gh(r,-1)).next(c=>c))})}ts(t,e){let i=new ht(Dl(t));return e.forEach((r,s)=>{zi(t,s)&&(i=i.add(s))}),i}ns(t,e,i,r){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,e,i){return fn()<=$.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",ke(e)),this.Ji.getDocumentsMatchingQuery(t,e,se.min(),i)}rs(t,e,i,r){return this.Ji.getDocumentsMatchingQuery(t,i,r).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class Hp{constructor(t,e,i,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new nt(K),this._s=new Ge(s=>fo(s),mo),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Up(n,t,e,i){return new Hp(n,t,e,i)}async function Yl(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let r;return e.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],c=[];let u=W();for(const h of r){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(i,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function Wp(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const g=h.batch,y=g.keys();let C=B.resolve();return y.forEach(N=>{C=C.next(()=>f.getEntry(u,N)).next(R=>{const v=h.docVersions.get(N);X(v!==null),R.version.compareTo(v)<0&&(g.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(e,i,t,s).next(()=>s.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let u=W();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(t))).next(()=>e.localDocuments.getDocuments(i,r))})}function tc(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Qp(n,t){const e=U(n),i=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const c=[];t.targetChanges.forEach((f,g)=>{const y=r.get(g);if(!y)return;c.push(e.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>e.Ur.addMatchingKeys(s,f.addedDocuments,g)));let C=y.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(g)!==null?C=C.withResumeToken(pt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,i)),r=r.insert(g,C),function(R,v,x){return R.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(y,C,f)&&c.push(e.Ur.updateTargetData(s,C))});let u=Xt(),h=W();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push($p(s,a,t.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!i.isEqual(H.min())){const f=e.Ur.getLastRemoteSnapshotVersion(s).next(g=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));c.push(f)}return B.waitFor(c).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(e.os=r,s))}function $p(n,t,e){let i=W(),r=W();return e.forEach(s=>i=i.add(s)),t.getEntries(n,i).next(s=>{let a=Xt();return e.forEach((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),u.isNoDocument()&&u.version.isEqual(H.min())?(t.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(c,u)):z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:r}})}function Gp(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function Kp(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return e.Ur.getTargetData(i,t).next(s=>s?(r=s,B.resolve(r)):e.Ur.allocateTargetId(i).next(a=>(r=new ne(t,a,"TargetPurposeListen",i.currentSequenceNumber),e.Ur.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=e.os.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(i.targetId,i),e._s.set(t,i.targetId)),i})}async function Yr(n,t,e){const i=U(n),r=i.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Bn(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(r.target)}function Da(n,t,e){const i=U(n);let r=H.min(),s=W();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const g=U(u),y=g._s.get(f);return y!==void 0?B.resolve(g.os.get(y)):g.Ur.getTargetData(h,f)}(i,a,Ot(t)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,e?r:H.min(),e?s:W())).next(c=>(Xp(i,Fh(t),c),{documents:c,Ts:s})))}function Xp(n,t,e){let i=n.us.get(t)||H.min();e.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.us.set(t,i)}class ka{constructor(){this.activeTargetIds=Wh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jp{constructor(){this.so=new ka,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new ka,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Na{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mi=null;function Pr(){return mi===null?mi=function(){return 268435456+Math.round(2147483648*Math.random())}():mi++,"0x"+mi.toString(16)}/**
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
 */const yt="WebChannelConnection";class ef extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(e,i,r,s,a){const c=Pr(),u=this.xo(e,i.toUriEncodedString());z("RestConnection",`Sending RPC '${e}' ${c}:`,u,r);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(e,u,h,r).then(f=>(z("RestConnection",`Received RPC '${e}' ${c}: `,f),f),f=>{throw Oe("RestConnection",`RPC '${e}' ${c} failed with error: `,f,"url: ",u,"request:",r),f})}Lo(e,i,r,s,a,c){return this.Mo(e,i,r,s,a)}Oo(e,i,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>e[a]=s),r&&r.headers.forEach((s,a)=>e[a]=s)}xo(e,i){const r=Yp[e];return`${this.Do}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,r){const s=Pr();return new Promise((a,c)=>{const u=new fl;u.setWithCredentials(!0),u.listenOnce(ml.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case yi.NO_ERROR:const f=u.getResponseJson();z(yt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(f)),a(f);break;case yi.TIMEOUT:z(yt,`RPC '${t}' ${s} timed out`),c(new F(k.DEADLINE_EXCEEDED,"Request time out"));break;case yi.HTTP_ERROR:const g=u.getStatus();if(z(yt,`RPC '${t}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const C=y==null?void 0:y.error;if(C&&C.status&&C.message){const N=function(v){const x=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(x)>=0?x:k.UNKNOWN}(C.status);c(new F(N,C.message))}else c(new F(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new F(k.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{z(yt,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(r);z(yt,`RPC '${t}' ${s} sending request:`,r),u.send(e,"POST",h,i,15)})}Bo(t,e,i){const r=Pr(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=vl(),c=yl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,i),u.encodeInitMessageHeaders=!0;const f=s.join("");z(yt,`Creating RPC '${t}' stream ${r}: ${f}`,u);const g=a.createWebChannel(f,u);let y=!1,C=!1;const N=new tf({Io:v=>{C?z(yt,`Not sending because RPC '${t}' stream ${r} is closed:`,v):(y||(z(yt,`Opening RPC '${t}' stream ${r} transport.`),g.open(),y=!0),z(yt,`RPC '${t}' stream ${r} sending:`,v),g.send(v))},To:()=>g.close()}),R=(v,x,P)=>{v.listen(x,L=>{try{P(L)}catch(V){setTimeout(()=>{throw V},0)}})};return R(g,mn.EventType.OPEN,()=>{C||(z(yt,`RPC '${t}' stream ${r} transport opened.`),N.yo())}),R(g,mn.EventType.CLOSE,()=>{C||(C=!0,z(yt,`RPC '${t}' stream ${r} transport closed`),N.So())}),R(g,mn.EventType.ERROR,v=>{C||(C=!0,Oe(yt,`RPC '${t}' stream ${r} transport errored:`,v),N.So(new F(k.UNAVAILABLE,"The operation could not be completed")))}),R(g,mn.EventType.MESSAGE,v=>{var x;if(!C){const P=v.data[0];X(!!P);const L=P,V=L.error||((x=L[0])===null||x===void 0?void 0:x.error);if(V){z(yt,`RPC '${t}' stream ${r} received error:`,V);const M=V.status;let D=function(_){const E=ot[_];if(E!==void 0)return Hl(E)}(M),b=V.message;D===void 0&&(D=k.INTERNAL,b="Unknown error status: "+M+" with message "+V.message),C=!0,N.So(new F(D,b)),g.close()}else z(yt,`RPC '${t}' stream ${r} received:`,P),N.bo(P)}}),R(c,gl.STAT_EVENT,v=>{v.stat===qr.PROXY?z(yt,`RPC '${t}' stream ${r} detected buffering proxy`):v.stat===qr.NOPROXY&&z(yt,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Sr(){return typeof document<"u"?document:null}/**
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
 */function Wi(n){return new dp(n,!0)}/**
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
 */class ec{constructor(t,e,i=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-i);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class nc{constructor(t,e,i,r,s,a,c,u){this.ui=t,this.Ho=i,this.Jo=r,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ec(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===k.RESOURCE_EXHAUSTED?(Kt(e.toString()),Kt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Yo===e&&this.P_(i,r)},i=>{t(()=>{const r=new F(k.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(r)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{i(()=>this.I_(r))}),this.stream.onMessage(r=>{i(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nf extends nc{constructor(t,e,i,r,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,r,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=fp(this.serializer,t),i=function(s){if(!("targetChange"in s))return H.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Ft(a.readTime):H.min()}(t);return this.listener.d_(e,i)}A_(t){const e={};e.database=Zr(this.serializer),e.addTarget=function(s,a){let c;const u=a.target;if(c=Qr(u)?{documents:yp(s,u)}:{query:vp(s,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ql(s,a.resumeToken);const h=Kr(s,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=Ci(s,a.snapshotVersion.toTimestamp());const h=Kr(s,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,t);const i=_p(this.serializer,t);i&&(e.labels=i),this.a_(e)}R_(t){const e={};e.database=Zr(this.serializer),e.removeTarget=t,this.a_(e)}}class rf extends nc{constructor(t,e,i,r,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,r,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return X(!!t.streamToken),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=gp(t.writeResults,t.commitTime),i=Ft(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=Zr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>mp(this.serializer,i))};this.a_(e)}}/**
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
 */class of extends class{}{constructor(t,e,i,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,Xr(e,i),r,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(k.UNKNOWN,s.toString())})}Lo(t,e,i,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,Xr(e,i),r,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(k.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class sf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Kt(e),this.D_=!1):z("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class af{constructor(t,e,i,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{i.enqueueAndForget(async()=>{we(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=U(u);h.L_.add(4),await On(h),h.q_.set("Unknown"),h.L_.delete(4),await Qi(h)}(this))})}),this.q_=new sf(i,r)}}async function Qi(n){if(we(n))for(const t of n.B_)await t(!0)}async function On(n){for(const t of n.B_)await t(!1)}function ic(n,t){const e=U(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),To(e)?xo(e):Ke(e).r_()&&wo(e,t))}function Io(n,t){const e=U(n),i=Ke(e);e.N_.delete(t),i.r_()&&rc(e,t),e.N_.size===0&&(i.r_()?i.o_():we(e)&&e.q_.set("Unknown"))}function wo(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ke(n).A_(t)}function rc(n,t){n.Q_.xe(t),Ke(n).R_(t)}function xo(n){n.Q_=new ap({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ke(n).start(),n.q_.v_()}function To(n){return we(n)&&!Ke(n).n_()&&n.N_.size>0}function we(n){return U(n).L_.size===0}function oc(n){n.Q_=void 0}async function lf(n){n.q_.set("Online")}async function cf(n){n.N_.forEach((t,e)=>{wo(n,t)})}async function uf(n,t){oc(n),To(n)?(n.q_.M_(t),xo(n)):n.q_.set("Unknown")}async function df(n,t,e){if(n.q_.set("Online"),t instanceof Wl&&t.state===2&&t.cause)try{await async function(r,s){const a=s.cause;for(const c of s.targetIds)r.N_.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.N_.delete(c),r.Q_.removeTarget(c))}(n,t)}catch(i){z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Pi(n,i)}else if(t instanceof _i?n.Q_.Ke(t):t instanceof Ul?n.Q_.He(t):n.Q_.We(t),!e.isEqual(H.min()))try{const i=await tc(n.localStore);e.compareTo(i)>=0&&await function(s,a){const c=s.Q_.rt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(pt.EMPTY_BYTE_STRING,f.snapshotVersion)),rc(s,u);const g=new ne(f.target,u,h,f.sequenceNumber);wo(s,g)}),s.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(i){z("RemoteStore","Failed to raise snapshot:",i),await Pi(n,i)}}async function Pi(n,t,e){if(!Bn(t))throw t;n.L_.add(1),await On(n),n.q_.set("Offline"),e||(e=()=>tc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Qi(n)})}function sc(n,t){return t().catch(e=>Pi(n,e,t))}async function $i(n){const t=U(n),e=le(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;hf(t);)try{const r=await Gp(t.localStore,i);if(r===null){t.O_.length===0&&e.o_();break}i=r.batchId,pf(t,r)}catch(r){await Pi(t,r)}ac(t)&&lc(t)}function hf(n){return we(n)&&n.O_.length<10}function pf(n,t){n.O_.push(t);const e=le(n);e.r_()&&e.V_&&e.m_(t.mutations)}function ac(n){return we(n)&&!le(n).n_()&&n.O_.length>0}function lc(n){le(n).start()}async function ff(n){le(n).p_()}async function mf(n){const t=le(n);for(const e of n.O_)t.m_(e.mutations)}async function gf(n,t,e){const i=n.O_.shift(),r=yo.from(i,t,e);await sc(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await $i(n)}async function yf(n,t){t&&le(n).V_&&await async function(i,r){if(function(a){return rp(a)&&a!==k.ABORTED}(r.code)){const s=i.O_.shift();le(i).s_(),await sc(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await $i(i)}}(n,t),ac(n)&&lc(n)}async function Ba(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const i=we(e);e.L_.add(3),await On(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Qi(e)}async function vf(n,t){const e=U(n);t?(e.L_.delete(2),await Qi(e)):t||(e.L_.add(2),await On(e),e.q_.set("Unknown"))}function Ke(n){return n.K_||(n.K_=function(e,i,r){const s=U(e);return s.w_(),new nf(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:lf.bind(null,n),Ro:cf.bind(null,n),mo:uf.bind(null,n),d_:df.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),To(n)?xo(n):n.q_.set("Unknown")):(await n.K_.stop(),oc(n))})),n.K_}function le(n){return n.U_||(n.U_=function(e,i,r){const s=U(e);return s.w_(),new rf(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ff.bind(null,n),mo:yf.bind(null,n),f_:mf.bind(null,n),g_:gf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await $i(n)):(await n.U_.stop(),n.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ro{constructor(t,e,i,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,r,s){const a=Date.now()+i,c=new Ro(t,e,a,r,s);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Co(n,t){if(Kt("AsyncQueue",`${t}: ${n}`),Bn(n))return new F(k.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Me{constructor(t){this.comparator=t?(e,i)=>t(e,i)||j.comparator(e.key,i.key):(e,i)=>j.comparator(e.key,i.key),this.keyedMap=gn(),this.sortedSet=new nt(this.comparator)}static emptySet(t){return new Me(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Me)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class La{constructor(){this.W_=new nt(j.comparator)}track(t){const e=t.doc.key,i=this.W_.get(e);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(e,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(e):t.type===1&&i.type===2?this.W_=this.W_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):q():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,i)=>{t.push(i)}),t}}class He{constructor(t,e,i,r,s,a,c,u,h){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,i,r,s){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new He(t,e,Me.emptySet(e),a,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Fi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==i[r].type||!e[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class Af{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class _f{constructor(){this.queries=Ma(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const r=U(e),s=r.queries;r.queries=Ma(),s.forEach((a,c)=>{for(const u of c.j_)u.onError(i)})})(this,new F(k.ABORTED,"Firestore shutting down"))}}function Ma(){return new Ge(n=>Vl(n),Fi)}async function Po(n,t){const e=U(n);let i=3;const r=t.query;let s=e.queries.get(r);s?!s.H_()&&t.J_()&&(i=2):(s=new Af,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await e.onListen(r,!0);break;case 1:s.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(a){const c=Co(a,`Initialization of query '${ke(t.query)}' failed`);return void t.onError(c)}e.queries.set(r,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Vo(e)}async function So(n,t){const e=U(n),i=t.query;let r=3;const s=e.queries.get(i);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?r=t.J_()?0:1:!s.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function bf(n,t){const e=U(n);let i=!1;for(const r of t){const s=r.query,a=e.queries.get(s);if(a){for(const c of a.j_)c.X_(r)&&(i=!0);a.z_=r}}i&&Vo(e)}function Ef(n,t,e){const i=U(n),r=i.queries.get(t);if(r)for(const s of r.j_)s.onError(e);i.queries.delete(t)}function Vo(n){n.Y_.forEach(t=>{t.next()})}var to,Oa;(Oa=to||(to={})).ea="default",Oa.Cache="cache";class Do{constructor(t,e,i){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new He(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const i=e!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=He.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==to.Cache}}/**
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
 */class cc{constructor(t){this.key=t}}class uc{constructor(t){this.key=t}}class If{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=Dl(t),this.Ra=new Me(this.Aa)}get Va(){return this.Ta}ma(t,e){const i=e?e.fa:new La,r=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=r,c=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((f,g)=>{const y=r.get(f),C=zi(this.query,g)?g:null,N=!!y&&this.mutatedKeys.has(y.key),R=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let v=!1;y&&C?y.data.isEqual(C.data)?N!==R&&(i.track({type:3,doc:C}),v=!0):this.ga(y,C)||(i.track({type:2,doc:C}),v=!0,(u&&this.Aa(C,u)>0||h&&this.Aa(C,h)<0)&&(c=!0)):!y&&C?(i.track({type:0,doc:C}),v=!0):y&&!C&&(i.track({type:1,doc:y}),v=!0,(u||h)&&(c=!0)),v&&(C?(a=a.add(C),s=R?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),i.track({type:1,doc:f})}return{Ra:a,fa:i,ns:c,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((f,g)=>function(C,N){const R=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return R(C)-R(N)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(i),r=r!=null&&r;const c=e&&!r?this.ya():[],u=this.da.size===0&&this.current&&!r?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new He(this.query,t.Ra,s,a,t.mutatedKeys,u===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new La,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=W(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const e=[];return t.forEach(i=>{this.da.has(i)||e.push(new uc(i))}),this.da.forEach(i=>{t.has(i)||e.push(new cc(i))}),e}ba(t){this.Ta=t.Ts,this.da=W();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return He.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wf{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class xf{constructor(t){this.key=t,this.va=!1}}class Tf{constructor(t,e,i,r,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ge(c=>Vl(c),Fi),this.Ma=new Map,this.xa=new Set,this.Oa=new nt(j.comparator),this.Na=new Map,this.La=new _o,this.Ba={},this.ka=new Map,this.qa=qe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Rf(n,t,e=!0){const i=gc(n);let r;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await dc(i,t,e,!0),r}async function Cf(n,t){const e=gc(n);await dc(e,t,!0,!1)}async function dc(n,t,e,i){const r=await Kp(n.localStore,Ot(t)),s=r.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let c;return i&&(c=await Pf(n,t,s,a==="current",r.resumeToken)),n.isPrimaryClient&&e&&ic(n.remoteStore,r),c}async function Pf(n,t,e,i,r){n.Ka=(g,y,C)=>async function(R,v,x,P){let L=v.view.ma(x);L.ns&&(L=await Da(R.localStore,v.query,!1).then(({documents:b})=>v.view.ma(b,L)));const V=P&&P.targetChanges.get(v.targetId),M=P&&P.targetMismatches.get(v.targetId)!=null,D=v.view.applyChanges(L,R.isPrimaryClient,V,M);return za(R,v.targetId,D.wa),D.snapshot}(n,g,y,C);const s=await Da(n.localStore,t,!0),a=new If(t,s.Ts),c=a.ma(s.documents),u=Mn.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",r),h=a.applyChanges(c,n.isPrimaryClient,u);za(n,e,h.wa);const f=new wf(t,e,a);return n.Fa.set(t,f),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),h.snapshot}async function Sf(n,t,e){const i=U(n),r=i.Fa.get(t),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter(a=>!Fi(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Yr(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),e&&Io(i.remoteStore,r.targetId),eo(i,r.targetId)}).catch(Nn)):(eo(i,r.targetId),await Yr(i.localStore,r.targetId,!0))}async function Vf(n,t){const e=U(n),i=e.Fa.get(t),r=e.Ma.get(i.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Io(e.remoteStore,i.targetId))}async function Df(n,t,e){const i=Ff(n);try{const r=await function(a,c){const u=U(a),h=at.now(),f=c.reduce((C,N)=>C.add(N.key),W());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=Xt(),R=W();return u.cs.getEntries(C,f).next(v=>{N=v,N.forEach((x,P)=>{P.isValidDocument()||(R=R.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,N)).next(v=>{g=v;const x=[];for(const P of c){const L=Yh(P,g.get(P.key).overlayedDocument);L!=null&&x.push(new ce(P.key,L,Il(L.value.mapValue),It.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,x,c)}).next(v=>{y=v;const x=v.applyToLocalDocumentSet(g,R);return u.documentOverlayCache.saveOverlays(C,v.batchId,x)})}).then(()=>({batchId:y.batchId,changes:Nl(g)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(a,c,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new nt(K)),h=h.insert(c,u),a.Ba[a.currentUser.toKey()]=h}(i,r.batchId,e),await Fn(i,r.changes),await $i(i.remoteStore)}catch(r){const s=Co(r,"Failed to persist write");e.reject(s)}}async function hc(n,t){const e=U(n);try{const i=await Qp(e.localStore,t);t.targetChanges.forEach((r,s)=>{const a=e.Na.get(s);a&&(X(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.va=!0:r.modifiedDocuments.size>0?X(a.va):r.removedDocuments.size>0&&(X(a.va),a.va=!1))}),await Fn(e,i,t)}catch(i){await Nn(i)}}function Fa(n,t,e){const i=U(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const r=[];i.Fa.forEach((s,a)=>{const c=a.view.Z_(t);c.snapshot&&r.push(c.snapshot)}),function(a,c){const u=U(a);u.onlineState=c;let h=!1;u.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(c)&&(h=!0)}),h&&Vo(u)}(i.eventManager,t),r.length&&i.Ca.d_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function kf(n,t,e){const i=U(n);i.sharedClientState.updateQueryState(t,"rejected",e);const r=i.Na.get(t),s=r&&r.key;if(s){let a=new nt(j.comparator);a=a.insert(s,At.newNoDocument(s,H.min()));const c=W().add(s),u=new Ui(H.min(),new Map,new nt(K),a,c);await hc(i,u),i.Oa=i.Oa.remove(s),i.Na.delete(t),ko(i)}else await Yr(i.localStore,t,!1).then(()=>eo(i,t,e)).catch(Nn)}async function Nf(n,t){const e=U(n),i=t.batch.batchId;try{const r=await Wp(e.localStore,t);fc(e,i,null),pc(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Fn(e,r)}catch(r){await Nn(r)}}async function Bf(n,t,e){const i=U(n);try{const r=await function(a,c){const u=U(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(g=>(X(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(i.localStore,t);fc(i,t,e),pc(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Fn(i,r)}catch(r){await Nn(r)}}function pc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function fc(n,t,e){const i=U(n);let r=i.Ba[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),i.Ba[i.currentUser.toKey()]=r}}function eo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Ma.get(t))n.Fa.delete(i),e&&n.Ca.$a(i,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(i=>{n.La.containsKey(i)||mc(n,i)})}function mc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Io(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),ko(n))}function za(n,t,e){for(const i of e)i instanceof cc?(n.La.addReference(i.key,t),Lf(n,i)):i instanceof uc?(z("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,t),n.La.containsKey(i.key)||mc(n,i.key)):q()}function Lf(n,t){const e=t.key,i=e.path.canonicalString();n.Oa.get(e)||n.xa.has(i)||(z("SyncEngine","New document in limbo: "+e),n.xa.add(i),ko(n))}function ko(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new j(tt.fromString(t)),i=n.qa.next();n.Na.set(i,new xf(e)),n.Oa=n.Oa.insert(e,i),ic(n.remoteStore,new ne(Ot(Oi(e.path)),i,"TargetPurposeLimboResolution",co.oe))}}async function Fn(n,t,e){const i=U(n),r=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((c,u)=>{a.push(i.Ka(u,t,e).then(h=>{var f;if((h||e)&&i.isPrimaryClient){const g=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){r.push(h);const g=Eo.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(a),i.Ca.d_(r),await async function(u,h){const f=U(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>B.forEach(h,y=>B.forEach(y.$i,C=>f.persistence.referenceDelegate.addReference(g,y.targetId,C)).next(()=>B.forEach(y.Ui,C=>f.persistence.referenceDelegate.removeReference(g,y.targetId,C)))))}catch(g){if(!Bn(g))throw g;z("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const C=f.os.get(y),N=C.snapshotVersion,R=C.withLastLimboFreeSnapshotVersion(N);f.os=f.os.insert(y,R)}}}(i.localStore,s))}async function Mf(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){z("SyncEngine","User change. New user:",t.toKey());const i=await Yl(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(c=>{c.forEach(u=>{u.reject(new F(k.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Fn(e,i.hs)}}function Of(n,t){const e=U(n),i=e.Na.get(t);if(i&&i.va)return W().add(i.key);{let r=W();const s=e.Ma.get(t);if(!s)return r;for(const a of s){const c=e.Fa.get(a);r=r.unionWith(c.view.Va)}return r}}function gc(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=hc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Of.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kf.bind(null,t),t.Ca.d_=bf.bind(null,t.eventManager),t.Ca.$a=Ef.bind(null,t.eventManager),t}function Ff(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Nf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bf.bind(null,t),t}class Si{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Wi(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Up(this.persistence,new qp,t.initialUser,this.serializer)}Ga(t){return new Fp(bo.Zr,this.serializer)}Wa(t){return new Jp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Si.provider={build:()=>new Si};class no{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Fa(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mf.bind(null,this.syncEngine),await vf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _f}()}createDatastore(t){const e=Wi(t.databaseInfo.databaseId),i=function(s){return new ef(s)}(t.databaseInfo);return function(s,a,c,u){return new of(s,a,c,u)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,r,s,a,c){return new af(i,r,s,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Fa(this.syncEngine,e,0),function(){return Na.D()?new Na:new Zp}())}createSyncEngine(t,e){return function(r,s,a,c,u,h,f){const g=new Tf(r,s,a,c,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=U(r);z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await On(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}no.provider={build:()=>new no};/**
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
 */class No{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Kt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class zf{constructor(t,e,i,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=r,this.user=vt.UNAUTHENTICATED,this.clientId=_l.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async a=>{z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Co(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Vr(n,t){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await Yl(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ja(n,t){n.asyncQueue.verifyOperationInProgress();const e=await jf(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Ba(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Ba(t.remoteStore,r)),n._onlineComponents=t}async function jf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===k.FAILED_PRECONDITION||r.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Oe("Error using user provided cache. Falling back to memory cache: "+e),await Vr(n,new Si)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Vr(n,new Si);return n._offlineComponents}async function yc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await ja(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await ja(n,new no))),n._onlineComponents}function qf(n){return yc(n).then(t=>t.syncEngine)}async function Vi(n){const t=await yc(n),e=t.eventManager;return e.onListen=Rf.bind(null,t.syncEngine),e.onUnlisten=Sf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Cf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vf.bind(null,t.syncEngine),e}function Hf(n,t,e={}){const i=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,h){const f=new No({next:y=>{f.Za(),a.enqueueAndForget(()=>So(s,g));const C=y.docs.has(c);!C&&y.fromCache?h.reject(new F(k.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&y.fromCache&&u&&u.source==="server"?h.reject(new F(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new Do(Oi(c.path),f,{includeMetadataChanges:!0,_a:!0});return Po(s,g)}(await Vi(n),n.asyncQueue,t,e,i)),i.promise}function Uf(n,t,e={}){const i=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,h){const f=new No({next:y=>{f.Za(),a.enqueueAndForget(()=>So(s,g)),y.fromCache&&u.source==="server"?h.reject(new F(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new Do(c,f,{includeMetadataChanges:!0,_a:!0});return Po(s,g)}(await Vi(n),n.asyncQueue,t,e,i)),i.promise}/**
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
 */function vc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const qa=new Map;/**
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
 */function Ac(n,t,e){if(!e)throw new F(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Wf(n,t,e,i){if(t===!0&&i===!0)throw new F(k.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ha(n){if(!j.isDocumentKey(n))throw new F(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ua(n){if(j.isDocumentKey(n))throw new F(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q()}function wt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new F(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Gi(n);throw new F(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Wa{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new F(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Wf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vc((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ki{constructor(t,e,i,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new F(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wa(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ah;switch(i.type){case"firstParty":return new dh(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new F(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=qa.get(e);i&&(z("ComponentProvider","Removing Datastore"),qa.delete(e),i.terminate())}(this),Promise.resolve()}}function Qf(n,t,e,i={}){var r;const s=(n=wt(n,Ki))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Oe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let c,u;if(typeof i.mockUserToken=="string")c=i.mockUserToken,u=vt.MOCK_USER;else{c=zu(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new F(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new vt(h)}n._authCredentials=new lh(new Al(c,u))}}/**
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
 */class ue{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ue(this.firestore,t,this._query)}}class _t{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}}class oe extends ue{constructor(t,e,i){super(t,e,Oi(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new j(t))}withConverter(t){return new oe(this.firestore,t,this._path)}}function Tt(n,t,...e){if(n=Nt(n),Ac("collection","path",t),n instanceof Ki){const i=tt.fromString(t,...e);return Ua(i),new oe(n,null,i)}{if(!(n instanceof _t||n instanceof oe))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(tt.fromString(t,...e));return Ua(i),new oe(n.firestore,null,i)}}function qt(n,t,...e){if(n=Nt(n),arguments.length===1&&(t=_l.newId()),Ac("doc","path",t),n instanceof Ki){const i=tt.fromString(t,...e);return Ha(i),new _t(n,null,new j(i))}{if(!(n instanceof _t||n instanceof oe))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(tt.fromString(t,...e));return Ha(i),new _t(n.firestore,n instanceof oe?n.converter:null,new j(i))}}/**
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
 */class Qa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ec(this,"async_queue_retry"),this.Vu=()=>{const i=Sr();i&&z("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=Sr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Sr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new $t;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Bn(t))throw t;z("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const r=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(i);throw Kt("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=Ro.createAndSchedule(this,t,e,i,s=>this.yu(s));return this.Tu.push(r),r}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function $a(n){return function(e,i){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class jt extends Ki{constructor(t,e,i,r){super(t,e,i,r),this.type="firestore",this._queue=new Qa,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qa(t),this._firestoreClient=void 0,await t}}}function $f(n,t){const e=typeof n=="object"?n:Kd(),i=typeof n=="string"?n:"(default)",r=Wd(e,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Ou("firestore");s&&Qf(r,...s)}return r}function zn(n){if(n._terminated)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gf(n),n._firestoreClient}function Gf(n){var t,e,i;const r=n._freezeSettings(),s=function(c,u,h,f){return new wh(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,vc(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new zf(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Xi{constructor(t){this._methodName=t}}/**
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
 */class Bo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
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
 */class Lo{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
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
 */const Kf=/^__.*__$/;class Xf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ln(t,this.data,e,this.fieldTransforms)}}class _c{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new ce(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function bc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Mo{constructor(t,e,i,r,s,a){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Mo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:i,xu:!1});return r.Ou(t),r}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:i,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Di(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(bc(this.Cu)&&Kf.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Jf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Wi(t)}Qu(t,e,i,r=!1){return new Mo({Cu:t,methodName:e,qu:i,path:dt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qn(n){const t=n._freezeSettings(),e=Wi(n._databaseId);return new Jf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Oo(n,t,e,i,r,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,r);zo("Data must be an object, but it was:",a,i);const c=wc(i,a);let u,h;if(s.merge)u=new Pt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const y=io(t,g,e);if(!a.contains(y))throw new F(k.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Tc(f,y)||f.push(y)}u=new Pt(f),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new Xf(new xt(c),u,h)}class Ji extends Xi{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ji}}class Fo extends Xi{_toFieldTransform(t){return new Kh(t.path,new Sn)}isEqual(t){return t instanceof Fo}}function Ec(n,t,e,i){const r=n.Qu(1,t,e);zo("Data must be an object, but it was:",r,i);const s=[],a=xt.empty();Ie(i,(u,h)=>{const f=jo(t,u,e);h=Nt(h);const g=r.Nu(f);if(h instanceof Ji)s.push(f);else{const y=Hn(h,g);y!=null&&(s.push(f),a.set(f,y))}});const c=new Pt(s);return new _c(a,c,r.fieldTransforms)}function Ic(n,t,e,i,r,s){const a=n.Qu(1,t,e),c=[io(t,i,e)],u=[r];if(s.length%2!=0)throw new F(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)c.push(io(t,s[y])),u.push(s[y+1]);const h=[],f=xt.empty();for(let y=c.length-1;y>=0;--y)if(!Tc(h,c[y])){const C=c[y];let N=u[y];N=Nt(N);const R=a.Nu(C);if(N instanceof Ji)h.push(C);else{const v=Hn(N,R);v!=null&&(h.push(C),f.set(C,v))}}const g=new Pt(h);return new _c(f,g,a.fieldTransforms)}function Zf(n,t,e,i=!1){return Hn(e,n.Qu(i?4:3,t))}function Hn(n,t){if(xc(n=Nt(n)))return zo("Unsupported field value:",t,n),wc(n,t);if(n instanceof Xi)return function(i,r){if(!bc(r.Cu))throw r.Bu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,r){const s=[];let a=0;for(const c of i){let u=Hn(c,r.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,t)}return function(i,r){if((i=Nt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Qh(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=at.fromDate(i);return{timestampValue:Ci(r.serializer,s)}}if(i instanceof at){const s=new at(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ci(r.serializer,s)}}if(i instanceof Bo)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ue)return{bytesValue:Ql(r.serializer,i._byteString)};if(i instanceof _t){const s=r.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw r.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ao(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof Lo)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return go(c.serializer,u)})}}}}}}(i,r);throw r.Bu(`Unsupported field value: ${Gi(i)}`)}(n,t)}function wc(n,t){const e={};return bl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ie(n,(i,r)=>{const s=Hn(r,t.Mu(i));s!=null&&(e[i]=s)}),{mapValue:{fields:e}}}function xc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof at||n instanceof Bo||n instanceof Ue||n instanceof _t||n instanceof Xi||n instanceof Lo)}function zo(n,t,e){if(!xc(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const i=Gi(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function io(n,t,e){if((t=Nt(t))instanceof jn)return t._internalPath;if(typeof t=="string")return jo(n,t);throw Di("Field path arguments must be of type string or ",n,!1,void 0,e)}const Yf=new RegExp("[~\\*/\\[\\]]");function jo(n,t,e){if(t.search(Yf)>=0)throw Di(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new jn(...t.split("."))._internalPath}catch{throw Di(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Di(n,t,e,i,r){const s=i&&!i.isEmpty(),a=r!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${i}`),a&&(u+=` in document ${r}`),u+=")"),new F(k.INVALID_ARGUMENT,c+n+u)}function Tc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Rc{constructor(t,e,i,r,s){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new tm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class tm extends Rc{data(){return super.data()}}function qo(n,t){return typeof t=="string"?jo(n,t):t instanceof jn?t._internalPath:t._delegate._internalPath}/**
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
 */function Cc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ho{}class Pc extends Ho{}function Zi(n,t,...e){let i=[];t instanceof Ho&&i.push(t),i=i.concat(e),function(s){const a=s.filter(u=>u instanceof Wo).length,c=s.filter(u=>u instanceof Uo).length;if(a>1||a>0&&c>0)throw new F(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)n=r._apply(n);return n}class Uo extends Pc{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new Uo(t,e,i)}_apply(t){const e=this._parse(t);return Sc(t._query,e),new ue(t.firestore,t.converter,$r(t._query,e))}_parse(t){const e=qn(t.firestore);return function(s,a,c,u,h,f,g){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ka(g,f);const C=[];for(const N of g)C.push(Ga(u,s,N));y={arrayValue:{values:C}}}else y=Ga(u,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ka(g,f),y=Zf(c,a,g,f==="in"||f==="not-in");return st.create(h,f,y)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Wo extends Ho{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Wo(t,e)}_parse(t){const e=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return e.length===1?e[0]:Mt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,s){let a=r;const c=s.getFlattenedFilters();for(const u of c)Sc(a,u),a=$r(a,u)}(t._query,e),new ue(t.firestore,t.converter,$r(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qo extends Pc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Qo(t,e)}_apply(t){const e=function(r,s,a){if(r.startAt!==null)throw new F(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new F(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pn(s,a)}(t._query,this._field,this._direction);return new ue(t.firestore,t.converter,function(r,s){const a=r.explicitOrderBy.concat([s]);return new $e(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function Yi(n,t="asc"){const e=t,i=qo("orderBy",n);return Qo._create(i,e)}function Ga(n,t,e){if(typeof(e=Nt(e))=="string"){if(e==="")throw new F(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sl(t)&&e.indexOf("/")!==-1)throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(tt.fromString(e));if(!j.isDocumentKey(i))throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ma(n,new j(i))}if(e instanceof _t)return ma(n,e._key);throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gi(e)}.`)}function Ka(n,t){if(!Array.isArray(n)||n.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Sc(n,t){const e=function(r,s){for(const a of r)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class em{convertValue(t,e="none"){switch(Ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(be(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return Ie(t,(r,s)=>{i[r]=this.convertValue(s,e)}),i}convertVectorValue(t){var e,i,r;const s=(r=(i=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(a=>rt(a.doubleValue));return new Lo(s)}convertGeoPoint(t){return new Bo(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=ho(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Tn(t));default:return null}}convertTimestamp(t){const e=ae(t);return new at(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=tt.fromString(t);X(Zl(i));const r=new Rn(i.get(1),i.get(3)),s=new j(i.popFirst(5));return r.isEqual(e)||Kt(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function $o(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}/**
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
 */class vn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vc extends Rc{constructor(t,e,i,r,s,a){super(t,e,i,r,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new bi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(qo("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class bi extends Vc{data(t={}){return super.data(t)}}class Dc{constructor(t,e,i,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new vn(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new bi(this._firestore,this._userDataWriter,i.key,i,new vn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{const u=new bi(r._firestore,r._userDataWriter,c.doc.key,c.doc,new vn(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new bi(r._firestore,r._userDataWriter,c.doc.key,c.doc,new vn(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:nm(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function kc(n){n=wt(n,_t);const t=wt(n.firestore,jt);return Hf(zn(t),n._key).then(e=>Lc(t,n,e))}class Go extends em{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _t(this.firestore,null,e)}}function Un(n){n=wt(n,ue);const t=wt(n.firestore,jt),e=zn(t),i=new Go(t);return Cc(n._query),Uf(e,n._query).then(r=>new Dc(t,i,n,r))}function Xa(n,t,e){n=wt(n,_t);const i=wt(n.firestore,jt),r=$o(n.converter,t,e);return Wn(i,[Oo(qn(i),"setDoc",n._key,r,n.converter!==null,e).toMutation(n._key,It.none())])}function Xe(n,t,e,...i){n=wt(n,_t);const r=wt(n.firestore,jt),s=qn(r);let a;return a=typeof(t=Nt(t))=="string"||t instanceof jn?Ic(s,"updateDoc",n._key,t,e,i):Ec(s,"updateDoc",n._key,t),Wn(r,[a.toMutation(n._key,It.exists(!0))])}function Nc(n){return Wn(wt(n.firestore,jt),[new Hi(n._key,It.none())])}function Bc(n,t){const e=wt(n.firestore,jt),i=qt(n),r=$o(n.converter,t);return Wn(e,[Oo(qn(n.firestore),"addDoc",i._key,r,n.converter!==null,{}).toMutation(i._key,It.exists(!1))]).then(()=>i)}function Je(n,...t){var e,i,r;n=Nt(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||$a(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if($a(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(i=g.error)===null||i===void 0?void 0:i.bind(g),t[a+2]=(r=g.complete)===null||r===void 0?void 0:r.bind(g)}let u,h,f;if(n instanceof _t)h=wt(n.firestore,jt),f=Oi(n._key.path),u={next:g=>{t[a]&&t[a](Lc(h,n,g))},error:t[a+1],complete:t[a+2]};else{const g=wt(n,ue);h=wt(g.firestore,jt),f=g._query;const y=new Go(h);u={next:C=>{t[a]&&t[a](new Dc(h,y,g,C))},error:t[a+1],complete:t[a+2]},Cc(n._query)}return function(y,C,N,R){const v=new No(R),x=new Do(C,v,N);return y.asyncQueue.enqueueAndForget(async()=>Po(await Vi(y),x)),()=>{v.Za(),y.asyncQueue.enqueueAndForget(async()=>So(await Vi(y),x))}}(zn(h),f,c,u)}function Wn(n,t){return function(i,r){const s=new $t;return i.asyncQueue.enqueueAndForget(async()=>Df(await qf(i),r,s)),s.promise}(zn(n),t)}function Lc(n,t,e){const i=e.docs.get(t._key),r=new Go(n);return new Vc(n,r,t._key,i,new vn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class im{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=qn(t)}set(t,e,i){this._verifyNotCommitted();const r=Dr(t,this._firestore),s=$o(r.converter,e,i),a=Oo(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(a.toMutation(r._key,It.none())),this}update(t,e,i,...r){this._verifyNotCommitted();const s=Dr(t,this._firestore);let a;return a=typeof(e=Nt(e))=="string"||e instanceof jn?Ic(this._dataReader,"WriteBatch.update",s._key,e,i,r):Ec(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,It.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Dr(t,this._firestore);return this._mutations=this._mutations.concat(new Hi(e._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Dr(n,t){if((n=Nt(n)).firestore!==t)throw new F(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Mc(){return new Fo("serverTimestamp")}/**
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
 */function Ko(n){return zn(n=wt(n,jt)),new im(n,t=>Wn(n,t))}(function(t,e=!0){(function(r){Qe=r})(Gd),wi(new In("firestore",(i,{instanceIdentifier:r,options:s})=>{const a=i.getProvider("app").getImmediate(),c=new jt(new ch(i.getProvider("auth-internal")),new ph(i.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(h.options.projectId,f)}(a,r),a);return s=Object.assign({useFetchStreams:e},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Le(ua,"4.7.3",t),Le(ua,"4.7.3","esm2017")})();const rm={apiKey:"AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",authDomain:"feria-vinos-sucovi-2027.firebaseapp.com",databaseURL:"https://feria-vinos-sucovi-2027-default-rtdb.firebaseio.com",projectId:"feria-vinos-sucovi-2027",storageBucket:"feria-vinos-sucovi-2027.firebasestorage.app",messagingSenderId:"1686119758",appId:"1:1686119758:web:2c3c6d96e36f1276052a1f",measurementId:"G-VRMTQ3SS7E"},om=ul(rm),et=$f(om),Ae=[{id:0,key:"368813",nombre:"Sucovi",region:"Pruebas / Bebidas",pass:"stand00"},{id:1,key:"d48429",nombre:"Alta Vista",region:"Mendoza",pass:"stand01"},{id:2,key:"ba356c",nombre:"Andillian",region:"Mendoza",pass:"stand02"},{id:3,key:"451e62",nombre:"Ante Nada",region:"Mendoza",pass:"stand03"},{id:4,key:"835c2d",nombre:"Bodega Benegas",region:"Mendoza",pass:"stand04"},{id:5,key:"e45a28",nombre:"Bianchi",region:"San Rafael",pass:"stand05"},{id:6,key:"12ac1c",nombre:"Catena Zapata",region:"Luján de Cuyo",pass:"stand06"},{id:7,key:"18abc3",nombre:"Bodegas Bórbore",region:"Mendoza (1936)",pass:"stand07"},{id:8,key:"452b71",nombre:"Fábula Wines",region:"Mendoza",pass:"stand08"},{id:9,key:"0c55a5",nombre:"Finca Iral",region:"Mendoza",pass:"stand09"},{id:10,key:"5cb108",nombre:"Giménez Riili",region:"Mendoza",pass:"stand10"},{id:11,key:"27f372",nombre:"Jorge Rubio",region:"Mendoza",pass:"stand11"},{id:12,key:"a9d27f",nombre:"La Coste de los Andes",region:"Mendoza",pass:"stand12"},{id:13,key:"b5be6e",nombre:"Las Perdices",region:"Mendoza",pass:"stand13"},{id:14,key:"7da93b",nombre:"Lorenzo de Agrelo",region:"Mendoza",pass:"stand14"},{id:15,key:"f52ab4",nombre:"Pannunzio Wines",region:"Mendoza",pass:"stand15"},{id:16,key:"a32dd6",nombre:"Bodega Patritti",region:"Mendoza",pass:"stand16"},{id:17,key:"175358",nombre:"Rosell Boher",region:"Mendoza",pass:"stand17"},{id:18,key:"4a2b00",nombre:"Valle de la Puerta",region:"La Rioja",pass:"stand18"}];async function ki(n){return await Bc(Tt(et,"invitados"),{...n,creadoEn:Mc()})}async function ye(n,t){await Xe(qt(et,"invitados",n),t)}function Qn(n){return Je(Zi(Tt(et,"invitados"),Yi("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}async function Ni(n){const e=(await Un(Tt(et,"invitados"))).docs.find(i=>i.data().token===n);return e?{fireId:e.id,...e.data()}:null}async function sm(n){const e=(await Un(Tt(et,"invitados"))).docs.find(i=>i.data().codigo===n);return e?{fireId:e.id,...e.data()}:null}async function Oc(n,t,e,i,r){const s=qt(et,"carritos",n,"items",String(t)),a=await kc(s);if(a.exists()){const c=a.data(),u=c.items||[],h=u.findIndex(f=>f.key===i.key);h>=0?u[h]=i:u.push(i),await Xa(s,{standId:t,standNombre:e,items:u,retiro:r||c.retiro||"stand"})}else await Xa(s,{standId:t,standNombre:e,items:[i],retiro:r||"stand"})}async function Xo(n,t,e){await Xe(qt(et,"carritos",n,"items",String(t)),{retiro:e})}async function Bi(n,t,e){const i=qt(et,"carritos",n,"items",String(t)),r=await kc(i);if(!r.exists())return;const s=(r.data().items||[]).filter(a=>a.key!==e);s.length?await Xe(i,{items:s}):await Nc(i)}async function ro(n){return(await Un(Tt(et,"carritos",n,"items"))).docs.map(e=>({standId:e.id,...e.data()}))}function Jo(n,t){return Je(Tt(et,"carritos",n,"items"),e=>t(e.docs.map(i=>({standDocId:i.id,...i.data()}))))}async function Fc(n){const t=await Un(Tt(et,"carritos",n,"items")),e=Ko(et);t.docs.forEach(i=>e.delete(i.ref)),await e.commit()}async function zc(n,t){const e=Ko(et),i=[];return t.forEach(r=>{const s=qt(Tt(et,"pedidos"));i.push(s),e.set(s,{invFireId:n.fireId,invNombre:n.nombre+" "+n.apellido,invCodigo:n.codigo,standId:r.standId,standNombre:r.standNombre,items:r.items||[],total:(r.items||[]).reduce((a,c)=>a+(c.sub||0),0),retiro:r.retiro||"stand",estado:"pagado",creadoEn:Mc()})}),await e.commit(),i.map(r=>r.id)}function tr(n){return Je(Zi(Tt(et,"pedidos"),Yi("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}function jc(n,t){return Je(Zi(Tt(et,"pedidos"),Yi("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>Number(i.standId)===Number(n))))}function qc(n,t){return Je(Zi(Tt(et,"pedidos"),Yi("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>i.invFireId===n)))}async function Hc(n){await Xe(qt(et,"pedidos",n),{estado:"entregado"})}async function Uc(n,t){const e={pendiente:"pagado",pagado:"listo",listo:"entregado"};e[t]&&await Xe(qt(et,"pedidos",n),{estado:e[t]})}function Zo(n,t){return Je(Tt(et,"bodegas",String(n),"vinos"),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()}))))}async function Wc(n,t){return await Bc(Tt(et,"bodegas",String(n),"vinos"),t)}async function Qc(n,t,e){await Xe(qt(et,"bodegas",String(n),"vinos",t),e)}async function $c(n,t){await Nc(qt(et,"bodegas",String(n),"vinos",t))}async function Gc(){const n=["invitados","pedidos"];for(const t of n){const e=await Un(Tt(et,t)),i=Ko(et);e.docs.forEach(r=>i.delete(r.ref)),await i.commit()}}const Li=Object.freeze(Object.defineProperty({__proto__:null,BODEGAS:Ae,actualizarInvitado:ye,actualizarRetiroStand:Xo,actualizarVino:Qc,agregarAlCarrito:Oc,avanzarEstado:Uc,buscarInvitadoPorCodigo:sm,buscarInvitadoPorToken:Ni,crearInvitado:ki,crearPedidosDesdeCarrito:zc,eliminarItemCarrito:Bi,eliminarVino:$c,escucharCarrito:Jo,escucharInvitados:Qn,escucharPedidos:tr,escucharPedidosPorInvitado:qc,escucharPedidosPorStand:jc,escucharVinos:Zo,guardarVino:Wc,leerCarrito:ro,limpiarDatosPrueba:Gc,marcarEntregado:Hc,vaciarCarrito:Fc},Symbol.toStringTag,{value:"Module"})),am="modulepreload",lm=function(n){return"/"+n},Ja={},kn=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(e.map(u=>{if(u=lm(u),u in Ja)return;Ja[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":am,h||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),h)return new Promise((y,C)=>{g.addEventListener("load",y),g.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return r.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})},Yo="data:image/png;base64,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";function kt({title:n,sub:t="",backHref:e="",backLabel:i="← Panel",actions:r=[]}={}){return`
    <div class="hdr">
      <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
        <img src="${Yo}" alt="Sucovi 2027"
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
    <div class="gold"></div>`}function oo(n){return`
    <div style="background:linear-gradient(160deg,#1A3A5C 0%,#2C5F8A 60%,#3A7D44 100%);
                color:#fff;padding:20px 16px 16px;text-align:center">
      <img src="${Yo}" alt="Sucovi 2027"
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
  `,document.head.appendChild(n)}async function cm(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Za(n,t,e){await cm();const i=document.getElementById(n);if(i)try{const r=qrcode(0,"M");r.addData(String(t)),r.make();const s=r.getModuleCount(),a=e/s;i.width=e,i.height=e;const c=i.getContext("2d");c.fillStyle="#fff",c.fillRect(0,0,e,e),c.fillStyle="#000";for(let u=0;u<s;u++)for(let h=0;h<s;h++)r.isDark(u,h)&&c.fillRect(h*a,u*a,a,a)}catch(r){console.error("QR error:",r)}}const gi=n=>Number(n).toLocaleString("es-AR"),Ya=()=>Math.random().toString(36).slice(2,10).toUpperCase(),tl=n=>"INV-"+String(n).padStart(4,"0");function el(n){return{pendiente:'<span class="badge b-pend">Pendiente</span>',pagado:'<span class="badge b-pago">Bono pagado</span>',ingresado:'<span class="badge b-ingr">Ingresó</span>',invalidado:'<span class="badge b-inv">Invalidado</span>'}[n]||""}const um={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},dm={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"};function hm(n){Ht();let t=[],e=[],i="inv",r=null;n.innerHTML=kt({title:"Sucovi 2027",sub:"20 jun 2026 · 19:30 hs · Roma 656, Olivos"})+`
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
            <option value="ingresado">Ingreso al evento</option>
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
          <button class="btn btn-a" id="mw-btn-p" style="flex:1;font-size:12px" onclick="window._pagarM()"></button>
        </div>
        <button class="btn" style="width:100%;margin-top:6px;font-size:12px" onclick="window._cModal()">Cerrar</button>
      </div>
    </div>`,Qn(R=>{t=R,i==="inv"&&s(),i==="res"&&g()}),tr(R=>{e=R,i==="ped"&&h(),i==="res"&&g()}),window._aTab=(R,v)=>{var P;i=R,document.querySelectorAll(".nav button").forEach(L=>L.classList.remove("on")),v.classList.add("on");const x={inv:s,reg:a,excel:c,ped:h,stands:f,res:g,config:y};(P=x[R])==null||P.call(x)};function s(){const R=document.getElementById("tab-content");document.getElementById("buscar-inv")||(R.innerHTML=`
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
        <div class="card" id="lista-inv"></div>`),window._fInv=()=>{var V,M;const v=(((V=document.getElementById("buscar-inv"))==null?void 0:V.value)||"").toLowerCase(),x=((M=document.getElementById("fil-est"))==null?void 0:M.value)||"",P=t.filter(D=>(D.nombre+" "+D.apellido+" "+(D.codigo||"")+" "+(D.familia||"")).toLowerCase().includes(v)&&(!x||D.estado===x)),L=document.getElementById("lista-inv");if(L){if(!P.length){L.innerHTML='<div class="empty">Sin resultados</div>';return}L.innerHTML=P.map(D=>{var b,m;return`
        <div class="row" style="${D.estado==="invalidado"?"opacity:.5":""}">
          <div class="avatar">${((b=D.nombre)==null?void 0:b[0])||"?"}${((m=D.apellido)==null?void 0:m[0])||""}</div>
          <div style="flex:1;min-width:80px">
            <div style="font-size:13px;font-weight:500">${D.nombre} ${D.apellido}</div>
            <div style="font-size:11px;color:#888">${D.tel}${D.familia?" · "+D.familia:""}</div>
          </div>
          <div style="font-size:11px;color:#aaa">${D.codigo||""}</div>
          ${el(D.estado)}
          <div style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">
            <button class="btn" style="padding:4px 8px;font-size:11px" onclick="window._abrirWA('${D.fireId}')">📱 WA</button>
            <button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._descargarQR('${D.fireId}')">📥 QR</button>
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInv('${D.fireId}')">✏️</button>
            ${D.estado!=="invalidado"?`<button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D" onclick="window._invalidar('${D.fireId}','${D.nombre} ${D.apellido}')">✕ Invalidar</button>`:`<button class="btn" style="padding:4px 8px;font-size:11px;color:#3B6D11;border-color:#3B6D11" onclick="window._reactivar('${D.fireId}')">↩ Reactivar</button>`}
          </div>
        </div>`}).join("")}},window._fInv()}window._invalidar=async(R,v)=>{confirm(`¿Invalidar a ${v}?`)&&await ye(R,{estado:"invalidado"})},window._reactivar=async R=>await ye(R,{estado:"pendiente"});function a(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}window._registrar=async()=>{const R=document.getElementById("rn").value.trim(),v=document.getElementById("ra").value.trim(),x=document.getElementById("rt").value.trim(),P=document.querySelector('input[name="rp"]:checked').value,L=document.getElementById("reg-msg");if(!R||!v||!x){L.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}L.innerHTML='<span style="color:#888">Guardando...</span>';try{const V=tl(t.length+1),M=Ya(),D=await ki({nombre:R,apellido:v,tel:x,...document.getElementById("re").value.trim()&&{email:document.getElementById("re").value.trim()},...document.getElementById("rf").value.trim()&&{familia:document.getElementById("rf").value.trim()},...document.getElementById("rc").value.trim()&&{comentarios:document.getElementById("rc").value.trim()},estado:P,codigo:V,token:M});L.innerHTML=`<span style="color:#3B6D11">✓ ${R} ${v} (${V})</span>`,["rn","ra","rt","re","rf","rc"].forEach(b=>{const m=document.getElementById(b);m&&(m.value="")}),P==="pagado"&&setTimeout(()=>window._abrirWA(D.id),600)}catch(V){L.innerHTML=`<span style="color:#A32D2D">Error: ${V.message}</span>`}};function c(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}let u=[];window._procesarExcel=async R=>{const v=R.files[0];if(!v)return;const x=document.getElementById("excel-preview");x.innerHTML='<p style="font-size:12px;color:#888">Procesando...</p>';try{const P=await kn(()=>import("https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs"),[]),L=await v.arrayBuffer(),V=P.read(L),M=V.Sheets[V.SheetNames[0]],D=P.utils.sheet_to_json(M,{header:1}),b=typeof D[0][0]=="string"&&D[0][0].toLowerCase().includes("nombre")?1:0;u=D.slice(b).filter(m=>m[0]&&m[1]&&m[2]).map(m=>({nombre:String(m[0]||"").trim(),apellido:String(m[1]||"").trim(),tel:String(m[2]||"").trim(),...m[3]?{email:String(m[3]).trim()}:{},...m[4]?{familia:String(m[4]).trim()}:{},...m[5]?{comentarios:String(m[5]).trim()}:{},estado:String(m[6]||"").toUpperCase()==="SI"?"pagado":"pendiente"})),x.innerHTML=`
        <p style="font-size:12px;color:#3B6D11;margin-bottom:8px">
          ✓ ${u.length} invitados detectados
        </p>
        <div style="max-height:200px;overflow-y:auto;border:.5px solid #e0d5c8;border-radius:8px">
          ${u.slice(0,5).map(m=>`
            <div style="padding:6px 10px;border-bottom:.5px solid #f0ebe4;font-size:12px">
              ${m.nombre} ${m.apellido} · ${m.tel} · <span class="badge ${m.estado==="pagado"?"b-pago":"b-pend"}">${m.estado==="pagado"?"Pagado":"Pendiente"}</span>
            </div>`).join("")}
          ${u.length>5?`<div style="padding:6px 10px;font-size:11px;color:#aaa">...y ${u.length-5} más</div>`:""}
        </div>`,document.getElementById("btn-importar").style.display="block"}catch(P){x.innerHTML=`<p style="color:#A32D2D;font-size:12px">Error al leer el archivo: ${P.message}</p>`}},window._importarExcel=async()=>{if(!u.length)return;const R=document.getElementById("btn-importar"),v=document.getElementById("excel-msg");R.disabled=!0,R.textContent="Importando...",v.innerHTML='<span style="color:#888">Procesando...</span>';let x=0,P=0;const L=t.length;for(let V=0;V<u.length;V++)try{const M=u[V];await ki({...M,codigo:tl(L+V+1),token:Ya()}),x++}catch{P++}v.innerHTML=`<span style="color:#3B6D11">✓ ${x} invitados importados${P?` (${P} errores)`:""}</span>`,R.style.display="none",u=[]};function h(){const R=document.getElementById("tab-content");if(!e.length){R.innerHTML='<div class="empty">Sin pedidos aún 🍷</div>';return}R.innerHTML=e.map(v=>{var x;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">#${(x=v.fireId)==null?void 0:x.slice(-4).toUpperCase()}</span>
        <div style="flex:1;min-width:90px">
          <div style="font-size:12px;font-weight:500">${v.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${v.standNombre}${v.retiro==="envio"?' · <span style="color:#5A1E99">Envío</span>':""}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:100px">${(v.items||[]).map(P=>P.desc).join(" · ")}</span>
        <span style="font-size:14px;font-weight:500">$${gi(v.total||0)}</span>
        <span class="badge ${dm[v.estado]}">${um[v.estado]}</span>
      </div>`}).join("")}function f(){const R=window.location.origin;document.getElementById("tab-content").innerHTML=`
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>QR de pedidos:</strong> se imprime en el stand — los clientes lo escanean con su QR de acceso.<br>
        <strong>Panel stand:</strong> para el personal de la bodega (ver pedidos + marcar entregas).<br>
        <strong>Carga vinos:</strong> para que cada bodega cargue su carta directamente.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${Ae.map(v=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${v.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${v.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${v.region}</div>
            <canvas id="qr-s${v.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="font-size:10px;color:#aaa;margin-bottom:8px;word-break:break-all">${R}/stand/${v.id}</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${R}/stand/${v.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <div style="display:flex;gap:4px">
                <a href="${R}/panel/${v.id}?key=${v.key}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none;flex:1;justify-content:center">Panel</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#185FA5;border-color:#185FA5"
                  onclick="navigator.clipboard?.writeText('${R}/panel/${v.id}?key=${v.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="display:flex;gap:4px">
                <a href="${R}/bodega/${v.id}/vinos?key=${v.key}" target="_blank" class="btn" style="font-size:11px;padding:5px;text-decoration:none;color:#3A7D44;border-color:#3A7D44;flex:1;justify-content:center">Vinos</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#3A7D44;border-color:#3A7D44"
                  onclick="navigator.clipboard?.writeText('${R}/bodega/${v.id}/vinos?key=${v.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="font-size:10px;color:#aaa;margin-top:2px">Pass: <strong>${v.pass}</strong></div>
            </div>
          </div>`).join("")}
      </div>`,Ae.forEach(v=>setTimeout(()=>Za("qr-s"+v.id,`${R}/stand/${v.id}`,110),50))}function g(){const R=t.filter(M=>M.estado==="pagado").length,v=t.filter(M=>M.estado==="ingresado").length,x=(R+v)*35e3,P=e.reduce((M,D)=>M+(D.total||0),0),L={};e.forEach(M=>{L[M.standId]||(L[M.standId]={n:M.standNombre,t:0,c:0}),L[M.standId].t+=M.total||0,L[M.standId].c++});const V=Object.values(L).sort((M,D)=>D.t-M.t);document.getElementById("tab-content").innerHTML=`
      <div class="stats">
        ${[[t.filter(M=>M.estado!=="invalidado").length,"Invitados"],[R+v,"Con bono"],["$"+gi(x),"Bonos"],[e.length,"Pedidos"],["$"+gi(P),"Ventas"],[e.filter(M=>M.retiro==="envio").length,"Envíos"]].map(([M,D])=>`<div class="stat"><div class="v" style="font-size:${String(M).length>7?"13px":"20px"}">${M}</div><div class="l">${D}</div></div>`).join("")}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Ventas por bodega</p>
        ${V.length?V.map(M=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span style="font-weight:500">${M.n}</span><span style="color:#888">${M.c} ped.</span><span style="font-weight:500">$${gi(M.t)}</span>
          </div>`).join(""):'<div class="empty">Sin ventas aún</div>'}
      </div>`}function y(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">🔗 Links útiles</p>
        ${[["Registro público (para compartir con invitados)","/registro"],["Panel de caja","/caja"],["Control de puerta","/puerta"],["Logística / envíos","/logistica"]].map(([R,v])=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span>${R}</span>
            <a href="${v}" target="_blank" class="btn" style="padding:3px 8px;font-size:11px;color:#6B1C1C;border-color:#6B1C1C">Abrir</a>
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
Esta acción no se puede deshacer.`)||!confirm("Segunda confirmación: ¿borrar todos los datos de prueba?"))return;const R=document.getElementById("limpiar-msg");R.innerHTML='<span style="color:#888">Borrando...</span>';try{await Gc(),R.innerHTML='<span style="color:#3B6D11">✓ Datos borrados correctamente</span>'}catch(v){R.innerHTML=`<span style="color:#A32D2D">Error: ${v.message}</span>`}},window._abrirWA=R=>{const v=t.find(M=>M.fireId===R);if(!v)return;r=R,document.getElementById("mw-tit").textContent=v.nombre+" "+v.apellido,document.getElementById("mw-cod").textContent=v.codigo||"",document.getElementById("mw-bdg").innerHTML=el(v.estado);const x=window.location.origin,P=`${x}/acceso?inv=${v.token}`;document.getElementById("mw-link").textContent=P;const L=v.estado==="pagado"?`Hola ${v.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${P}

_Personal e intransferible. Un solo uso en la entrada._`:`Hola ${v.nombre}! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`;document.getElementById("mw-msg").textContent=L;const V=document.getElementById("mw-btn-p");v.estado==="pendiente"?(V.textContent="✓ Marcar como pagado",V.disabled=!1,V.style.display="block"):V.style.display="none",Za("mw-canvas",v.codigo||v.fireId,80),document.getElementById("modal-wa").style.display="flex"},window._descargarQR=async R=>{const v=t.find(J=>J.fireId===R);if(!v)return;window.qrcode||await new Promise((J,Rt)=>{const Bt=document.createElement("script");Bt.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",Bt.onload=J,Bt.onerror=Rt,document.head.appendChild(Bt)});const P=window.location.origin+"/acceso?inv="+v.token,L=document.createElement("canvas"),V=600,M=800;L.width=V,L.height=M;const D=L.getContext("2d"),b=D.createLinearGradient(0,0,0,M);b.addColorStop(0,"#1A3A5C"),b.addColorStop(.55,"#2C5F8A"),b.addColorStop(1,"#3A7D44"),D.fillStyle=b,D.fillRect(0,0,V,M),D.fillStyle="#C9A96E",D.fillRect(0,M-4,V,4),D.fillStyle="rgba(255,255,255,0.7)",D.font="500 18px system-ui, -apple-system, sans-serif",D.textAlign="center",D.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",V/2,54),D.fillStyle="#ffffff",D.font="500 38px system-ui, -apple-system, sans-serif",D.fillText(v.nombre+" "+v.apellido,V/2,110),D.fillStyle="rgba(255,255,255,0.75)",D.font="400 22px system-ui, -apple-system, sans-serif",D.fillText(v.codigo,V/2,146),D.fillStyle="#3A7D44";const m=200,_=34,E=V/2-m/2,I=164;C(D,E,I,m,_,17),D.fill(),D.fillStyle="#ffffff",D.font="500 15px system-ui, -apple-system, sans-serif",D.fillText("✅ Bono confirmado",V/2,I+23);const T=320,A=340,St=V/2-T/2,Vt=220;D.fillStyle="#ffffff",C(D,St,Vt,T,A,16),D.fill();const xe=qrcode(0,"M");xe.addData(P),xe.make();const Ut=xe.getModuleCount(),Jt=240,Ze=St+(T-Jt)/2,$n=Vt+24,Te=Jt/Ut;D.fillStyle="#000000";for(let J=0;J<Ut;J++)for(let Rt=0;Rt<Ut;Rt++)xe.isDark(J,Rt)&&D.fillRect(Ze+Rt*Te,$n+J*Te,Te,Te);D.fillStyle="#1A3A5C",D.font="500 26px system-ui, -apple-system, sans-serif",D.fillText(v.codigo,V/2,Vt+A-44),D.fillStyle="#888",D.font="400 14px system-ui, -apple-system, sans-serif",D.fillText("Mostrá este QR en la entrada",V/2,Vt+A-20),D.fillStyle="rgba(255,255,255,0.85)",D.font="400 18px system-ui, -apple-system, sans-serif",D.fillText("Sáb 20 jun 2026  ·  19:30 hs",V/2,Vt+A+50),D.fillText("Roma 656, Olivos",V/2,Vt+A+80),D.fillStyle="rgba(255,255,255,0.5)",D.font="400 13px system-ui, -apple-system, sans-serif",D.fillText("Personal e intransferible · Un solo uso en la entrada",V/2,M-24),await new Promise(J=>{const Rt=new Image;Rt.onload=()=>{const Ye=V-70-20,Zt=M-70-20;D.save(),D.beginPath(),D.arc(Ye+70/2,Zt+70/2,70/2+3,0,Math.PI*2),D.fillStyle="rgba(255,255,255,0.25)",D.fill(),D.beginPath(),D.arc(Ye+70/2,Zt+70/2,70/2,0,Math.PI*2),D.clip(),D.drawImage(Rt,Ye,Zt,70,70),D.restore(),J()},Rt.onerror=J,Rt.src=Yo});const Dt=document.createElement("a");Dt.download="QR-"+v.codigo+".png",Dt.href=L.toDataURL("image/png"),Dt.click()};function C(R,v,x,P,L,V){R.beginPath(),R.moveTo(v+V,x),R.lineTo(v+P-V,x),R.quadraticCurveTo(v+P,x,v+P,x+V),R.lineTo(v+P,x+L-V),R.quadraticCurveTo(v+P,x+L,v+P-V,x+L),R.lineTo(v+V,x+L),R.quadraticCurveTo(v,x+L,v,x+L-V),R.lineTo(v,x+V),R.quadraticCurveTo(v,x,v+V,x),R.closePath()}let N=null;window._editarInv=R=>{const v=t.find(x=>x.fireId===R);v&&(N=R,document.getElementById("edit-nom").value=v.nombre||"",document.getElementById("edit-ape").value=v.apellido||"",document.getElementById("edit-tel").value=v.tel||"",document.getElementById("edit-email").value=v.email||"",document.getElementById("edit-familia").value=v.familia||"",document.getElementById("edit-comentarios").value=v.comentarios||"",document.getElementById("edit-estado").value=v.estado||"pendiente",document.getElementById("edit-msg").innerHTML="",document.getElementById("modal-edit").style.display="flex")},window._guardarEdit=async()=>{const R=document.getElementById("edit-msg"),v=document.getElementById("edit-nom").value.trim(),x=document.getElementById("edit-ape").value.trim(),P=document.getElementById("edit-tel").value.trim();if(!v||!x||!P){R.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}R.innerHTML='<span style="color:#888">Guardando...</span>';const L={nombre:v,apellido:x,tel:P,estado:document.getElementById("edit-estado").value,...document.getElementById("edit-email").value.trim()&&{email:document.getElementById("edit-email").value.trim()},...document.getElementById("edit-familia").value.trim()&&{familia:document.getElementById("edit-familia").value.trim()},...document.getElementById("edit-comentarios").value.trim()&&{comentarios:document.getElementById("edit-comentarios").value.trim()}};try{await ye(N,L),R.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEdit(),1200)}catch(V){R.innerHTML=`<span style="color:#C0392B">Error: ${V.message}</span>`}},window._cerrarEdit=()=>{document.getElementById("modal-edit").style.display="none",N=null},window._pagarM=async()=>{const R=t.find(v=>v.fireId===r);!R||R.estado!=="pendiente"||await ye(R.fireId,{estado:"pagado"})},window._copWA=()=>{var x;(x=navigator.clipboard)==null||x.writeText(document.getElementById("mw-msg").textContent).catch(()=>{});const R=document.querySelector("#modal-wa .btn-g"),v=R.innerHTML;R.innerHTML="✓ ¡Copiado!",setTimeout(()=>R.innerHTML=v,2e3)},window._cModal=()=>{document.getElementById("modal-wa").style.display="none",r=null},s()}const Ve=n=>Number(n).toLocaleString("es-AR");async function pm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function fm(n){Ht();let t=[],e=[],i="cobrar",r=null,s=[],a=null,c=!1;n.innerHTML=kt({title:"💰 Caja central",sub:"Sucovi 2027 · Roma 656, Olivos",backHref:"/admin"})+`
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
    </div>`,Qn(v=>{t=v,i==="cobrar"&&!r&&f()}),tr(v=>{e=v,i!=="cobrar"&&u()}),window._cajaVista=(v,x)=>{i=v,r=null,document.querySelectorAll(".nav button").forEach(P=>P.classList.remove("on")),x.classList.add("on"),u()};function u(){i==="cobrar"&&g(),i==="pedidos"&&N(),i==="logistica"&&R()}let h={};async function f(){const v=t.filter(P=>P.estado!=="invalidado"),x=await Promise.all(v.map(async P=>{try{const V=(await ro(P.fireId)).filter(b=>{var m;return(m=b.items)==null?void 0:m.length});if(!V.length)return null;const M=V.reduce((b,m)=>b+(m.items||[]).reduce((_,E)=>_+(E.sub||0),0),0),D=V.reduce((b,m)=>b+(m.items||[]).length,0);return{fireId:P.fireId,total:M,cant:D,stands:V.length}}catch{return null}}));h={},x.filter(Boolean).forEach(P=>{h[P.fireId]=P}),y()}function g(){const v=document.getElementById("caja-content");if(r){C();return}v.innerHTML=`
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <input id="buscar-caja" placeholder="Buscar por nombre o código..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda">
        <p style="font-size:12px;color:#888;margin-bottom:8px">Cargando carritos activos...</p>
      </div>`,t.length&&f()}function y(){var L;const v=document.getElementById("resultados-busqueda");if(!v)return;const x=(((L=document.getElementById("buscar-caja"))==null?void 0:L.value)||"").toLowerCase().trim();let P=t.filter(V=>V.estado!=="invalidado");if(x?P=P.filter(V=>(V.codigo||"").toLowerCase().includes(x)||(V.nombre+" "+V.apellido).toLowerCase().includes(x)):P=P.filter(V=>h[V.fireId]),!P.length){v.innerHTML=x?'<div class="empty">Sin resultados</div>':'<div class="empty" style="padding:24px">Sin carritos activos — nadie ha agregado vinos todavía 🍷</div>';return}v.innerHTML=(x?"":`<p style="font-size:11px;color:#888;margin-bottom:8px;font-weight:500">CARRITOS ACTIVOS (${P.length})</p>`)+P.map(V=>{const M=h[V.fireId];return`
        <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
          align-items:center;gap:10px" onclick="window._seleccionarInv('${V.fireId}')">
          <div class="avatar">${V.nombre[0]}${V.apellido[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${V.nombre} ${V.apellido}</div>
            <div style="font-size:12px;color:#888">${V.codigo} · ${V.tel}</div>
            ${M?`<div style="font-size:12px;color:#3A7D44;font-weight:500;margin-top:2px">
              🍷 ${M.cant} ítem${M.cant>1?"s":""} · $${Number(M.total).toLocaleString("es-AR")}
              <span style="color:#888;font-weight:400"> · ${M.stands} stand${M.stands>1?"s":""}</span>
            </div>`:'<div style="font-size:11px;color:#aaa;margin-top:2px">Carrito vacío</div>'}
          </div>
          <span class="badge ${V.estado==="pagado"||V.estado==="ingresado"?"b-pago":"b-pend"}">
            ${V.estado==="pagado"||V.estado==="ingresado"?"Bono pagado":"Pendiente"}
          </span>
          <span style="color:#1A3A5C;font-size:18px">›</span>
        </div>`}).join("")}window._buscarInv=(v=!1)=>{var L;const x=(((L=document.getElementById("buscar-caja"))==null?void 0:L.value)||"").toLowerCase().trim();if(!x){y();return}const P=t.filter(V=>V.estado!=="invalidado"&&((V.codigo||"").toLowerCase().includes(x)||(V.nombre+" "+V.apellido).toLowerCase().includes(x)));if(v&&P.length===1){window._seleccionarInv(P[0].fireId);return}y()},window._seleccionarInv=async v=>{r=t.find(x=>x.fireId===v),r&&(s=await ro(v),C())};async function C(){const v=document.getElementById("caja-content");if(!v)return;const x=r,P=s.filter(M=>{var D;return(D=M.items)==null?void 0:D.length}),L=P.reduce((M,D)=>M+(D.items||[]).reduce((b,m)=>b+(m.sub||0),0),0),V=e.filter(M=>M.invFireId===x.fireId);v.innerHTML=`
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
        ${V.length?`<div style="background:#D1FAE5;border-radius:6px;padding:6px 10px;
          font-size:12px;color:#065F46">
          ✅ Ya tiene ${V.length} pedido${V.length>1?"s":""} pagado${V.length>1?"s":""} esta noche
        </div>`:""}
      </div>

      ${P.length?`
        ${P.map(M=>`
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
              <span>$${Ve((M.items||[]).reduce((D,b)=>D+(b.sub||0),0))}</span>
            </div>
          </div>`).join("")}
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL</span><span style="color:#1A3A5C">$${Ve(L)}</span>
          </div>
          <p style="font-size:12px;color:#888;margin-top:4px">
            ${P.length} stand${P.length>1?"s":""}
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
            ${x.nombre} todavía no agregó vinos desde los stands.
          </p>
        </div>`}
    `}window._volverCobrar=()=>{r=null,s=[],g()},window._cobrar=async()=>{const v=r,x=s.filter(V=>{var M;return(M=V.items)==null?void 0:M.length});if(!x.length)return;const P=document.querySelector("#caja-content .btn-g");P&&(P.disabled=!0,P.textContent="Procesando...");const L=document.getElementById("cobro-msg");try{await zc(v,x),await Fc(v.fireId),L.innerHTML=`<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${x.length} voucher${x.length>1?"s":""} generado${x.length>1?"s":""}.
      </span>`,P&&(P.style.display="none")}catch(V){L.innerHTML=`<span style="color:#C0392B">Error: ${V.message}</span>`,P&&(P.disabled=!1,P.textContent="Reintentar")}};function N(){const v=document.getElementById("caja-content"),x=e.filter(V=>V.retiro!=="envio"),P={pagado:"Pagado",listo:"Listo",entregado:"Entregado"},L={pagado:"b-pago",listo:"b-list",entregado:"b-entr"};if(!x.length){v.innerHTML='<div class="empty">Sin pedidos aún</div>';return}v.innerHTML=x.map(V=>{var M;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#1A3A5C;min-width:52px">
          #${(M=V.fireId)==null?void 0:M.slice(-4).toUpperCase()}
        </span>
        <div style="flex:1;min-width:80px">
          <div style="font-size:12px;font-weight:500">${V.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${V.standNombre}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:80px">
          ${(V.items||[]).map(D=>D.desc).join(" · ")}
        </span>
        <span style="font-size:14px;font-weight:500">$${Ve(V.total||0)}</span>
        <span class="badge ${L[V.estado]||"b-pago"}">${P[V.estado]||V.estado}</span>
      </div>`}).join("")}function R(){const v=document.getElementById("caja-content"),x=e.filter(P=>P.retiro==="envio");if(!x.length){v.innerHTML='<div class="empty">Sin envíos</div>';return}v.innerHTML=x.map(P=>{var L;return`
      <div class="card" style="margin-bottom:10px;border-left:3px solid #7C3AED">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:15px;font-weight:500;color:#1A3A5C">
            #${(L=P.fireId)==null?void 0:L.slice(-4).toUpperCase()}
          </span>
          <span class="badge b-envi">🚚 Envío</span>
        </div>
        <div style="font-size:13px;font-weight:500;margin-bottom:4px">${P.invNombre||""}</div>
        <div style="font-size:12px;color:#666;margin-bottom:6px">
          ${P.standNombre} · ${(P.items||[]).map(V=>V.desc).join(" · ")}
        </div>
        <div style="font-size:15px;font-weight:500">$${Ve(P.total||0)}</div>
      </div>`}).join("")}window._abrirScanner=async()=>{document.getElementById("scan-overlay").style.display="flex";const v=document.getElementById("scan-status");v&&(v.textContent="Cargando escáner...");try{await pm(),a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const x=document.getElementById("scan-video");x.srcObject=a,c=!0,v&&(v.textContent="Buscando QR...");const P=document.createElement("canvas"),L=P.getContext("2d",{willReadFrequently:!0}),V=()=>{if(c){if(x.readyState===x.HAVE_ENOUGH_DATA&&x.videoWidth>0){P.width=x.videoWidth,P.height=x.videoHeight,L.drawImage(x,0,0);const M=L.getImageData(0,0,P.width,P.height),D=window.jsQR(M.data,M.width,M.height,{inversionAttempts:"dontInvert"});if(D&&D.data){const b=D.data;window._cerrarScanner();const m=b.match(/INV-\d+/),_=b.match(/inv=([A-Z0-9]+)/i);if(m){const E=document.getElementById("buscar-caja");E&&(E.value=m[0],window._buscarInv(!0))}else _&&kn(async()=>{const{buscarInvitadoPorToken:E}=await Promise.resolve().then(()=>Li);return{buscarInvitadoPorToken:E}},void 0).then(({buscarInvitadoPorToken:E})=>E(_[1]).then(I=>{I&&window._seleccionarInv(I.fireId)}));return}}c&&requestAnimationFrame(V)}};x.addEventListener("loadeddata",()=>requestAnimationFrame(V))}catch{v&&(v.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}},window._cerrarScanner=()=>{c=!1,a&&(a.getTracks().forEach(x=>x.stop()),a=null);const v=document.getElementById("scan-overlay");v&&(v.style.display="none")},g()}const kr=n=>Number(n).toLocaleString("es-AR");function mm(n,t,e){if(Ht(),!e||e.estado==="invalidado"){n.innerHTML=kt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
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
      </div>`;return}let i=[],r="stand";const s=`/acceso?inv=${e.token}`;n.innerHTML=kt({title:"🍷 "+t.nombre,sub:t.region+" · Stand #"+t.id,actions:[`<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
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
    </button>`,Zo(t.id,u=>{i=u,a()}),Jo(e.fireId,u=>{var N,R,v;const h=u.find(x=>Number(x.standId)===t.id),f=u.reduce((x,P)=>x+(P.items||[]).reduce((L,V)=>L+(V.sub||0),0),0),g=u.reduce((x,P)=>x+(P.items||[]).length,0),y=document.getElementById("cart-fab"),C=document.getElementById("cart-fab-txt");y&&g>0?(y.style.display="flex",C.textContent=`Ver carrito · $${kr(f)}`):y&&(y.style.display="none"),h&&((N=h.items)!=null&&N.length)?(r=h.retiro||"stand",(R=document.getElementById("rb-stand"))==null||R.classList.toggle("sel",r==="stand"),(v=document.getElementById("rb-envio"))==null||v.classList.toggle("sel",r==="envio"),document.getElementById("retiro-box").style.display="block",document.getElementById("stand-resumen").style.display="block",document.getElementById("stand-resumen-lines").innerHTML=h.items.map(x=>`
          <div style="display:flex;justify-content:space-between;font-size:12px;
            color:#555;margin-bottom:4px">
            <span>${x.desc}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-weight:500">$${kr(x.sub)}</span>
              <button onclick="window._quitarItem('${x.key}')"
                style="border:none;background:none;color:#A32D2D;cursor:pointer;
                font-size:13px;padding:0 2px">✕</button>
            </div>
          </div>`).join("")):(document.getElementById("stand-resumen").style.display="none",h===null&&(document.getElementById("retiro-box").style.display="none"))});function a(){const u=document.getElementById("menu-lista");if(u){if(!i.length){u.innerHTML='<div class="empty">La carta estará disponible pronto.</div>';return}u.innerHTML=i.map((h,f)=>`
      <div class="vino-card">
        <div style="font-size:14px;font-weight:500">${h.nombre}</div>
        <div style="font-size:11px;color:#888;margin-top:2px">
          ${h.varietal||""}${h.cosecha?" · "+h.cosecha:""}
        </div>
        ${h.descripcion?`<div style="font-size:12px;color:#666;margin-top:3px">${h.descripcion}</div>`:""}
        ${(h.unidades||[]).map((g,y)=>`
          <div class="qty-row">
            <span class="qty-label">
              ${g.u} — <span style="color:#6B1C1C;font-weight:600">$${kr(g.p)}</span>
            </span>
            <button class="qty-btn" onclick="window._agregar(${f},${y},-1)">−</button>
            <span id="qv${f}_${y}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" onclick="window._agregar(${f},${y},1)">+</button>
          </div>`).join("")}
      </div>`).join("")}}const c={};window._agregar=async(u,h,f)=>{const g=i[u];if(!g)return;const y=(g.unidades||[])[h];if(!y)return;const C=`${u}_${h}`;c[C]=Math.max(0,(c[C]||0)+f);const N=document.getElementById(`qv${u}_${h}`);if(N&&(N.textContent=c[C]),c[C]===0)await Bi(e.fireId,t.id,C);else{const R={key:C,desc:`${g.nombre} — ${y.u} ×${c[C]}`,sub:y.p*c[C],vinoNombre:g.nombre,unidad:y.u,precio:y.p,qty:c[C]};await Oc(e.fireId,t.id,t.nombre,R,r),document.getElementById("retiro-box").style.display="block";const v=document.getElementById("add-msg");v.textContent=`✓ ${g.nombre} (${y.u}) agregado al carrito`,setTimeout(()=>{v.textContent=""},2e3)}},window._sRet=async u=>{r=u,document.getElementById("rb-stand").classList.toggle("sel",u==="stand"),document.getElementById("rb-envio").classList.toggle("sel",u==="envio"),document.getElementById("envio-form").style.display=u==="envio"?"block":"none",await Xo(e.fireId,t.id,u)},window._quitarItem=async u=>{await Bi(e.fireId,t.id,u);const[h,f]=u.split("_").map(Number);c[u]=0;const g=document.getElementById(`qv${h}_${f}`);g&&(g.textContent=0)}}window._scannerStop=null;async function gm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}window._initScanner=async function(n,t,e){const i=e?document.getElementById(e):null;i&&(i.textContent="Iniciando cámara...");try{await gm();const r=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),s=document.getElementById(n);if(!s){r.getTracks().forEach(f=>f.stop());return}s.srcObject=r;const a=document.createElement("canvas"),c=a.getContext("2d",{willReadFrequently:!0});let u=!0;window._scannerStop=()=>{u=!1,r.getTracks().forEach(f=>f.stop()),window._scannerStop=null},i&&(i.textContent="Buscando QR...");const h=()=>{var f;if(u){if(s.readyState===s.HAVE_ENOUGH_DATA&&s.videoWidth>0){a.width=s.videoWidth,a.height=s.videoHeight,c.drawImage(s,0,0);const g=c.getImageData(0,0,a.width,a.height),y=window.jsQR(g.data,g.width,g.height,{inversionAttempts:"dontInvert"});if(y&&y.data){(f=window._scannerStop)==null||f.call(window),t(y.data);return}}requestAnimationFrame(h)}};s.addEventListener("loadeddata",()=>requestAnimationFrame(h))}catch{i&&(i.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}};const Nr=n=>Number(n).toLocaleString("es-AR");function Kc(n,t){if(Ht(),!sessionStorage.getItem("stand-auth-"+t.id)){n.innerHTML=`
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
      <!-- Tabs -->
      <div style="display:flex;border-bottom:2px solid #E8EFF5;margin-bottom:12px;overflow-x:auto">
        <button id="tab-pedidos" class="btn" onclick="window._setTab('pedidos',this)"
          style="font-size:12px;border:none;border-radius:0;border-bottom:2px solid #5BA4CF;
          color:#5BA4CF;font-weight:600;padding:8px 12px;margin-bottom:-2px;background:none">
          📋 Pedidos
        </button>
        <button id="tab-carta" class="btn" onclick="window._setTab('carta',this)"
          style="font-size:12px;border:none;border-radius:0;border-bottom:2px solid transparent;
          color:#888;padding:8px 12px;margin-bottom:-2px;background:none">
          🍷 Mi carta
        </button>
        <button id="tab-resumen" class="btn" onclick="window._setTab('resumen',this)"
          style="font-size:12px;border:none;border-radius:0;border-bottom:2px solid transparent;
          color:#888;padding:8px 12px;margin-bottom:-2px;background:none">
          📊 Resumen
        </button>
      </div>

      <!-- Tab: Pedidos -->
      <div id="tab-content-pedidos">
        <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;align-items:center">
          <button id="sf-pend" class="btn"
            onclick="window._setSF('pendientes',this)"
            style="font-size:11px;background:#EAF3DE;color:#3B6D11;border-color:#3B6D11">
            🟢 Listos
          </button>
          <button id="sf-entr" class="btn" onclick="window._setSF('entregados',this)" style="font-size:11px">
            ✅ Entregados
          </button>
          <button id="sf-all" class="btn" onclick="window._setSF('todos',this)" style="font-size:11px">
            📋 Todos
          </button>
          <button class="btn btn-b" onclick="window._abrirScannerStand()" style="font-size:11px;margin-left:auto">
            📷 Voucher
          </button>
        </div>
        <div id="sp-pedidos"></div>
      </div>

      <!-- Tab: Mi carta -->
      <div id="tab-content-carta" style="display:none">
        <div id="sp-carta"><div class="empty">Cargando carta...</div></div>
      </div>

      <!-- Tab: Resumen -->
      <div id="tab-content-resumen" style="display:none">
        <div id="sp-resumen"></div>
      </div>
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
    </div>`;let r="pendientes";window._setTab=(u,h)=>{["tab-pedidos","tab-carta","tab-resumen"].forEach(f=>{const g=document.getElementById(f);g&&(g.style.borderBottomColor="transparent",g.style.color="#888",g.style.fontWeight="400")}),h.style.borderBottomColor="#5BA4CF",h.style.color="#5BA4CF",h.style.fontWeight="600",["pedidos","carta","resumen"].forEach(f=>{const g=document.getElementById("tab-content-"+f);g&&(g.style.display=f===u?"block":"none")}),u==="carta"&&a(),u==="resumen"&&c()},window._setSF=(u,h)=>{r=u,["sf-pend","sf-entr","sf-all"].forEach(f=>{const g=document.getElementById(f);g&&(g.style.background="#fff",g.style.color="#333",g.style.borderColor="#ccc")}),u==="pendientes"?(h.style.background="#EAF3DE",h.style.color="#3B6D11",h.style.borderColor="#3B6D11"):u==="entregados"?(h.style.background="#D1FAE5",h.style.color="#065F46",h.style.borderColor="#3A7D44"):(h.style.background="#1A3A5C",h.style.color="#fff",h.style.borderColor="#1A3A5C"),s()},jc(t.id,u=>{i=u,s()});function s(){const u=document.getElementById("sp-pedidos");if(!u)return;let h=i;if(r==="pendientes"?h=i.filter(y=>y.estado==="pagado"):r==="entregados"&&(h=i.filter(y=>y.estado==="entregado")),!h.length){const y={pendientes:"Sin pedidos listos para retirar 🎉",entregados:"Todavía no se entregó nada",todos:"Sin pedidos"};u.innerHTML=`<div class="empty">${y[r]||"Sin pedidos"}</div>`;return}const f={pagado:"Listo para retirar",entregado:"Entregado"},g={pagado:"b-pago",entregado:"b-entr"};u.innerHTML=h.map(y=>{var C;return`
      <div class="card" style="margin-bottom:10px;border-left:3px solid ${y.estado==="entregado"?"#aaa":"#3B6D11"}">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <div>
            <span style="font-size:18px;font-weight:500;color:#6B1C1C">
              #${(C=y.fireId)==null?void 0:C.slice(-4).toUpperCase()}
            </span>
            <span style="font-size:13px;font-weight:500;margin-left:8px">${y.invNombre||""}</span>
          </div>
          <span class="badge ${g[y.estado]||"b-pago"}">${f[y.estado]||y.estado}</span>
        </div>
        <div style="font-size:12px;color:#555;margin-bottom:8px;line-height:1.7">
          ${(y.items||[]).map(N=>`${N.desc} — <strong>$${Nr(N.sub)}</strong>`).join("<br>")}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;
          border-top:.5px solid #e0d5c8;padding-top:8px">
          <span style="font-size:16px;font-weight:500">$${Nr(y.total||0)}</span>
          ${y.estado==="pagado"?`<button class="btn btn-g" onclick="window._entregarPedido('${y.fireId}')">
                ✓ Marcar entregado
               </button>`:'<span style="font-size:12px;color:#aaa">✓ Entregado</span>'}
        </div>
      </div>`}).join("")}function a(){const u=document.getElementById("sp-carta");u&&(u.innerHTML='<div class="empty" style="padding:16px">Cargando...</div>',kn(()=>Promise.resolve().then(()=>Li),void 0).then,kn(async()=>{const{escucharVinos:h}=await Promise.resolve().then(()=>Li);return{escucharVinos:h}},void 0).then(({escucharVinos:h})=>{h(t.id,f=>{if(!f.length){u.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}const g=y=>Number(y).toLocaleString("es-AR");u.innerHTML=f.map(y=>`
          <div class="card" style="margin-bottom:8px">
            <div style="font-size:14px;font-weight:500;color:#1A3A5C">${y.nombre}</div>
            <div style="font-size:11px;color:#888;margin-top:2px">
              ${y.varietal||""}${y.cosecha?" · "+y.cosecha:""}
            </div>
            ${y.descripcion?`<div style="font-size:12px;color:#666;margin-top:2px">${y.descripcion}</div>`:""}
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">
              ${(y.unidades||[]).map(C=>`
                <span style="background:#EBF4FA;color:#1A3A5C;padding:3px 10px;
                  border-radius:20px;font-size:12px;font-weight:500">
                  ${C.u}: $${g(C.p)}
                </span>`).join("")}
            </div>
          </div>`).join("")})}).catch(()=>{u.innerHTML='<div class="empty">Error cargando carta</div>'}))}function c(){const u=document.getElementById("sp-resumen");if(!u)return;const h=x=>Number(x).toLocaleString("es-AR"),f=i.filter(x=>x.estado==="entregado"),g=i.filter(x=>x.estado==="pagado"),y=f.reduce((x,P)=>x+(P.total||0),0),C=g.reduce((x,P)=>x+(P.total||0),0),N=i.reduce((x,P)=>x+(P.total||0),0),R={};f.forEach(x=>{(x.items||[]).forEach(P=>{const L=P.vinoNombre+" — "+P.unidad;R[L]||(R[L]={cant:0,total:0}),R[L].cant+=P.qty||1,R[L].total+=P.sub||0})});const v=Object.entries(R).sort((x,P)=>P[1].total-x[1].total);u.innerHTML=`
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
        <div class="stat"><div class="v" style="color:#3A7D44">$${h(y)}</div><div class="l">Entregado</div></div>
        <div class="stat"><div class="v" style="color:#D97706">$${h(C)}</div><div class="l">Por entregar</div></div>
        <div class="stat"><div class="v">$${h(N)}</div><div class="l">Total vendido</div></div>
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Detalle por vino (entregados)</p>
        ${v.length?v.map(([x,P])=>`
          <div style="display:flex;justify-content:space-between;padding:6px 0;
            border-bottom:.5px solid #E8EFF5;font-size:12px">
            <span>${x}</span>
            <span style="color:#888">${P.cant} u.</span>
            <span style="font-weight:500">$${h(P.total)}</span>
          </div>`).join(""):'<div style="color:#aaa;font-size:12px;padding:8px 0">Sin entregas todavía</div>'}
      </div>`}window._entregarPedido=async u=>{await Hc(u)},window._abrirScannerStand=async()=>{document.getElementById("scan-overlay-stand").style.display="flex",await window._initScanner("scan-video-stand",g=>{window._cerrarScannerStand();const y=i.find(C=>g.includes(C.fireId));y&&u(y)},"scan-status-stand");function u(g){const y=g.estado==="pagado",C=document.getElementById("voucher-modal");document.getElementById("voucher-modal-content").innerHTML=`
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:32px">${y?"✅":"⏳"}</div>
        <h3 style="font-size:16px;font-weight:500;color:${y?"#3B6D11":"#854F0B"};margin-top:6px">
          ${y?"PAGADO — Entregar":"PENDIENTE — No entregar"}
        </h3>
      </div>
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${g.invNombre||""}</div>
      <div style="font-size:13px;color:#666;margin-bottom:10px">
        ${(g.items||[]).map(N=>N.desc).join("<br>")}
      </div>
      <div style="font-size:16px;font-weight:500;margin-bottom:12px">$${Nr(g.total||0)}</div>
      ${y?`
        <button class="btn btn-g" style="width:100%;padding:10px;margin-bottom:8px"
          onclick="window._entregarPedido('${g.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>`:""}
      <button class="btn" style="width:100%"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`,C.style.display="flex"}let h=null,f=!1;window._abrirScannerInvitado=async()=>{document.getElementById("scan-overlay-inv").style.display="flex";const g=document.getElementById("scan-status-inv");try{window.jsQR||await new Promise((v,x)=>{const P=document.createElement("script");P.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",P.onload=v,P.onerror=x,document.head.appendChild(P)}),h=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const y=document.getElementById("scan-video-inv");y.srcObject=h,f=!0,g&&(g.textContent="Buscando QR del invitado...");const C=document.createElement("canvas"),N=C.getContext("2d",{willReadFrequently:!0}),R=()=>{if(f){if(y.readyState===y.HAVE_ENOUGH_DATA&&y.videoWidth>0){C.width=y.videoWidth,C.height=y.videoHeight,N.drawImage(y,0,0);const v=N.getImageData(0,0,C.width,C.height),x=window.jsQR(v.data,v.width,v.height,{inversionAttempts:"dontInvert"});if(x&&x.data){const P=x.data;window._cerrarScannerInvitado();const L=P.match(/inv=([A-Z0-9]+)/i),V=P.match(/INV-\d+/);L?window.location.href="/stand/${bodega.id}?inv="+L[1]:V&&g&&(g.textContent="Usá el link del invitado, no el código.");return}}f&&requestAnimationFrame(R)}};y.addEventListener("loadeddata",()=>requestAnimationFrame(R))}catch{g&&(g.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerInvitado=()=>{f=!1,h&&(h.getTracks().forEach(g=>g.stop()),h=null),document.getElementById("scan-overlay-inv").style.display="none"},window._cerrarScannerStand=()=>{var g;(g=window._scannerStop)==null||g.call(window),document.getElementById("scan-overlay-stand").style.display="none"}}}const ym=n=>Number(n).toLocaleString("es-AR");function Xc(n,t){if(Ht(),!sessionStorage.getItem("bodega-auth-"+t.id)){n.innerHTML=`
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
        ${[["vn","Nombre del vino *","text","Ej: Gran Malbec 2022"],["vv","Varietal / Blend","text","Ej: Malbec"],["vc","Cosecha","number","2022"],["vd","Descripción corta","text","Tinto con notas de..."],["vb","Precio botella ($)","number",""],["v6","Precio caja x6 ($)","number",""],["v12","Precio caja x12 ($)","number",""]].map(([c,u,h,f])=>`
          <div style="margin-bottom:8px">
            <label style="font-size:11px;color:#666">${u}</label>
            <input id="${c}" type="${h}" placeholder="${f}" style="margin-top:3px">
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
    </div>`,Zo(t.id,c=>{i=c;const u=document.getElementById("vl");if(u){if(!i.length){u.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}u.innerHTML=i.map(h=>`
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
      </div>`).join("")}});const s=["vn","vv","vc","vd","vb","v6","v12"],a=()=>{s.forEach(c=>{const u=document.getElementById(c);u&&(u.value="")})};window._guardarV=async()=>{const c=document.getElementById("vn").value.trim(),u=document.getElementById("vm");if(!c){u.innerHTML='<span style="color:#A32D2D">El nombre es requerido.</span>';return}const h=parseFloat(document.getElementById("vb").value),f=parseFloat(document.getElementById("v6").value),g=parseFloat(document.getElementById("v12").value),y=[];if(h&&y.push({u:"Botella",p:h}),f&&y.push({u:"Caja x6",p:f}),g&&y.push({u:"Caja x12",p:g}),!y.length){u.innerHTML='<span style="color:#A32D2D">Ingresá al menos un precio.</span>';return}const C={nombre:c,varietal:document.getElementById("vv").value.trim(),cosecha:document.getElementById("vc").value.trim(),descripcion:document.getElementById("vd").value.trim(),unidades:y};u.innerHTML='<span style="color:#888">Guardando...</span>';try{r?(await Qc(t.id,r,C),r=null):await Wc(t.id,C),a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none",u.innerHTML='<span style="color:#3B6D11">✓ Guardado correctamente</span>',setTimeout(()=>{const N=document.getElementById("vm");N&&(N.innerHTML="")},3e3)}catch(N){u.innerHTML=`<span style="color:#A32D2D">Error: ${N.message}</span>`}},window._editarV=c=>{const u=i.find(y=>y.fireId===c);if(!u)return;r=c,document.getElementById("form-titulo").textContent=`Editando: ${u.nombre}`,document.getElementById("vn").value=u.nombre||"",document.getElementById("vv").value=u.varietal||"",document.getElementById("vc").value=u.cosecha||"",document.getElementById("vd").value=u.descripcion||"";const h=(u.unidades||[]).find(y=>y.u==="Botella"),f=(u.unidades||[]).find(y=>y.u==="Caja x6"),g=(u.unidades||[]).find(y=>y.u==="Caja x12");document.getElementById("vb").value=(h==null?void 0:h.p)||"",document.getElementById("v6").value=(f==null?void 0:f.p)||"",document.getElementById("v12").value=(g==null?void 0:g.p)||"",document.getElementById("btn-cancelar-edit").style.display="block",window.scrollTo({top:0,behavior:"smooth"})},window._cancelarEdit=()=>{r=null,a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none"},window._eliminarV=async c=>{const u=i.find(h=>h.fireId===c);confirm(`¿Eliminar "${u==null?void 0:u.nombre}"?`)&&await $c(t.id,c)}}window._scannerStop=null;async function vm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}window._initScanner=async function(n,t,e){const i=e?document.getElementById(e):null;i&&(i.textContent="Iniciando cámara...");try{await vm();const r=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),s=document.getElementById(n);if(!s){r.getTracks().forEach(f=>f.stop());return}s.srcObject=r;const a=document.createElement("canvas"),c=a.getContext("2d",{willReadFrequently:!0});let u=!0;window._scannerStop=()=>{u=!1,r.getTracks().forEach(f=>f.stop()),window._scannerStop=null},i&&(i.textContent="Buscando QR...");const h=()=>{var f;if(u){if(s.readyState===s.HAVE_ENOUGH_DATA&&s.videoWidth>0){a.width=s.videoWidth,a.height=s.videoHeight,c.drawImage(s,0,0);const g=c.getImageData(0,0,a.width,a.height),y=window.jsQR(g.data,g.width,g.height,{inversionAttempts:"dontInvert"});if(y&&y.data){(f=window._scannerStop)==null||f.call(window),t(y.data);return}}requestAnimationFrame(h)}};s.addEventListener("loadeddata",()=>requestAnimationFrame(h))}catch{i&&(i.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}};function Am(n){Ht();let t=[],e=[];n.innerHTML=`
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
    </div>`,Qn(r=>{t=r}),window._vPuerta=async()=>{const r=document.getElementById("scan-cod").value.trim().toUpperCase(),s=document.getElementById("scan-res");if(!r)return;const a=t.find(u=>u.codigo===r);if(!a){s.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">❌ Código no encontrado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:4px">${r} no existe en el sistema.</p>
      </div>`;return}if(a.estado==="ingresado"){s.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">⛔ QR ya utilizado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:6px">
          <strong>${a.nombre} ${a.apellido}</strong> ya ingresó al evento.<br>
          Este QR no puede usarse nuevamente. No permitir el ingreso.
        </p>
      </div>`;return}if(a.estado==="pendiente"){s.innerHTML=`<div class="result-warn">
        <p style="font-size:16px;font-weight:500;color:#854F0B">⏳ Pago pendiente</p>
        <p style="font-size:12px;color:#633806;margin-top:4px">
          <strong>${a.nombre} ${a.apellido}</strong> no abonó el bono ($35.000).
        </p>
        <button class="btn btn-a" style="margin-top:10px;width:100%;font-size:12px"
          onclick="window._cobrarPuerta('${a.fireId}','${a.codigo}')">
          💰 Cobrar $35.000 y habilitar ingreso
        </button>
      </div>`;return}await ye(a.fireId,{estado:"ingresado"});const c=new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});e.unshift({nombre:a.nombre+" "+a.apellido,codigo:r,hora:c}),s.innerHTML=`<div class="result-ok">
      <p style="font-size:28px">✅</p>
      <p style="font-size:18px;font-weight:500;color:#3B6D11;margin-top:6px">¡Bienvenido/a!</p>
      <p style="font-size:15px;color:#27500A;margin-top:2px">${a.nombre} ${a.apellido}</p>
      <p style="font-size:11px;color:#3B6D11;margin-top:6px;opacity:.8">
        QR marcado — no puede reutilizarse
      </p>
    </div>`,document.getElementById("scan-cod").value="",i()},window._cobrarPuerta=async(r,s)=>{await ye(r,{estado:"pagado"}),document.getElementById("scan-cod").value=s,window._vPuerta()};function i(){const r=document.getElementById("scan-ult");if(r){if(!e.length){r.innerHTML='<p style="font-size:12px;color:#aaa">Sin ingresos aún</p>';return}r.innerHTML=e.slice(0,6).map(s=>`<div style="display:flex;justify-content:space-between;padding:5px 0;
        border-bottom:.5px solid #e0d5c8;font-size:12px">
        <span>✓ ${s.nombre}</span>
        <span style="color:#aaa">${s.codigo} · ${s.hora}</span>
      </div>`).join("")}}window._abrirScannerPuerta=async()=>{document.getElementById("scan-overlay-puerta").style.display="flex";let r=!0;try{await window._initScanner("scan-video-puerta",async s=>{r=!1,window._cerrarScannerPuerta();const a=s.match(/INV-\d+/),c=s.match(/inv=([A-Z0-9]+)/i);if(a)document.getElementById("scan-cod").value=a[0],window._vPuerta();else if(c){const u=await buscarInvitadoPorToken(c[1]);u&&(document.getElementById("scan-cod").value=u.codigo,window._vPuerta())}},"scan-status-puerta")}catch{document.getElementById("scan-status-puerta").textContent="No se pudo acceder a la camara."}},window._cerrarScannerPuerta=()=>{window._scannerStop&&window._scannerStop(),document.getElementById("scan-overlay-puerta").style.display="none"}}const _m=n=>Number(n).toLocaleString("es-AR"),bm={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},Em={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"},Im={pendiente:"Cobrar ✓",pagado:"Listo ✓",listo:"Entregar ✓"},wm={pendiente:"btn-g",pagado:"btn-b",listo:"btn-v"},xm={pendiente:"pagado",pagado:"listo",listo:"entregado"};function Tm(n){Ht();let t=[];n.innerHTML=`
    ${kt({title:"🚚 Logística — Envíos",sub:"Pedidos para enviar a domicilio",backHref:"/admin"})}
    <div class="wrap" id="log-lista"></div>`,tr(i=>{t=i,e()}),window._avzLog=async(i,r)=>{await Uc(i,r)};function e(){const i=document.getElementById("log-lista");if(!i)return;const r=t.filter(c=>c.retiro==="envio");if(!r.length){i.innerHTML='<div class="empty">🚚<br><br>Sin pedidos de envío</div>';return}const s=r.filter(c=>c.estado!=="entregado"),a=r.filter(c=>c.estado==="entregado");i.innerHTML=(s.length?`<p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">Pendientes (${s.length})</p>`:"")+s.map(c=>{var u;return`
        <div class="card" style="margin-bottom:10px;border-left:3px solid #5A1E99">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span style="font-size:15px;font-weight:500;color:#6B1C1C">#${(u=c.fireId)==null?void 0:u.slice(-4).toUpperCase()}</span>
            <span class="badge ${Em[c.estado]}">${bm[c.estado]}</span>
          </div>
          <div style="font-size:13px;font-weight:500;margin-bottom:4px">${c.invNombre||""}</div>
          <div style="font-size:12px;color:#666;margin-bottom:6px">
            ${c.standNombre} · ${(c.items||[]).map(h=>h.desc).join(" · ")}
          </div>
          ${c.envio?`
            <div style="background:#EDE6FB;border-radius:8px;padding:8px 10px;font-size:12px;color:#5A1E99;margin-bottom:8px">
              <strong>${c.envio.nombre}</strong><br>${c.envio.dir}<br>${c.envio.tel}
            </div>`:""}
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:15px;font-weight:500">$${_m(c.total||0)}</span>
            ${xm[c.estado]?`<button class="btn ${wm[c.estado]}" style="font-size:12px"
                  onclick="window._avzLog('${c.fireId}','${c.estado}')">${Im[c.estado]}</button>`:""}
          </div>
        </div>`}).join("")+(a.length?`<div class="sep"></div><p style="font-size:12px;color:#aaa;margin:8px 0">Completados (${a.length})</p>`:"")+a.map(c=>{var u;return`
        <div style="display:flex;justify-content:space-between;padding:6px 0;
          border-bottom:.5px solid #e0d5c8;font-size:12px">
          <span>#${(u=c.fireId)==null?void 0:u.slice(-4).toUpperCase()} — ${c.invNombre}</span>
          <span class="badge b-entr">Entregado</span>
        </div>`}).join("")}}async function Rm(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Cm(n,t,e){await Rm();const i=document.getElementById(n);if(i)try{const r=qrcode(0,"M");r.addData(String(t)),r.make();const s=r.getModuleCount(),a=e/s;i.width=e,i.height=e;const c=i.getContext("2d");c.fillStyle="#fff",c.fillRect(0,0,e,e),c.fillStyle="#000";for(let u=0;u<s;u++)for(let h=0;h<s;h++)r.isDark(u,h)&&c.fillRect(h*a,u*a,a,a)}catch(r){console.error("QR error:",r)}}const Pm=n=>Number(n).toLocaleString("es-AR");async function Sm(n,t){if(Ht(),n.innerHTML=oo(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <p style="color:#aaa;font-size:14px">Cargando...</p>
    </div>`,!t){nl(n,"Link inválido","Este link no contiene información de acreditación.");return}const e=await Ni(t);if(!e){nl(n,"No encontrado","Este link no corresponde a ningún invitado registrado.");return}n.innerHTML=oo(e)+`
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
      <p style="font-size:12px;color:#aaa;margin-top:8px">José Pannunzio +54 9 11 5400-1313</p>`;return}const r=Ae.map(c=>`
    <a href="/stand/${c.id}?inv=${t}"
      style="display:flex;align-items:center;gap:8px;background:#fff;
        border:0.5px solid #D6E4F0;border-radius:8px;padding:8px 10px;
        text-decoration:none;color:inherit">
      <div style="width:28px;height:28px;border-radius:50%;background:#EBF4FA;
        color:#1A3A5C;font-size:11px;font-weight:500;display:flex;
        align-items:center;justify-content:center;flex-shrink:0">${c.id}</div>
      <div style="min-width:0;flex:1">
        <div style="font-size:12px;font-weight:500;color:#1A3A5C;
          white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.nombre}</div>
        <div style="font-size:10px;color:#888">${c.region}</div>
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
    </div>`,setTimeout(()=>Cm("qr-acc",e.codigo,160),50);let s=null,a=!1;window._abrirScannerAcceso=async()=>{const c=document.getElementById("scan-overlay-acc");c&&(c.style.display="flex");const u=document.getElementById("scan-status-acc");try{typeof loadJsQR=="function"?await loadJsQR():await new Promise((C,N)=>{if(window.jsQR){C();return}const R=document.createElement("script");R.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",R.onload=C,R.onerror=N,document.head.appendChild(R)}),s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const h=document.getElementById("scan-video-acc");h.srcObject=s,a=!0,u&&(u.textContent="Buscando QR del stand...");const f=document.createElement("canvas"),g=f.getContext("2d",{willReadFrequently:!0}),y=()=>{if(a){if(h.readyState===h.HAVE_ENOUGH_DATA&&h.videoWidth>0){f.width=h.videoWidth,f.height=h.videoHeight,g.drawImage(h,0,0);const C=g.getImageData(0,0,f.width,f.height),N=window.jsQR(C.data,C.width,C.height,{inversionAttempts:"dontInvert"});if(N&&N.data){const R=N.data;window._cerrarScannerAcceso();const v=R.match(/\/stand\/(\d+)/);v&&(window.location.href="/stand/"+v[1]+"?inv="+t);return}}a&&requestAnimationFrame(y)}};h.addEventListener("loadeddata",()=>requestAnimationFrame(y))}catch{u&&(u.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerAcceso=()=>{a=!1,s&&(s.getTracks().forEach(u=>u.stop()),s=null);const c=document.getElementById("scan-overlay-acc");c&&(c.style.display="none")},qc(e.fireId,c=>{const u=document.getElementById("vouchers-acc");if(u){if(!c.length){u.innerHTML="";return}u.innerHTML=`
      <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px;text-align:left">
        Mis vouchers de retiro
      </p>
      ${c.map(h=>{const f={pagado:"Listo para retirar",entregado:"Entregado"},g=h.estado==="pagado";return`
          <div style="background:${g?"#EAF3DE":"#f5f5f5"};border:.5px solid ${g?"#3B6D11":"#ddd"};
            border-radius:10px;padding:12px 14px;margin-bottom:8px;text-align:left">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px">
              <span style="font-size:13px;font-weight:500;color:#6B1C1C">${h.standNombre}</span>
              <span class="badge ${g?"b-pago":"b-entr"}">${f[h.estado]||h.estado}</span>
            </div>
            <div style="font-size:12px;color:#555;margin-bottom:6px">
              ${(h.items||[]).map(y=>y.desc).join("<br>")}
            </div>
            <div style="font-size:14px;font-weight:500">$${Pm(h.total||0)}</div>
            ${g?`<p style="font-size:11px;color:#3B6D11;margin-top:6px">
              Mostrá este voucher en el stand para retirar tus vinos.
            </p>`:""}
          </div>`}).join("")}`}})}function nl(n,t,e){n.innerHTML=oo(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
    <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${t}</h2>
    <p style="font-size:14px;color:#666">${e}</p>
    <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>`}const Vm=()=>Math.random().toString(36).slice(2,10).toUpperCase();function Dm(n){Ht();let t=0;const e=Qn(i=>{t=i.length,e()});n.innerHTML=`
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
    </div>`,window._autoRegistrar=async()=>{const i=document.getElementById("rn").value.trim(),r=document.getElementById("ra").value.trim(),s=document.getElementById("rt").value.trim(),a=document.getElementById("re").value.trim(),c=document.getElementById("rf").value.trim(),u=document.getElementById("rc").value.trim(),h=document.getElementById("reg-msg");if(!i||!r||!s){h.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}h.innerHTML='<span style="color:#888">Registrando...</span>';try{const f=await kn(()=>Promise.resolve().then(()=>Li),void 0).then(y=>y.escucharInvitados),g="INV-"+String(t+1).padStart(4,"0");await ki({nombre:i,apellido:r,tel:s,...a&&{email:a},...c&&{familia:c},...u&&{comentarios:u},estado:"pendiente",codigo:g,token:Vm()}),document.getElementById("reg-form").innerHTML=`
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
        </div>`}catch(f){h.innerHTML=`<span style="color:#A32D2D">Error: ${f.message}</span>`}}}const Br=n=>Number(n).toLocaleString("es-AR");function km(n,t){if(Ht(),!t||t.estado==="invalidado"){n.innerHTML=`
      <div class="hdr"><div><h1>🛒 Carrito</h1></div></div>
      <div class="gold"></div>
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <p style="font-size:14px;color:#666">Necesitás tu QR de acreditación para ver el carrito.</p>
      </div>`;return}let e=[];n.innerHTML=`
    ${kt({title:"🛒 Mi carrito",sub:t.nombre+" "+t.apellido+" · "+t.codigo,backHref:"/acceso?inv="+t.token,backLabel:"← Mi QR"})}
    <div style="max-width:480px;margin:0 auto;padding:14px" id="carrito-body">
      <div class="empty">Cargando carrito...</div>
    </div>`,Jo(t.fireId,r=>{e=r,i()});function i(){const r=document.getElementById("carrito-body");if(!r)return;if(!e.length||!e.some(a=>{var c;return(c=a.items)==null?void 0:c.length})){r.innerHTML=`
        <div class="empty" style="padding:48px 20px">
          <div style="font-size:48px;margin-bottom:12px">🛒</div>
          <p style="font-size:15px;font-weight:500;margin-bottom:8px">Tu carrito está vacío</p>
          <p style="font-size:13px;color:#aaa">
            Escaneá el QR de cualquier stand para agregar vinos.
          </p>
        </div>`;return}const s=e.reduce((a,c)=>a+(c.items||[]).reduce((u,h)=>u+(h.sub||0),0),0);r.innerHTML=`
      <div style="background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;
        padding:9px 12px;font-size:12px;color:#6B4000;margin-bottom:14px">
        Revisá tu pedido antes de ir a caja. Podés quitar ítems o cambiar la opción de retiro.
      </div>

      ${e.filter(a=>{var c;return(c=a.items)==null?void 0:c.length}).map(a=>`
        <div class="card" style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <div style="font-size:14px;font-weight:500;color:#6B1C1C">
              🍷 ${a.standNombre}
            </div>
            <span style="font-size:11px;color:#aaa">Stand #${a.standId}</span>
          </div>

          ${a.items.map(c=>`
            <div style="display:flex;justify-content:space-between;align-items:center;
              padding:6px 0;border-bottom:.5px solid #f0ebe4">
              <span style="font-size:13px;color:#333">${c.desc}</span>
              <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
                <span style="font-size:13px;font-weight:500">$${Br(c.sub)}</span>
                <button onclick="window._quitarCarrito('${a.standDocId}','${c.key}')"
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
            <span>$${Br((a.items||[]).reduce((c,u)=>c+(u.sub||0),0))}</span>
          </div>
        </div>`).join("")}

      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>Total</span>
          <span style="color:#6B1C1C">$${Br(s)}</span>
        </div>
        <p style="font-size:12px;color:#888;margin-top:6px">
          Llevá este carrito a caja para pagar. El cajero escanea tu código y ve todo.
        </p>
      </div>

      <div style="background:#E6F1FB;border:.5px solid #185FA5;border-radius:8px;
        padding:10px 14px;font-size:12px;color:#185FA5;margin-bottom:14px;text-align:center">
        📍 Tu código de caja: <strong style="font-size:16px;letter-spacing:.1em">${t.codigo}</strong>
      </div>

      <div id="carrito-msg" style="font-size:12px;text-align:center;min-height:16px;margin-bottom:8px"></div>`}window._quitarCarrito=async(r,s)=>{const a=e.find(c=>c.standDocId===r);a&&await Bi(t.fireId,Number(a.standId),s)},window._cambiarRetiro=async(r,s,a)=>{await Xo(t.fireId,Number(s),a)}}async function Jc(){const t=window.location.pathname.replace("/Sucovi2027","")||"/",e=new URLSearchParams(window.location.search),i=document.getElementById("app"),r=t.match(/^\/stand\/(\d+)$/);if(r){const c=parseInt(r[1]),u=Ae.find(g=>g.id===c);if(!u){i.innerHTML=De("Stand no encontrado");return}const h=e.get("inv"),f=h?await Ni(h):null;return mm(i,u,f)}const s=t.match(/^\/panel\/(\d+)$/);if(s){const c=Ae.find(h=>h.id===parseInt(s[1]));if(!c){i.innerHTML=De("Panel no encontrado");return}const u=e.get("key");if(u&&u!==c.key){i.innerHTML=De("Acceso no autorizado");return}if(!u){i.innerHTML=De("Link inválido — usá el link completo que te enviaron");return}return Kc(i,c)}const a=t.match(/^\/bodega\/(\d+)\/vinos$/);if(a){const c=Ae.find(h=>h.id===parseInt(a[1]));if(!c){i.innerHTML=De("Bodega no encontrada");return}const u=e.get("key");if(u&&u!==c.key){i.innerHTML=De("Acceso no autorizado");return}return Xc(i,c)}if(t==="/carrito"){const c=e.get("inv"),u=c?await Ni(c):null;return km(i,u)}return t==="/acceso"?Sm(i,e.get("inv")):t==="/registro"?Dm(i):t==="/caja"?fm(i):t==="/puerta"?Am(i):t==="/logistica"?Tm(i):hm(i)}function De(n){return`<div style="padding:60px;text-align:center;color:#aaa;font-size:14px">${n}</div>`}Jc();window.addEventListener("popstate",Jc);(function(){var n=window.location.search.match(/[?&]p=([^&]+)/);if(n){var t="/Sucovi2027",e=decodeURIComponent(n[1].replace(/~and~/g,"&"));window.history.replaceState(null,null,t+"/"+e)}})();
