import { portfolios } from '../constants'
import 'animate.css';

const Portfolio = () => {
    return (
        <div className="relative py-10 px-14 md:px-5 sm:px-3" id='portfolio' >
            <h2 className='font-satoshi text-3xl font-bold text-center'> OUR PORTFOLIO </h2>
            <div className="flex flex-col justify-between items-center mt-5 gap-8">
                <div className="w-[75%] md:w-full font-satoshi text-center sm:text-left">
                    <p className="para"><b>Music arena base</b> specializes in capturing incredible and exceptional high-quality and stimulating videos. from capturing the beautiful moment of excited couples to lifestyle videography, event videography and many more.</p> <br />

                    <p className="para"> So far, we have ensured that projects that are awarded to us are completed and delivered to our clients at the agreed date.  </p> <br />

                    <p className="para">0ur portfolio contains captivating and mind blowing contents you’d like to see on your devices. kindly go through our portfolio to check out our outstanding projects. </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-3 gap-8 sm:gap-x-0 overflow-hidden">
                    {portfolios.map(portfolio => (
                        <div className="relative rounded-md h-[275px] w-[390px] md:h-[275] md:w-[340] cursor-pointer" key={portfolio.id}>
                            <img
                                src={portfolio.image}
                                className="absolute h-full w-full top-0 rounded-md object-contain"
                            />
                            <p className='absolute bottom-3 mx-auto left-20 text-center font-satoshi font-medium text-base z-10'> {portfolio.title} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio

