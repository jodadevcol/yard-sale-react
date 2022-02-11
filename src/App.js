import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
/* Pages */
import Home from "@pages/Home";
import Login from "@pages/Login";
import Order from "@pages/Order"
import Orders from "@pages/Orders"
import MyOrders from "@pages/MyOrders"
import NotFound from "@pages/NotFound";
import MyAccount from "@pages/MyAccount"
import SendEmail from "@pages/SendEmail"
import MyAccountCreated from "@pages/MyAccountCreated"
/* Layouts */
import Main from "@layouts/Main";
/* Containers */
import RecoveryPass from "@containers/Recovery"
import NewPassword from "@containers/NewPassword";
/* Contexts */
import AppContext from "@contexts/AppContext";
/* Hooks */
import useInitialState from "@hooks/useInitialState"
/* Styles */
import "./App.css";

function App() {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="newpassword" element={<NewPassword />} />
            <Route path="recovery-password" element={<RecoveryPass />} />
            <Route path="account" element={<MyAccount />} />
            <Route path="account-created" element={<MyAccountCreated />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="order" element={<Order />} />
            <Route path="orders" element={<Orders />} />
            <Route path="send-email" element={<SendEmail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App