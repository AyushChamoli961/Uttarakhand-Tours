"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ActiveUser {
  userId: string;
  name: string;
  email: string;
  phone: string | null;
}

const Booking = ({ title, inquiryType, activeuser }: any) => {
  const [inquiryText, setInquiryText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // person not needed anyways  ->
  const [person, setPerson] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = {
      userId: activeuser.userId,
      relatedId: title.id,
      inquiryType,
      inquiryText,
    };

    try {
      const response = await axios.post("/api/create_enquiry", data);
      console.log("Inquiry submitted:", response.data);
      setInquiryText("");
      // You might want to add some success feedback here
    } catch (err) {
      console.error("Error submitting inquiry:", err);
      setError("Failed to submit inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };



  const amountPerPerson = title.fees ? title.fees : title.price;

  const router = useRouter();

  return (
    <form onSubmit={handleSubmit} className="border rounded-lg pb-10">
      <div className="xl:block rounded-lg">
        <div className="bg-[#272424] text-white rounded-t-lg">
          <h1 className="flex items-baseline py-1 rounded-lg justify-between px-2 text-[1.5rem] font-bold">
            ₹{amountPerPerson}
            <span className="font-normal font-text text-[1rem]">
              Per Person
            </span>
          </h1>
        </div>

        <div className="flex my-[2rem] px-4 justify-between items-baseline">
          <label htmlFor="person" className="text-[0.9rem]">
            Person
          </label>
          <input
            min={1}
            type="number"
            name="person"
            onChange={(e) => setPerson(parseInt(e.target.value))}
            id="person"
            value={person}
            placeholder="0"
            className="w-10 h-10 text-center border border-slate-300 outline-none"
          />
          <p>x</p>
          <p className="flex items-baseline font-text">₹{amountPerPerson}</p>
        </div>

        <div className="text-black w-full px-5">
          <textarea
            className="w-full border outline-none p-2"
            value={inquiryText}
            onChange={(e) => setInquiryText(e.target.value)}
            required
            placeholder="Enter your inquiry here..."
          ></textarea>
        </div>

        {error && <div className="text-red-500 px-5 mt-2">{error}</div>}

        <div className="mx-5 text-white pt-10">
          <button
            type="submit"
            className="bg-[#00247D] py-2 w-full text-center mx-auto font-text text-[0.9rem]"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              "Enquire"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Booking;
