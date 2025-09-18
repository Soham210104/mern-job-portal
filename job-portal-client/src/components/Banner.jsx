import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ handleInputChange, query }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 md:py-20 py-14 px-4">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find your <span className="text-blue">new job</span> today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of jobs in the computer, engineering, and technology sectors are waiting for you.
      </p>

      <form className="w-full" role="search" aria-label="Job search">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center">
          <div className="flex relative md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue md:w-1/2 w-full">
            <FiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              className="block flex-1 border-0 bg-transparent py-2 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="What position are you looking for?"
              onChange={handleInputChange}
              value={query}
              aria-label="Job title"
            />
          </div>

          <div className="flex relative md:rounded-none rounded ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue md:w-1/3 w-full">
            <FiMapPin className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="location"
              id="location"
              className="block flex-1 border-0 bg-transparent py-2 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Location"
              onChange={() => {}}
              value={""}
              aria-label="Location"
            />
          </div>

          <button
            type="submit"
            className="bg-blue py-2 px-8 text-white font-semibold rounded md:rounded-e-md md:rounded-s-none shadow hover:bg-blue/90 focus:outline-none focus:ring-2 focus:ring-blue"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
