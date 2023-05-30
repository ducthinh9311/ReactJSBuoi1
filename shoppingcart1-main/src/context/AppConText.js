import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppConText = createContext({});
export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  /** */
  const [show, setShow] = useState(false);

  const getData = async () => {
    const url = `https://6468b37e60c8cb9a2cafc05c.mockapi.io/Products1`;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (localStorage.getItem("cart_list")) {
      setCart(JSON.parse(localStorage.getItem("cart_list")));
    }
  }, []);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {}, [cart]);
  const addToCart = async (id) => {
    let kq = products.find((item) => item.id == id);
    const index = cart.findIndex((item) => item.id == id);
    if (index >= 0) {
      let newList = cart;
      newList[index]["qty"]++;
      setCart(newList);
      localStorage.setItem("cart_list", JSON.stringify(newList));
    } else {
      setCart([...cart, { ...kq, qty: 1 }]);
      localStorage.setItem(
        "cart_list",
        JSON.stringify([...cart, { ...kq, qty: 1 }])
      );
    }
  };
  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };
  // console.log(cart);
  // useEffect(() => {}, [cart]);

  const changeQty = (id, num) => {
    const kq = cart.map((item) =>
      item.id == id && !(num == -1 && item["qty"] == 1)
        ? { ...item, qty: item["qty"] + num }
        : item
    );
    setCart(kq);
    localStorage.setItem("cart_list", JSON.stringify(kq));
  };
  const removeItem = (id) => {
    const kq = cart.filter((item) => item.id != id);
    setCart(kq);
    localStorage.setItem("cart_list", JSON.stringify(kq));
  };
  return (
    <div>
      <AppConText.Provider
        value={{ show, products, addToCart, cart, changeQty, removeItem }}
      >
        {children}
      </AppConText.Provider>
    </div>
  );
};
