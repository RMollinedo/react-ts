import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contacts/list"} />} />
        <Route path={"/contacts/list"} element={<UserList />} />
        <Route path={"/contacts/:id"} element={<UserDetails />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
