import { Heebo } from "next/font/google";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";

const font = Heebo({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div
      className="w-full flex flex-col gap-12 pt-24 px-5 bg-primary text-white sm:px-16 md:items-center"
      id="contact"
    >
      <div className="flex flex-col gap-12 smd:w-[70%] md:w-full md:flex-row">
        <div className="flex flex-col gap-5 md:w-1/3">
          <h4 className="text-xl font-medium">Quick Link</h4>
          <ul className={`flex flex-col gap-3 ${font.className}`}>
            <li className="flex items-center gap-2">
              <span className="text-xs">
                <FaChevronRight />
              </span>
              Privacy Policy
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xs">
                <FaChevronRight />
              </span>
              Terms and Conditions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xs">
                <FaChevronRight />
              </span>
              Refund and Cancelation Policy
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 w-full md:w-1/3">
          <h4 className="text-xl font-medium">Get In Touch</h4>
          <div className={`flex flex-col gap-3 ${font.className} w-full`}>
            <p className="flex items-start w-full">
              <span className="text-lg mr-5 relative top-1">
                <FaLocationDot />
              </span>
              <span className="">
                AMBUR, VELLORE, THIRUPATTUR, TAMIL NADU - ( 635802 )
              </span>
            </p>
            <p className="flex items-start w-full">
              <span className="text-lg mr-5 relative top-1">
                <IoCall />
              </span>
              <span className="">
                9677940866 / | BUISNESS WORKING HOURS : MON TO SAT FROM MORNING
                11.00 AM TO NIGHT 10.30 PM
              </span>
            </p>
            <p className="flex items-start w-full">
              <span className="text-lg mr-5 relative top-1">
                <IoMail />
              </span>
              <span className="">technicalalhanpanservices @gmail.com</span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className=" p-3 rounded-full border border-white/10 flex items-center justify-center text-center">
              <FaTwitter />
            </div>
            <div className=" p-3 rounded-full border border-white/10 flex items-center justify-center text-center">
              <FaFacebookF />
            </div>
            <div className=" p-3 rounded-full border border-white/10 flex items-center justify-center text-center">
              <FaYoutube />
            </div>
            <div className=" p-3 rounded-full border border-white/10 flex items-center justify-center text-center">
              <FaInstagram />
            </div>
            <div className=" p-3 rounded-full border border-white/10 flex items-center justify-center text-center">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:w-1/3">
          <h4 className="text-xl font-medium">Whatsapp Messanger</h4>
          <p className={`${font.className}`}>Free 24/7 WhatsApp Support</p>
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Enter Your Message"
              className={`${font.className} w-full px-5 py-3 border-none ring-0 rounded-full outline-none placeholder:text-gray-500`}
            />
            <BiLogoTelegram className="text-3xl absolute text-primary right-5 top-2" />
          </div>
        </div>
      </div>
      <div
        className={`${font.className} text-center text-sm py-6 border-t border-white/10 flex flex-col gap-5 smd:flex-row smd:justify-between smd:items-center smd:w-full`}
      >
        <p>
          &copy; COPYRIGHT ALL RIGHTS RESERVED @2017-2024 All Right Reserved.
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link href={`#`}>Home</Link>
          <span className="h-[20px] w-[1px] bg-white/10" />
          <Link href={`#`}>Login</Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
