import axios from "axios";

export const axiosInstanse = axios.create({
  baseURL: "https://b2c49c5563ca800e.mokky.dev",
  headers: {
    Accept: "application/json",
  },
});
