import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./home.css";
import Card from "../../Shared/Card/Card";
const Home = () => {
  const data = useLoaderData();
  return (
    <div
      style={{
        background:
          "url(https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      }}
      className="page-holder bg-cover"
    >
      <div className="container py-5">
        <header className="text-center text-white py-5">
          <h1 className="display-3 fw-bolder mb-4 text-black-50">
            Remember that happiness is a way of travel, not a destination.
          </h1>
          <p className="lead mb-0 text-center   text-dark">
            My goal is to run out of pages in my passport.
          </p>
          <p className="lead mt-2  text-dark">“Not all those who wander are lost.”</p>
          <p className="lead mt-0  text-dark">“Travel is an investment in yourself.”</p>
        </header>
      </div>
      <div className="d-lg-flex w-75 okkks justify-content-around">
         {
          data.map(place =>{
            return(
              <Link key={place.id} to={`/api/v2/details/${place.id}`}>
              <Card  place={place}/>
              </Link>
            )
          })
         }
        </div>
    </div>
  );
};

export default Home;
