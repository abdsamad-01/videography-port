/* eslint-disable react/no-unescaped-entities */

const Enquiry = () => {
    return (
        <div className="font-satoshi flex flex-col items-center justify-center">
            <h3 className="font-bold text-4xl sm:text-2xl w-[80%] text-center sm:w-full">For More Enquiries, You Can Notify Us On Our Social Media Handles and We'd Respond to you Immediately</h3>

            <div className="flex flex-row sm:flex-col items-center justify-center space-x-5 sm:space-x-0 gap-3 mt-10">
                <a className="flex flex-row items-center space-x-5 border border-gray-400 bg-btnColor2 text-gray-50 rounded px-9 py-2">
                    <span className="text-[0.9rem]"> Whatsapp/Call </span>
                </a>
                <a className="flex flex-row items-center space-x-5 border border-gray-400 bg-btnColor2 text-gray-50 rounded px-9 py-2">
                    <span className="text-[0.9rem]"> Instagram </span>
                </a>
                <a className="flex flex-row items-center space-x-5 border border-gray-400 bg-btnColor2 text-gray-50 rounded px-9 py-2">
                    <span className="text-[0.9rem]"> Youtube </span>
                </a>
            </div>
        </div>
    )
}

export default Enquiry

