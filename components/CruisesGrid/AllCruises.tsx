import React from 'react'
import CruiseCard from './CruiseCard'

const AllCruises = ({ data }: any) => {
    return (
        <div className="w-full mx-auto flex flex-col ">
            <div className="w-10/12 px-8 mx-auto flex flex-col my-4  mb-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((cruise: any) => (
                        <CruiseCard
                            key={cruise.id}
                            id={cruise.id}
                            cruiseName={cruise.cruiseName}
                            cruiseLine={cruise.cruiseLine}
                            departurePort={cruise.departurePort}
                            departureDate={cruise.departureDate}
                            arrivalPort={cruise.arrivalPort}
                            arrivalDate={cruise.arrivalDate}
                            itinerary={cruise.itinerary}
                            price={cruise.price}
                            cabinsAvailable={cruise.cabinsAvailable}
                            image={cruise.image}
                            createdAt={cruise.createdAt}
                            updatedAt={cruise.updatedAt}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllCruises
