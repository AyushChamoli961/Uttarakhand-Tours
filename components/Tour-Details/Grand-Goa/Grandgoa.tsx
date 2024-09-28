"use client";

/* eslint-disable react/no-unescaped-entities */
import { TfiTime } from "react-icons/tfi";
import { TfiIdBadge } from "react-icons/tfi";
import { TfiCalendar } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import DOMPurify from "dompurify";
import { Decimal } from "@prisma/client/runtime/library";
import Script from "next/script";
import axios from "axios";
import { useRouter } from "next/navigation";
import ReviewsSection from "@/components/reviews/review-section";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { getDate } from "date-fns";
import { RedirectToSignIn } from "@clerk/nextjs";

// Define the possible months

// Define the shape of PackageAvailability
// Define the shape of PackageAvailability
interface PackageAvailability {
  id: number;
  packageId: number;
  year: number;
  month: number;
  availableDays: number[];
}

// Define the shape of Review
interface User {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Review {
  id: number;
  reviewText: string;
  accomodations: number;
  service: number;
  meal: number;
  createdAt: Date;
  user: User;
}

// Define the shape of TourDetailsProps
interface TourDetailsProps {
  id: number;
  title: string;
  description: string;
  itinerary: string;
  price: Decimal; // Convert Decimal to number
  createdAt: Date;
  updatedAt: Date;
  city: string;
  country: string;
  tripType: "DOMESTIC" | "INTERNATIONAL"; // Enum values
  dates: Date[];
  duration_in_days: number;
  duration_in_nights: number;
  availability: PackageAvailability | null;
  reviews: Review[];
}

interface ActiveUser {
  userId: string;
  name: string;
  email: string;
  phone: string | null;
}

// Define the shape of TourProps
interface TourProps {
  tour: TourDetailsProps;
  activeuser: ActiveUser | null;
}

const months: { [key: number]: string } = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export default function Grandgoa({ tour, activeuser }: TourProps) {
  const position: [number, number] = [51.505, -0.09];

  const [person, setPerson] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    selection: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      color: "#3ecf8e",
    },
  });
  const router = useRouter();

  const disabledDates = useMemo(() => {
    const allDates = getDateRange(
      new Date(),
      new Date(
        new Date().getFullYear() + 1,
        new Date().getMonth(),
        new Date().getDate() + 1
      )
    );
    return allDates.filter(
      (date) => !tour.dates.some((tourDate) => isSameDate(date, tourDate))
    );
  }, [tour.dates]);

  console.log("disabledDates", disabledDates);

  function getDateRange(start: Date, end: Date) {
    const dates = [];
    let currentDate = start;
    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  function isSameDate(date1: Date, date2: Date) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  const handleDateChange = (ranges: any) => {
    const startDate = new Date(ranges.selection.startDate);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + tour.duration_in_days - 1); // Subtract 1 to include the start date

    // Check if the end date is in the disabledDates
    const isEndDateDisabled = disabledDates.some((disabledDate) =>
      isSameDate(endDate, new Date(disabledDate))
    );

    if (isEndDateDisabled) {
      // If end date is disabled, reset to previous valid state or initial state
      setSelectedDates((prevState) => ({
        selection: {
          ...prevState.selection,
          startDate: prevState.selection.startDate,
          endDate: prevState.selection.endDate,
        },
      }));
      // Optionally, you can show an alert or message to the user
      alert(
        "Selected dates are not available. Please choose a different start date."
      );
    } else {
      // If end date is valid, update the state
      setSelectedDates({
        selection: {
          startDate: startDate,
          endDate: endDate,
          key: "selection",
          color: "#3ecf8e",
        },
      });
    }
  };

  const createOrderId = async () => {
    if (!activeuser) {
      return;
    }
    try {
      const response = await axios.post(
        "https://fly-elite-admin.vercel.app/api/order",
        {
          amount: person * parseInt(tour.price.toString()) * 100,
          currency: "INR",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      await axios.post("/api/book_package", {
        packageId: tour.id,
        userId: activeuser.userId,
        amountPaid: person * parseInt(tour.price.toString()),
        orderId: response.data.orderId,
        persons: person,
        startDate: selectedDates.selection.startDate,
        endDate: selectedDates.selection.endDate,
      });
      return response.data.orderId;
    } catch (error) {
      console.error("There was a problem with your axios operation:", error);
      throw error; // Re-throw the error if you want calling code to handle it
    }
  };

  const processPayment = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!activeuser) {
      // Properly encode the URL for query parameters
      const redirectUrl = encodeURIComponent(`/tour/${tour.id}`);
      router.replace(`/sign-in?redirect_url=${redirectUrl}`);
      return;
    }
    if (
      !selectedDates.selection.startDate ||
      !selectedDates.selection.endDate ||
      selectedDates.selection.startDate >= selectedDates.selection.endDate
    ) {
      alert("Please select the dates correctly");
      return;
    }
    setLoading(true);
    e.preventDefault();

    try {
      const orderId: string = await createOrderId();
      console.log("amount", person * parseInt(tour.price.toString()));
      const options = {
        key: process.env.key_id,
        amount: person * parseInt(tour.price.toString()),
        currency: "INR",
        name: activeuser?.name,
        description: "pacakge booking",
        order_id: orderId,
        handler: async function (response: any) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          try {
            const result = await axios.post(
              "https://fly-elite-admin.vercel.app/api/verify",
              data,
              {
                headers: { "Content-Type": "application/json" },
              }
            );
            if (result.data.isOk) {
              router.push(`/bookings/${result.data.orderID}`);
            } else {
              alert(result.data.message);
            }
          } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while processing the request");
          }
        },
        prefill: {
          name: activeuser?.name,
          email: activeuser?.email,
          contact: activeuser?.phone,
        },
        theme: {
          color: "#1e5ee9",
        },
      };
      //@ts-ignore
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      console.log("error is", error);
    }
  };

  // toastifying part left , like showing the toast when  any of the input values for the reviews not present .

  return (
    <div className="w-full h-auto pt-20 bg-[#f6f9f9]">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className=" w-10/12 item-center xl:justify-between mx-auto xl:flex xl:flex-row  flex flex-col-reverse">
        {/* Left section  */}

        <div className=" xl:w-7/12 w-full">
          {/* Heading  */}
          <div className="  flex">
            <h1 className=" font-heading font-bold mx-auto text-[2rem]">
              {tour.title}
            </h1>
          </div>

          <div className=" my-[2rem]">
            <hr className=" border-dashed border-slate-300" />
            <div className=" flex justify-between my-4">
              {/* first  */}
              <div className=" flex flex-col items-center">
                <div className=" text-[1.3rem] md:text-[2rem] ">
                  <TfiTime />
                </div>
                <p className=" font-text text-[0.7rem] md:text-[1rem]">
                  {tour.duration_in_days} Days
                </p>
              </div>

              {/* second  */}
              <div className=" flex flex-col items-center">
                <div className=" text-[1.3rem] md:text-[2rem]">
                  <TfiIdBadge />
                </div>
                <p className=" font-text text-[0.7rem] md:text-[1rem]">
                  Age 12+
                </p>
              </div>

              {/* Third  */}
              <div className=" flex flex-col items-center">
                <div className=" text-[1.3rem] md:text-[2rem]">
                  <TfiCalendar />
                </div>

                <p className=" font-text text-[0.7rem] md:text-[1rem]">
                  {tour.availability ? months[tour.availability.month] : "None"}
                </p>
              </div>

              {/* Fourth  */}
              <div className=" flex flex-col items-center">
                <div className=" text-[1.3rem] md:text-[2rem]">
                  <TfiUser />
                </div>
                <p className=" font-text text-[0.7rem] md:text-[1rem]">
                  Availablity{" "}
                  {tour.availability
                    ? tour.availability.availableDays.length
                    : 0}
                </p>
              </div>
            </div>
            <hr className=" border-dashed border-slate-300" />
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(tour.itinerary),
            }}
          />

          <hr />
          <ReviewsSection reviews={tour.reviews} packageId={tour.id} />
        </div>

        {/* Right section  */}
        <div className="border h-[20rem] rounded-lg w-full xl:w-4/12">
          {/* Booking section  */}
          <div className=" xl:block  border h-[20rem] rounded-lg">
            <div className=" bg-[#272424] text-white rounded-t-lg">
              <h1 className="flex  items-baseline py-1 rounded-lg justify-between px-2 text-[1.5rem] font-bold">
                ₹{tour.price.toString()}
                <span className=" font-normal font-text text-[1rem]">
                  Per Person
                </span>
              </h1>
            </div>

            <div className=" flex my-[2rem] px-4 justify-between items-baseline">
              <label htmlFor="person text-[0.9rem]">Person</label>
              <input
                min={1}
                type="number"
                name="person"
                onChange={(e) => setPerson(parseInt(e.target.value))}
                id="person"
                value={person}
                placeholder="0"
                className=" w-10 h-10 text-center border border-slate-300 outline-none "
              />
              <p>x</p>
              <p className=" flex items-baseline font-text">
                ₹{tour.price.toString()}
              </p>
            </div>
            <div className="flex my-1 px-4 justify-between items-baseline">
              <Popover>
                <PopoverTrigger>
                  <Button variant="outline" className="flex items-center gap-2">
                    <span>Select Dates</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-4">
                  <DateRangePicker
                    ranges={[selectedDates.selection]}
                    onChange={handleDateChange}
                    disabledDates={disabledDates}
                    minDate={new Date()}
                    maxDate={
                      new Date(
                        new Date().getFullYear() + 1,
                        new Date().getMonth(),
                        new Date().getDate()
                      )
                    }
                  />
                </PopoverContent>
              </Popover>
              <div>
                {selectedDates.selection.startDate.toDateString()} -{" "}
                {selectedDates.selection.endDate.toDateString()}
              </div>
            </div>
            <div className="mx-5 text-white">
              <button
                onClick={(e) => processPayment(e)}
                className="bg-[#00247D] py-2 w-full text-center mx-auto font-text text-[0.9rem]"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading...
                  </span>
                ) : (
                  "Book for ₹" + person * parseInt(tour.price.toString())
                )}
              </button>
            </div>

            <div className=" mx-5 flex flex-col gap-6 ">
              <hr className=" border-dashed border-slate-300 mt-8" />
              <p className=" font-text text-[0.9rem] flex justify-between">
                This tour's been viewed 544 times in the past week
                <span>
                  {" "}
                  <TfiTime />
                </span>
              </p>
            </div>
          </div>

          {/* Share this tour  */}

          <div className=" xl:block hidden font-text my-[2rem] ">
            <button className=" border flex items-center justify-center py-2 w-full text-center gap-3  ">
              {" "}
              <span>
                {" "}
                <MdOutlineForwardToInbox />
              </span>{" "}
              Share this tour
            </button>
          </div>

          {/* Informations  */}
          <div className="xl:block hidden border h-[8rem] rounded-lg px-4 flex flex-col justify-center gap-4">
            <h1 className=" font-heading font-bold">For More Informations</h1>
            <hr />
            <div className=" gap-2 flex flex-col">
              <p className=" text-[#555555] flex items-center gap-3 ">
                {" "}
                <CiMobile1 /> +91 ***** *****{" "}
              </p>

              <p className=" text-[#555555] flex items-center gap-3  ">
                {" "}
                <TfiTime /> Mon - Sat 8:00 AM - 5:00 PM{" "}
              </p>
            </div>
          </div>

          <hr className=" my-[2rem]" />
          {/* img6  */}

          {/* img7  */}
        </div>
      </div>

      {/* Similar Tours  */}
      {/* <div className=" flex flex-col  w-10/12 mx-auto ">
        <h1 className=" font-bold font-heading my-[1rem]">Similar Tours</h1>
        <hr className=" border-dashed border-slate-300" />
        <div className=" flex  my-[2rem]  flex-wrap gap-[2rem]">
          {
            similarTours.map((tour) => (
              <Card key={tour.id} day={tour.day} title={tour.title} image={tour.image} services={tour.services} price={tour.price} />
            ))
          }
        </div>

      </div> */}

      {/* for Mobile screen  */}
      {/* <div className="w-10/12 mx-auto flex items-center  flex-col">
        <h1 className=" font-bold text-center text-[1.5rem] font-heading my-[1rem]">Similar Tours</h1>
        <hr className=" border-dashed border-slate-300" />
        <div className=" flex w-full mx-auto my-[2rem] gap-4">
          {
            similarTours.map((tour) => (
              <Card key={tour.id} day={tour.day} title={tour.title} image={tour.image} services={tour.services} price={tour.price} />
            ))
          }
        </div>

      </div> */}
    </div>
  );
}
