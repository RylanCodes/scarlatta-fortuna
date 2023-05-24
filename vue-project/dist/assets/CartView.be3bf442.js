import{d as b,u as f,E as T,b as $,o as c,c as i,e as t,q as d,y as h,f as o,g as r,h as C,F as p,A as E,k,t as l,s as N,p as y,l as x,_ as v}from"./index.8257e940.js";const a=s=>(y("data-v-95a0385f"),s=s(),x(),s),O=a(()=>t("div",{class:"low-opacity-bg-image"},[t("p",{class:"hero-heading"},"My Cart")],-1)),w={class:"flex-column-align"},A=a(()=>t("h1",{class:"alert-message"},"Your cart is currently empty, go ahead and treat yourself!",-1)),F=a(()=>t("button",{type:"button",class:"btn fun lighter"},"CONTINUE SHOPPING",-1)),U=a(()=>t("th",{scope:"col"},"IMAGE",-1)),P=a(()=>t("th",{scope:"col"},"PRODUCT",-1)),M=a(()=>t("th",{scope:"col"},"PRICE",-1)),R=a(()=>t("th",{scope:"col"},"QUANTITY",-1)),V=a(()=>t("th",{scope:"col"},"TOTAL",-1)),q=a(()=>t("th",{scope:"col"},"REMOVE",-1)),L=[U,P,M,R,V,q],D=["onClick"],G=["src"],B={"data-label":"DESCRIPTION"},H={"data-label":"PRICE"},Q={"data-label":"QUANTITY"},Y=["onUpdate:modelValue","onChange"],K={"data-label":"TOTAL"},j={"data-label":"REMOVE"},z=["onClick"],J=a(()=>t("i",{class:"fa-solid fa-xmark"},null,-1)),W=[J],X=b({__name:"Cart",setup(s){const e=f(),m=k();return T(),(I,g)=>{const S=$("router-link");return c(),i(p,null,[O,t("table",null,[d(t("section",w,[A,r(S,{style:{"text-decoration":"none"},to:"/items"},{default:C(()=>[F]),_:1})],512),[[h,o(e).getItemsCart.length==0]]),t("thead",null,[d(t("tr",null,L,512),[[h,o(e).getItemsCart.length>0]])]),t("tbody",null,[(c(!0),i(p,null,E(o(e).getItemsCart,n=>(c(),i("tr",null,[t("td",{"data-label":"ITEM",onClick:u=>o(m).push(`/items/${n.item.model}`)},[t("img",{src:n.item.image_url,width:"100"},null,8,G)],8,D),t("td",B,l(n.item.name),1),t("td",H," $ "+l(Number(n.item.raw_price).toFixed(2)),1),t("td",Q,[d(t("input",{type:"number","onUpdate:modelValue":u=>n.quantity=u,onChange:u=>o(e).quantityModification(n),min:"1"},null,40,Y),[[N,n.quantity]])]),t("td",K," $ "+l((Number(n.item.raw_price)*n.quantity).toFixed(2)),1),t("td",j,[t("button",{onClick:u=>o(e).removeLine(n)},W,8,z)])]))),256))])])],64)}}});const Z=v(X,[["__scopeId","data-v-95a0385f"]]),_=s=>(y("data-v-ecadfcd0"),s=s(),x(),s),tt={class:"grid cart-font-color"},et=_(()=>t("p",null,"Subtotal:",-1)),ot=_(()=>t("p",null,"Shipping:",-1)),st=_(()=>t("p",null,"GST:",-1)),nt=_(()=>t("p",null,"QST:",-1)),at=_(()=>t("p",{class:"bolder"},"TOTAL:",-1)),lt={class:"bolder"},_t={class:"cart-buttons"},ct=_(()=>t("button",{type:"button",class:"btn fun lighter"},"CONTINUE SHOPPING",-1)),it=_(()=>t("button",{type:"button",class:"btn fun lighter"},"CHECK OUT",-1)),dt=b({__name:"CartAmounts",setup(s){const e=f();return T(),(m,I)=>{const g=$("router-link");return c(),i(p,null,[d(t("div",tt,[et,t("p",null,"$"+l(o(e).getCartTotals.subTotal.toFixed(2)),1),ot,t("p",null,"$"+l(o(e).getCartTotals.shipping.toFixed(2)),1),st,t("p",null,"$"+l(o(e).getCartTotals.gst.toFixed(2)),1),nt,t("p",null,"$"+l(o(e).getCartTotals.qst.toFixed(2)),1),at,t("p",lt,"$"+l(o(e).getCartTotals.total.toFixed(2)),1)],512),[[h,o(e).getItemsCart.length>0]]),d(t("div",_t,[r(g,{style:{"text-decoration":"none"},to:"/items"},{default:C(()=>[ct]),_:1}),r(g,{style:{"text-decoration":"none"},to:"/checkout"},{default:C(()=>[it]),_:1})],512),[[h,o(e).getItemsCart.length>0]])],64)}}});const rt=v(dt,[["__scopeId","data-v-ecadfcd0"]]),ht=b({__name:"CartView",setup(s){return(e,m)=>(c(),i(p,null,[r(Z),r(rt)],64))}});export{ht as default};
