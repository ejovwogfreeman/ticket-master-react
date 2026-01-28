import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Ticket from "./pages/Ticket";
import Tickets from "./pages/Tickets";
import Toastify from "./components/Toastify";
import "./App.css";

function App() {
  return (
    <Router>
      <Toastify />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ticket/:id" element={<Ticket />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
