import React from "react";
import { useState } from 'react';
const ItemCount = () => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <div>
                <p>{count}</p>
                <button onClick={() => { setCount(count - 1) }}>-</button>
                <button onClick={() => { setCount(count + 1) }}>+</button>
            </div>
        </div>
    )
}
export default ItemCount;