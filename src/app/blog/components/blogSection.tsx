'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getBlogs, Blog } from '@/app/apiServices/apiServices';
import { useRouter } from 'next/navigation';
import Shimmer from '@/app/case-study/components/Shimmer';




const BlogsSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getBlogs()
      .then(setBlogs)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleNavigate = (id: Blog['id']) => {

    router.push(`/blog/${id}`);
  };


  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white min-h-screen">
      <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 relative md:pb-12">
        <span className="bg-gradient-to-b from-gray-400 to-transparent bg-clip-text text-transparent">
          BLOG
        </span>
      </h2>
      <div className="max-w-7xl mx-auto space-y-8">
        {
          loading ? (
            Array(3)
              .fill(null)
              .map((_, index) => <Shimmer key={index} />)
          ) : (
            blogs.map((blog, idx) => (
              <div
                key={blog.id}
                className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border ${idx === 0 ? 'border-teal-300' : 'border-gray-300'}`}
              >
                {blog.image?.fileUrl && (
                  <div className="w-full md:w-1/3">
                    <Image
                      src={blog.image.fileUrl}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="rounded-lg object-contain w-full max-w-[350px] mx-auto"
                      unoptimized
                    />
                  </div>
                )}
                <div className="w-full md:w-2/3 space-y-2 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    {blog.title}
                  </h3>
                  <div className='flex gap-5 items-center'>
                    {blog.profileImage?.fileUrl ? (
                      <Image
                        src={blog.profileImage.fileUrl}
                        alt={blog?.title || 'Blog Image'}
                        width={4000}
                        height={4000}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                    ) : (
                      <span role="img" aria-label="profile">👤</span>
                    )}
                    <p className="text-gray-600 font-semibold"> {blog.name}</p>
                  </div>
                  <p className="text-gray-500 line-clamp-3" dangerouslySetInnerHTML={{ __html: blog?.content }}>
                  </p>
                  <button
                    onClick={() => handleNavigate(blog?.id)}
                    className="mt-3 px-4 py-1 text-sm border border-black rounded-full hover:bg-gray-100 transition text-black cursor-pointer"
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))
          )
        }

      </div>
    </section>
  );
};

export default BlogsSection;
