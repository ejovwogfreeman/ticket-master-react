import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import loader from "../assets/loading.gif";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ Redirect if no user is logged in
  useEffect(() => {
    const user = localStorage.getItem("ticket-admin"); // or "user" if you used that key
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  // ✅ Only parse token if user exists
  const user = JSON.parse(localStorage.getItem("ticket-admin") || "null");
  const authToken = user?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(
        `https://ticket-website-api.thegbmedia.com/delete_ticket?id=${id}`,
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
          "https://ticket-website-api.thegbmedia.com/get_tickets",
        );

        // Sort tickets by date descending (newest first)
        const sortedTickets = response.data.sort((a, b) => {
          // If your date is a string, convert to Date for comparison
          return new Date(b.created_at) - new Date(a.created_at);
        });

        setTickets(sortedTickets);
        console.log(sortedTickets);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  const findTicketById = (id) => {
    for (const ticket of tickets) {
      if (ticket.id === id) {
        return "https://ticket-master-react.vercel.app/ticket/" + ticket.id;
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
            {tickets.map((ticket) => (
              <li key={ticket.id}>
                <div className="cont">
                  <div className="img-box">
                    <div className="spans">
                      <span>{ticket.title}</span>
                      <span> {ticket.artist}</span>
                    </div>
                    <button
                      onClick={() => handleDelete(ticket.id)}
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
                    <span>{findTicketById(ticket.id)}</span>
                  </div>
                </div>
              </li>
            ))}
          </>
        ) : (
          <img
            src={loader}
            alt="Loading..."
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // centers both horizontally and vertically
              zIndex: 9999, // ensures it’s on top of other content
            }}
          />
        )}
      </ul>
    </div>
  );
};

export default Tickets;
