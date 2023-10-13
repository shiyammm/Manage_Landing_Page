import React from 'react';
import illustration from '../assets/images/illustration-intro.svg';
import Button from '../components/Button';

const Header = () => {
  return (
    <header className="md:pt-9 lg:py-[7rem] w-full h-screen ">
      <div className="lg:flex-row-reverse lg:flex lg:justify-between">
        <div className="mt-14 lg:mt-0 flex justify-center items-center lg:items-end">
          <img
            src={illustration}
            className=" w-80 lg:w-[30rem] xl:w-[45rem]"
            alt="illustration"
          />
        </div>
        <div className="text-center  lg:text-left mx-auto lg:mx-0 w-[30rem] py-7 grid gap-5  z-20">
          <h1 className="font-bold text-secondary text-5xl leading-[3.5rem]">
            Bring everyone together to build better products.
          </h1>
          <p className="text-Dark-Grayish-Blue text-2xl leading-[2.5rem]">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center lg:justify-start ">
            <Button
              customStyle={`bg-primary text-white`}
              customHover={` hover:opacity-80`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
