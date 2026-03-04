import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './PetCard.css'

export default function PetCard({ img, name, age, breed, location, sex, size }) {
  return (
    <div className='pet-card'>

      {/* Image */}
      <div className='pet-card-img-wrap'>
        <img src={img} alt={name} className='pet-card-img' />
        {sex && <span className='pet-card-badge'>{sex}</span>}
      </div>

      {/* Body */}
      <div className='pet-card-body'>
        <div className='pet-card-top'>
          <h3 className='pet-card-name'>{name}</h3>
          {age && <span className='pet-card-age'>{age}</span>}
        </div>

        <p className='pet-card-breed'>{breed}</p>

        <div className='pet-card-footer'>
          <span className='pet-card-location'>
            <FontAwesomeIcon icon={faLocationDot} />
            {location}
          </span>
          {size && <span className='pet-card-size'>{size}</span>}
        </div>
      </div>

    </div>
  )
}