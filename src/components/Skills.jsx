import React from "react";
import { motion } from "framer-motion";
import { TRAINING } from "../constants";
const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Trainings / Certifications
      </motion.h1>

      <div>
        {TRAINING.map((Traininge, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1"
            >
              <img
                src={Traininge.image}
                width={150}
                height={150}
                alt={Traininge.training2}
                className="mb-20 rounded"
              />
            </motion.div> */}
            
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-4 text-2xl text-neutral-400">
                {Traininge.training1}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-4  text-2xl text-neutral-400">
                {Traininge.training2}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-4 text-2xl text-neutral-400">
                {Traininge.training3}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-4 text-2xl text-neutral-400">
                {Traininge.training4}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-4 text-2xl text-neutral-400">
                {Traininge.training5}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-4 text-2xl text-neutral-400">
                {Traininge.training6}
              </p>
            </motion.div>   
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-4 text-2xl text-neutral-400">
                {Traininge.training7}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-4 text-2xl text-neutral-400">
                {Traininge.training8}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

{
  /* <p>- Red Hat® Certified System Administrator (RHCSA®) [CERTIFICATION ID: 230-071-110] </p>
<p>- Machine Learning using Python from Grras [Certificate No. - Grras/214808] </p>
 <p>- Machine Learning for Engineering and Science Applications from NPTEL. </p>
   <p>- Participation Certification in HACK JKLU v3.0, Jaipur. </p>
   <p>- Data Science using Python from Grras [Grras/214356] </p>
   <p>- MERN Stack Fundamentals from Great Learning</p>
   <p>- Introduction to MongoDB for students. </p>
    <p>- Cloud Computing from NPTEL.</p> */
}
