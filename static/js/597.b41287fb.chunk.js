"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(885),r=t(2791),s=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&t[e];n+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return n},c="ContactForm_form__dhl+T",o="ContactForm_input__Bl93P",l="ContactForm_label__-cVXI",u="ContactForm_btn__wll+u",i=t(9434),m=t(4299),d=t(8458),h=t(184);function b(){var e=(0,r.useState)(""),n=(0,a.Z)(e,2),t=n[0],b=n[1],f=(0,r.useState)(""),p=(0,a.Z)(f,2),v=p[0],_=p[1],x=(0,i.I0)(),j=(0,i.v9)(d.K2);(0,r.useEffect)((function(){x((0,m.yF)())}),[x]);var C=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":b(a);break;case"number":_(a);break;default:return}};return(0,h.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault(),function(e){var n=e.name,t=e.number,a={name:n,number:t,id:s()};j.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contact")):x((0,m.uK)(a))}({name:t,number:v}),b(""),_("")},children:[(0,h.jsxs)("label",{className:l,children:["Name",(0,h.jsx)("input",{className:o,type:"text",onChange:C,name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("label",{className:l,children:["Number",(0,h.jsx)("input",{className:o,type:"tel",onChange:C,name:"number",value:v,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{className:u,type:"submit",children:"Add contact"})]})}var f={};var p=function(e){var n=e.id,t=e.name,a=e.number,r=(0,i.I0)();return(0,h.jsxs)("li",{className:f.item,children:[t," : ",(0,h.jsx)("span",{className:f.item,children:a}),(0,h.jsx)("button",{type:"button",className:f.button,onClick:function(){r((0,m.zY)(n))},children:"Delete"})]},n)},v=function(){var e=(0,i.v9)(d.K2),n=(0,i.v9)(d.Db);console.log(e);return(0,h.jsx)("ul",{children:function(){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}().map((function(e){var n=e.name,t=e.number,a=e.id;return(0,h.jsx)(p,{name:n,id:a,number:t},a)}))})},_="Filter_flex__OzNjW",x="Filter_input__N7T3z",j="Filter_label__vEd1E";function C(){var e=(0,i.I0)(),n=(0,i.v9)(d.Db);return(0,h.jsxs)("div",{className:_,children:[(0,h.jsx)("label",{className:j,children:"Find contact by name"}),(0,h.jsx)("input",{className:x,type:"text",value:n,onChange:function(n){return e((0,d.W1)(n.target.value))}})]})}var N="ContactPage_wrapper__38Ovi";function g(){return(0,h.jsxs)("div",{className:N,children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(b,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(C,{}),(0,h.jsx)(v,{})]})}}}]);
//# sourceMappingURL=597.b41287fb.chunk.js.map