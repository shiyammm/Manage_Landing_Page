import React from 'react';
import Button from '../components/Button';

const Banner = () => {
  return (
    <article>
      <section className="w-full bg-pattern-banner bg-primary text-white grid lg:flex items-center justify-center lg:justify-between gap-8 py-[5rem] ">
        <h1 className="text-4xl  xl:text-5xl font-bold text-center lg:text-left w-[20rem] lg:w-[55rem] lg:px-[4rem] xl:px-[9rem] leading-[3rem] xl:leading-[4rem]">
          Simplify how your team works today.
        </h1>
        <div className="mx-auto lg:mx-[9rem]">
          <Button
            customStyle={`bg-white text-primary`}
            customTextHover={` hover:opacity-80`}
          />
        </div>
      </section>
    </article>
  );
};

export default Banner;
