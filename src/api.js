import axios from "axios";
const api = "http://localhost:3000/products";

export async function fetchProducts(){
    const data = await axios.get(api);
    return data.data;
}