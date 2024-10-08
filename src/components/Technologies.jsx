import React from "react";
import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariable = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function TechnologiesComponent() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: 100 }}
       transition={{ duration: 1.5 }}
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            variants={iconVariable(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-7xl text-cyan-400" />
          </div>
          <motion.div
            variants={iconVariable(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariable(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiRedis className="text-7xl text-red-700" />
          </motion.div>
          <motion.div
            variants={iconVariable(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariable(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMysql className="text-7xl text-cyan-700" />
          </motion.div>
          <motion.div
            variants={iconVariable(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiCplusplus className="text-7xl text-blue-700" />
          </motion.div>
          <motion.div
            variants={iconVariable(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiHtml5 className="text-7xl text-orange-500" />
          </motion.div>
          <motion.div
            variants={iconVariable(6.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiCss3 className="text-7xl text-blue-500" />
          </motion.div>
          <motion.div
            variants={iconVariable(7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiJavascript className="text-7xl text-yellow-500" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default TechnologiesComponent;
