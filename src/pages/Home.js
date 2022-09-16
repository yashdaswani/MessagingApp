import React from 'react'
import Chat from '../components/Chat/Chat'
import Sidebar from '../components/Sidebar/Sidebar'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
    <div className="container">
      <Sidebar/>
      <Chat/>
    </div>
  </div>
  )
}

export default Home
