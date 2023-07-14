import React from 'react';

function Navbar() {
    
  return (
    <header className="md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center text-gray-400">
        <a className="title-font font-medium text-black mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Andrew Jiang
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-black">
            My Projects
          </a>
          <a href="#achievements" className="mr-5 hover:text-black">
            My Achievements
          </a>
        </nav>
        
      </div>
    </header>
  );

}

export default Navbar;