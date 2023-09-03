// import { portfolios } from '../constants'
// import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import 'animate.css';
import '/node_modules/video-react/dist/video-react.css'

const Portfolio = () => {
    return (
        <div id='projects' className="relative py-10 px-14 md:px-5 sm:px-3">
            <h2 className='font-satoshi text-3xl font-bold text-center'> OUR PORTFOLIO </h2>
            <div className="flex flex-col justify-between items-center mt-5 gap-8">
                <div className="w-[75%] md:w-full font-satoshi text-center sm:text-left">
                    <p className="para"><b>Music arena base</b> specializes in capturing incredible and exceptional high-quality and stimulating videos. from capturing the beautiful moment of excited couples to lifestyle videography, event videography and many more.</p> <br />

                    <p className="para"> So far, we have ensured that projects that are awarded to us are completed and delivered to our clients at the agreed date.  </p> <br />

                    <p className="para">0ur portfolio contains captivating and mind blowing contents you’d like to see on your devices. kindly go through our portfolio to check out our outstanding projects. </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-3 gap-7 sm:gap-x-0 overflow-hidden">

                    {/* {portfolios.map(portfolio => (
                        <div className="relative rounded-md h-[275px] w-[390px] md:h-[275] md:w-[340] cursor-pointer" key={portfolio.id}>
                            <img
                                src={portfolio.image}
                                className="absolute h-full w-full top-0 rounded-md object-contain"
                            />
                            <p className='absolute bottom-3 mx-auto left-20 text-center font-satoshi font-medium text-base z-10'> {portfolio.title} </p>
                        </div>
                    ))} */}
                    <div className="rounded-md h-[275px] w-[390px] md:h-[275] md:w-[340] cursor-pointer border border-gray-900 shadow-md">
                        <Player
                            poster='https://i.postimg.cc/BbB4PyTX/p-1.jpg'
                            src='https://drive.google.com/uc?id=11lVQzhI7ROqFARE7qYuJTgkYe92jOaGM'
                            className='h-[275px]'
                            height='275px'
                        />

                        <p className='text-gray-100 font-satoshi mt-6 px-2'> Weddings and Photgraphy </p>
                    </div>

                    <div className="rounded-md h-[275px] w-[390px] md:h-[275] md:w-[340] cursor-pointer border border-gray-900 shadow-md">
                        <Player
                            poster="https://i.postimg.cc/05Y846TP/p-2.jpg"
                            src="https://drive.google.com/uc?id=1bM_-dn2oJFuIWQhqP7j_ICrCkxILsFZx"
                        />

                        <p className='text-gray-100 font-satoshi mt-6 px-2'> Weddings and Photgraphy </p>
                    </div>

                    <div className="rounded-md h-[275px] w-[390px] md:h-[275] md:w-[340] cursor-pointer border border-gray-900 shadow-md">
                        <Player
                            poster='https://i.postimg.cc/dtnJqbQf/p-3.jpg'
                            src='https://drive.google.com/uc?id=13_HBEEp5f90OraUCEdV3A3QORbnEq2eE'
                        />

                        <p className='text-gray-100 font-satoshi mt-6 px-2'> Weddings and Photgraphy </p>
                    </div>

                    <div className="rounded-md h-[275px] w-[390px] md:h-[275] md:w-[340] cursor-pointer border border-gray-900 shadow-md">
                        <Player
                            poster='https://i.postimg.cc/htjch2ft/p-4.jpg'
                            src='https://drive.google.com/uc?id=1sKc-Ti9DkuD1Id1rmBfWf-iBDWNDK_OG'
                        />

                        <p className='text-gray-100 font-satoshi mt-6 px-2'> Music Videos </p>
                    </div>

                    <div className="rounded-md h-[275px] w-[390px] md:h-[275] md:w-[340] cursor-pointer border border-gray-900 shadow-md ">
                        <Player
                            poster='https://i.postimg.cc/52R1z8Cq/p-5.jpg'
                            src='https://drive.google.com/uc?id=1_bV78dGX1iIBW2nOrds2iE88NYEJIf7Z'
                        />

                        <p className='text-gray-100 font-satoshi mt-6 px-2'> Music Videos </p>
                    </div>

                    <div className="rounded-md h-[275px] w-[390px] md:h-[275] md:w-[340] cursor-pointer border border-gray-900 shadow-md">
                        <Player
                            poster='https://i.postimg.cc/q76rxgcf/p-6.jpg'
                            src='https://drive.google.com/uc?id=1xY6LRcA8knOi-ZNOYhqO7DNjUMLLH88i'
                        />

                        <p className='text-gray-100 font-satoshi mt-6 px-2'> Tech Events </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Portfolio

