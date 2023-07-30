
const ContactUs = () => {
  return (
    <section className="md:p-11 p-5">
        <div className="md:w-full flex m-auto justify-center flex-col items-center mx-4 my-6 z-10 ">
            <h1 className="text-4xl">
                Contact us
            </h1>
        </div>
        <div className="md:w-full flex z-10 flex-col md:flex-row">
            <div className="md:w-1/2 sm:h-[700px] md:h-[auto] border-solid border-2 m-5 bg-gray-300 shadow-black-500/80 shadow-2xl">
                Map
            </div>
            <div className="md:w-1/2 border-solid border-2 m-5 p-10 flex flex-col items-center shadow-2xl">
                <h1 className="text-2xl md:text-4xl">Send us a message</h1>
                <form action="" className="md:w-full h-full flex flex-col items-center">
                    <div className="md:w-full text-xl md:text-3xl my-10 flex justify-evenly md:flex-row flex-col items-center">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="border-solid border-2 border-gray-400" />
                    </div>
                    <div className="md:w-full text-xl md:text-3xl my-5 md:my-10 flex justify-evenly md:flex-row flex-col items-center">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="border-solid border-2 border-gray-400" />
                    </div>
                    <div className="md:w-full text-xl md:text-3xl my-10 md:my-20 flex flex-col justify-evenly items-center">
                        <label htmlFor="message" className="my-5">Message</label>
                        <textarea placeholder={'Enter comment...'} rows={5} cols={33} className="border border-solid border-gray-400 w-full" />
                    </div>
                    <button className="m-5 px-20 py-3 border-solid rounded-[50px] bg-yellow-400">Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactUs