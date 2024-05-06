import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram , faFacebookF, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="footer ">
  <div className="container">
    <div className="footer-img">
      <img src="../../../../public/images/footerLogo.jpg" alt="restaurant_logo" />
    </div>
    <p><span>©</span> 2021 Palestine on Bicycle. All Rights Reserved.</p>
    <div className="social-media mt-3 d-flex justify-content-center w-100">
      <a href="https://www.facebook.com/cyclingpalestine" className="p-2">
        <div className="icon border rounded-circle d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faFacebookF}/>
        </div>
      </a>
      <a href="" className="p-2">
        <div className="icon border rounded-circle d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </a>
      <a href="" className="p-2">
        <div className="icon border rounded-circle d-flex justify-content-center align-items-center">
           <FontAwesomeIcon icon={faTwitter} />
        </div>
      </a>
      <a href="https://www.youtube.com/channel/UCsYE7Di2EmiVD-dtDxH0ayQ" className="p-2">
        <div className="icon border rounded-circle d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faYoutube}/>
          </div>
          </a>
    </div>
  </div>
</footer>

  )
}
