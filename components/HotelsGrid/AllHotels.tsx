import React from 'react'
import HotelCard from './HotelCard'

const AllHotels = ({ data }: any) => {
    return (
        <div className="w-full mx-auto flex flex-col ">
            <div className="w-10/12 px-8 mx-auto flex flex-col my-4  mb-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((hotel: any) => (
                        <HotelCard
                            key={hotel.id}
                            id={hotel.id.toString()}
                            images={hotel.images}
                            name={hotel.name}
                            address={hotel.address}
                            city={hotel.city}
                            state={hotel.state}
                            country={hotel.country}
                            price={hotel.price}
                            createdAt={hotel.createdAt.toISOString()}
                            updatedAt={hotel.updatedAt.toISOString()}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllHotels
