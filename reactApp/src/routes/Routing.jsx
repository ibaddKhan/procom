import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";
import Marchent from "../screens/marchent/Marchent";
import Customer from "../screens/customer/Customer";
import Payment from "../screens/customer/payments/Payment";
import PaymentM from "../screens/marchent/payment/Payment";
import InstantPayment from "../screens/customer/InstantPayment/InstantPayment";
import Qrscan from "../screens/customer/Qrscan/Qrscan";
import Dashboard from "../screens/marchent/dashboard/Dashboard";
import Customers from "../screens/marchent/customers/Customers";
import PaymentRequest from "../screens/marchent/paymentRequest/PaymentRequest";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="customer" element={<Customer />}>
          <Route path="payment" element={<Payment />} />
          <Route path="instantpayment" element={<InstantPayment />} />
          <Route path="qrscan" element={<Qrscan />} />
        </Route>
        <Route path="merchent" element={<Marchent />}>
          <Route path="" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="payments" element={<PaymentM />} />
          <Route path="paymentrequest" element={<PaymentRequest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
