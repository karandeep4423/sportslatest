import React, { useState, useEffect } from "react";
import {
  addSport,
  getSport,
  deleteSport,
  updateSport,
  addCity,
  updateCity,
  deleteCity,
  getCity,
  getArea,
  addArea,
  updateArea,
  deleteArea,
} from "../../Store/fearures/admin-slice";
import { useDispatch, useSelector } from "react-redux";

const CreateSport = () => {
  const [sport, setSport] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  const data = useSelector((state) => state.admin);
  console.log("admijn", data);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSport());
    dispatch(getCity());
    dispatch(getArea());
  }, []);

  const addToSport = async (e) => {
    e.preventDefault();
    dispatch(addSport(sport));
    dispatch(getSport());
  };

  const deleteToSport = async (id) => {
    dispatch(deleteSport(id));
    dispatch(getSport());
  };

  const updateToSport = async (id) => {
    const sport = prompt("enter updated sport");
    dispatch(updateSport({ id, sport }));
    dispatch(getSport());
  };

  const addToCity = async (e) => {
    e.preventDefault();
    dispatch(addCity(city));
    dispatch(getCity());
  };

  const deleteToCity = async (id) => {
    dispatch(deleteCity(id));
    dispatch(getCity());
  };

  const updateToCity = async (id) => {
    const city = prompt("enter updated city");
    dispatch(updateCity({ id, city }));
    dispatch(getCity());
  };

  const addToArea = async (e) => {
    e.preventDefault();
    dispatch(addArea(area));
    dispatch(getArea());
  };

  const deleteToArea = async (id) => {
    dispatch(deleteArea(id));
    dispatch(getArea());
  };

  const updateToArea = async (id) => {
    const area = prompt("enter updated area");
    dispatch(updateArea({ id, area }));
    dispatch(getArea());
  };
  return (
    <div>
      <div>
        <div className="gap-6 flex justify-around items-center flex-wrap px-4 mt-6 lg:px-8 sm:px-6 ">
          {data?.sports?.map((item, index) => (
                <div className=" bg-[url('sports-icon.png')] bg-cover opacity-80 bg-[rgba(0,0,0,0.5)]  w-36 h-36   rounded-full  ">
                  <div className="flex justify-center items-center p-2 flex-col  h-36  rounded-full   bg-[rgba(0,0,0,0.5)]   w-36  ">
                  <p className="text-white text-center  font-bold  break-all text-xl" key={index}>{item.sport}</p>
                  <div className="flex gap-x-8 gap-y-16 mt-3">
                  <button className=" " onClick={() => updateToSport(item._id)}>
                  <img className="w-5 h-5" src="edit-icon.png"></img>
                  </button>
                  <button className="" onClick={() => deleteToSport(item._id)}>
                  <img   className="w-5 h-5"  src="delete-icon.png"></img>
                  </button>
                  </div>
                  </div>
            </div>
          ))}
        </div>
        <br />
        <form method="POST">
          <input
           className="w-64 h-11 border-2 border-black"
            type="text"
            value={sport}
            name="sport"
            onChange={(e) => setSport(e.target.value)}
            placeholder="sport"
          ></input>
          <button onClick={addToSport}>Add Sport</button>
        </form>
      </div>
      <br />
      <br />
      <div>
      <div className="gap-6 flex justify-around items-center flex-wrap px-4 mt-6 lg:px-8 sm:px-6 ">
          {data?.cities?.map((item, index) => (
                <div className=" bg-[url('admin-city.png')] bg-cover opacity-80 bg-[rgba(0,0,0,0.5)]  min-w-36 min-h-36   rounded-full  ">
                  <div className="flex justify-center items-center p-2 flex-col  h-36  rounded-full   bg-[rgba(0,0,0,0.5)]   w-36  ">
                  <p className="text-white text-center  font-bold  break-all text-xl" key={index}>{item.city}</p>
                  <div className="flex gap-x-8 gap-y-16 mt-3">
                  <button className=" " onClick={() => updateToCity(item._id)}>
                  <img className="w-5 h-5" src="edit-icon.png"></img>
                  </button>
                  <button className="" onClick={() => deleteToCity(item._id)}>
                  <img   className="w-5 h-5"  src="delete-icon.png"></img>
                  </button>
                  </div>
                  </div>
            </div>
          ))}
        </div>
        <br />
        <form method="POST">
          <input
            type="city"
            value={city}
            name="city"
            onChange={(e) => setCity(e.target.value)}
            placeholder="city"
          ></input>
          <button onClick={addToCity}>add city</button>
        </form>
      </div>
      <br />
      <br />
      <div>
      <div className="gap-6 flex justify-around items-center flex-wrap px-4 mt-6 lg:px-8 sm:px-6 ">
          {data?.areaes?.map((item, index) => (
                <div className=" bg-[url('city-icon.png')] bg-cover opacity-80 bg-[rgba(0,0,0,0.5)]  min-w-36 min-h-36   rounded-full  ">
                  <div className="flex justify-center items-center p-2 flex-col  h-36  rounded-full   bg-[rgba(0,0,0,0.5)]   w-36  ">
                  <p className="text-white text-center  font-bold  break-all text-xl" key={index}>{item.area}</p>
                  <div className="flex gap-x-8 gap-y-16 mt-3">
                  <button className=" " onClick={() => updateToSport(item._id)}>
                  <img className="w-5 h-5" src="edit-icon.png"></img>
                  </button>
                  <button className="" onClick={() => deleteToSport(item._id)}>
                  <img   className="w-5 h-5"  src="delete-icon.png"></img>
                  </button>
                  </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <form method="POST">
        <input
          type="area"
          value={area}
          name="area"
          onChange={(e) => setArea(e.target.value)}
          placeholder="area"
        ></input>
        <button type="submit" onClick={addToArea}>
          Add Area
        </button>
      </form>
    </div>
  );
};

export default CreateSport;
