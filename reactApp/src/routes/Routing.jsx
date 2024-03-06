import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";
import Marchent from "../screens/marchent/Marchent";
import Customer from "../screens/customer/Customer";
import Payment from "../screens/customer/Payment/payment";
import Money from "../screens/customer/Money/money";
import QrScan from "../screens/customer/Qr Scan/qrScan";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/marchent" element={<Marchent />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/instantPayment" element={<Money />} />
        <Route path="/qrScanPayment" element={<QrScan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
