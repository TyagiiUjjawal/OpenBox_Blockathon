import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context/index';
import { CustomButton } from './';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';
import logoo from '../assets/logo.png'
const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <>
  
    <div className="flex md:flex-row border-[20px] border-stone-800 rounded-[25px] flex-col-reverse bg-stone-800 justify-between mb-[35px] gap-6">
      <div  className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px]  rounded-[100px] text-[50px] text-white font-bold font-serif underline">
      <p className='mt-20' >OpenBOx</p>  
      
        
        
      </div> 
      <Link  to="/">
        <img  src={logoo} alt="Ecommerce" />
      </Link>
      {/* <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex  items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>
        </div> */}

      <div className="sm:flex hidden h-20 mt-28 flex-row justify-end gap-4">
        <CustomButton 
          btnType="button"
          title={address ? 'Connected Successfully' : 'Connect'}
          styles={address ? 'bg-amber-700' : 'bg-green-400'}
          handleClick={() => {
            if(!address) connect()
            
          }}
        />

        {/* <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link> */}
      </div>

      {/* Small screen navigation */}
        <div className="sm:hidden flex justify-between items-center relative">
      

          <img 
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggleDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <img 
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                  />
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex mx-4">
            <CustomButton 
              btnType="button"
              title={address ? 'Enroll A Foundation' : 'Connect'}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
              handleClick={() => {
                if(address) navigate('create-campaign')
                else connect();
              }}
            />
            </div>
          </div>
        </div>
    </div>
        
    </>
  )
}

export default Navbar