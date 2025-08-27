import React from "react";

const Career: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Join Our Team</h1>
          <p className="text-lg text-gray-600">
            Explore exciting career opportunities with us.
          </p>
        </div>

        {/* Open Positions Section */}
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Frontend Developer</h2>
            <p className="text-sm text-gray-500 mb-2">Location: Remote</p>
            <p className="mb-4 text-gray-600">
              We’re looking for a React developer with 2+ years of experience in building scalable UI.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
            >
              Apply Now
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">UI/UX Designer</h2>
            <p className="text-sm text-gray-500 mb-2">Location: Bengaluru</p>
            <p className="mb-4 text-gray-600">
              Help us design intuitive and elegant user experiences across our web products.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
            >
              Apply Now
            </a>
          </div>

          {/* Add more roles as needed */}
        </div>

        {/* Footer Message */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          Didn’t find a position that fits?{" "}
          <a href="/contact" className="text-blue-600 underline">
            Contact us
          </a>{" "}
          anyway. We’re always hiring talented people!
        </div>
      </div>
    </div>
  );
};

export default Career;
