import{j as e,af as hs,r as g,am as p,aD as F,al as C,aE as qe,aF as xs,az as ee,aG as js,aH as ps,aI as ms,aJ as fs,aK as gs}from"./vendor-b3c2ed37.js";import{W as _e,q as bs}from"./vendor_react-helmet-async-cbe6ee96.js";import{u as M,a as me,P as Ss}from"./vendor_react-redux-0b236f38.js";import{L as de,c as ys}from"./vendor_react-router-dom-ed3b9d4c.js";import{p as Cs,a as vs,d as As,P as Ts}from"./vendor_redux-persist-9b4192bf.js";import{S as $,a as ue,A as B,s as Ie,b as Ds,t as ke,c as oe,d as Is,e as Pe,f as Ee,g as we,I as q,B as v,M as ks,h as b,i as u,G as T,j as L,C as se,D as Z,L as H,k as K,l as te,m as V,n as Ue,o as Ps,p as Re,q as Es,v as ws,w as Rs,x as Os,y as G,z as fe,E as ne,F as J,H as Q,J as Be,K as ge,N as Ns,O as Ls,P as Fs,Q as qs,R as _s,U as le,V as ze,W as Me,X as be,Y as $e,Z as He,_ as Us,$ as Bs,a0 as zs,a1 as Se,a2 as ye,a3 as Ce,a4 as W,a5 as ve,a6 as Oe,a7 as Ms,a8 as $s,a9 as Hs}from"./vendor_@mui/material-eb3d5a92.js";import{c as Vs}from"./vendor_@reduxjs/toolkit-d6f233c5.js";import{d as Ws,a as Ve,b as Zs,c as he,e as Ae,f as Ks,g as Gs,h as Js,i as Qs,j as Xs,k as Ys,l as et,m as st}from"./vendor_@mui/icons-material-d6d3fa43.js";import{a as f}from"./vendor_axios-4a70c6fc.js";import{T as tt,a as nt,b as ie}from"./vendor_@mui/lab-83cab7ef.js";import{C as re,u as We}from"./vendor_react-hook-form-feb08991.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(l){if(l.ep)return;l.ep=!0;const n=a(l);fetch(l.href,n)}})();const Ze="ADD_SNACKBAR",Ke="REMOVE_SNACKBAR",z=(s,t,a)=>{const r=new Date().getTime().toString();return{type:Ze,payload:{id:r,message:s,severity:t,duration:a}}},rt=s=>({type:Ke,payload:{id:s}});function at(s){return e.jsx(B,{elevation:6,variant:"filled",...s})}function ot(){const{snackbars:s}=M(r=>r.snackbar),t=me(),a=(r,l)=>{l!=="clickaway"&&t(rt(r))};return e.jsx($,{className:"position-default",children:s.map(r=>e.jsx(ue,{open:r.open,autoHideDuration:r.duration,onClose:(l,n)=>a(r.id,n),children:e.jsx("div",{children:e.jsx(at,{onClose:()=>a(r.id),severity:r.severity,children:r.message})})},r.id))})}const lt={snackbars:[]},it=(s=lt,t)=>{switch(t.type){case Ze:return{...s,snackbars:[...s.snackbars,{...t.payload,open:!0}]};case Ke:return{...s,snackbars:s.snackbars.filter(a=>a.id!==t.payload.id)};default:return s}},ct="AUTHORIZE",Ge="UNAUTHORIZE",Je="SET_USER",Qe="SET_TOKEN",dt=()=>({type:Ge}),ut=(s,t="")=>({type:Je,payload:{user:s,token:t}}),ht=s=>({type:Qe,payload:{token:s}}),Ne={auth:!1,token:"",user:{}},xt=(s=Ne,t)=>{switch(t.type){case ct:return{...s,auth:!0};case Ge:return{...Ne};case Je:return{...s,auth:!0,user:{...t.payload.user},token:t.payload.token};case Qe:return{...s,token:t.payload.token};default:return s}},jt={key:"root",version:1,storage:As},pt=hs({snackbar:it,session:xt}),mt=Cs(jt,pt),D=Vs({reducer:mt,middleware:s=>s({serializableCheck:!1})}),ft=vs(D);D.subscribe(()=>{console.log(D.getState())});const E={ALL:"ALL_ROLES",ADMINISTRADOR:"ADMIN",MENSAJERO:"COURIER",CLIENTE:"CLIENT"};function Xe(s){const[t,a]=g.useState(s.datos),r="USTED NO HA REALIZADO PEDIDOS TODAVÍA",l="USTED NO HA REGISTRADO SUCURSALES TODAVÍA",n=Ie(Ds)(({theme:o})=>({[`&.${ke.head}`]:{backgroundColor:o.palette.primary.dark,color:o.palette.common.white},[`&.${ke.body}`]:{fontSize:13}})),c=Ie(oe)(({theme:o})=>({"&:nth-of-type(odd)":{backgroundColor:o.palette.action.hover}})),i=(o,h)=>{o=="editar"?(s.setTypeModal("editar"),s.setOpen(!0),s.setValores({nit:h.nit,name:h.name,address:h.address,phone:h.phone})):o=="eliminar"&&(s.setTypeModal("eliminar"),s.setOpen(!0),s.setValores({nit:h.nit}))};return e.jsx(Is,{sx:{maxHeight:600},children:s.tipo=="historial"?e.jsxs(Pe,{stickyHeader:!0,"aria-label":"customized table",size:"small",children:[e.jsx(Ee,{children:e.jsxs(oe,{children:[e.jsx(n,{align:"center",children:"Fecha Solicitud"}),e.jsx(n,{align:"center",children:"Número Paquetes"}),e.jsx(n,{align:"center",children:"Descripción"}),e.jsx(n,{align:"center",children:"Dirección De Entrega"}),e.jsx(n,{align:"center",children:"Mensajero"})]})}),e.jsx(we,{children:t!==null?t.map(o=>e.jsxs(c,{children:[e.jsx(n,{component:"th",scope:"row","data-titulo":"Fecha Solicitud",align:"center",size:"medium",children:o.fecha}),e.jsx(n,{"data-titulo":"Número De Paquetes",align:"center",children:o.paquetes}),e.jsx(n,{"data-titulo":"Descripción",align:"center",children:o.descripcion}),e.jsx(n,{"data-titulo":"Destino",align:"center",children:o.direccion}),e.jsx(n,{"data-titulo":"Mensajero",align:"center",children:o.mensajero})]},o.fecha)):e.jsxs(c,{children:[e.jsx(n,{component:"th",scope:"row","data-titulo":"Fecha Solicitud",align:"center",children:t==null&alert(r)}),e.jsx(n,{"data-titulo":"Número De Paquetes",align:"center",children:" "}),e.jsx(n,{"data-titulo":"Descripción",align:"center",children:" "}),e.jsx(n,{"data-titulo":"Destino",align:"center",children:" "}),e.jsx(n,{"data-titulo":"Mensajero",align:"center",children:" "})]},"null")})]}):e.jsxs(Pe,{stickyHeader:!0,"aria-label":"customized table",size:"small",children:[e.jsx(Ee,{children:e.jsxs(oe,{children:[e.jsx(n,{align:"center",children:"Nit"}),e.jsx(n,{align:"center",children:"Nombre"}),e.jsx(n,{align:"center",children:"Dirección"}),e.jsx(n,{align:"center",children:"Teléfono"}),e.jsx(n,{align:"center",children:"Opciones"})]})}),e.jsx(we,{children:t!==null?t.map(o=>e.jsxs(c,{children:[e.jsx(n,{component:"th",scope:"row","data-title":"Nit",align:"center",children:o.nit}),e.jsx(n,{"data-title":"Nombre",align:"center",children:o.name}),e.jsx(n,{"data-title":"Dirección",align:"center",children:o.address}),e.jsx(n,{"data-title":"Teléfono",align:"center",children:o.phone}),e.jsxs(n,{"data-title":"Opciones",align:"center",children:[e.jsx(q,{onClick:()=>i("editar",o),"aria-label":"edit",children:e.jsx(Ws,{})}),e.jsx(q,{onClick:()=>i("eliminar",o),"aria-label":"delete",children:e.jsx(Ve,{})})]})]},o.nit)):e.jsxs(c,{children:[e.jsx(n,{component:"th",scope:"row","data-titulo":"Nit",align:"center",size:"medium",children:t==null&alert(l)}),e.jsx(n,{"data-titulo":"Nombre",align:"center",children:" "}),e.jsx(n,{"data-titulo":"Dirección",align:"center",children:" "}),e.jsx(n,{"data-titulo":"Teléfono",align:"center",children:" "}),e.jsx(n,{"data-titulo":"Opciones",align:"center",children:" "})]},"null")})]})})}function gt(s){if(s.status===200){const t=s.headers;t.has("x-message")&&D.dispatch(z(t.get("x-message"),"success",6e3)),t.has("x-authorization")&&D.dispatch(ht(t.get("new-authorization")))}return s}function bt(s){const t=s.response.headers;if(t.has("x-message")&&D.dispatch(z(t.get("x-message"),"error",6e3)),t.has("x-code"))switch(t.get("x-code")){case"INVALID:TOKEN":location.href="/logout";break;case"UNAUTHORIZED":location.href="/dashboard";break}return Promise.reject(s)}function St(s){const t=D.getState().session.token;return s.headers.Authorization!==t&&(s.headers.Authorization=`${t}`),s}f.defaults.baseURL="/api/v1/";f.defaults.withCredentials=!0;f.interceptors.request.use(s=>St(s));f.interceptors.response.use(s=>gt(s),s=>bt(s));function yt(s){return f.post("login",s)}function Ct(){return f.get("user/profile")}function vt(s){return f.post("user/profile",s)}function At(){return f.get("request")}function Tt(s){return f.post("request",s)}function Dt(s){return f.get("general/cities/"+s)}function It(){return f.get("general/states/")}function kt(){return f.get("general/transport/")}function Pt(s){return f.get(`/delegates/${s}`)}function Et(s){return f.get(`/branches/${s}`)}function wt(s){return f.post("/branches/crear",s)}function Rt(s){return f.put("/branches/modifica",s)}function Ot(s){return f.delete(`/branches/elimina/${s}`)}function Nt(){return f.get("/request/inProgress")}function Lt(){return f.get("/request/onWay")}function Ft(){return f.get("/request/finished")}function qt(s){return f.post("/request/updateStatus1",{code:s})}function _t(s){return f.post("/imgFileF",s)}function Ut(s){return f.post("/imgFileS",s)}function Bt(){return f.get("user/allcouriers")}function zt(s){return f.post("user/deleteCourier",{id:s})}const O=(s,t=[])=>{const[a,r]=g.useState(null),[l,n]=g.useState(!0);return g.useEffect(()=>((async()=>{const{status:i,data:o}=await s();i===200&&(r(o),n(!1))})(),()=>{r(null),n(!0)}),t),[a,l]};function Mt(){const[s,t]=g.useState(!1),[a,r]=g.useState(""),l="sucursales",n=D.getState().session.user.phone,[c,i]=g.useState(!1),[o,h]=g.useState(!1),[j,d]=g.useState([!1]),[y,I]=O(()=>Et(n),j),[x,N]=g.useState({nit:"",name:"",address:"",phone:""}),[m,A]=g.useState({nit:!1,name:!1,address:!1,phone:!1}),R=()=>i(!1),Y=()=>h(!1),ae=w=>{w=="añadir"?(r("añadir"),t(!0),d([!1])):w=="editar"?(r("editar"),t(!0),d([!1])):w=="eliminar"&&(r("eliminar"),t(!0),d([!1]))},k=()=>{t(!1),N(""),A({nit:!1,name:!1,address:!1,phone:!1})},U=w=>{N({...x,[w.target.name]:w.target.value}),A({nit:!1,name:!1,address:!1,phone:!1})},S=w=>{w.preventDefault(),console.log("esto es valida",m),a=="eliminar"?Ot(x.nit)?(k(),i(!0),d([!0])):(k(),h(!0)):x.nit==""&&x.name==""&&x.address==""&&x.phone==""?A({nit:!0,name:!0,address:!0,phone:!0}):x.nit==""?A({...m,nit:!0}):x.name==""?A({...m,name:!0}):x.address==""?A({...m,address:!0}):x.phone==""?A({...m,phone:!0}):(A({nit:!1,name:!1,address:!1,phone:!1}),a=="añadir"?(N({...x,customerId:y[0].customerId}),wt(x)?(k(),i(!0),d([!0])):(k(),h(!0))):a=="editar"&&(Rt(x)?(k(),i(!0),d([!0])):(k(),h(!0))))},P={position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"background.paper",boxShadow:24,flexGrow:1,padding:4};return e.jsxs("div",{id:"panel",children:[e.jsxs($,{spacing:2,sx:{width:"100%"},children:[e.jsx(ue,{open:c,autoHideDuration:6e3,onClose:R,children:e.jsx(B,{onClose:R,severity:"success",sx:{width:"100%"},children:"¡Todo Ha Sido Exitoso!"})}),e.jsx(ue,{open:o,autoHideDuration:6e3,onClose:Y,children:e.jsx(B,{onClose:Y,severity:"error",sx:{width:"100%"},children:"¡Ha Ocurrido Un Error, Intentalo Más Tarde!"})})]}),e.jsx("div",{id:"btn",children:e.jsx(v,{id:"miboton",onClick:()=>ae("añadir"),variant:"outlined",size:"large",children:"CREAR SUCURSAL"})}),e.jsx(ks,{disableEscapeKeyDown:!0,hideBackdrop:!0,open:s,onClose:k,"aria-labelledby":"Ventana Modal",children:e.jsxs(b,{sx:P,children:[e.jsx(u,{id:"tituloModal",align:"center",variant:"h6",component:"h2",children:a=="añadir"?"Crea Una Nueva Sucursal":a=="editar"?"Modifica La Sucursal":a=="eliminar"&&"¿Desea Eliminar La Sucursal?"}),a==""||a=="añadir"||a=="editar"?e.jsxs(T,{container:!0,spacing:1,justifySelf:"center",children:[a=="añadir"&&e.jsxs(T,{item:!0,xs:12,children:[e.jsx(L,{variant:"outlined",margin:"normal",label:"Nit",name:"nit",type:"text",defaultValue:x.nit,onChange:U,size:"small",autoComplete:"off",fullWidth:!0}),m.nit!==!1&&e.jsx("span",{children:"Digite el nit de la sucursal"})]}),e.jsxs(T,{item:!0,xs:12,children:[e.jsx(L,{variant:"outlined",margin:"normal",label:"Nombre",name:"name",type:"text",defaultValue:x.name,onChange:U,size:"small",autoComplete:"off",fullWidth:!0}),m.name!==!1&&e.jsx("span",{children:"Digite el nombre de la sucursal"})]}),e.jsxs(T,{item:!0,xs:12,children:[e.jsx(L,{variant:"outlined",margin:"normal",label:"Dirección",name:"address",type:"text",defaultValue:x.address,onChange:U,size:"small",autoComplete:"off",fullWidth:!0}),m.address!==!1&&e.jsx("span",{children:"Digite la dirección de la sucursal"})]}),e.jsxs(T,{item:!0,xs:12,children:[e.jsx(L,{variant:"outlined",margin:"normal",label:"Teléfono",name:"phone",type:"number",defaultValue:x.phone,onChange:U,size:"small",autoComplete:"off",fullWidth:!0}),m.phone!==!1&&e.jsx("span",{children:"Digite el teléfono de la sucursal"})]}),e.jsxs("div",{id:"btns",children:[e.jsx(v,{id:"aceptar",onClick:S,children:"Aceptar"}),e.jsx(v,{id:"cancelar",onClick:k,children:"Cancelar"})]})]}):e.jsxs(T,{container:!0,spacing:1,justifySelf:"center",children:[e.jsxs(u,{id:"descripcion",align:"center",variant:"h6",component:"h2",children:["Se eliminará la sucursal identificada con el nit: ",x.nit]}),e.jsxs("div",{id:"btns",children:[e.jsx(v,{id:"aceptar",onClick:S,children:"Aceptar"}),e.jsx(v,{id:"cancelar",onClick:k,children:"Cancelar"})]})]})]})}),I?e.jsx("div",{id:"tabla",children:e.jsx(b,{sx:{display:"flex"},children:e.jsx(se,{})})}):e.jsx("div",{id:"tabla",children:e.jsx(Xe,{datos:y,tipo:l,setValores:N,setTypeModal:r,setOpen:t})})]})}function Ye(){const{user:{role:s}}=M(t=>t.session);return s}function es(s){const{children:t,window:a}=s,r=Rs({target:a?a():void 0});return e.jsx(Os,{appear:!1,direction:"down",in:!r,children:t})}es.propTypes={children:p.element.isRequired,window:p.func};const $t=240;function _(s){const t=Ye(),{window:a,children:r}=s,{ADMINISTRADOR:l,ALL:n}=E,[c,i]=g.useState(!1),o=()=>{i(d=>!d)},h=e.jsxs(b,{onClick:o,sx:{textAlign:"center"},children:[e.jsx(u,{variant:"h6",sx:{my:2},children:"MUI"}),e.jsx(Z,{}),e.jsx(H,{children:pe.map(d=>d.label&&(t==n||t==l||t==d.role)?e.jsx(K,{component:de,to:d.path,disablePadding:!0,children:e.jsx(te,{sx:{textAlign:"center"},children:e.jsx(V,{primary:d.label})})},d.path):null)})]}),j=a!==void 0?()=>a().document.body:void 0;return e.jsxs(g.Fragment,{children:[e.jsx(Ue,{}),e.jsx(es,{...s,children:e.jsx(Ps,{component:"nav",children:e.jsxs(Re,{children:[e.jsx(q,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:o,sx:{mr:2,display:{sm:"none"}},children:e.jsx(Zs,{})}),e.jsx(u,{variant:"h6",component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"},textAlign:"left"},children:"CourierHub"}),e.jsx(b,{sx:{display:{xs:"none",sm:"block"}},children:pe.map(d=>d.label&&(d.role==n||t==l||t==d.role)?e.jsx(v,{component:de,to:d.path,sx:{color:"#fff"},children:d.label},d.path):null)})]})})}),e.jsx(b,{component:"nav",children:e.jsx(Es,{container:j,variant:"temporary",open:c,onClose:o,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:$t}},children:h})}),e.jsx(Re,{}),e.jsx(ws,{sx:{p:"0px 8px !important"},children:r})]})}_.propTypes={window:p.func,children:p.node};function Ht(){const{auth:s}=M(t=>t.session);return s?e.jsx("div",{className:"contenedorPpal",children:e.jsx(_,{children:e.jsx(Mt,{})})}):e.jsx(F,{to:"/dashboard"})}function Vt(){const[s,t]=C.useState(!1),[a,r]=C.useState(!1),[l,n]=C.useState(!1),[c,i]=O(Nt,[l]),[o,h]=C.useState(),[j,d]=C.useState(""),y=m=>{h(m),t(!0)},I=()=>{n(m=>!m),t(!1),d("")},x=async m=>{t(!1),console.log(m),await qt(m),await Ut(j),r(!0),n(A=>!A)},N=(m,A)=>{console.log(A);const R=new FormData;R.append("file",m),R.append("code",A),d(R),console.log(R)};return e.jsxs(T,{container:!0,columns:1,justifyContent:"center",children:[e.jsxs(T,{item:!0,xs:1,children:[a===!0&&e.jsx(B,{severity:"success",action:e.jsx(q,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{r(!1)},children:e.jsx(he,{fontSize:"inherit"})}),sx:{mb:2},children:"se acepto exitosamente el pedido"}),e.jsx(u,{variant:"h6",color:"inherit",component:"div",children:"Pedidos Disponibles"})]}),e.jsxs(T,{item:!0,xs:1,children:[e.jsx(H,{sx:{width:"100%",bgcolor:"background.paper",overflow:"auto"},children:i?e.jsx(G,{variant:"text",sx:{fontSize:"1rem"}}):c.map(m=>e.jsxs(b,{children:[e.jsxs(te,{onClick:()=>y(m),children:[e.jsx(fe,{children:e.jsx(Ae,{})}),e.jsx(V,{children:e.jsxs(g.Fragment,{children:[e.jsx(u,{children:"Pedido: "+m.code}),e.jsx(u,{children:"Recoger en: "+m.origin}),e.jsx(u,{children:"transportar en: "+m.Transports[0].nameTransport})]})})]}),e.jsx(Z,{})]},m.code))}),o&&e.jsxs(ne,{open:s,onClose:I,"aria-labelledby":"alert-dialog-title",children:[e.jsx(J,{id:"alert-dialog-title",children:"Pedido "+o.code}),e.jsxs(Q,{children:[e.jsx(u,{children:"Recoger en: "+o.origin}),e.jsx(u,{children:"Destino: "+o.destination}),e.jsx(u,{children:"Nombre cliente: "+o.Users[0].firstname+" "+o.Users[0].lastname}),e.jsx(u,{children:"  Telefono de contacto: "+o.Users[0].phone}),e.jsx(u,{children:"  Descripcion: "+o.description}),e.jsx(u,{children:"transportar en: "+o.Transports[0].nameTransport}),e.jsx(u,{children:"  Cantidad: "+o.numberPackages}),e.jsx(b,{children:e.jsx(Be,{sx:{mt:1,mr:1},type:"file",variant:"outlined",name:"file",onChange:m=>N(m.target.files[0],o.ListStates[0].id)})})]}),e.jsxs(ge,{children:[e.jsx(v,{onClick:I,children:"Cancelar"}),e.jsx(v,{disabled:j=="",onClick:()=>x(o.code),autoFocus:!0,children:"Aceptar"})]})]})]})]})}const ce=[{label:"Pedido en recorrido",description:"Estas en Camino, solo da en continuar cuando llegues al destino",foto:"no"},{label:"Entrega realizada",description:"Coloca la foto que muestra que el pedido llego al destino",foto:"si"}];function Wt(){const[s,t]=C.useState(!1),[a,r]=C.useState(!1),[l,n]=C.useState(!1);C.useState(!1);const[c,i]=C.useState(0),[o,h]=C.useState(""),[j,d]=C.useState(!1),[y,I]=O(Lt,[j]),[x,N]=C.useState(),m=new FormData,A=S=>{N(S),t(!0)},R=()=>{t(!1),i(0)},Y=S=>{o==""&&c>0&&n(!0),o!=""?(m.append("file",o),m.append("code",S),console.log(y),console.log(m),_t(m),i(P=>P+1)):(console.log(y),console.log(x),i(P=>P+1))},ae=()=>{i(S=>S-1)},k=S=>{h(S)},U=S=>{r(!0),d(!0),t(!1),i(0)};return e.jsxs(T,{container:!0,columns:1,justifyContent:"center",children:[e.jsxs(T,{item:!0,xs:1,children:[a===!0&&e.jsx(B,{severity:"success",action:e.jsx(q,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{r(!1)},children:e.jsx(he,{fontSize:"inherit"})}),sx:{mb:2},children:"se completo exitosamente la entrega del pedido"}),e.jsx(u,{variant:"h6",color:"inherit",component:"div",children:"Encargos en proceso"})]}),e.jsxs(T,{item:!0,xs:1,children:[e.jsx(H,{sx:{width:"100%",bgcolor:"background.paper",overflow:"auto"},children:I?e.jsx(G,{variant:"text",sx:{fontSize:"1rem"}}):y.map(S=>e.jsxs(b,{children:[e.jsx(K,{children:e.jsxs(te,{onClick:()=>A(S),children:[e.jsx(fe,{children:e.jsx(Ae,{})}),e.jsx(V,{children:e.jsxs(g.Fragment,{children:[e.jsx(u,{children:"Pedido: "+S.code}),e.jsx(u,{children:"En Camino a: "+S.destination})]})})]})}),e.jsx(Z,{})]},S.code))}),x&&e.jsxs(ne,{open:s,onClose:R,"aria-labelledby":"alert-dialog-title",children:[e.jsx(J,{id:"alert-dialog-title",children:"Pedido "+x.code}),e.jsxs(Q,{children:[e.jsx(u,{children:"Nombre cliente: "+x.Users[0].firstname+" "+x.Users[0].lastname}),e.jsx(u,{children:"  Telefono de contacto: "+x.Users[0].phone}),e.jsx(u,{children:"Fue recogido en: "+x.origin}),e.jsx(u,{children:"  Descripcion: "+x.description}),e.jsx(u,{children:"  Cantidad: "+x.numberPackages}),e.jsxs(b,{sx:{maxWidth:400},children:[e.jsx(Ns,{activeStep:c,orientation:"vertical",children:ce.map((S,P)=>e.jsxs(Ls,{children:[e.jsx(Fs,{optional:P===2?e.jsx(u,{variant:"caption",children:"Paso final"}):null,children:S.label}),e.jsxs(qs,{children:[e.jsx(u,{children:S.description}),e.jsx(b,{sx:{mb:2},children:e.jsxs("div",{children:[P==1&&e.jsx(Be,{sx:{mt:1,mr:1},type:"file",variant:"outlined",name:"file",disabled:P===0,onChange:w=>k(w.target.files[0])}),e.jsx(v,{variant:"contained",type:"submit",onClick:()=>{Y(x.code)},sx:{mt:1,mr:1},children:P===ce.length-1?"Finalizar":"continuar"}),e.jsx(v,{variant:"contained",disabled:P===0,onClick:ae,sx:{mt:1,mr:1},children:"regresar"})]})})]})]},S.label))}),c===ce.length&&e.jsxs(_s,{square:!0,elevation:0,sx:{p:3},children:[e.jsx(u,{children:"Todo completado Finaliza el pedido"}),e.jsx(v,{onClick:U,sx:{mt:1,mr:1},children:"finalizar pedido"})]})]}),l===!0&&e.jsx(B,{severity:"info",action:e.jsx(q,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{n(!1)},children:e.jsx(he,{fontSize:"inherit"})}),sx:{mb:2},children:"ingrese una foto del pedido"})]})]})]})]})}function Zt(){const[s,t]=C.useState(!1),[a,r]=C.useState(!1),[l,n]=O(Ft,[a]),[c,i]=C.useState(),o=j=>{i(j),t(!0)},h=()=>{t(!1)};return e.jsxs(T,{container:!0,columns:1,justifyContent:"center",children:[e.jsx(T,{item:!0,xs:1,children:e.jsx(u,{variant:"h6",color:"inherit",component:"div",children:"Historial de pedidos"})}),e.jsxs(T,{item:!0,xs:1,children:[e.jsx(H,{sx:{width:"100%",bgcolor:"background.paper",overflow:"auto"},children:n?e.jsx(G,{variant:"text",sx:{fontSize:"1rem"}}):l.map(j=>e.jsxs(b,{children:[e.jsx(K,{children:e.jsxs(te,{onClick:()=>o(j),children:[e.jsx(fe,{children:e.jsx(Ae,{})}),e.jsx(V,{primary:j.ListStates[0].date,secondary:"Pedido:"+j.code})]})}),e.jsx(Z,{})]},j.code))}),c&&e.jsxs(ne,{open:s,onClose:h,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(J,{id:"alert-dialog-title",children:"Pedido: "+c.code}),e.jsxs(Q,{children:[e.jsx(u,{children:"Recogido en: "+c.origin}),e.jsx(u,{children:"El destino fue: "+c.destination}),e.jsx(u,{children:"Nombre cliente: "+c.Users[0].firstname+" "+c.Users[0].lastname}),e.jsx(u,{children:"  Telefono de contacto: "+c.Users[0].phone}),e.jsx(u,{children:"  Descripcion: "+c.description}),e.jsx(u,{children:"transportado en: "+c.Transports[0].nameTransport}),e.jsx(u,{children:"  Cantidad: "+c.numberPackages})]})]})]})]})}function Kt(){const[s,t]=C.useState("1"),a=(r,l)=>{t(l)};return e.jsxs(tt,{value:s,children:[e.jsx(b,{sx:{borderBottom:1,borderColor:"divider",mt:.5},children:e.jsxs(nt,{centered:!0,onChange:a,children:[e.jsx(le,{label:"Busqueda",value:"1"}),e.jsx(le,{label:"En Proceso",value:"2"}),e.jsx(le,{icon:e.jsx(Ks,{}),value:"3"})]})}),e.jsx(ie,{value:"1",children:e.jsx(Vt,{})}),e.jsx(ie,{value:"2",children:e.jsx(Wt,{})}),e.jsx(ie,{value:"3",children:e.jsx(Zt,{})})]})}function Gt(){return e.jsxs(b,{children:[e.jsx(_,{}),e.jsx(Kt,{})]})}const Jt={1:e.jsx(Gs,{}),2:e.jsx(Js,{}),3:e.jsx(Qs,{})},Qt=()=>{const s=qe();return{ENTREGADO:{content:"Entregado",color:s.palette.success.main},EN_CAMINO:{content:"En proceso",color:s.palette.warning.main},SOLICITADO:{content:"Solicitado",color:s.palette.info.main}}};function xe(s){const{title:t,children:a,bgcolor:r,textSecondary:l,...n}=s;return e.jsxs($,{alignItems:"center",...n,children:[e.jsx($e,{placement:"top",arrow:!0,title:t,children:e.jsx(be,{sx:{width:"32px",height:"32px",backgroundColor:r},children:a})}),e.jsx(u,{fontSize:"small",children:l})]})}xe.propTypes={title:p.string,children:p.node,bgcolor:p.any,textSecondary:p.any};function ss({shipment:s}){var o,h,j,d,y;const t=qe(),a=ze(t.breakpoints.up("sm")),r=Qt(),l=((o=s==null?void 0:s.Users[0])==null?void 0:o.firstname)+" "+((h=s==null?void 0:s.Users[0])==null?void 0:h.lastname),n=s==null?void 0:s.Transports[0],c=s==null?void 0:s.numberPackages,i=(j=s==null?void 0:s.ListStates[0])==null?void 0:j.phase;return e.jsxs(K,{secondaryAction:e.jsx(e.Fragment,{children:e.jsxs($,{direction:"row",children:[e.jsx(xe,{title:`Vehiculo: ${n.nameTransport}`,bgcolor:((d=r[i])==null?void 0:d.color)??"red",textSecondary:`${((y=r[i])==null?void 0:y.content)??"ERROR"}`,sx:{minWidth:"67px"},children:Jt[n.id]}),e.jsx(xe,{title:"Cantidad de paquetes",textSecondary:c,children:e.jsx(Xs,{})})]})}),alignItems:"flex-start",sx:{width:a?"calc(50% - (8px * 0.2) * 2)":"calc(100% - (8px * 0.2) * 2)",border:1,borderColor:"divider",m:.2},className:"custom-item",children:[e.jsx(Me,{children:e.jsx(be,{alt:`Una foto de perfil de ${l}`})}),e.jsx(V,{primary:l,secondary:e.jsxs(g.Fragment,{children:[e.jsx(u,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",noWrap:!0,children:s.destination}),"  — Nombre del mensajero"]})})]})}ss.propTypes={shipment:p.object};function ts({data:s,...t}){return e.jsx(H,{component:$,sx:{bgcolor:"background.paper",flexDirection:"row",flexWrap:"wrap"},...t,children:s.map(a=>e.jsx(ss,{shipment:a},a.code))})}ts.propTypes={data:p.array};function Xt(){const[s,t]=g.useState(!1),{auth:a}=M(c=>c.session),[r,l]=O(At,[s]),n=()=>{t(c=>!c)};return a?e.jsxs(b,{sx:{textAlign:"center"},children:[e.jsx(_e,{children:e.jsx("title",{children:"CourierHub"})}),e.jsx(_,{children:l?e.jsx(He,{open:!0,sx:{zIndex:1,bgcolor:"background.paper"},children:e.jsx(se,{})}):r.length>0?e.jsx(ts,{data:r}):e.jsx(b,{sx:{zIndex:1,m:2},children:e.jsx(u,{variant:"h5",children:"No hay envios aún"})})}),e.jsx(b,{sx:{position:"fixed",right:16,bottom:16},children:e.jsx(Us,{LinkComponent:de,color:"primary",to:"nuevo",children:e.jsx(Ys,{})})}),e.jsx(xs,{context:[n]})]}):e.jsx(F,{to:"/login"})}function Yt(){const[s,t]=O(Bt),a=()=>{},r=l=>{zt(l),console.log(l)};return e.jsx(H,{id:"item-mensajero",sx:{width:"100%",maxWidth:500},children:t?e.jsx(G,{variant:"rectangular",width:210,height:118}):s.map(l=>e.jsxs(b,{children:[e.jsxs(K,{alignItems:"flex-start",onClick:()=>a(),children:[e.jsx(Me,{children:e.jsx(be,{sx:{width:50,height:50},className:"avatar-user",alt:l.User.firstname,src:"/static/images/avatar/1.jpg"})}),e.jsx(V,{className:"text-position",primary:l.User.firstname+" "+l.User.lastname,secondary:e.jsxs(g.Fragment,{children:[e.jsx(u,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary"}),"disponible"]})}),e.jsx(Ve,{onClick:()=>r(l.id),className:"delete"})]}),e.jsx(Z,{variant:"inset",component:"li"})]},l.id))})}function en(){return e.jsx(_,{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"centrado",children:e.jsx(Yt,{})})})})}const sn="/assets/banner_login-3ce50afa.png",tn="/assets/logo-6225825a.png";function nn(){const[s,t]=g.useState({username:"",password:""}),[a,r]=g.useState(!1),[l,n]=g.useState(!1),c=ee(),i=()=>{r(!a)},o=d=>{d.preventDefault()},h=async d=>{n(!0),d.preventDefault();try{const y=await yt(s),{data:I,status:x}=y;x==200&&(D.dispatch(ut({...I.user},I.token)),c("/dashboard"))}finally{n(!1)}},j=d=>{const{id:y,value:I}=d.target;t(x=>({...x,[y]:I}))};return e.jsxs("form",{onSubmit:h,children:[e.jsx(L,{label:"Usuario",type:"text",id:"username",defaultValue:"",onChange:j,fullWidth:!0,margin:"normal"}),e.jsx(L,{label:"Contraseña",id:"password",type:a?"text":"password",defaultValue:"",onChange:j,fullWidth:!0,margin:"normal",InputProps:{endAdornment:e.jsx(q,{onClick:i,onMouseDown:o,edge:"end",children:a?e.jsx(et,{}):e.jsx(st,{})})}}),l?e.jsx(Bs,{}):e.jsx(v,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,autoFocus:!0,children:"Iniciar Sesión"})]})}function ns(s){return s!==void 0&&s!==""}function X(){const s=zs();return ze(s.breakpoints.down("md"))}function rs({input:s,control:t,rules:a}){const r=X();return e.jsx(re,{render:({field:l})=>{var n;return e.jsxs(Se,{sx:{width:r?"calc(100% - 8px)":"calc(50% - 8px)",m:.5,...s==null?void 0:s.sx},children:[e.jsx(ye,{children:s.label}),e.jsxs(Ce,{required:(n=s==null?void 0:s.rules)==null?void 0:n.required,value:(l==null?void 0:l.value)??"",label:s==null?void 0:s.label,onChange:l.onChange,children:[e.jsx(W,{value:!0,children:"SI"}),e.jsx(W,{value:!1,children:"NO"})]}),e.jsx(ve,{children:" "})]})},name:s.id,control:t,rules:{...a,validate:ns}})}rs.propTypes={input:p.object.isRequired,control:p.any,rules:p.object};const Le={cityId:Dt,stateId:It,transportId:kt};function as({input:s,control:t,rules:a,watchRef:r}){var l;return s.dependsOn?r.current(s.dependsOn)?e.jsx(je,{input:s,control:t,rules:a,dependencyValue:r.current(s.dependsOn)}):e.jsxs(Se,{disabled:!0,sx:{width:"calc(50% - 8px)",m:.5,...s==null?void 0:s.sx},children:[e.jsx(ye,{children:s.label}),e.jsx(Ce,{required:(l=s==null?void 0:s.rules)==null?void 0:l.required,value:"",label:s==null?void 0:s.label,children:e.jsx(W,{disabled:!0,children:"Cargando..."})}),e.jsx(ve,{children:" "})]}):e.jsx(je,{input:s,control:t,rules:a,watchRef:r})}function je({input:s,control:t,rules:a,dependencyValue:r}){const l=r?()=>Le[s.id](r):Le[s.id],n=r?[r]:[],[c,i]=O(l,n),o=s.label+(a.required?" *":""),h=X();return i?e.jsx(G,{sx:{width:h?"calc(100% - 8px)":"calc(50% - 8px)",height:56,m:.5,...s==null?void 0:s.sx}}):e.jsx(re,{render:({field:j})=>{var d;return e.jsxs(Se,{sx:{width:h?"calc(100% - 8px)":"calc(50% - 8px)",m:.5,...s==null?void 0:s.sx},children:[e.jsx(ye,{children:o}),e.jsx(Ce,{required:(d=s==null?void 0:s.rules)==null?void 0:d.required,value:(j==null?void 0:j.value)??"",label:o,onChange:j.onChange,children:i?e.jsx(W,{disabled:!0,children:"Cargando..."}):c==null?void 0:c.map(y=>e.jsx(W,{value:y.value,children:y.label},y.value))}),e.jsx(ve,{children:" "})]})},name:s.id,control:t,rules:{...a,validate:ns}})}je.propTypes={input:p.object.isRequired,control:p.any,rules:p.object,dependencyValue:p.any};as.propTypes={input:p.object.isRequired,control:p.any,rules:p.object,watchRef:p.any};function os(s,t){var l,n;const{id:a}=t;if(s[a]===void 0)return" ";const{type:r}=s[a];switch(r){case"required":return((l=t==null?void 0:t.helpers)==null?void 0:l[r])??"Completa este campo";case"pattern":return((n=t==null?void 0:t.helpers)==null?void 0:n[r])??"Por favor, revisa este campo"}}function ls({input:s,control:t,rules:a,sx:r}){const l=X(),n=i=>{const{target:{value:o}}=i;return o===""||(i.target.value=o.trim()),i},c=(i,o)=>{i.onChange(n(o))};return e.jsx(re,{render:({field:i,formState:{errors:o}})=>{var h;return e.jsx(L,{label:s.label,required:(h=s==null?void 0:s.rules)==null?void 0:h.required,error:o[s.id]!==void 0,helperText:os(o,s),value:i.value??"",onChange:i.onChange,onBlur:j=>c(i,j),inputRef:i.ref,autoComplete:"none",sx:{width:l?"calc(100% - 8px)":"calc(50% - 8px)",m:.5,mb:0,...r}})},name:s.id,control:t,rules:{...a}})}ls.propTypes={input:p.object.isRequired,control:p.any,rules:p.object,sx:p.object};function is({input:s,control:t,rules:a,sx:r}){const l=X(),n=i=>{const{target:{value:o}}=i;return o===""||(i.target.value=o.trim()),i},c=(i,o)=>{i.onChange(n(o))};return e.jsx(re,{render:({field:i,formState:{errors:o}})=>{var h;return e.jsx(L,{required:(h=s==null?void 0:s.rules)==null?void 0:h.required,label:s.label,autoComplete:"none",error:o[s.id]!==void 0,helperText:os(o,s),value:i.value??"",onChange:i.onChange,onBlur:j=>c(i,j),inputRef:i.ref,sx:{width:l?"calc(100% - 8px)":"calc(50% - 8px)",m:.5,...r}})},name:s.id,control:t,rules:a})}is.propTypes={input:p.object.isRequired,control:p.any,rules:p.object,sx:p.object};const rn={[E.CLIENTE]:"/dashboard",[E.MENSAJERO]:"/entregas",[E.ADMINISTRADOR]:"/dashboard"},cs={persona:[{label:"Telefono",id:"phone",type:"numeric",rules:{required:!0,pattern:/^\d+$/},helpers:{pattern:"Solo se permiten numeros"}},{label:"Nombres",id:"firstname",rules:{required:!0,pattern:/^(?=.*[a-zA-Z])\S.*$/}},{label:"Apellidos",id:"lastname",rules:{required:!0,pattern:/^(?=.*[a-zA-Z])\S.*$/}},{label:"Direccion",id:"address",rules:{required:!0}},{label:"Email",id:"email",rules:{required:!0,pattern:/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/}},{label:"Nueva contraseña",id:"password",rules:{required:!1}},{label:"Departamento",id:"stateId",type:"select",rules:{required:!0}},{label:"Ciudad",id:"cityId",type:"select",dependsOn:"stateId",rules:{required:!0}}],request:[{label:"Descripcion del pedido",id:"description",rules:{required:!0}},{label:"Origen",id:"origin",rules:{required:!0}},{label:"Destino",id:"destination",rules:{required:!0}},{label:"Numero de paquetes",id:"numberPackages",type:"numeric",rules:{required:!0,pattern:/^\d+$/},helpers:{pattern:"Solo se permiten numeros"}},{label:"Tipo de transporte",id:"transportId",type:"select",rules:{required:!0}}]},an={default:ls,select:as,numeric:is,boolean:rs};function on(){const{auth:s}=M(a=>a.session),t=Ye();return s?t&&e.jsx(F,{to:rn[t]}):e.jsxs(b,{id:"login-page",children:[e.jsx(_e,{children:e.jsx("title",{children:"CourierHub - Inicio de sesion"})}),e.jsx(Oe,{component:"img",src:sn,alt:"Banner",id:"banner"}),e.jsxs(b,{children:[e.jsx(u,{variant:"h4",children:"¡Hola de nuevo!"}),e.jsx(u,{variant:"h6",children:"Inicia sesión aquí para continuar tu aventura"}),e.jsx(nn,{}),e.jsx(u,{sx:{marginTop:"32px"},children:"¿Olvidaste tu contraseña? Restablecela aqui"}),e.jsx($e,{title:"Sobre nosotros, CourierHub",children:e.jsx(Oe,{component:"img",src:tn,alt:"Logo de la empresa",id:"logo"})})]})]})}function ln(){const s=ee();return g.useEffect(()=>{D.dispatch(dt()),s("/login")},[]),null}function Te(s){const{arr:t,...a}=s;return e.jsx($,{flexDirection:"row",justifyContent:"center",flexWrap:"wrap",children:t.map(r=>{const l=an[r.type??"default"];return e.jsx(l,{input:r,...a,rules:r.rules},r.id)})})}Te.propTypes={arr:p.array.isRequired};function cn(){const[s]=js(),{handleSubmit:t,control:a}=We(),r=X(),l=ee(),n=me(),c=async o=>{console.log(o);const{status:h}=await Tt(o);h==200?(n(z("¡El pedido ha sido solicitado!","success")),s(),i()):n(z("Se ha producido un error, intentalo mas tarde","error"))},i=()=>{l(-1)};return e.jsxs(ne,{open:!0,onClose:i,fullScreen:r,children:[e.jsx(J,{children:"Solicitar un envio"}),e.jsxs(Q,{children:[e.jsx(Ms,{sx:{mb:1},children:"Para solicitar un nuevo envio, por favor completa toda la informacion siguiente"}),e.jsx("form",{onSubmit:t(c),children:e.jsx(Te,{arr:cs.request,control:a})})]}),e.jsxs(ge,{children:[e.jsx(v,{onClick:i,children:"Cancelar"}),e.jsx(v,{onClick:t(c),children:"Solicitar"})]})]})}function dn(){return e.jsx(e.Fragment,{children:e.jsx(cn,{})})}function un(){const s=D.getState().session.user.phone,[t,a]=O(()=>Pt(s)),r="historial";return e.jsx("div",{id:"contenedorPpal",children:a?e.jsx("div",{id:"tabla",children:e.jsx(b,{sx:{display:"flex"},children:e.jsx(se,{})})}):e.jsx("div",{id:"tabla",children:e.jsx(Xe,{datos:t,tipo:r})})})}function hn(){const{auth:s}=M(t=>t.session);return s?e.jsx("div",{id:"mainContainer",children:e.jsx(_,{children:e.jsx("div",{id:"component",children:e.jsx(un,{})})})}):e.jsx(F,{to:"/dashboard"})}function xn(){const s=ps();return e.jsxs("div",{id:"error-page",children:[e.jsx("h1",{children:"Oops!"}),e.jsx("p",{children:"Lo sentimos, se ha producido un error inesperado."}),e.jsx("p",{children:e.jsx("i",{children:s?s.statusText||s.message:"404 NOT_FOUND"})})]})}function Fe(s){return Object.fromEntries(Object.entries(s).filter(([a,r])=>r!==void 0&&r!==""))}function jn(){const[s,t]=O(Ct);return t?e.jsx(He,{open:!0,children:e.jsx(se,{})}):e.jsx(ds,{userdata:s})}function ds({userdata:s}){const t=ee(),{handleSubmit:a,control:r,watch:l}=We({defaultValues:{...s}}),n=g.useRef(l),c=me(),i=async h=>{console.log(h),console.log(Fe(h));const{status:j,response:d}=await vt(Fe(h));j===200?(c(z("¡Cliente añadido correctamente!","success")),o()):c(z((d==null?void 0:d.data)??"NO se ha podido añadir el cliente","warning"))},o=()=>{t(-1)};return e.jsxs(b,{open:!0,fullWidth:!0,maxWidth:"lg",children:[e.jsx(J,{children:"Editar perfil"}),e.jsx(Q,{children:e.jsx("form",{onSubmit:a(i),children:e.jsx(Te,{arr:cs.persona,control:r,watchRef:n})})}),e.jsxs(ge,{children:[e.jsx(v,{onClick:o,children:"Cancelar"}),e.jsx(v,{onClick:a(i),children:"Guardar"})]})]})}ds.propTypes={userdata:p.any};function pn(){return e.jsx(_,{children:e.jsx(b,{children:e.jsx(jn,{})})})}const pe=[{path:"/dashboard",label:"Inicio",role:E.CLIENTE,element:e.jsx(Xt,{}),children:[{path:"nuevo",element:e.jsx(dn,{})}]},{path:"/sucursales",label:"Sucursales",role:E.CLIENTE,element:e.jsx(Ht,{})},{path:"/historialpedidos",label:"Historial",role:E.CLIENTE,element:e.jsx(hn,{})},{path:"/mensajero",label:"Mensajeros",role:E.ADMINISTRADOR,element:e.jsx(en,{})},{path:"/login",element:e.jsx(on,{})},{path:"/entregas",label:"Entregas",role:E.MENSAJERO,element:e.jsx(Gt,{})},{path:"/profile",label:"Perfil",role:E.ALL,element:e.jsx(pn,{})},{path:"/logout",label:"Cerrar sesión",role:E.ALL,element:e.jsx(ln,{})},{children:[{element:e.jsx(F,{to:"/dashboard"}),index:!0},{path:"404",element:e.jsx(xn,{})},{path:"*",element:e.jsx(F,{to:"/404"})}]},{path:"*",element:e.jsx(F,{to:"/404",replace:!0})}];const mn={common:{black:"#000",white:"#fff",rose:"#FFD6BA"},primary:{main:"#555B6E",contrastText:"#fff"},secondary:{main:"#89B0AE",contrastText:"#000"},background:{paper:"#FAF9F9"}};us.propTypes={children:p.node};function us({children:s}){const t=g.useMemo(()=>({palette:mn}),[]),a=$s(t);return e.jsx(ms,{injectFirst:!0,children:e.jsxs(Hs,{theme:a,children:[e.jsx(Ue,{}),s]})})}const fn=ys(pe);fs.createRoot(document.getElementById("root")).render(e.jsx(Ss,{store:D,children:e.jsx(Ts,{loading:null,persistor:ft,children:e.jsx(bs,{children:e.jsxs(us,{children:[e.jsx(ot,{}),e.jsx(gs,{router:fn})]})})})}));