import React from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  const state = useSelector((state) => state.user.value);
  return (
    <div>
      <p>First Name: {state.firstName}</p>
      <p>Last Name: {state.lastName}</p>
      <p>Email: {state.email}</p>
    </div>
  );
};

export default Profil;
