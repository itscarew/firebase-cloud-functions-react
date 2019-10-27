import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="flex">
      <li>
        <NavLink to="/signUp" className="text-white mr-6">
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink to="/signIn" className="text-white mr-6 ">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
