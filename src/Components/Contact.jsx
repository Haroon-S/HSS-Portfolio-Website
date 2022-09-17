import {useState} from 'react';
import ContactForm from './ContactForm'
import Thumbnail2L from '../assets/Thumbnail2L.webp'
import Thumbnail2D from '../assets/Thumbnail2D.webp'
export default function Contact(props)
{
    return (
        <section id='contact' className="bg-[#FFFFFF] dark:bg-[#101010] text-[#1F1F25] dark:text-[#FFFFFF] pb-32 md:pb-44 pt-32 md:pt-44">
            {/* <div className=" container mx-auto text-center w-96 md:w-full">
                <h2 className=" dark:text-[#FFFFFF] text-[#1F1F25] text-4xl md:text-7xl md:font-black font-extrabold">Hire Me.</h2>
                <p className=" dark:text-[#9A9DA8] text-[#717173] mt-7 text-xl font-light">I am available for freelance work. Connect with me via Whatsapp: <span className=" text-white font-semibold">+92 307 4358907</span> or email: <span className="text-white font-semibold">haroonsiddique4226@gmail.com</span></p>
            </div> */}
            <div className=" container px-6 md:px-0 w-full mx-auto md:flex md:flex-row-reverse md:pr-10">
                <img className=' mx-auto shadow-2xl rounded-xl md:w-[483px] md:h-[643px] h-[385px]' src={props.theme === 'dark' ? Thumbnail2L : Thumbnail2D} alt="" />
                <div className=" container mt-11 mx-auto md:mt-0 md:ml-11 md:mr-9">
                    <h2 className=" dark:text-[#FFFFFF] text-[#1F1F25] text-4xl md:text-7xl md:font-black font-extrabold">Hire Me.</h2>
                    <p className=" dark:text-[#9A9DA8] text-[#717173] mt-7 text-lg md:text-xl font-light">I am available for freelance work. Connect with me via Phone : <span className=" dark:text-white text-black font-semibold">+92 307 4358907</span> or email: <span className="dark:text-white text-black font-semibold">haroonsiddique4226@gmail.com</span></p>
                    <div className=" mt-16">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
        )
} 
