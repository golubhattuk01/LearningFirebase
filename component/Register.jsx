import React, { useRef } from "react";
import { useFirebase } from "../src/Context";
import { Link } from "react-router-dom";

const Register = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const displayNameRef = useRef();
  const profileRef = useRef();
  const firebase = useFirebase();

  return (
    <div className=" w-screen border-slate-400 border-2 flex flex-col items-center h-screen p-6 overflow-x-hidden gap-4">
      <div className=" w-[30%] h-20">
        <input type="file" className="w-full h-full" ref={profileRef} />
      </div>

      <div className="h-20 w-[70%] md:w-[60%]">
        <input
          ref={displayNameRef}
          type="text"
          placeholder="Enter username"
          className=" pl-5  w-full h-full rounded-2xl  border-4 border-red-500 mb-2"
        />
      </div>
      <div className="h-20 w-[70%] md:w-[60%]">
        <input
          ref={usernameRef}
          type="text"
          placeholder="Enter username"
          className=" pl-5  w-full h-full rounded-2xl  border-4 border-red-500 mb-2"
        />
      </div>
      <div className="h-20 w-[70%] md:w-[60%] ">
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter the password"
          className=" pl-5  w-full h-full rounded-2xl  border-4 border-red-500 mt-2"
        />
      </div>
      <button
        type="button"
        className="h-20 w-[50%] bg-sky-500 rounded-md flex justify-center items-center placeholder: mt-10"
        onClick={() =>
          firebase.registerUser(
            usernameRef.current.value,
            passwordRef.current.value,
            displayNameRef.current.value
          )
        }
      >
        Register User
      </button>

      {/* google login button*/}
      <Link to="/" className=" text-blue-500">
        CONTINUE TO LOGIN
      </Link>
    </div>
  );
};

export default Register;
