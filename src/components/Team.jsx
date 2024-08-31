import React from 'react'
import PageSection from './PageSection'
import LI2 from '../assets/LI2.jpg'
import S1 from '../assets/S1.png'
import LI5 from '../assets/LI5.png'
//import S3 from '../assets/Shafqat.jpeg'

const Team = () => {
   const teams = [
       {
    id:1,
    src: LI5,
    title :'Daniyal Azhar',
    subtitle : 'Senior Android Developer',
    children : 'Columbia University, Fullerton',
    style: "shadow-blue-800 ",
},
{
  id:2,
  src: LI2,
  title :'Irine Schwartz',
  subtitle : 'IOS Developer',
  children : 'Berkshire University Of Engineering',
  style: "shadow-red-800"},
{
    id:3,
    src: S1,
    title :'Syed Abdullah Abbas Sohail',
    subtitle : 'Senior Product Manager',
    children : 'UET, Lahore',
    style: "shadow-yellow-800"
},
]

  return (
   <PageSection name='team' title={<h2 className='text-3xl border-b-4 border-gray-500 inline-block pb-2'>Team</h2>} subtitle="The XYZ Tech. team is a tight-knit, talented group with a shared vision of delivering consistently great results for our clients, as well as ensuring the agency is a fun, inclusive, challenging place to work and develop a rewarding career.">
   
   <div className='grid grid-cols-2 lg:grid-col-3 h-30 gap-8 text-white text-center items-center justify-center'>
   
   {teams.map(({ id, src, title, subtitle ,children,  style}) => (
   
            <div
              key={id}
              className={`shadow-md h-full hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col justify-between`} // <== HIGHLIGHTED
            >
              {/* <== HIGHLIGHTED */}
              
              <div className="flex-grow flex flex-col items-center justify-center">
                <img src={src} alt="" className="w-20 h-25 mx-auto" /></div>
                
                <p className="mt-6 text-sm">{title}</p>
               
                <p className='text-sm text-blue-800'>{subtitle}</p>
              
              
              <p className='text-sm text-thBlue pb-2'>{children}</p>  {/* <== HIGHLIGHTED */}
            </div>
          ))}

</div>
   </PageSection>
  )
}

export default Team
