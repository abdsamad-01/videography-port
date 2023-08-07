import { Navbar, Hero, AboutMe, Services, Pricing, Portfolio, Stats, ReachOut, Testimonials, Contact, Enquiry, Footer } from "./components"

function App() {
    return (
        <div className="min-h-screen">
            <div className="bg-black text-gray-50 pb-10">
                <Navbar />
                <Hero />
            </div>

            <div className='bg-variant py-14 sm:py-6 px-28 md:px-4'>
                <AboutMe />
                <Services />
                <Pricing />
            </div>

            <div className="bg-black text-gray-50 py-8">
                <Portfolio />
                <Stats />
            </div>

            <div className='bg-variant py-14 px-28 md:px-5 sm:px-4'>
                <ReachOut />
            </div>

            <div className="bg-black text-gray-50 py-8 px-28 md:px-5 sm:px-4">
                <Testimonials />
            </div>

            <div>
                <Contact />
            </div>

            <div className='bg-variant py-24 px-28 md:px-5 sm:px-4'>
                <Enquiry />
            </div>

            <div className="bg-black text-gray-50 py-8 px-28 md:px-5 sm:px-4">
                <Footer />
            </div>
        </div>
    )
}

export default App
