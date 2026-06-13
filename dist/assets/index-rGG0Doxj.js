(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();var ga={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?t[e++]=o:o<2048?(t[e++]=o>>6|192,t[e++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=o>>18|240,t[e++]=o>>12&63|128,t[e++]=o>>6&63|128,t[e++]=o&63|128):(t[e++]=o>>12|224,t[e++]=o>>6&63|128,t[e++]=o&63|128)}return t},Zd=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const o=n[e++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const s=n[e++];t[i++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=n[e++],a=n[e++],l=n[e++],d=((o&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(d>>10)),t[i++]=String.fromCharCode(56320+(d&1023))}else{const s=n[e++],a=n[e++];t[i++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const s=n[o],a=o+1<n.length,l=a?n[o+1]:0,d=o+2<n.length,h=d?n[o+2]:0,v=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,x=h&63;d||(x=64,a||(g=64)),i.push(e[v],e[p],e[g],e[x])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(xl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Zd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const s=e[n.charAt(o++)],l=o<n.length?e[n.charAt(o)]:0;++o;const h=o<n.length?e[n.charAt(o)]:64;++o;const p=o<n.length?e[n.charAt(o)]:64;if(++o,s==null||l==null||h==null||p==null)throw new Yd;const g=s<<2|l>>4;if(i.push(g),h!==64){const x=l<<4&240|h>>2;if(i.push(x),p!==64){const T=h<<6&192|p;i.push(T)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Yd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tu=function(n){const t=xl(n);return Al.encodeByteArray(t,!0)},Li=function(n){return tu(n).replace(/\./g,"")},eu=function(n){try{return Al.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function nu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iu=()=>nu().__FIREBASE_DEFAULTS__,ou=()=>{if(typeof process>"u"||typeof ga>"u")return;const n=ga.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ru=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&eu(n[1]);return t&&JSON.parse(t)},Ar=()=>{try{return iu()||ou()||ru()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},su=n=>{var t,e;return(e=(t=Ar())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},au=n=>{const t=su(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},_l=()=>{var n;return(n=Ar())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function cu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",o=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Li(JSON.stringify(e)),Li(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uu(){var n;const t=(n=Ar())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hu(){return!uu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pu(){try{return typeof indexedDB=="object"}catch{return!1}}function fu(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{var s;t(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="FirebaseError";class ln extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=mu,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,El.prototype.create)}}class El{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},o=`${this.service}/${t}`,s=this.errors[t],a=s?gu(s,i):"Error",l=`${this.serviceName}: ${a} (${o}).`;return new ln(o,l,i)}}function gu(n,t){return n.replace(yu,(e,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const yu=/\{\$([^}]+)}/g;function Jo(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const o of e){if(!i.includes(o))return!1;const s=n[o],a=t[o];if(ya(s)&&ya(a)){if(!Jo(s,a))return!1}else if(s!==a)return!1}for(const o of i)if(!e.includes(o))return!1;return!0}function ya(n){return n!==null&&typeof n=="object"}/**
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
 */function zt(n){return n&&n._delegate?n._delegate:n}class zn{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class vu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new lu;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:e});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(wu(t))try{this.getOrInitializeService({instanceIdentifier:Pe})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:o});i.resolve(s)}catch{}}}}clearInstance(t=Pe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pe){return this.instances.has(t)}getOptions(t=Pe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&a.resolve(o)}return o}onInit(t,e){var i;const o=this.normalizeInstanceIdentifier(e),s=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(o,s);const a=this.instances.get(o);return a&&t(a,o),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const o of i)try{o(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bu(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Pe){return this.component?this.component.multipleInstances?t:Pe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bu(n){return n===Pe?void 0:n}function wu(n){return n.instantiationMode==="EAGER"}/**
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
 */class xu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new vu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Au={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},_u=K.INFO,Eu={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Iu=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),o=Eu[t];if(o)console[o](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Il{constructor(t){this.name=t,this._logLevel=_u,this._logHandler=Iu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Au[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Tu=(n,t)=>t.some(e=>n instanceof e);let va,ba;function Ru(){return va||(va=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cu(){return ba||(ba=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tl=new WeakMap,Zo=new WeakMap,Rl=new WeakMap,zo=new WeakMap,_r=new WeakMap;function Su(n){const t=new Promise((e,i)=>{const o=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(me(n.result)),o()},a=()=>{i(n.error),o()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Tl.set(e,n)}).catch(()=>{}),_r.set(t,n),t}function Pu(n){if(Zo.has(n))return;const t=new Promise((e,i)=>{const o=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),o()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Zo.set(n,t)}let Yo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Zo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Rl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return me(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ku(n){Yo=n(Yo)}function Vu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(jo(this),t,...e);return Rl.set(i,t.sort?t.sort():[t]),me(i)}:Cu().includes(n)?function(...t){return n.apply(jo(this),t),me(Tl.get(this))}:function(...t){return me(n.apply(jo(this),t))}}function Du(n){return typeof n=="function"?Vu(n):(n instanceof IDBTransaction&&Pu(n),Tu(n,Ru())?new Proxy(n,Yo):n)}function me(n){if(n instanceof IDBRequest)return Su(n);if(zo.has(n))return zo.get(n);const t=Du(n);return t!==n&&(zo.set(n,t),_r.set(t,n)),t}const jo=n=>_r.get(n);function Bu(n,t,{blocked:e,upgrade:i,blocking:o,terminated:s}={}){const a=indexedDB.open(n,t),l=me(a);return i&&a.addEventListener("upgradeneeded",d=>{i(me(a.result),d.oldVersion,d.newVersion,me(a.transaction),d)}),e&&a.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),l.then(d=>{s&&d.addEventListener("close",()=>s()),o&&d.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Nu=["get","getKey","getAll","getAllKeys","count"],Lu=["put","add","delete","clear"],qo=new Map;function wa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(qo.get(t))return qo.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,o=Lu.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(o||Nu.includes(e)))return;const s=async function(a,...l){const d=this.transaction(a,o?"readwrite":"readonly");let h=d.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[e](...l),o&&d.done]))[0]};return qo.set(t,s),s}ku(n=>({...n,get:(t,e,i)=>wa(t,e)||n.get(t,e,i),has:(t,e)=>!!wa(t,e)||n.has(t,e)}));/**
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
 */class Fu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Mu(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Mu(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const tr="@firebase/app",xa="0.10.13";/**
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
 */const ie=new Il("@firebase/app"),Ou="@firebase/app-compat",zu="@firebase/analytics-compat",ju="@firebase/analytics",qu="@firebase/app-check-compat",Hu="@firebase/app-check",Uu="@firebase/auth",$u="@firebase/auth-compat",Qu="@firebase/database",Wu="@firebase/data-connect",Gu="@firebase/database-compat",Ku="@firebase/functions",Xu="@firebase/functions-compat",Ju="@firebase/installations",Zu="@firebase/installations-compat",Yu="@firebase/messaging",th="@firebase/messaging-compat",eh="@firebase/performance",nh="@firebase/performance-compat",ih="@firebase/remote-config",oh="@firebase/remote-config-compat",rh="@firebase/storage",sh="@firebase/storage-compat",ah="@firebase/firestore",lh="@firebase/vertexai-preview",ch="@firebase/firestore-compat",dh="firebase",uh="10.14.1";/**
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
 */const er="[DEFAULT]",hh={[tr]:"fire-core",[Ou]:"fire-core-compat",[ju]:"fire-analytics",[zu]:"fire-analytics-compat",[Hu]:"fire-app-check",[qu]:"fire-app-check-compat",[Uu]:"fire-auth",[$u]:"fire-auth-compat",[Qu]:"fire-rtdb",[Wu]:"fire-data-connect",[Gu]:"fire-rtdb-compat",[Ku]:"fire-fn",[Xu]:"fire-fn-compat",[Ju]:"fire-iid",[Zu]:"fire-iid-compat",[Yu]:"fire-fcm",[th]:"fire-fcm-compat",[eh]:"fire-perf",[nh]:"fire-perf-compat",[ih]:"fire-rc",[oh]:"fire-rc-compat",[rh]:"fire-gcs",[sh]:"fire-gcs-compat",[ah]:"fire-fst",[ch]:"fire-fst-compat",[lh]:"fire-vertex","fire-js":"fire-js",[dh]:"fire-js-all"};/**
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
 */const Fi=new Map,ph=new Map,nr=new Map;function Aa(n,t){try{n.container.addComponent(t)}catch(e){ie.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Mi(n){const t=n.name;if(nr.has(t))return ie.debug(`There were multiple attempts to register component ${t}.`),!1;nr.set(t,n);for(const e of Fi.values())Aa(e,n);for(const e of ph.values())Aa(e,n);return!0}function fh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const mh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ge=new El("app","Firebase",mh);/**
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
 */class gh{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}/**
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
 */const yh=uh;function Cl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:er,automaticDataCollectionEnabled:!1},t),o=i.name;if(typeof o!="string"||!o)throw ge.create("bad-app-name",{appName:String(o)});if(e||(e=_l()),!e)throw ge.create("no-options");const s=Fi.get(o);if(s){if(Jo(e,s.options)&&Jo(i,s.config))return s;throw ge.create("duplicate-app",{appName:o})}const a=new xu(o);for(const d of nr.values())a.addComponent(d);const l=new gh(e,i,a);return Fi.set(o,l),l}function vh(n=er){const t=Fi.get(n);if(!t&&n===er&&_l())return Cl();if(!t)throw ge.create("no-app",{appName:n});return t}function Ze(n,t,e){var i;let o=(i=hh[n])!==null&&i!==void 0?i:n;e&&(o+=`-${e}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${o}" with version "${t}":`];s&&l.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ie.warn(l.join(" "));return}Mi(new zn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const bh="firebase-heartbeat-database",wh=1,jn="firebase-heartbeat-store";let Ho=null;function Sl(){return Ho||(Ho=Bu(bh,wh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(jn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ge.create("idb-open",{originalErrorMessage:n.message})})),Ho}async function xh(n){try{const e=(await Sl()).transaction(jn),i=await e.objectStore(jn).get(Pl(n));return await e.done,i}catch(t){if(t instanceof ln)ie.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ie.warn(e.message)}}}async function _a(n,t){try{const i=(await Sl()).transaction(jn,"readwrite");await i.objectStore(jn).put(t,Pl(n)),await i.done}catch(e){if(e instanceof ln)ie.warn(e.message);else{const i=ge.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ie.warn(i.message)}}}function Pl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ah=1024,_h=30*24*60*60*1e3;class Eh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Th(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ea();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=_h}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ie.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ea(),{heartbeatsToSend:i,unsentEntries:o}=Ih(this._heartbeatsCache.heartbeats),s=Li(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ie.warn(e),""}}}function Ea(){return new Date().toISOString().substring(0,10)}function Ih(n,t=Ah){const e=[];let i=n.slice();for(const o of n){const s=e.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),Ia(e)>t){s.dates.pop();break}}else if(e.push({agent:o.agent,dates:[o.date]}),Ia(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Th{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pu()?fu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await xh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return _a(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return _a(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Ia(n){return Li(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Rh(n){Mi(new zn("platform-logger",t=>new Fu(t),"PRIVATE")),Mi(new zn("heartbeat",t=>new Eh(t),"PRIVATE")),Ze(tr,xa,n),Ze(tr,xa,"esm2017"),Ze("fire-js","")}Rh("");var Ch="firebase",Sh="10.14.1";/**
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
 */Ze(Ch,Sh,"app");var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ve,kl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(m,f){function y(){}y.prototype=f.prototype,m.D=f.prototype,m.prototype=new y,m.prototype.constructor=m,m.C=function(E,_,A){for(var b=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)b[Y-2]=arguments[Y];return f.prototype[_].apply(E,b)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(m,f,y){y||(y=0);var E=Array(16);if(typeof f=="string")for(var _=0;16>_;++_)E[_]=f.charCodeAt(y++)|f.charCodeAt(y++)<<8|f.charCodeAt(y++)<<16|f.charCodeAt(y++)<<24;else for(_=0;16>_;++_)E[_]=f[y++]|f[y++]<<8|f[y++]<<16|f[y++]<<24;f=m.g[0],y=m.g[1],_=m.g[2];var A=m.g[3],b=f+(A^y&(_^A))+E[0]+3614090360&4294967295;f=y+(b<<7&4294967295|b>>>25),b=A+(_^f&(y^_))+E[1]+3905402710&4294967295,A=f+(b<<12&4294967295|b>>>20),b=_+(y^A&(f^y))+E[2]+606105819&4294967295,_=A+(b<<17&4294967295|b>>>15),b=y+(f^_&(A^f))+E[3]+3250441966&4294967295,y=_+(b<<22&4294967295|b>>>10),b=f+(A^y&(_^A))+E[4]+4118548399&4294967295,f=y+(b<<7&4294967295|b>>>25),b=A+(_^f&(y^_))+E[5]+1200080426&4294967295,A=f+(b<<12&4294967295|b>>>20),b=_+(y^A&(f^y))+E[6]+2821735955&4294967295,_=A+(b<<17&4294967295|b>>>15),b=y+(f^_&(A^f))+E[7]+4249261313&4294967295,y=_+(b<<22&4294967295|b>>>10),b=f+(A^y&(_^A))+E[8]+1770035416&4294967295,f=y+(b<<7&4294967295|b>>>25),b=A+(_^f&(y^_))+E[9]+2336552879&4294967295,A=f+(b<<12&4294967295|b>>>20),b=_+(y^A&(f^y))+E[10]+4294925233&4294967295,_=A+(b<<17&4294967295|b>>>15),b=y+(f^_&(A^f))+E[11]+2304563134&4294967295,y=_+(b<<22&4294967295|b>>>10),b=f+(A^y&(_^A))+E[12]+1804603682&4294967295,f=y+(b<<7&4294967295|b>>>25),b=A+(_^f&(y^_))+E[13]+4254626195&4294967295,A=f+(b<<12&4294967295|b>>>20),b=_+(y^A&(f^y))+E[14]+2792965006&4294967295,_=A+(b<<17&4294967295|b>>>15),b=y+(f^_&(A^f))+E[15]+1236535329&4294967295,y=_+(b<<22&4294967295|b>>>10),b=f+(_^A&(y^_))+E[1]+4129170786&4294967295,f=y+(b<<5&4294967295|b>>>27),b=A+(y^_&(f^y))+E[6]+3225465664&4294967295,A=f+(b<<9&4294967295|b>>>23),b=_+(f^y&(A^f))+E[11]+643717713&4294967295,_=A+(b<<14&4294967295|b>>>18),b=y+(A^f&(_^A))+E[0]+3921069994&4294967295,y=_+(b<<20&4294967295|b>>>12),b=f+(_^A&(y^_))+E[5]+3593408605&4294967295,f=y+(b<<5&4294967295|b>>>27),b=A+(y^_&(f^y))+E[10]+38016083&4294967295,A=f+(b<<9&4294967295|b>>>23),b=_+(f^y&(A^f))+E[15]+3634488961&4294967295,_=A+(b<<14&4294967295|b>>>18),b=y+(A^f&(_^A))+E[4]+3889429448&4294967295,y=_+(b<<20&4294967295|b>>>12),b=f+(_^A&(y^_))+E[9]+568446438&4294967295,f=y+(b<<5&4294967295|b>>>27),b=A+(y^_&(f^y))+E[14]+3275163606&4294967295,A=f+(b<<9&4294967295|b>>>23),b=_+(f^y&(A^f))+E[3]+4107603335&4294967295,_=A+(b<<14&4294967295|b>>>18),b=y+(A^f&(_^A))+E[8]+1163531501&4294967295,y=_+(b<<20&4294967295|b>>>12),b=f+(_^A&(y^_))+E[13]+2850285829&4294967295,f=y+(b<<5&4294967295|b>>>27),b=A+(y^_&(f^y))+E[2]+4243563512&4294967295,A=f+(b<<9&4294967295|b>>>23),b=_+(f^y&(A^f))+E[7]+1735328473&4294967295,_=A+(b<<14&4294967295|b>>>18),b=y+(A^f&(_^A))+E[12]+2368359562&4294967295,y=_+(b<<20&4294967295|b>>>12),b=f+(y^_^A)+E[5]+4294588738&4294967295,f=y+(b<<4&4294967295|b>>>28),b=A+(f^y^_)+E[8]+2272392833&4294967295,A=f+(b<<11&4294967295|b>>>21),b=_+(A^f^y)+E[11]+1839030562&4294967295,_=A+(b<<16&4294967295|b>>>16),b=y+(_^A^f)+E[14]+4259657740&4294967295,y=_+(b<<23&4294967295|b>>>9),b=f+(y^_^A)+E[1]+2763975236&4294967295,f=y+(b<<4&4294967295|b>>>28),b=A+(f^y^_)+E[4]+1272893353&4294967295,A=f+(b<<11&4294967295|b>>>21),b=_+(A^f^y)+E[7]+4139469664&4294967295,_=A+(b<<16&4294967295|b>>>16),b=y+(_^A^f)+E[10]+3200236656&4294967295,y=_+(b<<23&4294967295|b>>>9),b=f+(y^_^A)+E[13]+681279174&4294967295,f=y+(b<<4&4294967295|b>>>28),b=A+(f^y^_)+E[0]+3936430074&4294967295,A=f+(b<<11&4294967295|b>>>21),b=_+(A^f^y)+E[3]+3572445317&4294967295,_=A+(b<<16&4294967295|b>>>16),b=y+(_^A^f)+E[6]+76029189&4294967295,y=_+(b<<23&4294967295|b>>>9),b=f+(y^_^A)+E[9]+3654602809&4294967295,f=y+(b<<4&4294967295|b>>>28),b=A+(f^y^_)+E[12]+3873151461&4294967295,A=f+(b<<11&4294967295|b>>>21),b=_+(A^f^y)+E[15]+530742520&4294967295,_=A+(b<<16&4294967295|b>>>16),b=y+(_^A^f)+E[2]+3299628645&4294967295,y=_+(b<<23&4294967295|b>>>9),b=f+(_^(y|~A))+E[0]+4096336452&4294967295,f=y+(b<<6&4294967295|b>>>26),b=A+(y^(f|~_))+E[7]+1126891415&4294967295,A=f+(b<<10&4294967295|b>>>22),b=_+(f^(A|~y))+E[14]+2878612391&4294967295,_=A+(b<<15&4294967295|b>>>17),b=y+(A^(_|~f))+E[5]+4237533241&4294967295,y=_+(b<<21&4294967295|b>>>11),b=f+(_^(y|~A))+E[12]+1700485571&4294967295,f=y+(b<<6&4294967295|b>>>26),b=A+(y^(f|~_))+E[3]+2399980690&4294967295,A=f+(b<<10&4294967295|b>>>22),b=_+(f^(A|~y))+E[10]+4293915773&4294967295,_=A+(b<<15&4294967295|b>>>17),b=y+(A^(_|~f))+E[1]+2240044497&4294967295,y=_+(b<<21&4294967295|b>>>11),b=f+(_^(y|~A))+E[8]+1873313359&4294967295,f=y+(b<<6&4294967295|b>>>26),b=A+(y^(f|~_))+E[15]+4264355552&4294967295,A=f+(b<<10&4294967295|b>>>22),b=_+(f^(A|~y))+E[6]+2734768916&4294967295,_=A+(b<<15&4294967295|b>>>17),b=y+(A^(_|~f))+E[13]+1309151649&4294967295,y=_+(b<<21&4294967295|b>>>11),b=f+(_^(y|~A))+E[4]+4149444226&4294967295,f=y+(b<<6&4294967295|b>>>26),b=A+(y^(f|~_))+E[11]+3174756917&4294967295,A=f+(b<<10&4294967295|b>>>22),b=_+(f^(A|~y))+E[2]+718787259&4294967295,_=A+(b<<15&4294967295|b>>>17),b=y+(A^(_|~f))+E[9]+3951481745&4294967295,m.g[0]=m.g[0]+f&4294967295,m.g[1]=m.g[1]+(_+(b<<21&4294967295|b>>>11))&4294967295,m.g[2]=m.g[2]+_&4294967295,m.g[3]=m.g[3]+A&4294967295}i.prototype.u=function(m,f){f===void 0&&(f=m.length);for(var y=f-this.blockSize,E=this.B,_=this.h,A=0;A<f;){if(_==0)for(;A<=y;)o(this,m,A),A+=this.blockSize;if(typeof m=="string"){for(;A<f;)if(E[_++]=m.charCodeAt(A++),_==this.blockSize){o(this,E),_=0;break}}else for(;A<f;)if(E[_++]=m[A++],_==this.blockSize){o(this,E),_=0;break}}this.h=_,this.o+=f},i.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var f=1;f<m.length-8;++f)m[f]=0;var y=8*this.o;for(f=m.length-8;f<m.length;++f)m[f]=y&255,y/=256;for(this.u(m),m=Array(16),f=y=0;4>f;++f)for(var E=0;32>E;E+=8)m[y++]=this.g[f]>>>E&255;return m};function s(m,f){var y=l;return Object.prototype.hasOwnProperty.call(y,m)?y[m]:y[m]=f(m)}function a(m,f){this.h=f;for(var y=[],E=!0,_=m.length-1;0<=_;_--){var A=m[_]|0;E&&A==f||(y[_]=A,E=!1)}this.g=y}var l={};function d(m){return-128<=m&&128>m?s(m,function(f){return new a([f|0],0>f?-1:0)}):new a([m|0],0>m?-1:0)}function h(m){if(isNaN(m)||!isFinite(m))return p;if(0>m)return V(h(-m));for(var f=[],y=1,E=0;m>=y;E++)f[E]=m/y|0,y*=4294967296;return new a(f,0)}function v(m,f){if(m.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(m.charAt(0)=="-")return V(v(m.substring(1),f));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(f,8)),E=p,_=0;_<m.length;_+=8){var A=Math.min(8,m.length-_),b=parseInt(m.substring(_,_+A),f);8>A?(A=h(Math.pow(f,A)),E=E.j(A).add(h(b))):(E=E.j(y),E=E.add(h(b)))}return E}var p=d(0),g=d(1),x=d(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();for(var m=0,f=1,y=0;y<this.g.length;y++){var E=this.i(y);m+=(0<=E?E:4294967296+E)*f,f*=4294967296}return m},n.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T(this))return"0";if(k(this))return"-"+V(this).toString(m);for(var f=h(Math.pow(m,6)),y=this,E="";;){var _=C(y,f).g;y=S(y,_.j(f));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(m);if(y=_,T(y))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function T(m){if(m.h!=0)return!1;for(var f=0;f<m.g.length;f++)if(m.g[f]!=0)return!1;return!0}function k(m){return m.h==-1}n.l=function(m){return m=S(this,m),k(m)?-1:T(m)?0:1};function V(m){for(var f=m.g.length,y=[],E=0;E<f;E++)y[E]=~m.g[E];return new a(y,~m.h).add(g)}n.abs=function(){return k(this)?V(this):this},n.add=function(m){for(var f=Math.max(this.g.length,m.g.length),y=[],E=0,_=0;_<=f;_++){var A=E+(this.i(_)&65535)+(m.i(_)&65535),b=(A>>>16)+(this.i(_)>>>16)+(m.i(_)>>>16);E=b>>>16,A&=65535,b&=65535,y[_]=b<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function S(m,f){return m.add(V(f))}n.j=function(m){if(T(this)||T(m))return p;if(k(this))return k(m)?V(this).j(V(m)):V(V(this).j(m));if(k(m))return V(this.j(V(m)));if(0>this.l(x)&&0>m.l(x))return h(this.m()*m.m());for(var f=this.g.length+m.g.length,y=[],E=0;E<2*f;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var _=0;_<m.g.length;_++){var A=this.i(E)>>>16,b=this.i(E)&65535,Y=m.i(_)>>>16,$=m.i(_)&65535;y[2*E+2*_]+=b*$,P(y,2*E+2*_),y[2*E+2*_+1]+=A*$,P(y,2*E+2*_+1),y[2*E+2*_+1]+=b*Y,P(y,2*E+2*_+1),y[2*E+2*_+2]+=A*Y,P(y,2*E+2*_+2)}for(E=0;E<f;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=f;E<2*f;E++)y[E]=0;return new a(y,0)};function P(m,f){for(;(m[f]&65535)!=m[f];)m[f+1]+=m[f]>>>16,m[f]&=65535,f++}function D(m,f){this.g=m,this.h=f}function C(m,f){if(T(f))throw Error("division by zero");if(T(m))return new D(p,p);if(k(m))return f=C(V(m),f),new D(V(f.g),V(f.h));if(k(f))return f=C(m,V(f)),new D(V(f.g),f.h);if(30<m.g.length){if(k(m)||k(f))throw Error("slowDivide_ only works with positive integers.");for(var y=g,E=f;0>=E.l(m);)y=B(y),E=B(E);var _=I(y,1),A=I(E,1);for(E=I(E,2),y=I(y,2);!T(E);){var b=A.add(E);0>=b.l(m)&&(_=_.add(y),A=b),E=I(E,1),y=I(y,1)}return f=S(m,_.j(f)),new D(_,f)}for(_=p;0<=m.l(f);){for(y=Math.max(1,Math.floor(m.m()/f.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(y),b=A.j(f);k(b)||0<b.l(m);)y-=E,A=h(y),b=A.j(f);T(A)&&(A=g),_=_.add(A),m=S(m,b)}return new D(_,m)}n.A=function(m){return C(this,m).h},n.and=function(m){for(var f=Math.max(this.g.length,m.g.length),y=[],E=0;E<f;E++)y[E]=this.i(E)&m.i(E);return new a(y,this.h&m.h)},n.or=function(m){for(var f=Math.max(this.g.length,m.g.length),y=[],E=0;E<f;E++)y[E]=this.i(E)|m.i(E);return new a(y,this.h|m.h)},n.xor=function(m){for(var f=Math.max(this.g.length,m.g.length),y=[],E=0;E<f;E++)y[E]=this.i(E)^m.i(E);return new a(y,this.h^m.h)};function B(m){for(var f=m.g.length+1,y=[],E=0;E<f;E++)y[E]=m.i(E)<<1|m.i(E-1)>>>31;return new a(y,m.h)}function I(m,f){var y=f>>5;f%=32;for(var E=m.g.length-y,_=[],A=0;A<E;A++)_[A]=0<f?m.i(A+y)>>>f|m.i(A+y+1)<<32-f:m.i(A+y);return new a(_,m.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,kl=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=v,Ve=a}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});var Ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vl,Vn,Dl,Pi,ir,Bl,Nl,Ll;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,c,u){return r==Array.prototype||r==Object.prototype||(r[c]=u.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ii=="object"&&Ii];for(var c=0;c<r.length;++c){var u=r[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=e(this);function o(r,c){if(c)t:{var u=i;r=r.split(".");for(var w=0;w<r.length-1;w++){var R=r[w];if(!(R in u))break t;u=u[R]}r=r[r.length-1],w=u[r],c=c(w),c!=w&&c!=null&&t(u,r,{configurable:!0,writable:!0,value:c})}}function s(r,c){r instanceof String&&(r+="");var u=0,w=!1,R={next:function(){if(!w&&u<r.length){var N=u++;return{value:c(N,r[N]),done:!1}}return w=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}o("Array.prototype.values",function(r){return r||function(){return s(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function d(r){var c=typeof r;return c=c!="object"?c:r?Array.isArray(r)?"array":c:"null",c=="array"||c=="object"&&typeof r.length=="number"}function h(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function v(r,c,u){return r.call.apply(r.bind,arguments)}function p(r,c,u){if(!r)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,w),r.apply(c,R)}}return function(){return r.apply(c,arguments)}}function g(r,c,u){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:p,g.apply(null,arguments)}function x(r,c){var u=Array.prototype.slice.call(arguments,1);return function(){var w=u.slice();return w.push.apply(w,arguments),r.apply(this,w)}}function T(r,c){function u(){}u.prototype=c.prototype,r.aa=c.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(w,R,N){for(var M=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)M[tt-2]=arguments[tt];return c.prototype[R].apply(w,M)}}function k(r){const c=r.length;if(0<c){const u=Array(c);for(let w=0;w<c;w++)u[w]=r[w];return u}return[]}function V(r,c){for(let u=1;u<arguments.length;u++){const w=arguments[u];if(d(w)){const R=r.length||0,N=w.length||0;r.length=R+N;for(let M=0;M<N;M++)r[R+M]=w[M]}else r.push(w)}}class S{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function P(r){return/^[\s\xa0]*$/.test(r)}function D(){var r=l.navigator;return r&&(r=r.userAgent)?r:""}function C(r){return C[" "](r),r}C[" "]=function(){};var B=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function I(r,c,u){for(const w in r)c.call(u,r[w],w,r)}function m(r,c){for(const u in r)c.call(void 0,r[u],u,r)}function f(r){const c={};for(const u in r)c[u]=r[u];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,c){let u,w;for(let R=1;R<arguments.length;R++){w=arguments[R];for(u in w)r[u]=w[u];for(let N=0;N<y.length;N++)u=y[N],Object.prototype.hasOwnProperty.call(w,u)&&(r[u]=w[u])}}function _(r){var c=1;r=r.split(":");const u=[];for(;0<c&&r.length;)u.push(r.shift()),c--;return r.length&&u.push(r.join(":")),u}function A(r){l.setTimeout(()=>{throw r},0)}function b(){var r=jt;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class Y{constructor(){this.h=this.g=null}add(c,u){const w=$.get();w.set(c,u),this.h?this.h.next=w:this.g=w,this.h=w}}var $=new S(()=>new At,r=>r.reset());class At{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Lt,Bt=!1,jt=new Y,qt=()=>{const r=l.Promise.resolve(void 0);Lt=()=>{r.then(se)}};var se=()=>{for(var r;r=b();){try{r.h.call(r.g)}catch(u){A(u)}var c=$;c.j(r),100>c.h&&(c.h++,r.next=c.g,c.g=r)}Bt=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function nt(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var gn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return r}();function ae(r,c){if(nt.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,w=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget){if(B){t:{try{C(c.nodeName);var R=!0;break t}catch{}R=!1}R||(c=null)}}else u=="mouseover"?c=r.fromElement:u=="mouseout"&&(c=r.toElement);this.relatedTarget=c,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:bo[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&ae.aa.h.call(this)}}T(ae,nt);var bo={2:"touch",3:"pen",4:"mouse"};ae.prototype.h=function(){ae.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),qe=0;function yn(r,c,u,w,R){this.listener=r,this.proxy=null,this.src=c,this.type=u,this.capture=!!w,this.ha=R,this.key=++qe,this.da=this.fa=!1}function _t(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function Et(r){this.src=r,this.g={},this.h=0}Et.prototype.add=function(r,c,u,w,R){var N=r.toString();r=this.g[N],r||(r=this.g[N]=[],this.h++);var M=Ee(r,c,w,R);return-1<M?(c=r[M],u||(c.fa=!1)):(c=new yn(c,this.src,N,!!w,R),c.fa=u,r.push(c)),c};function Yt(r,c){var u=c.type;if(u in r.g){var w=r.g[u],R=Array.prototype.indexOf.call(w,c,void 0),N;(N=0<=R)&&Array.prototype.splice.call(w,R,1),N&&(_t(c),r.g[u].length==0&&(delete r.g[u],r.h--))}}function Ee(r,c,u,w){for(var R=0;R<r.length;++R){var N=r[R];if(!N.da&&N.listener==c&&N.capture==!!u&&N.ha==w)return R}return-1}var Ie="closure_lm_"+(1e6*Math.random()|0),wo={};function ys(r,c,u,w,R){if(Array.isArray(c)){for(var N=0;N<c.length;N++)ys(r,c[N],u,w,R);return null}return u=ws(u),r&&r[je]?r.K(c,u,h(w)?!!w.capture:!1,R):_d(r,c,u,!1,w,R)}function _d(r,c,u,w,R,N){if(!c)throw Error("Invalid event type");var M=h(R)?!!R.capture:!!R,tt=Ao(r);if(tt||(r[Ie]=tt=new Et(r)),u=tt.add(c,u,w,M,N),u.proxy)return u;if(w=Ed(),u.proxy=w,w.src=r,w.listener=u,r.addEventListener)gn||(R=M),R===void 0&&(R=!1),r.addEventListener(c.toString(),w,R);else if(r.attachEvent)r.attachEvent(bs(c.toString()),w);else if(r.addListener&&r.removeListener)r.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ed(){function r(u){return c.call(r.src,r.listener,u)}const c=Id;return r}function vs(r,c,u,w,R){if(Array.isArray(c))for(var N=0;N<c.length;N++)vs(r,c[N],u,w,R);else w=h(w)?!!w.capture:!!w,u=ws(u),r&&r[je]?(r=r.i,c=String(c).toString(),c in r.g&&(N=r.g[c],u=Ee(N,u,w,R),-1<u&&(_t(N[u]),Array.prototype.splice.call(N,u,1),N.length==0&&(delete r.g[c],r.h--)))):r&&(r=Ao(r))&&(c=r.g[c.toString()],r=-1,c&&(r=Ee(c,u,w,R)),(u=-1<r?c[r]:null)&&xo(u))}function xo(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[je])Yt(c.i,r);else{var u=r.type,w=r.proxy;c.removeEventListener?c.removeEventListener(u,w,r.capture):c.detachEvent?c.detachEvent(bs(u),w):c.addListener&&c.removeListener&&c.removeListener(w),(u=Ao(c))?(Yt(u,r),u.h==0&&(u.src=null,c[Ie]=null)):_t(r)}}}function bs(r){return r in wo?wo[r]:wo[r]="on"+r}function Id(r,c){if(r.da)r=!0;else{c=new ae(c,this);var u=r.listener,w=r.ha||r.src;r.fa&&xo(r),r=u.call(w,c)}return r}function Ao(r){return r=r[Ie],r instanceof Et?r:null}var _o="__closure_events_fn_"+(1e9*Math.random()>>>0);function ws(r){return typeof r=="function"?r:(r[_o]||(r[_o]=function(c){return r.handleEvent(c)}),r[_o])}function It(){lt.call(this),this.i=new Et(this),this.M=this,this.F=null}T(It,lt),It.prototype[je]=!0,It.prototype.removeEventListener=function(r,c,u,w){vs(this,r,c,u,w)};function kt(r,c){var u,w=r.F;if(w)for(u=[];w;w=w.F)u.push(w);if(r=r.M,w=c.type||c,typeof c=="string")c=new nt(c,r);else if(c instanceof nt)c.target=c.target||r;else{var R=c;c=new nt(w,r),E(c,R)}if(R=!0,u)for(var N=u.length-1;0<=N;N--){var M=c.g=u[N];R=ci(M,w,!0,c)&&R}if(M=c.g=r,R=ci(M,w,!0,c)&&R,R=ci(M,w,!1,c)&&R,u)for(N=0;N<u.length;N++)M=c.g=u[N],R=ci(M,w,!1,c)&&R}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var r=this.i,c;for(c in r.g){for(var u=r.g[c],w=0;w<u.length;w++)_t(u[w]);delete r.g[c],r.h--}}this.F=null},It.prototype.K=function(r,c,u,w){return this.i.add(String(r),c,!1,u,w)},It.prototype.L=function(r,c,u,w){return this.i.add(String(r),c,!0,u,w)};function ci(r,c,u,w){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,N=0;N<c.length;++N){var M=c[N];if(M&&!M.da&&M.capture==u){var tt=M.listener,mt=M.ha||M.src;M.fa&&Yt(r.i,M),R=tt.call(mt,w)!==!1&&R}}return R&&!w.defaultPrevented}function xs(r,c,u){if(typeof r=="function")u&&(r=g(r,u));else if(r&&typeof r.handleEvent=="function")r=g(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(r,c||0)}function As(r){r.g=xs(()=>{r.g=null,r.i&&(r.i=!1,As(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class Td extends lt{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:As(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vn(r){lt.call(this),this.h=r,this.g={}}T(vn,lt);var _s=[];function Es(r){I(r.g,function(c,u){this.g.hasOwnProperty(u)&&xo(c)},r),r.g={}}vn.prototype.N=function(){vn.aa.N.call(this),Es(this)},vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Eo=l.JSON.stringify,Rd=l.JSON.parse,Cd=class{stringify(r){return l.JSON.stringify(r,void 0)}parse(r){return l.JSON.parse(r,void 0)}};function Io(){}Io.prototype.h=null;function Is(r){return r.h||(r.h=r.i())}function Ts(){}var bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function To(){nt.call(this,"d")}T(To,nt);function Ro(){nt.call(this,"c")}T(Ro,nt);var Te={},Rs=null;function di(){return Rs=Rs||new It}Te.La="serverreachability";function Cs(r){nt.call(this,Te.La,r)}T(Cs,nt);function wn(r){const c=di();kt(c,new Cs(c))}Te.STAT_EVENT="statevent";function Ss(r,c){nt.call(this,Te.STAT_EVENT,r),this.stat=c}T(Ss,nt);function Vt(r){const c=di();kt(c,new Ss(c,r))}Te.Ma="timingevent";function Ps(r,c){nt.call(this,Te.Ma,r),this.size=c}T(Ps,nt);function xn(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){r()},c)}function An(){this.g=!0}An.prototype.xa=function(){this.g=!1};function Sd(r,c,u,w,R,N){r.info(function(){if(r.g)if(N)for(var M="",tt=N.split("&"),mt=0;mt<tt.length;mt++){var J=tt[mt].split("=");if(1<J.length){var Tt=J[0];J=J[1];var Rt=Tt.split("_");M=2<=Rt.length&&Rt[1]=="type"?M+(Tt+"="+J+"&"):M+(Tt+"=redacted&")}}else M=null;else M=N;return"XMLHTTP REQ ("+w+") [attempt "+R+"]: "+c+`
`+u+`
`+M})}function Pd(r,c,u,w,R,N,M){r.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+R+"]: "+c+`
`+u+`
`+N+" "+M})}function He(r,c,u,w){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+Vd(r,u)+(w?" "+w:"")})}function kd(r,c){r.info(function(){return"TIMEOUT: "+c})}An.prototype.info=function(){};function Vd(r,c){if(!r.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var w=u[r];if(!(2>w.length)){var R=w[1];if(Array.isArray(R)&&!(1>R.length)){var N=R[0];if(N!="noop"&&N!="stop"&&N!="close")for(var M=1;M<R.length;M++)R[M]=""}}}}return Eo(u)}catch{return c}}var ui={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ks={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Co;function hi(){}T(hi,Io),hi.prototype.g=function(){return new XMLHttpRequest},hi.prototype.i=function(){return{}},Co=new hi;function le(r,c,u,w){this.j=r,this.i=c,this.l=u,this.R=w||1,this.U=new vn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vs}function Vs(){this.i=null,this.g="",this.h=!1}var Ds={},So={};function Po(r,c,u){r.L=1,r.v=gi(te(c)),r.m=u,r.P=!0,Bs(r,null)}function Bs(r,c){r.F=Date.now(),pi(r),r.A=te(r.v);var u=r.A,w=r.R;Array.isArray(w)||(w=[String(w)]),Gs(u.i,"t",w),r.C=0,u=r.j.J,r.h=new Vs,r.g=ha(r.j,u?c:null,!r.m),0<r.O&&(r.M=new Td(g(r.Y,r,r.g),r.O)),c=r.U,u=r.g,w=r.ca;var R="readystatechange";Array.isArray(R)||(R&&(_s[0]=R.toString()),R=_s);for(var N=0;N<R.length;N++){var M=ys(u,R[N],w||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=r.H?f(r.H):{},r.m?(r.u||(r.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,c)):(r.u="GET",r.g.ea(r.A,r.u,null,c)),wn(),Sd(r.i,r.u,r.A,r.l,r.R,r.m)}le.prototype.ca=function(r){r=r.target;const c=this.M;c&&ee(r)==3?c.j():this.Y(r)},le.prototype.Y=function(r){try{if(r==this.g)t:{const Rt=ee(this.g);var c=this.g.Ba();const Qe=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||ea(this.g)))){this.J||Rt!=4||c==7||(c==8||0>=Qe?wn(3):wn(2)),ko(this);var u=this.g.Z();this.X=u;e:if(Ns(this)){var w=ea(this.g);r="";var R=w.length,N=ee(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Re(this),_n(this);var M="";break e}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,r+=this.h.i.decode(w[c],{stream:!(N&&c==R-1)});w.length=0,this.h.g+=r,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=u==200,Pd(this.i,this.u,this.A,this.l,this.R,Rt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var tt,mt=this.g;if((tt=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(tt)){var J=tt;break e}}J=null}if(u=J)He(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vo(this,u);else{this.o=!1,this.s=3,Vt(12),Re(this),_n(this);break t}}if(this.P){u=!0;let Ut;for(;!this.J&&this.C<M.length;)if(Ut=Dd(this,M),Ut==So){Rt==4&&(this.s=4,Vt(14),u=!1),He(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==Ds){this.s=4,Vt(15),He(this.i,this.l,M,"[Invalid Chunk]"),u=!1;break}else He(this.i,this.l,Ut,null),Vo(this,Ut);if(Ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||M.length!=0||this.h.h||(this.s=1,Vt(16),u=!1),this.o=this.o&&u,!u)He(this.i,this.l,M,"[Invalid Chunked Response]"),Re(this),_n(this);else if(0<M.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Mo(Tt),Tt.M=!0,Vt(11))}}else He(this.i,this.l,M,null),Vo(this,M);Rt==4&&Re(this),this.o&&!this.J&&(Rt==4?la(this.j,this):(this.o=!1,pi(this)))}else Xd(this.g),u==400&&0<M.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),Re(this),_n(this)}}}catch{}finally{}};function Ns(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Dd(r,c){var u=r.C,w=c.indexOf(`
`,u);return w==-1?So:(u=Number(c.substring(u,w)),isNaN(u)?Ds:(w+=1,w+u>c.length?So:(c=c.slice(w,w+u),r.C=w+u,c)))}le.prototype.cancel=function(){this.J=!0,Re(this)};function pi(r){r.S=Date.now()+r.I,Ls(r,r.I)}function Ls(r,c){if(r.B!=null)throw Error("WatchDog timer not null");r.B=xn(g(r.ba,r),c)}function ko(r){r.B&&(l.clearTimeout(r.B),r.B=null)}le.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(kd(this.i,this.A),this.L!=2&&(wn(),Vt(17)),Re(this),this.s=2,_n(this)):Ls(this,this.S-r)};function _n(r){r.j.G==0||r.J||la(r.j,r)}function Re(r){ko(r);var c=r.M;c&&typeof c.ma=="function"&&c.ma(),r.M=null,Es(r.U),r.g&&(c=r.g,r.g=null,c.abort(),c.ma())}function Vo(r,c){try{var u=r.j;if(u.G!=0&&(u.g==r||Do(u.h,r))){if(!r.K&&Do(u.h,r)&&u.G==3){try{var w=u.Da.g.parse(c)}catch{w=null}if(Array.isArray(w)&&w.length==3){var R=w;if(R[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)Ai(u),wi(u);else break t;Fo(u),Vt(18)}}else u.za=R[1],0<u.za-u.T&&37500>R[2]&&u.F&&u.v==0&&!u.C&&(u.C=xn(g(u.Za,u),6e3));if(1>=Os(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Se(u,11)}else if((r.K||u.g==r)&&Ai(u),!P(c))for(R=u.Da.g.parse(c),c=0;c<R.length;c++){let J=R[c];if(u.T=J[0],J=J[1],u.G==2)if(J[0]=="c"){u.K=J[1],u.ia=J[2];const Tt=J[3];Tt!=null&&(u.la=Tt,u.j.info("VER="+u.la));const Rt=J[4];Rt!=null&&(u.Aa=Rt,u.j.info("SVER="+u.Aa));const Qe=J[5];Qe!=null&&typeof Qe=="number"&&0<Qe&&(w=1.5*Qe,u.L=w,u.j.info("backChannelRequestTimeoutMs_="+w)),w=u;const Ut=r.g;if(Ut){const Ei=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ei){var N=w.h;N.g||Ei.indexOf("spdy")==-1&&Ei.indexOf("quic")==-1&&Ei.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Bo(N,N.h),N.h=null))}if(w.D){const Oo=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(w.ya=Oo,ot(w.I,w.D,Oo))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),w=u;var M=r;if(w.qa=ua(w,w.J?w.ia:null,w.W),M.K){zs(w.h,M);var tt=M,mt=w.L;mt&&(tt.I=mt),tt.B&&(ko(tt),pi(tt)),w.g=M}else sa(w);0<u.i.length&&xi(u)}else J[0]!="stop"&&J[0]!="close"||Se(u,7);else u.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Se(u,7):Lo(u):J[0]!="noop"&&u.l&&u.l.ta(J),u.v=0)}}wn(4)}catch{}}var Bd=class{constructor(r,c){this.g=r,this.map=c}};function Fs(r){this.l=r||10,l.PerformanceNavigationTiming?(r=l.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ms(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Os(r){return r.h?1:r.g?r.g.size:0}function Do(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function Bo(r,c){r.g?r.g.add(c):r.h=c}function zs(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}Fs.prototype.cancel=function(){if(this.i=js(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function js(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const u of r.g.values())c=c.concat(u.D);return c}return k(r.i)}function Nd(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(d(r)){for(var c=[],u=r.length,w=0;w<u;w++)c.push(r[w]);return c}c=[],u=0;for(w in r)c[u++]=r[w];return c}function Ld(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(d(r)||typeof r=="string"){var c=[];r=r.length;for(var u=0;u<r;u++)c.push(u);return c}c=[],u=0;for(const w in r)c[u++]=w;return c}}}function qs(r,c){if(r.forEach&&typeof r.forEach=="function")r.forEach(c,void 0);else if(d(r)||typeof r=="string")Array.prototype.forEach.call(r,c,void 0);else for(var u=Ld(r),w=Nd(r),R=w.length,N=0;N<R;N++)c.call(void 0,w[N],u&&u[N],r)}var Hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fd(r,c){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var w=r[u].indexOf("="),R=null;if(0<=w){var N=r[u].substring(0,w);R=r[u].substring(w+1)}else N=r[u];c(N,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Ce(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ce){this.h=r.h,fi(this,r.j),this.o=r.o,this.g=r.g,mi(this,r.s),this.l=r.l;var c=r.i,u=new Tn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),Us(this,u),this.m=r.m}else r&&(c=String(r).match(Hs))?(this.h=!1,fi(this,c[1]||"",!0),this.o=En(c[2]||""),this.g=En(c[3]||"",!0),mi(this,c[4]),this.l=En(c[5]||"",!0),Us(this,c[6]||"",!0),this.m=En(c[7]||"")):(this.h=!1,this.i=new Tn(null,this.h))}Ce.prototype.toString=function(){var r=[],c=this.j;c&&r.push(In(c,$s,!0),":");var u=this.g;return(u||c=="file")&&(r.push("//"),(c=this.o)&&r.push(In(c,$s,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(In(u,u.charAt(0)=="/"?zd:Od,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",In(u,qd)),r.join("")};function te(r){return new Ce(r)}function fi(r,c,u){r.j=u?En(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function mi(r,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);r.s=c}else r.s=null}function Us(r,c,u){c instanceof Tn?(r.i=c,Hd(r.i,r.h)):(u||(c=In(c,jd)),r.i=new Tn(c,r.h))}function ot(r,c,u){r.i.set(c,u)}function gi(r){return ot(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function En(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function In(r,c,u){return typeof r=="string"?(r=encodeURI(r).replace(c,Md),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Md(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var $s=/[#\/\?@]/g,Od=/[#\?:]/g,zd=/[#\?]/g,jd=/[#\?@]/g,qd=/#/g;function Tn(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function ce(r){r.g||(r.g=new Map,r.h=0,r.i&&Fd(r.i,function(c,u){r.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Tn.prototype,n.add=function(r,c){ce(this),this.i=null,r=Ue(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(c),this.h+=1,this};function Qs(r,c){ce(r),c=Ue(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function Ws(r,c){return ce(r),c=Ue(r,c),r.g.has(c)}n.forEach=function(r,c){ce(this),this.g.forEach(function(u,w){u.forEach(function(R){r.call(c,R,w,this)},this)},this)},n.na=function(){ce(this);const r=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let w=0;w<c.length;w++){const R=r[w];for(let N=0;N<R.length;N++)u.push(c[w])}return u},n.V=function(r){ce(this);let c=[];if(typeof r=="string")Ws(this,r)&&(c=c.concat(this.g.get(Ue(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)c=c.concat(r[u])}return c},n.set=function(r,c){return ce(this),this.i=null,r=Ue(this,r),Ws(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},n.get=function(r,c){return r?(r=this.V(r),0<r.length?String(r[0]):c):c};function Gs(r,c,u){Qs(r,c),0<u.length&&(r.i=null,r.g.set(Ue(r,c),k(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var w=c[u];const N=encodeURIComponent(String(w)),M=this.V(w);for(w=0;w<M.length;w++){var R=N;M[w]!==""&&(R+="="+encodeURIComponent(String(M[w]))),r.push(R)}}return this.i=r.join("&")};function Ue(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function Hd(r,c){c&&!r.j&&(ce(r),r.i=null,r.g.forEach(function(u,w){var R=w.toLowerCase();w!=R&&(Qs(this,w),Gs(this,R,u))},r)),r.j=c}function Ud(r,c){const u=new An;if(l.Image){const w=new Image;w.onload=x(de,u,"TestLoadImage: loaded",!0,c,w),w.onerror=x(de,u,"TestLoadImage: error",!1,c,w),w.onabort=x(de,u,"TestLoadImage: abort",!1,c,w),w.ontimeout=x(de,u,"TestLoadImage: timeout",!1,c,w),l.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=r}else c(!1)}function $d(r,c){const u=new An,w=new AbortController,R=setTimeout(()=>{w.abort(),de(u,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:w.signal}).then(N=>{clearTimeout(R),N.ok?de(u,"TestPingServer: ok",!0,c):de(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),de(u,"TestPingServer: error",!1,c)})}function de(r,c,u,w,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),w(u)}catch{}}function Qd(){this.g=new Cd}function Wd(r,c,u){const w=u||"";try{qs(r,function(R,N){let M=R;h(R)&&(M=Eo(R)),c.push(w+N+"="+encodeURIComponent(M))})}catch(R){throw c.push(w+"type="+encodeURIComponent("_badmap")),R}}function yi(r){this.l=r.Ub||null,this.j=r.eb||!1}T(yi,Io),yi.prototype.g=function(){return new vi(this.l,this.j)},yi.prototype.i=function(r){return function(){return r}}({});function vi(r,c){It.call(this),this.D=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(vi,It),n=vi.prototype,n.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=c,this.readyState=1,Cn(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(c.body=r),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ks(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ks(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?Rn(this):Cn(this),this.readyState==3&&Ks(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Rn(this))},n.Qa=function(r){this.g&&(this.response=r,Rn(this))},n.ga=function(){this.g&&Rn(this)};function Rn(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Cn(r)}n.setRequestHeader=function(r,c){this.u.append(r,c)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=c.next();return r.join(`\r
`)};function Cn(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Xs(r){let c="";return I(r,function(u,w){c+=w,c+=":",c+=u,c+=`\r
`}),c}function No(r,c,u){t:{for(w in u){var w=!1;break t}w=!0}w||(u=Xs(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):ot(r,c,u))}function st(r){It.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(st,It);var Gd=/^https?$/i,Kd=["POST","PUT"];n=st.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,c,u,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Co.g(),this.v=this.o?Is(this.o):Is(Co),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(N){Js(this,N);return}if(r=u||"",u=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var R in w)u.set(R,w[R]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const N of w.keys())u.set(N,w.get(N));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(u.keys()).find(N=>N.toLowerCase()=="content-type"),R=l.FormData&&r instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Kd,c,void 0))||w||R||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,M]of u)this.g.setRequestHeader(N,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ta(this),this.u=!0,this.g.send(r),this.u=!1}catch(N){Js(this,N)}};function Js(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.m=5,Zs(r),bi(r)}function Zs(r){r.A||(r.A=!0,kt(r,"complete"),kt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,kt(this,"complete"),kt(this,"abort"),bi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bi(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ys(this):this.bb())},n.bb=function(){Ys(this)};function Ys(r){if(r.h&&typeof a<"u"&&(!r.v[1]||ee(r)!=4||r.Z()!=2)){if(r.u&&ee(r)==4)xs(r.Ea,0,r);else if(kt(r,"readystatechange"),ee(r)==4){r.h=!1;try{const M=r.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var w;if(w=M===0){var R=String(r.D).match(Hs)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),w=!Gd.test(R?R.toLowerCase():"")}u=w}if(u)kt(r,"complete"),kt(r,"success");else{r.m=6;try{var N=2<ee(r)?r.g.statusText:""}catch{N=""}r.l=N+" ["+r.Z()+"]",Zs(r)}}finally{bi(r)}}}}function bi(r,c){if(r.g){ta(r);const u=r.g,w=r.v[0]?()=>{}:null;r.g=null,r.v=null,c||kt(r,"ready");try{u.onreadystatechange=w}catch{}}}function ta(r){r.I&&(l.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function ee(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<ee(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),Rd(c)}};function ea(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Xd(r){const c={};r=(r.g&&2<=ee(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<r.length;w++){if(P(r[w]))continue;var u=_(r[w]);const R=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const N=c[R]||[];c[R]=N,N.push(u)}m(c,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sn(r,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||c}function na(r){this.Aa=0,this.i=[],this.j=new An,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sn("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sn("baseRetryDelayMs",5e3,r),this.cb=Sn("retryDelaySeedMs",1e4,r),this.Wa=Sn("forwardChannelMaxRetries",2,r),this.wa=Sn("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Fs(r&&r.concurrentRequestLimit),this.Da=new Qd,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=na.prototype,n.la=8,n.G=1,n.connect=function(r,c,u,w){Vt(0),this.W=r,this.H=c||{},u&&w!==void 0&&(this.H.OSID=u,this.H.OAID=w),this.F=this.X,this.I=ua(this,null,this.W),xi(this)};function Lo(r){if(ia(r),r.G==3){var c=r.U++,u=te(r.I);if(ot(u,"SID",r.K),ot(u,"RID",c),ot(u,"TYPE","terminate"),Pn(r,u),c=new le(r,r.j,c),c.L=2,c.v=gi(te(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=ha(c.j,null),c.g.ea(c.v)),c.F=Date.now(),pi(c)}da(r)}function wi(r){r.g&&(Mo(r),r.g.cancel(),r.g=null)}function ia(r){wi(r),r.u&&(l.clearTimeout(r.u),r.u=null),Ai(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&l.clearTimeout(r.s),r.s=null)}function xi(r){if(!Ms(r.h)&&!r.s){r.s=!0;var c=r.Ga;Lt||qt(),Bt||(Lt(),Bt=!0),jt.add(c,r),r.B=0}}function Jd(r,c){return Os(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=c.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=xn(g(r.Ga,r,c),ca(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const R=new le(this,this.j,r);let N=this.o;if(this.S&&(N?(N=f(N),E(N,this.S)):N=this.S),this.m!==null||this.O||(R.H=N,N=null),this.P)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var w=this.i[u];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(c+=w,4096<c){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=ra(this,R,c),u=te(this.I),ot(u,"RID",r),ot(u,"CVER",22),this.D&&ot(u,"X-HTTP-Session-Id",this.D),Pn(this,u),N&&(this.O?c="headers="+encodeURIComponent(String(Xs(N)))+"&"+c:this.m&&No(u,this.m,N)),Bo(this.h,R),this.Ua&&ot(u,"TYPE","init"),this.P?(ot(u,"$req",c),ot(u,"SID","null"),R.T=!0,Po(R,u,null)):Po(R,u,c),this.G=2}}else this.G==3&&(r?oa(this,r):this.i.length==0||Ms(this.h)||oa(this))};function oa(r,c){var u;c?u=c.l:u=r.U++;const w=te(r.I);ot(w,"SID",r.K),ot(w,"RID",u),ot(w,"AID",r.T),Pn(r,w),r.m&&r.o&&No(w,r.m,r.o),u=new le(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),c&&(r.i=c.D.concat(r.i)),c=ra(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Bo(r.h,u),Po(u,w,c)}function Pn(r,c){r.H&&I(r.H,function(u,w){ot(c,w,u)}),r.l&&qs({},function(u,w){ot(c,w,u)})}function ra(r,c,u){u=Math.min(r.i.length,u);var w=r.l?g(r.l.Na,r.l,r):null;t:{var R=r.i;let N=-1;for(;;){const M=["count="+u];N==-1?0<u?(N=R[0].g,M.push("ofs="+N)):N=0:M.push("ofs="+N);let tt=!0;for(let mt=0;mt<u;mt++){let J=R[mt].g;const Tt=R[mt].map;if(J-=N,0>J)N=Math.max(0,R[mt].g-100),tt=!1;else try{Wd(Tt,M,"req"+J+"_")}catch{w&&w(Tt)}}if(tt){w=M.join("&");break t}}}return r=r.i.splice(0,u),c.D=r,w}function sa(r){if(!r.g&&!r.u){r.Y=1;var c=r.Fa;Lt||qt(),Bt||(Lt(),Bt=!0),jt.add(c,r),r.v=0}}function Fo(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=xn(g(r.Fa,r),ca(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,aa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=xn(g(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),wi(this),aa(this))};function Mo(r){r.A!=null&&(l.clearTimeout(r.A),r.A=null)}function aa(r){r.g=new le(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var c=te(r.qa);ot(c,"RID","rpc"),ot(c,"SID",r.K),ot(c,"AID",r.T),ot(c,"CI",r.F?"0":"1"),!r.F&&r.ja&&ot(c,"TO",r.ja),ot(c,"TYPE","xmlhttp"),Pn(r,c),r.m&&r.o&&No(c,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=gi(te(c)),u.m=null,u.P=!0,Bs(u,r)}n.Za=function(){this.C!=null&&(this.C=null,wi(this),Fo(this),Vt(19))};function Ai(r){r.C!=null&&(l.clearTimeout(r.C),r.C=null)}function la(r,c){var u=null;if(r.g==c){Ai(r),Mo(r),r.g=null;var w=2}else if(Do(r.h,c))u=c.D,zs(r.h,c),w=1;else return;if(r.G!=0){if(c.o)if(w==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var R=r.B;w=di(),kt(w,new Ps(w,u)),xi(r)}else sa(r);else if(R=c.s,R==3||R==0&&0<c.X||!(w==1&&Jd(r,c)||w==2&&Fo(r)))switch(u&&0<u.length&&(c=r.h,c.i=c.i.concat(u)),R){case 1:Se(r,5);break;case 4:Se(r,10);break;case 3:Se(r,6);break;default:Se(r,2)}}}function ca(r,c){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*c}function Se(r,c){if(r.j.info("Error code "+c),c==2){var u=g(r.fb,r),w=r.Xa;const R=!w;w=new Ce(w||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fi(w,"https"),gi(w),R?Ud(w.toString(),u):$d(w.toString(),u)}else Vt(2);r.G=0,r.l&&r.l.sa(c),da(r),ia(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function da(r){if(r.G=0,r.ka=[],r.l){const c=js(r.h);(c.length!=0||r.i.length!=0)&&(V(r.ka,c),V(r.ka,r.i),r.h.i.length=0,k(r.i),r.i.length=0),r.l.ra()}}function ua(r,c,u){var w=u instanceof Ce?te(u):new Ce(u);if(w.g!="")c&&(w.g=c+"."+w.g),mi(w,w.s);else{var R=l.location;w=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var N=new Ce(null);w&&fi(N,w),c&&(N.g=c),R&&mi(N,R),u&&(N.l=u),w=N}return u=r.D,c=r.ya,u&&c&&ot(w,u,c),ot(w,"VER",r.la),Pn(r,w),w}function ha(r,c,u){if(c&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Ca&&!r.pa?new st(new yi({eb:u})):new st(r.pa),c.Ha(r.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}n=pa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _i(){}_i.prototype.g=function(r,c){return new Ft(r,c)};function Ft(r,c){It.call(this),this.g=new na(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(r?r["X-WebChannel-Client-Profile"]=c.va:r={"X-WebChannel-Client-Profile":c.va}),this.g.S=r,(r=c&&c.Sb)&&!P(r)&&(this.g.m=r),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!P(c)&&(this.g.D=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new $e(this)}T(Ft,It),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Lo(this.g)},Ft.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=Eo(r),r=u);c.i.push(new Bd(c.Ya++,r)),c.G==3&&xi(c)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,Ft.aa.N.call(this)};function fa(r){To.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){t:{for(const u in c){r=u;break t}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}T(fa,To);function ma(){Ro.call(this),this.status=1}T(ma,Ro);function $e(r){this.g=r}T($e,pa),$e.prototype.ua=function(){kt(this.g,"a")},$e.prototype.ta=function(r){kt(this.g,new fa(r))},$e.prototype.sa=function(r){kt(this.g,new ma)},$e.prototype.ra=function(){kt(this.g,"b")},_i.prototype.createWebChannel=_i.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,Ll=function(){return new _i},Nl=function(){return di()},Bl=Te,ir={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ui.NO_ERROR=0,ui.TIMEOUT=8,ui.HTTP_ERROR=6,Pi=ui,ks.COMPLETE="complete",Dl=ks,Ts.EventType=bn,bn.OPEN="a",bn.CLOSE="b",bn.ERROR="c",bn.MESSAGE="d",It.prototype.listen=It.prototype.K,Vn=Ts,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,Vl=st}).apply(typeof Ii<"u"?Ii:typeof self<"u"?self:typeof window<"u"?window:{});const Ra="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De=new Il("@firebase/firestore");function kn(){return De.logLevel}function z(n,...t){if(De.logLevel<=K.DEBUG){const e=t.map(Er);De.debug(`Firestore (${cn}): ${n}`,...e)}}function oe(n,...t){if(De.logLevel<=K.ERROR){const e=t.map(Er);De.error(`Firestore (${cn}): ${n}`,...e)}}function tn(n,...t){if(De.logLevel<=K.WARN){const e=t.map(Er);De.warn(`Firestore (${cn}): ${n}`,...e)}}function Er(n){if(typeof n=="string")return n;try{/**
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
 */function q(n="Unexpected state"){const t=`FIRESTORE (${cn}) INTERNAL ASSERTION FAILED: `+n;throw oe(t),new Error(t)}function X(n,t){n||q()}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ln{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ph{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(St.UNAUTHENTICATED))}shutdown(){}}class kh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Vh{constructor(t){this.t=t,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0);let i=this.i;const o=d=>this.i!==i?(i=this.i,e(d)):Promise.resolve();let s=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kt,t.enqueueRetryable(()=>o(this.currentUser))};const a=()=>{const d=s;t.enqueueRetryable(async()=>{await d.promise,await o(this.currentUser)})},l=d=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(X(typeof i.accessToken=="string"),new Fl(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new St(t)}}class Dh{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=St.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Bh{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Dh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){X(this.o===void 0);const i=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const o=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>o(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?o(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new Nh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Fh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const o=Fh(40);for(let s=0;s<o.length;++s)i.length<20&&o[s]<e&&(i+=t.charAt(o[s]%t.length))}return i}}function Z(n,t){return n<t?-1:n>t?1:0}function en(n,t,e){return n.length===t.length&&n.every((i,o)=>e(i,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ht.fromMillis(Date.now())}static fromDate(t){return ht.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new ht(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new ht(0,0))}static max(){return new H(new ht(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e,i){e===void 0?e=0:e>t.length&&q(),i===void 0?i=t.length-e:i>t.length-e&&q(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return qn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof qn?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let o=0;o<i;o++){const s=t.get(o),a=e.get(o);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class et extends qn{construct(t,e,i){return new et(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new O(L.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(o=>o.length>0))}return new et(e)}static emptyPath(){return new et([])}}const Mh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends qn{construct(t,e,i){return new yt(t,e,i)}static isValidIdentifier(t){return Mh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(t){const e=[];let i="",o=0;const s=()=>{if(i.length===0)throw new O(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let a=!1;for(;o<t.length;){const l=t[o];if(l==="\\"){if(o+1===t.length)throw new O(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[o+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=d,o+=2}else l==="`"?(a=!a,o++):l!=="."||a?(i+=l,o++):(s(),o++)}if(s(),a)throw new O(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(et.fromString(t))}static fromName(t){return new j(et.fromString(t).popFirst(5))}static empty(){return new j(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new et(t.slice()))}}function Oh(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=H.fromTimestamp(i===1e9?new ht(e+1,0):new ht(e,i));return new ve(o,j.empty(),t)}function zh(n){return new ve(n.readTime,n.key,-1)}class ve{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new ve(H.min(),j.empty(),-1)}static max(){return new ve(H.max(),j.empty(),-1)}}function jh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:Z(n.largestBatchId,t.largestBatchId))}/**
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
 */const qh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==qh)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new F((i,o)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,o)},this.catchCallback=s=>{this.wrapFailure(e,s).next(i,o)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof F?e:F.resolve(e)}catch(e){return F.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):F.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):F.reject(e)}static resolve(t){return new F((e,i)=>{e(t)})}static reject(t){return new F((e,i)=>{i(t)})}static waitFor(t){return new F((e,i)=>{let o=0,s=0,a=!1;t.forEach(l=>{++o,l.next(()=>{++s,a&&s===o&&e()},d=>i(d))}),a=!0,s===o&&e()})}static or(t){let e=F.resolve(!1);for(const i of t)e=e.next(o=>o?F.resolve(o):i());return e}static forEach(t,e){const i=[];return t.forEach((o,s)=>{i.push(e.call(this,o,s))}),this.waitFor(i)}static mapArray(t,e){return new F((i,o)=>{const s=t.length,a=new Array(s);let l=0;for(let d=0;d<s;d++){const h=d;e(t[h]).next(v=>{a[h]=v,++l,l===s&&i(a)},v=>o(v))}})}static doWhile(t,e){return new F((i,o)=>{const s=()=>{t()===!0?e().next(()=>{s()},o):i()};s()})}}function Uh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Yn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ir{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ir.oe=-1;function ti(n){return n==null}function Oi(n){return n===0&&1/n==-1/0}function $h(n){return typeof n=="number"&&Number.isInteger(n)&&!Oi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Fe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ol(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||gt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(t,i.key);if(o===0)return e+i.left.size;o<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ti(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ti(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ti(this.root,t,this.comparator,!0)}}class Ti{constructor(t,e,i,o){this.isReverse=o,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,e&&o&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gt{constructor(t,e,i,o,s){this.key=t,this.value=e,this.color=i??gt.RED,this.left=o??gt.EMPTY,this.right=s??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,o,s){return new gt(t??this.key,e??this.value,i??this.color,o??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let o=this;const s=i(t,o.key);return o=s<0?o.copy(null,null,null,o.left.insert(t,e,i),null):s===0?o.copy(null,e,null,null,null):o.copy(null,null,null,null,o.right.insert(t,e,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,o=this;if(e(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,e),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),e(t,o.key)===0){if(o.right.isEmpty())return gt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,e))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const t=this.left.check();if(t!==this.right.check())throw q();return t+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,i,o,s){return this}insert(t,e,i){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,t[1])>=0)return;e(o.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Sa(this.data.getIterator())}getIteratorFrom(t){return new Sa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof vt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const o=e.getNext().key,s=i.getNext().key;if(this.comparator(o,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new vt(this.comparator);return e.data=t,e}}class Sa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new vt(yt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return en(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class zl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(o){try{return atob(o)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new zl("Invalid base64 string: "+s):s}}(t);return new wt(e)}static fromUint8Array(t){const e=function(o){let s="";for(let a=0;a<o.length;++a)s+=String.fromCharCode(o[a]);return s}(t);return new wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let o=0;o<e.length;o++)i[o]=e.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const Qh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function be(n){if(X(!!n),typeof n=="string"){let t=0;const e=Qh.exec(n);if(X(!!e),e[1]){let o=e[1];o=(o+"000000000").substr(0,9),t=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Be(n){return typeof n=="string"?wt.fromBase64String(n):wt.fromUint8Array(n)}/**
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
 */function Tr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Rr(n){const t=n.mapValue.fields.__previous_value__;return Tr(t)?Rr(t):t}function Hn(n){const t=be(n.mapValue.fields.__local_write_time__.timestampValue);return new ht(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e,i,o,s,a,l,d,h){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=o,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=h}}class Un{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Un&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ri={mapValue:{}};function Ne(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Tr(n)?4:Kh(n)?9007199254740991:Gh(n)?10:11:q()}function Jt(n,t){if(n===t)return!0;const e=Ne(n);if(e!==Ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Hn(n).isEqual(Hn(t));case 3:return function(o,s){if(typeof o.timestampValue=="string"&&typeof s.timestampValue=="string"&&o.timestampValue.length===s.timestampValue.length)return o.timestampValue===s.timestampValue;const a=be(o.timestampValue),l=be(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(o,s){return Be(o.bytesValue).isEqual(Be(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(o,s){return at(o.geoPointValue.latitude)===at(s.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(s.geoPointValue.longitude)}(n,t);case 2:return function(o,s){if("integerValue"in o&&"integerValue"in s)return at(o.integerValue)===at(s.integerValue);if("doubleValue"in o&&"doubleValue"in s){const a=at(o.doubleValue),l=at(s.doubleValue);return a===l?Oi(a)===Oi(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return en(n.arrayValue.values||[],t.arrayValue.values||[],Jt);case 10:case 11:return function(o,s){const a=o.mapValue.fields||{},l=s.mapValue.fields||{};if(Ca(a)!==Ca(l))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(l[d]===void 0||!Jt(a[d],l[d])))return!1;return!0}(n,t);default:return q()}}function $n(n,t){return(n.values||[]).find(e=>Jt(e,t))!==void 0}function nn(n,t){if(n===t)return 0;const e=Ne(n),i=Ne(t);if(e!==i)return Z(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=at(s.integerValue||s.doubleValue),d=at(a.integerValue||a.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(n,t);case 3:return Pa(n.timestampValue,t.timestampValue);case 4:return Pa(Hn(n),Hn(t));case 5:return Z(n.stringValue,t.stringValue);case 6:return function(s,a){const l=Be(s),d=Be(a);return l.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),d=a.split("/");for(let h=0;h<l.length&&h<d.length;h++){const v=Z(l[h],d[h]);if(v!==0)return v}return Z(l.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=Z(at(s.latitude),at(a.latitude));return l!==0?l:Z(at(s.longitude),at(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ka(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,d,h,v;const p=s.fields||{},g=a.fields||{},x=(l=p.value)===null||l===void 0?void 0:l.arrayValue,T=(d=g.value)===null||d===void 0?void 0:d.arrayValue,k=Z(((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0,((v=T==null?void 0:T.values)===null||v===void 0?void 0:v.length)||0);return k!==0?k:ka(x,T)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===Ri.mapValue&&a===Ri.mapValue)return 0;if(s===Ri.mapValue)return 1;if(a===Ri.mapValue)return-1;const l=s.fields||{},d=Object.keys(l),h=a.fields||{},v=Object.keys(h);d.sort(),v.sort();for(let p=0;p<d.length&&p<v.length;++p){const g=Z(d[p],v[p]);if(g!==0)return g;const x=nn(l[d[p]],h[v[p]]);if(x!==0)return x}return Z(d.length,v.length)}(n.mapValue,t.mapValue);default:throw q()}}function Pa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Z(n,t);const e=be(n),i=be(t),o=Z(e.seconds,i.seconds);return o!==0?o:Z(e.nanos,i.nanos)}function ka(n,t){const e=n.values||[],i=t.values||[];for(let o=0;o<e.length&&o<i.length;++o){const s=nn(e[o],i[o]);if(s)return s}return Z(e.length,i.length)}function on(n){return or(n)}function or(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=be(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Be(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",o=!0;for(const s of e.values||[])o?o=!1:i+=",",i+=or(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let o="{",s=!0;for(const a of i)s?s=!1:o+=",",o+=`${a}:${or(e.fields[a])}`;return o+"}"}(n.mapValue):q()}function Va(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function rr(n){return!!n&&"integerValue"in n}function Cr(n){return!!n&&"arrayValue"in n}function Da(n){return!!n&&"nullValue"in n}function Ba(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ki(n){return!!n&&"mapValue"in n}function Gh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Nn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Fe(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Nn(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Nn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Kh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.value=t}static empty(){return new Dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!ki(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Nn(e)}setAll(t){let e=yt.emptyPath(),i={},o=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,i,o),i={},o=[],e=l.popLast()}a?i[l.lastSegment()]=Nn(a):o.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,i,o)}delete(t){const e=this.field(t.popLast());ki(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let o=e.mapValue.fields[t.get(i)];ki(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=o),e=o}return e.mapValue.fields}applyChanges(t,e,i){Fe(e,(o,s)=>t[o]=s);for(const o of i)delete t[o]}clone(){return new Dt(Nn(this.value))}}function jl(n){const t=[];return Fe(n.fields,(e,i)=>{const o=new yt([e]);if(ki(i)){const s=jl(i.mapValue).fields;if(s.length===0)t.push(o);else for(const a of s)t.push(o.child(a))}else t.push(o)}),new Mt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,e,i,o,s,a,l){this.key=t,this.documentType=e,this.version=i,this.readTime=o,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ft(t,0,H.min(),H.min(),H.min(),Dt.empty(),0)}static newFoundDocument(t,e,i,o){return new ft(t,1,e,H.min(),i,o,0)}static newNoDocument(t,e){return new ft(t,2,e,H.min(),H.min(),Dt.empty(),0)}static newUnknownDocument(t,e){return new ft(t,3,e,H.min(),H.min(),Dt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ft&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zi{constructor(t,e){this.position=t,this.inclusive=e}}function Na(n,t,e){let i=0;for(let o=0;o<n.position.length;o++){const s=t[o],a=n.position[o];if(s.field.isKeyField()?i=j.comparator(j.fromName(a.referenceValue),e.key):i=nn(a,e.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function La(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Jt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Qn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Xh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ql{}class dt extends ql{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Zh(t,e,i):e==="array-contains"?new ep(t,i):e==="in"?new np(t,i):e==="not-in"?new ip(t,i):e==="array-contains-any"?new op(t,i):new dt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Yh(t,i):new tp(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(nn(e,this.value)):e!==null&&Ne(this.value)===Ne(e)&&this.matchesComparison(nn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends ql{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new $t(t,e)}matches(t){return Hl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hl(n){return n.op==="and"}function Ul(n){return Jh(n)&&Hl(n)}function Jh(n){for(const t of n.filters)if(t instanceof $t)return!1;return!0}function sr(n){if(n instanceof dt)return n.field.canonicalString()+n.op.toString()+on(n.value);if(Ul(n))return n.filters.map(t=>sr(t)).join(",");{const t=n.filters.map(e=>sr(e)).join(",");return`${n.op}(${t})`}}function $l(n,t){return n instanceof dt?function(i,o){return o instanceof dt&&i.op===o.op&&i.field.isEqual(o.field)&&Jt(i.value,o.value)}(n,t):n instanceof $t?function(i,o){return o instanceof $t&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((s,a,l)=>s&&$l(a,o.filters[l]),!0):!1}(n,t):void q()}function Ql(n){return n instanceof dt?function(e){return`${e.field.canonicalString()} ${e.op} ${on(e.value)}`}(n):n instanceof $t?function(e){return e.op.toString()+" {"+e.getFilters().map(Ql).join(" ,")+"}"}(n):"Filter"}class Zh extends dt{constructor(t,e,i){super(t,e,i),this.key=j.fromName(i.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class Yh extends dt{constructor(t,e){super(t,"in",e),this.keys=Wl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class tp extends dt{constructor(t,e){super(t,"not-in",e),this.keys=Wl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Wl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>j.fromName(i.referenceValue))}class ep extends dt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Cr(e)&&$n(e.arrayValue,this.value)}}class np extends dt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&$n(this.value.arrayValue,e)}}class ip extends dt{constructor(t,e){super(t,"not-in",e)}matches(t){if($n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!$n(this.value.arrayValue,e)}}class op extends dt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Cr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>$n(this.value.arrayValue,i))}}/**
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
 */class rp{constructor(t,e=null,i=[],o=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=o,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Fa(n,t=null,e=[],i=[],o=null,s=null,a=null){return new rp(n,t,e,i,o,s,a)}function Sr(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>sr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),ti(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>on(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>on(i)).join(",")),t.ue=e}return t.ue}function Pr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Xh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!$l(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!La(n.startAt,t.startAt)&&La(n.endAt,t.endAt)}function ar(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e=null,i=[],o=[],s=null,a="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=o,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sp(n,t,e,i,o,s,a,l){return new dn(n,t,e,i,o,s,a,l)}function Ji(n){return new dn(n)}function Ma(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gl(n){return n.collectionGroup!==null}function Ln(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new vt(yt.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Qn(s,i))}),e.has(yt.keyField().canonicalString())||t.ce.push(new Qn(yt.keyField(),i))}return t.ce}function Xt(n){const t=U(n);return t.le||(t.le=ap(t,Ln(n))),t.le}function ap(n,t){if(n.limitType==="F")return Fa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(o=>{const s=o.dir==="desc"?"asc":"desc";return new Qn(o.field,s)});const e=n.endAt?new zi(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new zi(n.startAt.position,n.startAt.inclusive):null;return Fa(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function lr(n,t){const e=n.filters.concat([t]);return new dn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function cr(n,t,e){return new dn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Zi(n,t){return Pr(Xt(n),Xt(t))&&n.limitType===t.limitType}function Kl(n){return`${Sr(Xt(n))}|lt:${n.limitType}`}function Ge(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(o=>Ql(o)).join(", ")}]`),ti(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(o=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(o)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(o=>on(o)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(o=>on(o)).join(",")),`Target(${i})`}(Xt(n))}; limitType=${n.limitType})`}function Yi(n,t){return t.isFoundDocument()&&function(i,o){const s=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):j.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,t)&&function(i,o){for(const s of Ln(i))if(!s.field.isKeyField()&&o.data.field(s.field)===null)return!1;return!0}(n,t)&&function(i,o){for(const s of i.filters)if(!s.matches(o))return!1;return!0}(n,t)&&function(i,o){return!(i.startAt&&!function(a,l,d){const h=Na(a,l,d);return a.inclusive?h<=0:h<0}(i.startAt,Ln(i),o)||i.endAt&&!function(a,l,d){const h=Na(a,l,d);return a.inclusive?h>=0:h>0}(i.endAt,Ln(i),o))}(n,t)}function lp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xl(n){return(t,e)=>{let i=!1;for(const o of Ln(n)){const s=cp(o,t,e);if(s!==0)return s;i=i||o.field.isKeyField()}return 0}}function cp(n,t,e){const i=n.field.isKeyField()?j.comparator(t.key,e.key):function(s,a,l){const d=a.data.field(s),h=l.data.field(s);return d!==null&&h!==null?nn(d,h):q()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[o,s]of i)if(this.equalsFn(o,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),o=this.inner[i];if(o===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let s=0;s<o.length;s++)if(this.equalsFn(o[s][0],t))return void(o[s]=[t,e]);o.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return i.length===1?delete this.inner[e]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Fe(this.inner,(e,i)=>{for(const[o,s]of i)t(o,s)})}isEmpty(){return Ol(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new rt(j.comparator);function re(){return dp}const Jl=new rt(j.comparator);function Dn(...n){let t=Jl;for(const e of n)t=t.insert(e.key,e);return t}function Zl(n){let t=Jl;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function ke(){return Fn()}function Yl(){return Fn()}function Fn(){return new un(n=>n.toString(),(n,t)=>n.isEqual(t))}const up=new rt(j.comparator),hp=new vt(j.comparator);function W(...n){let t=hp;for(const e of n)t=t.add(e);return t}const pp=new vt(Z);function fp(){return pp}/**
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
 */function kr(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oi(t)?"-0":t}}function tc(n){return{integerValue:""+n}}function mp(n,t){return $h(t)?tc(t):kr(n,t)}/**
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
 */class to{constructor(){this._=void 0}}function gp(n,t,e){return n instanceof Wn?function(o,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return s&&Tr(s)&&(s=Rr(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof Gn?nc(n,t):n instanceof Kn?ic(n,t):function(o,s){const a=ec(o,s),l=Oa(a)+Oa(o.Pe);return rr(a)&&rr(o.Pe)?tc(l):kr(o.serializer,l)}(n,t)}function yp(n,t,e){return n instanceof Gn?nc(n,t):n instanceof Kn?ic(n,t):e}function ec(n,t){return n instanceof ji?function(i){return rr(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class Wn extends to{}class Gn extends to{constructor(t){super(),this.elements=t}}function nc(n,t){const e=oc(t);for(const i of n.elements)e.some(o=>Jt(o,i))||e.push(i);return{arrayValue:{values:e}}}class Kn extends to{constructor(t){super(),this.elements=t}}function ic(n,t){let e=oc(t);for(const i of n.elements)e=e.filter(o=>!Jt(o,i));return{arrayValue:{values:e}}}class ji extends to{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Oa(n){return at(n.integerValue||n.doubleValue)}function oc(n){return Cr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t,e){this.field=t,this.transform=e}}function bp(n,t){return n.field.isEqual(t.field)&&function(i,o){return i instanceof Gn&&o instanceof Gn||i instanceof Kn&&o instanceof Kn?en(i.elements,o.elements,Jt):i instanceof ji&&o instanceof ji?Jt(i.Pe,o.Pe):i instanceof Wn&&o instanceof Wn}(n.transform,t.transform)}class wp{constructor(t,e){this.version=t,this.transformResults=e}}class ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ut}static exists(t){return new ut(void 0,t)}static updateTime(t){return new ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Vi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class eo{}function rc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ni(n.key,ut.none()):new ei(n.key,n.data,ut.none());{const e=n.data,i=Dt.empty();let o=new vt(yt.comparator);for(let s of t.fields)if(!o.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?i.delete(s):i.set(s,a),o=o.add(s)}return new Ae(n.key,i,new Mt(o.toArray()),ut.none())}}function xp(n,t,e){n instanceof ei?function(o,s,a){const l=o.value.clone(),d=ja(o.fieldTransforms,s,a.transformResults);l.setAll(d),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Ae?function(o,s,a){if(!Vi(o.precondition,s))return void s.convertToUnknownDocument(a.version);const l=ja(o.fieldTransforms,s,a.transformResults),d=s.data;d.setAll(sc(o)),d.setAll(l),s.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,t,e):function(o,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Mn(n,t,e,i){return n instanceof ei?function(s,a,l,d){if(!Vi(s.precondition,a))return l;const h=s.value.clone(),v=qa(s.fieldTransforms,d,a);return h.setAll(v),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,i):n instanceof Ae?function(s,a,l,d){if(!Vi(s.precondition,a))return l;const h=qa(s.fieldTransforms,d,a),v=a.data;return v.setAll(sc(s)),v.setAll(h),a.convertToFoundDocument(a.version,v).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,t,e,i):function(s,a,l){return Vi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Ap(n,t){let e=null;for(const i of n.fieldTransforms){const o=t.data.field(i.field),s=ec(i.transform,o||null);s!=null&&(e===null&&(e=Dt.empty()),e.set(i.field,s))}return e||null}function za(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&en(i,o,(s,a)=>bp(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ei extends eo{constructor(t,e,i,o=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ae extends eo{constructor(t,e,i,o,s=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=o,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function ja(n,t,e){const i=new Map;X(n.length===e.length);for(let o=0;o<e.length;o++){const s=n[o],a=s.transform,l=t.data.field(s.field);i.set(s.field,yp(a,l,e[o]))}return i}function qa(n,t,e){const i=new Map;for(const o of n){const s=o.transform,a=e.data.field(o.field);i.set(o.field,gp(s,a,t))}return i}class ni extends eo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ac extends eo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t,e,i,o){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let o=0;o<this.mutations.length;o++){const s=this.mutations[o];s.key.isEqual(t.key)&&xp(s,t,i[o])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Mn(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Mn(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Yl();return this.mutations.forEach(o=>{const s=t.get(o.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(o.key)?null:l;const d=rc(a,l);d!==null&&i.set(o.key,d),a.isValidDocument()||a.convertToNoDocument(H.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),W())}isEqual(t){return this.batchId===t.batchId&&en(this.mutations,t.mutations,(e,i)=>za(e,i))&&en(this.baseMutations,t.baseMutations,(e,i)=>za(e,i))}}class Vr{constructor(t,e,i,o){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=o}static from(t,e,i){X(t.mutations.length===i.length);let o=function(){return up}();const s=t.mutations;for(let a=0;a<s.length;a++)o=o.insert(s[a].key,i[a].version);return new Vr(t,e,i,o)}}/**
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
 */class Ep{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var ct,G;function lc(n){switch(n){default:return q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function cc(n){if(n===void 0)return oe("GRPC error has no .code"),L.UNKNOWN;switch(n){case ct.OK:return L.OK;case ct.CANCELLED:return L.CANCELLED;case ct.UNKNOWN:return L.UNKNOWN;case ct.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ct.INTERNAL:return L.INTERNAL;case ct.UNAVAILABLE:return L.UNAVAILABLE;case ct.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ct.NOT_FOUND:return L.NOT_FOUND;case ct.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ct.ABORTED:return L.ABORTED;case ct.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ct.DATA_LOSS:return L.DATA_LOSS;default:return q()}}(G=ct||(ct={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Tp(){return new TextEncoder}/**
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
 */const Rp=new Ve([4294967295,4294967295],0);function Ha(n){const t=Tp().encode(n),e=new kl;return e.update(t),new Uint8Array(e.digest())}function Ua(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),o=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ve([e,i],0),new Ve([o,s],0)]}class Dr{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new Bn(`Invalid padding: ${e}`);if(i<0)throw new Bn(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Bn(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new Bn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ve.fromNumber(this.Ie)}Ee(t,e,i){let o=t.add(e.multiply(Ve.fromNumber(i)));return o.compare(Rp)===1&&(o=new Ve([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ha(t),[i,o]=Ua(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,o,s);if(!this.de(a))return!1}return!0}static create(t,e,i){const o=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Dr(s,o,e);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Ha(t),[i,o]=Ua(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,o,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class Bn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e,i,o,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const o=new Map;return o.set(t,ii.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new no(H.min(),o,new rt(Z),re(),W())}}class ii{constructor(t,e,i,o,s){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new ii(i,e,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,i,o){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=o}}class dc{constructor(t,e){this.targetId=t,this.me=e}}class uc{constructor(t,e,i=wt.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=o}}class $a{constructor(){this.fe=0,this.ge=Wa(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=W(),e=W(),i=W();return this.ge.forEach((o,s)=>{switch(s){case 0:t=t.add(o);break;case 2:e=e.add(o);break;case 1:i=i.add(o);break;default:q()}}),new ii(this.pe,this.ye,t,e,i)}Ce(){this.we=!1,this.ge=Wa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Cp{constructor(t){this.Le=t,this.Be=new Map,this.ke=re(),this.qe=Qa(),this.Qe=new rt(Z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:q()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,o)=>{this.ze(o)&&e(o)})}He(t){const e=t.targetId,i=t.me.count,o=this.Je(e);if(o){const s=o.target;if(ar(s))if(i===0){const a=new j(s.path);this.Ue(e,a,ft.newNoDocument(a,H.min()))}else X(i===1);else{const a=this.Ye(e);if(a!==i){const l=this.Ze(t),d=l?this.Xe(l,t,a):1;if(d!==0){this.je(e);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:s=0}=e;let a,l;try{a=Be(i).toUint8Array()}catch(d){if(d instanceof zl)return tn("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Dr(a,o,s)}catch(d){return tn(d instanceof Bn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Ie===0?null:l}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let o=0;return i.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),o++)}),o}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&ar(l.target)){const d=new j(l.target.path);this.ke.get(d)!==null||this.it(a,d)||this.Ue(a,d,ft.newNoDocument(d,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let i=W();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(d=>{const h=this.Je(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const o=new no(t,e,this.Qe,this.ke,i);return this.ke=re(),this.qe=Qa(),this.Qe=new rt(Z),o}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const o=this.Ge(t);this.it(t,e)?o.Fe(e,1):o.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new $a,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new vt(Z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||z("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new $a),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Qa(){return new rt(j.comparator)}function Wa(){return new rt(j.comparator)}const Sp={asc:"ASCENDING",desc:"DESCENDING"},Pp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kp={and:"AND",or:"OR"};class Vp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function dr(n,t){return n.useProto3Json||ti(t)?t:{value:t}}function qi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Dp(n,t){return qi(n,t.toTimestamp())}function Ot(n){return X(!!n),H.fromTimestamp(function(e){const i=be(e);return new ht(i.seconds,i.nanos)}(n))}function Br(n,t){return ur(n,t).canonicalString()}function ur(n,t){const e=function(o){return new et(["projects",o.projectId,"databases",o.database])}(n).child("documents");return t===void 0?e:e.child(t)}function pc(n){const t=et.fromString(n);return X(bc(t)),t}function Hi(n,t){return Br(n.databaseId,t.path)}function On(n,t){const e=pc(t);if(e.get(1)!==n.databaseId.projectId)throw new O(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(mc(e))}function fc(n,t){return Br(n.databaseId,t)}function Bp(n){const t=pc(n);return t.length===4?et.emptyPath():mc(t)}function hr(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mc(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ga(n,t,e){return{name:Hi(n,t),fields:e.value.mapValue.fields}}function Np(n,t){return"found"in t?function(i,o){X(!!o.found),o.found.name,o.found.updateTime;const s=On(i,o.found.name),a=Ot(o.found.updateTime),l=o.found.createTime?Ot(o.found.createTime):H.min(),d=new Dt({mapValue:{fields:o.found.fields}});return ft.newFoundDocument(s,a,l,d)}(n,t):"missing"in t?function(i,o){X(!!o.missing),X(!!o.readTime);const s=On(i,o.missing),a=Ot(o.readTime);return ft.newNoDocument(s,a)}(n,t):q()}function Lp(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],s=function(h,v){return h.useProto3Json?(X(v===void 0||typeof v=="string"),wt.fromBase64String(v||"")):(X(v===void 0||v instanceof Buffer||v instanceof Uint8Array),wt.fromUint8Array(v||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const v=h.code===void 0?L.UNKNOWN:cc(h.code);return new O(v,h.message||"")}(a);e=new uc(i,o,s,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const o=On(n,i.document.name),s=Ot(i.document.updateTime),a=i.document.createTime?Ot(i.document.createTime):H.min(),l=new Dt({mapValue:{fields:i.document.fields}}),d=ft.newFoundDocument(o,s,a,l),h=i.targetIds||[],v=i.removedTargetIds||[];e=new Di(h,v,d.key,d)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const o=On(n,i.document),s=i.readTime?Ot(i.readTime):H.min(),a=ft.newNoDocument(o,s),l=i.removedTargetIds||[];e=new Di([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const o=On(n,i.document),s=i.removedTargetIds||[];e=new Di([],s,o,null)}else{if(!("filter"in t))return q();{t.filter;const i=t.filter;i.targetId;const{count:o=0,unchangedNames:s}=i,a=new Ip(o,s),l=i.targetId;e=new dc(l,a)}}return e}function gc(n,t){let e;if(t instanceof ei)e={update:Ga(n,t.key,t.value)};else if(t instanceof ni)e={delete:Hi(n,t.key)};else if(t instanceof Ae)e={update:Ga(n,t.key,t.data),updateMask:$p(t.fieldMask)};else{if(!(t instanceof ac))return q();e={verify:Hi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const l=a.transform;if(l instanceof Wn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Gn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Kn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ji)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw q()}(0,i))),t.precondition.isNone||(e.currentDocument=function(o,s){return s.updateTime!==void 0?{updateTime:Dp(o,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(n,t.precondition)),e}function Fp(n,t){return n&&n.length>0?(X(t!==void 0),n.map(e=>function(o,s){let a=o.updateTime?Ot(o.updateTime):Ot(s);return a.isEqual(H.min())&&(a=Ot(s)),new wp(a,o.transformResults||[])}(e,t))):[]}function Mp(n,t){return{documents:[fc(n,t.path)]}}function Op(n,t){const e={structuredQuery:{}},i=t.path;let o;t.collectionGroup!==null?(o=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=fc(n,o);const s=function(h){if(h.length!==0)return vc($t.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(v=>function(g){return{field:Ke(g.field),direction:qp(g.dir)}}(v))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=dr(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:o}}function zp(n){let t=Bp(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let o=null;if(i>0){X(i===1);const v=e.from[0];v.allDescendants?o=v.collectionId:t=t.child(v.collectionId)}let s=[];e.where&&(s=function(p){const g=yc(p);return g instanceof $t&&Ul(g)?g.getFilters():[g]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(g=>function(T){return new Qn(Xe(T.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(e.orderBy));let l=null;e.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,ti(g)?null:g}(e.limit));let d=null;e.startAt&&(d=function(p){const g=!!p.before,x=p.values||[];return new zi(x,g)}(e.startAt));let h=null;return e.endAt&&(h=function(p){const g=!p.before,x=p.values||[];return new zi(x,g)}(e.endAt)),sp(t,o,a,s,l,"F",d,h)}function jp(n,t){const e=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function yc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=Xe(e.unaryFilter.field);return dt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Xe(e.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xe(e.unaryFilter.field);return dt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xe(e.unaryFilter.field);return dt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(e){return dt.create(Xe(e.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return $t.create(e.compositeFilter.filters.map(i=>yc(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(n):q()}function qp(n){return Sp[n]}function Hp(n){return Pp[n]}function Up(n){return kp[n]}function Ke(n){return{fieldPath:n.canonicalString()}}function Xe(n){return yt.fromServerFormat(n.fieldPath)}function vc(n){return n instanceof dt?function(e){if(e.op==="=="){if(Ba(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NAN"}};if(Da(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ba(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NAN"}};if(Da(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ke(e.field),op:Hp(e.op),value:e.value}}}(n):n instanceof $t?function(e){const i=e.getFilters().map(o=>vc(o));return i.length===1?i[0]:{compositeFilter:{op:Up(e.op),filters:i}}}(n):q()}function $p(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function bc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e,i,o,s=H.min(),a=H.min(),l=wt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new pe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new pe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new pe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new pe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t){this.ct=t}}function Wp(n){const t=zp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cr(t,t.limit,"L"):t}/**
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
 */class Gp{constructor(){this.un=new Kp}addToCollectionParentIndex(t,e){return this.un.add(e),F.resolve()}getCollectionParents(t,e){return F.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return F.resolve()}deleteFieldIndex(t,e){return F.resolve()}deleteAllFieldIndexes(t){return F.resolve()}createTargetIndexes(t,e){return F.resolve()}getDocumentsMatchingTarget(t,e){return F.resolve(null)}getIndexType(t,e){return F.resolve(0)}getFieldIndexes(t,e){return F.resolve([])}getNextCollectionGroupToUpdate(t){return F.resolve(null)}getMinOffset(t,e){return F.resolve(ve.min())}getMinOffsetFromCollectionGroup(t,e){return F.resolve(ve.min())}updateCollectionGroup(t,e,i){return F.resolve()}updateIndexEntries(t,e){return F.resolve()}}class Kp{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),o=this.index[e]||new vt(et.comparator),s=!o.has(i);return this.index[e]=o.add(i),s}has(t){const e=t.lastSegment(),i=t.popLast(),o=this.index[e];return o&&o.has(i)}getEntries(t){return(this.index[t]||new vt(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new rn(0)}static kn(){return new rn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.changes=new un(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ft.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?F.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(t,e,i,o){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=o}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(o=>(i=o,this.remoteDocumentCache.getEntry(t,e))).next(o=>(i!==null&&Mn(i.mutation,o,Mt.empty(),ht.now()),o))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,W()).next(()=>i))}getLocalViewOfDocuments(t,e,i=W()){const o=ke();return this.populateOverlays(t,o,e).next(()=>this.computeViews(t,e,o,i).next(s=>{let a=Dn();return s.forEach((l,d)=>{a=a.insert(l,d.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const i=ke();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,W()))}populateOverlays(t,e,i){const o=[];return i.forEach(s=>{e.has(s)||o.push(s)}),this.documentOverlayCache.getOverlays(t,o).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,i,o){let s=re();const a=Fn(),l=function(){return Fn()}();return e.forEach((d,h)=>{const v=i.get(h.key);o.has(h.key)&&(v===void 0||v.mutation instanceof Ae)?s=s.insert(h.key,h):v!==void 0?(a.set(h.key,v.mutation.getFieldMask()),Mn(v.mutation,h,v.mutation.getFieldMask(),ht.now())):a.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(t,s).next(d=>(d.forEach((h,v)=>a.set(h,v)),e.forEach((h,v)=>{var p;return l.set(h,new Jp(v,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(t,e){const i=Fn();let o=new rt((a,l)=>a-l),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(d=>{const h=e.get(d);if(h===null)return;let v=i.get(d)||Mt.empty();v=l.applyToLocalView(h,v),i.set(d,v);const p=(o.get(l.batchId)||W()).add(d);o=o.insert(l.batchId,p)})}).next(()=>{const a=[],l=o.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),h=d.key,v=d.value,p=Yl();v.forEach(g=>{if(!s.has(g)){const x=rc(e.get(g),i.get(g));x!==null&&p.set(g,x),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return F.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,o){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Gl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,o):this.getDocumentsMatchingCollectionQuery(t,e,i,o)}getNextDocuments(t,e,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,o).next(s=>{const a=o-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,o-s.size):F.resolve(ke());let l=-1,d=s;return a.next(h=>F.forEach(h,(v,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(v)?F.resolve():this.remoteDocumentCache.getEntry(t,v).next(g=>{d=d.insert(v,g)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,d,h,W())).next(v=>({batchId:l,changes:Zl(v)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(i=>{let o=Dn();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(t,e,i,o){const s=e.collectionGroup;let a=Dn();return this.indexManager.getCollectionParents(t,s).next(l=>F.forEach(l,d=>{const h=function(p,g){return new dn(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,d.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,i,o).next(v=>{v.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,i,o){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,s,o))).next(a=>{s.forEach((d,h)=>{const v=h.getKey();a.get(v)===null&&(a=a.insert(v,ft.newInvalidDocument(v)))});let l=Dn();return a.forEach((d,h)=>{const v=s.get(d);v!==void 0&&Mn(v.mutation,h,Mt.empty(),ht.now()),Yi(e,h)&&(l=l.insert(d,h))}),l})}}/**
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
 */class Yp{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return F.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(o){return{id:o.id,version:o.version,createTime:Ot(o.createTime)}}(e)),F.resolve()}getNamedQuery(t,e){return F.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(o){return{name:o.name,query:Wp(o.bundledQuery),readTime:Ot(o.readTime)}}(e)),F.resolve()}}/**
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
 */class tf{constructor(){this.overlays=new rt(j.comparator),this.Ir=new Map}getOverlay(t,e){return F.resolve(this.overlays.get(e))}getOverlays(t,e){const i=ke();return F.forEach(e,o=>this.getOverlay(t,o).next(s=>{s!==null&&i.set(o,s)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((o,s)=>{this.ht(t,e,s)}),F.resolve()}removeOverlaysForBatchId(t,e,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),F.resolve()}getOverlaysForCollection(t,e,i){const o=ke(),s=e.length+1,a=new j(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const d=l.getNext().value,h=d.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&d.largestBatchId>i&&o.set(d.getKey(),d)}return F.resolve(o)}getOverlaysForCollectionGroup(t,e,i,o){let s=new rt((h,v)=>h-v);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>i){let v=s.get(h.largestBatchId);v===null&&(v=ke(),s=s.insert(h.largestBatchId,v)),v.set(h.getKey(),h)}}const l=ke(),d=s.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((h,v)=>l.set(h,v)),!(l.size()>=o)););return F.resolve(l)}ht(t,e,i){const o=this.overlays.get(i.key);if(o!==null){const a=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new Ep(e,i));let s=this.Ir.get(e);s===void 0&&(s=W(),this.Ir.set(e,s)),this.Ir.set(e,s.add(i.key))}}/**
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
 */class ef{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(t){return F.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.Tr=new vt(pt.Er),this.dr=new vt(pt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new pt(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new pt(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new j(new et([])),i=new pt(e,t),o=new pt(e,t+1),s=[];return this.dr.forEachInRange([i,o],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new j(new et([])),i=new pt(e,t),o=new pt(e,t+1);let s=W();return this.dr.forEachInRange([i,o],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new pt(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class pt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return j.comparator(t.key,e.key)||Z(t.wr,e.wr)}static Ar(t,e){return Z(t.wr,e.wr)||j.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new vt(pt.Er)}checkEmpty(t){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,o){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _p(s,e,i,o);this.mutationQueue.push(a);for(const l of o)this.br=this.br.add(new pt(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(t,e){return F.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,o=this.vr(i),s=o<0?0:o;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new pt(e,0),o=new pt(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,o],a=>{const l=this.Dr(a.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new vt(Z);return e.forEach(o=>{const s=new pt(o,0),a=new pt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{i=i.add(l.wr)})}),F.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,o=i.length+1;let s=i;j.isDocumentKey(s)||(s=s.child(""));const a=new pt(new j(s),0);let l=new vt(Z);return this.br.forEachWhile(d=>{const h=d.key.path;return!!i.isPrefixOf(h)&&(h.length===o&&(l=l.add(d.wr)),!0)},a),F.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(i=>{const o=this.Dr(i);o!==null&&e.push(o)}),e}removeMutationBatch(t,e){X(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return F.forEach(e.mutations,o=>{const s=new pt(o.key,e.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new pt(e,0),o=this.br.firstAfterOrEqual(i);return F.resolve(e.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,F.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t){this.Mr=t,this.docs=function(){return new rt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,o=this.docs.get(i),s=o?o.size:0,a=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return F.resolve(i?i.document.mutableCopy():ft.newInvalidDocument(e))}getEntries(t,e){let i=re();return e.forEach(o=>{const s=this.docs.get(o);i=i.insert(o,s?s.document.mutableCopy():ft.newInvalidDocument(o))}),F.resolve(i)}getDocumentsMatchingQuery(t,e,i,o){let s=re();const a=e.path,l=new j(a.child("")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:h,value:{document:v}}=d.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||jh(zh(v),i)<=0||(o.has(v.key)||Yi(e,v))&&(s=s.insert(v.key,v.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(t,e,i,o){q()}Or(t,e){return F.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new rf(this)}getSize(t){return F.resolve(this.size)}}class rf extends Xp{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?e.push(this.cr.addEntry(t,o)):this.cr.removeEntry(i)}),F.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t){this.persistence=t,this.Nr=new un(e=>Sr(e),Pr),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Nr,this.targetCount=0,this.kr=rn.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,o)=>e(o)),F.resolve()}getLastRemoteSnapshotVersion(t){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return F.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),F.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new rn(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,F.resolve()}updateTargetData(t,e){return this.Kn(e),F.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,F.resolve()}removeTargets(t,e,i){let o=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&i.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),o++)}),F.waitFor(s).next(()=>o)}getTargetCount(t){return F.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return F.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),F.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const o=this.persistence.referenceDelegate,s=[];return o&&e.forEach(a=>{s.push(o.markPotentiallyOrphaned(t,a))}),F.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),F.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return F.resolve(i)}containsKey(t,e){return F.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ir(0),this.Kr=!1,this.Kr=!0,this.$r=new ef,this.referenceDelegate=t(this),this.Ur=new sf(this),this.indexManager=new Gp,this.remoteDocumentCache=function(o){return new of(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new Qp(e),this.Gr=new Yp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new nf(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){z("MemoryPersistence","Starting transaction:",t);const o=new lf(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(s=>this.referenceDelegate.jr(o).next(()=>s)).toPromise().then(s=>(o.raiseOnCommittedEvent(),s))}Hr(t,e){return F.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class lf extends Hh{constructor(t){super(),this.currentSequenceNumber=t}}class Lr{constructor(t){this.persistence=t,this.Jr=new Nr,this.Yr=null}static Zr(t){return new Lr(t)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),F.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),F.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),F.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(o=>{o.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,i=>{const o=j.fromPath(i);return this.ei(t,o).next(s=>{s||e.removeEntry(o,H.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return F.or([()=>F.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,i,o){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=o}static Wi(t,e){let i=W(),o=W();for(const s of e.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:o=o.add(s.doc.key)}return new Fr(t,e.fromCache,i,o)}}/**
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
 */class cf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class df{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return hu()?8:Uh(du())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,o){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,o,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new cf;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,i,o){return i.documentReadCount<this.ji?(kn()<=K.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ge(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(kn()<=K.DEBUG&&z("QueryEngine","Query:",Ge(e),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(kn()<=K.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ge(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Xt(e))):F.resolve())}Yi(t,e){if(Ma(e))return F.resolve(null);let i=Xt(e);return this.indexManager.getIndexType(t,i).next(o=>o===0?null:(e.limit!==null&&o===1&&(e=cr(e,null,"F"),i=Xt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=W(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(d=>{const h=this.ts(e,l);return this.ns(e,h,a,d.readTime)?this.Yi(t,cr(e,null,"F")):this.rs(t,h,e,d)}))})))}Zi(t,e,i,o){return Ma(e)||o.isEqual(H.min())?F.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const a=this.ts(e,s);return this.ns(e,a,i,o)?F.resolve(null):(kn()<=K.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ge(e)),this.rs(t,a,e,Oh(o,-1)).next(l=>l))})}ts(t,e){let i=new vt(Xl(t));return e.forEach((o,s)=>{Yi(t,s)&&(i=i.add(s))}),i}ns(t,e,i,o){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(o)>0)}Xi(t,e,i){return kn()<=K.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ge(e)),this.Ji.getDocumentsMatchingQuery(t,e,ve.min(),i)}rs(t,e,i,o){return this.Ji.getDocumentsMatchingQuery(t,i,o).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class uf{constructor(t,e,i,o){this.persistence=t,this.ss=e,this.serializer=o,this.os=new rt(Z),this._s=new un(s=>Sr(s),Pr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Zp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function hf(n,t,e,i){return new uf(n,t,e,i)}async function wc(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let o;return e.mutationQueue.getAllMutationBatches(i).next(s=>(o=s,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],l=[];let d=W();for(const h of o){a.push(h.batchId);for(const v of h.mutations)d=d.add(v.key)}for(const h of s){l.push(h.batchId);for(const v of h.mutations)d=d.add(v.key)}return e.localDocuments.getDocuments(i,d).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function pf(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,d,h,v){const p=h.batch,g=p.keys();let x=F.resolve();return g.forEach(T=>{x=x.next(()=>v.getEntry(d,T)).next(k=>{const V=h.docVersions.get(T);X(V!==null),k.version.compareTo(V)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),v.addEntry(k)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(d,p))}(e,i,t,s).next(()=>s.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,o,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let d=W();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(d=d.add(l.batch.mutations[h].key));return d}(t))).next(()=>e.localDocuments.getDocuments(i,o))})}function xc(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function ff(n,t){const e=U(n),i=t.snapshotVersion;let o=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});o=e.os;const l=[];t.targetChanges.forEach((v,p)=>{const g=o.get(p);if(!g)return;l.push(e.Ur.removeMatchingKeys(s,v.removedDocuments,p).next(()=>e.Ur.addMatchingKeys(s,v.addedDocuments,p)));let x=g.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(p)!==null?x=x.withResumeToken(wt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,i)),o=o.insert(p,x),function(k,V,S){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,x,v)&&l.push(e.Ur.updateTargetData(s,x))});let d=re(),h=W();if(t.documentUpdates.forEach(v=>{t.resolvedLimboDocuments.has(v)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,v))}),l.push(mf(s,a,t.documentUpdates).next(v=>{d=v.Ps,h=v.Is})),!i.isEqual(H.min())){const v=e.Ur.getLastRemoteSnapshotVersion(s).next(p=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));l.push(v)}return F.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,d,h)).next(()=>d)}).then(s=>(e.os=o,s))}function mf(n,t,e){let i=W(),o=W();return e.forEach(s=>i=i.add(s)),t.getEntries(n,i).next(s=>{let a=re();return e.forEach((l,d)=>{const h=s.get(l);d.isFoundDocument()!==h.isFoundDocument()&&(o=o.add(l)),d.isNoDocument()&&d.version.isEqual(H.min())?(t.removeEntry(l,d.readTime),a=a.insert(l,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(d),a=a.insert(l,d)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",d.version)}),{Ps:a,Is:o}})}function gf(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function yf(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return e.Ur.getTargetData(i,t).next(s=>s?(o=s,F.resolve(o)):e.Ur.allocateTargetId(i).next(a=>(o=new pe(t,a,"TargetPurposeListen",i.currentSequenceNumber),e.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=e.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(e.os=e.os.insert(i.targetId,i),e._s.set(t,i.targetId)),i})}async function pr(n,t,e){const i=U(n),o=i.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,o))}catch(a){if(!Yn(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(o.target)}function Ka(n,t,e){const i=U(n);let o=H.min(),s=W();return i.persistence.runTransaction("Execute query","readwrite",a=>function(d,h,v){const p=U(d),g=p._s.get(v);return g!==void 0?F.resolve(p.os.get(g)):p.Ur.getTargetData(h,v)}(i,a,Xt(t)).next(l=>{if(l)return o=l.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,l.targetId).next(d=>{s=d})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,e?o:H.min(),e?s:W())).next(l=>(vf(i,lp(t),l),{documents:l,Ts:s})))}function vf(n,t,e){let i=n.us.get(t)||H.min();e.forEach((o,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.us.set(t,i)}class Xa{constructor(){this.activeTargetIds=fp()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class bf{constructor(){this.so=new Xa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Xa,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class wf{_o(t){}shutdown(){}}/**
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
 */class Ja{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ci=null;function Uo(){return Ci===null?Ci=function(){return 268435456+Math.round(2147483648*Math.random())}():Ci++,"0x"+Ci.toString(16)}/**
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
 */const xf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ct="WebChannelConnection";class _f extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${o}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${s}`}get Fo(){return!1}Mo(e,i,o,s,a){const l=Uo(),d=this.xo(e,i.toUriEncodedString());z("RestConnection",`Sending RPC '${e}' ${l}:`,d,o);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(e,d,h,o).then(v=>(z("RestConnection",`Received RPC '${e}' ${l}: `,v),v),v=>{throw tn("RestConnection",`RPC '${e}' ${l} failed with error: `,v,"url: ",d,"request:",o),v})}Lo(e,i,o,s,a,l){return this.Mo(e,i,o,s,a)}Oo(e,i,o){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>e[a]=s),o&&o.headers.forEach((s,a)=>e[a]=s)}xo(e,i){const o=xf[e];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,o){const s=Uo();return new Promise((a,l)=>{const d=new Vl;d.setWithCredentials(!0),d.listenOnce(Dl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Pi.NO_ERROR:const v=d.getResponseJson();z(Ct,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(v)),a(v);break;case Pi.TIMEOUT:z(Ct,`RPC '${t}' ${s} timed out`),l(new O(L.DEADLINE_EXCEEDED,"Request time out"));break;case Pi.HTTP_ERROR:const p=d.getStatus();if(z(Ct,`RPC '${t}' ${s} failed with status:`,p,"response text:",d.getResponseText()),p>0){let g=d.getResponseJson();Array.isArray(g)&&(g=g[0]);const x=g==null?void 0:g.error;if(x&&x.status&&x.message){const T=function(V){const S=V.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(S)>=0?S:L.UNKNOWN}(x.status);l(new O(T,x.message))}else l(new O(L.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new O(L.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{z(Ct,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(o);z(Ct,`RPC '${t}' ${s} sending request:`,o),d.send(e,"POST",h,i,15)})}Bo(t,e,i){const o=Uo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ll(),l=Nl(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(d.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Oo(d.initMessageHeaders,e,i),d.encodeInitMessageHeaders=!0;const v=s.join("");z(Ct,`Creating RPC '${t}' stream ${o}: ${v}`,d);const p=a.createWebChannel(v,d);let g=!1,x=!1;const T=new Af({Io:V=>{x?z(Ct,`Not sending because RPC '${t}' stream ${o} is closed:`,V):(g||(z(Ct,`Opening RPC '${t}' stream ${o} transport.`),p.open(),g=!0),z(Ct,`RPC '${t}' stream ${o} sending:`,V),p.send(V))},To:()=>p.close()}),k=(V,S,P)=>{V.listen(S,D=>{try{P(D)}catch(C){setTimeout(()=>{throw C},0)}})};return k(p,Vn.EventType.OPEN,()=>{x||(z(Ct,`RPC '${t}' stream ${o} transport opened.`),T.yo())}),k(p,Vn.EventType.CLOSE,()=>{x||(x=!0,z(Ct,`RPC '${t}' stream ${o} transport closed`),T.So())}),k(p,Vn.EventType.ERROR,V=>{x||(x=!0,tn(Ct,`RPC '${t}' stream ${o} transport errored:`,V),T.So(new O(L.UNAVAILABLE,"The operation could not be completed")))}),k(p,Vn.EventType.MESSAGE,V=>{var S;if(!x){const P=V.data[0];X(!!P);const D=P,C=D.error||((S=D[0])===null||S===void 0?void 0:S.error);if(C){z(Ct,`RPC '${t}' stream ${o} received error:`,C);const B=C.status;let I=function(y){const E=ct[y];if(E!==void 0)return cc(E)}(B),m=C.message;I===void 0&&(I=L.INTERNAL,m="Unknown error status: "+B+" with message "+C.message),x=!0,T.So(new O(I,m)),p.close()}else z(Ct,`RPC '${t}' stream ${o} received:`,P),T.bo(P)}}),k(l,Bl.STAT_EVENT,V=>{V.stat===ir.PROXY?z(Ct,`RPC '${t}' stream ${o} detected buffering proxy`):V.stat===ir.NOPROXY&&z(Ct,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function $o(){return typeof document<"u"?document:null}/**
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
 */function io(n){return new Vp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,i=1e3,o=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=o,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,e-i);o>0&&z("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e,i,o,s,a,l,d){this.ui=t,this.Ho=i,this.Jo=o,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Mr(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===L.RESOURCE_EXHAUSTED?(oe(e.toString()),oe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===e&&this.P_(i,o)},i=>{t(()=>{const o=new O(L.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ef extends Ac{constructor(t,e,i,o,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,o,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Lp(this.serializer,t),i=function(s){if(!("targetChange"in s))return H.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Ot(a.readTime):H.min()}(t);return this.listener.d_(e,i)}A_(t){const e={};e.database=hr(this.serializer),e.addTarget=function(s,a){let l;const d=a.target;if(l=ar(d)?{documents:Mp(s,d)}:{query:Op(s,d)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=hc(s,a.resumeToken);const h=dr(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(H.min())>0){l.readTime=qi(s,a.snapshotVersion.toTimestamp());const h=dr(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const i=jp(this.serializer,t);i&&(e.labels=i),this.a_(e)}R_(t){const e={};e.database=hr(this.serializer),e.removeTarget=t,this.a_(e)}}class If extends Ac{constructor(t,e,i,o,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,o,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return X(!!t.streamToken),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Fp(t.writeResults,t.commitTime),i=Ot(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=hr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>gc(this.serializer,i))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends class{}{constructor(t,e,i,o){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new O(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,ur(e,i),o,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(L.UNKNOWN,s.toString())})}Lo(t,e,i,o,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,ur(e,i),o,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(L.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Rf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(oe(e),this.D_=!1):z("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,e,i,o,s){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{i.enqueueAndForget(async()=>{Me(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(d){const h=U(d);h.L_.add(4),await oi(h),h.q_.set("Unknown"),h.L_.delete(4),await oo(h)}(this))})}),this.q_=new Rf(i,o)}}async function oo(n){if(Me(n))for(const t of n.B_)await t(!0)}async function oi(n){for(const t of n.B_)await t(!1)}function _c(n,t){const e=U(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),qr(e)?jr(e):hn(e).r_()&&zr(e,t))}function Or(n,t){const e=U(n),i=hn(e);e.N_.delete(t),i.r_()&&Ec(e,t),e.N_.size===0&&(i.r_()?i.o_():Me(e)&&e.q_.set("Unknown"))}function zr(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}hn(n).A_(t)}function Ec(n,t){n.Q_.xe(t),hn(n).R_(t)}function jr(n){n.Q_=new Cp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),hn(n).start(),n.q_.v_()}function qr(n){return Me(n)&&!hn(n).n_()&&n.N_.size>0}function Me(n){return U(n).L_.size===0}function Ic(n){n.Q_=void 0}async function Sf(n){n.q_.set("Online")}async function Pf(n){n.N_.forEach((t,e)=>{zr(n,t)})}async function kf(n,t){Ic(n),qr(n)?(n.q_.M_(t),jr(n)):n.q_.set("Unknown")}async function Vf(n,t,e){if(n.q_.set("Online"),t instanceof uc&&t.state===2&&t.cause)try{await async function(o,s){const a=s.cause;for(const l of s.targetIds)o.N_.has(l)&&(await o.remoteSyncer.rejectListen(l,a),o.N_.delete(l),o.Q_.removeTarget(l))}(n,t)}catch(i){z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Ui(n,i)}else if(t instanceof Di?n.Q_.Ke(t):t instanceof dc?n.Q_.He(t):n.Q_.We(t),!e.isEqual(H.min()))try{const i=await xc(n.localStore);e.compareTo(i)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((d,h)=>{if(d.resumeToken.approximateByteSize()>0){const v=s.N_.get(h);v&&s.N_.set(h,v.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,h)=>{const v=s.N_.get(d);if(!v)return;s.N_.set(d,v.withResumeToken(wt.EMPTY_BYTE_STRING,v.snapshotVersion)),Ec(s,d);const p=new pe(v.target,d,h,v.sequenceNumber);zr(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(i){z("RemoteStore","Failed to raise snapshot:",i),await Ui(n,i)}}async function Ui(n,t,e){if(!Yn(t))throw t;n.L_.add(1),await oi(n),n.q_.set("Offline"),e||(e=()=>xc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await oo(n)})}function Tc(n,t){return t().catch(e=>Ui(n,e,t))}async function ro(n){const t=U(n),e=we(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Df(t);)try{const o=await gf(t.localStore,i);if(o===null){t.O_.length===0&&e.o_();break}i=o.batchId,Bf(t,o)}catch(o){await Ui(t,o)}Rc(t)&&Cc(t)}function Df(n){return Me(n)&&n.O_.length<10}function Bf(n,t){n.O_.push(t);const e=we(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Rc(n){return Me(n)&&!we(n).n_()&&n.O_.length>0}function Cc(n){we(n).start()}async function Nf(n){we(n).p_()}async function Lf(n){const t=we(n);for(const e of n.O_)t.m_(e.mutations)}async function Ff(n,t,e){const i=n.O_.shift(),o=Vr.from(i,t,e);await Tc(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await ro(n)}async function Mf(n,t){t&&we(n).V_&&await async function(i,o){if(function(a){return lc(a)&&a!==L.ABORTED}(o.code)){const s=i.O_.shift();we(i).s_(),await Tc(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,o)),await ro(i)}}(n,t),Rc(n)&&Cc(n)}async function Za(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const i=Me(e);e.L_.add(3),await oi(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await oo(e)}async function Of(n,t){const e=U(n);t?(e.L_.delete(2),await oo(e)):t||(e.L_.add(2),await oi(e),e.q_.set("Unknown"))}function hn(n){return n.K_||(n.K_=function(e,i,o){const s=U(e);return s.w_(),new Ef(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)}(n.datastore,n.asyncQueue,{Eo:Sf.bind(null,n),Ro:Pf.bind(null,n),mo:kf.bind(null,n),d_:Vf.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),qr(n)?jr(n):n.q_.set("Unknown")):(await n.K_.stop(),Ic(n))})),n.K_}function we(n){return n.U_||(n.U_=function(e,i,o){const s=U(e);return s.w_(),new If(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Nf.bind(null,n),mo:Mf.bind(null,n),f_:Lf.bind(null,n),g_:Ff.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await ro(n)):(await n.U_.stop(),n.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,e,i,o,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=o,this.removalCallback=s,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,o,s){const a=Date.now()+i,l=new Hr(t,e,a,o,s);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ur(n,t){if(oe("AsyncQueue",`${t}: ${n}`),Yn(n))return new O(L.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.comparator=t?(e,i)=>t(e,i)||j.comparator(e.key,i.key):(e,i)=>j.comparator(e.key,i.key),this.keyedMap=Dn(),this.sortedSet=new rt(this.comparator)}static emptySet(t){return new Ye(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ye)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const o=e.getNext().key,s=i.getNext().key;if(!o.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new Ye;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.W_=new rt(j.comparator)}track(t){const e=t.doc.key,i=this.W_.get(e);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(e,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(e):t.type===1&&i.type===2?this.W_=this.W_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):q():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,i)=>{t.push(i)}),t}}class sn{constructor(t,e,i,o,s,a,l,d,h){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(t,e,i,o,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new sn(t,e,Ye.emptySet(e),a,i,o,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let o=0;o<e.length;o++)if(e[o].type!==i[o].type||!e[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class jf{constructor(){this.queries=tl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const o=U(e),s=o.queries;o.queries=tl(),s.forEach((a,l)=>{for(const d of l.j_)d.onError(i)})})(this,new O(L.ABORTED,"Firestore shutting down"))}}function tl(){return new un(n=>Kl(n),Zi)}async function $r(n,t){const e=U(n);let i=3;const o=t.query;let s=e.queries.get(o);s?!s.H_()&&t.J_()&&(i=2):(s=new zf,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await e.onListen(o,!0);break;case 1:s.z_=await e.onListen(o,!1);break;case 2:await e.onFirstRemoteStoreListen(o)}}catch(a){const l=Ur(a,`Initialization of query '${Ge(t.query)}' failed`);return void t.onError(l)}e.queries.set(o,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Wr(e)}async function Qr(n,t){const e=U(n),i=t.query;let o=3;const s=e.queries.get(i);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?o=t.J_()?0:1:!s.H_()&&t.J_()&&(o=2))}switch(o){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function qf(n,t){const e=U(n);let i=!1;for(const o of t){const s=o.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(o)&&(i=!0);a.z_=o}}i&&Wr(e)}function Hf(n,t,e){const i=U(n),o=i.queries.get(t);if(o)for(const s of o.j_)s.onError(e);i.queries.delete(t)}function Wr(n){n.Y_.forEach(t=>{t.next()})}var fr,el;(el=fr||(fr={})).ea="default",el.Cache="cache";class Gr{constructor(t,e,i){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const o of t.docChanges)o.type!==3&&i.push(o);t=new sn(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const i=e!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==fr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t){this.key=t}}class Pc{constructor(t){this.key=t}}class Uf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=Xl(t),this.Ra=new Ye(this.Aa)}get Va(){return this.Ta}ma(t,e){const i=e?e.fa:new Ya,o=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=o,l=!1;const d=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,h=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((v,p)=>{const g=o.get(v),x=Yi(this.query,p)?p:null,T=!!g&&this.mutatedKeys.has(g.key),k=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let V=!1;g&&x?g.data.isEqual(x.data)?T!==k&&(i.track({type:3,doc:x}),V=!0):this.ga(g,x)||(i.track({type:2,doc:x}),V=!0,(d&&this.Aa(x,d)>0||h&&this.Aa(x,h)<0)&&(l=!0)):!g&&x?(i.track({type:0,doc:x}),V=!0):g&&!x&&(i.track({type:1,doc:g}),V=!0,(d||h)&&(l=!0)),V&&(x?(a=a.add(x),s=k?s.add(v):s.delete(v)):(a=a.delete(v),s=s.delete(v)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const v=this.query.limitType==="F"?a.last():a.first();a=a.delete(v.key),s=s.delete(v.key),i.track({type:1,doc:v})}return{Ra:a,fa:i,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,o){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((v,p)=>function(x,T){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return k(x)-k(T)}(v.type,p.type)||this.Aa(v.doc,p.doc)),this.pa(i),o=o!=null&&o;const l=e&&!o?this.ya():[],d=this.da.size===0&&this.current&&!o?1:0,h=d!==this.Ea;return this.Ea=d,a.length!==0||h?{snapshot:new sn(this.query,t.Ra,s,a,t.mutatedKeys,d===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ya,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=W(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const e=[];return t.forEach(i=>{this.da.has(i)||e.push(new Pc(i))}),this.da.forEach(i=>{t.has(i)||e.push(new Sc(i))}),e}ba(t){this.Ta=t.Ts,this.da=W();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return sn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class $f{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class Qf{constructor(t){this.key=t,this.va=!1}}class Wf{constructor(t,e,i,o,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=o,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new un(l=>Kl(l),Zi),this.Ma=new Map,this.xa=new Set,this.Oa=new rt(j.comparator),this.Na=new Map,this.La=new Nr,this.Ba={},this.ka=new Map,this.qa=rn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Gf(n,t,e=!0){const i=Lc(n);let o;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),o=s.view.Da()):o=await kc(i,t,e,!0),o}async function Kf(n,t){const e=Lc(n);await kc(e,t,!0,!1)}async function kc(n,t,e,i){const o=await yf(n.localStore,Xt(t)),s=o.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return i&&(l=await Xf(n,t,s,a==="current",o.resumeToken)),n.isPrimaryClient&&e&&_c(n.remoteStore,o),l}async function Xf(n,t,e,i,o){n.Ka=(p,g,x)=>async function(k,V,S,P){let D=V.view.ma(S);D.ns&&(D=await Ka(k.localStore,V.query,!1).then(({documents:m})=>V.view.ma(m,D)));const C=P&&P.targetChanges.get(V.targetId),B=P&&P.targetMismatches.get(V.targetId)!=null,I=V.view.applyChanges(D,k.isPrimaryClient,C,B);return il(k,V.targetId,I.wa),I.snapshot}(n,p,g,x);const s=await Ka(n.localStore,t,!0),a=new Uf(t,s.Ts),l=a.ma(s.documents),d=ii.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",o),h=a.applyChanges(l,n.isPrimaryClient,d);il(n,e,h.wa);const v=new $f(t,e,a);return n.Fa.set(t,v),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),h.snapshot}async function Jf(n,t,e){const i=U(n),o=i.Fa.get(t),s=i.Ma.get(o.targetId);if(s.length>1)return i.Ma.set(o.targetId,s.filter(a=>!Zi(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await pr(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),e&&Or(i.remoteStore,o.targetId),mr(i,o.targetId)}).catch(Zn)):(mr(i,o.targetId),await pr(i.localStore,o.targetId,!0))}async function Zf(n,t){const e=U(n),i=e.Fa.get(t),o=e.Ma.get(i.targetId);e.isPrimaryClient&&o.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Or(e.remoteStore,i.targetId))}async function Yf(n,t,e){const i=sm(n);try{const o=await function(a,l){const d=U(a),h=ht.now(),v=l.reduce((x,T)=>x.add(T.key),W());let p,g;return d.persistence.runTransaction("Locally write mutations","readwrite",x=>{let T=re(),k=W();return d.cs.getEntries(x,v).next(V=>{T=V,T.forEach((S,P)=>{P.isValidDocument()||(k=k.add(S))})}).next(()=>d.localDocuments.getOverlayedDocuments(x,T)).next(V=>{p=V;const S=[];for(const P of l){const D=Ap(P,p.get(P.key).overlayedDocument);D!=null&&S.push(new Ae(P.key,D,jl(D.value.mapValue),ut.exists(!0)))}return d.mutationQueue.addMutationBatch(x,h,S,l)}).next(V=>{g=V;const S=V.applyToLocalDocumentSet(p,k);return d.documentOverlayCache.saveOverlays(x,V.batchId,S)})}).then(()=>({batchId:g.batchId,changes:Zl(p)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(o.batchId),function(a,l,d){let h=a.Ba[a.currentUser.toKey()];h||(h=new rt(Z)),h=h.insert(l,d),a.Ba[a.currentUser.toKey()]=h}(i,o.batchId,e),await ri(i,o.changes),await ro(i.remoteStore)}catch(o){const s=Ur(o,"Failed to persist write");e.reject(s)}}async function Vc(n,t){const e=U(n);try{const i=await ff(e.localStore,t);t.targetChanges.forEach((o,s)=>{const a=e.Na.get(s);a&&(X(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?a.va=!0:o.modifiedDocuments.size>0?X(a.va):o.removedDocuments.size>0&&(X(a.va),a.va=!1))}),await ri(e,i,t)}catch(i){await Zn(i)}}function nl(n,t,e){const i=U(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const o=[];i.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&o.push(l.snapshot)}),function(a,l){const d=U(a);d.onlineState=l;let h=!1;d.queries.forEach((v,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&Wr(d)}(i.eventManager,t),o.length&&i.Ca.d_(o),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function tm(n,t,e){const i=U(n);i.sharedClientState.updateQueryState(t,"rejected",e);const o=i.Na.get(t),s=o&&o.key;if(s){let a=new rt(j.comparator);a=a.insert(s,ft.newNoDocument(s,H.min()));const l=W().add(s),d=new no(H.min(),new Map,new rt(Z),a,l);await Vc(i,d),i.Oa=i.Oa.remove(s),i.Na.delete(t),Kr(i)}else await pr(i.localStore,t,!1).then(()=>mr(i,t,e)).catch(Zn)}async function em(n,t){const e=U(n),i=t.batch.batchId;try{const o=await pf(e.localStore,t);Bc(e,i,null),Dc(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await ri(e,o)}catch(o){await Zn(o)}}async function nm(n,t,e){const i=U(n);try{const o=await function(a,l){const d=U(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let v;return d.mutationQueue.lookupMutationBatch(h,l).next(p=>(X(p!==null),v=p.keys(),d.mutationQueue.removeMutationBatch(h,p))).next(()=>d.mutationQueue.performConsistencyCheck(h)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(h,v,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,v)).next(()=>d.localDocuments.getDocuments(h,v))})}(i.localStore,t);Bc(i,t,e),Dc(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await ri(i,o)}catch(o){await Zn(o)}}function Dc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Bc(n,t,e){const i=U(n);let o=i.Ba[i.currentUser.toKey()];if(o){const s=o.get(t);s&&(e?s.reject(e):s.resolve(),o=o.remove(t)),i.Ba[i.currentUser.toKey()]=o}}function mr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Ma.get(t))n.Fa.delete(i),e&&n.Ca.$a(i,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(i=>{n.La.containsKey(i)||Nc(n,i)})}function Nc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Or(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Kr(n))}function il(n,t,e){for(const i of e)i instanceof Sc?(n.La.addReference(i.key,t),im(n,i)):i instanceof Pc?(z("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,t),n.La.containsKey(i.key)||Nc(n,i.key)):q()}function im(n,t){const e=t.key,i=e.path.canonicalString();n.Oa.get(e)||n.xa.has(i)||(z("SyncEngine","New document in limbo: "+e),n.xa.add(i),Kr(n))}function Kr(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new j(et.fromString(t)),i=n.qa.next();n.Na.set(i,new Qf(e)),n.Oa=n.Oa.insert(e,i),_c(n.remoteStore,new pe(Xt(Ji(e.path)),i,"TargetPurposeLimboResolution",Ir.oe))}}async function ri(n,t,e){const i=U(n),o=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((l,d)=>{a.push(i.Ka(d,t,e).then(h=>{var v;if((h||e)&&i.isPrimaryClient){const p=h?!h.fromCache:(v=e==null?void 0:e.targetChanges.get(d.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(d.targetId,p?"current":"not-current")}if(h){o.push(h);const p=Fr.Wi(d.targetId,h);s.push(p)}}))}),await Promise.all(a),i.Ca.d_(o),await async function(d,h){const v=U(d);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(h,g=>F.forEach(g.$i,x=>v.persistence.referenceDelegate.addReference(p,g.targetId,x)).next(()=>F.forEach(g.Ui,x=>v.persistence.referenceDelegate.removeReference(p,g.targetId,x)))))}catch(p){if(!Yn(p))throw p;z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const x=v.os.get(g),T=x.snapshotVersion,k=x.withLastLimboFreeSnapshotVersion(T);v.os=v.os.insert(g,k)}}}(i.localStore,s))}async function om(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){z("SyncEngine","User change. New user:",t.toKey());const i=await wc(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(d=>{d.reject(new O(L.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await ri(e,i.hs)}}function rm(n,t){const e=U(n),i=e.Na.get(t);if(i&&i.va)return W().add(i.key);{let o=W();const s=e.Ma.get(t);if(!s)return o;for(const a of s){const l=e.Fa.get(a);o=o.unionWith(l.view.Va)}return o}}function Lc(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Vc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=tm.bind(null,t),t.Ca.d_=qf.bind(null,t.eventManager),t.Ca.$a=Hf.bind(null,t.eventManager),t}function sm(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=em.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nm.bind(null,t),t}class $i{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=io(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return hf(this.persistence,new df,t.initialUser,this.serializer)}Ga(t){return new af(Lr.Zr,this.serializer)}Wa(t){return new bf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$i.provider={build:()=>new $i};class gr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>nl(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=om.bind(null,this.syncEngine),await Of(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new jf}()}createDatastore(t){const e=io(t.databaseInfo.databaseId),i=function(s){return new _f(s)}(t.databaseInfo);return function(s,a,l,d){return new Tf(s,a,l,d)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,o,s,a,l){return new Cf(i,o,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>nl(this.syncEngine,e,0),function(){return Ja.D()?new Ja:new wf}())}createSyncEngine(t,e){return function(o,s,a,l,d,h,v){const p=new Wf(o,s,a,l,d,h);return v&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(o){const s=U(o);z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await oi(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}gr.provider={build:()=>new gr};/**
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
 */class Xr{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):oe("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new O(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(o,s){const a=U(o),l={documents:s.map(p=>Hi(a.serializer,p))},d=await a.Lo("BatchGetDocuments",a.serializer.databaseId,et.emptyPath(),l,s.length),h=new Map;d.forEach(p=>{const g=Np(a.serializer,p);h.set(g.key.toString(),g)});const v=[];return s.forEach(p=>{const g=h.get(p.toString());X(!!g),v.push(g)}),v}(this.datastore,t);return e.forEach(i=>this.recordVersion(i)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(t.toString())}delete(t){this.write(new ni(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,i)=>{const o=j.fromPath(i);this.mutations.push(new ac(o,this.precondition(o)))}),await async function(i,o){const s=U(i),a={writes:o.map(l=>gc(s.serializer,l))};await s.Mo("Commit",s.serializer.databaseId,et.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw q();e=H.min()}const i=this.readVersions.get(t.key.toString());if(i){if(!e.isEqual(i))throw new O(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(H.min())?ut.exists(!1):ut.updateTime(e):ut.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(H.min()))throw new O(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ut.updateTime(e)}return ut.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class lm{constructor(t,e,i,o,s){this.asyncQueue=t,this.datastore=e,this.options=i,this.updateFunction=o,this.deferred=s,this._u=i.maxAttempts,this.t_=new Mr(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new am(this.datastore),e=this.cu(t);e&&e.then(i=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(i)}).catch(o=>{this.lu(o)}))}).catch(i=>{this.lu(i)})})}cu(t){try{const e=this.updateFunction(t);return!ti(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!lc(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t,e,i,o,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=o,this.user=St.UNAUTHENTICATED,this.clientId=Ml.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async a=>{z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ur(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Qo(n,t){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await wc(t.localStore,o),i=o)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ol(n,t){n.asyncQueue.verifyOperationInProgress();const e=await dm(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Za(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Za(t.remoteStore,o)),n._onlineComponents=t}async function dm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(o){return o.name==="FirebaseError"?o.code===L.FAILED_PRECONDITION||o.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(e))throw e;tn("Error using user provided cache. Falling back to memory cache: "+e),await Qo(n,new $i)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Qo(n,new $i);return n._offlineComponents}async function Jr(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await ol(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await ol(n,new gr))),n._onlineComponents}function um(n){return Jr(n).then(t=>t.syncEngine)}function hm(n){return Jr(n).then(t=>t.datastore)}async function Qi(n){const t=await Jr(n),e=t.eventManager;return e.onListen=Gf.bind(null,t.syncEngine),e.onUnlisten=Jf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Kf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Zf.bind(null,t.syncEngine),e}function pm(n,t,e={}){const i=new Kt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,d,h){const v=new Xr({next:g=>{v.Za(),a.enqueueAndForget(()=>Qr(s,p));const x=g.docs.has(l);!x&&g.fromCache?h.reject(new O(L.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&g.fromCache&&d&&d.source==="server"?h.reject(new O(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Gr(Ji(l.path),v,{includeMetadataChanges:!0,_a:!0});return $r(s,p)}(await Qi(n),n.asyncQueue,t,e,i)),i.promise}function fm(n,t,e={}){const i=new Kt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,d,h){const v=new Xr({next:g=>{v.Za(),a.enqueueAndForget(()=>Qr(s,p)),g.fromCache&&d.source==="server"?h.reject(new O(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Gr(l,v,{includeMetadataChanges:!0,_a:!0});return $r(s,p)}(await Qi(n),n.asyncQueue,t,e,i)),i.promise}/**
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
 */function Fc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */function Mc(n,t,e){if(!e)throw new O(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function mm(n,t,e,i){if(t===!0&&i===!0)throw new O(L.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function sl(n){if(!j.isDocumentKey(n))throw new O(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function al(n){if(j.isDocumentKey(n))throw new O(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function so(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q()}function Pt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=so(n);throw new O(L.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class ll{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new O(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fc((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ao{constructor(t,e,i,o){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ll({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ll(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Ph;switch(i.type){case"firstParty":return new Bh(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new O(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=rl.get(e);i&&(z("ComponentProvider","Removing Datastore"),rl.delete(e),i.terminate())}(this),Promise.resolve()}}function gm(n,t,e,i={}){var o;const s=(n=Pt(n,ao))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let l,d;if(typeof i.mockUserToken=="string")l=i.mockUserToken,d=St.MOCK_USER;else{l=cu(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new O(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new St(h)}n._authCredentials=new kh(new Fl(l,d))}}/**
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
 */class _e{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new _e(this.firestore,t,this._query)}}class bt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ye(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class ye extends _e{constructor(t,e,i){super(t,e,Ji(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new j(t))}withConverter(t){return new ye(this.firestore,t,this._path)}}function xt(n,t,...e){if(n=zt(n),Mc("collection","path",t),n instanceof ao){const i=et.fromString(t,...e);return al(i),new ye(n,null,i)}{if(!(n instanceof bt||n instanceof ye))throw new O(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(et.fromString(t,...e));return al(i),new ye(n.firestore,null,i)}}function it(n,t,...e){if(n=zt(n),arguments.length===1&&(t=Ml.newId()),Mc("doc","path",t),n instanceof ao){const i=et.fromString(t,...e);return sl(i),new bt(n,null,new j(i))}{if(!(n instanceof bt||n instanceof ye))throw new O(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(et.fromString(t,...e));return sl(i),new bt(n.firestore,n instanceof ye?n.converter:null,new j(i))}}/**
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
 */class cl{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Mr(this,"async_queue_retry"),this.Vu=()=>{const i=$o();i&&z("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=$o();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=$o();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Kt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Yn(t))throw t;z("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const o=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw oe("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const o=Hr.createAndSchedule(this,t,e,i,s=>this.yu(s));return this.Tu.push(o),o}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function dl(n){return function(e,i){if(typeof e!="object"||e===null)return!1;const o=e;for(const s of i)if(s in o&&typeof o[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Qt extends ao{constructor(t,e,i,o){super(t,e,i,o),this.type="firestore",this._queue=new cl,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new cl(t),this._firestoreClient=void 0,await t}}}function ym(n,t){const e=typeof n=="object"?n:vh(),i=typeof n=="string"?n:"(default)",o=fh(e,"firestore").getImmediate({identifier:i});if(!o._initialized){const s=au("firestore");s&&gm(o,...s)}return o}function pn(n){if(n._terminated)throw new O(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vm(n),n._firestoreClient}function vm(n){var t,e,i;const o=n._freezeSettings(),s=function(l,d,h,v){return new Wh(l,d,h,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Fc(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((e=o.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new cm(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class Le{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Le(wt.fromBase64String(t))}catch(e){throw new O(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Le(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class fn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class lo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}}/**
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
 */class Yr{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,o){if(i.length!==o.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==o[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=/^__.*__$/;class wm{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new ei(t,this.data,e,this.fieldTransforms)}}class Oc{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function zc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class ts{constructor(t,e,i,o,s,a){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=o,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ts(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Fu({path:i,xu:!1});return o.Ou(t),o}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Wi(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(zc(this.Cu)&&bm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class xm{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||io(t)}Qu(t,e,i,o=!1){return new ts({Cu:t,methodName:e,qu:i,path:yt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mn(n){const t=n._freezeSettings(),e=io(n._databaseId);return new xm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function co(n,t,e,i,o,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,o);os("Data must be an object, but it was:",a,i);const l=jc(i,a);let d,h;if(s.merge)d=new Mt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const v=[];for(const p of s.mergeFields){const g=yr(t,p,e);if(!a.contains(g))throw new O(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Hc(v,g)||v.push(g)}d=new Mt(v),h=a.fieldTransforms.filter(p=>d.covers(p.field))}else d=null,h=a.fieldTransforms;return new wm(new Dt(l),d,h)}class uo extends lo{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof uo}}class es extends lo{_toFieldTransform(t){return new vp(t.path,new Wn)}isEqual(t){return t instanceof es}}function ns(n,t,e,i){const o=n.Qu(1,t,e);os("Data must be an object, but it was:",o,i);const s=[],a=Dt.empty();Fe(i,(d,h)=>{const v=rs(t,d,e);h=zt(h);const p=o.Nu(v);if(h instanceof uo)s.push(v);else{const g=si(h,p);g!=null&&(s.push(v),a.set(v,g))}});const l=new Mt(s);return new Oc(a,l,o.fieldTransforms)}function is(n,t,e,i,o,s){const a=n.Qu(1,t,e),l=[yr(t,i,e)],d=[o];if(s.length%2!=0)throw new O(L.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(yr(t,s[g])),d.push(s[g+1]);const h=[],v=Dt.empty();for(let g=l.length-1;g>=0;--g)if(!Hc(h,l[g])){const x=l[g];let T=d[g];T=zt(T);const k=a.Nu(x);if(T instanceof uo)h.push(x);else{const V=si(T,k);V!=null&&(h.push(x),v.set(x,V))}}const p=new Mt(h);return new Oc(v,p,a.fieldTransforms)}function Am(n,t,e,i=!1){return si(e,n.Qu(i?4:3,t))}function si(n,t){if(qc(n=zt(n)))return os("Unsupported field value:",t,n),jc(n,t);if(n instanceof lo)return function(i,o){if(!zc(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(o);s&&o.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,o){const s=[];let a=0;for(const l of i){let d=si(l,o.Lu(a));d==null&&(d={nullValue:"NULL_VALUE"}),s.push(d),a++}return{arrayValue:{values:s}}}(n,t)}return function(i,o){if((i=zt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return mp(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=ht.fromDate(i);return{timestampValue:qi(o.serializer,s)}}if(i instanceof ht){const s=new ht(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:qi(o.serializer,s)}}if(i instanceof Zr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Le)return{bytesValue:hc(o.serializer,i._byteString)};if(i instanceof bt){const s=o.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw o.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Br(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Yr)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Bu("VectorValues must only contain numeric values.");return kr(l.serializer,d)})}}}}}}(i,o);throw o.Bu(`Unsupported field value: ${so(i)}`)}(n,t)}function jc(n,t){const e={};return Ol(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fe(n,(i,o)=>{const s=si(o,t.Mu(i));s!=null&&(e[i]=s)}),{mapValue:{fields:e}}}function qc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ht||n instanceof Zr||n instanceof Le||n instanceof bt||n instanceof lo||n instanceof Yr)}function os(n,t,e){if(!qc(e)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(e)){const i=so(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function yr(n,t,e){if((t=zt(t))instanceof fn)return t._internalPath;if(typeof t=="string")return rs(n,t);throw Wi("Field path arguments must be of type string or ",n,!1,void 0,e)}const _m=new RegExp("[~\\*/\\[\\]]");function rs(n,t,e){if(t.search(_m)>=0)throw Wi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new fn(...t.split("."))._internalPath}catch{throw Wi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Wi(n,t,e,i,o){const s=i&&!i.isEmpty(),a=o!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(s||a)&&(d+=" (found",s&&(d+=` in field ${i}`),a&&(d+=` in document ${o}`),d+=")"),new O(L.INVALID_ARGUMENT,l+n+d)}function Hc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Gi{constructor(t,e,i,o,s){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=o,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Em(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ss("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Em extends Gi{data(){return super.data()}}function ss(n,t){return typeof t=="string"?rs(n,t):t instanceof fn?t._internalPath:t._delegate._internalPath}/**
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
 */function Uc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class as{}class $c extends as{}function ho(n,t,...e){let i=[];t instanceof as&&i.push(t),i=i.concat(e),function(s){const a=s.filter(d=>d instanceof cs).length,l=s.filter(d=>d instanceof ls).length;if(a>1||a>0&&l>0)throw new O(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class ls extends $c{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new ls(t,e,i)}_apply(t){const e=this._parse(t);return Qc(t._query,e),new _e(t.firestore,t.converter,lr(t._query,e))}_parse(t){const e=mn(t.firestore);return function(s,a,l,d,h,v,p){let g;if(h.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new O(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){hl(p,v);const x=[];for(const T of p)x.push(ul(d,s,T));g={arrayValue:{values:x}}}else g=ul(d,s,p)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||hl(p,v),g=Am(l,a,p,v==="in"||v==="not-in");return dt.create(h,v,g)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class cs extends as{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new cs(t,e)}_parse(t){const e=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return e.length===1?e[0]:$t.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(o,s){let a=o;const l=s.getFlattenedFilters();for(const d of l)Qc(a,d),a=lr(a,d)}(t._query,e),new _e(t.firestore,t.converter,lr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ds extends $c{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ds(t,e)}_apply(t){const e=function(o,s,a){if(o.startAt!==null)throw new O(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new O(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qn(s,a)}(t._query,this._field,this._direction);return new _e(t.firestore,t.converter,function(o,s){const a=o.explicitOrderBy.concat([s]);return new dn(o.path,o.collectionGroup,a,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(t._query,e))}}function po(n,t="asc"){const e=t,i=ss("orderBy",n);return ds._create(i,e)}function ul(n,t,e){if(typeof(e=zt(e))=="string"){if(e==="")throw new O(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gl(t)&&e.indexOf("/")!==-1)throw new O(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(et.fromString(e));if(!j.isDocumentKey(i))throw new O(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Va(n,new j(i))}if(e instanceof bt)return Va(n,e._key);throw new O(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${so(e)}.`)}function hl(n,t){if(!Array.isArray(n)||n.length===0)throw new O(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Qc(n,t){const e=function(o,s){for(const a of o)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new O(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Wc{convertValue(t,e="none"){switch(Ne(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Be(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return Fe(t,(o,s)=>{i[o]=this.convertValue(s,e)}),i}convertVectorValue(t){var e,i,o;const s=(o=(i=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(a=>at(a.doubleValue));return new Yr(s)}convertGeoPoint(t){return new Zr(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Rr(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Hn(t));default:return null}}convertTimestamp(t){const e=be(t);return new ht(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=et.fromString(t);X(bc(i));const o=new Un(i.get(1),i.get(3)),s=new j(i.popFirst(5));return o.isEqual(e)||oe(`Document ${s} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function fo(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class Im extends Wc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Le(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bt(this.firestore,null,e)}}/**
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
 */class Je{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class us extends Gi{constructor(t,e,i,o,s,a){super(t,e,i,o,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Bi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(ss("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class Bi extends us{data(t={}){return super.data(t)}}class Gc{constructor(t,e,i,o){this._firestore=t,this._userDataWriter=e,this._snapshot=o,this.metadata=new Je(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new Bi(this._firestore,this._userDataWriter,i.key,i,new Je(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(o,s){if(o._snapshot.oldDocs.isEmpty()){let a=0;return o._snapshot.docChanges.map(l=>{const d=new Bi(o._firestore,o._userDataWriter,l.doc.key,l.doc,new Je(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const d=new Bi(o._firestore,o._userDataWriter,l.doc.key,l.doc,new Je(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);let h=-1,v=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),v=a.indexOf(l.doc.key)),{type:Tm(l.type),doc:d,oldIndex:h,newIndex:v}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Tm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function Zt(n){n=Pt(n,bt);const t=Pt(n.firestore,Qt);return pm(pn(t),n._key).then(e=>Jc(t,n,e))}class mo extends Wc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Le(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bt(this.firestore,null,e)}}function Oe(n){n=Pt(n,_e);const t=Pt(n.firestore,Qt),e=pn(t),i=new mo(t);return Uc(n._query),fm(e,n._query).then(o=>new Gc(t,i,n,o))}function xe(n,t,e){n=Pt(n,bt);const i=Pt(n.firestore,Qt),o=fo(n.converter,t,e);return ai(i,[co(mn(i),"setDoc",n._key,o,n.converter!==null,e).toMutation(n._key,ut.none())])}function Wt(n,t,e,...i){n=Pt(n,bt);const o=Pt(n.firestore,Qt),s=mn(o);let a;return a=typeof(t=zt(t))=="string"||t instanceof fn?is(s,"updateDoc",n._key,t,e,i):ns(s,"updateDoc",n._key,t),ai(o,[a.toMutation(n._key,ut.exists(!0))])}function Kc(n){return ai(Pt(n.firestore,Qt),[new ni(n._key,ut.none())])}function Xc(n,t){const e=Pt(n.firestore,Qt),i=it(n),o=fo(n.converter,t);return ai(e,[co(mn(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,ut.exists(!1))]).then(()=>i)}function ze(n,...t){var e,i,o;n=zt(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||dl(t[a])||(s=t[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(dl(t[a])){const p=t[a];t[a]=(e=p.next)===null||e===void 0?void 0:e.bind(p),t[a+1]=(i=p.error)===null||i===void 0?void 0:i.bind(p),t[a+2]=(o=p.complete)===null||o===void 0?void 0:o.bind(p)}let d,h,v;if(n instanceof bt)h=Pt(n.firestore,Qt),v=Ji(n._key.path),d={next:p=>{t[a]&&t[a](Jc(h,n,p))},error:t[a+1],complete:t[a+2]};else{const p=Pt(n,_e);h=Pt(p.firestore,Qt),v=p._query;const g=new mo(h);d={next:x=>{t[a]&&t[a](new Gc(h,g,p,x))},error:t[a+1],complete:t[a+2]},Uc(n._query)}return function(g,x,T,k){const V=new Xr(k),S=new Gr(x,V,T);return g.asyncQueue.enqueueAndForget(async()=>$r(await Qi(g),S)),()=>{V.Za(),g.asyncQueue.enqueueAndForget(async()=>Qr(await Qi(g),S))}}(pn(h),v,l,d)}function ai(n,t){return function(i,o){const s=new Kt;return i.asyncQueue.enqueueAndForget(async()=>Yf(await um(i),o,s)),s.promise}(pn(n),t)}function Jc(n,t,e){const i=e.docs.get(t._key),o=new mo(n);return new us(n,o,t._key,i,new Je(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const Rm={maxAttempts:5};/**
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
 */class Cm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=mn(t)}set(t,e,i){this._verifyNotCommitted();const o=he(t,this._firestore),s=fo(o.converter,e,i),a=co(this._dataReader,"WriteBatch.set",o._key,s,o.converter!==null,i);return this._mutations.push(a.toMutation(o._key,ut.none())),this}update(t,e,i,...o){this._verifyNotCommitted();const s=he(t,this._firestore);let a;return a=typeof(e=zt(e))=="string"||e instanceof fn?is(this._dataReader,"WriteBatch.update",s._key,e,i,o):ns(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,ut.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=he(t,this._firestore);return this._mutations=this._mutations.concat(new ni(e._key,ut.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function he(n,t){if((n=zt(n)).firestore!==t)throw new O(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class Sm extends class{constructor(e,i){this._firestore=e,this._transaction=i,this._dataReader=mn(e)}get(e){const i=he(e,this._firestore),o=new Im(this._firestore);return this._transaction.lookup([i._key]).then(s=>{if(!s||s.length!==1)return q();const a=s[0];if(a.isFoundDocument())return new Gi(this._firestore,o,a.key,a,i.converter);if(a.isNoDocument())return new Gi(this._firestore,o,i._key,null,i.converter);throw q()})}set(e,i,o){const s=he(e,this._firestore),a=fo(s.converter,i,o),l=co(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,o);return this._transaction.set(s._key,l),this}update(e,i,o,...s){const a=he(e,this._firestore);let l;return l=typeof(i=zt(i))=="string"||i instanceof fn?is(this._dataReader,"Transaction.update",a._key,i,o,s):ns(this._dataReader,"Transaction.update",a._key,i),this._transaction.update(a._key,l),this}delete(e){const i=he(e,this._firestore);return this._transaction.delete(i._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=he(t,this._firestore),i=new mo(this._firestore);return super.get(t).then(o=>new us(this._firestore,i,e._key,o._document,new Je(!1,!1),e.converter))}}function Pm(n,t,e){n=Pt(n,Qt);const i=Object.assign(Object.assign({},Rm),e);return function(s){if(s.maxAttempts<1)throw new O(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(s,a,l){const d=new Kt;return s.asyncQueue.enqueueAndForget(async()=>{const h=await hm(s);new lm(s.asyncQueue,h,l,a,d).au()}),d.promise}(pn(n),o=>t(new Sm(n,o)),i)}function Zc(){return new es("serverTimestamp")}/**
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
 */function hs(n){return pn(n=Pt(n,Qt)),new Cm(n,t=>ai(n,t))}(function(t,e=!0){(function(o){cn=o})(yh),Mi(new zn("firestore",(i,{instanceIdentifier:o,options:s})=>{const a=i.getProvider("app").getImmediate(),l=new Qt(new Vh(i.getProvider("auth-internal")),new Lh(i.getProvider("app-check-internal")),function(h,v){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new O(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(h.options.projectId,v)}(a,o),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ze(Ra,"4.7.3",t),Ze(Ra,"4.7.3","esm2017")})();const km={apiKey:"AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",authDomain:"feria-vinos-sucovi-2027.firebaseapp.com",databaseURL:"https://feria-vinos-sucovi-2027-default-rtdb.firebaseio.com",projectId:"feria-vinos-sucovi-2027",storageBucket:"feria-vinos-sucovi-2027.firebasestorage.app",messagingSenderId:"1686119758",appId:"1:1686119758:web:2c3c6d96e36f1276052a1f",measurementId:"G-VRMTQ3SS7E"},Vm=Cl(km),Q=ym(Vm),Ht=[{id:0,key:"368813",nombre:"Sucovi",region:"Organización",pass:"stand00"},{id:1,key:"d48429",nombre:"Alta Vista",region:"Mendoza",pass:"stand01"},{id:2,key:"ba356c",nombre:"Andillian",region:"Mendoza",pass:"stand02"},{id:3,key:"451e62",nombre:"Ante Nada",region:"Mendoza",pass:"stand03"},{id:4,key:"835c2d",nombre:"Bodega Benegas",region:"Mendoza",pass:"stand04"},{id:5,key:"e45a28",nombre:"Bianchi",region:"San Rafael",pass:"stand05"},{id:6,key:"12ac1c",nombre:"Catena Zapata",region:"Luján de Cuyo",pass:"stand06"},{id:7,key:"18abc3",nombre:"Bodegas Bórbore",region:"Mendoza (1936)",pass:"stand07"},{id:8,key:"452b71",nombre:"Fábula Wines",region:"Mendoza",pass:"stand08"},{id:9,key:"0c55a5",nombre:"Finca Iral",region:"Mendoza",pass:"stand09"},{id:10,key:"5cb108",nombre:"Giménez Riili",region:"Mendoza",pass:"stand10"},{id:11,key:"27f372",nombre:"Jorge Rubio",region:"Mendoza",pass:"stand11"},{id:12,key:"a9d27f",nombre:"La Coste de los Andes",region:"Mendoza",pass:"stand12"},{id:13,key:"b5be6e",nombre:"Las Perdices",region:"Mendoza",pass:"stand13"},{id:14,key:"7da93b",nombre:"Lorenzo de Agrelo",region:"Mendoza",pass:"stand14"},{id:15,key:"f52ab4",nombre:"Pannunzio Wines",region:"Mendoza",pass:"stand15"},{id:16,key:"a32dd6",nombre:"Bodega Patritti",region:"Mendoza",pass:"stand16"},{id:17,key:"175358",nombre:"Rosell Boher",region:"Mendoza",pass:"stand17"},{id:18,key:"4a2b00",nombre:"Valle de la Puerta",region:"La Rioja",pass:"stand18"},{id:19,key:"b3c4d5",nombre:"Bertelli",region:"Buenos Aires",pass:"stand19"},{id:20,key:"e6f7a8",nombre:"Familia Aicardi",region:"Neuquén",pass:"stand20"},{id:21,key:"b9c0d1",nombre:"Finca Flichman",region:"Mendoza",pass:"stand21"},{id:22,key:"e2f3a4",nombre:"Don Martino Wines",region:"Mendoza",pass:"stand22"},{id:23,key:"b5c6d7",nombre:"Séptima",region:"Mendoza",pass:"stand23"}];async function vr(n){return await Xc(xt(Q,"invitados"),{...n,creadoEn:Zc()})}async function fe(n,t){await Wt(it(Q,"invitados",n),t)}function go(n){return ze(ho(xt(Q,"invitados"),po("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}async function Xn(n){const e=(await Oe(xt(Q,"invitados"))).docs.find(i=>i.data().token===n);return e?{fireId:e.id,...e.data()}:null}async function Dm(n){const e=(await Oe(xt(Q,"invitados"))).docs.find(i=>i.data().codigo===n);return e?{fireId:e.id,...e.data()}:null}async function Yc(n,t,e,i,o){const s=it(Q,"carritos",n,"items",String(t)),a=await Zt(s);if(a.exists()){const l=a.data(),d=l.items||[],h=d.findIndex(v=>v.key===i.key);h>=0?d[h]=i:d.push(i),await xe(s,{standId:t,standNombre:e,items:d,retiro:o||l.retiro||"stand"})}else await xe(s,{standId:t,standNombre:e,items:[i],retiro:o||"stand"})}async function ps(n,t,e){await Wt(it(Q,"carritos",n,"items",String(t)),{retiro:e})}async function Ki(n,t,e){const i=it(Q,"carritos",n,"items",String(t)),o=await Zt(i);if(!o.exists())return;const s=(o.data().items||[]).filter(a=>a.key!==e);s.length?await Wt(i,{items:s}):await Kc(i)}async function br(n){return(await Oe(xt(Q,"carritos",n,"items"))).docs.map(e=>({standId:e.id,...e.data()}))}function fs(n,t){return ze(xt(Q,"carritos",n,"items"),e=>t(e.docs.map(i=>({standDocId:i.id,...i.data()}))))}async function wr(n){const t=await Oe(xt(Q,"carritos",n,"items")),e=hs(Q);t.docs.forEach(i=>e.delete(i.ref)),await e.commit()}async function td(n,t){const e=it(Q,"config","contadores"),i=await Zt(e);let o=(i.exists()&&i.data().voucher||0)+1;const s=hs(Q),a=[];return t.forEach((l,d)=>{const h=it(xt(Q,"pedidos"));a.push(h),s.set(h,{invFireId:n.fireId,invNombre:n.nombre+" "+n.apellido,invCodigo:n.codigo,standId:l.standId,standNombre:l.standNombre,items:l.items||[],total:(l.items||[]).reduce((v,p)=>v+(p.sub||0),0),retiro:l.retiro||"stand",estado:"pagado",voucherNum:o+d,creadoEn:Zc()})}),s.set(e,{voucher:o+t.length-1},{merge:!0}),await s.commit(),a.map(l=>l.id)}function yo(n){return ze(ho(xt(Q,"pedidos"),po("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}function ed(n,t){return ze(ho(xt(Q,"pedidos"),po("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>Number(i.standId)===Number(n))))}function nd(n,t){return ze(ho(xt(Q,"pedidos"),po("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>i.invFireId===n)))}async function Bm(n,t=""){const e=it(Q,"pedidos",n);await Wt(e,{estado:"cancelado",canceladoAt:new Date().toISOString(),canceladoMotivo:t||"Cancelado desde caja"})}async function id(n){const t=it(Q,"pedidos",n);await Wt(t,{estado:"reembolsado",reembolsadoAt:new Date().toISOString()})}async function od(n){const t=it(Q,"pedidos",n);await Wt(t,{estado:"listo",listoAt:new Date().toISOString()})}async function rd(n){const t=it(Q,"pedidos",n);await Wt(t,{estado:"retirado",retiradoAt:new Date().toISOString()})}async function sd(n){const t=it(Q,"pedidos",n);await Wt(t,{estado:"entregado",entregadoAt:new Date().toISOString()})}async function ad(n){await Wt(it(Q,"pedidos",n),{estado:"entregado"})}async function Nm(n,t){const e={pendiente:"pagado",pagado:"listo",listo:"entregado"};e[t]&&await Wt(it(Q,"pedidos",n),{estado:e[t]})}function li(n,t){return ze(xt(Q,"bodegas",String(n),"vinos"),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()}))))}async function ld(n,t){return(await Xc(xt(Q,"bodegas",String(n),"vinos"),t)).id}async function cd(n,t,e){await Wt(it(Q,"bodegas",String(n),"vinos",t),e)}async function dd(n,t){await Kc(it(Q,"bodegas",String(n),"vinos",t))}async function ud(){const n=["invitados","pedidos"];for(const t of n){const e=await Oe(xt(Q,t)),i=hs(Q);e.docs.forEach(o=>i.delete(o.ref)),await i.commit()}}async function Xi(n,t,e,i){const o=it(Q,"stock",n+"_"+t),s=await Zt(o),a=s.exists()?s.data():{},l=i&&i!==t?i:a.vinoNombre&&a.vinoNombre!==t?a.vinoNombre:i||t;await xe(o,{standId:Number(n),vinoId:t,vinoNombre:l,total:(a.total||0)+e,degustacion:a.degustacion||0,reservado:a.reservado||0,pagado:a.pagado||0,entregado:a.entregado||0},{merge:!0})}async function hd(n,t,e){const i=it(Q,"stock",n+"_"+t),o=await Zt(i),s=o.exists()?o.data():{};await xe(i,{degustacion:(s.degustacion||0)+e},{merge:!0})}async function pd(n,t,e){const i=it(Q,"stock",String(n)+"_"+t);try{return await Pm(Q,async s=>{const a=await s.get(i);if(!a.exists())return!0;const l=a.data(),d=(l.total||0)-(l.degustacion||0)-(l.reservado||0)-(l.pagado||0)-(l.entregado||0);return e>d?!1:(s.update(i,{reservado:(l.reservado||0)+e}),!0)})}catch(o){return console.error("intentarReservarStock:",o),!0}}async function ms(n,t,e){const i=it(Q,"stock",String(n)+"_"+t),o=await Zt(i);if(!o.exists())return;const s=o.data();await xe(i,{reservado:Math.max(0,(s.reservado||0)-e)},{merge:!0})}async function fd(n,t,e){const i=it(Q,"stock",String(n)+"_"+t),o=await Zt(i);if(!o.exists())return;const s=o.data();await xe(i,{reservado:Math.max(0,(s.reservado||0)-e),pagado:(s.pagado||0)+e},{merge:!0})}function vo(n){return ze(xt(Q,"stock"),t=>n(t.docs.map(e=>({id:e.id,...e.data()}))))}async function Lm(n,t){const e=it(Q,"stock",String(n)+"_"+t),i=await Zt(e);return i.exists()?i.data():null}async function md(n){const t=[];if(!n||!n.length)return t;for(const e of n)try{(await Oe(xt(Q,"carritos",e,"items"))).docs.forEach(o=>{const s=o.data(),a=s.standId!==void 0?Number(s.standId):null;a!==null&&(s.items||[]).forEach(l=>{t.push({invFireId:e,standId:a,vinoId:l.vinoId||"",vinoNombre:l.vinoNombre||"",qty:l.qty||1})})})}catch{}return t}async function Fm(n,t,e){const i=it(Q,"stock",n+"_"+t);await xe(i,{disponible:Math.max(0,e)},{merge:!0})}async function gd(n){return(await Oe(xt(Q,"invitados"))).docs.map(e=>({fireId:e.id,...e.data()})).filter(e=>(e.familia||"").toLowerCase()===n.toLowerCase())}async function yd(n){const t=await Zt(it(Q,"familyLinks",n.toLowerCase()));return t.exists()?t.data().token:null}async function xr(n,t){await xe(it(Q,"familyLinks",n.toLowerCase()),{token:t,familia:n})}async function vd(n,t){const e=await Zt(it(Q,"familyLinks",n.toLowerCase()));return e.exists()?e.data().token===t:!1}const Jn=Object.freeze(Object.defineProperty({__proto__:null,BODEGAS:Ht,actualizarInvitado:fe,actualizarRetiroStand:ps,actualizarStock:Xi,actualizarVino:cd,agregarAlCarrito:Yc,avanzarEstado:Nm,buscarInvitadoPorCodigo:Dm,buscarInvitadoPorToken:Xn,buscarInvitadosPorFamilia:gd,cancelarPedido:Bm,cobrarStock:fd,crearInvitado:vr,crearPedidosDesdeCarrito:td,eliminarItemCarrito:Ki,eliminarVino:dd,entregarDomicilio:sd,escucharCarrito:fs,escucharInvitados:go,escucharPedidos:yo,escucharPedidosPorInvitado:nd,escucharPedidosPorStand:ed,escucharStock:vo,escucharVinos:li,getFamilyToken:yd,getStockDoc:Lm,guardarDisponibleStock:Fm,guardarFamilyToken:xr,guardarVino:ld,intentarReservarStock:pd,leerCarrito:br,leerTodosLosCarritos:md,liberarReservaStock:ms,limpiarDatosPrueba:ud,marcarEntregado:ad,marcarListoLogistica:od,reembolsarPedido:id,registrarDegustacion:hd,retirarDeStand:rd,vaciarCarrito:wr,verificarFamilyToken:vd},Symbol.toStringTag,{value:"Module"})),Mm="modulepreload",Om=function(n){return"/"+n},pl={},an=function(t,e,i){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(e.map(d=>{if(d=Om(d),d in pl)return;pl[d]=!0;const h=d.endsWith(".css"),v=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${v}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Mm,h||(p.as="script"),p.crossOrigin="",p.href=d,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,x)=>{p.addEventListener("load",g),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},gs="data:image/png;base64,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";function Nt({title:n,sub:t="",backHref:e="",backLabel:i="← Panel",backStyle:o="",actions:s=[]}={}){return`
    <div class="hdr">
      <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
        <img src="${gs}" alt="Sucovi 2027"
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
    <div class="gold"></div>`}function Ni(n){return`
    <div style="background:linear-gradient(160deg,#1A3A5C 0%,#2C5F8A 60%,#3A7D44 100%);
                color:#fff;padding:20px 16px 16px;text-align:center">
      <img src="${gs}" alt="Sucovi 2027"
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
    <div class="gold"></div>`}function Gt(){if(document.getElementById("sucovi-styles"))return;const n=document.createElement("style");n.id="sucovi-styles",n.textContent=`
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
  `,document.head.appendChild(n)}async function zm(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function fl(n,t,e){await zm();const i=document.getElementById(n);if(i)try{const o=qrcode(0,"M");o.addData(String(t)),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let h=0;h<s;h++)o.isDark(d,h)&&l.fillRect(h*a,d*a,a,a)}catch(o){console.error("QR error:",o)}}const Si=n=>Number(n).toLocaleString("es-AR"),ml=()=>Math.random().toString(36).slice(2,10).toUpperCase(),gl=n=>"INV-"+String(n).padStart(4,"0");function yl(n){return{pendiente:'<span class="badge b-pend">Pendiente</span>',pagado:'<span class="badge b-pago">Bono pagado</span>',ingresado:'<span class="badge b-ingr">Ingresó</span>',invalidado:'<span class="badge b-inv">Invalidado</span>'}[n]||""}const jm={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},qm={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"};function bd(n){const t=sessionStorage.getItem("admin-pin"),e=localStorage.getItem("sucovi-admin-pin")||"2027";if(t!==e&&t!=="1418"){n.innerHTML='<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#F0F4F8"><div style="background:#fff;border-radius:12px;padding:32px;text-align:center;max-width:320px;width:100%;box-shadow:0 4px 20px rgba(0,0,0,.1)"><div style="font-size:40px;margin-bottom:12px">🔒</div><h2 style="font-size:18px;font-weight:600;color:#1A3A5C;margin-bottom:4px">Panel Admin</h2><p style="font-size:13px;color:#888;margin-bottom:20px">SUCOVI 2027</p><input id="pin-input" type="password" maxlength="4" placeholder="PIN de 4 digitos" style="width:100%;text-align:center;font-size:24px;letter-spacing:.3em;padding:12px;border:2px solid #D6E4F0;border-radius:8px;margin-bottom:12px" onkeydown="if(event.keyCode===13) window._checkPin()"><button class="btn btn-v" style="width:100%;padding:12px;font-size:14px" onclick="window._checkPin()">Ingresar</button><div id="pin-err" style="margin-top:8px;font-size:12px;color:#C0392B"></div></div></div>',window._checkPin=()=>{const I=document.getElementById("pin-input").value,m=localStorage.getItem("sucovi-admin-pin")||"2027";I===m||I==="1418"?(sessionStorage.setItem("admin-pin",I),bd(n)):(document.getElementById("pin-err").textContent="PIN incorrecto",document.getElementById("pin-input").value="")},setTimeout(()=>{var I;return(I=document.getElementById("pin-input"))==null?void 0:I.focus()},100);return}Gt();let i=[],o=[],s=[],a=[],l="inv",d=null;vo(I=>{a=I,l==="stock"&&S().catch(()=>{})}),n.innerHTML=Nt({title:"Sucovi 2027",sub:"20 jun 2026 · 19:30 hs · Roma 656, Olivos"})+`
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
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Familia SUCOVI</label><select id="edit-familia" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"><option value="">— Sin familia —</option><option>Asti Vera</option><option>Bartra Gambini</option><option>Cambiano</option><option>Camoranesi</option><option>Cutri Speranza</option><option>Czaja</option><option>D'Alessandro</option><option>D'Antonio Faraone</option><option>Garay</option><option>Grosskopf Morales</option><option>Pannunzio</option><option>Ponzo</option><option>Porto</option><option>Sabbatini</option><option>Stamadianos Ortiz</option><option>Torres Novoa</option><option>Yanson</option></select></div>
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
    </div>`,go(I=>{i=I,l==="inv"&&h(),l==="res"&&k()}),yo(I=>{o=I,s=I,l==="ped"&&x(),l==="res"&&k(),l==="cancelados"&&V()}),window._aTab=(I,m)=>{var y;l=I,document.querySelectorAll(".nav button").forEach(E=>E.classList.remove("on")),m.classList.add("on");const f={inv:h,reg:v,excel:p,ped:x,stands:T,res:k,config:P,stock:S};(y=f[I])==null||y.call(f)};function h(){const I=document.getElementById("tab-content");document.getElementById("buscar-inv")||(I.innerHTML=`
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
        <div class="card" id="lista-inv"></div>`),window._fInv=()=>{var _,A;const m=(((_=document.getElementById("buscar-inv"))==null?void 0:_.value)||"").toLowerCase(),f=((A=document.getElementById("fil-est"))==null?void 0:A.value)||"",y=i.filter(b=>(b.nombre+" "+b.apellido+" "+(b.codigo||"")+" "+(b.familia||"")).toLowerCase().includes(m)&&(!f||b.estado===f)),E=document.getElementById("lista-inv");if(E){if(!y.length){E.innerHTML='<div class="empty">Sin resultados</div>';return}E.innerHTML=y.map(b=>{var Y,$;return`
        <div class="row" style="${b.estado==="invalidado"?"opacity:.5":""}">
          <div class="avatar">${((Y=b.nombre)==null?void 0:Y[0])||"?"}${(($=b.apellido)==null?void 0:$[0])||""}</div>
          <div style="flex:1;min-width:80px">
            <div style="font-size:13px;font-weight:500">${b.nombre} ${b.apellido}</div>
            <div style="font-size:11px;color:#888">${b.tel}${b.familia?" · "+b.familia:""}</div>
          </div>
          <div style="font-size:11px;color:#aaa">${b.codigo||""}</div>
          ${yl(b.estado)}
          <div style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">
            <button class="btn" style="padding:4px 8px;font-size:11px" onclick="window._abrirWA('${b.fireId}')">📱 WA</button>
            <button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._descargarQR('${b.fireId}')">📥 QR</button>
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInv('${b.fireId}')">✏️</button>
            ${b.estado!=="invalidado"?`<button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D" onclick="window._invalidar('${b.fireId}','${b.nombre} ${b.apellido}')">✕ Invalidar</button>`:`<button class="btn" style="padding:4px 8px;font-size:11px;color:#3B6D11;border-color:#3B6D11" onclick="window._reactivar('${b.fireId}')">↩ Reactivar</button>`}
          </div>
        </div>`}).join("")}},window._fInv()}window._invalidar=async(I,m)=>{confirm(`¿Invalidar a ${m}?`)&&await fe(I,{estado:"invalidado"})},window._reactivar=async I=>await fe(I,{estado:"pendiente"});function v(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:14px">Registrar invitado</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
          <div><label style="font-size:11px;color:#666">Nombre *</label><input id="rn" placeholder="Juan" style="margin-top:3px"></div>
          <div><label style="font-size:11px;color:#666">Apellido *</label><input id="ra" placeholder="Pérez" style="margin-top:3px"></div>
        </div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">WhatsApp *</label><input id="rt" placeholder="+54 9 11 XXXX-XXXX" style="margin-top:3px"></div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Email (opcional)</label><input id="re" type="email" placeholder="juan@gmail.com" style="margin-top:3px"></div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Familia SUCOVI</label><select id="rf" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"><option value="">— Sin familia —</option><option>Asti Vera</option><option>Bartra Gambini</option><option>Cambiano</option><option>Camoranesi</option><option>Cutri Speranza</option><option>Czaja</option><option>D'Alessandro</option><option>D'Antonio Faraone</option><option>Garay</option><option>Grosskopf Morales</option><option>Pannunzio</option><option>Ponzo</option><option>Porto</option><option>Sabbatini</option><option>Stamadianos Ortiz</option><option>Torres Novoa</option><option>Yanson</option></select></div>
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
      </div>`}window._registrar=async()=>{const I=document.getElementById("rn").value.trim(),m=document.getElementById("ra").value.trim(),f=document.getElementById("rt").value.trim(),y=document.querySelector('input[name="rp"]:checked').value,E=document.getElementById("reg-msg");if(!I||!m||!f){E.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}E.innerHTML='<span style="color:#888">Guardando...</span>';try{const _=gl(i.length+1),A=ml(),b=await vr({nombre:I,apellido:m,tel:f,...document.getElementById("re").value.trim()&&{email:document.getElementById("re").value.trim()},...document.getElementById("rf").value.trim()&&{familia:document.getElementById("rf").value.trim()},...document.getElementById("rc").value.trim()&&{comentarios:document.getElementById("rc").value.trim()},estado:y,codigo:_,token:A});E.innerHTML=`<span style="color:#3B6D11">✓ ${I} ${m} (${_})</span>`,["rn","ra","rt","re","rf","rc"].forEach(Y=>{const $=document.getElementById(Y);$&&($.value="")}),y==="pagado"&&setTimeout(()=>window._abrirWA(b.id),600)}catch(_){E.innerHTML=`<span style="color:#A32D2D">Error: ${_.message}</span>`}};function p(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}let g=[];window._procesarExcel=async I=>{const m=I.files[0];if(!m)return;const f=document.getElementById("excel-preview");f.innerHTML='<p style="font-size:12px;color:#888">Procesando...</p>';try{const y=await an(()=>import("https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs"),[]),E=await m.arrayBuffer(),_=y.read(E),A=_.Sheets[_.SheetNames[0]],b=y.utils.sheet_to_json(A,{header:1}),Y=typeof b[0][0]=="string"&&b[0][0].toLowerCase().includes("nombre")?1:0;g=b.slice(Y).filter($=>$[0]&&$[1]&&$[2]).map($=>({nombre:String($[0]||"").trim(),apellido:String($[1]||"").trim(),tel:String($[2]||"").trim(),...$[3]?{email:String($[3]).trim()}:{},...$[4]?{familia:String($[4]).trim()}:{},...$[5]?{comentarios:String($[5]).trim()}:{},estado:String($[6]||"").toUpperCase()==="SI"?"pagado":"pendiente"})),f.innerHTML=`
        <p style="font-size:12px;color:#3B6D11;margin-bottom:8px">
          ✓ ${g.length} invitados detectados
        </p>
        <div style="max-height:200px;overflow-y:auto;border:.5px solid #e0d5c8;border-radius:8px">
          ${g.slice(0,5).map($=>`
            <div style="padding:6px 10px;border-bottom:.5px solid #f0ebe4;font-size:12px">
              ${$.nombre} ${$.apellido} · ${$.tel} · <span class="badge ${$.estado==="pagado"?"b-pago":"b-pend"}">${$.estado==="pagado"?"Pagado":"Pendiente"}</span>
            </div>`).join("")}
          ${g.length>5?`<div style="padding:6px 10px;font-size:11px;color:#aaa">...y ${g.length-5} más</div>`:""}
        </div>`,document.getElementById("btn-importar").style.display="block"}catch(y){f.innerHTML=`<p style="color:#A32D2D;font-size:12px">Error al leer el archivo: ${y.message}</p>`}},window._importarExcel=async()=>{if(!g.length)return;const I=document.getElementById("btn-importar"),m=document.getElementById("excel-msg");I.disabled=!0,I.textContent="Importando...",m.innerHTML='<span style="color:#888">Procesando...</span>';let f=0,y=0;const E=i.length;for(let _=0;_<g.length;_++)try{const A=g[_];await vr({...A,codigo:gl(E+_+1),token:ml()}),f++}catch{y++}m.innerHTML=`<span style="color:#3B6D11">✓ ${f} invitados importados${y?` (${y} errores)`:""}</span>`,I.style.display="none",g=[]};function x(){const I=document.getElementById("tab-content");if(!o.length){I.innerHTML='<div class="empty">Sin pedidos aún 🍷</div>';return}I.innerHTML=o.map(m=>{var f;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">#${(f=m.fireId)==null?void 0:f.slice(-4).toUpperCase()}</span>
        <div style="flex:1;min-width:90px">
          <div style="font-size:12px;font-weight:500">${m.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${m.standNombre}${m.retiro==="envio"?' · <span style="color:#5A1E99">Envío</span>':""}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:100px">${(m.items||[]).map(y=>y.desc).join(" · ")}</span>
        <span style="font-size:14px;font-weight:500">$${Si(m.total||0)}</span>
        <span class="badge ${qm[m.estado]}">${jm[m.estado]}</span>
      </div>`}).join("")}function T(){const I=window.location.origin;document.getElementById("tab-content").innerHTML=`
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>QR de pedidos:</strong> se imprime en el stand — los clientes lo escanean con su QR de acceso.<br>
        <strong>Panel stand:</strong> para el personal de la bodega (ver pedidos + marcar entregas).<br>
        <strong>Carga vinos:</strong> para que cada bodega cargue su carta directamente.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${Ht.filter(m=>!m.oculto).map(m=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${m.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${m.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${m.region}</div>
            <canvas id="qr-s${m.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="font-size:10px;color:#aaa;margin-bottom:8px;word-break:break-all">${I}/stand/${m.id}</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${I}/stand/${m.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <div style="display:flex;gap:4px">
                <a href="${I}/panel/${m.id}?key=${m.key}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none;flex:1;justify-content:center">Panel</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#185FA5;border-color:#185FA5"
                  onclick="navigator.clipboard?.writeText('${I}/panel/${m.id}?key=${m.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="display:flex;gap:4px">
                <a href="${I}/bodega/${m.id}/vinos?key=${m.key}" target="_blank" class="btn" style="font-size:11px;padding:5px;text-decoration:none;color:#3A7D44;border-color:#3A7D44;flex:1;justify-content:center">Vinos</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#3A7D44;border-color:#3A7D44"
                  onclick="navigator.clipboard?.writeText('${I}/bodega/${m.id}/vinos?key=${m.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="font-size:10px;color:#aaa;margin-top:2px">Pass: <strong>${m.pass}</strong></div>
            </div>
          </div>`).join("")}
      </div>`,Ht.forEach(m=>setTimeout(()=>fl("qr-s"+m.id,`${I}/stand/${m.id}`,110),50))}function k(){const I=i.filter(A=>A.estado==="pagado").length,m=i.filter(A=>A.estado==="ingresado").length,f=(I+m)*35e3,y=o.reduce((A,b)=>A+(b.total||0),0),E={};o.forEach(A=>{E[A.standId]||(E[A.standId]={n:A.standNombre,t:0,c:0}),E[A.standId].t+=A.total||0,E[A.standId].c++});const _=Object.values(E).sort((A,b)=>b.t-A.t);document.getElementById("tab-content").innerHTML=`
      <div class="stats">
        ${[[i.filter(A=>A.estado!=="invalidado").length,"Invitados"],[I+m,"Con bono"],["$"+Si(f),"Bonos"],[o.length,"Pedidos"],["$"+Si(y),"Ventas"],[o.filter(A=>A.retiro==="envio").length,"Envíos"]].map(([A,b])=>`<div class="stat"><div class="v" style="font-size:${String(A).length>7?"13px":"20px"}">${A}</div><div class="l">${b}</div></div>`).join("")}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Ventas por bodega</p>
        ${_.length?_.map(A=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span style="font-weight:500">${A.n}</span><span style="color:#888">${A.c} ped.</span><span style="font-weight:500">$${Si(A.t)}</span>
          </div>`).join(""):'<div class="empty">Sin ventas aún</div>'}
      </div>`}function V(){const I=document.getElementById("tab-body"),m=s.filter(f=>f.estado==="cancelado");if(!m.length){I.innerHTML='<div class="empty" style="padding:40px">Sin pedidos cancelados 👍</div>';return}I.innerHTML=`
      <div style="background:#FEE2E2;border:1px solid #FCA5A5;border-radius:8px;
        padding:10px 14px;margin-bottom:14px;font-size:12px;color:#991B1B">
        ⚠️ Estos pedidos fueron cancelados después de cobrar. Los QR asociados ya no son válidos
        pero pueden haber sido impresos o enviados por WhatsApp.
      </div>
      ${m.map(f=>{const y=f.canceladoAt?new Date(f.canceladoAt).toLocaleString("es-AR"):"Sin fecha";return`
        <div class="card" style="margin-bottom:8px;border-left:4px solid #C0392B;opacity:.9">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
            <div>
              <div style="font-size:14px;font-weight:500;color:#1A3A5C">${f.invNombre||"Invitado"}</div>
              <div style="font-size:11px;color:#888">${f.invCodigo||""} · ${f.standNombre}</div>
            </div>
            <span class="badge" style="background:#C0392B;color:#fff">❌ Cancelado</span>
          </div>
          <div style="font-size:12px;color:#666;margin-bottom:4px">
            ${(f.items||[]).map(E=>E.desc).join(" · ")}
          </div>
          <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:500">
            <span style="color:#888">Cancelado: ${y}</span>
            <span style="color:#C0392B">$${Number(f.total||0).toLocaleString("es-AR")}</span>
          </div>
          ${f.canceladoMotivo?`<div style="font-size:11px;color:#aaa;margin-top:3px">${f.canceladoMotivo}</div>`:""}
        </div>`}).join("")}
      <div style="font-size:12px;color:#888;text-align:right;margin-top:8px">
        Total cancelado: <strong style="color:#C0392B">
          $${m.reduce((f,y)=>f+(y.total||0),0).toLocaleString("es-AR")}
        </strong>
      </div>`}async function S(){const I=document.getElementById("tab-content");I.innerHTML='<div class="empty">Cargando stock...</div>';let m=[];try{const y=i.map(E=>E.fireId);m=await md(y),console.log("CARRITOS:",m.length)}catch(y){console.log("ERROR carritos:",y)}const f={};if(o.forEach(y=>{(y.items||[]).forEach(E=>{const _=y.standId+"_"+(E.vinoId||E.vinoNombre||"");f[_]||(f[_]={reservado:0,pagado:0,entregado:0});const A=E.qty||1;y.estado==="pagado"||y.estado==="listo"?f[_].pagado+=A:y.estado==="entregado"?f[_].entregado+=A:y.estado!=="cancelado"&&y.estado!=="reembolsado"&&(f[_].reservado+=A)})}),!a.length){I.innerHTML='<div class="empty" style="padding:40px">Sin stock cargado todavía.<br><br>Cargá el stock desde la pantalla de vinos de cada bodega.</div>';return}I.innerHTML=`
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
${a.map((y,E)=>{const _=f[y.standId+"_"+y.vinoId]||{pagado:0,entregado:0},A=Ht.find(At=>Number(At.id)===Number(y.standId)),b=(y.total||0)-(y.degustacion||0)-(y.reservado||0)-(y.pagado||0)-(y.entregado||0),Y=b<=0?"#C0392B":b<=3?"#D97706":"#3A7D44";return'<tr style="background:'+(E%2===0?"#fff":"#F8FAFC")+';border-bottom:.5px solid #E8EFF5"><td style="padding:8px"><div style="font-weight:500;color:#1A3A5C">'+(y.vinoNombre||y.vinoId)+'</div><div style="font-size:11px;color:#888">Stand #'+y.standId+" · "+((A==null?void 0:A.nombre)||"")+'</div></td><td style="padding:8px;text-align:center;font-weight:500">'+(y.total||0)+'</td><td style="padding:8px;text-align:center;color:#D97706">'+(y.degustacion||0)+'</td><td style="padding:8px;text-align:center">'+(y.reservado||0)+'</td><td style="padding:8px;text-align:center">'+_.pagado+'</td><td style="padding:8px;text-align:center">'+_.entregado+'</td><td style="padding:8px;text-align:center;font-weight:600;color:'+Y+'">'+Math.max(0,b)+'</td><td style="padding:8px;text-align:center"><button class="btn" style="font-size:10px;padding:3px 6px;margin-bottom:3px;display:block;width:100%" data-sid="'+y.standId+'" data-vid="'+y.vinoId+'" data-nom="'+encodeURIComponent(y.vinoNombre||y.vinoId)+'" onclick="window._agregarStock(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">+ Stock</button><button class="btn" style="font-size:10px;padding:3px 6px;color:#D97706;border-color:#D97706;display:block;width:100%" data-sid="'+y.standId+'" data-vid="'+y.vinoId+'" data-nom="'+encodeURIComponent(y.vinoNombre||y.vinoId)+'" onclick="window._agregarDegustation(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">Degust.</button></td></tr>'}).join("")}
          </tbody>
        </table>
      </div>`}window._agregarStock=async(I,m,f)=>{const y=parseInt(prompt("Agregar stock para "+f+`
¿Cuántas botellas agregar?`));!y||y<=0||(await Xi(I,m,y),S())},window._agregarDegustation=async(I,m,f)=>{const y=parseInt(prompt("Registrar degustación para "+f+`
¿Cuántas botellas se abrieron?`));!y||y<=0||(await hd(I,m,y),S())};function P(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">🔗 Links útiles</p>
        ${[["Registro público (para compartir con invitados)","/registro"],["Panel de caja","/caja"],["Control de puerta","/puerta"],["Logística / envíos","/logistica"]].map(([I,m])=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span>${I}</span>
            <div style="display:flex;gap:4px">
              <a href="${m}" target="_blank" class="btn" style="padding:3px 8px;font-size:11px;color:#6B1C1C;border-color:#6B1C1C">Abrir</a>
              <button onclick="navigator.clipboard.writeText(window.location.origin+'${m}').then(()=>this.textContent='✓').catch(()=>{})" class="btn" style="padding:3px 8px;font-size:11px">Copiar</button>
            </div>
          </div>`).join("")}
      </div>
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">👨‍👩‍👧 Links de familia</p>
        <p style="font-size:12px;color:#666;margin-bottom:10px">Generá un link seguro para que cada familia vea sus invitados.</p>
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <select id="familia-apellido" style="flex:1;padding:8px;border:1px solid #ccc;border-radius:6px;font-size:14px">
            <option value="">— Seleccioná una familia —</option>
            <option>Asti Vera</option>
            <option>Bartra Gambini</option>
            <option>Cambiano</option>
            <option>Camoranesi</option>
            <option>Cutri Speranza</option>
            <option>Czaja</option>
            <option>D'Alessandro</option>
            <option>D'Antonio Faraone</option>
            <option>Garay</option>
            <option>Grosskopf Morales</option>
            <option>Pannunzio</option>
            <option>Ponzo</option>
            <option>Porto</option>
            <option>Sabbatini</option>
            <option>Stamadianos Ortiz</option>
            <option>Torres Novoa</option>
            <option>Yanson</option>
          </select>
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
      </div>`}function D(I,m){const f=window.location.origin+"/familia/"+encodeURIComponent(I.toLowerCase())+"?key="+m,y=document.getElementById("familia-result");y.innerHTML='<div style="margin-top:6px;padding:8px;background:#f0f4f8;border-radius:6px;word-break:break-all"><div style="font-size:11px;color:#888;margin-bottom:4px">Link para familia '+I+':</div><a href="'+f+'" target="_blank" style="color:#1A3A5C;font-size:12px">'+f+`</a><button onclick="navigator.clipboard.writeText(this.dataset.link).then(()=>this.textContent='Copiado!')" data-link="`+f+'" style="display:block;margin-top:8px;padding:6px 12px;border-radius:6px;border:1px solid #1A3A5C;background:#fff;color:#1A3A5C;font-size:12px;cursor:pointer;width:100%">Copiar link</button><button onclick="window._regenerarLinkFamilia()" style="display:block;margin-top:4px;padding:6px 12px;border-radius:6px;border:1px solid #C0392B;background:#fff;color:#C0392B;font-size:12px;cursor:pointer;width:100%">Regenerar link (invalida el anterior)</button></div>'}window._generarLinkFamilia=async()=>{const I=document.getElementById("familia-apellido").value.trim(),m=document.getElementById("familia-result");if(!I){m.innerHTML='<span style="color:#C0392B">Ingresá un apellido</span>';return}m.innerHTML='<span style="color:#888">Buscando...</span>';try{const f=await yd(I);if(f)D(I,f);else{const y=Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,10);await xr(I,y),D(I,y)}}catch(f){m.innerHTML='<span style="color:#C0392B">Error: '+f.message+"</span>"}},window._regenerarLinkFamilia=async()=>{const I=document.getElementById("familia-apellido").value.trim(),m=document.getElementById("familia-result");if(confirm("¿Seguro? El link anterior dejará de funcionar.")){m.innerHTML='<span style="color:#888">Regenerando...</span>';try{const f=Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,10);await xr(I,f),D(I,f)}catch(f){m.innerHTML='<span style="color:#C0392B">Error: '+f.message+"</span>"}}},window._cambiarPin=()=>{const I=document.getElementById("nuevo-pin").value.trim(),m=document.getElementById("pin-msg");if(!/^\d{4}$/.test(I)){m.innerHTML='<span style="color:#C0392B">El PIN debe tener exactamente 4 digitos</span>';return}localStorage.setItem("sucovi-admin-pin",I),sessionStorage.setItem("admin-pin",I),m.innerHTML='<span style="color:#3B6D11">PIN actualizado correctamente</span>',document.getElementById("nuevo-pin").value=""},window._limpiar=async()=>{if(!confirm(`⚠️ ¿Seguro? Esto borra TODOS los invitados y pedidos.
Esta acción no se puede deshacer.`)||!confirm("Segunda confirmación: ¿borrar todos los datos de prueba?"))return;const I=document.getElementById("limpiar-msg");I.innerHTML='<span style="color:#888">Borrando...</span>';try{await ud(),I.innerHTML='<span style="color:#3B6D11">✓ Datos borrados correctamente</span>'}catch(m){I.innerHTML=`<span style="color:#A32D2D">Error: ${m.message}</span>`}},window._abrirWA=I=>{const m=i.find(b=>b.fireId===I);if(!m)return;d=I,document.getElementById("mw-tit").textContent=m.nombre+" "+m.apellido,document.getElementById("mw-cod").textContent=m.codigo||"",document.getElementById("mw-bdg").innerHTML=yl(m.estado);const f=window.location.origin,y=`${f}/acceso?inv=${m.token}`;document.getElementById("mw-link").textContent=y;const E=m.estado==="ingresado"?`Hola ${m.nombre}! 🍷

Ya estás dentro de SUCOVI 2027 — ¡disfrutá la noche!

Si necesitás tu QR para los stands:
👉 ${y}

_Personal e intransferible._`:m.estado==="pagado"?`Hola ${m.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${y}

_Personal e intransferible. Un solo uso en la entrada._`:`Hola ${m.nombre}! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`;document.getElementById("mw-msg").textContent=E;const _=document.getElementById("mw-btn-p"),A=document.getElementById("mw-badge-estado");m.estado==="pendiente"?(_.textContent="✓ Marcar como pagado",_.disabled=!1,_.style.display="block",_.style.background="#D97706",_.style.borderColor="#D97706",A&&(A.textContent="⏳ Pendiente",A.style.background="#FEF3C7",A.style.color="#92400E")):m.estado==="ingresado"?(_.style.display="none",A&&(A.textContent="✅ Ingresó al evento",A.style.background="#D1FAE5",A.style.color="#065F46")):(_.style.display="none",A&&(A.textContent="✅ Bono confirmado",A.style.background="#D1FAE5",A.style.color="#065F46")),fl("mw-canvas",m.codigo||m.fireId,80),document.getElementById("modal-wa").style.display="flex"},window._descargarQR=async I=>{const m=i.find(_t=>_t.fireId===I);if(!m)return;window.qrcode||await new Promise((_t,Et)=>{const Yt=document.createElement("script");Yt.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",Yt.onload=_t,Yt.onerror=Et,document.head.appendChild(Yt)});const y=window.location.origin+"/acceso?inv="+m.token,E=document.createElement("canvas"),_=600,A=800;E.width=_,E.height=A;const b=E.getContext("2d"),Y=b.createLinearGradient(0,0,0,A);Y.addColorStop(0,"#1A3A5C"),Y.addColorStop(.55,"#2C5F8A"),Y.addColorStop(1,"#3A7D44"),b.fillStyle=Y,b.fillRect(0,0,_,A),b.fillStyle="#C9A96E",b.fillRect(0,A-4,_,4),b.fillStyle="rgba(255,255,255,0.7)",b.font="500 18px system-ui, -apple-system, sans-serif",b.textAlign="center",b.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",_/2,54),b.fillStyle="#ffffff",b.font="500 38px system-ui, -apple-system, sans-serif",b.fillText(m.nombre+" "+m.apellido,_/2,110),b.fillStyle="rgba(255,255,255,0.75)",b.font="400 22px system-ui, -apple-system, sans-serif",b.fillText(m.codigo,_/2,146),b.fillStyle="#3A7D44";const $=200,At=34,Lt=_/2-$/2,Bt=164;C(b,Lt,Bt,$,At,17),b.fill(),b.fillStyle="#ffffff",b.font="500 15px system-ui, -apple-system, sans-serif",b.fillText("✅ Bono confirmado",_/2,Bt+23);const jt=320,qt=340,se=_/2-jt/2,lt=220;b.fillStyle="#ffffff",C(b,se,lt,jt,qt,16),b.fill();const nt=qrcode(0,"M");nt.addData(y),nt.make();const gn=nt.getModuleCount(),ae=240,bo=se+(jt-ae)/2,je=lt+24,qe=ae/gn;b.fillStyle="#000000";for(let _t=0;_t<gn;_t++)for(let Et=0;Et<gn;Et++)nt.isDark(_t,Et)&&b.fillRect(bo+Et*qe,je+_t*qe,qe,qe);b.fillStyle="#1A3A5C",b.font="500 26px system-ui, -apple-system, sans-serif",b.fillText(m.codigo,_/2,lt+qt-44),b.fillStyle="#888",b.font="400 14px system-ui, -apple-system, sans-serif",b.fillText("Mostrá este QR en la entrada",_/2,lt+qt-20),b.fillStyle="rgba(255,255,255,0.85)",b.font="400 18px system-ui, -apple-system, sans-serif",b.fillText("Sáb 20 jun 2026  ·  19:30 hs",_/2,lt+qt+50),b.fillText("Roma 656, Olivos",_/2,lt+qt+80),b.fillStyle="rgba(255,255,255,0.5)",b.font="400 13px system-ui, -apple-system, sans-serif",b.fillText("Personal e intransferible · Un solo uso en la entrada",_/2,A-24),await new Promise(_t=>{const Et=new Image;Et.onload=()=>{const Ee=_-70-20,Ie=A-70-20;b.save(),b.beginPath(),b.arc(Ee+70/2,Ie+70/2,70/2+3,0,Math.PI*2),b.fillStyle="rgba(255,255,255,0.25)",b.fill(),b.beginPath(),b.arc(Ee+70/2,Ie+70/2,70/2,0,Math.PI*2),b.clip(),b.drawImage(Et,Ee,Ie,70,70),b.restore(),_t()},Et.onerror=_t,Et.src=gs});const yn=document.createElement("a");yn.download="QR-"+m.codigo+".png",yn.href=E.toDataURL("image/png"),yn.click()};function C(I,m,f,y,E,_){I.beginPath(),I.moveTo(m+_,f),I.lineTo(m+y-_,f),I.quadraticCurveTo(m+y,f,m+y,f+_),I.lineTo(m+y,f+E-_),I.quadraticCurveTo(m+y,f+E,m+y-_,f+E),I.lineTo(m+_,f+E),I.quadraticCurveTo(m,f+E,m,f+E-_),I.lineTo(m,f+_),I.quadraticCurveTo(m,f,m+_,f),I.closePath()}let B=null;window._editarInv=I=>{const m=i.find(f=>f.fireId===I);m&&(B=I,document.getElementById("edit-nom").value=m.nombre||"",document.getElementById("edit-ape").value=m.apellido||"",document.getElementById("edit-tel").value=m.tel||"",document.getElementById("edit-email").value=m.email||"",document.getElementById("edit-familia").value=m.familia||"",document.getElementById("edit-comentarios").value=m.comentarios||"",document.getElementById("edit-estado").value=m.estado||"pendiente",document.getElementById("edit-msg").innerHTML="",document.getElementById("modal-edit").style.display="flex")},window._guardarEdit=async()=>{const I=document.getElementById("edit-msg"),m=document.getElementById("edit-nom").value.trim(),f=document.getElementById("edit-ape").value.trim(),y=document.getElementById("edit-tel").value.trim();if(!m||!f||!y){I.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}I.innerHTML='<span style="color:#888">Guardando...</span>';const E={nombre:m,apellido:f,tel:y,estado:document.getElementById("edit-estado").value,...document.getElementById("edit-email").value.trim()&&{email:document.getElementById("edit-email").value.trim()},...document.getElementById("edit-familia").value.trim()&&{familia:document.getElementById("edit-familia").value.trim()},...document.getElementById("edit-comentarios").value.trim()&&{comentarios:document.getElementById("edit-comentarios").value.trim()}};try{await fe(B,E),I.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEdit(),1200)}catch(_){I.innerHTML=`<span style="color:#C0392B">Error: ${_.message}</span>`}},window._cerrarEdit=()=>{document.getElementById("modal-edit").style.display="none",B=null},window._pagarM=async()=>{const I=i.find(A=>A.fireId===d);if(!I||I.estado!=="pendiente")return;const m=document.getElementById("mw-btn-p");m&&(m.disabled=!0,m.textContent="✓ Pagado",m.style.background="#3A7D44",m.style.borderColor="#3A7D44");const f=document.getElementById("mw-badge-estado");f&&(f.textContent="✅ Bono pagado",f.style.background="#D1FAE5",f.style.color="#065F46");const y=`${window.location.origin}/acceso?inv=${I.token}`,E=`Hola ${I.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${y}

_Personal e intransferible. Un solo uso en la entrada._`,_=document.getElementById("mw-msg");_&&(_.textContent=E),await fe(I.fireId,{estado:"pagado"})},window._envWA=()=>{const I=document.getElementById("mw-msg").textContent,m=i.find(y=>y.fireId===d),f=((m==null?void 0:m.tel)||"").replace(/\D/g,"");f?window.open("https://wa.me/"+f+"?text="+encodeURIComponent(I),"_blank"):alert("Sin teléfono cargado")},window._copWA=()=>{var f;(f=navigator.clipboard)==null||f.writeText(document.getElementById("mw-msg").textContent).catch(()=>{});const I=document.querySelector("#modal-wa .btn-g"),m=I.innerHTML;I.innerHTML="✓ ¡Copiado!",setTimeout(()=>I.innerHTML=m,2e3)},window._cModal=()=>{document.getElementById("modal-wa").style.display="none",d=null},h()}const ue=n=>Number(n).toLocaleString("es-AR");async function Hm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Um(n){Gt();let t=[],e=[],i="cobrar",o=null,s=[],a=null,l=!1;n.innerHTML=Nt({title:"💰 Caja central",sub:"Sucovi 2027 · Roma 656, Olivos",backHref:"/admin"})+`
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
    </div>`,go(S=>{t=S,i==="cobrar"&&!o&&v()}),yo(S=>{e=S,i!=="cobrar"&&d()}),window._cajaVista=(S,P)=>{i=S,o=null,document.querySelectorAll(".nav button").forEach(D=>D.classList.remove("on")),P.classList.add("on"),d()};function d(){i==="cobrar"&&p(),i==="pedidos"&&T()}let h={};async function v(){const S=t.filter(D=>D.estado==="ingresado"),P=await Promise.all(S.map(async D=>{try{const B=(await br(D.fireId)).filter(f=>{var y;return(y=f.items)==null?void 0:y.length});if(!B.length)return null;const I=B.reduce((f,y)=>f+(y.items||[]).reduce((E,_)=>E+(_.sub||0),0),0),m=B.reduce((f,y)=>f+(y.items||[]).length,0);return{fireId:D.fireId,total:I,cant:m,stands:B.length}}catch{return null}}));h={},P.filter(Boolean).forEach(D=>{h[D.fireId]=D}),g()}function p(){const S=document.getElementById("caja-content");if(o){x();return}S.innerHTML=`
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <input id="buscar-caja" placeholder="Buscar por nombre o código..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda">
        <p style="font-size:12px;color:#888;margin-bottom:8px">Cargando carritos activos...</p>
      </div>`,t.length&&v()}function g(){var C;const S=document.getElementById("resultados-busqueda");if(!S)return;const P=(((C=document.getElementById("buscar-caja"))==null?void 0:C.value)||"").toLowerCase().trim();let D=t.filter(B=>B.estado!=="invalidado");if(P?D=D.filter(B=>(B.codigo||"").toLowerCase().includes(P)||(B.nombre+" "+B.apellido).toLowerCase().includes(P)):D=D.filter(B=>h[B.fireId]),!D.length){S.innerHTML=P?'<div class="empty">Sin resultados</div>':'<div class="empty" style="padding:24px">Sin carritos activos — nadie ha agregado vinos todavía 🍷</div>';return}S.innerHTML=(P?"":`<p style="font-size:11px;color:#888;margin-bottom:8px;font-weight:500">CARRITOS ACTIVOS (${D.length})</p>`)+D.map(B=>{const I=h[B.fireId];return`
        <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
          align-items:center;gap:10px" onclick="window._seleccionarInv('${B.fireId}')">
          <div class="avatar">${B.nombre[0]}${B.apellido[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${B.nombre} ${B.apellido}</div>
            <div style="font-size:12px;color:#888">${B.codigo} · ${B.tel}</div>
            ${I?`<div style="font-size:12px;color:#3A7D44;font-weight:500;margin-top:2px">
              🍷 ${I.cant} ítem${I.cant>1?"s":""} · $${Number(I.total).toLocaleString("es-AR")}
              <span style="color:#888;font-weight:400"> · ${I.stands} stand${I.stands>1?"s":""}</span>
            </div>`:'<div style="font-size:11px;color:#aaa;margin-top:2px">Carrito vacío</div>'}
          </div>
          <span class="badge ${B.estado==="pagado"||B.estado==="ingresado"?"b-pago":"b-pend"}">
            ${B.estado==="pagado"||B.estado==="ingresado"?"Bono pagado":"Pendiente"}
          </span>
          <span style="color:#1A3A5C;font-size:18px">›</span>
        </div>`}).join("")}window._buscarInv=(S=!1)=>{var C;const P=(((C=document.getElementById("buscar-caja"))==null?void 0:C.value)||"").toLowerCase().trim();if(!P){g();return}const D=t.filter(B=>B.estado!=="invalidado"&&((B.codigo||"").toLowerCase().includes(P)||(B.nombre+" "+B.apellido).toLowerCase().includes(P)));if(S&&D.length===1){window._seleccionarInv(D[0].fireId);return}g()},window._seleccionarInv=async S=>{o=t.find(P=>P.fireId===S),o&&(s=await br(S),x())};async function x(){const S=document.getElementById("caja-content");if(!S)return;const P=o,D=s.filter(I=>{var m;return(m=I.items)==null?void 0:m.length}),C=D.reduce((I,m)=>I+(m.items||[]).reduce((f,y)=>f+(y.sub||0),0),0),B=e.filter(I=>I.invFireId===P.fireId);S.innerHTML=`
      <button class="btn" onclick="window._volverCobrar()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Buscar otro</button>
      <div class="card" style="margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div class="avatar" style="width:44px;height:44px;font-size:15px">
            ${P.nombre[0]}${P.apellido[0]}
          </div>
          <div>
            <div style="font-size:16px;font-weight:500">${P.nombre} ${P.apellido}</div>
            <div style="font-size:12px;color:#888">${P.codigo}${P.tel?" · "+P.tel:""}</div>
          </div>
        </div>
        ${B.length?`<div style="background:#D1FAE5;border-radius:6px;padding:6px 10px;
          font-size:12px;color:#065F46">
          ✅ Ya tiene ${B.length} pedido${B.length>1?"s":""} pagado${B.length>1?"s":""} esta noche
        </div>`:""}
      </div>

      ${D.length?`
        ${D.map(I=>`
          <div class="card" style="margin-bottom:10px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">
              🍷 ${I.standNombre} · Stand #${I.standId}
              ${I.retiro==="envio"?'<span class="badge b-envi" style="margin-left:6px">🚚 Envío</span>':""}
            </div>
            ${(I.items||[]).map(m=>`
              <div style="display:flex;justify-content:space-between;font-size:13px;
                color:#555;padding:4px 0;border-bottom:.5px solid #f5f0eb">
                <span>${m.desc}</span><strong>$${ue(m.sub)}</strong>
              </div>`).join("")}
            <div style="display:flex;justify-content:space-between;font-size:13px;
              font-weight:500;margin-top:8px;padding-top:6px;border-top:.5px solid #D6E4F0">
              <span>Subtotal</span>
              <span>$${ue((I.items||[]).reduce((m,f)=>m+(f.sub||0),0))}</span>
            </div>
          </div>`).join("")}
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL</span><span style="color:#1A3A5C">$${ue(C)}</span>
          </div>
          <p style="font-size:12px;color:#888;margin-top:4px">
            ${D.length} stand${D.length>1?"s":""}
          </p>
        </div>
        <div id="cobro-msg" style="font-size:12px;text-align:center;margin-bottom:8px"></div>
        <button class="btn btn-g" style="width:100%;padding:14px;font-size:16px;margin-bottom:8px"
          onclick="window._cobrar()">
          ✓ Cobrar $${ue(C)} y generar vouchers
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
            ${P.nombre} todavía no agregó vinos desde los stands.
          </p>
        </div>`}
    `}window._imprimirVouchers=()=>{const{inv:S,items:P}=window._lastCobrado||{};if(!S||!P)return;const D=B=>Number(B).toLocaleString("es-AR"),C=window.open("","_blank");C.document.write(`<!DOCTYPE html><html><head>
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
    ${window._lastPedidosIds?window._lastPedidosIds.map((B,I)=>{const m=P[I];return m?`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${m.standId}</div>
              <div class="voc-num">${window._lastPedidosIds&&P[I]?"VOC-"+String((window._lastVoucherNums||[])[I]||0).padStart(3,"0"):"VOC-000"}</div>
              <div class="stand">${m.standNombre}</div>
              <div class="inv">${S.nombre} ${S.apellido} · ${S.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(m.items||[]).map(f=>`
            <div class="item"><span>${f.desc}</span><strong>$${D(f.sub)}</strong></div>
          `).join("")}
          <div class="total">
            <span>Total</span>
            <span>$${D((m.items||[]).reduce((f,y)=>f+(y.sub||0),0))}</span>
          </div>
        </div>
        <div class="qr-box">
          <canvas id="qr-${I}"></canvas>
          <div class="qr-hint">Escaneá en el stand</div>
        </div>
      </div>`:""}).join(""):P.map(B=>`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${B.standId}</div>
              <div class="voc-num">${window._lastPedidosIds&&P[idx]?"VOC-"+String((window._lastVoucherNums||[])[idx]||0).padStart(3,"0"):"VOC-000"}</div>
              <div class="stand">${B.standNombre}</div>
              <div class="inv">${S.nombre} ${S.apellido} · ${S.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(B.items||[]).map(I=>`
            <div class="item"><span>${I.desc}</span><strong>$${D(I.sub)}</strong></div>
          `).join("")}
          <div class="total"><span>Total</span><span>$${D((B.items||[]).reduce((I,m)=>I+(m.sub||0),0))}</span></div>
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
    </body></html>`),C.document.close()},window._enviarVouchersWA=()=>{var y;const{inv:S,items:P}=window._lastCobrado||{};if(!S||!P)return;const D=E=>Number(E).toLocaleString("es-AR"),C=P.map(E=>{const _=(E.items||[]).reduce((b,Y)=>b+(Y.sub||0),0),A=(E.items||[]).map(b=>`  • ${b.desc}: $${D(b.sub)}`).join(`
`);return`🍷 *${E.standNombre}* (Stand #${E.standId})
${A}
  Total: $${D(_)}`}).join(`

`),B=P.reduce((E,_)=>E+(_.items||[]).reduce((A,b)=>A+(b.sub||0),0),0),I=`Hola ${S.nombre}! 🍷

Aquí están tus vouchers de SUCOVI 2027:

${C}

💰 *Total pagado: $${D(B)}*

Presentá cada voucher en el stand correspondiente para retirar tus vinos. 

_Sáb 20 jun 2026 · Roma 656, Olivos_`,f="https://wa.me/54"+((y=S.tel)==null?void 0:y.replace(/\D/g,""))+"?text="+encodeURIComponent(I);window.open(f,"_blank")},window._cancelarCarrito=async()=>{if(confirm("¿Cancelar y vaciar el carrito de "+o.nombre+"?")){for(const S of s)for(const P of S.items||[])P.vinoId&&await ms(S.standId,P.vinoId,P.qty||1).catch(()=>{});await wr(o.fireId),o=null,s=[],p()}},window._volverCobrar=()=>{o=null,s=[],p()},window._cobrar=async()=>{const S=o,P=s.filter(B=>{var I;return(I=B.items)==null?void 0:I.length});if(!P.length)return;const D=document.querySelector("#caja-content .btn-g");D&&(D.disabled=!0,D.textContent="Procesando...");const C=document.getElementById("cobro-msg");try{await td(S,P);for(const m of P)for(const f of m.items||[])f.vinoId&&await fd(m.standId,f.vinoId,f.qty||1).catch(()=>{});await wr(S.fireId),C.innerHTML=`<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${P.length} voucher${P.length>1?"s":""} generado${P.length>1?"s":""}.
      </span>`,D&&(D.style.display="none");const B=document.getElementById("voucher-actions");B&&(B.style.display="flex"),window._lastCobrado={inv:S,items:P};const{escucharPedidosPorInvitado:I}=await an(async()=>{const{escucharPedidosPorInvitado:m}=await Promise.resolve().then(()=>Jn);return{escucharPedidosPorInvitado:m}},void 0);I(S.fireId,m=>{const f=m.filter(y=>P.some(E=>E.standId===y.standId));window._lastPedidosIds=f.map(y=>y.fireId),window._lastVoucherNums=f.map(y=>y.voucherNum||0),console.log("voucherNums:",window._lastVoucherNums)})}catch(B){C.innerHTML=`<span style="color:#C0392B">Error: ${B.message}</span>`,D&&(D.disabled=!1,D.textContent="Reintentar")}};function T(){const S=document.getElementById("caja-content"),P=e.filter(B=>B.retiro!=="envio"),D={pagado:"b-pago",listo:"b-list",entregado:"b-entr"};if(!P.length){S.innerHTML='<div class="empty">Sin pedidos aún</div>';return}const C={};P.forEach(B=>{C[B.invFireId]||(C[B.invFireId]={nombre:B.invNombre,codigo:B.invCodigo||"",peds:[]}),C[B.invFireId].peds.push(B)}),S.innerHTML=Object.entries(C).map(([B,I])=>{var f;const m=I.peds.reduce((y,E)=>y+(E.total||0),0);return`
      <div class="card" style="margin-bottom:10px;cursor:pointer" onclick="window._verDetallePedido('${B}')">
        <div style="display:flex;align-items:center;gap:8px">
          <div class="avatar" style="width:36px;height:36px;font-size:12px;flex-shrink:0">
            ${(I.nombre||"??")[0]}${((f=(I.nombre||"??").split(" ")[1])==null?void 0:f[0])||""}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${I.nombre||""}</div>
            <div style="font-size:11px;color:#888">${I.peds.length} stand${I.peds.length>1?"s":""} · ${I.peds.map(y=>'<span class="badge '+D[y.estado]+'" style="font-size:10px">'+y.standNombre+"</span>").join(" ")}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:15px;font-weight:500">$${ue(m)}</div>
            <div style="font-size:11px;color:#5BA4CF">Ver detalle ›</div>
          </div>
        </div>
      </div>`}).join("")}window._verDetallePedido=S=>{var E,_;const P=document.getElementById("caja-content"),D=e.filter(A=>A.invFireId===S),C=t.find(A=>A.fireId===S)||{nombre:((E=D[0])==null?void 0:E.invNombre)||"",apellido:"",codigo:((_=D[0])==null?void 0:_.invCodigo)||"",tel:""},B=D.filter(A=>A.estado!=="reembolsado"&&A.estado!=="cancelado").map(A=>({standId:A.standId,standNombre:A.standNombre,retiro:A.retiro,items:A.items||[],fireId:A.fireId})),I=D.filter(A=>A.estado!=="reembolsado"&&A.estado!=="cancelado").reduce((A,b)=>A+(b.total||0),0);window._lastCobrado={inv:C,items:B},window._lastPedidosIds=D.filter(A=>A.estado==="pagado").map(A=>A.fireId),window._lastVoucherNums=D.filter(A=>A.estado==="pagado").map(A=>A.voucherNum||0);const m={pagado:"#5BA4CF",entregado:"#3A7D44",reembolsado:"#C0392B",cancelado:"#C0392B",listo:"#D97706"},f={pagado:"b-pago",listo:"b-list",entregado:"b-entr",reembolsado:"b-canc",cancelado:"b-canc"},y={pagado:"💳 Pagado",listo:"✅ Listo",entregado:"📦 Entregado",reembolsado:"↩️ Reembolsado",cancelado:"❌ Cancelado"};P.innerHTML=`
      <button class="btn" onclick="window._cajaVista('pedidos', document.querySelector('.nav button:nth-child(2)'))"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>
      <div class="card" style="margin-bottom:12px">
        <div style="font-size:16px;font-weight:500">${C.nombre} ${C.apellido}</div>
        <div style="font-size:12px;color:#888">${C.codigo}${C.tel?" · "+C.tel:""}</div>
      </div>
      ${D.map(A=>`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${m[A.estado]||"#5BA4CF"};
          ${A.estado==="reembolsado"||A.estado==="cancelado"?"opacity:.7":""}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C">🍷 ${A.standNombre}</div>
            <span class="badge ${f[A.estado]||"b-pago"}">${y[A.estado]||A.estado}</span>
          </div>
          ${(A.items||[]).map(b=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555;
              ${A.estado==="reembolsado"||A.estado==="cancelado"?"text-decoration:line-through":""}">
              <span>${b.desc}</span><strong>$${ue(b.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Subtotal</span>
            <span ${A.estado==="reembolsado"||A.estado==="cancelado"?'style="text-decoration:line-through;color:#C0392B"':""}>
              $${ue(A.total||0)}
            </span>
          </div>
          ${A.estado==="pagado"?`
            <button class="btn" style="margin-top:10px;width:100%;padding:7px;font-size:12px;
              color:#C0392B;border-color:#C0392B"
              onclick="window._reembolsarUnPedido('${A.fireId}','${S}')">
              ↩️ Reembolsar este stand
            </button>`:""}
          ${A.estado==="reembolsado"?`
            <div style="font-size:11px;color:#C0392B;margin-top:6px">
              Reembolsado el ${A.reembolsadoAt?new Date(A.reembolsadoAt).toLocaleString("es-AR"):""}
            </div>`:""}
        </div>`).join("")}
      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>TOTAL COBRADO</span><span style="color:#1A3A5C">$${ue(I)}</span>
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
      </div>`},window._reembolsarUnPedido=async(S,P)=>{confirm("¿Reembolsar este pedido? El stand no podrá marcarlo como entregado.")&&(await id(S),window._verDetallePedido(P))},window._descargarVoucherPDF=async()=>{const{inv:S,items:P}=window._lastCobrado||{};if(!S||!P)return;window.jspdf||await new Promise((f,y)=>{const E=document.createElement("script");E.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",E.onload=f,E.onerror=y,document.head.appendChild(E)}),window.qrcode||await new Promise((f,y)=>{const E=document.createElement("script");E.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",E.onload=f,E.onerror=y,document.head.appendChild(E)});const{jsPDF:D}=window.jspdf,C=new D({unit:"mm",format:"a4"}),B=window._lastPedidosIds||[];let I=15;const m=(f,y,E,_)=>{const A=(f.items||[]).length,b=Math.max(90,62+A*7);C.setDrawColor(26,58,92),C.setLineWidth(.5),C.roundedRect(10,_,190,b,3,3,"S"),C.setFillColor(26,58,92),C.roundedRect(10,_,190,16,3,3,"F"),C.rect(10,_+10,190,6,"F"),C.setTextColor(180,180,180),C.setFontSize(7),C.setFont("helvetica","normal"),C.text("SUCOVI 2027  .  VOUCHER DE RETIRO",15,_+7),C.text("Stand #"+f.standId,195,_+7,{align:"right"});const Y=E?"VOC-"+String(E).padStart(3,"0"):"VOC-000";C.setTextColor(255,255,255),C.setFontSize(18),C.setFont("helvetica","bold"),C.text(Y,15,_+14),C.setFillColor(58,125,68),C.roundedRect(158,_+9,38,8,2,2,"F"),C.setTextColor(255,255,255),C.setFontSize(8),C.setFont("helvetica","bold"),C.text("V PAGADO",177,_+14.5,{align:"center"}),C.setTextColor(26,58,92),C.setFontSize(14),C.setFont("helvetica","bold"),C.text(f.standNombre,15,_+26),C.setFontSize(9),C.setFont("helvetica","normal"),C.setTextColor(100,100,100),C.text((S.nombre||"")+" "+(S.apellido||"")+"  .  "+(S.codigo||""),15,_+33),C.setDrawColor(220,220,220),C.setLineWidth(.3),C.line(15,_+37,195,_+37);let $=_+44;if((f.items||[]).forEach(At=>{C.setFontSize(10),C.setFont("helvetica","normal"),C.setTextColor(50,50,50),C.text(At.desc,15,$),C.setFont("helvetica","bold"),C.setTextColor(30,30,30),C.text("$"+Number(At.sub).toLocaleString("es-AR"),145,$,{align:"right"}),C.setFont("helvetica","normal"),$+=7}),C.setDrawColor(180,180,180),C.setLineWidth(.3),C.line(15,$,145,$),$+=6,C.setFontSize(12),C.setFont("helvetica","bold"),C.setTextColor(26,58,92),C.text("Total",15,$),C.text("$"+Number((f.items||[]).reduce((At,Lt)=>At+(Lt.sub||0),0)).toLocaleString("es-AR"),145,$,{align:"right"}),y&&window.qrcode)try{const At=window.qrcode(0,"M");At.addData(y),At.make();const Lt=At.getModuleCount(),Bt=32,jt=Bt/Lt,qt=158,se=_+38;C.setFillColor(255,255,255),C.rect(qt-1,se-1,Bt+2,Bt+2,"F"),C.setFillColor(0,0,0);for(let lt=0;lt<Lt;lt++)for(let nt=0;nt<Lt;nt++)At.isDark(lt,nt)&&C.rect(qt+nt*jt,se+lt*jt,jt,jt,"F");C.setFontSize(6),C.setFont("helvetica","normal"),C.setTextColor(120,120,120),C.text("Escaneá en el stand",qt+Bt/2,se+Bt+4,{align:"center"})}catch{}return _+b+8};P.forEach((f,y)=>{y>0&&I>130&&(C.addPage(),I=15),I=m(f,B[y],(window._lastVoucherNums||[])[y],I)}),C.save("Voucher_"+(S.nombre||"").replace(/ /g,"_")+"_SUCOVI2027.pdf")},window._abrirScanner=async()=>{document.getElementById("scan-overlay").style.display="flex";const S=document.getElementById("scan-status");S&&(S.textContent="Cargando escáner...");try{await Hm(),a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const P=document.getElementById("scan-video");P.srcObject=a,l=!0,S&&(S.textContent="Buscando QR...");const D=document.createElement("canvas"),C=D.getContext("2d",{willReadFrequently:!0}),B=()=>{if(l){if(P.readyState===P.HAVE_ENOUGH_DATA&&P.videoWidth>0){D.width=P.videoWidth,D.height=P.videoHeight,C.drawImage(P,0,0);const I=C.getImageData(0,0,D.width,D.height),m=window.jsQR(I.data,I.width,I.height,{inversionAttempts:"dontInvert"});if(m&&m.data){const f=m.data;window._cerrarScanner();const y=f.match(/INV-\d+/),E=f.match(/inv=([A-Z0-9]+)/i);if(y){const _=document.getElementById("buscar-caja");_&&(_.value=y[0],window._buscarInv(!0))}else E&&an(async()=>{const{buscarInvitadoPorToken:_}=await Promise.resolve().then(()=>Jn);return{buscarInvitadoPorToken:_}},void 0).then(({buscarInvitadoPorToken:_})=>_(E[1]).then(A=>{A&&window._seleccionarInv(A.fireId)}));return}}l&&requestAnimationFrame(B)}};P.addEventListener("loadeddata",()=>requestAnimationFrame(B))}catch{S&&(S.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}},window._cerrarScanner=()=>{l=!1,a&&(a.getTracks().forEach(P=>P.stop()),a=null);const S=document.getElementById("scan-overlay");S&&(S.style.display="none")},p();const k=document.createElement("button");k.innerHTML="?",k.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",k.onclick=()=>document.getElementById("modal-ayuda-caja").style.display="flex",document.body.appendChild(k);const V=document.createElement("div");V.id="modal-ayuda-caja",V.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",V.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Panel de caja</div><button onclick="document.getElementById(&quot;modal-ayuda-caja&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📷 Escanear código del invitado</div><div>Escaneá el QR o ingresá el código del invitado (ej: INV-0001) para ver su carrito de compras con todos los vinos que seleccionó en los stands.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">💳 Cobrar</div><div>Una vez verificado el carrito, tocá <strong>Cobrar</strong> para registrar el pago. Se genera automáticamente un voucher con número correlativo (VOC-001, VOC-002, etc.).</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">⬇️ Descargar PDF</div><div>Después de cobrar podés descargar el voucher en PDF para entregar al invitado. El voucher incluye el QR para retirar los vinos en cada stand.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">↩️ Reembolsar</div><div>Si un pedido fue cobrado por error, podés reembolsarlo desde la lista de pedidos. El stand no podrá marcarlo como entregado.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ Verificá siempre el total antes de cobrar. El reembolso no devuelve dinero automáticamente.</div></div></div>',V.addEventListener("click",S=>{S.target===V&&(V.style.display="none")}),document.body.appendChild(V)}const Wo=n=>Number(n).toLocaleString("es-AR");function $m(n,t,e){if(Gt(),!e||e.estado==="invalidado"){n.innerHTML=Nt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
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
      </div>`,window._buscarInvStand=async()=>{var V;const p=(((V=document.getElementById("inv-cod-manual"))==null?void 0:V.value)||"").trim(),g=document.getElementById("inv-cod-err");if(!p)return;const x=p.split(".");if(x.length!==2){g.textContent="Formato: INV-0001.Apellido";return}const T=x[0].toUpperCase().trim(),k=x[1].toLowerCase().trim();g.textContent="Buscando...";try{const{buscarInvitadoPorCodigo:S}=await an(async()=>{const{buscarInvitadoPorCodigo:D}=await Promise.resolve().then(()=>Jn);return{buscarInvitadoPorCodigo:D}},void 0),P=await S(T);if(!P){g.textContent="Código no encontrado";return}if(P.estado==="invalidado"){g.textContent="Invitado invalidado";return}if(!P.apellido.toLowerCase().startsWith(k)){g.textContent="Código o apellido incorrecto";return}window.location.href="/stand/"+t.id+"?inv="+P.token}catch(S){g.textContent="Error: "+S.message}};return}if(e.estado==="pendiente"){n.innerHTML=Nt({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">
          Bono pendiente de pago
        </h2>
        <p style="font-size:14px;color:#666;">
          Hola ${e.nombre}, tu bono ($35.000) todavía no fue confirmado.<br>
          Pasá por la entrada para abonar.
        </p>
      </div>`;return}let i=[],o="stand";const s=`/carrito?inv=${e.token}`;n.innerHTML=Nt({title:"🍷 "+t.nombre,sub:t.region+" · Stand #"+t.id,actions:[`<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
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
    </button>`,window._stockDisponible={};let a=window._stockDisponible;vo(p=>{console.log("STOCK DOCS:",p.length,"bodega:",t.id),a={},p.filter(g=>Number(g.standId)===Number(t.id)).forEach(g=>{a[g.vinoId]=Math.max(0,(g.total||0)-(g.degustacion||0)-(g.reservado||0)-(g.pagado||0)-(g.entregado||0))}),i.forEach((g,x)=>{const T=document.getElementById("disp-"+x);if(!T)return;const k=a[g.fireId||g.id];k!==void 0&&(T.textContent="("+k+" disp.)",T.style.color=k===0?"#C0392B":k<=3?"#D97706":"#888")})}),li(t.id,p=>{i=p,d(),setTimeout(()=>{i.forEach((g,x)=>{const T=document.getElementById("disp-"+x);if(!T)return;const k=a[g.fireId||g.id];k!==void 0&&(T.textContent="("+k+" disp.)",T.style.color=k===0?"#C0392B":k<=3?"#D97706":"#888")})},300)});const l={};fs(e.fireId,p=>{var S,P;const g=p.find(D=>Number(D.standId)===t.id);g&&g.items&&g.items.forEach(D=>{if(D.key&&l[D.key]===void 0){l[D.key]=D.qty||0;const[C,B]=D.key.split("_").map(Number),I=document.getElementById("qv"+C+"_"+B);I&&(I.textContent=l[D.key])}});const x=p.reduce((D,C)=>D+(C.items||[]).reduce((B,I)=>B+(I.sub||0),0),0),T=p.reduce((D,C)=>D+(C.items||[]).length,0),k=document.getElementById("cart-fab"),V=document.getElementById("cart-fab-txt");k&&T>0?(k.style.display="flex",V.textContent=`Ver carrito · $${Wo(x)}`):k&&(k.style.display="none"),g&&((S=g.items)!=null&&S.length)?(o=g.retiro||"stand",(P=document.getElementById("rb-stand"))==null||P.classList.toggle("sel",o==="stand"),document.getElementById("retiro-box").style.display="block",document.getElementById("stand-resumen").style.display="block",document.getElementById("stand-resumen-lines").innerHTML=g.items.map(D=>`
          <div style="display:flex;justify-content:space-between;font-size:12px;
            color:#555;margin-bottom:4px">
            <span>${D.desc}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-weight:500">$${Wo(D.sub)}</span>
              <button onclick="window._quitarItem('${D.key}')"
                style="border:none;background:none;color:#A32D2D;cursor:pointer;
                font-size:13px;padding:0 2px">✕</button>
            </div>
          </div>`).join("")):(document.getElementById("stand-resumen").style.display="none",g===null&&(document.getElementById("retiro-box").style.display="none"))});function d(){const p=document.getElementById("menu-lista");if(p){if(!i.length){p.innerHTML='<div class="empty">La carta estará disponible pronto.</div><a href="/acceso?inv='+e.token+'#stands-section" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#1A3A5C;color:#fff;border-radius:8px;padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-top:12px">🛍️ Seguir comprando</a>';return}p.innerHTML=i.map((g,x)=>`
      <div class="vino-card">
        <div style="font-size:17px;font-weight:600;color:#1A3A5C">${g.nombre}</div>
        <div style="font-size:11px;color:#888;margin-top:2px">
          <span style="font-size:14px;color:#555">${g.varietal||""}${g.cosecha?" · "+g.cosecha:""}</span>
        </div>
        ${g.descripcion?`<div style="font-size:13px;color:#666;margin-top:3px">${g.descripcion}</div>`:""}
        ${(g.unidades||[]).map((T,k)=>`
          <div class="qty-row">
            <span class="qty-label">
              ${T.u} — <span style="color:#6B1C1C;font-weight:600">$${Wo(T.p)}</span>
              <span id="disp-${x}" style="font-size:11px;margin-left:6px"></span>
            </span>
            <button class="qty-btn" id="btnm${x}_${k}" onclick="window._agregar(${x},${k},-1)">−</button>
            <span id="qv${x}_${k}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" id="btnp${x}_${k}" onclick="window._agregar(${x},${k},1)">+</button>
          </div>`).join("")}
      </div>`).join("")+'<a href="/acceso?inv='+e.token+'#stands-section" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#1A3A5C;color:#fff;border-radius:8px;padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-top:12px">🛍️ Seguir comprando</a>'}}window._agregar=async(p,g,x)=>{const T=i[p];if(!T)return;const k=(T.unidades||[])[g];if(!k)return;const V=`${p}_${g}`,S=`btn${x>0?"p":"m"}${p}_${g}`,P=document.getElementById(S);if(P&&(P.disabled=!0,P.style.opacity="0.4"),x>0){const C=T.fireId||T.id;if(!await pd(t.id,C,x)){window._showStandMsg("Sin stock disponible","#C0392B"),setTimeout(()=>window._hideStandMsg(),1800),P&&(P.disabled=!1,P.style.opacity="1");return}}l[V]=Math.max(0,(l[V]||0)+x);const D=document.getElementById(`qv${p}_${g}`);if(D&&(D.textContent=l[V]),x<0&&await ms(t.id,T.fireId||T.id,1).catch(()=>{}),l[V]===0)window._showStandMsg("⏳ Guardando...","#5BA4CF"),await Ki(e.fireId,t.id,V),window._showStandMsg("✓ Carrito actualizado","#3B6D11"),P&&(P.disabled=!1,P.style.opacity="1"),setTimeout(()=>window._hideStandMsg(),1500);else{const C={key:V,desc:`${T.nombre} — ${k.u} ×${l[V]}`,sub:k.p*l[V],vinoNombre:T.nombre,vinoId:T.fireId||T.id||T.nombre,unidad:k.u,precio:k.p,qty:l[V]};window._showStandMsg("⏳ Guardando...","#5BA4CF");const B=document.getElementById("add-msg");B.style.cssText="font-size:18px;color:#5BA4CF;text-align:center;padding:8px",await Yc(e.fireId,t.id,t.nombre,C,o);const I=T.fireId||T.id;a[I]!==void 0&&(a[I]=Math.max(0,a[I]-x)),document.getElementById("retiro-box").style.display="block",window._showStandMsg("✓ Carrito actualizado","#3B6D11"),P&&(P.disabled=!1,P.style.opacity="1"),setTimeout(()=>window._hideStandMsg(),1500),B.textContent="",B.style.cssText=""}},window._sRet=async p=>{o=p,document.getElementById("rb-stand").classList.toggle("sel",p==="stand"),await ps(e.fireId,t.id,p)},window._quitarItem=async p=>{await Ki(e.fireId,t.id,p);const[g,x]=p.split("_").map(Number);l[p]=0;const T=document.getElementById(`qv${g}_${x}`);T&&(T.textContent=0)};const h=document.createElement("button");h.innerHTML="?",h.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.25)",h.onclick=()=>document.getElementById("modal-ayuda-stand").style.display="flex",document.body.appendChild(h);const v=document.createElement("div");v.id="modal-ayuda-stand",v.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",v.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Stand — Carta de vinos</div><button onclick="document.getElementById(&quot;modal-ayuda-stand&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🍷 Seleccionar vinos</div><div>Usá los botones <strong>+</strong> y <strong>−</strong> para agregar o quitar unidades de cada vino. El carrito se actualiza automáticamente.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🛒 Ver carrito</div><div>Tocá <strong>Ver carrito</strong> para revisar todo lo que seleccionaste en los distintos stands. Podés seguir agregando vinos de otras bodegas.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🛍️ Seguir comprando</div><div>Tocá <strong>Seguir comprando</strong> para ir a otro stand y seguir eligiendo vinos. Todo se acumula en tu carrito.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">💳 Pagar</div><div>Cuando termines de elegir, dirigite a <strong>Caja</strong> para pagar todo junto. El cajero escanea tu código y ve todo tu pedido.</div></div><div style="background:#EBF4FA;border-radius:8px;padding:10px;font-size:12px;color:#1A3A5C">ℹ️ Las degustaciones están incluidas en tu bono. Solo pagás las botellas o cajas que llevás.</div></div></div>',v.addEventListener("click",p=>{p.target===v&&(v.style.display="none")}),document.body.appendChild(v)}window._abrirScannerStand=async()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="flex");const t=document.getElementById("scan-status-stand");try{window.jsQR||await new Promise((h,v)=>{const p=document.createElement("script");p.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",p.onload=h,p.onerror=v,document.head.appendChild(p)});const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),i=document.getElementById("scan-video-stand");i.srcObject=e,t&&(t.textContent="Buscando QR...");const o=document.createElement("canvas"),s=o.getContext("2d",{willReadFrequently:!0});let a=!0;const l=()=>{a=!1,e.getTracks().forEach(h=>h.stop())},d=()=>{if(a){if(i.readyState===i.HAVE_ENOUGH_DATA&&i.videoWidth>0){o.width=i.videoWidth,o.height=i.videoHeight,s.drawImage(i,0,0);const h=s.getImageData(0,0,o.width,o.height),v=window.jsQR(h.data,h.width,h.height,{inversionAttempts:"dontInvert"});if(v&&v.data){l(),window._cerrarScannerStand();const g=v.data.match(/inv=([A-Z0-9]+)/i),x=window.location.pathname.split("/")[2];g&&x&&(window.location.href="/stand/"+x+"?inv="+g[1]);return}}a&&requestAnimationFrame(d)}};i.addEventListener("loadeddata",()=>requestAnimationFrame(d))}catch{t&&(t.textContent="No se pudo acceder a la camara.")}};window._cerrarScannerStand=()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="none");const t=document.getElementById("scan-video-stand");t&&t.srcObject&&(t.srcObject.getTracks().forEach(e=>e.stop()),t.srcObject=null)};window._showStandMsg=(n,t)=>{const e=document.getElementById("stand-msg-modal"),i=document.getElementById("stand-msg-box");!e||!i||(i.textContent=n,i.style.color=t||"#1A3A5C",e.style.display="flex")};window._hideStandMsg=()=>{const n=document.getElementById("stand-msg-modal");n&&(n.style.display="none")};const ne=n=>Number(n).toLocaleString("es-AR");async function Qm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Go(n,t,e){const i=document.getElementById(e);i&&(i.textContent="Iniciando cámara..."),await Qm();const o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),s=document.getElementById(n);if(!s)return o.getTracks().forEach(p=>p.stop()),null;s.srcObject=o;let a=!0;const l=document.createElement("canvas"),d=l.getContext("2d",{willReadFrequently:!0}),h=()=>{a=!1,o.getTracks().forEach(p=>p.stop())},v=()=>{if(a){if(s.readyState===s.HAVE_ENOUGH_DATA&&s.videoWidth>0){l.width=s.videoWidth,l.height=s.videoHeight,d.drawImage(s,0,0);const p=d.getImageData(0,0,l.width,l.height),g=window.jsQR(p.data,p.width,p.height,{inversionAttempts:"dontInvert"});if(g&&g.data){h(),t(g.data);return}}a&&requestAnimationFrame(v)}};return i&&(i.textContent="Buscando QR..."),s.addEventListener("loadeddata",()=>requestAnimationFrame(v)),h}function Wm(n,t){if(Gt(),!document.getElementById("sp-css")){const p=document.createElement("style");p.id="sp-css",p.textContent=`
      .tab-btn { border:none;border-radius:0;border-bottom:2px solid transparent;
        color:#888;padding:8px 14px;margin-bottom:-2px;background:none;
        font-size:12px;cursor:pointer;font-weight:400 }
      .tab-btn.active { border-bottom-color:#5BA4CF;color:#5BA4CF;font-weight:600 }
      .b-canc { background:#FEE2E2;color:#C0392B;border:1px solid #FCA5A5 }
      .sf-btn { font-size:11px }
      .sf-btn.active { background:#EAF3DE;color:#3B6D11;border-color:#3B6D11 }
    `,document.head.appendChild(p)}let e=[],i="pendientes",o=null,s=null;if(!document.getElementById("stand-header-style")){const p=document.createElement("style");p.id="stand-header-style",p.textContent=".hdr { background: linear-gradient(135deg, #2D6A4F, #3A7D44) !important; } .gold { background: linear-gradient(90deg, #C9A96E, #A8865A, #C9A96E) !important; }",document.head.appendChild(p)}n.innerHTML=Nt({title:`🍷 ${t.nombre}`,sub:`Stand #${t.id} · Sucovi 2027`,actions:[`<button class="btn" onclick="sessionStorage.removeItem('stand-auth-${t.id}');location.reload()"
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
    </div>`,window._setTab=p=>{["pedidos","carta","resumen"].forEach(g=>{var T;(T=document.getElementById("tab-"+g))==null||T.classList.toggle("active",g===p);const x=document.getElementById("tab-content-"+g);x&&(x.style.display=g===p?"block":"none")}),p==="carta"&&d(),p==="resumen"&&h()},window._setSF=(p,g)=>{i=p,["sf-listos","sf-entr","sf-all","sf-log"].forEach(x=>{var T;(T=document.getElementById(x))==null||T.classList.remove("active")}),g.classList.add("active"),a()},ed(t.id,p=>{e=p,a()});function a(){const p=document.getElementById("sp-pedidos");if(!p)return;let g=e;if(i==="pendientes"?g=e.filter(x=>(x.estado==="pagado"||x.estado==="listo")&&x.retiro!=="envio"):i==="entregados"?g=e.filter(x=>x.estado==="entregado"&&x.retiro!=="envio"):g=e.filter(x=>x.retiro!=="envio"),!g.length){const x={pendientes:"Sin pedidos listos 🎉",entregados:"Sin entregas todavía",todos:"Sin pedidos"};p.innerHTML=`<div class="empty">${x[i]||"Sin pedidos"}</div>`;return}p.innerHTML=g.map(x=>{const T=x.estado==="entregado";return`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${T?"#3A7D44":"#5BA4CF"}">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">
            <div>
              <div style="font-size:15px;font-weight:500;color:#1A3A5C">${x.invNombre||"Invitado"}</div>
              ${x.voucherNum?'<div style="font-size:10px;color:#5BA4CF;font-weight:500">VOC-'+String(x.voucherNum).padStart(3,"0")+"</div>":""}
              <div style="font-size:11px;color:#888">${x.invCodigo||""}</div>
            </div>
            <span class="badge ${T?"b-entr":"b-pago"}">${T?"✅ Entregado":"💳 Pagado"}</span>
          </div>
          ${(x.items||[]).map(k=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555">
              <span>${k.desc}</span><strong>$${ne(k.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Total</span><span>$${ne(x.total||0)}</span>
          </div>
          <div style="display:flex;gap:6px;margin-top:10px">
            ${T?"":`
            <button class="btn btn-g" style="flex:1;padding:9px"
              onclick="window._scanearEsteRemito('${x.fireId}')">
              📷 Escanear
            </button>`}
            <button class="btn" style="flex:1;padding:9px"
              onclick="window._imprimirRemito('${x.fireId}', ${T})">
              🖨️ ${T?"Remito entregado":"Imprimir remito"}
            </button>
          </div>
        </div>`}).join("")}window._imprimirRemito=(p,g)=>{const x=e.find(S=>S.fireId===p);if(!x)return;const T=S=>Number(S).toLocaleString("es-AR"),k=x.voucherNum?"VOC-"+String(x.voucherNum).padStart(3,"0"):"VOC-000",V=window.open("","_blank");V.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <title>Remito ${k}</title>
      <script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"><\/script>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: system-ui, sans-serif; padding: 16px; }
        .voucher { border: 2px solid #1A3A5C; border-radius: 10px; padding: 16px; }
        .header { display: flex; justify-content: space-between; margin-bottom: 10px;
          border-bottom: 1px solid #D6E4F0; padding-bottom: 8px; }
        .evento { font-size: 10px; color: #888; letter-spacing: .08em; }
        .voc-num { font-size: 22px; font-weight: 700; color: #1A3A5C; margin-top: 2px; }
        .stand { font-size: 22px; font-weight: 600; color: #1A3A5C; }
        .inv { font-size: 16px; color: #444; }
        .item { display: flex; justify-content: space-between; font-size: 15px;
          padding: 4px 0; border-bottom: .5px solid #eee; }
        .total { display: flex; justify-content: space-between; font-size: 20px;
          font-weight: 600; margin-top: 8px; color: #1A3A5C; }
        .badge { color: #fff; padding: 3px 12px; border-radius: 20px;
          font-size: 11px; display: inline-block; margin-bottom:6px; }
        .badge-pagado { background: #3A7D44; }
        .badge-entregado { background: #1A3A5C; }
        .sello { text-align:center; margin-top:16px; padding:10px;
          border: 3px solid #3A7D44; border-radius: 8px; color: #3A7D44;
          font-size: 22px; font-weight: 700; letter-spacing: .1em; }
        .qr-box { display:flex;flex-direction:column;align-items:center;margin-top:14px;padding-top:12px;border-top:1px solid #D6E4F0; }
        .qr-hint { font-size:12px;color:#888;text-align:center;margin-top:6px }
        @media print { body { padding: 0; } }
      </style>
    </head><body>
      <div class="voucher">
        <div class="header">
          <div>
            <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${t.id}</div>
            <div class="voc-num">${k}</div>
            <div class="stand">${t.nombre}</div>
            <div class="inv">${x.invNombre||""} · ${x.invCodigo||""}</div>
          </div>
          <div style="text-align:right">
            <div class="badge ${g?"badge-entregado":"badge-pagado"}">${g?"✅ ENTREGADO":"✅ PAGADO"}</div>
          </div>
        </div>
        ${(x.items||[]).map(S=>`
          <div class="item"><span>${S.desc}</span><strong>$${T(S.sub)}</strong></div>
        `).join("")}
        <div class="total">
          <span>Total</span>
          <span>$${T(x.total||0)}</span>
        </div>
        ${g?'<div class="sello">✅ ENTREGADO</div>':`
        <div class="qr-box">
          <canvas id="qr-remito"></canvas>
          <div class="qr-hint">Escaneá en el stand</div>
        </div>`}
      </div>
      <script>
        const c = document.getElementById('qr-remito')
        if (c && typeof qrcode !== 'undefined') {
          const qr = qrcode(0, 'M')
          qr.addData('${p}')
          qr.make()
          const mod = qr.getModuleCount(), sz = 200, cs = sz/mod
          c.width = sz; c.height = sz
          const ctx = c.getContext('2d')
          ctx.fillStyle = '#fff'; ctx.fillRect(0,0,sz,sz)
          ctx.fillStyle = '#000'
          for(let r=0;r<mod;r++) for(let col=0;col<mod;col++)
            if(qr.isDark(r,col)) ctx.fillRect(col*cs,r*cs,cs,cs)
        }
        setTimeout(() => window.print(), 800)
      <\/script>
    </body></html>`),V.document.close()},window._entregarPedido=async p=>{await ad(p)},window._scanearEsteRemito=async p=>{document.getElementById("scan-overlay-voucher").style.display="flex";const g=document.getElementById("scan-status-voucher");g&&(g.textContent="Escaneá el QR de este remito...");try{s=await Go("scan-video-voucher",x=>{window._cerrarScannerVoucher();const T=document.getElementById("voucher-modal"),k=document.getElementById("voucher-modal-content");x.includes(p)?k.innerHTML=`
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
            </div>`:k.innerHTML=`
            <div style="text-align:center;padding:8px 0 16px">
              <div style="font-size:48px;margin-bottom:8px">❌</div>
              <div style="font-size:18px;font-weight:700;color:#C0392B;margin-bottom:4px">QR no corresponde</div>
              <div style="font-size:14px;color:#555;margin-bottom:20px">Este QR no pertenece al remito seleccionado.</div>
              <button onclick="document.getElementById('voucher-modal').style.display='none'"
                style="padding:10px 24px;border-radius:8px;border:none;background:#1A3A5C;color:#fff;font-size:14px;font-weight:600;cursor:pointer">
                Cerrar
              </button>
            </div>`,T.style.display="flex"},"scan-status-voucher")}catch{g&&(g.textContent="No se pudo acceder a la cámara.")}},window._listoParaLogistica=async p=>{await od(p)};let l={};vo(p=>{l={},p.filter(g=>Number(g.standId)===Number(t.id)).forEach(g=>{l[g.vinoId]=Math.max(0,(g.total||0)-(g.degustacion||0)-(g.reservado||0)-(g.pagado||0)-(g.entregado||0))}),document.getElementById("sp-carta")&&d()});function d(){const p=document.getElementById("sp-carta");p&&(p.innerHTML='<div class="empty">Cargando...</div>',li(t.id,g=>{if(!g.length){p.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}p.innerHTML=g.map(x=>{const T=l[x.fireId||x.id],k=T!==void 0?'<span style="font-size:12px;font-weight:500;color:'+(T===0?"#C0392B":T<=3?"#D97706":"#3A7D44")+';margin-left:8px">('+T+" disp.)</span>":"";return'<div class="card" style="margin-bottom:10px"><div style="font-size:17px;font-weight:600;color:#1A3A5C">'+x.nombre+k+'</div><div style="font-size:14px;color:#666;margin-top:2px">'+(x.varietal||"")+(x.cosecha?" · "+x.cosecha:"")+"</div>"+(x.descripcion?'<div style="font-size:13px;color:#888;margin-top:3px">'+x.descripcion+"</div>":"")+'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">'+(x.unidades||[]).map(V=>'<span style="background:#EBF4FA;color:#1A3A5C;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:500">'+V.u+": $"+ne(V.p)+"</span>").join("")+"</div></div>"}).join("")}))}function h(){const p=document.getElementById("sp-resumen");if(!p)return;const g=e.filter(B=>B.estado!=="reembolsado"&&B.estado!=="cancelado"),x=g.filter(B=>B.estado==="entregado"&&B.retiro!=="envio"),T=g.filter(B=>(B.estado==="pagado"||B.estado==="listo")&&B.retiro!=="envio"),k=g.filter(B=>B.retiro==="envio"),V=x.reduce((B,I)=>B+(I.total||0),0),S=T.reduce((B,I)=>B+(I.total||0),0),P=g.reduce((B,I)=>B+(I.total||0),0),D={};x.forEach(B=>(B.items||[]).forEach(I=>{const m=I.vinoNombre+" — "+I.unidad;D[m]||(D[m]={cant:0,total:0}),D[m].cant+=I.qty||1,D[m].total+=I.sub||0}));const C=Object.entries(D).sort((B,I)=>I[1].total-B[1].total);p.innerHTML=`
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
        <div class="stat"><div class="v" style="color:#3A7D44">$${ne(V)}</div><div class="l">Entregado</div></div>
        <div class="stat"><div class="v" style="color:#D97706">$${ne(S)}</div><div class="l">Por entregar</div></div>
        <div class="stat"><div class="v">$${ne(P)}</div><div class="l">Total vendido</div></div>
        ${k.length?`<div class="stat" style="grid-column:1/-1"><div class="v" style="color:#5BA4CF;font-size:14px">${k.length} pedido${k.length>1?"s":""} de envío a domicilio</div><div class="l">Manejados por logística</div></div>`:""}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Detalle por vino (entregados)</p>
        ${C.length?C.map(([B,I])=>`
          <div style="display:flex;justify-content:space-between;padding:6px 0;
            border-bottom:.5px solid #E8EFF5;font-size:12px">
            <span style="flex:1">${B}</span>
            <span style="color:#888;margin:0 8px">${I.cant} u.</span>
            <span style="font-weight:500">$${ne(I.total)}</span>
          </div>`).join(""):'<div style="color:#aaa;font-size:12px;padding:8px 0">Sin entregas todavía</div>'}
      </div>`}window._abrirScannerInv=async()=>{document.getElementById("scan-overlay-inv").style.display="flex";try{o=await Go("scan-video-inv",p=>{window._cerrarScannerInv();const g=p.match(/inv=([A-Z0-9]+)/i);g?window.location.href="/stand/"+t.id+"?inv="+g[1]:document.getElementById("scan-status-inv").textContent="QR no reconocido — usá el QR personal del invitado"},"scan-status-inv")}catch{document.getElementById("scan-status-inv").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerInv=()=>{o&&(o(),o=null),document.getElementById("scan-overlay-inv").style.display="none"},window._abrirScannerVoucher=async()=>{document.getElementById("scan-overlay-voucher").style.display="flex";try{s=await Go("scan-video-voucher",p=>{window._cerrarScannerVoucher();const g=e.find(x=>p.includes(x.fireId));g?v(g):document.getElementById("scan-status-voucher").textContent="Voucher no reconocido"},"scan-status-voucher")}catch{document.getElementById("scan-status-voucher").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerVoucher=()=>{s&&(s(),s=null),document.getElementById("scan-overlay-voucher").style.display="none"};function v(p){const g=p.estado==="entregado";document.getElementById("voucher-modal-content").innerHTML=`
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:36px">${g?"✅":"⏳"}</div>
        <h3 style="font-size:16px;font-weight:500;color:${g?"#3B6D11":"#854F0B"};margin-top:6px">
          ${g?"PAGADO — Entregar":"PENDIENTE — No entregar"}
        </h3>
      </div>
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${p.invNombre||""}</div>
      <div style="font-size:12px;color:#888;margin-bottom:10px">${p.invCodigo||""}</div>
      ${(p.items||[]).map(x=>`
        <div style="display:flex;justify-content:space-between;font-size:13px;
          padding:5px 0;border-bottom:.5px solid #E8EFF5">
          <span>${x.desc}</span><strong>$${ne(x.sub)}</strong>
        </div>`).join("")}
      <div style="display:flex;justify-content:space-between;font-size:15px;
        font-weight:500;margin-top:10px;margin-bottom:14px">
        <span>Total</span><span>$${ne(p.total||0)}</span>
      </div>
      ${g?"":`
        <button class="btn btn-g" style="width:100%;padding:11px;font-size:14px"
          onclick="window._entregarPedido('${p.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>`}
      <button class="btn" style="width:100%;margin-top:8px"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`,document.getElementById("voucher-modal").style.display="flex"}}window._imprimirQRDesdePanel=async()=>{var D;const t=window.location.pathname.split("/")[2],i=window.location.origin+"/stand/"+t;window.qrcode||await new Promise((C,B)=>{const I=document.createElement("script");I.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",I.onload=C,I.onerror=B,document.head.appendChild(I)});const o=window.qrcode(0,"M");o.addData(i),o.make();const s=o.getModuleCount(),a=300,l=a/s,d=document.createElement("canvas");d.width=a,d.height=a;const h=d.getContext("2d");h.fillStyle="#fff",h.fillRect(0,0,a,a),h.fillStyle="#000";for(let C=0;C<s;C++)for(let B=0;B<s;B++)o.isDark(C,B)&&h.fillRect(B*l,C*l,l,l);const v=d.toDataURL("image/png"),p=document.getElementById("modal-qr-stand");p&&p.remove();const g=document.createElement("div");g.id="modal-qr-stand",g.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:400;display:flex;align-items:center;justify-content:center;padding:16px";const x=document.createElement("div");x.style.cssText="background:#fff;border-radius:16px;padding:24px;text-align:center;max-width:360px;width:100%";const T=document.createElement("div");T.style.cssText="font-size:11px;color:#888;letter-spacing:.08em;margin-bottom:6px",T.textContent="SUCOVI 2027 · FERIA DE VINOS";const k=document.createElement("div");k.style.cssText="font-size:20px;font-weight:700;color:#1A3A5C;margin-bottom:16px",k.textContent=((D=document.querySelector("h1"))==null?void 0:D.textContent)||"Stand";const V=document.createElement("img");V.src=v,V.style.cssText="width:260px;height:260px;border-radius:8px;display:block;margin:0 auto";const S=document.createElement("div");S.style.cssText="font-size:13px;color:#555;margin-top:12px;margin-bottom:16px",S.textContent="Escaneá para ver la carta y hacer tu pedido";const P=document.createElement("button");P.textContent="Cerrar",P.style.cssText="width:100%;padding:10px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:13px;cursor:pointer",P.onclick=()=>g.remove(),x.appendChild(T),x.appendChild(k),x.appendChild(V),x.appendChild(S),x.appendChild(P),g.appendChild(x),g.addEventListener("click",C=>{C.target===g&&g.remove()}),document.body.appendChild(g)};const Gm=n=>Number(n).toLocaleString("es-AR");function wd(n,t){if(Gt(),!sessionStorage.getItem("bodega-auth-"+t.id)){n.innerHTML=`
      ${Nt({title:"🍷 "+t.nombre,sub:"Carga de carta de vinos"})}
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
      </div>`,window._loginBodega=()=>{document.getElementById("bp").value.trim()===t.pass?(sessionStorage.setItem("bodega-auth-"+t.id,"1"),wd(n,t)):document.getElementById("bp-err").textContent="Contraseña incorrecta"};return}let i=[],o=null;n.innerHTML=`
    ${Nt({title:"🍷 "+t.nombre,sub:"Carga de carta · Stand #"+t.id,actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('bodega-auth-${t.id}');location.reload()">Salir</button>`]})}
    <div style="max-width:600px;margin:0 auto;padding:14px">
      <div class="card" style="margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:12px"
          id="form-titulo">Agregar vino</p>
        ${[["vn","Nombre del vino *","text","Ej: Gran Malbec 2022"],["vv","Varietal / Blend","text","Ej: Malbec"],["vc","Cosecha","number","2022"],["vd","Descripción corta","text","Tinto con notas de..."],["vb","Precio botella ($)","number",""],["vs","Stock inicial (botellas) — opcional","number",""]].map(([l,d,h,v])=>`
          <div style="margin-bottom:8px">
            <label style="font-size:11px;color:#666">${d}</label>
            <input id="${l}" type="${h}" placeholder="${v}" style="margin-top:3px"
              ${l==="vb"?'oninput="window._calcPrecioCaja()"':""}>
          </div>`).join("")}
        <div style="margin-bottom:8px">
          <label style="font-size:11px;color:#666">Unidades por caja</label>
          <input id="vuc" type="number" placeholder="Ej: 6 o 12" style="margin-top:3px"
            oninput="window._calcPrecioCaja()">
        </div>
        <div style="margin-bottom:8px">
          <label style="font-size:11px;color:#666">Precio por caja ($) — calculado automáticamente</label>
          <input id="vpc" type="number" readonly style="margin-top:3px;background:#f5f5f5;color:#888">
        </div>
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
    </div>`,li(t.id,l=>{i=l;const d=document.getElementById("vl");if(d){if(!i.length){d.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}d.innerHTML=i.map(h=>`
      <div style="padding:10px 0;border-bottom:.5px solid #e0d5c8">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="flex:1">
            <div style="font-size:14px;font-weight:500">${h.nombre}</div>
            <div style="font-size:11px;color:#888;margin-top:2px">
              ${h.varietal||""}${h.cosecha?" · "+h.cosecha:""}
            </div>
            ${h.descripcion?`<div style="font-size:12px;color:#666;margin-top:2px">${h.descripcion}</div>`:""}
            <div style="margin-top:4px;display:flex;gap:8px;flex-wrap:wrap">
              ${(h.unidades||[]).map(v=>`<span style="font-size:12px;background:#f5f0eb;padding:2px 8px;
                  border-radius:6px;color:#6B1C1C">
                  ${v.u}: $${Gm(v.p)}
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
      </div>`).join("")}});const s=["vn","vv","vc","vd","vb","vs","vuc","vpc"],a=()=>{s.forEach(l=>{const d=document.getElementById(l);d&&(d.value="")})};window._calcPrecioCaja=()=>{const l=parseFloat(document.getElementById("vb").value)||0,d=parseInt(document.getElementById("vuc").value)||0,h=document.getElementById("vpc");h&&(h.value=l&&d?l*d:"")},window._guardarV=async()=>{var k;const l=document.getElementById("vn").value.trim(),d=document.getElementById("vm");if(!l){d.innerHTML='<span style="color:#A32D2D">El nombre es requerido.</span>';return}const h=parseFloat(document.getElementById("vb").value),v=parseInt(document.getElementById("vuc").value),p=parseFloat(document.getElementById("vpc").value),g=[];if(h&&g.push({u:"Botella",p:h}),v&&p&&g.push({u:"Caja x"+v,p,unidadesPorCaja:v}),!g.length){d.innerHTML='<span style="color:#A32D2D">Ingresá al menos precio de botella.</span>';return}if(v&&!p){d.innerHTML='<span style="color:#A32D2D">Ingresá las unidades por caja para calcular el precio.</span>';return}const x=parseInt((k=document.getElementById("vs"))==null?void 0:k.value)||0,T={nombre:l,varietal:document.getElementById("vv").value.trim(),cosecha:document.getElementById("vc").value.trim(),descripcion:document.getElementById("vd").value.trim(),unidades:g};d.innerHTML='<span style="color:#888">Guardando...</span>';try{if(o){if(await cd(t.id,o,T),x>0){const V=await an(()=>Promise.resolve().then(()=>Jn),void 0).then(D=>D.getStockDoc(t.id,o)),S=V?V.total:0,P=x-S;P!==0&&await Xi(t.id,o,P,T.nombre)}o=null}else{const V=await ld(t.id,T);x>0&&V&&await Xi(t.id,V,x,T.nombre)}a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none",d.innerHTML='<span style="color:#3B6D11">✓ Guardado correctamente</span>',setTimeout(()=>{const V=document.getElementById("vm");V&&(V.innerHTML="")},3e3)}catch(V){d.innerHTML=`<span style="color:#A32D2D">Error: ${V.message}</span>`}},window._editarV=async l=>{const d=i.find(p=>p.fireId===l);if(!d)return;try{const{getStockDoc:p}=await an(async()=>{const{getStockDoc:T}=await Promise.resolve().then(()=>Jn);return{getStockDoc:T}},void 0),g=await p(t.id,l),x=document.getElementById("vs");x&&g&&(x.value=g.total||"")}catch{}o=l,document.getElementById("form-titulo").textContent=`Editando: ${d.nombre}`,document.getElementById("vn").value=d.nombre||"",document.getElementById("vv").value=d.varietal||"",document.getElementById("vc").value=d.cosecha||"",document.getElementById("vd").value=d.descripcion||"";const h=(d.unidades||[]).find(p=>p.u==="Botella"),v=(d.unidades||[]).find(p=>p.unidadesPorCaja);document.getElementById("vb").value=(h==null?void 0:h.p)||"",document.getElementById("vuc")&&(document.getElementById("vuc").value=(v==null?void 0:v.unidadesPorCaja)||""),document.getElementById("vpc")&&(document.getElementById("vpc").value=(v==null?void 0:v.p)||""),document.getElementById("btn-cancelar-edit").style.display="block",window.scrollTo({top:0,behavior:"smooth"})},window._cancelarEdit=()=>{o=null,a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none"},window._eliminarV=async l=>{const d=i.find(h=>h.fireId===l);confirm(`¿Eliminar "${d==null?void 0:d.nombre}"?`)&&await dd(t.id,l)}}async function Km(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Xm(n){Gt();let t=[],e=[],i=null,o=null,s=!1;n.innerHTML=Nt({title:"🚪 Control de puerta",sub:"Solo ingresa quien tiene bono pagado",backHref:"/admin"})+`
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
    </div>`,go(h=>{t=h,a()}),window._vPuerta=async()=>{var x;const h=document.getElementById("scan-cod").value.trim().toUpperCase(),v=document.getElementById("scan-res");if(!h)return;const p=t.find(T=>T.codigo===h);if(!p){v.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">❌ Código no encontrado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:4px">${h} no existe en el sistema.</p>
      </div>`;return}if(p.estado==="ingresado"){v.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">⛔ QR ya utilizado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:6px">
          <strong>${p.nombre} ${p.apellido}</strong> ya ingresó al evento.<br>
          Este QR no puede usarse nuevamente.
        </p>
      </div>`;return}if(p.estado==="pendiente"){v.innerHTML=`<div class="result-warn">
        <p style="font-size:16px;font-weight:500;color:#854F0B">⏳ Pago pendiente</p>
        <p style="font-size:12px;color:#633806;margin-top:4px">
          <strong>${p.nombre} ${p.apellido}</strong> no abonó el bono ($35.000).
        </p>
        <button class="btn btn-a" style="margin-top:10px;width:100%;font-size:12px"
          onclick="window._cobrarPuerta('${p.fireId}','${p.codigo}')">
          💰 Cobrar $35.000 y habilitar ingreso
        </button>
      </div>`;return}i=p;const g=p.nombre[0]+(((x=p.apellido)==null?void 0:x[0])||"");document.getElementById("mc-avatar").textContent=g,document.getElementById("mc-nombre").textContent=p.nombre+" "+p.apellido,document.getElementById("mc-codigo").textContent=h+(p.familia?" · Familia "+p.familia:""),document.getElementById("mc-estado").innerHTML='<span class="badge b-pago">✅ Bono confirmado</span>',document.getElementById("modal-confirm").style.display="flex"},window._confirmarIngreso=async()=>{if(!i)return;document.getElementById("modal-confirm").style.display="none";const h=i;i=null,await fe(h.fireId,{estado:"ingresado"});const v=new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});e.unshift({nombre:h.nombre+" "+h.apellido,codigo:h.codigo,hora:v}),document.getElementById("scan-res").innerHTML=`<div class="result-ok">
      <p style="font-size:20px;font-weight:500;color:#1A3A5C">✅ ¡Bienvenido/a!</p>
      <p style="font-size:16px;margin-top:6px">${h.nombre} ${h.apellido}</p>
      <p style="font-size:13px;color:#3B6D11;margin-top:4px">${h.codigo} · ${v}</p>
    </div>`,document.getElementById("scan-cod").value="",a()},window._cobrarPuerta=async(h,v)=>{await fe(h,{estado:"pagado"}),document.getElementById("scan-cod").value=v,window._vPuerta()};function a(){const h=document.getElementById("historial-puerta");if(!h)return;const v=t.filter(p=>p.estado==="ingresado");if(!v.length&&!e.length){h.innerHTML='<p style="font-size:12px;color:#aaa;text-align:center">ÚLTIMOS INGRESOS — Sin ingresos todavía</p>';return}h.innerHTML=`
      <p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">
        INGRESOS AL EVENTO (${v.length})
      </p>
      ${v.slice(0,50).map(p=>{var g;return`
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;
          border-bottom:.5px solid #E8EFF5">
          <div class="avatar" style="width:32px;height:32px;font-size:11px;flex-shrink:0">
            ${p.nombre[0]}${((g=p.apellido)==null?void 0:g[0])||""}
          </div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:500">${p.nombre} ${p.apellido}</div>
            <div style="font-size:11px;color:#888">${p.codigo}</div>
          </div>
          <span style="font-size:11px;color:#3A7D44;font-weight:500">✅ Ingresó</span>
        </div>`}).join("")}
    `}window._abrirScannerPuerta=async()=>{const h=document.getElementById("scan-overlay-puerta");h.style.display="flex";const v=document.getElementById("scan-status-puerta");try{await Km(),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const p=document.getElementById("scan-video-puerta");p.srcObject=o,s=!0,v&&(v.textContent="Buscando QR...");const g=document.createElement("canvas"),x=g.getContext("2d",{willReadFrequently:!0}),T=()=>{if(s){if(p.readyState===p.HAVE_ENOUGH_DATA&&p.videoWidth>0){g.width=p.videoWidth,g.height=p.videoHeight,x.drawImage(p,0,0);const k=x.getImageData(0,0,g.width,g.height),V=window.jsQR(k.data,k.width,k.height,{inversionAttempts:"dontInvert"});if(V&&V.data){const S=V.data;window._cerrarScannerPuerta();const P=S.match(/INV-\d+/),D=S.match(/inv=([A-Z0-9]+)/i);P?(document.getElementById("scan-cod").value=P[0],window._vPuerta()):D&&Xn(D[1]).then(C=>{C?(document.getElementById("scan-cod").value=C.codigo,window._vPuerta()):v&&(v.textContent="Invitado no encontrado")});return}}s&&requestAnimationFrame(T)}};p.addEventListener("loadeddata",()=>requestAnimationFrame(T))}catch{v&&(v.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerPuerta=()=>{s=!1,o&&(o.getTracks().forEach(v=>v.stop()),o=null);const h=document.getElementById("scan-overlay-puerta");h&&(h.style.display="none")};const l=document.createElement("button");l.innerHTML="?",l.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",l.onclick=()=>document.getElementById("modal-ayuda-puerta").style.display="flex",document.body.appendChild(l);const d=document.createElement("div");d.id="modal-ayuda-puerta",d.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",d.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Control de puerta</div><button onclick="document.getElementById(&quot;modal-ayuda-puerta&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📷 Escanear QR</div><div>Escaneá el QR del invitado con la cámara. El sistema verifica automáticamente si el bono está confirmado y registra el ingreso.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">⌨️ Ingresar código manualmente</div><div>Si la cámara no funciona, escribí el código del invitado (ej: INV-0001) y tocá <strong>Verificar</strong>.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">✅ Estados posibles</div><div><strong>Bono confirmado</strong> — puede ingresar.<br><strong>Pendiente de pago</strong> — puede ingresar y pagar en puerta.<br><strong>Ya ingresó</strong> — QR ya usado, no permitir reingreso.<br><strong>Invalidado</strong> — no permitir ingreso.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ Cada QR es de un solo uso. Si alguien ya ingresó el sistema lo indica claramente.</div></div></div>',d.addEventListener("click",h=>{h.target===d&&(d.style.display="none")}),document.body.appendChild(d)}const Ko=n=>Number(n).toLocaleString("es-AR");function Jm(n){Gt();let t=[],e=null;n.innerHTML=Nt({title:"🚚 Logística — Envíos",sub:"Pedidos para enviar a domicilio",backHref:"/admin"})+'<div class="wrap" id="log-body"></div>',yo(o=>{t=o,e||i()});function i(){const o=document.getElementById("log-body");if(!o)return;e=null;const s=t.filter(p=>p.retiro==="envio");if(!s.length){o.innerHTML='<div class="empty">🚚<br><br>Sin pedidos de envío</div>';return}const a=s.filter(p=>p.estado==="pagado"||p.estado==="listo"),l=s.filter(p=>p.estado==="retirado"),d=s.filter(p=>p.estado==="entregado"),h=s.filter(p=>p.estado==="reembolsado"||p.estado==="cancelado"),v=(p,g,x)=>{var T;return`
      <div class="card" style="margin-bottom:10px;border-left:4px solid ${g};cursor:pointer"
        onclick="window._verDetalleLog('${p.fireId}')">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
          <div>
            <div style="font-size:14px;font-weight:500;color:#1A3A5C">${p.invNombre||""}</div>
            <div style="font-size:11px;color:#888">${p.standNombre} · #${(T=p.fireId)==null?void 0:T.slice(-4).toUpperCase()}</div>
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
        POR RETIRAR DEL STAND (${a.length})</p>`,o.innerHTML+=a.map(p=>v(p,"#D97706")).join("")),l.length&&(o.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#5BA4CF;margin:14px 0 8px;letter-spacing:.05em">
        RETIRADOS — EN CAMINO (${l.length})</p>`,o.innerHTML+=l.map(p=>v(p,"#5BA4CF")).join("")),d.length&&(o.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#3A7D44;margin:14px 0 8px;letter-spacing:.05em">
        ENTREGADOS (${d.length})</p>`,o.innerHTML+=d.map(p=>v(p,"#3A7D44")).join("")),h.length&&(o.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#C0392B;margin:14px 0 8px;letter-spacing:.05em">
        REEMBOLSADOS (${h.length})</p>`,o.innerHTML+=h.map(p=>v(p,"#C0392B")).join(""))}window._verDetalleLog=o=>{e=o;const s=t.find(v=>v.fireId===o);if(!s)return;const a=document.getElementById("log-body");if(!a)return;const l=s.envio||{},d={pagado:{label:"💳 Pagado — Pendiente de retiro",color:"#D97706",badge:"b-pend"},listo:{label:"✅ Listo para retirar",color:"#D97706",badge:"b-list"},retirado:{label:"📦 Retirado del stand",color:"#5BA4CF",badge:"b-pago"},entregado:{label:"🏠 Entregado a domicilio",color:"#3A7D44",badge:"b-entr"},reembolsado:{label:"↩️ Reembolsado",color:"#C0392B",badge:"b-canc"},cancelado:{label:"❌ Cancelado",color:"#C0392B",badge:"b-canc"}},h=d[s.estado]||d.pagado;a.innerHTML=`
      <button class="btn" onclick="window._volverLog()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>

      <div class="card" style="margin-bottom:12px;border-left:4px solid ${h.color}">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px">
          <div>
            <div style="font-size:16px;font-weight:500;color:#1A3A5C">${s.invNombre||""}</div>
            <div style="font-size:12px;color:#888">${s.invCodigo||""} · Stand: ${s.standNombre}</div>
          </div>
          <span class="badge ${h.badge}" style="font-size:11px">${h.label}</span>
        </div>

        ${(s.items||[]).map(v=>`
          <div style="display:flex;justify-content:space-between;font-size:13px;
            padding:5px 0;border-bottom:.5px solid #E8EFF5;color:#555">
            <span>${v.desc}</span><strong>$${Ko(v.sub)}</strong>
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
        onclick="window._volverLog()">Volver a la lista</button>`},window._retirarStand=async o=>{await rd(o),window._verDetalleLog(o)},window._entregarDom=async o=>{await sd(o),window._verDetalleLog(o)},window._volverLog=()=>{e=null,i()}}async function xd(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Zm(n,t,e){await xd();const i=document.getElementById(n);if(i)try{const o=window.qrcode(0,"M");o.addData(String(t)),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let h=0;h<s;h++)o.isDark(d,h)&&l.fillRect(h*a,d*a,a,a)}catch(o){console.error("QR error:",o)}}async function Ym(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function tg(n,t){Gt(),n.innerHTML=Ni(null)+`<div style="text-align:center;padding:40px 16px">
    <div style="font-size:13px;color:#aaa">Cargando...</div></div>`;const e=await Xn(t);if(!e){vl(n,"Token inválido","El link no es válido o expiró.");return}if(e.estado==="invalidado"){vl(n,"Acceso invalidado","Este bono fue invalidado. Consultá con la organización.");return}if(e.estado==="pendiente"){n.innerHTML=Ni(e)+`
      <div style="max-width:400px;margin:40px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">Pago pendiente</h2>
        <p style="font-size:14px;color:#666;line-height:1.6">
          Tu bono aún no fue confirmado. Una vez que abones los $35.000 recibirás tu QR de acceso.
        </p>
        <p style="font-size:12px;color:#aaa;margin-top:16px">Consultas: José Pannunzio +54 9 11 5400-1313</p>
      </div>`;return}let i=[],o=null,s=!1;const a=Ht.map(p=>`
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
    </a>`).join("");n.innerHTML=Ni(e)+`
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
    </div>`,setTimeout(()=>Zm("qr-acc",e.codigo,160),50),nd(e.fireId,p=>{i=p;const g=document.getElementById("btn-mis-pedidos");g&&(g.style.display=p.length?"flex":"none",p.length&&(g.textContent="📋 Mis pedidos ("+p.length+")"));const x=document.getElementById("mis-pedidos-sec");x&&x.style.display!=="none"&&l()}),window._togglePedidos=()=>{const p=document.getElementById("mis-pedidos-sec");p&&(p.style.display=p.style.display==="none"?"block":"none",p.style.display==="block"&&l())};async function l(){const p=document.getElementById("mis-pedidos-sec");if(!p||p.style.display==="none")return;if(!i.length){p.innerHTML='<div class="empty">Sin pedidos pagados todavía</div>';return}await xd();const g=x=>Number(x).toLocaleString("es-AR");p.innerHTML=i.map(x=>{const T=x.retiro==="envio",k=x.estado==="entregado",V=x.estado==="reembolsado"||x.estado==="cancelado",S=k?"#f5f5f5":V?"#FEE2E2":T?"#EBF4FA":"#EAF3DE",P=k?"#ddd":V?"#FCA5A5":T?"#5BA4CF":"#3B6D11",D=k?"✅ Entregado":V?"↩️ Reembolsado":T?"🚚 Envío a domicilio":"🟢 Listo para retirar",C=(x.items||[]).map(I=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid rgba(0,0,0,.08);color:#555"><span>'+I.desc+"</span><strong>$"+g(I.sub)+"</strong></div>").join(""),B="vq-"+x.fireId;return'<div style="background:'+S+";border:.5px solid "+P+';border-radius:10px;padding:14px;margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:14px;font-weight:500;color:#1A3A5C">'+x.standNombre+'</div><div style="font-size:11px;color:#888">Stand #'+x.standId+(x.voucherNum?" · VOC-"+String(x.voucherNum).padStart(3,"0"):"")+'</div></div><span style="font-size:11px;font-weight:500">'+D+"</span></div>"+C+'<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$'+g(x.total||0)+"</span></div>"+(!k&&!V&&!T?'<div style="margin-top:12px;text-align:center"><canvas id="'+B+'" style="border-radius:8px;display:block;margin:0 auto"></canvas><div style="font-size:11px;color:#888;margin-top:4px">Mostrá este QR en el stand para retirar</div></div>':"")+(T&&!k&&!V?'<div style="font-size:12px;color:#185FA5;margin-top:8px;text-align:center">Tu pedido será enviado a domicilio. Logística te lo hará llegar.</div>':"")+"</div>"}).join(""),i.forEach(x=>{if(x.retiro==="envio"||x.estado==="entregado"||x.estado==="reembolsado"||x.estado==="cancelado")return;const T=document.getElementById("vq-"+x.fireId);if(!(!T||!window.qrcode))try{const k=window.qrcode(0,"M");k.addData(x.fireId),k.make();const V=k.getModuleCount(),S=220,P=S/V;T.width=S,T.height=S;const D=T.getContext("2d");D.fillStyle="#fff",D.fillRect(0,0,S,S),D.fillStyle="#000";for(let C=0;C<V;C++)for(let B=0;B<V;B++)k.isDark(C,B)&&D.fillRect(B*P,C*P,P,P)}catch{}})}window._abrirScannerAcceso=async()=>{const p=document.getElementById("scan-overlay-acc");p&&(p.style.display="flex");const g=document.getElementById("scan-status-acc");try{await Ym(),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const x=document.getElementById("scan-video-acc");x.srcObject=o,s=!0,g&&(g.textContent="Buscando QR del stand...");const T=document.createElement("canvas"),k=T.getContext("2d",{willReadFrequently:!0}),V=()=>{if(s){if(x.readyState===x.HAVE_ENOUGH_DATA&&x.videoWidth>0){T.width=x.videoWidth,T.height=x.videoHeight,k.drawImage(x,0,0);const S=k.getImageData(0,0,T.width,T.height),P=window.jsQR(S.data,S.width,S.height,{inversionAttempts:"dontInvert"});if(P&&P.data){const D=P.data;window._cerrarScannerAcceso();const C=D.match(/\/stand\/(\d+)/);C&&(window.location.href="/stand/"+C[1]+"?inv="+t);return}}s&&requestAnimationFrame(V)}};x.addEventListener("loadeddata",()=>requestAnimationFrame(V))}catch{g&&(g.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerAcceso=()=>{s=!1,o&&(o.getTracks().forEach(g=>g.stop()),o=null);const p=document.getElementById("scan-overlay-acc");p&&(p.style.display="none")};let d=[],h="";window._abrirRecomendador=()=>{d=[],h="",document.getElementById("modal-ia").style.display="flex",document.getElementById("ia-respuesta").style.display="none",document.getElementById("ia-input").value=""},window._pedirRecomendacion=async()=>{var k,V;const p=document.getElementById("ia-input").value.trim();if(!p)return;const g=document.getElementById("ia-input"),x=document.querySelector('#modal-ia button[onclick*="pedirRecomendacion"]'),T=document.getElementById("ia-respuesta");if(g.disabled=!0,x&&(x.disabled=!0,x.style.opacity="0.6"),d.push({role:"user",content:p}),g.value="",T.style.display="block",T.innerHTML=v(d)+'<div id="ia-typing" style="color:#9333EA;margin-top:8px">✨ Pensando...</div>',T.scrollTop=T.scrollHeight,!h){let S=[],P=0;await new Promise(C=>{Ht.forEach(B=>{li(B.id,I=>{I.forEach(m=>S.push({stand:B.id,bodega:B.nombre,region:B.region||"",vino:m.nombre,varietal:m.varietal||"",descripcion:m.descripcion||"",precios:(m.unidades||[]).map(f=>f.u+": $"+Number(f.p).toLocaleString("es-AR")).join(", ")})),P++,P===Ht.length&&C()})})});const D=S.length>0?S.map(C=>"Stand #"+C.stand+" - "+C.bodega+" ("+C.region+"): "+C.vino+(C.varietal?" - "+C.varietal:"")+(C.descripcion?" - "+C.descripcion:"")+" | "+C.precios).join(`
`):"No hay vinos cargados aún.";h="Sos un sommelier experto en vinos argentinos en la Feria de Vinos SUCOVI 2027 en Olivos. El invitado se llama "+e.nombre+`. Esta es la carta completa de vinos disponibles esta noche:

`+D+`

Recomendá vinos específicos de la carta. Para cada uno mencioná el Stand #, la bodega, el vino y por qué lo recomendás. Mantené el hilo de la conversación. Sé breve, cálido y entusiasta. Respondé siempre en español rioplatense.`}try{const D=((V=(k=(await(await fetch("/api/recommend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:h,messages:d})})).json()).content)==null?void 0:k[0])==null?void 0:V.text)||"No pude generar una recomendación.";d.push({role:"assistant",content:D}),T.innerHTML=v(d),T.scrollTop=T.scrollHeight}catch{d.pop(),T.innerHTML=v(d)+'<div style="color:red;margin-top:8px">Error al conectar. Intentá de nuevo.</div>'}finally{g.disabled=!1,x&&(x.disabled=!1,x.style.opacity="1"),g.focus()}};function v(p){return p.map(g=>{const x=g.role==="user",T=g.content.replace(/\n/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");return x?'<div style="text-align:right;margin-bottom:10px"><span style="background:#9333EA;color:#fff;padding:8px 12px;border-radius:16px 16px 4px 16px;display:inline-block;max-width:85%">'+T+"</span></div>":'<div style="text-align:left;margin-bottom:10px"><span style="background:#f3e8ff;color:#1a1a1a;padding:8px 12px;border-radius:16px 16px 16px 4px;display:inline-block;max-width:85%">'+T+"</span></div>"}).join("")}}function vl(n,t,e){n.innerHTML=Ni(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
      <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${t}</h2>
      <p style="font-size:14px;color:#666">${e}</p>
      <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>
    </div>`}async function eg(n,t,e){window.qrcode||await new Promise((d,h)=>{const v=document.createElement("script");v.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",v.onload=d,v.onerror=h,document.head.appendChild(v)});const i=document.getElementById(n);if(!i)return;const o=window.qrcode(0,"M");o.addData(t),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let h=0;h<s;h++)o.isDark(d,h)&&l.fillRect(h*a,d*a,a,a)}window._imprimirQRStand=async(n,t,e,i)=>{window.qrcode||await new Promise((g,x)=>{const T=document.createElement("script");T.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",T.onload=g,T.onerror=x,document.head.appendChild(T)});const o=window.qrcode(0,"M");o.addData(i),o.make();const s=o.getModuleCount(),a=400,l=a/s,d=document.createElement("canvas");d.width=a,d.height=a;const h=d.getContext("2d");h.fillStyle="#fff",h.fillRect(0,0,a,a),h.fillStyle="#000";for(let g=0;g<s;g++)for(let x=0;x<s;x++)o.isDark(g,x)&&h.fillRect(x*l,g*l,l,l);const v=d.toDataURL("image/png"),p=window.open("","_blank");p.document.write(`<!DOCTYPE html><html><head>
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
      <img src="${v}" class="qr-img" alt="QR Stand">
      <div class="instruccion">
        Escaneá este código con tu celular<br>para ver la carta y hacer tu pedido
      </div>
    </div>
    <script>setTimeout(() => { window.print() }, 500)<\/script>
  </body></html>`),p.document.close()};function bl(n){Gt();const t=window.location.origin;n.innerHTML=Nt({title:"🍷 SUCOVI 2027",sub:"Panel de organización — Stands"})+`
    <div class="wrap">
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>Vista cliente:</strong> para cargar pedidos de invitados.<br>
        <strong>Panel:</strong> para ver pedidos y marcar entregas con QR.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${Ht.filter(e=>!e.oculto).map(e=>`
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
    </div>`,Ht.forEach(e=>setTimeout(()=>eg("org-qr-"+e.id,t+"/stand/"+e.id,110),50))}const Xo=n=>Number(n).toLocaleString("es-AR");function ng(n,t){if(Gt(),!t||t.estado==="invalidado"){n.innerHTML=`
      <div class="hdr"><div><h1>🛒 Carrito</h1></div></div>
      <div class="gold"></div>
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <p style="font-size:14px;color:#666">Necesitás tu QR de acreditación para ver el carrito.</p>
      </div>`;return}let e=[];n.innerHTML=`
    ${Nt({title:"🛒 Mi carrito",sub:t.nombre+" "+t.apellido+" · "+t.codigo,backHref:"/acceso?inv="+t.token,backLabel:"← Mi QR",backStyle:"background:#A32D2D;color:#fff;border-color:#A32D2D"})}
    <div style="max-width:480px;margin:0 auto;padding:14px" id="carrito-body">
      <div class="empty">Cargando carrito...</div>
    </div>`,fs(t.fireId,o=>{e=o,i()});function i(){const o=document.getElementById("carrito-body");if(!o)return;if(!e.length||!e.some(a=>{var l;return(l=a.items)==null?void 0:l.length})){o.innerHTML=`
        <div class="empty" style="padding:48px 20px">
          <div style="font-size:48px;margin-bottom:12px">🛒</div>
          <p style="font-size:15px;font-weight:500;margin-bottom:8px">Tu carrito está vacío</p>
          <p style="font-size:13px;color:#aaa">
            Escaneá el QR de cualquier stand para agregar vinos.
          </p>
        </div>`;return}const s=e.reduce((a,l)=>a+(l.items||[]).reduce((d,h)=>d+(h.sub||0),0),0);o.innerHTML=`
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

      <div id="carrito-msg" style="font-size:12px;text-align:center;min-height:16px;margin-bottom:8px"></div>`}window._quitarCarrito=async(o,s)=>{const a=e.find(l=>l.standDocId===o);a&&await Ki(t.fireId,Number(a.standId),s)},window._cambiarRetiro=async(o,s,a)=>{await ps(t.fireId,Number(s),a)}}async function ig(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function wl(n,t,e,i,o,s){n.beginPath(),n.moveTo(t+s,e),n.lineTo(t+i-s,e),n.quadraticCurveTo(t+i,e,t+i,e+s),n.lineTo(t+i,e+o-s),n.quadraticCurveTo(t+i,e+o,t+i-s,e+o),n.lineTo(t+s,e+o),n.quadraticCurveTo(t,e+o,t,e+o-s),n.lineTo(t,e+s),n.quadraticCurveTo(t,e,t+s,e),n.closePath()}async function og(n){await ig();const e=window.location.origin+"/acceso?inv="+n.token,i=document.createElement("canvas"),o=600,s=800;i.width=o,i.height=s;const a=i.getContext("2d"),l=a.createLinearGradient(0,0,0,s);l.addColorStop(0,"#1A3A5C"),l.addColorStop(.55,"#2C5F8A"),l.addColorStop(1,"#3A7D44"),a.fillStyle=l,a.fillRect(0,0,o,s),a.fillStyle="#C9A96E",a.fillRect(0,s-4,o,4),a.fillStyle="rgba(255,255,255,0.7)",a.font="500 18px system-ui, -apple-system, sans-serif",a.textAlign="center",a.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",o/2,54),a.fillStyle="#ffffff",a.font="500 38px system-ui, -apple-system, sans-serif",a.fillText(n.nombre+" "+n.apellido,o/2,110),a.fillStyle="rgba(255,255,255,0.75)",a.font="400 22px system-ui, -apple-system, sans-serif",a.fillText(n.codigo,o/2,146),a.fillStyle="#3A7D44";const d=200,h=34,v=o/2-d/2,p=164;wl(a,v,p,d,h,17),a.fill(),a.fillStyle="#ffffff",a.font="500 15px system-ui, -apple-system, sans-serif",a.fillText("Bono confirmado",o/2,p+23);const g=320,x=340,T=o/2-g/2,k=220;a.fillStyle="#ffffff",wl(a,T,k,g,x,16),a.fill();const V=qrcode(0,"M");V.addData(e),V.make();const S=V.getModuleCount(),P=240,D=T+(g-P)/2,C=k+24,B=P/S;a.fillStyle="#000000";for(let m=0;m<S;m++)for(let f=0;f<S;f++)V.isDark(m,f)&&a.fillRect(D+f*B,C+m*B,B,B);a.fillStyle="#1A3A5C",a.font="500 26px system-ui, -apple-system, sans-serif",a.fillText(n.codigo,o/2,k+x-44),a.fillStyle="#888",a.font="400 14px system-ui, -apple-system, sans-serif",a.fillText("Mostrá este QR en la entrada",o/2,k+x-20),a.fillStyle="rgba(255,255,255,0.85)",a.font="400 18px system-ui, -apple-system, sans-serif",a.fillText("Sáb 20 jun 2026  ·  19:30 hs",o/2,k+x+50),a.fillText("Roma 656, Olivos",o/2,k+x+80),a.fillStyle="rgba(255,255,255,0.5)",a.font="400 13px system-ui, -apple-system, sans-serif",a.fillText("Personal e intransferible · Un solo uso en la entrada",o/2,s-24);const I=document.createElement("a");I.download="QR_"+n.nombre+"_"+n.apellido+".png",I.href=i.toDataURL(),I.click()}async function rg(n,t,e){if(Gt(),!await vd(t,e)){n.innerHTML=Nt({title:"Acceso denegado",sub:"SUCOVI 2027"})+'<div style="max-width:480px;margin:40px auto;padding:16px;text-align:center"><div style="font-size:40px;margin-bottom:12px">🔒</div><div style="font-size:16px;color:#A32D2D">Link invalido o expirado</div></div>';return}const o=await gd(t),s=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),a={pagado:"b-pago",ingresado:"b-ingr",pendiente:"b-pend",invalidado:"b-canc"},l={pagado:"Bono confirmado",ingresado:"Ingreso",pendiente:"Pendiente",invalidado:"Invalidado"},d=window.location.origin;n.innerHTML=Nt({title:"Familia "+s,sub:"SUCOVI 2027 · "+o.length+" invitado"+(o.length!==1?"s":"")})+'<div style="max-width:600px;margin:0 auto;padding:16px">'+(o.length===0?'<div class="empty">No se encontraron invitados.</div>':o.map((g,x)=>{const T=((g.nombre||"")[0]||"")+((g.apellido||"")[0]||""),k=d+"/acceso?inv="+g.token,V=g.estado==="ingresado"?"Hola "+g.nombre+`! 🍷

Ya estás dentro de SUCOVI 2027 — ¡disfrutá la noche!

Si necesitás tu QR para los stands:
👉 `+k+`

_Personal e intransferible._`:g.estado==="pagado"?"Hola "+g.nombre+`! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 `+k+`

_Personal e intransferible. Un solo uso en la entrada._`:"Hola "+g.nombre+`! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`,S=encodeURIComponent(V),P=(g.tel||"").replace(/\D/g,""),D=P?"https://wa.me/"+(P.startsWith("54")?P:"54"+P)+"?text="+S:null;return'<div class="card" style="margin-bottom:10px"><div style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;border-radius:50%;background:#1A3A5C;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;flex-shrink:0">'+T+'</div><div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:600;color:#1A3A5C">'+g.nombre+" "+g.apellido+'</div><div style="font-size:12px;color:#888">'+(g.codigo||"")+'</div><span class="badge '+(a[g.estado]||"")+'" style="margin-top:4px;display:inline-block">'+(l[g.estado]||g.estado)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInvFam('+x+')">✏️</button>'+(D?'<a href="'+D+'" target="_blank" class="btn" style="padding:4px 8px;font-size:11px">📱 WA</a>':"")+'<button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._dlQR('+x+')">📥 QR</button><a href="'+k+'" class="btn btn-v" style="padding:4px 8px;font-size:11px">Ver QR</a></div></div></div>'}).join(""))+"</div>",window._invitadosFamilia=o;const h=document.createElement("button");h.innerHTML="?",h.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",h.onclick=()=>document.getElementById("modal-ayuda-fam").style.display="flex",document.body.appendChild(h);const v=document.createElement("div");v.id="modal-ayuda-fam",v.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",v.innerHTML=`<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">¿Cómo usar esta página?</div><button onclick="document.getElementById('modal-ayuda-fam').style.display='none'" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">✏️ Editar datos</div><div>Antes de enviar la invitación, verificá que el <strong>nombre</strong>, <strong>apellido</strong> y <strong>teléfono</strong> de cada invitado sean correctos. Tocá el botón ✏️ para corregirlos.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📱 Enviar por WhatsApp</div><div>Tocá el botón <strong>WA</strong> para abrir WhatsApp con el mensaje de invitación ya redactado. El mensaje incluye el link personal del invitado con su QR. <strong>Verificá los datos antes de enviar.</strong></div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📥 Descargar QR</div><div>Descargá la imagen del QR personal de cada invitado para compartirla por otro medio si es necesario.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">👁️ Ver QR</div><div>Abre la página personal del invitado donde puede ver su QR, sus compras y acceder a los stands el día del evento.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ <strong>Importante:</strong> El link de cada invitado es personal e intransferible. No lo compartas con otras personas.</div></div></div>`,v.addEventListener("click",g=>{g.target===v&&(v.style.display="none")}),document.body.appendChild(v);const p=document.createElement("div");p.id="modal-edit-fam",p.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.45);z-index:200;align-items:center;justify-content:center;padding:16px",p.innerHTML='<div style="background:#fff;width:100%;max-width:420px;border-radius:12px;padding:20px"><h3 style="font-size:14px;font-weight:500;color:#1A3A5C;margin-bottom:14px">Editar invitado</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px"><div><label style="font-size:11px;color:#666">Nombre</label><input id="fam-edit-nom" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div><div><label style="font-size:11px;color:#666">Apellido</label><input id="fam-edit-ape" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div></div><div style="margin-bottom:12px"><label style="font-size:11px;color:#666">WhatsApp</label><input id="fam-edit-tel" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div><div style="display:flex;gap:8px"><button onclick="window._guardarEditFam()" style="flex:1;padding:9px;background:#1A3A5C;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer">Guardar</button><button onclick="window._cerrarEditFam()" style="flex:1;padding:9px;background:#fff;color:#555;border:1px solid #ccc;border-radius:8px;font-size:14px;cursor:pointer">Cancelar</button></div><div id="fam-edit-msg" style="margin-top:8px;font-size:12px;text-align:center"></div></div>',document.body.appendChild(p),window._editarInvFam=g=>{const x=window._invitadosFamilia[g];x&&(window._editIdxFam=g,window._editFireIdFam=x.fireId,document.getElementById("fam-edit-nom").value=x.nombre||"",document.getElementById("fam-edit-ape").value=x.apellido||"",document.getElementById("fam-edit-tel").value=x.tel||"",document.getElementById("fam-edit-msg").innerHTML="",document.getElementById("modal-edit-fam").style.display="flex")},window._guardarEditFam=async()=>{const g=document.getElementById("fam-edit-msg"),x=document.getElementById("fam-edit-nom").value.trim(),T=document.getElementById("fam-edit-ape").value.trim(),k=document.getElementById("fam-edit-tel").value.trim();if(!x||!T||!k){g.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}g.innerHTML='<span style="color:#888">Guardando...</span>';try{await fe(window._editFireIdFam,{nombre:x,apellido:T,tel:k}),window._invitadosFamilia[window._editIdxFam].nombre=x,window._invitadosFamilia[window._editIdxFam].apellido=T,window._invitadosFamilia[window._editIdxFam].tel=k,g.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEditFam(),1200)}catch(V){g.innerHTML='<span style="color:#C0392B">Error: '+V.message+"</span>"}},window._cerrarEditFam=()=>{document.getElementById("modal-edit-fam").style.display="none"},window._dlQR=async g=>{const x=window._invitadosFamilia[g];x&&await og(x)}}async function Ad(){const t=window.location.pathname.replace("/Sucovi2027","")||"/",e=new URLSearchParams(window.location.search),i=document.getElementById("app"),o=t.match(/^\/familia\/([^/]+)$/);if(o){const d=decodeURIComponent(o[1]),h=e.get("key");return rg(i,d,h)}const s=t.match(/^\/stand\/(\d+)$/);if(s){const d=parseInt(s[1]),h=Ht.find(g=>g.id===d);if(!h){i.innerHTML=We("Stand no encontrado");return}const v=e.get("inv"),p=v?await Xn(v):null;return $m(i,h,p)}const a=t.match(/^\/panel\/(\d+)$/);if(a){const d=Ht.find(v=>v.id===parseInt(a[1]));if(!d){i.innerHTML=We("Panel no encontrado");return}const h=e.get("key");if(h&&h!==d.key){i.innerHTML=We("Acceso no autorizado");return}if(!h){i.innerHTML=We("Link inválido — usá el link completo que te enviaron");return}return Wm(i,d)}const l=t.match(/^\/bodega\/(\d+)\/vinos$/);if(l){const d=Ht.find(v=>v.id===parseInt(l[1]));if(!d){i.innerHTML=We("Bodega no encontrada");return}const h=e.get("key");if(h&&h!==d.key){i.innerHTML=We("Acceso no autorizado");return}return wd(i,d)}if(t==="/carrito"){const d=e.get("inv"),h=d?await Xn(d):null;return ng(i,h)}if(t==="/acceso")return tg(i,e.get("inv"));if(t==="/org"){bl(i);return}if(t==="/registro"){bl(i);return}return t==="/caja"?Um(i):t==="/puerta"?Xm(i):t==="/logistica"?Jm(i):bd(i)}function We(n){return`<div style="padding:60px;text-align:center;color:#aaa;font-size:14px">${n}</div>`}Ad();window.addEventListener("popstate",Ad);(function(){var n=window.location.search.match(/[?&]p=([^&]+)/);if(n){var t="/Sucovi2027",e=decodeURIComponent(n[1].replace(/~and~/g,"&"));window.history.replaceState(null,null,t+"/"+e)}})();
