import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="relative h-fit bg-primary-bg text-ivory font-body selection:bg-rose/30 selection:text-ivory flex flex-col">
      {/* Premium Navigation Header */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 w-full flex-grow">
        {children}
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;