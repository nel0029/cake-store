/** @format */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface HeaderProps {
  pos: number;
  height: number;
  headerRef: any;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: any) => void;
}

const Header: React.FC<HeaderProps> = ({
  pos,
  height,
  headerRef,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const total = Math.round(pos / height);

  const menuIconStyle = {
    fontSize: "40px",
  };
  const mobileIconStyle = {
    fontSize: "30px",
  };

  const [main, setMain] = useState<HTMLElement | null>();
  const [services, setServices] = useState<HTMLElement | null>();
  const [gallery, setGallery] = useState<HTMLElement | null>();
  const [reviews, setReviews] = useState<HTMLElement | null>();
  const [contacts, setContacts] = useState<HTMLElement | null>();

  useEffect(() => {
    setMain(document.getElementById("main"));
    setServices(document.getElementById("services"));
    setGallery(document.getElementById("gallery"));
    setReviews(document.getElementById("reviews"));
    setContacts(document.getElementById("contacts"));
  }, [main]);

  const navItems = [
    {
      title: "Home",
      id: main,
      icon: <HomeRoundedIcon />,
      mobileIcon: <HomeRoundedIcon style={mobileIconStyle} />,
    },
    {
      title: "Products & Services",
      id: services,
      icon: <LocalMallRoundedIcon />,
      mobileIcon: <LocalMallRoundedIcon style={mobileIconStyle} />,
    },
    {
      title: "Gallery",
      id: gallery,
      icon: <ImageRoundedIcon />,
      mobileIcon: <ImageRoundedIcon style={mobileIconStyle} />,
    },
    {
      title: "Reviews",
      id: reviews,
      icon: <StarRoundedIcon />,
      mobileIcon: <StarRoundedIcon style={mobileIconStyle} />,
    },
    {
      title: "Contacts",
      id: contacts,
      icon: <PhoneRoundedIcon />,
      mobileIcon: <PhoneRoundedIcon style={mobileIconStyle} />,
    },
  ];

  const goTo = (element: HTMLElement | null) => {
    setIsMenuOpen(false);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      ref={headerRef}
      className="z-50 fixed top-0 left-0  right-0 w-full flex flex-row items-start justify-between py-4 px-2 bg-black bg-opacity-80 text-white text-opacity-[87%]"
    >
      <div className="font-poppins text-2xl flex flex-row gap-x-2 items-center">
        <img
          alt="logo"
          className="w-[40px] rounded-full aspect-square object-cover"
          src="/logo-cake-shop-jpg.jpg"
        />
        Cake Maker
      </div>
      <div className="hidden lg:flex flex-row item-center gap-x-2">
        {main &&
          navItems.map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => goTo(item.id)}
              className={`${
                total === index
                  ? "bg-white rounded text-black border-white"
                  : ""
              } border border-transparent hover:border-white rounded cursor-pointer pr-2`}
            >
              {item.icon} {item.title}
            </div>
          ))}
      </div>
      <div onClick={() => setIsMenuOpen(true)} className="block lg:hidden">
        <MenuRoundedIcon style={menuIconStyle} />
      </div>
      <motion.div
        animate={{ translateX: isMenuOpen ? "-100%" : "100%" }}
        className="absolute bg-black bg-opacity-20 flex lg:hidden flex-col right-[-100%] top-0 h-screen w-screen justify-center items-end"
      >
        <div className="w-full flex flex-col text-white gap-y-4 text-[30px] bg-darkBrown flex-grow justify-center px-4">
          <div
            onClick={() => setIsMenuOpen(false)}
            className="w-full flex lg:hidden flex-row items-center justify-end"
          >
            <CloseRoundedIcon style={mobileIconStyle} />
          </div>
          {navItems.map((item: any, index: number) => (
            <motion.div
              key={index}
              animate={{
                translateX: isMenuOpen ? "0%" : "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                delay: 0.0 + index * 0.05,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goTo(item.id)}
              className={`${total === index ? "font-bold" : ""}`}
            >
              {item.mobileIcon} {item.title}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
