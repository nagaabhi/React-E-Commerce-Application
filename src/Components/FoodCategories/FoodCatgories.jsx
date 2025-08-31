import { useContext } from "react";
import foodCategories from "../../Data/CategoriesData/Categories";
import { DataContext } from "../Context/DataContext";
import "./FoodCategories.css";

const FoodCatgories = () => {
  const { setFilterItem, filterItems, mode } = useContext(DataContext);

  const showFiltredItems = (itemName) => {
    setFilterItem(itemName);
  };
  return (
    <>
      <div className="food-categorie-container">
        {foodCategories.map((food) => {
          return (
            <>
              <div
                onClick={() => showFiltredItems(food.type)}
                className={`category ${
                  filterItems === food.type ? "active-cat" : ""
                }  ${mode.type === "Dark" && "dark-mode-applied"}`}
              >
                {food.type}
              </div>
            </>
          );
        })}
      </div>
      <h1
        className={`filtred-results ${
          mode.type === "Dark" && "dark-mode-result"
        }`}
      >
        Showing Results for : <span>{filterItems}</span>
      </h1>
    </>
  );
};
export default FoodCatgories;
