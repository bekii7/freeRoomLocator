import axios from "axios";
const baseServerUrl = "localhost:3000";
export const api = axios.create({
  baseURL: baseServerUrl,
  withCredentials: true, 
});



