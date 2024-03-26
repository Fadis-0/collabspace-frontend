import React from 'react';
import { NavLink } from 'react-router-dom';

import { 
  AiOutlineMessage,
  AiOutlineDashboard,
  AiOutlineCalendar,
  AiOutlineLogout,

} from 'react-icons/ai';

const Sidebar: React.FC = () => {
  
  const activeLink = "flex items-center p-1.5 text-base text-gray-100 transition-all duration-200 bg-neutral-600 rounded";
  const normalLink = "flex items-center p-1.5 text-base text-gray-100 transition-all duration-200 rounded-lg hover:bg-neutral-700";
  
  return (
    <aside className="" aria-label="Sidebar">
      <div className="overflow-y-auto h-screen py-4 px-2.5 bg-neutral-800">
        <ul className="space-y-3 relative h-full">
          <li>
            <NavLink 
              to="/dashboard"
              className={({ isActive }) => isActive ? activeLink : normalLink }
            >
              <AiOutlineDashboard className="text-2xl" />
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/chat"
              className={({ isActive }) => isActive ? activeLink : normalLink }
            >
              <AiOutlineMessage className="text-2xl" />
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/events"
              className={({ isActive }) => isActive ? activeLink : normalLink }
            >
              <AiOutlineCalendar className="text-2xl" />
            </NavLink>
          </li>
          <li className="absolute bottom-0">
            <NavLink 
              to="logout"
              className={({ isActive }) => isActive ? activeLink : normalLink }
            >
              <AiOutlineLogout className="text-2xl" />
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar