import React from 'react';
import "./Pedido";
import {Link} from "react-router-dom";
import "./Pedido.css"
class Pedido extends React.Component {

    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(indice)
    {
        this.props.eliminarPedido(indice);
    }
    render() {

        const pedido = this.props.pedido.map((comida,indice) => {
            return (
                <li id="pedidoUnidad" key={comida.nombre}>
                    <div>{comida.nombre}: {comida.precio}$</div>
                    <button onClick={() => this.handleClick(indice)}>Eliminar</button>
                </li>
            );
        });
        return (
            <div id="pedido">
                <ul>
                    {pedido}
                </ul>
                <p>total: {this.props.total}$</p>
                
                <Link to="/pedido"><button className={!this.props.confirmar ? "hidden":""}>Recibir Pedido</button>
                </Link>
            </div>
        );

    }
}
export default Pedido;