// import React from 'react'
// import Image from "next/image";
// import cube from "../../../assets/png/cubeGlass.png";
// import bubble from '../../../assets/svg/bubble.svg';
// import investment from '../../../assets/svg/investment.svg';
// import invest from '../../../assets/svg/investment-cropped.svg';
// import { motion } from 'framer-motion';

// const Hero = ({ data }: { data: { title: string } }) => {
//   return (

//     <div className="lg:min-h-[90vh] md:min-h-[75vh] min-h-[80vh] flex  flex-col md:flex-row text-center sm:text-left justify-between md:px-10 px-5 relative ">
//       <div className=" w-full  md:w-[63%] sm:w-[85%] mt-5  
//        sm:pl-10 md:pl-14 lg:pl-22 2xl:pl-35
//        2xl:mt-44 xl:mt-35 lg:mt-30 md:mt-25 
//        z-10  md:leading-loose lg:leading-loose">

//         <motion.h1
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className='bg-gradient-to-r from-[#AFAFAF] to-[#494949] inline-block text-transparent bg-clip-text lg:text-7xl text-5xl font-bold mb-8'
//         >
//           Who we are
//         </motion.h1>
//         <p
//           className='text-[#A3A3A3] px-1 2xl:text-[36px] xl:text-[29px] lg:text-[23px] md:text-xl sm:text-lg text-[18px] 2xl:leading-17 xl:leading-14 md:leading-10'
//           dangerouslySetInnerHTML={{ __html: data.title }}
//         ></p>

//       </div>


//       <motion.div
//   animate={{
//     x: [0, 10, 20, 10, 0, -10, -20, -10, 0],
//     y: [0, -5, -10, -15, -10, -5, 0, 5, 10],
//     rotate: [0, 3, -2, 2, -1, 1, 0],
//     scale: [1, 1.01, 1.03, 1.01, 1],
//   }}
//   transition={{
//     duration: 14,
//     repeat: Infinity,
//     ease: 'easeInOut',
//   }}
//   className="absolute bottom-0 left-0 lg:left-[-4%]"
// >
//   <Image
//     src={cube}
//     alt="cube"
//     width={250}
//     height={250}
//     className="opacity-50 lg:h-[200px] lg:w-[200px] md:w-[160px] md:h-[160px] sm:h-[130px] sm:w-[130px] h-[70px] w-[70px]"
//   />
// </motion.div>



//       <div className='md:hidden flex justify-center'>
//         <div className='relative w-[65%] h-[42%] z-10'>
//           <Image
//             src={invest}
//             alt="investment"
//             width={480}
//             height={480}
//             className="object-contain"
//           />

//           <div className='absolute top-0 left-[0] w-[40%] h-[60%] z-[-1]'>
//             <Image
//               src={bubble}
//               alt="bubble"
//               width={250}
//               height={250}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>


//       <div className=' hidden md:block'>

//         <div className='absolute top-[10%] right-[20%]  w-[25%] h-[30%] z-0'>
//           <Image
//             src={bubble}
//             alt="bubble"
//             width={240}
//             height={240}
//             className="object-contain w-[100%] h-auto"
//           />

//         </div>


//         <div className="absolute top-[18%] right-[0.1%]  w-[40%] h-[50%] z-0">
//           <Image
//             src={investment}
//             alt="investment"
//             width={420}
//             height={420}

//             className="object-contain w-[100%] h-auto"
//           />
//         </div>

//       </div>



//     </div>
//   )
// }

// export default Hero;





import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ data }: { data: { title: string } }) => {
  return (
    <div className="h-[85vh] flex items-center justify-center px-5 md:px-10 text-center relative overflow-hidden bg-gradient-to-br from-[#4e1c60] via-[#2f0d49] to-[#201c60]"
    //  style={{ backgroundImage: "url('/bglines.png')" }}
     >
      <div className="absolute inset-0 z-10 bg-black/10 bg-[url('/pixelmap.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-5xl w-full z-10">

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl sm:text-5xl lg:text-5xl leading-15 font-bold mb-4"
        >
         Powering Progress Through Innovation
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-white text-base sm:text-lg md:text-xl lg:text-2xl px-2 sm:px-6 leading-relaxed"
        >
          At Code Ox Technologies, we don’t just follow trends — we create them. We're a team of forward-thinkers, engineers, and problem-solvers dedicated to transforming ideas into smart, scalable digital solutions. Whether you're a startup or an enterprise, we help you unlock new possibilities, streamline operations, and accelerate growth in a constantly evolving tech landscape.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 px-4"
        >
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-white/80 mb-2">5+</div>
            <div className="text-white/80 text-sm md:text-lg">years of excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-white/80 mb-2">50+</div>
            <div className="text-white/80 text-sm md:text-lg">projects delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-white/80 mb-2">35+</div>
            <div className="text-white/80 text-sm md:text-lg">happy clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-white/80 mb-2">25+</div>
            <div className="text-white/80 text-sm md:text-lg">in-house engineers</div>
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default Hero;




