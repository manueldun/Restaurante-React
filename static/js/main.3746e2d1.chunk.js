(this["webpackJsonpcommerce-react-app"]=this["webpackJsonpcommerce-react-app"]||[]).push([[0],{28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(1),c=i.n(n),d=i(21),o=i.n(d),r=(i(28),i(29),i(30),i(19)),s=i(8),l=i(9),j=i(4),h=i(11),b=i(10),p=(i(31),function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(j.a)(a)),a}return Object(l.a)(i,[{key:"handleClick",value:function(){this.props.setPedido({nombre:this.props.nombre,precio:this.props.precio})}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"comida",children:[Object(a.jsx)("img",{id:"img",src:this.props.image,alt:"lasagna",width:"300"}),Object(a.jsx)("h1",{children:this.props.nombre}),Object(a.jsxs)("p",{children:["Precio: ",this.props.precio,"$"]}),Object(a.jsx)("button",{onClick:this.handleClick,children:"Agregar a pedido"})]})}}]),i}(c.a.Component)),u=i.p+"static/media/lasagna.48757f23.jpg",m=i.p+"static/media/pizza.2c09bf57.jpg",O=i.p+"static/media/espaguetisCarbonara.c8ee2195.jpg",v=i.p+"static/media/ensaladaCesar.ae684de3.jpg",f=i.p+"static/media/hamburguesa.84ae2678.jpg",x=(i(32),i.p+"static/media/boton-flecha-der.56b8a243.svg"),g=i.p+"static/media/boton-flecha-izq.d1d0ce9c.svg",k=function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).handleClickRight=a.handleClickRight.bind(Object(j.a)(a)),a.handleClickLeft=a.handleClickLeft.bind(Object(j.a)(a)),a.state={menuIndex:0},a}return Object(l.a)(i,[{key:"handleClickRight",value:function(){document.getElementById("lista-menu").scrollBy({top:0,left:200,behaviour:"smooth"})}},{key:"handleClickLeft",value:function(){document.getElementById("lista-menu").scrollBy({top:0,left:-200,behaviour:"smooth"})}},{key:"render",value:function(){var e=this,t=[].concat([{image:u,nombreDeComida:"Pasticho",precio:1},{image:m,nombreDeComida:"Pizza",precio:3},{image:O,nombreDeComida:"Espagueti a la Carbonara",precio:2},{image:v,nombreDeComida:"Ensalada C\xe9sar",precio:.5},{image:f,nombreDeComida:"Hamburguesa",precio:4}]).map((function(t){return Object(a.jsx)("li",{id:"item",children:Object(a.jsx)(p,{image:t.image,nombre:t.nombreDeComida,precio:t.precio,setPedido:e.props.setPedido})},t.nombreDeComida)}));return Object(a.jsxs)("div",{id:"menu",children:[Object(a.jsx)("h1",{children:"Men\xfa"}),Object(a.jsxs)("ul",{id:"lista-menu",children:[Object(a.jsx)("div",{id:"icono-boton-izquierdo",className:"icono-boton",children:Object(a.jsx)("img",{src:g,width:"30",alt:"flecha",onClick:this.handleClickLeft})}),t,Object(a.jsx)("div",{id:"icono-boton-derecho",className:"icono-boton",children:Object(a.jsx)("img",{src:x,width:"30",alt:"flecha",onClick:this.handleClickRight})})]})]})}}]),i}(c.a.Component),C=i(14),P=(i(33),i.p+"static/media/logo delivery.b19b9549.svg"),y=function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(j.a)(a)),a.state={orderPosition:"backwards"},a}return Object(l.a)(i,[{key:"handleClick",value:function(e){this.props.eliminarPedido(e)}},{key:"revealOrder",value:function(){var e=this,t=[{transform:"translateX(0)",left:"100vw"},{transform:"translateX(-110%)",left:"100vw"}],i=[{transform:"translateX(-110%)",left:"100vw"},{transform:"translateX(0)",left:"100vw"}],a={duration:500,fill:"forwards"};this.setState({orderPosition:"forwards"===this.state.orderPosition?"backwards":"forwards"},(function(){var n="forwards"===e.state.orderPosition?t:i;document.getElementById("pedido").animate(n,a)}))}},{key:"render",value:function(){var e=this,t=Object(a.jsx)("h1",{children:"No hay nada en su pedido."}),i=Object(a.jsx)("h1",{children:"Pedido."}),n=this.props.pedido.map((function(t,i){return Object(a.jsxs)("li",{id:"pedidoUnidad",children:[Object(a.jsxs)("div",{children:[t.nombre,": ",t.precio,"$"]}),Object(a.jsx)("button",{onClick:function(){return e.handleClick(i)},children:"Eliminar"})]},t.nombre)}));return Object(a.jsxs)("div",{id:"pedido",children:[Object(a.jsx)("div",{id:"icon",onClick:function(){return e.revealOrder()},children:Object(a.jsx)("img",{src:P,width:"100",alt:"flecha",onClick:this.handleClickRight})}),Object(a.jsxs)("div",{id:"cart-content",children:[n.length>0?i:t,Object(a.jsx)("ul",{children:n}),Object(a.jsxs)("p",{children:["total: ",this.props.total,"$"]}),Object(a.jsx)(C.b,{to:"/pedido",children:Object(a.jsx)("button",{className:this.props.confirmar?"":"hidden",children:"Recibir Pedido"})})]})]})}}]),i}(c.a.Component),D=i(2),w=function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).state={pedido:[],total:0},a.agregarPedido=a.agregarPedido.bind(Object(j.a)(a)),a.eliminarProductoDePedido=a.eliminarProductoDePedido.bind(Object(j.a)(a)),a.enviarPedido=a.enviarPedido.bind(Object(j.a)(a)),a}return Object(l.a)(i,[{key:"agregarPedido",value:function(e){var t=this,i=[].concat(Object(r.a)(this.state.pedido),[e]);this.setState({pedido:i},(function(){var e=t.state.pedido.reduce((function(e,t){return e+t.precio}),0);t.setState({total:e})}))}},{key:"eliminarProductoDePedido",value:function(e){var t=this,i=Object(r.a)(this.state.pedido);i.splice(e,1),console.log(i),this.setState({pedido:i},(function(){var e=t.state.pedido.reduce((function(e,t){return e+t.precio}),0);t.setState({total:e})}))}},{key:"enviarPedido",value:function(){this.setState({pedido:[],total:0}),alert("Pedido enviado")}},{key:"render",value:function(){return Object(a.jsx)(C.a,{children:Object(a.jsxs)(D.c,{children:[Object(a.jsx)(D.a,{path:"/pedido",children:Object(a.jsxs)("div",{id:"enviar-producto",children:[Object(a.jsx)(y,{pedido:this.state.pedido,total:this.state.total,eliminarPedido:this.eliminarProductoDePedido,confirmar:!1}),Object(a.jsx)("label",{children:"DatosBancarios:"}),Object(a.jsx)("input",{type:"text"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Direcci\xf3n:"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text"}),Object(a.jsx)("br",{}),Object(a.jsx)(C.b,{to:"/",children:Object(a.jsx)("button",{onClick:this.enviarPedido,children:"Enviar Pedido"})})]})}),Object(a.jsx)(D.a,{path:"/",children:Object(a.jsxs)("div",{id:"raiz",children:[Object(a.jsxs)("div",{id:"primera-vista",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"Restaurant Delivery"})}),Object(a.jsxs)("div",{id:"contenido-vista",children:[Object(a.jsxs)("div",{id:"oferta",children:[Object(a.jsx)("h2",{children:"Oferta del dia"}),Object(a.jsx)(p,{image:u,nombre:"Pasticho",precio:1,setPedido:this.agregarPedido})]}),Object(a.jsxs)("div",{id:"bienvenida",children:[Object(a.jsx)("h1",{children:"Restaurante Delivery & Service"}),Object(a.jsx)("p",{children:"Env\xedo de comida preparada a domicilio y servicio de c\xe1lidad."})]})]})]}),Object(a.jsx)("div",{id:"segunda-vista",children:Object(a.jsx)(k,{setPedido:this.agregarPedido})}),Object(a.jsx)(y,{pedido:this.state.pedido,total:this.state.total,eliminarPedido:this.eliminarProductoDePedido,confirmar:!0}),Object(a.jsxs)("footer",{id:"pie-de-pagina",children:[Object(a.jsx)("h1",{children:"Explicaci\xf3n"}),Object(a.jsx)("p",{children:'Peque\xf1a aplicaci\xf3n Front End realizado en React, en \xe9ste se puede agregar platos al pedido que se va almacenando en el estado del Componente "App" con su total.'}),Object(a.jsx)("p",{children:'Al hacer click en "Recibir Pedido" se va a otra p\xe1gina (ruta "/pedido") donde se pide otros datos y luego se debe dar click en "enviar pedido", cuya funcionalidad se deja para el back end.'}),Object(a.jsx)("p",{children:"Esta aplicaci\xf3n fue realizado con React y React-Router sin utilizar c\xf3digo por parte del servidor."}),Object(a.jsx)("p",{children:"Las fotos mostradas en esta p\xe1gina no fueron tomadas por m\xed ni poseo derechos de tipos comerciales de \xe9stas, se utilizan de forma de demostraci\xf3n."})]})]})})]})})}}]),i}(c.a.Component),R=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,40)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,d=t.getTTFB;i(e),a(e),n(e),c(e),d(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),R()}},[[39,1,2]]]);
//# sourceMappingURL=main.3746e2d1.chunk.js.map