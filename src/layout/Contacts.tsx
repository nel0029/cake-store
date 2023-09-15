/** @format */

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

interface ContactsProps {
  headerHeight: number;
}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <div
      id="contacts"
      className=" border-transparent flex flex-col gap-y-8 py-4"
    >
      <div className=" w-full flex flex-row items-center justify-center">
        <div className="text-[40px] text-white font-poppins font-bold uppercase">
          Contact Us
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:items-stretch flex-grow p-4 text-white text-opacity-[87%] gap-y-4">
        <div className=" flex-1 flex flex-col gap-y-2 lg:gap-y-4">
          <div className="text-xl font-bold">Socials</div>
          <div className="flex flex-row gap-x-1">
            <div>
              <FacebookIcon />
            </div>
            <div>www.facebook.com/CakeMaker</div>
          </div>
          <div className="flex flex-row gap-x-1">
            <div>
              <InstagramIcon />
            </div>
            <div>@cakemaker</div>
          </div>
          <div className="flex flex-row gap-x-1">
            <div>
              <TwitterIcon />
            </div>
            <div>www.twitter.com/CakeMaker</div>
          </div>
          <div className="flex flex-row gap-x-1">
            <div>
              <FacebookIcon />
            </div>
            <div>www.facebook.com/CakeMaker</div>
          </div>
          <div className="flex flex-row gap-x-1">
            <div>
              <TelegramIcon />
            </div>
            <div>t.me.com/CakeMaker</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-4">
          <div className="text-xl font-bold">Contacts</div>
          <div className="grid grid-cols-2 gap-y-2">
            <div className="">
              <LocalPhoneIcon /> Telephone:
            </div>
            <div className="">
              <div>8922-1234</div>
              <div>8923-12345</div>
            </div>
            <div>
              <PhoneIphoneIcon /> Cellphone Numbers:
            </div>
            <div className="">
              <div>(0907) 345 6789 - SMART</div>
              <div>(0955) 345 6790 - Globe</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-4">
          <div className="text-xl font-bold">Location</div>
          <div className=" flex flex-row gap-x-2">
            <PlaceIcon />
            <div>
              13 Lapu-lapu st. Brgy. San Diego Poblacion Gumaca, Quezon Province
              Philippines
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
