import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-600 via-gray-800 to-black text-lime-100 flex justify-center items-center">
      <div className="w-full lg:w-4/5 xl:w-3/5 h-1/2 px-1 text-center">
        <motion.h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black leading-relaxed"
          initial={{ x: -2000 }}
          animate={{ x: 0 }}
          transition={{ duration: 2.0 }}
        >
          Hi. I'm Fikireab.
        </motion.h1>
        <motion.h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black leading-relaxed"
          initial={{ x: 900 }}
          animate={{ x: 0 }}
          transition={{ duration: 2.0 }}
        >
          A software engineer.
        </motion.h1>
      </div>
    </div>
  )
}

export default Hero