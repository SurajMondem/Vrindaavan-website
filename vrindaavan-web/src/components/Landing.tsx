

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center bg-[#001D31] p-11 md:pb-40">
        <div className="md:w-1/2 h-auto font-bold my-5 flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl text-yellow-400">
                VRINDAAVAN
            </h1>
            <h1 className="text-2xl md:text-4xl text-white text-center">
                ASSOCIATION OF NORTH AMERICA
            </h1>
        </div>
        <div className="md:w-1/2 md:flex md:justify-center">
            <span className="w-[250px] h-[250px] bg-slate-300 block"></span>
            {/* <img src="" alt="Logo"> */}
        </div>
    </div>
  )
}

export default LandingPage