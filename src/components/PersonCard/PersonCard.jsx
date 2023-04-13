import React from 'react'
import './PersonCard.css'

function PersonCard({person}) {
  return (
    <div className="person-card">
        <img src={person.imageUrl} alt="" />
        <h3>{person.username}</h3>
        <p>{person.country}</p>
    </div>
  )
}

export default PersonCard