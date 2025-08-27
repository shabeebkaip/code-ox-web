import React, { useState, useEffect, useRef } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  GeographyProps,
} from "react-simple-maps";
import debounce from "lodash.debounce";

// Type for the country prop
type Country = {
  country: string;
};

type BasicMapProps = {
  country: Country[];
};

type TooltipPosition = {
  x: number;
  y: number;
};

type GeoProperties = {
  name: string;
};

interface CustomGeographyProps extends GeographyProps {
  properties: GeoProperties;
}

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const BasicMap: React.FC<BasicMapProps> = ({ country }) => {
  const [tooltipContent, setTooltipContent] = useState<string>("");
  const [tooltipPosition, setTooltipPosition] =
    useState<TooltipPosition>({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const highlightedCountries: string[] =
    country?.map((item) => item.country) || [];

  const countryMappings: Record<string, string> = {
    "United States of America": "United States",
    "Bosnia and Herzegovina": "Bosnia & Herzegovina",
    "Democratic Republic of the Congo": "Congo (DRC)",
    "Republic of the Congo": "Congo (Republic)",
    "Republic of Korea": "South Korea",
    "Dem. Rep. Korea": "North Korea",
    "Russian Federation": "Russia",
    "United Republic of Tanzania": "Tanzania",
    "United Kingdom": "UK",
    "United Arab Emirates": "UAE",
    "Kuwait": "Kuwait",
  };

  const countryAddresses: Record<string, string> = {
    India: `INDIA\nWest Hill, Kozhikode, 2nd Floor, UAQ Business Centre Kozhikode`,
    Kuwait: `KUWAIT\nP O Box: 33055 Rumaithiya 25561 Kuwait`,
  };

  const countryCoordinates: Record<string, [number, number]> = {
    "United States": [-97.0, 38.0],
    India: [78.9629, 20.5937],
    UK: [-1.5, 52.3555],
    UAE: [54.0, 24.0],
    Russia: [100.6197, 60.0],
    "South Korea": [127.7669, 35.9078],
    "North Korea": [127.5101, 40.3399],
    Tanzania: [34.8888, -6.369],
    "Congo (DRC)": [22.9375, -2.9814],
    "Congo (Republic)": [15.8277, -0.228],
    "Bosnia & Herzegovina": [17.6791, 43.9159],
    Kuwait: [47.4818, 29.3117],
  };

  const countryCodes: Record<string, string> = {
    "United States": "us",
    India: "in",
    UK: "gb",
    UAE: "ae",
    Russia: "ru",
    "South Korea": "kr",
    "North Korea": "kp",
    Tanzania: "tz",
    "Congo (DRC)": "cd",
    "Congo (Republic)": "cg",
    "Bosnia & Herzegovina": "ba",
    Kuwait: "kw",
  };

  const countrySet: Set<string> = new Set(
    highlightedCountries.map((c) => c.toLowerCase().trim())
  );

  const isCountryHighlighted = (geoCountryName: string): boolean => {
    if (countrySet.has(geoCountryName.toLowerCase().trim())) return true;

    const mappedName = countryMappings[geoCountryName];
    if (mappedName && countrySet.has(mappedName.toLowerCase().trim())) {
      return true;
    }

    return false;
  };

  const trackMousePosition = debounce((e: MouseEvent) => {
    if (showTooltip) {
      setTooltipPosition({ x: e.clientX, y: e.clientY });
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("mousemove", trackMousePosition);
    return () => {
      window.removeEventListener("mousemove", trackMousePosition);
    };
  }, [showTooltip]);

  const handleMouseEnter = (geo: CustomGeographyProps): void => {
    const geoCountryName: string = geo.properties.name;

    if (isCountryHighlighted(geoCountryName)) {
      const mappedName = countryMappings[geoCountryName] || geoCountryName;
      const tooltipText = countryAddresses[mappedName] || mappedName;
      setTooltipContent(tooltipText);
      setShowTooltip(true);
    }
  };


  const handleMouseLeave = (): void => {
    setTooltipContent("");
    setShowTooltip(false);
  };

  return (
    <div className="flex flex-col gap-10 relative w-full max-w-6xl mx-auto ">
      <div className="text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl bg-gradient-to-r from-[#AFAFAF] to-[#494949] inline-block text-transparent bg-clip-text text-center font-bold">
        Our Presence
      </div>

      <div className="w-full h-96 relative cursor-pointer" ref={mapRef}>
        <ComposableMap
          projection="geoMercator"
          width={900}       // increase width here
          height={600}      // increase height here
          className="w-full h-full"
        >
          <Geographies geography={geoUrl} className="w-full">
            {({ geographies }) =>
              geographies.map((geo) => {
                const geoCountryName = geo.properties.name;
                const isHighlighted = isCountryHighlighted(geoCountryName);

                return (
                  <Geography
                    key={geo.rsmKey || geo.id}
                    geography={geo}
                    onMouseEnter={() => handleMouseEnter(geo)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      default: {
                        fill: isHighlighted ? "#2952FF" : "#D6D6DA",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: isHighlighted ? "#3000FF" : "#F87171",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: {
                        fill: isHighlighted ? "#1E3A8A" : "#EF4444",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {highlightedCountries.map((countryName, index) => {
            const lowerName = countryName.toLowerCase().trim();
            const mappedEntry = Object.entries(countryMappings).find(
              ([key, value]) =>
                value.toLowerCase().trim() === lowerName ||
                key.toLowerCase().trim() === lowerName
            );
            const resolvedName = mappedEntry ? mappedEntry[1] : countryName;
            const coords = countryCoordinates[resolvedName];

            if (!coords) return null;

            const fill = "#4e4f53";
            const flag =
              `https://flagcdn.com/w320/${countryCodes[resolvedName]?.toLowerCase() || "un"}.png`;

            return (
              <Marker key={index} coordinates={coords}>
                <g transform="translate(-35, -68) scale(3)">
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
            );
          })}
        </ComposableMap>

        {showTooltip && (
          <div
            className="fixed bg-white text-black px-2 py-1 rounded shadow text-sm font-medium z-50"
            style={{
              left: tooltipPosition.x + 10,
              top: tooltipPosition.y - 30,
              pointerEvents: "none",
            }}
            dangerouslySetInnerHTML={{ __html: tooltipContent.replace(/\n/g, "<br>") }}
          />
        )}
      </div>
    </div>
  );
};

export default BasicMap;
