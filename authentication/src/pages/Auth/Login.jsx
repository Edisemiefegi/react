import React, { useState } from "react";
import { LoginFunc } from "../../firebase/authService";
import Authform from "../../components/header/Authform";
import { useNavigate } from "react-router-dom";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await LoginFunc(email, password);
      alert("Sign-In Successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Authform
      title="Welcome Back!"
      onSubmit={handleSignIn}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      buttonText="Sign In"
      toggleText="Don't have an account? Sign up"
      onToggle={() => navigate("/register")}
    />
  );
}

export default login;
