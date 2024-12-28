(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const Y=(e,t)=>e===t,q={equals:Y};let M=K;const m=1,A=2,F={owned:null,cleanups:null,context:null,owner:null};var p=null;let B=null,Z=null,u=null,d=null,x=null,T=0;function z(e,t){const s=u,l=p,n=e.length===0,o=t===void 0?l:t,r=n?F:{owned:null,cleanups:null,context:o?o.context:null,owner:o},i=n?e:()=>e(()=>I(()=>C(r)));p=r,u=null;try{return k(i,!0)}finally{u=s,p=l}}function ee(e,t){t=t?Object.assign({},q,t):q;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=n=>(typeof n=="function"&&(n=n(s.value)),V(s,n));return[se.bind(s),l]}function $(e,t,s){const l=J(e,t,!1,m);j(l)}function te(e,t,s){M=oe;const l=J(e,t,!1,m);l.user=!0,x?x.push(l):j(l)}function I(e){if(u===null)return e();const t=u;u=null;try{return e()}finally{u=t}}function se(){if(this.sources&&this.state)if(this.state===m)j(this);else{const e=d;d=null,k(()=>D(this),!1),d=e}if(u){const e=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(e)):(u.sources=[this],u.sourceSlots=[e]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function V(e,t,s){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&k(()=>{for(let n=0;n<e.observers.length;n+=1){const o=e.observers[n],r=B&&B.running;r&&B.disposed.has(o),(r?!o.tState:!o.state)&&(o.pure?d.push(o):x.push(o),o.observers&&Q(o)),r||(o.state=m)}if(d.length>1e6)throw d=[],new Error},!1)),t}function j(e){if(!e.fn)return;C(e);const t=T;le(e,e.value,t)}function le(e,t,s){let l;const n=p,o=u;u=p=e;try{l=e.fn(t)}catch(r){return e.pure&&(e.state=m,e.owned&&e.owned.forEach(C),e.owned=null),e.updatedAt=s+1,W(r)}finally{u=o,p=n}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?V(e,l):e.value=l,e.updatedAt=s)}function J(e,t,s,l=m,n){const o={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:p?p.context:null,pure:s};return p===null||p!==F&&(p.owned?p.owned.push(o):p.owned=[o]),o}function E(e){if(e.state===0)return;if(e.state===A)return D(e);if(e.suspense&&I(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<T);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===m)j(e);else if(e.state===A){const l=d;d=null,k(()=>D(e,t[0]),!1),d=l}}function k(e,t){if(d)return e();let s=!1;t||(d=[]),x?s=!0:x=[],T++;try{const l=e();return ne(s),l}catch(l){s||(x=null),d=null,W(l)}}function ne(e){if(d&&(K(d),d=null),e)return;const t=x;x=null,t.length&&k(()=>M(t),!1)}function K(e){for(let t=0;t<e.length;t++)E(e[t])}function oe(e){let t,s=0;for(t=0;t<e.length;t++){const l=e[t];l.user?e[s++]=l:E(l)}for(t=0;t<s;t++)E(e[t])}function D(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];if(l.sources){const n=l.state;n===m?l!==t&&(!l.updatedAt||l.updatedAt<T)&&E(l):n===A&&D(l,t)}}}function Q(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=A,s.pure?d.push(s):x.push(s),s.observers&&Q(s))}}function C(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),l=e.sourceSlots.pop(),n=s.observers;if(n&&n.length){const o=n.pop(),r=s.observerSlots.pop();l<n.length&&(o.sourceSlots[r]=l,n[l]=o,s.observerSlots[l]=r)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)C(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)C(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ie(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function W(e,t=p){throw ie(e)}function g(e,t){return I(()=>e(t||{}))}function re(e,t,s){let l=s.length,n=t.length,o=l,r=0,i=0,c=t[n-1].nextSibling,a=null;for(;r<n||i<o;){if(t[r]===s[i]){r++,i++;continue}for(;t[n-1]===s[o-1];)n--,o--;if(n===r){const h=o<l?i?s[i-1].nextSibling:s[o-i]:c;for(;i<o;)e.insertBefore(s[i++],h)}else if(o===i)for(;r<n;)(!a||!a.has(t[r]))&&t[r].remove(),r++;else if(t[r]===s[o-1]&&s[i]===t[n-1]){const h=t[--n].nextSibling;e.insertBefore(s[i++],t[r++].nextSibling),e.insertBefore(s[--o],h),t[n]=s[o]}else{if(!a){a=new Map;let b=i;for(;b<o;)a.set(s[b],b++)}const h=a.get(t[r]);if(h!=null)if(i<h&&h<o){let b=r,_=1,S;for(;++b<n&&b<o&&!((S=a.get(t[b]))==null||S!==h+_);)_++;if(_>h-i){const O=t[r];for(;i<h;)e.insertBefore(s[i++],O)}else e.replaceChild(s[i++],t[r++])}else r++;else t[r++].remove()}}}const U="_$DX_DELEGATE";function ce(e,t,s,l={}){let n;return z(o=>{n=o,t===document?e():f(t,e(),t.firstChild?null:void 0,s)},l.owner),()=>{n(),t.textContent=""}}function P(e,t,s){let l;const n=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},o=()=>(l||(l=n())).cloneNode(!0);return o.cloneNode=o,o}function ae(e,t=window.document){const s=t[U]||(t[U]=new Set);for(let l=0,n=e.length;l<n;l++){const o=e[l];s.has(o)||(s.add(o),t.addEventListener(o,ue))}}function H(e,t,s){s==null?e.removeAttribute(t):e.setAttribute(t,s)}function f(e,t,s,l){if(s!==void 0&&!l&&(l=[]),typeof t!="function")return N(e,t,l,s);$(n=>N(e,t(),n,s),l)}function ue(e){let t=e.target;const s=`$$${e.type}`,l=e.target,n=e.currentTarget,o=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),r=()=>{const c=t[s];if(c&&!t.disabled){const a=t[`${s}Data`];if(a!==void 0?c.call(t,a,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},i=()=>{for(;r()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();o(c[0]);for(let a=0;a<c.length-2&&(t=c[a],!!r());a++){if(t._$host){t=t._$host,i();break}if(t.parentNode===n)break}}else i();o(l)}function N(e,t,s,l,n){for(;typeof s=="function";)s=s();if(t===s)return s;const o=typeof t,r=l!==void 0;if(e=r&&s[0]&&s[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===s))return s;if(r){let i=s[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),s=v(e,s,l,i)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||o==="boolean")s=v(e,s,l);else{if(o==="function")return $(()=>{let i=t();for(;typeof i=="function";)i=i();s=N(e,i,s,l)}),()=>s;if(Array.isArray(t)){const i=[],c=s&&Array.isArray(s);if(L(i,t,s,n))return $(()=>s=N(e,i,s,l,!0)),()=>s;if(i.length===0){if(s=v(e,s,l),r)return s}else c?s.length===0?G(e,i,l):re(e,s,i):(s&&v(e),G(e,i));s=i}else if(t.nodeType){if(Array.isArray(s)){if(r)return s=v(e,s,l,t);v(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function L(e,t,s,l){let n=!1;for(let o=0,r=t.length;o<r;o++){let i=t[o],c=s&&s[e.length],a;if(!(i==null||i===!0||i===!1))if((a=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))n=L(e,i,c)||n;else if(a==="function")if(l){for(;typeof i=="function";)i=i();n=L(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||n}else e.push(i),n=!0;else{const h=String(i);c&&c.nodeType===3&&c.data===h?e.push(c):e.push(document.createTextNode(h))}}return n}function G(e,t,s=null){for(let l=0,n=t.length;l<n;l++)e.insertBefore(t[l],s)}function v(e,t,s,l){if(s===void 0)return e.textContent="";const n=l||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const i=t[r];if(n!==i){const c=i.parentNode===e;!o&&!r?c?e.replaceChild(n,i):e.insertBefore(n,s):c&&i.remove()}else o=!0}}else e.insertBefore(n,s);return[n]}var fe=P('<div class="pt-16 grid grid-cols-2 md:grid-cols-3"><div class="flex flex-col gap-2"><h1 class="text-2xl text-white">Doubloons</h1><p class="text-4xl text-[rgb(241,196,15)]"></p></div><div class="flex flex-col gap-2"><h1 class="text-2xl text-white">Rank</h1><p class="text-4xl text-[rgb(241,196,15)]">No. </p></div><div class="flex flex-col gap-2"><h2 class="text-gray-100 text-xl">Doubloon goal: 3,000</h2><h2 class="text-gray-100 text-xl">Rank goal: Top 10');function he(){const[e,t]=ee({doubloons:0,rank:0});return te(()=>{(async()=>{try{const l="https://api.allorigins.win/get?url="+encodeURIComponent("https://doubloons.cyteon.hackclub.app/api/v1/search?username=theluqmn"),o=await(await fetch(l)).json(),r=JSON.parse(o.contents);console.log(r),t({doubloons:r.users[0].current_doubloons,rank:r.users[0].rank})}catch(l){console.log("Error fetching doubloon data:",l)}})()}),(()=>{var s=fe(),l=s.firstChild,n=l.firstChild,o=n.nextSibling,r=l.nextSibling,i=r.firstChild,c=i.nextSibling;return c.firstChild,f(o,()=>e().doubloons),f(c,()=>e().rank,null),s})()}const de="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='currentColor'%20class='bi%20bi-github'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M8%200C3.58%200%200%203.58%200%208c0%203.54%202.29%206.53%205.47%207.59.4.07.55-.17.55-.38%200-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01%201.08.58%201.23.82.72%201.21%201.87.87%202.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95%200-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12%200%200%20.67-.21%202.2.82.64-.18%201.32-.27%202-.27s1.36.09%202%20.27c1.53-1.04%202.2-.82%202.2-.82.44%201.1.16%201.92.08%202.12.51.56.82%201.27.82%202.15%200%203.07-1.87%203.75-3.65%203.95.29.25.54.73.54%201.48%200%201.07-.01%201.93-.01%202.2%200%20.21.15.46.55.38A8.01%208.01%200%200%200%2016%208c0-4.42-3.58-8-8-8'/%3e%3c/svg%3e";var pe=P('<div class><header class="p-2 bg-white items-center flex flex-col fixed z-10 w-full duration-500"><div class="w-full lg:w-7/12 flex flex-row items-center justify-between"><div class="flex flex-row items-center gap-2"><img src=https://highseas.hackclub.com/doubloon.svg alt=Doubloon class="w-8 h-8"><h1 class="text-2xl text-black hover:font-bold duration-500">Douboom</h1></div><a href=https://github.com/theluqmn/douboom target=_blank><img class="w-6 h-6"></a></div></header><div class="pt-32 p-4 md:p-4 md:pt-32 lg:w-7/12 items-center mx-auto space-y-3 text-sm lg:text-base"><h1 class="text-[rgb(241,196,15)] text-5xl">My 2024/2025 Hack Seas Journey</h1><p class="text-[rgb(235,235,235)] text-base">I joined Hack Seas 2024/2025 on 26th December 2024 - roughly one month later compared to the other participants. Despite the late start, I am confident and ready to make the most of this opportunity and prove my competence.</p><p class="text-[rgb(235,235,235)] text-sm">Real-world count of doubloons and rank. Refresh to update.</p><div class="pt-64 flex flex-col gap-4"><h1 class="text-[rgb(241,196,15)] text-3xl">Projects</h1><p class="text-[rgb(235,235,235)] text-base">All the projects I worked on specifically for High Seas 2024 (the doubloon grind)</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div></div><div class="pt-32 flex flex-col gap-4"><h1 class="text-[rgb(241,196,15)] text-3xl">Items to redeem</h1><div class="grid grid-cols-2 md:grid-cols-4 gap-4"></div></div></div><footer><div class="pt-32 p-4 md:p-4 md:pt-32 lg:w-7/12 items-center mx-auto space-y-3 text-sm lg:text-base"><h1 class="text-white text-2xl">Douboom</h1><p class=text-white>Designed and developed by <a href=https://theluqmn.github.io target=_blank class=text-[rgb(241,196,15)]>Luqman</a>. Deployed on GitHub Pages, built with JavaScript and Solidjs. Visit the repo on <a href=https://github.com/theluqmn/douboom target=_blank class=text-[rgb(241,196,15)]>GitHub</a>.'),ge=P('<div><div class="p-4 rounded-md bg-white flex flex-col items-start gap-2 h-full text-left"><h1 class="text-2xl text-black font-semibold"></h1><img class="object-cover aspect-square rounded-md self-start object-left-top"><p class=text-gray-800></p><button class="p-2 rounded-md font-semibold bg-white text-black hover:bg-black hover:text-white duration-500 mt-auto">View Project'),be=P('<div class="p-4 rounded-md bg-white flex flex-col items-center gap-2 h-full"><h1 class="text-2xl text-black font-semibold text-center"></h1><img alt=Doubloon class="w-32 h-32 object-contain hover:scale-105 duration-700"><div class="p-2 rounded-md bg-[rgb(247,220,111)] text-black hover:bg-black hover:text-white duration-500 mt-auto"><p class=text-center> Doubloons');function xe(){return(()=>{var e=pe(),t=e.firstChild,s=t.firstChild,l=s.firstChild,n=l.nextSibling,o=n.firstChild,r=t.nextSibling,i=r.firstChild,c=i.nextSibling,a=c.nextSibling,h=a.nextSibling,b=h.firstChild,_=b.nextSibling,S=_.nextSibling,O=h.nextSibling,X=O.firstChild,w=X.nextSibling;return H(o,"src",de),f(r,g(he,{}),a),f(S,g(R,{title:"Douboom",description:"A website that tells about my 2024/2025 Hack Seas journey.",link:"https://theluqmn.github.io/douboom",image:"https://cloud-9u0lqspt8-hack-club-bot.vercel.app/0image.png"}),null),f(S,g(R,{title:"Boeing 737NG FMS",description:"A web-based simulator of the Boeing 737-800's flight management system (FMS).",link:"https://theluqmn.github.io/737fms",image:"https://cloud-jls4b58tn-hack-club-bot.vercel.app/0image.png"}),null),f(w,g(y,{title:"Hack Club MicroSD Card",doubloons:"32",image:"https://noras-secret-cdn.hackclub.dev/shop/microsd.png/"}),null),f(w,g(y,{title:"GitHub Invertocat Pin",doubloons:"76",image:"https://noras-secret-cdn.hackclub.dev/shop/gh_invertocat_pin.png"}),null),f(w,g(y,{title:"Blåhaj",doubloons:"123",image:"https://noras-secret-cdn.hackclub.dev/shop/blahaj.png"}),null),f(w,g(y,{title:"GitHub Notebook",doubloons:"140",image:"https://noras-secret-cdn.hackclub.dev/shop/gh_denik_layflat_notebook.png"}),null),f(w,g(y,{title:"YubiKey",doubloons:"264",image:"https://noras-secret-cdn.hackclub.dev/shop/yubikey.png"}),null),f(w,g(y,{title:"Raspberry Pi 5",doubloons:"275",image:"https://cloud-k3f252fo0-hack-club-bot.vercel.app/0raspberry_pi_5.png"}),null),f(w,g(y,{title:"iPad 10th Gen w/Apple Pencil",doubloons:"2090",image:"https://noras-secret-cdn.hackclub.dev/shop/ipad.png"}),null),e})()}function R(e){return(()=>{var t=ge(),s=t.firstChild,l=s.firstChild,n=l.nextSibling,o=n.nextSibling,r=o.nextSibling;return f(l,()=>e.title),f(o,()=>e.description),r.$$click=()=>window.open(e.link),$(()=>H(n,"src",e.image)),t})()}function y(e){return(()=>{var t=be(),s=t.firstChild,l=s.nextSibling,n=l.nextSibling,o=n.firstChild,r=o.firstChild;return f(s,()=>e.title),f(o,()=>e.doubloons,r),$(()=>H(l,"src",e.image)),t})()}ae(["click"]);const me=document.getElementById("root");ce(()=>g(xe,{}),me);
