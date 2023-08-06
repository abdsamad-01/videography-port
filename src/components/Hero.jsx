/* eslint-disable react/no-unescaped-entities */
import heroImage from '../assets/hero.png'
import svg from '../assets/ricky.svg'

const Hero = () => {
    return (
        <div className="flex flex-row md:flex-col w-full md:px-5 sm:px-3 md:mt-10 items-center justify-between pl-20 md:pl-0 overflow-hidden">
            <div className="w-[87%] md:w-full">
                <div>
                    <img
                        src={svg}
                        alt=''
                        className='object-contain w-[26px] h-[26px] mb-5 ml-1'
                    />
                    <h1 className="font-satoshi font-bold text-7xl md:text-6xl sm:text-5xl"> Let's Document Your Incredible <span className='text-secondary'> Moments </span></h1>
                    <p className="text-[1.1rem] font-satoshi w-[95%] my-5"> Our team has a specialization in capturing incredible and exceptional moments, which gives us the opportunity to create high-quality and stimulating videos.</p>

                    <button type='button' className='bg-btnColor2 mt-5 text-gray-50 px-7 py-[9px] border-none shadow-sm rounded-[4px] font-satoshi text-[13px]'>
                        Get Started
                    </button>
                </div>
            </div>

            <div className='mt-4 -mr-2'>
                <img
                    src={heroImage}
                    alt='A smoky Videography equipment'
                    className='h-[75%] w-full'
                />
            </div>
        </div>
    )
}

export default Hero

