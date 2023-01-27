import React from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';
import Marquee from "react-fast-marquee";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }
  
  return (
    <div>
      <Marquee direction="left" speed={100} className="font-epilogue font-semibold text-[38px] text-white text-center bg-stone-800 rounded-[20px]">Active Foundations ({campaigns.length})</Marquee>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.slice(0).reverse().map((campaign) =>
        
          campaign.amountCollected>=campaign.target?"": <FundCard 
          key={campaign.id}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />
        
        )}
      </div>
      <br /><br /><br />
      <Marquee direction="left" speed={100} className="font-epilogue font-semibold text-[38px] text-white text-center bg-stone-800 rounded-[20px]">Completed Campaigns </Marquee>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.slice(0).reverse().map((campaign) =>
        
          campaign.amountCollected<campaign.target?"": <FundCard 
          key={campaign.id}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />
        
        )}
      </div>
    </div>
  )
}

export default DisplayCampaigns