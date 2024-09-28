"use client";

import { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import AllFlights from "./AllFlights";
import Image from "next/image";
import SkeletonCard from "./SkeletonCard";

const indianAirportCities = [
  "Agartala",
  "Agra",
  "Ahmedabad",
  "Aizawl",
  "Amritsar",
  "Aurangabad",
  "Bagdogra",
  "Bareilly",
  "Belgaum",
  "Bengaluru",
  "Bhopal",
  "Bhubaneswar",
  "Bilaspur",
  "Calicut",
  "Chandigarh",
  "Chennai",
  "Coimbatore",
  "Cooch Behar",
  "Daman",
  "Darbhanga",
  "Dehradun",
  "Delhi",
  "Dibrugarh",
  "Dimapur",
  "Diu",
  "Gaya",
  "Goa",
  "Gorakhpur",
  "Guwahati",
  "Hubli",
  "Hyderabad",
  "Imphal",
  "Indore",
  "Itanagar",
  "Jabalpur",
  "Jaipur",
  "Jammu",
  "Jamshedpur",
  "Jodhpur",
  "Jorhat",
  "Kannur",
  "Kochi",
  "Kolhapur",
  "Kolkata",
  "Kota",
  "Leh",
  "Lilabari",
  "Lucknow",
  "Ludhiana",
  "Madurai",
  "Mangalore",
  "Mumbai",
  "Mysore",
  "Nagpur",
  "Nashik",
  "Patna",
  "Pondicherry",
  "Port Blair",
  "Prayagraj",
  "Pune",
  "Raipur",
  "Rajahmundry",
  "Rajkot",
  "Ranchi",
  "Salem",
  "Shillong",
  "Silchar",
  "Siliguri",
  "Srinagar",
  "Surat",
  "Tezpur",
  "Thanjavur",
  "Thiruvananthapuram",
  "Tiruchirappalli",
  "Tirupati",
  "Udaipur",
  "Vadodara",
  "Varanasi",
  "Vijayawada",
  "Visakhapatnam",
  "Warangal",
];

export default function FlightsGrid({ flights }: any) {
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [fromCity, setFromCity] = useState("Delhi");
  const [toCity, setToCity] = useState("Mumbai");
  const [filteredFlights, setFilteredFlights] = useState(flights);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handlePrevClick = () => {
    setCurrentDestinationIndex((prevIndex) =>
      prevIndex === 0 ? filteredFlights.length - cardsToShow : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentDestinationIndex((prevIndex) =>
      prevIndex === filteredFlights.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const isPrevDisabled = currentDestinationIndex === 0;
  const isNextDisabled =
    currentDestinationIndex >= filteredFlights.length - cardsToShow;

  const handleSearch = () => {
    const filtered = flights.filter(
      (flight: any) =>
        flight.departureCity.toLowerCase() === fromCity.toLowerCase() &&
        flight.arrivalCity.toLowerCase() === toCity.toLowerCase()
    );
    setFilteredFlights(filtered);
    console.log(filtered);
    setCurrentDestinationIndex(0);
    const element = document.getElementById("searchResults");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center items-center h-screen overflow-hidden z-0">
        <Image
          src="/header-image.jpeg"
          alt="Background Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
        <div className="bg-white py-8 px-6 rounded-lg shadow-lg md:w-6/12 w-10/12 mx-auto mt-10">
          <h2 className="md:text-xl font-bold mb-4 text-center">
            ENQUIRE MILLIONS OF AFFORDABLE FLIGHTS. ON YOUR FINGERTIPS.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border px-3 my-[3rem] rounded-lg">
            <div className="md:col-span-1 flex flex-col border-r justify-center p-3">
              <label className="block text-sm font-medium text-gray-700">
                From
              </label>
              <select
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="mt-1 p-2  rounded-md w-full border-none text-[1.4rem] font-bold outline-none  my-3"
              >
                {indianAirportCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1 flex flex-col justify-center px-3">
              <label className="block text-sm font-medium text-gray-700">
                To
              </label>
              <select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="mt-1 p-2 rounded-md w-full border-none outline-none text-[1.4rem] font-bold my-3"
              >
                {indianAirportCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex relative justify-center bg-slate-400">
            <button
              onClick={handleSearch}
              className="bg-[#00247D] mt-2 absolute text-[0.8rem] text-white px-8 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <div id="searchResults" className="py-28">
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-center w-full mb-4">
            <h1 className="font-heading font-bold text-center text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
              Flights
            </h1>
            <div className="hidden md:flex space-x-2 absolute right-14 pr-6">
              <button
                title="left"
                onClick={handlePrevClick}
                className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
                disabled={isPrevDisabled}
              >
                <AiOutlineArrowLeft />
              </button>
              <button
                title="right"
                disabled={isNextDisabled}
                onClick={handleNextClick}
                className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-auto overflow-x-hidden">
          <div>
            <AllFlights
              data={filteredFlights.slice(
                currentDestinationIndex,
                currentDestinationIndex + cardsToShow
              )}
            />
          </div>
          <div className="flex space-x-8 md:hidden items-center justify-center mt-4">
            <button
              title="left"
              onClick={handlePrevClick}
              className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              title="right"
              onClick={handleNextClick}
              className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
