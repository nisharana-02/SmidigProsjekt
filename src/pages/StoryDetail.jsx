import React from "react";
import { STORIES } from "../data/stories";
import { useParams } from "react-router-dom";
import "./../css/story_detail.css";
import Nav from "../components/Nav";
const StoryDetail = () => {
  let { id } = useParams();

  id = parseInt(id);
  return (
    <>
      <Nav is_active="stories" />
      <main className="story_detail">
        {STORIES.length
          ? STORIES.map((v, i) => {
              return v.id === id ? (
                <div key={id}>
                  <section className="story_detail__container">
                    <div className="story_detail__container--img">
                      <img src={v.image} alt="story" />
                    </div>

                    <div className="story_detail__container--txt">
                      <p>{v.description}</p>
                    </div>
                  </section>
                  <section className="story_detail__container">
                    <button className="start_btn">START</button>
                  </section>
                </div>
              ) : null;
            })
          : null}
      </main>
    </>
  );
};

export default StoryDetail;
