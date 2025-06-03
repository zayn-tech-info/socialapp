import React from "react";
import NavBar from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";

import Toaster from "react-hot-toast"
import HomePage from "./pages/HomePage";
const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage /> }
        />
        <Route
          path="/signup"
          element={<SignUpPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/profile"
          element={<ProfilePage />}
        />
      </Routes>

      <Toaster />
    </>
  );
};

export default App;
