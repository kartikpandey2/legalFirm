(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(169),o=t(164),s=t(7),l=t.n(s),d=(t(516),t(517)),c=t.n(d),u={h1:{textAlign:"Center"},articleMobileView:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},articleDefaultView:{display:"flex",justifyContent:"center",alignItems:"center"},imageContainerMobileView:{flexBasis:"100%"},imageContainerDefaultView:{flexBasis:"40%"},textContainerMobileView:{flexBasis:"100%"},textContainerDefaultView:{flexBasis:"50%"},name:{color:"#009eeb"},greenText:{color:"#02b875",marginBottom:"0.2em"}},m=function(e){var n=e.image,t=e.children,a=e.name,r=e.width,o=e.degree,s=e.position,l=r>480?u.articleDefaultView:u.articleMobileView,d=r>480?u.imageContainerDefaultView:u.imageContainerMobileView,c=r>480?u.textContainerDefaultView:u.textContainerMobileView;return i.a.createElement("article",{style:l},i.a.createElement("div",{style:d},i.a.createElement("img",{src:n})),i.a.createElement("div",{style:c},i.a.createElement("h3",{style:u.name},a),i.a.createElement("h4",{style:u.greenText},o),i.a.createElement("h4",{style:u.greenText},s),i.a.createElement("p",null,t)))},h=function(e){function n(n){var t;return(t=e.call(this,n)||this).handleScreenResize=function(){var e=window.innerWidth;t.setState({width:e})},t.state={width:0},t}l()(n,e);var t=n.prototype;return t.componentDidMount=function(){this.setState({width:window.width}),window.addEventListener("resize",this.handleScreenResize)},t.componentWillUnmount=function(){window.removeEventListener("resize",this.handleScreenResize)},t.render=function(){var e=this.state.width;return i.a.createElement("section",{className:"even"},i.a.createElement("h1",{style:u.h1},"Our Team"),i.a.createElement("div",null,i.a.createElement(m,{image:c.a,name:"AVANI MALIK",width:e,degree:"B.A. LLB (H), LLM",position:"MANAGING PARTNER"},"Avani is one of the founders and Managing Partner of Lotus Legal Associates. She completed her B.A LL.B. (Hons) from Guru Gobind Indraprastha University, USSLS, Dwarka, New Delhi (Main Campus) and completed her LLM from Kurukshetra University, Kurukshetra, Haryana. She started her Legal Practice in 2014 and is a member of Delhi High Court Bar Association and Dwarka Court Bar Association. She has handled numerous cases at various courts and tribunals and has a rich experience in handling Commercial & Civil laws, Infrastructure & Real Estate laws, Property Litigation, Consumer Petitions, matrimonial cases, arbitration cases, Delhi Rent Control Act, NI Act, etc. She has appeared and argued before the Hon’ble High Court of Delhi, District courts of Delhi, National Consumer Redressal Forum, State Consumer Redressal Forum, New Delhi, HRERA, Gurugram, and various Tribunals. She has assisted Judges of LokAdalatsession organized by Delhi High Court Legal Service Committee in 2009. She has done an internship under Delhi Legal Service Authority for the “Tihar Jail Project” in 2009. She has attended Advance Level Workshop on Intellectual Property Laws and Conference on Legal Education, Rule of Law and Governance in 2012 organized at Law Centre-1 Faculty of Law, University of Delhi, attended workshop on Role of Students in creating understanding and advancement of Human Rights Organized by National Human Rights Commission and USLLS and attended Seminar on E-Courts project and E-judiciary by Government of India."),i.a.createElement(m,{image:c.a,name:"BHUVAN CHADHA",width:e,degree:"B.A. LLB (H), LLM",position:"MANAGING PARTNER"},"Bhuvan is one of the founders and Managing Partner of Lotus Legal Associates. He completed his B.A. LL.B. (Hons.) from Hemvati Nanda Bahuguna University (Law College Dehradun) Uttarakhand India and L.L.M. from I.M.S Unison University Dehradun Uttarakhand India and joined the Bar. He is member of Nainital High Court Bar Association. He has handled numerous cases at various courts and tribunals and has a rich experience in handling writs, Consumer Petitions, matrimonial cases, Rent Control Act, NI Act, etc. He has appeared and argued before the various Hon’ble High Courts, District courts, National Consumer Redressal Forum, State Consumer Redressal Forum, and various Tribunals. He has also judged various moot courts conducted by various universities.")))},n}(a.Component),A={container:{padding:"3% 15%"}};n.default=function(){return i.a.createElement(r.a,{page:"team"},i.a.createElement(o.a,{title:"Page two"}),i.a.createElement("div",{style:A.container},i.a.createElement(h,null)))}},516:function(e,n,t){var a=t(25).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||t(18)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},517:function(e,n){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-team-js-04ae81f6377d13171d83.js.map