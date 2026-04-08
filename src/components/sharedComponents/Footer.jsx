import React from 'react';
import Logo from './logo';
import { BsTwitter } from 'react-icons/bs';
import { GiThunderBlade } from 'react-icons/gi';
import { LiaLinkedin } from 'react-icons/lia';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* বাম দিক: লোগো এবং স্লোগান */}
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-2 text-slate-500 text-sm max-w-xs text-center md:text-left">
              The world's first intuitive AI agent profile builder. 
              Shape your AI, shape the future.
            </p>
          </div>

          {/* মাঝখান: সোশ্যাল লিঙ্কস */}
          <div className="flex items-center gap-5">
            <a href="#" className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
              <BsTwitter size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-purple-600 hover:border-purple-200 transition-all shadow-sm">
              <GiThunderBlade size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-700 hover:border-blue-300 transition-all shadow-sm">
              <LiaLinkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-red-500 hover:border-red-200 transition-all shadow-sm">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* নিচের অংশ: কপিরাইট */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>© {currentYear} AxonBuilder AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;