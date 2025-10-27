import axios from "axios";

export const blogApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = () => blogApi.get("/posts");
export const getPostById = (id) => blogApi.get(`/posts/${id}`);