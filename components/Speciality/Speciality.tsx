import React from 'react'
import Image from 'next/image'
// import logo1 from "@/assets/SpecialityImages/Counter.png";
// import logo2 from "@/assets/SpecialityImages/Destinations.png";
// import logo3 from "@/assets/SpecialityImages/Tips.png";
// import logo4 from "@/assets/SpecialityImages/hotel.png";
import SpecialityCard from './SpecialityCard/SpecialityCard';

const Speciality = () => {
    return (
        <div>
            <div className="w-full flex flex-col">
                {/* Cards  */}
                <div className=" w-10/12  lg:flex lg:flex-row flex flex-col items-center justify-between mx-auto gap-[1.5rem] mt-[3rem]">
                    <SpecialityCard
                        logo={'/Counter.png'}
                        numbers='1000+'
                        title='Happy Customers Trust Us'
                    />

                    <SpecialityCard
                        logo={'/Destinations.png'}
                        numbers='50+'
                        title='Spectacular Destinations to Explore'
                    />

                    <SpecialityCard
                        logo={'/Tips.png'}
                        numbers='600+'
                        title='Memorable Journeys and Counting'
                    />

                    <SpecialityCard
                        logo={'/hotel.png'}
                        numbers='8+'
                        title=' Years of Building Travel Memories'
                    />
                </div>
            </div>
        </div>
    )
}

export default Speciality
