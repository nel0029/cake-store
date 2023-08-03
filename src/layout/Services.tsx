/** @format */

import React from "react";
import { motion } from "framer-motion";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";

interface ServicesProps {
  headerHeight: number;
}

const Services: React.FC<ServicesProps> = ({ headerHeight }) => {
  return (
    <div className="h-screen max-h-auto bg-darkBrown flex flex-col gap-y-8">
      <div
        style={{ marginTop: headerHeight + 2 }}
        className=" w-full flex flex-row items-center justify-center"
      >
        <div className="text-[40px] text-white font-poppins font-bold uppercase">
          We Offer
        </div>
      </div>
      <div className="flex-grow w-full p-4 flex flex-row gap-4 justify-around flex-wrap">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          exit={{ scale: 1 }}
          className="w-[150px] lg:w-[300px] flex flex-col items-center justify-center gap-y-4 rounded-xl bg-white bg-opacity-20 backdrop-blur-[5px] aspect-square p-2"
        >
          <div className="flex justify-center items-center">
            <div className="text-darkBrown p-2 lg:p-4 border rounded-full bg-white">
              <CakeRoundedIcon style={{ fontSize: "40px" }} />
            </div>
          </div>
          <div className="text-center text-white font-bold uppercase text-xl">
            Customized Cake
          </div>
          <div className="hidden lg:block text-xs lg:text-base text-center text-white">
            We make customized cake according to your desire
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          exit={{ scale: 1 }}
          className="w-[150px] lg:w-[300px] flex flex-col items-center justify-center gap-y-4 rounded-xl bg-white bg-opacity-20 backdrop-blur-[5px] aspect-square p-2"
        >
          <div className="flex justify-center items-center">
            <div className="text-darkBrown p-2 lg:p-4 border rounded-full bg-white">
              <CardGiftcardRoundedIcon style={{ fontSize: "40px" }} />
            </div>
          </div>
          <div className="text-center text-white font-bold uppercase text-xl">
            Bundle Package
          </div>
          <div className="hidden lg:block text-xs lg:text-base text-center text-white">
            We offer best promo package that suit to your budget
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          exit={{ scale: 1 }}
          className="w-[150px] lg:w-[300px] flex flex-col items-center justify-center gap-y-4 rounded-xl bg-white bg-opacity-20 backdrop-blur-[5px] aspect-square p-2"
        >
          <div className="flex justify-center items-center">
            <div className="text-darkBrown p-2 lg:p-4 border rounded-full bg-white">
              <DeliveryDiningRoundedIcon style={{ fontSize: "40px" }} />
            </div>
          </div>
          <div className="text-center text-white font-bold uppercase text-xl">
            Fast Delivery
          </div>
          <div className="hidden lg:block text-xs lg:text-base text-center text-white">
            We offer a fast delivery for customer residing inside metro manila.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
