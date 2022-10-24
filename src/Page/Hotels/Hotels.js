import React from "react";
import { useLoaderData } from "react-router-dom";
import fristImage from "../../images/hotel1.png";
import secondImage from "../../images/hotel2.png";
import thirdImage from "../../images/hotel3.png";
import "./hotel.css";
const Hotels = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="py-3 container">
        <hr className="mt-5" />
      </div>
      <div className=" container">
        <p className="text-muted ">252 stays Arp 13-17 3 guests</p>
        <h3 className="hed">Stay in {data.placeName}</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="hotelsDiv d-lg-flex justify-content-start align-items-center">
              <img src={fristImage} className="hotelIamge" alt="" />
              <div className="ms-2">
                <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                <p className="text-muted">4 guests 2 bedrooms 2 beds 2 baths</p>
                <p className="text-muted">Wif Air conditioning Kitchen</p>
                <p className="text-muted">Cancellation fexibility availiable</p>
                <p className=""><span className="fw-bold">$34/</span>night</p>
              </div>
            </div>
            <div className="hotelsDiv d-lg-flex justify-content-start align-items-center mt-3">
              <img src={secondImage} className="hotelIamge" alt="" />
              <div className="ms-2">
                <h4>Apartment in Lost Panorama</h4>
                <p className="text-muted">4 guests 2 bedrooms 2 beds 2 baths</p>
                <p className="text-muted">Wif Air conditioning Kitchen</p>
                <p className="text-muted">Cancellation fexibility availiable</p>
                <p className=""><span className="fw-bold">$74/</span>night</p>
              </div>
            </div>
            <div className="hotelsDiv d-lg-flex justify-content-start align-items-center mt-3">
              <img src={thirdImage} className="hotelIamge" alt="" />
              <div className="ms-2">
                <h4>AR Lounge & Pool (r&r + b&b)</h4>
                <p className="text-muted">4 guests 2 bedrooms 2 beds 2 baths</p>
                <p className="text-muted">Wif Air conditioning Kitchen</p>
                <p className="text-muted">Cancellation fexibility availiable</p>
                <p className=""><span className="fw-bold">$54/</span>night</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <h3 className="text-center">right Side</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
