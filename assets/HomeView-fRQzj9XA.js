import{_ as c,c as i,b as e,w as d,r as o,o as u,n as p}from"./index-fDdmEGNb.js";const _={data(){return{user:{email:""}}}},f={class:"container py-3"};function b(V,r,g,x,s,y){const l=o("VField"),a=o("ErrorMessage"),t=o("VForm");return u(),i("div",f,[e(t,null,{default:d(({errors:n})=>[e(l,{id:"email",name:"信箱",type:"email",class:p(["bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3",{"is-invalid":n.信箱}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:s.user.email,"onUpdate:modelValue":r[0]||(r[0]=m=>s.user.email=m)},null,8,["class","modelValue"]),e(a,{name:"信箱",class:"text-red-400 text-sm"})]),_:1})])}const E=c(_,[["render",b]]);export{E as default};
