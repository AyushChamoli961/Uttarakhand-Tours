// import header from "/assets/header.jpg";
// import logo from "/assets/FlyElite.png";
// import whatsapp from "/assets/whatapp.png";
// import fb from "/assets/fb.png";
// import insta from "/assets/insta.png";
import Link from "next/link";
import React from "react";

export default function Landing() {
  return (
    <div className="w-[100vw]  flex flex-col items-center gap-4">
      <div className=" my-4 mt-[4.75rem] mx-auto">
        <img
          src={"/assets/header.jpg"}
          alt=""
          className="w-[100vw] md:h-[70vh] md:object-cover"
        />
      </div>
      <div className=" flex flex-col gap-4 items-center">
        <img
          src={"/assets/FlyElite.png"}
          alt="logo"
          className="w-[132px] h-[68px] animate-vibrate "
        />
        <p className=" font-serif">
          Thank you for being here! Click <br />
          on the links to learn more.
        </p>
      </div>
      <div className=" flex flex-col gap-4">
        <div className=" flex gap-2">
          <button className=" bg-black hover:font-bold hover:scale-105 text-white  px-8 py-2 duration-200 ">
            Fly Elite
          </button>
          <button className=" bg-black text-white hover:scale-105 duration-200 hover:font-bold  px-8 py-2">
            <Link href={"https://maps.app.goo.gl/ygfsgvXLcteN9kw56"}>
              Location
            </Link>
          </button>
        </div>
        {/* <button className=" border border-black hover:bg-black hover:text-white duration-200  px-8 py-2"> */}
        <Link
          className=" border border-black hover:bg-black hover:text-white duration-200  px-8 py-2"
          href={
            "https://www.instagram.com/flyelite.co.in?igsh=MXZ2Z2ZlaXdsODNtOA=="
          }
        >
          Instagram
        </Link>
        {/* </button> */}
        <Link
          href={"#"}
          className=" border border-black hover:bg-black hover:text-white duration-200  px-8 py-2"
        >
          Facebook
        </Link>
        {/* <button className=" border border-black  hover:bg-black hover:text-white duration-200 px-8 py-2"> */}
        <Link
          className=" border border-black  hover:bg-black hover:text-white duration-200 px-8 py-2"
          href="https://api.whatsapp.com/send/?phone=%2B919978900801"
        >
          Whatsapp
        </Link>
        {/* </button> */}
      </div>
      <div className=" flex gap-4 justify-between my-4">
        <Link href="#">
          <img
            src={"/assets/fb.png"}
            alt="wp"
            className=" hover:scale-105 duration-200 cursor-pointer"
          />
        </Link>
        <Link href="https://www.instagram.com/flyelite.co.in?igsh=MXZ2Z2ZlaXdsODNtOA==">
          <img
            src={"/assets/insta.png"}
            alt="wp"
            className="hover:scale-105 duration-200 cursor-pointer"
          />
        </Link>
        <Link href="https://api.whatsapp.com/send/?phone=%2B919978900801">
          <img
            src={"/assets/whatapp.png"}
            alt="wp"
            className=" cursor-pointer hover:scale-105 duration-200"
          />
        </Link>
      </div>
      <hr className=" border border-black w-10/12" />
      <div className="mx-auto my-4 flex flex-col items-center gap-2 px-6">
        <h1 className=" font-bold">DO YOU WANT TO CONNECT WITH US?</h1>
        <div className="flex mt-3">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="border bg-slate-400 bg-opacity-20 outline-none border-black py-2 px-2 "
          />
          <button className=" bg-black text-white font-heading px-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
