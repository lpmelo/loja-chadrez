import axios from "axios";

const app = axios.create({
  baseURL: process.env.DEFAULT_API_ROUTE,
});

export default app;
