
import React from 'react';
import imagenPasticho from "./imagenes/lasagna.jpg";
import imagenPizza from "./imagenes/pizza.jpg";
import imagenCarbonara from "./imagenes/espaguetisCarbonara.jpg";
import imagenEnsaladaCesar from "./imagenes/ensaladaCesar.jpg";
import imagenHamburguesa from "./imagenes/hamburguesa.jpg";
import "./Menu.css"
import flechaDer from './imagenes/boton-flecha-der.svg';
import flechaIzq from './imagenes/boton-flecha-izq.svg';

import Comida from './Comida';
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickRight = this.handleClickRight.bind(this);
        this.handleClickLeft = this.handleClickLeft.bind(this);
        this.state = { menuIndex: 0 }

    }
    handleClickRight() {
        const menu = document.getElementById("menu");
        menu.scrollBy({
            top: 0,
            left: 200,
            behaviour: 'smooth'
          });
    }
    handleClickLeft() {
        const menu = document.getElementById("menu");
        menu.scrollBy({
            top: 0,
            left: -200,
            behaviour: 'smooth'
          });
    }
    render() {
        const menu = [
            {
                image: imagenPasticho,
                nombreDeComida: "Pasticho",
                precio: 1.0
            },
            {
                image: imagenPizza,
                nombreDeComida: "Pizza",
                precio: 3.0
            },
            {
                image: imagenCarbonara,
                nombreDeComida: "Espagueti a la Carbonara",
                precio: 2.0
            },
            {
                image: imagenEnsaladaCesar,
                nombreDeComida: "Ensalada César",
                precio: 0.5
            },
            {
                image: imagenHamburguesa,
                nombreDeComida: "Hamburguesa",
                precio: 4.0
            }
        ];
        const menuList = [...menu].map((comida) => {
            return (
                <li id="item" key={comida.nombreDeComida}>
                    <Comida image={comida.image}
                        nombre={comida.nombreDeComida}
                        precio={comida.precio}
                        setPedido={this.props.setPedido}
                    />
                </li>
            )
        });
        return (
            <div id="menu">

                <h1>Menú</h1>

                <ul id="lista-menu">
                    <div id="icono-boton-izquierdo" className="icono-boton">
                        <img src={flechaIzq} width="30" alt="flecha"
                            onClick={this.handleClickLeft} />
                    </div>
                    {menuList}
                    <div id="icono-boton-derecho" className="icono-boton">
                        <img src={flechaDer} width="30" alt="flecha" 
                        onClick={this.handleClickRight} />
                    </div>
                </ul>
            </div >

        );
    };
}
export default Menu;