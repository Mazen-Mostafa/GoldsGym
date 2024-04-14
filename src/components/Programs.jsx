import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import yogaImg from "../assets/body-part.png";
import weightImg from "../assets/target.png";
import bodyImg from "../assets/equipment.png";
import strngthImg from "../assets/logo2.png";
import Aos from "aos";
import { useEffect } from "react";

const boxes = [
  {
    img: strngthImg,
    title: "Strength Training",
    discription:
      "Unlock your potential with a dynamic strength training program for lasting gains.",
    duration: 3000,
  },
  {
    img: yogaImg,
    title: "Basic Yoga",
    discription:
      "Discover serenity and flexibility through this foundational, beginner-friendly yoga.",
    duration: 2000,
  },
  {
    img: bodyImg,
    title: "Body Building",
    discription:
      "Transform your physique with a comprehensive bodybuilding regimen strength and size.",
    duration: 4000,
  },
  {
    img: weightImg,
    title: "Weight Loss",
    discription:
      "Achieve sustainable weight loss through a balanced approach, combining nutrition.",
    duration: 5000,
  },
];

const Programs = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="sm:ml-[50px] m-auto mt-10">
      <div className="flex flex-col items-center sm:flex-row lg:justify-between">
        <h2 className="sm:text-[40px] sm:w-[1000px] w-[300px]  text-[30px] font-bold ">
          The best Programs We Offer <br /> For You
        </h2>
        <p className="sm:w-[700px] w-[300px] text-[20px]">
          Stop searching, start thriving! We've handpicked programs just for
          you. Unlock your potential, from fitness feats to career climbs. Let's
          make magic happen!
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[20px] mt-10 sm:flex-row ">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="w-[300px] h-[250px] hover:rounded-none hover:shadow-md bg-[#fff] mx-2 p-4 rounded-xl"
            data-aos="fade-up"
            data-aos-duration={box.duration}
          >
            <img src={box.img} alt="img" className="w-[60px] h-[60px] my-2" />
            <h4 className="text-primary text-[27px]">{box.title}</h4>
            <p className="text-[18px] mt-2">{box.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
