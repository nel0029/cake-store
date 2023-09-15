/** @format */

import React from "react";
import { dummyProducts } from "../data/Products";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface GalleryProps {
  headerHeight: number;
}

const Gallery: React.FC<GalleryProps> = ({ headerHeight }) => {
  const forLargeScreen = [];

  for (let i = 0; i < dummyProducts.length; i += 3) {
    const group = dummyProducts.slice(i, i + 3);
    forLargeScreen.push(group);
  }

  return (
    <div
      id="gallery"
      className="h-full bg-primary border-transparent flex flex-col gap-y-8"
    >
      <div
        style={{ marginTop: headerHeight + 2 }}
        className="w-full flex flex-row items-center justify-center"
      >
        <div className="text-[40px] text-white font-poppins font-bold uppercase">
          Gallery
        </div>
      </div>
      <div className="w-full h-full flex-1 flex flex-col justify-center items-center">
        <div className="w-full h-full">
          <Carousel
            className="xl:hidden w-full h-full"
            stopOnHover={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            {dummyProducts.map((product: any, index: number) => (
              <div key={index} className="xl:hidden w-full overflow-hidden ">
                <LazyLoadImage
                  alt={`${product.image} ${index + 1}`}
                  loading="lazy"
                  className="w-auto aspect-4/5 h-full object-cover"
                  src={product.image}
                />
              </div>
            ))}
          </Carousel>
          <Carousel
            className="hidden xl:block w-full flex-1"
            stopOnHover={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            {forLargeScreen.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full h-full flex flex-row items-center gap-x-2"
              >
                {item.map((product: any, index: number) => (
                  <div
                    key={index}
                    className="aspect-8/7 w-full h-full overflow-hidden "
                  >
                    <LazyLoadImage
                      alt={`${product.image} ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      src={product.image}
                    />
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
