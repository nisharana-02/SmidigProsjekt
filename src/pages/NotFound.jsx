import React from "react";
import { Link } from "react-router-dom";
import "./../css/notfound.css";

const NotFound = () => {
  return (
    <main className="notfound">
      <section>
        <h1>404 Not Found!!!</h1>
        <Link to="/">Back to Home</Link>
      </section>
    </main>
  );
};

export default NotFound;
