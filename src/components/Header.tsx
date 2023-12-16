import { useState } from "react";
import menuIcon from "../assets/icons/menu-icon.svg"
import closeIcon from "../assets/icons/close-icon.svg"

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const menueItems = ["About", "Services", "Contact", "View CV"]
  function changeIndex(i: number) {
    setActiveIndex(i);
  }
  return (
    <header className="absolute z-10 left-0 right-0 top-0 flex items-center justify-center bg-transparent">
      <nav className="block xs:hidden w-full flex p-4 bg-black backdrop-blur-lg bg-opacity-30">
        {menuOpen
          ? <div className="w-full flex justify-between items-start">
            <div className="w-full p-4 flex flex-col gap-4 items-start justify-start">
              {
                menueItems.map((item, index) => (
                  <button onClick={() => changeIndex(index)}>
                    <a key={index} href="#" className={`${index === activeIndex ? "text-lg bg-teal-600 text-gray-200" : "bg-slate-900 bg-opacity-30"} py-2 px-4 font-semibold leading-6 text-gray-200 rounded-full`}>
                      {item}{index === activeIndex && <span className="text-gray-400 pl-1">/</span>}
                    </a>
                  </button>
                ))
              }
            </div>
            <button onClick={() => setMenuOpen(false)}>
              <img className="w-6 w-6" src={closeIcon} alt="menu icon" />
            </button>
          </div>
          :
          <>
            <div className="flex-1" />
            <button onClick={() => setMenuOpen(true)}>
              <img className="w-6 w-6" src={menuIcon} alt="menu icon" />
            </button>
          </>
        }

      </nav>
      <nav className="hidden xs:block shadow-xl my-4 p-4 md:px-4 flex items-center justify-around max-w-xl bg-black rounded-full backdrop-blur-lg bg-opacity-30">
        {
          menueItems.map((item, index) => (
            <button onClick={() => changeIndex(index)} className="mx-1 sm:mx-2">
              <a key={index} href="#" className={`${index === activeIndex ? "text-lg bg-teal-600 text-gray-200" : "bg-slate-900 bg-opacity-30"} py-2 px-4 font-semibold leading-6 text-gray-200 rounded-full`}>
                {item}{index === activeIndex && <span className="text-gray-400 pl-1">/</span>}
              </a>
            </button>
          ))
        }
      </nav>
    </header>
  )
}
export default Header;