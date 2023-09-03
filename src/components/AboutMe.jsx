/* eslint-disable react/no-unescaped-entities */
import image from '../assets/about-me.png'

const AboutMe = () => {
    return (
        <div className="flex flex-row md:flex-col-reverse justify-between gap-10 bg-variant my-14" id='about'>
            <div className="w-[100%]">
                <img
                    src={image}
                    alt='About Me'
                    // height={500}
                    className='object-contain md:mx-auto sm:mx-0 rounded-md'
                />
            </div>

            <div className='font-satoshi'>
                <h2 className='text-3xl font-bold text-left md:text-center mb-4'> ABOUT ME </h2>
                <p className='font-medium text-justify'> I've been able to advance my career as a videographer over the past eight years, going from a beginner to recording weddings of exceptional individuals, music videos, live events, and drone footage. These are just a handful of the areas in which I excel. </p>

                <p className='font-medium mt-3 text-justify'> However, my favorite areas to work have been on wedding and music video shoots. I enjoy my job as a videographer because I get to capture and witness real feelings of love between couples and the passion of artists. View some of my projects to understand what I mean.</p>
            </div>
        </div>
    )
}

export default AboutMe

