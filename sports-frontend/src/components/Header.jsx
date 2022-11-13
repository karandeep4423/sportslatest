import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/fearures/auth-slice";
import { getEvents } from "../Store/fearures/event-slice";
import { Player } from "@lottiefiles/react-lottie-player";

const Header = () => {
  const [open, setOpen] = useState(false);
  let location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth }));
  // console.log("login details",user?.results)

  const handleLogout = () => {
    dispatch(logout());
    dispatch(getEvents());
  };

  let id = JSON.parse(localStorage.getItem("user"))?.details;
  return (
    <div>
      {location.pathname === "/login" ? (
        ""
      ) : (
        <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]   bg-sky-600 px-8 md:px-16 text-white w-full h-16 border-black flex items-center justify-between">
          <div>
            <Link to="/"> Sports Buddy</Link>
          </div>
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <h1>menu</h1> : <h1>close</h1>}
          </div>
          <div
            className={` justify-between flex flex-col items-center md:flex-row -mt-4d  z-[1]  md:static absolute bg-sky-600 md:w-auto md:py-0 py-6   transition-all ease-in duration-500 w-full left-0 ${
              open ? "top-[-400px]" : "top-[60px]"
            }`}
          >
            <Link
              to="/"
              className="hover:bg-sky-500  mx-5  min-w-fit text-center border-y-2 md:border-2 border-blue-400  px-5 py-2 md:rounded-3xl"
            >
              Events
            </Link>
            {id === undefined ? (
              <>
                <Link
                  className="hover:bg-sky-500 text-center  min-w-fit md:border-2  mx-5 border-blue-400 px-5 py-2 md:rounded-3xl"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="hover:bg-sky-500 border-y-2 text-center md:border-2  ml-5  min-w-fit border-blue-400 px-5 py-2 md:rounded-3xl"
                  to="/login"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/event"
                  className="hover:bg-sky-500 mt-5  min-w-fit text-center md:mt-0 mx-5 border-y-2 md:border-2 border-blue-400 px-5 py-2 md:rounded-3xl"
                >
                  Create Event
                </Link>
                <Link
                  to="/profile"
                  className="hover:bg-sky-500 flex items-center  min-w-fit	 justify-around gap-x-2 md:mt-0 mx-5 mt-5 border-y-2 md:border-2 border-blue-400 px-5 py-1 md:rounded-3xl"
                  state={id._id}
                >
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/66bdd430-0a38-4d96-8842-0b29cf6a485a/iXqeSGxSKx.json"
                    style={{
                      height: "36px",
                      width: "36px",
                    }}
                  ></Player>
                  {id.username}
                </Link>
                <button
                  className="hover:bg-sky-500 border-y-2 md:border-2 border-blue-400  min-w-fit text-center md:mt-0 md:ml-5 mx-5 md:mx-0 mt-5 px-5 py-2 md:rounded-3xl"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
