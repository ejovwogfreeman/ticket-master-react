// import React, { useState, useEffect } from "react";
// import "../css/Form.css";
// import logo from "../assets/logo-blue.png";
// import Navbar from "../components/Navbar";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const Create = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [ticketData, setTicketData] = useState({
//     type: "",
//     sec: "",
//     row: "",
//     seat: "",
//     artist: "",
//     title: "",
//     date: "",
//     venue: "",
//     image: null,
//   });

//   const { type, sec, row, seat, artist, title, date, venue, image } =
//     ticketData;

//   // ✅ Redirect if user not logged in
//   useEffect(() => {
//     const user = localStorage.getItem("ticket-admin"); // or "user" if you used that key
//     if (!user) {
//       toast.error("Please login first");
//       navigate("/login");
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTicketData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setTicketData((prev) => ({ ...prev, image: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (
//       !type ||
//       !sec ||
//       !row ||
//       !seat ||
//       !artist ||
//       !title ||
//       !date ||
//       !venue ||
//       !image
//     ) {
//       setLoading(false);
//       return toast.error("PLEASE FILL ALL FIELDS");
//     }

//     const formData = new FormData();
//     formData.append("type", type);
//     formData.append("sec", sec);
//     formData.append("row", row);
//     formData.append("seat", seat);
//     formData.append("artist", artist);
//     formData.append("title", title);
//     formData.append("date", date);
//     formData.append("venue", venue);
//     formData.append("image", image); // ✅ Use "image" as key to match PHP

//     try {
//       await axios.post(
//         "https://ticket-website-api.thegbmedia.com/create_ticket",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         },
//       );
//       toast.success("TICKET CREATED SUCCESSFULLY");
//       setLoading(false);
//       navigate("/tickets"); // Redirect after creation
//     } catch (error) {
//       console.error(error);
//       toast.error("Error creating ticket");
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="form-container">
//         <form onSubmit={handleSubmit} className="form">
//           <img src={logo} alt="" />
//           <label>TYPE</label>
//           <input
//             type="text"
//             value={type}
//             name="type"
//             onChange={handleChange}
//             placeholder="Ticket type"
//           />
//           <label>SEC</label>
//           <input
//             type="text"
//             value={sec}
//             name="sec"
//             onChange={handleChange}
//             placeholder="Section"
//           />
//           <label>
//             ROW (comma separated based on number of tickets e.g for two tickets
//             2,3)
//           </label>
//           <input
//             type="text"
//             value={row}
//             name="row"
//             onChange={handleChange}
//             placeholder="Row"
//           />
//           <label>
//             SEAT (comma separated based on number of tickets e.g for two tickets
//             2,3)
//           </label>
//           <input
//             type="text"
//             value={seat}
//             name="seat"
//             onChange={handleChange}
//             placeholder="Seat"
//           />
//           <label>GAME TITLE/ARTIST</label>
//           <input
//             type="text"
//             value={artist}
//             name="artist"
//             onChange={handleChange}
//             placeholder="Artist"
//           />
//           <label>TITLE</label>
//           <input
//             type="text"
//             value={title}
//             name="title"
//             onChange={handleChange}
//             placeholder="Title"
//           />
//           <label>DATE (e.g Fri Jul 29, 9:00pm)</label>
//           <input
//             type="text"
//             value={date}
//             name="date"
//             onChange={handleChange}
//             placeholder="Date & time"
//           />
//           <label>VENUE</label>
//           <input
//             type="text"
//             value={venue}
//             name="venue"
//             onChange={handleChange}
//             placeholder="Venue"
//           />
//           <label>IMAGE</label>
//           <input type="file" name="image" onChange={handleImageChange} />
//           <button
//             disabled={loading}
//             style={{ background: loading ? "rgba(21,95,200,0.8)" : "#155fc8" }}
//           >
//             {loading ? "LOADING" : "CREATE"}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Create;

import React, { useState, useEffect } from "react";
import "../css/Ticket.css";
import btn from "../assets/button-img.png";
import ver from "../assets/verified-img.jpg";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import Modal from "../components/Modal";
import axios from "axios";
import { useParams } from "react-router-dom";
import loader from "../assets/loading.gif";

const Ticket = () => {
  const params = useParams();
  const [show, setShow] = useState(false);
  const [activeDot, setActiveDot] = useState(1);
  const [ticket, setTicket] = useState(null);

  const handleShow = () => setShow(!show);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.scrollWidth - e.target.clientWidth;
    // Determine active dot based on scroll position
    const percentage = scrollLeft / width;
    if (percentage < 0.5) setActiveDot(1);
    else setActiveDot(2);
  };

  useEffect(() => {
    axios
      .get(
        `https://ticket-website-api.thegbmedia.com/get_ticket?id=${params.id}`,
      )
      .then((response) => setTicket(response.data))
      .catch((error) => console.error("Error fetching ticket:", error));
  }, [params.id]);

  // Split rows and seats into arrays
  const rowArray = ticket?.row_num ? ticket.row_num.split(",") : [];
  const seatArray = ticket?.seat ? ticket.seat.split(",") : [];

  return (
    <div>
      {ticket ? (
        <div>
          <nav id="ticket-nav">
            <p style={{ marginTop: "-25px" }}>
              <Link to="/" className="icon">
                <MdClose />
              </Link>
            </p>
            <p>My Tickets</p>
            <p></p>
          </nav>

          <div className="ticket-container">
            <div className="tickets" onScroll={handleScroll}>
              {seatArray.map((seat, index) => (
                <div className="ticket" key={index}>
                  <div className="ticket-nav">{ticket.type}</div>
                  <div className="ticket-nav2">
                    <p>
                      SEC <br />
                      <strong>{ticket.sec}</strong>
                    </p>
                    <p>
                      ROW <br />
                      <strong>{rowArray[index] || "-"}</strong>
                    </p>
                    <p>
                      SEAT <br />
                      <strong>{seat}</strong>
                    </p>
                  </div>
                  <div className="image-container">
                    <div className="bg"></div>
                    <img
                      src={`https://ticket-website-api.thegbmedia.com/get_ticket_image?id=${ticket.id}`}
                      alt="ticket-pic"
                    />
                    <div className="text">
                      <p className="tour">
                        {ticket.artist} - {ticket.title}
                      </p>
                      <p className="date">
                        {ticket.date} • {ticket.venue}
                      </p>
                    </div>
                  </div>
                  <section className="bottom-section">
                    <div>
                      <img src={btn} alt="button-img" width="100%" />
                    </div>
                    <div>
                      <Link to="">View Barcode</Link>
                      <Link to="">Ticket Details</Link>
                    </div>
                  </section>
                  <img src={ver} alt="" width="100%" className="verified" />
                </div>
              ))}
            </div>

            {/* Dots based on number of tickets */}
            <div className="dots-container">
              {seatArray.map((_, idx) => (
                <div
                  key={idx}
                  className={activeDot === idx + 1 ? "active-dot" : "dot"}
                ></div>
              ))}
            </div>

            <div className="btn-containetr" onClick={handleShow}>
              <button className="transfer-btn" id="modal-button">
                Transfer
              </button>
              <button className="sell-btn">Sell</button>
            </div>
          </div>

          <Modal
            show={show}
            handleShow={handleShow}
            sec={ticket.sec}
            row={ticket.row_num}
            seat={ticket.seat}
          />
        </div>
      ) : (
        <img
          src={loader}
          alt="Loading..."
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
          }}
        />
      )}
    </div>
  );
};

export default Ticket;
