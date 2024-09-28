import { PiCurrencyInrBold } from "react-icons/pi";
import { CiStopwatch } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  day: number;
  city: string;
  country: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  image,
  price,
  day,
  city,
  country,
}) => {
  return (
    <div className="w-full md:w-[20rem]  rounded-t-3xl  flex flex-col ">
      <Link href={`tour/${id}`}>
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={320}
            height={200}
            className="w-full h-[200px] rounded-t-xl object-cover"
          />
          <p className="flex items-center bg-[#00247D] text-white px-4 absolute bottom-5">
            <span>
              <PiCurrencyInrBold />
            </span>
            {price}
          </p>
          {/* {price > 5000 ? (
          <div className="absolute top-[-5px] right-[-5px] p-2 w-[2.5rem] h-[2.5rem] bg-[#00247D] flex justify-center items-center text-white rounded-full">
            Sale
          </div>
        ) : null} */}
        </div>

        <div className="pl-4 py-4 space-y-3 shadow-md shadow-gray-400">

          <h1 className="font-bold font-heading">{title}</h1>

          {/* <p>{city}, {country}</p> */}
          <p className="flex items-center font-bold">
            <span>
              <CiStopwatch />
            </span>
            {day} days
          </p>
        </div>
      </Link>
    </div >

  );
};

export default Card;
