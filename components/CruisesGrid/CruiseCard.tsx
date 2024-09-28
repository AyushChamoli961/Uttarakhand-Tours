import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { PiCurrencyInrBold } from "react-icons/pi";

interface CruiseProps {
    id: string;
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

const CruiseCard: React.FC<CruiseProps> = ({
    id,
    image,
    cruiseLine,
    cruiseName,
    departurePort,
    departureDate,
    arrivalPort,
    arrivalDate,
    itinerary,
    cabinsAvailable,
    price,
    createdAt,
    updatedAt,
}) => {
    const nights = Math.ceil((new Date(arrivalDate).getTime() - new Date(departureDate).getTime()) / (1000 * 3600 * 24));
    const days = nights + 1;

    return (
        <Link href={`cruise/${id}`}>
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
                        {price}
                    </p>
                </div>
                <div className="py-4 h-full shadow-md shadow-gray-400 w-full">
                    <div className="flex items-center gap-2 px-3">
                        <h2 className="font-bold font-heading text-[20px]">{nights} Nights {days} Days {arrivalPort}</h2>
                    </div>
                    <div className="px-3 text-[14px] mt-2">
                        <ul className='list-disc ml-6'>
                            <li>Inclusive of all meals at Food Court & Starlight restaurant</li>
                            <li>Jain food available at Starlight</li>
                            <li>All-inclusive beverage package</li>
                        </ul>
                    </div>
                    <div className="flex justify-center font-bold text-[14px] text-[#00247D] mt-4">
                        View Dates
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CruiseCard;
