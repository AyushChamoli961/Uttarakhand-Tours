import {
  ClerkProvider,
} from "@clerk/nextjs";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import NavbarWithModal from "@/components/Navbar/NavbarWithModal";

export const metadata: Metadata = {
  title: "Fly Elite - Discover Your Next Adventure",
  description:
    "Discover your next adventure with Fly Elite. We offer unforgettable tours and unbeatable experiences. Enquire now!",
  keywords:
    "travel, tours, adventure, Fly Elite, unforgettable tours, unbeatable experience",
  authors: [{ name: "Fly Elite" }],
  openGraph: {
    title: "Fly Elite - Discover Your Next Adventure",
    description:
      "Discover your next adventure with Fly Elite. We offer unforgettable tours and unbeatable experiences. Enquire now!",
    url: "https://flyelite.co.in",
    type: "website",
  },
  twitter: {
    title: "Fly Elite - Discover Your Next Adventure",
    description:
      "Discover your next adventure with Fly Elite. We offer unforgettable tours and unbeatable experiences. Enquire now!",
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
