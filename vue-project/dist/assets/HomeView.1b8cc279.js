import{_ as O,o,c as n,d as P,u as Z,r as I,w as ee,a as N,b as L,e,f as p,t as v,g as _,h as x,i as S,j as w,k as te,p as D,l as F,m as se,n as oe,T as ne,F as ce}from"./index.8257e940.js";const ae="/assets/pexels-reginaldo-g-martins-3744466.807e83c8.jpg";const le={},ie={src:ae};function _e(s,l){return o(),n("img",ie)}const de=O(le,[["render",_e],["__scopeId","data-v-10d8ba6f"]]),T=s=>(D("data-v-cfd2ed9c"),s=s(),F(),s),re={class:"content flow"},ue=T(()=>e("h1",{class:"title"},"FEATURED PRODUCTS",-1)),pe={class:"offers-grid"},ve={class:"card"},fe=["src"],me={class:"product-name"},he={class:"product-price"},$e={class:"details"},ge={class:"tooltip addItem"},xe=T(()=>e("i",{class:"fa-solid fa-plus"},null,-1)),ke=[xe],Ie=T(()=>e("span",{class:"tooltiptext"},"ADD TO CART",-1)),Te={key:0},be={key:1,class:"offer-expired"},ye={class:"card"},Ee=["src"],Ce={class:"product-name"},Oe={class:"product-price"},Se={class:"details"},we={class:"tooltip addItem"},De=T(()=>e("i",{class:"fa-solid fa-plus"},null,-1)),Fe=[De],Re=T(()=>e("span",{class:"tooltiptext"},"ADD TO CART",-1)),Ae={key:0},Ne={key:1,class:"offer-expired"},Pe={class:"card"},Le=["src"],Ue={class:"product-name"},Me={class:"product-price"},Ve={class:"details"},Be={class:"tooltip addItem"},Ge=T(()=>e("i",{class:"fa-solid fa-plus"},null,-1)),je=[Ge],ze=T(()=>e("span",{class:"tooltiptext"},"ADD TO CART",-1)),We={key:0},He={key:1,class:"offer-expired"},Ye=P({__name:"FeaturedItems",setup(s){const l=Z(),d=te(),c=I(null),r=I(null),u=I(null),f=I(0),m=I(0),h=I(0);function b(){var a,$;const i=l.items,t=[];for(;t.length<3;){const k=i[Math.floor(Math.random()*i.length)];t.includes(k)||t.push(k)}return{name:t[0].name,model:t[0].model,price:+(($=(a=t[0])==null?void 0:a.raw_price)!=null?$:0)*1.2,image_url:t[0].image_url}}function M(){f.value=7200,m.value=7200,h.value=7200,c.value=b(),r.value=b(),u.value=b()}const y=(i,t)=>{const a=Date.now(),$=a+t;i.value=Math.floor(($-a)/1e3);const k=setInterval(()=>{const E=Math.floor(($-Date.now())/1e3);E<=0?(clearInterval(k),i.value=0):i.value=E},1e3)};ee([f,m,h],([i,t,a])=>{i===0&&t===0&&a===0&&M()});function A(i){const t=Math.floor(i/60).toString().padStart(2,"0"),a=(i%60).toString().padStart(2,"0");return`${t}:${a}`}const Y=N(()=>c.value?c.value.price.toFixed(2):""),q=N(()=>r.value?r.value.price.toFixed(2):""),J=N(()=>u.value?u.value.price.toFixed(2):"");function K(){c.value=b(),f.value=7200,y(f,7200)}function Q(){r.value=b(),m.value=7200,y(m,7200)}function X(){u.value=b(),h.value=7200,y(h,7200)}return M(),y(f,7200),y(m,7200),y(h,7200),(i,t)=>{var $,k,E,V,B,G,j,z,W;const a=L("router-link");return o(),n("div",re,[ue,e("div",pe,[e("div",ve,[e("img",{src:($=c.value)==null?void 0:$.image_url,onClick:t[0]||(t[0]=C=>{var g;return p(d).push(`/items/${(g=c.value)==null?void 0:g.model}`)})},null,8,fe),e("p",me,v((k=c.value)==null?void 0:k.name),1),e("p",he,"$ "+v(p(Y)),1),e("div",$e,[_(a,{to:{name:"ItemDetails",params:{model:(E=c.value)==null?void 0:E.model}}},{default:x(()=>[S("FULL DETAILS")]),_:1},8,["to"]),e("div",ge,[c.value&&f.value>0?(o(),n("button",{key:0,onClick:t[1]||(t[1]=C=>p(l).addItemToCart(c.value))},ke)):w("",!0),Ie])]),f.value>0?(o(),n("div",Te,v(A(f.value)),1)):(o(),n("div",be,"Offer Expired")),e("button",{onClick:K,class:"btn fun centered"},"GENERATE NEW OFFER")]),e("div",ye,[e("img",{src:(V=r.value)==null?void 0:V.image_url,onClick:t[2]||(t[2]=C=>{var g;return p(d).push(`/items/${(g=r.value)==null?void 0:g.model}`)})},null,8,Ee),e("p",Ce,v((B=r.value)==null?void 0:B.name),1),e("p",Oe,"$ "+v(p(q)),1),e("div",Se,[_(a,{to:{name:"ItemDetails",params:{model:(G=r.value)==null?void 0:G.model}}},{default:x(()=>[S("FULL DETAILS")]),_:1},8,["to"]),e("div",we,[r.value&&m.value>0?(o(),n("button",{key:0,onClick:t[3]||(t[3]=C=>p(l).addItemToCart(r.value))},Fe)):w("",!0),Re])]),m.value>0?(o(),n("div",Ae,v(A(m.value)),1)):(o(),n("div",Ne,"Offer Expired")),e("button",{onClick:Q,class:"btn fun centered"},"GENERATE NEW OFFER")]),e("div",Pe,[e("img",{src:(j=u.value)==null?void 0:j.image_url,onClick:t[4]||(t[4]=C=>{var g;return p(d).push(`/items/${(g=u.value)==null?void 0:g.model}`)})},null,8,Le),e("p",Ue,v((z=u.value)==null?void 0:z.name),1),e("p",Me,"$ "+v(p(J)),1),e("div",Ve,[_(a,{to:{name:"ItemDetails",params:{model:(W=u.value)==null?void 0:W.model}}},{default:x(()=>[S("FULL DETAILS")]),_:1},8,["to"]),e("div",Be,[u.value&&h.value>0?(o(),n("button",{key:0,onClick:t[5]||(t[5]=C=>p(l).addItemToCart(u.value))},je)):w("",!0),ze])]),h.value>0?(o(),n("div",We,v(A(h.value)),1)):(o(),n("div",He,"Offer Expired")),e("button",{onClick:X,class:"btn fun centered"},"GENERATE NEW OFFER")])])])}}});const qe=O(Ye,[["__scopeId","data-v-cfd2ed9c"]]),Je="/assets/pexels-cottonbro-10677479_compressed.c09c7a88.mp4";const Ke={},H=s=>(D("data-v-264951bf"),s=s(),F(),s),Qe={class:"hero"},Xe=H(()=>e("video",{autoplay:"",loop:"",muted:"","plays-inline":"",class:"back-video"},[e("source",{src:Je,type:"video/mp4"})],-1)),Ze={class:"content"},et=H(()=>e("h1",null,"Our Story",-1));function tt(s,l){const d=L("router-link");return o(),n("div",Qe,[Xe,e("div",Ze,[et,_(d,{to:"/about-us"},{default:x(()=>[S("Discover More")]),_:1})])])}const st=O(Ke,[["render",tt],["__scopeId","data-v-264951bf"]]),ot="/assets/pexels-cottonbro-studio-10679201.62e6dba4.jpg",nt="/assets/pexels-cottonbro-studio-10548132.187f3155.jpg",ct="/assets/pexels-cottonbro-studio-10545225.9d7226ca.jpg";const at={},R=s=>(D("data-v-7537f399"),s=s(),F(),s),lt={class:"content flow"},it=R(()=>e("h1",{class:"title"},"FEATURED COLLECTIONS",-1)),_t={class:"even-columns"},dt={class:"hover"},rt=R(()=>e("img",{src:ot,alt:"beige collection"},null,-1)),ut={class:"hover"},pt=R(()=>e("img",{src:nt,alt:"colorful collection"},null,-1)),vt={class:"hover"},ft=R(()=>e("img",{src:ct,alt:"black and white collection"},null,-1));function mt(s,l){const d=L("router-link");return o(),n("div",lt,[it,e("div",_t,[e("div",dt,[_(d,{to:"/collections"},{default:x(()=>[rt]),_:1})]),e("div",ut,[_(d,{to:"/collections"},{default:x(()=>[pt]),_:1})]),e("div",vt,[_(d,{to:"/collections"},{default:x(()=>[ft]),_:1})])])])}const ht=O(at,[["render",mt],["__scopeId","data-v-7537f399"]]),U=s=>(D("data-v-2d59f274"),s=s(),F(),s),$t={key:0,class:"modal"},gt={class:"hero modal-content"},xt=U(()=>e("p",{class:"hero__headline"},"STAY IN TOUCH",-1)),kt=U(()=>e("p",{class:"hero__text"}," Sign up to our newsletter and keep buying expensive clothes. ",-1)),It=U(()=>e("a",{class:"hero__button btn fun",href:"#",target:"_blank"},"SIGN UP",-1)),Tt=P({__name:"NewsletterPopUp",setup(s){const l=I(!1);return se(()=>{setTimeout(()=>{l.value=!0},3e3)}),(d,c)=>(o(),oe(ne,{name:"fade"},{default:x(()=>[l.value?(o(),n("section",$t,[e("div",gt,[e("span",{onClick:c[0]||(c[0]=r=>l.value=!1),class:"close"},"\xD7"),xt,kt,It])])):w("",!0)]),_:1}))}});const bt=O(Tt,[["__scopeId","data-v-2d59f274"]]),Et=P({__name:"HomeView",setup(s){return(l,d)=>(o(),n(ce,null,[_(de),_(bt),_(qe),_(st),_(ht)],64))}});export{Et as default};