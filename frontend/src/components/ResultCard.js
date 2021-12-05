import React from 'react'

export default function ResultCard(props) {
  const { name, city, imgSrc, specialty } = props;
  return (
    <div>
      <div>
        <p>{name}</p>
        <p>{city}</p>
        <p>{specialty}</p>
      </div>

      <img src={imgSrc}
        alt={name} />
    </div>
  )
}