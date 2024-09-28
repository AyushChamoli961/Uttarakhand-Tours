import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiCurrencyInrBold } from 'react-icons/pi';

interface HotelImage {
    url: string;
}

interface HotelProps {
    id: string;
    images: HotelImage[];
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    price: number;
    createdAt: string;
    updatedAt: string;
}

const HotelCard: React.FC<HotelProps> = ({
    id,
    images,
    name,
    address,
    city,
    state,
    country,
    price,
    createdAt,
    updatedAt,
}) => {
    return (
        <>
            <Link href={`hotel/${id}`}>
                <div className="w-full md:w-[20rem] rounded-t-3xl flex flex-col h-fit">
                    <div className="relative">
                        {images.length > 0 && (
                            <Image
                                src={images[0].url}
                                alt={name}
                                width={320}
                                height={200}
                                className="w-full h-[200px] rounded-t-xl object-cover bg-gray-300"
                            />
                        )}
                        <p className="flex items-center bg-[#00247D] text-white px-4 absolute bottom-5">
                            <span>
                                <PiCurrencyInrBold />
                            </span>
                            {price}
                        </p>
                    </div>
                    <div className="py-4 space-y-3 h-full shadow-md shadow-gray-400 w-full">
                        <div className="flex items-center gap-2 px-3">
                            <h2 className="font-bold font-heading text-[20px]">{name}</h2>
                        </div>
                        <div className="flex justify-center items-center">
                        </div>
                        <div className="flex justify-center font-bold text-[14px] text-[#00247D]">

                            View Detail
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default HotelCard;
