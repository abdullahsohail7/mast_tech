import React from 'react'
import GradientBtn from './GradientBtn'
import { FaBars, FaTimes } from "react-icons/fa"
// import TG from "../assets/TG.png"
import AXYZ from "../assets/AXYZ.png"
import { Link } from 'react-scroll'

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'team'
        },
        {
            id: 4,
            link: 'Why XYZ'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]
    return (
        <>
            <div className='absolute w-full h-25 bg-black text-white z-20'>
                <div className='flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full'>
                    <div className="flex items-center">
                        <img src={AXYZ} alt="logo" className='h-20' /> {/* Adjusted the class for logo alignment */}
                    </div>
                    <div className='hidden lg:flex items-center'>
                        <ul className='flex'>
                            {links.map(({ id, link }) => (
                                <li key={id} className="p-3 uppercase duration-200 hover:text-thBlue cursor-pointer">
                                    <Link to={link}
                                        spy={true}
                                        smooth
                                        duration={500}>

                                        {link}

                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link to='Footer' spy='true' smooth='true' duration-500>
                            <GradientBtn className='ml-4 capitalize' title='Get XYZ' />
                        </Link>
                    </div>
                    <div onClick={() => setIsMenuShown(!isMenuShown)} className='block lg:hidden cursor-pointer'>
                        {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}

                    </div>
                </div>
            </div>

            <div className={`w-full bg-black text-white absolute z-10 left-0 h-30 py-6 lg:hidden flex justify-center text-center text-2xl duration-500 cursor-pointer ${isMenuShown ? "top-9 rounded-b-2xl opacity-95" : "top-[-100%] duration-300"}`}>
                <ul>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className="p-4 uppercase"> <Link
                                onClick={() => setIsMenuShown(false)}
                                to={link}
                                spy={true}
                                smooth
                                duration={500}>

                                {link}

                            </Link></li>
                        ))
                    }
                    <Link onClick={() => setIsMenuShown(false)} to='Footer' spy={true} smooth={true} duration-500>
                        <GradientBtn className="mt-10 capitalize" title={"Get XYZ"} />
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar
