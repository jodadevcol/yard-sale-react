import "./App.css";
import { Routes, Route } from "react-router-dom"
import Layout from "./containers/Layout/Layout";
import Home from "./pages/Home";
import Login from "./containers/Login/Login"
import NotFound from "./pages/NotFound";
import MyAccount from "./pages/MyAccount"
import MyAccountCreated from "./pages/MyAccountCreated"
import MyOrders from "./pages/MyOrders"
import Order from "./pages/Order"
import Orders from "./pages/Orders"
import SendEmail from "./pages/SendEmail"
import RecoveryPass from "./containers/Recovery/RecoveryPass"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
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
    </>
  );
}

export default App;
