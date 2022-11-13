import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, googleLogin, register } from "../Store/fearures/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [state, setstate] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };
    if (loginDetails) {
      dispatch(login({ loginDetails, navigate }));
    }
    toast("login sucseeful");
  };

  const registerData = (e) => {
    e.preventDefault();
    const initialValues = {
      username,
      password,
      email,
    };
    if (password !== confirmPassword) {
      return alert("password does not match");
    }
    if (initialValues) {
      dispatch(register({ initialValues, navigate }));
    }
  };

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId:
          "795770346023-kscfpb99ke89qc40ul1pvenvhek698mj.apps.googleusercontent.com",
      });
    });
  }, []);

  const googleSuccess = (resp) => {
    console.log("email res", resp);
    const result = {
      username: resp.profileObj.name,
      email: resp.profileObj.email,
      token: resp.tokenId,
      googleId: resp.googleId,
    };
    dispatch(googleLogin({ result, navigate }));
  };
  const googleFailure = (error) => {
    console.log("login google ", error);
  };

  const registerBtn = () => {
    setstate(false);
  };

  const loginButton = () => {
    setstate(true);
  };

  return (
    <div>
      <div className=" flex justify-around    min-h-screen   items-center ">
        <div className=" max-w-96  bg-blue-100 p-12  rounded-3xl  xl:p-20 flex items-start justify-start">
          <div className="relative ">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_umwjpnnn.json"
              style={{ height: "400px", width: "300px", marginTop: "10px" }}
            ></Player>
          </div>
          <div
            className={
              state
                ? "absolute -ml-[9px] overflow-hidden my-8  bg-[rgba(0,0,0,0.5)]  flex rounded-2xl duration-1000  flex-col gap-4  flex-wrap p-5"
                : "absolute  overflow-hidden   bg-[rgba(0,0,0,0.5)] -mx-3 flex rounded-2xl duration-1000  flex-col gap-4  flex-wrap p-5 -my-8 "
            }
          >
            <div className="border-2 flex h-11 relative w-72  border-white rounded-2xl">
              <button
                className={
                  state
                    ? " text-xl h-full w-36  duration-1000  rounded-2xl  text-center"
                    : "bg-sky-500 text-xl h-full w-36  duration-1000  rounded-2xl  text-center"
                }
                onClick={loginButton}
              >
                Login
              </button>
              <button
                className={
                  state
                    ? "bg-sky-500 text-xl   duration-1000 ease-out  h-full w-36  rounded-2xl text-center"
                    : "text-xl  duration-1000 ease-out h-full w-36  rounded-2xl text-center"
                }
                onClick={registerBtn}
              >
                Register
              </button>
            </div>
            <form
              className={
                state
                  ? " flex  flex-col duration-1000 gap-4"
                  : "-ml-[400px] duration-1000"
              }
            >
              <div className="relative cursor-pointer">
                <input
                  className="h-11 w-72 px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
                  type="text"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <span className="text-xl -my-3    pointer-events-none  text-white absolute left-5 top-5 px-1 transition duration-200 input-text">
                  Email
                </span>
              </div>
              <div className="relative">
                <input
                  className="h-11 w-72 px-6 text-white bg-[rgba(0,0,0,0.5)] text-xl  border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 transition duration-200 "
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <span className="text-xl  pointer-events-none -my-3 text-white  absolute left-5 top-5 px-1 transition duration-200 input-password ">
                  Password
                </span>
              </div>
              <button
                onClick={submit}
                className="text-xl text-white rounded-3xl h-11 w-72 hover:bg-[rgba(0,0,0,0.5)]  border-2 border-white"
              >
                Login
              </button>
            </form>
            <form
              className={
                state
                  ? "absolute ml-[400px]  mt-14 flex flex-col gap-4 "
                  : " absolute pt-1 mt-14 flex flex-col delay-100 duration-1000 gap-4"
              }
            >
              <div className="relative cursor-pointer">
                <input
                  className="h-11 w-72 px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                ></input>
                <span className="text-xl -my-3    pointer-events-none  text-white absolute left-5 top-5 px-1 transition duration-200 input-text">
                  Username
                </span>
              </div>
              <div className="relative">
                <input
                  className="h-11 w-72 px-6 text-white bg-[rgba(0,0,0,0.5)] text-xl  border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 transition duration-200 "
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <span className="text-xl  pointer-events-none -my-3 text-white  absolute left-5 top-5 px-1 transition duration-200 input-email ">
                  Email
                </span>
              </div>
              <div className="relative">
                <input
                  className="h-11 w-72 px-6 text-white bg-[rgba(0,0,0,0.5)] text-xl  border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 transition duration-200 "
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <span className="text-xl  pointer-events-none -my-3 text-white  absolute left-5 top-5 px-1 transition duration-200 input-password ">
                  Password
                </span>
              </div>
              <div className="relative">
                <input
                  className="h-11 w-72 px-6 text-white bg-[rgba(0,0,0,0.5)] text-xl  border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 transition duration-200 "
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                ></input>
                <span className="text-xl  pointer-events-none -my-3 text-white  absolute left-5 top-5 px-1 transition duration-200 input-password ">
                  Confirm Password
                </span>
              </div>
              <button
                onClick={registerData}
                className="text-xl text-white rounded-3xl h-11 w-72 hover:bg-[rgba(0,0,0,0.5)]  border-2 border-white"
              >
                Register
              </button>
            </form>
            <div
              className={
                state
                  ? " grid grid-cols-3 items-center text-white"
                  : "grid grid-cols-3 items-center text-white mt-36"
              }
            >
              <hr className="border-white" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-white" />
            </div>
            <GoogleLogin
              clientId="795770346023-kscfpb99ke89qc40ul1pvenvhek698mj.apps.googleusercontent.com"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
              className="text-xl h-11 w-72 text-white rounded-3xl  hover:bg-[rgba(0,0,0,0.5)]  border-2 border-white"
            >
              Continue with google
            </GoogleLogin>
          </div>
          <div className="invisible md:visible">
            <img className=" md:w-96 md:ml-14" src="ball.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
