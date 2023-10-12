import React from 'react';
import pattern from '../assets/images/bg-tablet-pattern.svg';
import Feature from '../components/Feature';

const Features = () => {
  return (
    <section className="w-full md:flex md:gap-4 xl:gap-[20rem] relative">
      <div className="absolute top-[-28rem] right-[-23rem] lg:top-[9rem] lg:left-[-31rem] ">
        <img src={pattern} alt="pattern" className="w-[35rem] xl:w-[60rem] " />
      </div>
      <div className="mx-auto  text-center md:text-left  w-[25.5rem] md:w-1/2 grid md:flex md:flex-col md:items-start gap-7 relative ">
        <h1 className="text-4xl font-bold text-secondary">
          What’s different about Manage?
        </h1>
        <p className="text-lg leading-[2rem] text-Dark-Grayish-Blue">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="pl-5 md:w-1/2 md:flex md:flex-col md:items-end relative">
        <Feature
          id="01"
          title="Track company-wide progress"
          description="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        />
        <Feature
          id="02"
          title="  Advanced built-in reports"
          description="Set internal delivery estimates and track progress toward company 
          goals. Our customisable dashboard helps you build out the reports 
          you need to keep key stakeholders informed."
        />
        <Feature
          id="03"
          title="  Everything you need in one place"
          description="Stop jumping from one service to another to communicate, store files, 
          track tasks and share documents. Manage offers an all-in-one team 
          productivity solution."
        />
      </div>
    </section>
  );
};

export default Features;
