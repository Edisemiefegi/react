import React, { useState } from "react";
import { registerUser } from "../../firebase/authService";
import Authform from "../../components/header/Authform";
import { useNavigate } from "react-router-dom";

function register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await registerUser(email, password);
      alert("sign up successful");
      navigate("/dashboard");
      console.log(email, password, "details");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Authform
      title="Create Your Account"
      onSubmit={handleSignUp}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      buttonText="Sign Up"
      toggleText="Already have an account? Sign in"
      onToggle={() => navigate("/")}
    />
  );
}

export default register;
