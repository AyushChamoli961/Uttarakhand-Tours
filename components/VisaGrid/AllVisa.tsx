import React from 'react'
import VisaCard from './VisaCard'
import SkeletonCard from './SkeletonCard'

const AllVisa = ({ data }: any) => {
    return (
        <div className="w-10/12 mx-auto flex flex-col ">
            <div className="w-10/12 mx-auto flex flex-col my-4  mb-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((visa: any) => (
                        <VisaCard
                            key={visa.id}
                            id={visa.id}
                            image={visa.image}
                            cityName={visa.cityName}
                            countryName={visa.countryName}
                            visaRequirements={visa.visaRequirements}
                            fees={visa.fees}
                            processingTime={visa.processingTime}
                            createdAt={visa.createdAt}
                            updatedAt={visa.updatedAt}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllVisa
