"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdClear, MdMenu } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl dark:text-gray-100">
            IVP
          </Link>
        </div>
        <button className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <MdMenu size={35} />
        </button>
        <nav className={`absolute lg:relative top-0 left-0 h-[100vh] lg:h-auto w-[100vw] lg:w-auto bg-slate-900 lg:bg-transparent flex items-center lg:translate-x-0 ${isOpen ? "translate-x-0" : "translate-x-[-100%]"} lg:flex flex-col lg:flex-row justify-center lg:justify-start transition-all duration-300 ease-in-out`}>
            <button className="lg:hidden fixed top-3 right-11" onClick={toggleMenu}>
              <MdClear size={40} />
            </button>
          <ul className="gap-4 lg:gap-0 flex flex-col lg:flex-row w-full lg:w-auto space-x-2 mr-2 text-center lg:text-left">
            <li>
              <Link
                className="text-3xl lg:text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                href="/news"
              >
                News
              </Link>
            </li>
             <li>
              <Link
                className="text-3xl lg:text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                href="/advertisements"
              >
                Advertisements
              </Link>
            </li>
            <li>
              <Link
                className="text-3xl lg:text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;