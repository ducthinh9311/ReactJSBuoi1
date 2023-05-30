import image from "../../assets/image/iphone.jpg";
import "./Product.css";

import { useContext } from "react";
import { AppConText } from "../../context/AppConText";

export default function Products({ product }) {
  const { addToCart } = useContext(AppConText);
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4> {product.title}</h4>
        <div className="productCard__text">
          <h4 className="productCard__year">Năm sản xuất : {product.years}</h4>
          <div className="productCard__price">
            <h5> Giá: ${product.price}</h5>
          </div>
          <button
            className="productCard__button"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
