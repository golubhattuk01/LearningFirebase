import React, { useEffect, useState } from "react";
import { useFirebase } from "../src/Context";
import Card from "./Card";

const BookHouse = ({ toggle, setToggle }) => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    firebase.getBooks().then((mybook) => setBooks(mybook.docs));
  }, [toggle]);
  return (
    <div className="w-screen flex justify-center">
      {firebase.user ? (
        <div className="flex gap-10 px-10 flex-wrap">
          {books.map((item) => (
            <Card key={item.id} id={item.id} {...item.data()}></Card>
          ))}
        </div>
      ) : (
        <div>
          <center>
            <h1>LOGIN first</h1>
          </center>
        </div>
      )}
    </div>
  );
};

export default BookHouse;
