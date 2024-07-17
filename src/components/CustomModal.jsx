import React, { useState } from "react";

const CustomModal = ({ isOpen, closeModal, message, icon = true }) => {
  return (
    <>
      {isOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
          aria-hidden={!isOpen}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative  rounded-lg shadow bg-gray-700">
              <div className="p-4 md:p-5 text-center">
                {icon ? (
                  <svg
                    className="mx-auto mb-4 w-12 h-12 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="mx-auto mb-4 w-12 h-12 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                )}
                <h3 className="mb-5 text-xl font-bold capitalize  text-gray-400">
                  {message}
                </h3>
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium  focus:outline-none  rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                  onClick={closeModal}
                >
                  Oke
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
