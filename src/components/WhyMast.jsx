import React from 'react'
import PageSection from './PageSection'
import prize from '../assets/prize.png'
import shield from '../assets/shield.png'
import sidebar from '../assets/sidebar.png'
import usd from '../assets/usd.png'
import usery from '../assets/usery.png'
import buidling from '../assets/buidling.png'

const WhyXYZ = () => {
    const WhyM = [
        {
            id: 1,
            src: prize,
            title: "World-class experience",
            subtitle: 'We are obsessed with creating a delightful user experience for you and your team every step of the way—and it shows.',
            style: "shadow-red-900",
          },
          {
            id: 2,
            src: usd,
            title: "Fair Price Guarantee",
            subtitle:"No hidden fees, deposit requirements, surprise costs, minimums, contract lengths, or exclusivity agreements. Ever.",
            style: "shadow-yellow-900",
          },
          {
            id: 3,
            src: usery,
            title: "People with Passion",
            subtitle:"Our compliance experts are on the ground in every continent, proactively monitoring and improving processes for you.",
            style: "shadow-green-900",
          },
          {
            id: 4,
            src: shield,
            title: "Protecting IP at all costs",
            subtitle:"Trust our stronger-than-they-need-to-be intellectual property and invention rights protections.",
            style: "shadow-blue-900",
          },
          {
            id: 5,
            src: sidebar,
            title: "Availability around the clock ",
            subtitle:"End users expect always on and incredible speed. We match with continuous ways to track consumer feedback, fix bugs, and release the latest and greatest product.",
            style: "shadow-orange-900",
          },
          {
            id: 6,
            src: buidling,
            title: "Prepared for Future",
            subtitle:"Automattic, Buffer, GitLab, Invision, and Zapier all have from 100 to nearly 1,000 remote employees.",
            style: "shadow-purple-900",
          },
        
        ];
    
  return (
   <PageSection name='Why XYZ' title={<h2 className='text-4xl border-b-4 border-gray-500 inline-block pb-2'>Why XYZ</h2>} subtitle='Why you should choose XYZ Technologies'>
         
        <div className="bg-gray-900 w-[calc(100%+4rem)] h-screen -mx-8 px-8 sm:px-12 py-20 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center text-white rounded-lg">
          {WhyM.map(({ id, src, title,subtitle, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 px-4 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-lg">{title}</p>
              <p className='text-md mt-2'>{subtitle}</p>
            </div>
          ))}
        </div>
        
   </PageSection>
  )
}

export default WhyXYZ
