import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Transfers from "./pages/Transfers";
import Pricing from "./pages/Pricing";
import Contacts from "./pages/Contacts";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import AppLayout from "./layouts/AppLayout";
import Callback from "./pages/Callback";
import { AppContext } from "./context/AppContext";
import Sent from "./pages/Sent";
import Received from "./pages/Received";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/transfers" element={<Transfers />}></Route>
              <Route path="/transfers/sent/:id" element={<Sent />}></Route>
              <Route path="/transfers/recived/:id" element={<Received />}></Route>
              <Route path="/pricing" element={<Pricing />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/download/:id"></Route>
            </Route>
            <Route path="/account/callback" element={<Callback />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext>
      <ToastContainer />
    </>
  );
}

export default App;
