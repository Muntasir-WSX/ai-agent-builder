import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { RiRobot2Fill } from "react-icons/ri";

const Hero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: -120,
      filter: "blur(5px)",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60 }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1], 
        delay: 0.2, 
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white px-6 py-12"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-6">
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.1]"
          >
            Craft Your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500">
              Axon AI Agent
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-500 text-lg max-w-md leading-relaxed"
          >
            Design custom AI personalities and capability sets with precision.
            AxonBuilder bridges the gap between your ideas and intelligent
            digital agents.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-4">
            <motion.button
              onClick={() => navigate("/builder")}
              className="flex items-center gap-2 bg-black hover:bg-slate-900 text-white px-8 py-3.5 rounded-full text-base font-extrabold transition-all shadow-lg active:scale-95 group"
            >
              Get Started
              <RiRobot2Fill className="text-xl group-hover:rotate-12 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
        <motion.div 
  variants={imageVariants} 
  className="relative p-[2px]" 
>
  <div className="relative rounded-t-[80px] rounded-bl-[80px] rounded-br-none overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 p-1 shadow-2xl">
    <div className="relative rounded-t-[76px] rounded-bl-[76px] rounded-br-none overflow-hidden bg-white">
      <img 
        src="https://res.cloudinary.com/dnk0bvpym/image/upload/q_auto/f_auto/v1775240936/office2_ys64y4.jpg" 
        alt="Axon AI Builder Interface" 
        className="w-full h-112.5 object-cover"
      />
      <div className="absolute inset-0 bg-blue-500/5"></div>
    </div>
  </div>

</motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
