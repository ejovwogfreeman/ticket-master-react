// import React, { useState } from "react";
// import { MdClose } from "react-icons/md";
// import "../css/Ticket.css";
// import { IoMdCheckmark } from "react-icons/io";
// import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

// const Modal = ({ show, handleShow, sec, row, seat }) => {
//   let [click1, setClick1] = useState(true);
//   let [click2, setClick2] = useState(true);
//   let [count, setCount] = useState(0);

//   const [comp, setComp] = useState(true);

//   const handleClick1 = () => {
//     if (click1 === true) {
//       setCount((count += 1));
//       setClick1(false);
//     } else {
//       setCount((count -= 1));
//       setClick1(true);
//     }
//   };
//   const handleClick2 = () => {
//     if (click2 === true) {
//       setCount((count += 1));
//       setClick2(false);
//     } else {
//       setCount((count -= 1));
//       setClick2(true);
//     }
//   };
//   return (
//     <div>
//       <div id="bg" className={`${show ? "bg-show" : "bg-hide"}`}></div>
//       <div
//         className={`modal-container ${
//           show ? "modal-container-show" : "modal-container-hide"
//         }`}
//         id="modal-container"
//       >
//         <div className="mod-container">
//           {comp ? (
//             <>
//               <h5>SELECT TICKETS TO TRANSFER</h5>
//               <div className="line"></div>
//               <div className="imark">
//                 <span>i</span>
//                 <p>
//                   Only transfer tickets to people you know and trust to ensure
//                   everyone stays safe and socially distanced.
//                 </p>
//               </div>
//               <div className="floor">
//                 <p>
//                   Sec&nbsp;{sec}, Row&nbsp;{row}
//                 </p>
//                 <span>
//                   <iconify-icon icon="ion:ticket-sharp"></iconify-icon>&nbsp;
//                   {count} {count > 1 ? "Tickets" : "Ticket"}
//                 </span>
//               </div>
//               <div className="seat">
//                 <div>
//                   <p>SEAT {seat.split(",")[0]}</p>
//                   <span
//                     onClick={handleClick1}
//                     className={`${click1 ? "unclicked" : "clicked"}`}
//                   >
//                     <IoMdCheckmark />
//                   </span>
//                 </div>
//                 <div>
//                   <p>SEAT {seat.split(",")[1]}</p>
//                   <span
//                     onClick={handleClick2}
//                     className={`${click2 ? "unclicked" : "clicked"}`}
//                   >
//                     <IoMdCheckmark />
//                   </span>
//                 </div>
//               </div>
//               <div className="line"></div>
//               <div className="floor top">
//                 <p>{count} Selected</p>
//                 <span className="transfer-to" onClick={() => setComp(false)}>
//                   <span>TRANSFER TO</span>
//                   <MdArrowForwardIos />
//                 </span>
//               </div>
//             </>
//           ) : (
//             <>
//               <h5>TRANSFER TICKETS</h5>
//               <div className="line"></div>
//               <form action="" className="modal-form">
//                 <p>
//                   {count} {count > 1 ? "Tickets Selected" : "Ticket Selected"}
//                 </p>
//                 <span className="span">
//                   Sec&nbsp;{sec}
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                   Row {row}
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                   Seat&nbsp;{seat}
//                 </span>
//                 <label htmlFor="">First Name</label>
//                 <input type="text" placeholder="First Name" />
//                 <label htmlFor="">Last Name</label>
//                 <input type="text" placeholder="Last Name" />
//                 <label htmlFor="">Email or Mobile Number</label>
//                 <input type="text" placeholder="Email or Mobile Number" />
//                 <label htmlFor="">Note</label>
//                 <textarea name="" id="" cols="30" rows="10"></textarea>
//                 <div className="line"></div>
//                 <div className="bottom top">
//                   <span className="transfer-to" onClick={() => setComp(true)}>
//                     <MdArrowBackIos />
//                     <span>BACK</span>
//                   </span>
//                   <button className="transfer-form-btn">
//                     Transfer {count} {count > 1 ? "Tickets" : "Ticket"}
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}
//           <MdClose className="close-icon" onClick={handleShow} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "../css/Ticket.css";
import { IoMdCheckmark } from "react-icons/io";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Modal = ({ show, handleShow, sec, row, seat }) => {
  const seatArray = seat.split(","); // ["1", "2", "3", ...]
  const [selectedSeats, setSelectedSeats] = useState(
    Array(seatArray.length).fill(false),
  );

  const [comp, setComp] = useState(true);

  const toggleSeat = (index) => {
    const newSeats = [...selectedSeats];
    newSeats[index] = !newSeats[index];
    setSelectedSeats(newSeats);
  };

  const count = selectedSeats.filter(Boolean).length; // Number of selected seats

  return (
    <div>
      <div id="bg" className={`${show ? "bg-show" : "bg-hide"}`}></div>
      <div
        className={`modal-container ${
          show ? "modal-container-show" : "modal-container-hide"
        }`}
        id="modal-container"
      >
        <div className="mod-container">
          {comp ? (
            <>
              <h5>SELECT TICKETS TO TRANSFER</h5>
              <div className="line"></div>
              <div className="imark">
                <span>i</span>
                <p>
                  Only transfer tickets to people you know and trust to ensure
                  everyone stays safe and socially distanced.
                </p>
              </div>
              <div className="floor">
                <p>
                  Sec&nbsp;{sec}, Row&nbsp;{row}
                </p>
                <span>
                  <iconify-icon icon="ion:ticket-sharp"></iconify-icon>&nbsp;
                  {count} {count > 1 ? "Tickets" : "Ticket"}
                </span>
              </div>
              <div className="seat">
                {seatArray.map((seatNum, index) => (
                  <div key={index}>
                    <p>SEAT {seatNum}</p>
                    <span
                      onClick={() => toggleSeat(index)}
                      className={selectedSeats[index] ? "clicked" : "unclicked"}
                    >
                      <IoMdCheckmark />
                    </span>
                  </div>
                ))}
              </div>
              <div className="line"></div>
              <div className="floor top">
                <p>{count} Selected</p>
                <span className="transfer-to" onClick={() => setComp(false)}>
                  <span>TRANSFER TO</span>
                  <MdArrowForwardIos />
                </span>
              </div>
            </>
          ) : (
            <>
              <h5>TRANSFER TICKETS</h5>
              <div className="line"></div>
              <form action="" className="modal-form">
                <p>
                  {count} {count > 1 ? "Tickets Selected" : "Ticket Selected"}
                </p>
                <span className="span">
                  Sec&nbsp;{sec}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Row {row}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Seat&nbsp;
                  {seatArray.filter((_, i) => selectedSeats[i]).join(", ")}
                </span>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="First Name" />
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Last Name" />
                <label htmlFor="">Email or Mobile Number</label>
                <input type="text" placeholder="Email or Mobile Number" />
                <label htmlFor="">Note</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="line"></div>
                <div className="bottom top">
                  <span className="transfer-to" onClick={() => setComp(true)}>
                    <MdArrowBackIos />
                    <span>BACK</span>
                  </span>
                  <button className="transfer-form-btn">
                    Transfer {count} {count > 1 ? "Tickets" : "Ticket"}
                  </button>
                </div>
              </form>
            </>
          )}
          <MdClose className="close-icon" onClick={handleShow} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
