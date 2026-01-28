import React, { useState, useEffect } from "react";
import "../css/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ Redirect if user already exists
  useEffect(() => {
    const user = localStorage.getItem("ticket-admin");
    if (user) {
      navigate("/tickets"); // redirect if already logged in
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!username || !password) {
      setLoading(false);
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    axios
      .post(
        "https://ticket-website-api.thegbmedia.com/login",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      )
      .then((res) => {
        const data = res.data;

        if (data.success) {
          toast.success("LOGIN SUCCESSFUL");
          setLoading(false);
          localStorage.setItem("ticket-admin", JSON.stringify(data.user));
          navigate("/tickets");
        } else {
          // Show backend message if login failed
          toast.error(data.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Sign In</h3>
        <p>
          New to Ticketmaster? <Link to="/signup">Sign Up</Link>
        </p>
        <label>Email Address</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="check-forget">
          <span className="check">
            <input type="checkbox" />
            <span>Remember Me</span>
          </span>
          <Link to="">Forgot Password?</Link>
        </div>
        <div>
          <p>
            By continuing past this page, you agree to the{" "}
            <Link to="">Terms of Use</Link> and understand that information will
            be used as described in our <Link>Privacy Policy</Link>
          </p>
        </div>
        <button
          disabled={loading}
          style={{
            background: loading ? "rgba(21, 95, 200, 0.8)" : "#155fc8",
          }}
        >
          {loading ? "LOADING" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
