const Values = () => {
  return (
    <section className="p-11">
        <div className="w-full flex m-auto justify-center flex-col items-center mx-4 my-6 z-10">
            <h1 className="text-3xl">
                Our Values
            </h1>
        </div>
        <div className="w-full flex z-10 flex-col md:flex-row">
            <div className="w-full flex flex-col my-5 md:mx-5 border-solid border-2 border-gray-700 bg-slate-800 text-white" >
                <div className="image h-[500px] bg-slate-300">
                    {/* <img src="" alt=""> */}
                </div>
            </div>
            <div className="w-full flex flex-col my-5 md:mx-5 border-solid border-2 border-gray-700 bg-slate-800 text-white" >
                <div className="image h-[500px] bg-slate-300">
                    {/* <img src="" alt=""> */}
                </div>
            </div>
            <div className="w-full flex flex-col my-5 md:mx-5 border-solid border-2 border-gray-700 bg-slate-800 text-white" >
                <div className="image h-[500px] bg-slate-300">
                    {/* <img src="" alt=""> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values