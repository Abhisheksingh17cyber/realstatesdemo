(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},5766,e=>{"use strict";let t,a;var s,r=e.i(71645);let i={data:""},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,o=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let a="",s="",r="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+n+";":s+="f"==i[1]?c(n,i):i+"{"+c(n,"k"==i[1]?"":t)+"}":"object"==typeof n?s+=c(n,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=c.p?c.p(i,n):i+":"+n+";")}return a+(t&&r?t+"{"+r+"}":r)+s},d={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e};function p(e){let t,a,s=this||{},r=e.call?e(s.p):e;return((e,t,a,s,r)=>{var i;let p=m(e),h=d[p]||(d[p]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(p));if(!d[h]){let t=p!==e?e:(e=>{let t,a,s=[{}];for(;t=n.exec(e.replace(o,""));)t[4]?s.shift():t[3]?(a=t[3].replace(l," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(l," ").trim();return s[0]})(e);d[h]=c(r?{["@keyframes "+h]:t}:t,a?"":"."+h)}let u=a&&d.g?d.g:null;return a&&(d.g=d[h]),i=d[h],u?t.data=t.data.replace(u,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),h})(r.unshift?r.raw?(t=[].slice.call(arguments,1),a=s.p,r.reduce((e,s,r)=>{let i=t[r];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(s.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(s.target),s.g,s.o,s.k)}p.bind({g:1});let h,u,x,f=p.bind({k:1});function y(e,t){let a=this||{};return function(){let s=arguments;function r(i,n){let o=Object.assign({},i),l=o.className||r.className;a.p=Object.assign({theme:u&&u()},o),a.o=/ *go\d+/.test(l),o.className=p.apply(a,s)+(l?" "+l:""),t&&(o.ref=n);let c=e;return e[0]&&(c=o.as||e,delete o.as),x&&c[0]&&x(o),h(c,o)}return t?t(r):r}}var g=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),v=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},w="default",j=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return j(e,{type:+!!e.toasts.find(e=>e.id===s.id),toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},N=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},E={},C=(e,t=w)=>{E[t]=j(E[t]||k,e),N.forEach(([e,a])=>{e===t&&a(E[t])})},A=e=>Object.keys(E).forEach(t=>C(e,t)),P=(e=w)=>t=>{C(t,e)},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={},t=w)=>{let[a,s]=(0,r.useState)(E[t]||k),i=(0,r.useRef)(E[t]);(0,r.useEffect)(()=>(i.current!==E[t]&&s(E[t]),N.push([t,s]),()=>{let e=N.findIndex(([e])=>e===t);e>-1&&N.splice(e,1)}),[t]);let n=a.toasts.map(t=>{var a,s,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||T[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...a,toasts:n}},I=e=>(t,a)=>{let s,r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||b()}))(t,e,a);return P(r.toasterId||(s=r.id,Object.keys(E).find(e=>E[e].toasts.some(e=>e.id===s))))({type:2,toast:r}),r.id},L=(e,t)=>I("blank")(e,t);L.error=I("error"),L.success=I("success"),L.loading=I("loading"),L.custom=I("custom"),L.dismiss=(e,t)=>{let a={type:3,toastId:e};t?P(t)(a):A(a)},L.dismissAll=e=>L.dismiss(void 0,e),L.remove=(e,t)=>{let a={type:4,toastId:e};t?P(t)(a):A(a)},L.removeAll=e=>L.remove(void 0,e),L.promise=(e,t,a)=>{let s=L.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?g(t.success,e):void 0;return r?L.success(r,{id:s,...a,...null==a?void 0:a.success}):L.dismiss(s),e}).catch(e=>{let r=t.error?g(t.error,e):void 0;r?L.error(r,{id:s,...a,...null==a?void 0:a.error}):L.dismiss(s)}),e};var M=1e3,z=(e,t="default")=>{let{toasts:a,pausedAt:s}=D(e,t),i=(0,r.useRef)(new Map).current,n=(0,r.useCallback)((e,t=M)=>{if(i.has(e))return;let a=setTimeout(()=>{i.delete(e),o({type:4,toastId:e})},t);i.set(e,a)},[]);(0,r.useEffect)(()=>{if(s)return;let e=Date.now(),r=a.map(a=>{if(a.duration===1/0)return;let s=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(s<0){a.visible&&L.dismiss(a.id);return}return setTimeout(()=>L.dismiss(a.id,t),s)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[a,s,t]);let o=(0,r.useCallback)(P(t),[t]),l=(0,r.useCallback)(()=>{o({type:5,time:Date.now()})},[o]),c=(0,r.useCallback)((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),d=(0,r.useCallback)(()=>{s&&o({type:6,time:Date.now()})},[s,o]),m=(0,r.useCallback)((e,t)=>{let{reverseOrder:s=!1,gutter:r=8,defaultPosition:i}=t||{},n=a.filter(t=>(t.position||i)===(e.position||i)&&t.height),o=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<o&&e.visible).length;return n.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[a]);return(0,r.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[a,n]),{toasts:a,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:m}}},O=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,S=f`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$=f`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,R=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${S} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${$} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,F=f`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,_=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${F} 1s linear infinite;
`,B=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,H=f`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Y=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${H} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,U=y("div")`
  position: absolute;
`,V=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=f`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?r.createElement(Z,null,t):t:"blank"===a?null:r.createElement(V,null,r.createElement(_,{...s}),"loading"!==a&&r.createElement(U,null,"error"===a?r.createElement(R,{...s}):r.createElement(Y,{...s})))},K=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=r.memo(({toast:e,position:t,style:a,children:s})=>{let i=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[s,r]=v()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${f(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${f(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=r.createElement(J,{toast:e}),o=r.createElement(W,{...e.ariaProps},g(e.message,e));return r.createElement(K,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof s?s({icon:n,message:o}):r.createElement(r.Fragment,null,n,o))});s=r.createElement,c.p=void 0,h=s,u=void 0,x=void 0;var G=({id:e,className:t,style:a,onHeightUpdate:s,children:i})=>{let n=r.useCallback(t=>{if(t){let a=()=>{s(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return r.createElement("div",{ref:n,className:t,style:a},i)},Q=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:i,toasterId:n,containerStyle:o,containerClassName:l})=>{let{toasts:c,handlers:d}=z(a,n);return r.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(a=>{let n,o,l=a.position||t,c=d.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}),m=(n=l.includes("top"),o=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...o});return r.createElement(G,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?Q:"",style:m},"custom"===a.type?g(a.message,a):i?i(a):r.createElement(X,{toast:a,position:l}))}))};e.s(["CheckmarkIcon",()=>Y,"ErrorIcon",()=>R,"LoaderIcon",()=>_,"ToastBar",()=>X,"ToastIcon",()=>J,"Toaster",()=>ee,"default",()=>L,"resolveValue",()=>g,"toast",()=>L,"useToaster",()=>z,"useToasterStore",()=>D],5766)},88589,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(22016),r=e.i(46932),i=e.i(88653),n=e.i(75254);let o=(0,n.default)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),l=(0,n.default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var c=e.i(43432);let d=(0,n.default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),m=[{name:"Home",href:"/"},{name:"Properties",href:"/properties",submenu:[{name:"All Properties",href:"/properties"},{name:"Apartments",href:"/properties?type=apartment"},{name:"Villas",href:"/properties?type=villa"},{name:"Penthouses",href:"/properties?type=penthouse"},{name:"Commercial",href:"/properties?type=commercial"}]},{name:"About",href:"/about"},{name:"Agents",href:"/agents"},{name:"Locations",href:"/locations"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/contact"}];function p(){let[e,n]=(0,a.useState)(!1),[p,h]=(0,a.useState)(!1),[u,x]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=()=>{n(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.motion.nav,{initial:{y:-100},animate:{y:0},transition:{duration:.8,ease:[.4,0,.2,1]},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${e?"bg-primary-950/95 backdrop-blur-xl border-b border-white/5":"bg-transparent"}`,children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)("div",{className:"flex items-center justify-between h-20 lg:h-24",children:[(0,t.jsxs)(s.default,{href:"/",className:"flex items-center space-x-3 group",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"w-10 h-10 bg-gradient-to-br from-accent-gold to-accent-gold/70 rounded-sm flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-primary-950 font-display font-bold text-lg",children:"I"})}),(0,t.jsx)("div",{className:"absolute -inset-1 bg-accent-gold/20 rounded-sm blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]}),(0,t.jsxs)("div",{className:"hidden sm:block",children:[(0,t.jsx)("span",{className:"text-xl font-display font-semibold tracking-wide text-white",children:"INTERNITY"}),(0,t.jsx)("span",{className:"text-xl font-display font-light tracking-widest text-accent-gold ml-2",children:"LANDS"})]})]}),(0,t.jsx)("div",{className:"hidden lg:flex items-center space-x-1",children:m.map(e=>(0,t.jsxs)("div",{className:"relative",onMouseEnter:()=>e.submenu&&x(e.name),onMouseLeave:()=>x(null),children:[(0,t.jsxs)(s.default,{href:e.href,className:"px-4 py-2 text-sm font-medium text-primary-300 hover:text-white transition-colors duration-300 flex items-center gap-1",children:[e.name,e.submenu&&(0,t.jsx)(d,{className:"w-3 h-3"})]}),(0,t.jsx)(i.AnimatePresence,{children:e.submenu&&u===e.name&&(0,t.jsx)(r.motion.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2},className:"absolute top-full left-0 pt-2",children:(0,t.jsx)("div",{className:"bg-primary-900/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden min-w-[200px] shadow-premium",children:e.submenu.map(e=>(0,t.jsx)(s.default,{href:e.href,className:"block px-4 py-3 text-sm text-primary-300 hover:text-white hover:bg-white/5 transition-all duration-300",children:e.name},e.name))})})})]},e.name))}),(0,t.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,t.jsxs)("a",{href:"tel:+971501234567",className:"hidden md:flex items-center gap-2 text-sm text-primary-300 hover:text-accent-gold transition-colors duration-300",children:[(0,t.jsx)(c.Phone,{className:"w-4 h-4"}),(0,t.jsx)("span",{children:"+971 50 123 4567"})]}),(0,t.jsx)(s.default,{href:"/contact",className:"hidden sm:block btn-premium px-6 py-2.5 text-sm font-medium text-primary-950 rounded-full",children:"Schedule Viewing"}),(0,t.jsx)("button",{onClick:()=>h(!p),className:"lg:hidden p-2 text-white hover:text-accent-gold transition-colors",children:p?(0,t.jsx)(l,{className:"w-6 h-6"}):(0,t.jsx)(o,{className:"w-6 h-6"})})]})]})})}),(0,t.jsx)(i.AnimatePresence,{children:p&&(0,t.jsxs)(r.motion.div,{initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{duration:.4,ease:[.4,0,.2,1]},className:"fixed inset-0 z-40 lg:hidden",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>h(!1)}),(0,t.jsx)("div",{className:"absolute top-0 right-0 w-full max-w-sm h-full bg-primary-950 border-l border-white/10 overflow-y-auto",children:(0,t.jsxs)("div",{className:"pt-24 pb-8 px-6 space-y-2",children:[m.map((e,a)=>(0,t.jsxs)(r.motion.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.1*a},children:[(0,t.jsx)(s.default,{href:e.href,onClick:()=>h(!1),className:"block py-3 text-lg font-medium text-primary-200 hover:text-white border-b border-white/5 transition-colors",children:e.name}),e.submenu&&(0,t.jsx)("div",{className:"pl-4 space-y-2 mt-2",children:e.submenu.map(e=>(0,t.jsx)(s.default,{href:e.href,onClick:()=>h(!1),className:"block py-2 text-sm text-primary-400 hover:text-accent-gold transition-colors",children:e.name},e.name))})]},e.name)),(0,t.jsxs)("div",{className:"pt-6 space-y-4",children:[(0,t.jsxs)("a",{href:"tel:+971501234567",className:"flex items-center gap-3 text-primary-300 hover:text-accent-gold transition-colors",children:[(0,t.jsx)(c.Phone,{className:"w-5 h-5"}),(0,t.jsx)("span",{children:"+971 50 123 4567"})]}),(0,t.jsx)(s.default,{href:"/contact",onClick:()=>h(!1),className:"block w-full btn-premium px-6 py-3 text-center text-sm font-medium text-primary-950 rounded-full",children:"Schedule Viewing"})]})]})})]})})]})}e.s(["default",()=>p],88589)},13642,e=>{"use strict";var t=e.i(43476),a=e.i(22016),s=e.i(46897),r=e.i(43432),i=e.i(63488),n=e.i(75254);let o=(0,n.default)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),l=(0,n.default)("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),c=(0,n.default)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),d=(0,n.default)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),m=(0,n.default)("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),p=(0,n.default)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),h=[{name:"All Properties",href:"/properties"},{name:"Apartments",href:"/properties?type=apartment"},{name:"Villas",href:"/properties?type=villa"},{name:"Penthouses",href:"/properties?type=penthouse"},{name:"Commercial",href:"/properties?type=commercial"},{name:"Off-Plan",href:"/properties?status=off-plan"}],u=[{name:"Dubai Marina",href:"/locations/dubai-marina"},{name:"Palm Jumeirah",href:"/locations/palm-jumeirah"},{name:"Downtown Dubai",href:"/locations/downtown-dubai"},{name:"Business Bay",href:"/locations/business-bay"},{name:"JBR",href:"/locations/jbr"},{name:"DIFC",href:"/locations/difc"}],x=[{name:"About Us",href:"/about"},{name:"Our Team",href:"/agents"},{name:"Careers",href:"/careers"},{name:"Blog",href:"/blog"},{name:"Press",href:"/press"},{name:"Contact",href:"/contact"}],f=[{name:"Privacy Policy",href:"/privacy"},{name:"Terms of Service",href:"/terms"},{name:"Cookie Policy",href:"/cookies"},{name:"Disclaimer",href:"/disclaimer"}],y=[{name:"Instagram",icon:o,href:"https://instagram.com"},{name:"Facebook",icon:l,href:"https://facebook.com"},{name:"Twitter",icon:c,href:"https://twitter.com"},{name:"LinkedIn",icon:d,href:"https://linkedin.com"},{name:"YouTube",icon:m,href:"https://youtube.com"}];function g(){return(0,t.jsxs)("footer",{className:"relative bg-primary-950 border-t border-white/5",children:[(0,t.jsx)("div",{className:"absolute inset-0 grid-pattern opacity-30"}),(0,t.jsxs)("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8",children:[(0,t.jsxs)("div",{className:"lg:col-span-2",children:[(0,t.jsxs)(a.default,{href:"/",className:"inline-flex items-center space-x-3 group",children:[(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("div",{className:"w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-gold/70 rounded-sm flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-primary-950 font-display font-bold text-xl",children:"I"})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-2xl font-display font-semibold tracking-wide text-white",children:"INTERNITY"}),(0,t.jsx)("span",{className:"text-2xl font-display font-light tracking-widest text-accent-gold ml-2",children:"LANDS"})]})]}),(0,t.jsx)("p",{className:"mt-6 text-primary-400 leading-relaxed max-w-sm",children:"Dubai's premier luxury real estate agency. We specialize in premium properties, investment opportunities, and exceptional client service since 2010."}),(0,t.jsxs)("div",{className:"mt-8 space-y-4",children:[(0,t.jsxs)("a",{href:"https://maps.google.com",target:"_blank",className:"flex items-start gap-3 text-primary-400 hover:text-white transition-colors group",children:[(0,t.jsx)(s.MapPin,{className:"w-5 h-5 mt-0.5 text-accent-gold"}),(0,t.jsxs)("span",{children:["Level 42, Emirates Towers,",(0,t.jsx)("br",{}),"Sheikh Zayed Road, Dubai, UAE"]})]}),(0,t.jsxs)("a",{href:"tel:+971501234567",className:"flex items-center gap-3 text-primary-400 hover:text-white transition-colors",children:[(0,t.jsx)(r.Phone,{className:"w-5 h-5 text-accent-gold"}),(0,t.jsx)("span",{children:"+971 50 123 4567"})]}),(0,t.jsxs)("a",{href:"mailto:info@internitylands.com",className:"flex items-center gap-3 text-primary-400 hover:text-white transition-colors",children:[(0,t.jsx)(i.Mail,{className:"w-5 h-5 text-accent-gold"}),(0,t.jsx)("span",{children:"info@internitylands.com"})]})]}),(0,t.jsx)("div",{className:"mt-8 flex items-center gap-3",children:y.map(e=>(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary-400 hover:text-white hover:border-accent-gold hover:bg-accent-gold/10 transition-all duration-300","aria-label":e.name,children:(0,t.jsx)(e.icon,{className:"w-4 h-4"})},e.name))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-sm font-semibold text-white uppercase tracking-wider mb-6",children:"Properties"}),(0,t.jsx)("ul",{className:"space-y-3",children:h.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:e.href,className:"text-primary-400 hover:text-white transition-colors text-sm",children:e.name})},e.name))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-sm font-semibold text-white uppercase tracking-wider mb-6",children:"Locations"}),(0,t.jsx)("ul",{className:"space-y-3",children:u.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:e.href,className:"text-primary-400 hover:text-white transition-colors text-sm",children:e.name})},e.name))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-sm font-semibold text-white uppercase tracking-wider mb-6",children:"Company"}),(0,t.jsx)("ul",{className:"space-y-3",children:x.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:e.href,className:"text-primary-400 hover:text-white transition-colors text-sm",children:e.name})},e.name))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-sm font-semibold text-white uppercase tracking-wider mb-6",children:"Newsletter"}),(0,t.jsx)("p",{className:"text-primary-400 text-sm mb-4",children:"Subscribe for exclusive listings and market insights."}),(0,t.jsxs)("form",{className:"space-y-3",children:[(0,t.jsx)("input",{type:"email",placeholder:"Your email",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-primary-500 focus:outline-none focus:border-accent-gold transition-colors"}),(0,t.jsxs)("button",{type:"submit",className:"w-full btn-premium px-4 py-3 text-sm font-medium text-primary-950 rounded-lg flex items-center justify-center gap-2",children:["Subscribe",(0,t.jsx)(p,{className:"w-4 h-4"})]})]})]})]}),(0,t.jsxs)("div",{className:"mt-16 pt-8 border-t border-white/5",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-primary-500",children:[(0,t.jsx)("span",{children:"RERA License: #12345"}),(0,t.jsx)("span",{className:"hidden md:inline",children:"•"}),(0,t.jsx)("span",{children:"DED License: #67890"}),(0,t.jsx)("span",{className:"hidden md:inline",children:"•"}),(0,t.jsx)("span",{children:"ORN: #11223"})]}),(0,t.jsx)("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs text-primary-500",children:f.map((e,s)=>(0,t.jsx)(a.default,{href:e.href,className:"hover:text-white transition-colors",children:e.name},e.name))})]}),(0,t.jsxs)("p",{className:"mt-6 text-center text-xs text-primary-600",children:["© ",new Date().getFullYear()," INTERNITY LANDS. All rights reserved. Designed with precision in Dubai."]})]})]})]})}e.s(["default",()=>g],13642)},32484,e=>{"use strict";var t=e.i(43476),a=e.i(46932),s=e.i(43432);let r=(0,e.i(75254).default)("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);function i(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.motion.a,{href:"https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20properties",target:"_blank",rel:"noopener noreferrer",className:"whatsapp-float",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:1,duration:.5},whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,t.jsxs)("div",{className:"relative group",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"}),(0,t.jsx)("div",{className:"relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg",children:(0,t.jsx)(r,{className:"w-6 h-6 text-white"})}),(0,t.jsx)("span",{className:"absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary-900/95 backdrop-blur-xl text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10",children:"Chat on WhatsApp"})]})}),(0,t.jsx)(a.motion.a,{href:"tel:+971501234567",className:"call-float",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:1.2,duration:.5},whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,t.jsxs)("div",{className:"relative group",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-accent-gold rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"}),(0,t.jsx)("div",{className:"relative w-14 h-14 bg-accent-gold rounded-full flex items-center justify-center shadow-lg",children:(0,t.jsx)(s.Phone,{className:"w-6 h-6 text-primary-950"})}),(0,t.jsx)("span",{className:"absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-primary-900/95 backdrop-blur-xl text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10",children:"Call Now"})]})})]})}e.s(["default",()=>i],32484)},62438,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(46932);function r(){let[e,r]=(0,a.useState)({x:0,y:0}),[i,n]=(0,a.useState)(!1),[o,l]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{if(!window.matchMedia("(hover: hover)").matches)return;l(!0);let t=e=>{r({x:e.clientX,y:e.clientY})},a=()=>{let t=document.elementFromPoint(e.x,e.y);t&&n("pointer"===window.getComputedStyle(t).cursor||"A"===t.tagName||"BUTTON"===t.tagName)};return window.addEventListener("mousemove",t),window.addEventListener("mouseover",a),()=>{window.removeEventListener("mousemove",t),window.removeEventListener("mouseover",a)}},[e.x,e.y]),o)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.motion.div,{className:"fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden lg:block",animate:{x:e.x-8,y:e.y-8,scale:i?1.5:1},transition:{type:"spring",stiffness:500,damping:28,mass:.5},children:(0,t.jsx)("div",{className:"w-4 h-4 bg-white rounded-full"})}),(0,t.jsx)(s.motion.div,{className:"fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block",animate:{x:e.x-24,y:e.y-24,scale:i?1.5:1,opacity:i?.3:.5},transition:{type:"spring",stiffness:200,damping:20,mass:.8},children:(0,t.jsx)("div",{className:"w-12 h-12 border border-white/50 rounded-full"})})]}):null}e.s(["default",()=>r])}]);