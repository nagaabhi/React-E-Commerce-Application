import { getFoodData } from "../../Data/FoodApiData/FoodApiData";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const AuthContext = ({ children }) => {
  const [foodData, setFoodData] = useState();
  const [products, setProduct] = useState();
  const [filterItems, setFilterItem] = useState();
  const [id, getId] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });
  const [cartQuantity, setCartQuantity] = useState(1);
  const [authenticate, setAuthenticate] = useState("login");

  const [userLogin, setUserLogin] = useState(() => {
    const savedUser = localStorage.getItem("login");
    return savedUser ? JSON.parse(savedUser) : [{ isAuthenticated: false }];
  });
  console.log(userLogin);

  const [mode, setMode] = useState(() => {
    const theme = localStorage.getItem("mode");
    return theme ? JSON.parse(theme) : { type: "Dark" };
  });

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  });

  const updateAppMode = () => {
    setMode((prev) => ({
      ...prev,
      type: prev.type === "Dark" ? "Light" : "Dark",
    }));
    console.log(mode);
  };

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(userLogin));
  }, [userLogin]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchFoodData = async () => {
      await getFoodData().then((response) => {
        setFoodData(response.data.recipes.slice(0, 10));
        setProduct(response.data.recipes);
      });
    };
    fetchFoodData();
  }, []);

  const addToCart = (id) => {
    if (!cart[id]) {
      setCart((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
    console.log(id);
    console.log(products[id]);
  };

  const deleteFromCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const appData = {
    foodData,
    products,
    setFilterItem,
    filterItems,
    addToCart,
    deleteFromCart,
    getId,
    cart,
    setCartQuantity,
    cartQuantity,
    setCart,
    authenticate,
    setAuthenticate,
    userLogin,
    setUserLogin,
    isAuthenticated,
    setIsAuthenticated,
    mode,
    updateAppMode,
  };
  return (
    <>
      <DataContext.Provider value={appData}>{children}</DataContext.Provider>
    </>
  );
};
export default AuthContext;
