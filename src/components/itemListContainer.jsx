import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ props }) => {

    const customStylep = {
        fontSize: '50px',
        padding: '20px'
    }

    return (
        <div>
            <p style={customStylep}>{props}</p>
            <ItemCount />


        </div>
    )


}

export default ItemListContainer;