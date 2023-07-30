

const Footer = () => {
  return (
    <section>
        <div className="flex flex-col md:flex-row justify-center items-center border-t-2 border-gray-800">
            <div className="flex flex-col w-full p-11 items-center">
                <h1 className="text-4xl text-yellow-400 text-bold">
                    Vrindaavan
                </h1>
                <p className="text-lg text-bold">
                    Association of North America
                </p>
                <div className="flex flex-row justify-evenly w-full">
                    <a href="">Home</a>
                    <a href="">Contact Us</a>
                    <a href="">Our programs</a>
                </div>
                <p className="text-center">
                    ©2023 Vrindaavan Association of North America
                </p>
            </div>
            <div className="flex flex-col w-full p-5 items-center">
                <h1 className="text-2xl">Email Links</h1>
                <div className="flex flex-col items-center p-4">
                    <p>For Memberships:</p>
                    <a href="">memberships.vrindaavan@gmail.com</a>
                    <a href="">memberships@vrindaavan.org</a>
                </div>
                <div className="flex flex-col items-center p-4">
                    <p>For Immigration:</p>
                    <a href="">immigration@vrindaavan.org</a>
                </div>
                <div className="flex flex-col items-center p-4">
                    <p>For Education:</p>
                    <a href="">education@vrindaavan.org</a>
                </div>
            </div>
            <div className="flex flex-col w-full p-5 items-center">
                <h1 className="text-2xl p-4">Social Media</h1>
                <div className="flex flex-row justify-evenly w-full">
                    <div className="flex flex-col">
                        <span className="w-[25px] h-[25px] bg-gray-400"></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="w-[25px] h-[25px] bg-gray-400"></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="w-[25px] h-[25px] bg-gray-400"></span>
                    </div>
                    <div className="flex flex-col ">
                        <span className="w-[25px] h-[25px] bg-gray-400"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer