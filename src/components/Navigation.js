import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from  './Navigation.module.css';

var nav = document.querySelector('nav');
  
window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100){
    nav.classList.add('bg-dark', 'shadow');
  }
  else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});

function Navigation(){
    return(<div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
     <div class = "container">

       <button type = "button" class = "navbar-toggler" data-bs-target="$navbarNav" data-bs-toggle = "collapse" aria-controls = "navbarNav" aria-expanded = "false" aria-lable = "Toggle Navbar">


         <span class = "navbar-toggler-icon"></span>
      </button>
         <div class = "collapse navbar-collapse" id = "navbarNav">
          <div class="mx-auto"></div>
           <ul class = "navbar-nav">
           <li class="nav-item">
             <NavLink to = "/">
             <a class="nav-link text-white">Home</a>
           </NavLink>
             </li>
             <li class="nav-item">
             <NavLink to = "/About">
             <a class="nav-link text-white">About</a>
           </NavLink>
             </li>
             <li class="nav-item">
             <NavLink to = "/Contact">
            <a class="nav-link text-white">Roadmap</a>
           </NavLink>
             </li>
             <li class="nav-item">
             <NavLink to = "/Launch">
            <a class="nav-link text-white">BEGIN</a>
           </NavLink>
             </li>
    
          </ul>
        </div> 
    </div>
   </nav>

</div>
    );
}

export default Navigation;