import React from 'react'
import {Link} from "react-router-dom";


const Header = () => {
  return (
  <>
  <nav style={{backgroundColor:"black"}} class="navbar navbar-expand-lg navbar-light ">
  <Link class="navbar-brand text-white" to="/">OpenBOx</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link text-white" to="/products">Products <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link text-white" to="/login">Login <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/contact">Contact</Link>
      </li>
     
      <li class="nav-item">
        <Link class="text-white nav-link" to="/about">About</Link>
      </li>
     
    
    </ul>

  </div>
</nav>


  </>
  )
}

export default Header