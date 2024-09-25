import{i as ne,b as ae,d as le,r as i,_ as se,e as z,f as oe,w as T,R as r,c as O,g as re,h as W,k as ce,s as ie,S as ue,m as U,l as de,n as me,o as fe,u as he,j as c}from"./index-Y-LGG6xo.js";import{d as ve,u as ge,b as B,a as pe,c as Ae,i as be,e as Q,f as _e,P as Ee,D as Ce,I as Ne,C as ke}from"./input-kZiCDGNj.js";import"./CloseCircleFill-2FlUHfMP.js";function ye(){var t=(typeof global>"u"?"undefined":typeof global)=="object"&&global&&global.Object===Object&&global,e=typeof self=="object"&&self&&self.Object===Object&&self;return t||e}ye()||(global.Date=Date);function xe(t,e){var a;ne&&(ae(t)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof t)));var v=le(t),n=(a=e==null?void 0:e.wait)!==null&&a!==void 0?a:1e3,u=i.useMemo(function(){return ve(function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return v.current.apply(v,se([],z(o),!1))},n,e)},[]);return oe(function(){u.cancel()}),{run:u,cancel:u.cancel,flush:u.flush}}function Ie(t,e,a){var v=z(i.useState({}),2),n=v[0],u=v[1],o=xe(function(){u({})},a).run;i.useEffect(function(){return o()},e),ge(t,[n])}const D="adm-safe-area",je=t=>T(t,r.createElement("div",{className:O(D,`${D}-position-${t.position}`)}));function G(t,e,a){return t*e*a/(e+a*t)}function J(t,e,a,v,n=.15){return n===0?B(t,e,a):t<e?-G(e-t,v,n)+e:t>a?+G(t-a,v,n)+a:t}function Re(t){if(t==null||t==="")return 0;const e=t.trim();return e.endsWith("px")?parseFloat(e):e.endsWith("rem")?parseFloat(e)*parseFloat(window.getComputedStyle(document.documentElement).fontSize):e.endsWith("vw")?parseFloat(e)*window.innerWidth/100:0}const y="adm-picker-view",q=i.memo(t=>{const{value:e,column:a,renderLabel:v}=t;function n(s){t.onSelect(s,t.index)}const[{y:u},o]=re(()=>({from:{y:0},config:{tension:400,mass:.8}})),l=i.useRef(!1),d=i.useRef(null),N=i.useRef(null),b=i.useRef(34);W(()=>{const s=N.current;s&&(b.current=Re(window.getComputedStyle(s).getPropertyValue("height")))}),W(()=>{if(l.current||e===null)return;const s=a.findIndex(A=>A.value===e);if(s<0)return;const h=s*-b.current;o.start({y:h,immediate:u.goal!==h})},[e,a]),W(()=>{if(a.length===0)e!==null&&n(null);else if(!a.some(s=>s.value===e)){const s=a[0];n(s.value)}},[a,e]);function k(s){const h=s*-b.current;o.start({y:h});const A=a[s];A&&n(A.value)}const I=s=>{const{direction:[,h],distance:[,A],velocity:[,_],offset:[,C],last:F}=s;return{direction:h,distance:A,velocity:_,offset:C,last:F}},g=s=>{l.current=!0;const h=-((a.length-1)*b.current),A=0,{direction:_,last:C,velocity:F,offset:w}=I(s);if(C){l.current=!1;const S=w+F*_*50,L=B(S,h,A),V=-Math.round(L/b.current);k(V)}else{const S=w;o.start({y:J(S,h,A,b.current*50,.2)})}},p=s=>{l.current=!0;const h=-((a.length-1)*b.current),A=0,{direction:_,last:C,velocity:F,distance:w}=I(s),S=-_,L=u.get();if(C){l.current=!1;const V=F*S*50,K=L+w*S+V,ee=B(K,h,A),te=-Math.round(ee/b.current);k(te)}else{const V=L+w*S;o.start({y:J(V,h,A,b.current*50,.2)})}};pe(s=>{s.event.stopPropagation(),g(s)},{axis:"y",from:()=>[0,u.get()],filterTaps:!0,pointer:{touch:!0},target:d}),Ae(s=>{s.event.stopPropagation(),p(s)},{target:t.mouseWheel?d:void 0,axis:"y",from:()=>[0,u.get()],preventDefault:!0,eventOptions:ie?{passive:!1}:void 0});let E=null;function f(){if(E===null)return null;const s=a[E],h=E-1,A=E+1,_=a[h],C=a[A];return r.createElement("div",{className:`${y}-column-accessible`},r.createElement("div",{className:`${y}-column-accessible-current`,role:"button","aria-label":s?`当前选择的是：${s.label}`:"当前未选择"},"-"),r.createElement("div",{className:`${y}-column-accessible-button`,onClick:()=>{_&&k(h)},role:_?"button":"text","aria-label":_?`选择上一项：${_.label}`:"没有上一项"},"-"),r.createElement("div",{className:`${y}-column-accessible-button`,onClick:()=>{C&&k(A)},role:C?"button":"text","aria-label":C?`选择下一项：${C.label}`:"没有下一项"},"-"))}return r.createElement("div",{className:`${y}-column`},r.createElement("div",{className:`${y}-item-height-measure`,ref:N}),r.createElement(ce.div,{ref:d,style:{translateY:u},className:`${y}-column-wheel`,"aria-hidden":!0},a.map((s,h)=>{var A;const _=t.value===s.value;_&&(E=h);function C(){l.current=!1,k(h)}return r.createElement("div",{key:(A=s.key)!==null&&A!==void 0?A:s.value,"data-selected":_,className:O(`${y}-column-item`,{[`${y}-column-item-active`]:_}),onClick:C,"aria-hidden":!_,"aria-label":_?"active":""},r.createElement("div",{className:`${y}-column-item-label`},v(s)))})),f())},(t,e)=>!(t.index!==e.index||t.value!==e.value||t.onSelect!==e.onSelect||t.renderLabel!==e.renderLabel||t.mouseWheel!==e.mouseWheel||!be(t.column,e.column)));q.displayName="Wheel";function $(t){let e=null;return()=>(e===null&&(e=t()),e)}function H(t,e){const a=$(()=>(typeof t=="function"?t(e):t).map(o=>o.map(l=>typeof l=="string"?{label:l,value:l}:l))),v=$(()=>e.map((u,o)=>{var l;const d=a()[o];return d&&(l=d.find(N=>N.value===u))!==null&&l!==void 0?l:null}));return{get columns(){return a()},get items(){return v()}}}function Y(t,e){return i.useMemo(()=>H(t,e),[t,e])}const Z=t=>t.label,P="adm-picker-view",Se={defaultValue:[],renderLabel:Z,mouseWheel:!1,loadingContent:r.createElement("div",{className:`${P}-loading-content`},r.createElement(ue,null))},X=i.memo(t=>{const e=U(Se,t),[a,v]=i.useState(e.value===void 0?e.defaultValue:e.value);i.useEffect(()=>{e.value!==void 0&&e.value!==a&&v(e.value)},[e.value]),i.useEffect(()=>{if(e.value===a)return;const l=window.setTimeout(()=>{e.value!==void 0&&e.value!==a&&v(e.value)},1e3);return()=>{window.clearTimeout(l)}},[e.value,a]);const n=Y(e.columns,a),u=n.columns;Ie(()=>{var l;e.value!==a&&((l=e.onChange)===null||l===void 0||l.call(e,a,n))},[a],{wait:0,leading:!1,trailing:!0});const o=i.useCallback((l,d)=>{v(N=>{const b=[...N];return b[d]=l,b})},[]);return T(e,r.createElement("div",{className:`${P}`},e.loading?e.loadingContent:r.createElement(r.Fragment,null,u.map((l,d)=>r.createElement(q,{key:d,index:d,column:l,value:a[d],onSelect:o,renderLabel:e.renderLabel,mouseWheel:e.mouseWheel})),r.createElement("div",{className:`${P}-mask`},r.createElement("div",{className:`${P}-mask-top`}),r.createElement("div",{className:`${P}-mask-middle`}),r.createElement("div",{className:`${P}-mask-bottom`})))))});X.displayName="PickerView";const j="adm-picker",Pe={defaultValue:[],closeOnMaskClick:!0,renderLabel:Z,destroyOnClose:!1,forceRender:!1},M=i.memo(i.forwardRef((t,e)=>{var a;const{locale:v}=de(),n=U(Pe,{confirmText:v.common.confirm,cancelText:v.common.cancel},t),[u,o]=Q({value:n.visible,defaultValue:!1,onChange:f=>{var s;f===!1&&((s=n.onClose)===null||s===void 0||s.call(n))}}),l={toggle:()=>{o(f=>!f)},open:()=>{o(!0)},close:()=>{o(!1)}};i.useImperativeHandle(e,()=>l);const[d,N]=Q(Object.assign(Object.assign({},n),{onChange:f=>{var s;const h=H(n.columns,f);(s=n.onConfirm)===null||s===void 0||s.call(n,f,h)}})),b=Y(n.columns,d),[k,I]=i.useState(d);i.useEffect(()=>{k!==d&&I(d)},[u]),i.useEffect(()=>{u||I(d)},[d]);const g=_e((f,s)=>{var h;I(f),u&&((h=n.onSelect)===null||h===void 0||h.call(n,f,s))}),p=T(n,r.createElement("div",{className:j},r.createElement("div",{className:`${j}-header`},r.createElement("a",{role:"button",className:`${j}-header-button`,onClick:()=>{var f;(f=n.onCancel)===null||f===void 0||f.call(n),o(!1)}},n.cancelText),r.createElement("div",{className:`${j}-header-title`},n.title),r.createElement("a",{role:"button",className:O(`${j}-header-button`,n.loading&&`${j}-header-button-disabled`),onClick:()=>{n.loading||(N(k,!0),o(!1))},"aria-disabled":n.loading},n.confirmText)),r.createElement("div",{className:`${j}-body`},r.createElement(X,{loading:n.loading,loadingContent:n.loadingContent,columns:n.columns,renderLabel:n.renderLabel,value:k,mouseWheel:n.mouseWheel,onChange:g})))),E=r.createElement(Ee,{style:n.popupStyle,className:O(`${j}-popup`,n.popupClassName),visible:u,position:"bottom",onMaskClick:()=>{var f;n.closeOnMaskClick&&((f=n.onCancel)===null||f===void 0||f.call(n),o(!1))},getContainer:n.getContainer,destroyOnClose:n.destroyOnClose,afterShow:n.afterShow,afterClose:n.afterClose,onClick:n.onClick,forceRender:n.forceRender,stopPropagation:n.stopPropagation},p,r.createElement(je,{position:"bottom"}));return r.createElement(r.Fragment,null,E,(a=n.children)===null||a===void 0?void 0:a.call(n,b.items,l))}));M.displayName="Picker";function Fe(t){return new Promise(e=>{const a=()=>{const[n,u]=i.useState(!1);return i.useEffect(()=>{u(!0)},[]),r.createElement(M,Object.assign({},t,{visible:n,onConfirm:(o,l)=>{var d;(d=t.onConfirm)===null||d===void 0||d.call(t,o,l),e(o)},onClose:()=>{var o;(o=t.onClose)===null||o===void 0||o.call(t),u(!1),e(null)},afterClose:()=>{var o;(o=t.afterClose)===null||o===void 0||o.call(t),v()}}))},v=me(r.createElement(a,null))})}const we=fe(M,{prompt:Fe}),Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJ4SURBVFiF7VdBaxNBFP7ezNoVkQpRGliEUkFsT56EXvwD/gBBxINES0pCaEEE8ZBBxEIVxNzS7d2THjwIngSP5qYeRHuwiqYHCUoLcbKT9zyYQBu7pbO1gpIPFobHe99+896bfbPAEFtBWYJqtdpoEAQnlVJb4rXWopR6VygU1n05lW+AiFAYho+01g0iern5YeaGc+6xiHhvMPAN6OE9gMntdBLRShZCbyFEJMaYMoC5FBdHROLNO2hYWlo6IyIFANqXbJdgIlqemZlpbDZul5FrAM7vkwgAgIiMAriwo5AkSW5qrV8T0QkAlwF8F5EHIuKd7u2glOpqrR8O2lO7O47js8z8AsDHZrM5YYzhPyEkDVlPjRfiOD7e7XZPra2tPU/bkPd3JAOImZ8Q0bN8Pn86zWnfhRhjCMBRADoIgsNpfplKE8fxOWaeajab9/upNsaoKIrmmPltsVh86svpnRFjjGLmBQCLURRN9+1RFE2LyF0iumOM8ebNVBoRCQGQc+5Q39Zbk4gczML5N5p1VxgKGcRQyCD+PyFKqT1NZ28h1WpViOgNgC+br4XOuRUAn4noVbVa9RblLYSIxFp70Tk3OTs7+6FvL5fLq865KWvtpSxXxUyzplKpWAB20F4qlTay8AH/QrMmSZL0lkEulzuwh3eMoJd5Zu6kOaWWRmu9CmBdRMbCMLxSq9WWW62WV+3Hx8eVtfYqgDEAG0EQfErz3emPjOr1+m0ANwAIgK8AUneUghEAx/BrKi8Wi8U+12/YqVnFWnsrDMMfAK73CT2FCIA2gIVOp3MvTQR2S1yv148Q0QQz+56ypN1ur87Pz3/zjBsCPwHyqeqLWwIl6gAAAABJRU5ErkJggg==",Le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAQcSURBVGiB5VrNaiJLFP6qq7vBQMCLK4VAhSyErBRUcHUzTzCZJ5iZJ7jJEyR5g+QJbvIEmfsE46yEKOguIMgtEBQEmV656LL63IXdjn9j7Lb9CffbaFfXqfo+z6nfI0MMaDQaSa31R8ZYjogEgJz/SvifDgAJwGGMNYnoh1KqWS6X5aZ9s6iGPunPAC4BXERspuJ53pPWuhJVTGgBjUYjORqNrhhjfwFIRul0KRHGHl3XvQsrJJSAWq12GzfxOThE9FAsFm/XNVhLQLVaFZZlPeNXbG8bUin1YR1vGG9VeHl5+WJZVgO7Iw8AwrKsRr1ev3yr4koBtVrtyjCMv7G9kFmFJIDnWq12u6rSb0PIj/ebuFlFARFdF4vF+2XvlgrwXfe8VVYh4Xne11Kp9DhfviDAH7AN7CdsVsFRSuXnB/bCGLAs6zsOjzwAJP2ZcAYzAvwBI3ZEKApy84N6EkIHHDrzcDjnp/l83gGmPGDb9g0OnzwAJEej0VXwwIDJr//v/jiFxsQLBgBwzi/2TCgsgp3wOIQMw/i8Xz6RcAkA7B2GzwSc8z8My7J2uUmLFVrrjyZj7E8iCmV4dnYG27bRbrfhuu5GJGzbhhACWmu02+1QtoyxnEFEoT3AOcfR0RGy2Sxs2w5rPoFt28hmszg+Po7UDhEJAxHmfiklhsPhhECUzqdth8MhWq1W6DYA5AxE2Dq4rotWqzUjIpFIrG2fSCQWyGutw9IAMJ5GI62+Wmu8vr5iMBiEEjFNfjAYbEQegHjzSPkWpJTo9/vgnOP8/BypVOq3dVOpFLLZLDjnGAwGkFJuQh7A2ANyoxYAdDod9Ho9AIAQYqmIVCoFIQQ45+j1epBy424BwNnYAwG63e6MiEwmM3mXyWQghAAA9Ho9dLvduLqVJoAmYjoDBMTS6TTS6fSkPPgeM3kAcEzGmAy7kK1Ct9vFaDTCycnJjIhOp4N+vx9bPwDAGGsaRNSMtVUA/X5/JsaDgR43iOgH8y9pf8beOsaLlWmaGA6H22geSqlTwz+aVbbRgeu6WyMPoFIul2UwC33bVi/bgud5T4B/oOGcP2GchHg30FpXAF9APp93iOhhr4xCgDH2GFxwTRYy0zTv8T684Liuexc8TAS8Fy8Q0cP09eLC3Wi9Xt91LiAMZKFQOJ0uWNgLKaU+4TBDyVFKfZgvXBBQLpel53nXu+EUCl+XpZyW7kZLpdIjER2MCCK6KxQKS9eqlUm+Q8jSrMrOAGtkKf1szT7yZI7nedfLsjLTCJNm/Y7d5Q6aSqlP66RZ/x+J7mlUq1Vh2/YNEX0Ja7sCDhE9mKZ5HyQu1kXkP3tUq1XBOb/wb7YvIjZTAfCNc/4UlniAyAKm4Y+RnH/PmsM4xAR+hZr0P5v+EbbJOf8nKulp/AdPmMnqQyxccQAAAABJRU5ErkJggg==",Oe="_container_1kp6a_4",We="_search_1kp6a_10",Be="_clearable_1kp6a_16",Te="_input_1kp6a_22",Me="_type_1kp6a_34",Qe="_typeText_1kp6a_39",De="_icon_1kp6a_43",Ge="_searchInput_1kp6a_46",Je="_line_1kp6a_51",$e="_searchBtn_1kp6a_56",ze="_content_1kp6a_61",Ue="_record_1kp6a_67",qe="_recordLeft_1kp6a_73",He="_recordRight_1kp6a_78",Ye="_deleteIcon_1kp6a_78",Ze="_recordList_1kp6a_87",Xe="_recordItem_1kp6a_91",Ke="_closeIcon_1kp6a_106",et="_moreImg_1kp6a_114",tt="_hot_1kp6a_119",nt="_hotTitle_1kp6a_119",at="_hotList_1kp6a_126",lt="_hotItem_1kp6a_129",st="_hotoRder_1kp6a_134",ot="_hotoText_1kp6a_135",rt="_hotoLabel_1kp6a_136",ct="_merchant_1kp6a_152",it="_product_1kp6a_153",ut="_badge_1kp6a_165",dt="_marginAuto_1kp6a_168",m={container:Oe,search:We,clearable:Be,input:Te,type:Me,typeText:Qe,icon:De,searchInput:Ge,line:Je,searchBtn:$e,content:ze,record:Ue,recordLeft:qe,recordRight:He,deleteIcon:Ye,recordList:Ze,recordItem:Xe,closeIcon:Ke,moreImg:et,hot:tt,hotTitle:nt,hotList:at,hotItem:lt,hotoRder:st,hotoText:ot,hotoLabel:rt,merchant:ct,product:it,badge:ut,marginAuto:dt},R=[[{label:"展商",value:"/range"},{label:"展品",value:"/product"}]],x=["汽车部件","摩托车零配件","汽车","汽ololo","上海","青岛","深圳","宁波"],vt=()=>{const t=he();i.useState({});const[e,a]=i.useState({type:[],value:""}),[v,n]=i.useState("展商"),[u,o]=i.useState(!1),[l,d]=i.useState([]);i.useEffect(()=>{var g,p,E,f;n((p=(g=R==null?void 0:R[0])==null?void 0:g[0])==null?void 0:p.label),a({type:[(f=(E=R==null?void 0:R[0])==null?void 0:E[0])==null?void 0:f.value],value:""})},[R]),i.useEffect(()=>{d(x==null?void 0:x.map((g,p)=>({id:p+1,name:g})))},[]);const N=()=>{t(`${e.type[0]}?name=${e.value}`)},b=g=>{t(`${e.type[0]}?name=${g}`)},k=g=>{const p=l.filter(E=>E.id!==g);d(p)},I=()=>{d([])};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:m.container,children:[c.jsxs("div",{className:m.search,children:[c.jsx("div",{className:m.clearable,children:"取消"}),c.jsxs("div",{className:m.input,children:[c.jsxs("div",{className:m.type,onClick:()=>o(!0),children:[c.jsx("span",{className:m.typeText,children:v}),c.jsx(Ce,{className:m.icon})]}),c.jsx(Ne,{className:m.searchInput,placeholder:"请输入内容",value:e.value,onChange:g=>a({...e,value:g}),onEnterPress:N,clearable:!0}),c.jsx("div",{className:`${m.line} -bg`}),c.jsx("div",{className:`${m.searchBtn} -color`,onClick:N,children:"搜索"})]})]}),c.jsxs("div",{className:m.content,children:[c.jsxs("div",{className:m.record,children:[c.jsx("div",{className:m.recordLeft,children:"搜索记录"}),c.jsx("div",{className:m.recordRight,children:c.jsx("img",{src:Ve,alt:"",onClick:I})})]}),c.jsxs("div",{className:m.recordList,children:[l&&(l==null?void 0:l.length)>0&&(l==null?void 0:l.map((g,p)=>c.jsxs("div",{className:m.recordItem,children:[c.jsx("span",{onClick:()=>b(g.name),children:g.name}),c.jsx(ke,{className:m.closeIcon,onClick:()=>k(g.id)})]},g.id))),(l==null?void 0:l.length)>0&&c.jsx("img",{src:Le,alt:"",className:m.moreImg})]}),c.jsxs("div",{className:m.hot,children:[c.jsx("div",{className:m.hotTitle,children:"热门搜索"}),c.jsx("div",{className:m.hotList,children:x&&(x==null?void 0:x.length)>0&&(x==null?void 0:x.map((g,p)=>c.jsxs("div",{className:m.hotItem,children:[c.jsx("div",{className:m.hotoRder,children:p+1}),c.jsx("div",{className:m.hotoText,children:"宁波圣龙汽车动力系统股份有限公司"}),c.jsx("div",{className:m.hotoLabel,children:p%2===0?c.jsx("div",{className:m.merchant,children:"商"}):c.jsx("div",{className:m.product,children:"品"})})]},p)))})]})]})]}),c.jsx(we,{columns:R,visible:u,onClose:()=>{o(!1)},value:e.type,onConfirm:(g,p)=>{var E,f;a({...e,type:g}),n((f=(E=p==null?void 0:p.items)==null?void 0:E[0])==null?void 0:f.label)}})]})};export{R as basicColumns,vt as default};
