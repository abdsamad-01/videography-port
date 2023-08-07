import { reasons } from "../constants"

const ReachOut = () => {
    return (
        <div className="flex flex-col font-satoshi">
            <div className="w-[90%] sm:w-full mx-auto text-center">
                <h3 className="font-bold text-4xl sm:text-3xl">We are Aware of the Significance of Using the Appropriate Equipment for Appropriate Job.</h3>
                <p className="text-center my-8 font-medium">By providing the tools and equipment you require, we can help you produce projects of high quality while saving time and money. reach out to us now to hire the 360 video booth at an affordable price</p>

                <div className="flex flex-row items-center justify-center space-x-5">
                    <a className="flex flex-row items-center space-x-5 border border-gray-400 rounded px-9 py-2">
                        <span className="text-[0.9rem]"> Whatsapp/Call </span>
                    </a>
                    <a className="flex flex-row items-center space-x-5 border border-gray-400 rounded px-9 py-2">
                        <span className="text-[0.9rem]"> Instagram </span>
                    </a>
                </div>
            </div>

            <div className="pt-20 pb-10">
                <h2 className='text-4xl sm:text-[28px] font-bold text-center mb-4 w-full'> Why People Choose Us </h2>
                <div className="mt-10 flex flex-row md:flex-col gap-8 sm:gap-12">
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

