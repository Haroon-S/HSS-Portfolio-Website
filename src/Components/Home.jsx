import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Banner4L from '../assets/Banner4L.webp'
import Banner4D from '../assets/Banner4D.webp'

export default function Home(props) {
    return (
        <section id='home'>
            <div className=" w-full relative text-center text-[#1F1F25] dark:text-[#ECEBF0] text-2xl font-extrabold md:text-6xl md:font-black transition-all duration-500 ">
                <img className=" w-full h-[350px] md:h-full" src={props.theme === 'dark' ? Banner4L : Banner4D} alt="" />
                <div className=" absolute top-28 left-10 md:top-40 2xl:top-72 2xl:left-52 text-left md:left-20">
                    <h1 className=" md:my-6 uppercase text-sm md:text-lg 2xl:text-2xl font-normal">Welcom To My World</h1>
                    <h1 className=" md:my-6 2xl:text-7xl">Hi, I am Haroon Shahid</h1>
                    <ReactTypingEffect
                    className=" md:my-6 text-[#04d2f7] 2xl:text-7xl"
                    text={["Web Developer." , "Graphic Designer.", "Post Designer.", "Web Designer."]}
                    speed={120}
                    eraseSpeed={140}
                    eraseDelay={5000}
                    typingDelay={200}
                    />
                    <h1 className=" md:my-6 2xl:text-7xl">Build your online presence</h1>
                </div>
            </div>
        </section>
    )
}