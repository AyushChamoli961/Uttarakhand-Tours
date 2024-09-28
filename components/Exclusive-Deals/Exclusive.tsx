// "use client";
// import { useEffect, useRef, useState } from "react";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
// import AllDeals from "./AllDeals";
// import { packagePropsType } from "@/utils/pacakageTypes";

// const dealsType = [
//   {
//     id: 0,
//     name: "DOMESTIC",
//   },
//   {
//     id: 1,
//     name: "INTERNATIONAL",
//   },
// ];

// export default function Exclusive({ data }: packagePropsType) {
//   const [category, setCategory] = useState(dealsType[0].name);

//   let filteredData = data.filter((item) => item.tripType === category);

//   const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(1); // Default to 1 card for mobile

//   useEffect(() => {
//     // Adjust the number of cards to show based on the screen size
//     const updateCardsToShow = () => {
//       if (window.innerWidth >= 1024) {
//         setCardsToShow(3); // 3 cards for laptop and above
//       } else if (window.innerWidth >= 768) {
//         setCardsToShow(2); // 2 cards for tablets
//       } else {
//         setCardsToShow(1); // 1 card for mobile
//       }
//     };

//     // Initial check
//     updateCardsToShow();

//     // Add event listener
//     window.addEventListener("resize", updateCardsToShow);

//     // Clean up event listener
//     return () => window.removeEventListener("resize", updateCardsToShow);
//   }, []);

//   const handlePrevClick = () => {
//     setCurrentDestinationIndex((prevIndex) =>
//       prevIndex === 0 ? filteredData.length - cardsToShow : prevIndex - 1
//     );
//   };

//   const handleNextClick = () => {
//     setCurrentDestinationIndex((prevIndex) =>
//       prevIndex === filteredData.length - cardsToShow ? 0 : prevIndex + 1
//     );
//   };

//   console.log("the filtered data is ", filteredData);
//   // const buttonsRef = useRef([]);

//   // useEffect(() => {
//   //   const observer = new IntersectionObserver((entries) => {
//   //     entries.forEach((entry) => {
//   //       if (entry.isIntersecting) {
//   //         const visibleButton = entry.target;
//   //         const newCategory = visibleButton.textContent;
//   //         setCategory(newCategory);
//   //       }
//   //     });
//   //   }, {
//   //     root: document.querySelector('.custom-scrollbar'),
//   //     threshold: 0.5 // Adjust as needed
//   //   });

//   //   buttonsRef.current.forEach((button) => {
//   //     observer.observe(button);
//   //   });

//   //   return () => {
//   //     buttonsRef.current.forEach((button) => {
//   //       observer.unobserve(button);
//   //     });
//   //   };
//   // }, []);
//   return (
//     <div className="w-10/12 mx-auto mt-6">
//       {/* section-1 */}
//       <div className="mx-auto w-full gap-3 flex flex-col items-center">
//         <div className="mx-auto">
//         <h1 className="font-heading font-bold text-center
//                 text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
//             Exclusive Deals
//           </h1>
//         </div>

//         {/* deals types and Arrows */}
//         <div className="flex mx-auto relative w-full items-center justify-between " style={{ scrollBehavior: "smooth" }}>
//           <ul className="mx-auto flex space-x-3">
//             {dealsType.map((deal) => (
//               <button
//                 className={`font-text font-bold ${category === deal.name
//                     ? "text-[#00247D] border-b-2 border-[#00247D] duration-200 ease-in-out"
//                     : ""
//                   }`}
//                 onClick={() => {
//                   setCategory(deal.name);
//                   setCurrentDestinationIndex(0); // Reset index when category changes
//                 }}
//                 key={deal.id}
//               >
//                 {deal.name}
//               </button>
//             ))}
//           </ul>
//           {/* Arrow keys */}
//           <div className="md:flex space-x-2 hidden md:visible">
//             <button
//               title="left"
//               onClick={handlePrevClick}
//               className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
//             >
//               <AiOutlineArrowLeft />
//             </button>
//             <button
//               title="right"
//               onClick={handleNextClick}
//               className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
//             >
//               <AiOutlineArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* deals slider */}
//       <div className="mb-2">
//         <AllDeals data={filteredData.slice(currentDestinationIndex, currentDestinationIndex + cardsToShow)}/>
//       </div>
//       <div className="flex space-x-8 md:hidden items-center justify-center mt-4">
//         <button
//           title="left"
//           onClick={handlePrevClick}
//           className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
//         >
//           <AiOutlineArrowLeft />
//         </button>
//         <button
//           title="right"
//           onClick={handleNextClick}
//           className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
//         >
//           <AiOutlineArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useRef, useState, ChangeEvent } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import AllDeals from "./AllDeals";
import { packagePropsType } from "@/utils/pacakageTypes";

const dealsType = [
  {
    id: 0,
    name: "TOUR",
  },
  {
    id: 1,
    name: "TREK",
  },
];

export default function Exclusive({ data }: packagePropsType) {
  const [category, setCategory] = useState<string>(dealsType[0].name);

  let filteredData = data.filter((item) => item.tripType === category);

  const [currentDestinationIndex, setCurrentDestinationIndex] =
    useState<number>(0);
  const [cardsToShow, setCardsToShow] = useState<number>(1); // Default to 1 card for mobile
  const [currentLabelIndex, setCurrentLabelIndex] = useState<number>(0);

  const labelsRef = useRef<HTMLUListElement>(null);
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Adjust the number of cards to show based on the screen size
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // 3 cards for laptop and above
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // 2 cards for tablets
      } else {
        setCardsToShow(1); // 1 card for mobile
      }
    };

    // Initial check
    updateCardsToShow();

    // Add event listener
    window.addEventListener("resize", updateCardsToShow);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handlePrevClick = () => {
    setCurrentDestinationIndex((prevIndex) =>
      prevIndex === 0 ? filteredData.length - cardsToShow : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentDestinationIndex((prevIndex) =>
      prevIndex === filteredData.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value, 10);
    setCurrentLabelIndex(newIndex);
    setCategory(dealsType[newIndex].name);
    setCurrentDestinationIndex(0); // Reset index when category changes

    if (labelsRef.current) {
      const labelWidth = labelsRef.current.children[0].clientWidth;
      labelsRef.current.scrollLeft = newIndex * labelWidth;
    }

    e.target.style.setProperty(
      "--value",
      `${(newIndex / (dealsType.length - 1)) * 100}%`
    );
  };

  const handleLabelClick = (index: number) => {
    setCurrentLabelIndex(index);
    setCategory(dealsType[index].name);
    setCurrentDestinationIndex(0); // Reset index when category changes

    if (sliderRef.current) {
      sliderRef.current.value = index.toString();
      sliderRef.current.style.setProperty(
        "--value",
        `${(index / (dealsType.length - 1)) * 100}%`
      );
    }
  };

  useEffect(() => {
    const rangeInput = document.querySelector(
      ".range-input"
    ) as HTMLInputElement;
    if (rangeInput) {
      rangeInput.style.setProperty(
        "--value",
        `${(currentLabelIndex / (dealsType.length - 1)) * 100}%`
      );
    }
  }, [currentLabelIndex]);

  const isPrevDisabled = currentDestinationIndex === 0;
  const isNextDisabled = currentDestinationIndex >= filteredData.length - 1;

  return (
    <div className="w-10/12 mx-auto mt-6 mb-5">
      {/* section-1 */}
      <div className="mx-auto w-full gap-3 flex flex-col items-center">
        <div className="mx-auto">
          <h1
            className="font-heading font-bold text-center 
                text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl"
          >
            Exclusive Deals
          </h1>
        </div>

        {/* deals types and Arrows */}
        <div className="flex mx-auto relative w-full items-center justify-between">
          <ul
            className="mx-auto flex space-x-3 overflow-x-auto whitespace-nowrap"
            ref={labelsRef}
          >
            {dealsType.map((deal, index) => (
              <button
                className={`font-text  md:text-xl font-bold ${
                  category === deal.name
                    ? "text-[#00247D] border-b-2 border-[#00247D] duration-200 ease-in-out"
                    : ""
                }`}
                onClick={() => handleLabelClick(index)}
                key={deal.id}
              >
                {deal.name}
              </button>
            ))}
          </ul>
          {/* Arrow keys */}
          <div className="md:flex space-x-2 hidden md:visible">
            <button
              title="left"
              disabled={isPrevDisabled}
              onClick={handlePrevClick}
              className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              title="right"
              disabled={isNextDisabled}
              onClick={handleNextClick}
              className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Slider for mobile screens */}
      <div className="md:hidden w-full mt-4">
        <input
          title="slider"
          type="range"
          min="0"
          max={dealsType.length - 1}
          value={currentLabelIndex}
          onChange={handleSliderChange}
          className="w-full range-input"
        />
      </div>

      {/* deals slider */}
      <div className="mb-2">
        <AllDeals
          data={filteredData.slice(
            currentDestinationIndex,
            currentDestinationIndex + cardsToShow
          )}
        />
      </div>
      <div className="flex space-x-8 md:hidden items-center justify-center mt-4">
        <button
          title="left"
          onClick={handlePrevClick}
          className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          title="right"
          onClick={handleNextClick}
          className="bg-[#878787] text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
