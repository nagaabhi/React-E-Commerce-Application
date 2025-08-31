import { FaStar } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
const ProductItems = ({ foodData }) => {
  const { filterItems, mode } = useContext(DataContext);
  return (
    <>
      <div className={`most-popular-foods`}>
        {foodData &&
          foodData
            .filter((food) => food.tags.includes(filterItems))
            .map((food) => {
              return (
                <>
                  <NavLink
                    to={`/products/${food.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className={`food-item-container  ${
                        mode.type === "Dark" && "most-popular-result"
                      }`}
                      key={food.id}
                    >
                      <div className="food-item-image">
                        <img src={food.image} alt="" />
                      </div>

                      <div className="name-place-retings">
                        <div className="name">
                          <h4>{food.name}</h4>
                          <p>{food.tags.map((tag) => tag + ", ")}</p>
                        </div>
                        <div className="ratings-price">
                          <div className="ratings">
                            <span>{food.rating}</span>
                            <FaStar size="0.8rem" />
                          </div>
                          <div className="price">
                            <p>
                              <FaIndianRupeeSign size="0.8rem" />
                              <span>{food.reviewCount}</span> for one
                            </p>
                            <p>21 mins</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </>
              );
            })}
      </div>
    </>
  );
};
export default ProductItems;
