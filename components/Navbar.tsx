"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = ({ lastScrollY }: { lastScrollY: number }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [height, setHeight] = useState(0);

  const contentRef = useRef<HTMLUListElement>(null);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [setNavOpen]);

  return (
    <motion.div
      initial={{ paddingBottom: "10px" }}
      whileInView={{ paddingBottom: "0" }}
      viewport={{ once: true }}
      transition={{
        type: "tween",
        duration: 0.5,
        delay: 0.1,
        ease: "easeOut",
      }}
      className={`${
        lastScrollY > 80 ? `bg-white text-black` : `bg-primary text-white`
      } w-full overflow-hidden h-fit md:sticky md:top-0 md:left-0 md:border-b md:border-gray-500/30 z-50`}
    >
      <div className="h-[80px] w-full flex items-center justify-between px-7 overflow-hidden md:px-16">
        <p>LOGO</p>
        <ul className={`md:flex gap-x-5 py-3 hidden md:h-full md:items-center`}>
          <li>
            <Link href={`#home`}>Home</Link>
          </li>
          <li>
            <Link href={`#service`}>Service</Link>
          </li>
          <li>
            <Link href={`#pricing `}>Pricing</Link>
          </li>
          <li>
            <Link href={`#contact`}>Contact</Link>
          </li>
          <li>
            <Link href={`#`}>Important Links</Link>
          </li>
          <li>
            <Link href={`#`}>Register</Link>
          </li>
          <li>
            <Link
              href={`#`}
              className="px-5 py-3 bg-secondary text-white font-medium rounded-full"
            >
              Login
            </Link>
          </li>
        </ul>
        <button
          onClick={handleNavClick}
          className="text-3xl text-gray-500 border border-gray-500/20 px-1 rounded-lg focus:ring-4 ring-gray-500 md:hidden"
        >
          <IoMenu />
        </button>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: navOpen ? height : 0 }}
        transition={{ duration: 0.5 }}
        className={`px-5 overflow-hidden z-10 md:hidden`}
      >
        <ul
          className={`flex flex-col gap-y-5 border-t border-gray-500/30 pt-3 pb-5`}
          ref={contentRef}
        >
          <li>
            <Link href={`#home`}>Home</Link>
          </li>
          <li>
            <Link href={`#service`}>Service</Link>
          </li>
          <li>
            <Link href={`#pricing `}>Pricing</Link>
          </li>
          <li>
            <Link href={`#contact`}>Contact</Link>
          </li>
          <li>
            <Link href={`#`}>Important Links</Link>
          </li>
          <li>
            <Link href={`#`}>Register</Link>
          </li>
          <li>
            <Link
              href={`#`}
              className="px-5 py-3 bg-secondary text-white font-medium rounded-full"
            >
              Login
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};
export default Navbar;
