import React, {useState} from 'react'
import './Header.css'
import { userData } from '../../utils/users';
function Header({userData, setUsers}) {

    const [country, setCountry] = useState('')
    
    const handleInput = (e) =>{
        console.log(e.target.value);
        //store this in country
        setCountry(e.target.value)
    }

    const handleSearch = () =>{
        console.log(country)
        //filter userData for matches to country
        setUsers(userData.filter(item => item.country.toLowerCase() === country.toLowerCase()))
        //reset the textbox
        setCountry('')
    }

    const handleShow = ()=>{
        console.log("Show All")
        //set users to userData
        setUsers(userData)
    }

  return (
    <div className="header-container">
        <button onClick={handleShow}>Show All</button>
        <div className="search-container">
            <input onChange = {handleInput} type="text" placeholder="Enter Country" value={country}/>
            <button onClick={handleSearch}>Search</button>
        </div>

    </div>
  )
}

export default Header