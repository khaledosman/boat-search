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
      <div className='card-img'>
        {boat.isLiked && <i class='icon' />}
        <img src={boat.imageUrl} loading='lazy' alt='boat' />
      </div>
      <div className='card-content'>
        <div className='left'>
          <div className='card-title'>
            <h5>{boat.name} {boat.type} ({boat.year})</h5>
          </div>
          <div className='card-abstract'>
            <div>
              {new Array(boat.reviews.score).fill(0).map((i, index) => <span key={index}>*</span>)}
              <span> Read Reviews</span>
            </div>
          </div>
          <div className='card-details'>
            <i className='icon' /> Skipper: {boat.skipper}
            <br />
            <i className='icon' /> Cabins: {boat.cabins}
            <br />
            <i className='icon' /> Guests: Up to {boat.guests}
          </div>
        </div>
        <div className='right'>
          <div className='card-title'>€{boat.price}/Day</div>
          <div className='card-abstract'>
            {boat.locality}, {boat.marina}, {boat.country}
          </div>
          <div className='card-details'>
          Length: {boat.length}m
          </div>
          <div className='instant-booking'>
            {boat.active && <b> Instant booking</b>}
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '5px', right: '20px' }}>
          <button className='card-btn' type='button' onClick={handleClick}>View Details</button>
        </div>
      </div>

    </div>
  )
}

export default Boat
