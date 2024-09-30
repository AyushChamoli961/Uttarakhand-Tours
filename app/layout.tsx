import {
  ClerkProvider,
} from "@clerk/nextjs";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import NavbarWithModal from "@/components/Navbar/NavbarWithModal";

export const metadata: Metadata = {
  title: "Uttarakhand Tours - Discover Your Next Adventure",
  description:
    "Discover your next adventure with Uttarakhand Tours. We offer unforgettable tours and unbeatable experiences. Enquire now!",
  keywords:
    "travel, tours, adventure, Uttarakhand Tours, unforgettable tours, unbeatable experience",
  authors: [{ name: "Uttarakhand Tours" }],
  openGraph: {
    title: "Uttarakhand Tours - Discover Your Next Adventure",
    description:
      "Discover your next adventure with Uttarakhand Tours. We offer unforgettable tours and unbeatable experiences. Enquire now!",
    type: "website",
  },
  twitter: {
    title: "Uttarakhand Tours - Discover Your Next Adventure",
    description:
      "Discover your next adventure with Uttarakhand Tours. We offer unforgettable tours and unbeatable experiences. Enquire now!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <NavbarWithModal />
          {/* <Navbar /> */}
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
