import React, { useState, useEffect } from "react";
import ticket from "../assets/ticket.png";
import { MdOutlineLocationOn, MdSearch, MdNotifications } from "react-icons/md";
import { RiHeartsFill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SideNav = ({ show }) => {
  const navigate = useNavigate(); // make sure this is inside your component
  const logout = () => {
    localStorage.removeItem("ticket-admin"); // or "user" if you used that key
    navigate("/login"); // redirect to login page
  };

  let user = JSON.parse(localStorage.getItem("ticket-admin"));

  const [tick, setTick] = useState({});

  console.log(tick);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
          "https://ticket-website-api.thegbmedia.com/api/ticket/",
        );
        setTick(response.data[response.data.length - 1]);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <nav className={show ? "sideNavShow" : "sideNav"}>
      <div className="nav-items">
        <div className="nav-top">
          <span className="bottom">
            <img src={ticket} alt="" /> <br />
            {user ? (
              ""
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                Sign In
              </Link>
            )}
          </span>
        </div>
        <ul className="links">
          <>
            {user ? (
              <div className="auth-links">
                <li>
                  <GiTicket />
                  <Link to="/tickets">Tickets</Link>
                </li>
                <li>
                  <IoIosCreate />
                  <Link to="/create">Create</Link>
                </li>
                <li onClick={logout} style={{ cursor: "pointer" }}>
                  <BiLogOut />
                  <span> Logout</span>
                </li>
              </div>
            ) : (
              ""
            )}
          </>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
