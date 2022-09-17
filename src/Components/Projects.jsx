import {useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Image1 from '../assets/posts/easter2fbcos2.webp'
import Image2 from '../assets/posts/FacebookB.webp'
import Image3 from '../assets/posts/FacebookW.webp'
import Image4 from '../assets/posts/FB(788x940)V2.webp'
import Image5 from '../assets/posts/FB(940x788).webp'
import Image6 from '../assets/posts/fb1(1).webp'
import Image7 from '../assets/posts/FB1(2).webp'
import Image8 from '../assets/posts/fb1_3.webp'
import Image9 from '../assets/posts/FB1.webp'
import Image10 from '../assets/posts/fb-ghd-1(1).webp'
import Image11 from '../assets/posts/FB1-2.webp'
import Image12 from '../assets/posts/fb2(1).webp'
import Image13 from '../assets/posts/FB2(788x940)2.webp'
import Image14 from '../assets/posts/FB2.webp'
import Image15 from '../assets/posts/FB3.webp'
import Image16 from '../assets/posts/FB4R3.webp'
import Image17 from '../assets/posts/fb-olp-1 (1).webp'
import Image18 from '../assets/posts/ytbanner123.webp'
import fImage1 from '../assets/fantasy/Haroon._s._s_night_sky_big_moon_shining_stars_ship_fantasy_unre_2c1cc4b2-0bf8-4517-a9a8-faefe435ab90.webp'
import fImage2 from '../assets/fantasy/Haroon._s._s_night_sky_big_moon_shining_stars_ship_fantasy_unre_2e266e38-c471-48a2-8904-a32e922c6754.webp'
import fImage3 from '../assets/fantasy/Haroon._s._s_night_sky_big_moon_shining_stars_ship_fantasy_unre_3d2a56a1-5486-4e60-89d5-9e23ccc09d91.webp'
import fImage4 from '../assets/fantasy/Haroon._s._s_night_sky_big_moon_shining_stars_ship_fantasy_unre_4c7102be-5aca-47bd-9ef0-c6bd85a458c3.webp'
import fImage5 from '../assets/fantasy/Haroon._s._s_night_sky_big_moon_shining_stars_ship_fantasy_unre_114e7666-1a5e-494a-9dd7-abc115ba1502.webp'
import fImage6 from '../assets/fantasy/Haroon._s._s_night_sky_big_moon_shining_stars_ship_fantasy_unre_3748a1f5-f35e-460b-90ac-3f37ab86c566-1.webp'
import fImage7 from '../assets/fantasy/Haroon._s._s_night_sky_big_moon_shining_stars_ship_fantasy_unre_659606d7-a97f-41fd-bf0b-5c4e1f9d3905.webp'
import fImage8 from '../assets/fantasy/Haroon._s._s_red_lake_blue_moon_stars_mountain_and_moon_reflect_cd0dafe3-8d5a-448b-9fdb-2864df1a3ba5.webp'
import fImage9 from '../assets/fantasy/Haroon._s._s_red_lake_blue_moon_stars_mountain_and_moon_reflect_b031690c-47a7-463b-b52f-ea146c478274.webp'
import fImage10 from '../assets/fantasy/Haroon._s._s_20_year_old_white_man_lonely_long_white_hair_white_ef994e12-23ce-48db-8f68-539724000fca.webp'
import fImage11 from '../assets/fantasy/Haroon._s._s_20_year_old_white_man_lonely_long_white_hair_white_5e489f81-cc17-4d57-8960-3a53f8b829e8.webp'

export default function Projects ()
{

    const faImages = [
      {
        original: fImage1,
        thumbnail: fImage1,
      },
      {
        original: fImage2,
        thumbnail: fImage2,
      },
      {
        original: fImage3,
        thumbnail: fImage3,
      },
      {
        original: fImage4,
        thumbnail: fImage4,
      },
      {
        original: fImage5,
        thumbnail: fImage5,
      },
      {
        original: fImage6,
        thumbnail: fImage6,
      },
      {
        original: fImage7,
        thumbnail: fImage7,
      },
      {
        original: fImage8,
        thumbnail: fImage8,
      },
      {
        original: fImage9,
        thumbnail: fImage9,
      },
      {
        original: fImage10,
        thumbnail: fImage10,
      },
      {
        original: fImage11,
        thumbnail: fImage11,
      },
      
    ]
    const smImages = [
        {
          original:  Image1,
          thumbnail: Image1,
        },
        {
          original:  Image2,
          thumbnail: Image2,
        },
        {
          original:  Image3,
          thumbnail: Image3 ,
        },
        {
          original:  Image4,
          thumbnail: Image4 ,
        },
        {
          original:  Image5,
          thumbnail: Image5 ,
        },
        {
          original:  Image6,
          thumbnail: Image6 ,
        },
        {
          original:  Image7,
          thumbnail: Image7 ,
        },
        {
          original:  Image8,
          thumbnail: Image8 ,
        },
        {
          original:  Image9,
          thumbnail: Image9 ,
        },
        {
          original:  Image10,
          thumbnail: Image10,
        },
        {
          original:  Image11,
          thumbnail: Image11,
        },
        {
          original:  Image12,
          thumbnail: Image12,
        },
        {
          original:  Image13,
          thumbnail: Image13,
        },
        {
          original:  Image14,
          thumbnail: Image14,
        },
        {
          original:  Image15,
          thumbnail: Image15,
        },
        {
          original:  Image16,
          thumbnail: Image16,
        },
        {
          original:  Image17,
          thumbnail: Image17,
        },
        {
          original:  Image18,
          thumbnail: Image18,
        },
      ];

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section id='projects' className="dark:bg-[#1F1F25] bg-white text-[#1F1F25] dark:text-[#ECEBF0] pt-32 pb-32 md:pt-44">
        <div className=" container mx-auto text-center px-3 md:px-0 w-full">
                <h2 className=" dark:text-[#FFFFFF] text-[#1F1F25] text-4xl md:text-7xl md:font-black font-extrabold">My Latest Project</h2>
                <p className=" dark:text-[#9A9DA8] text-[#717173] mt-7 text-xl font-light">These are a few of my previous projects.</p>
                
                <Tabs className=" mt-20" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className=" flex  flex-wrap md:justify-center">
                        <Tab className={"pr-10 py-3 cursor-pointer text-xl outline-none border-none font-semibold overflow-hidden after:content-[''] after:block after:h-1 after:w-6 after:mt-2 after:border-t-[3px] after:border-t-gray-400 after:origin-left after:transition-all after:duration-500" + (tabIndex === 0 ? " text-[#04d2f7] after:w-full after:border-t-[#04d2f7]" : "")}>Web App</Tab>
                        <Tab className={"pr-10 py-3 cursor-pointer text-xl outline-none border-none font-semibold overflow-hidden after:content-[''] after:block after:h-1 after:w-6 after:mt-2 after:border-t-[3px] after:border-t-gray-400 after:origin-left after:transition-all after:duration-500" + (tabIndex === 1 ? " text-[#04d2f7] after:w-full after:border-t-[#04d2f7]" : "")}>Posts Designs</Tab>
                        <Tab className={"pr-10 py-3 cursor-pointer text-xl outline-none border-none font-semibold overflow-hidden after:content-[''] after:block after:h-1 after:w-6 after:mt-2 after:border-t-[3px] after:border-t-gray-400 after:origin-left after:transition-all after:duration-500" + (tabIndex === 2 ? " text-[#04d2f7] after:w-full after:border-t-[#04d2f7]" : "")}>Fantasy Art</Tab>
                    </TabList>
                    <TabPanel>
                      <div className="  mt-20 flex flex-wrap justify-around md:gap-x-7 gap-y-40 md:gap-y-24 mb-12">
                   
                    <a href="https://haroon-s.github.io/quizzical-react-app/" target="_blank">
                    <div className="group h-[385px] md:w-[500px] md:h-[500px] bg-[url('/src/assets/Quiz1.png')] bg-no-repeat bg-cover bg-[position:center] transition-all duration-300 md:hover:scale-105 text-center shadow-2xl rounded-2xl">
                        <div className=" w-full h-full transition-all duration-300 md:hover:bg-gradient-to-b hover:from-[#04d3f7a9] hover:to-[#6b119c59] flex items-end justify-center rounded-2xl">
                        </div>
                        <h2 className=" text-3xl dark:text-[#ECEBF0] text-[#1F1F25] mt-7  p-3 rounded-full font-extrabold ">Amazing Tensize Game App</h2>
                    </div>
                    </a>
                    <a href="https://haroon-s.github.io/Tensize-Game/" target="_blank">
                    <div className="group h-[385px] md:w-[500px] md:h-[500px] bg-[url('/src/assets/Tensize.png')] bg-no-repeat bg-cover bg-[position:center] transition-all duration-300 md:hover:scale-105 text-center shadow-2xl rounded-2xl">
                        <div className=" w-full h-full transition-all duration-300 md::bg-gradient-to-b hover:from-[#04d3f7a9] hover:to-[#6b119c59] flex items-end justify-center rounded-2xl">
                        </div>
                        <h2 className=" text-3xl dark:text-[#ECEBF0] text-[#1F1F25] mt-7  p-3 rounded-full font-extrabold ">Amazing Tensize Game App</h2>
                    </div>
                    </a>
  
                </div></TabPanel>
                    <TabPanel>
                        <div className=" mt-20 shadow-2xl ">
                            <ImageGallery items={smImages} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" mt-20 shadow-2xl text-4xl">
                        <ImageGallery items={faImages} />
                        </div>
                    </TabPanel>
                 </Tabs>
                



            </div>
    </section>
    )
}