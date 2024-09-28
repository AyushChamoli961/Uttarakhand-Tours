import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const loading = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white py-5 px-6 rounded-lg shadow-lg w-10/12 md:w-5/12 mx-auto mt-10 relative">
                <h2 className="md:text-xl font-bold mb-4 text-center">
                    <Skeleton height={27} />
                </h2>
                <div className="my-10">
                    <Skeleton height={75} />
                    {/* loading ... */}
                </div>
                <div className="absolute inset-0 flex items-end -mb-5 justify-center">
                    <Skeleton width={110} height={35} baseColor="#cbd5e1" />
                </div>
            </div>
        </div>
    )
}

export default loading
