import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/"><i class="fa-solid fa-house" style={{color: 'white',fontSize:'1.1rem'}}></i></Link>
        <Link to="/movies/popular"><span>Popular</span></Link>
        <Link to="/movies/top_rated"><span>Top Rated</span></Link>
        <Link to="/movies/upcoming"><span>Upcoming</span></Link>
      </div>
    </div>
  )
}

export default Header