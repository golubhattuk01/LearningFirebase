import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../src/Context";
import { useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [view, setView] = useState(null);
  const params = useParams();
  console.log(params.bookID);
  useEffect(() => {
    firebase
      .getView(params.bookID)
      .then((myView) => setView({ ...myView.data() }));
  }, []);
  const [imgURL, setImgURL] = useState("");
  firebase.getImg(view?.logoURL).then((ans) => setImgURL(ans));

  return (
    <div className=" w-screen rounded-md border-2 border-green-500 p-x-20 flex flex-wrap justify-center ">
      <div className="p-4 w-screen flex justify-center flex-col items-center">
        <h4>Auther name : {view?.auther}</h4>
        <h4>Book name : {view?.bookname}</h4>
        <h4>Publiced By : {view?.displayName}</h4>
        <h4>Price : {view?.price}</h4>
        <h4>Email : {view?.email}</h4>
      </div>

      <div className="flex-col w-[60%]">
        <img src={imgURL} alt="" className="rounded-lg" />
        <div className="w-[100%] flex justify-center mt-4">
          <div
            className="w-[30%] bg-rose-400 h-16 rounded-3xl flex justify-center items-center self-center"
            onClick={() => navigate(`/home`)}
          >
            <span className="text-center">Back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
