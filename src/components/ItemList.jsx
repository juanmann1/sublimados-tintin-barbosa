import React from 'react';
import Item from './Item';
import taza from './../img/taza.jpg';
import almohadon from './../img/almohadon.jpg'
import remera from './../img/remera.jpg';
import { useState, useEffect } from 'react';
const ItemList = () => {


    const customStyleContainer = {
        display: 'flex',
        justifyContent: 'space-around'
    }


    const [products, setProducts] = useState([])


    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();

            }, 3000)
        })

        task.then(() => {
            setProducts([
                { id: "1", tittle: 'Taza', description: 'Taza de ceramica blanca AAA sublimada  100% personalizada  ', price: '$400', pictureURL: taza, stock: 7 },
                { id: "2", tittle: 'almohadon', description: 'Combo de almohadones de 30cm X 30cm 100% personalizado  ', price: '$1000', pictureURL: almohadon, stock: 2 },
                { id: "3", tittle: 'remera', description: 'Remera todos los talles varios colores, 100% personalizada ', price: '$600', pictureURL: remera, stock: 9 }
            ])
        })
    })

    return (
        <div style={customStyleContainer}>
            {
                products.map(prod => {
                    return <Item productName={prod.tittle} productId={prod.id} productDescription={prod.description} productPrice={prod.price} productPicture={prod.pictureURL} stock={prod.stock} />
                })
            }

        </div>


    )

}
export default ItemList;