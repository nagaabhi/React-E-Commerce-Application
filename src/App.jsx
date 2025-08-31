import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import PopularFoods from "./Components/PopularFoods/PopularFoods";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/AllProducts/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Authentication/Login";
import { useContext } from "react";
import { DataContext } from "./Components/Context/DataContext";
import Categories from "./Components/Categaries/Categories";
import About from "./Components/About/About";
const App = () => {

  const { mode } = useContext(DataContext);

  if (mode.type === "Dark") {
    document.body.style.backgroundColor = " rgba(34, 34, 34, 1)";
    document.body.style.color = "white";
    document.body.style.transition = "all 0.5s ease-in-out";
  } else if (mode.type === "Light") {
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "black";
    document.body.style.transition = "all 0.5s ease-in-out";
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Banner />
              <PopularFoods />
              <Footer />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};
export default App;
