import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1/"
});

const getAllCuisine = async () => {
    try {
        const response = await axiosInstance.get("categories.php");
        console.log(response.data); // Log the data, not the whole response object
        return response.data.categories;
    } catch (e) {
        throw new Error("Filed to fetch the error");
    }
}

export default getAllCuisine;
