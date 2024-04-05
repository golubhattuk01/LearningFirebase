import "./App.css";
import Login from "../component/Login.jsx";
import { useFirebase } from "./Context.jsx";
import { Route, Routes } from "react-router-dom";
import Register from "../component/Register.jsx";
import Book from "../component/Book.jsx";
import BookHouse from "../component/BookHouse.jsx";
import Dashboard from "../component/Dashboard.jsx";
import View from "../component/View.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/home/:bookID" element={<View />} />
    </Routes>
  );
}

export default App;
