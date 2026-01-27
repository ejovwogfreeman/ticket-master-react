import React, { useState } from "react";
import "../css/Form.css";
import logo from "../assets/logo.png";
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTicketData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setTicketData((prevData) => ({
      ...prevData,
      image: event.target.files[0],
    }));
  };

  const authToken = JSON.parse(localStorage.getItem("user")).token;
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

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
    formData.append("type", ticketData.type);
    formData.append("sec", ticketData.sec);
    formData.append("row", ticketData.row);
    formData.append("seat", ticketData.seat);
    formData.append("artist", ticketData.artist);
    formData.append("title", ticketData.title);
    formData.append("date", ticketData.date);
    formData.append("venue", ticketData.venue);
    formData.append("files", ticketData.image);

    try {
      await axios.post(
        "https://ticket-website.onrender.com/api/ticket/create",
        formData,
        config,
      );
      toast.success("TICKET CREATED SUCCESSFULLY");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <img src={logo} alt="" />
          <label htmlFor="">TYPE</label>
          <input
            type="text"
            value={type}
            name="type"
            onChange={handleChange}
            placeholder="Please enter ticket type"
          />
          <label htmlFor="">SEC</label>
          <input
            type="text"
            value={sec}
            name="sec"
            onChange={handleChange}
            placeholder="Please enter sec"
          />
          <label htmlFor="">ROW</label>
          <input
            type="text"
            value={row}
            name="row"
            onChange={handleChange}
            placeholder="Please enter row"
          />
          <label htmlFor="">SEAT</label>
          <input
            type="text"
            value={seat}
            name="seat"
            onChange={handleChange}
            placeholder="Please enter seat"
          />
          <label htmlFor="">ARTIST</label>
          <input
            type="text"
            value={artist}
            name="artist"
            onChange={handleChange}
            placeholder="Please enter artist"
          />
          <label htmlFor="">TITLE</label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={handleChange}
            placeholder="Please enter title"
          />
          <label htmlFor="">DATE</label>
          <input
            type="text"
            value={date}
            name="date"
            onChange={handleChange}
            placeholder="Please enter date"
          />
          <label htmlFor="">VENUE</label>
          <input
            type="text"
            value={venue}
            name="venue"
            onChange={handleChange}
            placeholder="Please enter venue"
          />
          <label htmlFor="">IMAGE</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            placeholder="Please enter file"
          />
          <button
            disabled={loading}
            style={{
              background: loading ? "rgba(21, 95,	200, 0.8)" : "#155fc8",
            }}
          >
            {loading ? "LOADING" : "CREATE"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
