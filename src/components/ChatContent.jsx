import React, { useEffect, useState } from "react";
import MessageContainer from "./MessageContainer";
import { getSocket } from "../api";

const ChatContent = ({ name, username, uuid }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const conn = getSocket(uuid);
    setSocket(conn);

    conn.connect();

    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const onChats = (value) => {
      setChats(value);
    };

    conn.on("connect", onConnect);
    conn.on("disconnect", onDisconnect);
    conn.on("chats", onChats);

    return () => {
      conn.off("connect", onConnect);
      conn.off("disconnect", onDisconnect);
      conn.off("chats", onChats);
      conn.disconnect();
    };
  }, [uuid]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = () => {
    if (socket) {
      socket.emit("send-chat", message);
    }
    setMessage("");
  };

  return (
    <div className="w-2/3 h-screen relative bg-oxford-blue-900">
      <div className="absolute bg-oxford-blue-900 top-0 left-0 right-0 w-full h-20 p-4 border-b-[1px] border-b-oxford-blue-400 flex items-center justify-between">
        <h3 className="text-oxford-blue-300 text-2xl font-bold">
          {`${name} `}
          <span className="italic text-oxford-blue-500">@{username}</span>
        </h3>
        {isConnected ? (
          <h5 className="text-green-600">online</h5>
        ) : (
          <h5 className="text-red-600">offline</h5>
        )}
      </div>
      <MessageContainer data={chats} />
      <div className="w-full h-10 flex flex-row absolute bottom-0 left-0 right-0">
        <input
          className="flex flex-1 p-2 outline-none bg-oxford-blue-700 text-oxford-blue-300"
          placeholder="message..."
          type="text"
          value={message}
          onChange={handleChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              submitHandler();
            }
          }}
        />
        <button
          className="flex p-2 bg-oxford-blue-700 text-oxford-blue-300"
          onClick={submitHandler}
        >
          send{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatContent;
