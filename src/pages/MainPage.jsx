import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ModalQuestion,
  UserList,
  ChatContent,
  BlankContent,
} from "../components";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [user, setUCurrentUser] = useState({});
  const navigate = useNavigate();

  const clickHandle = (data) => {
    setCurrentUser(data.user_uuid);
    setUCurrentUser(data);
  };
  const logoutHandle = () => setIsOpen(true);
  const noHandle = () => setIsOpen(false);
  const yesHandle = () => {
    setIsOpen(false);
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen justify-center items-center flex">
      <div className="w-full max-w-[1700px] flex flex-row bg-oxford-blue-600 gap-[1px]">
        <div className="w-1/3 h-screen bg-oxford-blue-800">
          <header className="h-20 border-b-[1px] border-b-oxford-blue-400 p-4 bg-oxford-blue-900 flex flex-row justify-between items-center">
            <nav className="font-bold text-4xl text-oxford-blue-300 flex">
              <svg
                className="w-10 h-10 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 27940 27940"
                fill="currentColor"
              >
                <path d="M13970 0c7683.5,0 13970,6286.5 13970,13970 0,7683.5 -6286.5,13970 -13970,13970 -7683.5,0 -13970,-6286.5 -13970,-13970 0,-7683.5 6286.5,-13970 13970,-13970zm-6044.99 24069.62c2310.36,-2335.39 3830.47,-5454.16 4126.25,-8922.21l3837.51 0c295.77,3468.05 1815.87,6586.8 4126.23,8922.19l1862.77 -1795.45c-1860.48,-1870.1 -3101.74,-4356.79 -3390.41,-7126.74l2951.85 0 0 -2489.74 -2951.85 0c281.79,-2703.93 1471.31,-5137.98 3258.47,-6992.01l-1862.58 -1795.28c-2236.34,2319.96 -3704.36,5385.6 -3994.48,8787.29l-3837.51 0c-290.12,-3401.69 -1758.16,-6467.33 -3994.5,-8787.29l-1862.58 1795.28c1787.16,1854.03 2976.7,4288.06 3258.49,6992.01l-2951.87 0 0 2489.74 2951.87 0c-288.67,2769.95 -1529.95,5256.66 -3390.43,7126.74l1862.77 1795.47z" />
              </svg>
              Pischat
            </nav>
            <nav
              className="text-oxford-blue-300 hover:text-white cursor-pointer"
              onClick={logoutHandle}
            >
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
              </svg>
            </nav>
          </header>
          <UserList clickHandle={clickHandle} currentUser={currentUser} />
        </div>
        {currentUser == "" ? (
          <BlankContent />
        ) : (
          <ChatContent
            name={user.name}
            username={user.username}
            uuid={user.user_uuid}
          />
        )}
      </div>
      <ModalQuestion
        isOpen={isOpen}
        yesHandle={yesHandle}
        noHandle={noHandle}
        message={"are you sure to log out"}
      />
    </div>
  );
};

export default MainPage;
