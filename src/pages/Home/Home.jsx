import React from 'react';
import { motion } from 'framer-motion'; 
import { Element } from 'react-scroll'; // Element ইম্পোর্ট করুন
import Hero from './Hero';
import About from './About';
import Docs from './Docs';

const Home = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="bg-white">
      <Hero />

      {/* About Section */}
      <Element name="about-section">
        <motion.section
          variants={fadeUpVariant} 
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }}
        >
          <About />
        </motion.section>
      </Element>

      {/* Docs Section */}
      <Element name="docs-section">
        <motion.section
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Docs />
        </motion.section>
      </Element>
    </div>
  );
};

export default Home;