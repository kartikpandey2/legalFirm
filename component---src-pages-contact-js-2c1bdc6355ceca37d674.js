(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=(n(158),n(162)),i=n(161),r=n(7),c=n.n(r),s=n(166),m=n.n(s),u=n(299),d=n.n(u),h={contactUs:{paddingBottom:"5rem"},h1:{textAlign:"center"},container:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},containerMobileView:{display:"flex",flexDirection:"column",alignItems:"center"},inputContainer:{marginBottom:"1rem"},button:{backgroundColor:"#2196F3",color:"white"},cancelButton:{backgroundColor:"#d9534f",color:"white"},submitButtom:{backgroundColor:"#13CE66",color:"white",marginRight:"0.2rem"}},w=function(e){var t=e.submit,n=e.cancel;return l.a.createElement("div",null,l.a.createElement("div",{style:h.inputContainer},l.a.createElement("label",null,"Name"),l.a.createElement(d.a,null)),l.a.createElement("div",{style:h.inputContainer},l.a.createElement("label",null,"Email"),l.a.createElement(d.a,null)),l.a.createElement("div",{style:h.inputContainer},l.a.createElement("label",null,"Phone Number"),l.a.createElement(d.a,null)),l.a.createElement("div",{style:h.inputContainer},l.a.createElement("label",null,"Description"),l.a.createElement(d.a,null)),l.a.createElement("div",null,l.a.createElement(m.a,{onClick:t,style:h.submitButtom},"Submit"),l.a.createElement(m.a,{onClick:n,style:h.cancelButton},"Cancel")))},E=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleResize=function(){var e=window.innerWidth,t=window.innerWidth>480;n.setState({width:e,showForm:t})},n.showForm=function(){n.setState({showForm:!0})},n.hideForm=function(){n.setState({showForm:!1})},n.state={width:0,showForm:!1},n}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({width:window.innerWidth,showForm:window.width>480}),window.addEventListener("resize",this.handleResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},n.render=function(){var e=this.state,t=e.width,n=e.showForm?l.a.createElement("div",null,l.a.createElement("h3",null,"Free Consultation"),l.a.createElement(w,{submit:function(){},cancel:this.hideForm})):l.a.createElement(m.a,{onClick:this.showForm,style:h.button},"Book Free Consultation");return l.a.createElement("section",{style:h.contactUs,className:"even"},l.a.createElement("h1",{style:h.h1},"Contact Us"),l.a.createElement("div",{style:t>480?h.container:h.containerMobileView},l.a.createElement("div",null,"Address"),n))},t}(a.Component);t.default=function(){return l.a.createElement(o.a,{page:"contact"},l.a.createElement(i.a,{title:"Page two"}),l.a.createElement(E,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-2c1bdc6355ceca37d674.js.map