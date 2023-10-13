import React from 'react';
import Navbar from './containers/Navbar';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Testimonials from './containers/Testimonials';
import Features from './containers/Features';
import Banner from './containers/Banner';

const App = () => {
  return (
    <section className="bg-pattern">
      <div className="px-8 pt-12 md:pt-[4rem]">
        <Navbar />
      </div>
      <div className="lg:mx-[7rem]">
        <Header />
      </div>
      <div className="md:mx-9 lg:mx-[7rem] ">
        <Features />
      </div>
      <div className="py-[9rem]">
        <Testimonials />
      </div>
      <Banner />
      <Footer />
    </section>
  );
};

export default App;
