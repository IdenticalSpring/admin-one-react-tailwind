(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{6896:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return l(5701)}])},9237:function(e,s,l){"use strict";l.d(s,{Z:function(){return o}});var n=l(5893),r=l(7294),a=l(1664),t=l.n(a),i=l(7594),c=l(4215);function o(e){let{label:s,icon:l,iconSize:a,href:o,target:d,type:u,color:x="white",className:m="",asAnchor:h=!1,small:f=!1,outline:p=!1,active:j=!1,disabled:b=!1,roundedFull:w=!1,onClick:N}=e,g=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",b?"cursor-not-allowed":"cursor-pointer",w?"rounded-full":"rounded",(0,i.pQ)(x,p,!b,j),m];!s&&l?g.push("p-1"):f?g.push("text-sm",w?"px-3 py-1":"p-1"):g.push("py-2",w?"px-6":"px-3"),b&&g.push(p?"opacity-50":"opacity-70");let Z=g.join(" "),y=(0,n.jsxs)(n.Fragment,{children:[l&&(0,n.jsx)(c.Z,{path:l,size:a}),s&&(0,n.jsx)("span",{className:f&&l?"px-1":"px-2",children:s})]});return o&&!b?(0,n.jsx)(t(),{href:o,target:d,className:Z,children:y}):r.createElement(h?"a":"button",{className:Z,type:null!=u?u:"button",target:d,disabled:b,onClick:N},y)}},2115:function(e,s,l){"use strict";var n=l(5893),r=l(7294);let a=e=>{let{type:s="justify-start",mb:l="-mb-3",classAddon:a="mr-3 last:mr-0 mb-3",noWrap:t=!1,children:i,className:c}=e;return(0,n.jsx)("div",{className:"flex items-center ".concat(s," ").concat(c," ").concat(l," ").concat(t?"flex-nowrap":"flex-wrap"),children:r.Children.map(i,e=>e?(0,r.cloneElement)(e,{className:"".concat(a," ").concat(e.props.className)}):null)})};s.Z=a},9100:function(e,s,l){"use strict";l.d(s,{Z:function(){return i}});var n=l(5893),r=l(7294),a=l(1702),t=l(8675);function i(e){let{rounded:s="rounded-2xl",flex:l="flex-col",className:i="",hasComponentLayout:c=!1,hasTable:o=!1,isHoverable:d=!1,isModal:u=!1,children:x,footer:m,onClick:h}=e,f=["bg-white flex",i,s,l,u?"dark:bg-slate-900":"dark:bg-slate-900/70"];return d&&f.push("hover:shadow-lg transition-shadow duration-500"),r.createElement("div",{className:f.join(" "),onClick:h},c?x:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{noPadding:o,children:x}),m&&(0,n.jsx)(t.Z,{children:m})]}))}},1702:function(e,s,l){"use strict";l.d(s,{Z:function(){return r}});var n=l(5893);function r(e){let{noPadding:s=!1,className:l,children:r}=e;return(0,n.jsx)("div",{className:"flex-1 ".concat(s?"":"p-6"," ").concat(l),children:r})}l(7294)},8675:function(e,s,l){"use strict";l.d(s,{Z:function(){return r}});var n=l(5893);function r(e){let{className:s,children:l}=e;return(0,n.jsx)("footer",{className:"p-6 ".concat(s),children:l})}l(7294)},9376:function(e,s,l){"use strict";var n=l(5893);let r=e=>(0,n.jsxs)("label",{className:"".concat(e.type," ").concat(e.className),children:[e.children,(0,n.jsx)("span",{className:"check"}),(0,n.jsx)("span",{className:"pl-2",children:e.label})]});s.Z=r},7767:function(e,s,l){"use strict";var n=l(5893),r=l(7294),a=l(9237);let t=e=>{let{label:s,icon:l,accept:t,color:i,isRoundIcon:c}=e,[o,d]=(0,r.useState)(null),u=e=>{d(e.currentTarget.files[0])},x=!c&&o;return(0,n.jsxs)("div",{className:"flex items-stretch justify-start relative",children:[(0,n.jsxs)("label",{className:"inline-flex",children:[(0,n.jsx)(a.Z,{className:"".concat(c?"w-12 h-12":""," ").concat(x?"rounded-r-none":""),iconSize:c?24:void 0,label:c?null:s,icon:l,color:i,roundedFull:c,asAnchor:!0}),(0,n.jsx)("input",{type:"file",className:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",onChange:u,accept:t})]}),x&&(0,n.jsx)("div",{className:"px-4 py-2 max-w-full flex-grow-0 overflow-x-hidden bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r",children:(0,n.jsx)("span",{className:"text-ellipsis max-w-full line-clamp-1",children:o.name})})]})};s.Z=t},6914:function(e,s,l){"use strict";l.d(s,{Z:function(){return t}});var n=l(5893);l(7294);var r=l(7594),a=l(4215);function t(e){let{icon:s,color:l,w:t="w-12",h:i="h-12",bg:c=!1,className:o=""}=e,d=c?r.RH[l]:"".concat(r.uK[l]," bg-gray-50 dark:bg-slate-800");return(0,n.jsx)(a.Z,{path:s,w:t,h:i,size:"24",className:"rounded-full ".concat(d," ").concat(o)})}},6315:function(e,s,l){"use strict";l.d(s,{Z:function(){return c}});var n=l(5893);l(7294);var r=l(7594),a=l(4215);let t=e=>{let{small:s=!1,className:l="",...r}=e;return(0,n.jsxs)("div",{className:"inline-flex items-center capitalize leading-none ".concat(s?"text-xs":"text-sm"," ").concat(l),children:[r.icon&&(0,n.jsx)(a.Z,{path:r.icon,h:"h-4",w:"w-4",className:s?"mr-1":"mr-2",size:s?14:null}),r.label&&(0,n.jsx)("span",{children:r.label})]})},i=e=>{let{small:s=!1,outline:l=!1,className:a="",...i}=e,c=l?r.bN[i.color]:r.RH[i.color];return(0,n.jsx)(t,{className:"border rounded-full ".concat(s?"py-1 px-3":"py-1.5 px-4"," ").concat(c," ").concat(a),icon:i.icon,label:i.label,small:s})};var c=i},1587:function(e,s,l){"use strict";l.d(s,{Z:function(){return o}});var n=l(5893),r=l(5317),a=l(7294),t=l(9237),i=l(4215),c=l(6914);function o(e){let{icon:s,title:l,main:o=!1,children:d}=e,u=!!a.Children.count(d);return(0,n.jsxs)("section",{className:"".concat(o?"":"pt-6"," mb-6 flex items-center justify-between"),children:[(0,n.jsxs)("div",{className:"flex items-center justify-start",children:[s&&o&&(0,n.jsx)(c.Z,{icon:s,color:"light",className:"mr-3",bg:!0}),s&&!o&&(0,n.jsx)(i.Z,{path:s,className:"mr-2",size:"20"}),(0,n.jsx)("h1",{className:"leading-tight ".concat(o?"text-3xl":"text-2xl"),children:l})]}),d,!u&&(0,n.jsx)(t.Z,{icon:r.Shd,color:"whiteDark"})]})}},5701:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return P}});var n=l(5893),r=l(5317),a=l(2175),t=l(9008),i=l.n(t),c=l(9237),o=l(2115),d=l(5555),u=l(9100),x=l(1702),m=l(8675),h=l(7044),f=l(7767),p=l(2e3),j=l(742),b=l(1587),w=l(2071),N=l(9376),g=l(6315),Z=l(6263);let y=e=>{let{className:s}=e,l=(0,w.C)(e=>e.main.userName);return(0,n.jsx)(u.Z,{className:s,children:(0,n.jsxs)("div",{className:"flex flex-col lg:flex-row items-center justify-around lg:justify-center",children:[(0,n.jsx)(Z.Z,{className:"mb-6 lg:mb-0 lg:mx-12"}),(0,n.jsxs)("div",{className:"space-y-3 text-center md:text-left lg:mx-12",children:[(0,n.jsx)("div",{className:"flex justify-center md:block",children:(0,n.jsx)(a.J9,{initialValues:{notifications:["1"]},onSubmit:e=>alert(JSON.stringify(e,null,2)),children:(0,n.jsx)(a.l0,{children:(0,n.jsx)(N.Z,{type:"switch",label:"Notifications",children:(0,n.jsx)(a.gN,{type:"checkbox",name:"notifications",value:"1"})})})})}),(0,n.jsxs)("h1",{className:"text-2xl",children:["Howdy, ",(0,n.jsx)("b",{children:l}),"!"]}),(0,n.jsxs)("p",{children:["Last login ",(0,n.jsx)("b",{children:"12 mins ago"})," from ",(0,n.jsx)("b",{children:"127.0.0.1"})]}),(0,n.jsx)("div",{className:"flex justify-center md:block",children:(0,n.jsx)(g.Z,{label:"Verified",color:"info",icon:r.UY8})})]})]})})};var v=l(8725);let C=()=>{let e=(0,w.C)(e=>e.main.userName),s=(0,w.C)(e=>e.main.userEmail);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:(0,v.pz)("Profile")})}),(0,n.jsxs)(j.Z,{children:[(0,n.jsx)(b.Z,{icon:r.rI3,title:"Profile",main:!0,children:(0,n.jsx)(c.Z,{href:"https://github.com/justboil/admin-one-react-tailwind",target:"_blank",icon:r.LcO,label:"Star on GitHub",color:"contrast",roundedFull:!0,small:!0})}),(0,n.jsx)(y,{className:"mb-6"}),(0,n.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)(u.Z,{className:"mb-6",children:(0,n.jsx)(h.Z,{label:"Avatar",help:"Max 500kb",children:(0,n.jsx)(f.Z,{label:"Upload",color:"info",icon:r.xyB})})}),(0,n.jsx)(u.Z,{className:"flex-1",hasComponentLayout:!0,children:(0,n.jsx)(a.J9,{initialValues:{name:e,email:s},onSubmit:e=>alert(JSON.stringify(e,null,2)),children:(0,n.jsxs)(a.l0,{className:"flex flex-col flex-1",children:[(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(h.Z,{label:"Name",help:"Required. Your name",labelFor:"name",icons:[r.rI3],children:(0,n.jsx)(a.gN,{name:"name",id:"name",placeholder:"Name"})}),(0,n.jsx)(h.Z,{label:"E-mail",help:"Required. Your e-mail",labelFor:"email",icons:[r.xaU],children:(0,n.jsx)(a.gN,{name:"email",id:"email",placeholder:"E-mail"})})]}),(0,n.jsx)(m.Z,{children:(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(c.Z,{color:"info",type:"submit",label:"Submit"}),(0,n.jsx)(c.Z,{color:"info",label:"Options",outline:!0})]})})]})})})]}),(0,n.jsx)(u.Z,{hasComponentLayout:!0,children:(0,n.jsx)(a.J9,{initialValues:{currentPassword:"",newPassword:"",newPasswordConfirmation:""},onSubmit:e=>alert(JSON.stringify(e,null,2)),children:(0,n.jsxs)(a.l0,{className:"flex flex-col flex-1",children:[(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(h.Z,{label:"Current password",help:"Required. Your current password",labelFor:"currentPassword",icons:[r.AD$],children:(0,n.jsx)(a.gN,{name:"currentPassword",id:"currentPassword",type:"password",autoComplete:"current-password"})}),(0,n.jsx)(d.Z,{}),(0,n.jsx)(h.Z,{label:"New password",help:"Required. New password",labelFor:"newPassword",icons:[r.$_S],children:(0,n.jsx)(a.gN,{name:"newPassword",id:"newPassword",type:"password",autoComplete:"new-password"})}),(0,n.jsx)(h.Z,{label:"Confirm password",help:"Required. New password one more time",labelFor:"newPasswordConfirmation",icons:[r.$_S],children:(0,n.jsx)(a.gN,{name:"newPasswordConfirmation",id:"newPasswordConfirmation",type:"password",autoComplete:"new-password"})})]}),(0,n.jsx)(m.Z,{children:(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(c.Z,{color:"info",type:"submit",label:"Submit"}),(0,n.jsx)(c.Z,{color:"info",label:"Options",outline:!0})]})})]})})})]})]})]})};C.getLayout=function(e){return(0,n.jsx)(p.Z,{children:e})};var P=C}},function(e){e.O(0,[702,664,374,54,774,888,179],function(){return e(e.s=6896)}),_N_E=e.O()}]);