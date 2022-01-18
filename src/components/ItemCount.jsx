import React from "react";
import { useState } from 'react';
const ItemCount = () => {
    const [count, setCount] = useState(0);

    const customStyleContainer = {
        display: 'flex',
        justifyContent: 'center',
    }

    const customStyleItemContainer = {
        border: '1px solid #000',
        backgroundColor: 'rgba(256, 256 ,256, 0.450)',
        padding: '5px',
        width: '20%',
        borderRadius: '10px'
    }

    const customStyleP = {
        fontSize: '30px',
        fontWeight: '700',
    }

    const customStyleButtom = {
        backgroundColor: 'rgb(89, 6, 167, 0.696)',
        color: '#fff',
        fontSize: '25px',
        padding: '0',
        width: '45%',
        margin: '5px',
        borderRadius: '10px',
    }



    const substract = () => {
        if (count - 1 >= 0) {
            setCount(count - 1)
        } else {
            setCount(0)
        }
    }

    return (
        <div style={customStyleContainer}>
            <div style={customStyleItemContainer} >
                <p style={customStyleP}>{count}</p>
                <button style={customStyleButtom} onClick={substract}>-</button>
                <button style={customStyleButtom} onClick={() => { setCount(count + 1) }}>+</button>
            </div>
        </div>
    )
}
export default ItemCount;