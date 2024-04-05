import React, { useEffect, useRef, useState } from "react";
import { useFirebase } from "../src/Context";
import { Link } from "react-router-dom";

const Book = () => {
  const nameRef = useRef("");
  const priceRef = useRef("");
  const autherRef = useRef("");
  const logoRef = useRef(null);
  const firebase = useFirebase();

  const bookHandler = () => {
    firebase.addbook(
      nameRef.current.value,
      priceRef.current.value,
      autherRef.current.value,
      logoRef.current.files[0]
    );
  };
  return (
    <div className=" w-screen h-screen border-slate-400 border-2 flex flex-col items-center h-screen p-6 overflow-x-hidden gap-6">
      {/* //book name */}
      <div className="h-20 w-[70%] md:w-[60%]">
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter BookName"
          className=" pl-5  w-full h-full rounded-2xl  border-4 border-red-500 mb-2"
        />
      </div>
      {/* //book price */}
      <div className="h-20 w-[70%] md:w-[60%] ">
        <input
          ref={priceRef}
          type="text"
          placeholder="Enter the Price"
          className=" pl-5  w-full h-full rounded-2xl  border-4 border-red-500 mt-2"
        />
      </div>
      {/* //book auther */}
      <div className="h-20 w-[70%] md:w-[60%] ">
        <input
          ref={autherRef}
          type="text"
          placeholder="Enter the name of author"
          className=" pl-5  w-full h-full rounded-2xl  border-4 border-red-500 mt-2"
        />
      </div>
      {/* //book image */}
      <div className=" w-[30%] h-20">
        <input type="file" className="w-full h-full" ref={logoRef} />
      </div>
      <button
        type="button"
        className="h-20 w-[50%] bg-sky-500 rounded-md flex justify-center items-center"
        onClick={() =>
          firebase.addbook(
            nameRef.current.value,
            priceRef.current.value,
            autherRef.current.value,
            logoRef.current.files[0]
          )
        }
      >
        Add new Book
      </button>
      <Link to="/home" className=" text-blue-500">
        GO TO DASHBOARD
      </Link>
    </div>
  );
};

export default Book;
