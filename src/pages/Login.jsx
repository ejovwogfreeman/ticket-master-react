import React, { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const user = { username, password };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    if (!username || !password) {
      setLoading(false);
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    axios
      .post("https://ticket-website.onrender.com/api/auth/login", user, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
        },
      })
      .then((res) => {
        toast.success("LOGIN SUCCESSFUL");
        setLoading(false);
        navigate("/tickets");
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        toast.error("INCORRECT CREDENTIALS");
        setLoading(false);
      });
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Sign In</h3>
        <p>
          New to Ticketmaster? <Link href="">Sign Up</Link>
        </p>
        <label htmlFor="">Email Address</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="check-forget">
          <span className="check">
            <input type="checkbox" name="" id="" />
            <span>Remember Me</span>
          </span>
          <Link to="">Forgot Password?</Link>
        </div>
        <div>
          <p>
            By continuing past this page, you agree to the
            <Link to="">Terms of Use</Link> and understand and unserstand that
            information will be used as described in our{" "}
            <Link>Privacy Policy</Link>
          </p>
        </div>
        <button
          disabled={loading}
          style={{ background: loading ? "rgba(21, 95,	200, 0.8)" : "#155fc8" }}
        >
          {loading ? "LOADING" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
