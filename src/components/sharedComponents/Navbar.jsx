import React from 'react';
import Logo from './logo';
import { Link } from 'react-scroll';

const Navbar = ({ sessionTime }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />     
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-900">
            
            {/* About Us Link */}
            <Link 
              to="about-section" 
              smooth={true} 
              duration={800} 
              offset={-80}
              spy={true} // স্ক্রোল পজিশন ট্র্যাক করার জন্য
              activeClass="is-active" // সেকশনে গেলে এই ক্লাস যোগ হবে
              className="relative py-2 cursor-pointer text-slate-700 transition-all group"
            >
              About Us
              {/* Active বা Hover অবস্থায় Black Underline */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 [[.is-active]_&]:scale-x-100"></span>
            </Link>

            {/* Docs Link */}
            <Link 
              to="docs-section" 
              smooth={true} 
              duration={800} 
              offset={-80} 
              spy={true}
              activeClass="is-active"
              className="relative py-2 cursor-pointer text-slate-700 transition-all group"
            >
              Docs
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 [[.is-active]_&]:scale-x-100"></span>
            </Link>

          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full border border-slate-200">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-mono text-slate-600">
              Active: {sessionTime}s
            </span>
          </div>
          <button className="bg-black hover:bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md active:scale-95">
            Build Agent
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;