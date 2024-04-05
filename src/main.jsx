import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FirebaseProvider } from "./Context";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Nav from "../component/Nav.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <FirebaseProvider>
        <Nav></Nav>
        <App />
      </FirebaseProvider>
    </BrowserRouter>
  </>
);
