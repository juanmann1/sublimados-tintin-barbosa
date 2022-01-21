import React from 'react';
import ItemCount from './ItemCount';
const Item = ({ props }) => {

    return (
        <fragment>
            <p>titulo del producto</p>
            <img src="././img/carrito-de-compras.png" alt="" />
            <ItemCount />
            <p>Stock:<span>0</span></p>

        </fragment>
    )

}

export default Item;