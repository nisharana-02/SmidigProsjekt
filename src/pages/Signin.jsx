import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../css/signin.css";
const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <main className="signin">
      <section className="signin__left">
        <h1>
          Welcome <br /> to Munch
        </h1>
      </section>
      <section className="signin__right">
        <div className="signin__right__nav">
          <ul>
            <li>
              <Link className="active" to="/signin">
                Signin
              </Link>
            </li>
            <li>or</li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
        <div className="signin__right__form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="form-group"></div>
            <div className="form-group">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signin;
