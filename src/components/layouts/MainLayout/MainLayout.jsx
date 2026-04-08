import { Outlet } from 'react-router-dom';
import Navbar from '../../sharedComponents/navbar';
import Footer from '../../sharedComponents/footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="grow pt-20">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;