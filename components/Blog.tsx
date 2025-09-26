import React from 'react';
import { BlogPost } from '../types';
import Section from './Section';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogProps {
  posts: BlogPost[];
}

const BlogPostPreview: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="block h-full">
      <motion.div
        className="flex flex-col rounded-lg shadow-lg overflow-hidden h-full"
        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-xl font-semibold font-serif text-gray-900">{post.title}</p>
            <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{post.author}</span>
              <div className="h-10 w-10 rounded-full bg-iwc-blue flex items-center justify-center text-white font-bold">{post.author.charAt(0)}</div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{post.author}</p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <Section
      id="blog"
      title="News & Updates"
      subtitle="Stay informed about our latest activities, stories, and announcements."
      className="bg-gray-50"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostPreview key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <a href="#" className="text-base font-medium text-iwc-blue hover:text-blue-900">
          View all posts &rarr;
        </a>
      </div>
    </Section>
  );
};

export default Blog;