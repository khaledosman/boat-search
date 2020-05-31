import React from 'react'
import './Boat.css'
/*
{
    id
    name
    type
    year
    reviews {
      total
      score
    }
    marina
    locality
    country
    skipper
    active
    cabins
    guests
    length
    price
    imageUrl
  } */

function Boat (props) {
  const { boat } = props
  const handleClick = e => {

  }
  return (
    <div className='card'>
      <div>
        {boat.isLiked && <i class='icon' />}
        <img src={boat.imageUrl} alt='boat' />
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h5>{boat.name} {boat.type} ({boat.year})</h5>
          <span>€{boat.price}/Day</span>
        </div>
        <div className='card-abstract'>
          <div>
            {boat.reviews.score}
            <span> Read Reviews</span>
          </div>
          <span>
            Country: {boat.country}
          </span>
        </div>
        <div className='card-details'>
          <i className='icon' /> Skipper: {boat.skipper}
          <i className='icon' /> Cabins: {boat.cabins}
          <i className='icon' /> Guests: Up to {boat.guests}
        </div>
        <div>
          Length: {boat.length}m
        </div>
        {boat.active && <b> Instant booking</b>}
        <button type='button' onClick={handleClick}>View Details</button>
      </div>

    </div>
  )
}

export default Boat
