import React from 'react';
import { motion } from 'framer-motion';
import { RiSearchLine, RiBookLine, RiRocketLine, RiCodeSSlashLine, RiSettings4Line, RiHashtag, RiTerminalBoxLine } from "react-icons/ri";

const Docs = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 1. Header & Search Section (Gemini Style) */}
      <section className="bg-slate-50 border-b border-slate-100 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-slate-900 tracking-tight"
          >
            How can we help?
          </motion.h1>
          <p className="text-slate-500 text-lg">Search the Axon AI documentation or browse categories below.</p>
          
          <div className="relative max-w-xl mx-auto">
            <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
            <input 
              type="text" 
              placeholder="Search documentation (e.g. API Keys, Neural Link)..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 mt-16">
        
        {/* 2. Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {[
            { title: 'Getting Started', icon: <RiRocketLine />, desc: 'Learn the basics and deploy your first agent.' },
            { title: 'API Reference', icon: <RiCodeSSlashLine />, desc: 'Full endpoint details for developers.' },
            { title: 'Customization', icon: <RiSettings4Line />, desc: 'Tweak neural behaviors and UI.' },
            { title: 'Best Practices', icon: <RiBookLine />, desc: 'Optimizing your AI for high performance.' },
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. Main Content Feed */}
        <div className="space-y-24">
          
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-10">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">
              <RiHashtag /> Welcome
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-6">Introduction to Axon</h2>
            <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed space-y-6">
              <p>
                Axon AI is an end-to-end framework built for the next generation of digital interaction. 
                Whether you are building a customer support bot or a complex neural assistant, 
                Axon provides the tools to bridge human intent with machine intelligence.
              </p>
              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-slate-300 relative overflow-hidden">
                <RiTerminalBoxLine className="absolute -right-4 -bottom-4 text-9xl text-white/5" />
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                   Core Architecture
                </h4>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Neural Link Integration (v2.0)</li>
                  <li>Real-time Personality Morphing</li>
                  <li>Cross-platform Deployment</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Quick Start (Code Block) */}
          <section id="quickstart" className="scroll-mt-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Quick Installation</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Start by installing the Axon CLI. This tool handles environment setup and agent scaffolding.
            </p>
            <div className="bg-slate-950 rounded-3xl p-8 font-mono text-sm shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <span className="text-slate-500">Terminal</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">bash</span>
              </div>
              <div className="space-y-2">
                <p className="text-blue-400"># Install the global package</p>
                <p className="text-white"><span className="text-green-500">npm</span> install -g axon-cli</p>
                <p className="text-blue-400 mt-4"># Initialize a new agent project</p>
                <p className="text-white"><span className="text-green-500">axon</span> init my-agent</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Docs;