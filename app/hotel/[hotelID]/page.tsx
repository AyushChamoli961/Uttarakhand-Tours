import React from 'react'
import { prisma } from "@/lib/db";
import { parse } from "path";
import { currentProfile } from "@/lib/current-profile";
import HotelDetail from '@/components/HotelDetail/HotelDetail';

const page = async ({ params }: { params: { hotelID: string } }) => {
    const user = await currentProfile();
    const hotel = await prisma.hotel.findUnique({
        where: {
            id: parseInt(params.hotelID),
        },
        include: {
            images: true,
        }

    });

    console.log("the hotel is ", hotel);

    if (!hotel) {
        return <div>No hotel found for given ID</div>;
    }

    return (
        <>
            <HotelDetail  activeuser={user} hotel={hotel} />
        </>
    )
}
export default page
