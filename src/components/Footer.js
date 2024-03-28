import React from 'react';

const Footer = ({full}) => {
  return (
    <footer className="bg-secondary text-white py-4 px-4 pt-3 border-t-4 border-accent1 ff">
      <div className="max-w-screen-xl mx-auto">

        {full && <div>
        <p className="text-center text-sm sm:text-sm md:text-sm lg:text-sm mb-2 pt-5">Made by Th4nkd. Liked it? Buy me a coffee ☕ and help me bring many more features. 😀</p>
        <div className="flex justify-center items-center">
          <p className="mr-2 text-sm sm:text-sm md:text-sm lg:text-sm">Ronin:</p>
          <span className="font-bold text-sm sm:text-sm md:text-sm lg:text-sm underline">0x31bda1999a40ec043ea08f69c316511ca80eb6e9</span>
        </div>
        <hr className="my-6 border-gray-400" /></div>}

        <div className="text-center text-sm sm:text-sm md:text-sm lg:text-sm">
        <p className="mx-4">&copy; {new Date().getFullYear()} Wild Forest. Images and content belong to their owners.</p>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
