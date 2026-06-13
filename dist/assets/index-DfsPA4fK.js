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
 */const Al=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?t[e++]=o:o<2048?(t[e++]=o>>6|192,t[e++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=o>>18|240,t[e++]=o>>12&63|128,t[e++]=o>>6&63|128,t[e++]=o&63|128):(t[e++]=o>>12|224,t[e++]=o>>6&63|128,t[e++]=o&63|128)}return t},eu=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const o=n[e++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const s=n[e++];t[i++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=n[e++],a=n[e++],l=n[e++],d=((o&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(d>>10)),t[i++]=String.fromCharCode(56320+(d&1023))}else{const s=n[e++],a=n[e++];t[i++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return t.join("")},El={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const s=n[o],a=o+1<n.length,l=a?n[o+1]:0,d=o+2<n.length,h=d?n[o+2]:0,b=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,E=h&63;d||(E=64,a||(y=64)),i.push(e[b],e[m],e[y],e[E])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Al(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):eu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const s=e[n.charAt(o++)],l=o<n.length?e[n.charAt(o)]:0;++o;const h=o<n.length?e[n.charAt(o)]:64;++o;const m=o<n.length?e[n.charAt(o)]:64;if(++o,s==null||l==null||h==null||m==null)throw new nu;const y=s<<2|l>>4;if(i.push(y),h!==64){const E=l<<4&240|h>>2;if(i.push(E),m!==64){const I=h<<6&192|m;i.push(I)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iu=function(n){const t=Al(n);return El.encodeByteArray(t,!0)},Mi=function(n){return iu(n).replace(/\./g,"")},ou=function(n){try{return El.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ru(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const su=()=>ru().__FIREBASE_DEFAULTS__,au=()=>{if(typeof process>"u"||typeof ga>"u")return;const n=ga.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ou(n[1]);return t&&JSON.parse(t)},Ar=()=>{try{return su()||au()||lu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cu=n=>{var t,e;return(e=(t=Ar())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},du=n=>{const t=cu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},_l=()=>{var n;return(n=Ar())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function hu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",o=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Mi(JSON.stringify(e)),Mi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fu(){var n;const t=(n=Ar())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mu(){return!fu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gu(){try{return typeof indexedDB=="object"}catch{return!1}}function yu(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{var s;t(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="FirebaseError";class hn extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=vu,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Il.prototype.create)}}class Il{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},o=`${this.service}/${t}`,s=this.errors[t],a=s?bu(s,i):"Error",l=`${this.serviceName}: ${a} (${o}).`;return new hn(o,l,i)}}function bu(n,t){return n.replace(xu,(e,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const xu=/\{\$([^}]+)}/g;function Jo(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const o of e){if(!i.includes(o))return!1;const s=n[o],a=t[o];if(ya(s)&&ya(a)){if(!Jo(s,a))return!1}else if(s!==a)return!1}for(const o of i)if(!e.includes(o))return!1;return!0}function ya(n){return n!==null&&typeof n=="object"}/**
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
 */function $t(n){return n&&n._delegate?n._delegate:n}class Un{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Fe="[DEFAULT]";/**
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
 */class wu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new uu;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:e});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Eu(t))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:o});i.resolve(s)}catch{}}}}clearInstance(t=Fe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Fe){return this.instances.has(t)}getOptions(t=Fe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&a.resolve(o)}return o}onInit(t,e){var i;const o=this.normalizeInstanceIdentifier(e),s=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(o,s);const a=this.instances.get(o);return a&&t(a,o),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const o of i)try{o(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Au(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Fe){return this.component?this.component.multipleInstances?t:Fe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Au(n){return n===Fe?void 0:n}function Eu(n){return n.instantiationMode==="EAGER"}/**
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
 */class _u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new wu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Iu={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Tu=Y.INFO,Cu={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Ru=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),o=Cu[t];if(o)console[o](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Tl{constructor(t){this.name=t,this._logLevel=Tu,this._logHandler=Ru,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Iu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Su=(n,t)=>t.some(e=>n instanceof e);let va,ba;function Pu(){return va||(va=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ku(){return ba||(ba=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cl=new WeakMap,Zo=new WeakMap,Rl=new WeakMap,jo=new WeakMap,Er=new WeakMap;function Vu(n){const t=new Promise((e,i)=>{const o=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(xe(n.result)),o()},a=()=>{i(n.error),o()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Cl.set(e,n)}).catch(()=>{}),Er.set(t,n),t}function Du(n){if(Zo.has(n))return;const t=new Promise((e,i)=>{const o=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),o()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Zo.set(n,t)}let Yo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Zo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Rl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return xe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Bu(n){Yo=n(Yo)}function Nu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(qo(this),t,...e);return Rl.set(i,t.sort?t.sort():[t]),xe(i)}:ku().includes(n)?function(...t){return n.apply(qo(this),t),xe(Cl.get(this))}:function(...t){return xe(n.apply(qo(this),t))}}function Lu(n){return typeof n=="function"?Nu(n):(n instanceof IDBTransaction&&Du(n),Su(n,Pu())?new Proxy(n,Yo):n)}function xe(n){if(n instanceof IDBRequest)return Vu(n);if(jo.has(n))return jo.get(n);const t=Lu(n);return t!==n&&(jo.set(n,t),Er.set(t,n)),t}const qo=n=>Er.get(n);function Fu(n,t,{blocked:e,upgrade:i,blocking:o,terminated:s}={}){const a=indexedDB.open(n,t),l=xe(a);return i&&a.addEventListener("upgradeneeded",d=>{i(xe(a.result),d.oldVersion,d.newVersion,xe(a.transaction),d)}),e&&a.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),l.then(d=>{s&&d.addEventListener("close",()=>s()),o&&d.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Mu=["get","getKey","getAll","getAllKeys","count"],zu=["put","add","delete","clear"],Ho=new Map;function xa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ho.get(t))return Ho.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,o=zu.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(o||Mu.includes(e)))return;const s=async function(a,...l){const d=this.transaction(a,o?"readwrite":"readonly");let h=d.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[e](...l),o&&d.done]))[0]};return Ho.set(t,s),s}Bu(n=>({...n,get:(t,e,i)=>xa(t,e)||n.get(t,e,i),has:(t,e)=>!!xa(t,e)||n.has(t,e)}));/**
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
 */class Ou{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ju(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function ju(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const tr="@firebase/app",wa="0.10.13";/**
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
 */const ue=new Tl("@firebase/app"),qu="@firebase/app-compat",Hu="@firebase/analytics-compat",Uu="@firebase/analytics",$u="@firebase/app-check-compat",Qu="@firebase/app-check",Wu="@firebase/auth",Gu="@firebase/auth-compat",Ku="@firebase/database",Xu="@firebase/data-connect",Ju="@firebase/database-compat",Zu="@firebase/functions",Yu="@firebase/functions-compat",th="@firebase/installations",eh="@firebase/installations-compat",nh="@firebase/messaging",ih="@firebase/messaging-compat",oh="@firebase/performance",rh="@firebase/performance-compat",sh="@firebase/remote-config",ah="@firebase/remote-config-compat",lh="@firebase/storage",ch="@firebase/storage-compat",dh="@firebase/firestore",uh="@firebase/vertexai-preview",hh="@firebase/firestore-compat",ph="firebase",fh="10.14.1";/**
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
 */const er="[DEFAULT]",mh={[tr]:"fire-core",[qu]:"fire-core-compat",[Uu]:"fire-analytics",[Hu]:"fire-analytics-compat",[Qu]:"fire-app-check",[$u]:"fire-app-check-compat",[Wu]:"fire-auth",[Gu]:"fire-auth-compat",[Ku]:"fire-rtdb",[Xu]:"fire-data-connect",[Ju]:"fire-rtdb-compat",[Zu]:"fire-fn",[Yu]:"fire-fn-compat",[th]:"fire-iid",[eh]:"fire-iid-compat",[nh]:"fire-fcm",[ih]:"fire-fcm-compat",[oh]:"fire-perf",[rh]:"fire-perf-compat",[sh]:"fire-rc",[ah]:"fire-rc-compat",[lh]:"fire-gcs",[ch]:"fire-gcs-compat",[dh]:"fire-fst",[hh]:"fire-fst-compat",[uh]:"fire-vertex","fire-js":"fire-js",[ph]:"fire-js-all"};/**
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
 */const zi=new Map,gh=new Map,nr=new Map;function Aa(n,t){try{n.container.addComponent(t)}catch(e){ue.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Oi(n){const t=n.name;if(nr.has(t))return ue.debug(`There were multiple attempts to register component ${t}.`),!1;nr.set(t,n);for(const e of zi.values())Aa(e,n);for(const e of gh.values())Aa(e,n);return!0}function yh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const vh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},we=new Il("app","Firebase",vh);/**
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
 */class bh{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}}/**
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
 */const xh=fh;function Sl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:er,automaticDataCollectionEnabled:!1},t),o=i.name;if(typeof o!="string"||!o)throw we.create("bad-app-name",{appName:String(o)});if(e||(e=_l()),!e)throw we.create("no-options");const s=zi.get(o);if(s){if(Jo(e,s.options)&&Jo(i,s.config))return s;throw we.create("duplicate-app",{appName:o})}const a=new _u(o);for(const d of nr.values())a.addComponent(d);const l=new bh(e,i,a);return zi.set(o,l),l}function wh(n=er){const t=zi.get(n);if(!t&&n===er&&_l())return Sl();if(!t)throw we.create("no-app",{appName:n});return t}function nn(n,t,e){var i;let o=(i=mh[n])!==null&&i!==void 0?i:n;e&&(o+=`-${e}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${o}" with version "${t}":`];s&&l.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ue.warn(l.join(" "));return}Oi(new Un(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const Ah="firebase-heartbeat-database",Eh=1,$n="firebase-heartbeat-store";let Uo=null;function Pl(){return Uo||(Uo=Fu(Ah,Eh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore($n)}catch(e){console.warn(e)}}}}).catch(n=>{throw we.create("idb-open",{originalErrorMessage:n.message})})),Uo}async function _h(n){try{const e=(await Pl()).transaction($n),i=await e.objectStore($n).get(kl(n));return await e.done,i}catch(t){if(t instanceof hn)ue.warn(t.message);else{const e=we.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ue.warn(e.message)}}}async function Ea(n,t){try{const i=(await Pl()).transaction($n,"readwrite");await i.objectStore($n).put(t,kl(n)),await i.done}catch(e){if(e instanceof hn)ue.warn(e.message);else{const i=we.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ue.warn(i.message)}}}function kl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ih=1024,Th=30*24*60*60*1e3;class Ch{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Sh(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_a();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Th}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ue.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_a(),{heartbeatsToSend:i,unsentEntries:o}=Rh(this._heartbeatsCache.heartbeats),s=Mi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ue.warn(e),""}}}function _a(){return new Date().toISOString().substring(0,10)}function Rh(n,t=Ih){const e=[];let i=n.slice();for(const o of n){const s=e.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),Ia(e)>t){s.dates.pop();break}}else if(e.push({agent:o.agent,dates:[o.date]}),Ia(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Sh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gu()?yu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await _h(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ea(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ea(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Ia(n){return Mi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ph(n){Oi(new Un("platform-logger",t=>new Ou(t),"PRIVATE")),Oi(new Un("heartbeat",t=>new Ch(t),"PRIVATE")),nn(tr,wa,n),nn(tr,wa,"esm2017"),nn("fire-js","")}Ph("");var kh="firebase",Vh="10.14.1";/**
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
 */nn(kh,Vh,"app");var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ze,Vl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(f,p){function g(){}g.prototype=p.prototype,f.D=p.prototype,f.prototype=new g,f.prototype.constructor=f,f.C=function(x,w,_){for(var v=Array(arguments.length-2),M=2;M<arguments.length;M++)v[M-2]=arguments[M];return p.prototype[w].apply(x,v)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(f,p,g){g||(g=0);var x=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)x[w]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(w=0;16>w;++w)x[w]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=f.g[0],g=f.g[1],w=f.g[2];var _=f.g[3],v=p+(_^g&(w^_))+x[0]+3614090360&4294967295;p=g+(v<<7&4294967295|v>>>25),v=_+(w^p&(g^w))+x[1]+3905402710&4294967295,_=p+(v<<12&4294967295|v>>>20),v=w+(g^_&(p^g))+x[2]+606105819&4294967295,w=_+(v<<17&4294967295|v>>>15),v=g+(p^w&(_^p))+x[3]+3250441966&4294967295,g=w+(v<<22&4294967295|v>>>10),v=p+(_^g&(w^_))+x[4]+4118548399&4294967295,p=g+(v<<7&4294967295|v>>>25),v=_+(w^p&(g^w))+x[5]+1200080426&4294967295,_=p+(v<<12&4294967295|v>>>20),v=w+(g^_&(p^g))+x[6]+2821735955&4294967295,w=_+(v<<17&4294967295|v>>>15),v=g+(p^w&(_^p))+x[7]+4249261313&4294967295,g=w+(v<<22&4294967295|v>>>10),v=p+(_^g&(w^_))+x[8]+1770035416&4294967295,p=g+(v<<7&4294967295|v>>>25),v=_+(w^p&(g^w))+x[9]+2336552879&4294967295,_=p+(v<<12&4294967295|v>>>20),v=w+(g^_&(p^g))+x[10]+4294925233&4294967295,w=_+(v<<17&4294967295|v>>>15),v=g+(p^w&(_^p))+x[11]+2304563134&4294967295,g=w+(v<<22&4294967295|v>>>10),v=p+(_^g&(w^_))+x[12]+1804603682&4294967295,p=g+(v<<7&4294967295|v>>>25),v=_+(w^p&(g^w))+x[13]+4254626195&4294967295,_=p+(v<<12&4294967295|v>>>20),v=w+(g^_&(p^g))+x[14]+2792965006&4294967295,w=_+(v<<17&4294967295|v>>>15),v=g+(p^w&(_^p))+x[15]+1236535329&4294967295,g=w+(v<<22&4294967295|v>>>10),v=p+(w^_&(g^w))+x[1]+4129170786&4294967295,p=g+(v<<5&4294967295|v>>>27),v=_+(g^w&(p^g))+x[6]+3225465664&4294967295,_=p+(v<<9&4294967295|v>>>23),v=w+(p^g&(_^p))+x[11]+643717713&4294967295,w=_+(v<<14&4294967295|v>>>18),v=g+(_^p&(w^_))+x[0]+3921069994&4294967295,g=w+(v<<20&4294967295|v>>>12),v=p+(w^_&(g^w))+x[5]+3593408605&4294967295,p=g+(v<<5&4294967295|v>>>27),v=_+(g^w&(p^g))+x[10]+38016083&4294967295,_=p+(v<<9&4294967295|v>>>23),v=w+(p^g&(_^p))+x[15]+3634488961&4294967295,w=_+(v<<14&4294967295|v>>>18),v=g+(_^p&(w^_))+x[4]+3889429448&4294967295,g=w+(v<<20&4294967295|v>>>12),v=p+(w^_&(g^w))+x[9]+568446438&4294967295,p=g+(v<<5&4294967295|v>>>27),v=_+(g^w&(p^g))+x[14]+3275163606&4294967295,_=p+(v<<9&4294967295|v>>>23),v=w+(p^g&(_^p))+x[3]+4107603335&4294967295,w=_+(v<<14&4294967295|v>>>18),v=g+(_^p&(w^_))+x[8]+1163531501&4294967295,g=w+(v<<20&4294967295|v>>>12),v=p+(w^_&(g^w))+x[13]+2850285829&4294967295,p=g+(v<<5&4294967295|v>>>27),v=_+(g^w&(p^g))+x[2]+4243563512&4294967295,_=p+(v<<9&4294967295|v>>>23),v=w+(p^g&(_^p))+x[7]+1735328473&4294967295,w=_+(v<<14&4294967295|v>>>18),v=g+(_^p&(w^_))+x[12]+2368359562&4294967295,g=w+(v<<20&4294967295|v>>>12),v=p+(g^w^_)+x[5]+4294588738&4294967295,p=g+(v<<4&4294967295|v>>>28),v=_+(p^g^w)+x[8]+2272392833&4294967295,_=p+(v<<11&4294967295|v>>>21),v=w+(_^p^g)+x[11]+1839030562&4294967295,w=_+(v<<16&4294967295|v>>>16),v=g+(w^_^p)+x[14]+4259657740&4294967295,g=w+(v<<23&4294967295|v>>>9),v=p+(g^w^_)+x[1]+2763975236&4294967295,p=g+(v<<4&4294967295|v>>>28),v=_+(p^g^w)+x[4]+1272893353&4294967295,_=p+(v<<11&4294967295|v>>>21),v=w+(_^p^g)+x[7]+4139469664&4294967295,w=_+(v<<16&4294967295|v>>>16),v=g+(w^_^p)+x[10]+3200236656&4294967295,g=w+(v<<23&4294967295|v>>>9),v=p+(g^w^_)+x[13]+681279174&4294967295,p=g+(v<<4&4294967295|v>>>28),v=_+(p^g^w)+x[0]+3936430074&4294967295,_=p+(v<<11&4294967295|v>>>21),v=w+(_^p^g)+x[3]+3572445317&4294967295,w=_+(v<<16&4294967295|v>>>16),v=g+(w^_^p)+x[6]+76029189&4294967295,g=w+(v<<23&4294967295|v>>>9),v=p+(g^w^_)+x[9]+3654602809&4294967295,p=g+(v<<4&4294967295|v>>>28),v=_+(p^g^w)+x[12]+3873151461&4294967295,_=p+(v<<11&4294967295|v>>>21),v=w+(_^p^g)+x[15]+530742520&4294967295,w=_+(v<<16&4294967295|v>>>16),v=g+(w^_^p)+x[2]+3299628645&4294967295,g=w+(v<<23&4294967295|v>>>9),v=p+(w^(g|~_))+x[0]+4096336452&4294967295,p=g+(v<<6&4294967295|v>>>26),v=_+(g^(p|~w))+x[7]+1126891415&4294967295,_=p+(v<<10&4294967295|v>>>22),v=w+(p^(_|~g))+x[14]+2878612391&4294967295,w=_+(v<<15&4294967295|v>>>17),v=g+(_^(w|~p))+x[5]+4237533241&4294967295,g=w+(v<<21&4294967295|v>>>11),v=p+(w^(g|~_))+x[12]+1700485571&4294967295,p=g+(v<<6&4294967295|v>>>26),v=_+(g^(p|~w))+x[3]+2399980690&4294967295,_=p+(v<<10&4294967295|v>>>22),v=w+(p^(_|~g))+x[10]+4293915773&4294967295,w=_+(v<<15&4294967295|v>>>17),v=g+(_^(w|~p))+x[1]+2240044497&4294967295,g=w+(v<<21&4294967295|v>>>11),v=p+(w^(g|~_))+x[8]+1873313359&4294967295,p=g+(v<<6&4294967295|v>>>26),v=_+(g^(p|~w))+x[15]+4264355552&4294967295,_=p+(v<<10&4294967295|v>>>22),v=w+(p^(_|~g))+x[6]+2734768916&4294967295,w=_+(v<<15&4294967295|v>>>17),v=g+(_^(w|~p))+x[13]+1309151649&4294967295,g=w+(v<<21&4294967295|v>>>11),v=p+(w^(g|~_))+x[4]+4149444226&4294967295,p=g+(v<<6&4294967295|v>>>26),v=_+(g^(p|~w))+x[11]+3174756917&4294967295,_=p+(v<<10&4294967295|v>>>22),v=w+(p^(_|~g))+x[2]+718787259&4294967295,w=_+(v<<15&4294967295|v>>>17),v=g+(_^(w|~p))+x[9]+3951481745&4294967295,f.g[0]=f.g[0]+p&4294967295,f.g[1]=f.g[1]+(w+(v<<21&4294967295|v>>>11))&4294967295,f.g[2]=f.g[2]+w&4294967295,f.g[3]=f.g[3]+_&4294967295}i.prototype.u=function(f,p){p===void 0&&(p=f.length);for(var g=p-this.blockSize,x=this.B,w=this.h,_=0;_<p;){if(w==0)for(;_<=g;)o(this,f,_),_+=this.blockSize;if(typeof f=="string"){for(;_<p;)if(x[w++]=f.charCodeAt(_++),w==this.blockSize){o(this,x),w=0;break}}else for(;_<p;)if(x[w++]=f[_++],w==this.blockSize){o(this,x),w=0;break}}this.h=w,this.o+=p},i.prototype.v=function(){var f=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);f[0]=128;for(var p=1;p<f.length-8;++p)f[p]=0;var g=8*this.o;for(p=f.length-8;p<f.length;++p)f[p]=g&255,g/=256;for(this.u(f),f=Array(16),p=g=0;4>p;++p)for(var x=0;32>x;x+=8)f[g++]=this.g[p]>>>x&255;return f};function s(f,p){var g=l;return Object.prototype.hasOwnProperty.call(g,f)?g[f]:g[f]=p(f)}function a(f,p){this.h=p;for(var g=[],x=!0,w=f.length-1;0<=w;w--){var _=f[w]|0;x&&_==p||(g[w]=_,x=!1)}this.g=g}var l={};function d(f){return-128<=f&&128>f?s(f,function(p){return new a([p|0],0>p?-1:0)}):new a([f|0],0>f?-1:0)}function h(f){if(isNaN(f)||!isFinite(f))return m;if(0>f)return S(h(-f));for(var p=[],g=1,x=0;f>=g;x++)p[x]=f/g|0,g*=4294967296;return new a(p,0)}function b(f,p){if(f.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(f.charAt(0)=="-")return S(b(f.substring(1),p));if(0<=f.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(p,8)),x=m,w=0;w<f.length;w+=8){var _=Math.min(8,f.length-w),v=parseInt(f.substring(w,w+_),p);8>_?(_=h(Math.pow(p,_)),x=x.j(_).add(h(v))):(x=x.j(g),x=x.add(h(v)))}return x}var m=d(0),y=d(1),E=d(16777216);n=a.prototype,n.m=function(){if(R(this))return-S(this).m();for(var f=0,p=1,g=0;g<this.g.length;g++){var x=this.i(g);f+=(0<=x?x:4294967296+x)*p,p*=4294967296}return f},n.toString=function(f){if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(I(this))return"0";if(R(this))return"-"+S(this).toString(f);for(var p=h(Math.pow(f,6)),g=this,x="";;){var w=j(g,p).g;g=D(g,w.j(p));var _=((0<g.g.length?g.g[0]:g.h)>>>0).toString(f);if(g=w,I(g))return _+x;for(;6>_.length;)_="0"+_;x=_+x}},n.i=function(f){return 0>f?0:f<this.g.length?this.g[f]:this.h};function I(f){if(f.h!=0)return!1;for(var p=0;p<f.g.length;p++)if(f.g[p]!=0)return!1;return!0}function R(f){return f.h==-1}n.l=function(f){return f=D(this,f),R(f)?-1:I(f)?0:1};function S(f){for(var p=f.g.length,g=[],x=0;x<p;x++)g[x]=~f.g[x];return new a(g,~f.h).add(y)}n.abs=function(){return R(this)?S(this):this},n.add=function(f){for(var p=Math.max(this.g.length,f.g.length),g=[],x=0,w=0;w<=p;w++){var _=x+(this.i(w)&65535)+(f.i(w)&65535),v=(_>>>16)+(this.i(w)>>>16)+(f.i(w)>>>16);x=v>>>16,_&=65535,v&=65535,g[w]=v<<16|_}return new a(g,g[g.length-1]&-2147483648?-1:0)};function D(f,p){return f.add(S(p))}n.j=function(f){if(I(this)||I(f))return m;if(R(this))return R(f)?S(this).j(S(f)):S(S(this).j(f));if(R(f))return S(this.j(S(f)));if(0>this.l(E)&&0>f.l(E))return h(this.m()*f.m());for(var p=this.g.length+f.g.length,g=[],x=0;x<2*p;x++)g[x]=0;for(x=0;x<this.g.length;x++)for(var w=0;w<f.g.length;w++){var _=this.i(x)>>>16,v=this.i(x)&65535,M=f.i(w)>>>16,L=f.i(w)&65535;g[2*x+2*w]+=v*L,B(g,2*x+2*w),g[2*x+2*w+1]+=_*L,B(g,2*x+2*w+1),g[2*x+2*w+1]+=v*M,B(g,2*x+2*w+1),g[2*x+2*w+2]+=_*M,B(g,2*x+2*w+2)}for(x=0;x<p;x++)g[x]=g[2*x+1]<<16|g[2*x];for(x=p;x<2*p;x++)g[x]=0;return new a(g,0)};function B(f,p){for(;(f[p]&65535)!=f[p];)f[p+1]+=f[p]>>>16,f[p]&=65535,p++}function N(f,p){this.g=f,this.h=p}function j(f,p){if(I(p))throw Error("division by zero");if(I(f))return new N(m,m);if(R(f))return p=j(S(f),p),new N(S(p.g),S(p.h));if(R(p))return p=j(f,S(p)),new N(S(p.g),p.h);if(30<f.g.length){if(R(f)||R(p))throw Error("slowDivide_ only works with positive integers.");for(var g=y,x=p;0>=x.l(f);)g=z(g),x=z(x);var w=T(g,1),_=T(x,1);for(x=T(x,2),g=T(g,2);!I(x);){var v=_.add(x);0>=v.l(f)&&(w=w.add(g),_=v),x=T(x,1),g=T(g,1)}return p=D(f,w.j(p)),new N(w,p)}for(w=m;0<=f.l(p);){for(g=Math.max(1,Math.floor(f.m()/p.m())),x=Math.ceil(Math.log(g)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),_=h(g),v=_.j(p);R(v)||0<v.l(f);)g-=x,_=h(g),v=_.j(p);I(_)&&(_=y),w=w.add(_),f=D(f,v)}return new N(w,f)}n.A=function(f){return j(this,f).h},n.and=function(f){for(var p=Math.max(this.g.length,f.g.length),g=[],x=0;x<p;x++)g[x]=this.i(x)&f.i(x);return new a(g,this.h&f.h)},n.or=function(f){for(var p=Math.max(this.g.length,f.g.length),g=[],x=0;x<p;x++)g[x]=this.i(x)|f.i(x);return new a(g,this.h|f.h)},n.xor=function(f){for(var p=Math.max(this.g.length,f.g.length),g=[],x=0;x<p;x++)g[x]=this.i(x)^f.i(x);return new a(g,this.h^f.h)};function z(f){for(var p=f.g.length+1,g=[],x=0;x<p;x++)g[x]=f.i(x)<<1|f.i(x-1)>>>31;return new a(g,f.h)}function T(f,p){var g=p>>5;p%=32;for(var x=f.g.length-g,w=[],_=0;_<x;_++)w[_]=0<p?f.i(_+g)>>>p|f.i(_+g+1)<<32-p:f.i(_+g);return new a(w,f.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Vl=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=b,ze=a}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});var Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dl,Ln,Bl,Vi,ir,Nl,Ll,Fl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,c,u){return r==Array.prototype||r==Object.prototype||(r[c]=u.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ci=="object"&&Ci];for(var c=0;c<r.length;++c){var u=r[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=e(this);function o(r,c){if(c)t:{var u=i;r=r.split(".");for(var A=0;A<r.length-1;A++){var C=r[A];if(!(C in u))break t;u=u[C]}r=r[r.length-1],A=u[r],c=c(A),c!=A&&c!=null&&t(u,r,{configurable:!0,writable:!0,value:c})}}function s(r,c){r instanceof String&&(r+="");var u=0,A=!1,C={next:function(){if(!A&&u<r.length){var P=u++;return{value:c(P,r[P]),done:!1}}return A=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}o("Array.prototype.values",function(r){return r||function(){return s(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function d(r){var c=typeof r;return c=c!="object"?c:r?Array.isArray(r)?"array":c:"null",c=="array"||c=="object"&&typeof r.length=="number"}function h(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function b(r,c,u){return r.call.apply(r.bind,arguments)}function m(r,c,u){if(!r)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,A),r.apply(c,C)}}return function(){return r.apply(c,arguments)}}function y(r,c,u){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:m,y.apply(null,arguments)}function E(r,c){var u=Array.prototype.slice.call(arguments,1);return function(){var A=u.slice();return A.push.apply(A,arguments),r.apply(this,A)}}function I(r,c){function u(){}u.prototype=c.prototype,r.aa=c.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(A,C,P){for(var F=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)F[rt-2]=arguments[rt];return c.prototype[C].apply(A,F)}}function R(r){const c=r.length;if(0<c){const u=Array(c);for(let A=0;A<c;A++)u[A]=r[A];return u}return[]}function S(r,c){for(let u=1;u<arguments.length;u++){const A=arguments[u];if(d(A)){const C=r.length||0,P=A.length||0;r.length=C+P;for(let F=0;F<P;F++)r[C+F]=A[F]}else r.push(A)}}class D{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function B(r){return/^[\s\xa0]*$/.test(r)}function N(){var r=l.navigator;return r&&(r=r.userAgent)?r:""}function j(r){return j[" "](r),r}j[" "]=function(){};var z=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function T(r,c,u){for(const A in r)c.call(u,r[A],A,r)}function f(r,c){for(const u in r)c.call(void 0,r[u],u,r)}function p(r){const c={};for(const u in r)c[u]=r[u];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(r,c){let u,A;for(let C=1;C<arguments.length;C++){A=arguments[C];for(u in A)r[u]=A[u];for(let P=0;P<g.length;P++)u=g[P],Object.prototype.hasOwnProperty.call(A,u)&&(r[u]=A[u])}}function w(r){var c=1;r=r.split(":");const u=[];for(;0<c&&r.length;)u.push(r.shift()),c--;return r.length&&u.push(r.join(":")),u}function _(r){l.setTimeout(()=>{throw r},0)}function v(){var r=dt;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class M{constructor(){this.h=this.g=null}add(c,u){const A=L.get();A.set(c,u),this.h?this.h.next=A:this.g=A,this.h=A}}var L=new D(()=>new $,r=>r.reset());class ${constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let X,q=!1,dt=new M,at=()=>{const r=l.Promise.resolve(void 0);X=()=>{r.then(Nt)}};var Nt=()=>{for(var r;r=v();){try{r.h.call(r.g)}catch(u){_(u)}var c=L;c.j(r),100>c.h&&(c.h++,r.next=c.g,c.g=r)}q=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var Qt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return r}();function jt(r,c){if(ot.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,A=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget){if(z){t:{try{j(c.nodeName);var C=!0;break t}catch{}C=!1}C||(c=null)}}else u=="mouseover"?c=r.fromElement:u=="mouseout"&&(c=r.toElement);this.relatedTarget=c,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Pe[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&jt.aa.h.call(this)}}I(jt,ot);var Pe={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var ee="closure_listenable_"+(1e6*Math.random()|0),Wt=0;function ne(r,c,u,A,C){this.listener=r,this.proxy=null,this.src=c,this.type=u,this.capture=!!A,this.ha=C,this.key=++Wt,this.da=this.fa=!1}function Ct(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function Rt(r){this.src=r,this.g={},this.h=0}Rt.prototype.add=function(r,c,u,A,C){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var F=ke(r,c,A,C);return-1<F?(c=r[F],u||(c.fa=!1)):(c=new ne(c,this.src,P,!!A,C),c.fa=u,r.push(c)),c};function ae(r,c){var u=c.type;if(u in r.g){var A=r.g[u],C=Array.prototype.indexOf.call(A,c,void 0),P;(P=0<=C)&&Array.prototype.splice.call(A,C,1),P&&(Ct(c),r.g[u].length==0&&(delete r.g[u],r.h--))}}function ke(r,c,u,A){for(var C=0;C<r.length;++C){var P=r[C];if(!P.da&&P.listener==c&&P.capture==!!u&&P.ha==A)return C}return-1}var Ve="closure_lm_"+(1e6*Math.random()|0),wo={};function ys(r,c,u,A,C){if(Array.isArray(c)){for(var P=0;P<c.length;P++)ys(r,c[P],u,A,C);return null}return u=xs(u),r&&r[ee]?r.K(c,u,h(A)?!!A.capture:!1,C):Td(r,c,u,!1,A,C)}function Td(r,c,u,A,C,P){if(!c)throw Error("Invalid event type");var F=h(C)?!!C.capture:!!C,rt=Eo(r);if(rt||(r[Ve]=rt=new Rt(r)),u=rt.add(c,u,A,F,P),u.proxy)return u;if(A=Cd(),u.proxy=A,A.src=r,A.listener=u,r.addEventListener)Qt||(C=F),C===void 0&&(C=!1),r.addEventListener(c.toString(),A,C);else if(r.attachEvent)r.attachEvent(bs(c.toString()),A);else if(r.addListener&&r.removeListener)r.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Cd(){function r(u){return c.call(r.src,r.listener,u)}const c=Rd;return r}function vs(r,c,u,A,C){if(Array.isArray(c))for(var P=0;P<c.length;P++)vs(r,c[P],u,A,C);else A=h(A)?!!A.capture:!!A,u=xs(u),r&&r[ee]?(r=r.i,c=String(c).toString(),c in r.g&&(P=r.g[c],u=ke(P,u,A,C),-1<u&&(Ct(P[u]),Array.prototype.splice.call(P,u,1),P.length==0&&(delete r.g[c],r.h--)))):r&&(r=Eo(r))&&(c=r.g[c.toString()],r=-1,c&&(r=ke(c,u,A,C)),(u=-1<r?c[r]:null)&&Ao(u))}function Ao(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[ee])ae(c.i,r);else{var u=r.type,A=r.proxy;c.removeEventListener?c.removeEventListener(u,A,r.capture):c.detachEvent?c.detachEvent(bs(u),A):c.addListener&&c.removeListener&&c.removeListener(A),(u=Eo(c))?(ae(u,r),u.h==0&&(u.src=null,c[Ve]=null)):Ct(r)}}}function bs(r){return r in wo?wo[r]:wo[r]="on"+r}function Rd(r,c){if(r.da)r=!0;else{c=new jt(c,this);var u=r.listener,A=r.ha||r.src;r.fa&&Ao(r),r=u.call(A,c)}return r}function Eo(r){return r=r[Ve],r instanceof Rt?r:null}var _o="__closure_events_fn_"+(1e9*Math.random()>>>0);function xs(r){return typeof r=="function"?r:(r[_o]||(r[_o]=function(c){return r.handleEvent(c)}),r[_o])}function St(){lt.call(this),this.i=new Rt(this),this.M=this,this.F=null}I(St,lt),St.prototype[ee]=!0,St.prototype.removeEventListener=function(r,c,u,A){vs(this,r,c,u,A)};function Lt(r,c){var u,A=r.F;if(A)for(u=[];A;A=A.F)u.push(A);if(r=r.M,A=c.type||c,typeof c=="string")c=new ot(c,r);else if(c instanceof ot)c.target=c.target||r;else{var C=c;c=new ot(A,r),x(c,C)}if(C=!0,u)for(var P=u.length-1;0<=P;P--){var F=c.g=u[P];C=ui(F,A,!0,c)&&C}if(F=c.g=r,C=ui(F,A,!0,c)&&C,C=ui(F,A,!1,c)&&C,u)for(P=0;P<u.length;P++)F=c.g=u[P],C=ui(F,A,!1,c)&&C}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var r=this.i,c;for(c in r.g){for(var u=r.g[c],A=0;A<u.length;A++)Ct(u[A]);delete r.g[c],r.h--}}this.F=null},St.prototype.K=function(r,c,u,A){return this.i.add(String(r),c,!1,u,A)},St.prototype.L=function(r,c,u,A){return this.i.add(String(r),c,!0,u,A)};function ui(r,c,u,A){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,P=0;P<c.length;++P){var F=c[P];if(F&&!F.da&&F.capture==u){var rt=F.listener,wt=F.ha||F.src;F.fa&&ae(r.i,F),C=rt.call(wt,A)!==!1&&C}}return C&&!A.defaultPrevented}function ws(r,c,u){if(typeof r=="function")u&&(r=y(r,u));else if(r&&typeof r.handleEvent=="function")r=y(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(r,c||0)}function As(r){r.g=ws(()=>{r.g=null,r.i&&(r.i=!1,As(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class Sd extends lt{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:As(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wn(r){lt.call(this),this.h=r,this.g={}}I(wn,lt);var Es=[];function _s(r){T(r.g,function(c,u){this.g.hasOwnProperty(u)&&Ao(c)},r),r.g={}}wn.prototype.N=function(){wn.aa.N.call(this),_s(this)},wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Io=l.JSON.stringify,Pd=l.JSON.parse,kd=class{stringify(r){return l.JSON.stringify(r,void 0)}parse(r){return l.JSON.parse(r,void 0)}};function To(){}To.prototype.h=null;function Is(r){return r.h||(r.h=r.i())}function Ts(){}var An={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Co(){ot.call(this,"d")}I(Co,ot);function Ro(){ot.call(this,"c")}I(Ro,ot);var De={},Cs=null;function hi(){return Cs=Cs||new St}De.La="serverreachability";function Rs(r){ot.call(this,De.La,r)}I(Rs,ot);function En(r){const c=hi();Lt(c,new Rs(c))}De.STAT_EVENT="statevent";function Ss(r,c){ot.call(this,De.STAT_EVENT,r),this.stat=c}I(Ss,ot);function Ft(r){const c=hi();Lt(c,new Ss(c,r))}De.Ma="timingevent";function Ps(r,c){ot.call(this,De.Ma,r),this.size=c}I(Ps,ot);function _n(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){r()},c)}function In(){this.g=!0}In.prototype.xa=function(){this.g=!1};function Vd(r,c,u,A,C,P){r.info(function(){if(r.g)if(P)for(var F="",rt=P.split("&"),wt=0;wt<rt.length;wt++){var et=rt[wt].split("=");if(1<et.length){var Pt=et[0];et=et[1];var kt=Pt.split("_");F=2<=kt.length&&kt[1]=="type"?F+(Pt+"="+et+"&"):F+(Pt+"=redacted&")}}else F=null;else F=P;return"XMLHTTP REQ ("+A+") [attempt "+C+"]: "+c+`
`+u+`
`+F})}function Dd(r,c,u,A,C,P,F){r.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+C+"]: "+c+`
`+u+`
`+P+" "+F})}function We(r,c,u,A){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+Nd(r,u)+(A?" "+A:"")})}function Bd(r,c){r.info(function(){return"TIMEOUT: "+c})}In.prototype.info=function(){};function Nd(r,c){if(!r.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var A=u[r];if(!(2>A.length)){var C=A[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var F=1;F<C.length;F++)C[F]=""}}}}return Io(u)}catch{return c}}var pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ks={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},So;function fi(){}I(fi,To),fi.prototype.g=function(){return new XMLHttpRequest},fi.prototype.i=function(){return{}},So=new fi;function fe(r,c,u,A){this.j=r,this.i=c,this.l=u,this.R=A||1,this.U=new wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vs}function Vs(){this.i=null,this.g="",this.h=!1}var Ds={},Po={};function ko(r,c,u){r.L=1,r.v=vi(le(c)),r.m=u,r.P=!0,Bs(r,null)}function Bs(r,c){r.F=Date.now(),mi(r),r.A=le(r.v);var u=r.A,A=r.R;Array.isArray(A)||(A=[String(A)]),Gs(u.i,"t",A),r.C=0,u=r.j.J,r.h=new Vs,r.g=ha(r.j,u?c:null,!r.m),0<r.O&&(r.M=new Sd(y(r.Y,r,r.g),r.O)),c=r.U,u=r.g,A=r.ca;var C="readystatechange";Array.isArray(C)||(C&&(Es[0]=C.toString()),C=Es);for(var P=0;P<C.length;P++){var F=ys(u,C[P],A||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=r.H?p(r.H):{},r.m?(r.u||(r.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,c)):(r.u="GET",r.g.ea(r.A,r.u,null,c)),En(),Vd(r.i,r.u,r.A,r.l,r.R,r.m)}fe.prototype.ca=function(r){r=r.target;const c=this.M;c&&ce(r)==3?c.j():this.Y(r)},fe.prototype.Y=function(r){try{if(r==this.g)t:{const kt=ce(this.g);var c=this.g.Ba();const Xe=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||ea(this.g)))){this.J||kt!=4||c==7||(c==8||0>=Xe?En(3):En(2)),Vo(this);var u=this.g.Z();this.X=u;e:if(Ns(this)){var A=ea(this.g);r="";var C=A.length,P=ce(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Be(this),Tn(this);var F="";break e}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,r+=this.h.i.decode(A[c],{stream:!(P&&c==C-1)});A.length=0,this.h.g+=r,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=u==200,Dd(this.i,this.u,this.A,this.l,this.R,kt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var rt,wt=this.g;if((rt=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(rt)){var et=rt;break e}}et=null}if(u=et)We(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Do(this,u);else{this.o=!1,this.s=3,Ft(12),Be(this),Tn(this);break t}}if(this.P){u=!0;let Gt;for(;!this.J&&this.C<F.length;)if(Gt=Ld(this,F),Gt==Po){kt==4&&(this.s=4,Ft(14),u=!1),We(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Ds){this.s=4,Ft(15),We(this.i,this.l,F,"[Invalid Chunk]"),u=!1;break}else We(this.i,this.l,Gt,null),Do(this,Gt);if(Ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||F.length!=0||this.h.h||(this.s=1,Ft(16),u=!1),this.o=this.o&&u,!u)We(this.i,this.l,F,"[Invalid Chunked Response]"),Be(this),Tn(this);else if(0<F.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),zo(Pt),Pt.M=!0,Ft(11))}}else We(this.i,this.l,F,null),Do(this,F);kt==4&&Be(this),this.o&&!this.J&&(kt==4?la(this.j,this):(this.o=!1,mi(this)))}else Yd(this.g),u==400&&0<F.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),Be(this),Tn(this)}}}catch{}finally{}};function Ns(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Ld(r,c){var u=r.C,A=c.indexOf(`
`,u);return A==-1?Po:(u=Number(c.substring(u,A)),isNaN(u)?Ds:(A+=1,A+u>c.length?Po:(c=c.slice(A,A+u),r.C=A+u,c)))}fe.prototype.cancel=function(){this.J=!0,Be(this)};function mi(r){r.S=Date.now()+r.I,Ls(r,r.I)}function Ls(r,c){if(r.B!=null)throw Error("WatchDog timer not null");r.B=_n(y(r.ba,r),c)}function Vo(r){r.B&&(l.clearTimeout(r.B),r.B=null)}fe.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Bd(this.i,this.A),this.L!=2&&(En(),Ft(17)),Be(this),this.s=2,Tn(this)):Ls(this,this.S-r)};function Tn(r){r.j.G==0||r.J||la(r.j,r)}function Be(r){Vo(r);var c=r.M;c&&typeof c.ma=="function"&&c.ma(),r.M=null,_s(r.U),r.g&&(c=r.g,r.g=null,c.abort(),c.ma())}function Do(r,c){try{var u=r.j;if(u.G!=0&&(u.g==r||Bo(u.h,r))){if(!r.K&&Bo(u.h,r)&&u.G==3){try{var A=u.Da.g.parse(c)}catch{A=null}if(Array.isArray(A)&&A.length==3){var C=A;if(C[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)_i(u),Ai(u);else break t;Mo(u),Ft(18)}}else u.za=C[1],0<u.za-u.T&&37500>C[2]&&u.F&&u.v==0&&!u.C&&(u.C=_n(y(u.Za,u),6e3));if(1>=zs(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Le(u,11)}else if((r.K||u.g==r)&&_i(u),!B(c))for(C=u.Da.g.parse(c),c=0;c<C.length;c++){let et=C[c];if(u.T=et[0],et=et[1],u.G==2)if(et[0]=="c"){u.K=et[1],u.ia=et[2];const Pt=et[3];Pt!=null&&(u.la=Pt,u.j.info("VER="+u.la));const kt=et[4];kt!=null&&(u.Aa=kt,u.j.info("SVER="+u.Aa));const Xe=et[5];Xe!=null&&typeof Xe=="number"&&0<Xe&&(A=1.5*Xe,u.L=A,u.j.info("backChannelRequestTimeoutMs_="+A)),A=u;const Gt=r.g;if(Gt){const Ti=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ti){var P=A.h;P.g||Ti.indexOf("spdy")==-1&&Ti.indexOf("quic")==-1&&Ti.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(No(P,P.h),P.h=null))}if(A.D){const Oo=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(A.ya=Oo,ct(A.I,A.D,Oo))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),A=u;var F=r;if(A.qa=ua(A,A.J?A.ia:null,A.W),F.K){Os(A.h,F);var rt=F,wt=A.L;wt&&(rt.I=wt),rt.B&&(Vo(rt),mi(rt)),A.g=F}else sa(A);0<u.i.length&&Ei(u)}else et[0]!="stop"&&et[0]!="close"||Le(u,7);else u.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?Le(u,7):Fo(u):et[0]!="noop"&&u.l&&u.l.ta(et),u.v=0)}}En(4)}catch{}}var Fd=class{constructor(r,c){this.g=r,this.map=c}};function Fs(r){this.l=r||10,l.PerformanceNavigationTiming?(r=l.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ms(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function zs(r){return r.h?1:r.g?r.g.size:0}function Bo(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function No(r,c){r.g?r.g.add(c):r.h=c}function Os(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}Fs.prototype.cancel=function(){if(this.i=js(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function js(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const u of r.g.values())c=c.concat(u.D);return c}return R(r.i)}function Md(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(d(r)){for(var c=[],u=r.length,A=0;A<u;A++)c.push(r[A]);return c}c=[],u=0;for(A in r)c[u++]=r[A];return c}function zd(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(d(r)||typeof r=="string"){var c=[];r=r.length;for(var u=0;u<r;u++)c.push(u);return c}c=[],u=0;for(const A in r)c[u++]=A;return c}}}function qs(r,c){if(r.forEach&&typeof r.forEach=="function")r.forEach(c,void 0);else if(d(r)||typeof r=="string")Array.prototype.forEach.call(r,c,void 0);else for(var u=zd(r),A=Md(r),C=A.length,P=0;P<C;P++)c.call(void 0,A[P],u&&u[P],r)}var Hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Od(r,c){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var A=r[u].indexOf("="),C=null;if(0<=A){var P=r[u].substring(0,A);C=r[u].substring(A+1)}else P=r[u];c(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Ne(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ne){this.h=r.h,gi(this,r.j),this.o=r.o,this.g=r.g,yi(this,r.s),this.l=r.l;var c=r.i,u=new Sn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),Us(this,u),this.m=r.m}else r&&(c=String(r).match(Hs))?(this.h=!1,gi(this,c[1]||"",!0),this.o=Cn(c[2]||""),this.g=Cn(c[3]||"",!0),yi(this,c[4]),this.l=Cn(c[5]||"",!0),Us(this,c[6]||"",!0),this.m=Cn(c[7]||"")):(this.h=!1,this.i=new Sn(null,this.h))}Ne.prototype.toString=function(){var r=[],c=this.j;c&&r.push(Rn(c,$s,!0),":");var u=this.g;return(u||c=="file")&&(r.push("//"),(c=this.o)&&r.push(Rn(c,$s,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Rn(u,u.charAt(0)=="/"?Hd:qd,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Rn(u,$d)),r.join("")};function le(r){return new Ne(r)}function gi(r,c,u){r.j=u?Cn(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function yi(r,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);r.s=c}else r.s=null}function Us(r,c,u){c instanceof Sn?(r.i=c,Qd(r.i,r.h)):(u||(c=Rn(c,Ud)),r.i=new Sn(c,r.h))}function ct(r,c,u){r.i.set(c,u)}function vi(r){return ct(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Cn(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Rn(r,c,u){return typeof r=="string"?(r=encodeURI(r).replace(c,jd),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function jd(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var $s=/[#\/\?@]/g,qd=/[#\?:]/g,Hd=/[#\?]/g,Ud=/[#\?@]/g,$d=/#/g;function Sn(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function me(r){r.g||(r.g=new Map,r.h=0,r.i&&Od(r.i,function(c,u){r.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Sn.prototype,n.add=function(r,c){me(this),this.i=null,r=Ge(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(c),this.h+=1,this};function Qs(r,c){me(r),c=Ge(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function Ws(r,c){return me(r),c=Ge(r,c),r.g.has(c)}n.forEach=function(r,c){me(this),this.g.forEach(function(u,A){u.forEach(function(C){r.call(c,C,A,this)},this)},this)},n.na=function(){me(this);const r=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let A=0;A<c.length;A++){const C=r[A];for(let P=0;P<C.length;P++)u.push(c[A])}return u},n.V=function(r){me(this);let c=[];if(typeof r=="string")Ws(this,r)&&(c=c.concat(this.g.get(Ge(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)c=c.concat(r[u])}return c},n.set=function(r,c){return me(this),this.i=null,r=Ge(this,r),Ws(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},n.get=function(r,c){return r?(r=this.V(r),0<r.length?String(r[0]):c):c};function Gs(r,c,u){Qs(r,c),0<u.length&&(r.i=null,r.g.set(Ge(r,c),R(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var A=c[u];const P=encodeURIComponent(String(A)),F=this.V(A);for(A=0;A<F.length;A++){var C=P;F[A]!==""&&(C+="="+encodeURIComponent(String(F[A]))),r.push(C)}}return this.i=r.join("&")};function Ge(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function Qd(r,c){c&&!r.j&&(me(r),r.i=null,r.g.forEach(function(u,A){var C=A.toLowerCase();A!=C&&(Qs(this,A),Gs(this,C,u))},r)),r.j=c}function Wd(r,c){const u=new In;if(l.Image){const A=new Image;A.onload=E(ge,u,"TestLoadImage: loaded",!0,c,A),A.onerror=E(ge,u,"TestLoadImage: error",!1,c,A),A.onabort=E(ge,u,"TestLoadImage: abort",!1,c,A),A.ontimeout=E(ge,u,"TestLoadImage: timeout",!1,c,A),l.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=r}else c(!1)}function Gd(r,c){const u=new In,A=new AbortController,C=setTimeout(()=>{A.abort(),ge(u,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:A.signal}).then(P=>{clearTimeout(C),P.ok?ge(u,"TestPingServer: ok",!0,c):ge(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),ge(u,"TestPingServer: error",!1,c)})}function ge(r,c,u,A,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),A(u)}catch{}}function Kd(){this.g=new kd}function Xd(r,c,u){const A=u||"";try{qs(r,function(C,P){let F=C;h(C)&&(F=Io(C)),c.push(A+P+"="+encodeURIComponent(F))})}catch(C){throw c.push(A+"type="+encodeURIComponent("_badmap")),C}}function bi(r){this.l=r.Ub||null,this.j=r.eb||!1}I(bi,To),bi.prototype.g=function(){return new xi(this.l,this.j)},bi.prototype.i=function(r){return function(){return r}}({});function xi(r,c){St.call(this),this.D=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(xi,St),n=xi.prototype,n.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=c,this.readyState=1,kn(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(c.body=r),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ks(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ks(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?Pn(this):kn(this),this.readyState==3&&Ks(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Pn(this))},n.Qa=function(r){this.g&&(this.response=r,Pn(this))},n.ga=function(){this.g&&Pn(this)};function Pn(r){r.readyState=4,r.l=null,r.j=null,r.v=null,kn(r)}n.setRequestHeader=function(r,c){this.u.append(r,c)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=c.next();return r.join(`\r
`)};function kn(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Xs(r){let c="";return T(r,function(u,A){c+=A,c+=":",c+=u,c+=`\r
`}),c}function Lo(r,c,u){t:{for(A in u){var A=!1;break t}A=!0}A||(u=Xs(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):ct(r,c,u))}function ht(r){St.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(ht,St);var Jd=/^https?$/i,Zd=["POST","PUT"];n=ht.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,c,u,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():So.g(),this.v=this.o?Is(this.o):Is(So),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(P){Js(this,P);return}if(r=u||"",u=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var C in A)u.set(C,A[C]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const P of A.keys())u.set(P,A.get(P));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(u.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&r instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Zd,c,void 0))||A||C||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,F]of u)this.g.setRequestHeader(P,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ta(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){Js(this,P)}};function Js(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.m=5,Zs(r),wi(r)}function Zs(r){r.A||(r.A=!0,Lt(r,"complete"),Lt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,Lt(this,"complete"),Lt(this,"abort"),wi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wi(this,!0)),ht.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ys(this):this.bb())},n.bb=function(){Ys(this)};function Ys(r){if(r.h&&typeof a<"u"&&(!r.v[1]||ce(r)!=4||r.Z()!=2)){if(r.u&&ce(r)==4)ws(r.Ea,0,r);else if(Lt(r,"readystatechange"),ce(r)==4){r.h=!1;try{const F=r.Z();t:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var A;if(A=F===0){var C=String(r.D).match(Hs)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),A=!Jd.test(C?C.toLowerCase():"")}u=A}if(u)Lt(r,"complete"),Lt(r,"success");else{r.m=6;try{var P=2<ce(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",Zs(r)}}finally{wi(r)}}}}function wi(r,c){if(r.g){ta(r);const u=r.g,A=r.v[0]?()=>{}:null;r.g=null,r.v=null,c||Lt(r,"ready");try{u.onreadystatechange=A}catch{}}}function ta(r){r.I&&(l.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function ce(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<ce(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),Pd(c)}};function ea(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Yd(r){const c={};r=(r.g&&2<=ce(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<r.length;A++){if(B(r[A]))continue;var u=w(r[A]);const C=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const P=c[C]||[];c[C]=P,P.push(u)}f(c,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vn(r,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||c}function na(r){this.Aa=0,this.i=[],this.j=new In,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vn("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vn("baseRetryDelayMs",5e3,r),this.cb=Vn("retryDelaySeedMs",1e4,r),this.Wa=Vn("forwardChannelMaxRetries",2,r),this.wa=Vn("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Fs(r&&r.concurrentRequestLimit),this.Da=new Kd,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=na.prototype,n.la=8,n.G=1,n.connect=function(r,c,u,A){Ft(0),this.W=r,this.H=c||{},u&&A!==void 0&&(this.H.OSID=u,this.H.OAID=A),this.F=this.X,this.I=ua(this,null,this.W),Ei(this)};function Fo(r){if(ia(r),r.G==3){var c=r.U++,u=le(r.I);if(ct(u,"SID",r.K),ct(u,"RID",c),ct(u,"TYPE","terminate"),Dn(r,u),c=new fe(r,r.j,c),c.L=2,c.v=vi(le(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=ha(c.j,null),c.g.ea(c.v)),c.F=Date.now(),mi(c)}da(r)}function Ai(r){r.g&&(zo(r),r.g.cancel(),r.g=null)}function ia(r){Ai(r),r.u&&(l.clearTimeout(r.u),r.u=null),_i(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&l.clearTimeout(r.s),r.s=null)}function Ei(r){if(!Ms(r.h)&&!r.s){r.s=!0;var c=r.Ga;X||at(),q||(X(),q=!0),dt.add(c,r),r.B=0}}function tu(r,c){return zs(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=c.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=_n(y(r.Ga,r,c),ca(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const C=new fe(this,this.j,r);let P=this.o;if(this.S&&(P?(P=p(P),x(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var A=this.i[u];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(c+=A,4096<c){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=ra(this,C,c),u=le(this.I),ct(u,"RID",r),ct(u,"CVER",22),this.D&&ct(u,"X-HTTP-Session-Id",this.D),Dn(this,u),P&&(this.O?c="headers="+encodeURIComponent(String(Xs(P)))+"&"+c:this.m&&Lo(u,this.m,P)),No(this.h,C),this.Ua&&ct(u,"TYPE","init"),this.P?(ct(u,"$req",c),ct(u,"SID","null"),C.T=!0,ko(C,u,null)):ko(C,u,c),this.G=2}}else this.G==3&&(r?oa(this,r):this.i.length==0||Ms(this.h)||oa(this))};function oa(r,c){var u;c?u=c.l:u=r.U++;const A=le(r.I);ct(A,"SID",r.K),ct(A,"RID",u),ct(A,"AID",r.T),Dn(r,A),r.m&&r.o&&Lo(A,r.m,r.o),u=new fe(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),c&&(r.i=c.D.concat(r.i)),c=ra(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),No(r.h,u),ko(u,A,c)}function Dn(r,c){r.H&&T(r.H,function(u,A){ct(c,A,u)}),r.l&&qs({},function(u,A){ct(c,A,u)})}function ra(r,c,u){u=Math.min(r.i.length,u);var A=r.l?y(r.l.Na,r.l,r):null;t:{var C=r.i;let P=-1;for(;;){const F=["count="+u];P==-1?0<u?(P=C[0].g,F.push("ofs="+P)):P=0:F.push("ofs="+P);let rt=!0;for(let wt=0;wt<u;wt++){let et=C[wt].g;const Pt=C[wt].map;if(et-=P,0>et)P=Math.max(0,C[wt].g-100),rt=!1;else try{Xd(Pt,F,"req"+et+"_")}catch{A&&A(Pt)}}if(rt){A=F.join("&");break t}}}return r=r.i.splice(0,u),c.D=r,A}function sa(r){if(!r.g&&!r.u){r.Y=1;var c=r.Fa;X||at(),q||(X(),q=!0),dt.add(c,r),r.v=0}}function Mo(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=_n(y(r.Fa,r),ca(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,aa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=_n(y(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ft(10),Ai(this),aa(this))};function zo(r){r.A!=null&&(l.clearTimeout(r.A),r.A=null)}function aa(r){r.g=new fe(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var c=le(r.qa);ct(c,"RID","rpc"),ct(c,"SID",r.K),ct(c,"AID",r.T),ct(c,"CI",r.F?"0":"1"),!r.F&&r.ja&&ct(c,"TO",r.ja),ct(c,"TYPE","xmlhttp"),Dn(r,c),r.m&&r.o&&Lo(c,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=vi(le(c)),u.m=null,u.P=!0,Bs(u,r)}n.Za=function(){this.C!=null&&(this.C=null,Ai(this),Mo(this),Ft(19))};function _i(r){r.C!=null&&(l.clearTimeout(r.C),r.C=null)}function la(r,c){var u=null;if(r.g==c){_i(r),zo(r),r.g=null;var A=2}else if(Bo(r.h,c))u=c.D,Os(r.h,c),A=1;else return;if(r.G!=0){if(c.o)if(A==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var C=r.B;A=hi(),Lt(A,new Ps(A,u)),Ei(r)}else sa(r);else if(C=c.s,C==3||C==0&&0<c.X||!(A==1&&tu(r,c)||A==2&&Mo(r)))switch(u&&0<u.length&&(c=r.h,c.i=c.i.concat(u)),C){case 1:Le(r,5);break;case 4:Le(r,10);break;case 3:Le(r,6);break;default:Le(r,2)}}}function ca(r,c){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*c}function Le(r,c){if(r.j.info("Error code "+c),c==2){var u=y(r.fb,r),A=r.Xa;const C=!A;A=new Ne(A||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||gi(A,"https"),vi(A),C?Wd(A.toString(),u):Gd(A.toString(),u)}else Ft(2);r.G=0,r.l&&r.l.sa(c),da(r),ia(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function da(r){if(r.G=0,r.ka=[],r.l){const c=js(r.h);(c.length!=0||r.i.length!=0)&&(S(r.ka,c),S(r.ka,r.i),r.h.i.length=0,R(r.i),r.i.length=0),r.l.ra()}}function ua(r,c,u){var A=u instanceof Ne?le(u):new Ne(u);if(A.g!="")c&&(A.g=c+"."+A.g),yi(A,A.s);else{var C=l.location;A=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var P=new Ne(null);A&&gi(P,A),c&&(P.g=c),C&&yi(P,C),u&&(P.l=u),A=P}return u=r.D,c=r.ya,u&&c&&ct(A,u,c),ct(A,"VER",r.la),Dn(r,A),A}function ha(r,c,u){if(c&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Ca&&!r.pa?new ht(new bi({eb:u})):new ht(r.pa),c.Ha(r.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}n=pa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ii(){}Ii.prototype.g=function(r,c){return new qt(r,c)};function qt(r,c){St.call(this),this.g=new na(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(r?r["X-WebChannel-Client-Profile"]=c.va:r={"X-WebChannel-Client-Profile":c.va}),this.g.S=r,(r=c&&c.Sb)&&!B(r)&&(this.g.m=r),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!B(c)&&(this.g.D=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new Ke(this)}I(qt,St),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Fo(this.g)},qt.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=Io(r),r=u);c.i.push(new Fd(c.Ya++,r)),c.G==3&&Ei(c)},qt.prototype.N=function(){this.g.l=null,delete this.j,Fo(this.g),delete this.g,qt.aa.N.call(this)};function fa(r){Co.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){t:{for(const u in c){r=u;break t}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}I(fa,Co);function ma(){Ro.call(this),this.status=1}I(ma,Ro);function Ke(r){this.g=r}I(Ke,pa),Ke.prototype.ua=function(){Lt(this.g,"a")},Ke.prototype.ta=function(r){Lt(this.g,new fa(r))},Ke.prototype.sa=function(r){Lt(this.g,new ma)},Ke.prototype.ra=function(){Lt(this.g,"b")},Ii.prototype.createWebChannel=Ii.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Fl=function(){return new Ii},Ll=function(){return hi()},Nl=De,ir={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pi.NO_ERROR=0,pi.TIMEOUT=8,pi.HTTP_ERROR=6,Vi=pi,ks.COMPLETE="complete",Bl=ks,Ts.EventType=An,An.OPEN="a",An.CLOSE="b",An.ERROR="c",An.MESSAGE="d",St.prototype.listen=St.prototype.K,Ln=Ts,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,Dl=ht}).apply(typeof Ci<"u"?Ci:typeof self<"u"?self:typeof window<"u"?window:{});const Ca="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new Tl("@firebase/firestore");function Bn(){return Oe.logLevel}function H(n,...t){if(Oe.logLevel<=Y.DEBUG){const e=t.map(_r);Oe.debug(`Firestore (${pn}): ${n}`,...e)}}function he(n,...t){if(Oe.logLevel<=Y.ERROR){const e=t.map(_r);Oe.error(`Firestore (${pn}): ${n}`,...e)}}function rn(n,...t){if(Oe.logLevel<=Y.WARN){const e=t.map(_r);Oe.warn(`Firestore (${pn}): ${n}`,...e)}}function _r(n){if(typeof n=="string")return n;try{/**
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
 */function Q(n="Unexpected state"){const t=`FIRESTORE (${pn}) INTERNAL ASSERTION FAILED: `+n;throw he(t),new Error(t)}function tt(n,t){n||Q()}function K(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends hn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Dh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Dt.UNAUTHENTICATED))}shutdown(){}}class Bh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Nh{constructor(t){this.t=t,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){tt(this.o===void 0);let i=this.i;const o=d=>this.i!==i?(i=this.i,e(d)):Promise.resolve();let s=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ie,t.enqueueRetryable(()=>o(this.currentUser))};const a=()=>{const d=s;t.enqueueRetryable(async()=>{await d.promise,await o(this.currentUser)})},l=d=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ie)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(tt(typeof i.accessToken=="string"),new Ml(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new Dt(t)}}class Lh{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fh{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Lh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){tt(this.o===void 0);const i=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const o=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>o(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?o(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new Mh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Oh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const o=Oh(40);for(let s=0;s<o.length;++s)i.length<20&&o[s]<e&&(i+=t.charAt(o[s]%t.length))}return i}}function nt(n,t){return n<t?-1:n>t?1:0}function sn(n,t,e){return n.length===t.length&&n.every((i,o)=>e(i,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return yt.fromMillis(Date.now())}static fromDate(t){return yt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new yt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.timestamp=t}static fromTimestamp(t){return new W(t)}static min(){return new W(new yt(0,0))}static max(){return new W(new yt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e,i){e===void 0?e=0:e>t.length&&Q(),i===void 0?i=t.length-e:i>t.length-e&&Q(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Qn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Qn?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let o=0;o<i;o++){const s=t.get(o),a=e.get(o);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class st extends Qn{construct(t,e,i){return new st(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new O(k.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(o=>o.length>0))}return new st(e)}static emptyPath(){return new st([])}}const jh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Qn{construct(t,e,i){return new Et(t,e,i)}static isValidIdentifier(t){return jh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(t){const e=[];let i="",o=0;const s=()=>{if(i.length===0)throw new O(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let a=!1;for(;o<t.length;){const l=t[o];if(l==="\\"){if(o+1===t.length)throw new O(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[o+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=d,o+=2}else l==="`"?(a=!a,o++):l!=="."||a?(i+=l,o++):(s(),o++)}if(s(),a)throw new O(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(st.fromString(t))}static fromName(t){return new U(st.fromString(t).popFirst(5))}static empty(){return new U(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&st.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return st.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new st(t.slice()))}}function qh(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=W.fromTimestamp(i===1e9?new yt(e+1,0):new yt(e,i));return new Ee(o,U.empty(),t)}function Hh(n){return new Ee(n.readTime,n.key,-1)}class Ee{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Ee(W.min(),U.empty(),-1)}static max(){return new Ee(W.max(),U.empty(),-1)}}function Uh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=U.comparator(n.documentKey,t.documentKey),e!==0?e:nt(n.largestBatchId,t.largestBatchId))}/**
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
 */const $h="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==$h)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((i,o)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,o)},this.catchCallback=s=>{this.wrapFailure(e,s).next(i,o)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,i)=>{e(t)})}static reject(t){return new V((e,i)=>{i(t)})}static waitFor(t){return new V((e,i)=>{let o=0,s=0,a=!1;t.forEach(l=>{++o,l.next(()=>{++s,a&&s===o&&e()},d=>i(d))}),a=!0,s===o&&e()})}static or(t){let e=V.resolve(!1);for(const i of t)e=e.next(o=>o?V.resolve(o):i());return e}static forEach(t,e){const i=[];return t.forEach((o,s)=>{i.push(e.call(this,o,s))}),this.waitFor(i)}static mapArray(t,e){return new V((i,o)=>{const s=t.length,a=new Array(s);let l=0;for(let d=0;d<s;d++){const h=d;e(t[h]).next(b=>{a[h]=b,++l,l===s&&i(a)},b=>o(b))}})}static doWhile(t,e){return new V((i,o)=>{const s=()=>{t()===!0?e().next(()=>{s()},o):i()};s()})}}function Wh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ni(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ir{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ir.oe=-1;function ii(n){return n==null}function ji(n){return n===0&&1/n==-1/0}function Gh(n){return typeof n=="number"&&Number.isInteger(n)&&!ji(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ue(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ol(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e){this.comparator=t,this.root=e||At.EMPTY}insert(t,e){return new ut(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,At.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,At.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(t,i.key);if(o===0)return e+i.left.size;o<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ri(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ri(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ri(this.root,t,this.comparator,!0)}}class Ri{constructor(t,e,i,o){this.isReverse=o,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,e&&o&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class At{constructor(t,e,i,o,s){this.key=t,this.value=e,this.color=i??At.RED,this.left=o??At.EMPTY,this.right=s??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,o,s){return new At(t??this.key,e??this.value,i??this.color,o??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let o=this;const s=i(t,o.key);return o=s<0?o.copy(null,null,null,o.left.insert(t,e,i),null):s===0?o.copy(null,e,null,null,null):o.copy(null,null,null,null,o.right.insert(t,e,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,o=this;if(e(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,e),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),e(t,o.key)===0){if(o.right.isEmpty())return At.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,e))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const t=this.left.check();if(t!==this.right.check())throw Q();return t+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,i,o,s){return this}insert(t,e,i){return new At(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.comparator=t,this.data=new ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,t[1])>=0)return;e(o.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Sa(this.data.getIterator())}getIteratorFrom(t){return new Sa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof _t)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const o=e.getNext().key,s=i.getNext().key;if(this.comparator(o,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new _t(this.comparator);return e.data=t,e}}class Sa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(t){this.fields=t,t.sort(Et.comparator)}static empty(){return new Ht([])}unionWith(t){let e=new _t(Et.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Ht(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return sn(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class jl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(o){try{return atob(o)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new jl("Invalid base64 string: "+s):s}}(t);return new Tt(e)}static fromUint8Array(t){const e=function(o){let s="";for(let a=0;a<o.length;++a)s+=String.fromCharCode(o[a]);return s}(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let o=0;o<e.length;o++)i[o]=e.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const Kh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _e(n){if(tt(!!n),typeof n=="string"){let t=0;const e=Kh.exec(n);if(tt(!!e),e[1]){let o=e[1];o=(o+"000000000").substr(0,9),t=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:pt(n.seconds),nanos:pt(n.nanos)}}function pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function je(n){return typeof n=="string"?Tt.fromBase64String(n):Tt.fromUint8Array(n)}/**
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
 */function Tr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Cr(n){const t=n.mapValue.fields.__previous_value__;return Tr(t)?Cr(t):t}function Wn(n){const t=_e(n.mapValue.fields.__local_write_time__.timestampValue);return new yt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e,i,o,s,a,l,d,h){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=o,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=h}}class Gn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Gn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Si={mapValue:{}};function qe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Tr(n)?4:Zh(n)?9007199254740991:Jh(n)?10:11:Q()}function re(n,t){if(n===t)return!0;const e=qe(n);if(e!==qe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Wn(n).isEqual(Wn(t));case 3:return function(o,s){if(typeof o.timestampValue=="string"&&typeof s.timestampValue=="string"&&o.timestampValue.length===s.timestampValue.length)return o.timestampValue===s.timestampValue;const a=_e(o.timestampValue),l=_e(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(o,s){return je(o.bytesValue).isEqual(je(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(o,s){return pt(o.geoPointValue.latitude)===pt(s.geoPointValue.latitude)&&pt(o.geoPointValue.longitude)===pt(s.geoPointValue.longitude)}(n,t);case 2:return function(o,s){if("integerValue"in o&&"integerValue"in s)return pt(o.integerValue)===pt(s.integerValue);if("doubleValue"in o&&"doubleValue"in s){const a=pt(o.doubleValue),l=pt(s.doubleValue);return a===l?ji(a)===ji(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return sn(n.arrayValue.values||[],t.arrayValue.values||[],re);case 10:case 11:return function(o,s){const a=o.mapValue.fields||{},l=s.mapValue.fields||{};if(Ra(a)!==Ra(l))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(l[d]===void 0||!re(a[d],l[d])))return!1;return!0}(n,t);default:return Q()}}function Kn(n,t){return(n.values||[]).find(e=>re(e,t))!==void 0}function an(n,t){if(n===t)return 0;const e=qe(n),i=qe(t);if(e!==i)return nt(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return nt(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=pt(s.integerValue||s.doubleValue),d=pt(a.integerValue||a.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(n,t);case 3:return Pa(n.timestampValue,t.timestampValue);case 4:return Pa(Wn(n),Wn(t));case 5:return nt(n.stringValue,t.stringValue);case 6:return function(s,a){const l=je(s),d=je(a);return l.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),d=a.split("/");for(let h=0;h<l.length&&h<d.length;h++){const b=nt(l[h],d[h]);if(b!==0)return b}return nt(l.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=nt(pt(s.latitude),pt(a.latitude));return l!==0?l:nt(pt(s.longitude),pt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ka(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,d,h,b;const m=s.fields||{},y=a.fields||{},E=(l=m.value)===null||l===void 0?void 0:l.arrayValue,I=(d=y.value)===null||d===void 0?void 0:d.arrayValue,R=nt(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((b=I==null?void 0:I.values)===null||b===void 0?void 0:b.length)||0);return R!==0?R:ka(E,I)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===Si.mapValue&&a===Si.mapValue)return 0;if(s===Si.mapValue)return 1;if(a===Si.mapValue)return-1;const l=s.fields||{},d=Object.keys(l),h=a.fields||{},b=Object.keys(h);d.sort(),b.sort();for(let m=0;m<d.length&&m<b.length;++m){const y=nt(d[m],b[m]);if(y!==0)return y;const E=an(l[d[m]],h[b[m]]);if(E!==0)return E}return nt(d.length,b.length)}(n.mapValue,t.mapValue);default:throw Q()}}function Pa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return nt(n,t);const e=_e(n),i=_e(t),o=nt(e.seconds,i.seconds);return o!==0?o:nt(e.nanos,i.nanos)}function ka(n,t){const e=n.values||[],i=t.values||[];for(let o=0;o<e.length&&o<i.length;++o){const s=an(e[o],i[o]);if(s)return s}return nt(e.length,i.length)}function ln(n){return or(n)}function or(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=_e(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return je(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return U.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",o=!0;for(const s of e.values||[])o?o=!1:i+=",",i+=or(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let o="{",s=!0;for(const a of i)s?s=!1:o+=",",o+=`${a}:${or(e.fields[a])}`;return o+"}"}(n.mapValue):Q()}function Va(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function rr(n){return!!n&&"integerValue"in n}function Rr(n){return!!n&&"arrayValue"in n}function Da(n){return!!n&&"nullValue"in n}function Ba(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Di(n){return!!n&&"mapValue"in n}function Jh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function zn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ue(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=zn(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=zn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Zh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Di(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zn(e)}setAll(t){let e=Et.emptyPath(),i={},o=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,i,o),i={},o=[],e=l.popLast()}a?i[l.lastSegment()]=zn(a):o.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,i,o)}delete(t){const e=this.field(t.popLast());Di(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return re(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let o=e.mapValue.fields[t.get(i)];Di(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=o),e=o}return e.mapValue.fields}applyChanges(t,e,i){Ue(e,(o,s)=>t[o]=s);for(const o of i)delete t[o]}clone(){return new Mt(zn(this.value))}}function ql(n){const t=[];return Ue(n.fields,(e,i)=>{const o=new Et([e]);if(Di(i)){const s=ql(i.mapValue).fields;if(s.length===0)t.push(o);else for(const a of s)t.push(o.child(a))}else t.push(o)}),new Ht(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e,i,o,s,a,l){this.key=t,this.documentType=e,this.version=i,this.readTime=o,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new xt(t,0,W.min(),W.min(),W.min(),Mt.empty(),0)}static newFoundDocument(t,e,i,o){return new xt(t,1,e,W.min(),i,o,0)}static newNoDocument(t,e){return new xt(t,2,e,W.min(),W.min(),Mt.empty(),0)}static newUnknownDocument(t,e){return new xt(t,3,e,W.min(),W.min(),Mt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qi{constructor(t,e){this.position=t,this.inclusive=e}}function Na(n,t,e){let i=0;for(let o=0;o<n.position.length;o++){const s=t[o],a=n.position[o];if(s.field.isKeyField()?i=U.comparator(U.fromName(a.referenceValue),e.key):i=an(a,e.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function La(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!re(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Xn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Yh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Hl{}class mt extends Hl{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new ep(t,e,i):e==="array-contains"?new op(t,i):e==="in"?new rp(t,i):e==="not-in"?new sp(t,i):e==="array-contains-any"?new ap(t,i):new mt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new np(t,i):new ip(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(an(e,this.value)):e!==null&&qe(this.value)===qe(e)&&this.matchesComparison(an(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends Hl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Xt(t,e)}matches(t){return Ul(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ul(n){return n.op==="and"}function $l(n){return tp(n)&&Ul(n)}function tp(n){for(const t of n.filters)if(t instanceof Xt)return!1;return!0}function sr(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+ln(n.value);if($l(n))return n.filters.map(t=>sr(t)).join(",");{const t=n.filters.map(e=>sr(e)).join(",");return`${n.op}(${t})`}}function Ql(n,t){return n instanceof mt?function(i,o){return o instanceof mt&&i.op===o.op&&i.field.isEqual(o.field)&&re(i.value,o.value)}(n,t):n instanceof Xt?function(i,o){return o instanceof Xt&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((s,a,l)=>s&&Ql(a,o.filters[l]),!0):!1}(n,t):void Q()}function Wl(n){return n instanceof mt?function(e){return`${e.field.canonicalString()} ${e.op} ${ln(e.value)}`}(n):n instanceof Xt?function(e){return e.op.toString()+" {"+e.getFilters().map(Wl).join(" ,")+"}"}(n):"Filter"}class ep extends mt{constructor(t,e,i){super(t,e,i),this.key=U.fromName(i.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.matchesComparison(e)}}class np extends mt{constructor(t,e){super(t,"in",e),this.keys=Gl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ip extends mt{constructor(t,e){super(t,"not-in",e),this.keys=Gl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Gl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>U.fromName(i.referenceValue))}class op extends mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Rr(e)&&Kn(e.arrayValue,this.value)}}class rp extends mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Kn(this.value.arrayValue,e)}}class sp extends mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Kn(this.value.arrayValue,e)}}class ap extends mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Rr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Kn(this.value.arrayValue,i))}}/**
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
 */class lp{constructor(t,e=null,i=[],o=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=o,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Fa(n,t=null,e=[],i=[],o=null,s=null,a=null){return new lp(n,t,e,i,o,s,a)}function Sr(n){const t=K(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>sr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),ii(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ln(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ln(i)).join(",")),t.ue=e}return t.ue}function Pr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Yh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ql(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!La(n.startAt,t.startAt)&&La(n.endAt,t.endAt)}function ar(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,e=null,i=[],o=[],s=null,a="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=o,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cp(n,t,e,i,o,s,a,l){return new fn(n,t,e,i,o,s,a,l)}function Yi(n){return new fn(n)}function Ma(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kl(n){return n.collectionGroup!==null}function On(n){const t=K(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new _t(Et.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Xn(s,i))}),e.has(Et.keyField().canonicalString())||t.ce.push(new Xn(Et.keyField(),i))}return t.ce}function oe(n){const t=K(n);return t.le||(t.le=dp(t,On(n))),t.le}function dp(n,t){if(n.limitType==="F")return Fa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(o=>{const s=o.dir==="desc"?"asc":"desc";return new Xn(o.field,s)});const e=n.endAt?new qi(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new qi(n.startAt.position,n.startAt.inclusive):null;return Fa(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function lr(n,t){const e=n.filters.concat([t]);return new fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function cr(n,t,e){return new fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function to(n,t){return Pr(oe(n),oe(t))&&n.limitType===t.limitType}function Xl(n){return`${Sr(oe(n))}|lt:${n.limitType}`}function Ze(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(o=>Wl(o)).join(", ")}]`),ii(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(o=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(o)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(o=>ln(o)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(o=>ln(o)).join(",")),`Target(${i})`}(oe(n))}; limitType=${n.limitType})`}function eo(n,t){return t.isFoundDocument()&&function(i,o){const s=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):U.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,t)&&function(i,o){for(const s of On(i))if(!s.field.isKeyField()&&o.data.field(s.field)===null)return!1;return!0}(n,t)&&function(i,o){for(const s of i.filters)if(!s.matches(o))return!1;return!0}(n,t)&&function(i,o){return!(i.startAt&&!function(a,l,d){const h=Na(a,l,d);return a.inclusive?h<=0:h<0}(i.startAt,On(i),o)||i.endAt&&!function(a,l,d){const h=Na(a,l,d);return a.inclusive?h>=0:h>0}(i.endAt,On(i),o))}(n,t)}function up(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jl(n){return(t,e)=>{let i=!1;for(const o of On(n)){const s=hp(o,t,e);if(s!==0)return s;i=i||o.field.isKeyField()}return 0}}function hp(n,t,e){const i=n.field.isKeyField()?U.comparator(t.key,e.key):function(s,a,l){const d=a.data.field(s),h=l.data.field(s);return d!==null&&h!==null?an(d,h):Q()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[o,s]of i)if(this.equalsFn(o,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),o=this.inner[i];if(o===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let s=0;s<o.length;s++)if(this.equalsFn(o[s][0],t))return void(o[s]=[t,e]);o.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return i.length===1?delete this.inner[e]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Ue(this.inner,(e,i)=>{for(const[o,s]of i)t(o,s)})}isEmpty(){return Ol(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new ut(U.comparator);function pe(){return pp}const Zl=new ut(U.comparator);function Fn(...n){let t=Zl;for(const e of n)t=t.insert(e.key,e);return t}function Yl(n){let t=Zl;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Me(){return jn()}function tc(){return jn()}function jn(){return new mn(n=>n.toString(),(n,t)=>n.isEqual(t))}const fp=new ut(U.comparator),mp=new _t(U.comparator);function J(...n){let t=mp;for(const e of n)t=t.add(e);return t}const gp=new _t(nt);function yp(){return gp}/**
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
 */function kr(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(t)?"-0":t}}function ec(n){return{integerValue:""+n}}function vp(n,t){return Gh(t)?ec(t):kr(n,t)}/**
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
 */class no{constructor(){this._=void 0}}function bp(n,t,e){return n instanceof Jn?function(o,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return s&&Tr(s)&&(s=Cr(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof Zn?ic(n,t):n instanceof Yn?oc(n,t):function(o,s){const a=nc(o,s),l=za(a)+za(o.Pe);return rr(a)&&rr(o.Pe)?ec(l):kr(o.serializer,l)}(n,t)}function xp(n,t,e){return n instanceof Zn?ic(n,t):n instanceof Yn?oc(n,t):e}function nc(n,t){return n instanceof Hi?function(i){return rr(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class Jn extends no{}class Zn extends no{constructor(t){super(),this.elements=t}}function ic(n,t){const e=rc(t);for(const i of n.elements)e.some(o=>re(o,i))||e.push(i);return{arrayValue:{values:e}}}class Yn extends no{constructor(t){super(),this.elements=t}}function oc(n,t){let e=rc(t);for(const i of n.elements)e=e.filter(o=>!re(o,i));return{arrayValue:{values:e}}}class Hi extends no{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function za(n){return pt(n.integerValue||n.doubleValue)}function rc(n){return Rr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t,e){this.field=t,this.transform=e}}function Ap(n,t){return n.field.isEqual(t.field)&&function(i,o){return i instanceof Zn&&o instanceof Zn||i instanceof Yn&&o instanceof Yn?sn(i.elements,o.elements,re):i instanceof Hi&&o instanceof Hi?re(i.Pe,o.Pe):i instanceof Jn&&o instanceof Jn}(n.transform,t.transform)}class Ep{constructor(t,e){this.version=t,this.transformResults=e}}class gt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new gt}static exists(t){return new gt(void 0,t)}static updateTime(t){return new gt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Bi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class io{}function sc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ri(n.key,gt.none()):new oi(n.key,n.data,gt.none());{const e=n.data,i=Mt.empty();let o=new _t(Et.comparator);for(let s of t.fields)if(!o.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?i.delete(s):i.set(s,a),o=o.add(s)}return new Ce(n.key,i,new Ht(o.toArray()),gt.none())}}function _p(n,t,e){n instanceof oi?function(o,s,a){const l=o.value.clone(),d=ja(o.fieldTransforms,s,a.transformResults);l.setAll(d),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Ce?function(o,s,a){if(!Bi(o.precondition,s))return void s.convertToUnknownDocument(a.version);const l=ja(o.fieldTransforms,s,a.transformResults),d=s.data;d.setAll(ac(o)),d.setAll(l),s.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,t,e):function(o,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function qn(n,t,e,i){return n instanceof oi?function(s,a,l,d){if(!Bi(s.precondition,a))return l;const h=s.value.clone(),b=qa(s.fieldTransforms,d,a);return h.setAll(b),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,i):n instanceof Ce?function(s,a,l,d){if(!Bi(s.precondition,a))return l;const h=qa(s.fieldTransforms,d,a),b=a.data;return b.setAll(ac(s)),b.setAll(h),a.convertToFoundDocument(a.version,b).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,t,e,i):function(s,a,l){return Bi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Ip(n,t){let e=null;for(const i of n.fieldTransforms){const o=t.data.field(i.field),s=nc(i.transform,o||null);s!=null&&(e===null&&(e=Mt.empty()),e.set(i.field,s))}return e||null}function Oa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&sn(i,o,(s,a)=>Ap(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class oi extends io{constructor(t,e,i,o=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ce extends io{constructor(t,e,i,o,s=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=o,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ac(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function ja(n,t,e){const i=new Map;tt(n.length===e.length);for(let o=0;o<e.length;o++){const s=n[o],a=s.transform,l=t.data.field(s.field);i.set(s.field,xp(a,l,e[o]))}return i}function qa(n,t,e){const i=new Map;for(const o of n){const s=o.transform,a=e.data.field(o.field);i.set(o.field,bp(s,a,t))}return i}class ri extends io{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lc extends io{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(t,e,i,o){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let o=0;o<this.mutations.length;o++){const s=this.mutations[o];s.key.isEqual(t.key)&&_p(s,t,i[o])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=qn(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=qn(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=tc();return this.mutations.forEach(o=>{const s=t.get(o.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(o.key)?null:l;const d=sc(a,l);d!==null&&i.set(o.key,d),a.isValidDocument()||a.convertToNoDocument(W.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),J())}isEqual(t){return this.batchId===t.batchId&&sn(this.mutations,t.mutations,(e,i)=>Oa(e,i))&&sn(this.baseMutations,t.baseMutations,(e,i)=>Oa(e,i))}}class Vr{constructor(t,e,i,o){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=o}static from(t,e,i){tt(t.mutations.length===i.length);let o=function(){return fp}();const s=t.mutations;for(let a=0;a<s.length;a++)o=o.insert(s[a].key,i[a].version);return new Vr(t,e,i,o)}}/**
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
 */class Cp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Rp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Z;function cc(n){switch(n){default:return Q();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function dc(n){if(n===void 0)return he("GRPC error has no .code"),k.UNKNOWN;switch(n){case ft.OK:return k.OK;case ft.CANCELLED:return k.CANCELLED;case ft.UNKNOWN:return k.UNKNOWN;case ft.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ft.INTERNAL:return k.INTERNAL;case ft.UNAVAILABLE:return k.UNAVAILABLE;case ft.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ft.NOT_FOUND:return k.NOT_FOUND;case ft.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ft.ABORTED:return k.ABORTED;case ft.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ft.DATA_LOSS:return k.DATA_LOSS;default:return Q()}}(Z=ft||(ft={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Sp(){return new TextEncoder}/**
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
 */const Pp=new ze([4294967295,4294967295],0);function Ha(n){const t=Sp().encode(n),e=new Vl;return e.update(t),new Uint8Array(e.digest())}function Ua(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),o=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ze([e,i],0),new ze([o,s],0)]}class Dr{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new Mn(`Invalid padding: ${e}`);if(i<0)throw new Mn(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Mn(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new Mn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ze.fromNumber(this.Ie)}Ee(t,e,i){let o=t.add(e.multiply(ze.fromNumber(i)));return o.compare(Pp)===1&&(o=new ze([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ha(t),[i,o]=Ua(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,o,s);if(!this.de(a))return!1}return!0}static create(t,e,i){const o=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Dr(s,o,e);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Ha(t),[i,o]=Ua(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,o,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class Mn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,e,i,o,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const o=new Map;return o.set(t,si.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new oo(W.min(),o,new ut(nt),pe(),J())}}class si{constructor(t,e,i,o,s){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new si(i,e,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t,e,i,o){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=o}}class uc{constructor(t,e){this.targetId=t,this.me=e}}class hc{constructor(t,e,i=Tt.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=o}}class $a{constructor(){this.fe=0,this.ge=Wa(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=J(),e=J(),i=J();return this.ge.forEach((o,s)=>{switch(s){case 0:t=t.add(o);break;case 2:e=e.add(o);break;case 1:i=i.add(o);break;default:Q()}}),new si(this.pe,this.ye,t,e,i)}Ce(){this.we=!1,this.ge=Wa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kp{constructor(t){this.Le=t,this.Be=new Map,this.ke=pe(),this.qe=Qa(),this.Qe=new ut(nt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:Q()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,o)=>{this.ze(o)&&e(o)})}He(t){const e=t.targetId,i=t.me.count,o=this.Je(e);if(o){const s=o.target;if(ar(s))if(i===0){const a=new U(s.path);this.Ue(e,a,xt.newNoDocument(a,W.min()))}else tt(i===1);else{const a=this.Ye(e);if(a!==i){const l=this.Ze(t),d=l?this.Xe(l,t,a):1;if(d!==0){this.je(e);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:s=0}=e;let a,l;try{a=je(i).toUint8Array()}catch(d){if(d instanceof jl)return rn("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Dr(a,o,s)}catch(d){return rn(d instanceof Mn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Ie===0?null:l}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let o=0;return i.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),o++)}),o}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&ar(l.target)){const d=new U(l.target.path);this.ke.get(d)!==null||this.it(a,d)||this.Ue(a,d,xt.newNoDocument(d,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let i=J();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(d=>{const h=this.Je(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const o=new oo(t,e,this.Qe,this.ke,i);return this.ke=pe(),this.qe=Qa(),this.Qe=new ut(nt),o}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const o=this.Ge(t);this.it(t,e)?o.Fe(e,1):o.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new $a,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new _t(nt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||H("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new $a),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Qa(){return new ut(U.comparator)}function Wa(){return new ut(U.comparator)}const Vp={asc:"ASCENDING",desc:"DESCENDING"},Dp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bp={and:"AND",or:"OR"};class Np{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function dr(n,t){return n.useProto3Json||ii(t)?t:{value:t}}function Ui(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Lp(n,t){return Ui(n,t.toTimestamp())}function Ut(n){return tt(!!n),W.fromTimestamp(function(e){const i=_e(e);return new yt(i.seconds,i.nanos)}(n))}function Br(n,t){return ur(n,t).canonicalString()}function ur(n,t){const e=function(o){return new st(["projects",o.projectId,"databases",o.database])}(n).child("documents");return t===void 0?e:e.child(t)}function fc(n){const t=st.fromString(n);return tt(xc(t)),t}function $i(n,t){return Br(n.databaseId,t.path)}function Hn(n,t){const e=fc(t);if(e.get(1)!==n.databaseId.projectId)throw new O(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new U(gc(e))}function mc(n,t){return Br(n.databaseId,t)}function Fp(n){const t=fc(n);return t.length===4?st.emptyPath():gc(t)}function hr(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function gc(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ga(n,t,e){return{name:$i(n,t),fields:e.value.mapValue.fields}}function Mp(n,t){return"found"in t?function(i,o){tt(!!o.found),o.found.name,o.found.updateTime;const s=Hn(i,o.found.name),a=Ut(o.found.updateTime),l=o.found.createTime?Ut(o.found.createTime):W.min(),d=new Mt({mapValue:{fields:o.found.fields}});return xt.newFoundDocument(s,a,l,d)}(n,t):"missing"in t?function(i,o){tt(!!o.missing),tt(!!o.readTime);const s=Hn(i,o.missing),a=Ut(o.readTime);return xt.newNoDocument(s,a)}(n,t):Q()}function zp(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],s=function(h,b){return h.useProto3Json?(tt(b===void 0||typeof b=="string"),Tt.fromBase64String(b||"")):(tt(b===void 0||b instanceof Buffer||b instanceof Uint8Array),Tt.fromUint8Array(b||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const b=h.code===void 0?k.UNKNOWN:dc(h.code);return new O(b,h.message||"")}(a);e=new hc(i,o,s,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const o=Hn(n,i.document.name),s=Ut(i.document.updateTime),a=i.document.createTime?Ut(i.document.createTime):W.min(),l=new Mt({mapValue:{fields:i.document.fields}}),d=xt.newFoundDocument(o,s,a,l),h=i.targetIds||[],b=i.removedTargetIds||[];e=new Ni(h,b,d.key,d)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const o=Hn(n,i.document),s=i.readTime?Ut(i.readTime):W.min(),a=xt.newNoDocument(o,s),l=i.removedTargetIds||[];e=new Ni([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const o=Hn(n,i.document),s=i.removedTargetIds||[];e=new Ni([],s,o,null)}else{if(!("filter"in t))return Q();{t.filter;const i=t.filter;i.targetId;const{count:o=0,unchangedNames:s}=i,a=new Rp(o,s),l=i.targetId;e=new uc(l,a)}}return e}function yc(n,t){let e;if(t instanceof oi)e={update:Ga(n,t.key,t.value)};else if(t instanceof ri)e={delete:$i(n,t.key)};else if(t instanceof Ce)e={update:Ga(n,t.key,t.data),updateMask:Gp(t.fieldMask)};else{if(!(t instanceof lc))return Q();e={verify:$i(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const l=a.transform;if(l instanceof Jn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Hi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw Q()}(0,i))),t.precondition.isNone||(e.currentDocument=function(o,s){return s.updateTime!==void 0?{updateTime:Lp(o,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(n,t.precondition)),e}function Op(n,t){return n&&n.length>0?(tt(t!==void 0),n.map(e=>function(o,s){let a=o.updateTime?Ut(o.updateTime):Ut(s);return a.isEqual(W.min())&&(a=Ut(s)),new Ep(a,o.transformResults||[])}(e,t))):[]}function jp(n,t){return{documents:[mc(n,t.path)]}}function qp(n,t){const e={structuredQuery:{}},i=t.path;let o;t.collectionGroup!==null?(o=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=mc(n,o);const s=function(h){if(h.length!==0)return bc(Xt.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(b=>function(y){return{field:Ye(y.field),direction:$p(y.dir)}}(b))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=dr(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:o}}function Hp(n){let t=Fp(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let o=null;if(i>0){tt(i===1);const b=e.from[0];b.allDescendants?o=b.collectionId:t=t.child(b.collectionId)}let s=[];e.where&&(s=function(m){const y=vc(m);return y instanceof Xt&&$l(y)?y.getFilters():[y]}(e.where));let a=[];e.orderBy&&(a=function(m){return m.map(y=>function(I){return new Xn(tn(I.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(y))}(e.orderBy));let l=null;e.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,ii(y)?null:y}(e.limit));let d=null;e.startAt&&(d=function(m){const y=!!m.before,E=m.values||[];return new qi(E,y)}(e.startAt));let h=null;return e.endAt&&(h=function(m){const y=!m.before,E=m.values||[];return new qi(E,y)}(e.endAt)),cp(t,o,a,s,l,"F",d,h)}function Up(n,t){const e=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function vc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=tn(e.unaryFilter.field);return mt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=tn(e.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=tn(e.unaryFilter.field);return mt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=tn(e.unaryFilter.field);return mt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(n):n.fieldFilter!==void 0?function(e){return mt.create(tn(e.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Xt.create(e.compositeFilter.filters.map(i=>vc(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(n):Q()}function $p(n){return Vp[n]}function Qp(n){return Dp[n]}function Wp(n){return Bp[n]}function Ye(n){return{fieldPath:n.canonicalString()}}function tn(n){return Et.fromServerFormat(n.fieldPath)}function bc(n){return n instanceof mt?function(e){if(e.op==="=="){if(Ba(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NAN"}};if(Da(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ba(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NOT_NAN"}};if(Da(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ye(e.field),op:Qp(e.op),value:e.value}}}(n):n instanceof Xt?function(e){const i=e.getFilters().map(o=>bc(o));return i.length===1?i[0]:{compositeFilter:{op:Wp(e.op),filters:i}}}(n):Q()}function Gp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function xc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e,i,o,s=W.min(),a=W.min(),l=Tt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new ve(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ve(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ve(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ve(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(t){this.ct=t}}function Xp(n){const t=Hp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cr(t,t.limit,"L"):t}/**
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
 */class Jp{constructor(){this.un=new Zp}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Ee.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Ee.min())}updateCollectionGroup(t,e,i){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class Zp{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),o=this.index[e]||new _t(st.comparator),s=!o.has(i);return this.index[e]=o.add(i),s}has(t){const e=t.lastSegment(),i=t.popLast(),o=this.index[e];return o&&o.has(i)}getEntries(t){return(this.index[t]||new _t(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new cn(0)}static kn(){return new cn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.changes=new mn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?V.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,e,i,o){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=o}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(o=>(i=o,this.remoteDocumentCache.getEntry(t,e))).next(o=>(i!==null&&qn(i.mutation,o,Ht.empty(),yt.now()),o))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,J()).next(()=>i))}getLocalViewOfDocuments(t,e,i=J()){const o=Me();return this.populateOverlays(t,o,e).next(()=>this.computeViews(t,e,o,i).next(s=>{let a=Fn();return s.forEach((l,d)=>{a=a.insert(l,d.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const i=Me();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,J()))}populateOverlays(t,e,i){const o=[];return i.forEach(s=>{e.has(s)||o.push(s)}),this.documentOverlayCache.getOverlays(t,o).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,i,o){let s=pe();const a=jn(),l=function(){return jn()}();return e.forEach((d,h)=>{const b=i.get(h.key);o.has(h.key)&&(b===void 0||b.mutation instanceof Ce)?s=s.insert(h.key,h):b!==void 0?(a.set(h.key,b.mutation.getFieldMask()),qn(b.mutation,h,b.mutation.getFieldMask(),yt.now())):a.set(h.key,Ht.empty())}),this.recalculateAndSaveOverlays(t,s).next(d=>(d.forEach((h,b)=>a.set(h,b)),e.forEach((h,b)=>{var m;return l.set(h,new tf(b,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(t,e){const i=jn();let o=new ut((a,l)=>a-l),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(d=>{const h=e.get(d);if(h===null)return;let b=i.get(d)||Ht.empty();b=l.applyToLocalView(h,b),i.set(d,b);const m=(o.get(l.batchId)||J()).add(d);o=o.insert(l.batchId,m)})}).next(()=>{const a=[],l=o.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),h=d.key,b=d.value,m=tc();b.forEach(y=>{if(!s.has(y)){const E=sc(e.get(y),i.get(y));E!==null&&m.set(y,E),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,m))}return V.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,o){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Kl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,o):this.getDocumentsMatchingCollectionQuery(t,e,i,o)}getNextDocuments(t,e,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,o).next(s=>{const a=o-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,o-s.size):V.resolve(Me());let l=-1,d=s;return a.next(h=>V.forEach(h,(b,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(b)?V.resolve():this.remoteDocumentCache.getEntry(t,b).next(y=>{d=d.insert(b,y)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,d,h,J())).next(b=>({batchId:l,changes:Yl(b)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next(i=>{let o=Fn();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(t,e,i,o){const s=e.collectionGroup;let a=Fn();return this.indexManager.getCollectionParents(t,s).next(l=>V.forEach(l,d=>{const h=function(m,y){return new fn(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(e,d.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,i,o).next(b=>{b.forEach((m,y)=>{a=a.insert(m,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,i,o){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,s,o))).next(a=>{s.forEach((d,h)=>{const b=h.getKey();a.get(b)===null&&(a=a.insert(b,xt.newInvalidDocument(b)))});let l=Fn();return a.forEach((d,h)=>{const b=s.get(d);b!==void 0&&qn(b.mutation,h,Ht.empty(),yt.now()),eo(e,h)&&(l=l.insert(d,h))}),l})}}/**
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
 */class nf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(o){return{id:o.id,version:o.version,createTime:Ut(o.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(o){return{name:o.name,query:Xp(o.bundledQuery),readTime:Ut(o.readTime)}}(e)),V.resolve()}}/**
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
 */class of{constructor(){this.overlays=new ut(U.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Me();return V.forEach(e,o=>this.getOverlay(t,o).next(s=>{s!==null&&i.set(o,s)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((o,s)=>{this.ht(t,e,s)}),V.resolve()}removeOverlaysForBatchId(t,e,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),V.resolve()}getOverlaysForCollection(t,e,i){const o=Me(),s=e.length+1,a=new U(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const d=l.getNext().value,h=d.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&d.largestBatchId>i&&o.set(d.getKey(),d)}return V.resolve(o)}getOverlaysForCollectionGroup(t,e,i,o){let s=new ut((h,b)=>h-b);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>i){let b=s.get(h.largestBatchId);b===null&&(b=Me(),s=s.insert(h.largestBatchId,b)),b.set(h.getKey(),h)}}const l=Me(),d=s.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((h,b)=>l.set(h,b)),!(l.size()>=o)););return V.resolve(l)}ht(t,e,i){const o=this.overlays.get(i.key);if(o!==null){const a=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new Cp(e,i));let s=this.Ir.get(e);s===void 0&&(s=J(),this.Ir.set(e,s)),this.Ir.set(e,s.add(i.key))}}/**
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
 */class rf{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.Tr=new _t(bt.Er),this.dr=new _t(bt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new bt(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new bt(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new U(new st([])),i=new bt(e,t),o=new bt(e,t+1),s=[];return this.dr.forEachInRange([i,o],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new U(new st([])),i=new bt(e,t),o=new bt(e,t+1);let s=J();return this.dr.forEachInRange([i,o],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new bt(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class bt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return U.comparator(t.key,e.key)||nt(t.wr,e.wr)}static Ar(t,e){return nt(t.wr,e.wr)||U.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new _t(bt.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,o){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Tp(s,e,i,o);this.mutationQueue.push(a);for(const l of o)this.br=this.br.add(new bt(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,o=this.vr(i),s=o<0?0:o;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new bt(e,0),o=new bt(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,o],a=>{const l=this.Dr(a.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new _t(nt);return e.forEach(o=>{const s=new bt(o,0),a=new bt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{i=i.add(l.wr)})}),V.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,o=i.length+1;let s=i;U.isDocumentKey(s)||(s=s.child(""));const a=new bt(new U(s),0);let l=new _t(nt);return this.br.forEachWhile(d=>{const h=d.key.path;return!!i.isPrefixOf(h)&&(h.length===o&&(l=l.add(d.wr)),!0)},a),V.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(i=>{const o=this.Dr(i);o!==null&&e.push(o)}),e}removeMutationBatch(t,e){tt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return V.forEach(e.mutations,o=>{const s=new bt(o.key,e.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new bt(e,0),o=this.br.firstAfterOrEqual(i);return V.resolve(e.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t){this.Mr=t,this.docs=function(){return new ut(U.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,o=this.docs.get(i),s=o?o.size:0,a=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return V.resolve(i?i.document.mutableCopy():xt.newInvalidDocument(e))}getEntries(t,e){let i=pe();return e.forEach(o=>{const s=this.docs.get(o);i=i.insert(o,s?s.document.mutableCopy():xt.newInvalidDocument(o))}),V.resolve(i)}getDocumentsMatchingQuery(t,e,i,o){let s=pe();const a=e.path,l=new U(a.child("")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:h,value:{document:b}}=d.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Uh(Hh(b),i)<=0||(o.has(b.key)||eo(e,b))&&(s=s.insert(b.key,b.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(t,e,i,o){Q()}Or(t,e){return V.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new lf(this)}getSize(t){return V.resolve(this.size)}}class lf extends Yp{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?e.push(this.cr.addEntry(t,o)):this.cr.removeEntry(i)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.persistence=t,this.Nr=new mn(e=>Sr(e),Pr),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Nr,this.targetCount=0,this.kr=cn.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,o)=>e(o)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new cn(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,i){let o=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&i.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),o++)}),V.waitFor(s).next(()=>o)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return V.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),V.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const o=this.persistence.referenceDelegate,s=[];return o&&e.forEach(a=>{s.push(o.markPotentiallyOrphaned(t,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return V.resolve(i)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ir(0),this.Kr=!1,this.Kr=!0,this.$r=new rf,this.referenceDelegate=t(this),this.Ur=new cf(this),this.indexManager=new Jp,this.remoteDocumentCache=function(o){return new af(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new Kp(e),this.Gr=new nf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new of,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new sf(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){H("MemoryPersistence","Starting transaction:",t);const o=new uf(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(s=>this.referenceDelegate.jr(o).next(()=>s)).toPromise().then(s=>(o.raiseOnCommittedEvent(),s))}Hr(t,e){return V.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class uf extends Qh{constructor(t){super(),this.currentSequenceNumber=t}}class Lr{constructor(t){this.persistence=t,this.Jr=new Nr,this.Yr=null}static Zr(t){return new Lr(t)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),V.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(o=>{o.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,i=>{const o=U.fromPath(i);return this.ei(t,o).next(s=>{s||e.removeEntry(o,W.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,i,o){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=o}static Wi(t,e){let i=J(),o=J();for(const s of e.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:o=o.add(s.doc.key)}return new Fr(t,e.fromCache,i,o)}}/**
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
 */class hf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class pf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return mu()?8:Wh(pu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,o){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,o,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new hf;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,i,o){return i.documentReadCount<this.ji?(Bn()<=Y.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ze(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Bn()<=Y.DEBUG&&H("QueryEngine","Query:",Ze(e),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(Bn()<=Y.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ze(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,oe(e))):V.resolve())}Yi(t,e){if(Ma(e))return V.resolve(null);let i=oe(e);return this.indexManager.getIndexType(t,i).next(o=>o===0?null:(e.limit!==null&&o===1&&(e=cr(e,null,"F"),i=oe(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=J(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(d=>{const h=this.ts(e,l);return this.ns(e,h,a,d.readTime)?this.Yi(t,cr(e,null,"F")):this.rs(t,h,e,d)}))})))}Zi(t,e,i,o){return Ma(e)||o.isEqual(W.min())?V.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const a=this.ts(e,s);return this.ns(e,a,i,o)?V.resolve(null):(Bn()<=Y.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ze(e)),this.rs(t,a,e,qh(o,-1)).next(l=>l))})}ts(t,e){let i=new _t(Jl(t));return e.forEach((o,s)=>{eo(t,s)&&(i=i.add(s))}),i}ns(t,e,i,o){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(o)>0)}Xi(t,e,i){return Bn()<=Y.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ze(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ee.min(),i)}rs(t,e,i,o){return this.Ji.getDocumentsMatchingQuery(t,i,o).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class ff{constructor(t,e,i,o){this.persistence=t,this.ss=e,this.serializer=o,this.os=new ut(nt),this._s=new mn(s=>Sr(s),Pr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ef(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function mf(n,t,e,i){return new ff(n,t,e,i)}async function wc(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let o;return e.mutationQueue.getAllMutationBatches(i).next(s=>(o=s,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],l=[];let d=J();for(const h of o){a.push(h.batchId);for(const b of h.mutations)d=d.add(b.key)}for(const h of s){l.push(h.batchId);for(const b of h.mutations)d=d.add(b.key)}return e.localDocuments.getDocuments(i,d).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function gf(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,d,h,b){const m=h.batch,y=m.keys();let E=V.resolve();return y.forEach(I=>{E=E.next(()=>b.getEntry(d,I)).next(R=>{const S=h.docVersions.get(I);tt(S!==null),R.version.compareTo(S)<0&&(m.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),b.addEntry(R)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(d,m))}(e,i,t,s).next(()=>s.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,o,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let d=J();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(d=d.add(l.batch.mutations[h].key));return d}(t))).next(()=>e.localDocuments.getDocuments(i,o))})}function Ac(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function yf(n,t){const e=K(n),i=t.snapshotVersion;let o=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});o=e.os;const l=[];t.targetChanges.forEach((b,m)=>{const y=o.get(m);if(!y)return;l.push(e.Ur.removeMatchingKeys(s,b.removedDocuments,m).next(()=>e.Ur.addMatchingKeys(s,b.addedDocuments,m)));let E=y.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(m)!==null?E=E.withResumeToken(Tt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):b.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(b.resumeToken,i)),o=o.insert(m,E),function(R,S,D){return R.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(y,E,b)&&l.push(e.Ur.updateTargetData(s,E))});let d=pe(),h=J();if(t.documentUpdates.forEach(b=>{t.resolvedLimboDocuments.has(b)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,b))}),l.push(vf(s,a,t.documentUpdates).next(b=>{d=b.Ps,h=b.Is})),!i.isEqual(W.min())){const b=e.Ur.getLastRemoteSnapshotVersion(s).next(m=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));l.push(b)}return V.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,d,h)).next(()=>d)}).then(s=>(e.os=o,s))}function vf(n,t,e){let i=J(),o=J();return e.forEach(s=>i=i.add(s)),t.getEntries(n,i).next(s=>{let a=pe();return e.forEach((l,d)=>{const h=s.get(l);d.isFoundDocument()!==h.isFoundDocument()&&(o=o.add(l)),d.isNoDocument()&&d.version.isEqual(W.min())?(t.removeEntry(l,d.readTime),a=a.insert(l,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(d),a=a.insert(l,d)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",d.version)}),{Ps:a,Is:o}})}function bf(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function xf(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return e.Ur.getTargetData(i,t).next(s=>s?(o=s,V.resolve(o)):e.Ur.allocateTargetId(i).next(a=>(o=new ve(t,a,"TargetPurposeListen",i.currentSequenceNumber),e.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=e.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(e.os=e.os.insert(i.targetId,i),e._s.set(t,i.targetId)),i})}async function pr(n,t,e){const i=K(n),o=i.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,o))}catch(a){if(!ni(a))throw a;H("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(o.target)}function Ka(n,t,e){const i=K(n);let o=W.min(),s=J();return i.persistence.runTransaction("Execute query","readwrite",a=>function(d,h,b){const m=K(d),y=m._s.get(b);return y!==void 0?V.resolve(m.os.get(y)):m.Ur.getTargetData(h,b)}(i,a,oe(t)).next(l=>{if(l)return o=l.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,l.targetId).next(d=>{s=d})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,e?o:W.min(),e?s:J())).next(l=>(wf(i,up(t),l),{documents:l,Ts:s})))}function wf(n,t,e){let i=n.us.get(t)||W.min();e.forEach((o,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.us.set(t,i)}class Xa{constructor(){this.activeTargetIds=yp()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Af{constructor(){this.so=new Xa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Xa,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ef{_o(t){}shutdown(){}}/**
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
 */class Ja{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pi=null;function $o(){return Pi===null?Pi=function(){return 268435456+Math.round(2147483648*Math.random())}():Pi++,"0x"+Pi.toString(16)}/**
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
 */const _f={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="WebChannelConnection";class Tf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${o}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${s}`}get Fo(){return!1}Mo(e,i,o,s,a){const l=$o(),d=this.xo(e,i.toUriEncodedString());H("RestConnection",`Sending RPC '${e}' ${l}:`,d,o);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(e,d,h,o).then(b=>(H("RestConnection",`Received RPC '${e}' ${l}: `,b),b),b=>{throw rn("RestConnection",`RPC '${e}' ${l} failed with error: `,b,"url: ",d,"request:",o),b})}Lo(e,i,o,s,a,l){return this.Mo(e,i,o,s,a)}Oo(e,i,o){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>e[a]=s),o&&o.headers.forEach((s,a)=>e[a]=s)}xo(e,i){const o=_f[e];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,o){const s=$o();return new Promise((a,l)=>{const d=new Dl;d.setWithCredentials(!0),d.listenOnce(Bl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Vi.NO_ERROR:const b=d.getResponseJson();H(Vt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(b)),a(b);break;case Vi.TIMEOUT:H(Vt,`RPC '${t}' ${s} timed out`),l(new O(k.DEADLINE_EXCEEDED,"Request time out"));break;case Vi.HTTP_ERROR:const m=d.getStatus();if(H(Vt,`RPC '${t}' ${s} failed with status:`,m,"response text:",d.getResponseText()),m>0){let y=d.getResponseJson();Array.isArray(y)&&(y=y[0]);const E=y==null?void 0:y.error;if(E&&E.status&&E.message){const I=function(S){const D=S.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(D)>=0?D:k.UNKNOWN}(E.status);l(new O(I,E.message))}else l(new O(k.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new O(k.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{H(Vt,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(o);H(Vt,`RPC '${t}' ${s} sending request:`,o),d.send(e,"POST",h,i,15)})}Bo(t,e,i){const o=$o(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Fl(),l=Ll(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(d.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Oo(d.initMessageHeaders,e,i),d.encodeInitMessageHeaders=!0;const b=s.join("");H(Vt,`Creating RPC '${t}' stream ${o}: ${b}`,d);const m=a.createWebChannel(b,d);let y=!1,E=!1;const I=new If({Io:S=>{E?H(Vt,`Not sending because RPC '${t}' stream ${o} is closed:`,S):(y||(H(Vt,`Opening RPC '${t}' stream ${o} transport.`),m.open(),y=!0),H(Vt,`RPC '${t}' stream ${o} sending:`,S),m.send(S))},To:()=>m.close()}),R=(S,D,B)=>{S.listen(D,N=>{try{B(N)}catch(j){setTimeout(()=>{throw j},0)}})};return R(m,Ln.EventType.OPEN,()=>{E||(H(Vt,`RPC '${t}' stream ${o} transport opened.`),I.yo())}),R(m,Ln.EventType.CLOSE,()=>{E||(E=!0,H(Vt,`RPC '${t}' stream ${o} transport closed`),I.So())}),R(m,Ln.EventType.ERROR,S=>{E||(E=!0,rn(Vt,`RPC '${t}' stream ${o} transport errored:`,S),I.So(new O(k.UNAVAILABLE,"The operation could not be completed")))}),R(m,Ln.EventType.MESSAGE,S=>{var D;if(!E){const B=S.data[0];tt(!!B);const N=B,j=N.error||((D=N[0])===null||D===void 0?void 0:D.error);if(j){H(Vt,`RPC '${t}' stream ${o} received error:`,j);const z=j.status;let T=function(g){const x=ft[g];if(x!==void 0)return dc(x)}(z),f=j.message;T===void 0&&(T=k.INTERNAL,f="Unknown error status: "+z+" with message "+j.message),E=!0,I.So(new O(T,f)),m.close()}else H(Vt,`RPC '${t}' stream ${o} received:`,B),I.bo(B)}}),R(l,Nl.STAT_EVENT,S=>{S.stat===ir.PROXY?H(Vt,`RPC '${t}' stream ${o} detected buffering proxy`):S.stat===ir.NOPROXY&&H(Vt,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function Qo(){return typeof document<"u"?document:null}/**
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
 */function ro(n){return new Np(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,i=1e3,o=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=o,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,e-i);o>0&&H("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e,i,o,s,a,l,d){this.ui=t,this.Ho=i,this.Jo=o,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Mr(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===k.RESOURCE_EXHAUSTED?(he(e.toString()),he("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===e&&this.P_(i,o)},i=>{t(()=>{const o=new O(k.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return H("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cf extends Ec{constructor(t,e,i,o,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,o,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=zp(this.serializer,t),i=function(s){if(!("targetChange"in s))return W.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?Ut(a.readTime):W.min()}(t);return this.listener.d_(e,i)}A_(t){const e={};e.database=hr(this.serializer),e.addTarget=function(s,a){let l;const d=a.target;if(l=ar(d)?{documents:jp(s,d)}:{query:qp(s,d)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=pc(s,a.resumeToken);const h=dr(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(W.min())>0){l.readTime=Ui(s,a.snapshotVersion.toTimestamp());const h=dr(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const i=Up(this.serializer,t);i&&(e.labels=i),this.a_(e)}R_(t){const e={};e.database=hr(this.serializer),e.removeTarget=t,this.a_(e)}}class Rf extends Ec{constructor(t,e,i,o,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,o,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return tt(!!t.streamToken),this.lastStreamToken=t.streamToken,tt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Op(t.writeResults,t.commitTime),i=Ut(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=hr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>yc(this.serializer,i))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends class{}{constructor(t,e,i,o){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new O(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,ur(e,i),o,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(k.UNKNOWN,s.toString())})}Lo(t,e,i,o,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,ur(e,i),o,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(k.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Pf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(he(e),this.D_=!1):H("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e,i,o,s){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{i.enqueueAndForget(async()=>{$e(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(d){const h=K(d);h.L_.add(4),await ai(h),h.q_.set("Unknown"),h.L_.delete(4),await so(h)}(this))})}),this.q_=new Pf(i,o)}}async function so(n){if($e(n))for(const t of n.B_)await t(!0)}async function ai(n){for(const t of n.B_)await t(!1)}function _c(n,t){const e=K(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),qr(e)?jr(e):gn(e).r_()&&Or(e,t))}function zr(n,t){const e=K(n),i=gn(e);e.N_.delete(t),i.r_()&&Ic(e,t),e.N_.size===0&&(i.r_()?i.o_():$e(e)&&e.q_.set("Unknown"))}function Or(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}gn(n).A_(t)}function Ic(n,t){n.Q_.xe(t),gn(n).R_(t)}function jr(n){n.Q_=new kp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),gn(n).start(),n.q_.v_()}function qr(n){return $e(n)&&!gn(n).n_()&&n.N_.size>0}function $e(n){return K(n).L_.size===0}function Tc(n){n.Q_=void 0}async function Vf(n){n.q_.set("Online")}async function Df(n){n.N_.forEach((t,e)=>{Or(n,t)})}async function Bf(n,t){Tc(n),qr(n)?(n.q_.M_(t),jr(n)):n.q_.set("Unknown")}async function Nf(n,t,e){if(n.q_.set("Online"),t instanceof hc&&t.state===2&&t.cause)try{await async function(o,s){const a=s.cause;for(const l of s.targetIds)o.N_.has(l)&&(await o.remoteSyncer.rejectListen(l,a),o.N_.delete(l),o.Q_.removeTarget(l))}(n,t)}catch(i){H("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Qi(n,i)}else if(t instanceof Ni?n.Q_.Ke(t):t instanceof uc?n.Q_.He(t):n.Q_.We(t),!e.isEqual(W.min()))try{const i=await Ac(n.localStore);e.compareTo(i)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((d,h)=>{if(d.resumeToken.approximateByteSize()>0){const b=s.N_.get(h);b&&s.N_.set(h,b.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,h)=>{const b=s.N_.get(d);if(!b)return;s.N_.set(d,b.withResumeToken(Tt.EMPTY_BYTE_STRING,b.snapshotVersion)),Ic(s,d);const m=new ve(b.target,d,h,b.sequenceNumber);Or(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(i){H("RemoteStore","Failed to raise snapshot:",i),await Qi(n,i)}}async function Qi(n,t,e){if(!ni(t))throw t;n.L_.add(1),await ai(n),n.q_.set("Offline"),e||(e=()=>Ac(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await so(n)})}function Cc(n,t){return t().catch(e=>Qi(n,e,t))}async function ao(n){const t=K(n),e=Ie(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Lf(t);)try{const o=await bf(t.localStore,i);if(o===null){t.O_.length===0&&e.o_();break}i=o.batchId,Ff(t,o)}catch(o){await Qi(t,o)}Rc(t)&&Sc(t)}function Lf(n){return $e(n)&&n.O_.length<10}function Ff(n,t){n.O_.push(t);const e=Ie(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Rc(n){return $e(n)&&!Ie(n).n_()&&n.O_.length>0}function Sc(n){Ie(n).start()}async function Mf(n){Ie(n).p_()}async function zf(n){const t=Ie(n);for(const e of n.O_)t.m_(e.mutations)}async function Of(n,t,e){const i=n.O_.shift(),o=Vr.from(i,t,e);await Cc(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await ao(n)}async function jf(n,t){t&&Ie(n).V_&&await async function(i,o){if(function(a){return cc(a)&&a!==k.ABORTED}(o.code)){const s=i.O_.shift();Ie(i).s_(),await Cc(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,o)),await ao(i)}}(n,t),Rc(n)&&Sc(n)}async function Za(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const i=$e(e);e.L_.add(3),await ai(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await so(e)}async function qf(n,t){const e=K(n);t?(e.L_.delete(2),await so(e)):t||(e.L_.add(2),await ai(e),e.q_.set("Unknown"))}function gn(n){return n.K_||(n.K_=function(e,i,o){const s=K(e);return s.w_(),new Cf(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)}(n.datastore,n.asyncQueue,{Eo:Vf.bind(null,n),Ro:Df.bind(null,n),mo:Bf.bind(null,n),d_:Nf.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),qr(n)?jr(n):n.q_.set("Unknown")):(await n.K_.stop(),Tc(n))})),n.K_}function Ie(n){return n.U_||(n.U_=function(e,i,o){const s=K(e);return s.w_(),new Rf(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Mf.bind(null,n),mo:jf.bind(null,n),f_:zf.bind(null,n),g_:Of.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await ao(n)):(await n.U_.stop(),n.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,e,i,o,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=o,this.removalCallback=s,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,o,s){const a=Date.now()+i,l=new Hr(t,e,a,o,s);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ur(n,t){if(he("AsyncQueue",`${t}: ${n}`),ni(n))return new O(k.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.comparator=t?(e,i)=>t(e,i)||U.comparator(e.key,i.key):(e,i)=>U.comparator(e.key,i.key),this.keyedMap=Fn(),this.sortedSet=new ut(this.comparator)}static emptySet(t){return new on(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof on)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const o=e.getNext().key,s=i.getNext().key;if(!o.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new on;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.W_=new ut(U.comparator)}track(t){const e=t.doc.key,i=this.W_.get(e);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(e,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(e):t.type===1&&i.type===2?this.W_=this.W_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):Q():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,i)=>{t.push(i)}),t}}class dn{constructor(t,e,i,o,s,a,l,d,h){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(t,e,i,o,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new dn(t,e,on.emptySet(e),a,i,o,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&to(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let o=0;o<e.length;o++)if(e[o].type!==i[o].type||!e[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Uf{constructor(){this.queries=tl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const o=K(e),s=o.queries;o.queries=tl(),s.forEach((a,l)=>{for(const d of l.j_)d.onError(i)})})(this,new O(k.ABORTED,"Firestore shutting down"))}}function tl(){return new mn(n=>Xl(n),to)}async function $r(n,t){const e=K(n);let i=3;const o=t.query;let s=e.queries.get(o);s?!s.H_()&&t.J_()&&(i=2):(s=new Hf,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await e.onListen(o,!0);break;case 1:s.z_=await e.onListen(o,!1);break;case 2:await e.onFirstRemoteStoreListen(o)}}catch(a){const l=Ur(a,`Initialization of query '${Ze(t.query)}' failed`);return void t.onError(l)}e.queries.set(o,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Wr(e)}async function Qr(n,t){const e=K(n),i=t.query;let o=3;const s=e.queries.get(i);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?o=t.J_()?0:1:!s.H_()&&t.J_()&&(o=2))}switch(o){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function $f(n,t){const e=K(n);let i=!1;for(const o of t){const s=o.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(o)&&(i=!0);a.z_=o}}i&&Wr(e)}function Qf(n,t,e){const i=K(n),o=i.queries.get(t);if(o)for(const s of o.j_)s.onError(e);i.queries.delete(t)}function Wr(n){n.Y_.forEach(t=>{t.next()})}var fr,el;(el=fr||(fr={})).ea="default",el.Cache="cache";class Gr{constructor(t,e,i){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const o of t.docChanges)o.type!==3&&i.push(o);t=new dn(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const i=e!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=dn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==fr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t){this.key=t}}class kc{constructor(t){this.key=t}}class Wf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=J(),this.mutatedKeys=J(),this.Aa=Jl(t),this.Ra=new on(this.Aa)}get Va(){return this.Ta}ma(t,e){const i=e?e.fa:new Ya,o=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=o,l=!1;const d=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,h=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((b,m)=>{const y=o.get(b),E=eo(this.query,m)?m:null,I=!!y&&this.mutatedKeys.has(y.key),R=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let S=!1;y&&E?y.data.isEqual(E.data)?I!==R&&(i.track({type:3,doc:E}),S=!0):this.ga(y,E)||(i.track({type:2,doc:E}),S=!0,(d&&this.Aa(E,d)>0||h&&this.Aa(E,h)<0)&&(l=!0)):!y&&E?(i.track({type:0,doc:E}),S=!0):y&&!E&&(i.track({type:1,doc:y}),S=!0,(d||h)&&(l=!0)),S&&(E?(a=a.add(E),s=R?s.add(b):s.delete(b)):(a=a.delete(b),s=s.delete(b)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const b=this.query.limitType==="F"?a.last():a.first();a=a.delete(b.key),s=s.delete(b.key),i.track({type:1,doc:b})}return{Ra:a,fa:i,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,o){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((b,m)=>function(E,I){const R=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return R(E)-R(I)}(b.type,m.type)||this.Aa(b.doc,m.doc)),this.pa(i),o=o!=null&&o;const l=e&&!o?this.ya():[],d=this.da.size===0&&this.current&&!o?1:0,h=d!==this.Ea;return this.Ea=d,a.length!==0||h?{snapshot:new dn(this.query,t.Ra,s,a,t.mutatedKeys,d===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ya,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=J(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const e=[];return t.forEach(i=>{this.da.has(i)||e.push(new kc(i))}),this.da.forEach(i=>{t.has(i)||e.push(new Pc(i))}),e}ba(t){this.Ta=t.Ts,this.da=J();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return dn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Gf{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class Kf{constructor(t){this.key=t,this.va=!1}}class Xf{constructor(t,e,i,o,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=o,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new mn(l=>Xl(l),to),this.Ma=new Map,this.xa=new Set,this.Oa=new ut(U.comparator),this.Na=new Map,this.La=new Nr,this.Ba={},this.ka=new Map,this.qa=cn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Jf(n,t,e=!0){const i=Fc(n);let o;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),o=s.view.Da()):o=await Vc(i,t,e,!0),o}async function Zf(n,t){const e=Fc(n);await Vc(e,t,!0,!1)}async function Vc(n,t,e,i){const o=await xf(n.localStore,oe(t)),s=o.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return i&&(l=await Yf(n,t,s,a==="current",o.resumeToken)),n.isPrimaryClient&&e&&_c(n.remoteStore,o),l}async function Yf(n,t,e,i,o){n.Ka=(m,y,E)=>async function(R,S,D,B){let N=S.view.ma(D);N.ns&&(N=await Ka(R.localStore,S.query,!1).then(({documents:f})=>S.view.ma(f,N)));const j=B&&B.targetChanges.get(S.targetId),z=B&&B.targetMismatches.get(S.targetId)!=null,T=S.view.applyChanges(N,R.isPrimaryClient,j,z);return il(R,S.targetId,T.wa),T.snapshot}(n,m,y,E);const s=await Ka(n.localStore,t,!0),a=new Wf(t,s.Ts),l=a.ma(s.documents),d=si.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",o),h=a.applyChanges(l,n.isPrimaryClient,d);il(n,e,h.wa);const b=new Gf(t,e,a);return n.Fa.set(t,b),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),h.snapshot}async function tm(n,t,e){const i=K(n),o=i.Fa.get(t),s=i.Ma.get(o.targetId);if(s.length>1)return i.Ma.set(o.targetId,s.filter(a=>!to(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await pr(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),e&&zr(i.remoteStore,o.targetId),mr(i,o.targetId)}).catch(ei)):(mr(i,o.targetId),await pr(i.localStore,o.targetId,!0))}async function em(n,t){const e=K(n),i=e.Fa.get(t),o=e.Ma.get(i.targetId);e.isPrimaryClient&&o.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),zr(e.remoteStore,i.targetId))}async function nm(n,t,e){const i=cm(n);try{const o=await function(a,l){const d=K(a),h=yt.now(),b=l.reduce((E,I)=>E.add(I.key),J());let m,y;return d.persistence.runTransaction("Locally write mutations","readwrite",E=>{let I=pe(),R=J();return d.cs.getEntries(E,b).next(S=>{I=S,I.forEach((D,B)=>{B.isValidDocument()||(R=R.add(D))})}).next(()=>d.localDocuments.getOverlayedDocuments(E,I)).next(S=>{m=S;const D=[];for(const B of l){const N=Ip(B,m.get(B.key).overlayedDocument);N!=null&&D.push(new Ce(B.key,N,ql(N.value.mapValue),gt.exists(!0)))}return d.mutationQueue.addMutationBatch(E,h,D,l)}).next(S=>{y=S;const D=S.applyToLocalDocumentSet(m,R);return d.documentOverlayCache.saveOverlays(E,S.batchId,D)})}).then(()=>({batchId:y.batchId,changes:Yl(m)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(o.batchId),function(a,l,d){let h=a.Ba[a.currentUser.toKey()];h||(h=new ut(nt)),h=h.insert(l,d),a.Ba[a.currentUser.toKey()]=h}(i,o.batchId,e),await li(i,o.changes),await ao(i.remoteStore)}catch(o){const s=Ur(o,"Failed to persist write");e.reject(s)}}async function Dc(n,t){const e=K(n);try{const i=await yf(e.localStore,t);t.targetChanges.forEach((o,s)=>{const a=e.Na.get(s);a&&(tt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?a.va=!0:o.modifiedDocuments.size>0?tt(a.va):o.removedDocuments.size>0&&(tt(a.va),a.va=!1))}),await li(e,i,t)}catch(i){await ei(i)}}function nl(n,t,e){const i=K(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const o=[];i.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&o.push(l.snapshot)}),function(a,l){const d=K(a);d.onlineState=l;let h=!1;d.queries.forEach((b,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&Wr(d)}(i.eventManager,t),o.length&&i.Ca.d_(o),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function im(n,t,e){const i=K(n);i.sharedClientState.updateQueryState(t,"rejected",e);const o=i.Na.get(t),s=o&&o.key;if(s){let a=new ut(U.comparator);a=a.insert(s,xt.newNoDocument(s,W.min()));const l=J().add(s),d=new oo(W.min(),new Map,new ut(nt),a,l);await Dc(i,d),i.Oa=i.Oa.remove(s),i.Na.delete(t),Kr(i)}else await pr(i.localStore,t,!1).then(()=>mr(i,t,e)).catch(ei)}async function om(n,t){const e=K(n),i=t.batch.batchId;try{const o=await gf(e.localStore,t);Nc(e,i,null),Bc(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await li(e,o)}catch(o){await ei(o)}}async function rm(n,t,e){const i=K(n);try{const o=await function(a,l){const d=K(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let b;return d.mutationQueue.lookupMutationBatch(h,l).next(m=>(tt(m!==null),b=m.keys(),d.mutationQueue.removeMutationBatch(h,m))).next(()=>d.mutationQueue.performConsistencyCheck(h)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(h,b,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,b)).next(()=>d.localDocuments.getDocuments(h,b))})}(i.localStore,t);Nc(i,t,e),Bc(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await li(i,o)}catch(o){await ei(o)}}function Bc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Nc(n,t,e){const i=K(n);let o=i.Ba[i.currentUser.toKey()];if(o){const s=o.get(t);s&&(e?s.reject(e):s.resolve(),o=o.remove(t)),i.Ba[i.currentUser.toKey()]=o}}function mr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Ma.get(t))n.Fa.delete(i),e&&n.Ca.$a(i,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(i=>{n.La.containsKey(i)||Lc(n,i)})}function Lc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(zr(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Kr(n))}function il(n,t,e){for(const i of e)i instanceof Pc?(n.La.addReference(i.key,t),sm(n,i)):i instanceof kc?(H("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,t),n.La.containsKey(i.key)||Lc(n,i.key)):Q()}function sm(n,t){const e=t.key,i=e.path.canonicalString();n.Oa.get(e)||n.xa.has(i)||(H("SyncEngine","New document in limbo: "+e),n.xa.add(i),Kr(n))}function Kr(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new U(st.fromString(t)),i=n.qa.next();n.Na.set(i,new Kf(e)),n.Oa=n.Oa.insert(e,i),_c(n.remoteStore,new ve(oe(Yi(e.path)),i,"TargetPurposeLimboResolution",Ir.oe))}}async function li(n,t,e){const i=K(n),o=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((l,d)=>{a.push(i.Ka(d,t,e).then(h=>{var b;if((h||e)&&i.isPrimaryClient){const m=h?!h.fromCache:(b=e==null?void 0:e.targetChanges.get(d.targetId))===null||b===void 0?void 0:b.current;i.sharedClientState.updateQueryState(d.targetId,m?"current":"not-current")}if(h){o.push(h);const m=Fr.Wi(d.targetId,h);s.push(m)}}))}),await Promise.all(a),i.Ca.d_(o),await async function(d,h){const b=K(d);try{await b.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(h,y=>V.forEach(y.$i,E=>b.persistence.referenceDelegate.addReference(m,y.targetId,E)).next(()=>V.forEach(y.Ui,E=>b.persistence.referenceDelegate.removeReference(m,y.targetId,E)))))}catch(m){if(!ni(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const E=b.os.get(y),I=E.snapshotVersion,R=E.withLastLimboFreeSnapshotVersion(I);b.os=b.os.insert(y,R)}}}(i.localStore,s))}async function am(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){H("SyncEngine","User change. New user:",t.toKey());const i=await wc(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(d=>{d.reject(new O(k.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await li(e,i.hs)}}function lm(n,t){const e=K(n),i=e.Na.get(t);if(i&&i.va)return J().add(i.key);{let o=J();const s=e.Ma.get(t);if(!s)return o;for(const a of s){const l=e.Fa.get(a);o=o.unionWith(l.view.Va)}return o}}function Fc(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Dc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=im.bind(null,t),t.Ca.d_=$f.bind(null,t.eventManager),t.Ca.$a=Qf.bind(null,t.eventManager),t}function cm(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=om.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rm.bind(null,t),t}class Wi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ro(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return mf(this.persistence,new pf,t.initialUser,this.serializer)}Ga(t){return new df(Lr.Zr,this.serializer)}Wa(t){return new Af}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wi.provider={build:()=>new Wi};class gr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>nl(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=am.bind(null,this.syncEngine),await qf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Uf}()}createDatastore(t){const e=ro(t.databaseInfo.databaseId),i=function(s){return new Tf(s)}(t.databaseInfo);return function(s,a,l,d){return new Sf(s,a,l,d)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,o,s,a,l){return new kf(i,o,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>nl(this.syncEngine,e,0),function(){return Ja.D()?new Ja:new Ef}())}createSyncEngine(t,e){return function(o,s,a,l,d,h,b){const m=new Xf(o,s,a,l,d,h);return b&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(o){const s=K(o);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ai(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}gr.provider={build:()=>new gr};/**
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
 */class Xr{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):he("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new O(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(o,s){const a=K(o),l={documents:s.map(m=>$i(a.serializer,m))},d=await a.Lo("BatchGetDocuments",a.serializer.databaseId,st.emptyPath(),l,s.length),h=new Map;d.forEach(m=>{const y=Mp(a.serializer,m);h.set(y.key.toString(),y)});const b=[];return s.forEach(m=>{const y=h.get(m.toString());tt(!!y),b.push(y)}),b}(this.datastore,t);return e.forEach(i=>this.recordVersion(i)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(t.toString())}delete(t){this.write(new ri(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,i)=>{const o=U.fromPath(i);this.mutations.push(new lc(o,this.precondition(o)))}),await async function(i,o){const s=K(i),a={writes:o.map(l=>yc(s.serializer,l))};await s.Mo("Commit",s.serializer.databaseId,st.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw Q();e=W.min()}const i=this.readVersions.get(t.key.toString());if(i){if(!e.isEqual(i))throw new O(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(W.min())?gt.exists(!1):gt.updateTime(e):gt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(W.min()))throw new O(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return gt.updateTime(e)}return gt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class um{constructor(t,e,i,o,s){this.asyncQueue=t,this.datastore=e,this.options=i,this.updateFunction=o,this.deferred=s,this._u=i.maxAttempts,this.t_=new Mr(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new dm(this.datastore),e=this.cu(t);e&&e.then(i=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(i)}).catch(o=>{this.lu(o)}))}).catch(i=>{this.lu(i)})})}cu(t){try{const e=this.updateFunction(t);return!ii(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!cc(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,e,i,o,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=o,this.user=Dt.UNAUTHENTICATED,this.clientId=zl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async a=>{H("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(H("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ur(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Wo(n,t){n.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await wc(t.localStore,o),i=o)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ol(n,t){n.asyncQueue.verifyOperationInProgress();const e=await pm(n);H("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Za(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Za(t.remoteStore,o)),n._onlineComponents=t}async function pm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(o){return o.name==="FirebaseError"?o.code===k.FAILED_PRECONDITION||o.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(e))throw e;rn("Error using user provided cache. Falling back to memory cache: "+e),await Wo(n,new Wi)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Wo(n,new Wi);return n._offlineComponents}async function Jr(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await ol(n,n._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await ol(n,new gr))),n._onlineComponents}function fm(n){return Jr(n).then(t=>t.syncEngine)}function mm(n){return Jr(n).then(t=>t.datastore)}async function Gi(n){const t=await Jr(n),e=t.eventManager;return e.onListen=Jf.bind(null,t.syncEngine),e.onUnlisten=tm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Zf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=em.bind(null,t.syncEngine),e}function gm(n,t,e={}){const i=new ie;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,d,h){const b=new Xr({next:y=>{b.Za(),a.enqueueAndForget(()=>Qr(s,m));const E=y.docs.has(l);!E&&y.fromCache?h.reject(new O(k.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&y.fromCache&&d&&d.source==="server"?h.reject(new O(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Gr(Yi(l.path),b,{includeMetadataChanges:!0,_a:!0});return $r(s,m)}(await Gi(n),n.asyncQueue,t,e,i)),i.promise}function ym(n,t,e={}){const i=new ie;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,d,h){const b=new Xr({next:y=>{b.Za(),a.enqueueAndForget(()=>Qr(s,m)),y.fromCache&&d.source==="server"?h.reject(new O(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Gr(l,b,{includeMetadataChanges:!0,_a:!0});return $r(s,m)}(await Gi(n),n.asyncQueue,t,e,i)),i.promise}/**
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
 */function Mc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */function zc(n,t,e){if(!e)throw new O(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function vm(n,t,e,i){if(t===!0&&i===!0)throw new O(k.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function sl(n){if(!U.isDocumentKey(n))throw new O(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function al(n){if(U.isDocumentKey(n))throw new O(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Q()}function Bt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=lo(n);throw new O(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class ll{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new O(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}vm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mc((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class co{constructor(t,e,i,o){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ll({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ll(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Dh;switch(i.type){case"firstParty":return new Fh(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new O(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=rl.get(e);i&&(H("ComponentProvider","Removing Datastore"),rl.delete(e),i.terminate())}(this),Promise.resolve()}}function bm(n,t,e,i={}){var o;const s=(n=Bt(n,co))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&rn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let l,d;if(typeof i.mockUserToken=="string")l=i.mockUserToken,d=Dt.MOCK_USER;else{l=hu(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new O(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Dt(h)}n._authCredentials=new Bh(new Ml(l,d))}}/**
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
 */class Re{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Re(this.firestore,t,this._query)}}class It{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class Ae extends Re{constructor(t,e,i){super(t,e,Yi(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new U(t))}withConverter(t){return new Ae(this.firestore,t,this._path)}}function vt(n,t,...e){if(n=$t(n),zc("collection","path",t),n instanceof co){const i=st.fromString(t,...e);return al(i),new Ae(n,null,i)}{if(!(n instanceof It||n instanceof Ae))throw new O(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(t,...e));return al(i),new Ae(n.firestore,null,i)}}function it(n,t,...e){if(n=$t(n),arguments.length===1&&(t=zl.newId()),zc("doc","path",t),n instanceof co){const i=st.fromString(t,...e);return sl(i),new It(n,null,new U(i))}{if(!(n instanceof It||n instanceof Ae))throw new O(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(t,...e));return sl(i),new It(n.firestore,n instanceof Ae?n.converter:null,new U(i))}}/**
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
 */class cl{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Mr(this,"async_queue_retry"),this.Vu=()=>{const i=Qo();i&&H("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=Qo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Qo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ie;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!ni(t))throw t;H("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const o=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw he("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const o=Hr.createAndSchedule(this,t,e,i,s=>this.yu(s));return this.Tu.push(o),o}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function dl(n){return function(e,i){if(typeof e!="object"||e===null)return!1;const o=e;for(const s of i)if(s in o&&typeof o[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Jt extends co{constructor(t,e,i,o){super(t,e,i,o),this.type="firestore",this._queue=new cl,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new cl(t),this._firestoreClient=void 0,await t}}}function xm(n,t){const e=typeof n=="object"?n:wh(),i=typeof n=="string"?n:"(default)",o=yh(e,"firestore").getImmediate({identifier:i});if(!o._initialized){const s=du("firestore");s&&bm(o,...s)}return o}function yn(n){if(n._terminated)throw new O(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||wm(n),n._firestoreClient}function wm(n){var t,e,i;const o=n._freezeSettings(),s=function(l,d,h,b){return new Xh(l,d,h,b.host,b.ssl,b.experimentalForceLongPolling,b.experimentalAutoDetectLongPolling,Mc(b.experimentalLongPollingOptions),b.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((e=o.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new hm(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class He{constructor(t){this._byteString=t}static fromBase64String(t){try{return new He(Tt.fromBase64String(t))}catch(e){throw new O(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new He(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class vn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class uo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}/**
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
 */const Am=/^__.*__$/;class Em{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new oi(t,this.data,e,this.fieldTransforms)}}class Oc{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new Ce(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function jc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class ts{constructor(t,e,i,o,s,a){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=o,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ts(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Fu({path:i,xu:!1});return o.Ou(t),o}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ki(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(jc(this.Cu)&&Am.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class _m{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||ro(t)}Qu(t,e,i,o=!1){return new ts({Cu:t,methodName:e,qu:i,path:Et.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bn(n){const t=n._freezeSettings(),e=ro(n._databaseId);return new _m(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ho(n,t,e,i,o,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,o);os("Data must be an object, but it was:",a,i);const l=qc(i,a);let d,h;if(s.merge)d=new Ht(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const b=[];for(const m of s.mergeFields){const y=yr(t,m,e);if(!a.contains(y))throw new O(k.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Uc(b,y)||b.push(y)}d=new Ht(b),h=a.fieldTransforms.filter(m=>d.covers(m.field))}else d=null,h=a.fieldTransforms;return new Em(new Mt(l),d,h)}class po extends uo{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof po}}class es extends uo{_toFieldTransform(t){return new wp(t.path,new Jn)}isEqual(t){return t instanceof es}}function ns(n,t,e,i){const o=n.Qu(1,t,e);os("Data must be an object, but it was:",o,i);const s=[],a=Mt.empty();Ue(i,(d,h)=>{const b=rs(t,d,e);h=$t(h);const m=o.Nu(b);if(h instanceof po)s.push(b);else{const y=ci(h,m);y!=null&&(s.push(b),a.set(b,y))}});const l=new Ht(s);return new Oc(a,l,o.fieldTransforms)}function is(n,t,e,i,o,s){const a=n.Qu(1,t,e),l=[yr(t,i,e)],d=[o];if(s.length%2!=0)throw new O(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(yr(t,s[y])),d.push(s[y+1]);const h=[],b=Mt.empty();for(let y=l.length-1;y>=0;--y)if(!Uc(h,l[y])){const E=l[y];let I=d[y];I=$t(I);const R=a.Nu(E);if(I instanceof po)h.push(E);else{const S=ci(I,R);S!=null&&(h.push(E),b.set(E,S))}}const m=new Ht(h);return new Oc(b,m,a.fieldTransforms)}function Im(n,t,e,i=!1){return ci(e,n.Qu(i?4:3,t))}function ci(n,t){if(Hc(n=$t(n)))return os("Unsupported field value:",t,n),qc(n,t);if(n instanceof uo)return function(i,o){if(!jc(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(o);s&&o.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,o){const s=[];let a=0;for(const l of i){let d=ci(l,o.Lu(a));d==null&&(d={nullValue:"NULL_VALUE"}),s.push(d),a++}return{arrayValue:{values:s}}}(n,t)}return function(i,o){if((i=$t(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return vp(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=yt.fromDate(i);return{timestampValue:Ui(o.serializer,s)}}if(i instanceof yt){const s=new yt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ui(o.serializer,s)}}if(i instanceof Zr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof He)return{bytesValue:pc(o.serializer,i._byteString)};if(i instanceof It){const s=o.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw o.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Br(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Yr)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Bu("VectorValues must only contain numeric values.");return kr(l.serializer,d)})}}}}}}(i,o);throw o.Bu(`Unsupported field value: ${lo(i)}`)}(n,t)}function qc(n,t){const e={};return Ol(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ue(n,(i,o)=>{const s=ci(o,t.Mu(i));s!=null&&(e[i]=s)}),{mapValue:{fields:e}}}function Hc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof yt||n instanceof Zr||n instanceof He||n instanceof It||n instanceof uo||n instanceof Yr)}function os(n,t,e){if(!Hc(e)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(e)){const i=lo(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function yr(n,t,e){if((t=$t(t))instanceof vn)return t._internalPath;if(typeof t=="string")return rs(n,t);throw Ki("Field path arguments must be of type string or ",n,!1,void 0,e)}const Tm=new RegExp("[~\\*/\\[\\]]");function rs(n,t,e){if(t.search(Tm)>=0)throw Ki(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new vn(...t.split("."))._internalPath}catch{throw Ki(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ki(n,t,e,i,o){const s=i&&!i.isEmpty(),a=o!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(s||a)&&(d+=" (found",s&&(d+=` in field ${i}`),a&&(d+=` in document ${o}`),d+=")"),new O(k.INVALID_ARGUMENT,l+n+d)}function Uc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Xi{constructor(t,e,i,o,s){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=o,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Cm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ss("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Cm extends Xi{data(){return super.data()}}function ss(n,t){return typeof t=="string"?rs(n,t):t instanceof vn?t._internalPath:t._delegate._internalPath}/**
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
 */function $c(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class as{}class Qc extends as{}function fo(n,t,...e){let i=[];t instanceof as&&i.push(t),i=i.concat(e),function(s){const a=s.filter(d=>d instanceof cs).length,l=s.filter(d=>d instanceof ls).length;if(a>1||a>0&&l>0)throw new O(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class ls extends Qc{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new ls(t,e,i)}_apply(t){const e=this._parse(t);return Wc(t._query,e),new Re(t.firestore,t.converter,lr(t._query,e))}_parse(t){const e=bn(t.firestore);return function(s,a,l,d,h,b,m){let y;if(h.isKeyField()){if(b==="array-contains"||b==="array-contains-any")throw new O(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${b}' queries on documentId().`);if(b==="in"||b==="not-in"){hl(m,b);const E=[];for(const I of m)E.push(ul(d,s,I));y={arrayValue:{values:E}}}else y=ul(d,s,m)}else b!=="in"&&b!=="not-in"&&b!=="array-contains-any"||hl(m,b),y=Im(l,a,m,b==="in"||b==="not-in");return mt.create(h,b,y)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class cs extends as{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new cs(t,e)}_parse(t){const e=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return e.length===1?e[0]:Xt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(o,s){let a=o;const l=s.getFlattenedFilters();for(const d of l)Wc(a,d),a=lr(a,d)}(t._query,e),new Re(t.firestore,t.converter,lr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ds extends Qc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ds(t,e)}_apply(t){const e=function(o,s,a){if(o.startAt!==null)throw new O(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new O(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xn(s,a)}(t._query,this._field,this._direction);return new Re(t.firestore,t.converter,function(o,s){const a=o.explicitOrderBy.concat([s]);return new fn(o.path,o.collectionGroup,a,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(t._query,e))}}function mo(n,t="asc"){const e=t,i=ss("orderBy",n);return ds._create(i,e)}function ul(n,t,e){if(typeof(e=$t(e))=="string"){if(e==="")throw new O(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kl(t)&&e.indexOf("/")!==-1)throw new O(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(st.fromString(e));if(!U.isDocumentKey(i))throw new O(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Va(n,new U(i))}if(e instanceof It)return Va(n,e._key);throw new O(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lo(e)}.`)}function hl(n,t){if(!Array.isArray(n)||n.length===0)throw new O(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Wc(n,t){const e=function(o,s){for(const a of o)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new O(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Gc{convertValue(t,e="none"){switch(qe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(je(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Q()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return Ue(t,(o,s)=>{i[o]=this.convertValue(s,e)}),i}convertVectorValue(t){var e,i,o;const s=(o=(i=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(a=>pt(a.doubleValue));return new Yr(s)}convertGeoPoint(t){return new Zr(pt(t.latitude),pt(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Cr(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Wn(t));default:return null}}convertTimestamp(t){const e=_e(t);return new yt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=st.fromString(t);tt(xc(i));const o=new Gn(i.get(1),i.get(3)),s=new U(i.popFirst(5));return o.isEqual(e)||he(`Document ${s} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function go(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class Rm extends Gc{constructor(t){super(),this.firestore=t}convertBytes(t){return new He(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}/**
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
 */class en{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class us extends Xi{constructor(t,e,i,o,s,a){super(t,e,i,o,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Li(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(ss("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class Li extends us{data(t={}){return super.data(t)}}class Kc{constructor(t,e,i,o){this._firestore=t,this._userDataWriter=e,this._snapshot=o,this.metadata=new en(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new Li(this._firestore,this._userDataWriter,i.key,i,new en(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(o,s){if(o._snapshot.oldDocs.isEmpty()){let a=0;return o._snapshot.docChanges.map(l=>{const d=new Li(o._firestore,o._userDataWriter,l.doc.key,l.doc,new en(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const d=new Li(o._firestore,o._userDataWriter,l.doc.key,l.doc,new en(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);let h=-1,b=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),b=a.indexOf(l.doc.key)),{type:Sm(l.type),doc:d,oldIndex:h,newIndex:b}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Sm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function Zt(n){n=Bt(n,It);const t=Bt(n.firestore,Jt);return gm(yn(t),n._key).then(e=>Zc(t,n,e))}class yo extends Gc{constructor(t){super(),this.firestore=t}convertBytes(t){return new He(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function Qe(n){n=Bt(n,Re);const t=Bt(n.firestore,Jt),e=yn(t),i=new yo(t);return $c(n._query),ym(e,n._query).then(o=>new Kc(t,i,n,o))}function se(n,t,e){n=Bt(n,It);const i=Bt(n.firestore,Jt),o=go(n.converter,t,e);return di(i,[ho(bn(i),"setDoc",n._key,o,n.converter!==null,e).toMutation(n._key,gt.none())])}function Yt(n,t,e,...i){n=Bt(n,It);const o=Bt(n.firestore,Jt),s=bn(o);let a;return a=typeof(t=$t(t))=="string"||t instanceof vn?is(s,"updateDoc",n._key,t,e,i):ns(s,"updateDoc",n._key,t),di(o,[a.toMutation(n._key,gt.exists(!0))])}function Xc(n){return di(Bt(n.firestore,Jt),[new ri(n._key,gt.none())])}function Jc(n,t){const e=Bt(n.firestore,Jt),i=it(n),o=go(n.converter,t);return di(e,[ho(bn(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,gt.exists(!1))]).then(()=>i)}function Se(n,...t){var e,i,o;n=$t(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||dl(t[a])||(s=t[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(dl(t[a])){const m=t[a];t[a]=(e=m.next)===null||e===void 0?void 0:e.bind(m),t[a+1]=(i=m.error)===null||i===void 0?void 0:i.bind(m),t[a+2]=(o=m.complete)===null||o===void 0?void 0:o.bind(m)}let d,h,b;if(n instanceof It)h=Bt(n.firestore,Jt),b=Yi(n._key.path),d={next:m=>{t[a]&&t[a](Zc(h,n,m))},error:t[a+1],complete:t[a+2]};else{const m=Bt(n,Re);h=Bt(m.firestore,Jt),b=m._query;const y=new yo(h);d={next:E=>{t[a]&&t[a](new Kc(h,y,m,E))},error:t[a+1],complete:t[a+2]},$c(n._query)}return function(y,E,I,R){const S=new Xr(R),D=new Gr(E,S,I);return y.asyncQueue.enqueueAndForget(async()=>$r(await Gi(y),D)),()=>{S.Za(),y.asyncQueue.enqueueAndForget(async()=>Qr(await Gi(y),D))}}(yn(h),b,l,d)}function di(n,t){return function(i,o){const s=new ie;return i.asyncQueue.enqueueAndForget(async()=>nm(await fm(i),o,s)),s.promise}(yn(n),t)}function Zc(n,t,e){const i=e.docs.get(t._key),o=new yo(n);return new us(n,o,t._key,i,new en(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const Pm={maxAttempts:5};/**
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
 */class km{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=bn(t)}set(t,e,i){this._verifyNotCommitted();const o=ye(t,this._firestore),s=go(o.converter,e,i),a=ho(this._dataReader,"WriteBatch.set",o._key,s,o.converter!==null,i);return this._mutations.push(a.toMutation(o._key,gt.none())),this}update(t,e,i,...o){this._verifyNotCommitted();const s=ye(t,this._firestore);let a;return a=typeof(e=$t(e))=="string"||e instanceof vn?is(this._dataReader,"WriteBatch.update",s._key,e,i,o):ns(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,gt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ye(t,this._firestore);return this._mutations=this._mutations.concat(new ri(e._key,gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ye(n,t){if((n=$t(n)).firestore!==t)throw new O(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class Vm extends class{constructor(e,i){this._firestore=e,this._transaction=i,this._dataReader=bn(e)}get(e){const i=ye(e,this._firestore),o=new Rm(this._firestore);return this._transaction.lookup([i._key]).then(s=>{if(!s||s.length!==1)return Q();const a=s[0];if(a.isFoundDocument())return new Xi(this._firestore,o,a.key,a,i.converter);if(a.isNoDocument())return new Xi(this._firestore,o,i._key,null,i.converter);throw Q()})}set(e,i,o){const s=ye(e,this._firestore),a=go(s.converter,i,o),l=ho(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,o);return this._transaction.set(s._key,l),this}update(e,i,o,...s){const a=ye(e,this._firestore);let l;return l=typeof(i=$t(i))=="string"||i instanceof vn?is(this._dataReader,"Transaction.update",a._key,i,o,s):ns(this._dataReader,"Transaction.update",a._key,i),this._transaction.update(a._key,l),this}delete(e){const i=ye(e,this._firestore);return this._transaction.delete(i._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ye(t,this._firestore),i=new yo(this._firestore);return super.get(t).then(o=>new us(this._firestore,i,e._key,o._document,new en(!1,!1),e.converter))}}function Dm(n,t,e){n=Bt(n,Jt);const i=Object.assign(Object.assign({},Pm),e);return function(s){if(s.maxAttempts<1)throw new O(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(s,a,l){const d=new ie;return s.asyncQueue.enqueueAndForget(async()=>{const h=await mm(s);new um(s.asyncQueue,h,l,a,d).au()}),d.promise}(yn(n),o=>t(new Vm(n,o)),i)}function Yc(){return new es("serverTimestamp")}/**
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
 */function hs(n){return yn(n=Bt(n,Jt)),new km(n,t=>di(n,t))}(function(t,e=!0){(function(o){pn=o})(xh),Oi(new Un("firestore",(i,{instanceIdentifier:o,options:s})=>{const a=i.getProvider("app").getImmediate(),l=new Jt(new Nh(i.getProvider("auth-internal")),new zh(i.getProvider("app-check-internal")),function(h,b){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new O(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(h.options.projectId,b)}(a,o),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),nn(Ca,"4.7.3",t),nn(Ca,"4.7.3","esm2017")})();const Bm={apiKey:"AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",authDomain:"feria-vinos-sucovi-2027.firebaseapp.com",databaseURL:"https://feria-vinos-sucovi-2027-default-rtdb.firebaseio.com",projectId:"feria-vinos-sucovi-2027",storageBucket:"feria-vinos-sucovi-2027.firebasestorage.app",messagingSenderId:"1686119758",appId:"1:1686119758:web:2c3c6d96e36f1276052a1f",measurementId:"G-VRMTQ3SS7E"},Nm=Sl(Bm),G=xm(Nm),zt=[{id:0,key:"368813",nombre:"Sucovi",region:"Organización",pass:"stand00"},{id:1,key:"d48429",nombre:"Alta Vista",region:"Mendoza",pass:"stand01"},{id:2,key:"ba356c",nombre:"Andillian",region:"Mendoza",pass:"stand02"},{id:3,key:"451e62",nombre:"Ante Nada",region:"Mendoza",pass:"stand03"},{id:4,key:"835c2d",nombre:"Bodega Benegas",region:"Mendoza",pass:"stand04"},{id:5,key:"e45a28",nombre:"Bianchi",region:"San Rafael",pass:"stand05"},{id:6,key:"12ac1c",nombre:"Catena Zapata",region:"Luján de Cuyo",pass:"stand06"},{id:7,key:"18abc3",nombre:"Bodegas Bórbore",region:"Mendoza (1936)",pass:"stand07"},{id:8,key:"452b71",nombre:"Fábula Wines",region:"Mendoza",pass:"stand08"},{id:9,key:"0c55a5",nombre:"Finca Iral",region:"Mendoza",pass:"stand09"},{id:10,key:"5cb108",nombre:"Giménez Riili",region:"Mendoza",pass:"stand10"},{id:11,key:"27f372",nombre:"Jorge Rubio",region:"Mendoza",pass:"stand11"},{id:12,key:"a9d27f",nombre:"La Coste de los Andes",region:"Mendoza",pass:"stand12"},{id:13,key:"b5be6e",nombre:"Las Perdices",region:"Mendoza",pass:"stand13"},{id:14,key:"7da93b",nombre:"Lorenzo de Agrelo",region:"Mendoza",pass:"stand14"},{id:15,key:"f52ab4",nombre:"Pannunzio Wines",region:"Mendoza",pass:"stand15"},{id:16,key:"a32dd6",nombre:"Bodega Patritti",region:"Mendoza",pass:"stand16"},{id:17,key:"175358",nombre:"Rosell Boher",region:"Mendoza",pass:"stand17"},{id:18,key:"4a2b00",nombre:"Valle de la Puerta",region:"La Rioja",pass:"stand18"},{id:19,key:"b3c4d5",nombre:"Bertelli",region:"Buenos Aires",pass:"stand19"},{id:20,key:"e6f7a8",nombre:"Familia Aicardi",region:"Neuquén",pass:"stand20"},{id:21,key:"b9c0d1",nombre:"Finca Flichman",region:"Mendoza",pass:"stand21"},{id:22,key:"e2f3a4",nombre:"Don Martino Wines",region:"Mendoza",pass:"stand22"},{id:23,key:"b5c6d7",nombre:"Séptima",region:"Mendoza",pass:"stand23"}];async function vr(n){return await Jc(vt(G,"invitados"),{...n,creadoEn:Yc()})}async function be(n,t){await Yt(it(G,"invitados",n),t)}function vo(n){return Se(fo(vt(G,"invitados"),mo("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}async function ti(n){const e=(await Qe(vt(G,"invitados"))).docs.find(i=>i.data().token===n);return e?{fireId:e.id,...e.data()}:null}async function Lm(n){const e=(await Qe(vt(G,"invitados"))).docs.find(i=>i.data().codigo===n);return e?{fireId:e.id,...e.data()}:null}async function td(n,t,e,i,o){const s=it(G,"carritos",n,"items",String(t)),a=await Zt(s);if(a.exists()){const l=a.data(),d=l.items||[],h=d.findIndex(b=>b.key===i.key);h>=0?d[h]=i:d.push(i),await se(s,{standId:t,standNombre:e,items:d,retiro:o||l.retiro||"stand"})}else await se(s,{standId:t,standNombre:e,items:[i],retiro:o||"stand"})}async function ps(n,t,e){await Yt(it(G,"carritos",n,"items",String(t)),{retiro:e})}async function Ji(n,t,e){const i=it(G,"carritos",n,"items",String(t)),o=await Zt(i);if(!o.exists())return;const s=(o.data().items||[]).filter(a=>a.key!==e);s.length?await Yt(i,{items:s}):await Xc(i)}async function br(n){return(await Qe(vt(G,"carritos",n,"items"))).docs.map(e=>({standId:e.id,...e.data()}))}function fs(n,t){return Se(vt(G,"carritos",n,"items"),e=>t(e.docs.map(i=>({standDocId:i.id,...i.data()}))))}async function xr(n){const t=await Qe(vt(G,"carritos",n,"items")),e=hs(G);t.docs.forEach(i=>e.delete(i.ref)),await e.commit()}async function ed(n,t){const e=it(G,"config","contadores"),i=await Zt(e);let o=(i.exists()&&i.data().voucher||0)+1;const s=hs(G),a=[];return t.forEach((l,d)=>{const h=it(vt(G,"pedidos"));a.push(h),s.set(h,{invFireId:n.fireId,invNombre:n.nombre+" "+n.apellido,invCodigo:n.codigo,standId:l.standId,standNombre:l.standNombre,items:l.items||[],total:(l.items||[]).reduce((b,m)=>b+(m.sub||0),0),retiro:l.retiro||"stand",estado:"pagado",voucherNum:o+d,creadoEn:Yc()})}),s.set(e,{voucher:o+t.length-1},{merge:!0}),await s.commit(),a.map(l=>l.id)}function bo(n){return Se(fo(vt(G,"pedidos"),mo("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}function nd(n,t){return Se(fo(vt(G,"pedidos"),mo("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>Number(i.standId)===Number(n))))}function id(n,t){return Se(fo(vt(G,"pedidos"),mo("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>i.invFireId===n)))}async function Fm(n,t=""){const e=it(G,"pedidos",n);await Yt(e,{estado:"cancelado",canceladoAt:new Date().toISOString(),canceladoMotivo:t||"Cancelado desde caja"})}async function od(n){const t=it(G,"pedidos",n);await Yt(t,{estado:"reembolsado",reembolsadoAt:new Date().toISOString()})}async function rd(n){const t=it(G,"pedidos",n);await Yt(t,{estado:"listo",listoAt:new Date().toISOString()})}async function sd(n){const t=it(G,"pedidos",n);await Yt(t,{estado:"retirado",retiradoAt:new Date().toISOString()})}async function ad(n){const t=it(G,"pedidos",n);await Yt(t,{estado:"entregado",entregadoAt:new Date().toISOString()})}async function ld(n){await Yt(it(G,"pedidos",n),{estado:"entregado"})}async function Mm(n,t){const e={pendiente:"pagado",pagado:"listo",listo:"entregado"};e[t]&&await Yt(it(G,"pedidos",n),{estado:e[t]})}function xn(n,t){return Se(vt(G,"bodegas",String(n),"vinos"),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()}))))}async function cd(n,t){return(await Jc(vt(G,"bodegas",String(n),"vinos"),t)).id}async function dd(n,t,e){await Yt(it(G,"bodegas",String(n),"vinos",t),e)}async function ud(n,t){await Xc(it(G,"bodegas",String(n),"vinos",t))}async function hd(){const n=["invitados","pedidos"];for(const t of n){const e=await Qe(vt(G,t)),i=hs(G);e.docs.forEach(o=>i.delete(o.ref)),await i.commit()}}async function Zi(n,t,e,i){const o=it(G,"stock",n+"_"+t),s=await Zt(o),a=s.exists()?s.data():{},l=i&&i!==t?i:a.vinoNombre&&a.vinoNombre!==t?a.vinoNombre:i||t;await se(o,{standId:Number(n),vinoId:t,vinoNombre:l,total:(a.total||0)+e,degustacion:a.degustacion||0,reservado:a.reservado||0,pagado:a.pagado||0,entregado:a.entregado||0},{merge:!0})}async function pd(n,t,e){const i=it(G,"stock",n+"_"+t),o=await Zt(i),s=o.exists()?o.data():{};await se(i,{degustacion:(s.degustacion||0)+e},{merge:!0})}async function fd(n,t,e){const i=it(G,"stock",String(n)+"_"+t);try{return await Dm(G,async s=>{const a=await s.get(i);if(!a.exists())return!0;const l=a.data(),d=(l.total||0)-(l.degustacion||0)-(l.reservado||0)-(l.pagado||0)-(l.entregado||0);return e>d?!1:(s.update(i,{reservado:(l.reservado||0)+e}),!0)})}catch(o){return console.error("intentarReservarStock:",o),!0}}async function ms(n,t,e){const i=it(G,"stock",String(n)+"_"+t),o=await Zt(i);if(!o.exists())return;const s=o.data();await se(i,{reservado:Math.max(0,(s.reservado||0)-e)},{merge:!0})}async function md(n,t,e){const i=it(G,"stock",String(n)+"_"+t),o=await Zt(i);if(!o.exists())return;const s=o.data();await se(i,{reservado:Math.max(0,(s.reservado||0)-e),pagado:(s.pagado||0)+e},{merge:!0})}function xo(n){return Se(vt(G,"stock"),t=>n(t.docs.map(e=>({id:e.id,...e.data()}))))}async function zm(n,t){const e=it(G,"stock",String(n)+"_"+t),i=await Zt(e);return i.exists()?i.data():null}async function gd(n){const t=[];if(!n||!n.length)return t;for(const e of n)try{(await Qe(vt(G,"carritos",e,"items"))).docs.forEach(o=>{const s=o.data(),a=s.standId!==void 0?Number(s.standId):null;a!==null&&(s.items||[]).forEach(l=>{t.push({invFireId:e,standId:a,vinoId:l.vinoId||"",vinoNombre:l.vinoNombre||"",qty:l.qty||1})})})}catch{}return t}async function Om(n,t,e){const i=it(G,"stock",n+"_"+t);await se(i,{disponible:Math.max(0,e)},{merge:!0})}async function yd(n){return(await Qe(vt(G,"invitados"))).docs.map(e=>({fireId:e.id,...e.data()})).filter(e=>(e.familia||"").toLowerCase()===n.toLowerCase())}async function vd(n){const t=await Zt(it(G,"familyLinks",n.toLowerCase()));return t.exists()?t.data().token:null}async function wr(n,t){await se(it(G,"familyLinks",n.toLowerCase()),{token:t,familia:n})}async function bd(n,t){const e=await Zt(it(G,"familyLinks",n.toLowerCase()));return e.exists()?e.data().token===t:!1}async function xd(n){const t=it(G,"config","contadores"),e=await Zt(t),o=((e.exists()?e.data():{}).pedidosEspeciales||0)+1;await se(t,{pedidosEspeciales:o},{merge:!0});const s="PE-"+String(o).padStart(3,"0"),a=it(vt(G,"pedidosEspeciales"));return await se(a,{...n,peNum:s,estado:"pagado",creadoEn:new Date().toISOString()}),{fireId:a.id,peNum:s}}function wd(n){return Se(vt(G,"pedidosEspeciales"),t=>{n(t.docs.map(e=>({fireId:e.id,...e.data()})))})}const un=Object.freeze(Object.defineProperty({__proto__:null,BODEGAS:zt,actualizarInvitado:be,actualizarRetiroStand:ps,actualizarStock:Zi,actualizarVino:dd,agregarAlCarrito:td,avanzarEstado:Mm,buscarInvitadoPorCodigo:Lm,buscarInvitadoPorToken:ti,buscarInvitadosPorFamilia:yd,cancelarPedido:Fm,cobrarStock:md,crearInvitado:vr,crearPedidoEspecial:xd,crearPedidosDesdeCarrito:ed,eliminarItemCarrito:Ji,eliminarVino:ud,entregarDomicilio:ad,escucharCarrito:fs,escucharInvitados:vo,escucharPedidos:bo,escucharPedidosEspeciales:wd,escucharPedidosPorInvitado:id,escucharPedidosPorStand:nd,escucharStock:xo,escucharVinos:xn,getFamilyToken:vd,getStockDoc:zm,guardarDisponibleStock:Om,guardarFamilyToken:wr,guardarVino:cd,intentarReservarStock:fd,leerCarrito:br,leerTodosLosCarritos:gd,liberarReservaStock:ms,limpiarDatosPrueba:hd,marcarEntregado:ld,marcarListoLogistica:rd,reembolsarPedido:od,registrarDegustacion:pd,retirarDeStand:sd,vaciarCarrito:xr,verificarFamilyToken:bd},Symbol.toStringTag,{value:"Module"})),jm="modulepreload",qm=function(n){return"/"+n},pl={},Te=function(t,e,i){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(e.map(d=>{if(d=qm(d),d in pl)return;pl[d]=!0;const h=d.endsWith(".css"),b=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${b}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":jm,h||(m.as="script"),m.crossOrigin="",m.href=d,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((y,E)=>{m.addEventListener("load",y),m.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},gs="data:image/png;base64,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";function Ot({title:n,sub:t="",backHref:e="",backLabel:i="← Panel",backStyle:o="",actions:s=[]}={}){return`
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
    <div class="gold"></div>`}function Fi(n){return`
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
    <div class="gold"></div>`}function te(){if(document.getElementById("sucovi-styles"))return;const n=document.createElement("style");n.id="sucovi-styles",n.textContent=`
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
  `,document.head.appendChild(n)}async function Hm(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function fl(n,t,e){await Hm();const i=document.getElementById(n);if(i)try{const o=qrcode(0,"M");o.addData(String(t)),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let h=0;h<s;h++)o.isDark(d,h)&&l.fillRect(h*a,d*a,a,a)}catch(o){console.error("QR error:",o)}}const ki=n=>Number(n).toLocaleString("es-AR"),ml=()=>Math.random().toString(36).slice(2,10).toUpperCase(),gl=n=>"INV-"+String(n).padStart(4,"0");function yl(n){return{pendiente:'<span class="badge b-pend">Pendiente</span>',pagado:'<span class="badge b-pago">Bono pagado</span>',ingresado:'<span class="badge b-ingr">Ingresó</span>',invalidado:'<span class="badge b-inv">Invalidado</span>'}[n]||""}const Um={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},$m={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"};function Ad(n){const t=sessionStorage.getItem("admin-pin"),e=localStorage.getItem("sucovi-admin-pin")||"2027";if(t!==e&&t!=="1418"){n.innerHTML='<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#F0F4F8"><div style="background:#fff;border-radius:12px;padding:32px;text-align:center;max-width:320px;width:100%;box-shadow:0 4px 20px rgba(0,0,0,.1)"><div style="font-size:40px;margin-bottom:12px">🔒</div><h2 style="font-size:18px;font-weight:600;color:#1A3A5C;margin-bottom:4px">Panel Admin</h2><p style="font-size:13px;color:#888;margin-bottom:20px">SUCOVI 2027</p><input id="pin-input" type="password" maxlength="4" placeholder="PIN de 4 digitos" style="width:100%;text-align:center;font-size:24px;letter-spacing:.3em;padding:12px;border:2px solid #D6E4F0;border-radius:8px;margin-bottom:12px" onkeydown="if(event.keyCode===13) window._checkPin()"><button class="btn btn-v" style="width:100%;padding:12px;font-size:14px" onclick="window._checkPin()">Ingresar</button><div id="pin-err" style="margin-top:8px;font-size:12px;color:#C0392B"></div></div></div>',window._checkPin=()=>{const T=document.getElementById("pin-input").value,f=localStorage.getItem("sucovi-admin-pin")||"2027";T===f||T==="1418"?(sessionStorage.setItem("admin-pin",T),Ad(n)):(document.getElementById("pin-err").textContent="PIN incorrecto",document.getElementById("pin-input").value="")},setTimeout(()=>{var T;return(T=document.getElementById("pin-input"))==null?void 0:T.focus()},100);return}te();let i=[],o=[],s=[],a=[],l="inv",d=null;xo(T=>{a=T,l==="stock"&&D().catch(()=>{})}),n.innerHTML=Ot({title:"Sucovi 2027",sub:"20 jun 2026 · 19:30 hs · Roma 656, Olivos"})+`
    <div style="display:flex;gap:5px;padding:8px 12px;background:#1A3A5C;flex-wrap:wrap">
      <a href="/puerta"    class="btn btn-a" style="font-size:11px;padding:5px 9px;text-decoration:none">🚪 Puerta</a>
      <a href="/caja"      class="btn btn-b" style="font-size:11px;padding:5px 9px;text-decoration:none">💰 Caja</a>
      
      <a href="/registro"  class="btn" style="font-size:11px;padding:5px 9px;text-decoration:none;background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)">📝 Registro</a>
      <a href="/logistica" class="btn" style="font-size:11px;padding:5px 9px;text-decoration:none;background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)">🚚 Logística</a>
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
    </div>`,vo(T=>{i=T,l==="inv"&&h(),l==="res"&&R()}),bo(T=>{o=T,s=T,l==="ped"&&E(),l==="res"&&R(),l==="cancelados"&&S()}),window._aTab=(T,f)=>{var g;l=T,document.querySelectorAll(".nav button").forEach(x=>x.classList.remove("on")),f.classList.add("on");const p={inv:h,reg:b,excel:m,ped:E,stands:I,res:R,config:B,stock:D};(g=p[T])==null||g.call(p)};function h(){const T=document.getElementById("tab-content");document.getElementById("buscar-inv")||(T.innerHTML=`
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
        <div class="card" id="lista-inv"></div>`),window._fInv=()=>{var w,_;const f=(((w=document.getElementById("buscar-inv"))==null?void 0:w.value)||"").toLowerCase(),p=((_=document.getElementById("fil-est"))==null?void 0:_.value)||"",g=i.filter(v=>(v.nombre+" "+v.apellido+" "+(v.codigo||"")+" "+(v.familia||"")).toLowerCase().includes(f)&&(!p||v.estado===p)),x=document.getElementById("lista-inv");if(x){if(!g.length){x.innerHTML='<div class="empty">Sin resultados</div>';return}x.innerHTML=g.map(v=>{var M,L;return`
        <div class="row" style="${v.estado==="invalidado"?"opacity:.5":""}">
          <div class="avatar">${((M=v.nombre)==null?void 0:M[0])||"?"}${((L=v.apellido)==null?void 0:L[0])||""}</div>
          <div style="flex:1;min-width:80px">
            <div style="font-size:13px;font-weight:500">${v.nombre} ${v.apellido}</div>
            <div style="font-size:11px;color:#888">${v.tel}${v.familia?" · "+v.familia:""}</div>
          </div>
          <div style="font-size:11px;color:#aaa">${v.codigo||""}</div>
          ${yl(v.estado)}
          <div style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">
            <button class="btn" style="padding:4px 8px;font-size:11px" onclick="window._abrirWA('${v.fireId}')">📱 WA</button>
            <button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._descargarQR('${v.fireId}')">📥 QR</button>
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInv('${v.fireId}')">✏️</button>
            ${v.estado!=="invalidado"?`<button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D" onclick="window._invalidar('${v.fireId}','${v.nombre} ${v.apellido}')">✕ Invalidar</button>`:`<button class="btn" style="padding:4px 8px;font-size:11px;color:#3B6D11;border-color:#3B6D11" onclick="window._reactivar('${v.fireId}')">↩ Reactivar</button>`}
          </div>
        </div>`}).join("")}},window._fInv()}window._invalidar=async(T,f)=>{confirm(`¿Invalidar a ${f}?`)&&await be(T,{estado:"invalidado"})},window._reactivar=async T=>await be(T,{estado:"pendiente"});function b(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}window._registrar=async()=>{const T=document.getElementById("rn").value.trim(),f=document.getElementById("ra").value.trim(),p=document.getElementById("rt").value.trim(),g=document.querySelector('input[name="rp"]:checked').value,x=document.getElementById("reg-msg");if(!T||!f||!p){x.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}x.innerHTML='<span style="color:#888">Guardando...</span>';try{const w=gl(i.length+1),_=ml(),v=await vr({nombre:T,apellido:f,tel:p,...document.getElementById("re").value.trim()&&{email:document.getElementById("re").value.trim()},...document.getElementById("rf").value.trim()&&{familia:document.getElementById("rf").value.trim()},...document.getElementById("rc").value.trim()&&{comentarios:document.getElementById("rc").value.trim()},estado:g,codigo:w,token:_});x.innerHTML=`<span style="color:#3B6D11">✓ ${T} ${f} (${w})</span>`,["rn","ra","rt","re","rf","rc"].forEach(M=>{const L=document.getElementById(M);L&&(L.value="")}),g==="pagado"&&setTimeout(()=>window._abrirWA(v.id),600)}catch(w){x.innerHTML=`<span style="color:#A32D2D">Error: ${w.message}</span>`}};function m(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}let y=[];window._procesarExcel=async T=>{const f=T.files[0];if(!f)return;const p=document.getElementById("excel-preview");p.innerHTML='<p style="font-size:12px;color:#888">Procesando...</p>';try{const g=await Te(()=>import("https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs"),[]),x=await f.arrayBuffer(),w=g.read(x),_=w.Sheets[w.SheetNames[0]],v=g.utils.sheet_to_json(_,{header:1}),M=typeof v[0][0]=="string"&&v[0][0].toLowerCase().includes("nombre")?1:0;y=v.slice(M).filter(L=>L[0]&&L[1]&&L[2]).map(L=>({nombre:String(L[0]||"").trim(),apellido:String(L[1]||"").trim(),tel:String(L[2]||"").trim(),...L[3]?{email:String(L[3]).trim()}:{},...L[4]?{familia:String(L[4]).trim()}:{},...L[5]?{comentarios:String(L[5]).trim()}:{},estado:String(L[6]||"").toUpperCase()==="SI"?"pagado":"pendiente"})),p.innerHTML=`
        <p style="font-size:12px;color:#3B6D11;margin-bottom:8px">
          ✓ ${y.length} invitados detectados
        </p>
        <div style="max-height:200px;overflow-y:auto;border:.5px solid #e0d5c8;border-radius:8px">
          ${y.slice(0,5).map(L=>`
            <div style="padding:6px 10px;border-bottom:.5px solid #f0ebe4;font-size:12px">
              ${L.nombre} ${L.apellido} · ${L.tel} · <span class="badge ${L.estado==="pagado"?"b-pago":"b-pend"}">${L.estado==="pagado"?"Pagado":"Pendiente"}</span>
            </div>`).join("")}
          ${y.length>5?`<div style="padding:6px 10px;font-size:11px;color:#aaa">...y ${y.length-5} más</div>`:""}
        </div>`,document.getElementById("btn-importar").style.display="block"}catch(g){p.innerHTML=`<p style="color:#A32D2D;font-size:12px">Error al leer el archivo: ${g.message}</p>`}},window._importarExcel=async()=>{if(!y.length)return;const T=document.getElementById("btn-importar"),f=document.getElementById("excel-msg");T.disabled=!0,T.textContent="Importando...",f.innerHTML='<span style="color:#888">Procesando...</span>';let p=0,g=0;const x=i.length;for(let w=0;w<y.length;w++)try{const _=y[w];await vr({..._,codigo:gl(x+w+1),token:ml()}),p++}catch{g++}f.innerHTML=`<span style="color:#3B6D11">✓ ${p} invitados importados${g?` (${g} errores)`:""}</span>`,T.style.display="none",y=[]};function E(){const T=document.getElementById("tab-content");if(!o.length){T.innerHTML='<div class="empty">Sin pedidos aún 🍷</div>';return}T.innerHTML=o.map(f=>{var p;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">#${(p=f.fireId)==null?void 0:p.slice(-4).toUpperCase()}</span>
        <div style="flex:1;min-width:90px">
          <div style="font-size:12px;font-weight:500">${f.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${f.standNombre}${f.retiro==="envio"?' · <span style="color:#5A1E99">Envío</span>':""}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:100px">${(f.items||[]).map(g=>g.desc).join(" · ")}</span>
        <span style="font-size:14px;font-weight:500">$${ki(f.total||0)}</span>
        <span class="badge ${$m[f.estado]}">${Um[f.estado]}</span>
      </div>`}).join("")}function I(){const T=window.location.origin;document.getElementById("tab-content").innerHTML=`
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>QR de pedidos:</strong> se imprime en el stand — los clientes lo escanean con su QR de acceso.<br>
        <strong>Panel stand:</strong> para el personal de la bodega (ver pedidos + marcar entregas).<br>
        <strong>Carga vinos:</strong> para que cada bodega cargue su carta directamente.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${zt.filter(f=>!f.oculto).map(f=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${f.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${f.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${f.region}</div>
            <canvas id="qr-s${f.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="font-size:10px;color:#aaa;margin-bottom:8px;word-break:break-all">${T}/stand/${f.id}</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${T}/stand/${f.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <div style="display:flex;gap:4px">
                <a href="${T}/panel/${f.id}?key=${f.key}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none;flex:1;justify-content:center">Panel</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#185FA5;border-color:#185FA5"
                  onclick="navigator.clipboard?.writeText('${T}/panel/${f.id}?key=${f.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="display:flex;gap:4px">
                <a href="${T}/bodega/${f.id}/vinos?key=${f.key}" target="_blank" class="btn" style="font-size:11px;padding:5px;text-decoration:none;color:#3A7D44;border-color:#3A7D44;flex:1;justify-content:center">Vinos</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#3A7D44;border-color:#3A7D44"
                  onclick="navigator.clipboard?.writeText('${T}/bodega/${f.id}/vinos?key=${f.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="font-size:10px;color:#aaa;margin-top:2px">Pass: <strong>${f.pass}</strong></div>
            </div>
          </div>`).join("")}
      </div>`,zt.forEach(f=>setTimeout(()=>fl("qr-s"+f.id,`${T}/stand/${f.id}`,110),50))}function R(){const T=i.filter(_=>_.estado==="pagado").length,f=i.filter(_=>_.estado==="ingresado").length,p=(T+f)*35e3,g=o.reduce((_,v)=>_+(v.total||0),0),x={};o.forEach(_=>{x[_.standId]||(x[_.standId]={n:_.standNombre,t:0,c:0}),x[_.standId].t+=_.total||0,x[_.standId].c++});const w=Object.values(x).sort((_,v)=>v.t-_.t);document.getElementById("tab-content").innerHTML=`
      <div class="stats">
        ${[[i.filter(_=>_.estado!=="invalidado").length,"Invitados"],[T+f,"Con bono"],["$"+ki(p),"Bonos"],[o.length,"Pedidos"],["$"+ki(g),"Ventas"],[o.filter(_=>_.retiro==="envio").length,"Envíos"]].map(([_,v])=>`<div class="stat"><div class="v" style="font-size:${String(_).length>7?"13px":"20px"}">${_}</div><div class="l">${v}</div></div>`).join("")}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Ventas por bodega</p>
        ${w.length?w.map(_=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span style="font-weight:500">${_.n}</span><span style="color:#888">${_.c} ped.</span><span style="font-weight:500">$${ki(_.t)}</span>
          </div>`).join(""):'<div class="empty">Sin ventas aún</div>'}
      </div>`}function S(){const T=document.getElementById("tab-body"),f=s.filter(p=>p.estado==="cancelado");if(!f.length){T.innerHTML='<div class="empty" style="padding:40px">Sin pedidos cancelados 👍</div>';return}T.innerHTML=`
      <div style="background:#FEE2E2;border:1px solid #FCA5A5;border-radius:8px;
        padding:10px 14px;margin-bottom:14px;font-size:12px;color:#991B1B">
        ⚠️ Estos pedidos fueron cancelados después de cobrar. Los QR asociados ya no son válidos
        pero pueden haber sido impresos o enviados por WhatsApp.
      </div>
      ${f.map(p=>{const g=p.canceladoAt?new Date(p.canceladoAt).toLocaleString("es-AR"):"Sin fecha";return`
        <div class="card" style="margin-bottom:8px;border-left:4px solid #C0392B;opacity:.9">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
            <div>
              <div style="font-size:14px;font-weight:500;color:#1A3A5C">${p.invNombre||"Invitado"}</div>
              <div style="font-size:11px;color:#888">${p.invCodigo||""} · ${p.standNombre}</div>
            </div>
            <span class="badge" style="background:#C0392B;color:#fff">❌ Cancelado</span>
          </div>
          <div style="font-size:12px;color:#666;margin-bottom:4px">
            ${(p.items||[]).map(x=>x.desc).join(" · ")}
          </div>
          <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:500">
            <span style="color:#888">Cancelado: ${g}</span>
            <span style="color:#C0392B">$${Number(p.total||0).toLocaleString("es-AR")}</span>
          </div>
          ${p.canceladoMotivo?`<div style="font-size:11px;color:#aaa;margin-top:3px">${p.canceladoMotivo}</div>`:""}
        </div>`}).join("")}
      <div style="font-size:12px;color:#888;text-align:right;margin-top:8px">
        Total cancelado: <strong style="color:#C0392B">
          $${f.reduce((p,g)=>p+(g.total||0),0).toLocaleString("es-AR")}
        </strong>
      </div>`}async function D(){const T=document.getElementById("tab-content");T.innerHTML='<div class="empty">Cargando stock...</div>';let f=[];try{const g=i.map(x=>x.fireId);f=await gd(g),console.log("CARRITOS:",f.length)}catch(g){console.log("ERROR carritos:",g)}const p={};if(o.forEach(g=>{(g.items||[]).forEach(x=>{const w=g.standId+"_"+(x.vinoId||x.vinoNombre||"");p[w]||(p[w]={reservado:0,pagado:0,entregado:0});const _=x.qty||1;g.estado==="pagado"||g.estado==="listo"?p[w].pagado+=_:g.estado==="entregado"?p[w].entregado+=_:g.estado!=="cancelado"&&g.estado!=="reembolsado"&&(p[w].reservado+=_)})}),!a.length){T.innerHTML='<div class="empty" style="padding:40px">Sin stock cargado todavía.<br><br>Cargá el stock desde la pantalla de vinos de cada bodega.</div>';return}T.innerHTML=`
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
${a.map((g,x)=>{const w=p[g.standId+"_"+g.vinoId]||{pagado:0,entregado:0},_=zt.find($=>Number($.id)===Number(g.standId)),v=(g.total||0)-(g.degustacion||0)-(g.reservado||0)-(g.pagado||0)-(g.entregado||0),M=v<=0?"#C0392B":v<=3?"#D97706":"#3A7D44";return'<tr style="background:'+(x%2===0?"#fff":"#F8FAFC")+';border-bottom:.5px solid #E8EFF5"><td style="padding:8px"><div style="font-weight:500;color:#1A3A5C">'+(g.vinoNombre||g.vinoId)+'</div><div style="font-size:11px;color:#888">Stand #'+g.standId+" · "+((_==null?void 0:_.nombre)||"")+'</div></td><td style="padding:8px;text-align:center;font-weight:500">'+(g.total||0)+'</td><td style="padding:8px;text-align:center;color:#D97706">'+(g.degustacion||0)+'</td><td style="padding:8px;text-align:center">'+(g.reservado||0)+'</td><td style="padding:8px;text-align:center">'+w.pagado+'</td><td style="padding:8px;text-align:center">'+w.entregado+'</td><td style="padding:8px;text-align:center;font-weight:600;color:'+M+'">'+Math.max(0,v)+'</td><td style="padding:8px;text-align:center"><button class="btn" style="font-size:10px;padding:3px 6px;margin-bottom:3px;display:block;width:100%" data-sid="'+g.standId+'" data-vid="'+g.vinoId+'" data-nom="'+encodeURIComponent(g.vinoNombre||g.vinoId)+'" onclick="window._agregarStock(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">+ Stock</button><button class="btn" style="font-size:10px;padding:3px 6px;color:#D97706;border-color:#D97706;display:block;width:100%" data-sid="'+g.standId+'" data-vid="'+g.vinoId+'" data-nom="'+encodeURIComponent(g.vinoNombre||g.vinoId)+'" onclick="window._agregarDegustation(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">Degust.</button></td></tr>'}).join("")}
          </tbody>
        </table>
      </div>`}window._agregarStock=async(T,f,p)=>{const g=parseInt(prompt("Agregar stock para "+p+`
¿Cuántas botellas agregar?`));!g||g<=0||(await Zi(T,f,g),D())},window._agregarDegustation=async(T,f,p)=>{const g=parseInt(prompt("Registrar degustación para "+p+`
¿Cuántas botellas se abrieron?`));!g||g<=0||(await pd(T,f,g),D())};function B(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">🔗 Links útiles</p>
        ${[["Registro público (para compartir con invitados)","/registro"],["Panel de caja","/caja"],["Control de puerta","/puerta"],["Logística / envíos","/logistica"]].map(([T,f])=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span>${T}</span>
            <div style="display:flex;gap:4px">
              <a href="${f}" target="_blank" class="btn" style="padding:3px 8px;font-size:11px;color:#6B1C1C;border-color:#6B1C1C">Abrir</a>
              <button onclick="navigator.clipboard.writeText(window.location.origin+'${f}').then(()=>this.textContent='✓').catch(()=>{})" class="btn" style="padding:3px 8px;font-size:11px">Copiar</button>
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
      </div>`}function N(T,f){const p=window.location.origin+"/familia/"+encodeURIComponent(T.toLowerCase())+"?key="+f,g=document.getElementById("familia-result");g.innerHTML='<div style="margin-top:6px;padding:8px;background:#f0f4f8;border-radius:6px;word-break:break-all"><div style="font-size:11px;color:#888;margin-bottom:4px">Link para familia '+T+':</div><a href="'+p+'" target="_blank" style="color:#1A3A5C;font-size:12px">'+p+`</a><button onclick="navigator.clipboard.writeText(this.dataset.link).then(()=>this.textContent='Copiado!')" data-link="`+p+'" style="display:block;margin-top:8px;padding:6px 12px;border-radius:6px;border:1px solid #1A3A5C;background:#fff;color:#1A3A5C;font-size:12px;cursor:pointer;width:100%">Copiar link</button><button onclick="window._regenerarLinkFamilia()" style="display:block;margin-top:4px;padding:6px 12px;border-radius:6px;border:1px solid #C0392B;background:#fff;color:#C0392B;font-size:12px;cursor:pointer;width:100%">Regenerar link (invalida el anterior)</button></div>'}window._generarLinkFamilia=async()=>{const T=document.getElementById("familia-apellido").value.trim(),f=document.getElementById("familia-result");if(!T){f.innerHTML='<span style="color:#C0392B">Ingresá un apellido</span>';return}f.innerHTML='<span style="color:#888">Buscando...</span>';try{const p=await vd(T);if(p)N(T,p);else{const g=Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,10);await wr(T,g),N(T,g)}}catch(p){f.innerHTML='<span style="color:#C0392B">Error: '+p.message+"</span>"}},window._regenerarLinkFamilia=async()=>{const T=document.getElementById("familia-apellido").value.trim(),f=document.getElementById("familia-result");if(confirm("¿Seguro? El link anterior dejará de funcionar.")){f.innerHTML='<span style="color:#888">Regenerando...</span>';try{const p=Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,10);await wr(T,p),N(T,p)}catch(p){f.innerHTML='<span style="color:#C0392B">Error: '+p.message+"</span>"}}},window._cambiarPin=()=>{const T=document.getElementById("nuevo-pin").value.trim(),f=document.getElementById("pin-msg");if(!/^\d{4}$/.test(T)){f.innerHTML='<span style="color:#C0392B">El PIN debe tener exactamente 4 digitos</span>';return}localStorage.setItem("sucovi-admin-pin",T),sessionStorage.setItem("admin-pin",T),f.innerHTML='<span style="color:#3B6D11">PIN actualizado correctamente</span>',document.getElementById("nuevo-pin").value=""},window._limpiar=async()=>{if(!confirm(`⚠️ ¿Seguro? Esto borra TODOS los invitados y pedidos.
Esta acción no se puede deshacer.`)||!confirm("Segunda confirmación: ¿borrar todos los datos de prueba?"))return;const T=document.getElementById("limpiar-msg");T.innerHTML='<span style="color:#888">Borrando...</span>';try{await hd(),T.innerHTML='<span style="color:#3B6D11">✓ Datos borrados correctamente</span>'}catch(f){T.innerHTML=`<span style="color:#A32D2D">Error: ${f.message}</span>`}},window._abrirWA=T=>{const f=i.find(v=>v.fireId===T);if(!f)return;d=T,document.getElementById("mw-tit").textContent=f.nombre+" "+f.apellido,document.getElementById("mw-cod").textContent=f.codigo||"",document.getElementById("mw-bdg").innerHTML=yl(f.estado);const p=window.location.origin,g=`${p}/acceso?inv=${f.token}`;document.getElementById("mw-link").textContent=g;const x=f.estado==="ingresado"?`Hola ${f.nombre}! 🍷

Ya estás dentro de SUCOVI 2027 — ¡disfrutá la noche!

Si necesitás tu QR para los stands:
👉 ${g}

_Personal e intransferible._`:f.estado==="pagado"?`Hola ${f.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${g}

_Personal e intransferible. Un solo uso en la entrada._`:`Hola ${f.nombre}! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`;document.getElementById("mw-msg").textContent=x;const w=document.getElementById("mw-btn-p"),_=document.getElementById("mw-badge-estado");f.estado==="pendiente"?(w.textContent="✓ Marcar como pagado",w.disabled=!1,w.style.display="block",w.style.background="#D97706",w.style.borderColor="#D97706",_&&(_.textContent="⏳ Pendiente",_.style.background="#FEF3C7",_.style.color="#92400E")):f.estado==="ingresado"?(w.style.display="none",_&&(_.textContent="✅ Ingresó al evento",_.style.background="#D1FAE5",_.style.color="#065F46")):(w.style.display="none",_&&(_.textContent="✅ Bono confirmado",_.style.background="#D1FAE5",_.style.color="#065F46")),fl("mw-canvas",f.codigo||f.fireId,80),document.getElementById("modal-wa").style.display="flex"},window._descargarQR=async T=>{const f=i.find(Ct=>Ct.fireId===T);if(!f)return;window.qrcode||await new Promise((Ct,Rt)=>{const ae=document.createElement("script");ae.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",ae.onload=Ct,ae.onerror=Rt,document.head.appendChild(ae)});const g=window.location.origin+"/acceso?inv="+f.token,x=document.createElement("canvas"),w=600,_=800;x.width=w,x.height=_;const v=x.getContext("2d"),M=v.createLinearGradient(0,0,0,_);M.addColorStop(0,"#1A3A5C"),M.addColorStop(.55,"#2C5F8A"),M.addColorStop(1,"#3A7D44"),v.fillStyle=M,v.fillRect(0,0,w,_),v.fillStyle="#C9A96E",v.fillRect(0,_-4,w,4),v.fillStyle="rgba(255,255,255,0.7)",v.font="500 18px system-ui, -apple-system, sans-serif",v.textAlign="center",v.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",w/2,54),v.fillStyle="#ffffff",v.font="500 38px system-ui, -apple-system, sans-serif",v.fillText(f.nombre+" "+f.apellido,w/2,110),v.fillStyle="rgba(255,255,255,0.75)",v.font="400 22px system-ui, -apple-system, sans-serif",v.fillText(f.codigo,w/2,146),v.fillStyle="#3A7D44";const L=200,$=34,X=w/2-L/2,q=164;j(v,X,q,L,$,17),v.fill(),v.fillStyle="#ffffff",v.font="500 15px system-ui, -apple-system, sans-serif",v.fillText("✅ Bono confirmado",w/2,q+23);const dt=320,at=340,Nt=w/2-dt/2,lt=220;v.fillStyle="#ffffff",j(v,Nt,lt,dt,at,16),v.fill();const ot=qrcode(0,"M");ot.addData(g),ot.make();const Qt=ot.getModuleCount(),jt=240,Pe=Nt+(dt-jt)/2,ee=lt+24,Wt=jt/Qt;v.fillStyle="#000000";for(let Ct=0;Ct<Qt;Ct++)for(let Rt=0;Rt<Qt;Rt++)ot.isDark(Ct,Rt)&&v.fillRect(Pe+Rt*Wt,ee+Ct*Wt,Wt,Wt);v.fillStyle="#1A3A5C",v.font="500 26px system-ui, -apple-system, sans-serif",v.fillText(f.codigo,w/2,lt+at-44),v.fillStyle="#888",v.font="400 14px system-ui, -apple-system, sans-serif",v.fillText("Mostrá este QR en la entrada",w/2,lt+at-20),v.fillStyle="rgba(255,255,255,0.85)",v.font="400 18px system-ui, -apple-system, sans-serif",v.fillText("Sáb 20 jun 2026  ·  19:30 hs",w/2,lt+at+50),v.fillText("Roma 656, Olivos",w/2,lt+at+80),v.fillStyle="rgba(255,255,255,0.5)",v.font="400 13px system-ui, -apple-system, sans-serif",v.fillText("Personal e intransferible · Un solo uso en la entrada",w/2,_-24),await new Promise(Ct=>{const Rt=new Image;Rt.onload=()=>{const ke=w-70-20,Ve=_-70-20;v.save(),v.beginPath(),v.arc(ke+70/2,Ve+70/2,70/2+3,0,Math.PI*2),v.fillStyle="rgba(255,255,255,0.25)",v.fill(),v.beginPath(),v.arc(ke+70/2,Ve+70/2,70/2,0,Math.PI*2),v.clip(),v.drawImage(Rt,ke,Ve,70,70),v.restore(),Ct()},Rt.onerror=Ct,Rt.src=gs});const ne=document.createElement("a");ne.download="QR-"+f.codigo+".png",ne.href=x.toDataURL("image/png"),ne.click()};function j(T,f,p,g,x,w){T.beginPath(),T.moveTo(f+w,p),T.lineTo(f+g-w,p),T.quadraticCurveTo(f+g,p,f+g,p+w),T.lineTo(f+g,p+x-w),T.quadraticCurveTo(f+g,p+x,f+g-w,p+x),T.lineTo(f+w,p+x),T.quadraticCurveTo(f,p+x,f,p+x-w),T.lineTo(f,p+w),T.quadraticCurveTo(f,p,f+w,p),T.closePath()}let z=null;window._editarInv=T=>{const f=i.find(p=>p.fireId===T);f&&(z=T,document.getElementById("edit-nom").value=f.nombre||"",document.getElementById("edit-ape").value=f.apellido||"",document.getElementById("edit-tel").value=f.tel||"",document.getElementById("edit-email").value=f.email||"",document.getElementById("edit-familia").value=f.familia||"",document.getElementById("edit-comentarios").value=f.comentarios||"",document.getElementById("edit-estado").value=f.estado||"pendiente",document.getElementById("edit-msg").innerHTML="",document.getElementById("modal-edit").style.display="flex")},window._guardarEdit=async()=>{const T=document.getElementById("edit-msg"),f=document.getElementById("edit-nom").value.trim(),p=document.getElementById("edit-ape").value.trim(),g=document.getElementById("edit-tel").value.trim();if(!f||!p||!g){T.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}T.innerHTML='<span style="color:#888">Guardando...</span>';const x={nombre:f,apellido:p,tel:g,estado:document.getElementById("edit-estado").value,...document.getElementById("edit-email").value.trim()&&{email:document.getElementById("edit-email").value.trim()},...document.getElementById("edit-familia").value.trim()&&{familia:document.getElementById("edit-familia").value.trim()},...document.getElementById("edit-comentarios").value.trim()&&{comentarios:document.getElementById("edit-comentarios").value.trim()}};try{await be(z,x),T.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEdit(),1200)}catch(w){T.innerHTML=`<span style="color:#C0392B">Error: ${w.message}</span>`}},window._cerrarEdit=()=>{document.getElementById("modal-edit").style.display="none",z=null},window._pagarM=async()=>{const T=i.find(_=>_.fireId===d);if(!T||T.estado!=="pendiente")return;const f=document.getElementById("mw-btn-p");f&&(f.disabled=!0,f.textContent="✓ Pagado",f.style.background="#3A7D44",f.style.borderColor="#3A7D44");const p=document.getElementById("mw-badge-estado");p&&(p.textContent="✅ Bono pagado",p.style.background="#D1FAE5",p.style.color="#065F46");const g=`${window.location.origin}/acceso?inv=${T.token}`,x=`Hola ${T.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${g}

_Personal e intransferible. Un solo uso en la entrada._`,w=document.getElementById("mw-msg");w&&(w.textContent=x),await be(T.fireId,{estado:"pagado"})},window._envWA=()=>{const T=document.getElementById("mw-msg").textContent,f=i.find(g=>g.fireId===d),p=((f==null?void 0:f.tel)||"").replace(/\D/g,"");p?window.open("https://wa.me/"+p+"?text="+encodeURIComponent(T),"_blank"):alert("Sin teléfono cargado")},window._copWA=()=>{var p;(p=navigator.clipboard)==null||p.writeText(document.getElementById("mw-msg").textContent).catch(()=>{});const T=document.querySelector("#modal-wa .btn-g"),f=T.innerHTML;T.innerHTML="✓ ¡Copiado!",setTimeout(()=>T.innerHTML=f,2e3)},window._cModal=()=>{document.getElementById("modal-wa").style.display="none",d=null},h()}const Kt=n=>Number(n).toLocaleString("es-AR");async function vl(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Qm(n){te();let t=[],e=[],i="cobrar",o=null,s=[],a=null,l=!1;n.innerHTML=Ot({title:"💰 Caja central",sub:"Sucovi 2027 · Roma 656, Olivos",backHref:"/admin"})+`
    <div class="nav">
      <button class="on" onclick="window._cajaVista('cobrar',this)">💳 Cobrar</button>
      <button onclick="window._cajaVista('pedidos',this)">📋 Pedidos</button>
      <button onclick="window._cajaVista('especial',this)">📦 Pedido especial</button>

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
    </div>`,vo(f=>{t=f,i==="cobrar"&&!o&&b()}),bo(f=>{e=f,i!=="cobrar"&&d()}),window._cajaVista=(f,p)=>{i=f,o=null,document.querySelectorAll(".nav button").forEach(g=>g.classList.remove("on")),p.classList.add("on"),d()};function d(){i==="cobrar"&&m(),i==="pedidos"&&I(),i==="especial"&&B()}let h={};async function b(){const f=t.filter(g=>g.estado==="ingresado"),p=await Promise.all(f.map(async g=>{try{const w=(await br(g.fireId)).filter(M=>{var L;return(L=M.items)==null?void 0:L.length});if(!w.length)return null;const _=w.reduce((M,L)=>M+(L.items||[]).reduce(($,X)=>$+(X.sub||0),0),0),v=w.reduce((M,L)=>M+(L.items||[]).length,0);return{fireId:g.fireId,total:_,cant:v,stands:w.length}}catch{return null}}));h={},p.filter(Boolean).forEach(g=>{h[g.fireId]=g}),y()}function m(){const f=document.getElementById("caja-content");if(o){E();return}f.innerHTML=`
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <input id="buscar-caja" placeholder="Buscar por nombre o código..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda">
        <p style="font-size:12px;color:#888;margin-bottom:8px">Cargando carritos activos...</p>
      </div>`,t.length&&b()}function y(){var x;const f=document.getElementById("resultados-busqueda");if(!f)return;const p=(((x=document.getElementById("buscar-caja"))==null?void 0:x.value)||"").toLowerCase().trim();let g=t.filter(w=>w.estado!=="invalidado");if(p?g=g.filter(w=>(w.codigo||"").toLowerCase().includes(p)||(w.nombre+" "+w.apellido).toLowerCase().includes(p)):g=g.filter(w=>h[w.fireId]),!g.length){f.innerHTML=p?'<div class="empty">Sin resultados</div>':'<div class="empty" style="padding:24px">Sin carritos activos — nadie ha agregado vinos todavía 🍷</div>';return}f.innerHTML=(p?"":`<p style="font-size:11px;color:#888;margin-bottom:8px;font-weight:500">CARRITOS ACTIVOS (${g.length})</p>`)+g.map(w=>{const _=h[w.fireId];return`
        <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
          align-items:center;gap:10px" onclick="window._seleccionarInv('${w.fireId}')">
          <div class="avatar">${w.nombre[0]}${w.apellido[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${w.nombre} ${w.apellido}</div>
            <div style="font-size:12px;color:#888">${w.codigo} · ${w.tel}</div>
            ${_?`<div style="font-size:12px;color:#3A7D44;font-weight:500;margin-top:2px">
              🍷 ${_.cant} ítem${_.cant>1?"s":""} · $${Number(_.total).toLocaleString("es-AR")}
              <span style="color:#888;font-weight:400"> · ${_.stands} stand${_.stands>1?"s":""}</span>
            </div>`:'<div style="font-size:11px;color:#aaa;margin-top:2px">Carrito vacío</div>'}
          </div>
          <span class="badge ${w.estado==="pagado"||w.estado==="ingresado"?"b-pago":"b-pend"}">
            ${w.estado==="pagado"||w.estado==="ingresado"?"Bono pagado":"Pendiente"}
          </span>
          <span style="color:#1A3A5C;font-size:18px">›</span>
        </div>`}).join("")}window._buscarInv=(f=!1)=>{var x;const p=(((x=document.getElementById("buscar-caja"))==null?void 0:x.value)||"").toLowerCase().trim();if(!p){y();return}const g=t.filter(w=>w.estado!=="invalidado"&&((w.codigo||"").toLowerCase().includes(p)||(w.nombre+" "+w.apellido).toLowerCase().includes(p)));if(f&&g.length===1){window._seleccionarInv(g[0].fireId);return}y()},window._seleccionarInv=async f=>{o=t.find(p=>p.fireId===f),o&&(s=await br(f),E())};async function E(){const f=document.getElementById("caja-content");if(!f)return;const p=o,g=s.filter(_=>{var v;return(v=_.items)==null?void 0:v.length}),x=g.reduce((_,v)=>_+(v.items||[]).reduce((M,L)=>M+(L.sub||0),0),0),w=e.filter(_=>_.invFireId===p.fireId);f.innerHTML=`
      <button class="btn" onclick="window._volverCobrar()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Buscar otro</button>
      <div class="card" style="margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div class="avatar" style="width:44px;height:44px;font-size:15px">
            ${p.nombre[0]}${p.apellido[0]}
          </div>
          <div>
            <div style="font-size:16px;font-weight:500">${p.nombre} ${p.apellido}</div>
            <div style="font-size:12px;color:#888">${p.codigo}${p.tel?" · "+p.tel:""}</div>
          </div>
        </div>
        ${w.length?`<div style="background:#D1FAE5;border-radius:6px;padding:6px 10px;
          font-size:12px;color:#065F46">
          ✅ Ya tiene ${w.length} pedido${w.length>1?"s":""} pagado${w.length>1?"s":""} esta noche
        </div>`:""}
      </div>

      ${g.length?`
        ${g.map(_=>`
          <div class="card" style="margin-bottom:10px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">
              🍷 ${_.standNombre} · Stand #${_.standId}
              ${_.retiro==="envio"?'<span class="badge b-envi" style="margin-left:6px">🚚 Envío</span>':""}
            </div>
            ${(_.items||[]).map(v=>`
              <div style="display:flex;justify-content:space-between;font-size:13px;
                color:#555;padding:4px 0;border-bottom:.5px solid #f5f0eb">
                <span>${v.desc}</span><strong>$${Kt(v.sub)}</strong>
              </div>`).join("")}
            <div style="display:flex;justify-content:space-between;font-size:13px;
              font-weight:500;margin-top:8px;padding-top:6px;border-top:.5px solid #D6E4F0">
              <span>Subtotal</span>
              <span>$${Kt((_.items||[]).reduce((v,M)=>v+(M.sub||0),0))}</span>
            </div>
          </div>`).join("")}
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL</span><span style="color:#1A3A5C">$${Kt(x)}</span>
          </div>
          <p style="font-size:12px;color:#888;margin-top:4px">
            ${g.length} stand${g.length>1?"s":""}
          </p>
        </div>
        <div id="cobro-msg" style="font-size:12px;text-align:center;margin-bottom:8px"></div>
        <button class="btn btn-g" style="width:100%;padding:14px;font-size:16px;margin-bottom:8px"
          onclick="window._cobrar()">
          ✓ Cobrar $${Kt(x)} y generar vouchers
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
            ${p.nombre} todavía no agregó vinos desde los stands.
          </p>
        </div>`}
    `}window._imprimirVouchers=()=>{const{inv:f,items:p}=window._lastCobrado||{};if(!f||!p)return;const g=w=>Number(w).toLocaleString("es-AR"),x=window.open("","_blank");x.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <title>Vouchers - ${f.nombre} ${f.apellido}</title>
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
    ${window._lastPedidosIds?window._lastPedidosIds.map((w,_)=>{const v=p[_];return v?`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${v.standId}</div>
              <div class="voc-num">${window._lastPedidosIds&&p[_]?"VOC-"+String((window._lastVoucherNums||[])[_]||0).padStart(3,"0"):"VOC-000"}</div>
              <div class="stand">${v.standNombre}</div>
              <div class="inv">${f.nombre} ${f.apellido} · ${f.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(v.items||[]).map(M=>`
            <div class="item"><span>${M.desc}</span><strong>$${g(M.sub)}</strong></div>
          `).join("")}
          <div class="total">
            <span>Total</span>
            <span>$${g((v.items||[]).reduce((M,L)=>M+(L.sub||0),0))}</span>
          </div>
        </div>
        <div class="qr-box">
          <canvas id="qr-${_}"></canvas>
          <div class="qr-hint">Escaneá en el stand</div>
        </div>
      </div>`:""}).join(""):p.map(w=>`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${w.standId}</div>
              <div class="voc-num">${window._lastPedidosIds&&p[idx]?"VOC-"+String((window._lastVoucherNums||[])[idx]||0).padStart(3,"0"):"VOC-000"}</div>
              <div class="stand">${w.standNombre}</div>
              <div class="inv">${f.nombre} ${f.apellido} · ${f.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(w.items||[]).map(_=>`
            <div class="item"><span>${_.desc}</span><strong>$${g(_.sub)}</strong></div>
          `).join("")}
          <div class="total"><span>Total</span><span>$${g((w.items||[]).reduce((_,v)=>_+(v.sub||0),0))}</span></div>
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
    </body></html>`),x.document.close()},window._enviarVouchersWA=()=>{var L;const{inv:f,items:p}=window._lastCobrado||{};if(!f||!p)return;const g=$=>Number($).toLocaleString("es-AR"),x=p.map($=>{const X=($.items||[]).reduce((dt,at)=>dt+(at.sub||0),0),q=($.items||[]).map(dt=>`  • ${dt.desc}: $${g(dt.sub)}`).join(`
`);return`🍷 *${$.standNombre}* (Stand #${$.standId})
${q}
  Total: $${g(X)}`}).join(`

`),w=p.reduce(($,X)=>$+(X.items||[]).reduce((q,dt)=>q+(dt.sub||0),0),0),_=`Hola ${f.nombre}! 🍷

Aquí están tus vouchers de SUCOVI 2027:

${x}

💰 *Total pagado: $${g(w)}*

Presentá cada voucher en el stand correspondiente para retirar tus vinos. 

_Sáb 20 jun 2026 · Roma 656, Olivos_`,M="https://wa.me/54"+((L=f.tel)==null?void 0:L.replace(/\D/g,""))+"?text="+encodeURIComponent(_);window.open(M,"_blank")},window._cancelarCarrito=async()=>{if(confirm("¿Cancelar y vaciar el carrito de "+o.nombre+"?")){for(const f of s)for(const p of f.items||[])p.vinoId&&await ms(f.standId,p.vinoId,p.qty||1).catch(()=>{});await xr(o.fireId),o=null,s=[],m()}},window._volverCobrar=()=>{o=null,s=[],m()},window._cobrar=async()=>{const f=o,p=s.filter(w=>{var _;return(_=w.items)==null?void 0:_.length});if(!p.length)return;const g=document.querySelector("#caja-content .btn-g");g&&(g.disabled=!0,g.textContent="Procesando...");const x=document.getElementById("cobro-msg");try{await ed(f,p);for(const v of p)for(const M of v.items||[])M.vinoId&&await md(v.standId,M.vinoId,M.qty||1).catch(()=>{});await xr(f.fireId),x.innerHTML=`<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${p.length} voucher${p.length>1?"s":""} generado${p.length>1?"s":""}.
      </span>`,g&&(g.style.display="none");const w=document.getElementById("voucher-actions");w&&(w.style.display="flex"),window._lastCobrado={inv:f,items:p};const{escucharPedidosPorInvitado:_}=await Te(async()=>{const{escucharPedidosPorInvitado:v}=await Promise.resolve().then(()=>un);return{escucharPedidosPorInvitado:v}},void 0);_(f.fireId,v=>{const M=v.filter(L=>p.some($=>$.standId===L.standId));window._lastPedidosIds=M.map(L=>L.fireId),window._lastVoucherNums=M.map(L=>L.voucherNum||0),console.log("voucherNums:",window._lastVoucherNums)})}catch(w){x.innerHTML=`<span style="color:#C0392B">Error: ${w.message}</span>`,g&&(g.disabled=!1,g.textContent="Reintentar")}};function I(){const f=document.getElementById("caja-content"),p=e.filter(w=>w.retiro!=="envio"),g={pagado:"b-pago",listo:"b-list",entregado:"b-entr"};if(!p.length){f.innerHTML='<div class="empty">Sin pedidos aún</div>';return}const x={};p.forEach(w=>{x[w.invFireId]||(x[w.invFireId]={nombre:w.invNombre,codigo:w.invCodigo||"",peds:[]}),x[w.invFireId].peds.push(w)}),f.innerHTML=Object.entries(x).map(([w,_])=>{var M;const v=_.peds.reduce((L,$)=>L+($.total||0),0);return`
      <div class="card" style="margin-bottom:10px;cursor:pointer" onclick="window._verDetallePedido('${w}')">
        <div style="display:flex;align-items:center;gap:8px">
          <div class="avatar" style="width:36px;height:36px;font-size:12px;flex-shrink:0">
            ${(_.nombre||"??")[0]}${((M=(_.nombre||"??").split(" ")[1])==null?void 0:M[0])||""}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${_.nombre||""}</div>
            <div style="font-size:11px;color:#888">${_.peds.length} stand${_.peds.length>1?"s":""} · ${_.peds.map(L=>'<span class="badge '+g[L.estado]+'" style="font-size:10px">'+L.standNombre+"</span>").join(" ")}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:15px;font-weight:500">$${Kt(v)}</div>
            <div style="font-size:11px;color:#5BA4CF">Ver detalle ›</div>
          </div>
        </div>
      </div>`}).join("")}window._verDetallePedido=f=>{var $,X;const p=document.getElementById("caja-content"),g=e.filter(q=>q.invFireId===f),x=t.find(q=>q.fireId===f)||{nombre:(($=g[0])==null?void 0:$.invNombre)||"",apellido:"",codigo:((X=g[0])==null?void 0:X.invCodigo)||"",tel:""},w=g.filter(q=>q.estado!=="reembolsado"&&q.estado!=="cancelado").map(q=>({standId:q.standId,standNombre:q.standNombre,retiro:q.retiro,items:q.items||[],fireId:q.fireId})),_=g.filter(q=>q.estado!=="reembolsado"&&q.estado!=="cancelado").reduce((q,dt)=>q+(dt.total||0),0);window._lastCobrado={inv:x,items:w},window._lastPedidosIds=g.filter(q=>q.estado==="pagado").map(q=>q.fireId),window._lastVoucherNums=g.filter(q=>q.estado==="pagado").map(q=>q.voucherNum||0);const v={pagado:"#5BA4CF",entregado:"#3A7D44",reembolsado:"#C0392B",cancelado:"#C0392B",listo:"#D97706"},M={pagado:"b-pago",listo:"b-list",entregado:"b-entr",reembolsado:"b-canc",cancelado:"b-canc"},L={pagado:"💳 Pagado",listo:"✅ Listo",entregado:"📦 Entregado",reembolsado:"↩️ Reembolsado",cancelado:"❌ Cancelado"};p.innerHTML=`
      <button class="btn" onclick="window._cajaVista('pedidos', document.querySelector('.nav button:nth-child(2)'))"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>
      <div class="card" style="margin-bottom:12px">
        <div style="font-size:16px;font-weight:500">${x.nombre} ${x.apellido}</div>
        <div style="font-size:12px;color:#888">${x.codigo}${x.tel?" · "+x.tel:""}</div>
      </div>
      ${g.map(q=>`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${v[q.estado]||"#5BA4CF"};
          ${q.estado==="reembolsado"||q.estado==="cancelado"?"opacity:.7":""}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C">🍷 ${q.standNombre}</div>
            <span class="badge ${M[q.estado]||"b-pago"}">${L[q.estado]||q.estado}</span>
          </div>
          ${(q.items||[]).map(dt=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555;
              ${q.estado==="reembolsado"||q.estado==="cancelado"?"text-decoration:line-through":""}">
              <span>${dt.desc}</span><strong>$${Kt(dt.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Subtotal</span>
            <span ${q.estado==="reembolsado"||q.estado==="cancelado"?'style="text-decoration:line-through;color:#C0392B"':""}>
              $${Kt(q.total||0)}
            </span>
          </div>
          ${q.estado==="pagado"?`
            <button class="btn" style="margin-top:10px;width:100%;padding:7px;font-size:12px;
              color:#C0392B;border-color:#C0392B"
              onclick="window._reembolsarUnPedido('${q.fireId}','${f}')">
              ↩️ Reembolsar este stand
            </button>`:""}
          ${q.estado==="reembolsado"?`
            <div style="font-size:11px;color:#C0392B;margin-top:6px">
              Reembolsado el ${q.reembolsadoAt?new Date(q.reembolsadoAt).toLocaleString("es-AR"):""}
            </div>`:""}
        </div>`).join("")}
      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>TOTAL COBRADO</span><span style="color:#1A3A5C">$${Kt(_)}</span>
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
      </div>`},window._reembolsarUnPedido=async(f,p)=>{confirm("¿Reembolsar este pedido? El stand no podrá marcarlo como entregado.")&&(await od(f),window._verDetallePedido(p))},window._descargarVoucherPDF=async()=>{const{inv:f,items:p}=window._lastCobrado||{};if(!f||!p)return;window.jspdf||await new Promise((M,L)=>{const $=document.createElement("script");$.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",$.onload=M,$.onerror=L,document.head.appendChild($)}),window.qrcode||await new Promise((M,L)=>{const $=document.createElement("script");$.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",$.onload=M,$.onerror=L,document.head.appendChild($)});const{jsPDF:g}=window.jspdf,x=new g({unit:"mm",format:"a4"}),w=window._lastPedidosIds||[];let _=15;const v=(M,L,$,X)=>{const q=(M.items||[]).length,dt=Math.max(90,62+q*7);x.setDrawColor(26,58,92),x.setLineWidth(.5),x.roundedRect(10,X,190,dt,3,3,"S"),x.setFillColor(26,58,92),x.roundedRect(10,X,190,16,3,3,"F"),x.rect(10,X+10,190,6,"F"),x.setTextColor(180,180,180),x.setFontSize(7),x.setFont("helvetica","normal"),x.text("SUCOVI 2027  .  VOUCHER DE RETIRO",15,X+7),x.text("Stand #"+M.standId,195,X+7,{align:"right"});const at=$?"VOC-"+String($).padStart(3,"0"):"VOC-000";x.setTextColor(255,255,255),x.setFontSize(18),x.setFont("helvetica","bold"),x.text(at,15,X+14),x.setFillColor(58,125,68),x.roundedRect(158,X+9,38,8,2,2,"F"),x.setTextColor(255,255,255),x.setFontSize(8),x.setFont("helvetica","bold"),x.text("V PAGADO",177,X+14.5,{align:"center"}),x.setTextColor(26,58,92),x.setFontSize(14),x.setFont("helvetica","bold"),x.text(M.standNombre,15,X+26),x.setFontSize(9),x.setFont("helvetica","normal"),x.setTextColor(100,100,100),x.text((f.nombre||"")+" "+(f.apellido||"")+"  .  "+(f.codigo||""),15,X+33),x.setDrawColor(220,220,220),x.setLineWidth(.3),x.line(15,X+37,195,X+37);let Nt=X+44;if((M.items||[]).forEach(lt=>{x.setFontSize(10),x.setFont("helvetica","normal"),x.setTextColor(50,50,50),x.text(lt.desc,15,Nt),x.setFont("helvetica","bold"),x.setTextColor(30,30,30),x.text("$"+Number(lt.sub).toLocaleString("es-AR"),145,Nt,{align:"right"}),x.setFont("helvetica","normal"),Nt+=7}),x.setDrawColor(180,180,180),x.setLineWidth(.3),x.line(15,Nt,145,Nt),Nt+=6,x.setFontSize(12),x.setFont("helvetica","bold"),x.setTextColor(26,58,92),x.text("Total",15,Nt),x.text("$"+Number((M.items||[]).reduce((lt,ot)=>lt+(ot.sub||0),0)).toLocaleString("es-AR"),145,Nt,{align:"right"}),L&&window.qrcode)try{const lt=window.qrcode(0,"M");lt.addData(L),lt.make();const ot=lt.getModuleCount(),Qt=32,jt=Qt/ot,Pe=158,ee=X+38;x.setFillColor(255,255,255),x.rect(Pe-1,ee-1,Qt+2,Qt+2,"F"),x.setFillColor(0,0,0);for(let Wt=0;Wt<ot;Wt++)for(let ne=0;ne<ot;ne++)lt.isDark(Wt,ne)&&x.rect(Pe+ne*jt,ee+Wt*jt,jt,jt,"F");x.setFontSize(6),x.setFont("helvetica","normal"),x.setTextColor(120,120,120),x.text("Escaneá en el stand",Pe+Qt/2,ee+Qt+4,{align:"center"})}catch{}return X+dt+8};p.forEach((M,L)=>{L>0&&_>130&&(x.addPage(),_=15),_=v(M,w[L],(window._lastVoucherNums||[])[L],_)}),x.save("Voucher_"+(f.nombre||"").replace(/ /g,"_")+"_SUCOVI2027.pdf")},window._abrirScanner=async()=>{document.getElementById("scan-overlay").style.display="flex";const f=document.getElementById("scan-status");f&&(f.textContent="Cargando escáner...");try{await vl(),a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const p=document.getElementById("scan-video");p.srcObject=a,l=!0,f&&(f.textContent="Buscando QR...");const g=document.createElement("canvas"),x=g.getContext("2d",{willReadFrequently:!0}),w=()=>{if(l){if(p.readyState===p.HAVE_ENOUGH_DATA&&p.videoWidth>0){g.width=p.videoWidth,g.height=p.videoHeight,x.drawImage(p,0,0);const _=x.getImageData(0,0,g.width,g.height),v=window.jsQR(_.data,_.width,_.height,{inversionAttempts:"dontInvert"});if(v&&v.data){const M=v.data;window._cerrarScanner();const L=M.match(/INV-\d+/),$=M.match(/inv=([A-Z0-9]+)/i);if(L){const X=document.getElementById("buscar-caja");X&&(X.value=L[0],window._buscarInv(!0))}else $&&Te(async()=>{const{buscarInvitadoPorToken:X}=await Promise.resolve().then(()=>un);return{buscarInvitadoPorToken:X}},void 0).then(({buscarInvitadoPorToken:X})=>X($[1]).then(q=>{q&&window._seleccionarInv(q.fireId)}));return}}l&&requestAnimationFrame(w)}};p.addEventListener("loadeddata",()=>requestAnimationFrame(w))}catch{f&&(f.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}},window._cerrarScanner=()=>{l=!1,a&&(a.getTracks().forEach(p=>p.stop()),a=null);const f=document.getElementById("scan-overlay");f&&(f.style.display="none")};let R=null,S=[],D={};function B(){const f=document.getElementById("caja-content");f.innerHTML=`
      <div class="wrap" style="max-width:500px;margin:0 auto">
        <div class="card" style="margin-bottom:12px">
          <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:10px">📦 Pedido especial — Pago en caja</p>
          <p style="font-size:12px;color:#888;margin-bottom:10px">Buscá el invitado por código o escaneá su QR</p>
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input id="pe-codigo" type="text" placeholder="INV-0001 o apellido"
              style="flex:1;padding:8px;border:1px solid #ccc;border-radius:6px;font-size:14px;text-transform:uppercase"
              oninput="this.value=this.value.toUpperCase()">
            <button class="btn btn-b" style="padding:8px 12px" onclick="window._peBuscar()">Buscar</button>
            <button class="btn" style="padding:8px 10px" onclick="window._peScanner()">📷</button>
          </div>
          <div id="pe-inv-info"></div>
        </div>
        <div id="pe-carta" style="display:none">
          <div class="card" style="margin-bottom:12px">
            <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:10px">Seleccioná los vinos</p>
            <div id="pe-vinos-lista"></div>
          </div>
          <div id="pe-resumen" class="card" style="display:none;margin-bottom:12px"></div>
          <button id="pe-btn-cobrar" class="btn btn-v" style="width:100%;padding:12px;font-size:15px;display:none"
            onclick="window._peCobrar()">💳 Cobrar pedido especial</button>
        </div>
        <div id="pe-msg" style="text-align:center;font-size:13px;margin-top:8px"></div>
      </div>`,R=null,S=[],N()}async function N(){D={};let f=0;zt.forEach(p=>{xn(p.id,g=>{D[p.id]={bodega:p,vinos:g.filter(x=>(x.unidades||[]).some(w=>w.unidadesPorCaja))},f++,f===zt.length&&j()})})}function j(){const f=document.getElementById("pe-vinos-lista");if(!f)return;const p=Object.values(D).filter(g=>g.vinos.length>0);if(!p.length){f.innerHTML='<div class="empty">No hay vinos con precio de caja cargado todavía.</div>';return}f.innerHTML=p.map(({bodega:g,vinos:x})=>'<div style="margin-bottom:14px"><div style="font-size:12px;font-weight:600;color:#1A3A5C;margin-bottom:6px;text-transform:uppercase">'+g.nombre+"</div>"+x.map(w=>{const _=(w.unidades||[]).find(v=>v.unidadesPorCaja);return _?'<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:.5px solid #eee"><div style="flex:1"><div style="font-size:13px;font-weight:500">'+w.nombre+'</div><div style="font-size:11px;color:#888">'+(w.varietal||"")+" · Caja x"+_.unidadesPorCaja+" · $"+Kt(_.p)+'</div></div><div style="display:flex;align-items:center;gap:8px"><button class="qty-btn" onclick="window._peQty('+g.id+",'"+w.fireId+`',-1)">−</button><span id="pe-qty-`+g.id+"-"+w.fireId+'" style="min-width:20px;text-align:center;font-size:14px">0</span><button class="qty-btn" onclick="window._peQty('+g.id+",'"+w.fireId+`',1)">+</button></div></div>`:""}).join("")+"</div>").join("")}window._peBuscar=()=>{const f=document.getElementById("pe-codigo").value.trim().toUpperCase();if(!f)return;const p=document.getElementById("pe-inv-info"),g=t.filter(x=>x.codigo===f||(x.nombre+" "+x.apellido).toUpperCase().includes(f));if(!g.length){p.innerHTML='<div style="color:#C0392B;font-size:12px">Invitado no encontrado</div>';return}g.length===1?window._peSeleccionar(g[0].fireId):p.innerHTML='<div style="font-size:12px;color:#555;margin-bottom:6px">Seleccioná el invitado:</div>'+g.map(x=>`<div onclick="window._peSeleccionar('`+x.fireId+`')" style="background:#f0f4f8;border-radius:8px;padding:10px;font-size:13px;cursor:pointer;margin-bottom:6px;border:1px solid #D6E4F0"><strong>`+x.nombre+" "+x.apellido+"</strong> · "+x.codigo+(x.familia?" · Familia "+x.familia:"")+"</div>").join("")},window._peSeleccionar=f=>{const p=t.find(x=>x.fireId===f);if(!p)return;R=p;const g=document.getElementById("pe-inv-info");g.innerHTML='<div style="background:#f0f4f8;border-radius:8px;padding:10px;font-size:13px"><strong>'+p.nombre+" "+p.apellido+"</strong> · "+p.codigo+(p.familia?" · Familia "+p.familia:"")+"</div>",document.getElementById("pe-carta").style.display="block",j()},window._peScanner=async()=>{await vl();const f=document.getElementById("scan-overlay");f.style.display="flex",l=!0;try{a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const p=document.getElementById("scan-video");p.srcObject=a;const g=document.createElement("canvas"),x=g.getContext("2d"),w=()=>{if(l){if(p.readyState===p.HAVE_ENOUGH_DATA){g.width=p.videoWidth,g.height=p.videoHeight,x.drawImage(p,0,0);const _=x.getImageData(0,0,g.width,g.height),v=window.jsQR(_.data,_.width,_.height);if(v){window._cerrarScanner();const M=v.data.match(/inv=([A-Z0-9]+)/i);if(M){const L=t.find($=>$.token===M[1]);L&&(document.getElementById("pe-codigo").value=L.codigo,window._peBuscar())}}}requestAnimationFrame(w)}};w()}catch{document.getElementById("scan-status").textContent="No se pudo acceder a la cámara."}},window._peQty=(f,p,g)=>{const x=f+"_"+p,w=S.findIndex(at=>at.key===x),_=D[f];if(!_)return;const v=_.vinos.find(at=>(at.fireId||at.id)===p);if(!v)return;const M=(v.unidades||[]).find(at=>at.unidadesPorCaja);if(!M)return;w>=0?(S[w].qty=Math.max(0,S[w].qty+g),S[w].qty===0&&S.splice(w,1)):g>0&&S.push({key:x,standId:Number(f),standNombre:_.bodega.nombre,vinoNombre:v.nombre,vinoId:p,qty:1,precioCaja:M.p,unidadesPorCaja:M.unidadesPorCaja,desc:v.nombre+" — Caja x"+M.unidadesPorCaja+" ×1",sub:M.p});const L=document.getElementById("pe-qty-"+f+"-"+p),$=S.find(at=>at.key===x);L&&(L.textContent=$?$.qty:0),$&&($.sub=$.precioCaja*$.qty,$.desc=v.nombre+" — Caja x"+M.unidadesPorCaja+" ×"+$.qty);const X=document.getElementById("pe-resumen"),q=document.getElementById("pe-btn-cobrar");if(!S.length){X.style.display="none",q.style.display="none";return}const dt=S.reduce((at,Nt)=>at+Nt.sub,0);X.style.display="block",q.style.display="block",X.innerHTML='<p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Resumen</p>'+S.map(at=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #eee"><span>'+at.desc+"</span><strong>$"+Kt(at.sub)+"</strong></div>").join("")+'<div style="display:flex;justify-content:space-between;font-size:16px;font-weight:600;color:#1A3A5C;margin-top:8px"><span>Total</span><span>$'+Kt(dt)+"</span></div>"},window._peCobrar=async()=>{if(!R||!S.length)return;const f=document.getElementById("pe-msg"),p=document.getElementById("pe-btn-cobrar");p.disabled=!0,p.style.opacity="0.6",f.innerHTML='<span style="color:#888">Procesando...</span>';try{const g=S.reduce((w,_)=>w+_.sub,0),{peNum:x}=await xd({invFireId:R.fireId,invNombre:R.nombre+" "+R.apellido,invCodigo:R.codigo,familia:R.familia||"",items:S,total:g});f.innerHTML='<span style="color:#3A7D44">✓ Pedido '+x+" registrado correctamente</span>",R=null,S=[],setTimeout(()=>B(),2e3)}catch(g){f.innerHTML='<span style="color:#C0392B">Error: '+g.message+"</span>",p.disabled=!1,p.style.opacity="1"}},m();const z=document.createElement("button");z.innerHTML="?",z.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",z.onclick=()=>document.getElementById("modal-ayuda-caja").style.display="flex",document.body.appendChild(z);const T=document.createElement("div");T.id="modal-ayuda-caja",T.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",T.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Panel de caja</div><button onclick="document.getElementById(&quot;modal-ayuda-caja&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📷 Escanear código del invitado</div><div>Escaneá el QR o ingresá el código del invitado (ej: INV-0001) para ver su carrito de compras con todos los vinos que seleccionó en los stands.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">💳 Cobrar</div><div>Una vez verificado el carrito, tocá <strong>Cobrar</strong> para registrar el pago. Se genera automáticamente un voucher con número correlativo (VOC-001, VOC-002, etc.).</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">⬇️ Descargar PDF</div><div>Después de cobrar podés descargar el voucher en PDF para entregar al invitado. El voucher incluye el QR para retirar los vinos en cada stand.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">↩️ Reembolsar</div><div>Si un pedido fue cobrado por error, podés reembolsarlo desde la lista de pedidos. El stand no podrá marcarlo como entregado.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ Verificá siempre el total antes de cobrar. El reembolso no devuelve dinero automáticamente.</div></div></div>',T.addEventListener("click",f=>{f.target===T&&(T.style.display="none")}),document.body.appendChild(T)}const Go=n=>Number(n).toLocaleString("es-AR");function Wm(n,t,e){if(te(),!e||e.estado==="invalidado"){n.innerHTML=Ot({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
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
      </div>`,window._buscarInvStand=async()=>{var S;const m=(((S=document.getElementById("inv-cod-manual"))==null?void 0:S.value)||"").trim(),y=document.getElementById("inv-cod-err");if(!m)return;const E=m.split(".");if(E.length!==2){y.textContent="Formato: INV-0001.Apellido";return}const I=E[0].toUpperCase().trim(),R=E[1].toLowerCase().trim();y.textContent="Buscando...";try{const{buscarInvitadoPorCodigo:D}=await Te(async()=>{const{buscarInvitadoPorCodigo:N}=await Promise.resolve().then(()=>un);return{buscarInvitadoPorCodigo:N}},void 0),B=await D(I);if(!B){y.textContent="Código no encontrado";return}if(B.estado==="invalidado"){y.textContent="Invitado invalidado";return}if(!B.apellido.toLowerCase().startsWith(R)){y.textContent="Código o apellido incorrecto";return}window.location.href="/stand/"+t.id+"?inv="+B.token}catch(D){y.textContent="Error: "+D.message}};return}if(e.estado==="pendiente"){n.innerHTML=Ot({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">
          Bono pendiente de pago
        </h2>
        <p style="font-size:14px;color:#666;">
          Hola ${e.nombre}, tu bono ($35.000) todavía no fue confirmado.<br>
          Pasá por la entrada para abonar.
        </p>
      </div>`;return}let i=[],o="stand";const s=`/carrito?inv=${e.token}`;n.innerHTML=Ot({title:"🍷 "+t.nombre,sub:t.region+" · Stand #"+t.id,actions:[`<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
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
    </button>`,window._stockDisponible={};let a=window._stockDisponible;xo(m=>{console.log("STOCK DOCS:",m.length,"bodega:",t.id),a={},m.filter(y=>Number(y.standId)===Number(t.id)).forEach(y=>{a[y.vinoId]=Math.max(0,(y.total||0)-(y.degustacion||0)-(y.reservado||0)-(y.pagado||0)-(y.entregado||0))}),i.forEach((y,E)=>{const I=document.getElementById("disp-"+E);if(!I)return;const R=a[y.fireId||y.id];R!==void 0&&(I.textContent="("+R+" disp.)",I.style.color=R===0?"#C0392B":R<=3?"#D97706":"#888")})}),xn(t.id,m=>{i=m,d(),setTimeout(()=>{i.forEach((y,E)=>{const I=document.getElementById("disp-"+E);if(!I)return;const R=a[y.fireId||y.id];R!==void 0&&(I.textContent="("+R+" disp.)",I.style.color=R===0?"#C0392B":R<=3?"#D97706":"#888")})},300)});const l={};fs(e.fireId,m=>{var D,B;const y=m.find(N=>Number(N.standId)===t.id);y&&y.items&&y.items.forEach(N=>{if(N.key&&l[N.key]===void 0){l[N.key]=N.qty||0;const[j,z]=N.key.split("_").map(Number),T=document.getElementById("qv"+j+"_"+z);T&&(T.textContent=l[N.key])}});const E=m.reduce((N,j)=>N+(j.items||[]).reduce((z,T)=>z+(T.sub||0),0),0),I=m.reduce((N,j)=>N+(j.items||[]).length,0),R=document.getElementById("cart-fab"),S=document.getElementById("cart-fab-txt");R&&I>0?(R.style.display="flex",S.textContent=`Ver carrito · $${Go(E)}`):R&&(R.style.display="none"),y&&((D=y.items)!=null&&D.length)?(o=y.retiro||"stand",(B=document.getElementById("rb-stand"))==null||B.classList.toggle("sel",o==="stand"),document.getElementById("retiro-box").style.display="block",document.getElementById("stand-resumen").style.display="block",document.getElementById("stand-resumen-lines").innerHTML=y.items.map(N=>`
          <div style="display:flex;justify-content:space-between;font-size:12px;
            color:#555;margin-bottom:4px">
            <span>${N.desc}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-weight:500">$${Go(N.sub)}</span>
              <button onclick="window._quitarItem('${N.key}')"
                style="border:none;background:none;color:#A32D2D;cursor:pointer;
                font-size:13px;padding:0 2px">✕</button>
            </div>
          </div>`).join("")):(document.getElementById("stand-resumen").style.display="none",y===null&&(document.getElementById("retiro-box").style.display="none"))});function d(){const m=document.getElementById("menu-lista");if(m){if(!i.length){m.innerHTML='<div class="empty">La carta estará disponible pronto.</div><a href="/acceso?inv='+e.token+'#stands-section" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#1A3A5C;color:#fff;border-radius:8px;padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-top:12px">🛍️ Seguir comprando</a>';return}m.innerHTML=i.map((y,E)=>`
      <div class="vino-card">
        <div style="font-size:17px;font-weight:600;color:#1A3A5C">${y.nombre}</div>
        <div style="font-size:11px;color:#888;margin-top:2px">
          <span style="font-size:14px;color:#555">${y.varietal||""}${y.cosecha?" · "+y.cosecha:""}</span>
        </div>
        ${y.descripcion?`<div style="font-size:13px;color:#666;margin-top:3px">${y.descripcion}</div>`:""}
        ${(y.unidades||[]).map((I,R)=>`
          <div class="qty-row">
            <span class="qty-label">
              ${I.u} — <span style="color:#6B1C1C;font-weight:600">$${Go(I.p)}</span>
              <span id="disp-${E}" style="font-size:11px;margin-left:6px"></span>
            </span>
            <button class="qty-btn" id="btnm${E}_${R}" onclick="window._agregar(${E},${R},-1)">−</button>
            <span id="qv${E}_${R}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" id="btnp${E}_${R}" onclick="window._agregar(${E},${R},1)">+</button>
          </div>`).join("")}
      </div>`).join("")+'<a href="/acceso?inv='+e.token+'#stands-section" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#1A3A5C;color:#fff;border-radius:8px;padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-top:12px">🛍️ Seguir comprando</a>'}}window._agregar=async(m,y,E)=>{const I=i[m];if(!I)return;const R=(I.unidades||[])[y];if(!R)return;const S=`${m}_${y}`,D=`btn${E>0?"p":"m"}${m}_${y}`,B=document.getElementById(D);if(B&&(B.disabled=!0,B.style.opacity="0.4"),E>0){const j=I.fireId||I.id;if(!await fd(t.id,j,E)){window._showStandMsg("Sin stock disponible","#C0392B"),setTimeout(()=>window._hideStandMsg(),1800),B&&(B.disabled=!1,B.style.opacity="1");return}}l[S]=Math.max(0,(l[S]||0)+E);const N=document.getElementById(`qv${m}_${y}`);if(N&&(N.textContent=l[S]),E<0&&await ms(t.id,I.fireId||I.id,1).catch(()=>{}),l[S]===0)window._showStandMsg("⏳ Guardando...","#5BA4CF"),await Ji(e.fireId,t.id,S),window._showStandMsg("✓ Carrito actualizado","#3B6D11"),B&&(B.disabled=!1,B.style.opacity="1"),setTimeout(()=>window._hideStandMsg(),1500);else{const j={key:S,desc:`${I.nombre} — ${R.u} ×${l[S]}`,sub:R.p*l[S],vinoNombre:I.nombre,vinoId:I.fireId||I.id||I.nombre,unidad:R.u,precio:R.p,qty:l[S]};window._showStandMsg("⏳ Guardando...","#5BA4CF");const z=document.getElementById("add-msg");z.style.cssText="font-size:18px;color:#5BA4CF;text-align:center;padding:8px",await td(e.fireId,t.id,t.nombre,j,o);const T=I.fireId||I.id;a[T]!==void 0&&(a[T]=Math.max(0,a[T]-E)),document.getElementById("retiro-box").style.display="block",window._showStandMsg("✓ Carrito actualizado","#3B6D11"),B&&(B.disabled=!1,B.style.opacity="1"),setTimeout(()=>window._hideStandMsg(),1500),z.textContent="",z.style.cssText=""}},window._sRet=async m=>{o=m,document.getElementById("rb-stand").classList.toggle("sel",m==="stand"),await ps(e.fireId,t.id,m)},window._quitarItem=async m=>{await Ji(e.fireId,t.id,m);const[y,E]=m.split("_").map(Number);l[m]=0;const I=document.getElementById(`qv${y}_${E}`);I&&(I.textContent=0)};const h=document.createElement("button");h.innerHTML="?",h.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.25)",h.onclick=()=>document.getElementById("modal-ayuda-stand").style.display="flex",document.body.appendChild(h);const b=document.createElement("div");b.id="modal-ayuda-stand",b.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",b.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Stand — Carta de vinos</div><button onclick="document.getElementById(&quot;modal-ayuda-stand&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🍷 Seleccionar vinos</div><div>Usá los botones <strong>+</strong> y <strong>−</strong> para agregar o quitar unidades de cada vino. El carrito se actualiza automáticamente.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🛒 Ver carrito</div><div>Tocá <strong>Ver carrito</strong> para revisar todo lo que seleccionaste en los distintos stands. Podés seguir agregando vinos de otras bodegas.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🛍️ Seguir comprando</div><div>Tocá <strong>Seguir comprando</strong> para ir a otro stand y seguir eligiendo vinos. Todo se acumula en tu carrito.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">💳 Pagar</div><div>Cuando termines de elegir, dirigite a <strong>Caja</strong> para pagar todo junto. El cajero escanea tu código y ve todo tu pedido.</div></div><div style="background:#EBF4FA;border-radius:8px;padding:10px;font-size:12px;color:#1A3A5C">ℹ️ Las degustaciones están incluidas en tu bono. Solo pagás las botellas o cajas que llevás.</div></div></div>',b.addEventListener("click",m=>{m.target===b&&(b.style.display="none")}),document.body.appendChild(b)}window._abrirScannerStand=async()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="flex");const t=document.getElementById("scan-status-stand");try{window.jsQR||await new Promise((h,b)=>{const m=document.createElement("script");m.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",m.onload=h,m.onerror=b,document.head.appendChild(m)});const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),i=document.getElementById("scan-video-stand");i.srcObject=e,t&&(t.textContent="Buscando QR...");const o=document.createElement("canvas"),s=o.getContext("2d",{willReadFrequently:!0});let a=!0;const l=()=>{a=!1,e.getTracks().forEach(h=>h.stop())},d=()=>{if(a){if(i.readyState===i.HAVE_ENOUGH_DATA&&i.videoWidth>0){o.width=i.videoWidth,o.height=i.videoHeight,s.drawImage(i,0,0);const h=s.getImageData(0,0,o.width,o.height),b=window.jsQR(h.data,h.width,h.height,{inversionAttempts:"dontInvert"});if(b&&b.data){l(),window._cerrarScannerStand();const y=b.data.match(/inv=([A-Z0-9]+)/i),E=window.location.pathname.split("/")[2];y&&E&&(window.location.href="/stand/"+E+"?inv="+y[1]);return}}a&&requestAnimationFrame(d)}};i.addEventListener("loadeddata",()=>requestAnimationFrame(d))}catch{t&&(t.textContent="No se pudo acceder a la camara.")}};window._cerrarScannerStand=()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="none");const t=document.getElementById("scan-video-stand");t&&t.srcObject&&(t.srcObject.getTracks().forEach(e=>e.stop()),t.srcObject=null)};window._showStandMsg=(n,t)=>{const e=document.getElementById("stand-msg-modal"),i=document.getElementById("stand-msg-box");!e||!i||(i.textContent=n,i.style.color=t||"#1A3A5C",e.style.display="flex")};window._hideStandMsg=()=>{const n=document.getElementById("stand-msg-modal");n&&(n.style.display="none")};const de=n=>Number(n).toLocaleString("es-AR");async function Gm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Ko(n,t,e){const i=document.getElementById(e);i&&(i.textContent="Iniciando cámara..."),await Gm();const o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),s=document.getElementById(n);if(!s)return o.getTracks().forEach(m=>m.stop()),null;s.srcObject=o;let a=!0;const l=document.createElement("canvas"),d=l.getContext("2d",{willReadFrequently:!0}),h=()=>{a=!1,o.getTracks().forEach(m=>m.stop())},b=()=>{if(a){if(s.readyState===s.HAVE_ENOUGH_DATA&&s.videoWidth>0){l.width=s.videoWidth,l.height=s.videoHeight,d.drawImage(s,0,0);const m=d.getImageData(0,0,l.width,l.height),y=window.jsQR(m.data,m.width,m.height,{inversionAttempts:"dontInvert"});if(y&&y.data){h(),t(y.data);return}}a&&requestAnimationFrame(b)}};return i&&(i.textContent="Buscando QR..."),s.addEventListener("loadeddata",()=>requestAnimationFrame(b)),h}function Km(n,t){if(te(),!document.getElementById("sp-css")){const m=document.createElement("style");m.id="sp-css",m.textContent=`
      .tab-btn { border:none;border-radius:0;border-bottom:2px solid transparent;
        color:#888;padding:8px 14px;margin-bottom:-2px;background:none;
        font-size:12px;cursor:pointer;font-weight:400 }
      .tab-btn.active { border-bottom-color:#5BA4CF;color:#5BA4CF;font-weight:600 }
      .b-canc { background:#FEE2E2;color:#C0392B;border:1px solid #FCA5A5 }
      .sf-btn { font-size:11px }
      .sf-btn.active { background:#EAF3DE;color:#3B6D11;border-color:#3B6D11 }
    `,document.head.appendChild(m)}let e=[],i="pendientes",o=null,s=null;if(!document.getElementById("stand-header-style")){const m=document.createElement("style");m.id="stand-header-style",m.textContent=".hdr { background: linear-gradient(135deg, #2D6A4F, #3A7D44) !important; } .gold { background: linear-gradient(90deg, #C9A96E, #A8865A, #C9A96E) !important; }",document.head.appendChild(m)}n.innerHTML=Ot({title:`🍷 ${t.nombre}`,sub:`Stand #${t.id} · Sucovi 2027`,actions:[`<button class="btn" onclick="sessionStorage.removeItem('stand-auth-${t.id}');location.reload()"
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
    </div>`,window._setTab=m=>{["pedidos","carta","resumen"].forEach(y=>{var I;(I=document.getElementById("tab-"+y))==null||I.classList.toggle("active",y===m);const E=document.getElementById("tab-content-"+y);E&&(E.style.display=y===m?"block":"none")}),m==="carta"&&d(),m==="resumen"&&h()},window._setSF=(m,y)=>{i=m,["sf-listos","sf-entr","sf-all","sf-log"].forEach(E=>{var I;(I=document.getElementById(E))==null||I.classList.remove("active")}),y.classList.add("active"),a()},nd(t.id,m=>{e=m,a()});function a(){const m=document.getElementById("sp-pedidos");if(!m)return;let y=e;if(i==="pendientes"?y=e.filter(E=>(E.estado==="pagado"||E.estado==="listo")&&E.retiro!=="envio"):i==="entregados"?y=e.filter(E=>E.estado==="entregado"&&E.retiro!=="envio"):y=e.filter(E=>E.retiro!=="envio"),!y.length){const E={pendientes:"Sin pedidos listos 🎉",entregados:"Sin entregas todavía",todos:"Sin pedidos"};m.innerHTML=`<div class="empty">${E[i]||"Sin pedidos"}</div>`;return}m.innerHTML=y.map(E=>{const I=E.estado==="entregado";return`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${I?"#3A7D44":"#5BA4CF"}">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">
            <div>
              <div style="font-size:15px;font-weight:500;color:#1A3A5C">${E.invNombre||"Invitado"}</div>
              ${E.voucherNum?'<div style="font-size:10px;color:#5BA4CF;font-weight:500">VOC-'+String(E.voucherNum).padStart(3,"0")+"</div>":""}
              <div style="font-size:11px;color:#888">${E.invCodigo||""}</div>
            </div>
            <span class="badge ${I?"b-entr":"b-pago"}">${I?"✅ Entregado":"💳 Pagado"}</span>
          </div>
          ${(E.items||[]).map(R=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555">
              <span>${R.desc}</span><strong>$${de(R.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Total</span><span>$${de(E.total||0)}</span>
          </div>
          <div style="display:flex;gap:6px;margin-top:10px">
            ${I?"":`
            <button class="btn btn-g" style="flex:1;padding:9px"
              onclick="window._scanearEsteRemito('${E.fireId}')">
              📷 Escanear
            </button>`}
            <button class="btn" style="flex:1;padding:9px"
              onclick="window._imprimirRemito('${E.fireId}', ${I})">
              🖨️ ${I?"Remito entregado":"Imprimir remito"}
            </button>
          </div>
        </div>`}).join("")}window._imprimirRemito=(m,y)=>{const E=e.find(D=>D.fireId===m);if(!E)return;const I=D=>Number(D).toLocaleString("es-AR"),R=E.voucherNum?"VOC-"+String(E.voucherNum).padStart(3,"0"):"VOC-000",S=window.open("","_blank");S.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <title>Remito ${R}</title>
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
            <div class="voc-num">${R}</div>
            <div class="stand">${t.nombre}</div>
            <div class="inv">${E.invNombre||""} · ${E.invCodigo||""}</div>
          </div>
          <div style="text-align:right">
            <div class="badge ${y?"badge-entregado":"badge-pagado"}">${y?"✅ ENTREGADO":"✅ PAGADO"}</div>
          </div>
        </div>
        ${(E.items||[]).map(D=>`
          <div class="item"><span>${D.desc}</span><strong>$${I(D.sub)}</strong></div>
        `).join("")}
        <div class="total">
          <span>Total</span>
          <span>$${I(E.total||0)}</span>
        </div>
        ${y?'<div class="sello">✅ ENTREGADO</div>':`
        <div class="qr-box">
          <canvas id="qr-remito"></canvas>
          <div class="qr-hint">Escaneá en el stand</div>
        </div>`}
      </div>
      <script>
        const c = document.getElementById('qr-remito')
        if (c && typeof qrcode !== 'undefined') {
          const qr = qrcode(0, 'M')
          qr.addData('${m}')
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
    </body></html>`),S.document.close()},window._entregarPedido=async m=>{await ld(m)},window._scanearEsteRemito=async m=>{document.getElementById("scan-overlay-voucher").style.display="flex";const y=document.getElementById("scan-status-voucher");y&&(y.textContent="Escaneá el QR de este remito...");try{s=await Ko("scan-video-voucher",E=>{window._cerrarScannerVoucher();const I=document.getElementById("voucher-modal"),R=document.getElementById("voucher-modal-content");E.includes(m)?R.innerHTML=`
            <div style="text-align:center;padding:8px 0 16px">
              <div style="font-size:48px;margin-bottom:8px">✅</div>
              <div style="font-size:18px;font-weight:700;color:#3A7D44;margin-bottom:4px">QR válido</div>
              <div style="font-size:14px;color:#555;margin-bottom:20px">¿Confirmás la entrega de este pedido?</div>
              <div style="display:flex;gap:10px;justify-content:center">
                <button onclick="document.getElementById('voucher-modal').style.display='none'"
                  style="padding:10px 20px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:14px;cursor:pointer">
                  Cancelar
                </button>
                <button onclick="marcarEntregado('${m}');document.getElementById('voucher-modal').style.display='none'"
                  style="padding:10px 20px;border-radius:8px;border:none;background:#3A7D44;color:#fff;font-size:14px;font-weight:600;cursor:pointer">
                  Confirmar entrega
                </button>
              </div>
            </div>`:R.innerHTML=`
            <div style="text-align:center;padding:8px 0 16px">
              <div style="font-size:48px;margin-bottom:8px">❌</div>
              <div style="font-size:18px;font-weight:700;color:#C0392B;margin-bottom:4px">QR no corresponde</div>
              <div style="font-size:14px;color:#555;margin-bottom:20px">Este QR no pertenece al remito seleccionado.</div>
              <button onclick="document.getElementById('voucher-modal').style.display='none'"
                style="padding:10px 24px;border-radius:8px;border:none;background:#1A3A5C;color:#fff;font-size:14px;font-weight:600;cursor:pointer">
                Cerrar
              </button>
            </div>`,I.style.display="flex"},"scan-status-voucher")}catch{y&&(y.textContent="No se pudo acceder a la cámara.")}},window._listoParaLogistica=async m=>{await rd(m)};let l={};xo(m=>{l={},m.filter(y=>Number(y.standId)===Number(t.id)).forEach(y=>{l[y.vinoId]=Math.max(0,(y.total||0)-(y.degustacion||0)-(y.reservado||0)-(y.pagado||0)-(y.entregado||0))}),document.getElementById("sp-carta")&&d()});function d(){const m=document.getElementById("sp-carta");m&&(m.innerHTML='<div class="empty">Cargando...</div>',xn(t.id,y=>{if(!y.length){m.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}m.innerHTML=y.map(E=>{const I=l[E.fireId||E.id],R=I!==void 0?'<span style="font-size:12px;font-weight:500;color:'+(I===0?"#C0392B":I<=3?"#D97706":"#3A7D44")+';margin-left:8px">('+I+" disp.)</span>":"";return'<div class="card" style="margin-bottom:10px"><div style="font-size:17px;font-weight:600;color:#1A3A5C">'+E.nombre+R+'</div><div style="font-size:14px;color:#666;margin-top:2px">'+(E.varietal||"")+(E.cosecha?" · "+E.cosecha:"")+"</div>"+(E.descripcion?'<div style="font-size:13px;color:#888;margin-top:3px">'+E.descripcion+"</div>":"")+'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">'+(E.unidades||[]).map(S=>'<span style="background:#EBF4FA;color:#1A3A5C;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:500">'+S.u+": $"+de(S.p)+"</span>").join("")+"</div></div>"}).join("")}))}function h(){const m=document.getElementById("sp-resumen");if(!m)return;const y=e.filter(z=>z.estado!=="reembolsado"&&z.estado!=="cancelado"),E=y.filter(z=>z.estado==="entregado"&&z.retiro!=="envio"),I=y.filter(z=>(z.estado==="pagado"||z.estado==="listo")&&z.retiro!=="envio"),R=y.filter(z=>z.retiro==="envio"),S=E.reduce((z,T)=>z+(T.total||0),0),D=I.reduce((z,T)=>z+(T.total||0),0),B=y.reduce((z,T)=>z+(T.total||0),0),N={};E.forEach(z=>(z.items||[]).forEach(T=>{const f=T.vinoNombre+" — "+T.unidad;N[f]||(N[f]={cant:0,total:0}),N[f].cant+=T.qty||1,N[f].total+=T.sub||0}));const j=Object.entries(N).sort((z,T)=>T[1].total-z[1].total);m.innerHTML=`
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
        <div class="stat"><div class="v" style="color:#3A7D44">$${de(S)}</div><div class="l">Entregado</div></div>
        <div class="stat"><div class="v" style="color:#D97706">$${de(D)}</div><div class="l">Por entregar</div></div>
        <div class="stat"><div class="v">$${de(B)}</div><div class="l">Total vendido</div></div>
        ${R.length?`<div class="stat" style="grid-column:1/-1"><div class="v" style="color:#5BA4CF;font-size:14px">${R.length} pedido${R.length>1?"s":""} de envío a domicilio</div><div class="l">Manejados por logística</div></div>`:""}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Detalle por vino (entregados)</p>
        ${j.length?j.map(([z,T])=>`
          <div style="display:flex;justify-content:space-between;padding:6px 0;
            border-bottom:.5px solid #E8EFF5;font-size:12px">
            <span style="flex:1">${z}</span>
            <span style="color:#888;margin:0 8px">${T.cant} u.</span>
            <span style="font-weight:500">$${de(T.total)}</span>
          </div>`).join(""):'<div style="color:#aaa;font-size:12px;padding:8px 0">Sin entregas todavía</div>'}
      </div>`}window._abrirScannerInv=async()=>{document.getElementById("scan-overlay-inv").style.display="flex";try{o=await Ko("scan-video-inv",m=>{window._cerrarScannerInv();const y=m.match(/inv=([A-Z0-9]+)/i);y?window.location.href="/stand/"+t.id+"?inv="+y[1]:document.getElementById("scan-status-inv").textContent="QR no reconocido — usá el QR personal del invitado"},"scan-status-inv")}catch{document.getElementById("scan-status-inv").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerInv=()=>{o&&(o(),o=null),document.getElementById("scan-overlay-inv").style.display="none"},window._abrirScannerVoucher=async()=>{document.getElementById("scan-overlay-voucher").style.display="flex";try{s=await Ko("scan-video-voucher",m=>{window._cerrarScannerVoucher();const y=e.find(E=>m.includes(E.fireId));y?b(y):document.getElementById("scan-status-voucher").textContent="Voucher no reconocido"},"scan-status-voucher")}catch{document.getElementById("scan-status-voucher").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerVoucher=()=>{s&&(s(),s=null),document.getElementById("scan-overlay-voucher").style.display="none"};function b(m){const y=m.estado==="entregado";document.getElementById("voucher-modal-content").innerHTML=`
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:36px">${y?"✅":"⏳"}</div>
        <h3 style="font-size:16px;font-weight:500;color:${y?"#3B6D11":"#854F0B"};margin-top:6px">
          ${y?"PAGADO — Entregar":"PENDIENTE — No entregar"}
        </h3>
      </div>
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${m.invNombre||""}</div>
      <div style="font-size:12px;color:#888;margin-bottom:10px">${m.invCodigo||""}</div>
      ${(m.items||[]).map(E=>`
        <div style="display:flex;justify-content:space-between;font-size:13px;
          padding:5px 0;border-bottom:.5px solid #E8EFF5">
          <span>${E.desc}</span><strong>$${de(E.sub)}</strong>
        </div>`).join("")}
      <div style="display:flex;justify-content:space-between;font-size:15px;
        font-weight:500;margin-top:10px;margin-bottom:14px">
        <span>Total</span><span>$${de(m.total||0)}</span>
      </div>
      ${y?"":`
        <button class="btn btn-g" style="width:100%;padding:11px;font-size:14px"
          onclick="window._entregarPedido('${m.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>`}
      <button class="btn" style="width:100%;margin-top:8px"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`,document.getElementById("voucher-modal").style.display="flex"}}window._imprimirQRDesdePanel=async()=>{var N;const t=window.location.pathname.split("/")[2],i=window.location.origin+"/stand/"+t;window.qrcode||await new Promise((j,z)=>{const T=document.createElement("script");T.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",T.onload=j,T.onerror=z,document.head.appendChild(T)});const o=window.qrcode(0,"M");o.addData(i),o.make();const s=o.getModuleCount(),a=300,l=a/s,d=document.createElement("canvas");d.width=a,d.height=a;const h=d.getContext("2d");h.fillStyle="#fff",h.fillRect(0,0,a,a),h.fillStyle="#000";for(let j=0;j<s;j++)for(let z=0;z<s;z++)o.isDark(j,z)&&h.fillRect(z*l,j*l,l,l);const b=d.toDataURL("image/png"),m=document.getElementById("modal-qr-stand");m&&m.remove();const y=document.createElement("div");y.id="modal-qr-stand",y.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:400;display:flex;align-items:center;justify-content:center;padding:16px";const E=document.createElement("div");E.style.cssText="background:#fff;border-radius:16px;padding:24px;text-align:center;max-width:360px;width:100%";const I=document.createElement("div");I.style.cssText="font-size:11px;color:#888;letter-spacing:.08em;margin-bottom:6px",I.textContent="SUCOVI 2027 · FERIA DE VINOS";const R=document.createElement("div");R.style.cssText="font-size:20px;font-weight:700;color:#1A3A5C;margin-bottom:16px",R.textContent=((N=document.querySelector("h1"))==null?void 0:N.textContent)||"Stand";const S=document.createElement("img");S.src=b,S.style.cssText="width:260px;height:260px;border-radius:8px;display:block;margin:0 auto";const D=document.createElement("div");D.style.cssText="font-size:13px;color:#555;margin-top:12px;margin-bottom:16px",D.textContent="Escaneá para ver la carta y hacer tu pedido";const B=document.createElement("button");B.textContent="Cerrar",B.style.cssText="width:100%;padding:10px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:13px;cursor:pointer",B.onclick=()=>y.remove(),E.appendChild(I),E.appendChild(R),E.appendChild(S),E.appendChild(D),E.appendChild(B),y.appendChild(E),y.addEventListener("click",j=>{j.target===y&&y.remove()}),document.body.appendChild(y)};const Xm=n=>Number(n).toLocaleString("es-AR");function Ed(n,t){if(te(),!sessionStorage.getItem("bodega-auth-"+t.id)){n.innerHTML=`
      ${Ot({title:"🍷 "+t.nombre,sub:"Carga de carta de vinos"})}
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
      </div>`,window._loginBodega=()=>{document.getElementById("bp").value.trim()===t.pass?(sessionStorage.setItem("bodega-auth-"+t.id,"1"),Ed(n,t)):document.getElementById("bp-err").textContent="Contraseña incorrecta"};return}let i=[],o=null;n.innerHTML=`
    ${Ot({title:"🍷 "+t.nombre,sub:"Carga de carta · Stand #"+t.id,actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('bodega-auth-${t.id}');location.reload()">Salir</button>`]})}
    <div style="max-width:600px;margin:0 auto;padding:14px">
      <div class="card" style="margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:12px"
          id="form-titulo">Agregar vino</p>
        ${[["vn","Nombre del vino *","text","Ej: Gran Malbec 2022"],["vv","Varietal / Blend","text","Ej: Malbec"],["vc","Cosecha","number","2022"],["vd","Descripción corta","text","Tinto con notas de..."],["vb","Precio botella ($)","number",""],["vs","Stock inicial (botellas) — opcional","number",""]].map(([l,d,h,b])=>`
          <div style="margin-bottom:8px">
            <label style="font-size:11px;color:#666">${d}</label>
            <input id="${l}" type="${h}" placeholder="${b}" style="margin-top:3px"
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
    </div>`,xn(t.id,l=>{i=l;const d=document.getElementById("vl");if(d){if(!i.length){d.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}d.innerHTML=i.map(h=>`
      <div style="padding:10px 0;border-bottom:.5px solid #e0d5c8">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="flex:1">
            <div style="font-size:14px;font-weight:500">${h.nombre}</div>
            <div style="font-size:11px;color:#888;margin-top:2px">
              ${h.varietal||""}${h.cosecha?" · "+h.cosecha:""}
            </div>
            ${h.descripcion?`<div style="font-size:12px;color:#666;margin-top:2px">${h.descripcion}</div>`:""}
            <div style="margin-top:4px;display:flex;gap:8px;flex-wrap:wrap">
              ${(h.unidades||[]).map(b=>`<span style="font-size:12px;background:#f5f0eb;padding:2px 8px;
                  border-radius:6px;color:#6B1C1C">
                  ${b.u}: $${Xm(b.p)}
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
      </div>`).join("")}});const s=["vn","vv","vc","vd","vb","vs","vuc","vpc"],a=()=>{s.forEach(l=>{const d=document.getElementById(l);d&&(d.value="")})};window._calcPrecioCaja=()=>{const l=parseFloat(document.getElementById("vb").value)||0,d=parseInt(document.getElementById("vuc").value)||0,h=document.getElementById("vpc");h&&(h.value=l&&d?l*d:"")},window._guardarV=async()=>{var R;const l=document.getElementById("vn").value.trim(),d=document.getElementById("vm");if(!l){d.innerHTML='<span style="color:#A32D2D">El nombre es requerido.</span>';return}const h=parseFloat(document.getElementById("vb").value),b=parseInt(document.getElementById("vuc").value),m=parseFloat(document.getElementById("vpc").value),y=[];if(h&&y.push({u:"Botella",p:h}),b&&m&&y.push({u:"Caja x"+b,p:m,unidadesPorCaja:b}),!y.length){d.innerHTML='<span style="color:#A32D2D">Ingresá al menos precio de botella.</span>';return}if(b&&!m){d.innerHTML='<span style="color:#A32D2D">Ingresá las unidades por caja para calcular el precio.</span>';return}const E=parseInt((R=document.getElementById("vs"))==null?void 0:R.value)||0,I={nombre:l,varietal:document.getElementById("vv").value.trim(),cosecha:document.getElementById("vc").value.trim(),descripcion:document.getElementById("vd").value.trim(),unidades:y};d.innerHTML='<span style="color:#888">Guardando...</span>';try{if(o){if(await dd(t.id,o,I),E>0){const S=await Te(()=>Promise.resolve().then(()=>un),void 0).then(N=>N.getStockDoc(t.id,o)),D=S?S.total:0,B=E-D;B!==0&&await Zi(t.id,o,B,I.nombre)}o=null}else{const S=await cd(t.id,I);E>0&&S&&await Zi(t.id,S,E,I.nombre)}a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none",d.innerHTML='<span style="color:#3B6D11">✓ Guardado correctamente</span>',setTimeout(()=>{const S=document.getElementById("vm");S&&(S.innerHTML="")},3e3)}catch(S){d.innerHTML=`<span style="color:#A32D2D">Error: ${S.message}</span>`}},window._editarV=async l=>{const d=i.find(m=>m.fireId===l);if(!d)return;try{const{getStockDoc:m}=await Te(async()=>{const{getStockDoc:I}=await Promise.resolve().then(()=>un);return{getStockDoc:I}},void 0),y=await m(t.id,l),E=document.getElementById("vs");E&&y&&(E.value=y.total||"")}catch{}o=l,document.getElementById("form-titulo").textContent=`Editando: ${d.nombre}`,document.getElementById("vn").value=d.nombre||"",document.getElementById("vv").value=d.varietal||"",document.getElementById("vc").value=d.cosecha||"",document.getElementById("vd").value=d.descripcion||"";const h=(d.unidades||[]).find(m=>m.u==="Botella"),b=(d.unidades||[]).find(m=>m.unidadesPorCaja);document.getElementById("vb").value=(h==null?void 0:h.p)||"",document.getElementById("vuc")&&(document.getElementById("vuc").value=(b==null?void 0:b.unidadesPorCaja)||""),document.getElementById("vpc")&&(document.getElementById("vpc").value=(b==null?void 0:b.p)||""),document.getElementById("btn-cancelar-edit").style.display="block",window.scrollTo({top:0,behavior:"smooth"})},window._cancelarEdit=()=>{o=null,a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none"},window._eliminarV=async l=>{const d=i.find(h=>h.fireId===l);confirm(`¿Eliminar "${d==null?void 0:d.nombre}"?`)&&await ud(t.id,l)}}async function Jm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Zm(n){te();let t=[],e=[],i=null,o=null,s=!1;n.innerHTML=Ot({title:"🚪 Control de puerta",sub:"Solo ingresa quien tiene bono pagado",backHref:"/admin"})+`
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
    </div>`,vo(h=>{t=h,a()}),window._vPuerta=async()=>{var E;const h=document.getElementById("scan-cod").value.trim().toUpperCase(),b=document.getElementById("scan-res");if(!h)return;const m=t.find(I=>I.codigo===h);if(!m){b.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">❌ Código no encontrado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:4px">${h} no existe en el sistema.</p>
      </div>`;return}if(m.estado==="ingresado"){b.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">⛔ QR ya utilizado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:6px">
          <strong>${m.nombre} ${m.apellido}</strong> ya ingresó al evento.<br>
          Este QR no puede usarse nuevamente.
        </p>
      </div>`;return}if(m.estado==="pendiente"){b.innerHTML=`<div class="result-warn">
        <p style="font-size:16px;font-weight:500;color:#854F0B">⏳ Pago pendiente</p>
        <p style="font-size:12px;color:#633806;margin-top:4px">
          <strong>${m.nombre} ${m.apellido}</strong> no abonó el bono ($35.000).
        </p>
        <button class="btn btn-a" style="margin-top:10px;width:100%;font-size:12px"
          onclick="window._cobrarPuerta('${m.fireId}','${m.codigo}')">
          💰 Cobrar $35.000 y habilitar ingreso
        </button>
      </div>`;return}i=m;const y=m.nombre[0]+(((E=m.apellido)==null?void 0:E[0])||"");document.getElementById("mc-avatar").textContent=y,document.getElementById("mc-nombre").textContent=m.nombre+" "+m.apellido,document.getElementById("mc-codigo").textContent=h+(m.familia?" · Familia "+m.familia:""),document.getElementById("mc-estado").innerHTML='<span class="badge b-pago">✅ Bono confirmado</span>',document.getElementById("modal-confirm").style.display="flex"},window._confirmarIngreso=async()=>{if(!i)return;document.getElementById("modal-confirm").style.display="none";const h=i;i=null,await be(h.fireId,{estado:"ingresado"});const b=new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});e.unshift({nombre:h.nombre+" "+h.apellido,codigo:h.codigo,hora:b}),document.getElementById("scan-res").innerHTML=`<div class="result-ok">
      <p style="font-size:20px;font-weight:500;color:#1A3A5C">✅ ¡Bienvenido/a!</p>
      <p style="font-size:16px;margin-top:6px">${h.nombre} ${h.apellido}</p>
      <p style="font-size:13px;color:#3B6D11;margin-top:4px">${h.codigo} · ${b}</p>
    </div>`,document.getElementById("scan-cod").value="",a()},window._cobrarPuerta=async(h,b)=>{await be(h,{estado:"pagado"}),document.getElementById("scan-cod").value=b,window._vPuerta()};function a(){const h=document.getElementById("historial-puerta");if(!h)return;const b=t.filter(m=>m.estado==="ingresado");if(!b.length&&!e.length){h.innerHTML='<p style="font-size:12px;color:#aaa;text-align:center">ÚLTIMOS INGRESOS — Sin ingresos todavía</p>';return}h.innerHTML=`
      <p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">
        INGRESOS AL EVENTO (${b.length})
      </p>
      ${b.slice(0,50).map(m=>{var y;return`
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;
          border-bottom:.5px solid #E8EFF5">
          <div class="avatar" style="width:32px;height:32px;font-size:11px;flex-shrink:0">
            ${m.nombre[0]}${((y=m.apellido)==null?void 0:y[0])||""}
          </div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:500">${m.nombre} ${m.apellido}</div>
            <div style="font-size:11px;color:#888">${m.codigo}</div>
          </div>
          <span style="font-size:11px;color:#3A7D44;font-weight:500">✅ Ingresó</span>
        </div>`}).join("")}
    `}window._abrirScannerPuerta=async()=>{const h=document.getElementById("scan-overlay-puerta");h.style.display="flex";const b=document.getElementById("scan-status-puerta");try{await Jm(),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const m=document.getElementById("scan-video-puerta");m.srcObject=o,s=!0,b&&(b.textContent="Buscando QR...");const y=document.createElement("canvas"),E=y.getContext("2d",{willReadFrequently:!0}),I=()=>{if(s){if(m.readyState===m.HAVE_ENOUGH_DATA&&m.videoWidth>0){y.width=m.videoWidth,y.height=m.videoHeight,E.drawImage(m,0,0);const R=E.getImageData(0,0,y.width,y.height),S=window.jsQR(R.data,R.width,R.height,{inversionAttempts:"dontInvert"});if(S&&S.data){const D=S.data;window._cerrarScannerPuerta();const B=D.match(/INV-\d+/),N=D.match(/inv=([A-Z0-9]+)/i);B?(document.getElementById("scan-cod").value=B[0],window._vPuerta()):N&&ti(N[1]).then(j=>{j?(document.getElementById("scan-cod").value=j.codigo,window._vPuerta()):b&&(b.textContent="Invitado no encontrado")});return}}s&&requestAnimationFrame(I)}};m.addEventListener("loadeddata",()=>requestAnimationFrame(I))}catch{b&&(b.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerPuerta=()=>{s=!1,o&&(o.getTracks().forEach(b=>b.stop()),o=null);const h=document.getElementById("scan-overlay-puerta");h&&(h.style.display="none")};const l=document.createElement("button");l.innerHTML="?",l.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",l.onclick=()=>document.getElementById("modal-ayuda-puerta").style.display="flex",document.body.appendChild(l);const d=document.createElement("div");d.id="modal-ayuda-puerta",d.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",d.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Control de puerta</div><button onclick="document.getElementById(&quot;modal-ayuda-puerta&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📷 Escanear QR</div><div>Escaneá el QR del invitado con la cámara. El sistema verifica automáticamente si el bono está confirmado y registra el ingreso.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">⌨️ Ingresar código manualmente</div><div>Si la cámara no funciona, escribí el código del invitado (ej: INV-0001) y tocá <strong>Verificar</strong>.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">✅ Estados posibles</div><div><strong>Bono confirmado</strong> — puede ingresar.<br><strong>Pendiente de pago</strong> — puede ingresar y pagar en puerta.<br><strong>Ya ingresó</strong> — QR ya usado, no permitir reingreso.<br><strong>Invalidado</strong> — no permitir ingreso.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ Cada QR es de un solo uso. Si alguien ya ingresó el sistema lo indica claramente.</div></div></div>',d.addEventListener("click",h=>{h.target===d&&(d.style.display="none")}),document.body.appendChild(d)}const Nn=n=>Number(n).toLocaleString("es-AR");function Ym(n){te();let t=[],e=null,i=[],o="envios";n.innerHTML=Ot({title:"🚚 Logística",sub:"Envíos y pedidos especiales",backHref:"/admin"})+`
    <div class="nav">
      <button class="on" onclick="window._logVista('envios',this)">🚚 Envíos</button>
      <button onclick="window._logVista('especiales',this)">📦 Pedidos especiales</button>
    </div>
    <div class="wrap" id="log-body"></div>`,bo(l=>{t=l,!e&&o==="envios"&&s()}),wd(l=>{i=l,!e&&o==="especiales"&&a()}),window._logVista=(l,d)=>{o=l,e=null,document.querySelectorAll(".nav button").forEach(h=>h.classList.remove("on")),d.classList.add("on"),l==="envios"?s():a()};function s(){const l=document.getElementById("log-body");if(!l)return;e=null;const d=t.filter(I=>I.retiro==="envio");if(!d.length){l.innerHTML='<div class="empty">🚚<br><br>Sin pedidos de envío</div>';return}const h=d.filter(I=>I.estado==="pagado"||I.estado==="listo"),b=d.filter(I=>I.estado==="retirado"),m=d.filter(I=>I.estado==="entregado"),y=d.filter(I=>I.estado==="reembolsado"||I.estado==="cancelado"),E=(I,R,S)=>{var D;return`
      <div class="card" style="margin-bottom:10px;border-left:4px solid ${R};cursor:pointer"
        onclick="window._verDetalleLog('${I.fireId}')">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
          <div>
            <div style="font-size:14px;font-weight:500;color:#1A3A5C">${I.invNombre||""}</div>
            <div style="font-size:11px;color:#888">${I.standNombre} · #${(D=I.fireId)==null?void 0:D.slice(-4).toUpperCase()}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:14px;font-weight:500">$${Nn(I.total||0)}</div>
            <div style="font-size:10px;color:#888">Ver detalle ›</div>
          </div>
        </div>
        ${I.envio?`<div style="font-size:12px;color:#5A1E99;background:#EDE6FB;
          border-radius:6px;padding:6px 8px">
          📍 ${I.envio.calle||""} ${I.envio.numero||""}, ${I.envio.localidad||I.envio.dir||""}, ${I.envio.provincia||""}
        </div>`:""}
      </div>`};l.innerHTML="",h.length&&(l.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:8px;letter-spacing:.05em">
        POR RETIRAR DEL STAND (${h.length})</p>`,l.innerHTML+=h.map(I=>E(I,"#D97706")).join("")),b.length&&(l.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#5BA4CF;margin:14px 0 8px;letter-spacing:.05em">
        RETIRADOS — EN CAMINO (${b.length})</p>`,l.innerHTML+=b.map(I=>E(I,"#5BA4CF")).join("")),m.length&&(l.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#3A7D44;margin:14px 0 8px;letter-spacing:.05em">
        ENTREGADOS (${m.length})</p>`,l.innerHTML+=m.map(I=>E(I,"#3A7D44")).join("")),y.length&&(l.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#C0392B;margin:14px 0 8px;letter-spacing:.05em">
        REEMBOLSADOS (${y.length})</p>`,l.innerHTML+=y.map(I=>E(I,"#C0392B")).join(""))}window._verDetalleLog=l=>{e=l;const d=t.find(E=>E.fireId===l);if(!d)return;const h=document.getElementById("log-body");if(!h)return;const b=d.envio||{},m={pagado:{label:"💳 Pagado — Pendiente de retiro",color:"#D97706",badge:"b-pend"},listo:{label:"✅ Listo para retirar",color:"#D97706",badge:"b-list"},retirado:{label:"📦 Retirado del stand",color:"#5BA4CF",badge:"b-pago"},entregado:{label:"🏠 Entregado a domicilio",color:"#3A7D44",badge:"b-entr"},reembolsado:{label:"↩️ Reembolsado",color:"#C0392B",badge:"b-canc"},cancelado:{label:"❌ Cancelado",color:"#C0392B",badge:"b-canc"}},y=m[d.estado]||m.pagado;h.innerHTML=`
      <button class="btn" onclick="window._volverLog()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>

      <div class="card" style="margin-bottom:12px;border-left:4px solid ${y.color}">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px">
          <div>
            <div style="font-size:16px;font-weight:500;color:#1A3A5C">${d.invNombre||""}</div>
            <div style="font-size:12px;color:#888">${d.invCodigo||""} · Stand: ${d.standNombre}</div>
          </div>
          <span class="badge ${y.badge}" style="font-size:11px">${y.label}</span>
        </div>

        ${(d.items||[]).map(E=>`
          <div style="display:flex;justify-content:space-between;font-size:13px;
            padding:5px 0;border-bottom:.5px solid #E8EFF5;color:#555">
            <span>${E.desc}</span><strong>$${Nn(E.sub)}</strong>
          </div>`).join("")}

        <div style="display:flex;justify-content:space-between;font-size:15px;
          font-weight:500;margin-top:10px;color:#1A3A5C">
          <span>Total</span><span>$${Nn(d.total||0)}</span>
        </div>
      </div>

      <!-- Datos de envío -->
      <div class="card" style="margin-bottom:12px;background:#F5F0FB;border:1px solid #D4BEFC">
        <p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">🚚 Datos de envío</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:13px">
          <div><span style="color:#888;font-size:11px">Destinatario</span><br><strong>${b.nombre||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Teléfono</span><br><strong>${b.tel||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Calle y número</span><br><strong>${b.calle||""} ${b.numero||""}</strong></div>
          <div><span style="color:#888;font-size:11px">Piso / Dpto</span><br><strong>${b.piso||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Localidad</span><br><strong>${b.localidad||b.dir||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Provincia</span><br><strong>${b.provincia||"—"}</strong></div>
        </div>
      </div>

      <!-- Botones de acción según estado -->
      ${d.estado==="pagado"||d.estado==="listo"?`
        <button class="btn btn-b" style="width:100%;padding:12px;font-size:14px;margin-bottom:8px"
          onclick="window._retirarStand('${d.fireId}')">
          📦 Confirmar retiro del stand
        </button>`:""}
      ${d.estado==="retirado"?`
        <button class="btn btn-g" style="width:100%;padding:12px;font-size:14px;margin-bottom:8px"
          onclick="window._entregarDom('${d.fireId}')">
          🏠 Confirmar entrega a domicilio
        </button>`:""}
      <button class="btn" style="width:100%;padding:10px;font-size:13px"
        onclick="window._volverLog()">Volver a la lista</button>`},window._retirarStand=async l=>{await sd(l),window._verDetalleLog(l)},window._entregarDom=async l=>{await ad(l),window._verDetalleLog(l)},window._volverLog=()=>{e=null,o==="envios"?s():a()};function a(){const l=document.getElementById("log-body");if(!l)return;if(e=null,!i.length){l.innerHTML='<div class="empty">📦<br><br>Sin pedidos especiales todavía</div>';return}const d=i.filter(m=>m.estado==="pagado"),h=i.filter(m=>m.estado==="entregado"),b=m=>'<div class="card" style="margin-bottom:10px;border-left:4px solid #5BA4CF"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px"><div><div style="font-size:14px;font-weight:500;color:#1A3A5C">'+(m.invNombre||"")+'</div><div style="font-size:11px;color:#888">'+(m.invCodigo||"")+" · "+(m.peNum||"")+"</div>"+(m.familia?'<div style="font-size:11px;color:#5BA4CF;margin-top:2px">Familia '+m.familia+"</div>":"")+'</div><div style="text-align:right"><div style="font-size:14px;font-weight:500">$'+Nn(m.total||0)+'</div><span class="badge '+(m.estado==="entregado"?"b-entr":"b-pago")+'" style="font-size:10px">'+(m.estado==="entregado"?"Entregado":"Pendiente")+'</span></div></div><div style="font-size:12px;color:#555;margin-bottom:8px">'+(m.items||[]).map(y=>y.desc+" — $"+Nn(y.sub)).join("<br>")+"</div>"+(m.estado!=="entregado"?`<button class="btn btn-g" style="width:100%;padding:8px" onclick="window._entregarPE('`+m.fireId+`')">✅ Confirmar entrega a familia</button>`:"")+"</div>";l.innerHTML="",d.length&&(l.innerHTML+='<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:8px;letter-spacing:.05em">PENDIENTES DE ENTREGA ('+d.length+")</p>",l.innerHTML+=d.map(b).join("")),h.length&&(l.innerHTML+='<p style="font-size:11px;font-weight:500;color:#3A7D44;margin:14px 0 8px;letter-spacing:.05em">ENTREGADOS ('+h.length+")</p>",l.innerHTML+=h.map(b).join(""))}window._entregarPE=async l=>{if(!confirm("¿Confirmás la entrega de este pedido especial?"))return;const{doc:d,updateDoc:h}=await Te(async()=>{const{doc:m,updateDoc:y}=await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");return{doc:m,updateDoc:y}},[]),{db:b}=await Te(async()=>{const{db:m}=await Promise.resolve().then(()=>un);return{db:m}},void 0);await h(d(b,"pedidosEspeciales",l),{estado:"entregado"}),a()}}async function _d(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function tg(n,t,e){await _d();const i=document.getElementById(n);if(i)try{const o=window.qrcode(0,"M");o.addData(String(t)),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let h=0;h<s;h++)o.isDark(d,h)&&l.fillRect(h*a,d*a,a,a)}catch(o){console.error("QR error:",o)}}async function eg(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function ng(n,t){te(),n.innerHTML=Fi(null)+`<div style="text-align:center;padding:40px 16px">
    <div style="font-size:13px;color:#aaa">Cargando...</div></div>`;const e=await ti(t);if(!e){bl(n,"Token inválido","El link no es válido o expiró.");return}if(e.estado==="invalidado"){bl(n,"Acceso invalidado","Este bono fue invalidado. Consultá con la organización.");return}if(e.estado==="pendiente"){n.innerHTML=Fi(e)+`
      <div style="max-width:400px;margin:40px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">Pago pendiente</h2>
        <p style="font-size:14px;color:#666;line-height:1.6">
          Tu bono aún no fue confirmado. Una vez que abones los $35.000 recibirás tu QR de acceso.
        </p>
        <p style="font-size:12px;color:#aaa;margin-top:16px">Consultas: José Pannunzio +54 9 11 5400-1313</p>
      </div>`;return}let i=[],o=null,s=!1;const a=zt.map(m=>`
    <a href="/stand/${m.id}?inv=${t}"
      style="display:flex;align-items:center;gap:8px;background:#fff;
        border:0.5px solid #D6E4F0;border-radius:8px;padding:8px 10px;
        text-decoration:none;color:inherit">
      <div style="width:28px;height:28px;border-radius:50%;background:#EBF4FA;
        color:#1A3A5C;font-size:11px;font-weight:500;display:flex;
        align-items:center;justify-content:center;flex-shrink:0">${m.id}</div>
      <div style="min-width:0;flex:1">
        <div style="font-size:12px;font-weight:500;color:#1A3A5C;
          white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m.nombre}</div>
        <div style="font-size:10px;color:#888">${m.region||""}</div>
      </div>
      <span style="color:#5BA4CF;font-size:14px">›</span>
    </a>`).join("");n.innerHTML=Fi(e)+`
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
    </div>`,setTimeout(()=>tg("qr-acc",e.codigo,160),50),id(e.fireId,m=>{i=m;const y=document.getElementById("btn-mis-pedidos");y&&(y.style.display=m.length?"flex":"none",m.length&&(y.textContent="📋 Mis pedidos ("+m.length+")"));const E=document.getElementById("mis-pedidos-sec");E&&E.style.display!=="none"&&l()}),window._togglePedidos=()=>{const m=document.getElementById("mis-pedidos-sec");m&&(m.style.display=m.style.display==="none"?"block":"none",m.style.display==="block"&&l())};async function l(){const m=document.getElementById("mis-pedidos-sec");if(!m||m.style.display==="none")return;if(!i.length){m.innerHTML='<div class="empty">Sin pedidos pagados todavía</div>';return}await _d();const y=E=>Number(E).toLocaleString("es-AR");m.innerHTML=i.map(E=>{const I=E.retiro==="envio",R=E.estado==="entregado",S=E.estado==="reembolsado"||E.estado==="cancelado",D=R?"#f5f5f5":S?"#FEE2E2":I?"#EBF4FA":"#EAF3DE",B=R?"#ddd":S?"#FCA5A5":I?"#5BA4CF":"#3B6D11",N=R?"✅ Entregado":S?"↩️ Reembolsado":I?"🚚 Envío a domicilio":"🟢 Listo para retirar",j=(E.items||[]).map(T=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid rgba(0,0,0,.08);color:#555"><span>'+T.desc+"</span><strong>$"+y(T.sub)+"</strong></div>").join(""),z="vq-"+E.fireId;return'<div style="background:'+D+";border:.5px solid "+B+';border-radius:10px;padding:14px;margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:14px;font-weight:500;color:#1A3A5C">'+E.standNombre+'</div><div style="font-size:11px;color:#888">Stand #'+E.standId+(E.voucherNum?" · VOC-"+String(E.voucherNum).padStart(3,"0"):"")+'</div></div><span style="font-size:11px;font-weight:500">'+N+"</span></div>"+j+'<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$'+y(E.total||0)+"</span></div>"+(!R&&!S&&!I?'<div style="margin-top:12px;text-align:center"><canvas id="'+z+'" style="border-radius:8px;display:block;margin:0 auto"></canvas><div style="font-size:11px;color:#888;margin-top:4px">Mostrá este QR en el stand para retirar</div></div>':"")+(I&&!R&&!S?'<div style="font-size:12px;color:#185FA5;margin-top:8px;text-align:center">Tu pedido será enviado a domicilio. Logística te lo hará llegar.</div>':"")+"</div>"}).join(""),i.forEach(E=>{if(E.retiro==="envio"||E.estado==="entregado"||E.estado==="reembolsado"||E.estado==="cancelado")return;const I=document.getElementById("vq-"+E.fireId);if(!(!I||!window.qrcode))try{const R=window.qrcode(0,"M");R.addData(E.fireId),R.make();const S=R.getModuleCount(),D=220,B=D/S;I.width=D,I.height=D;const N=I.getContext("2d");N.fillStyle="#fff",N.fillRect(0,0,D,D),N.fillStyle="#000";for(let j=0;j<S;j++)for(let z=0;z<S;z++)R.isDark(j,z)&&N.fillRect(z*B,j*B,B,B)}catch{}})}window._abrirScannerAcceso=async()=>{const m=document.getElementById("scan-overlay-acc");m&&(m.style.display="flex");const y=document.getElementById("scan-status-acc");try{await eg(),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const E=document.getElementById("scan-video-acc");E.srcObject=o,s=!0,y&&(y.textContent="Buscando QR del stand...");const I=document.createElement("canvas"),R=I.getContext("2d",{willReadFrequently:!0}),S=()=>{if(s){if(E.readyState===E.HAVE_ENOUGH_DATA&&E.videoWidth>0){I.width=E.videoWidth,I.height=E.videoHeight,R.drawImage(E,0,0);const D=R.getImageData(0,0,I.width,I.height),B=window.jsQR(D.data,D.width,D.height,{inversionAttempts:"dontInvert"});if(B&&B.data){const N=B.data;window._cerrarScannerAcceso();const j=N.match(/\/stand\/(\d+)/);j&&(window.location.href="/stand/"+j[1]+"?inv="+t);return}}s&&requestAnimationFrame(S)}};E.addEventListener("loadeddata",()=>requestAnimationFrame(S))}catch{y&&(y.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerAcceso=()=>{s=!1,o&&(o.getTracks().forEach(y=>y.stop()),o=null);const m=document.getElementById("scan-overlay-acc");m&&(m.style.display="none")};let d=[],h="";window._abrirRecomendador=()=>{d=[],h="",document.getElementById("modal-ia").style.display="flex",document.getElementById("ia-respuesta").style.display="none",document.getElementById("ia-input").value=""},window._pedirRecomendacion=async()=>{var R,S;const m=document.getElementById("ia-input").value.trim();if(!m)return;const y=document.getElementById("ia-input"),E=document.querySelector('#modal-ia button[onclick*="pedirRecomendacion"]'),I=document.getElementById("ia-respuesta");if(y.disabled=!0,E&&(E.disabled=!0,E.style.opacity="0.6"),d.push({role:"user",content:m}),y.value="",I.style.display="block",I.innerHTML=b(d)+'<div id="ia-typing" style="color:#9333EA;margin-top:8px">✨ Pensando...</div>',I.scrollTop=I.scrollHeight,!h){let D=[],B=0;await new Promise(j=>{zt.forEach(z=>{xn(z.id,T=>{T.forEach(f=>D.push({stand:z.id,bodega:z.nombre,region:z.region||"",vino:f.nombre,varietal:f.varietal||"",descripcion:f.descripcion||"",precios:(f.unidades||[]).map(p=>p.u+": $"+Number(p.p).toLocaleString("es-AR")).join(", ")})),B++,B===zt.length&&j()})})});const N=D.length>0?D.map(j=>"Stand #"+j.stand+" - "+j.bodega+" ("+j.region+"): "+j.vino+(j.varietal?" - "+j.varietal:"")+(j.descripcion?" - "+j.descripcion:"")+" | "+j.precios).join(`
`):"No hay vinos cargados aún.";h="Sos un sommelier experto en vinos argentinos en la Feria de Vinos SUCOVI 2027 en Olivos. El invitado se llama "+e.nombre+`. Esta es la carta completa de vinos disponibles esta noche:

`+N+`

Recomendá vinos específicos de la carta. Para cada uno mencioná el Stand #, la bodega, el vino y por qué lo recomendás. Mantené el hilo de la conversación. Sé breve, cálido y entusiasta. Respondé siempre en español rioplatense.`}try{const N=((S=(R=(await(await fetch("/api/recommend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:h,messages:d})})).json()).content)==null?void 0:R[0])==null?void 0:S.text)||"No pude generar una recomendación.";d.push({role:"assistant",content:N}),I.innerHTML=b(d),I.scrollTop=I.scrollHeight}catch{d.pop(),I.innerHTML=b(d)+'<div style="color:red;margin-top:8px">Error al conectar. Intentá de nuevo.</div>'}finally{y.disabled=!1,E&&(E.disabled=!1,E.style.opacity="1"),y.focus()}};function b(m){return m.map(y=>{const E=y.role==="user",I=y.content.replace(/\n/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");return E?'<div style="text-align:right;margin-bottom:10px"><span style="background:#9333EA;color:#fff;padding:8px 12px;border-radius:16px 16px 4px 16px;display:inline-block;max-width:85%">'+I+"</span></div>":'<div style="text-align:left;margin-bottom:10px"><span style="background:#f3e8ff;color:#1a1a1a;padding:8px 12px;border-radius:16px 16px 16px 4px;display:inline-block;max-width:85%">'+I+"</span></div>"}).join("")}}function bl(n,t,e){n.innerHTML=Fi(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
      <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${t}</h2>
      <p style="font-size:14px;color:#666">${e}</p>
      <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>
    </div>`}async function ig(n,t,e){window.qrcode||await new Promise((d,h)=>{const b=document.createElement("script");b.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",b.onload=d,b.onerror=h,document.head.appendChild(b)});const i=document.getElementById(n);if(!i)return;const o=window.qrcode(0,"M");o.addData(t),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let h=0;h<s;h++)o.isDark(d,h)&&l.fillRect(h*a,d*a,a,a)}window._imprimirQRStand=async(n,t,e,i)=>{window.qrcode||await new Promise((y,E)=>{const I=document.createElement("script");I.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",I.onload=y,I.onerror=E,document.head.appendChild(I)});const o=window.qrcode(0,"M");o.addData(i),o.make();const s=o.getModuleCount(),a=400,l=a/s,d=document.createElement("canvas");d.width=a,d.height=a;const h=d.getContext("2d");h.fillStyle="#fff",h.fillRect(0,0,a,a),h.fillStyle="#000";for(let y=0;y<s;y++)for(let E=0;E<s;E++)o.isDark(y,E)&&h.fillRect(E*l,y*l,l,l);const b=d.toDataURL("image/png"),m=window.open("","_blank");m.document.write(`<!DOCTYPE html><html><head>
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
      <img src="${b}" class="qr-img" alt="QR Stand">
      <div class="instruccion">
        Escaneá este código con tu celular<br>para ver la carta y hacer tu pedido
      </div>
    </div>
    <script>setTimeout(() => { window.print() }, 500)<\/script>
  </body></html>`),m.document.close()};function xl(n){te();const t=window.location.origin;n.innerHTML=Ot({title:"🍷 SUCOVI 2027",sub:"Panel de organización — Stands"})+`
    <div class="wrap">
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>Vista cliente:</strong> para cargar pedidos de invitados.<br>
        <strong>Panel:</strong> para ver pedidos y marcar entregas con QR.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${zt.filter(e=>!e.oculto).map(e=>`
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
    </div>`,zt.forEach(e=>setTimeout(()=>ig("org-qr-"+e.id,t+"/stand/"+e.id,110),50))}const Xo=n=>Number(n).toLocaleString("es-AR");function og(n,t){if(te(),!t||t.estado==="invalidado"){n.innerHTML=`
      <div class="hdr"><div><h1>🛒 Carrito</h1></div></div>
      <div class="gold"></div>
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <p style="font-size:14px;color:#666">Necesitás tu QR de acreditación para ver el carrito.</p>
      </div>`;return}let e=[];n.innerHTML=`
    ${Ot({title:"🛒 Mi carrito",sub:t.nombre+" "+t.apellido+" · "+t.codigo,backHref:"/acceso?inv="+t.token,backLabel:"← Mi QR",backStyle:"background:#A32D2D;color:#fff;border-color:#A32D2D"})}
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

      <div id="carrito-msg" style="font-size:12px;text-align:center;min-height:16px;margin-bottom:8px"></div>`}window._quitarCarrito=async(o,s)=>{const a=e.find(l=>l.standDocId===o);a&&await Ji(t.fireId,Number(a.standId),s)},window._cambiarRetiro=async(o,s,a)=>{await ps(t.fireId,Number(s),a)}}async function rg(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function wl(n,t,e,i,o,s){n.beginPath(),n.moveTo(t+s,e),n.lineTo(t+i-s,e),n.quadraticCurveTo(t+i,e,t+i,e+s),n.lineTo(t+i,e+o-s),n.quadraticCurveTo(t+i,e+o,t+i-s,e+o),n.lineTo(t+s,e+o),n.quadraticCurveTo(t,e+o,t,e+o-s),n.lineTo(t,e+s),n.quadraticCurveTo(t,e,t+s,e),n.closePath()}async function sg(n){await rg();const e=window.location.origin+"/acceso?inv="+n.token,i=document.createElement("canvas"),o=600,s=800;i.width=o,i.height=s;const a=i.getContext("2d"),l=a.createLinearGradient(0,0,0,s);l.addColorStop(0,"#1A3A5C"),l.addColorStop(.55,"#2C5F8A"),l.addColorStop(1,"#3A7D44"),a.fillStyle=l,a.fillRect(0,0,o,s),a.fillStyle="#C9A96E",a.fillRect(0,s-4,o,4),a.fillStyle="rgba(255,255,255,0.7)",a.font="500 18px system-ui, -apple-system, sans-serif",a.textAlign="center",a.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",o/2,54),a.fillStyle="#ffffff",a.font="500 38px system-ui, -apple-system, sans-serif",a.fillText(n.nombre+" "+n.apellido,o/2,110),a.fillStyle="rgba(255,255,255,0.75)",a.font="400 22px system-ui, -apple-system, sans-serif",a.fillText(n.codigo,o/2,146),a.fillStyle="#3A7D44";const d=200,h=34,b=o/2-d/2,m=164;wl(a,b,m,d,h,17),a.fill(),a.fillStyle="#ffffff",a.font="500 15px system-ui, -apple-system, sans-serif",a.fillText("Bono confirmado",o/2,m+23);const y=320,E=340,I=o/2-y/2,R=220;a.fillStyle="#ffffff",wl(a,I,R,y,E,16),a.fill();const S=qrcode(0,"M");S.addData(e),S.make();const D=S.getModuleCount(),B=240,N=I+(y-B)/2,j=R+24,z=B/D;a.fillStyle="#000000";for(let f=0;f<D;f++)for(let p=0;p<D;p++)S.isDark(f,p)&&a.fillRect(N+p*z,j+f*z,z,z);a.fillStyle="#1A3A5C",a.font="500 26px system-ui, -apple-system, sans-serif",a.fillText(n.codigo,o/2,R+E-44),a.fillStyle="#888",a.font="400 14px system-ui, -apple-system, sans-serif",a.fillText("Mostrá este QR en la entrada",o/2,R+E-20),a.fillStyle="rgba(255,255,255,0.85)",a.font="400 18px system-ui, -apple-system, sans-serif",a.fillText("Sáb 20 jun 2026  ·  19:30 hs",o/2,R+E+50),a.fillText("Roma 656, Olivos",o/2,R+E+80),a.fillStyle="rgba(255,255,255,0.5)",a.font="400 13px system-ui, -apple-system, sans-serif",a.fillText("Personal e intransferible · Un solo uso en la entrada",o/2,s-24);const T=document.createElement("a");T.download="QR_"+n.nombre+"_"+n.apellido+".png",T.href=i.toDataURL(),T.click()}async function ag(n,t,e){if(te(),!await bd(t,e)){n.innerHTML=Ot({title:"Acceso denegado",sub:"SUCOVI 2027"})+'<div style="max-width:480px;margin:40px auto;padding:16px;text-align:center"><div style="font-size:40px;margin-bottom:12px">🔒</div><div style="font-size:16px;color:#A32D2D">Link invalido o expirado</div></div>';return}const o=await yd(t),s=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),a={pagado:"b-pago",ingresado:"b-ingr",pendiente:"b-pend",invalidado:"b-canc"},l={pagado:"Bono confirmado",ingresado:"Ingreso",pendiente:"Pendiente",invalidado:"Invalidado"},d=window.location.origin;n.innerHTML=Ot({title:"Familia "+s,sub:"SUCOVI 2027 · "+o.length+" invitado"+(o.length!==1?"s":"")})+'<div style="max-width:600px;margin:0 auto;padding:16px">'+(o.length===0?'<div class="empty">No se encontraron invitados.</div>':o.map((y,E)=>{const I=((y.nombre||"")[0]||"")+((y.apellido||"")[0]||""),R=d+"/acceso?inv="+y.token,S=y.estado==="ingresado"?"Hola "+y.nombre+`! 🍷

Ya estás dentro de SUCOVI 2027 — ¡disfrutá la noche!

Si necesitás tu QR para los stands:
👉 `+R+`

_Personal e intransferible._`:y.estado==="pagado"?"Hola "+y.nombre+`! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 `+R+`

_Personal e intransferible. Un solo uso en la entrada._`:"Hola "+y.nombre+`! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`,D=encodeURIComponent(S),B=(y.tel||"").replace(/\D/g,""),N=B?"https://wa.me/"+(B.startsWith("54")?B:"54"+B)+"?text="+D:null;return'<div class="card" style="margin-bottom:10px"><div style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;border-radius:50%;background:#1A3A5C;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;flex-shrink:0">'+I+'</div><div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:600;color:#1A3A5C">'+y.nombre+" "+y.apellido+'</div><div style="font-size:12px;color:#888">'+(y.codigo||"")+'</div><span class="badge '+(a[y.estado]||"")+'" style="margin-top:4px;display:inline-block">'+(l[y.estado]||y.estado)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInvFam('+E+')">✏️</button>'+(N?'<a href="'+N+'" target="_blank" class="btn" style="padding:4px 8px;font-size:11px">📱 WA</a>':"")+'<button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._dlQR('+E+')">📥 QR</button><a href="'+R+'" class="btn btn-v" style="padding:4px 8px;font-size:11px">Ver QR</a></div></div></div>'}).join(""))+"</div>",window._invitadosFamilia=o;const h=document.createElement("button");h.innerHTML="?",h.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",h.onclick=()=>document.getElementById("modal-ayuda-fam").style.display="flex",document.body.appendChild(h);const b=document.createElement("div");b.id="modal-ayuda-fam",b.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",b.innerHTML=`<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">¿Cómo usar esta página?</div><button onclick="document.getElementById('modal-ayuda-fam').style.display='none'" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">✏️ Editar datos</div><div>Antes de enviar la invitación, verificá que el <strong>nombre</strong>, <strong>apellido</strong> y <strong>teléfono</strong> de cada invitado sean correctos. Tocá el botón ✏️ para corregirlos.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📱 Enviar por WhatsApp</div><div>Tocá el botón <strong>WA</strong> para abrir WhatsApp con el mensaje de invitación ya redactado. El mensaje incluye el link personal del invitado con su QR. <strong>Verificá los datos antes de enviar.</strong></div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📥 Descargar QR</div><div>Descargá la imagen del QR personal de cada invitado para compartirla por otro medio si es necesario.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">👁️ Ver QR</div><div>Abre la página personal del invitado donde puede ver su QR, sus compras y acceder a los stands el día del evento.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ <strong>Importante:</strong> El link de cada invitado es personal e intransferible. No lo compartas con otras personas.</div></div></div>`,b.addEventListener("click",y=>{y.target===b&&(b.style.display="none")}),document.body.appendChild(b);const m=document.createElement("div");m.id="modal-edit-fam",m.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.45);z-index:200;align-items:center;justify-content:center;padding:16px",m.innerHTML='<div style="background:#fff;width:100%;max-width:420px;border-radius:12px;padding:20px"><h3 style="font-size:14px;font-weight:500;color:#1A3A5C;margin-bottom:14px">Editar invitado</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px"><div><label style="font-size:11px;color:#666">Nombre</label><input id="fam-edit-nom" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div><div><label style="font-size:11px;color:#666">Apellido</label><input id="fam-edit-ape" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div></div><div style="margin-bottom:12px"><label style="font-size:11px;color:#666">WhatsApp</label><input id="fam-edit-tel" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div><div style="display:flex;gap:8px"><button onclick="window._guardarEditFam()" style="flex:1;padding:9px;background:#1A3A5C;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer">Guardar</button><button onclick="window._cerrarEditFam()" style="flex:1;padding:9px;background:#fff;color:#555;border:1px solid #ccc;border-radius:8px;font-size:14px;cursor:pointer">Cancelar</button></div><div id="fam-edit-msg" style="margin-top:8px;font-size:12px;text-align:center"></div></div>',document.body.appendChild(m),window._editarInvFam=y=>{const E=window._invitadosFamilia[y];E&&(window._editIdxFam=y,window._editFireIdFam=E.fireId,document.getElementById("fam-edit-nom").value=E.nombre||"",document.getElementById("fam-edit-ape").value=E.apellido||"",document.getElementById("fam-edit-tel").value=E.tel||"",document.getElementById("fam-edit-msg").innerHTML="",document.getElementById("modal-edit-fam").style.display="flex")},window._guardarEditFam=async()=>{const y=document.getElementById("fam-edit-msg"),E=document.getElementById("fam-edit-nom").value.trim(),I=document.getElementById("fam-edit-ape").value.trim(),R=document.getElementById("fam-edit-tel").value.trim();if(!E||!I||!R){y.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}y.innerHTML='<span style="color:#888">Guardando...</span>';try{await be(window._editFireIdFam,{nombre:E,apellido:I,tel:R}),window._invitadosFamilia[window._editIdxFam].nombre=E,window._invitadosFamilia[window._editIdxFam].apellido=I,window._invitadosFamilia[window._editIdxFam].tel=R,y.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEditFam(),1200)}catch(S){y.innerHTML='<span style="color:#C0392B">Error: '+S.message+"</span>"}},window._cerrarEditFam=()=>{document.getElementById("modal-edit-fam").style.display="none"},window._dlQR=async y=>{const E=window._invitadosFamilia[y];E&&await sg(E)}}async function Id(){const t=window.location.pathname.replace("/Sucovi2027","")||"/",e=new URLSearchParams(window.location.search),i=document.getElementById("app"),o=t.match(/^\/familia\/([^/]+)$/);if(o){const d=decodeURIComponent(o[1]),h=e.get("key");return ag(i,d,h)}const s=t.match(/^\/stand\/(\d+)$/);if(s){const d=parseInt(s[1]),h=zt.find(y=>y.id===d);if(!h){i.innerHTML=Je("Stand no encontrado");return}const b=e.get("inv"),m=b?await ti(b):null;return Wm(i,h,m)}const a=t.match(/^\/panel\/(\d+)$/);if(a){const d=zt.find(b=>b.id===parseInt(a[1]));if(!d){i.innerHTML=Je("Panel no encontrado");return}const h=e.get("key");if(h&&h!==d.key){i.innerHTML=Je("Acceso no autorizado");return}if(!h){i.innerHTML=Je("Link inválido — usá el link completo que te enviaron");return}return Km(i,d)}const l=t.match(/^\/bodega\/(\d+)\/vinos$/);if(l){const d=zt.find(b=>b.id===parseInt(l[1]));if(!d){i.innerHTML=Je("Bodega no encontrada");return}const h=e.get("key");if(h&&h!==d.key){i.innerHTML=Je("Acceso no autorizado");return}return Ed(i,d)}if(t==="/carrito"){const d=e.get("inv"),h=d?await ti(d):null;return og(i,h)}if(t==="/acceso")return ng(i,e.get("inv"));if(t==="/org"){xl(i);return}if(t==="/registro"){xl(i);return}return t==="/caja"?Qm(i):t==="/puerta"?Zm(i):t==="/logistica"?Ym(i):Ad(i)}function Je(n){return`<div style="padding:60px;text-align:center;color:#aaa;font-size:14px">${n}</div>`}Id();window.addEventListener("popstate",Id);(function(){var n=window.location.search.match(/[?&]p=([^&]+)/);if(n){var t="/Sucovi2027",e=decodeURIComponent(n[1].replace(/~and~/g,"&"));window.history.replaceState(null,null,t+"/"+e)}})();
