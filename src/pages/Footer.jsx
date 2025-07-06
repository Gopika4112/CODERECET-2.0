import React from "react";
import { useState } from "react";

import logo from "../assets/CodeRecet_LOGO.png";
import vector from "../assets/Vector.png";
import twitter from "../assets/twitter logo.png";
import facebook from "../assets/facebook logo.png";
import discord from "../assets/Discord logo.png";
import linkedin from "../assets/Linkedin logo.png";
import github from "../assets/Github logo.png";
import tinkerhub from "../assets/tinkerhub.png";
import iet from "../assets/IET.png";
import instagram from "../assets/instagram.svg";

function Footer() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div
      id="contact"
      className="bg-custom-black md:p-10 justify-center items-center flex overflow-x-hidden "
    >
      <div className="bg-custom-yellow w-full max-w-[1300px] h-auto md:h-[560px] md:rounded-2xl rounded-2xl rounded-b-none mx-auto">
        {/* logo*/}
        <div className="flex md:justify-start justify-center items-center md:pt-10 pt-2 md:pl-20 pl-4 md:h-[150px] h-[120px] w-full">
          <img src={logo} className="w-20 h-20 max-w-full" />
        </div>
        {/* divider */}
        <div className="h-[1px] bg-custom-black md:mx-20 mx-8 w-full"></div>
        <div className="flex md:flex-row flex-col md:gap-24 gap-8 md:justify-center md:mx-auto md:h-[200px] pt-8 md:pt-0">
          {/* Links */}
          <div className="flex flex-col md:w-[600px] gap-2 md:pl-20 pl-4 md:pt-10 pt-0 md:h-[230px] h-[200px]">
            <div className=" flex flex-row md:pl-0 pl-4">
              <span className="text-2xl font-poppins">&gt;</span>
              <a href="#landing" className="block">
                <div className="text-lg pl-4  text-[25px] font-poppins">
                  Home
                </div>
              </a>
            </div>
            <div className=" flex flex-row md:pl-0 pl-4">
              <span className="text-2xl font-poppins">&gt;</span>
              <a href="#about" className="block">
                <div className="text-lg pl-4  text-[25px] font-poppins">
                  About us
                </div>
              </a>
            </div>

            <div className=" flex flex-row md:pl-0 pl-4">
              <span className="text-2xl font-poppins">&gt;</span>
              <a href="#gallery" className="block">
                <div className="text-lg pl-4  text-[25px] font-poppins">
                  Gallery
                </div>
              </a>
            </div>
            <div className="flex flex-col md:pl-0 pl-4">
              <div
                className="flex flex-row items-center cursor-pointer"
                onClick={() => setShowContacts(!showContacts)}
              >
                <span className="text-2xl font-poppins">&gt;</span>
                <div className="text-lg pl-4 text-[25px] font-poppins">
                  Contact Us
                </div>
              </div>

              {/* Dropdown */}
              {showContacts && (
                <div className="pl-8 pt-2 space-y-1 transition-all duration-300 ease-in-out text-[18px] font-poppins">
                  <div>
                    <span className="font-semibold">Niyas:</span> +91 77363
                    48128
                  </div>
                  <div>
                    <span className="font-semibold">Josin:</span> +91 94479
                    63228
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center mx-auto items-center md:items-end md:flex-col flex-row md:ml-auto md:gap-6 md:h-[260px] h-[40px] w-full md:w-auto gap-x-8 mt-8 md:mt-0">
            <div className="hidden md:block text-2xl text-custom-black md:pr-10 font-poppins ">
              Hackathon organized by:
            </div>
            <div className="md:pr-8 flex justify-center ">
              <img
                src={tinkerhub}
                className="w-40 md:w-48 h-auto max-w-full mr-8"
              />
            </div>
            <div className="md:pr-8 flex justify-center pr-3">
              <img src={iet} className="w-40 md:w-48 h-auto max-w-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-row md:justify-start md:gap-12 md:pl-20 md:pt-12 gap-4 pt-10 w-full pb-4 md:pb-0 min-h-[120px]">
          <a
            href="https://www.instagram.com/coderecet/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:brightness-200"
          >
            <img src={instagram} alt="Instagram" className="w-12 h-12 mt-6 " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
