'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getOurServiceDetailPage } from '@/app/apiServices/apiServices';
import Shimmer from '@/app/home/components/Shimmer';

type ServiceDetail = {
    content: string;
};



const OurServiceDetail = () => {
    const [data, setData] = useState<ServiceDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const router = useRouter();

    const handleNavigate = (href: string) => {
        router.push(href);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!params?.id) return;

            try {
                const response = await getOurServiceDetailPage(params.id as string);
                setData(response);
            } catch (error) {
                console.error('Error fetching service detail:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params?.id]);

    if (loading) return <div className="bg-white">
        <div><Shimmer /></div>
    </div>;

    return (
        <div className="bg-white min-h-[70vh] text-black flex flex-col justify-center">
            <div className="flex flex-col justify-between gap-10 h-full">
                {data?.content ? (
                    <>
                        <div className="max-w-6xl mx-auto p-6 space-y-6 text-center">
                            <h1
                                className="text-xl sm:text-2xl md:text-3xl font-medium"
                                dangerouslySetInnerHTML={{ __html: data.content }}
                            />
                        </div>
                        <div className="text-center mb-6">
                            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg transition" onClick={() => handleNavigate('/contact-us')}>
                                Know More
                            </button>

                        </div>
                    </>
                ) :
                    <div className="text-center py-10 text-red-500">No data found.</div>}
            </div>
        </div>
    );
};

export default OurServiceDetail;
