import { useContext, useEffect, useState } from "react";
import { getSingleProduct } from "../../Data/FoodApiData/FoodApiData";
import { DataContext } from "../Context/DataContext";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const { addToCart, getId, mode } = useContext(DataContext);
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchFoodData = async () => {
      await getSingleProduct(id).then((response) => {
        setProduct(response.data);
      });
    };
    fetchFoodData();
  }, [id]);

  const updateCartByAdd = (id) => {
    addToCart(id);
    getId(id);
  };

  return (
    <>
      {product && (
        <div
          className={`product-details ${
            mode.type === "Dark" && "product-details-result"
          }`}
        >
          <div className={`product-image `}>
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-name">
            <strong>{product.name}</strong>
          </div>

          <div className="ingridients-prepration-time">
            <div className="ingridients-used">
              <h1>Ingridients Used:</h1>
              {product.ingredients.map((ingridients) => (
                <>
                  <ul>
                    <li>{ingridients}</li>
                  </ul>
                </>
              ))}
            </div>

            <div className="preperation-time">
              <p>
                <strong>Preperation Minutes :</strong>{" "}
                <span>{product.prepTimeMinutes}</span>{" "}
              </p>
              <p>
                <strong>Cooking Time Minutes :</strong>{" "}
                <span>{product.cookTimeMinutes}</span>{" "}
              </p>
              <p>
                <strong>Servings:</strong> <span>{product.servings}</span>{" "}
              </p>
              <p>
                <strong>Difficulty:</strong> <span>{product.difficulty}</span>{" "}
              </p>
              <p>
                <strong>Cuisine</strong> <span>{product.cuisine}</span>{" "}
              </p>
              <p>
                <strong>CaloriesPerServing:</strong>{" "}
                <span>{product.caloriesPerServing}</span>{" "}
              </p>
            </div>
          </div>

          <div className="insructions">
            <h1>Instrcutions</h1>
            {product.instructions.map((instrcut) => (
              <>
                <ul>
                  <li>{instrcut}</li>
                </ul>
              </>
            ))}
          </div>

          <div className="add-to-cart-button">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <button onClick={() => updateCartByAdd(product.id)}>
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductDetails;
