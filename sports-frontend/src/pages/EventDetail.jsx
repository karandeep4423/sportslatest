import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEvents,
  getEvent,
  deleteEvent,
  addToComment,
  deleteToComment,
  joinToEvent,
  updateToEvent,
} from "../Store/fearures/event-slice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Player } from "@lottiefiles/react-lottie-player";

const EventDetail = () => {
  let dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();
  let eventID = location.state;
  const event = useSelector((state) => state.event.eventData);
  console.log("eventghfhgs", event);
  console.log("iddddevent", eventID);

  useEffect(() => {
    dispatch(getEvent(eventID));
  }, [dispatch]);

  const joinEvent = (eventId) => {
    dispatch(joinToEvent(eventId));
    dispatch(getEvent(eventID));
  };

  const updateEvent = async (id) => {
    const name = await prompt("enter value");
    await dispatch(updateToEvent({ name, id }));
    await dispatch(getEvent(eventID));
  };

  const Delete = async (deleteID) => {
    await dispatch(deleteEvent(deleteID));
    await dispatch(getEvents());
    navigate("/");
  };

  const addComment = async (value, id) => {
    dispatch(addToComment({ value, id }));
    dispatch(getEvent(eventID));
    toast.success("successfully");
  };

  const deleteComment = async (value, commentPostedBy, eventId) => {
    await dispatch(deleteToComment({ value, commentPostedBy, eventId }));
    await dispatch(getEvent(eventID));
    toast.success("successfully");
  };
  let id = JSON.parse(localStorage.getItem("user"))?.details;

  let isEqual = (first, second) =>
    JSON.stringify(first) === JSON.stringify(second);
  return (
    <div>
      <div>
        <div className="mt-10  text-center  text-3xl">
          <h1>{event.name}</h1>
        </div>
        <div className="border-2 min-w-screen h-fit p-5 sm:p-10 m-5 md:m-10 border-sky-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex justify-around  flex-wrap">
            <div className="w-[100%] order-last md:-order-last  md:w-[30%] lg:w-[50%] flex justify-between  items-center flex-wrap ">
              <div className="grid grid-cols-2 mt-6 md:mt-0 w-[100%] justify-around gap-x-10 sm:gap-x-24  gap-6">
                <div>
                  <div className="flex text-xl sm:text-2xl">
                    <img className="h-8 w-8" src="sports-icon.png"></img>
                    <h1>Type of Sport</h1>
                  </div>
                  <p className="ml-9 text-lg sm:text-xl">{event.sport} </p>
                </div>
                <div className="">
                  <div className="flex text-xl sm:text-2xl">
                    <img className="h-8 w-8" src="location-icon.gif"></img>
                    <h1>Location</h1>
                  </div>
                  <p className="ml-9 text-lg sm:text-xl">{event.location}</p>
                </div>
                <div>
                  <div className="flex text-xl sm:text-2xl">
                    <img className="h-8 w-8" src="city-icon.gif"></img>
                    <h1>City</h1>
                  </div>
                  <p className="ml-9 text-lg sm:text-xl">{event.city}</p>
                </div>
                <div className="">
                  <div className="flex text-xl sm:text-2xl">
                    <img className="h-8 w-8" src="calendar.gif"></img>
                    <h1>Start Date</h1>
                  </div>
                  <p className="sm:text-xl text-lg ml-9">{event.date}</p>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl flex">
                    <img className="h-8 w-8" src="player-icon.gif"></img>
                    <h1>Number of Players</h1>
                  </div>
                  <p className="ml-9 text-lg sm:text-xl">
                    {event.numberOfPlayer}
                  </p>
                </div>
                <div>
                  <div className="sm:text-2xl text-xl flex">
                    <img className="h-8 w-8" src="avatar-icon.gif"></img>
                    <h1>Hosted BY</h1>
                  </div>
                  <Link to="/profile" state={event.postedBy?._id}>
                    <p className="sm:text-xl text-lg ml-9">
                      {event.postedBy?.username}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <h1 className="text-2xl sm:text-3xl">Description</h1>
                <p className="text-lg sm:text-xl mt-2">{event.description}</p>
              </div>
            </div>
            <div className="overflow-hidden lg:space-x-0 md:space-x-20 w-96 min-h-96">
              <div className="flex flex-row-reverse mb-2 mr-10 gap-10">
                <button onClick={() => Delete(event._id)}>Delete</button>
                <button onClick={() => updateEvent(event._id)}>Update</button>
              </div>
              <img src={event.imageData}></img>
            </div>
          </div>
          <div className="border-2 mt-5 sm:mt-10  w-full min-h-72 border-black">
            <img src="bg.jpg"></img>
          </div>
          <div className="mt-5  flex flex-wrap  gap-y-5 gap-x-4  sm:flex-nowrap justify-around">
            {event.numberOfPlayer === 0 ? (
              <h2 className="text-xl  sm:text-2xl bg-sky-100  border-8 border-sky-600 py-2 px-5">
                Event is full
              </h2>
            ) : event.joinEvent?.some((e) =>
                isEqual(e, {
                  _id: id?._id,
                  username: id?.username,
                })
              ) ? (
              <h1 className="text-xl  sm:text-2xl bg-sky-100  border-8 border-sky-600  py-2 px-5">
                {" "}
                You joined event
              </h1>
            ) : (
              <button
                className="w-72 rounded-full bg-sky-600 h-12 text-2xl text-white hover:bg-sky-500"
                onClick={() => joinEvent(event._id)}
              >
                Join Event
              </button>
            )}
            <h2 className="text-xl sm:text-2xl bg-sky-100  border-8 border-sky-600 py-2 px-5">
              {event.numberOfPlayer} Places left
            </h2>
          </div>
          <div className="mt-5 flex flex-wrap gap-5 justify-around sm:justify-start ">
            {event.joinEvent?.map((event, index) => (
              <div
                key={index}
                className="border-2 rounded-full inline-block py-2 px-4  border-sky-200 text-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
              >
                <h3 className="bg-sky-300 border-2 w-9 pl-2 inline-block rounded-full  border-sky-600">
                  {index + 1}
                </h3>
                <Link to="/profile" className="ml-4" state={event._id}>
                  {event.username}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="border-2 border-white min-w-screen h-fit shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:p-8 p-4  m-5 sm:m-10">
          <div className="relative cursor-pointer">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addComment(e.target[0].value, event._id);
              }}
            >
              <div className="relative  cursor-pointer">
                <textarea
                  className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] h-24 pt-2 w-full px-3 top-5 sm:text-xl  text-base  bg-white  border-sky-200 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
                  required
                  type="text"
                  name="add comment"
                ></textarea>
                <span className="text-xl -my-3  pointer-events-none  text-black absolute left-4 top-5 px-1 transition duration-200 profile-textarea-text">
                  Add comment
                </span>
              </div>
              <button className=" w-48 h-10 mt-4 bg-sky-600 text-white hover:bg-sky-500  rounded-full">
                add comment
              </button>
            </form>
          </div>
          <div className=" ">
            {event.comments?.map((comment, index) => (
              <div
                key={index}
                className="w-full min-h-16 mt-4 flex items-center border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-sky-100"
              >
                <Link
                  to="/profile"
                  className="w-14 h-14 my-2 mx-5 "
                  state={comment.postedBy._id}
                >
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/66bdd430-0a38-4d96-8842-0b29cf6a485a/iXqeSGxSKx.json"
                  ></Player>
                </Link>
                <div className="w-full py-2 min-h-16 ">
                  <h3 className="mt-1 break-words text-base sm:text-xl">
                    {comment.comment}
                  </h3>
                  <br />
                  <div className="absolute text-gray-500 flex  gap-x-10 -mt-6">
                    <h3>
                      <Link to="/profile" state={comment.postedBy._id}>
                        {comment.postedBy.username}
                      </Link>
                    </h3>
                    <button
                      className=""
                      onClick={() =>
                        deleteComment(
                          comment.comment,
                          comment.postedBy._id,
                          event._id
                        )
                      }
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
