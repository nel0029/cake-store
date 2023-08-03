/** @format */

import React from "react";
import { dummyProducts } from "../data/Products";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface GalleryProps {
  headerHeight: number;
}

const Gallery: React.FC<GalleryProps> = ({ headerHeight }) => {
  const marquee = document.getElementById("track");

  const scrollWidth = marquee?.scrollWidth;
  const offSetWidth = marquee?.offsetWidth;
  let qoutientWidth;
  if (scrollWidth && offSetWidth) {
    qoutientWidth = Math.round((scrollWidth / offSetWidth) * 100);
  }
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
      <div className="marquee w-full flex-grow flex flex-col justify-center relative px-2">
        <motion.div
          id="track"
          animate={{
            x: ["0%", `${qoutientWidth && qoutientWidth * -1}%`],
          }}
          whileHover={{ animationPlayState: "paused" }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
          className="track flex flex-row flex-nowrap flex-grow gap-x-2 lg:gap-x-[5rem] items-center"
        >
          {dummyProducts.map((product: any, index: number) => (
            <div
              className="min-w-[200px] lg:min-w-[260px] overflow-hidden aspect-2/3 rounded-xl border"
              key={index}
            >
              <LazyLoadImage
                alt={`${product.image} ${index + 1}`}
                loading="lazy"
                style={{ transform: "width, height" }}
                className="w-full h-full hover:scale-125 ease-in-out duration-300 object-cover"
                src={product.image}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
