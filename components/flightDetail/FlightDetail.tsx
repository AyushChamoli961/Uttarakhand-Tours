"use client";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { FaPlane } from "react-icons/fa";
import { TfiTime } from "react-icons/tfi";
import { TfiIdBadge } from "react-icons/tfi";
import { TfiCalendar } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { DateRangePicker } from "react-date-range";
import axios from "axios";
import { useRouter } from "next/navigation";
import Booking from "../Booking/Booking";

interface Flight {
  id: number;
  flightNumber: string;
  airline: string;
  departureCity: string;
  departureAirport: string;
  departure: Date;
  arrivalCity: string;
  arrivalAirport: string;
  arrival: Date;
  duration: number;
  price: number;
  seatsAvailable: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ActiveUser {
  userId: string;
  name: string;
  email: string;
  phone: string | null;
}

interface FlightProps {
  flight: Flight;
  activeuser: ActiveUser | null;
}

const FlightDetail = ({ flight, activeuser }: FlightProps) => {
  // Format the date and time for display
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  // Convert duration from minutes to hours and minutes
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <>
      <div className="py-28 flex flex-col lg:flex-row gap-10 xl:gap-20 w-10/12 mx-auto ">
        <div className="w-full lg:w-2/3">
          <h2 className="font-heading font-bold text-[1rem] text-center lg:text-start md:text-[2rem]">
            Flight From {flight.departureCity} to {flight.arrivalCity} on{" "}
            {formatDate(flight.departure)}
          </h2>

          {/* Details */}
          <div className=" rounded-md bg-white shadow-md mt-6">
            {/* Flight name */}
            <div className="bg-[#313132] text-white rounded-t-md">
              <p className="flex md:gap-4 gap-2 items-center py-4 px-[2rem] md:px-[3rem]">
                <span className="font-semibold font-text">
                  {flight.airline}
                </span>
                <span>•</span>
                {/* <span className="ml-2 text-sm font-text">Economy</span>
                        <span>•</span> */}
                <span className="text-sm font-text">{flight.flightNumber}</span>
              </p>
            </div>

            {/* Flight time & date */}
            <div className="w-11/12 mx-auto py-[3rem] flex flex-col items-center text-center gap-4 md:flex-row">
              {/* Left side section */}
              <div>
                <h3 className="text-base font-text font-semibold text-[#616060]">
                  DEPART
                </h3>
                <div className="mt-4 font-text">
                  <div className="text-gray-400 text-[1rem]">
                    {formatDate(flight.departure)}
                  </div>
                  <div className="text-[1.5rem] font-bold text-[#222222]">
                    {flight.departureCity} {formatTime(flight.departure)}
                  </div>
                  <div className="text-[1rem] text-gray-400">
                    {flight.departureAirport}
                  </div>
                </div>
              </div>

              {/* Middle section */}
              <div className="flex items-center">
                <div className="flex items-center">
                  <span>
                    <GoDotFill />
                  </span>
                  <hr className="border-blue-950 border-2 w-[4rem] border-dashed" />
                </div>
                <div className="mt-6 text-center">
                  <p className="bg-[#C4D1F0] px-4 py-1 rounded-2xl">
                    {formatDuration(flight.duration)}
                  </p>
                  <p className="text-gray-400 text-[1rem]">No Stop</p>
                </div>
                <div className="flex items-center">
                  <hr className="border-blue-950 border-2 w-[4rem] border-dashed" />
                  <span>
                    <GoDotFill />
                  </span>
                </div>
                <div className="hidden md:block">
                  <FaPlane className="text-[1.4rem] text-slate-400" />
                </div>
              </div>

              {/* Right section */}
              <div className="mt-4">
                <h3 className="text-base font-text font-semibold text-[#616060]">
                  ARRIVE
                </h3>
                <div className="mt-4 font-text">
                  <div className="text-gray-400 text-[1rem]">
                    {formatDate(flight.arrival)}
                  </div>
                  <div className="text-[1.5rem] font-bold text-[#222222]">
                    {flight.arrivalCity} {formatTime(flight.arrival)}
                  </div>
                  <div className="text-[1rem] text-gray-400">
                    {flight.arrivalAirport}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-full">
          <Booking
            title={flight}
            inquiryType={"FLIGHT"}
            activeuser={activeuser}
          />
        </div>
      </div>
    </>
  );
};

export default FlightDetail;
