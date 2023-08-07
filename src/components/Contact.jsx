import bgImage from '../assets/bgg.png'

const Contact = () => {
    return (
        <div className="cont relative w-full flex justify-center items-center" id='contact'>
            <div className='absolute top-0 min-w-full h-full'>
                <img
                    src={bgImage}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='absolute bg-black h-full w-full z-10 opacity-70' />

            <div className='bg-black mx-auto my-auto llg:w-full llg:mx-32 llg:px-10 md:px-4 md:mx-9 sm:mx-0 w-[35%] md:w-full rounded-md z-20 text-center p-5 px-7 text-gray-50 font-satoshi'>
                <h3 className="font-medium text-2xl">Didn’t Get The Package You Desire? <br /> Create a Special Package For You</h3>
                <p className="my-3">Kindly reach out to me, and describe your own special package as comprehensively as possible or choose for the list above</p>

                <div className='my-6'>
                    <h6 className='text-xl font-medium'> CONTACT ME </h6>
                    <form className='mt-4 flex flex-col text-gray-300 px-5 sm:px-1'>
                        <input
                            type='text'
                            placeholder='Name'
                            className='inputField bg-transparent placeholder:text-gray-300'
                        />
                        <input
                            type='email'
                            placeholder='Email Address'
                            className='inputField bg-transparent placeholder:text-gray-300'
                        />
                        <input
                            type='number'
                            placeholder='Phone Number'
                            className='inputField bg-transparent placeholder:text-gray-300'
                        />
                        <input
                            type='text'
                            placeholder='Choose your Package'
                            className='inputField bg-transparent placeholder:text-gray-300'
                        />
                        <input
                            type='text'
                            placeholder='Describe your Package'
                            className='inputField bg-transparent placeholder:text-gray-300'
                        />

                        <button type='button' className='bg-btnColor2 mt-8 text-gray-50 px-7 py-[9px] border-none shadow-sm rounded-[4px] font-satoshi text-[13px]'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

