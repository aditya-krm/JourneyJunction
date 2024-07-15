import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await axios.post("/api/auth/login", credentials); // Use the proxied URL
      const { data } = response;
      setIsAuthenticated(true);
      setUser(data);
      return data;
    } catch (error) {
      console.error("Login error", error);
      throw error;
    }
  };

  const signup = async (userInfo) => {
    try {
      const response = await axios.post("/api/auth/signup", userInfo); // Use the proxied URL
      const { data } = response;
      setIsAuthenticated(true);
      setUser(data);
      return data;
    } catch (error) {
      console.error("Signup error", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.get("/api/auth/logout"); // Use the proxied URL
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error("Logout error", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
