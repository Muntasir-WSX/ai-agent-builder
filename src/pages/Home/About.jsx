import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiRocket2Line, RiEyeLine, RiHistoryLine } from "react-icons/ri";

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'Mission', icon: <RiRocket2Line /> },
    { id: 'vision', label: 'Vision', icon: <RiEyeLine /> },
    { id: 'story', label: 'Our Story', icon: <RiHistoryLine /> },
  ];

  const contentData = {
    mission: {
      title: "Our Mission",
      description: "Empowering every individual with custom intelligent agents.",
      text: "Our mission is to build a democratic platform where anyone can design their own AI personalities without writing a single line of code. By leveraging AxonBuilder, we aim to simplify complex workflows and transform the way people interact with digital intelligence.",
      color: "bg-black"
    },
    vision: {
      title: "Our Vision",
      description: "Defining the next frontier of human-AI synergy.",
      text: "We envision a world where AI serves as a natural extension of human thought. In this future, every person will have a personalized digital partner—one that doesn't just execute tasks, but evolves alongside you to generate innovative ideas and solve global challenges.",
      color: "bg-black"
    },
    story: {
      title: "Our Story",
      description: "From a shared garage to a global neural link revolution.",
      text: "Founded in 2024, Axon AI began as a small experiment in Chittagong, fueled by the desire to make AI accessible. Today, we are proud to support thousands of users globally. We believe that when technology is built with empathy, it has the power to change the world.",
      color: "bg-black"
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      {/* Header Section */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">About Axon AI</h2>
        <p className="text-slate-500 max-w-lg mx-auto text-lg leading-relaxed">
          We are bridging the gap between human creativity and artificial intelligence through precision engineering.
        </p>
      </div>

      {/* Custom Animated Tabs List */}
      <div className="grid grid-cols-3 mb-10 bg-slate-100 p-1.5 rounded-full relative shadow-inner">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold transition-colors z-10 ${
              activeTab === tab.id ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white rounded-full shadow-md -z-10"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Area with AnimatePresence */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Custom Card Structure (Replacement for shadcn/ui Card) */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
              
              {/* Card Header Section */}
              <div className={`${contentData[activeTab].color} p-10 text-white transition-colors duration-700`}>
                <h3 className="text-3xl font-bold mb-2 tracking-tight">
                  {contentData[activeTab].title}
                </h3>
                <p className="text-white/80 text-lg">
                  {contentData[activeTab].description}
                </p>
              </div>

              {/* Card Body Section */}
              <div className="p-10">
                <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-slate-200 pl-6">
                  "{contentData[activeTab].text}"
                </p>
                
                <div className="mt-8 flex items-center gap-4 text-slate-400 text-sm font-medium uppercase tracking-widest">
                   <div className="h-px flex-1 bg-slate-100"></div>
                   Axon AI Core Values
                   <div className="h-px flex-1 bg-slate-100"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default About;