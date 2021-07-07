import React from 'react';
import "./Pedido";
import { Link } from "react-router-dom";
import "./Pedido.css"
class Pedido extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {orderPosition:"backwards"};

    }
    handleClick(indice) {
        this.props.eliminarPedido(indice);
    }
    revealOrder() {
        const keyframesForward = [
            { left: "100vw" },
            { left: "70vw" }
        ];
        const keyframesBackwards = [
            { left: "70vw" },
            { left: "100vw" }
        ];
        const timing = {
            duration: 500,
            fill:"forwards"
        };

        this.setState({orderPosition:this.state.orderPosition==="forwards"?"backwards":"forwards"},()=>{
            const keyframes = this.state.orderPosition==="forwards"?keyframesForward:keyframesBackwards;
            document.getElementById("pedido").animate(keyframes,timing);
        });

        
    }
    render() {
        const emptyOrderNote = (<h1>No hay nada en su pedido.</h1>);
        const orderNote = (<h1>Pedido.</h1>);
        const pedido = this.props.pedido.map((comida, indice) => {
            return (
                <li id="pedidoUnidad" key={comida.nombre}>
                    <div>{comida.nombre}: {comida.precio}$</div>
                    <button onClick={() => this.handleClick(indice)}>Eliminar</button>
                </li>
            );
        });
        return (
            <div id="pedido">
                <div id="icon"
                    onClick={() => this.revealOrder()}
                ><h1>carro</h1></div>
                <div id="cart-content">
                    {pedido.length > 0 ? orderNote : emptyOrderNote}
                    <ul>
                        {pedido}
                    </ul>
                    <p>total: {this.props.total}$</p>

                    <Link to="/pedido"><button className={!this.props.confirmar ? "hidden" : ""}>Recibir Pedido</button>
                    </Link>
                </div>

            </div>
        );

    }
}
export default Pedido;