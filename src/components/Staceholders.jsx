import React from 'react';
import YazilimLogo from "../img/circle.png";
import IyteLogo from "../img/iyte_logo-tur-232x232.png";

const Staceholders = () => {
  return (
    <div className='flex flex-row justify-center mt-12 mb-12'>
        <img className='w-24' src={IyteLogo} alt="iyte" />
        <img className='w-24' src={YazilimLogo} alt="iyte" />
    </div>
  )
}

export default Staceholders