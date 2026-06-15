(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();var ba={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?t[e++]=o:o<2048?(t[e++]=o>>6|192,t[e++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=o>>18|240,t[e++]=o>>12&63|128,t[e++]=o>>6&63|128,t[e++]=o&63|128):(t[e++]=o>>12|224,t[e++]=o>>6&63|128,t[e++]=o&63|128)}return t},nu=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const o=n[e++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const s=n[e++];t[i++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=n[e++],a=n[e++],l=n[e++],d=((o&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(d>>10)),t[i++]=String.fromCharCode(56320+(d&1023))}else{const s=n[e++],a=n[e++];t[i++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const s=n[o],a=o+1<n.length,l=a?n[o+1]:0,d=o+2<n.length,p=d?n[o+2]:0,x=s>>2,h=(s&3)<<4|l>>4;let m=(l&15)<<2|p>>6,v=p&63;d||(v=64,a||(m=64)),i.push(e[x],e[h],e[m],e[v])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(_l(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):nu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const s=e[n.charAt(o++)],l=o<n.length?e[n.charAt(o)]:0;++o;const p=o<n.length?e[n.charAt(o)]:64;++o;const h=o<n.length?e[n.charAt(o)]:64;if(++o,s==null||l==null||p==null||h==null)throw new iu;const m=s<<2|l>>4;if(i.push(m),p!==64){const v=l<<4&240|p>>2;if(i.push(v),h!==64){const _=p<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ou=function(n){const t=_l(n);return Tl.encodeByteArray(t,!0)},Oi=function(n){return ou(n).replace(/\./g,"")},ru=function(n){try{return Tl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const au=()=>su().__FIREBASE_DEFAULTS__,lu=()=>{if(typeof process>"u"||typeof ba>"u")return;const n=ba.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ru(n[1]);return t&&JSON.parse(t)},Er=()=>{try{return au()||lu()||cu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},du=n=>{var t,e;return(e=(t=Er())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},uu=n=>{const t=du(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Cl=()=>{var n;return(n=Er())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function hu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",o=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Oi(JSON.stringify(e)),Oi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mu(){var n;const t=(n=Er())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gu(){return!mu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yu(){try{return typeof indexedDB=="object"}catch{return!1}}function vu(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{var s;t(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="FirebaseError";class fn extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=bu,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rl.prototype.create)}}class Rl{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},o=`${this.service}/${t}`,s=this.errors[t],a=s?xu(s,i):"Error",l=`${this.serviceName}: ${a} (${o}).`;return new fn(o,l,i)}}function xu(n,t){return n.replace(wu,(e,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const wu=/\{\$([^}]+)}/g;function Zo(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const o of e){if(!i.includes(o))return!1;const s=n[o],a=t[o];if(xa(s)&&xa(a)){if(!Zo(s,a))return!1}else if(s!==a)return!1}for(const o of i)if(!e.includes(o))return!1;return!0}function xa(n){return n!==null&&typeof n=="object"}/**
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
 */function Wt(n){return n&&n._delegate?n._delegate:n}class $n{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var it;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(it||(it={}));const Tu={debug:it.DEBUG,verbose:it.VERBOSE,info:it.INFO,warn:it.WARN,error:it.ERROR,silent:it.SILENT},Cu=it.INFO,Ru={[it.DEBUG]:"log",[it.VERBOSE]:"log",[it.INFO]:"info",[it.WARN]:"warn",[it.ERROR]:"error"},Su=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),o=Ru[t];if(o)console[o](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sl{constructor(t){this.name=t,this._logLevel=Cu,this._logHandler=Su,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in it))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Tu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,it.DEBUG,...t),this._logHandler(this,it.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,it.VERBOSE,...t),this._logHandler(this,it.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,it.INFO,...t),this._logHandler(this,it.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,it.WARN,...t),this._logHandler(this,it.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,it.ERROR,...t),this._logHandler(this,it.ERROR,...t)}}const Pu=(n,t)=>t.some(e=>n instanceof e);let wa,Aa;function ku(){return wa||(wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Du(){return Aa||(Aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pl=new WeakMap,Yo=new WeakMap,kl=new WeakMap,qo=new WeakMap,Ir=new WeakMap;function Vu(n){const t=new Promise((e,i)=>{const o=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{e(Ee(n.result)),o()},a=()=>{i(n.error),o()};n.addEventListener("success",s),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Pl.set(e,n)}).catch(()=>{}),Ir.set(t,n),t}function Bu(n){if(Yo.has(n))return;const t=new Promise((e,i)=>{const o=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{e(),o()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Yo.set(n,t)}let tr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Yo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||kl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ee(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Nu(n){tr=n(tr)}function Lu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Ho(this),t,...e);return kl.set(i,t.sort?t.sort():[t]),Ee(i)}:Du().includes(n)?function(...t){return n.apply(Ho(this),t),Ee(Pl.get(this))}:function(...t){return Ee(n.apply(Ho(this),t))}}function zu(n){return typeof n=="function"?Lu(n):(n instanceof IDBTransaction&&Bu(n),Pu(n,ku())?new Proxy(n,tr):n)}function Ee(n){if(n instanceof IDBRequest)return Vu(n);if(qo.has(n))return qo.get(n);const t=zu(n);return t!==n&&(qo.set(n,t),Ir.set(t,n)),t}const Ho=n=>Ir.get(n);function Fu(n,t,{blocked:e,upgrade:i,blocking:o,terminated:s}={}){const a=indexedDB.open(n,t),l=Ee(a);return i&&a.addEventListener("upgradeneeded",d=>{i(Ee(a.result),d.oldVersion,d.newVersion,Ee(a.transaction),d)}),e&&a.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),l.then(d=>{s&&d.addEventListener("close",()=>s()),o&&d.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),l}const Mu=["get","getKey","getAll","getAllKeys","count"],Ou=["put","add","delete","clear"],Uo=new Map;function Ea(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Uo.get(t))return Uo.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,o=Ou.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(o||Mu.includes(e)))return;const s=async function(a,...l){const d=this.transaction(a,o?"readwrite":"readonly");let p=d.store;return i&&(p=p.index(l.shift())),(await Promise.all([p[e](...l),o&&d.done]))[0]};return Uo.set(t,s),s}Nu(n=>({...n,get:(t,e,i)=>Ea(t,e)||n.get(t,e,i),has:(t,e)=>!!Ea(t,e)||n.has(t,e)}));/**
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
 */class ju{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(qu(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function qu(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const er="@firebase/app",Ia="0.10.13";/**
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
 */const he=new Sl("@firebase/app"),Hu="@firebase/app-compat",Uu="@firebase/analytics-compat",$u="@firebase/analytics",Qu="@firebase/app-check-compat",Wu="@firebase/app-check",Gu="@firebase/auth",Ku="@firebase/auth-compat",Xu="@firebase/database",Ju="@firebase/data-connect",Zu="@firebase/database-compat",Yu="@firebase/functions",tp="@firebase/functions-compat",ep="@firebase/installations",np="@firebase/installations-compat",ip="@firebase/messaging",op="@firebase/messaging-compat",rp="@firebase/performance",sp="@firebase/performance-compat",ap="@firebase/remote-config",lp="@firebase/remote-config-compat",cp="@firebase/storage",dp="@firebase/storage-compat",up="@firebase/firestore",pp="@firebase/vertexai-preview",hp="@firebase/firestore-compat",fp="firebase",mp="10.14.1";/**
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
 */const nr="[DEFAULT]",gp={[er]:"fire-core",[Hu]:"fire-core-compat",[$u]:"fire-analytics",[Uu]:"fire-analytics-compat",[Wu]:"fire-app-check",[Qu]:"fire-app-check-compat",[Gu]:"fire-auth",[Ku]:"fire-auth-compat",[Xu]:"fire-rtdb",[Ju]:"fire-data-connect",[Zu]:"fire-rtdb-compat",[Yu]:"fire-fn",[tp]:"fire-fn-compat",[ep]:"fire-iid",[np]:"fire-iid-compat",[ip]:"fire-fcm",[op]:"fire-fcm-compat",[rp]:"fire-perf",[sp]:"fire-perf-compat",[ap]:"fire-rc",[lp]:"fire-rc-compat",[cp]:"fire-gcs",[dp]:"fire-gcs-compat",[up]:"fire-fst",[hp]:"fire-fst-compat",[pp]:"fire-vertex","fire-js":"fire-js",[fp]:"fire-js-all"};/**
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
 */const ji=new Map,yp=new Map,ir=new Map;function _a(n,t){try{n.container.addComponent(t)}catch(e){he.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function qi(n){const t=n.name;if(ir.has(t))return he.debug(`There were multiple attempts to register component ${t}.`),!1;ir.set(t,n);for(const e of ji.values())_a(e,n);for(const e of yp.values())_a(e,n);return!0}function vp(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const bp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ie=new Rl("app","Firebase",bp);/**
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
 */class xp{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}}/**
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
 */const wp=mp;function Dl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:nr,automaticDataCollectionEnabled:!1},t),o=i.name;if(typeof o!="string"||!o)throw Ie.create("bad-app-name",{appName:String(o)});if(e||(e=Cl()),!e)throw Ie.create("no-options");const s=ji.get(o);if(s){if(Zo(e,s.options)&&Zo(i,s.config))return s;throw Ie.create("duplicate-app",{appName:o})}const a=new _u(o);for(const d of ir.values())a.addComponent(d);const l=new xp(e,i,a);return ji.set(o,l),l}function Ap(n=nr){const t=ji.get(n);if(!t&&n===nr&&Cl())return Dl();if(!t)throw Ie.create("no-app",{appName:n});return t}function on(n,t,e){var i;let o=(i=gp[n])!==null&&i!==void 0?i:n;e&&(o+=`-${e}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${o}" with version "${t}":`];s&&l.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),he.warn(l.join(" "));return}qi(new $n(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const Ep="firebase-heartbeat-database",Ip=1,Qn="firebase-heartbeat-store";let $o=null;function Vl(){return $o||($o=Fu(Ep,Ip,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Qn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ie.create("idb-open",{originalErrorMessage:n.message})})),$o}async function _p(n){try{const e=(await Vl()).transaction(Qn),i=await e.objectStore(Qn).get(Bl(n));return await e.done,i}catch(t){if(t instanceof fn)he.warn(t.message);else{const e=Ie.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});he.warn(e.message)}}}async function Ta(n,t){try{const i=(await Vl()).transaction(Qn,"readwrite");await i.objectStore(Qn).put(t,Bl(n)),await i.done}catch(e){if(e instanceof fn)he.warn(e.message);else{const i=Ie.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});he.warn(i.message)}}}function Bl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Tp=1024,Cp=30*24*60*60*1e3;class Rp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pp(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ca();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Cp}),this._storage.overwrite(this._heartbeatsCache))}catch(i){he.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ca(),{heartbeatsToSend:i,unsentEntries:o}=Sp(this._heartbeatsCache.heartbeats),s=Oi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return he.warn(e),""}}}function Ca(){return new Date().toISOString().substring(0,10)}function Sp(n,t=Tp){const e=[];let i=n.slice();for(const o of n){const s=e.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),Ra(e)>t){s.dates.pop();break}}else if(e.push({agent:o.agent,dates:[o.date]}),Ra(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Pp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yu()?vu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await _p(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ta(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ta(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Ra(n){return Oi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function kp(n){qi(new $n("platform-logger",t=>new ju(t),"PRIVATE")),qi(new $n("heartbeat",t=>new Rp(t),"PRIVATE")),on(er,Ia,n),on(er,Ia,"esm2017"),on("fire-js","")}kp("");var Dp="firebase",Vp="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(Dp,Vp,"app");var Sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oe,Nl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,y){function A(){}A.prototype=y.prototype,I.D=y.prototype,I.prototype=new A,I.prototype.constructor=I,I.C=function(g,b,w){for(var f=Array(arguments.length-2),R=2;R<arguments.length;R++)f[R-2]=arguments[R];return y.prototype[b].apply(g,f)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,y,A){A||(A=0);var g=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)g[b]=y.charCodeAt(A++)|y.charCodeAt(A++)<<8|y.charCodeAt(A++)<<16|y.charCodeAt(A++)<<24;else for(b=0;16>b;++b)g[b]=y[A++]|y[A++]<<8|y[A++]<<16|y[A++]<<24;y=I.g[0],A=I.g[1],b=I.g[2];var w=I.g[3],f=y+(w^A&(b^w))+g[0]+3614090360&4294967295;y=A+(f<<7&4294967295|f>>>25),f=w+(b^y&(A^b))+g[1]+3905402710&4294967295,w=y+(f<<12&4294967295|f>>>20),f=b+(A^w&(y^A))+g[2]+606105819&4294967295,b=w+(f<<17&4294967295|f>>>15),f=A+(y^b&(w^y))+g[3]+3250441966&4294967295,A=b+(f<<22&4294967295|f>>>10),f=y+(w^A&(b^w))+g[4]+4118548399&4294967295,y=A+(f<<7&4294967295|f>>>25),f=w+(b^y&(A^b))+g[5]+1200080426&4294967295,w=y+(f<<12&4294967295|f>>>20),f=b+(A^w&(y^A))+g[6]+2821735955&4294967295,b=w+(f<<17&4294967295|f>>>15),f=A+(y^b&(w^y))+g[7]+4249261313&4294967295,A=b+(f<<22&4294967295|f>>>10),f=y+(w^A&(b^w))+g[8]+1770035416&4294967295,y=A+(f<<7&4294967295|f>>>25),f=w+(b^y&(A^b))+g[9]+2336552879&4294967295,w=y+(f<<12&4294967295|f>>>20),f=b+(A^w&(y^A))+g[10]+4294925233&4294967295,b=w+(f<<17&4294967295|f>>>15),f=A+(y^b&(w^y))+g[11]+2304563134&4294967295,A=b+(f<<22&4294967295|f>>>10),f=y+(w^A&(b^w))+g[12]+1804603682&4294967295,y=A+(f<<7&4294967295|f>>>25),f=w+(b^y&(A^b))+g[13]+4254626195&4294967295,w=y+(f<<12&4294967295|f>>>20),f=b+(A^w&(y^A))+g[14]+2792965006&4294967295,b=w+(f<<17&4294967295|f>>>15),f=A+(y^b&(w^y))+g[15]+1236535329&4294967295,A=b+(f<<22&4294967295|f>>>10),f=y+(b^w&(A^b))+g[1]+4129170786&4294967295,y=A+(f<<5&4294967295|f>>>27),f=w+(A^b&(y^A))+g[6]+3225465664&4294967295,w=y+(f<<9&4294967295|f>>>23),f=b+(y^A&(w^y))+g[11]+643717713&4294967295,b=w+(f<<14&4294967295|f>>>18),f=A+(w^y&(b^w))+g[0]+3921069994&4294967295,A=b+(f<<20&4294967295|f>>>12),f=y+(b^w&(A^b))+g[5]+3593408605&4294967295,y=A+(f<<5&4294967295|f>>>27),f=w+(A^b&(y^A))+g[10]+38016083&4294967295,w=y+(f<<9&4294967295|f>>>23),f=b+(y^A&(w^y))+g[15]+3634488961&4294967295,b=w+(f<<14&4294967295|f>>>18),f=A+(w^y&(b^w))+g[4]+3889429448&4294967295,A=b+(f<<20&4294967295|f>>>12),f=y+(b^w&(A^b))+g[9]+568446438&4294967295,y=A+(f<<5&4294967295|f>>>27),f=w+(A^b&(y^A))+g[14]+3275163606&4294967295,w=y+(f<<9&4294967295|f>>>23),f=b+(y^A&(w^y))+g[3]+4107603335&4294967295,b=w+(f<<14&4294967295|f>>>18),f=A+(w^y&(b^w))+g[8]+1163531501&4294967295,A=b+(f<<20&4294967295|f>>>12),f=y+(b^w&(A^b))+g[13]+2850285829&4294967295,y=A+(f<<5&4294967295|f>>>27),f=w+(A^b&(y^A))+g[2]+4243563512&4294967295,w=y+(f<<9&4294967295|f>>>23),f=b+(y^A&(w^y))+g[7]+1735328473&4294967295,b=w+(f<<14&4294967295|f>>>18),f=A+(w^y&(b^w))+g[12]+2368359562&4294967295,A=b+(f<<20&4294967295|f>>>12),f=y+(A^b^w)+g[5]+4294588738&4294967295,y=A+(f<<4&4294967295|f>>>28),f=w+(y^A^b)+g[8]+2272392833&4294967295,w=y+(f<<11&4294967295|f>>>21),f=b+(w^y^A)+g[11]+1839030562&4294967295,b=w+(f<<16&4294967295|f>>>16),f=A+(b^w^y)+g[14]+4259657740&4294967295,A=b+(f<<23&4294967295|f>>>9),f=y+(A^b^w)+g[1]+2763975236&4294967295,y=A+(f<<4&4294967295|f>>>28),f=w+(y^A^b)+g[4]+1272893353&4294967295,w=y+(f<<11&4294967295|f>>>21),f=b+(w^y^A)+g[7]+4139469664&4294967295,b=w+(f<<16&4294967295|f>>>16),f=A+(b^w^y)+g[10]+3200236656&4294967295,A=b+(f<<23&4294967295|f>>>9),f=y+(A^b^w)+g[13]+681279174&4294967295,y=A+(f<<4&4294967295|f>>>28),f=w+(y^A^b)+g[0]+3936430074&4294967295,w=y+(f<<11&4294967295|f>>>21),f=b+(w^y^A)+g[3]+3572445317&4294967295,b=w+(f<<16&4294967295|f>>>16),f=A+(b^w^y)+g[6]+76029189&4294967295,A=b+(f<<23&4294967295|f>>>9),f=y+(A^b^w)+g[9]+3654602809&4294967295,y=A+(f<<4&4294967295|f>>>28),f=w+(y^A^b)+g[12]+3873151461&4294967295,w=y+(f<<11&4294967295|f>>>21),f=b+(w^y^A)+g[15]+530742520&4294967295,b=w+(f<<16&4294967295|f>>>16),f=A+(b^w^y)+g[2]+3299628645&4294967295,A=b+(f<<23&4294967295|f>>>9),f=y+(b^(A|~w))+g[0]+4096336452&4294967295,y=A+(f<<6&4294967295|f>>>26),f=w+(A^(y|~b))+g[7]+1126891415&4294967295,w=y+(f<<10&4294967295|f>>>22),f=b+(y^(w|~A))+g[14]+2878612391&4294967295,b=w+(f<<15&4294967295|f>>>17),f=A+(w^(b|~y))+g[5]+4237533241&4294967295,A=b+(f<<21&4294967295|f>>>11),f=y+(b^(A|~w))+g[12]+1700485571&4294967295,y=A+(f<<6&4294967295|f>>>26),f=w+(A^(y|~b))+g[3]+2399980690&4294967295,w=y+(f<<10&4294967295|f>>>22),f=b+(y^(w|~A))+g[10]+4293915773&4294967295,b=w+(f<<15&4294967295|f>>>17),f=A+(w^(b|~y))+g[1]+2240044497&4294967295,A=b+(f<<21&4294967295|f>>>11),f=y+(b^(A|~w))+g[8]+1873313359&4294967295,y=A+(f<<6&4294967295|f>>>26),f=w+(A^(y|~b))+g[15]+4264355552&4294967295,w=y+(f<<10&4294967295|f>>>22),f=b+(y^(w|~A))+g[6]+2734768916&4294967295,b=w+(f<<15&4294967295|f>>>17),f=A+(w^(b|~y))+g[13]+1309151649&4294967295,A=b+(f<<21&4294967295|f>>>11),f=y+(b^(A|~w))+g[4]+4149444226&4294967295,y=A+(f<<6&4294967295|f>>>26),f=w+(A^(y|~b))+g[11]+3174756917&4294967295,w=y+(f<<10&4294967295|f>>>22),f=b+(y^(w|~A))+g[2]+718787259&4294967295,b=w+(f<<15&4294967295|f>>>17),f=A+(w^(b|~y))+g[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(f<<21&4294967295|f>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+w&4294967295}i.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var A=y-this.blockSize,g=this.B,b=this.h,w=0;w<y;){if(b==0)for(;w<=A;)o(this,I,w),w+=this.blockSize;if(typeof I=="string"){for(;w<y;)if(g[b++]=I.charCodeAt(w++),b==this.blockSize){o(this,g),b=0;break}}else for(;w<y;)if(g[b++]=I[w++],b==this.blockSize){o(this,g),b=0;break}}this.h=b,this.o+=y},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var A=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=A&255,A/=256;for(this.u(I),I=Array(16),y=A=0;4>y;++y)for(var g=0;32>g;g+=8)I[A++]=this.g[y]>>>g&255;return I};function s(I,y){var A=l;return Object.prototype.hasOwnProperty.call(A,I)?A[I]:A[I]=y(I)}function a(I,y){this.h=y;for(var A=[],g=!0,b=I.length-1;0<=b;b--){var w=I[b]|0;g&&w==y||(A[b]=w,g=!1)}this.g=A}var l={};function d(I){return-128<=I&&128>I?s(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function p(I){if(isNaN(I)||!isFinite(I))return h;if(0>I)return T(p(-I));for(var y=[],A=1,g=0;I>=A;g++)y[g]=I/A|0,A*=4294967296;return new a(y,0)}function x(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return T(x(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=p(Math.pow(y,8)),g=h,b=0;b<I.length;b+=8){var w=Math.min(8,I.length-b),f=parseInt(I.substring(b,b+w),y);8>w?(w=p(Math.pow(y,w)),g=g.j(w).add(p(f))):(g=g.j(A),g=g.add(p(f)))}return g}var h=d(0),m=d(1),v=d(16777216);n=a.prototype,n.m=function(){if(C(this))return-T(this).m();for(var I=0,y=1,A=0;A<this.g.length;A++){var g=this.i(A);I+=(0<=g?g:4294967296+g)*y,y*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(_(this))return"0";if(C(this))return"-"+T(this).toString(I);for(var y=p(Math.pow(I,6)),A=this,g="";;){var b=M(A,y).g;A=D(A,b.j(y));var w=((0<A.g.length?A.g[0]:A.h)>>>0).toString(I);if(A=b,_(A))return w+g;for(;6>w.length;)w="0"+w;g=w+g}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function _(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function C(I){return I.h==-1}n.l=function(I){return I=D(this,I),C(I)?-1:_(I)?0:1};function T(I){for(var y=I.g.length,A=[],g=0;g<y;g++)A[g]=~I.g[g];return new a(A,~I.h).add(m)}n.abs=function(){return C(this)?T(this):this},n.add=function(I){for(var y=Math.max(this.g.length,I.g.length),A=[],g=0,b=0;b<=y;b++){var w=g+(this.i(b)&65535)+(I.i(b)&65535),f=(w>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);g=f>>>16,w&=65535,f&=65535,A[b]=f<<16|w}return new a(A,A[A.length-1]&-2147483648?-1:0)};function D(I,y){return I.add(T(y))}n.j=function(I){if(_(this)||_(I))return h;if(C(this))return C(I)?T(this).j(T(I)):T(T(this).j(I));if(C(I))return T(this.j(T(I)));if(0>this.l(v)&&0>I.l(v))return p(this.m()*I.m());for(var y=this.g.length+I.g.length,A=[],g=0;g<2*y;g++)A[g]=0;for(g=0;g<this.g.length;g++)for(var b=0;b<I.g.length;b++){var w=this.i(g)>>>16,f=this.i(g)&65535,R=I.i(b)>>>16,L=I.i(b)&65535;A[2*g+2*b]+=f*L,V(A,2*g+2*b),A[2*g+2*b+1]+=w*L,V(A,2*g+2*b+1),A[2*g+2*b+1]+=f*R,V(A,2*g+2*b+1),A[2*g+2*b+2]+=w*R,V(A,2*g+2*b+2)}for(g=0;g<y;g++)A[g]=A[2*g+1]<<16|A[2*g];for(g=y;g<2*y;g++)A[g]=0;return new a(A,0)};function V(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function P(I,y){this.g=I,this.h=y}function M(I,y){if(_(y))throw Error("division by zero");if(_(I))return new P(h,h);if(C(I))return y=M(T(I),y),new P(T(y.g),T(y.h));if(C(y))return y=M(I,T(y)),new P(T(y.g),y.h);if(30<I.g.length){if(C(I)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var A=m,g=y;0>=g.l(I);)A=N(A),g=N(g);var b=q(A,1),w=q(g,1);for(g=q(g,2),A=q(A,2);!_(g);){var f=w.add(g);0>=f.l(I)&&(b=b.add(A),w=f),g=q(g,1),A=q(A,1)}return y=D(I,b.j(y)),new P(b,y)}for(b=h;0<=I.l(y);){for(A=Math.max(1,Math.floor(I.m()/y.m())),g=Math.ceil(Math.log(A)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),w=p(A),f=w.j(y);C(f)||0<f.l(I);)A-=g,w=p(A),f=w.j(y);_(w)&&(w=m),b=b.add(w),I=D(I,f)}return new P(b,I)}n.A=function(I){return M(this,I).h},n.and=function(I){for(var y=Math.max(this.g.length,I.g.length),A=[],g=0;g<y;g++)A[g]=this.i(g)&I.i(g);return new a(A,this.h&I.h)},n.or=function(I){for(var y=Math.max(this.g.length,I.g.length),A=[],g=0;g<y;g++)A[g]=this.i(g)|I.i(g);return new a(A,this.h|I.h)},n.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),A=[],g=0;g<y;g++)A[g]=this.i(g)^I.i(g);return new a(A,this.h^I.h)};function N(I){for(var y=I.g.length+1,A=[],g=0;g<y;g++)A[g]=I.i(g)<<1|I.i(g-1)>>>31;return new a(A,I.h)}function q(I,y){var A=y>>5;y%=32;for(var g=I.g.length-A,b=[],w=0;w<g;w++)b[w]=0<y?I.i(w+A)>>>y|I.i(w+A+1)<<32-y:I.i(w+A);return new a(b,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Nl=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=p,a.fromString=x,Oe=a}).apply(typeof Sa<"u"?Sa:typeof self<"u"?self:typeof window<"u"?window:{});var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ll,zn,zl,Bi,or,Fl,Ml,Ol;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,c,u){return r==Array.prototype||r==Object.prototype||(r[c]=u.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Si=="object"&&Si];for(var c=0;c<r.length;++c){var u=r[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=e(this);function o(r,c){if(c)t:{var u=i;r=r.split(".");for(var E=0;E<r.length-1;E++){var S=r[E];if(!(S in u))break t;u=u[S]}r=r[r.length-1],E=u[r],c=c(E),c!=E&&c!=null&&t(u,r,{configurable:!0,writable:!0,value:c})}}function s(r,c){r instanceof String&&(r+="");var u=0,E=!1,S={next:function(){if(!E&&u<r.length){var k=u++;return{value:c(k,r[k]),done:!1}}return E=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}o("Array.prototype.values",function(r){return r||function(){return s(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function d(r){var c=typeof r;return c=c!="object"?c:r?Array.isArray(r)?"array":c:"null",c=="array"||c=="object"&&typeof r.length=="number"}function p(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function x(r,c,u){return r.call.apply(r.bind,arguments)}function h(r,c,u){if(!r)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,E),r.apply(c,S)}}return function(){return r.apply(c,arguments)}}function m(r,c,u){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?x:h,m.apply(null,arguments)}function v(r,c){var u=Array.prototype.slice.call(arguments,1);return function(){var E=u.slice();return E.push.apply(E,arguments),r.apply(this,E)}}function _(r,c){function u(){}u.prototype=c.prototype,r.aa=c.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(E,S,k){for(var O=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)O[ct-2]=arguments[ct];return c.prototype[S].apply(E,O)}}function C(r){const c=r.length;if(0<c){const u=Array(c);for(let E=0;E<c;E++)u[E]=r[E];return u}return[]}function T(r,c){for(let u=1;u<arguments.length;u++){const E=arguments[u];if(d(E)){const S=r.length||0,k=E.length||0;r.length=S+k;for(let O=0;O<k;O++)r[S+O]=E[O]}else r.push(E)}}class D{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(r){return/^[\s\xa0]*$/.test(r)}function P(){var r=l.navigator;return r&&(r=r.userAgent)?r:""}function M(r){return M[" "](r),r}M[" "]=function(){};var N=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function q(r,c,u){for(const E in r)c.call(u,r[E],E,r)}function I(r,c){for(const u in r)c.call(void 0,r[u],u,r)}function y(r){const c={};for(const u in r)c[u]=r[u];return c}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(r,c){let u,E;for(let S=1;S<arguments.length;S++){E=arguments[S];for(u in E)r[u]=E[u];for(let k=0;k<A.length;k++)u=A[k],Object.prototype.hasOwnProperty.call(E,u)&&(r[u]=E[u])}}function b(r){var c=1;r=r.split(":");const u=[];for(;0<c&&r.length;)u.push(r.shift()),c--;return r.length&&u.push(r.join(":")),u}function w(r){l.setTimeout(()=>{throw r},0)}function f(){var r=G;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class R{constructor(){this.h=this.g=null}add(c,u){const E=L.get();E.set(c,u),this.h?this.h.next=E:this.g=E,this.h=E}}var L=new D(()=>new F,r=>r.reset());class F{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let j,Q=!1,G=new R,K=()=>{const r=l.Promise.resolve(void 0);j=()=>{r.then(U)}};var U=()=>{for(var r;r=f();){try{r.h.call(r.g)}catch(u){w(u)}var c=L;c.j(r),100>c.h&&(c.h++,r.next=c.g,c.g=r)}Q=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function tt(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var _t=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return r}();function gt(r,c){if(tt.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,E=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget){if(N){t:{try{M(c.nodeName);var S=!0;break t}catch{}S=!1}S||(c=null)}}else u=="mouseover"?c=r.fromElement:u=="mouseout"&&(c=r.toElement);this.relatedTarget=c,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:ie[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&gt.aa.h.call(this)}}_(gt,tt);var ie={2:"touch",3:"pen",4:"mouse"};gt.prototype.h=function(){gt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var Gt="closure_listenable_"+(1e6*Math.random()|0),ge=0;function oe(r,c,u,E,S){this.listener=r,this.proxy=null,this.src=c,this.type=u,this.capture=!!E,this.ha=S,this.key=++ge,this.da=this.fa=!1}function Kt(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function ft(r){this.src=r,this.g={},this.h=0}ft.prototype.add=function(r,c,u,E,S){var k=r.toString();r=this.g[k],r||(r=this.g[k]=[],this.h++);var O=ce(r,c,E,S);return-1<O?(c=r[O],u||(c.fa=!1)):(c=new oe(c,this.src,k,!!E,S),c.fa=u,r.push(c)),c};function yt(r,c){var u=c.type;if(u in r.g){var E=r.g[u],S=Array.prototype.indexOf.call(E,c,void 0),k;(k=0<=S)&&Array.prototype.splice.call(E,S,1),k&&(Kt(c),r.g[u].length==0&&(delete r.g[u],r.h--))}}function ce(r,c,u,E){for(var S=0;S<r.length;++S){var k=r[S];if(!k.da&&k.listener==c&&k.capture==!!u&&k.ha==E)return S}return-1}var De="closure_lm_"+(1e6*Math.random()|0),Ve={};function xs(r,c,u,E,S){if(Array.isArray(c)){for(var k=0;k<c.length;k++)xs(r,c[k],u,E,S);return null}return u=Es(u),r&&r[Gt]?r.K(c,u,p(E)?!!E.capture:!1,S):Cd(r,c,u,!1,E,S)}function Cd(r,c,u,E,S,k){if(!c)throw Error("Invalid event type");var O=p(S)?!!S.capture:!!S,ct=Io(r);if(ct||(r[De]=ct=new ft(r)),u=ct.add(c,u,E,O,k),u.proxy)return u;if(E=Rd(),u.proxy=E,E.src=r,E.listener=u,r.addEventListener)_t||(S=O),S===void 0&&(S=!1),r.addEventListener(c.toString(),E,S);else if(r.attachEvent)r.attachEvent(As(c.toString()),E);else if(r.addListener&&r.removeListener)r.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Rd(){function r(u){return c.call(r.src,r.listener,u)}const c=Sd;return r}function ws(r,c,u,E,S){if(Array.isArray(c))for(var k=0;k<c.length;k++)ws(r,c[k],u,E,S);else E=p(E)?!!E.capture:!!E,u=Es(u),r&&r[Gt]?(r=r.i,c=String(c).toString(),c in r.g&&(k=r.g[c],u=ce(k,u,E,S),-1<u&&(Kt(k[u]),Array.prototype.splice.call(k,u,1),k.length==0&&(delete r.g[c],r.h--)))):r&&(r=Io(r))&&(c=r.g[c.toString()],r=-1,c&&(r=ce(c,u,E,S)),(u=-1<r?c[r]:null)&&Eo(u))}function Eo(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[Gt])yt(c.i,r);else{var u=r.type,E=r.proxy;c.removeEventListener?c.removeEventListener(u,E,r.capture):c.detachEvent?c.detachEvent(As(u),E):c.addListener&&c.removeListener&&c.removeListener(E),(u=Io(c))?(yt(u,r),u.h==0&&(u.src=null,c[De]=null)):Kt(r)}}}function As(r){return r in Ve?Ve[r]:Ve[r]="on"+r}function Sd(r,c){if(r.da)r=!0;else{c=new gt(c,this);var u=r.listener,E=r.ha||r.src;r.fa&&Eo(r),r=u.call(E,c)}return r}function Io(r){return r=r[De],r instanceof ft?r:null}var _o="__closure_events_fn_"+(1e9*Math.random()>>>0);function Es(r){return typeof r=="function"?r:(r[_o]||(r[_o]=function(c){return r.handleEvent(c)}),r[_o])}function Dt(){lt.call(this),this.i=new ft(this),this.M=this,this.F=null}_(Dt,lt),Dt.prototype[Gt]=!0,Dt.prototype.removeEventListener=function(r,c,u,E){ws(this,r,c,u,E)};function Ft(r,c){var u,E=r.F;if(E)for(u=[];E;E=E.F)u.push(E);if(r=r.M,E=c.type||c,typeof c=="string")c=new tt(c,r);else if(c instanceof tt)c.target=c.target||r;else{var S=c;c=new tt(E,r),g(c,S)}if(S=!0,u)for(var k=u.length-1;0<=k;k--){var O=c.g=u[k];S=hi(O,E,!0,c)&&S}if(O=c.g=r,S=hi(O,E,!0,c)&&S,S=hi(O,E,!1,c)&&S,u)for(k=0;k<u.length;k++)O=c.g=u[k],S=hi(O,E,!1,c)&&S}Dt.prototype.N=function(){if(Dt.aa.N.call(this),this.i){var r=this.i,c;for(c in r.g){for(var u=r.g[c],E=0;E<u.length;E++)Kt(u[E]);delete r.g[c],r.h--}}this.F=null},Dt.prototype.K=function(r,c,u,E){return this.i.add(String(r),c,!1,u,E)},Dt.prototype.L=function(r,c,u,E){return this.i.add(String(r),c,!0,u,E)};function hi(r,c,u,E){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,k=0;k<c.length;++k){var O=c[k];if(O&&!O.da&&O.capture==u){var ct=O.listener,Tt=O.ha||O.src;O.fa&&yt(r.i,O),S=ct.call(Tt,E)!==!1&&S}}return S&&!E.defaultPrevented}function Is(r,c,u){if(typeof r=="function")u&&(r=m(r,u));else if(r&&typeof r.handleEvent=="function")r=m(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(r,c||0)}function _s(r){r.g=Is(()=>{r.g=null,r.i&&(r.i=!1,_s(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class Pd extends lt{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:_s(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function En(r){lt.call(this),this.h=r,this.g={}}_(En,lt);var Ts=[];function Cs(r){q(r.g,function(c,u){this.g.hasOwnProperty(u)&&Eo(c)},r),r.g={}}En.prototype.N=function(){En.aa.N.call(this),Cs(this)},En.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var To=l.JSON.stringify,kd=l.JSON.parse,Dd=class{stringify(r){return l.JSON.stringify(r,void 0)}parse(r){return l.JSON.parse(r,void 0)}};function Co(){}Co.prototype.h=null;function Rs(r){return r.h||(r.h=r.i())}function Ss(){}var In={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ro(){tt.call(this,"d")}_(Ro,tt);function So(){tt.call(this,"c")}_(So,tt);var Be={},Ps=null;function fi(){return Ps=Ps||new Dt}Be.La="serverreachability";function ks(r){tt.call(this,Be.La,r)}_(ks,tt);function _n(r){const c=fi();Ft(c,new ks(c))}Be.STAT_EVENT="statevent";function Ds(r,c){tt.call(this,Be.STAT_EVENT,r),this.stat=c}_(Ds,tt);function Mt(r){const c=fi();Ft(c,new Ds(c,r))}Be.Ma="timingevent";function Vs(r,c){tt.call(this,Be.Ma,r),this.size=c}_(Vs,tt);function Tn(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){r()},c)}function Cn(){this.g=!0}Cn.prototype.xa=function(){this.g=!1};function Vd(r,c,u,E,S,k){r.info(function(){if(r.g)if(k)for(var O="",ct=k.split("&"),Tt=0;Tt<ct.length;Tt++){var rt=ct[Tt].split("=");if(1<rt.length){var Vt=rt[0];rt=rt[1];var Bt=Vt.split("_");O=2<=Bt.length&&Bt[1]=="type"?O+(Vt+"="+rt+"&"):O+(Vt+"=redacted&")}}else O=null;else O=k;return"XMLHTTP REQ ("+E+") [attempt "+S+"]: "+c+`
`+u+`
`+O})}function Bd(r,c,u,E,S,k,O){r.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+S+"]: "+c+`
`+u+`
`+k+" "+O})}function Ge(r,c,u,E){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ld(r,u)+(E?" "+E:"")})}function Nd(r,c){r.info(function(){return"TIMEOUT: "+c})}Cn.prototype.info=function(){};function Ld(r,c){if(!r.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var E=u[r];if(!(2>E.length)){var S=E[1];if(Array.isArray(S)&&!(1>S.length)){var k=S[0];if(k!="noop"&&k!="stop"&&k!="close")for(var O=1;O<S.length;O++)S[O]=""}}}}return To(u)}catch{return c}}var mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Po;function gi(){}_(gi,Co),gi.prototype.g=function(){return new XMLHttpRequest},gi.prototype.i=function(){return{}},Po=new gi;function ye(r,c,u,E){this.j=r,this.i=c,this.l=u,this.R=E||1,this.U=new En(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ns}function Ns(){this.i=null,this.g="",this.h=!1}var Ls={},ko={};function Do(r,c,u){r.L=1,r.v=xi(de(c)),r.m=u,r.P=!0,zs(r,null)}function zs(r,c){r.F=Date.now(),yi(r),r.A=de(r.v);var u=r.A,E=r.R;Array.isArray(E)||(E=[String(E)]),Js(u.i,"t",E),r.C=0,u=r.j.J,r.h=new Ns,r.g=ma(r.j,u?c:null,!r.m),0<r.O&&(r.M=new Pd(m(r.Y,r,r.g),r.O)),c=r.U,u=r.g,E=r.ca;var S="readystatechange";Array.isArray(S)||(S&&(Ts[0]=S.toString()),S=Ts);for(var k=0;k<S.length;k++){var O=xs(u,S[k],E||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=r.H?y(r.H):{},r.m?(r.u||(r.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,c)):(r.u="GET",r.g.ea(r.A,r.u,null,c)),_n(),Vd(r.i,r.u,r.A,r.l,r.R,r.m)}ye.prototype.ca=function(r){r=r.target;const c=this.M;c&&ue(r)==3?c.j():this.Y(r)},ye.prototype.Y=function(r){try{if(r==this.g)t:{const Bt=ue(this.g);var c=this.g.Ba();const Je=this.g.Z();if(!(3>Bt)&&(Bt!=3||this.g&&(this.h.h||this.g.oa()||oa(this.g)))){this.J||Bt!=4||c==7||(c==8||0>=Je?_n(3):_n(2)),Vo(this);var u=this.g.Z();this.X=u;e:if(Fs(this)){var E=oa(this.g);r="";var S=E.length,k=ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ne(this),Rn(this);var O="";break e}this.h.i=new l.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,r+=this.h.i.decode(E[c],{stream:!(k&&c==S-1)});E.length=0,this.h.g+=r,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=u==200,Bd(this.i,this.u,this.A,this.l,this.R,Bt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var ct,Tt=this.g;if((ct=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(ct)){var rt=ct;break e}}rt=null}if(u=rt)Ge(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bo(this,u);else{this.o=!1,this.s=3,Mt(12),Ne(this),Rn(this);break t}}if(this.P){u=!0;let Xt;for(;!this.J&&this.C<O.length;)if(Xt=zd(this,O),Xt==ko){Bt==4&&(this.s=4,Mt(14),u=!1),Ge(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Ls){this.s=4,Mt(15),Ge(this.i,this.l,O,"[Invalid Chunk]"),u=!1;break}else Ge(this.i,this.l,Xt,null),Bo(this,Xt);if(Fs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Bt!=4||O.length!=0||this.h.h||(this.s=1,Mt(16),u=!1),this.o=this.o&&u,!u)Ge(this.i,this.l,O,"[Invalid Chunked Response]"),Ne(this),Rn(this);else if(0<O.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Oo(Vt),Vt.M=!0,Mt(11))}}else Ge(this.i,this.l,O,null),Bo(this,O);Bt==4&&Ne(this),this.o&&!this.J&&(Bt==4?ua(this.j,this):(this.o=!1,yi(this)))}else tu(this.g),u==400&&0<O.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),Ne(this),Rn(this)}}}catch{}finally{}};function Fs(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function zd(r,c){var u=r.C,E=c.indexOf(`
`,u);return E==-1?ko:(u=Number(c.substring(u,E)),isNaN(u)?Ls:(E+=1,E+u>c.length?ko:(c=c.slice(E,E+u),r.C=E+u,c)))}ye.prototype.cancel=function(){this.J=!0,Ne(this)};function yi(r){r.S=Date.now()+r.I,Ms(r,r.I)}function Ms(r,c){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Tn(m(r.ba,r),c)}function Vo(r){r.B&&(l.clearTimeout(r.B),r.B=null)}ye.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Nd(this.i,this.A),this.L!=2&&(_n(),Mt(17)),Ne(this),this.s=2,Rn(this)):Ms(this,this.S-r)};function Rn(r){r.j.G==0||r.J||ua(r.j,r)}function Ne(r){Vo(r);var c=r.M;c&&typeof c.ma=="function"&&c.ma(),r.M=null,Cs(r.U),r.g&&(c=r.g,r.g=null,c.abort(),c.ma())}function Bo(r,c){try{var u=r.j;if(u.G!=0&&(u.g==r||No(u.h,r))){if(!r.K&&No(u.h,r)&&u.G==3){try{var E=u.Da.g.parse(c)}catch{E=null}if(Array.isArray(E)&&E.length==3){var S=E;if(S[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)Ti(u),Ii(u);else break t;Mo(u),Mt(18)}}else u.za=S[1],0<u.za-u.T&&37500>S[2]&&u.F&&u.v==0&&!u.C&&(u.C=Tn(m(u.Za,u),6e3));if(1>=qs(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else ze(u,11)}else if((r.K||u.g==r)&&Ti(u),!V(c))for(S=u.Da.g.parse(c),c=0;c<S.length;c++){let rt=S[c];if(u.T=rt[0],rt=rt[1],u.G==2)if(rt[0]=="c"){u.K=rt[1],u.ia=rt[2];const Vt=rt[3];Vt!=null&&(u.la=Vt,u.j.info("VER="+u.la));const Bt=rt[4];Bt!=null&&(u.Aa=Bt,u.j.info("SVER="+u.Aa));const Je=rt[5];Je!=null&&typeof Je=="number"&&0<Je&&(E=1.5*Je,u.L=E,u.j.info("backChannelRequestTimeoutMs_="+E)),E=u;const Xt=r.g;if(Xt){const Ri=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var k=E.h;k.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Lo(k,k.h),k.h=null))}if(E.D){const jo=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;jo&&(E.ya=jo,ut(E.I,E.D,jo))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),E=u;var O=r;if(E.qa=fa(E,E.J?E.ia:null,E.W),O.K){Hs(E.h,O);var ct=O,Tt=E.L;Tt&&(ct.I=Tt),ct.B&&(Vo(ct),yi(ct)),E.g=O}else ca(E);0<u.i.length&&_i(u)}else rt[0]!="stop"&&rt[0]!="close"||ze(u,7);else u.G==3&&(rt[0]=="stop"||rt[0]=="close"?rt[0]=="stop"?ze(u,7):Fo(u):rt[0]!="noop"&&u.l&&u.l.ta(rt),u.v=0)}}_n(4)}catch{}}var Fd=class{constructor(r,c){this.g=r,this.map=c}};function Os(r){this.l=r||10,l.PerformanceNavigationTiming?(r=l.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function js(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function qs(r){return r.h?1:r.g?r.g.size:0}function No(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function Lo(r,c){r.g?r.g.add(c):r.h=c}function Hs(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}Os.prototype.cancel=function(){if(this.i=Us(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Us(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const u of r.g.values())c=c.concat(u.D);return c}return C(r.i)}function Md(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(d(r)){for(var c=[],u=r.length,E=0;E<u;E++)c.push(r[E]);return c}c=[],u=0;for(E in r)c[u++]=r[E];return c}function Od(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(d(r)||typeof r=="string"){var c=[];r=r.length;for(var u=0;u<r;u++)c.push(u);return c}c=[],u=0;for(const E in r)c[u++]=E;return c}}}function $s(r,c){if(r.forEach&&typeof r.forEach=="function")r.forEach(c,void 0);else if(d(r)||typeof r=="string")Array.prototype.forEach.call(r,c,void 0);else for(var u=Od(r),E=Md(r),S=E.length,k=0;k<S;k++)c.call(void 0,E[k],u&&u[k],r)}var Qs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jd(r,c){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var E=r[u].indexOf("="),S=null;if(0<=E){var k=r[u].substring(0,E);S=r[u].substring(E+1)}else k=r[u];c(k,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Le(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Le){this.h=r.h,vi(this,r.j),this.o=r.o,this.g=r.g,bi(this,r.s),this.l=r.l;var c=r.i,u=new kn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),Ws(this,u),this.m=r.m}else r&&(c=String(r).match(Qs))?(this.h=!1,vi(this,c[1]||"",!0),this.o=Sn(c[2]||""),this.g=Sn(c[3]||"",!0),bi(this,c[4]),this.l=Sn(c[5]||"",!0),Ws(this,c[6]||"",!0),this.m=Sn(c[7]||"")):(this.h=!1,this.i=new kn(null,this.h))}Le.prototype.toString=function(){var r=[],c=this.j;c&&r.push(Pn(c,Gs,!0),":");var u=this.g;return(u||c=="file")&&(r.push("//"),(c=this.o)&&r.push(Pn(c,Gs,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Pn(u,u.charAt(0)=="/"?Ud:Hd,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Pn(u,Qd)),r.join("")};function de(r){return new Le(r)}function vi(r,c,u){r.j=u?Sn(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function bi(r,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);r.s=c}else r.s=null}function Ws(r,c,u){c instanceof kn?(r.i=c,Wd(r.i,r.h)):(u||(c=Pn(c,$d)),r.i=new kn(c,r.h))}function ut(r,c,u){r.i.set(c,u)}function xi(r){return ut(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Sn(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Pn(r,c,u){return typeof r=="string"?(r=encodeURI(r).replace(c,qd),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function qd(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Gs=/[#\/\?@]/g,Hd=/[#\?:]/g,Ud=/[#\?]/g,$d=/[#\?@]/g,Qd=/#/g;function kn(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function ve(r){r.g||(r.g=new Map,r.h=0,r.i&&jd(r.i,function(c,u){r.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=kn.prototype,n.add=function(r,c){ve(this),this.i=null,r=Ke(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(c),this.h+=1,this};function Ks(r,c){ve(r),c=Ke(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function Xs(r,c){return ve(r),c=Ke(r,c),r.g.has(c)}n.forEach=function(r,c){ve(this),this.g.forEach(function(u,E){u.forEach(function(S){r.call(c,S,E,this)},this)},this)},n.na=function(){ve(this);const r=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let E=0;E<c.length;E++){const S=r[E];for(let k=0;k<S.length;k++)u.push(c[E])}return u},n.V=function(r){ve(this);let c=[];if(typeof r=="string")Xs(this,r)&&(c=c.concat(this.g.get(Ke(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)c=c.concat(r[u])}return c},n.set=function(r,c){return ve(this),this.i=null,r=Ke(this,r),Xs(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},n.get=function(r,c){return r?(r=this.V(r),0<r.length?String(r[0]):c):c};function Js(r,c,u){Ks(r,c),0<u.length&&(r.i=null,r.g.set(Ke(r,c),C(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var E=c[u];const k=encodeURIComponent(String(E)),O=this.V(E);for(E=0;E<O.length;E++){var S=k;O[E]!==""&&(S+="="+encodeURIComponent(String(O[E]))),r.push(S)}}return this.i=r.join("&")};function Ke(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function Wd(r,c){c&&!r.j&&(ve(r),r.i=null,r.g.forEach(function(u,E){var S=E.toLowerCase();E!=S&&(Ks(this,E),Js(this,S,u))},r)),r.j=c}function Gd(r,c){const u=new Cn;if(l.Image){const E=new Image;E.onload=v(be,u,"TestLoadImage: loaded",!0,c,E),E.onerror=v(be,u,"TestLoadImage: error",!1,c,E),E.onabort=v(be,u,"TestLoadImage: abort",!1,c,E),E.ontimeout=v(be,u,"TestLoadImage: timeout",!1,c,E),l.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=r}else c(!1)}function Kd(r,c){const u=new Cn,E=new AbortController,S=setTimeout(()=>{E.abort(),be(u,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:E.signal}).then(k=>{clearTimeout(S),k.ok?be(u,"TestPingServer: ok",!0,c):be(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),be(u,"TestPingServer: error",!1,c)})}function be(r,c,u,E,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),E(u)}catch{}}function Xd(){this.g=new Dd}function Jd(r,c,u){const E=u||"";try{$s(r,function(S,k){let O=S;p(S)&&(O=To(S)),c.push(E+k+"="+encodeURIComponent(O))})}catch(S){throw c.push(E+"type="+encodeURIComponent("_badmap")),S}}function wi(r){this.l=r.Ub||null,this.j=r.eb||!1}_(wi,Co),wi.prototype.g=function(){return new Ai(this.l,this.j)},wi.prototype.i=function(r){return function(){return r}}({});function Ai(r,c){Dt.call(this),this.D=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Ai,Dt),n=Ai.prototype,n.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=c,this.readyState=1,Vn(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(c.body=r),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zs(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zs(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?Dn(this):Vn(this),this.readyState==3&&Zs(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Dn(this))},n.Qa=function(r){this.g&&(this.response=r,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Vn(r)}n.setRequestHeader=function(r,c){this.u.append(r,c)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=c.next();return r.join(`\r
`)};function Vn(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Ys(r){let c="";return q(r,function(u,E){c+=E,c+=":",c+=u,c+=`\r
`}),c}function zo(r,c,u){t:{for(E in u){var E=!1;break t}E=!0}E||(u=Ys(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):ut(r,c,u))}function ht(r){Dt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(ht,Dt);var Zd=/^https?$/i,Yd=["POST","PUT"];n=ht.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,c,u,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Po.g(),this.v=this.o?Rs(this.o):Rs(Po),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(k){ta(this,k);return}if(r=u||"",u=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var S in E)u.set(S,E[S]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const k of E.keys())u.set(k,E.get(k));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(u.keys()).find(k=>k.toLowerCase()=="content-type"),S=l.FormData&&r instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Yd,c,void 0))||E||S||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,O]of u)this.g.setRequestHeader(k,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ia(this),this.u=!0,this.g.send(r),this.u=!1}catch(k){ta(this,k)}};function ta(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.m=5,ea(r),Ei(r)}function ea(r){r.A||(r.A=!0,Ft(r,"complete"),Ft(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,Ft(this,"complete"),Ft(this,"abort"),Ei(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ei(this,!0)),ht.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?na(this):this.bb())},n.bb=function(){na(this)};function na(r){if(r.h&&typeof a<"u"&&(!r.v[1]||ue(r)!=4||r.Z()!=2)){if(r.u&&ue(r)==4)Is(r.Ea,0,r);else if(Ft(r,"readystatechange"),ue(r)==4){r.h=!1;try{const O=r.Z();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var E;if(E=O===0){var S=String(r.D).match(Qs)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),E=!Zd.test(S?S.toLowerCase():"")}u=E}if(u)Ft(r,"complete"),Ft(r,"success");else{r.m=6;try{var k=2<ue(r)?r.g.statusText:""}catch{k=""}r.l=k+" ["+r.Z()+"]",ea(r)}}finally{Ei(r)}}}}function Ei(r,c){if(r.g){ia(r);const u=r.g,E=r.v[0]?()=>{}:null;r.g=null,r.v=null,c||Ft(r,"ready");try{u.onreadystatechange=E}catch{}}}function ia(r){r.I&&(l.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function ue(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<ue(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),kd(c)}};function oa(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function tu(r){const c={};r=(r.g&&2<=ue(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<r.length;E++){if(V(r[E]))continue;var u=b(r[E]);const S=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const k=c[S]||[];c[S]=k,k.push(u)}I(c,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(r,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||c}function ra(r){this.Aa=0,this.i=[],this.j=new Cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,r),this.cb=Bn("retryDelaySeedMs",1e4,r),this.Wa=Bn("forwardChannelMaxRetries",2,r),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Os(r&&r.concurrentRequestLimit),this.Da=new Xd,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ra.prototype,n.la=8,n.G=1,n.connect=function(r,c,u,E){Mt(0),this.W=r,this.H=c||{},u&&E!==void 0&&(this.H.OSID=u,this.H.OAID=E),this.F=this.X,this.I=fa(this,null,this.W),_i(this)};function Fo(r){if(sa(r),r.G==3){var c=r.U++,u=de(r.I);if(ut(u,"SID",r.K),ut(u,"RID",c),ut(u,"TYPE","terminate"),Nn(r,u),c=new ye(r,r.j,c),c.L=2,c.v=xi(de(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=ma(c.j,null),c.g.ea(c.v)),c.F=Date.now(),yi(c)}ha(r)}function Ii(r){r.g&&(Oo(r),r.g.cancel(),r.g=null)}function sa(r){Ii(r),r.u&&(l.clearTimeout(r.u),r.u=null),Ti(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&l.clearTimeout(r.s),r.s=null)}function _i(r){if(!js(r.h)&&!r.s){r.s=!0;var c=r.Ga;j||K(),Q||(j(),Q=!0),G.add(c,r),r.B=0}}function eu(r,c){return qs(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=c.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Tn(m(r.Ga,r,c),pa(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const S=new ye(this,this.j,r);let k=this.o;if(this.S&&(k?(k=y(k),g(k,this.S)):k=this.S),this.m!==null||this.O||(S.H=k,k=null),this.P)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var E=this.i[u];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(c+=E,4096<c){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=la(this,S,c),u=de(this.I),ut(u,"RID",r),ut(u,"CVER",22),this.D&&ut(u,"X-HTTP-Session-Id",this.D),Nn(this,u),k&&(this.O?c="headers="+encodeURIComponent(String(Ys(k)))+"&"+c:this.m&&zo(u,this.m,k)),Lo(this.h,S),this.Ua&&ut(u,"TYPE","init"),this.P?(ut(u,"$req",c),ut(u,"SID","null"),S.T=!0,Do(S,u,null)):Do(S,u,c),this.G=2}}else this.G==3&&(r?aa(this,r):this.i.length==0||js(this.h)||aa(this))};function aa(r,c){var u;c?u=c.l:u=r.U++;const E=de(r.I);ut(E,"SID",r.K),ut(E,"RID",u),ut(E,"AID",r.T),Nn(r,E),r.m&&r.o&&zo(E,r.m,r.o),u=new ye(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),c&&(r.i=c.D.concat(r.i)),c=la(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Lo(r.h,u),Do(u,E,c)}function Nn(r,c){r.H&&q(r.H,function(u,E){ut(c,E,u)}),r.l&&$s({},function(u,E){ut(c,E,u)})}function la(r,c,u){u=Math.min(r.i.length,u);var E=r.l?m(r.l.Na,r.l,r):null;t:{var S=r.i;let k=-1;for(;;){const O=["count="+u];k==-1?0<u?(k=S[0].g,O.push("ofs="+k)):k=0:O.push("ofs="+k);let ct=!0;for(let Tt=0;Tt<u;Tt++){let rt=S[Tt].g;const Vt=S[Tt].map;if(rt-=k,0>rt)k=Math.max(0,S[Tt].g-100),ct=!1;else try{Jd(Vt,O,"req"+rt+"_")}catch{E&&E(Vt)}}if(ct){E=O.join("&");break t}}}return r=r.i.splice(0,u),c.D=r,E}function ca(r){if(!r.g&&!r.u){r.Y=1;var c=r.Fa;j||K(),Q||(j(),Q=!0),G.add(c,r),r.v=0}}function Mo(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Tn(m(r.Fa,r),pa(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,da(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Tn(m(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),Ii(this),da(this))};function Oo(r){r.A!=null&&(l.clearTimeout(r.A),r.A=null)}function da(r){r.g=new ye(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var c=de(r.qa);ut(c,"RID","rpc"),ut(c,"SID",r.K),ut(c,"AID",r.T),ut(c,"CI",r.F?"0":"1"),!r.F&&r.ja&&ut(c,"TO",r.ja),ut(c,"TYPE","xmlhttp"),Nn(r,c),r.m&&r.o&&zo(c,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=xi(de(c)),u.m=null,u.P=!0,zs(u,r)}n.Za=function(){this.C!=null&&(this.C=null,Ii(this),Mo(this),Mt(19))};function Ti(r){r.C!=null&&(l.clearTimeout(r.C),r.C=null)}function ua(r,c){var u=null;if(r.g==c){Ti(r),Oo(r),r.g=null;var E=2}else if(No(r.h,c))u=c.D,Hs(r.h,c),E=1;else return;if(r.G!=0){if(c.o)if(E==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var S=r.B;E=fi(),Ft(E,new Vs(E,u)),_i(r)}else ca(r);else if(S=c.s,S==3||S==0&&0<c.X||!(E==1&&eu(r,c)||E==2&&Mo(r)))switch(u&&0<u.length&&(c=r.h,c.i=c.i.concat(u)),S){case 1:ze(r,5);break;case 4:ze(r,10);break;case 3:ze(r,6);break;default:ze(r,2)}}}function pa(r,c){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*c}function ze(r,c){if(r.j.info("Error code "+c),c==2){var u=m(r.fb,r),E=r.Xa;const S=!E;E=new Le(E||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||vi(E,"https"),xi(E),S?Gd(E.toString(),u):Kd(E.toString(),u)}else Mt(2);r.G=0,r.l&&r.l.sa(c),ha(r),sa(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function ha(r){if(r.G=0,r.ka=[],r.l){const c=Us(r.h);(c.length!=0||r.i.length!=0)&&(T(r.ka,c),T(r.ka,r.i),r.h.i.length=0,C(r.i),r.i.length=0),r.l.ra()}}function fa(r,c,u){var E=u instanceof Le?de(u):new Le(u);if(E.g!="")c&&(E.g=c+"."+E.g),bi(E,E.s);else{var S=l.location;E=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var k=new Le(null);E&&vi(k,E),c&&(k.g=c),S&&bi(k,S),u&&(k.l=u),E=k}return u=r.D,c=r.ya,u&&c&&ut(E,u,c),ut(E,"VER",r.la),Nn(r,E),E}function ma(r,c,u){if(c&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Ca&&!r.pa?new ht(new wi({eb:u})):new ht(r.pa),c.Ha(r.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ga(){}n=ga.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ci(){}Ci.prototype.g=function(r,c){return new Ut(r,c)};function Ut(r,c){Dt.call(this),this.g=new ra(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(r?r["X-WebChannel-Client-Profile"]=c.va:r={"X-WebChannel-Client-Profile":c.va}),this.g.S=r,(r=c&&c.Sb)&&!V(r)&&(this.g.m=r),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!V(c)&&(this.g.D=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new Xe(this)}_(Ut,Dt),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Fo(this.g)},Ut.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=To(r),r=u);c.i.push(new Fd(c.Ya++,r)),c.G==3&&_i(c)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Fo(this.g),delete this.g,Ut.aa.N.call(this)};function ya(r){Ro.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){t:{for(const u in c){r=u;break t}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}_(ya,Ro);function va(){So.call(this),this.status=1}_(va,So);function Xe(r){this.g=r}_(Xe,ga),Xe.prototype.ua=function(){Ft(this.g,"a")},Xe.prototype.ta=function(r){Ft(this.g,new ya(r))},Xe.prototype.sa=function(r){Ft(this.g,new va)},Xe.prototype.ra=function(){Ft(this.g,"b")},Ci.prototype.createWebChannel=Ci.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,Ol=function(){return new Ci},Ml=function(){return fi()},Fl=Be,or={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,Bi=mi,Bs.COMPLETE="complete",zl=Bs,Ss.EventType=In,In.OPEN="a",In.CLOSE="b",In.ERROR="c",In.MESSAGE="d",Dt.prototype.listen=Dt.prototype.K,zn=Ss,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,Ll=ht}).apply(typeof Si<"u"?Si:typeof self<"u"?self:typeof window<"u"?window:{});const Pa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let mn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new Sl("@firebase/firestore");function Ln(){return je.logLevel}function $(n,...t){if(je.logLevel<=it.DEBUG){const e=t.map(_r);je.debug(`Firestore (${mn}): ${n}`,...e)}}function fe(n,...t){if(je.logLevel<=it.ERROR){const e=t.map(_r);je.error(`Firestore (${mn}): ${n}`,...e)}}function sn(n,...t){if(je.logLevel<=it.WARN){const e=t.map(_r);je.warn(`Firestore (${mn}): ${n}`,...e)}}function _r(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function X(n="Unexpected state"){const t=`FIRESTORE (${mn}) INTERNAL ASSERTION FAILED: `+n;throw fe(t),new Error(t)}function ot(n,t){n||X()}function Y(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends fn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Lt.UNAUTHENTICATED))}shutdown(){}}class Np{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Lp{constructor(t){this.t=t,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ot(this.o===void 0);let i=this.i;const o=d=>this.i!==i?(i=this.i,e(d)):Promise.resolve();let s=new se;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new se,t.enqueueRetryable(()=>o(this.currentUser))};const a=()=>{const d=s;t.enqueueRetryable(async()=>{await d.promise,await o(this.currentUser)})},l=d=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new se)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ot(typeof i.accessToken=="string"),new jl(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ot(t===null||typeof t=="string"),new Lt(t)}}class zp{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fp{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new zp(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Op{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){ot(this.o===void 0);const i=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const o=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>o(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?o(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ot(typeof e.token=="string"),this.R=e.token,new Mp(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ql{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const o=jp(40);for(let s=0;s<o.length;++s)i.length<20&&o[s]<e&&(i+=t.charAt(o[s]%t.length))}return i}}function st(n,t){return n<t?-1:n>t?1:0}function an(n,t,e){return n.length===t.length&&n.every((i,o)=>e(i,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new H(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new H(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new H(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new H(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return wt.fromMillis(Date.now())}static fromDate(t){return wt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new wt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?st(this.nanoseconds,t.nanoseconds):st(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wn{constructor(t,e,i){e===void 0?e=0:e>t.length&&X(),i===void 0?i=t.length-e:i>t.length-e&&X(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Wn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Wn?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let o=0;o<i;o++){const s=t.get(o),a=e.get(o);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class dt extends Wn{construct(t,e,i){return new dt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new H(B.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(o=>o.length>0))}return new dt(e)}static emptyPath(){return new dt([])}}const qp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Wn{construct(t,e,i){return new Rt(t,e,i)}static isValidIdentifier(t){return qp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(t){const e=[];let i="",o=0;const s=()=>{if(i.length===0)throw new H(B.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let a=!1;for(;o<t.length;){const l=t[o];if(l==="\\"){if(o+1===t.length)throw new H(B.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[o+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new H(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=d,o+=2}else l==="`"?(a=!a,o++):l!=="."||a?(i+=l,o++):(s(),o++)}if(s(),a)throw new H(B.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Rt(e)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(dt.fromString(t))}static fromName(t){return new W(dt.fromString(t).popFirst(5))}static empty(){return new W(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&dt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return dt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new dt(t.slice()))}}function Hp(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Z.fromTimestamp(i===1e9?new wt(e+1,0):new wt(e,i));return new Te(o,W.empty(),t)}function Up(n){return new Te(n.readTime,n.key,-1)}class Te{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Te(Z.min(),W.empty(),-1)}static max(){return new Te(Z.max(),W.empty(),-1)}}function $p(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=W.comparator(n.documentKey,t.documentKey),e!==0?e:st(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function ii(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==Qp)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new z((i,o)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,o)},this.catchCallback=s=>{this.wrapFailure(e,s).next(i,o)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof z?e:z.resolve(e)}catch(e){return z.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):z.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):z.reject(e)}static resolve(t){return new z((e,i)=>{e(t)})}static reject(t){return new z((e,i)=>{i(t)})}static waitFor(t){return new z((e,i)=>{let o=0,s=0,a=!1;t.forEach(l=>{++o,l.next(()=>{++s,a&&s===o&&e()},d=>i(d))}),a=!0,s===o&&e()})}static or(t){let e=z.resolve(!1);for(const i of t)e=e.next(o=>o?z.resolve(o):i());return e}static forEach(t,e){const i=[];return t.forEach((o,s)=>{i.push(e.call(this,o,s))}),this.waitFor(i)}static mapArray(t,e){return new z((i,o)=>{const s=t.length,a=new Array(s);let l=0;for(let d=0;d<s;d++){const p=d;e(t[p]).next(x=>{a[p]=x,++l,l===s&&i(a)},x=>o(x))}})}static doWhile(t,e){return new z((i,o)=>{const s=()=>{t()===!0?e().next(()=>{s()},o):i()};s()})}}function Gp(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function oi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Tr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Tr.oe=-1;function ri(n){return n==null}function Hi(n){return n===0&&1/n==-1/0}function Kp(n){return typeof n=="number"&&Number.isInteger(n)&&!Hi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function $e(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Hl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class St{constructor(t){this.comparator=t,this.data=new pt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,t[1])>=0)return;e(o.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Da(this.data.getIterator())}getIteratorFrom(t){return new Da(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof St)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const o=e.getNext().key,s=i.getNext().key;if(this.comparator(o,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new St(this.comparator);return e.data=t,e}}class Da{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.fields=t,t.sort(Rt.comparator)}static empty(){return new $t([])}unionWith(t){let e=new St(Rt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new $t(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return an(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class Ul extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(o){try{return atob(o)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ul("Invalid base64 string: "+s):s}}(t);return new kt(e)}static fromUint8Array(t){const e=function(o){let s="";for(let a=0;a<o.length;++a)s+=String.fromCharCode(o[a]);return s}(t);return new kt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let o=0;o<e.length;o++)i[o]=e.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return st(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const Xp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ce(n){if(ot(!!n),typeof n=="string"){let t=0;const e=Xp.exec(n);if(ot(!!e),e[1]){let o=e[1];o=(o+"000000000").substr(0,9),t=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qe(n){return typeof n=="string"?kt.fromBase64String(n):kt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Rr(n){const t=n.mapValue.fields.__previous_value__;return Cr(t)?Rr(t):t}function Gn(n){const t=Ce(n.mapValue.fields.__local_write_time__.timestampValue);return new wt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,e,i,o,s,a,l,d,p){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=o,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=p}}class Kn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Kn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki={mapValue:{}};function He(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cr(n)?4:Yp(n)?9007199254740991:Zp(n)?10:11:X()}function le(n,t){if(n===t)return!0;const e=He(n);if(e!==He(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Gn(n).isEqual(Gn(t));case 3:return function(o,s){if(typeof o.timestampValue=="string"&&typeof s.timestampValue=="string"&&o.timestampValue.length===s.timestampValue.length)return o.timestampValue===s.timestampValue;const a=Ce(o.timestampValue),l=Ce(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(o,s){return qe(o.bytesValue).isEqual(qe(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(o,s){return mt(o.geoPointValue.latitude)===mt(s.geoPointValue.latitude)&&mt(o.geoPointValue.longitude)===mt(s.geoPointValue.longitude)}(n,t);case 2:return function(o,s){if("integerValue"in o&&"integerValue"in s)return mt(o.integerValue)===mt(s.integerValue);if("doubleValue"in o&&"doubleValue"in s){const a=mt(o.doubleValue),l=mt(s.doubleValue);return a===l?Hi(a)===Hi(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return an(n.arrayValue.values||[],t.arrayValue.values||[],le);case 10:case 11:return function(o,s){const a=o.mapValue.fields||{},l=s.mapValue.fields||{};if(ka(a)!==ka(l))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(l[d]===void 0||!le(a[d],l[d])))return!1;return!0}(n,t);default:return X()}}function Xn(n,t){return(n.values||[]).find(e=>le(e,t))!==void 0}function ln(n,t){if(n===t)return 0;const e=He(n),i=He(t);if(e!==i)return st(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return st(n.booleanValue,t.booleanValue);case 2:return function(s,a){const l=mt(s.integerValue||s.doubleValue),d=mt(a.integerValue||a.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(n,t);case 3:return Va(n.timestampValue,t.timestampValue);case 4:return Va(Gn(n),Gn(t));case 5:return st(n.stringValue,t.stringValue);case 6:return function(s,a){const l=qe(s),d=qe(a);return l.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),d=a.split("/");for(let p=0;p<l.length&&p<d.length;p++){const x=st(l[p],d[p]);if(x!==0)return x}return st(l.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,a){const l=st(mt(s.latitude),mt(a.latitude));return l!==0?l:st(mt(s.longitude),mt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ba(n.arrayValue,t.arrayValue);case 10:return function(s,a){var l,d,p,x;const h=s.fields||{},m=a.fields||{},v=(l=h.value)===null||l===void 0?void 0:l.arrayValue,_=(d=m.value)===null||d===void 0?void 0:d.arrayValue,C=st(((p=v==null?void 0:v.values)===null||p===void 0?void 0:p.length)||0,((x=_==null?void 0:_.values)===null||x===void 0?void 0:x.length)||0);return C!==0?C:Ba(v,_)}(n.mapValue,t.mapValue);case 11:return function(s,a){if(s===ki.mapValue&&a===ki.mapValue)return 0;if(s===ki.mapValue)return 1;if(a===ki.mapValue)return-1;const l=s.fields||{},d=Object.keys(l),p=a.fields||{},x=Object.keys(p);d.sort(),x.sort();for(let h=0;h<d.length&&h<x.length;++h){const m=st(d[h],x[h]);if(m!==0)return m;const v=ln(l[d[h]],p[x[h]]);if(v!==0)return v}return st(d.length,x.length)}(n.mapValue,t.mapValue);default:throw X()}}function Va(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return st(n,t);const e=Ce(n),i=Ce(t),o=st(e.seconds,i.seconds);return o!==0?o:st(e.nanos,i.nanos)}function Ba(n,t){const e=n.values||[],i=t.values||[];for(let o=0;o<e.length&&o<i.length;++o){const s=ln(e[o],i[o]);if(s)return s}return st(e.length,i.length)}function cn(n){return rr(n)}function rr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=Ce(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return qe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return W.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",o=!0;for(const s of e.values||[])o?o=!1:i+=",",i+=rr(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let o="{",s=!0;for(const a of i)s?s=!1:o+=",",o+=`${a}:${rr(e.fields[a])}`;return o+"}"}(n.mapValue):X()}function Na(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function sr(n){return!!n&&"integerValue"in n}function Sr(n){return!!n&&"arrayValue"in n}function La(n){return!!n&&"nullValue"in n}function za(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ni(n){return!!n&&"mapValue"in n}function Zp(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function On(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return $e(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=On(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=On(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Yp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Ni(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=On(e)}setAll(t){let e=Rt.emptyPath(),i={},o=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,i,o),i={},o=[],e=l.popLast()}a?i[l.lastSegment()]=On(a):o.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,i,o)}delete(t){const e=this.field(t.popLast());Ni(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return le(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let o=e.mapValue.fields[t.get(i)];Ni(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=o),e=o}return e.mapValue.fields}applyChanges(t,e,i){$e(e,(o,s)=>t[o]=s);for(const o of i)delete t[o]}clone(){return new Ot(On(this.value))}}function $l(n){const t=[];return $e(n.fields,(e,i)=>{const o=new Rt([e]);if(Ni(i)){const s=$l(i.mapValue).fields;if(s.length===0)t.push(o);else for(const a of s)t.push(o.child(a))}else t.push(o)}),new $t(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,i,o,s,a,l){this.key=t,this.documentType=e,this.version=i,this.readTime=o,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new It(t,0,Z.min(),Z.min(),Z.min(),Ot.empty(),0)}static newFoundDocument(t,e,i,o){return new It(t,1,e,Z.min(),i,o,0)}static newNoDocument(t,e){return new It(t,2,e,Z.min(),Z.min(),Ot.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,Z.min(),Z.min(),Ot.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ui{constructor(t,e){this.position=t,this.inclusive=e}}function Fa(n,t,e){let i=0;for(let o=0;o<n.position.length;o++){const s=t[o],a=n.position[o];if(s.field.isKeyField()?i=W.comparator(W.fromName(a.referenceValue),e.key):i=ln(a,e.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ma(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!le(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Jn{constructor(t,e="asc"){this.field=t,this.dir=e}}function th(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ql{}class bt extends Ql{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new nh(t,e,i):e==="array-contains"?new rh(t,i):e==="in"?new sh(t,i):e==="not-in"?new ah(t,i):e==="array-contains-any"?new lh(t,i):new bt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new ih(t,i):new oh(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ln(e,this.value)):e!==null&&He(this.value)===He(e)&&this.matchesComparison(ln(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends Ql{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Jt(t,e)}matches(t){return Wl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Wl(n){return n.op==="and"}function Gl(n){return eh(n)&&Wl(n)}function eh(n){for(const t of n.filters)if(t instanceof Jt)return!1;return!0}function ar(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+cn(n.value);if(Gl(n))return n.filters.map(t=>ar(t)).join(",");{const t=n.filters.map(e=>ar(e)).join(",");return`${n.op}(${t})`}}function Kl(n,t){return n instanceof bt?function(i,o){return o instanceof bt&&i.op===o.op&&i.field.isEqual(o.field)&&le(i.value,o.value)}(n,t):n instanceof Jt?function(i,o){return o instanceof Jt&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((s,a,l)=>s&&Kl(a,o.filters[l]),!0):!1}(n,t):void X()}function Xl(n){return n instanceof bt?function(e){return`${e.field.canonicalString()} ${e.op} ${cn(e.value)}`}(n):n instanceof Jt?function(e){return e.op.toString()+" {"+e.getFilters().map(Xl).join(" ,")+"}"}(n):"Filter"}class nh extends bt{constructor(t,e,i){super(t,e,i),this.key=W.fromName(i.referenceValue)}matches(t){const e=W.comparator(t.key,this.key);return this.matchesComparison(e)}}class ih extends bt{constructor(t,e){super(t,"in",e),this.keys=Jl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class oh extends bt{constructor(t,e){super(t,"not-in",e),this.keys=Jl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Jl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>W.fromName(i.referenceValue))}class rh extends bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Sr(e)&&Xn(e.arrayValue,this.value)}}class sh extends bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Xn(this.value.arrayValue,e)}}class ah extends bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Xn(this.value.arrayValue,e)}}class lh extends bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Sr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Xn(this.value.arrayValue,i))}}/**
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
 */class ch{constructor(t,e=null,i=[],o=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=o,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Oa(n,t=null,e=[],i=[],o=null,s=null,a=null){return new ch(n,t,e,i,o,s,a)}function Pr(n){const t=Y(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>ar(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),ri(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>cn(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>cn(i)).join(",")),t.ue=e}return t.ue}function kr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!th(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Kl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ma(n.startAt,t.startAt)&&Ma(n.endAt,t.endAt)}function lr(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e=null,i=[],o=[],s=null,a="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=o,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function dh(n,t,e,i,o,s,a,l){return new gn(n,t,e,i,o,s,a,l)}function eo(n){return new gn(n)}function ja(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zl(n){return n.collectionGroup!==null}function jn(n){const t=Y(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new St(Rt.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(p=>{p.isInequality()&&(l=l.add(p.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Jn(s,i))}),e.has(Rt.keyField().canonicalString())||t.ce.push(new Jn(Rt.keyField(),i))}return t.ce}function ae(n){const t=Y(n);return t.le||(t.le=uh(t,jn(n))),t.le}function uh(n,t){if(n.limitType==="F")return Oa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(o=>{const s=o.dir==="desc"?"asc":"desc";return new Jn(o.field,s)});const e=n.endAt?new Ui(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ui(n.startAt.position,n.startAt.inclusive):null;return Oa(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function cr(n,t){const e=n.filters.concat([t]);return new gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function dr(n,t,e){return new gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function no(n,t){return kr(ae(n),ae(t))&&n.limitType===t.limitType}function Yl(n){return`${Pr(ae(n))}|lt:${n.limitType}`}function Ye(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(o=>Xl(o)).join(", ")}]`),ri(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(o=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(o)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(o=>cn(o)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(o=>cn(o)).join(",")),`Target(${i})`}(ae(n))}; limitType=${n.limitType})`}function io(n,t){return t.isFoundDocument()&&function(i,o){const s=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):W.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,t)&&function(i,o){for(const s of jn(i))if(!s.field.isKeyField()&&o.data.field(s.field)===null)return!1;return!0}(n,t)&&function(i,o){for(const s of i.filters)if(!s.matches(o))return!1;return!0}(n,t)&&function(i,o){return!(i.startAt&&!function(a,l,d){const p=Fa(a,l,d);return a.inclusive?p<=0:p<0}(i.startAt,jn(i),o)||i.endAt&&!function(a,l,d){const p=Fa(a,l,d);return a.inclusive?p>=0:p>0}(i.endAt,jn(i),o))}(n,t)}function ph(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tc(n){return(t,e)=>{let i=!1;for(const o of jn(n)){const s=hh(o,t,e);if(s!==0)return s;i=i||o.field.isKeyField()}return 0}}function hh(n,t,e){const i=n.field.isKeyField()?W.comparator(t.key,e.key):function(s,a,l){const d=a.data.field(s),p=l.data.field(s);return d!==null&&p!==null?ln(d,p):X()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[o,s]of i)if(this.equalsFn(o,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),o=this.inner[i];if(o===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let s=0;s<o.length;s++)if(this.equalsFn(o[s][0],t))return void(o[s]=[t,e]);o.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return i.length===1?delete this.inner[e]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(t){$e(this.inner,(e,i)=>{for(const[o,s]of i)t(o,s)})}isEmpty(){return Hl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new pt(W.comparator);function me(){return fh}const ec=new pt(W.comparator);function Fn(...n){let t=ec;for(const e of n)t=t.insert(e.key,e);return t}function nc(n){let t=ec;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Me(){return qn()}function ic(){return qn()}function qn(){return new yn(n=>n.toString(),(n,t)=>n.isEqual(t))}const mh=new pt(W.comparator),gh=new St(W.comparator);function et(...n){let t=gh;for(const e of n)t=t.add(e);return t}const yh=new St(st);function vh(){return yh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hi(t)?"-0":t}}function oc(n){return{integerValue:""+n}}function bh(n,t){return Kp(t)?oc(t):Dr(n,t)}/**
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
 */class oo{constructor(){this._=void 0}}function xh(n,t,e){return n instanceof Zn?function(o,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return s&&Cr(s)&&(s=Rr(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):n instanceof Yn?sc(n,t):n instanceof ti?ac(n,t):function(o,s){const a=rc(o,s),l=qa(a)+qa(o.Pe);return sr(a)&&sr(o.Pe)?oc(l):Dr(o.serializer,l)}(n,t)}function wh(n,t,e){return n instanceof Yn?sc(n,t):n instanceof ti?ac(n,t):e}function rc(n,t){return n instanceof $i?function(i){return sr(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class Zn extends oo{}class Yn extends oo{constructor(t){super(),this.elements=t}}function sc(n,t){const e=lc(t);for(const i of n.elements)e.some(o=>le(o,i))||e.push(i);return{arrayValue:{values:e}}}class ti extends oo{constructor(t){super(),this.elements=t}}function ac(n,t){let e=lc(t);for(const i of n.elements)e=e.filter(o=>!le(o,i));return{arrayValue:{values:e}}}class $i extends oo{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function qa(n){return mt(n.integerValue||n.doubleValue)}function lc(n){return Sr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e){this.field=t,this.transform=e}}function Eh(n,t){return n.field.isEqual(t.field)&&function(i,o){return i instanceof Yn&&o instanceof Yn||i instanceof ti&&o instanceof ti?an(i.elements,o.elements,le):i instanceof $i&&o instanceof $i?le(i.Pe,o.Pe):i instanceof Zn&&o instanceof Zn}(n.transform,t.transform)}class Ih{constructor(t,e){this.version=t,this.transformResults=e}}class xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xt}static exists(t){return new xt(void 0,t)}static updateTime(t){return new xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Li(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ro{}function cc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ai(n.key,xt.none()):new si(n.key,n.data,xt.none());{const e=n.data,i=Ot.empty();let o=new St(Rt.comparator);for(let s of t.fields)if(!o.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?i.delete(s):i.set(s,a),o=o.add(s)}return new Se(n.key,i,new $t(o.toArray()),xt.none())}}function _h(n,t,e){n instanceof si?function(o,s,a){const l=o.value.clone(),d=Ua(o.fieldTransforms,s,a.transformResults);l.setAll(d),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Se?function(o,s,a){if(!Li(o.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Ua(o.fieldTransforms,s,a.transformResults),d=s.data;d.setAll(dc(o)),d.setAll(l),s.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,t,e):function(o,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Hn(n,t,e,i){return n instanceof si?function(s,a,l,d){if(!Li(s.precondition,a))return l;const p=s.value.clone(),x=$a(s.fieldTransforms,d,a);return p.setAll(x),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),null}(n,t,e,i):n instanceof Se?function(s,a,l,d){if(!Li(s.precondition,a))return l;const p=$a(s.fieldTransforms,d,a),x=a.data;return x.setAll(dc(s)),x.setAll(p),a.convertToFoundDocument(a.version,x).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,i):function(s,a,l){return Li(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Th(n,t){let e=null;for(const i of n.fieldTransforms){const o=t.data.field(i.field),s=rc(i.transform,o||null);s!=null&&(e===null&&(e=Ot.empty()),e.set(i.field,s))}return e||null}function Ha(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&an(i,o,(s,a)=>Eh(s,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class si extends ro{constructor(t,e,i,o=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Se extends ro{constructor(t,e,i,o,s=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=o,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Ua(n,t,e){const i=new Map;ot(n.length===e.length);for(let o=0;o<e.length;o++){const s=n[o],a=s.transform,l=t.data.field(s.field);i.set(s.field,wh(a,l,e[o]))}return i}function $a(n,t,e){const i=new Map;for(const o of n){const s=o.transform,a=e.data.field(o.field);i.set(o.field,xh(s,a,t))}return i}class ai extends ro{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uc extends ro{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e,i,o){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let o=0;o<this.mutations.length;o++){const s=this.mutations[o];s.key.isEqual(t.key)&&_h(s,t,i[o])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Hn(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Hn(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=ic();return this.mutations.forEach(o=>{const s=t.get(o.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=e.has(o.key)?null:l;const d=cc(a,l);d!==null&&i.set(o.key,d),a.isValidDocument()||a.convertToNoDocument(Z.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),et())}isEqual(t){return this.batchId===t.batchId&&an(this.mutations,t.mutations,(e,i)=>Ha(e,i))&&an(this.baseMutations,t.baseMutations,(e,i)=>Ha(e,i))}}class Vr{constructor(t,e,i,o){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=o}static from(t,e,i){ot(t.mutations.length===i.length);let o=function(){return mh}();const s=t.mutations;for(let a=0;a<s.length;a++)o=o.insert(s[a].key,i[a].version);return new Vr(t,e,i,o)}}/**
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
 */var vt,nt;function pc(n){switch(n){default:return X();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function hc(n){if(n===void 0)return fe("GRPC error has no .code"),B.UNKNOWN;switch(n){case vt.OK:return B.OK;case vt.CANCELLED:return B.CANCELLED;case vt.UNKNOWN:return B.UNKNOWN;case vt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case vt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case vt.INTERNAL:return B.INTERNAL;case vt.UNAVAILABLE:return B.UNAVAILABLE;case vt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case vt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case vt.NOT_FOUND:return B.NOT_FOUND;case vt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case vt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case vt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case vt.ABORTED:return B.ABORTED;case vt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case vt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case vt.DATA_LOSS:return B.DATA_LOSS;default:return X()}}(nt=vt||(vt={}))[nt.OK=0]="OK",nt[nt.CANCELLED=1]="CANCELLED",nt[nt.UNKNOWN=2]="UNKNOWN",nt[nt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nt[nt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nt[nt.NOT_FOUND=5]="NOT_FOUND",nt[nt.ALREADY_EXISTS=6]="ALREADY_EXISTS",nt[nt.PERMISSION_DENIED=7]="PERMISSION_DENIED",nt[nt.UNAUTHENTICATED=16]="UNAUTHENTICATED",nt[nt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nt[nt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nt[nt.ABORTED=10]="ABORTED",nt[nt.OUT_OF_RANGE=11]="OUT_OF_RANGE",nt[nt.UNIMPLEMENTED=12]="UNIMPLEMENTED",nt[nt.INTERNAL=13]="INTERNAL",nt[nt.UNAVAILABLE=14]="UNAVAILABLE",nt[nt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ph(){return new TextEncoder}/**
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
 */const kh=new Oe([4294967295,4294967295],0);function Qa(n){const t=Ph().encode(n),e=new Nl;return e.update(t),new Uint8Array(e.digest())}function Wa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),o=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Oe([e,i],0),new Oe([o,s],0)]}class Br{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new Mn(`Invalid padding: ${e}`);if(i<0)throw new Mn(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Mn(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new Mn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Oe.fromNumber(this.Ie)}Ee(t,e,i){let o=t.add(e.multiply(Oe.fromNumber(i)));return o.compare(kh)===1&&(o=new Oe([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Qa(t),[i,o]=Wa(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,o,s);if(!this.de(a))return!1}return!0}static create(t,e,i){const o=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Br(s,o,e);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Qa(t),[i,o]=Wa(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,o,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class Mn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,e,i,o,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const o=new Map;return o.set(t,li.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new so(Z.min(),o,new pt(st),me(),et())}}class li{constructor(t,e,i,o,s){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new li(i,e,et(),et(),et())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,e,i,o){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=o}}class fc{constructor(t,e){this.targetId=t,this.me=e}}class mc{constructor(t,e,i=kt.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=o}}class Ga{constructor(){this.fe=0,this.ge=Xa(),this.pe=kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=et(),e=et(),i=et();return this.ge.forEach((o,s)=>{switch(s){case 0:t=t.add(o);break;case 2:e=e.add(o);break;case 1:i=i.add(o);break;default:X()}}),new li(this.pe,this.ye,t,e,i)}Ce(){this.we=!1,this.ge=Xa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ot(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Dh{constructor(t){this.Le=t,this.Be=new Map,this.ke=me(),this.qe=Ka(),this.Qe=new pt(st)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:X()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,o)=>{this.ze(o)&&e(o)})}He(t){const e=t.targetId,i=t.me.count,o=this.Je(e);if(o){const s=o.target;if(lr(s))if(i===0){const a=new W(s.path);this.Ue(e,a,It.newNoDocument(a,Z.min()))}else ot(i===1);else{const a=this.Ye(e);if(a!==i){const l=this.Ze(t),d=l?this.Xe(l,t,a):1;if(d!==0){this.je(e);const p=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,p)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:s=0}=e;let a,l;try{a=qe(i).toUint8Array()}catch(d){if(d instanceof Ul)return sn("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Br(a,o,s)}catch(d){return sn(d instanceof Mn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Ie===0?null:l}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let o=0;return i.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),o++)}),o}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&lr(l.target)){const d=new W(l.target.path);this.ke.get(d)!==null||this.it(a,d)||this.Ue(a,d,It.newNoDocument(d,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let i=et();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(d=>{const p=this.Je(d);return!p||p.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const o=new so(t,e,this.Qe,this.ke,i);return this.ke=me(),this.qe=Ka(),this.Qe=new pt(st),o}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const o=this.Ge(t);this.it(t,e)?o.Fe(e,1):o.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ga,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new St(st),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||$("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ga),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ka(){return new pt(W.comparator)}function Xa(){return new pt(W.comparator)}const Vh={asc:"ASCENDING",desc:"DESCENDING"},Bh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nh={and:"AND",or:"OR"};class Lh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ur(n,t){return n.useProto3Json||ri(t)?t:{value:t}}function Qi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function gc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function zh(n,t){return Qi(n,t.toTimestamp())}function Qt(n){return ot(!!n),Z.fromTimestamp(function(e){const i=Ce(e);return new wt(i.seconds,i.nanos)}(n))}function Nr(n,t){return pr(n,t).canonicalString()}function pr(n,t){const e=function(o){return new dt(["projects",o.projectId,"databases",o.database])}(n).child("documents");return t===void 0?e:e.child(t)}function yc(n){const t=dt.fromString(n);return ot(Ec(t)),t}function Wi(n,t){return Nr(n.databaseId,t.path)}function Un(n,t){const e=yc(t);if(e.get(1)!==n.databaseId.projectId)throw new H(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new H(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new W(bc(e))}function vc(n,t){return Nr(n.databaseId,t)}function Fh(n){const t=yc(n);return t.length===4?dt.emptyPath():bc(t)}function hr(n){return new dt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bc(n){return ot(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ja(n,t,e){return{name:Wi(n,t),fields:e.value.mapValue.fields}}function Mh(n,t){return"found"in t?function(i,o){ot(!!o.found),o.found.name,o.found.updateTime;const s=Un(i,o.found.name),a=Qt(o.found.updateTime),l=o.found.createTime?Qt(o.found.createTime):Z.min(),d=new Ot({mapValue:{fields:o.found.fields}});return It.newFoundDocument(s,a,l,d)}(n,t):"missing"in t?function(i,o){ot(!!o.missing),ot(!!o.readTime);const s=Un(i,o.missing),a=Qt(o.readTime);return It.newNoDocument(s,a)}(n,t):X()}function Oh(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:X()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],s=function(p,x){return p.useProto3Json?(ot(x===void 0||typeof x=="string"),kt.fromBase64String(x||"")):(ot(x===void 0||x instanceof Buffer||x instanceof Uint8Array),kt.fromUint8Array(x||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(p){const x=p.code===void 0?B.UNKNOWN:hc(p.code);return new H(x,p.message||"")}(a);e=new mc(i,o,s,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const o=Un(n,i.document.name),s=Qt(i.document.updateTime),a=i.document.createTime?Qt(i.document.createTime):Z.min(),l=new Ot({mapValue:{fields:i.document.fields}}),d=It.newFoundDocument(o,s,a,l),p=i.targetIds||[],x=i.removedTargetIds||[];e=new zi(p,x,d.key,d)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const o=Un(n,i.document),s=i.readTime?Qt(i.readTime):Z.min(),a=It.newNoDocument(o,s),l=i.removedTargetIds||[];e=new zi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const o=Un(n,i.document),s=i.removedTargetIds||[];e=new zi([],s,o,null)}else{if(!("filter"in t))return X();{t.filter;const i=t.filter;i.targetId;const{count:o=0,unchangedNames:s}=i,a=new Sh(o,s),l=i.targetId;e=new fc(l,a)}}return e}function xc(n,t){let e;if(t instanceof si)e={update:Ja(n,t.key,t.value)};else if(t instanceof ai)e={delete:Wi(n,t.key)};else if(t instanceof Se)e={update:Ja(n,t.key,t.data),updateMask:Kh(t.fieldMask)};else{if(!(t instanceof uc))return X();e={verify:Wi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const l=a.transform;if(l instanceof Zn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ti)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof $i)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw X()}(0,i))),t.precondition.isNone||(e.currentDocument=function(o,s){return s.updateTime!==void 0?{updateTime:zh(o,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(n,t.precondition)),e}function jh(n,t){return n&&n.length>0?(ot(t!==void 0),n.map(e=>function(o,s){let a=o.updateTime?Qt(o.updateTime):Qt(s);return a.isEqual(Z.min())&&(a=Qt(s)),new Ih(a,o.transformResults||[])}(e,t))):[]}function qh(n,t){return{documents:[vc(n,t.path)]}}function Hh(n,t){const e={structuredQuery:{}},i=t.path;let o;t.collectionGroup!==null?(o=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=vc(n,o);const s=function(p){if(p.length!==0)return Ac(Jt.create(p,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(p){if(p.length!==0)return p.map(x=>function(m){return{field:tn(m.field),direction:Qh(m.dir)}}(x))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=ur(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(t.endAt)),{_t:e,parent:o}}function Uh(n){let t=Fh(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let o=null;if(i>0){ot(i===1);const x=e.from[0];x.allDescendants?o=x.collectionId:t=t.child(x.collectionId)}let s=[];e.where&&(s=function(h){const m=wc(h);return m instanceof Jt&&Gl(m)?m.getFilters():[m]}(e.where));let a=[];e.orderBy&&(a=function(h){return h.map(m=>function(_){return new Jn(en(_.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(m))}(e.orderBy));let l=null;e.limit&&(l=function(h){let m;return m=typeof h=="object"?h.value:h,ri(m)?null:m}(e.limit));let d=null;e.startAt&&(d=function(h){const m=!!h.before,v=h.values||[];return new Ui(v,m)}(e.startAt));let p=null;return e.endAt&&(p=function(h){const m=!h.before,v=h.values||[];return new Ui(v,m)}(e.endAt)),dh(t,o,a,s,l,"F",d,p)}function $h(n,t){const e=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function wc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=en(e.unaryFilter.field);return bt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=en(e.unaryFilter.field);return bt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=en(e.unaryFilter.field);return bt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=en(e.unaryFilter.field);return bt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(n):n.fieldFilter!==void 0?function(e){return bt.create(en(e.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Jt.create(e.compositeFilter.filters.map(i=>wc(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return X()}}(e.compositeFilter.op))}(n):X()}function Qh(n){return Vh[n]}function Wh(n){return Bh[n]}function Gh(n){return Nh[n]}function tn(n){return{fieldPath:n.canonicalString()}}function en(n){return Rt.fromServerFormat(n.fieldPath)}function Ac(n){return n instanceof bt?function(e){if(e.op==="=="){if(za(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NAN"}};if(La(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(za(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NOT_NAN"}};if(La(e.value))return{unaryFilter:{field:tn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tn(e.field),op:Wh(e.op),value:e.value}}}(n):n instanceof Jt?function(e){const i=e.getFilters().map(o=>Ac(o));return i.length===1?i[0]:{compositeFilter:{op:Gh(e.op),filters:i}}}(n):X()}function Kh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ec(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e,i,o,s=Z.min(),a=Z.min(),l=kt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new we(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new we(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new we(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new we(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.ct=t}}function Jh(n){const t=Uh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?dr(t,t.limit,"L"):t}/**
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
 */class Zh{constructor(){this.un=new Yh}addToCollectionParentIndex(t,e){return this.un.add(e),z.resolve()}getCollectionParents(t,e){return z.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return z.resolve()}deleteFieldIndex(t,e){return z.resolve()}deleteAllFieldIndexes(t){return z.resolve()}createTargetIndexes(t,e){return z.resolve()}getDocumentsMatchingTarget(t,e){return z.resolve(null)}getIndexType(t,e){return z.resolve(0)}getFieldIndexes(t,e){return z.resolve([])}getNextCollectionGroupToUpdate(t){return z.resolve(null)}getMinOffset(t,e){return z.resolve(Te.min())}getMinOffsetFromCollectionGroup(t,e){return z.resolve(Te.min())}updateCollectionGroup(t,e,i){return z.resolve()}updateIndexEntries(t,e){return z.resolve()}}class Yh{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),o=this.index[e]||new St(dt.comparator),s=!o.has(i);return this.index[e]=o.add(i),s}has(t){const e=t.lastSegment(),i=t.popLast(),o=this.index[e];return o&&o.has(i)}getEntries(t){return(this.index[t]||new St(dt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new dn(0)}static kn(){return new dn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.changes=new yn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?z.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nf{constructor(t,e,i,o){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=o}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(o=>(i=o,this.remoteDocumentCache.getEntry(t,e))).next(o=>(i!==null&&Hn(i.mutation,o,$t.empty(),wt.now()),o))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,et()).next(()=>i))}getLocalViewOfDocuments(t,e,i=et()){const o=Me();return this.populateOverlays(t,o,e).next(()=>this.computeViews(t,e,o,i).next(s=>{let a=Fn();return s.forEach((l,d)=>{a=a.insert(l,d.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const i=Me();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,et()))}populateOverlays(t,e,i){const o=[];return i.forEach(s=>{e.has(s)||o.push(s)}),this.documentOverlayCache.getOverlays(t,o).next(s=>{s.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,i,o){let s=me();const a=qn(),l=function(){return qn()}();return e.forEach((d,p)=>{const x=i.get(p.key);o.has(p.key)&&(x===void 0||x.mutation instanceof Se)?s=s.insert(p.key,p):x!==void 0?(a.set(p.key,x.mutation.getFieldMask()),Hn(x.mutation,p,x.mutation.getFieldMask(),wt.now())):a.set(p.key,$t.empty())}),this.recalculateAndSaveOverlays(t,s).next(d=>(d.forEach((p,x)=>a.set(p,x)),e.forEach((p,x)=>{var h;return l.set(p,new ef(x,(h=a.get(p))!==null&&h!==void 0?h:null))}),l))}recalculateAndSaveOverlays(t,e){const i=qn();let o=new pt((a,l)=>a-l),s=et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(d=>{const p=e.get(d);if(p===null)return;let x=i.get(d)||$t.empty();x=l.applyToLocalView(p,x),i.set(d,x);const h=(o.get(l.batchId)||et()).add(d);o=o.insert(l.batchId,h)})}).next(()=>{const a=[],l=o.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),p=d.key,x=d.value,h=ic();x.forEach(m=>{if(!s.has(m)){const v=cc(e.get(m),i.get(m));v!==null&&h.set(m,v),s=s.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(t,p,h))}return z.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,o){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Zl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,o):this.getDocumentsMatchingCollectionQuery(t,e,i,o)}getNextDocuments(t,e,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,o).next(s=>{const a=o-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,o-s.size):z.resolve(Me());let l=-1,d=s;return a.next(p=>z.forEach(p,(x,h)=>(l<h.largestBatchId&&(l=h.largestBatchId),s.get(x)?z.resolve():this.remoteDocumentCache.getEntry(t,x).next(m=>{d=d.insert(x,m)}))).next(()=>this.populateOverlays(t,p,s)).next(()=>this.computeViews(t,d,p,et())).next(x=>({batchId:l,changes:nc(x)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new W(e)).next(i=>{let o=Fn();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(t,e,i,o){const s=e.collectionGroup;let a=Fn();return this.indexManager.getCollectionParents(t,s).next(l=>z.forEach(l,d=>{const p=function(h,m){return new gn(m,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,d.child(s));return this.getDocumentsMatchingCollectionQuery(t,p,i,o).next(x=>{x.forEach((h,m)=>{a=a.insert(h,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,i,o){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,s,o))).next(a=>{s.forEach((d,p)=>{const x=p.getKey();a.get(x)===null&&(a=a.insert(x,It.newInvalidDocument(x)))});let l=Fn();return a.forEach((d,p)=>{const x=s.get(d);x!==void 0&&Hn(x.mutation,p,$t.empty(),wt.now()),io(e,p)&&(l=l.insert(d,p))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return z.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(o){return{id:o.id,version:o.version,createTime:Qt(o.createTime)}}(e)),z.resolve()}getNamedQuery(t,e){return z.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(o){return{name:o.name,query:Jh(o.bundledQuery),readTime:Qt(o.readTime)}}(e)),z.resolve()}}/**
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
 */class rf{constructor(){this.overlays=new pt(W.comparator),this.Ir=new Map}getOverlay(t,e){return z.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Me();return z.forEach(e,o=>this.getOverlay(t,o).next(s=>{s!==null&&i.set(o,s)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((o,s)=>{this.ht(t,e,s)}),z.resolve()}removeOverlaysForBatchId(t,e,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(i)),z.resolve()}getOverlaysForCollection(t,e,i){const o=Me(),s=e.length+1,a=new W(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const d=l.getNext().value,p=d.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===s&&d.largestBatchId>i&&o.set(d.getKey(),d)}return z.resolve(o)}getOverlaysForCollectionGroup(t,e,i,o){let s=new pt((p,x)=>p-x);const a=this.overlays.getIterator();for(;a.hasNext();){const p=a.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>i){let x=s.get(p.largestBatchId);x===null&&(x=Me(),s=s.insert(p.largestBatchId,x)),x.set(p.getKey(),p)}}const l=Me(),d=s.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((p,x)=>l.set(p,x)),!(l.size()>=o)););return z.resolve(l)}ht(t,e,i){const o=this.overlays.get(i.key);if(o!==null){const a=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new Rh(e,i));let s=this.Ir.get(e);s===void 0&&(s=et(),this.Ir.set(e,s)),this.Ir.set(e,s.add(i.key))}}/**
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
 */class sf{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(t){return z.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.Tr=new St(Et.Er),this.dr=new St(Et.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new Et(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new Et(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new W(new dt([])),i=new Et(e,t),o=new Et(e,t+1),s=[];return this.dr.forEachInRange([i,o],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new W(new dt([])),i=new Et(e,t),o=new Et(e,t+1);let s=et();return this.dr.forEachInRange([i,o],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new Et(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Et{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return W.comparator(t.key,e.key)||st(t.wr,e.wr)}static Ar(t,e){return st(t.wr,e.wr)||W.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new St(Et.Er)}checkEmpty(t){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,o){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ch(s,e,i,o);this.mutationQueue.push(a);for(const l of o)this.br=this.br.add(new Et(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return z.resolve(a)}lookupMutationBatch(t,e){return z.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,o=this.vr(i),s=o<0?0:o;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Et(e,0),o=new Et(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([i,o],a=>{const l=this.Dr(a.wr);s.push(l)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new St(st);return e.forEach(o=>{const s=new Et(o,0),a=new Et(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{i=i.add(l.wr)})}),z.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,o=i.length+1;let s=i;W.isDocumentKey(s)||(s=s.child(""));const a=new Et(new W(s),0);let l=new St(st);return this.br.forEachWhile(d=>{const p=d.key.path;return!!i.isPrefixOf(p)&&(p.length===o&&(l=l.add(d.wr)),!0)},a),z.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(i=>{const o=this.Dr(i);o!==null&&e.push(o)}),e}removeMutationBatch(t,e){ot(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return z.forEach(e.mutations,o=>{const s=new Et(o.key,e.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new Et(e,0),o=this.br.firstAfterOrEqual(i);return z.resolve(e.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,z.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t){this.Mr=t,this.docs=function(){return new pt(W.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,o=this.docs.get(i),s=o?o.size:0,a=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return z.resolve(i?i.document.mutableCopy():It.newInvalidDocument(e))}getEntries(t,e){let i=me();return e.forEach(o=>{const s=this.docs.get(o);i=i.insert(o,s?s.document.mutableCopy():It.newInvalidDocument(o))}),z.resolve(i)}getDocumentsMatchingQuery(t,e,i,o){let s=me();const a=e.path,l=new W(a.child("")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:p,value:{document:x}}=d.getNext();if(!a.isPrefixOf(p.path))break;p.path.length>a.length+1||$p(Up(x),i)<=0||(o.has(x.key)||io(e,x))&&(s=s.insert(x.key,x.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(t,e,i,o){X()}Or(t,e){return z.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new cf(this)}getSize(t){return z.resolve(this.size)}}class cf extends tf{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?e.push(this.cr.addEntry(t,o)):this.cr.removeEntry(i)}),z.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t){this.persistence=t,this.Nr=new yn(e=>Pr(e),kr),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lr,this.targetCount=0,this.kr=dn.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,o)=>e(o)),z.resolve()}getLastRemoteSnapshotVersion(t){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return z.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),z.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new dn(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,z.resolve()}updateTargetData(t,e){return this.Kn(e),z.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,z.resolve()}removeTargets(t,e,i){let o=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&i.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),o++)}),z.waitFor(s).next(()=>o)}getTargetCount(t){return z.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return z.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),z.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const o=this.persistence.referenceDelegate,s=[];return o&&e.forEach(a=>{s.push(o.markPotentiallyOrphaned(t,a))}),z.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),z.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return z.resolve(i)}containsKey(t,e){return z.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Tr(0),this.Kr=!1,this.Kr=!0,this.$r=new sf,this.referenceDelegate=t(this),this.Ur=new df(this),this.indexManager=new Zh,this.remoteDocumentCache=function(o){return new lf(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new Xh(e),this.Gr=new of(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new rf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new af(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){$("MemoryPersistence","Starting transaction:",t);const o=new pf(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(s=>this.referenceDelegate.jr(o).next(()=>s)).toPromise().then(s=>(o.raiseOnCommittedEvent(),s))}Hr(t,e){return z.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class pf extends Wp{constructor(t){super(),this.currentSequenceNumber=t}}class zr{constructor(t){this.persistence=t,this.Jr=new Lr,this.Yr=null}static Zr(t){return new zr(t)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),z.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),z.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),z.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(o=>{o.forEach(s=>this.Xr.add(s.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Xr,i=>{const o=W.fromPath(i);return this.ei(t,o).next(s=>{s||e.removeEntry(o,Z.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return z.or([()=>z.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,i,o){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=o}static Wi(t,e){let i=et(),o=et();for(const s of e.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:o=o.add(s.doc.key)}return new Fr(t,e.fromCache,i,o)}}/**
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
 */class ff{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gu()?8:Gp(fu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,o){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,o,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new hf;return this.Xi(t,e,a).next(l=>{if(s.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>s.result)}es(t,e,i,o){return i.documentReadCount<this.ji?(Ln()<=it.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),z.resolve()):(Ln()<=it.DEBUG&&$("QueryEngine","Query:",Ye(e),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(Ln()<=it.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ae(e))):z.resolve())}Yi(t,e){if(ja(e))return z.resolve(null);let i=ae(e);return this.indexManager.getIndexType(t,i).next(o=>o===0?null:(e.limit!==null&&o===1&&(e=dr(e,null,"F"),i=ae(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=et(...s);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(d=>{const p=this.ts(e,l);return this.ns(e,p,a,d.readTime)?this.Yi(t,dr(e,null,"F")):this.rs(t,p,e,d)}))})))}Zi(t,e,i,o){return ja(e)||o.isEqual(Z.min())?z.resolve(null):this.Ji.getDocuments(t,i).next(s=>{const a=this.ts(e,s);return this.ns(e,a,i,o)?z.resolve(null):(Ln()<=it.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ye(e)),this.rs(t,a,e,Hp(o,-1)).next(l=>l))})}ts(t,e){let i=new St(tc(t));return e.forEach((o,s)=>{io(t,s)&&(i=i.add(s))}),i}ns(t,e,i,o){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(o)>0)}Xi(t,e,i){return Ln()<=it.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ye(e)),this.Ji.getDocumentsMatchingQuery(t,e,Te.min(),i)}rs(t,e,i,o){return this.Ji.getDocumentsMatchingQuery(t,i,o).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,e,i,o){this.persistence=t,this.ss=e,this.serializer=o,this.os=new pt(st),this._s=new yn(s=>Pr(s),kr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function gf(n,t,e,i){return new mf(n,t,e,i)}async function Ic(n,t){const e=Y(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let o;return e.mutationQueue.getAllMutationBatches(i).next(s=>(o=s,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],l=[];let d=et();for(const p of o){a.push(p.batchId);for(const x of p.mutations)d=d.add(x.key)}for(const p of s){l.push(p.batchId);for(const x of p.mutations)d=d.add(x.key)}return e.localDocuments.getDocuments(i,d).next(p=>({hs:p,removedBatchIds:a,addedBatchIds:l}))})})}function yf(n,t){const e=Y(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,d,p,x){const h=p.batch,m=h.keys();let v=z.resolve();return m.forEach(_=>{v=v.next(()=>x.getEntry(d,_)).next(C=>{const T=p.docVersions.get(_);ot(T!==null),C.version.compareTo(T)<0&&(h.applyToRemoteDocument(C,p),C.isValidDocument()&&(C.setReadTime(p.commitVersion),x.addEntry(C)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(d,h))}(e,i,t,s).next(()=>s.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,o,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let d=et();for(let p=0;p<l.mutationResults.length;++p)l.mutationResults[p].transformResults.length>0&&(d=d.add(l.batch.mutations[p].key));return d}(t))).next(()=>e.localDocuments.getDocuments(i,o))})}function _c(n){const t=Y(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function vf(n,t){const e=Y(n),i=t.snapshotVersion;let o=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});o=e.os;const l=[];t.targetChanges.forEach((x,h)=>{const m=o.get(h);if(!m)return;l.push(e.Ur.removeMatchingKeys(s,x.removedDocuments,h).next(()=>e.Ur.addMatchingKeys(s,x.addedDocuments,h)));let v=m.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?v=v.withResumeToken(kt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):x.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(x.resumeToken,i)),o=o.insert(h,v),function(C,T,D){return C.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(m,v,x)&&l.push(e.Ur.updateTargetData(s,v))});let d=me(),p=et();if(t.documentUpdates.forEach(x=>{t.resolvedLimboDocuments.has(x)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,x))}),l.push(bf(s,a,t.documentUpdates).next(x=>{d=x.Ps,p=x.Is})),!i.isEqual(Z.min())){const x=e.Ur.getLastRemoteSnapshotVersion(s).next(h=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,i));l.push(x)}return z.waitFor(l).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,d,p)).next(()=>d)}).then(s=>(e.os=o,s))}function bf(n,t,e){let i=et(),o=et();return e.forEach(s=>i=i.add(s)),t.getEntries(n,i).next(s=>{let a=me();return e.forEach((l,d)=>{const p=s.get(l);d.isFoundDocument()!==p.isFoundDocument()&&(o=o.add(l)),d.isNoDocument()&&d.version.isEqual(Z.min())?(t.removeEntry(l,d.readTime),a=a.insert(l,d)):!p.isValidDocument()||d.version.compareTo(p.version)>0||d.version.compareTo(p.version)===0&&p.hasPendingWrites?(t.addEntry(d),a=a.insert(l,d)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",p.version," Watch version:",d.version)}),{Ps:a,Is:o}})}function xf(n,t){const e=Y(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function wf(n,t){const e=Y(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return e.Ur.getTargetData(i,t).next(s=>s?(o=s,z.resolve(o)):e.Ur.allocateTargetId(i).next(a=>(o=new we(t,a,"TargetPurposeListen",i.currentSequenceNumber),e.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=e.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(e.os=e.os.insert(i.targetId,i),e._s.set(t,i.targetId)),i})}async function fr(n,t,e){const i=Y(n),o=i.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,o))}catch(a){if(!oi(a))throw a;$("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.os=i.os.remove(t),i._s.delete(o.target)}function Za(n,t,e){const i=Y(n);let o=Z.min(),s=et();return i.persistence.runTransaction("Execute query","readwrite",a=>function(d,p,x){const h=Y(d),m=h._s.get(x);return m!==void 0?z.resolve(h.os.get(m)):h.Ur.getTargetData(p,x)}(i,a,ae(t)).next(l=>{if(l)return o=l.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,l.targetId).next(d=>{s=d})}).next(()=>i.ss.getDocumentsMatchingQuery(a,t,e?o:Z.min(),e?s:et())).next(l=>(Af(i,ph(t),l),{documents:l,Ts:s})))}function Af(n,t,e){let i=n.us.get(t)||Z.min();e.forEach((o,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.us.set(t,i)}class Ya{constructor(){this.activeTargetIds=vh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ef{constructor(){this.so=new Ya,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ya,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class tl{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Di=null;function Qo(){return Di===null?Di=function(){return 268435456+Math.round(2147483648*Math.random())}():Di++,"0x"+Di.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Nt="WebChannelConnection";class Cf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${o}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${s}`}get Fo(){return!1}Mo(e,i,o,s,a){const l=Qo(),d=this.xo(e,i.toUriEncodedString());$("RestConnection",`Sending RPC '${e}' ${l}:`,d,o);const p={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(p,s,a),this.No(e,d,p,o).then(x=>($("RestConnection",`Received RPC '${e}' ${l}: `,x),x),x=>{throw sn("RestConnection",`RPC '${e}' ${l} failed with error: `,x,"url: ",d,"request:",o),x})}Lo(e,i,o,s,a,l){return this.Mo(e,i,o,s,a)}Oo(e,i,o){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>e[a]=s),o&&o.headers.forEach((s,a)=>e[a]=s)}xo(e,i){const o=_f[e];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,o){const s=Qo();return new Promise((a,l)=>{const d=new Ll;d.setWithCredentials(!0),d.listenOnce(zl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Bi.NO_ERROR:const x=d.getResponseJson();$(Nt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(x)),a(x);break;case Bi.TIMEOUT:$(Nt,`RPC '${t}' ${s} timed out`),l(new H(B.DEADLINE_EXCEEDED,"Request time out"));break;case Bi.HTTP_ERROR:const h=d.getStatus();if($(Nt,`RPC '${t}' ${s} failed with status:`,h,"response text:",d.getResponseText()),h>0){let m=d.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const _=function(T){const D=T.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(D)>=0?D:B.UNKNOWN}(v.status);l(new H(_,v.message))}else l(new H(B.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new H(B.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{$(Nt,`RPC '${t}' ${s} completed.`)}});const p=JSON.stringify(o);$(Nt,`RPC '${t}' ${s} sending request:`,o),d.send(e,"POST",p,i,15)})}Bo(t,e,i){const o=Qo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ol(),l=Ml(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Oo(d.initMessageHeaders,e,i),d.encodeInitMessageHeaders=!0;const x=s.join("");$(Nt,`Creating RPC '${t}' stream ${o}: ${x}`,d);const h=a.createWebChannel(x,d);let m=!1,v=!1;const _=new Tf({Io:T=>{v?$(Nt,`Not sending because RPC '${t}' stream ${o} is closed:`,T):(m||($(Nt,`Opening RPC '${t}' stream ${o} transport.`),h.open(),m=!0),$(Nt,`RPC '${t}' stream ${o} sending:`,T),h.send(T))},To:()=>h.close()}),C=(T,D,V)=>{T.listen(D,P=>{try{V(P)}catch(M){setTimeout(()=>{throw M},0)}})};return C(h,zn.EventType.OPEN,()=>{v||($(Nt,`RPC '${t}' stream ${o} transport opened.`),_.yo())}),C(h,zn.EventType.CLOSE,()=>{v||(v=!0,$(Nt,`RPC '${t}' stream ${o} transport closed`),_.So())}),C(h,zn.EventType.ERROR,T=>{v||(v=!0,sn(Nt,`RPC '${t}' stream ${o} transport errored:`,T),_.So(new H(B.UNAVAILABLE,"The operation could not be completed")))}),C(h,zn.EventType.MESSAGE,T=>{var D;if(!v){const V=T.data[0];ot(!!V);const P=V,M=P.error||((D=P[0])===null||D===void 0?void 0:D.error);if(M){$(Nt,`RPC '${t}' stream ${o} received error:`,M);const N=M.status;let q=function(A){const g=vt[A];if(g!==void 0)return hc(g)}(N),I=M.message;q===void 0&&(q=B.INTERNAL,I="Unknown error status: "+N+" with message "+M.message),v=!0,_.So(new H(q,I)),h.close()}else $(Nt,`RPC '${t}' stream ${o} received:`,V),_.bo(V)}}),C(l,Fl.STAT_EVENT,T=>{T.stat===or.PROXY?$(Nt,`RPC '${t}' stream ${o} detected buffering proxy`):T.stat===or.NOPROXY&&$(Nt,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function Wo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n){return new Lh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,i=1e3,o=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=o,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,e-i);o>0&&$("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e,i,o,s,a,l,d){this.ui=t,this.Ho=i,this.Jo=o,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Mr(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===B.RESOURCE_EXHAUSTED?(fe(e.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===e&&this.P_(i,o)},i=>{t(()=>{const o=new H(B.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return $("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rf extends Tc{constructor(t,e,i,o,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,o,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Oh(this.serializer,t),i=function(s){if(!("targetChange"in s))return Z.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Z.min():a.readTime?Qt(a.readTime):Z.min()}(t);return this.listener.d_(e,i)}A_(t){const e={};e.database=hr(this.serializer),e.addTarget=function(s,a){let l;const d=a.target;if(l=lr(d)?{documents:qh(s,d)}:{query:Hh(s,d)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=gc(s,a.resumeToken);const p=ur(s,a.expectedCount);p!==null&&(l.expectedCount=p)}else if(a.snapshotVersion.compareTo(Z.min())>0){l.readTime=Qi(s,a.snapshotVersion.toTimestamp());const p=ur(s,a.expectedCount);p!==null&&(l.expectedCount=p)}return l}(this.serializer,t);const i=$h(this.serializer,t);i&&(e.labels=i),this.a_(e)}R_(t){const e={};e.database=hr(this.serializer),e.removeTarget=t,this.a_(e)}}class Sf extends Tc{constructor(t,e,i,o,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,o,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return ot(!!t.streamToken),this.lastStreamToken=t.streamToken,ot(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){ot(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=jh(t.writeResults,t.commitTime),i=Qt(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=hr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>xc(this.serializer,i))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf extends class{}{constructor(t,e,i,o){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new H(B.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,pr(e,i),o,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(B.UNKNOWN,s.toString())})}Lo(t,e,i,o,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,pr(e,i),o,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(B.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class kf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fe(e),this.D_=!1):$("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,e,i,o,s){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{i.enqueueAndForget(async()=>{Qe(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(d){const p=Y(d);p.L_.add(4),await ci(p),p.q_.set("Unknown"),p.L_.delete(4),await lo(p)}(this))})}),this.q_=new kf(i,o)}}async function lo(n){if(Qe(n))for(const t of n.B_)await t(!0)}async function ci(n){for(const t of n.B_)await t(!1)}function Cc(n,t){const e=Y(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Hr(e)?qr(e):vn(e).r_()&&jr(e,t))}function Or(n,t){const e=Y(n),i=vn(e);e.N_.delete(t),i.r_()&&Rc(e,t),e.N_.size===0&&(i.r_()?i.o_():Qe(e)&&e.q_.set("Unknown"))}function jr(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Z.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}vn(n).A_(t)}function Rc(n,t){n.Q_.xe(t),vn(n).R_(t)}function qr(n){n.Q_=new Dh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),vn(n).start(),n.q_.v_()}function Hr(n){return Qe(n)&&!vn(n).n_()&&n.N_.size>0}function Qe(n){return Y(n).L_.size===0}function Sc(n){n.Q_=void 0}async function Vf(n){n.q_.set("Online")}async function Bf(n){n.N_.forEach((t,e)=>{jr(n,t)})}async function Nf(n,t){Sc(n),Hr(n)?(n.q_.M_(t),qr(n)):n.q_.set("Unknown")}async function Lf(n,t,e){if(n.q_.set("Online"),t instanceof mc&&t.state===2&&t.cause)try{await async function(o,s){const a=s.cause;for(const l of s.targetIds)o.N_.has(l)&&(await o.remoteSyncer.rejectListen(l,a),o.N_.delete(l),o.Q_.removeTarget(l))}(n,t)}catch(i){$("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Gi(n,i)}else if(t instanceof zi?n.Q_.Ke(t):t instanceof fc?n.Q_.He(t):n.Q_.We(t),!e.isEqual(Z.min()))try{const i=await _c(n.localStore);e.compareTo(i)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((d,p)=>{if(d.resumeToken.approximateByteSize()>0){const x=s.N_.get(p);x&&s.N_.set(p,x.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,p)=>{const x=s.N_.get(d);if(!x)return;s.N_.set(d,x.withResumeToken(kt.EMPTY_BYTE_STRING,x.snapshotVersion)),Rc(s,d);const h=new we(x.target,d,p,x.sequenceNumber);jr(s,h)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(i){$("RemoteStore","Failed to raise snapshot:",i),await Gi(n,i)}}async function Gi(n,t,e){if(!oi(t))throw t;n.L_.add(1),await ci(n),n.q_.set("Offline"),e||(e=()=>_c(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await lo(n)})}function Pc(n,t){return t().catch(e=>Gi(n,e,t))}async function co(n){const t=Y(n),e=Re(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;zf(t);)try{const o=await xf(t.localStore,i);if(o===null){t.O_.length===0&&e.o_();break}i=o.batchId,Ff(t,o)}catch(o){await Gi(t,o)}kc(t)&&Dc(t)}function zf(n){return Qe(n)&&n.O_.length<10}function Ff(n,t){n.O_.push(t);const e=Re(n);e.r_()&&e.V_&&e.m_(t.mutations)}function kc(n){return Qe(n)&&!Re(n).n_()&&n.O_.length>0}function Dc(n){Re(n).start()}async function Mf(n){Re(n).p_()}async function Of(n){const t=Re(n);for(const e of n.O_)t.m_(e.mutations)}async function jf(n,t,e){const i=n.O_.shift(),o=Vr.from(i,t,e);await Pc(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await co(n)}async function qf(n,t){t&&Re(n).V_&&await async function(i,o){if(function(a){return pc(a)&&a!==B.ABORTED}(o.code)){const s=i.O_.shift();Re(i).s_(),await Pc(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,o)),await co(i)}}(n,t),kc(n)&&Dc(n)}async function el(n,t){const e=Y(n);e.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const i=Qe(e);e.L_.add(3),await ci(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await lo(e)}async function Hf(n,t){const e=Y(n);t?(e.L_.delete(2),await lo(e)):t||(e.L_.add(2),await ci(e),e.q_.set("Unknown"))}function vn(n){return n.K_||(n.K_=function(e,i,o){const s=Y(e);return s.w_(),new Rf(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)}(n.datastore,n.asyncQueue,{Eo:Vf.bind(null,n),Ro:Bf.bind(null,n),mo:Nf.bind(null,n),d_:Lf.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Hr(n)?qr(n):n.q_.set("Unknown")):(await n.K_.stop(),Sc(n))})),n.K_}function Re(n){return n.U_||(n.U_=function(e,i,o){const s=Y(e);return s.w_(),new Sf(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Mf.bind(null,n),mo:qf.bind(null,n),f_:Of.bind(null,n),g_:jf.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await co(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e,i,o,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=o,this.removalCallback=s,this.deferred=new se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,o,s){const a=Date.now()+i,l=new Ur(t,e,a,o,s);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(B.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $r(n,t){if(fe("AsyncQueue",`${t}: ${n}`),oi(n))return new H(B.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t){this.comparator=t?(e,i)=>t(e,i)||W.comparator(e.key,i.key):(e,i)=>W.comparator(e.key,i.key),this.keyedMap=Fn(),this.sortedSet=new pt(this.comparator)}static emptySet(t){return new rn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof rn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const o=e.getNext().key,s=i.getNext().key;if(!o.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new rn;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.W_=new pt(W.comparator)}track(t){const e=t.doc.key,i=this.W_.get(e);i?t.type!==0&&i.type===3?this.W_=this.W_.insert(e,t):t.type===3&&i.type!==1?this.W_=this.W_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.W_=this.W_.remove(e):t.type===1&&i.type===2?this.W_=this.W_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):X():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,i)=>{t.push(i)}),t}}class un{constructor(t,e,i,o,s,a,l,d,p){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=p}static fromInitialDocuments(t,e,i,o,s){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new un(t,e,rn.emptySet(e),a,i,o,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&no(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let o=0;o<e.length;o++)if(e[o].type!==i[o].type||!e[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class $f{constructor(){this.queries=il(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const o=Y(e),s=o.queries;o.queries=il(),s.forEach((a,l)=>{for(const d of l.j_)d.onError(i)})})(this,new H(B.ABORTED,"Firestore shutting down"))}}function il(){return new yn(n=>Yl(n),no)}async function Qr(n,t){const e=Y(n);let i=3;const o=t.query;let s=e.queries.get(o);s?!s.H_()&&t.J_()&&(i=2):(s=new Uf,i=t.J_()?0:1);try{switch(i){case 0:s.z_=await e.onListen(o,!0);break;case 1:s.z_=await e.onListen(o,!1);break;case 2:await e.onFirstRemoteStoreListen(o)}}catch(a){const l=$r(a,`Initialization of query '${Ye(t.query)}' failed`);return void t.onError(l)}e.queries.set(o,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Gr(e)}async function Wr(n,t){const e=Y(n),i=t.query;let o=3;const s=e.queries.get(i);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?o=t.J_()?0:1:!s.H_()&&t.J_()&&(o=2))}switch(o){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function Qf(n,t){const e=Y(n);let i=!1;for(const o of t){const s=o.query,a=e.queries.get(s);if(a){for(const l of a.j_)l.X_(o)&&(i=!0);a.z_=o}}i&&Gr(e)}function Wf(n,t,e){const i=Y(n),o=i.queries.get(t);if(o)for(const s of o.j_)s.onError(e);i.queries.delete(t)}function Gr(n){n.Y_.forEach(t=>{t.next()})}var mr,ol;(ol=mr||(mr={})).ea="default",ol.Cache="cache";class Kr{constructor(t,e,i){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(t){if(!this.options.includeMetadataChanges){const i=[];for(const o of t.docChanges)o.type!==3&&i.push(o);t=new un(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const i=e!=="Offline";return(!this.options._a||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=un.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==mr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t){this.key=t}}class Bc{constructor(t){this.key=t}}class Gf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=et(),this.mutatedKeys=et(),this.Aa=tc(t),this.Ra=new rn(this.Aa)}get Va(){return this.Ta}ma(t,e){const i=e?e.fa:new nl,o=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=o,l=!1;const d=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,p=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((x,h)=>{const m=o.get(x),v=io(this.query,h)?h:null,_=!!m&&this.mutatedKeys.has(m.key),C=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let T=!1;m&&v?m.data.isEqual(v.data)?_!==C&&(i.track({type:3,doc:v}),T=!0):this.ga(m,v)||(i.track({type:2,doc:v}),T=!0,(d&&this.Aa(v,d)>0||p&&this.Aa(v,p)<0)&&(l=!0)):!m&&v?(i.track({type:0,doc:v}),T=!0):m&&!v&&(i.track({type:1,doc:m}),T=!0,(d||p)&&(l=!0)),T&&(v?(a=a.add(v),s=C?s.add(x):s.delete(x)):(a=a.delete(x),s=s.delete(x)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const x=this.query.limitType==="F"?a.last():a.first();a=a.delete(x.key),s=s.delete(x.key),i.track({type:1,doc:x})}return{Ra:a,fa:i,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,o){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((x,h)=>function(v,_){const C=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return C(v)-C(_)}(x.type,h.type)||this.Aa(x.doc,h.doc)),this.pa(i),o=o!=null&&o;const l=e&&!o?this.ya():[],d=this.da.size===0&&this.current&&!o?1:0,p=d!==this.Ea;return this.Ea=d,a.length!==0||p?{snapshot:new un(this.query,t.Ra,s,a,t.mutatedKeys,d===0,p,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new nl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=et(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const e=[];return t.forEach(i=>{this.da.has(i)||e.push(new Bc(i))}),this.da.forEach(i=>{t.has(i)||e.push(new Vc(i))}),e}ba(t){this.Ta=t.Ts,this.da=et();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return un.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Kf{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class Xf{constructor(t){this.key=t,this.va=!1}}class Jf{constructor(t,e,i,o,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=o,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new yn(l=>Yl(l),no),this.Ma=new Map,this.xa=new Set,this.Oa=new pt(W.comparator),this.Na=new Map,this.La=new Lr,this.Ba={},this.ka=new Map,this.qa=dn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Zf(n,t,e=!0){const i=Oc(n);let o;const s=i.Fa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),o=s.view.Da()):o=await Nc(i,t,e,!0),o}async function Yf(n,t){const e=Oc(n);await Nc(e,t,!0,!1)}async function Nc(n,t,e,i){const o=await wf(n.localStore,ae(t)),s=o.targetId,a=n.sharedClientState.addLocalQueryTarget(s,e);let l;return i&&(l=await tm(n,t,s,a==="current",o.resumeToken)),n.isPrimaryClient&&e&&Cc(n.remoteStore,o),l}async function tm(n,t,e,i,o){n.Ka=(h,m,v)=>async function(C,T,D,V){let P=T.view.ma(D);P.ns&&(P=await Za(C.localStore,T.query,!1).then(({documents:I})=>T.view.ma(I,P)));const M=V&&V.targetChanges.get(T.targetId),N=V&&V.targetMismatches.get(T.targetId)!=null,q=T.view.applyChanges(P,C.isPrimaryClient,M,N);return sl(C,T.targetId,q.wa),q.snapshot}(n,h,m,v);const s=await Za(n.localStore,t,!0),a=new Gf(t,s.Ts),l=a.ma(s.documents),d=li.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",o),p=a.applyChanges(l,n.isPrimaryClient,d);sl(n,e,p.wa);const x=new Kf(t,e,a);return n.Fa.set(t,x),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),p.snapshot}async function em(n,t,e){const i=Y(n),o=i.Fa.get(t),s=i.Ma.get(o.targetId);if(s.length>1)return i.Ma.set(o.targetId,s.filter(a=>!no(a,t))),void i.Fa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await fr(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),e&&Or(i.remoteStore,o.targetId),gr(i,o.targetId)}).catch(ii)):(gr(i,o.targetId),await fr(i.localStore,o.targetId,!0))}async function nm(n,t){const e=Y(n),i=e.Fa.get(t),o=e.Ma.get(i.targetId);e.isPrimaryClient&&o.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Or(e.remoteStore,i.targetId))}async function im(n,t,e){const i=dm(n);try{const o=await function(a,l){const d=Y(a),p=wt.now(),x=l.reduce((v,_)=>v.add(_.key),et());let h,m;return d.persistence.runTransaction("Locally write mutations","readwrite",v=>{let _=me(),C=et();return d.cs.getEntries(v,x).next(T=>{_=T,_.forEach((D,V)=>{V.isValidDocument()||(C=C.add(D))})}).next(()=>d.localDocuments.getOverlayedDocuments(v,_)).next(T=>{h=T;const D=[];for(const V of l){const P=Th(V,h.get(V.key).overlayedDocument);P!=null&&D.push(new Se(V.key,P,$l(P.value.mapValue),xt.exists(!0)))}return d.mutationQueue.addMutationBatch(v,p,D,l)}).next(T=>{m=T;const D=T.applyToLocalDocumentSet(h,C);return d.documentOverlayCache.saveOverlays(v,T.batchId,D)})}).then(()=>({batchId:m.batchId,changes:nc(h)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(o.batchId),function(a,l,d){let p=a.Ba[a.currentUser.toKey()];p||(p=new pt(st)),p=p.insert(l,d),a.Ba[a.currentUser.toKey()]=p}(i,o.batchId,e),await di(i,o.changes),await co(i.remoteStore)}catch(o){const s=$r(o,"Failed to persist write");e.reject(s)}}async function Lc(n,t){const e=Y(n);try{const i=await vf(e.localStore,t);t.targetChanges.forEach((o,s)=>{const a=e.Na.get(s);a&&(ot(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?a.va=!0:o.modifiedDocuments.size>0?ot(a.va):o.removedDocuments.size>0&&(ot(a.va),a.va=!1))}),await di(e,i,t)}catch(i){await ii(i)}}function rl(n,t,e){const i=Y(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const o=[];i.Fa.forEach((s,a)=>{const l=a.view.Z_(t);l.snapshot&&o.push(l.snapshot)}),function(a,l){const d=Y(a);d.onlineState=l;let p=!1;d.queries.forEach((x,h)=>{for(const m of h.j_)m.Z_(l)&&(p=!0)}),p&&Gr(d)}(i.eventManager,t),o.length&&i.Ca.d_(o),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function om(n,t,e){const i=Y(n);i.sharedClientState.updateQueryState(t,"rejected",e);const o=i.Na.get(t),s=o&&o.key;if(s){let a=new pt(W.comparator);a=a.insert(s,It.newNoDocument(s,Z.min()));const l=et().add(s),d=new so(Z.min(),new Map,new pt(st),a,l);await Lc(i,d),i.Oa=i.Oa.remove(s),i.Na.delete(t),Xr(i)}else await fr(i.localStore,t,!1).then(()=>gr(i,t,e)).catch(ii)}async function rm(n,t){const e=Y(n),i=t.batch.batchId;try{const o=await yf(e.localStore,t);Fc(e,i,null),zc(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await di(e,o)}catch(o){await ii(o)}}async function sm(n,t,e){const i=Y(n);try{const o=await function(a,l){const d=Y(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let x;return d.mutationQueue.lookupMutationBatch(p,l).next(h=>(ot(h!==null),x=h.keys(),d.mutationQueue.removeMutationBatch(p,h))).next(()=>d.mutationQueue.performConsistencyCheck(p)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(p,x,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,x)).next(()=>d.localDocuments.getDocuments(p,x))})}(i.localStore,t);Fc(i,t,e),zc(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await di(i,o)}catch(o){await ii(o)}}function zc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Fc(n,t,e){const i=Y(n);let o=i.Ba[i.currentUser.toKey()];if(o){const s=o.get(t);s&&(e?s.reject(e):s.resolve(),o=o.remove(t)),i.Ba[i.currentUser.toKey()]=o}}function gr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Ma.get(t))n.Fa.delete(i),e&&n.Ca.$a(i,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(i=>{n.La.containsKey(i)||Mc(n,i)})}function Mc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Or(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Xr(n))}function sl(n,t,e){for(const i of e)i instanceof Vc?(n.La.addReference(i.key,t),am(n,i)):i instanceof Bc?($("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,t),n.La.containsKey(i.key)||Mc(n,i.key)):X()}function am(n,t){const e=t.key,i=e.path.canonicalString();n.Oa.get(e)||n.xa.has(i)||($("SyncEngine","New document in limbo: "+e),n.xa.add(i),Xr(n))}function Xr(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new W(dt.fromString(t)),i=n.qa.next();n.Na.set(i,new Xf(e)),n.Oa=n.Oa.insert(e,i),Cc(n.remoteStore,new we(ae(eo(e.path)),i,"TargetPurposeLimboResolution",Tr.oe))}}async function di(n,t,e){const i=Y(n),o=[],s=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((l,d)=>{a.push(i.Ka(d,t,e).then(p=>{var x;if((p||e)&&i.isPrimaryClient){const h=p?!p.fromCache:(x=e==null?void 0:e.targetChanges.get(d.targetId))===null||x===void 0?void 0:x.current;i.sharedClientState.updateQueryState(d.targetId,h?"current":"not-current")}if(p){o.push(p);const h=Fr.Wi(d.targetId,p);s.push(h)}}))}),await Promise.all(a),i.Ca.d_(o),await async function(d,p){const x=Y(d);try{await x.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>z.forEach(p,m=>z.forEach(m.$i,v=>x.persistence.referenceDelegate.addReference(h,m.targetId,v)).next(()=>z.forEach(m.Ui,v=>x.persistence.referenceDelegate.removeReference(h,m.targetId,v)))))}catch(h){if(!oi(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of p){const m=h.targetId;if(!h.fromCache){const v=x.os.get(m),_=v.snapshotVersion,C=v.withLastLimboFreeSnapshotVersion(_);x.os=x.os.insert(m,C)}}}(i.localStore,s))}async function lm(n,t){const e=Y(n);if(!e.currentUser.isEqual(t)){$("SyncEngine","User change. New user:",t.toKey());const i=await Ic(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(l=>{l.forEach(d=>{d.reject(new H(B.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await di(e,i.hs)}}function cm(n,t){const e=Y(n),i=e.Na.get(t);if(i&&i.va)return et().add(i.key);{let o=et();const s=e.Ma.get(t);if(!s)return o;for(const a of s){const l=e.Fa.get(a);o=o.unionWith(l.view.Va)}return o}}function Oc(n){const t=Y(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Lc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=cm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=om.bind(null,t),t.Ca.d_=Qf.bind(null,t.eventManager),t.Ca.$a=Wf.bind(null,t.eventManager),t}function dm(n){const t=Y(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=rm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sm.bind(null,t),t}class Ki{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ao(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return gf(this.persistence,new ff,t.initialUser,this.serializer)}Ga(t){return new uf(zr.Zr,this.serializer)}Wa(t){return new Ef}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ki.provider={build:()=>new Ki};class yr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>rl(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=lm.bind(null,this.syncEngine),await Hf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new $f}()}createDatastore(t){const e=ao(t.databaseInfo.databaseId),i=function(s){return new Cf(s)}(t.databaseInfo);return function(s,a,l,d){return new Pf(s,a,l,d)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,o,s,a,l){return new Df(i,o,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>rl(this.syncEngine,e,0),function(){return tl.D()?new tl:new If}())}createSyncEngine(t,e){return function(o,s,a,l,d,p,x){const h=new Jf(o,s,a,l,d,p);return x&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(o){const s=Y(o);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ci(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}yr.provider={build:()=>new yr};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jr{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):fe("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new H(B.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(o,s){const a=Y(o),l={documents:s.map(h=>Wi(a.serializer,h))},d=await a.Lo("BatchGetDocuments",a.serializer.databaseId,dt.emptyPath(),l,s.length),p=new Map;d.forEach(h=>{const m=Mh(a.serializer,h);p.set(m.key.toString(),m)});const x=[];return s.forEach(h=>{const m=p.get(h.toString());ot(!!m),x.push(m)}),x}(this.datastore,t);return e.forEach(i=>this.recordVersion(i)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(t.toString())}delete(t){this.write(new ai(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,i)=>{const o=W.fromPath(i);this.mutations.push(new uc(o,this.precondition(o)))}),await async function(i,o){const s=Y(i),a={writes:o.map(l=>xc(s.serializer,l))};await s.Mo("Commit",s.serializer.databaseId,dt.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw X();e=Z.min()}const i=this.readVersions.get(t.key.toString());if(i){if(!e.isEqual(i))throw new H(B.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(Z.min())?xt.exists(!1):xt.updateTime(e):xt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(Z.min()))throw new H(B.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xt.updateTime(e)}return xt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class pm{constructor(t,e,i,o,s){this.asyncQueue=t,this.datastore=e,this.options=i,this.updateFunction=o,this.deferred=s,this._u=i.maxAttempts,this.t_=new Mr(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new um(this.datastore),e=this.cu(t);e&&e.then(i=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(i)}).catch(o=>{this.lu(o)}))}).catch(i=>{this.lu(i)})})}cu(t){try{const e=this.updateFunction(t);return!ri(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!pc(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,e,i,o,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=ql.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=$r(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Go(n,t){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await Ic(t.localStore,o),i=o)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function al(n,t){n.asyncQueue.verifyOperationInProgress();const e=await fm(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>el(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>el(t.remoteStore,o)),n._onlineComponents=t}async function fm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Go(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(e))throw e;sn("Error using user provided cache. Falling back to memory cache: "+e),await Go(n,new Ki)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Go(n,new Ki);return n._offlineComponents}async function Zr(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await al(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await al(n,new yr))),n._onlineComponents}function mm(n){return Zr(n).then(t=>t.syncEngine)}function gm(n){return Zr(n).then(t=>t.datastore)}async function Xi(n){const t=await Zr(n),e=t.eventManager;return e.onListen=Zf.bind(null,t.syncEngine),e.onUnlisten=em.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Yf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=nm.bind(null,t.syncEngine),e}function ym(n,t,e={}){const i=new se;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,d,p){const x=new Jr({next:m=>{x.Za(),a.enqueueAndForget(()=>Wr(s,h));const v=m.docs.has(l);!v&&m.fromCache?p.reject(new H(B.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&d&&d.source==="server"?p.reject(new H(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(m)},error:m=>p.reject(m)}),h=new Kr(eo(l.path),x,{includeMetadataChanges:!0,_a:!0});return Qr(s,h)}(await Xi(n),n.asyncQueue,t,e,i)),i.promise}function vm(n,t,e={}){const i=new se;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,d,p){const x=new Jr({next:m=>{x.Za(),a.enqueueAndForget(()=>Wr(s,h)),m.fromCache&&d.source==="server"?p.reject(new H(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(m)},error:m=>p.reject(m)}),h=new Kr(l,x,{includeMetadataChanges:!0,_a:!0});return Qr(s,h)}(await Xi(n),n.asyncQueue,t,e,i)),i.promise}/**
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
 */function jc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n,t,e){if(!e)throw new H(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function bm(n,t,e,i){if(t===!0&&i===!0)throw new H(B.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function cl(n){if(!W.isDocumentKey(n))throw new H(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function dl(n){if(W.isDocumentKey(n))throw new H(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function uo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":X()}function zt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new H(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=uo(n);throw new H(B.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new H(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new H(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jc((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class po{constructor(t,e,i,o){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ul({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new H(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ul(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Bp;switch(i.type){case"firstParty":return new Fp(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new H(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=ll.get(e);i&&($("ComponentProvider","Removing Datastore"),ll.delete(e),i.terminate())}(this),Promise.resolve()}}function xm(n,t,e,i={}){var o;const s=(n=zt(n,po))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let l,d;if(typeof i.mockUserToken=="string")l=i.mockUserToken,d=Lt.MOCK_USER;else{l=hu(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new H(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Lt(p)}n._authCredentials=new Np(new jl(l,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Pe(this.firestore,t,this._query)}}class Pt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _e(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Pt(this.firestore,t,this._key)}}class _e extends Pe{constructor(t,e,i){super(t,e,eo(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Pt(this.firestore,null,new W(t))}withConverter(t){return new _e(this.firestore,t,this._path)}}function At(n,t,...e){if(n=Wt(n),qc("collection","path",t),n instanceof po){const i=dt.fromString(t,...e);return dl(i),new _e(n,null,i)}{if(!(n instanceof Pt||n instanceof _e))throw new H(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(dt.fromString(t,...e));return dl(i),new _e(n.firestore,null,i)}}function at(n,t,...e){if(n=Wt(n),arguments.length===1&&(t=ql.newId()),qc("doc","path",t),n instanceof po){const i=dt.fromString(t,...e);return cl(i),new Pt(n,null,new W(i))}{if(!(n instanceof Pt||n instanceof _e))throw new H(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(dt.fromString(t,...e));return cl(i),new Pt(n.firestore,n instanceof _e?n.converter:null,new W(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Mr(this,"async_queue_retry"),this.Vu=()=>{const i=Wo();i&&$("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=Wo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Wo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new se;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!oi(t))throw t;$("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const o=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw fe("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const o=Ur.createAndSchedule(this,t,e,i,s=>this.yu(s));return this.Tu.push(o),o}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function hl(n){return function(e,i){if(typeof e!="object"||e===null)return!1;const o=e;for(const s of i)if(s in o&&typeof o[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Zt extends po{constructor(t,e,i,o){super(t,e,i,o),this.type="firestore",this._queue=new pl,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new pl(t),this._firestoreClient=void 0,await t}}}function wm(n,t){const e=typeof n=="object"?n:Ap(),i=typeof n=="string"?n:"(default)",o=vp(e,"firestore").getImmediate({identifier:i});if(!o._initialized){const s=uu("firestore");s&&xm(o,...s)}return o}function bn(n){if(n._terminated)throw new H(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Am(n),n._firestoreClient}function Am(n){var t,e,i;const o=n._freezeSettings(),s=function(l,d,p,x){return new Jp(l,d,p,x.host,x.ssl,x.experimentalForceLongPolling,x.experimentalAutoDetectLongPolling,jc(x.experimentalLongPollingOptions),x.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((e=o.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new hm(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ue(kt.fromBase64String(t))}catch(e){throw new H(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ue(kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new H(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new H(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new H(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return st(this._lat,t._lat)||st(this._long,t._long)}}/**
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
 */class ts{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,o){if(i.length!==o.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==o[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=/^__.*__$/;class Im{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Se(t,this.data,this.fieldMask,e,this.fieldTransforms):new si(t,this.data,e,this.fieldTransforms)}}class Hc{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new Se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Uc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class es{constructor(t,e,i,o,s,a){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=o,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new es(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Fu({path:i,xu:!1});return o.Ou(t),o}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ji(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Uc(this.Cu)&&Em.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class _m{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||ao(t)}Qu(t,e,i,o=!1){return new es({Cu:t,methodName:e,qu:i,path:Rt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wn(n){const t=n._freezeSettings(),e=ao(n._databaseId);return new _m(n._databaseId,!!t.ignoreUndefinedProperties,e)}function fo(n,t,e,i,o,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,t,e,o);rs("Data must be an object, but it was:",a,i);const l=$c(i,a);let d,p;if(s.merge)d=new $t(a.fieldMask),p=a.fieldTransforms;else if(s.mergeFields){const x=[];for(const h of s.mergeFields){const m=vr(t,h,e);if(!a.contains(m))throw new H(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Wc(x,m)||x.push(m)}d=new $t(x),p=a.fieldTransforms.filter(h=>d.covers(h.field))}else d=null,p=a.fieldTransforms;return new Im(new Ot(l),d,p)}class mo extends ho{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof mo}}class ns extends ho{_toFieldTransform(t){return new Ah(t.path,new Zn)}isEqual(t){return t instanceof ns}}function is(n,t,e,i){const o=n.Qu(1,t,e);rs("Data must be an object, but it was:",o,i);const s=[],a=Ot.empty();$e(i,(d,p)=>{const x=ss(t,d,e);p=Wt(p);const h=o.Nu(x);if(p instanceof mo)s.push(x);else{const m=ui(p,h);m!=null&&(s.push(x),a.set(x,m))}});const l=new $t(s);return new Hc(a,l,o.fieldTransforms)}function os(n,t,e,i,o,s){const a=n.Qu(1,t,e),l=[vr(t,i,e)],d=[o];if(s.length%2!=0)throw new H(B.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(vr(t,s[m])),d.push(s[m+1]);const p=[],x=Ot.empty();for(let m=l.length-1;m>=0;--m)if(!Wc(p,l[m])){const v=l[m];let _=d[m];_=Wt(_);const C=a.Nu(v);if(_ instanceof mo)p.push(v);else{const T=ui(_,C);T!=null&&(p.push(v),x.set(v,T))}}const h=new $t(p);return new Hc(x,h,a.fieldTransforms)}function Tm(n,t,e,i=!1){return ui(e,n.Qu(i?4:3,t))}function ui(n,t){if(Qc(n=Wt(n)))return rs("Unsupported field value:",t,n),$c(n,t);if(n instanceof ho)return function(i,o){if(!Uc(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(o);s&&o.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,o){const s=[];let a=0;for(const l of i){let d=ui(l,o.Lu(a));d==null&&(d={nullValue:"NULL_VALUE"}),s.push(d),a++}return{arrayValue:{values:s}}}(n,t)}return function(i,o){if((i=Wt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return bh(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=wt.fromDate(i);return{timestampValue:Qi(o.serializer,s)}}if(i instanceof wt){const s=new wt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Qi(o.serializer,s)}}if(i instanceof Yr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ue)return{bytesValue:gc(o.serializer,i._byteString)};if(i instanceof Pt){const s=o.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw o.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Nr(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof ts)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Bu("VectorValues must only contain numeric values.");return Dr(l.serializer,d)})}}}}}}(i,o);throw o.Bu(`Unsupported field value: ${uo(i)}`)}(n,t)}function $c(n,t){const e={};return Hl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$e(n,(i,o)=>{const s=ui(o,t.Mu(i));s!=null&&(e[i]=s)}),{mapValue:{fields:e}}}function Qc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof wt||n instanceof Yr||n instanceof Ue||n instanceof Pt||n instanceof ho||n instanceof ts)}function rs(n,t,e){if(!Qc(e)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(e)){const i=uo(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function vr(n,t,e){if((t=Wt(t))instanceof xn)return t._internalPath;if(typeof t=="string")return ss(n,t);throw Ji("Field path arguments must be of type string or ",n,!1,void 0,e)}const Cm=new RegExp("[~\\*/\\[\\]]");function ss(n,t,e){if(t.search(Cm)>=0)throw Ji(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new xn(...t.split("."))._internalPath}catch{throw Ji(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ji(n,t,e,i,o){const s=i&&!i.isEmpty(),a=o!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(s||a)&&(d+=" (found",s&&(d+=` in field ${i}`),a&&(d+=` in document ${o}`),d+=")"),new H(B.INVALID_ARGUMENT,l+n+d)}function Wc(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t,e,i,o,s){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=o,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Rm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(as("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Rm extends Zi{data(){return super.data()}}function as(n,t){return typeof t=="string"?ss(n,t):t instanceof xn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ls{}class Kc extends ls{}function go(n,t,...e){let i=[];t instanceof ls&&i.push(t),i=i.concat(e),function(s){const a=s.filter(d=>d instanceof ds).length,l=s.filter(d=>d instanceof cs).length;if(a>1||a>0&&l>0)throw new H(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class cs extends Kc{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new cs(t,e,i)}_apply(t){const e=this._parse(t);return Xc(t._query,e),new Pe(t.firestore,t.converter,cr(t._query,e))}_parse(t){const e=wn(t.firestore);return function(s,a,l,d,p,x,h){let m;if(p.isKeyField()){if(x==="array-contains"||x==="array-contains-any")throw new H(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${x}' queries on documentId().`);if(x==="in"||x==="not-in"){ml(h,x);const v=[];for(const _ of h)v.push(fl(d,s,_));m={arrayValue:{values:v}}}else m=fl(d,s,h)}else x!=="in"&&x!=="not-in"&&x!=="array-contains-any"||ml(h,x),m=Tm(l,a,h,x==="in"||x==="not-in");return bt.create(p,x,m)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ds extends ls{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ds(t,e)}_parse(t){const e=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return e.length===1?e[0]:Jt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(o,s){let a=o;const l=s.getFlattenedFilters();for(const d of l)Xc(a,d),a=cr(a,d)}(t._query,e),new Pe(t.firestore,t.converter,cr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class us extends Kc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new us(t,e)}_apply(t){const e=function(o,s,a){if(o.startAt!==null)throw new H(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new H(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Jn(s,a)}(t._query,this._field,this._direction);return new Pe(t.firestore,t.converter,function(o,s){const a=o.explicitOrderBy.concat([s]);return new gn(o.path,o.collectionGroup,a,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(t._query,e))}}function yo(n,t="asc"){const e=t,i=as("orderBy",n);return us._create(i,e)}function fl(n,t,e){if(typeof(e=Wt(e))=="string"){if(e==="")throw new H(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zl(t)&&e.indexOf("/")!==-1)throw new H(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(dt.fromString(e));if(!W.isDocumentKey(i))throw new H(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Na(n,new W(i))}if(e instanceof Pt)return Na(n,e._key);throw new H(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uo(e)}.`)}function ml(n,t){if(!Array.isArray(n)||n.length===0)throw new H(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Xc(n,t){const e=function(o,s){for(const a of o)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new H(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new H(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Jc{convertValue(t,e="none"){switch(He(t)){case 0:return null;case 1:return t.booleanValue;case 2:return mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(qe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw X()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return $e(t,(o,s)=>{i[o]=this.convertValue(s,e)}),i}convertVectorValue(t){var e,i,o;const s=(o=(i=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(a=>mt(a.doubleValue));return new ts(s)}convertGeoPoint(t){return new Yr(mt(t.latitude),mt(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Rr(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Gn(t));default:return null}}convertTimestamp(t){const e=Ce(t);return new wt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=dt.fromString(t);ot(Ec(i));const o=new Kn(i.get(1),i.get(3)),s=new W(i.popFirst(5));return o.isEqual(e)||fe(`Document ${s} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class Sm extends Jc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Pt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ps extends Zi{constructor(t,e,i,o,s,a){super(t,e,i,o,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(as("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class Fi extends ps{data(t={}){return super.data(t)}}class Zc{constructor(t,e,i,o){this._firestore=t,this._userDataWriter=e,this._snapshot=o,this.metadata=new nn(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new Fi(this._firestore,this._userDataWriter,i.key,i,new nn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new H(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(o,s){if(o._snapshot.oldDocs.isEmpty()){let a=0;return o._snapshot.docChanges.map(l=>{const d=new Fi(o._firestore,o._userDataWriter,l.doc.key,l.doc,new nn(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const d=new Fi(o._firestore,o._userDataWriter,l.doc.key,l.doc,new nn(o._snapshot.mutatedKeys.has(l.doc.key),o._snapshot.fromCache),o.query.converter);let p=-1,x=-1;return l.type!==0&&(p=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),x=a.indexOf(l.doc.key)),{type:Pm(l.type),doc:d,oldIndex:p,newIndex:x}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Pm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n){n=zt(n,Pt);const t=zt(n.firestore,Zt);return ym(bn(t),n._key).then(e=>ed(t,n,e))}class bo extends Jc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Pt(this.firestore,null,e)}}function We(n){n=zt(n,Pe);const t=zt(n.firestore,Zt),e=bn(t),i=new bo(t);return Gc(n._query),vm(e,n._query).then(o=>new Zc(t,i,n,o))}function Yt(n,t,e){n=zt(n,Pt);const i=zt(n.firestore,Zt),o=vo(n.converter,t,e);return pi(i,[fo(wn(i),"setDoc",n._key,o,n.converter!==null,e).toMutation(n._key,xt.none())])}function ee(n,t,e,...i){n=zt(n,Pt);const o=zt(n.firestore,Zt),s=wn(o);let a;return a=typeof(t=Wt(t))=="string"||t instanceof xn?os(s,"updateDoc",n._key,t,e,i):is(s,"updateDoc",n._key,t),pi(o,[a.toMutation(n._key,xt.exists(!0))])}function Yc(n){return pi(zt(n.firestore,Zt),[new ai(n._key,xt.none())])}function td(n,t){const e=zt(n.firestore,Zt),i=at(n),o=vo(n.converter,t);return pi(e,[fo(wn(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,xt.exists(!1))]).then(()=>i)}function ke(n,...t){var e,i,o;n=Wt(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||hl(t[a])||(s=t[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(hl(t[a])){const h=t[a];t[a]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[a+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),t[a+2]=(o=h.complete)===null||o===void 0?void 0:o.bind(h)}let d,p,x;if(n instanceof Pt)p=zt(n.firestore,Zt),x=eo(n._key.path),d={next:h=>{t[a]&&t[a](ed(p,n,h))},error:t[a+1],complete:t[a+2]};else{const h=zt(n,Pe);p=zt(h.firestore,Zt),x=h._query;const m=new bo(p);d={next:v=>{t[a]&&t[a](new Zc(p,m,h,v))},error:t[a+1],complete:t[a+2]},Gc(n._query)}return function(m,v,_,C){const T=new Jr(C),D=new Kr(v,T,_);return m.asyncQueue.enqueueAndForget(async()=>Qr(await Xi(m),D)),()=>{T.Za(),m.asyncQueue.enqueueAndForget(async()=>Wr(await Xi(m),D))}}(bn(p),x,l,d)}function pi(n,t){return function(i,o){const s=new se;return i.asyncQueue.enqueueAndForget(async()=>im(await mm(i),o,s)),s.promise}(bn(n),t)}function ed(n,t,e){const i=e.docs.get(t._key),o=new bo(n);return new ps(n,o,t._key,i,new nn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const km={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=wn(t)}set(t,e,i){this._verifyNotCommitted();const o=xe(t,this._firestore),s=vo(o.converter,e,i),a=fo(this._dataReader,"WriteBatch.set",o._key,s,o.converter!==null,i);return this._mutations.push(a.toMutation(o._key,xt.none())),this}update(t,e,i,...o){this._verifyNotCommitted();const s=xe(t,this._firestore);let a;return a=typeof(e=Wt(e))=="string"||e instanceof xn?os(this._dataReader,"WriteBatch.update",s._key,e,i,o):is(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,xt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=xe(t,this._firestore);return this._mutations=this._mutations.concat(new ai(e._key,xt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new H(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function xe(n,t){if((n=Wt(n)).firestore!==t)throw new H(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vm extends class{constructor(e,i){this._firestore=e,this._transaction=i,this._dataReader=wn(e)}get(e){const i=xe(e,this._firestore),o=new Sm(this._firestore);return this._transaction.lookup([i._key]).then(s=>{if(!s||s.length!==1)return X();const a=s[0];if(a.isFoundDocument())return new Zi(this._firestore,o,a.key,a,i.converter);if(a.isNoDocument())return new Zi(this._firestore,o,i._key,null,i.converter);throw X()})}set(e,i,o){const s=xe(e,this._firestore),a=vo(s.converter,i,o),l=fo(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,o);return this._transaction.set(s._key,l),this}update(e,i,o,...s){const a=xe(e,this._firestore);let l;return l=typeof(i=Wt(i))=="string"||i instanceof xn?os(this._dataReader,"Transaction.update",a._key,i,o,s):is(this._dataReader,"Transaction.update",a._key,i),this._transaction.update(a._key,l),this}delete(e){const i=xe(e,this._firestore);return this._transaction.delete(i._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=xe(t,this._firestore),i=new bo(this._firestore);return super.get(t).then(o=>new ps(this._firestore,i,e._key,o._document,new nn(!1,!1),e.converter))}}function Bm(n,t,e){n=zt(n,Zt);const i=Object.assign(Object.assign({},km),e);return function(s){if(s.maxAttempts<1)throw new H(B.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(s,a,l){const d=new se;return s.asyncQueue.enqueueAndForget(async()=>{const p=await gm(s);new pm(s.asyncQueue,p,l,a,d).au()}),d.promise}(bn(n),o=>t(new Vm(n,o)),i)}function nd(){return new ns("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n){return bn(n=zt(n,Zt)),new Dm(n,t=>pi(n,t))}(function(t,e=!0){(function(o){mn=o})(wp),qi(new $n("firestore",(i,{instanceIdentifier:o,options:s})=>{const a=i.getProvider("app").getImmediate(),l=new Zt(new Lp(i.getProvider("auth-internal")),new Op(i.getProvider("app-check-internal")),function(p,x){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new H(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kn(p.options.projectId,x)}(a,o),a);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),on(Pa,"4.7.3",t),on(Pa,"4.7.3","esm2017")})();const Nm={apiKey:"AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",authDomain:"feria-vinos-sucovi-2027.firebaseapp.com",databaseURL:"https://feria-vinos-sucovi-2027-default-rtdb.firebaseio.com",projectId:"feria-vinos-sucovi-2027",storageBucket:"feria-vinos-sucovi-2027.firebasestorage.app",messagingSenderId:"1686119758",appId:"1:1686119758:web:2c3c6d96e36f1276052a1f",measurementId:"G-VRMTQ3SS7E"},Lm=Dl(Nm),J=wm(Lm),qt=[{id:0,key:"368813",nombre:"Sucovi",region:"Organización",pass:"stand00"},{id:1,key:"d48429",nombre:"Alta Vista",region:"Mendoza",pass:"stand01"},{id:2,key:"ba356c",nombre:"Andillian",region:"Mendoza",pass:"stand02"},{id:3,key:"451e62",nombre:"Ante Nada",region:"Mendoza",pass:"stand03"},{id:4,key:"835c2d",nombre:"Bodega Benegas",region:"Mendoza",pass:"stand04"},{id:5,key:"e45a28",nombre:"Bianchi",region:"San Rafael",pass:"stand05"},{id:6,key:"12ac1c",nombre:"Catena Zapata",region:"Luján de Cuyo",pass:"stand06"},{id:7,key:"18abc3",nombre:"Bodegas Bórbore",region:"Mendoza (1936)",pass:"stand07"},{id:8,key:"452b71",nombre:"Fábula Wines",region:"Mendoza",pass:"stand08"},{id:9,key:"0c55a5",nombre:"Finca Iral",region:"Mendoza",pass:"stand09"},{id:10,key:"5cb108",nombre:"Giménez Riili",region:"Mendoza",pass:"stand10"},{id:11,key:"27f372",nombre:"Jorge Rubio",region:"Mendoza",pass:"stand11"},{id:12,key:"a9d27f",nombre:"La Coste de los Andes",region:"Mendoza",pass:"stand12"},{id:13,key:"b5be6e",nombre:"Las Perdices",region:"Mendoza",pass:"stand13"},{id:14,key:"7da93b",nombre:"Lorenzo de Agrelo",region:"Mendoza",pass:"stand14"},{id:15,key:"f52ab4",nombre:"Pannunzio Wines",region:"Mendoza",pass:"stand15"},{id:16,key:"a32dd6",nombre:"Bodega Patritti",region:"Mendoza",pass:"stand16"},{id:17,key:"175358",nombre:"Rosell Boher",region:"Mendoza",pass:"stand17"},{id:18,key:"4a2b00",nombre:"Valle de la Puerta",region:"La Rioja",pass:"stand18"},{id:19,key:"b3c4d5",nombre:"Bertelli",region:"Buenos Aires",pass:"stand19"},{id:20,key:"e6f7a8",nombre:"Familia Aicardi",region:"Neuquén",pass:"stand20"},{id:21,key:"b9c0d1",nombre:"Finca Flichman",region:"Mendoza",pass:"stand21"},{id:22,key:"e2f3a4",nombre:"Don Martino Wines",region:"Mendoza",pass:"stand22"},{id:23,key:"b5c6d7",nombre:"Séptima",region:"Mendoza",pass:"stand23"}];async function br(n){return await td(At(J,"invitados"),{...n,creadoEn:nd()})}async function Ae(n,t){await ee(at(J,"invitados",n),t)}function xo(n){return ke(go(At(J,"invitados"),yo("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}async function ei(n){const e=(await We(At(J,"invitados"))).docs.find(i=>i.data().token===n);return e?{fireId:e.id,...e.data()}:null}async function zm(n){const e=(await We(At(J,"invitados"))).docs.find(i=>i.data().codigo===n);return e?{fireId:e.id,...e.data()}:null}async function id(n,t,e,i,o){const s=at(J,"carritos",n,"items",String(t)),a=await te(s);if(a.exists()){const l=a.data(),d=l.items||[],p=d.findIndex(x=>x.key===i.key);p>=0?d[p]=i:d.push(i),await Yt(s,{standId:t,standNombre:e,items:d,retiro:o||l.retiro||"stand"})}else await Yt(s,{standId:t,standNombre:e,items:[i],retiro:o||"stand"})}async function fs(n,t,e){await ee(at(J,"carritos",n,"items",String(t)),{retiro:e})}async function Yi(n,t,e){const i=at(J,"carritos",n,"items",String(t)),o=await te(i);if(!o.exists())return;const s=(o.data().items||[]).filter(a=>a.key!==e);s.length?await ee(i,{items:s}):await Yc(i)}async function xr(n){return(await We(At(J,"carritos",n,"items"))).docs.map(e=>({standId:e.id,...e.data()}))}function ms(n,t){return ke(At(J,"carritos",n,"items"),e=>t(e.docs.map(i=>({standDocId:i.id,...i.data()}))))}async function wr(n){const t=await We(At(J,"carritos",n,"items")),e=hs(J);t.docs.forEach(i=>e.delete(i.ref)),await e.commit()}async function od(n,t){const e=at(J,"config","contadores"),i=await te(e);let o=(i.exists()&&i.data().voucher||0)+1;const s=hs(J),a=[];return t.forEach((l,d)=>{const p=at(At(J,"pedidos"));a.push(p),s.set(p,{invFireId:n.fireId,invNombre:n.nombre+" "+n.apellido,invCodigo:n.codigo,invFamilia:n.familia||"",standId:l.standId,standNombre:l.standNombre,items:l.items||[],total:(l.items||[]).reduce((x,h)=>x+(h.sub||0),0),retiro:l.retiro||"stand",estado:"pagado",voucherNum:o+d,creadoEn:nd()})}),s.set(e,{voucher:o+t.length-1},{merge:!0}),await s.commit(),a.map(l=>l.id)}function wo(n){return ke(go(At(J,"pedidos"),yo("creadoEn","desc")),t=>n(t.docs.map(e=>({fireId:e.id,...e.data()}))))}function rd(n,t){return ke(go(At(J,"pedidos"),yo("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>Number(i.standId)===Number(n))))}function sd(n,t){return ke(go(At(J,"pedidos"),yo("creadoEn","desc")),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()})).filter(i=>i.invFireId===n)))}async function Fm(n,t=""){const e=at(J,"pedidos",n);await ee(e,{estado:"cancelado",canceladoAt:new Date().toISOString(),canceladoMotivo:t||"Cancelado desde caja"})}async function ad(n){const t=at(J,"pedidos",n);await ee(t,{estado:"reembolsado",reembolsadoAt:new Date().toISOString()})}async function ld(n){const t=at(J,"pedidos",n);await ee(t,{estado:"listo",listoAt:new Date().toISOString()})}async function cd(n){const t=at(J,"pedidos",n);await ee(t,{estado:"retirado",retiradoAt:new Date().toISOString()})}async function dd(n){const t=at(J,"pedidos",n);await ee(t,{estado:"entregado",entregadoAt:new Date().toISOString()})}async function gs(n){await ee(at(J,"pedidos",n),{estado:"entregado"})}async function Mm(n,t){const e={pendiente:"pagado",pagado:"listo",listo:"entregado"};e[t]&&await ee(at(J,"pedidos",n),{estado:e[t]})}function An(n,t){return ke(At(J,"bodegas",String(n),"vinos"),e=>t(e.docs.map(i=>({fireId:i.id,...i.data()}))))}async function ud(n,t){return(await td(At(J,"bodegas",String(n),"vinos"),t)).id}async function pd(n,t,e){await ee(at(J,"bodegas",String(n),"vinos",t),e)}async function hd(n,t){await Yc(at(J,"bodegas",String(n),"vinos",t))}async function fd(){const n=["invitados","pedidos"];for(const t of n){const e=await We(At(J,t)),i=hs(J);e.docs.forEach(o=>i.delete(o.ref)),await i.commit()}}async function to(n,t,e,i){const o=at(J,"stock",n+"_"+t),s=await te(o),a=s.exists()?s.data():{},l=i&&i!==t?i:a.vinoNombre&&a.vinoNombre!==t?a.vinoNombre:i||t;await Yt(o,{standId:Number(n),vinoId:t,vinoNombre:l,total:(a.total||0)+e,degustacion:a.degustacion||0,reservado:a.reservado||0,pagado:a.pagado||0,entregado:a.entregado||0},{merge:!0})}async function md(n,t,e){const i=at(J,"stock",n+"_"+t),o=await te(i),s=o.exists()?o.data():{};await Yt(i,{degustacion:(s.degustacion||0)+e},{merge:!0})}async function gd(n,t,e){const i=at(J,"stock",String(n)+"_"+t);try{return await Bm(J,async s=>{const a=await s.get(i);if(!a.exists())return!0;const l=a.data(),d=(l.total||0)-(l.degustacion||0)-(l.reservado||0)-(l.pagado||0)-(l.entregado||0);return e>d?!1:(s.update(i,{reservado:(l.reservado||0)+e}),!0)})}catch(o){return console.error("intentarReservarStock:",o),!0}}async function ys(n,t,e){const i=at(J,"stock",String(n)+"_"+t),o=await te(i);if(!o.exists())return;const s=o.data();await Yt(i,{reservado:Math.max(0,(s.reservado||0)-e)},{merge:!0})}async function yd(n,t,e){const i=at(J,"stock",String(n)+"_"+t),o=await te(i);if(!o.exists())return;const s=o.data();await Yt(i,{reservado:Math.max(0,(s.reservado||0)-e),pagado:(s.pagado||0)+e},{merge:!0})}function Ao(n){return ke(At(J,"stock"),t=>n(t.docs.map(e=>({id:e.id,...e.data()}))))}async function Om(n,t){const e=at(J,"stock",String(n)+"_"+t),i=await te(e);return i.exists()?i.data():null}async function vd(n){const t=[];if(!n||!n.length)return t;for(const e of n)try{(await We(At(J,"carritos",e,"items"))).docs.forEach(o=>{const s=o.data(),a=s.standId!==void 0?Number(s.standId):null;a!==null&&(s.items||[]).forEach(l=>{t.push({invFireId:e,standId:a,vinoId:l.vinoId||"",vinoNombre:l.vinoNombre||"",qty:l.qty||1})})})}catch{}return t}async function jm(n,t,e){const i=at(J,"stock",n+"_"+t);await Yt(i,{disponible:Math.max(0,e)},{merge:!0})}async function bd(n){return(await We(At(J,"invitados"))).docs.map(e=>({fireId:e.id,...e.data()})).filter(e=>(e.familia||"").toLowerCase()===n.toLowerCase())}async function xd(n){const t=await te(at(J,"familyLinks",n.toLowerCase()));return t.exists()?t.data().token:null}async function Ar(n,t){await Yt(at(J,"familyLinks",n.toLowerCase()),{token:t,familia:n})}async function wd(n,t){const e=await te(at(J,"familyLinks",n.toLowerCase()));return e.exists()?e.data().token===t:!1}async function Ad(n){const t=at(J,"config","contadores"),e=await te(t),o=((e.exists()?e.data():{}).pedidosEspeciales||0)+1;await Yt(t,{pedidosEspeciales:o},{merge:!0});const s="PE-"+String(o).padStart(3,"0"),a=at(At(J,"pedidosEspeciales"));return await Yt(a,{...n,peNum:s,estado:"pagado",creadoEn:new Date().toISOString()}),{fireId:a.id,peNum:s}}async function vs(n,t){await Yt(at(J,"pedidosEspeciales",n),t,{merge:!0})}function pn(n){return ke(At(J,"pedidosEspeciales"),t=>{n(t.docs.map(e=>({fireId:e.id,...e.data()})))})}const ni=Object.freeze(Object.defineProperty({__proto__:null,BODEGAS:qt,actualizarInvitado:Ae,actualizarPedidoEspecial:vs,actualizarRetiroStand:fs,actualizarStock:to,actualizarVino:pd,agregarAlCarrito:id,avanzarEstado:Mm,buscarInvitadoPorCodigo:zm,buscarInvitadoPorToken:ei,buscarInvitadosPorFamilia:bd,cancelarPedido:Fm,cobrarStock:yd,crearInvitado:br,crearPedidoEspecial:Ad,crearPedidosDesdeCarrito:od,eliminarItemCarrito:Yi,eliminarVino:hd,entregarDomicilio:dd,escucharCarrito:ms,escucharInvitados:xo,escucharPedidos:wo,escucharPedidosEspeciales:pn,escucharPedidosPorInvitado:sd,escucharPedidosPorStand:rd,escucharStock:Ao,escucharVinos:An,getFamilyToken:xd,getStockDoc:Om,guardarDisponibleStock:jm,guardarFamilyToken:Ar,guardarVino:ud,intentarReservarStock:gd,leerCarrito:xr,leerTodosLosCarritos:vd,liberarReservaStock:ys,limpiarDatosPrueba:fd,marcarEntregado:gs,marcarListoLogistica:ld,reembolsarPedido:ad,registrarDegustacion:md,retirarDeStand:cd,vaciarCarrito:wr,verificarFamilyToken:wd},Symbol.toStringTag,{value:"Module"})),qm="modulepreload",Hm=function(n){return"/"+n},gl={},hn=function(t,e,i){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(e.map(d=>{if(d=Hm(d),d in gl)return;gl[d]=!0;const p=d.endsWith(".css"),x=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${x}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":qm,p||(h.as="script"),h.crossOrigin="",h.href=d,l&&h.setAttribute("nonce",l),document.head.appendChild(h),p)return new Promise((m,v)=>{h.addEventListener("load",m),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},bs="data:image/png;base64,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";function Ht({title:n,sub:t="",backHref:e="",backLabel:i="← Panel",backStyle:o="",actions:s=[]}={}){return`
    <div class="hdr">
      <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
        <img src="${bs}" alt="Sucovi 2027"
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
    <div class="gold"></div>`}function Mi(n){return`
    <div style="background:linear-gradient(160deg,#1A3A5C 0%,#2C5F8A 60%,#3A7D44 100%);
                color:#fff;padding:20px 16px 16px;text-align:center">
      <img src="${bs}" alt="Sucovi 2027"
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
    <div class="gold"></div>`}function ne(){if(document.getElementById("sucovi-styles"))return;const n=document.createElement("style");n.id="sucovi-styles",n.textContent=`
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
  `,document.head.appendChild(n)}async function Um(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function yl(n,t,e){await Um();const i=document.getElementById(n);if(i)try{const o=qrcode(0,"M");o.addData(String(t)),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let p=0;p<s;p++)o.isDark(d,p)&&l.fillRect(p*a,d*a,a,a)}catch(o){console.error("QR error:",o)}}const Vi=n=>Number(n).toLocaleString("es-AR"),vl=()=>Math.random().toString(36).slice(2,10).toUpperCase(),bl=n=>"INV-"+String(n).padStart(4,"0");function xl(n){return{pendiente:'<span class="badge b-pend">Pendiente</span>',pagado:'<span class="badge b-pago">Bono pagado</span>',ingresado:'<span class="badge b-ingr">Ingresó</span>',invalidado:'<span class="badge b-inv">Invalidado</span>'}[n]||""}const $m={pendiente:"Pendiente",pagado:"Pagado",listo:"Listo",entregado:"Entregado"},Qm={pendiente:"b-pend",pagado:"b-pago",listo:"b-list",entregado:"b-entr"};function Ed(n){const t=sessionStorage.getItem("admin-pin"),e=localStorage.getItem("sucovi-admin-pin")||"2027";if(t!==e&&t!=="1418"){n.innerHTML='<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#F0F4F8"><div style="background:#fff;border-radius:12px;padding:32px;text-align:center;max-width:320px;width:100%;box-shadow:0 4px 20px rgba(0,0,0,.1)"><div style="font-size:40px;margin-bottom:12px">🔒</div><h2 style="font-size:18px;font-weight:600;color:#1A3A5C;margin-bottom:4px">Panel Admin</h2><p style="font-size:13px;color:#888;margin-bottom:20px">SUCOVI 2027</p><input id="pin-input" type="password" maxlength="4" placeholder="PIN de 4 digitos" style="width:100%;text-align:center;font-size:24px;letter-spacing:.3em;padding:12px;border:2px solid #D6E4F0;border-radius:8px;margin-bottom:12px" onkeydown="if(event.keyCode===13) window._checkPin()"><button class="btn btn-v" style="width:100%;padding:12px;font-size:14px" onclick="window._checkPin()">Ingresar</button><div id="pin-err" style="margin-top:8px;font-size:12px;color:#C0392B"></div></div></div>',window._checkPin=()=>{const I=document.getElementById("pin-input").value,y=localStorage.getItem("sucovi-admin-pin")||"2027";I===y||I==="1418"?(sessionStorage.setItem("admin-pin",I),Ed(n)):(document.getElementById("pin-err").textContent="PIN incorrecto",document.getElementById("pin-input").value="")},setTimeout(()=>{var I;return(I=document.getElementById("pin-input"))==null?void 0:I.focus()},100);return}ne();let i=[],o=[],s=[],a=[],l="inv",d=null;Ao(I=>{a=I,l==="stock"&&V().catch(()=>{})}),n.innerHTML=Ht({title:"Sucovi 2027",sub:"20 jun 2026 · 19:30 hs · Roma 656, Olivos"})+`
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
    </div>`;let p=[];pn(I=>{p=I}),setTimeout(()=>{l="res",T()},100),xo(I=>{i=I,l==="inv"&&x(),l==="res"&&T()}),wo(I=>{o=I,s=I,l==="ped"&&_(),l==="res"&&T(),l==="cancelados"&&D()}),window._aTab=(I,y)=>{var g;l=I,document.querySelectorAll(".nav button").forEach(b=>b.classList.remove("on")),y.classList.add("on");const A={inv:x,reg:h,excel:m,ped:_,stands:C,res:T,config:P,stock:V};(g=A[I])==null||g.call(A)};function x(){const I=document.getElementById("tab-content");document.getElementById("buscar-inv")||(I.innerHTML=`
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
        <div class="card" id="lista-inv"></div>`),window._fInv=()=>{var w,f;const y=(((w=document.getElementById("buscar-inv"))==null?void 0:w.value)||"").toLowerCase(),A=((f=document.getElementById("fil-est"))==null?void 0:f.value)||"",g=i.filter(R=>(R.nombre+" "+R.apellido+" "+(R.codigo||"")+" "+(R.familia||"")).toLowerCase().includes(y)&&(!A||R.estado===A)),b=document.getElementById("lista-inv");if(b){if(!g.length){b.innerHTML='<div class="empty">Sin resultados</div>';return}b.innerHTML=g.map(R=>{var L,F;return`
        <div class="row" style="${R.estado==="invalidado"?"opacity:.5":""}">
          <div class="avatar">${((L=R.nombre)==null?void 0:L[0])||"?"}${((F=R.apellido)==null?void 0:F[0])||""}</div>
          <div style="flex:1;min-width:80px">
            <div style="font-size:13px;font-weight:500">${R.nombre} ${R.apellido}</div>
            <div style="font-size:11px;color:#888">${R.tel}${R.familia?" · "+R.familia:""}</div>
          </div>
          <div style="font-size:11px;color:#aaa">${R.codigo||""}</div>
          ${xl(R.estado)}
          <div style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">
            <button class="btn" style="padding:4px 8px;font-size:11px" onclick="window._abrirWA('${R.fireId}')">📱 WA</button>
            <button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._descargarQR('${R.fireId}')">📥 QR</button>
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInv('${R.fireId}')">✏️</button>
            ${R.estado!=="invalidado"?`<button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D" onclick="window._invalidar('${R.fireId}','${R.nombre} ${R.apellido}')">✕ Invalidar</button>`:`<button class="btn" style="padding:4px 8px;font-size:11px;color:#3B6D11;border-color:#3B6D11" onclick="window._reactivar('${R.fireId}')">↩ Reactivar</button>`}
          </div>
        </div>`}).join("")}},window._fInv()}window._invalidar=async(I,y)=>{confirm(`¿Invalidar a ${y}?`)&&await Ae(I,{estado:"invalidado"})},window._reactivar=async I=>await Ae(I,{estado:"pendiente"});function h(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}window._registrar=async()=>{const I=document.getElementById("rn").value.trim(),y=document.getElementById("ra").value.trim(),A=document.getElementById("rt").value.trim(),g=document.querySelector('input[name="rp"]:checked').value,b=document.getElementById("reg-msg");if(!I||!y||!A){b.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}b.innerHTML='<span style="color:#888">Guardando...</span>';try{const w=bl(i.length+1),f=vl(),R=await br({nombre:I,apellido:y,tel:A,...document.getElementById("re").value.trim()&&{email:document.getElementById("re").value.trim()},...document.getElementById("rf").value.trim()&&{familia:document.getElementById("rf").value.trim()},...document.getElementById("rc").value.trim()&&{comentarios:document.getElementById("rc").value.trim()},estado:g,codigo:w,token:f});b.innerHTML=`<span style="color:#3B6D11">✓ ${I} ${y} (${w})</span>`,["rn","ra","rt","re","rf","rc"].forEach(L=>{const F=document.getElementById(L);F&&(F.value="")}),g==="pagado"&&setTimeout(()=>window._abrirWA(R.id),600)}catch(w){b.innerHTML=`<span style="color:#A32D2D">Error: ${w.message}</span>`}};function m(){document.getElementById("tab-content").innerHTML=`
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
      </div>`}let v=[];window._procesarExcel=async I=>{const y=I.files[0];if(!y)return;const A=document.getElementById("excel-preview");A.innerHTML='<p style="font-size:12px;color:#888">Procesando...</p>';try{const g=await hn(()=>import("https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs"),[]),b=await y.arrayBuffer(),w=g.read(b),f=w.Sheets[w.SheetNames[0]],R=g.utils.sheet_to_json(f,{header:1}),L=typeof R[0][0]=="string"&&R[0][0].toLowerCase().includes("nombre")?1:0;v=R.slice(L).filter(F=>F[0]&&F[1]&&F[2]).map(F=>({nombre:String(F[0]||"").trim(),apellido:String(F[1]||"").trim(),tel:String(F[2]||"").trim(),...F[3]?{email:String(F[3]).trim()}:{},...F[4]?{familia:String(F[4]).trim()}:{},...F[5]?{comentarios:String(F[5]).trim()}:{},estado:String(F[6]||"").toUpperCase()==="SI"?"pagado":"pendiente"})),A.innerHTML=`
        <p style="font-size:12px;color:#3B6D11;margin-bottom:8px">
          ✓ ${v.length} invitados detectados
        </p>
        <div style="max-height:200px;overflow-y:auto;border:.5px solid #e0d5c8;border-radius:8px">
          ${v.slice(0,5).map(F=>`
            <div style="padding:6px 10px;border-bottom:.5px solid #f0ebe4;font-size:12px">
              ${F.nombre} ${F.apellido} · ${F.tel} · <span class="badge ${F.estado==="pagado"?"b-pago":"b-pend"}">${F.estado==="pagado"?"Pagado":"Pendiente"}</span>
            </div>`).join("")}
          ${v.length>5?`<div style="padding:6px 10px;font-size:11px;color:#aaa">...y ${v.length-5} más</div>`:""}
        </div>`,document.getElementById("btn-importar").style.display="block"}catch(g){A.innerHTML=`<p style="color:#A32D2D;font-size:12px">Error al leer el archivo: ${g.message}</p>`}},window._importarExcel=async()=>{if(!v.length)return;const I=document.getElementById("btn-importar"),y=document.getElementById("excel-msg");I.disabled=!0,I.textContent="Importando...",y.innerHTML='<span style="color:#888">Procesando...</span>';let A=0,g=0;const b=i.length;for(let w=0;w<v.length;w++)try{const f=v[w];await br({...f,codigo:bl(b+w+1),token:vl()}),A++}catch{g++}y.innerHTML=`<span style="color:#3B6D11">✓ ${A} invitados importados${g?` (${g} errores)`:""}</span>`,I.style.display="none",v=[]};function _(){const I=document.getElementById("tab-content");if(!o.length){I.innerHTML='<div class="empty">Sin pedidos aún 🍷</div>';return}I.innerHTML=o.map(y=>{var A;return`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">#${(A=y.fireId)==null?void 0:A.slice(-4).toUpperCase()}</span>
        <div style="flex:1;min-width:90px">
          <div style="font-size:12px;font-weight:500">${y.invNombre||""}</div>
          <div style="font-size:11px;color:#888">${y.standNombre}${y.retiro==="envio"?' · <span style="color:#5A1E99">Envío</span>':""}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:100px">${(y.items||[]).map(g=>g.desc).join(" · ")}</span>
        <span style="font-size:14px;font-weight:500">$${Vi(y.total||0)}</span>
        <span class="badge ${Qm[y.estado]}">${$m[y.estado]}</span>
      </div>`}).join("")}function C(){const I=window.location.origin;document.getElementById("tab-content").innerHTML=`
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>QR de pedidos:</strong> se imprime en el stand — los clientes lo escanean con su QR de acceso.<br>
        <strong>Panel stand:</strong> para el personal de la bodega (ver pedidos + marcar entregas).<br>
        <strong>Carga vinos:</strong> para que cada bodega cargue su carta directamente.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${qt.filter(y=>!y.oculto).map(y=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${y.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${y.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${y.region}</div>
            <canvas id="qr-s${y.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="font-size:10px;color:#aaa;margin-bottom:8px;word-break:break-all">${I}/stand/${y.id}</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${I}/stand/${y.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <div style="display:flex;gap:4px">
                <a href="${I}/panel/${y.id}?key=${y.key}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none;flex:1;justify-content:center">Panel</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#185FA5;border-color:#185FA5"
                  onclick="navigator.clipboard?.writeText('${I}/panel/${y.id}?key=${y.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="display:flex;gap:4px">
                <a href="${I}/bodega/${y.id}/vinos?key=${y.key}" target="_blank" class="btn" style="font-size:11px;padding:5px;text-decoration:none;color:#3A7D44;border-color:#3A7D44;flex:1;justify-content:center">Vinos</a>
                <button class="btn" style="font-size:11px;padding:5px;color:#3A7D44;border-color:#3A7D44"
                  onclick="navigator.clipboard?.writeText('${I}/bodega/${y.id}/vinos?key=${y.key}').then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)}).catch(()=>{})">📋</button>
              </div>
              <div style="font-size:10px;color:#aaa;margin-top:2px">Pass: <strong>${y.pass}</strong></div>
            </div>
          </div>`).join("")}
      </div>`,qt.forEach(y=>setTimeout(()=>yl("qr-s"+y.id,`${I}/stand/${y.id}`,110),50))}function T(){const I=i.filter(f=>f.estado==="pagado").length,y=i.filter(f=>f.estado==="ingresado").length,A=(I+y)*35e3,g=o.reduce((f,R)=>f+(R.total||0),0),b={};o.forEach(f=>{b[f.standId]||(b[f.standId]={n:f.standNombre,t:0,c:0,b:0}),b[f.standId].t+=f.total||0,b[f.standId].c++,(f.items||[]).forEach(R=>{const L=R.desc&&R.desc.match(/×(\d+)/);L&&(b[f.standId].b+=parseInt(L[1]))})});const w=Object.values(b).sort((f,R)=>R.t-f.t);document.getElementById("tab-content").innerHTML=`
      <div class="stats">
        ${[[i.filter(f=>f.estado!=="invalidado").length,"Invitados"],[I+y,"Con bono"],["$"+Vi(A),"Bonos"],[o.length,"Pedidos"],["$"+Vi(g),"Ventas"],[o.filter(f=>f.retiro==="envio").length+p.filter(f=>f.estado==="listo"||f.estado==="entregado").length,"Envíos"]].map(([f,R])=>`<div class="stat"><div class="v" style="font-size:${String(f).length>7?"13px":"20px"}">${f}</div><div class="l">${R}</div></div>`).join("")}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Ventas por bodega</p>
        ${w.length?w.map(f=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span style="font-weight:500;flex:1">${f.n}</span><span style="color:#888;flex:1;text-align:center">${f.c} ped. · ${f.b} bot.</span><span style="font-weight:500;flex:0;white-space:nowrap">$${Vi(f.t)}</span>
          </div>`).join(""):'<div class="empty">Sin ventas aún</div>'}
      </div>`}function D(){const I=document.getElementById("tab-body"),y=s.filter(A=>A.estado==="cancelado");if(!y.length){I.innerHTML='<div class="empty" style="padding:40px">Sin pedidos cancelados 👍</div>';return}I.innerHTML=`
      <div style="background:#FEE2E2;border:1px solid #FCA5A5;border-radius:8px;
        padding:10px 14px;margin-bottom:14px;font-size:12px;color:#991B1B">
        ⚠️ Estos pedidos fueron cancelados después de cobrar. Los QR asociados ya no son válidos
        pero pueden haber sido impresos o enviados por WhatsApp.
      </div>
      ${y.map(A=>{const g=A.canceladoAt?new Date(A.canceladoAt).toLocaleString("es-AR"):"Sin fecha";return`
        <div class="card" style="margin-bottom:8px;border-left:4px solid #C0392B;opacity:.9">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
            <div>
              <div style="font-size:14px;font-weight:500;color:#1A3A5C">${A.invNombre||"Invitado"}</div>
              <div style="font-size:11px;color:#888">${A.invCodigo||""} · ${A.standNombre}</div>
            </div>
            <span class="badge" style="background:#C0392B;color:#fff">❌ Cancelado</span>
          </div>
          <div style="font-size:12px;color:#666;margin-bottom:4px">
            ${(A.items||[]).map(b=>b.desc).join(" · ")}
          </div>
          <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:500">
            <span style="color:#888">Cancelado: ${g}</span>
            <span style="color:#C0392B">$${Number(A.total||0).toLocaleString("es-AR")}</span>
          </div>
          ${A.canceladoMotivo?`<div style="font-size:11px;color:#aaa;margin-top:3px">${A.canceladoMotivo}</div>`:""}
        </div>`}).join("")}
      <div style="font-size:12px;color:#888;text-align:right;margin-top:8px">
        Total cancelado: <strong style="color:#C0392B">
          $${y.reduce((A,g)=>A+(g.total||0),0).toLocaleString("es-AR")}
        </strong>
      </div>`}async function V(){const I=document.getElementById("tab-content");I.innerHTML='<div class="empty">Cargando stock...</div>';let y=[];try{const g=i.map(b=>b.fireId);y=await vd(g),console.log("CARRITOS:",y.length)}catch(g){console.log("ERROR carritos:",g)}const A={};if(o.forEach(g=>{(g.items||[]).forEach(b=>{const w=g.standId+"_"+(b.vinoId||b.vinoNombre||"");A[w]||(A[w]={reservado:0,pagado:0,entregado:0});const f=b.qty||1;g.estado==="pagado"||g.estado==="listo"?A[w].pagado+=f:g.estado==="entregado"?A[w].entregado+=f:g.estado!=="cancelado"&&g.estado!=="reembolsado"&&(A[w].reservado+=f)})}),!a.length){I.innerHTML='<div class="empty" style="padding:40px">Sin stock cargado todavía.<br><br>Cargá el stock desde la pantalla de vinos de cada bodega.</div>';return}I.innerHTML=`
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
${a.map((g,b)=>{const w=A[g.standId+"_"+g.vinoId]||{pagado:0,entregado:0},f=qt.find(j=>Number(j.id)===Number(g.standId)),R=(g.total||0)-(g.degustacion||0)-(g.reservado||0)-(g.pagado||0)-(g.entregado||0),L=R<=0?"#C0392B":R<=3?"#D97706":"#3A7D44";return'<tr style="background:'+(b%2===0?"#fff":"#F8FAFC")+';border-bottom:.5px solid #E8EFF5"><td style="padding:8px"><div style="font-weight:500;color:#1A3A5C">'+(g.vinoNombre||g.vinoId)+'</div><div style="font-size:11px;color:#888">Stand #'+g.standId+" · "+((f==null?void 0:f.nombre)||"")+'</div></td><td style="padding:8px;text-align:center;font-weight:500">'+(g.total||0)+'</td><td style="padding:8px;text-align:center;color:#D97706">'+(g.degustacion||0)+'</td><td style="padding:8px;text-align:center">'+(g.reservado||0)+'</td><td style="padding:8px;text-align:center">'+w.pagado+'</td><td style="padding:8px;text-align:center">'+w.entregado+'</td><td style="padding:8px;text-align:center;font-weight:600;color:'+L+'">'+Math.max(0,R)+'</td><td style="padding:8px;text-align:center"><button class="btn" style="font-size:10px;padding:3px 6px;margin-bottom:3px;display:block;width:100%" data-sid="'+g.standId+'" data-vid="'+g.vinoId+'" data-nom="'+encodeURIComponent(g.vinoNombre||g.vinoId)+'" onclick="window._agregarStock(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">+ Stock</button><button class="btn" style="font-size:10px;padding:3px 6px;color:#D97706;border-color:#D97706;display:block;width:100%" data-sid="'+g.standId+'" data-vid="'+g.vinoId+'" data-nom="'+encodeURIComponent(g.vinoNombre||g.vinoId)+'" onclick="window._agregarDegustation(this.dataset.sid,this.dataset.vid,decodeURIComponent(this.dataset.nom))">Degust.</button></td></tr>'}).join("")}
          </tbody>
        </table>
      </div>`}window._agregarStock=async(I,y,A)=>{const g=parseInt(prompt("Agregar stock para "+A+`
¿Cuántas botellas agregar?`));!g||g<=0||(await to(I,y,g),V())},window._agregarDegustation=async(I,y,A)=>{const g=parseInt(prompt("Registrar degustación para "+A+`
¿Cuántas botellas se abrieron?`));!g||g<=0||(await md(I,y,g),V())};function P(){document.getElementById("tab-content").innerHTML=`
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">🔗 Links útiles</p>
        ${[["Registro público (para compartir con invitados)","/registro"],["Panel de caja","/caja"],["Control de puerta","/puerta"],["Logística / envíos","/logistica"]].map(([I,y])=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span>${I}</span>
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
        <button class="btn btn-red" style="width:100%;padding:10px" onclick="window._limpiar()">
          🗑 Limpiar todos los datos de prueba
        </button>
        <div id="limpiar-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
      </div>`}function M(I,y){const A=window.location.origin+"/familia/"+encodeURIComponent(I.toLowerCase())+"?key="+y,g=document.getElementById("familia-result");g.innerHTML='<div style="margin-top:6px;padding:8px;background:#f0f4f8;border-radius:6px;word-break:break-all"><div style="font-size:11px;color:#888;margin-bottom:4px">Link para familia '+I+':</div><a href="'+A+'" target="_blank" style="color:#1A3A5C;font-size:12px">'+A+`</a><button onclick="navigator.clipboard.writeText(this.dataset.link).then(()=>this.textContent='Copiado!')" data-link="`+A+'" style="display:block;margin-top:8px;padding:6px 12px;border-radius:6px;border:1px solid #1A3A5C;background:#fff;color:#1A3A5C;font-size:12px;cursor:pointer;width:100%">Copiar link</button><button onclick="window._regenerarLinkFamilia()" style="display:block;margin-top:4px;padding:6px 12px;border-radius:6px;border:1px solid #C0392B;background:#fff;color:#C0392B;font-size:12px;cursor:pointer;width:100%">Regenerar link (invalida el anterior)</button></div>'}window._generarLinkFamilia=async()=>{const I=document.getElementById("familia-apellido").value.trim(),y=document.getElementById("familia-result");if(!I){y.innerHTML='<span style="color:#C0392B">Ingresá un apellido</span>';return}y.innerHTML='<span style="color:#888">Buscando...</span>';try{const A=await xd(I);if(A)M(I,A);else{const g=Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,10);await Ar(I,g),M(I,g)}}catch(A){y.innerHTML='<span style="color:#C0392B">Error: '+A.message+"</span>"}},window._regenerarLinkFamilia=async()=>{const I=document.getElementById("familia-apellido").value.trim(),y=document.getElementById("familia-result");if(confirm("¿Seguro? El link anterior dejará de funcionar.")){y.innerHTML='<span style="color:#888">Regenerando...</span>';try{const A=Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,10);await Ar(I,A),M(I,A)}catch(A){y.innerHTML='<span style="color:#C0392B">Error: '+A.message+"</span>"}}},window._cambiarPin=()=>{const I=document.getElementById("nuevo-pin").value.trim(),y=document.getElementById("pin-msg");if(!/^\d{4}$/.test(I)){y.innerHTML='<span style="color:#C0392B">El PIN debe tener exactamente 4 digitos</span>';return}localStorage.setItem("sucovi-admin-pin",I),sessionStorage.setItem("admin-pin",I),y.innerHTML='<span style="color:#3B6D11">PIN actualizado correctamente</span>',document.getElementById("nuevo-pin").value=""},window._limpiar=async()=>{if(!confirm(`⚠️ ¿Seguro? Esto borra TODOS los invitados y pedidos.
Esta acción no se puede deshacer.`)||!confirm("Segunda confirmación: ¿borrar todos los datos de prueba?"))return;const I=document.getElementById("limpiar-msg");I.innerHTML='<span style="color:#888">Borrando...</span>';try{await fd(),I.innerHTML='<span style="color:#3B6D11">✓ Datos borrados correctamente</span>'}catch(y){I.innerHTML=`<span style="color:#A32D2D">Error: ${y.message}</span>`}},window._abrirWA=I=>{const y=i.find(R=>R.fireId===I);if(!y)return;d=I,document.getElementById("mw-tit").textContent=y.nombre+" "+y.apellido,document.getElementById("mw-cod").textContent=y.codigo||"",document.getElementById("mw-bdg").innerHTML=xl(y.estado);const A=window.location.origin,g=`${A}/acceso?inv=${y.token}`;document.getElementById("mw-link").textContent=g;const b=y.estado==="ingresado"?`Hola ${y.nombre}! 🍷

Ya estás dentro de SUCOVI 2027 — ¡disfrutá la noche!

Si necesitás tu QR para los stands:
👉 ${g}

_Personal e intransferible._`:y.estado==="pagado"?`Hola ${y.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${g}

_Personal e intransferible. Un solo uso en la entrada._`:`Hola ${y.nombre}! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`;document.getElementById("mw-msg").textContent=b;const w=document.getElementById("mw-btn-p"),f=document.getElementById("mw-badge-estado");y.estado==="pendiente"?(w.textContent="✓ Marcar como pagado",w.disabled=!1,w.style.display="block",w.style.background="#D97706",w.style.borderColor="#D97706",f&&(f.textContent="⏳ Pendiente",f.style.background="#FEF3C7",f.style.color="#92400E")):y.estado==="ingresado"?(w.style.display="none",f&&(f.textContent="✅ Ingresó al evento",f.style.background="#D1FAE5",f.style.color="#065F46")):(w.style.display="none",f&&(f.textContent="✅ Bono confirmado",f.style.background="#D1FAE5",f.style.color="#065F46")),yl("mw-canvas",y.codigo||y.fireId,80),document.getElementById("modal-wa").style.display="flex"},window._descargarQR=async I=>{const y=i.find(ft=>ft.fireId===I);if(!y)return;window.qrcode||await new Promise((ft,yt)=>{const ce=document.createElement("script");ce.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",ce.onload=ft,ce.onerror=yt,document.head.appendChild(ce)});const g=window.location.origin+"/acceso?inv="+y.token,b=document.createElement("canvas"),w=600,f=800;b.width=w,b.height=f;const R=b.getContext("2d"),L=R.createLinearGradient(0,0,0,f);L.addColorStop(0,"#1A3A5C"),L.addColorStop(.55,"#2C5F8A"),L.addColorStop(1,"#3A7D44"),R.fillStyle=L,R.fillRect(0,0,w,f),R.fillStyle="#C9A96E",R.fillRect(0,f-4,w,4),R.fillStyle="rgba(255,255,255,0.7)",R.font="500 18px system-ui, -apple-system, sans-serif",R.textAlign="center",R.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",w/2,54),R.fillStyle="#ffffff",R.font="500 38px system-ui, -apple-system, sans-serif",R.fillText(y.nombre+" "+y.apellido,w/2,110),R.fillStyle="rgba(255,255,255,0.75)",R.font="400 22px system-ui, -apple-system, sans-serif",R.fillText(y.codigo,w/2,146),R.fillStyle="#3A7D44";const F=200,j=34,Q=w/2-F/2,G=164;N(R,Q,G,F,j,17),R.fill(),R.fillStyle="#ffffff",R.font="500 15px system-ui, -apple-system, sans-serif",R.fillText("✅ Bono confirmado",w/2,G+23);const K=320,U=340,lt=w/2-K/2,tt=220;R.fillStyle="#ffffff",N(R,lt,tt,K,U,16),R.fill();const _t=qrcode(0,"M");_t.addData(g),_t.make();const gt=_t.getModuleCount(),ie=240,Gt=lt+(K-ie)/2,ge=tt+24,oe=ie/gt;R.fillStyle="#000000";for(let ft=0;ft<gt;ft++)for(let yt=0;yt<gt;yt++)_t.isDark(ft,yt)&&R.fillRect(Gt+yt*oe,ge+ft*oe,oe,oe);R.fillStyle="#1A3A5C",R.font="500 26px system-ui, -apple-system, sans-serif",R.fillText(y.codigo,w/2,tt+U-44),R.fillStyle="#888",R.font="400 14px system-ui, -apple-system, sans-serif",R.fillText("Mostrá este QR en la entrada",w/2,tt+U-20),R.fillStyle="rgba(255,255,255,0.85)",R.font="400 18px system-ui, -apple-system, sans-serif",R.fillText("Sáb 20 jun 2026  ·  19:30 hs",w/2,tt+U+50),R.fillText("Roma 656, Olivos",w/2,tt+U+80),R.fillStyle="rgba(255,255,255,0.5)",R.font="400 13px system-ui, -apple-system, sans-serif",R.fillText("Personal e intransferible · Un solo uso en la entrada",w/2,f-24),await new Promise(ft=>{const yt=new Image;yt.onload=()=>{const De=w-70-20,Ve=f-70-20;R.save(),R.beginPath(),R.arc(De+70/2,Ve+70/2,70/2+3,0,Math.PI*2),R.fillStyle="rgba(255,255,255,0.25)",R.fill(),R.beginPath(),R.arc(De+70/2,Ve+70/2,70/2,0,Math.PI*2),R.clip(),R.drawImage(yt,De,Ve,70,70),R.restore(),ft()},yt.onerror=ft,yt.src=bs});const Kt=document.createElement("a");Kt.download="QR-"+y.codigo+".png",Kt.href=b.toDataURL("image/png"),Kt.click()};function N(I,y,A,g,b,w){I.beginPath(),I.moveTo(y+w,A),I.lineTo(y+g-w,A),I.quadraticCurveTo(y+g,A,y+g,A+w),I.lineTo(y+g,A+b-w),I.quadraticCurveTo(y+g,A+b,y+g-w,A+b),I.lineTo(y+w,A+b),I.quadraticCurveTo(y,A+b,y,A+b-w),I.lineTo(y,A+w),I.quadraticCurveTo(y,A,y+w,A),I.closePath()}let q=null;window._editarInv=I=>{const y=i.find(A=>A.fireId===I);y&&(q=I,document.getElementById("edit-nom").value=y.nombre||"",document.getElementById("edit-ape").value=y.apellido||"",document.getElementById("edit-tel").value=y.tel||"",document.getElementById("edit-email").value=y.email||"",document.getElementById("edit-familia").value=y.familia||"",document.getElementById("edit-comentarios").value=y.comentarios||"",document.getElementById("edit-estado").value=y.estado||"pendiente",document.getElementById("edit-msg").innerHTML="",document.getElementById("modal-edit").style.display="flex")},window._guardarEdit=async()=>{const I=document.getElementById("edit-msg"),y=document.getElementById("edit-nom").value.trim(),A=document.getElementById("edit-ape").value.trim(),g=document.getElementById("edit-tel").value.trim();if(!y||!A||!g){I.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}I.innerHTML='<span style="color:#888">Guardando...</span>';const b={nombre:y,apellido:A,tel:g,estado:document.getElementById("edit-estado").value,...document.getElementById("edit-email").value.trim()&&{email:document.getElementById("edit-email").value.trim()},...document.getElementById("edit-familia").value.trim()&&{familia:document.getElementById("edit-familia").value.trim()},...document.getElementById("edit-comentarios").value.trim()&&{comentarios:document.getElementById("edit-comentarios").value.trim()}};try{await Ae(q,b),I.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEdit(),1200)}catch(w){I.innerHTML=`<span style="color:#C0392B">Error: ${w.message}</span>`}},window._cerrarEdit=()=>{document.getElementById("modal-edit").style.display="none",q=null},window._pagarM=async()=>{const I=i.find(f=>f.fireId===d);if(!I||I.estado!=="pendiente")return;const y=document.getElementById("mw-btn-p");y&&(y.disabled=!0,y.textContent="✓ Pagado",y.style.background="#3A7D44",y.style.borderColor="#3A7D44");const A=document.getElementById("mw-badge-estado");A&&(A.textContent="✅ Bono pagado",A.style.background="#D1FAE5",A.style.color="#065F46");const g=`${window.location.origin}/acceso?inv=${I.token}`,b=`Hola ${I.nombre}! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 ${g}

_Personal e intransferible. Un solo uso en la entrada._`,w=document.getElementById("mw-msg");w&&(w.textContent=b),await Ae(I.fireId,{estado:"pagado"})},window._envWA=()=>{const I=document.getElementById("mw-msg").textContent,y=i.find(g=>g.fireId===d),A=((y==null?void 0:y.tel)||"").replace(/\D/g,"");A?window.open("https://wa.me/"+A+"?text="+encodeURIComponent(I),"_blank"):alert("Sin teléfono cargado")},window._copWA=()=>{var A;(A=navigator.clipboard)==null||A.writeText(document.getElementById("mw-msg").textContent).catch(()=>{});const I=document.querySelector("#modal-wa .btn-g"),y=I.innerHTML;I.innerHTML="✓ ¡Copiado!",setTimeout(()=>I.innerHTML=y,2e3)},window._cModal=()=>{document.getElementById("modal-wa").style.display="none",d=null},x()}const jt=n=>Number(n).toLocaleString("es-AR");async function wl(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Wm(n){ne();let t=[],e=[],i="cobrar",o=null,s=[],a=null,l=!1;n.innerHTML=Ht({title:"💰 Caja central",sub:"Sucovi 2027 · Roma 656, Olivos",backHref:"/admin"})+`
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
    </div>`,xo(g=>{t=g,i==="cobrar"&&!o&&x()}),wo(g=>{e=g,i!=="cobrar"&&d()}),window._cajaVista=(g,b)=>{i=g,o=null,document.querySelectorAll(".nav button").forEach(w=>w.classList.remove("on")),b.classList.add("on"),d()};function d(){i==="cobrar"&&h(),i==="pedidos"&&_(),i==="especial"&&V()}let p={};async function x(){const g=t.filter(w=>w.estado==="ingresado"),b=await Promise.all(g.map(async w=>{try{const R=(await xr(w.fireId)).filter(j=>{var Q;return(Q=j.items)==null?void 0:Q.length});if(!R.length)return null;const L=R.reduce((j,Q)=>j+(Q.items||[]).reduce((G,K)=>G+(K.sub||0),0),0),F=R.reduce((j,Q)=>j+(Q.items||[]).length,0);return{fireId:w.fireId,total:L,cant:F,stands:R.length}}catch{return null}}));p={},b.filter(Boolean).forEach(w=>{p[w.fireId]=w}),m()}function h(){const g=document.getElementById("caja-content");if(o){v();return}g.innerHTML=`
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <input id="buscar-caja" placeholder="Buscar por nombre o código..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda">
        <p style="font-size:12px;color:#888;margin-bottom:8px">Cargando carritos activos...</p>
      </div>`,t.length&&x()}function m(){var f;const g=document.getElementById("resultados-busqueda");if(!g)return;const b=(((f=document.getElementById("buscar-caja"))==null?void 0:f.value)||"").toLowerCase().trim();let w=t.filter(R=>R.estado!=="invalidado");if(b?w=w.filter(R=>(R.codigo||"").toLowerCase().includes(b)||(R.nombre+" "+R.apellido).toLowerCase().includes(b)):w=w.filter(R=>p[R.fireId]),!w.length){g.innerHTML=b?'<div class="empty">Sin resultados</div>':'<div class="empty" style="padding:24px">Sin carritos activos — nadie ha agregado vinos todavía 🍷</div>';return}g.innerHTML=(b?"":`<p style="font-size:11px;color:#888;margin-bottom:8px;font-weight:500">CARRITOS ACTIVOS (${w.length})</p>`)+w.map(R=>{const L=p[R.fireId];return`
        <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
          align-items:center;gap:10px" onclick="window._seleccionarInv('${R.fireId}')">
          <div class="avatar">${R.nombre[0]}${R.apellido[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${R.nombre} ${R.apellido}</div>
            <div style="font-size:12px;color:#888">${R.codigo} · ${R.tel}</div>
            ${L?`<div style="font-size:12px;color:#3A7D44;font-weight:500;margin-top:2px">
              🍷 ${L.cant} ítem${L.cant>1?"s":""} · $${Number(L.total).toLocaleString("es-AR")}
              <span style="color:#888;font-weight:400"> · ${L.stands} stand${L.stands>1?"s":""}</span>
            </div>`:'<div style="font-size:11px;color:#aaa;margin-top:2px">Carrito vacío</div>'}
          </div>
          <span class="badge ${R.estado==="pagado"||R.estado==="ingresado"?"b-pago":"b-pend"}">
            ${R.estado==="pagado"||R.estado==="ingresado"?"Bono pagado":"Pendiente"}
          </span>
          <span style="color:#1A3A5C;font-size:18px">›</span>
        </div>`}).join("")}window._buscarInv=(g=!1)=>{var f;const b=(((f=document.getElementById("buscar-caja"))==null?void 0:f.value)||"").toLowerCase().trim();if(!b){m();return}const w=t.filter(R=>R.estado!=="invalidado"&&((R.codigo||"").toLowerCase().includes(b)||(R.nombre+" "+R.apellido).toLowerCase().includes(b)));if(g&&w.length===1){window._seleccionarInv(w[0].fireId);return}m()},window._seleccionarInv=async g=>{o=t.find(b=>b.fireId===g),o&&(s=await xr(g),v())};async function v(){const g=document.getElementById("caja-content");if(!g)return;const b=o,w=s.filter(L=>{var F;return(F=L.items)==null?void 0:F.length}),f=w.reduce((L,F)=>L+(F.items||[]).reduce((j,Q)=>j+(Q.sub||0),0),0),R=e.filter(L=>L.invFireId===b.fireId);g.innerHTML=`
      <button class="btn" onclick="window._volverCobrar()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Buscar otro</button>
      <div class="card" style="margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div class="avatar" style="width:44px;height:44px;font-size:15px">
            ${b.nombre[0]}${b.apellido[0]}
          </div>
          <div>
            <div style="font-size:16px;font-weight:500">${b.nombre} ${b.apellido}</div>
            <div style="font-size:12px;color:#888">${b.codigo}${b.tel?" · "+b.tel:""}</div>
          </div>
        </div>
        ${R.length?`<div style="background:#D1FAE5;border-radius:6px;padding:6px 10px;
          font-size:12px;color:#065F46">
          ✅ Ya tiene ${R.length} pedido${R.length>1?"s":""} pagado${R.length>1?"s":""} esta noche
        </div>`:""}
      </div>

      ${w.length?`
        ${w.map(L=>`
          <div class="card" style="margin-bottom:10px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">
              🍷 ${L.standNombre} · Stand #${L.standId}
              ${L.retiro==="envio"?'<span class="badge b-envi" style="margin-left:6px">🚚 Envío</span>':""}
            </div>
            ${(L.items||[]).map(F=>`
              <div style="display:flex;justify-content:space-between;font-size:13px;
                color:#555;padding:4px 0;border-bottom:.5px solid #f5f0eb">
                <span>${F.desc}</span><strong>$${jt(F.sub)}</strong>
              </div>`).join("")}
            <div style="display:flex;justify-content:space-between;font-size:13px;
              font-weight:500;margin-top:8px;padding-top:6px;border-top:.5px solid #D6E4F0">
              <span>Subtotal</span>
              <span>$${jt((L.items||[]).reduce((F,j)=>F+(j.sub||0),0))}</span>
            </div>
          </div>`).join("")}
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL</span><span style="color:#1A3A5C">$${jt(f)}</span>
          </div>
          <p style="font-size:12px;color:#888;margin-top:4px">
            ${w.length} stand${w.length>1?"s":""}
          </p>
        </div>
        <div id="cobro-msg" style="font-size:12px;text-align:center;margin-bottom:8px"></div>
        <button class="btn btn-g" style="width:100%;padding:14px;font-size:16px;margin-bottom:8px"
          onclick="window._cobrar()">
          ✓ Cobrar $${jt(f)} y generar vouchers
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
            ${b.nombre} todavía no agregó vinos desde los stands.
          </p>
        </div>`}
    `}window._imprimirVouchers=()=>{const{inv:g,items:b}=window._lastCobrado||{};if(!g||!b)return;const w=R=>Number(R).toLocaleString("es-AR"),f=window.open("","_blank");f.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <title>Vouchers - ${g.nombre} ${g.apellido}</title>
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
    ${window._lastPedidosIds?window._lastPedidosIds.map((R,L)=>{const F=b[L];return F?`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${F.standId}</div>
              <div class="voc-num">${window._lastPedidosIds&&b[L]?"VOC-"+String((window._lastVoucherNums||[])[L]||0).padStart(3,"0"):"VOC-000"}</div>
              <div class="stand">${F.standNombre}</div>
              <div class="inv">${g.nombre} ${g.apellido} · ${g.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(F.items||[]).map(j=>`
            <div class="item"><span>${j.desc}</span><strong>$${w(j.sub)}</strong></div>
          `).join("")}
          <div class="total">
            <span>Total</span>
            <span>$${w((F.items||[]).reduce((j,Q)=>j+(Q.sub||0),0))}</span>
          </div>
        </div>
        <div class="qr-box">
          <canvas id="qr-${L}"></canvas>
          <div class="qr-hint">Escaneá en el stand</div>
        </div>
      </div>`:""}).join(""):b.map(R=>`
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${R.standId}</div>
              <div class="voc-num">${window._lastPedidosIds&&b[idx]?"VOC-"+String((window._lastVoucherNums||[])[idx]||0).padStart(3,"0"):"VOC-000"}</div>
              <div class="stand">${R.standNombre}</div>
              <div class="inv">${g.nombre} ${g.apellido} · ${g.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(R.items||[]).map(L=>`
            <div class="item"><span>${L.desc}</span><strong>$${w(L.sub)}</strong></div>
          `).join("")}
          <div class="total"><span>Total</span><span>$${w((R.items||[]).reduce((L,F)=>L+(F.sub||0),0))}</span></div>
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
    </body></html>`),f.document.close()},window._enviarVouchersWA=()=>{var Q;const{inv:g,items:b}=window._lastCobrado||{};if(!g||!b)return;const w=G=>Number(G).toLocaleString("es-AR"),f=b.map(G=>{const K=(G.items||[]).reduce((lt,tt)=>lt+(tt.sub||0),0),U=(G.items||[]).map(lt=>`  • ${lt.desc}: $${w(lt.sub)}`).join(`
`);return`🍷 *${G.standNombre}* (Stand #${G.standId})
${U}
  Total: $${w(K)}`}).join(`

`),R=b.reduce((G,K)=>G+(K.items||[]).reduce((U,lt)=>U+(lt.sub||0),0),0),L=`Hola ${g.nombre}! 🍷

Aquí están tus vouchers de SUCOVI 2027:

${f}

💰 *Total pagado: $${w(R)}*

Presentá cada voucher en el stand correspondiente para retirar tus vinos. 

_Sáb 20 jun 2026 · Roma 656, Olivos_`,j="https://wa.me/54"+((Q=g.tel)==null?void 0:Q.replace(/\D/g,""))+"?text="+encodeURIComponent(L);window.open(j,"_blank")},window._cancelarCarrito=async()=>{if(confirm("¿Cancelar y vaciar el carrito de "+o.nombre+"?")){for(const g of s)for(const b of g.items||[])b.vinoId&&await ys(g.standId,b.vinoId,b.qty||1).catch(()=>{});await wr(o.fireId),o=null,s=[],h()}},window._volverCobrar=()=>{o=null,s=[],h()},window._cobrar=async()=>{const g=o,b=s.filter(R=>{var L;return(L=R.items)==null?void 0:L.length});if(!b.length)return;const w=document.querySelector("#caja-content .btn-g");w&&(w.disabled=!0,w.textContent="Procesando...");const f=document.getElementById("cobro-msg");try{await od(g,b);for(const F of b)for(const j of F.items||[])j.vinoId&&await yd(F.standId,j.vinoId,j.qty||1).catch(()=>{});await wr(g.fireId),f.innerHTML=`<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${b.length} voucher${b.length>1?"s":""} generado${b.length>1?"s":""}.
      </span>`,w&&(w.style.display="none");const R=document.getElementById("voucher-actions");R&&(R.style.display="flex"),window._lastCobrado={inv:g,items:b};const{escucharPedidosPorInvitado:L}=await hn(async()=>{const{escucharPedidosPorInvitado:F}=await Promise.resolve().then(()=>ni);return{escucharPedidosPorInvitado:F}},void 0);L(g.fireId,F=>{const j=F.filter(Q=>b.some(G=>G.standId===Q.standId));window._lastPedidosIds=j.map(Q=>Q.fireId),window._lastVoucherNums=j.map(Q=>Q.voucherNum||0),console.log("voucherNums:",window._lastVoucherNums)})}catch(R){f.innerHTML=`<span style="color:#C0392B">Error: ${R.message}</span>`,w&&(w.disabled=!1,w.textContent="Reintentar")}};function _(){const g=document.getElementById("caja-content"),b=e.filter(R=>R.retiro!=="envio"),w={pagado:"b-pago",listo:"b-list",entregado:"b-entr"};if(!b.length){g.innerHTML='<div class="empty">Sin pedidos aún</div>';return}const f={};b.forEach(R=>{f[R.invFireId]||(f[R.invFireId]={nombre:R.invNombre,codigo:R.invCodigo||"",peds:[]}),f[R.invFireId].peds.push(R)}),g.innerHTML=Object.entries(f).map(([R,L])=>{var j;const F=L.peds.reduce((Q,G)=>Q+(G.total||0),0);return`
      <div class="card" style="margin-bottom:10px;cursor:pointer" onclick="window._verDetallePedido('${R}')">
        <div style="display:flex;align-items:center;gap:8px">
          <div class="avatar" style="width:36px;height:36px;font-size:12px;flex-shrink:0">
            ${(L.nombre||"??")[0]}${((j=(L.nombre||"??").split(" ")[1])==null?void 0:j[0])||""}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${L.nombre||""}</div>
            <div style="font-size:11px;color:#888">${L.peds.length} stand${L.peds.length>1?"s":""} · ${L.peds.map(Q=>'<span class="badge '+w[Q.estado]+'" style="font-size:10px">'+Q.standNombre+"</span>").join(" ")}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:15px;font-weight:500">$${jt(F)}</div>
            <div style="font-size:11px;color:#5BA4CF">Ver detalle ›</div>
          </div>
        </div>
      </div>`}).join("")}window._verDetallePedido=g=>{var G,K;const b=document.getElementById("caja-content"),w=e.filter(U=>U.invFireId===g),f=t.find(U=>U.fireId===g)||{nombre:((G=w[0])==null?void 0:G.invNombre)||"",apellido:"",codigo:((K=w[0])==null?void 0:K.invCodigo)||"",tel:""},R=w.filter(U=>U.estado!=="reembolsado"&&U.estado!=="cancelado").map(U=>({standId:U.standId,standNombre:U.standNombre,retiro:U.retiro,items:U.items||[],fireId:U.fireId})),L=w.filter(U=>U.estado!=="reembolsado"&&U.estado!=="cancelado").reduce((U,lt)=>U+(lt.total||0),0);window._lastCobrado={inv:f,items:R},window._lastPedidosIds=w.filter(U=>U.estado==="pagado").map(U=>U.fireId),window._lastVoucherNums=w.filter(U=>U.estado==="pagado").map(U=>U.voucherNum||0);const F={pagado:"#5BA4CF",entregado:"#3A7D44",reembolsado:"#C0392B",cancelado:"#C0392B",listo:"#D97706"},j={pagado:"b-pago",listo:"b-list",entregado:"b-entr",reembolsado:"b-canc",cancelado:"b-canc"},Q={pagado:"💳 Pagado",listo:"✅ Listo",entregado:"📦 Entregado",reembolsado:"↩️ Reembolsado",cancelado:"❌ Cancelado"};b.innerHTML=`
      <button class="btn" onclick="window._cajaVista('pedidos', document.querySelector('.nav button:nth-child(2)'))"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>
      <div class="card" style="margin-bottom:12px">
        <div style="font-size:16px;font-weight:500">${f.nombre} ${f.apellido}</div>
        <div style="font-size:12px;color:#888">${f.codigo}${f.tel?" · "+f.tel:""}</div>
      </div>
      ${w.map(U=>`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${F[U.estado]||"#5BA4CF"};
          ${U.estado==="reembolsado"||U.estado==="cancelado"?"opacity:.7":""}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C">🍷 ${U.standNombre}</div>
            <span class="badge ${j[U.estado]||"b-pago"}">${Q[U.estado]||U.estado}</span>
          </div>
          ${(U.items||[]).map(lt=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555;
              ${U.estado==="reembolsado"||U.estado==="cancelado"?"text-decoration:line-through":""}">
              <span>${lt.desc}</span><strong>$${jt(lt.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Subtotal</span>
            <span ${U.estado==="reembolsado"||U.estado==="cancelado"?'style="text-decoration:line-through;color:#C0392B"':""}>
              $${jt(U.total||0)}
            </span>
          </div>
          ${U.estado==="pagado"?`
            <button class="btn" style="margin-top:10px;width:100%;padding:7px;font-size:12px;
              color:#C0392B;border-color:#C0392B"
              onclick="window._reembolsarUnPedido('${U.fireId}','${g}')">
              ↩️ Reembolsar este stand
            </button>`:""}
          ${U.estado==="reembolsado"?`
            <div style="font-size:11px;color:#C0392B;margin-top:6px">
              Reembolsado el ${U.reembolsadoAt?new Date(U.reembolsadoAt).toLocaleString("es-AR"):""}
            </div>`:""}
        </div>`).join("")}
      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>TOTAL COBRADO</span><span style="color:#1A3A5C">$${jt(L)}</span>
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
      </div>`},window._reembolsarUnPedido=async(g,b)=>{confirm("¿Reembolsar este pedido? El stand no podrá marcarlo como entregado.")&&(await ad(g),window._verDetallePedido(b))},window._descargarVoucherPDF=async()=>{const{inv:g,items:b}=window._lastCobrado||{};if(!g||!b)return;window.jspdf||await new Promise((j,Q)=>{const G=document.createElement("script");G.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",G.onload=j,G.onerror=Q,document.head.appendChild(G)}),window.qrcode||await new Promise((j,Q)=>{const G=document.createElement("script");G.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",G.onload=j,G.onerror=Q,document.head.appendChild(G)});const{jsPDF:w}=window.jspdf,f=new w({unit:"mm",format:"a4"}),R=window._lastPedidosIds||[];let L=15;const F=(j,Q,G,K)=>{const U=(j.items||[]).length,lt=Math.max(90,62+U*7);f.setDrawColor(26,58,92),f.setLineWidth(.5),f.roundedRect(10,K,190,lt,3,3,"S"),f.setFillColor(26,58,92),f.roundedRect(10,K,190,16,3,3,"F"),f.rect(10,K+10,190,6,"F"),f.setTextColor(180,180,180),f.setFontSize(7),f.setFont("helvetica","normal"),f.text("SUCOVI 2027  .  VOUCHER DE RETIRO",15,K+7),f.text("Stand #"+j.standId,195,K+7,{align:"right"});const tt=G?"VOC-"+String(G).padStart(3,"0"):"VOC-000";f.setTextColor(255,255,255),f.setFontSize(18),f.setFont("helvetica","bold"),f.text(tt,15,K+14),f.setFillColor(58,125,68),f.roundedRect(158,K+9,38,8,2,2,"F"),f.setTextColor(255,255,255),f.setFontSize(8),f.setFont("helvetica","bold"),f.text("V PAGADO",177,K+14.5,{align:"center"}),f.setTextColor(26,58,92),f.setFontSize(14),f.setFont("helvetica","bold"),f.text(j.standNombre,15,K+26),f.setFontSize(9),f.setFont("helvetica","normal"),f.setTextColor(100,100,100),f.text((g.nombre||"")+" "+(g.apellido||"")+"  .  "+(g.codigo||""),15,K+33),f.setDrawColor(220,220,220),f.setLineWidth(.3),f.line(15,K+37,195,K+37);let _t=K+44;if((j.items||[]).forEach(gt=>{f.setFontSize(10),f.setFont("helvetica","normal"),f.setTextColor(50,50,50),f.text(gt.desc,15,_t),f.setFont("helvetica","bold"),f.setTextColor(30,30,30),f.text("$"+Number(gt.sub).toLocaleString("es-AR"),145,_t,{align:"right"}),f.setFont("helvetica","normal"),_t+=7}),f.setDrawColor(180,180,180),f.setLineWidth(.3),f.line(15,_t,145,_t),_t+=6,f.setFontSize(12),f.setFont("helvetica","bold"),f.setTextColor(26,58,92),f.text("Total",15,_t),f.text("$"+Number((j.items||[]).reduce((gt,ie)=>gt+(ie.sub||0),0)).toLocaleString("es-AR"),145,_t,{align:"right"}),Q&&window.qrcode)try{const gt=window.qrcode(0,"M");gt.addData(Q),gt.make();const ie=gt.getModuleCount(),Gt=32,ge=Gt/ie,oe=158,Kt=K+38;f.setFillColor(255,255,255),f.rect(oe-1,Kt-1,Gt+2,Gt+2,"F"),f.setFillColor(0,0,0);for(let ft=0;ft<ie;ft++)for(let yt=0;yt<ie;yt++)gt.isDark(ft,yt)&&f.rect(oe+yt*ge,Kt+ft*ge,ge,ge,"F");f.setFontSize(6),f.setFont("helvetica","normal"),f.setTextColor(120,120,120),f.text("Escaneá en el stand",oe+Gt/2,Kt+Gt+4,{align:"center"})}catch{}return K+lt+8};b.forEach((j,Q)=>{Q>0&&L>130&&(f.addPage(),L=15),L=F(j,R[Q],(window._lastVoucherNums||[])[Q],L)}),f.save("Voucher_"+(g.nombre||"").replace(/ /g,"_")+"_SUCOVI2027.pdf")},window._abrirScanner=async()=>{document.getElementById("scan-overlay").style.display="flex";const g=document.getElementById("scan-status");g&&(g.textContent="Cargando escáner...");try{await wl(),a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const b=document.getElementById("scan-video");b.srcObject=a,l=!0,g&&(g.textContent="Buscando QR...");const w=document.createElement("canvas"),f=w.getContext("2d",{willReadFrequently:!0}),R=()=>{if(l){if(b.readyState===b.HAVE_ENOUGH_DATA&&b.videoWidth>0){w.width=b.videoWidth,w.height=b.videoHeight,f.drawImage(b,0,0);const L=f.getImageData(0,0,w.width,w.height),F=window.jsQR(L.data,L.width,L.height,{inversionAttempts:"dontInvert"});if(F&&F.data){const j=F.data;window._cerrarScanner();const Q=j.match(/INV-\d+/),G=j.match(/inv=([A-Z0-9]+)/i);if(Q){const K=document.getElementById("buscar-caja");K&&(K.value=Q[0],window._buscarInv(!0))}else G&&hn(async()=>{const{buscarInvitadoPorToken:K}=await Promise.resolve().then(()=>ni);return{buscarInvitadoPorToken:K}},void 0).then(({buscarInvitadoPorToken:K})=>K(G[1]).then(U=>{U&&window._seleccionarInv(U.fireId)}));return}}l&&requestAnimationFrame(R)}};b.addEventListener("loadeddata",()=>requestAnimationFrame(R))}catch{g&&(g.textContent="No se pudo acceder a la cámara. Ingresá el código manualmente.")}},window._cerrarScanner=()=>{l=!1,a&&(a.getTracks().forEach(b=>b.stop()),a=null);const g=document.getElementById("scan-overlay");g&&(g.style.display="none")};let C=null,T=[],D={};function V(){const g=document.getElementById("caja-content");g.innerHTML=`
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
      </div>`,C=null,T=[],P(),setTimeout(()=>{const b=document.getElementById("caja-content");if(!b)return;const w=document.createElement("div");w.id="pe-hist-lista",w.style.cssText="max-width:500px;margin:12px auto 0",b.appendChild(w),pn(f=>{const R=document.getElementById("pe-hist-lista");if(!R||!f.length)return;const L=[...f].sort((F,j)=>(j.creadoEn||"").localeCompare(F.creadoEn||""));R.innerHTML='<p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">PEDIDOS ESPECIALES COBRADOS HOY</p>'+L.map(F=>'<div class="card" style="margin-bottom:8px;border-left:3px solid #5BA4CF;cursor:pointer" onclick="window._peVerDetalle(&quot;'+F.fireId+'&quot;)"><div style="display:flex;justify-content:space-between;align-items:start"><div><div style="font-size:13px;font-weight:600;color:#1A3A5C">'+(F.peNum||"")+" · "+(F.invNombre||"")+'</div><div style="font-size:11px;color:#888">'+(F.invCodigo||"")+(F.familia?" · Familia "+F.familia:"")+'</div><div style="font-size:12px;color:#555;margin-top:4px">'+(F.items||[]).map(j=>j.desc).join(", ")+'</div></div><div style="text-align:right;flex-shrink:0;margin-left:8px"><div style="font-size:14px;font-weight:600">$'+jt(F.total||0)+'</div><span class="badge '+(F.estado==="entregado"?"b-entr":"b-pago")+'" style="font-size:10px">'+(F.estado==="entregado"?"Entregado":"Pendiente")+'</span><div style="font-size:10px;color:#888;margin-top:2px">Ver detalle ›</div></div></div></div>').join(""),window._peVerDetalle=F=>{const j=L.find(U=>U.fireId===F);if(!j)return;N=j;const Q=U=>Number(U).toLocaleString("es-AR"),G=document.getElementById("caja-content");if(!G)return;const K=j.envio;G.innerHTML='<div class="wrap" style="max-width:500px;margin:0 auto"><button class="btn" onclick="window._cajaVista(&quot;especial&quot;, document.querySelector(&quot;.nav button:nth-child(3)&quot;))" style="margin-bottom:12px">← Volver</button><div class="card" style="margin-bottom:12px;border-left:4px solid #5BA4CF"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:18px;font-weight:700;color:#1A3A5C">'+(j.peNum||"")+'</div><div style="font-size:14px;font-weight:500">'+(j.invNombre||"")+'</div><div style="font-size:12px;color:#888">'+(j.invCodigo||"")+(j.familia?" · Familia "+j.familia:"")+'</div></div><span class="badge '+(j.estado==="entregado"?"b-entr":"b-pago")+'">'+(j.estado==="entregado"?"Entregado":"Pendiente")+"</span></div>"+(j.items||[]).map(U=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #eee"><span>'+U.desc+"</span><strong>$"+Q(U.sub)+"</strong></div>").join("")+'<div style="display:flex;justify-content:space-between;font-size:16px;font-weight:600;color:#1A3A5C;margin-top:8px"><span>Total</span><span>$'+Q(j.total||0)+"</span></div></div>"+(K?'<div class="card" style="margin-bottom:12px;background:#f0f4f8"><p style="font-size:11px;font-weight:500;color:#888;margin-bottom:6px">DATOS DE ENTREGA</p><div style="font-size:13px"><strong>'+K.nombre+"</strong> · "+K.tel+"<br>"+K.calle+" "+K.numero+(K.piso?", "+K.piso:"")+", "+K.localidad+", "+K.provincia+"</div></div>":"")+'<button class="btn btn-b" style="width:100%;padding:12px;font-size:14px" onclick="window._peImprimirVoucher()">🖨️ Imprimir voucher</button></div>'}})},300)}async function P(){D={};let g=0;qt.forEach(b=>{An(b.id,w=>{D[b.id]={bodega:b,vinos:w.filter(f=>(f.unidades||[]).some(R=>R.unidadesPorCaja))},g++,g===qt.length&&M()})})}function M(){const g=document.getElementById("pe-vinos-lista");if(!g)return;const b=Object.values(D).filter(w=>w.vinos.length>0);if(!b.length){g.innerHTML='<div class="empty">No hay vinos con precio de caja cargado todavía.</div>';return}g.innerHTML='<div style="margin-bottom:12px"><input id="pe-buscar-vino" type="text" placeholder="Buscar vino..." style="width:100%;padding:8px;border:1px solid #ccc;border-radius:6px;font-size:14px" oninput="window._peFiltrarVinos()"></div>'+b.map(({bodega:w,vinos:f})=>'<div style="margin-bottom:14px"><div class="pe-bodega-bloque"><div class="pe-bodega-titulo" style="font-size:12px;font-weight:600;color:#1A3A5C;margin-bottom:6px;text-transform:uppercase">'+w.nombre+"</div>"+f.map(R=>{const L=(R.unidades||[]).find(F=>F.unidadesPorCaja);return L?'<div class="pe-vino-wrap" data-nombre="'+R.nombre.toLowerCase()+'"><div class="pe-vino-row" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:.5px solid #eee"><div style="flex:1"><div style="font-size:13px;font-weight:500">'+R.nombre+'</div><div style="font-size:11px;color:#888">'+(R.varietal||"")+" · Caja x"+L.unidadesPorCaja+" · $"+jt(L.p)+'</div></div><div style="display:flex;align-items:center;gap:8px"><button class="qty-btn" onclick="window._peQty('+w.id+",'"+R.fireId+`',-1)">−</button><span id="pe-qty-`+w.id+"-"+R.fireId+'" style="min-width:20px;text-align:center;font-size:14px">0</span><button class="qty-btn" onclick="window._peQty('+w.id+",'"+R.fireId+`',1)">+</button></div></div></div>`:""}).join("")+"</div>").join("")}window._peFiltrarVinos=()=>{var b;const g=(((b=document.getElementById("pe-buscar-vino"))==null?void 0:b.value)||"").toLowerCase();document.querySelectorAll("#pe-vinos-lista .pe-vino-wrap").forEach(w=>{w.style.display=w.dataset.nombre.toLowerCase().includes(g)?"":"none"}),document.querySelectorAll("#pe-vinos-lista .pe-bodega-bloque").forEach(w=>{const f=[...w.querySelectorAll(".pe-vino-wrap")].some(R=>R.style.display!=="none");w.style.display=f?"":"none"})},window._peBuscar=()=>{const g=document.getElementById("pe-codigo").value.trim().toUpperCase();if(!g)return;const b=document.getElementById("pe-inv-info"),w=t.filter(f=>f.codigo===g||(f.nombre+" "+f.apellido).toUpperCase().includes(g));if(!w.length){b.innerHTML='<div style="color:#C0392B;font-size:12px">Invitado no encontrado</div>';return}w.length===1?window._peSeleccionar(w[0].fireId):b.innerHTML='<div style="font-size:12px;color:#555;margin-bottom:6px">Seleccioná el invitado:</div>'+w.map(f=>`<div onclick="window._peSeleccionar('`+f.fireId+`')" style="background:#f0f4f8;border-radius:8px;padding:10px;font-size:13px;cursor:pointer;margin-bottom:6px;border:1px solid #D6E4F0"><strong>`+f.nombre+" "+f.apellido+"</strong> · "+f.codigo+(f.familia?" · Familia "+f.familia:"")+"</div>").join("")},window._peSeleccionar=g=>{const b=t.find(f=>f.fireId===g);if(!b)return;C=b;const w=document.getElementById("pe-inv-info");w.innerHTML='<div style="background:#f0f4f8;border-radius:8px;padding:10px;font-size:13px"><strong>'+b.nombre+" "+b.apellido+"</strong> · "+b.codigo+(b.familia?" · Familia "+b.familia:"")+"</div>",document.getElementById("pe-carta").style.display="block",M()},window._peScanner=async()=>{await wl();const g=document.getElementById("scan-overlay");g.style.display="flex",l=!0;try{a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const b=document.getElementById("scan-video");b.srcObject=a;const w=document.createElement("canvas"),f=w.getContext("2d"),R=()=>{if(l){if(b.readyState===b.HAVE_ENOUGH_DATA){w.width=b.videoWidth,w.height=b.videoHeight,f.drawImage(b,0,0);const L=f.getImageData(0,0,w.width,w.height),F=window.jsQR(L.data,L.width,L.height);if(F){window._cerrarScanner();const j=F.data.match(/inv=([A-Z0-9]+)/i);if(j){const Q=t.find(G=>G.token===j[1]);Q&&(document.getElementById("pe-codigo").value=Q.codigo,window._peBuscar())}}}requestAnimationFrame(R)}};R()}catch{document.getElementById("scan-status").textContent="No se pudo acceder a la cámara."}},window._peQty=(g,b,w)=>{const f=g+"_"+b,R=T.findIndex(tt=>tt.key===f),L=D[g];if(!L)return;const F=L.vinos.find(tt=>(tt.fireId||tt.id)===b);if(!F)return;const j=(F.unidades||[]).find(tt=>tt.unidadesPorCaja);if(!j)return;R>=0?(T[R].qty=Math.max(0,T[R].qty+w),T[R].qty===0&&T.splice(R,1)):w>0&&T.push({key:f,standId:Number(g),standNombre:L.bodega.nombre,vinoNombre:F.nombre,vinoId:b,qty:1,precioCaja:j.p,unidadesPorCaja:j.unidadesPorCaja,desc:F.nombre+" — Caja x"+j.unidadesPorCaja+" ×1",sub:j.p});const Q=document.getElementById("pe-qty-"+g+"-"+b),G=T.find(tt=>tt.key===f);Q&&(Q.textContent=G?G.qty:0),G&&(G.sub=G.precioCaja*G.qty,G.desc=F.nombre+" — Caja x"+j.unidadesPorCaja+" ×"+G.qty);const K=document.getElementById("pe-resumen"),U=document.getElementById("pe-btn-cobrar");if(!T.length){K.style.display="none",U.style.display="none";return}const lt=T.reduce((tt,_t)=>tt+_t.sub,0);K.style.display="block",U.style.display="block",K.innerHTML='<p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Resumen</p>'+T.map(tt=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #eee"><span>'+tt.desc+"</span><strong>$"+jt(tt.sub)+"</strong></div>").join("")+'<div style="display:flex;justify-content:space-between;font-size:16px;font-weight:600;color:#1A3A5C;margin-top:8px"><span>Total</span><span>$'+jt(lt)+"</span></div>"};let N=null;window._peCobrar=async()=>{if(!C||!T.length)return;const g=document.getElementById("pe-msg"),b=document.getElementById("pe-btn-cobrar");b.disabled=!0,b.style.opacity="0.6",g.innerHTML='<span style="color:#888">Procesando...</span>';try{const w=T.reduce((R,L)=>R+L.sub,0);N={...await Ad({invFireId:C.fireId,invNombre:C.nombre+" "+C.apellido,invCodigo:C.codigo,familia:C.familia||"",items:T,total:w}),invNombre:C.nombre+" "+C.apellido,invCodigo:C.codigo,familia:C.familia||"",items:[...T],total:w},C=null,T=[],q()}catch(w){g.innerHTML='<span style="color:#C0392B">Error: '+w.message+"</span>",b.disabled=!1,b.style.opacity="1"}};function q(){const g=document.getElementById("caja-content");g.innerHTML=`
      <div class="wrap" style="max-width:500px;margin:0 auto">
        <div class="card" style="margin-bottom:12px;border-left:4px solid #3A7D44">
          <div style="font-size:15px;font-weight:600;color:#3A7D44;margin-bottom:4px">✅ ${N.peNum} registrado</div>
          <div style="font-size:13px;color:#555">${N.invNombre} · $${jt(N.total)}</div>
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
      </div>`}window._peGuardarDir=async()=>{var w;const g={nombre:document.getElementById("pe-dir-nombre").value.trim(),tel:document.getElementById("pe-dir-tel").value.trim(),calle:document.getElementById("pe-dir-calle").value.trim(),numero:document.getElementById("pe-dir-num").value.trim(),piso:document.getElementById("pe-dir-piso").value.trim(),localidad:document.getElementById("pe-dir-loc").value.trim(),provincia:document.getElementById("pe-dir-prov").value.trim(),observaciones:((w=document.getElementById("pe-dir-obs"))==null?void 0:w.value.trim())||""},b=document.getElementById("pe-dir-msg");if(!g.nombre||!g.calle||!g.localidad){b.innerHTML='<span style="color:#C0392B">Completá al menos nombre, calle y localidad.</span>';return}b.innerHTML='<span style="color:#888">Guardando...</span>',await vs(N.fireId,{envio:g}),N.envio=g,window._peImprimirVoucher()},window._peSaltarDir=()=>{window._peImprimirVoucher()},window._peImprimirVoucher=()=>{const g=N;if(!g)return;const b=window.open("","_blank"),w=R=>Number(R).toLocaleString("es-AR"),f=g.envio;b.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8"><title>${g.peNum}</title>
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
            <div class="pe-num">${g.peNum}</div>
            <div style="font-size:16px;font-weight:500;color:#1A3A5C;margin-top:4px">${g.invNombre}</div>
            <div style="font-size:13px;color:#888">${g.invCodigo}${g.familia?" · Familia "+g.familia:""}</div>
          </div>
          <div style="text-align:right">
            <div class="badge">✅ PAGADO</div>
          </div>
        </div>
        ${(g.items||[]).map(R=>'<div class="item"><span>'+R.desc+"</span><strong>$"+w(R.sub)+"</strong></div>").join("")}
        <div class="total"><span>Total</span><span>$${w(g.total)}</span></div>
        ${f?'<div class="dir-box"><strong>📍 Entrega:</strong> '+f.nombre+" · "+f.tel+"<br>"+f.calle+" "+f.numero+(f.piso?", "+f.piso:"")+", "+f.localidad+", "+f.provincia+"</div>":""}
        <div class="sello">📦 PEDIDO ESPECIAL — SIN QR</div>
      </div>
      <script>setTimeout(() => window.print(), 500)<\/script>
    </body></html>`),b.document.close(),setTimeout(()=>I(),1e3)};function I(){const g=document.getElementById("caja-content");g.innerHTML=`
      <div class="wrap" style="max-width:500px;margin:0 auto">
        <div class="card" style="margin-bottom:12px;border-left:4px solid #3A7D44">
          <div style="font-size:13px;font-weight:600;color:#3A7D44">✅ ${N==null?void 0:N.peNum} guardado</div>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:14px">
          <button class="btn btn-v" style="flex:1;padding:10px" onclick="window._cajaVista('especial', document.querySelector('.nav button:nth-child(3)'))">+ Nuevo pedido especial</button>
          <button class="btn" style="flex:1;padding:10px" onclick="window._peImprimirVoucher()">🖨️ Reimprimir</button>
        </div>
        <div id="pe-historial-lista"><div class="empty">Cargando historial...</div></div>
      </div>`,pn(b=>{const w=document.getElementById("pe-historial-lista");if(!w)return;if(!b.length){w.innerHTML='<div class="empty">Sin pedidos especiales</div>';return}const f=[...b].sort((R,L)=>(L.creadoEn||"").localeCompare(R.creadoEn||""));w.innerHTML='<p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">PEDIDOS ESPECIALES COBRADOS</p>'+f.map(R=>'<div class="card" style="margin-bottom:8px;border-left:3px solid #5BA4CF"><div style="display:flex;justify-content:space-between;align-items:start"><div><div style="font-size:13px;font-weight:600;color:#1A3A5C">'+(R.peNum||"")+" · "+(R.invNombre||"")+'</div><div style="font-size:11px;color:#888">'+(R.invCodigo||"")+(R.familia?" · Familia "+R.familia:"")+'</div><div style="font-size:12px;color:#555;margin-top:4px">'+(R.items||[]).map(L=>L.desc).join(", ")+'</div></div><div style="text-align:right;flex-shrink:0;margin-left:8px"><div style="font-size:14px;font-weight:600">$'+jt(R.total||0)+'</div><span class="badge '+(R.estado==="entregado"?"b-entr":"b-pago")+'" style="font-size:10px">'+(R.estado==="entregado"?"Entregado":"Pendiente")+"</span></div></div></div></div>").join("")})}h();const y=document.createElement("button");y.innerHTML="?",y.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",y.onclick=()=>document.getElementById("modal-ayuda-caja").style.display="flex",document.body.appendChild(y);const A=document.createElement("div");A.id="modal-ayuda-caja",A.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",A.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Panel de caja</div><button onclick="document.getElementById(&quot;modal-ayuda-caja&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📷 Escanear código del invitado</div><div>Escaneá el QR o ingresá el código del invitado (ej: INV-0001) para ver su carrito de compras con todos los vinos que seleccionó en los stands.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">💳 Cobrar</div><div>Una vez verificado el carrito, tocá <strong>Cobrar</strong> para registrar el pago. Se genera automáticamente un voucher con número correlativo (VOC-001, VOC-002, etc.).</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">⬇️ Descargar PDF</div><div>Después de cobrar podés descargar el voucher en PDF para entregar al invitado. El voucher incluye el QR para retirar los vinos en cada stand.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">↩️ Reembolsar</div><div>Si un pedido fue cobrado por error, podés reembolsarlo desde la lista de pedidos. El stand no podrá marcarlo como entregado.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ Verificá siempre el total antes de cobrar. El reembolso no devuelve dinero automáticamente.</div></div></div>',A.addEventListener("click",g=>{g.target===A&&(A.style.display="none")}),document.body.appendChild(A)}const Ko=n=>Number(n).toLocaleString("es-AR");function Gm(n,t,e){if(ne(),!e||e.estado==="invalidado"){n.innerHTML=Ht({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
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
      </div>`,window._buscarInvStand=async()=>{var T;const h=(((T=document.getElementById("inv-cod-manual"))==null?void 0:T.value)||"").trim(),m=document.getElementById("inv-cod-err");if(!h)return;const v=h.split(".");if(v.length!==2){m.textContent="Formato: INV-0001.Apellido";return}const _=v[0].toUpperCase().trim(),C=v[1].toLowerCase().trim();m.textContent="Buscando...";try{const{buscarInvitadoPorCodigo:D}=await hn(async()=>{const{buscarInvitadoPorCodigo:P}=await Promise.resolve().then(()=>ni);return{buscarInvitadoPorCodigo:P}},void 0),V=await D(_);if(!V){m.textContent="Código no encontrado";return}if(V.estado==="invalidado"){m.textContent="Invitado invalidado";return}if(!V.apellido.toLowerCase().startsWith(C)){m.textContent="Código o apellido incorrecto";return}window.location.href="/stand/"+t.id+"?inv="+V.token}catch(D){m.textContent="Error: "+D.message}};return}if(e.estado==="pendiente"){n.innerHTML=Ht({title:"🍷 "+t.nombre,sub:"Stand #"+t.id+" · Sucovi 2027"})+`
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
    </button>`,window._stockDisponible={};let a=window._stockDisponible;Ao(h=>{console.log("STOCK DOCS:",h.length,"bodega:",t.id),a={},h.filter(m=>Number(m.standId)===Number(t.id)).forEach(m=>{a[m.vinoId]=Math.max(0,(m.total||0)-(m.degustacion||0)-(m.reservado||0)-(m.pagado||0)-(m.entregado||0))}),i.forEach((m,v)=>{const _=document.getElementById("disp-"+v);if(!_)return;const C=a[m.fireId||m.id];C!==void 0&&(_.textContent="("+C+" disp.)",_.style.color=C===0?"#C0392B":C<=3?"#D97706":"#888")})}),An(t.id,h=>{i=h,d(),setTimeout(()=>{i.forEach((m,v)=>{const _=document.getElementById("disp-"+v);if(!_)return;const C=a[m.fireId||m.id];C!==void 0&&(_.textContent="("+C+" disp.)",_.style.color=C===0?"#C0392B":C<=3?"#D97706":"#888")})},300)});const l={};ms(e.fireId,h=>{var D,V;const m=h.find(P=>Number(P.standId)===t.id);m&&m.items&&m.items.forEach(P=>{if(P.key&&l[P.key]===void 0){l[P.key]=P.qty||0;const[M,N]=P.key.split("_").map(Number),q=document.getElementById("qv"+M+"_"+N);q&&(q.textContent=l[P.key])}});const v=h.reduce((P,M)=>P+(M.items||[]).reduce((N,q)=>N+(q.sub||0),0),0),_=h.reduce((P,M)=>P+(M.items||[]).length,0),C=document.getElementById("cart-fab"),T=document.getElementById("cart-fab-txt");C&&_>0?(C.style.display="flex",T.textContent=`Ver carrito · $${Ko(v)}`):C&&(C.style.display="none"),m&&((D=m.items)!=null&&D.length)?(o=m.retiro||"stand",(V=document.getElementById("rb-stand"))==null||V.classList.toggle("sel",o==="stand"),document.getElementById("retiro-box").style.display="block",document.getElementById("stand-resumen").style.display="block",document.getElementById("stand-resumen-lines").innerHTML=m.items.map(P=>`
          <div style="display:flex;justify-content:space-between;font-size:12px;
            color:#555;margin-bottom:4px">
            <span>${P.desc}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-weight:500">$${Ko(P.sub)}</span>
              <button onclick="window._quitarItem('${P.key}')"
                style="border:none;background:none;color:#A32D2D;cursor:pointer;
                font-size:13px;padding:0 2px">✕</button>
            </div>
          </div>`).join("")):(document.getElementById("stand-resumen").style.display="none",m===null&&(document.getElementById("retiro-box").style.display="none"))});function d(){const h=document.getElementById("menu-lista");if(h){if(!i.length){h.innerHTML='<div class="empty">La carta estará disponible pronto.</div><a href="/acceso?inv='+e.token+'#stands-section" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#1A3A5C;color:#fff;border-radius:8px;padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-top:12px">🛍️ Seguir comprando</a>';return}h.innerHTML=i.map((m,v)=>`
      <div class="vino-card">
        <div style="font-size:17px;font-weight:600;color:#1A3A5C">${m.nombre}</div>
        <div style="font-size:11px;color:#888;margin-top:2px">
          <span style="font-size:14px;color:#555">${m.varietal||""}${m.cosecha?" · "+m.cosecha:""}</span>
        </div>
        ${m.descripcion?`<div style="font-size:13px;color:#666;margin-top:3px">${m.descripcion}</div>`:""}
        ${(m.unidades||[]).filter(_=>!_.unidadesPorCaja).map((_,C)=>`
          <div class="qty-row">
            <span class="qty-label">
              ${_.u} — <span style="color:#6B1C1C;font-weight:600">$${Ko(_.p)}</span>
              <span id="disp-${v}" style="font-size:11px;margin-left:6px"></span>
            </span>
            <button class="qty-btn" id="btnm${v}_${C}" onclick="window._agregar(${v},${C},-1)">−</button>
            <span id="qv${v}_${C}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" id="btnp${v}_${C}" onclick="window._agregar(${v},${C},1)">+</button>
          </div>`).join("")}
      </div>`).join("")+'<a href="/acceso?inv='+e.token+'#stands-section" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#1A3A5C;color:#fff;border-radius:8px;padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-top:12px">🛍️ Seguir comprando</a>'}}window._agregar=async(h,m,v)=>{const _=i[h];if(!_)return;const C=(_.unidades||[])[m];if(!C)return;const T=`${h}_${m}`,D=`btn${v>0?"p":"m"}${h}_${m}`,V=document.getElementById(D);if(V&&(V.disabled=!0,V.style.opacity="0.4"),v>0){const M=_.fireId||_.id;if(!await gd(t.id,M,v)){window._showStandMsg("Sin stock disponible","#C0392B"),setTimeout(()=>window._hideStandMsg(),1800),V&&(V.disabled=!1,V.style.opacity="1");return}}l[T]=Math.max(0,(l[T]||0)+v);const P=document.getElementById(`qv${h}_${m}`);if(P&&(P.textContent=l[T]),v<0&&await ys(t.id,_.fireId||_.id,1).catch(()=>{}),l[T]===0)window._showStandMsg("⏳ Guardando...","#5BA4CF"),await Yi(e.fireId,t.id,T),window._showStandMsg("✓ Carrito actualizado","#3B6D11"),V&&(V.disabled=!1,V.style.opacity="1"),setTimeout(()=>window._hideStandMsg(),1500);else{const M={key:T,desc:`${_.nombre} — ${C.u} ×${l[T]}`,sub:C.p*l[T],vinoNombre:_.nombre,vinoId:_.fireId||_.id||_.nombre,unidad:C.u,precio:C.p,qty:l[T]};window._showStandMsg("⏳ Guardando...","#5BA4CF");const N=document.getElementById("add-msg");N.style.cssText="font-size:18px;color:#5BA4CF;text-align:center;padding:8px",await id(e.fireId,t.id,t.nombre,M,o);const q=_.fireId||_.id;a[q]!==void 0&&(a[q]=Math.max(0,a[q]-v)),document.getElementById("retiro-box").style.display="block",window._showStandMsg("✓ Carrito actualizado","#3B6D11"),V&&(V.disabled=!1,V.style.opacity="1"),setTimeout(()=>window._hideStandMsg(),1500),N.textContent="",N.style.cssText=""}},window._sRet=async h=>{o=h,document.getElementById("rb-stand").classList.toggle("sel",h==="stand"),await fs(e.fireId,t.id,h)},window._quitarItem=async h=>{await Yi(e.fireId,t.id,h);const[m,v]=h.split("_").map(Number);l[h]=0;const _=document.getElementById(`qv${m}_${v}`);_&&(_.textContent=0)};const p=document.createElement("button");p.innerHTML="?",p.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.25)",p.onclick=()=>document.getElementById("modal-ayuda-stand").style.display="flex",document.body.appendChild(p);const x=document.createElement("div");x.id="modal-ayuda-stand",x.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",x.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Stand — Carta de vinos</div><button onclick="document.getElementById(&quot;modal-ayuda-stand&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🍷 Seleccionar vinos</div><div>Usá los botones <strong>+</strong> y <strong>−</strong> para agregar o quitar unidades de cada vino. El carrito se actualiza automáticamente.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🛒 Ver carrito</div><div>Tocá <strong>Ver carrito</strong> para revisar todo lo que seleccionaste en los distintos stands. Podés seguir agregando vinos de otras bodegas.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">🛍️ Seguir comprando</div><div>Tocá <strong>Seguir comprando</strong> para ir a otro stand y seguir eligiendo vinos. Todo se acumula en tu carrito.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">💳 Pagar</div><div>Cuando termines de elegir, dirigite a <strong>Caja</strong> para pagar todo junto. El cajero escanea tu código y ve todo tu pedido.</div></div><div style="background:#EBF4FA;border-radius:8px;padding:10px;font-size:12px;color:#1A3A5C">ℹ️ Las degustaciones están incluidas en tu bono. Solo pagás las botellas o cajas que llevás.</div></div></div>',x.addEventListener("click",h=>{h.target===x&&(x.style.display="none")}),document.body.appendChild(x)}window._abrirScannerStand=async()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="flex");const t=document.getElementById("scan-status-stand");try{window.jsQR||await new Promise((p,x)=>{const h=document.createElement("script");h.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",h.onload=p,h.onerror=x,document.head.appendChild(h)});const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),i=document.getElementById("scan-video-stand");i.srcObject=e,t&&(t.textContent="Buscando QR...");const o=document.createElement("canvas"),s=o.getContext("2d",{willReadFrequently:!0});let a=!0;const l=()=>{a=!1,e.getTracks().forEach(p=>p.stop())},d=()=>{if(a){if(i.readyState===i.HAVE_ENOUGH_DATA&&i.videoWidth>0){o.width=i.videoWidth,o.height=i.videoHeight,s.drawImage(i,0,0);const p=s.getImageData(0,0,o.width,o.height),x=window.jsQR(p.data,p.width,p.height,{inversionAttempts:"dontInvert"});if(x&&x.data){l(),window._cerrarScannerStand();const m=x.data.match(/inv=([A-Z0-9]+)/i),v=window.location.pathname.split("/")[2];m&&v&&(window.location.href="/stand/"+v+"?inv="+m[1]);return}}a&&requestAnimationFrame(d)}};i.addEventListener("loadeddata",()=>requestAnimationFrame(d))}catch{t&&(t.textContent="No se pudo acceder a la camara.")}};window._cerrarScannerStand=()=>{const n=document.getElementById("scan-overlay-stand");n&&(n.style.display="none");const t=document.getElementById("scan-video-stand");t&&t.srcObject&&(t.srcObject.getTracks().forEach(e=>e.stop()),t.srcObject=null)};window._showStandMsg=(n,t)=>{const e=document.getElementById("stand-msg-modal"),i=document.getElementById("stand-msg-box");!e||!i||(i.textContent=n,i.style.color=t||"#1A3A5C",e.style.display="flex")};window._hideStandMsg=()=>{const n=document.getElementById("stand-msg-modal");n&&(n.style.display="none")};const pe=n=>Number(n).toLocaleString("es-AR");async function Km(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function Xo(n,t,e){const i=document.getElementById(e);i&&(i.textContent="Iniciando cámara..."),await Km();const o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),s=document.getElementById(n);if(!s)return o.getTracks().forEach(h=>h.stop()),null;s.srcObject=o;let a=!0;const l=document.createElement("canvas"),d=l.getContext("2d",{willReadFrequently:!0}),p=()=>{a=!1,o.getTracks().forEach(h=>h.stop())},x=()=>{if(a){if(s.readyState===s.HAVE_ENOUGH_DATA&&s.videoWidth>0){l.width=s.videoWidth,l.height=s.videoHeight,d.drawImage(s,0,0);const h=d.getImageData(0,0,l.width,l.height),m=window.jsQR(h.data,h.width,h.height,{inversionAttempts:"dontInvert"});if(m&&m.data){p(),t(m.data);return}}a&&requestAnimationFrame(x)}};return i&&(i.textContent="Buscando QR..."),s.addEventListener("loadeddata",()=>requestAnimationFrame(x)),p}function Xm(n,t){if(ne(),!document.getElementById("sp-css")){const h=document.createElement("style");h.id="sp-css",h.textContent=`
      .tab-btn { border:none;border-radius:0;border-bottom:2px solid transparent;
        color:#888;padding:8px 14px;margin-bottom:-2px;background:none;
        font-size:12px;cursor:pointer;font-weight:400 }
      .tab-btn.active { border-bottom-color:#5BA4CF;color:#5BA4CF;font-weight:600 }
      .b-canc { background:#FEE2E2;color:#C0392B;border:1px solid #FCA5A5 }
      .sf-btn { font-size:11px }
      .sf-btn.active { background:#EAF3DE;color:#3B6D11;border-color:#3B6D11 }
    `,document.head.appendChild(h)}let e=[],i="pendientes",o=null,s=null;if(!document.getElementById("stand-header-style")){const h=document.createElement("style");h.id="stand-header-style",h.textContent=".hdr { background: linear-gradient(135deg, #2D6A4F, #3A7D44) !important; } .gold { background: linear-gradient(90deg, #C9A96E, #A8865A, #C9A96E) !important; }",document.head.appendChild(h)}n.innerHTML=Ht({title:`🍷 ${t.nombre}`,sub:`Stand #${t.id} · Sucovi 2027`,actions:[`<button class="btn" onclick="sessionStorage.removeItem('stand-auth-${t.id}');location.reload()"
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
    </div>`,window._setTab=h=>{["pedidos","carta","resumen"].forEach(m=>{var _;(_=document.getElementById("tab-"+m))==null||_.classList.toggle("active",m===h);const v=document.getElementById("tab-content-"+m);v&&(v.style.display=m===h?"block":"none")}),h==="carta"&&d(),h==="resumen"&&p()},window._setSF=(h,m)=>{i=h,["sf-listos","sf-entr","sf-all","sf-log"].forEach(v=>{var _;(_=document.getElementById(v))==null||_.classList.remove("active")}),m.classList.add("active"),a()},rd(t.id,h=>{e=h,a()});function a(){const h=document.getElementById("sp-pedidos");if(!h)return;let m=e;if(i==="pendientes"?m=e.filter(v=>(v.estado==="pagado"||v.estado==="listo")&&v.retiro!=="envio"):i==="entregados"?m=e.filter(v=>v.estado==="entregado"&&v.retiro!=="envio"):m=e.filter(v=>v.retiro!=="envio"),!m.length){const v={pendientes:"Sin pedidos listos 🎉",entregados:"Sin entregas todavía",todos:"Sin pedidos"};h.innerHTML=`<div class="empty">${v[i]||"Sin pedidos"}</div>`;return}h.innerHTML=m.map(v=>{const _=v.estado==="entregado";return`
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${_?"#3A7D44":"#5BA4CF"}">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">
            <div>
              <div style="font-size:15px;font-weight:500;color:#1A3A5C">${v.invNombre||"Invitado"}</div>
              ${v.voucherNum?'<div style="font-size:10px;color:#5BA4CF;font-weight:500">VOC-'+String(v.voucherNum).padStart(3,"0")+"</div>":""}
              <div style="font-size:11px;color:#888">${v.invCodigo||""}</div>
            </div>
            <span class="badge ${_?"b-entr":"b-pago"}">${_?"✅ Entregado":"💳 Pagado"}</span>
          </div>
          ${(v.items||[]).map(C=>`
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555">
              <span>${C.desc}</span><strong>$${pe(C.sub)}</strong>
            </div>`).join("")}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Total</span><span>$${pe(v.total||0)}</span>
          </div>
          <div style="display:flex;gap:6px;margin-top:10px">
            ${_?"":`
            <button class="btn btn-g" style="flex:1;padding:9px"
              onclick="window._scanearEsteRemito('${v.fireId}')">
              📷 Escanear
            </button>`}
            <button class="btn" style="flex:1;padding:9px"
              onclick="window._imprimirRemito('${v.fireId}', ${_})">
              🖨️ ${_?"Remito entregado":"Imprimir remito"}
            </button>
          </div>
        </div>`}).join("")}window._imprimirRemito=(h,m)=>{const v=e.find(D=>D.fireId===h);if(!v)return;const _=D=>Number(D).toLocaleString("es-AR"),C=v.voucherNum?"VOC-"+String(v.voucherNum).padStart(3,"0"):"VOC-000",T=window.open("","_blank");T.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <title>Remito ${C}</title>
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
            <div class="voc-num">${C}</div>
            <div class="stand">${t.nombre}</div>
            <div class="inv">${v.invNombre||""} · ${v.invCodigo||""}</div>
          </div>
          <div style="text-align:right">
            <div class="badge ${m?"badge-entregado":"badge-pagado"}">${m?"✅ ENTREGADO":"✅ PAGADO"}</div>
          </div>
        </div>
        ${(v.items||[]).map(D=>`
          <div class="item"><span>${D.desc}</span><strong>$${_(D.sub)}</strong></div>
        `).join("")}
        <div class="total">
          <span>Total</span>
          <span>$${_(v.total||0)}</span>
        </div>
        ${m?'<div class="sello">✅ ENTREGADO</div>':`
        <div class="qr-box">
          <canvas id="qr-remito"></canvas>
          <div class="qr-hint">Escaneá en el stand</div>
        </div>`}
      </div>
      <script>
        const c = document.getElementById('qr-remito')
        if (c && typeof qrcode !== 'undefined') {
          const qr = qrcode(0, 'M')
          qr.addData('${h}')
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
    </body></html>`),T.document.close()},window._entregarPedido=async h=>{await gs(h)},window._scanearEsteRemito=async h=>{document.getElementById("scan-overlay-voucher").style.display="flex";const m=document.getElementById("scan-status-voucher");m&&(m.textContent="Escaneá el QR de este remito...");try{s=await Xo("scan-video-voucher",v=>{window._cerrarScannerVoucher();const _=document.getElementById("voucher-modal"),C=document.getElementById("voucher-modal-content");v.includes(h)?C.innerHTML=`
            <div style="text-align:center;padding:8px 0 16px">
              <div style="font-size:48px;margin-bottom:8px">✅</div>
              <div style="font-size:18px;font-weight:700;color:#3A7D44;margin-bottom:4px">QR válido</div>
              <div style="font-size:14px;color:#555;margin-bottom:20px">¿Confirmás la entrega de este pedido?</div>
              <div style="display:flex;gap:10px;justify-content:center">
                <button onclick="document.getElementById('voucher-modal').style.display='none'"
                  style="padding:10px 20px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:14px;cursor:pointer">
                  Cancelar
                </button>
                <button onclick="marcarEntregado('${h}');document.getElementById('voucher-modal').style.display='none'"
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
            </div>`,_.style.display="flex"},"scan-status-voucher")}catch{m&&(m.textContent="No se pudo acceder a la cámara.")}},window._listoParaLogistica=async h=>{await ld(h)};let l={};Ao(h=>{l={},h.filter(m=>Number(m.standId)===Number(t.id)).forEach(m=>{l[m.vinoId]=Math.max(0,(m.total||0)-(m.degustacion||0)-(m.reservado||0)-(m.pagado||0)-(m.entregado||0))}),document.getElementById("sp-carta")&&d()});function d(){const h=document.getElementById("sp-carta");h&&(h.innerHTML='<div class="empty">Cargando...</div>',An(t.id,m=>{if(!m.length){h.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}h.innerHTML=m.map(v=>{const _=l[v.fireId||v.id],C=_!==void 0?'<span style="font-size:12px;font-weight:500;color:'+(_===0?"#C0392B":_<=3?"#D97706":"#3A7D44")+';margin-left:8px">('+_+" disp.)</span>":"";return'<div class="card" style="margin-bottom:10px"><div style="font-size:17px;font-weight:600;color:#1A3A5C">'+v.nombre+C+'</div><div style="font-size:14px;color:#666;margin-top:2px">'+(v.varietal||"")+(v.cosecha?" · "+v.cosecha:"")+"</div>"+(v.descripcion?'<div style="font-size:13px;color:#888;margin-top:3px">'+v.descripcion+"</div>":"")+'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">'+(v.unidades||[]).map(T=>'<span style="background:#EBF4FA;color:#1A3A5C;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:500">'+T.u+": $"+pe(T.p)+"</span>").join("")+"</div></div>"}).join("")}))}function p(){const h=document.getElementById("sp-resumen");if(!h)return;const m=e.filter(N=>N.estado!=="reembolsado"&&N.estado!=="cancelado"),v=m.filter(N=>N.estado==="entregado"&&N.retiro!=="envio"),_=m.filter(N=>(N.estado==="pagado"||N.estado==="listo")&&N.retiro!=="envio"),C=m.filter(N=>N.retiro==="envio"),T=v.reduce((N,q)=>N+(q.total||0),0),D=_.reduce((N,q)=>N+(q.total||0),0),V=m.reduce((N,q)=>N+(q.total||0),0),P={};v.forEach(N=>(N.items||[]).forEach(q=>{const I=q.vinoNombre+" — "+q.unidad;P[I]||(P[I]={cant:0,total:0}),P[I].cant+=q.qty||1,P[I].total+=q.sub||0}));const M=Object.entries(P).sort((N,q)=>q[1].total-N[1].total);h.innerHTML=`
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
        <div class="stat"><div class="v" style="color:#3A7D44">$${pe(T)}</div><div class="l">Entregado</div></div>
        <div class="stat"><div class="v" style="color:#D97706">$${pe(D)}</div><div class="l">Por entregar</div></div>
        <div class="stat"><div class="v">$${pe(V)}</div><div class="l">Total vendido</div></div>
        ${C.length?`<div class="stat" style="grid-column:1/-1"><div class="v" style="color:#5BA4CF;font-size:14px">${C.length} pedido${C.length>1?"s":""} de envío a domicilio</div><div class="l">Manejados por logística</div></div>`:""}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Detalle por vino (entregados)</p>
        ${M.length?M.map(([N,q])=>`
          <div style="display:flex;justify-content:space-between;padding:6px 0;
            border-bottom:.5px solid #E8EFF5;font-size:12px">
            <span style="flex:1">${N}</span>
            <span style="color:#888;margin:0 8px">${q.cant} u.</span>
            <span style="font-weight:500">$${pe(q.total)}</span>
          </div>`).join(""):'<div style="color:#aaa;font-size:12px;padding:8px 0">Sin entregas todavía</div>'}
      </div>`}window._abrirScannerInv=async()=>{document.getElementById("scan-overlay-inv").style.display="flex";try{o=await Xo("scan-video-inv",h=>{window._cerrarScannerInv();const m=h.match(/inv=([A-Z0-9]+)/i);m?window.location.href="/stand/"+t.id+"?inv="+m[1]:document.getElementById("scan-status-inv").textContent="QR no reconocido — usá el QR personal del invitado"},"scan-status-inv")}catch{document.getElementById("scan-status-inv").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerInv=()=>{o&&(o(),o=null),document.getElementById("scan-overlay-inv").style.display="none"},window._abrirScannerVoucher=async()=>{document.getElementById("scan-overlay-voucher").style.display="flex";try{s=await Xo("scan-video-voucher",h=>{window._cerrarScannerVoucher();const m=e.find(v=>h.includes(v.fireId));m?x(m):document.getElementById("scan-status-voucher").textContent="Voucher no reconocido"},"scan-status-voucher")}catch{document.getElementById("scan-status-voucher").textContent="No se pudo acceder a la cámara."}},window._cerrarScannerVoucher=()=>{s&&(s(),s=null),document.getElementById("scan-overlay-voucher").style.display="none"};function x(h){const m=h.estado==="entregado";document.getElementById("voucher-modal-content").innerHTML=`
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:36px">${m?"✅":"⏳"}</div>
        <h3 style="font-size:16px;font-weight:500;color:${m?"#3B6D11":"#854F0B"};margin-top:6px">
          ${m?"PAGADO — Entregar":"PENDIENTE — No entregar"}
        </h3>
      </div>
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${h.invNombre||""}</div>
      <div style="font-size:12px;color:#888;margin-bottom:10px">${h.invCodigo||""}</div>
      ${(h.items||[]).map(v=>`
        <div style="display:flex;justify-content:space-between;font-size:13px;
          padding:5px 0;border-bottom:.5px solid #E8EFF5">
          <span>${v.desc}</span><strong>$${pe(v.sub)}</strong>
        </div>`).join("")}
      <div style="display:flex;justify-content:space-between;font-size:15px;
        font-weight:500;margin-top:10px;margin-bottom:14px">
        <span>Total</span><span>$${pe(h.total||0)}</span>
      </div>
      ${m?"":`
        <button class="btn btn-g" style="width:100%;padding:11px;font-size:14px"
          onclick="window._entregarPedido('${h.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>`}
      <button class="btn" style="width:100%;margin-top:8px"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`,document.getElementById("voucher-modal").style.display="flex"}}window._imprimirQRDesdePanel=async()=>{var P;const t=window.location.pathname.split("/")[2],i=window.location.origin+"/stand/"+t;window.qrcode||await new Promise((M,N)=>{const q=document.createElement("script");q.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",q.onload=M,q.onerror=N,document.head.appendChild(q)});const o=window.qrcode(0,"M");o.addData(i),o.make();const s=o.getModuleCount(),a=300,l=a/s,d=document.createElement("canvas");d.width=a,d.height=a;const p=d.getContext("2d");p.fillStyle="#fff",p.fillRect(0,0,a,a),p.fillStyle="#000";for(let M=0;M<s;M++)for(let N=0;N<s;N++)o.isDark(M,N)&&p.fillRect(N*l,M*l,l,l);const x=d.toDataURL("image/png"),h=document.getElementById("modal-qr-stand");h&&h.remove();const m=document.createElement("div");m.id="modal-qr-stand",m.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:400;display:flex;align-items:center;justify-content:center;padding:16px";const v=document.createElement("div");v.style.cssText="background:#fff;border-radius:16px;padding:24px;text-align:center;max-width:360px;width:100%";const _=document.createElement("div");_.style.cssText="font-size:11px;color:#888;letter-spacing:.08em;margin-bottom:6px",_.textContent="SUCOVI 2027 · FERIA DE VINOS";const C=document.createElement("div");C.style.cssText="font-size:20px;font-weight:700;color:#1A3A5C;margin-bottom:16px",C.textContent=((P=document.querySelector("h1"))==null?void 0:P.textContent)||"Stand";const T=document.createElement("img");T.src=x,T.style.cssText="width:260px;height:260px;border-radius:8px;display:block;margin:0 auto";const D=document.createElement("div");D.style.cssText="font-size:13px;color:#555;margin-top:12px;margin-bottom:16px",D.textContent="Escaneá para ver la carta y hacer tu pedido";const V=document.createElement("button");V.textContent="Cerrar",V.style.cssText="width:100%;padding:10px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:13px;cursor:pointer",V.onclick=()=>m.remove(),v.appendChild(_),v.appendChild(C),v.appendChild(T),v.appendChild(D),v.appendChild(V),m.appendChild(v),m.addEventListener("click",M=>{M.target===m&&m.remove()}),document.body.appendChild(m)};const Jm=n=>Number(n).toLocaleString("es-AR");function Id(n,t){if(ne(),!sessionStorage.getItem("bodega-auth-"+t.id)){n.innerHTML=`
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
      </div>`,window._loginBodega=()=>{document.getElementById("bp").value.trim()===t.pass?(sessionStorage.setItem("bodega-auth-"+t.id,"1"),Id(n,t)):document.getElementById("bp-err").textContent="Contraseña incorrecta"};return}let i=[],o=null;n.innerHTML=`
    ${Ht({title:"🍷 "+t.nombre,sub:"Carga de carta · Stand #"+t.id,actions:[`<button class="btn-back btn" onclick="sessionStorage.removeItem('bodega-auth-${t.id}');location.reload()">Salir</button>`]})}
    <div style="max-width:600px;margin:0 auto;padding:14px">
      <div class="card" style="margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:12px"
          id="form-titulo">Agregar vino</p>
        ${[["vn","Nombre del vino *","text","Ej: Gran Malbec 2022"],["vv","Varietal / Blend","text","Ej: Malbec"],["vc","Cosecha","number","2022"],["vd","Descripción corta","text","Tinto con notas de..."],["vb","Precio botella ($)","number",""],["vs","Stock inicial (botellas) — opcional","number",""]].map(([l,d,p,x])=>`
          <div style="margin-bottom:8px">
            <label style="font-size:11px;color:#666">${d}</label>
            <input id="${l}" type="${p}" placeholder="${x}" style="margin-top:3px"
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
    </div>`,An(t.id,l=>{i=l;const d=document.getElementById("vl");if(d){if(!i.length){d.innerHTML='<div class="empty">Sin vinos cargados todavía</div>';return}d.innerHTML=i.map(p=>`
      <div style="padding:10px 0;border-bottom:.5px solid #e0d5c8">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="flex:1">
            <div style="font-size:14px;font-weight:500">${p.nombre}</div>
            <div style="font-size:11px;color:#888;margin-top:2px">
              ${p.varietal||""}${p.cosecha?" · "+p.cosecha:""}
            </div>
            ${p.descripcion?`<div style="font-size:12px;color:#666;margin-top:2px">${p.descripcion}</div>`:""}
            <div style="margin-top:4px;display:flex;gap:8px;flex-wrap:wrap">
              ${(p.unidades||[]).map(x=>`<span style="font-size:12px;background:#f5f0eb;padding:2px 8px;
                  border-radius:6px;color:#6B1C1C">
                  ${x.u}: $${Jm(x.p)}
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
      </div>`).join("")}});const s=["vn","vv","vc","vd","vb","vs","vuc","vpc"],a=()=>{s.forEach(l=>{const d=document.getElementById(l);d&&(d.value="")})};window._calcPrecioCaja=()=>{const l=parseFloat(document.getElementById("vb").value)||0,d=parseInt(document.getElementById("vuc").value)||0,p=document.getElementById("vpc");p&&(p.value=l&&d?l*d:"")},window._guardarV=async()=>{var C;const l=document.getElementById("vn").value.trim(),d=document.getElementById("vm");if(!l){d.innerHTML='<span style="color:#A32D2D">El nombre es requerido.</span>';return}const p=parseFloat(document.getElementById("vb").value),x=parseInt(document.getElementById("vuc").value),h=parseFloat(document.getElementById("vpc").value),m=[];if(p&&m.push({u:"Botella",p}),x&&h&&m.push({u:"Caja x"+x,p:h,unidadesPorCaja:x}),!m.length){d.innerHTML='<span style="color:#A32D2D">Ingresá al menos precio de botella.</span>';return}if(x&&!h){d.innerHTML='<span style="color:#A32D2D">Ingresá las unidades por caja para calcular el precio.</span>';return}const v=parseInt((C=document.getElementById("vs"))==null?void 0:C.value)||0,_={nombre:l,varietal:document.getElementById("vv").value.trim(),cosecha:document.getElementById("vc").value.trim(),descripcion:document.getElementById("vd").value.trim(),unidades:m};d.innerHTML='<span style="color:#888">Guardando...</span>';try{if(o){if(await pd(t.id,o,_),v>0){const T=await hn(()=>Promise.resolve().then(()=>ni),void 0).then(P=>P.getStockDoc(t.id,o)),D=T?T.total:0,V=v-D;V!==0&&await to(t.id,o,V,_.nombre)}o=null}else{const T=await ud(t.id,_);v>0&&T&&await to(t.id,T,v,_.nombre)}a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none",d.innerHTML='<span style="color:#3B6D11">✓ Guardado correctamente</span>',setTimeout(()=>{const T=document.getElementById("vm");T&&(T.innerHTML="")},3e3)}catch(T){d.innerHTML=`<span style="color:#A32D2D">Error: ${T.message}</span>`}},window._editarV=async l=>{const d=i.find(h=>h.fireId===l);if(!d)return;try{const{getStockDoc:h}=await hn(async()=>{const{getStockDoc:_}=await Promise.resolve().then(()=>ni);return{getStockDoc:_}},void 0),m=await h(t.id,l),v=document.getElementById("vs");v&&m&&(v.value=m.total||"")}catch{}o=l,document.getElementById("form-titulo").textContent=`Editando: ${d.nombre}`,document.getElementById("vn").value=d.nombre||"",document.getElementById("vv").value=d.varietal||"",document.getElementById("vc").value=d.cosecha||"",document.getElementById("vd").value=d.descripcion||"";const p=(d.unidades||[]).find(h=>h.u==="Botella"),x=(d.unidades||[]).find(h=>h.unidadesPorCaja);document.getElementById("vb").value=(p==null?void 0:p.p)||"",document.getElementById("vuc")&&(document.getElementById("vuc").value=(x==null?void 0:x.unidadesPorCaja)||""),document.getElementById("vpc")&&(document.getElementById("vpc").value=(x==null?void 0:x.p)||""),document.getElementById("btn-cancelar-edit").style.display="block",window.scrollTo({top:0,behavior:"smooth"})},window._cancelarEdit=()=>{o=null,a(),document.getElementById("form-titulo").textContent="Agregar vino",document.getElementById("btn-cancelar-edit").style.display="none"},window._eliminarV=async l=>{const d=i.find(p=>p.fireId===l);confirm(`¿Eliminar "${d==null?void 0:d.nombre}"?`)&&await hd(t.id,l)}}async function Zm(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Ym(n){ne();let t=[],e=[],i=null,o=null,s=!1;n.innerHTML=Ht({title:"🚪 Control de puerta",sub:"Solo ingresa quien tiene bono pagado",backHref:"/admin"})+`
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
    </div>`,xo(p=>{t=p,a()}),window._vPuerta=async()=>{var v;const p=document.getElementById("scan-cod").value.trim().toUpperCase(),x=document.getElementById("scan-res");if(!p)return;const h=t.find(_=>_.codigo===p);if(!h){x.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">❌ Código no encontrado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:4px">${p} no existe en el sistema.</p>
      </div>`;return}if(h.estado==="ingresado"){x.innerHTML=`<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">⛔ QR ya utilizado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:6px">
          <strong>${h.nombre} ${h.apellido}</strong> ya ingresó al evento.<br>
          Este QR no puede usarse nuevamente.
        </p>
      </div>`;return}if(h.estado==="pendiente"){x.innerHTML=`<div class="result-warn">
        <p style="font-size:16px;font-weight:500;color:#854F0B">⏳ Pago pendiente</p>
        <p style="font-size:12px;color:#633806;margin-top:4px">
          <strong>${h.nombre} ${h.apellido}</strong> no abonó el bono ($35.000).
        </p>
        <button class="btn btn-a" style="margin-top:10px;width:100%;font-size:12px"
          onclick="window._cobrarPuerta('${h.fireId}','${h.codigo}')">
          💰 Cobrar $35.000 y habilitar ingreso
        </button>
      </div>`;return}i=h;const m=h.nombre[0]+(((v=h.apellido)==null?void 0:v[0])||"");document.getElementById("mc-avatar").textContent=m,document.getElementById("mc-nombre").textContent=h.nombre+" "+h.apellido,document.getElementById("mc-codigo").textContent=p+(h.familia?" · Familia "+h.familia:""),document.getElementById("mc-estado").innerHTML='<span class="badge b-pago">✅ Bono confirmado</span>',document.getElementById("modal-confirm").style.display="flex"},window._confirmarIngreso=async()=>{if(!i)return;document.getElementById("modal-confirm").style.display="none";const p=i;i=null,await Ae(p.fireId,{estado:"ingresado"});const x=new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});e.unshift({nombre:p.nombre+" "+p.apellido,codigo:p.codigo,hora:x}),document.getElementById("scan-res").innerHTML=`<div class="result-ok">
      <p style="font-size:20px;font-weight:500;color:#1A3A5C">✅ ¡Bienvenido/a!</p>
      <p style="font-size:16px;margin-top:6px">${p.nombre} ${p.apellido}</p>
      <p style="font-size:13px;color:#3B6D11;margin-top:4px">${p.codigo} · ${x}</p>
    </div>`,document.getElementById("scan-cod").value="",a()},window._cobrarPuerta=async(p,x)=>{await Ae(p,{estado:"pagado"}),document.getElementById("scan-cod").value=x,window._vPuerta()};function a(){const p=document.getElementById("historial-puerta");if(!p)return;const x=t.filter(h=>h.estado==="ingresado");if(!x.length&&!e.length){p.innerHTML='<p style="font-size:12px;color:#aaa;text-align:center">ÚLTIMOS INGRESOS — Sin ingresos todavía</p>';return}p.innerHTML=`
      <p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">
        INGRESOS AL EVENTO (${x.length})
      </p>
      ${x.slice(0,50).map(h=>{var m;return`
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;
          border-bottom:.5px solid #E8EFF5">
          <div class="avatar" style="width:32px;height:32px;font-size:11px;flex-shrink:0">
            ${h.nombre[0]}${((m=h.apellido)==null?void 0:m[0])||""}
          </div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:500">${h.nombre} ${h.apellido}</div>
            <div style="font-size:11px;color:#888">${h.codigo}</div>
          </div>
          <span style="font-size:11px;color:#3A7D44;font-weight:500">✅ Ingresó</span>
        </div>`}).join("")}
    `}window._abrirScannerPuerta=async()=>{const p=document.getElementById("scan-overlay-puerta");p.style.display="flex";const x=document.getElementById("scan-status-puerta");try{await Zm(),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const h=document.getElementById("scan-video-puerta");h.srcObject=o,s=!0,x&&(x.textContent="Buscando QR...");const m=document.createElement("canvas"),v=m.getContext("2d",{willReadFrequently:!0}),_=()=>{if(s){if(h.readyState===h.HAVE_ENOUGH_DATA&&h.videoWidth>0){m.width=h.videoWidth,m.height=h.videoHeight,v.drawImage(h,0,0);const C=v.getImageData(0,0,m.width,m.height),T=window.jsQR(C.data,C.width,C.height,{inversionAttempts:"dontInvert"});if(T&&T.data){const D=T.data;window._cerrarScannerPuerta();const V=D.match(/INV-\d+/),P=D.match(/inv=([A-Z0-9]+)/i);V?(document.getElementById("scan-cod").value=V[0],window._vPuerta()):P&&ei(P[1]).then(M=>{M?(document.getElementById("scan-cod").value=M.codigo,window._vPuerta()):x&&(x.textContent="Invitado no encontrado")});return}}s&&requestAnimationFrame(_)}};h.addEventListener("loadeddata",()=>requestAnimationFrame(_))}catch{x&&(x.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerPuerta=()=>{s=!1,o&&(o.getTracks().forEach(x=>x.stop()),o=null);const p=document.getElementById("scan-overlay-puerta");p&&(p.style.display="none")};const l=document.createElement("button");l.innerHTML="?",l.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",l.onclick=()=>document.getElementById("modal-ayuda-puerta").style.display="flex",document.body.appendChild(l);const d=document.createElement("div");d.id="modal-ayuda-puerta",d.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",d.innerHTML='<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">Control de puerta</div><button onclick="document.getElementById(&quot;modal-ayuda-puerta&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📷 Escanear QR</div><div>Escaneá el QR del invitado con la cámara. El sistema verifica automáticamente si el bono está confirmado y registra el ingreso.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">⌨️ Ingresar código manualmente</div><div>Si la cámara no funciona, escribí el código del invitado (ej: INV-0001) y tocá <strong>Verificar</strong>.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">✅ Estados posibles</div><div><strong>Bono confirmado</strong> — puede ingresar.<br><strong>Pendiente de pago</strong> — puede ingresar y pagar en puerta.<br><strong>Ya ingresó</strong> — QR ya usado, no permitir reingreso.<br><strong>Invalidado</strong> — no permitir ingreso.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ Cada QR es de un solo uso. Si alguien ya ingresó el sistema lo indica claramente.</div></div></div>',d.addEventListener("click",p=>{p.target===d&&(d.style.display="none")}),document.body.appendChild(d)}window.marcarEntregado=gs;const re=n=>Number(n).toLocaleString("es-AR");function tg(n){ne();let t=[],e=null,i=[],o="todos";n.innerHTML=Ht({title:"🚚 Logística",sub:"Envíos y pedidos especiales",backHref:"/admin"})+`
    <div class="nav">
      <button class="on" onclick="window._logVista('todos',this)">📋 Pedidos</button>
      <button onclick="window._logVista('pendientes',this)">⏳ Pendientes</button>
      <button onclick="window._logVista('especiales',this)">📦 Pedidos especiales</button>
      <button onclick="window._logVista('envios',this)">🚚 Envíos</button>
    </div>
    <div class="wrap" id="log-body"></div>`,wo(h=>{t=h,!e&&o==="envios"&&s(),!e&&o==="pendientes"&&a(),!e&&o==="todos"&&p(),o==="todos"&&p()}),pn(h=>{i=h,!e&&o==="especiales"&&x(),!e&&o==="envios"&&s()}),window._logVista=(h,m)=>{o=h,e=null,document.querySelectorAll(".nav button").forEach(v=>v.classList.remove("on")),m.classList.add("on"),h==="envios"?s():h==="especiales"?x():h==="pendientes"?a():p()};function s(){const h=document.getElementById("log-body");if(!h)return;e=null;const m=t.filter(P=>P.retiro==="envio"),v=i.filter(P=>P.estado==="listo").map(P=>({...P,standNombre:"Pedido especial · "+(P.peNum||""),retiro:"envio",invNombre:P.invNombre,invCodigo:P.invCodigo,esPedidoEspecial:!0}));if(!m.length&&!v.length){h.innerHTML='<div class="empty">🚚<br><br>Sin pedidos de envío</div>';return}const _=[...m.filter(P=>P.estado==="pagado"||P.estado==="listo"),...v],C=m.filter(P=>P.estado==="retirado"),T=m.filter(P=>P.estado==="entregado"),D=m.filter(P=>P.estado==="reembolsado"||P.estado==="cancelado"),V=(P,M,N)=>{var q;return`
      <div class="card" style="margin-bottom:10px;border-left:4px solid ${M};cursor:pointer"
        onclick="window._verDetalleLog('${P.fireId}')">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
          <div>
            <div style="font-size:14px;font-weight:500;color:#1A3A5C">${P.invNombre||""}</div>
            <div style="font-size:11px;color:#888">${P.standNombre} · #${(q=P.fireId)==null?void 0:q.slice(-4).toUpperCase()}</div>
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
      </div>`};h.innerHTML="",_.length&&(h.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:8px;letter-spacing:.05em">
        PEDIDOS PARA ENVIAR A DOMICILIO (${_.length})</p>`,h.innerHTML+=_.map(P=>V(P,"#D97706")).join("")),C.length&&(h.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#5BA4CF;margin:14px 0 8px;letter-spacing:.05em">
        RETIRADOS — EN CAMINO (${C.length})</p>`,h.innerHTML+=C.map(P=>V(P,"#5BA4CF")).join("")),T.length&&(h.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#3A7D44;margin:14px 0 8px;letter-spacing:.05em">
        ENTREGADOS (${T.length})</p>`,h.innerHTML+=T.map(P=>V(P,"#3A7D44")).join("")),D.length&&(h.innerHTML+=`<p style="font-size:11px;font-weight:500;color:#C0392B;margin:14px 0 8px;letter-spacing:.05em">
        REEMBOLSADOS (${D.length})</p>`,h.innerHTML+=D.map(P=>V(P,"#C0392B")).join(""))}window._verDetalleLog=h=>{e=h;const m=t.find(V=>V.fireId===h)||i.find(V=>V.fireId===h);if(!m)return;const v=i.find(V=>V.fireId===h);if(v){const V=document.getElementById("log-body"),P=N=>Number(N).toLocaleString("es-AR"),M=v.envio;V.innerHTML='<div class="wrap" style="max-width:500px;margin:0 auto"><button class="btn" onclick="window._logVista(&quot;envios&quot;, document.querySelector(&quot;.nav button:nth-child(1)&quot;))" style="margin-bottom:12px">← Volver</button><div class="card" style="margin-bottom:12px;border-left:4px solid #5BA4CF"><div style="font-size:16px;font-weight:700;color:#1A3A5C">'+(v.peNum||"")+'</div><div style="font-size:14px;font-weight:500;margin-top:2px">'+(v.invNombre||"")+'</div><div style="font-size:12px;color:#888">'+(v.invCodigo||"")+(v.familia?" · Familia "+v.familia:"")+'</div><div style="margin-top:8px">'+(v.items||[]).map(N=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid #eee"><span>'+N.desc+"</span><strong>$"+P(N.sub)+"</strong></div>").join("")+'</div><div style="display:flex;justify-content:space-between;font-size:15px;font-weight:600;color:#1A3A5C;margin-top:8px"><span>Total</span><span>$'+P(v.total||0)+"</span></div></div>"+(M?'<div class="card" style="margin-bottom:12px;background:#f0f4f8"><p style="font-size:11px;font-weight:500;color:#888;margin-bottom:6px">DATOS DE ENTREGA</p><div style="font-size:13px"><strong>'+M.nombre+"</strong> · "+M.tel+"<br>"+M.calle+" "+M.numero+(M.piso?", "+M.piso:"")+", "+M.localidad+", "+M.provincia+"</div></div>":"")+'<button class="btn btn-b" style="width:100%;padding:10px;margin-bottom:8px" onclick="window._peCargarDireccion(&quot;'+h+'&quot;)">✏️ '+(M?"Editar dirección":"Cargar dirección")+"</button></div>";return}const _=document.getElementById("log-body");if(!_)return;const C=m.envio||{},T={pagado:{label:"💳 Pagado — Pendiente de retiro",color:"#D97706",badge:"b-pend"},listo:{label:"✅ Listo para retirar",color:"#D97706",badge:"b-list"},retirado:{label:"📦 Retirado del stand",color:"#5BA4CF",badge:"b-pago"},entregado:{label:"🏠 Entregado a domicilio",color:"#3A7D44",badge:"b-entr"},reembolsado:{label:"↩️ Reembolsado",color:"#C0392B",badge:"b-canc"},cancelado:{label:"❌ Cancelado",color:"#C0392B",badge:"b-canc"}},D=T[m.estado]||T.pagado;_.innerHTML=`
      <button class="btn" onclick="window._volverLog()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>

      <div class="card" style="margin-bottom:12px;border-left:4px solid ${D.color}">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px">
          <div>
            <div style="font-size:16px;font-weight:500;color:#1A3A5C">${m.invNombre||""}</div>
            <div style="font-size:12px;color:#888">${m.invCodigo||""} · Stand: ${m.standNombre}</div>
          </div>
          <span class="badge ${D.badge}" style="font-size:11px">${D.label}</span>
        </div>

        ${(m.items||[]).map(V=>`
          <div style="display:flex;justify-content:space-between;font-size:13px;
            padding:5px 0;border-bottom:.5px solid #E8EFF5;color:#555">
            <span>${V.desc}</span><strong>$${re(V.sub)}</strong>
          </div>`).join("")}

        <div style="display:flex;justify-content:space-between;font-size:15px;
          font-weight:500;margin-top:10px;color:#1A3A5C">
          <span>Total</span><span>$${re(m.total||0)}</span>
        </div>
      </div>

      <!-- Datos de envío -->
      <div class="card" style="margin-bottom:12px;background:#F5F0FB;border:1px solid #D4BEFC">
        <p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">🚚 Datos de envío</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:13px">
          <div><span style="color:#888;font-size:11px">Destinatario</span><br><strong>${C.nombre||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Teléfono</span><br><strong>${C.tel||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Calle y número</span><br><strong>${C.calle||""} ${C.numero||""}</strong></div>
          <div><span style="color:#888;font-size:11px">Piso / Dpto</span><br><strong>${C.piso||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Localidad</span><br><strong>${C.localidad||C.dir||"—"}</strong></div>
          <div><span style="color:#888;font-size:11px">Provincia</span><br><strong>${C.provincia||"—"}</strong></div>
        </div>
      </div>

      <!-- Botones de acción según estado -->
      ${m.estado==="pagado"||m.estado==="listo"?`
        <button class="btn btn-b" style="width:100%;padding:12px;font-size:14px;margin-bottom:8px"
          onclick="window._retirarStand('${m.fireId}')">
          📦 Confirmar retiro del stand
        </button>`:""}
      ${m.estado==="retirado"?`
        <button class="btn btn-g" style="width:100%;padding:12px;font-size:14px;margin-bottom:8px"
          onclick="window._entregarDom('${m.fireId}')">
          🏠 Confirmar entrega a domicilio
        </button>`:""}
      <button class="btn" style="width:100%;padding:10px;font-size:13px"
        onclick="window._volverLog()">Volver a la lista</button>`},window._retirarStand=async h=>{await cd(h),window._verDetalleLog(h)},window._entregarDom=async h=>{await dd(h),window._verDetalleLog(h)};function a(){const h=document.getElementById("log-body");if(!h)return;e=null;const m=t.filter(T=>T.estado==="pagado"||T.estado==="listo");if(!m.length){h.innerHTML='<div class="empty">⏳<br><br>Sin pedidos pendientes de entrega</div>';return}const v={};m.forEach(T=>{const D=T.invFamilia||T.familia||"";v[D]||(v[D]={pedidos:[],total:0}),v[D].pedidos.push(T),v[D].total+=T.total||0});const _=Object.entries(v).filter(([T])=>T===""),C=[...Object.entries(v).filter(([T])=>T!=="").sort((T,D)=>T[0].localeCompare(D[0])),..._.map(([,T])=>["Sin asignar",T])];h.innerHTML='<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:12px;letter-spacing:.05em">PEDIDOS PENDIENTES DE ENTREGA ('+m.length+")</p>"+C.map(([T,D])=>'<div class="card" style="margin-bottom:12px;border-left:4px solid #D97706"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><div style="font-size:14px;font-weight:600;color:#1A3A5C">Familia '+T+'</div><div style="font-size:13px;font-weight:500">$'+re(D.total)+"</div></div>"+D.pedidos.map(V=>'<div style="padding:6px 0;border-bottom:.5px solid #E8EFF5"><div style="display:flex;justify-content:space-between;font-size:13px"><span style="font-weight:500">'+(V.invNombre||"")+"</span><span>$"+re(V.total||0)+'</span></div><div style="font-size:11px;color:#888;margin-top:2px">'+(V.standNombre||"")+(V.voucherNum?" · VOC-"+String(V.voucherNum).padStart(3,"0"):"")+'</div><div style="font-size:11px;color:#555;margin-top:2px">'+(V.items||[]).map(P=>P.desc).join(", ")+"</div></div>").join("")+"</div>").join("")}let l="pendientes",d=null;function p(){const h=document.getElementById("log-body");if(!h)return;if(e=null,!document.getElementById("log-scan-overlay")){const v=document.createElement("div");v.id="log-scan-overlay",v.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(26,58,92,.92);z-index:300;flex-direction:column;align-items:center;justify-content:center;gap:16px",v.innerHTML='<p style="color:#fff;font-size:14px;font-weight:500">Escaneá el voucher del cliente</p><div style="position:relative"><video id="log-scan-video" autoplay playsinline muted style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video></div><p id="log-scan-status" style="color:#C9A96E;font-size:13px">Iniciando...</p><button onclick="window._logCerrarScanner()" style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);padding:8px 20px;border-radius:8px;cursor:pointer">Cancelar</button>',document.body.appendChild(v)}if(!document.getElementById("log-voucher-modal")){const v=document.createElement("div");v.id="log-voucher-modal",v.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:200;align-items:center;justify-content:center;padding:16px",v.innerHTML='<div class="card" style="width:100%;max-width:380px"><div id="log-voucher-content"></div></div>',document.body.appendChild(v)}const m=l==="pendientes"?t.filter(v=>(v.estado==="pagado"||v.estado==="listo")&&v.retiro!=="envio"):l==="entregados"?t.filter(v=>v.estado==="entregado"&&v.retiro!=="envio"):t.filter(v=>v.retiro!=="envio");h.innerHTML='<div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;align-items:center"><button class="btn sf-btn '+(l==="pendientes"?"active":"")+'" onclick="window._logSetF(&quot;pendientes&quot;,this)">🟢 Listos</button><button class="btn sf-btn '+(l==="entregados"?"active":"")+'" onclick="window._logSetF(&quot;entregados&quot;,this)">✅ Entregados</button><button class="btn sf-btn '+(l==="todos"?"active":"")+'" onclick="window._logSetF(&quot;todos&quot;,this)">📋 Todos</button><button class="btn btn-b" style="font-size:11px;padding:5px 10px;margin-left:auto" onclick="window._logEscanearVoucher()">📷 Escanear voucher</button></div><div id="log-pedidos-lista">'+(m.length?m.map(v=>{const _=v.estado==="entregado";return'<div class="card" style="margin-bottom:10px;border-left:4px solid '+(_?"#3A7D44":"#5BA4CF")+'"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:15px;font-weight:500;color:#1A3A5C">'+(v.invNombre||"Invitado")+"</div>"+(v.voucherNum?'<div style="font-size:10px;color:#5BA4CF;font-weight:500">VOC-'+String(v.voucherNum).padStart(3,"0")+"</div>":"")+'<div style="font-size:11px;color:#888">'+(v.invCodigo||"")+" · "+(v.standNombre||"")+'</div></div><span class="badge '+(_?"b-entr":"b-pago")+'">'+(_?"✅ Entregado":"💳 Pagado")+"</span></div>"+(v.items||[]).map(C=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555"><span>'+C.desc+"</span><strong>$"+re(C.sub)+"</strong></div>").join("")+'<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$'+re(v.total||0)+'</span></div><div style="display:flex;gap:6px;margin-top:10px">'+(_?"":'<button class="btn btn-g" style="flex:1;padding:9px" onclick="window._logScanearRemito(&quot;'+v.fireId+'&quot;)">📷 Escanear</button>')+'<button class="btn" style="flex:1;padding:9px" onclick="window._logImprimirRemito(&quot;'+v.fireId+"&quot;,"+_+')">🖨️ '+(_?"Remito entregado":"Imprimir remito")+"</button></div></div>"}).join(""):'<div class="empty">Sin pedidos</div>')+"</div>"}window._logSetF=(h,m)=>{l=h,p()},window._logScanearRemito=async h=>{window.jsQR||await new Promise((v,_)=>{const C=document.createElement("script");C.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",C.onload=v,C.onerror=_,document.head.appendChild(C)});const m=document.getElementById("log-scan-overlay");m.style.display="flex";try{const v=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),_=document.getElementById("log-scan-video");_.srcObject=v,d=()=>{v.getTracks().forEach(V=>V.stop()),m.style.display="none"};const C=document.createElement("canvas"),T=C.getContext("2d"),D=()=>{if(m.style.display!=="none"){if(_.readyState===_.HAVE_ENOUGH_DATA){C.width=_.videoWidth,C.height=_.videoHeight,T.drawImage(_,0,0);const V=window.jsQR(T.getImageData(0,0,C.width,C.height).data,C.width,C.height);if(V){d();const P=document.getElementById("log-voucher-modal"),M=document.getElementById("log-voucher-content");V.data.includes(h)?window._logMostrarModalValido(h):window._logMostrarModalInvalido(),P.style.display="flex";return}}requestAnimationFrame(D)}};_.addEventListener("loadeddata",()=>requestAnimationFrame(D))}catch{document.getElementById("log-scan-status").textContent="No se pudo acceder a la cámara."}},window._logCerrarScanner=()=>{d&&d(),d=null},window._logEscanearVoucher=async()=>{window.jsQR||await new Promise((m,v)=>{const _=document.createElement("script");_.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",_.onload=m,_.onerror=v,document.head.appendChild(_)});const h=document.getElementById("log-scan-overlay");h.style.display="flex";try{const m=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),v=document.getElementById("log-scan-video");v.srcObject=m,d=()=>{m.getTracks().forEach(D=>D.stop()),h.style.display="none"};const _=document.createElement("canvas"),C=_.getContext("2d"),T=()=>{if(h.style.display!=="none"){if(v.readyState===v.HAVE_ENOUGH_DATA){_.width=v.videoWidth,_.height=v.videoHeight,C.drawImage(v,0,0);const D=window.jsQR(C.getImageData(0,0,_.width,_.height).data,_.width,_.height);if(D){d();const V=t.find(N=>N.fireId===D.data),P=document.getElementById("log-voucher-modal"),M=document.getElementById("log-voucher-content");if(V){const N=V.estado==="entregado";window._logMostrarPedido(V)}else window._logMostrarNoEncontrado();P.style.display="flex";return}}requestAnimationFrame(T)}};v.addEventListener("loadeddata",()=>requestAnimationFrame(T))}catch{document.getElementById("log-scan-status").textContent="No se pudo acceder a la cámara."}},window._logImprimirRemito=(h,m)=>{const v=t.find(D=>D.fireId===h);if(!v)return;const _=D=>Number(D).toLocaleString("es-AR"),C=v.voucherNum?"VOC-"+String(v.voucherNum).padStart(3,"0"):"VOC-000",T=window.open("","_blank");T.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C+'</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif;padding:16px}.voucher{border:2px solid #1A3A5C;border-radius:10px;padding:16px}.header{display:flex;justify-content:space-between;margin-bottom:10px;border-bottom:1px solid #D6E4F0;padding-bottom:8px}.evento{font-size:10px;color:#888;letter-spacing:.08em}.voc-num{font-size:22px;font-weight:700;color:#1A3A5C;margin-top:2px}.stand{font-size:18px;font-weight:600;color:#1A3A5C}.item{display:flex;justify-content:space-between;font-size:15px;padding:4px 0;border-bottom:.5px solid #eee}.total{display:flex;justify-content:space-between;font-size:20px;font-weight:600;margin-top:8px;color:#1A3A5C}.badge{color:#fff;padding:3px 12px;border-radius:20px;font-size:11px;display:inline-block}.sello{text-align:center;margin-top:16px;padding:10px;border:3px solid #3A7D44;border-radius:8px;color:#3A7D44;font-size:22px;font-weight:700;letter-spacing:.1em}@media print{body{padding:0}}</style></head><body><div class="voucher"><div class="header"><div><div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #'+(v.standId||"")+'</div><div class="voc-num">'+C+'</div><div class="stand">'+(v.standNombre||"")+'</div><div style="font-size:13px;color:#555">'+(v.invNombre||"")+" · "+(v.invCodigo||"")+'</div></div><div style="text-align:right"><div class="badge" style="background:'+(m?"#1A3A5C":"#3A7D44")+'">'+(m?"✅ ENTREGADO":"✅ PAGADO")+"</div></div></div>"+(v.items||[]).map(D=>'<div class="item"><span>'+D.desc+"</span><strong>$"+_(D.sub)+"</strong></div>").join("")+'<div class="total"><span>Total</span><span>$'+_(v.total||0)+"</span></div>"+(m?'<div class="sello">✅ ENTREGADO</div>':"")+"</div><script>setTimeout(()=>window.print(),500)<\/script></body></html>"),T.document.close()},window._logMostrarPedido=h=>{const m=document.getElementById("log-voucher-content"),v=document.getElementById("log-voucher-modal"),_=h.estado==="entregado",C=D=>Number(D).toLocaleString("es-AR");let T='<div style="padding:8px 0 16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C;margin-bottom:4px">'+(h.invNombre||"")+'</div><div style="font-size:12px;color:#888;margin-bottom:12px">VOC-'+String(h.voucherNum||0).padStart(3,"0")+" · "+(h.standNombre||"")+"</div>"+(h.items||[]).map(D=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #eee"><span>'+D.desc+"</span><strong>$"+C(D.sub)+"</strong></div>").join("")+'<div style="display:flex;justify-content:space-between;font-size:15px;font-weight:600;color:#1A3A5C;margin-top:8px;margin-bottom:16px"><span>Total</span><span>$'+C(h.total||0)+"</span></div>";_?T+='<div style="text-align:center;color:#3A7D44;font-weight:600;margin-bottom:12px">✅ Ya entregado</div>':T+='<button onclick="marcarEntregado(&quot;'+h.fireId+'&quot;);document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="width:100%;padding:10px;border-radius:8px;border:none;background:#3A7D44;color:#fff;font-size:14px;font-weight:600;cursor:pointer;margin-bottom:8px">✅ Confirmar entrega</button>',T+='<button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="width:100%;padding:10px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:14px;cursor:pointer">Cerrar</button></div>',m.innerHTML=T,v.style.display="flex"},window._logMostrarNoEncontrado=()=>{const h=document.getElementById("log-voucher-content"),m=document.getElementById("log-voucher-modal");h.innerHTML='<div style="text-align:center;padding:16px"><div style="font-size:40px;margin-bottom:8px">❌</div><div style="font-size:16px;color:#C0392B;margin-bottom:12px">Voucher no encontrado</div><button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 24px;border-radius:8px;border:none;background:#1A3A5C;color:#fff;font-size:14px;cursor:pointer">Cerrar</button></div>',m.style.display="flex"},window._logMostrarModalValido=h=>{const m=document.getElementById("log-voucher-content"),v=document.getElementById("log-voucher-modal");m.innerHTML='<div style="text-align:center;padding:8px 0 16px"><div style="font-size:48px;margin-bottom:8px">✅</div><div style="font-size:18px;font-weight:700;color:#3A7D44;margin-bottom:4px">QR válido</div><div style="font-size:14px;color:#555;margin-bottom:20px">¿Confirmás la entrega?</div><div style="display:flex;gap:10px;justify-content:center"><button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 20px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:14px;cursor:pointer">Cancelar</button><button onclick="marcarEntregado(&quot;'+h+'&quot;);document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 20px;border-radius:8px;border:none;background:#3A7D44;color:#fff;font-size:14px;font-weight:600;cursor:pointer">Confirmar entrega</button></div></div>',v.style.display="flex"},window._logMostrarModalInvalido=()=>{const h=document.getElementById("log-voucher-content"),m=document.getElementById("log-voucher-modal");h.innerHTML='<div style="text-align:center;padding:8px 0 16px"><div style="font-size:48px;margin-bottom:8px">❌</div><div style="font-size:18px;font-weight:700;color:#C0392B;margin-bottom:4px">QR no corresponde</div><div style="font-size:14px;color:#555;margin-bottom:20px">Este QR no pertenece al remito seleccionado.</div><button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 24px;border-radius:8px;border:none;background:#1A3A5C;color:#fff;font-size:14px;font-weight:600;cursor:pointer">Cerrar</button></div>',m.style.display="flex"},window._volverLog=()=>{e=null,o==="envios"?s():x()};function x(){const h=document.getElementById("log-body");if(!h)return;if(e=null,!i.length){h.innerHTML='<div class="empty">📦<br><br>Sin pedidos especiales todavía</div>';return}const m=i.filter(C=>C.estado==="pagado"),v=i.filter(C=>C.estado==="entregado"),_=C=>'<div class="card" style="margin-bottom:10px;border-left:4px solid #5BA4CF"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px"><div><div style="font-size:14px;font-weight:500;color:#1A3A5C">'+(C.invNombre||"")+'</div><div style="font-size:11px;color:#888">'+(C.invCodigo||"")+" · "+(C.peNum||"")+"</div>"+(C.familia?'<div style="font-size:11px;color:#5BA4CF;margin-top:2px">Familia '+C.familia+"</div>":"")+'</div><div style="text-align:right"><div style="font-size:14px;font-weight:500">$'+re(C.total||0)+'</div><span class="badge '+(C.estado==="entregado"?"b-entr":"b-pago")+'" style="font-size:10px">'+(C.estado==="entregado"?"Entregado":"Pendiente")+'</span></div></div><div style="font-size:12px;color:#555;margin-bottom:8px">'+(C.items||[]).map(T=>T.desc+" — $"+re(T.sub)).join("<br>")+"</div>"+(C.estado!=="listo"&&C.estado!=="entregado"?'<button class="btn btn-b" style="width:100%;padding:8px" onclick="window._peCargarDireccion(&quot;'+C.fireId+'&quot;)">📍 Cargar dirección de entrega</button>':'<div style="font-size:12px;color:#3A7D44;text-align:center;padding:6px">✅ Dirección cargada — en Envíos</div>')+"</div>";h.innerHTML="",m.length&&(h.innerHTML+='<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:8px;letter-spacing:.05em">PENDIENTES DE DATOS DE ENVÍO ('+m.length+")</p>",h.innerHTML+=m.map(_).join("")),v.length&&(h.innerHTML+='<p style="font-size:11px;font-weight:500;color:#3A7D44;margin:14px 0 8px;letter-spacing:.05em">ENTREGADOS ('+v.length+")</p>",h.innerHTML+=v.map(_).join(""))}window._peCargarDireccion=h=>{var _,C,T,D,V,P,M,N;const m=i.find(q=>q.fireId===h);if(!m)return;const v=document.getElementById("log-body");v.innerHTML=`
      <div class="wrap" style="max-width:500px;margin:0 auto">
        <button class="btn" onclick="window._logVista('especiales', document.querySelector('.nav button:nth-child(2)'))" style="margin-bottom:12px">← Volver</button>
        <div class="card" style="margin-bottom:12px;border-left:4px solid #5BA4CF">
          <div style="font-size:14px;font-weight:600;color:#1A3A5C">${m.peNum} · ${m.invNombre}</div>
          <div style="font-size:12px;color:#888">${m.familia?"Familia "+m.familia:""} · $${re(m.total||0)}</div>
        </div>
        <div class="card" style="margin-bottom:12px">
          <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:10px">📍 Dirección de entrega</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Nombre destinatario</label><input id="pe-log-nombre" style="margin-top:3px" placeholder="Nombre completo" value="${((_=m.envio)==null?void 0:_.nombre)||m.invNombre||""}"></div>
            <div><label style="font-size:11px;color:#666">Teléfono</label><input id="pe-log-tel" style="margin-top:3px" placeholder="+54 9 11..." value="${((C=m.envio)==null?void 0:C.tel)||""}"></div>
          </div>
          <div style="display:grid;grid-template-columns:2fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Calle</label><input id="pe-log-calle" style="margin-top:3px" value="${((T=m.envio)==null?void 0:T.calle)||""}"></div>
            <div><label style="font-size:11px;color:#666">Número</label><input id="pe-log-num" style="margin-top:3px" value="${((D=m.envio)==null?void 0:D.numero)||""}"></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Piso / Dpto</label><input id="pe-log-piso" style="margin-top:3px" value="${((V=m.envio)==null?void 0:V.piso)||""}"></div>
            <div><label style="font-size:11px;color:#666">Localidad</label><input id="pe-log-loc" style="margin-top:3px" value="${((P=m.envio)==null?void 0:P.localidad)||""}"></div>
          </div>
          <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Provincia</label><input id="pe-log-prov" style="margin-top:3px" value="${((M=m.envio)==null?void 0:M.provincia)||"Buenos Aires"}"></div>
          <div style="margin-bottom:12px"><label style="font-size:11px;color:#666">Observaciones</label><input id="pe-log-obs" style="margin-top:3px" placeholder="Ej: dejar en portería" value="${((N=m.envio)==null?void 0:N.observaciones)||""}"></div>
          <button class="btn btn-v" style="width:100%;padding:10px" onclick="window._peGuardarDirLog('${h}')">Guardar y pasar a Envíos</button>
          <div id="pe-log-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
        </div>
      </div>`},window._peGuardarDirLog=async h=>{var _;const m={nombre:document.getElementById("pe-log-nombre").value.trim(),tel:document.getElementById("pe-log-tel").value.trim(),calle:document.getElementById("pe-log-calle").value.trim(),numero:document.getElementById("pe-log-num").value.trim(),piso:document.getElementById("pe-log-piso").value.trim(),localidad:document.getElementById("pe-log-loc").value.trim(),provincia:document.getElementById("pe-log-prov").value.trim(),observaciones:((_=document.getElementById("pe-log-obs"))==null?void 0:_.value.trim())||""},v=document.getElementById("pe-log-msg");if(!m.nombre||!m.calle||!m.localidad){v.innerHTML='<span style="color:#C0392B">Completá nombre, calle y localidad.</span>';return}v.innerHTML='<span style="color:#888">Guardando...</span>';try{await vs(h,{envio:m,estado:"listo"}),v.innerHTML='<span style="color:#3A7D44">✓ Guardado — aparece en Envíos</span>',setTimeout(()=>window._logVista("especiales",document.querySelector(".nav button:nth-child(2)")),1500)}catch(C){v.innerHTML='<span style="color:#C0392B">Error: '+C.message+"</span>"}}}async function _d(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function eg(n,t,e){await _d();const i=document.getElementById(n);if(i)try{const o=window.qrcode(0,"M");o.addData(String(t)),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let p=0;p<s;p++)o.isDark(d,p)&&l.fillRect(p*a,d*a,a,a)}catch(o){console.error("QR error:",o)}}async function ng(){window.jsQR||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}async function ig(n,t){ne(),n.innerHTML=Mi(null)+`<div style="text-align:center;padding:40px 16px">
    <div style="font-size:13px;color:#aaa">Cargando...</div></div>`;const e=await ei(t);if(!e){Al(n,"Token inválido","El link no es válido o expiró.");return}if(e.estado==="invalidado"){Al(n,"Acceso invalidado","Este bono fue invalidado. Consultá con la organización.");return}if(e.estado==="pendiente"){n.innerHTML=Mi(e)+`
      <div style="max-width:400px;margin:40px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">Pago pendiente</h2>
        <p style="font-size:14px;color:#666;line-height:1.6">
          Tu bono aún no fue confirmado. Una vez que abones los $35.000 recibirás tu QR de acceso.
        </p>
        <p style="font-size:12px;color:#aaa;margin-top:16px">Consultas: José Pannunzio +54 9 11 5400-1313</p>
      </div>`;return}let i=[],o=null,s=!1;const a=qt.map(m=>`
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
    </a>`).join("");n.innerHTML=Mi(e)+`
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
    </div>`,setTimeout(()=>eg("qr-acc",e.codigo,160),50);let l=[];pn(m=>{l=m.filter(v=>v.invFireId===e.fireId)}),sd(e.fireId,m=>{i=m;const v=document.getElementById("btn-mis-pedidos");v&&(v.style.display=m.length?"flex":"none",m.length&&(v.textContent="📋 Mis pedidos ("+m.length+")"));const _=document.getElementById("mis-pedidos-sec");_&&_.style.display!=="none"&&d()}),window._togglePedidos=()=>{const m=document.getElementById("mis-pedidos-sec");m&&(m.style.display=m.style.display==="none"?"block":"none",m.style.display==="block"&&d())};async function d(){const m=document.getElementById("mis-pedidos-sec");if(!m||m.style.display==="none")return;if(![...i,...l].length){m.innerHTML='<div class="empty">Sin pedidos pagados todavía</div>';return}await _d();const _=T=>Number(T).toLocaleString("es-AR"),C=l.map(T=>'<div style="background:#EBF4FA;border:.5px solid #5BA4CF;border-radius:10px;padding:14px;margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:14px;font-weight:500;color:#1A3A5C">📦 Pedido especial · '+(T.peNum||"")+'</div><div style="font-size:11px;color:#888">'+(T.estado==="listo"?"🚚 En preparación para envío":"⏳ Pendiente")+'</div></div><span style="font-size:11px;font-weight:500;color:#5BA4CF">Pedido especial</span></div>'+(T.items||[]).map(D=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid rgba(0,0,0,.08);color:#555"><span>'+D.desc+"</span><strong>$"+_(D.sub)+"</strong></div>").join("")+'<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$'+_(T.total||0)+"</span></div>"+(T.envio?'<div style="font-size:12px;color:#185FA5;margin-top:8px">📍 Entrega: '+T.envio.calle+" "+T.envio.numero+", "+T.envio.localidad+"</div>":"")+"</div>").join("");m.innerHTML=C+i.map(T=>{const D=T.retiro==="envio",V=T.estado==="entregado",P=T.estado==="reembolsado"||T.estado==="cancelado",M=V?"#f5f5f5":P?"#FEE2E2":D?"#EBF4FA":"#EAF3DE",N=V?"#ddd":P?"#FCA5A5":D?"#5BA4CF":"#3B6D11",q=V?"✅ Entregado":P?"↩️ Reembolsado":D?"🚚 Envío a domicilio":"🟢 Listo para retirar",I=(T.items||[]).map(A=>'<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid rgba(0,0,0,.08);color:#555"><span>'+A.desc+"</span><strong>$"+_(A.sub)+"</strong></div>").join(""),y="vq-"+T.fireId;return'<div style="background:'+M+";border:.5px solid "+N+';border-radius:10px;padding:14px;margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><div><div style="font-size:14px;font-weight:500;color:#1A3A5C">'+T.standNombre+'</div><div style="font-size:11px;color:#888">Stand #'+T.standId+(T.voucherNum?" · VOC-"+String(T.voucherNum).padStart(3,"0"):"")+'</div></div><span style="font-size:11px;font-weight:500">'+q+"</span></div>"+I+'<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$'+_(T.total||0)+"</span></div>"+(!V&&!P&&!D?'<div style="margin-top:12px;text-align:center"><canvas id="'+y+'" style="border-radius:8px;display:block;margin:0 auto"></canvas><div style="font-size:11px;color:#888;margin-top:4px">Mostrá este QR en el stand para retirar</div></div>':"")+(D&&!V&&!P?'<div style="font-size:12px;color:#185FA5;margin-top:8px;text-align:center">Tu pedido será enviado a domicilio. Logística te lo hará llegar.</div>':"")+"</div>"}).join(""),i.forEach(T=>{if(T.retiro==="envio"||T.estado==="entregado"||T.estado==="reembolsado"||T.estado==="cancelado")return;const D=document.getElementById("vq-"+T.fireId);if(!(!D||!window.qrcode))try{const V=window.qrcode(0,"M");V.addData(T.fireId),V.make();const P=V.getModuleCount(),M=220,N=M/P;D.width=M,D.height=M;const q=D.getContext("2d");q.fillStyle="#fff",q.fillRect(0,0,M,M),q.fillStyle="#000";for(let I=0;I<P;I++)for(let y=0;y<P;y++)V.isDark(I,y)&&q.fillRect(y*N,I*N,N,N)}catch{}})}window._abrirScannerAcceso=async()=>{const m=document.getElementById("scan-overlay-acc");m&&(m.style.display="flex");const v=document.getElementById("scan-status-acc");try{await ng(),o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const _=document.getElementById("scan-video-acc");_.srcObject=o,s=!0,v&&(v.textContent="Buscando QR del stand...");const C=document.createElement("canvas"),T=C.getContext("2d",{willReadFrequently:!0}),D=()=>{if(s){if(_.readyState===_.HAVE_ENOUGH_DATA&&_.videoWidth>0){C.width=_.videoWidth,C.height=_.videoHeight,T.drawImage(_,0,0);const V=T.getImageData(0,0,C.width,C.height),P=window.jsQR(V.data,V.width,V.height,{inversionAttempts:"dontInvert"});if(P&&P.data){const M=P.data;window._cerrarScannerAcceso();const N=M.match(/\/stand\/(\d+)/);N&&(window.location.href="/stand/"+N[1]+"?inv="+t);return}}s&&requestAnimationFrame(D)}};_.addEventListener("loadeddata",()=>requestAnimationFrame(D))}catch{v&&(v.textContent="No se pudo acceder a la cámara.")}},window._cerrarScannerAcceso=()=>{s=!1,o&&(o.getTracks().forEach(v=>v.stop()),o=null);const m=document.getElementById("scan-overlay-acc");m&&(m.style.display="none")};let p=[],x="";window._abrirRecomendador=()=>{p=[],x="",document.getElementById("modal-ia").style.display="flex",document.getElementById("ia-respuesta").style.display="none",document.getElementById("ia-input").value=""},window._pedirRecomendacion=async()=>{var T,D;const m=document.getElementById("ia-input").value.trim();if(!m)return;const v=document.getElementById("ia-input"),_=document.querySelector('#modal-ia button[onclick*="pedirRecomendacion"]'),C=document.getElementById("ia-respuesta");if(v.disabled=!0,_&&(_.disabled=!0,_.style.opacity="0.6"),p.push({role:"user",content:m}),v.value="",C.style.display="block",C.innerHTML=h(p)+'<div id="ia-typing" style="color:#9333EA;margin-top:8px">✨ Pensando...</div>',C.scrollTop=C.scrollHeight,!x){let V=[],P=0;await new Promise(N=>{qt.forEach(q=>{An(q.id,I=>{I.forEach(y=>V.push({stand:q.id,bodega:q.nombre,region:q.region||"",vino:y.nombre,varietal:y.varietal||"",descripcion:y.descripcion||"",precios:(y.unidades||[]).map(A=>A.u+": $"+Number(A.p).toLocaleString("es-AR")).join(", ")})),P++,P===qt.length&&N()})})});const M=V.length>0?V.map(N=>"Stand #"+N.stand+" - "+N.bodega+" ("+N.region+"): "+N.vino+(N.varietal?" - "+N.varietal:"")+(N.descripcion?" - "+N.descripcion:"")+" | "+N.precios).join(`
`):"No hay vinos cargados aún.";x="Sos un sommelier experto en vinos argentinos en la Feria de Vinos SUCOVI 2027 en Olivos. El invitado se llama "+e.nombre+`. Esta es la carta completa de vinos disponibles esta noche:

`+M+`

Recomendá vinos específicos de la carta. Para cada uno mencioná el Stand #, la bodega, el vino y por qué lo recomendás. Mantené el hilo de la conversación. Sé breve, cálido y entusiasta. Respondé siempre en español rioplatense.`}try{const M=((D=(T=(await(await fetch("/api/recommend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:x,messages:p})})).json()).content)==null?void 0:T[0])==null?void 0:D.text)||"No pude generar una recomendación.";p.push({role:"assistant",content:M}),C.innerHTML=h(p),C.scrollTop=C.scrollHeight}catch{p.pop(),C.innerHTML=h(p)+'<div style="color:red;margin-top:8px">Error al conectar. Intentá de nuevo.</div>'}finally{v.disabled=!1,_&&(_.disabled=!1,_.style.opacity="1"),v.focus()}};function h(m){return m.map(v=>{const _=v.role==="user",C=v.content.replace(/\n/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");return _?'<div style="text-align:right;margin-bottom:10px"><span style="background:#9333EA;color:#fff;padding:8px 12px;border-radius:16px 16px 4px 16px;display:inline-block;max-width:85%">'+C+"</span></div>":'<div style="text-align:left;margin-bottom:10px"><span style="background:#f3e8ff;color:#1a1a1a;padding:8px 12px;border-radius:16px 16px 16px 4px;display:inline-block;max-width:85%">'+C+"</span></div>"}).join("")}}function Al(n,t,e){n.innerHTML=Mi(null)+`
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
      <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${t}</h2>
      <p style="font-size:14px;color:#666">${e}</p>
      <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>
    </div>`}async function og(n,t,e){window.qrcode||await new Promise((d,p)=>{const x=document.createElement("script");x.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",x.onload=d,x.onerror=p,document.head.appendChild(x)});const i=document.getElementById(n);if(!i)return;const o=window.qrcode(0,"M");o.addData(t),o.make();const s=o.getModuleCount(),a=e/s;i.width=e,i.height=e;const l=i.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,e,e),l.fillStyle="#000";for(let d=0;d<s;d++)for(let p=0;p<s;p++)o.isDark(d,p)&&l.fillRect(p*a,d*a,a,a)}window._imprimirQRStand=async(n,t,e,i)=>{window.qrcode||await new Promise((m,v)=>{const _=document.createElement("script");_.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",_.onload=m,_.onerror=v,document.head.appendChild(_)});const o=window.qrcode(0,"M");o.addData(i),o.make();const s=o.getModuleCount(),a=400,l=a/s,d=document.createElement("canvas");d.width=a,d.height=a;const p=d.getContext("2d");p.fillStyle="#fff",p.fillRect(0,0,a,a),p.fillStyle="#000";for(let m=0;m<s;m++)for(let v=0;v<s;v++)o.isDark(m,v)&&p.fillRect(v*l,m*l,l,l);const x=d.toDataURL("image/png"),h=window.open("","_blank");h.document.write(`<!DOCTYPE html><html><head>
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
      <img src="${x}" class="qr-img" alt="QR Stand">
      <div class="instruccion">
        Escaneá este código con tu celular<br>para ver la carta y hacer tu pedido
      </div>
    </div>
    <script>setTimeout(() => { window.print() }, 500)<\/script>
  </body></html>`),h.document.close()};function El(n){ne();const t=window.location.origin;n.innerHTML=Ht({title:"🍷 SUCOVI 2027",sub:"Panel de organización — Stands"})+`
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
    </div>`,qt.forEach(e=>setTimeout(()=>og("org-qr-"+e.id,t+"/stand/"+e.id,110),50))}const Jo=n=>Number(n).toLocaleString("es-AR");function rg(n,t){if(ne(),!t||t.estado==="invalidado"){n.innerHTML=`
      <div class="hdr"><div><h1>🛒 Carrito</h1></div></div>
      <div class="gold"></div>
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <p style="font-size:14px;color:#666">Necesitás tu QR de acreditación para ver el carrito.</p>
      </div>`;return}let e=[];n.innerHTML=`
    ${Ht({title:"🛒 Mi carrito",sub:t.nombre+" "+t.apellido+" · "+t.codigo,backHref:"/acceso?inv="+t.token,backLabel:"← Mi QR",backStyle:"background:#A32D2D;color:#fff;border-color:#A32D2D"})}
    <div style="max-width:480px;margin:0 auto;padding:14px" id="carrito-body">
      <div class="empty">Cargando carrito...</div>
    </div>`,ms(t.fireId,o=>{e=o,i()});function i(){const o=document.getElementById("carrito-body");if(!o)return;if(!e.length||!e.some(a=>{var l;return(l=a.items)==null?void 0:l.length})){o.innerHTML=`
        <div class="empty" style="padding:48px 20px">
          <div style="font-size:48px;margin-bottom:12px">🛒</div>
          <p style="font-size:15px;font-weight:500;margin-bottom:8px">Tu carrito está vacío</p>
          <p style="font-size:13px;color:#aaa">
            Escaneá el QR de cualquier stand para agregar vinos.
          </p>
        </div>`;return}const s=e.reduce((a,l)=>a+(l.items||[]).reduce((d,p)=>d+(p.sub||0),0),0);o.innerHTML=`
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
                <span style="font-size:13px;font-weight:500">$${Jo(l.sub)}</span>
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
            <span>$${Jo((a.items||[]).reduce((l,d)=>l+(d.sub||0),0))}</span>
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
          <span style="color:#6B1C1C">$${Jo(s)}</span>
        </div>
        <p style="font-size:12px;color:#888;margin-top:6px">
          Llevá este carrito a caja para pagar. El cajero escanea tu código y ve todo.
        </p>
      </div>

      <div style="background:#E6F1FB;border:.5px solid #185FA5;border-radius:8px;
        padding:10px 14px;font-size:12px;color:#185FA5;margin-bottom:14px;text-align:center">
        📍 Tu código de caja: <strong style="font-size:16px;letter-spacing:.1em">${t.codigo}</strong>
      </div>

      <div id="carrito-msg" style="font-size:12px;text-align:center;min-height:16px;margin-bottom:8px"></div>`}window._quitarCarrito=async(o,s)=>{const a=e.find(l=>l.standDocId===o);a&&await Yi(t.fireId,Number(a.standId),s)},window._cambiarRetiro=async(o,s,a)=>{await fs(t.fireId,Number(s),a)}}async function sg(){window.qrcode||await new Promise((n,t)=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js",e.onload=n,e.onerror=t,document.head.appendChild(e)})}function Il(n,t,e,i,o,s){n.beginPath(),n.moveTo(t+s,e),n.lineTo(t+i-s,e),n.quadraticCurveTo(t+i,e,t+i,e+s),n.lineTo(t+i,e+o-s),n.quadraticCurveTo(t+i,e+o,t+i-s,e+o),n.lineTo(t+s,e+o),n.quadraticCurveTo(t,e+o,t,e+o-s),n.lineTo(t,e+s),n.quadraticCurveTo(t,e,t+s,e),n.closePath()}async function ag(n){await sg();const e=window.location.origin+"/acceso?inv="+n.token,i=document.createElement("canvas"),o=600,s=800;i.width=o,i.height=s;const a=i.getContext("2d"),l=a.createLinearGradient(0,0,0,s);l.addColorStop(0,"#1A3A5C"),l.addColorStop(.55,"#2C5F8A"),l.addColorStop(1,"#3A7D44"),a.fillStyle=l,a.fillRect(0,0,o,s),a.fillStyle="#C9A96E",a.fillRect(0,s-4,o,4),a.fillStyle="rgba(255,255,255,0.7)",a.font="500 18px system-ui, -apple-system, sans-serif",a.textAlign="center",a.fillText("SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN",o/2,54),a.fillStyle="#ffffff",a.font="500 38px system-ui, -apple-system, sans-serif",a.fillText(n.nombre+" "+n.apellido,o/2,110),a.fillStyle="rgba(255,255,255,0.75)",a.font="400 22px system-ui, -apple-system, sans-serif",a.fillText(n.codigo,o/2,146),a.fillStyle="#3A7D44";const d=200,p=34,x=o/2-d/2,h=164;Il(a,x,h,d,p,17),a.fill(),a.fillStyle="#ffffff",a.font="500 15px system-ui, -apple-system, sans-serif",a.fillText("Bono confirmado",o/2,h+23);const m=320,v=340,_=o/2-m/2,C=220;a.fillStyle="#ffffff",Il(a,_,C,m,v,16),a.fill();const T=qrcode(0,"M");T.addData(e),T.make();const D=T.getModuleCount(),V=240,P=_+(m-V)/2,M=C+24,N=V/D;a.fillStyle="#000000";for(let I=0;I<D;I++)for(let y=0;y<D;y++)T.isDark(I,y)&&a.fillRect(P+y*N,M+I*N,N,N);a.fillStyle="#1A3A5C",a.font="500 26px system-ui, -apple-system, sans-serif",a.fillText(n.codigo,o/2,C+v-44),a.fillStyle="#888",a.font="400 14px system-ui, -apple-system, sans-serif",a.fillText("Mostrá este QR en la entrada",o/2,C+v-20),a.fillStyle="rgba(255,255,255,0.85)",a.font="400 18px system-ui, -apple-system, sans-serif",a.fillText("Sáb 20 jun 2026  ·  19:30 hs",o/2,C+v+50),a.fillText("Roma 656, Olivos",o/2,C+v+80),a.fillStyle="rgba(255,255,255,0.5)",a.font="400 13px system-ui, -apple-system, sans-serif",a.fillText("Personal e intransferible · Un solo uso en la entrada",o/2,s-24);const q=document.createElement("a");q.download="QR_"+n.nombre+"_"+n.apellido+".png",q.href=i.toDataURL(),q.click()}async function lg(n,t,e){if(ne(),!await wd(t,e)){n.innerHTML=Ht({title:"Acceso denegado",sub:"SUCOVI 2027"})+'<div style="max-width:480px;margin:40px auto;padding:16px;text-align:center"><div style="font-size:40px;margin-bottom:12px">🔒</div><div style="font-size:16px;color:#A32D2D">Link invalido o expirado</div></div>';return}const s=(await bd(t)).filter(v=>v.estado!=="invalidado"),a=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),l={pagado:"b-pago",ingresado:"b-ingr",pendiente:"b-pend",invalidado:"b-canc"},d={pagado:"Bono confirmado",ingresado:"Ingreso",pendiente:"Pendiente",invalidado:"Invalidado"},p=window.location.origin;n.innerHTML=Ht({title:"Familia "+a,sub:"SUCOVI 2027 · "+s.length+" invitado"+(s.length!==1?"s":"")})+'<div style="max-width:600px;margin:0 auto;padding:16px">'+(s.length===0?'<div class="empty">No se encontraron invitados.</div>':s.map((v,_)=>{const C=((v.nombre||"")[0]||"")+((v.apellido||"")[0]||""),T=p+"/acceso?inv="+v.token,D=v.estado==="ingresado"?"Hola "+v.nombre+`! 🍷

Ya estás dentro de SUCOVI 2027 — ¡disfrutá la noche!

Si necesitás tu QR para los stands:
👉 `+T+`

_Personal e intransferible._`:v.estado==="pagado"?"Hola "+v.nombre+`! 🍷

Te confirmo tu acreditación para *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

✅ *Bono confirmado* ($35.000)
Incluye degustaciones + copa + empanada.

Tu QR personal:
👉 `+T+`

_Personal e intransferible. Un solo uso en la entrada._`:"Hola "+v.nombre+`! 🍷

Quedaste registrado/a en *SUCOVI 2027*.

📅 Sáb 20 jun 2026 · 19:30 hs
📍 Roma 656, Olivos

⏳ Bono pendiente de pago ($35.000)
Podés abonar en la puerta.

Consultas: José Pannunzio +54 9 11 5400-1313`,V=encodeURIComponent(D),P=(v.tel||"").replace(/\D/g,""),M=P?"https://wa.me/"+(P.startsWith("54")?P:"54"+P)+"?text="+V:null;return'<div class="card" style="margin-bottom:10px"><div style="display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;border-radius:50%;background:#1A3A5C;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;flex-shrink:0">'+C+'</div><div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:600;color:#1A3A5C">'+v.nombre+" "+v.apellido+'</div><div style="font-size:12px;color:#888">'+(v.codigo||"")+'</div><span class="badge '+(l[v.estado]||"")+'" style="margin-top:4px;display:inline-block">'+(d[v.estado]||v.estado)+'</span></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInvFam('+_+')">✏️</button>'+(M?'<a href="'+M+'" target="_blank" class="btn" style="padding:4px 8px;font-size:11px">📱 WA</a>':"")+'<button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._dlQR('+_+')">📥 QR</button><a href="'+T+'" class="btn btn-v" style="padding:4px 8px;font-size:11px">Ver QR</a></div></div></div>'}).join(""))+"</div>",window._invitadosFamilia=s;const x=document.createElement("button");x.innerHTML="?",x.style.cssText="position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)",x.onclick=()=>document.getElementById("modal-ayuda-fam").style.display="flex",document.body.appendChild(x);const h=document.createElement("div");h.id="modal-ayuda-fam",h.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px",h.innerHTML=`<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:16px;font-weight:700;color:#1A3A5C">¿Cómo usar esta página?</div><button onclick="document.getElementById('modal-ayuda-fam').style.display='none'" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button></div><div style="font-size:13px;color:#333;line-height:1.7"><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">✏️ Editar datos</div><div>Antes de enviar la invitación, verificá que el <strong>nombre</strong>, <strong>apellido</strong> y <strong>teléfono</strong> de cada invitado sean correctos. Tocá el botón ✏️ para corregirlos.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📱 Enviar por WhatsApp</div><div>Tocá el botón <strong>WA</strong> para abrir WhatsApp con el mensaje de invitación ya redactado. El mensaje incluye el link personal del invitado con su QR. <strong>Verificá los datos antes de enviar.</strong></div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📥 Descargar QR</div><div>Descargá la imagen del QR personal de cada invitado para compartirla por otro medio si es necesario.</div></div><div style="margin-bottom:14px"><div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">👁️ Ver QR</div><div>Abre la página personal del invitado donde puede ver su QR, sus compras y acceder a los stands el día del evento.</div></div><div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">⚠️ <strong>Importante:</strong> El link de cada invitado es personal e intransferible. No lo compartas con otras personas.</div></div></div>`,h.addEventListener("click",v=>{v.target===h&&(h.style.display="none")}),document.body.appendChild(h);const m=document.createElement("div");m.id="modal-edit-fam",m.style.cssText="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.45);z-index:200;align-items:center;justify-content:center;padding:16px",m.innerHTML='<div style="background:#fff;width:100%;max-width:420px;border-radius:12px;padding:20px"><h3 style="font-size:14px;font-weight:500;color:#1A3A5C;margin-bottom:14px">Editar invitado</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px"><div><label style="font-size:11px;color:#666">Nombre</label><input id="fam-edit-nom" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div><div><label style="font-size:11px;color:#666">Apellido</label><input id="fam-edit-ape" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div></div><div style="margin-bottom:12px"><label style="font-size:11px;color:#666">WhatsApp</label><input id="fam-edit-tel" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div><div style="display:flex;gap:8px"><button onclick="window._guardarEditFam()" style="flex:1;padding:9px;background:#1A3A5C;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer">Guardar</button><button onclick="window._cerrarEditFam()" style="flex:1;padding:9px;background:#fff;color:#555;border:1px solid #ccc;border-radius:8px;font-size:14px;cursor:pointer">Cancelar</button></div><div id="fam-edit-msg" style="margin-top:8px;font-size:12px;text-align:center"></div></div>',document.body.appendChild(m),window._editarInvFam=v=>{const _=window._invitadosFamilia[v];_&&(window._editIdxFam=v,window._editFireIdFam=_.fireId,document.getElementById("fam-edit-nom").value=_.nombre||"",document.getElementById("fam-edit-ape").value=_.apellido||"",document.getElementById("fam-edit-tel").value=_.tel||"",document.getElementById("fam-edit-msg").innerHTML="",document.getElementById("modal-edit-fam").style.display="flex")},window._guardarEditFam=async()=>{const v=document.getElementById("fam-edit-msg"),_=document.getElementById("fam-edit-nom").value.trim(),C=document.getElementById("fam-edit-ape").value.trim(),T=document.getElementById("fam-edit-tel").value.trim();if(!_||!C||!T){v.innerHTML='<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>';return}v.innerHTML='<span style="color:#888">Guardando...</span>';try{await Ae(window._editFireIdFam,{nombre:_,apellido:C,tel:T}),window._invitadosFamilia[window._editIdxFam].nombre=_,window._invitadosFamilia[window._editIdxFam].apellido=C,window._invitadosFamilia[window._editIdxFam].tel=T,v.innerHTML='<span style="color:#3A7D44">✓ Guardado correctamente</span>',setTimeout(()=>window._cerrarEditFam(),1200)}catch(D){v.innerHTML='<span style="color:#C0392B">Error: '+D.message+"</span>"}},window._cerrarEditFam=()=>{document.getElementById("modal-edit-fam").style.display="none"},window._dlQR=async v=>{const _=window._invitadosFamilia[v];_&&await ag(_)}}async function Td(){const t=window.location.pathname.replace("/Sucovi2027","")||"/",e=new URLSearchParams(window.location.search),i=document.getElementById("app"),o=t.match(/^\/familia\/([^/]+)$/);if(o){const d=decodeURIComponent(o[1]),p=e.get("key");return lg(i,d,p)}const s=t.match(/^\/stand\/(\d+)$/);if(s){const d=parseInt(s[1]),p=qt.find(m=>m.id===d);if(!p){i.innerHTML=Ze("Stand no encontrado");return}const x=e.get("inv"),h=x?await ei(x):null;return Gm(i,p,h)}const a=t.match(/^\/panel\/(\d+)$/);if(a){const d=qt.find(x=>x.id===parseInt(a[1]));if(!d){i.innerHTML=Ze("Panel no encontrado");return}const p=e.get("key");if(p&&p!==d.key){i.innerHTML=Ze("Acceso no autorizado");return}if(!p){i.innerHTML=Ze("Link inválido — usá el link completo que te enviaron");return}return Xm(i,d)}const l=t.match(/^\/bodega\/(\d+)\/vinos$/);if(l){const d=qt.find(x=>x.id===parseInt(l[1]));if(!d){i.innerHTML=Ze("Bodega no encontrada");return}const p=e.get("key");if(p&&p!==d.key){i.innerHTML=Ze("Acceso no autorizado");return}return Id(i,d)}if(t==="/carrito"){const d=e.get("inv"),p=d?await ei(d):null;return rg(i,p)}if(t==="/acceso")return ig(i,e.get("inv"));if(t==="/org"){El(i);return}if(t==="/registro"){El(i);return}return t==="/caja"?Wm(i):t==="/puerta"?Ym(i):t==="/logistica"?tg(i):Ed(i)}function Ze(n){return`<div style="padding:60px;text-align:center;color:#aaa;font-size:14px">${n}</div>`}Td();window.addEventListener("popstate",Td);(function(){var n=window.location.search.match(/[?&]p=([^&]+)/);if(n){var t="/Sucovi2027",e=decodeURIComponent(n[1].replace(/~and~/g,"&"));window.history.replaceState(null,null,t+"/"+e)}})();
