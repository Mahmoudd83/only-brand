import axios from "axios";

// const baseURL = 'http://localhost:5000/api/product';

export async function ProductsData() {
  const products = await axios.get('./data.json')
  // axios.get(baseURL).then(response => console.log(response.data));
  return products;
}
  