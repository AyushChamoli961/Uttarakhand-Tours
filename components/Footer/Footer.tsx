// import Image from 'next/image';
// // import logo from '@/assets/logo.png';
// import { IoIosPhonePortrait } from 'react-icons/io';
// import { CiLocationOn } from 'react-icons/ci';
// import { CiStopwatch } from 'react-icons/ci';
// import { FaFacebookF } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
// import { FaInstagram } from 'react-icons/fa';
// import { FaWhatsapp } from 'react-icons/fa';
// import { MdCopyright } from 'react-icons/md';
// import Link from 'next/link';

// export default function Footer() {
//     return (
//         <div className="w-full bg-slate py-[2rem]">
//             <div className="w-10/12 mx-auto lg:flex lg:flex-row flex flex-col justify-between gap-[2rem]">
//                 {/* First Group */}
//                 <div className="lg:w-3/12 lg:flex lg:flex-col lg:justify-center lg:items-center space-y-4">
//                     <Image src={'/logo.png'}
//                      width={180}
//                      height={180}
//                      className="h-auto"
//                      alt="logo" />
//                     <p className="font-text">
//                     Our knowledgeable guides provide deep insights into the rich history and culture of every destination, making your travels more enriching and memorable
//                     </p>
//                 </div>

//                 {/* Second Group */}
//                 <div className="lg:w-3/12 lg:flex lg:flex-col lg:justify-start  font-text items-start space-y-3">
//                     <h1 className="font-heading font-bold">Contact Info</h1>
//                     <div className="flex items-center gap-3">
//                         <span>
//                             <IoIosPhonePortrait />
//                         </span>
//                         +919978900801
//                     </div>
//                     <Link href='https://maps.app.goo.gl/ygfsgvXLcteN9kw56' className="flex items-center gap-3">
//                         <span>
//                             <CiLocationOn />
//                         </span>
//                         Tulas Dehradun
//                     </Link>
//                     <div className="flex items-center gap-3">
//                         <span>
//                             <CiStopwatch />
//                         </span>
//                         Mon-Sat 8.00 AM - 05.00 PM
//                         <br/>
//                         Sunday CLOSED
//                     </div>
//                 </div>

//                 {/* Third Group */}
//                 <div className="lg:w-3/12 lg:flex lg:flex-col lg:justify-center font-text space-y-3">
//                     <h1 className="font-heading font-bold">Socials</h1>
//                     <div className="flex items-center gap-3">
//                         <span>
//                             <FaFacebookF />
//                         </span>
//                         Facebook
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <span>
//                             <FaXTwitter />
//                         </span>
//                         X
//                     </div>
//                     <Link href={
//             "https://www.instagram.com/flyelite.co.in?igsh=MXZ2Z2ZlaXdsODNtOA=="
//           } className="flex items-center gap-3">
//                         <span>
//                             <FaInstagram />
//                         </span>
//                         Instagram
//                     </Link>
//                     <Link href="https://api.whatsapp.com/send/?phone=%2B919978900801" className="flex items-center gap-3">
//                         <span>
//                             <FaWhatsapp />
//                         </span>
//                         Whatsapp
//                     </Link>
//                 </div>
//             </div>
//             <hr className="border-black w-10/12 mx-auto my-[2rem]" />
//             <p className="flex justify-center items-center font-text">
//                 <span>
//                     <MdCopyright />
//                 </span>
//                 2024 Fly Elite All Rights Reserved
//             </p>
//         </div>
//     );
// }
// import Image from 'next/image';
import Image from "next/image";
import logo from "@/public/ut-logo.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn, CiStopwatch } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import Fimg1 from "@/public/assets/Footer/Fimg1.jpeg";
import Fimg2 from "@/public/assets/Footer/Fimg2.jpeg";
import Fimg3 from "@/public/assets/Footer/Fimg3.jpeg";
import Fimg4 from "@/public/assets/Footer/Fimg4.jpeg";
import Fimg5 from "@/public/assets/Footer/Fimg5.jpeg";
import Fimg6 from "@/public/assets/Footer/Fimg6.jpeg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-slate py-[2rem]">
      <div className="w-10/12 mx-auto lg:flex lg:flex-row flex flex-col justify-between gap-[2rem]">
        {/* First Group */}
        <div className="lg:w-3/12 lg:flex lg:flex-col lg:justify-center lg:items-start space-y-4">
          <Image src={logo} width={105} height={55} alt="logo" />
          <p className="font-text">
            Our knowledgeable guides provide deep insights into the rich history
            and culture of every destination, making your travels more enriching
            and memorable.
          </p>
        </div>

        {/* Second Group */}
        <div className="lg:w-3/12 lg:flex lg:flex-col lg:justify-start font-text items-start space-y-3">
          <h1 className="font-heading font-bold">Contact Info</h1>
          <div className="flex items-center gap-3">
            <IoIosPhonePortrait />
            +919978900801
          </div>
          <Link
            href="https://maps.app.goo.gl/ygfsgvXLcteN9kw56"
            className="flex items-center gap-3"
          >
            <CiLocationOn />
            Tulas Dehradun{" "}
          </Link>
          <div className="flex items-center gap-3">
            <CiStopwatch />
            Mon-Sat 8.00 AM - 05.00 PM Sunday CLOSED
          </div>

          {/* Logo link */}
          <div className="flex items-center gap-5">
            <Link
              href=""
              className="bg-[#1E2C46] text-white px-3 py-3 rounded-full"
            >
              <FaFacebookF />
            </Link>
            <Link
              href=""
              className="bg-[#1E2C46] text-white px-3 py-3 rounded-full"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="https://www.instagram.com/flyelite.co.in?igsh=MXZ2Z2ZlaXdsODNtOA=="
              className="bg-[#1E2C46] text-white px-3 py-3 rounded-full"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B919978900801"
              className="bg-[#1E2C46] text-white px-3 py-3 rounded-full"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>

        {/* Third Group */}
        {/* <div className="lg:w-3/12 lg:flex lg:flex-col lg:justify-center font-text space-y-3">
          <h1 className="font-heading font-bold">Recent Trips</h1>
          <div className='grid grid-cols-3 gap-3 grid-rows-2'>
            <div className='rounded-lg'>
              <Image src={Fimg1} alt="img1" className='rounded-lg' />
            </div>
            <div className='rounded-lg'>
              <Image src={Fimg2} alt="img2" className='rounded-lg' />
            </div>
            <div className='rounded-lg'>
              <Image src={Fimg3} alt="img3" className='rounded-lg' />
            </div>
            <div className='rounded-lg'>
              <Image src={Fimg4} alt="img4" className='rounded-lg' />
            </div>
            <div className='rounded-lg'>
              <Image src={Fimg5} alt="img5" className='rounded-lg' />
            </div>
            <div className='rounded-lg'>
              <Image src={Fimg6} alt="img6" className='rounded-lg' />
            </div>
          </div>
        </div> */}
      </div>
      <hr className="border-black w-10/12 mx-auto my-[2rem]" />
      <div className="w-10/12 mx-auto flex lg:justify-between justify-center items-center font-text">
        <p className="flex items-center">
          <MdCopyright />
          2024 Fly Elite All Rights Reserved
        </p>
        <ul className="hidden lg:flex gap-4">
          <li>Home</li>
          <li>Destinations</li>
          <li>Tours</li>
          <li>Themes</li>
          <li>Flight</li>
          <li>Cruise</li>
          <li>Visa Services</li>
        </ul>
      </div>
    </div>
  );
}
