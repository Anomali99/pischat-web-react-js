import { io } from "socket.io-client";

const socket = (uuid) => {
  return io(`wss://${import.meta.env.VITE_BASE_API_URL}`, {
    query: { user_uuid: localStorage.getItem("user_uuid"), to_uuid: uuid },
    autoConnect: false,
  });
};

export default socket;
