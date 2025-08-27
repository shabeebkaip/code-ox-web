import React, { useState, useEffect } from "react";
import tick from "../../../assets/svg/dummy.svg";
import cube from "../../../assets/png/cubeGlass.png";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroImage {
  fileUrl: string;
}

interface HeroDataItem {
  iconType: string;
  image?: HeroImage;
  odoo_points: string;
}

interface ProcessedHeroData extends HeroDataItem {
  angle: number;
  index: number;
}

interface HeroProps {
  heroData: HeroDataItem[];
}

const Hero: React.FC<HeroProps> = ({ heroData }) => {
  const [points, setPoints] = useState<ProcessedHeroData[]>([]);
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType("mobile");
      } else if (width < 900) {
        setDeviceType("smallTablet");
      } else if (width < 1035) {
        setDeviceType("tablet");
      } else if (width < 1300) {
        setDeviceType("smallLaptop");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Maximum branches is 10, each branch has a space of 36 degrees (360/10)
    const maxBranches = 10;
    const branchSpacing = 36; // 360/10

    // Calculate how many branches we'll actually show
    const numBranches = Math.min(heroData.length, maxBranches);

    // Start angle (270 degrees would be at the top of the circle)
    const startAngle = 270;

    const processedData = heroData.slice(0, maxBranches).map((point, index) => {
      // Calculate the angle for this point based on fixed spacing
      // For example: if we have 2 points, they'll be at startAngle and startAngle + 36
      const angle = (startAngle + branchSpacing * index) % 360;
      return { ...point, angle, index };
    });

    setPoints(processedData);
  }, [heroData]);

  const getIconComponent = (
    iconType: string,
    size = 20,
    fileUrl: string | null = null
  ) => {
    const iconSrc = fileUrl || tick;
    return (
      <Image
        src={iconSrc}
        width={300}
        height={300}
        alt={`${iconType} icon`}
        style={{ width: size, height: size }}
      />
    );
  };

  const calculatePosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian),
    };
  };

  const getResponsiveValues = () => {
    switch (deviceType) {
      case "mobile":
        return {
          radius: 100,
          centerX: 150,
          centerY: 150,
          lineHeight: 30,
          labelRadius: 140,
          labelWidth: 140,
          iconSize: 16,
          labelYAdjustment: 20,
        };
      case "smallTablet":
        return {
          radius: 110,
          centerX: 160,
          centerY: 160,
          lineHeight: 30,
          labelRadius: 160,
          labelWidth: 165,
          iconSize: 16,
          labelYAdjustment: 20,
        };

      case "tablet":
        return {
          radius: 130,
          centerX: 170,
          centerY: 180,
          lineHeight: 35,
          labelRadius: 180,
          labelWidth: 170,
          iconSize: 18,
          labelYAdjustment: 25,
        };
      case "smallLaptop":
        return {
          radius: 140,
          centerX: 180,
          centerY: 200,
          lineHeight: 38,
          labelRadius: 190,
          labelWidth: 190,
          iconSize: 19,
          labelYAdjustment: 28,
        };
      default: // desktop
        return {
          radius: 150,
          centerX: 190,
          centerY: 220,
          lineHeight: 40,
          labelRadius: 230, // increase from 200 to 230
          labelWidth: 230,
          iconSize: 20,
          labelYAdjustment: 35, // also increase a bit
        };
    }
  };

  const {
    radius,
    centerX,
    centerY,
    lineHeight,
    labelRadius,
    labelWidth,
    iconSize,
    labelYAdjustment,
  } = getResponsiveValues();

  const renderMobileList = () => {
    return (
      <motion.div
        className="flex flex-col w-full space-y-2 mt-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        {heroData.slice(0, 10).map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 rounded-full px-4 py-2 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-white p-2 rounded-full mr-2">
              {getIconComponent(item.iconType, iconSize, item.image?.fileUrl)}
            </div>
            <div
              className={`text-${
                deviceType === "mobile" ? "xs" : "sm"
              } text-black`}
              dangerouslySetInnerHTML={{ __html: item?.odoo_points }}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const renderCircularView = () => {
    return (
      <motion.div
        className={`relative ${
          deviceType === "tablet"
            ? "w-[360px] h-[360px]"
            : deviceType === "smallLaptop"
            ? "w-[370px] h-[370px]"
            : "w-[380px] h-[380px]"
        } xl:w-[360px] xl:h-[360px] lg:h-[330px] lg:w-[330px]'`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute border-2 border-gray-300 rounded-full"
          style={{
            width: radius * 2,
            height: radius * 2,
            left: centerX - radius,
            top: centerY - radius,
          }}
        ></div>

        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: centerX,
            top: centerY,
          }}
        >
          <div className="flex items-center justify-center">
            <span className="text-7xl font-bold">
              <span className="text-[#A54782]">o</span>
              <span className="text-gray-400">doo</span>
            </span>
          </div>
        </div>

        {points.map((point, index) => {
          const pos = calculatePosition(point.angle, radius);
          const nodeX = centerX + pos.x;
          const nodeY = centerY + pos.y;

          const customLabelRadius = labelRadius;
          const labelPos = calculatePosition(point.angle, customLabelRadius);
          const labelX = centerX + labelPos.x;
          let labelY = centerY + labelPos.y;

          // Special adjustments for top and bottom points if needed
          if (point.angle === 270) {
            // Top point
            labelY -= labelYAdjustment;
          } else if (point.angle === 90) {
            // Bottom point
            labelY += labelYAdjustment;
          }

          const lineEndPos = calculatePosition(
            point.angle,
            radius + lineHeight
          );
          const lineEndX = centerX + lineEndPos.x;
          const lineEndY = centerY + lineEndPos.y;

          return (
            <React.Fragment key={index}>
              {/* Dot on the circle */}
              <motion.div
                className="absolute bg-black rounded-full w-4 h-4"
                style={{
                  left: nodeX - 8,
                  top: nodeY - 8,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index }}
              ></motion.div>

              {/* Line pointing outward */}
              <motion.div
                className="absolute bg-black"
                style={{
                  width: "2px",
                  height: Math.sqrt(
                    Math.pow(lineEndX - nodeX, 2) +
                      Math.pow(lineEndY - nodeY, 2)
                  ),
                  left: nodeX,
                  top: nodeY,
                  transformOrigin: "0 0",
                  transform: `rotate(${
                    Math.atan2(lineEndY - nodeY, lineEndX - nodeX) *
                      (180 / Math.PI) -
                    80
                  }deg)`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index }}
              ></motion.div>

              {/* Label box */}
              <motion.div
                className="absolute rounded-full px-3 py-1 lg:px-4 md:px-3 md:py-2 flex items-center bg-gradient-to-l from-white to-gray-300 border border-gray-300"
                style={{
                  left: labelX - labelWidth / 10,
                  top: labelY - 20,
                  minWidth:
                    deviceType === "smallTablet"
                      ? labelWidth - 8
                      : labelWidth - 15,
                  maxWidth: labelWidth,
                  zIndex: index === 1 || index === points.length - 1 ? 10 : 1,
                  fontSize:
                    deviceType === "mobile"
                      ? "0.7rem"
                      : deviceType === "smallTablet"
                      ? "0.75rem"
                      : deviceType === "tablet"
                      ? "0.8rem"
                      : "0.875rem",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                <div
                  className={`bg-white p-${
                    deviceType === "mobile" ? "1" : "2"
                  } rounded-full mr-${deviceType === "mobile" ? "1" : "2"}`}
                >
                  {getIconComponent(
                    point.iconType,
                    iconSize,
                    point?.image?.fileUrl
                  )}
                </div>
                <div
                  className={`text-${
                    deviceType === "mobile" ? "xs" : "sm"
                  } text-black`}
                  dangerouslySetInnerHTML={{ __html: point?.odoo_points }}
                />
              </motion.div>
            </React.Fragment>
          );
        })}
      </motion.div>
    );
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className=" flex flex-col custom-flex lg:flex-row container mx-auto md:justify-between justify-around items-center p-4 md:p-8 rounded-lg w-full min-h-[50vh] sm:h-[60vh] lg:h-[80vh] ">
        <div className="mb-4 md:mb-8 text-center md:text-left">
          <motion.h1
            className="bg-gradient-to-r from-[#AFAFAF] to-[#494949] inline-block text-transparent bg-clip-text text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Odoo <br className="hidden md:block" /> Customization
          </motion.h1>
        </div>

        <motion.div
          animate={{
            y: [0, -10, 5, -7, 0],
            x: [0, 5, -5, 7, 0],
            rotate: [0, 3, -2, 1, 0],
            scale: [1, 1.07, 0.98, 1.02, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute left-[-6px] md:bottom-0 sm:bottom-[-15%] bottom-[-20%]"
        >
          <Image
            src={cube}
            alt="cube"
            width={250}
            height={250}
            className="md:opacity-50 opacity-80 lg:h-[200px] lg:w-[200px] md:h-[170px] md:w-[170px] sm:h-[100px] sm:w-[100px] h-[70px] w-[70px]"
          />
        </motion.div>

        {deviceType === "mobile" ? (
          <div className="w-full">{renderMobileList()}</div>
        ) : (
          <div className="w-full flex justify-center">
            {renderCircularView()}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Hero;
