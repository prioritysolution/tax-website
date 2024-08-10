"use client";
import { motion } from "framer-motion";
import { Heebo } from "next/font/google";

const font = Heebo({
  subsets: ["latin"],
});

interface PricingCardProps {
  title: string;
  price: number;
  list: string[];
}
const PricingCard = ({ title, price, list }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ y: "30vh", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "tween",
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut",
      }}
      className="w-full py-5 px-5 bg-primary rounded-xl flex flex-col gap-3 text-white text-start"
    >
      <div className="w-full flex flex-col items-start gap-y-1">
        <h3 className="font-medium text-xl">{title}</h3>
        <p className={font.className}>&#8377; {price}</p>
        <ul className="flex flex-col items-start w-full list-disc px-8">
          {list.map((item, id) => (
            <li key={id} className="flex items-start gap-5 relative">
              <div className="w-[6px] h-[6px] rounded-full bg-white absolute top-2 -left-4  block" />
              <span className={`${font.className} w-fit`}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`${font.className} w-full bg-white text-primary py-2 rounded-full font-medium sm:py-4`}
      >
        Register
      </button>
    </motion.div>
  );
};
export default PricingCard;
