"use client"
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

interface Country {
    name: string;
    coordinates: [number, number];
    flagCode: string;
    height: number;
    fill: string;
    text: string;
    flag: string;
}


const countries: Country[] = [
    {
        name: 'Saudi Arabia',
        coordinates: [41.5, 20.5],
        flagCode: 'sa',
        height: 90,
        fill: '#8f8e8e',
        text: 'SA',
        flag: 'https://flagcdn.com/w320/sa.png'
    },
    {
        name: 'Kuwait',
        coordinates: [43.2, 29.1],
        flagCode: 'kw',
        height: 75,
        fill: '#8f8e8e',
        text: 'KW',
        flag: 'https://flagcdn.com/w320/kw.png'
    },
    {
        name: 'Qatar',
        coordinates: [53.5, 28.1],
        flagCode: 'qa',
        height: 100,
        fill: '#8f8e8e',
        text: 'QA',
        flag: 'https://flagcdn.com/w320/qa.png'
    },
    {
        name: 'Bahrain',
        coordinates: [48.8, 26.2],
        flagCode: 'bh',
        height: 80,
        fill: '#8f8e8e',
        text: 'BH',
        flag: 'https://flagcdn.com/w320/bh.png'
    },
    {
        name: 'United Arab Emirates',
        coordinates: [54.0, 23.0],
        flagCode: 'ae',
        height: 95,
        fill: '#8f8e8e',
        text: 'AE',
        flag: 'https://flagcdn.com/w320/ae.png'
    },
    {
        name: 'Ireland',
        coordinates: [-11.0, 53.5],
        flagCode: 'ie',
        height: 70,
        fill: '#8f8e8e',
        text: 'IE',
        flag: 'https://flagcdn.com/w320/ie.png'
    },
    {
        name: 'India',
        coordinates: [78.8, 20.8],
        flagCode: 'in',
        height: 110,
        fill: '#8f8e8e',
        text: 'IN',
        flag: 'https://flagcdn.com/w320/in.png'
    },
];

const WorldMaps = () => {

    const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);

    return (
        <div className='bg-white'>
            <div className="w-full max-w-6xl mx-auto p-4">
                <h2 className="text-center text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold bg-gradient-to-b from-gray-400 to-transparent bg-clip-text text-transparent mb-8">
                    OUR PROJECTS
                </h2>
                <p className="text-center text-gray-600 mb-2 text-xl">
                    Global Footprint: Projects Across Continents
                </p>

                <div className="w-full md:h-96 h-60 relative  rounded-lg overflow-hidden">
                    <ComposableMap projectionConfig={{ scale: 180 }} style={{
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                        pointerEvents: 'auto',
                        cursor: 'default'
                    }}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="#EAEAEC"
                                        stroke="#D6D6DA"
                                        style={{
                                            default: { outline: 'none' },
                                            hover: { outline: 'none' },
                                            pressed: { outline: 'none' },
                                        }}
                                    />
                                ))
                            }
                        </Geographies>

                        {countries.map(({ name, coordinates, fill, flag }) => (
                            <Marker
                                key={name}
                                coordinates={coordinates}
                                onMouseEnter={(e) => {
                                    const bounds = e.currentTarget.getBoundingClientRect();
                                    setTooltip({
                                        name,
                                        x: bounds.left + bounds.width / 2,
                                        y: bounds.top,
                                    });
                                }}
                                onMouseLeave={() => setTooltip(null)}
                            >
                                <g transform="translate(-14, -30) scale(1.5)" style={{ cursor: 'pointer' }}>
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                                        fill={fill}
                                        stroke="#fff"
                                        strokeWidth="1"
                                    />
                                    <circle cx="12" cy="9" r="5" fill="white" />
                                    <image x="9" y="6" width="6" height="6" href={flag} />
                                </g>
                            </Marker>
                        ))}

                    </ComposableMap>

                </div>
                {tooltip && (
                    <div
                        className="absolute pointer-events-none px-2 py-1 text-sm bg-black text-white rounded shadow"
                        style={{
                            top: tooltip.y - 30,
                            left: tooltip.x,
                            transform: 'translateX(-50%)',
                            zIndex: 50,
                        }}
                    >
                        {tooltip.name}
                    </div>
                )}

                {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {countries.map(({ name, flagCode }) => (
                        <div key={name} className="flex items-center space-x-2">
                            <img
                                src={`https://flagcdn.com/${flagCode}.svg`}
                                alt={`${name} flag`}
                                className="w-8 h-6 object-cover rounded-sm shadow"
                            />
                            <span className="text-sm font-medium text-gray-800">{name}</span>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default WorldMaps;
