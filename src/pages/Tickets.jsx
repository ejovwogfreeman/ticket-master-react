import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import loader from "../assets/loading.gif";
import { toast } from "react-toastify";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  const authToken = JSON.parse(localStorage.getItem("user")).token;
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(
        `https://ticket-website.onrender.com/api/ticket/delete/${id}`,
        config,
      );
      toast.success("TICKET DELETED SUCCESSFULLY");
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
          "https://ticket-website.onrender.com/api/ticket/",
        );
        console.log(response.data);
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  const findTicketById = (id) => {
    for (const ticket of tickets) {
      if (ticket._id === id) {
        return "https://ticketwebsite.netlify.app/ticket/" + ticket._id;
      }
    }
    return null;
  };

  return (
    <div>
      <Navbar />
      <ul className="ticketlist-container">
        <h2>All Tickets</h2>
        {tickets.length > 0 ? (
          <>
            {[...tickets].reverse().map((ticket) => (
              <li key={ticket._id}>
                <div className="cont">
                  <div className="img-box">
                    <div className="spans">
                      <span>{ticket.title}</span>
                      <span> {ticket.artist}</span>
                    </div>
                    <button
                      onClick={() => handleDelete(ticket._id)}
                      disabled={loading}
                      style={{
                        background: loading
                          ? "rgba(21, 95,	200, 0.8)"
                          : "#155fc8",
                      }}
                    >
                      {loading ? "LOADING" : "DELETE"}
                    </button>
                  </div>
                  <div className="clipboard">
                    <span>{findTicketById(ticket._id)}</span>
                  </div>
                </div>
              </li>
            ))}
          </>
        ) : (
          <img
            src={loader}
            alt=""
            style={{
              position: "fixed",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100vh",
            }}
          />
        )}
      </ul>
    </div>
  );
};

export default Tickets;
