import React from 'react';
import { Link } from "react-router-dom";
import Pedido from "./Pedido"
import "./Checkout.css"
import "./GeneralStyle.css";
class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pedido: this.props.pedido,
            total: this.props.total,

        };

    }
    render() {

        return (
            <div id="enviarProducto">
                <Pedido
                    tabOrCheckout="checkout"
                    pedido={this.state.pedido}
                    total={this.state.total}
                    eliminarPedido={this.eliminarProductoDePedido}
                    confirmar={false} />
                <div id="paymentInfo">
                    <label>Nombre y Apellido: 
                        <input type="text" className="textField marginVertical"></input>
                    </label><br/>
                    <label>Cédula: 
                        <input type="text" className="textField marginVertical"></input>
                    </label><br/>
                    <label>Número de Tarjeta de Crédito: 
                        <input type="text" className="textField marginVertical"></input>
                    </label><br/>
                    <label>Número de Seguridad de la Tarjeta de Crédito: 
                        <input type="text" className="textField marginVertical"></input>
                    </label><br/>
                    <label>Fecha de Expiración de la Tarjeta de Crédito: 
                        <input type="text" className="textField marginVertical"></input>
                    </label><br/>
                    <label>Dirección: 
                        <input type="text" className="textField marginVertical"></input>
                    </label><br/>
                    <label>Número Telefónico:
                        <input type="text" className="textField marginVertical"></input>
                    </label><br/>
                    <Link to="/"><button onClick={this.enviarPedido} className="button yellow">Enviar Pedido</button>
                    </Link>
                </div>


            </div>
        );
    }
}


export default Checkout;