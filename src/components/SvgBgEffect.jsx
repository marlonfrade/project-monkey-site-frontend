import { motion } from "framer-motion";

const svgVariants1 = {
  visible: {
    x: [0, -20, -100, -200, 20, 0],
    y: [0, 300, -300, 20, 0],
    transition: {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const svgVariants2 = {
  visible: {
    x: [0, -200, -100, -200, 0],
    y: [0, -50, -100, -50, 0],
    transition: {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const svgVariants3 = {
  visible: {
    x: [0, -200, -250, -500, -200, 0],
    y: [0, -50, -100, -200, -50, 0],
    transition: {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

export default function SvgBgEffect() {
  return (
    <div>
      {/* SVG top left background */}
      <motion.div
        className="fixed top-[-10rem] -z-50 overflow-hidden blur-3xl sm:top-[-20rem]"
        variants={svgVariants1}
        animate={"visible"}
      >
        <motion.svg
          className="relative left-[calc(50%-11rem)] -z-50 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants1}
          animate={"visible"}
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".4"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DD2929" />
              <stop offset={1} stopColor="#AC54EF" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
      {/* SVG bottom right background */}
      <motion.div
        className="fixed top-[calc(100%-13rem)] -z-50 overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
        variants={svgVariants2}
        animate={"visible"}
      >
        <motion.svg
          className="relative -z-50 left-[calc(50%-3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+0rem)] sm:h-[49.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants2}
          animate={"visible"}
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DD2929" />
              <stop offset={1} stopColor="#AC54EF" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
      {/* SVG bottom left background */}
      <motion.div
        className="fixed top-[calc(100%-13rem)] -z-50 overflow-hidden blur-3xl sm:top-[calc(100%-20rem)]"
        variants={svgVariants3}
        animate={"visible"}
      >
        <motion.svg
          className="relative -z-50 left-[calc(50%-3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%-80rem)] sm:h-[49.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants3}
          animate={"visible"}
        >
          <path
            className="-z-50"
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DD2929" />
              <stop offset={1} stopColor="#AC54EF" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
}
