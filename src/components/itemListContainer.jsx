import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ props }) => {

    const customStylep = {
        fontSize: '50px',
        padding: '20px',
    }

    return (
        <div >
            <p style={customStylep}>{props}</p>
            <div >
                <ItemList />
            </div>

        </div>
    )


}

export default ItemListContainer;