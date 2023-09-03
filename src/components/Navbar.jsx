/* eslint-disable react/prop-types */
import { useState } from 'react'
import logo from '../assets/logo-wt.png'
import { navLinks } from '../constants'
import menu from '../assets/menu.png'
import close from '../assets/cross.png'


const MenuLinks = ({ isMobile, selected, setSelected, setIsOpen }) => {
    return (
        <ul className={`flex flex-row md:flex-col space-x-14 ${isMobile && 'flex-col gap-4 text-[1.15rem] h-full'} md:space-x-0 md:items-center md:justify-center md:min-h-screen `}>
            {navLinks.map(navLink => (
                <a key={navLink.id} href={`${navLink.href}`}>
                    <li
                        className={`${selected == navLink.title && 'text-btnColor2'} font-satoshi text-base cursor-pointer`}
                        onClick={() => {
                            setSelected(navLink.title)
                            setIsOpen(false)
                        }}
                    >
                        {navLink.title}
                    </li>
                </a>

            ))}
        </ul>
    )
}

const Navbar = () => {
    const [selected, setSelected] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-black w-full fixed top-0 z-[900] flex flex-row items-center justify-between  px-14 md:px-4 sm:px-1">
            {/* <div className='w-[60px] h-[60px]'> */}
            <img
                src={logo}
                alt='Videographer logo'
                className='object-contain w-[70px] h-[70px] sm:ml-[5px]'
            />

            <div className='md:hidden'>
                <MenuLinks
                    selected={selected}
                    setSelected={setSelected}
                />

                {/* <button type='button' className='bg-btnColor2 mt-5 text-gray-50 md:hidden px-7 py-[9px] border-none shadow-sm rounded-[4px] font-satoshi text-[13px]'>
                    Get Started
                </button> */}
            </div>


            <div className='hidden md:flex z-[90] mr-3'>
                {isOpen ? (
                    <img
                        height={20}
                        width={20}
                        className='object-contain'
                        src={close}
                        onClick={() => setIsOpen(false)}
                        alt='close'
                    />
                ) :
                    (
                        <img
                            height={25}
                            width={25}
                            className='object-contain'
                            src={menu}
                            alt='menu'
                            onClick={() => setIsOpen(true)}
                        />
                    )
                }
                {isOpen && (
                    <div className='fixed top-[62px] inset-0 z-[900] flex flex-col nav-h bg-black text-gray-50'>
                        <MenuLinks selected={setSelected} setSelected={setSelected} isMobile   setIsOpen={setIsOpen} />
                    </div>
                )}
            </div>
        </div>

    )
}

export default Navbar
