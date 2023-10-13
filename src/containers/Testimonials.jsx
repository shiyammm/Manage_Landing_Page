import { React, useState, useEffect } from 'react';
import data from '../data';
import Button from '../components/Button';

const { TestimonialData } = data;

const Testimonials = () => {
  const [switchMember, setSwitchMember] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideDuration = 5000;

  // Function to move to the next member
  const moveToNextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimonialData.length);
  };

  useEffect(() => {
    // Automatically slide to the next member at regular intervals
    const slideInterval = setInterval(moveToNextMember, slideDuration);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(slideInterval);
    };
  }, []);
  const currentMember = TestimonialData[switchMember];
  const handleMember = (index) => {
    setSwitchMember(index);
  };
  return (
    <section className="flex flex-col items-center justify-center pt-12  relative ">
      <div className="text-center pb-14">
        <h1 className="text-4xl font-bold text-secondary">What they've said</h1>
      </div>
      <main>
        {/* Mobile Devices */}
        <section className="flex flex-col items-center justify-center  mx-5  pt-5 lg:hidden">
          <picture className="text-center absolute top-[7.5rem] ">
            <img
              src={currentMember.image}
              className="w-24"
              alt={`${currentMember.name}`}
            />
          </picture>
          <div className="bg-Light-Gray text-center pb-8 pt-[4rem]">
            <h2 className="font-semibold text-secondary text-lg">
              {currentMember.name}
            </h2>
            <p className="text-Dark-Grayish-Blue text-md mx-[5rem] leading-7">
              {currentMember.feedback}
            </p>
          </div>
          <div className="flex gap-3 py-7">
            {TestimonialData.map((people, index) => (
              <div key={people.id}>
                <button
                  className={` w-3 h-3  rounded-full  ${
                    switchMember === index
                      ? 'bg-primary'
                      : 'bg-white border-2 border-primary'
                  }`}
                  onClick={() => {
                    handleMember(index);
                  }}
                ></button>
              </div>
            ))}
          </div>
        </section>
        {/* Medium Devices */}
        <section className="lg:flex xl:hidden items-center justify-center relative gap-4 mx-5 h-64 pt-9 hidden">
          {TestimonialData.slice(currentIndex, currentIndex + 2).map(
            (currentMember) => (
              <div key={currentMember.id} className="flex justify-center ">
                <picture className="text-center absolute top-[-0.5rem]">
                  <img
                    src={currentMember.image}
                    className="w-24"
                    alt={currentMember.name}
                  />
                </picture>
                <div className="bg-Light-Gray text-center pb-8 pt-[4rem]">
                  <h2 className="font-semibold text-secondary text-lg">
                    {currentMember.name}
                  </h2>
                  <p className="text-Dark-Grayish-Blue text-md mx-[5rem] leading-7">
                    {currentMember.feedback}
                  </p>
                </div>
              </div>
            ),
          )}
        </section>
        {/* Large Devices */}
        <section className="xl:flex items-center justify-center relative gap-4 mx-5 pt-9 h-64 hidden ">
          {TestimonialData.slice(currentIndex, currentIndex + 3).map(
            (currentMember) => (
              <div key={currentMember.id} className="flex justify-center ">
                <picture className="text-center absolute top-[-0.5rem]">
                  <img
                    src={currentMember.image}
                    className="w-24"
                    alt={currentMember.name}
                  />
                </picture>
                <div className="bg-Light-Gray text-center pb-8 pt-[4rem]">
                  <h2 className="font-semibold text-secondary text-lg">
                    {currentMember.name}
                  </h2>
                  <p className="text-Dark-Grayish-Blue text-md mx-[5rem] leading-7">
                    {currentMember.feedback}
                  </p>
                </div>
              </div>
            ),
          )}
        </section>
      </main>
      <div className=" lg:pt-[3rem] pb-11 pt-4">
        <Button
          customStyle={`bg-primary text-white`}
          customHover={` hover:opacity-80`}
        />
      </div>
    </section>
  );
};

export default Testimonials;
