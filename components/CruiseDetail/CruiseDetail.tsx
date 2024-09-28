import React from "react";
import Booking from "../Booking/Booking";

interface Cruise {
  id: number;
  cruiseName: string;
  cruiseLine: string;
  departurePort: string;
  departureDate: Date;
  arrivalPort: string;
  arrivalDate: Date;
  itinerary: string;
  price: number;
  cabinsAvailable: number;
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

interface CruiseProps {
  cruise: Cruise;
  activeuser: ActiveUser | null;
}

const CruiseDetail = ({ cruise, activeuser }: CruiseProps) => {
  const nights = Math.ceil(
    (new Date(cruise.arrivalDate).getTime() -
      new Date(cruise.departureDate).getTime()) /
      (1000 * 3600 * 24)
  );
  const days = nights + 1;

  const formattedDepartureDate = new Date(
    cruise.departureDate
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedArrivalDate = new Date(cruise.arrivalDate).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div className="py-28 flex flex-col lg:flex-row gap-10 xl:gap-20 w-10/12 mx-auto">
      <div className="w-full lg:w-2/3">
        <h2 className="font-heading font-bold text-[1rem] text-center lg:text-start md:text-[2rem]">
          {nights} Nights {days} Days {cruise.arrivalPort}
        </h2>
        <div className="mx-auto p-4 bg-white shadow-lg rounded-lg mt-2">
          {/* Header */}
          <div className="bg-[#00247D] text-white p-3 rounded-t-lg font-semibold flex justify-between">
            <span>{`${days} DAY | ${cruise.cruiseName} | ${formattedDepartureDate}`}</span>
          </div>
          {/* Image and Details */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <div className="md:w-1/3 w-full relative">
              <img
                src={cruise.image}
                alt={cruise.cruiseName}
                className="w-full h-auto rounded-md"
              />
              <div className="absolute bottom-0 bg-black rounded-b-lg bg-opacity-60 w-full text-center mt-2 py-3 text-white">
                {`${days} DAY ${cruise.cruiseName}`}
              </div>
            </div>
            <div className="md:w-2/3 w-full pl-4 flex justify-between">
              {/* Left section */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-ship mr-2"></i>
                  <span>{cruise.cruiseLine}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>{cruise.itinerary}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-calendar-day mr-2"></i>
                  <span>
                    {formattedDepartureDate} - {formattedArrivalDate}
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-anchor mr-2"></i>
                  <span>{cruise.cabinsAvailable} Cabins Available</span>
                </div>
              </div>
              <div className="text-end pt-6">
                <p>From</p>
                <p className="font-bold text-[1.4rem]">INR ₹{cruise.price}</p>
                <p className="text-[0.8rem]">Includes taxes</p>
              </div>
            </div>
          </div>
          <hr className="my-8 border-[0.2] border-black" />

          {/* Pricing Table */}
          <div className="bg-[#eae9e9] rounded-md">
            <table className="w-full text-center text-[0.6rem] md:text-[0.9rem]">
              <thead className="border-b border-black">
                <tr>
                  <th className="p-2">DATE</th>
                  <th className="p-2 bg-[#D9D9D9]">INTERIOR</th>
                  <th className="p-2">OCEANVIEW</th>
                  <th className="p-2 bg-[#D9D9D9]">BALCONY</th>
                  <th className="p-2">SUITE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">{formattedDepartureDate}</td>
                  <td className="p-2">₹{cruise.price}</td>
                  <td className="p-2 font-bold">SOLD OUT</td>
                  <td className="p-2">₹{cruise.price}</td>
                  <td className="p-2">₹{cruise.price}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Info */}
          <div className="bg-[#D9D9D9] my-6 py-3 space-y-4 px-4 rounded-md flex justify-between flex-col md:flex-row">
            <div className="grid grid-cols-1 gap-x-8 gap-y-3">
              <div className="flex items-center">
                <i className="fas fa-ban mr-2"></i>
                <span>Non Refundable Deposit</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-glass-cheers mr-2"></i>
                <span>Drink Specials</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-tag mr-2"></i>
                <span>Special Promotions</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#D9D9D9] rounded-md p-4 flex justify-between items-center">
            <p className="text-sm text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 h-full">
        <Booking
          inquiryType={"CRUISE"}
          title={cruise}
          activeuser={activeuser}
        />
      </div>
    </div>
  );
};

export default CruiseDetail;
