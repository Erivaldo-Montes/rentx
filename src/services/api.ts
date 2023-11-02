import Axios from "axios";
import { AppError } from "@/utils/AppError";

const axios = Axios.create({
  baseURL: "http://10.0.0.104:3333",
});

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    new AppError(error);
  }
);

export { axios };
