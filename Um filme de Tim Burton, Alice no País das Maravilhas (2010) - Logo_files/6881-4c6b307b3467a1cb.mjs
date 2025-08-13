"use strict";(self.modernJsonp=self.modernJsonp||[]).push([[6881],{25690:(e,t,n)=>{n.d(t,{default:()=>a});var i=n(718222);let r=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,a={css:(0,i.Ll)([r]),animation:"pulsing 2s infinite"}},718222:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>a,XF:()=>r});let i=(e,t)=>{let n=2*Math.random()*Math.PI;return{x:Math.floor(t/2*Math.cos(n)),y:Math.floor(e/2*Math.sin(n))}},r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,a=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join(`
`)).join(`
`)},633569:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var i=n(667294),r=n(20256),a=n(569681),o=n(19963),l=n(756064);function s(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let u={},d=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class p{constructor(){s(this,"idMap",new Map),s(this,"objMap",new WeakMap)}get(e){let t=d(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=d(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=d(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}function m(e,t){return"number"==typeof e?e:"lg1"===t?e[t]??e.lg??1:e[t]??1}var c=n(399083),h=n(824834),y=n(25690),f=n(247854),g=n(970601),b=n(785893);let{css:_,animation:x}=y.default,w={backgroundColor:f.zsO,animation:x,borderRadius:f.saV};function v({data:e}){let{height:t}=e;return(0,b.jsxs)(i.Fragment,{children:[(0,b.jsx)(g.Z,{unsafeCSS:_}),(0,b.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:w},"data-test-id":"skeleton-pin",children:(0,b.jsx)(r.xu,{height:t})})]})}var M=n(56063),C=n(967312),S=n(174646),$=n(538645),R=n(992114),k=n(349167),j=n(438596);function E(e){let{align:t,cacheKey:n,id:s,isFetching:d,isGridCentered:y=!0,items:f,layout:_,loadItems:x,masonryRef:w,optOutFluidGridExperiment:E=!1,renderItem:I,scrollContainerRef:W,virtualize:G=!0,getColumnSpanConfig:z,_getResponsiveModuleConfigForSecondItem:P,isLoadingStateEnabled:A,initialLoadingStatePinCount:F,isLoadingAccessibilityLabel:O,isLoadedAccessibilityLabel:Z}=e,D=(0,$.ZP)(),H=(0,S.B)(),{isAuthenticated:T,isRTL:X}=H,{logContextEvent:N}=(0,o.u)(),B=(0,C.ru)(),L="desktop"===D,Q=(0,j.Zv)(),{group:J}=(0,k.DB)(),V=((0,i.useRef)(f.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),L&&!E),{experimentalColumnWidth:Y,experimentalGutter:q}=(0,c.Z)(V),K=e.serverRender??!!L,U="flexible"===_||"uniformRowFlexible"===_||"desktop"!==D||V,ee=(U&&_?.startsWith("uniformRow")?"uniformRowFlexible":void 0)??(K?"serverRenderedFlexible":"flexible"),et=e.columnWidth??Y??M.yF;U&&(et=Math.floor(et));let en=e.gutterWidth??q??(L?M.oX:1),ei=e.minCols??M.yc,er=(0,i.useRef)(0),ea=et+en,eo=function(e){if(null==e)return;let t=function(e){let t=u[e];return t&&t.screenWidth===window.innerWidth||(u[e]={screenWidth:window.innerWidth}),u[e]}(e);return t.measurementCache||(t.measurementCache=new p),t.measurementCache}(n),el=(0,i.useCallback)(()=>W?.current||window,[W]),es=(0,i.useRef)(!0),{anyEnabled:eu}=B.checkExperiment("web_masonry_pin_overlap_calculation_and_logging"),{anyEnabled:ed}=B.checkExperiment("web_masonry_fluid_reflow"),ep=y&&es.current?"centered":"",{className:em,styles:ec}=function(e){let t=`m_${Object.keys(e).sort().reduce((t,n)=>{let i=e[n];return null==i||"object"==typeof i||"function"==typeof i?t:"boolean"==typeof i?t+(i?"t":"f"):t+i},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:i,isRTL:r,itemWidth:a,maxColumns:o,minColumns:l,items:s,getColumnSpanConfig:u,_getResponsiveModuleConfigForSecondItem:d}=e,p=u?s.map((e,t)=>({index:t,columnSpanConfig:u(e)??1})).filter(e=>1!==e.columnSpanConfig):[],c=a+i,h=Array.from({length:o+1-l},(e,t)=>t+l).map(e=>{let h,y,f=e===l?0:e*c,g=e===o?null:(e+1)*c-.01;u&&d&&s.length>1&&(h=u(s[0]),y=d(s[1]));let{styles:b,numberOfVisibleItems:_}=p.reduce((r,o)=>{let{columnSpanConfig:l}=o,u=Math.min(function({columnCount:e,columnSpanConfig:t,firstItemColumnSpanConfig:n,isFlexibleWidthItem:i,secondItemResponsiveModuleConfig:r}){let a=e<=2?"sm":e<=4?"md":e<=6?"lg1":e<=8?"lg":"xl",o=m(t,a);if(i){let t=m(n,a);o="number"==typeof r?r:r?Math.max(r.min,Math.min(r.max,e-t)):1}return o}({columnCount:e,columnSpanConfig:l,isFlexibleWidthItem:!!y&&o===s[1],firstItemColumnSpanConfig:h??1,secondItemResponsiveModuleConfig:y??1}),e),d=null!=o.index&&r.numberOfVisibleItems>=u+o.index,p=n?100/e*u:a*u+i*(u-1),{numberOfVisibleItems:c}=r;return d?c-=u-1:o.index<c&&(c+=1),{styles:r.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:i,width:r,flexible:a}){let o="number"==typeof n?n:btoa(JSON.stringify(n));return a?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${i?"visible":"hidden"} !important;
        position: ${i?"inherit":"absolute"} !important;
        width: ${r}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${i?"visible":"hidden"} !important;
        position: ${i?"inherit":"absolute"} !important;
        width: ${r}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:l,visible:d,width:p,flexible:n})),numberOfVisibleItems:c}},{styles:"",numberOfVisibleItems:e}),x=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*c}px;
      }

      .${t} .static {
        width: ${a}px !important;
      }
    `;return{minWidth:f,maxWidth:g,styles:`
      .${t} .static:nth-child(-n+${_}) {
        position: static !important;
        visibility: visible !important;
        float: ${r?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${i/2}px;
      }

      ${x}

      ${b}
    `}}),y=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),f=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),g=`
    ${y.join("")}
    @supports not (container-type: inline-size) {
      ${f.join("")}
    }
  `;return{className:t,styles:`
    .masonryContainer:has(.${t}) {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${g}
  `}}({gutterWidth:en,flexible:U,items:f,isRTL:X,itemWidth:et,maxColumns:e.maxColumns??Math.max(f.length,M.g5),minColumns:ei,getColumnSpanConfig:z,_getResponsiveModuleConfigForSecondItem:P}),eh=`${ep} ${em}`.trim(),{anyEnabled:ey,expName:ef,group:eg,isMeasureAllEnabled:eb}=(0,h.Z)(),e_=((0,i.useRef)(void 0),(0,i.useRef)(f.length)),ex=(0,i.useRef)(0),ew=(0,i.useRef)(null);(0,i.useEffect)(()=>{e_.current=f.length,ex.current+=1},[f]),(0,i.useEffect)(()=>{if(es.current&&(es.current=!1),window.earlyGridRenderStats){let e=(0,k.M3)({earlyHydrationGroup:J,handlerId:Q,requestContext:H});(0,R.nP)("earlyHydrationDebug.masonry.earlyGridRender.status",{tags:e}),(0,R.LY)("earlyHydrationDebug.masonry.earlyGridRender.init",window.earlyGridRenderStats.init,{tags:e}),window.earlyGridRenderStats.start&&(0,R.LY)("earlyHydrationDebug.masonry.earlyGridRender.start",window.earlyGridRenderStats.start,{tags:e}),window.earlyGridRenderStats.end&&(0,R.LY)("earlyHydrationDebug.masonry.earlyGridRender.end",window.earlyGridRenderStats.end,{tags:e})}},[]),(0,i.useEffect)(()=>()=>{},[]);let ev=(0,i.useCallback)(e=>{let t=e.reduce((e,t)=>e+t),n=t/e.length;(0,R.S0)("webapp.masonry.multiColumnWhitespace.average",n,{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",handlerId:Q,isAuthenticated:T,multiColumnItemSpan:e.length}}),(0,R.S0)("webapp.masonry.twoColWhitespace",n,{sampleRate:1,tags:{columnWidth:et,minCols:ei}}),N({event_type:15878,component:14468,aux_data:{total_whitespace_px:t}}),N({event_type:16062,component:14468,aux_data:{average_whitespace_px:n}}),N({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(t=>{t>=50&&((0,R.nP)("webapp.masonry.multiColumnWhitespace.over50",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",handlerId:Q,isAuthenticated:T,multiColumnItemSpan:e.length}}),N({event_type:16261,component:14468})),t>=100&&((0,R.nP)("webapp.masonry.multiColumnWhitespace.over100",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",handlerId:Q,isAuthenticated:T,multiColumnItemSpan:e.length}}),N({event_type:16262,component:14468}))}),(0,R.nP)("webapp.masonry.multiColumnWhitespace.count",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",handlerId:Q,isAuthenticated:T,multiColumnItemSpan:e.length}})},[et,N,ei,T,Q,eg]),{_items:eM,_renderItem:eC}=function({initialLoadingStatePinCount:e=50,infiniteScrollPinCount:t=10,isFetching:n,items:r=[],renderItem:a,isLoadingStateEnabled:o}){let l=+(r.filter(e=>"object"==typeof e&&null!==e&&"type"in e&&"closeup_module"===e.type).length>0),s=o&&n,u=(0,i.useMemo)(()=>Array.from({length:r.length>l?t:e}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236,key:`skeleton-pin-${n}`,isSkeleton:!0}],[]),[r.length,l,t,e]);return{_items:(0,i.useMemo)(()=>s?[...r,...u]:r,[s,r,u]),_renderItem:(0,i.useMemo)(()=>o?e=>{let{itemIdx:t,data:n}=e;return t>=r.length&&n&&"object"==typeof n&&"key"in n&&"height"in n?(0,b.jsx)(v,{data:n},n.key):a(e)}:a,[o,a,r.length])}}({isLoadingStateEnabled:A,items:f,renderItem:(0,i.useCallback)(e=>(0,b.jsx)(l.Z,{name:"MasonryItem",children:I(e)}),[I]),isFetching:d,initialLoadingStatePinCount:F}),eS=A&&d,e$=(0,i.useRef)(new Set);(0,i.useEffect)(()=>{if(!eu)return;let e=setTimeout(()=>{requestAnimationFrame(()=>{let e=Array.from(ew.current?.querySelectorAll("[data-grid-item-idx]")??[]);if(0===e.length)return;let t=e.map(e=>{let t=e.getAttribute("data-grid-item-idx");return{rect:e.getBoundingClientRect(),itemIdx:t}}),n=0,i=0,r=0,a=0,o=0,l=0;for(let e=0;e<t.length;e+=1){let s=t[e]?.rect,u=t[e]?.itemIdx;for(let d=e+1;d<t.length;d+=1){let e=t[d]?.rect,p=t[d]?.itemIdx;if(s&&e&&u&&p){let t=[u,p].sort().join("|");if(!e$.current.has(t)&&s.right>=e.left&&s.left<=e.right&&s.bottom>=e.top&&s.top<=e.bottom&&s.height>0&&e.height>0){e$.current.add(t),n+=1;let u=Math.max(0,Math.min(s.right,e.right)-Math.max(s.left,e.left))*Math.max(0,Math.min(s.bottom,e.bottom)-Math.max(s.top,e.top));u>8e4?l+=1:u>4e4?o+=1:u>1e4?a+=1:u>5e3?r+=1:u>2500&&(i+=1)}}}}n>0&&(0,R.QX)("webapp.masonry.pinOverlapHits",n,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:ed?"true":"false"}}),i>0&&(0,R.QX)("webapp.masonry.pinOverlap.AreaPx.over2500",i,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:ed?"true":"false"}}),r>0&&(0,R.QX)("webapp.masonry.pinOverlap.AreaPx.over5000",r,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:ed?"true":"false"}}),a>0&&(0,R.QX)("webapp.masonry.pinOverlap.AreaPx.over10000",a,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:ed?"true":"false"}}),o>0&&(0,R.QX)("webapp.masonry.pinOverlap.AreaPx.over40000",o,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:ed?"true":"false"}}),l>0&&(0,R.QX)("webapp.masonry.pinOverlap.AreaPx.over80000",l,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:ed?"true":"false"}})})},1e3);return()=>{clearTimeout(e)}},[et,eg,ed,T,L,eu,f,Q]);let eR=(0,a.Z)(),ek=(0,i.useCallback)(e=>{w&&(w.current=e)},[w]);return(0,b.jsxs)(i.Fragment,{children:[A&&!es.current&&(0,b.jsx)(r.xu,{"aria-live":"polite",display:"visuallyHidden",children:eS?O:Z}),(0,b.jsx)("div",{ref:ew,"aria-busy":A?!!eS:void 0,className:"masonryContainer","data-test-id":"masonry-container",id:s,style:V?{padding:`0 ${en/2}px`}:void 0,children:(0,b.jsxs)("div",{className:eh,children:[K&&es.current?(0,b.jsx)(g.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:ec}):null,(0,b.jsx)(r.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?ea*e.maxColumns:void 0,children:ey?(0,b.jsx)(r.GX,{ref:eR?ek:e=>{w&&(w.current=e)},_dynamicHeights:!0,_getResponsiveModuleConfigForSecondItem:P,_logTwoColWhitespace:ev,_measureAll:eb,align:t,columnWidth:et,getColumnSpanConfig:z,gutterWidth:en,items:eM,layout:U?ee:_??"basic",loadItems:x,measurementStore:eo,minCols:ei,renderItem:eC,scrollContainer:el,virtualBufferFactor:.3,virtualize:G}):(0,b.jsx)(r.Rk,{ref:eR?ek:e=>{w&&(w.current=e)},_dynamicHeights:!0,_fluidResize:ed,_getResponsiveModuleConfigForSecondItem:P,_logTwoColWhitespace:ev,align:t,columnWidth:et,getColumnSpanConfig:z,gutterWidth:en,items:eM,layout:U?ee:_??"basic",loadItems:x,measurementStore:eo,minCols:ei,renderItem:eC,scrollContainer:el,virtualBufferFactor:.3,virtualize:G})})]})})]})}},399083:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e=!0){let t=e?16:void 0,n=t?Math.floor(t/4):void 0;return{experimentalColumnWidth:e?221:void 0,experimentalGutter:t,experimentalGutterBoints:n}}},824834:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(967312);function r(e){let{expName:t,anyEnabled:n,group:r}=function({experimentsClient:e,skipActivation:t}){let{checkExperiment:n}=e,i=n("web_masonry_v2",{dangerouslySkipActivation:t});return i.group?{expName:"web_masonry_v2",...i}:{expName:"",anyEnabled:!1,group:""}}({experimentsClient:(0,i.ru)(),skipActivation:e?.skipActivation??!1});return{expName:t,anyEnabled:n,group:r,isMeasureAllEnabled:"enabled_measure_all"===r||"enabled_measure_all_impression_fix"===r,isImpressionFixEnabled:"control_impression_fix"===r||"enabled_impression_fix"===r||"enabled_measure_all_impression_fix"===r}}},940897:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(667294),r=n(349167);let a=(0,i.createContext)(null);function o(){return(0,i.use)(a)??r.g5}},349167:(e,t,n)=>{n.d(t,{DB:()=>o,M3:()=>l,SS:()=>a,g5:()=>r});var i=n(720038);let r={anyEnabled:!1,group:"",scriptPlacement:"head",optimizedClient:!1,moduleScripts:!1};function a({experimentsClient:e,handlerId:t,skipActivation:n=!1}){let{site:a}=(0,i.ac)(t??"");if("www"!==a)return r;let{group:o}=e?.checkExperiment("web_early_hydration",{dangerouslySkipActivation:n})??{group:""},l=o.includes("optimized_client");switch(o){case"enabled":case"enabled_optimized_client":return{anyEnabled:!0,group:o,scriptPlacement:"head",optimizedClient:l,moduleScripts:!1};case"employees":case"enabled_preload_and_body_scripts":case"enabled_preload_and_body_scripts_optimized_client":return{anyEnabled:!0,group:o,scriptPlacement:"body",preloadScripts:"low",optimizedClient:l,moduleScripts:!1};case"enabled_preload_high_and_body_scripts":case"enabled_preload_high_and_body_scripts_optimized_client":return{anyEnabled:!0,group:o,scriptPlacement:"body",preloadScripts:"high",optimizedClient:l,moduleScripts:!1};case"enabled_preload_and_body_module_scripts":case"enabled_preload_and_body_module_scripts_optimized_client":return{anyEnabled:!0,group:o,scriptPlacement:"body",preloadScripts:"low",optimizedClient:l,moduleScripts:!0};case"enabled_preload_high_and_body_module_scripts":case"enabled_preload_high_and_body_module_scripts_optimized_client":return{anyEnabled:!0,group:o,scriptPlacement:"body",preloadScripts:"high",optimizedClient:l,moduleScripts:!0};case"control":return{...r,group:o};default:return r}}let o=n(940897).Z;function l({earlyHydrationGroup:e,handlerId:t,requestContext:n}){let{isAuthenticated:i,isBot:r,userAgent:a}=n;return{earlyHydrationGroup:e||"unknown",environment:"client",handlerId:t,isAuthenticated:i,isBot:r,isDesktop:!a.isMobile&&!a.isTablet,isFromInstantLoadingIndicatorAppShell:window.isFromInstantLoadingIndicatorAppShell||!1}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/6881-4c6b307b3467a1cb.mjs.map