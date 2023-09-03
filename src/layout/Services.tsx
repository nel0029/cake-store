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
  const services = [
    {
      name: "Customized cake",
      desc: "We make customized cake according to your desire",
      icon: <CakeRoundedIcon style={{ fontSize: "40px" }} />,
    },

    {
      name: "Bundle Package",
      desc: "We offer best promo package that suit to your budget",
      icon: <CardGiftcardRoundedIcon style={{ fontSize: "40px" }} />,
    },
    {
      name: "Fast Delivery",
      desc: "We offer a fast delivery for customer residing inside Quezon Province.",
      icon: <DeliveryDiningRoundedIcon style={{ fontSize: "40px" }} />,
    },
  ];
  return (
    <div className="h-screen bg-darkBrown flex flex-col gap-y-2">
      <div
        style={{ marginTop: headerHeight + 2 }}
        className=" w-full flex flex-row items-center justify-center"
      >
        <div className="text-[40px] text-white font-poppins font-bold uppercase">
          We Offer
        </div>
      </div>
      <div className="flex-grow w-full p-4 hidden xl:flex flex-row gap-4 justify-around flex-wrap">
        {services.map((service: any, index: number) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 1 }}
            className="w-[150px] lg:w-[300px] flex flex-col items-center justify-center gap-y-4 rounded-xl bg-white bg-opacity-20 backdrop-blur-[5px] aspect-square p-2"
          >
            <div className="flex justify-center items-center">
              <div className="text-darkBrown p-2 lg:p-4 border rounded-full bg-white">
                {service.icon}
              </div>
            </div>
            <div className="text-center text-white font-bold uppercase text-xl">
              {service.name}
            </div>
            <div className="hidden lg:block text-xs lg:text-base text-center text-white">
              {service.desc}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex-1 w-full p-4 flex xl:hidden flex-col gap-4 ">
        {services.map((service: any, index: number) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 1 }}
            className="flex-1 w-full flex flex-row gap-x-2 rounded-xl bg-white bg-opacity-20 backdrop-blur-[5px] p-2"
          >
            <div className="flex justify-center items-center">
              <div className="text-darkBrown p-2 lg:p-4 border rounded-full bg-white">
                {service.icon}
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-left text-2xl text-white font-bold uppercase">
                {service.name}
              </div>
              <div className="text-left text-white">{service.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
