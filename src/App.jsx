import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Testimonials from './Components/Testimonials'
import FloatingWhatsApp from 'react-floating-whatsapp'
import useLocalStorage from 'use-local-storage';
import wImage from './assets/fantasy/Haroon._s._s_night_sky_big_moon_shining_stars_ship_fantasy_unre_659606d7-a97f-41fd-bf0b-5c4e1f9d3905.webp'
import './App.css'

function App() {
  
  
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark")

  
  
  console.log("theme is " + theme)

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    // 👇 add class to body element
    console.log('hey')
    const bodyTheme = theme === 'light' ? 'bg-[#101010]' : 'bg-[#FFFFFF]'
    const htmlTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.classList.add(htmlTheme)

    return () => {
      // 👇️ optionally remove styles when component unmounts

      document.documentElement.classList.remove(htmlTheme);
    };
  }, [theme]);


  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }

  function setBodyColor()
  {
    document.getElementsByTagName(body).style
  }

  return (
    <div className=" bg-slate-700 ">
      <Navbar
      switchTheme = {switchTheme}
      theme = {theme}
      />
      <Home 
      theme = {theme}
      />
      <About 
      theme = {theme}
      />
      <Services 
      theme = {theme}
      />
      <Projects 
      theme = {theme}
      />
      <Testimonials 
      theme = {theme}
      />
      <Contact 
      theme = {theme}
      />
      <Footer 
      theme = {theme}
      />
      <FloatingWhatsApp 
      className=" text-black"
        phoneNumber="+92 307 4358907"
        accountName="Haroon Shahid"
        chatMessage={`Hey there! 
How can I help you.`}
        allowClickAway
        avatar= {wImage}
      />
    </div>
  )
}

export default App
