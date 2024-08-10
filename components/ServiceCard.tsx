"use client";

import { Heebo } from "next/font/google";
import { ReactElement } from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

const font = Heebo({
  subsets: ["latin"],
});

interface ServiceCardProps {
  logo: ReactElement<IconType>;
  title: string;
  subTitle: string;
}
const ServiceCard = ({ logo, title, subTitle }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "linear",
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut",
      }}
      className="w-full py-8 rounded-xl shadow-[1px_1px_200px_-5px_rgba(0,0,0,0.10)] bg-white flex flex-col items-center gap-16 px-7 justify-between group hover:bg-primary transition-all delay-50 duration-500"
    >
      <div className="flex flex-col items-center gap-5 text-center ">
        <div className="text-5xl text-white h-[80px] w-[80px] bg-primary flex items-center justify-center rounded-full group-hover:bg-white group-hover:text-primary transition-all delay-50 duration-500">
          {logo}
        </div>
        <h4 className="text-xl font-medium group-hover:text-white transition-all delay-50 duration-500">
          {title}
        </h4>
        <p
          className={`text-[rgb(136,136,136)] group-hover:text-white transition-all delay-50 duration-500 ${font.className}`}
        >
          {subTitle}
        </p>
      </div>
      <div className="w-fit relative flex items-center justify-center text-center px-4 h-[38px]">
        <div className="w-[38px] bg-gray-400/30 transition-all delay-20 group-hover:w-full group-hover:bg-white duration-300 rounded-full h-full absolute left-0 top-0" />
        <p className={`font-medium text-primary z-10 ${font.className} `}>
          Read More
        </p>
      </div>
    </motion.div>
  );
};
export default ServiceCard;
