
import React from 'react';
import './Comida.css';
import './GeneralStyle.css'
class Comida extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.props.setPedido({
            nombre:this.props.nombre,
            precio:this.props.precio});
    }
    render() {
        
        return (
            <div id="comida">
                <img id="img" src={this.props.image} alt="lasagna" width="300"/>
                <h1>{this.props.nombre}</h1>
                <p>Precio: {this.props.precio}$</p>
                <button onClick={this.handleClick} className="button">Agregar a pedido</button>
            </div>
        );
    }
}
export default Comida;