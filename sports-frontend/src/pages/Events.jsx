import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, getSearch } from "../Store/fearures/event-slice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Events = () => {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();

  const event = useSelector((state) => state.event.searchEvent);
  const events = useSelector((state) => state.event.events);

  console.log("events", events);

  useEffect(() => {
    dispatch(getSearch(search));
  }, [search]);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  //  const data= events.filter((item)=>item?.name.includes(search))
  //  console.log("jgjhg",data)
  return (
    <div>
      <div className="my-10 flex flex-wrap justify-evenly gap-10 mx-4 ">
        <h1 className="text-5xl ">List of Events</h1>
        <input
          className=" w-80 sm:text-xl focus:outline-blue-600 bg-blue-100 h-12 rounded-3xl border-2 border-blue-400 px-6 sm:px-8 "
          placeholder="search event by city"
          value={search}
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </div>
      <div className=" px-4  lg:px-8 sm:px-6 gap-6 flex justify-around items-center flex-wrap">
        {event == undefined
          ? events.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" w-80 rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  min-h-96 border-2 border-sky-100"
                >
                  <div className="hover:animate-wiggle object-cover shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]  overflow-hidden h-48 rounded-2xl w-full ">
                    <img className="object-cover rounded-2xl" src={item.imageData}></img>
                  </div>
                  <div className="flex max-h-48 flex-col m-4 gap-4 ">
                    <div className=" text-3xl  flex justify-around items-center min-h-10 w-full ">
                      <h1>{item.name}</h1>
                    </div>
                    <div className="flex justify-around items-center  text-2xl min-h-10 border-black">
                      <div className="flex mr-2 ">
                      <img className="h-8 pb-1 w-8" src="city-icon.png"></img>
                      <h1 className="min-h-8 break-all">{item.city}</h1>
                      </div>
                      <div className="flex ">
                      <img className="h-8 w-8" src="sports-icon.png"></img>
                      <h1 className="min-h-8 break-all">{item.sport}</h1>
                      </div>
                    </div>
                    <Link to="/event-detail" state={item._id}>
                      <div className="rounded-full bg-sky-600  hover:bg-sky-500 flex justify-around items-center  h-10 ">
                        <button className="flex text-white text-xl">
                          M
                          <img
                            className="w-4 h-4 mt-2  rounded-full"
                            src="icon-ball.gif"
                          ></img>
                          RE INF
                          <img
                            className="w-4 h-4 mt-2 rounded-full"
                            src="icon-ball.gif"
                          ></img>
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })
          : event.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" w-80 m-auto rounded-t-2xl mt-10 h-96 border-2 border-black"
                >
                  <div className="hover:animate-wiggle overflow-hidden max-h-48 rounded-t-2xl w-full ">
                    <img src={item.imageData}></img>
                  </div>
                  <div className="flex flex-col m-4 gap-4 ">
                    <div className="border-2   flex justify-around items-center h-10 w-full border-black">
                      <h1>{item.name}</h1>
                    </div>
                    <div className="flex justify-around items-center border-2 h-10 border-black">
                      <h1>{item.city}</h1>
                      <h1>{item.name}</h1>
                    </div>
                    <div className="rounded-full flex justify-around items-center border-2 h-10 border-black">
                      <Link to="/event-detail" state={item._id}>
                        <button className="flex ">
                          M
                          <img
                            className="w-4 h-4 mt-1  rounded-full"
                            src="icon-ball.gif"
                          ></img>
                          RE INF
                          <img
                            className="w-4 h-4 mt-1 rounded-full"
                            src="icon-ball.gif"
                          ></img>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      {/* {data.length !==0?data.map((item, index) => {
            return (
              <div
                key={index}
                className=" w-80 m-auto rounded-t-2xl mt-10 h-96 border-2 border-black"
              >
                <div className="hover:animate-wiggle overflow-hidden max-h-48 rounded-t-2xl w-full ">
                  <img src={item.imageData}></img>
                </div>
                <div className="flex flex-col m-4 gap-4 ">
                  <div className="border-2   flex justify-around items-center h-10 w-full border-black">
                    <h1>{item.name}</h1>
                  </div>
                  <div className="flex justify-around items-center border-2 h-10 border-black">
                    <h1>{item.city}</h1>
                    <h1>{item.name}</h1>
                  </div>
                  <div className="rounded-full flex justify-around items-center border-2 h-10 border-black">
                    <Link to="/event-detail" state={item._id}>
                      <button className="flex ">
                        M
                        <img
                          className="w-4 h-4 mt-1  rounded-full"
                          src="icon-ball.gif"
                        ></img>
                        RE INF
                        <img
                          className="w-4 h-4 mt-1 rounded-full"
                          src="icon-ball.gif"
                        ></img>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
          :(events.length===0?"loading....":
          "NO Events Found")
       } */}
    </div>
  );
};

export default Events;
