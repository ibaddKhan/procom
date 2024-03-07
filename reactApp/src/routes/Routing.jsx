import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../screens/Auth/Register/Register";
import Marchent from "../screens/marchent/Marchent";
import Customer from "../screens/customer/Customer";
import Customers from "../screens/marchent/customers/Customers";
import Payment from "../screens/customer/payments/Payment";
import PaymentM from "../screens/marchent/payment/Payment";
import InstantPayment from "../screens/customer/InstantPayment/InstantPayment";
import Qrscan from "../screens/customer/Qrscan/Qrscan";
import Dashboard from "../screens/marchent/dashboard/Dashboard";
import PaymentRequest from "../screens/marchent/paymentRequest/PaymentRequest";
import Login from "../screens/Auth/Login/Login";
import Error404 from "../404";
import ViewFullTrans from "../components/customers/viewFullTrans";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="customer" element={<Customer />}>
          <Route path="payment" element={<Payment />} />
          <Route path="transactionDetails" element={<ViewFullTrans />} />
          <Route path="instantpayment" element={<InstantPayment />} />
          <Route path="qrscan" element={<Qrscan />} />
          <Route index element={<Payment />} />
        </Route>

        <Route path="merchant" element={<Marchent />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="payments" element={<PaymentM />} />
          <Route path="paymentrequest" element={<PaymentRequest />} />
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
