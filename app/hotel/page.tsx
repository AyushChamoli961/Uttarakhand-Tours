import React, { Suspense } from 'react';
import { prisma } from "@/lib/db";
import HotelPage from './hotel-page';

const Page = async () => {
  const hotels = await prisma.hotel.findMany({
    include: {
      images: true,
    },
  });

  return (
    <HotelPage hotels={hotels} />
  );
};

export default Page;
