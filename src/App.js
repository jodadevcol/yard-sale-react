import "./App.css";
import Login from "./containers/Login/Login"
import RecoveryPass from "./containers/Recovery/RecoveryPass";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/recovery-password" component={RecoveryPass} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
