(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();var ma={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?t[e++]=o:o<2048?(t[e++]=o>>6|192,t[e++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=o>>18|240,t[e++]=o>>12&63|128,t[e++]=o>>6&63|128,t[e++]=o&63|128):(t[e++]=o>>12|224,t[e++]=o>>6&63|128,t[e++]=o&63|128)}return t},Jd=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const o=n[e++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const s=n[e++];t[i++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=n[e++],a=n[e++],l=n[e++],d=((o&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(d>>10)),t[i++]=String.fromCharCode(56320+(d&1023))}else{const s=n[e++],a=n[e++];t[i++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const s=n[o],a=o+1<n.length,l=a?n[o+1]:0,d=o+2<n.length,u=d?n[o+2]:0,m=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,A=u&63;d||(A=64,a||(g=64)),i.push(e[m],e[p],e[g],e[A])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(wl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Jd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const s=e[n.charAt(o++)],l=o<n.length?e[n.charAt(o)]:0;++o;const u=o<n.length?e[n.charAt(o)]:64;++o;const p=o<n.length?e[n.charAt(o)]:64;if(++o,s==null||l==null||u==null||p==null)throw new Zd;const g=s<<2|l>>4;if(i.push(g),u!==64){const A=l<<4&240|u>>2;if(i.push(A),p!==64){const S=u<<6&192|p;i.push(S)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yd=function(n){const t=wl(n);return Al.encodeByteArray(t,!0)},Ni=function(n){return Yd(n).replace(/\./g,"")},tu=function(n){try{return Al.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function eu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nu=()=>eu().__FIREBASE_DEFAULTS__,iu=()=>{if(typeof process>"u"||typeof ma>"u")return;const n=ma.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ou=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&tu(n[1]);return t&&JSON.parse(t)},Ar=()=>{try{return nu()||iu()||ou()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ru=n=>{var t,e;return(e=(t=Ar())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},su=n=>{const t=ru(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},xl=()=>{var n;return(n=Ar())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function lu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",o=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ni(JSON.stringify(e)),Ni(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function du(){var n;const t=(n=Ar())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uu(){return!du()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hu(){try{return typeof indexedDB=="object"}catch{return!1}}function pu(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{var s;t(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="FirebaseError";class an extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=fu,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_l.prototype.create)}}class _l{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},o=`${this.service}/${t}`,s=this.errors[t],a=s?mu(s,i):"Error",l=`${this.serviceName}: ${a} (${o}).`;return new an(o,l,i)}}function mu(n,t){return n.replace(gu,(e,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const gu=/\{\$([^}]+)}/g;function Jo(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const o of e){if(!i.includes(o))return!1;const s=n[o],a=t[o];if(ga(s)&&ga(a)){if(!Jo(s,a))return!1}else if(s!==a)return!1}for(const o of i)if(!e.includes(o))return!1;return!0}function ga(n){return n!==null&&typeof n=="object"}/**
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
 */function jt(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Pe="[DEFAULT]";/**
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
 */class yu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new au;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:e});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bu(t))try{this.getOrInitializeService({instanceIdentifier:Pe})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:o});i.resolve(s)}catch{}}}}clearInstance(t=Pe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pe){return this.instances.has(t)}getOptions(t=Pe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&a.resolve(o)}return o}onInit(t,e){var i;const o=this.normalizeInstanceIdentifier(e),s=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(o,s);const a=this.instances.get(o);return a&&t(a,o),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const o of i)try{o(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:vu(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Pe){return this.component?this.component.multipleInstances?t:Pe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vu(n){return n===Pe?void 0:n}function bu(n){return n.instantiationMode==="EAGER"}/**
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
 */class wu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new yu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Au={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},xu=K.INFO,_u={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Iu=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),o=_u[t];if(o)console[o](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Il{constructor(t){this.name=t,this._logLevel=xu,this._logHandler=Iu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Au[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Eu=(n,t)=>t.some(e=>n instanceof e);let ya,va;function Tu(){return ya||(ya=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ru(){return va||(va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const El=new WeakMap,Zo=new WeakMap,Tl=new WeakMap,zo=new WeakMap,xr=new WeakMap;function Cu(n){const t=new Promise((e,i)=>{const o=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(fe(n.result)),o()},a=()=>{i(n.error),o()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&El.set(e,n)}).catch(()=>{}),xr.set(t,n),t}function Su(n){if(Zo.has(n))return;const t=new Promise((e,i)=>{const o=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),o()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Zo.set(n,t)}let Yo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Zo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Tl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return fe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Pu(n){Yo=n(Yo)}function ku(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(jo(this),t,...e);return Tl.set(i,t.sort?t.sort():[t]),fe(i)}:Ru().includes(n)?function(...t){return n.apply(jo(this),t),fe(El.get(this))}:function(...t){return fe(n.apply(jo(this),t))}}function Vu(n){return typeof n=="function"?ku(n):(n instanceof IDBTransaction&&Su(n),Eu(n,Tu())?new Proxy(n,Yo):n)}function fe(n){if(n instanceof IDBRequest)return Cu(n);if(zo.has(n))return zo.get(n);const t=Vu(n);return t!==n&&(zo.set(n,t),xr.set(t,n)),t}const jo=n=>xr.get(n);function Du(n,t,{blocked:e,upgrade:i,blocking:o,terminated:s}={}){const a=indexedDB.open(n,t),l=fe(a);return i&&a.addEventListener("upgradeneeded",d=>{i(fe(a.result),d.oldVersion,d.newVersion,fe(a.transaction),d)}),e&&a.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),l.then(d=>{s&&d.addEventListener("close",()=>s()),o&&d.addEventListener("versionchange",u=>o(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Bu=["get","getKey","getAll","getAllKeys","count"],Nu=["put","add","delete","clear"],qo=new Map;function ba(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(qo.get(t))return qo.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,o=Nu.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(o||Bu.includes(e)))return;const s=async function(a,...l){const d=this.transaction(a,o?"readwrite":"readonly");let u=d.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[e](...l),o&&d.done]))[0]};return qo.set(t,s),s}Pu(n=>({...n,get:(t,e,i)=>ba(t,e)||n.get(t,e,i),has:(t,e)=>!!ba(t,e)||n.has(t,e)}));/**
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
 */class Lu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Fu(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Fu(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const tr="@firebase/app",wa="0.10.13";/**
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
 */const oe=new Il("@firebase/app"),Mu="@firebase/app-compat",Ou="@firebase/analytics-compat",zu="@firebase/analytics",ju="@firebase/app-check-compat",qu="@firebase/app-check",Hu="@firebase/auth",Uu="@firebase/auth-compat",$u="@firebase/database",Qu="@firebase/data-connect",Wu="@firebase/database-compat",Gu="@firebase/functions",Ku="@firebase/functions-compat",Xu="@firebase/installations",Ju="@firebase/installations-compat",Zu="@firebase/messaging",Yu="@firebase/messaging-compat",th="@firebase/performance",eh="@firebase/performance-compat",nh="@firebase/remote-config",ih="@firebase/remote-config-compat",oh="@firebase/storage",rh="@firebase/storage-compat",sh="@firebase/firestore",ah="@firebase/vertexai-preview",lh="@firebase/firestore-compat",ch="firebase",dh="10.14.1";/**
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
 */const er="[DEFAULT]",uh={[tr]:"fire-core",[Mu]:"fire-core-compat",[zu]:"fire-analytics",[Ou]:"fire-analytics-compat",[qu]:"fire-app-check",[ju]:"fire-app-check-compat",[Hu]:"fire-auth",[Uu]:"fire-auth-compat",[$u]:"fire-rtdb",[Qu]:"fire-data-connect",[Wu]:"fire-rtdb-compat",[Gu]:"fire-fn",[Ku]:"fire-fn-compat",[Xu]:"fire-iid",[Ju]:"fire-iid-compat",[Zu]:"fire-fcm",[Yu]:"fire-fcm-compat",[th]:"fire-perf",[eh]:"fire-perf-compat",[nh]:"fire-rc",[ih]:"fire-rc-compat",[oh]:"fire-gcs",[rh]:"fire-gcs-compat",[sh]:"fire-fst",[lh]:"fire-fst-compat",[ah]:"fire-vertex","fire-js":"fire-js",[ch]:"fire-js-all"};/**
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
 */const Li=new Map,hh=new Map,nr=new Map;function Aa(n,t){try{n.container.addComponent(t)}catch(e){oe.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fi(n){const t=n.name;if(nr.has(t))return oe.debug(`There were multiple attempts to register component ${t}.`),!1;nr.set(t,n);for(const e of Li.values())Aa(e,n);for(const e of hh.values())Aa(e,n);return!0}function ph(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const fh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},me=new _l("app","Firebase",fh);/**
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
 */class mh{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}/**
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
 */const gh=dh;function Rl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:er,automaticDataCollectionEnabled:!1},t),o=i.name;if(typeof o!="string"||!o)throw me.create("bad-app-name",{appName:String(o)});if(e||(e=xl()),!e)throw me.create("no-options");const s=Li.get(o);if(s){if(Jo(e,s.options)&&Jo(i,s.config))return s;throw me.create("duplicate-app",{appName:o})}const a=new wu(o);for(const d of nr.values())a.addComponent(d);const l=new mh(e,i,a);return Li.set(o,l),l}function yh(n=er){const t=Li.get(n);if(!t&&n===er&&xl())return Rl();if(!t)throw me.create("no-app",{appName:n});return t}function Je(n,t,e){var i;let o=(i=uh[n])!==null&&i!==void 0?i:n;e&&(o+=`-${e}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${o}" with version "${t}":`];s&&l.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),oe.warn(l.join(" "));return}Fi(new Mn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const vh="firebase-heartbeat-database",bh=1,On="firebase-heartbeat-store";let Ho=null;function Cl(){return Ho||(Ho=Du(vh,bh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(On)}catch(e){console.warn(e)}}}}).catch(n=>{throw me.create("idb-open",{originalErrorMessage:n.message})})),Ho}async function wh(n){try{const e=(await Cl()).transaction(On),i=await e.objectStore(On).get(Sl(n));return await e.done,i}catch(t){if(t instanceof an)oe.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});oe.warn(e.message)}}}async function xa(n,t){try{const i=(await Cl()).transaction(On,"readwrite");await i.objectStore(On).put(t,Sl(n)),await i.done}catch(e){if(e instanceof an)oe.warn(e.message);else{const i=me.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});oe.warn(i.message)}}}function Sl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ah=1024,xh=30*24*60*60*1e3;class _h{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Eh(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_a();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=xh}),this._storage.overwrite(this._heartbeatsCache))}catch(i){oe.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_a(),{heartbeatsToSend:i,unsentEntries:o}=Ih(this._heartbeatsCache.heartbeats),s=Ni(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return oe.warn(e),""}}}function _a(){return new Date().toISOString().substring(0,10)}function Ih(n,t=Ah){const e=[];let i=n.slice();for(const o of n){const s=e.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),Ia(e)>t){s.dates.pop();break}}else if(e.push({agent:o.agent,dates:[o.date]}),Ia(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Eh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hu()?pu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await wh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return xa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return xa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Ia(n){return Ni(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Th(n){Fi(new Mn("platform-logger",t=>new Lu(t),"PRIVATE")),Fi(new Mn("heartbeat",t=>new _h(t),"PRIVATE")),Je(tr,wa,n),Je(tr,wa,"esm2017"),Je("fire-js","")}Th("");var Rh="firebase",Ch="10.14.1";/**
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
 */Je(Rh,Ch,"app");var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var De,Pl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,f){function w(){}w.prototype=f.prototype,v.D=f.prototype,v.prototype=new w,v.prototype.constructor=v,v.C=function(b,x,_){for(var I=Array(arguments.length-2),q=2;q<arguments.length;q++)I[q-2]=arguments[q];return f.prototype[x].apply(b,I)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(v,f,w){w||(w=0);var b=Array(16);if(typeof f=="string")for(var x=0;16>x;++x)b[x]=f.charCodeAt(w++)|f.charCodeAt(w++)<<8|f.charCodeAt(w++)<<16|f.charCodeAt(w++)<<24;else for(x=0;16>x;++x)b[x]=f[w++]|f[w++]<<8|f[w++]<<16|f[w++]<<24;f=v.g[0],w=v.g[1],x=v.g[2];var _=v.g[3],I=f+(_^w&(x^_))+b[0]+3614090360&4294967295;f=w+(I<<7&4294967295|I>>>25),I=_+(x^f&(w^x))+b[1]+3905402710&4294967295,_=f+(I<<12&4294967295|I>>>20),I=x+(w^_&(f^w))+b[2]+606105819&4294967295,x=_+(I<<17&4294967295|I>>>15),I=w+(f^x&(_^f))+b[3]+3250441966&4294967295,w=x+(I<<22&4294967295|I>>>10),I=f+(_^w&(x^_))+b[4]+4118548399&4294967295,f=w+(I<<7&4294967295|I>>>25),I=_+(x^f&(w^x))+b[5]+1200080426&4294967295,_=f+(I<<12&4294967295|I>>>20),I=x+(w^_&(f^w))+b[6]+2821735955&4294967295,x=_+(I<<17&4294967295|I>>>15),I=w+(f^x&(_^f))+b[7]+4249261313&4294967295,w=x+(I<<22&4294967295|I>>>10),I=f+(_^w&(x^_))+b[8]+1770035416&4294967295,f=w+(I<<7&4294967295|I>>>25),I=_+(x^f&(w^x))+b[9]+2336552879&4294967295,_=f+(I<<12&4294967295|I>>>20),I=x+(w^_&(f^w))+b[10]+4294925233&4294967295,x=_+(I<<17&4294967295|I>>>15),I=w+(f^x&(_^f))+b[11]+2304563134&4294967295,w=x+(I<<22&4294967295|I>>>10),I=f+(_^w&(x^_))+b[12]+1804603682&4294967295,f=w+(I<<7&4294967295|I>>>25),I=_+(x^f&(w^x))+b[13]+4254626195&4294967295,_=f+(I<<12&4294967295|I>>>20),I=x+(w^_&(f^w))+b[14]+2792965006&4294967295,x=_+(I<<17&4294967295|I>>>15),I=w+(f^x&(_^f))+b[15]+1236535329&4294967295,w=x+(I<<22&4294967295|I>>>10),I=f+(x^_&(w^x))+b[1]+4129170786&4294967295,f=w+(I<<5&4294967295|I>>>27),I=_+(w^x&(f^w))+b[6]+3225465664&4294967295,_=f+(I<<9&4294967295|I>>>23),I=x+(f^w&(_^f))+b[11]+643717713&4294967295,x=_+(I<<14&4294967295|I>>>18),I=w+(_^f&(x^_))+b[0]+3921069994&4294967295,w=x+(I<<20&4294967295|I>>>12),I=f+(x^_&(w^x))+b[5]+3593408605&4294967295,f=w+(I<<5&4294967295|I>>>27),I=_+(w^x&(f^w))+b[10]+38016083&4294967295,_=f+(I<<9&4294967295|I>>>23),I=x+(f^w&(_^f))+b[15]+3634488961&4294967295,x=_+(I<<14&4294967295|I>>>18),I=w+(_^f&(x^_))+b[4]+3889429448&4294967295,w=x+(I<<20&4294967295|I>>>12),I=f+(x^_&(w^x))+b[9]+568446438&4294967295,f=w+(I<<5&4294967295|I>>>27),I=_+(w^x&(f^w))+b[14]+3275163606&4294967295,_=f+(I<<9&4294967295|I>>>23),I=x+(f^w&(_^f))+b[3]+4107603335&4294967295,x=_+(I<<14&4294967295|I>>>18),I=w+(_^f&(x^_))+b[8]+1163531501&4294967295,w=x+(I<<20&4294967295|I>>>12),I=f+(x^_&(w^x))+b[13]+2850285829&4294967295,f=w+(I<<5&4294967295|I>>>27),I=_+(w^x&(f^w))+b[2]+4243563512&4294967295,_=f+(I<<9&4294967295|I>>>23),I=x+(f^w&(_^f))+b[7]+1735328473&4294967295,x=_+(I<<14&4294967295|I>>>18),I=w+(_^f&(x^_))+b[12]+2368359562&4294967295,w=x+(I<<20&4294967295|I>>>12),I=f+(w^x^_)+b[5]+4294588738&4294967295,f=w+(I<<4&4294967295|I>>>28),I=_+(f^w^x)+b[8]+2272392833&4294967295,_=f+(I<<11&4294967295|I>>>21),I=x+(_^f^w)+b[11]+1839030562&4294967295,x=_+(I<<16&4294967295|I>>>16),I=w+(x^_^f)+b[14]+4259657740&4294967295,w=x+(I<<23&4294967295|I>>>9),I=f+(w^x^_)+b[1]+2763975236&4294967295,f=w+(I<<4&4294967295|I>>>28),I=_+(f^w^x)+b[4]+1272893353&4294967295,_=f+(I<<11&4294967295|I>>>21),I=x+(_^f^w)+b[7]+4139469664&4294967295,x=_+(I<<16&4294967295|I>>>16),I=w+(x^_^f)+b[10]+3200236656&4294967295,w=x+(I<<23&4294967295|I>>>9),I=f+(w^x^_)+b[13]+681279174&4294967295,f=w+(I<<4&4294967295|I>>>28),I=_+(f^w^x)+b[0]+3936430074&4294967295,_=f+(I<<11&4294967295|I>>>21),I=x+(_^f^w)+b[3]+3572445317&4294967295,x=_+(I<<16&4294967295|I>>>16),I=w+(x^_^f)+b[6]+76029189&4294967295,w=x+(I<<23&4294967295|I>>>9),I=f+(w^x^_)+b[9]+3654602809&4294967295,f=w+(I<<4&4294967295|I>>>28),I=_+(f^w^x)+b[12]+3873151461&4294967295,_=f+(I<<11&4294967295|I>>>21),I=x+(_^f^w)+b[15]+530742520&4294967295,x=_+(I<<16&4294967295|I>>>16),I=w+(x^_^f)+b[2]+3299628645&4294967295,w=x+(I<<23&4294967295|I>>>9),I=f+(x^(w|~_))+b[0]+4096336452&4294967295,f=w+(I<<6&4294967295|I>>>26),I=_+(w^(f|~x))+b[7]+1126891415&4294967295,_=f+(I<<10&4294967295|I>>>22),I=x+(f^(_|~w))+b[14]+2878612391&4294967295,x=_+(I<<15&4294967295|I>>>17),I=w+(_^(x|~f))+b[5]+4237533241&4294967295,w=x+(I<<21&4294967295|I>>>11),I=f+(x^(w|~_))+b[12]+1700485571&4294967295,f=w+(I<<6&4294967295|I>>>26),I=_+(w^(f|~x))+b[3]+2399980690&4294967295,_=f+(I<<10&4294967295|I>>>22),I=x+(f^(_|~w))+b[10]+4293915773&4294967295,x=_+(I<<15&4294967295|I>>>17),I=w+(_^(x|~f))+b[1]+2240044497&4294967295,w=x+(I<<21&4294967295|I>>>11),I=f+(x^(w|~_))+b[8]+1873313359&4294967295,f=w+(I<<6&4294967295|I>>>26),I=_+(w^(f|~x))+b[15]+4264355552&4294967295,_=f+(I<<10&4294967295|I>>>22),I=x+(f^(_|~w))+b[6]+2734768916&4294967295,x=_+(I<<15&4294967295|I>>>17),I=w+(_^(x|~f))+b[13]+1309151649&4294967295,w=x+(I<<21&4294967295|I>>>11),I=f+(x^(w|~_))+b[4]+4149444226&4294967295,f=w+(I<<6&4294967295|I>>>26),I=_+(w^(f|~x))+b[11]+3174756917&4294967295,_=f+(I<<10&4294967295|I>>>22),I=x+(f^(_|~w))+b[2]+718787259&4294967295,x=_+(I<<15&4294967295|I>>>17),I=w+(_^(x|~f))+b[9]+3951481745&4294967295,v.g[0]=v.g[0]+f&4294967295,v.g[1]=v.g[1]+(x+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+x&4294967295,v.g[3]=v.g[3]+_&4294967295}i.prototype.u=function(v,f){f===void 0&&(f=v.length);for(var w=f-this.blockSize,b=this.B,x=this.h,_=0;_<f;){if(x==0)for(;_<=w;)o(this,v,_),_+=this.blockSize;if(typeof v=="string"){for(;_<f;)if(b[x++]=v.charCodeAt(_++),x==this.blockSize){o(this,b),x=0;break}}else for(;_<f;)if(b[x++]=v[_++],x==this.blockSize){o(this,b),x=0;break}}this.h=x,this.o+=f},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var f=1;f<v.length-8;++f)v[f]=0;var w=8*this.o;for(f=v.length-8;f<v.length;++f)v[f]=w&255,w/=256;for(this.u(v),v=Array(16),f=w=0;4>f;++f)for(var b=0;32>b;b+=8)v[w++]=this.g[f]>>>b&255;return v};function s(v,f){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=f(v)}function a(v,f){this.h=f;for(var w=[],b=!0,x=v.length-1;0<=x;x--){var _=v[x]|0;b&&_==f||(w[x]=_,b=!1)}this.g=w}var l={};function d(v){return-128<=v&&128>v?s(v,function(f){return new a([f|0],0>f?-1:0)}):new a([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return T(u(-v));for(var f=[],w=1,b=0;v>=w;b++)f[b]=v/w|0,w*=4294967296;return new a(f,0)}function m(v,f){if(v.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(v.charAt(0)=="-")return T(m(v.substring(1),f));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(f,8)),b=p,x=0;x<v.length;x+=8){var _=Math.min(8,v.length-x),I=parseInt(v.substring(x,x+_),f);8>_?(_=u(Math.pow(f,_)),b=b.j(_).add(u(I))):(b=b.j(w),b=b.add(u(I)))}return b}var p=d(0),g=d(1),A=d(16777216);n=a.prototype,n.m=function(){if(C(this))return-T(this).m();for(var v=0,f=1,w=0;w<this.g.length;w++){var b=this.i(w);v+=(0<=b?b:4294967296+b)*f,f*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(C(this))return"-"+T(this).toString(v);for(var f=u(Math.pow(v,6)),w=this,b="";;){var x=L(w,f).g;w=V(w,x.j(f));var _=((0<w.g.length?w.g[0]:w.h)>>>0).toString(v);if(w=x,S(w))return _+b;for(;6>_.length;)_="0"+_;b=_+b}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var f=0;f<v.g.length;f++)if(v.g[f]!=0)return!1;return!0}function C(v){return v.h==-1}n.l=function(v){return v=V(this,v),C(v)?-1:S(v)?0:1};function T(v){for(var f=v.g.length,w=[],b=0;b<f;b++)w[b]=~v.g[b];return new a(w,~v.h).add(g)}n.abs=function(){return C(this)?T(this):this},n.add=function(v){for(var f=Math.max(this.g.length,v.g.length),w=[],b=0,x=0;x<=f;x++){var _=b+(this.i(x)&65535)+(v.i(x)&65535),I=(_>>>16)+(this.i(x)>>>16)+(v.i(x)>>>16);b=I>>>16,_&=65535,I&=65535,w[x]=I<<16|_}return new a(w,w[w.length-1]&-2147483648?-1:0)};function V(v,f){return v.add(T(f))}n.j=function(v){if(S(this)||S(v))return p;if(C(this))return C(v)?T(this).j(T(v)):T(T(this).j(v));if(C(v))return T(this.j(T(v)));if(0>this.l(A)&&0>v.l(A))return u(this.m()*v.m());for(var f=this.g.length+v.g.length,w=[],b=0;b<2*f;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(var x=0;x<v.g.length;x++){var _=this.i(b)>>>16,I=this.i(b)&65535,q=v.i(x)>>>16,Rt=v.i(x)&65535;w[2*b+2*x]+=I*Rt,k(w,2*b+2*x),w[2*b+2*x+1]+=_*Rt,k(w,2*b+2*x+1),w[2*b+2*x+1]+=I*q,k(w,2*b+2*x+1),w[2*b+2*x+2]+=_*q,k(w,2*b+2*x+2)}for(b=0;b<f;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=f;b<2*f;b++)w[b]=0;return new a(w,0)};function k(v,f){for(;(v[f]&65535)!=v[f];)v[f+1]+=v[f]>>>16,v[f]&=65535,f++}function B(v,f){this.g=v,this.h=f}function L(v,f){if(S(f))throw Error("division by zero");if(S(v))return new B(p,p);if(C(v))return f=L(T(v),f),new B(T(f.g),T(f.h));if(C(f))return f=L(v,T(f)),new B(T(f.g),f.h);if(30<v.g.length){if(C(v)||C(f))throw Error("slowDivide_ only works with positive integers.");for(var w=g,b=f;0>=b.l(v);)w=R(w),b=R(b);var x=E(w,1),_=E(b,1);for(b=E(b,2),w=E(w,2);!S(b);){var I=_.add(b);0>=I.l(v)&&(x=x.add(w),_=I),b=E(b,1),w=E(w,1)}return f=V(v,x.j(f)),new B(x,f)}for(x=p;0<=v.l(f);){for(w=Math.max(1,Math.floor(v.m()/f.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),_=u(w),I=_.j(f);C(I)||0<I.l(v);)w-=b,_=u(w),I=_.j(f);S(_)&&(_=g),x=x.add(_),v=V(v,I)}return new B(x,v)}n.A=function(v){return L(this,v).h},n.and=function(v){for(var f=Math.max(this.g.length,v.g.length),w=[],b=0;b<f;b++)w[b]=this.i(b)&v.i(b);return new a(w,this.h&v.h)},n.or=function(v){for(var f=Math.max(this.g.length,v.g.length),w=[],b=0;b<f;b++)w[b]=this.i(b)|v.i(b);return new a(w,this.h|v.h)},n.xor=function(v){for(var f=Math.max(this.g.length,v.g.length),w=[],b=0;b<f;b++)w[b]=this.i(b)^v.i(b);return new a(w,this.h^v.h)};function R(v){for(var f=v.g.length+1,w=[],b=0;b<f;b++)w[b]=v.i(b)<<1|v.i(b-1)>>>31;return new a(w,v.h)}function E(v,f){var w=f>>5;f%=32;for(var b=v.g.length-w,x=[],_=0;_<b;_++)x[_]=0<f?v.i(_+w)>>>f|v.i(_+w+1)<<32-f:v.i(_+w);return new a(x,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Pl=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=m,De=a}).apply(typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{});var Ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kl,Pn,Vl,Si,ir,Dl,Bl,Nl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,c,h){return r==Array.prototype||r==Object.prototype||(r[c]=h.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ii=="object"&&Ii];for(var c=0;c<r.length;++c){var h=r[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=e(this);function o(r,c){if(c)t:{var h=i;r=r.split(".");for(var y=0;y<r.length-1;y++){var P=r[y];if(!(P in h))break t;h=h[P]}r=r[r.length-1],y=h[r],c=c(y),c!=y&&c!=null&&t(h,r,{configurable:!0,writable:!0,value:c})}}function s(r,c){r instanceof String&&(r+="");var h=0,y=!1,P={next:function(){if(!y&&h<r.length){var D=h++;return{value:c(D,r[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}o("Array.prototype.values",function(r){return r||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function d(r){var c=typeof r;return c=c!="object"?c:r?Array.isArray(r)?"array":c:"null",c=="array"||c=="object"&&typeof r.length=="number"}function u(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function m(r,c,h){return r.call.apply(r.bind,arguments)}function p(r,c,h){if(!r)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),r.apply(c,P)}}return function(){return r.apply(c,arguments)}}function g(r,c,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:p,g.apply(null,arguments)}function A(r,c){var h=Array.prototype.slice.call(arguments,1);return function(){var y=h.slice();return y.push.apply(y,arguments),r.apply(this,y)}}function S(r,c){function h(){}h.prototype=c.prototype,r.aa=c.prototype,r.prototype=new h,r.prototype.constructor=r,r.Qb=function(y,P,D){for(var M=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)M[Y-2]=arguments[Y];return c.prototype[P].apply(y,M)}}function C(r){const c=r.length;if(0<c){const h=Array(c);for(let y=0;y<c;y++)h[y]=r[y];return h}return[]}function T(r,c){for(let h=1;h<arguments.length;h++){const y=arguments[h];if(d(y)){const P=r.length||0,D=y.length||0;r.length=P+D;for(let M=0;M<D;M++)r[P+M]=y[M]}else r.push(y)}}class V{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function k(r){return/^[\s\xa0]*$/.test(r)}function B(){var r=l.navigator;return r&&(r=r.userAgent)?r:""}function L(r){return L[" "](r),r}L[" "]=function(){};var R=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function E(r,c,h){for(const y in r)c.call(h,r[y],y,r)}function v(r,c){for(const h in r)c.call(void 0,r[h],h,r)}function f(r){const c={};for(const h in r)c[h]=r[h];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(r,c){let h,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(h in y)r[h]=y[h];for(let D=0;D<w.length;D++)h=w[D],Object.prototype.hasOwnProperty.call(y,h)&&(r[h]=y[h])}}function x(r){var c=1;r=r.split(":");const h=[];for(;0<c&&r.length;)h.push(r.shift()),c--;return r.length&&h.push(r.join(":")),h}function _(r){l.setTimeout(()=>{throw r},0)}function I(){var r=Bt;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class q{constructor(){this.h=this.g=null}add(c,h){const y=Rt.get();y.set(c,h),this.h?this.h.next=y:this.g=y,this.h=y}}var Rt=new V(()=>new Yt,r=>r.reset());class Yt{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Vt,Dt=!1,Bt=new q,Gt=()=>{const r=l.Promise.resolve(void 0);Vt=()=>{r.then(Nt)}};var Nt=()=>{for(var r;r=I();){try{r.h.call(r.g)}catch(h){_(h)}var c=Rt;c.j(r),100>c.h&&(c.h++,r.next=c.g,c.g=r)}Dt=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var ai=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return r}();function _e(r,c){if(st.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var h=this.type=r.type,y=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget){if(R){t:{try{L(c.nodeName);var P=!0;break t}catch{}P=!1}P||(c=null)}}else h=="mouseover"?c=r.fromElement:h=="mouseout"&&(c=r.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:vo[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&_e.aa.h.call(this)}}S(_e,st);var vo={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),mn=0;function Ft(r,c,h,y,P){this.listener=r,this.proxy=null,this.src=c,this.type=h,this.capture=!!y,this.ha=P,this.key=++mn,this.da=this.fa=!1}function wt(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function Kt(r){this.src=r,this.g={},this.h=0}Kt.prototype.add=function(r,c,h,y,P){var D=r.toString();r=this.g[D],r||(r=this.g[D]=[],this.h++);var M=Ee(r,c,y,P);return-1<M?(c=r[M],h||(c.fa=!1)):(c=new Ft(c,this.src,D,!!y,P),c.fa=h,r.push(c)),c};function Ie(r,c){var h=c.type;if(h in r.g){var y=r.g[h],P=Array.prototype.indexOf.call(y,c,void 0),D;(D=0<=P)&&Array.prototype.splice.call(y,P,1),D&&(wt(c),r.g[h].length==0&&(delete r.g[h],r.h--))}}function Ee(r,c,h,y){for(var P=0;P<r.length;++P){var D=r[P];if(!D.da&&D.listener==c&&D.capture==!!h&&D.ha==y)return P}return-1}var bo="closure_lm_"+(1e6*Math.random()|0),wo={};function gs(r,c,h,y,P){if(Array.isArray(c)){for(var D=0;D<c.length;D++)gs(r,c[D],h,y,P);return null}return h=bs(h),r&&r[te]?r.K(c,h,u(y)?!!y.capture:!1,P):xd(r,c,h,!1,y,P)}function xd(r,c,h,y,P,D){if(!c)throw Error("Invalid event type");var M=u(P)?!!P.capture:!!P,Y=xo(r);if(Y||(r[bo]=Y=new Kt(r)),h=Y.add(c,h,y,M,D),h.proxy)return h;if(y=_d(),h.proxy=y,y.src=r,y.listener=h,r.addEventListener)ai||(P=M),P===void 0&&(P=!1),r.addEventListener(c.toString(),y,P);else if(r.attachEvent)r.attachEvent(vs(c.toString()),y);else if(r.addListener&&r.removeListener)r.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return h}function _d(){function r(h){return c.call(r.src,r.listener,h)}const c=Id;return r}function ys(r,c,h,y,P){if(Array.isArray(c))for(var D=0;D<c.length;D++)ys(r,c[D],h,y,P);else y=u(y)?!!y.capture:!!y,h=bs(h),r&&r[te]?(r=r.i,c=String(c).toString(),c in r.g&&(D=r.g[c],h=Ee(D,h,y,P),-1<h&&(wt(D[h]),Array.prototype.splice.call(D,h,1),D.length==0&&(delete r.g[c],r.h--)))):r&&(r=xo(r))&&(c=r.g[c.toString()],r=-1,c&&(r=Ee(c,h,y,P)),(h=-1<r?c[r]:null)&&Ao(h))}function Ao(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[te])Ie(c.i,r);else{var h=r.type,y=r.proxy;c.removeEventListener?c.removeEventListener(h,y,r.capture):c.detachEvent?c.detachEvent(vs(h),y):c.addListener&&c.removeListener&&c.removeListener(y),(h=xo(c))?(Ie(h,r),h.h==0&&(h.src=null,c[bo]=null)):wt(r)}}}function vs(r){return r in wo?wo[r]:wo[r]="on"+r}function Id(r,c){if(r.da)r=!0;else{c=new _e(c,this);var h=r.listener,y=r.ha||r.src;r.fa&&Ao(r),r=h.call(y,c)}return r}function xo(r){return r=r[bo],r instanceof Kt?r:null}var _o="__closure_events_fn_"+(1e9*Math.random()>>>0);function bs(r){return typeof r=="function"?r:(r[_o]||(r[_o]=function(c){return r.handleEvent(c)}),r[_o])}function At(){Lt.call(this),this.i=new Kt(this),this.M=this,this.F=null}S(At,Lt),At.prototype[te]=!0,At.prototype.removeEventListener=function(r,c,h,y){ys(this,r,c,h,y)};function Ct(r,c){var h,y=r.F;if(y)for(h=[];y;y=y.F)h.push(y);if(r=r.M,y=c.type||c,typeof c=="string")c=new st(c,r);else if(c instanceof st)c.target=c.target||r;else{var P=c;c=new st(y,r),b(c,P)}if(P=!0,h)for(var D=h.length-1;0<=D;D--){var M=c.g=h[D];P=li(M,y,!0,c)&&P}if(M=c.g=r,P=li(M,y,!0,c)&&P,P=li(M,y,!1,c)&&P,h)for(D=0;D<h.length;D++)M=c.g=h[D],P=li(M,y,!1,c)&&P}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var r=this.i,c;for(c in r.g){for(var h=r.g[c],y=0;y<h.length;y++)wt(h[y]);delete r.g[c],r.h--}}this.F=null},At.prototype.K=function(r,c,h,y){return this.i.add(String(r),c,!1,h,y)},At.prototype.L=function(r,c,h,y){return this.i.add(String(r),c,!0,h,y)};function li(r,c,h,y){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,D=0;D<c.length;++D){var M=c[D];if(M&&!M.da&&M.capture==h){var Y=M.listener,pt=M.ha||M.src;M.fa&&Ie(r.i,M),P=Y.call(pt,y)!==!1&&P}}return P&&!y.defaultPrevented}function ws(r,c,h){if(typeof r=="function")h&&(r=g(r,h));else if(r&&typeof r.handleEvent=="function")r=g(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(r,c||0)}function As(r){r.g=ws(()=>{r.g=null,r.i&&(r.i=!1,As(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class Ed extends Lt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:As(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(r){Lt.call(this),this.h=r,this.g={}}S(gn,Lt);var xs=[];function _s(r){E(r.g,function(c,h){this.g.hasOwnProperty(h)&&Ao(c)},r),r.g={}}gn.prototype.N=function(){gn.aa.N.call(this),_s(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Io=l.JSON.stringify,Td=l.JSON.parse,Rd=class{stringify(r){return l.JSON.stringify(r,void 0)}parse(r){return l.JSON.parse(r,void 0)}};function Eo(){}Eo.prototype.h=null;function Is(r){return r.h||(r.h=r.i())}function Es(){}var yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function To(){st.call(this,"d")}S(To,st);function Ro(){st.call(this,"c")}S(Ro,st);var Te={},Ts=null;function ci(){return Ts=Ts||new At}Te.La="serverreachability";function Rs(r){st.call(this,Te.La,r)}S(Rs,st);function vn(r){const c=ci();Ct(c,new Rs(c))}Te.STAT_EVENT="statevent";function Cs(r,c){st.call(this,Te.STAT_EVENT,r),this.stat=c}S(Cs,st);function St(r){const c=ci();Ct(c,new Cs(c,r))}Te.Ma="timingevent";function Ss(r,c){st.call(this,Te.Ma,r),this.size=c}S(Ss,st);function bn(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){r()},c)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function Cd(r,c,h,y,P,D){r.info(function(){if(r.g)if(D)for(var M="",Y=D.split("&"),pt=0;pt<Y.length;pt++){var J=Y[pt].split("=");if(1<J.length){var xt=J[0];J=J[1];var _t=xt.split("_");M=2<=_t.length&&_t[1]=="type"?M+(xt+"="+J+"&"):M+(xt+"=redacted&")}}else M=null;else M=D;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+c+`
`+h+`
`+M})}function Sd(r,c,h,y,P,D,M){r.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+c+`
`+h+`
`+D+" "+M})}function qe(r,c,h,y){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+kd(r,h)+(y?" "+y:"")})}function Pd(r,c){r.info(function(){return"TIMEOUT: "+c})}wn.prototype.info=function(){};function kd(r,c){if(!r.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(r=0;r<h.length;r++)if(Array.isArray(h[r])){var y=h[r];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var M=1;M<P.length;M++)P[M]=""}}}}return Io(h)}catch{return c}}var di={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ps={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Co;function ui(){}S(ui,Eo),ui.prototype.g=function(){return new XMLHttpRequest},ui.prototype.i=function(){return{}},Co=new ui;function le(r,c,h,y){this.j=r,this.i=c,this.l=h,this.R=y||1,this.U=new gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ks}function ks(){this.i=null,this.g="",this.h=!1}var Vs={},So={};function Po(r,c,h){r.L=1,r.v=mi(ee(c)),r.m=h,r.P=!0,Ds(r,null)}function Ds(r,c){r.F=Date.now(),hi(r),r.A=ee(r.v);var h=r.A,y=r.R;Array.isArray(y)||(y=[String(y)]),Ws(h.i,"t",y),r.C=0,h=r.j.J,r.h=new ks,r.g=ua(r.j,h?c:null,!r.m),0<r.O&&(r.M=new Ed(g(r.Y,r,r.g),r.O)),c=r.U,h=r.g,y=r.ca;var P="readystatechange";Array.isArray(P)||(P&&(xs[0]=P.toString()),P=xs);for(var D=0;D<P.length;D++){var M=gs(h,P[D],y||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=r.H?f(r.H):{},r.m?(r.u||(r.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,c)):(r.u="GET",r.g.ea(r.A,r.u,null,c)),vn(),Cd(r.i,r.u,r.A,r.l,r.R,r.m)}le.prototype.ca=function(r){r=r.target;const c=this.M;c&&ne(r)==3?c.j():this.Y(r)},le.prototype.Y=function(r){try{if(r==this.g)t:{const _t=ne(this.g);var c=this.g.Ba();const $e=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||ta(this.g)))){this.J||_t!=4||c==7||(c==8||0>=$e?vn(3):vn(2)),ko(this);var h=this.g.Z();this.X=h;e:if(Bs(this)){var y=ta(this.g);r="";var P=y.length,D=ne(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Re(this),An(this);var M="";break e}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,r+=this.h.i.decode(y[c],{stream:!(D&&c==P-1)});y.length=0,this.h.g+=r,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,Sd(this.i,this.u,this.A,this.l,this.R,_t,h),this.o){if(this.T&&!this.K){e:{if(this.g){var Y,pt=this.g;if((Y=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(Y)){var J=Y;break e}}J=null}if(h=J)qe(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vo(this,h);else{this.o=!1,this.s=3,St(12),Re(this),An(this);break t}}if(this.P){h=!0;let Ht;for(;!this.J&&this.C<M.length;)if(Ht=Vd(this,M),Ht==So){_t==4&&(this.s=4,St(14),h=!1),qe(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==Vs){this.s=4,St(15),qe(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else qe(this.i,this.l,Ht,null),Vo(this,Ht);if(Bs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||M.length!=0||this.h.h||(this.s=1,St(16),h=!1),this.o=this.o&&h,!h)qe(this.i,this.l,M,"[Invalid Chunked Response]"),Re(this),An(this);else if(0<M.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Mo(xt),xt.M=!0,St(11))}}else qe(this.i,this.l,M,null),Vo(this,M);_t==4&&Re(this),this.o&&!this.J&&(_t==4?aa(this.j,this):(this.o=!1,hi(this)))}else Kd(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Re(this),An(this)}}}catch{}finally{}};function Bs(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Vd(r,c){var h=r.C,y=c.indexOf(`
`,h);return y==-1?So:(h=Number(c.substring(h,y)),isNaN(h)?Vs:(y+=1,y+h>c.length?So:(c=c.slice(y,y+h),r.C=y+h,c)))}le.prototype.cancel=function(){this.J=!0,Re(this)};function hi(r){r.S=Date.now()+r.I,Ns(r,r.I)}function Ns(r,c){if(r.B!=null)throw Error("WatchDog timer not null");r.B=bn(g(r.ba,r),c)}function ko(r){r.B&&(l.clearTimeout(r.B),r.B=null)}le.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Pd(this.i,this.A),this.L!=2&&(vn(),St(17)),Re(this),this.s=2,An(this)):Ns(this,this.S-r)};function An(r){r.j.G==0||r.J||aa(r.j,r)}function Re(r){ko(r);var c=r.M;c&&typeof c.ma=="function"&&c.ma(),r.M=null,_s(r.U),r.g&&(c=r.g,r.g=null,c.abort(),c.ma())}function Vo(r,c){try{var h=r.j;if(h.G!=0&&(h.g==r||Do(h.h,r))){if(!r.K&&Do(h.h,r)&&h.G==3){try{var y=h.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<r.F)Ai(h),bi(h);else break t;Fo(h),St(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=bn(g(h.Za,h),6e3));if(1>=Ms(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Se(h,11)}else if((r.K||h.g==r)&&Ai(h),!k(c))for(P=h.Da.g.parse(c),c=0;c<P.length;c++){let J=P[c];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];const xt=J[3];xt!=null&&(h.la=xt,h.j.info("VER="+h.la));const _t=J[4];_t!=null&&(h.Aa=_t,h.j.info("SVER="+h.Aa));const $e=J[5];$e!=null&&typeof $e=="number"&&0<$e&&(y=1.5*$e,h.L=y,h.j.info("backChannelRequestTimeoutMs_="+y)),y=h;const Ht=r.g;if(Ht){const _i=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_i){var D=y.h;D.g||_i.indexOf("spdy")==-1&&_i.indexOf("quic")==-1&&_i.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Bo(D,D.h),D.h=null))}if(y.D){const Oo=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(y.ya=Oo,et(y.I,y.D,Oo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-r.F,h.j.info("Handshake RTT: "+h.R+"ms")),y=h;var M=r;if(y.qa=da(y,y.J?y.ia:null,y.W),M.K){Os(y.h,M);var Y=M,pt=y.L;pt&&(Y.I=pt),Y.B&&(ko(Y),hi(Y)),y.g=M}else ra(y);0<h.i.length&&wi(h)}else J[0]!="stop"&&J[0]!="close"||Se(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Se(h,7):Lo(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}vn(4)}catch{}}var Dd=class{constructor(r,c){this.g=r,this.map=c}};function Ls(r){this.l=r||10,l.PerformanceNavigationTiming?(r=l.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fs(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Ms(r){return r.h?1:r.g?r.g.size:0}function Do(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function Bo(r,c){r.g?r.g.add(c):r.h=c}function Os(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}Ls.prototype.cancel=function(){if(this.i=zs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function zs(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const h of r.g.values())c=c.concat(h.D);return c}return C(r.i)}function Bd(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(d(r)){for(var c=[],h=r.length,y=0;y<h;y++)c.push(r[y]);return c}c=[],h=0;for(y in r)c[h++]=r[y];return c}function Nd(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(d(r)||typeof r=="string"){var c=[];r=r.length;for(var h=0;h<r;h++)c.push(h);return c}c=[],h=0;for(const y in r)c[h++]=y;return c}}}function js(r,c){if(r.forEach&&typeof r.forEach=="function")r.forEach(c,void 0);else if(d(r)||typeof r=="string")Array.prototype.forEach.call(r,c,void 0);else for(var h=Nd(r),y=Bd(r),P=y.length,D=0;D<P;D++)c.call(void 0,y[D],h&&h[D],r)}var qs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ld(r,c){if(r){r=r.split("&");for(var h=0;h<r.length;h++){var y=r[h].indexOf("="),P=null;if(0<=y){var D=r[h].substring(0,y);P=r[h].substring(y+1)}else D=r[h];c(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Ce(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ce){this.h=r.h,pi(this,r.j),this.o=r.o,this.g=r.g,fi(this,r.s),this.l=r.l;var c=r.i,h=new In;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Hs(this,h),this.m=r.m}else r&&(c=String(r).match(qs))?(this.h=!1,pi(this,c[1]||"",!0),this.o=xn(c[2]||""),this.g=xn(c[3]||"",!0),fi(this,c[4]),this.l=xn(c[5]||"",!0),Hs(this,c[6]||"",!0),this.m=xn(c[7]||"")):(this.h=!1,this.i=new In(null,this.h))}Ce.prototype.toString=function(){var r=[],c=this.j;c&&r.push(_n(c,Us,!0),":");var h=this.g;return(h||c=="file")&&(r.push("//"),(c=this.o)&&r.push(_n(c,Us,!0),"@"),r.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&r.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&r.push("/"),r.push(_n(h,h.charAt(0)=="/"?Od:Md,!0))),(h=this.i.toString())&&r.push("?",h),(h=this.m)&&r.push("#",_n(h,jd)),r.join("")};function ee(r){return new Ce(r)}function pi(r,c,h){r.j=h?xn(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function fi(r,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);r.s=c}else r.s=null}function Hs(r,c,h){c instanceof In?(r.i=c,qd(r.i,r.h)):(h||(c=_n(c,zd)),r.i=new In(c,r.h))}function et(r,c,h){r.i.set(c,h)}function mi(r){return et(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function xn(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function _n(r,c,h){return typeof r=="string"?(r=encodeURI(r).replace(c,Fd),h&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Fd(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Us=/[#\/\?@]/g,Md=/[#\?:]/g,Od=/[#\?]/g,zd=/[#\?@]/g,jd=/#/g;function In(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function ce(r){r.g||(r.g=new Map,r.h=0,r.i&&Ld(r.i,function(c,h){r.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=In.prototype,n.add=function(r,c){ce(this),this.i=null,r=He(this,r);var h=this.g.get(r);return h||this.g.set(r,h=[]),h.push(c),this.h+=1,this};function $s(r,c){ce(r),c=He(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function Qs(r,c){return ce(r),c=He(r,c),r.g.has(c)}n.forEach=function(r,c){ce(this),this.g.forEach(function(h,y){h.forEach(function(P){r.call(c,P,y,this)},this)},this)},n.na=function(){ce(this);const r=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let y=0;y<c.length;y++){const P=r[y];for(let D=0;D<P.length;D++)h.push(c[y])}return h},n.V=function(r){ce(this);let c=[];if(typeof r=="string")Qs(this,r)&&(c=c.concat(this.g.get(He(this,r))));else{r=Array.from(this.g.values());for(let h=0;h<r.length;h++)c=c.concat(r[h])}return c},n.set=function(r,c){return ce(this),this.i=null,r=He(this,r),Qs(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},n.get=function(r,c){return r?(r=this.V(r),0<r.length?String(r[0]):c):c};function Ws(r,c,h){$s(r,c),0<h.length&&(r.i=null,r.g.set(He(r,c),C(h)),r.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var y=c[h];const D=encodeURIComponent(String(y)),M=this.V(y);for(y=0;y<M.length;y++){var P=D;M[y]!==""&&(P+="="+encodeURIComponent(String(M[y]))),r.push(P)}}return this.i=r.join("&")};function He(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function qd(r,c){c&&!r.j&&(ce(r),r.i=null,r.g.forEach(function(h,y){var P=y.toLowerCase();y!=P&&($s(this,y),Ws(this,P,h))},r)),r.j=c}function Hd(r,c){const h=new wn;if(l.Image){const y=new Image;y.onload=A(de,h,"TestLoadImage: loaded",!0,c,y),y.onerror=A(de,h,"TestLoadImage: error",!1,c,y),y.onabort=A(de,h,"TestLoadImage: abort",!1,c,y),y.ontimeout=A(de,h,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=r}else c(!1)}function Ud(r,c){const h=new wn,y=new AbortController,P=setTimeout(()=>{y.abort(),de(h,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:y.signal}).then(D=>{clearTimeout(P),D.ok?de(h,"TestPingServer: ok",!0,c):de(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),de(h,"TestPingServer: error",!1,c)})}function de(r,c,h,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(h)}catch{}}function $d(){this.g=new Rd}function Qd(r,c,h){const y=h||"";try{js(r,function(P,D){let M=P;u(P)&&(M=Io(P)),c.push(y+D+"="+encodeURIComponent(M))})}catch(P){throw c.push(y+"type="+encodeURIComponent("_badmap")),P}}function gi(r){this.l=r.Ub||null,this.j=r.eb||!1}S(gi,Eo),gi.prototype.g=function(){return new yi(this.l,this.j)},gi.prototype.i=function(r){return function(){return r}}({});function yi(r,c){At.call(this),this.D=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(yi,At),n=yi.prototype,n.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=c,this.readyState=1,Tn(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(c.body=r),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,En(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gs(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gs(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?En(this):Tn(this),this.readyState==3&&Gs(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,En(this))},n.Qa=function(r){this.g&&(this.response=r,En(this))},n.ga=function(){this.g&&En(this)};function En(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Tn(r)}n.setRequestHeader=function(r,c){this.u.append(r,c)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,r.push(h[0]+": "+h[1]),h=c.next();return r.join(`\r
`)};function Tn(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Ks(r){let c="";return E(r,function(h,y){c+=y,c+=":",c+=h,c+=`\r
`}),c}function No(r,c,h){t:{for(y in h){var y=!1;break t}y=!0}y||(h=Ks(h),typeof r=="string"?h!=null&&encodeURIComponent(String(h)):et(r,c,h))}function ot(r){At.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ot,At);var Wd=/^https?$/i,Gd=["POST","PUT"];n=ot.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,c,h,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Co.g(),this.v=this.o?Is(this.o):Is(Co),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(D){Xs(this,D);return}if(r=h||"",h=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)h.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())h.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(h.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&r instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Gd,c,void 0))||y||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,M]of h)this.g.setRequestHeader(D,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ys(this),this.u=!0,this.g.send(r),this.u=!1}catch(D){Xs(this,D)}};function Xs(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.m=5,Js(r),vi(r)}function Js(r){r.A||(r.A=!0,Ct(r,"complete"),Ct(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,Ct(this,"complete"),Ct(this,"abort"),vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vi(this,!0)),ot.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zs(this):this.bb())},n.bb=function(){Zs(this)};function Zs(r){if(r.h&&typeof a<"u"&&(!r.v[1]||ne(r)!=4||r.Z()!=2)){if(r.u&&ne(r)==4)ws(r.Ea,0,r);else if(Ct(r,"readystatechange"),ne(r)==4){r.h=!1;try{const M=r.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var y;if(y=M===0){var P=String(r.D).match(qs)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),y=!Wd.test(P?P.toLowerCase():"")}h=y}if(h)Ct(r,"complete"),Ct(r,"success");else{r.m=6;try{var D=2<ne(r)?r.g.statusText:""}catch{D=""}r.l=D+" ["+r.Z()+"]",Js(r)}}finally{vi(r)}}}}function vi(r,c){if(r.g){Ys(r);const h=r.g,y=r.v[0]?()=>{}:null;r.g=null,r.v=null,c||Ct(r,"ready");try{h.onreadystatechange=y}catch{}}}function Ys(r){r.I&&(l.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function ne(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<ne(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),Td(c)}};function ta(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Kd(r){const c={};r=(r.g&&2<=ne(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<r.length;y++){if(k(r[y]))continue;var h=x(r[y]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const D=c[P]||[];c[P]=D,D.push(h)}v(c,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rn(r,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[r]||c}function ea(r){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rn("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rn("baseRetryDelayMs",5e3,r),this.cb=Rn("retryDelaySeedMs",1e4,r),this.Wa=Rn("forwardChannelMaxRetries",2,r),this.wa=Rn("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Ls(r&&r.concurrentRequestLimit),this.Da=new $d,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ea.prototype,n.la=8,n.G=1,n.connect=function(r,c,h,y){St(0),this.W=r,this.H=c||{},h&&y!==void 0&&(this.H.OSID=h,this.H.OAID=y),this.F=this.X,this.I=da(this,null,this.W),wi(this)};function Lo(r){if(na(r),r.G==3){var c=r.U++,h=ee(r.I);if(et(h,"SID",r.K),et(h,"RID",c),et(h,"TYPE","terminate"),Cn(r,h),c=new le(r,r.j,c),c.L=2,c.v=mi(ee(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=ua(c.j,null),c.g.ea(c.v)),c.F=Date.now(),hi(c)}ca(r)}function bi(r){r.g&&(Mo(r),r.g.cancel(),r.g=null)}function na(r){bi(r),r.u&&(l.clearTimeout(r.u),r.u=null),Ai(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&l.clearTimeout(r.s),r.s=null)}function wi(r){if(!Fs(r.h)&&!r.s){r.s=!0;var c=r.Ga;Vt||Gt(),Dt||(Vt(),Dt=!0),Bt.add(c,r),r.B=0}}function Xd(r,c){return Ms(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=c.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=bn(g(r.Ga,r,c),la(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const P=new le(this,this.j,r);let D=this.o;if(this.S&&(D?(D=f(D),b(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var y=this.i[h];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break e}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=oa(this,P,c),h=ee(this.I),et(h,"RID",r),et(h,"CVER",22),this.D&&et(h,"X-HTTP-Session-Id",this.D),Cn(this,h),D&&(this.O?c="headers="+encodeURIComponent(String(Ks(D)))+"&"+c:this.m&&No(h,this.m,D)),Bo(this.h,P),this.Ua&&et(h,"TYPE","init"),this.P?(et(h,"$req",c),et(h,"SID","null"),P.T=!0,Po(P,h,null)):Po(P,h,c),this.G=2}}else this.G==3&&(r?ia(this,r):this.i.length==0||Fs(this.h)||ia(this))};function ia(r,c){var h;c?h=c.l:h=r.U++;const y=ee(r.I);et(y,"SID",r.K),et(y,"RID",h),et(y,"AID",r.T),Cn(r,y),r.m&&r.o&&No(y,r.m,r.o),h=new le(r,r.j,h,r.B+1),r.m===null&&(h.H=r.o),c&&(r.i=c.D.concat(r.i)),c=oa(r,h,1e3),h.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Bo(r.h,h),Po(h,y,c)}function Cn(r,c){r.H&&E(r.H,function(h,y){et(c,y,h)}),r.l&&js({},function(h,y){et(c,y,h)})}function oa(r,c,h){h=Math.min(r.i.length,h);var y=r.l?g(r.l.Na,r.l,r):null;t:{var P=r.i;let D=-1;for(;;){const M=["count="+h];D==-1?0<h?(D=P[0].g,M.push("ofs="+D)):D=0:M.push("ofs="+D);let Y=!0;for(let pt=0;pt<h;pt++){let J=P[pt].g;const xt=P[pt].map;if(J-=D,0>J)D=Math.max(0,P[pt].g-100),Y=!1;else try{Qd(xt,M,"req"+J+"_")}catch{y&&y(xt)}}if(Y){y=M.join("&");break t}}}return r=r.i.splice(0,h),c.D=r,y}function ra(r){if(!r.g&&!r.u){r.Y=1;var c=r.Fa;Vt||Gt(),Dt||(Vt(),Dt=!0),Bt.add(c,r),r.v=0}}function Fo(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=bn(g(r.Fa,r),la(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,sa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=bn(g(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),bi(this),sa(this))};function Mo(r){r.A!=null&&(l.clearTimeout(r.A),r.A=null)}function sa(r){r.g=new le(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var c=ee(r.qa);et(c,"RID","rpc"),et(c,"SID",r.K),et(c,"AID",r.T),et(c,"CI",r.F?"0":"1"),!r.F&&r.ja&&et(c,"TO",r.ja),et(c,"TYPE","xmlhttp"),Cn(r,c),r.m&&r.o&&No(c,r.m,r.o),r.L&&(r.g.I=r.L);var h=r.g;r=r.ia,h.L=1,h.v=mi(ee(c)),h.m=null,h.P=!0,Ds(h,r)}n.Za=function(){this.C!=null&&(this.C=null,bi(this),Fo(this),St(19))};function Ai(r){r.C!=null&&(l.clearTimeout(r.C),r.C=null)}function aa(r,c){var h=null;if(r.g==c){Ai(r),Mo(r),r.g=null;var y=2}else if(Do(r.h,c))h=c.D,Os(r.h,c),y=1;else return;if(r.G!=0){if(c.o)if(y==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var P=r.B;y=ci(),Ct(y,new Ss(y,h)),wi(r)}else ra(r);else if(P=c.s,P==3||P==0&&0<c.X||!(y==1&&Xd(r,c)||y==2&&Fo(r)))switch(h&&0<h.length&&(c=r.h,c.i=c.i.concat(h)),P){case 1:Se(r,5);break;case 4:Se(r,10);break;case 3:Se(r,6);break;default:Se(r,2)}}}function la(r,c){let h=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(h*=2),h*c}function Se(r,c){if(r.j.info("Error code "+c),c==2){var h=g(r.fb,r),y=r.Xa;const P=!y;y=new Ce(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||pi(y,"https"),mi(y),P?Hd(y.toString(),h):Ud(y.toString(),h)}else St(2);r.G=0,r.l&&r.l.sa(c),ca(r),na(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function ca(r){if(r.G=0,r.ka=[],r.l){const c=zs(r.h);(c.length!=0||r.i.length!=0)&&(T(r.ka,c),T(r.ka,r.i),r.h.i.length=0,C(r.i),r.i.length=0),r.l.ra()}}function da(r,c,h){var y=h instanceof Ce?ee(h):new Ce(h);if(y.g!="")c&&(y.g=c+"."+y.g),fi(y,y.s);else{var P=l.location;y=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var D=new Ce(null);y&&pi(D,y),c&&(D.g=c),P&&fi(D,P),h&&(D.l=h),y=D}return h=r.D,c=r.ya,h&&c&&et(y,h,c),et(y,"VER",r.la),Cn(r,y),y}function ua(r,c,h){if(c&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Ca&&!r.pa?new ot(new gi({eb:h})):new ot(r.pa),c.Ha(r.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ha(){}n=ha.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xi(){}xi.prototype.g=function(r,c){return new Mt(r,c)};function Mt(r,c){At.call(this),this.g=new ea(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(r?r["X-WebChannel-Client-Profile"]=c.va:r={"X-WebChannel-Client-Profile":c.va}),this.g.S=r,(r=c&&c.Sb)&&!k(r)&&(this.g.m=r),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!k(c)&&(this.g.D=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new Ue(this)}S(Mt,At),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){Lo(this.g)},Mt.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var h={};h.__data__=r,r=h}else this.u&&(h={},h.__data__=Io(r),r=h);c.i.push(new Dd(c.Ya++,r)),c.G==3&&wi(c)},Mt.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,Mt.aa.N.call(this)};function pa(r){To.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){t:{for(const h in c){r=h;break t}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}S(pa,To);function fa(){Ro.call(this),this.status=1}S(fa,Ro);function Ue(r){this.g=r}S(Ue,ha),Ue.prototype.ua=function(){Ct(this.g,"a")},Ue.prototype.ta=function(r){Ct(this.g,new pa(r))},Ue.prototype.sa=function(r){Ct(this.g,new fa)},Ue.prototype.ra=function(){Ct(this.g,"b")},xi.prototype.createWebChannel=xi.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,Nl=function(){return new xi},Bl=function(){return ci()},Dl=Te,ir={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},di.NO_ERROR=0,di.TIMEOUT=8,di.HTTP_ERROR=6,Si=di,Ps.COMPLETE="complete",Vl=Ps,Es.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",At.prototype.listen=At.prototype.K,Pn=Es,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,kl=ot}).apply(typeof Ii<"u"?Ii:typeof self<"u"?self:typeof window<"u"?window:{});const Ta="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=new Il("@firebase/firestore");function Sn(){return Be.logLevel}function z(n,...t){if(Be.logLevel<=K.DEBUG){const e=t.map(_r);Be.debug(`Firestore (${ln}): ${n}`,...e)}}function re(n,...t){if(Be.logLevel<=K.ERROR){const e=t.map(_r);Be.error(`Firestore (${ln}): ${n}`,...e)}}function Ye(n,...t){if(Be.logLevel<=K.WARN){const e=t.map(_r);Be.warn(`Firestore (${ln}): ${n}`,...e)}}function _r(n){if(typeof n=="string")return n;try{/**
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
 */function H(n="Unexpected state"){const t=`FIRESTORE (${ln}) INTERNAL ASSERTION FAILED: `+n;throw re(t),new Error(t)}function X(n,t){n||H()}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends an{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Sh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Et.UNAUTHENTICATED))}shutdown(){}}class Ph{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class kh{constructor(t){this.t=t,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0);let i=this.i;const o=d=>this.i!==i?(i=this.i,e(d)):Promise.resolve();let s=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Xt,t.enqueueRetryable(()=>o(this.currentUser))};const a=()=>{const d=s;t.enqueueRetryable(async()=>{await d.promise,await o(this.currentUser)})},l=d=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Xt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(X(typeof i.accessToken=="string"),new Ll(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new Et(t)}}class Vh{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Dh{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Vh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){X(this.o===void 0);const i=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const o=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>o(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?o(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new Bh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Lh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const o=Lh(40);for(let s=0;s<o.length;++s)i.length<20&&o[s]<e&&(i+=t.charAt(o[s]%t.length))}return i}}function Z(n,t){return n<t?-1:n>t?1:0}function tn(n,t,e){return n.length===t.length&&n.every((i,o)=>e(i,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new dt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new dt(0,0))}static max(){return new U(new dt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,i){e===void 0?e=0:e>t.length&&H(),i===void 0?i=t.length-e:i>t.length-e&&H(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return zn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof zn?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let o=0;o<i;o++){const s=t.get(o),a=e.get(o);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tt extends zn{construct(t,e,i){return new tt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new O(N.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(o=>o.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const Fh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends zn{construct(t,e,i){return new mt(t,e,i)}static isValidIdentifier(t){return Fh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(t){const e=[];let i="",o=0;const s=()=>{if(i.length===0)throw new O(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let a=!1;for(;o<t.length;){const l=t[o];if(l==="\\"){if(o+1===t.length)throw new O(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[o+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=d,o+=2}else l==="`"?(a=!a,o++):l!=="."||a?(i+=l,o++):(s(),o++)}if(s(),a)throw new O(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mt(e)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(tt.fromString(t))}static fromName(t){return new j(tt.fromString(t).popFirst(5))}static empty(){return new j(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new tt(t.slice()))}}function Mh(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=U.fromTimestamp(i===1e9?new dt(e+1,0):new dt(e,i));return new ye(o,j.empty(),t)}function Oh(n){return new ye(n.readTime,n.key,-1)}class ye{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new ye(U.min(),j.empty(),-1)}static max(){return new ye(U.max(),j.empty(),-1)}}function zh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:Z(n.largestBatchId,t.largestBatchId))}/**
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
 */const jh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==jh)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new F((i,o)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,o)},this.catchCallback=s=>{this.wrapFailure(e,s).next(i,o)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof F?e:F.resolve(e)}catch(e){return F.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):F.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):F.reject(e)}static resolve(t){return new F((e,i)=>{e(t)})}static reject(t){return new F((e,i)=>{i(t)})}static waitFor(t){return new F((e,i)=>{let o=0,s=0,a=!1;t.forEach(l=>{++o,l.next(()=>{++s,a&&s===o&&e()},d=>i(d))}),a=!0,s===o&&e()})}static or(t){let e=F.resolve(!1);for(const i of t)e=e.next(o=>o?F.resolve(o):i());return e}static forEach(t,e){const i=[];return t.forEach((o,s)=>{i.push(e.call(this,o,s))}),this.waitFor(i)}static mapArray(t,e){return new F((i,o)=>{const s=t.length,a=new Array(s);let l=0;for(let d=0;d<s;d++){const u=d;e(t[u]).next(m=>{a[u]=m,++l,l===s&&i(a)},m=>o(m))}})}static doWhile(t,e){return new F((i,o)=>{const s=()=>{t()===!0?e().next(()=>{s()},o):i()};s()})}}function Hh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ir{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ir.oe=-1;function Zn(n){return n==null}function Mi(n){return n===0&&1/n==-1/0}function Uh(n){return typeof n=="number"&&Number.isInteger(n)&&!Mi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Me(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ml(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(t,i.key);if(o===0)return e+i.left.size;o<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ei(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ei(this.root,t,this.comparator,!0)}}class Ei{constructor(t,e,i,o){this.isReverse=o,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,e&&o&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,i,o,s){this.key=t,this.value=e,this.color=i??ft.RED,this.left=o??ft.EMPTY,this.right=s??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,o,s){return new ft(t??this.key,e??this.value,i??this.color,o??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let o=this;const s=i(t,o.key);return o=s<0?o.copy(null,null,null,o.left.insert(t,e,i),null):s===0?o.copy(null,e,null,null,null):o.copy(null,null,null,null,o.right.insert(t,e,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,o=this;if(e(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,e),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),e(t,o.key)===0){if(o.right.isEmpty())return ft.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,e))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const t=this.left.check();if(t!==this.right.check())throw H();return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,i,o,s){return this}insert(t,e,i){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,t[1])>=0)return;e(o.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ca(this.data.getIterator())}getIteratorFrom(t){return new Ca(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof gt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const o=e.getNext().key,s=i.getNext().key;if(this.comparator(o,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new gt(this.comparator);return e.data=t,e}}class Ca{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(t){this.fields=t,t.sort(mt.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new gt(mt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return tn(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class Ol extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(o){try{return atob(o)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ol("Invalid base64 string: "+s):s}}(t);return new vt(e)}static fromUint8Array(t){const e=function(o){let s="";for(let a=0;a<o.length;++a)s+=String.fromCharCode(o[a]);return s}(t);return new vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let o=0;o<e.length;o++)i[o]=e.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const $h=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ve(n){if(X(!!n),typeof n=="string"){let t=0;const e=$h.exec(n);if(X(!!e),e[1]){let o=e[1];o=(o+"000000000").substr(0,9),t=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ne(n){return typeof n=="string"?vt.fromBase64String(n):vt.fromUint8Array(n)}/**
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
 */function Er(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Tr(n){const t=n.mapValue.fields.__previous_value__;return Er(t)?Tr(t):t}function jn(n){const t=ve(n.mapValue.fields.__local_write_time__.timestampValue);return new dt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e,i,o,s,a,l,d,u){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=o,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=u}}class qn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ti={mapValue:{}};function Le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Er(n)?4:Gh(n)?9007199254740991:Wh(n)?10:11:H()}function Zt(n,t){if(n===t)return!0;const e=Le(n);if(e!==Le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return jn(n).isEqual(jn(t));case 3:return function(o,s){if(typeof o.timestampValue=="string"&&typeof s.timestampValue=="string"&&o.timestampValue.length===s.timestampValue.length)return o.timestampValue===s.timestampValue;const a=ve(o.timestampValue),l=ve(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(o,s){return Ne(o.bytesValue).isEqual(Ne(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(o,s){return rt(o.geoPointValue.latitude)===rt(s.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(s.geoPointValue.longitude)}(n,t);case 2:return function(o,s){if("integerValue"in o&&"integerValue"in s)return rt(o.integerValue)===rt(s.integerValue);if("doubleValue"in o&&"doubleValue"in s){const a=rt(o.doubleValue),l=rt(s.doubleValue);return a===l?Mi(a)===Mi(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return tn(n.arrayValue.values||[],t.arrayValue.values||[],Zt);case 10:case 11:return function(o,s){const a=o.mapValue.fields||{},l=s.mapValue.fields||{};if(Ra(a)!==Ra(l))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(l[d]===void 0||!Zt(a[d],l[d])))return!1;return!0}(n,t);default:return H()}}function Hn(n,t){return(n.values||[]).find(e=>Zt(e,t))!==void 0}function en(n,t){if(n===t)return 0;const e=Le(n),i=Le(t);if(e!==i)return Z(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=rt(s.integerValue||s.doubleValue),d=rt(a.integerValue||a.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(n,t);case 3:return Sa(n.timestampValue,t.timestampValue);case 4:return Sa(jn(n),jn(t));case 5:return Z(n.stringValue,t.stringValue);case 6:return function(s,a){const l=Ne(s),d=Ne(a);return l.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),d=a.split("/");for(let u=0;u<l.length&&u<d.length;u++){const m=Z(l[u],d[u]);if(m!==0)return m}return Z(l.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=Z(rt(s.latitude),rt(a.latitude));return l!==0?l:Z(rt(s.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Pa(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,d,u,m;const p=s.fields||{},g=a.fields||{},A=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(d=g.value)===null||d===void 0?void 0:d.arrayValue,C=Z(((u=A==null?void 0:A.values)===null||u===void 0?void 0:u.length)||0,((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0);return C!==0?C:Pa(A,S)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===Ti.mapValue&&a===Ti.mapValue)return 0;if(s===Ti.mapValue)return 1;if(a===Ti.mapValue)return-1;const l=s.fields||{},d=Object.keys(l),u=a.fields||{},m=Object.keys(u);d.sort(),m.sort();for(let p=0;p<d.length&&p<m.length;++p){const g=Z(d[p],m[p]);if(g!==0)return g;const A=en(l[d[p]],u[m[p]]);if(A!==0)return A}return Z(d.length,m.length)}(n.mapValue,t.mapValue);default:throw H()}}function Sa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Z(n,t);const e=ve(n),i=ve(t),o=Z(e.seconds,i.seconds);return o!==0?o:Z(e.nanos,i.nanos)}function Pa(n,t){const e=n.values||[],i=t.values||[];for(let o=0;o<e.length&&o<i.length;++o){const s=en(e[o],i[o]);if(s)return s}return Z(e.length,i.length)}function nn(n){return or(n)}function or(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ve(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ne(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",o=!0;for(const s of e.values||[])o?o=!1:i+=",",i+=or(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let o="{",s=!0;for(const a of i)s?s=!1:o+=",",o+=`${a}:${or(e.fields[a])}`;return o+"}"}(n.mapValue):H()}function ka(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function rr(n){return!!n&&"integerValue"in n}function Rr(n){return!!n&&"arrayValue"in n}function Va(n){return!!n&&"nullValue"in n}function Da(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pi(n){return!!n&&"mapValue"in n}function Wh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Dn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Me(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Dn(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Dn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Gh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.value=t}static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Pi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Dn(e)}setAll(t){let e=mt.emptyPath(),i={},o=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,i,o),i={},o=[],e=l.popLast()}a?i[l.lastSegment()]=Dn(a):o.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,i,o)}delete(t){const e=this.field(t.popLast());Pi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let o=e.mapValue.fields[t.get(i)];Pi(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=o),e=o}return e.mapValue.fields}applyChanges(t,e,i){Me(e,(o,s)=>t[o]=s);for(const o of i)delete t[o]}clone(){return new Pt(Dn(this.value))}}function zl(n){const t=[];return Me(n.fields,(e,i)=>{const o=new mt([e]);if(Pi(i)){const s=zl(i.mapValue).fields;if(s.length===0)t.push(o);else for(const a of s)t.push(o.child(a))}else t.push(o)}),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e,i,o,s,a,l){this.key=t,this.documentType=e,this.version=i,this.readTime=o,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ht(t,0,U.min(),U.min(),U.min(),Pt.empty(),0)}static newFoundDocument(t,e,i,o){return new ht(t,1,e,U.min(),i,o,0)}static newNoDocument(t,e){return new ht(t,2,e,U.min(),U.min(),Pt.empty(),0)}static newUnknownDocument(t,e){return new ht(t,3,e,U.min(),U.min(),Pt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oi{constructor(t,e){this.position=t,this.inclusive=e}}function Ba(n,t,e){let i=0;for(let o=0;o<n.position.length;o++){const s=t[o],a=n.position[o];if(s.field.isKeyField()?i=j.comparator(j.fromName(a.referenceValue),e.key):i=en(a,e.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Na(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Zt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Un{constructor(t,e="asc"){this.field=t,this.dir=e}}function Kh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class jl{}class lt extends jl{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Jh(t,e,i):e==="array-contains"?new tp(t,i):e==="in"?new ep(t,i):e==="not-in"?new np(t,i):e==="array-contains-any"?new ip(t,i):new lt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Zh(t,i):new Yh(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(en(e,this.value)):e!==null&&Le(this.value)===Le(e)&&this.matchesComparison(en(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends jl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ut(t,e)}matches(t){return ql(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ql(n){return n.op==="and"}function Hl(n){return Xh(n)&&ql(n)}function Xh(n){for(const t of n.filters)if(t instanceof Ut)return!1;return!0}function sr(n){if(n instanceof lt)return n.field.canonicalString()+n.op.toString()+nn(n.value);if(Hl(n))return n.filters.map(t=>sr(t)).join(",");{const t=n.filters.map(e=>sr(e)).join(",");return`${n.op}(${t})`}}function Ul(n,t){return n instanceof lt?function(i,o){return o instanceof lt&&i.op===o.op&&i.field.isEqual(o.field)&&Zt(i.value,o.value)}(n,t):n instanceof Ut?function(i,o){return o instanceof Ut&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((s,a,l)=>s&&Ul(a,o.filters[l]),!0):!1}(n,t):void H()}function $l(n){return n instanceof lt?function(e){return`${e.field.canonicalString()} ${e.op} ${nn(e.value)}`}(n):n instanceof Ut?function(e){return e.op.toString()+" {"+e.getFilters().map($l).join(" ,")+"}"}(n):"Filter"}class Jh extends lt{constructor(t,e,i){super(t,e,i),this.key=j.fromName(i.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class Zh extends lt{constructor(t,e){super(t,"in",e),this.keys=Ql("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Yh extends lt{constructor(t,e){super(t,"not-in",e),this.keys=Ql("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ql(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>j.fromName(i.referenceValue))}class tp extends lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Rr(e)&&Hn(e.arrayValue,this.value)}}class ep extends lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Hn(this.value.arrayValue,e)}}class np extends lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Hn(this.value.arrayValue,e)}}class ip extends lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Rr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Hn(this.value.arrayValue,i))}}/**
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
 */class op{constructor(t,e=null,i=[],o=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=o,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function La(n,t=null,e=[],i=[],o=null,s=null,a=null){return new op(n,t,e,i,o,s,a)}function Cr(n){const t=$(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>sr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Zn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>nn(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>nn(i)).join(",")),t.ue=e}return t.ue}function Sr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Kh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ul(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Na(n.startAt,t.startAt)&&Na(n.endAt,t.endAt)}function ar(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e=null,i=[],o=[],s=null,a="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=o,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rp(n,t,e,i,o,s,a,l){return new cn(n,t,e,i,o,s,a,l)}function Xi(n){return new cn(n)}function Fa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wl(n){return n.collectionGroup!==null}function Bn(n){const t=$(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new gt(mt.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Un(s,i))}),e.has(mt.keyField().canonicalString())||t.ce.push(new Un(mt.keyField(),i))}return t.ce}function Jt(n){const t=$(n);return t.le||(t.le=sp(t,Bn(n))),t.le}function sp(n,t){if(n.limitType==="F")return La(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(o=>{const s=o.dir==="desc"?"asc":"desc";return new Un(o.field,s)});const e=n.endAt?new Oi(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Oi(n.startAt.position,n.startAt.inclusive):null;return La(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function lr(n,t){const e=n.filters.concat([t]);return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function cr(n,t,e){return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ji(n,t){return Sr(Jt(n),Jt(t))&&n.limitType===t.limitType}function Gl(n){return`${Cr(Jt(n))}|lt:${n.limitType}`}function We(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(o=>$l(o)).join(", ")}]`),Zn(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(o=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(o)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(o=>nn(o)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(o=>nn(o)).join(",")),`Target(${i})`}(Jt(n))}; limitType=${n.limitType})`}function Zi(n,t){return t.isFoundDocument()&&function(i,o){const s=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):j.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,t)&&function(i,o){for(const s of Bn(i))if(!s.field.isKeyField()&&o.data.field(s.field)===null)return!1;return!0}(n,t)&&function(i,o){for(const s of i.filters)if(!s.matches(o))return!1;return!0}(n,t)&&function(i,o){return!(i.startAt&&!function(a,l,d){const u=Ba(a,l,d);return a.inclusive?u<=0:u<0}(i.startAt,Bn(i),o)||i.endAt&&!function(a,l,d){const u=Ba(a,l,d);return a.inclusive?u>=0:u>0}(i.endAt,Bn(i),o))}(n,t)}function ap(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kl(n){return(t,e)=>{let i=!1;for(const o of Bn(n)){const s=lp(o,t,e);if(s!==0)return s;i=i||o.field.isKeyField()}return 0}}function lp(n,t,e){const i=n.field.isKeyField()?j.comparator(t.key,e.key):function(s,a,l){const d=a.data.field(s),u=l.data.field(s);return d!==null&&u!==null?en(d,u):H()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[o,s]of i)if(this.equalsFn(o,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),o=this.inner[i];if(o===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let s=0;s<o.length;s++)if(this.equalsFn(o[s][0],t))return void(o[s]=[t,e]);o.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return i.length===1?delete this.inner[e]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Me(this.inner,(e,i)=>{for(const[o,s]of i)t(o,s)})}isEmpty(){return Ml(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=new it(j.comparator);function se(){return cp}const Xl=new it(j.comparator);function kn(...n){let t=Xl;for(const e of n)t=t.insert(e.key,e);return t}function Jl(n){let t=Xl;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function ke(){return Nn()}function Zl(){return Nn()}function Nn(){return new dn(n=>n.toString(),(n,t)=>n.isEqual(t))}const dp=new it(j.comparator),up=new gt(j.comparator);function W(...n){let t=up;for(const e of n)t=t.add(e);return t}const hp=new gt(Z);function pp(){return hp}/**
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
 */function Pr(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mi(t)?"-0":t}}function Yl(n){return{integerValue:""+n}}function fp(n,t){return Uh(t)?Yl(t):Pr(n,t)}/**
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
 */class Yi{constructor(){this._=void 0}}function mp(n,t,e){return n instanceof $n?function(o,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return s&&Er(s)&&(s=Tr(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof Qn?ec(n,t):n instanceof Wn?nc(n,t):function(o,s){const a=tc(o,s),l=Ma(a)+Ma(o.Pe);return rr(a)&&rr(o.Pe)?Yl(l):Pr(o.serializer,l)}(n,t)}function gp(n,t,e){return n instanceof Qn?ec(n,t):n instanceof Wn?nc(n,t):e}function tc(n,t){return n instanceof zi?function(i){return rr(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class $n extends Yi{}class Qn extends Yi{constructor(t){super(),this.elements=t}}function ec(n,t){const e=ic(t);for(const i of n.elements)e.some(o=>Zt(o,i))||e.push(i);return{arrayValue:{values:e}}}class Wn extends Yi{constructor(t){super(),this.elements=t}}function nc(n,t){let e=ic(t);for(const i of n.elements)e=e.filter(o=>!Zt(o,i));return{arrayValue:{values:e}}}class zi extends Yi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ma(n){return rt(n.integerValue||n.doubleValue)}function ic(n){return Rr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t,e){this.field=t,this.transform=e}}function vp(n,t){return n.field.isEqual(t.field)&&function(i,o){return i instanceof Qn&&o instanceof Qn||i instanceof Wn&&o instanceof Wn?tn(i.elements,o.elements,Zt):i instanceof zi&&o instanceof zi?Zt(i.Pe,o.Pe):i instanceof $n&&o instanceof $n}(n.transform,t.transform)}class bp{constructor(t,e){this.version=t,this.transformResults=e}}class ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ct}static exists(t){return new ct(void 0,t)}static updateTime(t){return new ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ki(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class to{}function oc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ti(n.key,ct.none()):new Yn(n.key,n.data,ct.none());{const e=n.data,i=Pt.empty();let o=new gt(mt.comparator);for(let s of t.fields)if(!o.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?i.delete(s):i.set(s,a),o=o.add(s)}return new Ae(n.key,i,new Ot(o.toArray()),ct.none())}}function wp(n,t,e){n instanceof Yn?function(o,s,a){const l=o.value.clone(),d=za(o.fieldTransforms,s,a.transformResults);l.setAll(d),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Ae?function(o,s,a){if(!ki(o.precondition,s))return void s.convertToUnknownDocument(a.version);const l=za(o.fieldTransforms,s,a.transformResults),d=s.data;d.setAll(rc(o)),d.setAll(l),s.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,t,e):function(o,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Ln(n,t,e,i){return n instanceof Yn?function(s,a,l,d){if(!ki(s.precondition,a))return l;const u=s.value.clone(),m=ja(s.fieldTransforms,d,a);return u.setAll(m),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(n,t,e,i):n instanceof Ae?function(s,a,l,d){if(!ki(s.precondition,a))return l;const u=ja(s.fieldTransforms,d,a),m=a.data;return m.setAll(rc(s)),m.setAll(u),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,t,e,i):function(s,a,l){return ki(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Ap(n,t){let e=null;for(const i of n.fieldTransforms){const o=t.data.field(i.field),s=tc(i.transform,o||null);s!=null&&(e===null&&(e=Pt.empty()),e.set(i.field,s))}return e||null}function Oa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&tn(i,o,(s,a)=>vp(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Yn extends to{constructor(t,e,i,o=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ae extends to{constructor(t,e,i,o,s=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=o,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function za(n,t,e){const i=new Map;X(n.length===e.length);for(let o=0;o<e.length;o++){const s=n[o],a=s.transform,l=t.data.field(s.field);i.set(s.field,gp(a,l,e[o]))}return i}function ja(n,t,e){const i=new Map;for(const o of n){const s=o.transform,a=e.data.field(o.field);i.set(o.field,mp(s,a,t))}return i}class ti extends to{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sc extends to{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(t,e,i,o){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let o=0;o<this.mutations.length;o++){const s=this.mutations[o];s.key.isEqual(t.key)&&wp(s,t,i[o])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Ln(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Ln(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Zl();return this.mutations.forEach(o=>{const s=t.get(o.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(o.key)?null:l;const d=oc(a,l);d!==null&&i.set(o.key,d),a.isValidDocument()||a.convertToNoDocument(U.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),W())}isEqual(t){return this.batchId===t.batchId&&tn(this.mutations,t.mutations,(e,i)=>Oa(e,i))&&tn(this.baseMutations,t.baseMutations,(e,i)=>Oa(e,i))}}class kr{constructor(t,e,i,o){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=o}static from(t,e,i){X(t.mutations.length===i.length);let o=function(){return dp}();const s=t.mutations;for(let a=0;a<s.length;a++)o=o.insert(s[a].key,i[a].version);return new kr(t,e,i,o)}}/**
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
 */class _p{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ip{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,G;function ac(n){switch(n){default:return H();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function lc(n){if(n===void 0)return re("GRPC error has no .code"),N.UNKNOWN;switch(n){case at.OK:return N.OK;case at.CANCELLED:return N.CANCELLED;case at.UNKNOWN:return N.UNKNOWN;case at.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case at.INTERNAL:return N.INTERNAL;case at.UNAVAILABLE:return N.UNAVAILABLE;case at.UNAUTHENTICATED:return N.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case at.NOT_FOUND:return N.NOT_FOUND;case at.ALREADY_EXISTS:return N.ALREADY_EXISTS;case at.PERMISSION_DENIED:return N.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case at.ABORTED:return N.ABORTED;case at.OUT_OF_RANGE:return N.OUT_OF_RANGE;case at.UNIMPLEMENTED:return N.UNIMPLEMENTED;case at.DATA_LOSS:return N.DATA_LOSS;default:return H()}}(G=at||(at={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ep(){return new TextEncoder}/**
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
 */const Tp=new De([4294967295,4294967295],0);function qa(n){const t=Ep().encode(n),e=new Pl;return e.update(t),new Uint8Array(e.digest())}function Ha(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),o=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new De([e,i],0),new De([o,s],0)]}class Vr{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new Vn(`Invalid padding: ${e}`);if(i<0)throw new Vn(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Vn(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new Vn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=De.fromNumber(this.Ie)}Ee(t,e,i){let o=t.add(e.multiply(De.fromNumber(i)));return o.compare(Tp)===1&&(o=new De([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=qa(t),[i,o]=Ha(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,o,s);if(!this.de(a))return!1}return!0}static create(t,e,i){const o=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Vr(s,o,e);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=qa(t),[i,o]=Ha(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,o,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class Vn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t,e,i,o,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const o=new Map;return o.set(t,ei.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new eo(U.min(),o,new it(Z),se(),W())}}class ei{constructor(t,e,i,o,s){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new ei(i,e,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e,i,o){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=o}}class cc{constructor(t,e){this.targetId=t,this.me=e}}class dc{constructor(t,e,i=vt.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=o}}class Ua{constructor(){this.fe=0,this.ge=Qa(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=W(),e=W(),i=W();return this.ge.forEach((o,s)=>{switch(s){case 0:t=t.add(o);break;case 2:e=e.add(o);break;case 1:i=i.add(o);break;default:H()}}),new ei(this.pe,this.ye,t,e,i)}Ce(){this.we=!1,this.ge=Qa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Rp{constructor(t){this.Le=t,this.Be=new Map,this.ke=se(),this.qe=$a(),this.Qe=new it(Z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:H()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,o)=>{this.ze(o)&&e(o)})}He(t){const e=t.targetId,i=t.me.count,o=this.Je(e);if(o){const s=o.target;if(ar(s))if(i===0){const a=new j(s.path);this.Ue(e,a,ht.newNoDocument(a,U.min()))}else X(i===1);else{const a=this.Ye(e);if(a!==i){const l=this.Ze(t),d=l?this.Xe(l,t,a):1;if(d!==0){this.je(e);const u=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,u)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:s=0}=e;let a,l;try{a=Ne(i).toUint8Array()}catch(d){if(d instanceof Ol)return Ye("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Vr(a,o,s)}catch(d){return Ye(d instanceof Vn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Ie===0?null:l}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let o=0;return i.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),o++)}),o}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&ar(l.target)){const d=new j(l.target.path);this.ke.get(d)!==null||this.it(a,d)||this.Ue(a,d,ht.newNoDocument(d,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let i=W();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(d=>{const u=this.Je(d);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const o=new eo(t,e,this.Qe,this.ke,i);return this.ke=se(),this.qe=$a(),this.Qe=new it(Z),o}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const o=this.Ge(t);this.it(t,e)?o.Fe(e,1):o.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ua,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new gt(Z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||z("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ua),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function $a(){return new it(j.comparator)}function Qa(){return new it(j.comparator)}const Cp={asc:"ASCENDING",desc:"DESCENDING"},Sp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pp={and:"AND",or:"OR"};class kp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function dr(n,t){return n.useProto3Json||Zn(t)?t:{value:t}}function ji(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function uc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Vp(n,t){return ji(n,t.toTimestamp())}function zt(n){return X(!!n),U.fromTimestamp(function(e){const i=ve(e);return new dt(i.seconds,i.nanos)}(n))}function Dr(n,t){return ur(n,t).canonicalString()}function ur(n,t){const e=function(o){return new tt(["projects",o.projectId,"databases",o.database])}(n).child("documents");return t===void 0?e:e.child(t)}function hc(n){const t=tt.fromString(n);return X(vc(t)),t}function qi(n,t){return Dr(n.databaseId,t.path)}function Fn(n,t){const e=hc(t);if(e.get(1)!==n.databaseId.projectId)throw new O(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(fc(e))}function pc(n,t){return Dr(n.databaseId,t)}function Dp(n){const t=hc(n);return t.length===4?tt.emptyPath():fc(t)}function hr(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fc(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Wa(n,t,e){return{name:qi(n,t),fields:e.value.mapValue.fields}}function Bp(n,t){return"found"in t?function(i,o){X(!!o.found),o.found.name,o.found.updateTime;const s=Fn(i,o.found.name),a=zt(o.found.updateTime),l=o.found.createTime?zt(o.found.createTime):U.min(),d=new Pt({mapValue:{fields:o.found.fields}});return ht.newFoundDocument(s,a,l,d)}(n,t):"missing"in t?function(i,o){X(!!o.missing),X(!!o.readTime);const s=Fn(i,o.missing),a=zt(o.readTime);return ht.newNoDocument(s,a)}(n,t):H()}function Np(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:H()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],s=function(u,m){return u.useProto3Json?(X(m===void 0||typeof m=="string"),vt.fromBase64String(m||"")):(X(m===void 0||m instanceof Buffer||m instanceof Uint8Array),vt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(u){const m=u.code===void 0?N.UNKNOWN:lc(u.code);return new O(m,u.message||"")}(a);e=new dc(i,o,s,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const o=Fn(n,i.document.name),s=zt(i.document.updateTime),a=i.document.createTime?zt(i.document.createTime):U.min(),l=new Pt({mapValue:{fields:i.document.fields}}),d=ht.newFoundDocument(o,s,a,l),u=i.targetIds||[],m=i.removedTargetIds||[];e=new Vi(u,m,d.key,d)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const o=Fn(n,i.document),s=i.readTime?zt(i.readTime):U.min(),a=ht.newNoDocument(o,s),l=i.removedTargetIds||[];e=new Vi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const o=Fn(n,i.document),s=i.removedTargetIds||[];e=new Vi([],s,o,null)}else{if(!("filter"in t))return H();{t.filter;const i=t.filter;i.targetId;const{count:o=0,unchangedNames:s}=i,a=new Ip(o,s),l=i.targetId;e=new cc(l,a)}}return e}function mc(n,t){let e;if(t instanceof Yn)e={update:Wa(n,t.key,t.value)};else if(t instanceof ti)e={delete:qi(n,t.key)};else if(t instanceof Ae)e={update:Wa(n,t.key,t.data),updateMask:Up(t.fieldMask)};else{if(!(t instanceof sc))return H();e={verify:qi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const l=a.transform;if(l instanceof $n)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof zi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw H()}(0,i))),t.precondition.isNone||(e.currentDocument=function(o,s){return s.updateTime!==void 0?{updateTime:Vp(o,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(n,t.precondition)),e}function Lp(n,t){return n&&n.length>0?(X(t!==void 0),n.map(e=>function(o,s){let a=o.updateTime?zt(o.updateTime):zt(s);return a.isEqual(U.min())&&(a=zt(s)),new bp(a,o.transformResults||[])}(e,t))):[]}function Fp(n,t){return{documents:[pc(n,t.path)]}}function Mp(n,t){const e={structuredQuery:{}},i=t.path;let o;t.collectionGroup!==null?(o=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=pc(n,o);const s=function(u){if(u.length!==0)return yc(Ut.create(u,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(u){if(u.length!==0)return u.map(m=>function(g){return{field:Ge(g.field),direction:jp(g.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=dr(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:e,parent:o}}function Op(n){let t=Dp(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let o=null;if(i>0){X(i===1);const m=e.from[0];m.allDescendants?o=m.collectionId:t=t.child(m.collectionId)}let s=[];e.where&&(s=function(p){const g=gc(p);return g instanceof Ut&&Hl(g)?g.getFilters():[g]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(g=>function(S){return new Un(Ke(S.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(e.orderBy));let l=null;e.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Zn(g)?null:g}(e.limit));let d=null;e.startAt&&(d=function(p){const g=!!p.before,A=p.values||[];return new Oi(A,g)}(e.startAt));let u=null;return e.endAt&&(u=function(p){const g=!p.before,A=p.values||[];return new Oi(A,g)}(e.endAt)),rp(t,o,a,s,l,"F",d,u)}function zp(n,t){const e=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function gc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=Ke(e.unaryFilter.field);return lt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Ke(e.unaryFilter.field);return lt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ke(e.unaryFilter.field);return lt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ke(e.unaryFilter.field);return lt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(e){return lt.create(Ke(e.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ut.create(e.compositeFilter.filters.map(i=>gc(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(n):H()}function jp(n){return Cp[n]}function qp(n){return Sp[n]}function Hp(n){return Pp[n]}function Ge(n){return{fieldPath:n.canonicalString()}}function Ke(n){return mt.fromServerFormat(n.fieldPath)}function yc(n){return n instanceof lt?function(e){if(e.op==="=="){if(Da(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NAN"}};if(Va(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Da(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NOT_NAN"}};if(Va(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ge(e.field),op:qp(e.op),value:e.value}}}(n):n instanceof Ut?function(e){const i=e.getFilters().map(o=>yc(o));return i.length===1?i[0]:{compositeFilter:{op:Hp(e.op),filters:i}}}(n):H()}function Up(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function vc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e,i,o,s=U.min(),a=U.min(),l=vt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new pe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new pe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new pe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new pe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(t){this.ct=t}}function Qp(n){const t=Op({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cr(t,t.limit,"L"):t}/**
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
 */class Wp{constructor(){this.un=new Gp}addToCollectionParentIndex(t,e){return this.un.add(e),F.resolve()}getCollectionParents(t,e){return F.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return F.resolve()}deleteFieldIndex(t,e){return F.resolve()}deleteAllFieldIndexes(t){return F.resolve()}createTargetIndexes(t,e){return F.resolve()}getDocumentsMatchingTarget(t,e){return F.resolve(null)}getIndexType(t,e){return F.resolve(0)}getFieldIndexes(t,e){return F.resolve([])}getNextCollectionGroupToUpdate(t){return F.resolve(null)}getMinOffset(t,e){return F.resolve(ye.min())}getMinOffsetFromCollectionGroup(t,e){return F.resolve(ye.min())}updateCollectionGroup(t,e,i){return F.resolve()}updateIndexEntries(t,e){return F.resolve()}}class Gp{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),o=this.index[e]||new gt(tt.comparator),s=!o.has(i);return this.index[e]=o.add(i),s}has(t){const e=t.lastSegment(),i=t.popLast(),o=this.index[e];return o&&o.has(i)}getEntries(t){return(this.index[t]||new gt(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new on(0)}static kn(){return new on(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.changes=new dn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ht.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?F.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,e,i,o){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=o}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(o=>(i=o,this.remoteDocumentCache.getEntry(t,e))).next(o=>(i!==null&&Ln(i.mutation,o,Ot.empty(),dt.now()),o))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,W()).next(()=>i))}getLocalViewOfDocuments(t,e,i=W()){const o=ke();return this.populateOverlays(t,o,e).next(()=>this.computeViews(t,e,o,i).next(s=>{let a=kn();return s.forEach((l,d)=>{a=a.insert(l,d.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const i=ke();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,W()))}populateOverlays(t,e,i){const o=[];return i.forEach(s=>{e.has(s)||o.push(s)}),this.documentOverlayCache.getOverlays(t,o).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,i,o){let s=se();const a=Nn(),l=function(){return Nn()}();return e.forEach((d,u)=>{const m=i.get(u.key);o.has(u.key)&&(m===void 0||m.mutation instanceof Ae)?s=s.insert(u.key,u):m!==void 0?(a.set(u.key,m.mutation.getFieldMask()),Ln(m.mutation,u,m.mutation.getFieldMask(),dt.now())):a.set(u.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,s).next(d=>(d.forEach((u,m)=>a.set(u,m)),e.forEach((u,m)=>{var p;return l.set(u,new Xp(m,(p=a.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(t,e){const i=Nn();let o=new it((a,l)=>a-l),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(d=>{const u=e.get(d);if(u===null)return;let m=i.get(d)||Ot.empty();m=l.applyToLocalView(u,m),i.set(d,m);const p=(o.get(l.batchId)||W()).add(d);o=o.insert(l.batchId,p)})}).next(()=>{const a=[],l=o.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),u=d.key,m=d.value,p=Zl();m.forEach(g=>{if(!s.has(g)){const A=oc(e.get(g),i.get(g));A!==null&&p.set(g,A),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,u,p))}return F.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,o){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Wl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,o):this.getDocumentsMatchingCollectionQuery(t,e,i,o)}getNextDocuments(t,e,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,o).next(s=>{const a=o-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,o-s.size):F.resolve(ke());let l=-1,d=s;return a.next(u=>F.forEach(u,(m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(m)?F.resolve():this.remoteDocumentCache.getEntry(t,m).next(g=>{d=d.insert(m,g)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,d,u,W())).next(m=>({batchId:l,changes:Jl(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(i=>{let o=kn();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(t,e,i,o){const s=e.collectionGroup;let a=kn();return this.indexManager.getCollectionParents(t,s).next(l=>F.forEach(l,d=>{const u=function(p,g){return new cn(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,d.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,i,o).next(m=>{m.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,i,o){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,s,o))).next(a=>{s.forEach((d,u)=>{const m=u.getKey();a.get(m)===null&&(a=a.insert(m,ht.newInvalidDocument(m)))});let l=kn();return a.forEach((d,u)=>{const m=s.get(d);m!==void 0&&Ln(m.mutation,u,Ot.empty(),dt.now()),Zi(e,u)&&(l=l.insert(d,u))}),l})}}/**
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
 */class Zp{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return F.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(o){return{id:o.id,version:o.version,createTime:zt(o.createTime)}}(e)),F.resolve()}getNamedQuery(t,e){return F.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(o){return{name:o.name,query:Qp(o.bundledQuery),readTime:zt(o.readTime)}}(e)),F.resolve()}}/**
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
 */class Yp{constructor(){this.overlays=new it(j.comparator),this.Ir=new Map}getOverlay(t,e){return F.resolve(this.overlays.get(e))}getOverlays(t,e){const i=ke();return F.forEach(e,o=>this.getOverlay(t,o).next(s=>{s!==null&&i.set(o,s)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((o,s)=>{this.ht(t,e,s)}),F.resolve()}removeOverlaysForBatchId(t,e,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),F.resolve()}getOverlaysForCollection(t,e,i){const o=ke(),s=e.length+1,a=new j(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const d=l.getNext().value,u=d.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&d.largestBatchId>i&&o.set(d.getKey(),d)}return F.resolve(o)}getOverlaysForCollectionGroup(t,e,i,o){let s=new it((u,m)=>u-m);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>i){let m=s.get(u.largestBatchId);m===null&&(m=ke(),s=s.insert(u.largestBatchId,m)),m.set(u.getKey(),u)}}const l=ke(),d=s.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((u,m)=>l.set(u,m)),!(l.size()>=o)););return F.resolve(l)}ht(t,e,i){const o=this.overlays.get(i.key);if(o!==null){const a=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new _p(e,i));let s=this.Ir.get(e);s===void 0&&(s=W(),this.Ir.set(e,s)),this.Ir.set(e,s.add(i.key))}}/**
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
 */class tf{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(t){return F.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.Tr=new gt(ut.Er),this.dr=new gt(ut.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new ut(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new ut(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new j(new tt([])),i=new ut(e,t),o=new ut(e,t+1),s=[];return this.dr.forEachInRange([i,o],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new j(new tt([])),i=new ut(e,t),o=new ut(e,t+1);let s=W();return this.dr.forEachInRange([i,o],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new ut(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class ut{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return j.comparator(t.key,e.key)||Z(t.wr,e.wr)}static Ar(t,e){return Z(t.wr,e.wr)||j.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new gt(ut.Er)}checkEmpty(t){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,o){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new xp(s,e,i,o);this.mutationQueue.push(a);for(const l of o)this.br=this.br.add(new ut(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(t,e){return F.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,o=this.vr(i),s=o<0?0:o;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new ut(e,0),o=new ut(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,o],a=>{const l=this.Dr(a.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new gt(Z);return e.forEach(o=>{const s=new ut(o,0),a=new ut(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{i=i.add(l.wr)})}),F.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,o=i.length+1;let s=i;j.isDocumentKey(s)||(s=s.child(""));const a=new ut(new j(s),0);let l=new gt(Z);return this.br.forEachWhile(d=>{const u=d.key.path;return!!i.isPrefixOf(u)&&(u.length===o&&(l=l.add(d.wr)),!0)},a),F.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(i=>{const o=this.Dr(i);o!==null&&e.push(o)}),e}removeMutationBatch(t,e){X(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return F.forEach(e.mutations,o=>{const s=new ut(o.key,e.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new ut(e,0),o=this.br.firstAfterOrEqual(i);return F.resolve(e.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,F.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t){this.Mr=t,this.docs=function(){return new it(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,o=this.docs.get(i),s=o?o.size:0,a=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return F.resolve(i?i.document.mutableCopy():ht.newInvalidDocument(e))}getEntries(t,e){let i=se();return e.forEach(o=>{const s=this.docs.get(o);i=i.insert(o,s?s.document.mutableCopy():ht.newInvalidDocument(o))}),F.resolve(i)}getDocumentsMatchingQuery(t,e,i,o){let s=se();const a=e.path,l=new j(a.child("")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:u,value:{document:m}}=d.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||zh(Oh(m),i)<=0||(o.has(m.key)||Zi(e,m))&&(s=s.insert(m.key,m.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(t,e,i,o){H()}Or(t,e){return F.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new of(this)}getSize(t){return F.resolve(this.size)}}class of extends Kp{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?e.push(this.cr.addEntry(t,o)):this.cr.removeEntry(i)}),F.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t){this.persistence=t,this.Nr=new dn(e=>Cr(e),Sr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Br,this.targetCount=0,this.kr=on.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,o)=>e(o)),F.resolve()}getLastRemoteSnapshotVersion(t){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return F.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),F.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new on(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,F.resolve()}updateTargetData(t,e){return this.Kn(e),F.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,F.resolve()}removeTargets(t,e,i){let o=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&i.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),o++)}),F.waitFor(s).next(()=>o)}getTargetCount(t){return F.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return F.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),F.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const o=this.persistence.referenceDelegate,s=[];return o&&e.forEach(a=>{s.push(o.markPotentiallyOrphaned(t,a))}),F.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),F.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return F.resolve(i)}containsKey(t,e){return F.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ir(0),this.Kr=!1,this.Kr=!0,this.$r=new tf,this.referenceDelegate=t(this),this.Ur=new rf(this),this.indexManager=new Wp,this.remoteDocumentCache=function(o){return new nf(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new $p(e),this.Gr=new Zp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Yp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new ef(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){z("MemoryPersistence","Starting transaction:",t);const o=new af(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(s=>this.referenceDelegate.jr(o).next(()=>s)).toPromise().then(s=>(o.raiseOnCommittedEvent(),s))}Hr(t,e){return F.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class af extends qh{constructor(t){super(),this.currentSequenceNumber=t}}class Nr{constructor(t){this.persistence=t,this.Jr=new Br,this.Yr=null}static Zr(t){return new Nr(t)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),F.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),F.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),F.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(o=>{o.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,i=>{const o=j.fromPath(i);return this.ei(t,o).next(s=>{s||e.removeEntry(o,U.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return F.or([()=>F.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e,i,o){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=o}static Wi(t,e){let i=W(),o=W();for(const s of e.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:o=o.add(s.doc.key)}return new Lr(t,e.fromCache,i,o)}}/**
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
 */class lf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class cf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return uu()?8:Hh(cu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,o){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,o,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new lf;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,i,o){return i.documentReadCount<this.ji?(Sn()<=K.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",We(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Sn()<=K.DEBUG&&z("QueryEngine","Query:",We(e),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(Sn()<=K.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",We(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Jt(e))):F.resolve())}Yi(t,e){if(Fa(e))return F.resolve(null);let i=Jt(e);return this.indexManager.getIndexType(t,i).next(o=>o===0?null:(e.limit!==null&&o===1&&(e=cr(e,null,"F"),i=Jt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=W(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(d=>{const u=this.ts(e,l);return this.ns(e,u,a,d.readTime)?this.Yi(t,cr(e,null,"F")):this.rs(t,u,e,d)}))})))}Zi(t,e,i,o){return Fa(e)||o.isEqual(U.min())?F.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const a=this.ts(e,s);return this.ns(e,a,i,o)?F.resolve(null):(Sn()<=K.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),We(e)),this.rs(t,a,e,Mh(o,-1)).next(l=>l))})}ts(t,e){let i=new gt(Kl(t));return e.forEach((o,s)=>{Zi(t,s)&&(i=i.add(s))}),i}ns(t,e,i,o){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(o)>0)}Xi(t,e,i){return Sn()<=K.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",We(e)),this.Ji.getDocumentsMatchingQuery(t,e,ye.min(),i)}rs(t,e,i,o){return this.Ji.getDocumentsMatchingQuery(t,i,o).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class df{constructor(t,e,i,o){this.persistence=t,this.ss=e,this.serializer=o,this.os=new it(Z),this._s=new dn(s=>Cr(s),Sr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function uf(n,t,e,i){return new df(n,t,e,i)}async function bc(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let o;return e.mutationQueue.getAllMutationBatches(i).next(s=>(o=s,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],l=[];let d=W();for(const u of o){a.push(u.batchId);for(const m of u.mutations)d=d.add(m.key)}for(const u of s){l.push(u.batchId);for(const m of u.mutations)d=d.add(m.key)}return e.localDocuments.getDocuments(i,d).next(u=>({hs:u,removedBatchIds:a,addedBatchIds:l}))})})}function hf(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,d,u,m){const p=u.batch,g=p.keys();let A=F.resolve();return g.forEach(S=>{A=A.next(()=>m.getEntry(d,S)).next(C=>{const T=u.docVersions.get(S);X(T!==null),C.version.compareTo(T)<0&&(p.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),m.addEntry(C)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(d,p))}(e,i,t,s).next(()=>s.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,o,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let d=W();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(d=d.add(l.batch.mutations[u].key));return d}(t))).next(()=>e.localDocuments.getDocuments(i,o))})}function wc(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function pf(n,t){const e=$(n),i=t.snapshotVersion;let o=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});o=e.os;const l=[];t.targetChanges.forEach((m,p)=>{const g=o.get(p);if(!g)return;l.push(e.Ur.removeMatchingKeys(s,m.removedDocuments,p).next(()=>e.Ur.addMatchingKeys(s,m.addedDocuments,p)));let A=g.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(p)!==null?A=A.withResumeToken(vt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,i)),o=o.insert(p,A),function(C,T,V){return C.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(g,A,m)&&l.push(e.Ur.updateTargetData(s,A))});let d=se(),u=W();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,m))}),l.push(ff(s,a,t.documentUpdates).next(m=>{d=m.Ps,u=m.Is})),!i.isEqual(U.min())){const m=e.Ur.getLastRemoteSnapshotVersion(s).next(p=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));l.push(m)}return F.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,d,u)).next(()=>d)}).then(s=>(e.os=o,s))}function ff(n,t,e){let i=W(),o=W();return e.forEach(s=>i=i.add(s)),t.getEntries(n,i).next(s=>{let a=se();return e.forEach((l,d)=>{const u=s.get(l);d.isFoundDocument()!==u.isFoundDocument()&&(o=o.add(l)),d.isNoDocument()&&d.version.isEqual(U.min())?(t.removeEntry(l,d.readTime),a=a.insert(l,d)):!u.isValidDocument()||d.version.compareTo(u.version)>0||d.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(d),a=a.insert(l,d)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",d.version)}),{Ps:a,Is:o}})}function mf(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function gf(n,t){const e=$(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return e.Ur.getTargetData(i,t).next(s=>s?(o=s,F.resolve(o)):e.Ur.allocateTargetId(i).next(a=>(o=new pe(t,a,"TargetPurposeListen",i.currentSequenceNumber),e.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=e.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(e.os=e.os.insert(i.targetId,i),e._s.set(t,i.targetId)),i})}async function pr(n,t,e){const i=$(n),o=i.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,o))}catch(a){if(!Jn(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(o.target)}function Ga(n,t,e){const i=$(n);let o=U.min(),s=W();return i.persistence.runTransaction("Execute query","readwrite",a=>function(d,u,m){const p=$(d),g=p._s.get(m);return g!==void 0?F.resolve(p.os.get(g)):p.Ur.getTargetData(u,m)}(i,a,Jt(t)).next(l=>{if(l)return o=l.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,l.targetId).next(d=>{s=d})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,e?o:U.min(),e?s:W())).next(l=>(yf(i,ap(t),l),{documents:l,Ts:s})))}function yf(n,t,e){let i=n.us.get(t)||U.min();e.forEach((o,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.us.set(t,i)}class Ka{constructor(){this.activeTargetIds=pp()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vf{constructor(){this.so=new Ka,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ka,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class bf{_o(t){}shutdown(){}}/**
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
 */let Ri=null;function Uo(){return Ri===null?Ri=function(){return 268435456+Math.round(2147483648*Math.random())}():Ri++,"0x"+Ri.toString(16)}/**
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
 */const wf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class xf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${o}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${s}`}get Fo(){return!1}Mo(e,i,o,s,a){const l=Uo(),d=this.xo(e,i.toUriEncodedString());z("RestConnection",`Sending RPC '${e}' ${l}:`,d,o);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,a),this.No(e,d,u,o).then(m=>(z("RestConnection",`Received RPC '${e}' ${l}: `,m),m),m=>{throw Ye("RestConnection",`RPC '${e}' ${l} failed with error: `,m,"url: ",d,"request:",o),m})}Lo(e,i,o,s,a,l){return this.Mo(e,i,o,s,a)}Oo(e,i,o){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ln}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>e[a]=s),o&&o.headers.forEach((s,a)=>e[a]=s)}xo(e,i){const o=wf[e];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,o){const s=Uo();return new Promise((a,l)=>{const d=new kl;d.setWithCredentials(!0),d.listenOnce(Vl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Si.NO_ERROR:const m=d.getResponseJson();z(It,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(m)),a(m);break;case Si.TIMEOUT:z(It,`RPC '${t}' ${s} timed out`),l(new O(N.DEADLINE_EXCEEDED,"Request time out"));break;case Si.HTTP_ERROR:const p=d.getStatus();if(z(It,`RPC '${t}' ${s} failed with status:`,p,"response text:",d.getResponseText()),p>0){let g=d.getResponseJson();Array.isArray(g)&&(g=g[0]);const A=g==null?void 0:g.error;if(A&&A.status&&A.message){const S=function(T){const V=T.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(V)>=0?V:N.UNKNOWN}(A.status);l(new O(S,A.message))}else l(new O(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new O(N.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{z(It,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(o);z(It,`RPC '${t}' ${s} sending request:`,o),d.send(e,"POST",u,i,15)})}Bo(t,e,i){const o=Uo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Nl(),l=Bl(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(d.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Oo(d.initMessageHeaders,e,i),d.encodeInitMessageHeaders=!0;const m=s.join("");z(It,`Creating RPC '${t}' stream ${o}: ${m}`,d);const p=a.createWebChannel(m,d);let g=!1,A=!1;const S=new Af({Io:T=>{A?z(It,`Not sending because RPC '${t}' stream ${o} is closed:`,T):(g||(z(It,`Opening RPC '${t}' stream ${o} transport.`),p.open(),g=!0),z(It,`RPC '${t}' stream ${o} sending:`,T),p.send(T))},To:()=>p.close()}),C=(T,V,k)=>{T.listen(V,B=>{try{k(B)}catch(L){setTimeout(()=>{throw L},0)}})};return C(p,Pn.EventType.OPEN,()=>{A||(z(It,`RPC '${t}' stream ${o} transport opened.`),S.yo())}),C(p,Pn.EventType.CLOSE,()=>{A||(A=!0,z(It,`RPC '${t}' stream ${o} transport closed`),S.So())}),C(p,Pn.EventType.ERROR,T=>{A||(A=!0,Ye(It,`RPC '${t}' stream ${o} transport errored:`,T),S.So(new O(N.UNAVAILABLE,"The operation could not be completed")))}),C(p,Pn.EventType.MESSAGE,T=>{var V;if(!A){const k=T.data[0];X(!!k);const B=k,L=B.error||((V=B[0])===null||V===void 0?void 0:V.error);if(L){z(It,`RPC '${t}' stream ${o} received error:`,L);const R=L.status;let E=function(w){const b=at[w];if(b!==void 0)return lc(b)}(R),v=L.message;E===void 0&&(E=N.INTERNAL,v="Unknown error status: "+R+" with message "+L.message),A=!0,S.So(new O(E,v)),p.close()}else z(It,`RPC '${t}' stream ${o} received:`,k),S.bo(k)}}),C(l,Dl.STAT_EVENT,T=>{T.stat===ir.PROXY?z(It,`RPC '${t}' stream ${o} detected buffering proxy`):T.stat===ir.NOPROXY&&z(It,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function $o(){return typeof document<"u"?document:null}/**
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
 */function no(n){return new kp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,i=1e3,o=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=o,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,e-i);o>0&&z("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e,i,o,s,a,l,d){this.ui=t,this.Ho=i,this.Jo=o,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Fr(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===N.RESOURCE_EXHAUSTED?(re(e.toString()),re("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===e&&this.P_(i,o)},i=>{t(()=>{const o=new O(N.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _f extends Ac{constructor(t,e,i,o,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,o,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Np(this.serializer,t),i=function(s){if(!("targetChange"in s))return U.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?zt(a.readTime):U.min()}(t);return this.listener.d_(e,i)}A_(t){const e={};e.database=hr(this.serializer),e.addTarget=function(s,a){let l;const d=a.target;if(l=ar(d)?{documents:Fp(s,d)}:{query:Mp(s,d)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=uc(s,a.resumeToken);const u=dr(s,a.expectedCount);u!==null&&(l.expectedCount=u)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=ji(s,a.snapshotVersion.toTimestamp());const u=dr(s,a.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,t);const i=zp(this.serializer,t);i&&(e.labels=i),this.a_(e)}R_(t){const e={};e.database=hr(this.serializer),e.removeTarget=t,this.a_(e)}}class If extends Ac{constructor(t,e,i,o,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,o,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return X(!!t.streamToken),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Lp(t.writeResults,t.commitTime),i=zt(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=hr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>mc(this.serializer,i))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends class{}{constructor(t,e,i,o){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new O(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,ur(e,i),o,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(N.UNKNOWN,s.toString())})}Lo(t,e,i,o,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,ur(e,i),o,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Tf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(re(e),this.D_=!1):z("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,e,i,o,s){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{i.enqueueAndForget(async()=>{Oe(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(d){const u=$(d);u.L_.add(4),await ni(u),u.q_.set("Unknown"),u.L_.delete(4),await io(u)}(this))})}),this.q_=new Tf(i,o)}}async function io(n){if(Oe(n))for(const t of n.B_)await t(!0)}async function ni(n){for(const t of n.B_)await t(!1)}function xc(n,t){const e=$(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),jr(e)?zr(e):un(e).r_()&&Or(e,t))}function Mr(n,t){const e=$(n),i=un(e);e.N_.delete(t),i.r_()&&_c(e,t),e.N_.size===0&&(i.r_()?i.o_():Oe(e)&&e.q_.set("Unknown"))}function Or(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}un(n).A_(t)}function _c(n,t){n.Q_.xe(t),un(n).R_(t)}function zr(n){n.Q_=new Rp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),un(n).start(),n.q_.v_()}function jr(n){return Oe(n)&&!un(n).n_()&&n.N_.size>0}function Oe(n){return $(n).L_.size===0}function Ic(n){n.Q_=void 0}async function Cf(n){n.q_.set("Online")}async function Sf(n){n.N_.forEach((t,e)=>{Or(n,t)})}async function Pf(n,t){Ic(n),jr(n)?(n.q_.M_(t),zr(n)):n.q_.set("Unknown")}async function kf(n,t,e){if(n.q_.set("Online"),t instanceof dc&&t.state===2&&t.cause)try{await async function(o,s){const a=s.cause;for(const l of s.targetIds)o.N_.has(l)&&(await o.remoteSyncer.rejectListen(l,a),o.N_.delete(l),o.Q_.removeTarget(l))}(n,t)}catch(i){z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Hi(n,i)}else if(t instanceof Vi?n.Q_.Ke(t):t instanceof cc?n.Q_.He(t):n.Q_.We(t),!e.isEqual(U.min()))try{const i=await wc(n.localStore);e.compareTo(i)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((d,u)=>{if(d.resumeToken.approximateByteSize()>0){const m=s.N_.get(u);m&&s.N_.set(u,m.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,u)=>{const m=s.N_.get(d);if(!m)return;s.N_.set(d,m.withResumeToken(vt.EMPTY_BYTE_STRING,m.snapshotVersion)),_c(s,d);const p=new pe(m.target,d,u,m.sequenceNumber);Or(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(i){z("RemoteStore","Failed to raise snapshot:",i),await Hi(n,i)}}async function Hi(n,t,e){if(!Jn(t))throw t;n.L_.add(1),await ni(n),n.q_.set("Offline"),e||(e=()=>wc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await io(n)})}function Ec(n,t){return t().catch(e=>Hi(n,e,t))}async function oo(n){const t=$(n),e=be(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Vf(t);)try{const o=await mf(t.localStore,i);if(o===null){t.O_.length===0&&e.o_();break}i=o.batchId,Df(t,o)}catch(o){await Hi(t,o)}Tc(t)&&Rc(t)}function Vf(n){return Oe(n)&&n.O_.length<10}function Df(n,t){n.O_.push(t);const e=be(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Tc(n){return Oe(n)&&!be(n).n_()&&n.O_.length>0}function Rc(n){be(n).start()}async function Bf(n){be(n).p_()}async function Nf(n){const t=be(n);for(const e of n.O_)t.m_(e.mutations)}async function Lf(n,t,e){const i=n.O_.shift(),o=kr.from(i,t,e);await Ec(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await oo(n)}async function Ff(n,t){t&&be(n).V_&&await async function(i,o){if(function(a){return ac(a)&&a!==N.ABORTED}(o.code)){const s=i.O_.shift();be(i).s_(),await Ec(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,o)),await oo(i)}}(n,t),Tc(n)&&Rc(n)}async function Ja(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const i=Oe(e);e.L_.add(3),await ni(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await io(e)}async function Mf(n,t){const e=$(n);t?(e.L_.delete(2),await io(e)):t||(e.L_.add(2),await ni(e),e.q_.set("Unknown"))}function un(n){return n.K_||(n.K_=function(e,i,o){const s=$(e);return s.w_(),new _f(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)}(n.datastore,n.asyncQueue,{Eo:Cf.bind(null,n),Ro:Sf.bind(null,n),mo:Pf.bind(null,n),d_:kf.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),jr(n)?zr(n):n.q_.set("Unknown")):(await n.K_.stop(),Ic(n))})),n.K_}function be(n){return n.U_||(n.U_=function(e,i,o){const s=$(e);return s.w_(),new If(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Bf.bind(null,n),mo:Ff.bind(null,n),f_:Nf.bind(null,n),g_:Lf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await oo(n)):(await n.U_.stop(),n.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e,i,o,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=o,this.removalCallback=s,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,o,s){const a=Date.now()+i,l=new qr(t,e,a,o,s);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hr(n,t){if(re("AsyncQueue",`${t}: ${n}`),Jn(n))return new O(N.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t){this.comparator=t?(e,i)=>t(e,i)||j.comparator(e.key,i.key):(e,i)=>j.comparator(e.key,i.key),this.keyedMap=kn(),this.sortedSet=new it(this.comparator)}static emptySet(t){return new Ze(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ze)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const o=e.getNext().key,s=i.getNext().key;if(!o.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new Ze;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this.W_=new it(j.comparator)}track(t){const e=t.doc.key,i=this.W_.get(e);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(e,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(e):t.type===1&&i.type===2?this.W_=this.W_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):H():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,i)=>{t.push(i)}),t}}class rn{constructor(t,e,i,o,s,a,l,d,u){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=u}static fromInitialDocuments(t,e,i,o,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new rn(t,e,Ze.emptySet(e),a,i,o,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ji(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let o=0;o<e.length;o++)if(e[o].type!==i[o].type||!e[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class zf{constructor(){this.queries=Ya(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const o=$(e),s=o.queries;o.queries=Ya(),s.forEach((a,l)=>{for(const d of l.j_)d.onError(i)})})(this,new O(N.ABORTED,"Firestore shutting down"))}}function Ya(){return new dn(n=>Gl(n),Ji)}async function Ur(n,t){const e=$(n);let i=3;const o=t.query;let s=e.queries.get(o);s?!s.H_()&&t.J_()&&(i=2):(s=new Of,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await e.onListen(o,!0);break;case 1:s.z_=await e.onListen(o,!1);break;case 2:await e.onFirstRemoteStoreListen(o)}}catch(a){const l=Hr(a,`Initialization of query '${We(t.query)}' failed`);return void t.onError(l)}e.queries.set(o,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Qr(e)}async function $r(n,t){const e=$(n),i=t.query;let o=3;const s=e.queries.get(i);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?o=t.J_()?0:1:!s.H_()&&t.J_()&&(o=2))}switch(o){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function jf(n,t){const e=$(n);let i=!1;for(const o of t){const s=o.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(o)&&(i=!0);a.z_=o}}i&&Qr(e)}function qf(n,t,e){const i=$(n),o=i.queries.get(t);if(o)for(const s of o.j_)s.onError(e);i.queries.delete(t)}function Qr(n){n.Y_.forEach(t=>{t.next()})}var fr,tl;(tl=fr||(fr={})).ea="default",tl.Cache="cache";class Wr{constructor(t,e,i){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const o of t.docChanges)o.type!==3&&i.push(o);t=new rn(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const i=e!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=rn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==fr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t){this.key=t}}class Sc{constructor(t){this.key=t}}class Hf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=Kl(t),this.Ra=new Ze(this.Aa)}get Va(){return this.Ta}ma(t,e){const i=e?e.fa:new Za,o=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=o,l=!1;const d=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,u=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((m,p)=>{const g=o.get(m),A=Zi(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),C=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let T=!1;g&&A?g.data.isEqual(A.data)?S!==C&&(i.track({type:3,doc:A}),T=!0):this.ga(g,A)||(i.track({type:2,doc:A}),T=!0,(d&&this.Aa(A,d)>0||u&&this.Aa(A,u)<0)&&(l=!0)):!g&&A?(i.track({type:0,doc:A}),T=!0):g&&!A&&(i.track({type:1,doc:g}),T=!0,(d||u)&&(l=!0)),T&&(A?(a=a.add(A),s=C?s.add(m):s.delete(m)):(a=a.delete(m),s=s.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),s=s.delete(m.key),i.track({type:1,doc:m})}return{Ra:a,fa:i,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,o){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,p)=>function(A,S){const C=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return C(A)-C(S)}(m.type,p.type)||this.Aa(m.doc,p.doc)),this.pa(i),o=o!=null&&o;const l=e&&!o?this.ya():[],d=this.da.size===0&&this.current&&!o?1:0,u=d!==this.Ea;return this.Ea=d,a.length!==0||u?{snapshot:new rn(this.query,t.Ra,s,a,t.mutatedKeys,d===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Za,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=W(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const e=[];return t.forEach(i=>{this.da.has(i)||e.push(new Sc(i))}),this.da.forEach(i=>{t.has(i)||e.push(new Cc(i))}),e}ba(t){this.Ta=t.Ts,this.da=W();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return rn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Uf{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class $f{constructor(t){this.key=t,this.va=!1}}class Qf{constructor(t,e,i,o,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=o,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new dn(l=>Gl(l),Ji),this.Ma=new Map,this.xa=new Set,this.Oa=new it(j.comparator),this.Na=new Map,this.La=new Br,this.Ba={},this.ka=new Map,this.qa=on.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Wf(n,t,e=!0){const i=Nc(n);let o;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),o=s.view.Da()):o=await Pc(i,t,e,!0),o}async function Gf(n,t){const e=Nc(n);await Pc(e,t,!0,!1)}async function Pc(n,t,e,i){const o=await gf(n.localStore,Jt(t)),s=o.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return i&&(l=await Kf(n,t,s,a==="current",o.resumeToken)),n.isPrimaryClient&&e&&xc(n.remoteStore,o),l}async function Kf(n,t,e,i,o){n.Ka=(p,g,A)=>async function(C,T,V,k){let B=T.view.ma(V);B.ns&&(B=await Ga(C.localStore,T.query,!1).then(({documents:v})=>T.view.ma(v,B)));const L=k&&k.targetChanges.get(T.targetId),R=k&&k.targetMismatches.get(T.targetId)!=null,E=T.view.applyChanges(B,C.isPrimaryClient,L,R);return nl(C,T.targetId,E.wa),E.snapshot}(n,p,g,A);const s=await Ga(n.localStore,t,!0),a=new Hf(t,s.Ts),l=a.ma(s.documents),d=ei.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",o),u=a.applyChanges(l,n.isPrimaryClient,d);nl(n,e,u.wa);const m=new Uf(t,e,a);return n.Fa.set(t,m),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),u.snapshot}async function Xf(n,t,e){const i=$(n),o=i.Fa.get(t),s=i.Ma.get(o.targetId);if(s.length>1)return i.Ma.set(o.targetId,s.filter(a=>!Ji(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await pr(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),e&&Mr(i.remoteStore,o.targetId),mr(i,o.targetId)}).catch(Xn)):(mr(i,o.targetId),await pr(i.localStore,o.targetId,!0))}async function Jf(n,t){const e=$(n),i=e.Fa.get(t),o=e.Ma.get(i.targetId);e.isPrimaryClient&&o.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Mr(e.remoteStore,i.targetId))}async function Zf(n,t,e){const i=rm(n);try{const o=await function(a,l){const d=$(a),u=dt.now(),m=l.reduce((A,S)=>A.add(S.key),W());let p,g;return d.persistence.runTransaction("Locally write mutations","readwrite",A=>{let S=se(),C=W();return d.cs.getEntries(A,m).next(T=>{S=T,S.forEach((V,k)=>{k.isValidDocument()||(C=C.add(V))})}).next(()=>d.localDocuments.getOverlayedDocuments(A,S)).next(T=>{p=T;const V=[];for(const k of l){const B=Ap(k,p.get(k.key).overlayedDocument);B!=null&&V.push(new Ae(k.key,B,zl(B.value.mapValue),ct.exists(!0)))}return d.mutationQueue.addMutationBatch(A,u,V,l)}).next(T=>{g=T;const V=T.applyToLocalDocumentSet(p,C);return d.documentOverlayCache.saveOverlays(A,T.batchId,V)})}).then(()=>({batchId:g.batchId,changes:Jl(p)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(o.batchId),function(a,l,d){let u=a.Ba[a.currentUser.toKey()];u||(u=new it(Z)),u=u.insert(l,d),a.Ba[a.currentUser.toKey()]=u}(i,o.batchId,e),await ii(i,o.changes),await oo(i.remoteStore)}catch(o){const s=Hr(o,"Failed to persist write");e.reject(s)}}async function kc(n,t){const e=$(n);try{const i=await pf(e.localStore,t);t.targetChanges.forEach((o,s)=>{const a=e.Na.get(s);a&&(X(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?a.va=!0:o.modifiedDocuments.size>0?X(a.va):o.removedDocuments.size>0&&(X(a.va),a.va=!1))}),await ii(e,i,t)}catch(i){await Xn(i)}}function el(n,t,e){const i=$(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const o=[];i.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&o.push(l.snapshot)}),function(a,l){const d=$(a);d.onlineState=l;let u=!1;d.queries.forEach((m,p)=>{for(const g of p.j_)g.Z_(l)&&(u=!0)}),u&&Qr(d)}(i.eventManager,t),o.length&&i.Ca.d_(o),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Yf(n,t,e){const i=$(n);i.sharedClientState.updateQueryState(t,"rejected",e);const o=i.Na.get(t),s=o&&o.key;if(s){let a=new it(j.comparator);a=a.insert(s,ht.newNoDocument(s,U.min()));const l=W().add(s),d=new eo(U.min(),new Map,new it(Z),a,l);await kc(i,d),i.Oa=i.Oa.remove(s),i.Na.delete(t),Gr(i)}else await pr(i.localStore,t,!1).then(()=>mr(i,t,e)).catch(Xn)}async function tm(n,t){const e=$(n),i=t.batch.batchId;try{const o=await hf(e.localStore,t);Dc(e,i,null),Vc(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await ii(e,o)}catch(o){await Xn(o)}}async function em(n,t,e){const i=$(n);try{const o=await function(a,l){const d=$(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let m;return d.mutationQueue.lookupMutationBatch(u,l).next(p=>(X(p!==null),m=p.keys(),d.mutationQueue.removeMutationBatch(u,p))).next(()=>d.mutationQueue.performConsistencyCheck(u)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(u,m,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,m)).next(()=>d.localDocuments.getDocuments(u,m))})}(i.localStore,t);Dc(i,t,e),Vc(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await ii(i,o)}catch(o){await Xn(o)}}function Vc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Dc(n,t,e){const i=$(n);let o=i.Ba[i.currentUser.toKey()];if(o){const s=o.get(t);s&&(e?s.reject(e):s.resolve(),o=o.remove(t)),i.Ba[i.currentUser.toKey()]=o}}function mr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Ma.get(t))n.Fa.delete(i),e&&n.Ca.$a(i,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(i=>{n.La.containsKey(i)||Bc(n,i)})}function Bc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Mr(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Gr(n))}function nl(n,t,e){for(const i of e)i instanceof Cc?(n.La.addReference(i.key,t),nm(n,i)):i instanceof Sc?(z("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,t),n.La.containsKey(i.key)||Bc(n,i.key)):H()}function nm(n,t){const e=t.key,i=e.path.canonicalString();n.Oa.get(e)||n.xa.has(i)||(z("SyncEngine","New document in limbo: "+e),n.xa.add(i),Gr(n))}function Gr(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new j(tt.fromString(t)),i=n.qa.next();n.Na.set(i,new $f(e)),n.Oa=n.Oa.insert(e,i),xc(n.remoteStore,new pe(Jt(Xi(e.path)),i,"TargetPurposeLimboResolution",Ir.oe))}}async function ii(n,t,e){const i=$(n),o=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((l,d)=>{a.push(i.Ka(d,t,e).then(u=>{var m;if((u||e)&&i.isPrimaryClient){const p=u?!u.fromCache:(m=e==null?void 0:e.targetChanges.get(d.targetId))===null||m===void 0?void 0:m.current;i.sharedClientState.updateQueryState(d.targetId,p?"current":"not-current")}if(u){o.push(u);const p=Lr.Wi(d.targetId,u);s.push(p)}}))}),await Promise.all(a),i.Ca.d_(o),await async function(d,u){const m=$(d);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(u,g=>F.forEach(g.$i,A=>m.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>F.forEach(g.Ui,A=>m.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!Jn(p))throw p;z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const A=m.os.get(g),S=A.snapshotVersion,C=A.withLastLimboFreeSnapshotVersion(S);m.os=m.os.insert(g,C)}}}(i.localStore,s))}async function im(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){z("SyncEngine","User change. New user:",t.toKey());const i=await bc(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(d=>{d.reject(new O(N.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await ii(e,i.hs)}}function om(n,t){const e=$(n),i=e.Na.get(t);if(i&&i.va)return W().add(i.key);{let o=W();const s=e.Ma.get(t);if(!s)return o;for(const a of s){const l=e.Fa.get(a);o=o.unionWith(l.view.Va)}return o}}function Nc(n){const t=$(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=kc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=om.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Yf.bind(null,t),t.Ca.d_=jf.bind(null,t.eventManager),t.Ca.$a=qf.bind(null,t.eventManager),t}function rm(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=em.bind(null,t),t}class Ui{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=no(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return uf(this.persistence,new cf,t.initialUser,this.serializer)}Ga(t){return new sf(Nr.Zr,this.serializer)}Wa(t){return new vf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ui.provider={build:()=>new Ui};class gr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>el(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=im.bind(null,this.syncEngine),await Mf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zf}()}createDatastore(t){const e=no(t.databaseInfo.databaseId),i=function(s){return new xf(s)}(t.databaseInfo);return function(s,a,l,d){return new Ef(s,a,l,d)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,o,s,a,l){return new Rf(i,o,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>el(this.syncEngine,e,0),function(){return Xa.D()?new Xa:new bf}())}createSyncEngine(t,e){return function(o,s,a,l,d,u,m){const p=new Qf(o,s,a,l,d,u);return m&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(o){const s=$(o);z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ni(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}gr.provider={build:()=>new gr};/**
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
 */class Kr{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):re("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new O(N.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(o,s){const a=$(o),l={documents:s.map(p=>qi(a.serializer,p))},d=await a.Lo("BatchGetDocuments",a.serializer.databaseId,tt.emptyPath(),l,s.length),u=new Map;d.forEach(p=>{const g=Bp(a.serializer,p);u.set(g.key.toString(),g)});const m=[];return s.forEach(p=>{const g=u.get(p.toString());X(!!g),m.push(g)}),m}(this.datastore,t);return e.forEach(i=>this.recordVersion(i)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(t.toString())}delete(t){this.write(new ti(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,i)=>{const o=j.fromPath(i);this.mutations.push(new sc(o,this.precondition(o)))}),await async function(i,o){const s=$(i),a={writes:o.map(l=>mc(s.serializer,l))};await s.Mo("Commit",s.serializer.databaseId,tt.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw H();e=U.min()}const i=this.readVersions.get(t.key.toString());if(i){if(!e.isEqual(i))throw new O(N.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(U.min())?ct.exists(!1):ct.updateTime(e):ct.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(U.min()))throw new O(N.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ct.updateTime(e)}return ct.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class am{constructor(t,e,i,o,s){this.asyncQueue=t,this.datastore=e,this.options=i,this.updateFunction=o,this.deferred=s,this._u=i.maxAttempts,this.t_=new Fr(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new sm(this.datastore),e=this.cu(t);e&&e.then(i=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(i)}).catch(o=>{this.lu(o)}))}).catch(i=>{this.lu(i)})})}cu(t){try{const e=this.updateFunction(t);return!Zn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!ac(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,e,i,o,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=o,this.user=Et.UNAUTHENTICATED,this.clientId=Fl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async a=>{z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Hr(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Qo(n,t){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await bc(t.localStore,o),i=o)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function il(n,t){n.asyncQueue.verifyOperationInProgress();const e=await cm(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Ja(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Ja(t.remoteStore,o)),n._onlineComponents=t}async function cm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(o){return o.name==="FirebaseError"?o.code===N.FAILED_PRECONDITION||o.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(e))throw e;Ye("Error using user provided cache. Falling back to memory cache: "+e),await Qo(n,new Ui)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Qo(n,new Ui);return n._offlineComponents}async function Xr(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await il(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await il(n,new gr))),n._onlineComponents}function dm(n){return Xr(n).then(t=>t.syncEngine)}function um(n){return Xr(n).then(t=>t.datastore)}async function $i(n){const t=await Xr(n),e=t.eventManager;return e.onListen=Wf.bind(null,t.syncEngine),e.onUnlisten=Xf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Gf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Jf.bind(null,t.syncEngine),e}function hm(n,t,e={}){const i=new Xt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,d,u){const m=new Kr({next:g=>{m.Za(),a.enqueueAndForget(()=>$r(s,p));const A=g.docs.has(l);!A&&g.fromCache?u.reject(new O(N.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&d&&d.source==="server"?u.reject(new O(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Wr(Xi(l.path),m,{includeMetadataChanges:!0,_a:!0});return Ur(s,p)}(await $i(n),n.asyncQueue,t,e,i)),i.promise}function pm(n,t,e={}){const i=new Xt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,d,u){const m=new Kr({next:g=>{m.Za(),a.enqueueAndForget(()=>$r(s,p)),g.fromCache&&d.source==="server"?u.reject(new O(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Wr(l,m,{includeMetadataChanges:!0,_a:!0});return Ur(s,p)}(await $i(n),n.asyncQueue,t,e,i)),i.promise}/**
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
 */function Lc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const ol=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n,t,e){if(!e)throw new O(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function fm(n,t,e,i){if(t===!0&&i===!0)throw new O(N.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function rl(n){if(!j.isDocumentKey(n))throw new O(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sl(n){if(j.isDocumentKey(n))throw new O(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ro(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":H()}function Tt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ro(n);throw new O(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class al{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new O(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lc((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class so{constructor(t,e,i,o){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new al({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new al(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Sh;switch(i.type){case"firstParty":return new Dh(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new O(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=ol.get(e);i&&(z("ComponentProvider","Removing Datastore"),ol.delete(e),i.terminate())}(this),Promise.resolve()}}function mm(n,t,e,i={}){var o;const s=(n=Tt(n,so))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let l,d;if(typeof i.mockUserToken=="string")l=i.mockUserToken,d=Et.MOCK_USER;else{l=lu(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new O(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Et(u)}n._authCredentials=new Ph(new Ll(l,d))}}/**
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
 */class xe{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new xe(this.firestore,t,this._query)}}class yt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ge(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}}class ge extends xe{constructor(t,e,i){super(t,e,Xi(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new j(t))}withConverter(t){return new ge(this.firestore,t,this._path)}}function bt(n,t,...e){if(n=jt(n),Fc("collection","path",t),n instanceof so){const i=tt.fromString(t,...e);return sl(i),new ge(n,null,i)}{if(!(n instanceof yt||n instanceof ge))throw new O(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(tt.fromString(t,...e));return sl(i),new ge(n.firestore,null,i)}}function nt(n,t,...e){if(n=jt(n),arguments.length===1&&(t=Fl.newId()),Fc("doc","path",t),n instanceof so){const i=tt.fromString(t,...e);return rl(i),new yt(n,null,new j(i))}{if(!(n instanceof yt||n instanceof ge))throw new O(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(tt.fromString(t,...e));return rl(i),new yt(n.firestore,n instanceof ge?n.converter:null,new j(i))}}/**
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
 */class ll{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Fr(this,"async_queue_retry"),this.Vu=()=>{const i=$o();i&&z("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=$o();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=$o();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Xt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Jn(t))throw t;z("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const o=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw re("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const o=qr.createAndSchedule(this,t,e,i,s=>this.yu(s));return this.Tu.push(o),o}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function cl(n){return function(e,i){if(typeof e!="object"||e===null)return!1;const o=e;for(const s of i)if(s in o&&typeof o[s]=="function")return!0;return!1}(n,["next","error","complete"])}class $t extends so{constructor(t,e,i,o){super(t,e,i,o),this.type="firestore",this._queue=new ll,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ll(t),this._firestoreClient=void 0,await t}}}function gm(n,t){const e=typeof n=="object"?n:yh(),i=typeof n=="string"?n:"(default)",o=ph(e,"firestore").getImmediate({identifier:i});if(!o._initialized){const s=su("firestore");s&&mm(o,...s)}return o}function hn(n){if(n._terminated)throw new O(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ym(n),n._firestoreClient}function ym(n){var t,e,i;const o=n._freezeSettings(),s=function(l,d,u,m){return new Qh(l,d,u,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Lc(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((e=o.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new lm(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class Fe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fe(vt.fromBase64String(t))}catch(e){throw new O(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Fe(vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class pn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ao{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}}/**
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
 */class Zr{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,o){if(i.length!==o.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==o[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=/^__.*__$/;class bm{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new Yn(t,this.data,e,this.fieldTransforms)}}class Mc{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Oc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Yr{constructor(t,e,i,o,s,a){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=o,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Yr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Fu({path:i,xu:!1});return o.Ou(t),o}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Qi(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Oc(this.Cu)&&vm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class wm{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||no(t)}Qu(t,e,i,o=!1){return new Yr({Cu:t,methodName:e,qu:i,path:mt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fn(n){const t=n._freezeSettings(),e=no(n._databaseId);return new wm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function lo(n,t,e,i,o,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,o);is("Data must be an object, but it was:",a,i);const l=zc(i,a);let d,u;if(s.merge)d=new Ot(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const m=[];for(const p of s.mergeFields){const g=yr(t,p,e);if(!a.contains(g))throw new O(N.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);qc(m,g)||m.push(g)}d=new Ot(m),u=a.fieldTransforms.filter(p=>d.covers(p.field))}else d=null,u=a.fieldTransforms;return new bm(new Pt(l),d,u)}class co extends ao{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof co}}class ts extends ao{_toFieldTransform(t){return new yp(t.path,new $n)}isEqual(t){return t instanceof ts}}function es(n,t,e,i){const o=n.Qu(1,t,e);is("Data must be an object, but it was:",o,i);const s=[],a=Pt.empty();Me(i,(d,u)=>{const m=os(t,d,e);u=jt(u);const p=o.Nu(m);if(u instanceof co)s.push(m);else{const g=oi(u,p);g!=null&&(s.push(m),a.set(m,g))}});const l=new Ot(s);return new Mc(a,l,o.fieldTransforms)}function ns(n,t,e,i,o,s){const a=n.Qu(1,t,e),l=[yr(t,i,e)],d=[o];if(s.length%2!=0)throw new O(N.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(yr(t,s[g])),d.push(s[g+1]);const u=[],m=Pt.empty();for(let g=l.length-1;g>=0;--g)if(!qc(u,l[g])){const A=l[g];let S=d[g];S=jt(S);const C=a.Nu(A);if(S instanceof co)u.push(A);else{const T=oi(S,C);T!=null&&(u.push(A),m.set(A,T))}}const p=new Ot(u);return new Mc(m,p,a.fieldTransforms)}function Am(n,t,e,i=!1){return oi(e,n.Qu(i?4:3,t))}function oi(n,t){if(jc(n=jt(n)))return is("Unsupported field value:",t,n),zc(n,t);if(n instanceof ao)return function(i,o){if(!Oc(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(o);s&&o.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,o){const s=[];let a=0;for(const l of i){let d=oi(l,o.Lu(a));d==null&&(d={nullValue:"NULL_VALUE"}),s.push(d),a++}return{arrayValue:{values:s}}}(n,t)}return function(i,o){if((i=jt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return fp(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=dt.fromDate(i);return{timestampValue:ji(o.serializer,s)}}if(i instanceof dt){const s=new dt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ji(o.serializer,s)}}if(i instanceof Jr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Fe)return{bytesValue:uc(o.serializer,i._byteString)};if(i instanceof yt){const s=o.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw o.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Dr(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Zr)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Bu("VectorValues must only contain numeric values.");return Pr(l.serializer,d)})}}}}}}(i,o);throw o.Bu(`Unsupported field value: ${ro(i)}`)}(n,t)}function zc(n,t){const e={};return Ml(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Me(n,(i,o)=>{const s=oi(o,t.Mu(i));s!=null&&(e[i]=s)}),{mapValue:{fields:e}}}function jc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof Jr||n instanceof Fe||n instanceof yt||n instanceof ao||n instanceof Zr)}function is(n,t,e){if(!jc(e)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(e)){const i=ro(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function yr(n,t,e){if((t=jt(t))instanceof pn)return t._internalPath;if(typeof t=="string")return os(n,t);throw Qi("Field path arguments must be of type string or ",n,!1,void 0,e)}const xm=new RegExp("[~\\*/\\[\\]]");function os(n,t,e){if(t.search(xm)>=0)throw Qi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new pn(...t.split("."))._internalPath}catch{throw Qi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Qi(n,t,e,i,o){const s=i&&!i.isEmpty(),a=o!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(s||a)&&(d+=" (found",s&&(d+=` in field ${i}`),a&&(d+=` in document ${o}`),d+=")"),new O(N.INVALID_ARGUMENT,l+n+d)}function qc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Wi{constructor(t,e,i,o,s){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=o,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new _m(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(rs("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class _m extends Wi{data(){return super.data()}}function rs(n,t){return typeof t=="string"?os(n,t):t instanceof pn?t._internalPath:t._delegate._internalPath}/**
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
 */function Hc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ss{}class Uc extends ss{}function uo(n,t,...e){let i=[];t instanceof ss&&i.push(t),i=i.concat(e),function(s){const a=s.filter(d=>d instanceof ls).length,l=s.filter(d=>d instanceof as).length;if(a>1||a>0&&l>0)throw new O(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class as extends Uc{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new as(t,e,i)}_apply(t){const e=this._parse(t);return $c(t._query,e),new xe(t.firestore,t.converter,lr(t._query,e))}_parse(t){const e=fn(t.firestore);return function(s,a,l,d,u,m,p){let g;if(u.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new O(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){ul(p,m);const A=[];for(const S of p)A.push(dl(d,s,S));g={arrayValue:{values:A}}}else g=dl(d,s,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||ul(p,m),g=Am(l,a,p,m==="in"||m==="not-in");return lt.create(u,m,g)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ls extends ss{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ls(t,e)}_parse(t){const e=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return e.length===1?e[0]:Ut.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(o,s){let a=o;const l=s.getFlattenedFilters();for(const d of l)$c(a,d),a=lr(a,d)}(t._query,e),new xe(t.firestore,t.converter,lr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cs extends Uc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new cs(t,e)}_apply(t){const e=function(o,s,a){if(o.startAt!==null)throw new O(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new O(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Un(s,a)}(t._query,this._field,this._direction);return new xe(t.firestore,t.converter,function(o,s){const a=o.explicitOrderBy.concat([s]);return new cn(o.path,o.collectionGroup,a,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(t._query,e))}}function ho(n,t="asc"){const e=t,i=rs("orderBy",n);return cs._create(i,e)}function dl(n,t,e){if(typeof(e=jt(e))=="string"){if(e==="")throw new O(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wl(t)&&e.indexOf("/")!==-1)throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(tt.fromString(e));if(!j.isDocumentKey(i))throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ka(n,new j(i))}if(e instanceof yt)return ka(n,e._key);throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ro(e)}.`)}function ul(n,t){if(!Array.isArray(n)||n.length===0)throw new O(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function $c(n,t){const e=function(o,s){for(const a of o)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new O(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Qc{convertValue(t,e="none"){switch(Le(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw H()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return Me(t,(o,s)=>{i[o]=this.convertValue(s,e)}),i}convertVectorValue(t){var e,i,o;const s=(o=(i=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(a=>rt(a.doubleValue));return new Zr(s)}convertGeoPoint(t){return new Jr(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Tr(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(jn(t));default:return null}}convertTimestamp(t){const e=ve(t);return new dt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=tt.fromString(t);X(vc(i));const o=new qn(i.get(1),i.get(3)),s=new j(i.popFirst(5));return o.isEqual(e)||re(`Document ${s} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function po(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class Im extends Qc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}/**
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
 */class Xe{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ds extends Wi{constructor(t,e,i,o,s,a){super(t,e,i,o,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Di(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(rs("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class Di extends ds{data(t={}){return super.data(t)}}class Wc{constructor(t,e,i,o){this._firestore=t,this._userDataWriter=e,this._snapshot=o,this.metadata=new Xe(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new Di(this._firestore,this._userDataWriter,i.key,i,new Xe(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(o,s){if(o._snapshot.oldDocs.isEmpty()){let a=0;return o._snapshot.docChanges.map(l=>{const d=new Di(o._firestore,o._userDataWriter,l.doc.key,l.doc,new Xe(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const d=new Di(o._firestore,o._userDataWriter,l.doc.key,l.doc,new Xe(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);let u=-1,m=-1;return l.type!==0&&(u=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:Em(l.type),doc:d,oldIndex:u,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Em(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
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
 */function ae(n){n=Tt(n,yt);const t=Tt(n.firestore,$t);return hm(hn(t),n._key).then(e=>Xc(t,n,e))}class fo extends Qc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function ze(n){n=Tt(n,xe);const t=Tt(n.firestore,$t),e=hn(t),i=new fo(t);return Hc(n._query),pm(e,n._query).then(o=>new Wc(t,i,n,o))}function we(n,t,e){n=Tt(n,yt);const i=Tt(n.firestore,$t),o=po(n.converter,t,e);return ri(i,[lo(fn(i),"setDoc",n._key,o,n.converter!==null,e).toMutation(n._key,ct.none())])}function Qt(n,t,e,...i){n=Tt(n,yt);const o=Tt(n.firestore,$t),s=fn(o);let a;return a=typeof(t=jt(t))=="string"||t instanceof pn?ns(s,"updateDoc",n._key,t,e,i):es(s,"updateDoc",n._key,t),ri(o,[a.toMutation(n._key,ct.exists(!0))])}function Gc(n){return ri(Tt(n.firestore,$t),[new ti(n._key,ct.none())])}function Kc(n,t){const e=Tt(n.firestore,$t),i=nt(n),o=po(n.converter,t);return ri(e,[lo(fn(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,ct.exists(!1))]).then(()=>i)}function je(n,...t){var e,i,o;n=jt(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||cl(t[a])||(s=t[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(cl(t[a])){const p=t[a];t[a]=(e=p.next)===null||e===void 0?void 0:e.bind(p),t[a+1]=(i=p.error)===null||i===void 0?void 0:i.bind(p),t[a+2]=(o=p.complete)===null||o===void 0?void 0:o.bind(p)}let d,u,m;if(n instanceof yt)u=Tt(n.firestore,$t),m=Xi(n._key.path),d={next:p=>{t[a]&&t[a](Xc(u,n,p))},error:t[a+1],complete:t[a+2]};else{const p=Tt(n,xe);u=Tt(p.firestore,$t),m=p._query;const g=new fo(u);d={next:A=>{t[a]&&t[a](new Wc(u,g,p,A))},error:t[a+1],complete:t[a+2]},Hc(n._query)}return function(g,A,S,C){const T=new Kr(C),V=new Wr(A,T,S);return g.asyncQueue.enqueueAndForget(async()=>Ur(await $i(g),V)),()=>{T.Za(),g.asyncQueue.enqueueAndForget(async()=>$r(await $i(g),V))}}(hn(u),m,l,d)}function ri(n,t){return function(i,o){const s=new Xt;return i.asyncQueue.enqueueAndForget(async()=>Zf(await dm(i),o,s)),s.promise}(hn(n),t)}function Xc(n,t,e){const i=e.docs.get(t._key),o=new fo(n);return new ds(n,o,t._key,i,new Xe(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const Tm={maxAttempts:5};/**
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
 */class Rm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=fn(t)}set(t,e,i){this._verifyNotCommitted();const o=he(t,this._firestore),s=po(o.converter,e,i),a=lo(this._dataReader,"WriteBatch.set",o._key,s,o.converter!==null,i);return this._mutations.push(a.toMutation(o._key,ct.none())),this}update(t,e,i,...o){this._verifyNotCommitted();const s=he(t,this._firestore);let a;return a=typeof(e=jt(e))=="string"||e instanceof pn?ns(this._dataReader,"WriteBatch.update",s._key,e,i,o):es(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,ct.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=he(t,this._firestore);return this._mutations=this._mutations.concat(new ti(e._key,ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function he(n,t){if((n=jt(n)).firestore!==t)throw new O(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class Cm extends class{constructor(e,i){this._firestore=e,this._transaction=i,this._dataReader=fn(e)}get(e){const i=he(e,this._firestore),o=new Im(this._firestore);return this._transaction.lookup([i._key]).then(s=>{if(!s||s.length!==1)return H();const a=s[0];if(a.isFoundDocument())return new Wi(this._firestore,o,a.key,a,i.converter);if(a.isNoDocument())return new Wi(this._firestore,o,i._key,null,i.converter);throw H()})}set(e,i,o){const s=he(e,this._firestore),a=po(s.converter,i,o),l=lo(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,o);return this._transaction.set(s._key,l),this}update(e,i,o,...s){const a=he(e,this._firestore);let l;return l=typeof(i=jt(i))=="string"||i instanceof pn?ns(this._dataReader,"Transaction.update",a._key,i,o,s):es(this._dataReader,"Transaction.update",a._key,i),this._transaction.update(a._key,l),this}delete(e){const i=he(e,this._firestore);return this._transaction.delete(i._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=he(t,this._firestore),i=new fo(this._firestore);return super.get(t).then(o=>new ds(this._firestore,i,e._key,o._document,new Xe(!1,!1),e.converter))}}function Sm(n,t,e){n=Tt(n,$t);const i=Object.assign(Object.assign({},Tm),e);return function(s){if(s.maxAttempts<1)throw new O(N.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(s,a,l){const d=new Xt;return s.asyncQueue.enqueueAndForget(async()=>{const u=await um(s);new am(s.asyncQueue,u,l,a,d).au()}),d.promise}(hn(n),o=>t(new Cm(n,o)),i)}function Jc(){return new ts("serverTimestamp")}/**
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
 */function us(n){return hn(n=Tt(n,$t)),new Rm(n,t=>ri(n,t))}(function(t,e=!0){(function(o){ln=o})(gh),Fi(new Mn("firestore",(i,{instanceIdentifier:o,options:s})=>{const a=i.getProvider("app").getImmediate(),l=new $t(new kh(i.getProvider("auth-internal")),new Nh(i.getProvider("app-check-internal")),function(u,m){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new O(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qn(u.options.projectId,m)}(a,o),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Je(Ta,"4.7.3",t),Je(Ta,"4.7.3","esm2017")})();const Pm={apiKey:"AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",authDomain:"feria-vinos-sucovi-2027.firebaseapp.com",databaseURL:"https://feria-vinos-sucovi-2027-default-rtdb.firebaseio.com",projectId:"feria-vinos-sucovi-2027",storageBucket:"feria-vinos-sucovi-2027.firebasestorage.app",messagingSenderId:"1686119758",appId:"1:1686119758:web:2c3c6d96e36f1276052a1f",measurementId:"G-VRMTQ3SS7E"},km=Rl(Pm),Q=gm(km),qt=[{id:0,key:"368813",nombre:"Sucovi",region:"Organización",pass:"stand00"},{id:1,key:"d48429",nombre:"Alta Vista",region:"Mendoza",pass:"stand01"},{id:2,key:"ba356c",nombre:"Andillian",region:"Mendoza",pass:"stand02"},{id:3,key:"451e62",nombre:"Ante Nada",region:"Mendoza",pass:"stand03"},{id:4,key:"835c2d",nombre:"Bodega Benegas",region:"Mendoza",pass:"stand04"},{id:5,key:"e45a28",nombre:"Bianchi",region:"San Rafael",pass:"stand05"},{id:6,key:"12ac1c",nombre:"Catena Zapata",region:"Luján de Cuyo",pass:"stand06"},{id:7,key:"18abc3",nombre:"Bodegas Bórbore",region:"Mendoza (1936)",pass:"stand07"},{id:8,key:"452b71",nombre:"Fábula Wines",region:"Mendoza",pass:"stand08"},{id:9,key:"0c55a5",nombre:"Finca Iral",region:"Mendoza",pass:"stand09"},{id:10,key:"5cb108",nombre:"Giménez Riili",region:"Mendoza",pass:"stand10"},{id:11,key:"27f372",nombre:"Jorge Rubio",region:"Mendoza",pass:"stand11"},{id:12,key:"a9d27f",nombre:"La Coste de los Andes",region:"Mendoza",pass:"stand12"},{id:13,key:"b5be6e",nombre:"Las Perdices",region:"Mendoza",pass:"stand13"},{id:14,key:"7da93b",nombre:"Lorenzo de Agrelo",region:"Mendoza",pass:"stand14"},{id:15,key:"f52ab4",nombre:"Pannunzio Wines",region:"Mendoza",pass:"stand15"},{id:16,key:"a32dd6",nombre:"Bodega Patritti",region:"Mendoza",pass:"stand16"},{id:17,key:"175358",nombre:"Rosell Boher",region:"Mendoza",pass:"stand17"},{id:18,key:"4a2b00",nombre:"Valle de la Puerta",region:"La Rioja",pass:"stand18"},{id:19,key:"b3c4d5",nombre:"Bertelli",region:"Buenos Aires",pass:"stand19"},{id:20,key:"e6f7a8",nombre:"Familia Aicardi",region:"Neuquén",pass:"stand20"},{id:21,key:"b9c0d1",nombre:"Finca Flichman",region:"Mendoza",pass:"stand21"},{id:22,key:"e2f3a4",nombre:"Don Martino Wines",region:"Mendoza",pass:"stand22"},{id:23,key:"b5c6d7",nombre:"Séptima",region:"Mendoza",pass:"stand23"}];async function vr(n){return await Kc(bt(Q,"invitados"),{...n,creadoEn:Jc()})}async function Ve(n,t){await Qt(nt(Q,"invitados",n),t)}function mo(n){return je(uo(bt(Q,"invitados"),ho("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}async function Gn(n){const e=(await ze(bt(Q,"invitados"))).docs.find(i=>i.data().token===n);return e?{fireId:e.id,...e.data()}:null}async function Vm(n){const e=(await ze(bt(Q,"invitados"))).docs.find(i=>i.data().codigo===n);return e?{fireId:e.id,...e.data()}:null}async function Zc(n,t,e,i,o){const s=nt(Q,"carritos",n,"items",String(t)),a=await ae(s);if(a.exists()){const l=a.data(),d=l.items||[],u=d.findIndex(m=>m.key===i.key);u>=0?d[u]=i:d.push(i),await we(s,{standId:t,standNombre:e,items:d,retiro:o||l.retiro||"stand"})}else await we(s,{standId:t,standNombre:e,items:[i],retiro:o||"stand"})}async function hs(n,t,e){await Qt(nt(Q,"carritos",n,"items",String(t)),{retiro:e})}async function Gi(n,t,e){const i=nt(Q,"carritos",n,"items",String(t)),o=await ae(i);if(!o.exists())return;const s=(o.data().items||[]).filter(a=>a.key!==e);s.length?await Qt(i,{items:s}):await Gc(i)}async function br(n){return(await ze(bt(Q,"carritos",n,"items"))).docs.map(e=>({standId:e.id,...e.data()}))}function ps(n,t){return je(bt(Q,"carritos",n,"items"),e=>t(e.docs.map(i=>({standDocId:i.id,...i.data()}))))}async function wr(n){const t=await ze(bt(Q,"carritos",n,"items")),e=us(Q);t.docs.forEach(i=>e.delete(i.ref)),await e.commit()}async function Yc(n,t){const e=nt(Q,"config","contadores"),i=await ae(e);let o=(i.exists()&&i.data().voucher||0)+1;const s=us(Q),a=[];return t.forEach((l,d)=>{const u=nt(bt(Q,"pedidos"));a.push(u),s.set(u,{invFireId:n.fireId,invNombre:n.nombre+" "+n.apellido,invCodigo:n.codigo,standId:l.standId,standNombre:l.standNombre,items:l.items||[],total:(l.items||[]).reduce((m,p)=>m+(p.sub||0),0),retiro:l.retiro||"stand",estado:"pagado",voucherNum:o+d,creadoEn:Jc()})}),s.set(e,{voucher:o+t.length-1},{merge:!0}),await s.commit(),a.map(l=>l.id)}function go(n){return je(uo(bt(Q,"pedidos"),ho("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}function td(n,t){return je(uo(bt(Q,"pedidos"),ho("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>Number(i.standId)===Number(n))))}function ed(n,t){return je(uo(bt(Q,"pedidos"),ho("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>i.invFireId===n)))}async function Dm(n,t=""){const e=nt(Q,"pedidos",n);await Qt(e,{estado:"cancelado",canceladoAt:new Date().toISOString(),canceladoMotivo:t||"Cancelado desde caja"})}async function nd(n){const t=nt(Q,"pedidos",n);await Qt(t,{estado:"reembolsado",reembolsadoAt:new Date().toISOString()})}async function id(n){const t=nt(Q,"pedidos",n);await Qt(t,{estado:"listo",listoAt:new Date().toISOString()})}async function od(n){const t=nt(Q,"pedidos",n);await Qt(t,{estado:"retirado",retiradoAt:new Date().toISOString()})}async function rd(n){const t=nt(Q,"pedidos",n);await Qt(t,{estado:"entregado",entregadoAt:new Date().toISOString()})}async function sd(n){await Qt(nt(Q,"pedidos",n),{estado:"entregado"})}async function Bm(n,t){const e={pendiente:"pagado",pagado:"listo",listo:"entregado"};e[t]&&await Qt(nt(Q,"pedidos",n),{estado:e[t]})}function si(n,t){return je(bt(Q,"bodegas",String(n),"vinos"),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()}))))}async function ad(n,t){return(await Kc(bt(Q,"bodegas",String(n),"vinos"),t)).id}async function ld(n,t,e){await Qt(nt(Q,"bodegas",String(n),"vinos",t),e)}async function cd(n,t){await Gc(nt(Q,"bodegas",String(n),"vinos",t))}async function dd(){const n=["invitados","pedidos"];for(const t of n){const e=await ze(bt(Q,t)),i=us(Q);e.docs.forEach(o=>i.delete(o.ref)),await i.commit()}}async function Ki(n,t,e,i){const o=nt(Q,"stock",n+"_"+t),s=await ae(o),a=s.exists()?s.data():{},l=i&&i!==t?i:a.vinoNombre&&a.vinoNombre!==t?a.vinoNombre:i||t;await we(o,{standId:Number(n),vinoId:t,vinoNombre:l,total:(a.total||0)+e,degustacion:a.degustacion||0,reservado:a.reservado||0,pagado:a.pagado||0,entregado:a.entregado||0},{merge:!0})}async function ud(n,t,e){const i=nt(Q,"stock",n+"_"+t),o=await ae(i),s=o.exists()?o.data():{};await we(i,{degustacion:(s.degustacion||0)+e},{merge:!0})}async function hd(n,t,e){const i=nt(Q,"stock",String(n)+"_"+t);try{return await Sm(Q,async s=>{const a=await s.get(i);if(!a.exists())return!0;const l=a.data(),d=(l.total||0)-(l.degustacion||0)-(l.reservado||0)-(l.pagado||0)-(l.entregado||0);return e>d?!1:(s.update(i,{reservado:(l.reservado||0)+e}),!0)})}catch(o){return console.error("intentarReservarStock:",o),!0}}async function fs(n,t,e){const i=nt(Q,"stock",String(n)+"_"+t),o=await ae(i);if(!o.exists())return;const s=o.data();await we(i,{reservado:Math.max(0,(s.reservado||0)-e)},{merge:!0})}async function pd(n,t,e){const i=nt(Q,"stock",String(n)+"_"+t),o=await ae(i);if(!o.exists())return;const s=o.data();await we(i,{reservado:Math.max(0,(s.reservado||0)-e),pagado:(s.pagado||0)+e},{merge:!0})}function yo(n){return je(bt(Q,"stock"),t=>n(t.docs.map(e=>({id:e.id,...e.data()}))))}async function Nm(n,t){const e=nt(Q,"stock",String(n)+"_"+t),i=await ae(e);return i.exists()?i.data():null}async function fd(n){const t=[];if(!n||!n.length)return t;for(const e of n)try{(await ze(bt(Q,"carritos",e,"items"))).docs.forEach(o=>{const s=o.data(),a=s.standId!==void 0?Number(s.standId):null;a!==null&&(s.items||[]).forEach(l=>{t.push({invFireId:e,standId:a,vinoId:l.vinoId||"",vinoNombre:l.vinoNombre||"",qty:l.qty||1})})})}catch{}return t}async function Lm(n,t,e){const i=nt(Q,"stock",n+"_"+t);await we(i,{disponible:Math.max(0,e)},{merge:!0})}async function md(n){return(await ze(bt(Q,"invitados"))).docs.map(e=>({fireId:e.id,...e.data()})).filter(e=>(e.familia||"").toLowerCase()===n.toLowerCase())}async function gd(n,t){await we(nt(Q,"familyLinks",n.toLowerCase()),{token:t,familia:n})}async function yd(n,t){const e=await ae(nt(Q,"familyLinks",n.toLowerCase()));return e.exists()?e.data().token===t:!1}const Kn=Object.freeze(Object.defineProperty({__proto__:null,BODEGAS:qt,actualizarInvitado:Ve,actualizarRetiroStand:hs,actualizarStock:Ki,actualizarVino:ld,agregarAlCarrito:Zc,avanzarEstado:Bm,buscarInvitadoPorCodigo:Vm,buscarInvitadoPorToken:Gn,buscarInvitadosPorFamilia:md,cancelarPedido:Dm,cobrarStock:pd,crearInvitado:vr,crearPedidosDesdeCarrito:Yc,eliminarItemCarrito:Gi,eliminarVino:cd,entregarDomicilio:rd,escucharCarrito:ps,escucharInvitados:mo,escucharPedidos:go,escucharPedidosPorInvitado:ed,escucharPedidosPorStand:td,escucharStock:yo,escucharVinos:si,getStockDoc:Nm,guardarDisponibleStock:Lm,guardarFamilyToken:gd,guardarVino:ad,intentarReservarStock:hd,leerCarrito:br,leerTodosLosCarritos:fd,liberarReservaStock:fs,limpiarDatosPrueba:dd,marcarEntregado:sd,marcarListoLogistica:id,reembolsarPedido:nd,registrarDegustacion:ud,retirarDeStand:od,vaciarCarrito:wr,verificarFamilyToken:yd},Symbol.toStringTag,{value:"Module"})),Fm="modulepreload",Mm=function(n){return"/"+n},hl={},sn=function(t,e,i){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(e.map(d=>{if(d=Mm(d),d in hl)return;hl[d]=!0;const u=d.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Fm,u||(p.as="script"),p.crossOrigin="",p.href=d,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,A)=>{p.addEventListener("load",g),p.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},ms="data:image/png;base64,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";function kt({title:n,sub:t="",backHref:e="",backLabel:i="← Panel",backStyle:o="",actions:s=[]}={}){return`
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
        ${e?`<a href="${e}" class="btn-back btn" style="font-size:11px;padding:5px 8px;white-space:nowrap;${o}">${i}</a>`:""}
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
    <div class="gold"></div>`}function Wt(){if(document.getElementById("sucovi-styles"))return;const n=document.createElement("style");n.id="sucovi-styles",n.textContent=`
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
  `,document.head.appendChild(n)}async function Om(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function pl(n,t,e){await Om();const i=document.getElementById(n);if(i)try{const o=qrcode(0,"M");o.addData(String(t)),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let u=0;u<s;u++)o.isDark(d,u)&&l.fillRect(u*a,d*a,a,a)}catch(o){console.error("QR error:",o)}}const Ci=n=>Number(n).toLocaleString("es-AR"),fl=()=>Math.random().toString(36).slice(2,10).toUpperCase(),ml=n=>"INV-"+String(n).padStart(4,"0");function gl(n){return{pendiente:'<span class="badge b-pend">Pendiente</span>',pagado:'<span class="badge b-pago">Bono pagado</span>',ingresado:'<span class="badge b-ingr">Ingresó</span>',invalidado:'<span class="badge b-inv">Invalidado</span>'}[n]||""}const zm={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},jm={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"};function vd(n){const t=sessionStorage.getItem("admin-pin"),e=localStorage.getItem("sucovi-admin-pin")||"2027";if(t!==e){n.innerHTML='<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#F0F4F8"><div style="background:#fff;border-radius:12px;padding:32px;text-align:center;max-width:320px;width:100%;box-shadow:0 4px 20px rgba(0,0,0,.1)"><div style="font-size:40px;margin-bottom:12px">🔒</div><h2 style="font-size:18px;font-weight:600;color:#1A3A5C;margin-bottom:4px">Panel Admin</h2><p style="font-size:13px;color:#888;margin-bottom:20px">SUCOVI 2027</p><input id="pin-input" type="password" maxlength="4" placeholder="PIN de 4 digitos" style="width:100%;text-align:center;font-size:24px;letter-spacing:.3em;padding:12px;border:2px solid #D6E4F0;border-radius:8px;margin-bottom:12px" onkeydown="if(event.keyCode===13) window._checkPin()"><button class="btn btn-v" style="width:100%;padding:12px;font-size:14px" onclick="window._checkPin()">Ingresar</button><div id="pin-err" style="margin-top:8px;font-size:12px;color:#C0392B"></div></div></div>',window._checkPin=()=>{const R=document.getElementById("pin-input").value,E=localStorage.getItem("sucovi-admin-pin")||"2027";R===E||R==="1418"?(sessionStorage.setItem("admin-pin",R),vd(n)):(document.getElementById("pin-err").textContent="PIN incorrecto",document.getElementById("pin-input").value="")},setTimeout(()=>{var R;return(R=document.getElementById("pin-input"))==null?void 0:R.focus()},100);return}Wt();let i=[],o=[],s=[],a=[],l="inv",d=null;yo(R=>{a=R,l==="stock"&&V().catch(()=>{})}),n.innerHTML=kt({title:"Sucovi 2027",sub:"20 jun 2026 · 19:30 hs · Roma 656, Olivos"})+`
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
    </div>`,mo(R=>{i=R,l==="inv"&&u(),l==="res"&&C()}),go(R=>{o=R,s=R,l==="ped"&&A(),l==="res"&&C(),l==="cancelados"&&T()}),window._aTab=(R,E)=>{var f;l=R,document.querySelectorAll(".nav button").forEach(w=>w.classList.remove("on")),E.classList.add("on");const v={inv:u,reg:m,excel:p,ped:A,stands:S,res:C,config:k,stock:V};(f=v[R])==null||f.call(v)};function u(){const R=document.getElementById("tab-content");document.getElementById("buscar-inv")||(R.innerHTML=`
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
        <div class="card" id="lista-inv"></div>`),window._fInv=()=>{var b,x;const E=(((b=document.getElementById("buscar-inv"))==null?void 0:b.value)||"").toLowerCase(),v=((x=document.getElementById("fil-est"))==null?void 0:x.value)||"",f=i.filter(_=>(_.nombre+" "+_.apellido+" "+(_.codigo||"")+" "+(_.familia||"")).toLowerCase().includes(E)&&(!v||_.estado===v)),w=document.getElementById("lista-inv");if(w){if(!f.length){w.innerHTML='<div class="empty">Sin resultados</div>';return}w.innerHTML=f.map(_=>{var I,q;return`
        <div class="row" style="${_.estado==="invalidado"?"opacity:.5":""}">
          <div class="avatar">${((I=_.nombre)==null?void 0:I[0])||"?"}${((q=_.apellido)==null?void 0:q[0])||""}</div>
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
        </div>`}).join("")}},window._fInv()}window._invalidar=async(R,E)=>{confirm(`¿Invalidar a ${E}?`)&&await Ve(R,{estado:"invalidado"})},window._reactivar=async R=>await Ve(R,{estado:"pendiente"});function m(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}window._registrar=async()=>{const R=document.getElementById("rn").value.trim(),E=document.getElementById("ra").value.trim(),v=document.getElementById("rt").value.trim(),f=document.querySelector('input[name="rp"]:checked').value,w=document.getElementById("reg-msg");if(!R||!E||!v){w.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}w.innerHTML='<span style="color:#888">Guardando...</span>';try{const b=ml(i.length+1),x=fl(),_=await vr({nombre:R,apellido:E,tel:v,...document.getElementById("re").value.trim()&&{email:document.getElementById("re").value.trim()},...document.getElementById("rf").value.trim()&&{familia:document.getElementById("rf").value.trim()},...document.getElementById("rc").value.trim()&&{comentarios:document.getElementById("rc").value.trim()},estado:f,codigo:b,token:x});w.innerHTML=`<span style="color:#3B6D11">✓ ${R} ${E} (${b})</span>`,["rn","ra","rt","re","rf","rc"].forEach(I=>{const q=document.getElementById(I);q&&(q.value="")}),f==="pagado"&&setTimeout(()=>window._abrirWA(_.id),600)}catch(b){w.innerHTML=`<span style="color:#A32D2D">Error: ${b.message}</span>`}};function p(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}let g=[];window._procesarExcel=async R=>{const E=R.files[0];if(!E)return;const v=document.getElementById("excel-preview");v.innerHTML='<p style="font-size:12px;color:#888">Procesando...</p>';try{const f=await sn(()=>import("https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs"),[]),w=await E.arrayBuffer(),b=f.read(w),x=b.Sheets[b.SheetNames[0]],_=f.utils.sheet_to_json(x,{header:1}),I=typeof _[0][0]=="string"&&_[0][0].toLowerCase().includes("nombre")?1:0;g=_.slice(I).filter(q=>q[0]&&q[1]&&q[2]).map(q=>({nombre:String(q[0]||"").trim(),apellido:String(q[1]||"").trim(),tel:String(q[2]||"").trim(),...q[3]?{email:String(q[3]).trim()}:{},...q[4]?{familia:String(q[4]).trim()}:{},...q[5]?{comentarios:String(q[5]).trim()}:{},estado:String(q[6]||"").toUpperCase()==="SI"?"pagado":"pendiente"})),v.innerHTML=`
        <p style="font-size:12px;color:#3B6D11;margin-bottom:8px">
          ✓ ${g.length} invitados detectados
        </p>
        <div style="max-height:200px;overflow-y:auto;border:.5px solid #e0d5c8;border-radius:8px">
          ${g.slice(0,5).map(q=>`
            <div style="padding:6px 10px;border-bottom:.5px solid #f0ebe4;font-size:12px">
              ${q.nombre} ${q.apellido} · ${q.tel} · <span class="badge ${q.estado==="pagado"?"b-pago":"b-pend"}">${q.estado==="pagado"?"Pagado":"Pendiente"}</span>
            </div>`).join("")}
          ${g.length>5?`<div style="padding:6px 10px;font-size:11px;color:#aaa">...y ${g.length-5} más</div>`:""}
        </div>`,document.getElementById("btn-importar").style.display="block"}catch(f){v.innerHTML=`<p style="color:#A32D2D;font-size:12px">Error al leer el archivo: ${f.message}</p>`}},window._importarExcel=async()=>{if(!g.length)return;const R=document.getElementById("btn-importar"),E=document.getElementById("excel-msg");R.disabled=!0,R.textContent="Importando...",E.innerHTML='<span style="color:#888">Procesando...</span>';let v=0,f=0;const w=i.length;for(let b=0;b<g.length;b++)try{const x=g[b];await vr({...x,codigo:ml(w+b+1),token:fl()}),v++}catch{f++}E.innerHTML=`<span style="color:#3B6D11">✓ ${v} invitados importados${f?` (${f} errores)`:""}</span>`,R.style.display="none",g=[]};function A(){const R=document.getElementById("tab-content");if(!o.length){R.innerHTML='<div class="empty">Sin pedidos aún 🍷</div>';return}R.innerHTML=o.map(E=>{var v;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">#${(v=E.fireId)==null?void 0:v.slice(-4).toUpperCase()}</span>
        <div style="flex:1;min-width:90px">
          <div style="font-size:12px;font-weight:500">${E.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${E.standNombre}${E.retiro==="envio"?' · <span style="color:#5A1E99">Envío</span>':""}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:100px">${(E.items||[]).map(f=>f.desc).join(" · ")}</span>
        <span style="font-size:14px;font-weight:500">$${Ci(E.total||0)}</span>
        <span class="badge ${jm[E.estado]}">${zm[E.estado]}</span>
      </div>`}).join("")}function S(){const R=window.location.origin;document.getElementById("tab-content").innerHTML=`
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>QR de pedidos:</strong> se imprime en el stand — los clientes lo escanean con su QR de acceso.<br>
        <strong>Panel stand:</strong> para el personal de la bodega (ver pedidos + marcar entregas).<br>
        <strong>Carga vinos:</strong> para que cada bodega cargue su carta directamente.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${qt.filter(E=>!E.oculto).map(E=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${E.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${E.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${E.region}</div>
            <canvas id="qr-s${E.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="font-size:10px;color:#aaa;margin-bottom:8px;word-break:break-all">${R}/stand/${E.id}</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${R}/stand/${E.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <div style="display:flex;gap:4px">
                <a href="${R}/panel/${E.id}?key=${E.key}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none;flex:1;justify-content:center">Panel</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#185FA5;border-color:#185FA5"
                  onclick="navigator.clipboard?.writeText('${R}/panel/${E.id}?key=${E.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="display:flex;gap:4px">
                <a href="${R}/bodega/${E.id}/vinos?key=${E.key}" target="_blank" class="btn" style="font-size:11px;padding:5px;text-decoration:none;color:#3A7D44;border-color:#3A7D44;flex:1;justify-content:center">Vinos</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#3A7D44;border-color:#3A7D44"
                  onclick="navigator.clipboard?.writeText('${R}/bodega/${E.id}/vinos?key=${E.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="font-size:10px;color:#aaa;margin-top:2px">Pass: <strong>${E.pass}</strong></div>
            </div>
          </div>`).join("")}
      </div>`,qt.forEach(E=>setTimeout(()=>pl("qr-s"+E.id,`${R}/stand/${E.id}`,110),50))}function C(){const R=i.filter(x=>x.estado==="pagado").length,E=i.filter(x=>x.estado==="ingresado").length,v=(R+E)*35e3,f=o.reduce((x,_)=>x+(_.total||0),0),w={};o.forEach(x=>{w[x.standId]||(w[x.standId]={n:x.standNombre,t:0,c:0}),w[x.standId].t+=x.total||0,w[x.standId].c++});const b=Object.values(w).sort((x,_)=>_.t-x.t);document.getElementById("tab-content").innerHTML=`
      <div class="stats">
        ${[[i.filter(x=>x.estado!=="invalidado").length,"Invitados"],[R+E,"Con bono"],["$"+Ci(v),"Bonos"],[o.length,"Pedidos"],["$"+Ci(f),"Ventas"],[o.filter(x=>x.retiro==="envio").length,"Envíos"]].map(([x,_])=>`<div class="stat"><div class="v" style="font-size:${String(x).length>7?"13px":"20px"}">${x}</div><div class="l">${_}</div></div>`).join("")}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Ventas por bodega</p>
        ${b.length?b.map(x=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span style="font-weight:500">${x.n}</span><span style="color:#888">${x.c} ped.</span><span style="font-weight:500">$${Ci(x.t)}</span>
          </div>`).join(""):'<div class="empty">Sin ventas aún</div>'}
      </div>`}function T(){const R=document.getElementById("tab-body"),E=s.filter(v=>v.estado==="cancelado");if(!E.length){R.innerHTML='<div class="empty" style="padding:40px">Sin pedidos cancelados 👍</div>';return}R.innerHTML=`
      <div style="background:#FEE2E2;border:1px solid #FCA5A5;border-radius:8px;
        padding:10px 14px;margin-bottom:14px;font-size:12px;color:#991B1B">
        ⚠️ Estos pedidos fueron cancelados después de cobrar. Los QR asociados ya no son válidos
        pero pueden haber sido impresos o enviados por WhatsApp.
      </div>
      ${E.map(v=>{const f=v.canceladoAt?new Date(v.canceladoAt).toLocaleString("es-AR"):"Sin fecha";return`
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
          $${E.reduce((v,f)=>v+(f.total||0),0).toLocaleString("es-AR")}
        </strong>
      </div>`}async function V(){const R=document.getElementById("tab-content");R.innerHTML='<div class="empty">Cargando stock...</div>';let E=[];try{const f=i.map(w=>w.fireId);E=await fd(f),console.log("CARRITOS:",E.length)}catch(f){console.log("ERROR carritos:",f)}const v={};if(o.forEach(f=>{(f.items||[]).forEach(w=>{const b=f.standId+"_"+(w.vinoId||w.vinoNombre||"");v[b]||(v[b]={reservado:0,pagado:0,entregado:0});const x=w.qty||1;f.estado==="pagado"||f.estado==="listo"?v[b].pagado+=x:f.estado==="entregado"?v[b].entregado+=x:f.estado!=="cancelado"&&f.estado!=="reembolsado"&&(v[b].reservado+=x)})}),!a.length){R.innerHTML='<div class="empty" style="padding:40px">Sin stock cargado todavía.<br><br>Cargá el stock desde la pantalla de vinos de cada bodega.</div>';return}R.innerHTML=`
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:15px">
          <thead>
            <tr style="background:#1A3A5C;color:#fff">
              <th style="padding:10px;text-align:left">Stand / Vino</th>
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
${a.map((f,w)=>{const b=v[f.standId+"_"+f.vinoId]||{pagado:0,entregado:0},x=qt.find(Rt=>Number(Rt.id)===Number(f.standId)),_=(f.total||0)-(f.degustacion||0)-(f.reservado||0)-(f.pagado||0)-(f.entregado||0),I=_<=0?"#C0392B":_<=3?"#D97706":"#3A7D44";return'<tr style="background:'+(w%2===0?"#fff":"#F8FAFC")+';border-bottom:.5px solid #E8EFF5"><td style="padding:8px"><div style="font-weight:500;color:#1A3A5C">'+(f.vinoNombre||f.vinoId)+'</div><div style="font-size:11px;color:#888">Stand #'+f.standId+" · "+((x==null?void 0:x.nombre)||"")+'</div></td><td style="padding:8px;text-align:center;font-weight:500">'+(f.total||0)+'</td><td style="padding:8px;text-align:center;color:#D97706">'+(f.degustacion||0)+'</td><td style="padding:8px;text-align:center">'+(f.reservado||0)+'</td><td style="padding:8px;text-align:center">'+b.pagado+'</td><td style="padding:8px;text-align:center">'+b.entregado+'</td><td style="padding:8px;text-align:center;font-weight:600;color:'+I+'">'+Math.max(0,_)+'</td><td style="padding:8px;text-align:center"><button class="btn" style="font-size:10px;padding:3px 6px;margin-bottom:3px;display:block;width:100%" data-sid="'+f.standId+'" data-vid="'+f.vinoId+'" data-nom="'+encodeURIComponent(f.vinoNombre||f.vinoId)+'" onclick="window._agregarStock(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">+ Stock</button><button class="btn" style="font-size:10px;padding:3px 6px;color:#D97706;border-color:#D97706;display:block;width:100%" data-sid="'+f.standId+'" data-vid="'+f.vinoId+'" data-nom="'+encodeURIComponent(f.vinoNombre||f.vinoId)+'" onclick="window._agregarDegustation(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">Degust.</button></td></tr>'}).join("")}
          </tbody>
        </table>
      </div>`}window._agregarStock=async(R,E,v)=>{const f=parseInt(prompt("Agregar stock para "+v+`
¿Cuántas botellas agregar?`));!f||f<=0||(await Ki(R,E,f),V())},window._agregarDegustation=async(R,E,v)=>{const f=parseInt(prompt("Registrar degustación para "+v+`
¿Cuántas botellas se abrieron?`));!f||f<=0||(await ud(R,E,f),V())};function k(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">🔗 Links útiles</p>
        ${[["Registro público (para compartir con invitados)","/registro"],["Panel de caja","/caja"],["Control de puerta","/puerta"],["Logística / envíos","/logistica"]].map(([R,E])=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span>${R}</span>
            <div style="display:flex;gap:4px">
              <a href="${E}" target="_blank" class="btn" style="padding:3px 8px;font-size:11px;color:#6B1C1C;border-color:#6B1C1C">Abrir</a>
              <button onclick="navigator.clipboard.writeText(window.location.origin+'${E}').then(()=>this.textContent='✓').catch(()=>{})" class="btn" style="padding:3px 8px;font-size:11px">Copiar</button>
            </div>
          </div>`).join("")}
      </div>
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">👨‍👩‍👧 Links de familia</p>
        <p style="font-size:12px;color:#666;margin-bottom:10px">Generá un link seguro para que cada familia vea sus invitados.</p>
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="familia-apellido" type="text" placeholder="Apellido de la familia"
            style="flex:1;padding:8px;border:1px solid #ccc;border-radius:6px;font-size:14px">
          <button class="btn btn-v" style="padding:8px 14px" onclick="window._generarLinkFamilia()">Generar</button>
        </div>
        <div id="familia-result" style="font-size:12px;margin-top:6px"></div>
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
      </div>`}window._generarLinkFamilia=async()=>{const R=document.getElementById("familia-apellido").value.trim(),E=document.getElementById("familia-result");if(!R){E.innerHTML='<span style="color:#C0392B">Ingresá un apellido</span>';return}E.innerHTML='<span style="color:#888">Generando...</span>';const v=Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,10);try{await gd(R,v)}catch(w){E.innerHTML='<span style="color:#C0392B">Error: '+w.message+"</span>";return}const f=window.location.origin+"/familia/"+encodeURIComponent(R.toLowerCase())+"?key="+v;E.innerHTML='<div style="margin-top:6px;padding:8px;background:#f0f4f8;border-radius:6px;word-break:break-all"><div style="font-size:11px;color:#888;margin-bottom:4px">Link para familia '+R+':</div><a href="'+f+'" target="_blank" style="color:#1A3A5C;font-size:12px">'+f+`</a><button onclick="navigator.clipboard.writeText(this.dataset.link).then(()=>this.textContent='Copiado!')" data-link="`+f+'" style="display:block;margin-top:8px;padding:6px 12px;border-radius:6px;border:1px solid #1A3A5C;background:#fff;color:#1A3A5C;font-size:12px;cursor:pointer;width:100%">Copiar link</button></div>'},window._cambiarPin=()=>{const R=document.getElementById("nuevo-pin").value.trim(),E=document.getElementById("pin-msg");if(!/^\d{4}$/.test(R)){E.innerHTML='<span style="color:#C0392B">El PIN debe tener exactamente 4 digitos</span>';return}localStorage.setItem("sucovi-admin-pin",R),sessionStorage.setItem("admin-pin",R),E.innerHTML='<span style="color:#3B6D11">PIN actualizado correctamente</span>',document.getElementById("nuevo-pin").value=""},window._limpiar=async()=>{if(!confirm(`⚠️ ¿Seguro? Esto borra TODOS los invitados y pedidos.
Esta acción no se puede deshacer.`)||!confirm("Segunda confirmación: ¿borrar todos los datos de prueba?"))return;const R=document.getElementById("limpiar-msg");R.innerHTML='<span style="color:#888">Borrando...</span>';try{await dd(),R.innerHTML='<span style="color:#3B6D11">✓ Datos borrados correctamente</span>'}catch(E){R.innerHTML=`<span style="color:#A32D2D">Error: ${E.message}</span>`}},window._abrirWA=R=>{const E=i.find(_=>_.fireId===R);if(!E)return;d=R,document.getElementById("mw-tit").textContent=E.nombre+" "+E.apellido,document.getElementById("mw-cod").textContent=E.codigo||"",document.getElementById("mw-bdg").innerHTML=gl(E.estado);const v=window.location.origin,f=`${v}/acceso?inv=${E.token}`;document.getElementById("mw-link").textContent=f;const w=E.estado==="ingresado"?`Hola ${E.nombre}! 🍷

Ya estás dentro de SUCOVI 2027 — ¡disfrutá la noche!

Si necesitás tu QR para los stands:
👉 ${f}

_Personal e intransferible._`:E.estado==="pagado"?`Hola ${E.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${f}

_Personal e intransferible. Un solo uso en la entrada._`:`Hola ${E.nombre}! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`;document.getElementById("mw-msg").textContent=w;const b=document.getElementById("mw-btn-p"),x=document.getElementById("mw-badge-estado");E.estado==="pendiente"?(b.textContent="✓ Marcar como pagado",b.disabled=!1,b.style.display="block",b.style.background="#D97706",b.style.borderColor="#D97706",x&&(x.textContent="⏳ Pendiente",x.style.background="#FEF3C7",x.style.color="#92400E")):E.estado==="ingresado"?(b.style.display="none",x&&(x.textContent="✅ Ingresó al evento",x.style.background="#D1FAE5",x.style.color="#065F46")):(b.style.display="none",x&&(x.textContent="✅ Bono confirmado",x.style.background="#D1FAE5",x.style.color="#065F46")),pl("mw-canvas",E.codigo||E.fireId,80),document.getElementById("modal-wa").style.display="flex"},window._descargarQR=async R=>{const E=i.find(Ft=>Ft.fireId===R);if(!E)return;window.qrcode||await new Promise((Ft,wt)=>{const Kt=document.createElement("script");Kt.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",Kt.onload=Ft,Kt.onerror=wt,document.head.appendChild(Kt)});const f=window.location.origin+"/acceso?inv="+E.token,w=document.createElement("canvas"),b=600,x=800;w.width=b,w.height=x;const _=w.getContext("2d"),I=_.createLinearGradient(0,0,0,x);I.addColorStop(0,"#1A3A5C"),I.addColorStop(.55,"#2C5F8A"),I.addColorStop(1,"#3A7D44"),_.fillStyle=I,_.fillRect(0,0,b,x),_.fillStyle="#C9A96E",_.fillRect(0,x-4,b,4),_.fillStyle="rgba(255,255,255,0.7)",_.font="500 18px system-ui, -apple-system, sans-serif",_.textAlign="center",_.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",b/2,54),_.fillStyle="#ffffff",_.font="500 38px system-ui, -apple-system, sans-serif",_.fillText(E.nombre+" "+E.apellido,b/2,110),_.fillStyle="rgba(255,255,255,0.75)",_.font="400 22px system-ui, -apple-system, sans-serif",_.fillText(E.codigo,b/2,146),_.fillStyle="#3A7D44";const q=200,Rt=34,Yt=b/2-q/2,Vt=164;B(_,Yt,Vt,q,Rt,17),_.fill(),_.fillStyle="#ffffff",_.font="500 15px system-ui, -apple-system, sans-serif",_.fillText("✅ Bono confirmado",b/2,Vt+23);const Dt=320,Bt=340,Gt=b/2-Dt/2,Nt=220;_.fillStyle="#ffffff",B(_,Gt,Nt,Dt,Bt,16),_.fill();const Lt=qrcode(0,"M");Lt.addData(f),Lt.make();const st=Lt.getModuleCount(),ai=240,_e=Gt+(Dt-ai)/2,vo=Nt+24,te=ai/st;_.fillStyle="#000000";for(let Ft=0;Ft<st;Ft++)for(let wt=0;wt<st;wt++)Lt.isDark(Ft,wt)&&_.fillRect(_e+wt*te,vo+Ft*te,te,te);_.fillStyle="#1A3A5C",_.font="500 26px system-ui, -apple-system, sans-serif",_.fillText(E.codigo,b/2,Nt+Bt-44),_.fillStyle="#888",_.font="400 14px system-ui, -apple-system, sans-serif",_.fillText("Mostrá este QR en la entrada",b/2,Nt+Bt-20),_.fillStyle="rgba(255,255,255,0.85)",_.font="400 18px system-ui, -apple-system, sans-serif",_.fillText("Sáb 20 jun 2026  ·  19:30 hs",b/2,Nt+Bt+50),_.fillText("Roma 656, Olivos",b/2,Nt+Bt+80),_.fillStyle="rgba(255,255,255,0.5)",_.font="400 13px system-ui, -apple-system, sans-serif",_.fillText("Personal e intransferible · Un solo uso en la entrada",b/2,x-24),await new Promise(Ft=>{const wt=new Image;wt.onload=()=>{const Ie=b-70-20,Ee=x-70-20;_.save(),_.beginPath(),_.arc(Ie+70/2,Ee+70/2,70/2+3,0,Math.PI*2),_.fillStyle="rgba(255,255,255,0.25)",_.fill(),_.beginPath(),_.arc(Ie+70/2,Ee+70/2,70/2,0,Math.PI*2),_.clip(),_.drawImage(wt,Ie,Ee,70,70),_.restore(),Ft()},wt.onerror=Ft,wt.src=ms});const mn=document.createElement("a");mn.download="QR-"+E.codigo+".png",mn.href=w.toDataURL("image/png"),mn.click()};function B(R,E,v,f,w,b){R.beginPath(),R.moveTo(E+b,v),R.lineTo(E+f-b,v),R.quadraticCurveTo(E+f,v,E+f,v+b),R.lineTo(E+f,v+w-b),R.quadraticCurveTo(E+f,v+w,E+f-b,v+w),R.lineTo(E+b,v+w),R.quadraticCurveTo(E,v+w,E,v+w-b),R.lineTo(E,v+b),R.quadraticCurveTo(E,v,E+b,v),R.closePath()}let L=null;window._editarInv=R=>{const E=i.find(v=>v.fireId===R);E&&(L=R,document.getElementById("edit-nom").value=E.nombre||"",document.getElementById("edit-ape").value=E.apellido||"",document.getElementById("edit-tel").value=E.tel||"",document.getElementById("edit-email").value=E.email||"",document.getElementById("edit-familia").value=E.familia||"",document.getElementById("edit-comentarios").value=E.comentarios||"",document.getElementById("edit-estado").value=E.estado||"pendiente",document.getElementById("edit-msg").innerHTML="",document.getElementById("modal-edit").style.display="flex")},window._guardarEdit=async()=>{const R=document.getElementById("edit-msg"),E=document.getElementById("edit-nom").value.trim(),v=document.getElementById("edit-ape").value.trim(),f=document.getElementById("edit-tel").value.trim();if(!E||!v||!f){R.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}R.innerHTML='<span style="color:#888">Guardando...</span>';const w={nombre:E,apellido:v,tel:f,estado:document.getElementById("edit-estado").value,...document.getElementById("edit-email").value.trim()&&{email:document.getElementById("edit-email").value.trim()},...document.getElementById("edit-familia").value.trim()&&{familia:document.getElementById("edit-familia").value.trim()},...document.getElementById("edit-comentarios").value.trim()&&{comentarios:document.getElementById("edit-comentarios").value.trim()}};try{await Ve(L,w),R.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEdit(),1200)}catch(b){R.innerHTML=`<span style="color:#C0392B">Error: ${b.message}</span>`}},window._cerrarEdit=()=>{document.getElementById("modal-edit").style.display="none",L=null},window._pagarM=async()=>{const R=i.find(x=>x.fireId===d);if(!R||R.estado!=="pendiente")return;const E=document.getElementById("mw-btn-p");E&&(E.disabled=!0,E.textContent="✓ Pagado",E.style.background="#3A7D44",E.style.borderColor="#3A7D44");const v=document.getElementById("mw-badge-estado");v&&(v.textContent="✅ Bono pagado",v.style.background="#D1FAE5",v.style.color="#065F46");const f=`${window.location.origin}/acceso?inv=${R.token}`,w=`Hola ${R.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${f}

_Personal e intransferible. Un solo uso en la entrada._`,b=document.getElementById("mw-msg");b&&(b.textContent=w),await Ve(R.fireId,{estado:"pagado"})},window._envWA=()=>{const R=document.getElementById("mw-msg").textContent,E=i.find(f=>f.fireId===d),v=((E==null?void 0:E.tel)||"").replace(/\D/g,"");v?window.open("https://wa.me/"+v+"?text="+encodeURIComponent(R),"_blank"):alert("Sin teléfono cargado")},window._copWA=()=>{var v;(v=navigator.clipboard)==null||v.writeText(document.getElementById("mw-msg").textContent).catch(()=>{});const R=document.querySelector("#modal-wa .btn-g"),E=R.innerHTML;R.innerHTML="✓ ¡Copiado!",setTimeout(()=>R.innerHTML=E,2e3)},window._cModal=()=>{document.getElementById("modal-wa").style.display="none",d=null},u()}const ue=n=>Number(n).toLocaleString("es-AR");async function qm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Hm(n){Wt();let t=[],e=[],i="cobrar",o=null,s=[],a=null,l=!1;n.innerHTML=kt({title:"💰 Caja central",sub:"Sucovi 2027 · Roma 656, Olivos",backHref:"/admin"})+`
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
    </div>`,mo(C=>{t=C,i==="cobrar"&&!o&&m()}),go(C=>{e=C,i!=="cobrar"&&d()}),window._cajaVista=(C,T)=>{i=C,o=null,document.querySelectorAll(".nav button").forEach(V=>V.classList.remove("on")),T.classList.add("on"),d()};function d(){i==="cobrar"&&p(),i==="pedidos"&&S()}let u={};async function m(){const C=t.filter(V=>V.estado==="ingresado"),T=await Promise.all(C.map(async V=>{try{const B=(await br(V.fireId)).filter(E=>{var v;return(v=E.items)==null?void 0:v.length});if(!B.length)return null;const L=B.reduce((E,v)=>E+(v.items||[]).reduce((f,w)=>f+(w.sub||0),0),0),R=B.reduce((E,v)=>E+(v.items||[]).length,0);return{fireId:V.fireId,total:L,cant:R,stands:B.length}}catch{return null}}));u={},T.filter(Boolean).forEach(V=>{u[V.fireId]=V}),g()}function p(){const C=document.getElementById("caja-content");if(o){A();return}C.innerHTML=`
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <input id="buscar-caja" placeholder="Buscar por nombre o código..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda">
        <p style="font-size:12px;color:#888;margin-bottom:8px">Cargando carritos activos...</p>
      </div>`,t.length&&m()}function g(){var k;const C=document.getElementById("resultados-busqueda");if(!C)return;const T=(((k=document.getElementById("buscar-caja"))==null?void 0:k.value)||"").toLowerCase().trim();let V=t.filter(B=>B.estado!=="invalidado");if(T?V=V.filter(B=>(B.codigo||"").toLowerCase().includes(T)||(B.nombre+" "+B.apellido).toLowerCase().includes(T)):V=V.filter(B=>u[B.fireId]),!V.length){C.innerHTML=T?'<div class="empty">Sin resultados</div>':'<div class="empty" style="padding:24px">Sin carritos activos — nadie ha agregado vinos todavía 🍷</div>';return}C.innerHTML=(T?"":`<p style="font-size:11px;color:#888;margin-bottom:8px;font-weight:500">CARRITOS ACTIVOS (${V.length})</p>`)+V.map(B=>{const L=u[B.fireId];return`
        <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
          align-items:center;gap:10px" onclick="window._seleccionarInv('${B.fireId}')">
          <div class="avatar">${B.nombre[0]}${B.apellido[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${B.nombre} ${B.apellido}</div>
            <div style="font-size:12px;color:#888">${B.codigo} · ${B.tel}</div>
            ${L?`<div style="font-size:12px;color:#3A7D44;font-weight:500;margin-top:2px">
              🍷 ${L.cant} ítem${L.cant>1?"s":""} · $${Number(L.total).toLocaleString("es-AR")}
              <span style="color:#888;font-weight:400"> · ${L.stands} stand${L.stands>1?"s":""}</span>
            </div>`:'<div style="font-size:11px;color:#aaa;margin-top:2px">Carrito vacío</div>'}
          </div>
          <span class="badge ${B.estado==="pagado"||B.estado==="ingresado"?"b-pago":"b-pend"}">
            ${B.estado==="pagado"||B.estado==="ingresado"?"Bono pagado":"Pendiente"}
          </span>
          <span style="color:#1A3A5C;font-size:18px">›</span>
        </div>`}).join("")}window._buscarInv=(C=!1)=>{var k;const T=(((k=document.getElementById("buscar-caja"))==null?void 0:k.value)||"").toLowerCase().trim();if(!T){g();return}const V=t.filter(B=>B.estado!=="invalidado"&&((B.codigo||"").toLowerCase().includes(T)||(B.nombre+" "+B.apellido).toLowerCase().includes(T)));if(C&&V.length===1){window._seleccionarInv(V[0].fireId);return}g()},window._seleccionarInv=async C=>{o=t.find(T=>T.fireId===C),o&&(s=await br(C),A())};async function A(){const C=document.getElementById("caja-content");if(!C)return;const T=o,V=s.filter(L=>{var R;return(R=L.items)==null?void 0:R.length}),k=V.reduce((L,R)=>L+(R.items||[]).reduce((E,v)=>E+(v.sub||0),0),0),B=e.filter(L=>L.invFireId===T.fireId);C.innerHTML=`
      <button class="btn" onclick="window._volverCobrar()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Buscar otro</button>
      <div class="card" style="margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div class="avatar" style="width:44px;height:44px;font-size:15px">
            ${T.nombre[0]}${T.apellido[0]}
          </div>
          <div>
            <div style="font-size:16px;font-weight:500">${T.nombre} ${T.apellido}</div>
            <div style="font-size:12px;color:#888">${T.codigo}${T.tel?" · "+T.tel:""}</div>
          </div>
        </div>
        ${B.length?`<div style="background:#D1FAE5;border-radius:6px;padding:6px 10px;
          font-size:12px;color:#065F46">
          ✅ Ya tiene ${B.length} pedido${B.length>1?"s":""} pagado${B.length>1?"s":""} esta noche
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
                <span>${R.desc}</span><strong>$${ue(R.sub)}</strong>
              </div>`).join("")}
            <div style="display:flex;justify-content:space-between;font-size:13px;
              font-weight:500;margin-top:8px;padding-top:6px;border-top:.5px solid #D6E4F0">
              <span>Subtotal</span>
              <span>$${ue((L.items||[]).reduce((R,E)=>R+(E.sub||0),0))}</span>
            </div>
          </div>`).join("")}
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL</span><span style="color:#1A3A5C">$${ue(k)}</span>
          </div>
          <p style="font-size:12px;color:#888;margin-top:4px">
            ${V.length} stand${V.length>1?"s":""}
          </p>
        </div>
        <div id="cobro-msg" style="font-size:12px;text-align:center;margin-bottom:8px"></div>
        <button class="btn btn-g" style="width:100%;padding:14px;font-size:16px;margin-bottom:8px"
          onclick="window._cobrar()">
          ✓ Cobrar $${ue(k)} y generar vouchers
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
            ${T.nombre} todavía no agregó vinos desde los stands.
          </p>
        </div>`}
    `}window._imprimirVouchers=()=>{const{inv:C,items:T}=window._lastCobrado||{};if(!C||!T)return;const V=B=>Number(B).toLocaleString("es-AR"),k=window.open("","_blank");k.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <title>Vouchers - ${C.nombre} ${C.apellido}</title>
      <script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"><\/script>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: system-ui, sans-serif; padding: 16px; }
        .voucher { border: 2px solid #1A3A5C; border-radius: 10px; padding: 16px;
          margin-bottom: 16px; page-break-inside: avoid; }

        .header { display: flex; justify-content: space-between; margin-bottom: 10px;
          border-bottom: 1px solid #D6E4F0; padding-bottom: 8px; }
        .evento { font-size: 10px; color: #888; letter-spacing: .08em; }
        .voc-num { font-size: 22px; font-weight: 700; color: #1A3A5C; letter-spacing: .04em; margin-top: 2px; }
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
    ${window._lastPedidosIds?window._lastPedidosIds.map((B,L)=>{const R=T[L];return R?`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${R.standId}</div>
              <div class="voc-num">${window._lastPedidosIds&&T[L]?"VOC-"+String((window._lastVoucherNums||[])[L]||0).padStart(3,"0"):"VOC-000"}</div>
              <div class="stand">${R.standNombre}</div>
              <div class="inv">${C.nombre} ${C.apellido} · ${C.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(R.items||[]).map(E=>`
            <div class="item"><span>${E.desc}</span><strong>$${V(E.sub)}</strong></div>
          `).join("")}
          <div class="total">
            <span>Total</span>
            <span>$${V((R.items||[]).reduce((E,v)=>E+(v.sub||0),0))}</span>
          </div>
        </div>
        <div class="qr-box">
          <canvas id="qr-${L}"></canvas>
          <div class="qr-hint">Escaneá en el stand</div>
        </div>
      </div>`:""}).join(""):T.map(B=>`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${B.standId}</div>
              <div class="voc-num">${window._lastPedidosIds&&T[idx]?"VOC-"+String((window._lastVoucherNums||[])[idx]||0).padStart(3,"0"):"VOC-000"}</div>
              <div class="stand">${B.standNombre}</div>
              <div class="inv">${C.nombre} ${C.apellido} · ${C.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(B.items||[]).map(L=>`
            <div class="item"><span>${L.desc}</span><strong>$${V(L.sub)}</strong></div>
          `).join("")}
          <div class="total"><span>Total</span><span>$${V((B.items||[]).reduce((L,R)=>L+(R.sub||0),0))}</span></div>
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
    </body></html>`),k.document.close()},window._enviarVouchersWA=()=>{var v;const{inv:C,items:T}=window._lastCobrado||{};if(!C||!T)return;const V=f=>Number(f).toLocaleString("es-AR"),k=T.map(f=>{const w=(f.items||[]).reduce((x,_)=>x+(_.sub||0),0),b=(f.items||[]).map(x=>`  • ${x.desc}: $${V(x.sub)}`).join(`
`);return`🍷 *${f.standNombre}* (Stand #${f.standId})
${b}
  Total: $${V(w)}`}).join(`

`),B=T.reduce((f,w)=>f+(w.items||[]).reduce((b,x)=>b+(x.sub||0),0),0),L=`Hola ${C.nombre}! 🍷

Aquí están tus vouchers de SUCOVI 2027:

${k}

💰 *Total pagado: $${V(B)}*

Presentá cada voucher en el stand correspondiente para retirar tus vinos. 

_Sáb 20 jun 2026 · Roma 656, Olivos_`,E="https://wa.me/54"+((v=C.tel)==null?void 0:v.replace(/\D/g,""))+"?text="+encodeURIComponent(L);window.open(E,"_blank")},window._cancelarCarrito=async()=>{if(confirm("¿Cancelar y vaciar el carrito de "+o.nombre+"?")){for(const C of s)for(const T of C.items||[])T.vinoId&&await fs(C.standId,T.vinoId,T.qty||1).catch(()=>{});await wr(o.fireId),o=null,s=[],p()}},window._volverCobrar=()=>{o=null,s=[],p()},window._cobrar=async()=>{const C=o,T=s.filter(B=>{var L;return(L=B.items)==null?void 0:L.length});if(!T.length)return;const V=document.querySelector("#caja-content .btn-g");V&&(V.disabled=!0,V.textContent="Procesando...");const k=document.getElementById("cobro-msg");try{await Yc(C,T);for(const R of T)for(const E of R.items||[])E.vinoId&&await pd(R.standId,E.vinoId,E.qty||1).catch(()=>{});await wr(C.fireId),k.innerHTML=`<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${T.length} voucher${T.length>1?"s":""} generado${T.length>1?"s":""}.
      </span>`,V&&(V.style.display="none");const B=document.getElementById("voucher-actions");B&&(B.style.display="flex"),window._lastCobrado={inv:C,items:T};const{escucharPedidosPorInvitado:L}=await sn(async()=>{const{escucharPedidosPorInvitado:R}=await Promise.resolve().then(()=>Kn);return{escucharPedidosPorInvitado:R}},void 0);L(C.fireId,R=>{const E=R.filter(v=>T.some(f=>f.standId===v.standId));window._lastPedidosIds=E.map(v=>v.fireId),window._lastVoucherNums=E.map(v=>v.voucherNum||0),console.log("voucherNums:",window._lastVoucherNums)})}catch(B){k.innerHTML=`<span style="color:#C0392B">Error: ${B.message}</span>`,V&&(V.disabled=!1,V.textContent="Reintentar")}};function S(){const C=document.getElementById("caja-content"),T=e.filter(B=>B.retiro!=="envio"),V={pagado:"b-pago",listo:"b-list",entregado:"b-entr"};if(!T.length){C.innerHTML='<div class="empty">Sin pedidos aún</div>';return}const k={};T.forEach(B=>{k[B.invFireId]||(k[B.invFireId]={nombre:B.invNombre,codigo:B.invCodigo||"",peds:[]}),k[B.invFireId].peds.push(B)}),C.innerHTML=Object.entries(k).map(([B,L])=>{var E;const R=L.peds.reduce((v,f)=>v+(f.total||0),0);return`
      <div class="card" style="margin-bottom:10px;cursor:pointer" onclick="window._verDetallePedido('${B}')">
        <div style="display:flex;align-items:center;gap:8px">
          <div class="avatar" style="width:36px;height:36px;font-size:12px;flex-shrink:0">
            ${(L.nombre||"??")[0]}${((E=(L.nombre||"??").split(" ")[1])==null?void 0:E[0])||""}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${L.nombre||""}</div>
            <div style="font-size:11px;color:#888">${L.peds.length} stand${L.peds.length>1?"s":""} · ${L.peds.map(v=>'<span class="badge '+V[v.estado]+'" style="font-size:10px">'+v.standNombre+"</span>").join(" ")}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:15px;font-weight:500">$${ue(R)}</div>
            <div style="font-size:11px;color:#5BA4CF">Ver detalle ›</div>
          </div>
        </div>
      </div>`}).join("")}window._verDetallePedido=C=>{var f,w;const T=document.getElementById("caja-content"),V=e.filter(b=>b.invFireId===C),k=t.find(b=>b.fireId===C)||{nombre:((f=V[0])==null?void 0:f.invNombre)||"",apellido:"",codigo:((w=V[0])==null?void 0:w.invCodigo)||"",tel:""},B=V.filter(b=>b.estado!=="reembolsado"&&b.estado!=="cancelado").map(b=>({standId:b.standId,standNombre:b.standNombre,retiro:b.retiro,items:b.items||[],fireId:b.fireId})),L=V.filter(b=>b.estado!=="reembolsado"&&b.estado!=="cancelado").reduce((b,x)=>b+(x.total||0),0);window._lastCobrado={inv:k,items:B},window._lastPedidosIds=V.filter(b=>b.estado==="pagado").map(b=>b.fireId),window._lastVoucherNums=V.filter(b=>b.estado==="pagado").map(b=>b.voucherNum||0);const R={pagado:"#5BA4CF",entregado:"#3A7D44",reembolsado:"#C0392B",cancelado:"#C0392B",listo:"#D97706"},E={pagado:"b-pago",listo:"b-list",entregado:"b-entr",reembolsado:"b-canc",cancelado:"b-canc"},v={pagado:"💳 Pagado",listo:"✅ Listo",entregado:"📦 Entregado",reembolsado:"↩️ Reembolsado",cancelado:"❌ Cancelado"};T.innerHTML=`
      <button class="btn" onclick="window._cajaVista('pedidos', document.querySelector('.nav button:nth-child(2)'))"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>
      <div class="card" style="margin-bottom:12px">
        <div style="font-size:16px;font-weight:500">${k.nombre} ${k.apellido}</div>
        <div style="font-size:12px;color:#888">${k.codigo}${k.tel?" · "+k.tel:""}</div>
      </div>
      ${V.map(b=>`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${R[b.estado]||"#5BA4CF"};
          ${b.estado==="reembolsado"||b.estado==="cancelado"?"opacity:.7":""}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C">🍷 ${b.standNombre}</div>
            <span class="badge ${E[b.estado]||"b-pago"}">${v[b.estado]||b.estado}</span>
          </div>
          ${(b.items||[]).map(x=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555;
              ${b.estado==="reembolsado"||b.estado==="cancelado"?"text-decoration:line-through":""}">
              <span>${x.desc}</span><strong>$${ue(x.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Subtotal</span>
            <span ${b.estado==="reembolsado"||b.estado==="cancelado"?'style="text-decoration:line-through;color:#C0392B"':""}>
              $${ue(b.total||0)}
            </span>
          </div>
          ${b.estado==="pagado"?`
            <button class="btn" style="margin-top:10px;width:100%;padding:7px;font-size:12px;
              color:#C0392B;border-color:#C0392B"
              onclick="window._reembolsarUnPedido('${b.fireId}','${C}')">
              ↩️ Reembolsar este stand
            </button>`:""}
          ${b.estado==="reembolsado"?`
            <div style="font-size:11px;color:#C0392B;margin-top:6px">
              Reembolsado el ${b.reembolsadoAt?new Date(b.reembolsadoAt).toLocaleString("es-AR"):""}
            </div>`:""}
        </div>`).join("")}
      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>TOTAL COBRADO</span><span style="color:#1A3A5C">$${ue(L)}</span>
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
      </div>`},window._reembolsarUnPedido=async(C,T)=>{confirm("¿Reembolsar este pedido? El stand no podrá marcarlo como entregado.")&&(await nd(C),window._verDetallePedido(T))},window._descargarVoucherPDF=async()=>{const{inv:C,items:T}=window._lastCobrado||{};if(!C||!T)return;window.jspdf||await new Promise((E,v)=>{const f=document.createElement("script");f.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",f.onload=E,f.onerror=v,document.head.appendChild(f)}),window.qrcode||await new Promise((E,v)=>{const f=document.createElement("script");f.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",f.onload=E,f.onerror=v,document.head.appendChild(f)});const{jsPDF:V}=window.jspdf,k=new V({unit:"mm",format:"a4"}),B=window._lastPedidosIds||[];let L=15;const R=(E,v,f,w)=>{const b=(E.items||[]).length,x=Math.max(90,62+b*7);k.setDrawColor(26,58,92),k.setLineWidth(.5),k.roundedRect(10,w,190,x,3,3,"S"),k.setFillColor(26,58,92),k.roundedRect(10,w,190,16,3,3,"F"),k.rect(10,w+10,190,6,"F"),k.setTextColor(180,180,180),k.setFontSize(7),k.setFont("helvetica","normal"),k.text("SUCOVI 2027  .  VOUCHER DE RETIRO",15,w+7),k.text("Stand #"+E.standId,195,w+7,{align:"right"});const _=f?"VOC-"+String(f).padStart(3,"0"):"VOC-000";k.setTextColor(255,255,255),k.setFontSize(18),k.setFont("helvetica","bold"),k.text(_,15,w+14),k.setFillColor(58,125,68),k.roundedRect(158,w+9,38,8,2,2,"F"),k.setTextColor(255,255,255),k.setFontSize(8),k.setFont("helvetica","bold"),k.text("V PAGADO",177,w+14.5,{align:"center"}),k.setTextColor(26,58,92),k.setFontSize(14),k.setFont("helvetica","bold"),k.text(E.standNombre,15,w+26),k.setFontSize(9),k.setFont("helvetica","normal"),k.setTextColor(100,100,100),k.text((C.nombre||"")+" "+(C.apellido||"")+"  .  "+(C.codigo||""),15,w+33),k.setDrawColor(220,220,220),k.setLineWidth(.3),k.line(15,w+37,195,w+37);let I=w+44;if((E.items||[]).forEach(q=>{k.setFontSize(10),k.setFont("helvetica","normal"),k.setTextColor(50,50,50),k.text(q.desc,15,I),k.setFont("helvetica","bold"),k.setTextColor(30,30,30),k.text("$"+Number(q.sub).toLocaleString("es-AR"),145,I,{align:"right"}),k.setFont("helvetica","normal"),I+=7}),k.setDrawColor(180,180,180),k.setLineWidth(.3),k.line(15,I,145,I),I+=6,k.setFontSize(12),k.setFont("helvetica","bold"),k.setTextColor(26,58,92),k.text("Total",15,I),k.text("$"+Number((E.items||[]).reduce((q,Rt)=>q+(Rt.sub||0),0)).toLocaleString("es-AR"),145,I,{align:"right"}),v&&window.qrcode)try{const q=window.qrcode(0,"M");q.addData(v),q.make();const Rt=q.getModuleCount(),Yt=32,Vt=Yt/Rt,Dt=158,Bt=w+38;k.setFillColor(255,255,255),k.rect(Dt-1,Bt-1,Yt+2,Yt+2,"F"),k.setFillColor(0,0,0);for(let Gt=0;Gt<Rt;Gt++)for(let Nt=0;Nt<Rt;Nt++)q.isDark(Gt,Nt)&&k.rect(Dt+Nt*Vt,Bt+Gt*Vt,Vt,Vt,"F");k.setFontSize(6),k.setFont("helvetica","normal"),k.setTextColor(120,120,120),k.text("Escaneá en el stand",Dt+Yt/2,Bt+Yt+4,{align:"center"})}catch{}return w+x+8};T.forEach((E,v)=>{v>0&&L>130&&(k.addPage(),L=15),L=R(E,B[v],(window._lastVoucherNums||[])[v],L)}),k.save("Voucher_"+(C.nombre||"").replace(/ /g,"_")+"_SUCOVI2027.pdf")},window._abrirScanner=async()=>{document.getElementById("scan-overlay").style.display="flex";const C=document.getElementById("scan-status");C&&(C.textContent="Cargando escáner...");try{await qm(),a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const T=document.getElementById("scan-video");T.srcObject=a,l=!0,C&&(C.textContent="Buscando QR...");const V=document.createElement("canvas"),k=V.getContext("2d",{willReadFrequently:!0}),B=()=>{if(l){if(T.readyState===T.HAVE_ENOUGH_DATA&&T.videoWidth>0){V.width=T.videoWidth,V.height=T.videoHeight,k.drawImage(T,0,0);const L=k.getImageData(0,0,V.width,V.height),R=window.jsQR(L.data,L.width,L.height,{inversionAttempts:"dontInvert"});if(R&&R.data){const E=R.data;window._cerrarScanner();const v=E.match(/INV-\d+/),f=E.match(/inv=([A-Z0-9]+)/i);if(v){const w=document.getElementById("buscar-caja");w&&(w.value=v[0],window._buscarInv(!0))}else f&&sn(async()=>{const{buscarInvitadoPorToken:w}=await Promise.resolve().then(()=>Kn);return{buscarInvitadoPorToken:w}},void 0).then(({buscarInvitadoPorToken:w})=>w(f[1]).then(b=>{b&&window._seleccionarInv(b.fireId)}));return}}l&&requestAnimationFrame(B)}};T.addEventListener("loadeddata",()=>requestAnimationFrame(B))}catch{C&&(C.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}},window._cerrarScanner=()=>{l=!1,a&&(a.getTracks().forEach(T=>T.stop()),a=null);const C=document.getElementById("scan-overlay");C&&(C.style.display="none")},p()}const Wo=n=>Number(n).toLocaleString("es-AR");function Um(n,t,e){if(Wt(),!e||e.estado==="invalidado"){n.innerHTML=kt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
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

        <!-- Stock msg modal -->
        <div id="stand-msg-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
          background:rgba(0,0,0,.5);z-index:400;align-items:center;justify-content:center">
          <div id="stand-msg-box" style="background:#fff;border-radius:14px;padding:28px 32px;
            text-align:center;font-size:18px;font-weight:500;min-width:220px;box-shadow:0 8px 32px rgba(0,0,0,.2)">
          </div>
        </div>
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
      </div>`,window._buscarInvStand=async()=>{var S;const u=(((S=document.getElementById("inv-cod-manual"))==null?void 0:S.value)||"").trim(),m=document.getElementById("inv-cod-err");if(!u)return;const p=u.split(".");if(p.length!==2){m.textContent="Formato: INV-0001.Apellido";return}const g=p[0].toUpperCase().trim(),A=p[1].toLowerCase().trim();m.textContent="Buscando...";try{const{buscarInvitadoPorCodigo:C}=await sn(async()=>{const{buscarInvitadoPorCodigo:V}=await Promise.resolve().then(()=>Kn);return{buscarInvitadoPorCodigo:V}},void 0),T=await C(g);if(!T){m.textContent="Código no encontrado";return}if(T.estado==="invalidado"){m.textContent="Invitado invalidado";return}if(!T.apellido.toLowerCase().startsWith(A)){m.textContent="Código o apellido incorrecto";return}window.location.href="/stand/"+t.id+"?inv="+T.token}catch(C){m.textContent="Error: "+C.message}};return}if(e.estado==="pendiente"){n.innerHTML=kt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">
          Bono pendiente de pago
        </h2>
        <p style="font-size:14px;color:#666;">
          Hola ${e.nombre}, tu bono ($35.000) todavía no fue confirmado.<br>
          Pasá por la entrada para abonar.
        </p>
      </div>`;return}let i=[],o="stand";const s=`/carrito?inv=${e.token}`;n.innerHTML=kt({title:"🍷 "+t.nombre,sub:t.region+" · Stand #"+t.id,actions:[`<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
        <div style="font-size:11px;background:rgba(255,255,255,.18);padding:3px 8px;border-radius:6px;color:#fff">✓ ${e.nombre}</div>
        <a href="${s}" style="font-size:10px;color:rgba(255,255,255,.75)">Ver carrito →</a>
      </div>`]})+`

    <div style="max-width:440px;margin:0 auto;padding:14px">
      <div style="background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;
        padding:9px 12px;font-size:12px;color:#6B4000;margin-bottom:14px">
        🎟 Degustaciones incluidas en tu bono.<br>
        Elegí botellas o cajas para llevar — se acumulan en tu carrito y pagás todo junto en caja.
      </div>

      <!-- Stock msg modal -->
      <div id="stand-msg-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:400;align-items:center;justify-content:center">
        <div id="stand-msg-box" style="background:#fff;border-radius:14px;padding:32px 40px;text-align:center;font-size:20px;font-weight:600;min-width:240px;box-shadow:0 8px 32px rgba(0,0,0,.25)"></div>
      </div>
      <div id="menu-lista"><div class="empty">Cargando carta...</div></div>

      <!-- Opción de retiro para este stand -->
      <div id="retiro-box" style="display:none;margin-top:14px">
        <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#f0f4f8;border-radius:8px;border:1px solid #D6E4F0">
          <span style="font-size:18px">🍷</span>
          <div>
            <div style="font-size:12px;font-weight:600;color:#1A3A5C">Retiro en stand</div>
            <div style="font-size:11px;color:#888">Pasá a buscar tus vinos al stand de ${t.nombre}</div>
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
      </div>

      <div id="add-msg" style="text-align:center;font-size:12px;color:#3B6D11;
        margin-top:8px;min-height:20px"></div>
    </div>

    <!-- FAB carrito -->
    <button class="cart-fab" id="cart-fab" style="display:none"
      onclick="window.location.href='${s}'">
      🛒 <span id="cart-fab-txt">Ver carrito</span>
    </button>`,window._stockDisponible={};let a=window._stockDisponible;yo(u=>{console.log("STOCK DOCS:",u.length,"bodega:",t.id),a={},u.filter(m=>Number(m.standId)===Number(t.id)).forEach(m=>{a[m.vinoId]=Math.max(0,(m.total||0)-(m.degustacion||0)-(m.reservado||0)-(m.pagado||0)-(m.entregado||0))}),i.forEach((m,p)=>{const g=document.getElementById("disp-"+p);if(!g)return;const A=a[m.fireId||m.id];A!==void 0&&(g.textContent="("+A+" disp.)",g.style.color=A===0?"#C0392B":A<=3?"#D97706":"#888")})}),si(t.id,u=>{i=u,d(),setTimeout(()=>{i.forEach((m,p)=>{const g=document.getElementById("disp-"+p);if(!g)return;const A=a[m.fireId||m.id];A!==void 0&&(g.textContent="("+A+" disp.)",g.style.color=A===0?"#C0392B":A<=3?"#D97706":"#888")})},300)});const l={};ps(e.fireId,u=>{var C,T;const m=u.find(V=>Number(V.standId)===t.id);m&&m.items&&m.items.forEach(V=>{if(V.key&&l[V.key]===void 0){l[V.key]=V.qty||0;const[k,B]=V.key.split("_").map(Number),L=document.getElementById("qv"+k+"_"+B);L&&(L.textContent=l[V.key])}});const p=u.reduce((V,k)=>V+(k.items||[]).reduce((B,L)=>B+(L.sub||0),0),0),g=u.reduce((V,k)=>V+(k.items||[]).length,0),A=document.getElementById("cart-fab"),S=document.getElementById("cart-fab-txt");A&&g>0?(A.style.display="flex",S.textContent=`Ver carrito · $${Wo(p)}`):A&&(A.style.display="none"),m&&((C=m.items)!=null&&C.length)?(o=m.retiro||"stand",(T=document.getElementById("rb-stand"))==null||T.classList.toggle("sel",o==="stand"),document.getElementById("retiro-box").style.display="block",document.getElementById("stand-resumen").style.display="block",document.getElementById("stand-resumen-lines").innerHTML=m.items.map(V=>`
          <div style="display:flex;justify-content:space-between;font-size:12px;
            color:#555;margin-bottom:4px">
            <span>${V.desc}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-weight:500">$${Wo(V.sub)}</span>
              <button onclick="window._quitarItem('${V.key}')"
                style="border:none;background:none;color:#A32D2D;cursor:pointer;
                font-size:13px;padding:0 2px">✕</button>
            </div>
          </div>`).join("")):(document.getElementById("stand-resumen").style.display="none",m===null&&(document.getElementById("retiro-box").style.display="none"))});function d(){const u=document.getElementById("menu-lista");if(u){if(!i.length){u.innerHTML='<div class="empty">La carta estará disponible pronto.</div><a href="/acceso?inv='+e.token+'#stands-section" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#1A3A5C;color:#fff;border-radius:8px;padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-top:12px">🛍️ Seguir comprando</a>';return}u.innerHTML=i.map((m,p)=>`
      <div class="vino-card">
        <div style="font-size:17px;font-weight:600;color:#1A3A5C">${m.nombre}</div>
        <div style="font-size:11px;color:#888;margin-top:2px">
          <span style="font-size:14px;color:#555">${m.varietal||""}${m.cosecha?" · "+m.cosecha:""}</span>
        </div>
        ${m.descripcion?`<div style="font-size:13px;color:#666;margin-top:3px">${m.descripcion}</div>`:""}
        ${(m.unidades||[]).map((g,A)=>`
          <div class="qty-row">
            <span class="qty-label">
              ${g.u} — <span style="color:#6B1C1C;font-weight:600">$${Wo(g.p)}</span>
              <span id="disp-${p}" style="font-size:11px;margin-left:6px"></span>
            </span>
            <button class="qty-btn" id="btnm${p}_${A}" onclick="window._agregar(${p},${A},-1)">−</button>
            <span id="qv${p}_${A}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" id="btnp${p}_${A}" onclick="window._agregar(${p},${A},1)">+</button>
          </div>`).join("")}
      </div>`).join("")+'<a href="/acceso?inv='+e.token+'#stands-section" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#1A3A5C;color:#fff;border-radius:8px;padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-top:12px">🛍️ Seguir comprando</a>'}}window._agregar=async(u,m,p)=>{const g=i[u];if(!g)return;const A=(g.unidades||[])[m];if(!A)return;const S=`${u}_${m}`,C=`btn${p>0?"p":"m"}${u}_${m}`,T=document.getElementById(C);if(T&&(T.disabled=!0,T.style.opacity="0.4"),p>0){const k=g.fireId||g.id;if(!await hd(t.id,k,p)){window._showStandMsg("Sin stock disponible","#C0392B"),setTimeout(()=>window._hideStandMsg(),1800),T&&(T.disabled=!1,T.style.opacity="1");return}}l[S]=Math.max(0,(l[S]||0)+p);const V=document.getElementById(`qv${u}_${m}`);if(V&&(V.textContent=l[S]),p<0&&await fs(t.id,g.fireId||g.id,1).catch(()=>{}),l[S]===0)window._showStandMsg("⏳ Guardando...","#5BA4CF"),await Gi(e.fireId,t.id,S),window._showStandMsg("✓ Carrito actualizado","#3B6D11"),T&&(T.disabled=!1,T.style.opacity="1"),setTimeout(()=>window._hideStandMsg(),1500);else{const k={key:S,desc:`${g.nombre} — ${A.u} ×${l[S]}`,sub:A.p*l[S],vinoNombre:g.nombre,vinoId:g.fireId||g.id||g.nombre,unidad:A.u,precio:A.p,qty:l[S]};window._showStandMsg("⏳ Guardando...","#5BA4CF");const B=document.getElementById("add-msg");B.style.cssText="font-size:18px;color:#5BA4CF;text-align:center;padding:8px",await Zc(e.fireId,t.id,t.nombre,k,o);const L=g.fireId||g.id;a[L]!==void 0&&(a[L]=Math.max(0,a[L]-p)),document.getElementById("retiro-box").style.display="block",window._showStandMsg("✓ Carrito actualizado","#3B6D11"),T&&(T.disabled=!1,T.style.opacity="1"),setTimeout(()=>window._hideStandMsg(),1500),B.textContent="",B.style.cssText=""}},window._sRet=async u=>{o=u,document.getElementById("rb-stand").classList.toggle("sel",u==="stand"),await hs(e.fireId,t.id,u)},window._quitarItem=async u=>{await Gi(e.fireId,t.id,u);const[m,p]=u.split("_").map(Number);l[u]=0;const g=document.getElementById(`qv${m}_${p}`);g&&(g.textContent=0)}}window._abrirScannerStand=async()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="flex");const t=document.getElementById("scan-status-stand");try{window.jsQR||await new Promise((u,m)=>{const p=document.createElement("script");p.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",p.onload=u,p.onerror=m,document.head.appendChild(p)});const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),i=document.getElementById("scan-video-stand");i.srcObject=e,t&&(t.textContent="Buscando QR...");const o=document.createElement("canvas"),s=o.getContext("2d",{willReadFrequently:!0});let a=!0;const l=()=>{a=!1,e.getTracks().forEach(u=>u.stop())},d=()=>{if(a){if(i.readyState===i.HAVE_ENOUGH_DATA&&i.videoWidth>0){o.width=i.videoWidth,o.height=i.videoHeight,s.drawImage(i,0,0);const u=s.getImageData(0,0,o.width,o.height),m=window.jsQR(u.data,u.width,u.height,{inversionAttempts:"dontInvert"});if(m&&m.data){l(),window._cerrarScannerStand();const g=m.data.match(/inv=([A-Z0-9]+)/i),A=window.location.pathname.split("/")[2];g&&A&&(window.location.href="/stand/"+A+"?inv="+g[1]);return}}a&&requestAnimationFrame(d)}};i.addEventListener("loadeddata",()=>requestAnimationFrame(d))}catch{t&&(t.textContent="No se pudo acceder a la camara.")}};window._cerrarScannerStand=()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="none");const t=document.getElementById("scan-video-stand");t&&t.srcObject&&(t.srcObject.getTracks().forEach(e=>e.stop()),t.srcObject=null)};window._showStandMsg=(n,t)=>{const e=document.getElementById("stand-msg-modal"),i=document.getElementById("stand-msg-box");!e||!i||(i.textContent=n,i.style.color=t||"#1A3A5C",e.style.display="flex")};window._hideStandMsg=()=>{const n=document.getElementById("stand-msg-modal");n&&(n.style.display="none")};const ie=n=>Number(n).toLocaleString("es-AR");async function $m(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Go(n,t,e){const i=document.getElementById(e);i&&(i.textContent="Iniciando cámara..."),await $m();const o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),s=document.getElementById(n);if(!s)return o.getTracks().forEach(p=>p.stop()),null;s.srcObject=o;let a=!0;const l=document.createElement("canvas"),d=l.getContext("2d",{willReadFrequently:!0}),u=()=>{a=!1,o.getTracks().forEach(p=>p.stop())},m=()=>{if(a){if(s.readyState===s.HAVE_ENOUGH_DATA&&s.videoWidth>0){l.width=s.videoWidth,l.height=s.videoHeight,d.drawImage(s,0,0);const p=d.getImageData(0,0,l.width,l.height),g=window.jsQR(p.data,p.width,p.height,{inversionAttempts:"dontInvert"});if(g&&g.data){u(),t(g.data);return}}a&&requestAnimationFrame(m)}};return i&&(i.textContent="Buscando QR..."),s.addEventListener("loadeddata",()=>requestAnimationFrame(m)),u}function Qm(n,t){if(Wt(),!document.getElementById("sp-css")){const p=document.createElement("style");p.id="sp-css",p.textContent=`
      .tab-btn { border:none;border-radius:0;border-bottom:2px solid transparent;
        color:#888;padding:8px 14px;margin-bottom:-2px;background:none;
        font-size:12px;cursor:pointer;font-weight:400 }
      .tab-btn.active { border-bottom-color:#5BA4CF;color:#5BA4CF;font-weight:600 }
      .b-canc { background:#FEE2E2;color:#C0392B;border:1px solid #FCA5A5 }
      .sf-btn { font-size:11px }
      .sf-btn.active { background:#EAF3DE;color:#3B6D11;border-color:#3B6D11 }
    `,document.head.appendChild(p)}let e=[],i="pendientes",o=null,s=null;if(!document.getElementById("stand-header-style")){const p=document.createElement("style");p.id="stand-header-style",p.textContent=".hdr { background: linear-gradient(135deg, #2D6A4F, #3A7D44) !important; } .gold { background: linear-gradient(90deg, #C9A96E, #A8865A, #C9A96E) !important; }",document.head.appendChild(p)}n.innerHTML=kt({title:`🍷 ${t.nombre}`,sub:`Stand #${t.id} · Sucovi 2027`,actions:[`<button class="btn" onclick="sessionStorage.removeItem('stand-auth-${t.id}');location.reload()"
        style="font-size:11px;padding:5px 9px">Salir</button>`]})+`
    <!-- Tabs -->
    <div style="display:flex;border-bottom:2px solid #E8EFF5;overflow-x:auto;background:#fff">
      <button class="tab-btn active" id="tab-pedidos" onclick="window._setTab('pedidos')">📋 Pedidos</button>
      <button class="tab-btn" id="tab-carta" onclick="window._setTab('carta')">🍷 Mi carta</button>
      <button class="tab-btn" id="tab-resumen" onclick="window._setTab('resumen')">📊 Resumen</button>
      <button class="btn btn-b" style="font-size:11px;padding:5px 10px;margin-left:8px" onclick="window._imprimirQRDesdePanel()">🖨️ QR</button>
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
    </div>`,window._setTab=p=>{["pedidos","carta","resumen"].forEach(g=>{var S;(S=document.getElementById("tab-"+g))==null||S.classList.toggle("active",g===p);const A=document.getElementById("tab-content-"+g);A&&(A.style.display=g===p?"block":"none")}),p==="carta"&&d(),p==="resumen"&&u()},window._setSF=(p,g)=>{i=p,["sf-listos","sf-entr","sf-all","sf-log"].forEach(A=>{var S;(S=document.getElementById(A))==null||S.classList.remove("active")}),g.classList.add("active"),a()},td(t.id,p=>{e=p,a()});function a(){const p=document.getElementById("sp-pedidos");if(!p)return;let g=e;if(i==="pendientes"?g=e.filter(A=>(A.estado==="pagado"||A.estado==="listo")&&A.retiro!=="envio"):i==="entregados"?g=e.filter(A=>A.estado==="entregado"&&A.retiro!=="envio"):g=e.filter(A=>A.retiro!=="envio"),!g.length){const A={pendientes:"Sin pedidos listos 🎉",entregados:"Sin entregas todavía",todos:"Sin pedidos"};p.innerHTML=`<div class="empty">${A[i]||"Sin pedidos"}</div>`;return}p.innerHTML=g.map(A=>{const S=A.estado==="entregado";return`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${S?"#3A7D44":"#5BA4CF"}">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">
            <div>
              <div style="font-size:15px;font-weight:500;color:#1A3A5C">${A.invNombre||"Invitado"}</div>
              ${A.voucherNum?'<div style="font-size:10px;color:#5BA4CF;font-weight:500">VOC-'+String(A.voucherNum).padStart(3,"0")+"</div>":""}
              <div style="font-size:11px;color:#888">${A.invCodigo||""}</div>
            </div>
            <span class="badge ${S?"b-entr":"b-pago"}">${S?"✅ Entregado":"💳 Pagado"}</span>
          </div>
          ${(A.items||[]).map(C=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555">
              <span>${C.desc}</span><strong>$${ie(C.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Total</span><span>$${ie(A.total||0)}</span>
          </div>
          ${S?"":`
            <button class="btn btn-g" style="width:100%;margin-top:10px;padding:9px"
              onclick="window._scanearEsteRemito('${A.fireId}')">
              📷 Este remito
            </button>`}
        </div>`}).join("")}window._entregarPedido=async p=>{await sd(p)},window._scanearEsteRemito=async p=>{document.getElementById("scan-overlay-voucher").style.display="flex";const g=document.getElementById("scan-status-voucher");g&&(g.textContent="Escaneá el QR de este remito...");try{s=await Go("scan-video-voucher",A=>{window._cerrarScannerVoucher();const S=document.getElementById("voucher-modal"),C=document.getElementById("voucher-modal-content");A.includes(p)?C.innerHTML=`
            <div style="text-align:center;padding:8px 0 16px">
              <div style="font-size:48px;margin-bottom:8px">✅</div>
              <div style="font-size:18px;font-weight:700;color:#3A7D44;margin-bottom:4px">QR válido</div>
              <div style="font-size:14px;color:#555;margin-bottom:20px">¿Confirmás la entrega de este pedido?</div>
              <div style="display:flex;gap:10px;justify-content:center">
                <button onclick="document.getElementById('voucher-modal').style.display='none'"
                  style="padding:10px 20px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:14px;cursor:pointer">
                  Cancelar
                </button>
                <button onclick="marcarEntregado('${p}');document.getElementById('voucher-modal').style.display='none'"
                  style="padding:10px 20px;border-radius:8px;border:none;background:#3A7D44;color:#fff;font-size:14px;font-weight:600;cursor:pointer">
                  Confirmar entrega
                </button>
              </div>
            </div>`:C.innerHTML=`
            <div style="text-align:center;padding:8px 0 16px">
              <div style="font-size:48px;margin-bottom:8px">❌</div>
              <div style="font-size:18px;font-weight:700;color:#C0392B;margin-bottom:4px">QR no corresponde</div>
              <div style="font-size:14px;color:#555;margin-bottom:20px">Este QR no pertenece al remito seleccionado.</div>
              <button onclick="document.getElementById('voucher-modal').style.display='none'"
                style="padding:10px 24px;border-radius:8px;border:none;background:#1A3A5C;color:#fff;font-size:14px;font-weight:600;cursor:pointer">
                Cerrar
              </button>
            </div>`,S.style.display="flex"},"scan-status-voucher")}catch{g&&(g.textContent="No se pudo acceder a la cámara.")}},window._listoParaLogistica=async p=>{await id(p)};let l={};yo(p=>{l={},p.filter(g=>Number(g.standId)===Number(t.id)).forEach(g=>{l[g.vinoId]=Math.max(0,(g.total||0)-(g.degustacion||0)-(g.reservado||0)-(g.pagado||0)-(g.entregado||0))}),document.getElementById("sp-carta")&&d()});function d(){const p=document.getElementById("sp-carta");p&&(p.innerHTML='<div class="empty">Cargando...</div>',si(t.id,g=>{if(!g.length){p.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}p.innerHTML=g.map(A=>{const S=l[A.fireId||A.id],C=S!==void 0?'<span style="font-size:12px;font-weight:500;color:'+(S===0?"#C0392B":S<=3?"#D97706":"#3A7D44")+';margin-left:8px">('+S+" disp.)</span>":"";return'<div class="card" style="margin-bottom:10px"><div style="font-size:17px;font-weight:600;color:#1A3A5C">'+A.nombre+C+'</div><div style="font-size:14px;color:#666;margin-top:2px">'+(A.varietal||"")+(A.cosecha?" · "+A.cosecha:"")+"</div>"+(A.descripcion?'<div style="font-size:13px;color:#888;margin-top:3px">'+A.descripcion+"</div>":"")+'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">'+(A.unidades||[]).map(T=>'<span style="background:#EBF4FA;color:#1A3A5C;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:500">'+T.u+": $"+ie(T.p)+"</span>").join("")+"</div></div>"}).join("")}))}function u(){const p=document.getElementById("sp-resumen");if(!p)return;const g=e.filter(R=>R.estado!=="reembolsado"&&R.estado!=="cancelado"),A=g.filter(R=>R.estado==="entregado"&&R.retiro!=="envio"),S=g.filter(R=>(R.estado==="pagado"||R.estado==="listo")&&R.retiro!=="envio"),C=g.filter(R=>R.retiro==="envio"),T=A.reduce((R,E)=>R+(E.total||0),0),V=S.reduce((R,E)=>R+(E.total||0),0),k=g.reduce((R,E)=>R+(E.total||0),0),B={};A.forEach(R=>(R.items||[]).forEach(E=>{const v=E.vinoNombre+" — "+E.unidad;B[v]||(B[v]={cant:0,total:0}),B[v].cant+=E.qty||1,B[v].total+=E.sub||0}));const L=Object.entries(B).sort((R,E)=>E[1].total-R[1].total);p.innerHTML=`
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
        <div class="stat"><div class="v" style="color:#3A7D44">$${ie(T)}</div><div class="l">Entregado</div></div>
        <div class="stat"><div class="v" style="color:#D97706">$${ie(V)}</div><div class="l">Por entregar</div></div>
        <div class="stat"><div class="v">$${ie(k)}</div><div class="l">Total vendido</div></div>
        ${C.length?`<div class="stat" style="grid-column:1/-1"><div class="v" style="color:#5BA4CF;font-size:14px">${C.length} pedido${C.length>1?"s":""} de envío a domicilio</div><div class="l">Manejados por logística</div></div>`:""}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Detalle por vino (entregados)</p>
        ${L.length?L.map(([R,E])=>`
          <div style="display:flex;justify-content:space-between;padding:6px 0;
            border-bottom:.5px solid #E8EFF5;font-size:12px">
            <span style="flex:1">${R}</span>
            <span style="color:#888;margin:0 8px">${E.cant} u.</span>
            <span style="font-weight:500">$${ie(E.total)}</span>
          </div>`).join(""):'<div style="color:#aaa;font-size:12px;padding:8px 0">Sin entregas todavía</div>'}
      </div>`}window._abrirScannerInv=async()=>{document.getElementById("scan-overlay-inv").style.display="flex";try{o=await Go("scan-video-inv",p=>{window._cerrarScannerInv();const g=p.match(/inv=([A-Z0-9]+)/i);g?window.location.href="/stand/"+t.id+"?inv="+g[1]:document.getElementById("scan-status-inv").textContent="QR no reconocido — usá el QR personal del invitado"},"scan-status-inv")}catch{document.getElementById("scan-status-inv").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerInv=()=>{o&&(o(),o=null),document.getElementById("scan-overlay-inv").style.display="none"},window._abrirScannerVoucher=async()=>{document.getElementById("scan-overlay-voucher").style.display="flex";try{s=await Go("scan-video-voucher",p=>{window._cerrarScannerVoucher();const g=e.find(A=>p.includes(A.fireId));g?m(g):document.getElementById("scan-status-voucher").textContent="Voucher no reconocido"},"scan-status-voucher")}catch{document.getElementById("scan-status-voucher").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerVoucher=()=>{s&&(s(),s=null),document.getElementById("scan-overlay-voucher").style.display="none"};function m(p){const g=p.estado==="entregado";document.getElementById("voucher-modal-content").innerHTML=`
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:36px">${g?"✅":"⏳"}</div>
        <h3 style="font-size:16px;font-weight:500;color:${g?"#3B6D11":"#854F0B"};margin-top:6px">
          ${g?"PAGADO — Entregar":"PENDIENTE — No entregar"}
        </h3>
      </div>
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${p.invNombre||""}</div>
      <div style="font-size:12px;color:#888;margin-bottom:10px">${p.invCodigo||""}</div>
      ${(p.items||[]).map(A=>`
        <div style="display:flex;justify-content:space-between;font-size:13px;
          padding:5px 0;border-bottom:.5px solid #E8EFF5">
          <span>${A.desc}</span><strong>$${ie(A.sub)}</strong>
        </div>`).join("")}
      <div style="display:flex;justify-content:space-between;font-size:15px;
        font-weight:500;margin-top:10px;margin-bottom:14px">
        <span>Total</span><span>$${ie(p.total||0)}</span>
      </div>
      ${g?"":`
        <button class="btn btn-g" style="width:100%;padding:11px;font-size:14px"
          onclick="window._entregarPedido('${p.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>`}
      <button class="btn" style="width:100%;margin-top:8px"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`,document.getElementById("voucher-modal").style.display="flex"}}window._imprimirQRDesdePanel=async()=>{var A;const t=window.location.pathname.split("/")[2],i=window.location.origin+"/stand/"+t;window.qrcode||await new Promise((S,C)=>{const T=document.createElement("script");T.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",T.onload=S,T.onerror=C,document.head.appendChild(T)});const o=window.qrcode(0,"M");o.addData(i),o.make();const s=o.getModuleCount(),a=400,l=a/s,d=document.createElement("canvas");d.width=a,d.height=a;const u=d.getContext("2d");u.fillStyle="#fff",u.fillRect(0,0,a,a),u.fillStyle="#000";for(let S=0;S<s;S++)for(let C=0;C<s;C++)o.isDark(S,C)&&u.fillRect(C*l,S*l,l,l);const m=d.toDataURL("image/png"),p=window.open("","_blank"),g=((A=document.querySelector(".header-title"))==null?void 0:A.textContent)||"Stand";p.document.write('<html><head><title>QR Stand</title><style>body{font-family:system-ui;display:flex;align-items:center;justify-content:center;min-height:100vh}.card{border:3px solid #1A3A5C;border-radius:16px;padding:32px;text-align:center;max-width:400px}img{width:300px;height:300px}@media print{body{min-height:auto}}</style></head><body><div class="card"><div style="font-size:12px;color:#888;margin-bottom:12px">SUCOVI 2027 · VOUCHER DE RETIRO</div><div style="font-size:28px;font-weight:700;color:#1A3A5C;margin-bottom:20px">'+g+'</div><img src="'+m+'"><div style="font-size:14px;color:#444;margin-top:16px">Escaneá para ver la carta y hacer tu pedido</div></div><script>setTimeout(()=>window.print(),500)<\/script></body></html>'),p.document.close()};const Wm=n=>Number(n).toLocaleString("es-AR");function bd(n,t){if(Wt(),!sessionStorage.getItem("bodega-auth-"+t.id)){n.innerHTML=`
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
      </div>`,window._loginBodega=()=>{document.getElementById("bp").value.trim()===t.pass?(sessionStorage.setItem("bodega-auth-"+t.id,"1"),bd(n,t)):document.getElementById("bp-err").textContent="Contraseña incorrecta"};return}let i=[],o=null;n.innerHTML=`
    ${kt({title:"🍷 "+t.nombre,sub:"Carga de carta · Stand #"+t.id,actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('bodega-auth-${t.id}');location.reload()">Salir</button>`]})}
    <div style="max-width:600px;margin:0 auto;padding:14px">
      <div class="card" style="margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:12px"
          id="form-titulo">Agregar vino</p>
        ${[["vn","Nombre del vino *","text","Ej: Gran Malbec 2022"],["vv","Varietal / Blend","text","Ej: Malbec"],["vc","Cosecha","number","2022"],["vd","Descripción corta","text","Tinto con notas de..."],["vb","Precio botella ($)","number",""],["v6","Precio caja x6 ($)","number",""],["v12","Precio caja x12 ($)","number",""],["vs","Stock inicial (botellas) — opcional","number",""]].map(([l,d,u,m])=>`
          <div style="margin-bottom:8px">
            <label style="font-size:11px;color:#666">${d}</label>
            <input id="${l}" type="${u}" placeholder="${m}" style="margin-top:3px">
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
              ${(u.unidades||[]).map(m=>`<span style="font-size:12px;background:#f5f0eb;padding:2px 8px;
                  border-radius:6px;color:#6B1C1C">
                  ${m.u}: $${Wm(m.p)}
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
      </div>`).join("")}});const s=["vn","vv","vc","vd","vb","v6","v12"],a=()=>{s.forEach(l=>{const d=document.getElementById(l);d&&(d.value="")})};window._guardarV=async()=>{var C;const l=document.getElementById("vn").value.trim(),d=document.getElementById("vm");if(!l){d.innerHTML='<span style="color:#A32D2D">El nombre es requerido.</span>';return}const u=parseFloat(document.getElementById("vb").value),m=parseFloat(document.getElementById("v6").value),p=parseFloat(document.getElementById("v12").value),g=[];if(u&&g.push({u:"Botella",p:u}),m&&g.push({u:"Caja x6",p:m}),p&&g.push({u:"Caja x12",p}),!g.length){d.innerHTML='<span style="color:#A32D2D">Ingresá al menos un precio.</span>';return}const A=parseInt((C=document.getElementById("vs"))==null?void 0:C.value)||0,S={nombre:l,varietal:document.getElementById("vv").value.trim(),cosecha:document.getElementById("vc").value.trim(),descripcion:document.getElementById("vd").value.trim(),unidades:g};d.innerHTML='<span style="color:#888">Guardando...</span>';try{if(o){if(await ld(t.id,o,S),A>0){const T=await sn(()=>Promise.resolve().then(()=>Kn),void 0).then(B=>B.getStockDoc(t.id,o)),V=T?T.total:0,k=A-V;k!==0&&await Ki(t.id,o,k,S.nombre)}o=null}else{const T=await ad(t.id,S);A>0&&T&&await Ki(t.id,T,A,S.nombre)}a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none",d.innerHTML='<span style="color:#3B6D11">✓ Guardado correctamente</span>',setTimeout(()=>{const T=document.getElementById("vm");T&&(T.innerHTML="")},3e3)}catch(T){d.innerHTML=`<span style="color:#A32D2D">Error: ${T.message}</span>`}},window._editarV=async l=>{const d=i.find(g=>g.fireId===l);if(!d)return;try{const{getStockDoc:g}=await sn(async()=>{const{getStockDoc:C}=await Promise.resolve().then(()=>Kn);return{getStockDoc:C}},void 0),A=await g(t.id,l),S=document.getElementById("vs");S&&A&&(S.value=A.total||"")}catch{}o=l,document.getElementById("form-titulo").textContent=`Editando: ${d.nombre}`,document.getElementById("vn").value=d.nombre||"",document.getElementById("vv").value=d.varietal||"",document.getElementById("vc").value=d.cosecha||"",document.getElementById("vd").value=d.descripcion||"";const u=(d.unidades||[]).find(g=>g.u==="Botella"),m=(d.unidades||[]).find(g=>g.u==="Caja x6"),p=(d.unidades||[]).find(g=>g.u==="Caja x12");document.getElementById("vb").value=(u==null?void 0:u.p)||"",document.getElementById("v6").value=(m==null?void 0:m.p)||"",document.getElementById("v12").value=(p==null?void 0:p.p)||"",document.getElementById("btn-cancelar-edit").style.display="block",window.scrollTo({top:0,behavior:"smooth"})},window._cancelarEdit=()=>{o=null,a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none"},window._eliminarV=async l=>{const d=i.find(u=>u.fireId===l);confirm(`¿Eliminar "${d==null?void 0:d.nombre}"?`)&&await cd(t.id,l)}}async function Gm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Km(n){Wt();let t=[],e=[],i=null,o=null,s=!1;n.innerHTML=kt({title:"🚪 Control de puerta",sub:"Solo ingresa quien tiene bono pagado",backHref:"/admin"})+`
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
    </div>`,mo(l=>{t=l,a()}),window._vPuerta=async()=>{var p;const l=document.getElementById("scan-cod").value.trim().toUpperCase(),d=document.getElementById("scan-res");if(!l)return;const u=t.find(g=>g.codigo===l);if(!u){d.innerHTML=`<div class="result-err">
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
      </div>`;return}i=u;const m=u.nombre[0]+(((p=u.apellido)==null?void 0:p[0])||"");document.getElementById("mc-avatar").textContent=m,document.getElementById("mc-nombre").textContent=u.nombre+" "+u.apellido,document.getElementById("mc-codigo").textContent=l+(u.familia?" · Familia "+u.familia:""),document.getElementById("mc-estado").innerHTML='<span class="badge b-pago">✅ Bono confirmado</span>',document.getElementById("modal-confirm").style.display="flex"},window._confirmarIngreso=async()=>{if(!i)return;document.getElementById("modal-confirm").style.display="none";const l=i;i=null,await Ve(l.fireId,{estado:"ingresado"});const d=new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});e.unshift({nombre:l.nombre+" "+l.apellido,codigo:l.codigo,hora:d}),document.getElementById("scan-res").innerHTML=`<div class="result-ok">
      <p style="font-size:20px;font-weight:500;color:#1A3A5C">✅ ¡Bienvenido/a!</p>
      <p style="font-size:16px;margin-top:6px">${l.nombre} ${l.apellido}</p>
      <p style="font-size:13px;color:#3B6D11;margin-top:4px">${l.codigo} · ${d}</p>
    </div>`,document.getElementById("scan-cod").value="",a()},window._cobrarPuerta=async(l,d)=>{await Ve(l,{estado:"pagado"}),document.getElementById("scan-cod").value=d,window._vPuerta()};function a(){const l=document.getElementById("historial-puerta");if(!l)return;const d=t.filter(u=>u.estado==="ingresado");if(!d.length&&!e.length){l.innerHTML='<p style="font-size:12px;color:#aaa;text-align:center">ÚLTIMOS INGRESOS — Sin ingresos todavía</p>';return}l.innerHTML=`
      <p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">
        INGRESOS AL EVENTO (${d.length})
      </p>
      ${d.slice(0,50).map(u=>{var m;return`
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;
          border-bottom:.5px solid #E8EFF5">
          <div class="avatar" style="width:32px;height:32px;font-size:11px;flex-shrink:0">
            ${u.nombre[0]}${((m=u.apellido)==null?void 0:m[0])||""}
          </div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:500">${u.nombre} ${u.apellido}</div>
            <div style="font-size:11px;color:#888">${u.codigo}</div>
          </div>
          <span style="font-size:11px;color:#3A7D44;font-weight:500">✅ Ingresó</span>
        </div>`}).join("")}
    `}window._abrirScannerPuerta=async()=>{const l=document.getElementById("scan-overlay-puerta");l.style.display="flex";const d=document.getElementById("scan-status-puerta");try{await Gm(),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const u=document.getElementById("scan-video-puerta");u.srcObject=o,s=!0,d&&(d.textContent="Buscando QR...");const m=document.createElement("canvas"),p=m.getContext("2d",{willReadFrequently:!0}),g=()=>{if(s){if(u.readyState===u.HAVE_ENOUGH_DATA&&u.videoWidth>0){m.width=u.videoWidth,m.height=u.videoHeight,p.drawImage(u,0,0);const A=p.getImageData(0,0,m.width,m.height),S=window.jsQR(A.data,A.width,A.height,{inversionAttempts:"dontInvert"});if(S&&S.data){const C=S.data;window._cerrarScannerPuerta();const T=C.match(/INV-\d+/),V=C.match(/inv=([A-Z0-9]+)/i);T?(document.getElementById("scan-cod").value=T[0],window._vPuerta()):V&&Gn(V[1]).then(k=>{k?(document.getElementById("scan-cod").value=k.codigo,window._vPuerta()):d&&(d.textContent="Invitado no encontrado")});return}}s&&requestAnimationFrame(g)}};u.addEventListener("loadeddata",()=>requestAnimationFrame(g))}catch{d&&(d.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerPuerta=()=>{s=!1,o&&(o.getTracks().forEach(d=>d.stop()),o=null);const l=document.getElementById("scan-overlay-puerta");l&&(l.style.display="none")}}const Ko=n=>Number(n).toLocaleString("es-AR");function Xm(n){Wt();let t=[],e=null;n.innerHTML=kt({title:"🚚 Logística — Envíos",sub:"Pedidos para enviar a domicilio",backHref:"/admin"})+'<div class="wrap" id="log-body"></div>',go(o=>{t=o,e||i()});function i(){const o=document.getElementById("log-body");if(!o)return;e=null;const s=t.filter(p=>p.retiro==="envio");if(!s.length){o.innerHTML='<div class="empty">🚚<br><br>Sin pedidos de envío</div>';return}const a=s.filter(p=>p.estado==="pagado"||p.estado==="listo"),l=s.filter(p=>p.estado==="retirado"),d=s.filter(p=>p.estado==="entregado"),u=s.filter(p=>p.estado==="reembolsado"||p.estado==="cancelado"),m=(p,g,A)=>{var S;return`
      <div class="card" style="margin-bottom:10px;border-left:4px solid ${g};cursor:pointer"
        onclick="window._verDetalleLog('${p.fireId}')">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
          <div>
            <div style="font-size:14px;font-weight:500;color:#1A3A5C">${p.invNombre||""}</div>
            <div style="font-size:11px;color:#888">${p.standNombre} · #${(S=p.fireId)==null?void 0:S.slice(-4).toUpperCase()}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:14px;font-weight:500">$${Ko(p.total||0)}</div>
            <div style="font-size:10px;color:#888">Ver detalle ›</div>
          </div>
        </div>
        ${p.envio?`<div style="font-size:12px;color:#5A1E99;background:#EDE6FB;
          border-radius:6px;padding:6px 8px">
          📍 ${p.envio.calle||""} ${p.envio.numero||""}, ${p.envio.localidad||p.envio.dir||""}, ${p.envio.provincia||""}
        </div>`:""}
      </div>`};o.innerHTML="",a.length&&(o.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:8px;letter-spacing:.05em">
        POR RETIRAR DEL STAND (${a.length})</p>`,o.innerHTML+=a.map(p=>m(p,"#D97706")).join("")),l.length&&(o.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#5BA4CF;margin:14px 0 8px;letter-spacing:.05em">
        RETIRADOS — EN CAMINO (${l.length})</p>`,o.innerHTML+=l.map(p=>m(p,"#5BA4CF")).join("")),d.length&&(o.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#3A7D44;margin:14px 0 8px;letter-spacing:.05em">
        ENTREGADOS (${d.length})</p>`,o.innerHTML+=d.map(p=>m(p,"#3A7D44")).join("")),u.length&&(o.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#C0392B;margin:14px 0 8px;letter-spacing:.05em">
        REEMBOLSADOS (${u.length})</p>`,o.innerHTML+=u.map(p=>m(p,"#C0392B")).join(""))}window._verDetalleLog=o=>{e=o;const s=t.find(m=>m.fireId===o);if(!s)return;const a=document.getElementById("log-body");if(!a)return;const l=s.envio||{},d={pagado:{label:"💳 Pagado — Pendiente de retiro",color:"#D97706",badge:"b-pend"},listo:{label:"✅ Listo para retirar",color:"#D97706",badge:"b-list"},retirado:{label:"📦 Retirado del stand",color:"#5BA4CF",badge:"b-pago"},entregado:{label:"🏠 Entregado a domicilio",color:"#3A7D44",badge:"b-entr"},reembolsado:{label:"↩️ Reembolsado",color:"#C0392B",badge:"b-canc"},cancelado:{label:"❌ Cancelado",color:"#C0392B",badge:"b-canc"}},u=d[s.estado]||d.pagado;a.innerHTML=`
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

        ${(s.items||[]).map(m=>`
          <div style="display:flex;justify-content:space-between;font-size:13px;
            padding:5px 0;border-bottom:.5px solid #E8EFF5;color:#555">
            <span>${m.desc}</span><strong>$${Ko(m.sub)}</strong>
          </div>`).join("")}

        <div style="display:flex;justify-content:space-between;font-size:15px;
          font-weight:500;margin-top:10px;color:#1A3A5C">
          <span>Total</span><span>$${Ko(s.total||0)}</span>
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
        onclick="window._volverLog()">Volver a la lista</button>`},window._retirarStand=async o=>{await od(o),window._verDetalleLog(o)},window._entregarDom=async o=>{await rd(o),window._verDetalleLog(o)},window._volverLog=()=>{e=null,i()}}async function wd(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Jm(n,t,e){await wd();const i=document.getElementById(n);if(i)try{const o=window.qrcode(0,"M");o.addData(String(t)),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let u=0;u<s;u++)o.isDark(d,u)&&l.fillRect(u*a,d*a,a,a)}catch(o){console.error("QR error:",o)}}async function Zm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Ym(n,t){Wt(),n.innerHTML=Bi(null)+`<div style="text-align:center;padding:40px 16px">
    <div style="font-size:13px;color:#aaa">Cargando...</div></div>`;const e=await Gn(t);if(!e){yl(n,"Token inválido","El link no es válido o expiró.");return}if(e.estado==="invalidado"){yl(n,"Acceso invalidado","Este bono fue invalidado. Consultá con la organización.");return}if(e.estado==="pendiente"){n.innerHTML=Bi(e)+`
      <div style="max-width:400px;margin:40px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">Pago pendiente</h2>
        <p style="font-size:14px;color:#666;line-height:1.6">
          Tu bono aún no fue confirmado. Una vez que abones los $35.000 recibirás tu QR de acceso.
        </p>
        <p style="font-size:12px;color:#aaa;margin-top:16px">Consultas: José Pannunzio +54 9 11 5400-1313</p>
      </div>`;return}let i=[],o=null,s=!1;const a=qt.map(p=>`
    <a href="/stand/${p.id}?inv=${t}"
      style="display:flex;align-items:center;gap:8px;background:#fff;
        border:0.5px solid #D6E4F0;border-radius:8px;padding:8px 10px;
        text-decoration:none;color:inherit">
      <div style="width:28px;height:28px;border-radius:50%;background:#EBF4FA;
        color:#1A3A5C;font-size:11px;font-weight:500;display:flex;
        align-items:center;justify-content:center;flex-shrink:0">${p.id}</div>
      <div style="min-width:0;flex:1">
        <div style="font-size:12px;font-weight:500;color:#1A3A5C;
          white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.nombre}</div>
        <div style="font-size:10px;color:#888">${p.region||""}</div>
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
      <p id="stands-section" style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">IR A UN STAND</p>
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
    </div>`,setTimeout(()=>Jm("qr-acc",e.codigo,160),50),ed(e.fireId,p=>{i=p;const g=document.getElementById("btn-mis-pedidos");g&&(g.style.display=p.length?"flex":"none",p.length&&(g.textContent="📋 Mis pedidos ("+p.length+")"));const A=document.getElementById("mis-pedidos-sec");A&&A.style.display!=="none"&&l()}),window._togglePedidos=()=>{const p=document.getElementById("mis-pedidos-sec");p&&(p.style.display=p.style.display==="none"?"block":"none",p.style.display==="block"&&l())};async function l(){const p=document.getElementById("mis-pedidos-sec");if(!p||p.style.display==="none")return;if(!i.length){p.innerHTML='<div class="empty">Sin pedidos pagados todavía</div>';return}await wd();const g=A=>Number(A).toLocaleString("es-AR");p.innerHTML=i.map(A=>{const S=A.retiro==="envio",C=A.estado==="entregado",T=A.estado==="reembolsado"||A.estado==="cancelado",V=C?"#f5f5f5":T?"#FEE2E2":S?"#EBF4FA":"#EAF3DE",k=C?"#ddd":T?"#FCA5A5":S?"#5BA4CF":"#3B6D11",B=C?"✅ Entregado":T?"↩️ Reembolsado":S?"🚚 Envío a domicilio":"🟢 Listo para retirar",L=(A.items||[]).map(E=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid rgba(0,0,0,.08);color:#555"><span>'+E.desc+"</span><strong>$"+g(E.sub)+"</strong></div>").join(""),R="vq-"+A.fireId;return'<div style="background:'+V+";border:.5px solid "+k+';border-radius:10px;padding:14px;margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:14px;font-weight:500;color:#1A3A5C">'+A.standNombre+'</div><div style="font-size:11px;color:#888">Stand #'+A.standId+(A.voucherNum?" · VOC-"+String(A.voucherNum).padStart(3,"0"):"")+'</div></div><span style="font-size:11px;font-weight:500">'+B+"</span></div>"+L+'<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$'+g(A.total||0)+"</span></div>"+(!C&&!T&&!S?'<div style="margin-top:12px;text-align:center"><canvas id="'+R+'" style="border-radius:8px;display:block;margin:0 auto"></canvas><div style="font-size:11px;color:#888;margin-top:4px">Mostrá este QR en el stand para retirar</div></div>':"")+(S&&!C&&!T?'<div style="font-size:12px;color:#185FA5;margin-top:8px;text-align:center">Tu pedido será enviado a domicilio. Logística te lo hará llegar.</div>':"")+"</div>"}).join(""),i.forEach(A=>{if(A.retiro==="envio"||A.estado==="entregado"||A.estado==="reembolsado"||A.estado==="cancelado")return;const S=document.getElementById("vq-"+A.fireId);if(!(!S||!window.qrcode))try{const C=window.qrcode(0,"M");C.addData(A.fireId),C.make();const T=C.getModuleCount(),V=220,k=V/T;S.width=V,S.height=V;const B=S.getContext("2d");B.fillStyle="#fff",B.fillRect(0,0,V,V),B.fillStyle="#000";for(let L=0;L<T;L++)for(let R=0;R<T;R++)C.isDark(L,R)&&B.fillRect(R*k,L*k,k,k)}catch{}})}window._abrirScannerAcceso=async()=>{const p=document.getElementById("scan-overlay-acc");p&&(p.style.display="flex");const g=document.getElementById("scan-status-acc");try{await Zm(),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const A=document.getElementById("scan-video-acc");A.srcObject=o,s=!0,g&&(g.textContent="Buscando QR del stand...");const S=document.createElement("canvas"),C=S.getContext("2d",{willReadFrequently:!0}),T=()=>{if(s){if(A.readyState===A.HAVE_ENOUGH_DATA&&A.videoWidth>0){S.width=A.videoWidth,S.height=A.videoHeight,C.drawImage(A,0,0);const V=C.getImageData(0,0,S.width,S.height),k=window.jsQR(V.data,V.width,V.height,{inversionAttempts:"dontInvert"});if(k&&k.data){const B=k.data;window._cerrarScannerAcceso();const L=B.match(/\/stand\/(\d+)/);L&&(window.location.href="/stand/"+L[1]+"?inv="+t);return}}s&&requestAnimationFrame(T)}};A.addEventListener("loadeddata",()=>requestAnimationFrame(T))}catch{g&&(g.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerAcceso=()=>{s=!1,o&&(o.getTracks().forEach(g=>g.stop()),o=null);const p=document.getElementById("scan-overlay-acc");p&&(p.style.display="none")};let d=[],u="";window._abrirRecomendador=()=>{d=[],u="",document.getElementById("modal-ia").style.display="flex",document.getElementById("ia-respuesta").style.display="none",document.getElementById("ia-input").value=""},window._pedirRecomendacion=async()=>{var C,T;const p=document.getElementById("ia-input").value.trim();if(!p)return;const g=document.getElementById("ia-input"),A=document.querySelector('#modal-ia button[onclick*="pedirRecomendacion"]'),S=document.getElementById("ia-respuesta");if(g.disabled=!0,A&&(A.disabled=!0,A.style.opacity="0.6"),d.push({role:"user",content:p}),g.value="",S.style.display="block",S.innerHTML=m(d)+'<div id="ia-typing" style="color:#9333EA;margin-top:8px">✨ Pensando...</div>',S.scrollTop=S.scrollHeight,!u){let V=[],k=0;await new Promise(L=>{qt.forEach(R=>{si(R.id,E=>{E.forEach(v=>V.push({stand:R.id,bodega:R.nombre,region:R.region||"",vino:v.nombre,varietal:v.varietal||"",descripcion:v.descripcion||"",precios:(v.unidades||[]).map(f=>f.u+": $"+Number(f.p).toLocaleString("es-AR")).join(", ")})),k++,k===qt.length&&L()})})});const B=V.length>0?V.map(L=>"Stand #"+L.stand+" - "+L.bodega+" ("+L.region+"): "+L.vino+(L.varietal?" - "+L.varietal:"")+(L.descripcion?" - "+L.descripcion:"")+" | "+L.precios).join(`
`):"No hay vinos cargados aún.";u="Sos un sommelier experto en vinos argentinos en la Feria de Vinos SUCOVI 2027 en Olivos. El invitado se llama "+e.nombre+`. Esta es la carta completa de vinos disponibles esta noche:

`+B+`

Recomendá vinos específicos de la carta. Para cada uno mencioná el Stand #, la bodega, el vino y por qué lo recomendás. Mantené el hilo de la conversación. Sé breve, cálido y entusiasta. Respondé siempre en español rioplatense.`}try{const B=((T=(C=(await(await fetch("/api/recommend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:u,messages:d})})).json()).content)==null?void 0:C[0])==null?void 0:T.text)||"No pude generar una recomendación.";d.push({role:"assistant",content:B}),S.innerHTML=m(d),S.scrollTop=S.scrollHeight}catch{d.pop(),S.innerHTML=m(d)+'<div style="color:red;margin-top:8px">Error al conectar. Intentá de nuevo.</div>'}finally{g.disabled=!1,A&&(A.disabled=!1,A.style.opacity="1"),g.focus()}};function m(p){return p.map(g=>{const A=g.role==="user",S=g.content.replace(/\n/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");return A?'<div style="text-align:right;margin-bottom:10px"><span style="background:#9333EA;color:#fff;padding:8px 12px;border-radius:16px 16px 4px 16px;display:inline-block;max-width:85%">'+S+"</span></div>":'<div style="text-align:left;margin-bottom:10px"><span style="background:#f3e8ff;color:#1a1a1a;padding:8px 12px;border-radius:16px 16px 16px 4px;display:inline-block;max-width:85%">'+S+"</span></div>"}).join("")}}function yl(n,t,e){n.innerHTML=Bi(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
      <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${t}</h2>
      <p style="font-size:14px;color:#666">${e}</p>
      <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>
    </div>`}async function tg(n,t,e){window.qrcode||await new Promise((d,u)=>{const m=document.createElement("script");m.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",m.onload=d,m.onerror=u,document.head.appendChild(m)});const i=document.getElementById(n);if(!i)return;const o=window.qrcode(0,"M");o.addData(t),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let u=0;u<s;u++)o.isDark(d,u)&&l.fillRect(u*a,d*a,a,a)}window._imprimirQRStand=async(n,t,e,i)=>{window.qrcode||await new Promise((g,A)=>{const S=document.createElement("script");S.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",S.onload=g,S.onerror=A,document.head.appendChild(S)});const o=window.qrcode(0,"M");o.addData(i),o.make();const s=o.getModuleCount(),a=400,l=a/s,d=document.createElement("canvas");d.width=a,d.height=a;const u=d.getContext("2d");u.fillStyle="#fff",u.fillRect(0,0,a,a),u.fillStyle="#000";for(let g=0;g<s;g++)for(let A=0;A<s;A++)o.isDark(g,A)&&u.fillRect(A*l,g*l,l,l);const m=d.toDataURL("image/png"),p=window.open("","_blank");p.document.write(`<!DOCTYPE html><html><head>
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
      <img src="${m}" class="qr-img" alt="QR Stand">
      <div class="instruccion">
        Escaneá este código con tu celular<br>para ver la carta y hacer tu pedido
      </div>
    </div>
    <script>setTimeout(() => { window.print() }, 500)<\/script>
  </body></html>`),p.document.close()};function vl(n){Wt();const t=window.location.origin;n.innerHTML=kt({title:"🍷 SUCOVI 2027",sub:"Panel de organización — Stands"})+`
    <div class="wrap">
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>Vista cliente:</strong> para cargar pedidos de invitados.<br>
        <strong>Panel:</strong> para ver pedidos y marcar entregas con QR.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${qt.filter(e=>!e.oculto).map(e=>`
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
    </div>`,qt.forEach(e=>setTimeout(()=>tg("org-qr-"+e.id,t+"/stand/"+e.id,110),50))}const Xo=n=>Number(n).toLocaleString("es-AR");function eg(n,t){if(Wt(),!t||t.estado==="invalidado"){n.innerHTML=`
      <div class="hdr"><div><h1>🛒 Carrito</h1></div></div>
      <div class="gold"></div>
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <p style="font-size:14px;color:#666">Necesitás tu QR de acreditación para ver el carrito.</p>
      </div>`;return}let e=[];n.innerHTML=`
    ${kt({title:"🛒 Mi carrito",sub:t.nombre+" "+t.apellido+" · "+t.codigo,backHref:"/acceso?inv="+t.token,backLabel:"← Mi QR",backStyle:"background:#A32D2D;color:#fff;border-color:#A32D2D"})}
    <div style="max-width:480px;margin:0 auto;padding:14px" id="carrito-body">
      <div class="empty">Cargando carrito...</div>
    </div>`,ps(t.fireId,o=>{e=o,i()});function i(){const o=document.getElementById("carrito-body");if(!o)return;if(!e.length||!e.some(a=>{var l;return(l=a.items)==null?void 0:l.length})){o.innerHTML=`
        <div class="empty" style="padding:48px 20px">
          <div style="font-size:48px;margin-bottom:12px">🛒</div>
          <p style="font-size:15px;font-weight:500;margin-bottom:8px">Tu carrito está vacío</p>
          <p style="font-size:13px;color:#aaa">
            Escaneá el QR de cualquier stand para agregar vinos.
          </p>
        </div>`;return}const s=e.reduce((a,l)=>a+(l.items||[]).reduce((d,u)=>d+(u.sub||0),0),0);o.innerHTML=`
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
                <span style="font-size:13px;font-weight:500">$${Xo(l.sub)}</span>
                <button onclick="window._quitarCarrito('${a.standDocId}','${l.key}')"
                  style="border:none;background:none;color:#A32D2D;cursor:pointer;
                  font-size:14px;padding:0 4px;font-weight:500">✕</button>
              </div>
            </div>`).join("")}

          <div style="margin-top:10px">
            <p style="font-size:11px;color:#666;font-weight:500;margin-bottom:6px">
              Retiro de ${a.standNombre}:
            </p>
            <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:#f0f4f8;border-radius:8px;border:1px solid #D6E4F0">
              <span style="font-size:16px">🍷</span>
              <div>
                <div style="font-size:12px;font-weight:600;color:#1A3A5C">Retiro en stand</div>
                <div style="font-size:11px;color:#888">Pasá a buscar tus vinos al stand de ${a.standNombre}</div>
              </div>
            </div>
          </div>

          <div style="display:flex;justify-content:space-between;font-size:13px;
            font-weight:500;margin-top:6px;padding-top:6px;border-top:.5px solid #e0d5c8">
            <span>Subtotal ${a.standNombre}</span>
            <span>$${Xo((a.items||[]).reduce((l,d)=>l+(d.sub||0),0))}</span>
          </div>
        </div>`).join("")}

      <a href="/acceso?inv=${t.token}#stands-section"
        style="display:flex;align-items:center;justify-content:center;gap:8px;
          background:#1A3A5C;color:#fff;border-radius:8px;
          padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-bottom:8px">
        🛍️ Seguir comprando
      </a>
      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>Total</span>
          <span style="color:#6B1C1C">$${Xo(s)}</span>
        </div>
        <p style="font-size:12px;color:#888;margin-top:6px">
          Llevá este carrito a caja para pagar. El cajero escanea tu código y ve todo.
        </p>
      </div>

      <div style="background:#E6F1FB;border:.5px solid #185FA5;border-radius:8px;
        padding:10px 14px;font-size:12px;color:#185FA5;margin-bottom:14px;text-align:center">
        📍 Tu código de caja: <strong style="font-size:16px;letter-spacing:.1em">${t.codigo}</strong>
      </div>

      <div id="carrito-msg" style="font-size:12px;text-align:center;min-height:16px;margin-bottom:8px"></div>`}window._quitarCarrito=async(o,s)=>{const a=e.find(l=>l.standDocId===o);a&&await Gi(t.fireId,Number(a.standId),s)},window._cambiarRetiro=async(o,s,a)=>{await hs(t.fireId,Number(s),a)}}async function ng(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function bl(n,t,e,i,o,s){n.beginPath(),n.moveTo(t+s,e),n.lineTo(t+i-s,e),n.quadraticCurveTo(t+i,e,t+i,e+s),n.lineTo(t+i,e+o-s),n.quadraticCurveTo(t+i,e+o,t+i-s,e+o),n.lineTo(t+s,e+o),n.quadraticCurveTo(t,e+o,t,e+o-s),n.lineTo(t,e+s),n.quadraticCurveTo(t,e,t+s,e),n.closePath()}async function ig(n){await ng();const e=window.location.origin+"/acceso?inv="+n.token,i=document.createElement("canvas"),o=600,s=800;i.width=o,i.height=s;const a=i.getContext("2d"),l=a.createLinearGradient(0,0,0,s);l.addColorStop(0,"#1A3A5C"),l.addColorStop(.55,"#2C5F8A"),l.addColorStop(1,"#3A7D44"),a.fillStyle=l,a.fillRect(0,0,o,s),a.fillStyle="#C9A96E",a.fillRect(0,s-4,o,4),a.fillStyle="rgba(255,255,255,0.7)",a.font="500 18px system-ui, -apple-system, sans-serif",a.textAlign="center",a.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",o/2,54),a.fillStyle="#ffffff",a.font="500 38px system-ui, -apple-system, sans-serif",a.fillText(n.nombre+" "+n.apellido,o/2,110),a.fillStyle="rgba(255,255,255,0.75)",a.font="400 22px system-ui, -apple-system, sans-serif",a.fillText(n.codigo,o/2,146),a.fillStyle="#3A7D44";const d=200,u=34,m=o/2-d/2,p=164;bl(a,m,p,d,u,17),a.fill(),a.fillStyle="#ffffff",a.font="500 15px system-ui, -apple-system, sans-serif",a.fillText("Bono confirmado",o/2,p+23);const g=320,A=340,S=o/2-g/2,C=220;a.fillStyle="#ffffff",bl(a,S,C,g,A,16),a.fill();const T=qrcode(0,"M");T.addData(e),T.make();const V=T.getModuleCount(),k=240,B=S+(g-k)/2,L=C+24,R=k/V;a.fillStyle="#000000";for(let v=0;v<V;v++)for(let f=0;f<V;f++)T.isDark(v,f)&&a.fillRect(B+f*R,L+v*R,R,R);a.fillStyle="#1A3A5C",a.font="500 26px system-ui, -apple-system, sans-serif",a.fillText(n.codigo,o/2,C+A-44),a.fillStyle="#888",a.font="400 14px system-ui, -apple-system, sans-serif",a.fillText("Mostrá este QR en la entrada",o/2,C+A-20),a.fillStyle="rgba(255,255,255,0.85)",a.font="400 18px system-ui, -apple-system, sans-serif",a.fillText("Sáb 20 jun 2026  ·  19:30 hs",o/2,C+A+50),a.fillText("Roma 656, Olivos",o/2,C+A+80),a.fillStyle="rgba(255,255,255,0.5)",a.font="400 13px system-ui, -apple-system, sans-serif",a.fillText("Personal e intransferible · Un solo uso en la entrada",o/2,s-24);const E=document.createElement("a");E.download="QR_"+n.nombre+"_"+n.apellido+".png",E.href=i.toDataURL(),E.click()}async function og(n,t,e){if(Wt(),!await yd(t,e)){n.innerHTML=kt({title:"Acceso denegado",sub:"SUCOVI 2027"})+'<div style="max-width:480px;margin:40px auto;padding:16px;text-align:center"><div style="font-size:40px;margin-bottom:12px">🔒</div><div style="font-size:16px;color:#A32D2D">Link invalido o expirado</div></div>';return}const o=await md(t),s=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),a={pagado:"b-pago",ingresado:"b-ingr",pendiente:"b-pend",invalidado:"b-canc"},l={pagado:"Bono confirmado",ingresado:"Ingreso",pendiente:"Pendiente",invalidado:"Invalidado"},d=window.location.origin;n.innerHTML=kt({title:"Familia "+s,sub:"SUCOVI 2027 · "+o.length+" invitado"+(o.length!==1?"s":"")})+'<div style="max-width:600px;margin:0 auto;padding:16px">'+(o.length===0?'<div class="empty">No se encontraron invitados.</div>':o.map((u,m)=>{const p=((u.nombre||"")[0]||"")+((u.apellido||"")[0]||""),g=d+"/acceso?inv="+u.token,A=u.estado==="ingresado"?"Hola "+u.nombre+`! 🍷

Ya estás dentro de SUCOVI 2027 — ¡disfrutá la noche!

Si necesitás tu QR para los stands:
👉 `+g+`

_Personal e intransferible._`:u.estado==="pagado"?"Hola "+u.nombre+`! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 `+g+`

_Personal e intransferible. Un solo uso en la entrada._`:"Hola "+u.nombre+`! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`,S=encodeURIComponent(A),C=(u.tel||"").replace(/\D/g,""),T=C?"https://wa.me/"+(C.startsWith("54")?C:"54"+C)+"?text="+S:null;return'<div class="card" style="margin-bottom:10px"><div style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;border-radius:50%;background:#1A3A5C;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;flex-shrink:0">'+p+'</div><div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:600;color:#1A3A5C">'+u.nombre+" "+u.apellido+'</div><div style="font-size:12px;color:#888">'+(u.codigo||"")+'</div><span class="badge '+(a[u.estado]||"")+'" style="margin-top:4px;display:inline-block">'+(l[u.estado]||u.estado)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0">'+(T?'<a href="'+T+'" target="_blank" class="btn" style="padding:4px 8px;font-size:11px">📱 WA</a>':"")+'<button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._dlQR('+m+')">📥 QR</button><a href="'+g+'" class="btn btn-v" style="padding:4px 8px;font-size:11px">Ver QR</a></div></div></div>'}).join(""))+"</div>",window._invitadosFamilia=o,window._dlQR=async u=>{const m=window._invitadosFamilia[u];m&&await ig(m)}}async function Ad(){const t=window.location.pathname.replace("/Sucovi2027","")||"/",e=new URLSearchParams(window.location.search),i=document.getElementById("app"),o=t.match(/^\/familia\/([^/]+)$/);if(o){const d=decodeURIComponent(o[1]),u=e.get("key");return og(i,d,u)}const s=t.match(/^\/stand\/(\d+)$/);if(s){const d=parseInt(s[1]),u=qt.find(g=>g.id===d);if(!u){i.innerHTML=Qe("Stand no encontrado");return}const m=e.get("inv"),p=m?await Gn(m):null;return Um(i,u,p)}const a=t.match(/^\/panel\/(\d+)$/);if(a){const d=qt.find(m=>m.id===parseInt(a[1]));if(!d){i.innerHTML=Qe("Panel no encontrado");return}const u=e.get("key");if(u&&u!==d.key){i.innerHTML=Qe("Acceso no autorizado");return}if(!u){i.innerHTML=Qe("Link inválido — usá el link completo que te enviaron");return}return Qm(i,d)}const l=t.match(/^\/bodega\/(\d+)\/vinos$/);if(l){const d=qt.find(m=>m.id===parseInt(l[1]));if(!d){i.innerHTML=Qe("Bodega no encontrada");return}const u=e.get("key");if(u&&u!==d.key){i.innerHTML=Qe("Acceso no autorizado");return}return bd(i,d)}if(t==="/carrito"){const d=e.get("inv"),u=d?await Gn(d):null;return eg(i,u)}if(t==="/acceso")return Ym(i,e.get("inv"));if(t==="/org"){vl(i);return}if(t==="/registro"){vl(i);return}return t==="/caja"?Hm(i):t==="/puerta"?Km(i):t==="/logistica"?Xm(i):vd(i)}function Qe(n){return`<div style="padding:60px;text-align:center;color:#aaa;font-size:14px">${n}</div>`}Ad();window.addEventListener("popstate",Ad);(function(){var n=window.location.search.match(/[?&]p=([^&]+)/);if(n){var t="/Sucovi2027",e=decodeURIComponent(n[1].replace(/~and~/g,"&"));window.history.replaceState(null,null,t+"/"+e)}})();
