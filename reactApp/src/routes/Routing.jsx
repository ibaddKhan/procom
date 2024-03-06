import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";
import Marchent from "../screens/marchent/Marchent";
import Customer from "../screens/customer/Customer";
import Payment from "../screens/customer/payments/Payment";
import InstantPayment from "../screens/customer/InstantPayment/InstantPayment";
import Qrscan from "../screens/customer/Qrscan/Qrscan";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/marchent" element={<Customer />}>
          <Route path="/payment" element={<Payment />} />
          <Route path="/instantpayment" element={<InstantPayment />} />
          <Route path="/qrscan" element={<Qrscan />} />
        </Route>
        <Route path="/customer" element={<Marchent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
