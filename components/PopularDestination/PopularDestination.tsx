import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const PopularDestination = ({ destinations }: any) => {
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(1); // Track which image is selected

  const handlePrevClick = () => {
    setCurrentDestinationIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentDestinationIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const getVisibleDestinations = () => {
    let visibleDestinations = [];
    for (let i = 0; i < 4; i++) {
      visibleDestinations.push(
        destinations[(currentDestinationIndex + i) % destinations.length]
      );
    }
    return visibleDestinations;
  };

  const visibleDestinations = getVisibleDestinations();

  return (
    <div className="justify-center items-center mt-6 min-h-64">
      <div className="flex justify-center items-center mt-6">
        <h1 className="font-heading font-bold text-center text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
          Popular Destinations
        </h1>
      </div>
      <main className="flex w-10/12 mx-auto flex-col items-center justify-center p-4">
        {/* Mobile View */}
        <div className="relative w-full max-w-md flex items-center">
          <button
            title="left"
            onClick={handlePrevClick}
            className="bg-stone-500 text-white p-1 rounded-full duration-200 lg:hidden hover:bg-[#00247D]"
          >
            <AiOutlineArrowLeft />
          </button>
          <div className="lg:hidden relative flex justify-center items-center mx-1 w-full">
            <div className="w-full">
              <Image
                src={visibleDestinations[0].images[0].url}
                alt={visibleDestinations[0].title}
                width={400}
                height={250}
                className="rounded-lg object-cover w-full h-[16rem]"
              />
              <div className="absolute inset-0 flex flex-col rounded-lg items-center justify-center bg-black bg-opacity-50 text-white p-4">
                <Link
                  href={`/tour/${visibleDestinations[0].id}`}
                  className="p-2 px-4 py-1 text-white border border-white rounded-md"
                >
                  EXPLORE ALL
                </Link>
              </div>
            </div>
          </div>
          <button
            title="right"
            onClick={handleNextClick}
            className="bg-stone-500 text-white p-1 rounded-full lg:hidden duration-200 hover:bg-[#00247D]"
          >
            <AiOutlineArrowRight />
          </button>
        </div>

        {/* Laptop View */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-6 xl:gap-20 w-full mt-2">
          <div className="w-[230px] xl:w-[300px] p-4 text-center">
            <h1 className="flex flex-col">
              <div className="flex items-center">
                <p className="text-sm font-bold text-start mr-2 text-[#00247D]">
                  LOCATIONS
                </p>
                <span className="flex-1 border-[#00247D] mr-32" style={{ borderTopWidth: '3px' }}></span>
              </div>
              <p className="text-2xl font-bold text-start mt-2">
                {visibleDestinations[selectedIndex].title}
              </p>
            </h1>
            <p className="mt-4 text-start">
              {visibleDestinations[selectedIndex].description}
            </p>
            <div className="mt-4 flex justify-between sm:justify-start sm:gap-4 text-[#00247D]">
              <button
                onClick={handlePrevClick}
                className="p-3.5 border border-[#00247D] rounded-full"
              >
                <FiArrowLeft />

              </button>
              <button
                onClick={handleNextClick}
                className="p-3.5 border border-[#00247D] rounded-full"
              >
                <FiArrowRight/>
              </button>
            </div>
          </div>
          <div className="flex mx-2 justify-center items-center gap-4 xl:gap-10">
            {visibleDestinations.map((destination, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-transform duration-500`}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={destination.images[0].url}
                  alt={destination.title}
                  width={450}
                  height={900}
                  className={`rounded-lg object-cover h-[23.5rem] transition-all duration-500 ${index === selectedIndex ? "w-[15.8rem]" : "w-[10.6rem]"
                    }`}
                />
                {index === selectedIndex && (
                  <div className="absolute inset-0 flex flex-col rounded-lg items-center justify-center bg-black bg-opacity-70 text-white p-4 transition-opacity duration-500">
                    <h2 className="text-lg md:text-xl lg:text-3xl font-bold mb-2">
                      {destination.title}
                    </h2>
                    <p className="text-lg mb-4">3+ trips</p>
                    <Link
                      href={`/tour/${destination.id}`}
                      className="p-2 md:px-4 py-1 lg:px-6 lg:py-2 text-white border border-white rounded-md"
                    >
                      Explore All
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PopularDestination;
