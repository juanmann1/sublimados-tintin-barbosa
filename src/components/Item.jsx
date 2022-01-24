import React from 'react';
import ItemCount from './ItemCount';
import { useState } from 'react';

const Item = ({ productName, productId, productDescription, productPrice, productPicture, stock } = useState) => {
    const customStyleContainer = {
        border: '1px solid black',
        width: '25%',
        display: 'block',
        borderRadius: '10px',
        boxShadow: '7px 7px 15px #0c05007a',
    }

    const customStyleImg = {
        width: '90%',
        height: '50%',
        paddingBottom: '20px'
    }

    const customStyleTittle = {
        fontSize: '40px',
        fontWeight: '700'
    }

    const customStyleDescription = {
        fontSize: '20px',
        marginTop: '10px',
        padding: '5px'
    }

    const customStylePrice = {
        fontSize: '40px',
    }

    return (
        <div style={customStyleContainer}>

            <p >{productId}</p>
            <p style={customStyleTittle}>{productName}</p>
            <img style={customStyleImg} src={productPicture} alt="" />
            <ItemCount stock={stock} />
            <p style={customStyleDescription}>{productDescription}</p>
            <p style={customStylePrice}>{productPrice}</p>
            <p>stock:{stock}</p>
        </div>
    )
}

export default Item;