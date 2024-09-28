import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
    return (
        <div className="w-full md:w-[20rem] rounded-t-3xl flex flex-col h-[22rem]">
            <div>
                {/* Skeleton for image */}
                <Skeleton height={200} width="100%" className="rounded-t-xl" />
            </div>
            <div className="py-4 space-y-3 h-full shadow-md shadow-gray-400 w-full">
                {/* Skeleton for arrival city, airline, and flight number */}
                <div className="flex items-center gap-2 px-3">
                    <Skeleton width={80} height={20} />
                    <Skeleton width={80} height={20} />
                    <Skeleton width={80} height={20} />
                </div>
                {/* Skeleton for flight details */}
                <div className="flex justify-center items-center">
                    <div className="text-[20px] leading-[24px] flex gap-3 text-center py-1 items-center">
                        <Skeleton width={300} height={70} />
                    </div>
                </div>
                {/* Skeleton for view details link */}
                <div className="flex justify-center font-bold text-[14px] text-gray-400">
                    <Skeleton width={100} height={20} />
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
