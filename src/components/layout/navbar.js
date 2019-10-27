import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signedinLinks";
import SignedOutLinks from "./signedoutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  console.log(props.auth);

  return (
    <header className=" bg-gray-700 p-2 ">
      <div className="container mx-auto flex items-center justify-between  ">
        <Link to="/" className="text-4xl text-white  ">
          {" "}
          Serenity{" "}
        </Link>
        <div className="flex">
          {props.auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

export default connect(mapStateToProps)(Navbar);
