import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
    return (
        <div className="">
            {/* Skeleton for image */}
            <Skeleton height={200} width="100%" className="rounded-t-xl" />

            <div className="py-4 shadow-md shadow-gray-400 w-full">
                {/* Skeleton for title */}
                <div className="px-3">
                    <Skeleton height={24} width="70%" />
                </div>

                {/* Skeleton for list of details */}
                <div className="px-3 text-[14px] mt-2">
                    <ul className="space-y-2">
                        <li><Skeleton height={18} width="100%" /></li>
                        <li><Skeleton height={18} width="100%" /></li>
                        <li><Skeleton height={18} width="100%" /></li>
                    </ul>
                </div>

                {/* Skeleton for button/price */}
                <div className="flex justify-center font-bold text-[14px] text-gray-400 mt-4">
                    <Skeleton height={20} width="50%" />
                </div>
            </div>
        </div>

    );
};

export default SkeletonCard;
