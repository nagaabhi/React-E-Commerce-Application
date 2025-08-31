import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import ProductItems from "../PopularFoods/ProductItems";

const ProductItem = () => {
  const { products } = useContext(DataContext);
  return (
    <>
      <ProductItems foodData={products} />
    </>
  );
};
export default ProductItem;
