import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
    return (

        <div className="relative flex flex-col justify-center items-center h-screen overflow-hidden z-0">
            <div className="space-y-4 text-white text-center w-11/12 relative z-10 px-4 hidden lg:flex flex-col">
                <h1 className="text-[3rem] font-heading font-bold drop-shadow-lg">
                    <Skeleton width={550} height={40} />
                </h1>
                <p className="capitalize mb-8 font-text text-[1.2rem] drop-shadow-md">
                    <Skeleton width={400} height={20} />
                </p>
            </div>

            <div className="space-y-4 text-white text-center w-full px-4 flex lg:hidden flex-col">
                <h1 className="text-[3rem] font-heading font-bold drop-shadow-lg">
                    <Skeleton width={"100%"} height={40} />
                </h1>
                <p className="capitalize mb-8 font-text text-[1.2rem] drop-shadow-md">
                    <Skeleton width={"100%"} height={20} />
                </p>
            </div>

            {/* Input Section */}
            <div className="relative z-10 w-full max-w-5xl px-4 mt-8">
                <div className="p-2 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center sm:flex-col sm:space-y-4">
                    <div className="w-full ">
                        <Skeleton width="100%" height={40} />
                    </div>
                    <div className="w-full ">
                        <Skeleton width="100%" height={40} />
                    </div>
                    <div className="w-full">
                        <Skeleton width="100%" height={40} />
                    </div>
                    <button
                        className=" bg-[#00247D] duration-200 px-12 rounded-lg"
                        disabled
                    >
                        <Skeleton width="200" height={40} />
                    </button>
                </div>
            </div>

            {/* Contact Us */}
            <p className="text-white mt-4 lg:mt-8 sm:mt-8 sm:block text-center hover:cursor-pointer">
                <Skeleton width={100} height={20} />
            </p>
        </div>

    );
};

export default Loading;
