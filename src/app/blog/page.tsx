import React from 'react';
import BlogsSection from './components/blogSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog"
};

const BlogPage = () => {
  return (
    <div>
      <BlogsSection />
    </div>
  );
};

export default BlogPage;
