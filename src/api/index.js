import axios from "axios";
import getSocket from "./socket";

const baseURL = `http://${import.meta.env.VITE_BASE_API_URL}`;

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

const login = async (data) => {
  const url = `${baseURL}/auth/login`;
  try {
    const res = await axios.post(url, data, options);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

const register = async (data) => {
  const url = `${baseURL}/auth/register`;
  try {
    const res = await axios.post(url, data, options);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

const getUsers = async (uuid) => {
  const url = `${baseURL}/user/${uuid}`;
  try {
    const res = await axios.get(url, options);
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export { login, register, getUsers, getSocket };
