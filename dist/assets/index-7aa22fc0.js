import{j as e,af as hs,r as f,am as p,aD as F,al as C,aE as Fe,aF as js,az as se,aG as ps,aH as ms,aI as fs,aJ as gs,aK as bs}from"./vendor-b3c2ed37.js";import{W as _e,q as ys}from"./vendor_react-helmet-async-cbe6ee96.js";import{u as $,a as fe,P as Ss}from"./vendor_react-redux-0b236f38.js";import{L as ue,c as vs}from"./vendor_react-router-dom-ed3b9d4c.js";import{p as Cs,a as As,d as Ts,P as Ds}from"./vendor_redux-persist-9b4192bf.js";import{S as H,a as xe,A as z,s as Ie,b as Is,t as Pe,c as ie,d as Ps,e as ke,f as Ee,g as we,I as _,B as v,M as ks,h as b,i as u,G as D,j as q,C as te,D as V,L as U,k as W,l as ne,m as A,n as Ue,o as Es,p as Re,q as ws,v as Rs,w as Os,x as Ns,y as Z,z as ge,E as X,F as K,H as G,J as Be,K as re,N as Ls,O as qs,P as Fs,Q as _s,R as Us,U as le,V as ze,W as Me,X as be,Y as $e,Z as He,_ as Bs,$ as Ve,a0 as zs,a1 as Ms,a2 as ye,a3 as Se,a4 as ve,a5 as Q,a6 as Ce,a7 as Oe,a8 as $s,a9 as Hs}from"./vendor_@mui/material-8acae2f8.js";import{c as Vs}from"./vendor_@reduxjs/toolkit-d6f233c5.js";import{d as Ws,a as We,b as Zs,c as he,e as Ae,f as Ks,g as Gs,h as Js,i as Qs,j as Xs,k as Ys,l as et,m as st}from"./vendor_@mui/icons-material-3d8ec33b.js";import{a as g}from"./vendor_axios-4a70c6fc.js";import{T as tt,a as nt,b as ce}from"./vendor_@mui/lab-4eb5084c.js";import{C as ae,u as Ze}from"./vendor_react-hook-form-feb08991.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const Ke="ADD_SNACKBAR",Ge="REMOVE_SNACKBAR",M=(s,t,n)=>{const a=new Date().getTime().toString();return{type:Ke,payload:{id:a,message:s,severity:t,duration:n}}},rt=s=>({type:Ge,payload:{id:s}});function at(s){return e.jsx(z,{elevation:6,variant:"filled",...s})}function ot(){const{snackbars:s}=$(a=>a.snackbar),t=fe(),n=(a,i)=>{i!=="clickaway"&&t(rt(a))};return e.jsx(H,{className:"position-default",children:s.map(a=>e.jsx(xe,{open:a.open,autoHideDuration:a.duration,onClose:(i,r)=>n(a.id,r),children:e.jsx("div",{children:e.jsx(at,{onClose:()=>n(a.id),severity:a.severity,children:a.message})})},a.id))})}const it={snackbars:[]},lt=(s=it,t)=>{switch(t.type){case Ke:return{...s,snackbars:[...s.snackbars,{...t.payload,open:!0}]};case Ge:return{...s,snackbars:s.snackbars.filter(n=>n.id!==t.payload.id)};default:return s}},ct="AUTHORIZE",Je="UNAUTHORIZE",Qe="SET_USER",Xe="SET_TOKEN",dt=()=>({type:Je}),ut=(s,t="")=>({type:Qe,payload:{user:s,token:t}}),xt=s=>({type:Xe,payload:{token:s}}),Ne={auth:!1,token:"",user:{}},ht=(s=Ne,t)=>{switch(t.type){case ct:return{...s,auth:!0};case Je:return{...Ne};case Qe:return{...s,auth:!0,user:{...t.payload.user},token:t.payload.token};case Xe:return{...s,token:t.payload.token};default:return s}},jt={key:"root",version:1,storage:Ts},pt=hs({snackbar:lt,session:ht}),mt=Cs(jt,pt),I=Vs({reducer:mt,middleware:s=>s({serializableCheck:!1})}),ft=As(I);I.subscribe(()=>{console.log(I.getState())});const w={ALL:"ALL_ROLES",ADMINISTRADOR:"ADMIN",MENSAJERO:"COURIER",CLIENTE:"CLIENT"};function Ye(s){const[t,n]=f.useState(s.datos),a="USTED NO HA REALIZADO PEDIDOS TODAVÍA",i="USTED NO HA REGISTRADO SUCURSALES TODAVÍA",r=Ie(Is)(({theme:o})=>({[`&.${Pe.head}`]:{backgroundColor:o.palette.primary.dark,color:o.palette.common.white},[`&.${Pe.body}`]:{fontSize:13}})),c=Ie(ie)(({theme:o})=>({"&:nth-of-type(odd)":{backgroundColor:o.palette.action.hover}})),l=(o,x)=>{o=="editar"?(s.setTypeModal("editar"),s.setOpen(!0),s.setValores({nit:x.nit,name:x.name,address:x.address,phone:x.phone})):o=="eliminar"&&(s.setTypeModal("eliminar"),s.setOpen(!0),s.setValores({nit:x.nit}))};return e.jsx(Ps,{sx:{maxHeight:600},children:s.tipo=="historial"?e.jsxs(ke,{stickyHeader:!0,"aria-label":"customized table",size:"small",children:[e.jsx(Ee,{children:e.jsxs(ie,{children:[e.jsx(r,{align:"center",children:"Fecha Solicitud"}),e.jsx(r,{align:"center",children:"Número Paquetes"}),e.jsx(r,{align:"center",children:"Descripción"}),e.jsx(r,{align:"center",children:"Dirección De Entrega"}),e.jsx(r,{align:"center",children:"Mensajero"})]})}),e.jsx(we,{children:t!==null?t.map(o=>e.jsxs(c,{children:[e.jsx(r,{component:"th",scope:"row","data-titulo":"Fecha Solicitud",align:"center",size:"medium",children:o.fecha}),e.jsx(r,{"data-titulo":"Número De Paquetes",align:"center",children:o.paquetes}),e.jsx(r,{"data-titulo":"Descripción",align:"center",children:o.descripcion}),e.jsx(r,{"data-titulo":"Destino",align:"center",children:o.direccion}),e.jsx(r,{"data-titulo":"Mensajero",align:"center",children:o.mensajero})]},o.fecha)):e.jsxs(c,{children:[e.jsx(r,{component:"th",scope:"row","data-titulo":"Fecha Solicitud",align:"center",children:t==null&alert(a)}),e.jsx(r,{"data-titulo":"Número De Paquetes",align:"center",children:" "}),e.jsx(r,{"data-titulo":"Descripción",align:"center",children:" "}),e.jsx(r,{"data-titulo":"Destino",align:"center",children:" "}),e.jsx(r,{"data-titulo":"Mensajero",align:"center",children:" "})]},"null")})]}):e.jsxs(ke,{stickyHeader:!0,"aria-label":"customized table",size:"small",children:[e.jsx(Ee,{children:e.jsxs(ie,{children:[e.jsx(r,{align:"center",children:"Nit"}),e.jsx(r,{align:"center",children:"Nombre"}),e.jsx(r,{align:"center",children:"Dirección"}),e.jsx(r,{align:"center",children:"Teléfono"}),e.jsx(r,{align:"center",children:"Opciones"})]})}),e.jsx(we,{children:t!==null?t.map(o=>e.jsxs(c,{children:[e.jsx(r,{component:"th",scope:"row","data-title":"Nit",align:"center",children:o.nit}),e.jsx(r,{"data-title":"Nombre",align:"center",children:o.name}),e.jsx(r,{"data-title":"Dirección",align:"center",children:o.address}),e.jsx(r,{"data-title":"Teléfono",align:"center",children:o.phone}),e.jsxs(r,{"data-title":"Opciones",align:"center",children:[e.jsx(_,{onClick:()=>l("editar",o),"aria-label":"edit",children:e.jsx(Ws,{})}),e.jsx(_,{onClick:()=>l("eliminar",o),"aria-label":"delete",children:e.jsx(We,{})})]})]},o.nit)):e.jsxs(c,{children:[e.jsx(r,{component:"th",scope:"row","data-titulo":"Nit",align:"center",size:"medium",children:t==null&alert(i)}),e.jsx(r,{"data-titulo":"Nombre",align:"center",children:" "}),e.jsx(r,{"data-titulo":"Dirección",align:"center",children:" "}),e.jsx(r,{"data-titulo":"Teléfono",align:"center",children:" "}),e.jsx(r,{"data-titulo":"Opciones",align:"center",children:" "})]},"null")})]})})}function gt(s){if(s.status===200){const t=s.headers;t.has("x-message")&&I.dispatch(M(t.get("x-message"),"success",6e3)),t.has("x-authorization")&&I.dispatch(xt(t.get("new-authorization")))}return s}function bt(s){const t=s.response.headers;if(t.has("x-message")&&I.dispatch(M(t.get("x-message"),"error",6e3)),t.has("x-code"))switch(t.get("x-code")){case"INVALID:TOKEN":location.href="/logout";break;case"UNAUTHORIZED":location.href="/dashboard";break}return Promise.reject(s)}function yt(s){const t=I.getState().session.token;return s.headers.Authorization!==t&&(s.headers.Authorization=`${t}`),s}g.defaults.baseURL="/api/v1/";g.defaults.withCredentials=!0;g.interceptors.request.use(s=>yt(s));g.interceptors.response.use(s=>gt(s),s=>bt(s));function St(s){return g.post("login",s)}function vt(){return g.get("user/profile")}function Ct(s){return g.post("user/profile",s)}function At(){return g.get("request")}function Tt(s){return g.post("request",s)}function Dt(s){return g.get("general/cities/"+s)}function It(){return g.get("general/states/")}function Pt(){return g.get("general/transport/")}function kt(s){return g.get(`/delegates/${s}`)}function Et(s){return g.get(`/branches/${s}`)}function wt(s){return g.post("/branches/crear",s)}function Rt(s){return g.put("/branches/modifica",s)}function Ot(s){return g.delete(`/branches/elimina/${s}`)}function Nt(){return g.get("/request/inProgress")}function Lt(){return g.get("/request/onWay")}function qt(){return g.get("/request/finished")}function Ft(s){return g.post("/request/updateStatus1",{code:s})}function _t(s){return g.post("/imgFileF",s)}function Ut(s){return g.post("/imgFileS",s)}function Bt(){return g.get("user/allcouriers")}function zt(){return g.get("request/inProgress")}const O=(s,t=[])=>{const[n,a]=f.useState(null),[i,r]=f.useState(!0);return f.useEffect(()=>((async()=>{const{status:l,data:o}=await s();l===200&&(a(o),r(!1))})(),()=>{a(null),r(!0)}),t),[n,i]};function Mt(){const[s,t]=f.useState(!1),[n,a]=f.useState(""),i="sucursales",r=I.getState().session.user.phone,[c,l]=f.useState(!1),[o,x]=f.useState(!1),[j,d]=f.useState([!1]),[S,P]=O(()=>Et(r),j),[h,L]=f.useState({nit:"",name:"",address:"",phone:""}),[m,T]=f.useState({nit:!1,name:!1,address:!1,phone:!1}),N=()=>l(!1),ee=()=>x(!1),oe=R=>{R=="añadir"?(a("añadir"),t(!0),d([!1])):R=="editar"?(a("editar"),t(!0),d([!1])):R=="eliminar"&&(a("eliminar"),t(!0),d([!1]))},k=()=>{t(!1),L(""),T({nit:!1,name:!1,address:!1,phone:!1})},B=R=>{L({...h,[R.target.name]:R.target.value}),T({nit:!1,name:!1,address:!1,phone:!1})},y=R=>{R.preventDefault(),console.log("esto es valida",m),n=="eliminar"?Ot(h.nit)?(k(),l(!0),d([!0])):(k(),x(!0)):h.nit==""&&h.name==""&&h.address==""&&h.phone==""?T({nit:!0,name:!0,address:!0,phone:!0}):h.nit==""?T({...m,nit:!0}):h.name==""?T({...m,name:!0}):h.address==""?T({...m,address:!0}):h.phone==""?T({...m,phone:!0}):(T({nit:!1,name:!1,address:!1,phone:!1}),n=="añadir"?(L({...h,customerId:S[0].customerId}),wt(h)?(k(),l(!0),d([!0])):(k(),x(!0))):n=="editar"&&(Rt(h)?(k(),l(!0),d([!0])):(k(),x(!0))))},E={position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"background.paper",boxShadow:24,flexGrow:1,padding:4};return e.jsxs("div",{id:"panel",children:[e.jsxs(H,{spacing:2,sx:{width:"100%"},children:[e.jsx(xe,{open:c,autoHideDuration:6e3,onClose:N,children:e.jsx(z,{onClose:N,severity:"success",sx:{width:"100%"},children:"¡Todo Ha Sido Exitoso!"})}),e.jsx(xe,{open:o,autoHideDuration:6e3,onClose:ee,children:e.jsx(z,{onClose:ee,severity:"error",sx:{width:"100%"},children:"¡Ha Ocurrido Un Error, Intentalo Más Tarde!"})})]}),e.jsx("div",{id:"btn",children:e.jsx(v,{id:"miboton",onClick:()=>oe("añadir"),variant:"outlined",size:"large",children:"CREAR SUCURSAL"})}),e.jsx(ks,{disableEscapeKeyDown:!0,hideBackdrop:!0,open:s,onClose:k,"aria-labelledby":"Ventana Modal",children:e.jsxs(b,{sx:E,children:[e.jsx(u,{id:"tituloModal",align:"center",variant:"h6",component:"h2",children:n=="añadir"?"Crea Una Nueva Sucursal":n=="editar"?"Modifica La Sucursal":n=="eliminar"&&"¿Desea Eliminar La Sucursal?"}),n==""||n=="añadir"||n=="editar"?e.jsxs(D,{container:!0,spacing:1,justifySelf:"center",children:[n=="añadir"&&e.jsxs(D,{item:!0,xs:12,children:[e.jsx(q,{variant:"outlined",margin:"normal",label:"Nit",name:"nit",type:"text",defaultValue:h.nit,onChange:B,size:"small",autoComplete:"off",fullWidth:!0}),m.nit!==!1&&e.jsx("span",{children:"Digite el nit de la sucursal"})]}),e.jsxs(D,{item:!0,xs:12,children:[e.jsx(q,{variant:"outlined",margin:"normal",label:"Nombre",name:"name",type:"text",defaultValue:h.name,onChange:B,size:"small",autoComplete:"off",fullWidth:!0}),m.name!==!1&&e.jsx("span",{children:"Digite el nombre de la sucursal"})]}),e.jsxs(D,{item:!0,xs:12,children:[e.jsx(q,{variant:"outlined",margin:"normal",label:"Dirección",name:"address",type:"text",defaultValue:h.address,onChange:B,size:"small",autoComplete:"off",fullWidth:!0}),m.address!==!1&&e.jsx("span",{children:"Digite la dirección de la sucursal"})]}),e.jsxs(D,{item:!0,xs:12,children:[e.jsx(q,{variant:"outlined",margin:"normal",label:"Teléfono",name:"phone",type:"number",defaultValue:h.phone,onChange:B,size:"small",autoComplete:"off",fullWidth:!0}),m.phone!==!1&&e.jsx("span",{children:"Digite el teléfono de la sucursal"})]}),e.jsxs("div",{id:"btns",children:[e.jsx(v,{id:"aceptar",onClick:y,children:"Aceptar"}),e.jsx(v,{id:"cancelar",onClick:k,children:"Cancelar"})]})]}):e.jsxs(D,{container:!0,spacing:1,justifySelf:"center",children:[e.jsxs(u,{id:"descripcion",align:"center",variant:"h6",component:"h2",children:["Se eliminará la sucursal identificada con el nit: ",h.nit]}),e.jsxs("div",{id:"btns",children:[e.jsx(v,{id:"aceptar",onClick:y,children:"Aceptar"}),e.jsx(v,{id:"cancelar",onClick:k,children:"Cancelar"})]})]})]})}),P?e.jsx("div",{id:"tabla",children:e.jsx(b,{sx:{display:"flex"},children:e.jsx(te,{})})}):e.jsx("div",{id:"tabla",children:e.jsx(Ye,{datos:S,tipo:i,setValores:L,setTypeModal:a,setOpen:t})})]})}function es(){const{user:{role:s}}=$(t=>t.session);return s}function ss(s){const{children:t,window:n}=s,a=Os({target:n?n():void 0});return e.jsx(Ns,{appear:!1,direction:"down",in:!a,children:t})}ss.propTypes={children:p.element.isRequired,window:p.func};const $t=240;function J(s){const t=es(),{window:n,children:a}=s,{ADMINISTRADOR:i,ALL:r}=w,[c,l]=f.useState(!1),o=()=>{l(d=>!d)},x=e.jsxs(b,{onClick:o,sx:{textAlign:"center"},children:[e.jsx(u,{variant:"h6",sx:{my:2},children:"MUI"}),e.jsx(V,{}),e.jsx(U,{children:me.map(d=>d.label&&(t==r||t==i||t==d.role)?e.jsx(W,{component:ue,to:d.path,disablePadding:!0,children:e.jsx(ne,{sx:{textAlign:"center"},children:e.jsx(A,{primary:d.label})})},d.path):null)})]}),j=n!==void 0?()=>n().document.body:void 0;return e.jsxs(f.Fragment,{children:[e.jsx(Ue,{}),e.jsx(ss,{...s,children:e.jsx(Es,{component:"nav",children:e.jsxs(Re,{children:[e.jsx(_,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:o,sx:{mr:2,display:{sm:"none"}},children:e.jsx(Zs,{})}),e.jsx(u,{variant:"h6",component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"},textAlign:"left"},children:"CourierHub"}),e.jsx(b,{sx:{display:{xs:"none",sm:"block"}},children:me.map(d=>d.label&&(d.role==r||t==i||t==d.role)?e.jsx(v,{component:ue,to:d.path,sx:{color:"#fff"},children:d.label},d.path):null)})]})})}),e.jsx(b,{component:"nav",children:e.jsx(ws,{container:j,variant:"temporary",open:c,onClose:o,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:$t}},children:x})}),e.jsx(Re,{}),e.jsx(Rs,{sx:{p:"0px 8px !important"},children:a})]})}J.propTypes={window:p.func,children:p.node};function Ht(){const{auth:s}=$(t=>t.session);return s?e.jsx("div",{className:"contenedorPpal",children:e.jsx(J,{children:e.jsx(Mt,{})})}):e.jsx(F,{to:"/dashboard"})}function Vt(){const[s,t]=C.useState(!1),[n,a]=C.useState(!1),[i,r]=C.useState(!1),[c,l]=O(Nt,[i]),[o,x]=C.useState(),[j,d]=C.useState(""),S=m=>{x(m),t(!0)},P=()=>{r(m=>!m),t(!1),d("")},h=async m=>{t(!1),console.log(m),await Ft(m),await Ut(j),a(!0),r(T=>!T)},L=(m,T)=>{console.log(T);const N=new FormData;N.append("file",m),N.append("code",T),d(N),console.log(N)};return e.jsxs(D,{container:!0,columns:1,justifyContent:"center",children:[e.jsxs(D,{item:!0,xs:1,children:[n===!0&&e.jsx(z,{severity:"success",action:e.jsx(_,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{a(!1)},children:e.jsx(he,{fontSize:"inherit"})}),sx:{mb:2},children:"se acepto exitosamente el pedido"}),e.jsx(u,{variant:"h6",color:"inherit",component:"div",children:"Pedidos Disponibles"})]}),e.jsxs(D,{item:!0,xs:1,children:[e.jsx(U,{sx:{width:"100%",bgcolor:"background.paper",overflow:"auto"},children:l?e.jsx(Z,{variant:"text",sx:{fontSize:"1rem"}}):c.map(m=>e.jsxs(b,{children:[e.jsxs(ne,{onClick:()=>S(m),children:[e.jsx(ge,{children:e.jsx(Ae,{})}),e.jsx(A,{children:e.jsxs(f.Fragment,{children:[e.jsx(u,{children:"Pedido: "+m.code}),e.jsx(u,{children:"Recoger en: "+m.origin}),e.jsx(u,{children:"transportar en: "+m.Transports[0].nameTransport})]})})]}),e.jsx(V,{})]},m.code))}),o&&e.jsxs(X,{open:s,onClose:P,"aria-labelledby":"alert-dialog-title",children:[e.jsx(K,{id:"alert-dialog-title",children:"Pedido "+o.code}),e.jsxs(G,{children:[e.jsx(u,{children:"Recoger en: "+o.origin}),e.jsx(u,{children:"Destino: "+o.destination}),e.jsx(u,{children:"Nombre cliente: "+o.Users[0].firstname+" "+o.Users[0].lastname}),e.jsx(u,{children:"  Telefono de contacto: "+o.Users[0].phone}),e.jsx(u,{children:"  Descripcion: "+o.description}),e.jsx(u,{children:"transportar en: "+o.Transports[0].nameTransport}),e.jsx(u,{children:"  Cantidad: "+o.numberPackages}),e.jsx(b,{children:e.jsx(Be,{sx:{mt:1,mr:1},type:"file",variant:"outlined",name:"file",onChange:m=>L(m.target.files[0],o.ListStates[0].id)})})]}),e.jsxs(re,{children:[e.jsx(v,{onClick:P,children:"Cancelar"}),e.jsx(v,{disabled:j=="",onClick:()=>h(o.code),autoFocus:!0,children:"Aceptar"})]})]})]})]})}const de=[{label:"Pedido en recorrido",description:"Estas en Camino, solo da en continuar cuando llegues al destino",foto:"no"},{label:"Entrega realizada",description:"Coloca la foto que muestra que el pedido llego al destino",foto:"si"}];function Wt(){const[s,t]=C.useState(!1),[n,a]=C.useState(!1),[i,r]=C.useState(!1);C.useState(!1);const[c,l]=C.useState(0),[o,x]=C.useState(""),[j,d]=C.useState(!1),[S,P]=O(Lt,[j]),[h,L]=C.useState(),m=new FormData,T=y=>{L(y),t(!0)},N=()=>{t(!1),l(0)},ee=y=>{o==""&&c>0&&r(!0),o!=""?(m.append("file",o),m.append("code",y),console.log(S),console.log(m),_t(m),l(E=>E+1)):(console.log(S),console.log(h),l(E=>E+1))},oe=()=>{l(y=>y-1)},k=y=>{x(y)},B=y=>{a(!0),d(!0),t(!1),l(0)};return e.jsxs(D,{container:!0,columns:1,justifyContent:"center",children:[e.jsxs(D,{item:!0,xs:1,children:[n===!0&&e.jsx(z,{severity:"success",action:e.jsx(_,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{a(!1)},children:e.jsx(he,{fontSize:"inherit"})}),sx:{mb:2},children:"se completo exitosamente la entrega del pedido"}),e.jsx(u,{variant:"h6",color:"inherit",component:"div",children:"Encargos en proceso"})]}),e.jsxs(D,{item:!0,xs:1,children:[e.jsx(U,{sx:{width:"100%",bgcolor:"background.paper",overflow:"auto"},children:P?e.jsx(Z,{variant:"text",sx:{fontSize:"1rem"}}):S.map(y=>e.jsxs(b,{children:[e.jsx(W,{children:e.jsxs(ne,{onClick:()=>T(y),children:[e.jsx(ge,{children:e.jsx(Ae,{})}),e.jsx(A,{children:e.jsxs(f.Fragment,{children:[e.jsx(u,{children:"Pedido: "+y.code}),e.jsx(u,{children:"En Camino a: "+y.destination})]})})]})}),e.jsx(V,{})]},y.code))}),h&&e.jsxs(X,{open:s,onClose:N,"aria-labelledby":"alert-dialog-title",children:[e.jsx(K,{id:"alert-dialog-title",children:"Pedido "+h.code}),e.jsxs(G,{children:[e.jsx(u,{children:"Nombre cliente: "+h.Users[0].firstname+" "+h.Users[0].lastname}),e.jsx(u,{children:"  Telefono de contacto: "+h.Users[0].phone}),e.jsx(u,{children:"Fue recogido en: "+h.origin}),e.jsx(u,{children:"  Descripcion: "+h.description}),e.jsx(u,{children:"  Cantidad: "+h.numberPackages}),e.jsxs(b,{sx:{maxWidth:400},children:[e.jsx(Ls,{activeStep:c,orientation:"vertical",children:de.map((y,E)=>e.jsxs(qs,{children:[e.jsx(Fs,{optional:E===2?e.jsx(u,{variant:"caption",children:"Paso final"}):null,children:y.label}),e.jsxs(_s,{children:[e.jsx(u,{children:y.description}),e.jsx(b,{sx:{mb:2},children:e.jsxs("div",{children:[E==1&&e.jsx(Be,{sx:{mt:1,mr:1},type:"file",variant:"outlined",name:"file",disabled:E===0,onChange:R=>k(R.target.files[0])}),e.jsx(v,{variant:"contained",type:"submit",onClick:()=>{ee(h.code)},sx:{mt:1,mr:1},children:E===de.length-1?"Finalizar":"continuar"}),e.jsx(v,{variant:"contained",disabled:E===0,onClick:oe,sx:{mt:1,mr:1},children:"regresar"})]})})]})]},y.label))}),c===de.length&&e.jsxs(Us,{square:!0,elevation:0,sx:{p:3},children:[e.jsx(u,{children:"Todo completado Finaliza el pedido"}),e.jsx(v,{onClick:B,sx:{mt:1,mr:1},children:"finalizar pedido"})]})]}),i===!0&&e.jsx(z,{severity:"info",action:e.jsx(_,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{r(!1)},children:e.jsx(he,{fontSize:"inherit"})}),sx:{mb:2},children:"ingrese una foto del pedido"})]})]})]})]})}function Zt(){const[s,t]=C.useState(!1),[n,a]=C.useState(!1),[i,r]=O(qt,[n]),[c,l]=C.useState(),o=j=>{l(j),t(!0)},x=()=>{t(!1)};return e.jsxs(D,{container:!0,columns:1,justifyContent:"center",children:[e.jsx(D,{item:!0,xs:1,children:e.jsx(u,{variant:"h6",color:"inherit",component:"div",children:"Historial de pedidos"})}),e.jsxs(D,{item:!0,xs:1,children:[e.jsx(U,{sx:{width:"100%",bgcolor:"background.paper",overflow:"auto"},children:r?e.jsx(Z,{variant:"text",sx:{fontSize:"1rem"}}):i.map(j=>e.jsxs(b,{children:[e.jsx(W,{children:e.jsxs(ne,{onClick:()=>o(j),children:[e.jsx(ge,{children:e.jsx(Ae,{})}),e.jsx(A,{primary:j.ListStates[0].date,secondary:"Pedido:"+j.code})]})}),e.jsx(V,{})]},j.code))}),c&&e.jsxs(X,{open:s,onClose:x,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(K,{id:"alert-dialog-title",children:"Pedido: "+c.code}),e.jsxs(G,{children:[e.jsx(u,{children:"Recogido en: "+c.origin}),e.jsx(u,{children:"El destino fue: "+c.destination}),e.jsx(u,{children:"Nombre cliente: "+c.Users[0].firstname+" "+c.Users[0].lastname}),e.jsx(u,{children:"  Telefono de contacto: "+c.Users[0].phone}),e.jsx(u,{children:"  Descripcion: "+c.description}),e.jsx(u,{children:"transportado en: "+c.Transports[0].nameTransport}),e.jsx(u,{children:"  Cantidad: "+c.numberPackages})]})]})]})]})}function Kt(){const[s,t]=C.useState("1"),n=(a,i)=>{t(i)};return e.jsxs(tt,{value:s,children:[e.jsx(b,{sx:{borderBottom:1,borderColor:"divider",mt:.5},children:e.jsxs(nt,{centered:!0,onChange:n,children:[e.jsx(le,{label:"Busqueda",value:"1"}),e.jsx(le,{label:"En Proceso",value:"2"}),e.jsx(le,{icon:e.jsx(Ks,{}),value:"3"})]})}),e.jsx(ce,{value:"1",children:e.jsx(Vt,{})}),e.jsx(ce,{value:"2",children:e.jsx(Wt,{})}),e.jsx(ce,{value:"3",children:e.jsx(Zt,{})})]})}function Gt(){return e.jsxs(b,{children:[e.jsx(J,{}),e.jsx(Kt,{})]})}const Jt={1:e.jsx(Gs,{}),2:e.jsx(Js,{}),3:e.jsx(Qs,{})},Qt=()=>{const s=Fe();return{ENTREGADO:{content:"Entregado",color:s.palette.success.main},EN_CAMINO:{content:"En proceso",color:s.palette.warning.main},SOLICITADO:{content:"Solicitado",color:s.palette.info.main}}};function je(s){const{title:t,children:n,bgcolor:a,textSecondary:i,...r}=s;return e.jsxs(H,{alignItems:"center",...r,children:[e.jsx($e,{placement:"top",arrow:!0,title:t,children:e.jsx(be,{sx:{width:"32px",height:"32px",backgroundColor:a},children:n})}),e.jsx(u,{fontSize:"small",children:i})]})}je.propTypes={title:p.string,children:p.node,bgcolor:p.any,textSecondary:p.any};function ts({shipment:s}){var o,x,j,d,S;const t=Fe(),n=ze(t.breakpoints.up("sm")),a=Qt(),i=((o=s==null?void 0:s.Users[0])==null?void 0:o.firstname)+" "+((x=s==null?void 0:s.Users[0])==null?void 0:x.lastname),r=s==null?void 0:s.Transports[0],c=s==null?void 0:s.numberPackages,l=(j=s==null?void 0:s.ListStates[0])==null?void 0:j.phase;return e.jsxs(W,{secondaryAction:e.jsx(e.Fragment,{children:e.jsxs(H,{direction:"row",children:[e.jsx(je,{title:`Vehiculo: ${r.nameTransport}`,bgcolor:((d=a[l])==null?void 0:d.color)??"red",textSecondary:`${((S=a[l])==null?void 0:S.content)??"ERROR"}`,sx:{minWidth:"67px"},children:Jt[r.id]}),e.jsx(je,{title:"Cantidad de paquetes",textSecondary:c,children:e.jsx(Xs,{})})]})}),alignItems:"flex-start",sx:{width:n?"calc(50% - (8px * 0.2) * 2)":"calc(100% - (8px * 0.2) * 2)",border:1,borderColor:"divider",m:.2},className:"custom-item",children:[e.jsx(Me,{children:e.jsx(be,{alt:`Una foto de perfil de ${i}`})}),e.jsx(A,{primary:i,secondary:e.jsxs(f.Fragment,{children:[e.jsx(u,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",noWrap:!0,children:s.destination}),"  — Nombre del mensajero"]})})]})}ts.propTypes={shipment:p.object};function ns({data:s,...t}){return e.jsx(U,{component:H,sx:{bgcolor:"background.paper",flexDirection:"row",flexWrap:"wrap"},...t,children:s.map(n=>e.jsx(ts,{shipment:n},n.code))})}ns.propTypes={data:p.array};function Xt(){const[s,t]=f.useState(!1),{auth:n}=$(c=>c.session),[a,i]=O(At,[s]),r=()=>{t(c=>!c)};return n?e.jsxs(b,{sx:{textAlign:"center"},children:[e.jsx(_e,{children:e.jsx("title",{children:"CourierHub"})}),e.jsx(J,{children:i?e.jsx(He,{open:!0,sx:{zIndex:1,bgcolor:"background.paper"},children:e.jsx(te,{})}):a.length>0?e.jsx(ns,{data:a}):e.jsx(b,{sx:{zIndex:1,m:2},children:e.jsx(u,{variant:"h5",children:"No hay envios aún"})})}),e.jsx(b,{sx:{position:"fixed",right:16,bottom:16},children:e.jsx(Bs,{LinkComponent:ue,color:"primary",to:"nuevo",children:e.jsx(Ys,{})})}),e.jsx(js,{context:[r]})]}):e.jsx(F,{to:"/login"})}function Yt(){const[s,t]=O(Bt);return e.jsxs(U,{id:"item-mensajero",sx:{width:"100%",maxWidth:500},children:[t?e.jsx(Z,{variant:"rectangular",width:210,height:118}):s.map(n=>e.jsxs(b,{children:[e.jsxs(W,{alignItems:"flex-start",onClick:()=>hanledClick(),children:[e.jsx(Me,{children:e.jsx(be,{sx:{width:50,height:50},className:"avatar-user",alt:n.User.firstname,src:"/static/images/avatar/1.jpg"})}),e.jsx(A,{className:"text-position",primary:n.User.firstname+" "+n.User.lastname,secondary:e.jsxs(f.Fragment,{children:[e.jsx(u,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary"}),"Estado"]})}),e.jsx(We,{onClick:()=>eliminarUser(n.id),className:"delete"})]}),e.jsx(V,{variant:"inset",component:"li"})]},n.id)),e.jsxs(X,{children:[e.jsx(K,{}),e.jsx(G,{children:e.jsx(Ve,{sx:{mb:1},children:"Para solicitar un nuevo envio, por favor completa toda la informacion siguiente"})}),e.jsxs(re,{children:[e.jsx(v,{children:"Cancelar"}),e.jsx(v,{children:"Solicitar"})]})]})]})}function en(){return e.jsx("div",{className:"container",children:e.jsx("div",{className:"centrado",children:e.jsx(Yt,{})})})}function sn({data:s}){return console.log("Soy data "+s),e.jsx(U,{id:"item",sx:{width:"100%",maxWidth:600,bgcolor:"background.paper"},children:e.jsxs(W,{alignItems:"flex-start",children:[e.jsx(A,{id:"pedido",primary:`Solicitud: ${s.code}`}),e.jsx(A,{primary:"User: "+s.Users[0].firstname+" "+s.Users[0].lastname,secondary:e.jsx(f.Fragment,{children:e.jsxs(u,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:[e.jsx(A,{secondary:"Origen: "+s.origin}),e.jsx(A,{secondary:"Fecha solicitud: "+s.ListStates[0].date}),e.jsx(A,{secondary:"N° paquetes: "+s.numberPackages}),e.jsx(A,{secondary:"Estado: "+s.ListStates[0].phase}),e.jsx(V,{variant:"inset",component:"li"}),e.jsx(A,{primary:"Destinatario:"}),e.jsx(A,{secondary:"Destino: "+s.destination}),e.jsx(A,{secondary:"Telefono: "+s.Users[0].phone}),e.jsx(A,{secondary:"Descripción: "+s.description})]})})})]})})}function tn(){const[s,t]=O(zt);return console.log("Data desde ver pedidos "+s),e.jsx(f.Fragment,{children:t?e.jsx(Z,{variant:"rectangular",width:210,height:118}):e.jsx("div",{className:"request",children:s.map(n=>e.jsx(sn,{data:n},n.code))})})}const nn="/assets/banner_login-3ce50afa.png",rn="/assets/logo-6225825a.png";function an(){const[s,t]=f.useState({username:"",password:""}),[n,a]=f.useState(!1),[i,r]=f.useState(!1),c=se(),l=()=>{a(!n)},o=d=>{d.preventDefault()},x=async d=>{r(!0),d.preventDefault();try{const S=await St(s),{data:P,status:h}=S;h==200&&(I.dispatch(ut({...P.user},P.token)),c("/dashboard"))}finally{r(!1)}},j=d=>{const{id:S,value:P}=d.target;t(h=>({...h,[S]:P}))};return e.jsxs("form",{onSubmit:x,children:[e.jsx(q,{label:"Usuario",type:"text",id:"username",defaultValue:"",onChange:j,fullWidth:!0,margin:"normal"}),e.jsx(q,{label:"Contraseña",id:"password",type:n?"text":"password",defaultValue:"",onChange:j,fullWidth:!0,margin:"normal",InputProps:{endAdornment:e.jsx(_,{onClick:l,onMouseDown:o,edge:"end",children:n?e.jsx(et,{}):e.jsx(st,{})})}}),i?e.jsx(zs,{}):e.jsx(v,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,autoFocus:!0,children:"Iniciar Sesión"})]})}function rs(s){return s!==void 0&&s!==""}function Y(){const s=Ms();return ze(s.breakpoints.down("md"))}function as({input:s,control:t,rules:n}){const a=Y();return e.jsx(ae,{render:({field:i})=>{var r;return e.jsxs(ye,{sx:{width:a?"calc(100% - 8px)":"calc(50% - 8px)",m:.5,...s==null?void 0:s.sx},children:[e.jsx(Se,{children:s.label}),e.jsxs(ve,{required:(r=s==null?void 0:s.rules)==null?void 0:r.required,value:(i==null?void 0:i.value)??"",label:s==null?void 0:s.label,onChange:i.onChange,children:[e.jsx(Q,{value:!0,children:"SI"}),e.jsx(Q,{value:!1,children:"NO"})]}),e.jsx(Ce,{children:" "})]})},name:s.id,control:t,rules:{...n,validate:rs}})}as.propTypes={input:p.object.isRequired,control:p.any,rules:p.object};const Le={cityId:Dt,stateId:It,transportId:Pt};function os({input:s,control:t,rules:n,watchRef:a}){var i;return s.dependsOn?a.current(s.dependsOn)?e.jsx(pe,{input:s,control:t,rules:n,dependencyValue:a.current(s.dependsOn)}):e.jsxs(ye,{disabled:!0,sx:{width:"calc(50% - 8px)",m:.5,...s==null?void 0:s.sx},children:[e.jsx(Se,{children:s.label}),e.jsx(ve,{required:(i=s==null?void 0:s.rules)==null?void 0:i.required,value:"",label:s==null?void 0:s.label,children:e.jsx(Q,{disabled:!0,children:"Cargando..."})}),e.jsx(Ce,{children:" "})]}):e.jsx(pe,{input:s,control:t,rules:n,watchRef:a})}function pe({input:s,control:t,rules:n,dependencyValue:a}){const i=a?()=>Le[s.id](a):Le[s.id],r=a?[a]:[],[c,l]=O(i,r),o=s.label+(n.required?" *":""),x=Y();return l?e.jsx(Z,{sx:{width:x?"calc(100% - 8px)":"calc(50% - 8px)",height:56,m:.5,...s==null?void 0:s.sx}}):e.jsx(ae,{render:({field:j})=>{var d;return e.jsxs(ye,{sx:{width:x?"calc(100% - 8px)":"calc(50% - 8px)",m:.5,...s==null?void 0:s.sx},children:[e.jsx(Se,{children:o}),e.jsx(ve,{required:(d=s==null?void 0:s.rules)==null?void 0:d.required,value:(j==null?void 0:j.value)??"",label:o,onChange:j.onChange,children:l?e.jsx(Q,{disabled:!0,children:"Cargando..."}):c==null?void 0:c.map(S=>e.jsx(Q,{value:S.value,children:S.label},S.value))}),e.jsx(Ce,{children:" "})]})},name:s.id,control:t,rules:{...n,validate:rs}})}pe.propTypes={input:p.object.isRequired,control:p.any,rules:p.object,dependencyValue:p.any};os.propTypes={input:p.object.isRequired,control:p.any,rules:p.object,watchRef:p.any};function is(s,t){var i,r;const{id:n}=t;if(s[n]===void 0)return" ";const{type:a}=s[n];switch(a){case"required":return((i=t==null?void 0:t.helpers)==null?void 0:i[a])??"Completa este campo";case"pattern":return((r=t==null?void 0:t.helpers)==null?void 0:r[a])??"Por favor, revisa este campo"}}function ls({input:s,control:t,rules:n,sx:a}){const i=Y(),r=l=>{const{target:{value:o}}=l;return o===""||(l.target.value=o.trim()),l},c=(l,o)=>{l.onChange(r(o))};return e.jsx(ae,{render:({field:l,formState:{errors:o}})=>{var x;return e.jsx(q,{label:s.label,required:(x=s==null?void 0:s.rules)==null?void 0:x.required,error:o[s.id]!==void 0,helperText:is(o,s),value:l.value??"",onChange:l.onChange,onBlur:j=>c(l,j),inputRef:l.ref,autoComplete:"none",sx:{width:i?"calc(100% - 8px)":"calc(50% - 8px)",m:.5,mb:0,...a}})},name:s.id,control:t,rules:{...n}})}ls.propTypes={input:p.object.isRequired,control:p.any,rules:p.object,sx:p.object};function cs({input:s,control:t,rules:n,sx:a}){const i=Y(),r=l=>{const{target:{value:o}}=l;return o===""||(l.target.value=o.trim()),l},c=(l,o)=>{l.onChange(r(o))};return e.jsx(ae,{render:({field:l,formState:{errors:o}})=>{var x;return e.jsx(q,{required:(x=s==null?void 0:s.rules)==null?void 0:x.required,label:s.label,autoComplete:"none",error:o[s.id]!==void 0,helperText:is(o,s),value:l.value??"",onChange:l.onChange,onBlur:j=>c(l,j),inputRef:l.ref,sx:{width:i?"calc(100% - 8px)":"calc(50% - 8px)",m:.5,...a}})},name:s.id,control:t,rules:n})}cs.propTypes={input:p.object.isRequired,control:p.any,rules:p.object,sx:p.object};const on={[w.CLIENTE]:"/dashboard",[w.MENSAJERO]:"/entregas",[w.ADMINISTRADOR]:"/dashboard"},ds={persona:[{label:"Telefono",id:"phone",type:"numeric",rules:{required:!0,pattern:/^\d+$/},helpers:{pattern:"Solo se permiten numeros"}},{label:"Nombres",id:"firstname",rules:{required:!0,pattern:/^(?=.*[a-zA-Z])\S.*$/}},{label:"Apellidos",id:"lastname",rules:{required:!0,pattern:/^(?=.*[a-zA-Z])\S.*$/}},{label:"Direccion",id:"address",rules:{required:!0}},{label:"Email",id:"email",rules:{required:!0,pattern:/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/}},{label:"Nueva contraseña",id:"password",rules:{required:!1}},{label:"Departamento",id:"stateId",type:"select",rules:{required:!0}},{label:"Ciudad",id:"cityId",type:"select",dependsOn:"stateId",rules:{required:!0}}],request:[{label:"Descripcion del pedido",id:"description",rules:{required:!0}},{label:"Origen",id:"origin",rules:{required:!0}},{label:"Destino",id:"destination",rules:{required:!0}},{label:"Numero de paquetes",id:"numberPackages",type:"numeric",rules:{required:!0,pattern:/^\d+$/},helpers:{pattern:"Solo se permiten numeros"}},{label:"Tipo de transporte",id:"transportId",type:"select",rules:{required:!0}}]},ln={default:ls,select:os,numeric:cs,boolean:as};function cn(){const{auth:s}=$(n=>n.session),t=es();return s?t&&e.jsx(F,{to:on[t]}):e.jsxs(b,{id:"login-page",children:[e.jsx(_e,{children:e.jsx("title",{children:"CourierHub - Inicio de sesion"})}),e.jsx(Oe,{component:"img",src:nn,alt:"Banner",id:"banner"}),e.jsxs(b,{children:[e.jsx(u,{variant:"h4",children:"¡Hola de nuevo!"}),e.jsx(u,{variant:"h6",children:"Inicia sesión aquí para continuar tu aventura"}),e.jsx(an,{}),e.jsx(u,{sx:{marginTop:"32px"},children:"¿Olvidaste tu contraseña? Restablecela aqui"}),e.jsx($e,{title:"Sobre nosotros, CourierHub",children:e.jsx(Oe,{component:"img",src:rn,alt:"Logo de la empresa",id:"logo"})})]})]})}function dn(){const s=se();return f.useEffect(()=>{I.dispatch(dt()),s("/login")},[]),null}function Te(s){const{arr:t,...n}=s;return e.jsx(H,{flexDirection:"row",justifyContent:"center",flexWrap:"wrap",children:t.map(a=>{const i=ln[a.type??"default"];return e.jsx(i,{input:a,...n,rules:a.rules},a.id)})})}Te.propTypes={arr:p.array.isRequired};function un(){const[s]=ps(),{handleSubmit:t,control:n}=Ze(),a=Y(),i=se(),r=fe(),c=async o=>{console.log(o);const{status:x}=await Tt(o);x==200?(r(M("¡El pedido ha sido solicitado!","success")),s(),l()):r(M("Se ha producido un error, intentalo mas tarde","error"))},l=()=>{i(-1)};return e.jsxs(X,{open:!0,onClose:l,fullScreen:a,children:[e.jsx(K,{children:"Solicitar un envio"}),e.jsxs(G,{children:[e.jsx(Ve,{sx:{mb:1},children:"Para solicitar un nuevo envio, por favor completa toda la informacion siguiente"}),e.jsx("form",{onSubmit:t(c),children:e.jsx(Te,{arr:ds.request,control:n})})]}),e.jsxs(re,{children:[e.jsx(v,{onClick:l,children:"Cancelar"}),e.jsx(v,{onClick:t(c),children:"Solicitar"})]})]})}function xn(){return e.jsx(e.Fragment,{children:e.jsx(un,{})})}function hn(){const s=I.getState().session.user.phone,[t,n]=O(()=>kt(s)),a="historial";return e.jsx("div",{id:"contenedorPpal",children:n?e.jsx("div",{id:"tabla",children:e.jsx(b,{sx:{display:"flex"},children:e.jsx(te,{})})}):e.jsx("div",{id:"tabla",children:e.jsx(Ye,{datos:t,tipo:a})})})}function jn(){const{auth:s}=$(t=>t.session);return s?e.jsx("div",{id:"mainContainer",children:e.jsx(J,{children:e.jsx("div",{id:"component",children:e.jsx(hn,{})})})}):e.jsx(F,{to:"/dashboard"})}function pn(){const s=ms();return e.jsxs("div",{id:"error-page",children:[e.jsx("h1",{children:"Oops!"}),e.jsx("p",{children:"Lo sentimos, se ha producido un error inesperado."}),e.jsx("p",{children:e.jsx("i",{children:s?s.statusText||s.message:"404 NOT_FOUND"})})]})}function qe(s){return Object.fromEntries(Object.entries(s).filter(([n,a])=>a!==void 0&&a!==""))}function mn(){const[s,t]=O(vt);return t?e.jsx(He,{open:!0,children:e.jsx(te,{})}):e.jsx(us,{userdata:s})}function us({userdata:s}){const t=se(),{handleSubmit:n,control:a,watch:i}=Ze({defaultValues:{...s}}),r=f.useRef(i),c=fe(),l=async x=>{console.log(x),console.log(qe(x));const{status:j,response:d}=await Ct(qe(x));j===200?(c(M("¡Cliente añadido correctamente!","success")),o()):c(M((d==null?void 0:d.data)??"NO se ha podido añadir el cliente","warning"))},o=()=>{t(-1)};return e.jsxs(b,{open:!0,fullWidth:!0,maxWidth:"lg",children:[e.jsx(K,{children:"Editar perfil"}),e.jsx(G,{children:e.jsx("form",{onSubmit:n(l),children:e.jsx(Te,{arr:ds.persona,control:a,watchRef:r})})}),e.jsxs(re,{children:[e.jsx(v,{onClick:o,children:"Cancelar"}),e.jsx(v,{onClick:n(l),children:"Guardar"})]})]})}us.propTypes={userdata:p.any};function fn(){return e.jsx(J,{children:e.jsx(b,{children:e.jsx(mn,{})})})}const me=[{path:"/dashboard",label:"Inicio",role:w.CLIENTE,element:e.jsx(Xt,{}),children:[{path:"nuevo",element:e.jsx(xn,{})}]},{path:"/sucursales",label:"Sucursales",role:w.CLIENTE,element:e.jsx(Ht,{})},{path:"/historialpedidos",label:"Historial",role:w.CLIENTE,element:e.jsx(jn,{})},{path:"/mensajero",label:"Mensajeros",role:w.ADMINISTRADOR,element:e.jsx(en,{})},{path:"/solicitudes",element:e.jsx(tn,{})},{path:"/login",element:e.jsx(cn,{})},{path:"/entregas",label:"Entregas",role:w.MENSAJERO,element:e.jsx(Gt,{})},{path:"/profile",label:"Perfil",role:w.ALL,element:e.jsx(fn,{})},{path:"/logout",label:"Cerrar sesión",role:w.ALL,element:e.jsx(dn,{})},{children:[{element:e.jsx(F,{to:"/dashboard"}),index:!0},{path:"404",element:e.jsx(pn,{})},{path:"*",element:e.jsx(F,{to:"/404"})}]},{path:"*",element:e.jsx(F,{to:"/404",replace:!0})}];const gn={common:{black:"#000",white:"#fff",rose:"#FFD6BA"},primary:{main:"#555B6E",contrastText:"#fff"},secondary:{main:"#89B0AE",contrastText:"#000"},background:{paper:"#FAF9F9"}};xs.propTypes={children:p.node};function xs({children:s}){const t=f.useMemo(()=>({palette:gn}),[]),n=$s(t);return e.jsx(fs,{injectFirst:!0,children:e.jsxs(Hs,{theme:n,children:[e.jsx(Ue,{}),s]})})}const bn=vs(me);gs.createRoot(document.getElementById("root")).render(e.jsx(Ss,{store:I,children:e.jsx(Ds,{loading:null,persistor:ft,children:e.jsx(ys,{children:e.jsxs(xs,{children:[e.jsx(ot,{}),e.jsx(bs,{router:bn})]})})})}));