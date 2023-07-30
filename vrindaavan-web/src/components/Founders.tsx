const FoundingCard = () => {
    return (
        <div className="w-full flex flex-col my-5 md:mx-5 items-center" >
                <div className="image h-[250px] w-[250px] bg-slate-300 rounded-[100%]">
                    {/* <img src="" alt=""> */}
                </div>
                <div className="p-5 flex flex-col items-center">
                    <h4 className="font-bold text-xl ">
                        Founder Name
                    </h4>
                    <p className="m-2">
                        Designation
                    </p>
                    <p className="m-2">
                        location
                    </p>
                </div>
            </div>
    ) 
}


const Founders = () => {
  return (
    <section className="p-11 bg-[#91B4CC]">
        <div className="w-full flex m-auto justify-center flex-col items-center mx-4 my-6 z-10">
            <h1 className="text-4xl">
                Our Programs
            </h1>
        </div>
        <div className="w-full flex z-10 flex-col md:flex-row">
            <FoundingCard />
            <FoundingCard />
            <FoundingCard />
            <FoundingCard />
        </div>
    </section>
  )
}

export default Founders