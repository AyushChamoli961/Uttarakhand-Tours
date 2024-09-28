"use client"
import React from 'react';
import { ClipLoader } from 'react-spinners';
import { HashLoader } from 'react-spinners';
import { Circles } from 'react-loader-spinner';


const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Circles
                height="80"
                width="80"
                color="#00247D"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    );
};

export default Loading;
