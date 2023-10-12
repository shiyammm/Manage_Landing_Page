import React from 'react';
import data from '../data';
import Logo from '../assets/images/logo.svg';
import Close from '../assets/images/icon-close.svg';
import Menu from '../assets/images/icon-hamburger.svg';
import { useState } from 'react';
import Button from '../components/Button';

const { NavLinks } = data;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between items-center md:px-[5rem] relative z-10 ">
      <div>
        <a href="#home">
          <img src={Logo} alt="logo" className="w-32" />
        </a>
      </div>
      {/* Mobile Devices */}
      <div className="md:hidden">
        <div>
          <img
            src={toggle ? Close : Menu}
            alt="menu"
            className="w-7 z-30 relative"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        {toggle && (
          <div>
            <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-20 z-10"></div>
            <div className="absolute z-20 text-center left-0 right-0 mt-6 mx-auto h-72 flex items-center justify-center w-2/3 bg-white ">
              <ul className="grid gap-5 font-medium text-secondary  ">
                {NavLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* Desktop Devices */}
      <div className=" hidden md:flex">
        <ul className="flex gap-5 font-medium text-secondary  ">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='hidden lg:flex relative z-10'>
        <Button customStyle={`bg-primary text-white`} />
      </div>
    </nav>
  );
};

export default Navbar;
