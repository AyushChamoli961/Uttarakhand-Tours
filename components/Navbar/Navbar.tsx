"use client";

import logo from "@/public/ut-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar({ openSignInModal }: any) {
  const [showNav, setShowNav] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("bg-white shadow-md");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContactUs = () => {
    const element = document.getElementById("contact-us");
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className={` ${showNav ? "h-[100vh] " : ""}`}>
      {/* <div className={`  fixed z-10 md:left-[50%] text-[0.9rem] flex items-center justify-between w-full mb-4 mx-auto font-text  p-5 ${bgColor}`}> */}

      <div
        className={` w-full px-[5rem] text-[0.9rem]  flex justify-between mx-auto items-center py-5  font-text top-0 fixed left-[50%] -translate-x-[50%] z-10   ${bgColor}`}
      >
        <Link href={"/"}>
          <Image
            src={logo}
            width={140}
            height={180}
            className={`h-28 w-40 ${showNav ? "hidden" : ""}`}
            alt="logo"
          />
        </Link>
        <ul className=" hidden lg:flex gap-[3rem] lg:gap-[2rem] ">
          <Link href={"#tours"}>TOURS</Link>
          <Link href={"/hotel"}>HOTEL</Link>
        </ul>
        <div className="text-white lg:flex  hidden space-x-6 ">
          <button onClick={scrollToContactUs}
            title="a"
            className=" hover:bg-[#01174f] transition-colors duration-200 px-6 py-2 rounded-lg bg-[#00247D]"
          >
            ENQUIRE
          </button>

          <SignedOut>
            <button
              // onClick={() => router.push("/sign-in")}
              onClick={openSignInModal}
              title="b"
              className="px-6 py-2 hover:bg-[#01174f] transition-colors duration-200 rounded-lg bg-[#00247D]"
            >
              LOGIN/REGISTER
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <div className=" lg:hidden">
          <button title="c" onClick={() => setShowNav(!showNav)}>
            <RxHamburgerMenu className=" text-[1.5rem] " />
          </button>
        </div>
      </div>

      {/* for mobile screen  */}

      <div
        className={` w-[75%] h-[100vh] bg-slate-200 absolute top-0 ${showNav ? "block" : "hidden"
          } flex flex-col Navbar justify-between `}
      >
        {/* Navbar in side section  */}

        <div>
          {/* section-1  */}
          <div className=" pl-[2rem]  gap-4 flex py-[2rem]">
            <div className=" flex justify-center items-center w-[50px] h-[50px] bg-[#00247D] rounded-full">
              <span className="">
                <FaUser className=" text-white text-[1.2rem]" />
              </span>
            </div>
          </div>

          {/* section-2  */}
          <div className=" text-[1.2rem] flex flex-col space-y-[1rem]">
            <hr className=" border-black border " />
            <h1 className=" pl-[2rem]">
              <Link href={"/visa"}>Visa</Link>
            </h1>
            <hr className=" border-black border" />
            <h1 className=" pl-[2rem]">
              <Link href={"/flight"}>Flight</Link>
            </h1>
            <hr className=" border-black border" />
            <h1 className=" pl-[2rem]">
              <Link href={"/cruise"}>Cruise</Link>
            </h1>
            <hr className=" border-black border" />
            <h1 className=" pl-[2rem]">
              <Link href={"/hotel"}>Hotel</Link>
            </h1>
          </div>
        </div>

        {/* buttons  */}

        <div className=" text-[0.8rem]  mb-[2rem] mx-auto flex flex-col  text-white  space-y-4 ">
          {/* <SignedOut>
            <Link
              href={"/sign-in"}
              className=" hover:bg-[#01174f] transition-colors duration-200 px-6 py-2 rounded-3xl bg-[#00247D]"
            >
              LOGIN / REGISTER
            </Link>
          </SignedOut> */}
          <SignedOut>
            <button
              // onClick={() => router.push("/sign-in")}
              onClick={openSignInModal}
              title="b"
              className="hover:bg-[#01174f] transition-colors duration-200 px-6 py-2 rounded-3xl bg-[#00247D]"
            >
              LOGIN/REGISTER
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <button className=" hover:bg-[#01174f] transition-colors duration-200 px-6 py-2 rounded-3xl bg-[#00247D]">
            ENQUIRE
          </button>
        </div>
      </div>
    </div>
  );
}
