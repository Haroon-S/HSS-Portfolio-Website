import React from 'react'
import { TbStack2 } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsWordpress } from "react-icons/bs";
import { FaRegImage, FaRegImages} from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
export default function Services()
{
    const serviceData =[
        {
            'icon' : <TbStack2 className=" mb-5 font-normal text-[#4dc9df] group-hover:text-white" size={52}/>,
            'heading' : "Website Development",
            'detail' : "I will build Website for you using React.js, Tailwindcss, Material UI, Chakra UI",
        },
        {
            'icon' : <MdOutlineDesignServices className=" mb-5 font-normal text-[#4dc9df] group-hover:text-white" size={52}/>,
            'heading' : "Website Designing",
            'detail' : "Fully responsive website designs. User friendly design.",
        },
        {
            'icon' : <BsWordpress className=" mb-5 font-normal text-[#4dc9df] group-hover:text-white" size={52}/>,
            'heading' : "WordPress Website",
            'detail' : "I will build you a responsive and innovative wordpress website with Elementor",
        },
        {
            'icon' : <FaRegImages className=" mb-5 font-normal text-[#4dc9df] group-hover:text-white" size={52}/>,
            'heading' : "Social Media Posts Designing",
            'detail' : "I will design posts of your company and product for every Social Media Platform",
        },
        {
            'icon' : <FaRegImage className=" mb-5 font-normal text-[#4dc9df] group-hover:text-white" size={52}/>,
            'heading' : "Banner Designing",
            'detail' : "I will design eye-catching banner for your website and your Social Media Platform ",
        },
        {
            'icon' : <DiPhotoshop className=" mb-5 font-normal text-[#4dc9df] group-hover:text-white" size={52}/>,
            'heading' : "Adobe PhotoShop",
            'detail' : "I will make you amazing and innovative Website, Social Media and Marketing designs",
        },
    ]

    const serviceElement = serviceData.map ((data, index) => {
        return (
            <div key={index} className=" text-left group shadow-xl max-w-[400px] hover:-translate-y-3 transition-all duration-300 px-10 block py-12 bg-white rounded-lg bg-gradient-to-r hover:from-[#6C119C] hover:to-[#04d2f7] dark:bg-gray-800 ">
                        {data.icon}
                        <h5 key={index + serviceData.length} class=" group-hover:text-white mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.heading}</h5>
                        <p key={index + serviceData.length * 2} class=" mt-5 text-xl font-normal text-[#717173] dark:text-[#9A9DA8] group-hover:text-white">{data.detail}</p>
                </div>
        )
    })
    return (
        <section id='services' className="bg-[#F8F9FC] dark:bg-[#101010] text-[#1F1F25] dark:text-[#FFFFFF] pb-32 md:pb-44 pt-32 md:pt-44">
            <div className=" container mx-auto text-center px-6 md:px-0 w-full">
                <h2 className=" dark:text-[#FFFFFF] text-[#1F1F25] text-4xl md:text-7xl md:font-black font-extrabold">My Amazing Service</h2>
                <p className=" dark:text-[#9A9DA8] text-[#717173] mt-7 text-xl font-light">These are some of the services that I currently offer.</p>
                <div className=" grid grid-col-1 md:grid-cols-3 gap-x-4 gap-y-10 mt-20 justify-center mx-auto">
                {serviceElement}
                </div>
            </div>
        </section>
    )
}