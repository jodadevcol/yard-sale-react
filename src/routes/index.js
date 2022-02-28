import { BrowserRouter, Routes, Route } from "react-router-dom"
/* Pages */
import Home from "pages/Home"
import NotFound from "pages/NotFound"
import Login from "pages/Login"
/* Container */
import Main from "containers/Main"

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            {/* 
            <Route path="newpassword" element={<NewPassword />} />
            <Route path="recovery-password" element={<RecoveryPass />} />
            <Route path="account" element={<MyAccount />} />
            <Route path="account-created" element={<MyAccountCreated />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="order" element={<Order />} />
            <Route path="orders" element={<Orders />} />
            <Route path="send-email" element={<SendEmail />} /> */}
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
