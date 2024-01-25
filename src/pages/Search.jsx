import React from "react";
import "./../css/search.css";
import Nav from "../components/Nav";
import SearchImage from "./../assets/icons/search.png";
const Search = () => {
  return (
    <>
      <Nav is_active="search" />
      <main className="search">
        <section className="search__heading">
          <h1>Search</h1>
        </section>

        <section className="search__body">
          <div className="search__body--input input-group">
            <input
              type="text"
              placeholder="What are you looking for?"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className=""
              type="button"
              id="button-addon2"
            >
              <img src={SearchImage} alt="" width="30px" height="30px" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Search;
