/* eslint-disable react/no-unescaped-entities */
import 'animate.css';
import {BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs'


const Enquiry = () => {
    return (
        <div className="font-satoshi flex flex-col items-center justify-center">
            <h3 className="font-bold text-4xl sm:text-2xl w-[80%] text-center sm:w-full animate__animated animate__fadeInUp">For More Enquiries, You Can Notify Us On Our Social Media Handles and We'd Respond to you Immediately</h3>

            <div className="flex flex-row sm:flex-col-reverse items-center justify-center space-x-5 sm:space-x-0 gap-3 mt-10">
                <a href="https://twitter.com/base_arena" target="blank" className="flex flex-row items-center justify-center space-x-2 border border-gray-200 text-gray-950 font-medium rounded px-9 py-2 cursor-pointer shadow-sm hover:shadow-md">
                    <BsTwitter className='text-gray-500' />
                    <span className="text-[0.9rem]"> Twitter </span>
                </a>
                <a href="https://www.instagram.com/mabweddings_/" target="blank"  className="flex flex-row items-center justify-center space-x-2 border border-gray-200 text-gray-950 font-medium rounded px-9 py-2 cursor-pointer shadow-sm hover:shadow-md">
                    <BsInstagram className='text-gray-500' />
                    <span className="text-[0.9rem]"> Instagram </span>
                </a>
                <a href="https://www.youtube.com/@musicarenabase37" target="blank" className="flex flex-row items-center justify-center space-x-2 border border-gray-200 text-gray-950 font-medium rounded px-9 py-2 cursor-pointer shadow-sm hover:shadow-md">
                    <BsYoutube className='text-gray-500' />
                    <span className="text-[0.9rem]"> Youtube </span>
                </a>
            </div>
        </div>
    )
}

export default Enquiry

