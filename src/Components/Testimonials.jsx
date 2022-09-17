import React from 'react'
import { US,PK,IT,CH } from 'country-flag-icons/react/3x2'
import Avatar1 from '../assets/avatars/avatar1.webp'
import Avatar2 from '../assets/avatars/avatar2.webp'
import Avatar3 from '../assets/avatars/avatar3.jpg'
import Avatar4 from '../assets/avatars/avatar4.jpg'

export default function Testimonials() {

    const testimonialsData = [
        {
            'avatar' : Avatar1,
            'name' : "chelsea254",
            'country' : "United States",
            'flag' : <US title="United States" className=" w-6 rounded"/>,
            'testimony' : "Im very specific with how I want my work and Haroon was very patient with me. Highly recommend and will definitely be back.",
        },
        {
            'avatar' : Avatar2,
            'name' : "tobiasetter",
            'country' : "Switzerland",
            'flag' : <CH title="United States" className=" w-6 rounded"/>,
            'testimony' : "Very courteous person, helpful and he is very prepared in making posts and satisfying your every need. Thank you",
        },
        {
            'avatar' : Avatar4,
            'name' : "lorenz245",
            'country' : "Italy",
            'flag' : <IT title="United States" className=" w-6 rounded"/>,
            'testimony' : "Serious seller, reliable and precise in his work. Highly recommended!",
        },
        {
            'avatar' : Avatar3,
            'name' : "saleemsamiastro",
            'country' : "Pakistan",
            'flag' : <PK title="United States" className=" w-6 rounded"/>,
            'testimony' : "Excellent price/quality ratio. Talented designers, Happy to work with! This was a great process that produced great results! I'm happy with the service and highly recommend Haroon.",
        },
    ]


    const testimonialsElement = testimonialsData.map(data => {
        return (
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        {data.testimony}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                    <img src={data.avatar} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700" />
                    <p className="text-xl font-semibold leading-tight">{data.name}</p>
                    <div className=" flex gap-3 mt-2 items-center text-sm">
                        {data.flag}
                        <p>{data.country}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section id = 'testimonials' className="bg-[#F8F9FC] dark:bg-[#101010] text-[#1F1F25] dark:text-[#FFFFFF] pb-32 md:pb-28 pt-32 md:pt-44">
            
    <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 px-10 md:px-12">
        <h2 className=" dark:text-[#FFFFFF] text-[#1F1F25] text-4xl md:text-7xl md:font-black font-extrabold text-center">What our customers are saying about us</h2>
	</div>


	<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
		
        {testimonialsElement}
	</div>
        </section>
    )
}