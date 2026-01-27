import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import ticketlogo from "../assets/logo.png";
import SideNav from "./SideNav";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="navBar">
      <div
        className={show ? "bg-dark" : "bg-dark-hide"}
        onClick={handleShow}
      ></div>
      <SideNav show={show} />
      <div>
        <GiHamburgerMenu
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={handleShow}
        />
      </div>
      <div>
        <img src={ticketlogo} alt="ticket-logo" width="150px" />
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
