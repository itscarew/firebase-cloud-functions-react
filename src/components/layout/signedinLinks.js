import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="flex">
      <li>
        <NavLink to="/create" className="  text-white mr-6  ">
          New Project
        </NavLink>
      </li>
      <li>
        <button to="/" className="text-white mr-6" onClick={props.signOut}>
          Log Out
        </button>
      </li>

      <li>
        <NavLink to="/" className="text-white bg-red-500 p-2 rounded-full  ">
          SRN
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
