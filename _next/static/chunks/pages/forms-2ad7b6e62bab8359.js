(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{1937:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms",function(){return n(9032)}])},6165:function(e,l,n){"use strict";n.d(l,{Z:function(){return o}});var s=n(5893),t=n(7294),r=n(1664),c=n.n(r),a=n(1637),i=n(606);function o(e){let{label:l,icon:n,iconSize:r,href:o,target:u,type:x,color:d="white",className:h="",asAnchor:m=!1,small:p=!1,outline:j=!1,active:f=!1,disabled:b=!1,roundedFull:Z=!1,onClick:N}=e,g=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",b?"cursor-not-allowed":"cursor-pointer",Z?"rounded-full":"rounded",(0,a.pQ)(d,j,!b,f),h];!l&&n?g.push("p-1"):p?g.push("text-sm",Z?"px-3 py-1":"p-1"):g.push("py-2",Z?"px-6":"px-3"),b&&g.push(j?"opacity-50":"opacity-70");let y=g.join(" "),w=(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsx)(i.Z,{path:n,size:r}),l&&(0,s.jsx)("span",{className:p&&n?"px-1":"px-2",children:l})]});return o&&!b?(0,s.jsx)(c(),{href:o,target:u,className:y,children:w}):t.createElement(m?"a":"button",{className:y,type:null!=x?x:"button",target:u,disabled:b,onClick:N},w)}},8951:function(e,l,n){"use strict";var s=n(5893),t=n(7294);let r=e=>{let{type:l="justify-start",mb:n="-mb-3",classAddon:r="mr-3 last:mr-0 mb-3",noWrap:c=!1,children:a}=e;return(0,s.jsx)("div",{className:"flex items-center ".concat(l," ").concat(n," ").concat(c?"flex-nowrap":"flex-wrap"),children:t.Children.map(a,e=>e?(0,t.cloneElement)(e,{className:"".concat(r," ").concat(e.props.className)}):null)})};l.Z=r},3891:function(e,l,n){"use strict";n.d(l,{Z:function(){return a}});var s=n(5893),t=n(7294),r=n(1773),c=n(7649);function a(e){let{rounded:l="rounded-2xl",flex:n="flex-col",className:a="",hasComponentLayout:i=!1,hasTable:o=!1,isHoverable:u=!1,isModal:x=!1,children:d,footer:h,onClick:m}=e,p=["bg-white flex",a,l,n,x?"dark:bg-slate-900":"dark:bg-slate-900/70"];return u&&p.push("hover:shadow-lg transition-shadow duration-500"),t.createElement("div",{className:p.join(" "),onClick:m},i?d:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{noPadding:o,children:d}),h&&(0,s.jsx)(c.Z,{children:h})]}))}},1773:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var s=n(5893);function t(e){let{noPadding:l=!1,className:n,children:t}=e;return(0,s.jsx)("div",{className:"flex-1 ".concat(l?"":"p-6"," ").concat(n),children:t})}n(7294)},7649:function(e,l,n){"use strict";n.d(l,{Z:function(){return t}});var s=n(5893);function t(e){let{className:l,children:n}=e;return(0,s.jsx)("footer",{className:"p-6 ".concat(l),children:n})}n(7294)},9165:function(e,l,n){"use strict";var s=n(5893);let t=e=>(0,s.jsxs)("label",{className:"".concat(e.type," ").concat(e.className),children:[e.children,(0,s.jsx)("span",{className:"check"}),(0,s.jsx)("span",{className:"pl-2",children:e.label})]});l.Z=t},3142:function(e,l,n){"use strict";var s=n(5893),t=n(7294);let r=e=>(0,s.jsx)("div",{className:"flex justify-start flex-wrap -mb-3 ".concat(e.isColumn?"flex-col":""),children:t.Children.map(e.children,e=>(0,t.cloneElement)(e,{className:"mr-6 mb-3 last:mr-0 ".concat(e.props.className)}))});l.Z=r},8823:function(e,l,n){"use strict";var s=n(5893),t=n(7294),r=n(6165);let c=e=>{let{label:l,icon:n,accept:c,color:a,isRoundIcon:i}=e,[o,u]=(0,t.useState)(null),x=e=>{u(e.currentTarget.files[0])},d=!i&&o;return(0,s.jsxs)("div",{className:"flex items-stretch justify-start relative",children:[(0,s.jsxs)("label",{className:"inline-flex",children:[(0,s.jsx)(r.Z,{className:"".concat(i?"w-12 h-12":""," ").concat(d?"rounded-r-none":""),iconSize:i?24:void 0,label:i?null:l,icon:n,color:a,roundedFull:i,asAnchor:!0}),(0,s.jsx)("input",{type:"file",className:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",onChange:x,accept:c})]}),d&&(0,s.jsx)("div",{className:"px-4 py-2 max-w-full flex-grow-0 overflow-x-hidden bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r",children:(0,s.jsx)("span",{className:"text-ellipsis max-w-full line-clamp-1",children:o.name})})]})};l.Z=c},1058:function(e,l,n){"use strict";n.d(l,{Z:function(){return c}});var s=n(5893);n(7294);var t=n(1637),r=n(606);function c(e){let{icon:l,color:n,w:c="w-12",h:a="h-12",bg:i=!1,className:o=""}=e,u=i?t.RH[n]:"".concat(t.uK[n]," bg-gray-50 dark:bg-slate-800");return(0,s.jsx)(r.Z,{path:l,w:c,h:a,size:"24",className:"rounded-full ".concat(u," ").concat(o)})}},1367:function(e,l,n){"use strict";var s=n(5893);n(7294);let t=e=>{let{custom:l=!1,first:n=!1,last:t=!1,children:r}=e,c="-my-6";return n?c="-mb-6":t&&(c="-mt-6"),(0,s.jsxs)("section",{className:"py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center ".concat(c),children:[l&&r,!l&&(0,s.jsx)("h1",{className:"text-2xl text-gray-500 dark:text-slate-400",children:r})]})};l.Z=t},3813:function(e,l,n){"use strict";n.d(l,{Z:function(){return o}});var s=n(5893),t=n(5317),r=n(7294),c=n(6165),a=n(606),i=n(1058);function o(e){let{icon:l,title:n,main:o=!1,children:u}=e,x=!!r.Children.count(u);return(0,s.jsxs)("section",{className:"".concat(o?"":"pt-6"," mb-6 flex items-center justify-between"),children:[(0,s.jsxs)("div",{className:"flex items-center justify-start",children:[l&&o&&(0,s.jsx)(i.Z,{icon:l,color:"light",className:"mr-3",bg:!0}),l&&!o&&(0,s.jsx)(a.Z,{path:l,className:"mr-2",size:"20"}),(0,s.jsx)("h1",{className:"leading-tight ".concat(o?"text-3xl":"text-2xl"),children:n})]}),u,!x&&(0,s.jsx)(c.Z,{icon:t.Shd,color:"whiteDark"})]})}},9032:function(e,l,n){"use strict";n.r(l);var s=n(5893),t=n(5317),r=n(2175),c=n(9008),a=n.n(c),i=n(6165),o=n(8951),u=n(8465),x=n(3891),d=n(9165),h=n(3142),m=n(4463),p=n(8823),j=n(1976),f=n(5301),b=n(1367),Z=n(3813),N=n(4285);let g=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a(),{children:(0,s.jsx)("title",{children:(0,N.p)("Forms")})}),(0,s.jsxs)(f.Z,{children:[(0,s.jsx)(Z.Z,{icon:t.fmz,title:"Formik forms example",main:!0,children:(0,s.jsx)(i.Z,{href:"https://github.com/justboil/admin-one-react-tailwind",target:"_blank",icon:t.LcO,label:"Star on GitHub",color:"contrast",roundedFull:!0,small:!0})}),(0,s.jsx)(x.Z,{children:(0,s.jsx)(r.J9,{initialValues:{fullname:"John Doe",email:"john.doe@example.com",phone:"",color:"green",textarea:"Hello"},onSubmit:e=>alert(JSON.stringify(e,null,2)),children:(0,s.jsxs)(r.l0,{children:[(0,s.jsxs)(m.Z,{label:"Grouped with icons",icons:[t.rI3,t.xaU],children:[(0,s.jsx)(r.gN,{name:"fullname",placeholder:"Full name"}),(0,s.jsx)(r.gN,{type:"email",name:"email",placeholder:"Email"})]}),(0,s.jsx)(m.Z,{label:"With help line and labelFor",labelFor:"phone",help:"Help line comes here",children:(0,s.jsx)(r.gN,{name:"phone",placeholder:"Phone",id:"phone"})}),(0,s.jsx)(m.Z,{label:"Dropdown",labelFor:"color",children:(0,s.jsxs)(r.gN,{name:"color",id:"color",component:"select",children:[(0,s.jsx)("option",{value:"red",children:"Red"}),(0,s.jsx)("option",{value:"green",children:"Green"}),(0,s.jsx)("option",{value:"blue",children:"Blue"})]})}),(0,s.jsx)(u.Z,{}),(0,s.jsx)(m.Z,{label:"Textarea",hasTextareaHeight:!0,children:(0,s.jsx)(r.gN,{name:"textarea",as:"textarea",placeholder:"Your text here"})}),(0,s.jsx)(u.Z,{}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(i.Z,{type:"submit",color:"info",label:"Submit"}),(0,s.jsx)(i.Z,{type:"reset",color:"info",outline:!0,label:"Reset"})]})]})})})]}),(0,s.jsx)(b.Z,{children:"Custom elements"}),(0,s.jsx)(f.Z,{children:(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(r.J9,{initialValues:{checkboxes:["lorem"],switches:["lorem"],radio:"lorem"},onSubmit:()=>null,children:(0,s.jsxs)(r.l0,{children:[(0,s.jsx)(m.Z,{label:"Checkbox",children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(d.Z,{type:"checkbox",label:"Lorem",children:(0,s.jsx)(r.gN,{type:"checkbox",name:"checkboxes",value:"lorem"})}),(0,s.jsx)(d.Z,{type:"checkbox",label:"Ipsum",children:(0,s.jsx)(r.gN,{type:"checkbox",name:"checkboxes",value:"ipsum"})}),(0,s.jsx)(d.Z,{type:"checkbox",label:"Dolore",children:(0,s.jsx)(r.gN,{type:"checkbox",name:"checkboxes",value:"dolore"})})]})}),(0,s.jsx)(u.Z,{}),(0,s.jsx)(m.Z,{label:"Radio",children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(d.Z,{type:"radio",label:"Lorem",children:(0,s.jsx)(r.gN,{type:"radio",name:"radio",value:"lorem"})}),(0,s.jsx)(d.Z,{type:"radio",label:"Ipsum",children:(0,s.jsx)(r.gN,{type:"radio",name:"radio",value:"ipsum"})})]})}),(0,s.jsx)(u.Z,{}),(0,s.jsx)(m.Z,{label:"Switch",children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(d.Z,{type:"switch",label:"Lorem",children:(0,s.jsx)(r.gN,{type:"checkbox",name:"switches",value:"lorem"})}),(0,s.jsx)(d.Z,{type:"switch",label:"Ipsum",children:(0,s.jsx)(r.gN,{type:"checkbox",name:"switches",value:"ipsum"})})]})})]})}),(0,s.jsx)(u.Z,{}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(p.Z,{label:"Upload",color:"info",icon:t.xyB})})]})})]});g.getLayout=function(e){return(0,s.jsx)(j.Z,{children:e})},l.default=g}},function(e){e.O(0,[702,664,374,131,774,888,179],function(){return e(e.s=1937)}),_N_E=e.O()}]);