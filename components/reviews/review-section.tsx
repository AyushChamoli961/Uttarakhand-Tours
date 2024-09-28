"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { FaStar } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { useRouter } from "next/navigation";

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

interface ReviewsSectionProps {
  reviews: Review[];
  packageId: number;
}

const ReviewsSection = ({ reviews, packageId }: ReviewsSectionProps) => {
  const colors = {
    blue: "#00247D",
    grey: "#D2D2D2",
  };
  const [currentReviews, setReviews] = useState(reviews || []);
  const stars = Array(5).fill(0);

  const router = useRouter()

  const [accomodations, setAcccomodations] = useState(0);
  const [services, setServices] = useState(0);
  const [meals, setMeals] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const { isLoaded, userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  function AverageRatings() {
    const totalReviews = currentReviews.length;

    if (totalReviews === 0) {
      return {
        averageAccomodations: 0,
        averageMeal: 0,
        averageService: 0,
      };
    }

    const sumRatings = currentReviews.reduce(
      (
        acc: { accomodations: any; meal: any; service: any },
        review: { accomodations: any; meal: any; service: any }
      ) => {
        acc.accomodations += review.accomodations;
        acc.meal += review.meal;
        acc.service += review.service;
        return acc;
      },
      { accomodations: 0, meal: 0, service: 0 }
    );

    return {
      averageAccomodations: sumRatings.accomodations / totalReviews,
      averageMeal: sumRatings.meal / totalReviews,
      averageService: sumRatings.service / totalReviews,
    };
  }

  const handleSubmit = async () => {
    console.log(
      "the user id is ",
      JSON.stringify({
        userId,
        packageId,
        accomodations,
        meal: meals,
        service: services,
        reviewText,
      })
    );
    if (isLoaded && userId) {
      setIsLoading(true);
      try {
        const response = await fetch("/api/review", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            packageId,
            accomodations,
            meal: meals,
            service: services,
            reviewText,
          }),
        });

        console.log(
          "the response after submitting the review is ",
          response.ok
        );

        if (response.ok) {
          const data = await response.json();

          console.log("the final  data is ", data);
          const newReview = data.review;

          const user = data.user;

          setReviews((prevReviews) => [...prevReviews, { ...newReview, user }]);

          // Reset input fields
          setAcccomodations(0);
          setServices(0);
          setMeals(0);
          setReviewText("");
          router.refresh()
          console.log("Review submitted successfully");
        } else {
          console.error("Failed to submit review");
        }
      } catch (error) {
        console.error("Error submitting review:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleDelete = async (reviewId: number, userId: string) => {
    if (isLoaded && userId) {
      setIsDeleteLoading(true);
      try {
        const response = await fetch("/api/review", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            reviewId,
          }),
        });

        console.log("the response to be deleted is  ", response);

        if (response.ok) {
          // Remove the deleted review from the local state
          setReviews(reviews.filter((review) => review.id !== reviewId));
          router.refresh()
          console.log("Review deleted successfully");
        } else {
          console.error("Failed to delete  review");
        }
      } catch (error) {
        console.error("Error deleting review:", error);
      } finally {
        setIsDeleteLoading(false);
      }
    }
  };
  return (
    <div className="my-[2rem]">
      <div>
        <h1 className=" font-heading font-bold ">{reviews.length} Reviews</h1>
        <hr />

        {/* Ratings  */}
        <div className=" grid grid-cols-1 mt-[2rem] gap-4 md:grid-cols-2  ">
          {/* Grid -1  */}

          <div className=" flex items-baseline justify-between">
            <p className=" font-bold font-text">Accomodation</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  size={15}
                  color={
                    index < AverageRatings().averageAccomodations
                      ? colors.blue
                      : colors.grey
                  }
                />
              ))}
            </div>
          </div>

          {/* Grid-2  */}
          <div className="  flex items-baseline justify-between">
            <p className=" font-bold font-text">Services</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  size={15}
                  color={
                    index < AverageRatings().averageService
                      ? colors.blue
                      : colors.grey
                  }
                />
              ))}
            </div>
          </div>

          {/* Grid-3  */}
          <div className=" flex items-baseline justify-between">
            <p className=" font-bold font-text">Meals</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  size={15}
                  color={
                    index < AverageRatings().averageMeal
                      ? colors.blue
                      : colors.grey
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews  */}

      {/* Review -1  */}
      {reviews.map((review: any) => (
        <div key={review.id}>
          <div className=" xl:w-full xl:text-start xl:flex xl:flex-row xl:justify-between flex md:w-10/12 mx-auto flex-col  text-center xl:mt-4 gap-4 my-[2rem]">
            <div className="xl:w-3/12">
              <BiUser className="text-4xl" />
            </div>
            <div className=" xl:w-9/12 ">
              <div>
                <h1 className=" font-heading font-bold ">{review.user.name}</h1>
                <p>{review.createdAt.toString()}</p>
                <p className=" mt-3 font-text">{review.reviewText}</p>
              </div>
              <div className=" grid grid-cols-1 mt-[2rem] gap-4 md:grid-cols-2  ">
                {/* Grid -1  */}
                <div className=" flex items-baseline justify-between">
                  <p className=" font-bold font-text">Accomodation</p>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        size={15}
                        color={
                          index < review.accomodations
                            ? colors.blue
                            : colors.grey
                        }
                      />
                    ))}
                  </div>
                </div>
                {/* Grid-2  */}
                <div className="  flex items-baseline justify-between">
                  <p className=" font-bold font-text">Services</p>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        size={15}
                        color={
                          index < review.service ? colors.blue : colors.grey
                        }
                      />
                    ))}
                  </div>
                </div>
                {/* Grid-3  */}
                <div className=" flex items-baseline justify-between">
                  <p className=" font-bold font-text">Meals</p>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        size={15}
                        color={index < review.meal ? colors.blue : colors.grey}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {review.userId === userId ? (
                <button
                  onClick={() => handleDelete(review.id, userId || "")}
                  disabled={isDeleteLoading}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete Review
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
          <hr className=" border-dashed border-slate-300" />
        </div>
      ))}

      <hr className=" border-dashed border-slate-300" />

      <div className=" my-[2rem]">
        <label htmlFor="comment">
          Comment<sup>*</sup>
        </label>
        <textarea
          name="comment"
          id="comment"
          rows={10}
          className="mt-3 bg-white w-full border rounded-lg outline-none p-2 "
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>

      {/* Ratings  */}
      <div className=" grid mx-auto w-full md:w-10/12  grid-flow-cols grid-cols-1 gap-[2rem] mt-[2rem] ">
        {/* Grid -1  */}

        <div className=" flex items-baseline justify-between">
          <p className=" font-bold font-text">Accomodation</p>
          <div className="flex">
            {stars.map((_, index) => (
              <FaStar
                key={index}
                size={15}
                values={accomodations.toString()}
                onChange={(e) => setAcccomodations(Number(e.target.valueOf()))}
                color={accomodations > index ? colors.blue : colors.grey}
                onClick={() => setAcccomodations(index + 1)}
              />
            ))}
          </div>
        </div>

        {/* Grid-2  */}
        <div className="  flex items-baseline justify-between">
          <p className=" font-bold font-text">Services</p>
          <div className="flex">
            {stars.map((_, index) => (
              <FaStar
                key={index}
                size={15}
                values={services.toString()}
                onChange={(e) => setServices(Number(e.target.valueOf()))}
                color={services > index ? colors.blue : colors.grey}
                onClick={() => setServices(index + 1)}
              />
            ))}
          </div>
        </div>

        {/* Grid-3  */}
        <div className=" flex items-baseline justify-between">
          <p className=" font-bold font-text">Meals</p>
          <div className="flex">
            {stars.map((_, index) => (
              <FaStar
                key={index}
                size={15}
                values={meals.toString()}
                onChange={(e) => setMeals(Number(e.target.valueOf()))}
                color={meals > index ? colors.blue : colors.grey}
                onClick={() => setMeals(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className=" flex">
        <button
          onClick={handleSubmit}
          className="bg-[#00247D] text-white font-heading px-[1.5rem] my-[2rem] py-2 mx-auto"
          disabled={isLoading} // Disable the button when loading
        >
          {isLoading ? "Posting..." : "Post Comment"}
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;
