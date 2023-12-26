import { LazyMotion, domAnimation, m, motion } from "framer-motion"
import myPic from "../assets/images/picme.png"
const Hero = () => {
  const style = {
    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    boxShadow: "0 0 60px 30px #fff",
  }
  return (
    <LazyMotion features={domAnimation}>
      <m.div id="home" className="w-full h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-200 via-gray-800 to-black text-white flex justify-center items-center"
        animate={{ opacity: 1 }}>
        <div className="w-full xl:w-10/12 h-1/2 px-2 lg:px-8 flex gap-4 justify-center items-center">
          <motion.div className="w-1/2" style={style}
            initial={{ x: -1800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5, ease: 'easeOut' }}
          >
            <img src={myPic} alt="My photo" className="brightness-100 saturate-0" />
          </motion.div>
          <div>
            <motion.h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-500 text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black leading-relaxed"
              initial={{ y: 1800, opacity: 0 }}
              animate={{ y: 0, opacity: 1.0 }}
              transition={{ duration: 1.0 }}
            >
              Hi. I'm Fikireab.
            </motion.h1>
            <motion.h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-white text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black leading-relaxed"
              initial={{ y: 1800, opacity: 0 }}
              animate={{ y: 0, opacity: 1.0 }}
              transition={{ delay: 0.2, duration: 1.0, ease: 'easeOut' }}
            >
              A software engineer.
            </motion.h1>
          </div>
        </div>
      </m.div>
    </LazyMotion>

  )
}

export default Hero