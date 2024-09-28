'use client'

import { useState } from "react";
import { SignIn, SignUp } from "@clerk/nextjs";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";

export default function NavbarWithModal() {
    const [showSignIn, setShowSignIn] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const toggleAuthForm = () => setShowSignIn(!showSignIn);

    return (
        <>
            <Navbar openSignInModal={openModal} />
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white py-6 px-8 rounded-lg relative flex justify-center items-center flex-col border shadow-xl">
                        <h1 className="text-[#00247D] font-bold text-[24px] mb-4">
                            {showSignIn ? "Login to " : "Sign Up for "}
                            <b className="font-bold">Uttarakhand Tours</b>
                        </h1>
                        {showSignIn ? (
                            <SignIn
                                routing="hash"
                                appearance={{
                                    variables: {
                                        colorPrimary: '#1E2C46',
                                    },
                                    elements: {
                                        card: 'bg-white shadow-none border-0',
                                        headerTitle: 'hidden',
                                        headerSubtitle: 'hidden',
                                        footer: 'hidden',
                                        formButtonPrimary: 'shadow-none',
                                    }
                                }}
                            />
                        ) : (
                            <SignUp
                                routing="hash"
                                appearance={{
                                    variables: {
                                        colorPrimary: '#1E2C46',
                                    },
                                    elements: {
                                        card: 'bg-white shadow-none border-0',
                                        headerTitle: 'hidden',
                                        headerSubtitle: 'hidden',
                                        footer: 'hidden',
                                        formButtonPrimary: 'shadow-none',
                                    }
                                }}
                            />
                        )}
                        <button onClick={closeModal} className="absolute top-6 right-6">
                            <RxCross2 className="w-5 h-5 hover:text-gray-500" />
                        </button>
                        <span className="mt-6 font-medium">
                            {showSignIn ? "Don’t have an account?" : "Already have an account?"}{" "}
                            <button onClick={toggleAuthForm} className="hover:underline">
                                {showSignIn ? "Sign up" : "Sign in"}
                            </button>
                        </span>
                    </div>
                </div>
            )}
        </>
    );
}
