/* eslint-disable react/no-unescaped-entities */
import heroImage from '../assets/hero-img.png'
import svg from '../assets/ricky.svg'
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Hero = () => {
    return (
        <div id="hero" className="flex flex-row md:flex-col w-full md:px-5 pt-10 sm:px-3 md:pt-24 items-center justify-between pl-20 llg:pl-5 llg:pt-24 md:pl-0 overflow-hidden">
            <div className="w-[89%] md:w-full">
                <div className='md:px-4 sm:px-1'>
                    <img
                        src={svg}
                        alt=''
                        className='object-contain w-[26px] h-[26px] mb-5 ml-1'
                    />

                    <h1 className="font-satoshi font-extrabold text-[4.27rem] leading-[1.01] llg:text-[58px] sm:text-5xl"> Let's Document Your Incredible <span className='text-btnColor2 font-extrabold'> Moments </span></h1>

                    <AnimationOnScroll animateIn="animate__fadeInUp" initiallyVisible={true}>
                        <p className="text-[1.1rem] font-satoshi w-[95%] my-5 -z-10 animate__animated animate__fadeInUp"> Our team has a specialization in capturing incredible and exceptional moments, which gives us the opportunity to create high-quality and stimulating videos.</p>
                    </AnimationOnScroll>

                    <button type='button' className='bg-btnColor2 mt-5 text-gray-50 px-10 py-[10px] border-none shadow-sm rounded-[4px] font-satoshi text-base'>
                        Get Started
                    </button>
                </div>
            </div>

            <div className='mt-14 md:mt-5 md:mx-auto sm:mx-0'>
                <img
                    src={heroImage}
                    alt='A smoky Videography equipment'
                    className=' w-full llg:w-[80%] md:w-[60%] sm:w-full mx-auto sm:mx-0'
                />
            </div>
        </div>
    )
}

export default Hero

