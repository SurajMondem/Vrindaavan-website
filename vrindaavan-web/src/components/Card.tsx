const Card = ({
    title = "Economic Development",
    description = "Lorem Ipsum",
    imgSrc = ""
} : {
    title: string,
    description: string,
    imgSrc: string
}) => {
    return (
        <div className="w-full flex flex-col my-5 md:mx-5 border-solid border-2 border-gray-700 bg-slate-800 text-white" >
                <div className="image h-[250px] bg-slate-300">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="p-5 flex flex-col items-center">
                    <h4 className="font-bold text-xl ">
                        {title}
                    </h4>
                    <p className="m-2">
                        {description}
                    </p>
                    <button className="m-5 px-10 py-3 border-solid rounded-[50px] bg-yellow-500">Learn more</button>
                </div>
            </div>
    )
}

export default Card