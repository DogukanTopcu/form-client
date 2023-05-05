import React from 'react';
import YazilimLogo from "../img/circle.png";
import IyteLogo from "../img/iyte_logo-tur-232x232.png";

import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsDiscord, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='mt-16 mb-2 px-4'>
        <div className='grid grid-cols-3 items-center'>
            <div className='col-span-2 text-start flex justify-around items-center'>
                <a href='https://discord.gg/a7zkda4n' target='_blank'><BsDiscord className='cursor-pointer' size={20} color='#f0d1b8' href='' /></a>
                <a href='https://www.instagram.com/iyte_yazilim/' target='_blank'><AiFillInstagram className='cursor-pointer' size={20} color='#f0d1b8' /></a>
                <a href='https://www.linkedin.com/company/iyteyazilim/' target='_blank'><BsLinkedin className='cursor-pointer' size={20} color='#f0d1b8' href='' /></a>
                <a href='https://www.youtube.com/@iyteyazilimtoplulugu' target='_blank'><BsYoutube className='cursor-pointer' size={20} color='#f0d1b8' href='' /></a>
            </div>
            <div className='col-span-1 flex flex-row justify-end items-center'>
                <img className='w-12' src={IyteLogo} alt="iyte" />
                <img className='w-12' src={YazilimLogo} alt="iyte yazilim" />
            </div>
        </div>
        <div className='container text-xs md:text-sm text-[#f0d1b8] mt-2 text-center'>
            2023 © İYTE Yazılım Topluluğu tarafından geliştirilmiştir.
        </div>
    </div>
  )
}

export default Footer