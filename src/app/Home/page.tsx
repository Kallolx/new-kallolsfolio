import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function HomePage() {
  return (
    <>
      {/* Background image */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -10,
        }}
      />
      
      
      
      {/* Content */}
      <div className="relative flex flex-col min-h-screen overflow-hidden">
        <div className="relative flex flex-col min-h-screen max-w-[1440px] mx-auto w-full">
          <Navbar />
          <main className="flex-1 flex flex-col">
            <Hero />
            {/* Other components will be added here */}
          </main>
        </div>
      </div>
    </>
  );
} 