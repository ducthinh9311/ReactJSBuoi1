import { createContext, useEffect, useState } from "react";
import AOS from "aos";
import { GiftForMom, ProductList } from "../pages/data/ProductList";
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [filterItem, setFilterItem] = useState ([])
  const [datafilter, setDataFilter] = useState ([])
  const handleAddProduct = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = ProductList.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("the products has been add to cart");
    }
  };
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);
  useEffect(() => {
    const getTotalCount = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.count;
      }, 0);
      setCount(res);
    };
    getTotalCount();
  }, [cart]);
  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  
  //filter
  useEffect(() => {
    setDataFilter(ProductList);
    setFilterItem([...new Set(ProductList.map((item) => item.title1))]);
  }, []);

  const gallery__filter = (itemData) => {
    const fillterItems = ProductList.filter((item) => item.title1 == itemData);
    setDataFilter(fillterItems);
  };
  return (
    <div>
      <AppContext.Provider
        value={{
          cart,
          handleAddProduct,
          removeProduct,
          increase,
          reduction,
          total,
          gallery__filter,
          datafilter,
          filterItem,
          setDataFilter
          // handleRemoveProduct,
          // handleCartClear,

          // gallery_filter,
          // collection,
          // setData,
          // data,
          // reduction,
          // increase,
          // total
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};
