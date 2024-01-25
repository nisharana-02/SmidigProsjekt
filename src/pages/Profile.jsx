import React from "react";

import edit from "../assets/images/edit.png";
import next from "../assets/images/next.png";
import notification from "../assets/images/notification.png";
import settings from "../assets/images/setting.png";
import profile from "../assets/images/profile.png";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";
import img6 from "../assets/images/img6.jpeg";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import "./../css/profile.css";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav is_active="profile" />
      <main className="profile">
        <section className="profile-container">
          
          <div className="pic-name">
            <img className="profile" src={profile} alt="" />
            <h4>Caroline Nilsen</h4>
          </div>

          <div className="buttons">
            <button className="edit-button">
              <img className="edit" src={edit} alt="" />
              Edit profile
              <img className="next" src={next} alt="" />
            </button>

            <button className="notification-button">
              <img className="notification" src={notification} alt="" />
              Notification
              <img className="next" src={next} alt="" />
            </button>

            <button className="settings-button">
              <img className="settings" src={settings} alt="" />
              Settings
              <img className="next" src={next} alt="" />
            </button>
          </div>

          <div className="stories-container">
            <div className="title">
              <h4>Your stories:</h4>
            </div>
            <div className="story-images">
              <img className="img2" src={img2} alt="" />
              <img
                className="img1"
                src={img1}
                alt=""
                onClick={() => navigate("/continue-story")}
              />{" "}
              
              <img className="img4" src={img4} alt="" />
              <img className="img3" src={img3} alt="" />
              <img className="img5" src={img5} alt="" />
              <img className="img6" src={img6} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
