import {useState, useEffect} from 'react'
import { HiOutlineSun, HiOutlineMoon} from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import useScrollPosition from './useScrollPosition'
import Scrollspy from 'react-scrollspy'
import Logo from './Logo'
import logo from '../assets/Logo.png'

export default function Navbar(props)
{

    const [section, setSection] = useState ("1")
    const [openMenu, setOpenMenu] = useState(false)
    const scrollPosition = useScrollPosition();
    // console.log(scrollPosition)
    function handleSection (event)
    {
        setSection(event.target.id)
    }

    function toggleMenu ()
    {
        setOpenMenu(prevState => !prevState)
    }

    return (
        <section className={" sticky top-0 left-0 z-10 w-full h-20 bg-[#ECEBF0] dark:bg-[#1F1F25] text-[#1F1F25] dark:text-[#ECEBF0] transition-all duration-500 " + (scrollPosition && " shadow-xl dark:shadow-md dark:shadow-neutral-900" )}>
        <div className=" transition-all duration-500 ">
        <div className=" w-full pr-8 pl-4 flex items-center justify-between md:mx-auto md:max-w-[1450px] h-24 overflow-x-hidden">
        <div className=" flex items-center">
            <div className=" flex items-center gap-2">
                <Logo />
            </div>

            {/* <div className=" hidden md:flex font-semibold md:ml-12 md:gap-12    "> */}
            <Scrollspy className="hidden md:flex font-semibold md:ml-12 md:gap-12 " items={ ['home', 'about', 'services', 'projects','testimonials', 'contact'] } currentClassName=" after:w-full after:border-t-[#04d2f7] after:origin-left text-[#04d2f7] " scrolledPastClassName= "after:w-0 after:origin-left " offset={-50} >
                <a href="#home" id='1'  onClick={handleSection} className={" py-5 w-full text-base hover:text-[#4dc9df] after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500  " }>Home</a>
                <a href="#about" id='2' onClick={handleSection} className={" py-5 w-full text-base hover:text-[#4dc9df] after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500  " }>About</a>
                <a href="#services" id='3' onClick={handleSection} className={" py-5 w-full text-base hover:text-[#4dc9df] after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500  " }>Services</a>
                <a href="#projects" id='4' onClick={handleSection} className={" py-5 w-full text-base hover:text-[#4dc9df] after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500  " }>Projects</a>
                <a href="#testimonials" id='5' onClick={handleSection} className={" py-5 w-full text-base hover:text-[#4dc9df] after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500  " }>Testimonials</a>
                <a href="#contact" id='6' onClick={handleSection} className={" py-5 w-full text-base hover:text-[#4dc9df] after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500  " }>Contact</a>
            </Scrollspy>
            {/* </div> */}
        </div>
        <div>
            <h1 onClick={props.switchTheme} className=" text-2xl cursor-pointer hover:text-[#04d2f7] hidden md:block ">
                {props.theme === 'dark' ? <HiOutlineMoon /> : <HiOutlineSun />}</h1>
            <h1 onClick={toggleMenu} className=" block md:hidden">{!openMenu && <AiOutlineMenu size={28}/>}</h1>
        </div>
        <div className={openMenu ? " z-10 fixed flex flex-col md:hidden h-full ease-in duration-500 dark:bg-[#1F1F25] bg-[#ECEBF0] w-[85%] top-0 right-0 " : " z-10 fixed flex flex-col md:hidden h-full top-0 right-0 w-[85%] dark:bg-[#1F1F25] bg-[#ECEBF0] ease-in-out duration-700 translate-x-full"}>
        <div className=" mt-8 px-6 self-end w-full flex justify-between">
        { openMenu && <h1 onClick={props.switchTheme} className=" text-2xl md:block">{
                props.theme === 'dark' ? <HiOutlineMoon /> : <HiOutlineSun />}</h1>
                }
        {openMenu && <h1 onClick={toggleMenu} ><AiOutlineClose size={28}/></h1>}
        </div>
        <Scrollspy className=" ml-7 mt-10 w-[350px] text-start" items={ ['home', 'about', 'services', 'projects','testimonials', 'contact'] } currentClassName=" after:block after:w-full after:border-t-[#04d2f7] after:transition-all after:duration-500 text-[#04d2f7] " scrolledPastClassName= "after:w-0 " offset={-50}>
                <li className={"py-5 w-full after:content-[''] after:bg-[#4dc9df] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500 after:origin-left "}>                  
                    <a href="#home" id='1'  onClick={handleSection}   >
                        Home
                    </a>
                </li>           
                <li className={"py-5 w-full after:content-[''] after:bg-[#4dc9df] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500 after:origin-left "}>                  
                    <a href="#about" id='2' onClick={handleSection}>
                        About
                    </a>
                </li>           
                <li className={"py-5 w-full after:content-[''] after:bg-[#4dc9df] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500 after:origin-left "}>                  
                    <a href="#services" id='3' onClick={handleSection}>
                        Sevices
                    </a>
                </li>           
                <li className={"py-5 w-full after:content-[''] after:bg-[#4dc9df] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500 after:origin-left " }>                  
                    <a href="#projects" id='4' onClick={handleSection}>
                        Projects
                    </a>
                </li>           
                <li className={"py-5 w-full after:content-[''] after:bg-[#4dc9df] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500 after:origin-left " }>                  
                    <a href="#testimonials" id='4' onClick={handleSection}>
                        Testimonials
                    </a>
                </li>           
                <li className={"py-5 w-full after:content-[''] after:bg-[#4dc9df] relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500 after:origin-left " }>                  
                    <a href="#contact" id='5' onClick={handleSection}>
                        Contact
                    </a>
                </li>  
                </Scrollspy>         
            
            </div>
        </div>
        </div>
        </section>
    )
}