(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),s=(n(15),n(10)),o=n(2),d=n(3),l=n(6),u=n(5),b=(n(16),n(9)),h=n(4),j=n(20),m=n(0),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.idName=Object(j.a)(),e.idNumber=Object(j.a)(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a={name:n.name,number:n.number,id:Object(j.a)()};e.props.addNewContact(a),e.resetForm()},e.resetForm=function(){e.setState(Object(b.a)({},e.state))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.idName,t=this.idNumber,n=this.handleChange,a=this.handleSubmit,r=this.state,c=r.name,i=r.number;return Object(m.jsxs)("form",{onSubmit:a,children:[Object(m.jsxs)("label",{htmlFor:e,children:["Name",Object(m.jsx)("input",{type:"text",name:"name",id:e,value:c,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{htmlFor:t,children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",id:t,value:i,onChange:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addNewContact=function(t){e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[t])}}))},e.handleFilter=function(t){e.setState({filter:t.target.value})},e.findContact=function(){var t=e.state.filter.toLowerCase();return e.state.filter.length>0?e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)})):e.state.contacts},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(p,{addNewContact:this.addNewContact}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)("p",{children:"Find contacts by name:"}),Object(m.jsx)("input",{type:"text",name:"filter",value:this.state.filter,onChange:this.handleFilter}),Object(m.jsx)("ul",{children:this.findContact().map((function(e){var t=e.id,n=e.name,a=e.number;return Object(m.jsx)("li",{children:Object(m.jsxs)("p",{children:[n,":",Object(m.jsx)("span",{children:a})]})},t)}))})]})]})}}]),n}(a.Component),f=O;i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3fd8fd1c.chunk.js.map