import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-4 px-4 pt-8 border-t-4 border-accent1 ff">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-center text-sm mb-2">Made by Th4nkd. Liked it? Buy me a coffee ☕ and help me bring many more features. 😀</p>
        <div className="flex justify-center items-center">
          <p className="mr-2 text-md">Ronin:</p>
          <span className="font-bold text-md underline">0x31bda1999a40ec043ea08f69c316511ca80eb6e9</span>
        </div>
        
        <hr className="my-6 border-gray-400" />
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} All rights reserved to Wild Forest. Images and content belong to their respective owners. </p>
        </div>
      

      </div>
    </footer>
  );
};

export default Footer;
