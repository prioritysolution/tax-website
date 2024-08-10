"use client";
import { motion } from "framer-motion";

import { Heebo } from "next/font/google";

const font = Heebo({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div
      className="bg-primary flex flex-col md:flex-row gap-10 justify-center py-48 md:py-24 px-5 w-full text-white text-center md:text-start md:px-16 lg:justify-center lg:gap-20"
      id="home"
    >
      <div className="w-full flex flex-col gap-5">
        <motion.h3
          initial={{ scale: 0, y: "-4vh", opacity: 0 }}
          whileInView={{ scale: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="text-[27px] md:text-4xl lg:text-5xl leading-[32px] md:leading-[44px] font-bold"
        >
          E-KYC OTP/Biometric Through Paperless PAN Apply
        </motion.h3>
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className={`${font.className}`}
        >
          Now NSDL Pan OTP & Biometric Through, E-PAN Coming to Email within 30
          minutes. Aadhaar based instant PAN is a new facility. Aadhaar e-KYC
          OTP or Biometric Authentication.
        </motion.p>
        <div
          className={`${font.className} w-full flex items-center md:items-start justify-center md:justify-start gap-5 pt-5 `}
        >
          <motion.button
            initial={{ x: "-20vh", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "tween",
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="px-3 py-[6px] rounded-full border border-white bg-white text-black font-medium sm:px-10 sm:py-4"
          >
            Register
          </motion.button>
          <motion.button
            initial={{ x: "10vh", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "tween",
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="px-3 py-[6px] rounded-full border border-white font-medium sm:px-10 sm:py-4"
          >
            Login
          </motion.button>
        </div>
      </div>
      <div className="h-[300px] w-full bg-blue-600">{/* IMAGE */}</div>
    </div>
  );
};
export default Hero;
