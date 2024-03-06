import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";
import Marchent from "../screens/marchent/Marchent";
import Customer from "../screens/customer/Customer";
<<<<<<< HEAD
import Payment from "../screens/customer/payments/Payment";
import InstantPayment from "../screens/customer/InstantPayment/InstantPayment";
import Qrscan from "../screens/customer/Qrscan/Qrscan";
=======
import Payment from "../screens/customer/Payment/payment";
import Money from "../screens/customer/Money/money";
import QrScan from "../screens/customer/Qr Scan/qrScan";
>>>>>>> f932f77ea611930566e146caf4a4e2274e41a3f2
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path="/marchent" element={<Customer />}>
          <Route path="/payment" element={<Payment />} />
          <Route path="/instantpayment" element={<InstantPayment />} />
          <Route path="/qrscan" element={<Qrscan />} />
        </Route>
        <Route path="/customer" element={<Marchent />} />
=======
        <Route path="/marchent" element={<Marchent />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/instantPayment" element={<Money />} />
        <Route path="/qrScanPayment" element={<QrScan />} />
>>>>>>> f932f77ea611930566e146caf4a4e2274e41a3f2
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
