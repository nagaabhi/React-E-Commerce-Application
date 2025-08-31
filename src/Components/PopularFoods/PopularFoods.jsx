import "./PopularFoods.css";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { MdFoodBank } from "react-icons/md";
import ProductItems from "./ProductItems";
import { Link } from "react-router-dom";
const PopularFoods = () => {
  const { foodData, isAuthenticated, userLogin } = useContext(DataContext);
  return (
    <>
      <div className="popular-heading">
        <div className="popular-heading-container-left">
          <span>
            <MdFoodBank />
          </span>
          Our Popular Menu
        </div>

        <div className="popular-heading-container-right">
          <Link to="/products" style={{ textDecoration: "none" }}>
            {userLogin[userLogin.length - 1].isAuthenticated && (
              <button
                disabled={userLogin.isAuthenticated}
                className="all-products-button"
              >
                All Products
              </button>
            )}
          </Link>
        </div>
      </div>

      <ProductItems foodData={foodData} />
    </>
  );
};
export default PopularFoods;
