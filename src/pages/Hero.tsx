import { LazyMotion, domAnimation, m, motion } from "framer-motion"
import myPic from "../assets/images/picme.png"
const Hero = () => {
  const style = {
    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    boxShadow: "0 0 60px 30px #fff",
  }
  return (
    <LazyMotion features={domAnimation}>
      <m.div id="home" className="w-full md:h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400 via-gray-900 to-slate-900 text-white flex justify-center md:items-center"
        animate={{ opacity: 1 }}>
        <div className="w-full xl:w-10/12 py-16 lg:px-8 block md:flex gap-4 justify-center items-center">
          <motion.div className="w-full md:w-2/5" style={style}
            initial={{ x: -1800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5, ease: 'easeOut' }}
          >
            <img src={myPic} alt="My photo" className="brightness-100 saturate-0" />
          </motion.div>
          <div className="w-full md:w-3/5 pt-16 flex flex-col justify-center items-center">
            <motion.h1 className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-teal-400 text-5xl xs:text-5xl sm:text-6xl md:text-8xl font-black leading-relaxed text-center"
              initial={{ y: 1800, opacity: 0 }}
              animate={{ y: 0, opacity: 1.0 }}
              transition={{ duration: 1.0 }}
            >
              Hi. I'm Fikireab.
            </motion.h1>
            <motion.h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-slate-400 text-5xl xs:text-5xl sm:text-6xl md:text-8xl font-black leading-relaxed text-center"
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