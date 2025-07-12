import axios from "axios";
const baseServerUrl = "localhost:3000";
export const api = axios.create({
  baseURL: baseServerUrl,
  withCredentials: true, 
});


const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}


export const getRooms = async () => {  
  try {
    const response = await api.get("/rooms");
    return response.data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw error;
  }
}