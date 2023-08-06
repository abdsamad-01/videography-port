/* eslint-disable react/prop-types */
import { useState } from 'react'
import logo from '../assets/videographer-logo.png'
import { navLinks } from '../constants'
import menu from '../assets/menu.png'
import close from '../assets/cross.png'

const MenuLinks = ({ selected, setSelected }) => {
    return (
        <ul className='flex flex-row space-x-14 md:hidden'>
            {navLinks.map(navLink => (
                <a key={navLink.id} href={`${navLink.href}`}>
                    <li
                        className={`${selected == navLink.title && 'text-btnColor2'} font-satoshi text-[0.95rem] cursor-pointer`}
                        onClick={() => setSelected(navLink.title)}
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
        <div className="glass w-full flex flex-row items-center justify-between py-1 px-14 md:px-4 sm:px-1">
            {/* <div className='w-[60px] h-[60px]'> */}
            <img
                src={logo}
                alt='Videographer logo'
                className='object-contain w-[55px] h-[55px]'
            />
            {/* </div> */}

            {/* <ul className='flex flex-row space-x-14 md:hidden'>
                {navLinks.map(navLink => (
                    <li
                        key={navLink.id}
                        className={`${selected == navLink.title && 'text-btnColor2'} font-satoshi text-[0.95rem] cursor-pointer`}
                        onClick={() => setSelected(navLink.title)}
                    >
                        {navLink.title}
                    </li>
                ))}
            </ul> */}
            <MenuLinks
                selected={selected}
                setSelected={setSelected}
            />

            <button type='button' className='bg-btnColor2 mt-5 text-gray-50 sm:hidden px-7 py-[9px] border-none shadow-sm rounded-[4px] font-satoshi text-[13px]'>
                Get Started
            </button>



            <div className='hidden md:flex ml-4'>
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
                    <div className='fixed inset-0 z-10 top-65 flex flex-col nav-h bg-black text-gray-50'>
                        {/* <div className='flex-1 p-4'>
                            <MenuItems active={active} setActive={setActive} isMobile />
                        </div>
                        <div className='p-4 border-t dark:border-nft-black-1 border-nft-gray-1'>
                            <ButtonGroup router={router} setActive={setActive} />
                        </div> */}
                        <MenuLinks selected={setSelected} setSelected={setSelected} isMobile />
                        <button type='button' className='bg-btnColor2 mt-5 text-gray-50 sm:hidden px-7 py-[9px] border-none shadow-sm rounded-[4px] font-satoshi text-[13px]'>
                            Get Started
                        </button>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Navbar
