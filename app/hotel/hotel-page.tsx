"use client";
import React, { useState, useEffect } from "react";
import { prisma } from "@/lib/db";
import HotelsGrid from "@/components/HotelsGrid/HotelsGrid";
import Image from "next/image";
import { HotelImage } from "@prisma/client";

interface Hotel {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  images: HotelImage[];
}

const HotelPage = ({ hotels }: { hotels: Hotel[] }) => {
  const [searchCity, setSearchCity] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setshowSuggestions] = useState(false);

  // Extract unique cities from hotels
  const allCities = Array.from(new Set(hotels.map((hotel) => hotel.city)));

  useEffect(() => {
    if (searchCity.length > 0) {
      const filteredSuggestions = allCities.filter((city) =>
        city.toLowerCase().includes(searchCity.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 5)); // Limit to 5 suggestions
    } else {
      setSuggestions([]);
    }
  }, [searchCity]);

  const handleSearch = () => {
    const filtered = hotels.filter((hotel) =>
      hotel.city.toLowerCase().includes(searchCity.toLowerCase())
    );

    setFilteredHotels(filtered);
    const element = document.getElementById("search-result");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchCity(suggestion);
    setSuggestions([]);
    setshowSuggestions(false);
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center items-center h-screen overflow-hidden z-0">
        {/* Background Image */}
        <Image
          src={"/header-image.jpeg"}
          alt="Background Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />

        {/* Search Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-10/12 md:w-5/12 mx-auto mt-10">
          <h2 className="text-xl font-bold mb-4">BOOK HOTEL</h2>

          <div className="grid grid-cols-1 gap-4 border px-3 my-[2rem] rounded-lg">
            {/* Destination Input */}
            <div className="md:col-span-1 relative py-3">
              <label
                htmlFor="destination"
                className="block text-gray-600 text-sm mb-1"
              >
                Destinations
              </label>
              <input
                type="text"
                id="destination"
                placeholder="Enter city"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={searchCity}
                onChange={(e) => {
                  setshowSuggestions(true);
                  setSearchCity(e.target.value);
                }}
              />
              {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex relative justify-center">
            <button
              className="bg-[#00247D] mt-2 absolute text-[0.8rem] text-white px-8 py-2 rounded-md hover:bg-blue-600 transition-colors"
              onClick={handleSearch}
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <div id="search-result"></div>
      <HotelsGrid hotels={filteredHotels} />
    </div>
  );
};

export default HotelPage;
