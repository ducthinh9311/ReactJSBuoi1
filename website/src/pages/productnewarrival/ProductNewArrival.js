import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Product_NewArrival } from "../data/ProductList";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./ProductNewArrival.css";
import { AppContext } from "../../components/AppContext";
import { useContext } from "react";
import Filter from "../filter/Filter";
import { Link } from "react-router-dom";
export default function ProductNewArrival() {
  const { handleAddProduct } = useContext(AppContext);
  return (
    <div>
      <Header />
      <h2 className="title">New Arrival</h2>
      <Filter />
      <div className="newarrival_product" data-aos="fade-up">
        {Product_NewArrival.map((item) => (
          <CardGroup className="new" key={item.id}>
            <Card className="new_card">
              <Card.Body>
                <Link to={`/newarrival/${item.id}`}>
                  <Card.Img
                    variant="top"
                    src={item.img}
                    className="newarrival_card"
                  />
                </Link>

                <Card.Text>{item.title}</Card.Text>
                <Card.Title>{item.price}</Card.Title>
              </Card.Body>
              {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
            </Card>
            {/* <div className="btn">
              <button onClick={() => handleAddProduct(item.id)}>Buy now</button>
            </div> */}
          </CardGroup>
        ))}
      </div>
      <Footer />
    </div>
  );
}
