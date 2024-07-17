import React, { useState } from "react";
import { ModalQuestion } from "../components";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const yesHandle = () => {
    setIsOpen(false);
    localStorage.clear();
    navigate("/login");
  };
  const noHandle = () => setIsOpen(false);
  const logoutHandle = () => setIsOpen(true);

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
          <div className="w-full">
            <div className="w-full p-4 border-b-[1px] border-b-oxford-blue-400">
              <h1 className="text-oxford-blue-300 font-bold text-xl mb-1">
                Nur Fatiq{" "}
                <span className="font-normal italic text-oxford-blue-400">
                  @Anomali99
                </span>
              </h1>
              <p className="text-oxford-blue-300 text-sm flex flex-row place-content-between">
                Hai. <span>17/07/2024</span>
              </p>
            </div>
            <div className="w-full p-4 border-b-[1px] border-b-oxford-blue-400 bg-oxford-blue-700">
              <h1 className="text-oxford-blue-300 font-bold text-xl mb-1">
                Nur Fatiq{" "}
                <span className="font-normal italic text-oxford-blue-400">
                  @Anomali99
                </span>
              </h1>
              <p className="text-oxford-blue-300 text-sm flex flex-row place-content-between">
                Hai. <span>17/07/2024</span>
              </p>
            </div>
            <div className="w-full p-4 border-b-[1px] border-b-oxford-blue-400">
              <h1 className="text-oxford-blue-300 font-bold text-xl mb-1">
                Nur Fatiq{" "}
                <span className="font-normal italic text-oxford-blue-400">
                  @Anomali99
                </span>
              </h1>
              <p className="text-oxford-blue-300 text-sm flex flex-row place-content-between">
                Hai. <span>17/07/2024</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-screen relative bg-oxford-blue-900">
          <div className="absolute bg-oxford-blue-900 top-0 left-0 right-0 w-full h-20 p-4 border-b-[1px] border-b-oxford-blue-400 flex items-center justify-between">
            <h3 className="text-oxford-blue-300 text-2xl font-bold">
              Nur Fatiq{" "}
              <span className="italic text-oxford-blue-500">@Anomali99</span>
            </h3>
            <h5 className="text-green-600">online</h5>
          </div>
          <ul className="w-full absolute top-20 bottom-10 left-0 right-0 flex flex-col py-4 gap-4">
            <li className="mx-4 flex self-start flex-col bg-oxford-blue-400 w-max p-2 rounded-lg rounded-bl-none shadow-md shadow-oxford-blue-950">
              <p className="text-wrap min-w-20 max-w-screen-lg  self-start text-oxford-blue-950">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, omnis. Saepe, doloribus, assumenda quidem magnam
                asperiores inventore minus nihil facere, at doloremque deleniti
                ut perferendis in quasi ratione nam! Beatae doloremque dolorum
                neque deleniti accusantium natus perferendis aperiam expedita.
                Laborum voluptate repellendus facere inventore debitis atque,
                fugiat animi? Eum libero quam dicta modi, quidem suscipit error?
                Vel alias amet, sed vitae qui maxime delectus modi natus,
                quisquam iste molestias quam odit soluta perferendis
                reprehenderit quos est laboriosam tempore cupiditate deleniti
                ipsum ratione! Consequatur, facere. Harum minus voluptatibus
                impedit voluptatum ipsam autem beatae! Modi veniam sequi cum
                culpa ducimus quasi, facere itaque ipsam ipsum quaerat delectus
                blanditiis odio eius quibusdam assumenda! Quasi, et impedit ipsa
                unde aut dolores, dicta vero, praesentium esse eveniet porro
                ducimus neque quia? Commodi nemo, molestiae vero explicabo
                laboriosam quo velit, dicta dolorem, pariatur iure quos minima
                sapiente laudantium? Enim dolor voluptatem non ab officiis amet
                cupiditate in, pariatur facilis dolores inventore, nostrum
                debitis illum, impedit quod facere sed aliquam. Nam consectetur
                fugit itaque asperiores recusandae, perferendis maiores quam
                quos non expedita laborum suscipit accusamus hic iusto,
                voluptas, autem totam amet natus repellat libero error quas. Ex,
                molestiae recusandae amet commodi deserunt molestias nam non
                eligendi aut?
              </p>
              <p className="text-xs self-end text-oxford-blue-950">12:30</p>
            </li>
            <li className="mx-4 flex self-end flex-col bg-oxford-blue-950 w-max p-2 rounded-lg rounded-br-none shadow-md shadow-oxford-blue-950">
              <p className="text-wrap min-w-20 max-w-screen-lg self-start text-oxford-blue-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, tempora possimus aspernatur et facere dicta quod cum
                vero facilis ex. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Consectetur voluptates ad explicabo
                repudiandae! Quod ipsa molestiae, voluptate voluptates porro
                necessitatibus.
              </p>
              <p className="text-xs self-end text-oxford-blue-400">12:31</p>
            </li>
            <li className="flex self-center">
              <p className="bg-oxford-blue-600 rounded py-1 px-2">17/07/2024</p>
            </li>
            <li className="mx-4 flex self-start flex-col bg-oxford-blue-400 w-max p-2 rounded-lg rounded-bl-none shadow-md shadow-oxford-blue-950">
              <p className="text-wrap min-w-20 max-w-screen-lg  self-start text-oxford-blue-950">
                Hai
              </p>
              <p className="text-xs self-end text-oxford-blue-950">12:30</p>
            </li>
          </ul>
          <div className="w-full h-10 flex flex-row absolute bottom-0 left-0 right-0">
            <input
              className="flex flex-1 p-2 outline-none bg-oxford-blue-700 text-oxford-blue-300"
              placeholder="message..."
              type="text"
            />
            <button className="flex p-2 bg-oxford-blue-700 text-oxford-blue-300">
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
