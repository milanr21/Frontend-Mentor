"use client"

import React, { useState } from "react";
import Image from "next/image";
import bgImg from "@/assets/images/background-pattern-desktop.svg";
import starIcon from "@/assets/images/icon-star.svg"
import addIcon from "@/assets/images/icon-plus.svg"
import minusIcon from "@/assets/images/icon-minus.svg"

const Faq = () => {

  const [isShow, setIsShow] = useState(false)


  const handleShow = () => {
    setIsShow(!isShow)
  }

  const [istoggle, setIsToggle] = useState(false)

  return (
    <div className="relative flex  bg-red-200 flex-row items-center justify-center min-h-screen">
      <div className=" bg-green-200">
        <div >

          <div className=" mx-auto    bg-white p-6 rounded-lg" >

            <div>
              <div className="flex flex-row" >
                <Image src={starIcon} alt="star-icon" />
                <h2 className="text-xl md:text-3xl font-bold"  >FAQ</h2>
              </div>

              <div>
                <ul className="w-[35rem]" >
                  <li onClick={handleShow} className="flex text-md md:text-lg font-semibold flex-row justify-between gap-4 
                cursor-pointer hover:text-purple-700 transition-all duration-200 ease-in-out
                
                
                "   ><span>What is your refund policy?</span>


                    <span>
                      <Image src={isShow ? minusIcon : addIcon} alt="toggle-icon" width={30} height={30} />
                    </span>

                  </li>
                  {
                    isShow && <p className="text-sm md:text-base transform transition-all duration-200 ease-in-out  "  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, maxime?</p>
                  }

                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div >
  );
};

export default Faq;
