"use client";

import React, { useState } from "react";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    tripPlan: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(formData);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxhjaKTaCslmSovRS4GrDWmfNL-5T3HYc12FzTjW4uwTnwA7FwgeIt2tLSMmnP9rIq2/exec",
      {
        method: "POST",
        body: new URLSearchParams(formData),
      }
    );

    const result = await response.json();
    if (result.result === "success") {
      setIsLoading(false);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        destination: "",
        tripPlan: "",
      });
    } else {
      setIsLoading(false);
      alert("Error sending message.");
    }
  };

  return (
    <div id="contact-us">
      <div className="w-10/12 lg:w-8/12 flex flex-col mx-auto gap-4 items-center my-[6rem]">
        <h3 className="font-text font-semibold text-center text-[0.8rem]">
          DISCOVER YOUR NEXT ADVENTURE WITH US
        </h3>
        <h1 className="font-heading text-[2rem] font-bold">Contact Us</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 items-end"
        >
          {/* Name */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="name">
              Your name <sup>*</sup>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-black outline-none rounded-2xl py-2 px-3"
              placeholder="Enter your name here"
            />
          </div>

          {/* Email */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-black outline-none rounded-2xl py-2 px-3"
              placeholder="Enter your email address here"
            />
          </div>

          {/* Phone */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="phone">
              Phone number <sup>*</sup>
            </label>
            <input
              type="number"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-black outline-none rounded-2xl py-2 px-3"
              placeholder="Enter your phone number here"
            />
          </div>

          {/* Destination */}
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="destination">
              Destination <sup>*</sup>
            </label>
            <select
              id="destination"
              value={formData.destination}
              onChange={handleChange}
              className="border border-black outline-none rounded-2xl py-2 px-3"
            >
              <option value="">Select a destination</option>
              <option value="Himachal">Himachal</option>
              <option value="Goa">Goa</option>
              <option value="Kerala">Kerala</option>
              <option value="Rajasthan">Rajasthan</option>
            </select>
          </div>

          {/* Trip Plan */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="tripPlan">
              Let us know about your trip plan! (optional)
            </label>
            <textarea
              id="tripPlan"
              rows={5}
              value={formData.tripPlan}
              onChange={handleChange}
              placeholder="Let us know about your trip plan..."
              className="border border-black outline-none rounded-2xl py-1 px-3"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-darkBlue w-32 md:w-52  px-5 py-3 rounded-3xl font-text font-semibold text-white bg-[#004cff] transition duration-300 ease-in-out transform hover:scale-105 mt-4"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
