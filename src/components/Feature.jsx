import React from 'react';

const Feature = ({ id, title, description }) => {
  return (
    <section className="pt-14 md:pt-0 flex flex-col ">
      <div>
        <h1 className="text-xl  font-bold bg-Pale-Red md:bg-transparent flex items-center rounded-l-full ">
          <span className="bg-primary px-8 mr-6 py-3 rounded-full text-white">
            {id}
          </span>
          {title}
        </h1>
      </div>
      <p className="text-left text-lg text-Dark-Grayish-Blue py-6 leading-[2.5rem] ">
        {description}
      </p>
    </section>
  );
};

export default Feature;
