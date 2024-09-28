import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
    return (
        <div className="w-full md:w-[20rem] rounded-t-3xl flex flex-col">
            <div className="relative">
                <Skeleton height={200} width="100%" className="rounded-t-xl" />
            </div>
            <div className="py-4 space-y-3 h-full shadow-md shadow-gray-400 w-full">
                <div className="flex items-center gap-2 px-3">
                    <Skeleton width={150} height={20} />
                </div>
                <div className="flex justify-center items-center">
                </div>
                <div className="flex justify-center font-bold text-[14px] text-[#00247D]">
                    <Skeleton width={80} height={20} />
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
