"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import AllCruises from "./AllCruises";
import SkeletonCard from "./SkeletonCard";
import Image from "next/image";

const CruisesGrid = ({ cruises }: any) => {
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

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
      prevIndex === 0 ? cruises.length - cardsToShow : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentDestinationIndex((prevIndex) =>
      prevIndex === cruises.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const isPrevDisabled = currentDestinationIndex === 0;
  const isNextDisabled = currentDestinationIndex >= cruises.length - 1;

  return (
    <div>
      <div className="py-28">
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-center w-full mb-4">
            <h1 className="font-heading font-bold text-center text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
              Sail from India
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
                onClick={handleNextClick}
                className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
                disabled={isNextDisabled}
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-auto overflow-x-hidden">
          (
          <AllCruises
            data={cruises.slice(
              currentDestinationIndex,
              currentDestinationIndex + cardsToShow
            )}
          />
          )
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
};

export default CruisesGrid;
