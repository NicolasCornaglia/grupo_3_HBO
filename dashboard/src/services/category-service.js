import axios from 'axios'

export async function getAllCategories() {
    const response = await axios.get("http://localhost:3001/api/products/categories/");
    console.log("Response category service: ", response)
    return response;
}

