import { packagePropsType } from "@/utils/pacakageTypes";
import Card from "../Best-Tours/Card";


export default function AllDomesticHolidays({ data }: packagePropsType) {
  return (
    <div className="w-10/12 mx-auto flex flex-col ">
      <div className="w-full px-8 mx-auto flex flex-col my-4  mb-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((tour: any) => (
          <Card
            key={tour.id}
            id={tour.id}
            day={tour.duration_in_days}
            title={tour.title}
            image={tour.images[0].url}
            city= {tour.city}
            country= {tour.country}
            // services={tour.services}
            price={tour.price}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
