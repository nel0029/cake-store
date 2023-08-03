/** @format */

import React from "react";
import { dummyProducts } from "../data/Products";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface GalleryProps {
  headerHeight: number;
}

const Gallery: React.FC<GalleryProps> = ({ headerHeight }) => {
  return (
    <div className="h-screen bg-primary border-transparent flex flex-col gap-y-8 ">
      <div
        style={{ marginTop: headerHeight + 2 }}
        className=" w-full flex flex-row items-center justify-center"
      >
        <div className="text-[40px] text-white font-poppins font-bold uppercase">
          Gallery
        </div>
      </div>
      <div className="w-full flex-grow flex marquee flex-col justify-center">
        <div className="flex-grow gap-x-2 lg:gap-x-[5rem] track items-center ">
          {dummyProducts.map((product: any, index: number) => (
            <div
              className="min-w-[200px] lg:min-w-[260px] overflow-hidden aspect-2/3 rounded-xl border"
              key={index}
            >
              <LazyLoadImage
                loading="lazy"
                style={{ transform: "width, height" }}
                className="w-full h-full hover:scale-125 ease-in-out duration-300 object-cover"
                src={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
