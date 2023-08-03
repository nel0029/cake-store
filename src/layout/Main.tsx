/** @format */

import React from "react";
import { motion } from "framer-motion";

import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";

interface MainProps {
  headerHeight: number;
}

const Main: React.FC<MainProps> = () => {
  const transitionValues = {
    duration: 0.8,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "reverse",
  };

  const goToServices = () => scrollTo(0, window.innerHeight);
  return (
    <div className="w-ful h-screen flex flex-col overflow-hidden relative ">
      <div className="absolute top-0 w-full h-screen flex flex-row">
        <div className="relative w-full">
          <div className="z-20 absolute top-0 bottom-0 left-0 right-0  font-poppins p-4 bg-black bg-opacity-30">
            <motion.div className="z-30 px-4 absolute top-0 flex flex-col justify-center bottom-0 left-0 w-full max-w-[300px] text-[75px] leading-none text-white text-shadow font-extrabold ">
              <motion.span
                initial={{ translateX: "-100%" }}
                whileInView={{ translateX: "0%" }}
                transition={{ delay: 0.0 }}
                exit={{ translateX: "0%" }}
              >
                Make
              </motion.span>
              <motion.span
                initial={{ translateX: "-100%" }}
                whileInView={{ translateX: "0%" }}
                transition={{ delay: 0.05 }}
                exit={{ translateX: "0%" }}
              >
                your
              </motion.span>
              <motion.span
                initial={{ translateX: "-100%" }}
                whileInView={{ translateX: "0%" }}
                transition={{ delay: 0.1 }}
                exit={{ translateX: "0%" }}
              >
                cake
              </motion.span>
              <motion.span
                initial={{ translateX: "-100%" }}
                whileInView={{ translateX: "0%" }}
                transition={{ delay: 0.15 }}
              >
                special
              </motion.span>
            </motion.div>
          </div>
          <div className="z-10 absolute top-0 bottom-0 w-full flex justify-end bg-darkBrown">
            <img
              loading="lazy"
              alt="hero"
              className=" w-full object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/files-b4812.appspot.com/o/cake-store%2Fdavid-holifield-kPxsqUGneXQ-unsplash%20(1).jpg?alt=media&token=96006d18-2732-4132-a088-99e264fb2c34"
            />
          </div>
          <div className="absolute z-30 left-0 right-0 bottom-0 flex flex-col items-center w-full ">
            <motion.div
              onClick={goToServices}
              animate={{ y: ["-10px", "-20px"] }}
              transition={{
                y: transitionValues,
              }}
              className="bg-white border rounded-full py-1 flex flex-col items-center justify-center cursor-pointer"
            >
              <KeyboardDoubleArrowDownRoundedIcon
                style={{ fontSize: "32px" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
