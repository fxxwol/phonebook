"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[294],{7775:function(n,r,e){e.d(r,{Bt:function(){return d},I4:function(){return u},mr:function(){return p},vw:function(){return c}});var o,a,t,s,i=e(168),l=e(225),d=l.Z.form(o||(o=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n \n"]))),u=l.Z.div(a||(a=(0,i.Z)(["\n  display: block;\n  padding: 25px 35px 50px;\n  width: 450px;\n  border-radius: 4px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"]))),c=l.Z.h2(t||(t=(0,i.Z)(["\ntext-align: center;\nmargin: 0 0 40px;\nfont-size: 24px;\nfont-weight: 300;\n"]))),p=l.Z.p(s||(s=(0,i.Z)(["\n  color: rgba(80, 78, 78, 0.76);\n"])))},8026:function(n,r,e){e.d(r,{c:function(){return d},l:function(){return l}});var o,a,t=e(168),s=e(225),i=e(6151),l=s.Z.form(o||(o=(0,t.Z)(["\n    display: flex;\n    gap: 15px;\n    justify-content: start;\n    align-items: baseline;\n    margin-top: 40px;\n    margin-bottom: 40px;\n\n"]))),d=(0,s.Z)(i.Z)(a||(a=(0,t.Z)(["\n  border: 1px solid;\n  border-color: #1f398786;\n  &:hover,\n  :active,\n  :focus {\n    border-color:rgba(3, 44, 84, 0.5);\n    box-shadow: 0 0 0 1px rgba(3, 44, 84, 0.5);\n  }\n"])))},4294:function(n,r,e){e.r(r),e.d(r,{default:function(){return x}});var o=e(8096),a=e(4925),t=e(5999),s=e(8026),i=e(5705),l=e(9434),d=e(2007),u=e(6727),c=e(7775),p=e(8627),m=e(184);var h=function(){var n=(0,l.I0)(),r=(0,p.a)().isLogging,e=u.Ry().shape({email:u.Z_().email("Invalid email").required("Required"),password:u.Z_().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),h=(0,i.TA)({initialValues:{email:"",password:""},validate:function(n){var r={};try{e.validateSync(n,{abortEarly:!1})}catch(o){o.inner.forEach((function(n){r[n.path]=n.message}))}return r},onSubmit:function(r){n((0,d.x4)(r)),h.resetForm()}});return(0,m.jsxs)(c.I4,{children:[(0,m.jsx)(c.vw,{children:"Sign in to PhoneBook"}),(0,m.jsxs)(c.Bt,{onSubmit:h.handleSubmit,children:[(0,m.jsxs)(o.Z,{children:[(0,m.jsx)(a.Z,{htmlFor:"email",children:"Email"}),(0,m.jsx)(t.Z,{size:"small",type:"text",id:"email",name:"email",value:h.values.email,onChange:h.handleChange,onBlur:h.handleBlur,autoComplete:"on",error:h.touched.email&&Boolean(h.errors.email)}),h.touched.email&&h.errors.email?(0,m.jsx)(c.mr,{children:h.errors.email}):null]}),(0,m.jsxs)(o.Z,{children:[(0,m.jsx)(a.Z,{htmlFor:"password",children:"Password"}),(0,m.jsx)(t.Z,{id:"password",type:"password",name:"password",value:h.values.password,error:h.touched.password&&Boolean(h.errors.password),onChange:h.handleChange,onBlur:h.handleBlur,autoComplete:"on"}),h.touched.password&&h.errors.password?(0,m.jsx)(c.mr,{children:h.errors.password}):null]}),(0,m.jsx)(s.c,{type:"submit",disabled:r,children:"Sign in"})]})]})};var x=function(){return(0,m.jsx)(h,{})}}}]);
//# sourceMappingURL=294.cc0589f0.chunk.js.map