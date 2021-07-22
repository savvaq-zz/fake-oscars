import React from 'react'
import './PlaceholderCard.css'
import { FaFileImage } from 'react-icons/fa';

const PlaceHolderCard = () => {
  return (
    <div className="placeholder-card">
      <p>Your Nominations will appear here</p>
      <FaFileImage size={50} />
    </div>
  )
}

export default PlaceHolderCard;