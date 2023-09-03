import { useRef } from "react"
import { pricings } from "../constants"
// import right from '../assets/right.png'
// import left from '../assets/left.png'


const Pricing = () => {
    const parentRef = useRef(null);
    const scrollRef = useRef(null);
    // const [hideButtons, setHideButtons] = useState(false)

    // const handleScroll = (direction) => {
    //     const { current } = scrollRef;
    //     const scrollAmount = window.innerWidth > 1800 ? 385 : 320;

    //     if (direction === 'left') {
    //         current.scrollLeft -= scrollAmount;
    //     } else {
    //         current.scrollLeft += scrollAmount;
    //     }
    // }

    // const isScrollable = () => {
    //     const { current } = scrollRef;
    //     const { current: parent } = parentRef;

    //     if (current?.scrollWidth >= parent?.offsetWidth) {
    //         setHideButtons(false);
    //     } else setHideButtons(true)
    // }

    // useEffect(() => {
    //     isScrollable();
    //     window.addEventListener('resize', isScrollable);

    //     return () => {
    //         window.removeEventListener('resize', isScrollable);
    //     }
    // })
    return (
        <div className="py-14" id='pricing'>
            <h2 className='font-satoshi text-3xl font-bold text-center'> PRICING </h2>
            <div className="flex  min-h-[60vh]  mt-10 max-w-full" ref={parentRef}>
                <div className="flex flex-row gap-7 w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>
                    {pricings.map(pricing => (
                        <div
                            key={pricing.id}
                            className="flex flex-col  border bg-gray-50 font-satoshi rounded-[8px] h-[450px] min-w-[320px] sm:w-full relative"
                        >
                            <div className='p-4'>
                                <div>
                                    <h4 className="text-[1.15rem] font-semibold mb-2 text-center"> {pricing.packageTitle} </h4>
                                    <span className="text-[0.93rem] font-medium text-gray-800"> This package consists of the features listed below: </span>
                                </div>

                                <div className="flex flex-col mt-3">
                                    <span className="text-3xl font-semibold text-gray-800"> {pricing.price} </span>
                                    <button type="button" className="mt-5 px-[4px] rounded-[3px] font-medium py-[10px] bg-btnColor text-gray-50 text-xs">CHOOSE PACKAGE</button>
                                </div>

                                <div className='mt-4'>
                                    <span className='text-base font-medium py-1'>Features:</span>
                                    <ul className="mt-2">
                                        {pricing.features.map(feature => <li key={feature} className="text-[0.85rem] py-[2px] font-medium list-disc ml-3"> {feature} </li>)}
                                    </ul>
                                </div>
                            </div>


                            {/* <button type="button" className="absolute bottom-0 w-full mt-5 px-[4px] font-medium py-3 bg-gray-100 text-gray-800 text-sm"> See All Features </button> */}
                        </div>
                    ))}

                    {/* {!hideButtons &&
                        <>
                            <div onClick={() => handleScroll('left')} className='absolute h-8 w-8 bottom-[40%] cursor-pointer -left-5 minlg:h-12 minlg:w-12'>
                                <img
                                    src={left}
                                    alt='left_arrow'
                                    className='object-contain'
                                />
                            </div>
                            <div onClick={() => handleScroll('right')} className='absolute h-8 w-8 bottom-[40%] cursor-pointer -right-5 minlg:h-12 minlg:w-12'>
                                <img
                                    src={right}
                                    alt='right_arrow'
                                    className='object-contain'
                                />
                            </div>
                        </>
                        } */}
                </div>
            </div>

        </div>
    )
}

export default Pricing

