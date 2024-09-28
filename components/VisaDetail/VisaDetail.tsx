import React from "react";
import Booking from "../Booking/Booking";

interface Visa {
  id: number;
  image: string;
  cityName: string;
  countryName: string;
  visaRequirements: string;
  fees: number;
  processingTime: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ActiveUser {
  userId: string;
  name: string;
  email: string;
  phone: string | null;
}

interface VisaProps {
  visa: Visa;
  activeuser: ActiveUser | null;
}

const VisaDetail = ({ visa, activeuser }: VisaProps) => {
  return (
    <div className="py-28 flex flex-col lg:flex-row gap-10 xl:gap-20 w-10/12 mx-auto">
      {/* Left Section */}
      <div className="w-full lg:w-2/3">
        <h2 className="font-heading font-bold text-[1.5rem] text-center lg:text-start md:text-[2rem]">
          Visa for {visa.cityName}, {visa.countryName}
        </h2>

        {/* Visa Info Block */}
        <div className="mx-auto lg:mx-0 rounded-md bg-white shadow-md mt-5">
          {/* Header */}
          <div className="bg-[#313132] text-white rounded-t-md px-6 py-4">
            <h3 className="font-text text-lg">Visa Requirements</h3>
          </div>

          {/* Visa Details */}
          <div className="p-6 space-y-4">
            {/* Visa Image */}
            <img
              src={visa.image}
              alt={`${visa.cityName} visa`}
              className="w-full h-auto rounded-md"
            />

            {/* Requirements */}
            <div>
              <h4 className="font-heading font-semibold text-[1.2rem]">
                Requirements:
              </h4>
              <p className="font-text text-[1rem] leading-relaxed">
                {visa.visaRequirements}
              </p>
            </div>

            {/* Fees and Processing Time */}
            <div className="flex justify-between items-center mt-4">
              <div>
                <h4 className="font-heading font-semibold text-[1.2rem]">
                  Fees:
                </h4>
                <p className="font-text">₹{visa.fees.toLocaleString()}</p>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-[1.2rem]">
                  Processing Time:
                </h4>
                <p className="font-text">{visa.processingTime} Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Booking Section) */}
      <div className="w-full lg:w-1/3 h-full">
        <Booking
          inquiryType={"VISACITY"}
          title={visa}
          activeuser={activeuser}
        />
      </div>
    </div>
  );
};

export default VisaDetail;
