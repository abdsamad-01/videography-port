import Images from '../assets/index'

const Services = () => {
    return (
        <div id='service' className='border-b border-gray-300 py-10'>
            <h2 className='font-satoshi text-3xl font-bold text-center'> SERVICES </h2>
            <div className='my-10 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 px-20 llg:gap-7 llg:px-6 sm:px-2 font-satoshi'>
                <div className='shadow-sm rounded-md bg-#dee0e3'>
                    <img
                        src={Images.service1}
                        className='w-full object-contain rounded-t-md'
                    />
                    <div className='p-3 pb-2'>
                        <p className='font-semibold text-lg mb-2'> Wedding Videography </p>
                        <span className='font-medium text-[15px]'> I capture weddings and assist enthusiastic couples in keeping memories of their special day. </span>
                    </div>

                </div>

                <div className='shadow-sm rounded-md bg-#dee0e3'>
                    <img
                        src={Images.service2}
                        className='w-full object-contain rounded-t-md'
                    />
                    <div className='p-3 pt-4 pb-4'>
                        <p className='font-semibold text-lg mb-2'> Drone Footage </p>
                        <span className='font-medium text-[15px]'> I capture videos from any angle or distance making use of drone. </span>
                    </div>
                </div>

                <div className='shadow-sm rounded-md bg-#dee0e3'>
                    <img
                        src={Images.service3}
                        className='w-full object-contain rounded-t-md'
                    />
                    <div className='p-3 pb-2'>
                        <p className='font-semibold text-lg mb-2'> Music Videos </p>
                        <span className='font-medium text-[15px]'> Our team has a specialization in capturing incredible and exceptional high-quality and stimulating videos. </span>
                    </div>
                </div>

                <div className='shadow-sm rounded-md bg-#dee0e3'>
                    <img
                        src={Images.service4}
                        className='w-full object-contain rounded-t-md'
                    />
                    <div className='p-3 pb-2'>
                        <p className='font-semibold text-lg mb-2'> Comedy Production </p>
                        <span className='font-medium text-[15px]'> Our team has a specialization in capturing incredible and exceptional moments. </span>
                    </div>
                </div>

                <div className='shadow-sm rounded-md bg-#dee0e3'>
                    <img
                        src={Images.service5}
                        className='w-full object-contain rounded-t-md'
                    />
                    <div className='p-3 pb-2'>
                        <p className='font-semibold text-lg mb-2'> Lifestyle Videography </p>
                        <span className='font-medium text-[15px]'> I create videos that are indispensable to fashion presentations and any fashion-related brand.. </span>
                    </div>
                </div>

                <div className='shadow-sm rounded-md bg-#dee0e3'>
                    <img
                        src={Images.service6}
                        className='w-full object-contain rounded-t-md'
                    />
                    <div className='p-3 pb-2'>
                        <p className='font-semibold text-lg mb-2'> Event Videography </p>
                        <span className='font-medium text-[15px]'> I create the most spectacular experience for every occasion or event. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

