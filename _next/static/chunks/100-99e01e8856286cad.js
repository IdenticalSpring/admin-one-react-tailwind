"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{8100:function(e,n,t){t.d(n,{ZP:function(){return Z}});var r,i=t(7294);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function u(e,n,t,r){return new(t||(t=Promise))(function(i,u){function o(e){try{c(r.next(e))}catch(e){u(e)}}function a(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){var n;e.done?i(e.value):((n=e.value)instanceof t?n:new t(function(e){e(n)})).then(o,a)}c((r=r.apply(e,n||[])).next())})}function o(e,n){var t,r,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=n.call(e,o)}catch(e){u=[6,e],r=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var a=function(){},c=a(),f=Object,s=function(e){return e===c},l=function(e){return"function"==typeof e},d=function(e,n){return f.assign({},e,n)},v="undefined",h=function(){return typeof window!=v},g=new WeakMap,p=0,b=function(e){var n,t,r=typeof e,i=e&&e.constructor,u=i==Date;if(f(e)!==e||u||i==RegExp)n=u?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(n=g.get(e))return n;if(n=++p+"~",g.set(e,n),i==Array){for(t=0,n="@";t<e.length;t++)n+=b(e[t])+",";g.set(e,n)}if(i==f){n="#";for(var o=f.keys(e).sort();!s(t=o.pop());)s(e[t])||(n+=t+":"+b(e[t])+",");g.set(e,n)}}return n},y=!0,w=h(),m=typeof document!=v,E=w&&window.addEventListener?window.addEventListener.bind(window):a,R=m?document.addEventListener.bind(document):a,k=w&&window.removeEventListener?window.removeEventListener.bind(window):a,O=m?document.removeEventListener.bind(document):a,S={initFocus:function(e){return R("visibilitychange",e),E("focus",e),function(){O("visibilitychange",e),k("focus",e)}},initReconnect:function(e){var n=function(){y=!0,e()},t=function(){y=!1};return E("online",n),E("offline",t),function(){k("online",n),k("offline",t)}}},T=!h()||"Deno"in window,V=T?i.useEffect:i.useLayoutEffect,C="undefined"!=typeof navigator&&navigator.connection,x=!T&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),D=function(e){if(l(e))try{e=e()}catch(n){e=""}var n=[].concat(e),t=(e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?b(e):"")?"$swr$"+e:"";return[e,n,t]},I=new WeakMap,L=function(e,n,t,r,i,u,o){void 0===o&&(o=!0);var a=I.get(e),c=a[0],f=a[1],s=a[3],l=c[n],d=f[n];if(o&&d)for(var v=0;v<d.length;++v)d[v](t,r,i);return u&&(delete s[n],l&&l[0])?l[0](2).then(function(){return e.get(n)}):e.get(n)},P=0,F=function(){return++P},A=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return u(void 0,void 0,void 0,function(){var n,t,r,i,u,a,f,v,h,g,p,b,y,w,m,E,R,k,O,S;return o(this,function(o){switch(o.label){case 0:if(n=e[0],t=e[1],r=e[2],a=!!s((u="boolean"==typeof(i=e[3])?{revalidate:i}:i||{}).populateCache)||u.populateCache,f=!1!==u.revalidate,v=!1!==u.rollbackOnError,h=u.optimisticData,p=(g=D(t))[0],b=g[2],!p)return[2];if(y=I.get(n)[2],e.length<3)return[2,L(n,p,n.get(p),c,c,f,!0)];if(w=r,E=F(),y[p]=[E,0],R=!s(h),k=n.get(p),R&&(O=l(h)?h(k):h,n.set(p,O),L(n,p,O)),l(w))try{w=w(n.get(p))}catch(e){m=e}if(!(w&&l(w.then)))return[3,2];return[4,w.catch(function(e){m=e})];case 1:if(w=o.sent(),E!==y[p][0]){if(m)throw m;return[2,w]}m&&R&&v&&(a=!0,w=k,n.set(p,k)),o.label=2;case 2:return a&&(m||(l(a)&&(w=a(w,k)),n.set(p,w)),n.set(b,d(n.get(b),{error:m}))),y[p][1]=F(),[4,L(n,p,w,m,c,f,!!a)];case 3:if(S=o.sent(),m)throw m;return[2,a?S:w]}})})},M=function(e,n){for(var t in e)e[t][0]&&e[t][0](n)},N=function(e,n){if(!I.has(e)){var t=d(S,n),r={},i=A.bind(c,e),u=a;if(I.set(e,[r,{},{},{},i]),!T){var o=t.initFocus(setTimeout.bind(c,M.bind(c,r,0))),f=t.initReconnect(setTimeout.bind(c,M.bind(c,r,1)));u=function(){o&&o(),f&&f(),I.delete(e)}}return[e,i,u]}return[e,I.get(e)[4]]},W=N(new Map),_=W[0],q=d({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:function(e,n,t,r,i){var u=t.errorRetryCount,o=i.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*t.errorRetryInterval;(s(u)||!(o>u))&&setTimeout(r,a,i)},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:x?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:x?5e3:3e3,compare:function(e,n){return b(e)==b(n)},isPaused:function(){return!1},cache:_,mutate:W[1],fallback:{}},{isOnline:function(){return y},isVisible:function(){var e=m&&document.visibilityState;return s(e)||"hidden"!==e}}),J=function(e,n){var t=d(e,n);if(n){var r=e.use,i=e.fallback,u=n.use,o=n.fallback;r&&u&&(t.use=r.concat(u)),i&&o&&(t.fallback=d(i,o))}return t},$=(0,i.createContext)({}),j=function(e,n){var t=(0,i.useState)({})[1],r=(0,i.useRef)(e),u=(0,i.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,i.useCallback)(function(e){var i=!1,o=r.current;for(var a in e){var c=a;o[c]!==e[c]&&(o[c]=e[c],u.current[c]&&(i=!0))}i&&!n.current&&t({})},[]);return V(function(){r.current=e}),[r,u.current,o]},G=function(e,n,t){var r=n[e]||(n[e]=[]);return r.push(t),function(){var e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}},H={dedupe:!0};f.defineProperty(function(e){var n=e.value,t=J((0,i.useContext)($),n),r=n&&n.provider,u=(0,i.useState)(function(){return r?N(r(t.cache||_),n):c})[0];return u&&(t.cache=u[0],t.mutate=u[1]),V(function(){return u?u[2]:c},[]),(0,i.createElement)($.Provider,d(e,{value:t}))},"default",{value:q});var Z=(r=function(e,n,t){var r=t.cache,a=t.compare,f=t.fallbackData,g=t.suspense,p=t.revalidateOnMount,b=t.refreshInterval,y=t.refreshWhenHidden,w=t.refreshWhenOffline,m=I.get(r),E=m[0],R=m[1],k=m[2],O=m[3],S=D(e),C=S[0],x=S[1],P=S[2],M=(0,i.useRef)(!1),N=(0,i.useRef)(!1),W=(0,i.useRef)(C),_=(0,i.useRef)(n),q=(0,i.useRef)(t),J=function(){return q.current},$=function(){return J().isVisible()&&J().isOnline()},Z=function(e){return r.set(P,d(r.get(P),e))},z=r.get(C),B=s(f)?t.fallback[C]:f,K=s(z)?B:z,Q=r.get(P)||{},U=Q.error,X=!M.current,Y=function(){return X&&!s(p)?p:!J().isPaused()&&(g?!s(K)&&t.revalidateIfStale:s(K)||t.revalidateIfStale)},ee=!!C&&!!n&&(!!Q.isValidating||X&&Y()),en=j({data:K,error:U,isValidating:ee},N),et=en[0],er=en[1],ei=en[2],eu=(0,i.useCallback)(function(e){return u(void 0,void 0,void 0,function(){var n,i,u,f,d,v,h,g,p,b,y,w,m;return o(this,function(o){switch(o.label){case 0:if(n=_.current,!C||!n||N.current||J().isPaused())return[2,!1];f=!0,d=e||{},v=!O[C]||!d.dedupe,h=function(){return!N.current&&C===W.current&&M.current},g=function(){var e=O[C];e&&e[1]===u&&delete O[C]},p={isValidating:!1},b=function(){Z({isValidating:!1}),h()&&ei(p)},Z({isValidating:!0}),ei({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),v&&(L(r,C,et.current.data,et.current.error,!0),t.loadingTimeout&&!r.get(C)&&setTimeout(function(){f&&h()&&J().onLoadingSlow(C,t)},t.loadingTimeout),O[C]=[n.apply(void 0,x),F()]),i=(m=O[C])[0],u=m[1],[4,i];case 2:if(i=o.sent(),v&&setTimeout(g,t.dedupingInterval),!O[C]||O[C][1]!==u)return v&&h()&&J().onDiscarded(C),[2,!1];if(Z({error:c}),p.error=c,!s(y=k[C])&&(u<=y[0]||u<=y[1]||0===y[1]))return b(),v&&h()&&J().onDiscarded(C),[2,!1];return a(et.current.data,i)?p.data=et.current.data:p.data=i,a(r.get(C),i)||r.set(C,i),v&&h()&&J().onSuccess(i,C,t),[3,4];case 3:return w=o.sent(),g(),!J().isPaused()&&(Z({error:w}),p.error=w,v&&h()&&(J().onError(w,C,t),("boolean"==typeof t.shouldRetryOnError&&t.shouldRetryOnError||l(t.shouldRetryOnError)&&t.shouldRetryOnError(w))&&$()&&J().onErrorRetry(w,C,t,eu,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return f=!1,b(),h()&&v&&L(r,C,p.data,p.error,!1),[2,!0]}})})},[C]),eo=(0,i.useCallback)(A.bind(c,r,function(){return W.current}),[]);if(V(function(){_.current=n,q.current=t}),V(function(){if(C){var e=C!==W.current,n=eu.bind(c,H),t=0,r=G(C,R,function(e,n,t){ei(d({error:n,isValidating:t},a(et.current.data,e)?c:{data:e}))}),i=G(C,E,function(e){if(0==e){var r=Date.now();J().revalidateOnFocus&&r>t&&$()&&(t=r+J().focusThrottleInterval,n())}else if(1==e)J().revalidateOnReconnect&&$()&&n();else if(2==e)return eu()});return N.current=!1,W.current=C,M.current=!0,e&&ei({data:K,error:U,isValidating:ee}),Y()&&(s(K)||T?n():h()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(n):setTimeout(n,1)),function(){N.current=!0,r(),i()}}},[C,eu]),V(function(){var e;function n(){var n=l(b)?b(K):b;n&&-1!==e&&(e=setTimeout(t,n))}function t(){!et.current.error&&(y||J().isVisible())&&(w||J().isOnline())?eu(H).then(n):n()}return n(),function(){e&&(clearTimeout(e),e=-1)}},[b,y,w,eu]),(0,i.useDebugValue)(K),g&&s(K)&&C)throw _.current=n,q.current=t,N.current=!1,s(U)?eu(H):U;return{mutate:eo,get data(){return er.data=!0,K},get error(){return er.error=!0,U},get isValidating(){return er.isValidating=!0,ee}}},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=d(q,(0,i.useContext)($)),u=l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],o=u[0],a=u[1],c=J(t,u[2]),f=r,s=c.use;if(s)for(var v=s.length;v-- >0;)f=s[v](f);return f(o,a||c.fetcher,c)})}}]);