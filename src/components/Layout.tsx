import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout: React.FC = ({children}) => {
  
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex flex-col w-full pl-14">
        <Navbar />
        <main className="w-full h-full max-w-[1280px] mx-auto">
          <div className="w-full h-full flex-1 px-4 pt-16 ">
            { children }
          </div>

        </main>
      </div>

    </div>
  )
}

export default Layout