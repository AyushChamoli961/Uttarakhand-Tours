import { packagePropsType } from "@/utils/pacakageTypes";
import Card from "./Card";

export default function Cards({ data }: packagePropsType) {
  return (
    <div className="w-full mx-auto flex flex-col ">
      {/* <div className="flex flex-col items-center mb-[3rem] justify-center">
        <h1 className="font-heading font-bold text-[2rem] mx-auto">
          Best Value Tours
        </h1>
        <p className="mx-auto text-slate-400">Best offers trips from us</p>
      </div> */}
      <div className="w-10/12 px-8 mx-auto flex flex-col my-4 mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((tour: any) => (
            <Card
              key={tour.id}
              id={tour.id}
              day={tour.duration_in_days}
              title={tour.title}
              image={tour.images[0].url}
              // services={tour.services}
              price={tour.price}
              city={""}
              country={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
