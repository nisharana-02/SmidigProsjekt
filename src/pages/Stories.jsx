import React, { useState } from "react";
import Nav from "../components/Nav";
import "./../css/stories.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Story from "./../assets/images/Edvard_Munch_Separation.jpeg";
import { STORIES } from "./../data/stories";
import { Link } from "react-router-dom";

const Stories = () => {
  library.add(fas);

  const [show, setShow] = useState(false);

  const showStories = (e) => {
    e.preventDefault();
    if (!show) {
      console.log("Show Stories");
      setShow(true);
    } else {
      console.log("Hide Stories");
      setShow(false);
    }
  };

  return (
    <>
      <Nav is_active="stories" />
      <main className="stories">
        <section className="stories__heading">
          <h1>Choose a Story</h1>
        </section>
        <section className="stories__body">
          {STORIES.length ? (
            STORIES.map((v, i) => {

              if(i%2 === 0){
                return (
                  <Link
                    to={"/storyDetail/" + v.id}
                    className="stories__body--card--vr"
                    key={i}
                  >
                    <img src={v.image} alt="" />
                    <span>
                      <FontAwesomeIcon icon="fa-solid fa-heart" />
                    </span>
                  </Link>
                );
              }
              
              else if(i%2 === 1 || i%2 === 2 || i%2 === 3 || i%2 === 5    )
              return (
                <Link
                  to={"/storyDetail/" + v.id}
                  className="stories__body--card--bs"
                  key={i}
                >
                  <img src={v.image} alt="" />
                  <span>
                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                  </span>
                </Link>
              );
              else{
                return (
                  <Link
                    to={"/storyDetail/" + v.id}
                    className="stories__body--card--ss"
                    key={i}
                  >
                    <img src={v.image} alt="" />
                    <span>
                      <FontAwesomeIcon icon="fa-solid fa-heart" />
                    </span>
                  </Link>
                );
              }
              
            })
          ) : (
            <h1>No Stories Found</h1>
          )}
        </section>
      </main>
    </>
  );
};

export default Stories;
