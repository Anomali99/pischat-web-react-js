import React, { useState, useEffect } from "react";

const uuid = localStorage.getItem("user_uuid");

const MessageContainer = ({ data }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (data) {
      let results = [];
      let seenDates = new Set();

      data.forEach((item) => {
        let datetime = new Date(item.datetime);

        if (isNaN(datetime.getTime())) {
          console.error("Invalid datetime value:", item.datetime);
          return;
        }

        const optionsDate = { year: "numeric", month: "long", day: "numeric" };
        const optionsTime = {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        };
        let date = new Intl.DateTimeFormat("id-ID", optionsDate).format(
          datetime
        );
        let time = new Intl.DateTimeFormat("id-ID", optionsTime).format(
          datetime
        );

        if (!seenDates.has(date)) {
          results.push({ date: date, type: "date" });
          seenDates.add(date);
        }

        let chat = {
          ...item,
          type: "chat",
          date: date,
          time: time,
        };

        if (chat.user_to_uuid == uuid) {
          chat.read = true;
        }

        results.push(chat);
      });

      setMessages(results);
    } else {
      setMessages([]);
    }
  }, [data]);

  return (
    <ul className="w-full absolute top-20 bottom-10 left-0 right-0 flex flex-col py-4 gap-4 overflow-y-auto">
      {messages.length > 0 ? (
        messages.map((item) =>
          item.type === "date" ? (
            <li key={item.date} className="flex self-center">
              <p className="bg-oxford-blue-600 text-oxford-blue-300 rounded py-1 px-2">
                {item.date}
              </p>
            </li>
          ) : (
            <li
              key={item.chat_uuid}
              className={`mx-4 flex flex-col w-max p-2 rounded-lg shadow-md shadow-oxford-blue-950 ${
                item.user_from_uuid === uuid
                  ? "rounded-br-none bg-oxford-blue-950 self-end text-oxford-blue-400"
                  : "bg-oxford-blue-400 rounded-bl-none self-start text-oxford-blue-950"
              }`}
            >
              <p className="text-wrap min-w-20 max-w-[1000px] self-start">
                {item.message}
              </p>
              <p className="text-xs self-end flex">
                {item.time}
                <span
                  className={`ml-1 ${
                    item.read
                      ? item.user_from_uuid === uuid
                        ? "text-blue-500"
                        : "text-blue-700"
                      : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z" />
                  </svg>
                </span>
              </p>
            </li>
          )
        )
      ) : (
        <li>No messages</li>
      )}
    </ul>
  );
};

export default MessageContainer;
