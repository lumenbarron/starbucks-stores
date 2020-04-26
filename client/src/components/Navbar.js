import React from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";

const Navbar = () => {
  return (
    <section className="container-nav transparent">
      <Link to="/" className="brand-logo  logo-starbucks" />
      <Link
        to="/add"
        className="btn waves-effect  waves-light red accent-2 z-depth-0 btn-add"
      >
        Add Store
      </Link>
    </section>
  );
};

export default Navbar;
