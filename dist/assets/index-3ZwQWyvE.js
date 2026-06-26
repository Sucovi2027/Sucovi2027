(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();var xa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?t[e++]=o:o<2048?(t[e++]=o>>6|192,t[e++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=o>>18|240,t[e++]=o>>12&63|128,t[e++]=o>>6&63|128,t[e++]=o&63|128):(t[e++]=o>>12|224,t[e++]=o>>6&63|128,t[e++]=o&63|128)}return t},nu=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const o=n[e++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const s=n[e++];t[i++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=n[e++],a=n[e++],l=n[e++],c=((o&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[e++],a=n[e++];t[i++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const s=n[o],a=o+1<n.length,l=a?n[o+1]:0,c=o+2<n.length,p=c?n[o+2]:0,w=s>>2,f=(s&3)<<4|l>>4;let g=(l&15)<<2|p>>6,b=p&63;c||(b=64,a||(g=64)),i.push(e[w],e[f],e[g],e[b])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Tl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):nu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const s=e[n.charAt(o++)],l=o<n.length?e[n.charAt(o)]:0;++o;const p=o<n.length?e[n.charAt(o)]:64;++o;const f=o<n.length?e[n.charAt(o)]:64;if(++o,s==null||l==null||p==null||f==null)throw new iu;const g=s<<2|l>>4;if(i.push(g),p!==64){const b=l<<4&240|p>>2;if(i.push(b),f!==64){const I=p<<6&192|f;i.push(I)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ou=function(n){const t=Tl(n);return Cl.encodeByteArray(t,!0)},ji=function(n){return ou(n).replace(/\./g,"")},ru=function(n){try{return Cl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function su(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const au=()=>su().__FIREBASE_DEFAULTS__,lu=()=>{if(typeof process>"u"||typeof xa>"u")return;const n=xa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},du=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ru(n[1]);return t&&JSON.parse(t)},Tr=()=>{try{return au()||lu()||du()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cu=n=>{var t,e;return(e=(t=Tr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},uu=n=>{const t=cu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Rl=()=>{var n;return(n=Tr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function hu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",o=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ji(JSON.stringify(e)),ji(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mu(){var n;const t=(n=Tr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gu(){return!mu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yu(){try{return typeof indexedDB=="object"}catch{return!1}}function vu(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{var s;t(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="FirebaseError";class gn extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=bu,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sl.prototype.create)}}class Sl{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},o=`${this.service}/${t}`,s=this.errors[t],a=s?xu(s,i):"Error",l=`${this.serviceName}: ${a} (${o}).`;return new gn(o,l,i)}}function xu(n,t){return n.replace(wu,(e,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const wu=/\{\$([^}]+)}/g;function tr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const o of e){if(!i.includes(o))return!1;const s=n[o],a=t[o];if(wa(s)&&wa(a)){if(!tr(s,a))return!1}else if(s!==a)return!1}for(const o of i)if(!e.includes(o))return!1;return!0}function wa(n){return n!==null&&typeof n=="object"}/**
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
 */function Xt(n){return n&&n._delegate?n._delegate:n}class Qn{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Au{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new pu;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:e});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Iu(t))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:o});i.resolve(s)}catch{}}}}clearInstance(t=Fe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Fe){return this.instances.has(t)}getOptions(t=Fe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&a.resolve(o)}return o}onInit(t,e){var i;const o=this.normalizeInstanceIdentifier(e),s=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(o,s);const a=this.instances.get(o);return a&&t(a,o),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const o of i)try{o(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Eu(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Fe){return this.component?this.component.multipleInstances?t:Fe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eu(n){return n===Fe?void 0:n}function Iu(n){return n.instantiationMode==="EAGER"}/**
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
 */class _u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Au(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(it||(it={}));const Tu={debug:it.DEBUG,verbose:it.VERBOSE,info:it.INFO,warn:it.WARN,error:it.ERROR,silent:it.SILENT},Cu=it.INFO,Ru={[it.DEBUG]:"log",[it.VERBOSE]:"log",[it.INFO]:"info",[it.WARN]:"warn",[it.ERROR]:"error"},Su=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),o=Ru[t];if(o)console[o](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class kl{constructor(t){this.name=t,this._logLevel=Cu,this._logHandler=Su,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in it))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Tu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,it.DEBUG,...t),this._logHandler(this,it.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,it.VERBOSE,...t),this._logHandler(this,it.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,it.INFO,...t),this._logHandler(this,it.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,it.WARN,...t),this._logHandler(this,it.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,it.ERROR,...t),this._logHandler(this,it.ERROR,...t)}}const ku=(n,t)=>t.some(e=>n instanceof e);let Aa,Ea;function Pu(){return Aa||(Aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Du(){return Ea||(Ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pl=new WeakMap,er=new WeakMap,Dl=new WeakMap,Uo=new WeakMap,Cr=new WeakMap;function Vu(n){const t=new Promise((e,i)=>{const o=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(Ee(n.result)),o()},a=()=>{i(n.error),o()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Pl.set(e,n)}).catch(()=>{}),Cr.set(t,n),t}function Bu(n){if(er.has(n))return;const t=new Promise((e,i)=>{const o=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),o()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});er.set(n,t)}let nr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return er.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Dl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ee(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Nu(n){nr=n(nr)}function Lu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call($o(this),t,...e);return Dl.set(i,t.sort?t.sort():[t]),Ee(i)}:Du().includes(n)?function(...t){return n.apply($o(this),t),Ee(Pl.get(this))}:function(...t){return Ee(n.apply($o(this),t))}}function zu(n){return typeof n=="function"?Lu(n):(n instanceof IDBTransaction&&Bu(n),ku(n,Pu())?new Proxy(n,nr):n)}function Ee(n){if(n instanceof IDBRequest)return Vu(n);if(Uo.has(n))return Uo.get(n);const t=zu(n);return t!==n&&(Uo.set(n,t),Cr.set(t,n)),t}const $o=n=>Cr.get(n);function Fu(n,t,{blocked:e,upgrade:i,blocking:o,terminated:s}={}){const a=indexedDB.open(n,t),l=Ee(a);return i&&a.addEventListener("upgradeneeded",c=>{i(Ee(a.result),c.oldVersion,c.newVersion,Ee(a.transaction),c)}),e&&a.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),o&&c.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),l}const Mu=["get","getKey","getAll","getAllKeys","count"],Ou=["put","add","delete","clear"],Qo=new Map;function Ia(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Qo.get(t))return Qo.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,o=Ou.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(o||Mu.includes(e)))return;const s=async function(a,...l){const c=this.transaction(a,o?"readwrite":"readonly");let p=c.store;return i&&(p=p.index(l.shift())),(await Promise.all([p[e](...l),o&&c.done]))[0]};return Qo.set(t,s),s}Nu(n=>({...n,get:(t,e,i)=>Ia(t,e)||n.get(t,e,i),has:(t,e)=>!!Ia(t,e)||n.has(t,e)}));/**
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
 */class ju{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(qu(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function qu(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ir="@firebase/app",_a="0.10.13";/**
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
 */const he=new kl("@firebase/app"),Hu="@firebase/app-compat",Uu="@firebase/analytics-compat",$u="@firebase/analytics",Qu="@firebase/app-check-compat",Wu="@firebase/app-check",Gu="@firebase/auth",Ku="@firebase/auth-compat",Xu="@firebase/database",Ju="@firebase/data-connect",Zu="@firebase/database-compat",Yu="@firebase/functions",tp="@firebase/functions-compat",ep="@firebase/installations",np="@firebase/installations-compat",ip="@firebase/messaging",op="@firebase/messaging-compat",rp="@firebase/performance",sp="@firebase/performance-compat",ap="@firebase/remote-config",lp="@firebase/remote-config-compat",dp="@firebase/storage",cp="@firebase/storage-compat",up="@firebase/firestore",pp="@firebase/vertexai-preview",hp="@firebase/firestore-compat",fp="firebase",mp="10.14.1";/**
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
 */const or="[DEFAULT]",gp={[ir]:"fire-core",[Hu]:"fire-core-compat",[$u]:"fire-analytics",[Uu]:"fire-analytics-compat",[Wu]:"fire-app-check",[Qu]:"fire-app-check-compat",[Gu]:"fire-auth",[Ku]:"fire-auth-compat",[Xu]:"fire-rtdb",[Ju]:"fire-data-connect",[Zu]:"fire-rtdb-compat",[Yu]:"fire-fn",[tp]:"fire-fn-compat",[ep]:"fire-iid",[np]:"fire-iid-compat",[ip]:"fire-fcm",[op]:"fire-fcm-compat",[rp]:"fire-perf",[sp]:"fire-perf-compat",[ap]:"fire-rc",[lp]:"fire-rc-compat",[dp]:"fire-gcs",[cp]:"fire-gcs-compat",[up]:"fire-fst",[hp]:"fire-fst-compat",[pp]:"fire-vertex","fire-js":"fire-js",[fp]:"fire-js-all"};/**
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
 */const qi=new Map,yp=new Map,rr=new Map;function Ta(n,t){try{n.container.addComponent(t)}catch(e){he.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Hi(n){const t=n.name;if(rr.has(t))return he.debug(`There were multiple attempts to register component ${t}.`),!1;rr.set(t,n);for(const e of qi.values())Ta(e,n);for(const e of yp.values())Ta(e,n);return!0}function vp(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const bp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ie=new Sl("app","Firebase",bp);/**
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
 */class xp{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}}/**
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
 */const wp=mp;function Vl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:or,automaticDataCollectionEnabled:!1},t),o=i.name;if(typeof o!="string"||!o)throw Ie.create("bad-app-name",{appName:String(o)});if(e||(e=Rl()),!e)throw Ie.create("no-options");const s=qi.get(o);if(s){if(tr(e,s.options)&&tr(i,s.config))return s;throw Ie.create("duplicate-app",{appName:o})}const a=new _u(o);for(const c of rr.values())a.addComponent(c);const l=new xp(e,i,a);return qi.set(o,l),l}function Ap(n=or){const t=qi.get(n);if(!t&&n===or&&Rl())return Vl();if(!t)throw Ie.create("no-app",{appName:n});return t}function sn(n,t,e){var i;let o=(i=gp[n])!==null&&i!==void 0?i:n;e&&(o+=`-${e}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${o}" with version "${t}":`];s&&l.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),he.warn(l.join(" "));return}Hi(new Qn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const Ep="firebase-heartbeat-database",Ip=1,Wn="firebase-heartbeat-store";let Wo=null;function Bl(){return Wo||(Wo=Fu(Ep,Ip,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Wn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ie.create("idb-open",{originalErrorMessage:n.message})})),Wo}async function _p(n){try{const e=(await Bl()).transaction(Wn),i=await e.objectStore(Wn).get(Nl(n));return await e.done,i}catch(t){if(t instanceof gn)he.warn(t.message);else{const e=Ie.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});he.warn(e.message)}}}async function Ca(n,t){try{const i=(await Bl()).transaction(Wn,"readwrite");await i.objectStore(Wn).put(t,Nl(n)),await i.done}catch(e){if(e instanceof gn)he.warn(e.message);else{const i=Ie.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});he.warn(i.message)}}}function Nl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Tp=1024,Cp=30*24*60*60*1e3;class Rp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new kp(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ra();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Cp}),this._storage.overwrite(this._heartbeatsCache))}catch(i){he.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ra(),{heartbeatsToSend:i,unsentEntries:o}=Sp(this._heartbeatsCache.heartbeats),s=ji(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return he.warn(e),""}}}function Ra(){return new Date().toISOString().substring(0,10)}function Sp(n,t=Tp){const e=[];let i=n.slice();for(const o of n){const s=e.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),Sa(e)>t){s.dates.pop();break}}else if(e.push({agent:o.agent,dates:[o.date]}),Sa(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class kp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yu()?vu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await _p(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Sa(n){return ji(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Pp(n){Hi(new Qn("platform-logger",t=>new ju(t),"PRIVATE")),Hi(new Qn("heartbeat",t=>new Rp(t),"PRIVATE")),sn(ir,_a,n),sn(ir,_a,"esm2017"),sn("fire-js","")}Pp("");var Dp="firebase",Vp="10.14.1";/**
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
 */sn(Dp,Vp,"app");var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oe,Ll;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(R,v){function y(){}y.prototype=v.prototype,R.D=v.prototype,R.prototype=new y,R.prototype.constructor=R,R.C=function(m,x,A){for(var h=Array(arguments.length-2),C=2;C<arguments.length;C++)h[C-2]=arguments[C];return v.prototype[x].apply(m,h)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,v,y){y||(y=0);var m=Array(16);if(typeof v=="string")for(var x=0;16>x;++x)m[x]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(x=0;16>x;++x)m[x]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=R.g[0],y=R.g[1],x=R.g[2];var A=R.g[3],h=v+(A^y&(x^A))+m[0]+3614090360&4294967295;v=y+(h<<7&4294967295|h>>>25),h=A+(x^v&(y^x))+m[1]+3905402710&4294967295,A=v+(h<<12&4294967295|h>>>20),h=x+(y^A&(v^y))+m[2]+606105819&4294967295,x=A+(h<<17&4294967295|h>>>15),h=y+(v^x&(A^v))+m[3]+3250441966&4294967295,y=x+(h<<22&4294967295|h>>>10),h=v+(A^y&(x^A))+m[4]+4118548399&4294967295,v=y+(h<<7&4294967295|h>>>25),h=A+(x^v&(y^x))+m[5]+1200080426&4294967295,A=v+(h<<12&4294967295|h>>>20),h=x+(y^A&(v^y))+m[6]+2821735955&4294967295,x=A+(h<<17&4294967295|h>>>15),h=y+(v^x&(A^v))+m[7]+4249261313&4294967295,y=x+(h<<22&4294967295|h>>>10),h=v+(A^y&(x^A))+m[8]+1770035416&4294967295,v=y+(h<<7&4294967295|h>>>25),h=A+(x^v&(y^x))+m[9]+2336552879&4294967295,A=v+(h<<12&4294967295|h>>>20),h=x+(y^A&(v^y))+m[10]+4294925233&4294967295,x=A+(h<<17&4294967295|h>>>15),h=y+(v^x&(A^v))+m[11]+2304563134&4294967295,y=x+(h<<22&4294967295|h>>>10),h=v+(A^y&(x^A))+m[12]+1804603682&4294967295,v=y+(h<<7&4294967295|h>>>25),h=A+(x^v&(y^x))+m[13]+4254626195&4294967295,A=v+(h<<12&4294967295|h>>>20),h=x+(y^A&(v^y))+m[14]+2792965006&4294967295,x=A+(h<<17&4294967295|h>>>15),h=y+(v^x&(A^v))+m[15]+1236535329&4294967295,y=x+(h<<22&4294967295|h>>>10),h=v+(x^A&(y^x))+m[1]+4129170786&4294967295,v=y+(h<<5&4294967295|h>>>27),h=A+(y^x&(v^y))+m[6]+3225465664&4294967295,A=v+(h<<9&4294967295|h>>>23),h=x+(v^y&(A^v))+m[11]+643717713&4294967295,x=A+(h<<14&4294967295|h>>>18),h=y+(A^v&(x^A))+m[0]+3921069994&4294967295,y=x+(h<<20&4294967295|h>>>12),h=v+(x^A&(y^x))+m[5]+3593408605&4294967295,v=y+(h<<5&4294967295|h>>>27),h=A+(y^x&(v^y))+m[10]+38016083&4294967295,A=v+(h<<9&4294967295|h>>>23),h=x+(v^y&(A^v))+m[15]+3634488961&4294967295,x=A+(h<<14&4294967295|h>>>18),h=y+(A^v&(x^A))+m[4]+3889429448&4294967295,y=x+(h<<20&4294967295|h>>>12),h=v+(x^A&(y^x))+m[9]+568446438&4294967295,v=y+(h<<5&4294967295|h>>>27),h=A+(y^x&(v^y))+m[14]+3275163606&4294967295,A=v+(h<<9&4294967295|h>>>23),h=x+(v^y&(A^v))+m[3]+4107603335&4294967295,x=A+(h<<14&4294967295|h>>>18),h=y+(A^v&(x^A))+m[8]+1163531501&4294967295,y=x+(h<<20&4294967295|h>>>12),h=v+(x^A&(y^x))+m[13]+2850285829&4294967295,v=y+(h<<5&4294967295|h>>>27),h=A+(y^x&(v^y))+m[2]+4243563512&4294967295,A=v+(h<<9&4294967295|h>>>23),h=x+(v^y&(A^v))+m[7]+1735328473&4294967295,x=A+(h<<14&4294967295|h>>>18),h=y+(A^v&(x^A))+m[12]+2368359562&4294967295,y=x+(h<<20&4294967295|h>>>12),h=v+(y^x^A)+m[5]+4294588738&4294967295,v=y+(h<<4&4294967295|h>>>28),h=A+(v^y^x)+m[8]+2272392833&4294967295,A=v+(h<<11&4294967295|h>>>21),h=x+(A^v^y)+m[11]+1839030562&4294967295,x=A+(h<<16&4294967295|h>>>16),h=y+(x^A^v)+m[14]+4259657740&4294967295,y=x+(h<<23&4294967295|h>>>9),h=v+(y^x^A)+m[1]+2763975236&4294967295,v=y+(h<<4&4294967295|h>>>28),h=A+(v^y^x)+m[4]+1272893353&4294967295,A=v+(h<<11&4294967295|h>>>21),h=x+(A^v^y)+m[7]+4139469664&4294967295,x=A+(h<<16&4294967295|h>>>16),h=y+(x^A^v)+m[10]+3200236656&4294967295,y=x+(h<<23&4294967295|h>>>9),h=v+(y^x^A)+m[13]+681279174&4294967295,v=y+(h<<4&4294967295|h>>>28),h=A+(v^y^x)+m[0]+3936430074&4294967295,A=v+(h<<11&4294967295|h>>>21),h=x+(A^v^y)+m[3]+3572445317&4294967295,x=A+(h<<16&4294967295|h>>>16),h=y+(x^A^v)+m[6]+76029189&4294967295,y=x+(h<<23&4294967295|h>>>9),h=v+(y^x^A)+m[9]+3654602809&4294967295,v=y+(h<<4&4294967295|h>>>28),h=A+(v^y^x)+m[12]+3873151461&4294967295,A=v+(h<<11&4294967295|h>>>21),h=x+(A^v^y)+m[15]+530742520&4294967295,x=A+(h<<16&4294967295|h>>>16),h=y+(x^A^v)+m[2]+3299628645&4294967295,y=x+(h<<23&4294967295|h>>>9),h=v+(x^(y|~A))+m[0]+4096336452&4294967295,v=y+(h<<6&4294967295|h>>>26),h=A+(y^(v|~x))+m[7]+1126891415&4294967295,A=v+(h<<10&4294967295|h>>>22),h=x+(v^(A|~y))+m[14]+2878612391&4294967295,x=A+(h<<15&4294967295|h>>>17),h=y+(A^(x|~v))+m[5]+4237533241&4294967295,y=x+(h<<21&4294967295|h>>>11),h=v+(x^(y|~A))+m[12]+1700485571&4294967295,v=y+(h<<6&4294967295|h>>>26),h=A+(y^(v|~x))+m[3]+2399980690&4294967295,A=v+(h<<10&4294967295|h>>>22),h=x+(v^(A|~y))+m[10]+4293915773&4294967295,x=A+(h<<15&4294967295|h>>>17),h=y+(A^(x|~v))+m[1]+2240044497&4294967295,y=x+(h<<21&4294967295|h>>>11),h=v+(x^(y|~A))+m[8]+1873313359&4294967295,v=y+(h<<6&4294967295|h>>>26),h=A+(y^(v|~x))+m[15]+4264355552&4294967295,A=v+(h<<10&4294967295|h>>>22),h=x+(v^(A|~y))+m[6]+2734768916&4294967295,x=A+(h<<15&4294967295|h>>>17),h=y+(A^(x|~v))+m[13]+1309151649&4294967295,y=x+(h<<21&4294967295|h>>>11),h=v+(x^(y|~A))+m[4]+4149444226&4294967295,v=y+(h<<6&4294967295|h>>>26),h=A+(y^(v|~x))+m[11]+3174756917&4294967295,A=v+(h<<10&4294967295|h>>>22),h=x+(v^(A|~y))+m[2]+718787259&4294967295,x=A+(h<<15&4294967295|h>>>17),h=y+(A^(x|~v))+m[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(x+(h<<21&4294967295|h>>>11))&4294967295,R.g[2]=R.g[2]+x&4294967295,R.g[3]=R.g[3]+A&4294967295}i.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var y=v-this.blockSize,m=this.B,x=this.h,A=0;A<v;){if(x==0)for(;A<=y;)o(this,R,A),A+=this.blockSize;if(typeof R=="string"){for(;A<v;)if(m[x++]=R.charCodeAt(A++),x==this.blockSize){o(this,m),x=0;break}}else for(;A<v;)if(m[x++]=R[A++],x==this.blockSize){o(this,m),x=0;break}}this.h=x,this.o+=v},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var y=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=y&255,y/=256;for(this.u(R),R=Array(16),v=y=0;4>v;++v)for(var m=0;32>m;m+=8)R[y++]=this.g[v]>>>m&255;return R};function s(R,v){var y=l;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=v(R)}function a(R,v){this.h=v;for(var y=[],m=!0,x=R.length-1;0<=x;x--){var A=R[x]|0;m&&A==v||(y[x]=A,m=!1)}this.g=y}var l={};function c(R){return-128<=R&&128>R?s(R,function(v){return new a([v|0],0>v?-1:0)}):new a([R|0],0>R?-1:0)}function p(R){if(isNaN(R)||!isFinite(R))return f;if(0>R)return _(p(-R));for(var v=[],y=1,m=0;R>=y;m++)v[m]=R/y|0,y*=4294967296;return new a(v,0)}function w(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return _(w(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=p(Math.pow(v,8)),m=f,x=0;x<R.length;x+=8){var A=Math.min(8,R.length-x),h=parseInt(R.substring(x,x+A),v);8>A?(A=p(Math.pow(v,A)),m=m.j(A).add(p(h))):(m=m.j(y),m=m.add(p(h)))}return m}var f=c(0),g=c(1),b=c(16777216);n=a.prototype,n.m=function(){if(T(this))return-_(this).m();for(var R=0,v=1,y=0;y<this.g.length;y++){var m=this.i(y);R+=(0<=m?m:4294967296+m)*v,v*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(I(this))return"0";if(T(this))return"-"+_(this).toString(R);for(var v=p(Math.pow(R,6)),y=this,m="";;){var x=O(y,v).g;y=D(y,x.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(R);if(y=x,I(y))return A+m;for(;6>A.length;)A="0"+A;m=A+m}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function I(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function T(R){return R.h==-1}n.l=function(R){return R=D(this,R),T(R)?-1:I(R)?0:1};function _(R){for(var v=R.g.length,y=[],m=0;m<v;m++)y[m]=~R.g[m];return new a(y,~R.h).add(g)}n.abs=function(){return T(this)?_(this):this},n.add=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],m=0,x=0;x<=v;x++){var A=m+(this.i(x)&65535)+(R.i(x)&65535),h=(A>>>16)+(this.i(x)>>>16)+(R.i(x)>>>16);m=h>>>16,A&=65535,h&=65535,y[x]=h<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function D(R,v){return R.add(_(v))}n.j=function(R){if(I(this)||I(R))return f;if(T(this))return T(R)?_(this).j(_(R)):_(_(this).j(R));if(T(R))return _(this.j(_(R)));if(0>this.l(b)&&0>R.l(b))return p(this.m()*R.m());for(var v=this.g.length+R.g.length,y=[],m=0;m<2*v;m++)y[m]=0;for(m=0;m<this.g.length;m++)for(var x=0;x<R.g.length;x++){var A=this.i(m)>>>16,h=this.i(m)&65535,C=R.i(x)>>>16,S=R.i(x)&65535;y[2*m+2*x]+=h*S,B(y,2*m+2*x),y[2*m+2*x+1]+=A*S,B(y,2*m+2*x+1),y[2*m+2*x+1]+=h*C,B(y,2*m+2*x+1),y[2*m+2*x+2]+=A*C,B(y,2*m+2*x+2)}for(m=0;m<v;m++)y[m]=y[2*m+1]<<16|y[2*m];for(m=v;m<2*v;m++)y[m]=0;return new a(y,0)};function B(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function P(R,v){this.g=R,this.h=v}function O(R,v){if(I(v))throw Error("division by zero");if(I(R))return new P(f,f);if(T(R))return v=O(_(R),v),new P(_(v.g),_(v.h));if(T(v))return v=O(R,_(v)),new P(_(v.g),v.h);if(30<R.g.length){if(T(R)||T(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,m=v;0>=m.l(R);)y=z(y),m=z(m);var x=H(y,1),A=H(m,1);for(m=H(m,2),y=H(y,2);!I(m);){var h=A.add(m);0>=h.l(R)&&(x=x.add(y),A=h),m=H(m,1),y=H(y,1)}return v=D(R,x.j(v)),new P(x,v)}for(x=f;0<=R.l(v);){for(y=Math.max(1,Math.floor(R.m()/v.m())),m=Math.ceil(Math.log(y)/Math.LN2),m=48>=m?1:Math.pow(2,m-48),A=p(y),h=A.j(v);T(h)||0<h.l(R);)y-=m,A=p(y),h=A.j(v);I(A)&&(A=g),x=x.add(A),R=D(R,h)}return new P(x,R)}n.A=function(R){return O(this,R).h},n.and=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],m=0;m<v;m++)y[m]=this.i(m)&R.i(m);return new a(y,this.h&R.h)},n.or=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],m=0;m<v;m++)y[m]=this.i(m)|R.i(m);return new a(y,this.h|R.h)},n.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],m=0;m<v;m++)y[m]=this.i(m)^R.i(m);return new a(y,this.h^R.h)};function z(R){for(var v=R.g.length+1,y=[],m=0;m<v;m++)y[m]=R.i(m)<<1|R.i(m-1)>>>31;return new a(y,R.h)}function H(R,v){var y=v>>5;v%=32;for(var m=R.g.length-y,x=[],A=0;A<m;A++)x[A]=0<v?R.i(A+y)>>>v|R.i(A+y+1)<<32-v:R.i(A+y);return new a(x,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Ll=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=p,a.fromString=w,Oe=a}).apply(typeof ka<"u"?ka:typeof self<"u"?self:typeof window<"u"?window:{});var ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zl,Fn,Fl,Ni,sr,Ml,Ol,jl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,d,u){return r==Array.prototype||r==Object.prototype||(r[d]=u.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof ki=="object"&&ki];for(var d=0;d<r.length;++d){var u=r[d];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=e(this);function o(r,d){if(d)t:{var u=i;r=r.split(".");for(var E=0;E<r.length-1;E++){var k=r[E];if(!(k in u))break t;u=u[k]}r=r[r.length-1],E=u[r],d=d(E),d!=E&&d!=null&&t(u,r,{configurable:!0,writable:!0,value:d})}}function s(r,d){r instanceof String&&(r+="");var u=0,E=!1,k={next:function(){if(!E&&u<r.length){var V=u++;return{value:d(V,r[V]),done:!1}}return E=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}o("Array.prototype.values",function(r){return r||function(){return s(this,function(d,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(r){var d=typeof r;return d=d!="object"?d:r?Array.isArray(r)?"array":d:"null",d=="array"||d=="object"&&typeof r.length=="number"}function p(r){var d=typeof r;return d=="object"&&r!=null||d=="function"}function w(r,d,u){return r.call.apply(r.bind,arguments)}function f(r,d,u){if(!r)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,E),r.apply(d,k)}}return function(){return r.apply(d,arguments)}}function g(r,d,u){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:f,g.apply(null,arguments)}function b(r,d){var u=Array.prototype.slice.call(arguments,1);return function(){var E=u.slice();return E.push.apply(E,arguments),r.apply(this,E)}}function I(r,d){function u(){}u.prototype=d.prototype,r.aa=d.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(E,k,V){for(var j=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)j[dt-2]=arguments[dt];return d.prototype[k].apply(E,j)}}function T(r){const d=r.length;if(0<d){const u=Array(d);for(let E=0;E<d;E++)u[E]=r[E];return u}return[]}function _(r,d){for(let u=1;u<arguments.length;u++){const E=arguments[u];if(c(E)){const k=r.length||0,V=E.length||0;r.length=k+V;for(let j=0;j<V;j++)r[k+j]=E[j]}else r.push(E)}}class D{constructor(d,u){this.i=d,this.j=u,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function B(r){return/^[\s\xa0]*$/.test(r)}function P(){var r=l.navigator;return r&&(r=r.userAgent)?r:""}function O(r){return O[" "](r),r}O[" "]=function(){};var z=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function H(r,d,u){for(const E in r)d.call(u,r[E],E,r)}function R(r,d){for(const u in r)d.call(void 0,r[u],u,r)}function v(r){const d={};for(const u in r)d[u]=r[u];return d}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m(r,d){let u,E;for(let k=1;k<arguments.length;k++){E=arguments[k];for(u in E)r[u]=E[u];for(let V=0;V<y.length;V++)u=y[V],Object.prototype.hasOwnProperty.call(E,u)&&(r[u]=E[u])}}function x(r){var d=1;r=r.split(":");const u=[];for(;0<d&&r.length;)u.push(r.shift()),d--;return r.length&&u.push(r.join(":")),u}function A(r){l.setTimeout(()=>{throw r},0)}function h(){var r=W;let d=null;return r.g&&(d=r.g,r.g=r.g.next,r.g||(r.h=null),d.next=null),d}class C{constructor(){this.h=this.g=null}add(d,u){const E=S.get();E.set(d,u),this.h?this.h.next=E:this.g=E,this.h=E}}var S=new D(()=>new M,r=>r.reset());class M{constructor(){this.next=this.g=this.h=null}set(d,u){this.h=d,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let N,$=!1,W=new C,G=()=>{const r=l.Promise.resolve(void 0);N=()=>{r.then(U)}};var U=()=>{for(var r;r=h();){try{r.h.call(r.g)}catch(u){A(u)}var d=S;d.j(r),100>d.h&&(d.h++,r.next=d.g,d.g=r)}$=!1};function at(){this.s=this.s,this.C=this.C}at.prototype.s=!1,at.prototype.ma=function(){this.s||(this.s=!0,this.N())},at.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function tt(r,d){this.type=r,this.g=this.target=d,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var xt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var r=!1,d=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};l.addEventListener("test",u,d),l.removeEventListener("test",u,d)}catch{}return r}();function ft(r,d){if(tt.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,E=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=d,d=r.relatedTarget){if(z){t:{try{O(d.nodeName);var k=!0;break t}catch{}k=!1}k||(d=null)}}else u=="mouseover"?d=r.fromElement:u=="mouseout"&&(d=r.toElement);this.relatedTarget=d,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Jt[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&ft.aa.h.call(this)}}I(ft,tt);var Jt={2:"touch",3:"pen",4:"mouse"};ft.prototype.h=function(){ft.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var Ut="closure_listenable_"+(1e6*Math.random()|0),ge=0;function De(r,d,u,E,k){this.listener=r,this.proxy=null,this.src=d,this.type=u,this.capture=!!E,this.ha=k,this.key=++ge,this.da=this.fa=!1}function $t(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function Qt(r){this.src=r,this.g={},this.h=0}Qt.prototype.add=function(r,d,u,E,k){var V=r.toString();r=this.g[V],r||(r=this.g[V]=[],this.h++);var j=Ft(r,d,E,k);return-1<j?(d=r[j],u||(d.fa=!1)):(d=new De(d,this.src,V,!!E,k),d.fa=u,r.push(d)),d};function gt(r,d){var u=d.type;if(u in r.g){var E=r.g[u],k=Array.prototype.indexOf.call(E,d,void 0),V;(V=0<=k)&&Array.prototype.splice.call(E,k,1),V&&($t(d),r.g[u].length==0&&(delete r.g[u],r.h--))}}function Ft(r,d,u,E){for(var k=0;k<r.length;++k){var V=r[k];if(!V.da&&V.listener==d&&V.capture==!!u&&V.ha==E)return k}return-1}var de="closure_lm_"+(1e6*Math.random()|0),Ve={};function Ke(r,d,u,E,k){if(Array.isArray(d)){for(var V=0;V<d.length;V++)Ke(r,d[V],u,E,k);return null}return u=Is(u),r&&r[Ut]?r.K(d,u,p(E)?!!E.capture:!1,k):Cc(r,d,u,!1,E,k)}function Cc(r,d,u,E,k,V){if(!d)throw Error("Invalid event type");var j=p(k)?!!k.capture:!!k,dt=To(r);if(dt||(r[de]=dt=new Qt(r)),u=dt.add(d,u,E,j,V),u.proxy)return u;if(E=Rc(),u.proxy=E,E.src=r,E.listener=u,r.addEventListener)xt||(k=j),k===void 0&&(k=!1),r.addEventListener(d.toString(),E,k);else if(r.attachEvent)r.attachEvent(Es(d.toString()),E);else if(r.addListener&&r.removeListener)r.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Rc(){function r(u){return d.call(r.src,r.listener,u)}const d=Sc;return r}function As(r,d,u,E,k){if(Array.isArray(d))for(var V=0;V<d.length;V++)As(r,d[V],u,E,k);else E=p(E)?!!E.capture:!!E,u=Is(u),r&&r[Ut]?(r=r.i,d=String(d).toString(),d in r.g&&(V=r.g[d],u=Ft(V,u,E,k),-1<u&&($t(V[u]),Array.prototype.splice.call(V,u,1),V.length==0&&(delete r.g[d],r.h--)))):r&&(r=To(r))&&(d=r.g[d.toString()],r=-1,d&&(r=Ft(d,u,E,k)),(u=-1<r?d[r]:null)&&_o(u))}function _o(r){if(typeof r!="number"&&r&&!r.da){var d=r.src;if(d&&d[Ut])gt(d.i,r);else{var u=r.type,E=r.proxy;d.removeEventListener?d.removeEventListener(u,E,r.capture):d.detachEvent?d.detachEvent(Es(u),E):d.addListener&&d.removeListener&&d.removeListener(E),(u=To(d))?(gt(u,r),u.h==0&&(u.src=null,d[de]=null)):$t(r)}}}function Es(r){return r in Ve?Ve[r]:Ve[r]="on"+r}function Sc(r,d){if(r.da)r=!0;else{d=new ft(d,this);var u=r.listener,E=r.ha||r.src;r.fa&&_o(r),r=u.call(E,d)}return r}function To(r){return r=r[de],r instanceof Qt?r:null}var Co="__closure_events_fn_"+(1e9*Math.random()>>>0);function Is(r){return typeof r=="function"?r:(r[Co]||(r[Co]=function(d){return r.handleEvent(d)}),r[Co])}function Dt(){at.call(this),this.i=new Qt(this),this.M=this,this.F=null}I(Dt,at),Dt.prototype[Ut]=!0,Dt.prototype.removeEventListener=function(r,d,u,E){As(this,r,d,u,E)};function Mt(r,d){var u,E=r.F;if(E)for(u=[];E;E=E.F)u.push(E);if(r=r.M,E=d.type||d,typeof d=="string")d=new tt(d,r);else if(d instanceof tt)d.target=d.target||r;else{var k=d;d=new tt(E,r),m(d,k)}if(k=!0,u)for(var V=u.length-1;0<=V;V--){var j=d.g=u[V];k=fi(j,E,!0,d)&&k}if(j=d.g=r,k=fi(j,E,!0,d)&&k,k=fi(j,E,!1,d)&&k,u)for(V=0;V<u.length;V++)j=d.g=u[V],k=fi(j,E,!1,d)&&k}Dt.prototype.N=function(){if(Dt.aa.N.call(this),this.i){var r=this.i,d;for(d in r.g){for(var u=r.g[d],E=0;E<u.length;E++)$t(u[E]);delete r.g[d],r.h--}}this.F=null},Dt.prototype.K=function(r,d,u,E){return this.i.add(String(r),d,!1,u,E)},Dt.prototype.L=function(r,d,u,E){return this.i.add(String(r),d,!0,u,E)};function fi(r,d,u,E){if(d=r.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,V=0;V<d.length;++V){var j=d[V];if(j&&!j.da&&j.capture==u){var dt=j.listener,Tt=j.ha||j.src;j.fa&&gt(r.i,j),k=dt.call(Tt,E)!==!1&&k}}return k&&!E.defaultPrevented}function _s(r,d,u){if(typeof r=="function")u&&(r=g(r,u));else if(r&&typeof r.handleEvent=="function")r=g(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(r,d||0)}function Ts(r){r.g=_s(()=>{r.g=null,r.i&&(r.i=!1,Ts(r))},r.l);const d=r.h;r.h=null,r.m.apply(null,d)}class kc extends at{constructor(d,u){super(),this.m=d,this.l=u,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ts(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(r){at.call(this),this.h=r,this.g={}}I(In,at);var Cs=[];function Rs(r){H(r.g,function(d,u){this.g.hasOwnProperty(u)&&_o(d)},r),r.g={}}In.prototype.N=function(){In.aa.N.call(this),Rs(this)},In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ro=l.JSON.stringify,Pc=l.JSON.parse,Dc=class{stringify(r){return l.JSON.stringify(r,void 0)}parse(r){return l.JSON.parse(r,void 0)}};function So(){}So.prototype.h=null;function Ss(r){return r.h||(r.h=r.i())}function ks(){}var _n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ko(){tt.call(this,"d")}I(ko,tt);function Po(){tt.call(this,"c")}I(Po,tt);var Be={},Ps=null;function mi(){return Ps=Ps||new Dt}Be.La="serverreachability";function Ds(r){tt.call(this,Be.La,r)}I(Ds,tt);function Tn(r){const d=mi();Mt(d,new Ds(d))}Be.STAT_EVENT="statevent";function Vs(r,d){tt.call(this,Be.STAT_EVENT,r),this.stat=d}I(Vs,tt);function Ot(r){const d=mi();Mt(d,new Vs(d,r))}Be.Ma="timingevent";function Bs(r,d){tt.call(this,Be.Ma,r),this.size=d}I(Bs,tt);function Cn(r,d){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){r()},d)}function Rn(){this.g=!0}Rn.prototype.xa=function(){this.g=!1};function Vc(r,d,u,E,k,V){r.info(function(){if(r.g)if(V)for(var j="",dt=V.split("&"),Tt=0;Tt<dt.length;Tt++){var rt=dt[Tt].split("=");if(1<rt.length){var Vt=rt[0];rt=rt[1];var Bt=Vt.split("_");j=2<=Bt.length&&Bt[1]=="type"?j+(Vt+"="+rt+"&"):j+(Vt+"=redacted&")}}else j=null;else j=V;return"XMLHTTP REQ ("+E+") [attempt "+k+"]: "+d+`
`+u+`
`+j})}function Bc(r,d,u,E,k,V,j){r.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+k+"]: "+d+`
`+u+`
`+V+" "+j})}function Xe(r,d,u,E){r.info(function(){return"XMLHTTP TEXT ("+d+"): "+Lc(r,u)+(E?" "+E:"")})}function Nc(r,d){r.info(function(){return"TIMEOUT: "+d})}Rn.prototype.info=function(){};function Lc(r,d){if(!r.g)return d;if(!d)return null;try{var u=JSON.parse(d);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var E=u[r];if(!(2>E.length)){var k=E[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var j=1;j<k.length;j++)k[j]=""}}}}return Ro(u)}catch{return d}}var gi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ns={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Do;function yi(){}I(yi,So),yi.prototype.g=function(){return new XMLHttpRequest},yi.prototype.i=function(){return{}},Do=new yi;function ye(r,d,u,E){this.j=r,this.i=d,this.l=u,this.R=E||1,this.U=new In(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ls}function Ls(){this.i=null,this.g="",this.h=!1}var zs={},Vo={};function Bo(r,d,u){r.L=1,r.v=wi(ce(d)),r.m=u,r.P=!0,Fs(r,null)}function Fs(r,d){r.F=Date.now(),vi(r),r.A=ce(r.v);var u=r.A,E=r.R;Array.isArray(E)||(E=[String(E)]),Zs(u.i,"t",E),r.C=0,u=r.j.J,r.h=new Ls,r.g=ga(r.j,u?d:null,!r.m),0<r.O&&(r.M=new kc(g(r.Y,r,r.g),r.O)),d=r.U,u=r.g,E=r.ca;var k="readystatechange";Array.isArray(k)||(k&&(Cs[0]=k.toString()),k=Cs);for(var V=0;V<k.length;V++){var j=Ke(u,k[V],E||d.handleEvent,!1,d.h||d);if(!j)break;d.g[j.key]=j}d=r.H?v(r.H):{},r.m?(r.u||(r.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,d)):(r.u="GET",r.g.ea(r.A,r.u,null,d)),Tn(),Vc(r.i,r.u,r.A,r.l,r.R,r.m)}ye.prototype.ca=function(r){r=r.target;const d=this.M;d&&ue(r)==3?d.j():this.Y(r)},ye.prototype.Y=function(r){try{if(r==this.g)t:{const Bt=ue(this.g);var d=this.g.Ba();const Ye=this.g.Z();if(!(3>Bt)&&(Bt!=3||this.g&&(this.h.h||this.g.oa()||ra(this.g)))){this.J||Bt!=4||d==7||(d==8||0>=Ye?Tn(3):Tn(2)),No(this);var u=this.g.Z();this.X=u;e:if(Ms(this)){var E=ra(this.g);r="";var k=E.length,V=ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ne(this),Sn(this);var j="";break e}this.h.i=new l.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,r+=this.h.i.decode(E[d],{stream:!(V&&d==k-1)});E.length=0,this.h.g+=r,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=u==200,Bc(this.i,this.u,this.A,this.l,this.R,Bt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var dt,Tt=this.g;if((dt=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(dt)){var rt=dt;break e}}rt=null}if(u=rt)Xe(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lo(this,u);else{this.o=!1,this.s=3,Ot(12),Ne(this),Sn(this);break t}}if(this.P){u=!0;let Zt;for(;!this.J&&this.C<j.length;)if(Zt=zc(this,j),Zt==Vo){Bt==4&&(this.s=4,Ot(14),u=!1),Xe(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==zs){this.s=4,Ot(15),Xe(this.i,this.l,j,"[Invalid Chunk]"),u=!1;break}else Xe(this.i,this.l,Zt,null),Lo(this,Zt);if(Ms(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Bt!=4||j.length!=0||this.h.h||(this.s=1,Ot(16),u=!1),this.o=this.o&&u,!u)Xe(this.i,this.l,j,"[Invalid Chunked Response]"),Ne(this),Sn(this);else if(0<j.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),qo(Vt),Vt.M=!0,Ot(11))}}else Xe(this.i,this.l,j,null),Lo(this,j);Bt==4&&Ne(this),this.o&&!this.J&&(Bt==4?pa(this.j,this):(this.o=!1,vi(this)))}else tu(this.g),u==400&&0<j.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Ne(this),Sn(this)}}}catch{}finally{}};function Ms(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function zc(r,d){var u=r.C,E=d.indexOf(`
`,u);return E==-1?Vo:(u=Number(d.substring(u,E)),isNaN(u)?zs:(E+=1,E+u>d.length?Vo:(d=d.slice(E,E+u),r.C=E+u,d)))}ye.prototype.cancel=function(){this.J=!0,Ne(this)};function vi(r){r.S=Date.now()+r.I,Os(r,r.I)}function Os(r,d){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Cn(g(r.ba,r),d)}function No(r){r.B&&(l.clearTimeout(r.B),r.B=null)}ye.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Nc(this.i,this.A),this.L!=2&&(Tn(),Ot(17)),Ne(this),this.s=2,Sn(this)):Os(this,this.S-r)};function Sn(r){r.j.G==0||r.J||pa(r.j,r)}function Ne(r){No(r);var d=r.M;d&&typeof d.ma=="function"&&d.ma(),r.M=null,Rs(r.U),r.g&&(d=r.g,r.g=null,d.abort(),d.ma())}function Lo(r,d){try{var u=r.j;if(u.G!=0&&(u.g==r||zo(u.h,r))){if(!r.K&&zo(u.h,r)&&u.G==3){try{var E=u.Da.g.parse(d)}catch{E=null}if(Array.isArray(E)&&E.length==3){var k=E;if(k[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)Ci(u),_i(u);else break t;jo(u),Ot(18)}}else u.za=k[1],0<u.za-u.T&&37500>k[2]&&u.F&&u.v==0&&!u.C&&(u.C=Cn(g(u.Za,u),6e3));if(1>=Hs(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else ze(u,11)}else if((r.K||u.g==r)&&Ci(u),!B(d))for(k=u.Da.g.parse(d),d=0;d<k.length;d++){let rt=k[d];if(u.T=rt[0],rt=rt[1],u.G==2)if(rt[0]=="c"){u.K=rt[1],u.ia=rt[2];const Vt=rt[3];Vt!=null&&(u.la=Vt,u.j.info("VER="+u.la));const Bt=rt[4];Bt!=null&&(u.Aa=Bt,u.j.info("SVER="+u.Aa));const Ye=rt[5];Ye!=null&&typeof Ye=="number"&&0<Ye&&(E=1.5*Ye,u.L=E,u.j.info("backChannelRequestTimeoutMs_="+E)),E=u;const Zt=r.g;if(Zt){const Si=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var V=E.h;V.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Fo(V,V.h),V.h=null))}if(E.D){const Ho=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ho&&(E.ya=Ho,ut(E.I,E.D,Ho))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),E=u;var j=r;if(E.qa=ma(E,E.J?E.ia:null,E.W),j.K){Us(E.h,j);var dt=j,Tt=E.L;Tt&&(dt.I=Tt),dt.B&&(No(dt),vi(dt)),E.g=j}else ca(E);0<u.i.length&&Ti(u)}else rt[0]!="stop"&&rt[0]!="close"||ze(u,7);else u.G==3&&(rt[0]=="stop"||rt[0]=="close"?rt[0]=="stop"?ze(u,7):Oo(u):rt[0]!="noop"&&u.l&&u.l.ta(rt),u.v=0)}}Tn(4)}catch{}}var Fc=class{constructor(r,d){this.g=r,this.map=d}};function js(r){this.l=r||10,l.PerformanceNavigationTiming?(r=l.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qs(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Hs(r){return r.h?1:r.g?r.g.size:0}function zo(r,d){return r.h?r.h==d:r.g?r.g.has(d):!1}function Fo(r,d){r.g?r.g.add(d):r.h=d}function Us(r,d){r.h&&r.h==d?r.h=null:r.g&&r.g.has(d)&&r.g.delete(d)}js.prototype.cancel=function(){if(this.i=$s(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function $s(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let d=r.i;for(const u of r.g.values())d=d.concat(u.D);return d}return T(r.i)}function Mc(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(c(r)){for(var d=[],u=r.length,E=0;E<u;E++)d.push(r[E]);return d}d=[],u=0;for(E in r)d[u++]=r[E];return d}function Oc(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(c(r)||typeof r=="string"){var d=[];r=r.length;for(var u=0;u<r;u++)d.push(u);return d}d=[],u=0;for(const E in r)d[u++]=E;return d}}}function Qs(r,d){if(r.forEach&&typeof r.forEach=="function")r.forEach(d,void 0);else if(c(r)||typeof r=="string")Array.prototype.forEach.call(r,d,void 0);else for(var u=Oc(r),E=Mc(r),k=E.length,V=0;V<k;V++)d.call(void 0,E[V],u&&u[V],r)}var Ws=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jc(r,d){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var E=r[u].indexOf("="),k=null;if(0<=E){var V=r[u].substring(0,E);k=r[u].substring(E+1)}else V=r[u];d(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Le(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Le){this.h=r.h,bi(this,r.j),this.o=r.o,this.g=r.g,xi(this,r.s),this.l=r.l;var d=r.i,u=new Dn;u.i=d.i,d.g&&(u.g=new Map(d.g),u.h=d.h),Gs(this,u),this.m=r.m}else r&&(d=String(r).match(Ws))?(this.h=!1,bi(this,d[1]||"",!0),this.o=kn(d[2]||""),this.g=kn(d[3]||"",!0),xi(this,d[4]),this.l=kn(d[5]||"",!0),Gs(this,d[6]||"",!0),this.m=kn(d[7]||"")):(this.h=!1,this.i=new Dn(null,this.h))}Le.prototype.toString=function(){var r=[],d=this.j;d&&r.push(Pn(d,Ks,!0),":");var u=this.g;return(u||d=="file")&&(r.push("//"),(d=this.o)&&r.push(Pn(d,Ks,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Pn(u,u.charAt(0)=="/"?Uc:Hc,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Pn(u,Qc)),r.join("")};function ce(r){return new Le(r)}function bi(r,d,u){r.j=u?kn(d,!0):d,r.j&&(r.j=r.j.replace(/:$/,""))}function xi(r,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);r.s=d}else r.s=null}function Gs(r,d,u){d instanceof Dn?(r.i=d,Wc(r.i,r.h)):(u||(d=Pn(d,$c)),r.i=new Dn(d,r.h))}function ut(r,d,u){r.i.set(d,u)}function wi(r){return ut(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function kn(r,d){return r?d?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Pn(r,d,u){return typeof r=="string"?(r=encodeURI(r).replace(d,qc),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function qc(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Ks=/[#\/\?@]/g,Hc=/[#\?:]/g,Uc=/[#\?]/g,$c=/[#\?@]/g,Qc=/#/g;function Dn(r,d){this.h=this.g=null,this.i=r||null,this.j=!!d}function ve(r){r.g||(r.g=new Map,r.h=0,r.i&&jc(r.i,function(d,u){r.add(decodeURIComponent(d.replace(/\+/g," ")),u)}))}n=Dn.prototype,n.add=function(r,d){ve(this),this.i=null,r=Je(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(d),this.h+=1,this};function Xs(r,d){ve(r),d=Je(r,d),r.g.has(d)&&(r.i=null,r.h-=r.g.get(d).length,r.g.delete(d))}function Js(r,d){return ve(r),d=Je(r,d),r.g.has(d)}n.forEach=function(r,d){ve(this),this.g.forEach(function(u,E){u.forEach(function(k){r.call(d,k,E,this)},this)},this)},n.na=function(){ve(this);const r=Array.from(this.g.values()),d=Array.from(this.g.keys()),u=[];for(let E=0;E<d.length;E++){const k=r[E];for(let V=0;V<k.length;V++)u.push(d[E])}return u},n.V=function(r){ve(this);let d=[];if(typeof r=="string")Js(this,r)&&(d=d.concat(this.g.get(Je(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)d=d.concat(r[u])}return d},n.set=function(r,d){return ve(this),this.i=null,r=Je(this,r),Js(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[d]),this.h+=1,this},n.get=function(r,d){return r?(r=this.V(r),0<r.length?String(r[0]):d):d};function Zs(r,d,u){Xs(r,d),0<u.length&&(r.i=null,r.g.set(Je(r,d),T(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],d=Array.from(this.g.keys());for(var u=0;u<d.length;u++){var E=d[u];const V=encodeURIComponent(String(E)),j=this.V(E);for(E=0;E<j.length;E++){var k=V;j[E]!==""&&(k+="="+encodeURIComponent(String(j[E]))),r.push(k)}}return this.i=r.join("&")};function Je(r,d){return d=String(d),r.j&&(d=d.toLowerCase()),d}function Wc(r,d){d&&!r.j&&(ve(r),r.i=null,r.g.forEach(function(u,E){var k=E.toLowerCase();E!=k&&(Xs(this,E),Zs(this,k,u))},r)),r.j=d}function Gc(r,d){const u=new Rn;if(l.Image){const E=new Image;E.onload=b(be,u,"TestLoadImage: loaded",!0,d,E),E.onerror=b(be,u,"TestLoadImage: error",!1,d,E),E.onabort=b(be,u,"TestLoadImage: abort",!1,d,E),E.ontimeout=b(be,u,"TestLoadImage: timeout",!1,d,E),l.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=r}else d(!1)}function Kc(r,d){const u=new Rn,E=new AbortController,k=setTimeout(()=>{E.abort(),be(u,"TestPingServer: timeout",!1,d)},1e4);fetch(r,{signal:E.signal}).then(V=>{clearTimeout(k),V.ok?be(u,"TestPingServer: ok",!0,d):be(u,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),be(u,"TestPingServer: error",!1,d)})}function be(r,d,u,E,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),E(u)}catch{}}function Xc(){this.g=new Dc}function Jc(r,d,u){const E=u||"";try{Qs(r,function(k,V){let j=k;p(k)&&(j=Ro(k)),d.push(E+V+"="+encodeURIComponent(j))})}catch(k){throw d.push(E+"type="+encodeURIComponent("_badmap")),k}}function Ai(r){this.l=r.Ub||null,this.j=r.eb||!1}I(Ai,So),Ai.prototype.g=function(){return new Ei(this.l,this.j)},Ai.prototype.i=function(r){return function(){return r}}({});function Ei(r,d){Dt.call(this),this.D=r,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Ei,Dt),n=Ei.prototype,n.open=function(r,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=d,this.readyState=1,Bn(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(d.body=r),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ys(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ys(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var d=r.value?r.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!r.done}))&&(this.response=this.responseText+=d)}r.done?Vn(this):Bn(this),this.readyState==3&&Ys(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Vn(this))},n.Qa=function(r){this.g&&(this.response=r,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Bn(r)}n.setRequestHeader=function(r,d){this.u.append(r,d)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],d=this.h.entries();for(var u=d.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=d.next();return r.join(`\r
`)};function Bn(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function ta(r){let d="";return H(r,function(u,E){d+=E,d+=":",d+=u,d+=`\r
`}),d}function Mo(r,d,u){t:{for(E in u){var E=!1;break t}E=!0}E||(u=ta(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):ut(r,d,u))}function ht(r){Dt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(ht,Dt);var Zc=/^https?$/i,Yc=["POST","PUT"];n=ht.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,d,u,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);d=d?d.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Do.g(),this.v=this.o?Ss(this.o):Ss(Do),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(r),!0),this.B=!1}catch(V){ea(this,V);return}if(r=u||"",u=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var k in E)u.set(k,E[k]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const V of E.keys())u.set(V,E.get(V));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(u.keys()).find(V=>V.toLowerCase()=="content-type"),k=l.FormData&&r instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Yc,d,void 0))||E||k||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,j]of u)this.g.setRequestHeader(V,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{oa(this),this.u=!0,this.g.send(r),this.u=!1}catch(V){ea(this,V)}};function ea(r,d){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=d,r.m=5,na(r),Ii(r)}function na(r){r.A||(r.A=!0,Mt(r,"complete"),Mt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,Mt(this,"complete"),Mt(this,"abort"),Ii(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ii(this,!0)),ht.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ia(this):this.bb())},n.bb=function(){ia(this)};function ia(r){if(r.h&&typeof a<"u"&&(!r.v[1]||ue(r)!=4||r.Z()!=2)){if(r.u&&ue(r)==4)_s(r.Ea,0,r);else if(Mt(r,"readystatechange"),ue(r)==4){r.h=!1;try{const j=r.Z();t:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break t;default:d=!1}var u;if(!(u=d)){var E;if(E=j===0){var k=String(r.D).match(Ws)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),E=!Zc.test(k?k.toLowerCase():"")}u=E}if(u)Mt(r,"complete"),Mt(r,"success");else{r.m=6;try{var V=2<ue(r)?r.g.statusText:""}catch{V=""}r.l=V+" ["+r.Z()+"]",na(r)}}finally{Ii(r)}}}}function Ii(r,d){if(r.g){oa(r);const u=r.g,E=r.v[0]?()=>{}:null;r.g=null,r.v=null,d||Mt(r,"ready");try{u.onreadystatechange=E}catch{}}}function oa(r){r.I&&(l.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function ue(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<ue(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var d=this.g.responseText;return r&&d.indexOf(r)==0&&(d=d.substring(r.length)),Pc(d)}};function ra(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function tu(r){const d={};r=(r.g&&2<=ue(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<r.length;E++){if(B(r[E]))continue;var u=x(r[E]);const k=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const V=d[k]||[];d[k]=V,V.push(u)}R(d,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nn(r,d,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||d}function sa(r){this.Aa=0,this.i=[],this.j=new Rn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Nn("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Nn("baseRetryDelayMs",5e3,r),this.cb=Nn("retryDelaySeedMs",1e4,r),this.Wa=Nn("forwardChannelMaxRetries",2,r),this.wa=Nn("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new js(r&&r.concurrentRequestLimit),this.Da=new Xc,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=sa.prototype,n.la=8,n.G=1,n.connect=function(r,d,u,E){Ot(0),this.W=r,this.H=d||{},u&&E!==void 0&&(this.H.OSID=u,this.H.OAID=E),this.F=this.X,this.I=ma(this,null,this.W),Ti(this)};function Oo(r){if(aa(r),r.G==3){var d=r.U++,u=ce(r.I);if(ut(u,"SID",r.K),ut(u,"RID",d),ut(u,"TYPE","terminate"),Ln(r,u),d=new ye(r,r.j,d),d.L=2,d.v=wi(ce(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=d.v,u=!0),u||(d.g=ga(d.j,null),d.g.ea(d.v)),d.F=Date.now(),vi(d)}fa(r)}function _i(r){r.g&&(qo(r),r.g.cancel(),r.g=null)}function aa(r){_i(r),r.u&&(l.clearTimeout(r.u),r.u=null),Ci(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&l.clearTimeout(r.s),r.s=null)}function Ti(r){if(!qs(r.h)&&!r.s){r.s=!0;var d=r.Ga;N||G(),$||(N(),$=!0),W.add(d,r),r.B=0}}function eu(r,d){return Hs(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=d.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Cn(g(r.Ga,r,d),ha(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const k=new ye(this,this.j,r);let V=this.o;if(this.S&&(V?(V=v(V),m(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)t:{for(var d=0,u=0;u<this.i.length;u++){e:{var E=this.i[u];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(d+=E,4096<d){d=u;break t}if(d===4096||u===this.i.length-1){d=u+1;break t}}d=1e3}else d=1e3;d=da(this,k,d),u=ce(this.I),ut(u,"RID",r),ut(u,"CVER",22),this.D&&ut(u,"X-HTTP-Session-Id",this.D),Ln(this,u),V&&(this.O?d="headers="+encodeURIComponent(String(ta(V)))+"&"+d:this.m&&Mo(u,this.m,V)),Fo(this.h,k),this.Ua&&ut(u,"TYPE","init"),this.P?(ut(u,"$req",d),ut(u,"SID","null"),k.T=!0,Bo(k,u,null)):Bo(k,u,d),this.G=2}}else this.G==3&&(r?la(this,r):this.i.length==0||qs(this.h)||la(this))};function la(r,d){var u;d?u=d.l:u=r.U++;const E=ce(r.I);ut(E,"SID",r.K),ut(E,"RID",u),ut(E,"AID",r.T),Ln(r,E),r.m&&r.o&&Mo(E,r.m,r.o),u=new ye(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),d&&(r.i=d.D.concat(r.i)),d=da(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Fo(r.h,u),Bo(u,E,d)}function Ln(r,d){r.H&&H(r.H,function(u,E){ut(d,E,u)}),r.l&&Qs({},function(u,E){ut(d,E,u)})}function da(r,d,u){u=Math.min(r.i.length,u);var E=r.l?g(r.l.Na,r.l,r):null;t:{var k=r.i;let V=-1;for(;;){const j=["count="+u];V==-1?0<u?(V=k[0].g,j.push("ofs="+V)):V=0:j.push("ofs="+V);let dt=!0;for(let Tt=0;Tt<u;Tt++){let rt=k[Tt].g;const Vt=k[Tt].map;if(rt-=V,0>rt)V=Math.max(0,k[Tt].g-100),dt=!1;else try{Jc(Vt,j,"req"+rt+"_")}catch{E&&E(Vt)}}if(dt){E=j.join("&");break t}}}return r=r.i.splice(0,u),d.D=r,E}function ca(r){if(!r.g&&!r.u){r.Y=1;var d=r.Fa;N||G(),$||(N(),$=!0),W.add(d,r),r.v=0}}function jo(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Cn(g(r.Fa,r),ha(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,ua(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Cn(g(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),_i(this),ua(this))};function qo(r){r.A!=null&&(l.clearTimeout(r.A),r.A=null)}function ua(r){r.g=new ye(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var d=ce(r.qa);ut(d,"RID","rpc"),ut(d,"SID",r.K),ut(d,"AID",r.T),ut(d,"CI",r.F?"0":"1"),!r.F&&r.ja&&ut(d,"TO",r.ja),ut(d,"TYPE","xmlhttp"),Ln(r,d),r.m&&r.o&&Mo(d,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=wi(ce(d)),u.m=null,u.P=!0,Fs(u,r)}n.Za=function(){this.C!=null&&(this.C=null,_i(this),jo(this),Ot(19))};function Ci(r){r.C!=null&&(l.clearTimeout(r.C),r.C=null)}function pa(r,d){var u=null;if(r.g==d){Ci(r),qo(r),r.g=null;var E=2}else if(zo(r.h,d))u=d.D,Us(r.h,d),E=1;else return;if(r.G!=0){if(d.o)if(E==1){u=d.m?d.m.length:0,d=Date.now()-d.F;var k=r.B;E=mi(),Mt(E,new Bs(E,u)),Ti(r)}else ca(r);else if(k=d.s,k==3||k==0&&0<d.X||!(E==1&&eu(r,d)||E==2&&jo(r)))switch(u&&0<u.length&&(d=r.h,d.i=d.i.concat(u)),k){case 1:ze(r,5);break;case 4:ze(r,10);break;case 3:ze(r,6);break;default:ze(r,2)}}}function ha(r,d){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*d}function ze(r,d){if(r.j.info("Error code "+d),d==2){var u=g(r.fb,r),E=r.Xa;const k=!E;E=new Le(E||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||bi(E,"https"),wi(E),k?Gc(E.toString(),u):Kc(E.toString(),u)}else Ot(2);r.G=0,r.l&&r.l.sa(d),fa(r),aa(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function fa(r){if(r.G=0,r.ka=[],r.l){const d=$s(r.h);(d.length!=0||r.i.length!=0)&&(_(r.ka,d),_(r.ka,r.i),r.h.i.length=0,T(r.i),r.i.length=0),r.l.ra()}}function ma(r,d,u){var E=u instanceof Le?ce(u):new Le(u);if(E.g!="")d&&(E.g=d+"."+E.g),xi(E,E.s);else{var k=l.location;E=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var V=new Le(null);E&&bi(V,E),d&&(V.g=d),k&&xi(V,k),u&&(V.l=u),E=V}return u=r.D,d=r.ya,u&&d&&ut(E,u,d),ut(E,"VER",r.la),Ln(r,E),E}function ga(r,d,u){if(d&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=r.Ca&&!r.pa?new ht(new Ai({eb:u})):new ht(r.pa),d.Ha(r.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ya(){}n=ya.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ri(){}Ri.prototype.g=function(r,d){return new Wt(r,d)};function Wt(r,d){Dt.call(this),this.g=new sa(d),this.l=r,this.h=d&&d.messageUrlParams||null,r=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(r?r["X-WebChannel-Content-Type"]=d.messageContentType:r={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(r?r["X-WebChannel-Client-Profile"]=d.va:r={"X-WebChannel-Client-Profile":d.va}),this.g.S=r,(r=d&&d.Sb)&&!B(r)&&(this.g.m=r),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!B(d)&&(this.g.D=d,r=this.h,r!==null&&d in r&&(r=this.h,d in r&&delete r[d])),this.j=new Ze(this)}I(Wt,Dt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Oo(this.g)},Wt.prototype.o=function(r){var d=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=Ro(r),r=u);d.i.push(new Fc(d.Ya++,r)),d.G==3&&Ti(d)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Oo(this.g),delete this.g,Wt.aa.N.call(this)};function va(r){ko.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var d=r.__sm__;if(d){t:{for(const u in d){r=u;break t}r=void 0}(this.i=r)&&(r=this.i,d=d!==null&&r in d?d[r]:void 0),this.data=d}else this.data=r}I(va,ko);function ba(){Po.call(this),this.status=1}I(ba,Po);function Ze(r){this.g=r}I(Ze,ya),Ze.prototype.ua=function(){Mt(this.g,"a")},Ze.prototype.ta=function(r){Mt(this.g,new va(r))},Ze.prototype.sa=function(r){Mt(this.g,new ba)},Ze.prototype.ra=function(){Mt(this.g,"b")},Ri.prototype.createWebChannel=Ri.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,jl=function(){return new Ri},Ol=function(){return mi()},Ml=Be,sr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gi.NO_ERROR=0,gi.TIMEOUT=8,gi.HTTP_ERROR=6,Ni=gi,Ns.COMPLETE="complete",Fl=Ns,ks.EventType=_n,_n.OPEN="a",_n.CLOSE="b",_n.ERROR="c",_n.MESSAGE="d",Dt.prototype.listen=Dt.prototype.K,Fn=ks,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,zl=ht}).apply(typeof ki<"u"?ki:typeof self<"u"?self:typeof window<"u"?window:{});const Pa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new kl("@firebase/firestore");function zn(){return je.logLevel}function Q(n,...t){if(je.logLevel<=it.DEBUG){const e=t.map(Rr);je.debug(`Firestore (${yn}): ${n}`,...e)}}function fe(n,...t){if(je.logLevel<=it.ERROR){const e=t.map(Rr);je.error(`Firestore (${yn}): ${n}`,...e)}}function ln(n,...t){if(je.logLevel<=it.WARN){const e=t.map(Rr);je.warn(`Firestore (${yn}): ${n}`,...e)}}function Rr(n){if(typeof n=="string")return n;try{/**
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
 */function X(n="Unexpected state"){const t=`FIRESTORE (${yn}) INTERNAL ASSERTION FAILED: `+n;throw fe(t),new Error(t)}function ot(n,t){n||X()}function Y(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends gn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Lt.UNAUTHENTICATED))}shutdown(){}}class Np{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Lp{constructor(t){this.t=t,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ot(this.o===void 0);let i=this.i;const o=c=>this.i!==i?(i=this.i,e(c)):Promise.resolve();let s=new se;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new se,t.enqueueRetryable(()=>o(this.currentUser))};const a=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await o(this.currentUser)})},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new se)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ot(typeof i.accessToken=="string"),new ql(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ot(t===null||typeof t=="string"),new Lt(t)}}class zp{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fp{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new zp(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Op{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){ot(this.o===void 0);const i=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const o=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>o(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?o(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ot(typeof e.token=="string"),this.R=e.token,new Mp(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function jp(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const o=jp(40);for(let s=0;s<o.length;++s)i.length<20&&o[s]<e&&(i+=t.charAt(o[s]%t.length))}return i}}function st(n,t){return n<t?-1:n>t?1:0}function dn(n,t,e){return n.length===t.length&&n.every((i,o)=>e(i,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return wt.fromMillis(Date.now())}static fromDate(t){return wt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new wt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?st(this.nanoseconds,t.nanoseconds):st(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Z(t)}static min(){return new Z(new wt(0,0))}static max(){return new Z(new wt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e,i){e===void 0?e=0:e>t.length&&X(),i===void 0?i=t.length-e:i>t.length-e&&X(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Gn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Gn?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let o=0;o<i;o++){const s=t.get(o),a=e.get(o);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ct extends Gn{construct(t,e,i){return new ct(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(o=>o.length>0))}return new ct(e)}static emptyPath(){return new ct([])}}const qp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Gn{construct(t,e,i){return new Rt(t,e,i)}static isValidIdentifier(t){return qp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(t){const e=[];let i="",o=0;const s=()=>{if(i.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let a=!1;for(;o<t.length;){const l=t[o];if(l==="\\"){if(o+1===t.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[o+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=c,o+=2}else l==="`"?(a=!a,o++):l!=="."||a?(i+=l,o++):(s(),o++)}if(s(),a)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Rt(e)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.path=t}static fromPath(t){return new K(ct.fromString(t))}static fromName(t){return new K(ct.fromString(t).popFirst(5))}static empty(){return new K(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ct.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ct.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new K(new ct(t.slice()))}}function Hp(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Z.fromTimestamp(i===1e9?new wt(e+1,0):new wt(e,i));return new Te(o,K.empty(),t)}function Up(n){return new Te(n.readTime,n.key,-1)}class Te{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Te(Z.min(),K.empty(),-1)}static max(){return new Te(Z.max(),K.empty(),-1)}}function $p(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=K.comparator(n.documentKey,t.documentKey),e!==0?e:st(n.largestBatchId,t.largestBatchId))}/**
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
 */const Qp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==Qp)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new F((i,o)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,o)},this.catchCallback=s=>{this.wrapFailure(e,s).next(i,o)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof F?e:F.resolve(e)}catch(e){return F.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):F.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):F.reject(e)}static resolve(t){return new F((e,i)=>{e(t)})}static reject(t){return new F((e,i)=>{i(t)})}static waitFor(t){return new F((e,i)=>{let o=0,s=0,a=!1;t.forEach(l=>{++o,l.next(()=>{++s,a&&s===o&&e()},c=>i(c))}),a=!0,s===o&&e()})}static or(t){let e=F.resolve(!1);for(const i of t)e=e.next(o=>o?F.resolve(o):i());return e}static forEach(t,e){const i=[];return t.forEach((o,s)=>{i.push(e.call(this,o,s))}),this.waitFor(i)}static mapArray(t,e){return new F((i,o)=>{const s=t.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const p=c;e(t[p]).next(w=>{a[p]=w,++l,l===s&&i(a)},w=>o(w))}})}static doWhile(t,e){return new F((i,o)=>{const s=()=>{t()===!0?e().next(()=>{s()},o):i()};s()})}}function Gp(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ri(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Sr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Sr.oe=-1;function si(n){return n==null}function Ui(n){return n===0&&1/n==-1/0}function Kp(n){return typeof n=="number"&&Number.isInteger(n)&&!Ui(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function $e(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ul(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e){this.comparator=t,this.root=e||Ct.EMPTY}insert(t,e){return new pt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(t){return new pt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(t,i.key);if(o===0)return e+i.left.size;o<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pi(this.root,t,this.comparator,!0)}}class Pi{constructor(t,e,i,o){this.isReverse=o,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,e&&o&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ct{constructor(t,e,i,o,s){this.key=t,this.value=e,this.color=i??Ct.RED,this.left=o??Ct.EMPTY,this.right=s??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,o,s){return new Ct(t??this.key,e??this.value,i??this.color,o??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let o=this;const s=i(t,o.key);return o=s<0?o.copy(null,null,null,o.left.insert(t,e,i),null):s===0?o.copy(null,e,null,null,null):o.copy(null,null,null,null,o.right.insert(t,e,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,o=this;if(e(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,e),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),e(t,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,e))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const t=this.left.check();if(t!==this.right.check())throw X();return t+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,i,o,s){return this}insert(t,e,i){return new Ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.comparator=t,this.data=new pt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,t[1])>=0)return;e(o.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Va(this.data.getIterator())}getIteratorFrom(t){return new Va(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof St)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const o=e.getNext().key,s=i.getNext().key;if(this.comparator(o,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new St(this.comparator);return e.data=t,e}}class Va{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(t){this.fields=t,t.sort(Rt.comparator)}static empty(){return new Gt([])}unionWith(t){let e=new St(Rt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Gt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return dn(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class $l extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(o){try{return atob(o)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $l("Invalid base64 string: "+s):s}}(t);return new Pt(e)}static fromUint8Array(t){const e=function(o){let s="";for(let a=0;a<o.length;++a)s+=String.fromCharCode(o[a]);return s}(t);return new Pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let o=0;o<e.length;o++)i[o]=e.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return st(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const Xp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ce(n){if(ot(!!n),typeof n=="string"){let t=0;const e=Xp.exec(n);if(ot(!!e),e[1]){let o=e[1];o=(o+"000000000").substr(0,9),t=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qe(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
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
 */function kr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Pr(n){const t=n.mapValue.fields.__previous_value__;return kr(t)?Pr(t):t}function Kn(n){const t=Ce(n.mapValue.fields.__local_write_time__.timestampValue);return new wt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,e,i,o,s,a,l,c,p){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=o,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=p}}class Xn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Xn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Di={mapValue:{}};function He(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?kr(n)?4:Yp(n)?9007199254740991:Zp(n)?10:11:X()}function le(n,t){if(n===t)return!0;const e=He(n);if(e!==He(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Kn(n).isEqual(Kn(t));case 3:return function(o,s){if(typeof o.timestampValue=="string"&&typeof s.timestampValue=="string"&&o.timestampValue.length===s.timestampValue.length)return o.timestampValue===s.timestampValue;const a=Ce(o.timestampValue),l=Ce(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(o,s){return qe(o.bytesValue).isEqual(qe(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(o,s){return mt(o.geoPointValue.latitude)===mt(s.geoPointValue.latitude)&&mt(o.geoPointValue.longitude)===mt(s.geoPointValue.longitude)}(n,t);case 2:return function(o,s){if("integerValue"in o&&"integerValue"in s)return mt(o.integerValue)===mt(s.integerValue);if("doubleValue"in o&&"doubleValue"in s){const a=mt(o.doubleValue),l=mt(s.doubleValue);return a===l?Ui(a)===Ui(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return dn(n.arrayValue.values||[],t.arrayValue.values||[],le);case 10:case 11:return function(o,s){const a=o.mapValue.fields||{},l=s.mapValue.fields||{};if(Da(a)!==Da(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!le(a[c],l[c])))return!1;return!0}(n,t);default:return X()}}function Jn(n,t){return(n.values||[]).find(e=>le(e,t))!==void 0}function cn(n,t){if(n===t)return 0;const e=He(n),i=He(t);if(e!==i)return st(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return st(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=mt(s.integerValue||s.doubleValue),c=mt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,t);case 3:return Ba(n.timestampValue,t.timestampValue);case 4:return Ba(Kn(n),Kn(t));case 5:return st(n.stringValue,t.stringValue);case 6:return function(s,a){const l=qe(s),c=qe(a);return l.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let p=0;p<l.length&&p<c.length;p++){const w=st(l[p],c[p]);if(w!==0)return w}return st(l.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=st(mt(s.latitude),mt(a.latitude));return l!==0?l:st(mt(s.longitude),mt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Na(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,c,p,w;const f=s.fields||{},g=a.fields||{},b=(l=f.value)===null||l===void 0?void 0:l.arrayValue,I=(c=g.value)===null||c===void 0?void 0:c.arrayValue,T=st(((p=b==null?void 0:b.values)===null||p===void 0?void 0:p.length)||0,((w=I==null?void 0:I.values)===null||w===void 0?void 0:w.length)||0);return T!==0?T:Na(b,I)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===Di.mapValue&&a===Di.mapValue)return 0;if(s===Di.mapValue)return 1;if(a===Di.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),p=a.fields||{},w=Object.keys(p);c.sort(),w.sort();for(let f=0;f<c.length&&f<w.length;++f){const g=st(c[f],w[f]);if(g!==0)return g;const b=cn(l[c[f]],p[w[f]]);if(b!==0)return b}return st(c.length,w.length)}(n.mapValue,t.mapValue);default:throw X()}}function Ba(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return st(n,t);const e=Ce(n),i=Ce(t),o=st(e.seconds,i.seconds);return o!==0?o:st(e.nanos,i.nanos)}function Na(n,t){const e=n.values||[],i=t.values||[];for(let o=0;o<e.length&&o<i.length;++o){const s=cn(e[o],i[o]);if(s)return s}return st(e.length,i.length)}function un(n){return ar(n)}function ar(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=Ce(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return qe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return K.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",o=!0;for(const s of e.values||[])o?o=!1:i+=",",i+=ar(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let o="{",s=!0;for(const a of i)s?s=!1:o+=",",o+=`${a}:${ar(e.fields[a])}`;return o+"}"}(n.mapValue):X()}function La(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function lr(n){return!!n&&"integerValue"in n}function Dr(n){return!!n&&"arrayValue"in n}function za(n){return!!n&&"nullValue"in n}function Fa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Li(n){return!!n&&"mapValue"in n}function Zp(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function jn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return $e(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=jn(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=jn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Yp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.value=t}static empty(){return new jt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Li(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=jn(e)}setAll(t){let e=Rt.emptyPath(),i={},o=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const c=this.getFieldsMap(e);this.applyChanges(c,i,o),i={},o=[],e=l.popLast()}a?i[l.lastSegment()]=jn(a):o.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,i,o)}delete(t){const e=this.field(t.popLast());Li(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return le(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let o=e.mapValue.fields[t.get(i)];Li(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=o),e=o}return e.mapValue.fields}applyChanges(t,e,i){$e(e,(o,s)=>t[o]=s);for(const o of i)delete t[o]}clone(){return new jt(jn(this.value))}}function Ql(n){const t=[];return $e(n.fields,(e,i)=>{const o=new Rt([e]);if(Li(i)){const s=Ql(i.mapValue).fields;if(s.length===0)t.push(o);else for(const a of s)t.push(o.child(a))}else t.push(o)}),new Gt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,i,o,s,a,l){this.key=t,this.documentType=e,this.version=i,this.readTime=o,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,Z.min(),Z.min(),Z.min(),jt.empty(),0)}static newFoundDocument(t,e,i,o){return new _t(t,1,e,Z.min(),i,o,0)}static newNoDocument(t,e){return new _t(t,2,e,Z.min(),Z.min(),jt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,Z.min(),Z.min(),jt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $i{constructor(t,e){this.position=t,this.inclusive=e}}function Ma(n,t,e){let i=0;for(let o=0;o<n.position.length;o++){const s=t[o],a=n.position[o];if(s.field.isKeyField()?i=K.comparator(K.fromName(a.referenceValue),e.key):i=cn(a,e.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Oa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!le(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Zn{constructor(t,e="asc"){this.field=t,this.dir=e}}function th(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Wl{}class vt extends Wl{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new nh(t,e,i):e==="array-contains"?new rh(t,i):e==="in"?new sh(t,i):e==="not-in"?new ah(t,i):e==="array-contains-any"?new lh(t,i):new vt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new ih(t,i):new oh(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(cn(e,this.value)):e!==null&&He(this.value)===He(e)&&this.matchesComparison(cn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends Wl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Yt(t,e)}matches(t){return Gl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gl(n){return n.op==="and"}function Kl(n){return eh(n)&&Gl(n)}function eh(n){for(const t of n.filters)if(t instanceof Yt)return!1;return!0}function dr(n){if(n instanceof vt)return n.field.canonicalString()+n.op.toString()+un(n.value);if(Kl(n))return n.filters.map(t=>dr(t)).join(",");{const t=n.filters.map(e=>dr(e)).join(",");return`${n.op}(${t})`}}function Xl(n,t){return n instanceof vt?function(i,o){return o instanceof vt&&i.op===o.op&&i.field.isEqual(o.field)&&le(i.value,o.value)}(n,t):n instanceof Yt?function(i,o){return o instanceof Yt&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((s,a,l)=>s&&Xl(a,o.filters[l]),!0):!1}(n,t):void X()}function Jl(n){return n instanceof vt?function(e){return`${e.field.canonicalString()} ${e.op} ${un(e.value)}`}(n):n instanceof Yt?function(e){return e.op.toString()+" {"+e.getFilters().map(Jl).join(" ,")+"}"}(n):"Filter"}class nh extends vt{constructor(t,e,i){super(t,e,i),this.key=K.fromName(i.referenceValue)}matches(t){const e=K.comparator(t.key,this.key);return this.matchesComparison(e)}}class ih extends vt{constructor(t,e){super(t,"in",e),this.keys=Zl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class oh extends vt{constructor(t,e){super(t,"not-in",e),this.keys=Zl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Zl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>K.fromName(i.referenceValue))}class rh extends vt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Dr(e)&&Jn(e.arrayValue,this.value)}}class sh extends vt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Jn(this.value.arrayValue,e)}}class ah extends vt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Jn(this.value.arrayValue,e)}}class lh extends vt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Dr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Jn(this.value.arrayValue,i))}}/**
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
 */class dh{constructor(t,e=null,i=[],o=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=o,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function ja(n,t=null,e=[],i=[],o=null,s=null,a=null){return new dh(n,t,e,i,o,s,a)}function Vr(n){const t=Y(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>dr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),si(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>un(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>un(i)).join(",")),t.ue=e}return t.ue}function Br(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!th(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Xl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Oa(n.startAt,t.startAt)&&Oa(n.endAt,t.endAt)}function cr(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e=null,i=[],o=[],s=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=o,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ch(n,t,e,i,o,s,a,l){return new vn(n,t,e,i,o,s,a,l)}function no(n){return new vn(n)}function qa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Yl(n){return n.collectionGroup!==null}function qn(n){const t=Y(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new St(Rt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(p=>{p.isInequality()&&(l=l.add(p.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Zn(s,i))}),e.has(Rt.keyField().canonicalString())||t.ce.push(new Zn(Rt.keyField(),i))}return t.ce}function ae(n){const t=Y(n);return t.le||(t.le=uh(t,qn(n))),t.le}function uh(n,t){if(n.limitType==="F")return ja(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(o=>{const s=o.dir==="desc"?"asc":"desc";return new Zn(o.field,s)});const e=n.endAt?new $i(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new $i(n.startAt.position,n.startAt.inclusive):null;return ja(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function ur(n,t){const e=n.filters.concat([t]);return new vn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function pr(n,t,e){return new vn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function io(n,t){return Br(ae(n),ae(t))&&n.limitType===t.limitType}function td(n){return`${Vr(ae(n))}|lt:${n.limitType}`}function en(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(o=>Jl(o)).join(", ")}]`),si(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(o=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(o)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(o=>un(o)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(o=>un(o)).join(",")),`Target(${i})`}(ae(n))}; limitType=${n.limitType})`}function oo(n,t){return t.isFoundDocument()&&function(i,o){const s=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):K.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,t)&&function(i,o){for(const s of qn(i))if(!s.field.isKeyField()&&o.data.field(s.field)===null)return!1;return!0}(n,t)&&function(i,o){for(const s of i.filters)if(!s.matches(o))return!1;return!0}(n,t)&&function(i,o){return!(i.startAt&&!function(a,l,c){const p=Ma(a,l,c);return a.inclusive?p<=0:p<0}(i.startAt,qn(i),o)||i.endAt&&!function(a,l,c){const p=Ma(a,l,c);return a.inclusive?p>=0:p>0}(i.endAt,qn(i),o))}(n,t)}function ph(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ed(n){return(t,e)=>{let i=!1;for(const o of qn(n)){const s=hh(o,t,e);if(s!==0)return s;i=i||o.field.isKeyField()}return 0}}function hh(n,t,e){const i=n.field.isKeyField()?K.comparator(t.key,e.key):function(s,a,l){const c=a.data.field(s),p=l.data.field(s);return c!==null&&p!==null?cn(c,p):X()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[o,s]of i)if(this.equalsFn(o,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),o=this.inner[i];if(o===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let s=0;s<o.length;s++)if(this.equalsFn(o[s][0],t))return void(o[s]=[t,e]);o.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return i.length===1?delete this.inner[e]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(t){$e(this.inner,(e,i)=>{for(const[o,s]of i)t(o,s)})}isEmpty(){return Ul(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new pt(K.comparator);function me(){return fh}const nd=new pt(K.comparator);function Mn(...n){let t=nd;for(const e of n)t=t.insert(e.key,e);return t}function id(n){let t=nd;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Me(){return Hn()}function od(){return Hn()}function Hn(){return new bn(n=>n.toString(),(n,t)=>n.isEqual(t))}const mh=new pt(K.comparator),gh=new St(K.comparator);function et(...n){let t=gh;for(const e of n)t=t.add(e);return t}const yh=new St(st);function vh(){return yh}/**
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
 */function Nr(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ui(t)?"-0":t}}function rd(n){return{integerValue:""+n}}function bh(n,t){return Kp(t)?rd(t):Nr(n,t)}/**
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
 */class ro{constructor(){this._=void 0}}function xh(n,t,e){return n instanceof Yn?function(o,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return s&&kr(s)&&(s=Pr(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof ti?ad(n,t):n instanceof ei?ld(n,t):function(o,s){const a=sd(o,s),l=Ha(a)+Ha(o.Pe);return lr(a)&&lr(o.Pe)?rd(l):Nr(o.serializer,l)}(n,t)}function wh(n,t,e){return n instanceof ti?ad(n,t):n instanceof ei?ld(n,t):e}function sd(n,t){return n instanceof Qi?function(i){return lr(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class Yn extends ro{}class ti extends ro{constructor(t){super(),this.elements=t}}function ad(n,t){const e=dd(t);for(const i of n.elements)e.some(o=>le(o,i))||e.push(i);return{arrayValue:{values:e}}}class ei extends ro{constructor(t){super(),this.elements=t}}function ld(n,t){let e=dd(t);for(const i of n.elements)e=e.filter(o=>!le(o,i));return{arrayValue:{values:e}}}class Qi extends ro{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ha(n){return mt(n.integerValue||n.doubleValue)}function dd(n){return Dr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e){this.field=t,this.transform=e}}function Eh(n,t){return n.field.isEqual(t.field)&&function(i,o){return i instanceof ti&&o instanceof ti||i instanceof ei&&o instanceof ei?dn(i.elements,o.elements,le):i instanceof Qi&&o instanceof Qi?le(i.Pe,o.Pe):i instanceof Yn&&o instanceof Yn}(n.transform,t.transform)}class Ih{constructor(t,e){this.version=t,this.transformResults=e}}class bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bt}static exists(t){return new bt(void 0,t)}static updateTime(t){return new bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class so{}function cd(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new li(n.key,bt.none()):new ai(n.key,n.data,bt.none());{const e=n.data,i=jt.empty();let o=new St(Rt.comparator);for(let s of t.fields)if(!o.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?i.delete(s):i.set(s,a),o=o.add(s)}return new Se(n.key,i,new Gt(o.toArray()),bt.none())}}function _h(n,t,e){n instanceof ai?function(o,s,a){const l=o.value.clone(),c=$a(o.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Se?function(o,s,a){if(!zi(o.precondition,s))return void s.convertToUnknownDocument(a.version);const l=$a(o.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(ud(o)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):function(o,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Un(n,t,e,i){return n instanceof ai?function(s,a,l,c){if(!zi(s.precondition,a))return l;const p=s.value.clone(),w=Qa(s.fieldTransforms,c,a);return p.setAll(w),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),null}(n,t,e,i):n instanceof Se?function(s,a,l,c){if(!zi(s.precondition,a))return l;const p=Qa(s.fieldTransforms,c,a),w=a.data;return w.setAll(ud(s)),w.setAll(p),a.convertToFoundDocument(a.version,w).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,t,e,i):function(s,a,l){return zi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Th(n,t){let e=null;for(const i of n.fieldTransforms){const o=t.data.field(i.field),s=sd(i.transform,o||null);s!=null&&(e===null&&(e=jt.empty()),e.set(i.field,s))}return e||null}function Ua(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&dn(i,o,(s,a)=>Eh(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ai extends so{constructor(t,e,i,o=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Se extends so{constructor(t,e,i,o,s=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=o,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ud(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function $a(n,t,e){const i=new Map;ot(n.length===e.length);for(let o=0;o<e.length;o++){const s=n[o],a=s.transform,l=t.data.field(s.field);i.set(s.field,wh(a,l,e[o]))}return i}function Qa(n,t,e){const i=new Map;for(const o of n){const s=o.transform,a=e.data.field(o.field);i.set(o.field,xh(s,a,t))}return i}class li extends so{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pd extends so{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e,i,o){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let o=0;o<this.mutations.length;o++){const s=this.mutations[o];s.key.isEqual(t.key)&&_h(s,t,i[o])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Un(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Un(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=od();return this.mutations.forEach(o=>{const s=t.get(o.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(o.key)?null:l;const c=cd(a,l);c!==null&&i.set(o.key,c),a.isValidDocument()||a.convertToNoDocument(Z.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),et())}isEqual(t){return this.batchId===t.batchId&&dn(this.mutations,t.mutations,(e,i)=>Ua(e,i))&&dn(this.baseMutations,t.baseMutations,(e,i)=>Ua(e,i))}}class Lr{constructor(t,e,i,o){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=o}static from(t,e,i){ot(t.mutations.length===i.length);let o=function(){return mh}();const s=t.mutations;for(let a=0;a<s.length;a++)o=o.insert(s[a].key,i[a].version);return new Lr(t,e,i,o)}}/**
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
 */class Rh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Sh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,nt;function hd(n){switch(n){default:return X();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function fd(n){if(n===void 0)return fe("GRPC error has no .code"),L.UNKNOWN;switch(n){case yt.OK:return L.OK;case yt.CANCELLED:return L.CANCELLED;case yt.UNKNOWN:return L.UNKNOWN;case yt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case yt.INTERNAL:return L.INTERNAL;case yt.UNAVAILABLE:return L.UNAVAILABLE;case yt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case yt.NOT_FOUND:return L.NOT_FOUND;case yt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case yt.ABORTED:return L.ABORTED;case yt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case yt.DATA_LOSS:return L.DATA_LOSS;default:return X()}}(nt=yt||(yt={}))[nt.OK=0]="OK",nt[nt.CANCELLED=1]="CANCELLED",nt[nt.UNKNOWN=2]="UNKNOWN",nt[nt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nt[nt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nt[nt.NOT_FOUND=5]="NOT_FOUND",nt[nt.ALREADY_EXISTS=6]="ALREADY_EXISTS",nt[nt.PERMISSION_DENIED=7]="PERMISSION_DENIED",nt[nt.UNAUTHENTICATED=16]="UNAUTHENTICATED",nt[nt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nt[nt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nt[nt.ABORTED=10]="ABORTED",nt[nt.OUT_OF_RANGE=11]="OUT_OF_RANGE",nt[nt.UNIMPLEMENTED=12]="UNIMPLEMENTED",nt[nt.INTERNAL=13]="INTERNAL",nt[nt.UNAVAILABLE=14]="UNAVAILABLE",nt[nt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function kh(){return new TextEncoder}/**
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
 */const Ph=new Oe([4294967295,4294967295],0);function Wa(n){const t=kh().encode(n),e=new Ll;return e.update(t),new Uint8Array(e.digest())}function Ga(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),o=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Oe([e,i],0),new Oe([o,s],0)]}class zr{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new On(`Invalid padding: ${e}`);if(i<0)throw new On(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new On(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new On(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Oe.fromNumber(this.Ie)}Ee(t,e,i){let o=t.add(e.multiply(Oe.fromNumber(i)));return o.compare(Ph)===1&&(o=new Oe([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Wa(t),[i,o]=Ga(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,o,s);if(!this.de(a))return!1}return!0}static create(t,e,i){const o=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new zr(s,o,e);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Wa(t),[i,o]=Ga(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,o,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class On extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,e,i,o,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const o=new Map;return o.set(t,di.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new ao(Z.min(),o,new pt(st),me(),et())}}class di{constructor(t,e,i,o,s){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new di(i,e,et(),et(),et())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e,i,o){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=o}}class md{constructor(t,e){this.targetId=t,this.me=e}}class gd{constructor(t,e,i=Pt.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=o}}class Ka{constructor(){this.fe=0,this.ge=Ja(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=et(),e=et(),i=et();return this.ge.forEach((o,s)=>{switch(s){case 0:t=t.add(o);break;case 2:e=e.add(o);break;case 1:i=i.add(o);break;default:X()}}),new di(this.pe,this.ye,t,e,i)}Ce(){this.we=!1,this.ge=Ja()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ot(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Dh{constructor(t){this.Le=t,this.Be=new Map,this.ke=me(),this.qe=Xa(),this.Qe=new pt(st)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:X()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,o)=>{this.ze(o)&&e(o)})}He(t){const e=t.targetId,i=t.me.count,o=this.Je(e);if(o){const s=o.target;if(cr(s))if(i===0){const a=new K(s.path);this.Ue(e,a,_t.newNoDocument(a,Z.min()))}else ot(i===1);else{const a=this.Ye(e);if(a!==i){const l=this.Ze(t),c=l?this.Xe(l,t,a):1;if(c!==0){this.je(e);const p=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,p)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:s=0}=e;let a,l;try{a=qe(i).toUint8Array()}catch(c){if(c instanceof $l)return ln("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new zr(a,o,s)}catch(c){return ln(c instanceof On?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let o=0;return i.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),o++)}),o}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&cr(l.target)){const c=new K(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,_t.newNoDocument(c,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let i=et();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(c=>{const p=this.Je(c);return!p||p.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const o=new ao(t,e,this.Qe,this.ke,i);return this.ke=me(),this.qe=Xa(),this.Qe=new pt(st),o}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const o=this.Ge(t);this.it(t,e)?o.Fe(e,1):o.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ka,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new St(st),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||Q("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ka),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Xa(){return new pt(K.comparator)}function Ja(){return new pt(K.comparator)}const Vh={asc:"ASCENDING",desc:"DESCENDING"},Bh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nh={and:"AND",or:"OR"};class Lh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function hr(n,t){return n.useProto3Json||si(t)?t:{value:t}}function Wi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function zh(n,t){return Wi(n,t.toTimestamp())}function Kt(n){return ot(!!n),Z.fromTimestamp(function(e){const i=Ce(e);return new wt(i.seconds,i.nanos)}(n))}function Fr(n,t){return fr(n,t).canonicalString()}function fr(n,t){const e=function(o){return new ct(["projects",o.projectId,"databases",o.database])}(n).child("documents");return t===void 0?e:e.child(t)}function vd(n){const t=ct.fromString(n);return ot(Id(t)),t}function Gi(n,t){return Fr(n.databaseId,t.path)}function $n(n,t){const e=vd(t);if(e.get(1)!==n.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new K(xd(e))}function bd(n,t){return Fr(n.databaseId,t)}function Fh(n){const t=vd(n);return t.length===4?ct.emptyPath():xd(t)}function mr(n){return new ct(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xd(n){return ot(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Za(n,t,e){return{name:Gi(n,t),fields:e.value.mapValue.fields}}function Mh(n,t){return"found"in t?function(i,o){ot(!!o.found),o.found.name,o.found.updateTime;const s=$n(i,o.found.name),a=Kt(o.found.updateTime),l=o.found.createTime?Kt(o.found.createTime):Z.min(),c=new jt({mapValue:{fields:o.found.fields}});return _t.newFoundDocument(s,a,l,c)}(n,t):"missing"in t?function(i,o){ot(!!o.missing),ot(!!o.readTime);const s=$n(i,o.missing),a=Kt(o.readTime);return _t.newNoDocument(s,a)}(n,t):X()}function Oh(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:X()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],s=function(p,w){return p.useProto3Json?(ot(w===void 0||typeof w=="string"),Pt.fromBase64String(w||"")):(ot(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Pt.fromUint8Array(w||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(p){const w=p.code===void 0?L.UNKNOWN:fd(p.code);return new q(w,p.message||"")}(a);e=new gd(i,o,s,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const o=$n(n,i.document.name),s=Kt(i.document.updateTime),a=i.document.createTime?Kt(i.document.createTime):Z.min(),l=new jt({mapValue:{fields:i.document.fields}}),c=_t.newFoundDocument(o,s,a,l),p=i.targetIds||[],w=i.removedTargetIds||[];e=new Fi(p,w,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const o=$n(n,i.document),s=i.readTime?Kt(i.readTime):Z.min(),a=_t.newNoDocument(o,s),l=i.removedTargetIds||[];e=new Fi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const o=$n(n,i.document),s=i.removedTargetIds||[];e=new Fi([],s,o,null)}else{if(!("filter"in t))return X();{t.filter;const i=t.filter;i.targetId;const{count:o=0,unchangedNames:s}=i,a=new Sh(o,s),l=i.targetId;e=new md(l,a)}}return e}function wd(n,t){let e;if(t instanceof ai)e={update:Za(n,t.key,t.value)};else if(t instanceof li)e={delete:Gi(n,t.key)};else if(t instanceof Se)e={update:Za(n,t.key,t.data),updateMask:Kh(t.fieldMask)};else{if(!(t instanceof pd))return X();e={verify:Gi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const l=a.transform;if(l instanceof Yn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ti)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ei)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Qi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw X()}(0,i))),t.precondition.isNone||(e.currentDocument=function(o,s){return s.updateTime!==void 0?{updateTime:zh(o,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(n,t.precondition)),e}function jh(n,t){return n&&n.length>0?(ot(t!==void 0),n.map(e=>function(o,s){let a=o.updateTime?Kt(o.updateTime):Kt(s);return a.isEqual(Z.min())&&(a=Kt(s)),new Ih(a,o.transformResults||[])}(e,t))):[]}function qh(n,t){return{documents:[bd(n,t.path)]}}function Hh(n,t){const e={structuredQuery:{}},i=t.path;let o;t.collectionGroup!==null?(o=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=bd(n,o);const s=function(p){if(p.length!==0)return Ed(Yt.create(p,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(p){if(p.length!==0)return p.map(w=>function(g){return{field:nn(g.field),direction:Qh(g.dir)}}(w))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=hr(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(t.endAt)),{_t:e,parent:o}}function Uh(n){let t=Fh(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let o=null;if(i>0){ot(i===1);const w=e.from[0];w.allDescendants?o=w.collectionId:t=t.child(w.collectionId)}let s=[];e.where&&(s=function(f){const g=Ad(f);return g instanceof Yt&&Kl(g)?g.getFilters():[g]}(e.where));let a=[];e.orderBy&&(a=function(f){return f.map(g=>function(I){return new Zn(on(I.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(e.orderBy));let l=null;e.limit&&(l=function(f){let g;return g=typeof f=="object"?f.value:f,si(g)?null:g}(e.limit));let c=null;e.startAt&&(c=function(f){const g=!!f.before,b=f.values||[];return new $i(b,g)}(e.startAt));let p=null;return e.endAt&&(p=function(f){const g=!f.before,b=f.values||[];return new $i(b,g)}(e.endAt)),ch(t,o,a,s,l,"F",c,p)}function $h(n,t){const e=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ad(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=on(e.unaryFilter.field);return vt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=on(e.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=on(e.unaryFilter.field);return vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=on(e.unaryFilter.field);return vt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(n):n.fieldFilter!==void 0?function(e){return vt.create(on(e.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Yt.create(e.compositeFilter.filters.map(i=>Ad(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return X()}}(e.compositeFilter.op))}(n):X()}function Qh(n){return Vh[n]}function Wh(n){return Bh[n]}function Gh(n){return Nh[n]}function nn(n){return{fieldPath:n.canonicalString()}}function on(n){return Rt.fromServerFormat(n.fieldPath)}function Ed(n){return n instanceof vt?function(e){if(e.op==="=="){if(Fa(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NAN"}};if(za(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Fa(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NAN"}};if(za(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nn(e.field),op:Wh(e.op),value:e.value}}}(n):n instanceof Yt?function(e){const i=e.getFilters().map(o=>Ed(o));return i.length===1?i[0]:{compositeFilter:{op:Gh(e.op),filters:i}}}(n):X()}function Kh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Id(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e,i,o,s=Z.min(),a=Z.min(),l=Pt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new we(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new we(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new we(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new we(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.ct=t}}function Jh(n){const t=Uh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pr(t,t.limit,"L"):t}/**
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
 */class Zh{constructor(){this.un=new Yh}addToCollectionParentIndex(t,e){return this.un.add(e),F.resolve()}getCollectionParents(t,e){return F.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return F.resolve()}deleteFieldIndex(t,e){return F.resolve()}deleteAllFieldIndexes(t){return F.resolve()}createTargetIndexes(t,e){return F.resolve()}getDocumentsMatchingTarget(t,e){return F.resolve(null)}getIndexType(t,e){return F.resolve(0)}getFieldIndexes(t,e){return F.resolve([])}getNextCollectionGroupToUpdate(t){return F.resolve(null)}getMinOffset(t,e){return F.resolve(Te.min())}getMinOffsetFromCollectionGroup(t,e){return F.resolve(Te.min())}updateCollectionGroup(t,e,i){return F.resolve()}updateIndexEntries(t,e){return F.resolve()}}class Yh{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),o=this.index[e]||new St(ct.comparator),s=!o.has(i);return this.index[e]=o.add(i),s}has(t){const e=t.lastSegment(),i=t.popLast(),o=this.index[e];return o&&o.has(i)}getEntries(t){return(this.index[t]||new St(ct.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new pn(0)}static kn(){return new pn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.changes=new bn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?F.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ef{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e,i,o){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=o}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(o=>(i=o,this.remoteDocumentCache.getEntry(t,e))).next(o=>(i!==null&&Un(i.mutation,o,Gt.empty(),wt.now()),o))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,et()).next(()=>i))}getLocalViewOfDocuments(t,e,i=et()){const o=Me();return this.populateOverlays(t,o,e).next(()=>this.computeViews(t,e,o,i).next(s=>{let a=Mn();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const i=Me();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,et()))}populateOverlays(t,e,i){const o=[];return i.forEach(s=>{e.has(s)||o.push(s)}),this.documentOverlayCache.getOverlays(t,o).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,i,o){let s=me();const a=Hn(),l=function(){return Hn()}();return e.forEach((c,p)=>{const w=i.get(p.key);o.has(p.key)&&(w===void 0||w.mutation instanceof Se)?s=s.insert(p.key,p):w!==void 0?(a.set(p.key,w.mutation.getFieldMask()),Un(w.mutation,p,w.mutation.getFieldMask(),wt.now())):a.set(p.key,Gt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((p,w)=>a.set(p,w)),e.forEach((p,w)=>{var f;return l.set(p,new ef(w,(f=a.get(p))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(t,e){const i=Hn();let o=new pt((a,l)=>a-l),s=et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(c=>{const p=e.get(c);if(p===null)return;let w=i.get(c)||Gt.empty();w=l.applyToLocalView(p,w),i.set(c,w);const f=(o.get(l.batchId)||et()).add(c);o=o.insert(l.batchId,f)})}).next(()=>{const a=[],l=o.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),p=c.key,w=c.value,f=od();w.forEach(g=>{if(!s.has(g)){const b=cd(e.get(g),i.get(g));b!==null&&f.set(g,b),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,p,f))}return F.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,o){return function(a){return K.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Yl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,o):this.getDocumentsMatchingCollectionQuery(t,e,i,o)}getNextDocuments(t,e,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,o).next(s=>{const a=o-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,o-s.size):F.resolve(Me());let l=-1,c=s;return a.next(p=>F.forEach(p,(w,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(w)?F.resolve():this.remoteDocumentCache.getEntry(t,w).next(g=>{c=c.insert(w,g)}))).next(()=>this.populateOverlays(t,p,s)).next(()=>this.computeViews(t,c,p,et())).next(w=>({batchId:l,changes:id(w)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new K(e)).next(i=>{let o=Mn();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(t,e,i,o){const s=e.collectionGroup;let a=Mn();return this.indexManager.getCollectionParents(t,s).next(l=>F.forEach(l,c=>{const p=function(f,g){return new vn(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,p,i,o).next(w=>{w.forEach((f,g)=>{a=a.insert(f,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,i,o){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,s,o))).next(a=>{s.forEach((c,p)=>{const w=p.getKey();a.get(w)===null&&(a=a.insert(w,_t.newInvalidDocument(w)))});let l=Mn();return a.forEach((c,p)=>{const w=s.get(c);w!==void 0&&Un(w.mutation,p,Gt.empty(),wt.now()),oo(e,p)&&(l=l.insert(c,p))}),l})}}/**
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
 */class of{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return F.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(o){return{id:o.id,version:o.version,createTime:Kt(o.createTime)}}(e)),F.resolve()}getNamedQuery(t,e){return F.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(o){return{name:o.name,query:Jh(o.bundledQuery),readTime:Kt(o.readTime)}}(e)),F.resolve()}}/**
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
 */class rf{constructor(){this.overlays=new pt(K.comparator),this.Ir=new Map}getOverlay(t,e){return F.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Me();return F.forEach(e,o=>this.getOverlay(t,o).next(s=>{s!==null&&i.set(o,s)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((o,s)=>{this.ht(t,e,s)}),F.resolve()}removeOverlaysForBatchId(t,e,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),F.resolve()}getOverlaysForCollection(t,e,i){const o=Me(),s=e.length+1,a=new K(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,p=c.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===s&&c.largestBatchId>i&&o.set(c.getKey(),c)}return F.resolve(o)}getOverlaysForCollectionGroup(t,e,i,o){let s=new pt((p,w)=>p-w);const a=this.overlays.getIterator();for(;a.hasNext();){const p=a.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>i){let w=s.get(p.largestBatchId);w===null&&(w=Me(),s=s.insert(p.largestBatchId,w)),w.set(p.getKey(),p)}}const l=Me(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((p,w)=>l.set(p,w)),!(l.size()>=o)););return F.resolve(l)}ht(t,e,i){const o=this.overlays.get(i.key);if(o!==null){const a=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new Rh(e,i));let s=this.Ir.get(e);s===void 0&&(s=et(),this.Ir.set(e,s)),this.Ir.set(e,s.add(i.key))}}/**
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
 */class sf{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(t){return F.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.Tr=new St(Et.Er),this.dr=new St(Et.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new Et(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new Et(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new K(new ct([])),i=new Et(e,t),o=new Et(e,t+1),s=[];return this.dr.forEachInRange([i,o],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new K(new ct([])),i=new Et(e,t),o=new Et(e,t+1);let s=et();return this.dr.forEachInRange([i,o],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new Et(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Et{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return K.comparator(t.key,e.key)||st(t.wr,e.wr)}static Ar(t,e){return st(t.wr,e.wr)||K.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new St(Et.Er)}checkEmpty(t){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,o){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ch(s,e,i,o);this.mutationQueue.push(a);for(const l of o)this.br=this.br.add(new Et(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(t,e){return F.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,o=this.vr(i),s=o<0?0:o;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Et(e,0),o=new Et(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,o],a=>{const l=this.Dr(a.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new St(st);return e.forEach(o=>{const s=new Et(o,0),a=new Et(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{i=i.add(l.wr)})}),F.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,o=i.length+1;let s=i;K.isDocumentKey(s)||(s=s.child(""));const a=new Et(new K(s),0);let l=new St(st);return this.br.forEachWhile(c=>{const p=c.key.path;return!!i.isPrefixOf(p)&&(p.length===o&&(l=l.add(c.wr)),!0)},a),F.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(i=>{const o=this.Dr(i);o!==null&&e.push(o)}),e}removeMutationBatch(t,e){ot(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return F.forEach(e.mutations,o=>{const s=new Et(o.key,e.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new Et(e,0),o=this.br.firstAfterOrEqual(i);return F.resolve(e.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,F.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t){this.Mr=t,this.docs=function(){return new pt(K.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,o=this.docs.get(i),s=o?o.size:0,a=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return F.resolve(i?i.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let i=me();return e.forEach(o=>{const s=this.docs.get(o);i=i.insert(o,s?s.document.mutableCopy():_t.newInvalidDocument(o))}),F.resolve(i)}getDocumentsMatchingQuery(t,e,i,o){let s=me();const a=e.path,l=new K(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:p,value:{document:w}}=c.getNext();if(!a.isPrefixOf(p.path))break;p.path.length>a.length+1||$p(Up(w),i)<=0||(o.has(w.key)||oo(e,w))&&(s=s.insert(w.key,w.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(t,e,i,o){X()}Or(t,e){return F.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new df(this)}getSize(t){return F.resolve(this.size)}}class df extends tf{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?e.push(this.cr.addEntry(t,o)):this.cr.removeEntry(i)}),F.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.persistence=t,this.Nr=new bn(e=>Vr(e),Br),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Mr,this.targetCount=0,this.kr=pn.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,o)=>e(o)),F.resolve()}getLastRemoteSnapshotVersion(t){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return F.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),F.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new pn(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,F.resolve()}updateTargetData(t,e){return this.Kn(e),F.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,F.resolve()}removeTargets(t,e,i){let o=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&i.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),o++)}),F.waitFor(s).next(()=>o)}getTargetCount(t){return F.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return F.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),F.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const o=this.persistence.referenceDelegate,s=[];return o&&e.forEach(a=>{s.push(o.markPotentiallyOrphaned(t,a))}),F.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),F.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return F.resolve(i)}containsKey(t,e){return F.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Sr(0),this.Kr=!1,this.Kr=!0,this.$r=new sf,this.referenceDelegate=t(this),this.Ur=new cf(this),this.indexManager=new Zh,this.remoteDocumentCache=function(o){return new lf(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new Xh(e),this.Gr=new of(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new rf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new af(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){Q("MemoryPersistence","Starting transaction:",t);const o=new pf(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(s=>this.referenceDelegate.jr(o).next(()=>s)).toPromise().then(s=>(o.raiseOnCommittedEvent(),s))}Hr(t,e){return F.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class pf extends Wp{constructor(t){super(),this.currentSequenceNumber=t}}class Or{constructor(t){this.persistence=t,this.Jr=new Mr,this.Yr=null}static Zr(t){return new Or(t)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),F.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),F.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),F.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(o=>{o.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,i=>{const o=K.fromPath(i);return this.ei(t,o).next(s=>{s||e.removeEntry(o,Z.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return F.or([()=>F.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e,i,o){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=o}static Wi(t,e){let i=et(),o=et();for(const s of e.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:o=o.add(s.doc.key)}return new jr(t,e.fromCache,i,o)}}/**
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
 */class ff{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gu()?8:Gp(fu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,o){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,o,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new hf;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,i,o){return i.documentReadCount<this.ji?(zn()<=it.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",en(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(zn()<=it.DEBUG&&Q("QueryEngine","Query:",en(e),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(zn()<=it.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",en(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ae(e))):F.resolve())}Yi(t,e){if(qa(e))return F.resolve(null);let i=ae(e);return this.indexManager.getIndexType(t,i).next(o=>o===0?null:(e.limit!==null&&o===1&&(e=pr(e,null,"F"),i=ae(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=et(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(c=>{const p=this.ts(e,l);return this.ns(e,p,a,c.readTime)?this.Yi(t,pr(e,null,"F")):this.rs(t,p,e,c)}))})))}Zi(t,e,i,o){return qa(e)||o.isEqual(Z.min())?F.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const a=this.ts(e,s);return this.ns(e,a,i,o)?F.resolve(null):(zn()<=it.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),en(e)),this.rs(t,a,e,Hp(o,-1)).next(l=>l))})}ts(t,e){let i=new St(ed(t));return e.forEach((o,s)=>{oo(t,s)&&(i=i.add(s))}),i}ns(t,e,i,o){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(o)>0)}Xi(t,e,i){return zn()<=it.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",en(e)),this.Ji.getDocumentsMatchingQuery(t,e,Te.min(),i)}rs(t,e,i,o){return this.Ji.getDocumentsMatchingQuery(t,i,o).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class mf{constructor(t,e,i,o){this.persistence=t,this.ss=e,this.serializer=o,this.os=new pt(st),this._s=new bn(s=>Vr(s),Br),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function gf(n,t,e,i){return new mf(n,t,e,i)}async function _d(n,t){const e=Y(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let o;return e.mutationQueue.getAllMutationBatches(i).next(s=>(o=s,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],l=[];let c=et();for(const p of o){a.push(p.batchId);for(const w of p.mutations)c=c.add(w.key)}for(const p of s){l.push(p.batchId);for(const w of p.mutations)c=c.add(w.key)}return e.localDocuments.getDocuments(i,c).next(p=>({hs:p,removedBatchIds:a,addedBatchIds:l}))})})}function yf(n,t){const e=Y(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,p,w){const f=p.batch,g=f.keys();let b=F.resolve();return g.forEach(I=>{b=b.next(()=>w.getEntry(c,I)).next(T=>{const _=p.docVersions.get(I);ot(_!==null),T.version.compareTo(_)<0&&(f.applyToRemoteDocument(T,p),T.isValidDocument()&&(T.setReadTime(p.commitVersion),w.addEntry(T)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(e,i,t,s).next(()=>s.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,o,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let c=et();for(let p=0;p<l.mutationResults.length;++p)l.mutationResults[p].transformResults.length>0&&(c=c.add(l.batch.mutations[p].key));return c}(t))).next(()=>e.localDocuments.getDocuments(i,o))})}function Td(n){const t=Y(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function vf(n,t){const e=Y(n),i=t.snapshotVersion;let o=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});o=e.os;const l=[];t.targetChanges.forEach((w,f)=>{const g=o.get(f);if(!g)return;l.push(e.Ur.removeMatchingKeys(s,w.removedDocuments,f).next(()=>e.Ur.addMatchingKeys(s,w.addedDocuments,f)));let b=g.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?b=b.withResumeToken(Pt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):w.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(w.resumeToken,i)),o=o.insert(f,b),function(T,_,D){return T.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(g,b,w)&&l.push(e.Ur.updateTargetData(s,b))});let c=me(),p=et();if(t.documentUpdates.forEach(w=>{t.resolvedLimboDocuments.has(w)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,w))}),l.push(bf(s,a,t.documentUpdates).next(w=>{c=w.Ps,p=w.Is})),!i.isEqual(Z.min())){const w=e.Ur.getLastRemoteSnapshotVersion(s).next(f=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));l.push(w)}return F.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,p)).next(()=>c)}).then(s=>(e.os=o,s))}function bf(n,t,e){let i=et(),o=et();return e.forEach(s=>i=i.add(s)),t.getEntries(n,i).next(s=>{let a=me();return e.forEach((l,c)=>{const p=s.get(l);c.isFoundDocument()!==p.isFoundDocument()&&(o=o.add(l)),c.isNoDocument()&&c.version.isEqual(Z.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!p.isValidDocument()||c.version.compareTo(p.version)>0||c.version.compareTo(p.version)===0&&p.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):Q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",p.version," Watch version:",c.version)}),{Ps:a,Is:o}})}function xf(n,t){const e=Y(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function wf(n,t){const e=Y(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return e.Ur.getTargetData(i,t).next(s=>s?(o=s,F.resolve(o)):e.Ur.allocateTargetId(i).next(a=>(o=new we(t,a,"TargetPurposeListen",i.currentSequenceNumber),e.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=e.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(e.os=e.os.insert(i.targetId,i),e._s.set(t,i.targetId)),i})}async function gr(n,t,e){const i=Y(n),o=i.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,o))}catch(a){if(!ri(a))throw a;Q("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(o.target)}function Ya(n,t,e){const i=Y(n);let o=Z.min(),s=et();return i.persistence.runTransaction("Execute query","readwrite",a=>function(c,p,w){const f=Y(c),g=f._s.get(w);return g!==void 0?F.resolve(f.os.get(g)):f.Ur.getTargetData(p,w)}(i,a,ae(t)).next(l=>{if(l)return o=l.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{s=c})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,e?o:Z.min(),e?s:et())).next(l=>(Af(i,ph(t),l),{documents:l,Ts:s})))}function Af(n,t,e){let i=n.us.get(t)||Z.min();e.forEach((o,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.us.set(t,i)}class tl{constructor(){this.activeTargetIds=vh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ef{constructor(){this.so=new tl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new tl,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class If{_o(t){}shutdown(){}}/**
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
 */class el{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vi=null;function Go(){return Vi===null?Vi=function(){return 268435456+Math.round(2147483648*Math.random())}():Vi++,"0x"+Vi.toString(16)}/**
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
 */class Tf{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="WebChannelConnection";class Cf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${o}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${s}`}get Fo(){return!1}Mo(e,i,o,s,a){const l=Go(),c=this.xo(e,i.toUriEncodedString());Q("RestConnection",`Sending RPC '${e}' ${l}:`,c,o);const p={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(p,s,a),this.No(e,c,p,o).then(w=>(Q("RestConnection",`Received RPC '${e}' ${l}: `,w),w),w=>{throw ln("RestConnection",`RPC '${e}' ${l} failed with error: `,w,"url: ",c,"request:",o),w})}Lo(e,i,o,s,a,l){return this.Mo(e,i,o,s,a)}Oo(e,i,o){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>e[a]=s),o&&o.headers.forEach((s,a)=>e[a]=s)}xo(e,i){const o=_f[e];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,o){const s=Go();return new Promise((a,l)=>{const c=new zl;c.setWithCredentials(!0),c.listenOnce(Fl.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ni.NO_ERROR:const w=c.getResponseJson();Q(Nt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(w)),a(w);break;case Ni.TIMEOUT:Q(Nt,`RPC '${t}' ${s} timed out`),l(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ni.HTTP_ERROR:const f=c.getStatus();if(Q(Nt,`RPC '${t}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const b=g==null?void 0:g.error;if(b&&b.status&&b.message){const I=function(_){const D=_.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(D)>=0?D:L.UNKNOWN}(b.status);l(new q(I,b.message))}else l(new q(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new q(L.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{Q(Nt,`RPC '${t}' ${s} completed.`)}});const p=JSON.stringify(o);Q(Nt,`RPC '${t}' ${s} sending request:`,o),c.send(e,"POST",p,i,15)})}Bo(t,e,i){const o=Go(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=jl(),l=Ol(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(c.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,i),c.encodeInitMessageHeaders=!0;const w=s.join("");Q(Nt,`Creating RPC '${t}' stream ${o}: ${w}`,c);const f=a.createWebChannel(w,c);let g=!1,b=!1;const I=new Tf({Io:_=>{b?Q(Nt,`Not sending because RPC '${t}' stream ${o} is closed:`,_):(g||(Q(Nt,`Opening RPC '${t}' stream ${o} transport.`),f.open(),g=!0),Q(Nt,`RPC '${t}' stream ${o} sending:`,_),f.send(_))},To:()=>f.close()}),T=(_,D,B)=>{_.listen(D,P=>{try{B(P)}catch(O){setTimeout(()=>{throw O},0)}})};return T(f,Fn.EventType.OPEN,()=>{b||(Q(Nt,`RPC '${t}' stream ${o} transport opened.`),I.yo())}),T(f,Fn.EventType.CLOSE,()=>{b||(b=!0,Q(Nt,`RPC '${t}' stream ${o} transport closed`),I.So())}),T(f,Fn.EventType.ERROR,_=>{b||(b=!0,ln(Nt,`RPC '${t}' stream ${o} transport errored:`,_),I.So(new q(L.UNAVAILABLE,"The operation could not be completed")))}),T(f,Fn.EventType.MESSAGE,_=>{var D;if(!b){const B=_.data[0];ot(!!B);const P=B,O=P.error||((D=P[0])===null||D===void 0?void 0:D.error);if(O){Q(Nt,`RPC '${t}' stream ${o} received error:`,O);const z=O.status;let H=function(y){const m=yt[y];if(m!==void 0)return fd(m)}(z),R=O.message;H===void 0&&(H=L.INTERNAL,R="Unknown error status: "+z+" with message "+O.message),b=!0,I.So(new q(H,R)),f.close()}else Q(Nt,`RPC '${t}' stream ${o} received:`,B),I.bo(B)}}),T(l,Ml.STAT_EVENT,_=>{_.stat===sr.PROXY?Q(Nt,`RPC '${t}' stream ${o} detected buffering proxy`):_.stat===sr.NOPROXY&&Q(Nt,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function Ko(){return typeof document<"u"?document:null}/**
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
 */function lo(n){return new Lh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e,i=1e3,o=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=o,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,e-i);o>0&&Q("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e,i,o,s,a,l,c){this.ui=t,this.Ho=i,this.Jo=o,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new qr(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===L.RESOURCE_EXHAUSTED?(fe(e.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===e&&this.P_(i,o)},i=>{t(()=>{const o=new q(L.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return Q("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rf extends Cd{constructor(t,e,i,o,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,o,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Oh(this.serializer,t),i=function(s){if(!("targetChange"in s))return Z.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Z.min():a.readTime?Kt(a.readTime):Z.min()}(t);return this.listener.d_(e,i)}A_(t){const e={};e.database=mr(this.serializer),e.addTarget=function(s,a){let l;const c=a.target;if(l=cr(c)?{documents:qh(s,c)}:{query:Hh(s,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=yd(s,a.resumeToken);const p=hr(s,a.expectedCount);p!==null&&(l.expectedCount=p)}else if(a.snapshotVersion.compareTo(Z.min())>0){l.readTime=Wi(s,a.snapshotVersion.toTimestamp());const p=hr(s,a.expectedCount);p!==null&&(l.expectedCount=p)}return l}(this.serializer,t);const i=$h(this.serializer,t);i&&(e.labels=i),this.a_(e)}R_(t){const e={};e.database=mr(this.serializer),e.removeTarget=t,this.a_(e)}}class Sf extends Cd{constructor(t,e,i,o,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,o,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return ot(!!t.streamToken),this.lastStreamToken=t.streamToken,ot(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){ot(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=jh(t.writeResults,t.commitTime),i=Kt(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=mr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>wd(this.serializer,i))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends class{}{constructor(t,e,i,o){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,fr(e,i),o,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(L.UNKNOWN,s.toString())})}Lo(t,e,i,o,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,fr(e,i),o,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(L.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Pf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fe(e),this.D_=!1):Q("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,e,i,o,s){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{i.enqueueAndForget(async()=>{Qe(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const p=Y(c);p.L_.add(4),await ci(p),p.q_.set("Unknown"),p.L_.delete(4),await co(p)}(this))})}),this.q_=new Pf(i,o)}}async function co(n){if(Qe(n))for(const t of n.B_)await t(!0)}async function ci(n){for(const t of n.B_)await t(!1)}function Rd(n,t){const e=Y(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Qr(e)?$r(e):xn(e).r_()&&Ur(e,t))}function Hr(n,t){const e=Y(n),i=xn(e);e.N_.delete(t),i.r_()&&Sd(e,t),e.N_.size===0&&(i.r_()?i.o_():Qe(e)&&e.q_.set("Unknown"))}function Ur(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Z.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}xn(n).A_(t)}function Sd(n,t){n.Q_.xe(t),xn(n).R_(t)}function $r(n){n.Q_=new Dh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),xn(n).start(),n.q_.v_()}function Qr(n){return Qe(n)&&!xn(n).n_()&&n.N_.size>0}function Qe(n){return Y(n).L_.size===0}function kd(n){n.Q_=void 0}async function Vf(n){n.q_.set("Online")}async function Bf(n){n.N_.forEach((t,e)=>{Ur(n,t)})}async function Nf(n,t){kd(n),Qr(n)?(n.q_.M_(t),$r(n)):n.q_.set("Unknown")}async function Lf(n,t,e){if(n.q_.set("Online"),t instanceof gd&&t.state===2&&t.cause)try{await async function(o,s){const a=s.cause;for(const l of s.targetIds)o.N_.has(l)&&(await o.remoteSyncer.rejectListen(l,a),o.N_.delete(l),o.Q_.removeTarget(l))}(n,t)}catch(i){Q("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Ki(n,i)}else if(t instanceof Fi?n.Q_.Ke(t):t instanceof md?n.Q_.He(t):n.Q_.We(t),!e.isEqual(Z.min()))try{const i=await Td(n.localStore);e.compareTo(i)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((c,p)=>{if(c.resumeToken.approximateByteSize()>0){const w=s.N_.get(p);w&&s.N_.set(p,w.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,p)=>{const w=s.N_.get(c);if(!w)return;s.N_.set(c,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),Sd(s,c);const f=new we(w.target,c,p,w.sequenceNumber);Ur(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(i){Q("RemoteStore","Failed to raise snapshot:",i),await Ki(n,i)}}async function Ki(n,t,e){if(!ri(t))throw t;n.L_.add(1),await ci(n),n.q_.set("Offline"),e||(e=()=>Td(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await co(n)})}function Pd(n,t){return t().catch(e=>Ki(n,e,t))}async function uo(n){const t=Y(n),e=Re(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;zf(t);)try{const o=await xf(t.localStore,i);if(o===null){t.O_.length===0&&e.o_();break}i=o.batchId,Ff(t,o)}catch(o){await Ki(t,o)}Dd(t)&&Vd(t)}function zf(n){return Qe(n)&&n.O_.length<10}function Ff(n,t){n.O_.push(t);const e=Re(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Dd(n){return Qe(n)&&!Re(n).n_()&&n.O_.length>0}function Vd(n){Re(n).start()}async function Mf(n){Re(n).p_()}async function Of(n){const t=Re(n);for(const e of n.O_)t.m_(e.mutations)}async function jf(n,t,e){const i=n.O_.shift(),o=Lr.from(i,t,e);await Pd(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await uo(n)}async function qf(n,t){t&&Re(n).V_&&await async function(i,o){if(function(a){return hd(a)&&a!==L.ABORTED}(o.code)){const s=i.O_.shift();Re(i).s_(),await Pd(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,o)),await uo(i)}}(n,t),Dd(n)&&Vd(n)}async function nl(n,t){const e=Y(n);e.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const i=Qe(e);e.L_.add(3),await ci(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await co(e)}async function Hf(n,t){const e=Y(n);t?(e.L_.delete(2),await co(e)):t||(e.L_.add(2),await ci(e),e.q_.set("Unknown"))}function xn(n){return n.K_||(n.K_=function(e,i,o){const s=Y(e);return s.w_(),new Rf(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)}(n.datastore,n.asyncQueue,{Eo:Vf.bind(null,n),Ro:Bf.bind(null,n),mo:Nf.bind(null,n),d_:Lf.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Qr(n)?$r(n):n.q_.set("Unknown")):(await n.K_.stop(),kd(n))})),n.K_}function Re(n){return n.U_||(n.U_=function(e,i,o){const s=Y(e);return s.w_(),new Sf(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Mf.bind(null,n),mo:qf.bind(null,n),f_:Of.bind(null,n),g_:jf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await uo(n)):(await n.U_.stop(),n.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,e,i,o,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=o,this.removalCallback=s,this.deferred=new se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,o,s){const a=Date.now()+i,l=new Wr(t,e,a,o,s);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gr(n,t){if(fe("AsyncQueue",`${t}: ${n}`),ri(n))return new q(L.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.comparator=t?(e,i)=>t(e,i)||K.comparator(e.key,i.key):(e,i)=>K.comparator(e.key,i.key),this.keyedMap=Mn(),this.sortedSet=new pt(this.comparator)}static emptySet(t){return new an(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof an)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const o=e.getNext().key,s=i.getNext().key;if(!o.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new an;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.W_=new pt(K.comparator)}track(t){const e=t.doc.key,i=this.W_.get(e);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(e,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(e):t.type===1&&i.type===2?this.W_=this.W_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):X():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,i)=>{t.push(i)}),t}}class hn{constructor(t,e,i,o,s,a,l,c,p){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=p}static fromInitialDocuments(t,e,i,o,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new hn(t,e,an.emptySet(e),a,i,o,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&io(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let o=0;o<e.length;o++)if(e[o].type!==i[o].type||!e[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class $f{constructor(){this.queries=ol(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const o=Y(e),s=o.queries;o.queries=ol(),s.forEach((a,l)=>{for(const c of l.j_)c.onError(i)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function ol(){return new bn(n=>td(n),io)}async function Kr(n,t){const e=Y(n);let i=3;const o=t.query;let s=e.queries.get(o);s?!s.H_()&&t.J_()&&(i=2):(s=new Uf,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await e.onListen(o,!0);break;case 1:s.z_=await e.onListen(o,!1);break;case 2:await e.onFirstRemoteStoreListen(o)}}catch(a){const l=Gr(a,`Initialization of query '${en(t.query)}' failed`);return void t.onError(l)}e.queries.set(o,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Jr(e)}async function Xr(n,t){const e=Y(n),i=t.query;let o=3;const s=e.queries.get(i);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?o=t.J_()?0:1:!s.H_()&&t.J_()&&(o=2))}switch(o){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function Qf(n,t){const e=Y(n);let i=!1;for(const o of t){const s=o.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(o)&&(i=!0);a.z_=o}}i&&Jr(e)}function Wf(n,t,e){const i=Y(n),o=i.queries.get(t);if(o)for(const s of o.j_)s.onError(e);i.queries.delete(t)}function Jr(n){n.Y_.forEach(t=>{t.next()})}var yr,rl;(rl=yr||(yr={})).ea="default",rl.Cache="cache";class Zr{constructor(t,e,i){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const o of t.docChanges)o.type!==3&&i.push(o);t=new hn(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const i=e!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=hn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==yr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.key=t}}class Nd{constructor(t){this.key=t}}class Gf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=et(),this.mutatedKeys=et(),this.Aa=ed(t),this.Ra=new an(this.Aa)}get Va(){return this.Ta}ma(t,e){const i=e?e.fa:new il,o=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=o,l=!1;const c=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,p=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((w,f)=>{const g=o.get(w),b=oo(this.query,f)?f:null,I=!!g&&this.mutatedKeys.has(g.key),T=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let _=!1;g&&b?g.data.isEqual(b.data)?I!==T&&(i.track({type:3,doc:b}),_=!0):this.ga(g,b)||(i.track({type:2,doc:b}),_=!0,(c&&this.Aa(b,c)>0||p&&this.Aa(b,p)<0)&&(l=!0)):!g&&b?(i.track({type:0,doc:b}),_=!0):g&&!b&&(i.track({type:1,doc:g}),_=!0,(c||p)&&(l=!0)),_&&(b?(a=a.add(b),s=T?s.add(w):s.delete(w)):(a=a.delete(w),s=s.delete(w)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const w=this.query.limitType==="F"?a.last():a.first();a=a.delete(w.key),s=s.delete(w.key),i.track({type:1,doc:w})}return{Ra:a,fa:i,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,o){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((w,f)=>function(b,I){const T=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return T(b)-T(I)}(w.type,f.type)||this.Aa(w.doc,f.doc)),this.pa(i),o=o!=null&&o;const l=e&&!o?this.ya():[],c=this.da.size===0&&this.current&&!o?1:0,p=c!==this.Ea;return this.Ea=c,a.length!==0||p?{snapshot:new hn(this.query,t.Ra,s,a,t.mutatedKeys,c===0,p,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new il,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=et(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const e=[];return t.forEach(i=>{this.da.has(i)||e.push(new Nd(i))}),this.da.forEach(i=>{t.has(i)||e.push(new Bd(i))}),e}ba(t){this.Ta=t.Ts,this.da=et();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return hn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Kf{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class Xf{constructor(t){this.key=t,this.va=!1}}class Jf{constructor(t,e,i,o,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=o,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new bn(l=>td(l),io),this.Ma=new Map,this.xa=new Set,this.Oa=new pt(K.comparator),this.Na=new Map,this.La=new Mr,this.Ba={},this.ka=new Map,this.qa=pn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Zf(n,t,e=!0){const i=jd(n);let o;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),o=s.view.Da()):o=await Ld(i,t,e,!0),o}async function Yf(n,t){const e=jd(n);await Ld(e,t,!0,!1)}async function Ld(n,t,e,i){const o=await wf(n.localStore,ae(t)),s=o.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return i&&(l=await tm(n,t,s,a==="current",o.resumeToken)),n.isPrimaryClient&&e&&Rd(n.remoteStore,o),l}async function tm(n,t,e,i,o){n.Ka=(f,g,b)=>async function(T,_,D,B){let P=_.view.ma(D);P.ns&&(P=await Ya(T.localStore,_.query,!1).then(({documents:R})=>_.view.ma(R,P)));const O=B&&B.targetChanges.get(_.targetId),z=B&&B.targetMismatches.get(_.targetId)!=null,H=_.view.applyChanges(P,T.isPrimaryClient,O,z);return al(T,_.targetId,H.wa),H.snapshot}(n,f,g,b);const s=await Ya(n.localStore,t,!0),a=new Gf(t,s.Ts),l=a.ma(s.documents),c=di.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",o),p=a.applyChanges(l,n.isPrimaryClient,c);al(n,e,p.wa);const w=new Kf(t,e,a);return n.Fa.set(t,w),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),p.snapshot}async function em(n,t,e){const i=Y(n),o=i.Fa.get(t),s=i.Ma.get(o.targetId);if(s.length>1)return i.Ma.set(o.targetId,s.filter(a=>!io(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await gr(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),e&&Hr(i.remoteStore,o.targetId),vr(i,o.targetId)}).catch(oi)):(vr(i,o.targetId),await gr(i.localStore,o.targetId,!0))}async function nm(n,t){const e=Y(n),i=e.Fa.get(t),o=e.Ma.get(i.targetId);e.isPrimaryClient&&o.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Hr(e.remoteStore,i.targetId))}async function im(n,t,e){const i=cm(n);try{const o=await function(a,l){const c=Y(a),p=wt.now(),w=l.reduce((b,I)=>b.add(I.key),et());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let I=me(),T=et();return c.cs.getEntries(b,w).next(_=>{I=_,I.forEach((D,B)=>{B.isValidDocument()||(T=T.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,I)).next(_=>{f=_;const D=[];for(const B of l){const P=Th(B,f.get(B.key).overlayedDocument);P!=null&&D.push(new Se(B.key,P,Ql(P.value.mapValue),bt.exists(!0)))}return c.mutationQueue.addMutationBatch(b,p,D,l)}).next(_=>{g=_;const D=_.applyToLocalDocumentSet(f,T);return c.documentOverlayCache.saveOverlays(b,_.batchId,D)})}).then(()=>({batchId:g.batchId,changes:id(f)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(o.batchId),function(a,l,c){let p=a.Ba[a.currentUser.toKey()];p||(p=new pt(st)),p=p.insert(l,c),a.Ba[a.currentUser.toKey()]=p}(i,o.batchId,e),await ui(i,o.changes),await uo(i.remoteStore)}catch(o){const s=Gr(o,"Failed to persist write");e.reject(s)}}async function zd(n,t){const e=Y(n);try{const i=await vf(e.localStore,t);t.targetChanges.forEach((o,s)=>{const a=e.Na.get(s);a&&(ot(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?a.va=!0:o.modifiedDocuments.size>0?ot(a.va):o.removedDocuments.size>0&&(ot(a.va),a.va=!1))}),await ui(e,i,t)}catch(i){await oi(i)}}function sl(n,t,e){const i=Y(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const o=[];i.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&o.push(l.snapshot)}),function(a,l){const c=Y(a);c.onlineState=l;let p=!1;c.queries.forEach((w,f)=>{for(const g of f.j_)g.Z_(l)&&(p=!0)}),p&&Jr(c)}(i.eventManager,t),o.length&&i.Ca.d_(o),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function om(n,t,e){const i=Y(n);i.sharedClientState.updateQueryState(t,"rejected",e);const o=i.Na.get(t),s=o&&o.key;if(s){let a=new pt(K.comparator);a=a.insert(s,_t.newNoDocument(s,Z.min()));const l=et().add(s),c=new ao(Z.min(),new Map,new pt(st),a,l);await zd(i,c),i.Oa=i.Oa.remove(s),i.Na.delete(t),Yr(i)}else await gr(i.localStore,t,!1).then(()=>vr(i,t,e)).catch(oi)}async function rm(n,t){const e=Y(n),i=t.batch.batchId;try{const o=await yf(e.localStore,t);Md(e,i,null),Fd(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await ui(e,o)}catch(o){await oi(o)}}async function sm(n,t,e){const i=Y(n);try{const o=await function(a,l){const c=Y(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let w;return c.mutationQueue.lookupMutationBatch(p,l).next(f=>(ot(f!==null),w=f.keys(),c.mutationQueue.removeMutationBatch(p,f))).next(()=>c.mutationQueue.performConsistencyCheck(p)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(p,w,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,w)).next(()=>c.localDocuments.getDocuments(p,w))})}(i.localStore,t);Md(i,t,e),Fd(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await ui(i,o)}catch(o){await oi(o)}}function Fd(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Md(n,t,e){const i=Y(n);let o=i.Ba[i.currentUser.toKey()];if(o){const s=o.get(t);s&&(e?s.reject(e):s.resolve(),o=o.remove(t)),i.Ba[i.currentUser.toKey()]=o}}function vr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Ma.get(t))n.Fa.delete(i),e&&n.Ca.$a(i,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(i=>{n.La.containsKey(i)||Od(n,i)})}function Od(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Hr(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Yr(n))}function al(n,t,e){for(const i of e)i instanceof Bd?(n.La.addReference(i.key,t),am(n,i)):i instanceof Nd?(Q("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,t),n.La.containsKey(i.key)||Od(n,i.key)):X()}function am(n,t){const e=t.key,i=e.path.canonicalString();n.Oa.get(e)||n.xa.has(i)||(Q("SyncEngine","New document in limbo: "+e),n.xa.add(i),Yr(n))}function Yr(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new K(ct.fromString(t)),i=n.qa.next();n.Na.set(i,new Xf(e)),n.Oa=n.Oa.insert(e,i),Rd(n.remoteStore,new we(ae(no(e.path)),i,"TargetPurposeLimboResolution",Sr.oe))}}async function ui(n,t,e){const i=Y(n),o=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((l,c)=>{a.push(i.Ka(c,t,e).then(p=>{var w;if((p||e)&&i.isPrimaryClient){const f=p?!p.fromCache:(w=e==null?void 0:e.targetChanges.get(c.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(p){o.push(p);const f=jr.Wi(c.targetId,p);s.push(f)}}))}),await Promise.all(a),i.Ca.d_(o),await async function(c,p){const w=Y(c);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(p,g=>F.forEach(g.$i,b=>w.persistence.referenceDelegate.addReference(f,g.targetId,b)).next(()=>F.forEach(g.Ui,b=>w.persistence.referenceDelegate.removeReference(f,g.targetId,b)))))}catch(f){if(!ri(f))throw f;Q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of p){const g=f.targetId;if(!f.fromCache){const b=w.os.get(g),I=b.snapshotVersion,T=b.withLastLimboFreeSnapshotVersion(I);w.os=w.os.insert(g,T)}}}(i.localStore,s))}async function lm(n,t){const e=Y(n);if(!e.currentUser.isEqual(t)){Q("SyncEngine","User change. New user:",t.toKey());const i=await _d(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(c=>{c.reject(new q(L.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await ui(e,i.hs)}}function dm(n,t){const e=Y(n),i=e.Na.get(t);if(i&&i.va)return et().add(i.key);{let o=et();const s=e.Ma.get(t);if(!s)return o;for(const a of s){const l=e.Fa.get(a);o=o.unionWith(l.view.Va)}return o}}function jd(n){const t=Y(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=zd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=om.bind(null,t),t.Ca.d_=Qf.bind(null,t.eventManager),t.Ca.$a=Wf.bind(null,t.eventManager),t}function cm(n){const t=Y(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=rm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sm.bind(null,t),t}class Xi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=lo(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return gf(this.persistence,new ff,t.initialUser,this.serializer)}Ga(t){return new uf(Or.Zr,this.serializer)}Wa(t){return new Ef}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xi.provider={build:()=>new Xi};class br{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>sl(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=lm.bind(null,this.syncEngine),await Hf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new $f}()}createDatastore(t){const e=lo(t.databaseInfo.databaseId),i=function(s){return new Cf(s)}(t.databaseInfo);return function(s,a,l,c){return new kf(s,a,l,c)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,o,s,a,l){return new Df(i,o,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>sl(this.syncEngine,e,0),function(){return el.D()?new el:new If}())}createSyncEngine(t,e){return function(o,s,a,l,c,p,w){const f=new Jf(o,s,a,l,c,p);return w&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(o){const s=Y(o);Q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ci(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}br.provider={build:()=>new br};/**
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
 */class ts{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):fe("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new q(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(o,s){const a=Y(o),l={documents:s.map(f=>Gi(a.serializer,f))},c=await a.Lo("BatchGetDocuments",a.serializer.databaseId,ct.emptyPath(),l,s.length),p=new Map;c.forEach(f=>{const g=Mh(a.serializer,f);p.set(g.key.toString(),g)});const w=[];return s.forEach(f=>{const g=p.get(f.toString());ot(!!g),w.push(g)}),w}(this.datastore,t);return e.forEach(i=>this.recordVersion(i)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(t.toString())}delete(t){this.write(new li(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,i)=>{const o=K.fromPath(i);this.mutations.push(new pd(o,this.precondition(o)))}),await async function(i,o){const s=Y(i),a={writes:o.map(l=>wd(s.serializer,l))};await s.Mo("Commit",s.serializer.databaseId,ct.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw X();e=Z.min()}const i=this.readVersions.get(t.key.toString());if(i){if(!e.isEqual(i))throw new q(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(Z.min())?bt.exists(!1):bt.updateTime(e):bt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(Z.min()))throw new q(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return bt.updateTime(e)}return bt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class pm{constructor(t,e,i,o,s){this.asyncQueue=t,this.datastore=e,this.options=i,this.updateFunction=o,this.deferred=s,this._u=i.maxAttempts,this.t_=new qr(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new um(this.datastore),e=this.cu(t);e&&e.then(i=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(i)}).catch(o=>{this.lu(o)}))}).catch(i=>{this.lu(i)})})}cu(t){try{const e=this.updateFunction(t);return!si(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!hd(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,e,i,o,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=Hl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async a=>{Q("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(Q("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Gr(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Xo(n,t){n.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await _d(t.localStore,o),i=o)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ll(n,t){n.asyncQueue.verifyOperationInProgress();const e=await fm(n);Q("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>nl(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>nl(t.remoteStore,o)),n._onlineComponents=t}async function fm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(o){return o.name==="FirebaseError"?o.code===L.FAILED_PRECONDITION||o.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(e))throw e;ln("Error using user provided cache. Falling back to memory cache: "+e),await Xo(n,new Xi)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await Xo(n,new Xi);return n._offlineComponents}async function es(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await ll(n,n._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await ll(n,new br))),n._onlineComponents}function mm(n){return es(n).then(t=>t.syncEngine)}function gm(n){return es(n).then(t=>t.datastore)}async function Ji(n){const t=await es(n),e=t.eventManager;return e.onListen=Zf.bind(null,t.syncEngine),e.onUnlisten=em.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Yf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=nm.bind(null,t.syncEngine),e}function ym(n,t,e={}){const i=new se;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,p){const w=new ts({next:g=>{w.Za(),a.enqueueAndForget(()=>Xr(s,f));const b=g.docs.has(l);!b&&g.fromCache?p.reject(new q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&g.fromCache&&c&&c.source==="server"?p.reject(new q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(g)},error:g=>p.reject(g)}),f=new Zr(no(l.path),w,{includeMetadataChanges:!0,_a:!0});return Kr(s,f)}(await Ji(n),n.asyncQueue,t,e,i)),i.promise}function vm(n,t,e={}){const i=new se;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,p){const w=new ts({next:g=>{w.Za(),a.enqueueAndForget(()=>Xr(s,f)),g.fromCache&&c.source==="server"?p.reject(new q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(g)},error:g=>p.reject(g)}),f=new Zr(l,w,{includeMetadataChanges:!0,_a:!0});return Kr(s,f)}(await Ji(n),n.asyncQueue,t,e,i)),i.promise}/**
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
 */function qd(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const dl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n,t,e){if(!e)throw new q(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function bm(n,t,e,i){if(t===!0&&i===!0)throw new q(L.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function cl(n){if(!K.isDocumentKey(n))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ul(n){if(K.isDocumentKey(n))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function po(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":X()}function zt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=po(n);throw new q(L.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class pl{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qd((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ho{constructor(t,e,i,o){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pl(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Bp;switch(i.type){case"firstParty":return new Fp(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=dl.get(e);i&&(Q("ComponentProvider","Removing Datastore"),dl.delete(e),i.terminate())}(this),Promise.resolve()}}function xm(n,t,e,i={}){var o;const s=(n=zt(n,ho))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let l,c;if(typeof i.mockUserToken=="string")l=i.mockUserToken,c=Lt.MOCK_USER;else{l=hu(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Lt(p)}n._authCredentials=new Np(new ql(l,c))}}/**
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
 */class ke{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ke(this.firestore,t,this._query)}}class kt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _e(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}}class _e extends ke{constructor(t,e,i){super(t,e,no(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new K(t))}withConverter(t){return new _e(this.firestore,t,this._path)}}function At(n,t,...e){if(n=Xt(n),Hd("collection","path",t),n instanceof ho){const i=ct.fromString(t,...e);return ul(i),new _e(n,null,i)}{if(!(n instanceof kt||n instanceof _e))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ct.fromString(t,...e));return ul(i),new _e(n.firestore,null,i)}}function lt(n,t,...e){if(n=Xt(n),arguments.length===1&&(t=Hl.newId()),Hd("doc","path",t),n instanceof ho){const i=ct.fromString(t,...e);return cl(i),new kt(n,null,new K(i))}{if(!(n instanceof kt||n instanceof _e))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ct.fromString(t,...e));return cl(i),new kt(n.firestore,n instanceof _e?n.converter:null,new K(i))}}/**
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
 */class hl{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new qr(this,"async_queue_retry"),this.Vu=()=>{const i=Ko();i&&Q("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=Ko();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ko();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new se;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!ri(t))throw t;Q("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const o=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw fe("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const o=Wr.createAndSchedule(this,t,e,i,s=>this.yu(s));return this.Tu.push(o),o}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function fl(n){return function(e,i){if(typeof e!="object"||e===null)return!1;const o=e;for(const s of i)if(s in o&&typeof o[s]=="function")return!0;return!1}(n,["next","error","complete"])}class te extends ho{constructor(t,e,i,o){super(t,e,i,o),this.type="firestore",this._queue=new hl,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new hl(t),this._firestoreClient=void 0,await t}}}function wm(n,t){const e=typeof n=="object"?n:Ap(),i=typeof n=="string"?n:"(default)",o=vp(e,"firestore").getImmediate({identifier:i});if(!o._initialized){const s=uu("firestore");s&&xm(o,...s)}return o}function wn(n){if(n._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Am(n),n._firestoreClient}function Am(n){var t,e,i;const o=n._freezeSettings(),s=function(l,c,p,w){return new Jp(l,c,p,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,qd(w.experimentalLongPollingOptions),w.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((e=o.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new hm(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ue(Pt.fromBase64String(t))}catch(e){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ue(Pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class An{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class fo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return st(this._lat,t._lat)||st(this._long,t._long)}}/**
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
 */class is{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,o){if(i.length!==o.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==o[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=/^__.*__$/;class Im{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Se(t,this.data,this.fieldMask,e,this.fieldTransforms):new ai(t,this.data,e,this.fieldTransforms)}}class Ud{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new Se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function $d(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class os{constructor(t,e,i,o,s,a){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=o,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new os(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Fu({path:i,xu:!1});return o.Ou(t),o}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Zi(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if($d(this.Cu)&&Em.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class _m{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||lo(t)}Qu(t,e,i,o=!1){return new os({Cu:t,methodName:e,qu:i,path:Rt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function En(n){const t=n._freezeSettings(),e=lo(n._databaseId);return new _m(n._databaseId,!!t.ignoreUndefinedProperties,e)}function mo(n,t,e,i,o,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,o);ls("Data must be an object, but it was:",a,i);const l=Qd(i,a);let c,p;if(s.merge)c=new Gt(a.fieldMask),p=a.fieldTransforms;else if(s.mergeFields){const w=[];for(const f of s.mergeFields){const g=xr(t,f,e);if(!a.contains(g))throw new q(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Gd(w,g)||w.push(g)}c=new Gt(w),p=a.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,p=a.fieldTransforms;return new Im(new jt(l),c,p)}class go extends fo{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof go}}class rs extends fo{_toFieldTransform(t){return new Ah(t.path,new Yn)}isEqual(t){return t instanceof rs}}function ss(n,t,e,i){const o=n.Qu(1,t,e);ls("Data must be an object, but it was:",o,i);const s=[],a=jt.empty();$e(i,(c,p)=>{const w=ds(t,c,e);p=Xt(p);const f=o.Nu(w);if(p instanceof go)s.push(w);else{const g=pi(p,f);g!=null&&(s.push(w),a.set(w,g))}});const l=new Gt(s);return new Ud(a,l,o.fieldTransforms)}function as(n,t,e,i,o,s){const a=n.Qu(1,t,e),l=[xr(t,i,e)],c=[o];if(s.length%2!=0)throw new q(L.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(xr(t,s[g])),c.push(s[g+1]);const p=[],w=jt.empty();for(let g=l.length-1;g>=0;--g)if(!Gd(p,l[g])){const b=l[g];let I=c[g];I=Xt(I);const T=a.Nu(b);if(I instanceof go)p.push(b);else{const _=pi(I,T);_!=null&&(p.push(b),w.set(b,_))}}const f=new Gt(p);return new Ud(w,f,a.fieldTransforms)}function Tm(n,t,e,i=!1){return pi(e,n.Qu(i?4:3,t))}function pi(n,t){if(Wd(n=Xt(n)))return ls("Unsupported field value:",t,n),Qd(n,t);if(n instanceof fo)return function(i,o){if(!$d(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(o);s&&o.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,o){const s=[];let a=0;for(const l of i){let c=pi(l,o.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(n,t)}return function(i,o){if((i=Xt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return bh(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=wt.fromDate(i);return{timestampValue:Wi(o.serializer,s)}}if(i instanceof wt){const s=new wt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Wi(o.serializer,s)}}if(i instanceof ns)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ue)return{bytesValue:yd(o.serializer,i._byteString)};if(i instanceof kt){const s=o.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw o.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Fr(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof is)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Nr(l.serializer,c)})}}}}}}(i,o);throw o.Bu(`Unsupported field value: ${po(i)}`)}(n,t)}function Qd(n,t){const e={};return Ul(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$e(n,(i,o)=>{const s=pi(o,t.Mu(i));s!=null&&(e[i]=s)}),{mapValue:{fields:e}}}function Wd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof wt||n instanceof ns||n instanceof Ue||n instanceof kt||n instanceof fo||n instanceof is)}function ls(n,t,e){if(!Wd(e)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(e)){const i=po(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function xr(n,t,e){if((t=Xt(t))instanceof An)return t._internalPath;if(typeof t=="string")return ds(n,t);throw Zi("Field path arguments must be of type string or ",n,!1,void 0,e)}const Cm=new RegExp("[~\\*/\\[\\]]");function ds(n,t,e){if(t.search(Cm)>=0)throw Zi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new An(...t.split("."))._internalPath}catch{throw Zi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Zi(n,t,e,i,o){const s=i&&!i.isEmpty(),a=o!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${i}`),a&&(c+=` in document ${o}`),c+=")"),new q(L.INVALID_ARGUMENT,l+n+c)}function Gd(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Yi{constructor(t,e,i,o,s){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=o,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Rm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(cs("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Rm extends Yi{data(){return super.data()}}function cs(n,t){return typeof t=="string"?ds(n,t):t instanceof An?t._internalPath:t._delegate._internalPath}/**
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
 */function Kd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class us{}class Xd extends us{}function yo(n,t,...e){let i=[];t instanceof us&&i.push(t),i=i.concat(e),function(s){const a=s.filter(c=>c instanceof hs).length,l=s.filter(c=>c instanceof ps).length;if(a>1||a>0&&l>0)throw new q(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class ps extends Xd{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new ps(t,e,i)}_apply(t){const e=this._parse(t);return Jd(t._query,e),new ke(t.firestore,t.converter,ur(t._query,e))}_parse(t){const e=En(t.firestore);return function(s,a,l,c,p,w,f){let g;if(p.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new q(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){gl(f,w);const b=[];for(const I of f)b.push(ml(c,s,I));g={arrayValue:{values:b}}}else g=ml(c,s,f)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||gl(f,w),g=Tm(l,a,f,w==="in"||w==="not-in");return vt.create(p,w,g)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class hs extends us{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new hs(t,e)}_parse(t){const e=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return e.length===1?e[0]:Yt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(o,s){let a=o;const l=s.getFlattenedFilters();for(const c of l)Jd(a,c),a=ur(a,c)}(t._query,e),new ke(t.firestore,t.converter,ur(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fs extends Xd{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new fs(t,e)}_apply(t){const e=function(o,s,a){if(o.startAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zn(s,a)}(t._query,this._field,this._direction);return new ke(t.firestore,t.converter,function(o,s){const a=o.explicitOrderBy.concat([s]);return new vn(o.path,o.collectionGroup,a,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(t._query,e))}}function vo(n,t="asc"){const e=t,i=cs("orderBy",n);return fs._create(i,e)}function ml(n,t,e){if(typeof(e=Xt(e))=="string"){if(e==="")throw new q(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yl(t)&&e.indexOf("/")!==-1)throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(ct.fromString(e));if(!K.isDocumentKey(i))throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return La(n,new K(i))}if(e instanceof kt)return La(n,e._key);throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${po(e)}.`)}function gl(n,t){if(!Array.isArray(n)||n.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Jd(n,t){const e=function(o,s){for(const a of o)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Zd{convertValue(t,e="none"){switch(He(t)){case 0:return null;case 1:return t.booleanValue;case 2:return mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(qe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw X()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return $e(t,(o,s)=>{i[o]=this.convertValue(s,e)}),i}convertVectorValue(t){var e,i,o;const s=(o=(i=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(a=>mt(a.doubleValue));return new is(s)}convertGeoPoint(t){return new ns(mt(t.latitude),mt(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Pr(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Kn(t));default:return null}}convertTimestamp(t){const e=Ce(t);return new wt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=ct.fromString(t);ot(Id(i));const o=new Xn(i.get(1),i.get(3)),s=new K(i.popFirst(5));return o.isEqual(e)||fe(`Document ${s} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function bo(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class Sm extends Zd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new kt(this.firestore,null,e)}}/**
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
 */class rn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ms extends Yi{constructor(t,e,i,o,s,a){super(t,e,i,o,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(cs("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class Mi extends ms{data(t={}){return super.data(t)}}class Yd{constructor(t,e,i,o){this._firestore=t,this._userDataWriter=e,this._snapshot=o,this.metadata=new rn(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new Mi(this._firestore,this._userDataWriter,i.key,i,new rn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(o,s){if(o._snapshot.oldDocs.isEmpty()){let a=0;return o._snapshot.docChanges.map(l=>{const c=new Mi(o._firestore,o._userDataWriter,l.doc.key,l.doc,new rn(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Mi(o._firestore,o._userDataWriter,l.doc.key,l.doc,new rn(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);let p=-1,w=-1;return l.type!==0&&(p=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),w=a.indexOf(l.doc.key)),{type:km(l.type),doc:c,oldIndex:p,newIndex:w}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function km(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function ne(n){n=zt(n,kt);const t=zt(n.firestore,te);return ym(wn(t),n._key).then(e=>nc(t,n,e))}class xo extends Zd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new kt(this.firestore,null,e)}}function We(n){n=zt(n,ke);const t=zt(n.firestore,te),e=wn(t),i=new xo(t);return Kd(n._query),vm(e,n._query).then(o=>new Yd(t,i,n,o))}function ee(n,t,e){n=zt(n,kt);const i=zt(n.firestore,te),o=bo(n.converter,t,e);return hi(i,[mo(En(i),"setDoc",n._key,o,n.converter!==null,e).toMutation(n._key,bt.none())])}function ie(n,t,e,...i){n=zt(n,kt);const o=zt(n.firestore,te),s=En(o);let a;return a=typeof(t=Xt(t))=="string"||t instanceof An?as(s,"updateDoc",n._key,t,e,i):ss(s,"updateDoc",n._key,t),hi(o,[a.toMutation(n._key,bt.exists(!0))])}function tc(n){return hi(zt(n.firestore,te),[new li(n._key,bt.none())])}function ec(n,t){const e=zt(n.firestore,te),i=lt(n),o=bo(n.converter,t);return hi(e,[mo(En(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,bt.exists(!1))]).then(()=>i)}function Pe(n,...t){var e,i,o;n=Xt(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||fl(t[a])||(s=t[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(fl(t[a])){const f=t[a];t[a]=(e=f.next)===null||e===void 0?void 0:e.bind(f),t[a+1]=(i=f.error)===null||i===void 0?void 0:i.bind(f),t[a+2]=(o=f.complete)===null||o===void 0?void 0:o.bind(f)}let c,p,w;if(n instanceof kt)p=zt(n.firestore,te),w=no(n._key.path),c={next:f=>{t[a]&&t[a](nc(p,n,f))},error:t[a+1],complete:t[a+2]};else{const f=zt(n,ke);p=zt(f.firestore,te),w=f._query;const g=new xo(p);c={next:b=>{t[a]&&t[a](new Yd(p,g,f,b))},error:t[a+1],complete:t[a+2]},Kd(n._query)}return function(g,b,I,T){const _=new ts(T),D=new Zr(b,_,I);return g.asyncQueue.enqueueAndForget(async()=>Kr(await Ji(g),D)),()=>{_.Za(),g.asyncQueue.enqueueAndForget(async()=>Xr(await Ji(g),D))}}(wn(p),w,l,c)}function hi(n,t){return function(i,o){const s=new se;return i.asyncQueue.enqueueAndForget(async()=>im(await mm(i),o,s)),s.promise}(wn(n),t)}function nc(n,t,e){const i=e.docs.get(t._key),o=new xo(n);return new ms(n,o,t._key,i,new rn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class Dm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=En(t)}set(t,e,i){this._verifyNotCommitted();const o=xe(t,this._firestore),s=bo(o.converter,e,i),a=mo(this._dataReader,"WriteBatch.set",o._key,s,o.converter!==null,i);return this._mutations.push(a.toMutation(o._key,bt.none())),this}update(t,e,i,...o){this._verifyNotCommitted();const s=xe(t,this._firestore);let a;return a=typeof(e=Xt(e))=="string"||e instanceof An?as(this._dataReader,"WriteBatch.update",s._key,e,i,o):ss(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,bt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=xe(t,this._firestore);return this._mutations=this._mutations.concat(new li(e._key,bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new q(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function xe(n,t){if((n=Xt(n)).firestore!==t)throw new q(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class Vm extends class{constructor(e,i){this._firestore=e,this._transaction=i,this._dataReader=En(e)}get(e){const i=xe(e,this._firestore),o=new Sm(this._firestore);return this._transaction.lookup([i._key]).then(s=>{if(!s||s.length!==1)return X();const a=s[0];if(a.isFoundDocument())return new Yi(this._firestore,o,a.key,a,i.converter);if(a.isNoDocument())return new Yi(this._firestore,o,i._key,null,i.converter);throw X()})}set(e,i,o){const s=xe(e,this._firestore),a=bo(s.converter,i,o),l=mo(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,o);return this._transaction.set(s._key,l),this}update(e,i,o,...s){const a=xe(e,this._firestore);let l;return l=typeof(i=Xt(i))=="string"||i instanceof An?as(this._dataReader,"Transaction.update",a._key,i,o,s):ss(this._dataReader,"Transaction.update",a._key,i),this._transaction.update(a._key,l),this}delete(e){const i=xe(e,this._firestore);return this._transaction.delete(i._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=xe(t,this._firestore),i=new xo(this._firestore);return super.get(t).then(o=>new ms(this._firestore,i,e._key,o._document,new rn(!1,!1),e.converter))}}function Bm(n,t,e){n=zt(n,te);const i=Object.assign(Object.assign({},Pm),e);return function(s){if(s.maxAttempts<1)throw new q(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(s,a,l){const c=new se;return s.asyncQueue.enqueueAndForget(async()=>{const p=await gm(s);new pm(s.asyncQueue,p,l,a,c).au()}),c.promise}(wn(n),o=>t(new Vm(n,o)),i)}function ic(){return new rs("serverTimestamp")}/**
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
 */function gs(n){return wn(n=zt(n,te)),new Dm(n,t=>hi(n,t))}(function(t,e=!0){(function(o){yn=o})(wp),Hi(new Qn("firestore",(i,{instanceIdentifier:o,options:s})=>{const a=i.getProvider("app").getImmediate(),l=new te(new Lp(i.getProvider("auth-internal")),new Op(i.getProvider("app-check-internal")),function(p,w){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(p.options.projectId,w)}(a,o),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),sn(Pa,"4.7.3",t),sn(Pa,"4.7.3","esm2017")})();const Nm={apiKey:"AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",authDomain:"feria-vinos-sucovi-2027.firebaseapp.com",databaseURL:"https://feria-vinos-sucovi-2027-default-rtdb.firebaseio.com",projectId:"feria-vinos-sucovi-2027",storageBucket:"feria-vinos-sucovi-2027.firebasestorage.app",messagingSenderId:"1686119758",appId:"1:1686119758:web:2c3c6d96e36f1276052a1f",measurementId:"G-VRMTQ3SS7E"},Lm=Vl(Nm),J=wm(Lm),It=[{id:0,key:"368813",nombre:"Sucovi",region:"Organización",pass:"stand00"},{id:1,key:"d48429",nombre:"Alta Vista",region:"Mendoza",pass:"stand01"},{id:2,key:"ba356c",nombre:"Andillian",region:"Mendoza",pass:"stand02"},{id:3,key:"451e62",nombre:"Ante Nada",region:"Mendoza",pass:"stand03"},{id:4,key:"835c2d",nombre:"Bodega Benegas",region:"Mendoza",pass:"stand04"},{id:5,key:"e45a28",nombre:"Bianchi",region:"San Rafael",pass:"stand05"},{id:6,key:"12ac1c",nombre:"Catena Zapata",region:"Luján de Cuyo",pass:"stand06"},{id:7,key:"18abc3",nombre:"Bodegas Bórbore",region:"Mendoza (1936)",pass:"stand07"},{id:8,key:"452b71",nombre:"Fábula Wines",region:"Mendoza",pass:"stand08"},{id:9,key:"0c55a5",nombre:"Finca Iral",region:"Mendoza",pass:"stand09"},{id:10,key:"5cb108",nombre:"Giménez Riili",region:"Mendoza",pass:"stand10"},{id:11,key:"27f372",nombre:"Jorge Rubio",region:"Mendoza",pass:"stand11"},{id:12,key:"a9d27f",nombre:"La Coste de los Andes",region:"Mendoza",pass:"stand12"},{id:13,key:"b5be6e",nombre:"Las Perdices",region:"Mendoza",pass:"stand13"},{id:14,key:"7da93b",nombre:"Lorenzo de Agrelo",region:"Mendoza",pass:"stand14"},{id:15,key:"f52ab4",nombre:"Pannunzio Wines",region:"Mendoza",pass:"stand15"},{id:16,key:"a32dd6",nombre:"Bodega Patritti",region:"Mendoza",pass:"stand16"},{id:17,key:"175358",nombre:"Rosell Boher",region:"Mendoza",pass:"stand17"},{id:18,key:"4a2b00",nombre:"Valle de la Puerta",region:"La Rioja",pass:"stand18"},{id:19,key:"b3c4d5",nombre:"Bertelli",region:"Buenos Aires",pass:"stand19"},{id:20,key:"e6f7a8",nombre:"Familia Aicardi",region:"Neuquén",pass:"stand20"},{id:21,key:"b9c0d1",nombre:"Finca Flichman",region:"Mendoza",pass:"stand21"},{id:22,key:"e2f3a4",nombre:"Don Martino Wines",region:"Mendoza",pass:"stand22"},{id:23,key:"b5c6d7",nombre:"Séptima",region:"Mendoza",pass:"stand23"}];async function wr(n){return await ec(At(J,"invitados"),{...n,creadoEn:ic()})}async function Ae(n,t){await ie(lt(J,"invitados",n),t)}function wo(n){return Pe(yo(At(J,"invitados"),vo("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}async function ni(n){const e=(await We(At(J,"invitados"))).docs.find(i=>i.data().token===n);return e?{fireId:e.id,...e.data()}:null}async function zm(n){const e=(await We(At(J,"invitados"))).docs.find(i=>i.data().codigo===n);return e?{fireId:e.id,...e.data()}:null}async function oc(n,t,e,i,o){const s=lt(J,"carritos",n,"items",String(t)),a=await ne(s);if(a.exists()){const l=a.data(),c=l.items||[],p=c.findIndex(w=>w.key===i.key);p>=0?c[p]=i:c.push(i),await ee(s,{standId:t,standNombre:e,items:c,retiro:o||l.retiro||"stand"})}else await ee(s,{standId:t,standNombre:e,items:[i],retiro:o||"stand"})}async function ys(n,t,e){await ie(lt(J,"carritos",n,"items",String(t)),{retiro:e})}async function to(n,t,e){const i=lt(J,"carritos",n,"items",String(t)),o=await ne(i);if(!o.exists())return;const s=(o.data().items||[]).filter(a=>a.key!==e);s.length?await ie(i,{items:s}):await tc(i)}async function Ar(n){return(await We(At(J,"carritos",n,"items"))).docs.map(e=>({standId:e.id,...e.data()}))}function vs(n,t){return Pe(At(J,"carritos",n,"items"),e=>t(e.docs.map(i=>({standDocId:i.id,...i.data()}))))}async function Er(n){const t=await We(At(J,"carritos",n,"items")),e=gs(J);t.docs.forEach(i=>e.delete(i.ref)),await e.commit()}async function rc(n,t){const e=lt(J,"config","contadores"),i=await ne(e);let o=(i.exists()&&i.data().voucher||0)+1;const s=gs(J),a=[];return t.forEach((l,c)=>{const p=lt(At(J,"pedidos"));a.push(p),s.set(p,{invFireId:n.fireId,invNombre:n.nombre+" "+n.apellido,invCodigo:n.codigo,invFamilia:n.familia||"",standId:l.standId,standNombre:l.standNombre,items:l.items||[],total:(l.items||[]).reduce((w,f)=>w+(f.sub||0),0),retiro:l.retiro||"stand",estado:"pagado",voucherNum:o+c,creadoEn:ic()})}),s.set(e,{voucher:o+t.length-1},{merge:!0}),await s.commit(),a.map(l=>l.id)}function Ao(n){return Pe(yo(At(J,"pedidos"),vo("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}function sc(n,t){return Pe(yo(At(J,"pedidos"),vo("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>Number(i.standId)===Number(n))))}function ac(n,t){return Pe(yo(At(J,"pedidos"),vo("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>i.invFireId===n)))}async function Fm(n,t=""){const e=lt(J,"pedidos",n);await ie(e,{estado:"cancelado",canceladoAt:new Date().toISOString(),canceladoMotivo:t||"Cancelado desde caja"})}async function lc(n){const t=lt(J,"pedidos",n);await ie(t,{estado:"reembolsado",reembolsadoAt:new Date().toISOString()})}async function dc(n){const t=lt(J,"pedidos",n);await ie(t,{estado:"listo",listoAt:new Date().toISOString()})}async function cc(n){const t=lt(J,"pedidos",n);await ie(t,{estado:"retirado",retiradoAt:new Date().toISOString()})}async function uc(n){const t=lt(J,"pedidos",n);await ie(t,{estado:"entregado",entregadoAt:new Date().toISOString()})}async function bs(n){await ie(lt(J,"pedidos",n),{estado:"entregado"})}async function Mm(n,t){const e={pendiente:"pagado",pagado:"listo",listo:"entregado"};e[t]&&await ie(lt(J,"pedidos",n),{estado:e[t]})}function Ge(n,t){return Pe(At(J,"bodegas",String(n),"vinos"),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()}))))}async function pc(n,t){return(await ec(At(J,"bodegas",String(n),"vinos"),t)).id}async function hc(n,t,e){await ie(lt(J,"bodegas",String(n),"vinos",t),e)}async function fc(n,t){await tc(lt(J,"bodegas",String(n),"vinos",t))}async function mc(){const n=["invitados","pedidos"];for(const t of n){const e=await We(At(J,t)),i=gs(J);e.docs.forEach(o=>i.delete(o.ref)),await i.commit()}}async function eo(n,t,e,i){const o=lt(J,"stock",n+"_"+t),s=await ne(o),a=s.exists()?s.data():{},l=i&&i!==t?i:a.vinoNombre&&a.vinoNombre!==t?a.vinoNombre:i||t;await ee(o,{standId:Number(n),vinoId:t,vinoNombre:l,total:(a.total||0)+e,degustacion:a.degustacion||0,reservado:a.reservado||0,pagado:a.pagado||0,entregado:a.entregado||0},{merge:!0})}async function Ir(n,t,e){const i=lt(J,"stock",n+"_"+t),o=await ne(i),s=o.exists()?o.data():{};await ee(i,{degustacion:(s.degustacion||0)+e},{merge:!0})}async function gc(n,t,e){const i=lt(J,"stock",String(n)+"_"+t);try{return await Bm(J,async s=>{const a=await s.get(i);if(!a.exists())return!0;const l=a.data(),c=(l.total||0)-(l.degustacion||0)-(l.reservado||0)-(l.pagado||0)-(l.entregado||0);return e>c?!1:(s.update(i,{reservado:(l.reservado||0)+e}),!0)})}catch(o){return console.error("intentarReservarStock:",o),!0}}async function Eo(n,t,e){const i=lt(J,"stock",String(n)+"_"+t),o=await ne(i);if(!o.exists())return;const s=o.data();await ee(i,{reservado:Math.max(0,(s.reservado||0)-e)},{merge:!0})}async function yc(n,t,e){const i=lt(J,"stock",String(n)+"_"+t),o=await ne(i);if(!o.exists())return;const s=o.data();await ee(i,{reservado:Math.max(0,(s.reservado||0)-e),pagado:(s.pagado||0)+e},{merge:!0})}function Io(n){return Pe(At(J,"stock"),t=>n(t.docs.map(e=>({id:e.id,...e.data()}))))}async function Om(n,t){const e=lt(J,"stock",String(n)+"_"+t),i=await ne(e);return i.exists()?i.data():null}async function vc(n){const t=[];if(!n||!n.length)return t;for(const e of n)try{(await We(At(J,"carritos",e,"items"))).docs.forEach(o=>{const s=o.data(),a=s.standId!==void 0?Number(s.standId):null;a!==null&&(s.items||[]).forEach(l=>{t.push({invFireId:e,standId:a,vinoId:l.vinoId||"",vinoNombre:l.vinoNombre||"",qty:l.qty||1})})})}catch{}return t}async function jm(n,t,e){const i=lt(J,"stock",n+"_"+t);await ee(i,{disponible:Math.max(0,e)},{merge:!0})}async function bc(n){return(await We(At(J,"invitados"))).docs.map(e=>({fireId:e.id,...e.data()})).filter(e=>(e.familia||"").toLowerCase()===n.toLowerCase())}async function xc(n){const t=await ne(lt(J,"familyLinks",n.toLowerCase()));return t.exists()?t.data().token:null}async function _r(n,t){await ee(lt(J,"familyLinks",n.toLowerCase()),{token:t,familia:n})}async function wc(n,t){const e=await ne(lt(J,"familyLinks",n.toLowerCase()));return e.exists()?e.data().token===t:!1}async function Ac(n){const t=lt(J,"config","contadores"),e=await ne(t),o=((e.exists()?e.data():{}).pedidosEspeciales||0)+1;await ee(t,{pedidosEspeciales:o},{merge:!0});const s="PE-"+String(o).padStart(3,"0"),a=lt(At(J,"pedidosEspeciales"));return await ee(a,{...n,peNum:s,estado:"pagado",creadoEn:new Date().toISOString()}),{fireId:a.id,peNum:s}}async function xs(n,t){await ee(lt(J,"pedidosEspeciales",n),t,{merge:!0})}function fn(n){return Pe(At(J,"pedidosEspeciales"),t=>{n(t.docs.map(e=>({fireId:e.id,...e.data()})))})}const ii=Object.freeze(Object.defineProperty({__proto__:null,BODEGAS:It,actualizarInvitado:Ae,actualizarPedidoEspecial:xs,actualizarRetiroStand:ys,actualizarStock:eo,actualizarVino:hc,agregarAlCarrito:oc,avanzarEstado:Mm,buscarInvitadoPorCodigo:zm,buscarInvitadoPorToken:ni,buscarInvitadosPorFamilia:bc,cancelarPedido:Fm,cobrarStock:yc,crearInvitado:wr,crearPedidoEspecial:Ac,crearPedidosDesdeCarrito:rc,eliminarItemCarrito:to,eliminarVino:fc,entregarDomicilio:uc,escucharCarrito:vs,escucharInvitados:wo,escucharPedidos:Ao,escucharPedidosEspeciales:fn,escucharPedidosPorInvitado:ac,escucharPedidosPorStand:sc,escucharStock:Io,escucharVinos:Ge,getFamilyToken:xc,getStockDoc:Om,guardarDisponibleStock:jm,guardarFamilyToken:_r,guardarVino:pc,intentarReservarStock:gc,leerCarrito:Ar,leerTodosLosCarritos:vc,liberarReservaStock:Eo,limpiarDatosPrueba:mc,marcarEntregado:bs,marcarListoLogistica:dc,reembolsarPedido:lc,registrarDegustacion:Ir,retirarDeStand:cc,vaciarCarrito:Er,verificarFamilyToken:wc},Symbol.toStringTag,{value:"Module"})),qm="modulepreload",Hm=function(n){return"/"+n},yl={},mn=function(t,e,i){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(e.map(c=>{if(c=Hm(c),c in yl)return;yl[c]=!0;const p=c.endsWith(".css"),w=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${w}`))return;const f=document.createElement("link");if(f.rel=p?"stylesheet":qm,p||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),p)return new Promise((g,b)=>{f.addEventListener("load",g),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},ws="data:image/png;base64,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";function Ht({title:n,sub:t="",backHref:e="",backLabel:i="← Panel",backStyle:o="",actions:s=[]}={}){return`
    <div class="hdr">
      <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
        <img src="${ws}" alt="Sucovi 2027"
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
    <div class="gold"></div>`}function Oi(n){return`
    <div style="background:linear-gradient(160deg,#1A3A5C 0%,#2C5F8A 60%,#3A7D44 100%);
                color:#fff;padding:20px 16px 16px;text-align:center">
      <img src="${ws}" alt="Sucovi 2027"
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
    <div class="gold"></div>`}function oe(){if(document.getElementById("sucovi-styles"))return;const n=document.createElement("style");n.id="sucovi-styles",n.textContent=`
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
  `,document.head.appendChild(n)}async function Um(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function vl(n,t,e){await Um();const i=document.getElementById(n);if(i)try{const o=qrcode(0,"M");o.addData(String(t)),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let c=0;c<s;c++)for(let p=0;p<s;p++)o.isDark(c,p)&&l.fillRect(p*a,c*a,a,a)}catch(o){console.error("QR error:",o)}}const Bi=n=>Number(n).toLocaleString("es-AR"),bl=()=>Math.random().toString(36).slice(2,10).toUpperCase(),xl=n=>"INV-"+String(n).padStart(4,"0");function wl(n){return{pendiente:'<span class="badge b-pend">Pendiente</span>',pagado:'<span class="badge b-pago">Bono pagado</span>',ingresado:'<span class="badge b-ingr">Ingresó</span>',invalidado:'<span class="badge b-inv">Invalidado</span>'}[n]||""}const $m={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},Qm={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"};function Ec(n){const t=sessionStorage.getItem("admin-pin"),e=localStorage.getItem("sucovi-admin-pin")||"2027";if(t!==e&&t!=="1418"){n.innerHTML='<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#F0F4F8"><div style="background:#fff;border-radius:12px;padding:32px;text-align:center;max-width:320px;width:100%;box-shadow:0 4px 20px rgba(0,0,0,.1)"><div style="font-size:40px;margin-bottom:12px">🔒</div><h2 style="font-size:18px;font-weight:600;color:#1A3A5C;margin-bottom:4px">Panel Admin</h2><p style="font-size:13px;color:#888;margin-bottom:20px">SUCOVI 2027</p><input id="pin-input" type="password" maxlength="4" placeholder="PIN de 4 digitos" style="width:100%;text-align:center;font-size:24px;letter-spacing:.3em;padding:12px;border:2px solid #D6E4F0;border-radius:8px;margin-bottom:12px" onkeydown="if(event.keyCode===13) window._checkPin()"><button class="btn btn-v" style="width:100%;padding:12px;font-size:14px" onclick="window._checkPin()">Ingresar</button><div id="pin-err" style="margin-top:8px;font-size:12px;color:#C0392B"></div></div></div>',window._checkPin=()=>{const v=document.getElementById("pin-input").value,y=localStorage.getItem("sucovi-admin-pin")||"2027";v===y||v==="1418"?(sessionStorage.setItem("admin-pin",v),Ec(n)):(document.getElementById("pin-err").textContent="PIN incorrecto",document.getElementById("pin-input").value="")},setTimeout(()=>{var v;return(v=document.getElementById("pin-input"))==null?void 0:v.focus()},100);return}oe();let i=[],o=[],s=[],a=[],l="inv",c=null;Io(v=>{a=v,l==="stock"&&P().catch(()=>{})}),n.innerHTML=Ht({title:"Sucovi 2027",sub:"20 jun 2026 · 19:30 hs · Roma 656, Olivos"})+`
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
    </div>`;let p=[];fn(v=>{p=v}),setTimeout(()=>{l="res",D()},100),wo(v=>{i=v,l==="inv"&&f(),l==="res"&&D()}),Ao(v=>{o=v,s=v,l==="ped"&&T(),l==="res"&&D(),l==="cancelados"&&B()}),window._aTab=(v,y)=>{var x;l=v,document.querySelectorAll(".nav button").forEach(A=>A.classList.remove("on")),y.classList.add("on");const m={inv:f,reg:g,excel:b,ped:T,stands:_,res:D,config:O,stock:P};(x=m[v])==null||x.call(m)};let w={};function f(){const v=document.getElementById("tab-content");vc(i.map(y=>y.fireId)).then(y=>{w={},y.forEach(m=>{w[m.invFireId]=!0}),window._fInv()}).catch(()=>{}),document.getElementById("buscar-inv")||(v.innerHTML=`
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
        <div class="card" id="lista-inv"></div>`),window._fInv=()=>{var h,C;const y=(((h=document.getElementById("buscar-inv"))==null?void 0:h.value)||"").toLowerCase(),m=((C=document.getElementById("fil-est"))==null?void 0:C.value)||"",x=i.filter(S=>(S.nombre+" "+S.apellido+" "+(S.codigo||"")+" "+(S.familia||"")).toLowerCase().includes(y)&&(!m||S.estado===m)),A=document.getElementById("lista-inv");if(A){if(!x.length){A.innerHTML='<div class="empty">Sin resultados</div>';return}A.innerHTML=x.map(S=>{var M,N;return`
        <div class="row" style="${S.estado==="invalidado"?"opacity:.5":""}">
          <div class="avatar">${((M=S.nombre)==null?void 0:M[0])||"?"}${((N=S.apellido)==null?void 0:N[0])||""}</div>
          <div style="flex:1;min-width:80px">
            <div style="font-size:13px;font-weight:500">${S.nombre} ${S.apellido}</div>
            <div style="font-size:11px;color:#888">${S.tel}${S.familia?" · "+S.familia:""}</div>
          </div>
          <div style="font-size:11px;color:#aaa">${S.codigo||""}</div>
          ${w[S.fireId]?'<span title="Tiene carrito activo" style="font-size:14px">🛒</span>':""}
          ${wl(S.estado)}
          <div style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">
            <button class="btn" style="padding:4px 8px;font-size:11px" onclick="window._abrirWA('${S.fireId}')">📱 WA</button>
            <button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._descargarQR('${S.fireId}')">📥 QR</button>
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInv('${S.fireId}')">✏️</button>
            ${S.estado!=="invalidado"?`<button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D" onclick="window._invalidar('${S.fireId}','${S.nombre} ${S.apellido}')">✕ Invalidar</button>`:`<button class="btn" style="padding:4px 8px;font-size:11px;color:#3B6D11;border-color:#3B6D11" onclick="window._reactivar('${S.fireId}')">↩ Reactivar</button>`}
          </div>
        </div>`}).join("")}},window._fInv()}window._invalidar=async(v,y)=>{confirm(`¿Invalidar a ${y}?`)&&await Ae(v,{estado:"invalidado"})},window._reactivar=async v=>await Ae(v,{estado:"pendiente"});function g(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}window._registrar=async()=>{const v=document.getElementById("rn").value.trim(),y=document.getElementById("ra").value.trim(),m=document.getElementById("rt").value.trim(),x=document.querySelector('input[name="rp"]:checked').value,A=document.getElementById("reg-msg");if(!v||!y||!m){A.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}A.innerHTML='<span style="color:#888">Guardando...</span>';try{const h=xl(i.length+1),C=bl(),S=await wr({nombre:v,apellido:y,tel:m,...document.getElementById("re").value.trim()&&{email:document.getElementById("re").value.trim()},...document.getElementById("rf").value.trim()&&{familia:document.getElementById("rf").value.trim()},...document.getElementById("rc").value.trim()&&{comentarios:document.getElementById("rc").value.trim()},estado:x,codigo:h,token:C});A.innerHTML=`<span style="color:#3B6D11">✓ ${v} ${y} (${h})</span>`,["rn","ra","rt","re","rf","rc"].forEach(M=>{const N=document.getElementById(M);N&&(N.value="")}),x==="pagado"&&setTimeout(()=>window._abrirWA(S.id),600)}catch(h){A.innerHTML=`<span style="color:#A32D2D">Error: ${h.message}</span>`}};function b(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}let I=[];window._procesarExcel=async v=>{const y=v.files[0];if(!y)return;const m=document.getElementById("excel-preview");m.innerHTML='<p style="font-size:12px;color:#888">Procesando...</p>';try{const x=await mn(()=>import("https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs"),[]),A=await y.arrayBuffer(),h=x.read(A),C=h.Sheets[h.SheetNames[0]],S=x.utils.sheet_to_json(C,{header:1}),M=typeof S[0][0]=="string"&&S[0][0].toLowerCase().includes("nombre")?1:0;I=S.slice(M).filter(N=>N[0]&&N[1]&&N[2]).map(N=>({nombre:String(N[0]||"").trim(),apellido:String(N[1]||"").trim(),tel:String(N[2]||"").trim(),...N[3]?{email:String(N[3]).trim()}:{},...N[4]?{familia:String(N[4]).trim()}:{},...N[5]?{comentarios:String(N[5]).trim()}:{},estado:String(N[6]||"").toUpperCase()==="SI"?"pagado":"pendiente"})),m.innerHTML=`
        <p style="font-size:12px;color:#3B6D11;margin-bottom:8px">
          ✓ ${I.length} invitados detectados
        </p>
        <div style="max-height:200px;overflow-y:auto;border:.5px solid #e0d5c8;border-radius:8px">
          ${I.slice(0,5).map(N=>`
            <div style="padding:6px 10px;border-bottom:.5px solid #f0ebe4;font-size:12px">
              ${N.nombre} ${N.apellido} · ${N.tel} · <span class="badge ${N.estado==="pagado"?"b-pago":"b-pend"}">${N.estado==="pagado"?"Pagado":"Pendiente"}</span>
            </div>`).join("")}
          ${I.length>5?`<div style="padding:6px 10px;font-size:11px;color:#aaa">...y ${I.length-5} más</div>`:""}
        </div>`,document.getElementById("btn-importar").style.display="block"}catch(x){m.innerHTML=`<p style="color:#A32D2D;font-size:12px">Error al leer el archivo: ${x.message}</p>`}},window._importarExcel=async()=>{if(!I.length)return;const v=document.getElementById("btn-importar"),y=document.getElementById("excel-msg");v.disabled=!0,v.textContent="Importando...",y.innerHTML='<span style="color:#888">Procesando...</span>';let m=0,x=0;const A=i.length;for(let h=0;h<I.length;h++)try{const C=I[h];await wr({...C,codigo:xl(A+h+1),token:bl()}),m++}catch{x++}y.innerHTML=`<span style="color:#3B6D11">✓ ${m} invitados importados${x?` (${x} errores)`:""}</span>`,v.style.display="none",I=[]};function T(){const v=document.getElementById("tab-content");if(!o.length){v.innerHTML='<div class="empty">Sin pedidos aún 🍷</div>';return}v.innerHTML=o.map(y=>{var m;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">#${(m=y.fireId)==null?void 0:m.slice(-4).toUpperCase()}</span>
        <div style="flex:1;min-width:90px">
          <div style="font-size:12px;font-weight:500">${y.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${y.standNombre}${y.retiro==="envio"?' · <span style="color:#5A1E99">Envío</span>':""}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:100px">${(y.items||[]).map(x=>x.desc).join(" · ")}</span>
        <span style="font-size:14px;font-weight:500">$${Bi(y.total||0)}</span>
        <span class="badge ${Qm[y.estado]}">${$m[y.estado]}</span>
      </div>`}).join("")}function _(){const v=window.location.origin;document.getElementById("tab-content").innerHTML=`
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>QR de pedidos:</strong> se imprime en el stand — los clientes lo escanean con su QR de acceso.<br>
        <strong>Panel stand:</strong> para el personal de la bodega (ver pedidos + marcar entregas).<br>
        <strong>Carga vinos:</strong> para que cada bodega cargue su carta directamente.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${It.filter(y=>!y.oculto).map(y=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${y.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${y.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${y.region}</div>
            <canvas id="qr-s${y.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="font-size:10px;color:#aaa;margin-bottom:8px;word-break:break-all">${v}/stand/${y.id}</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${v}/stand/${y.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <div style="display:flex;gap:4px">
                <a href="${v}/panel/${y.id}?key=${y.key}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none;flex:1;justify-content:center">Panel</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#185FA5;border-color:#185FA5"
                  onclick="navigator.clipboard?.writeText('${v}/panel/${y.id}?key=${y.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="display:flex;gap:4px">
                <a href="${v}/bodega/${y.id}/vinos?key=${y.key}" target="_blank" class="btn" style="font-size:11px;padding:5px;text-decoration:none;color:#3A7D44;border-color:#3A7D44;flex:1;justify-content:center">Vinos</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#3A7D44;border-color:#3A7D44"
                  onclick="navigator.clipboard?.writeText('${v}/bodega/${y.id}/vinos?key=${y.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="font-size:10px;color:#aaa;margin-top:2px">Pass: <strong>${y.pass}</strong></div>
            </div>
          </div>`).join("")}
      </div>`,It.forEach(y=>setTimeout(()=>vl("qr-s"+y.id,`${v}/stand/${y.id}`,110),50))}function D(){const v=i.filter(C=>C.estado==="pagado").length,y=i.filter(C=>C.estado==="ingresado").length,m=(v+y)*35e3,x=o.reduce((C,S)=>C+(S.total||0),0),A={};o.forEach(C=>{A[C.standId]||(A[C.standId]={n:C.standNombre,t:0,c:0,b:0}),A[C.standId].t+=C.total||0,A[C.standId].c++,(C.items||[]).forEach(S=>{const M=S.desc&&S.desc.match(/×(\d+)/);M&&(A[C.standId].b+=parseInt(M[1]))})});const h=Object.values(A).sort((C,S)=>S.t-C.t);document.getElementById("tab-content").innerHTML=`
      <div class="stats">
        ${[[i.filter(C=>C.estado!=="invalidado").length,"Invitados"],[v+y,"Con bono"],["$"+Bi(m),"Bonos"],[o.length,"Pedidos"],["$"+Bi(x),"Ventas"],[o.filter(C=>C.retiro==="envio").length+p.filter(C=>C.estado==="listo"||C.estado==="entregado").length,"Envíos"]].map(([C,S])=>`<div class="stat"><div class="v" style="font-size:${String(C).length>7?"13px":"20px"}">${C}</div><div class="l">${S}</div></div>`).join("")}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Ventas por bodega</p>
        ${h.length?h.map(C=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span style="font-weight:500;flex:1">${C.n}</span><span style="color:#888;flex:1;text-align:center">${C.c} ped. · ${C.b} bot.</span><span style="font-weight:500;flex:0;white-space:nowrap">$${Bi(C.t)}</span>
          </div>`).join(""):'<div class="empty">Sin ventas aún</div>'}
      </div>`}function B(){const v=document.getElementById("tab-body"),y=s.filter(m=>m.estado==="cancelado");if(!y.length){v.innerHTML='<div class="empty" style="padding:40px">Sin pedidos cancelados 👍</div>';return}v.innerHTML=`
      <div style="background:#FEE2E2;border:1px solid #FCA5A5;border-radius:8px;
        padding:10px 14px;margin-bottom:14px;font-size:12px;color:#991B1B">
        ⚠️ Estos pedidos fueron cancelados después de cobrar. Los QR asociados ya no son válidos
        pero pueden haber sido impresos o enviados por WhatsApp.
      </div>
      ${y.map(m=>{const x=m.canceladoAt?new Date(m.canceladoAt).toLocaleString("es-AR"):"Sin fecha";return`
        <div class="card" style="margin-bottom:8px;border-left:4px solid #C0392B;opacity:.9">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
            <div>
              <div style="font-size:14px;font-weight:500;color:#1A3A5C">${m.invNombre||"Invitado"}</div>
              <div style="font-size:11px;color:#888">${m.invCodigo||""} · ${m.standNombre}</div>
            </div>
            <span class="badge" style="background:#C0392B;color:#fff">❌ Cancelado</span>
          </div>
          <div style="font-size:12px;color:#666;margin-bottom:4px">
            ${(m.items||[]).map(A=>A.desc).join(" · ")}
          </div>
          <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:500">
            <span style="color:#888">Cancelado: ${x}</span>
            <span style="color:#C0392B">$${Number(m.total||0).toLocaleString("es-AR")}</span>
          </div>
          ${m.canceladoMotivo?`<div style="font-size:11px;color:#aaa;margin-top:3px">${m.canceladoMotivo}</div>`:""}
        </div>`}).join("")}
      <div style="font-size:12px;color:#888;text-align:right;margin-top:8px">
        Total cancelado: <strong style="color:#C0392B">
          $${y.reduce((m,x)=>m+(x.total||0),0).toLocaleString("es-AR")}
        </strong>
      </div>`}async function P(){const v=document.getElementById("tab-content");v.innerHTML='<div class="empty">Cargando stock...</div>';const y={};if(o.forEach(m=>{(m.items||[]).forEach(x=>{const A=m.standId+"_"+(x.vinoId||x.vinoNombre||"");y[A]||(y[A]={reservado:0,pagado:0,entregado:0});const h=x.qty||1;m.estado==="pagado"||m.estado==="listo"?y[A].pagado+=h:m.estado==="entregado"?y[A].entregado+=h:m.estado!=="cancelado"&&m.estado!=="reembolsado"&&(y[A].reservado+=h)})}),!a.length){v.innerHTML='<div class="empty" style="padding:40px">Sin stock cargado todavía.<br><br>Cargá el stock desde la pantalla de vinos de cada bodega.</div>';return}v.innerHTML=`
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
${a.map((m,x)=>{const A=y[m.standId+"_"+m.vinoId]||{pagado:0,entregado:0},h=It.find(N=>Number(N.id)===Number(m.standId)),C=(m.total||0)-(m.degustacion||0)-(m.reservado||0)-(m.pagado||0)-(m.entregado||0),S=C<=0?"#C0392B":C<=3?"#D97706":"#3A7D44";return'<tr style="background:'+(x%2===0?"#fff":"#F8FAFC")+';border-bottom:.5px solid #E8EFF5"><td style="padding:8px"><div style="font-weight:500;color:#1A3A5C">'+(m.vinoNombre||m.vinoId)+'</div><div style="font-size:11px;color:#888">Stand #'+m.standId+" · "+((h==null?void 0:h.nombre)||"")+'</div></td><td style="padding:8px;text-align:center;font-weight:500">'+(m.total||0)+'</td><td style="padding:8px;text-align:center;color:#D97706">'+(m.degustacion||0)+'</td><td style="padding:8px;text-align:center">'+(m.reservado||0)+'</td><td style="padding:8px;text-align:center">'+A.pagado+'</td><td style="padding:8px;text-align:center">'+A.entregado+'</td><td style="padding:8px;text-align:center;font-weight:600;color:'+S+'">'+Math.max(0,C)+'</td><td style="padding:8px;text-align:center"><button class="btn" style="font-size:10px;padding:3px 6px;margin-bottom:3px;display:block;width:100%" data-sid="'+m.standId+'" data-vid="'+m.vinoId+'" data-nom="'+encodeURIComponent(m.vinoNombre||m.vinoId)+'" onclick="window._agregarStock(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">+ Stock</button><button class="btn" style="font-size:10px;padding:3px 6px;color:#D97706;border-color:#D97706;display:block;width:100%" data-sid="'+m.standId+'" data-vid="'+m.vinoId+'" data-nom="'+encodeURIComponent(m.vinoNombre||m.vinoId)+'" onclick="window._agregarDegustation(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">Degust.</button><button class="btn" style="font-size:10px;padding:3px 6px;color:#3A7D44;border-color:#3A7D44;display:block;width:100%;margin-top:3px" data-sid="'+m.standId+'" data-vid="'+m.vinoId+'" data-nom="'+encodeURIComponent(m.vinoNombre||m.vinoId)+'" onclick="window._devolverDegustacion(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">↩ Devolver</button></td></tr>'}).join("")}
          </tbody>
        </table>
      </div>`}window._agregarStock=async(v,y,m)=>{const x=parseInt(prompt("Agregar stock para "+m+`
¿Cuántas botellas agregar?`));!x||x<=0||(await eo(v,y,x),P())},window._devolverDegustacion=async(v,y,m)=>{const x=parseInt(prompt("Devolver degustación a stock para "+m+`
¿Cuántas botellas regresan?`));!x||x<=0||(await Ir(v,y,-x),P())},window._agregarDegustation=async(v,y,m)=>{const x=parseInt(prompt("Registrar degustación para "+m+`
¿Cuántas botellas se abrieron?`));!x||x<=0||(await Ir(v,y,x),P())};function O(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">📊 Exportar datos</p>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div>
            <button class="btn btn-v" style="width:100%;padding:10px" onclick="window._exportarVinosExcel()">⬇️ Carta de vinos (CSV)</button>
            <div id="export-vinos-msg" style="font-size:12px;text-align:center;margin-top:4px"></div>
          </div>
          <div>
            <button class="btn btn-b" style="width:100%;padding:10px" onclick="window._exportarRemitosExcel()">⬇️ Remitos / Pedidos (CSV)</button>
            <div id="export-remitos-msg" style="font-size:12px;text-align:center;margin-top:4px"></div>
          </div>
          <div>
            <button class="btn" style="width:100%;padding:10px;color:#3A7D44;border-color:#3A7D44" onclick="window._exportarStockExcel()">⬇️ Stock actualizado (CSV)</button>
            <div id="export-stock-msg" style="font-size:12px;text-align:center;margin-top:4px"></div>
          </div>
        </div>
      </div>
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">🔗 Links útiles</p>
        ${[["Registro público (para compartir con invitados)","/registro"],["Panel de caja","/caja"],["Control de puerta","/puerta"],["Logística / envíos","/logistica"]].map(([v,y])=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span>${v}</span>
            <div style="display:flex;gap:4px">
              <a href="${y}" target="_blank" class="btn" style="padding:3px 8px;font-size:11px;color:#6B1C1C;border-color:#6B1C1C">Abrir</a>
              <button onclick="navigator.clipboard.writeText(window.location.origin+'${y}').then(()=>this.textContent='✓').catch(()=>{})" class="btn" style="padding:3px 8px;font-size:11px">Copiar</button>
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
        <!-- BOTÓN DESHABILITADO DÍA DEL EVENTO -->
        <div id="limpiar-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
      </div>`}function z(v,y){const m=window.location.origin+"/familia/"+encodeURIComponent(v.toLowerCase())+"?key="+y,x=document.getElementById("familia-result");x.innerHTML='<div style="margin-top:6px;padding:8px;background:#f0f4f8;border-radius:6px;word-break:break-all"><div style="font-size:11px;color:#888;margin-bottom:4px">Link para familia '+v+':</div><a href="'+m+'" target="_blank" style="color:#1A3A5C;font-size:12px">'+m+`</a><button onclick="navigator.clipboard.writeText(this.dataset.link).then(()=>this.textContent='Copiado!')" data-link="`+m+'" style="display:block;margin-top:8px;padding:6px 12px;border-radius:6px;border:1px solid #1A3A5C;background:#fff;color:#1A3A5C;font-size:12px;cursor:pointer;width:100%">Copiar link</button><button onclick="window._regenerarLinkFamilia()" style="display:block;margin-top:4px;padding:6px 12px;border-radius:6px;border:1px solid #C0392B;background:#fff;color:#C0392B;font-size:12px;cursor:pointer;width:100%">Regenerar link (invalida el anterior)</button></div>'}window._generarLinkFamilia=async()=>{const v=document.getElementById("familia-apellido").value.trim(),y=document.getElementById("familia-result");if(!v){y.innerHTML='<span style="color:#C0392B">Ingresá un apellido</span>';return}y.innerHTML='<span style="color:#888">Buscando...</span>';try{const m=await xc(v);if(m)z(v,m);else{const x=Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,10);await _r(v,x),z(v,x)}}catch(m){y.innerHTML='<span style="color:#C0392B">Error: '+m.message+"</span>"}},window._regenerarLinkFamilia=async()=>{const v=document.getElementById("familia-apellido").value.trim(),y=document.getElementById("familia-result");if(confirm("¿Seguro? El link anterior dejará de funcionar.")){y.innerHTML='<span style="color:#888">Regenerando...</span>';try{const m=Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,10);await _r(v,m),z(v,m)}catch(m){y.innerHTML='<span style="color:#C0392B">Error: '+m.message+"</span>"}}},window._exportarVinosExcel=async()=>{const v=document.getElementById("export-vinos-msg");v.innerHTML='<span style="color:#888">Cargando vinos...</span>';try{const y=[["Bodega","Stand #","Nombre","Varietal","Cosecha","Descripción","Precio Botella","Unidades por Caja","Precio por Caja"]];let m=It.length;const x={};await new Promise(S=>{It.forEach(M=>{Ge(M.id,N=>{x[M.id]={bodega:M,vinos:N},m--,m===0&&S()})})}),It.forEach(S=>{const M=x[S.id];M&&M.vinos.forEach(N=>{const $=Array.isArray(N.unidades)?N.unidades:[],W=$.find(U=>U.u==="Botella"),G=$.find(U=>U.unidadesPorCaja);y.push([S.nombre,S.id,N.nombre||"",N.varietal||"",N.cosecha||"",N.descripcion||"",W?W.p:"",G?G.unidadesPorCaja:"",G?G.p:""])})});const A=y.map(S=>S.map(M=>'"'+String(M).replace(/"/g,'""')+'"').join(",")).join(`
`),h=new Blob(["\uFEFF"+A],{type:"text/csv;charset=utf-8;"}),C=document.createElement("a");C.href=URL.createObjectURL(h),C.download="SUCOVI2027_vinos.csv",C.click(),v.innerHTML='<span style="color:#3A7D44">✓ Descargado</span>'}catch(y){v.innerHTML='<span style="color:#C0392B">Error: '+y.message+"</span>"}},window._exportarRemitosExcel=async()=>{const v=document.getElementById("export-remitos-msg");v.innerHTML='<span style="color:#888">Exportando...</span>';try{const y=[["Voucher","Invitado","Código","Familia","Bodega","Stand #","Detalle","Total","Retiro","Estado","Fecha"]];o.forEach(h=>{var N;const C=h.voucherNum?"VOC-"+String(h.voucherNum).padStart(3,"0"):"",S=(h.items||[]).map($=>$.desc).join(" | "),M=(N=h.creadoEn)!=null&&N.toDate?h.creadoEn.toDate().toLocaleDateString("es-AR"):"";y.push([C,h.invNombre||"",h.invCodigo||"",h.invFamilia||"",h.standNombre||"",h.standId||"",S,h.total||0,h.retiro||"stand",h.estado||"",M])});const m=y.map(h=>h.map(C=>'"'+String(C).replace(/"/g,'""')+'"').join(",")).join(`
`),x=new Blob(["\uFEFF"+m],{type:"text/csv;charset=utf-8;"}),A=document.createElement("a");A.href=URL.createObjectURL(x),A.download="SUCOVI2027_remitos.csv",A.click(),v.innerHTML='<span style="color:#3A7D44">✓ '+o.length+" remitos exportados</span>"}catch(y){v.innerHTML='<span style="color:#C0392B">Error: '+y.message+"</span>"}},window._exportarStockExcel=()=>{const v=document.getElementById("export-stock-msg");v.innerHTML='<span style="color:#888">Exportando...</span>';try{const y=[["Bodega","Stand #","Vino","Stock Total","Degustación","Reservado","Pagado","Entregado","Disponible"]];a.forEach(h=>{const C=(h.total||0)-(h.degustacion||0)-(h.reservado||0)-(h.pagado||0)-(h.entregado||0),S=It.find(M=>M.id===h.standId||String(M.id)===String(h.standId));y.push([S?S.nombre:"",h.standId||"",h.vinoNombre||"",h.total||0,h.degustacion||0,h.reservado||0,h.pagado||0,h.entregado||0,C])});const m=y.map(h=>h.map(C=>'"'+String(C).replace(/"/g,'""')+'"').join(",")).join(`
`),x=new Blob(["\uFEFF"+m],{type:"text/csv;charset=utf-8;"}),A=document.createElement("a");A.href=URL.createObjectURL(x),A.download="SUCOVI2027_stock.csv",A.click(),v.innerHTML='<span style="color:#3A7D44">✓ '+(y.length-1)+" vinos exportados</span>"}catch(y){v.innerHTML='<span style="color:#C0392B">Error: '+y.message+"</span>"}},window._cambiarPin=()=>{const v=document.getElementById("nuevo-pin").value.trim(),y=document.getElementById("pin-msg");if(!/^\d{4}$/.test(v)){y.innerHTML='<span style="color:#C0392B">El PIN debe tener exactamente 4 digitos</span>';return}localStorage.setItem("sucovi-admin-pin",v),sessionStorage.setItem("admin-pin",v),y.innerHTML='<span style="color:#3B6D11">PIN actualizado correctamente</span>',document.getElementById("nuevo-pin").value=""},window._limpiar=async()=>{if(!confirm(`⚠️ ¿Seguro? Esto borra TODOS los invitados y pedidos.
Esta acción no se puede deshacer.`)||!confirm("Segunda confirmación: ¿borrar todos los datos de prueba?"))return;const v=document.getElementById("limpiar-msg");v.innerHTML='<span style="color:#888">Borrando...</span>';try{await mc(),v.innerHTML='<span style="color:#3B6D11">✓ Datos borrados correctamente</span>'}catch(y){v.innerHTML=`<span style="color:#A32D2D">Error: ${y.message}</span>`}},window._abrirWA=v=>{const y=i.find(S=>S.fireId===v);if(!y)return;c=v,document.getElementById("mw-tit").textContent=y.nombre+" "+y.apellido,document.getElementById("mw-cod").textContent=y.codigo||"",document.getElementById("mw-bdg").innerHTML=wl(y.estado);const m=window.location.origin,x=`${m}/acceso?inv=${y.token}`;document.getElementById("mw-link").textContent=x;const A=y.estado==="ingresado"?`Hola ${y.nombre}! 🍷

Ya estás dentro de SUCOVI 2027 — ¡disfrutá la noche!

Si necesitás tu QR para los stands:
👉 ${x}

_Personal e intransferible._`:y.estado==="pagado"?`Hola ${y.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${x}

_Personal e intransferible. Un solo uso en la entrada._`:`Hola ${y.nombre}! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Tu link personal:
👉 ${x}

Consultas: José Pannunzio +54 9 11 5400-1313`;document.getElementById("mw-msg").textContent=A;const h=document.getElementById("mw-btn-p"),C=document.getElementById("mw-badge-estado");y.estado==="pendiente"?(h.textContent="✓ Marcar como pagado",h.disabled=!1,h.style.display="block",h.style.background="#D97706",h.style.borderColor="#D97706",C&&(C.textContent="⏳ Pendiente",C.style.background="#FEF3C7",C.style.color="#92400E")):y.estado==="ingresado"?(h.style.display="none",C&&(C.textContent="✅ Ingresó al evento",C.style.background="#D1FAE5",C.style.color="#065F46")):(h.style.display="none",C&&(C.textContent="✅ Bono confirmado",C.style.background="#D1FAE5",C.style.color="#065F46")),vl("mw-canvas",y.codigo||y.fireId,80),document.getElementById("modal-wa").style.display="flex"},window._descargarQR=async v=>{const y=i.find(gt=>gt.fireId===v);if(!y)return;window.qrcode||await new Promise((gt,Ft)=>{const de=document.createElement("script");de.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",de.onload=gt,de.onerror=Ft,document.head.appendChild(de)});const x=window.location.origin+"/acceso?inv="+y.token,A=document.createElement("canvas"),h=600,C=800;A.width=h,A.height=C;const S=A.getContext("2d"),M=S.createLinearGradient(0,0,0,C);M.addColorStop(0,"#1A3A5C"),M.addColorStop(.55,"#2C5F8A"),M.addColorStop(1,"#3A7D44"),S.fillStyle=M,S.fillRect(0,0,h,C),S.fillStyle="#C9A96E",S.fillRect(0,C-4,h,4),S.fillStyle="rgba(255,255,255,0.7)",S.font="500 18px system-ui, -apple-system, sans-serif",S.textAlign="center",S.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",h/2,54),S.fillStyle="#ffffff",S.font="500 38px system-ui, -apple-system, sans-serif",S.fillText(y.nombre+" "+y.apellido,h/2,110),S.fillStyle="rgba(255,255,255,0.75)",S.font="400 22px system-ui, -apple-system, sans-serif",S.fillText(y.codigo,h/2,146),S.fillStyle="#3A7D44";const N=200,$=34,W=h/2-N/2,G=164;H(S,W,G,N,$,17),S.fill(),S.fillStyle="#ffffff",S.font="500 15px system-ui, -apple-system, sans-serif",S.fillText("✅ Bono confirmado",h/2,G+23);const U=320,at=340,tt=h/2-U/2,xt=220;S.fillStyle="#ffffff",H(S,tt,xt,U,at,16),S.fill();const ft=qrcode(0,"M");ft.addData(x),ft.make();const Jt=ft.getModuleCount(),Ut=240,ge=tt+(U-Ut)/2,De=xt+24,$t=Ut/Jt;S.fillStyle="#000000";for(let gt=0;gt<Jt;gt++)for(let Ft=0;Ft<Jt;Ft++)ft.isDark(gt,Ft)&&S.fillRect(ge+Ft*$t,De+gt*$t,$t,$t);S.fillStyle="#1A3A5C",S.font="500 26px system-ui, -apple-system, sans-serif",S.fillText(y.codigo,h/2,xt+at-44),S.fillStyle="#888",S.font="400 14px system-ui, -apple-system, sans-serif",S.fillText("Mostrá este QR en la entrada",h/2,xt+at-20),S.fillStyle="rgba(255,255,255,0.85)",S.font="400 18px system-ui, -apple-system, sans-serif",S.fillText("Sáb 20 jun 2026  ·  19:30 hs",h/2,xt+at+50),S.fillText("Roma 656, Olivos",h/2,xt+at+80),S.fillStyle="rgba(255,255,255,0.5)",S.font="400 13px system-ui, -apple-system, sans-serif",S.fillText("Personal e intransferible · Un solo uso en la entrada",h/2,C-24),await new Promise(gt=>{const Ft=new Image;Ft.onload=()=>{const Ve=h-70-20,Ke=C-70-20;S.save(),S.beginPath(),S.arc(Ve+70/2,Ke+70/2,70/2+3,0,Math.PI*2),S.fillStyle="rgba(255,255,255,0.25)",S.fill(),S.beginPath(),S.arc(Ve+70/2,Ke+70/2,70/2,0,Math.PI*2),S.clip(),S.drawImage(Ft,Ve,Ke,70,70),S.restore(),gt()},Ft.onerror=gt,Ft.src=ws});const Qt=document.createElement("a");Qt.download="QR-"+y.codigo+".png",Qt.href=A.toDataURL("image/png"),Qt.click()};function H(v,y,m,x,A,h){v.beginPath(),v.moveTo(y+h,m),v.lineTo(y+x-h,m),v.quadraticCurveTo(y+x,m,y+x,m+h),v.lineTo(y+x,m+A-h),v.quadraticCurveTo(y+x,m+A,y+x-h,m+A),v.lineTo(y+h,m+A),v.quadraticCurveTo(y,m+A,y,m+A-h),v.lineTo(y,m+h),v.quadraticCurveTo(y,m,y+h,m),v.closePath()}let R=null;window._editarInv=v=>{const y=i.find(m=>m.fireId===v);y&&(R=v,document.getElementById("edit-nom").value=y.nombre||"",document.getElementById("edit-ape").value=y.apellido||"",document.getElementById("edit-tel").value=y.tel||"",document.getElementById("edit-email").value=y.email||"",document.getElementById("edit-familia").value=y.familia||"",document.getElementById("edit-comentarios").value=y.comentarios||"",document.getElementById("edit-estado").value=y.estado||"pendiente",document.getElementById("edit-msg").innerHTML="",document.getElementById("modal-edit").style.display="flex")},window._guardarEdit=async()=>{const v=document.getElementById("edit-msg"),y=document.getElementById("edit-nom").value.trim(),m=document.getElementById("edit-ape").value.trim(),x=document.getElementById("edit-tel").value.trim();if(!y||!m||!x){v.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}v.innerHTML='<span style="color:#888">Guardando...</span>';const A={nombre:y,apellido:m,tel:x,estado:document.getElementById("edit-estado").value,...document.getElementById("edit-email").value.trim()&&{email:document.getElementById("edit-email").value.trim()},...document.getElementById("edit-familia").value.trim()&&{familia:document.getElementById("edit-familia").value.trim()},...document.getElementById("edit-comentarios").value.trim()&&{comentarios:document.getElementById("edit-comentarios").value.trim()}};try{await Ae(R,A),v.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEdit(),1200)}catch(h){v.innerHTML=`<span style="color:#C0392B">Error: ${h.message}</span>`}},window._cerrarEdit=()=>{document.getElementById("modal-edit").style.display="none",R=null},window._pagarM=async()=>{const v=i.find(C=>C.fireId===c);if(!v||v.estado!=="pendiente")return;const y=document.getElementById("mw-btn-p");y&&(y.disabled=!0,y.textContent="✓ Pagado",y.style.background="#3A7D44",y.style.borderColor="#3A7D44");const m=document.getElementById("mw-badge-estado");m&&(m.textContent="✅ Bono pagado",m.style.background="#D1FAE5",m.style.color="#065F46");const x=`${window.location.origin}/acceso?inv=${v.token}`,A=`Hola ${v.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${x}

_Personal e intransferible. Un solo uso en la entrada._`,h=document.getElementById("mw-msg");h&&(h.textContent=A),await Ae(v.fireId,{estado:"pagado"})},window._envWA=()=>{const v=document.getElementById("mw-msg").textContent,y=i.find(x=>x.fireId===c),m=((y==null?void 0:y.tel)||"").replace(/\D/g,"");m?window.open("https://wa.me/"+m+"?text="+encodeURIComponent(v),"_blank"):alert("Sin teléfono cargado")},window._copWA=()=>{var m;(m=navigator.clipboard)==null||m.writeText(document.getElementById("mw-msg").textContent).catch(()=>{});const v=document.querySelector("#modal-wa .btn-g"),y=v.innerHTML;v.innerHTML="✓ ¡Copiado!",setTimeout(()=>v.innerHTML=y,2e3)},window._cModal=()=>{document.getElementById("modal-wa").style.display="none",c=null},f()}const qt=n=>Number(n).toLocaleString("es-AR");async function Al(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Wm(n){oe();let t=[],e=[],i="cobrar",o=null,s=[],a=null,l=!1;n.innerHTML=Ht({title:"💰 Caja central",sub:"Sucovi 2027 · Roma 656, Olivos",backHref:"/admin"})+`
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
    </div>`,wo(m=>{t=m,i==="cobrar"&&!o&&w()}),Ao(m=>{e=m,i!=="cobrar"&&c()}),window._cajaVista=(m,x)=>{i=m,o=null,document.querySelectorAll(".nav button").forEach(A=>A.classList.remove("on")),x.classList.add("on"),c()};function c(){i==="cobrar"&&f(),i==="pedidos"&&I(),i==="especial"&&B()}let p={};async function w(){const m=t.filter(A=>A.estado==="ingresado"),x=await Promise.all(m.map(async A=>{try{const C=(await Ar(A.fireId)).filter(N=>{var $;return($=N.items)==null?void 0:$.length});if(!C.length)return null;const S=C.reduce((N,$)=>N+($.items||[]).reduce((W,G)=>W+(G.sub||0),0),0),M=C.reduce((N,$)=>N+($.items||[]).length,0);return{fireId:A.fireId,total:S,cant:M,stands:C.length}}catch{return null}}));p={},x.filter(Boolean).forEach(A=>{p[A.fireId]=A}),g()}function f(){const m=document.getElementById("caja-content");if(o){b();return}m.innerHTML=`
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <input id="buscar-caja" placeholder="Buscar por nombre o código..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda">
        <p style="font-size:12px;color:#888;margin-bottom:8px">Cargando carritos activos...</p>
      </div>`,t.length&&w()}function g(){var h;const m=document.getElementById("resultados-busqueda");if(!m)return;const x=(((h=document.getElementById("buscar-caja"))==null?void 0:h.value)||"").toLowerCase().trim();let A=t.filter(C=>C.estado!=="invalidado");if(x?A=A.filter(C=>(C.codigo||"").toLowerCase().includes(x)||(C.nombre+" "+C.apellido).toLowerCase().includes(x)):A=A.filter(C=>p[C.fireId]),!A.length){m.innerHTML=x?'<div class="empty">Sin resultados</div>':'<div class="empty" style="padding:24px">Sin carritos activos — nadie ha agregado vinos todavía 🍷</div>';return}m.innerHTML=(x?"":`<p style="font-size:11px;color:#888;margin-bottom:8px;font-weight:500">CARRITOS ACTIVOS (${A.length})</p>`)+A.map(C=>{const S=p[C.fireId];return`
        <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
          align-items:center;gap:10px" onclick="window._seleccionarInv('${C.fireId}')">
          <div class="avatar">${C.nombre[0]}${C.apellido[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${C.nombre} ${C.apellido}</div>
            <div style="font-size:12px;color:#888">${C.codigo} · ${C.tel}</div>
            ${S?`<div style="font-size:12px;color:#3A7D44;font-weight:500;margin-top:2px">
              🍷 ${S.cant} ítem${S.cant>1?"s":""} · $${Number(S.total).toLocaleString("es-AR")}
              <span style="color:#888;font-weight:400"> · ${S.stands} stand${S.stands>1?"s":""}</span>
            </div>`:'<div style="font-size:11px;color:#aaa;margin-top:2px">Carrito vacío</div>'}
          </div>
          <span class="badge ${C.estado==="pagado"||C.estado==="ingresado"?"b-pago":"b-pend"}">
            ${C.estado==="pagado"||C.estado==="ingresado"?"Bono pagado":"Pendiente"}
          </span>
          <span style="color:#1A3A5C;font-size:18px">›</span>
        </div>`}).join("")}window._buscarInv=(m=!1)=>{var h;const x=(((h=document.getElementById("buscar-caja"))==null?void 0:h.value)||"").toLowerCase().trim();if(!x){g();return}const A=t.filter(C=>C.estado!=="invalidado"&&((C.codigo||"").toLowerCase().includes(x)||(C.nombre+" "+C.apellido).toLowerCase().includes(x)));if(m&&A.length===1){window._seleccionarInv(A[0].fireId);return}g()},window._seleccionarInv=async m=>{o=t.find(x=>x.fireId===m),o&&(s=await Ar(m),b())};async function b(){const m=document.getElementById("caja-content");if(!m)return;const x=o,A=s.filter(S=>{var M;return(M=S.items)==null?void 0:M.length}),h=A.reduce((S,M)=>S+(M.items||[]).reduce((N,$)=>N+($.sub||0),0),0),C=e.filter(S=>S.invFireId===x.fireId);m.innerHTML=`
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
        ${C.length?`<div style="background:#D1FAE5;border-radius:6px;padding:6px 10px;
          font-size:12px;color:#065F46">
          ✅ Ya tiene ${C.length} pedido${C.length>1?"s":""} pagado${C.length>1?"s":""} esta noche
        </div>`:""}
      </div>

      ${A.length?`
        ${A.map(S=>`
          <div class="card" style="margin-bottom:10px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">
              🍷 ${S.standNombre} · Stand #${S.standId}
              ${S.retiro==="envio"?'<span class="badge b-envi" style="margin-left:6px">🚚 Envío</span>':""}
            </div>
            ${(S.items||[]).map(M=>`
              <div style="display:flex;justify-content:space-between;font-size:13px;
                color:#555;padding:4px 0;border-bottom:.5px solid #f5f0eb">
                <span>${M.desc}</span><strong>$${qt(M.sub)}</strong>
              </div>`).join("")}
            <div style="display:flex;justify-content:space-between;font-size:13px;
              font-weight:500;margin-top:8px;padding-top:6px;border-top:.5px solid #D6E4F0">
              <span>Subtotal</span>
              <span>$${qt((S.items||[]).reduce((M,N)=>M+(N.sub||0),0))}</span>
            </div>
          </div>`).join("")}
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL</span><span style="color:#1A3A5C">$${qt(h)}</span>
          </div>
          <p style="font-size:12px;color:#888;margin-top:4px">
            ${A.length} stand${A.length>1?"s":""}
          </p>
        </div>
        <div id="cobro-msg" style="font-size:12px;text-align:center;margin-bottom:8px"></div>
        <button class="btn btn-g" style="width:100%;padding:14px;font-size:16px;margin-bottom:8px"
          onclick="window._cobrar()">
          ✓ Cobrar $${qt(h)} y generar vouchers
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
    `}window._imprimirVouchers=()=>{const{inv:m,items:x}=window._lastCobrado||{};if(!m||!x)return;const A=C=>Number(C).toLocaleString("es-AR"),h=window.open("","_blank");h.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <title>Vouchers - ${m.nombre} ${m.apellido}</title>
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
    ${window._lastPedidosIds?window._lastPedidosIds.map((C,S)=>{const M=x[S];return M?`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${M.standId}</div>
              <div class="voc-num">${window._lastPedidosIds&&x[S]?"VOC-"+String((window._lastVoucherNums||[])[S]||0).padStart(3,"0"):"VOC-000"}</div>
              <div class="stand">${M.standNombre}</div>
              <div class="inv">${m.nombre} ${m.apellido} · ${m.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(M.items||[]).map(N=>`
            <div class="item"><span>${N.desc}</span><strong>$${A(N.sub)}</strong></div>
          `).join("")}
          <div class="total">
            <span>Total</span>
            <span>$${A((M.items||[]).reduce((N,$)=>N+($.sub||0),0))}</span>
          </div>
        </div>
        <div class="qr-box">
          <canvas id="qr-${S}"></canvas>
          <div class="qr-hint">Escaneá en el stand</div>
        </div>
      </div>`:""}).join(""):x.map(C=>`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${C.standId}</div>
              <div class="voc-num">${window._lastPedidosIds&&x[idx]?"VOC-"+String((window._lastVoucherNums||[])[idx]||0).padStart(3,"0"):"VOC-000"}</div>
              <div class="stand">${C.standNombre}</div>
              <div class="inv">${m.nombre} ${m.apellido} · ${m.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(C.items||[]).map(S=>`
            <div class="item"><span>${S.desc}</span><strong>$${A(S.sub)}</strong></div>
          `).join("")}
          <div class="total"><span>Total</span><span>$${A((C.items||[]).reduce((S,M)=>S+(M.sub||0),0))}</span></div>
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
    </body></html>`),h.document.close()},window._enviarVouchersWA=()=>{var $;const{inv:m,items:x}=window._lastCobrado||{};if(!m||!x)return;const A=W=>Number(W).toLocaleString("es-AR"),h=x.map(W=>{const G=(W.items||[]).reduce((at,tt)=>at+(tt.sub||0),0),U=(W.items||[]).map(at=>`  • ${at.desc}: $${A(at.sub)}`).join(`
`);return`🍷 *${W.standNombre}* (Stand #${W.standId})
${U}
  Total: $${A(G)}`}).join(`

`),C=x.reduce((W,G)=>W+(G.items||[]).reduce((U,at)=>U+(at.sub||0),0),0),S=`Hola ${m.nombre}! 🍷

Aquí están tus vouchers de SUCOVI 2027:

${h}

💰 *Total pagado: $${A(C)}*

Presentá cada voucher en el stand correspondiente para retirar tus vinos. 

_Sáb 20 jun 2026 · Roma 656, Olivos_`,N="https://wa.me/54"+(($=m.tel)==null?void 0:$.replace(/\D/g,""))+"?text="+encodeURIComponent(S);window.open(N,"_blank")},window._cancelarCarrito=async()=>{if(confirm("¿Cancelar y vaciar el carrito de "+o.nombre+"?")){for(const m of s)for(const x of m.items||[])x.vinoId&&await Eo(m.standId,x.vinoId,x.qty||1).catch(()=>{});await Er(o.fireId),o=null,s=[],f()}},window._volverCobrar=()=>{o=null,s=[],f()},window._cobrar=async()=>{const m=o,x=s.filter(C=>{var S;return(S=C.items)==null?void 0:S.length});if(!x.length)return;const A=document.querySelector("#caja-content .btn-g");A&&(A.disabled=!0,A.textContent="Procesando...");const h=document.getElementById("cobro-msg");try{await rc(m,x);for(const M of x)for(const N of M.items||[])N.vinoId&&await yc(M.standId,N.vinoId,N.qty||1).catch(()=>{});await Er(m.fireId),h.innerHTML=`<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${x.length} voucher${x.length>1?"s":""} generado${x.length>1?"s":""}.
      </span>`,A&&(A.style.display="none");const C=document.getElementById("voucher-actions");C&&(C.style.display="flex"),window._lastCobrado={inv:m,items:x};const{escucharPedidosPorInvitado:S}=await mn(async()=>{const{escucharPedidosPorInvitado:M}=await Promise.resolve().then(()=>ii);return{escucharPedidosPorInvitado:M}},void 0);S(m.fireId,M=>{const N=M.filter($=>x.some(W=>W.standId===$.standId));window._lastPedidosIds=N.map($=>$.fireId),window._lastVoucherNums=N.map($=>$.voucherNum||0),console.log("voucherNums:",window._lastVoucherNums)})}catch(C){h.innerHTML=`<span style="color:#C0392B">Error: ${C.message}</span>`,A&&(A.disabled=!1,A.textContent="Reintentar")}};function I(){const m=document.getElementById("caja-content"),x=e.filter(C=>C.retiro!=="envio"),A={pagado:"b-pago",listo:"b-list",entregado:"b-entr"};if(!x.length){m.innerHTML='<div class="empty">Sin pedidos aún</div>';return}const h={};x.forEach(C=>{h[C.invFireId]||(h[C.invFireId]={nombre:C.invNombre,codigo:C.invCodigo||"",peds:[]}),h[C.invFireId].peds.push(C)}),m.innerHTML=Object.entries(h).map(([C,S])=>{var N;const M=S.peds.reduce(($,W)=>$+(W.total||0),0);return`
      <div class="card" style="margin-bottom:10px;cursor:pointer" onclick="window._verDetallePedido('${C}')">
        <div style="display:flex;align-items:center;gap:8px">
          <div class="avatar" style="width:36px;height:36px;font-size:12px;flex-shrink:0">
            ${(S.nombre||"??")[0]}${((N=(S.nombre||"??").split(" ")[1])==null?void 0:N[0])||""}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${S.nombre||""}</div>
            <div style="font-size:11px;color:#888">${S.peds.length} stand${S.peds.length>1?"s":""} · ${S.peds.map($=>'<span class="badge '+A[$.estado]+'" style="font-size:10px">'+$.standNombre+"</span>").join(" ")}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:15px;font-weight:500">$${qt(M)}</div>
            <div style="font-size:11px;color:#5BA4CF">Ver detalle ›</div>
          </div>
        </div>
      </div>`}).join("")}window._verDetallePedido=m=>{var W,G;const x=document.getElementById("caja-content"),A=e.filter(U=>U.invFireId===m),h=t.find(U=>U.fireId===m)||{nombre:((W=A[0])==null?void 0:W.invNombre)||"",apellido:"",codigo:((G=A[0])==null?void 0:G.invCodigo)||"",tel:""},C=A.filter(U=>U.estado!=="reembolsado"&&U.estado!=="cancelado").map(U=>({standId:U.standId,standNombre:U.standNombre,retiro:U.retiro,items:U.items||[],fireId:U.fireId})),S=A.filter(U=>U.estado!=="reembolsado"&&U.estado!=="cancelado").reduce((U,at)=>U+(at.total||0),0);window._lastCobrado={inv:h,items:C},window._lastPedidosIds=A.filter(U=>U.estado==="pagado").map(U=>U.fireId),window._lastVoucherNums=A.filter(U=>U.estado==="pagado").map(U=>U.voucherNum||0);const M={pagado:"#5BA4CF",entregado:"#3A7D44",reembolsado:"#C0392B",cancelado:"#C0392B",listo:"#D97706"},N={pagado:"b-pago",listo:"b-list",entregado:"b-entr",reembolsado:"b-canc",cancelado:"b-canc"},$={pagado:"💳 Pagado",listo:"✅ Listo",entregado:"📦 Entregado",reembolsado:"↩️ Reembolsado",cancelado:"❌ Cancelado"};x.innerHTML=`
      <button class="btn" onclick="window._cajaVista('pedidos', document.querySelector('.nav button:nth-child(2)'))"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>
      <div class="card" style="margin-bottom:12px">
        <div style="font-size:16px;font-weight:500">${h.nombre} ${h.apellido}</div>
        <div style="font-size:12px;color:#888">${h.codigo}${h.tel?" · "+h.tel:""}</div>
      </div>
      ${A.map(U=>`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${M[U.estado]||"#5BA4CF"};
          ${U.estado==="reembolsado"||U.estado==="cancelado"?"opacity:.7":""}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C">🍷 ${U.standNombre}</div>
            <span class="badge ${N[U.estado]||"b-pago"}">${$[U.estado]||U.estado}</span>
          </div>
          ${(U.items||[]).map(at=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555;
              ${U.estado==="reembolsado"||U.estado==="cancelado"?"text-decoration:line-through":""}">
              <span>${at.desc}</span><strong>$${qt(at.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Subtotal</span>
            <span ${U.estado==="reembolsado"||U.estado==="cancelado"?'style="text-decoration:line-through;color:#C0392B"':""}>
              $${qt(U.total||0)}
            </span>
          </div>
          ${U.estado==="pagado"?`
            <button class="btn" style="margin-top:10px;width:100%;padding:7px;font-size:12px;
              color:#C0392B;border-color:#C0392B"
              onclick="window._reembolsarUnPedido('${U.fireId}','${m}')">
              ↩️ Reembolsar este stand
            </button>`:""}
          ${U.estado==="reembolsado"?`
            <div style="font-size:11px;color:#C0392B;margin-top:6px">
              Reembolsado el ${U.reembolsadoAt?new Date(U.reembolsadoAt).toLocaleString("es-AR"):""}
            </div>`:""}
        </div>`).join("")}
      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>TOTAL COBRADO</span><span style="color:#1A3A5C">$${qt(S)}</span>
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
      </div>`},window._reembolsarUnPedido=async(m,x)=>{confirm("¿Reembolsar este pedido? El stand no podrá marcarlo como entregado.")&&(await lc(m),window._verDetallePedido(x))},window._descargarVoucherPDF=async()=>{const{inv:m,items:x}=window._lastCobrado||{};if(!m||!x)return;window.jspdf||await new Promise((N,$)=>{const W=document.createElement("script");W.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",W.onload=N,W.onerror=$,document.head.appendChild(W)}),window.qrcode||await new Promise((N,$)=>{const W=document.createElement("script");W.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",W.onload=N,W.onerror=$,document.head.appendChild(W)});const{jsPDF:A}=window.jspdf,h=new A({unit:"mm",format:"a4"}),C=window._lastPedidosIds||[];let S=15;const M=(N,$,W,G)=>{const U=(N.items||[]).length,at=Math.max(90,62+U*7);h.setDrawColor(26,58,92),h.setLineWidth(.5),h.roundedRect(10,G,190,at,3,3,"S"),h.setFillColor(26,58,92),h.roundedRect(10,G,190,16,3,3,"F"),h.rect(10,G+10,190,6,"F"),h.setTextColor(180,180,180),h.setFontSize(7),h.setFont("helvetica","normal"),h.text("SUCOVI 2027  .  VOUCHER DE RETIRO",15,G+7),h.text("Stand #"+N.standId,195,G+7,{align:"right"});const tt=W?"VOC-"+String(W).padStart(3,"0"):"VOC-000";h.setTextColor(255,255,255),h.setFontSize(18),h.setFont("helvetica","bold"),h.text(tt,15,G+14),h.setFillColor(58,125,68),h.roundedRect(158,G+9,38,8,2,2,"F"),h.setTextColor(255,255,255),h.setFontSize(8),h.setFont("helvetica","bold"),h.text("V PAGADO",177,G+14.5,{align:"center"}),h.setTextColor(26,58,92),h.setFontSize(14),h.setFont("helvetica","bold"),h.text(N.standNombre,15,G+26),h.setFontSize(9),h.setFont("helvetica","normal"),h.setTextColor(100,100,100),h.text((m.nombre||"")+" "+(m.apellido||"")+"  .  "+(m.codigo||""),15,G+33),h.setDrawColor(220,220,220),h.setLineWidth(.3),h.line(15,G+37,195,G+37);let xt=G+44;if((N.items||[]).forEach(ft=>{h.setFontSize(10),h.setFont("helvetica","normal"),h.setTextColor(50,50,50),h.text(ft.desc,15,xt),h.setFont("helvetica","bold"),h.setTextColor(30,30,30),h.text("$"+Number(ft.sub).toLocaleString("es-AR"),145,xt,{align:"right"}),h.setFont("helvetica","normal"),xt+=7}),h.setDrawColor(180,180,180),h.setLineWidth(.3),h.line(15,xt,145,xt),xt+=6,h.setFontSize(12),h.setFont("helvetica","bold"),h.setTextColor(26,58,92),h.text("Total",15,xt),h.text("$"+Number((N.items||[]).reduce((ft,Jt)=>ft+(Jt.sub||0),0)).toLocaleString("es-AR"),145,xt,{align:"right"}),$&&window.qrcode)try{const ft=window.qrcode(0,"M");ft.addData($),ft.make();const Jt=ft.getModuleCount(),Ut=32,ge=Ut/Jt,De=158,$t=G+38;h.setFillColor(255,255,255),h.rect(De-1,$t-1,Ut+2,Ut+2,"F"),h.setFillColor(0,0,0);for(let Qt=0;Qt<Jt;Qt++)for(let gt=0;gt<Jt;gt++)ft.isDark(Qt,gt)&&h.rect(De+gt*ge,$t+Qt*ge,ge,ge,"F");h.setFontSize(6),h.setFont("helvetica","normal"),h.setTextColor(120,120,120),h.text("Escaneá en el stand",De+Ut/2,$t+Ut+4,{align:"center"})}catch{}return G+at+8};x.forEach((N,$)=>{$>0&&S>130&&(h.addPage(),S=15),S=M(N,C[$],(window._lastVoucherNums||[])[$],S)}),h.save("Voucher_"+(m.nombre||"").replace(/ /g,"_")+"_SUCOVI2027.pdf")},window._abrirScanner=async()=>{document.getElementById("scan-overlay").style.display="flex";const m=document.getElementById("scan-status");m&&(m.textContent="Cargando escáner...");try{await Al(),a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const x=document.getElementById("scan-video");x.srcObject=a,l=!0,m&&(m.textContent="Buscando QR...");const A=document.createElement("canvas"),h=A.getContext("2d",{willReadFrequently:!0}),C=()=>{if(l){if(x.readyState===x.HAVE_ENOUGH_DATA&&x.videoWidth>0){A.width=x.videoWidth,A.height=x.videoHeight,h.drawImage(x,0,0);const S=h.getImageData(0,0,A.width,A.height),M=window.jsQR(S.data,S.width,S.height,{inversionAttempts:"dontInvert"});if(M&&M.data){const N=M.data;window._cerrarScanner();const $=N.match(/INV-\d+/),W=N.match(/inv=([A-Z0-9]+)/i);if($){const G=document.getElementById("buscar-caja");G&&(G.value=$[0],window._buscarInv(!0))}else W&&mn(async()=>{const{buscarInvitadoPorToken:G}=await Promise.resolve().then(()=>ii);return{buscarInvitadoPorToken:G}},void 0).then(({buscarInvitadoPorToken:G})=>G(W[1]).then(U=>{U&&window._seleccionarInv(U.fireId)}));return}}l&&requestAnimationFrame(C)}};x.addEventListener("loadeddata",()=>requestAnimationFrame(C))}catch{m&&(m.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}},window._cerrarScanner=()=>{l=!1,a&&(a.getTracks().forEach(x=>x.stop()),a=null);const m=document.getElementById("scan-overlay");m&&(m.style.display="none")};let T=null,_=[],D={};function B(){const m=document.getElementById("caja-content");m.innerHTML=`
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
      </div>`,T=null,_=[],P(),setTimeout(()=>{const x=document.getElementById("caja-content");if(!x)return;const A=document.createElement("div");A.id="pe-hist-lista",A.style.cssText="max-width:500px;margin:12px auto 0",x.appendChild(A),fn(h=>{const C=document.getElementById("pe-hist-lista");if(!C||!h.length)return;const S=[...h].sort((M,N)=>(N.creadoEn||"").localeCompare(M.creadoEn||""));C.innerHTML='<p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">PEDIDOS ESPECIALES COBRADOS HOY</p>'+S.map(M=>'<div class="card" style="margin-bottom:8px;border-left:3px solid #5BA4CF;cursor:pointer" onclick="window._peVerDetalle(&quot;'+M.fireId+'&quot;)"><div style="display:flex;justify-content:space-between;align-items:start"><div><div style="font-size:13px;font-weight:600;color:#1A3A5C">'+(M.peNum||"")+" · "+(M.invNombre||"")+'</div><div style="font-size:11px;color:#888">'+(M.invCodigo||"")+(M.familia?" · Familia "+M.familia:"")+'</div><div style="font-size:12px;color:#555;margin-top:4px">'+(M.items||[]).map(N=>N.desc).join(", ")+'</div></div><div style="text-align:right;flex-shrink:0;margin-left:8px"><div style="font-size:14px;font-weight:600">$'+qt(M.total||0)+'</div><span class="badge '+(M.estado==="entregado"?"b-entr":"b-pago")+'" style="font-size:10px">'+(M.estado==="entregado"?"Entregado":"Pendiente")+'</span><div style="font-size:10px;color:#888;margin-top:2px">Ver detalle ›</div></div></div></div>').join(""),window._peVerDetalle=M=>{const N=S.find(U=>U.fireId===M);if(!N)return;z=N;const $=U=>Number(U).toLocaleString("es-AR"),W=document.getElementById("caja-content");if(!W)return;const G=N.envio;W.innerHTML='<div class="wrap" style="max-width:500px;margin:0 auto"><button class="btn" onclick="window._cajaVista(&quot;especial&quot;, document.querySelector(&quot;.nav button:nth-child(3)&quot;))" style="margin-bottom:12px">← Volver</button><div class="card" style="margin-bottom:12px;border-left:4px solid #5BA4CF"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:18px;font-weight:700;color:#1A3A5C">'+(N.peNum||"")+'</div><div style="font-size:14px;font-weight:500">'+(N.invNombre||"")+'</div><div style="font-size:12px;color:#888">'+(N.invCodigo||"")+(N.familia?" · Familia "+N.familia:"")+'</div></div><span class="badge '+(N.estado==="entregado"?"b-entr":"b-pago")+'">'+(N.estado==="entregado"?"Entregado":"Pendiente")+"</span></div>"+(N.items||[]).map(U=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #eee"><span>'+U.desc+"</span><strong>$"+$(U.sub)+"</strong></div>").join("")+'<div style="display:flex;justify-content:space-between;font-size:16px;font-weight:600;color:#1A3A5C;margin-top:8px"><span>Total</span><span>$'+$(N.total||0)+"</span></div></div>"+(G?'<div class="card" style="margin-bottom:12px;background:#f0f4f8"><p style="font-size:11px;font-weight:500;color:#888;margin-bottom:6px">DATOS DE ENTREGA</p><div style="font-size:13px"><strong>'+G.nombre+"</strong> · "+G.tel+"<br>"+G.calle+" "+G.numero+(G.piso?", "+G.piso:"")+", "+G.localidad+", "+G.provincia+"</div></div>":"")+'<button class="btn btn-b" style="width:100%;padding:12px;font-size:14px" onclick="window._peImprimirVoucher()">🖨️ Imprimir voucher</button></div>'}})},300)}async function P(){D={};let m=0;It.forEach(x=>{Ge(x.id,A=>{D[x.id]={bodega:x,vinos:A.filter(h=>(h.unidades||[]).some(C=>C.unidadesPorCaja))},m++,m===It.length&&O()})})}function O(){const m=document.getElementById("pe-vinos-lista");if(!m)return;const x=Object.values(D).filter(A=>A.vinos.length>0);if(!x.length){m.innerHTML='<div class="empty">No hay vinos con precio de caja cargado todavía.</div>';return}m.innerHTML='<div style="margin-bottom:12px"><input id="pe-buscar-vino" type="text" placeholder="Buscar vino..." style="width:100%;padding:8px;border:1px solid #ccc;border-radius:6px;font-size:14px" oninput="window._peFiltrarVinos()"></div>'+x.map(({bodega:A,vinos:h})=>'<div style="margin-bottom:14px"><div class="pe-bodega-bloque"><div class="pe-bodega-titulo" style="font-size:12px;font-weight:600;color:#1A3A5C;margin-bottom:6px;text-transform:uppercase">'+A.nombre+"</div>"+h.map(C=>{const S=(C.unidades||[]).find(M=>M.unidadesPorCaja);return S?'<div class="pe-vino-wrap" data-nombre="'+C.nombre.toLowerCase()+'"><div class="pe-vino-row" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:.5px solid #eee"><div style="flex:1"><div style="font-size:13px;font-weight:500">'+C.nombre+'</div><div style="font-size:11px;color:#888">'+(C.varietal||"")+" · Caja x"+S.unidadesPorCaja+" · $"+qt(S.p)+'</div></div><div style="display:flex;align-items:center;gap:8px"><button class="qty-btn" onclick="window._peQty('+A.id+",'"+C.fireId+`',-1)">−</button><span id="pe-qty-`+A.id+"-"+C.fireId+'" style="min-width:20px;text-align:center;font-size:14px">0</span><button class="qty-btn" onclick="window._peQty('+A.id+",'"+C.fireId+`',1)">+</button></div></div></div>`:""}).join("")+"</div>").join("")}window._peFiltrarVinos=()=>{var x;const m=(((x=document.getElementById("pe-buscar-vino"))==null?void 0:x.value)||"").toLowerCase();document.querySelectorAll("#pe-vinos-lista .pe-vino-wrap").forEach(A=>{A.style.display=A.dataset.nombre.toLowerCase().includes(m)?"":"none"}),document.querySelectorAll("#pe-vinos-lista .pe-bodega-bloque").forEach(A=>{const h=[...A.querySelectorAll(".pe-vino-wrap")].some(C=>C.style.display!=="none");A.style.display=h?"":"none"})},window._peBuscar=()=>{const m=document.getElementById("pe-codigo").value.trim().toUpperCase();if(!m)return;const x=document.getElementById("pe-inv-info"),A=t.filter(h=>h.codigo===m||(h.nombre+" "+h.apellido).toUpperCase().includes(m));if(!A.length){x.innerHTML='<div style="color:#C0392B;font-size:12px">Invitado no encontrado</div>';return}A.length===1?window._peSeleccionar(A[0].fireId):x.innerHTML='<div style="font-size:12px;color:#555;margin-bottom:6px">Seleccioná el invitado:</div>'+A.map(h=>`<div onclick="window._peSeleccionar('`+h.fireId+`')" style="background:#f0f4f8;border-radius:8px;padding:10px;font-size:13px;cursor:pointer;margin-bottom:6px;border:1px solid #D6E4F0"><strong>`+h.nombre+" "+h.apellido+"</strong> · "+h.codigo+(h.familia?" · Familia "+h.familia:"")+"</div>").join("")},window._peSeleccionar=m=>{const x=t.find(h=>h.fireId===m);if(!x)return;T=x;const A=document.getElementById("pe-inv-info");A.innerHTML='<div style="background:#f0f4f8;border-radius:8px;padding:10px;font-size:13px"><strong>'+x.nombre+" "+x.apellido+"</strong> · "+x.codigo+(x.familia?" · Familia "+x.familia:"")+"</div>",document.getElementById("pe-carta").style.display="block",O()},window._peScanner=async()=>{await Al();const m=document.getElementById("scan-overlay");m.style.display="flex",l=!0;try{a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const x=document.getElementById("scan-video");x.srcObject=a;const A=document.createElement("canvas"),h=A.getContext("2d"),C=()=>{if(l){if(x.readyState===x.HAVE_ENOUGH_DATA){A.width=x.videoWidth,A.height=x.videoHeight,h.drawImage(x,0,0);const S=h.getImageData(0,0,A.width,A.height),M=window.jsQR(S.data,S.width,S.height);if(M){window._cerrarScanner();const N=M.data.match(/inv=([A-Z0-9]+)/i);if(N){const $=t.find(W=>W.token===N[1]);$&&(document.getElementById("pe-codigo").value=$.codigo,window._peBuscar())}}}requestAnimationFrame(C)}};C()}catch{document.getElementById("scan-status").textContent="No se pudo acceder a la cámara."}},window._peQty=(m,x,A)=>{const h=m+"_"+x,C=_.findIndex(tt=>tt.key===h),S=D[m];if(!S)return;const M=S.vinos.find(tt=>(tt.fireId||tt.id)===x);if(!M)return;const N=(M.unidades||[]).find(tt=>tt.unidadesPorCaja);if(!N)return;C>=0?(_[C].qty=Math.max(0,_[C].qty+A),_[C].qty===0&&_.splice(C,1)):A>0&&_.push({key:h,standId:Number(m),standNombre:S.bodega.nombre,vinoNombre:M.nombre,vinoId:x,qty:1,precioCaja:N.p,unidadesPorCaja:N.unidadesPorCaja,desc:M.nombre+" — Caja x"+N.unidadesPorCaja+" ×1",sub:N.p});const $=document.getElementById("pe-qty-"+m+"-"+x),W=_.find(tt=>tt.key===h);$&&($.textContent=W?W.qty:0),W&&(W.sub=W.precioCaja*W.qty,W.desc=M.nombre+" — Caja x"+N.unidadesPorCaja+" ×"+W.qty);const G=document.getElementById("pe-resumen"),U=document.getElementById("pe-btn-cobrar");if(!_.length){G.style.display="none",U.style.display="none";return}const at=_.reduce((tt,xt)=>tt+xt.sub,0);G.style.display="block",U.style.display="block",G.innerHTML='<p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Resumen</p>'+_.map(tt=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #eee"><span>'+tt.desc+"</span><strong>$"+qt(tt.sub)+"</strong></div>").join("")+'<div style="display:flex;justify-content:space-between;font-size:16px;font-weight:600;color:#1A3A5C;margin-top:8px"><span>Total</span><span>$'+qt(at)+"</span></div>"};let z=null;window._peCobrar=async()=>{if(!T||!_.length)return;const m=document.getElementById("pe-msg"),x=document.getElementById("pe-btn-cobrar");x.disabled=!0,x.style.opacity="0.6",m.innerHTML='<span style="color:#888">Procesando...</span>';try{const A=_.reduce((C,S)=>C+S.sub,0);z={...await Ac({invFireId:T.fireId,invNombre:T.nombre+" "+T.apellido,invCodigo:T.codigo,familia:T.familia||"",items:_,total:A}),invNombre:T.nombre+" "+T.apellido,invCodigo:T.codigo,familia:T.familia||"",items:[..._],total:A},T=null,_=[],H()}catch(A){m.innerHTML='<span style="color:#C0392B">Error: '+A.message+"</span>",x.disabled=!1,x.style.opacity="1"}};function H(){const m=document.getElementById("caja-content");m.innerHTML=`
      <div class="wrap" style="max-width:500px;margin:0 auto">
        <div class="card" style="margin-bottom:12px;border-left:4px solid #3A7D44">
          <div style="font-size:15px;font-weight:600;color:#3A7D44;margin-bottom:4px">✅ ${z.peNum} registrado</div>
          <div style="font-size:13px;color:#555">${z.invNombre} · $${qt(z.total)}</div>
        </div>
        <div class="card" style="margin-bottom:12px">
          <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:10px">📍 Datos de entrega</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Nombre destinatario</label><input id="pe-dir-nombre" style="margin-top:3px" placeholder="Nombre completo"></div>
            <div><label style="font-size:11px;color:#666">Teléfono</label><input id="pe-dir-tel" style="margin-top:3px" placeholder="+54 9 11..."></div>
          </div>
          <div style="display:grid;grid-template-columns:2fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Calle</label><input id="pe-dir-calle" style="margin-top:3px"></div>
            <div><label style="font-size:11px;color:#666">Número</label><input id="pe-dir-num" style="margin-top:3px"></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Piso / Dpto</label><input id="pe-dir-piso" style="margin-top:3px"></div>
            <div><label style="font-size:11px;color:#666">Localidad</label><input id="pe-dir-loc" style="margin-top:3px"></div>
          </div>
          <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Provincia</label><input id="pe-dir-prov" style="margin-top:3px" value="Buenos Aires"></div>
          <div style="margin-bottom:12px"><label style="font-size:11px;color:#666">Observaciones</label><input id="pe-dir-obs" style="margin-top:3px" placeholder="Ej: dejar en portería"></div>
          <div style="display:flex;gap:8px">
            <button class="btn btn-v" style="flex:1;padding:10px" onclick="window._peGuardarDir()">Guardar dirección e imprimir</button>
            <button class="btn" style="padding:10px" onclick="window._peSaltarDir()">Saltar</button>
          </div>
          <div id="pe-dir-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
        </div>
      </div>`}window._peGuardarDir=async()=>{var A;const m={nombre:document.getElementById("pe-dir-nombre").value.trim(),tel:document.getElementById("pe-dir-tel").value.trim(),calle:document.getElementById("pe-dir-calle").value.trim(),numero:document.getElementById("pe-dir-num").value.trim(),piso:document.getElementById("pe-dir-piso").value.trim(),localidad:document.getElementById("pe-dir-loc").value.trim(),provincia:document.getElementById("pe-dir-prov").value.trim(),observaciones:((A=document.getElementById("pe-dir-obs"))==null?void 0:A.value.trim())||""},x=document.getElementById("pe-dir-msg");if(!m.nombre||!m.calle||!m.localidad){x.innerHTML='<span style="color:#C0392B">Completá al menos nombre, calle y localidad.</span>';return}x.innerHTML='<span style="color:#888">Guardando...</span>',await xs(z.fireId,{envio:m}),z.envio=m,window._peImprimirVoucher()},window._peSaltarDir=()=>{window._peImprimirVoucher()},window._peImprimirVoucher=()=>{const m=z;if(!m)return;const x=window.open("","_blank"),A=C=>Number(C).toLocaleString("es-AR"),h=m.envio;x.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8"><title>${m.peNum}</title>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: system-ui, sans-serif; padding: 16px; }
        .voucher { border: 2px solid #1A3A5C; border-radius: 10px; padding: 16px; margin-bottom: 16px; page-break-inside: avoid; }
        .header { display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #D6E4F0; padding-bottom: 8px; }
        .evento { font-size: 10px; color: #888; letter-spacing: .08em; }
        .pe-num { font-size: 22px; font-weight: 700; color: #1A3A5C; margin-top: 2px; }
        .item { display: flex; justify-content: space-between; font-size: 15px; padding: 4px 0; border-bottom: .5px solid #eee; }
        .total { display: flex; justify-content: space-between; font-size: 20px; font-weight: 600; margin-top: 8px; color: #1A3A5C; }
        .badge { background: #1A3A5C; color: #fff; padding: 3px 12px; border-radius: 20px; font-size: 11px; display: inline-block; }
        .dir-box { background: #f0f4f8; border-radius: 8px; padding: 10px; margin-top: 12px; font-size: 13px; }
        .sello { text-align:center; margin-top:16px; padding:10px; border: 3px solid #5BA4CF; border-radius: 8px; color: #5BA4CF; font-size: 20px; font-weight: 700; letter-spacing: .1em; }
        @media print { body { padding: 0; } }
      </style>
    </head><body>
      <div class="voucher">
        <div class="header">
          <div>
            <div class="evento">SUCOVI 2027 · PEDIDO ESPECIAL</div>
            <div class="pe-num">${m.peNum}</div>
            <div style="font-size:16px;font-weight:500;color:#1A3A5C;margin-top:4px">${m.invNombre}</div>
            <div style="font-size:13px;color:#888">${m.invCodigo}${m.familia?" · Familia "+m.familia:""}</div>
          </div>
          <div style="text-align:right">
            <div class="badge">✅ PAGADO</div>
          </div>
        </div>
        ${(m.items||[]).map(C=>'<div class="item"><span>'+C.desc+"</span><strong>$"+A(C.sub)+"</strong></div>").join("")}
        <div class="total"><span>Total</span><span>$${A(m.total)}</span></div>
        ${h?'<div class="dir-box"><strong>📍 Entrega:</strong> '+h.nombre+" · "+h.tel+"<br>"+h.calle+" "+h.numero+(h.piso?", "+h.piso:"")+", "+h.localidad+", "+h.provincia+"</div>":""}
        <div class="sello">📦 PEDIDO ESPECIAL — SIN QR</div>
      </div>
      <script>setTimeout(() => window.print(), 500)<\/script>
    </body></html>`),x.document.close(),setTimeout(()=>R(),1e3)};function R(){const m=document.getElementById("caja-content");m.innerHTML=`
      <div class="wrap" style="max-width:500px;margin:0 auto">
        <div class="card" style="margin-bottom:12px;border-left:4px solid #3A7D44">
          <div style="font-size:13px;font-weight:600;color:#3A7D44">✅ ${z==null?void 0:z.peNum} guardado</div>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:14px">
          <button class="btn btn-v" style="flex:1;padding:10px" onclick="window._cajaVista('especial', document.querySelector('.nav button:nth-child(3)'))">+ Nuevo pedido especial</button>
          <button class="btn" style="flex:1;padding:10px" onclick="window._peImprimirVoucher()">🖨️ Reimprimir</button>
        </div>
        <div id="pe-historial-lista"><div class="empty">Cargando historial...</div></div>
      </div>`,fn(x=>{const A=document.getElementById("pe-historial-lista");if(!A)return;if(!x.length){A.innerHTML='<div class="empty">Sin pedidos especiales</div>';return}const h=[...x].sort((C,S)=>(S.creadoEn||"").localeCompare(C.creadoEn||""));A.innerHTML='<p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">PEDIDOS ESPECIALES COBRADOS</p>'+h.map(C=>'<div class="card" style="margin-bottom:8px;border-left:3px solid #5BA4CF"><div style="display:flex;justify-content:space-between;align-items:start"><div><div style="font-size:13px;font-weight:600;color:#1A3A5C">'+(C.peNum||"")+" · "+(C.invNombre||"")+'</div><div style="font-size:11px;color:#888">'+(C.invCodigo||"")+(C.familia?" · Familia "+C.familia:"")+'</div><div style="font-size:12px;color:#555;margin-top:4px">'+(C.items||[]).map(S=>S.desc).join(", ")+'</div></div><div style="text-align:right;flex-shrink:0;margin-left:8px"><div style="font-size:14px;font-weight:600">$'+qt(C.total||0)+'</div><span class="badge '+(C.estado==="entregado"?"b-entr":"b-pago")+'" style="font-size:10px">'+(C.estado==="entregado"?"Entregado":"Pendiente")+"</span></div></div></div></div>").join("")})}f();const v=document.createElement("button");v.innerHTML="?",v.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",v.onclick=()=>document.getElementById("modal-ayuda-caja").style.display="flex",document.body.appendChild(v);const y=document.createElement("div");y.id="modal-ayuda-caja",y.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",y.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Panel de caja</div><button onclick="document.getElementById(&quot;modal-ayuda-caja&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📷 Escanear código del invitado</div><div>Escaneá el QR o ingresá el código del invitado (ej: INV-0001) para ver su carrito de compras con todos los vinos que seleccionó en los stands.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">💳 Cobrar</div><div>Una vez verificado el carrito, tocá <strong>Cobrar</strong> para registrar el pago. Se genera automáticamente un voucher con número correlativo (VOC-001, VOC-002, etc.).</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">⬇️ Descargar PDF</div><div>Después de cobrar podés descargar el voucher en PDF para entregar al invitado. El voucher incluye el QR para retirar los vinos en cada stand.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">↩️ Reembolsar</div><div>Si un pedido fue cobrado por error, podés reembolsarlo desde la lista de pedidos. El stand no podrá marcarlo como entregado.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ Verificá siempre el total antes de cobrar. El reembolso no devuelve dinero automáticamente.</div></div></div>',y.addEventListener("click",m=>{m.target===y&&(y.style.display="none")}),document.body.appendChild(y)}const Jo=n=>Number(n).toLocaleString("es-AR");function Gm(n,t,e){if(oe(),!e||e.estado==="invalidado"){n.innerHTML=Ht({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
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
      </div>`,window._buscarInvStand=async()=>{var _;const f=(((_=document.getElementById("inv-cod-manual"))==null?void 0:_.value)||"").trim(),g=document.getElementById("inv-cod-err");if(!f)return;const b=f.split(".");if(b.length!==2){g.textContent="Formato: INV-0001.Apellido";return}const I=b[0].toUpperCase().trim(),T=b[1].toLowerCase().trim();g.textContent="Buscando...";try{const{buscarInvitadoPorCodigo:D}=await mn(async()=>{const{buscarInvitadoPorCodigo:P}=await Promise.resolve().then(()=>ii);return{buscarInvitadoPorCodigo:P}},void 0),B=await D(I);if(!B){g.textContent="Código no encontrado";return}if(B.estado==="invalidado"){g.textContent="Invitado invalidado";return}if(!B.apellido.toLowerCase().startsWith(T)){g.textContent="Código o apellido incorrecto";return}window.location.href="/stand/"+t.id+"?inv="+B.token}catch(D){g.textContent="Error: "+D.message}};return}if(e.estado==="pendiente"){n.innerHTML=Ht({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">
          Bono pendiente de pago
        </h2>
        <p style="font-size:14px;color:#666;">
          Hola ${e.nombre}, tu bono ($35.000) todavía no fue confirmado.<br>
          Pasá por la entrada para abonar.
        </p>
      </div>`;return}let i=[],o="stand";const s=`/carrito?inv=${e.token}`;n.innerHTML=Ht({title:"🍷 "+t.nombre,sub:t.region+" · Stand #"+t.id,actions:[`<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
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
    </button>`,window._stockDisponible={};let a=window._stockDisponible;Io(f=>{console.log("STOCK DOCS:",f.length,"bodega:",t.id),a={},f.filter(g=>Number(g.standId)===Number(t.id)).forEach(g=>{a[g.vinoId]=Math.max(0,(g.total||0)-(g.degustacion||0)-(g.reservado||0)-(g.pagado||0)-(g.entregado||0))}),i.forEach((g,b)=>{const I=document.getElementById("disp-"+b);if(!I)return;const T=a[g.fireId||g.id];T!==void 0&&(I.textContent="("+T+" disp.)",I.style.color=T===0?"#C0392B":T<=3?"#D97706":"#888")})}),Ge(t.id,f=>{i=f,c(),setTimeout(()=>{i.forEach((g,b)=>{const I=document.getElementById("disp-"+b);if(!I)return;const T=a[g.fireId||g.id];T!==void 0&&(I.textContent="("+T+" disp.)",I.style.color=T===0?"#C0392B":T<=3?"#D97706":"#888")})},300)});const l={};vs(e.fireId,f=>{var D,B;const g=f.find(P=>Number(P.standId)===t.id);g&&g.items&&g.items.forEach(P=>{if(P.key&&l[P.key]===void 0){l[P.key]=P.qty||0;const[O,z]=P.key.split("_").map(Number),H=document.getElementById("qv"+O+"_"+z);H&&(H.textContent=l[P.key])}});const b=f.reduce((P,O)=>P+(O.items||[]).reduce((z,H)=>z+(H.sub||0),0),0),I=f.reduce((P,O)=>P+(O.items||[]).length,0),T=document.getElementById("cart-fab"),_=document.getElementById("cart-fab-txt");T&&I>0?(T.style.display="flex",_.textContent=`Ver carrito · $${Jo(b)}`):T&&(T.style.display="none"),g&&((D=g.items)!=null&&D.length)?(o=g.retiro||"stand",(B=document.getElementById("rb-stand"))==null||B.classList.toggle("sel",o==="stand"),document.getElementById("retiro-box").style.display="block",document.getElementById("stand-resumen").style.display="block",document.getElementById("stand-resumen-lines").innerHTML=g.items.map(P=>`
          <div style="display:flex;justify-content:space-between;font-size:12px;
            color:#555;margin-bottom:4px">
            <span>${P.desc}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-weight:500">$${Jo(P.sub)}</span>
              <button onclick="window._quitarItem('${P.key}')"
                style="border:none;background:none;color:#A32D2D;cursor:pointer;
                font-size:13px;padding:0 2px">✕</button>
            </div>
          </div>`).join("")):(document.getElementById("stand-resumen").style.display="none",g===null&&(document.getElementById("retiro-box").style.display="none"))});function c(){const f=document.getElementById("menu-lista");if(f){if(!i.length){f.innerHTML='<div class="empty">La carta estará disponible pronto.</div><a href="/acceso?inv='+e.token+'#stands-section" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#1A3A5C;color:#fff;border-radius:8px;padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-top:12px">🛍️ Seguir comprando</a>';return}f.innerHTML=i.map((g,b)=>`
      <div class="vino-card">
        <div style="font-size:17px;font-weight:600;color:#1A3A5C">${g.nombre}</div>
        <div style="font-size:11px;color:#888;margin-top:2px">
          <span style="font-size:14px;color:#555">${g.varietal||""}${g.cosecha?" · "+g.cosecha:""}</span>
        </div>
        ${g.descripcion?`<div style="font-size:13px;color:#666;margin-top:3px">${g.descripcion}</div>`:""}
        ${(g.unidades||[]).filter(I=>!I.unidadesPorCaja).map((I,T)=>`
          <div class="qty-row">
            <span class="qty-label">
              ${I.u} — <span style="color:#6B1C1C;font-weight:600">$${Jo(I.p)}</span>
              <span id="disp-${b}" style="font-size:11px;margin-left:6px"></span>
            </span>
            <button class="qty-btn" id="btnm${b}_${T}" onclick="window._agregar(${b},${T},-1)">−</button>
            <span id="qv${b}_${T}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" id="btnp${b}_${T}" onclick="window._agregar(${b},${T},1)">+</button>
          </div>`).join("")}
      </div>`).join("")+'<a href="/acceso?inv='+e.token+'#stands-section" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#1A3A5C;color:#fff;border-radius:8px;padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-top:12px">🛍️ Seguir comprando</a>'}}window._agregar=async(f,g,b)=>{const I=i[f];if(!I)return;const T=(I.unidades||[])[g];if(!T)return;const _=`${f}_${g}`,D=`btn${b>0?"p":"m"}${f}_${g}`,B=document.getElementById(D);if(B&&(B.disabled=!0,B.style.opacity="0.4"),b>0){const O=I.fireId||I.id;if(console.log("STOCK KEY:",t.id+"_"+O,"fireId:",I.fireId,"id:",I.id),!await gc(t.id,O,b)){window._showStandMsg("Sin stock disponible","#C0392B"),setTimeout(()=>window._hideStandMsg(),1800),B&&(B.disabled=!1,B.style.opacity="1");return}}l[_]=Math.max(0,(l[_]||0)+b);const P=document.getElementById(`qv${f}_${g}`);if(P&&(P.textContent=l[_]),b<0&&await Eo(t.id,I.fireId||I.id,1).catch(()=>{}),l[_]===0)window._showStandMsg("⏳ Guardando...","#5BA4CF"),await to(e.fireId,t.id,_),window._showStandMsg("✓ Carrito actualizado","#3B6D11"),B&&(B.disabled=!1,B.style.opacity="1"),setTimeout(()=>window._hideStandMsg(),1500);else{const O={key:_,desc:`${I.nombre} — ${T.u} ×${l[_]}`,sub:T.p*l[_],vinoNombre:I.nombre,vinoId:I.fireId||I.id||I.nombre,unidad:T.u,precio:T.p,qty:l[_]};window._showStandMsg("⏳ Guardando...","#5BA4CF");const z=document.getElementById("add-msg");z.style.cssText="font-size:18px;color:#5BA4CF;text-align:center;padding:8px",await oc(e.fireId,t.id,t.nombre,O,o);const H=I.fireId||I.id;a[H]!==void 0&&(a[H]=Math.max(0,a[H]-b)),document.getElementById("retiro-box").style.display="block",window._showStandMsg("✓ Carrito actualizado","#3B6D11"),B&&(B.disabled=!1,B.style.opacity="1"),setTimeout(()=>window._hideStandMsg(),1500),z.textContent="",z.style.cssText=""}},window._sRet=async f=>{o=f,document.getElementById("rb-stand").classList.toggle("sel",f==="stand"),await ys(e.fireId,t.id,f)},window._quitarItem=async f=>{await to(e.fireId,t.id,f);const[g,b]=f.split("_").map(Number);l[f]=0;const I=document.getElementById(`qv${g}_${b}`);I&&(I.textContent=0)};const p=document.createElement("button");p.innerHTML="?",p.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.25)",p.onclick=()=>document.getElementById("modal-ayuda-stand").style.display="flex",document.body.appendChild(p);const w=document.createElement("div");w.id="modal-ayuda-stand",w.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",w.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Stand — Carta de vinos</div><button onclick="document.getElementById(&quot;modal-ayuda-stand&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🍷 Seleccionar vinos</div><div>Usá los botones <strong>+</strong> y <strong>−</strong> para agregar o quitar unidades de cada vino. El carrito se actualiza automáticamente.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🛒 Ver carrito</div><div>Tocá <strong>Ver carrito</strong> para revisar todo lo que seleccionaste en los distintos stands. Podés seguir agregando vinos de otras bodegas.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🛍️ Seguir comprando</div><div>Tocá <strong>Seguir comprando</strong> para ir a otro stand y seguir eligiendo vinos. Todo se acumula en tu carrito.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">💳 Pagar</div><div>Cuando termines de elegir, dirigite a <strong>Caja</strong> para pagar todo junto. El cajero escanea tu código y ve todo tu pedido.</div></div><div style="background:#EBF4FA;border-radius:8px;padding:10px;font-size:12px;color:#1A3A5C">ℹ️ Las degustaciones están incluidas en tu bono. Solo pagás las botellas o cajas que llevás.</div></div></div>',w.addEventListener("click",f=>{f.target===w&&(w.style.display="none")}),document.body.appendChild(w)}window._abrirScannerStand=async()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="flex");const t=document.getElementById("scan-status-stand");try{window.jsQR||await new Promise((p,w)=>{const f=document.createElement("script");f.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",f.onload=p,f.onerror=w,document.head.appendChild(f)});const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),i=document.getElementById("scan-video-stand");i.srcObject=e,t&&(t.textContent="Buscando QR...");const o=document.createElement("canvas"),s=o.getContext("2d",{willReadFrequently:!0});let a=!0;const l=()=>{a=!1,e.getTracks().forEach(p=>p.stop())},c=()=>{if(a){if(i.readyState===i.HAVE_ENOUGH_DATA&&i.videoWidth>0){o.width=i.videoWidth,o.height=i.videoHeight,s.drawImage(i,0,0);const p=s.getImageData(0,0,o.width,o.height),w=window.jsQR(p.data,p.width,p.height,{inversionAttempts:"dontInvert"});if(w&&w.data){l(),window._cerrarScannerStand();const g=w.data.match(/inv=([A-Z0-9]+)/i),b=window.location.pathname.split("/")[2];g&&b&&(window.location.href="/stand/"+b+"?inv="+g[1]);return}}a&&requestAnimationFrame(c)}};i.addEventListener("loadeddata",()=>requestAnimationFrame(c))}catch{t&&(t.textContent="No se pudo acceder a la camara.")}};window._cerrarScannerStand=()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="none");const t=document.getElementById("scan-video-stand");t&&t.srcObject&&(t.srcObject.getTracks().forEach(e=>e.stop()),t.srcObject=null)};window._showStandMsg=(n,t)=>{const e=document.getElementById("stand-msg-modal"),i=document.getElementById("stand-msg-box");!e||!i||(i.textContent=n,i.style.color=t||"#1A3A5C",e.style.display="flex")};window._hideStandMsg=()=>{const n=document.getElementById("stand-msg-modal");n&&(n.style.display="none")};const pe=n=>Number(n).toLocaleString("es-AR");async function Km(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Zo(n,t,e){const i=document.getElementById(e);i&&(i.textContent="Iniciando cámara..."),await Km();const o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),s=document.getElementById(n);if(!s)return o.getTracks().forEach(f=>f.stop()),null;s.srcObject=o;let a=!0;const l=document.createElement("canvas"),c=l.getContext("2d",{willReadFrequently:!0}),p=()=>{a=!1,o.getTracks().forEach(f=>f.stop())},w=()=>{if(a){if(s.readyState===s.HAVE_ENOUGH_DATA&&s.videoWidth>0){l.width=s.videoWidth,l.height=s.videoHeight,c.drawImage(s,0,0);const f=c.getImageData(0,0,l.width,l.height),g=window.jsQR(f.data,f.width,f.height,{inversionAttempts:"dontInvert"});if(g&&g.data){p(),t(g.data);return}}a&&requestAnimationFrame(w)}};return i&&(i.textContent="Buscando QR..."),s.addEventListener("loadeddata",()=>requestAnimationFrame(w)),p}function Xm(n,t){if(oe(),!document.getElementById("sp-css")){const f=document.createElement("style");f.id="sp-css",f.textContent=`
      .tab-btn { border:none;border-radius:0;border-bottom:2px solid transparent;
        color:#888;padding:8px 14px;margin-bottom:-2px;background:none;
        font-size:12px;cursor:pointer;font-weight:400 }
      .tab-btn.active { border-bottom-color:#5BA4CF;color:#5BA4CF;font-weight:600 }
      .b-canc { background:#FEE2E2;color:#C0392B;border:1px solid #FCA5A5 }
      .sf-btn { font-size:11px }
      .sf-btn.active { background:#EAF3DE;color:#3B6D11;border-color:#3B6D11 }
    `,document.head.appendChild(f)}let e=[],i="pendientes",o=null,s=null;if(!document.getElementById("stand-header-style")){const f=document.createElement("style");f.id="stand-header-style",f.textContent=".hdr { background: linear-gradient(135deg, #2D6A4F, #3A7D44) !important; } .gold { background: linear-gradient(90deg, #C9A96E, #A8865A, #C9A96E) !important; }",document.head.appendChild(f)}n.innerHTML=Ht({title:`🍷 ${t.nombre}`,sub:`Stand #${t.id} · Sucovi 2027`,actions:[`<button class="btn" onclick="sessionStorage.removeItem('stand-auth-${t.id}');location.reload()"
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
    </div>`,window._setTab=f=>{["pedidos","carta","resumen"].forEach(g=>{var I;(I=document.getElementById("tab-"+g))==null||I.classList.toggle("active",g===f);const b=document.getElementById("tab-content-"+g);b&&(b.style.display=g===f?"block":"none")}),f==="carta"&&c(),f==="resumen"&&p()},window._setSF=(f,g)=>{i=f,["sf-listos","sf-entr","sf-all","sf-log"].forEach(b=>{var I;(I=document.getElementById(b))==null||I.classList.remove("active")}),g.classList.add("active"),a()},sc(t.id,f=>{e=f,a()});function a(){const f=document.getElementById("sp-pedidos");if(!f)return;let g=e;if(i==="pendientes"?g=e.filter(b=>(b.estado==="pagado"||b.estado==="listo")&&b.retiro!=="envio"):i==="entregados"?g=e.filter(b=>b.estado==="entregado"&&b.retiro!=="envio"):g=e.filter(b=>b.retiro!=="envio"),!g.length){const b={pendientes:"Sin pedidos listos 🎉",entregados:"Sin entregas todavía",todos:"Sin pedidos"};f.innerHTML=`<div class="empty">${b[i]||"Sin pedidos"}</div>`;return}f.innerHTML=g.map(b=>{const I=b.estado==="entregado";return`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${I?"#3A7D44":"#5BA4CF"}">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">
            <div>
              <div style="font-size:15px;font-weight:500;color:#1A3A5C">${b.invNombre||"Invitado"}</div>
              ${b.voucherNum?'<div style="font-size:10px;color:#5BA4CF;font-weight:500">VOC-'+String(b.voucherNum).padStart(3,"0")+"</div>":""}
              <div style="font-size:11px;color:#888">${b.invCodigo||""}</div>
            </div>
            <span class="badge ${I?"b-entr":"b-pago"}">${I?"✅ Entregado":"💳 Pagado"}</span>
          </div>
          ${(b.items||[]).map(T=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555">
              <span>${T.desc}</span><strong>$${pe(T.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Total</span><span>$${pe(b.total||0)}</span>
          </div>
          <div style="display:flex;gap:6px;margin-top:10px">
            ${I?"":`
            <button class="btn btn-g" style="flex:1;padding:9px"
              onclick="window._scanearEsteRemito('${b.fireId}')">
              📷 Escanear
            </button>`}
            <button class="btn" style="flex:1;padding:9px"
              onclick="window._imprimirRemito('${b.fireId}', ${I})">
              🖨️ ${I?"Remito entregado":"Imprimir remito"}
            </button>
          </div>
        </div>`}).join("")}window._imprimirRemito=(f,g)=>{const b=e.find(D=>D.fireId===f);if(!b)return;const I=D=>Number(D).toLocaleString("es-AR"),T=b.voucherNum?"VOC-"+String(b.voucherNum).padStart(3,"0"):"VOC-000",_=window.open("","_blank");_.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <title>Remito ${T}</title>
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
            <div class="voc-num">${T}</div>
            <div class="stand">${t.nombre}</div>
            <div class="inv">${b.invNombre||""} · ${b.invCodigo||""}</div>
          </div>
          <div style="text-align:right">
            <div class="badge ${g?"badge-entregado":"badge-pagado"}">${g?"✅ ENTREGADO":"✅ PAGADO"}</div>
          </div>
        </div>
        ${(b.items||[]).map(D=>`
          <div class="item"><span>${D.desc}</span><strong>$${I(D.sub)}</strong></div>
        `).join("")}
        <div class="total">
          <span>Total</span>
          <span>$${I(b.total||0)}</span>
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
          qr.addData('${f}')
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
    </body></html>`),_.document.close()},window._entregarPedido=async f=>{await bs(f)},window._scanearEsteRemito=async f=>{document.getElementById("scan-overlay-voucher").style.display="flex";const g=document.getElementById("scan-status-voucher");g&&(g.textContent="Escaneá el QR de este remito...");try{s=await Zo("scan-video-voucher",b=>{window._cerrarScannerVoucher();const I=document.getElementById("voucher-modal"),T=document.getElementById("voucher-modal-content");b.includes(f)?T.innerHTML=`
            <div style="text-align:center;padding:8px 0 16px">
              <div style="font-size:48px;margin-bottom:8px">✅</div>
              <div style="font-size:18px;font-weight:700;color:#3A7D44;margin-bottom:4px">QR válido</div>
              <div style="font-size:14px;color:#555;margin-bottom:20px">¿Confirmás la entrega de este pedido?</div>
              <div style="display:flex;gap:10px;justify-content:center">
                <button onclick="document.getElementById('voucher-modal').style.display='none'"
                  style="padding:10px 20px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:14px;cursor:pointer">
                  Cancelar
                </button>
                <button onclick="marcarEntregado('${f}');document.getElementById('voucher-modal').style.display='none'"
                  style="padding:10px 20px;border-radius:8px;border:none;background:#3A7D44;color:#fff;font-size:14px;font-weight:600;cursor:pointer">
                  Confirmar entrega
                </button>
              </div>
            </div>`:T.innerHTML=`
            <div style="text-align:center;padding:8px 0 16px">
              <div style="font-size:48px;margin-bottom:8px">❌</div>
              <div style="font-size:18px;font-weight:700;color:#C0392B;margin-bottom:4px">QR no corresponde</div>
              <div style="font-size:14px;color:#555;margin-bottom:20px">Este QR no pertenece al remito seleccionado.</div>
              <button onclick="document.getElementById('voucher-modal').style.display='none'"
                style="padding:10px 24px;border-radius:8px;border:none;background:#1A3A5C;color:#fff;font-size:14px;font-weight:600;cursor:pointer">
                Cerrar
              </button>
            </div>`,I.style.display="flex"},"scan-status-voucher")}catch{g&&(g.textContent="No se pudo acceder a la cámara.")}},window._listoParaLogistica=async f=>{await dc(f)};let l={};Io(f=>{l={},f.filter(g=>Number(g.standId)===Number(t.id)).forEach(g=>{l[g.vinoId]=Math.max(0,(g.total||0)-(g.degustacion||0)-(g.reservado||0)-(g.pagado||0)-(g.entregado||0))}),document.getElementById("sp-carta")&&c()});function c(){const f=document.getElementById("sp-carta");f&&(f.innerHTML='<div class="empty">Cargando...</div>',Ge(t.id,g=>{if(!g.length){f.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}f.innerHTML=g.map(b=>{const I=l[b.fireId||b.id],T=I!==void 0?'<span style="font-size:12px;font-weight:500;color:'+(I===0?"#C0392B":I<=3?"#D97706":"#3A7D44")+';margin-left:8px">('+I+" disp.)</span>":"";return'<div class="card" style="margin-bottom:10px"><div style="font-size:17px;font-weight:600;color:#1A3A5C">'+b.nombre+T+'</div><div style="font-size:14px;color:#666;margin-top:2px">'+(b.varietal||"")+(b.cosecha?" · "+b.cosecha:"")+"</div>"+(b.descripcion?'<div style="font-size:13px;color:#888;margin-top:3px">'+b.descripcion+"</div>":"")+'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">'+(b.unidades||[]).map(_=>'<span style="background:#EBF4FA;color:#1A3A5C;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:500">'+_.u+": $"+pe(_.p)+"</span>").join("")+"</div></div>"}).join("")}))}function p(){const f=document.getElementById("sp-resumen");if(!f)return;const g=e.filter(z=>z.estado!=="reembolsado"&&z.estado!=="cancelado"),b=g.filter(z=>z.estado==="entregado"&&z.retiro!=="envio"),I=g.filter(z=>(z.estado==="pagado"||z.estado==="listo")&&z.retiro!=="envio"),T=g.filter(z=>z.retiro==="envio"),_=b.reduce((z,H)=>z+(H.total||0),0),D=I.reduce((z,H)=>z+(H.total||0),0),B=g.reduce((z,H)=>z+(H.total||0),0),P={};b.forEach(z=>(z.items||[]).forEach(H=>{const R=H.vinoNombre+" — "+H.unidad;P[R]||(P[R]={cant:0,total:0}),P[R].cant+=H.qty||1,P[R].total+=H.sub||0}));const O=Object.entries(P).sort((z,H)=>H[1].total-z[1].total);f.innerHTML=`
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
        <div class="stat"><div class="v" style="color:#3A7D44">$${pe(_)}</div><div class="l">Entregado</div></div>
        <div class="stat"><div class="v" style="color:#D97706">$${pe(D)}</div><div class="l">Por entregar</div></div>
        <div class="stat"><div class="v">$${pe(B)}</div><div class="l">Total vendido</div></div>
        ${T.length?`<div class="stat" style="grid-column:1/-1"><div class="v" style="color:#5BA4CF;font-size:14px">${T.length} pedido${T.length>1?"s":""} de envío a domicilio</div><div class="l">Manejados por logística</div></div>`:""}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Detalle por vino (entregados)</p>
        ${O.length?O.map(([z,H])=>`
          <div style="display:flex;justify-content:space-between;padding:6px 0;
            border-bottom:.5px solid #E8EFF5;font-size:12px">
            <span style="flex:1">${z}</span>
            <span style="color:#888;margin:0 8px">${H.cant} u.</span>
            <span style="font-weight:500">$${pe(H.total)}</span>
          </div>`).join(""):'<div style="color:#aaa;font-size:12px;padding:8px 0">Sin entregas todavía</div>'}
      </div>`}window._abrirScannerInv=async()=>{document.getElementById("scan-overlay-inv").style.display="flex";try{o=await Zo("scan-video-inv",f=>{window._cerrarScannerInv();const g=f.match(/inv=([A-Z0-9]+)/i);g?window.location.href="/stand/"+t.id+"?inv="+g[1]:document.getElementById("scan-status-inv").textContent="QR no reconocido — usá el QR personal del invitado"},"scan-status-inv")}catch{document.getElementById("scan-status-inv").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerInv=()=>{o&&(o(),o=null),document.getElementById("scan-overlay-inv").style.display="none"},window._abrirScannerVoucher=async()=>{document.getElementById("scan-overlay-voucher").style.display="flex";try{s=await Zo("scan-video-voucher",f=>{window._cerrarScannerVoucher();const g=e.find(b=>f.includes(b.fireId));g?w(g):document.getElementById("scan-status-voucher").textContent="Voucher no reconocido"},"scan-status-voucher")}catch{document.getElementById("scan-status-voucher").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerVoucher=()=>{s&&(s(),s=null),document.getElementById("scan-overlay-voucher").style.display="none"};function w(f){const g=f.estado==="entregado";document.getElementById("voucher-modal-content").innerHTML=`
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:36px">${g?"✅":"⏳"}</div>
        <h3 style="font-size:16px;font-weight:500;color:${g?"#3B6D11":"#854F0B"};margin-top:6px">
          ${g?"PAGADO — Entregar":"PENDIENTE — No entregar"}
        </h3>
      </div>
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${f.invNombre||""}</div>
      <div style="font-size:12px;color:#888;margin-bottom:10px">${f.invCodigo||""}</div>
      ${(f.items||[]).map(b=>`
        <div style="display:flex;justify-content:space-between;font-size:13px;
          padding:5px 0;border-bottom:.5px solid #E8EFF5">
          <span>${b.desc}</span><strong>$${pe(b.sub)}</strong>
        </div>`).join("")}
      <div style="display:flex;justify-content:space-between;font-size:15px;
        font-weight:500;margin-top:10px;margin-bottom:14px">
        <span>Total</span><span>$${pe(f.total||0)}</span>
      </div>
      ${g?"":`
        <button class="btn btn-g" style="width:100%;padding:11px;font-size:14px"
          onclick="window._entregarPedido('${f.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>`}
      <button class="btn" style="width:100%;margin-top:8px"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`,document.getElementById("voucher-modal").style.display="flex"}}window._imprimirQRDesdePanel=async()=>{var P;const t=window.location.pathname.split("/")[2],i=window.location.origin+"/stand/"+t;window.qrcode||await new Promise((O,z)=>{const H=document.createElement("script");H.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",H.onload=O,H.onerror=z,document.head.appendChild(H)});const o=window.qrcode(0,"M");o.addData(i),o.make();const s=o.getModuleCount(),a=300,l=a/s,c=document.createElement("canvas");c.width=a,c.height=a;const p=c.getContext("2d");p.fillStyle="#fff",p.fillRect(0,0,a,a),p.fillStyle="#000";for(let O=0;O<s;O++)for(let z=0;z<s;z++)o.isDark(O,z)&&p.fillRect(z*l,O*l,l,l);const w=c.toDataURL("image/png"),f=document.getElementById("modal-qr-stand");f&&f.remove();const g=document.createElement("div");g.id="modal-qr-stand",g.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:400;display:flex;align-items:center;justify-content:center;padding:16px";const b=document.createElement("div");b.style.cssText="background:#fff;border-radius:16px;padding:24px;text-align:center;max-width:360px;width:100%";const I=document.createElement("div");I.style.cssText="font-size:11px;color:#888;letter-spacing:.08em;margin-bottom:6px",I.textContent="SUCOVI 2027 · FERIA DE VINOS";const T=document.createElement("div");T.style.cssText="font-size:20px;font-weight:700;color:#1A3A5C;margin-bottom:16px",T.textContent=((P=document.querySelector("h1"))==null?void 0:P.textContent)||"Stand";const _=document.createElement("img");_.src=w,_.style.cssText="width:260px;height:260px;border-radius:8px;display:block;margin:0 auto";const D=document.createElement("div");D.style.cssText="font-size:13px;color:#555;margin-top:12px;margin-bottom:16px",D.textContent="Escaneá para ver la carta y hacer tu pedido";const B=document.createElement("button");B.textContent="Cerrar",B.style.cssText="width:100%;padding:10px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:13px;cursor:pointer",B.onclick=()=>g.remove(),b.appendChild(I),b.appendChild(T),b.appendChild(_),b.appendChild(D),b.appendChild(B),g.appendChild(b),g.addEventListener("click",O=>{O.target===g&&g.remove()}),document.body.appendChild(g)};const Jm=n=>Number(n).toLocaleString("es-AR");function Ic(n,t){if(oe(),!sessionStorage.getItem("bodega-auth-"+t.id)){n.innerHTML=`
      ${Ht({title:"🍷 "+t.nombre,sub:"Carga de carta de vinos"})}
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
      </div>`,window._loginBodega=()=>{document.getElementById("bp").value.trim()===t.pass?(sessionStorage.setItem("bodega-auth-"+t.id,"1"),Ic(n,t)):document.getElementById("bp-err").textContent="Contraseña incorrecta"};return}let i=[],o=null;n.innerHTML=`
    ${Ht({title:"🍷 "+t.nombre,sub:"Carga de carta · Stand #"+t.id,actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('bodega-auth-${t.id}');location.reload()">Salir</button>`]})}
    <div style="max-width:600px;margin:0 auto;padding:14px">
      <div class="card" style="margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:12px"
          id="form-titulo">Agregar vino</p>
        ${[["vn","Nombre del vino *","text","Ej: Gran Malbec 2022"],["vv","Varietal / Blend","text","Ej: Malbec"],["vc","Cosecha","number","2022"],["vd","Descripción corta","text","Tinto con notas de..."],["vb","Precio botella ($)","number",""],["vs","Stock inicial (botellas) — opcional","number",""]].map(([l,c,p,w])=>`
          <div style="margin-bottom:8px">
            <label style="font-size:11px;color:#666">${c}</label>
            <input id="${l}" type="${p}" placeholder="${w}" style="margin-top:3px"
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
    </div>`,Ge(t.id,l=>{i=l;const c=document.getElementById("vl");if(c){if(!i.length){c.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}c.innerHTML=i.map(p=>`
      <div style="padding:10px 0;border-bottom:.5px solid #e0d5c8">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="flex:1">
            <div style="font-size:14px;font-weight:500">${p.nombre}</div>
            <div style="font-size:11px;color:#888;margin-top:2px">
              ${p.varietal||""}${p.cosecha?" · "+p.cosecha:""}
            </div>
            ${p.descripcion?`<div style="font-size:12px;color:#666;margin-top:2px">${p.descripcion}</div>`:""}
            <div style="margin-top:4px;display:flex;gap:8px;flex-wrap:wrap">
              ${(p.unidades||[]).map(w=>`<span style="font-size:12px;background:#f5f0eb;padding:2px 8px;
                  border-radius:6px;color:#6B1C1C">
                  ${w.u}: $${Jm(w.p)}
                </span>`).join("")}
            </div>
          </div>
          <div style="display:flex;gap:5px;margin-left:8px">
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5"
              onclick="window._editarV('${p.fireId}')">✏ Editar</button>
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D"
              onclick="window._eliminarV('${p.fireId}')">✕</button>
          </div>
        </div>
      </div>`).join("")}});const s=["vn","vv","vc","vd","vb","vs","vuc","vpc"],a=()=>{s.forEach(l=>{const c=document.getElementById(l);c&&(c.value="")})};window._calcPrecioCaja=()=>{const l=parseFloat(document.getElementById("vb").value)||0,c=parseInt(document.getElementById("vuc").value)||0,p=document.getElementById("vpc");p&&(p.value=l&&c?l*c:"")},window._guardarV=async()=>{var T;const l=document.getElementById("vn").value.trim(),c=document.getElementById("vm");if(!l){c.innerHTML='<span style="color:#A32D2D">El nombre es requerido.</span>';return}const p=parseFloat(document.getElementById("vb").value),w=parseInt(document.getElementById("vuc").value),f=parseFloat(document.getElementById("vpc").value),g=[];if(p&&g.push({u:"Botella",p}),w&&f&&g.push({u:"Caja x"+w,p:f,unidadesPorCaja:w}),!g.length){c.innerHTML='<span style="color:#A32D2D">Ingresá al menos precio de botella.</span>';return}if(w&&!f){c.innerHTML='<span style="color:#A32D2D">Ingresá las unidades por caja para calcular el precio.</span>';return}const b=parseInt((T=document.getElementById("vs"))==null?void 0:T.value)||0,I={nombre:l,varietal:document.getElementById("vv").value.trim(),cosecha:document.getElementById("vc").value.trim(),descripcion:document.getElementById("vd").value.trim(),unidades:g};c.innerHTML='<span style="color:#888">Guardando...</span>';try{if(o){if(await hc(t.id,o,I),b>0){const _=await mn(()=>Promise.resolve().then(()=>ii),void 0).then(P=>P.getStockDoc(t.id,o)),D=_?_.total:0,B=b-D;B!==0&&await eo(t.id,o,B,I.nombre)}o=null}else{const _=await pc(t.id,I);b>0&&_&&await eo(t.id,_,b,I.nombre)}a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none",c.innerHTML='<span style="color:#3B6D11">✓ Guardado correctamente</span>',setTimeout(()=>{const _=document.getElementById("vm");_&&(_.innerHTML="")},3e3)}catch(_){c.innerHTML=`<span style="color:#A32D2D">Error: ${_.message}</span>`}},window._editarV=async l=>{const c=i.find(f=>f.fireId===l);if(!c)return;try{const{getStockDoc:f}=await mn(async()=>{const{getStockDoc:I}=await Promise.resolve().then(()=>ii);return{getStockDoc:I}},void 0),g=await f(t.id,l),b=document.getElementById("vs");b&&g&&(b.value=g.total||"")}catch{}o=l,document.getElementById("form-titulo").textContent=`Editando: ${c.nombre}`,document.getElementById("vn").value=c.nombre||"",document.getElementById("vv").value=c.varietal||"",document.getElementById("vc").value=c.cosecha||"",document.getElementById("vd").value=c.descripcion||"";const p=(c.unidades||[]).find(f=>f.u==="Botella"),w=(c.unidades||[]).find(f=>f.unidadesPorCaja);document.getElementById("vb").value=(p==null?void 0:p.p)||"",document.getElementById("vuc")&&(document.getElementById("vuc").value=(w==null?void 0:w.unidadesPorCaja)||""),document.getElementById("vpc")&&(document.getElementById("vpc").value=(w==null?void 0:w.p)||""),document.getElementById("btn-cancelar-edit").style.display="block",window.scrollTo({top:0,behavior:"smooth"})},window._cancelarEdit=()=>{o=null,a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none"},window._eliminarV=async l=>{const c=i.find(p=>p.fireId===l);confirm(`¿Eliminar "${c==null?void 0:c.nombre}"?`)&&await fc(t.id,l)}}async function Zm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Ym(n){oe();let t=[],e=[],i=null,o=null,s=!1;n.innerHTML=Ht({title:"🚪 Control de puerta",sub:"Solo ingresa quien tiene bono pagado",backHref:"/admin"})+`
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
    </div>`,wo(p=>{t=p,a()}),window._vPuerta=async()=>{var b;const p=document.getElementById("scan-cod").value.trim().toUpperCase(),w=document.getElementById("scan-res");if(!p)return;const f=t.find(I=>I.codigo===p);if(!f){w.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">❌ Código no encontrado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:4px">${p} no existe en el sistema.</p>
      </div>`;return}if(f.estado==="ingresado"){w.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">⛔ QR ya utilizado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:6px">
          <strong>${f.nombre} ${f.apellido}</strong> ya ingresó al evento.<br>
          Este QR no puede usarse nuevamente.
        </p>
      </div>`;return}if(f.estado==="pendiente"){w.innerHTML=`<div class="result-warn">
        <p style="font-size:16px;font-weight:500;color:#854F0B">⏳ Pago pendiente</p>
        <p style="font-size:12px;color:#633806;margin-top:4px">
          <strong>${f.nombre} ${f.apellido}</strong> no abonó el bono ($35.000).
        </p>
        <button class="btn btn-a" style="margin-top:10px;width:100%;font-size:12px"
          onclick="window._cobrarPuerta('${f.fireId}','${f.codigo}')">
          💰 Cobrar $35.000 y habilitar ingreso
        </button>
      </div>`;return}i=f;const g=f.nombre[0]+(((b=f.apellido)==null?void 0:b[0])||"");document.getElementById("mc-avatar").textContent=g,document.getElementById("mc-nombre").textContent=f.nombre+" "+f.apellido,document.getElementById("mc-codigo").textContent=p+(f.familia?" · Familia "+f.familia:""),document.getElementById("mc-estado").innerHTML='<span class="badge b-pago">✅ Bono confirmado</span>',document.getElementById("modal-confirm").style.display="flex"},window._confirmarIngreso=async()=>{if(!i)return;document.getElementById("modal-confirm").style.display="none";const p=i;i=null,await Ae(p.fireId,{estado:"ingresado"});const w=new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});e.unshift({nombre:p.nombre+" "+p.apellido,codigo:p.codigo,hora:w}),document.getElementById("scan-res").innerHTML=`<div class="result-ok">
      <p style="font-size:20px;font-weight:500;color:#1A3A5C">✅ ¡Bienvenido/a!</p>
      <p style="font-size:16px;margin-top:6px">${p.nombre} ${p.apellido}</p>
      <p style="font-size:13px;color:#3B6D11;margin-top:4px">${p.codigo} · ${w}</p>
    </div>`,document.getElementById("scan-cod").value="",a()},window._cobrarPuerta=async(p,w)=>{await Ae(p,{estado:"pagado"}),document.getElementById("scan-cod").value=w,window._vPuerta()};function a(){const p=document.getElementById("historial-puerta");if(!p)return;const w=t.filter(f=>f.estado==="ingresado");if(!w.length&&!e.length){p.innerHTML='<p style="font-size:12px;color:#aaa;text-align:center">ÚLTIMOS INGRESOS — Sin ingresos todavía</p>';return}p.innerHTML=`
      <p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">
        INGRESOS AL EVENTO (${w.length})
      </p>
      ${w.slice(0,50).map(f=>{var g;return`
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;
          border-bottom:.5px solid #E8EFF5">
          <div class="avatar" style="width:32px;height:32px;font-size:11px;flex-shrink:0">
            ${f.nombre[0]}${((g=f.apellido)==null?void 0:g[0])||""}
          </div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:500">${f.nombre} ${f.apellido}</div>
            <div style="font-size:11px;color:#888">${f.codigo}</div>
          </div>
          <span style="font-size:11px;color:#3A7D44;font-weight:500">✅ Ingresó</span>
        </div>`}).join("")}
    `}window._abrirScannerPuerta=async()=>{const p=document.getElementById("scan-overlay-puerta");p.style.display="flex";const w=document.getElementById("scan-status-puerta");try{await Zm(),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const f=document.getElementById("scan-video-puerta");f.srcObject=o,s=!0,w&&(w.textContent="Buscando QR...");const g=document.createElement("canvas"),b=g.getContext("2d",{willReadFrequently:!0}),I=()=>{if(s){if(f.readyState===f.HAVE_ENOUGH_DATA&&f.videoWidth>0){g.width=f.videoWidth,g.height=f.videoHeight,b.drawImage(f,0,0);const T=b.getImageData(0,0,g.width,g.height),_=window.jsQR(T.data,T.width,T.height,{inversionAttempts:"dontInvert"});if(_&&_.data){const D=_.data;window._cerrarScannerPuerta();const B=D.match(/INV-\d+/),P=D.match(/inv=([A-Z0-9]+)/i);B?(document.getElementById("scan-cod").value=B[0],window._vPuerta()):P&&ni(P[1]).then(O=>{O?(document.getElementById("scan-cod").value=O.codigo,window._vPuerta()):w&&(w.textContent="Invitado no encontrado")});return}}s&&requestAnimationFrame(I)}};f.addEventListener("loadeddata",()=>requestAnimationFrame(I))}catch{w&&(w.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerPuerta=()=>{s=!1,o&&(o.getTracks().forEach(w=>w.stop()),o=null);const p=document.getElementById("scan-overlay-puerta");p&&(p.style.display="none")};const l=document.createElement("button");l.innerHTML="?",l.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",l.onclick=()=>document.getElementById("modal-ayuda-puerta").style.display="flex",document.body.appendChild(l);const c=document.createElement("div");c.id="modal-ayuda-puerta",c.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",c.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Control de puerta</div><button onclick="document.getElementById(&quot;modal-ayuda-puerta&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📷 Escanear QR</div><div>Escaneá el QR del invitado con la cámara. El sistema verifica automáticamente si el bono está confirmado y registra el ingreso.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">⌨️ Ingresar código manualmente</div><div>Si la cámara no funciona, escribí el código del invitado (ej: INV-0001) y tocá <strong>Verificar</strong>.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">✅ Estados posibles</div><div><strong>Bono confirmado</strong> — puede ingresar.<br><strong>Pendiente de pago</strong> — puede ingresar y pagar en puerta.<br><strong>Ya ingresó</strong> — QR ya usado, no permitir reingreso.<br><strong>Invalidado</strong> — no permitir ingreso.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ Cada QR es de un solo uso. Si alguien ya ingresó el sistema lo indica claramente.</div></div></div>',c.addEventListener("click",p=>{p.target===c&&(c.style.display="none")}),document.body.appendChild(c)}window.marcarEntregado=bs;const re=n=>Number(n).toLocaleString("es-AR");function tg(n){oe();let t=[],e=null,i=[],o="todos";n.innerHTML=Ht({title:"🚚 Logística",sub:"Envíos y pedidos especiales",backHref:"/admin"})+`
    <div class="nav">
      <button class="on" onclick="window._logVista('todos',this)">📋 Pedidos</button>
      <button onclick="window._logVista('pendientes',this)">⏳ Pendientes</button>
      <button onclick="window._logVista('especiales',this)">📦 Pedidos especiales</button>
      <button onclick="window._logVista('envios',this)">🚚 Envíos</button>
    </div>
    <div class="wrap" id="log-body"></div>`,Ao(f=>{t=f,!e&&o==="envios"&&s(),!e&&o==="pendientes"&&a(),!e&&o==="todos"&&p(),o==="todos"&&p()}),fn(f=>{i=f,!e&&o==="especiales"&&w(),!e&&o==="envios"&&s()}),window._logVista=(f,g)=>{o=f,e=null,document.querySelectorAll(".nav button").forEach(b=>b.classList.remove("on")),g.classList.add("on"),f==="envios"?s():f==="especiales"?w():f==="pendientes"?a():p()};function s(){const f=document.getElementById("log-body");if(!f)return;e=null;const g=t.filter(P=>P.retiro==="envio"),b=i.filter(P=>P.estado==="listo").map(P=>({...P,standNombre:"Pedido especial · "+(P.peNum||""),retiro:"envio",invNombre:P.invNombre,invCodigo:P.invCodigo,esPedidoEspecial:!0}));if(!g.length&&!b.length){f.innerHTML='<div class="empty">🚚<br><br>Sin pedidos de envío</div>';return}const I=[...g.filter(P=>P.estado==="pagado"||P.estado==="listo"),...b],T=g.filter(P=>P.estado==="retirado"),_=g.filter(P=>P.estado==="entregado"),D=g.filter(P=>P.estado==="reembolsado"||P.estado==="cancelado"),B=(P,O,z)=>{var H;return`
      <div class="card" style="margin-bottom:10px;border-left:4px solid ${O};cursor:pointer"
        onclick="window._verDetalleLog('${P.fireId}')">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
          <div>
            <div style="font-size:14px;font-weight:500;color:#1A3A5C">${P.invNombre||""}</div>
            <div style="font-size:11px;color:#888">${P.standNombre} · #${(H=P.fireId)==null?void 0:H.slice(-4).toUpperCase()}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:14px;font-weight:500">$${re(P.total||0)}</div>
            <div style="font-size:10px;color:#888">Ver detalle ›</div>
          </div>
        </div>
        ${P.envio?`<div style="font-size:12px;color:#5A1E99;background:#EDE6FB;
          border-radius:6px;padding:6px 8px">
          📍 ${P.envio.calle||""} ${P.envio.numero||""}, ${P.envio.localidad||P.envio.dir||""}, ${P.envio.provincia||""}
        </div>`:""}
      </div>`};f.innerHTML="",I.length&&(f.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:8px;letter-spacing:.05em">
        PEDIDOS PARA ENVIAR A DOMICILIO (${I.length})</p>`,f.innerHTML+=I.map(P=>B(P,"#D97706")).join("")),T.length&&(f.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#5BA4CF;margin:14px 0 8px;letter-spacing:.05em">
        RETIRADOS — EN CAMINO (${T.length})</p>`,f.innerHTML+=T.map(P=>B(P,"#5BA4CF")).join("")),_.length&&(f.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#3A7D44;margin:14px 0 8px;letter-spacing:.05em">
        ENTREGADOS (${_.length})</p>`,f.innerHTML+=_.map(P=>B(P,"#3A7D44")).join("")),D.length&&(f.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#C0392B;margin:14px 0 8px;letter-spacing:.05em">
        REEMBOLSADOS (${D.length})</p>`,f.innerHTML+=D.map(P=>B(P,"#C0392B")).join(""))}window._verDetalleLog=f=>{e=f;const g=t.find(B=>B.fireId===f)||i.find(B=>B.fireId===f);if(!g)return;const b=i.find(B=>B.fireId===f);if(b){const B=document.getElementById("log-body"),P=z=>Number(z).toLocaleString("es-AR"),O=b.envio;B.innerHTML='<div class="wrap" style="max-width:500px;margin:0 auto"><button class="btn" onclick="window._logVista(&quot;envios&quot;, document.querySelector(&quot;.nav button:nth-child(1)&quot;))" style="margin-bottom:12px">← Volver</button><div class="card" style="margin-bottom:12px;border-left:4px solid #5BA4CF"><div style="font-size:16px;font-weight:700;color:#1A3A5C">'+(b.peNum||"")+'</div><div style="font-size:14px;font-weight:500;margin-top:2px">'+(b.invNombre||"")+'</div><div style="font-size:12px;color:#888">'+(b.invCodigo||"")+(b.familia?" · Familia "+b.familia:"")+'</div><div style="margin-top:8px">'+(b.items||[]).map(z=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid #eee"><span>'+z.desc+"</span><strong>$"+P(z.sub)+"</strong></div>").join("")+'</div><div style="display:flex;justify-content:space-between;font-size:15px;font-weight:600;color:#1A3A5C;margin-top:8px"><span>Total</span><span>$'+P(b.total||0)+"</span></div></div>"+(O?'<div class="card" style="margin-bottom:12px;background:#f0f4f8"><p style="font-size:11px;font-weight:500;color:#888;margin-bottom:6px">DATOS DE ENTREGA</p><div style="font-size:13px"><strong>'+O.nombre+"</strong> · "+O.tel+"<br>"+O.calle+" "+O.numero+(O.piso?", "+O.piso:"")+", "+O.localidad+", "+O.provincia+"</div></div>":"")+'<button class="btn btn-b" style="width:100%;padding:10px;margin-bottom:8px" onclick="window._peCargarDireccion(&quot;'+f+'&quot;)">✏️ '+(O?"Editar dirección":"Cargar dirección")+"</button></div>";return}const I=document.getElementById("log-body");if(!I)return;const T=g.envio||{},_={pagado:{label:"💳 Pagado — Pendiente de retiro",color:"#D97706",badge:"b-pend"},listo:{label:"✅ Listo para retirar",color:"#D97706",badge:"b-list"},retirado:{label:"📦 Retirado del stand",color:"#5BA4CF",badge:"b-pago"},entregado:{label:"🏠 Entregado a domicilio",color:"#3A7D44",badge:"b-entr"},reembolsado:{label:"↩️ Reembolsado",color:"#C0392B",badge:"b-canc"},cancelado:{label:"❌ Cancelado",color:"#C0392B",badge:"b-canc"}},D=_[g.estado]||_.pagado;I.innerHTML=`
      <button class="btn" onclick="window._volverLog()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>

      <div class="card" style="margin-bottom:12px;border-left:4px solid ${D.color}">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px">
          <div>
            <div style="font-size:16px;font-weight:500;color:#1A3A5C">${g.invNombre||""}</div>
            <div style="font-size:12px;color:#888">${g.invCodigo||""} · Stand: ${g.standNombre}</div>
          </div>
          <span class="badge ${D.badge}" style="font-size:11px">${D.label}</span>
        </div>

        ${(g.items||[]).map(B=>`
          <div style="display:flex;justify-content:space-between;font-size:13px;
            padding:5px 0;border-bottom:.5px solid #E8EFF5;color:#555">
            <span>${B.desc}</span><strong>$${re(B.sub)}</strong>
          </div>`).join("")}

        <div style="display:flex;justify-content:space-between;font-size:15px;
          font-weight:500;margin-top:10px;color:#1A3A5C">
          <span>Total</span><span>$${re(g.total||0)}</span>
        </div>
      </div>

      <!-- Datos de envío -->
      <div class="card" style="margin-bottom:12px;background:#F5F0FB;border:1px solid #D4BEFC">
        <p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">🚚 Datos de envío</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:13px">
          <div><span style="color:#888;font-size:11px">Destinatario</span><br><strong>${T.nombre||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Teléfono</span><br><strong>${T.tel||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Calle y número</span><br><strong>${T.calle||""} ${T.numero||""}</strong></div>
          <div><span style="color:#888;font-size:11px">Piso / Dpto</span><br><strong>${T.piso||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Localidad</span><br><strong>${T.localidad||T.dir||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Provincia</span><br><strong>${T.provincia||"—"}</strong></div>
        </div>
      </div>

      <!-- Botones de acción según estado -->
      ${g.estado==="pagado"||g.estado==="listo"?`
        <button class="btn btn-b" style="width:100%;padding:12px;font-size:14px;margin-bottom:8px"
          onclick="window._retirarStand('${g.fireId}')">
          📦 Confirmar retiro del stand
        </button>`:""}
      ${g.estado==="retirado"?`
        <button class="btn btn-g" style="width:100%;padding:12px;font-size:14px;margin-bottom:8px"
          onclick="window._entregarDom('${g.fireId}')">
          🏠 Confirmar entrega a domicilio
        </button>`:""}
      <button class="btn" style="width:100%;padding:10px;font-size:13px"
        onclick="window._volverLog()">Volver a la lista</button>`},window._retirarStand=async f=>{await cc(f),window._verDetalleLog(f)},window._entregarDom=async f=>{await uc(f),window._verDetalleLog(f)};function a(){const f=document.getElementById("log-body");if(!f)return;e=null;const g=t.filter(_=>_.estado==="pagado"||_.estado==="listo");if(!g.length){f.innerHTML='<div class="empty">⏳<br><br>Sin pedidos pendientes de entrega</div>';return}const b={};g.forEach(_=>{const D=_.invFamilia||_.familia||"";b[D]||(b[D]={pedidos:[],total:0}),b[D].pedidos.push(_),b[D].total+=_.total||0});const I=Object.entries(b).filter(([_])=>_===""),T=[...Object.entries(b).filter(([_])=>_!=="").sort((_,D)=>_[0].localeCompare(D[0])),...I.map(([,_])=>["Sin asignar",_])];f.innerHTML='<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:12px;letter-spacing:.05em">PEDIDOS PENDIENTES DE ENTREGA ('+g.length+")</p>"+T.map(([_,D])=>'<div class="card" style="margin-bottom:12px;border-left:4px solid #D97706"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><div style="font-size:14px;font-weight:600;color:#1A3A5C">Familia '+_+'</div><div style="font-size:13px;font-weight:500">$'+re(D.total)+"</div></div>"+D.pedidos.map(B=>'<div style="padding:6px 0;border-bottom:.5px solid #E8EFF5"><div style="display:flex;justify-content:space-between;font-size:13px"><span style="font-weight:500">'+(B.invNombre||"")+"</span><span>$"+re(B.total||0)+'</span></div><div style="font-size:11px;color:#888;margin-top:2px">'+(B.standNombre||"")+(B.voucherNum?" · VOC-"+String(B.voucherNum).padStart(3,"0"):"")+'</div><div style="font-size:11px;color:#555;margin-top:2px">'+(B.items||[]).map(P=>P.desc).join(", ")+"</div></div>").join("")+"</div>").join("")}let l="pendientes",c=null;function p(){const f=document.getElementById("log-body");if(!f)return;if(e=null,!document.getElementById("log-scan-overlay")){const b=document.createElement("div");b.id="log-scan-overlay",b.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(26,58,92,.92);z-index:300;flex-direction:column;align-items:center;justify-content:center;gap:16px",b.innerHTML='<p style="color:#fff;font-size:14px;font-weight:500">Escaneá el voucher del cliente</p><div style="position:relative"><video id="log-scan-video" autoplay playsinline muted style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video></div><p id="log-scan-status" style="color:#C9A96E;font-size:13px">Iniciando...</p><button onclick="window._logCerrarScanner()" style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);padding:8px 20px;border-radius:8px;cursor:pointer">Cancelar</button>',document.body.appendChild(b)}if(!document.getElementById("log-voucher-modal")){const b=document.createElement("div");b.id="log-voucher-modal",b.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:200;align-items:center;justify-content:center;padding:16px",b.innerHTML='<div class="card" style="width:100%;max-width:380px"><div id="log-voucher-content"></div></div>',document.body.appendChild(b)}const g=l==="pendientes"?t.filter(b=>(b.estado==="pagado"||b.estado==="listo")&&b.retiro!=="envio"):l==="entregados"?t.filter(b=>b.estado==="entregado"&&b.retiro!=="envio"):t.filter(b=>b.retiro!=="envio");f.innerHTML='<div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;align-items:center"><button class="btn sf-btn '+(l==="pendientes"?"active":"")+'" onclick="window._logSetF(&quot;pendientes&quot;,this)">🟢 Listos</button><button class="btn sf-btn '+(l==="entregados"?"active":"")+'" onclick="window._logSetF(&quot;entregados&quot;,this)">✅ Entregados</button><button class="btn sf-btn '+(l==="todos"?"active":"")+'" onclick="window._logSetF(&quot;todos&quot;,this)">📋 Todos</button><button class="btn btn-b" style="font-size:11px;padding:5px 10px;margin-left:auto" onclick="window._logEscanearVoucher()">📷 Escanear voucher</button></div><div id="log-pedidos-lista">'+(g.length?g.map(b=>{const I=b.estado==="entregado";return'<div class="card" style="margin-bottom:10px;border-left:4px solid '+(I?"#3A7D44":"#5BA4CF")+'"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:15px;font-weight:500;color:#1A3A5C">'+(b.invNombre||"Invitado")+"</div>"+(b.voucherNum?'<div style="font-size:10px;color:#5BA4CF;font-weight:500">VOC-'+String(b.voucherNum).padStart(3,"0")+"</div>":"")+'<div style="font-size:11px;color:#888">'+(b.invCodigo||"")+" · "+(b.standNombre||"")+'</div></div><span class="badge '+(I?"b-entr":"b-pago")+'">'+(I?"✅ Entregado":"💳 Pagado")+"</span></div>"+(b.items||[]).map(T=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555"><span>'+T.desc+"</span><strong>$"+re(T.sub)+"</strong></div>").join("")+'<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$'+re(b.total||0)+'</span></div><div style="display:flex;gap:6px;margin-top:10px">'+(I?"":'<button class="btn btn-g" style="flex:1;padding:9px" onclick="window._logScanearRemito(&quot;'+b.fireId+'&quot;)">📷 Escanear</button>')+'<button class="btn" style="flex:1;padding:9px" onclick="window._logImprimirRemito(&quot;'+b.fireId+"&quot;,"+I+')">🖨️ '+(I?"Remito entregado":"Imprimir remito")+"</button></div></div>"}).join(""):'<div class="empty">Sin pedidos</div>')+"</div>"}window._logSetF=(f,g)=>{l=f,p()},window._logScanearRemito=async f=>{window.jsQR||await new Promise((b,I)=>{const T=document.createElement("script");T.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",T.onload=b,T.onerror=I,document.head.appendChild(T)});const g=document.getElementById("log-scan-overlay");g.style.display="flex";try{const b=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),I=document.getElementById("log-scan-video");I.srcObject=b,c=()=>{b.getTracks().forEach(B=>B.stop()),g.style.display="none"};const T=document.createElement("canvas"),_=T.getContext("2d"),D=()=>{if(g.style.display!=="none"){if(I.readyState===I.HAVE_ENOUGH_DATA){T.width=I.videoWidth,T.height=I.videoHeight,_.drawImage(I,0,0);const B=window.jsQR(_.getImageData(0,0,T.width,T.height).data,T.width,T.height);if(B){c();const P=document.getElementById("log-voucher-modal"),O=document.getElementById("log-voucher-content");B.data.includes(f)?window._logMostrarModalValido(f):window._logMostrarModalInvalido(),P.style.display="flex";return}}requestAnimationFrame(D)}};I.addEventListener("loadeddata",()=>requestAnimationFrame(D))}catch{document.getElementById("log-scan-status").textContent="No se pudo acceder a la cámara."}},window._logCerrarScanner=()=>{c&&c(),c=null},window._logEscanearVoucher=async()=>{window.jsQR||await new Promise((g,b)=>{const I=document.createElement("script");I.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",I.onload=g,I.onerror=b,document.head.appendChild(I)});const f=document.getElementById("log-scan-overlay");f.style.display="flex";try{const g=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),b=document.getElementById("log-scan-video");b.srcObject=g,c=()=>{g.getTracks().forEach(D=>D.stop()),f.style.display="none"};const I=document.createElement("canvas"),T=I.getContext("2d"),_=()=>{if(f.style.display!=="none"){if(b.readyState===b.HAVE_ENOUGH_DATA){I.width=b.videoWidth,I.height=b.videoHeight,T.drawImage(b,0,0);const D=window.jsQR(T.getImageData(0,0,I.width,I.height).data,I.width,I.height);if(D){c();const B=t.find(z=>z.fireId===D.data),P=document.getElementById("log-voucher-modal"),O=document.getElementById("log-voucher-content");if(B){const z=B.estado==="entregado";window._logMostrarPedido(B)}else window._logMostrarNoEncontrado();P.style.display="flex";return}}requestAnimationFrame(_)}};b.addEventListener("loadeddata",()=>requestAnimationFrame(_))}catch{document.getElementById("log-scan-status").textContent="No se pudo acceder a la cámara."}},window._logImprimirRemito=(f,g)=>{const b=t.find(D=>D.fireId===f);if(!b)return;const I=D=>Number(D).toLocaleString("es-AR"),T=b.voucherNum?"VOC-"+String(b.voucherNum).padStart(3,"0"):"VOC-000",_=window.open("","_blank");_.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+T+'</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif;padding:16px}.voucher{border:2px solid #1A3A5C;border-radius:10px;padding:16px}.header{display:flex;justify-content:space-between;margin-bottom:10px;border-bottom:1px solid #D6E4F0;padding-bottom:8px}.evento{font-size:10px;color:#888;letter-spacing:.08em}.voc-num{font-size:22px;font-weight:700;color:#1A3A5C;margin-top:2px}.stand{font-size:18px;font-weight:600;color:#1A3A5C}.item{display:flex;justify-content:space-between;font-size:15px;padding:4px 0;border-bottom:.5px solid #eee}.total{display:flex;justify-content:space-between;font-size:20px;font-weight:600;margin-top:8px;color:#1A3A5C}.badge{color:#fff;padding:3px 12px;border-radius:20px;font-size:11px;display:inline-block}.sello{text-align:center;margin-top:16px;padding:10px;border:3px solid #3A7D44;border-radius:8px;color:#3A7D44;font-size:22px;font-weight:700;letter-spacing:.1em}@media print{body{padding:0}}</style></head><body><div class="voucher"><div class="header"><div><div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #'+(b.standId||"")+'</div><div class="voc-num">'+T+'</div><div class="stand">'+(b.standNombre||"")+'</div><div style="font-size:13px;color:#555">'+(b.invNombre||"")+" · "+(b.invCodigo||"")+'</div></div><div style="text-align:right"><div class="badge" style="background:'+(g?"#1A3A5C":"#3A7D44")+'">'+(g?"✅ ENTREGADO":"✅ PAGADO")+"</div></div></div>"+(b.items||[]).map(D=>'<div class="item"><span>'+D.desc+"</span><strong>$"+I(D.sub)+"</strong></div>").join("")+'<div class="total"><span>Total</span><span>$'+I(b.total||0)+"</span></div>"+(g?'<div class="sello">✅ ENTREGADO</div>':"")+"</div><script>setTimeout(()=>window.print(),500)<\/script></body></html>"),_.document.close()},window._logMostrarPedido=f=>{const g=document.getElementById("log-voucher-content"),b=document.getElementById("log-voucher-modal"),I=f.estado==="entregado",T=D=>Number(D).toLocaleString("es-AR");let _='<div style="padding:8px 0 16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C;margin-bottom:4px">'+(f.invNombre||"")+'</div><div style="font-size:12px;color:#888;margin-bottom:12px">VOC-'+String(f.voucherNum||0).padStart(3,"0")+" · "+(f.standNombre||"")+"</div>"+(f.items||[]).map(D=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #eee"><span>'+D.desc+"</span><strong>$"+T(D.sub)+"</strong></div>").join("")+'<div style="display:flex;justify-content:space-between;font-size:15px;font-weight:600;color:#1A3A5C;margin-top:8px;margin-bottom:16px"><span>Total</span><span>$'+T(f.total||0)+"</span></div>";I?_+='<div style="text-align:center;color:#3A7D44;font-weight:600;margin-bottom:12px">✅ Ya entregado</div>':_+='<button onclick="marcarEntregado(&quot;'+f.fireId+'&quot;);document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="width:100%;padding:10px;border-radius:8px;border:none;background:#3A7D44;color:#fff;font-size:14px;font-weight:600;cursor:pointer;margin-bottom:8px">✅ Confirmar entrega</button>',_+='<button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="width:100%;padding:10px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:14px;cursor:pointer">Cerrar</button></div>',g.innerHTML=_,b.style.display="flex"},window._logMostrarNoEncontrado=()=>{const f=document.getElementById("log-voucher-content"),g=document.getElementById("log-voucher-modal");f.innerHTML='<div style="text-align:center;padding:16px"><div style="font-size:40px;margin-bottom:8px">❌</div><div style="font-size:16px;color:#C0392B;margin-bottom:12px">Voucher no encontrado</div><button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 24px;border-radius:8px;border:none;background:#1A3A5C;color:#fff;font-size:14px;cursor:pointer">Cerrar</button></div>',g.style.display="flex"},window._logMostrarModalValido=f=>{const g=document.getElementById("log-voucher-content"),b=document.getElementById("log-voucher-modal");g.innerHTML='<div style="text-align:center;padding:8px 0 16px"><div style="font-size:48px;margin-bottom:8px">✅</div><div style="font-size:18px;font-weight:700;color:#3A7D44;margin-bottom:4px">QR válido</div><div style="font-size:14px;color:#555;margin-bottom:20px">¿Confirmás la entrega?</div><div style="display:flex;gap:10px;justify-content:center"><button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 20px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:14px;cursor:pointer">Cancelar</button><button onclick="marcarEntregado(&quot;'+f+'&quot;);document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 20px;border-radius:8px;border:none;background:#3A7D44;color:#fff;font-size:14px;font-weight:600;cursor:pointer">Confirmar entrega</button></div></div>',b.style.display="flex"},window._logMostrarModalInvalido=()=>{const f=document.getElementById("log-voucher-content"),g=document.getElementById("log-voucher-modal");f.innerHTML='<div style="text-align:center;padding:8px 0 16px"><div style="font-size:48px;margin-bottom:8px">❌</div><div style="font-size:18px;font-weight:700;color:#C0392B;margin-bottom:4px">QR no corresponde</div><div style="font-size:14px;color:#555;margin-bottom:20px">Este QR no pertenece al remito seleccionado.</div><button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 24px;border-radius:8px;border:none;background:#1A3A5C;color:#fff;font-size:14px;font-weight:600;cursor:pointer">Cerrar</button></div>',g.style.display="flex"},window._volverLog=()=>{e=null,o==="envios"?s():w()};function w(){const f=document.getElementById("log-body");if(!f)return;if(e=null,!i.length){f.innerHTML='<div class="empty">📦<br><br>Sin pedidos especiales todavía</div>';return}const g=i.filter(T=>T.estado==="pagado"),b=i.filter(T=>T.estado==="entregado"),I=T=>'<div class="card" style="margin-bottom:10px;border-left:4px solid #5BA4CF"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px"><div><div style="font-size:14px;font-weight:500;color:#1A3A5C">'+(T.invNombre||"")+'</div><div style="font-size:11px;color:#888">'+(T.invCodigo||"")+" · "+(T.peNum||"")+"</div>"+(T.familia?'<div style="font-size:11px;color:#5BA4CF;margin-top:2px">Familia '+T.familia+"</div>":"")+'</div><div style="text-align:right"><div style="font-size:14px;font-weight:500">$'+re(T.total||0)+'</div><span class="badge '+(T.estado==="entregado"?"b-entr":"b-pago")+'" style="font-size:10px">'+(T.estado==="entregado"?"Entregado":"Pendiente")+'</span></div></div><div style="font-size:12px;color:#555;margin-bottom:8px">'+(T.items||[]).map(_=>_.desc+" — $"+re(_.sub)).join("<br>")+"</div>"+(T.estado!=="listo"&&T.estado!=="entregado"?'<button class="btn btn-b" style="width:100%;padding:8px" onclick="window._peCargarDireccion(&quot;'+T.fireId+'&quot;)">📍 Cargar dirección de entrega</button>':'<div style="font-size:12px;color:#3A7D44;text-align:center;padding:6px">✅ Dirección cargada — en Envíos</div>')+"</div>";f.innerHTML="",g.length&&(f.innerHTML+='<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:8px;letter-spacing:.05em">PENDIENTES DE DATOS DE ENVÍO ('+g.length+")</p>",f.innerHTML+=g.map(I).join("")),b.length&&(f.innerHTML+='<p style="font-size:11px;font-weight:500;color:#3A7D44;margin:14px 0 8px;letter-spacing:.05em">ENTREGADOS ('+b.length+")</p>",f.innerHTML+=b.map(I).join(""))}window._peCargarDireccion=f=>{var I,T,_,D,B,P,O,z;const g=i.find(H=>H.fireId===f);if(!g)return;const b=document.getElementById("log-body");b.innerHTML=`
      <div class="wrap" style="max-width:500px;margin:0 auto">
        <button class="btn" onclick="window._logVista('especiales', document.querySelector('.nav button:nth-child(2)'))" style="margin-bottom:12px">← Volver</button>
        <div class="card" style="margin-bottom:12px;border-left:4px solid #5BA4CF">
          <div style="font-size:14px;font-weight:600;color:#1A3A5C">${g.peNum} · ${g.invNombre}</div>
          <div style="font-size:12px;color:#888">${g.familia?"Familia "+g.familia:""} · $${re(g.total||0)}</div>
        </div>
        <div class="card" style="margin-bottom:12px">
          <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:10px">📍 Dirección de entrega</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Nombre destinatario</label><input id="pe-log-nombre" style="margin-top:3px" placeholder="Nombre completo" value="${((I=g.envio)==null?void 0:I.nombre)||g.invNombre||""}"></div>
            <div><label style="font-size:11px;color:#666">Teléfono</label><input id="pe-log-tel" style="margin-top:3px" placeholder="+54 9 11..." value="${((T=g.envio)==null?void 0:T.tel)||""}"></div>
          </div>
          <div style="display:grid;grid-template-columns:2fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Calle</label><input id="pe-log-calle" style="margin-top:3px" value="${((_=g.envio)==null?void 0:_.calle)||""}"></div>
            <div><label style="font-size:11px;color:#666">Número</label><input id="pe-log-num" style="margin-top:3px" value="${((D=g.envio)==null?void 0:D.numero)||""}"></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Piso / Dpto</label><input id="pe-log-piso" style="margin-top:3px" value="${((B=g.envio)==null?void 0:B.piso)||""}"></div>
            <div><label style="font-size:11px;color:#666">Localidad</label><input id="pe-log-loc" style="margin-top:3px" value="${((P=g.envio)==null?void 0:P.localidad)||""}"></div>
          </div>
          <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Provincia</label><input id="pe-log-prov" style="margin-top:3px" value="${((O=g.envio)==null?void 0:O.provincia)||"Buenos Aires"}"></div>
          <div style="margin-bottom:12px"><label style="font-size:11px;color:#666">Observaciones</label><input id="pe-log-obs" style="margin-top:3px" placeholder="Ej: dejar en portería" value="${((z=g.envio)==null?void 0:z.observaciones)||""}"></div>
          <button class="btn btn-v" style="width:100%;padding:10px" onclick="window._peGuardarDirLog('${f}')">Guardar y pasar a Envíos</button>
          <div id="pe-log-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
        </div>
      </div>`},window._peGuardarDirLog=async f=>{var I;const g={nombre:document.getElementById("pe-log-nombre").value.trim(),tel:document.getElementById("pe-log-tel").value.trim(),calle:document.getElementById("pe-log-calle").value.trim(),numero:document.getElementById("pe-log-num").value.trim(),piso:document.getElementById("pe-log-piso").value.trim(),localidad:document.getElementById("pe-log-loc").value.trim(),provincia:document.getElementById("pe-log-prov").value.trim(),observaciones:((I=document.getElementById("pe-log-obs"))==null?void 0:I.value.trim())||""},b=document.getElementById("pe-log-msg");if(!g.nombre||!g.calle||!g.localidad){b.innerHTML='<span style="color:#C0392B">Completá nombre, calle y localidad.</span>';return}b.innerHTML='<span style="color:#888">Guardando...</span>';try{await xs(f,{envio:g,estado:"listo"}),b.innerHTML='<span style="color:#3A7D44">✓ Guardado — aparece en Envíos</span>',setTimeout(()=>window._logVista("especiales",document.querySelector(".nav button:nth-child(2)")),1500)}catch(T){b.innerHTML='<span style="color:#C0392B">Error: '+T.message+"</span>"}}}async function _c(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function eg(n,t,e){await _c();const i=document.getElementById(n);if(i)try{const o=window.qrcode(0,"M");o.addData(String(t)),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let c=0;c<s;c++)for(let p=0;p<s;p++)o.isDark(c,p)&&l.fillRect(p*a,c*a,a,a)}catch(o){console.error("QR error:",o)}}async function ng(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function ig(n,t){oe(),n.innerHTML=Oi(null)+`<div style="text-align:center;padding:40px 16px">
    <div style="font-size:13px;color:#aaa">Cargando...</div></div>`;const e=await ni(t);if(!e){El(n,"Token inválido","El link no es válido o expiró.");return}if(e.estado==="invalidado"){El(n,"Acceso invalidado","Este bono fue invalidado. Consultá con la organización.");return}if(e.estado==="pendiente"){n.innerHTML=Oi(e)+`
      <div style="max-width:400px;margin:40px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">Pago pendiente</h2>
        <p style="font-size:14px;color:#666;line-height:1.6">
          Tu bono aún no fue confirmado. Una vez que abones los $35.000 recibirás tu QR de acceso.
        </p>
        <p style="font-size:12px;color:#aaa;margin-top:16px">Consultas: José Pannunzio +54 9 11 5400-1313</p>
      </div>`;return}let i=[],o=null,s=!1;const a=It.map(g=>`
    <a href="/stand/${g.id}?inv=${t}"
      style="display:flex;align-items:center;gap:8px;background:#fff;
        border:0.5px solid #D6E4F0;border-radius:8px;padding:8px 10px;
        text-decoration:none;color:inherit">
      <div style="width:28px;height:28px;border-radius:50%;background:#EBF4FA;
        color:#1A3A5C;font-size:11px;font-weight:500;display:flex;
        align-items:center;justify-content:center;flex-shrink:0">${g.id}</div>
      <div style="min-width:0;flex:1">
        <div style="font-size:12px;font-weight:500;color:#1A3A5C;
          white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${g.nombre}</div>
        <div style="font-size:10px;color:#888">${g.region||""}</div>
      </div>
      <span style="color:#5BA4CF;font-size:14px">›</span>
    </a>`).join("");n.innerHTML=Oi(e)+`
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
    </div>`,setTimeout(()=>eg("qr-acc",e.codigo,160),50);let l=[];fn(g=>{l=g.filter(b=>b.invFireId===e.fireId)}),ac(e.fireId,g=>{i=g;const b=document.getElementById("btn-mis-pedidos");b&&(b.style.display=g.length?"flex":"none",g.length&&(b.textContent="📋 Mis pedidos ("+g.length+")"));const I=document.getElementById("mis-pedidos-sec");I&&I.style.display!=="none"&&c()}),window._togglePedidos=()=>{const g=document.getElementById("mis-pedidos-sec");g&&(g.style.display=g.style.display==="none"?"block":"none",g.style.display==="block"&&c())};async function c(){const g=document.getElementById("mis-pedidos-sec");if(!g||g.style.display==="none")return;if(![...i,...l].length){g.innerHTML='<div class="empty">Sin pedidos pagados todavía</div>';return}await _c();const I=_=>Number(_).toLocaleString("es-AR"),T=l.map(_=>'<div style="background:#EBF4FA;border:.5px solid #5BA4CF;border-radius:10px;padding:14px;margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:14px;font-weight:500;color:#1A3A5C">📦 Pedido especial · '+(_.peNum||"")+'</div><div style="font-size:11px;color:#888">'+(_.estado==="listo"?"🚚 En preparación para envío":"⏳ Pendiente")+'</div></div><span style="font-size:11px;font-weight:500;color:#5BA4CF">Pedido especial</span></div>'+(_.items||[]).map(D=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid rgba(0,0,0,.08);color:#555"><span>'+D.desc+"</span><strong>$"+I(D.sub)+"</strong></div>").join("")+'<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$'+I(_.total||0)+"</span></div>"+(_.envio?'<div style="font-size:12px;color:#185FA5;margin-top:8px">📍 Entrega: '+_.envio.calle+" "+_.envio.numero+", "+_.envio.localidad+"</div>":"")+"</div>").join("");g.innerHTML=T+i.map(_=>{const D=_.retiro==="envio",B=_.estado==="entregado",P=_.estado==="reembolsado"||_.estado==="cancelado",O=B?"#f5f5f5":P?"#FEE2E2":D?"#EBF4FA":"#EAF3DE",z=B?"#ddd":P?"#FCA5A5":D?"#5BA4CF":"#3B6D11",H=B?"✅ Entregado":P?"↩️ Reembolsado":D?"🚚 Envío a domicilio":"🟢 Listo para retirar",R=(_.items||[]).map(y=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid rgba(0,0,0,.08);color:#555"><span>'+y.desc+"</span><strong>$"+I(y.sub)+"</strong></div>").join(""),v="vq-"+_.fireId;return'<div style="background:'+O+";border:.5px solid "+z+';border-radius:10px;padding:14px;margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:14px;font-weight:500;color:#1A3A5C">'+_.standNombre+'</div><div style="font-size:11px;color:#888">Stand #'+_.standId+(_.voucherNum?" · VOC-"+String(_.voucherNum).padStart(3,"0"):"")+'</div></div><span style="font-size:11px;font-weight:500">'+H+"</span></div>"+R+'<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$'+I(_.total||0)+"</span></div>"+(!B&&!P&&!D?'<div style="margin-top:12px;text-align:center"><canvas id="'+v+'" style="border-radius:8px;display:block;margin:0 auto"></canvas><div style="font-size:11px;color:#888;margin-top:4px">Mostrá este QR en el stand para retirar</div></div>':"")+(D&&!B&&!P?'<div style="font-size:12px;color:#185FA5;margin-top:8px;text-align:center">Tu pedido será enviado a domicilio. Logística te lo hará llegar.</div>':"")+"</div>"}).join(""),i.forEach(_=>{if(_.retiro==="envio"||_.estado==="entregado"||_.estado==="reembolsado"||_.estado==="cancelado")return;const D=document.getElementById("vq-"+_.fireId);if(!(!D||!window.qrcode))try{const B=window.qrcode(0,"M");B.addData(_.fireId),B.make();const P=B.getModuleCount(),O=220,z=O/P;D.width=O,D.height=O;const H=D.getContext("2d");H.fillStyle="#fff",H.fillRect(0,0,O,O),H.fillStyle="#000";for(let R=0;R<P;R++)for(let v=0;v<P;v++)B.isDark(R,v)&&H.fillRect(v*z,R*z,z,z)}catch{}})}window._abrirScannerAcceso=async()=>{const g=document.getElementById("scan-overlay-acc");g&&(g.style.display="flex");const b=document.getElementById("scan-status-acc");try{await ng(),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const I=document.getElementById("scan-video-acc");I.srcObject=o,s=!0,b&&(b.textContent="Buscando QR del stand...");const T=document.createElement("canvas"),_=T.getContext("2d",{willReadFrequently:!0}),D=()=>{if(s){if(I.readyState===I.HAVE_ENOUGH_DATA&&I.videoWidth>0){T.width=I.videoWidth,T.height=I.videoHeight,_.drawImage(I,0,0);const B=_.getImageData(0,0,T.width,T.height),P=window.jsQR(B.data,B.width,B.height,{inversionAttempts:"dontInvert"});if(P&&P.data){const O=P.data;window._cerrarScannerAcceso();const z=O.match(/\/stand\/(\d+)/);z&&(window.location.href="/stand/"+z[1]+"?inv="+t);return}}s&&requestAnimationFrame(D)}};I.addEventListener("loadeddata",()=>requestAnimationFrame(D))}catch{b&&(b.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerAcceso=()=>{s=!1,o&&(o.getTracks().forEach(b=>b.stop()),o=null);const g=document.getElementById("scan-overlay-acc");g&&(g.style.display="none")};let p=[],w="";window._abrirRecomendador=()=>{p=[],w="",document.getElementById("modal-ia").style.display="flex",document.getElementById("ia-respuesta").style.display="none",document.getElementById("ia-input").value=""},window._pedirRecomendacion=async()=>{var _,D;const g=document.getElementById("ia-input").value.trim();if(!g)return;const b=document.getElementById("ia-input"),I=document.querySelector('#modal-ia button[onclick*="pedirRecomendacion"]'),T=document.getElementById("ia-respuesta");if(b.disabled=!0,I&&(I.disabled=!0,I.style.opacity="0.6"),p.push({role:"user",content:g}),b.value="",T.style.display="block",T.innerHTML=f(p)+'<div id="ia-typing" style="color:#9333EA;margin-top:8px">✨ Pensando...</div>',T.scrollTop=T.scrollHeight,!w){let B=[],P=0;await new Promise(z=>{It.forEach(H=>{Ge(H.id,R=>{R.forEach(v=>B.push({stand:H.id,bodega:H.nombre,region:H.region||"",vino:v.nombre,varietal:v.varietal||"",descripcion:v.descripcion||"",precios:(v.unidades||[]).map(y=>y.u+": $"+Number(y.p).toLocaleString("es-AR")).join(", ")})),P++,P===It.length&&z()})})});const O=B.length>0?B.map(z=>"Stand #"+z.stand+" - "+z.bodega+" ("+z.region+"): "+z.vino+(z.varietal?" - "+z.varietal:"")+(z.descripcion?" - "+z.descripcion:"")+" | "+z.precios).join(`
`):"No hay vinos cargados aún.";w="Sos un sommelier experto en vinos argentinos en la Feria de Vinos SUCOVI 2027 en Olivos. El invitado se llama "+e.nombre+`. Esta es la carta completa de vinos disponibles esta noche:

`+O+`

Recomendá vinos específicos de la carta. Para cada uno mencioná el Stand #, la bodega, el vino y por qué lo recomendás. Mantené el hilo de la conversación. Sé breve, cálido y entusiasta. Respondé siempre en español rioplatense.`}try{const O=((D=(_=(await(await fetch("/api/recommend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:w,messages:p})})).json()).content)==null?void 0:_[0])==null?void 0:D.text)||"No pude generar una recomendación.";p.push({role:"assistant",content:O}),T.innerHTML=f(p),T.scrollTop=T.scrollHeight}catch{p.pop(),T.innerHTML=f(p)+'<div style="color:red;margin-top:8px">Error al conectar. Intentá de nuevo.</div>'}finally{b.disabled=!1,I&&(I.disabled=!1,I.style.opacity="1"),b.focus()}};function f(g){return g.map(b=>{const I=b.role==="user",T=b.content.replace(/\n/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");return I?'<div style="text-align:right;margin-bottom:10px"><span style="background:#9333EA;color:#fff;padding:8px 12px;border-radius:16px 16px 4px 16px;display:inline-block;max-width:85%">'+T+"</span></div>":'<div style="text-align:left;margin-bottom:10px"><span style="background:#f3e8ff;color:#1a1a1a;padding:8px 12px;border-radius:16px 16px 16px 4px;display:inline-block;max-width:85%">'+T+"</span></div>"}).join("")}}function El(n,t,e){n.innerHTML=Oi(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
      <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${t}</h2>
      <p style="font-size:14px;color:#666">${e}</p>
      <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>
    </div>`}async function og(n,t,e){window.qrcode||await new Promise((c,p)=>{const w=document.createElement("script");w.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",w.onload=c,w.onerror=p,document.head.appendChild(w)});const i=document.getElementById(n);if(!i)return;const o=window.qrcode(0,"M");o.addData(t),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let c=0;c<s;c++)for(let p=0;p<s;p++)o.isDark(c,p)&&l.fillRect(p*a,c*a,a,a)}window._imprimirQRStand=async(n,t,e,i)=>{window.qrcode||await new Promise((g,b)=>{const I=document.createElement("script");I.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",I.onload=g,I.onerror=b,document.head.appendChild(I)});const o=window.qrcode(0,"M");o.addData(i),o.make();const s=o.getModuleCount(),a=400,l=a/s,c=document.createElement("canvas");c.width=a,c.height=a;const p=c.getContext("2d");p.fillStyle="#fff",p.fillRect(0,0,a,a),p.fillStyle="#000";for(let g=0;g<s;g++)for(let b=0;b<s;b++)o.isDark(g,b)&&p.fillRect(b*l,g*l,l,l);const w=c.toDataURL("image/png"),f=window.open("","_blank");f.document.write(`<!DOCTYPE html><html><head>
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
      <img src="${w}" class="qr-img" alt="QR Stand">
      <div class="instruccion">
        Escaneá este código con tu celular<br>para ver la carta y hacer tu pedido
      </div>
    </div>
    <script>setTimeout(() => { window.print() }, 500)<\/script>
  </body></html>`),f.document.close()};function Il(n){oe();const t=window.location.origin;n.innerHTML=Ht({title:"🍷 SUCOVI 2027",sub:"Panel de organización — Stands"})+`
    <div class="wrap">
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>Vista cliente:</strong> para cargar pedidos de invitados.<br>
        <strong>Panel:</strong> para ver pedidos y marcar entregas con QR.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${It.filter(e=>!e.oculto).map(e=>`
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
    </div>`,It.forEach(e=>setTimeout(()=>og("org-qr-"+e.id,t+"/stand/"+e.id,110),50))}const Yo=n=>Number(n).toLocaleString("es-AR");function rg(n,t){if(oe(),!t||t.estado==="invalidado"){n.innerHTML=`
      <div class="hdr"><div><h1>🛒 Carrito</h1></div></div>
      <div class="gold"></div>
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <p style="font-size:14px;color:#666">Necesitás tu QR de acreditación para ver el carrito.</p>
      </div>`;return}let e=[];n.innerHTML=`
    ${Ht({title:"🛒 Mi carrito",sub:t.nombre+" "+t.apellido+" · "+t.codigo,backHref:"/acceso?inv="+t.token,backLabel:"← Mi QR",backStyle:"background:#A32D2D;color:#fff;border-color:#A32D2D"})}
    <div style="max-width:480px;margin:0 auto;padding:14px" id="carrito-body">
      <div class="empty">Cargando carrito...</div>
    </div>`,vs(t.fireId,o=>{e=o,i()});function i(){const o=document.getElementById("carrito-body");if(!o)return;if(!e.length||!e.some(a=>{var l;return(l=a.items)==null?void 0:l.length})){o.innerHTML=`
        <div class="empty" style="padding:48px 20px">
          <div style="font-size:48px;margin-bottom:12px">🛒</div>
          <p style="font-size:15px;font-weight:500;margin-bottom:8px">Tu carrito está vacío</p>
          <p style="font-size:13px;color:#aaa">
            Escaneá el QR de cualquier stand para agregar vinos.
          </p>
        </div>`;return}const s=e.reduce((a,l)=>a+(l.items||[]).reduce((c,p)=>c+(p.sub||0),0),0);o.innerHTML=`
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
                <span style="font-size:13px;font-weight:500">$${Yo(l.sub)}</span>
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
            <span>$${Yo((a.items||[]).reduce((l,c)=>l+(c.sub||0),0))}</span>
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
          <span style="color:#6B1C1C">$${Yo(s)}</span>
        </div>
        <p style="font-size:12px;color:#888;margin-top:6px">
          Llevá este carrito a caja para pagar. El cajero escanea tu código y ve todo.
        </p>
      </div>

      <div style="background:#E6F1FB;border:.5px solid #185FA5;border-radius:8px;
        padding:10px 14px;font-size:12px;color:#185FA5;margin-bottom:14px;text-align:center">
        📍 Tu código de caja: <strong style="font-size:16px;letter-spacing:.1em">${t.codigo}</strong>
      </div>

      <div id="carrito-msg" style="font-size:12px;text-align:center;min-height:16px;margin-bottom:8px"></div>`}window._quitarCarrito=async(o,s)=>{const a=e.find(c=>c.standDocId===o);if(!a)return;const l=(a.items||[]).find(c=>c.key===s);l&&l.vinoId&&l.qty&&await Eo(Number(a.standId),l.vinoId,l.qty).catch(()=>{}),await to(t.fireId,Number(a.standId),s)},window._cambiarRetiro=async(o,s,a)=>{await ys(t.fireId,Number(s),a)}}async function sg(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function _l(n,t,e,i,o,s){n.beginPath(),n.moveTo(t+s,e),n.lineTo(t+i-s,e),n.quadraticCurveTo(t+i,e,t+i,e+s),n.lineTo(t+i,e+o-s),n.quadraticCurveTo(t+i,e+o,t+i-s,e+o),n.lineTo(t+s,e+o),n.quadraticCurveTo(t,e+o,t,e+o-s),n.lineTo(t,e+s),n.quadraticCurveTo(t,e,t+s,e),n.closePath()}async function ag(n){await sg();const e=window.location.origin+"/acceso?inv="+n.token,i=document.createElement("canvas"),o=600,s=800;i.width=o,i.height=s;const a=i.getContext("2d"),l=a.createLinearGradient(0,0,0,s);l.addColorStop(0,"#1A3A5C"),l.addColorStop(.55,"#2C5F8A"),l.addColorStop(1,"#3A7D44"),a.fillStyle=l,a.fillRect(0,0,o,s),a.fillStyle="#C9A96E",a.fillRect(0,s-4,o,4),a.fillStyle="rgba(255,255,255,0.7)",a.font="500 18px system-ui, -apple-system, sans-serif",a.textAlign="center",a.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",o/2,54),a.fillStyle="#ffffff",a.font="500 38px system-ui, -apple-system, sans-serif",a.fillText(n.nombre+" "+n.apellido,o/2,110),a.fillStyle="rgba(255,255,255,0.75)",a.font="400 22px system-ui, -apple-system, sans-serif",a.fillText(n.codigo,o/2,146),a.fillStyle="#3A7D44";const c=200,p=34,w=o/2-c/2,f=164;_l(a,w,f,c,p,17),a.fill(),a.fillStyle="#ffffff",a.font="500 15px system-ui, -apple-system, sans-serif",a.fillText("Bono confirmado",o/2,f+23);const g=320,b=340,I=o/2-g/2,T=220;a.fillStyle="#ffffff",_l(a,I,T,g,b,16),a.fill();const _=qrcode(0,"M");_.addData(e),_.make();const D=_.getModuleCount(),B=240,P=I+(g-B)/2,O=T+24,z=B/D;a.fillStyle="#000000";for(let R=0;R<D;R++)for(let v=0;v<D;v++)_.isDark(R,v)&&a.fillRect(P+v*z,O+R*z,z,z);a.fillStyle="#1A3A5C",a.font="500 26px system-ui, -apple-system, sans-serif",a.fillText(n.codigo,o/2,T+b-44),a.fillStyle="#888",a.font="400 14px system-ui, -apple-system, sans-serif",a.fillText("Mostrá este QR en la entrada",o/2,T+b-20),a.fillStyle="rgba(255,255,255,0.85)",a.font="400 18px system-ui, -apple-system, sans-serif",a.fillText("Sáb 20 jun 2026  ·  19:30 hs",o/2,T+b+50),a.fillText("Roma 656, Olivos",o/2,T+b+80),a.fillStyle="rgba(255,255,255,0.5)",a.font="400 13px system-ui, -apple-system, sans-serif",a.fillText("Personal e intransferible · Un solo uso en la entrada",o/2,s-24);const H=document.createElement("a");H.download="QR_"+n.nombre+"_"+n.apellido+".png",H.href=i.toDataURL(),H.click()}async function lg(n,t,e){if(oe(),!await wc(t,e)){n.innerHTML=Ht({title:"Acceso denegado",sub:"SUCOVI 2027"})+'<div style="max-width:480px;margin:40px auto;padding:16px;text-align:center"><div style="font-size:40px;margin-bottom:12px">🔒</div><div style="font-size:16px;color:#A32D2D">Link invalido o expirado</div></div>';return}const s=(await bc(t)).filter(b=>b.estado!=="invalidado"),a=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),l={pagado:"b-pago",ingresado:"b-ingr",pendiente:"b-pend",invalidado:"b-canc"},c={pagado:"Bono confirmado",ingresado:"Ingreso",pendiente:"Pendiente",invalidado:"Invalidado"},p=window.location.origin;n.innerHTML=Ht({title:"Familia "+a,sub:"SUCOVI 2027 · "+s.length+" invitado"+(s.length!==1?"s":"")})+'<div style="max-width:600px;margin:0 auto;padding:16px">'+(s.length===0?'<div class="empty">No se encontraron invitados.</div>':s.map((b,I)=>{const T=((b.nombre||"")[0]||"")+((b.apellido||"")[0]||""),_=p+"/acceso?inv="+b.token,D=b.estado==="ingresado"?"Hola "+b.nombre+`! 🍷

Ya estás dentro de SUCOVI 2027 — ¡disfrutá la noche!

Si necesitás tu QR para los stands:
👉 `+_+`

_Personal e intransferible._`:b.estado==="pagado"?"Hola "+b.nombre+`! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 `+_+`

_Personal e intransferible. Un solo uso en la entrada._`:"Hola "+b.nombre+`! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`,B=encodeURIComponent(D),P=(b.tel||"").replace(/\D/g,""),O=P?"https://wa.me/"+(P.startsWith("54")?P:"54"+P)+"?text="+B:null;return'<div class="card" style="margin-bottom:10px"><div style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;border-radius:50%;background:#1A3A5C;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;flex-shrink:0">'+T+'</div><div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:600;color:#1A3A5C">'+b.nombre+" "+b.apellido+'</div><div style="font-size:12px;color:#888">'+(b.codigo||"")+'</div><span class="badge '+(l[b.estado]||"")+'" style="margin-top:4px;display:inline-block">'+(c[b.estado]||b.estado)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInvFam('+I+')">✏️</button>'+(O?'<a href="'+O+'" target="_blank" class="btn" style="padding:4px 8px;font-size:11px">📱 WA</a>':"")+'<button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._dlQR('+I+')">📥 QR</button><a href="'+_+'" class="btn btn-v" style="padding:4px 8px;font-size:11px">Ver QR</a></div></div></div>'}).join(""))+"</div>",window._invitadosFamilia=s;const w=document.createElement("button");w.innerHTML="?",w.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",w.onclick=()=>document.getElementById("modal-ayuda-fam").style.display="flex",document.body.appendChild(w);const f=document.createElement("div");f.id="modal-ayuda-fam",f.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",f.innerHTML=`<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">¿Cómo usar esta página?</div><button onclick="document.getElementById('modal-ayuda-fam').style.display='none'" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">✏️ Editar datos</div><div>Antes de enviar la invitación, verificá que el <strong>nombre</strong>, <strong>apellido</strong> y <strong>teléfono</strong> de cada invitado sean correctos. Tocá el botón ✏️ para corregirlos.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📱 Enviar por WhatsApp</div><div>Tocá el botón <strong>WA</strong> para abrir WhatsApp con el mensaje de invitación ya redactado. El mensaje incluye el link personal del invitado con su QR. <strong>Verificá los datos antes de enviar.</strong></div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📥 Descargar QR</div><div>Descargá la imagen del QR personal de cada invitado para compartirla por otro medio si es necesario.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">👁️ Ver QR</div><div>Abre la página personal del invitado donde puede ver su QR, sus compras y acceder a los stands el día del evento.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ <strong>Importante:</strong> El link de cada invitado es personal e intransferible. No lo compartas con otras personas.</div></div></div>`,f.addEventListener("click",b=>{b.target===f&&(f.style.display="none")}),document.body.appendChild(f);const g=document.createElement("div");g.id="modal-edit-fam",g.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.45);z-index:200;align-items:center;justify-content:center;padding:16px",g.innerHTML='<div style="background:#fff;width:100%;max-width:420px;border-radius:12px;padding:20px"><h3 style="font-size:14px;font-weight:500;color:#1A3A5C;margin-bottom:14px">Editar invitado</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px"><div><label style="font-size:11px;color:#666">Nombre</label><input id="fam-edit-nom" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div><div><label style="font-size:11px;color:#666">Apellido</label><input id="fam-edit-ape" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div></div><div style="margin-bottom:12px"><label style="font-size:11px;color:#666">WhatsApp</label><input id="fam-edit-tel" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div><div style="display:flex;gap:8px"><button onclick="window._guardarEditFam()" style="flex:1;padding:9px;background:#1A3A5C;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer">Guardar</button><button onclick="window._cerrarEditFam()" style="flex:1;padding:9px;background:#fff;color:#555;border:1px solid #ccc;border-radius:8px;font-size:14px;cursor:pointer">Cancelar</button></div><div id="fam-edit-msg" style="margin-top:8px;font-size:12px;text-align:center"></div></div>',document.body.appendChild(g),window._editarInvFam=b=>{const I=window._invitadosFamilia[b];I&&(window._editIdxFam=b,window._editFireIdFam=I.fireId,document.getElementById("fam-edit-nom").value=I.nombre||"",document.getElementById("fam-edit-ape").value=I.apellido||"",document.getElementById("fam-edit-tel").value=I.tel||"",document.getElementById("fam-edit-msg").innerHTML="",document.getElementById("modal-edit-fam").style.display="flex")},window._guardarEditFam=async()=>{const b=document.getElementById("fam-edit-msg"),I=document.getElementById("fam-edit-nom").value.trim(),T=document.getElementById("fam-edit-ape").value.trim(),_=document.getElementById("fam-edit-tel").value.trim();if(!I||!T||!_){b.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}b.innerHTML='<span style="color:#888">Guardando...</span>';try{await Ae(window._editFireIdFam,{nombre:I,apellido:T,tel:_}),window._invitadosFamilia[window._editIdxFam].nombre=I,window._invitadosFamilia[window._editIdxFam].apellido=T,window._invitadosFamilia[window._editIdxFam].tel=_,b.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEditFam(),1200)}catch(D){b.innerHTML='<span style="color:#C0392B">Error: '+D.message+"</span>"}},window._cerrarEditFam=()=>{document.getElementById("modal-edit-fam").style.display="none"},window._dlQR=async b=>{const I=window._invitadosFamilia[b];I&&await ag(I)}}async function Tc(){const t=window.location.pathname.replace("/Sucovi2027","")||"/",e=new URLSearchParams(window.location.search),i=document.getElementById("app"),o=t.match(/^\/familia\/([^/]+)$/);if(o){const c=decodeURIComponent(o[1]),p=e.get("key");return lg(i,c,p)}const s=t.match(/^\/stand\/(\d+)$/);if(s){const c=parseInt(s[1]),p=It.find(g=>g.id===c);if(!p){i.innerHTML=tn("Stand no encontrado");return}const w=e.get("inv"),f=w?await ni(w):null;return Gm(i,p,f)}const a=t.match(/^\/panel\/(\d+)$/);if(a){const c=It.find(w=>w.id===parseInt(a[1]));if(!c){i.innerHTML=tn("Panel no encontrado");return}const p=e.get("key");if(p&&p!==c.key){i.innerHTML=tn("Acceso no autorizado");return}if(!p){i.innerHTML=tn("Link inválido — usá el link completo que te enviaron");return}return Xm(i,c)}const l=t.match(/^\/bodega\/(\d+)\/vinos$/);if(l){const c=It.find(w=>w.id===parseInt(l[1]));if(!c){i.innerHTML=tn("Bodega no encontrada");return}const p=e.get("key");if(p&&p!==c.key){i.innerHTML=tn("Acceso no autorizado");return}return Ic(i,c)}if(t==="/carrito"){const c=e.get("inv"),p=c?await ni(c):null;return rg(i,p)}if(t==="/acceso")return ig(i,e.get("inv"));if(t==="/org"){Il(i);return}if(t==="/registro"){Il(i);return}return t==="/caja"?Wm(i):t==="/puerta"?Ym(i):t==="/logistica"?tg(i):Ec(i)}function tn(n){return`<div style="padding:60px;text-align:center;color:#aaa;font-size:14px">${n}</div>`}Tc();window.addEventListener("popstate",Tc);(function(){var n=window.location.search.match(/[?&]p=([^&]+)/);if(n){var t="/Sucovi2027",e=decodeURIComponent(n[1].replace(/~and~/g,"&"));window.history.replaceState(null,null,t+"/"+e)}})();
