import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaYoutube, FaFacebookF } from 'react-icons/fa';


export default function StoreFooter() {
    return (
        <section className="contact">
        <div className="container d-flex h-100">
            <div className="about-us w-25 ">
                <h4 className='d-flex justify-content-center'> سياساتنا </h4>
                <ul className=''>
                    <li className='mb-1'><Link to="/">الرئيسية</Link> </li>
                    <li><Link to="mailto:cyclingpalestine@gmail.com"> cyclingpalestine@gmail.com</Link></li>
                    <li><Link to="tel:+970568642671"> 970-568642671+</Link></li>
                    <li><Link to="">سياسة الخصوصية</Link> </li>
                    <li><Link to="">سياسة الشحن</Link> </li>
                    <li><Link to="">سياسة الإسترجاع والإستبدال</Link> </li>
                </ul>
            </div>
            <div className="useful-links w-25">
                <h4 className='d-flex justify-content-center'>روابط مفيدة</h4>
                <ul>
                    <li>
                        <i className="fa-regular fa-greater-than"></i>
                        <a href="#">اتصل بنا</a>
                    </li>
                    <li>
                        <i className="fa-regular fa-greater-than"></i>
                        <a href="#">من نحن</a>
                    </li>
                    <li>
                        <i className="fa-regular fa-greater-than"></i>
                        <a href="#">خدماتنا</a>
                    </li>
                    <li>
                        <i className="fa-regular fa-greater-than"></i>
                        <a href="#">المتجر</a>
                    </li>
                </ul>
            </div>
    
            <div className="overlay w-25">
                <div className="contact-details contact-details-map">
                    <h4 className='d-flex justify-content-center'>اتصل بنا</h4>
    
                    <ul>
                        <li>
                            <FaEnvelope className="contact-icon ps-3" />
                            <span><a href="mailto:cyclingpalestine@gmail.com">cyclingpalestine@gmail.com</a></span>
                        </li>
    
                        <li>
                            <FaPhone className="contact-icon ps-3" />
                            <span><a href="tel:+970568642671">970-568642671+</a></span>
                        </li>
    
                        <li>
                            <FaYoutube className="contact-icon ps-3" />
                            <span><a href="https://www.youtube.com/channel/UCsYE7Di2EmiVD-dtDxH0ayQ">فلسطين ع البسكليت</a></span>
                        </li>
    
                        <li>
                            <FaFacebookF className="contact-icon ps-3" />
                            <span><a href="https://www.facebook.com/cyclingpalestine">Cycling Palestine</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}
