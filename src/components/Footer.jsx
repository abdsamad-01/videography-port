import { useState } from 'react'
import logo from '../assets/logo-wt.png'
import { navLinks } from '../constants'

const Footer = () => {
    const [selected, setSelected] = useState('')

    return (
        <div className='w-full flex mx-auto flex-col justify-center items-center'>
            <div className="py-1 px-14 md:px-2">
                <div className='w-[75px] h-[75px]'>
                    <img
                        src={logo}
                        alt='Videographer logo'
                        className='object-contain w-full h-full'
                    />
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <ul className='flex items-center gap-16 md:gap-y-1 justify-between md:grid grid-cols-6 md:grid-cols-3 xs:grid-cols-2 sm:text-lg my-5 w-full'>
                    {navLinks.map(navLink => (
                        <li
                            key={navLink.id}
                            className={`${selected == navLink.title && 'text-btnColor2'} font-satoshi text-[0.99rem] cursor-pointer `}
                            onClick={() => setSelected(navLink.title)}
                        >
                            {navLink.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='mt-2'>
                <span className='text-base font-satoshi'> &copy; All Rights Reserved. </span>
            </div>
        </div>
    )
}

export default Footer

