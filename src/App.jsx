import { useState } from 'react'

import './App.css'
import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header';
import { userData } from './utils/users.js';


function App() {
  //const [count, setCount] = useState(0)
  //console.log(userData);
  //create state for users
  const [users, setUsers]=useState([])

  return (
    <div className="App">
      <Header userData={userData} setUsers={setUsers} />
      <Homepage users={users} />
    </div>
  )
}

export default App
