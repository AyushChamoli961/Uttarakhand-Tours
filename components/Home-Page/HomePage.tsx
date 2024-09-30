'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import PopularDestination from "@/components/PopularDestination/PopularDestination";
import Exclusive from "@/components/Exclusive-Deals/Exclusive";
import DomesticHolidays from "@/components/DomesticHolidays/DomesticHolidays";
import InternationalHolidays from "@/components/InternationalHolidays/InternationalHolidays";
import Speciality from "@/components/Speciality/Speciality";
import Besttours from "@/components/Best-Tours/BestTours";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import FaqsList from "@/components/Faqs/FaqsList";
import SearchResult from "../package-search-result/SearchResults";

const HomePage = ({ packages}: any) => {
  const [destination, setDestination] = useState("");
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [applySearchFilter, setApplySearchFilter] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const allDestinations = Array.from(
    new Set(packages.flatMap((pack: any) => [pack.title]))
  );

  useEffect(() => {
    if (destination.length > 0) {
      const filteredSuggestions = allDestinations.filter((dest) =>
        //@ts-ignore
        dest.toLowerCase().includes(destination.toLowerCase())
      );
      //@ts-ignore
      setSuggestions(filteredSuggestions.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [destination]);

  const handleDestinationChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDestination(e.target.value);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setDestination(suggestion);
    setSuggestions([]);
  };

  const filterPackages = () => {
    return packages.filter((pack: any) => {
      return (
        pack.title.toLowerCase().includes(destination.toLowerCase()) 
      );
    });
  };

  const handleSearch = () => {
    if (!destination) {
      alert("Please enter a destination");
      return;
    }
    setFilteredPackages(filterPackages());
    setApplySearchFilter(true);
    const element = document.getElementById("search-result");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const clearFilters = () => {
    setDestination("");
    setFilteredPackages(packages);
    setApplySearchFilter(false);
  };

  const domesticPackages = filteredPackages.filter(
    (pack: any) => pack.tripType === "TOUR"
  );

  const internationalPackages = filteredPackages.filter(
    (pack: any) => pack.tripType === "TREK"
  );

  return (
    <div className="overflow-x-hidden">
      <div className="relative flex flex-col justify-center items-center h-screen overflow-hidden z-0">
        <Image
          src="/header-image.jpeg"
          alt="Background Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
        <div className="space-y-4 text-white text-center w-11/12 relative z-10 px-4">
          <h1 className="text-[3rem] font-heading font-bold drop-shadow-lg">
            Where do you want to go?
          </h1>
          <p className="capitalize mb-8 font-text text-[1.2rem] drop-shadow-md">
            Trips, experiences, and places. All in one service.
          </p>
        </div>

        {/* Big Search Box */}
        <div className="relative z-10 w-full max-w-3xl px-4 mt-8">
          <div className="flex items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Enter destination"
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-l-lg"
                value={destination}
                onChange={handleDestinationChange}
              />
              {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-6 py-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              className="bg-[#00247D] text-white hover:bg-[#01174f] transition-colors duration-200 px-6 py-4 text-lg rounded-r-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <PopularDestination destinations={packages} />
      <Exclusive data={packages} />

      <div
        id="search-result"
        className="relative w-full mt-16 h-[200px] md:h-[280px] lg:h-[380px]"
      >
        <Image
          src="/banner.jpeg"
          layout="fill"
          objectFit="cover"
          objectPosition="0 20%"
          alt="Descriptive Alt Text"
          className="w-full h-full"
        />
      </div>

      {applySearchFilter ? (
        <div>
          <SearchResult
            packages={filteredPackages}
            clearFilters={clearFilters}
          />
        </div>
      ) : (
        <div>
          <DomesticHolidays packages={domesticPackages} />
          <InternationalHolidays packages={internationalPackages} />
        </div>
      )}

      <Speciality />
      <Besttours packages={packages} />
      <WhyChooseUs />
      <ContactUs />
      <FaqsList />
    </div>
  );
};

export default HomePage;
