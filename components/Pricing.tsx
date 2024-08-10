"use client";

import { motion } from "framer-motion";
import { IoIosChatboxes } from "react-icons/io";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div
      className="w-full flex flex-col items-center text-center px-5 gap-12 pb-28 sm:px-16"
      id="pricing"
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
        <p className="font-medium text-primary w-full flex items-center justify-center gap-2">
          <span className="text-xl">
            <IoIosChatboxes />
          </span>
          <span>Our Pricing</span>
        </p>
        <h3 className="font-bold text-2xl">Select Plans</h3>
        <div className="w-[60px] h-1 bg-black relative">
          <div className="bg-white h-full w-[6px] absolute right-1"></div>
        </div>
      </motion.div>
      <div className="w-full flex flex-col gap-6 md:flex-row">
        <PricingCard
          title="Retailer"
          price={225}
          list={[
            "NSDL Pan Agent",
            "Instant ID Activate",
            "OTP/Biometric Through",
            "Automatic Refund",
            "High Margin",
            "Free 24/7 WhatsApp Support",
            "24/7 Online Billing",
          ]}
        />
        <PricingCard
          title="Distributor"
          price={449}
          list={[
            "Free Distributor / Retailers",
            "NSDL Pan Agent",
            "Instant ID Activate",
            "Automatic Refund",
            "High Margin",
            "Free 24/7 WhatsApp Support",
            "24/7 Online Billing",
          ]}
        />
        <PricingCard
          title="Super Distributor"
          price={949}
          list={[
            "Free Distributor / Retailers",
            "NSDL Pan Agent",
            "Instant ID Activate",
            "Automatic Refund",
            "High Margin",
            "Free 24/7 WhatsApp Support",
            "24/7 Online Billing",
          ]}
        />
      </div>
    </div>
  );
};
export default Pricing;
