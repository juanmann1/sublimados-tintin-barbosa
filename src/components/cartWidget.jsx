import React from 'react';
import carrito from './../img/carrito-de-compras.png'; // with import


const cartwidget = () => {

    const customStyleContainer = {
        display: 'flex',
        padding: '0 30px'
    }

    const customStyleP = {

        color: '#fff',
        backgroundColor: '#d00',
        borderRadius: '90%',
        padding: ' 0 4px'
    }

    const customStyleCarrito = {
        width: '40px',
    }

    return (
        <div>
            <div style={customStyleContainer}>
                <img style={customStyleCarrito} src={carrito} alt="" />
                <p style={customStyleP}>0</p>
            </div>


        </div>

    )
}

export default cartwidget;