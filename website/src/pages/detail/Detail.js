import { useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import { FaFacebookF, FaInstagram, FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../components/AppContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Detail.css";
export default function Detail() {
  const { id } = useParams();
  const { handleAddProduct } = useContext(AppContext);
  const detail = ProductList.filter((product, index) => {
    return product.id === id;
  });
  console.log(detail);
  return (
    <div>
      <Header />
      {detail.map((product) => (
        <div className="single-product-main-content" key={product.id}>
          <div className="layout">
            <div className="single-product-page">
              <div className="left">
                <img src={product.img} alt="" />
              </div>
              <div className="right">
                <span className="name">{product.title}</span>
                <br></br>
                <span className="price">$ {product.price}</span>
                <br></br>
                <span className="sku">SKU: {product.sku}</span>
                <br></br>
                <br></br>
                <div className="size_title">
                  Size:
                  <span className="size"> {product.size}</span>
                  <span className="size"> {product.size1}</span>
                  <span className="size"> {product.size2}</span>
                  <span className="size"> {product.size3}</span>
                  <span className="size"> {product.size4}</span>
                  <span className="size"> {product.size5}</span>
                </div>
                <br></br>
                <span className="desc">
                  Description
                  <hr></hr>
                  {product.content}
                </span>
                <br></br>
                <br></br>
                <span className="desc">{product.content1}</span>
                <br></br>
                <span className="desc">{product.content2}</span>
                <br></br>
                <span className="desc">{product.content3}</span>
                <br></br>
                <span className="desc">{product.content4}</span>
                <br></br>

                <div className="cart-buttons">
                  <div className="quantity-buttons">
                    Quantity:
                    {/* <br></br>
                    <br></br> */}
                    <span
                      className="quantity_buttons_1"
                      style={{ width: "200px" }}
                    >
                      -
                    </span>
                    <span>{product.count}</span>
                    <span
                      className="quantity_buttons_2"
                      style={{ width: "200px" }}
                    >
                      +
                    </span>
                  </div>
                  <br></br>
                  <div
                    className="add-to-cart-button"
                    onClick={() => handleAddProduct(product.id)}
                  >
                    {/* <FaCartPlus size={20} /> */}
                    <p className="addtocart"> ADD TO CART</p>
                  </div>
                </div>
                <br></br>
                <span className="divider" />
                <div className="info-item">
                  <span className="text-bold">
                    Category:
                    <span> {product.title1}</span>
                  </span>
                  <br></br>

                  <span className="text-bold">
                    Share:
                    <span className="social-icons">
                      <FaFacebookF size={16} />
                      <FaInstagram size={16} />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
