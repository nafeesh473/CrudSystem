import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <> 
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="#"><h1> Logo</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <NavLink class="nav-link" to="/"><h5 className='text-light m-2'>Home</h5></NavLink>
        <NavLink class="nav-link" to="/teacher"><h5 className='text-light m-2'>Teacher</h5></NavLink>
      </div>
    </div>
  </div>
</nav>
    
    
    
    </>
  )
}

export default Header