"use client";
import React, { useState } from "react";
import {
  IoLocationSharp,
  IoRestaurantOutline,
  IoWifiOutline,
} from "react-icons/io5";
import { MdRoomPreferences } from "react-icons/md";
import { GrSwim } from "react-icons/gr";
import Booking from "../Booking/Booking";
import Image from "next/image";

interface HotelImage {
  url: string;
}

interface Hotel {
  id: number;
  images: HotelImage[];
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

interface ActiveUser {
  userId: string;
  name: string;
  email: string;
  phone: string | null;
}

interface HotelProps {
  hotel: Hotel;
  activeuser: ActiveUser | null;
}

const HotelDetail = ({ hotel, activeuser }: HotelProps) => {
  const [idx, setIdx] = useState(0);

  return (
    <div className="py-28 flex flex-col lg:flex-row gap-10 xl:gap-20 w-10/12 mx-auto">
      <div className="w-full lg:w-2/3">
        <h2 className="font-heading font-bold text-[1rem] text-center lg:text-start md:text-[2rem]">
          {hotel.name}
        </h2>
        <div className=" mx-auto lg:mx-0 rounded-md bg-white shadow-md mt-3">
          <div className="bg-[#313132] text-white rounded-t-md px-[1.5rem]">
            <p className="flex font-text gap-2 items-center py-4">
              <span>
                <IoLocationSharp />
              </span>
              <span className="font-semibold font-text">
                {hotel.address}, {hotel.city}, {hotel.state}, {hotel.country}
              </span>
              <span className="ml-2">•</span>
              <span className=" text-[1rem] font-text">Show map</span>
            </p>
          </div>

          <div className="w-11/12 mx-auto my-6">
            <div className="flex flex-col-reverse lg:flex-row w-full gap-4 mb-2 md:mb-6">
              {hotel.images.length > 0 && (
                <>
                  <div className="lg:w-1/3 flex lg:flex-col gap-2 md:gap-4">
                    <div className="w-1/2 lg:w-full h-[5rem] sm:h-[12rem] lg:h-[9.5rem] overflow-hidden">
                      <Image
                        src={hotel.images[0].url}
                        width={500}
                        height={500}
                        alt="#"
                        onClick={() => setIdx(0)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/2 lg:w-full h-[5rem] sm:h-[12rem] lg:h-[9.5rem] overflow-hidden">
                      <Image
                        src={hotel.images[1]?.url}
                        width={500}
                        height={500}
                        alt="#"
                        onClick={() => setIdx(1)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-2/3 h-[15rem] sm:h-[25rem] lg:h-[20rem] bg-red-100 overflow-hidden">
                    <Image
                      src={hotel.images[idx]?.url}
                      width={500}
                      height={500}
                      alt="#"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-4 w-full">
              {hotel.images.length > 2 && (
                <>
                  {hotel.images.slice(2, 6).map((image, index) => (
                    <div key={index} className="relative w-full h-full">
                      <Image
                        src={image.url}
                        width={500}
                        height={500}
                        alt={`Image ${index + 3}`}
                        onClick={() => setIdx(index + 2)}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="w-11/12 mx-auto">
            <p className="py-8 font-text">
              This is a sample description for {hotel.name}. It is located at{" "}
              {hotel.address} in {hotel.city}, {hotel.state}, {hotel.country}.
              The price per night is ₹{hotel.price}.
            </p>
          </div>

          <div className="space-y-3 mx-auto w-11/12 pb-6">
            <h2 className="font-bold text-[1rem]">Most popular facilities</h2>
            <div className="text-[#555555] flex flex-wrap gap-6 text-[1.2rem]">
              <p className="flex items-center gap-2">
                <span>
                  <IoRestaurantOutline />
                </span>
                Restaurant
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <MdRoomPreferences />
                </span>
                Room service
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <IoWifiOutline />
                </span>
                Free WIFI
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <GrSwim />
                </span>
                Swimming Pool
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 h-full">
        <Booking inquiryType={"HOTEL"} title={hotel} activeuser={activeuser} />
      </div>
    </div>
  );
};

export default HotelDetail;
