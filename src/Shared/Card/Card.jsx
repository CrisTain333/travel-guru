import React from 'react'
import './card.css'
const Card = (props) => {
  const {placeName ,img} = props.place
  return (
     <div>
      
      <div className="card">
      <img
        src={img}
        alt=""
      />
      <div className="content">
        <h2>{placeName}</h2>
      </div>
    </div>
      
    </div>
  )
}

export default Card
