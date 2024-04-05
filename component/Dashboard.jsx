import React, { useEffect, useRef, useState } from "react";
import BookHouse from "./BookHouse";
import Book from "./Book";
import { useFirebase } from "../src/Context";

const Dashboard = () => {
  const { toggle, setToggle } = useFirebase();
  return (
    <div className="flex justify-center flex-wrap overflow-hidden">
      <BookHouse toggle={toggle} setToggle={setToggle}></BookHouse>
      <Book></Book>
    </div>
  );
};

export default Dashboard;
