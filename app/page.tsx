"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Home() {
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  const controlNavbar = () => {
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <main className="h-full w-screen bg-[#FFFFFF] relative">
      <Navbar lastScrollY={lastScrollY} />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
      <Link
        href={`#Home`}
        className={`${
          lastScrollY < 80 && "opacity-0 cursor-none -z-50"
        } w-[50px] h-[50px] bg-primary rounded-full fixed bottom-10 right-10 flex items-center justify-center text-white transition-all duration-300 opacity-100`}
      >
        <FaArrowUpLong />
      </Link>
    </main>
  );
}
