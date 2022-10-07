import axios from 'axios'

export async function getAllProducts() {
    const response = await axios.get("http://localhost:3001/api/products/");
    console.log("Response products service: ", response)
    return response;
}

export async function getAllProductsSold() {
    const response = await axios.get("http://localhost:3001/api/products/products-sold");
    console.log("Response products service: ", response)
    return response;
}
