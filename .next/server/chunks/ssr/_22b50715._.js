module.exports=[6704,a=>{"use strict";let b,c;var d,e=a.i(72131);let f={data:""},g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,i=/\n+/g,j=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?j(g,f):f+"{"+j(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=j(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=j.p?j.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},k={},l=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+l(a[c]);return b}return a};function m(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let m=l(a),n=k[m]||(k[m]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(m));if(!k[n]){let b=m!==a?a:(a=>{let b,c,d=[{}];for(;b=g.exec(a.replace(h,""));)b[4]?d.shift():b[3]?(c=b[3].replace(i," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(i," ").trim();return d[0]})(a);k[n]=j(e?{["@keyframes "+n]:b}:b,c?"":"."+n)}let o=c&&k.g?k.g:null;return c&&(k.g=k[n]),f=k[n],o?b.data=b.data.replace(o,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),n})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":j(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||f,d.g,d.o,d.k)}m.bind({g:1});let n,o,p,q=m.bind({k:1});function r(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:o&&o()},h),c.o=/ *go\d+/.test(i),h.className=m.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),p&&j[0]&&p(h),n(j,h)}return b?b(e):e}}var s=(a,b)=>"function"==typeof a?a(b):a,t=(b=0,()=>(++b).toString()),u="default",v=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return v(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},w=[],x={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},y={},z=(a,b=u)=>{y[b]=v(y[b]||x,a),w.forEach(([a,c])=>{a===b&&c(y[b])})},A=a=>Object.keys(y).forEach(b=>z(a,b)),B=(a=u)=>b=>{z(b,a)},C={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(a={},b=u)=>{let[c,d]=(0,e.useState)(y[b]||x),f=(0,e.useRef)(y[b]);(0,e.useEffect)(()=>(f.current!==y[b]&&d(y[b]),w.push([b,d]),()=>{let a=w.findIndex(([a])=>a===b);a>-1&&w.splice(a,1)}),[b]);let g=c.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||C[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...c,toasts:g}},E=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||t()}))(b,a,c);return B(e.toasterId||(d=e.id,Object.keys(y).find(a=>y[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},F=(a,b)=>E("blank")(a,b);F.error=E("error"),F.success=E("success"),F.loading=E("loading"),F.custom=E("custom"),F.dismiss=(a,b)=>{let c={type:3,toastId:a};b?B(b)(c):A(c)},F.dismissAll=a=>F.dismiss(void 0,a),F.remove=(a,b)=>{let c={type:4,toastId:a};b?B(b)(c):A(c)},F.removeAll=a=>F.remove(void 0,a),F.promise=(a,b,c)=>{let d=F.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?s(b.success,a):void 0;return e?F.success(e,{id:d,...c,...null==c?void 0:c.success}):F.dismiss(d),a}).catch(a=>{let e=b.error?s(b.error,a):void 0;e?F.error(e,{id:d,...c,...null==c?void 0:c.error}):F.dismiss(d)}),a};var G=1e3,H=(a,b="default")=>{let{toasts:c,pausedAt:d}=D(a,b),f=(0,e.useRef)(new Map).current,g=(0,e.useCallback)((a,b=G)=>{if(f.has(a))return;let c=setTimeout(()=>{f.delete(a),h({type:4,toastId:a})},b);f.set(a,c)},[]);(0,e.useEffect)(()=>{if(d)return;let a=Date.now(),e=c.map(c=>{if(c.duration===1/0)return;let d=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(d<0){c.visible&&F.dismiss(c.id);return}return setTimeout(()=>F.dismiss(c.id,b),d)});return()=>{e.forEach(a=>a&&clearTimeout(a))}},[c,d,b]);let h=(0,e.useCallback)(B(b),[b]),i=(0,e.useCallback)(()=>{h({type:5,time:Date.now()})},[h]),j=(0,e.useCallback)((a,b)=>{h({type:1,toast:{id:a,height:b}})},[h]),k=(0,e.useCallback)(()=>{d&&h({type:6,time:Date.now()})},[d,h]),l=(0,e.useCallback)((a,b)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=b||{},g=c.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[c]);return(0,e.useEffect)(()=>{c.forEach(a=>{if(a.dismissed)g(a.id,a.removeDelay);else{let b=f.get(a.id);b&&(clearTimeout(b),f.delete(a.id))}})},[c,g]),{toasts:c,handlers:{updateHeight:j,startPause:i,endPause:k,calculateOffset:l}}},I=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,J=q`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=q`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${J} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${K} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,N=r("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,O=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,P=q`
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
}`,Q=r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${P} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,R=r("div")`
  position: absolute;
`,S=r("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,T=q`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=r("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${T} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,V=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?e.createElement(U,null,b):b:"blank"===c?null:e.createElement(S,null,e.createElement(N,{...d}),"loading"!==c&&e.createElement(R,null,"error"===c?e.createElement(L,{...d}):e.createElement(Q,{...d})))},W=r("div")`
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
`,X=r("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Y=e.memo(({toast:a,position:b,style:d,children:f})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${q(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${q(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=e.createElement(V,{toast:a}),i=e.createElement(X,{...a.ariaProps},s(a.message,a));return e.createElement(W,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof f?f({icon:h,message:i}):e.createElement(e.Fragment,null,h,i))});d=e.createElement,j.p=void 0,n=d,o=void 0,p=void 0;var Z=({id:a,className:b,style:c,onHeightUpdate:d,children:f})=>{let g=e.useCallback(b=>{if(b){let c=()=>{d(a,b.getBoundingClientRect().height)};c(),new MutationObserver(c).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[a,d]);return e.createElement("div",{ref:g,className:b,style:c},f)},$=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,_=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:f,children:g,toasterId:h,containerStyle:i,containerClassName:j})=>{let{toasts:k,handlers:l}=H(d,h);return e.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:j,onMouseEnter:l.startPause,onMouseLeave:l.endPause},k.map(d=>{let h,i,j=d.position||b,k=l.calculateOffset(d,{reverseOrder:a,gutter:f,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${k*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return e.createElement(Z,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?$:"",style:m},"custom"===d.type?s(d.message,d):g?g(d):e.createElement(Y,{toast:d,position:j}))}))};a.s(["CheckmarkIcon",()=>Q,"ErrorIcon",()=>L,"LoaderIcon",()=>N,"ToastBar",()=>Y,"ToastIcon",()=>V,"Toaster",()=>_,"default",()=>F,"resolveValue",()=>s,"toast",()=>F,"useToaster",()=>H,"useToasterStore",()=>D],6704)},58212,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246),e=a.i(61280),f=a.i(62036),g=a.i(70106);let h=(0,g.default)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),i=(0,g.default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var j=a.i(63519);let k=(0,g.default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),l=[{name:"Home",href:"/"},{name:"Properties",href:"/properties",submenu:[{name:"All Properties",href:"/properties"},{name:"Apartments",href:"/properties?type=apartment"},{name:"Villas",href:"/properties?type=villa"},{name:"Penthouses",href:"/properties?type=penthouse"},{name:"Commercial",href:"/properties?type=commercial"}]},{name:"About",href:"/about"},{name:"Agents",href:"/agents"},{name:"Locations",href:"/locations"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/contact"}];function m(){let[a,g]=(0,c.useState)(!1),[m,n]=(0,c.useState)(!1),[o,p]=(0,c.useState)(null);return(0,c.useEffect)(()=>{let a=()=>{g(window.scrollY>50)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(e.motion.nav,{initial:{y:-100},animate:{y:0},transition:{duration:.8,ease:[.4,0,.2,1]},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${a?"bg-primary-950/95 backdrop-blur-xl border-b border-white/5":"bg-transparent"}`,children:(0,b.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,b.jsxs)("div",{className:"flex items-center justify-between h-20 lg:h-24",children:[(0,b.jsxs)(d.default,{href:"/",className:"flex items-center space-x-3 group",children:[(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("div",{className:"w-10 h-10 bg-gradient-to-br from-accent-gold to-accent-gold/70 rounded-sm flex items-center justify-center",children:(0,b.jsx)("span",{className:"text-primary-950 font-display font-bold text-lg",children:"I"})}),(0,b.jsx)("div",{className:"absolute -inset-1 bg-accent-gold/20 rounded-sm blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]}),(0,b.jsxs)("div",{className:"hidden sm:block",children:[(0,b.jsx)("span",{className:"text-xl font-display font-semibold tracking-wide text-white",children:"INTERNITY"}),(0,b.jsx)("span",{className:"text-xl font-display font-light tracking-widest text-accent-gold ml-2",children:"LANDS"})]})]}),(0,b.jsx)("div",{className:"hidden lg:flex items-center space-x-1",children:l.map(a=>(0,b.jsxs)("div",{className:"relative",onMouseEnter:()=>a.submenu&&p(a.name),onMouseLeave:()=>p(null),children:[(0,b.jsxs)(d.default,{href:a.href,className:"px-4 py-2 text-sm font-medium text-primary-300 hover:text-white transition-colors duration-300 flex items-center gap-1",children:[a.name,a.submenu&&(0,b.jsx)(k,{className:"w-3 h-3"})]}),(0,b.jsx)(f.AnimatePresence,{children:a.submenu&&o===a.name&&(0,b.jsx)(e.motion.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2},className:"absolute top-full left-0 pt-2",children:(0,b.jsx)("div",{className:"bg-primary-900/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden min-w-[200px] shadow-premium",children:a.submenu.map(a=>(0,b.jsx)(d.default,{href:a.href,className:"block px-4 py-3 text-sm text-primary-300 hover:text-white hover:bg-white/5 transition-all duration-300",children:a.name},a.name))})})})]},a.name))}),(0,b.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,b.jsxs)("a",{href:"tel:+971501234567",className:"hidden md:flex items-center gap-2 text-sm text-primary-300 hover:text-accent-gold transition-colors duration-300",children:[(0,b.jsx)(j.Phone,{className:"w-4 h-4"}),(0,b.jsx)("span",{children:"+971 50 123 4567"})]}),(0,b.jsx)(d.default,{href:"/contact",className:"hidden sm:block btn-premium px-6 py-2.5 text-sm font-medium text-primary-950 rounded-full",children:"Schedule Viewing"}),(0,b.jsx)("button",{onClick:()=>n(!m),className:"lg:hidden p-2 text-white hover:text-accent-gold transition-colors",children:m?(0,b.jsx)(i,{className:"w-6 h-6"}):(0,b.jsx)(h,{className:"w-6 h-6"})})]})]})})}),(0,b.jsx)(f.AnimatePresence,{children:m&&(0,b.jsxs)(e.motion.div,{initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{duration:.4,ease:[.4,0,.2,1]},className:"fixed inset-0 z-40 lg:hidden",children:[(0,b.jsx)("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>n(!1)}),(0,b.jsx)("div",{className:"absolute top-0 right-0 w-full max-w-sm h-full bg-primary-950 border-l border-white/10 overflow-y-auto",children:(0,b.jsxs)("div",{className:"pt-24 pb-8 px-6 space-y-2",children:[l.map((a,c)=>(0,b.jsxs)(e.motion.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.1*c},children:[(0,b.jsx)(d.default,{href:a.href,onClick:()=>n(!1),className:"block py-3 text-lg font-medium text-primary-200 hover:text-white border-b border-white/5 transition-colors",children:a.name}),a.submenu&&(0,b.jsx)("div",{className:"pl-4 space-y-2 mt-2",children:a.submenu.map(a=>(0,b.jsx)(d.default,{href:a.href,onClick:()=>n(!1),className:"block py-2 text-sm text-primary-400 hover:text-accent-gold transition-colors",children:a.name},a.name))})]},a.name)),(0,b.jsxs)("div",{className:"pt-6 space-y-4",children:[(0,b.jsxs)("a",{href:"tel:+971501234567",className:"flex items-center gap-3 text-primary-300 hover:text-accent-gold transition-colors",children:[(0,b.jsx)(j.Phone,{className:"w-5 h-5"}),(0,b.jsx)("span",{children:"+971 50 123 4567"})]}),(0,b.jsx)(d.default,{href:"/contact",onClick:()=>n(!1),className:"block w-full btn-premium px-6 py-3 text-center text-sm font-medium text-primary-950 rounded-full",children:"Schedule Viewing"})]})]})})]})})]})}a.s(["default",()=>m],58212)},56283,a=>{"use strict";var b=a.i(87924),c=a.i(38246),d=a.i(24987),e=a.i(63519),f=a.i(92258),g=a.i(70106);let h=(0,g.default)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),i=(0,g.default)("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),j=(0,g.default)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),k=(0,g.default)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),l=(0,g.default)("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),m=(0,g.default)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),n=[{name:"All Properties",href:"/properties"},{name:"Apartments",href:"/properties?type=apartment"},{name:"Villas",href:"/properties?type=villa"},{name:"Penthouses",href:"/properties?type=penthouse"},{name:"Commercial",href:"/properties?type=commercial"},{name:"Off-Plan",href:"/properties?status=off-plan"}],o=[{name:"Dubai Marina",href:"/locations/dubai-marina"},{name:"Palm Jumeirah",href:"/locations/palm-jumeirah"},{name:"Downtown Dubai",href:"/locations/downtown-dubai"},{name:"Business Bay",href:"/locations/business-bay"},{name:"JBR",href:"/locations/jbr"},{name:"DIFC",href:"/locations/difc"}],p=[{name:"About Us",href:"/about"},{name:"Our Team",href:"/agents"},{name:"Careers",href:"/careers"},{name:"Blog",href:"/blog"},{name:"Press",href:"/press"},{name:"Contact",href:"/contact"}],q=[{name:"Privacy Policy",href:"/privacy"},{name:"Terms of Service",href:"/terms"},{name:"Cookie Policy",href:"/cookies"},{name:"Disclaimer",href:"/disclaimer"}],r=[{name:"Instagram",icon:h,href:"https://instagram.com"},{name:"Facebook",icon:i,href:"https://facebook.com"},{name:"Twitter",icon:j,href:"https://twitter.com"},{name:"LinkedIn",icon:k,href:"https://linkedin.com"},{name:"YouTube",icon:l,href:"https://youtube.com"}];function s(){return(0,b.jsxs)("footer",{className:"relative bg-primary-950 border-t border-white/5",children:[(0,b.jsx)("div",{className:"absolute inset-0 grid-pattern opacity-30"}),(0,b.jsxs)("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12",children:[(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8",children:[(0,b.jsxs)("div",{className:"lg:col-span-2",children:[(0,b.jsxs)(c.default,{href:"/",className:"inline-flex items-center space-x-3 group",children:[(0,b.jsx)("div",{className:"relative",children:(0,b.jsx)("div",{className:"w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-gold/70 rounded-sm flex items-center justify-center",children:(0,b.jsx)("span",{className:"text-primary-950 font-display font-bold text-xl",children:"I"})})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-2xl font-display font-semibold tracking-wide text-white",children:"INTERNITY"}),(0,b.jsx)("span",{className:"text-2xl font-display font-light tracking-widest text-accent-gold ml-2",children:"LANDS"})]})]}),(0,b.jsx)("p",{className:"mt-6 text-primary-400 leading-relaxed max-w-sm",children:"Dubai's premier luxury real estate agency. We specialize in premium properties, investment opportunities, and exceptional client service since 2010."}),(0,b.jsxs)("div",{className:"mt-8 space-y-4",children:[(0,b.jsxs)("a",{href:"https://maps.google.com",target:"_blank",className:"flex items-start gap-3 text-primary-400 hover:text-white transition-colors group",children:[(0,b.jsx)(d.MapPin,{className:"w-5 h-5 mt-0.5 text-accent-gold"}),(0,b.jsxs)("span",{children:["Level 42, Emirates Towers,",(0,b.jsx)("br",{}),"Sheikh Zayed Road, Dubai, UAE"]})]}),(0,b.jsxs)("a",{href:"tel:+971501234567",className:"flex items-center gap-3 text-primary-400 hover:text-white transition-colors",children:[(0,b.jsx)(e.Phone,{className:"w-5 h-5 text-accent-gold"}),(0,b.jsx)("span",{children:"+971 50 123 4567"})]}),(0,b.jsxs)("a",{href:"mailto:info@internitylands.com",className:"flex items-center gap-3 text-primary-400 hover:text-white transition-colors",children:[(0,b.jsx)(f.Mail,{className:"w-5 h-5 text-accent-gold"}),(0,b.jsx)("span",{children:"info@internitylands.com"})]})]}),(0,b.jsx)("div",{className:"mt-8 flex items-center gap-3",children:r.map(a=>(0,b.jsx)("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary-400 hover:text-white hover:border-accent-gold hover:bg-accent-gold/10 transition-all duration-300","aria-label":a.name,children:(0,b.jsx)(a.icon,{className:"w-4 h-4"})},a.name))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"text-sm font-semibold text-white uppercase tracking-wider mb-6",children:"Properties"}),(0,b.jsx)("ul",{className:"space-y-3",children:n.map(a=>(0,b.jsx)("li",{children:(0,b.jsx)(c.default,{href:a.href,className:"text-primary-400 hover:text-white transition-colors text-sm",children:a.name})},a.name))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"text-sm font-semibold text-white uppercase tracking-wider mb-6",children:"Locations"}),(0,b.jsx)("ul",{className:"space-y-3",children:o.map(a=>(0,b.jsx)("li",{children:(0,b.jsx)(c.default,{href:a.href,className:"text-primary-400 hover:text-white transition-colors text-sm",children:a.name})},a.name))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"text-sm font-semibold text-white uppercase tracking-wider mb-6",children:"Company"}),(0,b.jsx)("ul",{className:"space-y-3",children:p.map(a=>(0,b.jsx)("li",{children:(0,b.jsx)(c.default,{href:a.href,className:"text-primary-400 hover:text-white transition-colors text-sm",children:a.name})},a.name))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"text-sm font-semibold text-white uppercase tracking-wider mb-6",children:"Newsletter"}),(0,b.jsx)("p",{className:"text-primary-400 text-sm mb-4",children:"Subscribe for exclusive listings and market insights."}),(0,b.jsxs)("form",{className:"space-y-3",children:[(0,b.jsx)("input",{type:"email",placeholder:"Your email",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-primary-500 focus:outline-none focus:border-accent-gold transition-colors"}),(0,b.jsxs)("button",{type:"submit",className:"w-full btn-premium px-4 py-3 text-sm font-medium text-primary-950 rounded-lg flex items-center justify-center gap-2",children:["Subscribe",(0,b.jsx)(m,{className:"w-4 h-4"})]})]})]})]}),(0,b.jsxs)("div",{className:"mt-16 pt-8 border-t border-white/5",children:[(0,b.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[(0,b.jsxs)("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-primary-500",children:[(0,b.jsx)("span",{children:"RERA License: #12345"}),(0,b.jsx)("span",{className:"hidden md:inline",children:"•"}),(0,b.jsx)("span",{children:"DED License: #67890"}),(0,b.jsx)("span",{className:"hidden md:inline",children:"•"}),(0,b.jsx)("span",{children:"ORN: #11223"})]}),(0,b.jsx)("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs text-primary-500",children:q.map((a,d)=>(0,b.jsx)(c.default,{href:a.href,className:"hover:text-white transition-colors",children:a.name},a.name))})]}),(0,b.jsxs)("p",{className:"mt-6 text-center text-xs text-primary-600",children:["© ",new Date().getFullYear()," INTERNITY LANDS. All rights reserved. Designed with precision in Dubai."]})]})]})]})}a.s(["default",()=>s],56283)},42310,a=>{"use strict";var b=a.i(87924),c=a.i(61280),d=a.i(63519);let e=(0,a.i(70106).default)("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);function f(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c.motion.a,{href:"https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20properties",target:"_blank",rel:"noopener noreferrer",className:"whatsapp-float",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:1,duration:.5},whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,b.jsxs)("div",{className:"relative group",children:[(0,b.jsx)("div",{className:"absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"}),(0,b.jsx)("div",{className:"relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg",children:(0,b.jsx)(e,{className:"w-6 h-6 text-white"})}),(0,b.jsx)("span",{className:"absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary-900/95 backdrop-blur-xl text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10",children:"Chat on WhatsApp"})]})}),(0,b.jsx)(c.motion.a,{href:"tel:+971501234567",className:"call-float",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:1.2,duration:.5},whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,b.jsxs)("div",{className:"relative group",children:[(0,b.jsx)("div",{className:"absolute inset-0 bg-accent-gold rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"}),(0,b.jsx)("div",{className:"relative w-14 h-14 bg-accent-gold rounded-full flex items-center justify-center shadow-lg",children:(0,b.jsx)(d.Phone,{className:"w-6 h-6 text-primary-950"})}),(0,b.jsx)("span",{className:"absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-primary-900/95 backdrop-blur-xl text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10",children:"Call Now"})]})})]})}a.s(["default",()=>f],42310)},39527,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(61280);function e(){let[a,e]=(0,c.useState)({x:0,y:0}),[f,g]=(0,c.useState)(!1),[h,i]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{if(!window.matchMedia("(hover: hover)").matches)return;i(!0);let b=a=>{e({x:a.clientX,y:a.clientY})},c=()=>{let b=document.elementFromPoint(a.x,a.y);b&&g("pointer"===window.getComputedStyle(b).cursor||"A"===b.tagName||"BUTTON"===b.tagName)};return window.addEventListener("mousemove",b),window.addEventListener("mouseover",c),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("mouseover",c)}},[a.x,a.y]),h)?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.motion.div,{className:"fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden lg:block",animate:{x:a.x-8,y:a.y-8,scale:f?1.5:1},transition:{type:"spring",stiffness:500,damping:28,mass:.5},children:(0,b.jsx)("div",{className:"w-4 h-4 bg-white rounded-full"})}),(0,b.jsx)(d.motion.div,{className:"fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block",animate:{x:a.x-24,y:a.y-24,scale:f?1.5:1,opacity:f?.3:.5},transition:{type:"spring",stiffness:200,damping:20,mass:.8},children:(0,b.jsx)("div",{className:"w-12 h-12 border border-white/50 rounded-full"})})]}):null}a.s(["default",()=>e])}];

//# sourceMappingURL=_22b50715._.js.map