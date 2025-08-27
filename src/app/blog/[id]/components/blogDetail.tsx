'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import backArrow from '../../../../../public/backArrow.svg';
import { getBlogById, Blog, getRecentPost, RecentBlog } from '@/app/apiServices/apiServices';
import Shimmer from '@/app/shared/Shimmer';
import { motion } from 'framer-motion';

const BlogDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [recentPosts, setRecentPosts] = useState<RecentBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [createdDate, setCreatedDate] = useState<string>('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlog(data);
        if (data?.createdAt) {
          const date = new Date(data.createdAt);
          setCreatedDate(date.toLocaleDateString());
        }
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        setError('Unable to load blog');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const data = await getRecentPost(id);
        setRecentPosts(data);
      } catch (err) {
        console.error('Failed to fetch recent posts:', err);
        setError('Unable to load recent posts');
      }
    };

    if (id) {
      fetchRecentBlogs();
    }
  }, [id]);

  const handleChangeBlog = (newId: string) => {
    if (newId && newId !== id) {
      router.push(`/blog/${newId}`);
    }
  };

  const renderRecentPosts = () => (
    <div className="space-y-4">
      {recentPosts?.map((blog) => (
        <div
          key={blog._id}
          className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
          onClick={() => handleChangeBlog(blog._id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleChangeBlog(blog._id);
          }}
        >
          <div className="w-16 h-16 relative flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
            {blog.image?.fileUrl ? (
              <Image
                src={blog.image.fileUrl}
                alt={blog.title}
                width={64}
                height={64}
                className="object-cover w-full h-full"
                unoptimized
              />
            ) : (
              <div className="flex items-center justify-center text-gray-400 text-sm">No Image</div>
            )}
          </div>
          <p className="text-gray-900 font-semibold text-sm line-clamp-2">{blog.title}</p>
        </div>
      ))}
    </div>
  );


  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 text-white">
        <Shimmer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 text-white">
        <div>{error || 'Blog not found'}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
      <div className="md:w-[70%] w-full">
        <motion.button
          className="flex items-center gap-2 text-gray-600 hover:text-black mb-6"
          onClick={() => router.back()}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image src={backArrow} alt="Back" width={20} height={20} />
          <span className="text-sm font-medium">Back to Blogs</span>
        </motion.button>

        {blog.image?.fileUrl && (
          <div className="mb-6 w-full overflow-hidden rounded-xl shadow-md">
            <Image
              src={blog.image.fileUrl}
              alt="Blog Cover"
              width={1000}
              height={500}
              className="object-cover w-full h-[220px] md:h-[300px] lg:h-[400px]"
              unoptimized
            />
          </div>
        )}

        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 leading-tight">{blog.title}</h1>

        <div className="flex items-center gap-3 mb-6">
          {blog.profileImage?.fileUrl && (
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm">
              <Image
                src={blog.profileImage.fileUrl}
                alt={blog.name}
                width={40}
                height={40}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-800">{blog.name}</p>
            {createdDate && <p className="text-sm text-gray-500">{createdDate}</p>}
          </div>
        </div>

        <div className="prose prose-lg prose-neutral prose-headings:font-bold max-w-none text-gray-800 mb-10">
          <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
        </div>

        <div className="md:hidden">
          <h2 className="font-bold text-xl text-gray-800 mb-4">Recent Posts</h2>
          {renderRecentPosts()}
        </div>
      </div>

      <aside className="md:w-[28%] hidden md:block">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Recent Posts</h2>
        {renderRecentPosts()}
      </aside>
    </div>
  );

};

export default BlogDetail;
