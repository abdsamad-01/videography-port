import { useState } from 'react'
import logo from '../assets/videographer-logo.png'
import { navLinks } from '../constants'

const Footer = () => {
    const [selected, setSelected] = useState('')

    return (
        <div className=''>
            <div className="w-full flex flex-col items-center  py-1 px-14 ">
                <div className='w-[60px] h-[60px]'>
                    <img
                        src={logo}
                        alt='Videographer logo'
                        className='object-contain w-full h-full'
                    />
                </div>

                <ul className='flex flex-row sm:flex-col sm:text-lg space-x-14 sm:space-x-0 sm:text-center my-5 md:grid grid-cols-3 gap-3 w-full'>
                    {navLinks.map(navLink => (
                        <li
                            key={navLink.id}
                            className={`${selected == navLink.title && 'text-btnColor2'} font-satoshi text-[0.99rem] cursor-pointer`}
                            onClick={() => setSelected(navLink.title)}
                        >
                            {navLink.title}
                        </li>
                    ))}
                </ul>

                <div className='mt-2'>
                    <span className='text-base font-satoshi'> &copy; All Rights Reserved. </span>
                </div>
            </div>

        </div>
    )
}

export default Footer

