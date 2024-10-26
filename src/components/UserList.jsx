import React from "react";
import { getUsers } from "../api";

const result = await getUsers(localStorage.getItem("user_uuid"));

const UserList = ({ clickHandle, currentUser }) => {
  const users = result.data;

  return (
    <div className="w-full h-[calc(100vh-5rem)] overflow-y-auto">
      {users.map((user) => (
        <div
          key={user.user_uuid}
          className={`w-full p-4 border-b-[1px] border-b-oxford-blue-400 flex flex-row justify-between items-center ${
            currentUser == user.user_uuid ? "bg-oxford-blue-700" : ""
          }`}
          onClick={() => clickHandle(user)}
        >
          <h1 className="text-oxford-blue-300 font-bold text-xl mb-1">
            {`${user.name} `}
            <span className="font-normal italic text-oxford-blue-400">
              @{user.username}
            </span>
          </h1>
          {/* <p className="bg-oxford-blue-300 py-1 px-2 rounded-full">10</p> */}
        </div>
      ))}
    </div>
  );
};

export default UserList;
