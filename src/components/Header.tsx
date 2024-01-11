import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const menueItems = [{ name: "About", url: "#about" }, { name: "Services", url: "#services" }, { name: "Projects", url: "#projects" }, { name: "Contact", url: "#contact" }]

  const [selected, setSelected] = useState(0);

  return (
    <motion.header className="fixed z-10 left-0 right-0 top-0 flex items-center justify-center bg-transparent"
      initial={{ y: -200, scale: 0.1 }}
      animate={{ y: 0, scale: 1.0 }}
      transition={{ type: 'spring', stiffness: 100, duration: 2.0 }}
    >
      <nav className="hidden xs:block shadow-xl my-2 py-2 md:px-4 flex items-center justify-around max-w-xl bg-black rounded-full backdrop-blur-lg bg-opacity-50">
        {
          menueItems.map((item, index) => (
            <button key={index}
              onClick={() => setSelected(index)}
              className={`${selected == index
                  ? "text-white"
                  : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
                } transition-colors rounded-full relative py-2 px-4 mx-1 font-semibold w-24`}
            >
              <a href={item.url} className="relative z-10">{item.name}</a>
              {
                selected == index && (
                  <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.5 }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                  >
                  </motion.span>
                )}
            </button>
          ))
        }
      </nav>
    </motion.header>
  )
}
export default Header;