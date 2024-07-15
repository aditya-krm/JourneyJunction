import React from "react";
import Signup from "../../../Components/Auth/SignUp/Signup";

function SignupPage() {
  const handleSignup = (userInfo) => {
    console.log("Signing up with:", userInfo);
    // Implement signup functionality here
  };

  return (
    <div>
      <Signup onSignup={handleSignup} />
    </div>
  );
}

export default SignupPage;
