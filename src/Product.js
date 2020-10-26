import React from "react";
import "./Product.css";
import { useStateValue } from "./Stateprovider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addtobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>
          {props.title}
          <br></br>
          <small>$</small>
          <strong className="product__price">{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={props.image} alt="product1" />
      <button className="product__button" onClick={addtobasket}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
