const Navbar = () => {
  return (
    <nav className="flex items-center p-5 bg-[#f0f0f0]">
        <div className="mr-3 rounded-[50%] block">
            <span className="w-[40px] h-[40px] bg-slate-300 block rounded-[50%]"></span>
            {/* <img src="media\cropped_logo1.webp" alt="Icon"> */}
        </div>
        <div id="title" style={{fontFamily: 'Samarkan', fontSize: '30px'}}>Vrindaavan</div>
        <ul className="ml-auto list-none text-sm md:text-lg">
            <li className="inline-block mr-3">
                <a className="decoration-none text-[#333333]" href="#">Our Programs</a>
            </li>
            <li className="inline-block mr-3">
                <a className="decoration-none text-[#333333]" href="#">About Us</a>
            </li>
            <li className="inline-block mr-3">
                <a className="decoration-none text-[#333333]" href="#">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar