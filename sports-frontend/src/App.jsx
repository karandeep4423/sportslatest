import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateEvent from "./pages/createEvent";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import ProfileRegister from "./pages/ProfileRegister";
import Header from "./components/Header";
import CreateSport from "./pages/admin/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventDetail from "./pages/EventDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {

  const id = JSON.parse(localStorage.getItem("user"))?.isAdmin;

  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/event-detail" element={<EventDetail/>}/>
          <Route path="/event" element={<CreateEvent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register_profile" element={<ProfileRegister />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {id === true ? (
            <Route path="/admin" element={<CreateSport />} />
          ) : (
            "you are not authorized "
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
