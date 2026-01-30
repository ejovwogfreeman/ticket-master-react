// import React, { useState, useEffect } from "react";
// import "../css/Ticket.css";
// import btn from "../assets/button-img.png";
// import ver from "../assets/verified-img.jpg";
// import { Link } from "react-router-dom";
// import { MdClose } from "react-icons/md";
// import Modal from "../components/Modal";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import loader from "../assets/loading.gif";

// const Ticket = () => {
//   const params = useParams();
//   const [show, setShow] = useState(false);

//   const handleShow = () => {
//     setShow(!show);
//     console.log(show);
//   };

//   const [activeDot, setActiveDot] = useState(1);

//   let handleScroll = (e) => {
//     if (e.target.scrollLeft > 200) {
//       setActiveDot(2);
//     } else {
//       setActiveDot(1);
//     }
//   };

//   const [ticket, setTicket] = useState(null);

//   useEffect(() => {
//     axios
//       .get(
//         `https://ticket-website-api.thegbmedia.com/get_ticket?id=${params.id}`,
//       )
//       .then((response) => {
//         // console.log(response.data);
//         setTicket(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching ticket:", error);
//       });
//   }, [params.id]);

//   return (
//     <div>
//       {ticket ? (
//         <div>
//           <nav id="ticket-nav">
//             <p style={{ marginTop: "-25px" }}>
//               <Link to="/" className="icon">
//                 <MdClose />
//               </Link>
//             </p>
//             <p>My Tickets</p>
//             <p></p>
//           </nav>
//           <div className="ticket-container">
//             <div className="tickets" onScroll={handleScroll}>
//               <div className="ticket">
//                 <div className="ticket-nav">{ticket.type}</div>
//                 <div className="ticket-nav2">
//                   <p>
//                     SEC <br />
//                     <strong>{ticket.sec}</strong>
//                   </p>
//                   <p>
//                     ROW
//                     <br />
//                     <strong>
//                       {ticket.row_num && ticket.row_num.split(",")[0]}
//                     </strong>
//                   </p>
//                   <p>
//                     SEAT <br />
//                     <strong>{ticket.seat && ticket.seat.split(",")[0]}</strong>
//                   </p>
//                 </div>
//                 <div className="image-container">
//                   <div className="bg"></div>
//                   <img
//                     src={`https://ticket-website-api.thegbmedia.com/get_ticket_image?id=${ticket.id}`}
//                     alt="ticket-pic"
//                   />
//                   <div className="text">
//                     <p className="tour">
//                       {ticket.artist} - {ticket.title}
//                     </p>
//                     <p className="date">
//                       {ticket.date} • {ticket.venue}
//                     </p>
//                   </div>
//                 </div>
//                 <section className="bottom-section">
//                   <div>
//                     <img src={btn} alt="button-img" width="100%" />
//                   </div>
//                   <div>
//                     <Link to="">View Barcode</Link>
//                     <Link to="">Ticket Details</Link>
//                   </div>
//                 </section>
//                 <img src={ver} alt="" width="100%" className="verified" />
//               </div>
//               <div className="ticket">
//                 <div className="ticket-nav">{ticket.type}</div>
//                 <div className="ticket-nav2">
//                   <p>
//                     SEC <br />
//                     <strong>{ticket.sec}</strong>
//                   </p>
//                   <p>
//                     ROW
//                     <br />
//                     <strong>
//                       {ticket.row_num && ticket.row_num.split(",")[1]}
//                     </strong>
//                   </p>
//                   <p>
//                     SEAT <br />
//                     <strong>{ticket.seat && ticket.seat.split(",")[1]}</strong>
//                   </p>
//                 </div>
//                 <div className="image-container">
//                   <div className="bg"></div>
//                   <img
//                     src={`https://ticket-website-api.thegbmedia.com/get_ticket_image?id=${ticket.id}`}
//                     alt="ticket-pic"
//                   />
//                   <div className="text">
//                     <p className="tour">
//                       {ticket.artist} - {ticket.title}
//                     </p>
//                     <p className="date">
//                       {ticket.date} • {ticket.venue}
//                     </p>
//                   </div>
//                 </div>
//                 <section className="bottom-section">
//                   <div>
//                     <img src={btn} alt="button-img" width="100%" />
//                   </div>
//                   <div>
//                     <Link to="">View Barcode</Link>
//                     <Link to="">Ticket Details</Link>
//                   </div>
//                 </section>
//                 <img src={ver} alt="" width="100%" className="verified" />
//               </div>
//             </div>
//             <div className="dots-container">
//               <div className={activeDot === 1 ? "active-dot" : "dot"}></div>
//               <div className={activeDot === 2 ? "active-dot" : "dot"}></div>
//             </div>
//             <div className="btn-containetr" onClick={handleShow}>
//               <button className="transfer-btn" id="modal-button">
//                 Transfer
//               </button>
//               <button className="sell-btn">Sell</button>
//             </div>
//           </div>
//           <Modal
//             show={show}
//             handleShow={handleShow}
//             sec={ticket.sec}
//             row={ticket.row}
//             seat={ticket.seat}
//           />
//         </div>
//       ) : (
//         <img
//           src={loader}
//           alt="Loading..."
//           style={{
//             position: "fixed",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)", // centers both horizontally and vertically
//             zIndex: 9999, // ensures it’s on top of other content
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Ticket;

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
