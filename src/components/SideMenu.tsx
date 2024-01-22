import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "../components/Card";
export const Menu = () => {
    return (
      <aside className="hidden md:block fixed z-10 top-32 right-8">
        <div>
          <Link
            heading="About"
            href="#aboutme"
          />
          <Link
            heading="Experiance"
            href="#experiance"
          />
          <Link
            heading="Projects"
            href="#projects"
          />
          <Link
            heading="Contact"
            href="#contact"
          />
        </div>
      </aside>
    );
  };
  
  interface LinkProps {
    heading: string;
    href: string;
  }
  
  const Link: React.FC<LinkProps> = ({ heading, href }) => {
    const ref = useRef<HTMLAnchorElement>(null);
  
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const right = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);
  
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
        <motion.div
          style={{
            top,
            right,
            translateX: "-15%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0 },
            whileHover: { scale: 1 },
          }}
          transition={{ type: "spring" }}
          className="absolute z-0 rounded-lg object-cover md:h-64 md:w-96"
        >
          <Card height={200} width={300}>
            <span>{heading} page</span>
          </Card>
        </motion.div>
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
            className="relative z-10 block text-xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-sky-500 md:text-2xl"
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
        </div>
      </motion.a>
    );
  };