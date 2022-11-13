import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createEvent, getEvents } from "../Store/fearures/event-slice";
import FileBase64 from "react-file-base64";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [numberOfPlayer, setNumberOfPlayer] = useState("");
  const [imageData, setImageData] = useState("");

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();
    const eventData = {
      name,
      sport,
      description,
      city,
      location,
      date,
      numberOfPlayer,
      imageData,
      postedBy: `${id?._id}`,
    };
    await dispatch(createEvent({ eventData, toast, navigate }));
    await dispatch(getEvents());
    navigate("/");
  };

  let id = JSON.parse(localStorage.getItem("user"))?.details;

  return (
    <div className="flex justify-around flex-wrap  ">
      <div className=" w-full h-auto">
        <img src="bg.jpg"></img>
      </div>
      <div className="m-4  absolute rounded-3xl p-4 bg-[rgba(0,0,0,0.5)]  mt-2 sm:mt-10  min-w-96 min-h-96 border-2  border-black">
        <div className="animate-wiggle flex justify-around m-auto	 flex-row flex-wrap text-6xl">
          <h1 className=" ">H</h1>
          <img className="w-8 h-8 mt-5 rounded-full" src="icon-ball.gif"></img>
          <h1>st </h1>
          <h1 className="pl-4">Y</h1>
          <img className="w-8 h-8 mt-5 rounded-full" src="icon-ball.gif"></img>
          <h1>ur</h1>
          <h1 className="pl-4 m-auto sm:m-0">Event</h1>
        </div>
        <form method="POST">
          <div className="gap-5 mt-4 flex flex-col">
            <div className="grid-cols-1 sm:grid-cols-2 grid gap-4">
              <div className="relative cursor-pointer">
                <input
                  className="h-11 w-full px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
                  type="text"
                  name="event name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <span className="text-xl -my-3    pointer-events-none  text-white absolute left-5 top-5 px-1 transition duration-200 input-text">
                  Event Name
                </span>
              </div>
              <div className="relative cursor-pointer">
                <input
                  className="h-11 w-full px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
                  type="text"
                  name="sport"
                  required
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                ></input>
                <span className="text-xl -my-3    pointer-events-none  text-white absolute left-5 top-5 px-1 transition duration-200 input-text">
                  Type Of Sport
                </span>
              </div>
              <div className="relative cursor-pointer">
                <input
                  className="h-11 w-full px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
                  type="number"
                  name="players"
                  onChange={(e) => setNumberOfPlayer(e.target.value)}
                  value={numberOfPlayer}
                  required
                ></input>
                <span className="text-xl -my-3    pointer-events-none  text-white absolute left-5 top-5 px-1 transition duration-200 input-text">
                  Number of Players
                </span>
              </div>
              <div className="relative cursor-pointer">
                <input
                  className="h-11 w-full px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
                  type="text"
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  required
                ></input>
                <span className="text-xl -my-3    pointer-events-none  text-white absolute left-5 top-5 px-1 transition duration-200 input-text">
                  City
                </span>
              </div>
              <div className="relative cursor-pointer">
                <input
                  className="h-11 w-full px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
                  type="text"
                  name="location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></input>
                <span className="text-xl -my-3    pointer-events-none  text-white absolute left-5 top-5 px-1 transition duration-200 input-text">
                  Location
                </span>
              </div>
              <div className="relative  ">
                <input
                  className="h-11 w-full px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
                  type="date"
                  name="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                ></input>
                <span className="text-xl -my-3 bg-[rgba(0,0,0,0.5)]  transform -translate-y-6 -translate-x-2 scale-75   pointer-events-none  text-white absolute left-5 top-5 px-1 ">
                  Date
                </span>
              </div>
            </div>
            <div className="relative  cursor-pointer">
              <div className="bg-[rgba(0,0,0,0.5)] border-2 pt-1 text-white px-1.5 h-11 border-black rounded-xl">
                <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setImageData(base64)}
                />
              </div>
              <span className="text-xl -my-3 bg-[rgba(0,0,0,0.5)]  transform -translate-y-6 -translate-x-2 scale-75   pointer-events-none  text-white absolute left-36 top-5 px-1 ">
                Upload Image
              </span>
            </div>
            <div className="relative">
              <textarea
                className="h-24 pt-1 w-full px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
                type="text"
                name="description"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
              <span className="text-xl -my-3    pointer-events-none  text-white absolute left-5 top-5 px-1 transition duration-200 textarea-text">
                Description
              </span>
            </div>
            <button
              onClick={submit}
              className="text-xl h-11 w-full text-white rounded-3xl  hover:bg-[rgba(0,0,0,0.5)]  border-2 border-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
