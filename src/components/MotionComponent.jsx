import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const MotionComponent = ({ children, delay = 0 }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      // const height = window.innerHeight;

      setWindowWidth(width);
    });
  }, []);

  return (
    <div>
      {windowWidth >= 1200 ? (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
        >
          <motion.div variants={variants} className="mx-auto">
            {children}
          </motion.div>
        </motion.div>
      ) : (
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          {children}
        </div>
      )}
    </div>
  );
};

export default MotionComponent;
