import React from 'react';

const Menu = () => {
  return (
    <nav className="border-gray-200 bg-secondary">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-2xl font-semibold whitespace-nowrap text-white">WF Tools</span>
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
              <a href="#" className="block py-2 px-3 text-textSecondary rounded md:bg-transparent md:text-white md:p-0 hover:text-white hover:bg-dark" aria-current="page">My Dashboard</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-textSecondary rounded md:hover:text-textPrimary md:p-0 hover:text-white hover:bg-dark">Market Prices</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
