import React from "react";
import Nav from "../components/Nav";
import "./../css/events.css";
import ImageS from "./../assets/images/Edvard_Munch_Separation.jpeg";
const Events = () => {
  return (
    <>
      <Nav is_active="events" />
      <main className="events">
        <section className="events__heading">
          <h1>Exhibitions & Events</h1>
        </section>

        <section className="events__body">
          
          <div className="events__body__card">
            <div className="events__body__card--img">
              <img src={ImageS} alt="" />
            </div>
            <div className="events__body__card--heading">
              <h2>Late comers djksahkh sodjsalj</h2>
            </div>
            <div className="events__body__card--dtp">
              <div className="events__body__card--dtp--place">09.12.2023</div>
              <div className="events__body__card--dtp--time">
                <div className="">20:00</div>
                <div className="">20:00</div>
                <div className="">20:00</div>
              </div>
              <div className="events__body__card--place">Munch</div>
            </div>
            <div className="events__body__card--availability">
              <span>Fulit!</span>
            </div>
          </div>
          <div className="events__body__card">
            <div className="events__body__card--img">
              <img src={ImageS} alt="" />
            </div>
            <div className="events__body__card--heading">
              <h2>Late comers djksahkh sodjsalj</h2>
            </div>
            <div className="events__body__card--dtp">
              <div className="events__body__card--dtp--place">09.12.2023</div>
              <div className="events__body__card--dtp--time">
                <div className="">20:00</div>
                <div className="">20:00</div>
                <div className="">20:00</div>
              </div>
              <div className="events__body__card--place">Munch</div>
            </div>
            <div className="events__body__card--availability">
              <span>Fulit!</span>
            </div>
          </div>
          <div className="events__body__card">
            <div className="events__body__card--img">
              <img src={ImageS} alt="" />
            </div>
            <div className="events__body__card--heading">
              <h2>Late comers djksahkh sodjsalj</h2>
            </div>
            <div className="events__body__card--dtp">
              <div className="events__body__card--dtp--place">09.12.2023</div>
              <div className="events__body__card--dtp--time">
                <div className="">20:00</div>
                <div className="">20:00</div>
                <div className="">20:00</div>
              </div>
              <div className="events__body__card--place">Munch</div>
            </div>
            <div className="events__body__card--availability">
              <span>Fulit!</span>
            </div>
          </div>


        </section>
      </main>
    </>
  );
};

export default Events;
