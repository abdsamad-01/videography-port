
const Testimonies = () => {
    return (
        <div className="font-satoshi text-center py-8">
            <h3 className="font-bold text-4xl"> TESTIMONIES </h3>
            <p className="text-lg  my-5"> Our Happy Clients </p>

            <div className="flex flex-row md:flex-col md:mx-6 sm:mx-3 items-center justify-center gap-10 my-4">
                <div className="glass p-3 rounded-sm">
                    <h5 className="text-lg"> Suliyat & Sherif  </h5>
                    <p className="py-4 text-[0.95rem]"> I have always picture my wedding to be a memorable event and the videographer is such a competent and jovial person. I am glad i got what i wished for. </p>

                    <span className="text-sm mt-1 text-tertiary"> ~Bride & Groom  </span>
                </div>
                <div className="glass p-3 rounded-sm">
                    <h5 className="text-lg"> Kenty </h5>
                    <p className="py-4">As an artist i enjoy watching music videos of good quality and i hope that one day i’d get a videographer to help me achieve that, thankfully my video came out nice.</p>

                    <span className="text-sm mt-1 text-tertiary"> ~Artist  </span>
                </div>
                <div className="glass p-3 rounded-sm">
                    <h5 className="text-lg"> Omolayo & Seun </h5>
                    <p className="py-4"> It was an amazing day for us and special thanks to MAB for capturing every detailed part of the wedding, sitting back and watching the full length cinematic film of us over and over again was pure bliss. </p>

                    <span className="text-sm mt-1 text-tertiary"> ~Groom & Bride  </span>
                </div>
            </div>
            <button type='button' className='bg-btnColor2 mt-5 text-gray-50 px-7 py-[9px] border-none shadow-sm rounded-[4px] font-satoshi text-[13px]'>
                View More
            </button>
        </div>
    )
}

export default Testimonies

