(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[9],{38:function(e,t,a){"use strict";var l=a(0),c=a.n(l),n=a(9),r=a(10),o=a(12),i=a(11),s=a(1),m=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={image:[],imageID:l.props.imageID},l}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;0!==this.state.imageID&&fetch("http://localhost:5000/geTiMagE/".concat(this.state.imageID)).then((function(t){e.setState({image:t})}))}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.price,n=e.offer,r=e.id;return c.a.createElement("div",null,null!==this.state.image.url?c.a.createElement(l.Suspense,{fallback:c.a.createElement("p",null,"...")},c.a.createElement(s.b,{image:this.state.image,to:"/SingleProduct/".concat(r),className:"card"},c.a.createElement("div",null,c.a.createElement("img",{className:"card-img",src:this.state.image.url,alt:""}),c.a.createElement("p",{className:"pdnm"},t),c.a.createElement("p",{className:"ofr-price"},"TK: ",a),c.a.createElement("p",{className:"offerprice"},"TK : ",Math.floor(a-a*n/100)),c.a.createElement("p",{className:"offerprice ofrprcnt"},n,"% off")))):c.a.createElement(l.Suspense,{fallback:c.a.createElement("p",null,"...")},c.a.createElement("div",null)))}}]),a}(l.Component);t.a=function(e){var t=e.robots;return c.a.createElement("div",null,t.map((function(e){return c.a.createElement("div",{className:"opscard"},c.a.createElement(m,{id:e._id,name:e.iteam,price:e.price,offer:e.offer,imageID:e.imageID}))})))}},48:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var l=a(9),c=a(10),n=a(12),r=a(11),o=a(0),i=a.n(o),s=a(38),m=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).brand=function(t){e.setState({brand:t.target.value})},e.budget1=function(){e.setState({price1:!e.state.price1})},e.budget2=function(){e.setState({price2:!e.state.price2})},e.budget3=function(){e.setState({price3:!e.state.price3})},e.colorred=function(){e.setState({red:!e.state.red})},e.colorGreen=function(){e.setState({green:!e.state.green})},e.colorYello=function(){e.setState({Yellow:!e.state.Yellow})},e.colorOrange=function(){e.setState({orange:!e.state.orange})},e.colorBlack=function(){e.setState({black:!e.state.black})},e.sizechangeS=function(){e.setState({SizeS:!e.state.SizeS})},e.sizechangeM=function(){e.setState({SizeM:!e.state.SizeM})},e.sizechangeL=function(){e.setState({SizeL:!e.state.SizeL})},e.fiftteoffr1=function(){e.setState({offer1:!e.state.offer1})},e.fiftteoffr2=function(){e.setState({offer2:!e.state.offer2})},e.fiftteoffr3=function(){e.setState({offer3:!e.state.offer3})},e.fiftteoffr4=function(){e.setState({offer4:!e.state.offer4})},e.fiftteoffr5=function(){e.setState({offer5:!e.state.offer5})},e.state={robots:[],fiftteoffr:!1,offer1:!1,offer2:!1,offer3:!1,offer4:!1,offer5:!1,SizeS:!1,SizeM:!1,SizeL:!1,red:!1,black:!1,Yellow:!1,green:!1,orange:!1,price1:!1,price2:!1,price3:!1,brand:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/AllProduct").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}}]),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.robots.filter((function(t){return!0!==e.offer1?e.robots:t.offer>10||10===t.offer?t:void 0})),a=t.filter((function(a){return!0!==e.offer2?t:a.offer>20||20===a.offer?a:void 0})),l=a.filter((function(t){return!0!==e.offer3?a:t.offer>30||30===t.offer?t:void 0})),c=l.filter((function(t){return!0!==e.offer4?l:t.offer>40||40===t.offer?t:void 0})),n=c.filter((function(t){return!0!==e.offer5?c:t.offer>50||50===t.offer?t:void 0})),r=n.filter((function(t){return!0!==e.SizeS?n:t.size.includes("S")?t:void 0})),m=r.filter((function(t){return!0!==e.SizeM?r:t.size.includes("M")?t:void 0})),f=m.filter((function(t){return!0!==e.SizeL?m:t.size.includes("L")?t:void 0})),u=f.filter((function(t){return!0!==e.red?f:t.tags.includes("red")?t:void 0})),d=u.filter((function(t){return!0!==e.green?u:t.tags.includes("green")?t:void 0})),E=d.filter((function(t){return!0!==e.orange?d:t.tags.includes("orange")?t:void 0})),b=E.filter((function(t){return!0!==e.black?E:t.tags.includes("black")?t:void 0})),h=b.filter((function(t){return!0!==e.Yellow?b:t.tags.includes("yellow")?t:void 0})),p=h.filter((function(t){return!0!==e.price1?h:t.price<500||500===t.price?t:void 0})),N=p.filter((function(t){return!0!==e.price1?p:t.price<1e3||t.price>500||500===t.price||1e3===t.price?t:void 0})),g=N.filter((function(t){return!0!==e.price1?N:t.price<2e3||t.price>1e3||1e3===t.price||2e3===t.price?t:void 0})),v=g.filter((function(t){return e.brand.length>0?t.BrandName.includes(e.brand.toString())?t:void 0:g}));return i.a.createElement("div",{className:"product-page"},i.a.createElement("div",{className:"product-filter"},i.a.createElement("p",{className:" title-filter title-main-f"},"Filters"),i.a.createElement("p",{className:"title-filter"},"BRAND"),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.brand,name:"isGoing",type:"text",className:"checkbox"}))),i.a.createElement("p",{className:"title-filter"},"PRICE"),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.budget1,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"TK : 0tk to 500tk "))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.budget2,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"TK : 500tk to 1,000tk "))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.budget3,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"TK : 1,000tk to 2,000tk ")))),i.a.createElement("p",{className:"title-filter"},"COLOR"),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.colorred,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color"}),i.a.createElement("div",{className:"color-title"},"Red "))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.colorGreen,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color color1"}),i.a.createElement("div",{className:"color-title"},"Green "))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.colorYello,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color color2"}),i.a.createElement("div",{className:"color-title"},"Yellow "))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.colorOrange,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color color3"}),i.a.createElement("div",{className:"color-title"},"Orange "))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.colorBlack,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color color4"}),i.a.createElement("div",{className:"color-title"},"Black")))),i.a.createElement("p",{className:"title-filter"},"SIZE"),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.sizechangeS,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"S ")))),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.sizechangeM,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"M ")))),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.sizechangeL,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"L ")))),i.a.createElement("p",{className:"title-filter"},"DISCOUNT RANGE"),i.a.createElement("form",null,i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.fiftteoffr1,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"10% and avobe"))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.fiftteoffr2,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"20% and avobe"))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{name:"isGoing",type:"checkbox",className:"checkbox",onChange:this.fiftteoffr3}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"30% and avobe"))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.fiftteoffr4,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"40% and avobe"))),i.a.createElement("label",{className:"color-label"},i.a.createElement("input",{onChange:this.fiftteoffr5,name:"isGoing",type:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"color-dtails"},i.a.createElement("div",{className:"color-title"},"50% and avobe"))))),i.a.createElement("div",{className:"ffc"},this.state.robots.length>0?i.a.createElement(o.Suspense,{fallback:i.a.createElement("p",null,"...")},i.a.createElement("div",null,i.a.createElement(s.a,{robots:v}))):i.a.createElement(o.Suspense,{fallback:i.a.createElement("p",null,"...")},i.a.createElement("div",null))))}}]),a}(o.Component)}}]);
//# sourceMappingURL=9.11fe690e.chunk.js.map