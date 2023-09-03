/** @format */

import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { reviews } from "../data/Reviews";

interface ReviewsProps {
  headerHeight: number;
}

const Reviews: React.FC<ReviewsProps> = ({ headerHeight }) => {
  const renderStars = (numStars: number) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<StarIcon key={i} />);
    }
    const remainingStars = 5 - numStars;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarOutlineIcon key={`outline-${i}`} />);
    }
    return stars;
  };
  return (
    <div className="h-screen max-h-auto border-transparent bg-primary flex flex-col gap-y-8">
      <div
        style={{ marginTop: headerHeight + 2 }}
        className=" w-full flex flex-row items-center justify-center"
      >
        <div className="text-[40px] text-white font-poppins font-bold uppercase">
          Reviews
        </div>
      </div>
      <div className=" w-full flex">
        <div className="w-full hidden xl:flex flex-row px-4 justify-start gap-x-4 overflow-x-auto">
          {reviews.map((review: any, index: number) => (
            <div
              key={index}
              className="w-[95%] flex-1 flex flex-col items-center bg-white p-4 bg-opacity-80 rounded-lg gap-y-4"
            >
              <div className="w-[75px] aspect-square rounded-full overflow-hidden">
                <img className="w-full object-cover" src={review.image} />
              </div>
              <div className="w-full flex flex-row items-center justify-around text-primary">
                {renderStars(review.stars)}
              </div>
              <div className="font-bold font-poppins">{review.name}</div>
              <p className="text-center line-clamp-5">{review.review}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex xl:hidden flex-col gap-y-2 px-2">
          {reviews.map((review: any, index: number) => (
            <div
              key={index}
              className="w-full flex flex-row items-start gap-x-2 bg-white p-4 bg-opacity-80 rounded-lg"
            >
              <div className="w-[75px] aspect-square rounded-full overflow-hidden">
                <img className="w-full object-cover" src={review.image} />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="font-bold font-poppins">{review.name}</div>
                <div className="w-full flex flex-row items-center justify-around text-primary">
                  {renderStars(review.stars)}
                </div>

                <p className="text-left line-clamp-3">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
