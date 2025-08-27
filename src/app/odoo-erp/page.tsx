'use client';

import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Customization from './components/Customization';
import Revolutionizing from './components/Revolutionizing';
import WhyChooseOdoo from './components/WhyChooseOdoo';
import WhyChooseUs from './components/WhyChooseUs';
import Client from './components/Client';
import { getOdooPageData } from '../apiServices/apiServices';
import Shimmer from './components/Shimmer';
import { Metadata } from 'next';



interface OdooService {
    title: string;
}

interface OdooCustomization {
    title: string;
}

interface OdooRevolutionizing {
    _id: number;
    description: string;
}

interface OdooClient {
    _id: string;
    image: { fileUrl: string }
}

interface WhyChooseOdooItem {
    _id: string;
    description: string;
}

interface ServiceCard {
    _id: string;
    title: string;
    description: string;
}

interface WhyChooseUsItem {
    _id: string;
    image: { fileUrl: string }
    title: string;
    description: string;
}

interface HeroContent {
    iconType: string;
    image?: { fileUrl: string };
    odoo_points: string;
}

interface SectionItem {
    _id: string;
    section:
    | 'heroSection'
    | 'service'
    | 'service-cards'
    | 'odoo-customization'
    | 'revolutionizing'
    | 'clients'
    | 'whyChooseOdoo'
    | 'whyChooseUs';
    content: any;
    createdAt: string;
    updatedAt: string;
    __v: number;
}


const findSections = <T,>(
    sectionName: SectionItem['section'],
    data: SectionItem[] | null
): T | undefined => {
    return data?.find((item) => item.section === sectionName)?.content as T | undefined;
};


const OdooPage = () => {
    const [odooData, setOdooData] = useState<SectionItem[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOdooData = async () => {
            try {
                setLoading(true);
                const data = await getOdooPageData();
                setOdooData(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching Odoo page data:', err);
                setError('Failed to load Odoo ERP page content');
            } finally {
                setLoading(false);
            }
        };

        fetchOdooData();
    }, []);

    const heroData = findSections<HeroContent[]>('heroSection', odooData);
    const serviceData = findSections<OdooService>('service', odooData);
    const serviceCardData = findSections<ServiceCard[]>('service-cards', odooData);
    const customizationData = findSections<OdooCustomization>('odoo-customization', odooData);
    const revolutionizingData = findSections<OdooRevolutionizing[]>('revolutionizing', odooData);
    const clientData = findSections<OdooClient[]>('clients', odooData);
    const whyChooseOdooData = findSections<WhyChooseOdooItem[]>('whyChooseOdoo', odooData);
    const whyChooseUsData = findSections<WhyChooseUsItem[]>('whyChooseUs', odooData);

    if (loading) {
        return (
            <div>
                <Shimmer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-screen flex items-center justify-center text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="bg-white">
            {heroData && <Hero heroData={heroData} />}
            {serviceData && serviceCardData && (
                <Services serviceData={serviceData} serviceCardData={serviceCardData} />
            )}
            {whyChooseUsData && <WhyChooseUs whyChooseUs={whyChooseUsData} />}
            {customizationData && <Customization customizationData={customizationData} />}
            {revolutionizingData && <Revolutionizing revolutionizingData={revolutionizingData} />}
            {clientData && <Client clientData={clientData} />}
            {whyChooseOdooData && <WhyChooseOdoo whyChoosData={whyChooseOdooData} />}
            {/* {whyChooseOdooData && <WhyChooseOdooMobile whyChoosData={whyChooseOdooData} />} */}
        </div>
    );
};

export default OdooPage;