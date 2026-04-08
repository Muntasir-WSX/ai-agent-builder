import React from 'react';
import logoUrl from '../../assets/logo.png';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img 
        src={logoUrl} 
        alt="AxonBuilder Logo" 
        className="w-10 h-10 object-contain" 
      />
      <div className="flex flex-col leading-none">
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-blue-500">
            Axon
          </span>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-blue-500">Builder</span>
        </h1>
        <p className="text-[10px] text-slate-500 tracking-[0.2em] font-semibold uppercase">
          AI Agent Builder
        </p>
      </div>
    </div>
  );
};

export default Logo;