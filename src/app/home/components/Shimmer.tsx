'use client';

import React from 'react';

const Shimmer = () => {
    return (
        <div className='bg-white p-6 border border-gray-200 shadow-sm'>
            <div className="flex flex-col md:flex-row gap-6  animate-pulse min-h-[80vh] container mx-auto justify-center">

                <div className="w-full md:w-[75%] space-y-5 py-4 px-2  flex justify-center items-center flex-col">
                    <div className="h-15 bg-gray-200 rounded-md w-3/4" />
                    <div className="h-10 bg-gray-200 rounded-md w-1/2" />
                    <div className="h-5 bg-gray-200 rounded-md w-5/6" />
                    <div className="h-5 bg-gray-200 rounded-md w-full" />
                    <div className="h-5 bg-gray-200 rounded-md w-full" />
                    <div className="h-5 bg-gray-200 rounded-md w-5/6" />
                    <div className="h-10 bg-gray-200 rounded-md w-1/2" />
                    <div className="h-15 bg-gray-200 rounded-md w-3/4" />
                </div>
            </div>
        </div>

    );
};

export default Shimmer;
