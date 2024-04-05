import React from "react";
import { useFirebase } from "../src/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const firebase = useFirebase();
  return (
    <div
      className="w-screen h-10 bg-green-400 text-red-500 mb-20 flex justify-between px-20"
      style={{ backgroundColor: "green" }}
    >
      <h1>{firebase.user?.displayName}</h1>
      <Link to="/addbook">ADD ITEM</Link>
      <Link to="/">LOGIN</Link>
      <Link to="/register">SIGN UP</Link>
      <Link to="/home">HOME</Link>
      <button onClick={() => firebase.logout()}>LOG OUT</button>
    </div>
  );
};

export default Nav;
