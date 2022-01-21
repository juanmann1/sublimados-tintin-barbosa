import React from 'react';
import Item from './Item';

const ItemList = ({ props }) => {

    const [products, setProducts] = useState([
        { tittle: 'Taza', stock: '4' },
        { tittle: 'almohadon', stock: '13' },
        { tittle: 'remera', stock: '2' }
    ])




    return (
        <div>
            {
                products.map((item) => {
                    return (<Item productName={item.tittle} />)
                })
            }
        </div>
    )

}

export default ItemList;