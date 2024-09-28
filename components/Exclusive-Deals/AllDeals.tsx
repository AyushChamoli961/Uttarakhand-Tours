import { packagePropsType } from "@/utils/pacakageTypes";
import Card from "../Best-Tours/Card";

export default function AllDeals({ data }: packagePropsType) {
  console.log(data);
  return (
    <div className="w-full mx-auto flex flex-col mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
        {data?.map((tour: any) => (
          <Card
            key={tour.id}
            id={tour.id}
            day={tour.duration_in_days}
            title={tour.title}
            image={tour.images[0].url}
            price={tour.price}
            city={""}
            country={""}
          />
        ))}
      </div>
    </div>
  );
}
