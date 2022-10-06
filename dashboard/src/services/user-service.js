import axios from 'axios'

export async function getAllUsers() {
    const response = await axios.get("http://localhost:3001/api/users/");
    console.log("Response user service: ", response)
    return response;
}


