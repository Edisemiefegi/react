import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return <div className="bg-blue-700 text-center py-5">User : {userid}</div>;
}

export default User;
