"use client";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

interface Country {
  name: string;
  coordinates: [number, number];
  flagCode: string;
  height: number;
  fill: string;
  text: string;
  flag: string;
}

const countryAddresses: Record<string, string> = {
  India: `INDIA\nWest Hill, Kozhikode,\n2nd Floor, UAQ Business Centre Kozhikode`,
  Kuwait: `KUWAIT\nOffice 28 ,Floor M, Al Othman complex\n Ibn Khaldoun St, Block 3, Hawally`,
};

const countries: Country[] = [
  {
    name: "Kuwait",
    coordinates: [43.2, 29.1],
    flagCode: "kw",
    height: 75,
    fill: "#8f8e8e",
    text: "KW",
    flag: "https://flagcdn.com/w320/kw.png",
  },
  {
    name: "India",
    coordinates: [78.8, 20.8],
    flagCode: "in",
    height: 110,
    fill: "#8f8e8e",
    text: "IN",
    flag: "https://flagcdn.com/w320/in.png",
  },
];

const WorldMaps = () => {
  const [tooltip, setTooltip] = useState<{
    name: string;
    address: string;
    x: number;
    y: number;
  } | null>(null);

  console.log(tooltip);

  return (
    <div className="bg-white">
      <div className="w-full max-w-6xl mx-auto p-5">
        <div className="flex justify-center">
          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl bg-gradient-to-r from-[#AFAFAF] to-[#494949] inline-block text-transparent bg-clip-text text-center font-bold">
            Our Presence
          </h1>
        </div>

        <div className="w-full md:h-96 h-60 relative rounded-lg overflow-hidden map-container">
          <ComposableMap
            projectionConfig={{ scale: 180 }}
            style={{
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
              pointerEvents: "auto",
              cursor: "default",
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#EAEAEC"
                    stroke="#D6D6DA"
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
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
                  const container = e.currentTarget.closest(
                    ".map-container"
                  ) as HTMLElement;
                  const rect = container?.getBoundingClientRect();
                  if (!rect) return;

                  setTooltip({
                    name,
                    address: countryAddresses[name] || name,
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                onMouseLeave={() => setTooltip(null)}
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  const container = e.currentTarget.closest(
                    ".map-container"
                  ) as HTMLElement;
                  const rect = container?.getBoundingClientRect();
                  if (!rect) return;

                  setTooltip({
                    name,
                    address: countryAddresses[name] || name,
                    x: touch.clientX - rect.left,
                    y: touch.clientY - rect.top,
                  });
                }}
                onTouchEnd={() => {
                  setTimeout(() => setTooltip(null), 2500);
                }}
              >
                <g
                  transform="translate(-14, -30) scale(1.5)"
                  style={{ cursor: "pointer" }}
                >
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
          {tooltip && (
            <div
              className="absolute pointer-events-none px-3 py-2 text-sm bg-white text-black rounded-md shadow whitespace-pre-line"
              style={{
                top: tooltip.y - 85,
                left: tooltip.x,
                transform: "translateX(-50%)",
                zIndex: 50,
              }}
            >
              {tooltip.address}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorldMaps;
