import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../node_modules/bootstrap/dist/js/bootstrap";
import "./css/base.css";
import App from "./App";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import InteractiveStories from "./pages/Stories";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import ContinueStory from "./pages/ContinueStory"
import StoryDetail from "./pages/StoryDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<InteractiveStories />} />
        <Route path="/storyDetail/:id" element={<StoryDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/continue-story" element={<ContinueStory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  </Router>
);
