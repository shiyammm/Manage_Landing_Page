import React from 'react';
import LightPattern from '../assets/images/light-orange-pattern.svg';
import Button from '../components/Button';

const Banner = () => {
  return (
    <section className="w-full bg-primary text-white grid lg:flex items-center justify-center lg:justify-between gap-8 py-[5rem] relative">
      <div className="absolute top-[4rem] left-[-20rem] lg:top-0 lg:left-[6rem] xl:left-[28rem]">
        <img src={LightPattern} alt="pattern" className="w-[35rem] " />
      </div>

      <h1 className="text-4xl relative xl:text-5xl font-bold text-center lg:text-left w-[20rem] lg:w-[55rem] lg:px-[4rem] xl:px-[9rem] leading-[3rem] xl:leading-[4rem]">
        Simplify how your team works today.
      </h1>
      <div className="mx-auto lg:mx-[9rem]">
        <Button customStyle={`bg-white text-primary`} />
      </div>
    </section>
  );
};

export default Banner;
