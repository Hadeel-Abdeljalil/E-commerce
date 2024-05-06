import React from 'react'
import './Home.css'
import Header from './header/Header.jsx';
import About from './about/About.jsx';
import Services from './services/Services.jsx';
import News from './news/News.jsx';
import ContactUs from './contactUs/ContactUs.jsx';
export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Services/>
      <News/>
      <ContactUs/>
    </>
  )
}
