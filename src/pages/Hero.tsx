import open_laptop from "../assets/images/971.png";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import cloudImg from "../assets/images/cloud.jpg";
export default function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate px-6 lg:px-8">

        <div className="mx-auto max-w-7xl px-8 py-8 grid grid-cols-1 md:grid-cols-5 items-center gap-8 mx-auto">
          <div className="text-left col-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-9xl bg-gradient-to-br from-blue-600 to-purple-600" style={{ backgroundClip: "text" }}>
              Hi.
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-400 sm:text-4xl" style={{ backgroundClip: "text" }}>
              I'm Fikireab.
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-4xl" style={{ backgroundClip: "text" }}>
              A software engineer.
            </h1>
            <p className="mt-6 text-xl font-thin leading-8 text-gray-200">
              Crafting Tomorrow's Solutions Today.<br /> Elevate Your Digital Experience with me.
            </p>

            <button className="lg:ml-32 mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-blue-500 text-white font-bold py-3 px-8 lg:px-16 rounded-full shadow-md hover:text-white shadow-blue-300 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
              <a href="#">
                Contact me
              </a>
            </button>
          </div>
          <div className="col-span-3 pt-2 pr-2" >
            <About/>
          </div>
        </div>
      </div>
    </div>
  )
}





export const About = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="About"
          subheading="Learn what I do here"
          imgSrc={cloudImg}
          href="#"
        />
        <Link
          heading="Experiance"
          subheading="I work with great people"
          imgSrc={open_laptop}
          href="#"
        />
        <Link
          heading="Portfolio"
          subheading="My work speaks for itself"
          imgSrc={cloudImg}
          href="#"
        />
        <Link
          heading="Contact"
          subheading="Incase you're bored"
          imgSrc={open_laptop}
          href="#"
        />
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link: React.FC<LinkProps> = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const rect = ref.current?.getBoundingClientRect();

    if (rect) {
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <ArrowLongRightIcon className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};