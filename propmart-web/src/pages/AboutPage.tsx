import React from "react";

const About: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to <span className="font-semibold">PropMart</span>, your trusted
        platform for buying, selling, and renting properties. We aim to make
        real estate transactions simple, transparent, and accessible for
        everyone.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p className="text-gray-700">
        To connect property owners with potential buyers and tenants while
        ensuring secure and seamless experiences for all users.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Our Team</h2>
      <p className="text-gray-700">
        We are a passionate group of developers, designers, and real estate
        professionals working together to build the future of property
        platforms.
      </p>
    </div>
  );
};

export default About;
