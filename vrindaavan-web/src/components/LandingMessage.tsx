

const LandingMessage = () => {
  return (
    <div className=" flex flex-col bg-gradient-to-b from-[#001D31] to-white">
        <div className="p-4 text-md bg-white mx-8 md:mx-20 shadow-white-500/80 shadow-2xl">
            Our North star is to build an equitable society through empowerment and innovative programs that are scalable & self-sustainable to make a difference in the lives of needy people across the world.
        </div>
        <div className="mx-8 md:mx-20 mt-8 flex flex-col md:flex-row items-center justify-center my-5 bg-white/60 p-4">
            <div className="text md:w-1/2 md:p-20">
                <h1 className="text-xl text-center mb-3">
                    Who we are?
                </h1>
                <p className="text-justify">
                Our strength lies not only in the words we stand by, but most importantly in the actions of our initiatives. From the moment we started our work in 2022, we understood that by working together we could overcome
                    our challenges much more efficiently, and that is why we ultimately decided to launch Vrindaavan. We strive to make a positive change in all of our pursuits.
                </p>
            </div>
            <div className="image md:w-1/2 mt-6 md:flex md:justify-center">
                <span className="w-[350px] h-[300px] block bg-slate-200"></span>
            </div>
        </div>
    </div>
  )
}

export default LandingMessage