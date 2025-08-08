import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Transfers from "./pages/Transfers";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import AppLayout from "./layouts/AppLayout";
import Callback from "./pages/Callback";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/transfers" element={<Transfers />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
          <Route path="/account/callback" element={<Callback />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
