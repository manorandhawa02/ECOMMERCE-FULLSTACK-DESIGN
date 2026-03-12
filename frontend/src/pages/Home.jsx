import React from 'react'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Rightpanel from '../components/Rightpanel'

const Home = () => {
  return (
    <div className='container' style={{marginTop:'20px'}}>
        <div style={{display:'flex', gap:'15px'}}>
            <Sidebar/>
            <Hero/>
            <Rightpanel/>

        </div>
            </div>
  )
}

export default Home
