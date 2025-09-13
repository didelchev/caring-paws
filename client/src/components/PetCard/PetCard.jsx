import React from 'react'
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import './PetCard.css'

export default function PetCard(pet) {
  return (
    <div className='card-container'>
        <img src={pet.img} alt={pet.name} />
        <div className="pet-details">
            <h3>{pet.name}</h3>
            <p>Age: {pet.age}</p>
            <p>Breed: {pet.breed}</p>
            <p><span><FontAwesomeIcon icon={faLocationDot}/></span>Location: {pet.location}</p>
        </div>
    </div>
  )
}
