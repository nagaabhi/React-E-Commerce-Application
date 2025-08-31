import axios from "axios";

export const getFoodData = () => {
  return axios.get(`https://dummyjson.com/recipes`);
};

export const getSingleProduct = (productId) => {
  return axios.get(`https://dummyjson.com/recipes/${productId}`)

}
