import { Outlet } from 'react-router-dom';

const BotLayout = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
    
      <Outlet /> 
    </div>
  );
};
export default BotLayout;