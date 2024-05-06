import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/FeatureUser';
import { CartContext } from '../Context/FeatureCart';
import './Navbar.css';


export default function Navbar() {
 
  const navigate = useNavigate()
  let {userToken,setUserToken,userData,setUserData} = useContext(UserContext);
  let {count} = useContext(CartContext);
  
  const logOut = ()=>{
    localStorage.removeItem('userToken');
    setUserToken(null);
    setUserData(null);
    navigate('/');
  }
  
  const [navbar, setNavbar]=useState(false);
  const changeBackground=()=>{
    if(window.scrollY>=30){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  
  //console.log(userToken);
  return (
    <nav className={`navbar navbar-expand-lg fixed-top style-font bg-nav ${navbar?' mt-0 nav x ':''}`}>
      <div className="container h-100">
      <span className="navbar-brand mb-0 h1 style-font">
          Hadeel Store
        </span>
     
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-3 mb-lg-0">
         
        <li className="nav-item me-4 ">
              <NavLink className=" nav-link border-nav " activeclassname="active"  to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className=" nav-link border-nav     " activeclassname="active" to="/products">
                Store
              </NavLink>
            </li>

        {userToken?
        <li className="nav-item me-4">
        <NavLink className="nav-link border-nav" activeclassname="active" to = '/products/cart'>Cart  <span className="badge badge-info text-white bg-dark rounded-circle">{count}</span></NavLink>
      </li>
        :null}
       
       
        </ul>
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {userData?userData.userName:'شارك معنا'}
        </a>
        
        <ul className="dropdown-menu ">
          { !userToken?<>
            <li><Link className="dropdown-item" to="/register">إنشاء حساب</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to = "/login">تسجيل الدخول</Link></li>
          </>
           :<>
             <li><Link className="dropdown-item" to="/profile">الملف الشخصي</Link></li>
           <li><hr className="dropdown-divider" /></li>
           <li><Link className="dropdown-item" onClick={logOut}>تسجيل خروج</Link></li>
           </>
          
        }
          
        </ul>
      </li>
        </ul>
     
      </div>
    </div>
  </nav>

  )
}
