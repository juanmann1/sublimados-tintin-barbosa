import React, { useEffect, useState } from "react";

import taza from "./../img/taza.jpg";
import ItemDetail from "./ItemDetail";

const item = {
  id: "1",
  tittle: "Taza",
  description: "Taza de ceramica blanca AAA sublimada  100% personalizada  ",
  price: "$400",
  pictureURL: taza,
  stock: 7,
};

const ItemDetailContainer = () => {
  const [data, setData] = useState();

  const getItem = () => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(item);
      }, 2000)
    );
  };
  useEffect(() => {
    getItem().then((data) => setData(data));
  }, []);
  return <>{data && <ItemDetail data={data} />}</>;
};

export default ItemDetailContainer;
