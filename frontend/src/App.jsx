import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Events from "./Pages/Events/Events";
import Profile from "./Pages/Profile/Profile";
import Progress from "./Pages/Progress/Progress";
import Saved from "./Pages/Saved/Saved";
import NotFound from "./Components/NotFound/NotFound";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import LoginPage from "./Components/Auth/Login/Login";
import SignupPage from "./Components/Auth/SignUp/Signup";
import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="progress" element={<Progress />} />
            <Route path="saved" element={<Saved />} />
            <Route path="events" element={<Events />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
