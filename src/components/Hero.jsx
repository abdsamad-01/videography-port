/* eslint-disable react/no-unescaped-entities */
import heroImage from '../assets/hero-img.png'
import svg from '../assets/ricky.svg'

const Hero = () => {
    return (
        <div className="flex flex-row md:flex-col w-full md:px-5 pt-10 sm:px-3 md:pt-24 items-center justify-between pl-20 llg:pl-9 md:pl-0 overflow-hidden">
            <div className="w-[89%] md:w-full">
                <div className='md:px-4 sm:px-1'>
                    <img
                        src={svg}
                        alt=''
                        className='object-contain w-[26px] h-[26px] mb-5 ml-1'
                    />
                    <h1 className="font-satoshi font-bold text-[4.25rem] leading-[1] llg:text-6xl sm:text-5xl"> Let's Document Your Incredible <span className='text-secondary'> Moments </span></h1>
                    <p className="text-[1.1rem] font-satoshi w-[95%] my-5"> Our team has a specialization in capturing incredible and exceptional moments, which gives us the opportunity to create high-quality and stimulating videos.</p>

                    <button type='button' className='bg-btnColor2 mt-5 text-gray-50 px-9 py-[10px] border-none shadow-sm rounded-[4px] font-satoshi text-sm'>
                        Get Started
                    </button>
                </div>
            </div>

            <div className='mt-14 md:mt-5 md:mx-auto sm:mx-0'>
                <img
                    src={heroImage}
                    alt='A smoky Videography equipment'
                    className=' w-full md:w-[60%] sm:w-full mx-auto sm:mx-0'
                />
            </div>
        </div>
    )
}

export default Hero

