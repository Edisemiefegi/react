import React from "react";
import useAuth from "../../contexts/authContext/index";

function index() {
  const [currentUser, logout] = useAuth();
  if (!currentUser) {
    return <p>Please sign in to access the dashboard.</p>;
  }
  return (
    <>
      <h1>Welcome nsshh</h1>
      <h1>Welcome, {currentUser.email}!</h1>
      <button onClick={logout}>Log Out</button>
    </>
  );
}

export default index;
