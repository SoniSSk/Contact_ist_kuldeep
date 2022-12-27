import React, { createContext, useEffect, useState } from "react";
import logo from "./logo.svg";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { HeaderWrapper } from "./components/Header/HeaderWrapper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddContact } from "./components/ModalBox/AddContact";
import { CardWrapper } from "./components/Card/CardWrapper";

export const App = () => {
  let [count, setCount] = useState(1);
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderWrapper  label="Contact List"/>
                <HomePage count={count} setCount={setCount}/>
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/add-contact"
            element={
              <>
                <HeaderWrapper label="Add Contact"/>

                <AddContact count={count} setCount={setCount} />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/edit-contact"
            element={
              <>
                <HeaderWrapper label="Edit Contact"/>
                <AddContact count={count} setCount={setCount}/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyARG6x0i9ZvWOJDZzh7M89HpR6UPE5nAsU",
//   authDomain: "kuldeep-soni.firebaseapp.com",
//   projectId: "kuldeep-soni",
//   storageBucket: "kuldeep-soni.appspot.com",
//   messagingSenderId: "767405608430",
//   appId: "1:767405608430:web:8440cd81acd939edd9d2ff",
//   measurementId: "G-BQW9G6B66Z"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);