var E=Object.defineProperty;var I=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(I(t,typeof e!="symbol"?e+"":e,n),n);import{H as $,r as c,I as p,h as O,d as b,J as C,K as v,L,A as x,M,N,O as w,P,Q as R,R as j,S as A,T as B}from"./scheduler.5fb839d4.js";const u=new Set;let d;function z(){d={r:0,c:[],p:d}}function D(){d.r||$(d.c),d=d.p}function H(t,e){t&&t.i&&(u.delete(t),t.i(e))}function F(t,e,n,a){if(t&&t.o){if(u.has(t))return;u.add(t),d.c.push(()=>{u.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function G(t){t&&t.c()}function W(t,e){t&&t.l(e)}function J(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),x(()=>{const f=t.$$.on_mount.map(P).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(x)}function K(t,e){const n=t.$$;n.fragment!==null&&(M(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){t.$$.dirty[0]===-1&&(R.push(t),j(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,a,i,f,h,S=[-1]){const o=N;w(t);const s=t.$$={fragment:null,ctx:[],props:f,update:c,not_equal:i,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:p(),dirty:S,skip_bound:!1,root:e.target||o.$$.root};h&&h(s.root);let l=!1;if(s.ctx=n?n(t,e.props||{},(r,g,...m)=>{const y=m.length?m[0]:g;return s.ctx&&i(s.ctx[r],s.ctx[r]=y)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](y),l&&Q(t,r)),g}):[],s.update(),l=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){A();const r=O(e.target);s.fragment&&s.fragment.l(r),r.forEach(b)}else s.fragment&&s.fragment.c();e.intro&&H(t.$$.fragment),J(t,e.target,e.anchor),B(),C()}w(o)}class Y{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){K(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!L(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const T="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(T);export{Y as S,H as a,G as b,D as c,W as d,K as e,z as g,X as i,J as m,F as t};
