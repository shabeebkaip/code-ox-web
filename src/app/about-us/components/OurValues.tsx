// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion'; // Install if not installed
// import gradientglass from '../../../assets/png/gradientglass.png';
// import cubeGlass1 from '../../../assets/png/cubeGlass1.png';

// interface Values {
//   id: string;
//   title: string;
//   description: string;
//   image?: {
//     fileUrl: string;
//   };
// }

// const OurValues = ({ data }: { data: Values[] }) => {
//   return (
//     <div className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       {/* Background Decorations */}
//       <div className="absolute top-[1%] right-[0%] h-[20%]">
//         <Image
//           src={gradientglass}
//           alt="gradientglass"
//           height={100}
//           width={100}
//           className="object-contain"
//         />
//       </div>

//       <motion.div
//         animate={{
//           y: [0, -20, 10, -10, 0],
//           rotate: [0, 5, -3, 2, 0],
//           scaleX: [1, 1.02, 0.98, 1.01, 1],
//           scaleY: [1, 0.98, 1.02, 0.99, 1],
//         }}
//         transition={{
//           duration: 12,
//           ease: 'easeInOut',
//           repeat: Infinity,
//         }}
//         className="absolute bottom-[7%] left-0 w-[20%] h-[20%] hidden sm:block"
//       >
//         <Image
//           src={cubeGlass1}
//           alt="cubeGlass1"
//           height={250}
//           width={250}
//           className="object-contain"
//         />
//       </motion.div>


//       <div className="mx-auto container py-10 text-center">
//         <motion.h2
//           className="bg-gradient-to-r from-[#848282] to-[#AFAFAF] inline-block text-transparent bg-clip-text md:text-5xl text-3xl font-semibold text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           Our Values
//         </motion.h2>
//       </div>

//       <div className="relative flex flex-wrap justify-center gap-10 mx-auto container">
//         {data.map((values, index) => (
//           <motion.div
//             key={values.id}
//             className="flex flex-col w-full sm:w-[45%] lg:w-[30%] items-center text-center border border-gray-200 rounded-4xl p-6 bg-white hover:shadow-2xl hover:border-gray-400 transition-all duration-300 group"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.15 }}
//           >
//             <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-gray-200 group-hover:scale-105 transition-transform duration-300">
//               {values?.image?.fileUrl && (
//                 <Image
//                   src={values?.image?.fileUrl}
//                   alt="Image"
//                   fill
//                   className='object-cover'
//                 />
//               )}
//             </div>

//             <div className="text-[18px] sm:text-[23px] md:text-[26px] lg:text-[29px] mb-2">
//               <h3 className="font-semibold text-gray-800">{values.title}</h3>
//             </div>

//             <div className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
//               <p className="text-gray-500">{values.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurValues;


import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, MapPin, Shield, UserCheck } from 'lucide-react';

const data = [
 {
    id: '1',
    title: 'Innovation Solution',
    description: 'We specialize in delivering cutting-edge, forward-thinking solutions that empower businesses to innovate, adapt, and grow in an ever-evolving digital landscape. Our goal is to turn ideas into impactful results that drive measurable success.',
    icon: Lightbulb
  },
  {
    id: '2',
    title: 'Robust Security',
    description: 'Our security-first approach ensures that your data, systems, and users are protected through advanced encryption, regular audits, and industry-best protocols. Trust us to safeguard what matters most to your organization.',
    icon: Shield
  },
  {
    id: '3',
    title: 'Advance Tech',
    description: 'Harnessing the latest advancements in technology, we build high-performance web and mobile applications that are scalable, reliable, and tailored to meet the unique needs of modern businesses across industries.',
    icon: Code
  },
  {
    id: '4',
    title: 'Client Priority',
    description: 'Clients are at the core of everything we do. We strive to deeply understand their objectives, deliver exceptional service, and exceed expectations by offering solutions that are both innovative and personalized.',
    icon: UserCheck
  },
  {
    id: '5',
    title: 'Find',
    description: 'With our smart location and discovery solutions, we help users easily find services, places, and opportunities with precision and ease—bringing convenience and value to both businesses and consumers.',
    icon: MapPin
  },
];

const OurValues = () => {
  return (
    <div className="relative bg-black py-20 px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-white md:text-5xl text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#6d03c2]">Values</span>
        </motion.h2>

      <div className="grid  grid-cols-1 gap-6 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative p-8 rounded-3xl bg-gradient-to-br  from-[#6d03c2]/20 to-[#21032c] backdrop-blur-md transition-all duration-300 shadow-md shadow-[#6d03c2]/30 cursor-pointer overflow-hidden"
          >
            <div className='flex flex-row gap-3 items-center '>
              <div>
            <div className="w-20 h-20  flex items-center justify-center  rounded-xl group-hover:scale-110 transition-transform duration-300">
              <item.icon className="w-8 h-8 text-white group-hover:text-[#6d03c2]" />
            </div>
            </div>
            <div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold group-hover:text-[#6d03c2] transition-colors duration-300 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
              {item.description}
            </p>
            </div>
            </div>

            <div className="absolute inset-0 rounded-3xl opacity-100 transition-all duration-500 bg-gradient-to-tr from-[#6d03c2]/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;


