import React from 'react';
import data from '../data';
import Newsletter from '../components/Newsletter';
import whiteLogo from '../assets/images/white-logo.svg';

const { FooterLinks } = data;
const { Socials } = data;

const Footer = () => {
  return (
    <footer className="relative">
      {/* Mobile Devices */}
      <div className="bg-Dark-Blue flex flex-col items-center justify-center py-[4rem] lg:hidden ">
        <div>
          <Newsletter />
        </div>
        <div>
          <div className="text-white py-14">
            <ul className="grid gap-5 gap-x-[9rem] grid-cols-2">
              {FooterLinks.map((link) => (
                <li className="text-lg hover:text-primary" key={link.id}>
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-11 items-center justify-center ">
            {Socials.map((social) => (
              <picture key={social.id}>
                <img src={social.image} alt={social.id} className="w-11 " />
              </picture>
            ))}
          </div>
          <div>
            <img
              src={whiteLogo}
              alt="logo"
              className="w-52 mx-auto py-[4rem] "
            />
          </div>
          <div className="text-Dark-Grayish-Blue font-medium text-center">
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </d>
      {/* Large Devices */}
      <div className="bg-Dark-Blue lg:flex hidden py-[3rem]  lg:px-[4rem] xl:px-[9rem] items-center justify-between ">
        <div className="grid lg:gap-[1rem] xl:gap-[4rem]">
          <div>
            <img
              src={whiteLogo}
              alt="logo"
              className="w-52 mx-auto py-[4rem] "
            />
          </div>
          <div className="flex gap-5 items-center justify-center">
            {Socials.map((social) => (
              <picture key={social.id}>
                <img src={social.image} alt={social.id} className="w-7" />
              </picture>
            ))}
          </div>
        </div>
        <div>
          <div className="text-white lg:pt-[4rem] ">
            <ul className="grid gap-5 lg:gap-x-[2rem] xl:gap-x-[5rem] 2xl:gap-x-[17rem] grid-cols-2">
              {FooterLinks.map((link) => (
                <li className="text-lg hover:text-primary" key={link.id}>
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Newsletter />
        </div>
        <div className="text-Dark-Grayish-Blue font-medium absolute top-[15rem] right-[9rem] text-center">
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
