import React from 'react';

const Newsletter = () => {
  return (
    <section className="flex gap-4">
      <div>
        <input
          type="email"
          className="py-4 w-[23rem] lg:w-[15rem] text-Dark-Grayish-Blue pl-7 rounded-full"
          placeholder="Updates in your inbox..."
        />
      </div>
      <button className="bg-primary text-white py-4 px-10 lg:px-8 rounded-full">
        Go
      </button>
    </section>
  );
};

export default Newsletter;
