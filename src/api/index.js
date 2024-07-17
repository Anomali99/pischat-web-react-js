import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_API_URL;

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

const login = async (data) => {
  const url = `${baseURL}/user/login`;
  try {
    const res = await axios.post(url, data, options);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

const register = async (data) => {
  const url = `${baseURL}/user/register`;
  try {
    const res = await axios.post(url, data, options);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export { login, register };
