import React, { useRef } from "react";
import { loc, useFirebase } from "../src/Context";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const profileRef = useRef();
  const firebase = useFirebase();
  loc();

  return (
    <div className=" w-screen border-slate-400 border-2 flex flex-col items-center h-screen p-6 overflow-x-hidden">
      <div className="h-20 w-[70%] md:w-[60%]">
        <input
          ref={emailRef}
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
          firebase.loginWithEmailPass(
            emailRef.current.value,
            passwordRef.current.value
          )
        }
      >
        Login
      </button>

      {/* google login button*/}
      <div
        className="h-20 w-[50%] bg-rose-500 rounded-md flex justify-center items-center placeholder: mt-10"
        onClick={firebase.signUpWithGoogle}
      >
        <span
          className=" font-semibold text-3xl bg-rose-500"
          style={{ margin: "100px" }}
        >
          Continue with google
        </span>
      </div>

      <Link to="/register" className=" text-blue-500">
        REGISTER HERE
      </Link>
    </div>
  );
};

export default Login;
