import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { PiCurrencyInrBold } from 'react-icons/pi';

interface VisaProps {
    id: string;
    image: string;
    cityName: string;
    countryName: string;
    visaRequirements: string;
    fees: number;
    processingTime: string;
    createdAt: string;
    updatedAt: string;
}

const VisaCard: React.FC<VisaProps> = ({
    id,
    image,
    cityName,
    countryName,
    visaRequirements,
    fees,
    processingTime,
    createdAt,
    updatedAt
}) => {
    return (
        <>
            <Link href={`visa/${id}`}>
                <div className="w-full md:w-[20rem] rounded-t-3xl flex flex-col">
                    <div className="relative">
                        <Image
                            src={image}
                            alt={id}
                            width={320}
                            height={200}
                            className="w-full h-[200px] rounded-t-xl object-cover"
                        />
                        <p className="flex items-center bg-[#00247D] text-white px-4 absolute bottom-5">
                            <span>
                                <PiCurrencyInrBold />
                            </span>
                            {fees}
                        </p>
                    </div>
                    <div className="py-4 space-y-3 h-full shadow-md shadow-gray-400 w-full">
                        <div className="flex items-center gap-2 px-3">
                            <h2 className="font-bold font-heading text-[20px]">{cityName}, {countryName}</h2>
                        </div>
                        <div className="flex justify-center items-center">
                        </div>
                        <div className="flex justify-center font-bold text-[14px] text-[#00247D]">
                            <Link href={`flight/${id}`}>
                                View Detail
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default VisaCard
