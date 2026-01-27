import React, { useState, useEffect } from "react";
import ticket from "../assets/logo.png";
import { MdOutlineLocationOn, MdSearch, MdNotifications } from "react-icons/md";
import { RiHeartsFill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";

const SideNav = ({ show }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  let user = JSON.parse(localStorage.getItem("user"));

  const [tick, setTick] = useState({});

  console.log(tick);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
          "https://ticket-website.onrender.com/api/ticket/",
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
            <Link to="/signin" style={{ textDecoration: "none" }}>
              Sign In
            </Link>
          </span>
        </div>
        <ul className="links">
          <li>
            <MdOutlineLocationOn />
            <span>Unknown</span>
          </li>
          <li>
            <MdSearch />
            <span>Discover</span>
          </li>
          <li>
            <RiHeartsFill />
            <span>Favorites</span>
          </li>
          <li>
            <GiTicket />
            <Link to={`/ticket/${tick._id}`}>My Events</Link>
          </li>
          <li>
            <FaMoneyBillWave />
            <span>Sell</span>
          </li>
          <li>
            <MdNotifications />
            <span>Notifications</span>
          </li>
          <li>
            <BsPersonCircle />
            <span>My Account</span>
          </li>
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
