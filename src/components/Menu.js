import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Ver from '../assets/data/Ver';

const Menu = () => {
  const location = useLocation();

  return (
    <nav className="bg-secondary border-b-4 border-accent1 ff">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-2xl font-semibold whitespace-nowrap text-white">WF Tools</span> <span className="text-textPrimary font-semibold">{Ver.prefix}</span> <span className="text-textPrimary font-semibold">v.{Ver.v}</span>
        </a>
        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link to="/" className={`block font-semibold py-2 px-3 text-textSecondary rounded md:hover:text-textPrimary md:p-0 hover:text-white hover:bg-dark text-sm sm:text-base md:text-lg lg:text-lg ${location.pathname === '/' ? 'activeItem' : ''}`}>Home</Link>
            </li>
            <li>
              <Link to="/market" className={`block font-semibold py-2 px-3 text-textSecondary rounded md:hover:text-textPrimary md:p-0 hover:text-white hover:bg-dark text-sm sm:text-base md:text-lg lg:text-lg ${location.pathname === '/market' ? 'activeItem' : ''}`}>Market Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
