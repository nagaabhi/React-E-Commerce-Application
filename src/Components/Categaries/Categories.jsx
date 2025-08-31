import foodCategories from "../../Data/CategoriesData/Categories";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Categories.css";
const Categories = () => {

  const {mode} = useContext(DataContext);
  return (
    <>
      <div className="food-categories-container">
        {foodCategories.map((foodCategories) => {
          return (
            <>
              <div className={`food-categories ${mode.type === "Dark" && "food-categories-result"}`}>
                <p> {foodCategories.type}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Categories;
