import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";
import Marchent from "../screens/marchent/Marchent";
import Customer from "../screens/customer/Customer";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/marchent" element={<Marchent />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
