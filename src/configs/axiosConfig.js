import axios from "axios";

const app = axios.create({
  baseURL: "/api/",
});

export default app;
