"use client";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import AllDomesticHolidays from "./AllDomesticHolidays";
import { packagePropsTypeForDomestic } from "@/utils/pacakageTypes";

export default function DomesticHolidays({
  packages,
}: packagePropsTypeForDomestic) {
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1); // Default to 1 card for mobile

  useEffect(() => {
    // Adjust the number of cards to show based on the screen size
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // 3 cards for laptop and above
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // 2 cards for tablets
      } else {
        setCardsToShow(1); // 1 card for mobile
      }
    };

    // Initial check
    updateCardsToShow();

    // Add event listener
    window.addEventListener("resize", updateCardsToShow);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handlePrevClick = () => {
    setCurrentDestinationIndex((prevIndex) =>
      prevIndex === 0 ? packages.length - cardsToShow : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentDestinationIndex((prevIndex) =>
      prevIndex === packages.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const isPrevDisabled = currentDestinationIndex === 0;
  const isNextDisabled = currentDestinationIndex >= packages.length - 1;

  return (
    <div className="mb-8 mt-6">
      <div className="w-full flex flex-col items-center mt-4">
        <div className="flex items-center justify-center w-full mb-4">
          <h1
            className="font-heading font-bold text-center 
                text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl"
          >
            Domestic Holidays
          </h1>
          {/* Buttons visible on laptop and above */}
          <div className="hidden md:flex space-x-2 absolute right-20  pr-9">
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
          <AllDomesticHolidays
            data={packages.slice(
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
  );
}
