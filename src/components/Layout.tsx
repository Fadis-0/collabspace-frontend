import React from 'react';
import Sidebar from './Sidebar';

const Layout: React.FC = ({children}) => {
  
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-5 max-w-[1280px] mx-auto">
        <div>
          { children }
        </div>

      </main>
    </div>
  )
}

export default Layout