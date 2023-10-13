import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setError(!isValidEmail(inputValue));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section>
      <form className="form-error">
        <div className="flex gap-4">
          <input
            type="email"
            className={`py-4 w-[23rem] lg:w-[15rem] text-Dark-Grayish-Blue pl-7 rounded-full focus:outline-none ${
              error ? 'border-red-500 border-2' : ''
            }`}
            placeholder="Updates in your inbox..."
            value={email}
            onChange={handleInputChange}
          />
          <button className="bg-primary text-white py-4 px-10 lg:px-8 rounded-full hover:opacity-90">
            Go
          </button>
        </div>
        {error && (
          <p className="text-red-500 pt-1 pl-4">Please insert a valid email</p>
        )}
      </form>
    </section>
  );
};

export default App;
