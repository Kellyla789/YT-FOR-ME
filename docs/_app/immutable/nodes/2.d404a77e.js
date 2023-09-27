import{s as te,f as k,a as v,g as p,h as M,d as u,c as _,j as w,i as L,w as g,r as X,G as A,l as U,m as z,n as W,o as ae}from"../chunks/scheduler.5fb839d4.js";import{S as ne,i as le,b as I,d as D,m as y,a as V,t as j,e as T}from"../chunks/index.4c5bc23c.js";function x(f){let t,a;return{c(){t=k("img"),this.h()},l(e){t=p(e,"IMG",{src:!0,alt:!0}),this.h()},h(){A(t.src,a=f[0])||w(t,"src",a),w(t,"alt","")},m(e,n){L(e,t,n)},p(e,n){n&1&&!A(t.src,a=e[0])&&w(t,"src",a)},d(e){e&&u(t)}}}function ee(f){let t,a;return{c(){t=k("img"),this.h()},l(e){t=p(e,"IMG",{src:!0,alt:!0}),this.h()},h(){A(t.src,a=f[3])||w(t,"src",a),w(t,"alt","")},m(e,n){L(e,t,n)},p(e,n){n&8&&!A(t.src,a=e[3])&&w(t,"src",a)},d(e){e&&u(t)}}}function ie(f){let t,a,e;return{c(){t=k("div"),a=v(),e=k("div"),this.h()},l(n){t=p(n,"DIV",{class:!0}),M(t).forEach(u),a=_(n),e=p(n,"DIV",{class:!0}),M(e).forEach(u),this.h()},h(){w(t,"class","long-text bg-slate-400 mb-4 svelte-dhk5bo"),w(e,"class","text bg-slate-400 svelte-dhk5bo")},m(n,m){L(n,t,m),L(n,a,m),L(n,e,m)},p:X,d(n){n&&(u(t),u(a),u(e))}}}function se(f){let t,a,e,n,m,c,d;return{c(){t=k("div"),a=U(f[1]),e=v(),n=k("div"),m=U(f[2]),c=U(" | "),d=U(f[4]),this.h()},l(i){t=p(i,"DIV",{class:!0});var l=M(t);a=z(l,f[1]),l.forEach(u),e=_(i),n=p(i,"DIV",{class:!0});var b=M(n);m=z(b,f[2]),c=z(b," | "),d=z(b,f[4]),b.forEach(u),this.h()},h(){w(t,"class","long-text mb-4 svelte-dhk5bo"),w(n,"class","text svelte-dhk5bo")},m(i,l){L(i,t,l),g(t,a),L(i,e,l),L(i,n,l),g(n,m),g(n,c),g(n,d)},p(i,l){l&2&&W(a,i[1]),l&4&&W(m,i[2]),l&16&&W(d,i[4])},d(i){i&&(u(t),u(e),u(n))}}}function re(f){let t,a,e,n,m,c,d,i=!f[5]&&x(f),l=!f[5]&&ee(f);function b(h,$){return h[5]?ie:se}let S=b(f),o=S(f);return{c(){t=k("section"),a=k("div"),i&&i.c(),e=v(),n=k("div"),m=k("div"),l&&l.c(),c=v(),d=k("div"),o.c(),this.h()},l(h){t=p(h,"SECTION",{});var $=M(t);a=p($,"DIV",{class:!0});var J=M(a);i&&i.l(J),J.forEach(u),e=_($),n=p($,"DIV",{class:!0});var E=M(n);m=p(E,"DIV",{class:!0});var N=M(m);l&&l.l(N),N.forEach(u),c=_(E),d=p(E,"DIV",{});var P=M(d);o.l(P),P.forEach(u),E.forEach(u),$.forEach(u),this.h()},h(){w(a,"class","thumbnail m-4 svelte-dhk5bo"),w(m,"class","avatar svelte-dhk5bo"),w(n,"class","flex gap-4 mx-4")},m(h,$){L(h,t,$),g(t,a),i&&i.m(a,null),g(t,e),g(t,n),g(n,m),l&&l.m(m,null),g(n,c),g(n,d),o.m(d,null)},p(h,[$]){h[5]?i&&(i.d(1),i=null):i?i.p(h,$):(i=x(h),i.c(),i.m(a,null)),h[5]?l&&(l.d(1),l=null):l?l.p(h,$):(l=ee(h),l.c(),l.m(m,null)),S===(S=b(h))&&o?o.p(h,$):(o.d(1),o=S(h),o&&(o.c(),o.m(d,null)))},i:X,o:X,d(h){h&&u(t),i&&i.d(),l&&l.d(),o.d()}}}function fe(f,t,a){let{thumbnail:e=""}=t,{title:n=""}=t,{creator:m=""}=t,{avatar:c=""}=t,{views:d=""}=t,{loading:i=!0}=t;return f.$$set=l=>{"thumbnail"in l&&a(0,e=l.thumbnail),"title"in l&&a(1,n=l.title),"creator"in l&&a(2,m=l.creator),"avatar"in l&&a(3,c=l.avatar),"views"in l&&a(4,d=l.views),"loading"in l&&a(5,i=l.loading)},[e,n,m,c,d,i]}class G extends ne{constructor(t){super(),le(this,t,fe,re,te,{thumbnail:0,title:1,creator:2,avatar:3,views:4,loading:5})}}function me(f){let t,a,e,n,m,c,d,i,l,b,S,o,h,$,J,E,N,P,B,q,F,C,K,O,Q,H,R;return n=new G({props:{title:"Underwater Lives: Jellyfish",thumbnail:"jellyfish.jpg",avatar:"bell-solid.svg",creator:"Ocean Discovery",views:"135k",loading:f[0]}}),c=new G({props:{title:"How To Paint Landscapes",thumbnail:"mountain.jpg",avatar:"bell-solid.svg",creator:"Robert Lasso",views:"102k",loading:f[0]}}),i=new G({}),b=new G({}),o=new G({}),$=new G({}),E=new G({}),P=new G({}),q=new G({}),C=new G({}),O=new G({}),H=new G({}),{c(){t=k("p"),a=v(),e=k("div"),I(n.$$.fragment),m=v(),I(c.$$.fragment),d=v(),I(i.$$.fragment),l=v(),I(b.$$.fragment),S=v(),I(o.$$.fragment),h=v(),I($.$$.fragment),J=v(),I(E.$$.fragment),N=v(),I(P.$$.fragment),B=v(),I(q.$$.fragment),F=v(),I(C.$$.fragment),K=v(),I(O.$$.fragment),Q=v(),I(H.$$.fragment),this.h()},l(s){t=p(s,"P",{}),M(t).forEach(u),a=_(s),e=p(s,"DIV",{class:!0});var r=M(e);D(n.$$.fragment,r),m=_(r),D(c.$$.fragment,r),d=_(r),D(i.$$.fragment,r),l=_(r),D(b.$$.fragment,r),S=_(r),D(o.$$.fragment,r),h=_(r),D($.$$.fragment,r),J=_(r),D(E.$$.fragment,r),N=_(r),D(P.$$.fragment,r),B=_(r),D(q.$$.fragment,r),F=_(r),D(C.$$.fragment,r),K=_(r),D(O.$$.fragment,r),Q=_(r),D(H.$$.fragment,r),r.forEach(u),this.h()},h(){w(e,"class","flex subscription justify-between px-8 flex-wrap svelte-1xihivh")},m(s,r){L(s,t,r),L(s,a,r),L(s,e,r),y(n,e,null),g(e,m),y(c,e,null),g(e,d),y(i,e,null),g(e,l),y(b,e,null),g(e,S),y(o,e,null),g(e,h),y($,e,null),g(e,J),y(E,e,null),g(e,N),y(P,e,null),g(e,B),y(q,e,null),g(e,F),y(C,e,null),g(e,K),y(O,e,null),g(e,Q),y(H,e,null),R=!0},p(s,[r]){const Y={};r&1&&(Y.loading=s[0]),n.$set(Y);const Z={};r&1&&(Z.loading=s[0]),c.$set(Z)},i(s){R||(V(n.$$.fragment,s),V(c.$$.fragment,s),V(i.$$.fragment,s),V(b.$$.fragment,s),V(o.$$.fragment,s),V($.$$.fragment,s),V(E.$$.fragment,s),V(P.$$.fragment,s),V(q.$$.fragment,s),V(C.$$.fragment,s),V(O.$$.fragment,s),V(H.$$.fragment,s),R=!0)},o(s){j(n.$$.fragment,s),j(c.$$.fragment,s),j(i.$$.fragment,s),j(b.$$.fragment,s),j(o.$$.fragment,s),j($.$$.fragment,s),j(E.$$.fragment,s),j(P.$$.fragment,s),j(q.$$.fragment,s),j(C.$$.fragment,s),j(O.$$.fragment,s),j(H.$$.fragment,s),R=!1},d(s){s&&(u(t),u(a),u(e)),T(n),T(c),T(i),T(b),T(o),T($),T(E),T(P),T(q),T(C),T(O),T(H)}}}function ue(f,t,a){let e=!0;return ae(()=>{setTimeout(()=>{a(0,e=!1)},5e3)}),[e]}class ce extends ne{constructor(t){super(),le(this,t,ue,me,te,{})}}export{ce as component};
