import React from 'react';
import "./Pedido";
import { Link } from "react-router-dom";
import "./Pedido.css"
import deliveryIcon from './imagenes/logo delivery.svg';
import "./GeneralStyle.css"
class Pedido extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { orderPosition: "backwards", tabOrCheckout: props.tabOrCheckout};

    }
    handleClick(indice) {
        this.props.eliminarPedido(indice);
    }
    revealOrder() {
        const keyframesForward = [
            {
                transform: "translateX(0)",
                left: "100vw"
            },
            {
                transform: "translateX(-110%)",
                left: "100vw"
            }
        ];
        const keyframesBackwards = [
            {
                transform: "translateX(-110%)",
                left: "100vw"
            },
            {
                transform: "translateX(0)",
                left: "100vw"
            },
        ];
        const timing = {
            duration: 200,
            fill: "forwards"
        };

        this.setState({ orderPosition: this.state.orderPosition === "forwards" ? "backwards" : "forwards" }, () => {
            const keyframes = this.state.orderPosition === "forwards" ? keyframesForward : keyframesBackwards;
            document.getElementById("pedido").animate(keyframes, timing);
        });


    }
    render() {
        const emptyOrderNote = (<h1>No hay nada en su pedido.</h1>);
        const orderNote = (<h1>Pedido.</h1>);
        const pedido = this.props.pedido.map((comida, indice) => {
            return (
                <li id="pedidoUnidad" key={comida.nombre}>
                    <div>{comida.nombre}: {comida.precio}$</div>
                    <button onClick={() => this.handleClick(indice)}
                    className="button">Eliminar</button>
                </li>
            );
        });
        return (
            <div className={this.props.tabOrCheckout} id="pedido">
                <div id="icon"
                className={this.props.tabOrCheckout==="checkout"?"checkoutIcon":"tabIcon"}
                onClick={() => this.revealOrder()}
                ><img src={deliveryIcon} width={this.props.tabOrCheckout==="checkout"?"300":"100"} alt="flecha" 
                onClick={this.handleClickRight} /></div>
                <div 
                id="cart-content" 
                className={this.props.tabOrCheckout==="checkout"?"checkoutContent":"tabContent"}>
                    {pedido.length > 0 ? orderNote : emptyOrderNote}
                    <ul>
                        {pedido}
                    </ul>
                    <p>total: {this.props.total}$</p>

                    <Link to="/pedido"><button className={!this.props.confirmar ? "hidden" : "button yellow"}>Recibir Pedido</button>
                    </Link>
                </div>

            </div>
        );

    }
}
export default Pedido;