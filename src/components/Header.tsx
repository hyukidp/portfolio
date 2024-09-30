import { useState, useEffect } from 'react';
import { IoIosClose, IoMdMenu } from "react-icons/io";
import logo from '/src/assets/logo.png';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdOutlineContactPhone } from "react-icons/md";


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setIsSticky(true);
      }
      else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  })

  return (
    <div className='w-full max-w-6xl mx-auto fixed md:bg-transparent top-0 left-0 right-0 z-50'>
        <div className={`flex justify-between py-2 px-6 md:px-10 lg:px-10 xl:px-0 ${isSticky ? "bg-neutralGray sticky top-0 right-0 left-0 duration-300": ""}`}>
            <div>
                <img className="size-16 md:size-20" src={logo}/>
            </div>

            <nav className='md:flex items-center'>
                <ul className="hidden md:flex gap-7">
                    <li className="text-lg text-neutralWhite font-semibold hover:text-cyan-500 hover:-translate-y-1 duration-200"><a href='#'>Top</a></li>
                    <li className="text-lg text-neutralWhite font-semibold hover:text-cyan-500 hover:-translate-y-1 duration-200"><a href='#about'>About</a></li>
                    <li className="text-lg text-neutralWhite font-semibold hover:text-cyan-500 hover:-translate-y-1 duration-200"><a href='#projects'>Projects</a></li>
                    <li className="text-lg text-neutralWhite font-semibold hover:text-cyan-500 hover:-translate-y-1 duration-200"><a href='#contact'>Contact</a></li>
                </ul>
            </nav>

            <div className='md:hidden flex items-center'>
              <button className='focus:outline-none focus:text-gray-500'
                onClick={toggleMenu}>
                {
                  isMenuOpen ? (<IoIosClose className='h-10 w-10 text-neutralCyan'/>) : (<IoMdMenu className='h-6 w-6 text-neutralCyan'/>)
                }
              </button>
            </div>

            <div className={`space-y-4 w-full mt-20 py-8 bg-neutralCyan ${ isMenuOpen ? "block fixed top-0 left-0": "hidden"}`}>
              <nav className="flex flex-col text-center">
                <ul>
                  <li className="text-3xl text-neutralWhite font-semibold py-3"><a href='#'><IoHomeOutline className='inline-block mr-3'/>Top</a></li>
                    <li className="text-3xl text-neutralWhite font-semibold py-3"><a href='#about'><FaRegUser className='inline-block mr-3'/>About</a></li>
                    <li className="text-3xl text-neutralWhite font-semibold py-3"><a href='#projects'><GrProjects className='inline-block mr-3'/>Projects</a></li>
                    <li className="text-3xl text-neutralWhite font-semibold py-3"><a href='#contact'><MdOutlineContactPhone className='inline-block mr-3'/>Contact</a></li>
                </ul>
              </nav>
            </div>
        </div>
    </div>
  )
}

export default Header