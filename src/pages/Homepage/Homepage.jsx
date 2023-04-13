import React from 'react'
import './Homepage.css'
import PersonCard from '../../components/PersonCard/PersonCard';

function Homepage({users}) {
  return (
    <div className='homepage-container'>
        <h1>User Directory</h1>
        <div className='person-container'>
            {
                // users.map((item, index) => <p key={index}>{item.username}</p>)
                users.map((item, index) => <PersonCard key={index} person={item}/>)
            }
        </div>
    </div>
  )
}

export default Homepage