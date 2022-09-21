import axios from "axios";

const alufarApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const getFaqs = async () => {
    const response = await alufarApi.get("/api/faqs?lang=az");
    return response.data;
};

export const getCategories = async () => {
    const response = await alufarApi.get("/api/categories?lang=az");
    return response.data;
};

export const getProjects = async () => {
    const response = await alufarApi.get("/api/projects?lang=az");
    return response.data;
};

export default alufarApi;
