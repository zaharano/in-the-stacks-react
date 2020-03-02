(this["webpackJsonpin-the-stacks"]=this["webpackJsonpin-the-stacks"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(18),a(10)),c=a(7),s=a(11),u=a(1),h=a(2),d=a(4),m=a(3),p=a(5),b=(a(19),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.show?"overlay":"hide";return r.a.createElement("div",{className:e},r.a.createElement("section",{className:"container"},this.props.children))}}]),t}(n.Component)),g=a(6),y=(a(20),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",author:"",numPages:"",read:!0},a.handleSubmit=function(e){e.preventDefault(),a.props.add(a.state),a.setState({title:"",author:"",numPages:"",read:!0}),a.props.close()},a.handleCancel=function(e){e.preventDefault(),a.props.close()},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.handleReadChange=function(e){a.setState((function(e){return{read:!e.read}}))},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Add-book"},r.a.createElement("h1",null,"Add a Book"),r.a.createElement("form",{id:"new"},r.a.createElement("input",{type:"text",name:"title",placeholder:"Title",value:this.state.title,required:!0,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"author",placeholder:"Author",value:this.state.author,required:!0,onChange:this.handleChange}),r.a.createElement("input",{type:"number",name:"numPages",placeholder:"Pages",value:this.state.numPages,required:!0,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"yep"},r.a.createElement("input",{type:"checkbox",name:"read",id:"yep",checked:this.state.read,onChange:this.handleReadChange}),"Read"," "),r.a.createElement("fieldset",null,r.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Submit"),r.a.createElement("button",{onClick:this.handleCancel,className:"cancel"},"Cancel"))))}}]),t}(n.Component)),f=(a(21),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleEx=function(e){a.props.remove(a.props.id)},a.handleToggle=function(e){a.props.toggle(a.props.id)},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.read?r.a.createElement("button",{className:"read yep",onClick:this.handleToggle},"read"):r.a.createElement("button",{className:"read nope",onClick:this.handleToggle},"unread");return r.a.createElement("div",{className:"BookCard"},r.a.createElement("button",{className:"remove nope",onClick:this.handleEx},"X"),r.a.createElement("h3",null,this.props.title),r.a.createElement("p",null,"by ",this.props.author),r.a.createElement("p",null,this.props.numPages," pages"),e)}}]),t}(n.Component)),v=a(24),k=localStorage.getItem("myLibrary")?JSON.parse(localStorage.getItem("myLibrary")):[{title:"The Hobbit",author:"J.R.R. Tolkien",numPages:486,read:!0,id:Object(v.a)()},{title:"Chez Panisse Menu Cookbook",author:"Alice Waters",numPages:215,read:!1,id:Object(v.a)()}],E=(a(22),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showForm:!1,library:Object(s.a)(k)},a.addBook=function(e){var t=a.state.library.concat([Object(c.a)({},e,{id:Object(v.a)()})]);a.setState({library:t}),setTimeout(a.libUpdate,200)},a.removeBook=function(e){var t=!0,n=!1,r=void 0;try{for(var o,l=a.state.library.entries()[Symbol.iterator]();!(t=(o=l.next()).done);t=!0){var c=Object(i.a)(o.value,2),s=c[0];if(c[1].id===e){console.log("matched");var u=a.state.library.slice(0,s).concat(a.state.library.slice(s+1));a.setState({library:u});break}}}catch(h){n=!0,r=h}finally{try{t||null==l.return||l.return()}finally{if(n)throw r}}setTimeout(a.libUpdate,200)},a.toggleRead=function(e){a.setState((function(t){return{library:t.library.map((function(t){return t.id===e?Object(c.a)({},t,{read:!t.read}):t}))}})),setTimeout(a.libUpdate,200)},a.libUpdate=function(){localStorage.setItem("myLibrary",JSON.stringify(a.state.library))},a.showModal=function(){a.setState({showForm:!0})},a.hideModal=function(){a.setState({showForm:!1})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(b,{show:this.state.showForm},r.a.createElement(y,{add:this.addBook,close:this.hideModal})),r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"My Library"),r.a.createElement("button",{className:"btn-primary",type:"button",onClick:this.showModal},"Add Book")),r.a.createElement("div",{className:"BookShelf"},this.state.library.map((function(t){return r.a.createElement(f,{key:t.id,id:t.id,title:t.title,author:t.author,numPages:t.numPages,read:t.read,remove:e.removeBook,toggle:e.toggleRead})}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.174a125c.chunk.js.map