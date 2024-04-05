import React, { useState } from "react";
import { useFirebase } from "../src/Context";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  firebase.getImg(props.logoURL).then((ans) => setImgURL(ans));
  const [imgURL, setImgURL] = useState("");
  return (
    <div className=" w-80 rounded-md border-2 border-green-500 p-4 flex flex-wrap justify-center">
      <div className="p-4">
        <h4>Auther name : {props.auther}</h4>
        <h4>Book name : {props.bookname}</h4>
        <h4>Publiced By : {props.displayName}</h4>
        <h4>Price : {props.price}</h4>
      </div>
      <img
        src={imgURL}
        alt=""
        className="w-fit h-fit rounded-md p-1 rounded-lg"
      />
      <div
        className=" bg-rose-400 h-10 w-[70%] rounded-3xl flex justify-center items-center"
        onClick={() => navigate(`/home/${props.id}`)}
      >
        <span className="text-center">view page</span>
      </div>
    </div>
  );
};

export default Card;
