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
        this.state = { orderPosition: "backwards", tabOrCheckout: props.tabOrCheckout };

    }
    handleClick(indice) {
        this.props.eliminarPedido(indice);
    }
    revealOrder() {
        const keyframesForwardsTabs = [
            {
                transform: "translateX(0)",
                left: "100vw"
            },
            {
                transform: "translateX(-110%)",
                left: "100vw"
            }
        ];
        const keyframesBackwardsTabs = [
            {
                transform: "translateX(-110%)",
                left: "100vw"
            },
            {
                transform: "translateX(0)",
                left: "100vw"
            },
        ];
        const keyframesForwardsBackground = [

            {
                opacity: "0.0"
            },
            {
                opacity: "0.5"
            }
        ];
        const keyframesBackwardsBackground = [
            {
                opacity: "0.5"
            },
            {
                opacity: "0.0"
            }
        ];
        const timing = {
            duration: 200,
            fill: "forwards"
        };

        this.setState({ orderPosition: this.state.orderPosition === "forwards" ? "backwards" : "forwards" }, () => {
            const keyframesTabs =
                this.state.orderPosition === "forwards" ?
                    keyframesForwardsTabs :
                    keyframesBackwardsTabs;
                    
            const keyframesBackGrounds =
                this.state.orderPosition === "forwards" ?
                    keyframesForwardsBackground :
                    keyframesBackwardsBackground;
            document.getElementById("pedido").animate(keyframesTabs, timing);


            const dialogElementDom = document.getElementById("dialogBackground");

            dialogElementDom.style.display = this.state.orderPosition==="forwards" ? "block" : "none";
            dialogElementDom.animate(keyframesBackGrounds, timing).finished.then(()=>{
                
            });
            
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
            <div>
                <div id="dialogBackground"
                    className="visible"
                    onClick={() => this.revealOrder()}
                ></div>
                <div className={this.props.tabOrCheckout} id="pedido">
                    <div id="icon"
                        className={this.props.tabOrCheckout === "checkout" ? "checkoutIcon" : "tabIcon"}
                        onClick={() => this.revealOrder()}
                    ><img src={deliveryIcon} width={this.props.tabOrCheckout === "checkout" ? "300" : "100"} alt="flecha"
                        onClick={this.handleClickRight} /></div>
                    <div
                        id="cart-content"
                        className={this.props.tabOrCheckout === "checkout" ? "checkoutContent" : "tabContent"}>
                        {pedido.length > 0 ? orderNote : emptyOrderNote}
                        <ul>
                            {pedido}
                        </ul>
                        <p>total: {this.props.total}$</p>

                        <Link to="/pedido"><button className={!this.props.confirmar ? "hidden" : "button yellow"}>Recibir Pedido</button>
                        </Link>
                    </div>

                </div>
            </div >
        );

    }
}
export default Pedido;