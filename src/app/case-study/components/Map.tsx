'use client'
import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'


interface GeographyProperties {
  name: string
}

interface GeographyType {
  properties: GeographyProperties
  rsmKey: string
}

interface Country {
  name: string
  coordinates: [number, number]
  code: string
  color: string
  flag: string
}

const highlightedCountries: Country[] = [
  { 
    name: 'Saudi Arabia', 
    coordinates: [45.0792, 23.8859], 
    code: 'sa', 
    color: '#c95823', 
    flag: 'https://flagcdn.com/w320/sa.png' 
  },
  { 
    name: 'Kuwait', 
    coordinates: [47.9783, 29.3759], 
    code: 'kw', 
    color: '#1A5F7A', 
    flag: 'https://flagcdn.com/w320/kw.png' 
  },
  { 
    name: 'Qatar', 
    coordinates: [51.1839, 25.3548], 
    code: 'qa', 
    color: '#7a1a5f', 
    flag: 'https://flagcdn.com/w320/qa.png' 
  },
  { 
    name: 'Bahrain', 
    coordinates: [50.6378, 26.0667], 
    code: 'bh', 
    color: '#5f7a1a', 
    flag: 'https://flagcdn.com/w320/bh.png' 
  },
  { 
    name: 'United Arab Emirates', 
    coordinates: [53.8478, 23.4241], 
    code: 'ae', 
    color: '#1a7a5f', 
    flag: 'https://flagcdn.com/w320/ae.png' 
  },
  { 
    name: 'Ireland', 
    coordinates: [-8.2439, 53.4129], 
    code: 'ie', 
    color: '#5f1a7a', 
    flag: 'https://flagcdn.com/w320/ie.png' 
  },
  { 
    name: 'India', 
    coordinates: [78.9629, 20.5937], 
    code: 'in', 
    color: '#7a5f1a', 
    flag: 'https://flagcdn.com/w320/in.png' 
  }
]


const Map = () => {
  const [tooltipContent, setTooltipContent] = useState("")
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const handleMouseEnter = (geo: GeographyType, evt: React.MouseEvent) => {
    const countryName = geo.properties.name
    setTooltipContent(countryName)
    setTooltipPosition({ x: evt.clientX, y: evt.clientY })
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  const handleMouseMove = (evt: React.MouseEvent) => {
    setTooltipPosition({ x: evt.clientX, y: evt.clientY })
  }

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      
      <p className="text-center text-gray-600 mb-4 text-xl">
        Global Footprint: Projects Across Continents
      </p>
      <div className="w-full h-[50vh] relative cursor-pointer">
        <ComposableMap
          projection="geoMercator"
          className="w-full h-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name
                const isHighlighted = highlightedCountries.some(
                  country => country.name.toLowerCase() === countryName.toLowerCase()
                )

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHighlighted ? '#c95823' : '#E0E0E0'}
                    stroke="#FFF"
                    strokeWidth={0.5}
                    onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    style={{
                      default: { outline: 'none' },
                      hover: {
                        fill: isHighlighted ? '#1A5F7A' : '#F5F5F5',
                        outline: 'none',
                        cursor: 'pointer'
                      },
                      pressed: { outline: 'none' }
                    }}
                  />
                )
              })
            }
          </Geographies>

          {highlightedCountries.map((country) => (
            <Marker coordinates={country.coordinates} key={country.name}>
              <g transform="translate(-18, -45) scale(1.5)">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  fill={country.color} 
                  stroke="#fff" 
                  strokeWidth="1"
                />
                <circle
                  cx="12"
                  cy="9"
                  r="2.5"
                  fill="white" 
                />

                <image
                  x="10"
                  y="7"
                  width="4"
                  height="4"
                  href={country.flag} 
                />
              </g>
            </Marker>
          ))}

        </ComposableMap>

        {tooltipVisible && (
          <div
            className="fixed bg-black text-white px-2 py-1 rounded text-sm pointer-events-none"
            style={{
              left: `${tooltipPosition.x + 10}px`,
              top: `${tooltipPosition.y - 40}px`,
              transform: 'translate(-50%, -100%)',
              zIndex: 10,
            }}
          >
            {tooltipContent}
          </div>
        )}
      </div>
    </div>
  )
}

export default Map