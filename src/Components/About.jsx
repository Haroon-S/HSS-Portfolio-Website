import {useState} from 'react'
import Thumbnail2L from '../assets/Thumbnail2L.webp'
import Thumbnail2D from '../assets/Thumbnail2D.webp'

export default function About (props)
{

    const [showData, setShowData] = useState("skills")

    const aboutData = [
        {
            'id' : "skills",
            'heading' : "Website Developer", 
            'status' : " - Development",
            'Detail' : "HTML | CSS | Tailwindcss | Bootstrap | JS ES6 | React.js | WordPress | MySQL | Git Version Control", 
        },
        {
            'id' : "skills",
            'heading' : "Website Designer", 
            'status' : " - UI/UX",
            'Detail' : "Completely responsive website. User friendly design. Convert Figma to React.js", 
        },
        {
            'id' : "skills",
            'heading' : "Graphic Designer", 
            'status' : " - Designing",
            'Detail' : "Breath taking Fantasy Art on Adobe PhotoShop", 
        },
        {
            'id' : "skills",
            'heading' : "Post Designer", 
            'status' : " - Designing",
            'Detail' : "Inovative scroll stoping post designs on Adobe PhotoShop", 
        },
        {
            'id' : "awards",
            'heading' : "Hackathon", 
            'status' : " - Runner Up",
            'Detail' : "Jan 26, 2021", 
        },
        {
            'id' : "awards",
            'heading' : "NDA", 
            'status' : " - Site of the Day",
            'Detail' : "Feb 10, 2020", 
        },
        {
            'id' : "expirience",
            'heading' : "Jr. Web Developer", 
            'status' : " - Intech Logix",
            'Detail' : "2020 - 2022", 
        },
        {
            'id' : "expirience",
            'heading' : "Web Developer Internee", 
            'status' : " - Host One",
            'Detail' : "2018 - 2020", 
        },
        {
            'id' : "expirience",
            'heading' : "Social Media Post Designer", 
            'status' : " - STS",
            'Detail' : "2017 - 2018", 
        },
        {
            'id' : "education",
            'heading' : "BS in Computer Science", 
            'status' : " - University of South Asia",
            'Detail' : "2019 - 2023", 
        },
    ]

    function handleChange(event) {
        setShowData(event.target.id)
    }

    const resultData = aboutData.filter(tabData => tabData.id === showData).map(data => {
        return (
            <li className=" pb-7 last:pb-0 transition-all duration-300">
                <h2 className=" inline-block text-lg font-bold transition-all duration-300">{data.heading}</h2>
                <span className=" text-lg font-light transition-all duration-300">{data.status}</span>
                <p className=" text-lg font-light transition-all duration-300">{data.Detail}</p>
            </li>
        )
    })
    
    return (
        <section id="about" className="bg-[#FFFFFF] dark:bg-[#1F1F25] text-[#1F1F25] dark:text-[#ECEBF0] w-full md:h-[950px] pt-32 md:pt-44 pb-10">
            <div className=" container w-full mx-auto md:flex">
                <img className=' mx-auto shadow-2xl rounded-xl md:w-[483px] md:h-[643px] w-[315px] h-[415px]' src={props.theme === 'dark' ? Thumbnail2L : Thumbnail2D} alt="" />
                <div className=" container px-10 md:px-4 mt-11 mx-auto md:mt-0 md:ml-11">
                    <h1 className=" dark:text-[#FFFFFF] text-[#1F1F25] text-4xl md:text-7xl md:font-black font-extrabold">About Me</h1>
                    <p className=" dark:text-[#9A9DA8] text-[#717173] mt-10 text-xl font-light">Hey, I am Haroon Shahid, a professional website developer, and graphic designer. I make every effort to meet the needs of my customers. I am hard-working and always strive to learn and use new technology. I will provide you with whatever you desire with my creative ideas and superb problem-solving skills.</p>
                        <div className=" mt-12 transition-all duration-300 dark:text-[#FFFFFF] text-[#1F1F25]">
                            <button  onClick={handleChange} id='skills' className={" pr-10 py-3 text-xl font-semibold overflow-hidden after:content-[''] after:block after:h-1 after:w-6 after:mt-2 after:border-t-[3px] after:border-t-gray-400 after:origin-left after:transition-all after:duration-500  " +  (showData === "skills" ? " after:w-full after:border-t-[#04d2f7] after:origin-left after:transition-all after:duration-500 text-[#04d2f7]" : "")}>Main skills</button>
                            <button onClick={handleChange} id='awards' className={" pr-10 py-3 text-xl font-semibold overflow-hidden after:content-[''] after:block after:h-1 after:w-6 after:mt-2 after:border-t-[3px] after:border-t-gray-400 after:origin-left after:transition-all after:duration-500  " +  (showData === "awards" ? " after:w-full after:border-t-[#04d2f7] after:origin-left after:transition-all after:duration-500 text-[#04d2f7]" : "")}>Awards</button>
                            <button onClick={handleChange} id='expirience' className={" pr-10 py-3 text-xl font-semibold overflow-hidden after:content-[''] after:block after:h-1 after:w-6 after:mt-2 after:border-t-[3px] after:border-t-gray-400 after:origin-left after:transition-all after:duration-500  " +  (showData === "expirience" ? " after:w-full after:border-t-[#04d2f7] after:origin-left after:transition-all after:duration-500 text-[#04d2f7]" : "")}>Experience</button>
                            <button onClick={handleChange} id='education' className={" pr-10 py-3 text-xl font-semibold overflow-hidden after:content-[''] after:block after:h-1 after:w-6 after:mt-2 after:border-t-[3px] after:border-t-gray-400 after:origin-left after:transition-all after:duration-500  " +  (showData === "education" ? " after:w-full after:border-t-[#04d2f7] after:origin-left after:transition-all after:duration-500 text-[#04d2f7]" : "")}>Education & Certification</button>
                        </div>
                        <div className=" mt-12 transition-all duration-300">
                            <ul className="dark:text-[#9A9DA8] text-[#717173]">
                                {resultData}
                            </ul>
                        </div>
                </div>
            </div>
        </section>
    )
}