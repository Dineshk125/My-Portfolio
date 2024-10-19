import React from "react";
import { INFO_CONTENT } from "../constants";
import ProfilePic from "../assets/Dinesh.png.jpg";
import { motion, transform } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Info = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Dinesh Kumawat
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
             bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front-End Developer Intern
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 text-2xl max-w-xl py-6 font-light tracking-tighter"
            >
              {INFO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className=" rounded-2xl h-[600px] w-auto"
              src={ProfilePic}
              alt="Profile Photo"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

// whileHover={{scale:1.2}}
//               whileTap={{scale:1.1}}
//               drag="x"
//               dragConstraints={{left:-100, right:100}}

// initial={{x:-100, opacity:0}}
//             animate={{x:0, opacity:1}}
//             transition={{duration:0.5, delay:0}}
