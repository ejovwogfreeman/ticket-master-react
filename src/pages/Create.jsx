import React, { useState, useEffect } from "react";
import "../css/Form.css";
import logo from "../assets/logo-blue.png";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [ticketData, setTicketData] = useState({
    type: "",
    sec: "",
    row: "",
    seat: "",
    artist: "",
    title: "",
    date: "",
    venue: "",
    image: null,
  });

  const { type, sec, row, seat, artist, title, date, venue, image } =
    ticketData;

  // ✅ Redirect if user not logged in
  useEffect(() => {
    const user = localStorage.getItem("ticket-admin"); // or "user" if you used that key
    if (!user) {
      toast.error("Please login first");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setTicketData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !type ||
      !sec ||
      !row ||
      !seat ||
      !artist ||
      !title ||
      !date ||
      !venue ||
      !image
    ) {
      setLoading(false);
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    const formData = new FormData();
    formData.append("type", type);
    formData.append("sec", sec);
    formData.append("row", row);
    formData.append("seat", seat);
    formData.append("artist", artist);
    formData.append("title", title);
    formData.append("date", date);
    formData.append("venue", venue);
    formData.append("image", image); // ✅ Use "image" as key to match PHP

    try {
      await axios.post(
        "http://localhost/ticket_website_api/create_ticket",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      toast.success("TICKET CREATED SUCCESSFULLY");
      setLoading(false);
      navigate("/tickets"); // Redirect after creation
    } catch (error) {
      console.error(error);
      toast.error("Error creating ticket");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <img src={logo} alt="" />
          <label>TYPE</label>
          <input
            type="text"
            value={type}
            name="type"
            onChange={handleChange}
            placeholder="Ticket type"
          />
          <label>SEC</label>
          <input
            type="text"
            value={sec}
            name="sec"
            onChange={handleChange}
            placeholder="Section"
          />
          <label>ROW (comma separated, e.g 2,3)</label>
          <input
            type="text"
            value={row}
            name="row"
            onChange={handleChange}
            placeholder="Row"
          />
          <label>SEAT (comma separated, e.g 2,3)</label>
          <input
            type="text"
            value={seat}
            name="seat"
            onChange={handleChange}
            placeholder="Seat"
          />
          <label>ARTIST</label>
          <input
            type="text"
            value={artist}
            name="artist"
            onChange={handleChange}
            placeholder="Artist"
          />
          <label>TITLE</label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={handleChange}
            placeholder="Title"
          />
          <label>DATE</label>
          <input type="date" value={date} name="date" onChange={handleChange} />
          <label>VENUE</label>
          <input
            type="text"
            value={venue}
            name="venue"
            onChange={handleChange}
            placeholder="Venue"
          />
          <label>IMAGE</label>
          <input type="file" name="image" onChange={handleImageChange} />
          <button
            disabled={loading}
            style={{ background: loading ? "rgba(21,95,200,0.8)" : "#155fc8" }}
          >
            {loading ? "LOADING" : "CREATE"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
