import React from 'react'
import PageSection from './PageSection';
// import {FaMicrochip} from 'react-icons/fa';
// import GradientBtn from './GradientBtn';
import codeImage from '../assets/code.jpg'

const About = () => {
  return (
    
   <PageSection name='about' id='about' title={<h2 className='text-4xl border-b-4 border-gray-500 inline-block pb-2'>About</h2>} subtitle={`XYZ Technologies is the most renowned remote solution provider in Pakistan. It has its offices located in London, Islamabad and New York`} >
<div className='flex flex-col lg:flex-row items-center justify-center gap-8 font-sans text-white'>
  <div className='flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg text-white'>
    <p className='border-l-4 pl-4 odd:border-thOrange even:border-red-800 text-white'>
    XYZ Technologies hires the finest talent in the world and provides them the opportunity to connect with the most esteemed and prestigious organisations
    </p>
    <p className='border-l-4 pl-4 odd:border-thOrange even:border-red-800'>
    Meanwhile catering to each and every demand of those organisations.    </p>
    <p className='border-l-4 pl-4 border-green-800'>
    XYZ believes in providing quality work at the most reasonable prices.    </p>
    <p className='border-l-4 pl-4 odd:border-thOrange even:border-red-800'>
    We have an extremely talented team , and we use that talent to the best of their ability.     </p>
    <p className='border-l-4 pl-4 odd:border-thOrange even:border-red-800'>
    As more companies turn to this method to get things done, we are right there alongside them, ushering in a new era of flexible, smarter work.</p>

    


  </div>
  <div className='w-full lg:w-1/2 duration-300 hover:rotate-6'>
    <img src={codeImage} alt="code" className='rounded-lg shadow-lg shadow-thPurple' />
  </div>
</div>

    </PageSection>
  )
  
}


export default About