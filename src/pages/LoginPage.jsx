import React, { useState } from "react";
import { login } from "../api";
import { CustomModal } from "../components";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ message: "", icon: true });
  const [isNull, setNull] = useState({ username: false, password: false });
  const navigate = useNavigate();

  function handleChange(e, setValue) {
    setValue(e.target.value);
  }

  const closeModal = () => {
    setIsOpen(false);
    for (let value of ["username", "user_uuid", "name", "login"]) {
      console.log(localStorage.getItem(value));
    }
    navigate("/");
  };

  async function submitHandler() {
    setNull({
      username: username.trim() == "",
      password: password.trim() == "",
    });
    if (!isNull.username && !isNull.password) {
      const res = await login({ name, username, password });
      let resMessage = { message: res.message, icon: true };
      if (resMessage.message == "login success") {
        resMessage.icon = false;
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("user_uuid", res.data.user_uuid);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("login", true);
      }
      setMessage(resMessage);
      setIsOpen(true);
    }
  }

  return (
    <div className="w-screen h-screen justify-center items-center flex">
      <div className="w-full max-w-sm flex flex-col items-center">
        <h1 className="font-bold text-4xl text-oxford-blue-300 mb-4 flex ">
          <svg
            className="w-10 h-10 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 27940 27940"
            fill="currentColor"
          >
            <path d="M13970 0c7683.5,0 13970,6286.5 13970,13970 0,7683.5 -6286.5,13970 -13970,13970 -7683.5,0 -13970,-6286.5 -13970,-13970 0,-7683.5 6286.5,-13970 13970,-13970zm-6044.99 24069.62c2310.36,-2335.39 3830.47,-5454.16 4126.25,-8922.21l3837.51 0c295.77,3468.05 1815.87,6586.8 4126.23,8922.19l1862.77 -1795.45c-1860.48,-1870.1 -3101.74,-4356.79 -3390.41,-7126.74l2951.85 0 0 -2489.74 -2951.85 0c281.79,-2703.93 1471.31,-5137.98 3258.47,-6992.01l-1862.58 -1795.28c-2236.34,2319.96 -3704.36,5385.6 -3994.48,8787.29l-3837.51 0c-290.12,-3401.69 -1758.16,-6467.33 -3994.5,-8787.29l-1862.58 1795.28c1787.16,1854.03 2976.7,4288.06 3258.49,6992.01l-2951.87 0 0 2489.74 2951.87 0c-288.67,2769.95 -1529.95,5256.66 -3390.43,7126.74l1862.77 1795.47z" />
          </svg>
          Pischat
        </h1>
        <form className="bg-oxford-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-oxford-blue-800 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className={`shadow appearance-none border  rounded w-full py-2 px-3 bg-oxford-blue-200 text-oxford-blue-700 leading-tight focus:outline-none focus:shadow-outline ${
                !isNull.username ? "border-oxford-blue-700" : "border-red-500"
              }`}
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => handleChange(e, setUsername)}
            />
            {!isNull.username ? (
              ""
            ) : (
              <p className="text-[10px] ml-1 font-bold text-red-500">
                Please fill out this field!
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-oxford-blue-800 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border  rounded w-full py-2 px-3 bg-oxford-blue-200 text-oxford-blue-700 leading-tight focus:outline-none focus:shadow-outline ${
                !isNull.password ? "border-oxford-blue-700" : "border-red-500"
              }`}
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handleChange(e, setPassword)}
            />
            {!isNull.password ? (
              ""
            ) : (
              <p className="text-[10px] ml-1 font-bold text-red-500">
                Please fill out this field!
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-oxford-blue-900 hover:bg-oxford-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={submitHandler}
            >
              Login
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-oxford-blue-700 hover:text-oxford-blue-800"
              href="/register"
            >
              Register?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Anomali99. All rights reserved.
        </p>
      </div>

      <CustomModal
        isOpen={isOpen}
        closeModal={closeModal}
        message={message.message}
        icon={message.icon}
      />
    </div>
  );
}

export default LoginPage;
