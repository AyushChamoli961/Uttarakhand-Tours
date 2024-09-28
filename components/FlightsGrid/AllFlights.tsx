import FlightCard from "@/app/flight/FlightCard";

export default function AllFlights({ data }: any) {
  console.log("the data in the AllFlights component is: ", data);
  if(data.length === 0) {
    return (
      <div className="flex justify-center h-screen">
        <h2 className="text-4xl font-bold text-gray-700">
          No Flights Available
        </h2>
      </div>
    );
  }
  return (
    <div className="w-full mx-auto flex flex-col ">
      <div className="w-10/12 px-8 mx-auto flex flex-col my-4  mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
          data.map((tour: any) => (
            <FlightCard
              key={tour.id}
              id={tour.id}
              day={tour.day}
              airline={tour.airline}
              image={tour.image}
              country={tour.arrivalAirport}
              price={tour.price}
              departureCity={tour.departureCity}
              arrivalCity={tour.arrivalCity}
              flightNumber={tour.flightNumber}
              duration={tour.duration}
              departure={tour.departure}
              arrival={tour.arrival}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
