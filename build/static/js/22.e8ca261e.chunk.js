(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[22],{56:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),s=a(12),l=a(11),o=a(0),i=a.n(o),m=a(1),u=a(2),c=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).onNameChange=function(t){e.setState({name:t.target.value})},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onRefferalChange=function(t){e.setState({refferal:t.target.value})},e.onSubmit=function(){(e.state.email.length>6||e.state.password.length>5||e.state.Address.length>6||e.state.name.length>1||e.state.name.district.length>1||e.state.refferal.length>5)&&fetch("http://localhost:5000/Register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password,name:e.state.name,refferal:e.state.refferal})}).then(setTimeout((function(){e.props.history.push("/Login")}),1e3))},e.state={name:"",email:"",password:"",refferal:"000000"},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",null,i.a.createElement("div",{className:"form-login"},i.a.createElement("p",{className:"title-login"},"Sign UP"),i.a.createElement("input",{className:"password-input",required:!0,onChange:this.onNameChange,type:"name",placeholder:"Enter Your Name :"}),i.a.createElement("input",{className:"email-input",required:!0,onChange:this.onEmailChange,minLength:"6",type:"email",placeholder:"Enter Your Email :"}),i.a.createElement("input",{className:"password-input",required:!0,onChange:this.onPasswordChange,minLength:"6",type:"password",placeholder:"Enter New Password Here"}),i.a.createElement("input",{className:"password-input",onChange:this.onRefferalChange,minLength:"6",type:"text",placeholder:"Referral Number (Optional)"}),i.a.createElement("input",{className:"submit-input",onClick:this.onSubmit,value:"Submit"}),i.a.createElement(m.b,{className:"undr-form",to:"/Login"},"Log In"))))}}]),a}(o.Component);t.default=Object(u.f)(c)}}]);
//# sourceMappingURL=22.e8ca261e.chunk.js.map