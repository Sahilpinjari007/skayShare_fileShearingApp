import { Route, Routes, useNavigate } from "react-router-dom";

import React from "react";
import Landing from "./pages/Landing";
import Home from "./layouts/Home";
import Upload from "./pages/Upload";
import Files from "./pages/Files";

import Auth from "./layouts/Auth";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./pages/NotFound";
import { useUser } from "@clerk/clerk-react";
import ProtectedRoute from "./middleware/ProtectedRoute";
import FilePreview from "./pages/FilePreview";
import Loader from "./components/Loader";
import Upgrade from "./pages/Upgrade";
import Download from "./pages/Download";

function App() {
  const { isLoaded } = useUser();

  if (!isLoaded) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/" element={<Auth />}>
        <Route path="/auth/register" element={<Register />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />}>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/files" element={<Files />}></Route>
          <Route path="/upgrade" element={<Upgrade />}></Route>
          <Route path="/file-preview/:fileId" element={<FilePreview />}></Route>
        </Route>
      </Route>
      <Route path="/f/:fileId" element={<Download />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
