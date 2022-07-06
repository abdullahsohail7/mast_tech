import React from 'react'

const Footer = () => {
    
  return (
    <div name ="Footer" id="Footer" className='border-t border-white bg-gray-900'>
        <div className='my-1 max-w-screen-2xl mx-auto bg-gray-900'>
            <div className='grid grid-cols-1 lg:grid-cols-3 text-center gap-12 bg-gray-900'>
                <div>
                <h1 className='text-lg font-sans font-semi-bold text-blue-900'>
                    Office Address
                </h1>
                <ul className='mt-1 font-sans font-xs text-gray-600'>
                    <li>MAST Technologies</li>
                    <li>RIC Building, NUST</li>
                    <li>Islamabad, Pakistan</li>
                    <li>44000</li>
            
                </ul>
                
                
                
                </div>
                <div>
                <h1 className='text-lg font-sans font-semi-bold text-blue-900 mx-auto'>
                    UK Representative
                </h1>
                <ul className='mt-1 font-sans font-xs text-gray-600 mx-auto'>
                    
                    <li className='mx-auto text-align'>
                        <a href="mailto:uk@masttechnologies.com">uk@masttechnologies.com</a>
                    </li>
                    <a href="tel:+447541055014 " className='underline'>+447541055014</a>
                    {/* <li className='cursor-pointer underline'>+447541055014</li> */}
                  
            
                </ul>
                
                
                
                </div>
                <div>
                <h1 className='text-lg font-sans font-semi-bold text-blue-900 text-center'>
                    Company Contact
                </h1>
                <ul className='mt-1 font-sans font-xs text-gray-600 text-center'>
                    
                <li className='mx-auto text-align'>
                        <a href="mailto:hello@masttechnologies.com">hello@masttechnologies.com</a>
                    </li>
                   <li> <a href="tel:+923005603366 " className='underline'>+923005603366</a>
                   </li>
                    <a href="tel:+923075555756 " className='underline'>+923075555756</a>
                    
                  
            
                </ul>
                
                
                
                </div>
                
            </div>
            <p className='my-1 mt-6 text-center text-sm  text-blue-400 text-shine'>© Copyright 2022 MAST TECH LTD.</p>
        </div>
        
    </div>
  )
}

export default Footer