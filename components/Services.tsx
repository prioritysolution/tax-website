"use client";

import { motion } from "framer-motion";
import { IoIosChatboxes } from "react-icons/io";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div
      className="w-full py-24 flex flex-col items-center text-center px-5 gap-12 sm:px-16"
      id="service"
    >
      <motion.div
        initial={{ y: "4vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "tween",
          duration: 0.8,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="flex flex-col items-center gap-3"
      >
        <p className="font-medium text-primary w-full flex items-center justify-center gap-2    ">
          <span className="text-xl">
            <IoIosChatboxes />
          </span>
          <span>Our Services</span>
        </p>
        <h3 className="font-bold text-2xl">What Solutions We Provide</h3>
        <div className="w-[60px] h-1 bg-black relative">
          <div className="bg-white h-full w-[6px] absolute right-1"></div>
        </div>
      </motion.div>
      <div className="w-full flex flex-col gap-6 md:flex-row">
        <ServiceCard
          logo={<IoIosChatboxes />}
          title="Pan Card Status Check"
          subTitle="Pan Card Status Check in Real Time."
        />
        <ServiceCard
          logo={<IoIosChatboxes />}
          title="Download e-PAN Card"
          subTitle="Download Directly e-PAN Card"
        />
        <ServiceCard
          logo={<IoIosChatboxes />}
          title="Link Aadhar with PAN"
          subTitle="Quick Link Aadhar with PAN in Real Time."
        />
      </div>
    </div>
  );
};
export default Services;
