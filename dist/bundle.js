!function(e){function t(t){for(var n,o,l=t[0],s=t[1],c=t[2],d=0,m=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);m.length;)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={0:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([101,1]),a()}({101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=a(63),s=a(27),c=a(128),u=a(132),d=a(141),m=a(135),p=a(144),f=a(136),y=a(4),h=a(133),b=a(134),g=a(15),v=a.n(g),E=function(e){return{margin:{margin:2*e.spacing.unit},padding:{padding:e.spacing.unit},fieldError:{color:"red",fontSize:10},AdminTop:{backgroundColor:"#1fc8db",height:50,position:"fixed",width:"100%",zIndex:100},AdminAdd:{position:"fixed",width:"100%",zIndex:100,marginTop:50},AdminTitle:{height:"100%",justifyContent:"center",margin:0},layout:{display:"block",position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"white",opacity:1,zIndex:200},EditName:{position:"relative",width:400,minHeight:130,top:"50%",padding:10,textAlign:"center",left:"50%",background:"#2196F3",transform:"translate(-50%,-50%)"},EditNameInput:{width:"60%",height:25},buttonLayout:{position:"relative",margin:10},buttonStyle:{minWidth:80,minHeight:30,margin:10,fontSize:"1rem",fontFamily:"Roboto, Helvetica, Arial, sans-serif",fontWeight:400,background:"#1fc8db",padding:10,color:"black",border:0,letterSpacing:"0.00938em"},FlowTop:{position:"fixed",top:0,left:0,width:"100%",background:"#1fc8db"},progressWrapper:{display:"block",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white"}}},w=a(16),O=a.n(w);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=j(t).call(this,e))||"object"!==k(r)&&"function"!=typeof r?N(n):r).login=a.login.bind(N(a)),a.register=a.register.bind(N(a)),a}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),a=t,(n=[{key:"login",value:function(){var e=this,t=document.querySelectorAll(".input input"),a=[],n=0;v.a.forEach(t,(function(e){var t={id:e.getAttribute("id"),value:e.value};a.push(t)})),v.a.forEach(a,(function(e){e.value?++n:alert("Enter "+e.id)})),n===t.length&&O.a.get("api/login").then((function(a){a.data.length?a.data.forEach((function(a,n){a.username===t[0].value&&a.password===t[1].value&&(window.location.pathname,e.props.history.push({pathname:"".concat("","Admin"),_id:a._id}))})):alert("Not a single user available plz register")}))}},{key:"register",value:function(){window.location.pathname,this.props.history.push({pathname:"".concat("","Register")})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(c.a,{className:e.padding,style:{width:500,position:"relative",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement("div",{className:e.margin},r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(u.a,{item:!0},r.a.createElement(h.a,null)),r.a.createElement(u.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(d.a,{className:"input",id:"username",label:"Username",type:"email",fullWidth:!0,autoFocus:!0,required:!0}))),r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(u.a,{item:!0},r.a.createElement(b.a,null)),r.a.createElement(u.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(d.a,{className:"input",id:"password",label:"Password",type:"password",fullWidth:!0,required:!0}))),r.a.createElement(u.a,{container:!0,alignItems:"center",justify:"space-between"},r.a.createElement(u.a,{item:!0},r.a.createElement(m.a,{control:r.a.createElement(p.a,{color:"primary"}),label:"Remember me"}))),r.a.createElement(u.a,{container:!0,justify:"center",style:{marginTop:"10px"}},r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},onClick:this.login},"Login"),r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none",marginLeft:15},onClick:this.register},"Register"))))}}])&&S(a.prototype,n),i&&S(a,i),t}(n.Component),P=Object(y.a)(E)(T),_=a(102),C=a(137),A={username:{presence:{allowEmpty:!1,message:"is required"},length:{minimum:6,message:"must be at least 6 characters"}},email:{presence:{allowEmpty:!1,message:"is required"},email:!0},password:{presence:{allowEmpty:!1,message:"is required"},length:{minimum:6,message:"must be at least 6 characters"}},rematch:{presence:{allowEmpty:!1,message:"is required"},length:{minimum:6,message:"Re-enter the password"}}},F=a(39),I=a.n(F);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){q(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function q(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function W(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=H(t).call(this,e))||"object"!==L(r)&&"function"!=typeof r?R(n):r).state={values:{username:"",email:"",password:"",rematch:""},touched:{username:!1,email:!1,password:!1,rematch:!1},errors:{username:null,email:null,password:null,rematch:null},isValid:!1,data:""},v.a.bindAll(R(a),["submit","clear","validateForm","handleFieldChange"]),a}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,e),a=t,(n=[{key:"validateForm",value:function(){var e=this;v.a.defer((function(){var t=e.state.values,a=D({},e.state),n=I()(t,A);a.errors=n||{},a.isValid=!n,e.setState(a)}))}},{key:"handleFieldChange",value:function(e,t){var a=D({},this.state);a.submitError=null,a.touched[e]=!0,a.values[e]=t,this.setState(a,this.validateForm())}},{key:"submit",value:function(){var e=this,t=0;if(this.state.data.forEach((function(a,n){a.username===e.state.values.username&&t++})),t)alert("User already available");else if(this.state.values.rematch===this.state.values.password){var a={username:this.state.values.username,password:this.state.values.password};O.a.post("api/register",{body:a}).then((function(t){window.location.pathname,e.props.history.push({pathname:"".concat("","Admin"),_id:t.data})}))}else{var n=D({},this.state);n.errors.rematch=["Password Not Matching"],this.setState(n)}}},{key:"componentDidMount",value:function(){var e=this;O.a.get("api/login").then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=(a.values,a.isValid),i=a.touched,o=a.errors,l=i.username&&o.username,s=i.email&&o.email,m=i.password&&o.password,p=i.rematch&&o.rematch;return r.a.createElement(c.a,{className:t.padding,style:{width:500,position:"relative",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement("div",{className:t.margin},r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(u.a,{item:!0},r.a.createElement(h.a,null)),r.a.createElement(u.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(d.a,{className:"input",id:"username",label:"Username",type:"text",fullWidth:!0,autoFocus:!0,required:!0,onChange:function(t){return e.handleFieldChange("username",t.target.value)}}),l&&r.a.createElement(_.a,{className:t.fieldError,variant:"body2"},o.username[0]))),r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(u.a,{item:!0},r.a.createElement(C.a,null)),r.a.createElement(u.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(d.a,{className:"input",id:"email",label:"Email",type:"email",fullWidth:!0,required:!0,onChange:function(t){return e.handleFieldChange("email",t.target.value)}}),s&&r.a.createElement(_.a,{className:t.fieldError,variant:"body2"},o.email[0]))),r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(u.a,{item:!0},r.a.createElement(b.a,null)),r.a.createElement(u.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(d.a,{className:"input",id:"password",label:"Password",type:"password",fullWidth:!0,required:!0,onChange:function(t){return e.handleFieldChange("password",t.target.value)}}),m&&r.a.createElement(_.a,{className:t.fieldError,variant:"body2"},o.password[0]))),r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(u.a,{item:!0},r.a.createElement(b.a,null)),r.a.createElement(u.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(d.a,{className:"input",id:"password",label:"Re-Enter Password",type:"password",fullWidth:!0,required:!0,onChange:function(t){return e.handleFieldChange("rematch",t.target.value)}}),p&&r.a.createElement(_.a,{className:t.fieldError,variant:"body2"},o.rematch[0]))),r.a.createElement(u.a,{container:!0,justify:"center",style:{marginTop:"10px"}},r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},onClick:this.submit,disabled:!n},"Submit"))))}}])&&W(a.prototype,n),i&&W(a,i),t}(n.Component),U=Object(y.a)(E)(V),B=a(143),J=a(140),Y=a(138),K=a(139),G={username:{presence:{allowEmpty:!1,message:"is required"},length:{minimum:6,message:"must be at least 6 characters"}},email:{presence:{allowEmpty:!1,message:"is required"},email:!0}};function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){$(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function $(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ee(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=te(t).call(this,e))||"object"!==Q(r)&&"function"!=typeof r?ae(n):r).AdminId=a.props.history.location._id,a.state={edit:!1,delete:!1,Manager:"",disable:!0,add:!1,values:{username:"",email:""},touched:{username:!1,email:!1},errors:{username:null,email:null},isValid:!1,isLoading:!0},a.selectTile="",v.a.bindAll(ae(a),["select","edit","delete","save","cancel","makeManagerList","ok","changeHandler","add","validateForm","handleFieldChange","register","submit"]),a}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(t,e),a=t,(n=[{key:"submit",value:function(){var e=this,t=document.querySelectorAll("input#username")[0].value,a=this.state.Manager,n={managerName:t,AdminId:this.AdminId,data:{}};a.push(n),O.a.post("api/addManager",{body:n}).then((function(t){a[a.length-1]._id=t.data,e.setState({Manager:a,add:!1,isValid:!1}),document.querySelectorAll("input").forEach((function(e,t){e.value=""}))}))}},{key:"add",value:function(){this.setState({add:!0})}},{key:"validateForm",value:function(){var e=this;v.a.defer((function(){var t=e.state.values,a=Z({},e.state),n=I()(t,G);a.errors=n||{},a.isValid=!n,e.setState(a)}))}},{key:"handleFieldChange",value:function(e,t){var a=Z({},this.state);a.submitError=null,a.touched[e]=!0,a.values[e]=t,this.setState(a,this.validateForm())}},{key:"register",value:function(e){var t=this,a=this.state,n=a.isValid,i=a.touched,o=a.errors,l=i.username&&o.username,s=i.email&&o.email;return r.a.createElement(c.a,{className:e.padding,style:{width:500,position:"relative",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement("div",{className:e.margin},r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(u.a,{item:!0},r.a.createElement(h.a,null)),r.a.createElement(u.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(d.a,{className:"input",id:"username",label:"Username",type:"text",fullWidth:!0,autoFocus:!0,required:!0,onChange:function(e){return t.handleFieldChange("username",e.target.value)}}),l&&r.a.createElement(_.a,{className:e.fieldError,variant:"body2"},o.username[0]))),r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(u.a,{item:!0},r.a.createElement(C.a,null)),r.a.createElement(u.a,{item:!0,md:!0,sm:!0,xs:!0},r.a.createElement(d.a,{className:"input",id:"email",label:"Email",type:"email",fullWidth:!0,required:!0,onChange:function(e){return t.handleFieldChange("email",e.target.value)}}),s&&r.a.createElement(_.a,{className:e.fieldError,variant:"body2"},o.email[0]))),r.a.createElement(u.a,{container:!0,justify:"center",style:{marginTop:"10px"}},r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},onClick:this.submit,disabled:!n},"Submit"),r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none",marginLeft:15},onClick:this.cancel,id:"add"},"Cancel"))))}},{key:"changeHandler",value:function(e){e.target.value&&this.setState({disable:!1})}},{key:"ok",value:function(){var e=this,t=this.state.Manager,a=[];t.forEach((function(t,n){t._id===e.selectTile?O.a.post("api/deleteManager",{_id:e.selectTile}):a.push(t)})),this.setState({Manager:a,delete:!1})}},{key:"makeManagerList",value:function(){var e=this,t=[];return this.state.Manager.forEach((function(a,n){t.push(r.a.createElement(B.a,{key:a._id+" "+n,p:1,style:{margin:10,minWidth:150,textAlign:"center"},bgcolor:"background.paper"},r.a.createElement(u.a,{container:!0,alignItems:"flex-end",style:{width:"100%",justifiedContent:"center"}},r.a.createElement(u.a,{item:!0,style:{width:"68%",wordBreak:"break-word"},type:a._id,onClick:e.select,id:"items"},a.managerName),r.a.createElement(u.a,{item:!0},r.a.createElement(Y.a,{onClick:e.select,type:a._id,id:"edit"}),r.a.createElement(K.a,{onClick:e.select,type:a._id,id:"delete"})))))})),t}},{key:"save",value:function(){var e=this,t=document.querySelectorAll("input")[0].value,a=this.state.Manager;document.querySelectorAll("input")[0].value="",a.forEach((function(a,n){a._id===e.selectTile&&(a.managerName=t,a._id=e.selectTile,O.a.post("api/updateManager",{_id:e.selectTile,data:a}))})),this.setState({Manager:a,edit:!1,disable:!0})}},{key:"cancel",value:function(e){var t,a=e.currentTarget.getAttribute("id");this.setState(($(t={},a,!1),$(t,"disable",!0),t)),document.querySelectorAll("input").forEach((function(e){e.value=""}))}},{key:"select",value:function(e){var t=this;if(e.preventDefault(),this.selectTile=e.currentTarget.getAttribute("type"),"edit"===e.currentTarget.getAttribute("id"))this.edit(e);else if("delete"===e.currentTarget.getAttribute("id"))this.delete(e);else{window.location.pathname;var a=v.a.find(this.state.Manager,(function(e){return e._id===t.selectTile}));this.props.history.push({pathname:"".concat("","Flow"),select:this.selectTile,value:a})}}},{key:"delete",value:function(e){this.setState({delete:!0})}},{key:"edit",value:function(e){this.setState({edit:!0})}},{key:"componentDidMount",value:function(){var e=this;O.a.get("api/getManager").then((function(t){var a=v.a.filter(t.data,(function(t,a){return t.AdminId===e.AdminId}));e.setState({Manager:a,isLoading:!1})}))}},{key:"render",value:function(){var e=this.props.classes;return this.state.isLoading?r.a.createElement("div",{className:e.progressWrapper},r.a.createElement(J.a,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.AdminTop},r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"center",className:e.AdminTitle},"Admin Portal")),r.a.createElement("div",{className:e.AdminAdd},r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"center",className:e.AdminTitle,style:{height:"100%"}},"List of Manager",r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},className:e.buttonStyle,id:"Add",onClick:this.add},"Add New Manager"))),r.a.createElement(B.a,{display:"flex",flexWrap:"wrap",p:1,m:1,css:{minWidth:300,position:"relative",top:119,maxHeight:"80%",overflow:"auto"}},this.state.Manager.length?this.makeManagerList():r.a.createElement("div",null,"No Manager Present")),r.a.createElement("div",{className:e.layout,style:{display:this.state.edit?"block":"none"}},r.a.createElement("div",{className:e.EditName},"Enter New Manager Name",r.a.createElement("input",{className:e.EditNameInput,placeholder:"Enter Name",onChange:this.changeHandler}),r.a.createElement("div",{className:e.buttonLayout},r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},disabled:this.state.disable,className:e.buttonStyle,onClick:this.save},"SAVE"),r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},className:e.buttonStyle,id:"edit",onClick:this.cancel},"CANCEL")))),r.a.createElement("div",{className:e.layout,style:{display:this.state.delete?"block":"none"}},r.a.createElement("div",{className:e.EditName},"ARE YOU SURE TO DELETE",r.a.createElement("div",{className:e.buttonLayout},r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},className:e.buttonStyle,onClick:this.ok},"OK"),r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},className:e.buttonStyle,id:"delete",onClick:this.cancel},"CANCEL")))),r.a.createElement("div",{className:e.layout,style:{display:this.state.add?"block":"none"}},this.register(e)))}}])&&ee(a.prototype,n),i&&ee(a,i),t}(n.Component),ie=Object(y.a)(E)(re),oe=a(40);function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function de(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function me(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var he=function(e){function t(e){var a,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=pe(t).call(this,e))||"object"!==le(r)&&"function"!=typeof r?fe(n):r).data=a.props.history.location.value,a.state={flow:!1,task:!1,layerOut:!1,disable:!0,data:a.data.data,isLoading:!1};return a.getItemStyle=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(a),!0).forEach((function(t){de(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({userSelect:"none",padding:"".concat(10,"px ").concat(10,"px"),margin:"".concat(10,"px ").concat(10,"px"),color:"black",border:"1px solid rgba(192,192,192,1)",boxShadow:"0px 0px 5px #DFE3E8",background:e?"lightgreen":"white"},t)},a.color=["#3cba54","#db3236","#4885ed","#f4c20d"],a.getListStyle=function(e,t){return{background:e?"lightblue":"white",minWidth:200,wordBreak:"break-word",height:"100%",padding:8,border:"1px solid rgba(0,0,0,0.26)"}},a.reorder=function(e,t,a){var n=Array.from(e),r=ce(n.splice(t,1),1)[0];return n.splice(a,0,r),n},a.move=function(e,t,a,n){var r=Array.from(e),i=Array.from(t),o=ce(r.splice(a.index,1),1)[0];i.splice(n.index,0,o);var l=[];return l[a.droppableId]=r,l[n.droppableId]=i,l},v.a.bindAll(fe(a),["onDragEnd","getList","dropTop","dropData","addFlow","addTask","makeFlow","makeTask","cancel","changeHandler","save"]),a}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(t,e),a=t,(n=[{key:"save",value:function(e){var t,a=this,n=e.currentTarget.getAttribute("id"),r=document.querySelector("input").value,i=this.state.data;if("flow"===n)i[r]=[];else{var o=document.querySelector("select").value;i[o].push(r)}this.setState((de(t={},n,!1),de(t,"isLoading",!0),t)),O.a.post("api/updateManagerData",{data:i,_id:this.data._id}).then((function(e){a.setState({data:i,isLoading:!1})}))}},{key:"cancel",value:function(e){var t=e.currentTarget.getAttribute("id");this.setState(de({},t,!1))}},{key:"changeHandler",value:function(e){e.target.value?this.setState({disable:!1}):this.setState({disable:!0})}},{key:"makeFlow",value:function(e){return r.a.createElement("div",{className:e.layout},r.a.createElement("div",{className:e.EditName},"Enter New Task Flow Name",r.a.createElement("input",{className:e.EditNameInput,placeholder:"Enter Task Flow Name",onChange:this.changeHandler}),r.a.createElement("div",{className:e.buttonLayout},r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},disabled:this.state.disable,id:"flow",className:e.buttonStyle,onClick:this.save},"SAVE"),r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},className:e.buttonStyle,id:"flow",onClick:this.cancel},"CANCEL"))))}},{key:"makeTask",value:function(e){return r.a.createElement("div",{className:e.layout},r.a.createElement("div",{className:e.EditName},"Enter New Task",r.a.createElement("input",{className:e.EditNameInput,placeholder:"Enter Task Name",onChange:this.changeHandler}),r.a.createElement("div",{className:e.fields},r.a.createElement(d.a,{label:"Select Task Flow",margin:"dense",onChange:this.changeHandler,select:!0,SelectProps:{native:!0,style:{height:40,width:247,background:"white",fontSize:14}},InputLabelProps:{shrink:!0,style:{padding:"8px 0px"}},variant:"outlined"},Object.keys(this.state.data).map((function(e,t){return r.a.createElement("option",{key:e+t,value:e,style:{margin:10,fontSize:16}},e)})))),r.a.createElement("div",{className:e.buttonLayout},r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},id:"task",disabled:this.state.disable,className:e.buttonStyle,onClick:this.save},"SAVE"),r.a.createElement(f.a,{variant:"outlined",color:"primary",style:{textTransform:"none"},className:e.buttonStyle,id:"task",onClick:this.cancel},"CANCEL"))))}},{key:"addFlow",value:function(){this.setState({flow:!0})}},{key:"addTask",value:function(){this.setState({task:!0})}},{key:"dropTop",value:function(){return r.a.createElement("div",{className:"pipelineTop",style:{display:"flex",zIndex:2,position:"relative"}},Object.keys(this.state.data).map((function(e,t){return r.a.createElement("div",{keys:e+t,style:{minWidth:200,backgroundColor:"rgb(72, 133, 237)",padding:8,wordBreak:"break-word",border:"1px solid rgba(192,192,192,1)",color:"white"}},r.a.createElement("div",{style:{position:"relative",top:"50%",transform:"translateY(-50%)"}},e))})))}},{key:"dropData",value:function(){var e=this;return r.a.createElement("div",{style:{display:"flex",width:"100%"}},r.a.createElement(oe.a,{onDragEnd:this.onDragEnd},Object.keys(this.state.data).map((function(t,a){return r.a.createElement(oe.c,{droppableId:t,key:t+a},(function(a,n){return r.a.createElement("div",{ref:a.innerRef,style:e.getListStyle(n.isDraggingOver)},e.state.data[t].map((function(a,n){return r.a.createElement(oe.b,{key:a+"_"+t+"_"+n,draggableId:a+"_"+t+"_"+n,index:n},(function(t,n){return r.a.createElement("div",se({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:e.getItemStyle(n.isDragging,t.draggableProps.style)}),a)}))})),a.placeholder)}))}))))}},{key:"getList",value:function(e){return this.state.data[e.split("_")[0]]}},{key:"onDragEnd",value:function(e){var t=this,a=e.source,n=e.destination,r={};if(n){if(a.droppableId===n.droppableId){var i=this.reorder(this.getList(a.droppableId),a.index,n.index);Object.keys(this.state.data).map((function(e){e===n.droppableId?r[e]=i:r[e]=t.state.data[e]}))}else{var o=this.move(this.getList(a.droppableId),this.getList(n.droppableId),a,n);Object.keys(this.state.data).map((function(e){o[e]?r[e]=o[e]:r[e]=t.state.data[e]}))}this.setState({data:r,isLoading:!0}),O.a.post("api/updateManagerData",{data:r,_id:this.data._id}).then((function(e){t.setState({isLoading:!1})}))}}},{key:"render",value:function(){var e=this.props.classes,t=this.state.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.FlowTop},r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"center",className:e.AdminTitle},this.data.managerName," Flow Chart")),r.a.createElement("div",{className:e.FlowTop,style:{marginTop:36}},r.a.createElement(u.a,{container:!0,spacing:8,alignItems:"center",className:e.AdminTitle},r.a.createElement(f.a,{className:e.buttonStyle,variant:"outlined",color:"primary",style:{textTransform:"none",background:"white"},onClick:this.addFlow},"Add New Task Flow"),r.a.createElement(f.a,{disabled:!Object.keys(t).length,className:e.buttonStyle,variant:"outlined",color:"primary",style:{textTransform:"none",background:"white"},onClick:this.addTask},"Add New Task"))),r.a.createElement("div",{style:{minHeight:"82%",maxHeight:"82%",overflow:"auto",marginTop:100}},Object.keys(t).length?this.dropTop():null,Object.keys(t).length?this.dropData():r.a.createElement("div",{style:{textAlign:"center"}},"NO Daily Task and Flow available ")),this.state.flow?this.makeFlow(e):null,this.state.task?this.makeTask(e):null,this.state.isLoading?r.a.createElement("div",{style:{width:"100%",height:"100%",zIndex:300},className:e.progressWrapper},r.a.createElement(J.a,{style:{position:"absolute",top:"50%",left:"50%"}})):null)}}])&&me(a.prototype,n),i&&me(a,i),t}(n.Component),be=Object(y.a)(E)(he);function ge(e){return(ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ee(e,t){return!t||"object"!==ge(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function we(e){return(we=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ke=function(e){function t(e){var a;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=Ee(this,we(t).call(this,e)),window.performance&&1==performance.navigation.type){var n=window.location.pathname.split("/");n.length>1?window.location.pathname="/":window.location.pathname="/".concat(n[1],"/")}return a}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(t,e),a=t,(n=[{key:"render",value:function(){var e=window.location.pathname;return r.a.createElement("div",{className:"Parent",style:{width:"100%",height:window.innerHeight-16,position:"relative",fontSize:"1.5rem",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,lineHeight:1.5,letterSpacing:"0.00938em",overflow:"hidden"}},r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"".concat(e),component:P}),r.a.createElement(s.a,{path:"".concat(e,"Register"),component:U}),r.a.createElement(s.a,{path:"".concat(e,"Admin"),component:ie}),r.a.createElement(s.a,{path:"".concat(e,"Flow"),component:be}))))}}])&&ve(a.prototype,n),i&&ve(a,i),t}(n.Component),Se=document.createElement("div");document.body.appendChild(Se),o.a.render(r.a.createElement(ke,null),Se)}});