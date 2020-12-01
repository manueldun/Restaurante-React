
import React from 'react';
import Comida from './Comida';
import Menu from './Menu';
import Pedido from './Pedido';

import pasticho from './imagenes/lasagna.jpg';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pedido: [], total: 0 };
    this.agregarPedido = this.agregarPedido.bind(this);
    this.eliminarProductoDePedido = this.eliminarProductoDePedido.bind(this);
    this.enviarPedido = this.enviarPedido.bind(this);
  }
  agregarPedido(nuevaComida) {
    const pedidoActualizado = [...this.state.pedido, nuevaComida];

    this.setState({ pedido: pedidoActualizado }, () => {
      const nuevoTotal = this.state.pedido.reduce((acumulador, valorActual) => {
        return acumulador + valorActual.precio;
      }, 0);
      this.setState({ total: nuevoTotal });
    });

  }
  eliminarProductoDePedido(indice) {
    const pedidoActualizado = [...this.state.pedido];
    pedidoActualizado.splice(indice, 1);
    console.log(pedidoActualizado);
    this.setState({ pedido: pedidoActualizado }, () => {
      const nuevoTotal = this.state.pedido.reduce((acumulador, valorActual) => {
        return acumulador + valorActual.precio;
      }, 0);
      this.setState({ total: nuevoTotal });
    });
  }
  enviarPedido()
  {
    this.setState({pedido:[],total:0});
    alert("Pedido enviado");
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/pedido">
            <div id="enviar-producto">
              <Pedido pedido={this.state.pedido}
                total={this.state.total}
                eliminarPedido={this.eliminarProductoDePedido} 
                confirmar={false}/>
                <label>DatosBancarios:</label>
                <input type="text"></input><br/>
                <label>Dirección:</label><br/>
                <input type="text"></input><br/>
                <Link to="/"><button onClick={this.enviarPedido}>Enviar Pedido</button>
                </Link>

            </div>
          </Route>
          <Route path="/">
            <div id="raiz">
              <div id="primera-vista" >
                <header >
                  <h1>Restaurant Delivery</h1>
                </header>
                <div id="contenido-vista">
                  <div id="oferta">
                    <h2>Oferta del dia</h2>
                    <Comida image={pasticho}
                      nombre="Pasticho"
                      precio={1.0}
                      setPedido={this.agregarPedido} />
                  </div>
                  <div id="bienvenida" >
                    <h1>Restaurante Delivery & Service</h1>
                    <p>Envío de comida preparada a domicilio y servicio de cálidad.</p>
                  </div>
                </div>
              </div>
              <div id="segunda-vista">
                <Menu
                  setPedido={this.agregarPedido}
                />
              </div>

              <Pedido pedido={this.state.pedido}
                total={this.state.total}
                eliminarPedido={this.eliminarProductoDePedido}
                confirmar={true} />
              <footer id="pie-de-pagina">
                <h1>Explicación</h1>
                <p>Pequeña aplicación Front End realizado en React, en éste se puede agregar platos al pedido que se va almacenando en el estado del Componente "App" con su total.</p>
                <p>Al hacer click en "Recibir Pedido" se va a otra página (ruta "/pedido") donde se pide otros datos y luego se debe dar click en "enviar pedido", cuya funcionalidad se deja para el back end.</p>
                <p>Esta aplicación fue realizado con React y React-Router sin utilizar código por parte del servidor.</p>
                <p>Las fotos mostradas en esta página no fueron tomadas por mí ni poseo derechos de tipos comerciales de éstas, se utilizan de forma de demostración.</p>
              </footer>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
