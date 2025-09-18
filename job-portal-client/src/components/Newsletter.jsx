
import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText /> Email me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Get the latest job openings delivered to your inbox. No spam, just opportunities.
        </p>
        <form className="w-full space-y-4" aria-label="Newsletter signup">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue"
            required
            aria-label="Email address"
          />
          <button
            type="submit"
            className="w-full block py-2 bg-blue rounded text-white cursor-pointer font-semibold shadow hover:bg-blue/90 focus:outline-none focus:ring-2 focus:ring-blue"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* 2nd section */}
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket /> Get noticed faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Upload your resume and let top companies find you. Stand out from the crowd!
        </p>
        <button
          type="button"
          className="w-full block py-2 bg-blue rounded text-white cursor-pointer font-semibold shadow hover:bg-blue/90 focus:outline-none focus:ring-2 focus:ring-blue"
        >
          Upload your resume
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
