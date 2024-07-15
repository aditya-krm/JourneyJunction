import React from "react";
import Login from "../../../Components/Auth/Login/Login";

function LoginPage() {
  const handleLogin = (credentials) => {
    console.log("Logging in with:", credentials);
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
