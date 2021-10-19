(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={list:"ContactList_list__2T7aG"}},19:function(e,t,n){},20:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),r=n(11),c=n.n(r),s=(n(19),n(14)),o=n(5),u=n(6),l=n(8),m=n(7),d=(n(20),n(12)),b=n(26),j=n(1),h=n.n(j),f=n(3),p=n.n(f),C=n(0),O=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={name:"",number:""},e.idName=Object(b.a)(),e.idNumber=Object(b.a)(),e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(d.a)({},a,i))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a={name:n.name,number:n.number,id:Object(b.a)()};e.props.addNewContact(a),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.idName,t=this.idNumber,n=this.handleChange,a=this.handleSubmit,i=this.state,r=i.name,c=i.number;return Object(C.jsxs)("form",{className:p.a.form,onSubmit:a,children:[Object(C.jsxs)("label",{className:p.a.label,htmlFor:e,children:["Name",Object(C.jsx)("input",{className:p.a.input,type:"text",name:"name",id:e,value:r,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(C.jsxs)("label",{className:p.a.label,htmlFor:t,children:["Number",Object(C.jsx)("input",{className:p.a.input,type:"tel",name:"number",id:t,value:c,onChange:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(C.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component);O.PropType={onSubmit:h.a.func.isRequired,onChange:h.a.func.isRequired};var _=n(9),v=n.n(_);function x(e){var t=e.value,n=e.onChange;return Object(C.jsxs)("div",{className:v.a.container,children:[Object(C.jsx)("h3",{className:v.a.title,children:"Find contacts by name:"}),Object(C.jsx)("input",{type:"text",name:"filter",value:t,onChange:n,className:v.a.input})]})}x.PropsType={value:h.a.string,onChange:h.a.func.isRequired};var N=n(13),g=n.n(N),y=n(4),F=n.n(y);function S(e){var t=e.id,n=e.name,a=e.number,i=e.onDeleteContact;return Object(C.jsxs)("li",{className:F.a.list,children:[Object(C.jsxs)("p",{className:F.a.item,children:[n,":",Object(C.jsx)("span",{className:F.a.span,children:a})]}),Object(C.jsx)("button",{type:"submit",onClick:function(){return i(t)},className:F.a.button,children:"Delete"})]})}function q(e){var t=e.findContact,n=e.onDeleteContact;return Object(C.jsx)("ul",{className:g.a.list,children:t().map((function(e){var t=e.id,a=e.name,i=e.number;return Object(C.jsx)(S,{id:t,name:a,number:i,onDeleteContact:n},t)}))})}S.PropsTypes={id:h.a.number.isRequired,name:h.a.string.isRequired,number:h.a.number.isRequired,onDeleteContact:h.a.func.isRequired},q.PropsType={id:h.a.number.isRequired,name:h.a.string.isRequired,number:h.a.number.isRequired,onDeleteContact:h.a.func.isRequired};var w=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addNewContact=function(t){e.state.contacts.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[t])}}))},e.handleFilter=function(t){e.setState({filter:t.target.value})},e.findContact=function(){var t=e.state.filter.toLowerCase();return e.state.filter.length>0?e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)})):e.state.contacts},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.addNewContact,n=this.handleFilter,a=this.findContact,i=this.deleteContact;return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("h2",{className:"title",children:"Phonebook"}),Object(C.jsx)(O,{addNewContact:t}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{className:"title",children:"Contacts"}),Object(C.jsx)(x,{value:e,onChange:n}),Object(C.jsx)(q,{findContact:a,onDeleteContact:i})]})]})})}}]),n}(a.Component),R=w;c.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(R,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",button:"Form_button__243jh"}},4:function(e,t,n){e.exports={button:"ContactListItem_button__22wLV",list:"ContactListItem_list__W6jNB",item:"ContactListItem_item__2THQn",span:"ContactListItem_span__3G7oz"}},9:function(e,t,n){e.exports={container:"Filter_container__oISjJ",title:"Filter_title__mtLuE",input:"Filter_input__2DoVp"}}},[[24,1,2]]]);
//# sourceMappingURL=main.403a1d56.chunk.js.map