import { useContext } from "react";
import { AppConText } from "../../context/AppConText";
import "./Homepage.css";
import Products from "../../components/product/Product";
// import CustomCart from "../../components/cart/CustomCart";

export default function Homepage() {
  const { products } = useContext(AppConText);

  return (
    <>
      <div className="products__wrapper">
        {products.map((product, index) => (
          <Products key={index} product={product} />
        ))}
      </div>
    </>
  );
}
