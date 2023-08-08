import { reasons } from "../constants"
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { BsWhatsapp, BsInstagram }  from 'react-icons/bs'

const ReachOut = () => {
    return (
        <div className="flex flex-col font-satoshi">
            <div className="w-[90%] sm:w-full mx-auto text-center">
                <h3 className="font-bold text-4xl sm:text-3xl">We are Aware of the Significance of Using the Appropriate Equipment for Appropriate Job.</h3>
                <AnimationOnScroll animateIn="animate__fadeInUp" initiallyVisible={true}>
                    <p className="text-center my-8 font-medium animate__animated animate__fadeInUp">By providing the tools and equipment you require, we can help you produce projects of high quality while saving time and money. reach out to us now to hire the 360 video booth at an affordable price</p>
                </AnimationOnScroll>

                <div className="flex flex-row items-center justify-center space-x-3">
                    <a className="flex flex-row items-center justify-between space-x-2 border border-gray-400 rounded px-8 py-3">
                        <BsWhatsapp className='text-gray-500' />
                        <span className="text-[0.945rem]"> Whatsapp/Call </span>
                    </a>
                    <a className="flex flex-row items-center justify-between space-x-2 border border-gray-400 rounded px-8 py-3">
                        <BsInstagram className='text-gray-500' />
                        <span className="text-[0.945rem]"> Instagram </span>
                    </a>
                </div>
            </div>

            <div className="pt-20 pb-10">
                <h2 className='text-4xl sm:text-[28px] font-bold text-center mb-4 w-full'> Why People Choose Us </h2>
                <div className="mt-10 flex flex-row md:flex-col md:mx-4 sm:mx-1 gap-8 sm:gap-12">
                    {reasons.map(reason => (
                        <div key={reason.id} className="font-satoshi flex flex-col items-center justify-center">
                            <img
                                src={reason.image}
                                className="object-contain"
                            />

                            <h4 className="font-semibold text-lg mt-3"> {reason.title} </h4>
                            <p className="text-center font-medium"> {reason.description} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ReachOut

