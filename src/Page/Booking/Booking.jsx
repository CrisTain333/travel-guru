import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./booking.css";
const Booking = () => {
  const data = useLoaderData();
  return (
    <div
      style={{
        background: `url(https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
      className="page-holder bg-cover"
    >
      <div className="container py-5 ">
        <div className="mt-5">
          <div className="lg-col-6">
            <h2 className="display-3 fw-bolder mb-4 text-white lead text-center">
              {data.placeName}
            </h2>

            <p className="lead mt-3 text-white">{data.details}</p>
          </div>
        </div>
      </div>
      <div className="cardDiv">
        <p className=" d-lg-block fw-bold">Origin</p>
        <input type="text" readOnly value="Chittagong" />
        <p className="lead m-2 fw-bold">Destination</p>
        <input type="text" readOnly value={`${data.placeName}`} />

        <p className="lead m-2 fw-bold">From</p>
        <input type="date" name="" id="" />
        <p className="lead m-2 fw-bold">To</p>
        <input type="date" name="" id="" />
       <Link  to={`/hotels/${data.id}`}>
       <button className="bookbtn mt-4">Start Booking</button>
       </Link>
      </div>
    </div>
  );
};

export default Booking;
