'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Challenge {
  number: string;
  title: string;
  description: string;
}

const Challenges = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  useEffect(() => {
    const staticChallenges: Challenge[] = [
      {
        number: '1',
        title: "Bring down the job search process from months to days",
        description:
          "We made the users’ profiles resume-like to save employers the time it takes to download and read into multiple resumes. These minimalism-guided features added with the facility of having in-app interviews played a massive role in bringing the job search process timeline down.",
      },
      {
        number: '2',
        title: "Improve employer hiring efficiency",
        description:
          "Employers can now evaluate candidates faster and more effectively thanks to streamlined profile views and in-app interviewing options.",
      },
    ];

    setChallenges(staticChallenges);
  }, []);

  if (challenges.length === 0) {
    return <div className="p-10 text-gray-600">Loading challenges...</div>;
  }

  return (
    <div className="px-6 lg:px-20 py-16 bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <div className="lg:sticky lg:top-20 self-start">
          <h2 className="text-4xl font-semibold">
            Our Project Challenges
          </h2>
        </div>

        <div className="space-y-12">
          {challenges.map((challenge) => (
            <motion.div
              key={challenge.number}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="relative p-6 bg-white"
            >
              <span className="absolute -top-8 left-0 text-6xl lg:text-7xl font-bold text-gray-200 z-0">
                {challenge.number}
              </span>
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-4">{challenge.title}</h3>
                <p className="text-gray-700">{challenge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Challenges;
