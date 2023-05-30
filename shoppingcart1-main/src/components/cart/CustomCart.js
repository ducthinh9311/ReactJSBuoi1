import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AppConText } from "../../context/AppConText";

export default function CustomCart() {
  const { cart, changeQty, removeItem } = useContext(AppConText);

  return (
    <div className="carts">
      <h1>Carts</h1>
      {cart &&
        cart.map((item, index) => {
          return (
            <div key={index}>
              {item.title}
              <img src={item.image} />
              -- quantity:
              <button onClick={() => changeQty(item.id, -1)} className="btn">
                -
              </button>
              {item.qty}
              <button onClick={() => changeQty(item.id, 1)} className="btn">
                +
              </button>
              <button onClick={() => removeItem(item.id)} className="btn">
                X
              </button>
            </div>
          );
        })}
    </div>
  );
}
