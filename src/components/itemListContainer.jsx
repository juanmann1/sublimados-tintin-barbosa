import React from 'react';

const ItemListContainer = ({ props }) => {

    const customStylep = {
        fontSize: '50px',
        padding: '20px'
    }

    return (
        <p style={customStylep}>{props}</p>
    )


}

export default ItemListContainer;