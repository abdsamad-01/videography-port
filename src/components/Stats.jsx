
const Stats = () => {
    return (
        <div className="flex items-center px-4 justify-center flex-row md:flex-col md:space-y-8 space-x-8 md:space-x-0 my-16 md:my-8 font-satoshi text-gray-50">
            <div className="glass p-2 flex flex-col items-center justify-center w-[250px] h-[140px] rounded">
                <span className="font-medium text-lg"> 100+ </span>
                <span className="font-medium text-xl"> Satisfied Clients</span>
            </div>

            <div className="glass p-2 flex flex-col items-center justify-center w-[250px] h-[140px] rounded">
                <span className="font-medium text-lg"> 50+ </span>
                <span className="font-medium text-xl"> Projects Done </span>
            </div>

            <div className="glass p-2 flex flex-col items-center justify-center w-[250px] h-[140px] rounded">
                <span className="font-medium text-lg"> 8 Years </span>
                <span className="font-medium text-xl"> Experience </span>
            </div>
        </div>
    )
}

export default Stats

