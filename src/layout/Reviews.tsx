/** @format */

import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

interface ReviewsProps {
  headerHeight: number;
}

const Reviews: React.FC<ReviewsProps> = ({ headerHeight }) => {
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
        <div className="w-full flex flex-row px-4 justify-start gap-x-2 lg:gap-x-4 overflow-x-auto">
          <div className="w-[95%] flex-1 flex flex-col items-center bg-white p-4 bg-opacity-80 rounded-lg gap-y-4">
            <div className="w-[75px] aspect-square rounded-full overflow-hidden">
              <img
                className="w-full object-cover"
                src="https://www.leisureopportunities.co.uk/images/995586_746594.jpg"
              />
            </div>
            <div className="w-full flex flex-row items-center justify-around text-primary">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarOutlineIcon />
            </div>
            <div className="font-bold font-poppins">John Doe</div>
            <p className="text-center line-clamp-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              incidunt facilis minima a architecto numquam veritatis facere
              ullam eaque, corporis impedit ex officia excepturi, placeat,
              praesentium doloribus ad illum quasi!
            </p>
          </div>
          <div className="w-[95%] flex-1 flex flex-col items-center bg-white p-4 bg-opacity-80 rounded-lg gap-y-4">
            <div className="w-[75px] aspect-square rounded-full overflow-hidden">
              <img
                className="w-full object-cover"
                src="https://www.leisureopportunities.co.uk/images/995586_746594.jpg"
              />
            </div>
            <div className="w-full flex flex-row items-center justify-around text-primary">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarOutlineIcon />
            </div>
            <div className="font-bold font-poppins">John Doe</div>
            <p className="text-center line-clamp-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              incidunt facilis minima a architecto numquam veritatis facere
              ullam eaque, corporis impedit ex officia excepturi, placeat,
              praesentium doloribus ad illum quasi!
            </p>
          </div>
          <div className="w-[95%] flex-1 flex flex-col items-center bg-white p-4 bg-opacity-80 rounded-lg gap-y-4">
            <div className="w-[75px] aspect-square rounded-full overflow-hidden">
              <img
                className="w-full object-cover"
                src="https://www.leisureopportunities.co.uk/images/995586_746594.jpg"
              />
            </div>
            <div className="w-full flex flex-row items-center justify-around text-primary">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarOutlineIcon />
            </div>
            <div className="font-bold font-poppins">John Doe</div>
            <p className="text-center line-clamp-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              incidunt facilis minima a architecto numquam veritatis facere
              ullam eaque, corporis impedit ex officia excepturi, placeat,
              praesentium doloribus ad illum quasi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
