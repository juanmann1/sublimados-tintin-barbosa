import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({ data }) => {
  const customStyleContainer = {
    border: "1px solid black",
    width: "25%",
    display: "block",
    borderRadius: "10px",
    boxShadow: "7px 7px 15px #0c05007a",
  };

  const customStyleImg = {
    width: "90%",
    height: "50%",
    paddingBottom: "20px",
  };

  const customStyleTittle = {
    fontSize: "40px",
    fontWeight: "700",
  };

  const customStyleDescription = {
    fontSize: "20px",
    marginTop: "10px",
    padding: "5px",
  };

  const customStylePrice = {
    fontSize: "40px",
  };


  return (
    <div style={customStyleContainer}>
      <p>{data.id}</p>
      <p style={customStyleTittle}>{data.title}</p>
      <img style={customStyleImg} src={data.pictureURL} alt="" />
      <ItemCount stock={data.stock} />
      <p style={customStyleDescription}>{data.description}</p>
      <p style={customStylePrice}>{data.price}</p>
      <p>stock:{data.stock}</p>
    </div>
  );
};

export default ItemDetail;
