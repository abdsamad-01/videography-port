import { reasons } from "../constants"
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import image from '../assets/360deg.png'

const ReachOut = () => {
    return (
        <div className="flex flex-col font-satoshi">
            <div className="flex flex-row md:flex-col-reverse items-center justify-between">
                <div className="">
                    <img
                        src={image}
                        alt='About Me'
                        className='object-contain '
                    />
                </div>

                <div className="w-[70%] md:w-full">
                    <h3 className="font-bold text-4xl sm:text-3xl">We are Aware of the Significance of Using the Appropriate Equipment for Appropriate Job.</h3>
                    <p className=" my-8 font-medium">By providing the tools and equipment you require, we can help you produce projects of high quality while saving time and money. reach out to us now to hire the 360 video booth at an affordable price</p>

                    <div className="flex flex-row sm:flex-col-reverse sm:space-x-0 items-center justify-start space-x-3">
                        <a href="https://twitter.com/base_arena" target="blank" className="flex flex-row shadow-sm hover:shadow-md ease-in-out items-center sm:mt-3 justify-between space-x-2 border border-gray-200 rounded px-[30px] py-[10px] cursor-pointer">
                            <BsTwitter className='text-gray-500' />
                            <span className="text-[0.945rem]"> Twitter </span>
                        </a>
                        <a href="https://www.instagram.com/mabweddings_/" target="blank" className="flex flex-row shadow-sm hover:shadow-md items-center justify-between space-x-2 border border-gray-200 rounded px-[30px] py-[10px] cursor-pointer">
                            <BsInstagram className='text-gray-500' />
                            <span className="text-[0.945rem]"> Instagram </span>
                        </a>
                    </div>
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

