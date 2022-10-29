"use strict";(self.webpackChunkreact_phonebook=self.webpackChunkreact_phonebook||[]).push([[145],{26:function(n,e,t){t.d(e,{HS:function(){return x},__:function(){return c},l0:function(){return p}});var a,r,i,o=t(168),s=t(842),p=s.Z.form(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  width: 300px;\n"]))),c=s.Z.label(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 24px;\n  font-weight: 700;\n"]))),x=s.Z.button(i||(i=(0,o.Z)(["\n  border-radius: 3px;\n  border: 0;\n  line-height: 1.5;\n  padding: 0 20px;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  color: #fbff00;\n  text-shadow: 1px 1px 1px #000;\n  border-radius: 10px;\n  background-color: #00eeff;\n  background-image: linear-gradient(\n    to top left,\n    rgba(0, 0, 0, 0.2),\n    rgba(0, 0, 0, 0.2) 30%,\n    rgba(0, 0, 0, 0)\n  );\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),\n    inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  &:hover {\n    background-color: #00ff40;\n  }\n\n  &:active {\n    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),\n      inset 2px 2px 3px rgba(0, 0, 0, 0.6);\n  }\n"])))},145:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var a,r,i,o,s,p,c,x,d=t(434),l=t(791),u=t(293),f=t(115),g=t(168),b=t(842),h=b.Z.div(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 20px;\n"]))),m=t(885),v=t(26),Z=t(184),j=function(){var n=(0,d.v9)(u.Af),e=(0,d.I0)(),t=(0,l.useState)(""),a=(0,m.Z)(t,2),r=a[0],i=a[1],o=(0,l.useState)(""),s=(0,m.Z)(o,2),p=s[0],c=s[1],x=function(n){switch(n.currentTarget.name){case"name":i(n.currentTarget.value);break;case"number":c(n.currentTarget.value)}},g=function(){i(""),c("")};return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(v.l0,{onSubmit:function(t){if(t.preventDefault(),n.map((function(n){return n.name.toLocaleLowerCase()})).some((function(n){return n===r.toLocaleLowerCase()})))return alert("".concat(r," is already in contacts"));var a={contactName:r,phone:p};e((0,f.uK)(a)),g()},children:[(0,Z.jsxs)(v.__,{children:["Name",(0,Z.jsx)("input",{onChange:x,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,Z.jsxs)(v.__,{children:["Number",(0,Z.jsx)("input",{onChange:x,type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,Z.jsx)(v.HS,{type:"submit",children:"Add contact"})]})})},w=b.Z.div(r||(r=(0,g.Z)(["\n  display: flex;\n"]))),y=b.Z.label(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-bottom: 20px;\n  align-items: center;\n  font-weight: 500;\n  font-size: 20px;\n"]))),k=t(365),C=function(){var n=(0,l.useState)(""),e=(0,m.Z)(n,2),t=e[0],a=e[1],r=(0,d.I0)();return(0,Z.jsx)(w,{children:(0,Z.jsxs)(y,{children:["Find contacts by name",(0,Z.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(n){a(n.target.value),r((0,k.f)(n.target.value))}})]})})},z=t(2),_=b.Z.ul(o||(o=(0,g.Z)(["\n  padding-left: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),A=b.Z.li(s||(s=(0,g.Z)(["\n  padding: 5px;\n  border: 1px solid gray;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  font-weight: 500;\n  font-size: 18px;\n"]))),S=b.Z.span(p||(p=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 25px;\n  min-width: 250px;\n"]))),F=b.Z.span(c||(c=(0,g.Z)(["\n  font-weight: 700;\n  font-size: 24px;\n"]))),I=b.Z.button(x||(x=(0,g.Z)(["\n  border-radius: 3px;\n  border: 0;\n  line-height: 1.5;\n  padding: 0 20px;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  color: #fbff00;\n  text-shadow: 1px 1px 1px #000;\n  border-radius: 10px;\n  background-color: #00eeff;\n  background-image: linear-gradient(\n    to top left,\n    rgba(0, 0, 0, 0.2),\n    rgba(0, 0, 0, 0.2) 30%,\n    rgba(0, 0, 0, 0)\n  );\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),\n    inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n  &:hover {\n    background-color: #ff0000;\n  }\n\n  &:active {\n    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),\n      inset 2px 2px 3px rgba(0, 0, 0, 0.6);\n  }\n"]))),L=function(){var n=(0,d.I0)(),e=(0,d.v9)(u.xU),t=(0,d.v9)(u.f);return(0,Z.jsx)(_,{children:t.map((function(t){var a=t.id,r=t.name,i=t.number;return(0,Z.jsxs)(A,{children:[(0,Z.jsxs)(S,{children:[(0,Z.jsxs)(F,{children:[r,":"]}),(0,Z.jsx)("span",{children:i})]}),(0,Z.jsx)(I,{onClick:function(){return e=a,void n((0,f.GK)(e));var e},disabled:e,children:"Delete"})]},a)}))})},N=function(){var n=(0,d.I0)(),e=(0,d.v9)(u.$i);return(0,l.useEffect)((function(){n((0,f.yF)())}),[n]),(0,Z.jsxs)(h,{children:[(0,Z.jsx)("h1",{children:"Phonebook"}),(0,Z.jsx)(j,{}),(0,Z.jsx)("h2",{children:"Contacts"}),(0,Z.jsx)(C,{}),(0,Z.jsx)(z.g,{}),e&&(0,Z.jsx)(L,{})]})}}}]);
//# sourceMappingURL=145.a6fb92bf.chunk.js.map